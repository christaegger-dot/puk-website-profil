# Selbstprüfung · Nachbesserung Profilpaket 2026.10.2 (P-1, K-1, W-1 bis W-4)

**15.10.2026 · bauende Sitzung (Claude Code)** im Auftrag der Fachstelle Angehörigenarbeit (Ch. Egger). Diese Sitzung hat das Paket nicht geprüft; die Prüfung (`PRUEFBERICHT.md`) machte eine andere Sitzung.

- **Keine Prüfstufe:** Dies ist die Selbstprüfung der bauenden Sitzung. Die Nachprüfung macht eine Sitzung, die nicht gebaut hat; erst danach wird zusammengeführt.
- **Grundlage:** `ENTSCHEIDE-PROFIL-2026-10-2.md` (Entscheide vom 15.10.2026, Abschnitt «Nachbesserung nach der Prüfung»), `PRUEFBERICHT.md` (Befunde, Nachtrag, «Grundlage zum Entscheid»), `guidelines/00-ablauf-pruefung-und-freigabe.md`.
- **Stand:** Branch `claude/nachbesserung-paket-2026-10-2` auf `main` bei `1047ad6`. Vergleichsstände: `8abc333` (vor dem Paket) und `1047ad6` (Paket vor der Nachbesserung).
- **Artefakt:** Version 47 (`1792071978-1126`), acht Dateien und der Index geändert.
- **Messumgebung:** Chromium 141.0.7390.37 (Playwright), poppler 24.02, Python 3 mit Pillow 12.3. Kein Druck in Firefox oder Safari.
- **Kopie «Depression»:** `templates/website/zz-dep-test/` nach `messung/README.md`; nicht committet. `depression-angehoerige/` und `borderline-angehoerige/` unverändert.
- **Belege:** `nachbesserung/` (Skripte, Rohdaten in `ergebnisse/`, Varianten in `varianten/`, Seitenbilder in `bilder/`; Anleitung `nachbesserung/README.md`).

## Ergebnis je Punkt

