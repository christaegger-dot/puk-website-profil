// Mutationsprobe: entfernt je einen Eintrag aus der Rücksetzregel in components/bundle.css eines Arbeitsbaums
// und führt die beiden Tests zu hellen Komponenten aus. Aufruf: node mutation.mjs <arbeitsbaum>
import fs from 'node:fs'; import {execFileSync} from 'node:child_process';
const wt = process.argv[2], f = wt + '/components/bundle.css', orig = fs.readFileSync(f, 'utf8');
const m = orig.match(/:where\(\.puk-web-band,\[data-puk-surface="night"\]\) :where\(([^{]*)\)\{/);
const list = []; let d = 0, cur = '';
for (const ch of m[1]) { if (ch === '(' ) d++; if (ch === ')') d--; if (ch === ',' && d === 0) { list.push(cur); cur = ''; } else cur += ch; } list.push(cur);
const res = [];
try {
 for (const s of list) {
  const rest = list.filter(x => x !== s).join(',');
  fs.writeFileSync(f, orig.replace(m[0], `:where(.puk-web-band,[data-puk-surface="night"]) :where(${rest}){`));
  let out = '';
  try { out = execFileSync('node', ['--test', '--test-name-pattern=(Helle Komponenten|Erklärgrafiken und Karussell)', 'tests/profilentscheid-2026-10-29.test.mjs'], {cwd: wt, encoding: 'utf8', stdio: ['ignore','pipe','pipe']}); } catch (e) { out = e.stdout + e.stderr; }
  const fails = (out.match(/^not ok \d+ - .*/mg) || []).map(x => x.replace(/^not ok \d+ - /, '').slice(0, 30));
  const msg = (out.match(/^\s+(light|kontrast) [^\n]+/m) || [''])[0].trim();
  res.push({entfernt: s, erkannt: fails.length > 0, tests: fails, erste_meldung: msg});
  console.log((fails.length ? 'ERKANNT  ' : 'UNERKANNT') + ' ' + s + (msg ? '  · ' + msg : ''));
 }
} finally { fs.writeFileSync(f, orig); }
fs.writeFileSync(process.argv[3] || 'mutation.json', JSON.stringify(res, null, 1));
