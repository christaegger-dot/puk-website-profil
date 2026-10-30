// Texte mit Kontrast unter 4,5:1 (eigene Schrift gegen tatsächliche Fläche) je Fläche, Gruppe und Lauf.
import fs from 'node:fs';
const [,, datei] = process.argv;
const r = JSON.parse(fs.readFileSync(datei, 'utf8'));
const rgb = s => (s.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const lum = c => c.map(x => x / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4).reduce((a, x, i) => a + x * [.2126, .7152, .0722][i], 0);
const cr = (a, b) => { const [x, y] = [lum(rgb(a)), lum(rgb(b))].sort((m, n) => n - m); return (x + .05) / (y + .05); };
const hex = s => '#' + rgb(s).map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
for (const [lauf, l] of Object.entries(r.laeufe)) for (const modus of ['ruhe', 'druck']) for (const p of ['w', 'b', 'n']) {
  const tief = {};
  l[modus][p].forEach(e => { if (!e.visible || !e.txt) return; const k = cr(e.color, e.bg); if (k < 4.5) { const key = e.grp; (tief[key] ??= []).push(`${e.tag}.${e.cls} «${e.txt}» ${hex(e.color)} auf ${hex(e.bg)} ${k.toFixed(2)}:1`); } });
  for (const [g, list] of Object.entries(tief)) { console.log(`${lauf} ${modus} ${p} ${g}: ${list.length} Texte unter 4,5:1`); for (const x of [...new Set(list)].slice(0, 12)) console.log('   ' + x); }
}
