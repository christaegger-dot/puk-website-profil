// Nachprüfung der einzigen Abweichung: ui_kits/website/qa.html, länger gewartet (Prüfskript läuft asynchron).
import {createRequire} from 'node:module';
const [,, neuRoot, altRoot] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import('/home/user/puk-website-profil/tools/server.mjs');
const a = await serverStart(neuRoot), b = await serverStart(altRoot);
const browser = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
async function shot(srv, theme, width, wait){const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
 await page.goto(srv.url+'ui_kits/website/qa.html',{waitUntil:'load'});if(wait==='ende'){await page.bringToFront();await page.waitForFunction(()=>/Gesamt: \d+ Befunde/.test(document.body.innerText),null,{timeout:180000});}else await page.waitForTimeout(wait);
 await page.evaluate(([theme])=>{if(theme==='kontrast')document.documentElement.setAttribute('data-theme','kontrast');const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode()))n.nodeValue=n.nodeValue.replace(/2026\.10\.1[79]/g,'2026.10.X').replace(/r4-2[46]\b/g,'r4-X').replace(/r4-1[02]\b/g,'r4-K');},[theme]);
 await page.addStyleTag({content:'*{transition:none!important;animation:none!important;caret-color:transparent!important}'});await page.waitForTimeout(150);
 const rows=await page.evaluate(()=>document.querySelectorAll('tr').length+' · '+(document.body.innerText.match(/Matrix: [^\n]*?Gesamt: \d+ Befunde/)||[''])[0]);const buf=await page.screenshot({fullPage:true});await page.close();return {buf,rows};}
for(const wait of ['ende'])for(const width of [375,1280])for(const theme of ['light','kontrast'])for(let i=0;i<1;i++){
 const x=await shot(a,theme,width,wait),y=await shot(b,theme,width,wait);
 console.log(`Wartezeit ${wait} ms, ${width} px, ${theme}, Lauf ${i+1}: Tabellenzeilen neu ${x.rows}, alt ${y.rows}, pixelgleich ${Buffer.compare(x.buf,y.buf)===0}`);}
await browser.close();await a.close();await b.close();
