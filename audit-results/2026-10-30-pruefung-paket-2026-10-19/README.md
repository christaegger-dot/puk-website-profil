# Belege · Unabhängige Prüfung Paket 2026.10.19 · 30.10.2026

Belege zum Abschnitt «Unabhängige Prüfung Paket 2026.10.19» im [Prüfbericht](../../PRUEFBERICHT.md). Sie gehören nicht zum Paket. Geprüft wurde Commit `da2d8c9` (PR #156, Paket-SHA-256 `ec3a97ad…8aa8f6`) gegen den Ausgangsstand `c43a94d` (PR #153), einschliesslich 2026.10.18 (PR #154).

| Datei | Inhalt |
| --- | --- |
| `protokolle.txt` | Paketprüfung, Entpacken und `diff -r`, `check:generated`, zweimal `npm run build`, Browserversionen, fünf Läufe `npm test` (dreimal Chromium 1243, Headless-Shell 1243, Headless-Shell 1234 wie in der CI), `npm run test:ui`, Gegenproben (O-6, Selbstprüfbericht, Dokumenttest), Langform-Flächen, Archive, Startseiten, Sicherheitsgrenzen. |
| `ui-matrix-unabhaengig.json` | Bericht der eigenen UI-Matrix (112 Läufe, 0 Befunde). |
| `messwerte-baender-da2d8c9.json.gz`, `messwerte-baender-c43a94d.json.gz` | Rohwerte der Fixture `skripte/messung-baender.mjs`: Erklärgrafiken (geschlossen und offen), Karussell, Reiter, Formularelemente, Menü, Knöpfe auf Weiss (`w`), im blauen Band (`b`) und auf Nachtblau (`n`); beide Themes, 375 und 1280 px; Ruhe, Hover, Fokus, gedrückt ohne Hover, Druck. |
| `auswertung-baender-da2d8c9.txt.gz` | Abweichungen gegenüber Weiss je Gruppe und Zustand (`skripte/auswertung-baender.mjs`). |
| `kontraste-da2d8c9.txt`, `kontraste-c43a94d.txt` | Texte unter 4,5:1 je Lauf, Fläche und Gruppe (`skripte/kontraste-baender.mjs`). |
| `vergleich-c43a94d-da2d8c9.txt` | Welche Messwerte sich zwischen den Ständen ändern (`skripte/vergleich-staende.mjs`). |
| `gegenprobe-o6.json` | Tests 114 und 115 ohne Rücksetzregel und ohne je einen Selektor (`skripte/gegenprobe.py`). |
| `messwerte-pixelvergleich-c43a94d.json` | Ganzseitenfotos aller aktiven Vorschauseiten, 375 und 1280 px, beide Themes, Kennungen gleichgesetzt (`skripte/pixel.mjs`). |
| `stichprobe-*.png` | Erklärgrafik E geschlossen und offen, Karussell auf Weiss, im blauen Band und auf Nachtblau (`skripte/fotos-baender.mjs`). |
| `start-*-375x812.png` | Startseiten mit echtem Titel (`skripte/start.mjs`). |
| `paketvergleich.txt` | Vergleich des geprüften mit dem nach dem Berichtseintrag neu erzeugten Paket. |

Die Skripte werden mit dem Repository-Stamm bzw. einem Vergleichsstand als erstem Argument aufgerufen; die Vergleichsstände (`git archive`) und die Arbeitskopie für Gegenproben lagen ausserhalb des Repositorys.
