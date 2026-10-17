import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Gemeinsame Befehlszeile; dieselben Werkzeuge können auch das eigene Profilbeispiel bauen.
export function options({ target = false, selftest = false } = {}) {
  let dir = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  let output;
  let production = false;
  let runSelftest = false;
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--site') {
      if (!args[i + 1] || args[i + 1].startsWith('--')) throw new Error('--site benötigt einen Ordner');
      dir = resolve(args[++i]);
    } else if (arg === '--production') production = true;
    else if (arg === '--selftest' && selftest) runSelftest = true;
    else if (target && !arg.startsWith('--') && !output) output = resolve(arg);
    else throw new Error('Unbekanntes Argument: ' + arg);
  }
  if (target && !output) throw new Error('Zielordner fehlt');
  return { dir, output, mode: production ? 'production' : 'draft', selftest: runSelftest };
}
