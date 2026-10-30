// Ganzseitenfotos aller aktiven Vorschauseiten (Liste wie tests/browser.test.mjs) in zwei Ständen vergleichen,
// 375 und 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt.
import {createRequire} from 'node:module';
import fs from 'node:fs'; import path from 'node:path';
const [,, neuRoot, altRoot, out] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(neuRoot + '/tools/server.mjs');
const dirs=['templates/website/longform','templates/website/applications','templates/website/interaktion','templates/website/psychoeducation-site-starter','templates/website/minimal-starter','templates/website/profilbeispiel','ui_kits/website'];
const urls=['index.html','musterauswahl.html','templates/website/Website.dc.html',...dirs.flatMap(d=>fs.readdirSync(path.join(neuRoot,d)).filter(x=>x.endsWith('.html')).map(x=>d+'/'+x))];
const altUrls=['index.html','musterauswahl.html','templates/website/Website.dc.html',...dirs.flatMap(d=>fs.readdirSync(path.join(altRoot,d)).filter(x=>x.endsWith('.html')).map(x=>d+'/'+x))];
const a = await serverStart(neuRoot), b = await serverStart(altRoot);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const res = [];
async function shot(srv, u, theme, vw) {
  const page = await browser.newPage({viewport:{width:vw,height:900}, reducedMotion:'reduce'});
  await page.goto(srv.url + u, {waitUntil:'load'}); await page.waitForLoadState('networkidle', {timeout: 8000}).catch(() => {}); await page.waitForTimeout(700); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(300);
  await page.evaluate(([theme]) => { if (theme==='kontrast') document.documentElement.setAttribute('data-theme','kontrast');
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) n.nodeValue = n.nodeValue.replace(/2026\.10\.1[789]/g,'2026.10.X').replace(/r4-2[456]/g,'r4-X').replace(/r4-1[012]\b/g,'r4-K'); }, [theme]);
  await page.addStyleTag({content:'*{transition:none!important;animation:none!important;caret-color:transparent!important}'});
  await page.waitForTimeout(150);
  const buf = await page.screenshot({fullPage:true}); await page.close(); return buf;
}
async function pixeldiff(x, y) {
  const page = await browser.newPage();
  const r = await page.evaluate(async ([x, y]) => { const load = s => new Promise(r => { const i = new Image(); i.onload = () => r(i); i.src = 'data:image/png;base64,' + s; });
    const [p, q] = await Promise.all([load(x), load(y)]); if (p.width !== q.width || p.height !== q.height) return {groesse: [p.width, p.height, q.width, q.height]};
    const c = new OffscreenCanvas(p.width, p.height), g = c.getContext('2d'); g.drawImage(p, 0, 0); const d1 = g.getImageData(0, 0, p.width, p.height).data; g.clearRect(0,0,p.width,p.height); g.drawImage(q, 0, 0); const d2 = g.getImageData(0, 0, p.width, p.height).data;
    let n = 0; for (let i = 0; i < d1.length; i += 4) if (d1[i] !== d2[i] || d1[i+1] !== d2[i+1] || d1[i+2] !== d2[i+2]) n++; return {pixel: n}; }, [x.toString('base64'), y.toString('base64')]);
  await page.close(); return r;
}
console.log('Seiten neu', urls.length, 'alt', altUrls.length, 'gleiche Liste', JSON.stringify(urls) === JSON.stringify(altUrls));
for (const u of urls) for (const vw of [375, 1280]) for (const theme of ['light','kontrast']) {
  const x = await shot(a, u, theme, vw), y = await shot(b, u, theme, vw);
  const gleich = Buffer.compare(x,y)===0; const e = {url:u, vw, theme, gleich};
  if (!gleich) { Object.assign(e, await pixeldiff(x, y)); const base = `${out}-${u.replace(/\W+/g,'_')}-${vw}-${theme}`; fs.writeFileSync(base + '-neu.png', x); fs.writeFileSync(base + '-alt.png', y); }
  res.push(e);
}
await browser.close(); await a.close(); await b.close();
fs.writeFileSync(out + '.json', JSON.stringify({browser: 'Chromium', seiten: urls, ergebnisse: res}, null, 1));
console.log(`${res.filter(r=>r.gleich).length} von ${res.length} gleich (${urls.length} Seiten einschliesslich Website.dc.html, 375 und 1280 px, zwei Themes)`);
for (const r of res.filter(r=>!r.gleich)) console.log('ABWEICHUNG', r.url, r.vw, r.theme, JSON.stringify(r.pixel ?? r.groesse));
