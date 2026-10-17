// Prüfsitzung P-1, Gegenprobe ohne Textmarken: Die Seite wird unverändert als A4-PDF gedruckt. Gesucht werden die
// echten Texte von Titel (.puk-vis-label), Kernaussage (.puk-vis-kern), erstem und letztem Schritt bzw. Teil der
// Darstellung und Kennzeichnung (figcaption) im Text jeder PDF-Seite (pdftotext, ohne Leerraum verglichen).
// Aufruf: node druck-gegenprobe.cjs <basis-url> <website-ordner> <ergebnis.json> <pdf-ordner> [seite …]
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs');
const [,, base, site, outJson, pdfDir, ...pages] = process.argv;
const SETTINGS = []; for (const m of [0, 10, 15]) for (const sc of [0.8, 0.9, 1.0, 1.1]) SETTINGS.push({ m, sc });
const compact = t => (t || '').replace(/[­\s\-‐‑]/g, '');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await (await b.newContext()).newPage();
  const res = [];
  for (const p of pages) {
    await page.goto(`${base}/templates/website/${site}/${p}.html`); await page.waitForLoadState('networkidle');
    await page.emulateMedia({ media: 'print' });
    const figs = await page.evaluate(() => [...document.querySelectorAll('figure.puk-vis-figure')].map(f => {
      const vis = e => e && getComputedStyle(e).display !== 'none' && !e.closest('.puk-sr,[aria-hidden="true"]');
      const tx = e => e ? e.textContent.replace(/­/g, '').replace(/\s+/g, ' ').trim() : '';
      const art = [...f.children].filter(k => !k.matches('.puk-vis-label,.puk-vis-kern,.puk-vis-short,.puk-vis-more,figcaption,.puk-vis-ansatz'));
      const leaves = art.flatMap(a => [...a.querySelectorAll('li h3,li h4,li p,li,p,dt,dd,td,th')]).filter(e => vis(e) && !e.closest('svg') && tx(e).length > 12 && !e.querySelector('li,p,h3,h4'));
      const cap = f.querySelector('figcaption'); const capP = cap ? [...cap.querySelectorAll('p')].filter(vis).pop() : null;
      return { id: f.dataset.visualId, type: f.dataset.visualType, L: tx(f.querySelector('.puk-vis-label')), K: tx(f.querySelector('.puk-vis-kern')), F: leaves.length ? tx(leaves[0]) : '', E: leaves.length ? tx(leaves[leaves.length - 1]) : '', C: tx(capP || cap) };
    }));
    await page.emulateMedia({ media: null }); // zurücksetzen: 'screen' würde auch page.pdf mit Bildschirm-CSS drucken
    for (const s of SETTINGS) {
      const file = `${pdfDir}/${site}-${p}-m${s.m}-s${s.sc}.pdf`;
      await page.pdf({ path: file, format: 'A4', scale: s.sc, margin: { top: s.m + 'mm', bottom: s.m + 'mm', left: s.m + 'mm', right: s.m + 'mm' }, printBackground: true });
      const n = +execFileSync('pdfinfo', [file]).toString().match(/Pages:\s+(\d+)/)[1];
      const texts = []; for (let i = 1; i <= n; i++) texts.push(compact(execFileSync('pdftotext', ['-f', String(i), '-l', String(i), file, '-']).toString()));
      // Ein Text kann über zwei Seiten laufen: Anfang (erste 24 Zeichen) für den Beginn, Ende (letzte 24) für das Ende.
      const pageOf = (t, from, tail) => { const c = compact(t); if (c.length < 6) return null; const key = tail ? c.slice(-24) : c.slice(0, 24); for (let i = (from || 1) - 1; i < n; i++) if (texts[i].includes(key)) return i + 1; return null; };
      const blank = texts.map((x, i) => x.length < 3 ? i + 1 : 0).filter(Boolean);
      for (const f of figs) {
        const L = pageOf(f.L), K = pageOf(f.K, L), F = pageOf(f.F, K || L), E = pageOf(f.E, F, true), C = pageOf(f.C, E || F, true);
        res.push({ site, page: p, set: `${s.m}mm/${Math.round(s.sc * 100)}%`, fig: f.id, type: f.type, pages: n, blank: blank.join(','), L, K, F, E, C });
      }
    }
  }
  fs.writeFileSync(outJson, JSON.stringify(res, null, 1));
  await b.close();
})();
