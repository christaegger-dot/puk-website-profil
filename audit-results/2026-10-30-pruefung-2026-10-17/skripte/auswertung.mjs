// Auswertung: Abweichungen Band/Nachtblau gegenüber Weiss und Kontraste.
import fs from 'node:fs';
const [,, neuF, altF] = process.argv;
const neu = JSON.parse(fs.readFileSync(neuF,'utf8')), alt = altF ? JSON.parse(fs.readFileSync(altF,'utf8')) : null;
const rgb = s => { const m = /rgba?\(([\d.]+), ([\d.]+), ([\d.]+)(?:, ([\d.]+))?\)/.exec(s||''); return m ? [+m[1],+m[2],+m[3],m[4]===undefined?1:+m[4]] : null; };
const lum = ([r,g,b]) => [r,g,b].map(v=>v/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0);
const cr = (a,b) => { const A=rgb(a),B=rgb(b); if(!A||!B) return null; const [x,y]=[lum(A),lum(B)].sort((m,n)=>n-m); return +((x+.05)/(y+.05)).toFixed(2); };
const keys = Object.keys(neu.light.rest).filter(k=>k.startsWith('w:')).map(k=>k.slice(2));
const dark = new Set(['bandtext','bandlink','bandmuted','bandprim','bandsec','bandasec','brtext','brlink','ivtext','ivlink','etext','elink','karstatus','discbtn','checklabel','tab']);
for (const theme of ['light','kontrast']) {
  console.log(`\n=== ${theme} · Fehler: ${JSON.stringify(neu[theme].errors)}`);
  console.log('-- Ruhezustand: helle Komponenten, Abweichung von Weiss (Farbe | Rahmen) und Kontrast Text/effektive Fläche');
  for (const k of keys) {
    const w = neu[theme].rest['w:'+k]; if (!w) { console.log('fehlt', k); continue; }
    for (const p of ['b','n']) {
      const x = neu[theme].rest[p+':'+k]; if (!x) continue;
      const diff = (x.color!==w.color) || (x.border!==w.border && !dark.has(k));
      const c = cr(x.color, x.effBg);
      const old = alt?.[theme]?.rest?.[p+':'+k];
      const changed = old && (old.color!==x.color || old.border!==x.border || old.bg!==x.bg || old.shadow!==x.shadow);
      if (dark.has(k) ? changed : (diff || (c!==null && c<4.5)))
        console.log(`${dark.has(k)?'[dunkel bleibt] ':''}${p}:${k}  Farbe ${x.color} auf ${x.effBg} = ${c}:1  (Weiss: ${w.color} auf ${w.effBg} = ${cr(w.color,w.effBg)}:1)${x.border!==w.border?`  Rahmen ${x.border} statt ${w.border}`:''}${old?`  alt: ${old.color}${changed?' GEÄNDERT':''}`:''}`);
    }
  }
  for (const st of ['hover','focus','active']) {
    console.log(`-- ${st}: Abweichung von Weiss`);
    for (const k of Object.keys(neu[theme][st]).filter(k=>k.startsWith('w:'))) {
      const id = k.slice(2), w = neu[theme][st][k];
      for (const p of ['b','n']) { const x = neu[theme][st][p+':'+id]; const old = alt?.[theme]?.[st]?.[p+':'+id];
        const d = JSON.stringify(x)!==JSON.stringify(w); const ch = old && JSON.stringify(old)!==JSON.stringify(x);
        if (d || ch) console.log(`${p}:${id} ${JSON.stringify(x)}${d?' ≠ Weiss '+JSON.stringify(w):''}${ch?' | alt '+JSON.stringify(old):''}`); }
    }
  }
  console.log('-- Druck: Abweichung von Weiss (Farbe, Rahmen, Anzeige)');
  for (const k of keys) { const w = neu[theme].print['w:'+k]; for (const p of ['b','n']) { const x = neu[theme].print[p+':'+k]; if (!x||!w) continue;
    if (x.color!==w.color || x.border!==w.border || x.display!==w.display) console.log(`${p}:${k} ${x.color}/${x.border}/${x.display} ≠ Weiss ${w.color}/${w.border}/${w.display}`); } }
  if (alt) { console.log('-- Druck: Änderung gegenüber ad6ce55'); for (const k of Object.keys(neu[theme].print)) { const a = alt[theme].print[k], x = neu[theme].print[k]; if (a && x && (a.color!==x.color||a.border!==x.border||a.display!==x.display)) console.log(`${k} ${a.color} -> ${x.color}`); } }
}
