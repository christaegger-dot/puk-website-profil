import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {before,after,test} from 'node:test';
import {chromium} from 'playwright';
import {root,starter,browserOptions} from './helpers.mjs';
import {serverStart} from '../tools/server.mjs';

const C=createRequire(import.meta.url)(path.join(starter,'tools/contract.js'));
const minimal=path.join(root,'templates/website/minimal-starter');
const home=fs.readFileSync(path.join(minimal,'content/index.html'),'utf8');
const titles=[
 'Belastungen gemeinsam verstehen',
 'Verstehen, einordnen und Unterstützung für Angehörige finden',
 'Beziehungsbelastungen und Handlungsmöglichkeiten verstehen'
];
let server,browser;
before(async()=>{server=await serverStart(root);browser=await chromium.launch(browserOptions);});
after(async()=>{if(browser)await browser.close();if(server)await server.close();});

function config(count=5){
 const cfg=JSON.parse(fs.readFileSync(path.join(minimal,'site.config.json')));
 const extra=[
  ['beziehungen','Beziehungen verstehen','beziehungen-verstehen.html'],
  ['behandlung','Behandlung verstehen','behandlung-verstehen.html'],
  ['unterstuetzung','Unterstützung finden','unterstuetzung-finden.html']
 ];
 for(const [id,navLabel,href] of extra.slice(0,count-2))cfg.pages.push({...cfg.pages[1],id,navLabel,href:'../psychoeducation-site-starter/'+href});
 return cfg;
}

async function transfer(page,title,count=5){
 const url=server.url+'templates/website/minimal-starter/transfer-test.html';
 await page.route(url,route=>route.fulfill({contentType:'text/html',body:C.renderPage(config(count),config(count).pages[0],home.replace('Titel der neuen Website',title))}));
 await page.goto(url,{waitUntil:'load'});
 await page.evaluate(()=>document.fonts.ready);
}

test('Lange deutsche Titel und fünf Hauptpunkte bleiben in 60 Layoutzuständen lesbar; der Einstieg steht auf dem ersten mobilen Bildschirm',{timeout:180000},async()=>{
 let count=0;
 for(const title of titles)for(const width of [320,375,768,1024,1440])for(const scale of [1,2])for(const javaScriptEnabled of [true,false]){
  const context=await browser.newContext({javaScriptEnabled,viewport:{width,height:812}});
  try{
   const page=await context.newPage();page.setDefaultTimeout(10000);page.setDefaultNavigationTimeout(10000);await transfer(page,title);
   if(scale===2)await page.evaluate(()=>document.documentElement.style.setProperty('font-size','200%','important'));
   const state=await page.evaluate(()=>{
    const heading=document.querySelector('main h1'),entry=document.querySelector('[data-primary-entry] a');
    const rect=entry.getBoundingClientRect(),range=document.createRange();range.selectNodeContents(heading);
    const text=range.getBoundingClientRect();let titleClipped=false;
    for(let el=heading;el;el=el.parentElement){
     const style=getComputedStyle(el),box=el.getBoundingClientRect();
     if(/hidden|clip/.test(style.overflowY)&&(text.top<box.top-1||text.bottom>box.bottom+1))titleClipped=true;
     if(/hidden|clip/.test(style.overflowX)&&(text.left<box.left-1||text.right>box.right+1))titleClipped=true;
    }
    return {overflow:document.documentElement.scrollWidth-innerWidth,titleSize:parseFloat(getComputedStyle(heading).fontSize),titleClipped,entryTop:rect.top,entryBottom:rect.bottom,entryHeight:rect.height};
   });
   const label=JSON.stringify({title,width,scale,javaScriptEnabled,state});
   assert.ok(state.overflow<=1,label);
   assert.equal(state.titleClipped,false,label);
   assert.ok(state.titleSize>=32*scale&&state.titleSize<=60*scale,label);
   assert.ok(state.entryHeight>=44,label);
   if(width===375&&scale===1)assert.ok(state.entryTop>=0&&state.entryBottom<=812,label);
   if(!javaScriptEnabled||width>760)for(const link of await page.locator('nav[aria-label="Hauptnavigation"] a').all())assert.ok(await link.isVisible(),label);
   count++;
  }finally{await context.close();}
 }
 console.log(`${count} Titel-, Menü-, Schrift- und Skriptzustände geprüft.`);
});

test('Die Schwelle von vier zu fünf Hauptpunkten funktioniert mit Tastatur und beim Wechsel zwischen schmal und breit',{timeout:60000},async()=>{
 for(const count of [4,5]){
  const page=await browser.newPage({viewport:{width:375,height:812}});
  try{
   await transfer(page,titles[0],count);
   const nav=page.locator('nav[aria-label="Hauptnavigation"]'),button=nav.locator('button');
   assert.equal(await nav.locator('a').count(),count);
   if(count===4){assert.equal(await button.count(),0);continue;}
   assert.ok(await button.isVisible());
   assert.equal(await button.getAttribute('aria-expanded'),'false');
   await button.focus();await page.keyboard.press('Enter');
   assert.equal(await button.getAttribute('aria-expanded'),'true');
   await page.keyboard.press('Tab');assert.ok(await nav.locator('a').first().evaluate(a=>a===document.activeElement));
   for(const link of await nav.locator('a').all())assert.ok(await link.isVisible());
   await page.keyboard.press('Escape');
   assert.equal(await button.getAttribute('aria-expanded'),'false');
   assert.ok(await button.evaluate(b=>b===document.activeElement));
   await page.keyboard.press('Space');assert.equal(await button.getAttribute('aria-expanded'),'true');
   await page.keyboard.press('Escape');
   for(const width of [760,761,1440,375]){
    await page.setViewportSize({width,height:812});
    if(width>760){assert.equal(await button.isVisible(),false);for(const link of await nav.locator('a').all())assert.ok(await link.isVisible());}
    else assert.ok(await button.isVisible());
   }
  }finally{await page.close();}
 }
});

test('Alle drei Startvorlagen bieten vor ergänzenden Hinweisen einen funktionierenden Einstieg, auch ohne JavaScript',{timeout:60000},async()=>{
 for(const name of ['minimal-starter','profilbeispiel','psychoeducation-site-starter'])for(const javaScriptEnabled of [true,false]){
  const context=await browser.newContext({javaScriptEnabled,viewport:{width:375,height:812}});
  try{
   const page=await context.newPage();await page.goto(server.url+'templates/website/'+name+'/',{waitUntil:'load'});await page.evaluate(()=>document.fonts.ready);
   const entry=page.locator('[data-primary-entry] a');assert.equal(await entry.count(),1);
   assert.ok(await entry.evaluate(a=>{const r=a.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight;}),name);
   assert.ok(await entry.evaluate(a=>{const note=document.querySelector('.puk-longform__hero .puk-longform__boundary');return !note||!!(a.compareDocumentPosition(note)&Node.DOCUMENT_POSITION_FOLLOWING);}),name);
   const target=new URL(await entry.getAttribute('href'),page.url());
   await entry.click();await page.waitForURL(target.href,{timeout:10000});
   if(target.hash){
    assert.ok(await page.locator(target.hash).isVisible());
    await page.waitForFunction(id=>document.activeElement.id===id,target.hash.slice(1),{timeout:10000});
   }else assert.equal(await page.locator('main h1').count(),1);
  }finally{await context.close();}
 }
});
