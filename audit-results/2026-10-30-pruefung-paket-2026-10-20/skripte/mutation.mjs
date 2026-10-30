// Mutationsprobe zur Rücksetzregel: jeden Selektor einzeln aus components/bundle.css eines Arbeitsbaums entfernen
// und den Test «Jeder Eintrag der Rücksetzregel …» ausführen (Kopie ohne Listenabgleich, weil dieser jede Mutation ohnehin meldet).
// Aufruf: node mutation.mjs <arbeitsbaum> <ausgabe.json>
import {readFileSync, writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
const [wt, out] = process.argv.slice(2);
const css = path.join(wt, 'components/bundle.css');
const orig = readFileSync(css, 'utf8');
const testOrig = path.join(wt, 'tests/profilentscheid-2026-10-29.test.mjs');
const kopie = path.join(wt, 'tests/zz-mutation.test.mjs');
const re = /:where\(\.puk-web-band,\[data-puk-surface="night"\]\) :where\((.+?)\)\{--text-default/;
const sel = re.exec(orig)[1].split(',');
// Kopie: nur der Test je Eintrag, ohne den Abgleich der Liste mit der Regel.
let t = readFileSync(testOrig, 'utf8');
const ohne = t.replace(/assert\.deepEqual\(m\[1\]\.split\(','\)\.filter\(Boolean\),regel\.map\(\(\[s\]\)=>s\),`\$\{file\}: Selektoren der Regel und Testliste stimmen überein`\);/, '/* Listenabgleich entfernt */');
if (ohne === t) throw new Error('Listenabgleich nicht gefunden');
writeFileSync(kopie, ohne);
const lauf = () => { try { execFileSync('node', ['--test', '--test-name-pattern=Jeder Eintrag der Rücksetzregel', kopie], {cwd: wt, stdio: 'pipe', env: process.env}); return {ok: true}; } catch (e) { const s = String(e.stdout); const m = s.match(/(standard|light|kontrast) [bn] [^\n']+/); return {ok: false, meldung: m ? m[0].slice(0, 120) : s.slice(-300)}; } };
const ergebnis = {selektoren: sel.length, ohneMutation: lauf(), mutationen: []};
for (const s of sel) {
 const rest = sel.filter(x => x !== s).join(',');
 writeFileSync(css, orig.replace(re, m => m.replace(sel.join(','), rest)));
 const r = lauf();
 ergebnis.mutationen.push({entfernt: s, erkannt: !r.ok, meldung: r.meldung});
 console.log((r.ok ? 'NICHT erkannt ' : 'erkannt       ') + s + (r.meldung ? '  · ' + r.meldung : ''));
}
writeFileSync(css, orig);
ergebnis.erkannt = ergebnis.mutationen.filter(m => m.erkannt).length;
// Gegenprobe: unveränderter Originaltest (mit Listenabgleich) besteht auf dem Original.
try { execFileSync('node', ['--test', '--test-name-pattern=Jeder Eintrag der Rücksetzregel', testOrig], {cwd: wt, stdio: 'pipe'}); ergebnis.originalBesteht = true; } catch { ergebnis.originalBesteht = false; }
execFileSync('rm', [kopie]);
writeFileSync(out, JSON.stringify(ergebnis, null, 1));
console.log(`ohne Mutation besteht: ${ergebnis.ohneMutation.ok}; erkannt ${ergebnis.erkannt} von ${sel.length}; Original besteht: ${ergebnis.originalBesteht}`);
