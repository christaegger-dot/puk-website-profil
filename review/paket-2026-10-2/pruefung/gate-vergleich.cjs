// Prüfsitzung P-8: Befunde von gate.html (Chromium) und node tools/gate.mjs vergleichen, Entwurf und Produktion.
// Aufruf: node gate-vergleich.cjs <website-ordner> …   (Webserver im Repository-Stamm auf Port 8770)
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { execFileSync } = require('child_process');
const path = require('path');
const root = path.resolve(__dirname, '../../..');
const cli = (site, prod) => { let out; try { out = execFileSync('node', ['tools/gate.mjs', ...(prod ? ['--production'] : [])], { cwd: path.join(root, 'templates/website', site) }).toString(); } catch (e) { out = e.stdout.toString(); }
  const rows = out.split('\n').filter(l => /^(BLOCK|WARN) /.test(l)).map(l => l.split(/\s+/).slice(0, 3).join(' ')).sort();
  return rows; };
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  for (const site of process.argv.slice(2)) {
    const p = await b.newPage(); await p.goto(`http://localhost:8770/templates/website/${site}/gate.html?nc=${Date.now()}`);
    await p.waitForFunction(() => window.__gate, null, { timeout: 30000 });
    const g = await p.evaluate(() => { const rows = r => r.findings.map(f => (f.level === 'block' ? 'BLOCK' : 'WARN') + ' ' + f.page + ' ' + f.id).sort(); return { draft: rows(__gate.draft), prod: rows(__gate.prod), self: __gate.self.filter(r => r.ok).length + '/' + __gate.self.length, summary: document.getElementById('summary').textContent, h2: [...document.querySelectorAll('h2')].map(h => h.textContent) }; });
    for (const [mode, prod] of [['draft', false], ['prod', true]]) {
      const c = cli(site, prod); const same = JSON.stringify(c) === JSON.stringify(g[mode]);
      const ids = a => [...new Set(a.map(x => x.split(' ')[2]))].sort().join(',');
      console.log(`${site} ${mode === 'draft' ? 'Entwurf' : 'Produktion'}: gate.html ${g[mode].filter(x => x.startsWith('BLOCK')).length} blockierend/${g[mode].filter(x => x.startsWith('WARN')).length} Hinweise · CLI ${c.filter(x => x.startsWith('BLOCK')).length}/${c.filter(x => x.startsWith('WARN')).length} · Befundzeilen gleich: ${same} · Prüfungen ${ids(g[mode])}`);
      if (!same) console.log('   nur gate.html:', g[mode].filter(x => !c.includes(x)), ' nur CLI:', c.filter(x => !g[mode].includes(x)));
    }
    console.log(`${site} Selbsttest gate.html: ${g.self} · ${g.summary}`); console.log(`${site} Überschriften: ${g.h2.join(' | ')}`);
    await p.close();
  }
  await b.close();
})();
