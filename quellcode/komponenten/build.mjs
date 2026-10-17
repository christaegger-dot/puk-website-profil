// Baut components/bundle.js (Namespace PUKWeb) aus den React-Quellen. Aufruf: npm install && node build.mjs [ziel]
// React wird nicht mitgebündelt: Die Seite lädt React 18 lokal (window.React), src/react-shim.js reicht es weiter.
import { build } from 'esbuild';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const source = dirname(fileURLToPath(import.meta.url));
const out = resolve(process.argv[2] || join(source, '../../components/bundle.js'));
const names = JSON.parse(await readFile(join(source, 'names.json'), 'utf8'));
const r = await build({ absWorkingDir: source, entryPoints: ['src/entry.jsx'], bundle: true, minify: true, format: 'iife', charset: 'utf8', alias: { react: join(source, 'src/react-shim.js') }, write: false });
const header = '/* @ds-bundle: ' + JSON.stringify({ format: 4, namespace: 'PUKWeb', components: names.map(name => ({ name })) }) + ' */\n';
await mkdir(dirname(out), { recursive: true });
await writeFile(out, header + r.outputFiles[0].text);
console.log(`${out} geschrieben · ${names.length} Komponenten`);