| Nr. | Auftrag | Ergebnis | Beleg |
| --- | --- | --- | --- |
| Entscheide | P-1, Kennzeichen und K-1 zuerst ins `ENTSCHEIDE-PROFIL-2026-10-2.md` | **Erfüllt** | Eintrag «P-1, Kennzeichen und K-1 entschieden» oben in der Datei; Abschnitt «Nachbesserung nach der Prüfung» mit Tabelle P-1, Kennzeichen, K-1, W-1 bis W-4; Hinweis in Zeile P-1 der Entscheidtabelle; Ablauf Schritte 2 bis 4 nachgeführt |
| Kennzeichen | `data-print-split` an der Figur; Herkunft entscheiden und begründen; nur Prozesspfad, Entscheidungsweg, Modell in Schritten; Gate meldet andere Muster | **Erfüllt** | **Herkunft: Markup der Figur in `content/`**, nicht vom Build aus `visualPlan`. Begründung im Entscheid (Abschnitt «Nachbesserung nach der Prüfung»): wirkt auch ohne den Build des Starters (Kopiervorlagen, Borderline-Repository), eine Quelle statt zwei, der Build schreibt bisher nie in Figuren. Gate: `print-split` blockiert an anderen Mustern, an einer Figur ohne Schrittliste und an anderen Elementen (`tools/contract.js`) |
| P-1 | Figuren im Druck unteilbar wie in 2026.10.1; nur gekennzeichnete Abfolgen brechen um; Titel, Kern, Anfang zusammen; Kennzeichnung direkt | **Erfüllt** | `components/bundle.css` (Hülle und Rahmen `break-inside:avoid`; mit Kennzeichen teilbar, Schritte unteilbar, `break-before:avoid` am Titel und an der Kennzeichnung). Messungen siehe «Abnahme P-1» |
| K-1 | keine leeren Figurrahmen am Seitenende, keine leere Seite; auch bei gekennzeichneten Figuren | **Erfüllt** an echten Seiten und an gekennzeichneten Abfolgen | Echte Seiten: 0 leere Rahmen, 0 leere Seiten (Paket vorher 86 und 1). Gekennzeichnet fünffach: 0 und 0. Ausnahme ausserhalb der Figur: Nebenbefund N-1 |
| W-1 | Druck ohne Textmarken, an unveränderten Seiten | **Erfüllt** | Keine Textmarken. `druck-messung.cjs` sucht nur Text, den die Seite ohnehin enthält, in `pdftotext -raw`; Rahmen aus Seitenbildern (`rahmen.py`). Die Methode reproduziert K-1 am Paketstand (86 leere Rahmen in 64 PDF) und die 9 Abweichungsfälle (Wegweiser 5, Entstehung 4). Mit dem Detektor der Prüfsitzung (`pruefung/leerer-rahmen.py`): Paket 82 PDF wie im Prüfbericht, neu 20 PDF/28 Seiten wie `8abc333`, je PDF gleiche Treffer 120 von 120 |
| W-2 | Leitlinie: entschiedener Satz wörtlich, «möglichst» und «auch wenn sie kürzer sind» entfallen, neuer Satz zum Kennzeichen; `align-items:start` entfernen oder nur gekennzeichnet behalten und begründen | **Erfüllt** | `guidelines/00-technische-qualitaet.md`, F: Satz «Ist eine Darstellung mit ihrer Liste länger als eine A4-Seite, … Eine leere Seite davor entsteht nicht.» unverändert; beide Wendungen entfallen; neuer Satz zum Kennzeichen; Kennzeichen in der Liste der Gate-Prüfungen. `erklaermuster.css`: `align-items:start` für alle Modelle entfällt; nur gekennzeichnete Modelle stehen im Druck untereinander (Zeichnung über den Schritten), begründet mit Varianten (siehe «Entscheide der bauenden Sitzung», Nr. 2). Anleitung: `README.md` des Starters (neuer Abschnitt «Druck: lange Abfolgen kennzeichnen») und `templates/website/longform/README.md` |
| W-3 | Selbsttest: Fall «Entwurf vom 15.10.2026»; Fall Kennzeichen an unzulässigem Muster; Mutationsprobe | **Erfüllt** | Selbsttest **72/72** (vorher 68): neu «Entwurf vom 15.10.2026», Kennzeichen am Prozesspfad zulässig, an einer Gegenüberstellung blockiert, an der Hülle blockiert. Gleich in Starter, Kopie «Depression» und `gate.html` (Browser). **Mutationsprobe** (`mutationsprobe.sh`, `ergebnisse/mutationsprobe.txt`): Regel «Entwurf» aus → 71/72, FAIL «Entwurf vom 15.10.2026»; Regel «ohne Datum» aus → 71/72; Musterprüfung des Kennzeichens aus → 71/72; Elementprüfung aus → 71/72; Prozesspfad nicht mehr zulässig → 71/72 |
| W-4 | Entscheid Z und Ablauf Schritt 4: «Depression» übernimmt auch `starter.css` | **Erfüllt** | `ENTSCHEIDE-PROFIL-2026-10-2.md`, Entscheid Z (neuer Punkt `starter.css`) und Ablauf Schritt 4. Gemessen: Das `starter.css` der Website weicht vom Starter nur in der Regel `.puk-longform__section[tabindex="-1"]:focus{outline:none}` ab |
| Artefakt, Paket | Artefakt veröffentlichen, ZIP neu, Änderungsprotokoll, Abgleich byte-gleich | siehe «Artefakt und Paket» | Änderungsprotokoll im `README.md`, Eintrag «Version 2026.10.2, nachgebessert nach der Prüfung» |

## Abnahme P-1

A4 in 12 Einstellungen (Rand 0, 10, 15 mm × 80, 90, 100, 110 %), Druck ohne Textmarken, Starter (3 Seiten mit Figuren) und Kopie «Depression» (7 Seiten). Zusammenfassung: `nachbesserung/ergebnisse/auswertung.txt`.

