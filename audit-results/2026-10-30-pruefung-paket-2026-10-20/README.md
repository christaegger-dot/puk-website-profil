# Belege · Unabhängige Prüfung Paket 2026.10.20

Prüfgegenstand: `puk-website-profil-2026.10.20.zip`, SHA-256 `e6d0663ad06db724d0e16acf0213e6e4de4e75d8ed6f2e3f0277e6e8014acdf8`, `main` = `177e24a` (Merge von PR #161), Vergleichsstand `d4ab623`. Bericht: [PRUEFBERICHT.md](../../PRUEFBERICHT.md), Abschnitt «Unabhängige Prüfung Paket 2026.10.20». Diese Belege gehören nicht zum Paket.

| Datei | Inhalt |
| --- | --- |
| `protokolle.txt` | Umgebung, Prüfsumme, Paketabgleich, Builds, Testläufe (Chromium dreimal, Headless-Shell 1243 und 1234), UI-Matrix, Archiv, Sicherheitsgrenzen |
| `messwerte-fixture-177e24a.json`, `messwerte-fixture-d4ab623.json` | Eigene Fixture (`skripte/messung.mjs`, Markup in `skripte/messung-fixture.mjs`): Anwendungsmuster, Platzhalter und Sicherheitsleiste, Schichtenbild, Erklärknöpfe, offene Erklärgrafik mit Netz, Waage und Aufbau-Nummer; je auf Weiss, im blauen Band, auf Nachtblau; Standard- und Kontrast-Theme, 375 und 1280 px; Ruhe, Hover, Fokus, gedrückt, Druck, erzwungene Farben |
| `auswertung-fixture.txt`, `auswertung-kategorien.txt` | Vergleich Band/Nachtblau gegen Weiss (`skripte/auswertung.mjs`) und Einteilung der Abweichungen |
| `verschachtelte-flaechen.txt` | Links in erfassten Flächen innerhalb getönter Flächen (`skripte/verschachtelt.mjs`), `177e24a` (8701) und `d4ab623` (8702) |
| `mutationsprobe-ruecksetzregel.json` | Jeder der 38 Selektoren einzeln entfernt (`skripte/mutation.mjs`) |
| `dokument-gegenproben.json` | Gegenproben zum Dokumenttest (`skripte/dokument-gegenprobe.mjs`) |
| `messwerte-pixelvergleich-d4ab623.json` | 31 Seiten × 375/1280 px × beide Themes gegen `d4ab623` (`skripte/pixel.mjs`) |
| `messwerte-bandscan-177e24a.json` | Regelflächen und Textkontrast in Bändern aller 31 Seiten (`skripte/bandscan.mjs`) |
| `ui-matrix-unabhaengig.json` | Eigener Lauf `npm run test:ui`, bytegleich mit `tests/ergebnisse/ui-matrix-2026.10.20.json` |
| `fotos/fixture-<stand>-<theme>.png` | Ausschnitte 1280 px: Anwendungskarte, Platzhalter, offene Erklärgrafik; Spalten Weiss, blaues Band, Nachtblau |
| `fotos/fixture-177e24a-*.png` | Ganze Fixture (375 px Standard, 1280 px Kontrast, erzwungene Farben) |

Die Skripte liefen ausserhalb des Repositorys gegen zwei lokale Server (`python3 -m http.server`, Repository und Arbeitsbaum `d4ab623`); Mutationen und Gegenproben nur in einem eigenen Arbeitsbaum von `177e24a`.
