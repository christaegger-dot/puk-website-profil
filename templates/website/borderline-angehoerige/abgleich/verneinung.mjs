// Sätze mit Verneinung, alt (Bestand) und neu (gebaute Seiten). Ohne Abhängigkeiten (Node 18+). Zählweise: abgleich/README.md.
//
//   node abgleich/verneinung.mjs                       Bestand aus dem Branch origin/borderline-bestand (git show)
//   node abgleich/verneinung.mjs --bestand <ordner>    Bestand aus einem Ordner mit den Dateien aus bestand/borderline-angehoerige/texte/
//   node abgleich/verneinung.mjs --seiten <ordner>     gebaute Seiten aus einem anderen Ordner (Standard: der Website-Ordner)
//   node abgleich/verneinung.mjs --seite <id>          nur eine Seite, dazu je Abschnitt und die gezählten Sätze
//
// Neu: sichtbarer Text in <main> wie kennzahlen.mjs (ohne SVG, ohne Text nur für Screenreader), je Blockelement
// (p, li, dt, dd, h1–h3, summary, figcaption ohne Blockkinder) in Sätze zerlegt. Überschriften und Bezeichnungen zählen als Satz.
// Alt: Bestandstext wie kennzahlen.mjs (ohne Kopfblock, Klammermarken, Bild- und Linkadressen), je Zeile in Sätze zerlegt.
// Hat eine neue Seite mehrere alte Seiten (Etappe 2a: `rolle`), zählen die alten Seiten zusammen (Liste in kennzahlen.mjs).
// Satzzerlegung wie im Abgleich. Verneinung: «nicht», «nichts», «nie», «niemals», «niemand», «weder» oder eine Form von «kein».
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { textOf, PAGES } from './kennzahlen.mjs';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const C = createRequire(import.meta.url)(join(SITE, 'tools/contract.js'));
const NEG = /(?<![\p{L}])(nicht|nichts|nie|niemals|niemand|weder|kein|keine|keinen|keinem|keiner|keines)(?![\p{L}])/iu;
const decode = s => s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const split = t => t.replace(/\b(z|u|d|v|s|bzw|ca|vgl|etc|al|Nr|ggf|evtl|inkl|usw|Dr|Prof|ebd|sog)\./g, '$1§').replace(/(\d)\.(\s)/g, '$1§$2')
  .split(/(?<=[.!?])\s+(?=[«A-ZÄÖÜ„"(\[])|(?<=[.!?]»)\s+/).map(s => s.replace(/§/g, '.').trim()).filter(s => /\p{L}/u.test(s));
const cls = n => (n.attrs && n.attrs.class) || '';
const isSr = n => /(^|\s)(puk-sr|puk-vis-sr|sr-only|puk-sr-only)(\s|$)/.test(cls(n));
const LEAF = new Set(['p', 'li', 'dt', 'dd', 'h1', 'h2', 'h3', 'summary', 'figcaption']);
const BLOCK = new Set(['p', 'ul', 'ol', 'dl', 'div', 'li', 'dt', 'dd', 'h3', 'section']);

function newSentences(file) {
  const doc = C.parse(readFileSync(file, 'utf8')); const out = [];
  const find = n => { for (const c of n.children || []) { if (c.tag === '#text') continue; if (c.tag === 'main') return c; const r = find(c); if (r) return r; } return null; };
  (function walk(n, sec) {
    for (const c of n.children || []) {
      if (c.tag === '#text' || ['script', 'style', 'svg'].includes(c.tag) || isSr(c)) continue;
      let s = sec; if (c.tag === 'section' && c.attrs && c.attrs.id && /puk-longform__section/.test(cls(c))) s = c.attrs.id;
      if (LEAF.has(c.tag) && !(c.children || []).some(k => BLOCK.has(k.tag))) { for (const x of split(decode(textOf(c).join('')).replace(/\s+/g, ' ').trim())) out.push([s, x]); }
      else walk(c, s);
    }
  })(find(doc), 'kopf');
  return out;
}
function bestand(file) {
  const dir = opt('--bestand');
  if (dir) return readFileSync(join(dir, file), 'utf8');
  return execFileSync('git', ['show', `origin/borderline-bestand:bestand/borderline-angehoerige/texte/${file}`], { cwd: SITE, encoding: 'utf8', maxBuffer: 1 << 24 });
}
function oldSentences(file) {
  const txt = bestand(file); const body = txt.includes('\n---\n') ? txt.split('\n---\n').slice(1).join('\n---\n') : txt; const out = [];
  for (const line of body.split('\n')) {
    let s = line.trim();
    if (/^\[(Akkordeon|Ende Akkordeon|Aufklappbar|Ende Aufklappbar|Reiter|Ende Reiter|Auswahl|Ende Auswahl|Filter-Schaltflächen|Schaltfläche|Link|Grafik)[^\]]*\]$/.test(s)) continue;
    const vm = s.match(/^\[Vorschautext bei geschlossenem Akkordeon: (.*)\]$/); if (vm) s = vm[1];
    s = s.replace(/!?\[\[Bild:[^\]]*\]\]\([^)]*\)/g, '').replace(/\[Bild:[^\]]*\]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/^#+\s*|\*\*|`|^>\s*|^[-*]\s+|^\d+\.\s+/g, '');
    for (const x of split(s)) out.push(['alt', x]);
  }
  return out;
}

const dir = opt('--seiten') || SITE; const only = opt('--seite');
const pct = (a, b) => (b ? Math.round(a / b * 100) : 0) + ' %';
console.log('| Seite | alt: Sätze mit Verneinung | neu: Sätze mit Verneinung |');
console.log('| --- | --- | --- |');
for (const [id, files] of Object.entries(PAGES)) {
  if (only && id !== only) continue;
  const a = files.flatMap(oldSentences), n = newSentences(join(dir, id + '.html'));
  const an = a.filter(x => NEG.test(x[1])).length, nn = n.filter(x => NEG.test(x[1])).length;
  console.log(`| \`${id}\` | ${an} von ${a.length} (${pct(an, a.length)}) | ${nn} von ${n.length} (${pct(nn, n.length)}) |`);
  if (only) {
    const by = {}; for (const [s, x] of n) { by[s] ??= [0, 0]; by[s][1]++; if (NEG.test(x)) by[s][0]++; }
    console.log('\nje Abschnitt: ' + Object.entries(by).map(([s, [k, t]]) => `${s} ${k} von ${t}`).join(' · ') + '\n');
    for (const [s, x] of n) if (NEG.test(x)) console.log(`- ${s}: ${x}`);
  }
}
