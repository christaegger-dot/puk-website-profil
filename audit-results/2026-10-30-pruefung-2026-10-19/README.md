# Belege · Unabhängige Prüfung 2026.10.19 · 30.10.2026

Belege zum Abschnitt «Unabhängige Prüfung 2026.10.19» im [Prüfbericht](../../PRUEFBERICHT.md). Sie gehören nicht zum Paket. Geprüft wurde `main` = `da2d8c9` (PR #156, Baum gleich `fef9d49`) einschliesslich 2026.10.18 (`46de3de`, PR #154) gegen den Ausgangsstand `9e00421`.

| Datei | Inhalt |
| --- | --- |
| `protokolle.txt` | Auszüge aus `npm ci`, zweimal `npm run build`, dreimal `npm test` (Chromium 1243, Headless-Shell 1243, Headless-Shell 1234 wie in der CI), `npm run test:ui`, `npm run package`, `npm run check:package` und den Gegenproben. |
| `ui-matrix-unabhaengig.json` | Bericht der eigenen UI-Matrix (112 Läufe, 0 Befunde). |
| `messwerte-helle-flaechen-da2d8c9.json`, `-46de3de.json`, `-9e00421.json` | Eigene Fixture (`skripte/messung.mjs`): Komponenten auf Weiss (`w`), im blauen Band (`b`) und auf Nachtblau (`n`), beide Themes; Ruhe, Hover, Fokus, gedrückt ohne Hover, Druck. Gruppe `E` erfasst, `F` bewusst Bandfarben, `N` nicht erfasst. |
| `auswertung-helle-flaechen.txt` | Ausgabe von `skripte/auswertung.mjs`: Abweichungen gegenüber Weiss, Kontraste der Gruppen F und N, Änderungen gegenüber `46de3de` und `9e00421`. |
| `mutationsprobe-ruecksetzregel.json` | `skripte/mutation.mjs`: je ein Eintrag der Rücksetzregel entfernt, Tests «Helle Komponenten …» und «Erklärgrafiken und Karussell-Knöpfe …» ausgeführt (16 von 25 erkannt). Lief in einem Arbeitsbaum ausserhalb des Repositorys; die Datei wurde danach wiederhergestellt. |
| `messwerte-pixelvergleich-46de3de.json`, `-9e00421.json` | Ganzseitenfotos aller aktiven Vorschauseiten bei 1280 px, beide Themes, Kennungen gleichgesetzt (`skripte/pixel.mjs`): je 62 von 62 gleich. |
| `messwerte-bandscan-da2d8c9.json` | Alle Textelemente in Bändern der 31 Seiten, beide Themes (`skripte/bandscan.mjs`): keines unter 4,5:1. |
| `nicht-erfasst-light.png`, `-kontrast.png` | Nicht erfasste helle Flächen (Anwendungsmuster, Platzhalter und Sicherheitsleiste des Starters, Schichten in offener Erklärgrafik) auf Weiss, im blauen Band und auf Nachtblau (`skripte/foto-luecken.mjs`). |

Die Skripte werden mit dem Repository-Stamm als erstem Argument aufgerufen, etwa `node skripte/messung.mjs <stamm> <ausgabe.json> [fotopräfix]`; Browser über `CHROMIUM_EXECUTABLE_PATH`.
