// Ganzseitenfotos aller aktiven Vorschauseiten (Liste wie tests/browser.test.mjs) in zwei Ständen vergleichen.
// Kennungen im Text gleichgesetzt. Aufruf: node pixel.mjs <neu-stamm> <alt-stamm> <ausgabepräfix>
import {createRequire} from 'node:module';
import fs from 'node:fs'; import path from 'node:path';
const [,, neuRoot, altRoot, out] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import('/home/user/puk-website-profil/tools/server.mjs');
const dirs=['templates/website/longform','templates/website/applications','templates/website/interaktion','templates/website/psychoeducation-site-starter','templates/website/minimal-starter','templates/website/profilbeispiel','ui_kits/website'];
const urls=['index.html','musterauswahl.html','templates/website/Website.dc.html',...dirs.flatMap(d=>fs.readdirSync(path.join(neuRoot,d)).filter(x=>x.endsWith('.html')).map(x=>d+'/'+x))];
const altUrls=['index.html','musterauswahl.html','templates/website/Website.dc.html',...dirs.flatMap(d=>fs.readdirSync(path.join(altRoot,d)).filter(x=>x.endsWith('.html')).map(x=>d+'/'+x))];
const a = await serverStart(neuRoot), b = await serverStart(altRoot);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const res = [];
async function shot(srv, u, theme, width) {
  const page = await browser.newPage({viewport:{width,height:900}, reducedMotion:'reduce'});
  await page.goto(srv.url + u, {waitUntil:'load'}); try{await page.waitForLoadState('networkidle',{timeout:5000});}catch{} await page.evaluate(()=>document.fonts.ready); await page.waitForTimeout(300);
  await page.evaluate(([theme]) => { if (theme==='kontrast') document.documentElement.setAttribute('data-theme','kontrast');
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) n.nodeValue = n.nodeValue.replace(/2026\.10\.1[79]/g,'2026.10.X').replace(/r4-2[46]\b/g,'r4-X').replace(/r4-1[02]\b/g,'r4-K'); }, [theme]);
  await page.addStyleTag({content:'*{transition:none!important;animation:none!important;caret-color:transparent!important}'});
  await page.waitForTimeout(150);
  const buf = await page.screenshot({fullPage:true}); await page.close(); return buf;
}
for (const u of urls) for (const width of [375,1280]) for (const theme of ['light','kontrast']) {
  const x = await shot(a, u, theme, width), y = await shot(b, u, theme, width);
  const gleich = Buffer.compare(x,y)===0;
  res.push({url:u, width, theme, gleich, bytesNeu:x.length, bytesAlt:y.length});
  if (!gleich) { const k=`${out}-${u.replace(/\W+/g,'_')}-${width}-${theme}`; fs.writeFileSync(k+'-neu.png', x); fs.writeFileSync(k+'-alt.png', y); }
}
await browser.close(); await a.close(); await b.close();
fs.writeFileSync(out + '.json', JSON.stringify({seitenNeu:urls.length, seitenAlt:altUrls.length, gleicheListe:JSON.stringify(urls)===JSON.stringify(altUrls), ergebnisse:res}, null, 1));
console.log(`${urls.length} Seiten (davon Website.dc.html und ${urls.filter(u=>u.startsWith('ui_kits')).length} UI-Kit); Liste gleich wie auf dem alten Stand: ${JSON.stringify(urls)===JSON.stringify(altUrls)}`);
console.log(`${res.filter(r=>r.gleich).length} von ${res.length} pixelgleich`);
for (const r of res.filter(r=>!r.gleich)) console.log('ABWEICHUNG', r.url, r.width, r.theme);
