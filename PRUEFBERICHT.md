# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.20 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.20 behebt den Befund W-3 und die optionalen Befunde O-7 bis O-9 der unabhängigen Prüfung 2026.10.19 ([ENTSCHEIDE-PROFIL-2026-10-20.md](ENTSCHEIDE-PROFIL-2026-10-20.md)).

Ausgangsstand ist `d4ab623` (Profil 2026.10.19 mit der unabhängigen Prüfung, PR #158). Dessen Prüfbericht mit Selbstprüfung und unabhängiger Prüfung, Matrixdaten und Paket (SHA-256 `914aa4c4…`; geprüft wurde `ec3a97ad…`, Unterschied nur im Prüfbericht) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-19/) erhalten.

## Umsetzung

- **W-3:** Die Rücksetzregel `:where(.puk-web-band,[data-puk-surface="night"]) :where(…)` in `tokens/base.css` und wortgleich `components/bundle.css` erfasst zusätzlich `.puk-site-placeholder`, `.puk-site-safety--direct`, `.puk-app-card`, `.puk-app-chip`, `.puk-app-choice`, `.puk-app-boundary`, `.puk-app-mini`, `.puk-app-detail`, `.puk-app-output`, `.puk-app-empty`, `.puk-app-contact-target`, `.puk-vis-btn`, `.puk-vis-build__n`, `.puk-vis-balance__hold`, `.puk-vis-net__ring li`, `.puk-vis-layers`. Werte, Spezifität 0 und Reihenfolge unverändert. Bewusst nicht aufgenommen: `.puk-vis-overlap li` und `.puk-vis-net__ring h3`; sie sind je nach Breite flächenlos, und eine Messung mit `.puk-vis-overlap li` in der Liste ergab auf Nachtblau `#222222` auf Nachtblau (1,16:1) statt Weiss. Leitlinie 02, README und Karte «PUK-Blau» sagen, dass genau die aufgezählte Liste erfasst ist; Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-18.md`.
- **O-7:** Neuer Test «Jeder Eintrag der Rücksetzregel …» in `tests/profilentscheid-2026-10-29.test.mjs`. Er liest die Einträge aus `components/bundle.css`, verlangt für jeden einen eigenen Fall (Text, Nebentext, Link; Felder mit Schrift aus `--text-default` wie die React-Felder), vergleicht Farbe und Rahmen im blauen Band und auf Nachtblau mit Weiss am Bildschirm und im Druck, beide Themes, und prüft, dass `tokens/base.css` dieselbe Regel enthält. Der Test zu hellen Komponenten prüft Hover zusätzlich für Knopf-Link und die Links in Dialog, versenkter Karte und Hinweis, Fokus und gedrückt zusätzlich für die Links in `data-puk-light` und Dialog. Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-19.md`.
- **O-8:** Leitlinie 02 nennt die offene Erklärgrafik als nicht erfasst und im blauen Band nicht lesbar (3,38:1; Theme «Hoher Kontrast» 1,58:1) und Erklärgrafiken und Anwendungsmuster in der Liste der Komponenten ausserhalb von Bändern.
- **O-9:** Berichtigung in `ENTSCHEIDE-PROFIL-2026-10-20.md` und Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-19.md`; Archive unverändert.
- **Nicht geändert:** Tokens, Werte, React-Komponenten und beide Bundles (bytegleich mit 2026.10.19), `visual-patterns.css`, `erklaermuster.css`, `starter.css`, `applications.css`, Inhalte.
- **Kennungen:** Version 2026.10.20, Stand 2026-10-30, Starter-Build r4-27, Kit-Referenz r4-13, Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-20.md` gehört zum Paket und zur Dokumentationsprüfung (`tools/paket.py`, `tools/pruefe-dokumentation.mjs`).

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 (153.0.8010.12) über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; Headless-Shell 1243 über `CHROMIUM_EXECUTABLE_PATH`; Headless-Shell 1234 (151.0.7922.34), die Playwright 1.62.1 in der CI lädt, in einem eigenen Browserpfad ausserhalb des Repositorys.

| Prüfung | Ergebnis |
| --- | --- |
| Helle Flächen im Browser | Messfixture der unabhängigen Prüfung 2026.10.19 ([`skripte/messung.mjs`](audit-results/2026-10-30-pruefung-2026-10-19/skripte/messung.mjs)), 1280 px, beide Themes, Ruhe, Hover, Fokus, gedrückt ohne Hover, Druck. Die bisher erfassten 59 Messpunkte unverändert gleich wie auf Weiss (je Theme 589 von 590 Vergleichen; der verbleibende ist der nicht messbare Hover des Menüeintrags). Neu gleich wie auf Weiss: Anwendungsmuster (Kartentitel `#222222` auf Weiss 15,91:1, vorher im Band 1,00:1; Kicker und Text `#646464` 5,92:1, Kontrast-Theme `#4F4F4F` 8,19:1; `-boundary` 12,14:1, `-output` 14,47:1, `-empty` 14,33:1), Platzhalter des Starters `#222222` auf `#F0F3FF` (14,37:1, vorher auf Nachtblau 1,11:1), Sicherheitsleiste `#222222` auf `#F7F7F7` (14,85:1, vorher 1,07:1), Schichten und Erklärknopf in offener Figur `#222222` auf Weiss (vorher 1,00:1). Sichtkontrolle: [hell](audit-results/2026-10-30-version-2026-10-20/ehemals-nicht-erfasst-light.png), [Kontrast](audit-results/2026-10-30-version-2026-10-20/ehemals-nicht-erfasst-kontrast.png). |
| Keine Nebenwirkung | Gegenüber 2026.10.19 ändern sich in der Messfixture nur diese Messpunkte (71 Zustände in 18 Kennungen); bewusst flächenlose Inhalte (Bandtext, Knöpfe, offene Erklärgrafik, Überschneidung, Karussell-Status, `brand`, `inverse`, `emergency`, Nachtblau in Nachtblau) unverändert. Alle 30 aktiven Vorschauseiten nach `tests/browser.test.mjs` und `Website.dc.html`, ganze Seite, 1280 px, beide Themes, Kennungen gleichgesetzt, gegen `d4ab623`: **62 von 62 pixelgleich**. |
| Mutationsprobe | Je ein Eintrag aus der Regel in `components/bundle.css` entfernt (Arbeitsbaum ausserhalb des Repositorys, Listenprüfung des neuen Tests ausgeschaltet), dann die drei Tests zu hellen Flächen ausgeführt: **41 von 41** Entfernungen erkannt (2026.10.19: 16 von 25). |
| Gegenproben | Arbeitsbaum `d4ab623` mit der neuen Testdatei: «Jeder Eintrag …» scheitert an der Liste; mit ausgeschalteter Listenprüfung an der Farbe (`light screen n .puk-site-placeholder text`: `rgb(255, 255, 255)` statt `rgb(34, 34, 34)`). Mit neuem `components/bundle.css`, aber altem `tokens/base.css` scheitert er an «tokens/base.css enthält dieselbe Regel». |
| Ableitungen und Build | `npm run generieren`: 16 von 45 abgeleiteten Dateien aktualisiert (Kennungen). `npm run build`: 26 Komponenten, Bundles unverändert. Starter 7 Seiten (Gate draft 0 blockierend, 12 Hinweise), Minimalstarter 4 Seiten (3 Hinweise), Profilbeispiel 4 Seiten (Gate production 0 blockierend, 1 Hinweis `siteUrl`), alle «Build r4-27». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test` je einmal mit Chromium 1243, mit der Headless-Shell 1243 und mit der Headless-Shell 1234 wie in der CI: je **119 bestanden**, 0 fehlgeschlagen, 0 übersprungen (118 bisherige Tests, dazu «Jeder Eintrag der Rücksetzregel …»). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.20.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.20.json) |
| Archiv | `archiv/profilstand-2026-10-30-19/`: 13 Dateien bytegleich mit `d4ab623` (`git show d4ab623:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.19.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 385 Dateien bytegleich (384 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-20.md`; Matrixdaten 2026.10.19 durch 2026.10.20 ersetzt). Die SHA-256 steht in `puk-website-profil-2026.10.20.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise von 2026.10.19 und die unabhängige Prüfung (einschliesslich 2026.10.18) stehen im [archivierten Prüfbericht 2026.10.19](archiv/profilstand-2026-10-30-19/PRUEFBERICHT.md), die früheren Stände in den weiteren Ordnern unter `archiv/`.

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.19 unabhängig geprüft. Die unabhängige Prüfung von 2026.10.20 muss darum eine andere Sitzung übernehmen; sie ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
