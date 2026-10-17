import {cp, readFile, writeFile, mkdir, mkdtemp, rename, rm, lstat} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {join, resolve, relative, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {ROOT, profil} from './profil.mjs';

const C = createRequire(import.meta.url)('../templates/website/psychoeducation-site-starter/tools/contract.js');
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export async function neueWebsite({name, titel, ziel, root = ROOT}) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name || '')) throw new Error('Name: Kleinbuchstaben, Ziffern und einzelne Bindestriche verwenden.');
  const title = (titel || name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')).trim();
  if (!title || /[\u0000-\u001f]/.test(title)) throw new Error('Einen nicht leeren Titel ohne Steuerzeichen angeben.');
  const out = ziel ? resolve(ziel) : join(root, 'websites', name);
  try {await lstat(out); throw new Error('Zielordner existiert bereits; es wird nichts überschrieben: ' + out);} catch (e) {if (e.code !== 'ENOENT') throw e;}
  const template = join(root, 'templates/website/minimal-starter'), meta = await profil(root);
  const cfg = JSON.parse(await readFile(join(template, 'site.config.json'), 'utf8'));
  cfg.siteTitle = title;
  cfg.pages[0].title = title;
  cfg.shortDescription = `Entwurf: ${title}. Beschreibung vor einer Veröffentlichung ausarbeiten.`;
  cfg.assetVersion = meta.starterBuild;
  cfg.stylesheets = cfg.stylesheets.map(p => relative(out, resolve(template, p)).split('\\').join('/'));
  if (cfg.interactionScript) cfg.interactionScript = relative(out, resolve(template, cfg.interactionScript)).split('\\').join('/');
  await mkdir(dirname(out), {recursive: true});
  const stage = await mkdtemp(join(dirname(out), '.puk-neue-website-'));
  try {
    for (const name of ['content', 'assets', '_headers', 'PRUEFBERICHT.md']) await cp(join(template, name), join(stage, name), {recursive: true});
    const home = join(stage, 'content/index.html');
    await writeFile(home, (await readFile(home, 'utf8')).replace('Titel der neuen Website', esc(title)));
    await writeFile(join(stage, 'site.config.json'), JSON.stringify(cfg, null, 2) + '\n');
    const files = {};
    for (const p of cfg.pages) files[p.href] = C.renderPage(cfg, p, await readFile(join(stage, 'content', p.id + '.html'), 'utf8'));
    const report = await readFile(join(stage, 'PRUEFBERICHT.md'), 'utf8');
    const result = C.gate(cfg, files, {mode: 'draft', report, exists: p => p in files || existsSync(resolve(stage, p)) || existsSync(resolve(out, p))});
    if (result.blocks) throw new Error('Neue Website besteht die Strukturprüfung nicht: ' + JSON.stringify(result.findings));
    for (const [name, html] of Object.entries(files)) await writeFile(join(stage, name), html);
    const siteArg = "'" + (relative(root, out).split('\\').join('/') || '.').replaceAll("'", "'\"'\"'") + "'";
    await writeFile(join(stage, 'README.md'), `# ${title}\n\nMit Profil ${meta.version} aus dem schlanken Starter angelegter Entwurf. Inhalte in \`content/\`, Seitenvertrag in \`site.config.json\` bearbeiten. Nur die belegten Projektfreigaben im Prüfbericht eintragen.\n\nIm Profil-Stammordner:\n\n\`\`\`sh\nnpm run build:site -- --site ${siteArg}\nnpm run pruefen -- --site ${siteArg}\nnpm run export -- out-${name} --site ${siteArg}\n\`\`\`\n\nEin Entwurfsexport ist eine lokale Vorschau. Vor einer Veröffentlichung den Prüfbericht vervollständigen und mit \`--production\` prüfen und exportieren. Telefonnummern sind erlaubt; Krisenkontakte nur bewusst je Thema ergänzen. Die Vorschau ist bereits gebaut. Zentrale Werkzeuge und Regeln bleiben im Profil. Vor der Ausarbeitung die Profilregel guidelines/08-einstieg-und-seitenrahmen.md lesen: kompakte Titel, früher hilfreicher Einstieg und Kontrolle des ersten Bildschirms mit echtem Titel.\n`);
    // Ein zweites Prüfen kurz vor dem Umbenennen schützt inzwischen angelegte Ziele.
    try {await lstat(out); throw new Error('Zielordner wurde inzwischen angelegt: ' + out);} catch (e) {if (e.code !== 'ENOENT') throw e;}
    await rename(stage, out);
    return {out, pages: cfg.pages.length, warnings: result.warns};
  } finally {await rm(stage, {recursive: true, force: true});}
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.length === 1 && args[0] === '--help') {
      console.log('npm run neu -- name [--titel "Titel der Website"] [--ziel neuer-ordner]');
    } else {
      const options = {name: args.shift()};
      while (args.length) {
        const flag = args.shift();
        if (!['--titel','--ziel'].includes(flag) || !args[0] || args[0].startsWith('--')) throw new Error('Aufruf: npm run neu -- name [--titel "Titel"] [--ziel neuer-ordner]');
        options[flag.slice(2)] = args.shift();
      }
      const r = await neueWebsite(options);
      console.log(`Neue Website: ${r.out}\n${r.pages} Seiten gebaut; Entwurfsgate ohne Blocker. Inhalte und Freigaben sind noch auszufüllen.\nVorschau: npm run vorschau`);
    }
  } catch (e) {console.error(e.message); process.exitCode = 1;}
}
