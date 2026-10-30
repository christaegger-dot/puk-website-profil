// Ganzseitenfotos aller aktiven Vorschauseiten (Liste wie in tests/browser.test.mjs) aus zwei Ständen vergleichen.
// Versions-, Stand- und Build-Kennungen im Text werden vor dem Foto gleichgesetzt.
// Aufruf: node pixel.mjs <neu-stamm> <neu-url> <alt-stamm> <alt-url> <ausgabe.json> <fotoordner>
import {chromium} from 'playwright';
import fs from 'node:fs'; import path from 'node:path';
const [neuRoot, neuUrl, altRoot, altUrl, out, fotos] = process.argv.slice(2);
const liste = root => {
 const dirs = ['templates/website/longform', 'templates/website/applications', 'templates/website/interaktion', 'templates/website/psychoeducation-site-starter', 'templates/website/minimal-starter', 'templates/website/profilbeispiel', 'ui_kits/website'];
 return ['index.html', 'musterauswahl.html', 'templates/website/Website.dc.html', ...dirs.flatMap(d => fs.readdirSync(path.join(root, d)).filter(x => x.endsWith('.html')).sort().map(x => d + '/' + x))];
};
const urls = liste(neuRoot); const urlsAlt = liste(altRoot);
const gleichsetzen = () => {
 const re = [[/\b2026\.10\.\d+\b/g, '2026.10.X'], [/\br4-\d+\b/g, 'r4-X'], [/\bqa-\d+\b/g, 'qa-X'], [/\b(Stand|Version|Profil) \d{1,2}\.10\.2026/g, '$1 XX.10.2026']];
 const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
 for (let n; (n = w.nextNode());) { let t = n.nodeValue; for (const [a, b] of re) t = t.replace(a, b); if (t !== n.nodeValue) n.nodeValue = t; }
};
const browser = await chromium.launch({executablePath: process.env.CHROMIUM_EXECUTABLE_PATH || undefined});
const erg = {listeGleich: JSON.stringify(urls) === JSON.stringify(urlsAlt), seiten: urls.length, vergleiche: []};
fs.mkdirSync(fotos, {recursive: true});
for (const theme of ['standard', 'kontrast']) for (const width of [375, 1280]) {
 const ctx = await browser.newContext({viewport: {width, height: 900}, reducedMotion: 'reduce'});
 const page = await ctx.newPage();
 const foto = async (base, url) => {
  await page.goto(base + url, {waitUntil: 'networkidle'});
  await page.evaluate(t => { if (t === 'kontrast') document.documentElement.setAttribute('data-theme', 'kontrast'); }, theme);
  await page.evaluate(gleichsetzen); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(150);
  return page.screenshot({fullPage: true, animations: 'disabled'});
 };
 for (const url of urls) {
  const a = await foto(neuUrl, url), b = await foto(altUrl, url);
  const gleich = a.equals(b);
  const name = `${url.replace(/[\/.]/g, '_')}-${theme}-${width}`;
  if (!gleich) { fs.writeFileSync(path.join(fotos, name + '-neu.png'), a); fs.writeFileSync(path.join(fotos, name + '-alt.png'), b); }
  erg.vergleiche.push({url, theme, width, gleich});
 }
 await ctx.close();
}
await browser.close();
erg.gleich = erg.vergleiche.filter(v => v.gleich).length;
fs.writeFileSync(out, JSON.stringify(erg, null, 1));
console.log(`Seiten ${urls.length} (Liste gleich: ${erg.listeGleich}); ${erg.gleich} von ${erg.vergleiche.length} bytegleich`);
for (const v of erg.vergleiche.filter(v => !v.gleich)) console.log('ABWEICHUNG', v.url, v.theme, v.width);
