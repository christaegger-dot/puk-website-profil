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
 // Nachbesserung 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-19.md, O-3): Knöpfe im Band sind .puk-btn und React-Button; Reiter, Formularelemente und Menüs stehen ausserhalb.
 for(const s of ['Knöpfe meint die Klassen `.puk-btn` und den React-`Button`','Reiter (`Tabs`)','Menüs (`DisclosureMenu`)'])assert.ok(g.includes(s),s);
 // Nachbesserung 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-20.md, O-4 und W-3): Regel auch im Abschnitt Nachtblau, im README und in der Karte «PUK-Blau»; erfasste und nicht erfasste Flächen.
 assert.match(g,/\*\*Helle Komponenten:\*\* Auch auf Nachtblau stehen keine Karten/,'Leitlinie 02, Abschnitt Nachtblau');
 for(const s of ['`.puk-app-card`','`.puk-vis-layers`','offene Erklärgrafik (`.puk-vis-figure--open`)','Erklärgrafiken gehören deshalb nie in ein Band','ENTSCHEIDE-PROFIL-2026-10-20.md'])assert.ok(g.includes(s),s);
 const r=read('README.md');
 for(const s of ['In Bändern, blau oder nachtblau, stehen keine hellen Komponenten','`data-puk-light`','offene Erklärgrafik','ENTSCHEIDE-PROFIL-2026-10-20.md'])assert.ok(r.includes(s),'README: '+s);
 const k=read('components/GrundlageFarbeBlau/README.md');
 for(const s of ['**Keine hellen Komponenten in Bändern:**','`data-puk-light`','offene Erklärgrafik','(../../guidelines/02-farben-und-kontrast.md#puk-blau)'])assert.ok(k.includes(s),'Karte: '+s);
 assert.match(g,/^## PUK-Blau$/m,'Anker #puk-blau');
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

// Nachbesserung 29.10.2026 (ENTSCHEIDE-PROFIL-2026-10-14.md, O-C und Punkt «Knöpfe im blauen Band»): Links, Akzent, Nebentext und ruhige Knöpfe im blauen Band in Weiss.
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

// Nachbesserung 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-17.md, W-1; Regel ENTSCHEIDE-PROFIL-2026-10-15.md): helle Komponenten in Bändern zeigen die Farben der Seitenfläche.
const helleFlaechen=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Helle Flächen</title><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="templates/website/psychoeducation-site-starter/starter.css">
<script src="platform/vendor/react.production.min.js"></script><script src="platform/vendor/react-dom.production.min.js"></script><script src="components/bundle.js"></script></head>
<body class="puk-web-page"><main><p id="leer">Leer</p>
<div id="w" class="puk-web-container"></div><section id="b" class="puk-web-band"></section><section id="n" class="puk-web-band" data-puk-surface="night"></section></main>
<script src="helle-flaechen.js"></script></body></html>`;
// Erweitert 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-19.md, O-6): alle erfassten Flächen, dazu Hover, Fokus, gedrückt und Druck.
const helleFlaechenJs=`const h=React.createElement,K=window.PUKWeb;
for(const p of ['w','b','n']){const box=document.createElement('div');box.innerHTML='<div id="'+p+'-tint" data-puk-surface="tint" style="padding:8px"><a id="'+p+'-tlink" href="#x">Link</a> <span id="'+p+'-tmuted" style="color:var(--text-muted)">Neben</span> <button id="'+p+'-tsec" class="puk-btn puk-btn--secondary">Sekundär</button> <button id="'+p+'-tghost" class="puk-btn puk-btn--ghost">Ghost</button> <a id="'+p+'-tasec" class="puk-btn puk-btn--secondary" href="#x">Knopf-Link</a></div><div data-puk-light style="background:#fff;padding:8px"><a id="'+p+'-llink" href="#x">Link</a> <span id="'+p+'-ltext">Text</span></div>'+
 '<dialog id="'+p+'-dlg" class="puk-dialog"><div class="puk-dialog__head"><h2 id="'+p+'-dtitle" class="puk-dialog__title">Dialog</h2><button id="'+p+'-dclose" class="puk-dialog__close" aria-label="Schliessen">×</button></div><p id="'+p+'-dtext">Text <a id="'+p+'-dlink" href="#x">Link</a> <button id="'+p+'-dsec" class="puk-btn puk-btn--secondary">Sekundär</button></p></dialog>'+
 '<div class="puk-filter"><input id="'+p+'-finput" class="puk-filter__input" value="Suche" aria-label="Suche"><p id="'+p+'-fstatus" class="puk-filter__status">3 Treffer</p></div>'+
 '<figure class="puk-longform__figure"><span id="'+p+'-lftext">Figur</span> <a id="'+p+'-lflink" href="#x">Link</a></figure><div class="puk-longform__support"><span id="'+p+'-lstext">Stütze</span></div>'+
 '<div class="puk-web-media" id="'+p+'-media">Bild</div><span class="puk-site-draft" id="'+p+'-draft">Entwurf</span><div id="'+p+'-react"></div>';document.getElementById(p).appendChild(box);
 document.getElementById(p+'-dlg').show();
 ReactDOM.createRoot(document.getElementById(p+'-react')).render(h(React.Fragment,null,
  h(K.Card,{eyebrow:'Eyebrow',title:'Karte',footer:h(K.Button,{variant:'secondary',id:p+'-csec'},'Sekundär')},h('span',{id:p+'-ctext'},'Inhalt '),h('a',{id:p+'-clink',href:'#x'},'Link')),
  h(K.Card,{variant:'sunken',title:'Versenkt'},h('a',{id:p+'-slink',href:'#x'},'Link')),
  h(K.Alert,{title:'Hinweis'},h('a',{id:p+'-alink',href:'#x'},'Link')),
  h(K.Toast,{title:'Toast'},h('span',{id:p+'-toast'},'Nachricht')),
  h(K.Input,{id:p+'-input',defaultValue:'Eingabe','aria-label':'Eingabe'}),
  h(K.Select,{id:p+'-select','aria-label':'Auswahl',options:['Eins','Zwei']}),
  h(K.Textarea,{id:p+'-textarea',defaultValue:'Text','aria-label':'Text'}),
  h('div',{id:p+'-menu'},h(K.DisclosureMenu,{label:'Menü',items:[{label:'Eintrag',href:'#x'}]}))));}
window.__bereit=true;`;
test('Helle Komponenten in blauem Band und Nachtblau zeigen dieselben Farben wie auf Weiss',async()=>{
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  try{
   await page.route(server.url+'helle-flaechen.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?helleFlaechen.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):helleFlaechen}));
   await page.route(server.url+'helle-flaechen.js',r=>r.fulfill({contentType:'text/javascript',body:helleFlaechenJs}));
   await page.goto(server.url+'helle-flaechen.html',{waitUntil:'load'});await page.waitForFunction(()=>window.__bereit&&document.querySelector('#n-textarea'));
   for(const p of ['w','b','n'])await page.click('#'+p+'-menu .puk-disclosure__button');
   await page.addStyleTag({content:'*{transition:none!important;animation:none!important}'});await page.hover('#leer');
   const look=sel=>page.$eval(sel,e=>{const s=getComputedStyle(e);return [s.color,s.borderTopColor,s.backgroundColor].join(' | ');});
   const eyebrow=p=>page.$eval('#'+p+'-react span',e=>getComputedStyle(e).color);
   const sel=(p,k)=>k==='disclink'?'#'+p+'-menu .puk-disclosure__link':'#'+p+'-'+k;
   const ruhe=['tlink','tmuted','tsec','tghost','tasec','llink','ltext','dtitle','dclose','dtext','dlink','dsec','finput','fstatus','lftext','lflink','lstext','media','draft','csec','ctext','clink','slink','alink','toast','input','select','textarea','disclink'];
   for(const k of ruhe){
    const white=await look(sel('w',k));
    for(const p of ['b','n'])assert.equal(await look(sel(p,k)),white,`${theme} ${p}-${k}`);
   }
   for(const p of ['b','n'])assert.equal(await eyebrow(p),await eyebrow('w'),`${theme} ${p} Eyebrow`);
   // Hover mit der Maus
   for(const k of ['tsec','tghost','dsec','csec','tlink','llink','clink','dclose']){
    const state=async p=>{await page.hover(sel(p,k));const v=await look(sel(p,k));await page.hover('#leer');return v;};
    const white=await state('w');
    for(const p of ['b','n'])assert.equal(await state(p),white,`${theme} ${p}-${k} Hover`);
   }
   // Fokus sowie gedrückt ohne Hover
   const cdp=await page.context().newCDPSession(page);await cdp.send('DOM.enable');await cdp.send('CSS.enable');
   const {root}=await cdp.send('DOM.getDocument',{depth:-1});
   for(const forced of [['focus','focus-visible'],['active','focus','focus-visible']])for(const k of ['tsec','tghost','tasec','dsec','csec','tlink','clink','dclose','input','select','textarea']){
    const state=async p=>{const {nodeId}=await cdp.send('DOM.querySelector',{nodeId:root.nodeId,selector:sel(p,k)});await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:forced});
     const v=await page.$eval(sel(p,k),e=>{const s=getComputedStyle(e);return [s.color,s.borderTopColor,s.backgroundColor,s.boxShadow].join(' | ');});await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:[]});return v;};
    const white=await state('w');
    for(const p of ['b','n'])assert.equal(await state(p),white,`${theme} ${p}-${k} ${forced[0]==='active'?'gedrückt':'Fokus'}`);
   }
   await page.emulateMedia({media:'print'});
   for(const k of ruhe){
    const c=q=>page.$eval(q,e=>{const s=getComputedStyle(e);return s.display==='none'?'ausgeblendet':[s.color,s.borderTopColor].join(' | ');});
    const white=await c(sel('w',k));
    for(const p of ['b','n'])assert.equal(await c(sel(p,k)),white,`${theme} ${p}-${k} Druck`);
   }
   assert.deepEqual(errors,[],theme);
  }finally{await page.close();}
 }
});

// Nachbesserung 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-18.md, W-2): Erklärgrafiken und Karussell-Knöpfe in Bändern wie auf Weiss.
const erklaergrafik=p=>`<figure class="puk-vis-figure" id="${p}-fig"><p class="puk-vis-label" id="${p}-label">Erklärgrafik</p>
<div class="puk-vis-compare"><div class="puk-vis-compare__col"><p class="puk-vis-compare__key" id="${p}-key">A</p><h3 id="${p}-h3">Spalte</h3><dl><dt id="${p}-dt">Merkmal</dt><dd id="${p}-dd">Wert</dd></dl></div></div>
<figcaption class="puk-vis-caption" id="${p}-cap">Legende <a id="${p}-a" href="#x">Link</a></figcaption></figure>
<ol class="puk-vis-decide"><li id="${p}-decide">Schritt</li></ol><div class="puk-vis-longdesc" id="${p}-long"><p>Langbeschreibung</p></div>
<figure class="puk-vis-figure puk-vis-figure--open"><p class="puk-vis-label" id="${p}-open">Offen</p><div class="puk-vis-illu"><p class="puk-vis-illu__stamp" id="${p}-stamp">Platzhalter</p></div></figure><div id="${p}-k"></div>`;
const erklaergrafikHtml=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Erklärgrafik</title><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="templates/website/longform/visual-patterns.css">
<script src="platform/vendor/react.production.min.js"></script><script src="platform/vendor/react-dom.production.min.js"></script><script src="components/bundle.js"></script></head>
<body class="puk-web-page"><main><p id="leer">Leer</p><div id="w">${erklaergrafik('w')}</div><section class="puk-web-band" id="b">${erklaergrafik('b')}</section><section class="puk-web-band" data-puk-surface="night" id="n">${erklaergrafik('n')}</section></main>
<script src="erklaergrafik.js"></script></body></html>`;
const erklaergrafikJs=`for(const p of ['w','b','n'])ReactDOM.createRoot(document.getElementById(p+'-k')).render(React.createElement(window.PUKWeb.Carousel,{label:'Karussell',items:[{title:'Eins',content:'Inhalt'},{title:'Zwei'}]}));`;
test('Erklärgrafiken und Karussell-Knöpfe in blauem Band und Nachtblau zeigen dieselben Farben wie auf Weiss',async()=>{
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  try{
   await page.route(server.url+'erklaergrafik.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?erklaergrafikHtml.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):erklaergrafikHtml}));
   await page.route(server.url+'erklaergrafik.js',r=>r.fulfill({contentType:'text/javascript',body:erklaergrafikJs}));
   await page.goto(server.url+'erklaergrafik.html',{waitUntil:'load'});await page.waitForSelector('#n-k .puk-carousel__btn');
   await page.addStyleTag({content:'*{transition:none!important}'});await page.hover('#leer');
   const look=sel=>page.$eval(sel,e=>{const s=getComputedStyle(e);return [s.color,s.borderTopColor,s.backgroundColor].join(' | ');});
   const btn=p=>`#${p}-k .puk-carousel__btn:last-of-type`;
   for(const k of ['label','key','h3','dt','dd','cap','a','decide','long','stamp']){
    const white=await look('#w-'+k);
    for(const p of ['b','n'])assert.equal(await look('#'+p+'-'+k),white,`${theme} ${p}-${k}`);
   }
   const cdp=await page.context().newCDPSession(page);await cdp.send('DOM.enable');await cdp.send('CSS.enable');
   const {root}=await cdp.send('DOM.getDocument');
   for(const state of [[],['focus','focus-visible'],['active','focus','focus-visible']]){
    const shot=async p=>{const {nodeId}=await cdp.send('DOM.querySelector',{nodeId:root.nodeId,selector:btn(p)});await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:state});
     const v=await page.$eval(btn(p),e=>{const s=getComputedStyle(e);return [s.color,s.backgroundColor,s.boxShadow].join(' | ');});await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:[]});return v;};
    const white=await shot('w');
    for(const p of ['b','n'])assert.equal(await shot(p),white,`${theme} ${p} Karussell-Knopf ${state.join('+')||'Ruhe'}`);
   }
   // Gegenprobe: Ohne eigene Fläche behalten offene Erklärgrafik und Karussell-Status die Farben des Bandes.
   const c=q=>page.$eval(q,e=>getComputedStyle(e).color);
   assert.equal(await c('#n-open'),'rgb(255, 255, 255)',`${theme} offene Erklärgrafik auf Nachtblau`);
   assert.equal(await c('#b-k .puk-carousel__status'),'rgb(255, 255, 255)',`${theme} Karussell-Status im blauen Band`);
   await page.emulateMedia({media:'print'});
   for(const k of ['label','key','h3','dt','cap'])for(const p of ['b','n'])assert.equal(await c('#'+p+'-'+k),await c('#w-'+k),`${theme} ${p}-${k} Druck`);
   assert.deepEqual(errors,[],theme);
  }finally{await page.close();}
 }
});

