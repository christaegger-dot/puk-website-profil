import {readFile, readdir, stat} from 'node:fs/promises';
import {dirname, join, relative, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {ROOT} from './profil.mjs';

// Aktuelle Arbeitsanleitungen. Archiv, neue Website-Projekte und Laufdaten sind
// eigene Bestände; Codebeispiele und externe Adressen werden nicht aufgelöst.
const dokumente = ['README.md', 'START-HIER.md', 'MUSTER-WAEHLEN.md', 'AGENTS.md', 'CLAUDE.md', 'ABSCHLUSSENTSCHEIDE.md', 'ENTSCHEIDE-PROFIL-2026-10-8.md', 'ENTSCHEIDE-PROFIL-2026-10-9.md', 'ENTSCHEIDE-PROFIL-2026-10-10.md', 'ENTSCHEIDE-PROFIL-2026-10-11.md', 'PRUEFBERICHT.md'];
const ordner = ['guidelines', 'ui_kits', 'components', 'templates', 'quellcode', 'tools', 'platform', 'licenses', 'assets'];

async function markdownDateien(dir) {
  let entries;
  try { entries = await readdir(dir, {withFileTypes: true}); }
  catch (e) { if (e.code === 'ENOENT') return []; throw e; }
  const files = [];
  for (const entry of entries) {
    if (['node_modules', '.git', '__pycache__'].includes(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await markdownDateien(path));
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path);
  }
  return files;
}

export async function pruefeDokumentation(root = ROOT) {
  const files = dokumente.map(p => join(root, p));
  for (const dir of ordner) files.push(...await markdownDateien(join(root, dir)));
  const fehler = [];
  let links = 0;
  for (const file of files) {
    let text;
    try { text = await readFile(file, 'utf8'); }
    catch (e) { if (e.code === 'ENOENT') continue; throw e; }
    let fence;
    for (const [index, line] of text.split('\n').entries()) {
      const mark = line.match(/^\s{0,3}(`{3,}|~{3,})/);
      if (mark) {
        if (!fence) fence = mark[1];
        else if (mark[1][0] === fence[0] && mark[1].length >= fence.length) fence = undefined;
        continue;
      }
      if (fence || /^ {4}|^\t/.test(line)) continue;
      const prose = line.replace(/(`+)[\s\S]*?\1/g, '');
      for (const match of prose.matchAll(/!?\[[^\]\n]*\]\((<[^>]+>|[^\s)]+)(?:\s+[^)]*)?\)/g)) {
        const href = match[1].replace(/^<|>$/g, '');
        if (/^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(href)) continue;
        const path = decodeURIComponent(href.split(/[?#]/, 1)[0]);
        if (!path) continue;
        links++;
        try { await stat(resolve(dirname(file), path)); }
        catch (e) {
          if (e.code !== 'ENOENT' && e.code !== 'ENOTDIR') throw e;
          fehler.push({datei: relative(root, file), zeile: index + 1, ziel: href});
        }
      }
    }
  }
  return {links, fehler};
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await pruefeDokumentation();
  for (const f of result.fehler) console.error(`${f.datei}:${f.zeile}: Dateiziel fehlt: ${f.ziel}`);
  console.log(`${result.links} lokale Dokumentationslinks geprüft; ${result.fehler.length} fehlende Ziele.`);
  process.exitCode = result.fehler.length ? 1 : 0;
}
