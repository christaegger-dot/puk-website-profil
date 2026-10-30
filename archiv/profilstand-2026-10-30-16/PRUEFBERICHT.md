# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.16 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.16 behebt die optionalen Befunde **O-1** und **O-2** der unabhängigen Prüfung des Pakets 2026.10.14 ([ENTSCHEIDE-PROFIL-2026-10-16.md](ENTSCHEIDE-PROFIL-2026-10-16.md)). Werte, Regeln und Darstellung ändern sich nicht.

Ausgangsstand ist `5c235b3` (main, Profil 2026.10.15, PR #148). Dessen Selbstprüfbericht, Matrixdaten und unverändertes Paket (SHA-256 `6b2b4aaf…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-15/) erhalten; dieses Paket wurde nicht unabhängig geprüft.

## Umsetzung

- **O-1 · Beschreibung `action-quiet-fg`:** `tokens.json` (`usage`) nennt die nachtblaue Fläche (13,69:1) und das blaue Band (4,71:1). Der Kommentar in `tokens/colors.css` lautet «nachtblaue Fläche und blaues Band: Weiss», wortgleich in `components/bundle.css`; die Token-Dateien stehen weiter als unveränderte Blöcke im Bundle. Der Kommentar im React-`Button` nennt beide Flächen. Beide JavaScript-Bundles bleiben bytegleich, weil der Build Kommentare entfernt.
- **O-2 · Drucktest im blauen Band:** Der Test in `tests/profilentscheid-2026-10-29.test.mjs` enthält einen Knopf-Link `a.puk-btn--secondary` im blauen Band. Er prüft am Bildschirm Weiss und im Druck: Knopf-Link sichtbar, Text und Rahmen `rgb(34, 34, 34)`, `button.puk-btn` mit `display: none`. **Gegenprobe:** Wird im Druck jeder `.puk-btn` ausgeblendet statt nur `button.puk-btn`, scheitert der Test an «light Knopf-Link im Druck sichtbar» (`# pass 0`, `# fail 1`); danach Datei aus der Sicherung zurück. **Berichtigung:** Der Knopftest auf Nachtblau mass im Druck schon vorher einen Knopf-Link und den React-`Button`; O-2 betraf nur den Test zum blauen Band.
- **Dokumente:** `ENTSCHEIDE-PROFIL-2026-10-16.md` (neu), `ENTSCHEIDE-PROFIL-2026-10-15.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md`, `archiv/README.md`.
- **Kennungen:** Version 2026.10.16, Stand 2026-10-30, Starter-Build r4-23 (`tools/paket.py` und `tools/pruefe-dokumentation.mjs` führen das neue Entscheiddokument), Kit-Referenz r4-9 (das UI-Kit lädt das geänderte Stylesheet), Prüfskript qa-9 unverändert.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; zusätzlich die Headless-Shell 1243, die der CI entspricht.

| Prüfung | Ergebnis |
| --- | --- |
| Ableitungen und Build | `npm run generieren` aktualisierte 17 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js`, beide bytegleich mit `5c235b3`. Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-23». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Keine Nebenwirkung | Alle 31 aktiven Vorschauseiten (Liste aus `tests/browser.test.mjs`, darunter `Website.dc.html` und das UI-Kit) gegen `5c235b3` als ganze Seite, je 375 und 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt: **124 von 124 pixelgleich**. |
| Gesamte Testsuite | `npm test`: dreimal mit Chromium und einmal mit der Headless-Shell, je **116 bestanden**, 0 fehlgeschlagen, 0 übersprungen; der erweiterte Test zum blauen Band ist `ok 113`. |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.16.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle, keine abweichende Zeile gegenüber 2026.10.15; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.16.json) |
| Archiv | `archiv/profilstand-2026-10-30-15/`: 13 Dateien bytegleich mit `5c235b3` (`git show 5c235b3:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.15.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 381 Dateien bytegleich (380 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-16.md`). Die SHA-256 steht in `puk-website-profil-2026.10.16.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise von 2026.10.15 stehen im [archivierten Prüfbericht 2026.10.15](archiv/profilstand-2026-10-30-15/PRUEFBERICHT.md), die der Versionen 2026.10.11 bis 2026.10.14 und die unabhängige Prüfung von 2026.10.14 im [archivierten Prüfbericht 2026.10.14](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.14 unabhängig geprüft und 2026.10.15 und 2026.10.16 gebaut. Die unabhängige Prüfung von 2026.10.16 muss darum eine andere Sitzung übernehmen; sie ist offen und schliesst W-1 (2026.10.15) ein. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
