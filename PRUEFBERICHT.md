# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.9 · Stand 23.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.9 setzt die Befunde der unabhängigen Prüfung des Pakets 2026.10.8 um ([ENTSCHEIDE-PROFIL-2026-10-9.md](ENTSCHEIDE-PROFIL-2026-10-9.md)): bytegleiches Plattform-Bundle, Silbentrennung der Website-Titel bei stark vergrösserter Schrift, Hover-Zustände auf grauer Fläche in Blau 125 sowie die fünf optionalen Punkte. Ausgangsstand ist `f2087d4` (Profil 2026.10.8 mit eingetragener unabhängiger Prüfung). Dessen Berichte (Selbstprüfung und unabhängige Prüfung vom 23.10.2026 mit Bildschirmfotos unter `audit-results/2026-10-23-pruefung-paket-2026-10-8/`), Matrixdaten und unverändertes Paket (SHA-256 `d894a532…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-23-8/) erhalten.

## Umsetzung

- **W-1 Plattform-Bundle:** `quellcode/komponenten/build.mjs` schreibt ohne Zielangabe `components/bundle.js` und `_ds_bundle.js` aus denselben Quellen; `npm run build:components` ruft ihn ohne Ziel auf. UI-Kit-Referenz und Vorschau `Website.dc.html` zeigen damit `Card` sunken und `Alert` mit der Linkregel vom 22.10.2026. Test auf Bytegleichheit.
- **W-2 Titeltrennung:** `.puk-web-h1` erhält `hyphens:none` (bei Standardschrift keine Trennung, auch nicht an weichen Trennstellen). `.puk-longform__hero` und `.puk-web-hero` sind Inline-Container; ist die Titelfläche schmaler als 12 em ihrer Schrift (320 bis 375 px bei 200 % Schrift; bei Standardschrift mindestens 14,7 em), gilt `hyphens:auto` mit `hyphenate-limit-chars:10 4 4`. Lange Wörter der Mustertitel tragen weiche Trennstellen (`&shy;`), weil Browser ohne deutsches Trennmuster – auch der Headless-Browser der Tests – nur dort trennen. `tokens/web.css`, `components/bundle.css`, Inhalte der drei Startvorlagen; Leitlinien 03 und 08, README.
- **W-3 Hover-Kontrast:** `.puk-btn--secondary/--ghost:hover`, `.puk-carousel__btn:hover`, `.puk-disclosure__link:hover`, `.puk-dialog__close:hover` (`components/bundle.css`), `.puk-vis-btn:hover` (`erklaermuster.css`), `Button.jsx` (ghost) und `IconButton.jsx` zeigen Text auf `--ui-wash` in `--text-link-on-tint` (5,79:1) statt Blau 100 (4,28:1). Leitlinie 02, README.
- **O-1 bis O-5:** UI-Kit-Leiste mit `--text-link` Blau 125; Zahl 9,68:1 im Entscheiddokument 2026.10.8 berichtigt (Original im Archiv); feste Linkfarbe in Figuren entfernt, Hover wechselt wieder nach Schwarz; Links im `Alert` emergency in Weiss (`--status-danger-fg`, 7,59:1); Grundlagenkarten PUK-Blau und Display und Titel mit einheitlichem Wortlaut.
- **Kennungen:** Version 2026.10.9, Stand 2026-10-23, Starter-Build r4-16, Kit-Referenz r4-4 (geänderte Stylesheets werden neu geladen). `ENTSCHEIDE-PROFIL-2026-10-9.md` gehört zum Paket (`tools/paket.py`) und zur Dokumentationsprüfung.
- **Neuer Test:** `tests/profilentscheid-2026-10-23.test.mjs`: Bytegleichheit der Bundles; Hover-Farbe von Ghost-Button, `.puk-vis-btn`, React-`Button` ghost und `IconButton` auf `--ui-wash`; Linkfarbe im Notfall-Alert; Titel in fünf Seiten bei 320 und 375 px mit 100 % (keine Trennung, `hyphens:none`) und 200 % Schrift (`hyphens:auto`, Umbruch nur an weichen Trennstellen, kein Überlauf).

## Tatsächlich ausgeführte Prüfungen

| Prüfung | Ergebnis |
| --- | --- |
| Ableitungen und Build | `npm run generieren`, `npm run build`, `npm run check:generated`: ohne Fehler; Komponenten (26) und alle drei Vorlagen gebaut, «45 abgeleitete Dateien aktuell.», `git status` nach dem Build ohne weitere Änderungen; Gate des fachneutralen Beispiels ohne Produktionsblocker, ein bekannter Hinweis (fehlende `siteUrl`) |
| Plattform-Bundle | `cmp _ds_bundle.js components/bundle.js`: identisch; `grep -c text-link-on-tint _ds_bundle.js`: vier Vorkommen (wie in `components/bundle.js`) |
| Gesamte Testsuite | `npm test`: **109 bestanden**, 0 fehlgeschlagen, 0 übersprungen (106 bisherige und drei neue Tests); neuer Titeltest: «20 Titelzustände ohne willkürlichen Wortbruch.»; Einstiegstest weiterhin 60 Zustände |
| UI-Matrix | `npm run test:ui`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle (Lauf nach der Container-Regel für die Titelfläche); [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.9.json) |
| Titel bei 320 und 375 px | Starter, Profilbeispiel und Impressum bei 100 % und 200 % Schrift: bei 100 % keine Trennung, bei 200 % Umbruch nur an weichen Trennstellen («Ver-stehen,», «Unter-stüt-zung», «Infor-ma-tion», «Impres-sum», «Daten-schutz»), kein Überlauf; Bildschirmfotos `audit-results/2026-10-23-nachbesserung-2026-10-9/titel-<seite>-<breite>-<100|200>prozent.png` |
| Hover | Sekundär-Button der Interaktionsbeispielseite bei Hover: `rgb(43, 79, 224)` auf `rgb(244, 244, 244)`; [audit-results/2026-10-23-nachbesserung-2026-10-9/hover-button-ui-wash.png](audit-results/2026-10-23-nachbesserung-2026-10-9/hover-button-ui-wash.png) |
| Paket | `npm run package`, `npm run check:package`: 373 Dateien bytegleich, SHA-256 in `puk-website-profil-2026.10.9.zip.sha256` (der Wert kann nicht hier stehen, weil dieser Bericht zum Paket gehört) |
| Kontraste | Blau 125 auf `--ui-wash` 5,79:1, Weiss auf `status-danger-strong-bg` 7,59:1, Blau 125 (Kontrast-Theme) auf `puk-blue-25` 9,68:1; aus den Tokenwerten berechnet, keine Messung an realen Geräten. |

Automatische Silbentrennung mit deutschem Trennmuster (Chrome, Firefox, Safari auf Geräten mit Wörterbuch) wurde nicht gemessen; der Headless-Browser der Tests trennt nur an weichen Trennstellen. Die visuelle Prüfung der Titel bei 320 px und 200 % Schrift bleibt Teil der Prüfliste neuer Websites.

## Geltung

Technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Die unabhängige Prüfung durch eine andere Sitzung ist offen. Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe; die Titel in Medium bleiben eine gekennzeichnete Abweichung vom CD Manual. Reale Geräte-, Screenreader- und Zielgruppentests wurden nicht durchgeführt. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
