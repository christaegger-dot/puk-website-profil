import {createRequire} from 'node:module';
const [,, root, dir] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const srv = await serverStart(root);
const b = await chromium.launch({executablePath: '/opt/pw-browsers/chromium'});
for (const [n, u] of [['profil-index', 'index.html'], ['starter-index', 'templates/website/psychoeducation-site-starter/index.html'], ['profilbeispiel-index', 'templates/website/profilbeispiel/index.html'], ['minimal-index', 'templates/website/minimal-starter/index.html']]) {
  const p = await b.newPage({viewport: {width: 375, height: 812}});
  await p.goto(srv.url + u, {waitUntil: 'networkidle'}); await p.evaluate(() => document.fonts.ready);
  const info = await p.evaluate(() => { const h = document.querySelector('h1'); const r = h.getBoundingClientRect(); return {titel: h.textContent.trim(), schrift: getComputedStyle(h).fontSize, oben: Math.round(r.top), unten: Math.round(r.bottom), ueberlauf: document.documentElement.scrollWidth - innerWidth}; });
  console.log(n, JSON.stringify(info));
  await p.screenshot({path: `${dir}/${n}-375x812.png`}); await p.close();
}
await b.close(); await srv.close();
