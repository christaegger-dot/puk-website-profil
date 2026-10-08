// PUK Website-Profil – Export des Psychoedukations-Starters als eigenständige, veröffentlichbare Website (Node ≥ 18, ohne Abhängigkeiten).
// Aufruf im Ordner psychoeducation-site-starter:  node tools/export.mjs <zielordner> [--production]
// Baut die Seiten, prüft sie mit dem Gate und schreibt nur, was veröffentlicht wird: veröffentlichte Seiten, assets/,
// eine zusammengeführte css/site.css (mit lokalen Schriften), js/interaktion.js (falls gebraucht), _headers und sitemap.xml.
// Keine Projektquellen, kein site.config.json, keine Entwürfe.
import { readFile, writeFile, mkdir, copyFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve as presolve, basename, relative } from 'node:path';
const require = createRequire(import.meta.url);
const C = require('./contract.js');
const dir = join(dirname(fileURLToPath(import.meta.url)), '..');
const target = process.argv.slice(2).find(a => !a.startsWith('--'));
if (!target) { console.error('Zielordner fehlt: node tools/export.mjs <zielordner> [--production]'); process.exit(1); }
const out = presolve(process.cwd(), target);
if (out.startsWith(dir + '/') || out === dir) { console.error('Der Zielordner darf nicht im Starter liegen.'); process.exit(1); }
const mode = process.argv.includes('--production') ? 'production' : 'draft';
const cfg = JSON.parse(await readFile(join(dir, 'site.config.json'), 'utf8'));

/* 1 · Seiten bauen und prüfen */
const files = {};
for (const p of cfg.pages) files[C.resolve('', p.href).path] = C.renderPage(cfg, p, await readFile(join(dir, 'content', p.id + '.html'), 'utf8'));
const report = existsSync(join(dir, 'PRUEFBERICHT.md')) ? await readFile(join(dir, 'PRUEFBERICHT.md'), 'utf8') : null;
const r = C.gate(cfg, files, { mode, exists: p => p in files || existsSync(join(dir, p)), report });
if (r.blocks) { for (const f of r.findings.filter(x => x.level === 'block')) console.error(`BLOCK ${f.page} ${f.id} ${f.msg}`); console.error(`Export abgebrochen: ${r.blocks} blockierende Befunde (${mode}).`); process.exit(1); }

