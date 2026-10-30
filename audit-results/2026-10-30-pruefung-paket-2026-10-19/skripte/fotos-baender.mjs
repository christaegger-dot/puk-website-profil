// Stichprobe als Foto: Erklärgrafik E (geschlossen), dieselbe offen, Karussell, Knöpfe sowie Reiter/Formular/Menü
// auf Weiss, im blauen Band und auf Nachtblau; Bildschirm und Druck. Nutzt die Fixture aus messung-baender.mjs.
import {createRequire} from 'node:module';
import fs from 'node:fs';
const [,, root, prefix] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const src = fs.readFileSync(new URL('./messung-baender.mjs', import.meta.url), 'utf8');
const html = eval('(' + src.match(/const html = (t => `[\s\S]*?`);/)[1] + ')');
const js = eval(src.match(/const js = (`[\s\S]*?`);/)[1]);
const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath: process.env.CHROMIUM_EXECUTABLE_PATH} : {});
for (const t of ['light', 'kontrast']) for (const vw of [375, 1280]) for (const media of ['screen', 'print']) {
  const page = await browser.newPage({viewport: {width: vw, height: 900}});
  await page.route(srv.url + 'f.html', r => r.fulfill({contentType: 'text/html', body: html(t)}));
  await page.route(srv.url + 'pruef-fixture.js', r => r.fulfill({contentType: 'text/javascript', body: js}));
  await page.goto(srv.url + 'f.html', {waitUntil: 'load'}); await page.waitForFunction(() => window.__bereit === true);
  await page.addStyleTag({content: '*{transition:none!important;animation:none!important} [data-grp]:not([data-grp^="muster-5"]):not([data-grp^="offen-3"]):not([data-grp="react"]){display:none} [data-grp="react"] [data-grp]{display:block}'});
  await page.emulateMedia({media});
  await page.screenshot({path: `${prefix}-${t}-${vw}-${media === 'print' ? 'druck' : 'bildschirm'}.png`, fullPage: true});
  await page.close();
}
await browser.close(); await srv.close();
