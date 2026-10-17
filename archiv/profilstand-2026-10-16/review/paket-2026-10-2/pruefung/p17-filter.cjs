// Prüfsitzung P-17: Listenfilter und Abschnittssuche in templates/website/interaktion/beispiel.html nur mit Tastatur,
// bei 320 px mit reduzierter Bewegung, mit erzwungenen Farben, ohne Skript; Statuszeile im Barrierefreiheitsbaum.
// Aufruf: node p17-filter.cjs <bilder-ordner>   (Webserver im Repository-Stamm auf Port 8770)
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const U = 'http://localhost:8770/templates/website/interaktion/beispiel.html'; const SHOTS = process.argv[2];
const out = []; const ok = (n, c, d = '') => out.push(`${c ? 'OK  ' : 'FAIL'} ${n}${d ? ' · ' + d : ''}`);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const [label, opts] of [['1280', { viewport: { width: 1280, height: 900 } }], ['320 reduziert', { viewport: { width: 320, height: 700 }, reducedMotion: 'reduce' }], ['1280 erzwungene Farben', { viewport: { width: 1280, height: 900 }, forcedColors: 'active' }]]) {
    const ctx = await b.newContext(opts); const p = await ctx.newPage(); await p.goto(U); await p.waitForSelector('[data-filter-enhanced]');
    // nur Tastatur: mit Tab bis zum Filterfeld
    let n = 0, id = ''; while (n++ < 80) { await p.keyboard.press('Tab'); id = await p.evaluate(() => document.activeElement.id); if (id === 'ia-filter-input') break; }
    ok(`${label}: Filterfeld per Tab erreichbar`, id === 'ia-filter-input', `${n} Tab-Schritte`);
    const fs = await p.$eval('#ia-filter-input', e => { const s = getComputedStyle(e); return { os: s.outlineStyle, ow: s.outlineWidth, bs: s.boxShadow, bw: s.borderTopWidth, bst: s.borderTopStyle, h: Math.round(e.getBoundingClientRect().height) }; });
    ok(`${label}: Fokus im Feld sichtbar`, (fs.bs !== 'none') || (fs.os !== 'none' && parseFloat(fs.ow) > 0), JSON.stringify(fs));
    await p.keyboard.type('vollmacht', { delay: 20 }); await p.waitForTimeout(100);
    const st = await p.textContent('[data-filter-status]'); const vis = await p.$$eval('[data-filter-item]', l => l.filter(e => e.offsetParent).length);
    ok(`${label}: Eingabe per Tastatur filtert`, vis === 1, `${vis} sichtbar · Status «${st}»`);
    const ax = await p.locator('[data-puk-filter]').ariaSnapshot();
    ok(`${label}: Statuszeile im Barrierefreiheitsbaum als status mit Trefferzahl`, /status: 1 von 3 Treffern sichtbar\./.test(ax), (ax.match(/- status[^\n]*/) || [''])[0]);
    await p.keyboard.press('Control+A'); await p.keyboard.press('Backspace'); await p.keyboard.type('xyz'); await p.waitForTimeout(100);
    ok(`${label}: kein Treffer – Hinweis mit anderem Weg sichtbar`, await p.isVisible('[data-filter-empty]'), (await p.textContent('[data-filter-empty]')).trim().slice(0, 90));
    await p.keyboard.press('Control+A'); await p.keyboard.press('Backspace');
    const sw = await p.evaluate(() => document.documentElement.scrollWidth); ok(`${label}: kein waagrechtes Scrollen`, sw <= (opts.viewport.width), sw + ' px');
    if (SHOTS) { await p.locator('#ia-filter-input').scrollIntoViewIfNeeded(); await p.keyboard.type('kostet'); await p.waitForTimeout(100); await p.screenshot({ path: `${SHOTS}/p17-${label.replace(/ /g, '-')}.png` }); }
    // Suche per Tastatur
    n = 0; while (n++ < 40) { await p.keyboard.press('Tab'); id = await p.evaluate(() => document.activeElement.id); if (id === 'ia-search-input') break; }
    await p.keyboard.type('dialog'); await p.waitForTimeout(100);
    const ax2 = await p.locator('[data-puk-search]').ariaSnapshot();
    ok(`${label}: Suche per Tastatur, Status angesagt`, /status: 1 passender Inhalt\./.test(ax2), (ax2.match(/- status[^\n]*/) || [''])[0]);
    await ctx.close();
  }
  const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 320, height: 700 } }); const p = await ctx.newPage(); await p.goto(U);
  const all = await p.$$eval('[data-filter-item]', l => [l.length, l.filter(e => e.offsetParent).length]);
  ok('ohne Skript, 320 px: alle Einträge sichtbar, Feld nicht', all[0] === all[1] && !(await p.isVisible('#ia-filter-input')), `${all[1]} von ${all[0]}`);
  ok('ohne Skript: Verzeichnis der Suche sichtbar', await p.isVisible('[data-search-directory]'));
  await b.close(); console.log(out.join('\n'));
})();
