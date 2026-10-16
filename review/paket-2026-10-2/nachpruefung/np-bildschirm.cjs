// Nachprüfung (15.10.2026): Bildschirm unverändert? Andere Methode als bildschirm-gleich.cjs (Bildschirmfotos):
// berechnete Stile (getComputedStyle, alle Eigenschaften) und Lage (getBoundingClientRect) jedes Elements, auch ::before
// und ::after (Eigenschaften sortiert; die Reihenfolge der CSS-Variablen ist sonst nicht stabil), Paketstand 1047ad6 (8772) gegen c65db24 (8770); 1280 und 360 px; ohne und mit Kennzeichen an allen Abfolgen.
// Aufruf: node np-bildschirm.cjs <ergebnis.json>
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'); const crypto = require('crypto');
const P = [['psychoeducation-site-starter', ['behandlung-verstehen', 'beziehungen-verstehen', 'unterstuetzung-finden']],
  ['zz-dep-test', ['begleiten', 'behandlung-und-verlauf', 'depression-verstehen', 'fuer-sich-sorgen', 'ihre-situation', 'je-nach-rolle', 'rechte-und-angebote']]];
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const res = [];
  for (const w of [1280, 360]) for (const mark of [false, true]) for (const [site, pages] of P) for (const p of pages) {
    const snap = {};
    for (const port of [8772, 8770]) {
      const pg = await (await b.newContext({ viewport: { width: w, height: 900 } })).newPage();
      await pg.goto(`http://localhost:${port}/templates/website/${site}/${p}.html`); await pg.waitForLoadState('networkidle');
      snap[port] = await pg.evaluate(mark => {
        if (mark) for (const l of document.querySelectorAll('figure.puk-vis-figure :is(ol.puk-vis-path,ol.puk-vis-decision,.puk-vis-build__steps)')) l.closest('figure').setAttribute('data-print-split', '');
        const out = [];
        for (const e of document.querySelectorAll('*')) for (const ps of [null, '::before', '::after']) {
          const cs = getComputedStyle(e, ps); const r = ps ? null : e.getBoundingClientRect();
          out.push([...cs].sort().map(k => k + ':' + cs.getPropertyValue(k)).join(';') + (r ? `|${r.x},${r.y},${r.width},${r.height}` : ''));
        }
        return out;
      }, mark);
      await pg.close();
    }
    const a = snap[8772], n = snap[8770]; let diff = 0; for (let i = 0; i < Math.max(a.length, n.length); i++) if (a[i] !== n[i]) diff++;
    res.push({ site, p, w, mark, elemente: n.length / 3, abweichend: diff, hash: crypto.createHash('sha1').update(n.join('\n')).digest('hex').slice(0, 12) });
  }
  fs.writeFileSync(process.argv[2], JSON.stringify(res, null, 1));
  console.log(res.length, 'Fälle;', res.filter(r => r.abweichend).length, 'mit Abweichung;', res.reduce((s, r) => s + r.elemente, 0), 'Elemente insgesamt');
  await b.close();
})();
