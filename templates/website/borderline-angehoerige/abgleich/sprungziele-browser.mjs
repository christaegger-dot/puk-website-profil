// Browser-Gegenprobe für direkte Abschnittslinks. Braucht Playwright mit Chromium
// und einen lokalen Server im Projektstamm.
//
//   python3 -m http.server 8765
//   PW_CHROMIUM=/usr/bin/chromium node abgleich/sprungziele-browser.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { console.error('Playwright fehlt (npm i -g playwright oder NODE_PATH setzen).'); process.exit(2); }

const BASE = (process.argv[2] || 'http://localhost:8765/templates/website/borderline-angehoerige/').replace(/\/?$/, '/');
const formerlyStatic = new Set(['index.html', 'kurz.html', 'unterstuetzung.html', 'ueber.html', 'impressum-datenschutz.html']);
const browser = await chromium.launch(process.env.PW_CHROMIUM ? { executablePath: process.env.PW_CHROMIUM } : {});

const discover = await browser.newPage();
await discover.goto(BASE + 'suche.html', { waitUntil: 'load' });
const targets = await discover.locator('[data-search-level="section"] a[href*="#"]').evaluateAll(links => [...new Set(links.map(link => link.getAttribute('href')))]);
await discover.close();

async function run(width, selected, label) {
  const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const runtime = [];
  page.on('pageerror', error => runtime.push(`pageerror: ${error.message}`));
  page.on('console', message => { if (message.type() === 'error') runtime.push(`console: ${message.text()}`); });
  const failures = [];
  let openedDetails = 0;
  for (const href of selected) {
    const url = new URL(href, BASE);
    let id;
    try { id = decodeURIComponent(url.hash.slice(1)); } catch { failures.push(`${href}: Hash nicht dekodierbar`); continue; }
    const response = await page.goto(url.href, { waitUntil: 'load' });
    /* Bei einer reinen Hash-Navigation innerhalb desselben Dokuments liefert
       Playwright absichtlich keine Response. Das ist kein Netzwerkfehler. */
    if (response && !response.ok()) { failures.push(`${href}: HTTP ${response.status()}`); continue; }
    try {
      await page.waitForFunction(targetId => {
        const target = document.getElementById(targetId);
        if (!target) return false;
        const details = target.closest('details');
        const expected = target.matches('summary, a, button, input, select, textarea, [tabindex]') ? target : (details ? details.querySelector('summary') : target);
        return document.activeElement === expected;
      }, id, { timeout: 2000 });
    } catch { failures.push(`${href}: Fokus erreicht das Sprungziel nicht`); continue; }
    const state = await page.evaluate(targetId => {
      const target = document.getElementById(targetId);
      const details = target && target.closest('details');
      const rect = target && target.getBoundingClientRect();
      return {
        exists: Boolean(target),
        visible: Boolean(rect && rect.bottom > 0 && rect.top < innerHeight),
        detailsOpen: !details || details.open,
        inDetails: Boolean(details),
        focusVisible: (() => {
          const active = document.activeElement;
          if (!active) return false;
          const style = getComputedStyle(active);
          return (style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) > 0) || (style.boxShadow && style.boxShadow !== 'none');
        })()
      };
    }, id);
    if (!state.exists) failures.push(`${href}: Ziel fehlt`);
    if (!state.visible) failures.push(`${href}: Ziel liegt nach dem Sprung ausserhalb des Ansichtsfensters`);
    if (!state.detailsOpen) failures.push(`${href}: umgebende Vertiefung bleibt geschlossen`);
    if (!state.focusVisible) failures.push(`${href}: fokussiertes Sprungziel hat keinen sichtbaren Fokus`);
    if (state.inDetails) openedDetails++;
  }
  if (runtime.length) failures.push(...runtime);
  console.log(`${failures.length ? 'FAIL' : 'PASS'} ${label}: ${selected.length} Ziele, ${openedDetails} geöffnete Vertiefungen, ${runtime.length} Laufzeitfehler`);
  for (const failure of failures) console.error(`- ${failure}`);
  await context.close();
  return failures.length;
}

const mobileTargets = targets.filter(href => formerlyStatic.has(href.split('#')[0]));
let failures = 0;
failures += await run(1280, targets, 'vollständiger Suchindex bei 1280 CSS-Pixeln');
failures += await run(360, mobileTargets, 'früher nicht fokussierbare Ziele bei 360 CSS-Pixeln');
await browser.close();

console.log(`\nBrowser-Sprungzielprüfung: ${targets.length} vollständige Ziele · ${mobileTargets.length} mobile Gegenproben · ${failures} Fehler`);
if (targets.length !== 160 || mobileTargets.length !== 19 || failures) process.exit(1);
