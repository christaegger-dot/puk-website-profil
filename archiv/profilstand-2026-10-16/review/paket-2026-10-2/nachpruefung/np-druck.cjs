// Nachprüfung der Nachbesserung, Paket 2026.10.2 (15.10.2026). Eigene Druckmessung, unabhängig von druck-messung.cjs.
// Jede Seite als A4-PDF in 12 Einstellungen (Rand 0, 10, 15 mm × 80, 90, 100, 110 %), mit Hintergrund.
// Die gedruckte Seite wird nur geladen und gedruckt: kein evaluate, kein emulateMedia, keine Marken (W-1).
// Die Texte der Figuren liest ein zweiter, getrennter Tab (texte.json); der Drucktab bleibt unberührt.
//
// Aufruf: node np-druck.cjs <basis-url> <website> <pdf-ordner> [Optionen] <seite …>
//   --css-ersatz=<pfad-im-repo>=<datei>   diese Datei statt der ausgelieferten laden (page.route); mehrfach möglich
//   --lang=<n>                           Schrittlisten von Prozesspfad, Entscheidungsweg, Modell in Schritten n-fach
//   --kennzeichen                        data-print-split an diese Figuren setzen
//   (Nur --lang und --kennzeichen verändern die Seite; das ist der Testfall selbst, keine Messhilfe.)
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const fs = require('fs'); const path = require('path');
const args = process.argv.slice(2); const pos = args.filter(a => !a.startsWith('--'));
const [base, site, dir, ...pages] = pos;
const opt = k => args.filter(a => a.startsWith('--' + k + '=')).map(a => a.slice(k.length + 3));
const ersatz = opt('css-ersatz').map(x => { const i = x.indexOf('='); return [x.slice(0, i), fs.readFileSync(x.slice(i + 1))]; });
const lang = +(opt('lang')[0] || 1); const mark = args.includes('--kennzeichen');
const SEQ = ':is(ol.puk-vis-path,ol.puk-vis-decision,.puk-vis-build__steps)';
const SET = []; for (const m of [0, 10, 15]) for (const s of [0.8, 0.9, 1.0, 1.1]) SET.push({ m, s });
(async () => {
  fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const ctx = await b.newContext();
  for (const [p, body] of ersatz) await ctx.route('**/' + p, r => r.fulfill({ body, contentType: 'text/css' }));
  const texte = {};
  for (const p of pages) {
    const url = `${base}/templates/website/${site}/${p}.html`;
    const prep = async pg => { if (lang > 1 || mark) await pg.evaluate(([SEQ, lang, mark]) => {
      for (const l of document.querySelectorAll('figure.puk-vis-figure ' + SEQ)) {
        const items = [...l.children];
        for (let k = 1; k < lang; k++) for (const li of items) { const c = li.cloneNode(true); c.querySelectorAll('[id]').forEach(e => e.removeAttribute('id')); l.appendChild(c); }
        if (mark) l.closest('figure.puk-vis-figure').setAttribute('data-print-split', '');
      } }, [SEQ, lang, mark]); };
    // Tab 1: Texte lesen (Bildschirm), getrennt vom Drucktab
    const t = await ctx.newPage(); await t.goto(url); await t.waitForLoadState('networkidle'); await prep(t);
    texte[p] = await t.evaluate(SEQ => [...document.querySelectorAll('figure.puk-vis-figure')].map(f => {
      const q = s => { const e = f.querySelector(s); return e ? e.textContent.replace(/\s+/g, ' ').trim() : ''; };
      const l = f.querySelector(SEQ); const li = l ? [...l.children] : [];
      // längster sichtbarer Textknoten eines Schritts (die Reihenfolge der Teile im PDF folgt nicht dem DOM)
      const lang1 = e => { const w = document.createTreeWalker(e, NodeFilter.SHOW_TEXT); let best = ''; for (let n; (n = w.nextNode());) { const x = n.textContent.replace(/\s+/g, ' ').trim(); if (!n.parentElement.closest('.puk-sr') && x.length > best.length) best = x; } return best; };
      const cap = f.querySelector('figcaption'); const capTxt = cap ? [...cap.querySelectorAll('p:not(.puk-sr)')].map(x => x.textContent).join(' ').replace(/\s+/g, ' ').trim() : '';
      return { id: f.dataset.visualId, type: f.dataset.visualType, label: q('.puk-vis-label'), kern: q('.puk-vis-kern'), caption: capTxt,
        first: li.length ? lang1(li[0]) : '', last: li.length ? lang1(li[li.length - 1]) : '', n: li.length };
    }), SEQ);
    await t.close();
    // Tab 2: nur laden und drucken
    const d = await ctx.newPage(); await d.goto(url); await d.waitForLoadState('networkidle'); await prep(d);
    for (const s of SET) await d.pdf({ path: path.join(dir, `${site}__${p}__x${lang}__m${s.m}__s${Math.round(s.s * 100)}.pdf`), format: 'A4', scale: s.s,
      margin: { top: s.m + 'mm', bottom: s.m + 'mm', left: s.m + 'mm', right: s.m + 'mm' }, printBackground: true });
    await d.close();
  }
  const tf = path.join(dir, 'texte.json'); const alt = fs.existsSync(tf) ? JSON.parse(fs.readFileSync(tf)) : {};
  fs.writeFileSync(tf, JSON.stringify(Object.assign(alt, Object.fromEntries(Object.entries(texte).map(([k, v]) => [site + '__' + k + '__x' + lang, v]))), null, 1));
  await b.close();
})();
