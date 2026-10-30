# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.17 · Stand 30.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.17 sichert die Regel «keine hellen Komponenten in Bändern» aus 2026.10.15 technisch ab ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md)). Befund W-1 der unabhängigen Prüfung 2026.10.14: Helle Flächen in einem blauen oder nachtblauen Band erbten dessen weisse Text-, Link- und Knopffarben. Sie erhalten jetzt die Werte der Seitenfläche zurück.

Ausgangsstand ist `ad6ce55` (main, Profil 2026.10.16 mit O-1 und O-2, PR #149). Dessen Selbstprüfbericht, Matrixdaten und unverändertes Paket (SHA-256 `787078d8…`) bleiben als [archivierter Stand](archiv/profilstand-2026-10-30-16/) erhalten; dieses Paket wurde nicht unabhängig geprüft. Die technische Korrektur lag zuerst als 2026.10.16 auf `5c235b3` vor (PR #150, Commit `b68875f`, CI grün). Nach dem Merge von PR #149 hat Christa Egger entschieden, sie «als 2026.10.17 neu» aufzubauen. Code, Test und Regeltexte sind übernommen, alle Prüfungen auf dem neuen Ausgangsstand wiederholt.

## Umsetzung

- **Rücksetzregel:** `:where(.puk-web-band,[data-puk-surface="night"]) :where(…)` in `tokens/base.css` und `components/bundle.css`, nach den Regeln der nachtblauen Fläche. Sie setzt `--text-default`, `--text-muted`, `--text-link`, `--text-link-hover`, `--text-link-visited`, `--text-accent`, `--action-quiet-fg` und `--focus-ring` auf die Werte von `:root` sowie `color:var(--text-default)`. Mit Spezifität 0 bleiben die eigenen Farbregeln der Komponenten vorrangig, etwa Blau 125 auf getönten Flächen und die Inline-Werte der versenkten `Card`.
- **Erfasste Flächen:** das neue Kennzeichen `data-puk-light`, `[data-puk-surface]` ausser Nachtblau, `.puk-dialog` (HTML-Dialog und React-`Dialog`), `.puk-disclosure__panel`, `.puk-carousel__slide`, `.puk-filter`, `.puk-longform__figure`, `__figure-side`, `__support`, `__reflection`, `__term-guide>div`, `.puk-web-media`, `input`, `select` und `textarea`.
- **React:** `Card` (ausser `brand` und `inverse`), `Alert` (ausser `emergency`) und `Toast` setzen `data-puk-light` auf ihre Wurzel (`quellcode/komponenten/src/components/content/Card.jsx`, `feedback/Alert.jsx`, `feedback/Toast.jsx`). `components/bundle.js` und `_ds_bundle.js` sind neu gebaut, untereinander bytegleich und bytegleich mit `b68875f`.
- **Regeln:** Leitlinie 02 (Punkt «Keine hellen Komponenten in Bändern» um die technische Absicherung und `data-puk-light` ergänzt), README (Abschnitt «Farbe») und Karte «PUK-Blau». Die Regel aus 2026.10.15 bleibt verbindlich. Dazu `ENTSCHEIDE-PROFIL-2026-10-14.md`, `-15.md` und `-16.md` (Abschnitt «Prüfung»), `ABSCHLUSSENTSCHEIDE.md` und `archiv/README.md`.
- **Kennungen:** Version 2026.10.17, Stand 2026-10-30, Starter-Build r4-24, Kit-Referenz r4-10 (das UI-Kit lädt das geänderte Bundle und Stylesheet), Prüfskript qa-9 unverändert. `ENTSCHEIDE-PROFIL-2026-10-17.md` gehört zum Paket und zur Dokumentationsprüfung (`tools/paket.py`, `tools/pruefe-dokumentation.mjs`).
- **Test:** neu in `tests/profilentscheid-2026-10-29.test.mjs`, neben dem mit 2026.10.16 erweiterten Test zum blauen Band. Dieselben Komponenten stehen auf Weiss, im blauen Band und auf Nachtblau, in beiden Themes:
  - getönte Fläche mit Link, Nebentext und Sekundärknopf;
  - `data-puk-light`-Fläche mit Link und Text;
  - React-`Card` mit Eyebrow, Text, Link und Sekundärknopf, versenkte `Card` mit Link, `Alert` mit Link und `Input`.

  Farbe und Rahmenfarbe im Band müssen jeweils gleich sein wie auf Weiss; dazu keine Skriptfehler. **Gegenprobe:** Mit `components/bundle.css`, `components/bundle.js` und `tokens/base.css` von `ad6ce55` scheitert der Test (`# pass 0`, `# fail 1`): Der Nebentext der getönten Fläche ist im Band `rgb(255, 255, 255)` statt `rgb(100, 100, 100)`. Danach die drei Dateien aus der Sicherung zurück, `git diff` leer.
- **Nicht geändert:** Tokens, Inhalte und die Änderungen von 2026.10.16 (O-1, O-2).

## Tatsächlich ausgeführte Prüfungen

Umgebung: Node 22.22.0, Python 3.13.17, npm 10.9.4, Playwright 1.62.1. Chromium 1243 über `CHROMIUM_EXECUTABLE_PATH=/opt/pw-browsers/chromium`; zusätzlich die Headless-Shell 1243, die der CI entspricht.

| Prüfung | Ergebnis |
| --- | --- |
| Helle Komponenten im Browser | Fixture des neuen Tests mit `styles.css` und `components/bundle.js`, 1280 px, beide Themes, Sichtkontrolle: Alle Komponenten sind im blauen Band und auf Nachtblau lesbar und entsprechen der Darstellung auf Weiss. Einziger sichtbarer Unterschied: Links bleiben im Band unterstrichen. Fotos: [hell](audit-results/2026-10-30-version-2026-10-17/helle-flaechen-light-1280.png), [Kontrast](audit-results/2026-10-30-version-2026-10-17/helle-flaechen-kontrast-1280.png) |
| Keine Nebenwirkung | Alle 29 aktiven Vorschauseiten gegen `ad6ce55` als Ganzseitenfoto bei 1280 px, Standard- und Kontrast-Theme, Versions- und Build-Kennungen im Text gleichgesetzt: **58 von 58 pixelgleich**. Die Vorschau `Website.dc.html` war in beiden Themes pixelgleich. |
| Ableitungen und Build | `npm run generieren` aktualisierte 15 von 45 abgeleiteten Dateien (Kennungen). `npm run build`: 26 Komponenten in `components/bundle.js` und `_ds_bundle.js` (bytegleich). Starter: 7 Seiten (Gate draft 0 blockierend, 12 Hinweise). Minimalstarter: 4 Seiten (3 Hinweise). Profilbeispiel: 4 Seiten (Gate production 0 blockierend, 1 bekannter Hinweis `siteUrl`). Alle mit «Build r4-24». Ein zweiter `npm run build` lässt den Arbeitsstand unverändert. |
| Gesamte Testsuite | `npm test`: dreimal mit Chromium und einmal mit der Headless-Shell, je **117 bestanden**, 0 fehlgeschlagen, 0 übersprungen (116 bisherige Tests einschliesslich des mit 2026.10.16 erweiterten Tests zum blauen Band `ok 113`, dazu der neue Test `ok 114`). |
| UI-Matrix | `npm run test:ui -- --bericht tests/ergebnisse/ui-matrix-2026.10.17.json`: **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.17.json) |
| Archiv | `archiv/profilstand-2026-10-30-16/`: 13 Dateien bytegleich mit `ad6ce55` (`git show ad6ce55:<Datei> \| cmp`); `sha256sum -c` meldet «puk-website-profil-2026.10.16.zip: OK». |
| Paket | `npm run package`, `npm run check:package`: 382 Dateien bytegleich (381 wie bisher, dazu `ENTSCHEIDE-PROFIL-2026-10-17.md`). Die SHA-256 steht in `puk-website-profil-2026.10.17.zip.sha256`; sie kann nicht hier stehen, weil dieser Bericht zum Paket gehört. |

Die Nachweise von 2026.10.16 stehen im [archivierten Prüfbericht 2026.10.16](archiv/profilstand-2026-10-30-16/PRUEFBERICHT.md), die von 2026.10.15 im [archivierten Prüfbericht 2026.10.15](archiv/profilstand-2026-10-30-15/PRUEFBERICHT.md), die der Versionen 2026.10.11 bis 2026.10.14 und die unabhängige Prüfung von 2026.10.14 im [archivierten Prüfbericht 2026.10.14](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md).

## Geltung

Dies ist die technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Dieselbe Sitzung hat das Paket 2026.10.10 unabhängig geprüft und die Versionen 2026.10.11 bis 2026.10.14 sowie 2026.10.17 gebaut. Die unabhängige Prüfung von 2026.10.17 muss darum eine andere Sitzung übernehmen. Sie ist offen und schliesst 2026.10.15 und 2026.10.16 ein; diese beiden Pakete hat die Sitzung gebaut, die 2026.10.14 geprüft hat. Dieser Bericht ist keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe. Andere Browser, reale Geräte, Screenreader und Tests mit der Zielgruppe wurden nicht geprüft. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
