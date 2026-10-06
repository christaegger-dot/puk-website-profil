// PUK Website Kit 1.10.1-r4 · abgeleitet – Gate des Psychoedukations-Starters (Node ≥ 18, ohne Abhängigkeiten).
// Prüft die gebauten Seiten gegen site.config.json. Keine medizinische Triage, kein Ersatz für Fach- oder Bildfreigabe.
//   node tools/gate.mjs               Entwurf: Struktur blockiert, offene Freigaben sind Hinweise
//   node tools/gate.mjs --production  Produktion: offene Freigaben (Absenderin, Zuständigkeitsverweise, Platzhalter, Visualisierungen) blockieren
//   node tools/gate.mjs --selftest    prüft, dass jede bekannte Fehlerklasse erkannt wird
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const require = createRequire(import.meta.url);
const C = require('./contract.js');
const dir = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = JSON.parse(await readFile(join(dir, 'site.config.json'), 'utf8'));
const files = {};
for (const n of await readdir(dir)) if (n.endsWith('.html') && n !== 'gate.html') files[n] = await readFile(join(dir, n), 'utf8');
const exists = p => p in files || existsSync(join(dir, p));
if (process.argv.includes('--selftest')) {
  const rows = C.selftest(cfg, files, { exists }); let bad = 0;
  for (const r of rows) { if (!r.ok) bad++; console.log(`${r.ok ? 'OK  ' : 'FAIL'} ${r.name} · erwartet ${r.expected} · erkannt ${r.got}`); }
  console.log(`\nSelbsttest: ${rows.length - bad}/${rows.length} bestanden.`); process.exit(bad ? 1 : 0);
}
const mode = process.argv.includes('--production') ? 'production' : 'draft';
const r = C.gate(cfg, files, { mode, exists });
for (const f of r.findings) console.log(`${f.level.toUpperCase().padEnd(5)} ${f.page.padEnd(24)} ${f.id.padEnd(22)} ${f.msg}`);
console.log(`\n${C.VERSION} · Gate ${mode}: ${r.blocks} blockierend, ${r.warns} Hinweise.`);
process.exit(r.blocks ? 1 : 0);
