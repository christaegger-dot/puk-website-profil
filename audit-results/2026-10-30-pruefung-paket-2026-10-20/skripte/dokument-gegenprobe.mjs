// Gegenproben zum Dokumenttest «Leitlinie 02 nennt …»: je eine Textstelle im Arbeitsbaum ändern, Test ausführen, zurücksetzen.
// Aufruf: node dokument-gegenprobe.mjs <arbeitsbaum> <ausgabe.json>
import {readFileSync, writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
const [wt, out] = process.argv.slice(2);
const G = 'guidelines/02-farben-und-kontrast.md', R = 'README.md', K = 'components/GrundlageFarbeBlau/README.md';
const proben = [
 ['Nachtblau-Punkt umformuliert', G, '**Helle Komponenten:** Auch auf Nachtblau stehen keine Karten', '**Helle Komponenten:** Auf Nachtblau stehen keine Karten'],
 ['README-Kernsatz geändert', R, 'In Bändern, blau oder nachtblau, stehen keine hellen Komponenten', 'In Bändern stehen keine hellen Komponenten'],
 ['Kartenanker #puk-blau entfernt', K, '(../../guidelines/02-farben-und-kontrast.md#puk-blau)', '(../../guidelines/02-farben-und-kontrast.md)'],
 ['Grenze offene Erklärgrafik (Leitlinie) entfernt', G, 'Erklärgrafiken gehören deshalb nie in ein Band', 'Erklärgrafiken stehen selten in einem Band'],
 ['README ohne offene Erklärgrafik', R, 'Menüknöpfe, offene Erklärgrafik)', 'Menüknöpfe)'],
 ['Karte ohne offene Erklärgrafik', K, 'Menüknöpfe und die offene Erklärgrafik', 'Menüknöpfe'],
 ['Leitlinie ohne `.puk-app-card`', G, '(`.puk-app-card`, ', '('],
 // Stellen, die der Test nicht verlangt (Reichweite des Tests):
 ['Leitlinie ohne `.puk-vis-btn`', G, '`.puk-vis-layers`, `.puk-vis-btn`', '`.puk-vis-layers`'],
 ['Leitlinie ohne Platzhalter und Sicherheitsleiste', G, 'Platzhalter und Sicherheitsleiste des Starters sowie Schichtenbild', 'Schichtenbild'],
 ['README ohne Satz zu 2026.10.20', R, ', seit 2026.10.20 Anwendungsmuster, Platzhalter und Sicherheitsleiste des Starters sowie Schichtenbild und Knöpfe der Erklärmuster', ''],
 ['Karte ohne «erweitert bis 2026.10.20»', K, '2026.10.17, erweitert bis 2026.10.20)', '2026.10.17)'],
 ['Nachtblau-Abschnitt ohne «technische Absicherung»', G, 'Regel, Begründung und technische Absicherung wie beim blauen Band oben', 'Regel und Begründung wie beim blauen Band oben'],
];
const testDatei = path.join(wt, 'tests/profilentscheid-2026-10-29.test.mjs');
const lauf = () => { try { execFileSync('node', ['--test', '--test-name-pattern=Leitlinie 02 nennt', testDatei], {cwd: wt, stdio: 'pipe'}); return {besteht: true}; } catch (e) { const s = String(e.stdout); const m = s.match(/error: '([^']+)'/) || s.match(/message: '([^']+)'/) || s.match(/AssertionError[^\n]*\n[^\n]*/); return {besteht: false, meldung: m ? (m[1] || m[0]).slice(0, 160) : ''}; } };
const ergebnis = {ohneAenderung: lauf(), proben: []};
for (const [name, datei, alt, neu] of proben) {
 const f = path.join(wt, datei); const orig = readFileSync(f, 'utf8');
 if (!orig.includes(alt)) { ergebnis.proben.push({name, fehler: 'Stelle nicht gefunden'}); continue; }
 writeFileSync(f, orig.replace(alt, neu)); const r = lauf(); writeFileSync(f, orig);
 ergebnis.proben.push({name, datei, ...r}); console.log((r.besteht ? 'besteht trotzdem  ' : 'scheitert         ') + name + (r.meldung ? ' · ' + r.meldung : ''));
}
writeFileSync(out, JSON.stringify(ergebnis, null, 1));
console.log('ohne Änderung besteht:', ergebnis.ohneAenderung.besteht);
