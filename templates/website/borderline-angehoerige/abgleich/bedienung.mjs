// Tabstopps und Seitenhöhen der Borderline-Website im Browser. Braucht Playwright mit Chromium und einen lokalen Server.
//
//   python3 -m http.server 8765        (im Projektstamm des Projektpakets)
//   node abgleich/bedienung.mjs [basis-url]
//
// Standard-URL: http://localhost:8765/templates/website/borderline-angehoerige/
// Umgebungsvariable PW_CHROMIUM: Pfad zu einer vorhandenen Chromium-Datei (sonst die von Playwright).
//
// Tabstopps: ab Seitenanfang mit Tab vorwärts, Vertiefungen geschlossen, bis der Fokus die Fusszeile erreicht
// oder die Seite verlässt. Gezählt werden nur Stopps ausserhalb der Fusszeile.
// Seitenhöhe: document.documentElement.scrollHeight bei 360 × 800 px; dazu die Höhe jeder Figur (figure[data-visual-id]).
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { console.error('Playwright fehlt (npm i -g playwright oder NODE_PATH setzen).'); process.exit(2); }
const BASE = process.argv[2] || 'http://localhost:8765/templates/website/borderline-angehoerige/';
const PAGES = ['index', 'verstehen', 'beziehungen', 'grenzen'];

const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});
console.log('| Seite | Tabstopps ohne Fusszeile | erster Tabstopp | ohne sichtbaren Fokus | Höhe bei 360 px | höchste Figur bei 360 px |');
console.log('| --- | ---: | --- | ---: | ---: | --- |');
for (const p of PAGES) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  const pg = await ctx.newPage();
  await pg.goto(BASE + p + '.html');
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
  const sp = await small.newPage();
  await sp.goto(BASE + p + '.html');
  const h = await sp.evaluate(() => ({
    page: document.documentElement.scrollHeight,
    figs: [...document.querySelectorAll('figure[data-visual-id]')].map(f => [f.dataset.visualId, Math.round(f.getBoundingClientRect().height)]),
  }));
  await small.close();
  const top = h.figs.sort((a, b) => b[1] - a[1])[0];
  console.log(`| \`${p}\` | ${n} | «${first}» | ${noFocus} | ${h.page} px | ${top ? `${top[0]} ${top[1]} px` : '–'} |`);
}
await browser.close();
