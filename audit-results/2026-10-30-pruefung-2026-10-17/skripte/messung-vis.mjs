// Ergänzung: Erklärgrafiken (visual-patterns.css) und Starter-Entwurfsmarke in Bändern.
import {createRequire} from 'node:module';
import fs from 'node:fs';
const [,, root, out] = process.argv;
const require = createRequire(root + '/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const inner = p => `<figure class="puk-vis-figure" id="${p}-fig"><p class="puk-vis-label" id="${p}-label">Erklärgrafik</p>
<div class="puk-vis-compare"><div class="puk-vis-compare__col"><p class="puk-vis-compare__key" id="${p}-key">A</p><h3 id="${p}-h3">Vergleich</h3><dl><dt id="${p}-dt">Merkmal</dt><dd id="${p}-dd">Wert</dd></dl></div></div>
<figcaption class="puk-vis-caption" id="${p}-cap">Bildlegende <a href="#x" id="${p}-a">Link</a></figcaption></figure>
<span class="puk-site-draft" id="${p}-draft">Entwurf</span>`;
const html = t => `<!doctype html><html lang="de"${t==='kontrast'?' data-theme="kontrast"':''}><head><meta charset="utf-8"><title>Vis</title>
<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/templates/website/longform/visual-patterns.css"><link rel="stylesheet" href="/templates/website/psychoeducation-site-starter/starter.css"></head>
<body class="puk-web-page"><div id="w" style="padding:16px">${inner('w')}</div><section class="puk-web-band" id="b">${inner('b')}</section><section class="puk-web-band" data-puk-surface="night" id="n">${inner('n')}</section></body></html>`;
const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const res = {};
for (const t of ['light','kontrast']) {
  const page = await browser.newPage({viewport:{width:1280,height:900}});
  await page.route(srv.url+'vis.html', r => r.fulfill({contentType:'text/html', body:html(t)}));
  await page.goto(srv.url+'vis.html', {waitUntil:'load'});
  res[t] = await page.evaluate(() => { const bg = el => { for (let e = el; e; e = e.parentElement) { const c = getComputedStyle(e).backgroundColor; if (c !== 'rgba(0, 0, 0, 0)') return c; } return 'rgb(255, 255, 255)'; };
    const r = {}; for (const p of ['w','b','n']) for (const k of ['fig','label','key','h3','dt','dd','cap','a','draft']) { const el = document.getElementById(p+'-'+k); r[p+':'+k] = [getComputedStyle(el).color, bg(el)]; } return r; });
  await page.close();
}
await browser.close(); await srv.close();
fs.writeFileSync(out, JSON.stringify(res, null, 1));
const rgb = s => s.match(/[\d.]+/g).slice(0,3).map(Number);
const lum = c => c.map(v=>v/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((a,x,i)=>a+x*[.2126,.7152,.0722][i],0);
const cr = (a,b) => { const [x,y] = [lum(rgb(a)),lum(rgb(b))].sort((m,n)=>n-m); return ((x+.05)/(y+.05)).toFixed(2); };
for (const t in res) for (const [k,[c,b]] of Object.entries(res[t])) if (k.split(':')[1] !== 'fig') console.log(t, k, c, 'auf', b, cr(c,b)+':1');
