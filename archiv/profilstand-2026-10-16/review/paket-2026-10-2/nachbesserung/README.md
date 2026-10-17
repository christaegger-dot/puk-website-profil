# Messungen zur Nachbesserung des Pakets 2026.10.2

Messskripte der bauenden Sitzung der Nachbesserung vom 15.10.2026. Sie belegen `../SELBSTPRUEFUNG-NACHBESSERUNG.md`. Die Prüfsitzung kann sie wiederholen oder eigene Messungen machen.

**Methode (W-1): Druck ohne Textmarken.** Die Skripte drucken die unveränderten Seiten. Gesucht wird nur Text, den die Seite ohnehin enthält (Titel, Kernaussage, erster und letzter Teil der Darstellung, sichtbare Kennzeichnung), im Text jeder PDF-Seite aus `pdftotext -raw` (Reihenfolge des Inhaltsstroms, nicht der Spalten). Leere Seiten: Seiten ohne Text. Figurrahmen: aus dem Seitenbild (`rahmen.py`). Verändert wird eine Seite nur in den ausdrücklich genannten Tests: Listen verlängert (`--lang`), Kennzeichen gesetzt (`--kennzeichen`), zusätzliche Druckregeln für Varianten (`--css`).

**Voraussetzungen:**
- Chromium mit Playwright unter `/opt/node-tools/node_modules/playwright` und `/opt/pw-browsers/chromium-1194` (sonst Pfade anpassen); `pdfinfo`, `pdftotext`, `pdftoppm` (poppler); Python 3 mit Pillow.
- Webserver im Repository-Stamm auf Port 8770; der Vergleichsstand `8abc333` (vor dem Paket) als eigener Arbeitsbaum auf 8771; der Paketstand vor der Nachbesserung (`1047ad6`) als Arbeitsbaum auf 8772.
- In 8770 und 8772 die Kopie `templates/website/zz-dep-test/` von `depression-angehoerige/` mit `tools/` und `starter.css` aus dem Starter, danach `node tools/build.mjs` (wie `../messung/README.md`). **Nicht committen.** Für 8771 dient `depression-angehoerige/` selbst als Stand vorher (wie im Prüfbericht).

| Skript | Prüft | Aufruf |
| --- | --- | --- |
| `druck-messung.cjs` | A4-PDF in 12 Einstellungen (Rand 0, 10, 15 mm × 80, 90, 100, 110 %); je Figur die Seiten von Titel, Kernaussage, Anfang, Ende und Kennzeichnung; leere Seiten; Text je Seite als Prüfsumme | `node druck-messung.cjs <basis-url> <website> <ergebnis.json> <pdf-ordner> [--lang] [--faktor=<n>] [--kennzeichen] [--css=<datei>] <seite …>` |
| `rahmen.py` | Figurrahmen je Seite: «leer» (kein Inhalt, K-1) oder «Rest» (Rahmen mit Inhalt bis ans Seitenende) | `python3 -I rahmen.py <pdf-ordner> <ergebnis.json>` |
| `alle-messungen.sh` | alle Messungen der Selbstprüfung: echte Seiten neu, `8abc333`, Paketstand; Kopiervorlagen; Gegenprobe mit der Figurregel von `8abc333`; Abfolgen fünffach mit und ohne Kennzeichen; Robustheit 2- bis 8-fach | `sh alle-messungen.sh <arbeitsordner> <ergebnis-ordner>` |
| `auswertung.py` | Kennzahlen aus den Ergebnissen | `python3 -I auswertung.py ergebnisse` |
| `varianten/varianten.sh` | Varianten der Drucklage gekennzeichneter Abfolgen, die die gewählte Regel begründen | `sh varianten/varianten.sh <arbeitsordner> varianten/ergebnisse` |
| `mutationsprobe.sh` | W-3: je eine Regel des Gates in einer Kopie abgeschaltet → Selbsttest muss fehlschlagen | `sh mutationsprobe.sh <starter-ordner> <arbeitsordner>` |
| `bildschirm-gleich.cjs` | Bildschirm unverändert: ganzseitige Bildschirmfotos Paketstand gegen neu, 1280 und 360 px, mit und ohne Kennzeichen | `node bildschirm-gleich.cjs <arbeitsordner>` |
| `bilder.py` | Seitenbilder der Stichproben | `python3 -I bilder.py <ausgabe.png> "<beschriftung>|<pdf>|<von>|<bis>" …` |
| `paket-zip.py` | Paket-ZIP nach den Regeln des bisherigen Pakets (reproduziert `puk-website-profil-2026.10.2.zip` von `de10a8d` byte-gleich) | im Stamm: `python3 -I review/paket-2026-10-2/nachbesserung/paket-zip.py <ziel.zip>` |

**Ergebnisse** in `ergebnisse/` (Zusammenfassung `ergebnisse/auswertung.txt`), Varianten in `varianten/ergebnisse/`, Seitenbilder in `bilder/`. PDF und Seitenbilder der Messläufe sind Arbeitsstände und nicht im Repository.

**Achtung Playwright:** `page.emulateMedia({media:'print'})` wirkt auch auf `page.pdf`. `druck-messung.cjs` liest die Texte unter Druckmedien und setzt vor dem Drucken auf `null` zurück.
