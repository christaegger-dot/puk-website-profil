# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.13 · Stand 29.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.13 behebt den Befund O-A der unabhängigen Prüfung des Pakets 2026.10.10 ([ENTSCHEIDE-PROFIL-2026-10-13.md](ENTSCHEIDE-PROFIL-2026-10-13.md)): Sekundär- und Ghost-Button waren auf der nachtblauen Fläche schwarz (1,16:1) und kaum sichtbar. Ausgangsstand ist `a4b9c1e` (Profil 2026.10.12, PR #144). Dessen Selbstprüfbericht, Matrixdaten und unverändertes Paket (SHA-256 `22d71a6f…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-29-12/) erhalten; dieses Paket wurde nicht unabhängig geprüft.

## Umsetzung

- **Token `--action-quiet-fg`:** Text und Rahmen der ruhigen Knöpfe, Standard `--puk-black-100`. Es steht in `tokens/colors.css` und `components/bundle.css` neben den übrigen `--action-*`-Tokens und in `tokens.json`.
- **Nachtblaue Fläche:** `[data-puk-surface="night"]` setzt `--action-quiet-fg:var(--text-on-dark)` (`tokens/base.css`, `components/bundle.css`). Die Druckregel aus 2026.10.11 setzt es dort auf `inherit`, damit die Knöpfe auf Papier schwarz bleiben.
- **Knöpfe:** `.puk-btn--secondary` (Text und Rahmen) und `.puk-btn--ghost` (Text) verwenden das Token. Im React-`Button` (`quellcode/komponenten/src/components/core/Button.jsx`) gilt dasselbe für `secondary` (Text und Rahmen; Hover-Text bleibt Schwarz auf `--ui-wash`) und `ghost` (Text; Hover wie bisher Blau 125). `components/bundle.js` und `_ds_bundle.js` sind neu gebaut und bytegleich.
- **Kennungen:** Version 2026.10.13, Stand 2026-10-29, Starter-Build r4-20, Kit-Referenz r4-7 (das UI-Kit lädt das geänderte Bundle), Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-13.md` gehört zum Paket (`tools/paket.py`) und zur Dokumentationsprüfung (`tools/pruefe-dokumentation.mjs`).
- **Neuer Test:** in `tests/profilentscheid-2026-10-29.test.mjs`, beide Themes, mit HTML-Klassen und React-`Button`:
  - auf Nachtblau Text Weiss, beim Sekundär-Knopf auch der Rahmen;
  - ausserhalb der Fläche weiterhin Schwarz;
  - Hover auf `rgb(244, 244, 244)` mit nicht weissem Text;
  - im Druck Schwarz;
  - keine Skriptfehler.

  **Gegenprobe:** Mit dem bisherigen `components/bundle.css` und `components/bundle.js` scheitert genau dieser Test (`# pass 5`, `# fail 1`).
- **Regeln:** Leitlinie 02 (Abschnitt «Profilentscheid 29.10.2026», neuer Punkt «Knöpfe darauf») und README (Nachtblau). `ENTSCHEIDE-PROFIL-2026-10-10.md` und `ENTSCHEIDE-PROFIL-2026-10-12.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md`, `archiv/README.md`.
- **Nicht geändert:** die Befunde O-B und O-C der Prüfung 2026.10.10 (nicht beauftragt) und der Primärknopf auf Nachtblau (schwarze Fläche, weisse Beschriftung 15,91:1).

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 wurde über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium` gewählt.

| Prüfung | Ergebnis |
| --- | --- |
| Knöpfe im Browser | Eigene Fixture mit `styles.css` und `components/bundle.js`, 1280 px, beide Themes. Geprüft sind auf Weiss HTML-Sekundär, HTML-Ghost, React `secondary` und React `ghost`, auf Nachtblau zusätzlich Primär, HTML-Ghost als `<button>` und React `inverse`. Ergebnisse auf Nachtblau: Sekundär und Ghost Text Weiss `rgb(255, 255, 255)`, Sekundär-Rahmen Weiss (13,69:1). Hover auf `rgb(244, 244, 244)`: HTML Blau 125 `rgb(43, 79, 224)` (5,79:1; Kontrast-Theme `rgb(0, 31, 153)`), React `secondary` `rgb(34, 34, 34)` (14,47:1), React `ghost` Blau 125. Druck `rgb(34, 34, 34)`. Auf Weiss alle Werte unverändert Schwarz. Primär und React `inverse` unverändert. Keine Skriptfehler. [Messwerte](audit-results/2026-10-29-version-2026-10-13/messwerte-knoepfe.json); Fotos [hell](audit-results/2026-10-29-version-2026-10-13/knoepfe-light-1280.png), [Kontrast](audit-results/2026-10-29-version-2026-10-13/knoepfe-kontrast-1280.png), [Hover hell](audit-results/2026-10-29-version-2026-10-13/knoepfe-hover-sekundaer-light-1280.png), [Hover Kontrast](audit-results/2026-10-29-version-2026-10-13/knoepfe-hover-sekundaer-kontrast-1280.png) |
| Keine Nebenwirkung | Alle 29 aktiven Vorschauseiten (Übersicht, Musterauswahl, Langform, Anwendungen, Interaktion, drei Startvorlagen, UI-Kit) gegen `a4b9c1e` als Ganzseitenfoto bei 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt: **58 von 58 pixelgleich**. |
| Ableitungen und Build | `npm run generieren` aktualisierte 16 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js` (bytegleich). Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-20». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test`: dreimal nach dem Build, je **115 bestanden**, 0 fehlgeschlagen, 0 übersprungen (114 bisherige Tests und der neue Knopftest `ok 112`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.13.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.13.json) |
| Archiv | `archiv/profilstand-2026-10-29-12/`: 13 Dateien bytegleich mit `a4b9c1e` (`git show a4b9c1e:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.12.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 378 Dateien bytegleich (377 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-13.md`). Die SHA-256 steht in `puk-website-profil-2026.10.13.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachbesserungen W-A (2026.10.11, Druck) und O-D (2026.10.12, Vorschau) sind unverändert enthalten; ihre Tests laufen in der Testsuite mit. Ihre Nachweise stehen in den archivierten Prüfberichten [2026.10.11](archiv/profilstand-2026-10-29-11/PRUEFBERICHT.md) und [2026.10.12](archiv/profilstand-2026-10-29-12/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.10 unabhängig geprüft und die Versionen 2026.10.11 bis 2026.10.13 gebaut. Die unabhängige Prüfung von 2026.10.13 muss darum eine andere Sitzung übernehmen; sie ist offen und schliesst W-A und O-D ein. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
