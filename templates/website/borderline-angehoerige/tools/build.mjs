// PUK Website Kit 1.10.1-r4 · abgeleitet – Build des Psychoedukations-Starters (Node ≥ 18, ohne Abhängigkeiten).
// Erzeugt jede Seite aus site.config.json + content/<id>.html. Navigation, lang, title, Meta, Favicon, Skip-Link,
// Absenderin und Zuständigkeitsverweis entstehen nur aus dem Vertrag. Danach läuft das Gate; blockierende Befunde → Exit 1.
// Aufruf im Ordner psychoeducation-site-starter:  node tools/build.mjs [--production]
import { readFile, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const require = createRequire(import.meta.url);
const C = require('./contract.js');
const dir = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(await readFile(join(dir, 'site.config.json'), 'utf8'));
const esc = value => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const text = html => String(html || '')
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/\s+/g, ' ')
  .trim();
function searchIndex(fragments) {
  const items = [];
  for (const page of cfg.pages.filter(p => p.status === 'published' && !['404', 'suche'].includes(p.id))) {
    const html = fragments[page.id] || '';
    const basePageTerms = [page.title, page.primaryTask, page.description].join(' ');
    const pageTerms = [basePageTerms, ...(page.searchAliases || [])].join(' ');
    items.push({ title: page.title, page: page.title, href: page.href, excerpt: page.description, terms: pageTerms, keywords: (page.searchAliases || []).join(' '), level: 'page' });
    const headings = [...html.matchAll(/<h([2-4])\b([^>]*)>([\s\S]*?)<\/h\1>/gi)].map(m => ({
      level: Number(m[1]),
      attrs: m[2],
      title: text(m[3]),
      start: m.index,
      end: m.index + m[0].length,
      id: (m[2].match(/\bid="([^"]+)"/i) || [])[1] || ''
    })).filter(h => h.id && h.title && !/^Quellen zu dieser Seite$/i.test(h.title));
    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      let end = html.length;
      for (let j = i + 1; j < headings.length; j++) {
        if (headings[j].level <= heading.level) { end = headings[j].start; break; }
      }
      const body = text(html.slice(heading.end, end));
      const excerpt = body.length > 220 ? body.slice(0, 217).replace(/\s+\S*$/, '') + '…' : body;
      const aliases = (page.sectionSearchAliases || {})[heading.id] || [];
      items.push({
        title: heading.title,
        page: page.title,
        href: `${page.href}#${heading.id}`,
        excerpt,
        terms: [heading.title, basePageTerms, body, ...aliases].join(' '),
        keywords: aliases.join(' '),
        level: 'section'
      });
    }
    for (const match of html.matchAll(/<summary\b([^>]*)>([\s\S]*?)<\/summary>/gi)) {
      const id = (match[1].match(/\bid="([^"]+)"/i) || [])[1] || '';
      const title = text(match[2]);
      if (!id || !title) continue;
      const closing = html.indexOf('</details>', match.index + match[0].length);
      const body = text(html.slice(match.index + match[0].length, closing === -1 ? html.length : closing));
      const excerpt = body.length > 220 ? body.slice(0, 217).replace(/\s+\S*$/, '') + '…' : body;
      const aliases = (page.sectionSearchAliases || {})[id] || [];
      items.push({ title, page: page.title, href: `${page.href}#${id}`, excerpt, terms: [title, basePageTerms, body, ...aliases].join(' '), keywords: aliases.join(' '), level: 'section' });
    }
  }
  return items.map((item, index) => `<li class="puk-site-result" data-search-item data-search-order="${index}" data-search-level="${item.level}" data-search-title="${esc(item.title)}" data-search-keywords="${esc(item.keywords || '')}" data-search-text="${esc(item.terms)}" hidden><h2 class="puk-web-h3"><a href="${esc(item.href)}" aria-label="${esc(`${item.title}: Fundstelle auf der Seite ${item.page} öffnen`)}">${esc(item.title)}</a></h2>${item.level === 'section' ? `<p class="puk-site-result__context">Auf der Seite «${esc(item.page)}»</p>` : ''}<p>${esc(item.excerpt)}</p></li>`).join('\n');
}
const files = {};
let missing = 0;
const fragments = {};
for (const p of cfg.pages) {
  const src = join(dir, 'content', p.id + '.html');
  if (existsSync(src)) fragments[p.id] = await readFile(src, 'utf8');
}
if (fragments.suche) fragments.suche = fragments.suche.replace('<!-- GENERATED_SEARCH_INDEX -->', searchIndex(fragments));
for (const p of cfg.pages) {
  const src = join(dir, 'content', p.id + '.html');
  if (!existsSync(src)) { console.error(`BLOCK ${p.id}: Inhaltsfragment fehlt: content/${p.id}.html`); missing++; continue; }
  const html = C.renderPage(cfg, p, fragments[p.id]);
  files[C.resolve('', p.href).path] = html;
}
if (missing) { console.error('Build abgebrochen: Seitenvertrag verweist auf fehlende Inhalte.'); process.exit(1); }
const mode = process.argv.includes('--production') ? 'production' : 'draft';
const report = existsSync(join(dir, 'PRUEFBERICHT.md')) ? await readFile(join(dir, 'PRUEFBERICHT.md'), 'utf8') : null;
const r = C.gate(cfg, files, { mode, exists: p => p in files || existsSync(join(dir, p)), report });
for (const f of r.findings) console.log(`${f.level.toUpperCase().padEnd(5)} ${f.page.padEnd(24)} ${f.id.padEnd(22)} ${f.msg}`);
if (r.blocks) { console.error(`\nBuild nicht geschrieben: ${r.blocks} blockierende Befunde (${mode}).`); process.exit(1); }
for (const [path, html] of Object.entries(files)) await writeFile(join(dir, path), html);
if (cfg.siteUrl && !/\bnoindex\b/i.test(cfg.robots || '')) {
  const base = cfg.siteUrl.replace(/\/$/, '');
  const urls = cfg.pages.filter(p => p.status === 'published' && p.href && p.role !== 'not-found').map(p => `  <url><loc>${base}/${C.resolve('', p.href).path}</loc></url>`);
  await writeFile(join(dir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
} else await rm(join(dir, 'sitemap.xml'), { force: true });
console.log(`\n${Object.keys(files).length} Seiten geschrieben · ${C.VERSION} · Build ${C.BUILD} · Gate ${mode}: 0 blockierend, ${r.warns} Hinweise.`);
