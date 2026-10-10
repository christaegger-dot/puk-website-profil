// Tabstopps, Seitenhöhen und Pfeile der Bedeutungsschleife im Browser. Braucht Playwright mit Chromium und einen lokalen Server.
//
//   python3 -m http.server 8765        (im Projektstamm des Projektpakets)
//   node abgleich/bedienung.mjs [basis-url]
//
// Standard-URL: http://localhost:8765/templates/website/borderline-angehoerige/
// Umgebungsvariable PW_CHROMIUM: Pfad zu einer vorhandenen Chromium-Datei (sonst die von Playwright).
// Gemessen wird erst nach dem Laden der Seite und der Webschriften (load, document.fonts.ready);
// ohne Schriften sind Kästen und Seiten niedriger.
//
// Tabstopps: ab Seitenanfang mit Tab vorwärts, Vertiefungen geschlossen, bis der Fokus die Fusszeile erreicht
// oder die Seite verlässt. Gezählt werden nur Stopps ausserhalb der Fusszeile.
// Seitenhöhe: document.documentElement.scrollHeight bei 360 × 800 px; dazu die Höhe jeder Figur (figure[data-visual-id]).
// Pfeile (beziehungen, Abbildung 1, breite Kreisanordnung): Abstand der Pfeilspitze zum Rand des Zielkastens in CSS-Pixeln,
// bei 1440, 1280, 768 und 720 px Fensterbreite. Pfeilspitze = Ende des Pfads plus Überstand der Markerspitze
// ((Breite der Marker-viewBox − refX) / Breite der Marker-viewBox × markerWidth × Strichstärke, in Einheiten der Zeichnung).
// Positiv: Spitze vor dem Kasten; negativ: Spitze im Kasten. Ausserdem der Abstand des Pfadanfangs zum Ausgangskasten.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { console.error('Playwright fehlt (npm i -g playwright oder NODE_PATH setzen).'); process.exit(2); }
const BASE = process.argv[2] || 'http://localhost:8765/templates/website/borderline-angehoerige/';
const PAGES = ['index', 'verstehen', 'beziehungen', 'grenzen', 'rolle', 'selbstfuersorge'];
const open = async (ctx, url) => { const pg = await ctx.newPage(); await pg.goto(url, { waitUntil: 'load' }); await pg.evaluate(() => document.fonts.ready); return pg; };

const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
console.log('| Seite | Tabstopps ohne Fusszeile | erster Tabstopp | ohne sichtbaren Fokus | Höhe bei 360 px | höchste Figur bei 360 px |');
console.log('| --- | ---: | --- | ---: | ---: | --- |');
for (const p of PAGES) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const pg = await open(ctx, BASE + p + '.html');
  let n = 0, first = '', noFocus = 0;
  for (let i = 0; i < 200; i++) {
    await pg.keyboard.press('Tab');
    const info = await pg.evaluate(() => {
      const e = document.activeElement;
      if (!e || e === document.body) return null;
      const cs = getComputedStyle(e);
      const vis = (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) > 0) || (cs.boxShadow && cs.boxShadow !== 'none');
      return { txt: (e.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40), vis, footer: !!e.closest('footer') };
    });
    if (!info || info.footer) break;
    if (!n) first = info.txt;
    n++; if (!info.vis) noFocus++;
  }
  await ctx.close();
  const small = await browser.newContext({ viewport: { width: 360, height: 800 } });
  const sp = await open(small, BASE + p + '.html');
  const h = await sp.evaluate(() => ({
    page: document.documentElement.scrollHeight,
    figs: [...document.querySelectorAll('figure[data-visual-id]')].map(f => [f.dataset.visualId, Math.round(f.getBoundingClientRect().height)]),
  }));
  await small.close();
  const top = h.figs.sort((a, b) => b[1] - a[1])[0];
  console.log(`| \`${p}\` | ${n} | «${first}» | ${noFocus} | ${h.page} px | ${top ? `${top[0]} ${top[1]} px` : '–'} |`);
}

console.log('\nPfeile der Bedeutungsschleife (beziehungen, Abbildung 1): Spitze bis Zielkasten / Anfang ab Ausgangskasten, in CSS-Pixeln');
console.log('| Breite | 1 → 2 | 2 → 3 | 3 → 4 | 4 → 5 | 5 → 1 |');
console.log('| ---: | --- | --- | --- | --- | --- |');
for (const w of [1440, 1280, 768, 720]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const pg = await open(ctx, BASE + 'beziehungen.html');
  const r = await pg.evaluate(() => {
    const cyc = document.querySelector('.bl-cycle--5'); const svg = cyc && cyc.querySelector('svg');
    if (!svg || getComputedStyle(svg).display === 'none') return null;
    const sr = svg.getBoundingClientRect(); const px = sr.width / svg.viewBox.baseVal.width;
    const boxes = [...cyc.querySelectorAll('ol > li')].map(li => { const b = li.getBoundingClientRect(); return { l: (b.left - sr.left) / px, t: (b.top - sr.top) / px, r: (b.right - sr.left) / px, b: (b.bottom - sr.top) / px }; });
    // Abstand eines Punkts zum Kasten in Richtung d (Einheitsvektor); positiv = ausserhalb, vor dem Rand
    const gap = (pt, d, box, toward) => {
      const ax = Math.abs(d[0]) > Math.abs(d[1]);
      if (toward) return ax ? (d[0] > 0 ? box.l - pt[0] : pt[0] - box.r) : (d[1] > 0 ? box.t - pt[1] : pt[1] - box.b);
      return ax ? (d[0] > 0 ? pt[0] - box.r : box.l - pt[0]) : (d[1] > 0 ? pt[1] - box.b : box.t - pt[1]);
    };
    return [...svg.querySelectorAll('path.puk-vis-arc')].map((p, i) => {
      const L = p.getTotalLength(); const e = p.getPointAtLength(L), e0 = p.getPointAtLength(L - 0.5), s = p.getPointAtLength(0), s1 = p.getPointAtLength(0.5);
      const unit = (a, b) => { const dx = b.x - a.x, dy = b.y - a.y, n = Math.hypot(dx, dy); return [dx / n, dy / n]; };
      const de = unit(e0, e), ds = unit(s, s1);
      const m = svg.querySelector((p.getAttribute('marker-end') || '').replace(/^url\((.*)\)$/, '$1'));
      const vb = m.viewBox.baseVal; const tip = m.markerUnits.baseVal === 2 ? parseFloat(getComputedStyle(p).strokeWidth) : 1;
      const over = (vb.width - m.refX.baseVal.value) / vb.width * m.markerWidth.baseVal.value * tip;
      const point = [e.x + de[0] * over, e.y + de[1] * over];
      const to = boxes[(i + 1) % boxes.length], from = boxes[i];
      return { tip: gap(point, de, to, true) * px, start: gap([s.x, s.y], ds, from, false) * px };
    });
  });
  await ctx.close();
  const f = x => (x >= 0 ? '' : '−') + Math.abs(x).toFixed(1).replace('.', ',');
  console.log(`| ${w} px | ${r ? r.map(a => `${f(a.tip)} / ${f(a.start)}`).join(' | ') : 'schmale Liste, keine Pfeile im Bild | | | |'} |`);
}
await browser.close();
