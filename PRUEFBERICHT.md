# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.20 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.20 behebt den Befund **W-3** der unabhängigen Prüfung des Pakets 2026.10.19 (PR #158) und die optionalen Befunde der Prüfungen 2026.10.16 und 2026.10.19 ([ENTSCHEIDE-PROFIL-2026-10-20.md](ENTSCHEIDE-PROFIL-2026-10-20.md)).

Ausgangsstand ist `d4ab623` (main, Profil 2026.10.19 mit der unabhängigen Prüfung, PR #158). Dessen Selbstprüfbericht mit der unabhängigen Prüfung, Matrixdaten und Paket (SHA-256 `914aa4c4…`; geprüft wurde `ec3a97ad…`, Unterschied nur im Prüfbericht) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-19/) erhalten.

## Umsetzung

- **W-3:** Die Rücksetzregel in `tokens/base.css` und wortgleich in `components/bundle.css` erfasst zusätzlich `.puk-site-placeholder`, `.puk-site-safety--direct`, `.puk-app-card`, `-chip`, `-choice`, `-boundary`, `-mini`, `-detail`, `-output`, `-empty`, `-contact-target`, `.puk-vis-layers` und `.puk-vis-btn` (38 statt 25 Einträge). Spezifität 0 und Werte unverändert; eigene Farbregeln der Muster (etwa Blau 125 auf getönten Anwendungsflächen, gedrückte Chips) bleiben vorrangig. Die Token-Dateien stehen weiter als unveränderte Blöcke im Bundle.
- **Test je Eintrag (Mutationsprobe):** Neuer Test «Jeder Eintrag der Rücksetzregel gibt seiner Fläche im Band die Werte der Seitenfläche zurück». Er setzt für jeden der 38 Einträge eine minimale Fläche ins blaue Band, auf Nachtblau und auf Weiss und vergleicht Farbe sowie `--text-default`, `--text-muted`, `--text-link`, `-hover`, `-visited`, `--text-accent`, `--action-quiet-fg` und `--focus-ring`, beide Themes. Bei nativen Formularfeldern vergleicht er nur die Variablen: Auf Weiss haben sie die Browserfarbe `#000`, im Band `#222222` aus der Regel. Der Test verlangt ausserdem, dass seine Liste genau den Selektoren der Regel in beiden Stylesheets entspricht. **Mutationsprobe:** Jeder der 38 Selektoren einzeln aus `components/bundle.css` entfernt, mit einer Kopie des Tests ohne Listenabgleich: **38 von 38 erkannt**; dieselbe Kopie besteht ohne Mutation.
- **Offene Erklärgrafik:** bleibt ohne eigene Fläche und nicht erfasst; Leitlinie 02, README und Karte nennen sie als Grenze («Erklärgrafiken gehören deshalb nie in ein Band»).
- **Herkunftsangabe:** `Button.jsx`, `tokens.json`, Kommentare in `tokens/web.css` und `components/bundle.css` sowie der Testkommentar nennen den Punkt «Knöpfe im blauen Band» statt O-C. Beide JavaScript-Bundles bleiben bytegleich.
- **Dokumenttest:** Der Test «Leitlinie 02 nennt …» prüft zusätzlich den Punkt im Abschnitt Nachtblau, README, Karte «PUK-Blau» mit Anker `#puk-blau` sowie erfasste und nicht erfasste Flächen. **Gegenproben:** Je eine Stelle geändert (Nachtblau-Punkt, README-Satz, Kartenanker, Grenze offene Erklärgrafik): alle vier scheitern mit passender Meldung.
- **Angaben:** `ENTSCHEIDE-PROFIL-2026-10-16.md`, `-18.md` (Nachtrag), `-19.md` («Prüfung») und `ABSCHLUSSENTSCHEIDE.md` nachgeführt; Berichtigung zur Seitenzahl in `ENTSCHEIDE-PROFIL-2026-10-20.md`. `npm run generieren` setzt jetzt auch in `templates/website/psychoeducation-site-starter/gate.html` (`?v=`) und im Starter-README («Build …») den Starter-Build; 47 statt 45 abgeleitete Dateien.
- **Kennungen:** Version 2026.10.20, Stand 2026-10-30, Starter-Build r4-27 (Werkzeuge geändert), Kit-Referenz r4-13 (das UI-Kit lädt das geänderte Stylesheet), Prüfskript qa-9 unverändert.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; zusätzlich die Headless-Shell 1243. Die Headless-Shell 1234, welche die CI verwendet, ist in dieser Umgebung nicht installiert; die CI des Pull Requests prüft damit.

| Prüfung | Ergebnis |
| --- | --- |
| Ableitungen und Build | `npm run generieren`: 19 von 47 abgeleiteten Dateien aktualisiert. `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js`, beide bytegleich mit `d4ab623`. Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-27». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Keine Nebenwirkung | Alle 31 aktiven Vorschauseiten (Liste aus `tests/browser.test.mjs`, darunter `Website.dc.html` und das UI-Kit) gegen `d4ab623` als ganze Seite, je 375 und 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt: **124 von 124 pixelgleich**. Keine Vorlage setzt eine der neu erfassten Flächen in ein Band. |
| Gesamte Testsuite | `npm test`: dreimal mit Chromium 1243 und einmal mit der Headless-Shell 1243, je **119 bestanden**, 0 fehlgeschlagen, 0 übersprungen (bisher 118; neu `ok 116` «Jeder Eintrag der Rücksetzregel …», erweitert `ok 108`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.20.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; keine abweichende Zeile gegenüber 2026.10.19; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.20.json) |
| Archiv | `archiv/profilstand-2026-10-30-19/`: 13 Dateien bytegleich mit `d4ab623` (`git show d4ab623:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.19.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 385 Dateien bytegleich (384 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-20.md`). Die SHA-256 steht in `puk-website-profil-2026.10.20.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise der Versionen 2026.10.17 bis 2026.10.19 und die unabhängigen Prüfungen von 2026.10.17 und 2026.10.19 stehen in den archivierten Prüfberichten [2026.10.17](archiv/profilstand-2026-10-30-17/PRUEFBERICHT.md), [2026.10.18](archiv/profilstand-2026-10-30-18/PRUEFBERICHT.md) und [2026.10.19](archiv/profilstand-2026-10-30-19/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.14 unabhängig geprüft und 2026.10.15, 2026.10.16 und 2026.10.20 gebaut. Die unabhängige Prüfung von 2026.10.20 muss darum eine andere Sitzung übernehmen; sie ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
