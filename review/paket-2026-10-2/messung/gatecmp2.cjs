const { chromium } = require('/opt/node-tools/node_modules/playwright');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const site of ['psychoeducation-site-starter', 'zz-dep-test']) {
    const p = await b.newPage(); await p.goto(`http://localhost:8770/templates/website/${site}/gate.html`);
    await p.waitForFunction(() => window.__gate, null, { timeout: 20000 });
    console.log(site, JSON.stringify(await p.evaluate(() => ({ draft: [__gate.draft.blocks, __gate.draft.warns], prod: [__gate.prod.blocks, __gate.prod.warns], ids: [...new Set(__gate.prod.findings.map(f => f.id))].sort().join(','), self: __gate.self.filter(r => r.ok).length + '/' + __gate.self.length }))));
  }
  await b.close();
})();
