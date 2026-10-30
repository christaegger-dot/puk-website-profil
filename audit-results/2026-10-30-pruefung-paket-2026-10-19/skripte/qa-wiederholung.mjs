// qa.html desselben Stands mehrfach fotografieren: ist die Seite zeitabhängig?
import {createRequire} from 'node:module';
const [,, root, label] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const srv = await serverStart(root); const b = await chromium.launch({executablePath: '/opt/pw-browsers/chromium'});
for (let i = 0; i < 4; i++) { const p = await b.newPage({viewport: {width: 1280, height: 900}, reducedMotion: 'reduce'});
  await p.goto(srv.url + 'ui_kits/website/qa.html', {waitUntil: 'load'}); await p.waitForLoadState('networkidle', {timeout: 8000}).catch(() => {}); await p.waitForTimeout(700);
  const h = await p.evaluate(() => document.documentElement.scrollHeight); const t = await p.evaluate(() => document.body.innerText.length);
  console.log(label, 'Lauf', i + 1, 'Höhe', h, 'Textlänge', t); await p.close(); }
await b.close(); await srv.close();
