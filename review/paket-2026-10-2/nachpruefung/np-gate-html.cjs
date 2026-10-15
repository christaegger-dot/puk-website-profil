// Nachprüfung (15.10.2026): gate.html im Browser – angezeigte Zusammenfassung und Selbsttest, Starter und Kopie «Depression».
const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async () => { const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const s of ['psychoeducation-site-starter', 'zz-dep-test']) for (const q of ['', '?mode=production']) {
    const p = await b.newPage(); await p.goto(`http://localhost:8770/templates/website/${s}/gate.html${q}`); await p.waitForTimeout(2500);
    const t = await p.evaluate(() => document.body.innerText);
    console.log(s, q || '(Entwurf)', '|', (t.match(/[^\n]*Gate (Entwurf|Produktion)[^\n]*/g) || []).slice(0, 2).join(' / '), '|', (t.match(/Selbsttest[^\n]*\d+\s*(\/|von)\s*\d+[^\n]*/) || ['Selbsttest: nicht gefunden'])[0]);
    await p.close(); }
  await b.close(); })();
