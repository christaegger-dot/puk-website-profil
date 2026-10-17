// Nachbesserung (15.10.2026): Am Bildschirm ändert sich nichts. Ganzseitige Bildschirmfotos des Paketstands vor der
// Nachbesserung (8772) und des neuen Stands (8770), 1280 und 360 px, mit und ohne Kennzeichen an den Abfolgen; Vergleich Bildpunkt für Bildpunkt.
// Aufruf: node bildschirm-gleich.cjs <arbeitsordner>
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { execFileSync } = require('child_process'); const path = require('path'); const fs = require('fs');
const W = process.argv[2]; fs.mkdirSync(W, { recursive: true });
const PAGES = [['psychoeducation-site-starter', ['behandlung-verstehen', 'beziehungen-verstehen', 'unterstuetzung-finden']], ['zz-dep-test', ['begleiten', 'behandlung-und-verlauf', 'depression-verstehen', 'fuer-sich-sorgen', 'ihre-situation', 'je-nach-rolle', 'rechte-und-angebote']], ['longform', ['visualisierungsmuster', 'erklaermuster']]];
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }); const out = [];
  for (const w of [1280, 360]) for (const mark of [false, true]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' }); const p = await ctx.newPage();
    for (const [site, pages] of PAGES) for (const pg of pages) {
      const shots = [];
      for (const port of [8772, 8770]) {
        await p.goto(`http://localhost:${port}/templates/website/${site}/${pg}.html`); await p.waitForLoadState('networkidle');
        if (mark) await p.evaluate(() => document.querySelectorAll('figure.puk-vis-figure').forEach(f => { if (f.querySelector(':is(ol.puk-vis-path,ol.puk-vis-decision,.puk-vis-build__steps)')) f.setAttribute('data-print-split', ''); }));
        const f = path.join(W, `${site}-${pg}-${w}-${mark ? 'k' : 'o'}-${port}.png`); await p.screenshot({ path: f, fullPage: true }); shots.push(f);
      }
      const same = fs.readFileSync(shots[0]).equals(fs.readFileSync(shots[1]));
      let diff = same ? 0 : +execFileSync('python3', ['-I', '-c', 'import sys\nfrom PIL import Image, ImageChops\na=Image.open(sys.argv[1]).convert("RGB");b=Image.open(sys.argv[2]).convert("RGB")\nprint(-1 if a.size!=b.size else sum(1 for v in ImageChops.difference(a,b).convert("L").getdata() if v))', shots[0], shots[1]]).toString();
      out.push({ site, page: pg, breite: w, kennzeichen: mark, gleich: diff === 0, abweichendeBildpunkte: diff });
    }
    await ctx.close();
  }
  console.log(JSON.stringify(out)); await b.close();
})();
