// Prüfung Nachtrag #131 (16.10.2026): gate.html (Entwurf und Produktion) und ui_kits/website/qa.html im Browser, Stand 1ba2568.
// Webserver auf 8790 im Stamm eines Arbeitsbaums von 1ba2568: python3 -m http.server 8790 --bind 127.0.0.1
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const q of ['', '?mode=production']) {
    const p = await b.newPage(); const bad = []; const geladen = [];
    p.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); if (/contract\.js|gate-browser\.js|gate\.css/.test(r.url())) geladen.push(r.status() + ' ' + r.url().replace(/^.*\/tools\//, 'tools/')); });
    p.on('pageerror', e => bad.push('Fehler ' + e.message));
    await p.goto(`http://localhost:8790/templates/website/psychoeducation-site-starter/gate.html${q}`); await p.waitForTimeout(2500);
    const t = await p.evaluate(() => document.body.innerText);
    console.log('gate.html', q || '(Entwurf)', '|', (t.match(/[^\n]*blockierend[^\n]*/g) || ['keine Zusammenfassung']).slice(0, 2).join(' / '), '| Befunde build:', (t.match(/nicht mit Build/g) || []).length);
    console.log('  geladen:', geladen.sort().join(', '), '| Fehler:', bad.length ? bad.join('; ') : 'keine');
    await p.close(); }
  { const p = await b.newPage(); const bad = [];
    p.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); }); p.on('pageerror', e => bad.push('Fehler ' + e.message));
    await p.goto('http://localhost:8790/ui_kits/website/qa.html'); await p.waitForTimeout(6000);
    console.log('qa.html | Fehler beim Laden und Ausführen:', bad.length ? bad.slice(0, 5).join('; ') : 'keine');
    await p.close(); }
  await b.close(); })();
