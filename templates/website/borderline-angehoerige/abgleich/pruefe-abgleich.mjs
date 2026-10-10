// Prüft die Tabellen «Satz für Satz» in abgleich/<seite>.md gegen die gebauten Seiten. Ohne Abhängigkeiten (Node 18+).
//
//   node abgleich/pruefe-abgleich.mjs                      Bestand aus dem Branch origin/borderline-bestand (git show)
//   node abgleich/pruefe-abgleich.mjs --bestand <ordner>   Bestand aus einem Ordner (bestand/borderline-angehoerige/texte/)
//
// Geprüft wird je Zeile:
//   1. «Ort neu» `seite#abschnitt`: Die Seite ist gebaut und hat den Abschnitt (section id, «kopf» = Seitenkopf,
//      «kapitel» = Kapitelübersicht). «Fusszeile» = Hinweis in der Fusszeile. «<seite> (Etappe n)» = Entwurfsseite im Vertrag.
//   2. «Neue Fassung»: steht wörtlich im genannten Abschnitt; bei «wörtlich» steht dort der Satz aus dem Bestand.
//   3. Jede Stelle in «…» in der Bemerkung steht auf einer der neuen Seiten, im Bestand oder in den Regeln des Profils
//      (guidelines/, README.md im Projektstamm); Teile, die mit «…» abgekürzt sind, je für sich.
//   4. Status «entfällt»: kein Ort und keine neue Fassung.
// Ausgabe: Zeilen ohne Fundstelle. Exit 1, wenn es solche Zeilen gibt.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const C = createRequire(import.meta.url)(join(SITE, 'tools/contract.js'));
const cfg = JSON.parse(readFileSync(join(SITE, 'site.config.json'), 'utf8'));
const PAGES = ['index', 'verstehen', 'beziehungen', 'grenzen', 'rolle', 'selbstfuersorge'];
const SOURCES = {
  index: ['startseite.md', 'selbsttest.md', 'wegweiser.md'],
  verstehen: ['verstehen.md', ...['eisberg', 'alarm-modus', 'gehirn', 'zustands-landkarte', 'spaltung', 'anspannungskurve'].map(h => `materialien--text--${h}.md`)],
  beziehungen: ['verstehen--beziehungen.md'],
  grenzen: ['grenzen.md', 'uebungen.md', ...['4-arten-von-grenzen', 'bruecke-gelaender', 'dear', 'grenzen-erkennen', 'grenzen-spickzettel', 'grenzen-ohne-eskalation', 'lmk', 'spiegeln-statt-aufsaugen'].map(h => `materialien--text--${h}.md`)],
  // Etappe 2a: /unterstuetzen/alltag gehört je nach Abschnitt zu rolle oder selbstfuersorge (abgleich/README.md); als Fundstelle zählt die ganze Datei.
  rolle: ['unterstuetzen--uebersicht.md', 'unterstuetzen--alltag.md', ...['rolle-klaeren', 'garten', 'leuchtturm', 'schuld-verantwortung', 'drei-saeulen', 'konsistenz-prinzip', '4-alltags-tipps', '6-leitlinien', 'beziehungs-achtsamkeit', 'kinder'].map(h => `materialien--text--${h}.md`)],
  selbstfuersorge: ['selbstfuersorge.md', 'unterstuetzen--alltag.md', ...['sauerstoffmaske', 'energie-konto', 'warnsignale', 'stopp-technik', 'radikale-akzeptanz', 'erlaubnis-karte'].map(h => `materialien--text--${h}.md`)],
};

