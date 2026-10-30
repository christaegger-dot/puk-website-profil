// Auswertung: node auswertung.mjs <messung.json> [vergleich.json ...]
import fs from 'node:fs';
const [,, datei, ...vergleiche] = process.argv;
const r = JSON.parse(fs.readFileSync(datei));
const zust = ['ruhe','hover','fokus','gedrueckt','druck'];
const sig = (v, mitDeko) => v && !v.fehler ? (v.display === 'none' ? 'ausgeblendet' : [v.color, v.border, v.bg, v.shadow, mitDeko ? v.deko : ''].join(' | ')) : 'n/a';
console.log('Stand', r.stamm, 'Browser', r.browser);
for (const t in r.themes) {
 const W = r.themes[t].werte; console.log(`\n=== Theme ${t} · Skriptfehler: ${r.themes[t].fehler.length}`);
 const keys = Object.keys(W).filter(k => k.startsWith('w-')).map(k => k.slice(2));
 let gleich = 0, ungleich = [];
 for (const k of keys) for (const p of ['b','n']) {
  const a = W['w-' + k], b = W[p + '-' + k]; if (!a || a.ruhe.fehlt) continue;
  if (a.gruppe !== 'E') continue;
  for (const z of zust) { if (z === 'druck' ? sig(a[z]) === sig(b[z]) : sig(a[z]) === sig(b[z])) gleich++; else ungleich.push(`${p}-${k} ${z}: Weiss ${sig(a[z])} · Band ${sig(b[z])} (${b[z]?.fgHex} auf ${b[z]?.wirkBg}, ${b[z]?.kontrast}:1)`); }
 }
 console.log(`Gruppe E (erfasst): ${gleich} Vergleiche gleich wie auf Weiss, ${ungleich.length} abweichend`); for (const u of ungleich) console.log('  ABW', u);
 console.log('Gruppe E Ruhe-Kontraste im Band (Minimum je Kennung):');
 for (const k of keys) { const a = W['w-' + k]; if (a.gruppe !== 'E' || a.ruhe.fehlt) continue; const m = Math.min(...['b','n'].map(p => W[p + '-' + k].ruhe.kontrast)); if (m < 4.5) console.log(`  unter 4,5: ${k} ${m}:1 (Text ${['b','n'].map(p=>W[p+'-'+k].ruhe.fgHex+' auf '+W[p+'-'+k].ruhe.wirkBg).join(' / ')})`); }
 for (const g of ['F','N']) { console.log(`Gruppe ${g}: Ruhe w / b / n (Text auf wirksamem Grund, Kontrast); Druck b / n`);
  for (const k of keys) { const a = W['w-' + k]; if (a.gruppe !== g || a.ruhe.fehlt) continue;
   const f = v => `${v.fgHex} auf ${v.wirkBg} ${v.kontrast}:1`;
   console.log(`  ${k}: ${['w','b','n'].map(p => f(W[p + '-' + k].ruhe)).join(' | ')} · Druck ${['b','n'].map(p => W[p+'-'+k].druck.display==='none'?'ausgeblendet':W[p+'-'+k].druck.fgHex).join('/')} (Weiss ${a.druck.display==='none'?'ausgeblendet':a.druck.fgHex})`); } }
 for (const vd of vergleiche) { const V = JSON.parse(fs.readFileSync(vd)).themes[t].werte; const diff = [];
  for (const k in W) { if (!V[k] || W[k].ruhe.fehlt || V[k].ruhe.fehlt) continue; for (const z of zust) if (sig(W[k][z], true) !== sig(V[k][z], true)) diff.push(`${k} ${z}: ${sig(V[k][z], true)} -> ${sig(W[k][z], true)}`); }
  const ks = [...new Set(diff.map(d => d.split(' ')[0]))];
  console.log(`Änderungen gegenüber ${vd}: ${diff.length} Zustände in ${ks.length} Kennungen: ${ks.join(', ')}`); }
}
