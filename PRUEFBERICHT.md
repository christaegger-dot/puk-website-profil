# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.17 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.17 behebt die optionalen Befunde **O-3** und **O-4** der unabhängigen Prüfung des Pakets 2026.10.16 ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md)). Werte, Regeln und Darstellung ändern sich nicht.

Ausgangsstand ist `5ad3277` (Branch `pruefung/2026-10-30-paket-2026-10-16`, unabhängige Prüfung 2026.10.16, PR #151). Dessen Prüfbericht mit Selbstprüfung und unabhängiger Prüfung, Matrixdaten und unverändertes Paket (SHA-256 `56ad8d6e…`; geprüft wurde `787078d8…`, der Unterschied liegt nur im Prüfbericht) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-16/) erhalten.

## Umsetzung

- **O-3 · Herkunftsangabe der Knöpfe im blauen Band:** Wo die Knöpfe im blauen Band gemeint sind, heisst die Herkunft jetzt «O-A und Knöpfe im blauen Band» (Kommentar im React-`Button`, `usage` von `action-quiet-fg` in `tokens.json`) bzw. «O-C und Knöpfe im blauen Band» (Kommentar zum blauen Band in `tokens/web.css` und wortgleich in `components/bundle.css`, Kommentar der Druckregel in `components/bundle.css`, Leitlinie 02 Punkt «Blaues Band», Kommentar im Test). In `archiv/README.md` nennt der Eintrag `profilstand-2026-10-29-13/` beide Punkte getrennt. Historische Entscheid- und Berichtsdokumente und die archivierten Stände bleiben unverändert. Beide JavaScript-Bundles bleiben bytegleich, weil der Build Kommentare entfernt; die Token-Dateien stehen weiter als unveränderte Blöcke im Bundle.
- **O-4 · Dokumenttest zu W-1:** Ein neuer Test in `tests/profilentscheid-2026-10-29.test.mjs` prüft die Regel «Keine hellen Komponenten in Bändern» im Abschnitt «PUK-Blau» und den Punkt «Helle Komponenten» im Abschnitt zu Nachtblau von Leitlinie 02 (jeweils innerhalb des Abschnitts), den Satz im README samt Entscheidlink und den Punkt der Karte «PUK-Blau» samt Link auf `#puk-blau`. **Gegenproben** in einer Kopie, je eine Stelle entfernt oder verändert, danach Datei aus der Sicherung zurück: Nachtblau-Punkt entfernt, Punkt «PUK-Blau» entfernt, Satz im README entfernt, Punkt der Karte entfernt, Anker der Karte geändert – in allen fünf Fällen scheitert der Test mit der passenden Meldung.
- **Dokumente:** `ENTSCHEIDE-PROFIL-2026-10-17.md` (neu), `ENTSCHEIDE-PROFIL-2026-10-16.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md`, `archiv/README.md`.
- **Kennungen:** Version 2026.10.17, Stand 2026-10-30, Starter-Build r4-24 (`tools/paket.py` und `tools/pruefe-dokumentation.mjs` führen das neue Entscheiddokument), Kit-Referenz r4-10 (das UI-Kit lädt das geänderte Stylesheet), Prüfskript qa-9 unverändert.

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; zusätzlich die Headless-Shell 1243, die der CI entspricht.

| Prüfung | Ergebnis |
| --- | --- |
| Ableitungen und Build | `npm run generieren` aktualisierte 17 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js`, beide bytegleich mit `5ad3277`. Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-24». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Keine Nebenwirkung | Alle 31 aktiven Vorschauseiten (Liste aus `tests/browser.test.mjs`, darunter `Website.dc.html` und das UI-Kit) gegen `5ad3277` als ganze Seite, je 375 und 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt: **124 von 124 pixelgleich**. |
| Gesamte Testsuite | `npm test`: dreimal mit Chromium und einmal mit der Headless-Shell, je **117 bestanden**, 0 fehlgeschlagen, 0 übersprungen (bisher 116; neu ist der Dokumenttest zu O-4); der neue Dokumenttest ist `ok 109`. |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.17.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle, keine abweichende Zeile gegenüber 2026.10.16; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.17.json) |
| Archiv | `archiv/profilstand-2026-10-30-16/`: 13 Dateien bytegleich mit `5ad3277` (`git show 5ad3277:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.16.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 382 Dateien bytegleich (381 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-17.md`). Die SHA-256 steht in `puk-website-profil-2026.10.17.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise von 2026.10.16 und dessen unabhängige Prüfung stehen im [archivierten Prüfbericht 2026.10.16](archiv/profilstand-2026-10-30-16/PRUEFBERICHT.md), die von 2026.10.15 im [archivierten Prüfbericht 2026.10.15](archiv/profilstand-2026-10-30-15/PRUEFBERICHT.md), die der Versionen 2026.10.11 bis 2026.10.14 und die unabhängige Prüfung von 2026.10.14 im [archivierten Prüfbericht 2026.10.14](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.16 unabhängig geprüft und 2026.10.17 gebaut. Die unabhängige Prüfung von 2026.10.17 muss darum eine andere Sitzung übernehmen; sie ist offen. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
