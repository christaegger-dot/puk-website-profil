// Nachbesserung P-1/K-1 (15.10.2026): Druck OHNE Textmarken (W-1).
// Jede Seite als A4-PDF in 12 Einstellungen (Rand 0, 10, 15 mm × 80, 90, 100, 110 %). Gesucht wird nur Text, den die
// Seite ohnehin enthält: Titel, Kernaussage, erster und letzter Teil der Darstellung, sichtbare Kennzeichnung.
// Der Text jeder PDF-Seite kommt aus «pdftotext -raw» (Reihenfolge des Inhaltsstroms, nicht der Spalten).
// Die Seite selbst wird nicht verändert – ausser mit --lang (Abfolgen künstlich verlängert) bzw. --kennzeichen.
//
// Aufruf: node druck-messung.cjs <basis-url> <website-ordner> <ergebnis.json> <pdf-ordner> [--lang] [--kennzeichen] <seite …>
//   --lang         jede Liste von Prozesspfad, Entscheidungsweg und Modell in Schritten fünffach (wie printlong.cjs);
//                  --faktor=<n> statt fünffach n-fach
//   --kennzeichen  data-print-split an genau diese Figuren setzen (Prozesspfad, Entscheidungsweg, Modell in Schritten)
//   --css=<datei>  zusätzliche Druckregeln als <style> einsetzen; nur für Varianten, die eine Regel begründen
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { execFileSync } = require('child_process');
const fs = require('fs'); const path = require('path'); const crypto = require('crypto');
const args = process.argv.slice(2); const flags = new Set(args.filter(a => a.startsWith('--') && !a.includes('='))); const pos = args.filter(a => !a.startsWith('--'));
const [base, site, outJson, pdfDir, ...pages] = pos;
const extraCss = (args.find(a => a.startsWith('--css=')) || '').slice(6);
const faktor = +((args.find(a => a.startsWith('--faktor=')) || '--faktor=5').slice(9));
const SETTINGS = []; for (const m of [0, 10, 15]) for (const sc of [0.8, 0.9, 1.0, 1.1]) SETTINGS.push({ m, sc });
const N = s => String(s || '').normalize('NFKC').replace(/[­​\s\-‐‑]/g, '');
const SEQ = ':is(ol.puk-vis-path,ol.puk-vis-decision,.puk-vis-build__steps)';
(async () => {
  fs.mkdirSync(pdfDir, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await (await b.newContext()).newPage(); const res = [];
  for (const p of pages) {
    await page.goto(`${base}/templates/website/${site}/${p}.html`); await page.waitForLoadState('networkidle');
    if (flags.has('--lang') || flags.has('--kennzeichen')) await page.evaluate(([SEQ, lang, mark, faktor]) => {
      for (const l of document.querySelectorAll('figure.puk-vis-figure ' + SEQ)) {
        if (lang) { const items = [...l.children]; for (let k = 1; k < faktor; k++) for (const li of items) { const c = li.cloneNode(true); c.querySelectorAll('[id]').forEach(e => e.removeAttribute('id')); l.appendChild(c); } }
        if (mark) l.closest('figure.puk-vis-figure').setAttribute('data-print-split', '');
      }
    }, [SEQ, flags.has('--lang'), flags.has('--kennzeichen'), faktor]);
    if (extraCss) await page.addStyleTag({ content: fs.readFileSync(extraCss, 'utf8') });
    // Texte der Figurteile, wie sie im Druck sichtbar sind (innerText unter Druckmedien); danach Medien zurücksetzen,
    // weil emulateMedia sonst auch für page.pdf gilt.
    await page.emulateMedia({ media: 'print' });
    const figs = await page.evaluate(SEQ => [...document.querySelectorAll('figure.puk-vis-figure')].map(f => {
      const t = e => e ? e.innerText : '';
      const kids = [...f.children];
      const art = kids.filter(k => !k.matches('.puk-vis-label,.puk-vis-kern,.puk-vis-short,.puk-vis-more,figcaption'));
      const vis = e => e.getClientRects().length > 0 && getComputedStyle(e).visibility !== 'hidden';
      const leaves = art.flatMap(a => [...a.querySelectorAll('li,p,h3,h4,dt,dd,td,th,span')]).filter(e => !e.closest('svg') && vis(e) && e.innerText.replace(/\s/g, '').length > 6 && !e.querySelector('li,p,h3,dd,span'));
      const cap = f.querySelector('figcaption'); const capP = cap ? [...cap.querySelectorAll('p')].filter(x => !x.classList.contains('puk-sr') && vis(x)) : [];
      return { id: f.dataset.visualId, type: f.dataset.visualType, split: f.hasAttribute('data-print-split'), seq: !!f.querySelector(SEQ),
        L: t(f.querySelector('.puk-vis-label')), K: t(f.querySelector('.puk-vis-kern')),
        F: leaves.length ? t(leaves[0]) : '', E: leaves.length ? t(leaves[leaves.length - 1]) : '', C: capP.map(t).join(' ') };
    }), SEQ);
    await page.emulateMedia({ media: null });
    for (const s of SETTINGS) {
      const file = path.join(pdfDir, `${site}-${p}${flags.has('--lang') ? '-x' + faktor : ''}-m${s.m}-s${s.sc}.pdf`);
      await page.pdf({ path: file, format: 'A4', scale: s.sc, margin: { top: s.m + 'mm', bottom: s.m + 'mm', left: s.m + 'mm', right: s.m + 'mm' }, printBackground: true });
      const n = +execFileSync('pdfinfo', [file]).toString().match(/Pages:\s+(\d+)/)[1];
      const txt = []; for (let i = 1; i <= n; i++) txt.push(N(execFileSync('pdftotext', ['-raw', '-f', String(i), '-l', String(i), file, '-']).toString()));
      const where = (s, from) => { const k = N(s); const key = from === 'end' ? k.slice(-28) : k.slice(0, 28); if (key.length < 6) return []; return txt.map((x, i) => x.includes(key) ? i + 1 : 0).filter(Boolean); };
      const figOut = figs.map(f => {
        const L = where(f.L), K = where(f.K), F = where(f.F), E = where(f.E, 'end'), C = where(f.C, 'end');
        // erster Fund von Titel/Kern/Anfang, letzter Fund von Ende/Kennzeichnung (verlängerte Listen wiederholen Text)
        // Anfang: erster Fund ab der Seite des Titels (der Anfangstext kann schon im Fliesstext davor stehen)
        const Fa = F.filter(x => L[0] == null || x >= L[0]);
        const r = { id: f.id, type: f.type, split: f.split, L: L[0] || null, K: K[0] || null, F: Fa[0] || null, E: E.length ? E[E.length - 1] : null, C: C.length ? C[C.length - 1] : null, mehrdeutig: [L, K, C].some(a => a.length > 1) };
        r.ganz = r.L != null && r.L === r.C && r.L === r.F && r.L === r.E;
        r.kopf = r.L != null && r.L === r.K && r.K === r.F;
        r.kennz = r.E != null && r.E === r.C;
        return r;
      });
      res.push({ site, page: p, faktor: flags.has('--lang') ? faktor : 1, set: `${s.m}mm/${Math.round(s.sc * 100)}%`, file: path.basename(file), pages: n, chars: txt.map(x => x.length), blank: txt.map((x, i) => x.length === 0 ? i + 1 : 0).filter(Boolean), figs: figOut, textHash: txt.map(x => crypto.createHash('sha1').update(x).digest('hex').slice(0, 12)) });
    }
  }
  fs.writeFileSync(outJson, JSON.stringify(res));
  await b.close();
})();
