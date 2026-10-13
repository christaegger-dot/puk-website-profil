# Entscheide zur Veröffentlichung · Borderline – Orientierung für Angehörige

**13.10.2026 · von Claude im Auftrag der Fachstelle entschieden.**

Die Fachstelle hat am 13.10.2026 im Chat der bauenden Sitzung delegiert: «Du musst das selber entscheiden, oder anders lösen/weglassen». Gemeint waren die Punkte, die vor der Veröffentlichung offen waren:
- die Prüfstufen W1 bis R3
- die rechtliche Prüfung
- SPZ-F-21
- der Release-Kandidat auf der Vorschau
- die realen Tests

Zu V-2 und V-3 hat die Fachstelle auf Rückfrage selbst gewählt.

**Wer entschieden hat:** die bauende Sitzung der Korrekturen SP2-K, NSK und Schritt 3. Sie prüft keine Stufe (`guidelines/00-ablauf-pruefung-und-freigabe.md`, Regel 2). Sie startet die Prüfsitzungen, entscheidet aber nicht über deren Ergebnis.

**Grundlagen:**
- `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`, Abschnitte 5 und 6
- `KORREKTUR-SCHLUSSPRUEFUNG-2.md`, Abschnitt 15
- `guidelines/00-ablauf-pruefung-und-freigabe.md`
- `guidelines/00-pre-release-audits.md`

**Stand der Website:** `main` am Commit `c028d6e`, Merge von PR #73: Freigabe vom 13.10.2026, Fusszeile «Fachlich freigegeben am 13.10.2026». Diese Entscheide ändern keine Seite.

## Entscheide

