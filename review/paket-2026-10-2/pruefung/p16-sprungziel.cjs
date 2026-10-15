// Prüfsitzung P-16: Fokusbild am Sprungziel auf Langform-Seiten von Starter, Kopie «Depression» (neues Profil)
// und – zum Vergleich – der Website «Depression» im Repository (eigenes starter.css, noch mit outline:none).
// Je Fall: Tastatur (Sprunglink fokussieren, Enter), Aufruf mit #…, erzwungene Farben, reduzierte Bewegung, 320 px,
// nächste Tab-Taste. Aufruf: node p16-sprungziel.cjs <bilder-ordner>   (Webserver im Repository-Stamm auf Port 8770)
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const B = 'http://localhost:8770/templates/website/'; const SHOTS = process.argv[2];
const CASES = [['psychoeducation-site-starter', 'behandlung-verstehen', 'ablauf'], ['zz-dep-test', 'begleiten', 'ansprechen'], ['zz-dep-test', 'behandlung-und-verlauf', null], ['depression-angehoerige', 'begleiten', 'ansprechen']];
const state = p => p.evaluate(() => { const a = document.activeElement, s = getComputedStyle(a); return { tag: a.tagName, id: a.id, ti: a.getAttribute('tabindex'), bs: s.boxShadow, os: s.outlineStyle, ow: s.outlineWidth, oc: s.outlineColor }; });
const visible = s => (s.bs && s.bs !== 'none') || (s.os !== 'none' && parseFloat(s.ow) > 0);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const out = [];
  for (const [site, pg, fixed] of CASES) for (const [label, opts] of [['1280', { viewport: { width: 1280, height: 900 } }], ['320 reduziert', { viewport: { width: 320, height: 700 }, reducedMotion: 'reduce' }], ['1280 erzwungene Farben', { viewport: { width: 1280, height: 900 }, forcedColors: 'active' }]]) {
    const ctx = await b.newContext(opts); const p = await ctx.newPage();
    await p.goto(`${B}${site}/${pg}.html`); await p.waitForLoadState('networkidle');
    const target = fixed || await p.evaluate(() => { const a = [...document.querySelectorAll('.puk-longform__roadmap a[href^="#"]')][1]; return a && a.getAttribute('href').slice(1); });
    // Tastatur: Sprunglink fokussieren und Enter
    await p.locator(`a[href="#${target}"]`).first().focus(); await p.keyboard.press('Enter'); await p.waitForTimeout(300);
    const k = await state(p);
    if (SHOTS) await p.screenshot({ path: `${SHOTS}/p16-${site}-${pg}-${label.replace(/ /g, '-')}.png` });
    await p.keyboard.press('Tab'); const nxt = await p.evaluate(t => { const a = document.activeElement; return a.closest('#' + t) ? 'im Abschnitt' : 'ausserhalb: ' + a.tagName + ' ' + (a.getAttribute('href') || a.textContent.trim().slice(0, 30)); }, target);
    const tiAfter = await p.evaluate(t => document.getElementById(t).getAttribute('tabindex'), target);
    // Aufruf mit #…
    const p2 = await ctx.newPage(); await p2.goto(`${B}${site}/${pg}.html#${target}`); await p2.waitForTimeout(400); const h = await state(p2);
    if (SHOTS) await p2.screenshot({ path: `${SHOTS}/p16-hash-${site}-${pg}-${label.replace(/ /g, '-')}.png` });
    out.push(`${visible(k) && visible(h) && nxt === 'im Abschnitt' ? 'OK  ' : 'FAIL'} ${site} ${pg} #${target} · ${label} · Tastatur: ${k.tag}#${k.id} ${visible(k) ? 'Fokusbild sichtbar' : 'KEIN Fokusbild'} (${k.os !== 'none' ? 'outline ' + k.os + ' ' + k.ow : 'box-shadow ' + (k.bs === 'none' ? 'none' : 'ja')}) · Aufruf mit #: ${h.tag}#${h.id} ${visible(h) ? 'sichtbar' : 'KEIN Fokusbild'} · nächste Tab-Taste: ${nxt} · tabindex danach: ${tiAfter}`);
    await ctx.close();
  }
  // ohne Skript: Sprunglink springt, kein Fehler, kein Fokusbild nötig
  const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1280, height: 900 } }); const p = await ctx.newPage();
  await p.goto(`${B}zz-dep-test/begleiten.html#ansprechen`); const y = await p.evaluate(() => Math.round(document.getElementById('ansprechen').getBoundingClientRect().top));
  out.push(`${y < 50 ? 'OK  ' : 'FAIL'} ohne Skript: Aufruf mit #ansprechen springt zum Abschnitt (Oberkante ${y} px)`);
  await b.close(); console.log(out.join('\n'));
})();
