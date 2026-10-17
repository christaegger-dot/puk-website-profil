# Prüfung · Nachtrag F-4, F-5, F-7 zum Profilpaket 2026.10.2 (#131)

**16.10.2026 · Prüfsitzung (Claude Code)** im Auftrag der Fachstelle Angehörigenarbeit: «Prüfe den Nachtrag in #131 nach dem Abschnitt ‹Prüfung und Freigabe›, als Sitzung, die nicht gebaut hat.» Den Auftrag hat die Fachstelle direkt erteilt, nicht die bauende Sitzung (Audit, F-8). Diese Sitzung hat weder das Paket noch die Nachbesserung noch den Nachtrag gebaut.

- **Keine Doppelarbeit:** Vor Beginn geprüft: keine andere laufende Sitzung (ListAgents); offen sind nur #131 und #9 (Bestand Borderline, nicht betroffen); kein Branch zu dieser Prüfung.
- **Stand:** geprüft wird `1ba2568`, der einzige Commit von #131 auf `fe5a9e4` (`main`). Artefakt «PUK Zürich Website-Profil» in Version 48 (`1792129173-abbb`), zur Zeit der Prüfung die aktuelle Version.
- **Grundlage:** Auftrag in #131, Abschnitt «Offene Stufen» (Build-Kennung, Prüfsummen und Prüfsummendatei, Kartentexte, Artefakt Version 48 gegen das Repository, Paket-ZIP entpackt). Dazu die Hinweise F-4 bis F-7 und die Empfehlungen 5 und 6 im forensischen Audit sowie `guidelines/00-ablauf-pruefung-und-freigabe.md`. Die Angaben in `NACHTRAG-F4-F5-F7.md` habe ich nachgerechnet, nicht übernommen.
- **Geändert:** nichts an Inhalten, Code, Leitlinien und Paket-ZIP. Das Artefakt habe ich nur gelesen, nicht veröffentlicht. Neu sind nur dieser Bericht und `pruefung-nachtrag/` (Skripte und Ergebnisse).
- **Umgebung:** Node 22.22, Python 3, Chromium 141 (Playwright 1.56).

## Gesamtergebnis

**Die Prüfung des Nachtrags ist erledigt.** Alle Punkte sind mit Beleg geprüft und erfüllt. Kein kritischer und kein wichtiger Befund.

- **F-4, F-5, F-6, Kartentexte zu F-7, Artefakt Version 48, Paket-ZIP:** erfüllt. Alle Kennzahlen der Selbstprüfung stimmen mit meinen Zahlen überein. Gerechnet habe ich zum Teil mit eigenen Skripten und anderen Methoden.
- **Skill zu F-7:** offen, wie im Nachtrag angegeben. Den Skill lädt die Fachstelle auf claude.ai hoch, nicht der Pull Request (NT-2).
- **Optional:** NT-1 bis NT-5. NT-1 sollte vor Schritt 3 (Borderline-Website) erledigt sein.
- **Für #131:** Den Punkt unter «Offene Stufen» kann die Fachstelle abhaken. Abhaken darf nur sie.

## Ergebnis je Punkt

