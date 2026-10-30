import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {before,after,test} from 'node:test';
import {chromium} from 'playwright';
import {root,browserOptions} from './helpers.mjs';
import {serverStart} from '../tools/server.mjs';

// Profilentscheid 29.10.2026: Nachtblau als benannte Schattierung, nachtblaue Fläche, Titelbild der Startseite.
const tokens=JSON.parse(fs.readFileSync(path.join(root,'tokens.json'),'utf8'));
const byName=Object.fromEntries(tokens.color.tokens.map(t=>[t.name,t]));
function hex(name,theme){
 const t=byName[name];assert.ok(t,name);
 const v=t.value[theme]??t.value.light;
 const alias=/^\{(.+)\}$/.exec(v);
 return alias?hex(alias[1],theme):v.toLowerCase();
}
function luminance(h){
 const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);
 return .2126*c[0]+.7152*c[1]+.0722*c[2];
}
const ratio=(a,b)=>{const [x,y]=[luminance(a),luminance(b)].sort((m,n)=>n-m);return (x+.05)/(y+.05);};
const read=p=>fs.readFileSync(path.join(root,p),'utf8');

test('Nachtblau ist benannt, in beiden Themes gleich und trägt Weiss und Blau 25 mit mehr als 7:1',()=>{
 assert.equal(hex('puk-blue-night','light'),'#182866');
 assert.equal(hex('surface-night','light'),'#182866');
 assert.equal(hex('surface-night','kontrast'),'#182866');
 for(const theme of ['light','kontrast'])for(const fg of ['text-on-dark','puk-blue-25']){
  const r=ratio(hex(fg,theme),hex('surface-night',theme));
  assert.ok(r>=7,`${theme} ${fg} ${r.toFixed(2)}`);
 }
 assert.equal(ratio(hex('text-on-dark','light'),'#182866').toFixed(2),'13.69');
 assert.equal(ratio(hex('puk-blue-25','light'),'#182866').toFixed(2),'10.45');
 for(const fg of ['puk-blue-100','puk-blue-125'])assert.ok(ratio(hex(fg,'light'),'#182866')<4.5,fg);
 for(const file of ['tokens/colors.css','components/bundle.css']){
  const css=read(file);
  assert.match(css,/--puk-blue-night:#182866;/,file);
  assert.match(css,/--surface-night:var\(--puk-blue-night\);/,file);
 }
 assert.doesNotMatch(read('components/bundle.css').split(':root[data-theme="kontrast"]{')[1].split('}')[0],/night/,'Theme «Hoher Kontrast» überschreibt Nachtblau nicht');
});

test('Leitlinie 02 nennt Geltung, Zählung und die vier Bedingungen des Titelbilds',()=>{
 const g=read('guidelines/02-farben-und-kontrast.md');
 for(const s of ['--puk-blue-night','--surface-night','data-puk-surface="night"','13,69:1','10,45:1','zählt nicht als «das eine blaue Feld»','rein dekorativ','für Screenreader verborgen','keine Bedeutung','kein Rot','nur einmal je Website','gilt als das eine blaue Feld der Startseite','ENTSCHEIDE-PROFIL-2026-10-10.md'])assert.ok(g.includes(s),s);
 assert.ok(g.includes('Einzige Ausnahme ist das Titelbild der Startseite'),'Vermeiden-Regel nennt die Ausnahme');
 // Entscheid 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-15.md, W-1): keine hellen Komponenten in Bändern.
 for(const s of ['Keine hellen Komponenten in Bändern','blau oder nachtblau','ausserhalb des Bandes','ENTSCHEIDE-PROFIL-2026-10-15.md'])assert.ok(g.includes(s),s);
});

// Nachbesserung 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-17.md, O-4): Regel W-1 auch zu Nachtblau, im README und in der Karte «PUK-Blau».
test('Die Regel gegen helle Komponenten in Bändern steht zu Nachtblau, im README und in der Karte «PUK-Blau»',()=>{
 const g=read('guidelines/02-farben-und-kontrast.md');
 const abschnitt=(text,titel)=>{const i=text.indexOf('\n## '+titel);assert.ok(i>=0,titel);const rest=text.slice(i+1);const j=rest.indexOf('\n## ');return j<0?rest:rest.slice(0,j);};
 assert.match(abschnitt(g,'PUK-Blau'),/\*\*Keine hellen Komponenten in Bändern:\*\*/,'Punkt im Abschnitt «PUK-Blau»');
 const nacht=abschnitt(g,'Profilentscheid 29.10.2026: Nachtblau');
 for(const s of ['**Helle Komponenten:**','Auch auf Nachtblau stehen keine Karten','W-1'])assert.ok(nacht.includes(s),`Nachtblau: ${s}`);
 const readme=read('README.md');
 for(const s of ['In Bändern, blau oder nachtblau, stehen keine hellen Komponenten','ENTSCHEIDE-PROFIL-2026-10-15.md'])assert.ok(readme.includes(s),`README: ${s}`);
 const karte=read('components/GrundlageFarbeBlau/README.md');
 for(const s of ['**Keine hellen Komponenten in Bändern:**','blauer und nachtblauer Bänder','../../guidelines/02-farben-und-kontrast.md#puk-blau'])assert.ok(karte.includes(s),`Karte: ${s}`);
});

const fixture=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Profilentscheid</title>
<link rel="stylesheet" href="styles.css"></head>
<body class="puk-web-page"><main>
<p><a id="white" href="#x">Link auf Weiss</a></p>
<section id="band" class="puk-web-band" data-puk-surface="night"><p id="text">Text</p><span id="accent" class="puk-longform__kicker">Akzent</span>
<a id="link" href="#x">Link</a> <a id="plink" data-puk-link href="#x">Link</a> <a id="btn" class="puk-btn" href="#x">Knopf</a></section>
<div id="own" data-puk-surface="night"><a id="ownlink" href="#x">Link</a></div>
</main></body></html>`;

let server,browser;
before(async()=>{server=await serverStart(root);browser=await chromium.launch(browserOptions);});
after(async()=>{if(browser)await browser.close();if(server)await server.close();});

test('data-puk-surface="night" setzt Fläche, weisse unterstrichene Links und den umgekehrten Fokusring',async()=>{
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();
  try{
   await page.route(server.url+'nachtblau.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?fixture.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):fixture}));
   await page.goto(server.url+'nachtblau.html',{waitUntil:'load'});
   const c=(q,p='color')=>page.$eval(q,(el,p)=>getComputedStyle(el)[p],p);
   const night='rgb(24, 40, 102)',white='rgb(255, 255, 255)';
   assert.equal(await c('#band','backgroundColor'),night,theme);
   assert.equal(await c('#own','backgroundColor'),night,theme);
   assert.equal(await c('#text'),white,theme);
   assert.equal(await c('#accent'),'rgb(216, 224, 255)',theme);
   for(const id of ['#link','#plink','#ownlink']){
    assert.equal(await c(id),white,`${theme} ${id}`);
    assert.match(await c(id,'textDecorationLine'),/underline/,`${theme} ${id}`);
   }
   assert.doesNotMatch(await c('#btn','textDecorationLine'),/underline/,`${theme} Knopf-Link ohne Unterstreichung`);
   await page.hover('#link');
   assert.equal(await c('#link'),white,`${theme} Hover`);
   await page.focus('#plink');await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');
   const ring=await page.$eval('#plink',el=>getComputedStyle(el).boxShadow);
   assert.match(ring,/rgb\(24, 40, 102\) 0px 0px 0px 2px/,`${theme} Fokus innen`);
   assert.match(ring,/rgb\(255, 255, 255\) 0px 0px 0px 4px/,`${theme} Fokus aussen`);
   const blue=theme==='kontrast'?'rgb(0, 40, 194)':'rgb(60, 100, 255)';
   assert.equal(await c('#white'),blue,`${theme} ausserhalb unverändert`);
  }finally{await page.close();}
 }
});

// Nachbesserung 29.10.2026 (ENTSCHEIDE-PROFIL-2026-10-11.md, W-A): Druck der nachtblauen Fläche wie auf Weiss.
test('data-puk-surface="night" druckt ohne Fläche mit dunklem Text und Links wie auf Weiss',async()=>{
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();
  try{
   await page.route(server.url+'nachtblau-druck.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?fixture.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):fixture}));
   await page.goto(server.url+'nachtblau-druck.html',{waitUntil:'load'});
   await page.addStyleTag({content:'*{transition:none!important}'});
   await page.emulateMedia({media:'print'});
   const c=(q,p='color')=>page.$eval(q,(el,p)=>getComputedStyle(el)[p],p);
   for(const id of ['#band','#own'])assert.equal(await c(id,'backgroundColor'),'rgba(0, 0, 0, 0)',`${theme} ${id} ohne Fläche`);
   assert.equal(await c('#text'),'rgb(34, 34, 34)',`${theme} Text`);
   const white=await c('#white');
   for(const id of ['#link','#plink','#ownlink']){
    assert.equal(await c(id),white,`${theme} ${id} wie Link auf Weiss`);
    assert.match(await c(id,'textDecorationLine'),/underline/,`${theme} ${id}`);
   }
   assert.notEqual(await c('#accent'),'rgb(216, 224, 255)',`${theme} Akzent nicht Blau 25`);
  }finally{await page.close();}
 }
});

// Nachbesserung 29.10.2026 (ENTSCHEIDE-PROFIL-2026-10-12.md, O-D): Vorschau rendert auch, wenn React nach ds-base.js eintrifft.
test('Vorschau Website.dc.html rendert ohne Fehler, auch wenn React verzögert lädt',async()=>{
 const texts=[];
 for(const delay of [0,800]){
  const page=await browser.newPage({viewport:{width:360,height:900}});
  const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  try{
   if(delay)await page.route(u=>/react(-dom)?\.production\.min\.js$/.test(u.pathname),async r=>{await new Promise(x=>setTimeout(x,delay));await r.continue();});
   await page.goto(server.url+'templates/website/Website.dc.html',{waitUntil:'networkidle'});
   await page.waitForFunction(()=>document.body.innerText.includes('Sprechstunden'),null,{timeout:10000});
   assert.deepEqual(errors,[],`React ${delay} ms verzögert`);
   texts.push(await page.evaluate(()=>document.body.innerText));
  }finally{await page.close();}
 }
 assert.equal(texts[1],texts[0],'gleicher Inhalt mit und ohne Verzögerung');
});

// Nachbesserung 29.10.2026 (ENTSCHEIDE-PROFIL-2026-10-13.md, O-A): Sekundär- und Ghost-Button auf Nachtblau in Weiss.
const knoepfe=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Knöpfe</title><link rel="stylesheet" href="styles.css">
<script src="platform/vendor/react.production.min.js"></script><script src="platform/vendor/react-dom.production.min.js"></script><script src="components/bundle.js"></script></head>
<body class="puk-web-page"><main><p id="leer">Knöpfe</p><p><a id="w-sec" class="puk-btn puk-btn--secondary" href="#x">Sekundär</a><span id="w-react"></span></p>
<section class="puk-web-band" data-puk-surface="night"><a id="n-sec" class="puk-btn puk-btn--secondary" href="#x">Sekundär</a><button id="n-ghost" class="puk-btn puk-btn--ghost" type="button">Ghost</button><span id="n-react"></span></section></main>
<script src="knoepfe.js"></script></body></html>`;
const knoepfeJs=`const h=React.createElement,K=window.PUKWeb;
for(const p of ['w','n'])ReactDOM.createRoot(document.getElementById(p+'-react')).render(h(React.Fragment,null,h(K.Button,{variant:'secondary',id:p+'-rsec'},'Sekundär'),h(K.Button,{variant:'ghost',id:p+'-rghost'},'Ghost')));`;
test('Sekundär- und Ghost-Button stehen auf Nachtblau in Weiss, ausserhalb unverändert in Schwarz',async()=>{
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  try{
   await page.route(server.url+'knoepfe.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?knoepfe.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):knoepfe}));
   await page.route(server.url+'knoepfe.js',r=>r.fulfill({contentType:'text/javascript',body:knoepfeJs}));
   await page.goto(server.url+'knoepfe.html',{waitUntil:'load'});await page.waitForSelector('#n-rghost');
   await page.addStyleTag({content:'*{transition:none!important}'});
   // Die Maus steht anfangs auf (0,0); ohne Verschieben zeigt ein Knopf dort seinen Hover-Zustand.
   await page.hover('#leer');
   const c=(q,p='color')=>page.$eval(q,(el,p)=>getComputedStyle(el)[p],p);
   const white='rgb(255, 255, 255)',black='rgb(34, 34, 34)';
   for(const id of ['#n-sec','#n-ghost','#n-rsec','#n-rghost'])assert.equal(await c(id),white,`${theme} ${id}`);
   for(const id of ['#n-sec','#n-rsec'])assert.equal(await c(id,'borderTopColor'),white,`${theme} ${id} Rahmen`);
   for(const id of ['#w-sec','#w-rsec','#w-rghost'])assert.equal(await c(id),black,`${theme} ${id} ausserhalb`);
   for(const id of ['#n-sec','#n-rsec']){await page.hover(id);assert.equal(await c(id,'backgroundColor'),'rgb(244, 244, 244)',`${theme} ${id} Hover`);assert.notEqual(await c(id),white,`${theme} ${id} Hover-Text`);}
   await page.hover('#leer');
   // Gedrückt per Tastatur (ohne Hover): helle Fläche --ui-field, Schrift darf nicht weiss bleiben.
   const cdp=await page.context().newCDPSession(page);await cdp.send('DOM.enable');await cdp.send('CSS.enable');
   const {root}=await cdp.send('DOM.getDocument');
   for(const id of ['#n-sec','#n-ghost']){
    const {nodeId}=await cdp.send('DOM.querySelector',{nodeId:root.nodeId,selector:id});
    await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:['active','focus','focus-visible']});
    assert.equal(await c(id),black,`${theme} ${id} gedrückt`);
    await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:[]});
   }
   await page.emulateMedia({media:'print'});
   for(const id of ['#n-sec','#n-rsec'])assert.equal(await c(id),black,`${theme} ${id} Druck`);
   assert.deepEqual(errors,[],theme);
  }finally{await page.close();}
 }
});