| Messung | Fälle | ganz auf einer Seite | Titel, Kern, Anfang zusammen | Kennzeichnung direkt | leere Seiten | leere Rahmen |
| --- | --- | --- | --- | --- | --- | --- |
| Echte Seiten, **neu** | 204 (17 Figuren × 12) | **204** | 204 | 204 | **0** | **0** |
| Echte Seiten, vorher `8abc333` | 204 | 204 | 204 | 204 | 0 | 0 |
| Echte Seiten, Paket vor der Nachbesserung | 204 | 195 | 204 | 204 | 1 | 86 |
| Abfolgen fünffach, **gekennzeichnet** (Abnahme) | 48 | – | **48** | **48** | **0** | **0** |
| Abfolgen 2-, 3-, 4-, 6-, 8-fach, gekennzeichnet (Robustheit) | 240 | – | 240 | 240 | 1 (N-1) | 0 |
| Abfolgen fünffach, ohne Kennzeichen, neu | 48 | – | 40 | 43 | 35 | 35 |
| Abfolgen fünffach, ohne Kennzeichen, `8abc333` | 48 | – | 40 | 43 | 35 | 35 |

- **Kurze Figuren gleich wie vorher (Vergleich mit `8abc333`):** In allen 204 Fällen stehen Titel, Kernaussage, Anfang, Ende und Kennzeichnung auf derselben Seite wie in `8abc333`. **Gegenprobe:** dieselben neuen Seiten mit der Figurregel von `8abc333` (Rahmen teilbar, Hülle unteilbar; `ergebnisse/gegenprobe-regel-8abc333.css`) ergeben in 120 von 120 PDF dieselbe Seitenzahl und denselben Text auf jeder Seite. Die neue Figurregel verändert an diesen Seiten also nichts gegenüber 2026.10.1.
- **Seitenzahl:** 109 von 120 PDF haben dieselbe Seitenzahl wie `8abc333`; in 11 PDF ist der Ausdruck meist eine Seite kürzer. Ursache sind die übrigen, bereits geprüften Punkte des Pakets (Fusszeile ohne Versionszeile P-7, Verweis im Text P-2, Überschriften im Fluss P-15), nicht die Figurregel (Gegenprobe).
- **Rahmen mit Inhalt bis ans Seitenende:** neu 62, `8abc333` 62 (davon je 25 mit grauem Rest ab 10 % der Seitenhöhe). Das sind Figuren, deren Vertiefung auf die nächste Seite fliesst (Profilentscheid 11.10.2026), kein leerer Rahmen.
- **Gekennzeichnete Abfolgen:** Der Rahmen reicht auf der ersten Seite bis ans Seitenende, mit einem grauen Rest unter dem letzten Schritt (136 Fälle, 16 ab 10 %). So sieht jede Figur aus, die zwischen zwei Schritten umbricht.
- **Kopiervorlagen** (`visualisierungsmuster.html`, `erklaermuster.html`, je 12 Einstellungen): 0 leere Seiten, 0 leere Rahmen. Ein Fund in der Seitenmitte ist der graue Tabellenkopf des Visualisierungsplans, keine Figur. Die Lage je Figur ist dort nicht eindeutig messbar, weil mehrere Figuren dieselbe Kennzeichnung tragen.
- **Bildschirm unverändert:** ganzseitige Bildschirmfotos Paketstand gegen neu, 12 Seiten × 1280 und 360 px × mit und ohne Kennzeichen: 48 von 48 pixelgleich (`bildschirm-gleich.cjs`, `ergebnisse/bildschirm-gleich.json`). Alle neuen Regeln stehen in `@media print`.
- **Gate:** Starter Entwurf 0 blockierend (12 Hinweise wie vorher), Produktion 11 blockierend (erwartet); Kopie «Depression» mit den neuen Werkzeugen 0 und 0; `gate.html` zeigt dieselben Zahlen. Gebaute Seiten des Starters byte-gleich (der Build ist unverändert, Build r4-9).

