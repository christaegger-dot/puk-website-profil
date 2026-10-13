import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = join(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(join(project, 'site.config.json'), 'utf8'));
const pages = config.pages.filter(page => page.status === 'published');
const html = new Map();
const failures = [];

for (const page of pages) html.set(page.href, await readFile(join(project, page.href), 'utf8'));

const pass = (condition, label) => {
  console.log(`${condition ? 'PASS' : 'FAIL'} ${label}`);
  if (!condition) failures.push(label);
};
const escapeRe = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasId = (source, id) => new RegExp(`\\bid=["']${escapeRe(id)}["']`).test(source);
const scriptRe = /<script\b[^>]*src="[^"]*interaktion\.js(?:\?[^\"]*)?"[^>]*><\/script>/i;

pass(config.deepLinkFocus === true, 'deepLinkFocus ist im Seitenvertrag aktiviert');
pass(Boolean(config.interactionScript), 'Interaktionsskript ist im Seitenvertrag konfiguriert');
pass(pages.every(page => scriptRe.test(html.get(page.href))), `alle ${pages.length} veröffentlichten Seiten laden die Fokuslogik`);

const script = await readFile(resolve(project, config.interactionScript), 'utf8');
pass(/function revealHashTarget\s*\(/.test(script), 'Interaktionsskript enthält revealHashTarget');
pass(/addEventListener\(['"]hashchange['"],\s*revealHashTarget\)/.test(script), 'Hash-Wechsel lösen die Fokuslogik aus');
pass(/DOMContentLoaded[\s\S]*revealHashTarget\(\)/.test(script), 'direkt geladene Fragment-URLs lösen die Fokuslogik aus');

let internalHashLinks = 0;
let validInternalHashLinks = 0;
for (const page of pages) {
  const source = html.get(page.href);
  for (const match of source.matchAll(/<a\b[^>]*\bhref="([^"]*#[^"]+)"[^>]*>/gi)) {
    const href = match[1];
    if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//')) continue;
    internalHashLinks++;
    const targetUrl = new URL(href, `https://local.invalid/${page.href}`);
    const targetFile = targetUrl.pathname.replace(/^\//, '') || page.href;
    let targetId = '';
    try { targetId = decodeURIComponent(targetUrl.hash.slice(1)); } catch { /* wird unten als Fehler gemeldet */ }
    const targetHtml = html.get(targetFile);
    if (!targetHtml) failures.push(`${page.href}: Zielseite fehlt für ${href}`);
    else if (!targetId || !hasId(targetHtml, targetId)) failures.push(`${page.href}: Sprungziel fehlt für ${href}`);
    else if (!scriptRe.test(targetHtml)) failures.push(`${page.href}: Zielseite lädt die Fokuslogik nicht: ${href}`);
    else validInternalHashLinks++;
  }
}
pass(validInternalHashLinks === internalHashLinks, `${validInternalHashLinks}/${internalHashLinks} interne Sprunglinks haben Ziel und Fokuslogik`);

const searchHtml = html.get('suche.html') || '';
const searchItems = [...searchHtml.matchAll(/<li class="puk-site-result"[\s\S]*?<\/li>/g)].map(match => match[0]);
const searchTargets = searchItems
  .filter(item => /data-search-level="section"/.test(item))
  .map(item => (item.match(/<a\b[^>]*href="([^"]+#[^"]+)"/) || [])[1])
  .filter(Boolean);
const uniqueSearchTargets = [...new Set(searchTargets)];
let validSearchTargets = 0;
for (const href of uniqueSearchTargets) {
  const [file, encodedId] = href.split('#');
  let id = '';
  try { id = decodeURIComponent(encodedId); } catch { /* wird unten als Fehler gemeldet */ }
  const targetHtml = html.get(file);
  if (!targetHtml) failures.push(`Suche: Zielseite fehlt für ${href}`);
  else if (!id || !hasId(targetHtml, id)) failures.push(`Suche: Sprungziel fehlt für ${href}`);
  else if (!scriptRe.test(targetHtml)) failures.push(`Suche: Zielseite lädt die Fokuslogik nicht: ${href}`);
  else validSearchTargets++;
}
pass(uniqueSearchTargets.length === 160, `Suchindex enthält 160 eindeutige Abschnittsziele (${uniqueSearchTargets.length})`);
pass(validSearchTargets === uniqueSearchTargets.length, `${validSearchTargets}/${uniqueSearchTargets.length} Such-Sprungziele sind strukturell fokussierbar`);

if (failures.length) {
  console.error(`\nSprungzielprüfung: ${failures.length} Fehler`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`\nSprungzielprüfung: ${pages.length} Seiten · ${uniqueSearchTargets.length} Suchziele · ${internalHashLinks} interne Sprunglinks · 0 Fehler`);
