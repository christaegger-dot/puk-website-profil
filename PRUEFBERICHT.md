# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.11 · Stand 29.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.11 behebt den Befund W-A der unabhängigen Prüfung des Pakets 2026.10.10 ([ENTSCHEIDE-PROFIL-2026-10-11.md](ENTSCHEIDE-PROFIL-2026-10-11.md)): Im Druck entfällt die nachtblaue Fläche, und Text, Links und Akzent stehen wie auf Weiss statt in Weiss und Blau 25. Ausgangsstand ist `68535c5` (Profil 2026.10.10 mit eingetragener unabhängiger Prüfung, PR #142). Dessen Berichte, Matrixdaten und unverändertes Paket (SHA-256 `080b4134…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-29-10/) erhalten.

## Umsetzung

- **Druckregel (W-A):** Im Block `@media print` in `components/bundle.css` steht nach der Regel für `.puk-web-band` neu `[data-puk-surface="night"]`. Sie setzt:
  - `background:none!important`, also keine Fläche, für das Band wie für eigene Flächen;
  - `--text-default`, `--text-muted`, `--text-link`, `--text-link-hover`, `--text-link-visited` und `--text-accent` auf `inherit`, also die Werte der Umgebung;
  - `color:var(--text-default)!important`.

  Die Regel steht nach `[data-puk-surface="night"]` am Bildschirm und gilt nur im Druck. `tokens/*.css` enthält keine Druckregeln und bleibt unverändert.
- **Regeln:** Leitlinie 02 (Abschnitt «Profilentscheid 29.10.2026», neuer Punkt «Druck») und README (Abschnitt «Farbe», Nachtblau). `ENTSCHEIDE-PROFIL-2026-10-10.md` (Abschnitt «Prüfung») und `ABSCHLUSSENTSCHEIDE.md` nennen das Ergebnis der unabhängigen Prüfung 2026.10.10.
- **Kennungen:** Version 2026.10.11, Stand 2026-10-29, Starter-Build r4-18, Kit-Referenz r4-6 (das geänderte Stylesheet wird neu geladen), Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-11.md` gehört zum Paket (`tools/paket.py`) und zur Dokumentationsprüfung (`tools/pruefe-dokumentation.mjs`).
- **Neuer Test:** in `tests/profilentscheid-2026-10-29.test.mjs`, Druckansicht (`emulateMedia`) in beiden Themes:
  - Band und eigene Fläche ohne Hintergrund;
  - Text `rgb(34, 34, 34)`;
  - drei Links in derselben Farbe wie der Link auf Weiss und unterstrichen;
  - Akzent nicht Blau 25.

  **Gegenprobe:** Ohne die neue Druckregel scheitert genau dieser Test (`# pass 3`, `# fail 1`). Danach wurde die Datei wiederhergestellt.
- **Nicht geändert:** die Befunde O-A bis O-D der Prüfung 2026.10.10 (nicht beauftragt), Tokens, Komponenten-Quellen und Inhalte.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 wurde über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium` gewählt.

| Prüfung | Ergebnis |
| --- | --- |
| Ableitungen und Build | `npm run generieren` aktualisierte 16 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js` (bytegleich). Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-18». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test`: dreimal nach dem Build, je **113 bestanden**, 0 fehlgeschlagen, 0 übersprungen (112 bisherige Tests und der neue Drucktest `ok 110`). Der zeitabhängige Fehler der Vorschau `Website.dc.html` (Befund O-D der Prüfung 2026.10.10) trat lokal nicht auf; er ist nicht behoben und kann in der CI weiter vereinzelt auftreten. |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.11.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.11.json) |
| Druck im Browser | Fixture mit blauem Band, Band in Nachtblau und eigener nachtblauer `div`-Fläche. `emulateMedia({media:'print'})`, 1 s gewartet, damit der Farbübergang der Links abgeschlossen ist. Band und `div` ohne Hintergrund; Titel und Text `rgb(34, 34, 34)`; Links `rgb(60, 100, 255)` und unterstrichen (wie der Link auf Weiss); Kicker `rgb(60, 100, 255)`; Nebentext `rgb(100, 100, 100)`. PDF aus Chromium ohne Hintergrundgrafik: Text im nachtblauen Band #222222 (vorher #ABABAB, 2,30:1), Link der `div`-Fläche dunkelblau. Bildschirmfotos: [PDF](audit-results/2026-10-29-version-2026-10-11/druck-pdf-nachtblau.png), [Druckansicht](audit-results/2026-10-29-version-2026-10-11/druckansicht-nachtblau-1280.png); Zustand vorher: [PDF 2026.10.10](audit-results/2026-10-29-pruefung-paket-2026-10-10/e-druck-pdf-seite1.png) |
| Bildschirm unverändert | Dieselbe Fixture, `styles.css`, beide Themes, 375 und 1280 px. Alle gemessenen Farben, Unterstreichungen und Fokusringe sind gleich den Messwerten der unabhängigen Prüfung 2026.10.10 ([messwerte-nachtblau.json](audit-results/2026-10-29-pruefung-paket-2026-10-10/messwerte-nachtblau.json)). Fotos: [hell](audit-results/2026-10-29-version-2026-10-11/bildschirm-nachtblau-light-1280.png), [Kontrast](audit-results/2026-10-29-version-2026-10-11/bildschirm-nachtblau-kontrast-1280.png) |
| Startseiten | Minimalstarter, Profilbeispiel und Starter gegen `68535c5`, je 375 und 1280 px, Standard- und Kontrast-Theme: 12 von 12 Ganzseitenfotos pixelgleich; nur die Build-Kennung wechselt von r4-17 zu r4-18; keine Skriptfehler. |
| Archiv | `archiv/profilstand-2026-10-29-10/`: 13 Dateien bytegleich mit `68535c5` (`git show 68535c5:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.10.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 376 Dateien bytegleich (375 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-11.md`). Die SHA-256 steht in `puk-website-profil-2026.10.11.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Der Knopf-Link (`a.puk-btn`) verliert im Druck wie bisher seine Fläche; seine weisse Schrift erscheint dann hellgrau. Das gilt im blauen Band gleich und ist nicht Teil von W-A.

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.10 unabhängig geprüft; die unabhängige Prüfung von 2026.10.11 muss darum eine andere Sitzung übernehmen. Sie ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Druck auf Papier, andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
