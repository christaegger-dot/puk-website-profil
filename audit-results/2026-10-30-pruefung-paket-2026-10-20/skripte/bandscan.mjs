// Sucht auf allen aktiven Vorschauseiten Elemente der Rücksetzregel in blauen oder nachtblauen Bändern und misst Text in Bändern.
import {chromium} from 'playwright'; import fs from 'node:fs'; import path from 'node:path';
const [root, base, out] = process.argv.slice(2);
const dirs=['templates/website/longform','templates/website/applications','templates/website/interaktion','templates/website/psychoeducation-site-starter','templates/website/minimal-starter','templates/website/profilbeispiel','ui_kits/website'];
const urls=['index.html','musterauswahl.html','templates/website/Website.dc.html',...dirs.flatMap(d=>fs.readdirSync(path.join(root,d)).filter(x=>x.endsWith('.html')).map(x=>d+'/'+x))];
const css=fs.readFileSync(path.join(root,'components/bundle.css'),'utf8');
const sel=/:where\(\.puk-web-band,\[data-puk-surface="night"\]\) :where\((.+?)\)\{--text-default/.exec(css)[1];
const b=await chromium.launch({executablePath:process.env.CHROMIUM_EXECUTABLE_PATH});const erg={seiten:urls.length,treffer:[],baender:0,texte:0,unter45:[]};
for(const theme of ['standard','kontrast']){const p=await b.newPage({viewport:{width:1280,height:900}});
for(const u of urls){await p.goto(base+u,{waitUntil:'networkidle'});await p.evaluate(t=>{if(t==='kontrast')document.documentElement.setAttribute('data-theme','kontrast')},theme);
const r=await p.evaluate(sel=>{const parse=c=>{const m=c.match(/rgba?\(([^)]+)\)/);const v=m[1].split(/[ ,/]+/).filter(Boolean).map(Number);return v.length>3&&v[3]===0?null:v};
const lum=c=>{const f=v=>{v/=255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4};return .2126*f(c[0])+.7152*f(c[1])+.0722*f(c[2])};
const bg=e=>{for(let x=e;x;x=x.parentElement){const c=parse(getComputedStyle(x).backgroundColor);if(c)return c}return[255,255,255]};
const bands=[...document.querySelectorAll('.puk-web-band,[data-puk-surface="night"]')];const treffer=[];let texte=0;const tief=[];
for(const band of bands){for(const e of band.querySelectorAll(sel))treffer.push(e.className||e.tagName);
for(const e of band.querySelectorAll('*')){if(![...e.childNodes].some(n=>n.nodeType===3&&n.nodeValue.trim()))continue;const s=getComputedStyle(e);if(s.visibility==='hidden'||s.display==='none'||!e.getClientRects().length)continue;texte++;const f=parse(s.color),g=bg(e);const k=(Math.max(lum(f),lum(g))+.05)/(Math.min(lum(f),lum(g))+.05);if(k<4.5)tief.push(e.tagName+'.'+e.className+' '+k.toFixed(2))}}
return {bands:bands.length,treffer,texte,tief}},sel);
erg.baender+=r.bands;erg.texte+=r.texte;for(const t of r.treffer)erg.treffer.push(theme+' '+u+' '+t);for(const t of r.tief)erg.unter45.push(theme+' '+u+' '+t);}
await p.close();}
await b.close();fs.writeFileSync(out,JSON.stringify(erg,null,1));console.log(`Seiten ${erg.seiten}, Bänder (beide Themes) ${erg.baender}, Textelemente ${erg.texte}, Regelflächen im Band ${erg.treffer.length}, unter 4,5:1 ${erg.unter45.length}`);console.log(erg.treffer.slice(0,10).join('\n'));console.log(erg.unter45.slice(0,10).join('\n'));
