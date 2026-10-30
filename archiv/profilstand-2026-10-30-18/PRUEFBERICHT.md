# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.18 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.18 behebt den Befund W-2 der unabhängigen Prüfung 2026.10.17 ([ENTSCHEIDE-PROFIL-2026-10-18.md](ENTSCHEIDE-PROFIL-2026-10-18.md)): Die technische Absicherung «helle Flächen in Bändern» aus 2026.10.17 erfasste Erklärgrafiken und Karussell-Knöpfe nicht. Sie erhalten jetzt ebenfalls die Farben der Seitenfläche zurück.

Ausgangsstand ist `9e00421` (Profil 2026.10.17 mit der unabhängigen Prüfung, PR #153; inhaltlich `main` `c12f636` plus Prüfbericht, Belege und neu erzeugtes Paket). Dessen Prüfbericht mit Selbstprüfung und unabhängiger Prüfung, Matrixdaten und Paket (SHA-256 `0b011b0b…`; geprüft wurde `ec60a11f…`, Unterschied nur im Prüfbericht) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-17/) erhalten.

## Umsetzung

- **Rücksetzregel:** `:where(.puk-web-band,[data-puk-surface="night"]) :where(…)` in `tokens/base.css` und wortgleich in `components/bundle.css` (`tokens/base.css` steht weiterhin vollständig im Bundle). Zusätzlich erfasst: `.puk-carousel__btn`, `.puk-vis-figure:not(.puk-vis-figure--open)`, `.puk-vis-longdesc`, `.puk-vis-cycle li`, `.puk-vis-compare__col`, `.puk-vis-decision__branch`, `.puk-vis-illu`, `.puk-vis-tablewrap`, `.puk-vis-decide li`. Werte, Spezifität 0 und Reihenfolge unverändert. Die offene Erklärgrafik `--open` hat keine Fläche und bleibt mit den Farben des Bandes.
- **Nicht geändert:** React-Komponenten und beide Bundles (`components/bundle.js`, `_ds_bundle.js` bytegleich mit 2026.10.17), `visual-patterns.css`, Tokens, Inhalte.
- **Regeln:** Leitlinie 02 nennt die erfassten Komponenten und dass Reiter, Formularbeschriftungen und Menüknöpfe nicht erfasst sind; README (Abschnitt «Farbe»); Nachtrag im Abschnitt «Prüfung» von `ENTSCHEIDE-PROFIL-2026-10-17.md`; `ABSCHLUSSENTSCHEIDE.md`, `archiv/README.md`.
- **Kennungen:** Version 2026.10.18, Stand 2026-10-30, Starter-Build r4-25, Kit-Referenz r4-11 (das UI-Kit lädt Stylesheet und `visual-patterns.css`), Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-18.md` gehört zum Paket und zur Dokumentationsprüfung (`tools/paket.py`, `tools/pruefe-dokumentation.mjs`).
- **Test:** neu in `tests/profilentscheid-2026-10-29.test.mjs`. Erklärgrafik (Figur, Vergleichsspalte, Legende mit Link, Entscheidungsliste, Langbeschreibung, Platzhalter in offener Figur) und React-`Carousel` auf Weiss, im blauen Band und auf Nachtblau, beide Themes. Farbe, Rahmen und Fläche müssen im Band gleich sein wie auf Weiss; der Karussell-Knopf zusätzlich mit Fokus und gedrückt; Druck wie auf Weiss. Gegenproben im selben Test: Die offene Erklärgrafik auf Nachtblau und der Karussell-Status im blauen Band bleiben Weiss. **Gegenprobe des Tests:** In einem Arbeitsbaum von `9e00421` mit nur der neuen Testdatei scheitert er (`# pass 0`, `# fail 1`; Beschriftung der Erklärgrafik auf Nachtblau `rgb(255, 255, 255)` statt `rgb(34, 34, 34)`).

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 (153.0.8010.12) über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; Headless-Shell 1243; Headless-Shell 1234 (151.0.7922.34), die Playwright 1.62.1 in der CI lädt.

| Prüfung | Ergebnis |
| --- | --- |
| Helle Komponenten im Browser | Messfixture der unabhängigen Prüfung 2026.10.17 (Skripte unter [`audit-results/2026-10-30-pruefung-2026-10-17/skripte/`](audit-results/2026-10-30-pruefung-2026-10-17/skripte/)), 1280 px, beide Themes, Ruhe, Hover, Fokus, gedrückt ohne Hover, Druck: Alle hellen Komponenten im blauen Band und auf Nachtblau gleich wie auf Weiss, jetzt auch der Karussell-Knopf (vorher auf Nachtblau 1,00:1). Erklärgrafik: Beschriftung und Legende `#222222` auf `#F7F7F7` (14,85:1), Spaltentitel und Werte `#222222` auf Weiss (15,91:1), Schlüssel und Merkmal `#646464` (5,92:1; Kontrast-Theme `#4F4F4F`, 8,19:1), gleich wie auf Weiss. Einzige verbleibende Abweichung in der Fixture: die Entwurfsmarke des Starters (nicht Teil von W-2). Sichtkontrolle: [hell](audit-results/2026-10-30-version-2026-10-18/erklaergrafik-karussell-light-1280.png), [Kontrast](audit-results/2026-10-30-version-2026-10-18/erklaergrafik-karussell-kontrast-1280.png). |
| Keine Nebenwirkung | Gegenüber 2026.10.17 ändern sich in der Messfixture nur Erklärgrafik und Karussell-Knopf. Alle 30 aktiven Vorschauseiten nach `tests/browser.test.mjs` und `Website.dc.html`, ganze Seite, 1280 px, beide Themes, Kennungen gleichgesetzt, gegen `9e00421`: **62 von 62 pixelgleich**. |
| Ableitungen und Build | `npm run generieren`: 17 von 45 abgeleiteten Dateien aktualisiert (Kennungen). `npm run build`: 26 Komponenten, Bundles unverändert. Starter 7 Seiten (Gate draft 0 blockierend, 12 Hinweise), Minimalstarter 4 Seiten (3 Hinweise), Profilbeispiel 4 Seiten (Gate production 0 blockierend, 1 Hinweis `siteUrl`), alle «Build r4-25». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test` je einmal mit Chromium 1243, mit der Headless-Shell 1243 und mit der Headless-Shell 1234 wie in der CI: je **118 bestanden**, 0 fehlgeschlagen, 0 übersprungen (117 bisherige Tests einschliesslich `ok 114` aus 2026.10.17, dazu der neue Test `ok 115`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.18.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.18.json) |
| Archiv | `archiv/profilstand-2026-10-30-17/`: 13 Dateien bytegleich mit `9e00421` (`git show 9e00421:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.17.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 383 Dateien bytegleich (382 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-18.md`). Die SHA-256 steht in `puk-website-profil-2026.10.18.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise von 2026.10.17 und die unabhängige Prüfung stehen im [archivierten Prüfbericht 2026.10.17](archiv/profilstand-2026-10-30-17/PRUEFBERICHT.md), die früheren Stände in den weiteren Ordnern unter `archiv/`.

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.17 unabhängig geprüft. Die unabhängige Prüfung von 2026.10.18 muss darum eine andere Sitzung übernehmen; sie ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
