# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.20 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.20 behebt den Befund **W-3** der unabhängigen Prüfung des Pakets 2026.10.19 ([ENTSCHEIDE-PROFIL-2026-10-20.md](ENTSCHEIDE-PROFIL-2026-10-20.md)): Die Rücksetzregel für helle Flächen in Bändern erfasst jetzt auch die Anwendungsmuster, Platzhalter und Sicherheitsleiste des Starters und die hellen Teilflächen der Erklärmuster.

Ausgangsstand ist `d4ab623` (main, Profil 2026.10.19 mit unabhängiger Prüfung, PR #158). Dessen Prüfbericht mit Selbstprüfung und unabhängiger Prüfung, Matrixdaten und Paket (SHA-256 `914aa4c4…`; geprüft wurde `ec3a97ad…`, der Unterschied liegt nur im Prüfbericht) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-19/) erhalten.

## Umsetzung

- **Rücksetzregel:** `:where(.puk-web-band,[data-puk-surface="night"]) :where(…)` in `tokens/base.css` und wortgleich in `components/bundle.css` erfasst zusätzlich `.puk-site-placeholder`, `.puk-site-safety--direct`, `.puk-app-card`, `.puk-app-chip`, `.puk-app-choice`, `.puk-app-boundary`, `.puk-app-mini`, `.puk-app-detail`, `.puk-app-output`, `.puk-app-empty`, `.puk-app-contact-target`, `.puk-vis-btn`, `.puk-vis-build__n`, `.puk-vis-balance__hold`, `.puk-vis-layers`, `.puk-vis-net__ring li` und `.puk-vis-net__ring h3`. Werte und Spezifität 0 unverändert; eigene Farbregeln der Komponenten (etwa Links in Blau 125 auf getönten Anwendungsflächen, gewählter Chip in Schwarz) bleiben vorrangig. Die Token-Dateien stehen weiter als unveränderte Blöcke im Bundle.
- **Ringbeschriftung der Beziehungskarte:** Sie hat nur in der breiten Ansicht eine weisse Fläche. In der schmalen Ansicht (`@container (max-width:40rem)` in `templates/website/longform/erklaermuster.css`) steht sie auf dem Grund der Figur; dort übernimmt sie mit `--text-muted:inherit` die Nebentextfarbe ihrer Umgebung, im Band also dessen Farbe, auf Weiss und in einer Figur mit Fläche unverändert.
- **Auswahl der Flächen:** Ein eigener Scan setzte die Inhalte der vier Anwendungsseiten, von `erklaermuster.html`, `visualisierungsmuster.html` (je auch als offene Figur) und drei Starterseiten samt einer Sicherheitsleiste `--direct` auf Weiss, in ein blaues und ein nachtblaues Band und verglich den Kontrast jedes Textes mit seiner tatsächlichen Fläche, beide Themes. Vorher bei 1280 px **500** Textstellen auf heller Fläche unter 4,5:1 und schlechter als auf Weiss (bis 1,00:1), bei 375 px 494; nachher bei 1280 px **0**, bei 375 px 6. Die 6 sind die «Überschneidung» aus `visual-patterns.css` in einer offenen Figur auf Nachtblau, die bekannte Grenze aus 2026.10.18; keine Vorlage verwendet diese Kombination.
- **Test:** neu in `tests/profilentscheid-2026-10-29.test.mjs`. Dieselben Komponenten stehen auf Weiss, im blauen Band und auf Nachtblau, beide Themes: Farbe, Rahmen und Fläche im Band gleich wie auf Weiss in Ruhe und Druck; Knöpfe, Chips, Auswahl und Links zusätzlich mit Hover, Fokus und gedrückt ohne Hover; die Ringbeschriftung bei 375 px ohne Fläche in Blau 25 auf Nachtblau. **Gegenproben** in einer Kopie: Mit `components/bundle.css` und `erklaermuster.css` von `d4ab623` scheitert der Test; ebenso, wenn je einer der 17 neuen Einträge oder `--text-muted:inherit` fehlt (18 von 18 erkannt).
- **Texte:** Leitlinie 02 zählt die neu erfassten Flächen auf und nennt die Grenze «Überschneidung»; README und Karte «PUK-Blau» verweisen für den Umfang auf Leitlinie 02; Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-18.md` (Grenzen).
- **Dokumente:** `ENTSCHEIDE-PROFIL-2026-10-20.md` (neu), `ENTSCHEIDE-PROFIL-2026-10-19.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md`, `archiv/README.md`.
- **Kennungen:** Version 2026.10.20, Stand 2026-10-30, Starter-Build r4-27, Kit-Referenz r4-13 (das UI-Kit lädt das geänderte Stylesheet), Prüfskript qa-9 unverändert.
- **Nicht geändert:** JavaScript, Tokenwerte, Inhalte, die optionalen Befunde O-7 bis O-9 der Prüfung 2026.10.19.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 (153.0.8010.12) über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; Headless-Shell 1243; Headless-Shell 1234 (151.0.7922.34), die Playwright 1.62.1 in der CI mit `npx playwright install` lädt, in einem eigenen Browserpfad ausserhalb des Repositorys.

| Prüfung | Ergebnis |
| --- | --- |
| Ableitungen und Build | `npm run generieren`: 17 von 45 abgeleiteten Dateien aktualisiert (Kennungen). `npm run build`: 26 Komponenten, `components/bundle.js` und `_ds_bundle.js` bytegleich mit `d4ab623`. Starter 7 Seiten (Gate draft 0 blockierend, 12 Hinweise), Minimalstarter 4 Seiten (3 Hinweise), Profilbeispiel 4 Seiten (Gate production 0 blockierend, 1 Hinweis `siteUrl`), alle «Build r4-27». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Keine Nebenwirkung | Alle 31 aktiven Vorschauseiten aus `tests/browser.test.mjs` (darunter `Website.dc.html` und das UI-Kit), ganze Seite, je 375 und 1280 px, beide Themes, reduzierte Bewegung, Kennungen im Text gleichgesetzt, gegen `d4ab623`: **124 von 124 pixelgleich**. |
| Gesamte Testsuite | `npm test` dreimal mit Chromium 1243, je einmal mit der Headless-Shell 1243 und der Headless-Shell 1234 wie in der CI: je **119 bestanden**, 0 fehlgeschlagen, 0 übersprungen (bisher 118; neu ist der Test zu W-3, `ok 115`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.20.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle, keine abweichende Zeile gegenüber 2026.10.19; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.20.json) |
| Archiv | `archiv/profilstand-2026-10-30-19/`: 13 Dateien bytegleich mit `d4ab623` (`git show d4ab623:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.19.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 385 Dateien bytegleich (384 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-20.md`). Die SHA-256 steht in `puk-website-profil-2026.10.20.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise von 2026.10.19 und dessen unabhängige Prüfung stehen im [archivierten Prüfbericht 2026.10.19](archiv/profilstand-2026-10-30-19/PRUEFBERICHT.md), die von 2026.10.18 im [archivierten Prüfbericht 2026.10.18](archiv/profilstand-2026-10-30-18/PRUEFBERICHT.md), die von 2026.10.17 mit der unabhängigen Prüfung im [archivierten Prüfbericht 2026.10.17](archiv/profilstand-2026-10-30-17/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Diese Sitzung hat keines der Pakete 2026.10.17 bis 2026.10.19 gebaut oder unabhängig geprüft. Die unabhängige Prüfung von 2026.10.20 muss eine andere Sitzung übernehmen; sie ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
