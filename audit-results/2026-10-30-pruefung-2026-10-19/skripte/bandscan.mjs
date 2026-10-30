// Alle aktiven Vorschauseiten: Textelemente in blauen Bändern und auf Nachtblau mit Kontrast unter 4,5:1 (1280 px, beide Themes).
// Aufruf: node bandscan.mjs <stamm> <ausgabe.json>
import {createRequire} from 'node:module'; import fs from 'node:fs'; import path from 'node:path';
const [,, root, out] = process.argv;
const require = createRequire(root + '/package.json'); const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');
const dirs = ['templates/website/longform','templates/website/applications','templates/website/interaktion','templates/website/psychoeducation-site-starter','templates/website/minimal-starter','templates/website/profilbeispiel','ui_kits/website'];
const urls = ['index.html','musterauswahl.html',...dirs.flatMap(d => fs.readdirSync(path.join(root,d)).filter(x => x.endsWith('.html')).map(x => d + '/' + x)), 'templates/website/Website.dc.html'];
const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const res = []; let baender = 0, texte = 0;
for (const u of urls) for (const theme of ['light','kontrast']) {
 const page = await browser.newPage({viewport:{width:1280,height:900}});
 await page.goto(srv.url + u, {waitUntil:'load'}); await page.waitForTimeout(300);
 const r = await page.evaluate(theme => {
  if (theme === 'kontrast') document.documentElement.setAttribute('data-theme','kontrast');
  const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); const v = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number); return {r:v[0],g:v[1],b:v[2],a:v.length>3?v[3]:1}; };
  const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126*f(c.r)+0.7152*f(c.g)+0.0722*f(c.b); };
  const bands = [...document.querySelectorAll('.puk-web-band,[data-puk-surface="night"]')]; const low = []; let n = 0;
  for (const band of bands) for (const e of band.querySelectorAll('*')) {
   if (![...e.childNodes].some(x => x.nodeType === 3 && x.nodeValue.trim())) continue; const s = getComputedStyle(e);
   if (s.display === 'none' || s.visibility === 'hidden' || e.closest('[aria-hidden="true"],[hidden]') || s.clip === 'rect(0px, 0px, 0px, 0px)' || e.offsetWidth < 2) continue;
   n++; let x = e, bg = null; while (x) { const c = parse(getComputedStyle(x).backgroundColor); if (c.a > 0.5) { bg = c; break; } x = x.parentElement; }
   const fg = parse(s.color); const k = (Math.max(lum(fg),lum(bg))+0.05)/(Math.min(lum(fg),lum(bg))+0.05);
   if (k < 4.5) low.push({cls:e.className, text:e.textContent.trim().slice(0,40), kontrast:Math.round(k*100)/100, color:s.color, bg:`rgb(${bg.r}, ${bg.g}, ${bg.b})`});
  }
  return {bands:bands.length, texte:n, low};
 }, theme);
 baender += r.bands; texte += r.texte; if (r.low.length) res.push({url:u, theme, ...r});
 await page.close();
}
await browser.close(); await srv.close();
fs.writeFileSync(out, JSON.stringify({seiten:urls.length, baender, texte, unter45:res}, null, 1));
console.log(`${urls.length} Seiten, ${baender} Bänder (beide Themes), ${texte} Textelemente darin; Seiten mit Kontrast unter 4,5:1: ${res.length}`);
for (const x of res) for (const l of x.low.slice(0,5)) console.log(x.url, x.theme, JSON.stringify(l));