| Nr. | Punkt | Entscheid | Begründung und Beleg |
| --- | --- | --- | --- |
| V-1 | SPZ-F-21: Bezeichnung zu F60.31 nennen? | **Keine Ergänzung.** Der Text bleibt. | `quellen` sagt schon, wofür der Code steht: «Dort wird der Borderline-Typ unter F60.31 codiert.» `diagnose` › `abklaerung` nennt den Code in einer Einschränkung: «Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen.» Die amtliche Bezeichnung steht weder im Bestand noch in diesem Repository. Sie aus dem Gedächtnis zu ergänzen, schliesst die Leitlinie aus («Quellenstandard»; Entscheide SPZ-F-21, M3). |
| V-2 | Rechtliche Prüfung: SPZ-F-13 (Cookies), SPZ-F-14 (Urheberrecht), SPZ-49 (Lizenz der Schrift), S-Nr. 5 und 6, Z31-F-9, Z31-F-19, NK-F-8 | **Entfällt vor der Veröffentlichung.** Die Texte von Impressum und Datenschutz bleiben, wie sie freigegeben sind (Freigabe der Etappe 3-1 vom 12.10.2026, Stand der Seite 12.10.2026). Entscheid der Fachstelle auf Rückfrage («Texte so lassen»). | Eine juristische Prüfung kann Claude nicht leisten. Vorgeschlagen war, die vorsichtigeren Fassungen aus Entscheide 5.5 einzusetzen. Die Berechtigungsprüfung der Sitzung hat diese Änderung blockiert; danach hat die Fachstelle entschieden, die Texte zu lassen. **Geprüft (Sachverhalt, keine Rechtsprüfung):** Die Vorschau der neuen Website (`deploy-preview-659--borderline-angehoerige.netlify.app`) setzte am 13.10.2026 keinen Cookie: keine Kopfzeile `Set-Cookie` auf `/`, `index.html`, `verstehen.html`, `impressum-datenschutz.html`, `quellen.html` und `404.html`. Das Restrisiko trägt die Fachstelle. Empfohlen bleibt, dass der Rechtsdienst Impressum und Datenschutz nach der Veröffentlichung ansieht. |
| V-3 | Reale Tests (SPZ-F-33) | **Nach der Veröffentlichung,** als Auflage mit Frist **13.01.2027**. Umfang, Kombinationen, Aufgaben und Protokoll wie in Entscheide 5.4. Entscheid der Fachstelle auf Rückfrage. | Die Tests macht eine Person, nicht Claude (Entscheide 5.4). Bis dahin liegt nur die automatisierte Prüfung vor (Schlussprüfung, Nachprüfung SP2-K). Sie ersetzt die realen Läufe nicht und wird nicht als solche bezeichnet (Ablauf, «Abdeckungsgrenze»). **Folgen:** <br>– Die Prüfsitzung beurteilt «Bedienung und Barrierefreiheit» mit dieser begründeten Ausnahme («Ergebnis jeder Stufe … begründete Ausnahmen», Ablauf, «Inhaltsverantwortung und Status»). <br>– R3-Punkt A4 ist vor der Veröffentlichung nicht erfüllt; R3 ergibt deshalb höchstens «Go mit Auflagen». |
| V-4 | NK-F-3: Ausgabe von «Schluss mit dem Eiertanz» | **Die Angabe bleibt:** «Balance Buch + Medien Verlag, 2014» auf `unterstuetzung` und `quellen`. | Am Buch hier nicht prüfbar. Der Katalog der Deutschen Nationalbibliothek war aus der Sitzung nicht erreichbar (DNS und Proxy). Die Angabe stammt aus `/quellen` des Bestands, der ausführlicheren bibliografischen Quelle (3-1-K, S-Nr. 15), und ist mit Etappe 3-1 freigegeben. Ein Buchhandelsverzeichnis nennt eine Ausgabe desselben Verlags von 2009 (ISBN 3-86739-005-3); 2014 kann eine spätere Auflage sein. Unsicher bleibt nur das Jahr der Auflage. |
| V-5 | Lizenz der Schrift Rubik (SPZ-49) | **Die Lizenzdatei wird mit ausgeliefert.** Beim Übertragen des Exports kommt `assets/fonts/OFL.txt` aus dem Profil als `site/fonts/OFL.txt` dazu, von Hand wie `_redirects`. | Die SIL Open Font License verlangt, dass jede Kopie der Schrift den Copyright-Hinweis und die Lizenz enthält, auch als eigene Textdatei (Bedingung 2 in `assets/fonts/OFL.txt`). `tools/export.mjs` kopiert die Datei nicht (Profilbefund SPZ-49). Die Werkzeuge bleiben unverändert (`CLAUDE.md`). Kein Text der Website ändert sich. |
| V-6 | Release-Kandidat (Entscheide 5.1 Nr. 3) | **Export im Entwurfsmodus,** auf dem Stand nach diesen Entscheiden: `node tools/export.mjs <ziel>`. Dazu kommen `_redirects` (88 Regeln) und `fonts/OFL.txt` (V-5). <br>– Übertragen wird in den Ordner `site/` des Umzugs-Branchs `umzug-puk-profil-1791821335` (PR christaegger-dot/borderline-angehoerige#659, Entwurf). <br>– Vor dem Merge wird mit `--production` neu exportiert und mit dem Kandidaten verglichen (`diff -r`). <br>– Weicht eine Datei ab, wird neu übertragen, und die betroffenen Prüfungen werden wiederholt. | `--production` blockiert, solange R1 bis R3 offen sind (`tools/contract.js`, `review-report`). R1 bis R3 prüfen aber den Kandidaten. In `tools/export.mjs` wirkt der Modus nur auf das Gate (Z. 20 und 27); die geschriebenen Dateien sind dieselben. Damit löst sich die Reihenfolge in Entscheide 5.1 Nr. 3 auf. |
| V-7 | Prüfstufen W1, W2, S, Visualisierungs-Check, Bedienung und Barrierefreiheit, W3 | **Abschlussprüfung in einer eigenen Sitzung** auf dem Stand nach diesen Entscheiden. Die Sitzung hat nicht gebaut, nicht korrigiert, nicht entschieden und nicht geprüft. Auftrag: Abschnitt «Auftrag für die Prüfsitzung» des Ablaufs. Sie prüft die Korrekturen NSK-1 bis -3 und Schritt 3 nach und bewertet die offenen Befunde früherer Runden. Eine Stufe setzt sie nur mit Beleg auf «erledigt». | Ablauf, Regel 2; `CLAUDE.md`, «Prüfen nur in einer eigenen Sitzung». Die Stufen sind in mehreren Runden geprüft: Schlussprüfung mit zwei Sitzungen, Zusammenführung, Nachprüfung SP2-K. Offen sind vor allem die Abschlüsse. |
| V-8 | R1, R2, R3 | **Nach V-7, auf dem Release-Kandidaten** in der Vorschau von PR #659, je mit dem Auftrag aus `guidelines/00-pre-release-audits.md`: <br>– R1 und R2 in einer eigenen Sitzung <br>– R3 danach in einer weiteren | Leitlinie «Pre-Release-Audits»: R2 parallel zu R1, R3 zuletzt. Ob «Go mit Auflagen» die Zeile R3 auf «erledigt» setzt, entscheidet die R3-Sitzung nach der Leitlinie. Setzt sie sie nicht, blockiert das Produktionsgate, und die Fachstelle entscheidet neu. |
| V-9 | Veröffentlichung (Entscheide 5.1 Nr. 4 und 5, 5.2, 5.3) | **Nur mit zwei Voraussetzungen:** <br>– R3 ergibt «Go» oder «Go mit Auflagen». <br>– Die Fachstelle stimmt im Chat ausdrücklich zu. <br>Erst dann folgen: Schutz der Vorschauen einschalten, Build-Einstellungen angleichen, Beschreibung von #659 nachführen, Merge. <br>Nach dem Merge prüft eine Prüfsitzung die Produktion (5.3 b), dazu die Kopfzeile `Set-Cookie` (V-2). | Ein Merge von #659 veröffentlicht die Website (Beschreibung von #659). Das lässt sich nicht still zurücknehmen; die Zustimmung gilt nur für den Stand, den R3 geprüft hat. |

## Ablauf

1. Diese Entscheide in `main` (eigener PR).
2. **Abschlussprüfung** W1, W2, S, Visualisierungs-Check, Bedienung und Barrierefreiheit, W3 (V-7), in einer eigenen Sitzung. Sie committet nur den Prüfbericht.
3. **Release-Kandidat** (V-5, V-6), durch die bauende Sitzung. Das kann parallel zu Schritt 2 geschehen, weil die Prüfsitzung nichts an der Website ändert. Ergibt Schritt 2 eine Korrektur, wird neu exportiert.
4. **R1 und R2** auf der Vorschau von #659, danach **R3** (V-8), in eigenen Sitzungen.
5. **Veröffentlichung** nach V-9; danach die Prüfung der Produktion.
6. **Nach der Veröffentlichung:** reale Tests bis 13.01.2027 (V-3); empfohlen die Durchsicht von Impressum und Datenschutz durch den Rechtsdienst (V-2).
