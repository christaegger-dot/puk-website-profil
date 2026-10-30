# Belege · Unabhängige Prüfung 2026.10.17 · 30.10.2026

Belege zum Abschnitt «Unabhängige Prüfung 2026.10.17» im [Prüfbericht](../../PRUEFBERICHT.md). Sie gehören nicht zum Paket. Geprüft wurde Commit `ea491e7` (PR #150) gegen den Ausgangsstand `ad6ce55`.

| Datei | Inhalt |
| --- | --- |
| `protokolle.txt` | Auszüge aus `npm ci`, zweimal `npm run build`, dreimal `npm test` (Chromium 1243, Headless-Shell 1243, Headless-Shell 1234 wie in der CI), `npm run test:ui`, `npm run package`, `npm run check:package` und der Gegenprobe. |
| `ui-matrix-unabhaengig.json` | Bericht der eigenen UI-Matrix (112 Läufe, 0 Befunde). |
| `messwerte-helle-flaechen-ea491e7.json` | Eigene Fixture (`skripte/messung.mjs`): helle Komponenten auf Weiss (`w`), im blauen Band (`b`) und auf Nachtblau (`n`), beide Themes; Ruhe, Hover, Fokus, gedrückt ohne Hover, Druck. |
| `messwerte-helle-flaechen-ad6ce55.json` | Dieselbe Fixture auf dem Ausgangsstand `ad6ce55`. |
| `auswertung-helle-flaechen.txt` | Ausgabe von `skripte/auswertung.mjs`: Abweichungen gegenüber Weiss, Kontraste unter 4,5:1 und Änderungen gegenüber `ad6ce55`. |
| `messwerte-erklaergrafik-ea491e7.json` | Erklärgrafik (`visual-patterns.css`) und Entwurfsmarke des Starters in Bändern (`skripte/messung-vis.mjs`). |
| `messwerte-verschachtelt.txt` | Nachtblau in Nachtblau, Nachtblau in heller Fläche im blauen Band, blaues Band in heller Fläche auf Nachtblau; `ea491e7` und `ad6ce55` (`skripte/verschachtelt.mjs`). |
| `messwerte-pixelvergleich-ad6ce55.json` | Ganzseitenfotos aller aktiven Vorschauseiten bei 1280 px, beide Themes, Kennungen gleichgesetzt (`skripte/pixel.mjs`): 62 von 62 gleich. |
| `luecken-erklaergrafik-karussell-light.png`, `-kontrast.png` | Erklärgrafik und React-`Carousel` auf Weiss, im blauen Band und auf Nachtblau (`skripte/fotos.mjs`). |
| `fixture-ea491e7-light-1280.png`, `-kontrast-1280.png` | Ganze Messfixture, Ruhezustand. |

Die Skripte werden mit dem Repository-Stamm als erstem Argument aufgerufen, etwa `node skripte/messung.mjs <stamm> <ausgabe.json> [fotopräfix]`; der Vergleichsstand `ad6ce55` lag als eigener Arbeitsbaum ausserhalb des Repositorys.
