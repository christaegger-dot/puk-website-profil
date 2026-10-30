// Foto der nicht erfassten hellen Flächen auf Weiss, im blauen Band und auf Nachtblau. Aufruf: node foto-luecken.mjs <stamm> <präfix>
import {createRequire} from 'node:module';
const [,, root, out] = process.argv;
const require = createRequire(root + '/package.json'); const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const inhalt = `<div class="puk-app-card"><span class="puk-app-kicker">Anwendungsmuster</span><h3>.puk-app-card</h3><p>Text der Karte</p></div>
<div class="puk-app-boundary">.puk-app-boundary</div><div class="puk-site-placeholder"><p>.puk-site-placeholder (Starter)</p></div>
<div class="puk-site-safety puk-site-safety--direct"><div class="puk-site-safety__inner"><p class="puk-site-safety__title">.puk-site-safety--direct</p></div></div>
<figure class="puk-vis-figure puk-vis-figure--open"><p class="puk-vis-label">Offene Erklärgrafik</p><div class="puk-vis-layers"><div class="puk-vis-layers__zone"><ul><li>.puk-vis-layers li</li></ul></div></div></figure>`;
const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Lücken</title><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/templates/website/longform/visual-patterns.css"><link rel="stylesheet" href="/templates/website/longform/erklaermuster.css"><link rel="stylesheet" href="/templates/website/psychoeducation-site-starter/starter.css"><link rel="stylesheet" href="/templates/website/applications/applications.css">
<style>main{display:grid;grid-template-columns:repeat(3,1fr);gap:0}main>*{display:grid;gap:10px;padding:16px;align-content:start}h2{margin:0}</style></head><body class="puk-web-page"><main>
<div><h2>Weiss</h2>${inhalt}</div><section class="puk-web-band"><h2>Blaues Band</h2>${inhalt}</section><section class="puk-web-band" data-puk-surface="night"><h2>Nachtblau</h2>${inhalt}</section></main></body></html>`;
const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
for (const theme of ['light','kontrast']) {
 const page = await browser.newPage({viewport:{width:1280,height:700}});
 await page.route(srv.url + 'l.html', r => r.fulfill({contentType:'text/html', body: theme === 'kontrast' ? html.replace('<html lang="de">','<html lang="de" data-theme="kontrast">') : html}));
 await page.goto(srv.url + 'l.html', {waitUntil:'load'}); await page.screenshot({path:`${out}-${theme}.png`, fullPage:true}); await page.close();
}
await browser.close(); await srv.close();
