// Auswertung zu messung-baender.mjs: Unterschiede Band/Nachtblau gegenüber Weiss, Kontraste der Texte.
// Aufruf: node auswertung-baender.mjs <messung.json> [<vergleich.json>]
import fs from 'node:fs';
const [,, datei, vgl] = process.argv;
const r = JSON.parse(fs.readFileSync(datei, 'utf8'));
const v = vgl ? JSON.parse(fs.readFileSync(vgl, 'utf8')) : null;
const rgb = s => (s.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
const lum = c => c.map(x => x / 255).map(x => x <= .04045 ? x / 12.92 : ((x + .055) / 1.055) ** 2.4).reduce((a, x, i) => a + x * [.2126, .7152, .0722][i], 0);
const cr = (a, b) => { const [x, y] = [lum(rgb(a)), lum(rgb(b))].sort((m, n) => n - m); return (x + .05) / (y + .05); };
const hex = s => '#' + rgb(s).map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
const felder = ['color', 'bg', 'border', 'shadow', 'deco', 'stroke', 'fill', '::before', '::after'];
const zeilen = [];
let gesamt = {gleich: 0, abweichend: 0};
for (const [lauf, l] of Object.entries(r.laeufe)) {
  zeilen.push(`\n=== ${lauf} · Skriptfehler ${l.errors.length}`);
  for (const modus of ['ruhe', 'druck']) {
    const w = l[modus].w;
    const proGruppe = {};
    for (const p of ['b', 'n']) w.forEach((e, i) => {
      const o = l[modus][p][i]; if (!e.visible && !o.visible) return;
      const diffs = felder.filter(f => (e[f] ?? '') !== (o[f] ?? ''));
      // Hintergrund unterscheidet sich zwangsläufig, wo das Element direkt auf dem Band steht; nur zählen, wenn auch die eigene Fläche abweicht.
      const echt = diffs.filter(f => f !== 'bg' || e.ownBg !== o.ownBg);
      const key = `${modus} ${p} ${e.grp}`; proGruppe[key] ??= {gleich: 0, ab: []};
      if (!echt.length) { proGruppe[key].gleich++; gesamt.gleich++; return; }
      gesamt.abweichend++;
      const k = e.txt ? ` Text ${hex(o.color)} auf ${hex(o.bg)} ${cr(o.color, o.bg).toFixed(2)}:1 (Weiss: ${hex(e.color)} auf ${hex(e.bg)} ${cr(e.color, e.bg).toFixed(2)}:1)` : '';
      proGruppe[key].ab.push(`  ${e.tag}.${e.cls}${e.txt ? ' «' + e.txt + '»' : ''}: ${echt.map(f => `${f} ${e[f]} → ${o[f]}`).join('; ')}${k}`);
    });
    for (const [k, g] of Object.entries(proGruppe)) {
      zeilen.push(`${k}: ${g.gleich} gleich, ${g.ab.length} abweichend`);
      for (const a of g.ab.slice(0, 40)) zeilen.push(a);
      if (g.ab.length > 40) zeilen.push(`  … ${g.ab.length - 40} weitere`);
    }
  }
  zeilen.push('--- Zustände (interaktive Elemente)');
  for (const row of l.zustaende) for (const p of ['b', 'n']) for (const z of ['ruhe', 'hover', 'fokus', 'gedrueckt']) {
    const a = row.w[z], b = row[p][z]; if (!a || !b || typeof a === 'string' || typeof b === 'string') { if (a !== b && (typeof a === 'string' || typeof b === 'string')) zeilen.push(`  ${p} ${z} ${row.w.ruhe.grp} ${row.w.ruhe.tag}.${row.w.ruhe.cls}: ${JSON.stringify(a)?.slice(0, 40)} / ${JSON.stringify(b)?.slice(0, 40)}`); continue; }
    const d = ['color', 'bg', 'border', 'shadow', 'outline'].filter(f => a[f] !== b[f]);
    if (d.length) zeilen.push(`  ${p} ${z.padEnd(9)} ${a.grp} ${a.tag}.${a.cls} «${a.txt}»: ${d.map(f => `${f} ${a[f]} → ${b[f]}`).join('; ')}`);
  }
}
zeilen.unshift(`Messung ${r.root} · ${r.browser} · Elemente gleich ${gesamt.gleich}, abweichend ${gesamt.abweichend}`);
console.log(zeilen.join('\n'));
