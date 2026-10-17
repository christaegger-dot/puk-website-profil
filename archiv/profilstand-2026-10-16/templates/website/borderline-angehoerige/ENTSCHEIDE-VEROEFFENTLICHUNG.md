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

## Stand 13.10.2026

Nachgeführt nach der Veröffentlichung, im Auftrag der Leitsitzung der Veröffentlichung. Die Entscheide V-1 bis V-9 oben bleiben im Wortlaut unverändert.

| Schritt | Stand | Beleg |
| --- | --- | --- |
| 1. Entscheide in `main` | erledigt | Commit `d44c765`, PR #74 (Merge `99b4b60`) |
| 2. Abschlussprüfung (V-7) | erledigt | `PRUEFBERICHT.md`, Abschnitt «Abschlussprüfung (13.10.2026, Stand d44c765)» |
| 3. Release-Kandidat (V-5, V-6) | erledigt | Kandidat `f4074fd` auf dem Umzugs-Branch von PR christaegger-dot/borderline-angehoerige#659 |
| 4. R1, R2, R3 (V-8) | erledigt: R3 «Go mit Auflagen», von der Fachstelle als Freigabe angenommen | `PRUEFBERICHT.md`, Abschnitte «Pre-Release-Audits R1 und R2», «R3 Freigabe-Audit», «Fachliche Freigabe der Fachstelle» › «Annahme von «Go mit Auflagen» (13.10.2026)»; AR3-1 erfüllt (dort, Punkt «Stand AR3-1», und Abschnitt «Nachprüfung AR3-1») |
| 5. Veröffentlichung (V-9) | erledigt | siehe unten |
| 6. Nach der Veröffentlichung | offen, Frist 13.01.2027 | siehe «Offene Auflagen» |

**Veröffentlichung (Schritt 5) im Einzelnen:**
- **Zustimmung V-9:** Die Fachstelle stimmte am 13.10.2026 im Chat der Leitsitzung der Veröffentlichung am Stand `f4074fd` zu («1. Ja») und übertrug den Merge an Claude («merge übertragen an dich»). Eingetragen in `PRUEFBERICHT.md`, «Annahme von «Go mit Auflagen»», Nachtrag zum Punkt «Veröffentlichung».
- **Schutz der Vorschauen:** vor dem Merge eingeschaltet, Netlify `requiresSSOTeamLogin` true, `non_production`. Bestätigt in `PRUEFBERICHT.md`, «Prüfung der Produktion AR3-2», Punkt 5 (Vorschau ohne Anmeldung 401) und Punkt 9 (`get-project`).
- **Build-Einstellungen:** vor dem Merge über die `netlify.toml` des Branchs angeglichen, `publish = "site"`, kein Build. Bestätigt ebenda, Punkt 9 (Deploy aus `main`, eine Regel aus `netlify.toml`).
- **Beschreibung von #659:** Titel und Beschreibung von PR christaegger-dot/borderline-angehoerige#659 vor dem Merge nachgeführt.
- **Merge:** PR #659 am 13.10.2026, 06.43 Uhr (04.43.50 UTC), Merge-Commit `ef2e491`, Baum gleich wie `f4074fd`. Produktions-Deploy `6acdb7093632f42d43ca4b49`, veröffentlicht 04.44 UTC unter `https://borderline-angehoerige.netlify.app`. Beleg: «Prüfung der Produktion AR3-2», geprüfter Stand und Punkt 9.
- **Prüfung der Produktion (AR3-2, 5.3 b, dazu `Set-Cookie` nach V-2):** erfüllt, 9 von 9 Punkten, 0-mal `Set-Cookie` auf 50 Adressen. Beleg: `PRUEFBERICHT.md`, Abschnitt «Prüfung der Produktion AR3-2», PR christaegger-dot/puk-website-profil#87 (Merge `d2a34db`).

**Auflagen** (Wortlaut im Abschnitt «R3 Freigabe-Audit» von `PRUEFBERICHT.md`), je mit Frist **13.01.2027**. Nachgeführt am 13.10.2026 nach AR3-4:
- **AR3-3 reale Tests** (V-3): Unterlage `REALE-TESTS-AR3-3.md`.
- **AR3-4 Quellenangaben vervollständigen:** erledigt am 13.10.2026. Belege:
  - Freigabe: `PRUEFBERICHT.md`, «Freigabe AR3-4 (13.10.2026, im Auftrag der Fachstelle)»
  - Nachprüfung: «Nachprüfung AR3-4», Urteil «erfüllt», mit Runde 4 und 5
  - Veröffentlichung: PR christaegger-dot/borderline-angehoerige#660, Merge `8d81ae7`
  - Prüfung der Produktion: «Prüfung der Produktion AR3-4», Deploy `6acdc7b`, «erfüllt»; Bericht-PR christaegger-dot/puk-website-profil#95
- **AR3-5 Ausnahme R1-1 beenden:** Profiländerung nach `/ENTSCHEIDE-PROFIL-2026-10-2.md`.
- **Dazu empfohlen (V-2):** die Durchsicht von Impressum und Datenschutz durch den Rechtsdienst nach der Veröffentlichung; Unterlage `UNTERLAGE-RECHTSDIENST.md`.

## Nachtrag: reale Tests und Zero-Participant-Audit

Die Fachstelle hat am 13.10.2026 entschieden, die vorgeschlagene Stichprobe nicht durchzuführen. AR3-3 bleibt deshalb materiell unerfüllt und wird nicht durch KI-Personas oder simulierte Nutzerforschung geschlossen. Mit diesem späteren Institutionsentscheid ist AR3-3 organisatorisch abgeschlossen und die zuvor in V-3 gesetzte Frist vom 13.01.2027 aufgehoben; eine neue operative Pendenz entsteht nur durch einen neuen Institutionsentscheid. Als risikoreduzierende, aber nicht gleichwertige Alternative wurde das in `ZERO-PARTICIPANT-AUDIT-2026-10-13.md` dokumentierte Audit umgesetzt. Die Aussagegrenzen stehen zusätzlich auf der öffentlichen Seite «Über diese Website».