**Seitenbilder, angesehen** (`nachbesserung/bilder/`):
- `k1-starter-behandlung-0mm-90.png`: Paket mit leeren Rahmen auf S. 1 und S. 2; neu wie `8abc333`.
- `k1-fuer-sich-sorgen-10mm-110.png`: Paket mit leerem Rahmen S. 3 und leerer S. 5; neu wie `8abc333`.
- `k1-je-nach-rolle-10mm-110.png`: Spannungsfeld, Paket mit leerem Rahmen S. 4; neu wie `8abc333`.
- `p1-wegweiser-0mm-90.png`, `p1-entstehung-15mm-110.png`: die Abweichung des Pakets (kurze Abfolge über zwei Seiten); neu wieder als Ganzes wie `8abc333`.
- `lang-gekennzeichnet.png`: Prozesspfad, Entscheidungsweg und Modell in Schritten, fünffach, gekennzeichnet: Titel, Kernaussage und erste Schritte auf einer Seite, Schritte untereinander, Kennzeichnung direkt nach dem letzten Schritt.
- `nebenbefund-abschnittsraster-x6-0mm-80.png`: N-1.

## Entscheide der bauenden Sitzung (Technik, begründet)

1. **Kennzeichen im Markup** statt vom Build (Begründung im Entscheid, Abschnitt «Nachbesserung nach der Prüfung»).
2. **Gekennzeichnete Abfolgen stehen im Druck untereinander, ihre Schritte direkt in der Figurspalte** (`visual-patterns.css` für Prozesspfad und Entscheidungsweg, `erklaermuster.css` für das Modell in Schritten; wie auf schmalen Bildschirmen). Gemessen (`varianten/ergebnisse/auswertung.txt`):
   - Modell in Schritten im Raster, Zeichnung mittig daneben (wie am Bildschirm): Titel, Kern und Anfang nur in 1 von 12 Fällen zusammen.
   - Raster mit Zeichnung oben daneben (`align-items:start`, Paket vor der Nachbesserung): Kennzeichnung in 1 von 12 Fällen erst nach dem Umbruch (Chromium teilt die Kennzeichnung nach ihrer Linie).
   - Prozesspfad und Entscheidungsweg wie am Bildschirm, 2- bis 8-fach: Kennzeichnung direkt nur in 201 von 216 Fällen.
   - Gewählt, untereinander: 48 von 48 und 240 von 240.
   - Ursache: Chromium sucht den früheren Umbruch vor dem letzten Schritt nicht innerhalb einer eigenen Liste (Raster oder Block), wohl aber zwischen den Elementen der Figurspalte.
   - Am Bildschirm ändert sich nichts; ohne Kennzeichen ändert sich auch im Druck nichts.
3. **`break-before:avoid` am Titel nur bei gekennzeichneten Figuren.** Ohne Kennzeichen soll eine Figur genau wie in 2026.10.1 bleiben: Lange Abfolgen ohne Kennzeichen ergeben neu und in `8abc333` dieselben Zahlen (40 · 43 · 35 · 35). Variante «Titelregel für alle Figuren» (`varianten/titel-alle.css`): 0 leere Seiten und 0 leere Rahmen, aber Titel, Kern und Anfang nur 37-mal und Kennzeichnung nur 41-mal zusammen, und das Verhalten weicht von 2026.10.1 ab. Nicht gewählt; siehe Hinweis H-1.
4. **Version und Build bleiben** 2026.10.2 und r4-9: Das Paket ist von keiner Website übernommen, und der Build erzeugt dieselben Seiten.

## Nicht erfüllte Punkte und Hinweise für die Nachprüfung

Alle Abnahmepunkte des Auftrags sind erfüllt. Offen bzw. zur Prüfung:

