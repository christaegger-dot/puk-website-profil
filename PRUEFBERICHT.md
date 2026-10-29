# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.10 · Stand 29.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.10 trägt die Profilentscheide vom 29.10.2026 nach ([ENTSCHEIDE-PROFIL-2026-10-10.md](ENTSCHEIDE-PROFIL-2026-10-10.md)). Neu sind Nachtblau `puk-blue-night` als benannte Schattierung von PUK-Blau mit der Fläche `surface-night`, die nachtblaue Fläche `data-puk-surface="night"` und das Titelbild der Startseite als einzige Ausnahme von «nicht mehrere blaue Felder nebeneinander». Ausgangsstand ist `48c8c89` (Profil 2026.10.9 mit eingetragener unabhängiger Prüfung, PR #140). Dessen Berichte, Matrixdaten und unverändertes Paket (SHA-256 `9e606084…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-29-9/) erhalten.

## Umsetzung

- **Nachtblau (Punkte 2 und 6):** `--puk-blue-night:#182866` und `--surface-night:var(--puk-blue-night)` in `tokens/colors.css` und `components/bundle.css`, beide Token mit Verwendungshinweis in `tokens.json`. Das Theme «Hoher Kontrast» erhält keinen Eintrag; Nachtblau bleibt dort gleich.
- **Nachtblaue Fläche (Punkt 3):** `[data-puk-surface="night"]` in `tokens/base.css` und `components/bundle.css`, nach der allgemeinen Regel `[data-puk-surface]`, damit Blau 125 dort nicht greift. Die Regel setzt:
  - die Fläche `surface-night`;
  - Text, Links, Hover und besuchte Links in `text-on-dark`;
  - Nebentext und Akzent in Blau 25;
  - Links unterstrichen, ausser Links in Knopfform (`a.puk-btn`);
  - `--focus-ring` umgekehrt, also 2 px Nachtblau und 2 px Weiss.

  `.puk-web-band[data-puk-surface="night"]` in `tokens/web.css` und `components/bundle.css` färbt das Band unabhängig von der Reihenfolge der Stylesheets.
- **Regeln (Punkte 4 und 5):** Leitlinie 02 (Vermeiden-Regel mit Ausnahme, neuer Abschnitt «Profilentscheid 29.10.2026»), Leitlinie 08 (Titelbild im Einstieg der Startseite), README (Ebenen-Tabelle, Abschnitt «Farbe»), Karte «PUK-Blau».
- **Kennungen:** Version 2026.10.10, Stand 2026-10-29, Starter-Build r4-17, Kit-Referenz r4-5 (geänderte Stylesheets werden neu geladen), Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-10.md` gehört zum Paket (`tools/paket.py`) und zur Dokumentationsprüfung (`tools/pruefe-dokumentation.mjs`).
- **Neuer Test:** `tests/profilentscheid-2026-10-29.test.mjs`.
  - Tokenwerte und Kontraste in beiden Themes; das Theme «Hoher Kontrast» überschreibt Nachtblau nicht.
  - Leitlinie 02 nennt Geltung, Zählung und die vier Bedingungen des Titelbilds.
  - Im Browser, in beiden Themes: Fläche, Text, Akzent, Links (Farbe, Unterstreichung, Hover), Knopf-Link ohne Unterstreichung, Fokusring innen und aussen, Link ausserhalb der Fläche unverändert.
  - **Gegenprobe:** Ohne die Regel `[data-puk-surface="night"]` in `components/bundle.css` scheitert der Browsertest (`# pass 0`, `# fail 1`); danach wurde die Datei wiederhergestellt.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 wurde über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium` gewählt (START-HIER, «Einrichten»), nicht die zu Playwright 1.62.1 gehörende Headless-Shell.

| Prüfung | Ergebnis |
| --- | --- |
| Ausgangsstand | Auf `48c8c89` vor der Änderung: `npm run build` ohne Dateidifferenzen, `npm test` **109 bestanden**, 0 fehlgeschlagen |
| Ableitungen und Build | `npm run generieren`, `npm run build`, `npm run check:generated` ohne Fehler: «45 abgeleitete Dateien aktuell.» Gebaut wurden 26 Komponenten in `components/bundle.js` und `_ds_bundle.js`, der Starter mit 7 Seiten (Gate draft: 0 blockierend, 12 Hinweise), der Minimalstarter mit 4 Seiten (3 Hinweise) und das Profilbeispiel mit 4 Seiten (Gate production: 0 blockierend, 1 bekannter Hinweis `siteUrl`). Ein zweiter `npm run build` lässt `git status` unverändert. |
| Gesamte Testsuite | `npm test` viermal nach dem Build. Der erste Lauf ergab 111 bestanden und 1 fehlgeschlagen: In der Vorschau `templates/website/Website.dc.html` bei 360 px war React beim Rendern noch nicht geladen («Cannot read properties of undefined (reading 'useState')»). Die unabhängige Prüfung von 2026.10.9 (A5) beschreibt das als zeitabhängigen Fehler; diese Änderung berührt weder `components/bundle.js` noch `_ds_bundle.js`. Die drei folgenden Läufe ergaben je **112 bestanden**, 0 fehlgeschlagen, 0 übersprungen (109 bisherige und drei neue Tests). Danach wurde `a.puk-btn` von der Unterstreichung ausgenommen (eigene Durchsicht) und der Test ergänzt; nach erneutem Build und neuer UI-Matrix ergaben zwei weitere Läufe je **112 bestanden**, 0 fehlgeschlagen. |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.10.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.10.json) |
| Nachtblaue Fläche im Browser | Band mit `data-puk-surface="night"` neben dem blauen Band, 1280 px, beide Themes: Fläche `rgb(24, 40, 102)`, Text und Link Weiss, Link unterstrichen, Kicker Blau 25; Fokusring 2 px Nachtblau und 2 px Weiss. Bildschirmfotos: [Band hell](audit-results/2026-10-29-version-2026-10-10/nachtblau-band-light-1280.png), [Band Kontrast](audit-results/2026-10-29-version-2026-10-10/nachtblau-band-kontrast-1280.png), [Fokus hell](audit-results/2026-10-29-version-2026-10-10/nachtblau-fokus-light.png), [Fokus Kontrast](audit-results/2026-10-29-version-2026-10-10/nachtblau-fokus-kontrast.png) |
| Paket | `npm run package`, `npm run check:package`: 375 Dateien bytegleich (373 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-10.md` und der neue Test), SHA-256 in `puk-website-profil-2026.10.10.zip.sha256` (der Wert kann nicht hier stehen, weil dieser Bericht zum Paket gehört) |
| Kontraste | Weiss auf Nachtblau 13,69:1, Blau 25 10,45:1, Blau 50 6,63:1; Blau 100 2,91:1 und Blau 125 2,15:1 (nicht für Text). Aus den Tokenwerten berechnet, keine Messung an realen Geräten. |

Das Titelbild der Startseite ist eine Regel, kein Bauteil des Profils. Kein Starter und keine Vorlage zeigt ein Titelbild; die Regel wird darum nicht im Browser geprüft, nur im Wortlaut der Leitlinie (Test).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Die unabhängige Prüfung durch eine andere Sitzung ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Nachtblau ist eine Schattierung nach dem CD Manual, keine freigegebene CI-Variante. Tests an realen Geräten, mit Screenreader und mit der Zielgruppe wurden nicht durchgeführt. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
