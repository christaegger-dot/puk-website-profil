import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {before,after,test} from 'node:test';
import {chromium} from 'playwright';
import {root,browserOptions} from './helpers.mjs';
import {serverStart} from '../tools/server.mjs';

// Nachbesserung 23.10.2026 (ENTSCHEIDE-PROFIL-2026-10-9.md): W-1 Plattform-Bundle, W-2 Titeltrennung, W-3 Hover-Kontrast, O-4 Notfall-Alert.

test('Plattform-Bundle _ds_bundle.js ist bytegleich mit components/bundle.js',()=>{
 assert.ok(fs.readFileSync(path.join(root,'_ds_bundle.js')).equals(fs.readFileSync(path.join(root,'components/bundle.js'))));
});

let server,browser;
before(async()=>{server=await serverStart(root);browser=await chromium.launch(browserOptions);});
after(async()=>{if(browser)await browser.close();if(server)await server.close();});

const fixture=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Nachbesserung</title>
<link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="templates/website/longform/erklaermuster.css">
<script src="platform/vendor/react.production.min.js"></script><script src="platform/vendor/react-dom.production.min.js"></script><script src="components/bundle.js"></script></head>
<body class="puk-web-page"><main>
<button id="ghost" class="puk-btn puk-btn--ghost" type="button">Ghost</button>
<button id="vis" class="puk-vis-btn" type="button">Figur</button>
<div id="react"></div></main>
<script>const h=React.createElement,K=window.PUKWeb;
ReactDOM.createRoot(document.getElementById('react')).render(h('div',null,
 h(K.Button,{variant:'ghost',id:'rghost'},'Ghost'),
 h(K.IconButton,{icon:'x',label:'Schliessen',id:'ricon'}),
 h(K.Alert,{tone:'emergency',title:'Notfall'},h('a',{id:'emergency',href:'#x'},'Link'))));</script></body></html>`;

test('Hover auf grauer Fläche steht in Blau 125; Links im Notfall-Alert in Weiss',async()=>{
 const page=await browser.newPage({viewport:{width:800,height:600}});
 try{
  await page.route(server.url+'nachbesserung.html',r=>r.fulfill({contentType:'text/html',body:fixture}));
  await page.goto(server.url+'nachbesserung.html',{waitUntil:'networkidle'});
  const color=async id=>{await page.hover('#'+id);await page.waitForTimeout(200);return page.$eval('#'+id,el=>[getComputedStyle(el).color,getComputedStyle(el).backgroundColor]);};
  for(const id of ['ghost','vis','rghost','ricon'])assert.deepEqual(await color(id),['rgb(43, 79, 224)','rgb(244, 244, 244)'],id);
  assert.equal(await page.$eval('#emergency',el=>getComputedStyle(el).color),'rgb(255, 255, 255)');
  assert.equal((await color('emergency'))[0],'rgb(255, 255, 255)');
  assert.equal(await page.$eval('#emergency',el=>{let e=el,bg;while(e&&(!(bg=getComputedStyle(e).backgroundColor)||bg==='rgba(0, 0, 0, 0)'))e=e.parentElement;return bg;}),'rgb(158, 40, 20)');
 }finally{await page.close();}
});

test('Website-Titel bleiben bei Standardschrift ungetrennt und brechen bei 320 und 375 px mit 200 % Schrift nur an weichen Trennstellen',async()=>{
 const pages=['templates/website/psychoeducation-site-starter/index.html','templates/website/psychoeducation-site-starter/unterstuetzung-finden.html','templates/website/psychoeducation-site-starter/impressum-datenschutz.html','templates/website/profilbeispiel/index.html','templates/website/minimal-starter/thema.html'];
 let checked=0;
 for(const url of pages)for(const width of [320,375])for(const scale of [1,2]){
  const page=await browser.newPage({viewport:{width,height:900}});
  try{
   await page.goto(server.url+url,{waitUntil:'load'});
   await page.evaluate(scale=>{if(scale===2)document.documentElement.style.setProperty('font-size','200%','important');return document.fonts.ready;},scale);
   const state=await page.evaluate(()=>{
    const h1=document.querySelector('main h1'),node=[...h1.childNodes].find(n=>n.nodeType===3),text=node.data;
    const broken=[],hyphenated=[];let pos=0;
    for(const word of text.split(/\s+/).filter(Boolean)){
     const i=text.indexOf(word,pos);pos=i+word.length;const r=document.createRange();r.setStart(node,i);r.setEnd(node,i+word.length);
     const lines=new Set([...r.getClientRects()].map(x=>Math.round(x.top))).size;
     if(lines>1)(word.includes('\u00AD')?hyphenated:broken).push(word.replace(/\u00AD/g,'|'));
    }
    return {hyphens:getComputedStyle(h1).hyphens,overflow:document.documentElement.scrollWidth-document.documentElement.clientWidth,broken,hyphenated};
   });
   const label=`${url} ${width} ${scale*100} %`;
   assert.equal(state.hyphens,scale===2?'auto':'none',label);
   assert.ok(state.overflow<=1,label);
   assert.deepEqual(state.broken,[],label+' bricht ohne Trennstelle: '+state.broken.join(', '));
   if(scale===1)assert.deepEqual(state.hyphenated,[],label+' trennt bei Standardschrift: '+state.hyphenated.join(', '));
   checked++;
  }finally{await page.close();}
 }
 console.log(`${checked} Titelzustände ohne willkürlichen Wortbruch.`);
});
