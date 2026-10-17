const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { execFileSync } = require('child_process');
const B = 'http://localhost:8770/templates/website/'; const S = process.argv[2] || '.';
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  // P-5 pixelgleich bei 100 %: Figur G mit neuer und mit alter Regel (28/32 px fest)
  for (const [site, pg] of [['zz-dep-test', 'depression-verstehen'], ['longform', 'erklaermuster']]) {
    const p = await (await b.newContext({ viewport: { width: 1280, height: 900 } })).newPage(); await p.goto(`${B}${site}/${pg}.html`);
    const el = p.locator('.puk-vis-build').first(); await el.scrollIntoViewIfNeeded();
    await el.screenshot({ path: `${S}/p5-neu-${pg}.png` });
    await p.addStyleTag({ content: '.puk-vis-build__n{width:28px!important;height:28px!important}.puk-vis-build__steps li{grid-template-columns:32px minmax(0,1fr)!important}' });
    await el.screenshot({ path: `${S}/p5-alt-${pg}.png` });
  }
  // P-15 Druck vom Seitenanfang und nach dem Scrollen, neue Regel und alte Regel (sticky im Druck)
  for (const variant of ['neu', 'alt']) {
    const p = await (await b.newContext({ viewport: { width: 1280, height: 900 } })).newPage(); await p.goto(`${B}zz-dep-test/begleiten.html`);
    if (variant === 'alt') await p.addStyleTag({ content: '@media print{.puk-longform__section-heading{position:sticky!important}}' });
    await p.pdf({ path: `${S}/p15-${variant}-top.pdf`, format: 'A4', margin: { top: '0', bottom: '0', left: '0', right: '0' } });
    await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight)); await p.waitForTimeout(200);
    await p.pdf({ path: `${S}/p15-${variant}-scrolled.pdf`, format: 'A4', margin: { top: '0', bottom: '0', left: '0', right: '0' } });
  }
  await b.close();
})();
