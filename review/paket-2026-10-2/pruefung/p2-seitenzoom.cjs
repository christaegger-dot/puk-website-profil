const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async () => { const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
 for (const w of [160, 180, 384, 640, 720]) for (const pg of ['begleiten','fuer-sich-sorgen']) { const c = await b.newContext({ viewport: { width: w, height: 800 }, deviceScaleFactor: 2 }); const p = await c.newPage(); await p.goto('http://localhost:8770/templates/website/zz-dep-test/' + pg + '.html');
  const r = await p.evaluate(() => [...document.querySelectorAll('.puk-longform__boundary')].map(e => { const s = (e.closest('.puk-longform__copy') || e.parentElement).querySelector('p:not(.puk-longform__boundary)') || document.querySelector('.puk-longform__copy p:not(.puk-longform__boundary)'); return getComputedStyle(e).fontSize + '/' + getComputedStyle(s).fontSize; }));
  console.log('Seitenzoom 200 % bei Fensterbreite', w * 2, 'px (CSS', w, 'px)', pg, r.join(' ')); await c.close(); }
 await b.close(); })();