| Punkt | Behauptung im Nachtrag | Ergebnis | Beleg |
| --- | --- | --- | --- |
| F-4 Build-Kennung | r4-9 → r4-10 in `contract.js`, `site.config.json` (Starter, Referenz), `gate.html`, `qa.html`; Starter neu gebaut; die Prüfung `build` meldet Seiten mit r4-9; Seiten sonst byte-gleich; Befunde gleich; Selbsttest 72/72 | **Erfüllt** | `tools/contract.js:11` `BUILD = 'r4-10'` (vorher `'r4-9'`). **Diff der 8 HTML-Dateien:** nur Kennungen, 42 Ersetzungen (`data-puk-site-build` in 7 Seiten, `?v=` in 35 Verweisen). Nach dem Rückersetzen von r4-10 durch r4-9 sind alle 8 byte-gleich mit `fe5a9e4`. **Bau reproduzierbar:** Nach `node tools/build.mjs` ist im Arbeitsbaum keine Datei geändert. **Gate:** Entwurf 0 blockierend und 12 Hinweise, Produktion 11 blockierend und 1 Hinweis, Selbsttest 72/72. Alle drei Ausgaben sind zeichengleich mit `fe5a9e4`. **Wirkung:** Das Gate r4-10 auf den Seiten von `fe5a9e4` meldet 7 Befunde `build` («Seite nicht mit Build r4-10 erzeugt (r4-9)»), sonst die 12 Hinweise wie vorher; insgesamt 0 blockierend und 19 Hinweise, zeilengleich mit `nachtrag/ergebnisse/gate-r4-10-auf-seiten-r4-9.txt`. Die Befunde `build` sind Hinweise, auch in Produktion (`contract.js:275`, unverändert). Der Export baut die Seiten selbst neu (`export.mjs:26`). **`gate.html` im Browser:** `contract.js`, `gate-browser.js` und `gate.css` werden mit `?v=r4-10` geladen (Status 200), Selbsttest 72/72, keine Fehler, in Entwurf und Produktion. `qa.html` lädt und läuft ohne Fehler. **Sonst** steht r4-9 ausserhalb von `review/` nur noch in früheren Einträgen von Änderungsprotokoll und Entscheiddokument. «Depression» ist unverändert bei r4-8 (Übernahme erst in Schritt 4) |
| F-5 Prüfsummen | SHA-256 beider früheren Fassungen im Änderungsprotokoll; neue Fassung in `puk-website-profil-2026.10.2.zip.sha256`, nicht im ZIP; Regel unter «Arbeit am System»; Skript erzeugt aus `bc679a7` das bisherige ZIP byte-gleich | **Erfüllt** | **Aus git berechnet:** `de10a8d` 1 505 109 Byte, 313 Einträge, `2040c743…d15373db`; `bc679a7` 3 365 050 Byte, 438 Einträge, `20d42bba…5a04a258a4ba4902`. Beides gleich wie im `README.md`, Zeilen 179 und 180. Die Datei hat in git genau drei Fassungen: `de10a8d`, `bc679a7`, `1ba2568`. **Prüfsummendatei:** eine Zeile im Format von `sha256sum`, Zeilenende LF. `sha256sum -c puk-website-profil-2026.10.2.zip.sha256` ergibt «OK», Prüfsumme `b1812997…8fec35a5`. Die Datei liegt nicht im ZIP. **Regel:** `README.md`, Abschnitt «Offene Punkte», «Arbeit am System» (Zeile 171). **Skript:** `nachtrag/paket-zip.py` unterscheidet sich von `nachbesserung/paket-zip.py` nur darin, dass es `*.zip.sha256` auslässt und die Prüfsumme schreibt (Diff gelesen). Aus `bc679a7` erzeugt es byte-gleich das ZIP von `bc679a7`, aus `1ba2568` byte-gleich das ZIP in #131 |
| F-6 Zeitstempel | `lastChange.at` zwei Sekunden vor der Veröffentlichung von Version 48 | **Erfüllt** | `design-system.json` in Version 48: `lastChange.at` = `2026-10-16T05:39:31Z`, von «Christa» über «Claude Code». Die Version-ID `1792129173` ist die Unix-Zeit 05:39:33Z, also zwei Sekunden später. Dasselbe Schema gilt für die Versionen 46 und 47: `1792059369` = 10:16:09 und `1792071978` = 13:46:18, wie im Audit |
| F-7 Kartentexte | Prozesspfad, Entscheidungsweg und Modell in Schritten nennen `data-print-split` | **Erfüllt**, mit Hinweis NT-3 | `components/VisProzesspfad/README.md`, `VisEntscheidungsweg/README.md` und `VisModellSchritte/README.md` haben je einen Absatz «Druck». Er stimmt mit der Leitlinie (`00-technische-qualitaet.md:57`), mit der Anleitung im Starter (`README.md:82–92`) und mit dem Gate (`contract.js:46, 409–414`) überein: Das Kennzeichen gilt nur für diese drei Muster, steht an der Figur in `content/<id>.html` und nur bei langen Abfolgen. Titel, Kernaussage und erster Schritt stehen zusammen, die Kennzeichnung folgt direkt auf den letzten Schritt. Beim Modell steht die Zeichnung über den Schritten; ohne Schrittliste blockiert das Gate. Die Vorschauen (`preview.html`) sind wie angegeben unverändert und nennen das Kennzeichen nicht |
| F-7 Skill | Skill nachgeführt, Hochladen durch die Fachstelle offen | **Offen** (wie angegeben) | Die synchronisierte Fassung in dieser Umgebung (Stand 16.10.2026, 06:03 UTC, also nach #131) ist noch die alte. Zeile 93: «Längere Abfolgen (Prozesspfad, Entscheidungsweg, Modell in Schritten) dürfen zwischen Schritten umbrechen», ohne Kennzeichen. Zeile 103: «68 Fälle». Die vorbereitete Fassung liegt nicht im Repository; ich konnte sie nicht prüfen (NT-2) |
| Artefakt Version 48 | 17 geänderte Dateien unter `project/` und `design-system.json`; 213 von 213 gemeinsamen Dateien byte-gleich | **Erfüllt** | Gelesen, nicht veröffentlicht; live ist Version `1792129173-abbb`. Unter `project/` liegen 286 Dateien. **213 davon sind gemeinsam mit dem Repository, alle 213 byte-gleich mit `1ba2568`.** Nur im Artefakt liegen 73 Dateien (69 `preview.html`, `design-system.json`, 3 unter `assets/`), wie bei Version 47. Die Prüfsummenliste der bauenden Sitzung (`artefakt-v48-gemeinsame-dateien-sha256.txt`) ist gleich wie meine. **Gegen Version 47** (Liste der Nachprüfung, `nachpruefung/ergebnisse/artefakt-v47-abgleich.txt`): Genau 17 gemeinsame Dateien sind geändert. Es sind genau die 17 Dateien von #131, die im Artefakt liegen. Grenze: siehe «Nicht geprüft» |
| Paket-ZIP entpackt | 506 Dateien nach der Paketregel, 506 von 506 byte-gleich; Build, Selbsttest, Produktion, Export mit Schriftlizenz | **Erfüllt**, mit Hinweis NT-4 | **Eigene Prüfung** mit `pn-zip.py`, nicht mit dem Skript der bauenden Sitzung: 506 Einträge, keine Ordnereinträge, alle unter `puk-website-profil/`, sortiert, Zeit 15.10.2026 12:00, Rechte 644, deflated. Die Dateiliste ist gleich wie die Paketregel. Ausgelassen sind `borderline-angehoerige/` (142 Dateien), `depression-angehoerige/` (48), `_headers` und `index.html` im Stamm, das ZIP und `.sha256`. **506 von 506 byte-gleich** mit `1ba2568`. **Gegen `bc679a7`:** 68 Dateien neu (Audit, Nachprüfung mit 58 Dateien in `nachpruefung/`, Nachtrag mit 6 Dateien in `nachtrag/`, `.github/workflows/offene-stufen.yml`), keine entfallen, 20 geändert (NT-4). Grösse 5 725 157 Byte. Die neuen Dateien sind unkomprimiert 3,3 MB, vor allem Seitenbilder der Nachprüfung. **Entpackt:** Der Bau schreibt 7 Seiten und verändert keine HTML-Datei; die 8 HTML-Dateien sind byte-gleich mit dem Repository. Entwurf 0 blockierend und 12 Hinweise, Selbsttest 72/72, Produktion 11 blockierend (erwartet). **Export:** 6 Seiten, alle mit Build r4-10, `fonts/OFL.txt` und 3 Schriften, `css/site.css` mit 14 Regeln zu `data-print-split`. **Inhalt:** keine Pfade der Arbeitsumgebung, keine Zugangsdaten. E-Mail-Adressen: `angehoerigenarbeit@pukzh.ch` (41-mal) und `nobody@example.org` (Selbsttestfall, `contract.js:505`, seit `830cfc6`) |
| Nicht geändert | Leitlinien, Tokens, Komponenten-Code, Druck- und Bildschirmregeln, Borderline, «Depression» | **Erfüllt** | `git diff fe5a9e4 1ba2568` zeigt je 0 geänderte Dateien in `guidelines/`, `tokens/`, `components/bundle.css`, `bundle.js`, `interaktion.js`, `templates/website/longform/`, `borderline-angehoerige/`, `depression-angehoerige/`, `content/` und `starter.css` des Starters, `quellcode/`, `ENTSCHEIDE-PROFIL-2026-10-2.md`, `CLAUDE.md` und `START-HIER.md`. In den hinzugefügten Zeilen gibt es keine Telefonnummern, keine `tel:`-Links und keine Pfade; Treffer der Suche waren nur Ziffernfolgen in Prüfsummen. In den HTML-Dateien sind keine Inline-Skripte und keine `style`-Attribute hinzugekommen, nur Kennungen |

## Kennzahlen der Selbstprüfung, nachgerechnet

| Kennzahl (Selbstprüfung, Beschreibung von #131) | Nachgerechnet | Bemerkung |
| --- | --- | --- |
| Gate r4-10 auf den Seiten von r4-9: 7 Befunde `build`, sonst dieselben 12 Hinweise | 7 Befunde `build`, 0 blockierend, 19 Hinweise | gleich; Stufe Hinweis |
| Entwurf 0 blockierend, 12 Hinweise; Produktion 11; Selbsttest 72/72 | gleich, Ausgabe zeichengleich mit `fe5a9e4` | auch entpackt und in `gate.html` |
| 8 HTML nach Rückersetzen byte-gleich | 8 von 8 | – |
| `de10a8d` 1 505 109 Byte, `2040c743…` | gleich, 313 Einträge | – |
| `bc679a7` 3 365 050 Byte, `20d42bba…` | gleich, 438 Einträge | – |
| neue Fassung `b1812997…` | gleich; `sha256sum -c` OK | Skript reproduziert das ZIP byte-gleich |
| Skript erzeugt aus `bc679a7` das bisherige ZIP | byte-gleich | – |
| 506 Dateien (vorher 438), 5,7 MB (vorher 3,4 MB) | 506 und 5 725 157 Byte; 438 und 3 365 050 Byte | – |
| 506 von 506 byte-gleich | 506 von 506 | eigenes Skript |
| Artefakt 213 von 213 gemeinsamen Dateien byte-gleich | 213 von 213; 17 geändert gegenüber Version 47 | – |
| `lastChange.at` 05:39:31Z, Version 05:39:33Z | gleich | Version-ID = Unix-Zeit |

## Befunde

### Kritisch

Keine.

### Wichtig

Keine.

### Optional

**NT-1 · Entscheiddokument nicht nachgeführt** (vor Schritt 3 erledigen)
- Das Statusprotokoll in `ENTSCHEIDE-PROFIL-2026-10-2.md` endet mit «Nachbesserung gebaut» und «**Offen:** Nachprüfung durch eine Sitzung, die nicht gebaut hat» (Zeile 37).
- Dort fehlen drei Einträge:
  - das Ergebnis der Nachprüfung (#130: «Schritt 2b ist erledigt»)
  - der Auftrag der Fachstelle vom 16.10.2026
  - dieser Nachtrag (Version 48, Build r4-10, neue Fassung des ZIP)
- Als Nächstes übernimmt die Borderline-Website «das Paket» (Schritt 3, Zeilen 131–132). Welche der drei Fassungen gemeint ist, steht nur im Änderungsprotokoll im `README.md`.
- **Empfehlung:** Nach dem Zusammenführen von #131 einen datierten Eintrag ins Statusprotokoll setzen, mit der Prüfsumme der Fassung, die Schritt 3 übernimmt (`b1812997…8fec35a5`, sofern bis dahin nichts mehr ändert). Eintragen kann die bauende Sitzung oder die Fachstelle; diese Sitzung ändert das Dokument nicht.

**NT-2 · Skill noch nicht nachgeführt** (F-7, wie im Nachtrag angegeben)
- Der Skill «puk-website-profil» beschreibt den Druck noch ohne Kennzeichen und nennt «68 Fälle» (Zeilen 93 und 103 der synchronisierten Fassung). Neue Sitzungen, die den Skill lesen, finden damit eine andere Druckregel als in Leitlinie und Starter.
- In #131 steht das nicht unter «Offene Stufen». Das ist folgerichtig: Es ist keine Prüfstufe, sondern ein Schritt der Fachstelle.
- **Empfehlung:** Nach dem Hochladen in einer neuen Sitzung die synchronisierte Fassung prüfen: Druckregel mit Kennzeichen, «72 Fälle», Regel zu Build-Kennung und Prüfsumme im Abschnitt «Profil ändern».

**NT-3 · Vorschauen der drei Karten mit älterem CSS** (bestand vorher, nicht durch #131)
- Die Vorschauen (`preview.html`, nur im Artefakt) betten eine Kopie der Muster-CSS ein.
- **Prozesspfad und Entscheidungsweg:** 8 Zeilen von `visual-patterns.css` fehlen. Alle betreffen die Drucklage mit Kennzeichen.
- **Modell in Schritten:** 13 Zeilen von `erklaermuster.css` fehlen. Neben der Drucklage fehlt auch P-5 (Ziffernkreis und Spalte in `rem`). Die Vorschau zeigt Ziffernkreis und Spalte deshalb weiter mit 28 und 32 px statt mit 1.75rem und 2rem; bei grösserer Schrift sieht sie anders aus als das Muster.
- **Herkunft:** P-5 kam mit dem Paket (`de10a8d`), die Drucklage mit der Nachbesserung (`bc679a7`). #131 hat die Vorschauen nicht verändert.
- H-4 und F-7 verlangten, dass die Karten das Kennzeichen nennen; das tun jetzt die README der Karten. Ob die Ansicht des Design-Systems den README-Text bei der Karte zeigt, habe ich nicht gesehen.
- **Empfehlung:** die drei Vorschauen bei der nächsten Arbeit am Artefakt an die Muster-CSS angleichen.

**NT-4 · Ungenaue Angaben in der Selbstprüfung** (ohne Folgen)
- **Änderungen auf `main`:** Die Selbstprüfung schreibt, auf `main` seien seit `c65db24` nur `.github/` und `CLAUDE.md` geändert. Dazu kamen aber 62 Dateien unter `review/`: Audit (#127), die Korrektur zu F-3 (#128) und die Nachprüfung (#130). Keine davon liegt im Artefakt; der Schluss «nichts für das Artefakt» stimmt also.
- **Paketinhalt:** Neu im Paket sind die genannten 68 Dateien. Gegenüber `bc679a7` sind ausserdem `CLAUDE.md` sowie `SELBSTPRUEFUNG.md` und `messung/README.md` geändert (F-3); das Änderungsprotokoll nennt diese drei nicht.
- **Kartentexte:** «im Wortlaut der Leitlinie» heisst hier sinngemäss. Inhaltlich sind die Texte deckungsgleich mit der Leitlinie.

**NT-5 · Dritte Fassung unter demselben Namen**
- `puk-website-profil-2026.10.2.zip` gibt es jetzt in drei Fassungen. Die Prüfsummendatei unterscheidet sie, aber nur, wenn sie mitgeliefert wird.
- Das ZIP allein kann seine eigene Prüfsumme nicht enthalten. Diese Begründung im Änderungsprotokoll ist richtig.
- **Empfehlung:** ZIP und `.sha256` immer zusammen ausliefern. Ob künftige Fassungen einen eigenen Namen bekommen, entscheidet die Fachstelle.

## Nicht geprüft

- **Druck und Bildschirm neu gemessen:** nicht nötig. Die Seiten sind bis auf die Kennung byte-gleich, CSS und Komponenten unverändert (Diff).
- **Vorbereitete Fassung des Skills:** liegt nicht vor.
- **Artefakt Version 47 → 48** für `design-system.json` (laut Nachtrag nur `lastChange`) und für die 73 Dateien, die nur im Artefakt liegen: Es gibt keine Vergleichskopie von Version 47 mit Prüfsummen. Für die 213 gemeinsamen Dateien ist der Vergleich vollständig.
- **Darstellung der Karten** in der Ansicht des Design-Systems.
- **Fachliche Aussagen:** nicht Gegenstand. Kein Prüfbedarf aufgefallen.

## Reproduktion

Im Stamm des Repositorys (Arbeitsbäume entstehen im angegebenen Ordner, das Repository bleibt unverändert):

| Skript (`pruefung-nachtrag/`) | Prüft | Ergebnis |
| --- | --- | --- |
| `pn-pruefen.sh <ordner>` | Build-Kennung, Bau, Gate vorher und nachher, Gate r4-10 auf Seiten r4-9, Prüfsummen aller Fassungen aus git, `sha256sum -c`, Reproduktion beider ZIPs, ZIP entpackt (Bau, Gate, Selbsttest, Export, Suche), unveränderte Ordner | `ergebnisse/pruefung.txt` |
| `pn-zip.py` | Aufbau des ZIP, Dateiliste gegen die Paketregel, Inhalt gegen den Arbeitsbaum, Unterschiede zu `bc679a7` | in `ergebnisse/pruefung.txt` |
| `pn-artefakt.py <artefakt/project> <dateiliste>` | Artefakt gegen Repository, gegen Version 47 und gegen die Liste der bauenden Sitzung; Kennzeichen und eingebettetes CSS der drei Vorschaukarten. Eingabe: alle Dateien unter `project/`, mit dem Artifact-Werkzeug gelesen | `ergebnisse/artefakt.txt` |
| `pn-gate-html.cjs` | `gate.html` (Entwurf, Produktion) und `qa.html` im Browser | `ergebnisse/gate-html.txt` |

Dieser Bericht liegt nicht im Paket-ZIP von #131, wie schon die Nachprüfung nicht im ZIP von `bc679a7` lag. Er kommt mit der nächsten Fassung des Pakets hinzu.
