// Langform-Flächen figure-side, reflection, term-guide>div und Medienplatzhalter mit Link: Weiss, blaues Band, Nachtblau.
import {createRequire} from 'node:module';
const [,, root] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const inner = p => `<div class="puk-longform__figure-side" id="${p}-side">Seite <a id="${p}-sidea" href="#x">Link</a></div>
<aside class="puk-longform__reflection" id="${p}-refl"><h3 id="${p}-reflh">Reflexion</h3><p id="${p}-reflp" style="color:var(--text-muted)">Neben <a id="${p}-refla" href="#x">Link</a></p></aside>
<dl class="puk-longform__term-guide"><div><dt id="${p}-dt">Begriff</dt><dd id="${p}-dd">Erklärung <a id="${p}-dda" href="#x">Link</a></dd></div></dl>
<div class="puk-web-media"><a id="${p}-media" href="#x">Medienlink</a></div>`;
const html = t => `<!doctype html><html lang="de"${t==='kontrast'?' data-theme="kontrast"':''}><head><meta charset="utf-8"><title>L</title><link rel="stylesheet" href="/styles.css"></head>
<body class="puk-web-page"><div id="w">${inner('w')}</div><section class="puk-web-band" id="b">${inner('b')}</section><section class="puk-web-band" data-puk-surface="night" id="n">${inner('n')}</section></body></html>`;
const srv = await serverStart(root);
const b = await chromium.launch({executablePath: '/opt/pw-browsers/chromium'});
let gleich = 0, ab = [];
for (const t of ['light','kontrast']) for (const media of ['screen','print']) {
  const p = await b.newPage({viewport:{width:1280,height:900}});
  await p.route(srv.url+'l.html', r => r.fulfill({contentType:'text/html', body: html(t)}));
  await p.goto(srv.url+'l.html'); await p.emulateMedia({media});
  const r = await p.evaluate(() => { const o = {}; for (const e of document.querySelectorAll('[id*="-"]')) { const s = getComputedStyle(e); o[e.id] = [s.color, s.backgroundColor, s.borderTopColor].join(' | '); } return o; });
  for (const k of Object.keys(r).filter(k => k.startsWith('w-'))) for (const q of ['b','n']) { const x = r[q + k.slice(1)]; if (x === r[k]) gleich++; else ab.push(`${t} ${media} ${q}${k.slice(1)}: ${r[k]} → ${x}`); }
  await p.close();
}
console.log(root, 'gleich', gleich, 'abweichend', ab.length); ab.slice(0, 20).forEach(x => console.log('  ' + x));
await b.close(); await srv.close();
