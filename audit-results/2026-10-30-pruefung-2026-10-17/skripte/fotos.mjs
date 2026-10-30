// Elementfotos der nicht erfassten Fälle: Erklärgrafik und Karussell auf Weiss, im blauen Band und auf Nachtblau.
import {createRequire} from 'node:module';
const [,, root, prefix] = process.argv;
const require = createRequire(root + '/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const part = p => `<div class="puk-vis-figure" style="max-width:560px"><p class="puk-vis-label">Erklärgrafik</p><div class="puk-vis-compare"><div class="puk-vis-compare__col"><p class="puk-vis-compare__key">Ansatz A</p><h3>Vergleichsspalte</h3><dl><dt>Merkmal</dt><dd>Wert</dd></dl></div><div class="puk-vis-compare__col puk-vis-compare__col--b"><p class="puk-vis-compare__key">Ansatz B</p><h3>Zweite Spalte</h3><dl><dt>Merkmal</dt><dd>Wert</dd></dl></div></div><p class="puk-vis-caption">Bildlegende</p></div><div id="${p}-k" style="max-width:560px;margin-top:16px"></div>`;
const html = t => `<!doctype html><html lang="de"${t==='kontrast'?' data-theme="kontrast"':''}><head><meta charset="utf-8"><title>Fotos</title><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/templates/website/longform/visual-patterns.css">
<script src="/platform/vendor/react.production.min.js"></script><script src="/platform/vendor/react-dom.production.min.js"></script><script src="/components/bundle.js"></script></head>
<body class="puk-web-page"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0;width:1800px"><div id="w" style="padding:24px"><p>Weiss</p>${part('w')}</div><section id="b" class="puk-web-band" style="padding:24px"><p>Blaues Band</p>${part('b')}</section><section id="n" class="puk-web-band" data-puk-surface="night" style="padding:24px"><p>Nachtblau</p>${part('n')}</section></div>
<script src="/__f.js"></script></body></html>`;
const js = `for(const p of ['w','b','n'])ReactDOM.createRoot(document.getElementById(p+'-k')).render(React.createElement(window.PUKWeb.Carousel,{label:'Karussell',items:[{title:'Folie eins',content:'Inhalt'},{title:'Folie zwei'}]}));`;
const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
for (const t of ['light','kontrast']) {
  const page = await browser.newPage({viewport:{width:1800,height:1000}});
  await page.route(srv.url+'f.html', r => r.fulfill({contentType:'text/html', body:html(t)}));
  await page.route(srv.url+'__f.js', r => r.fulfill({contentType:'text/javascript', body:js}));
  await page.goto(srv.url+'f.html', {waitUntil:'load'}); await page.waitForSelector('#n-k .puk-carousel__btn');
  await page.screenshot({path:`${prefix}-${t}.png`, fullPage:true});
  await page.close();
}
await browser.close(); await srv.close();
