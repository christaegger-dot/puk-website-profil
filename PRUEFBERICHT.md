# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.19 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.19 behebt die optionalen Befunde O-3 bis O-6 der unabhängigen Prüfung 2026.10.17 ([ENTSCHEIDE-PROFIL-2026-10-19.md](ENTSCHEIDE-PROFIL-2026-10-19.md)).

Ausgangsstand ist `46de3de` (Profil 2026.10.18, W-2, PR #154). Dessen Selbstprüfbericht, Matrixdaten und unverändertes Paket (SHA-256 `4f9dbbc5…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-18/) erhalten; dieses Paket wurde nicht unabhängig geprüft.

## Umsetzung

- **O-3:** Leitlinie 02 (Abschnitt «PUK-Blau», Punkt «Keine hellen Komponenten in Bändern», und Nachtblau, Punkt «Helle Komponenten»), README und Karte «PUK-Blau» nennen die zulässigen Knöpfe (`.puk-btn`, React-`Button`) und schliessen Reiter, Formularelemente mit Beschriftungen und Menüs aus. Diese erhalten keine eigenen Bandfarben. Die Entwurfsmarke `.puk-site-draft` des Starters steht neu in der Rücksetzregel (`tokens/base.css`, wortgleich `components/bundle.css`). Der Dokumenttest zur Leitlinie prüft die Klarstellung.
- **O-4:** Leitlinie 02 beschreibt die Vererbung als das, was ohne Absicherung geschähe; Karte «PUK-Blau» erwähnt die Absicherung und `data-puk-light`; `ABSCHLUSSENTSCHEIDE.md` verweist für 2026.10.15 auf die Prüfung 2026.10.17 (als berichtigt gekennzeichnet); Kommentare in `tokens/base.css`, `components/bundle.css`, `Card.jsx`, `Alert.jsx` datieren W-1 auf den 30.10.2026, der Testkommentar verweist auf `-17.md`.
- **O-5:** Berichtigung zum archivierten Prüfbericht 2026.10.17 in der Entscheiddatei; Archive unverändert. Dieser Bericht nennt die Headless-Shell 1234 als CI-Entsprechung und 30 Seiten.
- **O-6:** Der Test «Helle Komponenten in blauem Band und Nachtblau zeigen dieselben Farben wie auf Weiss» (`tests/profilentscheid-2026-10-29.test.mjs`) prüft jetzt getönte Fläche (Link, Nebentext, Sekundär, Ghost, Knopf-Link), `data-puk-light`, HTML-Dialog (Titel, Schliessknopf, Text, Link, Sekundär), Filter (Feld, Status), Langform-Figur und -Stütze, Medienplatzhalter, Entwurfsmarke, React `Card` (mit Eyebrow, versenkt), `Alert`, `Toast`, `Input`, `Select`, `Textarea` und das geöffnete `DisclosureMenu`. Farbe, Rahmen und Fläche müssen im Band gleich sein wie auf Weiss: im Ruhezustand und Druck für alle; Hover für Knöpfe, Links und Schliessknopf; Fokus und gedrückt ohne Hover (CDP) zusätzlich mit Fokusring für Knöpfe, Links und Felder. Beide Themes. Der Hover des Menüeintrags ist nicht automatisch geprüft, weil das Menü beim Fokuswechsel schliesst.
- **Gegenprobe:** In einem Arbeitsbaum von `46de3de` mit nur der neuen Testdatei scheitert der erweiterte Test (`# pass 0`, `# fail 1`; Entwurfsmarke auf Nachtblau `rgb(255, 255, 255)` statt `rgb(34, 34, 34)`); mit zusätzlich dem neuen `components/bundle.css` besteht er.
- **Nicht geändert:** Tokens, Werte, React-Verhalten, Inhalte. Beide Bundles bytegleich mit 2026.10.18 (Kommentare werden beim Bau entfernt).
- **Kennungen:** Version 2026.10.19, Stand 2026-10-30, Starter-Build r4-26, Kit-Referenz r4-12, Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-19.md` gehört zum Paket und zur Dokumentationsprüfung.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 (153.0.8010.12) über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; Headless-Shell 1243; Headless-Shell 1234 (151.0.7922.34), die Playwright 1.62.1 in der CI lädt.

| Prüfung | Ergebnis |
| --- | --- |
| Entwurfsmarke im Browser | Eigene Messung mit `starter.css`, 1280 px, beide Themes: im blauen Band und auf Nachtblau `#222222` auf Weiss (15,91:1) wie auf Weiss; vorher auf Nachtblau 1,00:1. |
| Keine Nebenwirkung | Alle 30 aktiven Vorschauseiten nach `tests/browser.test.mjs` und `Website.dc.html`, ganze Seite, 1280 px, beide Themes, Kennungen gleichgesetzt, gegen `46de3de`: **62 von 62 pixelgleich**. |
| Ableitungen und Build | `npm run generieren`: 17 von 45 abgeleiteten Dateien aktualisiert (Kennungen). `npm run build`: 26 Komponenten, Bundles unverändert. Starter 7 Seiten (Gate draft 0 blockierend, 12 Hinweise), Minimalstarter 4 Seiten (3 Hinweise), Profilbeispiel 4 Seiten (Gate production 0 blockierend, 1 Hinweis `siteUrl`), alle «Build r4-26». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test` je einmal mit Chromium 1243, mit der Headless-Shell 1243 und mit der Headless-Shell 1234 wie in der CI: je **118 bestanden**, 0 fehlgeschlagen, 0 übersprungen (Zahl unverändert; der Test zu hellen Komponenten ist erweitert, der Dokumenttest zur Leitlinie prüft zusätzlich die Klarstellung O-3). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.19.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.19.json) |
| Archiv | `archiv/profilstand-2026-10-30-18/`: 13 Dateien bytegleich mit `46de3de` (`git show 46de3de:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.18.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 384 Dateien bytegleich (383 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-19.md`). Die SHA-256 steht in `puk-website-profil-2026.10.19.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise von 2026.10.18 stehen im [archivierten Prüfbericht 2026.10.18](archiv/profilstand-2026-10-30-18/PRUEFBERICHT.md), die von 2026.10.17 mit der unabhängigen Prüfung im [archivierten Prüfbericht 2026.10.17](archiv/profilstand-2026-10-30-17/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.17 unabhängig geprüft und 2026.10.18 und 2026.10.19 gebaut. Die unabhängige Prüfung von 2026.10.19 muss darum eine andere Sitzung übernehmen; sie ist offen und schliesst 2026.10.18 ein. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
