// Statische Prüfung der zentralen Nutzerwege nach der IA-Überarbeitung.
// Aufruf im Website-Ordner: node abgleich/nutzerwege.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'site.config.json'), 'utf8'));
const pages = new Map(config.pages.map((page) => [page.href, fs.readFileSync(path.join(root, page.href), 'utf8')]));

const journeys = [
  {
    id: 'U1',
    need: 'Ein belastendes Gespräch vorbereiten',
    steps: [['index.html', 'kommunizieren.html#kippen'], ['kommunizieren.html', '#kippen'], ['kommunizieren.html', 'grenzen.html']]
  },
  {
    id: 'U2',
    need: 'Eigene Überlastung erkennen und Beratung finden',
    steps: [['index.html', 'selbstfuersorge.html'], ['selbstfuersorge.html', '#warnsignale'], ['selbstfuersorge.html', 'unterstuetzung.html']]
  },
  {
    id: 'U3',
    need: 'Beratung, Austausch oder ein passendes Buch finden',
    steps: [['index.html', 'unterstuetzung.html'], ['unterstuetzung.html', '#beratung'], ['unterstuetzung.html', 'buecher.html']]
  },
  {
    id: 'U4',
    need: 'Eine häufige Frage klären und einen Fachbegriff nachschlagen',
    steps: [['index.html', 'fragen.html'], ['fragen.html', 'begriffe.html'], ['begriffe.html', 'behandlung.html#therapieformen']]
  },
  {
    id: 'U5',
    need: 'Borderline einordnen und bei Krisen zur konkreten Orientierung wechseln',
    steps: [['index.html', 'verstehen.html'], ['verstehen.html', 'diagnose.html'], ['verstehen.html', 'krise.html#suizid']]
  },
  {
    id: 'U6',
    need: 'Behandlungsmöglichkeiten verstehen und eine Anlaufstelle finden',
    steps: [['index.html', 'behandlung.html'], ['behandlung.html', '#therapieformen'], ['behandlung.html', 'unterstuetzung.html#beratung']]
  },
  {
    id: 'U7',
    need: 'Mitbetroffene Kinder erklären, betreuen und schützen',
    steps: [['index.html', 'kinder.html'], ['kinder.html', '#alltag'], ['kinder.html', 'grenzen.html#gewalt']]
  },
  {
    id: 'U8',
    need: 'Mit eigenen Wörtern eine Fundstelle suchen',
    steps: [['index.html', 'fragen.html'], ['fragen.html', 'suche.html'], ['suche.html', 'kinder.html']]
  },
  {
    id: 'U9',
    need: 'Mit wenig Zeit oder Kraft einen nächsten Schritt finden',
    steps: [['index.html', 'kurz.html'], ['kurz.html', '#jetzt'], ['kurz.html', 'unterstuetzung.html']]
  }
];

const findings = [];
function hasLink(from, href) {
  const escaped = href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`<a\\b[^>]*href="${escaped}"`).test(pages.get(from) || '');
}
function targetExists(from, href) {
  const [filePart, hash] = href.split('#');
  const file = filePart || from;
  const html = pages.get(file);
  return Boolean(html) && (!hash || new RegExp(`\\bid="${hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(html));
}

for (const journey of journeys) {
  for (const [from, href] of journey.steps) {
    if (!hasLink(from, href)) findings.push(`${journey.id}: Link ${from} → ${href} fehlt`);
    if (!targetExists(from, href)) findings.push(`${journey.id}: Ziel ${href} fehlt`);
  }
}

const adjacency = new Map();
for (const [file, html] of pages) {
  const links = [...html.matchAll(/<a\b[^>]*href="([^"#?]+\.html)(?:#[^"]*)?"/g)]
    .map((match) => match[1])
    .filter((href) => pages.has(href));
  adjacency.set(file, links);
}
const reached = new Set(['index.html']);
const queue = ['index.html'];
while (queue.length) {
  for (const target of adjacency.get(queue.shift()) || []) {
    if (!reached.has(target)) { reached.add(target); queue.push(target); }
  }
}
for (const page of config.pages.filter((entry) => entry.status === 'published' && entry.role !== 'not-found')) {
  if (!reached.has(page.href)) findings.push(`Erreichbarkeit: ${page.href} ist von index.html aus nicht erreichbar`);
}

console.log(`Nutzerwege: ${journeys.length} geprüft · veröffentlichte Seiten erreichbar: ${reached.size}/${pages.size - 1}`);
if (findings.length) {
  findings.forEach((finding) => console.error(`BLOCK ${finding}`));
  process.exit(1);
}
journeys.forEach((journey) => console.log(`OK ${journey.id} · ${journey.need}`));