/* 2 · CSS zusammenführen: @import auflösen, url() auf lokale Dateien umschreiben, fehlende Alternativen weglassen */
await mkdir(join(out, 'css'), { recursive: true }); await mkdir(join(out, 'fonts'), { recursive: true });
const copied = new Map();
async function inline(file, seen = new Set()) {
  if (seen.has(file)) return ''; seen.add(file);
  let css = await readFile(file, 'utf8');
  const parts = [];
  css = css.replace(/@import\s+url\(\s*["']?([^"')]+)["']?\s*\)\s*;|@import\s+["']([^"']+)["']\s*;/g, (m, a, b) => { parts.push((a || b)); return `/*@@import ${parts.length - 1}@@*/`; });
  for (let i = 0; i < parts.length; i++) {
    const f = presolve(dirname(file), parts[i].split('?')[0]);
    css = css.replace(`/*@@import ${i}@@*/`, existsSync(f) ? `/* ${relative(dir, f)} */\n` + await inline(f, seen) : `/* fehlt: ${parts[i]} */`);
  }
  /* url() in @font-face-src-Listen: fehlende Dateien samt format() entfernen */
  css = css.replace(/src:([^;}]+)/g, (m, list) => {
    const keep = list.split(/,(?=\s*url\()/).filter(entry => { const u = /url\(\s*["']?([^"')]+)["']?\s*\)/.exec(entry); return !u || /^data:|^https?:/.test(u[1]) || existsSync(presolve(dirname(file), u[1].split(/[?#]/)[0])); });
    return keep.length ? 'src:' + keep.join(',') : m;
  });
  css = css.replace(/url\(\s*["']?([^"')]+)["']?\s*\)/g, (m, u) => {
    if (/^(data:|https?:|#)/.test(u)) return m;
    const src = presolve(dirname(file), u.split(/[?#]/)[0]); if (!existsSync(src)) return m;
    const name = basename(src); copied.set(src, name); return `url("../fonts/${name}")`;
  });
  return css;
}
let site = `/* Zusammengeführt von tools/export.mjs · ${C.VERSION} · Build ${C.BUILD} */\n`;
for (const h of cfg.stylesheets || []) { const f = presolve(dir, h.split('?')[0]); if (!existsSync(f)) { console.error('Stylesheet fehlt: ' + h); process.exit(1); } site += `\n/* ===== ${h} ===== */\n` + await inline(f); }
await writeFile(join(out, 'css', 'site.css'), site);
for (const [src, name] of copied) await copyFile(src, join(out, 'fonts', name));

/* 3 · Seiten schreiben: Verweise auf css/site.css und js/interaktion.js umstellen; nur veröffentlichte Seiten */
const v = cfg.assetVersion ? '?v=' + encodeURIComponent(cfg.assetVersion) : '';
let needsJs = false; const published = cfg.pages.filter(p => p.status === 'published');
for (const p of published) {
  const path = C.resolve('', p.href).path; let html = files[path];
  const links = (cfg.stylesheets || []).map(h => `<link rel="stylesheet" href="${h}${v}">`);
  html = html.replace(links.join('\n'), `<link rel="stylesheet" href="css/site.css${v}">`);
  if (cfg.interactionScript && html.includes(cfg.interactionScript)) { needsJs = true; html = html.split(`src="${cfg.interactionScript}${v}"`).join(`src="js/interaktion.js${v}"`); }
  await mkdir(dirname(join(out, path)), { recursive: true }); await writeFile(join(out, path), html);
}
if (needsJs) { await mkdir(join(out, 'js'), { recursive: true }); await copyFile(presolve(dir, cfg.interactionScript), join(out, 'js', 'interaktion.js')); }

/* 4 · Assets, Sicherheits-Header, Sitemap */
async function copyDir(a, b) { await mkdir(b, { recursive: true }); for (const e of await readdir(a)) { const s = join(a, e), t = join(b, e); if ((await stat(s)).isDirectory()) await copyDir(s, t); else await copyFile(s, t); } }
if (existsSync(join(dir, 'assets'))) await copyDir(join(dir, 'assets'), join(out, 'assets'));
if (existsSync(join(dir, '_headers'))) await copyFile(join(dir, '_headers'), join(out, '_headers'));
if (cfg.siteUrl) { const base = cfg.siteUrl.replace(/\/$/, ''); await writeFile(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${published.map(p => `  <url><loc>${base}/${C.resolve('', p.href).path}</loc></url>`).join('\n')}\n</urlset>\n`); }

/* 5 · Kontrolle: jede lokale Referenz existiert */
let missing = 0;
for (const p of published) {
  const path = C.resolve('', p.href).path; const html = await readFile(join(out, path), 'utf8');
  for (const m of html.matchAll(/(?:src|href)="([^"#]+?)(?:\?[^"]*)?"/g)) { const u = m[1]; if (/^(https?:|mailto:|tel:|data:)/.test(u)) continue; if (!existsSync(join(out, dirname(path), u))) { console.error(`Fehlt im Export: ${u} (${path})`); missing++; } }
}
if (missing) { console.error(`Export unvollständig: ${missing} fehlende Dateien.`); process.exit(1); }
console.log(`Export nach ${out}: ${published.length} Seiten · css/site.css · ${copied.size} Schriftdateien${needsJs ? ' · js/interaktion.js' : ''} · Gate ${mode}: 0 blockierend, ${r.warns} Hinweise.`);
