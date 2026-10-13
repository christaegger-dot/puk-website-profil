import { readFile, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decode = value => String(value || '')
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const normalize = value => String(value || '').toLocaleLowerCase('de-CH').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const attr = (source, name) => decode((source.match(new RegExp(`${name}="([^"]*)"`)) || [])[1] || '');
const searchHtml = await readFile(join(root, 'suche.html'), 'utf8');
const items = [...searchHtml.matchAll(/<li class="puk-site-result" data-search-item ([^>]+)>[\s\S]*?<a href="([^"]+)"/g)].map((match, order) => ({
  title: attr(match[1], 'data-search-title'),
  text: attr(match[1], 'data-search-text'),
  keywords: attr(match[1], 'data-search-keywords'),
  level: attr(match[1], 'data-search-level'),
  href: decode(match[2]),
  order
}));

function results(query) {
  const normalizedQuery = normalize(query).trim();
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  return items.map(item => {
    const title = normalize(item.title);
    const haystack = normalize(item.text);
    const keywords = normalize(item.keywords);
    if (!terms.every(term => haystack.includes(term))) return null;
    let score = item.level === 'section' ? 20 : 0;
    if (title === normalizedQuery) score += 600;
    else if (title.includes(normalizedQuery)) score += 300;
    for (const term of terms) {
      if (title.includes(term)) score += 80;
      if (keywords.includes(term)) score += 140;
      const first = haystack.indexOf(term);
      if (first !== -1) score += Math.max(0, 30 - Math.floor(first / 120));
    }
    return { ...item, score };
  }).filter(Boolean).sort((a, b) => b.score - a.score || a.order - b.order);
}

const scenarios = [
  ['Ein Gespräch kippt', 'Gespräch kippt', ['kommunizieren.html#kommunizieren-schnell', 'kommunizieren.html#kippen']],
  ['Eine kurze Gesprächsgrenze', 'Grenze drei Teile', ['kommunizieren.html#kippen']],
  ['Was ist nicht meine Aufgabe?', 'nicht meine Aufgabe', ['rolle.html']],
  ['Nein sagen', 'nein sagen', ['grenzen.html']],
  ['Erschöpfung und Hilfe', 'erschöpft Unterstützung', ['selbstfuersorge.html', 'unterstuetzung.html']],
  ['Beratung für Angehörige', 'Beratung Angehörige', ['unterstuetzung.html#beratung-title', 'unterstuetzung.html']],
  ['Ein Kind schützen', 'Kind schützen', ['kinder.html']],
  ['Meldepflicht bei Kindern', 'Meldepflicht', ['kinder.html#eskalation-title']],
  ['KESB und Kind', 'KESB Kind', ['kinder.html#eskalation-title', 'kinder.html']],
  ['Suizidgedanken', 'Suizidgedanken', ['krise.html#suizid-title']],
  ['Notfall', 'Notfall', ['krise.html#krise-schnell', 'krise.html']],
  ['Polizei', 'Polizei', ['krise.html#krise-schnell', 'krise.html']],
  ['Selbstverletzung', 'Selbstverletzung', ['krise.html#suizid-title', 'krise.html']],
  ['Einweisung', 'Einweisung', ['fragen.html#f-einweisung']],
  ['Fürsorgerische Unterbringung', 'fürsorgerische Unterbringung', ['fragen.html#f-einweisung']],
  ['Schweigepflicht beim Behandlungsteam', 'Schweigepflicht Behandlungsteam', ['behandlung.html#kontakt-title']],
  ['Medikamente bei Borderline', 'Medikamente Borderline', ['fragen.html#f-medikamente', 'behandlung.html#therapieformen-title']],
  ['DBT nachschlagen', 'DBT', ['begriffe.html#b-dbt']],
  ['Kein Therapieplatz', 'kein Therapieplatz', ['behandlung.html#wartezeit-title']],
  ['Behandlung für Jugendliche', 'Jugendliche Behandlung', ['behandlung.html#angebote-title', 'diagnose.html#abklaerung-title']],
  ['Diagnose wird nicht geteilt', 'Diagnose nicht geteilt', ['diagnose.html#zweifel-title']],
  ['Grenzen als Partnerperson', 'Grenzen Partner', ['grenzen.html#rollen-title', 'grenzen.html']],
  ['Dolmetschen', 'Dolmetschen', ['fragen.html#f-sprache']],
  ['Gewalt', 'Gewalt', ['grenzen.html#gewalt-title', 'kinder.html#eskalation-title']],
  ['Trennung', 'Trennung', ['fragen.html#f-verlassen', 'grenzen.html#kontakt-title']]
];

let failed = 0;
for (const [label, query, expected] of scenarios) {
  const top = results(query).slice(0, 3);
  const pass = top.some(result => expected.some(target => result.href.startsWith(target)));
  if (!pass) failed++;
  console.log(`${pass ? 'PASS' : 'FAIL'} ${label.padEnd(34)} ${query} -> ${top.map(result => result.href).join(', ') || 'kein Treffer'}`);
}

const htmlFiles = (await readdir(root)).filter(file => file.endsWith('.html') && file !== 'gate.html');
const pages = Object.fromEntries(await Promise.all(htmlFiles.map(async file => [file, await readFile(join(root, file), 'utf8')])));
const structural = [
  ['Startseite benennt Borderline-Zielgruppe', /Menschen mit einer Borderline-Persönlichkeitsstörung/.test(pages['index.html'])],
  ['Startseite verlinkt Kinderseite', /href="kinder\.html"/.test(pages['index.html'])],
  ['Kinderseite ist veröffentlicht', !!pages['kinder.html']],
  ['Kinderseite ist aus Rolle erreichbar', /href="kinder\.html"/.test(pages['rolle.html'])],
  ['Kinderseite ist aus Grenzen erreichbar', /href="kinder\.html"/.test(pages['grenzen.html'])],
  ['Kinderseite ist aus Krise erreichbar', /href="kinder\.html"/.test(pages['krise.html'])],
  ['Fragenbereich heisst Fragen und Nachschlagen', /<h1[^>]*>Fragen und Nachschlagen<\/h1>/.test(pages['fragen.html'])],
  ['Suche erklärt lokale Verarbeitung', /weder übertragen noch gespeichert/.test(pages['suche.html'])],
  ['Suche enthält Abschnittsziele', /data-search-level="section"/.test(pages['suche.html'])]
];
for (const [label, pass] of structural) {
  if (!pass) failed++;
  console.log(`${pass ? 'PASS' : 'FAIL'} ${label}`);
}

for (const item of items) {
  const [file, hash] = item.href.split('#');
  if (!pages[file]) { console.log(`FAIL Suchziel fehlt: ${item.href}`); failed++; continue; }
  if (hash && !new RegExp(`\\bid="${hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(pages[file])) {
    console.log(`FAIL Suchanker fehlt: ${item.href}`); failed++;
  }
}

console.log(`\n${scenarios.length} Szenarien · ${items.length} lokale Suchziele · ${failed} Fehler`);
if (failed) process.exit(1);