// Nachbesserung 29.10.2026 (ENTSCHEIDE-PROFIL-2026-10-14.md, O-C und Knöpfe im blauen Band): Links, Akzent, Nebentext und ruhige Knöpfe im blauen Band in Weiss.
const blauesBand=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Blaues Band</title><link rel="stylesheet" href="styles.css"></head>
<body class="puk-web-page"><main><p id="leer">Leer</p><p><a id="w-a" href="#x">Link auf Weiss</a> <button id="w-dis" class="puk-btn puk-btn--secondary" disabled>Aus</button></p>
<section id="band" class="puk-web-band"><p id="kicker" class="puk-longform__kicker">Kicker</p><p id="text">Text mit <a id="link" href="#x">Link</a></p>
<p id="muted" style="color:var(--text-muted)">Nebentext</p><button id="sec" class="puk-btn puk-btn--secondary">Sekundär</button><button id="ghost" class="puk-btn puk-btn--ghost">Ghost</button><button id="dis" class="puk-btn puk-btn--secondary" disabled>Aus</button><a id="asec" class="puk-btn puk-btn--secondary" href="#x">Knopf-Link</a></section></main></body></html>`;
test('Im blauen Band stehen Links, Akzent, Nebentext und ruhige Knöpfe in Weiss; Druck wie auf Weiss',async()=>{
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();
  try{
   await page.route(server.url+'blaues-band.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?blauesBand.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):blauesBand}));
   await page.goto(server.url+'blaues-band.html',{waitUntil:'load'});
   await page.addStyleTag({content:'*{transition:none!important}'});
   await page.hover('#leer');
   const c=(q,p='color')=>page.$eval(q,(el,p)=>getComputedStyle(el)[p],p);
   const white='rgb(255, 255, 255)',black='rgb(34, 34, 34)';
   for(const id of ['#kicker','#text','#link','#muted','#sec','#ghost','#asec'])assert.equal(await c(id),white,`${theme} ${id}`);
   assert.match(await c('#link','textDecorationLine'),/underline/,`${theme} Link unterstrichen`);
   assert.equal(await c('#sec','borderTopColor'),white,`${theme} Sekundär-Rahmen`);
   for(const p of ['color','backgroundColor','borderTopColor'])assert.equal(await c('#dis',p),await c('#w-dis',p),`${theme} deaktiviert ${p}`);
   await page.hover('#sec');assert.equal(await c('#sec','backgroundColor'),'rgb(244, 244, 244)',`${theme} Hover`);assert.notEqual(await c('#sec'),white,`${theme} Hover-Text`);
   await page.hover('#leer');
   const cdp=await page.context().newCDPSession(page);await cdp.send('DOM.enable');await cdp.send('CSS.enable');
   const {root}=await cdp.send('DOM.getDocument');
   for(const id of ['#sec','#ghost']){
    const {nodeId}=await cdp.send('DOM.querySelector',{nodeId:root.nodeId,selector:id});
    await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:['active','focus','focus-visible']});
    assert.equal(await c(id),black,`${theme} ${id} gedrückt`);
    await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:[]});
   }
   await page.emulateMedia({media:'print'});
   const onWhite=await c('#w-a');
   for(const id of ['#link','#kicker'])assert.equal(await c(id),onWhite,`${theme} ${id} Druck`);
   for(const id of ['#text','#sec','#ghost'])assert.equal(await c(id),black,`${theme} ${id} Druck`);
   // button.puk-btn ist im Druck ausgeblendet; sichtbar bleibt der Knopf-Link (Nachbesserung 30.10.2026, O-2).
   assert.equal(await c('#sec','display'),'none',`${theme} Knopf im Druck ausgeblendet`);
   assert.notEqual(await c('#asec','display'),'none',`${theme} Knopf-Link im Druck sichtbar`);
   assert.equal(await c('#asec'),black,`${theme} Knopf-Link Druck`);
   assert.equal(await c('#asec','borderTopColor'),black,`${theme} Knopf-Link Rahmen Druck`);
  }finally{await page.close();}
 }
});
