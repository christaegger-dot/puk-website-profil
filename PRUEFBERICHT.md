# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.14 · Stand 29.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.14 schliesst die übrigen Punkte der unabhängigen Prüfung des Pakets 2026.10.10 ab ([ENTSCHEIDE-PROFIL-2026-10-14.md](ENTSCHEIDE-PROFIL-2026-10-14.md)):

- den gedrückten Zustand der Knöpfe auf Nachtblau, dessen Korrektur nach dem Merge von PR #145 ankam;
- O-B, die Karte «PUK-Blau»;
- O-C, Links, Akzent und Nebentext im blauen Band;
- die Knöpfe im blauen Band.

Ausgangsstand ist `828413c` (Profil 2026.10.13, PR #145). Dessen Selbstprüfbericht, Matrixdaten und unverändertes Paket (SHA-256 `ce36829b…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-29-13/) erhalten; dieses Paket wurde nicht unabhängig geprüft.

## Umsetzung

- **Gedrückt ohne Hover (O-A, Nachtrag):** `:is([data-puk-surface="night"],.puk-web-band:not([data-puk-surface])) :is(.puk-btn--secondary,.puk-btn--ghost):active:not(:hover){color:var(--puk-black-100)}` in `components/bundle.css`, direkt nach der Regel, die gedrückten Knöpfen die Fläche `--ui-field` gibt. Mit Hover bleibt Blau 125 aus der Hover-Regel. Die Korrektur stammt aus Commit `e9f23a2`, der nach dem Merge von PR #145 gepusht wurde; übernommen sind hier nur CSS und Test.
- **Blaues Band (O-C und Knöpfe):** `.puk-web-band:not([data-puk-surface])` in `tokens/web.css` und `components/bundle.css` setzt `--text-link`, `--text-link-hover`, `--text-link-visited`, `--text-accent`, `--text-muted` und `--action-quiet-fg` auf `--text-on-dark`. Eine zweite Regel unterstreicht dort Links ausser `a.puk-btn`. Im Druckblock setzt eine Regel mit demselben Selektor, also gleicher Spezifität, diese Variablen auf `inherit`. Nachtblau und Flächen mit `data-puk-surface` sind ausgenommen. `.surface-brand` kommt im Profil nur in der Druckregel vor und wurde nicht erweitert.
- **Karte «PUK-Blau» (O-B):** neue Punkte «Blaues Band» und «Ausnahme Titelbild» mit den vier Bedingungen und einem Verweis auf Leitlinie 02; «Vermeiden» ohne den bisherigen Nebensatz.
- **Regeln:** Leitlinie 02 (Abschnitt «PUK-Blau», neuer Punkt «Blaues Band»; Punkt «Knöpfe darauf» um den gedrückten Zustand ergänzt) und README (Abschnitt «Farbe»). `ENTSCHEIDE-PROFIL-2026-10-10.md` und `ENTSCHEIDE-PROFIL-2026-10-13.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md`, `archiv/README.md`.
- **Kennungen:** Version 2026.10.14, Stand 2026-10-29, Starter-Build r4-21, Kit-Referenz r4-8 (das UI-Kit lädt das geänderte Stylesheet), Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-14.md` gehört zum Paket und zur Dokumentationsprüfung.
- **Tests:** in `tests/profilentscheid-2026-10-29.test.mjs`.
  - Der Knopftest prüft zusätzlich den gedrückten Zustand auf Nachtblau mit CDP `CSS.forcePseudoState`.
  - Neuer Test für das blaue Band, beide Themes:
    - Kicker, Text, Link, Nebentext, Sekundär und Ghost in Weiss, Link unterstrichen, Sekundär-Rahmen weiss;
    - deaktivierter Knopf wie auf Weiss;
    - Hover auf `rgb(244, 244, 244)`;
    - gedrückt in Schwarz;
    - im Druck Link und Kicker wie auf Weiss, Text und Knöpfe Schwarz.
  - **Gegenproben:**
    - Mit `components/bundle.css` und `tokens/web.css` von `main` scheitern beide Prüfungen (`# pass 5`, `# fail 2`).
    - Ohne die Druckregel scheitert der Bandtest an «light #link Druck».

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 wurde über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium` gewählt; zusätzlich die Headless-Shell 1243, die der CI entspricht.

| Prüfung | Ergebnis |
| --- | --- |
| Bänder im Browser | Eigene Fixture: Weiss, blaues Band und Nachtblau mit Kicker, Titel, Text, Link, Nebentext, Primär, Sekundär, Ghost, deaktiviertem Knopf sowie React `secondary` und `inverse`. Beide Themes, 375 und 1280 px, keine Skriptfehler, kein waagrechter Überlauf. **Blaues Band:** Fläche `rgb(60, 100, 255)` (Kontrast-Theme `rgb(0, 40, 194)`). Kicker, Text, Link (unterstrichen, Hover Weiss), Nebentext, Sekundär mit Rahmen, Ghost und React `secondary` stehen in `rgb(255, 255, 255)`, also 4,71:1 bzw. 10,08:1. Hover der Knöpfe auf `rgb(244, 244, 244)` in Blau 125 bzw. Schwarz. Gedrückt `rgb(34, 34, 34)` auf `rgb(240, 243, 255)`. Deaktiviert wie auf Weiss. Druck: Text und Knöpfe `rgb(34, 34, 34)`, Link und Kicker wie auf Weiss, Nebentext wie auf Weiss. **Nachtblau:** unverändert gegenüber 2026.10.13, gedrückt jetzt Schwarz. **Weiss:** unverändert. [Messwerte](audit-results/2026-10-29-version-2026-10-14/messwerte-baender.json); Fotos [hell 1280](audit-results/2026-10-29-version-2026-10-14/baender-light-1280.png), [Kontrast 1280](audit-results/2026-10-29-version-2026-10-14/baender-kontrast-1280.png), [hell 375](audit-results/2026-10-29-version-2026-10-14/baender-light-375.png), [Hover hell](audit-results/2026-10-29-version-2026-10-14/baender-hover-sekundaer-light-1280.png) |
| Keine Nebenwirkung | Alle 29 aktiven Vorschauseiten sowie die Vorschau `Website.dc.html` (mit blauem Band und Knopf `inverse`) gegen `828413c` als Ganzseitenfoto bei 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt: **60 von 60 pixelgleich**. |
| Ableitungen und Build | `npm run generieren` aktualisierte 16 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js` (bytegleich, unverändert). Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-21». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test`: dreimal mit Chromium und einmal mit der Headless-Shell, je **116 bestanden**, 0 fehlgeschlagen, 0 übersprungen (115 bisherige Tests, der erweiterte Knopftest `ok 112` und der neue Bandtest `ok 113`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.14.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.14.json) |
| Archiv | `archiv/profilstand-2026-10-29-13/`: 13 Dateien bytegleich mit `828413c` (`git show 828413c:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.13.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 379 Dateien bytegleich (378 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-14.md`). Die SHA-256 steht in `puk-website-profil-2026.10.14.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachbesserungen W-A (2026.10.11), O-D (2026.10.12) und O-A (2026.10.13) sind enthalten; ihre Tests laufen in der Testsuite mit. Ihre Nachweise stehen in den archivierten Prüfberichten [2026.10.11](archiv/profilstand-2026-10-29-11/PRUEFBERICHT.md), [2026.10.12](archiv/profilstand-2026-10-29-12/PRUEFBERICHT.md) und [2026.10.13](archiv/profilstand-2026-10-29-13/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.10 unabhängig geprüft und die Versionen 2026.10.11 bis 2026.10.14 gebaut. Die unabhängige Prüfung von 2026.10.14 muss darum eine andere Sitzung übernehmen; sie ist offen und schliesst W-A, O-D und O-A ein. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
