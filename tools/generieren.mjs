import {readFile, writeFile, readdir, mkdir} from 'node:fs/promises';
import {join, dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {ROOT, profil} from './profil.mjs';

async function walk(dir) {
  const entries = await readdir(dir, {withFileTypes: true});
  const files = await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
  return files.flat();
}

function region(text, name, value) {
  const start = `<!-- profil:${name} -->`, end = `<!-- /profil:${name} -->`;
  const from = text.indexOf(start), to = text.indexOf(end);
  if (from < 0 || to < from || text.indexOf(start, from + 1) !== -1) throw new Error(`Generierungsmarke fehlt oder ist doppelt: ${name}`);
  return text.slice(0, from + start.length) + '\n' + value + '\n' + text.slice(to);
}

// Liefert auch im Prüfmodus sämtliche Sollinhalte, ohne Quelldateien zu verändern.
export async function sollDateien(root = ROOT) {
  const meta = await profil(root), outputs = new Map();
  const read = p => readFile(join(root, p), 'utf8');
  const src = 'quellcode/komponenten/src/components';
  const sources = (await walk(join(root, src))).filter(p => p.endsWith('.d.ts'));
  const names = JSON.parse(await read('quellcode/komponenten/names.json'));
  if (new Set(names).size !== names.length) throw new Error('Doppelte Komponentennamen');
  let index = '/* Automatisch erzeugt: npm run generieren. Quellen: quellcode/komponenten/src/components/. */\n';
  for (const name of names) {
    const matches = sources.filter(p => p.endsWith('/' + name + '.d.ts'));
    if (matches.length !== 1) throw new Error(`Genau eine Typquelle für ${name} erforderlich`);
    const content = (await readFile(matches[0], 'utf8')).trimEnd() + '\n';
    outputs.set(`components/${name}/${name}.d.ts`, '/* Automatisch erzeugt: npm run generieren. Nur die Typquelle im Quellordner bearbeiten. */\n' + content);
    index += `\n// ---- ${name} ----\n` + content;
  }
  outputs.set('components/index.d.ts', index);
  const lock = JSON.parse(await read('package-lock.json'));
  lock.version = meta.version;
  lock.packages[''].version = meta.version;
  outputs.set('package-lock.json', JSON.stringify(lock, null, 2) + '\n');
  const configPaths = ['templates/website/profile.json', ...['psychoeducation-site-starter', 'profilbeispiel', 'minimal-starter'].map(p => `templates/website/${p}/site.config.json`)];
  for (const p of configPaths) {
    const cfg = JSON.parse(await read(p));
    if (p.endsWith('/profile.json')) cfg.profileVersion = meta.version;
    else cfg.assetVersion = meta.starterBuild;
    outputs.set(p, JSON.stringify(cfg, null, 2) + '\n');
  }
  const contract = 'templates/website/psychoeducation-site-starter/tools/contract.js';
  const code = await read(contract);
  if (!/^const BUILD = '[^']+';/m.test(code)) throw new Error('Build-Konstante fehlt');
  outputs.set(contract, code.replace(/^const BUILD = '[^']+';[^\n]*$/m, `const BUILD = '${meta.starterBuild}'; // erzeugt aus package.json`));
  const qa = await read('ui_kits/website/qa.js');
  outputs.set('ui_kits/website/qa.js', qa.replace(/const BUILD='[^']+';const QA_REV='[^']+';/, `const BUILD='${meta.kitBuild}';const QA_REV='${meta.qaRevision}';`));
  outputs.set('ui_kits/website/qa.html', (await read('ui_kits/website/qa.html')).replace(/Prüfskript-Stand: <strong>qa-\d+<\/strong> · Erwarteter Quellstand: <strong>r\d+-\d+<\/strong>/, `Prüfskript-Stand: <strong>${meta.qaRevision}</strong> · Erwarteter Quellstand: <strong>${meta.kitBuild}</strong>`).replace(/contract\.js\?v=r\d+-\d+/, 'contract.js?v=' + meta.starterBuild));
  outputs.set('ui_kits/website/index.html', (await read('ui_kits/website/index.html')).replace(/(name="puk-kit-build" content=")[^"]+/, '$1' + meta.kitBuild).replace(/\?v=r\d+-\d+/g, '?v=' + meta.kitBuild));
  const docs = {
    'README.md': `**Fachstellen-Profil ${meta.version}** · Stand ${meta.datum} · offene Projektpendenzen: 0. Basis: PUK Zürich Design System 1.10.1 und PUK Website Kit 1.10.1-r4. Vier Ebenen – bei Widerspruch gilt die obere:`,
    'START-HIER.md': `**Version ${meta.version} · Stand ${meta.datum}.** Verbindlich ist dieses Repository. [Prüfbericht](PRUEFBERICHT.md) und [Abschlussentscheide](ABSCHLUSSENTSCHEIDE.md) dokumentieren den abgeschlossenen Profilstand.`,
    'CLAUDE.md': `**Profil ${meta.version} · Stand ${meta.datum}.** Version und Build-Stände ausschliesslich in \`package.json\` pflegen, danach \`npm run generieren\`.`,
    'PRUEFBERICHT.md': `**Profil ${meta.version} · Stand ${meta.datum}.** Offene Projektpendenzen: 0.`,
    'ABSCHLUSSENTSCHEIDE.md': `**Profil ${meta.version} abgeschlossen · Stand ${meta.datum}. Offene Projektpendenzen: 0.**`,
    'ui_kits/website/README.md': `Prüfskript \`${meta.qaRevision}\`, Kit-Referenz \`${meta.kitBuild}\`, Starter-Build \`${meta.starterBuild}\`. Die Kennungen werden aus \`package.json\` erzeugt.`
  };
  for (const [p, text] of Object.entries(docs)) outputs.set(p, region(await read(p), 'stand', text));
  const download = 'https://github.com/christaegger-dot/puk-website-profil/raw/refs/heads/main/';
  outputs.set('README.md', region(outputs.get('README.md'), 'paket', `- \`tools/paket.py\`: reproduzierbares Paket [${meta.paket}](${download}${meta.paket}) mit [SHA-256-Datei](${download}${meta.paket}.sha256). Archiv, Projekte unter \`websites/\` und lokale Arbeitsausgaben sind nicht enthalten.`));
  const indexTemplate = await read('quellcode/profil/index.html');
  outputs.set('index.html', '<!-- Automatisch erzeugt aus quellcode/profil/index.html; npm run generieren. -->\n' + indexTemplate.replaceAll('{{VERSION}}', meta.version));
  const patterns = JSON.parse(await read('quellcode/profil/muster.json'));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let md = '# Welches Muster passt zu meinem Inhalt?\n\nZuerst die Leserfrage klären. Eine Darstellung einsetzen, wenn sie etwas besser erklärt als Text. Die Beispiele zeigen Gestaltungsmuster und ersetzen keine fachliche Prüfung.\n\n| Was soll verständlich werden? | Passendes Muster | Beispiel |\n| --- | --- | --- |\n';
  let html = '';
  for (const p of patterns) {
    const route = p.href.split('#')[0];
    const target = join(root, route.endsWith('/') ? route + 'index.html' : route);
    const content = await readFile(target, 'utf8');
    const anchor = p.href.split('#')[1];
    if (anchor && !content.includes(`id="${anchor}"`)) throw new Error('Musterziel fehlt: ' + p.href);
    md += `| ${p.frage} | ${p.name} | [Ansehen](${p.href}) |\n`;
    html += `<li><h2 class="puk-web-h3">${esc(p.frage)}</h2><p>${esc(p.name)} · ${esc(p.hinweis)}</p><p><a class="puk-link--inline" href="${esc(p.href)}">${esc(p.name)} ansehen</a></p></li>\n`;
  }
  md += '\nTelefonnummern sind erlaubt. Krisenkontakte nur nach bewusstem Themenentscheid ergänzen.\n\nNeue Website anlegen: [Kurzanleitung](START-HIER.md). Alle Beispiele lokal ansehen: `npm run vorschau`.\n';
  outputs.set('MUSTER-WAEHLEN.md', '<!-- Automatisch erzeugt aus quellcode/profil/muster.json. -->\n' + md);
  outputs.set('musterauswahl.html', '<!-- Automatisch erzeugt aus quellcode/profil/muster.json. -->\n' + (await read('quellcode/profil/musterauswahl.html')).replaceAll('{{VERSION}}', meta.version).replace('{{MUSTER}}', html));
  return outputs;
}

export async function generieren({root = ROOT, check = false} = {}) {
  const outputs = await sollDateien(root), stale = [];
  for (const [p, wanted] of outputs) {
    const file = join(root, p);
    let actual; try {actual = await readFile(file, 'utf8');} catch (e) {if (e.code !== 'ENOENT') throw e;}
    if (actual === wanted) continue;
    stale.push(p);
    if (!check) {await mkdir(dirname(file), {recursive: true}); await writeFile(file, wanted);}
  }
  if (check && stale.length) throw new Error('Veraltete generierte Dateien:\n' + stale.join('\n') + '\nBitte npm run generieren ausführen.');
  return {files: outputs.size, changed: stale};
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    if (process.argv.slice(2).some(x => x !== '--check')) throw new Error('Aufruf: node tools/generieren.mjs [--check]');
    const r = await generieren({check: process.argv.includes('--check')});
    console.log(`${r.files} abgeleitete Dateien ${process.argv.includes('--check') ? 'aktuell' : 'geprüft; ' + r.changed.length + ' aktualisiert'}.`);
  } catch (e) {console.error(e.message); process.exitCode = 1;}
}
