// PUK Website Kit 1.10.1-r4 · abgeleitet – Build des Psychoedukations-Starters (Node ≥ 18, ohne Abhängigkeiten).
// Erzeugt jede Seite aus site.config.json + content/<id>.html. Navigation, lang, title, Meta, Favicon, Skip-Link,
// Absenderin und Zuständigkeitsverweis entstehen nur aus dem Vertrag. Danach läuft das Gate; blockierende Befunde → Exit 1.
// Aufruf im Ordner psychoeducation-site-starter:  node tools/build.mjs [--production]
import { readFile, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { injectSearchIndex } from './search-index.mjs';
const require = createRequire(import.meta.url);
const C = require('./contract.js');
const dir = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(await readFile(join(dir, 'site.config.json'), 'utf8'));
const files = {};
let missing = 0;
const fragments = {};
for (const p of cfg.pages) {
  const src = join(dir, 'content', p.id + '.html');
  if (existsSync(src)) fragments[p.id] = await readFile(src, 'utf8');
}
injectSearchIndex(cfg, fragments);
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
