# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.15 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.15 setzt den Befund **W-1** der unabhängigen Prüfung des Pakets 2026.10.14 als Regel um ([ENTSCHEIDE-PROFIL-2026-10-15.md](ENTSCHEIDE-PROFIL-2026-10-15.md)): In blauen und nachtblauen Bändern stehen keine hellen Komponenten. Stylesheet, Tokens und Komponenten bleiben unverändert.

Ausgangsstand ist `65ab892` (Profil 2026.10.14 mit der unabhängigen Prüfung, PR #147). Dessen Selbstprüfbericht mit der unabhängigen Prüfung, Matrixdaten und Paket (SHA-256 `2e375f61…`; geprüft wurde `1c6fc473…`, Unterschied nur im Prüfbericht) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-14/) erhalten.

## Umsetzung

- **Regel (W-1):** Leitlinie 02, Abschnitt «PUK-Blau», neuer Punkt «Keine hellen Komponenten in Bändern»: In ein Band, blau oder nachtblau, gehören nur Kicker, Titel, Text, Links, Nebentext und Knöpfe; Karten, Hinweise, Karussell-Folien, Dialoge, getönte Flächen und andere helle Flächen stehen ausserhalb. Im Abschnitt zu Nachtblau verweist der Punkt «Helle Komponenten» darauf. README (Abschnitt «Farbe») und Karte «PUK-Blau» nennen die Regel kurz.
- **Nicht geändert:** `components/bundle.css`, `tokens/`, `tokens.json`, React-Komponenten und beide Bundles. Die Regel wird nicht technisch erzwungen; Gate und Tests prüfen nicht, ob eine Website helle Komponenten in ein Band setzt.
- **Dokumente:** `ENTSCHEIDE-PROFIL-2026-10-15.md` (neu), `ENTSCHEIDE-PROFIL-2026-10-14.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md` (Prüfung 2026.10.14 erledigt, neuer Abschnitt 2026.10.15), `archiv/README.md`.
- **Kennungen:** Version 2026.10.15, Stand 2026-10-30, Starter-Build r4-22 (`tools/paket.py` und `tools/pruefe-dokumentation.mjs` führen das neue Entscheiddokument), Kit-Referenz r4-8 und Prüfskript qa-9 unverändert.
- **Test:** Der Dokumenttest zu Leitlinie 02 in `tests/profilentscheid-2026-10-29.test.mjs` prüft zusätzlich die neue Regel. **Gegenprobe:** Ohne den neuen Punkt in Leitlinie 02 scheitert er mit «Keine hellen Komponenten in Bändern» (`# pass 0`, `# fail 1`).

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; zusätzlich die Headless-Shell 1243, die der CI entspricht.

| Prüfung | Ergebnis |
| --- | --- |
| Ableitungen und Build | `npm run generieren` aktualisierte 15 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js`, beide unverändert. Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-22». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Keine Nebenwirkung | Alle 31 aktiven Vorschauseiten (Liste aus `tests/browser.test.mjs`, darunter `Website.dc.html` und das UI-Kit) gegen `65ab892` als ganze Seite, je 375 und 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt: **124 von 124 pixelgleich**. |
| Gesamte Testsuite | `npm test`: dreimal mit Chromium und einmal mit der Headless-Shell, je **116 bestanden**, 0 fehlgeschlagen, 0 übersprungen (der erweiterte Dokumenttest zu Leitlinie 02 ist `ok 108`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.15.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.15.json) |
| Archiv | `archiv/profilstand-2026-10-30-14/`: 13 Dateien bytegleich mit `65ab892` (`git show 65ab892:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.14.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 380 Dateien bytegleich (379 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-15.md`). Die SHA-256 steht in `puk-website-profil-2026.10.15.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise der Versionen 2026.10.11 bis 2026.10.14 und die unabhängige Prüfung von 2026.10.14 stehen im [archivierten Prüfbericht 2026.10.14](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.14 unabhängig geprüft. Die unabhängige Prüfung von 2026.10.15 muss darum eine andere Sitzung übernehmen; sie ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
