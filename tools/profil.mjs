import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';

export const ROOT = fileURLToPath(new URL('../', import.meta.url));

// package.json ist die einzige manuell gepflegte Quelle der Profil- und Build-Stände.
export async function profil(root = ROOT) {
  const pkg = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'));
  const meta = pkg.pukProfil;
  if (!/^\d{4}\.\d{2}\.\d+$/.test(pkg.version) ||
      !meta || !/^\d{4}-\d{2}-\d{2}$/.test(meta.stand) ||
      !/^r\d+-\d+$/.test(meta.starterBuild) || !/^r\d+-\d+$/.test(meta.kitBuild) ||
      !/^qa-\d+$/.test(meta.qaRevision)) throw new Error('Ungültige Profilmetadaten in package.json');
  if (new Date(meta.stand).toISOString().slice(0, 10) !== meta.stand) throw new Error('Ungültiges Profildatum');
  return {...meta, version: pkg.version, datum: meta.stand.split('-').reverse().join('.'), paket: `puk-website-profil-${pkg.version}.zip`};
}
