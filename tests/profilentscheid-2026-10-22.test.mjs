import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {before,after,test} from 'node:test';
import {chromium} from 'playwright';
import {root,browserOptions} from './helpers.mjs';
import {serverStart} from '../tools/server.mjs';

// Profilentscheid 22.10.2026: getönte Fläche, Links darauf in Blau 125, Website-Titel h1/h2 in Medium.
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
const tinted=['ui-tint','surface-tint','ui-field','ui-wash','surface-sunken','surface-accent','surface-structure','puk-yellow-50','ui-danger-wash','puk-blue-25'];

test('Links auf getönten Flächen erreichen in beiden Themes 4,5:1, Blau 100 dort nicht',()=>{
 assert.equal(hex('ui-tint','light'),'#f5f7ff');
 assert.equal(hex('surface-tint','light'),'#f5f7ff');
 assert.equal(hex('text-link-on-tint','light'),hex('puk-blue-125','light'));
 for(const theme of ['light','kontrast'])for(const surface of tinted){
  const r=ratio(hex('text-link-on-tint',theme),hex(surface,theme));
  assert.ok(r>=4.5,`${theme} ${surface} ${r.toFixed(2)}`);
 }
 for(const surface of tinted)assert.ok(ratio(hex('puk-blue-100','light'),hex(surface,'light'))<4.5,surface);
 for(const name of ['text-default','text-muted'])assert.ok(ratio(hex(name,'light'),hex('ui-tint','light'))>=4.5,name);
});

let server,browser;
before(async()=>{server=await serverStart(root);browser=await chromium.launch(browserOptions);});
after(async()=>{if(browser)await browser.close();if(server)await server.close();});

const fixture=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Profilentscheid</title>
<link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="templates/website/longform/visual-patterns.css">
<link rel="stylesheet" href="templates/website/psychoeducation-site-starter/starter.css"></head>
<body class="puk-web-page"><main>
<h1 class="puk-web-h1">Titel</h1><h2 class="puk-web-h2">Abschnitt</h2><h3 class="puk-web-h3">Unterabschnitt</h3>
<p><a id="white" href="#x">Link auf Weiss</a></p>
<div id="tint" data-puk-surface="tint"><a href="#x">Link</a><span class="puk-longform__kicker">Kicker</span></div>
<div data-puk-surface><a id="own" href="#x">Link auf eigener Fläche</a></div>
<div class="puk-longform__support"><a id="support" data-puk-link href="#x">Link</a></div>
<div class="puk-longform__reflection"><a id="reflection" class="puk-link--inline" href="#x">Link</a></div>
<div class="puk-vis-figure"><a id="figure" href="#x">Link</a></div>
<div class="puk-site-placeholder"><a id="placeholder" href="#x">Link</a></div>
</main></body></html>`;

test('Getönte Flächen färben Links und Akzent in Blau 125; h1 und h2 stehen in Medium, h3 in Regular',async()=>{
 for(const theme of ['light','kontrast']){
  const page=await browser.newPage();
  try{
   await page.route(server.url+'profilentscheid.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?fixture.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):fixture}));
   await page.goto(server.url+'profilentscheid.html',{waitUntil:'load'});
   const s=await page.evaluate(()=>{
    const c=(q,p='color')=>getComputedStyle(document.querySelector(q))[p];
    return {white:c('#white'),tint:c('#tint a'),kicker:c('#tint .puk-longform__kicker'),own:c('#own'),support:c('#support'),reflection:c('#reflection'),figure:c('#figure'),placeholder:c('#placeholder'),
     ground:c('#tint','backgroundColor'),h1:c('.puk-web-h1','fontWeight'),h2:c('.puk-web-h2','fontWeight'),h3:c('.puk-web-h3','fontWeight')};
   });
   const blue125=theme==='kontrast'?'rgb(0, 31, 153)':'rgb(43, 79, 224)';
   const blue100=theme==='kontrast'?'rgb(0, 40, 194)':'rgb(60, 100, 255)';
   assert.equal(s.white,blue100,theme);
   for(const key of ['tint','kicker','own','support','reflection','figure','placeholder'])assert.equal(s[key],blue125,`${theme} ${key}`);
   assert.equal(s.ground,'rgb(245, 247, 255)');
   assert.deepEqual([s.h1,s.h2,s.h3],['500','500','400']);
  }finally{await page.close();}
 }
});
