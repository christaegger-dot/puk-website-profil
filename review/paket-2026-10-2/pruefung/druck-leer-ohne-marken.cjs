// Prüfsitzung P-1: unveränderte Seiten (ohne Textmarken) als A4-PDF in 12 Einstellungen drucken und je Seite prüfen:
// leere Seite (kein Text) und leere Figurfläche (Hintergrund einer Figur ohne Inhalt, aus dem Seitenbild gemessen).
// Aufruf: node druck-leer-ohne-marken.cjs <basis-url> <website-ordner> <ergebnis.json> <pdf-ordner> <seite …>
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'); const path = require('path');
const [,, base, site, outJson, pdfDir, ...pages] = process.argv;
const SETTINGS = []; for (const m of [0, 10, 15]) for (const sc of [0.8, 0.9, 1.0, 1.1]) SETTINGS.push({ m, sc });
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await (await b.newContext()).newPage(); const res = [];
  for (const p of pages) {
    await page.goto(`${base}/templates/website/${site}/${p}.html`); await page.waitForLoadState('networkidle');
    for (const s of SETTINGS) {
      const file = path.join(pdfDir, `${site}-${p}-m${s.m}-s${s.sc}.pdf`);
      await page.pdf({ path: file, format: 'A4', scale: s.sc, margin: { top: s.m + 'mm', bottom: s.m + 'mm', left: s.m + 'mm', right: s.m + 'mm' }, printBackground: true });
      const n = +execFileSync('pdfinfo', [file]).toString().match(/Pages:\s+(\d+)/)[1]; const chars = [];
      for (let i = 1; i <= n; i++) chars.push(execFileSync('pdftotext', ['-f', String(i), '-l', String(i), file, '-']).toString().replace(/\s+/g, '').length);
      // Seitenbilder (20 dpi): Anteil der Seite, der Figurgrau ohne dunkle Bildpunkte ist, in Zeilenstreifen
      const pre = path.join(pdfDir, `img-${site}-${p}-m${s.m}-s${s.sc}`); execFileSync('pdftoppm', ['-r', '20', '-gray', file, pre]);
      const greyRun = [];
      for (let i = 1; i <= n; i++) {
        const f = fs.readdirSync(pdfDir).find(x => x.startsWith(path.basename(pre) + '-') && +x.slice(path.basename(pre).length + 1).replace('.pgm', '') === i);
        const buf = fs.readFileSync(path.join(pdfDir, f)); const hdr = buf.toString('latin1', 0, 40).split(/\s+/); const W = +hdr[1], H = +hdr[2]; const off = buf.length - W * H;
        let run = 0, best = 0;
        for (let y = 0; y < H; y++) { let grey = 0, dark = 0; for (let x = 0; x < W; x++) { const v = buf[off + y * W + x]; if (v >= 238 && v <= 250) grey++; if (v < 200) dark++; }
          if (grey > W * 0.5 && dark === 0) { run++; best = Math.max(best, run); } else run = 0; }
        greyRun.push(Math.round(best / H * 100));
        fs.unlinkSync(path.join(pdfDir, f));
      }
      res.push({ site, page: p, set: `${s.m}mm/${Math.round(s.sc * 100)}%`, pages: n, chars, blank: chars.map((c, i) => c === 0 ? i + 1 : 0).filter(Boolean), greyEmpty: greyRun.map((g, i) => g >= 12 ? `${i + 1}:${g}%` : 0).filter(Boolean) });
    }
  }
  fs.writeFileSync(outJson, JSON.stringify(res, null, 1)); await b.close();
})();
