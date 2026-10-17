import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import assert from 'node:assert/strict';
import {before,after,test} from 'node:test';
import {chromium} from 'playwright';
import {root,example,python,exec,browserOptions} from './helpers.mjs';
let server,base,browser;
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'puk-browser-'));
before(async()=>{
 const types={'.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.woff2':'font/woff2','.html':'text/html','.json':'application/json'};
 server=http.createServer((req,res)=>{if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}let rel=decodeURIComponent(new URL(req.url,'http://localhost').pathname);if(rel.endsWith('/'))rel+='index.html';const file=path.resolve(root,'.'+rel);if(!file.startsWith(root)||!fs.existsSync(file)||!fs.statSync(file).isFile()){res.writeHead(404);res.end('Fehlt');return;}res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));base=`http://127.0.0.1:${server.address().port}/`;browser=await chromium.launch(browserOptions);
});
after(async()=>{if(browser)await browser.close();if(server)await new Promise(r=>server.close(r));fs.rmSync(tmp,{recursive:true,force:true});});
test('Alle aktiven Vorschauseiten laden schmal und breit ohne Browserfehler oder Seitenüberlauf',async()=>{
 const dirs=['templates/website/longform','templates/website/applications','templates/website/interaktion','templates/website/psychoeducation-site-starter','templates/website/minimal-starter','templates/website/profilbeispiel','ui_kits/website'];
 const urls=['index.html','musterauswahl.html','templates/website/Website.dc.html',...dirs.flatMap(d=>fs.readdirSync(path.join(root,d)).filter(x=>x.endsWith('.html')).map(x=>d+'/'+x))];
 for(const width of [360,1280]){const page=await browser.newPage({viewport:{width,height:900}});const errors=[];page.on('pageerror',e=>errors.push(String(e)));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+': '+r.url());});page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  for(const url of urls){await page.goto(base+url,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);assert.deepEqual(errors,[],`${url} ${width}`);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth<=1),`${url} ${width}`);}await page.close();}
 console.log(`${urls.length} aktive Seiten in zwei Breiten geprüft.`);
});
test('Akkordeon und Reiter sind mit der Tastatur bedienbar',async()=>{const page=await browser.newPage({viewport:{width:360,height:800}});try{await page.goto(base+'templates/website/interaktion/beispiel.html',{waitUntil:'networkidle'});const buttons=page.locator('[data-puk-accordion] button');assert.ok(await buttons.count()>0);const button=buttons.first();await button.focus();const initial=await button.getAttribute('aria-expanded');await page.keyboard.press('Enter');assert.notEqual(await button.getAttribute('aria-expanded'),initial);const tabs=page.locator('[data-puk-tabs] [role="tab"]');assert.ok(await tabs.count()>1);await tabs.first().focus();await page.keyboard.press('ArrowRight');assert.equal(await tabs.nth(1).getAttribute('aria-selected'),'true');}finally{await page.close();}});
test('Standardbeispiel enthält ohne Skript und bei reduzierter Bewegung keinen automatischen Krisenblock',async()=>{const context=await browser.newContext({javaScriptEnabled:false,reducedMotion:'reduce',viewport:{width:360,height:800}});try{const page=await context.newPage();await page.goto(base+'templates/website/profilbeispiel/',{waitUntil:'networkidle'});assert.equal(await page.locator('main h1').count(),1);assert.equal(await page.locator('a[href^="mailto:"]').count(),1);assert.equal(await page.locator('[data-safety-access]').count(),0);assert.doesNotMatch(await page.locator('footer').innerText(),/Notfalldienst|Polizei/);}finally{await context.close();}});
test('Lange verschachtelte Druck-Abfolgen erzeugen in acht Drucklagen keine leere Seite',async()=>{
 const page=await browser.newPage({viewport:{width:1280,height:1000}});
 try{
  for(const [kind,url,selector] of [
   ['process','templates/website/psychoeducation-site-starter/behandlung-verstehen.html','.puk-vis-path'],
   ['stepwise-model','templates/website/longform/erklaermuster.html','.puk-vis-build__steps']
  ]){
   await page.goto(base+url,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
   await page.waitForSelector(`figure[data-visual-type="${kind}"] ${selector}`);
   await page.evaluate(({kind,selector})=>{const f=document.querySelector(`figure[data-visual-type="${kind}"]`);f.setAttribute('data-print-split','');const wrapper=document.createElement('div');f.replaceWith(wrapper);wrapper.append(f);const list=f.querySelector(selector);const items=[...list.children].map(x=>x.cloneNode(true));for(let i=0;i<7;i++)for(const item of items)list.append(item.cloneNode(true));for(const el of f.querySelectorAll('[hidden]'))el.removeAttribute('hidden');},{kind,selector});
   for(const margin of [0,15])for(const scale of [0.8,1.1]){
    const pdf=path.join(tmp,`druck-${kind}-${margin}-${scale}.pdf`);
    await page.pdf({path:pdf,format:'A4',printBackground:true,scale,margin:{top:margin+'mm',bottom:margin+'mm',left:margin+'mm',right:margin+'mm'}});
    const r=await exec(python,['-I','-c','import pdfplumber,sys; p=pdfplumber.open(sys.argv[1]); blank=[i+1 for i,page in enumerate(p.pages) if not (page.extract_text() or "").strip()]; print(blank); p.close(); sys.exit(bool(blank))',pdf]);assert.equal(r.stdout.trim(),'[]');
   }
  }
 }finally{await page.close();}
});