- **N-1 · Nebenbefund, ausserhalb der Figurregeln, nicht geändert (Prüfbedarf):** Im Robustheitstest (Modell in Schritten sechsfach, gekennzeichnet, 0 mm/80 %) bleibt S. 6 leer. Die Figur endet sauber auf S. 5 mit Kennzeichnung und Vertiefung; danach schiebt Chromium den nächsten Abschnitt («Formen und Abgrenzungen», fast eine Seite hoch) als Ganzes auf S. 7. Ursache ist das Raster aus Überschrift und Text `.puk-longform__section-grid` (unverändert seit vor dem Paket): Mit `display:block` dort verschwindet die leere Seite. Eine Änderung würde den Druck jedes Abschnitts verändern und braucht einen eigenen Entscheid. An den echten Seiten und in der Abnahme (fünffach) tritt der Fall nicht auf.
- **H-1 · Lange Abfolgen ohne Kennzeichen** verhalten sich wie in 2026.10.1: vor ihnen entsteht in 35 von 48 Fällen eine leere Seite mit leerem Rahmenanfang. Das Gate kann fehlende Kennzeichen nicht erkennen (keine Schwelle nach Schrittzahl, Entscheid). Bei der Prüfung jeder Website gehört deshalb zum Druckbild die Frage: Ist jede Abfolge, die länger als eine A4-Seite ist, gekennzeichnet? Heute ist keine Figur von Starter und «Depression» länger als eine A4-Seite.
- **H-2 · Räumliche Darstellungen und Gegenüberstellungen** länger als eine A4-Seite: weiter die Lage von 2026.10.1 (unteilbar). Keine solche Figur vorhanden.
- **H-3 · Nicht geprüft:** Druck in Firefox und Safari (`:has()`, `display:contents` im Druck); echte Drucker. Ohne `:has()` bleibt die Hülle einer gekennzeichneten Figur unteilbar, also die Lage von 2026.10.1.
- **H-4 · Nicht in diesem Auftrag:** die Vorschaukarten des Artefakts (z. B. «VisProzesspfad») nennen das Kennzeichen nicht; der Claude-Skill «puk-website-profil» auf claude.ai ist nicht nachgeführt.
- **Offene Stufe:** Nachprüfung der Nachbesserung durch eine Sitzung, die nicht gebaut hat (Ablauf, Schritt 2). Danach Schritte 3 (Borderline) und 4 («Depression»).

## Artefakt und Paket

- **Artefakt** «PUK Zürich Website-Profil», Version 47 (`1792071978-1126`): geändert `project/README.md`, `components/bundle.css`, `guidelines/00-technische-qualitaet.md`, `templates/website/longform/README.md`, `…/erklaermuster.css`, `…/visual-patterns.css`, `templates/website/psychoeducation-site-starter/README.md`, `…/tools/contract.js`; im Index `project/design-system.json` nur `lastChange`.
- **Abgleich nach dem Veröffentlichen:** alle 286 Dateien unter `project/` aus Version 47 neu geladen; **213 von 213 gemeinsamen Dateien byte-gleich** mit dem Repository, darunter die sieben geänderten Profildateien und `README.md` (`nachbesserung/ergebnisse/artefakt-v47-gemeinsame-dateien-sha256.txt`). Nur im Artefakt stehen wie bisher 73 Dateien: 69 Vorschaukarten, `design-system.json` und drei Dateien unter `assets/`.
- **Paket:** `puk-website-profil-2026.10.2.zip` neu erzeugt mit `nachbesserung/paket-zip.py` (gleiche Regeln wie das bisherige Paket; das Skript reproduziert das Paket von `de10a8d` byte-gleich). 438 Dateien (vorher 313): neu sind der Prüfbericht mit `pruefung/` (43 Dateien), diese Selbstprüfung und `nachbesserung/` (82 Dateien). Entpackt geprüft: Build des Starters 7 Seiten ohne blockierenden Befund, Selbsttest 72/72, Produktionsgate 11 blockierend (erwartet), alle gebauten Seiten des Starters byte-gleich mit dem Repository; Export aus dem entpackten Paket mit `fonts/OFL.txt`. Die Prüfsumme des ZIP steht im Pull Request, nicht hier (die Datei liegt im ZIP).
