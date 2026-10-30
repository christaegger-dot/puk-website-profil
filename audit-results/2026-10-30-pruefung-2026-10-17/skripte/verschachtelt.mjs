// Verschachtelte Fälle: Nachtblau in Nachtblau, Nachtblau in heller Fläche im Band, getönte Fläche als Band-Element.
import {createRequire} from 'node:module';
const [,, root] = process.argv;
const require = createRequire(root + '/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const body = `<section class="puk-web-band" data-puk-surface="night"><div data-puk-surface="night" style="padding:8px"><a id="nn-a" href="#x">Link</a> <span id="nn-m" style="color:var(--text-muted)">Neben</span> <button id="nn-s" class="puk-btn puk-btn--secondary">S</button></div></section>
<section class="puk-web-band"><div data-puk-light style="background:#fff;padding:8px"><div data-puk-surface="night" style="padding:8px"><a id="bln-a" href="#x">Link</a> <span id="bln-t">Text</span> <button id="bln-s" class="puk-btn puk-btn--secondary">S</button></div></div></section>
<section class="puk-web-band" data-puk-surface="night"><div data-puk-light style="background:#fff;padding:8px"><section class="puk-web-band" id="nlb"><a id="nlb-a" href="#x">Link</a> <span id="nlb-m" style="color:var(--text-muted)">Neben</span> <button id="nlb-s" class="puk-btn puk-btn--secondary">S</button></section></div></section>
<section class="puk-web-band"><a id="ref-a" href="#x">Link</a> <span id="ref-m" style="color:var(--text-muted)">Neben</span><button id="ref-s" class="puk-btn puk-btn--secondary">S</button></section>`;
const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const page = await browser.newPage();
await page.route(srv.url+'v.html', r => r.fulfill({contentType:'text/html', body:`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>v</title><link rel="stylesheet" href="/styles.css"></head><body class="puk-web-page">${body}</body></html>`}));
await page.goto(srv.url+'v.html');
console.log(JSON.stringify(await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('[id]')].map(e => { const s = getComputedStyle(e); let b = e, bg; while (b && (bg = getComputedStyle(b).backgroundColor) === 'rgba(0, 0, 0, 0)') b = b.parentElement; return [e.id, s.color + ' auf ' + bg]; }))), null, 1));
await browser.close(); await srv.close();
