// Vergleicht je Zustand die Werte im blauen Band (b-) und auf Nachtblau (n-) mit Weiss (w-).
// Aufruf: node auswertung.mjs <messung.json> [vergleich.json]
import {readFileSync} from 'node:fs';
const [datei, vergleich] = process.argv.slice(2);
const m = JSON.parse(readFileSync(datei, 'utf8'));
const v = vergleich && JSON.parse(readFileSync(vergleich, 'utf8'));
const felder = ['color', 'bg', 'border', 'shadow', 'outline', 'deko', 'vars'];
const bandinhalt = new Set(['text', 'a', 'kicker']);
let gleich = 0, ungleich = 0, min = Infinity; const abw = {}, tief = [];
for (const [z, werte] of Object.entries(m.zustaende)) {
 const erzwungen = z.endsWith('erzwungen');
 for (const [id, w] of Object.entries(werte)) {
  if (!id.startsWith('w-')) continue;
  const k = id.slice(2);
  for (const p of ['b', 'n']) {
   const x = werte[p + '-' + k]; if (!x) continue;
   if (!bandinhalt.has(k) && x.kontrast && !z.includes('druck') && !erzwungen) { if (x.kontrast < min) min = x.kontrast; if (x.kontrast < 4.5) tief.push(`${z} ${p}-${k} ${x.color} auf ${x.bg} ${x.kontrast}:1`); }
   const diff = felder.filter(f => f !== 'vars' || !erzwungen).filter(f => w[f] !== x[f]);
   if (bandinhalt.has(k)) continue;
   if (diff.length) { ungleich++; (abw[k] ??= []).push(`${z} ${p}: ` + diff.map(f => `${f} ${w[f]} → ${x[f]}`).join('; ')); } else gleich++;
  }
 }
}
console.log(`Datei ${datei}`);
console.log(`Vergleiche helle Flächen (Band/Nachtblau gegen Weiss, alle Zustände): ${gleich} gleich, ${ungleich} abweichend`);
console.log(`Kleinster Kontrast heller Flächen am Bildschirm (ohne erzwungene Farben): ${min}:1`);
console.log(`Unter 4,5:1: ${tief.length}`); for (const t of tief.slice(0, 80)) console.log('  ' + t);
for (const [k, l] of Object.entries(abw)) { console.log(`Abweichend ${k}: ${l.length}`); for (const s of l.slice(0, 6)) console.log('  ' + s); }
// Bandinhalt: Werte je Lage
const r = m.zustaende['standard|1280|ruhe'];
for (const k of ['text', 'a', 'kicker']) console.log(`Bandinhalt ${k}: ` + ['w', 'b', 'n'].map(p => `${p} ${r[p + '-' + k].color} auf ${r[p + '-' + k].bg} ${r[p + '-' + k].kontrast}:1`).join(' | '));
if (v) {
 const ch = new Set();
 for (const [z, werte] of Object.entries(m.zustaende)) for (const [id, w] of Object.entries(werte)) {
  const a = v.zustaende[z]?.[id]; if (!a) continue;
  if (felder.some(f => a[f] !== w[f])) ch.add(id);
 }
 console.log(`Gegenüber ${vergleich} geänderte Kennungen (${ch.size}): ` + [...ch].sort().join(', '));
}
