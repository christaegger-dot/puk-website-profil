# Entscheide Profil 2026.10.9 · 23.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.8 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-23-8/PRUEFBERICHT.md), PR #138) ergab drei Befunde «wichtig» und fünf «optional». Christa Egger hat am **23.10.2026** in der Prüfsitzung die vorgeschlagene Umsetzung bestätigt («einverstanden, setze um»). Die Umsetzung erfolgt als Version 2026.10.9 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheide

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-1 · Plattform-Bundle** | `_ds_bundle.js` ist keine eigenständige Datei mehr, sondern die bytegleiche Kopie von `components/bundle.js`. Beide entstehen aus denselben Quellen in einem Build-Schritt. | `quellcode/komponenten/build.mjs` schreibt ohne Zielangabe beide Dateien; `npm run build:components` ohne Ziel; Test auf Bytegleichheit in `tests/profilentscheid-2026-10-23.test.mjs`. UI-Kit-Referenz und Vorschau `Website.dc.html` zeigen damit dieselben Komponenten wie das Bundle. |
| **W-2 · Titeltrennung bei 200 % Schrift** | Website-Titel `.puk-web-h1` werden bei Standardschrift nie getrennt (`hyphens: none`). Ist die Titelfläche (`.puk-longform__hero` oder `.puk-web-hero` als Container) schmaler als 12 em ihrer Schrift – das trifft bei 320 bis 375 px mit 200 % Schrift zu, bei Standardschrift nie (14,7 em und mehr) –, trennen sie lange Wörter nach Silben (`hyphens: auto`, nur Wörter ab 10 Zeichen, mindestens 4 Zeichen davor und danach), statt sie an beliebiger Stelle zu brechen. Weil nicht jeder Browser ein deutsches Trennmuster hat, tragen lange Wörter in Mustertiteln weiche Trennstellen (`&shy;`); neue Websites setzen sie in eigenen langen Titelwörtern ebenso. Kein kleinerer Schriftgrad bei vergrösserter Schrift. | `tokens/web.css`, `components/bundle.css`; Mustertitel in `templates/website/*/content/*.html`; Test: bei 320 und 375 px und 200 % Schrift bricht kein Titelwort ausserhalb einer weichen Trennstelle; bei Standardschrift wird kein Titelwort getrennt. Leitlinien 03 und 08, README. |
| **W-3 · Hover-Zustände** | Die Kontrastauflage vom 22.10.2026 gilt auch für Hover-Zustände von Bedienelementen: Auf der grauen Hover-Fläche `--ui-wash` steht Text in `--text-link-on-tint` (Blau 125, 5,79:1), nicht in Blau 100 (4,28:1). | `components/bundle.css` (`.puk-btn--secondary/--ghost:hover`, `.puk-carousel__btn:hover`, `.puk-disclosure__link:hover`, `.puk-dialog__close:hover`), `templates/website/longform/erklaermuster.css` (`.puk-vis-btn:hover`), `Button.jsx` (ghost), `IconButton.jsx`. Leitlinie 02, README. |
| O-1 · UI-Kit-Leiste | Die Leiste der Referenzansicht setzt `--text-link` auf Blau 125. | `ui_kits/website/kit.css` |
| O-2 · Kontrast-Theme-Zahl | Im Entscheiddokument 2026.10.8 wird «mindestens 10,28:1» durch den richtigen Wert 9,68:1 (`puk-blue-25`) ersetzt; die Berichtigung ist dort gekennzeichnet. | `ENTSCHEIDE-PROFIL-2026-10-8.md`; Original im Archiv |
| O-3 · Hover in Figuren | Die feste Linkfarbe `.puk-vis-figure:not(.puk-vis-figure--open) a` vom 09.10.2026 entfällt; die Variablenregel vom 22.10.2026 setzt die Farbe, Hover wechselt wieder nach Schwarz. | `templates/website/longform/visual-patterns.css` |
| O-4 · Notfall-Alert | Links und Hover im `Alert` emergency stehen in Weiss (`--status-danger-fg`, 7,59:1 auf der roten Fläche). | `Alert.jsx` |
| O-5 · Grundlagenkarten | Karten «PUK-Blau» und «Display und Titel» nennen Profilentscheid und Kennzeichnung einheitlich. | `components/Grundlage*/README.md` |

## Grenzen

- Chromium ohne deutsches Trennmuster (etwa der Headless-Browser der Tests) trennt nur an weichen Trennstellen; die automatische Trennung wird in Chrome, Firefox und Safari mit Trennmuster wirksam. Die visuelle Prüfung bei 320 px und 200 % Schrift bleibt Teil der Prüfliste.
- Besuchte und unbesuchte Links bleiben auf getönten Flächen gleich gefärbt; die Titel in Medium bleiben eine gekennzeichnete Abweichung vom CD Manual.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Das Paket `puk-website-profil-2026.10.9.zip` (SHA-256 `ce342ddb…`) hat am 23.10.2026 eine Sitzung geprüft, die es nicht gebaut hat: keine Befunde «kritisch» oder «wichtig», ein Befund «optional»; Ergebnis im [Prüfbericht](PRUEFBERICHT.md), Abschnitt «Unabhängige Prüfung Paket 2026.10.9». Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
