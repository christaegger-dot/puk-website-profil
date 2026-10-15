const { chromium } = require('/opt/node-tools/node_modules/playwright');
const B = 'http://localhost:8770/templates/website/';
const out = []; const log = (k, ok, d) => out.push(`${ok ? 'OK  ' : 'FAIL'} ${k}${d ? ' · ' + d : ''}`);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const ctxFor = async (w, big) => { const c = await b.newContext({ viewport: { width: w, height: 900 } }); if (big) await c.addInitScript(() => { document.addEventListener('DOMContentLoaded', () => { const s = document.createElement('style'); s.textContent = 'html{font-size:32px}'; document.head.appendChild(s); }); }); return c; };
  // P-2: Verweis im Text gleich gross wie der Fliesstext daneben
  for (const site of ['zz-dep-test']) for (const pg of ['begleiten', 'fuer-sich-sorgen']) for (const w of [320, 360, 768, 1280, 1440]) for (const big of [false, true]) {
    const c = await ctxFor(w, big); const p = await c.newPage(); await p.goto(`${B}${site}/${pg}.html`);
    const r = await p.evaluate(() => [...document.querySelectorAll('.puk-longform__boundary')].map(e => { const sib = e.closest('.puk-longform__copy')?.querySelector('p:not(.puk-longform__boundary)') || document.querySelector('.puk-longform__copy p:not(.puk-longform__boundary)'); return [getComputedStyle(e).fontSize, getComputedStyle(sib).fontSize]; }));
    const bad = r.filter(([a, s]) => a !== s);
    log(`P-2 ${pg} ${w}px ${big ? '200 %' : '100 %'}: ${r.length} Verweise`, r.length && !bad.length, r.length ? `${r[0][0]} = Fliesstext ${r[0][1]}` : 'keiner gefunden');
    await c.close();
  }
  // P-3: E-Mail-Link der Absenderin – Höhe und Abstand (WCAG 2.5.8)
  for (const site of ['psychoeducation-site-starter', 'zz-dep-test']) for (const w of [1280, 360]) {
    const c = await ctxFor(w, false); const p = await c.newPage(); await p.goto(`${B}${site}/index.html`);
    const r = await p.evaluate(() => { const a = document.querySelector('[data-sender] a[href^="mailto:"]'); const ra = a.getBoundingClientRect(); const cx = ra.x + ra.width / 2, cy = ra.y + ra.height / 2;
      const others = [...document.querySelectorAll('a[href],button,input,summary')].filter(e => e !== a && e.getClientRects().length).map(e => e.getBoundingClientRect());
      // Abstand des Kreises (Durchmesser 24 px um die Mitte) zum nächsten Ziel
      const dist = Math.min(...others.map(o => { const dx = Math.max(o.left - cx, 0, cx - o.right), dy = Math.max(o.top - cy, 0, cy - o.bottom); return Math.hypot(dx, dy); }));
      return { h: Math.round(ra.height * 10) / 10, w: Math.round(ra.width), dist: Math.round(dist * 10) / 10 }; });
    log(`P-3 ${site.slice(0, 12)} ${w}px: Link ${r.w}×${r.h} px, Kreis 24 px ohne Überschneidung`, r.h >= 24 || r.dist >= 12, `Abstand Mitte → nächstes Ziel ${r.dist} px (≥ 12 nötig)`);
    await c.close();
  }
  // P-5: Ziffernkreise
  for (const [site, pg] of [['zz-dep-test', 'depression-verstehen'], ['longform', 'erklaermuster']]) for (const big of [false, true]) {
    const c = await ctxFor(1280, big); const p = await c.newPage(); await p.goto(`${B}${site}/${pg}.html`);
    const r = await p.evaluate(() => [...document.querySelectorAll('.puk-vis-build__n')].map(n => { const rc = n.getBoundingClientRect(); const rg = document.createRange(); rg.selectNodeContents(n); const t = rg.getBoundingClientRect(); const col = n.parentElement.getBoundingClientRect();
      return { w: Math.round(rc.width * 10) / 10, h: Math.round(rc.height * 10) / 10, inside: t.left >= rc.left - 0.5 && t.right <= rc.right + 0.5 && t.top >= rc.top - 0.5 && t.bottom <= rc.bottom + 0.5 }; }));
    const bad = r.filter(x => !x.inside || (big ? x.w !== 56 : x.w !== 28));
    log(`P-5 ${pg} ${big ? '200 %' : '100 %'}: ${r.length} Kreise`, r.length && !bad.length, r.length ? `${r[0].w}×${r[0].h} px, Ziffer im Kreis: ${r.every(x => x.inside)}` : '');
    await c.close();
  }
  // P-6: Silbentrennung nur bei schmalem Container
  for (const [w, big] of [[360, false], [1280, false], [360, true], [320, true], [1280, true]]) {
    const c = await ctxFor(w, big); const p = await c.newPage(); await p.goto(`${B}zz-dep-test/depression-verstehen.html`);
    const r = await p.evaluate(() => ({ fig: getComputedStyle(document.querySelector('.puk-vis-figure')).hyphens, h2: getComputedStyle(document.querySelector('.puk-longform__section-heading .puk-web-h2')).hyphens, body: getComputedStyle(document.querySelector('.puk-longform__copy p')).hyphens }));
    const expect = big && w <= 360 ? 'auto' : 'manual';
    log(`P-6 ${w}px ${big ? '200 %' : '100 %'}: Figur ${r.fig}, Überschrift ${r.h2}, Fliesstext ${r.body}`, r.fig === expect && r.h2 === expect && r.body === 'manual', `erwartet Figur/Überschrift ${expect}`);
    await c.close();
  }
  // P-15: am Bildschirm sticky, im Druck statisch
  { const c = await ctxFor(1280, false); const p = await c.newPage(); await p.goto(`${B}zz-dep-test/begleiten.html`);
    const scr = await p.$eval('.puk-longform__section-heading', e => getComputedStyle(e).position); await p.emulateMedia({ media: 'print' });
    const prn = await p.$eval('.puk-longform__section-heading', e => getComputedStyle(e).position);
    log('P-15 begleiten 1280px: Bildschirm sticky, Druck static', scr === 'sticky' && prn === 'static', `Bildschirm ${scr}, Druck ${prn}`); await c.close(); }
  await b.close(); console.log(out.join('\n'));
})();
