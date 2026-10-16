# Nachprüfung · Nachbesserung Profilpaket 2026.10.2 · Ablauf, Schritt 2b

**15.10.2026 · Prüfsitzung (Claude Code)** im Auftrag der Fachstelle Angehörigenarbeit (Ch. Egger). Gestartet hat diese Sitzung die Sitzung, die das Paket gebaut hat, auf Wunsch der Fachstelle; von ihr kam nur der Auftrag. Diese Sitzung hat weder das Paket noch die Nachbesserung gebaut.

- **Keine Doppelarbeit:** Vor Beginn geprüft: keine andere laufende Sitzung (ListAgents), der Branch `claude/nachpruefung-paket-2026-10-2` ohne eigene Commits, kein offener Pull Request zu dieser Nachprüfung. Offen ist #128 (Kennzeichnung der widerlegten Aussagen, Audit F-3); er ändert keine Profildatei.
- **Stand:** geprüft wird `c65db24` (Merge von #126, Nachbesserung `bc679a7`, Basis `1047ad6`). Danach kam nur `review/paket-2026-10-2/FORENSISCHES-AUDIT-2026-10-15.md` dazu (#127, `ce72ee0`). Die Bäume von `bc679a7` und `c65db24` sind gleich.
- **Wichtig zum Ablauf:** #126 wurde zusammengeführt, **bevor** diese Nachprüfung stattfand. Das widerspricht dem Entscheid der Fachstelle «Danach prüft eine Sitzung, die nicht gebaut hat, die Nachbesserung; erst dann wird zusammengeführt.» (Befund NP-1).
- **Grundlage:** `ENTSCHEIDE-PROFIL-2026-10-2.md` (Entscheide vom 15.10.2026, Abschnitt «Nachbesserung nach der Prüfung»), `PRUEFBERICHT.md` mit Nachtrag, `guidelines/00-ablauf-pruefung-und-freigabe.md`. `SELBSTPRUEFUNG-NACHBESSERUNG.md` und `nachbesserung/` wurden nachgerechnet, nicht übernommen.
- **Geändert:** nichts an Inhalten, Code, Leitlinien, Artefakt oder Paket-ZIP. Neu sind nur dieser Bericht und `nachpruefung/` (Skripte, Rohdaten, Seitenbilder).
- **Messumgebung:** Chromium 141 (Playwright), poppler 24.02, Python 3 mit Pillow 12.3. Kein Firefox (in dieser Umgebung nicht installierbar), kein Safari, kein echter Drucker.
- **Kopie «Depression»:** `templates/website/zz-dep-test/` nach `messung/README.md` (Werkzeuge und `starter.css` aus dem Starter, neu gebaut), je eine in `c65db24` und im Arbeitsbaum `1047ad6`. Für `8abc333` dient `depression-angehoerige/` selbst als Stand vorher (wie Prüfbericht und Selbstprüfung). Nicht committet; `depression-angehoerige/` und `borderline-angehoerige/` unverändert.

## Gesamtergebnis

**Schritt 2b ist erledigt.** Alle Punkte sind mit Beleg geprüft; kein kritischer Befund ist offen.

- **P-1, Kennzeichen, K-1, W-1 bis W-4:** erfüllt. Die Kennzahlen der Selbstprüfung stimmen mit meiner eigenen Messung überein (andere Methode, siehe unten). Kleine Abweichungen erklären sich aus den Messverfahren.
- **Wichtig, nicht mehr behebbar:** NP-1 (zusammengeführt vor der Nachprüfung).
- **Optional:** NP-2 bis NP-5 aus der Nachbesserung; N-1, H-1 und NP-6 bestanden schon vorher oder folgen aus dem Entscheid. Dazu die Hinweise F-3 bis F-7 des Audits: alle bestätigt.
- **Nicht geprüft:** Druck in Firefox und Safari, echte Drucker, Druck ohne Hintergrundgrafiken; die Teile zur Borderline-Website (gehören in deren Repository).

## Ergebnis je Punkt

| Nr. | Entscheid und Abnahme | Ergebnis | Beleg |
| --- | --- | --- | --- |
| P-1 Figuren unteilbar | Hülle und Rahmen unteilbar wie in 2026.10.1; nur Abfolgen mit `data-print-split` brechen um. Abnahme: 12 A4-Einstellungen, ohne Textmarken, Starter und Kopie «Depression»: keine leere Seite, kein leerer Rahmen, kurze Figuren gleich wie `8abc333`; Seitenbilder | **Erfüllt** | `components/bundle.css:759–763`. Eigene Messung (`np-druck.cjs`, `np-analyse.py`, `np-vergleich.py`; `ergebnisse/kennzahlen.txt`): 10 Seiten × 12 Einstellungen = 120 PDF, 204 Figurfälle. **Neu:** 0 PDF mit leerer Seite, 0 leere Rahmen am Seitenanfang oder -ende. **Gleich wie `8abc333`:** in 204 von 204 Fällen stehen Titel, Kernaussage, Anfang, Ende und Kennzeichnung auf denselben Seiten. **Gegenprobe mit anderer Methode:** dieselben neuen Seiten mit der Figurregel von `8abc333` (`bundle.css` ohne den neuen Block, per `page.route` ersetzt; `ergebnisse/bundle-regel-8abc333.diff`): **120 von 120 PDF Seitenbild für Seitenbild gleich** (MD5 der Bildpunkte). Die neue Figurregel ändert an echten Seiten also nichts gegenüber 2026.10.1. Seitenzahl gleich wie `8abc333` in 109 von 120 PDF (wie Selbstprüfung; Ursache P-2, P-7, P-15). **Methode erkennt die Fehler:** Paketstand `1047ad6`: 86 leere Rahmen in 64 PDF, 1 leere Seite (`fuer-sich-sorgen` 10 mm/110 %), 9 kurze Abfolgen über zwei Seiten (Wegweiser, Entstehung). Seitenbilder: `nachpruefung/bilder/k1-behandlung-verstehen-0mm-90.png`, `k1-fuer-sich-sorgen-10mm-110.png`, `p1-wegweiser-0mm-90.png` (je Paket, neu, `8abc333`) |
| Kennzeichen | `data-print-split` an der Figur; nur Prozesspfad, Entscheidungsweg, Modell in Schritten; Gate blockiert andere Muster und Elemente; Herkunft begründet | **Erfüllt** | `tools/contract.js:43–46, 409–410, 414`. Herkunft «Markup in `content/`» mit drei Gründen im Entscheiddokument. **Direkt am Gate** (Kopien, Build): Entscheidungsweg und Modell in Schritten gekennzeichnet → 0 blockierend; Kreislauf, Modell in Schritten ohne Schrittliste (`v-is-gefaess`) und Kennzeichen an der Kernaussage → je `print-split` blockierend, Build nicht geschrieben. Selbsttestfälle: Prozesspfad zulässig, Gegenüberstellung und Hülle blockiert. Lücken im Selbsttest: NP-3 |
| K-1 | Keine leeren Figurrahmen am Seitenende, keine leere Seite, auch bei gekennzeichneten Figuren | **Erfüllt** | Echte Seiten 0 und 0 (oben). Gekennzeichnete Abfolgen fünffach: 0 leere Seiten, 0 leere Rahmen in 48 PDF. Robustheit 1-, 2-, 3-, 4-, 6-, 8-fach: 0 leere Rahmen; 1 leere Seite (N-1, ausserhalb der Figur). Kopiervorlagen `visualisierungsmuster.html`, `erklaermuster.html`, 24 PDF: 0 und 0, gleich wie `8abc333` |
| Gekennzeichnete, verlängerte Abfolgen | Titel, Kernaussage und Anfang zusammen; Kennzeichnung direkt | **Erfüllt** | Fünffach, 4 Abfolgen × 12 Einstellungen: **48 von 48** zusammen, **48 von 48** Kennzeichnung direkt. 2- bis 8-fach: 240 von 240 und 240 von 240 (wie Selbstprüfung). Zusätzlich 1-fach (kurze Abfolge **mit** Kennzeichen): 48 und 48, nur 27 von 48 ganz auf einer Seite – darum gehört das Kennzeichen nur an lange Abfolgen (so im README des Starters). Seitenbild `bilder/lang-gekennzeichnet-fuenffach.png`: alle vier Muster, Schritte untereinander, Kennzeichnung direkt nach dem letzten Schritt |
| W-1 | Druck ohne Textmarken; Messung verändert den Umbruch nicht | **Erfüllt** | `nachbesserung/druck-messung.cjs` liest Texte im selben Tab, setzt Medien zurück und druckt ohne DOM-Änderung (gelesen). Meine Messung trennt beides: ein Tab liest nur Texte, ein zweiter lädt und druckt, ohne `evaluate` und ohne `emulateMedia`. Ergebnisse beider Verfahren gleich (Paket 86 Rahmen/1 leere Seite, neu 0/0, Abfolgen 40·43·35). `messung/README.md:21` enthält weiter den widerlegten Satz (F-3, #128 offen) |
| W-2 Leitlinie | Entschiedener Satz wörtlich; «möglichst» und «auch wenn sie kürzer sind» entfallen; Satz zum Kennzeichen | **Erfüllt** | `guidelines/00-technische-qualitaet.md:57`: Satz «Ist eine Darstellung mit ihrer Liste länger als eine A4-Seite, … Eine leere Seite davor entsteht nicht.» wörtlich; beide Wendungen fehlen; neuer Satz zum Kennzeichen; Zeile 72 nennt das Kennzeichen in der Liste der Gate-Prüfungen |
| W-2 `align-items:start` | Entfernen oder nur für gekennzeichnete Figuren behalten und begründen | **Erfüllt**, mit Hinweis NP-2 | `erklaermuster.css:118–127`: Regel für alle Modelle entfällt. Stattdessen gilt für gekennzeichnete Modelle (und in `visual-patterns.css:189–196` für gekennzeichnete Prozesspfade und Entscheidungswege) eine neue Drucklage «untereinander». Begründet mit Varianten (`nachbesserung/varianten/`), dokumentiert im Änderungsprotokoll und in beiden READMEs; nicht als Entscheid im Entscheiddokument (NP-2) |
| W-3 | Fall «Entwurf vom 15.10.2026»; Fall Kennzeichen an unzulässigem Muster; Mutationsprobe | **Erfüllt** | Selbsttest 72/72 in Starter, Kopie «Depression», entpacktem ZIP und `gate.html` (Browser, `ergebnisse/gate-html.txt`). Mutationsprobe der bauenden Sitzung wiederholt: 5 von 5 schlagen fehl (`ergebnisse/mutation-wiederholt-bauende-sitzung.txt`). **Eigene Mutationen** (`np-mutation.sh`, `ergebnisse/mutation-eigene.txt`): «Entwurf» nur ohne Datum → 71/72; «Entwurf» nur als ganzer Status → 71/72; Befund `print-split` nur als Hinweis (Muster bzw. Element) → je 71/72. Nicht erkannt (72/72): Entscheidungsweg oder Modell in Schritten nicht mehr zulässig, Schrittliste nicht mehr verlangt (NP-3). «Gegenüberstellung zulässig» ist eine gleichwertige Mutation (die Figur hat keine Schrittliste und bleibt blockiert) |
| W-4 | «Depression» übernimmt auch `starter.css` | **Erfüllt** | `ENTSCHEIDE-PROFIL-2026-10-2.md`, Entscheid Z (Punkt `starter.css`) und Ablauf Schritt 4. `diff` der beiden `starter.css`: einzige Abweichung `.puk-longform__section[tabindex="-1"]:focus{outline:none}` |
| Bildschirm unverändert | – | **Erfüllt** | Andere Methode als die Bildschirmfotos der Selbstprüfung (`np-bildschirm.cjs`): berechnete Stile aller Eigenschaften und Lage jedes Elements samt `::before`/`::after`, Paketstand gegen neu, 10 Seiten × 1280/360 px × ohne/mit Kennzeichen: **40 von 40 Fällen gleich**, 10 352 Elemente (`ergebnisse/bildschirm-stile.json`). Positivkontrolle unter Druckmedien: 20 von 20 verschieden (`…-kontrolle-druckmedien.json`). Alle neuen Regeln stehen in `@media print` (Diff gelesen) |
| Artefakt | Version 47, alle gemeinsamen Dateien byte-gleich mit `c65db24`; nur lesen | **Erfüllt** | Artefakt in Version `1792071978-1126` (= 47), gelesen, nicht veröffentlicht. 286 Dateien unter `project/` geladen; **213 gemeinsam, 213 byte-gleich** mit `c65db24` (`ergebnisse/artefakt-v47-abgleich.txt`). Nur im Artefakt 73: 69 Vorschaukarten, `design-system.json`, 3 Dateien unter `assets/` (`…-nur-im-artefakt.txt`) |
| Paket-ZIP | gegen `bc679a7`; entpackt bauen, Selbsttest | **Erfüllt** | SHA-256 `20d42bba…4ba4902` (gleich in `bc679a7`, `c65db24`, Arbeitsbaum). 438 Einträge = Dateiliste nach der Paketregel aus `bc679a7`; **438 von 438 byte-gleich**. Entpackt: Build 7 Seiten ohne blockierenden Befund, Selbsttest 72/72, Produktion 11 blockierend (erwartet), 8 HTML des Starters byte-gleich, Export mit `fonts/OFL.txt` und 14 Regeln mit `data-print-split` in `css/site.css` (`ergebnisse/gate-zip.txt`) |

## Kennzahlen der Selbstprüfung, nachgerechnet

| Kennzahl (Selbstprüfung) | Nachgerechnet | Bemerkung |
| --- | --- | --- |
| Echte Seiten neu: 204 ganz, 0 leere Seiten, 0 leere Rahmen | 0 und 0 bestätigt; Lage 204/204 gleich wie `8abc333` | Meine Textsuche zählt nur 171 «ganz», in neu und `8abc333` gleich. Die 33 Fälle betreffen 3 Figuren (`v-dv-schichten`, `v-is-gefaess`, `v-is-kreislauf`), deren Schluss der Kennzeichnung später noch einmal vorkommt (z. B. in den Quellen). Im Seitenbild stehen sie ganz auf einer Seite (`bilder/textsuche-fehltreffer-kontrolle.png`, 0 mm/110 %) |
| Paket: 1 leere Seite, 86 leere Rahmen | 1 und 86 (in 64 PDF) | gleich |
| Gegenprobe Figurregel `8abc333`: 120/120 gleich (Text) | 120/120 gleich (Seitenbild) | andere Methode, gleiches Ergebnis |
| Seitenzahl 109/120 wie `8abc333` | 109/120 | gleich |
| Fünffach gekennzeichnet 48 · 48 · 0 · 0 | 48 · 48 · 0 · 0 | gleich |
| Fünffach ohne Kennzeichen, neu und `8abc333`: 40 · 43 · 35 · 35 | 40 · 43 · 35 leere Seiten · 36 leere Rahmen (beide Stände) | ein PDF mit leerem Rahmen ohne leere Seite; Unterschied der Detektoren, in beiden Ständen gleich |
| Robustheit 240 · 240 · 1 (N-1) · 0 | 240 · 240 · 1 · 0 | gleich, N-1 an derselben Stelle |
| Kopiervorlagen 0 · 0 | 0 · 0 (auch `8abc333`) | gleich |
| Selbsttest 72/72, Mutationsprobe | 72/72; 5/5 wiederholt, 4 eigene erkannt, 3 nicht (NP-3) | – |
| Bildschirm 48/48 pixelgleich | 40/40 Stile und Lage gleich | andere Methode |
| Artefakt 213/213 | 213/213 | gleich |

## Diff `1047ad6..c65db24` Datei für Datei

| Datei | Gegen Entscheid | Bemerkung |
| --- | --- | --- |
| `components/bundle.css` | P-1, Kennzeichen, K-1 | Nur Kommentar und der Block in `@media print`. `.puk-vis-figure{break-inside:avoid}` war in `8abc333` `auto` (Zeile 706); weil alle Figuren in einer unteilbaren Hülle stehen, wirkt das nicht (Gegenprobe 120/120 Seitenbild gleich) |
| `templates/website/longform/erklaermuster.css` | W-2 | `align-items:start` entfällt; neue Drucklage nur mit Kennzeichen (NP-2) |
| `templates/website/longform/visual-patterns.css` | – (nicht im Entscheid genannt) | neue Drucklage «untereinander» nur mit Kennzeichen, in `@media print` (NP-2) |
| `templates/website/psychoeducation-site-starter/tools/contract.js` | Kennzeichen, W-3 | wie entschieden; Build-Kennung bleibt `r4-9` (F-4) |
| `guidelines/00-technische-qualitaet.md` | W-2, Kennzeichen | wie entschieden |
| `templates/website/psychoeducation-site-starter/README.md`, `templates/website/longform/README.md` | Kennzeichen (Anleitung) | stimmen mit dem Code überein |
| `README.md` (Änderungsprotokoll) | – | stimmt; nennt keine Prüfsumme des ZIP (F-5). Satz «204 Figurfälle, alle ganz auf einer Seite» durch Seitenbilder bestätigt |
| `ENTSCHEIDE-PROFIL-2026-10-2.md` | Eintrag der Entscheide, W-4 | Wortlaut deckt sich mit dem Nachtrag im Prüfbericht |
| `puk-website-profil-2026.10.2.zip` | Paket | siehe oben |
| `review/paket-2026-10-2/SELBSTPRUEFUNG-NACHBESSERUNG.md`, `nachbesserung/` | Selbstprüfung | 82 Dateien, keine Arbeitskopie, keine PDF |

Sonst nichts geändert. Websites unter `templates/website/` sind im Diff nicht enthalten.

## Befunde

### Kritisch

Keine.

### Wichtig

**NP-1 · Zusammengeführt vor der Nachprüfung** (Ablauf, Nachbesserung; wie Audit F-1)
- #126 wurde 106 Sekunden nach der Erstellung zusammengeführt, obwohl der Pull Request «Entwurf – bitte nicht zusammenführen» trug und der Entscheid das Zusammenführen erst nach der Nachprüfung vorsah.
- Folge: `main`, ZIP und Artefakt enthielten von 13:53 bis zu dieser Nachprüfung einen ungeprüften Stand. Inhaltlich hat diese Nachprüfung keinen kritischen Fehler gefunden; der Verstoss gegen den Ablauf bleibt.
- Empfehlung wie Audit, Nr. 2: Branch-Schutz für `main` (Entscheid der Fachstelle).
- **Nachtrag 15.10.2026, nach dem Bericht:** #129 (`a0f5f79`) bringt die GitHub-Prüfung «Offene Stufen» und eine Regel in `CLAUDE.md`. Zur Sperre wird sie erst, wenn sie für `main` als erforderlich markiert ist (Einstellung in GitHub, Entscheid der Fachstelle). Nicht Gegenstand dieser Nachprüfung.

### Optional

**NP-2 · Drucklage «untereinander» nicht als Entscheid eingetragen** (in der Nachbesserung)
- Gekennzeichnete Abfolgen stehen im Druck untereinander, beim Modell in Schritten die Zeichnung über den Schritten (`visual-patterns.css:189–196`, `erklaermuster.css:118–127`). Das ist eine sichtbare Druckdarstellung, die der Entscheid nicht nennt; die Fachstelle hatte nur «entfernen oder nur gekennzeichnet behalten» vorgegeben.
- Still geändert ist sie nicht: begründet mit Messungen, im Änderungsprotokoll, in beiden READMEs und als «Entscheid der bauenden Sitzung, Nr. 2» in der Selbstprüfung. Sie wirkt nur mit Kennzeichen; heute trägt keine Figur eines Starters oder der Website «Depression» eines.
- **Prüfbedarf (Darstellung):** Die Fachstelle bestätigt die Drucklage; danach im Entscheiddokument nachtragen.

**NP-3 · Selbsttest deckt nicht alle Kennzeichen-Regeln** (in der Nachbesserung)
- Kein Fall für «Entscheidungsweg zulässig», «Modell in Schritten zulässig» und «zulässiges Muster ohne Schrittliste». Die entsprechenden Mutationen bleiben bei 72/72.
- Das Gate selbst arbeitet richtig (Direktprobe oben). Verlangt war nur ein Fall für ein unzulässiges Muster; das ist erfüllt.

**NP-4 · Kennzeichen wirkt nur an einer Figur direkt in der Hülle** (in der Nachbesserung)
- Die Hülle wird nur über `.puk-vis-wide:has(>.puk-vis-figure[data-print-split])` teilbar. Steht eine gekennzeichnete Figur tiefer verschachtelt, bleibt die Hülle unteilbar (Lage von 2026.10.1, ohne Fehlermeldung). Heute steht jede Figur direkt in ihrer Hülle (17 Figuren, 11 Muster); das Gate prüft es nicht.

**NP-5 · Fast leere Seite vor kurzen Abfolgen** (Folge des Entscheids, bestand vorher)
- Weil kurze Figuren wieder als Ganzes rücken, bleibt vor ihnen teils der grösste Teil einer Seite weiss, z. B. `depression-verstehen` 0 mm/110 % S. 5 (drei Zeilen, dann leer; Figur auf S. 6). Das ist die Lage von 2026.10.1 und so entschieden; keine «leere Seite» im Sinn der Abnahme.

**NP-6 · Zwischentitel allein am Seitenende** (bestand vorher, ausserhalb der Figurregeln)
- Beispiel: `behandlung-und-verlauf` 10 mm/90 %, S. 4 endet mit «Wenn ein Klinikaufenthalt nötig wird», der Text folgt auf S. 5; gleich in `8abc333` (`bilder/o-zwischentitel-am-seitenende-10mm-90.png`). Für Zwischentitel (`h3.puk-site-subheading`) gilt im Druck kein `break-after:avoid`.
- Grobe Zählung (`np-zwischentitel.py`, enthält Fehltreffer bei Überschriften im zweispaltigen Raster): 37 Seitenenden neu, 36 in `8abc333`. Eigene Änderung mit eigenem Entscheid.

### Offene Hinweise der Selbstprüfung

- **N-1 · Raster des Abschnitts** (bestand vorher): bestätigt. Modell in Schritten sechsfach, gekennzeichnet, 0 mm/80 %: S. 6 leer (`bilder/n1-modell-sechsfach-0mm-80.png`). Gegenprobe: mit `@media print{.puk-longform__section-grid{display:block}}` 0 leere Seiten in allen 12 Einstellungen. Die Ursache liegt im Abschnittsraster, nicht in den Figurregeln. An echten Seiten und in der Abnahme (fünffach) tritt der Fall nicht auf. **Beurteilung:** optional; eine Änderung am Raster betrifft den Druck jedes Abschnitts und braucht einen eigenen Entscheid mit Messung an allen Seiten.
- **H-1 · Lange Abfolgen ohne Kennzeichen:** bestätigt. Fünffach ohne Kennzeichen neu und in `8abc333` gleich: 35 von 48 PDF mit leerer Seite (`bilder/h1-ohne-kennzeichen-fuenffach-0mm-100.png`). Das folgt aus dem Entscheid «ausdrücklich, ohne Schwelle»; das Gate kann fehlende Kennzeichen nicht erkennen. Heute ist keine Figur von Starter und «Depression» länger als eine A4-Seite (alle 204 Fälle ganz auf einer Seite). **Beurteilung:** optional. Empfehlung: Die Frage «Ist jede Abfolge, die länger als eine A4-Seite ist, gekennzeichnet?» in die Prüfung Bedienung (Druck) jeder Website aufnehmen.

### Hinweise F-3 bis F-7 des Audits

| Nr. | Beurteilung | Beleg |
| --- | --- | --- |
| F-3 | **Bestätigt**, optional. **Nachtrag:** nach diesem Bericht mit #128 (`31601b6`) behoben – datierte Korrektur in `messung/README.md` und Nachtrag in `SELBSTPRUEFUNG.md` (gelesen) | `messung/README.md:21` «Die Marken verändern den Umbruch nicht messbar.» (Stand `c65db24`) |
| F-4 | **Bestätigt**, optional. `contract.js` geändert, `BUILD = 'r4-9'` gleich; eine Kopie mit altem Gate ist an der Kennung nicht erkennbar | `tools/contract.js:11`; Diff `1047ad6..c65db24` |
| F-5 | **Bestätigt**, optional. Zwei ZIPs mit gleichem Namen: `de10a8d` SHA-256 `2040c743…15373db`, `bc679a7` `20d42bba…4ba4902`; Änderungsprotokoll ohne Prüfsumme | `ergebnisse/gate-zip.txt` |
| F-6 | **Bestätigt**, optional. `lastChange.at` in Version 47: `2026-10-15T12:16:56Z` | `project/design-system.json` |
| F-7 | **Bestätigt**, optional. Skill «puk-website-profil» (synchronisierte Fassung in dieser Umgebung) beschreibt den Druck wie vor der Nachbesserung («Längere Abfolgen … dürfen zwischen Schritten umbrechen») und nennt «68 Fälle» | Skill, Zeilen 93 und 103 |

## Nicht geprüft

- **Druck in Firefox und Safari:** kein Browser verfügbar (Firefox hier nicht installierbar). Offen bleibt damit auch die Wirkung von `:has()` und `display:contents` im Druck dieser Browser (Selbstprüfung H-3).
- **Echte Drucker** und **Druck ohne Hintergrundgrafiken** (Standard vieler Browser): gemessen wurde mit Hintergrund, wie in Prüfbericht und Selbstprüfung. Ohne Hintergrund wäre ein leerer Rahmen ein leeres Kästchen mit Haarlinie; meine Messung zeigt an echten Seiten keinen leeren Rahmen.
- **Teile zur Borderline-Website** (P-1 mit `borderline.css`): nach Entscheid bei der Übernahme in deren Repository.
- **Fachliche Aussagen:** nicht Gegenstand; kein Prüfbedarf aufgefallen.

## Reproduktion

Webserver: 8770 Stamm bei `c65db24` (mit Kopie `zz-dep-test`), 8771 Arbeitsbaum `8abc333`, 8772 Arbeitsbaum `1047ad6` (mit Kopie `zz-dep-test`).

| Skript (`nachpruefung/`) | Prüft |
| --- | --- |
| `np-druck.cjs` | A4-PDF in 12 Einstellungen; getrennter Text- und Drucktab; Ersatz einer CSS-Datei per `page.route`; verlängerte und gekennzeichnete Abfolgen |
| `np-analyse.py` | Seitenbild: leere Seiten, leere Rahmenbänder, MD5 je Seite; Lage der Figurteile aus `pdftotext -bbox` |
| `np-alle.sh`, `np-vergleich.py` | alle Läufe; Kennzahlen (`ergebnisse/kennzahlen.txt`, Rohdaten `ergebnisse/druck/`) |
| `np-bild.py` | Seitenbilder (`bilder/`) |
| `np-bildschirm.cjs` | Bildschirm: berechnete Stile und Lage |
| `np-mutation.sh` | eigene Mutationsprobe des Gates |
| `np-gate-html.cjs` | `gate.html` im Browser |
| `np-zwischentitel.py` | NP-6 (grobe Zählung) |

PDF und Arbeitskopien sind nicht im Repository.