// Nachbesserung 30.10.2026 (ENTSCHEIDE-PROFIL-2026-10-20.md, W-3 und O-7): jeder Eintrag der Rücksetzregel einzeln.
// Die Liste muss genau den Selektoren der Regel entsprechen; fehlt ein Eintrag in der Regel, erbt die Fläche im Band Weiss.
const regel=[
 ['[data-puk-light]','<div data-puk-light id="ID">Text</div>'],
 ['[data-puk-surface]:not([data-puk-surface="night"])','<div data-puk-surface="tint" id="ID">Text</div>'],
 ['.puk-dialog','<div class="puk-dialog" id="ID">Text</div>'],
 ['.puk-disclosure__panel','<div class="puk-disclosure__panel" style="position:static" id="ID">Text</div>'],
 ['.puk-carousel__slide','<div class="puk-carousel__slide" id="ID">Text</div>'],
 ['.puk-carousel__btn','<button class="puk-carousel__btn" id="ID">›</button>'],
 ['.puk-filter','<div class="puk-filter" id="ID">Text</div>'],
 ['.puk-longform__figure','<figure class="puk-longform__figure" id="ID">Text</figure>'],
 ['.puk-longform__figure-side','<div class="puk-longform__figure-side" id="ID">Text</div>'],
 ['.puk-longform__support','<div class="puk-longform__support" id="ID">Text</div>'],
 ['.puk-longform__reflection','<div class="puk-longform__reflection" id="ID">Text</div>'],
 ['.puk-longform__term-guide>div','<dl class="puk-longform__term-guide"><div id="ID">Text</div></dl>'],
 ['.puk-web-media','<div class="puk-web-media" id="ID">Bild</div>'],
 ['.puk-vis-figure:not(.puk-vis-figure--open)','<figure class="puk-vis-figure" id="ID">Text</figure>'],
 ['.puk-vis-longdesc','<div class="puk-vis-longdesc" id="ID">Text</div>'],
 ['.puk-vis-cycle li','<ol class="puk-vis-cycle"><li id="ID">Text</li></ol>'],
 ['.puk-vis-compare__col','<div class="puk-vis-compare__col" id="ID">Text</div>'],
 ['.puk-vis-decision__branch','<div class="puk-vis-decision__branch" id="ID">Text</div>'],
 ['.puk-vis-illu','<div class="puk-vis-illu" id="ID">Text</div>'],
 ['.puk-vis-tablewrap','<div class="puk-vis-tablewrap" id="ID">Text</div>'],
 ['.puk-vis-decide li','<ol class="puk-vis-decide"><li id="ID">Text</li></ol>'],
 ['.puk-site-draft','<span class="puk-site-draft" id="ID">Entwurf</span>'],
 ['.puk-site-placeholder','<div class="puk-site-placeholder" id="ID">Platzhalter</div>'],
 ['.puk-site-safety--direct','<div class="puk-site-safety puk-site-safety--direct" id="ID"><p class="puk-site-safety__title">Titel</p></div>'],
 ['.puk-app-card','<div class="puk-app-card" id="ID"><h3>Titel</h3><p>Text</p></div>'],
 ['.puk-app-chip','<button class="puk-app-chip" id="ID">Chip</button>'],
 ['.puk-app-choice','<button class="puk-app-choice" id="ID"><strong>Wahl</strong>Text</button>'],
 ['.puk-app-boundary','<div class="puk-app-boundary" id="ID">Grenze</div>'],
 ['.puk-app-mini','<button class="puk-app-mini" id="ID">Mini</button>'],
 ['.puk-app-detail','<div class="puk-app-detail" id="ID"><h2>Detail</h2><p>Text</p></div>'],
 ['.puk-app-output','<div class="puk-app-output" id="ID"><h2>Ergebnis</h2></div>'],
 ['.puk-app-empty','<div class="puk-app-empty" id="ID">Leer</div>'],
 ['.puk-app-contact-target','<div class="puk-app-contact-target" id="ID"><h2>Kontakt</h2><p>Text</p></div>'],
 ['.puk-vis-layers','<div class="puk-vis-layers" id="ID"><div class="puk-vis-layers__zone"><ul><li>Schicht</li></ul></div></div>'],
 ['.puk-vis-btn','<button class="puk-vis-btn" id="ID">Knopf</button>'],
 ['input','<input id="ID" value="Eingabe" aria-label="Eingabe">'],
 ['select','<select id="ID" aria-label="Auswahl"><option>Eins</option></select>'],
 ['textarea','<textarea id="ID" aria-label="Text">Text</textarea>']
];
const regelHtml=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Rücksetzregel</title><link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="templates/website/psychoeducation-site-starter/starter.css"><link rel="stylesheet" href="templates/website/applications/applications.css">
<link rel="stylesheet" href="templates/website/longform/visual-patterns.css"><link rel="stylesheet" href="templates/website/longform/erklaermuster.css"></head>
<body class="puk-web-page"><main>${['w','b','n'].map(p=>`<${p==='w'?'div':'section'} id="${p}"${p==='w'?'':' class="puk-web-band"'}${p==='n'?' data-puk-surface="night"':''}>${regel.map(([,html],i)=>html.replace('id="ID"',`id="${p}-${i}"`)).join('')}</${p==='w'?'div':'section'}>`).join('')}</main></body></html>`;
test('Jeder Eintrag der Rücksetzregel gibt seiner Fläche im Band die Werte der Seitenfläche zurück',async()=>{
 for(const file of ['tokens/base.css','components/bundle.css']){
  const m=/:where\(\.puk-web-band,\[data-puk-surface="night"\]\) :where\((.+?)\)\{--text-default/.exec(read(file));
  assert.ok(m,`${file} Rücksetzregel`);
  assert.deepEqual(m[1].split(',').filter(Boolean),regel.map(([s])=>s),`${file}: Selektoren der Regel und Testliste stimmen überein`);
 }
 const props=['color','--text-default','--text-muted','--text-link','--text-link-hover','--text-link-visited','--text-accent','--action-quiet-fg','--focus-ring'];
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  try{
   await page.route(server.url+'ruecksetzregel.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?regelHtml.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):regelHtml}));
   await page.goto(server.url+'ruecksetzregel.html',{waitUntil:'load'});
   // Native Formularfelder haben auf Weiss die Browserfarbe #000, im Band #222 aus der Regel; verglichen werden dort nur die Variablen.
   const werte=(id,ohneFarbe)=>page.$eval('#'+id,(e,props)=>{const s=getComputedStyle(e);return props.map(p=>p+'='+(p==='color'?s.color:s.getPropertyValue(p).trim())).join(' | ');},ohneFarbe?props.slice(1):props);
   for(let i=0;i<regel.length;i++){
    const nativ=['input','select','textarea'].includes(regel[i][0]);
    const werteI=id=>werte(id,nativ);
    const white=await werteI('w-'+i);
    for(const p of ['b','n'])assert.equal(await werteI(p+'-'+i),white,`${theme} ${p} ${regel[i][0]}`);
   }
   assert.deepEqual(errors,[],theme);
  }finally{await page.close();}
 }
});
