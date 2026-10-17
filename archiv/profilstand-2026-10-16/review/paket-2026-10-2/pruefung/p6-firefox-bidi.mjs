// Prüfsitzung P-6: Silbentrennung in Firefox (WebDriver BiDi, ohne Zusatzpakete; Node ≥ 22).
// Firefox headless mit --remote-debugging-port=<port> starten; Schriftgrösse über das Profil (font.size.variable.x-western).
// Je Seite und Breite: berechnetes hyphens und alle Wörter (≥ 9 Buchstaben) in Figuren und Abschnittsüberschriften,
// die über zwei Zeilen laufen. Gegenprobe: dieselbe Messung mit hyphens:manual – bricht das Wort dann nicht mehr,
// war es eine Silbentrennung (mit Trennstrich), sonst ein Notumbruch (overflow-wrap, ohne Trennstrich).
// Aufruf: node p6-firefox-bidi.mjs <port> <basis-url> <ergebnis.json> <bilder-ordner> <breite,…> <seite …>
import fs from 'fs';
const [,, port, base, outJson, shots, widths, ...pages] = process.argv;
const ws = new WebSocket(`ws://127.0.0.1:${port}/session`);
let n = 0; const wait = {};
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && wait[m.id]) { wait[m.id](m); delete wait[m.id]; } };
const send = (method, params) => new Promise((res, rej) => { const id = ++n; wait[id] = m => m.type === 'error' ? rej(new Error(method + ': ' + m.message)) : res(m.result); ws.send(JSON.stringify({ id, method, params })); });
await new Promise(r => ws.onopen = r);
await send('session.new', { capabilities: {} });
const ctx = (await send('browsingContext.create', { type: 'tab' })).context;
const ev = async expr => (await send('script.evaluate', { expression: expr, target: { context: ctx }, awaitPromise: true, resultOwnership: 'none' })).result.value;
const MEASURE = `(async () => {
  await document.fonts.ready;
  const scope = [...document.querySelectorAll('figure.puk-vis-figure, .puk-longform__section-heading .puk-web-h2, .puk-vis-wide .puk-web-h3')];
  const words = [];
  for (const el of scope) { const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let t;
    while ((t = tw.nextNode())) { if (t.parentElement.closest('svg,.puk-sr,[hidden]')) continue; const re = /[A-Za-zÄÖÜäöüß]{9,}/g; let m;
      while ((m = re.exec(t.data))) { const r = document.createRange(); r.setStart(t, m.index); r.setEnd(t, m.index + m[0].length);
        const lines = new Set([...r.getClientRects()].filter(x => x.width > 0).map(x => Math.round(x.top))).size; if (lines > 1) words.push({ w: m[0], el: el.matches('figure') ? 'Figur ' + (el.dataset.visualId || '') : 'Überschrift', r }); } } }
  return words; })()`;
const res = [];
for (const w of widths.split(',').map(Number)) {
  await send('browsingContext.setViewport', { context: ctx, viewport: { width: w, height: 900 } });
  for (const p of pages) {
    await send('browsingContext.navigate', { context: ctx, url: `${base}/${p}.html`, wait: 'complete' });
    const info = await ev(`(async () => { await document.fonts.ready; const f = document.querySelector('figure.puk-vis-figure'), h = document.querySelector('.puk-longform__section-heading .puk-web-h2'), c = document.querySelector('.puk-longform__copy p');
      return JSON.stringify({ root: getComputedStyle(document.documentElement).fontSize, lang: document.documentElement.lang, fig: f && getComputedStyle(f).hyphens, h2: h && getComputedStyle(h).hyphens, body: c && getComputedStyle(c).hyphens }); })()`);
    const auto = JSON.parse(await ev(`(async () => JSON.stringify((await ${MEASURE}).map(x => x.w + ' · ' + x.el)))()`));
    // Gegenprobe ohne Silbentrennung (nur in dieser Messung, nicht in der Datei)
    const manual = JSON.parse(await ev(`(async () => { const s = document.createElement('style'); s.textContent = '*{hyphens:manual!important}'; document.head.appendChild(s); const r = (await ${MEASURE}).map(x => x.w + ' · ' + x.el); s.remove(); return JSON.stringify(r); })()`));
    const hyph = auto.filter(x => !manual.includes(x)), emergency = auto.filter(x => manual.includes(x));
    res.push({ width: w, page: p, ...JSON.parse(info), silbentrennung: hyph, notumbruch: emergency });
    console.log(`${w}px ${p}: Wurzel ${JSON.parse(info).root}, hyphens Figur ${JSON.parse(info).fig} / Überschrift ${JSON.parse(info).h2} / Fliesstext ${JSON.parse(info).body} · getrennt: ${hyph.length} ${hyph.slice(0, 6).join('; ')} · Notumbruch: ${emergency.length} ${emergency.slice(0, 3).join('; ')}`);
    if (hyph.length && shots) {
      // erstes getrenntes Wort ins Bild holen
      const first = (hyph.find(x => x.includes('Figur')) || hyph[0]).split(' · ')[0];
      await ev(`(() => { for (const el of document.querySelectorAll('figure.puk-vis-figure, .puk-longform__section-heading .puk-web-h2, .puk-vis-wide .puk-web-h3')) { const tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let t; while ((t = tw.nextNode())) if (t.data.includes(${JSON.stringify(first)}) && !t.parentElement.closest('svg,.puk-sr')) { t.parentElement.scrollIntoView({ block: 'center' }); return 1; } } return 0; })()`);
      const img = await send('browsingContext.captureScreenshot', { context: ctx, origin: 'viewport' });
      fs.writeFileSync(`${shots}/p6-firefox-${w}-${p}.png`, Buffer.from(img.data, 'base64'));
    }
  }
}
fs.writeFileSync(outJson, JSON.stringify(res, null, 1));
await send('session.end', {}); ws.close(); process.exit(0);
