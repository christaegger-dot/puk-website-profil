import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv.slice(2).find(arg => !arg.startsWith('--')) || project;
const input = resolve(target) === resolve(project) ? join(project, 'content') : resolve(target);
const asOfArg = process.argv.find(arg => arg.startsWith('--as-of='));
const asOf = new Date(`${asOfArg ? asOfArg.slice(8) : new Date().toISOString().slice(0, 10)}T00:00:00Z`);
const online = process.argv.includes('--online');
const maxAgeDays = 183;
const expectedIds = new Set([
  'hype-zueri', 'puk-erwachsene', 'ipw-junge-erwachsene', 'clienia-a2', 'dbt-therapeutensuche',
  'pro-mente-sana', 'stand-by-you', 'vask-zuerich', 'puk-elterngruppe-jugendliche', 'selbsthilfe-schweiz'
]);
const failures = [];
const warnings = [];
const entries = [];

const attrs = value => Object.fromEntries([...value.matchAll(/([\w-]+)(?:="([^"]*)")?/g)].map(match => [match[1], match[2] ?? '']));
const plain = value => value.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const displayDate = value => new Intl.DateTimeFormat('de-CH', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(value);
const pass = (condition, label) => {
  console.log(`${condition ? 'PASS' : 'FAIL'} ${label}`);
  if (!condition) failures.push(label);
};

for (const file of ['behandlung.html', 'unterstuetzung.html']) {
  const html = await readFile(join(input, file), 'utf8');
  const pattern = /<(li|article)\b([^>]*\bdata-service-item\b[^>]*)>([\s\S]*?)<\/\1>/gi;
  for (const match of html.matchAll(pattern)) {
    const meta = attrs(match[2]);
    const links = [...match[3].matchAll(/href="(https:\/\/[^"#]+(?:#[^"]*)?)"/g)].map(item => item[1].replaceAll('&amp;', '&'));
    const times = [...match[3].matchAll(/<time\b[^>]*datetime="([^"]+)"[^>]*>([\s\S]*?)<\/time>/gi)];
    entries.push({ file, html: match[0], text: plain(match[3]), id: meta['data-service-id'], reviewed: meta['data-reviewed'], links, times, offer: /\bpuk-site-offer\b/.test(meta.class || '') });
  }
}

pass(entries.length === expectedIds.size, `${expectedIds.size} dynamische Angebote sind strukturiert (${entries.length})`);
pass(new Set(entries.map(entry => entry.id)).size === entries.length, 'alle Angebotskennungen sind eindeutig');
for (const id of expectedIds) pass(entries.some(entry => entry.id === id), `Angebot vorhanden: ${id}`);

for (const entry of entries) {
  const prefix = `${entry.file} · ${entry.id || 'ohne Kennung'}`;
  pass(/^\d{4}-\d{2}-\d{2}$/.test(entry.reviewed || ''), `${prefix}: maschinenlesbares Prüfdatum`);
  const reviewed = new Date(`${entry.reviewed}T00:00:00Z`);
  const validReviewed = Number.isFinite(reviewed.getTime()) && reviewed.toISOString().slice(0, 10) === entry.reviewed;
  const age = Math.floor((asOf - reviewed) / 86400000);
  pass(validReviewed && Number.isFinite(age) && age >= 0 && age <= maxAgeDays, `${prefix}: Prüfdatum höchstens ${maxAgeDays} Tage alt (${age} Tage)`);
  const expectedDisplay = validReviewed ? displayDate(reviewed) : '';
  pass(entry.times.length === 1 && plain(entry.times[0][2]) === expectedDisplay, `${prefix}: sichtbares Prüfdatum entspricht «${expectedDisplay || 'ungültiges Datum'}»`);
  pass(entry.times[0]?.[1] !== undefined && entry.times[0][1] === entry.reviewed, `${prefix}: sichtbares und maschinenlesbares Datum stimmen überein`);
  pass(entry.links.length === 1, `${prefix}: genau ein offizielles HTTPS-Ziel (${entry.links.length})`);
  if (entry.offer) {
    for (const field of ['Zielgruppe', 'Region', 'Art', 'Zugang und Kosten']) pass(entry.text.includes(field), `${prefix}: Feld «${field}» vorhanden`);
  }
}

if (online) {
  for (const entry of entries) {
    if (entries.indexOf(entry) !== entries.findIndex(other => other.links[0] === entry.links[0])) continue;
    const url = entry.links[0];
    const result = spawnSync('curl', ['-LIsS', '--max-time', '20', '-o', '/dev/null', '-w', '%{http_code}', url], { encoding: 'utf8' });
    const status = Number((result.stdout || '').trim());
    if (status >= 200 && status < 400) console.log(`PASS HTTP ${status}: ${url}`);
    else if (status === 404 || status === 410) { console.log(`FAIL HTTP ${status}: ${url}`); failures.push(`defektes offizielles Ziel: ${url}`); }
    else { console.log(`WARN HTTP ${status || 'nicht prüfbar'}: ${url}`); warnings.push(`${url}: HTTP ${status || 'nicht prüfbar'}`); }
  }
}

console.log(`\nAngebotsaktualität: ${entries.length} Einträge · ${failures.length} Fehler · ${warnings.length} technische Warnungen · Stichtag ${asOf.toISOString().slice(0, 10)}`);
if (failures.length) process.exit(1);
