import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(await readFile(join(root, 'site.config.json'), 'utf8'));
const source = await readFile(join(root, 'content', 'kurz.html'), 'utf8');
const built = await readFile(join(root, 'kurz.html'), 'utf8');
const findings = [];
const pass = (condition, label) => {
  console.log(`${condition ? 'PASS' : 'FAIL'} ${label}`);
  if (!condition) findings.push(label);
};
const plain = value => String(value || '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&[a-z#0-9]+;/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const words = plain(source).split(/\s+/).filter(Boolean);
const proseBlocks = [...source.matchAll(/<(?:p|li)\b[^>]*>([\s\S]*?)<\/(?:p|li)>/gi)].map(match => plain(match[1]));
const sentences = proseBlocks.flatMap(block => block.split(/[.!?]+(?:\s|$)/).map(sentence => sentence.trim()).filter(Boolean));
const longest = Math.max(...sentences.map(sentence => sentence.split(/\s+/).length));
pass(words.length <= 500, `Kurzübersicht hat höchstens 500 Wörter (${words.length})`);
pass(longest <= 24, `kein Klartextsatz hat mehr als 24 Wörter (${longest})`);
pass(/keine geprüfte Fassung in Leichter Sprache/.test(source), 'Aussagegrenze zu Leichter Sprache ist sichtbar');
pass((source.match(/data-responsibility-inline/g) || []).length === 1, 'geprüfter Zuständigkeitsverweis wird genau einmal eingebunden');
pass(!/(?:mailto:|href="tel:|\b0\d{2}\s*\d{3})/i.test(source), 'keine veränderlichen Kontaktdaten oder Telefonnummern im Kurztext');

for (const target of [
  'kommunizieren.html#kippen', 'rolle.html#anbieten', 'grenzen.html#erkennen',
  'selbstfuersorge.html#unterstuetzung', 'kinder.html', 'krise.html#krise-schnell',
  'verstehen.html#borderline', 'diagnose.html', 'behandlung.html', 'unterstuetzung.html', 'suche.html'
]) pass(built.includes(`href="${target}"`), `primärer Übergang vorhanden: ${target}`);

const utility = cfg.utilityNav || [];
pass(utility.some(entry => entry.pageId === 'kurz' && entry.label === 'Kurz und klar'), 'globaler Direkteinstieg «Kurz und klar» ist konfiguriert');
pass(utility.some(entry => entry.pageId === 'suche'), 'Website-Suche bleibt globaler Direkteinstieg');
for (const page of cfg.pages.filter(page => page.status === 'published' && page.role !== 'not-found')) {
  const html = await readFile(join(root, page.href), 'utf8');
  pass(/<nav class="puk-site-utility" aria-label="Direkteinstiege">/.test(html) && /href="kurz\.html"/.test(html) && /href="suche\.html"/.test(html), `Direkteinstiege auf ${page.href}`);
}

console.log(`\n${findings.length ? findings.length + ' Fehler' : 'Kurzorientierung: alle Akzeptanzkriterien bestanden'}`);
if (findings.length) process.exit(1);