// Text wie im Browser: jede Elementgrenze trennt, SVG und .puk-vis-sr zählen nicht.
const SKIP = new Set(['script', 'style', 'svg']);
const isSr = n => /(^|\s)puk-vis-sr(\s|$)/.test((n.attrs && n.attrs.class) || '');
const textOf = (n, out = []) => { for (const c of n.children || []) { if (c.tag === '#text') out.push(c.text); else if (!SKIP.has(c.tag) && !isSr(c)) { out.push(' '); textOf(c, out); out.push(' '); } } return out; };
const decode = s => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
export const norm = s => decode(s).replace(/\*\*|`/g, '').replace(/[—]/g, '–').replace(/ /g, ' ').replace(/\s+/g, ' ')
  .replace(/\s+([.,;:!?»)])/g, '$1').replace(/([«(])\s+/g, '$1').trim();
const find = (n, pred) => { for (const c of n.children || []) { if (c.tag === '#text') continue; if (pred(c)) return c; const r = find(c, pred); if (r) return r; } return null; };

const sections = {}; let siteText = '';
for (const p of PAGES) {
  const doc = C.parse(readFileSync(join(SITE, p + '.html'), 'utf8'));
  const main = find(doc, c => c.tag === 'main'); const foot = find(doc, c => c.tag === 'footer');
  const secs = { kopf: '', kapitel: '' };
  for (const c of main.children || []) {
    if (c.tag === '#text') continue;
    const cls = (c.attrs && c.attrs.class) || '';
    const id = c.tag === 'section' && c.attrs.id ? c.attrs.id : /puk-longform__hero/.test(cls) ? 'kopf' : c.tag === 'nav' || /roadmap/.test(cls) ? 'kapitel' : null;
    if (id) secs[id] = (secs[id] || '') + ' ' + norm(textOf(c).join(''));
  }
  secs.Fusszeile = norm(textOf(foot).join(''));
  sections[p] = secs; siteText += ' ' + Object.values(secs).join(' ');
}
const drafts = new Set(cfg.pages.filter(p => p.status === 'draft').map(p => p.id));
const ROOT = join(SITE, '..', '..', '..');
const rules = norm([join(ROOT, 'README.md'), ...(existsSync(join(ROOT, 'guidelines')) ? readdirSync(join(ROOT, 'guidelines')).filter(f => f.endsWith('.md')).map(f => join(ROOT, 'guidelines', f)) : [])]
  .filter(f => existsSync(f)).map(f => readFileSync(f, 'utf8')).join(' '));

function bestand(file) {
  const dir = opt('--bestand');
  try {
    if (dir) return readFileSync(join(dir, file), 'utf8');
    return execFileSync('git', ['show', `origin/borderline-bestand:bestand/borderline-angehoerige/texte/${file}`], { cwd: SITE, encoding: 'utf8', maxBuffer: 1 << 24, stdio: ['ignore', 'pipe', 'ignore'] });
  } catch { return null; }
}
const unesc = s => s.replace(/\\\|/g, '|');
const cells = line => { const out = []; let cur = ''; for (let i = 1; i < line.length; i++) { const ch = line[i]; if (ch === '\\' && line[i + 1] === '|') { cur += '\\|'; i++; continue; } if (ch === '|') { out.push(unesc(cur.trim())); cur = ''; } else cur += ch; } return out; };
// Zitate «…» mit verschachtelten «» als Ganzes
function quotes(s) {
  const q = []; let depth = 0, start = -1;
  for (let i = 0; i < s.length; i++) { if (s[i] === '«') { if (depth++ === 0) start = i + 1; } else if (s[i] === '»' && depth > 0) { if (--depth === 0) q.push(s.slice(start, i)); } }
  return q;
}

let rowsChecked = 0; const problems = [];
for (const p of PAGES) {
  const md = readFileSync(join(SITE, 'abgleich', p + '.md'), 'utf8');
  const corpus = norm(SOURCES[p].map(f => bestand(f) || '').join(' ').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1'));
  const hasCorpus = corpus.length > 1000;
  const part = md.split(/^## Satz für Satz/m)[1];
  if (!part) { problems.push(`${p}: Abschnitt «Satz für Satz» fehlt`); continue; }
  for (const line of part.split('\n')) {
    if (!/^\| *\d+ *\|/.test(line)) continue;
    const [nr, , satz, status, neu, ort, bem] = cells(line);
    rowsChecked++;
    const where = `${p} Nr. ${nr}`;
    if (status === 'entfällt') { if (ort !== '–' || neu !== '–') problems.push(`${where}: «entfällt» mit Ort oder neuer Fassung`); }
    else if (status === 'Bezeichnung' && ort === '–') { /* Zwischentitel ohne Aussage, ohne Ort */ }
    else if (/^[a-z]+#[a-z0-9-]+$/.test(ort)) {
      const [pg, sec] = ort.split('#');
      const text = sections[pg] && sections[pg][sec];
      if (text === undefined) problems.push(`${where}: Ort ${ort} gibt es nicht`);
      else {
        const want = neu === 'wörtlich' ? satz : neu;
        if (neu !== '–' && !text.includes(norm(want))) problems.push(`${where}: neue Fassung nicht in ${ort}: ${want.slice(0, 90)}`);
      }
    } else if (ort === 'Fusszeile') { if (neu !== '–' && !sections.index.Fusszeile.includes(norm(neu))) problems.push(`${where}: nicht in der Fusszeile: ${neu.slice(0, 90)}`); }
    else if (/^[a-z]+ \(Etappe \d\)$/.test(ort)) { const pg = ort.split(' ')[0]; if (!drafts.has(pg)) problems.push(`${where}: ${pg} ist keine Entwurfsseite im Vertrag`); }
    else problems.push(`${where}: Ort «${ort}» nicht lesbar`);
    for (const q of quotes(bem || '')) {
      for (const frag of q.split('…').map(x => norm(x)).filter(x => x.length >= 3)) {
        if (siteText.includes(frag) || norm(satz).includes(frag) || (hasCorpus && corpus.includes(frag)) || rules.includes(frag)) continue;
        problems.push(`${where}: Zitat in der Bemerkung nicht gefunden (neue Seiten, Bestand, Profil): «${frag.slice(0, 90)}»`);
      }
    }
  }
}
console.log(`Abgleich geprüft: ${rowsChecked} Zeilen, ${problems.length} ohne Fundstelle.`);
for (const x of problems) console.log('  ' + x);
process.exit(problems.length ? 1 : 0);
