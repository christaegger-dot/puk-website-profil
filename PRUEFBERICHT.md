# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.12 · Stand 29.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.12 behebt den Befund O-D der unabhängigen Prüfung des Pakets 2026.10.10 ([ENTSCHEIDE-PROFIL-2026-10-12.md](ENTSCHEIDE-PROFIL-2026-10-12.md)): Die Plattformvorschau `templates/website/Website.dc.html` scheiterte vereinzelt, wenn `_ds_bundle.js` vor React geladen war. Ausgangsstand ist `6b0ce34` (Profil 2026.10.11 mit der Druckkorrektur W-A, PR #143). Dessen Selbstprüfbericht, Matrixdaten und unverändertes Paket (SHA-256 `62f9e5e2…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-29-11/) erhalten; dieses Paket wurde nicht unabhängig geprüft.

## Umsetzung

- **Ladereihenfolge (O-D):** `templates/website/ds-base.js` fügt `_ds_bundle.js` erst ein, wenn `window.React` und `window.ReactDOM` vorhanden sind; bis dahin prüft er alle 20 ms. Nach 15 s ohne React meldet er einen Konsolenfehler und lädt das Bundle nicht. Danach lädt er wie bisher `platform/claude-ds-alias.js`. `_ds_bundle.js`, `components/bundle.js`, `support.js` und die erzeugten Websites bleiben unverändert.
- **Kennungen:** Version 2026.10.12, Stand 2026-10-29, Starter-Build r4-19 (Werkzeugänderung), Kit-Referenz r4-6 und Prüfskript qa-9 unverändert, weil am UI-Kit nichts geändert ist. `ENTSCHEIDE-PROFIL-2026-10-12.md` gehört zum Paket (`tools/paket.py`) und zur Dokumentationsprüfung (`tools/pruefe-dokumentation.mjs`).
- **Neuer Test:** in `tests/profilentscheid-2026-10-29.test.mjs`. Die Vorschau wird bei 360 px einmal ohne und einmal mit 800 ms verzögertem React geladen. Erwartet werden in beiden Fällen keine Browserfehler, der Text «Sprechstunden» und derselbe Seiteninhalt. **Gegenprobe:** Mit dem bisherigen `ds-base.js` scheitert genau dieser Test (`# pass 4`, `# fail 1`).
- **Dokumentation:** `ENTSCHEIDE-PROFIL-2026-10-10.md` und `ENTSCHEIDE-PROFIL-2026-10-11.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md`, `archiv/README.md`. Leitlinien und README nennen den Plattformadapter nicht und bleiben unverändert.
- **Nicht geändert:** die Befunde O-A bis O-C der Prüfung 2026.10.10 (nicht beauftragt), Tokens, Stylesheets, Komponenten-Quellen und Inhalte.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 wurde über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium` gewählt.

| Prüfung | Ergebnis |
| --- | --- |
| Reproduktion vorher | Eigenes Skript mit `page.route`, Vorschau bei 360 und 1280 px. Mit 800 ms verzögertem React (`react.production.min.js`, `react-dom.production.min.js`): je 24 Fehler «Cannot read properties of undefined (reading 'useState')», kein Inhalt. Mit 800 ms verzögertem `_ds_bundle.js` und ohne Verzögerung: 0 Fehler, Inhalt vollständig. |
| Nachher | Dasselbe Skript nach der Änderung: in allen drei Fällen und beiden Breiten 0 Fehler, Text «Sprechstunden» vorhanden. Bildschirmfotos mit verzögertem React: [360 px](audit-results/2026-10-29-version-2026-10-12/vorschau-react-verzoegert-360.png), [1280 px](audit-results/2026-10-29-version-2026-10-12/vorschau-react-verzoegert-1280.png) |
| Ableitungen und Build | `npm run generieren` aktualisierte 14 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js` (bytegleich). Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-19». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test`: dreimal nach dem Build, je **114 bestanden**, 0 fehlgeschlagen, 0 übersprungen (113 bisherige Tests und der neue Vorschautest `ok 111`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.12.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.12.json) |
| Startseiten | Minimalstarter, Profilbeispiel und Starter gegen `6b0ce34`, je 375 und 1280 px, Standard- und Kontrast-Theme: 12 von 12 Ganzseitenfotos pixelgleich; nur die Build-Kennung wechselt von r4-18 zu r4-19; keine Skriptfehler. |
| Archiv | `archiv/profilstand-2026-10-29-11/`: 13 Dateien bytegleich mit `6b0ce34` (`git show 6b0ce34:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.11.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 377 Dateien bytegleich (376 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-12.md`). Die SHA-256 steht in `puk-website-profil-2026.10.12.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Druckkorrektur W-A aus 2026.10.11 ist unverändert enthalten; ihr Test (`data-puk-surface="night" druckt …`) läuft in der Testsuite mit. Ihre Nachweise stehen im [archivierten Prüfbericht 2026.10.11](archiv/profilstand-2026-10-29-11/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.10 unabhängig geprüft und 2026.10.11 und 2026.10.12 gebaut; die unabhängige Prüfung von 2026.10.12 muss darum eine andere Sitzung übernehmen. Sie ist offen und schliesst W-A ein. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
