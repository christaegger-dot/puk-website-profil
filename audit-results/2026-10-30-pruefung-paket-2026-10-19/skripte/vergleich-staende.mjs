// Vergleich zweier Messungen (gleiche Fixture, verschiedene Stände): welche Elemente ändern sich je Fläche?
import fs from 'node:fs';
const [,, a, b] = process.argv;
const A = JSON.parse(fs.readFileSync(a, 'utf8')), B = JSON.parse(fs.readFileSync(b, 'utf8'));
const rgb = s => (s.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const lum = c => c.map(x => x / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4).reduce((a, x, i) => a + x * [.2126, .7152, .0722][i], 0);
const cr = (a, b) => { const [x, y] = [lum(rgb(a)), lum(rgb(b))].sort((m, n) => n - m); return (x + .05) / (y + .05); };
const hex = s => '#' + rgb(s).map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
const f = ['color', 'bg', 'ownBg', 'border', 'shadow', 'deco', 'stroke', 'fill', '::before', '::after'];
for (const lauf of Object.keys(A.laeufe)) for (const modus of ['ruhe', 'druck']) for (const p of ['w', 'b', 'n']) {
  const xa = A.laeufe[lauf][modus][p], xb = B.laeufe[lauf][modus][p]; const zaehl = {};
  xa.forEach((e, i) => { const o = xb[i]; const d = f.filter(k => (e[k] ?? '') !== (o[k] ?? '')); if (!d.length) return;
    const key = e.grp; zaehl[key] ??= []; zaehl[key].push(`${e.tag}.${e.cls}${e.txt ? ' «' + e.txt.slice(0, 18) + '»' : ''} ${d.join(',')}${e.txt && e.visible ? ` ${hex(e.color)}/${hex(e.bg)} ${cr(e.color, e.bg).toFixed(2)} → ${hex(o.color)}/${hex(o.bg)} ${cr(o.color, o.bg).toFixed(2)}` : ''}`); });
  for (const [g, l] of Object.entries(zaehl)) { console.log(`${lauf} ${modus} ${p} ${g}: ${l.length} geändert`); for (const x of l.slice(0, 6)) console.log('   ' + x); }
}
for (const lauf of Object.keys(A.laeufe)) A.laeufe[lauf].zustaende.forEach((row, k) => { for (const p of ['w', 'b', 'n']) for (const z of ['ruhe', 'hover', 'fokus', 'gedrueckt']) { const x = row[p][z], y = B.laeufe[lauf].zustaende[k][p][z]; if (JSON.stringify(x) !== JSON.stringify(y)) console.log(`${lauf} Zustand ${p} ${z} ${x?.grp} ${x?.tag}.${x?.cls}: ${['color', 'bg', 'border', 'shadow'].filter(q => x?.[q] !== y?.[q]).map(q => `${q} ${x?.[q]} → ${y?.[q]}`).join('; ')}`); } });
