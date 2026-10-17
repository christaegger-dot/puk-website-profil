// Druckmessung: je Seite mit Figuren und Einstellung ein A4-PDF; je Figur Seiten von Titel, Kernaussage,
// erstem und letztem Teil der Darstellung und Kennzeichnung; leere Seiten.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const [,, base, outJson, pdfDir] = process.argv;
const PAGES = {
  'psychoeducation-site-starter': ['behandlung-verstehen', 'unterstuetzung-finden'],
  'depression-angehoerige': ['behandlung-und-verlauf', 'depression-verstehen'],
};
const SETTINGS = [];
for (const m of [0, 10, 15]) for (const sc of [0.8, 0.9, 1.0, 1.1]) SETTINGS.push({ m, sc });
const norm = t => (t || '').replace(/­/g, '').replace(/\s+/g, ' ').trim();
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await (await b.newContext()).newPage();
  const results = [];
  for (const [site, pages] of Object.entries(PAGES)) for (const p of pages) {
    await page.goto(`${base}/templates/website/${site}/${p}.html`); await page.waitForLoadState('networkidle');
    await page.evaluate(() => { for (const l of document.querySelectorAll('figure.puk-vis-figure :is(ol.puk-vis-path,ol.puk-vis-decision,.puk-vis-build__steps)')) { const items = [...l.children]; for (let k = 0; k < 4; k++) for (const li of items) { const c = li.cloneNode(true); c.querySelectorAll('[id]').forEach(e => e.removeAttribute('id')); l.appendChild(c); } } });
    const figs = await page.evaluate(() => [...document.querySelectorAll('figure.puk-vis-figure')].filter(f => f.querySelector(':is(ol.puk-vis-path,ol.puk-vis-decision,.puk-vis-build__steps)')).map((f, i) => {
      const t = e => e ? e.textContent.replace(/\u00ad/g, '').replace(/\s+/g, ' ').trim() : '';
      const mk = (code, block) => { const s = document.createElement('span'); s.textContent = 'QZ' + i + code + 'Q'; s.style.cssText = (block ? 'display:block;height:0;line-height:0;' : '') + 'font-size:3px;'; return s; };
      const put = (el, code, atEnd) => { if (!el) return false; const m = mk(code, false); atEnd ? el.appendChild(m) : el.insertBefore(m, el.firstChild); return true; };
      const kids = [...f.children];
      const art = kids.filter(k => !k.matches('.puk-vis-label,.puk-vis-kern,.puk-vis-short,.puk-vis-more,figcaption,.puk-vis-ansatz'));
      const leaves = art.flatMap(a => a.matches('svg') ? [] : [...a.querySelectorAll('li,p,h3,h4,dt,dd,td,th')]).filter(e => !e.closest('svg') && t(e).length > 3 && !e.querySelector('li,p'));
      put(f.querySelector('.puk-vis-label'), 'L'); put(f.querySelector('.puk-vis-kern'), 'K');
      if (leaves.length) { put(leaves[0], 'F'); put(leaves[leaves.length - 1], 'E', true); }
      else if (art.length) { art[0].before(mk('F', true)); art[art.length - 1].after(mk('E', true)); }
      const cap = f.querySelector('figcaption.puk-vis-caption'); const capP = cap ? [...cap.querySelectorAll('p')].find(x => !x.classList.contains('puk-sr')) : null;
      put(capP || cap, 'C', true);
      return { i, id: f.dataset.visualId, type: f.dataset.visualType, leaves: leaves.length };
    }));
    for (const s of SETTINGS) {
      const file = `${pdfDir}/${site}-${p}-m${s.m}-s${s.sc}.pdf`;
      await page.pdf({ path: file, format: 'A4', scale: s.sc, margin: { top: s.m + 'mm', bottom: s.m + 'mm', left: s.m + 'mm', right: s.m + 'mm' }, printBackground: true });
      const n = +execFileSync('pdfinfo', [file]).toString().match(/Pages:\s+(\d+)/)[1];
      const texts = []; for (let i = 1; i <= n; i++) texts.push(norm(execFileSync('pdftotext', ['-f', String(i), '-l', String(i), file, '-']).toString()));
      const find = code => { for (let i = 0; i < n; i++) if (texts[i].includes(code)) return i + 1; return null; };
      const clean = texts.map(x => x.replace(/QZ\d+[LKFEC]Q/g, '').trim());
      const blank = clean.map((x, i) => x.length < 3 ? i + 1 : 0).filter(Boolean);
      const thin = clean.map((x, i) => x.length >= 3 && x.length < 120 ? i + 1 : 0).filter(Boolean);
      for (const f of figs) {
        const g = c => find('QZ' + f.i + c + 'Q');
        results.push({ site, page: p, set: `${s.m}mm/${Math.round(s.sc * 100)}%`, fig: f.id, type: f.type, pages: n, blank: blank.join(','), thin: thin.join(','), L: g('L'), K: g('K'), F: g('F'), La: g('E'), C: g('C') });
      }
    }
  }
  fs.writeFileSync(outJson, JSON.stringify(results, null, 1));
  await b.close();
})();
