# Belege · Unabhängige Prüfung Paket 2026.10.19 · 30.10.2026

Belege zum Abschnitt «Unabhängige Prüfung Paket 2026.10.19» im [Prüfbericht](../../PRUEFBERICHT.md). Sie gehören nicht zum Paket. Geprüft wurde `main` = `da2d8c9` (PR #156, eingeschlossen PR #154) gegen den Ausgangsstand `c43a94d`.

| Datei | Inhalt |
| --- | --- |
| `protokolle.txt` | `sha256sum -c`, `npm run check:package`, Entpacken und `diff -r`, `npm run check:generated`, zweimal `npm run build`, fünfmal `npm test` (dreimal Chromium 1243, Headless-Shell 1243, Headless-Shell 1234 wie in der CI), `npm run test:ui`, nachgestellte Ableitung, Umfang des Diffs, Suche nach Sicherheitsgrenzen. |
| `ui-matrix-pruefung.json` | Bericht der eigenen UI-Matrix (112 Läufe, 0 Befunde); ohne Zeitangaben gleich wie `tests/ergebnisse/ui-matrix-2026.10.19.json`. |
| `auswertung-fixture-da2d8c9.txt` | Eigene Fixture (`skripte/fixture.cjs`, Auswertung `skripte/bericht.py`): alle Erklärgrafiken aus `visualisierungsmuster.html` und `erklaermuster.html` (geschlossen und offen), React-`Carousel`, Entwurfsmarke, Text, Link, Nebentext und Akzent; auf Weiss, im blauen Band und auf Nachtblau; 375 und 1280 px, beide Themes; Ruhe, Druck, erzwungene Farben; Knöpfe und Links zusätzlich mit Hover, Fokus und gedrückt ohne Hover. |
| `auswertung-fixture-c43a94d.txt` | Dieselbe Fixture auf dem Ausgangsstand `c43a94d` (Gegenprobe). |
| `messwerte-zustaende-da2d8c9.json`, `-c43a94d.json` | Rohwerte der Zustände (Farbe, Fläche, Rahmen, Fokusring, Unterstreichung) je Knopf und Link. |
| `fixture-da2d8c9-light-1280.png`, `-kontrast-1280.png`, `-light-375.png`, `-kontrast-375.png` | Fotos der Fixture, verkleinert: links Weiss, Mitte blaues Band, rechts Nachtblau. |
| `fixture-c43a94d-light-1280.png`, `-kontrast-1280.png` | Dieselbe Fixture auf `c43a94d`. |
| `offene-erklaergrafik-light-1280.png`, `-kontrast-1280.png` | Offene Erklärgrafik (Abbildung 4 aus `visualisierungsmuster.html`) auf Weiss, im blauen Band und auf Nachtblau (Befund O-8). |
| `messwerte-grenzen.txt` | Reiter, Beschriftungen von Kontrollkästchen, Optionsfeld und Schalter sowie Menüknopf im Band, `da2d8c9` und `c43a94d` (`skripte/grenzen.cjs`). |
| `gegenproben.txt` | Gegenproben G1–G5 und Mutationsläufe: je ein Selektor der Rücksetzregel entfernt (`skripte/mutation.py`), dazu die Bestätigung im Browser für die Karussell-Folie. |
| `messwerte-pixelvergleich-c43a94d.json` | Ganzseitenfotos aller 31 aktiven Vorschauseiten, 375 und 1280 px, beide Themes, Kennungen gleichgesetzt (`skripte/pixel.mjs`); Nachprüfung von `qa.html` mit `skripte/qa-nachpruefung.mjs`. |

Die Skripte wurden ausserhalb des Repositorys ausgeführt; die Vergleichsstände `c43a94d`, `46de3de` und `da2d8c9` (für Gegenproben) lagen als eigene Arbeitsbäume ausserhalb des Repositorys. Aufruf etwa `node skripte/fixture.cjs <stamm> <ausgabe.json> [fotopräfix]`, `python3 -I skripte/bericht.py <ausgabe.json>`, `node skripte/pixel.mjs <neu> <alt> <präfix>`.
