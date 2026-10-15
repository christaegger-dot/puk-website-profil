# Messungen zum Paket 2026.10.2

Messskripte der bauenden Sitzung vom 15.10.2026. Sie belegen die Selbstprüfung in `../SELBSTPRUEFUNG.md`. Die Prüfsitzung kann sie wiederholen oder eigene Messungen machen.

**Voraussetzungen:**
- Chromium mit Playwright; die Skripte erwarten `/opt/node-tools/node_modules/playwright` und `/opt/pw-browsers/chromium-1194`, sonst die Pfade anpassen.
- `pdfinfo`, `pdftotext` (poppler) und Python 3 mit Pillow.
- Ein Webserver im Repository-Stamm: `python3 -m http.server 8770`.
- Für die Abnahmen an der Website «Depression»: eine Kopie `templates/website/zz-dep-test/` von `depression-angehoerige/`, darin `tools/` (`contract.js`, `build.mjs`, `gate.mjs`, `export.mjs`, `gate-browser.js`) und `starter.css` aus dem Starter, danach `node tools/build.mjs`. **Die Kopie nicht committen.**

| Skript | Prüft | Aufruf |
| --- | --- | --- |
| `printcheck.cjs` | P-1: alle Figuren von Starter und «Depression» als A4-PDF in 12 Einstellungen (Rand 0, 10, 15 mm × 80, 90, 100, 110 %); Seiten von Titel, Kernaussage, Anfang und Ende der Darstellung, Kennzeichnung; leere und fast leere Seiten | `node printcheck.cjs http://localhost:8770 <ergebnis.json> <pdf-ordner>` |
| `printlong.cjs` | P-1: dieselbe Messung mit künstlich verlängerten Abfolgen (Prozesspfad, Entscheidungsweg, Modell in Schritten; jede Liste fünffach), länger als eine A4-Seite | wie oben |
| `printsum.py`, `longsum.py` | Auswertung der beiden Messungen | `python3 printsum.py <ergebnis.json>` |
| `selfcheck.cjs` | P-2 (Grösse des Verweises im Text), P-3 (Höhe und Abstand des E-Mail-Links), P-5 (Ziffernkreise), P-6 (Silbentrennung), P-15 (Bildschirm und Druck) | `node selfcheck.cjs` |
| `selfcheck2.cjs` | P-5 pixelgleich bei 100 %; P-15 Druck vom Seitenanfang und nach dem Scrollen, neue und alte Regel | `node selfcheck2.cjs <ordner>` |
| `gatecmp2.cjs` | P-8: Befunde und Selbsttest in `gate.html` (Starter und Kopie «Depression») | `node gatecmp2.cjs` |
| `p16p17.cjs` | P-16 und P-17: Tastatur, 320 px, reduzierte Bewegung, erzwungene Farben, ohne Skript, Druck | `node p16p17.cjs <ordner-für-bilder>` |

**Methode der Druckmessung:** Die Skripte setzen in einer Messkopie der Seite kleine Textmarken (3 px) an Titel, Kernaussage, Anfang und Ende der Darstellung und an die Kennzeichnung. Danach suchen sie die Marken im Text jeder PDF-Seite. Die Marken verändern den Umbruch nicht messbar.

**Ergebnisse** in `ergebnisse/`:
- `druck-before.json`: Stand vor dem Paket.
- `druck-final.json`: Stand nach dem Paket.
- `druck-long-before.json` und `druck-long-final.json`: dieselben Messungen mit verlängerten Abfolgen.
