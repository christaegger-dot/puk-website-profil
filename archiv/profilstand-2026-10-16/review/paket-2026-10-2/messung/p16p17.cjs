const { chromium } = require('/opt/node-tools/node_modules/playwright');
const B = 'http://localhost:8770/templates/website/';
const SHOTS = process.argv[2];
const out = [];
const ok = (name, cond, detail='') => out.push(`${cond ? 'OK  ' : 'FAIL'} ${name}${detail ? ' · ' + detail : ''}`);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(() => chromium.launch());
  // A1 Filter mit Skript
  let ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }); let p = await ctx.newPage();
  await p.goto(B + 'interaktion/beispiel.html'); await p.waitForSelector('[data-filter-enhanced]');
  ok('Filterfeld sichtbar mit Skript', await p.isVisible('#ia-filter-input'));
  ok('Status ohne Eingabe', (await p.textContent('[data-filter-status]')) === '3 Einträge verfügbar.', await p.textContent('[data-filter-status]'));
  const h = await p.$eval('#ia-filter-input', e => e.getBoundingClientRect().height); ok('Feldhöhe ≥ 44 px', h >= 44, h + ' px');
  await p.fill('#ia-filter-input', 'vollmacht');
  ok('Filter «vollmacht»: 1 sichtbar', (await p.$$eval('[data-filter-item]', l => l.filter(e => !e.hidden && e.offsetParent).length)) === 1, await p.textContent('[data-filter-status]'));
  await p.fill('#ia-filter-input', 'beratung kostet');
  ok('UND-Suche «beratung kostet»: 1 sichtbar', (await p.$$eval('[data-filter-item]', l => l.filter(e => e.offsetParent).length)) === 1);
  await p.fill('#ia-filter-input', 'xyz');
  ok('Kein Treffer: Hinweis sichtbar', await p.isVisible('[data-filter-empty]'));
  // Druck mit aktivem Filter
  await p.emulateMedia({ media: 'print' });
  ok('Druck: alle 3 Einträge trotz Filter', (await p.$$eval('[data-filter-item]', l => l.filter(e => getComputedStyle(e).display !== 'none').length)) === 3);
  ok('Druck: Feld und Hinweis ausgeblendet', (await p.$eval('[data-puk-filter] .puk-filter', e => getComputedStyle(e).display)) === 'none' && (await p.$eval('[data-filter-empty]', e => getComputedStyle(e).display)) === 'none');
  await p.emulateMedia({ media: 'screen' }); await p.fill('#ia-filter-input', '');
  ok('Leeres Feld: alle 3 sichtbar', (await p.$$eval('[data-filter-item]', l => l.filter(e => e.offsetParent).length)) === 3);
  // A3 Suche + Tastatur + P-16
  await p.fill('#ia-search-input', 'dialog');
  ok('Suche «dialog»: 1 Treffer', (await p.$$eval('[data-search-item]', l => l.filter(e => e.offsetParent).length)) === 1, await p.textContent('[data-search-status]'));
  ok('Suche: Verzeichnis ausgeblendet', !(await p.isVisible('[data-search-directory]')));
  await p.focus('#ia-search-input'); await p.keyboard.press('Tab');
  const fa = await p.evaluate(() => document.activeElement.getAttribute('href')); ok('Tab erreicht den Treffer', fa === '#ia-dlg-h', fa);
  await p.keyboard.press('Enter'); await p.waitForTimeout(300);
  const f1 = await p.evaluate(() => { const a = document.activeElement; return { id: a.id, ti: a.getAttribute('tabindex'), bs: getComputedStyle(a).boxShadow }; });
  ok('P-16: Fokus auf Ziel h2#ia-dlg-h', f1.id === 'ia-dlg-h' && f1.ti === '-1', JSON.stringify(f1.id));
  ok('P-16: Fokusbild sichtbar (box-shadow)', f1.bs && f1.bs !== 'none', f1.bs);
  await p.screenshot({ path: SHOTS + '/1280-sprungziel-h2.png' });
  await p.fill('#ia-search-input', 'zzz');
  ok('Suche ohne Treffer: Hinweis', await p.isVisible('[data-search-empty]'), await p.textContent('[data-search-status]'));
  await p.fill('#ia-search-input', 'navigation');
  ok('Suche nach Schlüsselwort «navigation»: Dropdown-Menü', (await p.$$eval('[data-search-item]', l => l.filter(e => e.offsetParent).map(e => e.dataset.searchTitle))).join() === 'Dropdown-Menü');
  await p.fill('#ia-search-input', '');
  await p.locator('#ia-filter-h').scrollIntoViewIfNeeded(); await p.screenshot({ path: SHOTS + '/1280-filter-suche.png', fullPage: false });
  await ctx.close();
  // A2 ohne Skript
  ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false }); p = await ctx.newPage();
  await p.goto(B + 'interaktion/beispiel.html');
  ok('Ohne Skript: Filterfeld ausgeblendet', !(await p.isVisible('#ia-filter-input')));
  ok('Ohne Skript: alle 3 Einträge sichtbar', (await p.$$eval('[data-filter-item]', l => l.filter(e => e.offsetParent).length)) === 3);
  ok('Ohne Skript: Suchfeld aus, Verzeichnis da, Treffer aus', !(await p.isVisible('#ia-search-input')) && await p.isVisible('[data-search-directory]') && !(await p.isVisible('[data-search-results]')));
  await ctx.close();
  // A4 320 px, reduzierte Bewegung
  ctx = await b.newContext({ viewport: { width: 320, height: 700 }, reducedMotion: 'reduce' }); p = await ctx.newPage();
  await p.goto(B + 'interaktion/beispiel.html'); await p.waitForSelector('[data-search-enhanced]');
  const sw = await p.evaluate(() => document.documentElement.scrollWidth); ok('320 px: kein waagrechtes Scrollen', sw <= 320, sw + ' px');
  await p.fill('#ia-filter-input', 'kostet'); ok('320 px, reduzierte Bewegung: Filter wirkt', (await p.$$eval('[data-filter-item]', l => l.filter(e => e.offsetParent).length)) === 1);
  await p.locator('#ia-filter-h').scrollIntoViewIfNeeded(); await p.screenshot({ path: SHOTS + '/320-filter.png' });
  await ctx.close();
  // A5 erzwungene Farben
  ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, forcedColors: 'active' }); p = await ctx.newPage();
  await p.goto(B + 'interaktion/beispiel.html#ia-tabs-h'); await p.waitForTimeout(400);
  const fc = await p.evaluate(() => { const a = document.activeElement; const s = getComputedStyle(a); return { id: a.id, os: s.outlineStyle, ow: s.outlineWidth }; });
  ok('Erzwungene Farben: Umrandung am Sprungziel', fc.id === 'ia-tabs-h' && fc.os === 'solid' && fc.ow === '2px', JSON.stringify(fc));
  await ctx.close();
  // B Starter: Abschnitt als Sprungziel
  for (const w of [1280, 360]) {
    ctx = await b.newContext({ viewport: { width: w, height: 900 } }); p = await ctx.newPage();
    await p.goto(B + 'psychoeducation-site-starter/behandlung-verstehen.html#formen'); await p.waitForTimeout(400);
    const s1 = await p.evaluate(() => { const a = document.activeElement; return { tag: a.tagName, id: a.id, bs: getComputedStyle(a).boxShadow }; });
    ok(`Starter ${w} px: Aufruf mit #formen fokussiert den Abschnitt sichtbar`, s1.tag === 'SECTION' && s1.id === 'formen' && s1.bs !== 'none', JSON.stringify({ tag: s1.tag, id: s1.id }));
    await p.screenshot({ path: `${SHOTS}/${w}-starter-abschnitt.png` });
    await ctx.close();
  }
  ctx = await b.newContext({ viewport: { width: 1280, height: 900 } }); p = await ctx.newPage();
  await p.goto(B + 'psychoeducation-site-starter/behandlung-verstehen.html');
  await p.keyboard.press('Tab'); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
  const m = await p.evaluate(() => { const a = document.activeElement; return { tag: a.tagName, bs: getComputedStyle(a).boxShadow }; });
  ok('Skip-Link: main ohne seitenbreiten Ring', m.tag === 'MAIN' && m.bs === 'none', JSON.stringify(m));
  // Tastatur: Roadmap-Link «#ablauf»
  const link = p.locator('a[href="#ablauf"]').first(); await link.focus(); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
  const k = await p.evaluate(() => { const a = document.activeElement; return { id: a.id, bs: getComputedStyle(a).boxShadow }; });
  ok('Tastatur: Sprunglink «#ablauf» setzt sichtbaren Fokus', k.id === 'ablauf' && k.bs !== 'none', k.id);
  await p.keyboard.press('Tab');
  const nxt = await p.evaluate(() => { const a = document.activeElement; return a.closest('#ablauf') ? 'im Abschnitt' : (a.tagName + ' ' + (a.getAttribute('href') || '')); });
  ok('Tab nach dem Sprung geht im Abschnitt weiter', nxt === 'im Abschnitt', nxt);
  await ctx.close();
  await b.close();
  console.log(out.join('\n'));
})();
