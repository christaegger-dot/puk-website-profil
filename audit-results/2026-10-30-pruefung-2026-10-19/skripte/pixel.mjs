// Ganzseitenfotos aller aktiven Vorschauseiten (Liste wie tests/browser.test.mjs) in zwei Ständen vergleichen;
// Versions- und Build-Kennungen werden vor dem Foto gleichgesetzt. Aufruf: node pixel.mjs <neu> <alt> <ausgabepräfix>
import {createRequire} from 'node:module';
import fs from 'node:fs'; import path from 'node:path';
const [,, neuRoot, altRoot, out] = process.argv;
const require = createRequire(neuRoot + '/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(neuRoot + '/tools/server.mjs');
const dirs = ['templates/website/longform','templates/website/applications','templates/website/interaktion','templates/website/psychoeducation-site-starter','templates/website/minimal-starter','templates/website/profilbeispiel','ui_kits/website'];
const urls = ['index.html','musterauswahl.html',...dirs.flatMap(d => fs.readdirSync(path.join(neuRoot,d)).filter(x => x.endsWith('.html')).map(x => d + '/' + x)), 'templates/website/Website.dc.html'];
const norm = s => s.replace(/2026\.10\.1[789]/g,'2026.10.X').replace(/r4-2[456]\b/g,'r4-X').replace(/r4-1[012]\b/g,'r4-K');
const a = await serverStart(neuRoot), b = await serverStart(altRoot);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
async function shot(srv, u, theme) {
 const page = await browser.newPage({viewport:{width:1280,height:900}, reducedMotion:'reduce'});
 await page.goto(srv.url + u, {waitUntil:'load'}); await page.waitForTimeout(400);
 await page.evaluate(([theme, src]) => { const norm = eval(src); if (theme === 'kontrast') document.documentElement.setAttribute('data-theme','kontrast');
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) n.nodeValue = norm(n.nodeValue); }, [theme, norm.toString()]);
 await page.addStyleTag({content:'*{transition:none!important;animation:none!important;caret-color:transparent!important}'});
 await page.waitForTimeout(150);
 const buf = await page.screenshot({fullPage:true}); await page.close(); return buf;
}
const res = [];
for (const u of urls) for (const theme of ['light','kontrast']) {
 const x = await shot(a, u, theme), y = await shot(b, u, theme);
 res.push({url:u, theme, gleich:Buffer.compare(x,y) === 0});
 if (Buffer.compare(x,y) !== 0) { fs.writeFileSync(`${out}-${u.replace(/\W+/g,'_')}-${theme}-neu.png`, x); fs.writeFileSync(`${out}-${u.replace(/\W+/g,'_')}-${theme}-alt.png`, y); }
}
await browser.close(); await a.close(); await b.close();
fs.writeFileSync(out + '.json', JSON.stringify(res, null, 1));
console.log(`${res.filter(r => r.gleich).length} von ${res.length} gleich (${urls.length - 1} Seiten + Website.dc.html)`);
for (const r of res.filter(r => !r.gleich)) console.log('ABWEICHUNG', r.url, r.theme);
