// Kennzahlen der Borderline-Website: Wörter, Absicherungen und Semikolons, alt (Bestand) und neu (gebaute Seiten).
// Ohne Abhängigkeiten (Node 18+). Zählweise: abgleich/README.md, Abschnitt «Wörter und Absicherungen».
//
//   node abgleich/kennzahlen.mjs                       Bestand aus dem Branch origin/borderline-bestand (git show)
//   node abgleich/kennzahlen.mjs --bestand <ordner>    Bestand aus einem Ordner mit den Dateien aus bestand/borderline-angehoerige/texte/
//   node abgleich/kennzahlen.mjs --seiten <ordner>     gebaute Seiten aus einem anderen Ordner (Standard: der Website-Ordner)
//   node abgleich/kennzahlen.mjs --abschnitte          zusätzlich Wörter je Abschnitt der neuen Seiten
//
// Neu: sichtbarer Text in <main> der gebauten Seite, Vertiefungen (details) eingeschlossen, ohne SVG und .puk-vis-sr.
// Text, der nur breit oder nur schmal sichtbar ist (data-cycle-wide / data-cycle-narrow), zählt je einmal.
// Alt: Bestandstext der alten Seite allein, ohne Kopfblock der Erhebung, Klammermarken, Bild- und Linkadressen;
// Vorschautexte geschlossener Akkordeons zählen mit.
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const PAGES = { index: 'startseite.md', verstehen: 'verstehen.md', beziehungen: 'verstehen--beziehungen.md', grenzen: 'grenzen.md' };
const RICHTWERT = { index: null, verstehen: 1300, beziehungen: 1100, grenzen: 1500 };
const C = createRequire(import.meta.url)(join(SITE, 'tools/contract.js'));

const SKIP = new Set(['script', 'style', 'svg']);
const cls = n => (n.attrs && n.attrs.class) || '';
const isSr = n => /(^|\s)(puk-vis-sr|sr-only|puk-sr-only)(\s|$)/.test(cls(n));
export function textOf(n, out = []) {
  for (const c of n.children || []) {
    if (c.tag === '#text') out.push(c.text);
    // Jede Elementgrenze trennt Wörter: Bezeichnungen in eigenen span (Station, Beispiel, Ansatzpunkt) stehen im Browser als eigene Zeile.
    else if (!SKIP.has(c.tag) && !isSr(c)) { out.push(' '); textOf(c, out); out.push(' '); }
  }
  return out;
}
const find = (n, pred) => { for (const c of n.children || []) { if (c.tag === '#text') continue; if (pred(c)) return c; const r = find(c, pred); if (r) return r; } return null; };
const all = (n, pred, out = []) => { for (const c of n.children || []) { if (c.tag === '#text') continue; if (pred(c)) out.push(c); all(c, pred, out); } return out; };
const decode = s => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

export function measure(text) {
  const words = text.split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w));
  const lc = text.toLowerCase();
  const hedge = (lc.match(/(?<![\p{L}])(kann|können|könnte|könnten|kannst)(?![\p{L}])/gu) || []).length
    + (lc.match(/(?<![\p{L}])möglich\p{L}*/gu) || []).length
    + (lc.match(/(?<![\p{L}])vielleicht(?![\p{L}])/gu) || []).length
    + (lc.match(/nicht sicher(?![\p{L}])/gu) || []).length
    + (lc.match(/nicht automatisch(?![\p{L}])/gu) || []).length;
  return { words: words.length, hedge, hedge100: words.length ? hedge / words.length * 100 : 0 };
}
// Semikolons im Fliesstext: ohne Quellenzeilen (Absätze, die mit «Quellen:», «Bezug…», «Grundlage:» oder «Eigene didaktische Darstellung» beginnen)
const SOURCE = /^\s*(Quellen?|Bezugspunkte?|Bezug|Grundlage|Eigene didaktische Darstellung)\b/;
function semicolons(main) {
  let n = 0;
  for (const el of all(main, c => ['p', 'li', 'dd', 'dt', 'h3'].includes(c.tag) && !all(c, d => ['p', 'li', 'dd'].includes(d.tag)).length)) {
    const t = decode(textOf(el).join(''));
    if (!SOURCE.test(t)) n += (t.match(/;/g) || []).length;
  }
  return n;
}

export function newPage(dir, id) {
  const doc = C.parse(readFileSync(join(dir, id + '.html'), 'utf8'));
  const main = find(doc, c => c.tag === 'main');
  const text = decode(textOf(main).join('')).replace(/\s+/g, ' ');
  const sections = all(main, c => c.tag === 'section' && c.attrs && c.attrs.id && /puk-longform__section/.test(cls(c)))
    .map(s => ({ id: s.attrs.id, words: measure(decode(textOf(s).join(''))).words }));
  return { ...measure(text), semi: semicolons(main), sections };
}

function bestand(file) {
  const dir = opt('--bestand');
  if (dir) return readFileSync(join(dir, file), 'utf8');
  return execFileSync('git', ['show', `origin/borderline-bestand:bestand/borderline-angehoerige/texte/${file}`], { cwd: SITE, encoding: 'utf8', maxBuffer: 1 << 24 });
}
export function oldPage(file) {
  const txt = bestand(file);
  const body = txt.includes('\n---\n') ? txt.split('\n---\n').slice(1).join('\n---\n') : txt;
  const out = [];
  for (const line of body.split('\n')) {
    let s = line.trim();
    if (/^\[(Akkordeon|Ende Akkordeon|Aufklappbar|Ende Aufklappbar|Reiter|Ende Reiter|Auswahl|Ende Auswahl|Filter-Schaltflächen|Schaltfläche|Link|Grafik)[^\]]*\]$/.test(s)) continue;
    const vm = s.match(/^\[Vorschautext bei geschlossenem Akkordeon: (.*)\]$/); if (vm) s = vm[1];
    s = s.replace(/!?\[\[Bild:[^\]]*\]\]\([^)]*\)/g, '').replace(/\[Bild:[^\]]*\]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/^#+\s*|\*\*|`|^>\s*|^[-*]\s+|^\d+\.\s+/g, '');
    out.push(s);
  }
  const text = out.join(' ');
  return { ...measure(text), semi: (text.match(/;/g) || []).length };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = opt('--seiten') || SITE;
  const f2 = x => x.toFixed(2).replace('.', ',');
  console.log('| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | +5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |');
  console.log('| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |');
  const rows = [];
  for (const [id, file] of Object.entries(PAGES)) {
    const a = oldPage(file), n = newPage(dir, id); rows.push([id, n]);
    const rw = RICHTWERT[id];
    console.log(`| \`${id}\` | ${a.words} | ${n.words} | ${Math.round(n.words / a.words * 100)} % | ${rw ?? '–'} | ${rw ? Math.floor(rw * 1.05) : '–'} | ${f2(a.hedge100)} → ${f2(n.hedge100)} | ${a.semi} → ${n.semi} |`);
  }
  if (args.includes('--abschnitte')) for (const [id, n] of rows) console.log(`\n${id}: ` + n.sections.map(s => `${s.id} ${s.words}`).join(' · '));
}
