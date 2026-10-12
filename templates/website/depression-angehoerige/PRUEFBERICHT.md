# Prüfbericht · Depression: Informationen für Angehörige

Gehört zur Website in diesem Ordner (`templates/website/depression-angehoerige/`). Ohne vollständigen Prüfbericht blockiert `node tools/gate.mjs --production` die Veröffentlichung (Abschnitt «Prüfung und Freigabe»).

**Regeln**

- **Bauen und Prüfen sind getrennt.** Die Stufen unten prüft eine Sitzung oder Person, die die Website nicht gebaut hat. Die bauende Sitzung macht nur die Selbstprüfung (unten) und trägt keine Stufe als «erledigt» ein.
- **Jeder Punkt braucht einen Beleg** (Seite und Abschnitt, Figur, Zitat). Ein Punkt ohne Beleg gilt als nicht geprüft. Ein Gesamturteil ersetzt keine Einzelprüfung.
- **Kein Merge ohne Prüfbericht.** Ein Pull Request mit einer neuen oder geänderten Website enthält diesen Bericht im aktuellen Stand und verweist in der Beschreibung darauf.
- **Prüftiefe:** Kennzahlen der bauenden Sitzung werden nachgerechnet; der Visualisierungs-Check der Prüfsitzung steht je Figur in der Matrix unten. Eine zweite, unabhängige Prüfsitzung wird empfohlen; jeder Befund nennt seine Quelle.
- **Status:** «offen», «erledigt» oder «entfällt: Begründung». Fachliche Freigaben trägt nur die Fachstelle ein.

## Status

| Stufe | Status | Datum | Geprüft durch | Ergebnis |
| --- | --- | --- | --- | --- |
| W1 Fachliche Prüfung | offen | 10./11./12.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut); Runde 4: zweite Prüfsitzung (Claude Code, hat nicht gebaut); Runde 5: dritte Prüfsitzung (Claude Code, hat nicht gebaut und die nachgeprüften Befunde nicht umgesetzt); Nachtrag W1-F-19: Codex, unabhängige Quellenprüfung (hat nicht gebaut); Runde 6: vierte Prüfsitzung (Claude Code, hat nicht gebaut und S-33, V-11, BD-12 und K1 nicht umgesetzt); Runde 7: fünfte Prüfsitzung (Claude Code, hat nicht gebaut und W1-33, S-34 nicht umgesetzt) | Runde 1: 25 Befunde, 21 Fragen an die Fachstelle; Seiteninventar für W2. Runde 2 (`f413f69`): 19 erledigt, 4 teilweise, 2 offen; 5 neue (W1-26 bis W1-30). Runde 3 (`9ff948b`): W1-26 bis W1-30 erledigt, W1-21 entfällt (Entscheid). Runde 4 (`e63bd73`): W1-10 bis auf drei Stellen am Original erledigt, Impressum, Datenschutz und 404 geprüft; 2 neue Befunde (W1-31 wichtig, W1-32 optional). Runde 5 (`5f68c39`): W1-32 erledigt; 33 geänderte Stellen je einem Befund zugeordnet, keine Aussage still entfallen; neue Erklärungen (R2-03), Beispielsätze (R2-05) und die Sätze im Kreislauf (R2-04) als Prüfbedarf an W1-F-21; keine neuen Befunde. Nachtrag 12.10.2026 (`5f68c39`): Quellenabgleich W1-F-19 für die drei Angebote abgeschlossen, Textpräzisierung K1 (VASK, zwei Stellen) offen; keine Gesamtfreigabe. Runde 6 (`1a328f5`): K1 an beiden Stellen umgesetzt wie vorgeschlagen, W1-F-19 abgeschlossen; alle 18 geänderten Sätze einem Befund zugeordnet, keine Aussage still entfallen, keine neue fachliche Aussage ohne Beleg; VASK-Adressen am Original aus dieser Umgebung nicht prüfbar; 1 neuer, optionaler Befund (W1-33). Runde 7 (`007006a`): W1-33 erledigt (Abweichung vom optionalen Teil vertretbar), S-34 durch V2 gedeckt; 1 entfallener und 2 neue Sätze je einem Befund zugeordnet, keine neue fachliche Aussage; VASK-Adressen am Original weiterhin nicht prüfbar; 1 neuer, optionaler Befund (W1-34: Verweis auf einen Stand-Vermerk, der 1,9 bis 2,9 Bildschirmhöhen unter dem Sprungziel steht und vor der Veröffentlichung ersetzt wird). Offen: W1-09 Rest, W1-10 Rest, W1-25, W1-31, W1-34, W1-F-15, W1-F-21 |
| W2 Gesamtkohärenz | erledigt | 10./11.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut; dieselbe wie W1) | Runde 1: Aufbau trägt, 11 Befunde, 8 Fragen. Runde 2 (Stand `f413f69`): alle Befunde erledigt, W2-08 an S übergeben; keine neuen Befunde. Nicht neu geprüft in Runde 4 (Auftrag); neu sind nur Impressum, Datenschutz, 404 und das Menü |
| S Sprach-Review | erledigt | 11./12.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut; dieselbe wie W1 und W2); Runde 3: zweite Prüfsitzung; Runde 4: dritte Prüfsitzung; Runde 5: vierte Prüfsitzung; Runde 6: fünfte Prüfsitzung (hat nicht gebaut und S-34 nicht umgesetzt) | Runde 1 (`f413f69`): 27 Befunde, 2 Fragen. Runde 2 (`9ff948b`): alle 27 umgesetzt, Textfassung mit S-F-01 freigegeben; 3 neue, optionale Befunde (S-28 bis S-30). Runde 3 (`e63bd73`): S-28 bis S-30 erledigt; neue Seiten geprüft, 2 neue, optionale Befunde (S-31, S-32). Runde 4 (`5f68c39`, dritte Prüfsitzung): S-31 und S-32 erledigt; alle geänderten Sätze geprüft; 1 neuer, optionaler Befund (S-33). Runde 5 (`1a328f5`, vierte Prüfsitzung): S-33 erledigt; die 13 neuen Sätze aus #40 und #41 geprüft; 1 neuer, optionaler Befund (S-34). Runde 6 (`007006a`, fünfte Prüfsitzung): S-34 erledigt (Wahl der zweiten Variante begründet, Wiederholung «VASK» vertretbar); die 2 neuen Sätze geprüft; keine neuen Befunde. Damit sind S-01 bis S-34 erledigt, beide Fragen beantwortet und alle Textänderungen seit Runde 1 satzweise nachgeprüft (Runden 2 bis 6); Stufe erledigt. Spätere Textänderungen (W1-F-21, W1-34 Variante 2, R2-08) brauchen eine Nachprüfung der geänderten Sätze |
| Visualisierungs-Check | offen | 11./12.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut; dieselbe wie W1, W2 und S); Runde 2: zweite Prüfsitzung; Runde 3: dritte Prüfsitzung; Runde 4: vierte Prüfsitzung; Runde 5: fünfte Prüfsitzung | Runde 1: Matrix 11 × 17, V-01 bis V-07. Runde 2 (`e63bd73`): Matrix 11 × 19; V-01 bis V-07 erledigt; 2 neue, optionale Befunde (V-08, V-09); fachliche Freigabe der 11 Darstellungen fehlt weiterhin (Punkt 14). Runde 3 (`5f68c39`, dritte Prüfsitzung): V-08 und V-09 (Website-Teil) erledigt; Matrix für die 9 geänderten Figuren neu, die «teilweise» aus Runde 2 in den Punkten 15 bis 19 erledigt; 2 neue, optionale Befunde (V-10 Profil, Punkt 8 Kreislauf; V-11 Website, Punkt 19 Vergleich der Behandlungen); Punkt 14 weiterhin nicht erfüllt. Runde 4 (`1a328f5`, vierte Prüfsitzung): V-11 erledigt, Matrix für Kreislauf und Vergleich der Behandlungen nachgeführt (Punkt 19 jetzt in allen 11 Figuren erfüllt); Kreislauf bei 1280 und 360 px angesehen, Freundin-Test «eher ja»; Selbstprüfung 12, 15, 17, 18, 19 bestätigt; keine neuen Befunde; Punkt 14 weiterhin nicht erfüllt, V-10 im Profil. Runde 5 (`007006a`, fünfte Prüfsitzung): keine Figur betroffen (#44 ändert nur einen Absatz in `je-nach-rolle` › `erwachsene-kinder`; die Figur der Seite steht in `eltern`); Matrix unverändert; 0 Überlappungen in 132 Messungen; Kopfzeile der Selbstprüfung bestätigt; keine neuen Befunde |
| Bedienung und Barrierefreiheit | offen | 11./12.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut), automatisiert mit Playwright; Runde 2: zweite Prüfsitzung, Runde 3: dritte Prüfsitzung, ebenso automatisiert | Runde 1: 11 Befunde. Runde 2 (`e63bd73`): BD-01 bis BD-07, BD-10 und BD-11 erledigt, BD-09 teilweise (Dateigrössen), BD-08 offen bis zu den realen Läufen; keine neuen Befunde. Runde 3 (`5f68c39`, dritte Prüfsitzung, ebenso automatisiert): Kurzbeschreibung des Kreislaufs, Legende des Netzes, 200 % Schrift, Kontrast und Menü (Stichprobe) nachgeprüft; 1 neuer, optionaler Befund (BD-12). Runde 4 (`1a328f5`, vierte Prüfsitzung, ebenso automatisiert): BD-12 erledigt (Kurzbeschreibung im Accessibility-Baum, 437 Zeichen), Linknamen der VASK-Links eindeutig, 70 Messungen ohne Überlauf, Konsolenfehler und CSP-Verstösse; keine neuen Befunde. Runde 5 (`007006a`, fünfte Prüfsitzung, ebenso automatisiert): neuer Link «Unterstützung für Angehörige» per Tastatur erreichbar, Fokus sichtbar, Ziel `rechte-und-angebote.html#angebote` wie auf `fuer-sich-sorgen`; auf keiner der 10 Seiten zwei gleichnamige Links mit verschiedenem Ziel; 70 Messungen und 200 % ohne Überlauf, Konsolenfehler und CSP-Verstösse; axe 0 Verstösse; keine neuen Befunde (Lage des Stand-Vermerks unter W1-34). Es fehlen die zwei realen Screenreader-Läufe und ein Test auf einem realen Touch-Gerät |
| W3 Code-Review | offen | 11./12.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut), vorgezogen; Runde 2: zweite Prüfsitzung; Runde 3: dritte Prüfsitzung; Runde 4: vierte Prüfsitzung; Runde 5: fünfte Prüfsitzung | Runde 1: 11 Befunde. Runde 2 (`e63bd73`, inkl. Export und 404): alle blockierenden und wichtigen Befunde erledigt; offen nur optionale: W3-10 Rest (Dateigrössen), W3-11 (Figuren im Druck geteilt); 1 neuer, optionaler Befund (W3-12). Runde 3 (`5f68c39`, dritte Prüfsitzung): Build reproduzierbar, Gate, Export, keine `style`-Attribute, keine Inline-Skripte, kein `tel:`; keine neuen Befunde. Runde 4 (`1a328f5`, vierte Prüfsitzung): #40 und #41 ändern nur Text, ein Linkziel und einen neuen Link; Build an `b8288d0` und `1a328f5` byte-gleich reproduziert, Gate 0/12, Produktion 12, Selbsttest 65/65, 0 `style`-Attribute, 0 Inline-Skripte, 0 `tel:`; keine neuen Befunde. Runde 5 (`007006a`): #44 ändert nur Text und einen internen Link; Build an `f24e5af` und `007006a` byte-gleich reproduziert, Gate 0/12, Produktion 12, Selbsttest 65/65, 0 `style`-Attribute, 0 Inline-Skripte, 0 `tel:`; keine neuen Befunde |
| R1 Profil-Audit | offen | 11./12.10.2026 | zweite Prüfsitzung (Claude Code, hat nicht gebaut); Runde 2: dritte Prüfsitzung | 19 Prüfpunkte mit Beleg: 15 erfüllt, 4 teilweise; keine kritischen Befunde; 4 optionale Befunde (R1-01 bis R1-04), davon 3 Profil; 1 Prüfbedarf (Verweis im Text nach «Grenzen setzen»). Runde 2 (`5f68c39`): Punkt 13 erfüllt (R1-03 erledigt), damit 16 erfüllt, 3 teilweise; offen der Prüfbedarf zu Punkt 18 (Fachstelle) und R1-01, R1-02, R1-04 (Profil) |
| R2 Visualisierung und Laienverständlichkeit | offen | 11./12.10.2026 | zweite Prüfsitzung (Claude Code, hat nicht gebaut); Runde 2: dritte Prüfsitzung (hat die Befunde nicht umgesetzt) | Matrix 11 × 25, Bildsprache je Figur (8 tragen, 3 überarbeiten), Lesetest für 41 Abschnitte, Kennzahlen je Seite; 2 wichtige Befunde (R2-01 Text, der die Zeichnung beschreibt; R2-02 gestrichelte Linie bei Antidepressiva), 5 optionale; ersetzt keinen Lesetest mit Angehörigen. Runde 2 (`5f68c39`): R2-01 bis R2-07 erledigt (Website-Teil); Bildsprache 10 tragen, 1 überarbeiten (`v-ra-vergleich`); Lesetest und Kennzahlen nachgeführt; 1 neuer, optionaler Befund (R2-08). 12.10.2026: R2-08 von der Fachstelle zurückgestellt (Profil); im Bericht richtig geführt, Rechte-Vergleich an `1a328f5` unverändert (vierte Prüfsitzung). `007006a`: nur `je-nach-rolle` › `erwachsene-kinder` geändert; Kennzahlen der Seite nachgerechnet (90 Sätze, 13 mit Verneinung, 4 über 25 Wörter; W1, Prüfrunde 7); kein neuer R2-Lauf (fünfte Prüfsitzung) |
| R3 Freigabe-Audit | offen | | | «Go», «Go mit Auflagen» oder «No-Go»; noch nicht durchgeführt (Stand `007006a`: W1-F-21, W1-31 und die realen Screenreader-Läufe fehlen) |

### Offene Punkte nach Zuständigkeit (fünfte Prüfsitzung, 12.10.2026, Stand `007006a`)

Ersetzt die Fassung der vierten Prüfsitzung (Stand `1a328f5`, nachgeführt nach der Umsetzung von W1-33 und S-34 in #44). Die dort offene Nachprüfung ist gemacht: W1-33 und S-34 sind umgesetzt; die Wahl der zweiten Variante bei S-34 und die Abweichung beim optionalen Teil von W1-33 sind begründet und vertretbar (Nachweise in W1, Prüfrunde 7; S, Prüfrunde 6; Visualisierungs-Check, Runde 5; Bedienung, Runde 5; W3, Runde 5). S ist damit erledigt. Neu ist ein optionaler Befund (W1-34). Seit `007006a` ist an der Website nichts geändert; dieser Pull Request ändert nur diesen Bericht.

**Fachstelle**

- W1-F-21: die Texte und die 11 Darstellungen fachlich freigeben (Gate 11 × `visual-approval`; Visualisierungs-Check Punkt 14). Ausdrücklich dazu gehören, weil sie neu sind und keine eigene Quelle haben:
  - die Erklärungen aus R2-03: «angeleitete Selbsthilfe (Übungen nach einem Programm, begleitet von einer Fachperson)»; «Die erste setzt an belastenden Gedanken und Gewohnheiten an, die zweite an Beziehungen und Veränderungen im Leben.»; «Dazu gehören eine Behandlung mit kurzen Stromimpulsen in Narkose (Elektrokonvulsionstherapie), eine Behandlung mit Magnetimpulsen am Kopf (transkranielle Magnetstimulation) und ein Medikament als Nasenspray (Esketamin).» Dazu der Entscheid, ob die Abkürzungen «EKT» und «rTMS» wieder dazugehören (sie sind entfallen);
  - die Beispielsätze aus R2-05: «Soll ich dir helfen, einen Termin zu finden? Ich komme gern mit.» (Pfad) und «Ich merke, dass ich ungeduldig werde. Das liegt an meiner Müdigkeit, nicht an dir.» (Kreislauf);
  - die Sätze im Kreislauf (R2-04), besonders Station 4 «Er fühlt sich unverstanden.», und seit S-33 auch der Kurztext, der diese Zuordnung ausspricht: «Die erkrankte Person fühlt sich dann eher unverstanden und zieht sich weiter zurück.» Der Auftrag «Setze S-33 … um» ist als Bestätigung der Zuordnung für den Kurztext gelesen; eine Freigabe der Figur ist er nicht. Ändert die Fachstelle Station 4, muss der Kurztext folgen;
  - die neuen Kurztexte aus R2-01, darunter «Die Übersicht beantwortet Fragen, die Angehörige oft stellen: …» (Liste in W1, Prüfrunde 5).
- W1-F-15: das Boot-Bild mit dem Arbeitsheft abgleichen.
- W1-F-19: **abgeschlossen** (12.10.2026). Quellen- und Linkabgleich im Nachtrag unten; K1 entschieden, umgesetzt (`16da1ec`) und in W1, Prüfrunde 6 nachgeprüft. Keine fachliche Freigabe erteilt.
- W1-31: Impressum und Datenschutz rechtlich prüfen lassen (mit der PUK): Widerspruch «keine Daten an andere Anbieter» und Netlify, geltendes Recht, verantwortliche Stelle, Aufbewahrung der Protokolle, Postadresse; dabei den Wortlaut aus S-32 («Herausgeberin: Fachstelle Angehörigenarbeit der Psychiatrischen Universitätsklinik Zürich», «… kein offizielles Angebot der Klinik als Ganzes») und den Vermerk aus W1-32.
- Prüfbedarf aus R1 (Punkt 18), unverändert offen: Gehört nach «Sie dürfen ein Gespräch beenden und den Raum verlassen» (`fuer-sich-sorgen` › `grenzen`) der Verweis im Text?
- W1-33 und S-34: **erledigt** und nachgeprüft (W1, Prüfrunde 7; S, Prüfrunde 6). Zur Kenntnis, keine Entscheidung nötig: Bei W1-33 ist vom optionalen Teil nur der Verweis umgesetzt; der Satz zur Gruppe behält «im Aufbau», weil die bauende Sitzung die Aussage aus K1 nicht ändern wollte. Wünscht die Fachstelle die Fassung ohne Zeitbezug, sagt sie es; das ist eine kleine Textänderung.
- W1-34 (neu, optional): entscheiden, ob der neue Verweissatz auf `je-nach-rolle` bleibt und bei der Prüfung vor der Veröffentlichung an den Stand-Vermerk gekoppelt wird (Variante 1) oder ob er sagt, wo der Stand steht (Variante 2, Wortlaut im Befund).

**Bauende Sitzung** (nach Freigabe)

- W1-34 Variante 2, falls die Fachstelle sie wählt.
- W1-09 Rest und W1-10 Rest: Abrufdaten, PatG § 19, NVL-Kapitel, Programmname «Familiencoach Depression», «drei bis vier Wochen», BAG «allgemein informieren» am Original prüfen, sobald die Originale erreichbar sind.
- BD-09 / W3-10 Rest: Dateigrössen der 7 PDF-Dateien nachtragen.
- Erledigt und nachgeprüft: S-33, V-11, BD-12 (#40), K1 (#41), W1-33 und S-34 (#44); Selbstprüfung Punkte 12, 15, 17, 18 und 19 (Visualisierungs-Check, Runde 4) und Kopfzeile nach #44 (Runde 5).

**Profil** (Design-System-Artefakt, nicht in diesem Repository; danach neues Paket übernehmen)

- W3-11: Druck. Die Reihenfolge «Kennzeichnung vor Vertiefung» wirkt im PDF nicht (11 von 11 Figuren); Schichtenmodell, Pfad und Rechte-Vergleich werden geteilt; drei Abbildungstitel stehen allein am Seitenende.
- W3-01 (Hinweis): Der Rückfall `details::details-content` ohne Skript druckt in Chromium 141 keine Vertiefung.
- W3-12: kanonische Links und Sitemap mit `.html` gegenüber den Umschreibungen von Netlify.
- R2-01 und R2-02, Profil-Teil: Muster E setzt «· durchgezogene Linie» und «· gestrichelte Linie» als sichtbare Schlüssel und Option B gestrichelt; Muster B verlangt die sichtbare «Leserichtung» und schmal «Nach Station 4: zurück zu Station 1. Der Kreis beginnt von vorn.»; Muster-Kurztexte beschreiben die Grafik («Durchgezogene und gestrichelte Linie unterscheiden die Bereiche»). Das widerspricht R2, Punkt 22. Auf dieser Website sind Schlüssel und Kurztexte ersetzt, die Leserichtung bleibt.
- V-08 und V-09, Profil-Teil: Muster I setzt in der Legende weiterhin «Abstand zur Mitte: wie nah im Alltag», obwohl die Listenansicht keinen Abstand zeigt (auf dieser Website ersetzt); Kontinuum schmal mit Endbeschriftungen ohne Achse.
- V-10: Kreislauf in der Listenansicht bei grosser Schrift: Kästen stehen mittig in verschiedener Breite, zwei von drei Verbindungsstrichen treffen den nächsten Kasten nicht.
- R2-08 (zurückgestellt am 12.10.2026, Entscheid der Fachstelle): Muster E mit einer gemeinsamen Zeile über beide Spalten, damit Merkmale, die in beiden Spalten gleich sind, nur einmal stehen. Danach den Rechte-Vergleich auf der Website umstellen («Das geht immer: …» über beiden Spalten, darunter Auskunft und Akteneinsicht); Plan (`statement`, `understood`) mitführen.
- R1-01 (Trennpunkte der Absenderzeile am Zeilenanfang), R1-02 (freie px-Werte in `starter.css`), R1-04 (Kurztext und Ansatzpunkt in Figuren 15 px).
- BD-08: Regionen in Figuren, erst nach den realen Screenreader-Läufen entscheiden.

**Prüfung durch Personen oder weitere Prüfsitzungen**

- W1-25: Leitlinien, Recht, Statistiken und weitere Angebote am Original prüfen. Ausnahme seit 12.10.2026: Die drei Angebote aus W1-F-19 wurden am Original geprüft (Nachtrag unten). Aus den Prüfumgebungen der dritten bis fünften Prüfsitzung waren die Originale gesperrt (fünfte: `curl` «CONNECT tunnel failed, response 403», WebFetch «getaddrinfo ENOTFOUND www.vaskzuerich.ch»).
- Mindestens zwei reale Screenreader-Läufe (Protokollvorlage unter «Bedienung und Barrierefreiheit») und ein Test mit Hardwaretastatur und auf einem realen Touch-Gerät; dabei den Kreislauf mit den neuen Sätzen und der seit 12.10.2026 umgestellten Kurzbeschreibung anhören (BD-12).
- Die 70 externen Links prüfen (69 bis `b8288d0` und neu die Treffpunkte-Seite der VASK Zürich aus K1; #44 fügt nur einen internen Link hinzu). Teilnachweis vom 12.10.2026: die Anbieterlinks aus W1-F-19 und die Treffpunkte-Seite im Nachtrag geprüft (HTTP 200); kein Gesamtabschluss des Linktests.
- **Vor der Veröffentlichung (bleibt aus W1-33, mit W1-34):** die VASK-Gruppe an beiden Stellen (`rechte-und-angebote` › `angebote`, `je-nach-rolle` › `erwachsene-kinder`) auf den aktuellen Stand prüfen (V1, V2: «Neue Gruppe im Aufbau»). Den Vermerk «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.» dabei so nachführen, dass er ein Prüfdatum nennt, das auch die VASK-Angaben deckt; fällt der Vermerk weg oder wandert er, den Satz «Weitere Angebote und den Stand dieser Angaben finden Sie unter …» auf `je-nach-rolle` anpassen (W1-34).
- Lesetest mit Angehörigen, wo möglich trialogisch (R2 ersetzt ihn nicht).
- Nach weiteren Korrekturen (Freigabe-Änderungen aus W1-F-21, W1-34 Variante 2, später R2-08): die betroffenen Stufen in einer Sitzung nachprüfen, die die Korrekturen nicht umgesetzt hat; bei Textänderungen auch S für die geänderten Sätze. R3 erst, wenn W1-F-21, W1-31 und die realen Screenreader-Läufe vorliegen.

## Nachtrag W1-F-19 · Quellen- und Linkabgleich (12.10.2026)

**Geprüft durch:** Codex, unabhängige Quellenprüfung; diese Sitzung hat die Website nicht erstellt und ändert ausschliesslich diesen Prüfbericht.

**Ergebnis:** Die Quellenprüfung für die drei Angebote ist abgeschlossen. Stand by You und EQUILIBRIUM sind im bestehenden Wortlaut redaktionell bestätigt. Bei VASK ist das aufgeführte Angebot bestätigt, der laufende Betrieb der Gruppe für erwachsene Kinder jedoch nicht eindeutig nachgewiesen: Der verlinkte Flyer beschreibt eine neue Gruppe im Aufbau. Die unten formulierte Präzisierung K1 ist offen. **W1 insgesamt bleibt offen; insbesondere W1-F-15 und W1-F-21 bleiben vorbehalten.** Dieser Nachtrag ist keine fachliche Freigabe der Texte oder Visualisierungen und keine Veröffentlichungsfreigabe.

### 1. Prüfstand und genaue Fundstellen

[PR #19](https://github.com/christaegger-dot/puk-website-profil/pull/19) wurde laut GitHub am **11.10.2026 um 21:49:01 UTC** zusammengeführt (Merge `e63bd73ef9d4686845dadca0ce0da39811d1d226`). Sein letzter Head war `51892c5a9e48e4851aa8bc06ccb3e0c6b238f27a`; der Branch `website/depression-angehoerige-pruefung` war beim Abruf nicht mehr auflösbar. Deshalb wurden dieser feste PR-Stand und der aktuelle Stand `5f68c39a855fe25e713fd9cacda013dd46109f8c` abgeglichen. Die drei Angebotseinträge sowie ihr Datumsvermerk sind in beiden Ständen wortgleich.

**Seite:** «Rechte und Unterstützung im Kanton Zürich», Abschnitt `#angebote` / «Unterstützung für Angehörige», Datei `content/rechte-und-angebote.html`. [Fester Dateistand](https://github.com/christaegger-dot/puk-website-profil/blob/5f68c39a855fe25e713fd9cacda013dd46109f8c/templates/website/depression-angehoerige/content/rechte-und-angebote.html).

| Fundstelle | Tatsächlicher Wortlaut ohne Linklabel | Bewertung |
| --- | --- | --- |
| Zeile 32, «Im Kanton Zürich» / VASK Zürich | «Beratung, offene Treffpunkte in Zürich und Winterthur, Angehörigenkurse, Gruppe für erwachsene Kinder.» | Beratung, offene Treffpunkte und Kursangebot bestätigt. Beim letzten Teil Zielgruppe und Angebotsstand präzisieren: geschlossener Treffpunkt für erwachsene Kinder psychisch erkrankter Eltern; Flyer nennt neue Gruppe im Aufbau. |
| Zeile 37, «In der ganzen Schweiz» / Stand by You Schweiz | «Verband der Angehörigen psychisch erkrankter Menschen, früher VASK Schweiz; kostenlose, anonyme HelpLine, beantwortet von geschulten Angehörigen.» | Bestätigt; keine notwendige Textkorrektur. Anbieter bezeichnet sich als Dachorganisation/Verein und bestätigt die Umbenennung Anfang 2024. Seine HelpLine-Seite belegt Kostenfreiheit, Anonymität und Ausbildung in Telefonbegleitung. |
| Zeile 39, «In der ganzen Schweiz» / Equilibrium | «Verein für Menschen mit Depression; Selbsthilfegruppen in der Region und online, auch für Angehörige.» | Auf Ebene des Vereinsangebots bestätigt; keine notwendige Textkorrektur. Kein Nachweis, dass an jedem regionalen Standort eine eigene Angehörigengruppe besteht; das behauptet der Eintrag auch nicht ausdrücklich. |
| Zeile 43 | «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.» | Nicht pauschal auf «alle Angebote geprüft» ändern: Diese Nachprüfung umfasst nur die drei hier genannten Anbieter. |

Mitgeprüft wurde der bereits in W1-F-19 erwähnte Querverweis: [ `content/je-nach-rolle.html`, Zeile 58](https://github.com/christaegger-dot/puk-website-profil/blob/5f68c39a855fe25e713fd9cacda013dd46109f8c/templates/website/depression-angehoerige/content/je-nach-rolle.html#L58), Abschnitt `#erwachsene-kinder`: Dort wird die VASK-Gruppe ebenfalls ohne Hinweis auf den Aufbau genannt. K1 betrifft beide Stellen.

### 2. Aussage- und Zugangsabgleich

#### VASK Zürich

- **Beratung und Kurse:** Die Beratungsstelle richtet sich an Angehörige und weitere nahestehende Personen; Kontaktaufnahme und Terminvereinbarung sind vorgesehen. Die persönliche Beratung hat gestaffelte Gebühren für Mitglieder und Nichtmitglieder [V3]. Der Angehörigenkurs «Wegweiser» ist ausgeschrieben, mit Anmeldung beziehungsweise Warteliste; die Kursseite nennt CHF 150 für Mitglieder und CHF 200 für Nichtmitglieder, aber keinen nächsten Kursbeginn [V4]. Das bestehende Wort «Beratung» oder «Angehörigenkurse» verspricht weder Kostenfreiheit noch sofortige Teilnahme und kann bleiben.
- **Offene Treffpunkte:** Zürich und Winterthur sowie die Zielgruppe Angehörige/Freundeskreis sind bestätigt [V1]. Der Flyer 2026 nennt für diese beiden offenen Treffen keine Anmeldepflicht [V5, Seite 1 und Seite 2 unten]. Diese Zugangserleichterung darf nicht auf die geschlossene Gruppe übertragen werden.
- **Erwachsene Kinder:** Die Angebotsseite führt einen geschlossenen Treffpunkt für erwachsene Kinder psychisch erkrankter Eltern auf und verweist für Informationen und Anmeldung an `treffpunkte@vaskzuerich.ch` [V1, letzte Angebotsüberschrift]. Der dort direkt verlinkte einseitige Flyer enthält jedoch «Neue Gruppe im Aufbau» [V2, Seite 1 unter der Zielgruppe]. Der aktuelle Anbieterauftritt belegt somit das ausgeschriebene Angebot und den Anmeldeweg, aber keinen bereits laufenden regelmässigen Betrieb, Starttermin oder freien Platz.
- **Zeitbezug:** Die Monatsschemata der offenen Treffen haben im Jahresflyer Ausnahmen, unter anderem Zürich im Dezember und Winterthur im April sowie Ferienpausen [V5, Seite 2]. Die geprüfte Website nennt keine konkreten Termine; daran muss nichts korrigiert werden.
- **Verbleibend:** Bei einer gewünschten Aussage «die Gruppe findet bereits statt» wäre eine Auskunft der VASK zum Start/Betrieb nötig. Für die vorsichtige Formulierung unter K1 ist diese zusätzliche Zusage nicht erforderlich. Gebühren oder Mitgliedschaftsvoraussetzungen der geschlossenen Gruppe sind in V1/V2 nicht genannt; daraus keine Kostenfreiheit oder Pflichtmitgliedschaft ableiten.

#### Stand by You Schweiz

- **Organisation:** Die offizielle Organisationsseite bestätigt die frühere Bezeichnung VASK Schweiz und den Namenswechsel Anfang 2024 [S2].
- **HelpLine:** Unter «Hilfe bekommen» nennt der Anbieter Kostenfreiheit und Anonymität ausdrücklich. Die Begleitpersonen sind Angehörige oder Vertraute mit eigener Erfahrung und Ausbildung in Telefonbegleitung [S1]. Der bestehende Ausdruck «geschulte Angehörige» ist als Kurzbeschreibung ausreichend gestützt; eine Umformulierung ist nicht nötig.
- **Zugang und Zeiten, Stand 12.10.2026:** Direkter Telefonkontakt; zusätzlich E-Mail an `helpline@stand-by-you.ch`. Telefonzeiten: Mo 9.30–19.00, Di 10.00–14.00 und 17.00–19.00, Mi 10.00–12.00, Do 10.00–12.00 und 13.30–15.30, Fr 8.30–18.00 Uhr; öffentliche Feiertage ausgenommen. Bei besetzter Leitung wird E-Mail angeboten und eine Rückmeldung innerhalb von 48 Stunden genannt [S1]. Eine Anmeldung, Zuweisung oder Mitgliedschaft wird als Voraussetzung nicht verlangt. Eine telefonische Rund-um-die-Uhr-Verfügbarkeit ist nicht ausgewiesen und wird von der geprüften Website nicht behauptet.
- **Gegencheck:** Das BAG bestätigt Kostenfreiheit und Vertraulichkeit für Angehörige und Vertrauenspersonen [S3]. PDGR bestätigt die kostenlose, anonyme HelpLine [S4]. Die dort zusätzlich genannte E-Mail-Adresse weicht von S1 ab; für Kontaktangaben ist die aktuelle Anbieterquelle S1 massgebend. Die Website selbst enthält keine solche abweichende E-Mail-Adresse.
- **Entscheid:** Wortlaut und Direktlink beibehalten. Kein offener Nachweis zu den vorhandenen Aussagen.

#### EQUILIBRIUM

- **Angebot und Zielgruppen:** «Selbsthilfe» richtet sich ausdrücklich an Betroffene oder Angehörige und bietet Hilfe bei der Suche nach oder Gründung von Gruppen [E1]. Die verlinkte Karte nennt regionale Standorte sowie getrennte Onlinegruppen für Betroffene und Angehörige [E3]. Der Vereinszweck ist auf der Startseite beschrieben [E4].
- **Zugang zur Online-Angehörigengruppe:** Die Detailseite nennt Austausch am dritten Donnerstag im Monat, 19.00–21.00 Uhr. Meeting-ID und Zugangscode werden per E-Mail verschickt; An- beziehungsweise Abmeldung ist vorgesehen. Genannt sind Verschwiegenheit, Respekt, Pünktlichkeit und die Nutzung von Kopfhörern [E2]. Die Gruppenkarte nennt `shg-ang@depressionen.ch` als Angehörigenkoordination [E3]; die E-Mail-Anzeige auf den HTML-Seiten setzt JavaScript voraus.
- **Zeitbezug:** Ausgeschrieben sind 17.09., 15.10., 19.11. und 17.12.2026 [E2, «Termine 2026»]. Am Prüftag 12.10.2026 liegt der Septembertermin in der Vergangenheit; der nächste ausgeschriebene Termin ist der 15.10.2026. Die geprüfte Website enthält keine veraltete Datumsangabe zu dieser Gruppe. Diese Termine gehören als Prüfnachweis in den Bericht; für aktuelle Termine weiterhin zum Anbieter verweisen.
- **Nicht gleichsetzen:** Die ausdrücklich für Mitglieder kostenlose fachliche Beratung auf E1 ist ein anderes Angebot als die Selbsthilfegruppen. Die geprüften Gruppenseiten nennen keine eindeutige allgemeine Gebühren- oder Mitgliedschaftsregel für die Teilnahme. Solche Voraussetzungen weder behaupten noch als ausgeschlossen darstellen. Die vorhandene Website verspricht hier keine Kostenfreiheit.
- **Entscheid:** Bestehender Kurztext ausreichend nachgewiesen. Regionale Angehörigengruppen, freie Plätze und künftige Termine sind bei konkretem Vermittlungsbedarf gruppenspezifisch abzuklären; kein zusätzlicher Blocker für den vorhandenen allgemeinen Hinweis.

### 3. Technischer Linkabgleich

Am **12.10.2026** wurden die folgenden Adressen per HTTPS-GET ohne Anmeldung abgerufen. **Alle sieben lieferten HTTP 200; die Endadresse blieb jeweils unverändert.** Die Zielinhalte wurden zusätzlich gelesen; eine reine Statuscode-Prüfung war nicht die Grundlage des Sachurteils.

| Link im Bestand oder im Nachweis | Technisches und inhaltliches Ergebnis |
| --- | --- |
| [VASK-Startseite](https://www.vaskzuerich.ch/de/) – tatsächlich in Zeile 32 verlinkt | 200; richtige Organisation. Allgemeiner Einstieg, kein Direktlink zur Gruppe. |
| [Stand by You / Kontakt](https://stand-by-you.ch/kontakt/) – tatsächlich in Zeile 37 verlinkt | 200; unmittelbar zur HelpLine mit Leistungsbeschreibung, Zeiten und Kontaktwegen. Passender Direktlink. |
| [EQUILIBRIUM-Startseite](https://www.depressionen.ch/) – tatsächlich in Zeile 39 verlinkt | 200; richtige Organisation; Selbsthilfe-Navigation und Online-Angehörigengruppe erreichbar. |
| [VASK / Treffpunkte](https://www.vaskzuerich.ch/de/Angebote-der-VASK/Treffpunkte) | 200; zielgenauer Beleg und sinnvoller Link für den Gruppenhinweis in K1. |
| [VASK / Flyer erwachsene Kinder 2026](https://www.vaskzuerich.ch/media/archive1/vask_flyer/FLVO_TreffpunktEKA5_2026_neuesLogo.pdf) | 200, PDF; eine Seite; «Neue Gruppe im Aufbau» auch visuell geprüft. |
| [EQUILIBRIUM / Selbsthilfe](https://www.depressionen.ch/selbsthilfe) | 200; direkter Zugang zur Beschreibung und Gruppenkoordination. Präziser als die Startseite, aber kein zwingender Link-Fix. |
| [EQUILIBRIUM / Online-Angehörigengruppe](https://www.depressionen.ch/18-aktuelles/veranstaltungen/shg/shg-angehoerige/82-shg-angehoerige) | 200; Zielgruppe, Termine und Zugangsbedingungen vorhanden. |

**Prüfgrenze:** Keine Testanrufe, E-Mails oder Anmeldungen versandt; keine freien Plätze oder Durchführung einzelner Treffen zugesichert. Die Formulare wurden als Informationsquelle gelesen, nicht abgeschickt. Das ist ein vollständiger Link- und Aussagenabgleich für die drei Angebotseinträge, kein vollständiger Linktest der Website und kein Test der Erreichbarkeit des Personals.

### 4. Ausschliesslich notwendige Textpräzisierung K1

**K1 · VASK-Gruppe: ausgeschriebenes Angebot und gesicherter Betriebsstand unterscheiden.** Der bisherige knappe Eintrag ist nicht als widerlegt zu streichen. Er nennt aber weder die vollständige Zielgruppe noch den Aufbauhinweis und kann laufende Verfügbarkeit nahelegen.

**Vorschlag für `rechte-und-angebote.html` / VASK:**

> Beratung, offene Treffpunkte in Zürich und Winterthur sowie Angehörigenkurse. Für erwachsene Kinder psychisch erkrankter Eltern befindet sich laut VASK-Flyer eine neue Gruppe im Aufbau. Zum aktuellen Stand und zur Anmeldung informiert die VASK Zürich.

Den allgemeinen VASK-Link für Beratung/Kurse kann man beibehalten; beim Hinweis zur Gruppe gezielt auf [Treffpunkte der VASK Zürich](https://www.vaskzuerich.ch/de/Angebote-der-VASK/Treffpunkte) verlinken.

**Konsistenzkorrektur derselben Aussage in `je-nach-rolle.html` / `#erwachsene-kinder`:** Den ersten Satz zu Grenzen und eigener Unterstützung belassen; nur den anschliessenden VASK-Satz ersetzen:

> Bei der VASK Zürich befindet sich laut Flyer eine neue Gruppe für erwachsene Kinder psychisch erkrankter Eltern im Aufbau. Die VASK informiert über den aktuellen Stand und die Anmeldung.

**Status:** Vorschläge formuliert, nicht in die Website übernommen. Keine Textänderung bei Stand by You oder EQUILIBRIUM erforderlich. Keine pauschale Aktualisierung des Prüfdatums aller Angebote. Nach Übernahme von K1 sind lediglich beide geänderten Stellen auf Übereinstimmung und Linkziel nachzuprüfen; dieser Bericht verlangt keine neue umfassende Prüfung bestätigter Angaben.

### 5. Quellenregister mit Fundstellen

Alle Quellen **abgerufen am 12.10.2026**. Wo kein redaktionelles Änderungsdatum ausgewiesen ist, gilt das Abrufdatum; Jahreszahlen in Flyern und konkrete Termine sind gesonderte Aktualitätsbelege.

| ID | Anbieter / Quelle | Genaue Fundstelle und Verwendung |
| --- | --- | --- |
| V1 | [VASK Zürich: Beratungs-Treffpunkte](https://www.vaskzuerich.ch/de/Angebote-der-VASK/Treffpunkte) | Untere drei Angebotsüberschriften: offene Treffen Zürich/Winterthur, geschlossener Treffpunkt erwachsene Kinder; unmittelbar darunter Information/Anmeldung und Flyerlink. |
| V2 | [VASK Zürich: Treffpunkt für erwachsene Kinder, Flyer 2026](https://www.vaskzuerich.ch/media/archive1/vask_flyer/FLVO_TreffpunktEKA5_2026_neuesLogo.pdf) | Seite 1, unter der Zielgruppe: Aufbauhinweis; unten: Anmelde- und Auskunftsadresse. PDF zusätzlich visuell geprüft. |
| V3 | [VASK Zürich: Beratungsstelle](https://www.vaskzuerich.ch/de/Angebote-der-VASK/Beratungsstelle) | Einleitung sowie «Standort», «Kontakt und Anmeldung» und Kostentabelle. |
| V4 | [VASK Zürich: Angehörigenkurse](https://www.vaskzuerich.ch/de/Angebote-der-VASK/Angehoerigen-Kurse) | «Wegweiser», «Ort und Leitung», «Kursgebühren», Anmeldung/Warteliste; [Anmeldeformular](https://www.vaskzuerich.ch/de/Angebote-der-VASK/Angehoerigen-Kurse/Anmeldung-zum-Anhoerigenseminar) aufrufbar. |
| V5 | [VASK Zürich: Offene Beratungs-Treffpunkte 2026, Flyer](https://www.vaskzuerich.ch/media/archive1/vask_flyer/FLVO_Beratungs-Treffpunkte2026_alle%28ohneQRCode%29_neuesLogo.pdf) | Seite 1: Teilnahme ohne Anmeldung; Seite 2: Kalender mit Ausnahmen und Abgrenzung zum geschlossenen Treffpunkt. |
| S1 | [Stand by You Schweiz: Kontakt](https://stand-by-you.ch/kontakt/) | «Hilfe bekommen», direkt bei der HelpLine: Zeiten, Kosten/Anonymität, Ausbildung, Mailkontakt/Rückmeldung. Primärbeleg für den bestehenden Satz. |
| S2 | [Stand by You Schweiz: Organisation](https://stand-by-you.ch/organisation/) | «Dafür setzen wir uns ein – unser Manifest», «Statuten», «Aktuelle Jahresberichte», «So arbeiten wir zusammen»: Dachorganisation, Namenswechsel, Vereinsstruktur. |
| S3 | [BAG: Hilfsangebote zur psychischen Gesundheit](https://www.bag.admin.ch/de/hilfsangebote-zur-psychischen-gesundheit) | «Weitere Informations- und Beratungsangebote» → «Für Angehörige»: Kostenfreiheit, Vertraulichkeit, Zielgruppe. |
| S4 | [PDGR: Für Angehörige](https://www.pdgr.ch/erwachsenenpsychiatrie/angehoerige/) | «Beratung» → «Stand by You – für Angehörige und Vertraute …» → HelpLine: Kostenfreiheit und Anonymität. Nur ergänzender Beleg, keine Übernahme der abweichenden Mailadresse. |
| E1 | [EQUILIBRIUM: Selbsthilfe](https://www.depressionen.ch/selbsthilfe) | Einleitungsabsätze, Koordination Betroffene/Angehörige, Kartenlink; darunter gesonderter Abschnitt «Hotline» für fachliche Mitgliederberatung. |
| E2 | [EQUILIBRIUM: SHG Angehörige Online](https://www.depressionen.ch/18-aktuelles/veranstaltungen/shg/shg-angehoerige/82-shg-angehoerige) | Titel/Einladung; Zugangscode per E-Mail; «Termine 2026»; «Die wichtigsten SHG Grundregeln». |
| E3 | [EQUILIBRIUM: SHG-Schweizerkarte](https://www.depressionen.ch/images/pdf/SHG-Karte.pdf) | Seite 1, Standortliste Nr. 22/23 sowie «SHG-Koordination» mit getrennter Angehörigenadresse. |
| E4 | [EQUILIBRIUM: Startseite](https://www.depressionen.ch/) | «Depressionen gehen uns Alle an» sowie «Nächste Termine» → «SHG Angehörige Online». Nicht alle dort noch als «nächste» bezeichneten Termine liegen nach dem Prüftag. |

### 6. Eintrag für die weitere Bearbeitung

| Teilauftrag | Status nach dieser Prüfung |
| --- | --- |
| Existenz und Beschreibung der drei Angebote anhand aktueller Quellen abgleichen | erledigt im dokumentierten Umfang; VASK nur mit Aufbauvorbehalt |
| Drei bestehende Links technisch und inhaltlich prüfen | erledigt; 3/3 HTTP 200 ohne Weiterleitung; ergänzend vier Nachweis-/Direktlinks ebenso geprüft |
| Notwendige Korrekturen formulieren | erledigt; ausschliesslich K1 an zwei VASK-Fundstellen |
| K1 in der Website umsetzen und nachprüfen | erledigt: umgesetzt am 12.10.2026 (`16da1ec`, #41), nachgeprüft von der vierten Prüfsitzung (W1, Prüfrunde 6); W1-F-19 abgeschlossen |
| Bereits laufende VASK-Gruppe, Starttermin oder freie Plätze bestätigen | nicht nachgewiesen; nur erforderlich, wenn eine solche konkrete Zusage aufgenommen werden soll |
| Weitere Anbieter und sämtliche übrigen externen Links der Website | ausserhalb dieses Auftrags; frühere offenen Prüfpunkte bleiben bestehen |
| Fachstellenentscheid W1-F-15 und fachliche Freigabe W1-F-21 | unverändert offen; nicht Gegenstand dieser Quellenprüfung |

## Grundlage und Arbeitsstand der bauenden Sitzung

- **Plan:** Claude Doc «Website Depression für Angehörige: Plan zur Freigabe», von der Fachstelle am 10.10.2026 freigegeben mit diesen Entscheiden: acht Seiten in der vorgeschlagenen Reihenfolge; Titel «Depression: Informationen für Angehörige»; eigene Abschnitte für erwachsene Kinder und für Freundinnen und Freunde; Abschnitt zu Suizidgedanken mit Lesepfad von der Startseite; **kein** Abschnitt zur fürsorgerischen Unterbringung; Link auf wie-gehts-dir.ch, nicht auf reden-kann-retten.ch; eigene Materialien (Partner-Heft, BipolarSite, BUE-Materialien) später; Inhaltsverantwortung «Ch. Egger, Fachstelle Angehörigenarbeit PUK».
- **Inhaltsgrundlage:** Recherchebericht «Depression bei Erwachsenen» (2026), Ergänzung «Ursachen, Formen, Männer und Frauen» und Dokument «Angehörige von Menschen mit Depression: Situation und Belastung» mit den unabhängig nachgeprüften Schlüsselzahlen (10.10.2026).
- **Status aller Texte:** Musterentwurf, sichtbar im Kopfbereich jeder Seite und in der Fusszeile («Musterentwurf, Stand 10.10.2026 – fachliche Prüfung ausstehend»).
- **Build und Gate (10.10.2026, bauende Sitzung):** `node tools/build.mjs` → 8 Seiten, 0 blockierende Befunde, 13 Hinweise (11 × Visualisierung nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen). `node tools/gate.mjs --selftest` → 53/53.
- **Messungen der bauenden Sitzung (bitte nachrechnen):** kein horizontaler Überlauf bei 1280, 360 und 320 px auf allen acht Seiten (Playwright, `scrollWidth − clientWidth = 0`); Schaltfläche «Schritt für Schritt aufbauen» (Seite «Depression verstehen», Abbildung 2) per Tastatur auslösbar, Live-Region meldet «Schritt 1 von 3: Verletzlichkeit»; keine Hexwerte und keine `style`-Attribute in `content/`.
- **Bildschirmfotos** aller elf Figuren bei 1280 und 360 px wurden der Fachstelle im Chat gezeigt; sie sind als Arbeitsstand nicht im Repository. Bis `b64516c` stimmte das nicht: `transition360.png` lag im Website-Ordner (W3-03). Geprüft am 11.10.2026 nach W3-03: `git ls-files` im Website-Ordner zeigt als Bilddateien nur `assets/favicon.svg` und `assets/logo.svg`.
- **Rückmeldung der Fachstelle zu den Bildern (10.10.2026, Ch. Egger):** «Die Bilder sind perfekt.» Bildsprache und Zeichnungen sind damit gutgeheissen. Die fachliche Freigabe der Figuren (`approvalStatus` im Visualisierungsplan) bleibt «ausstehend», bis W1 und S abgeschlossen sind, weil sich Kernaussagen und Beschriftungen in den Figuren dort noch ändern können.

### Abweichungen vom freigegebenen Plan

| Stelle | Plan | Umsetzung | Grund |
| --- | --- | --- | --- |
| Rechte und Angebote › `vorsorge` | Bezugsperson, Vertrauensperson, Patientenverfügung | Bezugsperson, Entbindung von der Schweigepflicht, Patientenverfügung | Die Vertrauensperson nach Art. 432 ZGB gilt bei fürsorgerischer Unterbringung; dieser Teil entfällt nach Entscheid der Fachstelle. |
| Übersicht › `einstieg` | «rund jede dritte Person» (Lebenszeit, Prüfbedarf) | «rund jede zehnte Person» mit mittelschweren bis schweren Beschwerden (SGB 2022) | Die Lebenszeitzahl beruht auf Symptomen, nicht auf Diagnosen; die SGB-Zahl ist eindeutig belegt. |
| Behandlung und Verlauf › `weg` | Anordnung mit 15 und 30 Sitzungen (Prüfbedarf) | ohne Sitzungszahlen | Prüfbedarf vermieden; die Zahlen sind für Angehörige nicht nötig. |
| Rechte und Angebote › `arbeit-geld` | Hilflosenentschädigung | ohne Frankenbeträge | Die Beträge ändern per 1.1.2027. |
| `sensitiveTopics` | Übersicht und Rechte ohne sensible Themen | beide mit `selbstgefaehrdung` | Die Seiten nennen «Suizid» (Lesepfad, Kapitelliste, Quellentitel des BAG); Vertragsprüfung des Gates. |
| Begleiten | ohne `zwang` | mit `zwang` | Der Text sagt «nie Täuschung, Zwang oder Drohungen»; Vertragsprüfung des Gates. |
| Quellenangaben | – | Fachartikel als «Autorin et al. Jahr, Zeitschrift» statt mit Titel | Titel wurden in der Recherche nicht immer wörtlich erfasst; so wird kein Titel erfunden. |

### Zusammenführung vor Abschluss der Prüfung (11.10.2026)

- **Was geschah:** Pull Request #13 wurde am 11.10.2026 um 01:15 von der Fachstelle zusammengeführt, während alle Prüfstufen offen waren. Das weicht von der Regel «Kein Merge, solange Stufen offen sind» ab.
- **Entscheid:** Die Website bleibt auf `main` (Entscheid der bauenden Sitzung im Auftrag der Fachstelle, 11.10.2026). Begründung: Jede Seite ist als «Musterentwurf: noch nicht fachlich geprüft» markiert; das ganze Repository sendet `X-Robots-Tag: noindex, nofollow`; eine Veröffentlichung als eigenständige Website (`export.mjs --production`) blockiert das Produktionsgate weiterhin, bis dieser Bericht vollständig ist. Ein Rückgängigmachen hätte die spätere Zusammenführung verkompliziert, ohne mehr Schutz zu bringen.
- **Folge:** Der Entwurf ist unter der Netlify-Adresse des Profils erreichbar (`/templates/website/depression-angehoerige/`, am 11.10.2026 geprüft). Die weiteren Prüf- und Umsetzungsrunden laufen auf dem Branch `website/depression-angehoerige-pruefung` in einem neuen Entwurfs-Pull-Request.

### Von der Fachstelle entschieden (Ch. Egger)

- Rechte und Angebote, Abbildung 1: Die Zürcher Regel zur Auskunft an Bezugspersonen (§ 15 Patientinnen- und Patientengesetz ZH) gilt auch in Privatpraxen. Markierung entfernt, Text unverändert.
- Für sich sorgen › `was-hilft`: Der «Familiencoach Depression» ist aus der Schweiz nutzbar. Markierung entfernt, Text unverändert.
- Für sich sorgen › Quellen: Die Meta-Analyse zu Achtsamkeitsprogrammen nur mit vollständiger, überprüfbarer Angabe aufführen, sonst weglassen. Die bauende Sitzung hat sie in PubMed gefunden und wieder eingesetzt: Zhang X, Ren H, Wang C, Zhang Y, Zhou Q, Fan J (2024). The effect of mindfulness-based interventions on mental health outcomes and wellbeing of informal caregivers of people with mental illness: A systematic review and meta-analysis. *International Journal of Mental Health Nursing*, 33(4), 797–816. https://doi.org/10.1111/inm.13295 (PMID 38291626). 13 Studien mit 1007 Teilnehmenden; laut Zusammenfassung weniger Stress, Depressivität und Belastung, kein Effekt auf Angst; die Autorinnen und Autoren fordern methodisch strengere Studien.

- **11.10.2026 · Fragen W1-F und W2-F:** Die Fachstelle übernimmt die Empfehlungen der bauenden Sitzung («Empfehlungen ok»): W1-F-01 a, b, c ja; W1-F-02 an die NVL-Zahl angleichen; W1-F-03 kürzen auf das Gezeigte; W1-F-04 b, mit Butzlaff und Hooley 1998; W1-F-05 beide Ja; W1-F-06 ja; W1-F-07 ja; W1-F-08 a (Bild bleibt); W1-F-09 ja; W1-F-10 ja; W1-F-12 weglassen (Entscheid gegen einen Abschnitt zur fürsorgerischen Unterbringung); W1-F-13 «sage dir»; W1-F-14 Verweis vor der Fachstelle; W1-F-15 Heft in die Quellenliste; W1-F-16 «In einer grossen Befragung in Deutschland»; W1-F-17 alle Abschwächungen; W1-F-18 ja; W1-F-20 ja. W2-F-01 ja; W2-F-02 «Einverständnis», einmal «(rechtlich: Einwilligung)»; W2-F-03 ja; W2-F-04 ja; W2-F-05 «Plan für schwierige Zeiten»; W2-F-06 ja; W2-F-07 a ja (kurzer Abschnitt auf «Behandlung und Verlauf»), b über W1-F-09, c nein. **Offen bei der Fachstelle:** W1-F-11 (Betreuungsgutschriften, Kurzurlaub), W1-F-15 (Abgleich des Boots mit dem Heft), W1-F-19 (Angebote), W1-F-21 (fachliche Freigaben).

- **11.10.2026 · Fragen S-F-01 und S-F-02:** Die Fachstelle übernimmt alle Vorschläge S-01 bis S-27 («beides passt»), bei S-17 und S-21 mit gleichem Sinn, bei S-20 mit dem neuen Beispielsatz. Hausregel für Personenbezeichnungen: Paarformen («Ärztinnen und Ärzte») als Regel, neutrale Formen («ärztliche Fachperson»), wo ein Satz sonst zu schwer wird; Gesprächsbeispiele bleiben, wie sie sind.

- **11.10.2026 · W1-F-11 (Arbeit und Geld):** Der Abschnitt «Arbeit und Geld» auf `rechte-und-angebote` wird gestrichen. Begründung der Fachstelle: Das Thema müsste viel konkreter erklärt werden und sprengt den Rahmen der Website. Damit entfallen W1-21, der Prüfbedarf zu den Erklärungen in S-21 und die Aussage «auch bei einer psychischen Erkrankung» (W1-10).

- **11.10.2026 · V-05, BD-05/W3-06, Familiencoach, W3-05, W3-08 (Ch. Egger):** V-05: Grenzen beim Kreislauf im Wortlaut «Nicht jede Familie gerät in diesen Kreis, und er kann an jeder Station beginnen. Das Bild zeigt eine mögliche Dynamik, keine Ursache.» BD-05/W3-06: Die acht Seiten bleiben; die Hauptnavigation wird auf dem Telefon ein aufklappbares Menü aus dem Profil (umgesetzt in Profil 2026.10.1, Pull Request #23; die Website übernimmt es nach dessen Zusammenführung). Familiencoach: «kostenlos» wird gestrichen (nicht belegt). W3-05: Die Website ist ein Angebot der Fachstelle Angehörigenarbeit der PUK, kein offizielles Angebot der PUK; Impressum und Datenschutz nennen die Fachstelle als Herausgeberin (Vorlage aus Profil 2026.10.1). W3-08: Veröffentlichung über Netlify unter `https://depression-angehoerige.netlify.app` (Entscheid 11.10.2026). `siteUrl` wird erst mit der Übernahme von Profil 2026.10.1 gesetzt: Mit dem heutigen Starter blockiert das Gate jeden Build, sobald `siteUrl` gesetzt ist (kanonischer Link gilt als externe Quelle; am 11.10.2026 nachgestellt, im Profil 2026.10.1 behoben).

- **12.10.2026 · S-33, V-11, BD-12 und R2-08 (Ch. Egger):** S-33, V-11 und BD-12 umsetzen («Setze S-33, V-11, BD-12 und R2-08 um»). R2-08 auf Rückfrage zurückgestellt («Zurückstellen»): Der Rechte-Vergleich bleibt mit fünf Zeilen, bis Muster E eine gemeinsame Zeile über beide Spalten hat. Eine fachliche Freigabe (W1-F-21) ist damit nicht erteilt.

- **12.10.2026 · K1 (W1-F-19):** den Vorschlag K1 aus dem Nachtrag W1-F-19 (Abschnitt 4) an beiden Stellen übernehmen («Setze K1 um»). Eine fachliche Freigabe (W1-F-21) ist damit nicht erteilt.

- **12.10.2026 · W1-33 und S-34:** beide umsetzen («setze W1-33 and S-34 um»). Eine fachliche Freigabe (W1-F-21) ist damit nicht erteilt.

### Umgesetzt nach den Prüfrunden (bauende Sitzung)

- **11.10.2026 · W2-01, W2-02 (Verweise L1 bis L12, `5ad9cc8`):** zwölf Verweise nach W2-C eingefügt, je ein Satz mit Link und ohne neue fachliche Aussage. L1 und L2 im Wortlaut von `ihre-situation` › `angst`; L9 als Link auf «Grenzen setzen» im bestehenden Satz; L12 als Übergangssatz (`.puk-longform__transition`) am Ende der Seiten 2 bis 7, nicht auf der letzten Seite. Geprüft: alle internen Links führen auf vorhandene Ziele; kein horizontaler Überlauf bei 320 und 1280 px; Gate 0 blockierend.
- **11.10.2026 · Entscheide W1-F und W2-F, Quellen W1-09 und W1-10:**
  - **Rechte (W1-01, W2-03, W2-04):** Abb. 1 Kurztext an § 15 Abs. 2 PatG ZH angepasst; Formulierungsbeispiel «Falls Sie mir nichts über meinen Mann sagen dürfen: …»; Visualisierungsplan `v-ra-vergleich` › `resonance` «vielleicht»; «Bezugsperson» nur noch auf `rechte-und-angebote`, vor Abb. 1 erklärt (erste, dann zweite Linie nach Leitfaden der Gesundheitsdirektion); «Einverständnis» auf allen Seiten, einmal «(rechtlich: Einwilligung)»; `index` «nahestehende Menschen».
  - **Verlauf (W1-02, W1-20):** `formen` «Bei etwa der Hälfte …» für beide Formen; «nach dem Abklingen der Beschwerden» in `vorbeugen` und Abb. 2 Schritt 5.
  - **Belastung (W1-03, W1-04, W1-08, W1-19):** `gesundheit` auf Idstad gekürzt; Vertiefung Abb. 2 mit Butzlaff und Hooley 1998; Gefäss-Kurztext: «fehlende Information» fliesst zu, «dagegen lässt sich etwas tun» (Bild unverändert); Barometer-Zahl auf `index` und `nicht-allein` mit «in Deutschland» und «für das Familienleben».
  - **Rollen (W1-05, W1-13, W1-14, W1-15, W1-16):** Geschwister «ein erhöhtes Risiko», Satz zur Unterstützung gestrichen, «psychische Erkrankungen allgemein» benannt; Schutzfaktoren nach Collishaw (fünf gemessene Faktoren); Absatz zu einem Elternteil, der erst im Alter erkrankt; Waage Mitte «sage dir»; Satz zu Scham bei Kindern (Dam und Hall, bisher ohne Aussage auf der Seite).
  - **Hilfen (W1-06, W1-07, W1-11, W2-06):** «Familienkurse zur Krankheit» ohne «nachweislich»; Achtsamkeit mit Einschränkung; Paartherapie nur auf `fuer-sich-sorgen` ausgeführt, auf `ihre-situation` und `je-nach-rolle` je ein Satz mit Link; Barbato auf `ihre-situation` entfernt.
  - **Struktur (W2-05, W2-09, W2-10, W2-11, W1-18):** «mittelgradig» und «(nach einem Fragebogen)»; «Plan für schwierige Zeiten»; Abschnitt «Wenn ein Klinikaufenthalt nötig wird» nach Abb. 2 auf `behandlung-und-verlauf`; sechster Kernsatz auf `index`; `eigene-krise`: Zuständigkeitsverweis vor dem Satz zur Fachstelle.
  - **Abschwächungen (W1-12):** Salk («in Befragungen … die Merkmale»), Martin («kann sich eher … zeigen», «noch nicht sicher geklärt»), Sullivan («Lebenserfahrungen und andere Einflüsse»), Whisman («Studien weisen darauf hin»), Martire («kann … leichter werden»), Kern Gefäss («weniger von Ihrer Stärke»), Lichttherapie («kann helfen»), Kika («Manche»), Dazzi («kann sogar entlasten»), «oft Zeichen der Krankheit»; Etikett «Eltern depressiver Jugendlicher» ersetzt. «die Hälfte der Erkrankten» (`verlauf`) bleibt bis S.
  - **Trauer, Psychotherapie (W1-23, W1-24):** Satz zur ungewöhnlich langen Trauer; Anordnung «Hausärztin, Psychiaterin oder eine andere dazu berechtigte Ärztin», Quelle Art. 11b KLV.
  - **Quellen (W1-09):** vollständige Angaben mit Titel und DOI aus W1-C für alle Fachartikel; Barbato mit Parabiaghi; SGPP-Titel «Die Behandlung der unipolaren depressiven Störungen. Update 2025, Teil 1»; Albermann und Müller, Pro Mente Sana, Greally, MHFA (revised 2018) korrigiert; PatG § 15 Abs. 2; NVL «Kapitel 1.4 (Verlauf), 3 bis 6»; Studie zur Dauer genannt (Spijker et al. 2002, über PubMed geprüft); Arbeitsheft in der Quellenliste von `begleiten`. Schomerus nur mit dem englischen Titel aus PubMed (deutscher Originaltitel nicht geprüft). Bei Salk ohne Band, weil «143» das Gate für Notrufnummern auslöst.
  - **Neue Quellen (W1-10), über PubMed geprüft:** Cipriani et al. 2018 (Wirkung der Antidepressiva, `depression-verstehen`, `behandlung-und-verlauf`); Chung et al. 2017 (Zeit nach dem Klinikaustritt); Butzlaff und Hooley 1998; Spijker et al. 2002. Aussagen ohne Quelle angepasst: «Über Belastendes zu sprechen, kann zu Beginn anstrengend sein»; «acht bis zwölf Wochen» gestrichen; «Wird er früh erkannt, lässt sich die Behandlung rasch anpassen»; «Sie dürfen die Veränderungen ansprechen»; «Ferien oder einen Ortswechsel als Heilmittel verordnen»; «Partnerinnen und Partner leben oft Tag und Nacht mit der Krankheit»; Rasic «deutlich häufiger» statt «zwei- bis dreimal»; Angehörigengruppen «von den Teilnehmenden sehr geschätzt»; van Wijngaarden ohne Rangfolge; Barometer «fühlten sich nicht gut informiert oder nicht einbezogen».
  - **Gate:** `rechte-und-angebote` erhält `zwang` in `sensitiveTopics` (Quellentitel «im psychiatrischen Zwangskontext»).
  - **Geprüft:** Gate 0 blockierend, 13 Hinweise; alle internen Links mit Ziel; kein horizontaler Überlauf bei 320 und 1280 px; Abb. 1 `rechte-und-angebote` und der neue Abschnitt zum Klinikaufenthalt bei 360 und 1280 px angesehen.

- **11.10.2026 · Befunde der Prüfrunde 2 (W1-26 bis W1-30) und W1-10:** leeres Listenelement auf `ihre-situation` entfernt (W1-26); Quellen über PubMed geprüft und ergänzt: Fiske, Wetherell und Gatz 2009 (Depression im Alter, `depression-verstehen` › `anders` und `je-nach-rolle` › `erwachsene-kinder`, W1-27), Simon et al. 1999 (körperliche Beschwerden in der Hausarztpraxis), O'Hara und McCabe 2013 sowie Paulson und Bazemore 2010 (rund um die Geburt, Mütter und Väter); «Die ersten Wochen und Monate» (W1-28); «Und manche ringen damit» (W1-29); «In der deutschen Befragung fühlten sich …» (W1-30). Weiterhin ohne deckende Quelle: «Baby Blues … vergeht von selbst» (nicht im Abstract von O'Hara und McCabe), «kann wie eine beginnende Demenz wirken», «Flucht in die Arbeit». Die Vorschläge aus S sind noch nicht umgesetzt; sie warten auf S-F-01 und S-F-02.

- **11.10.2026 · Sprach-Review S (S-01 bis S-27, Hausregel S-F-02):** alle Vorschläge im Wortlaut der Prüfsitzung umgesetzt, darunter: «Diese Fachpersonen dürfen …» (S-01); «Was besonders belastet», auch im Visualisierungsplan (S-02); sechs Verweissätze mit kurzem Linktext «Bei Suizidgedanken», «Der Weg in die Behandlung», «(Seite Für sich sorgen)», Link auf «Zeichen der Krankheit» (S-03); Reihenfolge bei Männern und beim Klinikaustritt (S-04, S-05); Waage «wie schlecht es ihm geht», auch im Plan (S-10); Geschwister «Als Schwester oder Bruder dürfen Sie …» (S-11); Kernsatz «… ist kein Egoismus» und erster Satz auf `begleiten` › `ansprechen` gestrichen (S-15); Verweissatz nach den Gesprächsbeispielen, «behandelnde Fachperson» (S-16); «sollen nicht abrupt abgesetzt werden» (S-17); «(Muster I)» gestrichen (S-19); Bezugsperson in `vorsorge` nur noch Verweis nach oben, Beispiel «Vielleicht dürfen Sie mir nichts … sagen» (S-20); Erklärungen für NVL, Schweizer Behandlungsempfehlungen, Tagesklinik, Achtsamkeitsprogramme, Betreuungsgutschriften und Hilflosenentschädigung (S-21); Paarformen auf `index`, `je-nach-rolle`, `ihre-situation`, `rechte-und-angebote`, neutrale Form bei der Anordnung der Psychotherapie und «Hausarztpraxis» im Plan für schwierige Zeiten (S-22); S-06 bis S-09, S-12 bis S-14, S-18, S-23 bis S-27 wie vorgeschlagen. **Nicht umgesetzt:** S-21 «VASK» ausschreiben – Entscheid der Fachstelle vom 11.10.2026: nicht ausschreiben. **Prüfbedarf bleibt:** Erklärungen zu Betreuungsgutschriften und Hilflosenentschädigung fachlich und rechtlich prüfen (mit W1-F-11). Geprüft: Gate 0 blockierend, 13 Hinweise; alle internen Links mit Ziel; keine leeren Listenelemente; kein horizontaler Überlauf bei 320 und 1280 px.

- **11.10.2026 · Abschnitt «Arbeit und Geld» gestrichen (W1-F-11):** Abschnitt `arbeit-geld` mit Eintrag in der Seitennavigation entfernt; «Unterstützung für Angehörige» heisst jetzt 03; Quellen OR Art. 329h und 329i, BSV-FAQ und Merkblätter 4.13 und 1.03 entfernt; Zeile `v-ra-arbeit-geld` aus dem Visualisierungsplan entfernt; Seitenbeschreibung und Teaser auf `index` angepasst. Geprüft: Gate 0 blockierend, alle internen Links mit Ziel.

- **11.10.2026 · Befunde der Runde vom 11.10.2026 (Stand `9ff948b`), mit Freigabe der Fachstelle (Auftrag vom 11.10.2026, Teil A).** Umgesetzt in `b64516c` (Texte, Plan, Quellen, `transition360.png`) und `69b2a8c` (Sprachauszeichnung, Links, Verwendungszweck der Quellen, Pfeilzeichen). Je Befund:
  - **W3-03:** `transition360.png` entfernt, in `b64516c` zusammen mit Textänderungen, nicht in einem eigenen Commit; die Historie des Branches wird dafür nicht umgeschrieben. Beleg: `git ls-files` im Website-Ordner zeigt als Bilddateien nur `assets/favicon.svg` und `assets/logo.svg`.
  - **W1-10 Rest:** drei Quellen über PubMed geprüft (Titel, Autorinnen und Autoren, Zeitschrift, Band, Heft, DOI) und im Format der übrigen Einträge eingetragen:
    - `depression-verstehen` › Quellen: Tosto et al. 2023, *Maternity Blues: A Narrative Review*, Journal of Personalized Medicine 13(1), PMID 36675815, «Verwendung: «Baby Blues» häufig und vorübergehend.»;
    - `depression-verstehen` › Quellen: von Zimmermann et al. 2023, *Masculine depression and its problem behaviors …*, European Archives of Psychiatry and Clinical Neuroscience 274(2), PMID 36855002, «Verwendung: Flucht in die Arbeit; gilt auch bei Frauen.»;
    - `ihre-situation` › Quellen: Hennipman-Herweijer, van Nieuw Amerongen-Meeuse, Schaap-Jonker, Boonstra 2024, *The experiences of living with a suicidal family member …*, Journal of Psychiatric and Mental Health Nursing 31(5), PMID 38470095, «Verwendung: dauernde Wachsamkeit; alle Diagnosen, nicht nur Depression.» Vier Namen ausgeschrieben wie bei Dazzi, Ipsen, Katsuki 2022 und Rasic;
    - Fiske et al. 2009 auf `depression-verstehen`: «Verwendung: Anzeichen bei älteren Menschen; kann wie eine beginnende Demenz wirken.» (Satz in `anders`: «Eine Depression kann dann wie eine beginnende Demenz wirken.»).
  - **BD-02 / W3-02:** 50 englische Titel in den Quellenlisten in `<span lang="en">…</span>` gefasst, ohne Autorinnen und Autoren, Jahr und Zeitschrift, Wortlaut unverändert: `begleiten` 3, `behandlung-und-verlauf` 4, `depression-verstehen` 13, `fuer-sich-sorgen` 8, `ihre-situation` 9, `je-nach-rolle` 13; `rechte-und-angebote` hat nur deutsche Titel. Eingeschlossen sind die drei neuen Quellen, «ICD-11 for Mortality and Morbidity Statistics» (WHO), «Depression: Mental Health First Aid Guidelines (revised 2018)» (MHFA, zweimal), der übersetzte Titel bei Schomerus 2007 (in den eckigen Klammern) und der unverlinkte Titel Hooley und Gotlib 2000. Beleg: gebaute Seiten zusammen 50 × `lang="en"`, z. B. `depression-verstehen` › Quellen «Salk RH, Hyde JS, Abramson LY (2017): `<span lang="en">`Gender differences in depression … symptoms`</span>`. Psychological Bulletin». Nicht ausgezeichnet: Namen wie «Stand by You».
  - **S-28:** `rechte-und-angebote` › `vorsorge`: «Wer das ist, wenn sie niemanden bezeichnet, steht im Abschnitt Was Sie erfahren und was Sie immer sagen dürfen.» mit Link auf `#schweigepflicht` (`b64516c`).
  - **S-29:** `fuer-sich-sorgen` › `grenzen`: «Gereiztheit gehört oft zur Krankheit; Beleidigungen, Drohungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen.» (`b64516c`).
  - **S-30:** `je-nach-rolle` › `kinder`: «Sie dürfen weiter Zeit für Freundinnen, Freunde und Hobbys haben.» (`b64516c`).
  - **V-01 (Kurztext):** `behandlung-und-verlauf` › Abb. 1 (`v-bv-vergleich`): «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge; Beschriftung und Linienart unterscheiden die beiden Wege.»; `rechte-und-angebote` › Abb. 1 (`v-ra-vergleich`): «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge.» (`b64516c`). Beide bei 1280 und 360 px angesehen. Der Komponententeil von V-01 gehört ins Profil.
  - **V-02:** Plan `v-ro-spannung` › `statement`: «… und sage dir, bevor ich etwas unternehme.»; `v-fs-netz` › `statement`: «nah (eine Schwester oder ein Bruder, eine Freundin), Umfeld (Chor oder Verein, Arbeitgeberin oder Arbeitgeber, Nachbarschaft), fachliche Unterstützung (Hausarztpraxis, Fachstelle Angehörigenarbeit, Angehörigengruppe)» – dieselben acht Einträge wie in der Figur (`b64516c`).
  - **V-03:** `je-nach-rolle` › Abb. 1 (`v-ro-spannung`), Kurztext: «… in besseren mehr Freiraum. Wichtig ist, dass keine Seite dauerhaft wegfällt.»; «; der gestrichelte, gekippte Balken zeigt das» gestrichen, ohne Ersatzsatz, weil die Kernaussage «… und die Mitte kann sich verschieben» schon sagt (`b64516c`).
  - **V-04:** `ihre-situation` › Abb. 1 (`v-is-gefaess`), Kurztext mit vier Sätzen: «…, Suizidgedanken, enges Zusammenleben; an ihnen können Angehörige wenig ändern.»; der Satz zur fehlenden Information unverändert (`b64516c`). Bei 1280 und 360 px angesehen.
  - **V-06:** `v-ro-spannung` ohne die drei Schlüssel «Linke Seite · einfache Linie», «Mitte · Drehpunkt», «Rechte Seite · doppelte Linie»; 0 × `puk-vis-balance__key` in `content/` (`b64516c`). Bei 1280 und 360 px angesehen: Die Überschriften «Da sein», «Was beides verbindet» und «Loslassen» tragen die Unterscheidung. Die Vorlage H gehört ins Profil.
  - **BD-10:** `ihre-situation` › `was-belastet`: «Dagegen lässt sich etwas tun: Mehr dazu unter Was Sie erfahren und was Sie immer sagen dürfen.» (Link auf `rechte-und-angebote.html#schweigepflicht`). Auf der gebauten Seite heisst nur noch der Link der Hauptnavigation «Rechte und Angebote».
  - **BD-09 / W3-10, PDF:** 11 Links auf 7 PDF-Dateien tragen «(PDF)» am Ende des Linktexts: `begleiten` 2, `behandlung-und-verlauf` 1, `depression-verstehen` 2, `fuer-sich-sorgen` 1, `ihre-situation` 2, `je-nach-rolle` 2, `rechte-und-angebote` 1. **Grösse offen:** aus der Arbeitsumgebung nicht sicher ermittelbar; der Proxy lehnte am 11.10.2026 alle 7 Adressen ab («CONNECT tunnel failed, response 403»). Die Grössen trägt nach, wer die Links am Original prüft.
  - **BD-09 / W3-10, externe Links im Fliesstext:** `je-nach-rolle` › `kinder` «Institut Kinderseele Schweiz (kinderseele.ch)» und `je-nach-rolle` › `erwachsene-kinder` «VASK Zürich (vaskzuerich.ch)», die Domain jeweils im Linktext. Die übrigen 8 externen Links ausserhalb der Quellenlisten (alle in `rechte-und-angebote` › `angebote`, darunter wie-gehts-dir.ch) nennen die Domain schon im Linktext. In den Quellenlisten ergibt sich «extern» aus dem Zusammenhang (W3-10).
  - **W3-09:** `behandlung-und-verlauf` › Abb. 3 (`v-bv-fruehzeichen`), `.puk-vis-cont__ends`: «es geht gut» und «die Depression ist zurück» ohne «←» und «→»; die Achse darüber zeigt die Richtung mit SVG-Pfeilspitzen. Gemessen bei 1280 px: Die Seite lädt nur noch `Rubik-Light`, `Rubik-Regular` und `Rubik-Medium`, nicht mehr `Rubik-VariableFont_wght.woff2`. Bei 1280 und 360 px angesehen.
  - **Selbstprüfung und Arbeitsstand:** Visualisierungs-Check Punkt 1 «48 Zeilen» (`b64516c`); Punkt 8 bei E «in derselben Reihenfolge» statt «auf gleicher Höhe» (V-01); Punkt 10 «teilweise», weil beim Kreislauf die Grenzen fehlen (V-05); Satz zu den Bildschirmfotos unter «Grundlage und Arbeitsstand» geprüft und mit Beleg ergänzt.
  - **Hinweis für W1 (nicht geändert, weil der Wortlaut der Titel unverändert bleiben sollte):** `behandlung-und-verlauf` › Quellen: Der Titel von Cipriani et al. 2018 endet nach «major depressive disorder»; auf `depression-verstehen` steht er vollständig mit «: a systematic review and network meta-analysis».
  - **Geprüft:** `node tools/build.mjs` → 8 Seiten, Gate draft 0 blockierend, 13 Hinweise (11 × `visual-approval`, `site-url`, `review-report`); `node tools/gate.mjs --selftest` → 53/53; 234 interne Links, Sprungziele und lokale Ressourcen ohne Fehler; 0 `tel:`, 0 `style`-Attribute; kein horizontaler Überlauf bei 320, 360 und 1280 px auf allen 8 Seiten (Playwright, `scrollWidth − clientWidth = 0`), keine Konsolenfehler. Waage, Gefäss, beide Vergleiche und die Frühzeichen-Achse bei 1280 und 360 px angesehen; die Bildschirmfotos liegen im Scratchpad, nicht im Repository.
  - **Offen, nicht umgesetzt (Auftrag Teil B):**
    - *Entscheid der Fachstelle:* V-05 (Wortlaut der Grenzen beim Kreislauf); BD-05 / W3-06 (Hauptnavigation mit 8 Punkten); W3-05 (Impressum und Datenschutzerklärung); W3-08 (Ziel-Adresse `siteUrl`, 404-Seite); «kostenlose» beim Familiencoach (`fuer-sich-sorgen` › `was-hilft`; die Studie nennt es nicht, W1-10); W1-F-15; W1-F-19; W1-F-21.
    - *Profil (Design-System-Artefakt):* W3-01; BD-01 / W3-07; BD-06 / W3-04; BD-03; BD-04; V-01 (Komponente); V-06 und V-07 (Vorlage H); BD-07; BD-11; W3-11.
    - *Prüfung am Original und durch Personen:* W1-09 Rest (Abrufdaten, PatG § 19, NVL-Kapitel) und W1-25; Grössen der 7 PDF-Dateien (BD-09 / W3-10); mindestens zwei reale Screenreader-Läufe; die externen Links.

- **11.10.2026 · V-05 und Familiencoach:** Vertiefung von `v-is-kreislauf` («Was die Forschung sagt») um «Grenzen: …» im Wortlaut der Fachstelle ergänzt; `fuer-sich-sorgen` › `was-hilft`: «das kostenlose Programm» → «das Programm». **Wartet auf Profil 2026.10.1 (#23):** Menü-Navigation, Seiten «Impressum und Datenschutz» und 404, Name des Logo-Links, 44-px-Ziele, Vergleich mit gemeinsamen Zeilen und Druck – die Website übernimmt die neuen Starter-Dateien nach der Zusammenführung von #23 (Übernahmeliste im README des Profils). Geprüft: Gate 0 blockierend.

- **11.10.2026 · Profil 2026.10.1 übernommen** (nach der Zusammenführung von #23, main `cb176c5`), nach den Übernahmeschritten im README des Profils:
  - **Werkzeuge:** `tools/` (mit `selftest/`, neu `gate.css` und `gate-browser.js`), `starter.css` und `gate.html` aus dem Starter ersetzt. Die alten Kopien hatten keine eigenen Änderungen (`git log` zeigt für sie nur `cdf75c4`). `_headers` bleibt, identisch mit dem Starter.
  - **`site.config.json`:** `legal` (Impressum, Datenschutz → `impressum-datenschutz.html#impressum` bzw. `#datenschutz`); Seiten `impressum-datenschutz` und `404` (`"role": "not-found"`) mit den Planzeilen des Starters; `assetVersion` `r4-8`; `siteUrl` `https://depression-angehoerige.netlify.app` (Entscheid W3-08). Jede Seite hat jetzt einen kanonischen Link, z. B. `index.html`: `<link rel="canonical" href="https://depression-angehoerige.netlify.app/index.html">`.
  - **Impressum und Datenschutz (Entscheid W3-05):** Vorlage des Starters, Herausgeberin Fachstelle Angehörigenarbeit. Ergänzt: «Die Website ist ein Angebot der Fachstelle Angehörigenarbeit, kein offizielles Angebot der Psychiatrischen Universitätsklinik Zürich.» Im Datenschutz steht nur, was die Website tut: Eintrag «Felder zum Notieren» gestrichen (0 Treffer für `textarea`, `input`, `contenteditable` in `content/`); bei den Protokollen Netlify als Anbieter genannt: «Die Website wird über den Dienst Netlify (Netlify, Inc., USA) ausgeliefert. … Diese Angaben können auch in den USA bearbeitet werden.»
  - **Prüfbedarf (Fachstelle):** Datenschutzangaben rechtlich prüfen lassen, besonders Netlify und die Bearbeitung in den USA; entscheiden, ob eine Postadresse ins Impressum gehört (die Vorlage nennt nur die E-Mail-Adresse).
  - **Stamm-`_headers`:** Block `/templates/website/depression-angehoerige/*` mit der Content-Security-Policy des Starters (Übernahme Schritt 6); Hinweis im Kommentar, dass die Website ihren Block erst später bekommt, entfernt.
  - **Inhalte nach Übernahme Schritt 5:** Kein Kurztext nennt «gleiche Höhe» oder schmal ausgeblendete Bildteile (einziger Treffer «nebeneinander» im Screenreader-Text von `depression-verstehen` › Abb. 2, zutreffend). Waage ohne `puk-vis-balance__key` (0 Treffer), Reihenfolge wie Vorlage H. Keine ← → in `content/`. Gate ohne `lang-part`. Cipriani et al. 2018 auf `behandlung-und-verlauf` vervollständigt («: a systematic review and network meta-analysis», wie auf `depression-verstehen`; erledigt damit den Hinweis oben).
  - **Geprüft:** `node tools/build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise (11 × `visual-approval`, `review-report`; `site-url` entfällt). `node tools/gate.mjs --selftest` → 65/65. `node tools/gate.mjs --production` blockiert nur noch 11 × `visual-approval` und `review-report`. Playwright auf allen 10 Seiten bei 1280 und 360 px: kein horizontaler Überlauf, keine Figur mit Überlauf, keine Konsolenfehler; Kopf 180 px bei 1280 und 270 px bei 360 px (vorher 592 px). Menü bei 320 px mit reduzierter Bewegung: Tab-Folge Sprunglink → Logo-Link «Psychiatrische Universitätsklinik Zürich – Startseite …» → «Menü» (`aria-expanded="false"`, 44 px hoch); Enter öffnet (`true`, 8 Links, je mindestens 44 px, `aria-current` auf «Begleiten»), Tab führt in die Liste, Escape schliesst und setzt den Fokus auf «Menü»; kein Überlauf bei 320 px. Druck `ihre-situation` (A4, 9 Seiten): die Vertiefungen beider Figuren stehen im Text («Grenzen: Nicht jede Familie …»). Angesehen: Rechte › Abb. 1 bei 1280 px (Merkmale auf gleicher Zeilenhöhe), Waage bei 360 px (Da sein · Was beides verbindet · Loslassen), Fusszeile mit «Impressum · Datenschutz», Seiten «Impressum und Datenschutz» (360 px) und 404 (1280 px). Bildschirmfotos im Scratchpad, nicht im Repository.
  - **Übernommen, nicht selbst nachgemessen:** Fokus mit erzwungenen Farben (BD-03), Beschriftungen bei 200 % Schrift (BD-04), Logo im dunklen Kontrastmodus (BD-07), Schriftgrösse-Einstellung (BD-11). Alles aus «Wartet auf Profil 2026.10.1» ist damit umgesetzt; nachprüfen muss die Prüfsitzung.
  - **Beobachtung für das Profil (nicht geändert):** Bei 360 px bricht die Absenderzeile so um, dass ein Trennpunkt am Zeilenanfang steht («• Psychiatrische Universitätsklinik Zürich •»).

- **11.10.2026 · R2-01 und W1-32 umgesetzt** (Auftrag der Fachstelle vom 11.10.2026: «Setze die Befunde R2-01 und W1-32 um»). **Rollenwechsel:** Diese Sitzung hat die Runden vom Stand `e63bd73` geprüft (zweite Prüfsitzung) und ist für diese Umsetzung bauende Sitzung. Die Nachprüfung von R2-01 und W1-32 macht deshalb eine andere Sitzung. Geändert sind nur `content/` und die gebauten Seiten; `site.config.json`, Plan und Figurenzeichnungen sind unverändert.
  - **R2-01, Kurztexte (`p.puk-vis-short`):**
    - `depression-verstehen` › Abb. 1 (`v-dv-schichten`): «Was Angehörige sehen und hören, ist nicht alles. Darunter kann liegen, was die erkrankte Person erlebt, oft ohne es zeigen oder sagen zu können. Das ist eine Möglichkeit, keine Gewissheit: Nachfragen hilft mehr als Deuten.» statt «Über der Wasserlinie steht, …». Abweichung vom Vorschlag: «ist nicht alles» statt «ist oft nur ein kleiner Teil», damit keine neue Mengenaussage entsteht.
    - `behandlung-und-verlauf` › Abb. 1 (`v-bv-vergleich`): «Die Übersicht beantwortet Fragen, die Angehörige oft stellen: wie die Behandlung wirkt, wann es besser wird und worauf zu achten ist. Bei einer schweren Depression wirkt die Kombination beider am besten.» Der Satz zu Reihenfolge, Beschriftung und Linienart ist gestrichen. Abweichung: Der erste Satz ist neu, weil der Kurztext sonst nur einen Satz hätte (Leitlinie: zwei bis vier); er nennt die Merkmale der Abbildung, keine neue fachliche Aussage.
    - `behandlung-und-verlauf` › Abb. 2 (`v-bv-weg`): «Eine Tagesklinik oder Klinik braucht es nur bei Bedarf, und auch wenn die Beschwerden abgeklungen sind, geht die Behandlung weiter. Schon beim ersten Schritt können Sie helfen.» statt «Nummer und Linie zeigen …». Abweichung: «Die meisten beginnen in der Hausarztpraxis.» weggelassen; die Kernaussage sagt schon «Der erste Schritt ist oft die Hausarztpraxis», und «die meisten» wäre stärker als «oft».
    - `behandlung-und-verlauf` › Abb. 3 (`v-bv-fruehzeichen`): erster Satz «Die Linienstärke zeigt, wie stark die Depression wieder spürbar ist.» gestrichen; der Kurztext hat zwei Sätze.
    - `ihre-situation` › Abb. 2 (`v-is-kreislauf`): «Rückzug und Gereiztheit können Sorge, Antreiben und Übernehmen auslösen. Das kann erschöpfen und ungeduldig machen, und wer sich unverstanden fühlt, zieht sich eher weiter zurück. An der eigenen Erschöpfung und Ungeduld können Sie ansetzen.» statt «Vier Stationen folgen aufeinander; …». Abweichung: vorsichtig formuliert («können», «eher») wie die Kernaussage; Station 4 bleibt ohne Zuordnung zu einer Person («wer sich unverstanden fühlt»), weil das Prüfbedarf ist (R2-04). Die Zeile «Leserichtung: …» bleibt: Leitlinie 07 und Muster B verlangen sie (Profil-Teil von R2-01).
    - `fuer-sich-sorgen` › Abb. 1 (`v-fs-netz`): «Unterstützung kann von nahen Menschen, aus dem Umfeld und von Fachstellen kommen. Manches gibt es schon, anderes liesse sich nutzen.» statt «Der Abstand zur Mitte zeigt, …». Die Legende («besteht schon», «wäre möglich», «Abstand zur Mitte: wie nah im Alltag») bleibt; sie stammt aus Muster I (Profil-Teil von V-08).
    - `rechte-und-angebote` › Abb. 1 (`v-ra-vergleich`): erster Satz «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge.» gestrichen; der Kurztext hat drei Sätze.
  - **R2-01, Beschriftungen:** Schlüssel «Weg A · durchgezogene Linie», «Weg B · gestrichelte Linie» (`behandlung-und-verlauf` › Abb. 1) und «Spalte A · durchgezogene Linie», «Spalte B · gestrichelte Linie» (`rechte-und-angebote` › Abb. 1) entfernt; die Spaltenüberschriften tragen die Unterscheidung. Die gestrichelte Oberkante der Spalte B bleibt (R2-02 ist nicht beauftragt). `ihre-situation` › Abb. 1 (`v-is-gefaess`): «Ansatzpunkt für Angehörige · beim Abfluss» statt «… beim Abfluss, doppelter Ring». `depression-verstehen` › Abb. 2 (`v-dv-entstehung`): Teil 1 endet mit «Sie ist bei jedem Menschen anders.» (ohne «im Bild der gefüllte untere Teil»); Teil 3: «Wird sie erreicht, kann eine Depression beginnen. Wer sehr verletzlich ist, erreicht sie schon mit wenig Belastung; bei anderen braucht es viel.» statt «Bei der linken Säule …».
  - **Unverändert:** die Kurzbeschreibungen für Screenreader (`p.puk-sr`, `aria-describedby`, 193 bis 367 Zeichen) beschreiben die Zeichnungen weiterhin; das verlangt R2, Punkt 22.
  - **W1-32:** `impressum-datenschutz` › Kopf: «Musterentwurf: noch nicht fachlich geprüft. Rechtliche Angaben: Stand 11.10.2026, rechtliche Prüfung ausstehend.» (`p.puk-longform__boundary`, wie auf `rechte-und-angebote`).
  - **Satzvergleich vorher/nachher** (gebaute Seiten, Skript): 16 Sätze oder Satzteile entfernt oder geändert, 17 neu (gezählt an Satzzeichen, auch Schlüssel und Bezeichnungen), verteilt auf die 6 genannten Seiten; auf den übrigen 4 Seiten 0 Änderungen. «Die Merkmale stehen in beiden Spalten …» bleibt nur in den Kurzbeschreibungen für Screenreader.
  - **Geprüft:** `node tools/build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise (11 × `visual-approval`, `review-report`); `node tools/gate.mjs --production` → 12 blockierend wie vorher; `sitemap.xml` unverändert. Playwright (Chromium 141), 10 Seiten bei 320, 360, 768, 1024, 1280, 1440 px mit der CSP aus `_headers`: kein Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse; Text-Kontrast auf 10 Seiten bei 1280 und 360 px: 0 unter der Schwelle; Menü bei 320 px auf 10 von 10 Seiten wie vorher (Enter, Escape, Fokus zurück). Vergleiche: Merkmalszeilen ohne Schlüssel weiterhin auf gleicher Höhe (0 px Versatz bei 768 und 1280 px). Angesehen bei 1280 und 360 px: beide Vergleiche, Pfad, Kreislauf, Schichtenmodell, Impressum. Bildschirmfotos im Scratchpad, nicht im Repository.
  - **Offen:** Profil-Teil von R2-01 (Muster E ohne sichtbare Schlüssel, Leserichtung in Muster B, Muster-Kurztexte in den Vorlagen); Nachprüfung von R2-01 und W1-32 durch eine andere Sitzung.

- **11.10.2026 · R2-02 bis R2-07 umgesetzt** (Auftrag der Fachstelle vom 11.10.2026: «Setze R2-02 bis R2-07 um»). Bauende Sitzung wie beim Eintrag davor (die zweite Prüfsitzung, Rollenwechsel); die Nachprüfung macht eine andere Sitzung. Geändert sind `content/`, die gebauten Seiten und in `site.config.json` die Skizze von `v-is-kreislauf`.
  - **R2-02:** `behandlung-und-verlauf` › Abb. 1 (`v-bv-vergleich`): Die Spalte «Antidepressiva» trägt nicht mehr `puk-vis-compare__col--b` und hat damit dieselbe durchgezogene Oberkante wie «Psychotherapie»; die Überschriften unterscheiden die Wege. Bewusst nicht geändert, weil Profil oder Zeichnung: gestrichelte Spalte «Mit Einverständnis» auf `rechte-und-angebote` (passt zu «möglich»), gestrichelte Schwelle in `v-dv-entstehung`, gestrichelte Rahmen «Was die Person erleben kann» in `v-dv-schichten` (passt zu «kann»), doppelte Linie bei «Loslassen» in `v-ro-spannung` (Muster H). Muster E selbst setzt Option B weiterhin gestrichelt (Profil).
  - **R2-03:** `behandlung-und-verlauf` › `behandelbar`: «angeleitete Selbsthilfe (Übungen nach einem Programm, begleitet von einer Fachperson)»; Abb. 1, Psychotherapie: «Am besten untersucht sind die kognitive Verhaltenstherapie und die interpersonelle Therapie. Die erste setzt an belastenden Gedanken und Gewohnheiten an, die zweite an Beziehungen und Veränderungen im Leben.»; Vertiefung: «Wenn mehrere Behandlungen nicht geholfen haben, kommen weitere Verfahren in Frage. Dazu gehören eine Behandlung mit kurzen Stromimpulsen in Narkose (Elektrokonvulsionstherapie), eine Behandlung mit Magnetimpulsen am Kopf (transkranielle Magnetstimulation) und ein Medikament als Nasenspray (Esketamin).» Abweichung vom Vorschlag: je in zwei Sätze geteilt, damit kein Satz über 25 Wörter entsteht (R2-07); die Abkürzungen EKT und rTMS entfallen. Die Erklärungen stammen aus dem Vorschlag der Prüfsitzung; ihr Wortlaut gehört zur fachlichen Freigabe (W1-F-21).
  - **R2-04:** `ihre-situation` › Abb. 2 (`v-is-kreislauf`): Stationen als Sätze aus Sicht der beiden (Variante 2, Kästen bleiben): «Er zieht sich zurück und ist gereizt.» – «Ich mache mir Sorgen, treibe an und übernehme.» – «Ich bin erschöpft und werde ungeduldig.» – «Er fühlt sich unverstanden.» Der Prüfbedarf zu Station 4 ist durch den freigegebenen Plan beantwortet («die Person fühlt sich unverstanden und zieht sich weiter zurück», also die erkrankte Person). Kurzbeschreibung für Screenreader und Plan-Skizze (`statement`) mit denselben Sätzen nachgeführt. Variante 1 (ohne Kästen) bräuchte eine Änderung an Muster B (Profil).
  - **R2-05:** Ansatzpunkt mit Beispielsatz: `v-bv-weg`: «So könnte es klingen: «Soll ich dir helfen, einen Termin zu finden? Ich komme gern mit.»»; `v-is-kreislauf`: «So könnte es klingen: «Ich merke, dass ich ungeduldig werde. Das liegt an meiner Müdigkeit, nicht an dir.»» – Wortlaut aus dem Vorschlag, fachliche Freigabe mit W1-F-21.
  - **R2-06:** `fuer-sich-sorgen` › `erlaubt`: «Eigene Kontakte, Hobbys und Erholung sind wichtig, auch jetzt.»; › `grenzen`: «Eine kurze Begründung genügt.» Die übrigen, gewollt entlastenden Verneinungen bleiben. Verneinungsanteil der Seite 34 % → 30 %.
  - **R2-07:** an der Zahl geteilt: `index` › `einstieg` «Möchten Sie über Ihre Situation sprechen? Die Fachstelle Angehörigenarbeit der PUK berät Sie …»; `je-nach-rolle` › `partner` «… verantwortlich. Sechs von zehn berichteten von Streit oder Ärger.»; › `kinder` «Die Schutzfaktoren wirken zusammen. In einer britischen Studie blieben 48 von 100 Jugendlichen mit allen fünf Schutzfaktoren über die ganze Studienzeit psychisch gesund. Mit höchstens einem Schutzfaktor waren es nur 4 von 100.»; zusätzlich `behandlung-und-verlauf` › `verlauf` «… wieder gesund. Nach einem Jahr waren es drei Viertel.» (gleiches Muster). Sätze über 25 Wörter auf den acht Inhaltsseiten: 12 → 7 (Zählweise wie in R2, Teil 3); unverändert lang bleiben die Sätze ohne Vorschlag (`ihre-situation` › `belastung`, `je-nach-rolle` › `rollen`, `partner` «Viele Paare …», `geschwister`, `freunde`, `begleiten` › `ablehnung`, `fuer-sich-sorgen` › `was-hilft`).
  - **Satzvergleich vorher/nachher** (gebaute Seiten, Skript): Änderungen nur auf `index`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `fuer-sich-sorgen`; jede einem der Befunde oben zugeordnet; kein Satz still entfallen.
  - **Geprüft:** `node tools/build.mjs` → 10 Seiten, Gate draft 0 blockierend, 12 Hinweise; `--production` 12 blockierend wie vorher; gerenderte Seiten identisch mit den gebauten (10 von 10). Playwright, 10 Seiten bei 320, 360, 768, 1024, 1280, 1440 px mit CSP: kein Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse; Text-Kontrast 0 unter der Schwelle. Kreislauf mit den längeren Sätzen: 0 überlappende Beschriftungen bei 768, 900, 1024, 1280, 1440 px und mit 200 % Schrift bei 768 bis 1440 px. Angesehen bei 1280 und 360 px: Kreislauf, Vergleich der Behandlungen, Pfad.
  - **Offen:** Profil-Teil von R2-02 (Muster E ohne wertende Linienart); Nachprüfung von R2-02 bis R2-07 durch eine andere Sitzung; fachliche Freigabe der neuen Erklärungen und Beispielsätze (W1-F-21).

- **11.10.2026 · V-08, V-09, S-31, S-32 und R1-03 umgesetzt** (Auftrag der Fachstelle vom 11.10.2026: «Setze V-08, V-09, S-31, S-32 und R1-03 um»). Bauende Sitzung wie bei den beiden Einträgen davor (die zweite Prüfsitzung, Rollenwechsel); die Nachprüfung macht eine andere Sitzung. Geändert sind `content/`, die gebauten Seiten und in `site.config.json` nur `editorialStatusLabel`.
  - **V-08 (Website-Teil):** `fuer-sich-sorgen` › Abb. 1 (`v-fs-netz`), dritter Eintrag der Legende: «geordnet von nah im Alltag nach weiter weg» statt «Abstand zur Mitte: wie nah im Alltag». Der Eintrag stimmt jetzt in beiden Ansichten: breit von innen nach aussen, schmal und bei 200 % Schrift von oben nach unten (Gruppen «Nah – im Alltag», «Umfeld», «Fachliche Unterstützung»). Der Kurztext war schon mit R2-01 geändert. Abweichung vom Vorschlag: Der Vorschlag «von nah nach weiter weg» war für die Listenansicht im Profil gedacht; hier ersetzt er den Eintrag in beiden Ansichten, mit «im Alltag» wie bisher. Unverändert: `understood` im Plan («Der Abstand zur Mitte macht Nähe sichtbar, eine Liste nicht.») gilt für die breite Ansicht; dass die schmale Ansicht eine Liste ist, gehört zu Muster I (Profil).
  - **V-09 (Website-Teil):** `behandlung-und-verlauf` › Abb. 3 (`v-bv-fruehzeichen`), Vertiefung «Grenzen des Bildes»: «Das Bild zeigt Spielraum, keine feste Abfolge und keine Skala zum Selbsttest.» statt «Die Achse zeigt …». Der Kurztext des Schichtenmodells war schon mit R2-01 geändert. Die Endbeschriftungen «es geht gut» und «die Depression ist zurück» stehen bei 360 px weiterhin ohne Achse (Profil). Die Kurzbeschreibung für Screenreader nennt die Achse weiterhin; sie beschreibt die Zeichnung (R2, Punkt 22).
  - **S-31:** `impressum-datenschutz` › `impressum`: «Für die Inhalte verlinkter Websites sind deren Anbieter verantwortlich.» – im Wortlaut des Vorschlags. Die Website spricht damit nirgends mehr als «wir»; «wir», «uns» und «unsere» stehen nur noch in Beispielsätzen (z. B. `begleiten` › `ablehnung`: «Wenn du magst, rufen wir zusammen an.») und im Begriff «Wir-Krankheit» (`je-nach-rolle`).
  - **S-32:** `impressum-datenschutz` › `impressum`: «Herausgeberin: Fachstelle Angehörigenarbeit der Psychiatrischen Universitätsklinik Zürich» (Wortlaut des Vorschlags) und «Die Website ist ein Angebot der Fachstelle, kein offizielles Angebot der Klinik als Ganzes.» **Abweichung vom Vorschlag:** «Die Website gibt die Fachstelle heraus; …» ist zweideutig, weil «die Website» und «die Fachstelle» gleich lauten; man kann den Satz auch als «die Website gibt die Fachstelle heraus» lesen. Der neue Satz behält den Aufbau der bisherigen Fassung und den Inhalt des Entscheids W3-05; neu sind nur die Kurzform «der Fachstelle» und «der Klinik als Ganzes» aus dem Vorschlag. **Prüfbedarf:** Der Wortlaut gehört zur rechtlichen Prüfung unter W1-31.
  - **R1-03:** `site.config.json` › `editorialStatusLabel`: «Musterentwurf, Stand 11.10.2026 – fachliche Prüfung ausstehend». Beleg: Fusszeile auf allen 10 gebauten Seiten mit «Stand 11.10.2026»; 0 Treffer für «Stand 10.10.2026 – fachliche» in den gebauten Seiten. Unverändert, weil sie den Stand der Recherche nennen: «Rechtliche Angaben: Stand 10.10.2026» und «Angaben zu den Angeboten: Stand 10.10.2026» auf `rechte-und-angebote`; die Zeile «Status aller Texte» unter «Grundlage und Arbeitsstand» beschreibt den Stand vom 10.10.2026.
  - **Satzvergleich vorher/nachher** (gebaute Seiten, Skript): 15 Sätze oder Satzteile geändert, 15 neu. Davon 10 die Fusszeile (R1-03, je Seite einmal), 1 die Legende (V-08), 1 die Vertiefung (V-09), 3 das Impressum (S-31, S-32). Kein Satz still entfallen; die Satzzahl jeder Seite ist gleich geblieben.
  - **Geprüft:** `node tools/build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise (11 × `visual-approval`, `review-report`); `node tools/gate.mjs --production` → 12 blockierend wie vorher; gerenderte Seiten identisch mit den gebauten (10 von 10), `sitemap.xml` unverändert. Playwright (Chromium 141), 10 Seiten bei 320, 360, 768, 1024, 1280, 1440 px mit der CSP aus `_headers`: kein Überlauf (60 von 60), 0 Konsolenfehler, 0 CSP-Verstösse, nur Anfragen an den eigenen Server. Angesehen: Netz bei 1280 px (Kreise, Legende in einer Zeile), bei 360 px und bei 1280 px mit 200 % Schrift (Listenansicht, Legende unter den Gruppen); Kontinuum bei 1280 und 360 px mit offener Vertiefung; Impressum bei 1280 und 360 px. Bildschirmfotos im Scratchpad, nicht im Repository.
  - **Offen:** Profil-Teil von V-08 (Legende in Muster I) und V-09 (Endbeschriftungen des Kontinuums schmal); rechtliche Prüfung des Impressums (W1-31); Nachprüfung durch eine andere Sitzung.

- **12.10.2026 · S-33, V-11 und BD-12 umgesetzt, R2-08 zurückgestellt** (Auftrag der Fachstelle vom 12.10.2026: «Setze S-33, V-11, BD-12 und R2-08 um»; zu R2-08 Entscheid auf Rückfrage: «Zurückstellen»). **Rollenwechsel:** Diese Sitzung hat als dritte Prüfsitzung den Stand `5f68c39` geprüft und die vier Befunde selbst vorgeschlagen; für diese Umsetzung ist sie bauende Sitzung. Die Nachprüfung macht deshalb eine andere Sitzung. Geändert sind nur `content/ihre-situation.html`, `content/behandlung-und-verlauf.html` und die beiden gebauten Seiten; `site.config.json`, Plan und Figurenzeichnungen sind unverändert.
  - **S-33:** `ihre-situation` › Abb. 2 (`v-is-kreislauf`), Kurztext, Wortlaut des Vorschlags: «Rückzug und Gereiztheit können Sorge, Antreiben und Übernehmen auslösen. Das kann Angehörige erschöpfen und ungeduldig machen. Die erkrankte Person fühlt sich dann eher unverstanden und zieht sich weiter zurück. An der eigenen Erschöpfung und Ungeduld können Sie ansetzen.» statt «Das kann erschöpfen und ungeduldig machen, und wer sich unverstanden fühlt, zieht sich eher weiter zurück.» Der Vorschlag galt nur, wenn die Fachstelle Station 4 («Er fühlt sich unverstanden.») bestätigt. Der Auftrag, S-33 umzusetzen, ist hier so gelesen; die fachliche Freigabe der Figur und ihrer Sätze (W1-F-21) bleibt trotzdem offen. Der Kurztext hat jetzt vier Sätze (Leitlinie: zwei bis vier).
  - **V-11:** `behandlung-und-verlauf` › `wege`, Absatz vor Abb. 1: «Die Abbildung vergleicht beide nach denselben Merkmalen.» statt «Die Abbildung stellt beide nach denselben Merkmalen nebeneinander.» – Wortlaut des Vorschlags.
  - **BD-12:** `ihre-situation` › Abb. 2, Kurzbeschreibung für Screenreader (`p#is-kr-text`): «Vier Stationen im Kreis, beschriftet mit Sätzen einer angehörigen Person. Station 1: «Er zieht sich zurück und ist gereizt.» Station 2: «Ich mache mir Sorgen, treibe an und übernehme.» Station 3: «Ich bin erschöpft und werde ungeduldig.» Station 4: «Er fühlt sich unverstanden.» Danach geht es zurück zu Station 1: Der Rückzug verstärkt sich. Die Pfeile zeigen nur die Richtung. Bei Station 3 ist ein Ansatzpunkt für Angehörige markiert.» Je Station ein eigener Satz, der Sprecher vorweg; die drei Schlusssätze unverändert. 437 statt 388 Zeichen. Wie es klingt, zeigt erst ein realer Screenreader-Lauf.
  - **R2-08 nicht umgesetzt (Entscheid der Fachstelle):** Der Rechte-Vergleich (`rechte-und-angebote` › Abb. 1, `v-ra-vergleich`) bleibt mit fünf Zeilen. Gründe, wie in der Rückfrage genannt: Der freigegebene Plan setzt auf die gleichen Zeilen (`understood`: «Gleiche Merkmale nebeneinander zeigen, dass vieles möglich ist, was Angehörige oft für verboten halten.»); eine Zeile über beide Spalten (Variante 1) gibt es in Muster E noch nicht; Variante 2 würde die Zürcher Regel zur Auskunft an Bezugspersonen aus der Übersicht in einen Satz darunter verschieben. R2-08 steht als Wunsch an das Profil unter «Offene Punkte nach Zuständigkeit».
  - **Satzvergleich vorher/nachher** (gebaute Seiten gegen `main` `7cc4e1b`, Skript der Prüfrunden vom 12.10.2026, ganzer `body`): 3 Sätze geändert, 8 neu, nur auf `behandlung-und-verlauf` (1/1, V-11) und `ihre-situation` (Kurztext 1/2, S-33; Kurzbeschreibung 1/5, BD-12). Übrige 8 Seiten unverändert. Kein Satz still entfallen. Kennzahlen nach der Zählweise von R2: `ihre-situation` 70 → 71 Sätze, Verneinung unverändert 12, Sätze über 25 Wörter unverändert 1; gesamt weiterhin 7 Sätze über 25 Wörter.
  - **Geprüft:**
    - `node tools/build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise (11 × `visual-approval`, `review-report`); `node tools/gate.mjs --production` → 12 blockierend wie vorher; `--selftest` 65/65; `sitemap.xml` unverändert.
    - Playwright (Chromium), CSP aus `_headers` per Route: 10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px ohne Überlauf, ohne Konsolenfehler, ohne CSP-Verstösse (Positivkontrolle meldet Inline-Skript und `style`-Attribut), ohne fremde Anfragen.
    - Textkontrast: 10 Seiten × 1280/360 px × Standard und «kontrast», Vertiefungen und Menü offen: 0 unter der Schwelle, tiefster Wert 4,71 : 1. axe-core 4.10.3 auf `ihre-situation` und `behandlung-und-verlauf` bei 1280 und 360 px: 0 Verstösse.
    - Alle 11 Figuren bei 360 bis 1440 px mit 16 und 32 px Standardschrift: 0 überlappende Textzeilen. Kreislauf im Accessibility-Baum: Name «Abbildung 2 · Ein Kreis, in den Paare und Familien geraten können», Beschreibung = neue Kurzbeschreibung.
    - Angesehen: Kreislauf bei 1280 und 360 px. Freundin-Test: unverändert «eher ja»; der Kurztext sagt jetzt, wer erschöpft ist und wer sich unverstanden fühlt. Bildschirmfotos im Scratchpad, nicht im Repository.
  - **Offen:** Nachprüfung von S-33, V-11 und BD-12 durch eine andere Sitzung; BD-12 im realen Screenreader-Lauf anhören; fachliche Freigabe der Kreislauf-Sätze und Kurztexte (W1-F-21); R2-08 im Profil.
- **12.10.2026 · K1 (W1-F-19) umgesetzt** (Auftrag der Fachstelle vom 12.10.2026: «Setze K1 um»). Bauende Sitzung wie beim Eintrag davor (die dritte Prüfsitzung im Rollenwechsel; den Nachtrag W1-F-19 mit K1 hat eine andere, unabhängige Prüfung geschrieben). Die Nachprüfung macht eine andere Sitzung. Geändert sind nur `content/rechte-und-angebote.html`, `content/je-nach-rolle.html` und die beiden gebauten Seiten.
  - **`rechte-und-angebote` › `angebote`, VASK Zürich** (Wortlaut des Vorschlags): «Beratung, offene Treffpunkte in Zürich und Winterthur sowie Angehörigenkurse. Für erwachsene Kinder psychisch erkrankter Eltern befindet sich laut VASK-Flyer eine neue Gruppe im Aufbau. Zum aktuellen Stand und zur Anmeldung informiert die VASK Zürich.» statt «Beratung, offene Treffpunkte in Zürich und Winterthur, Angehörigenkurse, Gruppe für erwachsene Kinder.» Links wie beim Eintrag der Fachstelle darüber, getrennt mit « · »: «vaskzuerich.ch» (Startseite, für Beratung und Kurse, wie bisher) und neu «Treffpunkte auf vaskzuerich.ch» (`https://www.vaskzuerich.ch/de/Angebote-der-VASK/Treffpunkte`, gezielt für den Gruppenhinweis, wie im Vorschlag). Die Domain steht in beiden Linktexten (W3-10); die Namen unterscheiden sich (BD-10).
  - **`je-nach-rolle` › `erwachsene-kinder`** (Wortlaut des Vorschlags, erster Satz unverändert): «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut Flyer eine neue Gruppe für erwachsene Kinder psychisch erkrankter Eltern im Aufbau. Die VASK informiert über den aktuellen Stand und die Anmeldung.» statt «Die VASK Zürich (vaskzuerich.ch) bietet eine Gruppe für erwachsene Kinder psychisch erkrankter Eltern an.» Der Link «VASK Zürich (vaskzuerich.ch)» führt jetzt auf die Treffpunkte statt auf die Startseite, weil der Satz nur von der Gruppe handelt (Begründung wie im Vorschlag für `rechte-und-angebote`). Abweichung vom Vorschlag: nur dieses Linkziel; der Vorschlag nennt für diese Stelle keines.
  - **Unverändert,** wie im Nachtrag verlangt: Stand by You, Equilibrium und der Vermerk «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.»
  - **Satzvergleich vorher/nachher** (gebaute Seiten gegen `main` `b8288d0`, ganzer `body`): 2 Einheiten geändert, 5 neu, nur auf `je-nach-rolle` (1/2) und `rechte-und-angebote` (1/3); übrige 8 Seiten unverändert; kein Satz still entfallen. Kennzahlen nach der Zählweise von R2: `je-nach-rolle` 88 → 89 Sätze, Verneinung unverändert 13, Sätze über 25 Wörter unverändert 4; der VASK-Eintrag auf `rechte-und-angebote` endet wie vorher mit einem Link und zählt in dieser Zählweise nicht.
  - **Geprüft:**
    - `node tools/build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise; `--production` 12 blockierend wie vorher; `--selftest` 65/65; `sitemap.xml` unverändert.
    - Playwright mit CSP aus `_headers`, 10 Seiten × 320 bis 1440 px (70 Messungen): kein Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse, keine fremden Anfragen.
    - Auf beiden Seiten keine zwei gleichnamigen Links mit verschiedenem Ziel.
    - Angesehen: VASK-Eintrag bei 1280 und 360 px, Abschnitt «Erwachsene Kinder» bei 1280 und 360 px.
    - **Nicht geprüft:** die Erreichbarkeit der VASK-Adressen. Aus dieser Arbeitsumgebung sind externe Adressen gesperrt (`curl`: keine Verbindung). Der Nachtrag W1-F-19 nennt für beide Adressen HTTP 200 am 12.10.2026.
  - **Offen:** Nachprüfung durch eine andere Sitzung; nach dem Nachtrag genügt der Abgleich der zwei geänderten Stellen und der Linkziele. Danach ist W1-F-19 abgeschlossen.

- **12.10.2026 · W1-33 und S-34 umgesetzt** (Auftrag der Fachstelle vom 12.10.2026: «setze W1-33 and S-34 um»). **Rollenwechsel:** Diese Sitzung hat als vierte Prüfsitzung den Stand `1a328f5` geprüft und beide Befunde selbst vorgeschlagen; für diese Umsetzung ist sie bauende Sitzung. Die Nachprüfung macht deshalb eine andere Sitzung. Geändert sind nur `content/je-nach-rolle.html` und die gebaute Seite; `site.config.json`, Plan und Figuren sind unverändert.
  - **S-34:** `je-nach-rolle` › `erwachsene-kinder`: «… befindet sich laut VASK-Flyer eine neue Gruppe …» statt «laut Flyer». Zweite Variante des Vorschlags, gewählt, weil `rechte-und-angebote` denselben Ausdruck verwendet.
  - **W1-33:** Prüfung vor der Veröffentlichung: Die VASK-Gruppe steht an beiden Stellen in «Offene Punkte › Prüfung durch Personen» (seit dem Bericht der vierten Prüfsitzung). Dazu im selben Absatz ein neuer Satz mit Verweis auf den Eintrag, unter dem der Stand-Vermerk steht: «Weitere Angebote und den Stand dieser Angaben finden Sie unter Unterstützung für Angehörige.» (Link `rechte-und-angebote.html#angebote`, Linkname wie auf `fuer-sich-sorgen`). **Abweichung vom Vorschlag:** Der Satz zur Gruppe behält seinen Zeitbezug («neue Gruppe … im Aufbau»). Ihn ohne Zeitbezug zu fassen, hiesse die Aussage aus K1 zu ändern, die die Fachstelle so entschieden hat; der Verweis führt stattdessen zum Stand-Vermerk. Keine neue fachliche Aussage.
  - **Satzvergleich vorher/nachher** (gebaute Seiten gegen `main` `f24e5af`, ganzer `body`): 1 Satz geändert, 2 neu, nur auf `je-nach-rolle` (S-34 1/1, W1-33 0/1); übrige 9 Seiten unverändert; kein Satz entfallen. Kennzahlen nach der Zählweise von R2: `je-nach-rolle` 89 → 90 Sätze, Verneinung unverändert 13, Sätze über 25 Wörter unverändert 4 (neue Sätze 21 und 13 Wörter).
  - **Geprüft:**
    - `node tools/build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise; `--production` 12 blockierend wie vorher; `--selftest` 65/65; `sitemap.xml` unverändert.
    - Playwright (Chromium) mit CSP aus `_headers` per Route, 10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px (70 Messungen): kein Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse (Positivkontrolle meldet Inline-Skript und `style`-Attribut), keine fremden Anfragen. 200 %: 0 Überlauf auf 10 Seiten bei 360 bis 1440 px; 0 überlappende Textzeilen in allen 11 Figuren (132 Messungen).
    - `je-nach-rolle`: keine zwei gleichnamigen Links mit verschiedenem Ziel; axe-core 4.10.3 bei 1280 und 360 px: 0 Verstösse. Abschnitt «Erwachsene Kinder» bei 360 px angesehen. Bildschirmfotos im Scratchpad, nicht im Repository.
  - **Offen:** Nachprüfung durch eine andere Sitzung; die VASK-Angaben an beiden Stellen vor der Veröffentlichung prüfen (W1-33).

### Begriffe nach den Entscheiden W2-F-01 bis W2-F-03 (bauende Sitzung, für S und W2-D)

| Begriff | Gilt | Wo |
| --- | --- | --- |
| Bezugsperson | nur als Rechtsbegriff nach PatG ZH, vor Abb. 1 erklärt | `rechte-und-angebote` |
| nahestehende Menschen | allgemein für Angehörige und Freunde | `index` |
| Einverständnis | im Text überall; einmal «(rechtlich: Einwilligung)» | alle Seiten |
| mittelgradig | Schweregrad der Diagnose | `depression-verstehen`, `behandlung-und-verlauf` |
| mittelschwere bis schwere Beschwerden (nach einem Fragebogen) | nur bei der SGB-Zahl | `index`, `depression-verstehen` |
| Plan für schwierige Zeiten | Absprache für frühe Zeichen und Rückfall | `behandlung-und-verlauf` › `vorbeugen` |

### Weiterhin offen nach der Umsetzung (für die nächste W1-Runde)

> **Überholt (11.10.2026):** Stand vor den Prüfrunden vom 11.10.2026, nur noch als Verlauf. Was offen ist, steht unter «Offene Punkte nach Zuständigkeit» oben und im letzten Eintrag unter «Umgesetzt nach den Prüfrunden».

1. **Neue Inhalte, noch nicht geprüft:** Abschnitt «Wenn ein Klinikaufenthalt nötig wird»; Absatz zu einem Elternteil, der erst im Alter erkrankt; Satz zu Scham bei Kindern; Erklärung «Bezugsperson» vor Abb. 1; Satz zur langen Trauer.
2. **Aussagen weiterhin ohne deckende Quelle (W1-10):** `depression-verstehen` › `anders` (ältere Menschen, körperliche Beschwerden, rund um die Geburt); `behandlung-und-verlauf` › Abb. 1 «drei bis vier Wochen» (nur Paraphrase der NVL); `ihre-situation` › `angst` «dauernde Wachsamkeit», «Trauer um das, was … verloren geht»; `fuer-sich-sorgen` Programmname «Familiencoach Depression» und «kostenlos» (Website des Programms fehlt); `rechte-und-angebote` «auch bei einer psychischen Erkrankung» (BSV) und «allgemein informieren» (BAG). Streichen entscheidet die Fachstelle.
3. **Quellenangaben (W1-09):** Abrufdatum der Online-Quellen setzt, wer die Links vor der Veröffentlichung prüft; Obsan-Bulletin für die Suizidzahlen (08/2024 oder 11/2024) und PatG § 19 nicht geprüft; NVL-Kapitel zu Suizidalität (2 oder 12) nicht geprüft.
4. **Prüflücke W1-25** bleibt: Leitlinien, Recht, Statistiken und Angebote am Original prüfen.

### Offener Prüfbedarf (für W1)

> **Überholt (11.10.2026):** Die Prüfsitzung hat diese fünf Punkte unter «W1-E» beantwortet. Was offen ist, steht unter «Offene Punkte nach Zuständigkeit» oben und im letzten Eintrag unter «Umgesetzt nach den Prüfrunden».

1. Für sich sorgen › `was-hilft`, Eintrag «Achtsamkeit»: Die Aussage mit Zhang et al. 2024 abgleichen (bisher nur anhand der Zusammenfassung). Der Text sagt die Wirkung ohne Einschränkung aus, beim Familiencoach dagegen «leicht»; W1 entscheidet, ob ein Hinweis auf die begrenzte Studienqualität nötig ist.
2. Begleiten, Abbildung 1: Bild und Aussage mit der Ruderboot-Metapher im Arbeitsheft «Wenn dein Partner depressiv ist» abgleichen.
3. Je nach Rolle: Befunde zu Eltern erwachsener Kinder und zu erwachsenen Kindern stammen aus Studien zu Jugendlichen bzw. allgemein; auf der Seite benannt.
4. Rechte und Angebote: Websites der Angebote vor der Veröffentlichung prüfen; Stand auf der Seite: 10.10.2026.
5. Aktualisierung einplanen: NVL-Kapitel 10 (Gender, Alter, Peripartalzeit) bei Erscheinen; nächste NVL-Überprüfung 09/2027.

Ergebnis der Prüfsitzung zu diesen fünf Punkten: «W1-E · Offener Prüfbedarf der bauenden Sitzung» unter «Befunde je Stufe».

## Selbstprüfung der bauenden Sitzung

Arbeitsstand vom 10.10.2026, nachgeführt am 11.10.2026 nach der Umsetzung von R2-01 (Punkte 16, 18 und 19), R2-02 bis R2-07 (Punkte 15 und 17) sowie V-08 und V-09 (Punkte 18 und 19), am 12.10.2026 nach S-33, V-11 und BD-12 (Punkte 12, 15, 17, 18 und 19); nach K1 sowie nach W1-33 und S-34 (12.10.2026) unverändert, weil keine Figur betroffen ist; keine Prüfstufe. Elf Figuren: `v-dv-schichten` (K), `v-dv-entstehung` (G), `v-bv-vergleich` (E), `v-bv-weg` (C), `v-bv-fruehzeichen` (J), `v-is-gefaess` (G), `v-is-kreislauf` (B), `v-ro-spannung` (H), `v-bg-boot` (D), `v-fs-netz` (I), `v-ra-vergleich` (E).

## Visualisierungs-Check

| Nr. | Prüfpunkt | Ergebnis | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Visualisierungsplan liegt vor; die Seiten entsprechen ihm | erfüllt | `site.config.json` › `visualPlan`: 51 Zeilen auf 10 Seiten (48 auf den acht Inhaltsseiten seit der Streichung von «Arbeit und Geld», dazu 2 für «Impressum und Datenschutz» und 1 für die 404-Seite, alle Text), 11 Darstellungen; jede Figur trägt `data-visual-id` und `data-visual-type` wie im Plan (Gate: keine Befunde «visual-plan» oder «plan-section») | – |
| 2 | Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt | erfüllt | Gate meldet keinen Abschnitt ohne Zeile. Beispiel: Depression verstehen › `anders` «Ein Vergleich Männer–Frauen würde einen Unterschied zuspitzen, den die Studien nur als Tendenz zeigen»; Begleiten › `suizidgedanken` «kurze, direkte Anleitung ohne Grafik» | – |
| 3 | Prüffrage je Darstellung konkret beantwortet; die Darstellung zeigt, was die Antwort verspricht | erfüllt | Behandlung › Abb. 2: Plan verspricht Reihenfolge, optionalen Schritt und Weiterbehandlung; Pfad zeigt Schritt 4 gestrichelt «bei Bedarf» und Schritt 5 «Weiterbehandeln», keine Dauer (Vertiefung: «Der Pfad zeigt nur die Reihenfolge, keine Dauer»). Rechte › Abb. 1 zeigt «ohne/mit Einwilligung» nach fünf gleichen Merkmalen | – |
| 4 | Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung | erfüllt | alle 11 Figuren mit `p.puk-vis-kern` und `p.puk-vis-short`. Je nach Rolle › `eltern`: «Auch ohne Einverständnis Ihres erwachsenen Kindes dürfen Sie …» steht im Fliesstext nach der Figur, nicht in der Vertiefung | – |
| 5 | Erklärmodelle (B, C, G): Ansatzpunkt markiert oder Verzicht begründet; keine Verantwortung zugeschoben | erfüllt | `v-bv-weg` Schritt 1 (`li.is-ansatz`); `v-is-kreislauf` Station 3 (`li.is-ansatz`, «Ansatzpunkt»); `v-is-gefaess` Abfluss mit doppeltem Ring; `v-dv-entstehung` entryPoint «entfällt: Die Entstehung liegt nicht in der Hand der Angehörigen …». Zusätzlich J: «Die Entscheidung über die Behandlung bleibt bei der erkrankten Person.» | – |
| 6 | Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt | erfüllt | Der Kreislauf steht nur auf «Ihre Situation»; «Je nach Rolle › Partner» verlinkt ihn («zeigt der Kreis unter …»). Gefäss (Verhältnis von Belastung und Entlastung) und Kreislauf (Wechselwirkung in der Beziehung) zeigen verschiedene Mechanismen | Prüfsitzung: K (Verhalten/Erleben) und B Station 1 berühren sich; beurteilen, ob ein Verweis nötig ist |
| 7 | Kartenraster-Check | erfüllt | keine `puk-web-card-list`; Gate ohne Hinweis «card-grid» | – |
| 8 | Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung | erfüllt | K: Lage über/unter der Wasserlinie; G Schwelle: Höhe der Teile an derselben Linie; Gefäss: Zu- und Abfluss; B: geschlossene Schleife; C: Reihenfolge und gestrichelter Schritt; J: Linienstärke; H: Seiten und Drehpunkt; I: Abstand zur Mitte, Linienart; E: gleiche Merkmale in derselben Reihenfolge, seit Profil 2026.10.1 auch auf gleicher Zeilenhöhe (gemeinsame Zeilen; Rechte › Abb. 1 bei 1280 px angesehen) | – |
| 9 | Darstellungen über den Erkenntnisweg verteilt; keine unbegründete Textwand | teilweise | Seiten 2–8 mit 1–3 Figuren, die Übersicht ohne Figur (begründet). «Je nach Rolle» hat sechs Textabschnitte und eine Figur | Prüfsitzung: beurteilen, ob «Je nach Rolle» als Textseite trägt (eigenständige Einstiege) oder eine weitere Erklärform braucht |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle oder Kennzeichnung vorhanden | erfüllt | Kennzeichnung in allen 11 Legenden (Gate «figure-source» ohne Befund). Grenzen in der Vertiefung aller 11 Figuren; beim Kreislauf `v-is-kreislauf` seit 11.10.2026 im Wortlaut der Fachstelle (V-05): «Nicht jede Familie gerät in diesen Kreis, und er kann an jeder Station beginnen. Das Bild zeigt eine mögliche Dynamik, keine Ursache.» Weitere Beispiele: J: «Nicht jeder Rückfall kündigt sich an … keine Skala zum Selbsttest»; Rechte › Abb. 1: «Die Übersicht vereinfacht das Recht.» | – |
| 11 | Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich | erfüllt | G Schwelle: Grundzustand `data-mode="all"`, Schritt-Aufbau nur auf Knopfdruck; keine Hover-Inhalte; Kernaussagen stehen ausserhalb von `details` | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | erfüllt | kein Überlauf bei 320 px (Messung vom 12.10.2026: 10 Seiten × 320 bis 1440 px); alle Figuren mit `aria-describedby` ≥ 40 Zeichen (Gate «figure-alt» ohne Befund), 193 bis 437 Zeichen. Kreislauf seit 12.10.2026 mit einem Satz je Station und dem Sprecher vorweg: «Vier Stationen im Kreis, beschriftet mit Sätzen einer angehörigen Person. Station 1: «Er zieht sich zurück und ist gereizt.» …» (BD-12). K blendet die Zeichnung unter 560 px aus, die beiden Schichten bleiben als Listen | – (Boot bei 360 px in Visualisierungs-Check, Runde 1, Punkt 12 beantwortet) |
| 13 | Theme «Hoher Kontrast» geprüft | teilweise | nur im Code geprüft: keine Hexwerte, Linien und Flächen über Klassen (`puk-vis-ln`, `puk-vis-scene__ln`, `puk-vis-water`); Kreislauf-Pfeile mit `var(--puk-blue-100)` wie im Starter. **Nicht im Browser mit dem Theme angesehen** | Prüfsitzung: Theme visuell prüfen |
| 14 | Inhalt fachlich freigegeben | nicht erfüllt | alle 11 Darstellungen «ausstehend» im Plan; Texte Musterentwurf | Freigabe durch die Fachstelle nach W1 |
| 15 | Bildsprache passt zum Thema; Wirkung im Plan und im Bild eingelöst | erfüllt (Selbsteinschätzung) | Wirkung (`resonance`) bei allen 11 Darstellungen im Plan. Boot: zwei ruhige Linienfiguren, je ein Ruder, Sätze aus Sicht der beiden Menschen; Gefäss: Sätze an Zu- und Abfluss. G Schwelle nutzt Rechtecke, ist aber ein Strukturmodell, kein Erlebensbild; Kreislauf seit 11.10.2026 mit Sätzen aus Sicht der angehörigen Person («Ich …», «Er …») statt Substantiven (R2-04), seit 12.10.2026 nennt auch der Kurztext die Personen («Das kann Angehörige erschöpfen …», «Die erkrankte Person fühlt sich dann eher unverstanden …», S-33) | Bilder von der Fachstelle am 10.10.2026 gutgeheissen («Die Bilder sind perfekt.»); Prüfsitzung prüft die Punkte trotzdem je Figur |
| 16 | Metapher ohne Code: ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | erfüllt | Gefäss: «Sie ist seit Wochen schwer krank.», «Meine Schwester übernimmt den Mittwoch.» – keine Namen von Bildteilen, keine Legende; seit 11.10.2026 auch die Bezeichnung des Ansatzpunkts ohne Bildteil: «Ansatzpunkt für Angehörige · beim Abfluss» (R2-01); Boot: «Heute schaffe ich nur wenige Züge.» / «Ich bin da und rudere auf meiner Seite.»; K: Sätze in beiden Schichten | – |
| 17 | Keine ungewollten Bedeutungen | erfüllt (Selbsteinschätzung) | K bewusst ohne Eisberg (Gefahr für Schiffe); die Form ist eine weiche, neutrale Rundung. Kein Motiv zeigt die erkrankte Person als Gefahr oder Defekt. Seit 11.10.2026 ist die Spalte «Antidepressiva» nicht mehr gestrichelt wie sonst nur Mögliches (R2-02) | – (Lesart der K-Form in Visualisierungs-Check, Runde 1, Punkt 17 beantwortet) |
| 18 | Bei 200 % Schrift keine überlappenden Beschriftungen, keine Trennung mitten im Wort; der Kurztext verweist nicht auf schmal ausgeblendete Bildteile | erfüllt (Selbstprüfung 12.10.2026) | 200 %: am 12.10.2026 nach S-33 und BD-12 neu gemessen: 0 überlappende Textzeilen in allen 11 Figuren (360, 768, 900, 1024, 1280, 1440 px mit 16 und 32 px Standardschrift, 132 Messungen); Kreislauf bei 1280 und 360 px angesehen. Kurztexte: kein Kurztext nennt mehr Wasserlinie, Abstand zur Mitte, Linienart, Linienstärke oder Nummern (R2-01). Netz: Legende seit 11.10.2026 «geordnet von nah im Alltag nach weiter weg»; bei 360 px und bei 1280 px mit 200 % Schrift angesehen, die Gruppen stehen von oben nach unten in dieser Reihenfolge (V-08). Bleibt im Profil: Endbeschriftungen des Kontinuums schmal ohne Achse (V-09); Verbindungsstriche des Kreislaufs in der Listenansicht bei grosser Schrift (V-10) | Profil: V-08 (Legende in Muster I), V-09, V-10; Nachprüfung durch eine andere Sitzung |
| 19 | Was der Kurztext über die Anordnung verspricht, löst die Komponente bei allen Breiten ein | erfüllt (Selbstprüfung 12.10.2026) | Die Kurztexte versprechen keine Anordnung mehr (Vergleiche ohne «in derselben Reihenfolge», Netz ohne «Abstand zur Mitte»); Vergleiche bei 768 und 1280 px weiterhin auf gleicher Zeilenhöhe. Seit 11.10.2026 verspricht auch die Legende des Netzes nur noch, was beide Ansichten zeigen (V-08), und die Vertiefung des Kontinuums spricht vom «Bild», nicht von der Achse, die schmal fehlt (V-09). Seit 12.10.2026 verspricht auch der Text vor dem Vergleich der Behandlungen kein «nebeneinander» mehr: «Die Abbildung vergleicht beide nach denselben Merkmalen.» (V-11); die Spalten stehen unter 560 px untereinander | Nachprüfung durch eine andere Sitzung |

### Matrix je Figur (Prüfsitzung)

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Je Befund ein Eintrag unter «Befunde Visualisierungs-Check».

| Nr. | Prüfpunkt | `v-dv-schichten` | `v-dv-entstehung` | `v-bv-vergleich` | `v-bv-weg` | `v-bv-fruehzeichen` | `v-is-gefaess` | `v-is-kreislauf` | `v-ro-spannung` | `v-bg-boot` | `v-fs-netz` | `v-ra-vergleich` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E | E | T (V-02) | E | T (V-02) | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | E | E | E | E | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | T (V-01) | E | E | E | E | E | E | E | T (V-01) |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | T (V-04) | E | E | E | E | E |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | E | – | E | – | E | E | – | – | – | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | E | E | E | E | E | E | E | E | E |
| 7 | Kartenraster-Check | E | E | E | E | E | E | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | T (V-01) | E | E | E | E | E | E | E | T (V-01) |
| 9 | Verteilt, keine Textwand | E | E | E | E | E | E | E | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E | T (V-05) | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E | E | T (V-03) | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | E | E | E | E | E | E | E | E | E |
| 16 | Metapher ohne Code | E | – | – | – | – | E | – | T (V-06) | E | – | – |
| 17 | Keine ungewollten Bedeutungen | E | E | E | E | E | E | E | E | E | E | E |

#### Prüfrunde Visualisierungs-Check (11.10.2026, Stand `9ff948b`)

**Geprüft durch:** Prüfsitzung (Claude Code, hat nicht gebaut; dieselbe wie W1, W2 und S). Keine Inhalte und kein Code geändert. Eine zweite, unabhängige Prüfsitzung wird weiterhin empfohlen.

**Grundlage:**
- Leitlinien «Visualisierung umsetzen» (Prüfliste, «Metaphern und Illustrationen zeichnen», «Schmale Bildschirme») und «Visuelle Wissensvermittlung» («Ein Bild, eine Idee», Muster A–K, Bildsprache).
- Plan `site.config.json` › `visualPlan`: 48 Zeilen, davon 11 Darstellungen, alle `approvalStatus` «ausstehend».
- Bildschirmfotos jeder Figur bei 1280, 360 und 320 px sowie bei 1280 px mit `data-theme="kontrast"` (Playwright, 44 Aufnahmen). Alle Aufnahmen bei 1280 und 360 px angesehen, die Kontrastaufnahmen der neun Figuren mit SVG ebenfalls.
- Je Figur ausgelesen: Kernaussage, Kurztext, Ansatzpunkt, Vertiefung, Legende, Kurzbeschreibung (`aria-describedby`), berechnete SVG-Farben, Breite bei 320 px.
- Die offenen Fragen der Selbstprüfung (Punkte 6, 9, 12, 13, 17) sind unten beantwortet.

**Ergebnis:** Die elf Figuren tragen. Jede hat eine Kernaussage als Satz, einen Erklärtext und eine Vertiefung mit Grenzen; nur beim Kreislauf fehlen die Grenzen. Ansatzpunkte sind bei C, B und den beiden G-Modellen im Bild markiert und schieben keine Verantwortung zu. Die vier Bildmetaphern bestehen den Freundin-Test.

Der Visualisierungs-Check bleibt **offen**:
- Punkt 14 ist nicht erfüllt: Die fachliche Freigabe der Fachstelle steht aus.
- Ein wichtiger Befund ist offen: Bei den Vergleichen stehen gleiche Merkmale nicht auf gleicher Höhe, obwohl der Kurztext es sagt (V-01).
- Dazu kommen fünf optionale Befunde (V-02 bis V-06) und ein Hinweis an das Profil (V-07).

**Belege je Prüfpunkt**

1. **Plan liegt vor; die Seite entspricht ihm.**
   - Jede Figur trägt `data-visual-id` und `data-visual-type` wie im Plan, und die Skizzen im Plan entsprechen dem Bild. Beispiele: Gefäss: «Zuflüssen von oben und einem Abfluss unten … mit einem doppelten Ring markiert»; Boot: «jede Person mit eigenem Ruder».
   - Abweichungen: Bei der Waage sagt der Plan «frage», die Figur «sage dir». Beim Netz nennt der Plan andere Einträge als die Figur (V-02).
   - Die Selbstprüfung (Punkt 1) nennt noch 49 Zeilen; seit der Streichung von «Arbeit und Geld» sind es 48.
2. **Zeile je Abschnitt; Begründungen passen.** Gate ohne Befund «plan-section». Jede Figur steht in dem Abschnitt, den `sectionId` nennt, zum Beispiel `v-is-kreislauf` in `ihre-situation` › `wechselwirkung` und `v-ra-vergleich` in `rechte-und-angebote` › `schweigepflicht`.
3. **Prüffrage beantwortet und eingelöst.**
   - Prozesspfad: Der Plan verspricht «Reihenfolge …, möglicher und kein zwingender Schritt …, Behandlung geht weiter». Das Bild zeigt fünf nummerierte Schritte, Schritt 4 gestrichelt «bei Bedarf», Schritt 5 «Weiterbehandeln».
   - Kontinuum: Die «Lage auf der Achse» ist bei 1280 px als Achse zu sehen, bei 320 px als Bereiche mit unterschiedlich starker Randlinie.
   - Vergleiche: «Gleiche Merkmale nebeneinander» wird nicht eingelöst. Die Zeilen stehen versetzt, bis 47 px bei 1280 px und bis 96 px bei 768 px (V-01).
4. **Kernaussage und Erklärtext.**
   - Alle 11 Figuren haben `p.puk-vis-kern` als ganzen Satz und `p.puk-vis-short`.
   - Was Angehörige tun können, steht nie nur in der Vertiefung. Prozesspfad, Kontinuum, Gefäss und Kreislauf haben `p.puk-vis-ansatz` sichtbar unter dem Bild.
   - Der Kurztext des Gefässes hat fünf Sätze; die Leitlinie nennt zwei bis vier (V-04).
5. **Ansatzpunkt (B, C, G).**
   - `v-bv-weg`: Schritt 1 mit `li.is-ansatz` und doppeltem Ring, Text «Anbieten, bei der Terminsuche zu helfen oder mitzukommen, wenn die Person das möchte».
   - `v-is-kreislauf`: Station 3 mit doppelter Kontur und «Ansatzpunkt»; Text «Die eigene Ungeduld als Zeichen von Überlastung sehen, nicht als Versagen, und Entlastung für sich suchen».
   - `v-is-gefaess`: Abfluss mit doppeltem Ring.
   - `v-dv-entstehung`: Verzicht begründet («Die Entstehung liegt nicht in der Hand der Angehörigen; die Darstellung soll entlasten.»).
   - Keiner der Ansatzpunkte schiebt Verantwortung für Behandlung oder Verlauf zu. Das Kontinuum hat zusätzlich einen Ansatzpunkt («Die Entscheidung über die Behandlung bleibt bei der erkrankten Person.»).
6. **Mechanismus nicht doppelt gezeigt.**
   - Schichtenmodell (Verhalten und Erleben) und Kreislauf, Station 1 «Rückzug und Gereiztheit», sind verbunden: In `ihre-situation` › `wechselwirkung` steht vor dem Kreis «Warum sich jemand zurückzieht oder gereizt reagiert, steht unter Was Sie sehen und was dahinter liegen kann» (Link auf `depression-verstehen.html#dahinter`).
   - Gefäss (Verhältnis von Be- und Entlastung) und Kreislauf (Wechselwirkung) zeigen verschiedene Mechanismen.
   - Damit ist die offene Frage der Selbstprüfung zu Punkt 6 beantwortet.
7. **Kartenraster-Check.** Keine `puk-web-card-list`. Die Spalten der Vergleiche sind Muster E, kein Kartenraster.
8. **Form und Linien tragen Bedeutung.**
   - Schichtenmodell: über oder unter der Wasserlinie, durchgezogene gegenüber gestrichelten Rahmen. Entstehung: Höhe der Teile an derselben Schwelle. Prozesspfad: gestrichelter Schritt. Kontinuum: Linienstärke. Gefäss: Zu- und Abfluss. Kreislauf: geschlossene Schleife. Waage: Seiten und Drehpunkt. Netz: Abstand zur Mitte und Linienart.
   - Bei den Vergleichen trägt die gleiche Höhe die Bedeutung; sie fehlt (V-01).
9. **Verteilt, keine Textwand.**
   - Seiten 2 bis 8 haben 1 bis 3 Figuren, je im Abschnitt, den sie erklären. Die Übersicht ist ohne Figur, begründet.
   - Antwort auf die offene Frage der Selbstprüfung: «Je nach Rolle» trägt als Textseite. Die sechs Abschnitte sind eigenständige Einstiege nach Rolle (W2: Quereinstieg), jeder mit Plan-Begründung. Das Hin und Her der Eltern ist als Waage gezeigt.
10. **Nicht verfälscht; Grenzen; Kennzeichnung.**
    - Kennzeichnung in allen 11 Legenden («Eigene didaktische Darstellung», bei Anlehnung mit Quelle).
    - Grenzen in der Vertiefung bei 10 Figuren, z. B. Kontinuum «keine Skala zum Selbsttest», Gefäss «Belastung verhält sich nicht wie Wasser, und ein volles Gefäss ist kein Versagen», Boot «Das Bild zeigt eine Haltung, keine Pflicht».
    - Beim Kreislauf nennt die Vertiefung «Was die Forschung sagt» keine Grenzen des Modells (V-05).
11. **Ohne Aufklappen und Skript verständlich.** `v-dv-entstehung` zeigt im Grundzustand das ganze Modell; «Schritt für Schritt aufbauen» ist nur ein Knopf. Keine Hover-Inhalte. Kernaussagen und Ansatzpunkte stehen ausserhalb von `details`.
12. **320 px lesbar; Textalternative.**
    - Bei 320 px sind alle Figuren 280 px breit, ohne Überlauf. Die Muster werden wie vorgesehen zu Listen: Schichten, Waage, Netz und Vergleiche ohne Zeichnung; Kreislauf linear mit «Nach Station 4: zurück zu Station 1» als Linie und Text.
    - Kurzbeschreibungen (`aria-describedby`) mit 193 bis 367 Zeichen, alle Ziele vorhanden.
    - Boot bei 360 px: Die Zeichnung ist klein (rund 300 × 80 px), Boot und zwei Menschen bleiben erkennbar; die Sätze stehen darüber (Muster D). Damit ist die offene Frage der Selbstprüfung beantwortet.
    - Bei der Waage verweist der Kurztext unter 560 px auf einen Balken, der dann ausgeblendet ist (V-03).
13. **Theme «Hoher Kontrast».**
    - In keiner Figur stehen Farbwerte in SVG-Attributen.
    - Die berechnete Linienfarbe wechselt in allen 11 Figuren von `rgb(60, 100, 255)` zu `rgb(0, 40, 194)`; gefüllte Flächen bleiben `rgb(216, 224, 255)`.
    - Die Bildschirmfotos `…-1280-k` zeigen keine verlorenen Linien. Die schwarzen Füllungen, die die Messung findet, sind nur `clipPath`-Formen in `defs` und werden nicht gezeichnet.
    - Damit ist die offene Frage der Selbstprüfung beantwortet.
14. **Fachlich freigegeben.** Alle 11 Zeilen haben `approvalStatus` «ausstehend»; das Gate meldet 11 × `visual-approval`. Die Zustimmung der Fachstelle vom 10.10.2026 («Die Bilder sind perfekt.») steht in der Selbstprüfung, ist aber nicht als Freigabe eingetragen (W1-F-21).
15. **Bildsprache passt; Wirkung eingelöst.**
    - `resonance` steht bei allen 11 Darstellungen.
    - Die Bilder lösen sie ein: Boot («Ich muss nicht für zwei rudern, und trotzdem bin ich nicht weg.») mit zwei ruhigen Linienfiguren, je einem Ruder und Sätzen aus beider Sicht. Gefäss mit organischer Form und Sätzen an Zu- und Abfluss. Schichtenmodell mit einer angehörigen Person am Ufer.
    - Rechtecke nur bei Strukturmustern: Säulen, Stationen, Vergleich, Netz. Die gerahmten Sätze im Schichtenmodell sind Teil der Kopiervorlage K (`.puk-vis-layers__zone li`).
16. **Metapher ohne Code.**
    - Schichtenmodell, Gefäss und Boot sind beschriftet mit Sätzen aus Sicht von Menschen («Er sagt schon wieder ab.», «Meine Schwester übernimmt den Mittwoch.», «Heute schaffe ich nur wenige Züge.»), ohne Legende für Bildteile.
    - Bei der Waage benennen drei Schlüssel Bildteile und Linienarten («Linke Seite · einfache Linie», «Mitte · Drehpunkt», «Rechte Seite · doppelte Linie») (V-06).
    - Strukturmuster ohne Metapher: nicht anwendbar.
17. **Keine ungewollten Bedeutungen.**
    - Kein Motiv zeigt die erkrankte Person als Gefahr oder Defekt.
    - Die Form im Schichtenmodell liest sich als weiche, schwimmende Form, ähnlich einem Eisberg oder Stein, ohne Nebenbedeutung wie Gefahr oder Ei-Symbolik; die Person am Ufer schaut hin, nicht weg. Damit ist die offene Frage der Selbstprüfung beantwortet.
    - Das volle Gefäss ist in der Vertiefung ausdrücklich «kein Versagen».
    - Der Kreislauf zeigt beide Seiten ohne Schuld («Daran ist niemand schuld»).

**Freundin-Test** (Bildmetaphern; Strukturmuster nicht anwendbar)

| Figur | Würde eine Angehörige das Bild einer Freundin zeigen? | Begründung |
| --- | --- | --- |
| `v-dv-schichten` Was Sie sehen und was dahinter liegen kann | ja | Das Bild «Sichtbar ist wenig, darunter liegt mehr» kennt man; die Sätze («Er sagt schon wieder ab.» / «Ich spüre nichts mehr.») erklären den Rückzug ohne Fachwort |
| `v-is-gefaess` Was zufliesst und was abfliessen kann | ja | Das Gefäss, das voll wird, ist eine Alltagsmetapher; Zu- und Abfluss sind ohne Legende verständlich |
| `v-ro-spannung` Unterstützen und loslassen | ja, mit Einschränkung | Die Waage zeigt das Hin und Her sofort; die Schlüssel zu Linienarten (V-06) würde man beim Zeigen überspringen |
| `v-bg-boot` Mit im Boot | ja | Zwei Menschen in einem Boot, jede mit eigenem Ruder: Die Haltung «mitrudern, nicht für die andere rudern» ist ohne Erklärung verständlich |

#### Befunde Visualisierungs-Check

- **V-01 · wichtig · Vergleiche: gleiche Merkmale stehen nicht auf gleicher Höhe.**
  - **Beleg:** Kurztext von `v-bv-vergleich` und `v-ra-vergleich`: «Gleiche Merkmale stehen auf gleicher Höhe». Gemessener Versatz der Merkmalszeilen (Spalte B minus Spalte A):
    - `v-bv-vergleich`: «Wann es besser wird» −47 px bei 1280, −70 px bei 768;
    - `v-ra-vergleich`: «Einsicht in die Akten» −24 px bei 1280, −96 px bei 768.
    - Unter 560 px stehen die Spalten untereinander (Bildschirmfotos bei 360 px); dort gibt es keine gleiche Höhe.
    - Ursache ist die Profil-Komponente `.puk-vis-compare` in `templates/website/longform/visual-patterns.css`: Jede Spalte hat ein eigenes `dl`-Raster, die Zeilen sind nicht verbunden.
  - **Vorschlag:**
    - Website: den Satz in beiden Kurztexten ersetzen durch «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge.» So sagt es schon die Kurzbeschreibung.
    - Profil: Komponente mit gemeinsamen Zeilen, zum Beispiel `grid-template-rows: subgrid` oder eine Tabelle. Das geht nur im Design-System-Artefakt, nicht in diesem Repository.
  - **Zuständig:** bauende Sitzung (Kurztext); Profil (Komponente).
- **V-02 · optional · Plan und Figur weichen ab.**
  - **Beleg:**
    - `v-ro-spannung` › `statement`: «… und frage, bevor ich etwas unternehme.»; die Figur sagt nach W1-F-13 «und sage dir, bevor ich etwas unternehme».
    - `v-fs-netz` › `statement`: «Umfeld (Arbeit, Nachbarschaft, Angehörigengruppe), fachliche Unterstützung (Hausarztpraxis, Fachstelle Angehörigenarbeit, Selbsthilfe)». Die Figur zeigt im Umfeld «Chor oder Verein», «Arbeitgeberin oder Arbeitgeber», «Nachbarschaft» und in der fachlichen Unterstützung «Hausarztpraxis», «Fachstelle Angehörigenarbeit», «Angehörigengruppe».
    - Die Fachstelle gibt anhand von Plan und Bild frei; beide sollten dasselbe sagen.
  - **Vorschlag:** Plan an die Figur angleichen.
  - **Zuständig:** bauende Sitzung.
- **V-03 · optional · Waage: Kurztext verweist auf einen ausgeblendeten Balken.**
  - **Beleg:** `v-ro-spannung`, Kurztext: «…; der gestrichelte, gekippte Balken zeigt das.» Unter 560 px blendet die Vorlage die Zeichnung aus (`.puk-vis-balance__beam{display:none}`); Bildschirmfoto bei 360 px ohne Balken.
  - **Vorschlag:** «In schweren Phasen braucht es oft mehr Unterstützung, in besseren mehr Freiraum: Die Mitte kann sich verschieben.»
  - **Zuständig:** bauende Sitzung.
- **V-04 · optional · Gefäss: Kurztext mit fünf Sätzen.**
  - **Beleg:** `v-is-gefaess`, `p.puk-vis-short`: fünf Sätze; die Leitlinie («Aufbau einer Darstellung») nennt zwei bis vier.
  - **Vorschlag:** die ersten beiden Sätze verbinden, ohne Wortlaut zu ändern: «Zuflüsse kommen oft aus der Krankheit und der Lebenslage: eine schwere oder lange Depression, Suizidgedanken, enges Zusammenleben; an ihnen können Angehörige wenig ändern.» Den Satz aus W1-F-08 a (fehlende Information) unverändert lassen.
  - **Zuständig:** bauende Sitzung.
- **V-05 · optional · Kreislauf ohne Grenzen des Modells (Prüfbedarf).**
  - **Beleg:** Vertiefung von `v-is-kreislauf` («Was die Forschung sagt») nennt Kritik und Rückfall und die Paartherapie, aber keine Grenzen. Alle anderen zehn Figuren nennen sie. Nur die Kurzbeschreibung für Screenreader sagt «Die Pfeile zeigen nur die Richtung.»
  - **Vorschlag** (Wortlaut entscheidet die Fachstelle): zum Beispiel «Grenzen: Nicht jede Familie gerät in diesen Kreis, und er kann an jeder Station beginnen. Das Bild zeigt eine mögliche Dynamik, keine Ursache.»
  - **Zuständig:** Fachstelle (Wortlaut), dann bauende Sitzung.
- **V-06 · optional · Waage: Schlüssel benennen Bildteile.**
  - **Beleg:** `v-ro-spannung`: «Linke Seite · einfache Linie», «Mitte · Drehpunkt», «Rechte Seite · doppelte Linie» (`.puk-vis-balance__key`, aus Kopiervorlage H). Regel «Ein Bild, eine Idee», Nr. 2: «Keine Namen von Bildteilen»; bei Metaphern gilt der Metaphern-Abschnitt vor den Diagrammregeln. Die Überschriften «Da sein», «Was beides verbindet» und «Loslassen» tragen die Unterscheidung allein.
  - **Vorschlag:** die drei Schlüssel weglassen.
  - **Zuständig:** bauende Sitzung. Für die Vorlage H: Prüfbedarf am Profil.
- **V-07 · Hinweis an das Profil · Spannungsfeld schmal in anderer Reihenfolge als die Leitlinie.**
  - **Beleg:** `templates/website/longform/erklaermuster.css`: `.puk-vis-balance__hold{order:3}` unter 560 px. Sichtbar ist dann Pol A · Pol B · Mitte (Bildschirmfoto `v-ro-spannung-360`). Die Leitlinie «Visuelle Wissensvermittlung», Muster H, sagt «Pol A · Mitte · Pol B untereinander». Screenreader lesen in DOM-Reihenfolge A · Mitte · B.
  - **Vorschlag:** im Design-System-Artefakt klären (nicht in diesem Repository ändern).
  - **Zuständig:** Profil.

#### Zählung der Befunde Visualisierungs-Check

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| wichtig | 1 | V-01 |
| optional | 5 | V-02 bis V-06 |
| Hinweis an das Profil | 1 | V-07 (dazu der Komponententeil von V-01 und die Vorlage H in V-06) |
| nicht erfüllt ohne Befundnummer | 1 | Punkt 14, fachliche Freigabe (W1-F-21) |

#### Prüfrunde Visualisierungs-Check 2 · Nachprüfung (11.10.2026, Stand `e63bd73`)

**Geprüft durch:** zweite Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und die Prüfrunden davor nicht durchgeführt. Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 2.

**Grundlage:**
- Leitlinie «Visualisierung umsetzen», Prüfliste mit jetzt 19 Punkten (18 und 19 ergänzt am 11.10.2026), Abschnitt «Schmale Bildschirme»; Leitlinie «Visuelle Wissensvermittlung», Muster E und H in der Fassung von Profil 2026.10.1.
- Plan `site.config.json` › `visualPlan`: 51 Zeilen (48 auf den acht Inhaltsseiten, 2 Impressum und Datenschutz, 1 für die 404-Seite), 11 Darstellungen, alle `approvalStatus` «ausstehend».
- Bildschirmfotos jeder Figur bei 1280, 360 und 320 px und bei 1280 px mit `data-theme="kontrast"`, dazu bei 1280, 768 und 360 px mit doppelter Browser-Schriftgrösse (Chromium, `Page.setFontSizes` 32 px; 77 Aufnahmen, Scratchpad, nicht im Repository). Angesehen: alle Aufnahmen bei 1280 und 360 px, Kontrast bei Gefäss und Waage (dazu alle Seiten im Theme «kontrast» als verkleinerte Übersicht, R1), 200 % bei Netz, Pfad und Kreislauf.
- Gemessen: Versatz der Merkmalszeilen in beiden Vergleichen bei 320, 360, 768, 1280 px; überlappende Beschriftungen und Wörter, die über zwei Zeilen laufen, je Figur bei 360, 768, 1024, 1280, 1440 px mit 200 % Schrift; Länge der Kurzbeschreibungen (`aria-describedby`) und Breite jeder Figur bei 320 px.

**Ergebnis:** Alle Befunde der Runde 1 sind erledigt (V-01 bis V-07). Neu: zwei optionale Befunde zur schmalen Ansicht (V-08, V-09). Aus R2 kommen drei Einträge in die Matrix (Punkte 15 bis 17). Der Check bleibt **offen**, weil die fachliche Freigabe der 11 Darstellungen fehlt (Punkt 14).

**Umsetzung je Befund aus Runde 1**

| Befund | Umsetzung (Beleg) | Ergebnis |
| --- | --- | --- |
| V-01 Vergleiche | Website: Kurztext `v-bv-vergleich` «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge; Beschriftung und Linienart unterscheiden die beiden Wege.», `v-ra-vergleich` «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge.» Profil: gemeinsame Zeilen. Gemessener Versatz Spalte B minus Spalte A: 0 px in allen Zeilen bei 768 und 1280 px (vorher bis 96 px), auch im Theme «kontrast»; bei 360 und 320 px stehen die Spalten untereinander, die Reihenfolge stimmt | erledigt |
| V-02 Plan und Figur | `v-ro-spannung` › `statement` «… und sage dir, bevor ich etwas unternehme.»; `v-fs-netz` › `statement` mit denselben acht Einträgen wie die Figur (Schwester oder Bruder, Freundin; Chor oder Verein, Arbeitgeberin oder Arbeitgeber, Nachbarschaft; Hausarztpraxis, Fachstelle Angehörigenarbeit, Angehörigengruppe) | erledigt |
| V-03 Waage, Kurztext | «Es geht nicht um richtig oder falsch. In schweren Phasen braucht es oft mehr Unterstützung, in besseren mehr Freiraum. Wichtig ist, dass keine Seite dauerhaft wegfällt.» Kein Verweis mehr auf den Balken, der unter 560 px fehlt | erledigt |
| V-04 Gefäss, Kurztext | vier Sätze; erster Satz endet mit «…, enges Zusammenleben; an ihnen können Angehörige wenig ändern.» | erledigt |
| V-05 Kreislauf, Grenzen | Vertiefung «Was die Forschung sagt»: «Grenzen: Nicht jede Familie gerät in diesen Kreis, und er kann an jeder Station beginnen. Das Bild zeigt eine mögliche Dynamik, keine Ursache.» – wortgleich mit dem Entscheid der Fachstelle vom 11.10.2026 | erledigt |
| V-06 Waage, Schlüssel | 0 × `puk-vis-balance__key` in `content/`; die Überschriften «Da sein», «Was beides verbindet», «Loslassen» tragen die Unterscheidung (Bildschirmfoto 1280 px) | erledigt |
| V-07 Waage schmal | bei 360 px Reihenfolge «Da sein» · «Was beides verbindet» · «Loslassen», wie Leitlinie und DOM; ohne Balken | erledigt |

**Neue Punkte 18 und 19**
- **200 % Schrift:** Mit doppelter Browser-Schriftgrösse wächst die Schrift jetzt mit (Lesetext 21 → 42 px). Bei 768, 1024, 1280 und 1440 px: 0 überlappende Beschriftungen in allen 11 Figuren; Wörter laufen nur an vorhandenen Bindestrichen über zwei Zeilen («Vulnerabilitäts-Stress-Modell», «Deutschland-Barometer», beide in der Kennzeichnung). Netz, Kreislauf, Waage und Kontinuum wechseln dann auch breit in die Listenansicht, der Pfad wird senkrecht (Bildschirmfotos `v-fs-netz-1280`, `v-is-kreislauf-1280`, `v-bv-weg-1280` mit 200 %). Bei 360 px mit 200 % brechen lange Wörter auch ohne Trennstrich um («Hausarztpraxis», «Schweigepflicht», «Behandlungsleitlinie»); bei rund 18 Zeichen je Zeile ist das unvermeidbar und kein Befund.
- **Kurztext bei schmaler Ansicht:** Beim Netz und beim Schichtenmodell nennt der Kurztext Bildteile, die schmal fehlen oder anders aussehen (V-08, V-09).

**Matrix je Figur, Runde 2**

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | `v-dv-schichten` | `v-dv-entstehung` | `v-bv-vergleich` | `v-bv-weg` | `v-bv-fruehzeichen` | `v-is-gefaess` | `v-is-kreislauf` | `v-ro-spannung` | `v-bg-boot` | `v-fs-netz` | `v-ra-vergleich` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | E | E | E | E | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | E | E | E | E | E | E | E | E |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | E | E | E | E | E | E |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | E | – | E | – | E | E | – | – | – | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | E | E | E | E | E | E | E | E | E |
| 7 | Kartenraster-Check | E | E | E | E | E | E | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | E | E | E | E | E | E | E | E | E |
| 9 | Verteilt, keine Textwand | E | E | E | E | E | E | E | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | E | E | E | E | T (R2-04) | E | E | E | E |
| 16 | Metapher ohne Code | E | – | – | – | – | T (R2-01) | – | E | E | – | – |
| 17 | Keine ungewollten Bedeutungen | E | E | T (R2-02) | E | E | E | E | E | E | E | E |
| 18 | 200 % Schrift; Kurztext ohne schmal fehlende Bildteile | T (V-09) | E | E | E | E | E | E | E | E | T (V-08) | E |
| 19 | Versprechen des Kurztexts bei allen Breiten | E | E | E | E | E | E | E | E | E | T (V-08) | E |

**Belege zu den Zeilen 1 bis 13** (soweit nicht oben bei den Befunden)
- 1, 3, 8: siehe V-01, V-02. Die Skizze der Waage im Plan nennt den gestrichelten, gekippten Balken; er ist breit zu sehen (Bildschirmfoto 1280 px).
- 4: alle 11 mit `p.puk-vis-kern` und `p.puk-vis-short`; Kurztexte mit zwei bis vier Sätzen (Gefäss jetzt vier).
- 5: unverändert gegenüber Runde 1: `v-bv-weg` Schritt 1, `v-is-kreislauf` Station 3, `v-is-gefaess` Abfluss, `v-dv-entstehung` Verzicht begründet.
- 10: Grenzen in der Vertiefung aller 11 Figuren (Kreislauf jetzt mit V-05); Kennzeichnung in allen 11 Legenden.
- 11: `v-dv-entstehung` im Grundzustand ganz sichtbar; ohne JavaScript alle drei Teile sichtbar (W3, Runde 2).
- 12: alle 11 Figuren bei 320 px 280 px breit, ohne Überlauf; Kurzbeschreibungen 193 (`v-fs-netz`) bis 367 Zeichen (`v-dv-entstehung`), alle Ziele vorhanden; alle SVG `aria-hidden="true"`.
- 13: Linien im Theme «kontrast» dunkelblau, keine verlorenen Linien (Bildschirmfotos Gefäss, Waage); keine Farbwerte in SVG-Attributen (einzig `var(--puk-blue-100)` und `currentColor` in `content/ihre-situation.html`).

#### Befunde Visualisierungs-Check, Runde 2

- **V-08 · optional · Netz: «Abstand zur Mitte» ist schmal und bei grosser Schrift nicht zu sehen.**
  - **Beleg:** `fuer-sich-sorgen` › Abb. 1 (`v-fs-netz`), Kurztext: «Der Abstand zur Mitte zeigt, wie nah jemand im Alltag ist.» Bei 360 px und bei 200 % Schrift auch bei 1280 px zeigt die Figur die Listenansicht: «Sie» als Balken, darunter drei gegliederte Gruppen. Einen Abstand zur Mitte gibt es dort nicht; die Legende «Abstand zur Mitte: wie nah im Alltag» bleibt trotzdem stehen (Bildschirmfotos `v-fs-netz-360`, `v-fs-netz-1280` mit 200 %). Der Plan verspricht in `understood`: «Der Abstand zur Mitte macht Nähe sichtbar». Leitlinie «Visualisierung umsetzen», Punkte 18 und 19.
  - **Vorschlag:** Website: den Kurztext auf den Inhalt beziehen (siehe R2-01), z. B. «Unterstützung kann von nahen Menschen, aus dem Umfeld und von Fachstellen kommen. Manches gibt es schon, anderes liesse sich nutzen.» Profil: in der Listenansicht der Beziehungskarte die Legende «Abstand zur Mitte» ausblenden oder durch «von nah nach weiter weg» ersetzen.
  - **Zuständig:** bauende Sitzung (Kurztext), Profil (Listenansicht).
- **V-09 · optional · Schmale Ansicht verweist auf Bildteile, die dort anders aussehen oder fehlen.**
  - **Beleg:**
    - `depression-verstehen` › Abb. 1 (`v-dv-schichten`), Kurztext: «Über der Wasserlinie steht, was Angehörige sehen und hören. Darunter steht, …». Unter 560 px blendet die Vorlage die Zeichnung aus; es bleibt eine Trennlinie zwischen zwei Kästen (Bildschirmfoto `v-dv-schichten-360`). Die Leitlinie nennt genau diesen Fall: «Was nur in der breiten Darstellung sichtbar ist (…, Zeichnung des Schichtenmodells), nennt der Kurztext nicht als Beleg».
    - `behandlung-und-verlauf` › Abb. 3 (`v-bv-fruehzeichen`): Bei 360 px fehlt die Achse, die Endbeschriftungen «es geht gut» und «die Depression ist zurück» stehen ohne Linie über den Bereichen; die Vertiefung sagt «Die Achse zeigt Spielraum …» (Bildschirmfoto `v-bv-fruehzeichen-360`).
  - **Vorschlag:** Schichtenmodell: Kurztext wie unter R2-01 vorgeschlagen. Kontinuum: im Profil die Endbeschriftungen schmal ausblenden oder an den ersten und letzten Bereich hängen; in der Vertiefung «Das Bild zeigt Spielraum …».
  - **Zuständig:** bauende Sitzung (Kurztext, Vertiefung), Profil (Endbeschriftungen).

#### Zählung der Befunde Visualisierungs-Check, Runde 2

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| erledigt aus Runde 1 | 7 | V-01 bis V-07 |
| optional, neu | 2 | V-08, V-09 |
| aus R2 übernommen (Matrix 15 bis 17) | 3 | R2-01, R2-02, R2-04 |
| nicht erfüllt ohne Befundnummer | 1 | Punkt 14, fachliche Freigabe (W1-F-21) |

#### Prüfrunde Visualisierungs-Check 3 · Nachprüfung (12.10.2026, Stand `5f68c39`)

**Geprüft durch:** dritte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und die Befunde, die sie hier nachprüft, nicht umgesetzt (die Umsetzung in den Pull Requests #28, #29 und #31 stammt von der zweiten Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 3.

**Grundlage:**
- Vergleich `e63bd73` mit `5f68c39`: Geändert sind nur Dateien im Website-Ordner, nämlich `content/`, die gebauten Seiten und in `site.config.json` die Skizze (`statement`) von `v-is-kreislauf` sowie `editorialStatusLabel`. 9 der 11 Figuren haben geänderten Text oder geänderte Auszeichnung; unverändert sind `v-ro-spannung` und `v-bg-boot`.
- Bildschirmfotos mit Playwright 1.56.1 und Chromium, CSP aus `_headers` per Route (Scratchpad, nicht im Repository), alle angesehen:
  - die 9 geänderten Figuren bei 1280 und 360 px, im Theme «kontrast» bei 1280 px;
  - Kreislauf, Netz, Pfad und Vergleich der Behandlungen bei 360, 768 und 1280 px mit doppelter Browser-Schriftgrösse (`Page.setFontSizes` 32 px, Aufnahme mit `page.screenshot` und `clip`);
  - Vergleich der Behandlungen und Kontinuum mit offener Vertiefung bei 1280 und 360 px;
  - der Kreislauf in der Listenansicht bei 200 % auch am Stand `e63bd73` (eigener Server auf einer Arbeitskopie dieses Stands).
- Gemessen je Figur (alle 11) bei 360, 768, 900, 1024, 1280 und 1440 px mit 16 und 32 px Standardschrift (132 Messungen): überlappende Textzeilen (Rechtecke der Textknoten, Überdeckung über 1 × 1 px) und Wörter, die über zwei Zeilen laufen. Dazu der Versatz der Merkmalszeilen in beiden Vergleichen bei 768 bis 1440 px, Name und Beschreibung jeder Figur im Accessibility-Baum (CDP `Accessibility.getPartialAXTree`), Lage der Gruppen und der Legende im Netz.

**Ergebnis:** V-08 und V-09 sind im Website-Teil erledigt. Die Matrix für die 9 geänderten Figuren ist neu gefasst. Die Einträge «teilweise» in den Punkten 15 bis 19 aus Runde 2 sind erledigt (R2-01, R2-02, R2-04, V-08, V-09). Neu sind zwei optionale Befunde, die je einen Eintrag «teilweise» geben: V-10 (Profil: Kreislauf in der Listenansicht bei grosser Schrift) und V-11 (Website: «nebeneinander» vor dem Vergleich der Behandlungen). Der Check bleibt **offen**, weil die fachliche Freigabe der 11 Darstellungen fehlt (Punkt 14).

**Nachprüfung V-08 und V-09**

| Befund | Umsetzung (Beleg) | Abweichung vom Vorschlag | Ergebnis |
| --- | --- | --- | --- |
| V-08 Netz | `fuer-sich-sorgen` › Abb. 1: Kurztext «Unterstützung kann von nahen Menschen, aus dem Umfeld und von Fachstellen kommen. Manches gibt es schon, anderes liesse sich nutzen.» (mit R2-01, wortgleich mit dem Vorschlag); Legende, dritter Eintrag «geordnet von nah im Alltag nach weiter weg». Breit liegen die Ringe von innen nach aussen: «Nah – im Alltag», «Umfeld», «Fachliche Unterstützung» (Bildschirmfoto 1280 px). Schmal und bei 200 % auch breit stehen die Gruppen in dieser Reihenfolge von oben nach unten (Oberkante gemessen: 460, 593, 773 px bei 360 px; 526, 716, 971 px bei 1280 px mit 200 %). Die Legende ist in allen Ansichten sichtbar | Der Vorschlag «von nah nach weiter weg» galt der Listenansicht im Profil. Hier ersetzt er den Eintrag in beiden Ansichten und behält «im Alltag». Vertretbar: Der Satz stimmt in beiden Ansichten, «im Alltag» nimmt die Ringbezeichnung «Nah – im Alltag» auf, und die Kleinschreibung passt zu «besteht schon» und «wäre möglich» | erledigt (Website-Teil) |
| V-09 Kontinuum, Schichtenmodell | `behandlung-und-verlauf` › Abb. 3, Vertiefung «Grenzen des Bildes»: «Das Bild zeigt Spielraum, keine feste Abfolge und keine Skala zum Selbsttest.» (wortgleich mit dem Vorschlag). Schichtenmodell: Kurztext ohne «Wasserlinie» (R2-01). Bei 360 px angesehen: Die Endbeschriftungen «es geht gut» und «die Depression ist zurück» stehen weiterhin ohne Achse (Profil) | keine | erledigt (Website-Teil) |

**Matrix je Figur, Runde 3**

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Neu beurteilt sind die 9 geänderten Figuren; für `v-ro-spannung` und `v-bg-boot` gelten die Werte aus Runde 2 (unverändert, nur Kontrast und 200 % neu gemessen).

| Nr. | Prüfpunkt | `v-dv-schichten` | `v-dv-entstehung` | `v-bv-vergleich` | `v-bv-weg` | `v-bv-fruehzeichen` | `v-is-gefaess` | `v-is-kreislauf` | `v-ro-spannung` | `v-bg-boot` | `v-fs-netz` | `v-ra-vergleich` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | E | E | E | E | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | E | E | E | E | E | E | E | E |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | E | E | E | E | E | E |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | E | – | E | – | E | E | – | – | – | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | E | E | E | E | E | E | E | E | E |
| 7 | Kartenraster-Check | E | E | E | E | E | E | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | E | E | E | E | T (V-10) | E | E | E | E |
| 9 | Verteilt, keine Textwand | E | E | E | E | E | E | E | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | E | E | E | E | E | E | E | E | E |
| 16 | Metapher ohne Code | E | – | – | – | – | E | – | E | E | – | – |
| 17 | Keine ungewollten Bedeutungen | E | E | E | E | E | E | E | E | E | E | E |
| 18 | 200 % Schrift; Kurztext ohne schmal fehlende Bildteile | E | E | E | E | E | E | E | E | E | E | E |
| 19 | Versprechen des Kurztexts bei allen Breiten | E | E | T (V-11) | E | E | E | E | E | E | E | E |

**Belege** (geänderte Figuren; die übrigen Zeilen wie in Runde 2)
- **1:** `v-is-kreislauf` › `statement` nennt jetzt die vier Sätze der Figur («Er zieht sich zurück und ist gereizt.» → «Ich mache mir Sorgen, treibe an und übernehme.» → «Ich bin erschöpft und werde ungeduldig.» → «Er fühlt sich unverstanden.»), gleich wie Figur und Kurzbeschreibung. Hinweis ohne Befund: Der Plan sagt «Sätze aus Sicht der beiden». Gesprochen sind alle vier Sätze von der angehörigen Person («Ich …», «Er …»); das macht das Bild einheitlich.
- **4:** Kurztexte mit zwei bis vier Sätzen: Schichtenmodell 3, Vergleich der Behandlungen 2, Pfad 2, Kontinuum 2, Gefäss 4, Kreislauf 3, Netz 2, Rechte-Vergleich 3 (Entstehung unverändert 3).
- **5:** Die Ansatzpunkte stehen am selben Ort wie in Runde 2 (Pfad Schritt 1, Kreislauf Station 3, Gefäss Abfluss; Entstehung Verzicht begründet). Pfad und Kreislauf haben jetzt einen Beispielsatz (R2-05). Keiner schiebt Verantwortung zu («wenn die Person das möchte»; «Das liegt an meiner Müdigkeit, nicht an dir.»).
- **8:** Vergleiche: Versatz der Merkmalszeilen 0 px in allen Zeilen bei 768, 1024, 1280 und 1440 px. Im Vergleich der Behandlungen haben beide Spalten eine durchgezogene Oberkante; die Überschriften unterscheiden die Wege (R2-02). Kreislauf: Breit und schmal bei Standardschrift tragen Schleife und Verbindungen die Abfolge; in der Listenansicht bei grosser Schrift treffen zwei von drei Verbindungsstrichen den nächsten Kasten nicht (V-10).
- **10:** Grenzen in allen 11 Vertiefungen; im Kontinuum jetzt «Das Bild zeigt Spielraum …» (V-09).
- **12:** kein Überlauf bei 320 px (Seiten, siehe Bedienung Runde 3). Kurzbeschreibungen 193 (`v-fs-netz`) bis 388 Zeichen (`v-is-kreislauf`; der bisherige Höchstwert war 367, gewachsen durch die vier Sätze). Im Accessibility-Baum haben alle 11 Figuren als Namen den Titel und als Beschreibung die Kurzbeschreibung.
- **13:** Die 9 geänderten Figuren im Theme «kontrast» bei 1280 px angesehen (Linien dunkelblau, keine verlorenen Linien, z. B. Kreislauf und Vergleich der Behandlungen). Textkontrast im Theme «kontrast»: 0 unter der Schwelle (Bedienung Runde 3).
- **15:** Kreislauf: In den Stationen stehen jetzt Sätze von Menschen (Variante 2 aus R2: Die Kästen bleiben, Variante 1 bräuchte eine Änderung an Muster B). Die Wirkung «So geht es uns oft» kommt jetzt über Sätze an, die man so sagen würde («Ich bin erschöpft und werde ungeduldig.»). Erfüllt; Kästen und Pfeile wirken weiterhin schematisch, das ist Muster B.
- **16:** Gefäss: «Ansatzpunkt für Angehörige · beim Abfluss», ohne «doppelter Ring». Der Abfluss gehört zum Bild; ein Zeichencode wird nicht mehr genannt.
- **17:** Vergleich der Behandlungen: Die Spalte «Antidepressiva» ist nicht mehr gestrichelt (Klasse `puk-vis-compare__col--b` entfernt; Bildschirmfotos 1280 und 360 px und im Theme «kontrast»).
- **18:**
  - 0 überlappende Textzeilen in allen 11 Figuren in 132 Messungen (360 bis 1440 px, 16 und 32 px Standardschrift).
  - Mit 200 % laufen bei 768 bis 1440 px Wörter nur an vorhandenen Bindestrichen über zwei Zeilen («Vulnerabilitäts-Stress-Modell», «Deutschland-Barometer»). Bei 360 px mit 200 % brechen lange Wörter auch ohne Trennstrich um (z. B. «unverstanden.» im Kreislauf, «Angehörigenarbeit» im Netz); bei rund 18 Zeichen je Zeile ist das unvermeidbar und wie in Runde 2 kein Befund.
  - Kein Kurztext nennt Bildteile, die schmal fehlen: Schichtenmodell ohne Wasserlinie, Netz ohne Abstand zur Mitte, Kontinuum ohne Linienstärke, Pfad ohne Nummer und Linie.
  - Beobachtung bei Standardschrift (vorbestehend, kein Befund der Website): Im Pfad bricht «Weiterbehandeln» (Überschrift von Schritt 5) bei 900 px ohne Trennstrich um («Weiterbehandel» / «n»), am Stand `e63bd73` ebenso. Die Vorlage setzt `hyphens:auto` (`.puk-vis-wide :where(li,dl,h3)`); das Chromium der Prüfumgebung trennt aber nicht nach Silben (Testwort mit `hyphens:auto` und `manual` gleich hoch). Browser mit deutscher Silbentrennung zeigen «Weiter-behandeln». Hinweis an das Profil unten.
- **19:** Kein Kurztext verspricht noch eine Anordnung; die Legende des Netzes stimmt in beiden Ansichten (V-08). Ausserhalb des Kurztexts verspricht der Text vor dem Vergleich der Behandlungen «nebeneinander» (V-11).

**Freundin-Test, geänderte Figuren** (bei 1280 und 360 px angesehen)

| Figur | Würde eine Angehörige das Bild einer Freundin zeigen, um zu erklären, wie es ihr geht? | Begründung |
| --- | --- | --- |
| `v-dv-schichten` | ja | Zeichnung unverändert. Der Kurztext erklärt jetzt den Inhalt («ist nicht alles», «Nachfragen hilft mehr als Deuten») statt der Wasserlinie |
| `v-dv-entstehung` | nein, aber kein Erlebensbild | Strukturmodell zu Ursachen; man würde eher die Kernaussage «Niemand hat sie verschuldet» zitieren. Die Liste spricht jetzt ohne «linke Säule» |
| `v-bv-vergleich` | nicht anwendbar (Information) | Als Erklärhilfe zu den Behandlungen ja: zwei gleichwertig gezeichnete Spalten, keine Linienschlüssel mehr |
| `v-bv-weg` | nicht anwendbar (Information) | Als Erklärhilfe ja; der Beispielsatz «Soll ich dir helfen, einen Termin zu finden?» macht den Ansatzpunkt greifbar |
| `v-bv-fruehzeichen` | eher ja, als Absprachehilfe | Die Sätze («Ich schlafe wieder schlechter.») kann man gemeinsam durchgehen; unverändert bis auf Kurztext und Vertiefung |
| `v-is-gefaess` | ja | unverändert stark; die Bezeichnung des Ansatzpunkts nennt keinen Zeichencode mehr |
| `v-is-kreislauf` | eher ja (vorher eher nein) | Die Sätze «Ich mache mir Sorgen, treibe an und übernehme.» und «Ich bin erschöpft und werde ungeduldig.» erkennt man wieder; Kästen und Pfeile bleiben ein Schema |
| `v-fs-netz` | ja | Kurztext und Legende ohne Bildcode; auch als eigene Übung in der Vertiefung |
| `v-ra-vergleich` | nicht anwendbar (Information) | beantwortet «Was darf ich?»; die drei gleichen Zeilen in beiden Spalten bleiben (R2-08) |

**Selbstprüfung der bauenden Sitzung, Punkte 15 bis 19, gegen den Bestand geprüft**

| Punkt | Selbstprüfung | Nachgeprüft (Beleg) | Ergebnis |
| --- | --- | --- | --- |
| 15 | erfüllt (Selbsteinschätzung); Kreislauf «mit Sätzen aus Sicht der beiden statt Substantiven (R2-04)» | Sätze in den Stationen (Bildschirmfotos 1280 und 360 px); `resonance` bei allen 11 Darstellungen. Genauer wäre «aus Sicht der angehörigen Person» (siehe Zeile 1). Kleiner Tippfehler: «Erlebensbild ;» | bestätigt |
| 16 | erfüllt; Gefäss «ohne Bildteil: «Ansatzpunkt für Angehörige · beim Abfluss»» | «beim Abfluss» steht im Ansatzpunkt; der Abfluss ist ein Teil des Bildes, aber kein Zeichencode mehr wie «doppelter Ring». Die Aussage «ohne Bildteil» ist ungenau, das Ergebnis stimmt | bestätigt |
| 17 | erfüllt (Selbsteinschätzung); Antidepressiva nicht mehr gestrichelt | Klasse entfernt, Bildschirmfotos. Die Massnahme «Prüfsitzung: Lesart der K-Form» ist seit Runde 1 beantwortet und steht noch in der Tabelle | bestätigt |
| 18 | erfüllt; «200 %: gemessen in der Prüfrunde vom Stand `e63bd73` (0 Überlappungen bei 768 bis 1440 px)»; Kurztexte ohne Bildteile; Netz-Legende (V-08) | Der Beleg zu 200 % stammt vom alten Stand, obwohl seither 9 Figuren geändert wurden; der Eintrag zu R2-02 bis R2-07 nennt eine neue Messung nur für den Kreislauf. In dieser Runde nachgemessen: 0 Überlappungen in allen 11 Figuren. Kurztexte und Legende wie angegeben. Nicht erfasst: V-10 (kein Punkt-18-Kriterium) | bestätigt (Beleg veraltet, Ergebnis stimmt) |
| 19 | erfüllt; Kurztexte ohne Anordnungsversprechen, Vergleiche auf gleicher Zeilenhöhe, Legende und Vertiefung (V-08, V-09) | Zeilenversatz 0 px bei 768 bis 1440 px; Kurztexte ohne Versprechen. Nicht erfasst: der Satz «Die Abbildung stellt beide nach denselben Merkmalen nebeneinander.» vor dem Vergleich (V-11) | teilweise bestätigt (V-11) |

#### Befunde Visualisierungs-Check, Runde 3

- **V-10 · optional · Profil · Kreislauf: In der Listenansicht bei grosser Schrift treffen die Verbindungsstriche nicht.**
  - **Beleg:** `ihre-situation` › Abb. 2 (`v-is-kreislauf`) mit doppelter Browser-Schriftgrösse. In der Listenansicht behalten die Kästen `align-self:center` aus der breiten Ansicht (`templates/website/longform/visual-patterns.css`, `.puk-vis-cycle li`). Sie schrumpfen deshalb auf die Textbreite und stehen mittig. Die Verbindungsstriche hängen fest 24 px vom linken Rand jedes Kastens (`li:not(:last-child)::after{left:24px}`).
    - Bei 1280 px liegen die Kästen bei x = 298–942, 188–1052, 251–989 und 363–877 px. Die Striche liegen bei x ≈ 322, 212 und 275 px; die Striche von Station 2 zu 3 und von 3 zu 4 enden im Leeren (Bildschirmfoto `v-is-kreislauf-1280-200`).
    - Bei 768 px ist Station 4 eingerückt (107 statt 62 px); der Strich von Station 3 bei x ≈ 86 px trifft sie nicht.
    - Am Stand `e63bd73` standen die Kästen ebenfalls versetzt (x = 404–836, 353–887, 378–862, 395–845 px bei 1280 px). Die Striche trafen dort fast alle, nur 2 → 3 lag um 1 px daneben. Mit den längeren Sätzen (R2-04) wird der Versatz sichtbar.
    - Bei Standardschrift ist alles in Ordnung: schmal bündig, breit als Kreis. Die Reihenfolge bleibt über «Station 1» bis «Station 4», die Leserichtung und den Rückpfeil lesbar.
  - **Vorschlag:** im Design-System in der Container-Abfrage der Listenansicht `.puk-vis-cycle li{align-self:stretch}` setzen (alle Kästen in voller Breite), oder die Striche an einer festen Linie des Containers ausrichten statt am einzelnen Kasten.
  - **Zuständig:** Profil.
- **V-11 · optional · Website · Text vor dem Vergleich der Behandlungen verspricht «nebeneinander».**
  - **Beleg:** `behandlung-und-verlauf` › `wege`, Absatz vor Abb. 1: «Die Abbildung stellt beide nach denselben Merkmalen nebeneinander.» Unter 560 px stehen die Spalten untereinander (Bildschirmfoto `v-bv-vergleich-360`). Leitlinie «Visualisierung umsetzen», Punkt 19 sinngemäss: Was ein Text über die Anordnung verspricht, löst die Komponente bei allen Breiten ein. R2, Runde 1, hatte die Stelle im Lesetest als Stolperstelle genannt («stellt beide … nebeneinander» (schmal untereinander)), aber keinem Befund zugeordnet; deshalb wurde sie mit R2-01 nicht geändert.
  - **Vorschlag:** «Die Abbildung vergleicht beide nach denselben Merkmalen.»
  - **Zuständig:** bauende Sitzung nach Freigabe (Fachstelle entscheidet, ob umsetzen).

**Hinweis an das Profil (kein Befund der Website):** Silbentrennung bei mittlerer Breite. Im Pfad (Muster C, fünf Spalten) bricht «Weiterbehandeln» bei 900 px in Browsern ohne deutsche Silbentrennung mitten im Wort um («Weiterbehandel» / «n»), weil `overflow-wrap` greift, wenn `hyphens:auto` nicht wirkt. Gesehen im Chromium der Prüfumgebung, schon am Stand `e63bd73`. Im Design-System prüfen, ob die Spaltenüberschriften des Pfads eine Mindestbreite oder eine frühere Umstellung auf die senkrechte Ansicht brauchen.

#### Zählung der Befunde Visualisierungs-Check, Runde 3

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| erledigt aus Runde 2 | 2 | V-08, V-09 (je Website-Teil) |
| aus R2 erledigt (Matrix 15 bis 17) | 3 | R2-01, R2-02, R2-04 |
| optional, neu | 2 | V-10 (Profil), V-11 (Website) |
| Hinweis an das Profil | 1 | Silbentrennung im Pfad bei 900 px (vorbestehend) |
| nicht erfüllt ohne Befundnummer | 1 | Punkt 14, fachliche Freigabe (W1-F-21) |

#### Prüfrunde Visualisierungs-Check 4 · Nachprüfung (12.10.2026, Stand `1a328f5`)

**Geprüft durch:** vierte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und S-33, V-11, BD-12 und K1 nicht umgesetzt (die Umsetzung in den Pull Requests #40 und #41 stammt von der dritten Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 4.

**Grundlage:** `git diff 7cc4e1b 1a328f5`: Von den 11 Figuren sind nur `v-is-kreislauf` (Kurztext, Kurzbeschreibung) und der Absatz vor `v-bv-vergleich` geändert; Zeichnungen, Klassen und `site.config.json` sind unverändert. Playwright 1.56.1 mit Chromium, CSP aus `_headers` per Route; 200 % über `Page.setFontSizes` (32 px), Aufnahmen mit `page.screenshot` und `clip` (Scratchpad, nicht im Repository). Kreislauf bei 1280 und 360 px mit 16 und 32 px Standardschrift angesehen; Vergleich der Behandlungen bei 360 und 1280 px gemessen.

**Ergebnis:** V-11 ist erledigt. Die Matrix bleibt wie in Runde 3, ausser Punkt 19 bei `v-bv-vergleich` (jetzt E). Der Kreislauf ist mit dem neuen Kurztext unverändert gut lesbar; der Freundin-Test bleibt «eher ja». Die Selbstprüfung der bauenden Sitzung zu den Punkten 12, 15, 17, 18 und 19 stimmt mit dem Bestand. Keine neuen Befunde. Der Check bleibt **offen**: Punkt 14 (fachliche Freigabe, W1-F-21) ist nicht erfüllt; V-10 bleibt im Profil.

**Nachprüfung V-11**

| Befund | Umsetzung (Beleg) | Abweichung vom Vorschlag | Ergebnis |
| --- | --- | --- | --- |
| V-11 | `behandlung-und-verlauf` › `wege`, Absatz vor Abb. 1: «Die Abbildung vergleicht beide nach denselben Merkmalen.» (wortgleich mit dem Vorschlag). Gemessen: Die beiden Spalten (`section`) stehen bei 1280 px nebeneinander (links bei x = 129 und 652 px, gleiche Oberkante), bei 360 px untereinander (x = 41 px, Oberkante 3393 und 4134 px). Der Satz verspricht keine Anordnung mehr und stimmt bei beiden Breiten | keine | erledigt |

**Matrix, geänderte Zeilen** (übrige Werte wie Runde 3)

| Nr. | Prüfpunkt | `v-bv-vergleich` | `v-is-kreislauf` | Beleg |
| --- | --- | --- | --- | --- |
| 4 | Kernaussage und Erklärtext | E | E | Kreislauf: Kurztext jetzt 4 Sätze (Leitlinie: zwei bis vier): «Rückzug und Gereiztheit können Sorge, Antreiben und Übernehmen auslösen. Das kann Angehörige erschöpfen und ungeduldig machen. Die erkrankte Person fühlt sich dann eher unverstanden und zieht sich weiter zurück. An der eigenen Erschöpfung und Ungeduld können Sie ansetzen.» |
| 5 | Ansatzpunkt richtig gesetzt | – | E | unverändert Station 3; der Kurztext endet beim Ansatzpunkt und schiebt keine Verantwortung zu |
| 8 | Form und Linien tragen Bedeutung | E | T (V-10, Profil) | Zeichnung unverändert; bei Standardschrift trägt die Schleife breit und die Liste mit Rücksprung schmal (Bildschirmfotos 1280 und 360 px) |
| 12 | 320 px lesbar; Textalternative | E | E | Kurzbeschreibung 437 Zeichen (alle Figuren 193 bis 437, nachgezählt); kein Überlauf bei 320 px (Bedienung, Runde 4) |
| 17 | Keine ungewollten Bedeutungen | E | E | Der Kurztext nennt jetzt Angehörige und die erkrankte Person getrennt; «dann eher» bleibt vorsichtig. Der Satz könnte als «weil Sie ungeduldig sind» gelesen werden; die Kernaussage «Daran ist niemand schuld» und die Grenzen in der Vertiefung stehen dagegen. Kein Befund; gehört zur Freigabe der Sätze (W1-F-21) |
| 18 | 200 % Schrift; Kurztext ohne schmal fehlende Bildteile | E | E | 0 überlappende Textzeilen in allen 11 Figuren (132 Messungen: 360, 768, 900, 1024, 1280, 1440 px × 16 und 32 px; Text nur für Screenreader und geschlossene Vertiefungen ausgenommen). Der neue Kurztext nennt keine Bildteile |
| 19 | Versprechen des Kurztexts bei allen Breiten | **E** (vorher T, V-11) | E | siehe Nachprüfung V-11 |

**Freundin-Test, Kreislauf** (bei 1280 und 360 px angesehen, auch mit 200 %): **eher ja**, wie in Runde 3. Die Sätze in den Stationen sind unverändert; der Kurztext sagt jetzt, wer erschöpft ist und wer sich unverstanden fühlt. Das hilft Lesenden, die zuerst den Text lesen. Kästen und Pfeile bleiben ein Schema (Muster B). Bei 360 px mit 200 % steht der Kreislauf als Liste; die Verbindungsstriche treffen dort wie in Runde 3 nicht alle Kästen (V-10, Profil).

**Hinweis ohne Befund:** Der Plan von `v-bv-vergleich` sagt in `understood` weiterhin «Gleiche Merkmale nebeneinander beantworten …». Das ist kein sichtbarer Text; breit stimmt es. Bei der nächsten Planänderung mitführen.

**Selbstprüfung der bauenden Sitzung, Punkte 12, 15, 17, 18 und 19, gegen den Bestand geprüft**

| Punkt | Selbstprüfung | Nachgeprüft (Beleg) | Ergebnis |
| --- | --- | --- | --- |
| 12 | erfüllt; kein Überlauf 320 bis 1440 px; Kurzbeschreibungen 193 bis 437 Zeichen; Kreislauf mit einem Satz je Station und Sprecher vorweg (BD-12) | 70 Messungen ohne Überlauf; Längen nachgezählt (193 `fs-netz-text`, 437 `is-kr-text`); Wortlaut im Accessibility-Baum (Bedienung, Runde 4) | bestätigt |
| 15 | erfüllt (Selbsteinschätzung); Kreislauf mit Sätzen aus Sicht der angehörigen Person, Kurztext nennt die Personen (S-33) | Stationen und Kurztext wie zitiert (Bildschirmfotos). Die frühere Ungenauigkeit «aus Sicht der beiden» ist in der Selbstprüfung korrigiert; im Plan (`statement`) steht sie noch (Hinweis aus Runde 3, Zeile 1) | bestätigt |
| 17 | erfüllt (Selbsteinschätzung); Eintrag unverändert, Massnahme als beantwortet vermerkt | Massnahme steht jetzt als «– (Lesart der K-Form … beantwortet)», wie in Runde 3 angeregt. Zum Kurztext siehe Matrix, Zeile 17 | bestätigt |
| 18 | erfüllt; neu gemessen am 12.10.2026: 0 Überlappungen, 132 Messungen | nachgemessen: 0 in 132 Messungen. Profilpunkte V-08, V-09, V-10 richtig als offen geführt | bestätigt |
| 19 | erfüllt; V-11 umgesetzt, Spalten unter 560 px untereinander | Wortlaut und Spaltenlage gemessen (siehe V-11) | bestätigt |

#### Zählung der Befunde Visualisierungs-Check, Runde 4

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| erledigt aus Runde 3 | 1 | V-11 |
| optional, neu | 0 | – |
| offen im Profil | 1 | V-10 |
| nicht erfüllt ohne Befundnummer | 1 | Punkt 14, fachliche Freigabe (W1-F-21) |

#### Prüfrunde Visualisierungs-Check 5 · Nachprüfung nach W1-33 und S-34 (12.10.2026, Stand `007006a`)

**Geprüft durch:** fünfte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und W1-33 und S-34 nicht umgesetzt (Umsetzung in #44 durch die vierte Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle: Prüfung 5.

**Grundlage:** `git diff f24e5af 007006a`: in `content/je-nach-rolle.html` und `je-nach-rolle.html` je eine Zeile, der dritte Absatz von `erwachsene-kinder`; `site.config.json` (`visualPlan`) unverändert. Die einzige Figur der Seite, `v-ro-spannung`, steht im Abschnitt `eltern`. 200 % über `Page.setFontSizes` (32 px), CSP aus `_headers` per Route.

**Ergebnis:** Keine Figur ist betroffen; Zeichnungen, Kern- und Kurztexte, Kurzbeschreibungen und Plan sind byte-gleich. Die Matrix bleibt wie in Runde 4. Nachgemessen: 0 überlappende Textzeilen in allen 11 Figuren (132 Messungen: 360, 768, 900, 1024, 1280, 1440 px × 16 und 32 px Standardschrift; Text nur für Screenreader und Inhalte geschlossener Vertiefungen ausgenommen). Keine neuen Befunde. Der Check bleibt **offen**: Punkt 14 (fachliche Freigabe, W1-F-21) ist nicht erfüllt; V-10 bleibt im Profil.

**Selbstprüfung der bauenden Sitzung, Kopfzeile:** «nach K1 sowie nach W1-33 und S-34 (12.10.2026) unverändert, weil keine Figur betroffen ist» – **bestätigt**: Der Diff berührt keine Figur und keinen Plan-Eintrag. Die Belege der Selbstprüfung bleiben gültig: Punkt 12 (kein Überlauf 320 bis 1440 px) und Punkt 18 (0 Überlappungen in 132 Messungen) an `007006a` nachgemessen (Bedienung, Runde 5; oben).

#### Zählung der Befunde Visualisierungs-Check, Runde 5

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| optional, neu | 0 | – |
| offen im Profil | 1 | V-10 |
| nicht erfüllt ohne Befundnummer | 1 | Punkt 14, fachliche Freigabe (W1-F-21) |

## Befunde je Stufe

### W1 Fachliche Prüfung

#### Prüfrunde W1 (10.10.2026, Stand `58d5fad`)

**Geprüft durch:** eine Prüfsitzung (Claude Code), die die Website nicht gebaut hat. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht. Jeder Befund stammt aus dieser einen Prüfung («Prüfung 1»); eine zweite, unabhängige W1-Sitzung wird empfohlen.

**Grundlage:** `content/*.html` und `site.config.json` aller acht Seiten, Seite für Seite gelesen; die gebauten Seiten (in der Prüfsitzung im Speicher neu gerendert: alle 8 identisch mit den committeten Dateien, also aktuell). Kriterien: Abschnitt «Fachliche Qualität und Haltung» (`guidelines/00-fachliche-qualitaet-und-haltung.md`), Punkte A1–A6, Q1–Q5, B1–B7, C1–C3, D1–D2 (Liste unten).

**Grenzen dieser Prüfung**

- **Originale nur teilweise zugänglich.** Die Prüfumgebung durfte die Websites der Originale nicht laden (Netzwerkrichtlinie, Proxy 403 für leitlinien.de, psychiatrie.ch, obsan.admin.ch, fedlex.admin.ch, zh.ch, bag.admin.ch, ahv-iv.ch, pubmed.ncbi.nlm.nih.gov, doi.org und die Anbieter).
  - **Fachartikel** (33 zitierte Arbeiten, dazu Spijker et al. 2002 und Butzlaff und Hooley 1998 zum Abgleich) wurden über die PubMed-Schnittstelle an Metadaten und Abstract geprüft, wo vorhanden zusätzlich am PMC-Volltext. Hooley und Gotlib 2000 ist nicht in PubMed.
  - **Leitlinien, Gesetze, Statistiken, Befragungen und Angebote** konnten nur über Suchergebnisse geprüft werden. Sie gelten in diesem Bericht als **nicht am Original geprüft** (W1-25).
- **Kein Umbau.** Die Website ist neu, es gibt keinen Bestand. Der Abgleich von 20 Aussagen mit dem Bestand entfällt. Die Inhaltsgrundlage (Recherchebericht «Depression bei Erwachsenen», Ergänzung, Dokument zur Situation der Angehörigen) und das Arbeitsheft «Wenn dein Partner depressiv ist» liegen nicht im Repository; ein Abgleich damit war nicht möglich.
- Die Matrix des Visualisierungs-Checks gehört zu Stufe 4 und ist nicht Teil dieser Runde. Fachliche Befunde zu Figuren stehen unter C2.

**Ergebnis:** W1 bleibt **offen**. 25 Befunde (14 wichtig, 11 optional), 21 Fragen an die Fachstelle (W1-F-01 bis W1-F-21). Für «erledigt» fehlen die Entscheide der Fachstelle, die Korrekturen der bauenden Sitzung und die Prüfung der in W1-25 genannten Stellen am Original.

**Prüfpunkte (Kurzform der Leitlinie)**

- **A Fachliche Richtigkeit:** A1 Definitionen, Modelle, Zahlen, Klassifikation · A2 Ursache, Risikofaktor, Zusammenhang, Folge; Stärke der Formulierung · A3 Ebenen (Symptom, Diagnose, Erleben, Beziehung, Behandlung, Alltag) · A4 Medikamente und Therapien ohne Einzelfallempfehlung · A5 Schweizer Kontext · A6 Krisenthemen ruhig, keine Krisenzuständigkeit, keine Nummern
- **Q Quellenstandard:** Q1 zentrale Aussagen belegt, Quelle deckt die Aussage · Q2 Angaben vollständig und korrekt (Autorinnen und Autoren, Jahr, Titel, Zeitschrift; URL und Abrufdatum) · Q3 wissenschaftlich, leitlinienbasiert, bei Recht amtlich · Q4 Darstellung (`.puk-longform__sources`, `.puk-longform__source-use`, Linktexte) · Q5 nichts erfunden, Unsicheres markiert
- **B Zielgruppenbezug und Haltung:** B1 Perspektive, wer gemeint ist · B2 entlastend · B3 personenzentriert · B4 Hoffnung ohne Beschönigung · B5 Autonomie, keine Kontrollinstanz · B6 Belastung, Grenzen, Selbstsorge · B7 Anrede
- **C Verständlichkeit:** C1 lesbar unter Stress, Fachbegriffe erklärt, Kernaussage · C2 Grafiken und Tabellen korrekt · C3 Überschriftenfolge, Alternativtexte, Linktexte
- **D Praxisbezug:** D1 konkrete Empfehlungen, Formulierungsbeispiele · D2 reale Situationen

#### W1-A · Kennzahlen der bauenden Sitzung, nachgerechnet

| Angabe der bauenden Sitzung | Nachgerechnet (Prüfsitzung, 10.10.2026) | Ergebnis |
| --- | --- | --- |
| `node tools/build.mjs` → 8 Seiten, 0 blockierend, 13 Hinweise (11 × Visualisierung, `siteUrl`, Prüfbericht) | `build.mjs` schreibt die Seiten und wurde darum nicht ausgeführt. Stattdessen: Seiten im Speicher mit `tools/contract.js` gerendert und das Gate darauf angewendet → 8 Seiten, alle identisch mit den committeten Dateien; 0 blockierend, 13 Hinweise (`visual-approval` 11, `site-url` 1, `review-report` 1). `node tools/gate.mjs` auf den committeten Seiten: «Gate draft: 0 blockierend, 13 Hinweise» | bestätigt |
| `node tools/gate.mjs --selftest` → 53/53 | «Selbsttest: 53/53 bestanden.» | bestätigt |
| `--production` blockiert | 12 blockierend (11 × `visual-approval`, 1 × `review-report`), 1 Hinweis (`site-url`) | wie erwartet |
| `visualPlan`: 49 Zeilen auf 8 Seiten, 11 Darstellungen | 49 Zeilen; 11 Zeilen mit `format` ≠ `text`; je Seite Abschnitte = Planzeilen (4, 6, 7, 7, 8, 6, 6, 5), kein Abschnitt ohne Zeile, keine Zeile ohne Abschnitt | bestätigt |
| `understood` und `resonance` bei allen 11, `entryPoint` bei B, C, G | `understood` 11/11, `resonance` 11/11; `entryPoint` bei `v-dv-entstehung`, `v-bv-weg`, `v-is-gefaess`, `v-is-kreislauf` (G, C, G, B) | bestätigt |
| 11 Figuren mit `data-visual-id`, Kernaussage und Erklärtext | 11 × `data-visual-id`; je Figur `p.puk-vis-kern`, `p.puk-vis-short` und `details.puk-vis-more` vorhanden | bestätigt |
| Textalternativen ≥ 40 Zeichen | Länge des Textes hinter `aria-describedby`: 193 (`v-fs-netz`) bis 367 (`v-dv-entstehung`) Zeichen | bestätigt |
| keine Hexwerte und keine `style`-Attribute in `content/` | 0 Treffer für Hexwerte (ohne Sprungmarken), 0 × `style=` | bestätigt |
| kein horizontaler Überlauf bei 1280, 360, 320 px (Playwright) | Playwright/Chromium, alle 8 Seiten, `scrollWidth − clientWidth` = 0 bei 1280, 360 und 320 px; keine Konsolenfehler | bestätigt |
| «Schritt für Schritt aufbauen» per Tastatur, Live-Region «Schritt 1 von 3: Verletzlichkeit» | Fokus auf die Schaltfläche, Enter → Live-Region «Schritt 1 von 3: Verletzlichkeit», `data-mode="steps"`, «Weiter» sichtbar; Leertaste auf «Weiter» → «Schritt 2 von 3: Belastung» | bestätigt |
| (neu) Wörter je Seite | sichtbarer Text ohne Quellenliste und SVG: 529 · 1289 · 1460 · 1062 · 1154 · 809 · 695 · 774 (Reihenfolge der Navigation), zusammen 7772 | für W2 und S |

#### W1-B · Seite für Seite

Ergebnis je Prüfpunkt: erfüllt · teilweise · nicht erfüllt · entfällt (mit Grund). Belege nennen Seite (`id`) › Abschnitt (`sectionId`) und zitieren den Text.

**Seite 1 · Übersicht (`index`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | erfüllt (nicht am Original geprüft) | `einstieg`: «rund jede zehnte Person …» – SGB 2022: 9,8 % (kantonale Auswertung, Sekundärquelle); `kurz`: «Drei von vier Angehörigen …» – Barometer 2024: «Rund drei Viertel der Angehörigen beschreibt die Depression … als große Belastung für das Familienleben» | W1-25 |
| A2 Zusammenhang und Stärke | teilweise | `kurz` verallgemeinert eine deutsche Befragung zu einer allgemeinen Aussage ohne «in Deutschland» und ohne «für das Familienleben» (so auf `ihre-situation` › `nicht-allein`) | W1-19 |
| A3 Ebenen | erfüllt | Kernsätze trennen Krankheit, Ursache, Belastung, Rolle, Rechte | – |
| A4 Therapien | erfüllt | nur «gut behandelbar», Verweis auf `behandlung-und-verlauf` | – |
| A5 Schweizer Kontext | erfüllt | SGB 2022; Fachstelle der PUK | – |
| A6 Krisenthemen | erfüllt | Lesepfad «Ich mache mir Sorgen, dass die Person nicht mehr leben will.» führt auf `begleiten.html#suizidgedanken`; keine Nummer, keine Krisenzuständigkeit der Fachstelle | – |
| Q1 belegt | erfüllt | Seite ohne Quellenliste; beide Zahlen sind auf `depression-verstehen` (Obsan) bzw. `ihre-situation` (Barometer 2024) belegt | – |
| Q2–Q5 | entfällt | keine eigene Quellenliste (Übersicht) | – |
| B1 Perspektive | erfüllt | `einstieg`: «richtet sich an Angehörige und nahe Bezugspersonen von Erwachsenen mit Depression» | – |
| B2 entlastend | erfüllt | «Niemand hat die Depression verschuldet, weder die erkrankte Person noch Sie» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Erwachsene mit Depression» | – |
| B4 Hoffnung | erfüllt | «Sie ist gut behandelbar» | – |
| B5 Autonomie | erfüllt | «Sie können begleiten, aber nicht heilen. Die Verantwortung für die Behandlung liegt nicht bei Ihnen» | – |
| B6 Belastung | erfüllt | «Ihre Belastung ist berechtigt»; Lesepfad «Mir wird es zu viel.» | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | fünf Kernsätze, Lesepfade als Fragen | – |
| C2 Grafiken | entfällt | keine Figur (Planbegründungen) | – |
| C3 Überschriften, Links | erfüllt | 19 sprechende interne Links, alle Ziele vorhanden (Gate ohne Befund «link-target») | – |
| D1 Empfehlungen konkret | erfüllt | Kontakt zur Fachstelle mit Adresse; Einstieg nach Frage | – |
| D2 reale Situationen | erfüllt | «Warum zieht sie sich so zurück?», «Was darf ich erfahren?» | – |

**Seite 2 · Depression verstehen (`depression-verstehen`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Definitionen, Zahlen, Klassifikation | teilweise | `was-ist`: Kriterien entsprechen nach Kenntnis der Prüfsitzung der ICD-11 (mind. zwei Wochen, ein Kernsymptom aus Stimmung oder Interesse; nicht am Original geprüft); ICD-11 kennt keine eigene Kategorie «chronische Depression» (Dysthymie 6A72, Zusatzcode 6A80.2), die Quellenzeile ordnet die Formen aber der ICD-11 zu; `formen`: «Etwa jede vierte Depression bleibt einmalig» und «Bei den meisten kehrt die Depression … wieder» passen nicht zu `behandlung-und-verlauf` › `verlauf` («40 bis 60 von 100»); `anders`: «fast dreimal so oft durch Suizid» gestützt (2022: 695 Männer, 263 Frauen; Zahlen vermutlich aus Obsan-Bulletin 08/2024), «Männer lassen sich seltener behandeln» im Obsan-Material nicht gefunden | W1-02, W1-09, W1-24, W1-25 |
| A2 Zusammenhang und Stärke | teilweise | `entstehung` sauber («Eine einzelne Ursache gibt es fast nie», «kann … beginnen»); zu stark: «Frauen erhalten die Diagnose» (Salk: Kriterien in Befragungen), «zeigt sich häufiger als …» (Martin: weiterer Forschungsbedarf), «den grösseren Teil erklären Lebenserfahrungen» (Sullivan: inkl. Messfehler) | W1-12 |
| A3 Ebenen | erfüllt | Symptom (`was-ist`), Erleben (Abb. 1 «Was die Person erleben kann»), Entstehung, Formen getrennt | – |
| A4 Therapien | erfüllt | nur Hinweise: «die Behandlung ist eine andere» (bipolar), «braucht es eine fachärztliche Behandlung» (psychotisch) | – |
| A5 Schweizer Kontext | erfüllt | SGB 2022, Suizidzahlen der Schweiz, Hausarztpraxis als erster Schritt | – |
| A6 Krisenthemen | erfüllt | Suizid als Symptom («Gedanken an den Tod oder an Suizid») und als Zahl, ohne Alarmton | – |
| Q1 belegt, Quelle deckt | teilweise | ohne deckende Quelle: `anders` › «Bei älteren Menschen», «Mit körperlichen Beschwerden», «Rund um eine Geburt»; `formen` › Trauer und Burnout; Vertiefung «Antidepressiva wirken trotzdem» (Moncrieff und Jauhar enthalten keine Wirksamkeitsdaten) | W1-10 |
| Q2 Angaben vollständig | teilweise | ICD-11 ohne URL und Abrufdatum; Salk, Martin, Sullivan ohne Titel; Moncrieff/Jauhar ohne DOI; kein Abrufdatum; SGPP-Titel lautet «Die Behandlung der unipolaren depressiven Störungen: Update 2025, Teil 1» | W1-09 |
| Q3 Quellenart | erfüllt | NVL, SGPP, ICD-11, Obsan, Meta-Analysen | – |
| Q4 Darstellung | erfüllt | 8 Einträge mit Verwendung | – |
| Q5 nichts erfunden | erfüllt | alle Fachartikel in PubMed gefunden, Links führen zur Arbeit | – |
| B1 Perspektive | erfüllt | `dahinter`: «Viele Angehörige erleben, dass …»; Übergang: «Für Angehörige ist oft nicht die Diagnose das Schwierigste» | – |
| B2 entlastend | erfüllt | Abb. 2 Kern: «Niemand hat sie verschuldet, weder die erkrankte Person noch Sie.»; Veranlagung «bestimmt aber nicht das Schicksal» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Menschen» | – |
| B4 Hoffnung | erfüllt | Dysthymie: «eine behandelbare Erkrankung und kein Charakterzug» | – |
| B5 Autonomie | erfüllt | Abb. 1: «Nachfragen hilft mehr als Deuten» | – |
| B6 Belastung | entfällt | Thema der Seiten `ihre-situation` und `fuer-sich-sorgen` | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | Fachbegriffe erklärt (Episode, Dysthymie, psychotische Merkmale mit Beispiel); Kernaussage je Abschnitt | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 «Was darunter liegt, ist eine Möglichkeit, keine Gewissheit»; Abb. 2 entspricht dem Vulnerabilitäts-Stress-Modell, Grenzen in der Vertiefung | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassungen 306 und 367 Zeichen; h3 in den Figuren | – |
| D1 Empfehlungen konkret | erfüllt | «Was würde es dir heute leichter machen?»; «Die Hausarztpraxis ist ein guter erster Schritt.» | – |
| D2 reale Situationen | erfüllt | «Ihr Partner sagt das Treffen mit Freunden zum dritten Mal ab.» | – |

**Seite 3 · Behandlung und Verlauf (`behandlung-und-verlauf`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `verlauf`: «die Hälfte … nach drei Monaten, drei Viertel nach einem Jahr» stimmt mit Spijker 2002 überein (Allgemeinbevölkerung); «40 bis 60 von 100» und «15 bis 30 von 100» laut Suchergebnis aus NVL Kap. 1.4 (Original nicht geöffnet); Widerspruch zu `depression-verstehen` › `formen` | W1-02, W1-25 |
| A2 Zusammenhang und Stärke | teilweise | «Je früher er erkannt wird, desto besser lässt er sich behandeln.» ohne Beleg; Lichttherapie «hilft» (Vertiefung Abb. 1) | W1-12 |
| A3 Ebenen | erfüllt | Behandlung, Weg, Verlauf, Vorbeugen, Einbezug getrennt | – |
| A4 Medikamente und Therapien | teilweise | ohne Einzelfallempfehlung: Kern Abb. 1 «Welcher passt, entscheidet die erkrankte Person gemeinsam mit der Fachperson»; Johanniskraut mit Wechselwirkungen. `vorbeugen`: «nach der Besserung noch sechs bis zwölf Monate» – NVL Kap. 6: «6–12 Monate über die Remission … hinaus»; Psychotherapie «nach acht bis zwölf Wochen» nicht belegt | W1-20, W1-10 |
| A5 Schweizer Kontext | teilweise | Weg im Kanton Zürich; Vertiefung Abb. 2: Grundversicherung, Franchise, Selbstbehalt, ärztliche Anordnung (BAG: seit 1.7.2022). «wenn eine Ärztin oder ein Arzt sie anordnet» – anordnen dürfen nur bestimmte Fachrichtungen (Art. 11b KLV) | W1-23 |
| A6 Krisenthemen | erfüllt | Schritt 2: «auch nach Suizidgedanken wird gefragt»; Krisenplan als Vorsorge der Person, ohne Krisenzugang | – |
| Q1 belegt, Quelle deckt | teilweise | Studie zu «Hälfte nach drei Monaten» nicht genannt; Psychotherapie «Zu Beginn kann es vorübergehend schwerer werden» ohne Quelle; Weg und Anordnung nur mit dem internen Recherchebericht belegt | W1-09, W1-10 |
| Q2 Angaben vollständig | teilweise | NVL «Kapitel 3 bis 6» mit Link auf Kapitel 3; Verlauf und Rückfallrisiko stehen laut Suchergebnis in NVL Kap. 1.4 «Verlaufsformen und prognostische Faktoren»; Recherchebericht nicht öffentlich; kein Abrufdatum | W1-09 |
| Q3 Quellenart | teilweise | rechtlich-administrative Aussage (Anordnung psychologischer Psychotherapie, Kostenübernahme) ohne amtliche Primärquelle (KLV, BAG) | W1-09 |
| Q4 Darstellung | erfüllt | 4 Einträge mit Verwendung; NVL-Empfehlung 3-8 genannt | – |
| Q5 nichts erfunden; Unsicheres markiert | erfüllt | Plan-Abweichung «ohne Sitzungszahlen» begründet (Prüfbericht); Kuyken mit vollem Titel | – |
| B1 Perspektive | erfüllt | Hero: «wo Sie unterstützen können, ohne die Verantwortung zu übernehmen» | – |
| B2 entlastend | erfüllt | «Ein Rückfall ist kein Versagen, weder von der erkrankten Person noch von Ihnen.» | – |
| B3 personenzentriert | teilweise | «die Hälfte der Erkrankten» (`verlauf`) | W1-12 |
| B4 Hoffnung ohne Beschönigung | erfüllt | «gut behandelbar» neben «Die Behandlung braucht aber Geduld, und die Krankheit kann wiederkommen.» | – |
| B5 Autonomie | erfüllt | Abb. 3 Ansatzpunkt: «Die Entscheidung über die Behandlung bleibt bei der erkrankten Person.»; Krisenplan: «Ein solcher Plan gehört der erkrankten Person.» | – |
| B6 Belastung | erfüllt | Schritt 4: «… oder das Umfeld überlastet ist» | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | Fachbegriffe erklärt oder ausgeschrieben (EKT, rTMS); Kernaussage je Abschnitt | – |
| C2 Grafiken korrekt | erfüllt | Abb. 2: Schritt 4 «bei Bedarf» gestrichelt; Vertiefung: «Der Pfad zeigt nur die Reihenfolge, keine Dauer.»; Abb. 3 › Grenzen: «keine Skala zum Selbsttest» | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassungen 221, 295, 305 Zeichen | – |
| D1 Empfehlungen konkret | erfüllt | Krisenplan mit fünf Punkten; zwei Formulierungsbeispiele | – |
| D2 reale Situationen | erfüllt | «Mir fällt auf, dass du seit einer Woche kaum schläfst. Wir hatten abgemacht, dass ich das anspreche.» | – |

**Seite 4 · Ihre Situation (`ihre-situation`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `nicht-allein`: «drei von vier Angehörigen …» (Barometer 2024, siehe Quellentabelle), «73 von 100» (Stand by You); `gesundheit`: «Schlafproblemen, Erschöpfung, Grübeln und körperlichen Beschwerden» – Idstad 2010 misst das nicht; `wechselwirkung` › Vertiefung: «spätere nicht» widerspricht Butzlaff und Hooley 1998 | W1-03, W1-04 |
| A2 Zusammenhang und Stärke | teilweise | Abb. 1 › Vertiefung benennt die Grenze gut («Ursache und Wirkung lassen sich nicht sicher trennen»). Zu stark: «Das ist gut untersucht» / «Gut belegt» (eine Längsschnittstudie, Assoziation); «wird es meist auch für Angehörige leichter» (Martire: nur depressionsspezifische Belastung, ab 60 Jahren); Kern Abb. 1 «hängt nicht von Ihrer Stärke ab» (absolut) | W1-12 |
| A3 Ebenen | erfüllt | Belastung der Angehörigen (`nicht-allein` bis `gesundheit`), Beziehung (`wechselwirkung`) und Angst um das Leben (`angst`) stehen in getrennten Abschnitten | – |
| A4 Therapien | erfüllt | Paartherapie nur mit Vorbehalt: «nach bisherigen, noch schwachen Studien ähnlich gut wie eine Einzeltherapie» (Barbato 2018: «low-quality evidence») | – |
| A5 Schweizer Kontext | erfüllt | Schweizer Zahl neben der deutschen: «In einer Schweizer Befragung berichteten 73 von 100 …»; deutsche Daten als solche benannt («in Deutschland») | – |
| A6 Krisenthemen | erfüllt | `angst`: ruhig («Viele beschreiben eine dauernde Wachsamkeit»), Verweis auf `begleiten.html#suizidgedanken`, keine Nummer, keine Krisenzuständigkeit | – |
| Q1 belegt, Quelle deckt | teilweise | Idstad deckt `gesundheit` nicht; Hooley und Gotlib nicht prüfbar, «spätere nicht» ohne Quelle; «Am häufigsten … Sorge» im Abstract von van Wijngaarden 2004 ohne Rangfolge; «Viele beschreiben eine dauernde Wachsamkeit» und «Trauer um das, was … verloren geht» ohne Quelle | W1-03, W1-04, W1-10 |
| Q2 Angaben vollständig | teilweise | keine Titel bei 8 Fachartikeln; Martire und Hooley ohne Link; Barbato ohne dritten Autor; kein Abrufdatum bei Barometer und Stand by You | W1-09 |
| Q3 Quellenart | erfüllt | Meta-Analysen, Kohorten, Cochrane; Befragungen als solche bezeichnet («Daten aus Deutschland», «Alle psychischen Erkrankungen, nicht nur Depression») | – |
| Q4 Darstellung | erfüllt | `ul.puk-longform__sources` mit 10 Einträgen, je `.puk-longform__source-use`; Linktexte nennen Autor und Jahr | – |
| Q5 nichts erfunden | erfüllt | alle 10 Quellen existieren; jeder verlinkte DOI führt zur genannten Arbeit (Quellentabelle) | – |
| B1 Perspektive | erfüllt | durchgehend Angehörige: «Wenn Sie sich belastet fühlen, geht es vielen ähnlich.» | – |
| B2 entlastend | erfüllt | «Sie ist kein Zeichen von Schwäche»; Abb. 2 Kern: «Daran ist niemand schuld»; Abb. 1 › Grenzen: «ein volles Gefäss ist kein Versagen» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Menschen mit Depression»; keine etikettierenden Bezeichnungen (Suche nach «Depressive», «Kranke») | – |
| B4 Hoffnung | erfüllt | Abb. 1: «wenn die Behandlung wirkt, wird es meist auch für Angehörige leichter» (Stärke siehe A2); Abb. 2: «eine Stelle, an der sich der Kreis lockern lässt» | – |
| B5 Autonomie | erfüllt | Abb. 2 › Ansatzpunkt beschreibt eigene Möglichkeiten: «Die eigene Ungeduld als Zeichen von Überlastung sehen … Entlastung für sich suchen» – keine Verantwortung für den Verlauf | – |
| B6 Belastung, Selbstsorge | erfüllt | Kern der Seite; Verweise auf `fuer-sich-sorgen` (2×) und `#eigene-krise` | – |
| B7 Anrede | erfüllt | «Sie» durchgehend | – |
| C1 verständlich | erfüllt | je Abschnitt eine Kernaussage, z. B. `nicht-allein` «Sie sind nicht allein»; keine unerklärten Fachbegriffe | – |
| C2 Grafiken korrekt | teilweise | Abb. 1: «fehlende Information» steht bei den Zuflüssen, an denen Angehörige «wenig ändern» können, und zugleich als Ansatzpunkt «Information holen»; `was-belastet` sagt: «Dagegen lässt sich etwas tun» | W1-08 |
| C3 Überschriften, Alternativen, Links | erfüllt | h1 › h2 je Abschnitt; Textfassungen 343 und 339 Zeichen; Linktexte sprechend | – |
| D1 Empfehlungen konkret | erfüllt | Abb. 1 › Ansatzpunkt: «Information holen, sich beraten lassen, Aufgaben teilen, Auszeiten einplanen»; Beispiel Herr K. | – |
| D2 reale Situationen | erfüllt | Sätze «Meine Schwester übernimmt den Mittwoch.», «Niemand sagt mir, wie es weitergeht.» | – |

**Seite 5 · Je nach Rolle (`je-nach-rolle`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `kinder`: «48 von 100 … 4 von 100» stimmt (Collishaw); Schutzfaktoren teils frei gedeutet; «zwei- bis dreimal so häufig» am Abstract von Rasic nicht prüfbar; `geschwister`: «etwas erhöhtes Risiko» bei HR 1,74 (Rhee) untertrieben; Barometer 2018 siehe Quellentabelle | W1-05, W1-13 |
| A2 Zusammenhang und Stärke | nicht erfüllt | `geschwister`: «Das liegt an gemeinsamen familiären und erblichen Faktoren, nicht an der Unterstützung, die sie leisten.» – kausale Aussage, die Rhee 2025 nicht untersucht; `partner`: «sind meist Zeichen der Krankheit» (auf `depression-verstehen` «oft»); `eltern`: «Viele erleben Schuld oder Scham» (Kika: «Some parents») | W1-05, W1-12 |
| A3 Ebenen | erfüllt | Rollen getrennt; Hinweise zu Behandlung nur als Verweis | – |
| A4 Therapien | erfüllt | `partner`: «es gibt Medikamente, die seltener solche Nebenwirkungen haben» – ohne Einzelfallempfehlung; Paartherapie «kann sinnvoll sein» | – |
| A5 Schweizer Kontext | erfüllt | Angebote Kinderseele Schweiz und VASK Zürich; Schweizer Zahl bei `freunde` | – |
| A6 Krisenthemen | erfüllt | `eltern`: «ob sich das Kind etwas antun könnte» ohne Alarmton, keine Nummer | – |
| Q1 belegt, Quelle deckt | teilweise | Rhee deckt den Teil «nicht an der Unterstützung» nicht; Greally ist keine «Übersicht zu Eltern erwachsener Kinder» (13 von 26 Studien); Dam und Hall: Quellenzeile «Scham und Verheimlichen» ohne Aussage auf der Seite; «Partnerinnen und Partner tragen oft die Hauptlast» ohne Quelle | W1-05, W1-09, W1-10 |
| Q2 Angaben vollständig | teilweise | Titel fehlen bei 11 Einträgen; Jayasinghe ohne Link; kein Abrufdatum | W1-09 |
| Q3 Quellenart | erfüllt | Meta-Analysen, Registerstudie, qualitative Synthesen; Barometer als Befragung benannt | – |
| Q4 Darstellung | erfüllt | 15 Einträge mit Verwendung | – |
| Q5 nichts erfunden; Unsicheres markiert | erfüllt | `eltern` und `erwachsene-kinder` benennen die dünne Forschung selbst: «die Befunde stammen meist aus Studien zu Jugendlichen oder zu psychischen Erkrankungen allgemein» (Prüfbedarf 3) | – |
| B1 Perspektive, wer gemeint ist | teilweise | `erwachsene-kinder` spricht nur an, wer «mit einem Elternteil mit Depression aufgewachsen ist»; Töchter und Söhne eines im Alter erkrankten Elternteils finden sich nicht; `geschwister` sagt nicht, dass die Befunde psychische Erkrankungen allgemein betreffen | W1-14, W1-15 |
| B2 entlastend | erfüllt | `kinder`: «Du bist nicht schuld»; Abb. 1: «Mein Hin und Her ist kein Versagen» (Plan); `geschwister`: «Sie dürfen selbst entscheiden, wie viel sie mittragen» | – |
| B3 personenzentriert | teilweise | Seitentext ohne Etiketten; Quellenzeile «Meta-Synthese zu Eltern depressiver Jugendlicher» | W1-12 |
| B4 Hoffnung | erfüllt | `partner`: «die Beziehung sei … tiefer geworden»; `kinder`: «Das ist kein Schicksal» | – |
| B5 Autonomie | teilweise | Abb. 1 Mitte: «… und frage, bevor ich etwas unternehme», darunter: «Auch ohne Einverständnis Ihres erwachsenen Kindes dürfen Sie dem Behandlungsteam Ihre Beobachtungen mitteilen» – das Verhältnis beider Aussagen bleibt offen | W1-16 |
| B6 Belastung, Selbstsorge | erfüllt | `erwachsene-kinder`: «Sie dürfen Grenzen setzen»; `freunde`: «Die Rolle einer Therapeutin … müssen Sie nicht übernehmen» | – |
| B7 Anrede | erfüllt | «Sie»; «du» nur in Formulierungsbeispielen | – |
| C1 verständlich | erfüllt | Einstieg `rollen`: «Jeder Abschnitt ist für sich lesbar.»; «Wir-Krankheit» erklärt («betrifft das Paar als Ganzes») | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 sagt «nicht, wo die Mitte liegen soll» (Vertiefung); Befunde nach Kika, Greally, Johansson | – |
| C3 Überschriften, Alternativen, Links | erfüllt | h2 je Rolle; Textfassung Abb. 1 267 Zeichen; Sprungziele aus `index` treffen die Abschnitte | – |
| D1 Empfehlungen konkret | erfüllt | drei Formulierungsbeispiele (`partner`, `kinder`, `freunde`); Fragen von Kindern als Liste | – |
| D2 reale Situationen | erfüllt | «Ich vermisse unsere Abende. Magst du mit mir eine kleine Runde spazieren?» | – |

**Seite 6 · Begleiten und Gespräche (`begleiten`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | entfällt | keine Zahlen; Warnsignale wie in den Quellen üblich | – |
| A2 Zusammenhang und Stärke | teilweise | «Über die Depression zu reden, macht sie nicht schlimmer.» (absolut, ohne zugeordnete Quelle); «für viele ist das Gespräch eine Entlastung» (Dazzi: «may», Menschen in Behandlung). Die Seite benennt die Evidenzart selbst: «beruhen vor allem auf dem Konsens von Fachleuten …» | W1-12 |
| A3 Ebenen | erfüllt | Haltung, Gespräch, Alltag, Ablehnung, Suizid getrennt | – |
| A4 Therapien | entfällt | keine Aussagen zu Medikamenten oder Therapien | – |
| A5 Schweizer Kontext | erfüllt | Hausarztpraxis als Weg; wie-gehts-dir.ch; keine deutschen Begriffe | – |
| A6 Krisenthemen | erfüllt | `suizidgedanken`: ruhig, direkt («Fragen Sie direkt nach.»), danach der Platzhalter `<p data-responsibility-inline></p>` mit geprüftem Wortlaut; keine Nummer, kein `tel:` | – |
| Q1 belegt, Quelle deckt | teilweise | «Ferien als Heilmittel verordnen: Ein Ortswechsel heilt keine Depression.» und «macht sie nicht schlimmer» ohne Quelle, die das deckt (MHFA am Original nicht prüfbar); Metapher «Mit im Boot» aus dem Arbeitsheft der Fachstelle, das nicht in der Quellenliste steht | W1-10, W1-17 |
| Q2 Angaben vollständig | teilweise | NVL-Kapitel und SGPP ohne Abrufdatum; MHFA ohne Jahr | W1-09 |
| Q3 Quellenart | erfüllt | Delphi-Leitlinie, Übersicht, NVL, SGPP | – |
| Q4 Darstellung | erfüllt | 5 Einträge mit Verwendung | – |
| Q5 nichts erfunden | erfüllt | Bond 2019 und Dazzi 2014 existieren wie angegeben | – |
| B1 Perspektive | erfüllt | Hero: «Heilen können Sie die Depression nicht, und das ist auch nicht Ihre Aufgabe.» | – |
| B2 entlastend | erfüllt | «Sie müssen das Problem nicht lösen.»; Abb. 1: «Manchmal geht es nur langsam, und das ist in Ordnung.» | – |
| B3 personenzentriert | erfüllt | «Menschen mit Depression», «erkrankte Person» | – |
| B4 Hoffnung | erfüllt | «Hoffnung vermitteln: Depression ist behandelbar» | – |
| B5 Autonomie | erfüllt | «Entscheidungen über die Behandlung und über das eigene Leben bleiben bei der erkrankten Person»; «Setzen Sie nie Täuschung, Zwang oder Drohungen ein.» | – |
| B6 Belastung, Grenzen | erfüllt | «Beleidigungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen»; «Ein solches Gespräch belastet auch Sie.» | – |
| B7 Anrede | erfüllt | «Sie»; «du» nur in Beispielen | – |
| C1 verständlich | erfüllt | kurze Sätze, Listen; Kernaussage je Abschnitt | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 › Grenzen: «Das Bild zeigt eine Haltung, keine Pflicht.» Abgleich mit dem Arbeitsheft: Prüfbedarf 2 (unten) | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassung Abb. 1 306 Zeichen; Lesepfad von `index` trifft `#suizidgedanken` | – |
| D1 Empfehlungen konkret | erfüllt | drei Formulierungsbeispiele inkl. «Denkst du daran, dir das Leben zu nehmen?»; zehn konkrete Verhaltensweisen in `alltag` | – |
| D2 reale Situationen | erfüllt | «Ich habe die Nummer der Hausarztpraxis herausgesucht. Wenn du magst, rufen wir zusammen an.» | – |

**Seite 7 · Für sich sorgen (`fuer-sich-sorgen`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `was-hilft`: «Information über die Krankheit … Hilft nachweislich vor allem der erkrankten Person» (Katsuki 2022: Familien-Psychoedukation, GRADE «very low»); Achtsamkeit ohne Einschränkung | W1-06, W1-07 |
| A2 Zusammenhang und Stärke | teilweise | Einleitung von `was-hilft` vorbildlich («Versprechen lässt sich nichts»); dagegen «verbessert sie die Partnerschaft» (Paartherapie, «very low-quality evidence») und Achtsamkeit ohne Vorbehalt, während der Familiencoach «leicht» heisst | W1-07, W1-11 |
| A3 Ebenen | erfüllt | Haltung, Grenzen, Netz, Angebote, eigene Krise getrennt | – |
| A4 Therapien | erfüllt | Angebote ohne Einzelfallempfehlung («es lohnt sich, das Passende zu suchen») | – |
| A5 Schweizer Kontext | erfüllt | Familiencoach aus der Schweiz nutzbar (Entscheid der Fachstelle 10.10.2026); Verweis auf Angebote im Kanton Zürich | – |
| A6 Krisenthemen | teilweise | `eigene-krise`: Warnsignal «Sie haben selbst Gedanken, nicht mehr leben zu wollen.», danach E-Mail der Fachstelle, dann der Platzhalter. Keine Nummer; ob die Reihenfolge eine Krisenzuständigkeit der Fachstelle nahelegt, ist zu entscheiden | W1-18 |
| Q1 belegt, Quelle deckt | teilweise | Katsuki 2022 deckt «nachweislich» nicht; «werden sehr geschätzt» nur für eine Partnergruppe (Schomerus) belegt; Name und «kostenlos» des Familiencoachs nicht in Schramm 2026; Zhang 2024 nur am Abstract prüfbar | W1-06, W1-07, W1-10 |
| Q2 Angaben vollständig | teilweise | Katsuki 2018, Ipsen 2026, Schomerus 2007 ohne Titel und Link; Barbato ohne dritten Autor | W1-09 |
| Q3 Quellenart | erfüllt | RCTs, Meta-Analysen, Cochrane | – |
| Q4 Darstellung | erfüllt | 6 Einträge mit Verwendung | – |
| Q5 nichts erfunden | erfüllt | alle Arbeiten in PubMed gefunden; Zhang 2024 vollständig angegeben | – |
| B1 Perspektive | erfüllt | ganz bei den Angehörigen | – |
| B2 entlastend | erfüllt | «Für sich zu sorgen, nimmt der erkrankten Person nichts weg.»; Abb. 1 › Grenzen: «… das ist kein Versagen» | – |
| B3 personenzentriert | erfüllt | «Angehörige psychisch erkrankter Menschen» | – |
| B4 Hoffnung ohne Beschönigung | erfüllt | «Das heisst nicht, dass sie nutzlos sind. Es heisst: Versprechen lässt sich nichts» | – |
| B5 Autonomie | erfüllt | Grenze als «Entscheid über Ihren eigenen Beitrag» | – |
| B6 Belastung, Grenzen, Selbstsorge | erfüllt | Kern der Seite | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | kurze Abschnitte; Begriffsliste in `was-hilft` | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 › Grenzen: «Die Karte zeigt Möglichkeiten, keine Pflichten.» | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassung Abb. 1 193 Zeichen; Legende als Liste | – |
| D1 Empfehlungen konkret | erfüllt | «Ich koche gern weiter für uns beide. Die Gespräche mit deiner Chefin übernehme ich aber nicht mehr.»; Übung «drei Kreise» | – |
| D2 reale Situationen | erfüllt | «einen Fahrdienst, einen Einkauf pro Woche oder ein Gespräch pro Monat» | – |

**Seite 8 · Rechte und Unterstützung im Kanton Zürich (`rechte-und-angebote`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Rechtliche Aussagen | nicht erfüllt | Abb. 1 Kurztext: «erst für Auskünfte über ihre Behandlung und für die Akten braucht es ihre Zustimmung» – widerspricht der Zeile «Auskunft über Gesundheitszustand und Behandlung · ohne Einwilligung: im Kanton Zürich an Bezugspersonen möglich, solange die erkrankte Person nicht widerspricht» und dem Entscheid der Fachstelle zu § 15 PatG ZH; Formulierungsbeispiel «Ich weiss, dass Sie mir nichts über meinen Mann sagen dürfen.»; `arbeit-geld`: «nur bei einer schweren, dauerhaften Beeinträchtigung» – für Betreuungsgutschriften genügt laut Suchergebnis seit 2021 eine Hilflosenentschädigung leichten Grades; Kurzurlaub «pro Ereignis» gilt laut Pro Infirmis bei wiederkehrender Erkrankung nur einmal je Beeinträchtigung (Sekundärquelle) | W1-01, W1-21 |
| A2 Stärke | erfüllt | Vertiefung Abb. 1: «Die Übersicht vereinfacht das Recht.»; Hero: «rechtliche Prüfung ausstehend» | – |
| A3 Ebenen | erfüllt | Rechte, Vorsorge, Arbeit und Geld, Angebote getrennt | – |
| A4 Therapien | entfällt | – | – |
| A5 Schweizer Kontext | teilweise | StGB, PatG ZH, ZGB, OR, IV; keine deutschen Rechtsbegriffe (Gate-Hinweis «swiss-context» ohne Befund); nicht erwähnt: gesetzliches Vertretungsrecht bei Urteilsunfähigkeit (Art. 378 ZGB; für die Klinikbehandlung psychischer Störungen Art. 380 ZGB) | W1-22 |
| A6 Krisenthemen | erfüllt | Stand by You «HelpLine» ohne Nummer; keine FU (Entscheid der Fachstelle) | – |
| Q1 belegt, Quelle deckt | teilweise | §§ 2a und 15 Abs. 2 PatG ZH durch Leitfaden der Gesundheitsdirektion gestützt; § 19 als Akteneinsicht nicht gefunden; BSV-FAQ «auch bei psychischer Erkrankung» nicht gefunden (das Gesetz spricht allgemein von «gesundheitlicher Beeinträchtigung»); BAG: «zuhören» gestützt, «allgemein informieren» nicht gefunden | W1-10, W1-25 |
| Q2 Angaben vollständig | teilweise | Pro Mente Sana mit gekürztem Titel («Rechte von Angehörigen» statt «Rechte von Angehörigen im psychiatrischen Zwangskontext»); § 15 ohne Absatz (Abs. 2); kein Abrufdatum bei Online-Quellen; PatG-Link zeigt auf eine bestimmte Fassung («…-083.html»), ob die aktuelle, ist nicht geprüft | W1-09 |
| Q3 Quellenart | erfüllt | amtliche Primärquellen: Fedlex (StGB, ZGB, OR), zh.ch (PatG), BAG, BSV, Informationsstelle AHV/IV | – |
| Q4 Darstellung | erfüllt | 8 Einträge mit Verwendung | – |
| Q5 Unsicheres markiert | erfüllt | «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.»; Hero «rechtliche Prüfung ausstehend» | – |
| B1 Perspektive | erfüllt | «Für Sie als angehörige Person gilt die Schweigepflicht nicht.» | – |
| B2 entlastend | erfüllt | Hero: «Viele Angehörige glauben, sie dürften … nichts sagen … Das stimmt nicht.» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Menschen mit psychischen Erkrankungen» | – |
| B4 Hoffnung | entfällt | Sachseite | – |
| B5 Autonomie | erfüllt | «Mehr Rechte erhalten Sie, wenn die erkrankte Person Sie ausdrücklich einbezieht. Am besten sprechen Sie das in einer guten Phase an.» | – |
| B6 Belastung | erfüllt | Angebote für Angehörige | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | Begriffe als Begriffsliste erklärt (Bezugsperson, Entbindung, Patientenverfügung) | – |
| C2 Grafiken korrekt | nicht erfüllt | Abb. 1: Kurztext und Tabellenzeile widersprechen sich (siehe A1) | W1-01 |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassung 314 Zeichen; Anbieterlinks mit Domain als Linktext | – |
| D1 Empfehlungen konkret | erfüllt | Formulierungsbeispiel; Angebote mit Websites | – |
| D2 reale Situationen | erfüllt | Anruf beim Behandlungsteam | – |

#### W1-C · Quellen geprüft (Fachartikel über PubMed, übrige nur über Suchergebnisse)

Jede Quelle der acht Quellenlisten, dazu Aussagen ohne genannte Studie. Die vollständigen Angaben in der dritten Spalte stammen aus PubMed und können für W1-09 übernommen werden.

**Fachartikel (geprüft über PubMed: Metadaten, Abstract, PMC-Volltext wo vorhanden)**

G = gedeckt · T = teilweise gedeckt · N = nicht gedeckt · ? = nicht prüfbar. «Link» = führt die angegebene Adresse (DOI, PMID, PMC) zu dieser Arbeit.

| Seite › Abschnitt | Quelle auf der Seite | Vollständige Angabe (PubMed) | Link | Aussage auf der Seite | Ergebnis | Beleg (wörtlich aus Abstract oder Volltext) | Befund |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `depression-verstehen` › `was-ist` | Salk, Hyde und Abramson 2017 | Salk RH, Hyde JS, Abramson LY. Gender differences in depression in representative national samples: Meta-analyses of diagnoses and symptoms. Psychol Bull 2017;143(8):783–822. doi:10.1037/bul0000102, PMID 28447828 | ja | «Frauen erhalten die Diagnose etwa doppelt so oft wie Männer.» | T | «OR = 1.95» gesamt; Erwachsene «ORs between 1.71 and 2.02». Gemessen: Kriterien in Bevölkerungsbefragungen, keine gestellten Diagnosen | W1-12 |
| `depression-verstehen` › `anders` | Martin, Neighbors und Griffith 2013 | Martin LA, Neighbors HW, Griffith DM. The experience of symptoms of depression in men vs women: analysis of the National Comorbidity Survey Replication. JAMA Psychiatry 2013;70(10):1100–6. doi:10.1001/jamapsychiatry.2013.1985, PMID 23986338 | ja | «… häufiger als Gereiztheit, Wut, mehr Alkohol, riskantes Verhalten oder Flucht in die Arbeit … auch bei Frauen» | T | «Men reported higher rates of anger attacks/aggression, substance abuse, and risk taking»; «Further study is needed to clarify which symptoms truly describe men's experiences». Gereiztheit und «Flucht in die Arbeit» nicht im Abstract, kein PMC-Volltext (?) | W1-12 |
| `depression-verstehen` › `entstehung` (Vertiefung) | Sullivan, Neale und Kendler 2000 | Sullivan PF, Neale MC, Kendler KS. Genetic epidemiology of major depression: review and meta-analysis. Am J Psychiatry 2000;157(10):1552–62. doi:10.1176/appi.ajp.157.10.1552, PMID 11007705 | ja | gehäuft in Familien; erblicher Anteil rund ein Drittel; «den grösseren Teil erklären Lebenserfahrungen» | G / G / T | «heritability of liability=37%»; «individual-specific environmental effects/measurement error (point estimate=63%)» – enthält Messfehler | W1-12 |
| `depression-verstehen` › `entstehung` (Vertiefung) | Moncrieff et al. 2022; Jauhar et al. 2023 | Moncrieff J, Cooper RE, Stockmann T, Amendola S, Hengartner MP, Horowitz MA. The serotonin theory of depression: a systematic umbrella review of the evidence. Mol Psychiatry 2023;28(8):3243–56 (online 2022). doi:10.1038/s41380-022-01661-0 · Jauhar S, Arnone D, Baldwin DS, et al. A leaky umbrella has little value: evidence clearly indicates the serotonin system is implicated in depression. Mol Psychiatry 2023;28(8):3149–52. doi:10.1038/s41380-023-02095-y | – (kein Link) | «einfacher Serotoninmangel nicht belegt»; «Antidepressiva wirken trotzdem; ihre Wirkung wurde in Studien direkt gemessen» | G / N | Beide Arbeiten enthalten keine Wirksamkeitsdaten; Moncrieff relativiert die Wirksamkeit («apparent efficacy of SSRIs … amplified placebo effect»). Der zweite Satz braucht eine eigene Quelle (z. B. NVL) | W1-10 |
| `behandlung-und-verlauf` › `vorbeugen` | Kuyken et al. 2016 | Kuyken W, Warren FC, Taylor RS, Whalley B, Crane C, Bondolfi G, et al. Efficacy of Mindfulness-Based Cognitive Therapy in Prevention of Depressive Relapse: An Individual Patient Data Meta-analysis From Randomized Trials. JAMA Psychiatry 2016;73(6):565–74. doi:10.1001/jamapsychiatry.2016.0076, PMID 27119968 | ja | «Eine Psychotherapie, die gezielt Rückfällen vorbeugt, senkt das Risiko ebenfalls.» | G | «reduced risk of depressive relapse … (hazard ratio, 0.69 …)»; gilt für MBCT bei rezidivierender Depression in Remission | – |
| `behandlung-und-verlauf` › `verlauf` | keine (im Text «eine Studie, auf die sich die deutsche Leitlinie stützt») | vermutlich Spijker J, de Graaf R, Bijl RV, Beekman AT, Ormel J, Nolen WA. Duration of major depressive episodes in the general population: results from NEMESIS. Br J Psychiatry 2002;181:208–13. doi:10.1192/bjp.181.3.208 | – | «nach drei Monaten die Hälfte … nach einem Jahr drei Viertel» | G (Zahlen) | «50% … recovered within 3 months, 63% within 6 months, 76% within 12 months». Allgemeinbevölkerung, meist unbehandelt. Studie auf der Seite nicht genannt | W1-09 |
| `ihre-situation` › `was-belastet` | van Wijngaarden et al. 2004 | van Wijngaarden B, Schene AH, Koeter MW. Family caregiving in depression: impact on caregivers' daily life, distress, and help seeking. J Affect Disord 2004;81(3):211–22. doi:10.1016/S0165-0327(03)00168-X, PMID 15337325 | ja | Sorge als häufigste Belastung; Belastung in akuten Phasen | T / G | «About 25–50% of caregivers worried about the patient's general health, treatment, safety, and future» (keine Rangfolge im Abstract); «felt burdened, especially when the patient was in an acute phase» | W1-12 |
| `ihre-situation` › `nicht-allein`, `belastung` | van Wijngaarden et al. 2009 | van Wijngaarden B, Koeter M, Knapp M, Tansella M, Thornicroft G, Vázquez-Barquero JL, et al. Caring for people with depression or with schizophrenia: are the consequences different? Psychiatry Res 2009;169(1):62–9. doi:10.1016/j.psychres.2008.06.013, PMID 19625087 | ja | ähnlich hoch wie bei Schizophrenie; mehr Belastung bei engem Zusammenleben | G / T | «Caregiver consequences of depression and schizophrenia are very similar»; «caregivers live close to a patient» – «live close» ist nicht sicher «zusammenwohnen» | – |
| `ihre-situation` › `belastung` | Huang et al. 2026 | Huang X, Zhou R, Lei H, Li J, Ye Q, Yang Y, et al. Caregiver burden among caregivers of patients with depression: a systematic review and meta-analysis. Front Psychiatry 2026;17:1878799. doi:10.3389/fpsyt.2026.1878799, PMID 42621420 | ja | mehr Belastung bei schwerer und langer Depression, weniger bei sozialer Unterstützung | T | je 2 Studien pro Untergruppe, «should be interpreted with caution»; soziale Unterstützung aus 2 Querschnittstudien; 11 Studien, I² 98,9 %. Die Vertiefung der Abbildung benennt die Grenze («Befragungen zu einem einzigen Zeitpunkt») | – |
| `ihre-situation` › `belastung` | Martire et al. 2010 | Martire LM, Schulz R, Reynolds CF, Karp JF, Gildengers AG, Whyte EM. Treatment of late-life depression alleviates caregiver burden. J Am Geriatr Soc 2010;58(1):23–9. doi:10.1111/j.1532-5415.2009.02610.x, PMID 19943833 | – (kein Link) | «wenn die Behandlung wirkt, wird es meist auch für Angehörige leichter» | T | «decreased depression-specific burden (beta=-0.22, P=.001) and a trend toward lower general burden (beta=-0.08, P=.08)»; nur Patientinnen und Patienten ab 60; «meist» nicht belegt | W1-12 |
| `ihre-situation` › `gesundheit` | Idstad et al. 2010 | Idstad M, Ask H, Tambs K. Mental disorder and caregiver burden in spouses: the Nord-Trøndelag health study. BMC Public Health 2010;10:516. doi:10.1186/1471-2458-10-516, PMID 20796279 | ja | «häufiger … Schlafproblemen, Erschöpfung, Grübeln und körperlichen Beschwerden, und ihre Lebensqualität ist tiefer»; «nicht sicher bekannt», wie viele erkranken | N / T / G | gemessen nur Summenwert Angst/Depression (SCL-10) und subjektives Wohlbefinden: «spouses … scored significantly lower on subjective well-being and significantly higher on symptoms of anxiety and depression»; Grübeln nicht erhoben; nur Partner, «mental disorder» allgemein; «do not indicate that a large proportion … reach … clinical mental disorder» | W1-03 |
| `ihre-situation` › `wechselwirkung` | Whisman und Uebelacker 2009 | Whisman MA, Uebelacker LA. Prospective associations between marital discord and depressive symptoms in middle-aged and older adults. Psychol Aging 2009;24(1):184–9. doi:10.1037/a0014759, PMID 19290750 | ja | «gut untersucht»; «gut belegt, dass sich … gegenseitig beeinflussen» | T | «These results suggest a bidirectional longitudinal association»; eine Studie, Symptome statt Diagnosen, Assoziation | W1-12 |
| `ihre-situation` › `wechselwirkung` (Vertiefung) | Hooley und Gotlib 2000 | Hooley JM, Gotlib IH. A diathesis-stress conceptualization of expressed emotion and clinical outcome. Applied and Preventive Psychology 2000;9(3):135–51 (nicht in PubMed) | – | «Kritik entsteht oft als Antwort auf eine belastende Situation»; «Frühe kleine Studien fanden einen Zusammenhang, spätere nicht» | ? / N | Volltext nicht zugänglich. Gegen «spätere nicht»: Butzlaff RL, Hooley JM. Expressed emotion and psychiatric relapse: a meta-analysis. Arch Gen Psychiatry 1998;55(6):547–52, doi:10.1001/archpsyc.55.6.547: «the mean effect sizes for EE for both mood disorders and eating disorders were significantly higher than the mean effect size for schizophrenia» | W1-04 |
| `ihre-situation` › `wechselwirkung`; `fuer-sich-sorgen` › `was-hilft` | Barbato und D'Avanzo 2018 | Barbato A, D'Avanzo B, Parabiaghi A. Couple therapy for depression. Cochrane Database Syst Rev 2018;6:CD004188. doi:10.1002/14651858.CD004188.pub3, PMID 29882960 | ja | gegen die Depression ähnlich wie Einzeltherapie, schwache Studien; «verbessert sie die Partnerschaft» | G / T | «no evidence of difference … (SMD -0.17 … low-quality evidence)»; Beziehung: «SMD -0.50 … very low-quality evidence». Dritter Autor fehlt auf beiden Seiten | W1-09, W1-11 |
| `je-nach-rolle` › `partner` | Atlantis und Sullivan 2012 | Atlantis E, Sullivan T. Bidirectional association between depression and sexual dysfunction: a systematic review and meta-analysis. J Sex Med 2012;9(6):1497–507. doi:10.1111/j.1743-6109.2012.02709.x, PMID 22462756 | ja | Sexualität leidet oft durch die Depression | G | «Clinicians should be aware of a bidirectional association between depression and sexual dysfunction» | – |
| `je-nach-rolle` › `partner` | Serretti und Chiesa 2009 | Serretti A, Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. J Clin Psychopharmacol 2009;29(3):259–66. doi:10.1097/JCP.0b013e3181a5233f, PMID 19440080 | ja | «es gibt Medikamente, die seltener solche Nebenwirkungen haben» | G | «No significant difference with placebo was found for … agomelatine, amineptine, bupropion, moclobemide, mirtazapine, and nefazodone» | – |
| `je-nach-rolle` › `partner` | Bodenmann und Randall 2013 | Bodenmann G, Randall AK. Close relationships in psychiatric disorders. Curr Opin Psychiatry 2013;26(5):464–7. doi:10.1097/YCO.0b013e3283642de7, PMID 23867661 | ja | «Wir-Krankheit» | G | «examining psychiatric disorders from a we-disease perspective» | – |
| `je-nach-rolle` › `kinder` | Rasic et al. 2014 | Rasic D, Hajek T, Alda M, Uher R. Risk of mental illness in offspring of parents with schizophrenia, bipolar disorder, and major depressive disorder: a meta-analysis of family high-risk studies. Schizophr Bull 2014;40(1):28–38. doi:10.1093/schbul/sbt114, PMID 23960245 | ja | «etwa zwei- bis dreimal so häufig selbst an einer Depression» | T (?) | Abstract nur gepoolt über drei elterliche Diagnosen: «increased rate of the disorder present in the parent (RR = 3.59 …)»; eigener Wert für Depression nur im Volltext, PMC lieferte keinen Text | W1-10 |
| `je-nach-rolle` › `kinder` | Collishaw et al. 2016 | Collishaw S, Hammerton G, Mahedy L, Sellers R, Owen MJ, Craddock N, et al. Mental health resilience in the adolescent offspring of parents with depression: a prospective longitudinal study. Lancet Psychiatry 2016;3(1):49–57. doi:10.1016/S2215-0366(15)00358-2, PMID 26654748 | ja | fünf Schutzfaktoren; «48 von 100 … 4 von 100 durchgehend gesund» | T / G | «Index parent positive expressed emotion …, co-parent support …, good-quality social relationships …, self-efficacy …, and frequent exercise»; «five protective factors, 48%», «zero or one … 4%». «verlässliche Bezugsperson» nicht gemessen; Wärme-Skala nicht signifikant («warme Momente» ist Deutung von «positive expressed emotion»); «durchgehend gesund» = unauffällig bei drei Erhebungen | W1-13 |
| `je-nach-rolle` › `kinder` | Dam und Hall 2016 | Dam K, Hall EOC. Navigating in an unpredictable daily life: a metasynthesis on children's experiences living with a parent with severe mental illness. Scand J Caring Sci 2016;30(3):442–57. doi:10.1111/scs.12285, PMID 26763757 | ja | Verwendung «Scham und Verheimlichen» – auf der Seite steht dazu keine Aussage | – | «Children feel shame … and they conceal their family life» | W1-10 |
| `je-nach-rolle` › `eltern` | Kika et al. 2026 | Kika N, Lambert J, Higson-Sweeney N, Wallace V, Bhatt H, Perry G, et al. Parents' experiences of their adolescent child's depression: a qualitative systematic review and meta-synthesis. BMC Psychol 2026;14(1):188. doi:10.1186/s40359-025-03923-2, PMID 41514471 | ja | Schuld oder Scham, Ausschluss, grösste Sorge Selbstverletzung/Suizid, helfen und loslassen | T / T / G / T | «The most commonly expressed causes for worry among parents were self-harm and suicidal ideation»; Schuld: «Some parents …»; Ausschluss: «feeling left out of the process»; Eltern von Jugendlichen (auf der Seite benannt) | W1-12 |
| `je-nach-rolle` › `eltern` | Greally, Oute und McPherson 2025 | Greally S, Oute J, McPherson S. Experiences of parents of children with mental illnesses: a systematic review and meta-ethnographic synthesis. Fam Process 2025;64(1):e13087. doi:10.1111/famp.13087, PMID 39581628 | ja | «Übersicht zu Eltern erwachsener Kinder» | T | «in 13 studies the children were adults»; Schwerpunkt Psychosen. Die Quellenzeile beschreibt die Arbeit ungenau | W1-09 |
| `je-nach-rolle` › `eltern` | Johansson et al. 2014 | Johansson A, Andershed B, Anderzen-Carlsson A. Conceptions of mental health care – from the perspective of parents' of adult children suffering from mental illness. Scand J Caring Sci 2014;28(3):496–504. doi:10.1111/scs.12074, PMID 23980612 | ja | Ausschluss aus der Versorgung | G | «disapproval of parental exclusion … do not provide them with adequate information» | – |
| `je-nach-rolle` › `geschwister` | Jayasinghe et al. 2023 (zwei Meta-Analysen) | Jayasinghe A, Wrobel A, Filia K, et al. Distress, burden, and wellbeing in siblings of people with mental illness: a mixed studies systematic review and meta-analysis. Psychol Med 2023;53(15):6945–64. doi:10.1017/S0033291723001733 · Jayasinghe A, Wrobel A, Filia K, et al. Psychological distress in siblings of people with mental illness: a systematic review and meta-analysis. Aust N Z J Psychiatry 2023;57(5):642–60. doi:10.1177/00048674221123481 | – (kein Link) | mehr depressive Beschwerden und Ängste; ausgeschlossen oder zweitrangig; gewachsen | G / T / G | «significantly greater depressive symptoms (Hedges's g = 0.53 …) and anxiety symptoms (Hedges's g = 0.40 …)»; ausgeschlossen: 2 Studien; «siblings recognise there are positive aspects». Psychische Erkrankungen allgemein, nicht Depression; GRADE «very low» | W1-15 |
| `je-nach-rolle` › `geschwister` | Rhee et al. 2025 | Rhee SJ, Abrahamsson L, Sundquist J, Sundquist K, Kendler KS. The risks for major psychiatric disorders in the siblings of probands with major depressive disorder. Mol Psychiatry 2025;30(1):69–75. doi:10.1038/s41380-024-02650-1, PMID 38972942 | ja | «etwas erhöhtes Risiko»; «liegt an gemeinsamen familiären und erblichen Faktoren, nicht an der Unterstützung, die sie leisten» | T / G / N | «MD (1.74, 1.72–1.76)»; «The familial liability to MD, mostly due to genetic factors»; Unterstützung oder Pflege wurde nicht untersucht | W1-05 |
| `begleiten` › Quellen | Bond et al. 2019 | Bond KS, Cottrill FA, Blee FL, Kelly CM, Kitchener BA, Jorm AF. Offering mental health first aid to a person with depression: a Delphi study to re-develop the guidelines published in 2008. BMC Psychol 2019;7(1):37. doi:10.1186/s40359-019-0310-3, PMID 31227016 | ja | Konsens von Fachleuten und Menschen mit eigener Erfahrung | G | «rated by 53 experts (36 with lived experience and 17 professionals)» | – |
| `begleiten` › `suizidgedanken` | Dazzi et al. 2014 | Dazzi T, Gribble R, Wessely S, Fear NT. Does asking about suicide and related behaviours induce suicidal ideation? What is the evidence? Psychol Med 2014;44(16):3361–3. doi:10.1017/S0033291714001299, PMID 24998511 | ja (Titel) | «erhöht das Risiko nicht; für viele ist das Gespräch eine Entlastung» | G / T | «None found a statistically significant increase in suicidal ideation»; «may … reduce, rather than increase suicidal ideation … in treatment-seeking populations» | W1-12 |
| `fuer-sich-sorgen` › `was-hilft` | Katsuki et al. 2022 | Katsuki F, Watanabe N, Yamada A, Hasegawa T. Effectiveness of family psychoeducation for major depressive disorder: systematic review and meta-analysis. BJPsych Open 2022;8(5):e148. doi:10.1192/bjo.2022.543, PMID 35915980 | ja | «Information über die Krankheit: Hilft nachweislich vor allem der erkrankten Person»; Daten zur Belastung fehlen | N / G | «small but statistically significant effect … all outcomes are graded very low on certainty»; Familien-Psychoedukation, reine Information ausgeschlossen; «Only one study reported family functioning and family members' distress» | W1-06 |
| `fuer-sich-sorgen` › `was-hilft` | Katsuki et al. 2018; Ipsen et al. 2026; Schomerus et al. 2007 | Katsuki F, Takeuchi H, Inagaki T, et al. Brief multifamily psychoeducation for family members of patients with chronic major depression: a randomized controlled trial. BMC Psychiatry 2018;18:207. doi:10.1186/s12888-018-1788-6 · Ipsen IS, Csillag C, Austin SF, Vinberg M. Who benefits from family psychoeducation for relatives of adults with major depressive disorder? J Clin Med 2026;15(11):4118. doi:10.3390/jcm15114118 · Schomerus G, Heider D, Wittmund B, et al. Psychiatr Prax 2007;34(5):239–45, doi:10.1055/s-2006-940081; PubMed führt nur die englische Übersetzung des Titels «[A group intervention for spouses of patients with depression – is it effective?]», der deutsche Originaltitel ist hier nicht geprüft | – (kein Link) | «werden sehr geschätzt»; «kurze Gruppen veränderten die Belastung meist kaum»; Quellenzeile: «zwei randomisierte Studien zu kurzen Gruppen» | T / G | Katsuki 2018: «no statistically significant effect … at 16-weeks»; Ipsen: «No significant intervention effects … on well-being», Kontrollgruppe aktiv; Schomerus: «did not cause any improvement … satisfaction … very high», 12 Sitzungen, nicht randomisiert. «sehr geschätzt» nur für Gruppen belegt | W1-10 |
| `fuer-sich-sorgen` › `was-hilft` | Schramm et al. 2026 | Schramm E, Zehender N, Breuninger C, Hegerl U, Elsner A, Maun A, et al. Efficacy of an online self-help programme with automated or individualised psychological support versus treatment as usual for caregivers of people with depression: a randomised, controlled, open-label, superiority trial. Lancet Reg Health Eur 2026;62:101560. doi:10.1016/j.lanepe.2025.101560, PMID 41488791 | ja | grosse Studie, Deutschland, «leicht», drei Monate; «kostenlose Programm» «Familiencoach Depression» | G / ? | n = 1640; d = −0,27 bzw. −0,17; «The results were sustainable three months after randomisation»; «rather small». Programmname und «kostenlos» stehen nicht im Paper | W1-10 |
| `fuer-sich-sorgen` › `was-hilft` | Zhang et al. 2024 | Zhang X, Ren H, Wang C, Zhang Y, Zhou Q, Fan J. The effect of mindfulness-based interventions on mental health outcomes and wellbeing of informal caregivers of people with mental illness: A systematic review and meta-analysis. Int J Ment Health Nurs 2024;33(4):797–816. doi:10.1111/inm.13295, PMID 38291626 | ja | «verringerten bei Angehörigen psychisch erkrankter Menschen Stress und Niedergeschlagenheit» | G (Abstract) | «13 studies with 1007 participants … stress (SMD = -0.80, 95% CI [-1.33, -0.28]) … depression (SMD = -0.43 …) … caregiver burden (SMD = -0.21 …) … but not on anxiety»; «future research should aim to employ more rigorous methodologies». Kein PMC-Volltext: Studienqualität, I², GRADE nicht prüfbar | W1-07 |

**Leitlinien, Recht, Statistik, Befragungen, Organisationen (Originale in der Prüfumgebung gesperrt; geprüft über Suchergebnisse)**

Die Websites der Originale (leitlinien.de, psychiatrie.ch, obsan.admin.ch, fedlex.admin.ch, zh.ch, bag.admin.ch, ahv-iv.ch, bsv.admin.ch, deutsche-depressionshilfe.de, swisslife.ch, mhfa.com.au, paediatrieschweiz.ch, Anbieter) waren aus der Prüfumgebung nicht erreichbar (Netzwerkrichtlinie, Proxy 403). Geprüft wurde über eine Websuche, die Zusammenfassungen und teils wörtliche Zitate liefert. **Keine dieser Zeilen gilt als «am Original geprüft».** «gestützt» = Suchergebnis zitiert oder paraphrasiert das Original bzw. eine amtliche Stelle; «Sekundärquelle» = nur über Dritte; «nicht gefunden» = kein Treffer.

| Seite › Abschnitt | Quelle auf der Seite | Aussage | Suchergebnis | Ergebnis | Befund |
| --- | --- | --- | --- | --- | --- |
| `depression-verstehen`, `index` | Obsan Bulletin 11/2024 (Autorinnen und Autoren laut Begleitdokument: D. Schuler, A. Tuch, I. Sturny, C. Peter) | «rund jede zehnte Person … mittelschwere bis schwere depressive Beschwerden» (SGB 2022) | SGB 2022: 9,8 % (2017: 8,6 %) laut kantonaler Auswertung Tessin (Sekundärquelle); Bulletin-Zusammenfassung ohne Prozentzahl. Nicht verwechseln mit 12 % aus der Obsan-Erhebung Herbst 2022 | gestützt (Sekundärquelle) | W1-25 |
| `depression-verstehen` › `anders` | Obsan Bulletin 11/2024 | «Männer lassen sich seltener behandeln»; «fast dreimal so oft durch Suizid» | Suizid 2022: 695 Männer, 263 Frauen; Rate «fast dreimal so hoch» (SRF; Zahlen vermutlich aus Obsan-Bulletin 08/2024). Behandlung nach Geschlecht nicht gefunden | teilweise gestützt | W1-09, W1-25 |
| `depression-verstehen`, `behandlung-und-verlauf`, `begleiten` | NVL Unipolare Depression, Version 3.2 | Fassung | «Version 3.2, Juli 2023» (nvl-programm.de); Kapitel: 1 Grundlagen (1.4 «Verlaufsformen und prognostische Faktoren»), 2 Diagnostik und Monitoring, 3 Therapieplanung (3.6 «Einbindung von Angehörigen»), 6 Erhaltungstherapie und Rezidivprophylaxe, 12 Suizidalität | gestützt (Seitentitel) | W1-09 |
| `behandlung-und-verlauf` › `verlauf` | NVL «Kapitel 3 bis 6» | «40 bis 60 von 100 … erneut», «mit jeder weiteren Episode steigt das Risiko»; «15 bis 30 von 100 … länger als zwei Jahre» | Suchergebnis der Prüfsitzung (Teil C) zitiert NVL Kap. 1: «Das Risiko für eine Chronifizierung … liegt in Studien bei etwa 15–30%», 40–60 % als Paraphrase; eine zweite Suche fand die Zahlen nicht. Stehen in Kap. 1, nicht 3 bis 6 | gestützt, nicht am Original | W1-09, W1-25 |
| `depression-verstehen` › `formen` | NVL Kap. 1, ICD-11 | «Etwa jede vierte Depression bleibt einmalig.»; «Bei den meisten kehrt die Depression … wieder» | nicht gefunden; widerspricht rechnerisch «40 bis 60 von 100» | nicht gestützt | W1-02 |
| `behandlung-und-verlauf` › `behandelbar` | NVL, SGPP | Behandlung nach Schweregrad | NVL-Flyer Version 3 wörtlich: «Bei einer ersten leichten depressiven Episode sollen zuerst niedrigschwellige Interventionen angeboten werden»; mittelschwer «Psychotherapie oder eine medikamentöse Behandlung»; schwer «beide Ansätze kombiniert» | gestützt | – |
| `behandlung-und-verlauf` › Abb. 1 | NVL, SGPP | Antidepressiva «drei bis vier Wochen, nachdem die passende Dosis erreicht ist»; Psychotherapie «nach acht bis zwölf Wochen» | 3–4 Wochen nach Erreichen der Standarddosis (Paraphrase NVL); 8–12 Wochen nicht gefunden | teilweise | W1-10, W1-25 |
| `behandlung-und-verlauf` › `vorbeugen` | NVL Kap. 6 | «nach der Besserung noch sechs bis zwölf Monate» | NVL Kap. 6: «6–12 Monate über die Remission einer depressiven Episode hinaus» | abweichend | W1-20 |
| `behandlung-und-verlauf` › `einbezug` | NVL Empfehlung 3-8 | einbeziehen, wenn einverstanden | wörtlich: «Wenn die Patient*innen damit einverstanden sind, sollen Angehörige in die Aufklärung, Information und Behandlung eingebunden werden.» | gestützt (Wortlaut) | – |
| `depression-verstehen`, `behandlung-und-verlauf`, `begleiten` | Schweizer Behandlungsempfehlungen 2025, Teil 1 | Diagnose, körperliche Abklärung, Wirkeintritt, Verfahren, Warnsignale, Mittel sichern | Dokument existiert: «Die Behandlung der unipolaren depressiven Störungen: Update 2025, Teil 1» (SGAD mit SGPP, SGBP, SCAP); EKT und Esketamin gestützt; übrige Inhalte nicht gefunden | teilweise | W1-09, W1-25 |
| `depression-verstehen` › `formen` | ICD-11 6A70–6A7Z | Formen; Burnout keine Krankheit | Kategorien 6A70, 6A71, 6A72, 6A73; saisonales Muster als Zusatzcode 6A80.4 nur bei rezidivierender Störung; keine Kategorie «chronische Depression» (6A72, Zusatzcode 6A80.2); Burnout QD85 «occupational phenomenon» (WHO) – alles über Spiegelseiten und Paraphrase | gestützt (Sekundärquelle) | – |
| `ihre-situation`, `index` | Deutschland-Barometer 2024 | «drei von vier … belastend oder sehr belastend für das Familienleben»; «vier von zehn» | Pressemitteilung wörtlich: «Rund drei Viertel der Angehörigen beschreibt die Depression jedoch auch als große Belastung für das Familienleben»; «nicht gut von den Behandlern informiert worden (41 Prozent) und nicht in die Behandlung eingebunden zu sein (39 Prozent)». «oder sehr belastend» und eine Rangfolge der Belastungen nicht gefunden | gestützt | W1-19 |
| `je-nach-rolle` › `partner` | Deutschland-Barometer 2018 | fast drei Viertel Schuld/Verantwortung; sechs von zehn Streit; mehr als die Hälfte vertiefte Beziehung | Grafikband (Paraphrase): 73 %, 61 %, 56 % bei 200 Partnerinnen und Partnern; Pressemitteilung bestätigt 73 % | gestützt | – |
| `ihre-situation`, `je-nach-rolle` › `freunde` | Studie «Stand by You» (Sotomo 2024) | 73 von 100 (engste Familie), 40 von 100 (Freundeskreis), mehr als jede dritte Angst vor Suizid | Studie existiert (2042 Befragte, März 2024); SRF: Rolle «für drei Viertel der Betreuenden psychisch belastend». Die drei Werte nicht gefunden; die Studie enthält andere 73-%-Werte («zu wenig Verständnis», «kennt mehrere Personen») | nicht prüfbar | W1-25 |
| `rechte-und-angebote` › `schweigepflicht` | Art. 321 StGB | Ärztinnen, Psychologen, Pflegefachpersonen unter Schweigepflicht | kantonale Leitfäden (BE, BS) nennen Psychologen und Pflegefachpersonen | gestützt (Sekundärquelle) | – |
| `rechte-und-angebote` › `schweigepflicht`, `vorsorge` | PatG ZH §§ 2a, 15, 19 | Bezugspersonen ohne Bezeichnung; Auskunft, solange kein Widerspruch; Akteneinsicht | Leitfaden der Gesundheitsdirektion: ohne Bezeichnung «in erster Linie die Lebenspartnerin bzw. der Lebenspartner und in zweiter Linie nahe Angehörige …»; Information der Bezugspersonen nach § 15 Abs. 2, sofern kein Widerspruch; § 19 als Akteneinsicht nicht gefunden | gestützt (amtliche Sekundärquelle); § 19 offen | W1-09, W1-25 |
| `rechte-und-angebote` › `schweigepflicht` | BAG, Empfehlungen für Fachpersonen (2021) | Fachpersonen dürfen ohne Entbindung zuhören und allgemein informieren | «zuhören und mit ihnen sprechen» (Paraphrase); allgemeine Informationen nicht gefunden; Jahr 2021 über Dateinamen wahrscheinlich | teilweise | W1-25 |
| `rechte-und-angebote` › `vorsorge` | Art. 370 ff. ZGB | Patientenverfügung, Vertretungsperson | Art. 370 Abs. 1 und 2 im Wortlaut über Gesetzesspiegel | gestützt | W1-22 |
| `rechte-und-angebote` › `arbeit-geld` | Art. 329h und 329i OR, BSV-FAQ | 3 Tage pro Ereignis, 10 pro Jahr; 14 Wochen nur für Eltern Minderjähriger; «auch bei einer psychischen Erkrankung» | BSV-FAQ wörtlich: «höchstens drei Tage pro gesundheitsbezogenes Ereignis und nicht mehr als zehn Tage pro Jahr»; 329i für Eltern eines schwer beeinträchtigten minderjährigen Kindes; «psychisch» in der FAQ nicht gefunden; Pro Infirmis: Kurzurlaub nur einmal je Beeinträchtigung, auch bei wiederholten Krisen (Sekundärquelle) | teilweise | W1-21, W1-25 |
| `rechte-und-angebote` › `arbeit-geld` | Merkblätter 4.13 und 1.03 | «nur bei einer schweren, dauerhaften Beeinträchtigung»; rein psychisch braucht es eine IV-Rente | Merkblatt 4.13 wörtlich: «Ist nur die psychische Gesundheit beeinträchtigt, muss … ein Anspruch auf eine Rente gegeben sein»; Betreuungsgutschriften seit 2021 bereits bei Hilflosenentschädigung leichten Grades (Sekundärquelle) | teilweise abweichend | W1-21 |
| `rechte-und-angebote` › Quellen | Pro Mente Sana | Titel «Rechte von Angehörigen» | Seitentitel: «Rechte von Angehörigen im psychiatrischen Zwangskontext» | Titel gekürzt | W1-09 |
| `begleiten`, `fuer-sich-sorgen` | MHFA Australia, Depression Guidelines | Hinweise zum Umgang; Übergriffe nicht hinnehmen; Ortswechsel | allgemeine Fassung «Depression: Mental Health First Aid Guidelines», revised 2018 (Datei 2023 hochgeladen); Inhalte nicht gefunden | nicht prüfbar | W1-09, W1-25 |
| `begleiten`, `rechte-und-angebote` | wie-gehts-dir.ch | Kampagne der Deutschschweizer Kantone und von Pro Mente Sana | «Absender: Kantone und Pro Mente Sana im Auftrag von GFCH» (Präsentation 2019) | gestützt (Stand 2019) | – |
| `je-nach-rolle` › `kinder` | Albermann und Müller 2021 | Fragen, die Kinder oft haben | Artikel heisst «Kinder und Jugendliche aus Familien mit einem psychisch erkrankten Elternteil», Paediatrica 32(4) 2021; Inhalt nicht gefunden | Titel abweichend | W1-09, W1-25 |
| `behandlung-und-verlauf` › Abb. 2 | Recherchebericht der Fachstelle | ärztliche Anordnung psychologischer Psychotherapie, Grundversicherung | BAG-Mitteilung wörtlich: «seit dem 1. Juli 2022 … auf ärztliche Anordnung hin … zulasten der … OKP»; anordnen dürfen nach Art. 11b KLV Ärztinnen und Ärzte bestimmter Fachrichtungen (Paraphrase) | gestützt; Quelle intern | W1-09, W1-23 |
| `rechte-und-angebote` › `angebote`, `je-nach-rolle` | VASK Zürich, Stand by You, Equilibrium | Treffpunkte Zürich und Winterthur, Kurse, Gruppe für erwachsene Kinder; früher VASK Schweiz, HelpLine von geschulten Angehörigen, kostenlos, anonym; Gruppen auch für Angehörige | Treffpunkte und Kurse gestützt; Gruppe für erwachsene Kinder nur in VASK-Nachrichten 2010/2011 gefunden; Umbenennung in Stand by You (Januar 2024) und Schulung der HelpLine-Mitarbeitenden gestützt; «kostenlos», «anonym», Angehörigengruppen bei Equilibrium nicht gefunden | teilweise | Prüfbedarf 4, W1-25 |

#### W1-D · Seiteninventar für W2

Je Seite: Funktion (`primaryTask`), Kernaussagen, Begriffe, Handlungsempfehlungen, Zahlen, Quellen, Verweise, Grafiken. Wörter: sichtbarer Text aus `content/<id>.html` ohne Quellenliste und ohne SVG, nachgezählt von der Prüfsitzung.

**1 · Übersicht (`index`, 529 Wörter, 4 Abschnitte, keine Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Einen passenden Einstieg finden, von vorne oder nach Rolle und Frage» |
| Kernaussagen | Depression ist häufig, eine Krankheit und gut behandelbar · betrifft auch Angehörige · die Website ersetzt keine Abklärung · Fachstelle berät kostenlos, auch ohne PUK-Behandlung · fünf Kernsätze in `kurz`: keine Charakterschwäche; niemand schuld; drei von vier belastet; begleiten, nicht heilen; Beobachtungen mitteilen ohne Einverständnis |
| Begriffe | Angehörige und nahe Bezugspersonen · Behandlungsteam · Einverständnis · Lesepfade |
| Handlungsempfehlungen | Fachstelle per E-Mail kontaktieren · Einstieg nach Rolle (6) oder Frage (6) |
| Zahlen | «rund jede zehnte Person» (SGB 2022) · «Drei von vier Angehörigen» |
| Quellen | keine eigene Quellenliste; beide Zahlen sind auf `depression-verstehen` bzw. `ihre-situation` belegt |
| Verweise | 19 interne Ziele auf alle 7 Themenseiten (davon 13 mit Sprungmarke) · `mailto:` Fachstelle |
| Grafiken | keine (Planbegründungen für alle 4 Abschnitte) |

**2 · Depression verstehen (`depression-verstehen`, 1289 Wörter, 6 Abschnitte, 2 Figuren)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Erkennen, was eine Depression ist, wie sie sich im Alltag zeigen kann und warum niemand sie verschuldet hat» |
| Kernaussagen | mehr als Traurigkeit; Kriterien (2 Wochen, Kernsymptom) · Schweregrade · Diagnose durch Fachperson mit körperlicher Abklärung · häufig, Frauen öfter · Rückzug und Gereiztheit oft Krankheitszeichen, nicht Ablehnung · andere Erscheinungsformen (Männer, Ältere, körperlich, rund um die Geburt) · Verletzlichkeit und Belastung, niemand schuld · Formen nach Verlauf · Abgrenzung Trauer, Burnout, bipolare Störung |
| Begriffe | depressive Episode · gedrückte Stimmung · leicht/mittelgradig/schwer · Verletzlichkeit, Belastung, Schwelle · Vulnerabilitäts-Stress-Modell (nur Legende) · Veranlagung, erblicher Anteil · «Serotoninmangel» · einmalige Episode, wiederkehrende Depression, Dysthymie, chronische Depression, psychotische Merkmale · Baby Blues · Burnout · bipolare Störung |
| Handlungsempfehlungen | offen nachfragen statt deuten («Was würde es dir heute leichter machen?») · bei Veränderungen über Wochen Abklärung, Hausarztpraxis als erster Schritt · Phasen gehobener Stimmung der Fachperson sagen |
| Zahlen | 2 Wochen · «rund jede zehnte Person» · «etwa doppelt so oft» (Frauen) · «fast dreimal so oft» (Suizid Männer) · «rund ein Drittel» erblich · «etwa jede vierte» einmalig · 2 Jahre (Dysthymie, chronisch) |
| Quellen | 8 (NVL Kap. 1, SGPP 2025, ICD-11, Obsan 11/2024, Salk 2017, Martin 2013, Sullivan 2000, Moncrieff 2022/Jauhar 2023) |
| Verweise | `begleiten.html#ansprechen` |
| Grafiken | Abb. 1 `v-dv-schichten` (K) · Abb. 2 `v-dv-entstehung` (G, Schritt-Aufbau) |

**3 · Behandlung und Verlauf (`behandlung-und-verlauf`, 1460 Wörter, 7 Abschnitte, 3 Figuren)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Wissen, wie Depression behandelt wird und verläuft und wie man die Behandlung unterstützen kann, ohne Verantwortung dafür zu übernehmen» |
| Kernaussagen | Behandlung nach Schweregrad, Entscheid bei der Person mit der Fachperson · Psychotherapie und Antidepressiva im Vergleich, Kombination bei schwerer Depression · weitere Verfahren · Weg in die Behandlung in 5 Schritten, meist ambulant · Verlauf in Episoden, Erholung häufig, Wiederkehr häufig · Rückfall kein Versagen · Erhaltungstherapie · frühe Zeichen, Krisenplan gehört der Person · Einbezug mit Einverständnis, darum bitten |
| Begriffe | Schweregrad · Psychotherapie (KVT, IPT) · Antidepressiva, Nebenwirkungen, Absetzen · Lichttherapie, EKT, rTMS, Esketamin, Johanniskraut · ambulant, Tagesklinik, Klinik · ärztliche Anordnung, Grundversicherung, Franchise, Selbstbehalt · Episode, Rückfall · frühe Zeichen · Krisenplan · Behandlungsteam |
| Handlungsempfehlungen | bei Terminsuche helfen, mitkommen (wenn gewünscht) · Beobachtungen der Fachperson mitteilen · frühe Zeichen in ruhiger Zeit aufschreiben und wie vereinbart ansprechen · Krisenplan vereinbaren · um Einbezug bitten (Formulierungsbeispiel) |
| Zahlen | 8–12 Wochen · 3–4 Wochen · Hälfte nach 3 Monaten, drei Viertel nach 1 Jahr · 40–60 von 100 · 15–30 von 100, > 2 Jahre · 6–12 Monate · 5 Schritte |
| Quellen | 4 (NVL Kap. 3–6, SGPP 2025, Kuyken 2016, Recherchebericht der Fachstelle) |
| Verweise | `rechte-und-angebote.html#schweigepflicht` |
| Grafiken | Abb. 1 `v-bv-vergleich` (E) · Abb. 2 `v-bv-weg` (C, Ansatzpunkt Schritt 1) · Abb. 3 `v-bv-fruehzeichen` (J, Ansatzpunkt mittlerer Bereich) |

**4 · Ihre Situation (`ihre-situation`, 1062 Wörter, 7 Abschnitte, 2 Figuren)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Die eigene Belastung als häufig und berechtigt einordnen und erkennen, was sie verstärkt und was entlastet» |
| Kernaussagen | Belastung häufig und ähnlich hoch wie bei Schizophrenie, kein Zeichen von Schwäche · häufigste Belastungen · Belastung hängt von der Lebenslage ab (Gefäss) · Ansatzpunkt beim Abfluss · eigene Gesundheit · Beziehung und Depression verstärken sich gegenseitig, niemand schuld (Kreis) · Ansatzpunkt Station 3 · Angst vor Suizid, Trauer |
| Begriffe | Belastung · Lebenslage · Zufluss/Abfluss (Bild) · Lebensqualität · Wechselwirkung · Station, Ansatzpunkt · Kritik in der Familie · Paartherapie · Wachsamkeit |
| Handlungsempfehlungen | Rechte kennen · Information holen, sich beraten lassen, Aufgaben teilen, Auszeiten · auf Warnsignale bei sich achten · eigene Ungeduld als Überlastung sehen, ruhiges Gespräch statt Vorwurf · bei starkem Leiden Paartherapie |
| Zahlen | drei von vier (DE) · 73 von 100 (CH) · etwa vier von zehn · mehr als jede dritte |
| Quellen | 10 (Barometer 2024, Stand by You 2024, van Wijngaarden 2004 und 2009, Huang 2026, Martire 2010, Idstad 2010, Whisman und Uebelacker 2009, Hooley und Gotlib 2000, Barbato 2018) |
| Verweise | `rechte-und-angebote.html#schweigepflicht` · `fuer-sich-sorgen.html` (2×) · `fuer-sich-sorgen.html#eigene-krise` · `begleiten.html#suizidgedanken` |
| Grafiken | Abb. 1 `v-is-gefaess` (G) · Abb. 2 `v-is-kreislauf` (B) |

**5 · Je nach Rolle (`je-nach-rolle`, 1154 Wörter, 8 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Finden, was in der eigenen Rolle besonders zählt …» |
| Kernaussagen | Partner: Hauptlast, Schuldgefühle, Streit, Sexualität, «Wir-Krankheit», Beziehung kann sich vertiefen · Kinder: ehrlich und altersgerecht erklären, «Du bist nicht schuld», erhöhtes Risiko, fünf Schutzfaktoren, keine Erwachsenenaufgaben · Eltern erwachsener Kinder: Schuld, Ausschluss, Sorge um Suizid, unterstützen und loslassen · Geschwister: übersehen, mehr Beschwerden, etwas erhöhtes Risiko · erwachsene Kinder: frühe Verantwortung, Grenzen · Freunde: belastet, Kontakt halten |
| Begriffe | «Wir-Krankheit» · Paartherapie · Schutzfaktoren · Selbstbestimmung · Drehpunkt (Bild) |
| Handlungsempfehlungen | Formulierungsbeispiele für Partner, Kinder, Freunde · Schutzfaktoren stärken · Kinderseele · Absprachen in guter Phase, sich beraten lassen · Beobachtungen ohne Einverständnis mitteilen · Geschwister: eigene Ansprechpersonen · VASK-Gruppe · Kontakt halten, einladen ohne Drängen |
| Zahlen | fast drei Viertel · sechs von zehn · mehr als die Hälfte · zwei- bis dreimal · 48 von 100 und 4 von 100 · fünf Schutzfaktoren · 40 von 100 |
| Quellen | 15 |
| Verweise | `ihre-situation.html`, `ihre-situation.html#wechselwirkung` · `begleiten.html` · `rechte-und-angebote.html`, `#schweigepflicht` · extern: kinderseele.ch, vaskzuerich.ch |
| Grafiken | Abb. 1 `v-ro-spannung` (H) |

**6 · Begleiten und Gespräche (`begleiten`, 809 Wörter, 6 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Die Person ansprechen und im Alltag begleiten können; wissen, was bei Suizidgedanken zu tun ist» |
| Kernaussagen | begleiten statt übernehmen, Entscheidungen bei der Person · Reden macht die Depression nicht schlimmer · was eher hilft und was nicht · Übergriffe nicht hinnehmen · Ablehnung oft Teil der Krankheit, nie Täuschung oder Zwang · Suizid: Warnsignale, direkt fragen, nicht allein lassen, Mittel wegräumen, gemeinsam Hilfe holen |
| Begriffe | begleiten, übernehmen · Warnsignale · Suizidgedanken · akute Lage |
| Handlungsempfehlungen | zuhören, kleine Dinge gemeinsam, zu Terminen ermutigen · Gespräch beginnen (Beispiel) · Abklärung über Schlaf oder Erschöpfung ansprechen · fünf hilfreiche, fünf nicht hilfreiche Verhaltensweisen · Angebot wiederholen, kleine Vorschläge, selbst Beratung holen · direkt nach Suizidgedanken fragen (Beispiel) · danach selbst darüber sprechen |
| Zahlen | keine |
| Quellen | 5 Einträge (MHFA und Bond 2019, wie-gehts-dir.ch, Dazzi 2014, NVL Kap. 2, SGPP 2025) |
| Verweise | `fuer-sich-sorgen.html`, `#grenzen` · Zuständigkeitsverweis im Text (Platzhalter) nach `suizidgedanken` |
| Grafiken | Abb. 1 `v-bg-boot` (D) |

**7 · Für sich sorgen (`fuer-sich-sorgen`, 695 Wörter, 6 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Eigene Grenzen ernst nehmen und passende Entlastung finden» |
| Kernaussagen | Selbstsorge ist kein Egoismus · Grenze = Entscheid über den eigenen Beitrag · Übergriffe nicht hinnehmen · Unterstützung verteilen (Netz) · Angebote wenig untersucht, meist schwache Wirkung · eigene Warnsignale, dann Hilfe holen |
| Begriffe | Grenze · Netz, Kreise · Angehörigengruppe · «Familiencoach Depression» · Paartherapie · Achtsamkeit |
| Handlungsempfehlungen | Grenze formulieren (Beispiel) · Gespräch beenden, Raum verlassen · Übung: drei Kreise zeichnen · Angebote im Kanton Zürich · Hausarztpraxis, Beratungsstelle, Fachstelle |
| Zahlen | drei Monate (Familiencoach) |
| Quellen | 6 |
| Verweise | `rechte-und-angebote.html#angebote` · `mailto:` Fachstelle · Zuständigkeitsverweis im Text (Platzhalter) nach `eigene-krise` |
| Grafiken | Abb. 1 `v-fs-netz` (I) |

**8 · Rechte und Unterstützung im Kanton Zürich (`rechte-und-angebote`, 774 Wörter, 5 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Wissen, was man erfahren und mitteilen darf, welche Rechte man hat und wo es Unterstützung gibt» |
| Kernaussagen | Schweigepflicht gilt für Fachpersonen, nicht für Angehörige · vieles ohne Einwilligung möglich · Bezugspersonen im Kanton Zürich · mehr Rechte durch Einbezug · Ansprüche bei Arbeit und Geld begrenzt · Angebote im Kanton Zürich und in der Schweiz |
| Begriffe | Schweigepflicht · Einwilligung, Zustimmung · Bezugsperson · Entbindung · psychiatrische Patientenverfügung, Vertretungsperson · Akteneinsicht · Kurzurlaub, Betreuungsurlaub · Betreuungsgutschriften, Hilflosenentschädigung, IV-Rente |
| Handlungsempfehlungen | Beobachtungen mitteilen (Beispiel) · Einbezug in einer guten Phase ansprechen · Angebote nutzen |
| Zahlen | 3 Tage pro Ereignis, 10 Tage pro Jahr · 14 Wochen |
| Quellen | 8 (StGB 321, PatG ZH, BAG 2021, ZGB 370 ff., OR 329h/329i, BSV-FAQ, AHV/IV-Merkblätter, Pro Mente Sana) |
| Verweise | keine internen im Inhalt · extern 8 (Anbieter, wie-gehts-dir.ch) · `mailto:` Fachstelle |
| Grafiken | Abb. 1 `v-ra-vergleich` (E) |

**Hinweise für W2 (Begriffe, Doppelungen, Lücken; keine W1-Befunde)**

- **Schweregrad:** «mittelgradig» (`depression-verstehen` › `was-ist`, `behandlung-und-verlauf` › `behandelbar`, Abb. 1) neben «mittelschwer» (Johanniskraut in Abb. 1 › Vertiefung; SGB-Zahl auf `index` und `depression-verstehen`).
- **Einwilligung:** «Einverständnis» (`index`, `behandlung-und-verlauf`, `je-nach-rolle`, `begleiten`), «Einwilligung» und «Zustimmung» (`rechte-und-angebote`).
- **Fachperson und Behandlungsteam** wechseln; «Beratungsstelle für Angehörige» bleibt unbestimmt (`begleiten` › `suizidgedanken`, `fuer-sich-sorgen` › `eigene-krise`).
- **Linktext und Seitentitel:** `ihre-situation` › `was-belastet` und `je-nach-rolle` › `rollen` verlinken «Rechte und Angebote»; der Seitentitel heisst «Rechte und Unterstützung im Kanton Zürich».
- **Stärke derselben Aussage:** «oft Zeichen der Krankheit» (`depression-verstehen` › `dahinter`) und «meist Zeichen der Krankheit» (`je-nach-rolle` › `partner`); Paartherapie «kann helfen» (`ihre-situation`), «kann sinnvoll sein» (`je-nach-rolle`), «verbessert sie die Partnerschaft» (`fuer-sich-sorgen`) – siehe W1-11.
- **Doppelungen:** Paartherapie auf drei Seiten; «Übergriffe nicht hinnehmen» auf `begleiten` › `alltag` und `fuer-sich-sorgen` › `grenzen`; SGB-Zahl auf `index` und `depression-verstehen`; Stand by You und Barbato 2018 je zweimal als Quelle.
- **Verlaufszahlen über zwei Seiten:** `depression-verstehen` › `formen` und `behandlung-und-verlauf` › `verlauf` – siehe W1-02.
- **Lücken für W2 zu beurteilen:** Angehörige älterer Menschen (nur `depression-verstehen` › `anders`); erwachsene Kinder eines im Alter erkrankten Elternteils (W1-14); keine Seite verlinkt `rechte-und-angebote.html#vorsorge` oder `#arbeit-geld`.

#### W1-E · Offener Prüfbedarf der bauenden Sitzung

| Nr. | Punkt | Ergebnis der Prüfsitzung | Beleg | Stand |
| --- | --- | --- | --- | --- |
| 1 | Achtsamkeit (`fuer-sich-sorgen` › `was-hilft`) mit Zhang et al. 2024 abgleichen | Der Satz deckt den Abstract. Studienqualität, Heterogenität und Anteil der Studien zu Depression sind nicht prüfbar: kein PMC-Volltext, Verlagsseite gesperrt. Die Autorinnen und Autoren verlangen «more rigorous methodologies». Neben «leicht» beim Familiencoach (grosse RCT) wirkt die Achtsamkeit ohne Einschränkung besser belegt, als sie ist | Abstract: «stress (SMD = -0.80, 95% CI [-1.33, -0.28]) … depression (SMD = -0.43 …) … but not on anxiety» | offen: W1-07, W1-F-07 |
| 2 | Abb. 1 «Mit im Boot» mit dem Arbeitsheft «Wenn dein Partner depressiv ist» abgleichen | nicht prüfbar: Das Heft liegt nicht im Repository. Das Heft steht nicht in der Quellenliste der Seite | `begleiten` › Abb. 1 › Legende: «Metapher nach dem Arbeitsheft …»; Quellenliste ohne Heft | offen: W1-17, W1-F-15 |
| 3 | Befunde zu Eltern erwachsener Kinder und zu erwachsenen Kindern stammen aus anderen Gruppen; auf der Seite benannt | bestätigt für `eltern` (Kika: Eltern von Jugendlichen; Greally: 13 von 26 Studien zu Erwachsenen, Schwerpunkt Psychosen; Johansson: Eltern Erwachsener mit verschiedenen Erkrankungen) und `erwachsene-kinder`. Die Seite benennt das. Nicht benannt ist es bei `geschwister` (Jayasinghe: psychische Erkrankungen allgemein) | `eltern`: «die Befunde stammen meist aus Studien zu Jugendlichen oder zu psychischen Erkrankungen allgemein» | für `eltern` und `erwachsene-kinder` erfüllt; `geschwister`: W1-15 |
| 4 | Websites der Angebote vor der Veröffentlichung prüfen | in dieser Umgebung nicht möglich (gesperrt). Suchergebnisse: Treffpunkte VASK Zürich in Zürich und Winterthur und Kurse gestützt; **Gruppe für erwachsene Kinder nur in VASK-Nachrichten 2010/2011 gefunden** (`je-nach-rolle` › `erwachsene-kinder` und `rechte-und-angebote` › `angebote`); Stand by You = frühere VASK Schweiz (seit Januar 2024) gestützt; HelpLine «kostenlos, anonym» und Angehörigengruppen bei Equilibrium nicht gefunden | Quellentabelle, letzte Zeile | offen: W1-F-19 |
| 5 | Aktualisierung einplanen (NVL-Kapitel 10, Überprüfung 09/2027) | zur Kenntnis genommen; kein W1-Befund. Suchergebnis: NVL Version 3.2 von Juli 2023; ob eine neuere Fassung erschienen ist, vor der Freigabe prüfen | Quellentabelle, Zeile NVL | offen (Planung) |

#### W1-F · Fragen an die Fachstelle (Prüfbedarf)

Die Prüfsitzung entscheidet keine fachlichen Fragen. Bitte je Frage entscheiden; danach setzt die bauende Sitzung um.

1. **W1-F-01 · Was Angehörige erfahren dürfen** (W1-01). Abb. 1 auf `rechte-und-angebote` sagt im Kurztext «erst für Auskünfte über ihre Behandlung und für die Akten braucht es ihre Zustimmung», die Tabelle aber «im Kanton Zürich an Bezugspersonen möglich, solange die erkrankte Person nicht widerspricht». Soll (a) der Kurztext an die Zürcher Regel angepasst werden? Soll (b) das Formulierungsbeispiel «Ich weiss, dass Sie mir nichts über meinen Mann sagen dürfen.» so umformuliert werden, dass es auch für Bezugspersonen stimmt (etwa «Falls Sie mir nichts sagen dürfen: …»)? Gilt (c) dasselbe für die Wirkung im Plan («auch wenn das Team mir nichts sagen darf»)? Je Ja/Nein.
2. **W1-F-02 · Verlauf** (W1-02). `depression-verstehen` › `formen` sagt «Etwa jede vierte Depression bleibt einmalig» und «Bei den meisten kehrt die Depression … wieder»; `behandlung-und-verlauf` › `verlauf` sagt «Nach einer ersten Episode erkranken etwa 40 bis 60 von 100 Menschen erneut». Welche Aussage gilt? Vorschlag: «jede vierte» und «bei den meisten» streichen oder an die NVL-Zahl angleichen (etwa «Bei etwa der Hälfte kehrt die Depression wieder»).
3. **W1-F-03 · Eigene Gesundheit** (W1-03). Idstad et al. 2010 zeigt bei Partnerinnen und Partnern mehr Angst- und Depressionsbeschwerden und weniger Wohlbefinden, nicht Schlafprobleme, Erschöpfung, Grübeln, körperliche Beschwerden oder Lebensqualität einzeln. Soll der Satz auf das Gezeigte gekürzt werden, oder gibt es eine Quelle für die Aufzählung?
4. **W1-F-04 · Kritik in der Familie** (W1-04). Soll der Satz «Frühe kleine Studien fanden einen Zusammenhang, spätere nicht» (a) gestrichen oder (b) ersetzt werden, etwa: «Kritik in der Familie hängt mit Rückfällen zusammen; sie entsteht aber oft als Antwort auf eine belastende Situation»? Dabei Butzlaff und Hooley 1998 als Quelle aufnehmen (Ja/Nein)?
5. **W1-F-05 · Geschwister** (W1-05). «nicht an der Unterstützung, die sie leisten» streichen (Ja/Nein)? «etwas erhöhtes Risiko» durch «ein erhöhtes Risiko» ersetzen (Rhee: HR 1,74)?
6. **W1-F-06 · Information für Familien** (W1-06). «Information über die Krankheit: Hilft nachweislich vor allem der erkrankten Person» – soll es heissen: «Familienkurse (Psychoedukation) helfen nach ersten, noch schwachen Studien vor allem der erkrankten Person»? «nachweislich» streichen (Ja/Nein)?
7. **W1-F-07 · Achtsamkeit** (W1-07, Prüfbedarf 1). Einschränkung ergänzen, etwa: «… in kleineren Studien von begrenzter Qualität; die Belastung sank nur wenig» (Ja/Nein, Wortlaut)?
8. **W1-F-08 · Gefäss und fehlende Information** (W1-08). Steht «fehlende Information» (a) weiter bei den Zuflüssen, dann ohne «An ihnen können Angehörige wenig ändern» für diesen Punkt, oder (b) nur beim Ansatzpunkt «Information holen»?
9. **W1-F-09 · Erwachsene Kinder** (W1-14). Soll `erwachsene-kinder` auch Töchter und Söhne eines erst im Alter erkrankten Elternteils ansprechen (ein Satz oder Absatz, Ja/Nein)?
10. **W1-F-10 · Erhaltungstherapie** (W1-20). «nach der Besserung» durch «nach dem Abklingen der Beschwerden» (NVL: Remission) ersetzen (Ja/Nein)?
11. **W1-F-11 · Arbeit und Geld** (W1-21). Rechtliche Prüfung: (a) Betreuungsgutschriften schon bei Hilflosenentschädigung leichten Grades; (b) Kurzurlaub bei wiederkehrender Erkrankung nur einmal je Beeinträchtigung? Wortlaut danach anpassen.
12. **W1-F-12 · Vertretung bei Urteilsunfähigkeit** (W1-22). Soll `vorsorge` das gesetzliche Vertretungsrecht (Art. 378 ZGB) erwähnen, mit dem Hinweis auf Art. 380 ZGB, oder bleibt es wegen des Entscheids «keine fürsorgerische Unterbringung» weg?
13. **W1-F-13 · Eltern erwachsener Kinder, Abb. 1** (W1-16). Mitte «… und frage, bevor ich etwas unternehme» und darunter «Auch ohne Einverständnis … dürfen Sie dem Behandlungsteam Ihre Beobachtungen mitteilen»: Soll die Mitte «… und sage dir, bevor ich etwas unternehme» heissen (passt zu «Offen sagen, was man selbst unternimmt»), oder bleibt es?
14. **W1-F-14 · Eigene Krise** (W1-18). Steht der Zuständigkeitsverweis auf `fuer-sich-sorgen` › `eigene-krise` vor dem Satz mit der E-Mail der Fachstelle, oder bleibt die Reihenfolge?
15. **W1-F-15 · Boot und Arbeitsheft** (W1-17, Prüfbedarf 2). Stimmt Abb. 1 auf `begleiten` mit der Metapher im Arbeitsheft überein? Soll das Heft mit Titel, Jahr und Herausgeberin in die Quellenliste?
16. **W1-F-16 · Übersicht** (W1-19). «Drei von vier Angehörigen erleben die Depression als belastend.» – ergänzen zu «In einer grossen Befragung in Deutschland …» oder durch die Schweizer Zahl ersetzen?
17. **W1-F-17 · Stärke einzelner Formulierungen** (W1-11, W1-12, W1-13, W1-15). Bitte je Stelle in W1-12 Ja/Nein, ob abgeschwächt wird; ebenso Paartherapie (W1-11), die Schutzfaktoren (W1-13) und der Hinweis «psychische Erkrankungen allgemein» bei Geschwistern und Achtsamkeit (W1-15).
18. **W1-F-18 · Anordnung von Psychotherapie** (W1-23). «wenn eine Ärztin oder ein Arzt sie anordnet» präzisieren, etwa «wenn eine Hausärztin, Psychiaterin oder eine andere dazu berechtigte Ärztin sie anordnet» (Ja/Nein)?
19. **W1-F-19 · Angebote** (Prüfbedarf 4). Besteht die Gruppe der VASK Zürich für erwachsene Kinder psychisch erkrankter Eltern noch? Ist die HelpLine von Stand by You kostenlos und anonym? Bietet Equilibrium Gruppen für Angehörige an?
20. **W1-F-20 · Trauer** (W1-24). Soll `formen` › Trauer erwähnen, dass eine ungewöhnlich lange, lähmende Trauer abgeklärt werden kann?
21. **W1-F-21 · Fachliche Freigaben.** Offen sind alle Texte (Musterentwurf) und die elf Visualisierungen (`approvalStatus` «ausstehend»).

#### W1-G · Befunde W1

Schwere: **wichtig** = vor der Freigabe zu klären; **optional** = Verbesserung. Quelle aller Befunde: Prüfung 1.

- **W1-01 · wichtig · Rechte: Abbildung, Beispiel und Plan widersprechen der Zürcher Regel.**
  - **Beleg:** `rechte-und-angebote` › Abb. 1, `p.puk-vis-short`: «erst für Auskünfte über ihre Behandlung und für die Akten braucht es ihre Zustimmung»; Tabelle Spalte A: «im Kanton Zürich an Bezugspersonen möglich, solange die erkrankte Person nicht widerspricht» (Entscheid der Fachstelle vom 10.10.2026 zu § 15 PatG ZH); Formulierungsbeispiel: «Ich weiss, dass Sie mir nichts über meinen Mann sagen dürfen.»; `site.config.json` › `v-ra-vergleich` › `resonance`: «auch wenn das Team mir nichts sagen darf».
  - **Folge:** Eine Partnerin, die nach Zürcher Recht Bezugsperson ist, liest zweimal, dass man ihr nichts sagen darf.
  - **Zuständig:** Fachstelle (W1-F-01), danach bauende Sitzung.
- **W1-02 · wichtig · Verlaufszahlen widersprechen sich.**
  - **Beleg:** `depression-verstehen` › `formen`: «Etwa jede vierte Depression bleibt einmalig.» und «Bei den meisten kehrt die Depression nach Monaten oder Jahren wieder.»; `behandlung-und-verlauf` › `verlauf`: «Nach einer ersten Episode erkranken etwa 40 bis 60 von 100 Menschen erneut». Bei 40 bis 60 Rückfällen auf 100 bleiben 40 bis 60 einmalig, nicht 25. «jede vierte» ist in den Quellen nicht gefunden; «40–60 %» gibt ein Suchergebnis aus NVL Kap. 1.4 wieder.
  - **Zuständig:** Fachstelle (W1-F-02).
- **W1-03 · wichtig · «Die eigene Gesundheit»: Quelle deckt die Aufzählung nicht.**
  - **Beleg:** `ihre-situation` › `gesundheit`: «Schlafproblemen, Erschöpfung, Grübeln und körperlichen Beschwerden, und ihre Lebensqualität ist tiefer»; Idstad 2010 misst nur einen Summenwert für Angst und Depression und das subjektive Wohlbefinden, Grübeln gar nicht; nur Partner, «mental disorder» allgemein.
  - **Zuständig:** Fachstelle (W1-F-03).
- **W1-04 · wichtig · Kritik und Rückfall: Aussage ohne Quelle, im Widerspruch zur Meta-Analyse.**
  - **Beleg:** `ihre-situation` › Abb. 2 › Vertiefung: «Frühe kleine Studien fanden einen Zusammenhang, spätere nicht.» Keine Quelle der Seite deckt das; Butzlaff und Hooley 1998 (Meta-Analyse): «the mean effect sizes for EE for both mood disorders and eating disorders were significantly higher than the mean effect size for schizophrenia».
  - **Zuständig:** Fachstelle (W1-F-04).
- **W1-05 · wichtig · Geschwister: kausale Aussage ohne Beleg.**
  - **Beleg:** `je-nach-rolle` › `geschwister`: «Das liegt an gemeinsamen familiären und erblichen Faktoren, nicht an der Unterstützung, die sie leisten.» Rhee 2025 untersucht Unterstützung nicht; «etwas erhöhtes Risiko» bei HR 1,74.
  - **Zuständig:** Fachstelle (W1-F-05).
- **W1-06 · wichtig · «nachweislich» widerspricht der Quelle.**
  - **Beleg:** `fuer-sich-sorgen` › `was-hilft`: «Information über die Krankheit · Hilft nachweislich vor allem der erkrankten Person.» Katsuki 2022: «all outcomes are graded very low on certainty»; untersucht wurde Familien-Psychoedukation, reine Information war ausgeschlossen.
  - **Zuständig:** Fachstelle (W1-F-06).
- **W1-07 · wichtig · Achtsamkeit ohne Einschränkung (Prüfbedarf 1).**
  - **Beleg:** `fuer-sich-sorgen` › `was-hilft`: «Programme zur Achtsamkeit verringerten bei Angehörigen psychisch erkrankter Menschen Stress und Niedergeschlagenheit.»; derselbe Abschnitt verspricht «ehrlich betrachtet» und nennt den Familiencoach «leicht». Zhang 2024 verlangt «more rigorous methodologies»; Belastung nur SMD −0,21.
  - **Zuständig:** Fachstelle (W1-F-07).
- **W1-08 · wichtig · Gefäss: «fehlende Information» steht auf beiden Seiten.**
  - **Beleg:** `ihre-situation` › Abb. 1, `p.puk-vis-short`: Zuflüsse «… fehlende Information. An ihnen können Angehörige wenig ändern.»; Satz im Bild «Niemand sagt mir, wie es weitergeht.» bei den Zuflüssen; Ansatzpunkt «Information holen»; `was-belastet`: «Dagegen lässt sich etwas tun».
  - **Zuständig:** Fachstelle (W1-F-08).
- **W1-09 · wichtig · Quellenangaben unvollständig oder ungenau.**
  - **Beleg:**
    - Titel fehlen in 31 Quelleneinträgen zu Fachartikeln (Abweichung «Autorin et al. Jahr, Zeitschrift» der bauenden Sitzung). Die vollständigen Angaben stehen in der Quellentabelle (W1-C) und können übernommen werden.
    - Bei keiner Online-Quelle steht ein Abrufdatum. ICD-11, Martire, Hooley, Jayasinghe, Moncrieff/Jauhar, Katsuki 2018, Ipsen, Schomerus ohne Link oder DOI.
    - Barbato 2018: dritter Autor Parabiaghi fehlt (`ihre-situation`, `fuer-sich-sorgen`).
    - `behandlung-und-verlauf` › `verlauf`: «In einer Studie, auf die sich die deutsche Leitlinie stützt» ohne Angabe der Studie (vermutlich Spijker et al. 2002, Allgemeinbevölkerung).
    - NVL «Kapitel 3 bis 6» für Verlauf und Rückfallrisiko; diese stehen laut Suchergebnis in Kap. 1.4 «Verlaufsformen und prognostische Faktoren».
    - Titel gekürzt oder ungenau: SGPP («Die Behandlung der unipolaren depressiven Störungen: Update 2025, Teil 1»), Albermann und Müller («Kinder und Jugendliche aus Familien mit einem psychisch erkrankten Elternteil»), Pro Mente Sana («… im psychiatrischen Zwangskontext»), Greally («Übersicht zu Eltern erwachsener Kinder» – betrifft Eltern von Kindern jeden Alters), MHFA ohne Jahr (Fassung «revised 2018»).
    - PatG ZH: § 15 ohne Absatz (Abs. 2); § 19 als Akteneinsicht nicht bestätigt; Link auf eine bestimmte Fassung («…-083.html»).
    - Suizidzahlen («fast dreimal») stammen vermutlich aus Obsan-Bulletin 08/2024, nicht 11/2024.
    - Rechtlich-administrative Aussagen zur Anordnung psychologischer Psychotherapie nur mit dem internen Recherchebericht belegt; Standard sind amtliche Quellen (Art. 11b KLV, BAG).
  - **Zuständig:** bauende Sitzung (Titel und Angaben aus W1-C übernehmen); Fachstelle nur für die Studie zu «Hälfte nach drei Monaten».
- **W1-10 · wichtig · Aussagen ohne deckende Quelle.**
  - **Beleg:**
    - `depression-verstehen` › `anders`: ältere Menschen, körperliche Beschwerden, rund um die Geburt; `formen` › Trauer, Burnout (keine Quellenzeile nennt sie).
    - `depression-verstehen` › Vertiefung Abb. 2: «Antidepressiva wirken trotzdem; ihre Wirkung wurde in Studien direkt gemessen.» – Moncrieff und Jauhar enthalten keine Wirksamkeitsdaten.
    - `behandlung-und-verlauf` › Abb. 1: «Zu Beginn kann es vorübergehend schwerer werden»; «nach acht bis zwölf Wochen» (nicht gefunden); `verlauf`: «Je früher er erkannt wird, desto besser lässt er sich behandeln.»
    - `ihre-situation`: «Am häufigsten nennen Angehörige die Sorge» (keine Rangfolge in van Wijngaarden 2004 und Barometer 2024 gefunden); «dauernde Wachsamkeit»; «Trauer um das, was … verloren geht».
    - `je-nach-rolle`: «Partnerinnen und Partner tragen oft die Hauptlast»; «zwei- bis dreimal» (Rasic: Wert für Depression nur im Volltext); Dam und Hall in der Quellenliste ohne Aussage auf der Seite.
    - `begleiten`: «Über die Depression zu reden, macht sie nicht schlimmer.»; «Ein Ortswechsel heilt keine Depression.»
    - `fuer-sich-sorgen`: «werden sehr geschätzt» (nur für eine Partnergruppe belegt); Name «Familiencoach Depression» und «kostenlos» stehen nicht in Schramm 2026.
    - `rechte-und-angebote`: «auch bei einer psychischen Erkrankung» (BSV-FAQ) und «allgemein informieren» (BAG) nicht gefunden.
  - **Zuständig:** bauende Sitzung (Quellen ergänzen oder Aussage anpassen), Fachstelle bei Streichungen.
- **W1-11 · optional · Paartherapie mit unterschiedlicher Stärke.**
  - **Beleg:** «kann … helfen» (`ihre-situation`), «kann sinnvoll sein» (`je-nach-rolle`), «verbessert sie die Partnerschaft» (`fuer-sich-sorgen`); Barbato 2018: «very low-quality evidence».
  - **Zuständig:** Fachstelle (W1-F-17).
- **W1-12 · optional · Formulierungen stärker als die Evidenz.**
  - **Beleg:**
    - «Frauen erhalten die Diagnose etwa doppelt so oft» – Salk misst Kriterien in Befragungen (Erwachsene OR 1,7–2,0).
    - «Depression zeigt sich häufiger als Gereiztheit … oder Flucht in die Arbeit» – Martin: «Further study is needed»; Gereiztheit und Arbeit nicht im Abstract.
    - «den grösseren Teil erklären Lebenserfahrungen» – Sullivan: «individual-specific environmental effects/measurement error».
    - «Das ist gut untersucht» / «Gut belegt» (Whisman: eine Studie, Assoziation); «wird es meist auch für Angehörige leichter» (Martire: Trend bei allgemeiner Belastung, ab 60 Jahren).
    - «sind meist Zeichen der Krankheit» (`je-nach-rolle`; `depression-verstehen`: «oft»); «Viele erleben Schuld oder Scham» (Kika: «Some parents»); «für viele ist das Gespräch eine Entlastung» (Dazzi: «may»).
    - Abb. 1 `ihre-situation`, Kern: «hängt nicht von Ihrer Stärke ab» (absolut).
    - Lichttherapie «hilft» (`behandlung-und-verlauf` › Abb. 1 › Vertiefung).
    - Etikettierend: «die Hälfte der Erkrankten» (`behandlung-und-verlauf` › `verlauf`), «Eltern depressiver Jugendlicher» (Quellenzeile Kika).
  - **Zuständig:** Fachstelle (W1-F-17), Sprachliches an S.
- **W1-13 · optional · Schutzfaktoren frei gedeutet.**
  - **Beleg:** `je-nach-rolle` › `kinder`: «eine verlässliche Bezugsperson und die Unterstützung durch den anderen Elternteil» (gemessen: «co-parent support»), «zugewandte, warme Momente mit dem erkrankten Elternteil» (gemessen: «positive expressed emotion»; die Wärme-Skala war nicht signifikant). Die Zahlen 48 und 4 von 100 stimmen.
  - **Zuständig:** Fachstelle (W1-F-17).
- **W1-14 · wichtig · Erwachsene Kinder: eine grosse Gruppe fehlt.**
  - **Beleg:** `je-nach-rolle` › `erwachsene-kinder`: «Wer mit einem Elternteil mit Depression aufgewachsen ist, hat oft früh Verantwortung übernommen.» Töchter und Söhne eines erst im Alter erkrankten Elternteils finden sich nicht; der Lesepfad auf `index` («Tochter oder Sohn eines Elternteils mit Depression») führt alle dorthin; `depression-verstehen` › `anders` nennt Depression im Alter.
  - **Zuständig:** Fachstelle (W1-F-09).
- **W1-15 · optional · Befunde zu psychischen Erkrankungen allgemein nicht als solche benannt.**
  - **Beleg:** `je-nach-rolle` › `geschwister` (Jayasinghe: «any psychiatric disorder»); `fuer-sich-sorgen` › Achtsamkeit (Zhang: «people with mental illness»; im Text benannt, aber als Beleg für Depression gelesen). Bei `eltern` und bei Stand by You ist es benannt.
  - **Zuständig:** Fachstelle (W1-F-17).
- **W1-16 · optional · Eltern erwachsener Kinder: Mitte der Waage und Text darunter.**
  - **Beleg:** Abb. 1 Mitte: «… und frage, bevor ich etwas unternehme»; Absatz danach: «Auch ohne Einverständnis Ihres erwachsenen Kindes dürfen Sie dem Behandlungsteam Ihre Beobachtungen mitteilen»; rechte Seite: «Offen sagen, was man selbst unternimmt».
  - **Zuständig:** Fachstelle (W1-F-13).
- **W1-17 · optional · Arbeitsheft fehlt in der Quellenliste; Abgleich offen (Prüfbedarf 2).**
  - **Beleg:** `begleiten` › Abb. 1 › Legende: «Metapher nach dem Arbeitsheft …»; Quellenliste ohne Heft.
  - **Zuständig:** Fachstelle (W1-F-15).
- **W1-18 · optional · Eigene Krise: Reihenfolge von Fachstelle und Zuständigkeitsverweis.**
  - **Beleg:** `fuer-sich-sorgen` › `eigene-krise`: letzte Warnsignal-Zeile «Sie haben selbst Gedanken, nicht mehr leben zu wollen.», dann «Die Fachstelle Angehörigenarbeit der PUK berät Sie kostenlos und vertraulich: …», erst danach `<p data-responsibility-inline></p>`. Kein Verstoss gegen die Regel (Platzhalter steht nach der Handlungsanleitung); offen ist nur, ob die Reihenfolge eine Zuständigkeit der Fachstelle in Krisen nahelegt.
  - **Zuständig:** Fachstelle (W1-F-14).
- **W1-19 · optional · Übersicht verallgemeinert eine deutsche Befragung.**
  - **Beleg:** `index` › `kurz`: «Drei von vier Angehörigen erleben die Depression als belastend.»; Barometer 2024: «als große Belastung für das Familienleben», Deutschland; `ihre-situation` › `nicht-allein` nennt beides.
  - **Zuständig:** Fachstelle (W1-F-16).
- **W1-20 · wichtig · Erhaltungstherapie: «nach der Besserung» statt «nach der Remission».**
  - **Beleg:** `behandlung-und-verlauf` › `vorbeugen`: «Antidepressiva sollen nach der Besserung noch sechs bis zwölf Monate weiter eingenommen … werden»; NVL Kap. 6 (Suchergebnis, Wortlaut): «6–12 Monate über die Remission einer depressiven Episode hinaus». «Besserung» kann als erste Erleichterung gelesen werden; die Frist begänne zu früh.
  - **Zuständig:** Fachstelle (W1-F-10).
- **W1-21 · wichtig · Arbeit und Geld: zwei Aussagen rechtlich prüfen.**
  - **Beleg:** `rechte-und-angebote` › `arbeit-geld`: «Sie kommen nur bei einer schweren, dauerhaften Beeinträchtigung in Frage» – für Betreuungsgutschriften genügt laut Suchergebnis seit 2021 eine Hilflosenentschädigung leichten Grades; «höchstens drei Tage pro Ereignis» – laut Pro Infirmis (Sekundärquelle) bei wiederholten Krisen derselben Erkrankung nur einmal. Die Seite sagt selbst «rechtliche Prüfung ausstehend».
  - **Zuständig:** Fachstelle mit rechtlicher Prüfung (W1-F-11).
- **W1-22 · optional · Vertretungsrecht bei Urteilsunfähigkeit nicht erwähnt.**
  - **Beleg:** `rechte-und-angebote` › `vorsorge` nennt Bezugsperson, Entbindung und Patientenverfügung, nicht Art. 378 ZGB (Vertretung durch Ehegatten und Angehörige bei Urteilsunfähigkeit); für die Klinikbehandlung psychischer Störungen gilt Art. 380 ZGB.
  - **Zuständig:** Fachstelle (W1-F-12).
- **W1-23 · optional · Anordnung von Psychotherapie zu allgemein.**
  - **Beleg:** `behandlung-und-verlauf` › Abb. 2 › Vertiefung: «wenn eine Ärztin oder ein Arzt sie anordnet»; anordnen dürfen nach Art. 11b KLV nur Ärztinnen und Ärzte bestimmter Fachrichtungen (Suchergebnis, Paraphrase).
  - **Zuständig:** Fachstelle (W1-F-18).
- **W1-24 · optional · Trauer.**
  - **Beleg:** `depression-verstehen` › `formen`: «Trauer nach einem Verlust ist keine Krankheit.» Die ICD-11 führt nach Kenntnis der Prüfsitzung eine «anhaltende Trauerstörung» (6B42); nicht am Original geprüft.
  - **Zuständig:** Fachstelle (W1-F-20).
- **W1-25 · wichtig · Nicht am Original geprüft (Prüflücke).**
  - **Beleg:** Quellentabelle W1-C, zweiter Teil. Vor allem: Stand by You (73 von 100, 40 von 100, Angst vor Suizid: nicht gefunden, andere 73-%-Werte in der Studie); NVL «40 bis 60» und «15 bis 30»; Obsan (Behandlung nach Geschlecht); PatG ZH § 19; BSV-FAQ; BAG «allgemein informieren»; MHFA-Inhalte; Albermann und Müller; Rasic (Wert für Depression); Angebote (Prüfbedarf 4).
  - **Zuständig:** eine Prüfsitzung mit Zugriff auf die Originale oder die Fachstelle. Bis dahin kann W1 nicht «erledigt» sein.

#### Zählung der Befunde W1

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| wichtig | 14 | W1-01 bis W1-10, W1-14, W1-20, W1-21, W1-25 |
| optional | 11 | W1-11 bis W1-13, W1-15 bis W1-19, W1-22 bis W1-24 |
| Fragen an die Fachstelle | 21 | W1-F-01 bis W1-F-21 |

#### Prüfrunde 2 · Nachprüfung der Umsetzung (11.10.2026, Stand `f413f69`)

**Geprüft durch:** dieselbe Prüfsitzung (Claude Code, hat nicht gebaut). Keine Inhalte und kein Code geändert.

**Grundlage:** Änderungen der bauenden Sitzung seit `5ad9cc8` (Commits `a7ddeb3` und `36a1389`, gemergt mit `f413f69`), Wort für Wort mit `git diff --word-diff` gelesen; Entscheide der Fachstelle vom 11.10.2026 (oben unter «Von der Fachstelle entschieden»). Neue Quellen über PubMed geprüft. Nachgemessen: Gate draft 0 blockierend, 13 Hinweise; Selbsttest 53/53; alle internen Links und Sprungziele vorhanden (Skript der Prüfsitzung, 0 Fehler); kein horizontaler Überlauf bei 1280, 360 und 320 px auf allen acht Seiten (Playwright); 8473 Wörter ohne Quellenliste und SVG (vorher 7772).

**Ergebnis:** 19 der 25 Befunde aus Runde 1 sind erledigt, 4 teilweise, 2 offen. Neu sind 5 Befunde (W1-26 bis W1-30; 2 wichtig, 3 optional). W1 bleibt **offen**: Es fehlen Quellen für einige Aussagen (W1-10, W1-27), die Fachstelle entscheidet noch W1-F-11, W1-F-15, W1-F-19 und W1-F-21, und die Prüfung am Original steht aus (W1-25).

**Umsetzung je Befund aus Runde 1**

| Befund | Entscheid | Umsetzung (Beleg) | Ergebnis |
| --- | --- | --- | --- |
| W1-01 Rechte, Zürcher Regel | W1-F-01 a, b, c ja | `rechte-und-angebote` › Abb. 1, Kurztext: «Bezugspersonen erhalten im Kanton Zürich auch Auskunft über Gesundheitszustand und Behandlung, solange die erkrankte Person nicht widerspricht. Für die Einsicht in die Akten braucht es ihr Einverständnis.»; Beispiel: «Falls Sie mir nichts über meinen Mann sagen dürfen: …»; Plan `v-ra-vergleich` › `resonance`: «vielleicht» | erledigt |
| W1-02 Verlaufszahlen | W1-F-02 | `depression-verstehen` › `formen`: «Bei etwa der Hälfte der Menschen bleibt es bei einer einzigen Episode.» und «Bei etwa der Hälfte kehrt die Depression … wieder»; passt zu «40 bis 60 von 100» auf `behandlung-und-verlauf` | erledigt |
| W1-03 Eigene Gesundheit | W1-F-03 | `ihre-situation` › `gesundheit`: «In einer grossen norwegischen Studie hatten Partnerinnen und Partner psychisch erkrankter Menschen mehr Angst- und Depressionsbeschwerden und ein geringeres Wohlbefinden als Vergleichspersonen.» | erledigt |
| W1-04 Kritik und Rückfall | W1-F-04 b | Vertiefung Abb. 2: «Kritik in der Familie hängt auch bei Depression mit Rückfällen zusammen. Sie entsteht aber oft als Antwort auf eine belastende Situation, etwa aus Erschöpfung, und ist keine Schuldfrage.»; Butzlaff und Hooley 1998 in der Quellenliste | erledigt |
| W1-05 Geschwister | W1-F-05 | «ein erhöhtes Risiko»; «Das liegt vor allem an gemeinsamen familiären und erblichen Faktoren.» | erledigt |
| W1-06 «nachweislich» | W1-F-06 | `fuer-sich-sorgen` › `was-hilft`: «Familienkurse mit Information über die Krankheit (Psychoedukation) helfen nach ersten, noch schwachen Studien vor allem der erkrankten Person.» | erledigt |
| W1-07 Achtsamkeit | W1-F-07 | «… in kleineren Studien von begrenzter Qualität; die Belastung sank nur wenig.» (Zhang: Belastung SMD −0,21) | erledigt |
| W1-08 Gefäss | W1-F-08 a | Kurztext Abb. 1: «Auch fehlende Information fliesst zu; dagegen lässt sich etwas tun.»; Bild unverändert | erledigt |
| W1-09 Quellenangaben | – | Alle Fachartikel mit Autorinnen und Autoren, Jahr, Titel, Zeitschrift, Band und DOI-Link; Barbato mit Parabiaghi; SGPP-, Albermann-, Pro-Mente-Sana-, Greally- und MHFA-Angaben korrigiert; § 15 Abs. 2; NVL «Kapitel 1.4 (Verlauf), 3 bis 6»; Spijker 2002 genannt; Arbeitsheft in der Quellenliste. **Offen:** kein Abrufdatum bei Online-Quellen; Obsan-Bulletin für die Suizidzahlen (08/2024 oder 11/2024); PatG § 19; NVL-Kapitel zur Suizidalität auf `begleiten` (2 oder 12); ICD-11 6B42 am Original | teilweise |
| W1-10 Aussagen ohne Quelle | teils Fachstelle | Angepasst: «Über Belastendes zu sprechen, kann zu Beginn anstrengend sein»; «acht bis zwölf Wochen» gestrichen; «Wird er früh erkannt, lässt sich die Behandlung rasch anpassen»; «Sie dürfen die Veränderungen ansprechen»; «Ferien oder einen Ortswechsel als Heilmittel verordnen»; Rasic «deutlich häufiger»; Angehörigengruppen «von den Teilnehmenden sehr geschätzt»; Cipriani 2018 für die Wirkung der Antidepressiva. **Weiterhin ohne deckende Quelle:** `depression-verstehen` › `anders` (ältere Menschen, körperliche Beschwerden, rund um die Geburt, «Flucht in die Arbeit»); «drei bis vier Wochen» (nur Paraphrase der NVL); `ihre-situation` › `angst` «dauernde Wachsamkeit», «Trauer um das, was … verloren geht»; Name und «kostenlos» des Familiencoachs; BSV «auch bei einer psychischen Erkrankung»; BAG «allgemein informieren» | teilweise |
| W1-11 Paartherapie | W1-F-17 | nur auf `fuer-sich-sorgen` › `was-hilft` ausgeführt: «Nach bisherigen, noch schwachen Studien verbessert sie die Partnerschaft und wirkt gegen die Depression ähnlich gut wie eine Einzeltherapie.»; auf `ihre-situation` und `je-nach-rolle` je ein Satz mit Link | erledigt |
| W1-12 Formulierungsstärke | W1-F-17 | Salk, Martin, Sullivan, Whisman, Martire, Gefäss-Kern, Lichttherapie, Kika («Manche erleben Schuld»), Dazzi, «oft Zeichen der Krankheit» abgeschwächt; Etikett in der Quellenzeile ersetzt. Offen: «die Hälfte der Erkrankten» (an S übergeben) und «Und viele ringen damit» (W1-29) | teilweise |
| W1-13 Schutzfaktoren | W1-F-17 | «die Unterstützung durch den anderen Elternteil», «wenn der erkrankte Elternteil positiv und anerkennend über das Kind spricht»; «über die ganze Studienzeit psychisch gesund» | erledigt |
| W1-14 Erwachsene Kinder | W1-F-09 | neuer Absatz «Andere erleben die Depression eines Elternteils erst im Alter …» mit Link auf `depression-verstehen.html#anders`; Quelle fehlt (W1-27) | erledigt (Quelle: W1-27) |
| W1-15 Population | W1-F-17 | `geschwister`: «Geschwister von Menschen mit psychischen Erkrankungen … die Studien dazu betreffen psychische Erkrankungen allgemein, nicht nur Depression.» | erledigt |
| W1-16 Waage, Mitte | W1-F-13 | «Ich bin da, wenn du mich brauchst, und sage dir, bevor ich etwas unternehme.» | erledigt |
| W1-17 Arbeitsheft | W1-F-15 | Heft in der Quellenliste von `begleiten`; Abgleich des Bildes mit dem Heft bei der Fachstelle offen | teilweise |
| W1-18 Eigene Krise | W1-F-14 | `fuer-sich-sorgen` › `eigene-krise`: `<p data-responsibility-inline></p>` steht jetzt vor dem Absatz mit der E-Mail der Fachstelle | erledigt |
| W1-19 Übersicht, Barometer | W1-F-16 | `index` › `kurz`: «In einer grossen Befragung in Deutschland beschrieben drei von vier Angehörigen die Depression als grosse Belastung für das Familienleben.» | erledigt |
| W1-20 Erhaltungstherapie | W1-F-10 | `vorbeugen`: «nach dem Abklingen der Beschwerden»; Abb. 2 Schritt 5: «Auch wenn die Beschwerden abgeklungen sind …» | erledigt |
| W1-21 Arbeit und Geld | W1-F-11 offen | unverändert | offen |
| W1-22 Vertretungsrecht | W1-F-12 «weglassen» | unverändert, begründet mit dem Entscheid gegen einen Abschnitt zur fürsorgerischen Unterbringung | erledigt (Entscheid) |
| W1-23 Anordnung | W1-F-18 | «wenn eine Hausärztin, eine Psychiaterin oder eine andere dazu berechtigte Ärztin sie anordnet»; Quelle Art. 11b KLV (Fedlex) | erledigt |
| W1-24 Trauer | W1-F-20 | «Hält die Trauer ungewöhnlich lange an und lähmt sie den Alltag, kann eine Abklärung sinnvoll sein.»; ICD-11-Link mit 6B42 und QD85 | erledigt (Original: W1-25) |
| W1-25 Prüflücke | – | unverändert; dazu jetzt ICD-11 6B42 und Art. 11b KLV | offen |

**Neue Quellen, über PubMed geprüft**

| Quelle | Seite | Aussage | Ergebnis | Beleg |
| --- | --- | --- | --- | --- |
| Cipriani A, Furukawa TA, Salanti G, et al. (2018). Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis. Lancet 391(10128):1357–66. doi:10.1016/S0140-6736(17)32802-7 | `depression-verstehen` › Vertiefung Abb. 2; `behandlung-und-verlauf` | «In einer grossen Auswertung von über 500 Studien wirkten alle untersuchten Antidepressiva besser als ein Scheinmedikament.» | gedeckt | «included 522 trials comprising 116 477 participants. In terms of efficacy, all antidepressants were more effective than placebo»; Sicherheit der Evidenz «moderate to very low» |
| Chung DT, Ryan CJ, Hadzi-Pavlovic D, et al. (2017). Suicide Rates After Discharge From Psychiatric Facilities: A Systematic Review and Meta-analysis. JAMA Psychiatry 74(7):694–702. doi:10.1001/jamapsychiatry.2017.1044 | `behandlung-und-verlauf` › «Wenn ein Klinikaufenthalt nötig wird» | «Die ersten Wochen nach einem Klinikaustritt sind oft eine verletzliche Zeit.» | teilweise | «The suicide rate was highest within 3 months after discharge»; Quellenzeile sagt «Monate», der Text «Wochen» (W1-28); alle psychiatrischen Diagnosen |
| Butzlaff und Hooley 1998; Spijker et al. 2002 | `ihre-situation`; `behandlung-und-verlauf` | wie in Runde 1 vorgeschlagen | gedeckt | Quellentabelle W1-C |

**Neue Inhalte** (von der bauenden Sitzung unter «Weiterhin offen» genannt)

| Stelle | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| `behandlung-und-verlauf` › «Wenn ein Klinikaufenthalt nötig wird» | fachlich stimmig, Haltung gut («kein Scheitern, sondern ein Teil der Behandlung»; Gespräch vor dem Austritt nur «wenn die erkrankte Person einverstanden ist»); Zeitangabe ungenau | Chung 2017 | W1-28 |
| `je-nach-rolle` › `erwachsene-kinder`, Absatz zum Elternteil, der erst im Alter erkrankt | Aussagen «zum Beispiel nach einem Verlust oder bei einer körperlichen Krankheit» und «wird leicht übersehen, weil sie sich oft über körperliche Beschwerden, Gedächtnisprobleme oder Rückzug zeigt» ohne Quelle; der Link führt auf `anders`, das selbst ohne Quelle ist | – | W1-27 |
| `je-nach-rolle` › `kinder`, Scham | gedeckt | Dam und Hall 2016: «Children feel shame … and they conceal their family life»; «cope through information, knowledge, frankness and trustful relationships» | – |
| `rechte-und-angebote` › Erklärung «Bezugsperson» vor Abb. 1 | gedeckt (amtliche Sekundärquelle, Runde 1); die Seite erklärt den Begriff jetzt zweimal (vor Abb. 1 und in `vorsorge`) | Leitfaden der Gesundheitsdirektion | an S |
| `depression-verstehen` › `formen` › Trauer | stimmig | ICD-11 6B42 nicht am Original geprüft | W1-25 |

**Neue Befunde Runde 2** (Quelle: Prüfung 1)

- **W1-26 · wichtig · Leeres Listenelement in der Quellenliste.**
  - **Beleg:** `content/ihre-situation.html` Zeile 78 und `ihre-situation.html` Zeile 114: `<li></ul>` (Rest der entfernten Barbato-Zeile). Im Browser 11 Einträge, davon 1 leer, 33 px hoch; Screenreader zählen ein leeres Listenelement mit. Das Gate erkennt den Fehler nicht.
  - **Zuständig:** bauende Sitzung.
- **W1-27 · wichtig · Neue Aussagen ohne Quelle.**
  - **Beleg:** `je-nach-rolle` › `erwachsene-kinder`: «zum Beispiel nach einem Verlust oder bei einer körperlichen Krankheit», «Eine Depression im Alter wird leicht übersehen …». Zusammen mit W1-10 lösen (eine Quelle zur Depression im Alter, etwa NVL-Kapitel 10, sobald es erschienen ist).
  - **Zuständig:** bauende Sitzung (Quelle), Fachstelle bei Streichung.
- **W1-28 · optional · Klinikaustritt: «Wochen» oder «Monate».**
  - **Beleg:** Text «Die ersten Wochen nach einem Klinikaustritt …», Quellenzeile «Die ersten Monate …», Chung 2017 «within 3 months». Vorschlag: «Die ersten Wochen und Monate …».
  - **Zuständig:** bauende Sitzung.
- **W1-29 · optional · «Und viele ringen damit» blieb stehen.**
  - **Beleg:** `je-nach-rolle` › `eltern`; Kika 2026 berichtet das Ringen um Unterstützen und Freiraum aus mehreren, nicht aus den meisten Studien (Runde 1, Quellentabelle). Entscheid W1-F-17 «alle Abschwächungen».
  - **Zuständig:** bauende Sitzung.
- **W1-30 · optional · Herkunft der Zahl im Abschnitt nicht genannt.**
  - **Beleg:** `ihre-situation` › `was-belastet`: «Etwa vier von zehn Angehörigen fühlten sich nicht gut informiert oder nicht in die Behandlung einbezogen.» – die deutsche Befragung wird nur im Abschnitt davor genannt; wer über die Seitennavigation einsteigt, liest die Zahl ohne Herkunft. Vorschlag: «In der deutschen Befragung fühlten sich …».
  - **Zuständig:** bauende Sitzung.

**Offen in W1 nach Runde 2**

| Punkt | Zuständig |
| --- | --- |
| W1-09 Rest (Abrufdatum, Obsan-Bulletin, PatG § 19, NVL-Kapitel Suizidalität) | bauende Sitzung vor der Veröffentlichung |
| W1-10 Rest und W1-27 (Aussagen ohne deckende Quelle) | bauende Sitzung, Fachstelle bei Streichungen |
| W1-17 / W1-F-15 (Abgleich Boot und Heft) | Fachstelle |
| W1-21 / W1-F-11 (Betreuungsgutschriften, Kurzurlaub) | Fachstelle mit rechtlicher Prüfung |
| W1-F-19 (Angebote) | Fachstelle |
| W1-F-21 (fachliche Freigabe der Texte und der elf Visualisierungen) | Fachstelle |
| W1-25 (Prüfung am Original) | Prüfsitzung mit Zugriff auf die Originale |
| W1-26, W1-28 bis W1-30 | bauende Sitzung |

#### Prüfrunde 3 · Nachprüfung der Umsetzung (11.10.2026, Stand `9ff948b`)

**Geprüft durch:** dieselbe Prüfsitzung (Claude Code, hat nicht gebaut). Keine Inhalte und kein Code geändert.

**Grundlage:**
- Commits `56b0597`, `a34018b`, `980ab79` und `9ff948b` seit `f413f69`.
- Der sichtbare Text aller acht Seiten vorher und nachher, Satz für Satz verglichen: 61 geänderte Stellen, Skript der Prüfsitzung. `site.config.json` mit `git diff` gelesen.
- Neue Quellen über PubMed geprüft, Fiske et al. 2009 im Volltext.
- Entscheide der Fachstelle vom 11.10.2026 (oben unter «Von der Fachstelle entschieden»).

**Nachgemessen:**
- Gate draft: 0 blockierend, 13 Hinweise (11 `visual-approval`, `site-url`, `review-report`).
- Selbsttest 53/53.
- Gerenderte Seiten identisch mit den gebauten (8 von 8).
- 227 interne Links und Sprungziele ohne Fehler; kein `tel:`.
- Kein horizontaler Überlauf bei 1280, 360 und 320 px (Playwright); keine Konsolenfehler.

**Ergebnis:** W1-26 bis W1-30 sind erledigt, W1-27 mit einer Quelle, die alle Aussagen deckt. Für den Rest von W1-10 schlägt die Prüfsitzung drei Quellen vor. Mit dem Entscheid der Fachstelle entfällt W1-21 / W1-F-11. Neue W1-Befunde gibt es keine. Der Visualisierungsplan nennt bei der Waage noch die alte Fassung von W1-F-13 (V-02).

W1 bleibt **offen**. Gründe:
- Die Fachstelle entscheidet noch W1-F-15, W1-F-19 und W1-F-21.
- Die Prüfung am Original steht aus (W1-25).
- Die Quellenreste W1-09 und W1-10 setzt die bauende Sitzung um.

**Umsetzung der offenen Punkte aus Runde 2**

| Punkt | Umsetzung (Beleg) | Ergebnis |
| --- | --- | --- |
| W1-09 Rest | Die Suizidzahlen tragen jetzt die Quelle «Obsan Bulletin 11/2024: Psychische Gesundheit, Kennzahlen 2022». Laut Suchergebnis hat dieses Bulletin mit Begleitdokument ein Kapitel zu Suiziden; das Verhältnis Männer zu Frauen ist nicht am Original geprüft. **Offen:** Abrufdaten der Online-Quellen; PatG § 19. Beim NVL-Kapitel zur Suizidalität nennt die Quelle «Kapitel 2». Laut Suchergebnis heisst Kapitel 2 «Diagnostik und Monitoring», und ein eigenes Kapitel «Management bei Suizidalität und anderen Notfallsituationen» folgt später; welches gemeint ist, ist am Original zu klären | teilweise |
| W1-10 Rest | Tabelle «Aussagen ohne deckende Quelle» unten: 3 jetzt gedeckt, 3 Quellen vorgeschlagen, 3 nur am Original prüfbar | teilweise |
| W1-17 / W1-F-15 | unverändert; das Boot-Bild mit dem Heft abgleichen kann nur die Fachstelle | offen (Fachstelle) |
| W1-21 / W1-F-11 | Abschnitt «Arbeit und Geld» gestrichen (Entscheid der Fachstelle). Ohne Reste in Text, Seitennavigation, Visualisierungsplan (48 Zeilen), Seitenbeschreibung und Teaser auf `index`. Quellen OR Art. 329h/329i, BSV-FAQ und Merkblätter entfernt. «03 · Unterstützung» folgt auf «02 · Rechte» | entfällt (Entscheid) |
| W1-25 | Die Originale sind aus der Prüfumgebung weiterhin nicht erreichbar. Am 11.10.2026 lehnte der Proxy die Verbindungen zu fedlex.admin.ch, zh.ch, zhlex.zh.ch, leitlinien.de, register.awmf.org, obsan.admin.ch, bag.admin.ch, icd.who.int und familiencoach-depression.de ab; auch der Web-Abruf scheiterte | offen |
| W1-26 | `<li></ul>` kommt in `content/` und in den gebauten Seiten nicht mehr vor (Suche über alle Dateien) | erledigt |
| W1-27 | Fiske, Wetherell und Gatz 2009 stehen in den Quellen von `depression-verstehen` und `je-nach-rolle`. Volltext (PMC2852580): «Depressed older adults are less likely to endorse affective symptoms and more likely to display cognitive changes, somatic symptoms, and loss of interest»; Verlust: «bereavement more than tripled the risk of depression»; körperliche Krankheit: «late life depression frequently occurs in the context of medical illness»; behandelbar: «Treatments … are effective» | erledigt |
| W1-28 | `behandlung-und-verlauf` › `weg`: «Die ersten Wochen und Monate nach einem Klinikaustritt sind für die erkrankte Person oft eine verletzliche Zeit.» | erledigt |
| W1-29 | `je-nach-rolle` › `eltern`: «Und manche ringen damit, wie viel sie helfen und wie viel sie loslassen sollen.» | erledigt |
| W1-30 | `ihre-situation` › `was-belastet`: «In der deutschen Befragung fühlten sich etwa vier von zehn Angehörigen nicht gut informiert …» | erledigt |
| W1-16 / W1-F-13 | Figur `v-ro-spannung`: «… und sage dir, bevor ich etwas unternehme.» Der Plan `v-ro-spannung` › `statement` sagt noch «und frage, bevor ich etwas unternehme» | Figur erledigt; Plan: V-02 |

**Aussagen ohne deckende Quelle (W1-10 Rest)**

| Aussage | Stelle | Ergebnis | Beleg oder Vorschlag |
| --- | --- | --- | --- |
| «Körperliche Beschwerden, Gedächtnisprobleme und fehlender Antrieb … Traurigkeit wird seltener ausgesprochen. Eine Depression kann dann wie eine beginnende Demenz wirken.» | `depression-verstehen` › `anders` | gedeckt | Fiske et al. 2009, Volltext: «There is substantial co-morbidity of major depression and dementia, and differential diagnosis is often challenging»; «Major depression with cognitive impairment was once considered a form of reversible dementia» |
| «Schmerzen, Magen-Darm-Beschwerden oder Erschöpfung sind manchmal das Erste, was jemand in der Hausarztpraxis erzählt.» | `depression-verstehen` › `anders` | gedeckt | Simon et al. 1999 ([doi:10.1056/NEJM199910283411801](https://doi.org/10.1056/NEJM199910283411801)): «The range of patients with depression who reported only somatic symptoms was 45 to 95 percent (overall prevalence, 69 percent)»; «manchmal» ist vorsichtiger als die Studie |
| «In der Schwangerschaft und im ersten Jahr nach der Geburt können Mütter und auch Väter erkranken.» | `depression-verstehen` › `anders` | gedeckt | O'Hara und McCabe 2013 ([doi:10.1146/annurev-clinpsy-050212-185612](https://doi.org/10.1146/annurev-clinpsy-050212-185612)): Prävalenz 13 bis 19 %; Paulson und Bazemore 2010 ([doi:10.1001/jama.2010.605](https://doi.org/10.1001/jama.2010.605)): Väter 10,4 %, vom ersten Trimester bis zum ersten Jahr nach der Geburt |
| «Der ‹Baby Blues› in den ersten Tagen nach der Geburt ist häufig und vergeht von selbst.» | `depression-verstehen` › `anders` | Quelle fehlt; Vorschlag | Tosto V, Ceccobelli M, Lucarini E, et al. (2023): Maternity Blues: A Narrative Review. Journal of Personalized Medicine 13(1):154. [doi:10.3390/jpm13010154](https://doi.org/10.3390/jpm13010154) – «mild, transient, self-limited depressive symptoms, which can be developed in the first days after delivery»; «overall prevalence of 39%» |
| «… manchmal auch als Flucht in die Arbeit.» (Männer) | `depression-verstehen` › `anders` | Quelle fehlt; Vorschlag | von Zimmermann C, Hübner M, Mühle C, et al. (2023, Heft 2024): Masculine depression and its problem behaviors: use alcohol and drugs, work hard, and avoid psychiatry! European Archives of Psychiatry and Clinical Neuroscience 274(2):321–333. [doi:10.1007/s00406-023-01567-0](https://doi.org/10.1007/s00406-023-01567-0) – «Masculine depression … was predicted by … longer working times»; «applies equally to female and male patients» (passt zu «Diese Zeichen kommen auch bei Frauen vor»). Fall-Kontroll-Studie mit 163 Patientinnen und Patienten in stationärer Behandlung |
| «Manche beschreiben eine dauernde Wachsamkeit, die viel Kraft kostet.» | `ihre-situation` › `angst` | Quelle fehlt; Vorschlag | Hennipman-Herweijer C, et al. (2024): The experiences of living with a suicidal family member, and the impact on daily life: A systematic review and meta-aggregation. Journal of Psychiatric and Mental Health Nursing 31(5):883–903. [doi:10.1111/jpm.13045](https://doi.org/10.1111/jpm.13045) – «The constant worry of losing their relative and ever-present vigilance dominates their lives»; ergänzend Nosek 2008 ([doi:10.3928/02793695-20080501-11](https://doi.org/10.3928/02793695-20080501-11)): «Maintaining Vigilance Through Managing» bei depressiven und suizidalen Familienmitgliedern |
| «Online-Programm ‹Familiencoach Depression›: … verringerte das kostenlose Programm die psychische Belastung von Angehörigen leicht, und die Wirkung hielt drei Monate an.» | `fuer-sich-sorgen` › `was-hilft` | teilweise gedeckt | Schramm et al. ([doi:10.1016/j.lanepe.2025.101560](https://doi.org/10.1016/j.lanepe.2025.101560)), Volltext: «leicht» stimmt (K-10 −1,45 und −0,89 Punkte gegenüber Kontrolle, «the intervention effects are rather small»); «drei Monate» stimmt («The results were sustainable three months after randomisation»). Den Programmnamen und «kostenlos» nennt die Studie nicht: Website des Programms am Original (W1-25) |
| «… beurteilt wird sie drei bis vier Wochen, nachdem die passende Dosis erreicht ist.» | `behandlung-und-verlauf` › Abb. 1 | nur Suchergebnis | Laut Suchergebnis nennt das NVL-Patientenblatt «Antidepressiva» die volle Wirksamkeit «nach etwa 3 bis 4 Wochen»; die Empfehlung der Fachversion ist nicht am Original geprüft (W1-25) |
| «Zuhören, allgemein informieren und Sie beraten dürfen Fachpersonen immer.» | `rechte-und-angebote` › Abb. 1, Kernaussage | nicht prüfbar | BAG 2021, nicht am Original geprüft (W1-25) |

**Neue Inhalte geprüft** (alle in Runde 3 geänderten Stellen; Satz für Satz)

- **Fachlich unverändert umformuliert:**
  - «Tagesklinik (Behandlung tagsüber, die Nächte zu Hause)».
  - «wenn eine dazu berechtigte ärztliche Fachperson sie anordnet, etwa in der Hausarztpraxis oder in der Psychiatrie» (Art. 11b KLV: berechtigt sind nach Kenntnis der Prüfsitzung u. a. Fachärztinnen und Fachärzte für Allgemeine Innere Medizin, also die meisten Hausarztpraxen; Original nicht geprüft, W1-25).
  - «Sie sollen nicht abrupt abgesetzt werden, sondern langsam und in Absprache mit der Ärztin oder dem Arzt» (S-17, von der Fachstelle mit gleichem Sinn bestätigt).
  - «Kritik in der Familie hängt mit Rückfällen zusammen.»: Butzlaff und Hooley 1998 gilt für mehrere Diagnosen; die Seite handelt von Depression.
  - «Die erkrankte Person kann Sie ausdrücklich als Bezugsperson bezeichnen.»
- **Gestrichen, mit Entscheid oder Befund:**
  - der Abschnitt «Arbeit und Geld» (W1-F-11);
  - «Sie dürfen die Veränderungen ansprechen.» (S-15);
  - «Studien weisen darauf hin, dass sich die Qualität einer Beziehung und eine Depression gegenseitig beeinflussen.» (S-23, die Aussage steht in der Einleitung);
  - «Mehr dazu unter Was Sie sehen und was dahinter liegen kann.» (S-03, jetzt Link im Satz);
  - die ausführliche Regel zur Bezugsperson in `vorsorge` (S-20, die Regel steht vor Abb. 1).
- **Kein still entfallener Satz:** Jede der 61 Stellen ist einem Befund oder Entscheid zugeordnet.

#### Prüfrunde 4 · Nachprüfung der Umsetzung (11.10.2026, Stand `e63bd73`)

**Geprüft durch:** zweite Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und die Runden 1 bis 3 nicht durchgeführt (unabhängige Prüfung im Sinn von «Prüftiefe»; sie kennt die erste Prüfung nur aus diesem Bericht). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 2.

**Grundlage:**
- Alle Commits im Website-Ordner seit `9ff948b`: `b64516c`, `69b2a8c`, `09e6262`, `51892c5` (Website), dazu `a30e65e`, `cf5bba9` (nur Prüfbericht); gemergt mit `e63bd73`. `site.config.json` mit `git diff` gelesen.
- Der sichtbare Text aller acht Inhaltsseiten vorher (`9ff948b`) und nachher (`e63bd73`), Satz für Satz verglichen (Skript der Prüfsitzung): 30 geänderte Stellen auf 8 Seiten, davon 11 PDF-Kennzeichnungen, ohne Kopf und Fusszeile (dort neu: «Menü» und «Impressum · Datenschutz»).
- Neu: `content/impressum-datenschutz.html`, `content/404.html`, Seitenvertrag `legal`, Seiten `impressum-datenschutz` und `404`, ganz gelesen.
- Die drei neuen Quellen über PubMed geprüft (Metadaten und Zusammenfassung, PMID 36675815, 36855002, 38470095).
- Kein Umbau: Der Abgleich von 20 Aussagen mit einem Bestand entfällt wie in Runde 1.

**Ergebnis:** Die drei vorgeschlagenen Quellen sind richtig eingetragen und decken die Aussagen; «kostenlos» beim Familiencoach ist gestrichen. Kein Satz ist still entfallen. Impressum, Datenschutz und 404-Seite sind sachlich stimmig bis auf einen Widerspruch im Datenschutz (W1-31). W1 bleibt **offen**: Es fehlen die Entscheide W1-F-15, W1-F-19 und W1-F-21, die Prüfung am Original (W1-25 mit den Resten von W1-09 und W1-10) und die rechtliche Prüfung von Impressum und Datenschutz.

**Kennzahlen der bauenden Sitzung, nachgerechnet** (Eintrag «Profil 2026.10.1 übernommen» und Teil A vom 11.10.2026)

| Angabe der bauenden Sitzung | Nachgerechnet (zweite Prüfsitzung) | Ergebnis |
| --- | --- | --- |
| `build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise | `build.mjs` schreibt Dateien und wurde nicht ausgeführt. Alle 10 Seiten mit `tools/contract.js` im Speicher gerendert: 10 von 10 identisch mit den committeten Seiten; `sitemap.xml` identisch mit der aus `siteUrl` erzeugten. `node tools/gate.mjs`: «Gate draft: 0 blockierend, 12 Hinweise» (11 × `visual-approval`, 1 × `review-report`) | bestätigt |
| Selbsttest 65/65 | `node tools/gate.mjs --selftest`: «Selbsttest: 65/65 bestanden.» | bestätigt |
| `--production` blockiert nur 11 × `visual-approval` und `review-report` | «Gate production: 12 blockierend, 0 Hinweise», Exit 1; `export.mjs … --production` bricht mit Exit 1 ab und schreibt nichts | bestätigt |
| Playwright, 10 Seiten bei 1280 und 360 px: kein Überlauf, keine Konsolenfehler | 10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px: `scrollWidth − clientWidth` = 0, 0 Elemente über dem rechten Rand; mit der CSP aus `_headers`: 0 Konsolenfehler, 0 CSP-Verstösse | bestätigt (erweitert) |
| Kopf 180 px bei 1280 und 270 px bei 360 px (vorher 592 px) | 180 px bei 1024 bis 1440 px, 256 px bei 768 px, 270 px bei 360 px, 294 px bei 320 px (alle 10 Seiten gleich); `h1` der Startseite bei 360 px auf y = 378 | bestätigt |
| Menü bei 320 px mit reduzierter Bewegung: Tab-Folge, Enter, Tab, Escape | auf allen 10 Seiten nachgestellt: Tab 1 «Zum Hauptinhalt» (153 × 44), Tab 2 Logo-Link, Tab 3 «Menü» (`aria-expanded="false"`, 280 × 44); Enter → `true`, 8 Links, je mindestens 44 px, `aria-current` auf der jeweiligen Seite (keins auf Impressum und 404, richtig); Tab → «Übersicht»; Pfeil ab, Ende; Escape → `false`, Fokus auf «Menü»; kein Überlauf | bestätigt |
| Druck `ihre-situation` (A4, 9 Seiten): Vertiefungen beider Figuren gedruckt | Vertiefungen gedruckt (Satzteil «Grenzen: Nicht jede Familie …» im PDF). Seitenzahl mit Chromium 141, `page.pdf` A4, Standardränder: 10 statt 9 Seiten; die Abweichung hängt von den Druckeinstellungen ab | bestätigt (Seitenzahl abweichend) |
| Plan 51 Zeilen (48 + 2 + 1), 11 Darstellungen | 51 Zeilen: 4, 6, 7, 7, 8, 6, 6, 4, 2, 1; 11 mit `format` ≠ `text` | bestätigt |
| 50 englische Titel mit `lang="en"`: begleiten 3, behandlung 4, depression-verstehen 13, fuer-sich-sorgen 8, ihre-situation 9, je-nach-rolle 13 | gebaute Seiten: 3, 4, 13, 8, 9, 13 = 50 × `lang="en"`; ausserhalb von `lang="en"` stehen in den Quellenlisten nur Namen, Jahre und Zeitschriftentitel (Suche nach englischen Funktionswörtern je Listeneintrag) | bestätigt |
| 11 Links auf 7 PDF-Dateien mit «(PDF)» | 11 Links mit `.pdf`, alle 11 mit «(PDF)», 7 verschiedene Dateien | bestätigt |
| keine `←` `→` in `content/`; 0 × `puk-vis-balance__key`; kein Kurztext mit «gleiche Höhe» | je 0 Treffer | bestätigt |
| 0 Treffer für `textarea`, `input`, `contenteditable` in `content/` | 0 Treffer, auch kein `form` | bestätigt |
| Seite lädt nur `Rubik-Light`, `-Regular`, `-Medium` | Export, alle 10 Seiten: genau diese 3 Schriftdateien, 7 Anfragen, 315–338 kB | bestätigt |
| Bildschirmfotos nicht im Repository | `git ls-files` im Website-Ordner: als Bilddateien nur `assets/favicon.svg` und `assets/logo.svg` | bestätigt |
| (neu) interne Verweise | 296 interne Links, Sprungziele und lokale Ressourcen auf 10 Seiten, 0 fehlerhaft; 0 × `tel:` | – |
| (neu) externe Adressen | 69 verschiedene externe Adressen ohne die kanonischen Links (vorher 66, dazu 3 neue Quellen) | – |

**Umsetzung der offenen W1-Punkte aus Runde 3**

| Punkt | Umsetzung (Beleg) | Ergebnis |
| --- | --- | --- |
| W1-10 Rest, Quelle «Baby Blues» | `depression-verstehen` › Quellen: «Tosto V, Ceccobelli M, Lucarini E, et al. (2023): Maternity Blues: A Narrative Review. Journal of Personalized Medicine 13(1)», DOI 10.3390/jpm13010154, «Verwendung: «Baby Blues» häufig und vorübergehend.» Laut PubMed: Autorinnen und Autoren, Titel, Zeitschrift, Band und Heft stimmen; Zusammenfassung: «mild, transient, self-limited depressive symptoms, which can be developed in the first days after delivery», «overall prevalence of 39%». Deckt «ist häufig und vergeht von selbst» | erledigt |
| W1-10 Rest, «Flucht in die Arbeit» | «von Zimmermann C, Hübner M, Mühle C, et al. (2023): Masculine depression and its problem behaviors: use alcohol and drugs, work hard, and avoid psychiatry! European Archives of Psychiatry and Clinical Neuroscience 274(2)», DOI 10.1007/s00406-023-01567-0. Laut PubMed stimmen alle Angaben; «predicted by … longer working times», «applies equally to female and male patients». Deckt «manchmal auch als Flucht in die Arbeit» und «Diese Zeichen kommen auch bei Frauen vor» | erledigt |
| W1-10 Rest, «dauernde Wachsamkeit» | `ihre-situation` › Quellen: «Hennipman-Herweijer C, van Nieuw Amerongen-Meeuse J, Schaap-Jonker H, Boonstra N (2024): The experiences of living with a suicidal family member, and the impact on daily life: A systematic review and meta-aggregation. Journal of Psychiatric and Mental Health Nursing 31(5)», DOI 10.1111/jpm.13045. Laut PubMed stimmen Titel, Zeitschrift, Band und Heft; «ever-present vigilance dominates their lives». «Verwendung: … alle Diagnosen, nicht nur Depression» benennt die Population | erledigt |
| W1-10 Rest, Familiencoach | «das kostenlose Programm» → «das Programm» (Entscheid der Fachstelle). Den Programmnamen nennt die Studie weiterhin nicht; Website des Programms am Original prüfen (W1-25) | teilweise (Original) |
| W1-10 Rest, «drei bis vier Wochen», BAG «allgemein informieren» | unverändert; nur am Original prüfbar | offen (W1-25) |
| W1-09 Rest | Abrufdaten fehlen weiterhin (0 Treffer «abgerufen» in `content/`); PatG «§§ 2a, 15 Abs. 2, 19» und NVL «Kapitel 2» auf `begleiten` unverändert, nicht am Original geprüft | offen (W1-25) |
| W1-17 / W1-F-15, W1-F-19, W1-F-21 | unverändert; alle 11 Figuren `approvalStatus` «ausstehend» | offen (Fachstelle) |
| W1-25 | Originale aus der Prüfumgebung weiterhin nicht erreichbar | offen |

**Geänderte Stellen, Satz für Satz** (30 Stellen, hier nach Grund zusammengefasst; jede einem Befund oder Entscheid zugeordnet)

| Seite | Stelle | Grund | Fachlich |
| --- | --- | --- | --- |
| alle 8 | Quellenzeilen mit «(PDF)» (11 Links) | BD-09 / W3-10 | unverändert |
| `depression-verstehen` | zwei neue Quellen, Fiske «Verwendung: …; kann wie eine beginnende Demenz wirken.» | W1-10 | gedeckt (oben) |
| `behandlung-und-verlauf` › Abb. 1 | Kurztext «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge; …» | V-01 | unverändert |
| `behandlung-und-verlauf` › Abb. 3 | Endbeschriftungen ohne «←» «→» | W3-09 | unverändert |
| `behandlung-und-verlauf` › Quellen | Cipriani et al. 2018 mit vollständigem Titel | Hinweis der bauenden Sitzung | unverändert |
| `ihre-situation` › `was-belastet` | «Dagegen lässt sich etwas tun: Mehr dazu unter Was Sie erfahren und was Sie immer sagen dürfen.» statt «Was Sie erfahren und mitteilen dürfen, steht unter Rechte und Angebote.» | BD-10 | gleichwertig |
| `ihre-situation` › Abb. 1 | zwei Sätze zu einem verbunden, Wortlaut gleich | V-04 | unverändert |
| `ihre-situation` › Abb. 2 › Vertiefung | «Grenzen: Nicht jede Familie …» | V-05 | Wortlaut der Fachstelle |
| `ihre-situation` › Quellen | Hennipman-Herweijer et al. 2024 | W1-10 | gedeckt |
| `je-nach-rolle` › `kinder` | «Freundinnen, Freunde und Hobbys»; «Institut Kinderseele Schweiz (kinderseele.ch)» | S-30; BD-09 | unverändert |
| `je-nach-rolle` › Abb. 1 | Satz zum Balken gestrichen; drei Schlüssel entfernt | V-03; V-06 | unverändert |
| `je-nach-rolle` › `erwachsene-kinder` | «VASK Zürich (vaskzuerich.ch)» | BD-09 | unverändert |
| `fuer-sich-sorgen` › `grenzen` | Strichpunkt statt Komma | S-29 | unverändert |
| `fuer-sich-sorgen` › `was-hilft` | «das Programm» statt «das kostenlose Programm» | Entscheid Fachstelle | Aussage entfernt, nicht belegt |
| `rechte-und-angebote` › Abb. 1 | Satz «Gleiche Merkmale stehen auf gleicher Höhe.» ersetzt; der Ersatzsatz stand dort schon in der Kurzbeschreibung | V-01 | unverändert |
| `rechte-und-angebote` › `vorsorge` | «steht im Abschnitt Was Sie erfahren …» statt «steht oben» | S-28 | unverändert |

**Neue Seiten**

| Stelle | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| `impressum-datenschutz` › `impressum` | stimmig mit dem Entscheid W3-05: Herausgeberin Fachstelle Angehörigenarbeit, «kein offizielles Angebot der Psychiatrischen Universitätsklinik Zürich»; Kontakt per E-Mail; Haftung für verlinkte Websites; Hinweis «ersetzt keine individuelle Abklärung, Beratung oder Behandlung» wie in der Fusszeile. Keine Postadresse (Prüfbedarf der bauenden Sitzung) | `content/impressum-datenschutz.html` | S-32, W1-32 |
| `impressum-datenschutz` › `datenschutz` | deckungsgleich mit dem Code in diesen Punkten: keine Cookies (0 Cookies, 0 Web Storage nach dem Laden aller 10 Seiten im Export), keine Auswertung, keine Formularfelder, Schriften, Bilder und Skripte von derselben Herkunft (alle Anfragen gleiche Herkunft). Widerspruch zu Netlify | Abschnitt «Protokolle beim Betrieb» | W1-31 |
| `404` | sachlich richtig, Rückweg zur Übersicht; im Export mit Pfaden ab dem Stamm (unter `/gibt/es/nicht.html` geladen: Schrift, Logo, Menü und Link funktionieren) | `content/404.html`, Export | – |

#### Neue Befunde W1, Runde 4

- **W1-31 · wichtig · Datenschutz: «keine Daten an andere Anbieter» widerspricht dem Abschnitt zu Netlify (Prüfbedarf, rechtlich).**
  - **Beleg:** `impressum-datenschutz` › `datenschutz`: «Keine Dienste anderer Anbieter: Schriften, Bilder und Skripte liegen auf demselben Server wie die Seiten. Beim Lesen gehen keine Daten an andere Anbieter.» Zwei Einträge weiter: «Die Website wird über den Dienst Netlify (Netlify, Inc., USA) ausgeliefert. Netlify speichert beim Aufruf einer Seite technisch notwendige Angaben, zum Beispiel IP-Adresse, … Diese Angaben können auch in den USA bearbeitet werden.» Für Lesende ist Netlify ein anderer Anbieter. Leitlinie «Technische Qualität» C: Datenschutzerklärung «deckungsgleich mit dem, was der Code tatsächlich tut». Nicht geprüft und nicht zu entscheiden für die Prüfsitzung: welches Recht gilt (die PUK ist eine kantonale Anstalt; IDG ZH oder DSG), ob die verantwortliche Stelle ausdrücklich genannt werden muss und ob die Aufbewahrungsdauer der Protokolle dazugehört.
  - **Vorschlag** (Wortlaut nach rechtlicher Prüfung): «Schriften, Bilder und Skripte kommen von derselben Adresse wie die Seiten. Ausser dem Dienst, über den die Website ausgeliefert wird (siehe «Protokolle beim Betrieb»), erhält beim Lesen kein anderer Anbieter Daten.»
  - **Zuständig:** Fachstelle mit rechtlicher Prüfung (PUK), danach bauende Sitzung.
- **W1-32 · optional · Impressum und Datenschutz ohne sichtbaren Prüfvermerk.**
  - **Beleg:** `rechte-und-angebote` trägt im Kopf «Rechtliche Angaben: Stand 10.10.2026, rechtliche Prüfung ausstehend.»; `impressum-datenschutz` hat keinen solchen Vermerk, obwohl die Datenschutzangaben laut bauender Sitzung «rechtlich prüfen lassen» sind (Abschnitt «Umgesetzt», Profil 2026.10.1). Nur die Fusszeile sagt allgemein «Musterentwurf … fachliche Prüfung ausstehend».
  - **Vorschlag:** bis zur rechtlichen Prüfung denselben Vermerk wie auf `rechte-und-angebote` setzen.
  - **Zuständig:** bauende Sitzung.

**Offen in W1 nach Runde 4**

| Punkt | Zuständig |
| --- | --- |
| W1-F-15 (Boot und Arbeitsheft), W1-F-19 (Angebote), W1-F-21 (fachliche Freigaben) | Fachstelle |
| W1-31 (Datenschutz, rechtlich), W1-32 | Fachstelle mit PUK; bauende Sitzung |
| W1-25 mit den Resten von W1-09 und W1-10 | Prüfsitzung oder Person mit Zugriff auf die Originale |

#### Prüfrunde 5 · Nachprüfung der Umsetzung (12.10.2026, Stand `5f68c39`)

**Geprüft durch:** dritte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und die Befunde, die sie hier nachprüft, nicht umgesetzt (die Umsetzung stammt von der zweiten Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 3.

**Grundlage:**
- Commits seit `e63bd73`: `3243e52` (nur Prüfbericht, #27), `8d24d95` (R2-01, W1-32; #28), `39cb2c4` (R2-02 bis R2-07; #29), `21a7603` (V-08, V-09, S-31, S-32, R1-03; #31), zusammengeführt bis `5f68c39`. `git diff --stat e63bd73 5f68c39`: 20 Dateien, alle im Website-Ordner; `components/`, `templates/website/longform/` und das Stamm-`_headers` sind unverändert.
- Der Text der 10 gebauten Seiten an vier Ständen (`e63bd73`, `bd7c3f6`, `48f46ba`, `5f68c39`), Satz für Satz verglichen (Skript der dritten Prüfsitzung). Gezählt wurden die Textblöcke des ganzen `body` mit Kopf, Fusszeile, Text für Screenreader und Quellen. Satzgrenze ist «.», «!» oder «?» vor Grossbuchstabe, Ziffer oder «; Schlüssel und Bezeichnungen ohne Satzzeichen zählen als eigene Einheit. `content/` und `site.config.json` zusätzlich mit `git diff --word-diff` gelesen.
- Befunde und Vorschläge aus R2, Runde 1 (die zehn schwierigsten Stellen, Vorschläge zur Bildsprache), Visualisierungs-Check Runde 2, S Prüfrunde 3, W1 Prüfrunde 4 und R1 Runde 1.
- Kein Umbau: Der Abgleich von 20 Aussagen je Etappe entfällt. Verglichen wurden alle 33 geänderten Stellen.

**Ergebnis:**
- Alle dreizehn Befunde sind umgesetzt wie beschrieben. Jede Abweichung vom Vorschlag ist begründet und vertretbar. Eine Abweichung ist im Eintrag der bauenden Sitzung nicht als solche gekennzeichnet (Entstehung, Teil 3); sie ist gleichwertig.
- Alle 33 geänderten Stellen gehören zu einem dieser Befunde. Keine Aussage ist still entfallen: Jeder gestrichene Satz beschrieb die Zeichnung und steht sinngemäss in der Kurzbeschreibung für Screenreader oder wurde durch einen Satz zum Inhalt ersetzt. Die Zahlen in den geteilten Sätzen (R2-07) sind unverändert.
- Neu und ohne eigene Quelle sind die Erklärungen aus R2-03, die Beispielsätze aus R2-05, die Sätze im Kreislauf (R2-04) und die neuen Kurztexte aus R2-01. Sie sind nicht freigegeben, sondern Prüfbedarf für W1-F-21.
- Keine neuen Befunde. W1 bleibt **offen**: W1-F-15, W1-F-19, W1-F-21, W1-25 mit den Resten von W1-09 und W1-10, W1-31.

**Nachprüfung je Befund**

| Befund | Umsetzung (Beleg) | Abweichung vom Vorschlag und Beurteilung | Ergebnis |
| --- | --- | --- | --- |
| R2-01 (Website-Teil) | Kurztexte von Schichtenmodell, Vergleich der Behandlungen, Pfad, Kontinuum, Kreislauf, Netz und Rechte-Vergleich; Schlüssel «Weg A/B · … Linie» und «Spalte A/B · … Linie» entfernt; Gefäss «· beim Abfluss»; Entstehung Teil 1 und 3 (Wortlaut in der Tabelle unten). Kein Kurztext (`p.puk-vis-short`) nennt mehr Wasserlinie, Linienart, Linienstärke, Nummer oder Abstand zur Mitte. Die Kurzbeschreibungen für Screenreader beschreiben weiterhin die Zeichnung, wie es R2, Punkt 22 verlangt | (a) Schichtenmodell: «ist nicht alles» statt «ist oft nur ein kleiner Teil». Vertretbar: keine Mengenaussage ohne Quelle; das Verhältnis zeigt die Zeichnung. Nebenwirkung: ein Satz mit Verneinung mehr auf der Seite (19 → 20). (b) Vergleich der Behandlungen, neuer erster Satz «Die Übersicht beantwortet Fragen, die Angehörige oft stellen: …». Vertretbar: Der Kurztext hätte sonst nur einen Satz (Leitlinie 07: zwei bis vier); der Satz nennt drei der vier Merkmale und beschreibt nicht die Grafik. «die Angehörige oft stellen» ist eine redaktionelle Aussage ohne Quelle (W1-F-21). (c) Pfad ohne «Die meisten beginnen in der Hausarztpraxis.». Vertretbar: «die meisten» wäre stärker als «oft» in der Kernaussage und ist nicht belegt. (d) Kreislauf vorsichtiger («können», «eher»), Station 4 ohne Person. Vertretbar; die Begründung (R2-04 noch offen) ist mit #29 überholt, der Satz bleibt richtig (S-33, optional). (e) Entstehung, Teil 3: «Wer sehr verletzlich ist, erreicht sie schon mit wenig Belastung; bei anderen braucht es viel.» statt «… braucht wenig Belastung, bis eine Depression beginnt; …» (Vorschlag Nr. 8). Nicht als Abweichung gekennzeichnet; gleichwertig, bezieht sich auf die Schwelle im Bild und wiederholt «eine Depression beginnt» aus dem Satz davor nicht. Profil-Teil festgehalten (Offene Punkte › Profil) | erledigt (Website-Teil) |
| R2-02 (Website-Teil) | `behandlung-und-verlauf` › Abb. 1: Die Spalte «Antidepressiva» trägt nicht mehr `puk-vis-compare__col--b`; beide Spalten haben eine durchgezogene Oberkante (Bildschirmfotos 1280 und 360 px, Theme «kontrast») | Bewusst nicht geändert: gestrichelte Spalte «Mit Einverständnis» (Rechte), Schwelle (Entstehung), Rahmen «Was die Person erleben kann» (Schichtenmodell), doppelte Linie bei «Loslassen» (Waage). Vertretbar: Gestrichelt heisst damit auf der Website überall «möglich, unter einer Bedingung», ausser bei der Schwelle (übliche Darstellung einer Grenzlinie). Die doppelte Linie der Waage gehört zu Muster H (Profil) | erledigt (Website-Teil) |
| R2-03 | «angeleitete Selbsthilfe (Übungen nach einem Programm, begleitet von einer Fachperson)»; Psychotherapie: «Die erste setzt an belastenden Gedanken und Gewohnheiten an, die zweite an Beziehungen und Veränderungen im Leben.»; Vertiefung: «Wenn mehrere Behandlungen nicht geholfen haben, kommen weitere Verfahren in Frage. Dazu gehören …» | Je in zwei Sätze geteilt (11 + 17 und 11 + 24 Wörter): vertretbar, im Sinn von R2-07. Die Abkürzungen «EKT» und «rTMS» entfallen: für die Lesbarkeit vertretbar; weil Angehörige in Kliniken oft «EKT» hören, gehört die Frage zu W1-F-21. «etwa … oder» wird «Dazu gehören … und»: weiterhin keine abschliessende Liste. Wortlaut der Erklärungen: Prüfbedarf W1-F-21 | erledigt (Wortlaut: W1-F-21) |
| R2-04 | Stationen «Er zieht sich zurück und ist gereizt.» – «Ich mache mir Sorgen, treibe an und übernehme.» – «Ich bin erschöpft und werde ungeduldig.» – «Er fühlt sich unverstanden.»; Kurzbeschreibung und `statement` gleich | Variante 2 (Kästen bleiben): vertretbar, Variante 1 bräuchte eine Änderung an Muster B. Station 4 ist der erkrankten Person zugeordnet, mit Verweis auf den freigegebenen Plan («die Person fühlt sich unverstanden und zieht sich weiter zurück»; Station 1 dort «Die Depression zeigt sich»). Die Lesart ist naheliegend; der Prüfbedarf aus R2 war aber an die Fachstelle gerichtet. Bestätigung mit W1-F-21 | erledigt (Bestätigung: W1-F-21) |
| R2-05 | Pfad: «So könnte es klingen: «Soll ich dir helfen, einen Termin zu finden? Ich komme gern mit.»»; Kreislauf: «So könnte es klingen: «Ich merke, dass ich ungeduldig werde. Das liegt an meiner Müdigkeit, nicht an dir.»» | wortgleich. Ort: im Pfad nach «… wenn die Person das möchte.», im Kreislauf nach «… hilft oft mehr als ein Vorwurf.»; passt jeweils. Wortlaut: Prüfbedarf W1-F-21 | erledigt (Wortlaut: W1-F-21) |
| R2-06 | `fuer-sich-sorgen` › `erlaubt`: «Eigene Kontakte, Hobbys und Erholung sind wichtig, auch jetzt.»; › `grenzen`: «Eine kurze Begründung genügt.» | wortgleich. Leichte Verschiebung: Vorher brauchte eine Grenze «keine lange Begründung» (auch gar keine war denkbar); jetzt «genügt» eine kurze. Im Sinn des Vorschlags, für die Fachstelle unbedenklich | erledigt |
| R2-07 | `index` › `einstieg`, `je-nach-rolle` › `partner` und › `kinder` an der Zahl geteilt, wortgleich mit dem Vorschlag; zusätzlich `behandlung-und-verlauf` › `verlauf` | Der Satz in `verlauf` stand im Lesetest von R2 mit «optional (R2-07)»: vertretbar. Zahlen unverändert: «fast drei Viertel», «Sechs von zehn», «48 von 100», «4 von 100», «die Hälfte» nach drei Monaten, «drei Viertel» nach einem Jahr | erledigt |
| W1-32 | `impressum-datenschutz` › Kopf: «Musterentwurf: noch nicht fachlich geprüft. Rechtliche Angaben: Stand 11.10.2026, rechtliche Prüfung ausstehend.» als `p.puk-longform__boundary`, gleich gebaut wie auf `rechte-und-angebote` | keine | erledigt |
| V-08, V-09 | siehe Visualisierungs-Check, Runde 3 | V-08 vertretbar, V-09 keine | erledigt (Website-Teil) |
| S-31, S-32 | siehe S, Prüfrunde 4 | S-32: zweiter Satz anders, vertretbar | erledigt (Wortlaut S-32: W1-31) |
| R1-03 | siehe R1, Runde 2 | keine | erledigt |

**Kennzahlen der bauenden Sitzung, nachgerechnet** (Einträge vom 11.10.2026 zu R2-01 und W1-32, zu R2-02 bis R2-07 und zu V-08 bis R1-03)

| Angabe der bauenden Sitzung | Nachgerechnet (dritte Prüfsitzung) | Ergebnis |
| --- | --- | --- |
| `build.mjs` → 10 Seiten, Build r4-8, Gate draft 0 blockierend, 12 Hinweise; gerenderte Seiten identisch mit den gebauten; `sitemap.xml` unverändert | `build.mjs` in einer getrennten Arbeitskopie von `5f68c39` ausgeführt (Git-Worktree im Scratchpad): «10 Seiten geschrieben · … · Build r4-8 · Gate draft: 0 blockierend, 12 Hinweise.» Danach war `git status` leer; alle 10 Seiten und `sitemap.xml` sind also byte-gleich mit den committeten. Im Repository: `node tools/gate.mjs` → «Gate draft: 0 blockierend, 12 Hinweise» (11 × `visual-approval`, 1 × `review-report`) | bestätigt |
| `--production` → 12 blockierend wie vorher | «Gate production: 12 blockierend, 0 Hinweise»; `export.mjs … --production` bricht mit Exit 1 ab und schreibt nichts | bestätigt |
| (nicht angegeben) Selbsttest | `node tools/gate.mjs --selftest` → «Selbsttest: 65/65 bestanden.» | – |
| Satzvergleich R2-01: 16 entfernt oder geändert, 17 neu, verteilt auf 6 Seiten; übrige 4 Seiten 0 | `e63bd73` → `bd7c3f6`: 19 entfernt oder geändert, 16 neu, auf denselben 6 Seiten (behandlung-und-verlauf 6/3, depression-verstehen 5/5, fuer-sich-sorgen 2/2, ihre-situation 3/4, impressum-datenschutz 0/2, rechte-und-angebote 3/0); übrige 4 Seiten 0. Mit Trennung auch am Strichpunkt: 21/17. Die Zählweise der bauenden Sitzung («gezählt an Satzzeichen, auch Schlüssel und Bezeichnungen») liess sich nicht genau nachbilden | nicht reproduziert; ohne inhaltliche Folge, weil jede Änderung unten zugeordnet ist |
| Satzvergleich R2-02 bis R2-07: Änderungen nur auf 5 Seiten, jede zugeordnet, kein Satz still entfallen | `bd7c3f6` → `48f46ba`: 13 entfernt oder geändert, 24 neu, nur auf `index`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle` und `fuer-sich-sorgen`; jede Stelle zugeordnet (Tabelle unten) | bestätigt |
| Satzvergleich #31: 15 geändert, 15 neu (10 Fusszeile, 1 Legende, 1 Vertiefung, 3 Impressum); Satzzahl je Seite gleich | `48f46ba` → `5f68c39`: 15/15 in genau dieser Aufteilung; Einheiten je Seite vorher und nachher gleich | bestätigt |
| Verneinungsanteil `fuer-sich-sorgen` 34 % → 30 % | Zählweise aus R2, Teil 3, als Skript nachgebaut; es ergibt für `e63bd73` dieselben Werte wie R2, ausser bei «Behandlung und Verlauf» 103 statt 102 Sätze. `fuer-sich-sorgen`: 17 von 50 → 15 von 50 Sätzen; entfallen sind «… sind keine Nebensache.» und «Sie braucht keine lange Begründung.» | bestätigt |
| Sätze über 25 Wörter auf den acht Inhaltsseiten 12 → 7; die 7 verbleibenden Stellen | 12 → 7, dieselben 7 Stellen. Von den 5 weggefallenen sind 4 geteilt (R2-07: `index`, `verlauf`, `partner`, `kinder`). Der fünfte ist ein Zählartefakt: Beim Gefäss bilden Bezeichnung und Satz des Ansatzpunkts in der Zählweise einen Textblock («Ansatzpunkt für Angehörige · beim Abfluss, doppelter Ring» + «Hier lässt sich …»), vorher 26, nach R2-01 24 Wörter. Der Satz selbst war nie über 25 Wörter lang | bestätigt (mit Erklärung) |
| Kreislauf: 0 überlappende Beschriftungen bei 768, 900, 1024, 1280, 1440 px und mit 200 % Schrift bei 768 bis 1440 px | 0 Überlappungen bei 360, 768, 900, 1024, 1280 und 1440 px mit 16 und 32 px Standardschrift (12 Messungen, 21 bzw. 22 Textknoten); ebenso in den übrigen 10 Figuren. Die Messung erfasst die Verbindungsstriche in der Listenansicht nicht (V-10) | bestätigt (erweitert) |
| 10 Seiten × 320, 360, 768, 1024, 1280, 1440 px mit CSP: kein Überlauf (60 von 60), 0 Konsolenfehler, 0 CSP-Verstösse, nur Anfragen an den eigenen Server | 10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px (70 Messungen) mit der CSP aus `_headers` per Route: `scrollWidth − clientWidth` = 0, 0 Elemente über dem rechten Rand, 0 Konsolenfehler, 0 CSP-Verstösse, 0 Anfragen an fremde Server; jede Antwort mit CSP-Header. Positivkontrolle: Ein eingefügtes Inline-Skript und ein `style`-Attribut werden als Verstoss gemeldet. Dazu 60 Messungen mit 200 % Schrift (320 bis 1440 px): 0 Überlauf | bestätigt |
| Text-Kontrast auf 10 Seiten bei 1280 und 360 px: 0 unter der Schwelle | 10 Seiten × 1280/360 px × Standard-Theme und «kontrast», Vertiefungen und Menü offen: 5546 sichtbare Textknoten, 0 unter 4,5 : 1 (3 : 1 bei grosser Schrift); tiefster Wert 4,71 : 1 (#3C64FF auf Weiss, aktuelle Seite in der Navigation) | bestätigt |
| Menü bei 320 px auf 10 von 10 Seiten wie vorher | Stichprobe auf 3 Seiten (Bedienung, Runde 3): wie vorher | bestätigt (Stichprobe) |
| Vergleiche ohne Schlüssel: 0 px Versatz bei 768 und 1280 px | 0 px in allen Zeilen bei 768, 1024, 1280 und 1440 px | bestätigt |
| R1-03: Fusszeile auf 10 Seiten «Stand 11.10.2026»; 0 Treffer «Stand 10.10.2026 – fachliche» | 10 von 10 Seiten mit «Musterentwurf, Stand 11.10.2026 – fachliche Prüfung ausstehend», 0 mit «Stand 10.10.2026» in der Fusszeile | bestätigt |
| S-31: «wir», «uns», «unsere» nur in Beispielsätzen und im Begriff «Wir-Krankheit» | Suche im ganzen sichtbaren Text der 10 Seiten: «rufen wir zusammen an» (`begleiten`), «Wir hatten abgemacht» (`behandlung-und-verlauf`), «für uns beide» (`fuer-sich-sorgen`), «unsere Abende» und zweimal «Wir-Krankheit» (`je-nach-rolle`) | bestätigt |
| Kurzbeschreibungen 193 bis 367 Zeichen (Eintrag R2-01) | seit R2-04 193 bis 388 Zeichen (Kreislauf) | durch #29 überholt |

**Abgleich mit dem Bestand: jede geänderte Stelle** (`e63bd73` → `5f68c39`; 33 Stellen, eine davon auf allen 10 Seiten; Sprache siehe S, Prüfrunde 4)

| Nr. | Seite › Stelle | vorher | nachher | Befund | Fachlich (W1) |
| --- | --- | --- | --- | --- | --- |
| 1 | `behandlung-und-verlauf` › `behandelbar`, «Leichte Depression» | «… angeleitete Selbsthilfe, Psychotherapie.» | «… angeleitete Selbsthilfe (Übungen nach einem Programm, begleitet von einer Fachperson), Psychotherapie.» | R2-03 | neue Erklärung ohne eigene Quelle; Prüfbedarf W1-F-21 |
| 2 | › Abb. 1, Kurztext, Satz 1 | «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge; Beschriftung und Linienart unterscheiden die beiden Wege.» | «Die Übersicht beantwortet Fragen, die Angehörige oft stellen: wie die Behandlung wirkt, wann es besser wird und worauf zu achten ist.» | R2-01 | keine Aussage zur Behandlung; «die Angehörige oft stellen» redaktionell (W1-F-21). Der alte Satz steht sinngemäss in der Kurzbeschreibung |
| 3 | › Abb. 1, Schlüssel | «Weg A · durchgezogene Linie», «Weg B · gestrichelte Linie» | entfernt | R2-01 | ohne Inhalt; die Überschriften unterscheiden |
| 4 | › Abb. 1, Spalte «Antidepressiva» | gestrichelte Oberkante | durchgezogene Oberkante | R2-02 | kein Text geändert; passt zur Kernaussage «Beide Wege wirken» |
| 5 | › Abb. 1, Psychotherapie, «Wie es wirkt» | – | «Die erste setzt an belastenden Gedanken und Gewohnheiten an, die zweite an Beziehungen und Veränderungen im Leben.» | R2-03 | neue Erklärung; deckt sich mit gängigen Beschreibungen (kognitive Verhaltenstherapie: Gedanken und Verhalten; interpersonelle Therapie: Beziehungen, Konflikte, Rollenwechsel, Trauer), am Original der Leitlinien nicht geprüft (W1-25); Prüfbedarf W1-F-21 |
| 6 | › Abb. 1, Vertiefung | «…, etwa die Elektrokonvulsionstherapie (EKT), die transkranielle Magnetstimulation (rTMS) oder Esketamin als Nasenspray.» | «… in Frage. Dazu gehören eine Behandlung mit kurzen Stromimpulsen in Narkose (Elektrokonvulsionstherapie), eine Behandlung mit Magnetimpulsen am Kopf (transkranielle Magnetstimulation) und ein Medikament als Nasenspray (Esketamin).» | R2-03 | dieselben drei Verfahren; Erklärungen neu, ohne eigene Quelle; Abkürzungen entfallen; Prüfbedarf W1-F-21 |
| 7 | › Abb. 2, Kurztext | «Nummer und Linie zeigen die Reihenfolge, die gestrichelte Markierung den Schritt, der nur bei Bedarf folgt. Bei Schritt 1 ist ein Ansatzpunkt für Angehörige markiert.» | «Eine Tagesklinik oder Klinik braucht es nur bei Bedarf, und auch wenn die Beschwerden abgeklungen sind, geht die Behandlung weiter. Schon beim ersten Schritt können Sie helfen.» | R2-01 | wiederholt Schritt 4 («bei Bedarf»), Schritt 5 und den Ansatzpunkt; keine neue Aussage. «Die meisten beginnen in der Hausarztpraxis.» bewusst weggelassen (oben) |
| 8 | › Abb. 2, Ansatzpunkt | – | «So könnte es klingen: «Soll ich dir helfen, einen Termin zu finden? Ich komme gern mit.»» | R2-05 | Beispielsatz; Angebot statt Druck, passt zu «wenn die Person das möchte»; Prüfbedarf W1-F-21 |
| 9 | › `verlauf` | «… wieder gesund, nach einem Jahr waren es drei Viertel.» | «… wieder gesund. Nach einem Jahr waren es drei Viertel.» | R2-07 | Zahlen und Quelle (Spijker et al. 2002) unverändert |
| 10 | › Abb. 3, Kurztext | «Die Linienstärke zeigt, wie stark die Depression wieder spürbar ist.» | gestrichen | R2-01 | ohne Inhaltsverlust; steht in der Kurzbeschreibung («Je stärker die Depression wieder spürbar ist, desto dicker die Linie …») |
| 11 | › Abb. 3, Vertiefung | «Die Achse zeigt Spielraum, …» | «Das Bild zeigt Spielraum, …» | V-09 | unverändert |
| 12 | `depression-verstehen` › Abb. 1, Kurztext | «Über der Wasserlinie steht, was Angehörige sehen und hören. Darunter steht, was die erkrankte Person erleben kann, oft ohne es zu zeigen oder sagen zu können. Was darunter liegt, ist eine Möglichkeit, keine Gewissheit: …» | «Was Angehörige sehen und hören, ist nicht alles. Darunter kann liegen, was die erkrankte Person erlebt, oft ohne es zeigen oder sagen zu können. Das ist eine Möglichkeit, keine Gewissheit: …» | R2-01 | gleichwertig; die Absicherung («kann», «eine Möglichkeit, keine Gewissheit») bleibt |
| 13 | › Abb. 2, Teil 1 | «Sie ist bei jedem Menschen anders, im Bild der gefüllte untere Teil.» | «Sie ist bei jedem Menschen anders.» | R2-01 | unverändert; der Bildbezug steht in der Kurzbeschreibung |
| 14 | › Abb. 2, Teil 3 | «Bei der linken Säule genügt wenig Belastung, bei der rechten braucht es viel.» | «Wer sehr verletzlich ist, erreicht sie schon mit wenig Belastung; bei anderen braucht es viel.» | R2-01 | gleichwertig mit dem Kurztext («Je grösser die Verletzlichkeit, desto weniger Belastung braucht es.»); keine neue Aussage |
| 15 | `fuer-sich-sorgen` › `erlaubt` | «… sind keine Nebensache.» | «… sind wichtig, auch jetzt.» | R2-06 | gleichwertig |
| 16 | › `grenzen` | «Sie braucht keine lange Begründung.» | «Eine kurze Begründung genügt.» | R2-06 | gleichwertig (leichte Verschiebung, oben) |
| 17 | › Abb. 1, Kurztext | «Der Abstand zur Mitte zeigt, wie nah jemand im Alltag ist. Durchgezogene Rahmen stehen für Unterstützung, die schon besteht, gestrichelte für Möglichkeiten, die sich nutzen liessen.» | «Unterstützung kann von nahen Menschen, aus dem Umfeld und von Fachstellen kommen. Manches gibt es schon, anderes liesse sich nutzen.» | R2-01, V-08 | keine fachliche Aussage; die Linienbedeutung steht in Legende und Kurzbeschreibung |
| 18 | › Abb. 1, Legende | «Abstand zur Mitte: wie nah im Alltag» | «geordnet von nah im Alltag nach weiter weg» | V-08 | unverändert |
| 19 | `ihre-situation` › Abb. 1, Ansatzpunkt | «… · beim Abfluss, doppelter Ring» | «… · beim Abfluss» | R2-01 | unverändert; «doppelter Ring» steht in der Kurzbeschreibung |
| 20 | › Abb. 2, Kurztext | «Vier Stationen folgen aufeinander; nach der vierten beginnt der Kreis von vorn. Bei Station 3 ist ein Ansatzpunkt für Angehörige markiert.» | «Rückzug und Gereiztheit können Sorge, Antreiben und Übernehmen auslösen. Das kann erschöpfen und ungeduldig machen, und wer sich unverstanden fühlt, zieht sich eher weiter zurück. An der eigenen Erschöpfung und Ungeduld können Sie ansetzen.» | R2-01 | gibt den Kreis aus dem freigegebenen Plan wieder, so vorsichtig wie die Kernaussage («können sich gegenseitig verstärken»); Quellen in der Kennzeichnung unverändert; Prüfbedarf W1-F-21 |
| 21 | › Abb. 2, Stationen 1 bis 4 | «Rückzug und Gereiztheit», «Sorge, Antreiben, Übernehmen», «Erschöpfung und Ungeduld», «Sich unverstanden fühlen» | «Er zieht sich zurück und ist gereizt.», «Ich mache mir Sorgen, treibe an und übernehme.», «Ich bin erschöpft und werde ungeduldig.», «Er fühlt sich unverstanden.» | R2-04 | Inhalt der Stationen gleich; neu ist die Zuordnung von Station 4 zur erkrankten Person (aus dem Plan abgeleitet); Prüfbedarf W1-F-21 |
| 22 | › Abb. 2, Ansatzpunkt | – | «So könnte es klingen: «Ich merke, dass ich ungeduldig werde. Das liegt an meiner Müdigkeit, nicht an dir.»» | R2-05 | Beispielsatz; schiebt niemandem Schuld zu; Prüfbedarf W1-F-21 |
| 23 | › Abb. 2, Kurzbeschreibung (`p.puk-sr`) | Stationen als Substantive | Stationen als Sätze wie in Nr. 21 | R2-04 | wie Nr. 21 |
| 24 | `impressum-datenschutz` › Kopf | – | «Musterentwurf: noch nicht fachlich geprüft. Rechtliche Angaben: Stand 11.10.2026, rechtliche Prüfung ausstehend.» | W1-32 | Vermerk, keine Aussage |
| 25 | › `impressum`, Herausgeberin | «Fachstelle Angehörigenarbeit, Psychiatrische Universitätsklinik Zürich» | «Fachstelle Angehörigenarbeit der Psychiatrischen Universitätsklinik Zürich» | S-32 | rechtlich zu prüfen (W1-31) |
| 26 | › `impressum` | «Die Website ist ein Angebot der Fachstelle Angehörigenarbeit, kein offizielles Angebot der Psychiatrischen Universitätsklinik Zürich.» | «Die Website ist ein Angebot der Fachstelle, kein offizielles Angebot der Klinik als Ganzes.» | S-32 | Inhalt des Entscheids W3-05 gleich; rechtlich zu prüfen (W1-31) |
| 27 | › `impressum` | «Für die Inhalte anderer Websites, auf die wir verlinken, sind deren Anbieter verantwortlich.» | «Für die Inhalte verlinkter Websites sind deren Anbieter verantwortlich.» | S-31 | gleich; rechtlich mit W1-31 |
| 28 | `index` › `einstieg` | «Wenn Sie über Ihre Situation sprechen möchten, berät Sie die Fachstelle … kostenlos und vertraulich, …» | «Möchten Sie über Ihre Situation sprechen? Die Fachstelle … berät Sie kostenlos und vertraulich, …» | R2-07 | unverändert |
| 29 | `je-nach-rolle` › `partner` | «… verantwortlich, sechs von zehn berichteten von Streit oder Ärger.» | «… verantwortlich. Sechs von zehn berichteten von Streit oder Ärger.» | R2-07 | Zahlen unverändert |
| 30 | › `kinder` | «Die Schutzfaktoren wirken zusammen: In einer britischen Studie blieben von den Jugendlichen mit allen fünf Schutzfaktoren 48 von 100 über die ganze Studienzeit psychisch gesund, mit höchstens einem nur 4 von 100.» | «Die Schutzfaktoren wirken zusammen. In einer britischen Studie blieben 48 von 100 Jugendlichen mit allen fünf Schutzfaktoren über die ganze Studienzeit psychisch gesund. Mit höchstens einem Schutzfaktor waren es nur 4 von 100.» | R2-07 | Zahlen und Bezug unverändert (Collishaw et al.) |
| 31 | `rechte-und-angebote` › Abb. 1, Kurztext, Satz 1 | «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge.» | gestrichen | R2-01 | steht in der Kurzbeschreibung |
| 32 | › Abb. 1, Schlüssel | «Spalte A · durchgezogene Linie», «Spalte B · gestrichelte Linie» | entfernt | R2-01 | ohne Inhalt |
| 33 | alle 10 Seiten › Fusszeile | «Redaktioneller Status: Musterentwurf, Stand 10.10.2026 – …» | «… Stand 11.10.2026 – …» | R1-03 | Datum |
| – | `site.config.json` | `v-is-kreislauf` › `statement`; `editorialStatusLabel` | mit den vier Sätzen; «Stand 11.10.2026» | R2-04; R1-03 | wie Nr. 21 und 33 |

**Prüfbedarf für W1-F-21** (nicht freigegeben; den Wortlaut entscheidet die Fachstelle): Nr. 1, 5 und 6 (Erklärungen aus R2-03, dazu die entfallenen Abkürzungen «EKT» und «rTMS»), Nr. 8 und 22 (Beispielsätze aus R2-05), Nr. 20 und 21 (Kurztext und Sätze im Kreislauf, Station 4), Nr. 2 (redaktioneller Satz im Kurztext des Vergleichs). Die übrigen neuen Kurztexte (Nr. 7, 12, 14, 17) geben wieder, was Figur und Text schon sagen; sie gehören mit der Figur zur Freigabe.

**Offen in W1 nach Runde 5**

| Punkt | Zuständig |
| --- | --- |
| W1-F-15 (Boot und Arbeitsheft), W1-F-19 (Angebote), W1-F-21 (fachliche Freigaben, mit dem Prüfbedarf oben) | Fachstelle |
| W1-31 (Datenschutz, rechtlich; mit S-32 und W1-32) | Fachstelle mit PUK; danach bauende Sitzung |
| W1-25 mit den Resten von W1-09 und W1-10 | Prüfsitzung oder Person mit Zugriff auf die Originale |

#### Prüfrunde 6 · Nachprüfung von S-33, V-11, BD-12 und K1 (12.10.2026, Stand `1a328f5`)

**Geprüft durch:** vierte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und S-33, V-11, BD-12 und K1 nicht umgesetzt (die Umsetzung in den Pull Requests #40 und #41 stammt von der dritten Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 4.

**Grundlage:**
- Zuletzt geprüft: `5f68c39` (dritte Prüfsitzung) und der Nachtrag W1-F-19. Seither haben nur #40 (`5eae059`, Merge `b8288d0`) und #41 (`16da1ec`, Merge `1a328f5`) die Website geändert. `git diff --stat 7cc4e1b b8288d0`: `PRUEFBERICHT.md`, `content/behandlung-und-verlauf.html`, `content/ihre-situation.html` und die beiden gebauten Seiten. `git diff --stat b8288d0 1a328f5`: `PRUEFBERICHT.md`, `content/je-nach-rolle.html`, `content/rechte-und-angebote.html` und die beiden gebauten Seiten. `site.config.json`, `sitemap.xml`, `_headers`, `components/` und `templates/website/longform/` sind unverändert.
- `content/` mit `git diff --word-diff` gelesen. Text der 10 gebauten Seiten an `7cc4e1b`, `b8288d0` und `1a328f5` per Skript verglichen (je Stand ein eigener Server auf einem Git-Worktree im Scratchpad): Textblöcke des ganzen `body` (`p`, `li`, `dt`, `dd`, `h1` bis `h4`, `figcaption`, `summary`, `th`, `td`, `blockquote`, ohne SVG), Satzgrenze «.», «!» oder «?» (auch vor «»») vor Grossbuchstabe, Ziffer oder «.
- Kein Umbau: Der Abgleich von 20 Aussagen je Etappe entfällt; verglichen sind alle geänderten Sätze.

**Ergebnis:**
- S-33, V-11, BD-12 und K1 (beide Stellen) sind umgesetzt wie vorgeschlagen. Die Abweichungen (Lesart des Auftrags bei S-33, Linkanordnung und neues Linkziel bei K1) sind im Eintrag der bauenden Sitzung genannt, begründet und vertretbar.
- Alle geänderten Sätze gehören zu einem dieser Befunde. Keine Aussage ist still entfallen. Die einzige neue Sachaussage («neue Gruppe im Aufbau», «informiert … über den aktuellen Stand und die Anmeldung») ist durch V1 und V2 im Nachtrag belegt; sonst keine neue fachliche Aussage.
- Die Kennzahlen der bauenden Sitzung stimmen (Tabelle unten).
- W1-F-19 ist abgeschlossen. Die beiden VASK-Adressen konnten am Original nicht aufgerufen werden (Prüfgrenze unten).
- Ein neuer, optionaler Befund (W1-33). W1 bleibt **offen**: W1-F-15, W1-F-21, W1-25 mit den Resten von W1-09 und W1-10, W1-31, W1-33.

**Nachprüfung je Befund**

| Befund | Umsetzung (Beleg) | Abweichung vom Vorschlag und Beurteilung | Ergebnis |
| --- | --- | --- | --- |
| S-33 | `ihre-situation` › Abb. 2, Kurztext: «Rückzug und Gereiztheit können Sorge, Antreiben und Übernehmen auslösen. Das kann Angehörige erschöpfen und ungeduldig machen. Die erkrankte Person fühlt sich dann eher unverstanden und zieht sich weiter zurück. An der eigenen Erschöpfung und Ungeduld können Sie ansetzen.» Satz 2 und 3 wortgleich mit dem Vorschlag; Satz 1 und 4 unverändert | Der Vorschlag galt «nur wenn die Fachstelle Station 4 mit W1-F-21 bestätigt». Die Fachstelle hat W1-F-21 nicht erteilt, aber am 12.10.2026 ausdrücklich «Setze S-33 … um» beauftragt (Eintrag unter «Von der Fachstelle entschieden»). Die bauende Sitzung liest das als Bestätigung von Station 4 für den Kurztext und hält W1-F-21 offen. **Vertretbar:** Der Kurztext sagt nichts, was nicht schon in Station 4 («Er fühlt sich unverstanden.») und im freigegebenen Plan steht («die Person fühlt sich unverstanden und zieht sich weiter zurück»). Die Lesart ist im Bericht offen gelegt und unter W1-F-21 nachgeführt (Offene Punkte). Folge: Ändert die Fachstelle Station 4, muss der Kurztext mit | erledigt |
| V-11 | `behandlung-und-verlauf` › `wege`: «Die Abbildung vergleicht beide nach denselben Merkmalen.» | keine; Inhalt gleich («nebeneinander» entfällt) | erledigt |
| BD-12 | `ihre-situation` › Abb. 2, `p#is-kr-text`: «Vier Stationen im Kreis, beschriftet mit Sätzen einer angehörigen Person. Station 1: «Er zieht sich zurück und ist gereizt.» Station 2: «Ich mache mir Sorgen, treibe an und übernehme.» Station 3: «Ich bin erschöpft und werde ungeduldig.» Station 4: «Er fühlt sich unverstanden.» Danach geht es zurück zu Station 1: Der Rückzug verstärkt sich. Die Pfeile zeigen nur die Richtung. Bei Station 3 ist ein Ansatzpunkt für Angehörige markiert.» | keine; der Vorschlag endete mit «…», die drei Schlusssätze sind unverändert übernommen. Inhalt gleich wie Figur; «Sätze einer angehörigen Person» stimmt mit den Stationen («Ich …», «Er …») | erledigt (realer Lauf offen) |
| K1, `rechte-und-angebote` › `angebote` | VASK Zürich: «Beratung, offene Treffpunkte in Zürich und Winterthur sowie Angehörigenkurse. Für erwachsene Kinder psychisch erkrankter Eltern befindet sich laut VASK-Flyer eine neue Gruppe im Aufbau. Zum aktuellen Stand und zur Anmeldung informiert die VASK Zürich.» – wortgleich mit dem Nachtrag, Abschnitt 4. Danach «vaskzuerich.ch» (`https://www.vaskzuerich.ch/de/`) · «Treffpunkte auf vaskzuerich.ch» (`https://www.vaskzuerich.ch/de/Angebote-der-VASK/Treffpunkte`). Stand by You, Equilibrium und der Vermerk «Stand 10.10.2026, vor der Veröffentlichung zu prüfen» unverändert (`git diff` betrifft nur die VASK-Zeile) | **Linkanordnung:** Der Vorschlag sagt «Den allgemeinen VASK-Link für Beratung/Kurse kann man beibehalten; beim Hinweis zur Gruppe gezielt auf Treffpunkte … verlinken.» Umgesetzt sind beide Links am Ende des Eintrags, getrennt mit « · », wie beim Eintrag der Fachstelle darüber. **Vertretbar:** Die Seite setzt Links überall ans Ende des Eintrags; die Linknamen sagen, wohin sie führen («Treffpunkte …»), und die Treffpunkte-Seite (V1) deckt Gruppe und offene Treffpunkte ab. Kleiner Nachteil: Nach dem Satz zur Gruppe steht zuerst der allgemeine Link; kein Befund, weil der Name des zweiten Links eindeutig ist | erledigt |
| K1, `je-nach-rolle` › `erwachsene-kinder` | «Auch hier gilt: Sie dürfen Grenzen setzen und sich selbst Unterstützung holen.» (unverändert) «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut Flyer eine neue Gruppe für erwachsene Kinder psychisch erkrankter Eltern im Aufbau. Die VASK informiert über den aktuellen Stand und die Anmeldung.» Link «VASK Zürich (vaskzuerich.ch)» jetzt auf `…/Angebote-der-VASK/Treffpunkte` statt auf die Startseite | Wortlaut gleich wie der Vorschlag; «(vaskzuerich.ch)» ist der bisherige Linktext (Domain im Linktext, W3-10), nicht neu. **Neues Linkziel** (Treffpunkte statt Startseite), das der Vorschlag für diese Stelle nicht nennt: im Eintrag als Abweichung gekennzeichnet und begründet («weil der Satz nur von der Gruppe handelt»). **Vertretbar:** Der Nachtrag nennt die Treffpunkte-Seite «zielgenauer Beleg und sinnvoller Link für den Gruppenhinweis in K1» (Abschnitt 3); dort stehen Gruppe, Anmeldeweg und Flyer (V1). Gleiches Ziel wie der Gruppenlink auf `rechte-und-angebote`. Der Linkname nennt nur die Domain; aus dem Satz ist der Zweck klar (WCAG 2.4.4, Zweck aus dem Kontext) | erledigt |
| R2-08 | nicht umgesetzt: `rechte-und-angebote` › Abb. 1 an `1a328f5` unverändert (der Diff von #41 betrifft auf dieser Seite nur die VASK-Zeile) | Bericht führt es richtig: Entscheid «Zurückstellen» unter «Von der Fachstelle entschieden» (12.10.2026), Begründung im Eintrag der bauenden Sitzung, Wunsch an Muster E unter «Offene Punkte › Profil», in der Statuszeile R2 vermerkt | richtig geführt (zurückgestellt) |

**Abgleich mit dem Bestand: jeder geänderte Satz** (gebaute Seiten; «–» entfallen, «+» neu)

| Stand | Seite › Stelle | Satz | Befund |
| --- | --- | --- | --- |
| #40 | `behandlung-und-verlauf` › `wege` | – «Die Abbildung stellt beide nach denselben Merkmalen nebeneinander.» / + «Die Abbildung vergleicht beide nach denselben Merkmalen.» | V-11 |
| #40 | `ihre-situation` › Abb. 2, Kurztext | – «Das kann erschöpfen und ungeduldig machen, und wer sich unverstanden fühlt, zieht sich eher weiter zurück.» / + «Das kann Angehörige erschöpfen und ungeduldig machen.» + «Die erkrankte Person fühlt sich dann eher unverstanden und zieht sich weiter zurück.» | S-33 |
| #40 | `ihre-situation` › Abb. 2, Kurzbeschreibung | – «Station 1 «Er zieht sich zurück und ist gereizt.» führt zu Station 2 «…», diese zu Station 3 «…», diese zu Station 4 «Er fühlt sich unverstanden.»» / + «Vier Stationen im Kreis, beschriftet mit Sätzen einer angehörigen Person.» + «Station 1: «…»» bis «Station 4: «…»» (4 Sätze) | BD-12 |
| #41 | `je-nach-rolle` › `erwachsene-kinder` | – «Die VASK Zürich (vaskzuerich.ch) bietet eine Gruppe für erwachsene Kinder psychisch erkrankter Eltern an.» / + «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut Flyer eine neue Gruppe … im Aufbau.» + «Die VASK informiert über den aktuellen Stand und die Anmeldung.» | K1 |
| #41 | `rechte-und-angebote` › `angebote`, VASK | – «Beratung, offene Treffpunkte in Zürich und Winterthur, Angehörigenkurse, Gruppe für erwachsene Kinder. vaskzuerich.ch» / + «Beratung, offene Treffpunkte in Zürich und Winterthur sowie Angehörigenkurse.» + «Für erwachsene Kinder psychisch erkrankter Eltern befindet sich laut VASK-Flyer eine neue Gruppe im Aufbau.» + «Zum aktuellen Stand und zur Anmeldung informiert die VASK Zürich. vaskzuerich.ch · Treffpunkte auf vaskzuerich.ch» | K1 |

Keine Aussage still entfallen: Die alte Kurzbeschreibung steht vollständig in der neuen (vier Stationen, gleiche Sätze); «Gruppe für erwachsene Kinder» ist an beiden Stellen präzisiert, nicht gestrichen; «bietet … an» ist bewusst durch «im Aufbau» ersetzt (K1). Übrige 8 Seiten je Schritt ohne Änderung.

**Kennzahlen der bauenden Sitzung, nachgerechnet**

| Kennzahl | bauende Sitzung | nachgerechnet | Ergebnis |
| --- | --- | --- | --- |
| Satzvergleich #40 (gegen `7cc4e1b`) | 3 geändert, 8 neu; `behandlung-und-verlauf` 1/1, `ihre-situation` Kurztext 1/2, Kurzbeschreibung 1/5 | 3 entfallen, 8 neu; genau diese Verteilung; übrige 8 Seiten gleich | stimmt |
| Satzvergleich #41 (gegen `b8288d0`) | 2 Einheiten geändert, 5 neu; `je-nach-rolle` 1/2, `rechte-und-angebote` 1/3 | 2 entfallen, 5 neu; genau diese Verteilung | stimmt |
| Sätze nach R2-Zählweise | `ihre-situation` 70 → 71; `je-nach-rolle` 88 → 89; VASK-Eintrag zählt nicht (endet mit Link) | 70 → 71 (#40); 88 → 89 (#41); `rechte-und-angebote` 35 → 35, der VASK-Eintrag endet ohne Satzzeichen und fällt weg | stimmt |
| Verneinung | `ihre-situation` 12, `je-nach-rolle` 13, unverändert | 12 und 13 an allen drei Ständen; keiner der 13 neuen Sätze enthält eine Verneinung | stimmt |
| Sätze über 25 Wörter | `ihre-situation` 1, `je-nach-rolle` 4, gesamt 7, unverändert | 1, 4, gesamt 7; längster neuer Satz 21 Wörter («Bei der VASK Zürich …») | stimmt |
| Gate | Entwurf 0 blockierend, 12 Hinweise; Produktion 12 blockierend; Selbsttest 65/65; `sitemap.xml` unverändert | gleich (W3, Runde 4) | stimmt |
| Breiten, Konsole, CSP | 10 Seiten × 320 bis 1440 px (70): kein Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse, keine fremden Anfragen | gleich, mit Positivkontrolle (Bedienung, Runde 4) | stimmt |
| 200 % | 0 überlappende Textzeilen in allen 11 Figuren, 132 Messungen | 0 in 132 Messungen (Visualisierungs-Check, Runde 4) | stimmt |

Hinweis zur Zählweise: Das Skript dieser Sitzung ergibt für die Übersicht 42 statt 48 Sätze (andere Abgrenzung der Lesepfad-Listen); für die geänderten Seiten stimmen die Werte mit der Tabelle von R2, Runde 2, überein. Gesamtzahlen deshalb nur als Differenz verwendet.

**K1 gegen Nachtrag und Quellen V1, V2**

| Aussage | Beleg im Nachtrag | Ergebnis |
| --- | --- | --- |
| «Beratung, offene Treffpunkte in Zürich und Winterthur sowie Angehörigenkurse» | V1 (offene Treffen Zürich und Winterthur), V3 (Beratungsstelle), V4 (Kurse «Wegweiser») | gedeckt; verspricht keine Kostenfreiheit (V3, V4 nennen Gebühren) |
| «befindet sich laut (VASK-)Flyer eine neue Gruppe im Aufbau» | V2, Seite 1: «Neue Gruppe im Aufbau» | gedeckt; die Quelle der Angabe ist genannt |
| «Zum aktuellen Stand und zur Anmeldung informiert die VASK Zürich» / «Die VASK informiert über den aktuellen Stand und die Anmeldung» | V1: Information und Anmeldung über `treffpunkte@vaskzuerich.ch` | gedeckt; keine Zusage zu Start, Plätzen, Kosten oder Mitgliedschaft (Nachtrag, «Verbleibend») |
| Linkziele | Nachtrag, Abschnitt 3: Startseite und Treffpunkte je HTTP 200 am 12.10.2026, Endadresse unverändert | übernommen; selbst nicht prüfbar (siehe unten) |

**Prüfgrenze:** Die beiden VASK-Adressen konnten aus dieser Prüfumgebung nicht am Original aufgerufen werden: `curl` meldet «CONNECT tunnel failed, response 403» (Netzwerkregel der Umgebung), der Abruf über WebFetch «getaddrinfo ENOTFOUND www.vaskzuerich.ch». **Nicht prüfbar in dieser Sitzung.** Die Beurteilung stützt sich auf den Nachtrag (Abruf am selben Tag). Die Erreichbarkeit gehört in den Linktest vor der Veröffentlichung (Offene Punkte).

#### Neue Befunde W1, Runde 6

- **W1-33 · optional · Zeitgebundene Angabe zur VASK-Gruppe ohne Stand auf «Je nach Rolle».**
  - **Beleg:** `je-nach-rolle` › `erwachsene-kinder`: «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut Flyer eine neue Gruppe … im Aufbau.» Die Angabe gilt nur, solange die Gruppe im Aufbau ist (V2, Flyer 2026). Auf `rechte-und-angebote` steht darunter «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.»; auf `je-nach-rolle` steht kein solcher Vermerk, und die Liste der Prüfpunkte vor der Veröffentlichung nannte bisher nur die Seite mit den Angeboten.
  - **Vorschlag:** ohne Textänderung: die VASK-Gruppe an beiden Stellen in die Prüfung vor der Veröffentlichung aufnehmen (in «Offene Punkte › Prüfung durch Personen» eingetragen). Optional, auf Entscheid der Fachstelle: den Satz auf `je-nach-rolle` ohne eigenen Zeitbezug fassen und auf den Eintrag unter «Rechte und Unterstützung» verweisen.
  - **Zuständig:** Fachstelle (ob Textänderung); Prüfung vor der Veröffentlichung durch eine Person oder Prüfsitzung.

**Offen in W1 nach Runde 6**

| Punkt | Zuständig |
| --- | --- |
| W1-F-15 (Boot und Arbeitsheft), W1-F-21 (fachliche Freigaben, mit dem Prüfbedarf aus Runde 5 und dem Kurztext des Kreislaufs aus S-33) | Fachstelle |
| W1-31 (Datenschutz, rechtlich; mit S-32 und W1-32) | Fachstelle mit PUK; danach bauende Sitzung |
| W1-33 (optional) | Fachstelle; Prüfung vor der Veröffentlichung |
| W1-25 mit den Resten von W1-09 und W1-10 | Prüfsitzung oder Person mit Zugriff auf die Originale |

#### Prüfrunde 7 · Nachprüfung von W1-33 und S-34 (12.10.2026, Stand `007006a`)

**Geprüft durch:** fünfte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und W1-33 und S-34 nicht umgesetzt (die Umsetzung in #44, Commit `4d56db7`, stammt von der vierten Prüfsitzung im Rollenwechsel, die beide Befunde auch vorgeschlagen hat). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 5.

**Grundlage:**
- Zuletzt geprüft: `1a328f5` (vierte Prüfsitzung, #43). `git diff --stat 1a328f5 f24e5af`: nur `PRUEFBERICHT.md`. Seither hat nur #44 die Website geändert. `git diff --stat f24e5af 007006a` über das ganze Repository: genau `PRUEFBERICHT.md`, `content/je-nach-rolle.html` und `je-nach-rolle.html`, wie erwartet. In beiden HTML-Dateien ändert sich je eine Zeile, der dritte Absatz von `erwachsene-kinder`. `site.config.json`, `sitemap.xml`, `_headers`, `tools/`, `components/` und `templates/website/longform/` sind unverändert.
- `content/` mit `git diff` gelesen. Text der 10 gebauten Seiten an `f24e5af` und `007006a` per Skript verglichen (je Stand ein eigener Server auf einem Git-Worktree im Scratchpad): innerste Textblöcke des ganzen `body` (`p`, `li`, `dt`, `dd`, `h1` bis `h4`, `figcaption`, `summary`, `th`, `td`, `blockquote`, ohne SVG), Satzgrenze «.», «!» oder «?» (auch vor «»») vor Grossbuchstabe, Ziffer oder «. Kennzahlen nach R2, Teil 3 (Zählweise dort).
- Kein Umbau: Der Abgleich von 20 Aussagen je Etappe entfällt; verglichen sind alle geänderten Sätze.

**Ergebnis:**
- S-34 und W1-33 sind umgesetzt. Die Wahl der Variante bei S-34 und die Abweichung beim optionalen Teil von W1-33 sind im Eintrag der bauenden Sitzung genannt, begründet und vertretbar.
- Beide geänderten Stellen gehören zu einem dieser Befunde. Keine Aussage ist entfallen. Keine neue fachliche Aussage: «laut VASK-Flyer» nennt die Quelle genauer (V2), der neue Satz verweist nur.
- Die Kennzahlen der bauenden Sitzung stimmen (Tabelle unten).
- Die VASK-Adressen konnten am Original nicht aufgerufen werden (Prüfgrenze unten).
- Ein neuer, optionaler Befund (W1-34). W1 bleibt **offen**: W1-F-15, W1-F-21, W1-25 mit den Resten von W1-09 und W1-10, W1-31, W1-34.

**Nachprüfung je Befund**

| Befund | Umsetzung (Beleg) | Abweichung vom Vorschlag und Beurteilung | Ergebnis |
| --- | --- | --- | --- |
| S-34 | `je-nach-rolle` › `erwachsene-kinder`: «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut VASK-Flyer eine neue Gruppe für erwachsene Kinder psychisch erkrankter Eltern im Aufbau.» | Der Vorschlag nannte zwei Varianten: «laut einem Flyer der VASK» oder wie auf der anderen Seite «laut VASK-Flyer». Gewählt ist die zweite, «weil `rechte-und-angebote` denselben Ausdruck verwendet». **Begründet:** Beide Stellen nennen die Quelle jetzt gleich, und der Satz bleibt bei 21 Wörtern (erste Variante: 24). Fachlich stimmt die Zuschreibung: V2 ist der Flyer der VASK Zürich. Zur Wiederholung «VASK … VASK-Flyer» siehe S, Prüfrunde 6 (vertretbar) | erledigt |
| W1-33, Prüfung vor der Veröffentlichung | «Offene Punkte › Prüfung durch Personen» nennt seit dem Bericht der vierten Prüfsitzung (an `f24e5af` und `007006a`): «Dabei die VASK-Gruppe an beiden Stellen auf den aktuellen Stand prüfen (W1-33).» In der Fassung dieser Runde als eigener Punkt «Vor der Veröffentlichung» geführt | keine | erledigt; die Prüfung selbst bleibt bis vor die Veröffentlichung offen |
| W1-33, optionaler Teil | neuer Satz im selben Absatz: «Weitere Angebote und den Stand dieser Angaben finden Sie unter Unterstützung für Angehörige.», Link `rechte-und-angebote.html#angebote`. Der Satz zur Gruppe behält «im Aufbau» | **Abweichung:** Vorgeschlagen war, «den Satz auf `je-nach-rolle` ohne eigenen Zeitbezug [zu] fassen und auf den Eintrag unter «Rechte und Unterstützung» [zu] verweisen». Umgesetzt ist nur der Verweis; Begründung: ohne Zeitbezug hiesse die Aussage aus K1 ändern, die die Fachstelle so entschieden hat. **Vertretbar:** (1) Der Auftrag «setze W1-33 … um» lässt beide Lesarten zu; die gewählte ist die vorsichtigere und im Eintrag offen gelegt. (2) «im Aufbau» ist genau, was der Nachtrag sichern wollte (Abschnitt 2: der Anbieterauftritt belegt «keinen bereits laufenden regelmässigen Betrieb»); eine Fassung ohne Zeitbezug müsste diese Einschränkung weglassen oder die Gruppe als bestehend darstellen. (3) Das Ziel von W1-33, dass Lesende einen Stand zur Angabe finden, erreicht der Verweis im Grundsatz; wie gut, siehe unten und W1-34. Der Fachstelle zur Kenntnis gebracht (Offene Punkte) | erledigt, Einzelbefund W1-34 |

**Abgleich mit dem Bestand: jeder geänderte Satz** (gebaute Seiten, `f24e5af` → `007006a`; «–» entfallen, «+» neu)

| Seite › Stelle | Satz | Befund |
| --- | --- | --- |
| `je-nach-rolle` › `erwachsene-kinder`, Absatz 3 | – «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut Flyer eine neue Gruppe für erwachsene Kinder psychisch erkrankter Eltern im Aufbau.» / + «… laut VASK-Flyer …» (sonst wortgleich, 21 Wörter) | S-34 |
| ebenda | + «Weitere Angebote und den Stand dieser Angaben finden Sie unter Unterstützung für Angehörige.» (13 Wörter, Link auf `rechte-und-angebote.html#angebote`) | W1-33 |

Unverändert im selben Absatz: «Auch hier gilt: Sie dürfen Grenzen setzen und sich selbst Unterstützung holen.» und «Die VASK informiert über den aktuellen Stand und die Anmeldung.»; der Link «VASK Zürich (vaskzuerich.ch)» führt weiterhin auf `…/Angebote-der-VASK/Treffpunkte`. Übrige 9 Seiten: 0 entfallen, 0 neu.

**Führt der Verweis zum Stand-Vermerk?** Klick auf den neuen Link in Chromium, Fenster 800 px hoch; gemessen nach dem Sprung, ab der Oberkante der Überschrift «Unterstützung für Angehörige».

| Breite | Schrift | Überschrift nach dem Sprung | Vermerk «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.» | Bildschirmhöhen bis Unterkante Vermerk | beim Ankommen sichtbar |
| --- | --- | --- | --- | --- | --- |
| 360 px | 16 px | 107 px vom oberen Rand | 2146 px tiefer | 2,9 | nein |
| 1280 px | 16 px | 140 px | 1326 px tiefer | 1,9 | nein |
| 360 px | 32 px (200 %) | 162 px | 7633 px tiefer | 10,1 | nein |
| 1280 px | 32 px (200 %) | 194 px | 4089 px tiefer | 5,6 | nein |

- «Weitere Angebote»: eingelöst. Das Sprungziel ist der Abschnitt mit 7 Angeboten; der Linkname ist dessen Überschrift. Der VASK-Eintrag steht bei 1280 px im ersten Bildschirm (478 bis 673 px), bei 360 px knapp darunter (ab 837 px).
- «den Stand dieser Angaben»: nur teilweise eingelöst. Der Vermerk steht am Ende des Abschnitts, nach allen 7 Einträgen und dem Absatz zu wie-gehts-dir.ch; der Satz sagt nicht, wo. Er nennt «Stand 10.10.2026», die VASK-Angaben beruhen aber auf dem Abruf vom 12.10.2026 (K1, V1, V2); das Datum ist älter als die Angabe und verspricht deshalb nicht zu viel. Der Vermerk ist ein Entwurfsvermerk («vor der Veröffentlichung zu prüfen») und wird vor der Veröffentlichung neu gefasst; dann hängt der Satz an dessen neuem Wortlaut (W1-34).

**Kennzahlen der bauenden Sitzung, nachgerechnet**

| Kennzahl | bauende Sitzung | nachgerechnet | Ergebnis |
| --- | --- | --- | --- |
| Satzvergleich gegen `f24e5af` | 1 Satz geändert, 2 neu, nur `je-nach-rolle` (S-34 1/1, W1-33 0/1); übrige 9 Seiten unverändert | 1 entfallen, 2 neu, genau diese Verteilung; übrige 9 Seiten 0/0 | stimmt |
| Sätze nach R2-Zählweise | `je-nach-rolle` 89 → 90 | 89 → 90; übrige Seiten unverändert (z. B. `ihre-situation` 71, `rechte-und-angebote` 35) | stimmt |
| Verneinung | 13, unverändert | 13 an beiden Ständen; keiner der 2 neuen Sätze verneint | stimmt |
| Sätze über 25 Wörter | 4, unverändert; neue Sätze 21 und 13 Wörter | 4 an beiden Ständen (27, 28, 26 und 30 Wörter in `rollen`, `partner`, `geschwister`, `freunde`); neue Sätze 21 und 13 Wörter | stimmt |
| Gate | Entwurf 0 blockierend, 12 Hinweise; Produktion 12 blockierend; Selbsttest 65/65; `sitemap.xml` unverändert | gleich (W3, Runde 5) | stimmt |
| Breiten, Konsole, CSP | 10 Seiten × 320 bis 1440 px (70): kein Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse, keine fremden Anfragen; Positivkontrolle | gleich, mit Positivkontrolle (Bedienung, Runde 5) | stimmt |
| 200 % | 0 Überlauf auf 10 Seiten bei 360 bis 1440 px; 0 überlappende Textzeilen in allen 11 Figuren (132 Messungen) | 0 Überlauf in 60 Messungen (10 Seiten × 360, 768, 900, 1024, 1280, 1440 px); 0 in 132 Messungen (Visualisierungs-Check, Runde 5) | stimmt |
| axe-core 4.10.3 | `je-nach-rolle` bei 1280 und 360 px: 0 Verstösse | 0 Verstösse, 0 unvollständig; ebenso `rechte-und-angebote` (Bedienung, Runde 5) | stimmt |

Hinweis zur Zählweise: wie in Runde 6. Das Skript ergibt für die Übersicht 42 statt 48 Sätze (andere Abgrenzung der Lesepfad-Listen); für die geänderte Seite stimmt es mit den Werten der Runden davor überein.

**W1-33 und S-34 gegen Nachtrag und Quellen V1, V2**

| Aussage | Beleg im Nachtrag | Ergebnis |
| --- | --- | --- |
| «laut VASK-Flyer» (`je-nach-rolle`) | V2, «VASK Zürich: Treffpunkt für erwachsene Kinder, Flyer 2026», Seite 1: «Neue Gruppe im Aufbau»; gleiche Zuschreibung wie auf `rechte-und-angebote` (K1, Abschnitt 4: «laut VASK-Flyer») | gedeckt; die Quelle ist jetzt eindeutig benannt |
| «Die VASK informiert über den aktuellen Stand und die Anmeldung.» (unverändert) | V1: Information und Anmeldung über `treffpunkte@vaskzuerich.ch`; der Link führt auf V1, dort steht der Flyerlink | gedeckt (wie Runde 6) |
| «Weitere Angebote … finden Sie unter Unterstützung für Angehörige.» | keine Sachaussage; das Ziel hat 7 Einträge, davon 3 im Nachtrag geprüft | kein Quellenbedarf |
| «… den Stand dieser Angaben …» | Vermerk «Stand 10.10.2026, vor der Veröffentlichung zu prüfen.»; Nachtrag, Abschnitt 4: «Keine pauschale Aktualisierung des Prüfdatums aller Angebote» – eingehalten, der Vermerk ist unverändert | Verweis stimmt; Datum älter als die VASK-Angaben (12.10.2026), siehe W1-34 |
| keine Zusage zu Betrieb, Start, Plätzen, Kosten | Nachtrag, Abschnitt 2 «Verbleibend» und Abschnitt 6 | eingehalten: «im Aufbau» bleibt, keine neue Zusage |

**Prüfgrenze:** Am 12.10.2026 aus dieser Prüfumgebung: `curl` auf die Treffpunkte-Seite, den Flyer und die Startseite der VASK Zürich je «CONNECT tunnel failed, response 403»; WebFetch auf die Treffpunkte-Seite und den Flyer je «getaddrinfo ENOTFOUND www.vaskzuerich.ch». **Nicht prüfbar in dieser Sitzung.** Die Beurteilung stützt sich auf den Nachtrag (Abruf am 12.10.2026). Der Abgleich am Original gehört zur Prüfung vor der Veröffentlichung (Offene Punkte).

#### Neue Befunde W1, Runde 7

- **W1-34 · optional · Der neue Verweis verspricht einen Stand, der weit unten steht, ein älteres Datum nennt und vor der Veröffentlichung ersetzt wird.**
  - **Beleg:** `je-nach-rolle` › `erwachsene-kinder`: «Weitere Angebote und den Stand dieser Angaben finden Sie unter Unterstützung für Angehörige.» Das Ziel `rechte-und-angebote` › `angebote` nennt den Stand nur im letzten Absatz: «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.» Nach dem Sprung steht er 2146 px (360 px Breite) bzw. 1326 px (1280 px) unter der Überschrift, bei 200 % Schrift 7633 bzw. 4089 px; in keinem Fall ist er beim Ankommen sichtbar (Tabelle oben). Das Datum 10.10.2026 liegt vor dem Abruf, auf dem die VASK-Angaben beruhen (12.10.2026, K1). Der Vermerk ist ein Entwurfsvermerk und wird vor der Veröffentlichung neu gefasst; der Satz auf `je-nach-rolle` hängt davon ab, und die offenen Punkte nannten diese Kopplung bisher nicht.
  - **Vorschlag:** Variante 1, ohne Textänderung (in «Offene Punkte › Prüfung durch Personen › Vor der Veröffentlichung» eingetragen): beim Nachführen des Vermerks ein Prüfdatum setzen, das auch die VASK-Angaben deckt, und den Vermerk im Abschnitt `angebote` lassen; fällt er weg oder wandert er, den Satz auf `je-nach-rolle` anpassen. Variante 2, auf Entscheid der Fachstelle, sagt, wo der Stand steht: «Weitere Angebote finden Sie unter Unterstützung für Angehörige; am Schluss steht dort auch der Stand der Angaben.» (17 Wörter, keine neue fachliche Aussage).
  - **Zuständig:** Fachstelle (ob Variante 2), danach bauende Sitzung; Variante 1 bei der Prüfung vor der Veröffentlichung durch eine Person oder Prüfsitzung.

**Offen in W1 nach Runde 7**

| Punkt | Zuständig |
| --- | --- |
| W1-F-15 (Boot und Arbeitsheft), W1-F-21 (fachliche Freigaben, mit dem Prüfbedarf aus Runde 5 und dem Kurztext des Kreislaufs aus S-33) | Fachstelle |
| W1-31 (Datenschutz, rechtlich; mit S-32 und W1-32) | Fachstelle mit PUK; danach bauende Sitzung |
| W1-34 (optional) | Fachstelle; Prüfung vor der Veröffentlichung |
| W1-25 mit den Resten von W1-09 und W1-10; VASK-Angaben an beiden Stellen am Original (aus W1-33) | Prüfsitzung oder Person mit Zugriff auf die Originale |

### W2 Gesamtkohärenz

#### Prüfrunde W2 (10.10.2026, Stand `c2d1de8`)

**Geprüft durch:** dieselbe Prüfsitzung wie W1 (Claude Code, hat die Website nicht gebaut). Keine Inhalte und kein Code geändert; nur dieser Bericht.

**Grundlage:** Seiteninventar W1-D und die acht Inhaltsseiten. Dazu von der Prüfsitzung nachgezählt: Wörter je Seite mit und ohne Vertiefung (`details`), interne Links zwischen den Seiten, 31 zentrale Begriffe je Seite, Fusszeile und Zuständigkeitsverweise der gebauten Seiten. Kriterien: Abschnitt «Gesamtkohärenz und Aufbau» (`guidelines/00-gesamtkohaerenz-und-aufbau.md`). W2 wiederholt die Seitenbefunde aus W1 nicht und verweist auf sie.

**Ergebnis:** W2 bleibt **offen**. 11 Befunde (3 wichtig, 8 optional), 8 Fragen an die Fachstelle (W2-F-01 bis W2-F-08). Der Aufbau trägt; eine Umstrukturierung ist nicht nötig. Nötig sind Verweise zwischen den Seiten, ein einheitlicher Begriff «Bezugsperson» und eine Bündelung der Paartherapie. Diese Strukturänderungen sollen vor S umgesetzt werden (Liste am Ende).

#### W2-A · Prüfpunkte

| Nr. | Prüfpunkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- | --- |
| 1 | Eine übergeordnete Zielsetzung; jede Seite trägt erkennbar bei | erfüllt | `index` › Hero: «Diese Website erklärt die Erkrankung, ordnet Ihre eigene Situation ein und zeigt, was Sie tun können und wo Sie Unterstützung finden.» Jede der sieben Themenseiten deckt einen der vier Teile ab (`primaryTask` im Inventar W1-D); keine Seite ohne Bezug zum Ziel | – |
| 2 | Wichtigste Inhalte erhalten den meisten Raum; Nebenthemen nicht überproportional | erfüllt | Sichtbare Wörter (ohne Vertiefung): Verstehen 2395, Ihre Situation 2032, Handeln 2140 (W2-B). Nebenthemen der Behandlung (EKT, rTMS, Esketamin, Lichttherapie, Johanniskraut, Kosten) stehen in der Vertiefung (176 Wörter). `fuer-sich-sorgen` ist die kürzeste Themenseite (625 sichtbare Wörter), aber vollständig; Selbstsorge fehlt als Kernsatz auf `index` | W2-11 |
| 3 | Aufbaulogik festgelegt und benannt | erfüllt | `index` › `kapitel`: «Die Seiten führen vom Verstehen über die eigene Situation zum Handeln. Jede Seite ist auch für sich verständlich.»; README «vom Verstehen über die eigene Situation zum Handeln, mit Lesepfaden nach Rolle und nach Frage»; Plan von der Fachstelle am 10.10.2026 freigegeben | – |
| 4 | Logik konsequent durchgehalten | erfüllt | Eyebrows der gebauten Seiten: «Verstehen» (`depression-verstehen`, `behandlung-und-verlauf`), «Ihre Situation» (`ihre-situation`, `je-nach-rolle`), «Handeln» (`begleiten`, `fuer-sich-sorgen`, `rechte-und-angebote`). Handlungsteile auf «Verstehen»-Seiten (Krisenplan, Einbezug) sind als «05 · Alltag» und «06 · Handeln» gekennzeichnet | – |
| 5 | Navigation spiegelt die Logik | erfüllt | `site.config.json` › `pages` und Hauptnavigation (8 Einträge) in derselben Reihenfolge wie die Gruppen | – |
| 6 | Abhängigkeiten: kein Wissen vorausgesetzt, das später oder nie erklärt wird; Übergänge; Wiederaufnahme früherer Inhalte | teilweise | `rechte-und-angebote` › Abb. 1 verwendet «Bezugspersonen» als Rechtsbegriff, erklärt wird er erst in `vorsorge`; der Lesepfad «Was darf ich erfahren?» landet in Abb. 1. Spätere Seiten greifen frühere Inhalte auf (Rückzug als Krankheitszeichen auf `ihre-situation`, `je-nach-rolle`, `begleiten`), verweisen aber nicht zurück; die Seiten enden ohne Hinweis auf die nächste Seite. Verwendet, aber nicht erklärt: W2-D, letzte Spalte | W2-01, W2-03, W2-08 |
| 7 | Begriffe einheitlich verwendet und definiert; Begriffsübersicht | teilweise | «Bezugsperson» in zwei Bedeutungen; «Einverständnis», «Einwilligung», «Zustimmung» für dasselbe; «mittelgradig» neben «mittelschwer». Eine Begriffsübersicht gab es nicht; sie steht jetzt in W2-D | W2-03, W2-04, W2-05, W2-07 |
| 8 | Keine Widersprüche bei Fakten, Empfehlungen, Zahlen; Erklärmodelle ins Verhältnis gesetzt | teilweise | Widersprüche zwischen Seiten sind bereits W1-Befunde: Verlauf (W1-02), Stärke der Paartherapie (W1-11), «oft» und «meist» Zeichen der Krankheit (W1-12), Bezugspersonen und Auskunft (W1-01). Erklärmodelle: Schwelle (`depression-verstehen`, Entstehung), Gefäss (`ihre-situation`, Belastung der Angehörigen), Kreis (`ihre-situation`, Wechselwirkung) erklären verschiedene Dinge und konkurrieren nicht. «Belastung» heisst in der Schwelle «Belastung der erkrankten Person», im Gefäss «Belastung der Angehörigen» (W2-D) | siehe W1 |
| 9 | Quellen einheitlich zitiert; dieselbe Aussage überall gleich belegt | teilweise | Mehrfach zitierte Quellen stehen gleich da (Barbato 2018 auf `ihre-situation` und `fuer-sich-sorgen`, Stand by You auf `ihre-situation` und `je-nach-rolle`, SGPP auf drei Seiten). Ungleich belegt: Paartherapie auf `je-nach-rolle` ohne Quelle, auf zwei anderen Seiten mit Barbato. Uneinheitliches Format (mit und ohne Titel): W1-09 | W2-06, siehe W1-09 |
| 10 | Haltung durchgehend gleich (Anrede, Ton, Bild der Angehörigen und der erkrankten Person) | erfüllt | «Sie» auf allen Seiten, «du» nur in Formulierungsbeispielen; Angehörige als Begleitende ohne Behandlungsverantwortung (`index` › `kurz`, `begleiten` › Hero, `behandlung-und-verlauf` › Hero); erkrankte Person als selbstbestimmt (`begleiten` › `haltung`, `behandlung-und-verlauf` › Krisenplan). Einzige Spannung: W1-16 | siehe W1-16 |
| 11 | Redundanz bewusst eingesetzt | teilweise | Kerngedanken werden sinnvoll wiederholt und verlinkt (W2-E). Unnötig: Paartherapie mit gleichem Satz auf zwei Seiten und einer dritten Erwähnung | W2-06 |
| 12 | Quereinstieg: Einstiegsseiten für sich verständlich | erfüllt | Jede Seite hat eine einordnende Einleitung (Hero), z. B. `je-nach-rolle`: «Das Allgemeine steht auf den anderen Seiten.»; Die 12 Lesepfade auf `index` führen in 11 Abschnitte und eine Seite. Lücken bei Fachbegriffen auf einzelnen Seiten: W2-08 | W2-08 |
| 13 | Verlinkung unterstützt Aufbaulogik und Quereinstieg | nicht erfüllt | `depression-verstehen`, `behandlung-und-verlauf` und `je-nach-rolle` erhalten von keiner Themenseite einen Link; `rechte-und-angebote` verlinkt keine andere Seite; `depression-verstehen`, `behandlung-und-verlauf` und `begleiten` verlinken je nur eine andere Seite (W2-C). `je-nach-rolle` › `eltern` nennt die Sorge um Suizid ohne Weg zu `begleiten.html#suizidgedanken` | W2-01, W2-02 |
| 14 | Hinweis «ersetzt keine Abklärung» auf jeder Seite | erfüllt | Fusszeile aller 8 gebauten Seiten: `<p … data-disclaimer>Diese Website ersetzt keine individuelle Abklärung, Beratung oder Behandlung.</p>`; zusätzlich `index` › `einstieg` | – |
| 15 | Zuständigkeitsverweis: genau einer an fester Stelle; im Text nur direkt nach einer Handlungsanleitung für akute Lagen; nächster Schritt vorhanden | erfüllt | Fusszeile aller 8 Seiten (`data-safety-access="responsibility"`, geprüft 09.10.2026). Im Text nur zweimal, je direkt nach einer Anleitung: `begleiten` › `suizidgedanken` (nach «… holen Sie gemeinsam Hilfe.») und `fuer-sich-sorgen` › `eigene-krise` (nach «Dann ist es Zeit, Unterstützung für sich zu holen …»); Wortlaut aus `responsibility.inline`. Keine weiteren Verweise. Reihenfolge auf `fuer-sich-sorgen`: W1-18 | siehe W1-18 |
| 16 | Lücken im Gesamtkonzept (Prüfliste) | erfüllt, mit Fragen | Alle neun Themen der Prüfliste sind abgedeckt (W2-L). Fragen zu drei möglichen Lücken an die Fachstelle | W2-10 |

#### W2-B · Raum und Gewichtung

Wörter: sichtbarer Text aus `content/<id>.html` ohne Quellenliste und SVG; «Vertiefung» = Text in `details`.

| Gruppe | Seite | Wörter | davon Vertiefung | sichtbar | Abschnitte | Figuren |
| --- | --- | --- | --- | --- | --- | --- |
| Einstieg | Übersicht | 529 | 0 | 529 | 4 | 0 |
| Verstehen | Depression verstehen | 1289 | 178 | 1111 | 6 | 2 |
| Verstehen | Behandlung und Verlauf | 1460 | 176 | 1284 | 7 | 3 |
| Ihre Situation | Ihre Situation | 1062 | 145 | 917 | 7 | 2 |
| Ihre Situation | Je nach Rolle | 1154 | 39 | 1115 | 8 | 1 |
| Handeln | Begleiten und Gespräche | 809 | 38 | 771 | 6 | 1 |
| Handeln | Für sich sorgen | 695 | 70 | 625 | 6 | 1 |
| Handeln | Rechte und Unterstützung | 774 | 30 | 744 | 5 | 1 |
| | **Summe** | **7772** | **676** | **7096** | **49** | **11** |

**Beurteilung:** Die drei Gruppen sind etwa gleich gross (sichtbar 2395 / 2032 / 2140). Die längste Seite ist «Behandlung und Verlauf»; ihre Spezialthemen stehen in der Vertiefung, und Abb. 2 und 3 haben Ansatzpunkte für Angehörige. Kein Nebenthema ist überproportional ausgebaut. Zur Frage der bauenden Sitzung (Visualisierungs-Check Nr. 9), ob «Je nach Rolle» als Textseite trägt: Aus Sicht von W2 ja. Jeder der sechs Abschnitte ist ein eigenständiges Ziel eines Lesepfads und für sich lesbar; die Beziehungsdynamik zeigt der verlinkte Kreis auf `ihre-situation`. Das abschliessende Urteil gehört in den Visualisierungs-Check.

#### W2-C · Verlinkung zwischen den Seiten

Interne Links im Inhalt (ohne Navigation, Fusszeile und `index`):

| Seite | verlinkt auf | wird verlinkt von |
| --- | --- | --- |
| Depression verstehen | `begleiten#ansprechen` | – |
| Behandlung und Verlauf | `rechte-und-angebote#schweigepflicht` | – |
| Ihre Situation | `rechte-und-angebote#schweigepflicht`, `fuer-sich-sorgen` (2×), `fuer-sich-sorgen#eigene-krise`, `begleiten#suizidgedanken` | `je-nach-rolle` |
| Je nach Rolle | `ihre-situation`, `ihre-situation#wechselwirkung`, `begleiten`, `rechte-und-angebote`, `rechte-und-angebote#schweigepflicht` | – |
| Begleiten und Gespräche | `fuer-sich-sorgen`, `fuer-sich-sorgen#grenzen` | `depression-verstehen`, `ihre-situation`, `je-nach-rolle` |
| Für sich sorgen | `rechte-und-angebote#angebote` | `ihre-situation`, `begleiten` |
| Rechte und Unterstützung | – | `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `fuer-sich-sorgen` |

Die Links laufen fast nur «vorwärts» zu Handeln und Rechten. Die beiden Verstehensseiten und «Je nach Rolle» sind nur über `index` und die Navigation erreichbar.

**Vorgeschlagene Verweise** (Ort im Text › Ziel; je ein kurzer Satz oder Linktext, kein neuer Inhalt):

| Nr. | Ort | Anlass im Text | Ziel |
| --- | --- | --- | --- |
| L1 | `je-nach-rolle` › `eltern` | «ob sich das Kind etwas antun könnte» | `begleiten.html#suizidgedanken` (W2-02) |
| L2 | `depression-verstehen` › `was-ist` | «Gedanken an den Tod oder an Suizid» | `begleiten.html#suizidgedanken` (W2-02) |
| L3 | `je-nach-rolle` › `partner` | «Rückzug, Gereiztheit und wenig Lust auf Nähe sind … Zeichen der Krankheit» | `depression-verstehen.html#dahinter` |
| L4 | `ihre-situation` › `wechselwirkung` | Station 1 «Rückzug und Gereiztheit» (Frage der bauenden Sitzung, Visualisierungs-Check Nr. 6) | `depression-verstehen.html#dahinter` |
| L5 | `begleiten` › `ansprechen` | «Ermutigen Sie zu einer Abklärung» | `behandlung-und-verlauf.html#weg` |
| L6 | `depression-verstehen` › `anders` | «Die Hausarztpraxis ist ein guter erster Schritt.» | `behandlung-und-verlauf.html#weg` |
| L7 | `behandlung-und-verlauf` › `behandelbar` | «richtet sich vor allem nach dem Schweregrad» | `depression-verstehen.html#was-ist` |
| L8 | `behandlung-und-verlauf` › `vorbeugen` | Krisenplan: «wie und von wem die Zeichen angesprochen werden dürfen» | `begleiten.html#ansprechen` |
| L9 | `je-nach-rolle` › `erwachsene-kinder` | «Sie dürfen Grenzen setzen» | `fuer-sich-sorgen.html#grenzen` |
| L10 | `rechte-und-angebote` › `angebote` | Einleitung der Angebote | `fuer-sich-sorgen.html#netz` |
| L11 | `rechte-und-angebote` › `schweigepflicht` | nach dem Formulierungsbeispiel | `behandlung-und-verlauf.html#einbezug` |
| L12 | Ende jeder Themenseite | Übergang zur nächsten Seite der Aufbaulogik (ein Satz, wie `depression-verstehen` › `was-ist` › `.puk-longform__transition`) | nächste Seite |

#### W2-D · Begriffsübersicht

Zählung im sichtbaren Text je Seite: idx = Übersicht, dv = Depression verstehen, bv = Behandlung und Verlauf, is = Ihre Situation, ro = Je nach Rolle, bg = Begleiten, fs = Für sich sorgen, ra = Rechte und Unterstützung.

| Begriff | idx | dv | bv | is | ro | bg | fs | ra | Bedeutung und Befund |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bezugsperson | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | **zwei Bedeutungen:** umgangssprachlich auf `index` («Angehörige und nahe Bezugspersonen», Zielgruppe) und `je-nach-rolle` («eine verlässliche Bezugsperson», Schutzfaktor); Rechtsbegriff des PatG ZH auf `ra`, dort in Abb. 1 vor der Erklärung in `vorsorge` → W2-03 |
| Einverständnis / einverstanden | 1 | 0 | 2 | 0 | 1 | 1 | 0 | 0 | dieselbe Sache wie «Einwilligung» und «Zustimmung»; die Kernaussage «auch ohne Einverständnis» führt auf eine Seite, die «Einwilligung» sagt → W2-04 |
| Einwilligung | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | → W2-04 |
| Zustimmung | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | → W2-04 |
| mittelgradig | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 0 | Schweregrad der Diagnose → W2-05 |
| mittelschwer | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | SGB-Zahl (Fragebogen) und Johanniskraut → W2-05 |
| Fachperson | 0 | 2 | 3 | 0 | 0 | 0 | 0 | 3 | einzelne behandelnde Person; einheitlich |
| Behandlungsteam | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 1 | Team; einheitlich neben «Fachperson» |
| Fachleute | 0 | 3 | 1 | 0 | 1 | 1 | 0 | 0 | Fachwelt allgemein («Fachleute sprechen von …»); einheitlich |
| Episode | 0 | 3 | 3 | 0 | 0 | 0 | 0 | 0 | auf beiden Seiten erklärt («Phasen, die Fachleute Episoden nennen»); einheitlich |
| Rückfall | 1 | 0 | 10 | 1 | 0 | 0 | 0 | 0 | einheitlich; «Rezidiv» kommt nicht vor |
| Krisenplan | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | meint einen Plan für frühe Zeichen eines Rückfalls → W2-09 |
| Belastung | 2 | 8 | 0 | 8 | 2 | 0 | 2 | 0 | zwei Bedeutungen, aus dem Zusammenhang klar: Belastung der erkrankten Person (Schwelle, `dv` › `entstehung`) und der Angehörigen (`is`, `fs`); kein Befund |
| Beratungsstelle | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | unbestimmt («eine Beratungsstelle für Angehörige»); die Angebote stehen auf `ra` › `angebote` → Link (W2-01) |
| Hausarztpraxis / Hausärztin | 0 | 2 | 6 | 0 | 0 | 2 | 2 | 0 | einheitlich |
| Ansatzpunkt | 0 | 0 | 5 | 6 | 0 | 0 | 0 | 0 | in den Figuren erklärt; einheitlich |
| Schweigepflicht | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | einheitlich |
| erkrankte Person | 4 | 4 | 7 | 1 | 1 | 2 | 4 | 8 | einheitliche Bezeichnung |
| Suizid / nicht mehr leben | 2 | 2 | 1 | 4 | 0 | 4 | 1 | 0 | `ro` nennt die Sorge ohne das Wort und ohne Link → W2-02 |

**Verwendet, aber nicht erklärt** (für den Quereinstieg): «NVL» und «unipolar» in Bildlegenden (`dv`, `bv`); «Tagesklinik» (`bv` › Abb. 2); «Achtsamkeit» (`fs` › `was-hilft`); «Betreuungsgutschriften», «Hilflosenentschädigung», «IV-Rente» (`ra` › `arbeit-geld`); «VASK» (`ro`, `ra`) → W2-08.

#### W2-E · Redundanzen

| Inhalt | Stellen | Bewertung | Vorschlag |
| --- | --- | --- | --- |
| Beobachtungen mitteilen, auch ohne Einverständnis | `index` › `kurz`; `bv` › Abb. 2 und `einbezug`; `ro` › `eltern`; `ra` › `schweigepflicht` | sinnvoll: Kerngedanke, überall mit Link auf `ra` | – |
| Niemand ist schuld | `index`; `dv` › `entstehung` und Abb. 2; `is` › Abb. 2; `bv` › `verlauf` («kein Versagen») | sinnvoll: Kerngedanke | – |
| Rückzug und Gereiztheit als Zeichen der Krankheit | `dv` › `dahinter` (Abb. 1); `is` › Abb. 2 Station 1; `ro` › `partner`; `bg` › `alltag` | sinnvoll, aber ohne Rückverweis auf die Seite, die es erklärt | L3, L4 (W2-01) |
| Gereiztheit und Übergriffe | `bg` › `alltag` (Liste und Absatz); `fs` › `grenzen` | zwischen den Seiten sinnvoll (`bg` verweist auf `fs`); auf `bg` steht «Gereiztheit» zweimal hintereinander (Liste «Gereiztheit als Teil der Krankheit sehen.» und Absatz «Gereiztheit gehört oft zur Krankheit.») | auf `bg` einmal → S |
| Paartherapie | `is` › Abb. 2 › Vertiefung; `ro` › `partner`; `fs` › `was-hilft`. Der Satz «Gegen die Depression wirkt sie nach bisherigen, noch schwachen Studien ähnlich gut wie eine Einzeltherapie.» steht wörtlich auf `is` und `fs` | unnötig, zudem unterschiedlich stark (W1-11) | ausführen nur auf `fs` › `was-hilft`; auf `is` und `ro` ein Satz mit Link (W2-06) |
| Hausarztpraxis als erster Schritt | `dv` › `anders`; `bv` › `weg`; `bg` › `ansprechen` und `ablehnung` | sinnvoll | Link L5, L6 |
| Fachstelle berät kostenlos | `index` › `einstieg`; `fs` › `eigene-krise`; `ra` › `angebote`; Fusszeile | sinnvoll (Kontakt) | – |
| SGB-Zahl «rund jede zehnte Person» | `index` › `einstieg`; `dv` › `was-ist` | sinnvoll: Startseite fasst zusammen | – |
| Kinderseele, VASK-Gruppe | `ro` › `kinder`, `erwachsene-kinder`; `ra` › `angebote` | sinnvoll: Quereinstieg nach Rolle | – |

#### W2-L · Lücken im Gesamtkonzept (Prüfliste)

| Thema der Prüfliste | Abgedeckt auf | Ergebnis |
| --- | --- | --- |
| Störungsbild verstehen | `depression-verstehen` | erfüllt |
| Diagnose und Verlauf | `depression-verstehen` › `was-ist`; `behandlung-und-verlauf` › `verlauf` | erfüllt |
| Behandlung | `behandlung-und-verlauf` | erfüllt |
| Kommunikation | `begleiten` › `ansprechen`; Formulierungsbeispiele (`.puk-say`) auf fünf Seiten, dazu ein Beispiel in `depression-verstehen` › Abb. 1 | erfüllt |
| Umgang mit Ablehnung von Hilfe | `begleiten` › `ablehnung` | erfüllt |
| eigene Belastung und Grenzen | `ihre-situation`; `fuer-sich-sorgen` | erfüllt |
| Rechte und Schweigepflicht (Schweizer Recht) | `rechte-und-angebote` (ohne fürsorgerische Unterbringung, Entscheid der Fachstelle) | erfüllt |
| Geschwister und Kinder | `je-nach-rolle` › `kinder`, `geschwister`, `erwachsene-kinder` | erfüllt |
| Unterstützungsangebote | `rechte-und-angebote` › `angebote`; `fuer-sich-sorgen` › `netz` | erfüllt |
| Krisenthemen | `begleiten` › `suizidgedanken` mit Zuständigkeitsverweis; keine Krisenseite | keine Lücke (Profil «Zuständigkeit statt Krisenzugang») |

**Mögliche Lücken, gemessen an Ziel und Zielgruppe** (Entscheid der Fachstelle, W2-F-07):

1. **Klinikaufenthalt und Austritt aus Sicht der Angehörigen.** `behandlung-und-verlauf` › Abb. 2 nennt Tagesklinik oder Klinik in einem Satz; was Angehörige während eines Aufenthalts und beim Austritt tun können, steht nirgends.
2. **Angehörige älterer Menschen.** Depression im Alter kommt nur in `depression-verstehen` › `anders` vor; zu den erwachsenen Kindern siehe W1-14.
3. **Arbeit und Einkommen der erkrankten Person.** `rechte-und-angebote` › `arbeit-geld` behandelt nur die Ansprüche der Angehörigen; Fragen zu Krankschreibung, Taggeld oder IV der erkrankten Person sind für viele Familien zentral.

#### W2-F · Fragen an die Fachstelle (Prüfbedarf)

1. **W2-F-01 · Begriff «Bezugsperson»** (W2-03). Soll «Bezugsperson» nur noch als Rechtsbegriff auf `rechte-und-angebote` stehen und dort beim ersten Auftreten (Abb. 1) kurz erklärt werden? Und sollen `index` («nahe Bezugspersonen») und `je-nach-rolle` («eine verlässliche Bezugsperson») ein anderes Wort erhalten, etwa «nahestehende Menschen» bzw. «ein verlässlicher Erwachsener»? Je Ja/Nein.
2. **W2-F-02 · Einverständnis oder Einwilligung** (W2-04). Welcher Begriff gilt auf allen Seiten? Vorschlag: «Einverständnis» im Text, auf `rechte-und-angebote` einmal «Einverständnis (rechtlich: Einwilligung)» und danach einheitlich.
3. **W2-F-03 · Schweregrad** (W2-05). «mittelgradig» für die Diagnose überall; bei der SGB-Zahl «mittelschwere bis schwere Beschwerden (nach einem Fragebogen)» und beim Johanniskraut «mittelgradig» (Ja/Nein)?
4. **W2-F-04 · Paartherapie bündeln** (W2-06). Paartherapie nur auf `fuer-sich-sorgen` › `was-hilft` ausführen; auf `ihre-situation` und `je-nach-rolle` je ein Satz mit Link (Ja/Nein)? Wortlaut gemäss W1-F-17.
5. **W2-F-05 · «Krisenplan»** (W2-09). Soll der Plan für frühe Zeichen anders heissen, etwa «Plan für schwierige Zeiten» oder «Vorsorgeplan», damit er nicht wie ein Krisenzugang klingt und zum Abschnitt «Frühe Zeichen und gemeinsam vorbeugen» passt?
6. **W2-F-06 · Kernsatz zur Selbstsorge** (W2-11). Soll `index` › `kurz` einen sechsten Kernsatz zu «Für sich sorgen» erhalten, etwa «Sie dürfen auf sich achten und sich Unterstützung holen (Für sich sorgen)»?
7. **W2-F-07 · Mögliche Lücken** (W2-10). Braucht die Website (a) einen Abschnitt zu Klinikaufenthalt und Austritt, (b) mehr zu Angehörigen älterer Menschen, (c) Hinweise zu Arbeit und Einkommen der erkrankten Person? Je Ja/Nein; bei Ja Ort (Seite, Abschnitt).
8. **W2-F-08 · Verweise** (W2-01, W2-02). Keine fachliche Frage: Struktur und Verweise darf die bauende Sitzung entscheiden. Die Fachstelle wird nur informiert, dass L1 bis L12 eingefügt werden.

#### W2-H · Befunde W2

Schwere: **wichtig** = vor S umsetzen; **optional** = Verbesserung. Quelle aller Befunde: Prüfung 1. W1-Befunde werden nicht wiederholt.

- **W2-01 · wichtig · Verlinkung trägt die Aufbaulogik nicht.**
  - **Beleg:** W2-C. `depression-verstehen`, `behandlung-und-verlauf` und `je-nach-rolle` erhalten von keiner Themenseite einen Link; `rechte-und-angebote` verlinkt keine Seite; `depression-verstehen`, `behandlung-und-verlauf` und `begleiten` verlinken je nur eine andere Seite. Spätere Seiten nehmen Inhalte der Verstehensseiten auf (Rückzug, Hausarztpraxis, Schweregrad), ohne zurückzuverweisen; keine Seite führt am Ende zur nächsten.
  - **Vorschlag:** Verweise L3 bis L12 aus W2-C.
  - **Zuständig:** bauende Sitzung (Struktur).
- **W2-02 · wichtig · Sorge um Suizid ohne Weg zur Anleitung.**
  - **Beleg:** `je-nach-rolle` › `eltern`: «Die grösste Sorge gilt oft der Frage, ob sich das Kind etwas antun könnte.» – kein Link auf `begleiten.html#suizidgedanken`, obwohl Eltern hier über den Lesepfad einsteigen. `ihre-situation` › `angst` macht es richtig («Was Sie tun können, wenn Sie befürchten, … steht unter …»). Ebenso ohne Link: `depression-verstehen` › `was-ist` «Gedanken an den Tod oder an Suizid».
  - **Vorschlag:** L1 und L2, jeweils ein Satz wie auf `ihre-situation` › `angst`.
  - **Zuständig:** bauende Sitzung.
- **W2-03 · wichtig · «Bezugsperson» mit zwei Bedeutungen; Rechtsbegriff vor der Erklärung.**
  - **Beleg:** `index` › `einstieg`: «Angehörige und nahe Bezugspersonen»; `je-nach-rolle` › `kinder`: «eine verlässliche Bezugsperson»; `rechte-und-angebote` › Abb. 1: «im Kanton Zürich an Bezugspersonen möglich», erklärt erst in `vorsorge`. Eine Freundin, die sich als «nahe Bezugsperson» angesprochen fühlt, kann daraus ein Auskunftsrecht ableiten, das nach PatG ZH nur Bezugspersonen im Rechtssinn haben.
  - **Zuständig:** Fachstelle (W2-F-01), danach bauende Sitzung; gemeinsam mit W1-01 lösen.
- **W2-04 · optional · Einverständnis, Einwilligung, Zustimmung.**
  - **Beleg:** W2-D; `index` › `kurz` «auch ohne Einverständnis» verlinkt auf `rechte-und-angebote`, wo die Spalten «Ohne Einwilligung» und «Mit Einwilligung» heissen und der Kurztext «Zustimmung» sagt.
  - **Zuständig:** Fachstelle (W2-F-02).
- **W2-05 · optional · «mittelgradig» und «mittelschwer».**
  - **Beleg:** `depression-verstehen` › `was-ist`: «leichte, mittelgradige und schwere Depressionen» und zwei Absätze später «mittelschwere bis schwere depressive Beschwerden»; `behandlung-und-verlauf` › `behandelbar` «Mittelgradige Depression», Vertiefung Abb. 1 «leichter bis mittelschwerer Depression».
  - **Zuständig:** Fachstelle (W2-F-03).
- **W2-06 · optional · Paartherapie dreimal, zweimal mit gleichem Satz.**
  - **Beleg:** W2-E; gleicher Satz auf `ihre-situation` › Abb. 2 › Vertiefung und `fuer-sich-sorgen` › `was-hilft`; dritte Erwähnung ohne Quelle auf `je-nach-rolle` › `partner`.
  - **Zuständig:** Fachstelle (W2-F-04), danach bauende Sitzung.
- **W2-07 · optional · Begriffsübersicht pflegen.**
  - **Beleg:** Die Leitlinie verlangt eine Begriffsübersicht, sobald mehrere Seiten dieselben Begriffe einführen. Es gab keine; W2-D ist ein Anfang.
  - **Vorschlag:** W2-D nach den Entscheiden W2-F-01 bis W2-F-03 nachführen und bei jeder Textänderung (S) prüfen.
  - **Zuständig:** bauende Sitzung.
- **W2-08 · optional · Begriffe ohne Erklärung beim Quereinstieg.**
  - **Beleg:** W2-D, letzte Zeile: «NVL», «unipolar», «Tagesklinik», «Achtsamkeit», «Betreuungsgutschriften», «Hilflosenentschädigung», «IV-Rente», «VASK».
  - **Zuständig:** S (Sprach-Review), Abkürzungen in Legenden ausschreiben.
- **W2-09 · optional · «Krisenplan» für einen Plan bei frühen Zeichen.**
  - **Beleg:** `behandlung-und-verlauf` › `vorbeugen`: Zwischenüberschrift «Einen Krisenplan vereinbaren» im Abschnitt «Frühe Zeichen und gemeinsam vorbeugen»; Inhalt: «was bei einem Rückfall gelten soll». Das Profil vermeidet Krisenzugang; der Begriff steht sonst nirgends.
  - **Zuständig:** Fachstelle (W2-F-05).
- **W2-10 · optional · Mögliche Lücken.**
  - **Beleg:** W2-L, «Mögliche Lücken» 1 bis 3.
  - **Zuständig:** Fachstelle (W2-F-07).
- **W2-11 · optional · Selbstsorge fehlt unter den Kernsätzen der Übersicht.**
  - **Beleg:** `index` › `kurz`: fünf Kernsätze zu Krankheit, Schuld, Belastung, Begleiten und Rechten; «Für sich sorgen» ist nur über den Lesepfad «Mir wird es zu viel.» und die Kapitelliste erreichbar.
  - **Zuständig:** Fachstelle (W2-F-06).

#### Zählung der Befunde W2

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| wichtig | 3 | W2-01, W2-02, W2-03 |
| optional | 8 | W2-04 bis W2-11 |
| Fragen an die Fachstelle | 8 | W2-F-01 bis W2-F-08 (W2-F-08 nur zur Information) |

#### Vor S umzusetzen (Strukturänderungen)

1. Verweise L1 bis L12 einfügen (W2-01, W2-02) – bauende Sitzung, ohne fachlichen Entscheid.
2. Begriffe nach W2-F-01 bis W2-F-03 vereinheitlichen und W2-D nachführen (W2-03 bis W2-05, W2-07).
3. Paartherapie nach W2-F-04 bündeln (W2-06).
4. Allfällige neue Abschnitte nach W2-F-06 und W2-F-07 (W2-10, W2-11).
5. Die W1-Befunde, die Text auf mehreren Seiten ändern (W1-01, W1-02, W1-11, W1-12), mit diesen Änderungen zusammen umsetzen, damit S nur feststehenden Text prüft.

#### Prüfrunde 2 · Nachprüfung der Umsetzung (11.10.2026, Stand `f413f69`)

**Geprüft durch:** dieselbe Prüfsitzung. Grundlage wie W1, Prüfrunde 2; dazu Linkgraf und Wörter neu gezählt.

**Umsetzung je Befund**

| Befund | Entscheid | Umsetzung (Beleg) | Ergebnis |
| --- | --- | --- | --- |
| W2-01 Verlinkung | bauende Sitzung | Verweise L3 bis L11 im Text (z. B. `je-nach-rolle` › `partner` → `depression-verstehen.html#dahinter`; `begleiten` › `ansprechen` → `behandlung-und-verlauf.html#weg`; `rechte-und-angebote` › `angebote` → `fuer-sich-sorgen.html#netz`); L12 als Übergangssatz am Ende der Seiten 2 bis 7 (je ein `.puk-longform__transition`). Linkgraf neu: Jede Themenseite wird von mindestens einer anderen verlinkt (`depression-verstehen` von 3, `behandlung-und-verlauf` von 3, `je-nach-rolle` von 1, `rechte-und-angebote` von 4); `rechte-und-angebote` verlinkt 2 Seiten | erledigt |
| W2-02 Suizid ohne Weg | bauende Sitzung | `je-nach-rolle` › `eltern`: «Was Sie tun können, wenn Sie befürchten, dass Ihr Kind nicht mehr leben will, steht unter …»; `depression-verstehen` › `was-ist`: gleicher Satz; dazu `behandlung-und-verlauf` › Klinikaufenthalt | erledigt |
| W2-03 «Bezugsperson» | W2-F-01 ja | «Bezugsperson» nur noch auf `rechte-und-angebote` (7 Stellen), vor Abb. 1 erklärt; `index`: «nahestehende Menschen»; Schutzfaktor auf `je-nach-rolle` ohne das Wort | erledigt |
| W2-04 Einverständnis | W2-F-02 | «Einverständnis» auf `index`, `behandlung-und-verlauf`, `je-nach-rolle`, `begleiten`, `rechte-und-angebote`; «Einwilligung» nur einmal als «(rechtlich: Einwilligung)»; «Zustimmung» kommt nicht mehr vor | erledigt |
| W2-05 Schweregrad | W2-F-03 | «mittelgradig» für die Diagnose (`depression-verstehen` 1, `behandlung-und-verlauf` 3); «mittelschwer» nur bei der SGB-Zahl mit «(nach einem Fragebogen)» | erledigt |
| W2-06 Paartherapie | W2-F-04 | ausgeführt nur auf `fuer-sich-sorgen` › `was-hilft`; `ihre-situation` und `je-nach-rolle`: «kann eine Paartherapie eine Möglichkeit sein. Mehr dazu unter …» | erledigt |
| W2-07 Begriffsübersicht | bauende Sitzung | Tabelle «Begriffe nach den Entscheiden W2-F-01 bis W2-F-03» oben im Bericht; Zählung der Prüfsitzung bestätigt sie | erledigt |
| W2-08 Begriffe ohne Erklärung | an S | «NVL», «unipolar», «Tagesklinik», «Achtsamkeit», «Betreuungsgutschriften», «Hilflosenentschädigung», «IV-Rente», «VASK» unverändert | an S übergeben (S-Befund) |
| W2-09 «Krisenplan» | W2-F-05 | «Einen Plan für schwierige Zeiten vereinbaren»; «Krisenplan» kommt nicht mehr vor | erledigt |
| W2-10 Lücken | W2-F-07 a ja, b über W1-F-09, c nein | `behandlung-und-verlauf` › «Wenn ein Klinikaufenthalt nötig wird» (nach Abb. 2, im Abschnitt `weg`); `je-nach-rolle` › `erwachsene-kinder`, Absatz zum Elternteil, der erst im Alter erkrankt | erledigt |
| W2-11 Kernsatz Selbstsorge | W2-F-06 | `index` › `kurz`, sechster Kernsatz: «Sie dürfen auf sich achten und sich Unterstützung holen (Für sich sorgen).» | erledigt |

**Neue Struktur geprüft**

- **Raum:** 8473 Wörter (vorher 7772); sichtbar ohne Vertiefung: Verstehen 2665 (1212 + 1453), Ihre Situation 2268 (986 + 1282), Handeln 2295 (794 + 679 + 822). Die Gewichtung bleibt ausgeglichen.
- **Neuer Abschnitt zum Klinikaufenthalt:** passt in `weg` direkt nach Schritt 4 «Tagesklinik oder Klinik» und braucht keine eigene Planzeile (Teil des Abschnitts `weg`). Gate ohne Befund «plan-section».
- **Übergangssätze:** führen in der Reihenfolge der Navigation weiter; die letzte Seite hat keinen, die Übersicht braucht keinen.
- **Zuständigkeitsverweis:** weiter einmal in jeder Fusszeile und zweimal im Text direkt nach einer Anleitung für akute Lagen; neu steht er auf `fuer-sich-sorgen` vor dem Satz zur Fachstelle (W1-18). Der neue Abschnitt zum Klinikaufenthalt verweist auf `begleiten.html#suizidgedanken`, ohne eigenen Verweis – richtig, weil er keine Anleitung für akute Lagen enthält.

**Ergebnis:** Alle 16 Prüfpunkte aus Runde 1 sind mit Beleg geprüft, alle elf Befunde erledigt oder an S übergeben (W2-08). Neue W2-Befunde: keine. W2 ist **erledigt**. Was die W1-Befunde der Runde 2 noch ändern (Quellen, einzelne Wörter), berührt den Aufbau nicht.

### S Sprach-Review

#### Prüfrunde S (11.10.2026, Stand `f413f69`)

**Geprüft durch:** dieselbe Prüfsitzung (Claude Code, hat nicht gebaut). Keine Inhalte und kein Code geändert. S liefert hier Befunde mit Formulierungsvorschlägen; die überarbeitete Fassung setzt die bauende Sitzung um, sobald die Fachstelle die Vorschläge freigegeben hat.

**Grundlage:** der vollständige sichtbare Text aller acht Seiten nach Prüfrunde 2 (Fliesstext, Überschriften, Lesepfade, Teaser, Bildlegenden, Kern- und Kurztexte der Figuren, Vertiefungen, Textfassungen, Gesprächsbeispiele, Schaltflächen), Satz für Satz gelesen. Kriterien: Abschnitt «Sprache und Ton» (`guidelines/00-sprache-und-ton.md`), Rahmen und Punkte 1 bis 6. Übernommen aus W1 und W2: «die Hälfte der Erkrankten» (W1-12) und Begriffe ohne Erklärung (W2-08).

**Ergebnis:** S bleibt **offen**. 27 Befunde (5 wichtig, 22 optional) und 2 Fragen an die Fachstelle. Der Text ist durchgehend verständlich, ruhig und zugewandt, die Sätze sind kurz. Die wichtigen Befunde betreffen fünf Stellen, an denen ein Bezug unklar ist oder die Reihenfolge den Sinn verschiebt.

**Lesetest: Satzlängen** (sichtbarer Text ohne Quellenliste und Textfassungen; Sätze ab vier Wörtern; Zählung der Prüfsitzung)

| Seite | Sätze | Ø Wörter | über 25 Wörter | über 30 Wörter |
| --- | --- | --- | --- | --- |
| Übersicht | 51 | 10,5 | 1 | 0 |
| Depression verstehen | 117 | 10,6 | 1 | 0 |
| Behandlung und Verlauf | 145 | 9,9 | 2 | 0 |
| Ihre Situation | 81 | 12,1 | 4 | 1 |
| Je nach Rolle | 100 | 12,0 | 7 | 1 |
| Begleiten und Gespräche | 77 | 9,6 | 1 | 0 |
| Für sich sorgen | 62 | 10,6 | 0 | 0 |
| Rechte und Unterstützung | 68 | 10,7 | 3 | 1 |

Längster Satz (36 Wörter): `ihre-situation` › `belastung`, «Wie stark die Belastung ist, hängt weniger von der Diagnose ab als von der Lebenslage: …» – durch den Doppelpunkt gut lesbar, kein Befund. Kein Stakkato: Kurze Sätze stehen dort, wo sie klären («Das stimmt nicht.», «Fragen Sie direkt nach.»).

**Prüfpunkte**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| Rahmen: Schweizer Hochdeutsch, Guillemets | erfüllt | kein «ß», keine „…“ in `content/` (Gate-Hinweis «orthography» ohne Befund); Guillemets durchgehend | – |
| Rahmen: Anrede | erfüllt | «Sie» auf allen Seiten, «du» nur in Gesprächsbeispielen. Zweimal ist «Sie» am Satzanfang doppeldeutig | S-01, S-11 |
| Rahmen: Zuständigkeit | erfüllt | keine Nummern, kein Notfallblock; Verweis im Text nur über den Platzhalter (`begleiten` › `suizidgedanken`, `fuer-sich-sorgen` › `eigene-krise`); Frühwarnzeichen und Plan als Psychoedukation (`behandlung-und-verlauf` › `vorbeugen`) | – |
| 1 Zusammenhängend und verständlich | teilweise | gute Übergänge zwischen den Seiten (`.puk-longform__transition`). An einzelnen Stellen unterbrechen Verweissätze den Gedankengang oder ein Bezug ist unklar | S-03, S-04, S-05, S-06, S-16, S-23, S-26 |
| 1 Fachbegriffe beim ersten Auftreten erklärt | teilweise | erklärt: Episode, Dysthymie, «Wir-Krankheit», Bezugsperson. Nicht erklärt: NVL, unipolar, Tagesklinik, Achtsamkeit, Betreuungsgutschriften, Hilflosenentschädigung, VASK (aus W2-08) | S-21 |
| 2 Zugewandt und respektvoll | erfüllt, ein Befund | keine Unterstellungen, kein Pathos; behutsam: «Das kann sich wie Ablehnung anfühlen.» (`depression-verstehen` › `dahinter`). «Sie dürfen» oder «dürfen Sie» steht 15-mal; meist bei Rechten richtig, an zwei Stellen entbehrlich | S-15 |
| 3 Gesprächsbeispiele | erfüllt, Einzelbefunde | 10 Gesprächsfelder (`.puk-say`) mit 10 Beispielen «So könnte es klingen», davon 4 als Gegenüberstellung «eher problematisch / eher hilfreich»; laut gelesen natürlich, z. B. «Ich denke an dich. Du musst nicht antworten. …» (`je-nach-rolle` › `freunde`). Zwei Beispiele mit gleichem Muster; die Waage spricht in einem Bild von zwei Kindern; ein Beispiel klingt gestelzt | S-10, S-20, S-25 |
| 4 Eigene Bedürfnisse, Möglichkeiten, Zuständigkeiten | erfüllt | «Heilen können Sie die Depression nicht, und das ist auch nicht Ihre Aufgabe.» (`begleiten` › Hero); «Eine Grenze ist ein Entscheid über Ihren eigenen Beitrag» (`fuer-sich-sorgen` › `grenzen`); «Ein solcher Plan gehört der erkrankten Person.» (`behandlung-und-verlauf` › `vorbeugen`) | – |
| 5 Fachliche Bedeutung schützen | erfüllt, ein Befund | keine Verschiebung von «kann» zu «wird» gefunden; Einschränkungen stehen beim Befund («in kleineren Studien von begrenzter Qualität»). Absolut formuliert: «Sie werden nie abrupt abgesetzt» | S-17 |
| 6 Gliederung, Überschriften, Website-Texte | teilweise | Schaltflächen nennen die Handlung («Schritt für Schritt aufbauen», «Zurück», «Weiter»). Eine Überschrift verspricht, was der Text nicht mehr sagt; eine interne Bezeichnung in einer Legende; einzelne Teaser ungenau | S-02, S-19, S-24, S-27 |

#### Befunde S

Schwere: **wichtig** = Bezug oder Sinn unklar, vor der Freigabe ändern; **optional** = Verbesserung. Jeder Vorschlag lässt die fachliche Aussage unverändert, ausser wo «Prüfbedarf» steht. Quelle aller Befunde: Prüfung 1.

- **S-01 · wichtig · «Sie» doppeldeutig auf der Rechteseite.**
  - **Ist** (`rechte-und-angebote` › `schweigepflicht`): «Ärztinnen, Psychologen und Pflegefachpersonen stehen unter Schweigepflicht. Sie dürfen Anvertrautes nur weitergeben, wenn …» – «Sie» am Satzanfang kann als Anrede gelesen werden, ausgerechnet auf der Seite, die erklärt, was Angehörige dürfen.
  - **Vorschlag:** «Ärztinnen und Ärzte, Psychologinnen und Psychologen sowie Pflegefachpersonen stehen unter Schweigepflicht. Diese Fachpersonen dürfen Anvertrautes nur weitergeben, wenn die erkrankte Person einverstanden ist (rechtlich: Einwilligung) oder ein Gesetz es erlaubt.»
- **S-02 · wichtig · Überschrift verspricht eine Rangfolge.**
  - **Ist:** `ihre-situation`, Überschrift «Was am meisten belastet»; seit Runde 2 nennt der Text keine Rangfolge mehr («Viele Angehörige sorgen sich …», W1-10). Ebenso `site.config.json` › `v-is-was-belastet` › `section`.
  - **Vorschlag:** «Was besonders belastet»; die Seitennavigation («Was belastet») bleibt.
- **S-03 · wichtig · Verweissätze wiederholen ihren Linktext.**
  - **Ist** (6 Stellen):
    - `depression-verstehen` › `was-ist`, `ihre-situation` › `angst`, `behandlung-und-verlauf` › Klinikaufenthalt: «Was Sie tun können, wenn Sie befürchten, dass die Person nicht mehr leben will, steht unter Wenn Sie befürchten, dass die Person nicht mehr leben will.»
    - `je-nach-rolle` › `eltern`: «… dass Ihr Kind nicht mehr leben will, steht unter Wenn Sie befürchten, dass die Person nicht mehr leben will.»
    - `begleiten` › `ansprechen`: «Wie der Weg in die Behandlung aussieht, steht unter Der Weg in die Behandlung.»
    - `begleiten` › Vertiefung Abb. 1: «Für sich zu sorgen gehört dazu: Für sich sorgen.»
  - Insgesamt stehen 22 eigene Verweissätze («steht unter», «Mehr dazu unter») und 6 Übergangssätze im Text.
  - **Vorschlag:** kurzer Linktext wie in der Seitennavigation, z. B. «Was Sie tun können, wenn Sie befürchten, dass die Person nicht mehr leben will, steht im Abschnitt [Bei Suizidgedanken] auf der Seite «Begleiten und Gespräche».»; «Wie es danach weitergeht, steht unter [Der Weg in die Behandlung].»; «Für sich zu sorgen gehört dazu (Seite [Für sich sorgen]).» Wo ein Satz schon da ist, die vorhandenen Wörter verlinken statt einen Satz anzuhängen, z. B. `je-nach-rolle` › `partner`: «… sind oft [Zeichen der Krankheit], keine Ablehnung Ihrer Person.»
- **S-04 · wichtig · «Bei Männern»: Bezug von «Diese Zeichen» unklar.**
  - **Ist** (`depression-verstehen` › `anders`): «… manchmal auch als Flucht in die Arbeit. Ob sich Depression bei Männern grundsätzlich anders zeigt, ist noch nicht sicher geklärt. Männer lassen sich seltener behandeln, und sie sterben in der Schweiz fast dreimal so oft durch Suizid wie Frauen. Diese Zeichen kommen auch bei Frauen vor.» – der letzte Satz folgt auf die Suizidzahl und kann auf sie bezogen werden.
  - **Vorschlag:** «Depression kann sich eher als Gereiztheit, Wut, mehr Alkohol oder riskantes Verhalten zeigen, manchmal auch als Flucht in die Arbeit. Diese Zeichen kommen auch bei Frauen vor; ob sich Depression bei Männern grundsätzlich anders zeigt, ist noch nicht sicher geklärt. Männer lassen sich seltener behandeln, und sie sterben in der Schweiz fast dreimal so oft durch Suizid wie Frauen.»
- **S-05 · wichtig · Klinikaustritt: Reihenfolge verschiebt den Sinn.**
  - **Ist** (`behandlung-und-verlauf` › «Wenn ein Klinikaufenthalt nötig wird»): «Die ersten Wochen nach einem Klinikaustritt sind oft eine verletzliche Zeit. Achten Sie in dieser Zeit auch auf sich selbst. Was Sie tun können, wenn …» – der mittlere Satz unterbricht den Zusammenhang zwischen verletzlicher Zeit und Suizidgefahr; «verletzlich» lässt offen, für wen.
  - **Vorschlag** (mit W1-28): «Die ersten Wochen und Monate nach einem Klinikaustritt sind für die erkrankte Person oft eine verletzliche Zeit. Was Sie tun können, wenn Sie befürchten, dass sie nicht mehr leben will, steht im Abschnitt [Bei Suizidgedanken]. Achten Sie in dieser Zeit auch auf sich selbst.»
- **S-06 · optional · Satzbruch vor einer Liste.**
  - **Ist** (`ihre-situation` › `was-belastet`): «Belastend sind auch der fehlende Antrieb und der Verlust von Interessen, die gemeinsame Pläne schwer machen, und:»
  - **Vorschlag:** «Belastend sind auch der fehlende Antrieb und der Verlust von Interessen, die gemeinsame Pläne schwer machen. Dazu kommen:»
- **S-07 · optional · Zielgruppe sperrig.**
  - **Ist** (`index` › `einstieg`): «Diese Website richtet sich an Angehörige und nahestehende Menschen von Erwachsenen mit Depression.»
  - **Vorschlag:** «Diese Website richtet sich an Menschen, die einem Erwachsenen mit Depression nahestehen: Angehörige, Freundinnen und Freunde.»
- **S-08 · optional · Klammer und doppelte «Befragung».**
  - **Ist** (`depression-verstehen` › `was-ist`; erster Satz auch `index` › `einstieg`): «… berichtete rund jede zehnte Person über mittelschwere bis schwere depressive Beschwerden (nach einem Fragebogen). In Befragungen zeigen Frauen etwa doppelt so oft die Merkmale einer Depression wie Männer.»
  - **Vorschlag:** «In der Schweizerischen Gesundheitsbefragung 2022 gab rund jede zehnte Person in einem Fragebogen mittelschwere bis schwere depressive Beschwerden an. Frauen erfüllen in solchen Befragungen etwa doppelt so oft die Merkmale einer Depression wie Männer.»
- **S-09 · optional · Etikett (aus W1-12).**
  - **Ist** (`behandlung-und-verlauf` › `verlauf`): «… war nach drei Monaten die Hälfte der Erkrankten wieder gesund …»
  - **Vorschlag:** «… war nach drei Monaten die Hälfte der Menschen mit einer depressiven Episode wieder gesund …»
- **S-10 · optional · Waage: zwei Kinder in einem Bild.**
  - **Ist** (`je-nach-rolle` › Abb. 1): links «Ich sehe doch, wie schlecht es ihr geht.», rechts «Er ist erwachsen. Er entscheidet selbst.» – ein Elternteil denkt hier über ein und dasselbe Kind nach.
  - **Vorschlag:** links «Ich sehe doch, wie schlecht es ihm geht.»; ebenso im Plan `v-ro-spannung` › `statement`.
- **S-11 · optional · Geschwister: Wiederholung und Anrede.**
  - **Ist** (`je-nach-rolle` › `geschwister`): «Geschwister werden oft übersehen. Geschwister von Menschen mit psychischen Erkrankungen haben … als Menschen ohne erkranktes Geschwister; die Studien dazu betreffen psychische Erkrankungen allgemein, nicht nur Depression.» und «Sie dürfen selbst entscheiden, wie viel sie mittragen.» («Sie» = die Geschwister oder die Lesenden?)
  - **Vorschlag:** «Geschwister werden oft übersehen. Studien zu Geschwistern von Menschen mit psychischen Erkrankungen allgemein zeigen, dass Geschwister im Durchschnitt mehr depressive Beschwerden und mehr Ängste haben als Menschen ohne erkranktes Geschwister.»; «Als Schwester oder Bruder dürfen Sie selbst entscheiden, wie viel Sie mittragen.»
- **S-12 · optional · «erst im Alter» – wessen Alter?**
  - **Ist** (`je-nach-rolle` › `erwachsene-kinder`): «Andere erleben die Depression eines Elternteils erst im Alter, …»
  - **Vorschlag:** «Bei anderen erkrankt die Mutter oder der Vater erst im Alter, zum Beispiel nach einem Verlust oder bei einer körperlichen Krankheit.»
- **S-13 · optional · Listenpunkt nicht parallel.**
  - **Ist** (`je-nach-rolle` › `kinder`, «Schützend wirken:»): «wenn der erkrankte Elternteil positiv und anerkennend über das Kind spricht» neben Nomen («gute Freundschaften», «regelmässige Bewegung»).
  - **Vorschlag:** «anerkennende Worte des erkrankten Elternteils über das Kind»
- **S-14 · optional · «Gereiztheit» zweimal hintereinander; Gross- und Kleinschreibung.**
  - **Ist** (`begleiten` › `alltag`): Liste «Gereiztheit als Teil der Krankheit sehen.», gleich danach «Gereiztheit gehört oft zur Krankheit. Beleidigungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen …»; Liste «Nörgeln oder überbehüten.»
  - **Vorschlag:** «Auch wenn Gereiztheit zur Krankheit gehört: Beleidigungen oder Übergriffe müssen Sie nicht hinnehmen; Ihre Sicherheit geht vor.»; «Nörgeln oder Überbehüten.»
- **S-15 · optional · «Sie dürfen» an zwei Stellen entbehrlich.**
  - **Ist:** `index` › `kurz`, zwei Kernsätze nacheinander mit «Sie dürfen …»; `begleiten` › `ansprechen`, erster Satz «Sie dürfen die Veränderungen ansprechen.»
  - **Vorschlag:** Kernsatz 5: «Auf sich zu achten und sich Unterstützung zu holen, ist kein Egoismus (Für sich sorgen).»; auf `begleiten` den ersten Satz streichen, der Abschnitt beginnt mit «Wählen Sie für das Gespräch einen ruhigen Moment, …». Die übrigen «Sie dürfen» stehen bei Rechten und bleiben.
- **S-16 · optional · Plan für schwierige Zeiten: Reihenfolge und ein unklarer Ausdruck.**
  - **Ist** (`behandlung-und-verlauf` › `vorbeugen`): Der Verweissatz «Wie Sie frühe Zeichen ansprechen können, steht unter …» steht zwischen der Liste und «Ein solcher Plan gehört der erkrankten Person.»; Abb. 3: «früh mit der Behandlung Kontakt aufnehmen».
  - **Vorschlag:** Verweissatz nach den Gesprächsbeispielen; «früh mit der behandelnden Fachperson Kontakt aufnehmen».
- **S-17 · optional · Absolut formuliert (Prüfbedarf).**
  - **Ist** (`behandlung-und-verlauf` › Abb. 1): «Sie werden nie abrupt abgesetzt, sondern langsam und in Absprache.» – beschreibt als Tatsache, was eine Regel ist.
  - **Vorschlag:** «Sie sollen nicht abrupt abgesetzt werden, sondern langsam und in Absprache mit der Ärztin oder dem Arzt.» Prüfbedarf: Fachstelle bestätigt, dass der Sinn gleich bleibt.
- **S-18 · optional · Achtsamkeit: Einschränkung angehängt; «etwas».**
  - **Ist** (`fuer-sich-sorgen` › `was-hilft`): «Programme zur Achtsamkeit verringerten … Stress und Niedergeschlagenheit, in kleineren Studien von begrenzter Qualität; die Belastung sank nur wenig.»; «Für die eigene Entlastung braucht es zusätzlich etwas für Sie selbst.»
  - **Vorschlag:** «In kleineren Studien von begrenzter Qualität verringerten Achtsamkeitsprogramme bei Angehörigen psychisch erkrankter Menschen Stress und Niedergeschlagenheit; die Belastung sank nur wenig.»; «Für die eigene Entlastung brauchen Sie zusätzlich Angebote für sich selbst.»
- **S-19 · optional · Interne Bezeichnung in einer Legende.**
  - **Ist** (`fuer-sich-sorgen` › Abb. 1): «Eigene didaktische Darstellung (Muster I)» – «Muster I» ist ein Begriff des Profils, nicht der Lesenden.
  - **Vorschlag:** «(Muster I)» streichen.
- **S-20 · optional · Rechteseite: Bezugsperson zweimal erklärt; Beispiel gestelzt.**
  - **Ist** (`rechte-und-angebote`): Erklärung vor Abb. 1 und noch einmal in `vorsorge` («Im Kanton Zürich können Patientinnen und Patienten Bezugspersonen bezeichnen. Tun sie es nicht, …»); Beispiel «Falls Sie mir nichts über meinen Mann sagen dürfen: Ich möchte Ihnen erzählen, was mir zu Hause auffällt.»
  - **Vorschlag:** in `vorsorge`: «Bezugsperson: Die erkrankte Person kann Sie ausdrücklich als Bezugsperson bezeichnen. Wer das ist, wenn sie niemanden bezeichnet, steht oben.»; Beispiel: «Vielleicht dürfen Sie mir nichts über meinen Mann sagen. Ich möchte Ihnen aber erzählen, was mir zu Hause auffällt.» (Wortlaut des Beispiels hat die Fachstelle mit W1-F-01 b gewählt; S-F-01.)
- **S-21 · optional · Begriffe ohne Erklärung (aus W2-08).**
  - **Ist und Vorschlag:**
    - Legenden «NVL Unipolare Depression» (`depression-verstehen`, `behandlung-und-verlauf`) → «deutsche Behandlungsleitlinie (NVL)»; «SGAD/SGPP 2025» → «Schweizer Behandlungsempfehlungen 2025».
    - «Tagesklinik» (`behandlung-und-verlauf` › Abb. 2) → «Tagesklinik (Behandlung tagsüber, die Nächte zu Hause)».
    - «Achtsamkeit» (`fuer-sich-sorgen`) → «Achtsamkeitsprogramme (Übungen, die Aufmerksamkeit ohne Bewertung auf den Moment zu richten)».
    - «Betreuungsgutschriften», «Hilflosenentschädigung» (`rechte-und-angebote` › `arbeit-geld`) → je eine kurze Erklärung, etwa «Betreuungsgutschriften (Gutschriften für die AHV-Rente der betreuenden Person)», «Hilflosenentschädigung (Geld der IV für Menschen, die im Alltag dauernd auf Hilfe angewiesen sind)». Prüfbedarf: Wortlaut fachlich und rechtlich prüfen (mit W1-F-11).
    - «VASK» (`je-nach-rolle`, `rechte-und-angebote`) → Namen beim ersten Auftreten so ausschreiben, wie der Verein ihn selbst verwendet.
- **S-22 · optional · Geschlechtergerechte Formen uneinheitlich.**
  - **Ist:** meist Paarformen («Partnerinnen und Partner», «Freundinnen und Freunde»), aber «Partner» (`index` › `kapitel`; `je-nach-rolle` › `partner` «der Partner» 2×; `ihre-situation` › `angst` «Eltern und Partner»), «Freunde» (`index` 2×), «Psychologen» (`rechte-und-angebote`) und nur weibliche Formen «eine Hausärztin, eine Psychiaterin oder eine andere dazu berechtigte Ärztin» (`behandlung-und-verlauf` › Abb. 2).
  - **Vorschlag:** Paarformen oder neutrale Formen («Partnerinnen und Partner», «ärztliche Fachperson»). Gesprächsbeispiele bleiben, wie sie sind («Hilfe von einer Ärztin»). Hausregel: S-F-02.
- **S-23 · optional · Wiederholungen innerhalb eines Abschnitts.**
  - `depression-verstehen` › `entstehung`: «Viele Angehörige fragen sich, warum …, und manche fragen sich, ob …» → «…, manche auch, ob sie etwas falsch gemacht haben.»
  - `ihre-situation` › `wechselwirkung`: Einleitung, Kern der Abbildung und erster Satz der Vertiefung sagen dasselbe. Vorschlag: Einleitung «Studien weisen darauf hin, dass sich Depression und Spannungen in einer Beziehung gegenseitig verstärken können. Daran ist niemand schuld. Die Abbildung zeigt, wie ein solcher Kreis entstehen kann.»; die Vertiefung beginnt mit «Kritik in der Familie hängt mit Rückfällen zusammen.» (ohne «auch», das sich auf nichts im Text bezieht).
  - `depression-verstehen` › Vertiefung Abb. 2: «Antidepressiva wirken trotzdem: … wirkten alle untersuchten Antidepressiva …» → «Antidepressiva helfen trotzdem: … wirkten alle untersuchten Mittel …».
  - `index` › `kurz` und `ihre-situation` › `nicht-allein`: «In einer grossen Befragung … als grosse Belastung» – zweimal «gross»; ein Wort ersetzen.
- **S-24 · optional · Ankündigungen ungenau.**
  - `depression-verstehen` › `formen`: «Depressionen unterscheiden sich vor allem darin, wie sie verlaufen.» – die Liste nennt auch «Mit psychotischen Merkmalen» (Schwere) → «… wie sie verlaufen und wie schwer sie sind.»
  - `index` › Lesepfad «Mutter oder Vater mit Kindern in der Familie» – unklar, ob der erkrankte oder der andere Elternteil gemeint ist → «Wenn Kinder in der Familie leben».
  - `index` › Lesepfad Partner: «… und was Paare auch erleben.» – unbestimmt → «Schuldgefühle, Streit, Nähe und Sexualität.»
  - `index` › `kapitel`, Teaser «Je nach Rolle»: nennt die Kinder in der Familie nicht → «… besonders zählt, und was Kindern in der Familie hilft.»
- **S-25 · optional · Zwei Gesprächsbeispiele mit gleichem Muster.**
  - **Ist:** «Mir fällt auf, dass du seit Wochen kaum schläfst …» (`begleiten` › `ansprechen`) und «Mir fällt auf, dass du seit einer Woche kaum schläfst.» (`behandlung-und-verlauf` › `vorbeugen`).
  - **Vorschlag:** im zweiten ein anderes frühes Zeichen, z. B. «Mir fällt auf, dass du seit ein paar Tagen kaum mehr rausgehst. …»
- **S-26 · optional · Grenzen: Übergang zu Übergriffen fehlt.**
  - **Ist** (`fuer-sich-sorgen` › `grenzen`): nach dem Beispiel unvermittelt «Gereiztheit gehört oft zur Krankheit. Beleidigungen, Drohungen oder Übergriffe …»
  - **Vorschlag:** «Grenzen gelten auch im Umgang miteinander: Gereiztheit gehört oft zur Krankheit, Beleidigungen, Drohungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen. Sie dürfen ein Gespräch beenden und den Raum verlassen.»
- **S-27 · optional · Seitentitel in einer «und»-Kette.**
  - **Ist** (`je-nach-rolle` › `rollen`): «… steht auf den Seiten Ihre Situation, Begleiten und Gespräche und Rechte und Angebote.»
  - **Vorschlag:** «… steht auf den Seiten «Ihre Situation», «Begleiten und Gespräche» sowie «Rechte und Unterstützung».»

**Hinweis für die Veröffentlichung (kein Befund):** «Musterentwurf: noch nicht fachlich geprüft.», «fachliche Freigabe ausstehend» in den Legenden und «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.» sind Entwurfsvermerke. Sie werden mit der Freigabe durch den Freigabestand ersetzt.

#### Fragen an die Fachstelle (S)

1. **S-F-01 · Vorschläge freigeben.** Bitte je Befund S-01 bis S-27 Ja oder Nein (oder eigener Wortlaut). Bei S-17 und S-21 bestätigen, dass der Sinn gleich bleibt; bei S-20 entscheiden, ob das Beispiel aus W1-F-01 b neu formuliert wird.
2. **S-F-02 · Hausregel für Personenbezeichnungen** (S-22). Paarformen («Ärztinnen und Ärzte»), neutrale Formen («ärztliche Fachperson») oder beides je nach Stelle?

#### Zählung der Befunde S

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| wichtig | 5 | S-01 bis S-05 |
| optional | 22 | S-06 bis S-27 |
| Fragen an die Fachstelle | 2 | S-F-01, S-F-02 |

#### Prüfrunde S 2 · Nachprüfung der Umsetzung (11.10.2026, Stand `9ff948b`)

**Geprüft durch:** dieselbe Prüfsitzung (Claude Code, hat nicht gebaut). Keine Inhalte und kein Code geändert.

**Grundlage:**
- Derselbe Satzvergleich wie in W1, Prüfrunde 3: 61 geänderte Stellen.
- Entscheide der Fachstelle zu S-F-01, S-F-02 und S-21 (VASK, `980ab79`).
- Suche nach verbliebenen Einzelformen bei Personenbezeichnungen über den ganzen sichtbaren Text.

**Ergebnis:** Alle 27 Befunde sind umgesetzt. Bei S-22 bleibt eine Stelle (S-30). Die Umsetzung bringt drei neue, optionale Befunde (S-28 bis S-30). S-28 und S-29 gehen auf Formulierungen der Prüfsitzung selbst zurück (S-20, S-26). S bleibt **offen**, bis diese drei umgesetzt oder von der Fachstelle abgelehnt sind. Die Textfassung ist mit S-F-01 freigegeben.

**Umsetzung je Befund**

| Befund | Umsetzung (Beleg) | Ergebnis |
| --- | --- | --- |
| S-01 | `rechte-und-angebote` › `schweigepflicht`: «Ärztinnen und Ärzte, Psychologinnen und Psychologen sowie Pflegefachpersonen stehen unter Schweigepflicht. Diese Fachpersonen dürfen Anvertrautes nur weitergeben, …» | erledigt |
| S-02 | `ihre-situation`: «Was besonders belastet»; Plan `v-is-was-belastet` › `section`: «02 Was besonders belastet» | erledigt |
| S-03 | «steht unter Wenn Sie befürchten …» und «Wie der Weg in die Behandlung aussieht» kommen nicht mehr vor. Neu an vier Stellen (`depression-verstehen`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`): «… steht im Abschnitt Bei Suizidgedanken auf der Seite «Begleiten und Gespräche».» Dazu «Wie es danach weitergeht, steht unter Der Weg in die Behandlung.» und «Für sich zu sorgen gehört dazu (Seite Für sich sorgen).». `je-nach-rolle` › `partner`: «Zeichen der Krankheit» verlinkt auf `depression-verstehen.html#dahinter` | erledigt |
| S-04 | «… manchmal auch als Flucht in die Arbeit. Diese Zeichen kommen auch bei Frauen vor; ob sich Depression bei Männern grundsätzlich anders zeigt, ist noch nicht sicher geklärt.» | erledigt |
| S-05 | `behandlung-und-verlauf` › `weg`: «… sind für die erkrankte Person oft eine verletzliche Zeit. Was Sie tun können, wenn Sie befürchten, dass sie nicht mehr leben will, steht im Abschnitt Bei Suizidgedanken … Achten Sie in dieser Zeit auch auf sich selbst.» | erledigt |
| S-06 | «… die gemeinsame Pläne schwer machen. Dazu kommen:» | erledigt |
| S-07 | «Diese Website richtet sich an Menschen, die einem Erwachsenen mit Depression nahestehen: Angehörige, Freundinnen und Freunde.» | erledigt |
| S-08 | `index` und `depression-verstehen`: «… gab rund jede zehnte Person in einem Fragebogen mittelschwere bis schwere depressive Beschwerden an. Frauen erfüllen in solchen Befragungen …» | erledigt |
| S-09 | «… die Hälfte der Menschen mit einer depressiven Episode wieder gesund …» | erledigt |
| S-10 | Figur `v-ro-spannung` und Plan: «Ich sehe doch, wie schlecht es ihm geht.» | erledigt |
| S-11 | «Studien zu Geschwistern von Menschen mit psychischen Erkrankungen allgemein zeigen, …»; «Als Schwester oder Bruder dürfen Sie selbst entscheiden, wie viel Sie mittragen.» | erledigt |
| S-12 | «Bei anderen erkrankt die Mutter oder der Vater erst im Alter, …» | erledigt |
| S-13 | «anerkennende Worte des erkrankten Elternteils über das Kind» | erledigt |
| S-14 | `begleiten`: «Auch wenn Gereiztheit zur Krankheit gehört: Beleidigungen oder Übergriffe müssen Sie nicht hinnehmen; Ihre Sicherheit geht vor.»; «Nörgeln oder Überbehüten.» | erledigt |
| S-15 | `index` › `kurz`: «Auf sich zu achten und sich Unterstützung zu holen, ist kein Egoismus (Für sich sorgen).»; `begleiten` › `ansprechen` beginnt mit «Wählen Sie für das Gespräch einen ruhigen Moment, …» | erledigt |
| S-16 | Verweissatz «Wie Sie frühe Zeichen ansprechen können, …» steht nach den Gesprächsbeispielen; Abb. 3: «früh mit der behandelnden Fachperson Kontakt aufnehmen» | erledigt |
| S-17 | «Sie sollen nicht abrupt abgesetzt werden, sondern langsam und in Absprache mit der Ärztin oder dem Arzt.» (Fachstelle: gleicher Sinn) | erledigt |
| S-18 | «In kleineren Studien von begrenzter Qualität verringerten Achtsamkeitsprogramme (…) bei Angehörigen …»; «Für die eigene Entlastung brauchen Sie zusätzlich Angebote für sich selbst.» | erledigt |
| S-19 | `fuer-sich-sorgen`, Legende: «Eigene didaktische Darstellung · fachliche Freigabe ausstehend.» | erledigt |
| S-20 | `vorsorge`: «Bezugsperson: Die erkrankte Person kann Sie ausdrücklich als Bezugsperson bezeichnen. Wer das ist, wenn sie niemanden bezeichnet, steht oben.»; Beispiel: «Vielleicht dürfen Sie mir nichts über meinen Mann sagen. Ich möchte Ihnen aber erzählen, was mir zu Hause auffällt.» | erledigt (Nachbesserung: S-28) |
| S-21 | Legenden: «deutsche Behandlungsleitlinie (NVL …)», «Schweizer Behandlungsempfehlungen 2025»; «Tagesklinik (Behandlung tagsüber, die Nächte zu Hause)»; «Achtsamkeitsprogramme (Übungen, die Aufmerksamkeit ohne Bewertung auf den Moment zu richten)». Betreuungsgutschriften und Hilflosenentschädigung entfallen mit dem Abschnitt. VASK wird nach dem Entscheid der Fachstelle nicht ausgeschrieben; «Stand by You Schweiz: … früher VASK Schweiz» ordnet den Namen ein | erledigt |
| S-22 | Paarformen und neutrale Formen durchgehend. Die übrigen Einzelformen sind nach der Hausregel zulässig: Gesprächsbeispiele und Alltagsbeispiele («Ihr Partner sagt das Treffen …», «Hilfe von einer Ärztin»), ein Heft-Titel («Wenn dein Partner depressiv ist») und Rollenbeispiele («ein Vater, eine Schwester oder ein Freund»). Eine Stelle bleibt: S-30 | teilweise (S-30) |
| S-23 | «…, manche auch, ob sie etwas falsch gemacht haben.»; `wechselwirkung` neu eingeleitet, Vertiefung beginnt mit «Kritik in der Familie hängt mit Rückfällen zusammen.»; «Antidepressiva helfen trotzdem: … alle untersuchten Mittel …»; «In einer breit angelegten Befragung …» (`index`, `ihre-situation`) | erledigt |
| S-24 | «… wie sie verlaufen und wie schwer sie sind.»; Lesepfade «Wenn Kinder in der Familie leben» und «Schuldgefühle, Streit, Nähe und Sexualität.» (gedeckt durch `je-nach-rolle` › `partner`: «Auch die Sexualität leidet oft, …»); Teaser «… und was Kindern in der Familie hilft.» | erledigt |
| S-25 | zweites Beispiel: «Mir fällt auf, dass du seit ein paar Tagen kaum mehr rausgehst.» | erledigt |
| S-26 | `fuer-sich-sorgen` › `grenzen`: «Grenzen gelten auch im Umgang miteinander: …», «Sie dürfen ein Gespräch beenden und den Raum verlassen.» | erledigt (Nachbesserung: S-29) |
| S-27 | «… steht auf den Seiten «Ihre Situation», «Begleiten und Gespräche» sowie «Rechte und Unterstützung».» | erledigt |

#### Neue Befunde S, Prüfrunde 2

- **S-28 · optional · «steht oben» ohne Ziel.**
  - **Beleg:** `rechte-und-angebote` › `vorsorge`: «Wer das ist, wenn sie niemanden bezeichnet, steht oben.» Wer über die Seitennavigation in «Mehr Rechte erhalten» einsteigt, weiss nicht, wo «oben» ist. Alle anderen Verweise der Website nennen den Abschnitt und verlinken ihn. Die Formulierung stammt aus dem Vorschlag S-20 der Prüfsitzung.
  - **Vorschlag:** «Wer das ist, wenn sie niemanden bezeichnet, steht im Abschnitt [Was Sie erfahren und was Sie immer sagen dürfen].»
  - **Zuständig:** bauende Sitzung.
- **S-29 · optional · Komma liest sich als Aufzählung.**
  - **Beleg:** `fuer-sich-sorgen` › `grenzen`: «Gereiztheit gehört oft zur Krankheit, Beleidigungen, Drohungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen.» Man liest zuerst «Krankheit, Beleidigungen, Drohungen» als eine Reihe. Die Formulierung stammt aus dem Vorschlag S-26 der Prüfsitzung.
  - **Vorschlag:** Strichpunkt statt Komma: «… gehört oft zur Krankheit; Beleidigungen, Drohungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen.»
  - **Zuständig:** bauende Sitzung.
- **S-30 · optional · Hausregel S-F-02 an einer Stelle nicht angewendet.**
  - **Beleg:** `je-nach-rolle` › `kinder`: «Sie dürfen weiter Zeit für Freunde und Hobbys haben.»
  - **Vorschlag:** «Sie dürfen weiter Zeit für Freundinnen, Freunde und Hobbys haben.»
  - **Zuständig:** bauende Sitzung.

Zählung Prüfrunde S 2: 27 Befunde umgesetzt, davon 1 mit einer Reststelle (S-22 → S-30); 3 neue, optional (S-28 bis S-30).

#### Prüfrunde S 3 · Nachprüfung und neue Seiten (11.10.2026, Stand `e63bd73`)

**Geprüft durch:** zweite Prüfsitzung (Claude Code, hat nicht gebaut und die Runden davor nicht durchgeführt). Keine Inhalte und kein Code geändert. Quelle: Prüfung 2.

**Grundlage:** derselbe Satzvergleich wie in W1, Prüfrunde 4 (30 Stellen); die neuen Seiten «Impressum und Datenschutz» und 404 ganz gelesen; neue Website-Texte im Kopf («Menü») und in der Fusszeile («Impressum · Datenschutz»). Kriterien: Abschnitt «Sprache und Ton». Der Lesetest der ganzen Website steht unter R2, Teil 3.

**Ergebnis:** S-28 bis S-30 sind umgesetzt, die übrigen geänderten Stellen sind sprachlich unauffällig. Die neuen Seiten sind kurz, sachlich und in «Sie» geschrieben; zwei optionale Befunde (S-31, S-32). S bleibt **offen**, bis diese umgesetzt oder von der Fachstelle zurückgestellt sind.

| Punkt | Umsetzung (Beleg) | Ergebnis |
| --- | --- | --- |
| S-28 | `rechte-und-angebote` › `vorsorge`: «Wer das ist, wenn sie niemanden bezeichnet, steht im Abschnitt Was Sie erfahren und was Sie immer sagen dürfen.» mit Link auf `#schweigepflicht` | erledigt |
| S-29 | `fuer-sich-sorgen` › `grenzen`: «Gereiztheit gehört oft zur Krankheit; Beleidigungen, Drohungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen.» | erledigt |
| S-30 | `je-nach-rolle` › `kinder`: «Sie dürfen weiter Zeit für Freundinnen, Freunde und Hobbys haben.» | erledigt |
| Übrige geänderte Stellen | «Mehr dazu unter Was Sie erfahren und was Sie immer sagen dürfen.» (BD-10) liest sich als Satz; Domain in Klammern nach dem Namen (kinderseele.ch, vaskzuerich.ch) stört den Lesefluss nicht; «(PDF)» am Ende des Linktexts; V-05 im Wortlaut der Fachstelle | erfüllt |
| Neue Seiten: Rahmen | «ss», Guillemets, «Sie»; keine Nummern, kein Notfallblock; Hinweis «ersetzt keine individuelle Abklärung, Beratung oder Behandlung» | erfüllt |
| Neue Seiten: verständlich | Überschriften nennen den Inhalt («Keine Cookies, keine Auswertung», «E-Mail an die Fachstelle»); Sätze 6 bis 24 Wörter; 404: «Diese Seite gibt es nicht», «Vielleicht ist die Adresse veraltet oder falsch geschrieben.» | erfüllt, Einzelbefunde S-31, S-32 |
| Neue Seiten: zugewandt | «Gewöhnliche E-Mails sind nicht durchgehend verschlüsselt; schreiben Sie nur, was Sie auf diesem Weg mitteilen möchten.» – sachlich, ohne zu warnen | erfüllt |

#### Neue Befunde S, Prüfrunde 3

- **S-31 · optional · Einziges «wir» der Website.**
  - **Beleg:** `impressum-datenschutz` › `impressum`: «Für die Inhalte anderer Websites, auf die wir verlinken, sind deren Anbieter verantwortlich.» Sonst spricht die Website von «der Fachstelle» (z. B. im Datenschutz: «Wenn Sie der Fachstelle schreiben, verwendet sie Ihre Angaben …»).
  - **Vorschlag:** «Für die Inhalte verlinkter Websites sind deren Anbieter verantwortlich.»
  - **Zuständig:** bauende Sitzung.
- **S-32 · optional · Herausgeberin und «kein offizielles Angebot» wirken widersprüchlich (Prüfbedarf).**
  - **Beleg:** `impressum`: «Herausgeberin: Fachstelle Angehörigenarbeit, Psychiatrische Universitätsklinik Zürich», drei Zeilen später «Die Website ist ein Angebot der Fachstelle Angehörigenarbeit, kein offizielles Angebot der Psychiatrischen Universitätsklinik Zürich.» Wer den Unterschied zwischen Fachstelle und Klinik nicht kennt, liest zweimal die Klinik, einmal als Herausgeberin und einmal verneint. Der Inhalt ist ein Entscheid der Fachstelle (W3-05) und bleibt.
  - **Vorschlag** (Wortlaut entscheidet die Fachstelle, mit der rechtlichen Prüfung unter W1-31): «Herausgeberin: Fachstelle Angehörigenarbeit der Psychiatrischen Universitätsklinik Zürich» und danach «Die Website gibt die Fachstelle heraus; sie ist kein offizielles Angebot der Klinik als Ganzes.»
  - **Zuständig:** Fachstelle, danach bauende Sitzung.

Zählung Prüfrunde S 3: S-28 bis S-30 erledigt; 2 neue, optional (S-31, S-32).

#### Prüfrunde S 4 · Nachprüfung und geänderte Sätze (12.10.2026, Stand `5f68c39`)

**Geprüft durch:** dritte Prüfsitzung (Claude Code, hat nicht gebaut und S-31, S-32 nicht umgesetzt). Keine Inhalte und kein Code geändert. Quelle: Prüfung 3.

**Grundlage:** die 33 geänderten Stellen mit Wortlaut vorher und nachher (Tabelle in W1, Prüfrunde 5). Kriterien: Abschnitt «Sprache und Ton» und die Stolperstellen aus R2, Teil 3 (Fachwörter, Sätze über 25 Wörter, Verneinungen, Bezug von «es» und «sie»).

**Ergebnis:** S-31 und S-32 sind erledigt. Die geänderten Sätze sind verständlich, in «Sie» oder als wörtliche Rede, mit Guillemets und «ss». Kein neuer Satz hat mehr als 25 Wörter; der längste hat 24 (R2-03, Vertiefung). Ein neuer, optionaler Befund (S-33). S bleibt **offen**, bis S-33 umgesetzt oder von der Fachstelle zurückgestellt ist.

| Punkt | Nachprüfung (Beleg) | Ergebnis |
| --- | --- | --- |
| S-31 | `impressum-datenschutz` › `impressum`: «Für die Inhalte verlinkter Websites sind deren Anbieter verantwortlich.», wortgleich mit dem Vorschlag. Die Website spricht sonst nirgends als «wir» (Suche in W1, Prüfrunde 5) | erledigt |
| S-32 | «Herausgeberin: Fachstelle Angehörigenarbeit der Psychiatrischen Universitätsklinik Zürich», wortgleich. Zweiter Satz «Die Website ist ein Angebot der Fachstelle, kein offizielles Angebot der Klinik als Ganzes.» statt «Die Website gibt die Fachstelle heraus; …». Die Begründung der bauenden Sitzung trifft zu: Im Vorschlag steht «Die Website» als Subjekt am Anfang, gemeint war aber die Fachstelle als Herausgeberin. Der neue Satz ist eindeutig und unterscheidet Fachstelle und Klinik; der Lesetest-Eintrag «mit Mühe» (R2) wird damit «ja». Prüfbedarf: Wortlaut mit W1-31 | erledigt |
| Geänderte Sätze: verständlich | Kurztexte erklären den Inhalt; Erklärungen in Klammern kurz und in Alltagsworten (R2-03); Zahlensätze an der Zahl geteilt (R2-07); auf `index` eine Frage als Einstieg («Möchten Sie über Ihre Situation sprechen?») | erfüllt |
| Geänderte Sätze: Ton | Die Beispielsätze klingen wie gesprochen und drängen nicht («Soll ich dir helfen, einen Termin zu finden? Ich komme gern mit.»; «Das liegt an meiner Müdigkeit, nicht an dir.»). Die Stationen des Kreislaufs als Ich- und Er-Sätze, ohne Vorwurf. «Eigene Kontakte, Hobbys und Erholung sind wichtig, auch jetzt.» ist zugewandt, ohne zu belehren | erfüllt |
| Geänderte Sätze: Verneinung | «Für sich sorgen» 34 % → 30 % (R2-06). Neu verneint sind «Was Angehörige sehen und hören, ist nicht alles.» (R2-01) und «… nicht an dir.» (Beispielsatz, R2-05); beide tragen die Aussage | erfüllt |
| Geänderte Sätze: Bezug | «Die erste …, die zweite …» bezieht sich eindeutig auf den Satz davor. In «Wer sehr verletzlich ist, erreicht sie …» ist «sie» die Schwelle aus der Überschrift «Die Schwelle» und dem Satz davor. Im Kurztext des Kreislaufs bleibt offen, wer sich unverstanden fühlt (S-33) | erfüllt, Einzelbefund S-33 |
| Schreibweise | «ss», Guillemets, auch verschachtelt («So könnte es klingen: «…»»). Hausregel Personenbezeichnungen: «Anbieter» in S-31 meint Organisationen, wie im Vorschlag | erfüllt |

#### Neue Befunde S, Prüfrunde 4

- **S-33 · optional · Kurztext des Kreislaufs: Wer sich unverstanden fühlt, bleibt offen.**
  - **Beleg:** `ihre-situation` › Abb. 2, Kurztext: «Das kann erschöpfen und ungeduldig machen, und wer sich unverstanden fühlt, zieht sich eher weiter zurück.» Die Stationen sagen seit R2-04 «Ich bin erschöpft und werde ungeduldig.» und «Er fühlt sich unverstanden.»; der Kurztext nennt in beiden Fällen keine Person. Die bauende Sitzung hat Station 4 im Kurztext bewusst offen gelassen, weil der Prüfbedarf aus R2-04 noch offen war (Eintrag R2-01). Mit #29 ist er beantwortet. Wer nur den Text liest, kann «wer sich unverstanden fühlt» auch auf die angehörige Person beziehen.
  - **Vorschlag** (nur wenn die Fachstelle Station 4 mit W1-F-21 bestätigt): «Das kann Angehörige erschöpfen und ungeduldig machen. Die erkrankte Person fühlt sich dann eher unverstanden und zieht sich weiter zurück.»
  - **Zuständig:** Fachstelle (mit W1-F-21), danach bauende Sitzung.

Zählung Prüfrunde S 4: S-31 und S-32 erledigt; 1 neuer, optionaler Befund (S-33).

#### Prüfrunde S 5 · Nachprüfung S-33 und geänderte Sätze (12.10.2026, Stand `1a328f5`)

**Geprüft durch:** vierte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und S-33, V-11, BD-12 und K1 nicht umgesetzt (die Umsetzung in den Pull Requests #40 und #41 stammt von der dritten Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 4.

**Grundlage:** die 13 neuen Sätze aus #40 und #41 (Tabelle in W1, Prüfrunde 6). Kriterien: Abschnitt «Sprache und Ton» und die Stolperstellen aus R2, Teil 3.

**Ergebnis:** S-33 ist erledigt. Die neuen Sätze sind kurz (6 bis 21 Wörter), ohne Verneinung, mit Guillemets und «ss». Ein neuer, optionaler Befund (S-34). S bleibt **offen**, bis S-34 umgesetzt oder von der Fachstelle zurückgestellt ist.

| Punkt | Nachprüfung (Beleg) | Ergebnis |
| --- | --- | --- |
| S-33 | Kurztext des Kreislaufs: «Das kann Angehörige erschöpfen und ungeduldig machen. Die erkrankte Person fühlt sich dann eher unverstanden und zieht sich weiter zurück.» – wortgleich. Wer erschöpft ist und wer sich unverstanden fühlt, ist jetzt eindeutig. «Das» bezieht sich auf «Sorge, Antreiben und Übernehmen» im Satz davor. «Die erkrankte Person» passt zur Hausregel (neutrale Form statt «er»), während die Station als Zitat «Er …» bleibt. Vier Sätze (Leitlinie: zwei bis vier). Zur Lesart des Auftrags siehe W1, Prüfrunde 6 | erledigt |
| V-11 (Sprache) | «Die Abbildung vergleicht beide nach denselben Merkmalen.» – kürzer, klar | erfüllt |
| BD-12 (Sprache) | je Station ein Satz mit Doppelpunkt; «beschriftet mit Sätzen einer angehörigen Person» ist verständlich und neutral | erfüllt |
| K1 `rechte-und-angebote` | «Für erwachsene Kinder psychisch erkrankter Eltern befindet sich laut VASK-Flyer eine neue Gruppe im Aufbau.» und «Zum aktuellen Stand und zur Anmeldung informiert die VASK Zürich.» – verständlich; «befindet sich … im Aufbau» ist etwas amtlich, aber eindeutig und wortgleich mit dem entschiedenen Vorschlag | erfüllt |
| K1 `je-nach-rolle` | «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut Flyer eine neue Gruppe … im Aufbau.» (21 Wörter): «laut Flyer» nennt nicht, wessen Flyer (S-34) | erfüllt, Einzelbefund S-34 |
| Verneinung, Satzlänge | keiner der 13 neuen Sätze verneint; längster 21 Wörter; Seitenwerte unverändert (W1, Prüfrunde 6) | erfüllt |

#### Neue Befunde S, Prüfrunde 5

- **S-34 · optional · «laut Flyer» ohne Bezug.**
  - **Beleg:** `je-nach-rolle` › `erwachsene-kinder`: «… befindet sich laut Flyer eine neue Gruppe …». Die Seite nennt und verlinkt keinen Flyer; wer nur diese Seite liest, weiss nicht, welcher gemeint ist. Auf `rechte-und-angebote` steht an derselben Stelle «laut VASK-Flyer». Der Wortlaut stammt aus dem Vorschlag K1 und ist von der Fachstelle entschieden; deshalb nur optional.
  - **Vorschlag:** «… befindet sich laut einem Flyer der VASK eine neue Gruppe …» oder wie auf der anderen Seite «laut VASK-Flyer».
  - **Zuständig:** Fachstelle (Wortlaut), danach bauende Sitzung.

Zählung Prüfrunde S 5: S-33 erledigt; 1 neuer, optionaler Befund (S-34).

#### Prüfrunde S 6 · Nachprüfung S-34 und geänderte Sätze (12.10.2026, Stand `007006a`)

**Geprüft durch:** fünfte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und S-34 und W1-33 nicht umgesetzt (die Umsetzung in #44 stammt von der vierten Prüfsitzung im Rollenwechsel, die S-34 auch vorgeschlagen hat). Keine Inhalte und kein Code geändert. Quelle: Prüfung 5.

**Grundlage:** die 2 neuen Sätze aus #44 und der Absatz, in dem sie stehen (Tabelle in W1, Prüfrunde 7), bei 360 und 1280 px angesehen, auch mit 200 % Schrift. Kriterien: Abschnitt «Sprache und Ton» und die Stolperstellen aus R2, Teil 3.

**Ergebnis:** S-34 ist erledigt. Der neue Verweissatz ist kurz, ohne Verneinung und folgt dem Muster der Website für Verweise. Keine neuen Befunde. Damit sind S-01 bis S-34 erledigt und beide Fragen (S-F-01, S-F-02) beantwortet. Jede Textänderung seit Runde 1 ist satzweise nachgeprüft: Runde 2 61 Stellen bis `9ff948b`, Runde 3 30 Stellen und die neuen Seiten bis `e63bd73`, Runde 4 33 Stellen bis `5f68c39`, Runde 5 13 Sätze bis `1a328f5`, Runde 6 2 Sätze bis `007006a`; zwischen `1a328f5` und `f24e5af` ist nur der Bericht geändert (`git diff` über `content/` und `site.config.json`, Kette `f413f69` → `007006a` ohne Lücke). S steht deshalb auf **erledigt**. Kommen Textänderungen dazu (W1-F-21, W1-34 Variante 2, R2-08), prüft eine Sitzung, die sie nicht umgesetzt hat, die geänderten Sätze nach.

| Punkt | Nachprüfung (Beleg) | Ergebnis |
| --- | --- | --- |
| S-34 | «Bei der VASK Zürich (vaskzuerich.ch) befindet sich laut VASK-Flyer eine neue Gruppe für erwachsene Kinder psychisch erkrankter Eltern im Aufbau.» (21 Wörter). Wessen Flyer gemeint ist, ist jetzt klar; derselbe Ausdruck wie auf `rechte-und-angebote`. **Wahl der zweiten Variante:** begründet (gleicher Ausdruck an beiden Stellen) und sprachlich die bessere: «laut einem Flyer der VASK» wiederholt den Namen ebenso und macht den Satz 3 Wörter länger. **Wiederholung:** «VASK Zürich … VASK-Flyer» im selben Satz, im nächsten «Die VASK», dazu die Domain im Linknamen; dreimal «VASK» in zwei Sätzen. Beim Lesen etwas schwer, aber eindeutig, und jede Variante, die die Quelle nennt, wiederholt den Namen. «laut ihrem Flyer» wäre kürzer, klingt in einem Text mit «Sie» vorgelesen aber wie «laut Ihrem Flyer»; deshalb kein Gegenvorschlag. Kein Befund | erledigt |
| W1-33, neuer Satz | «Weitere Angebote und den Stand dieser Angaben finden Sie unter Unterstützung für Angehörige.» (13 Wörter). Verständlich; «dieser Angaben» bezieht sich auf die zwei Sätze zur VASK davor. Der Linkname ist die Überschrift des Ziels, im selben Muster wie auf `fuer-sich-sorgen` («Angebote im Kanton Zürich finden Sie unter Unterstützung für Angehörige.») und auf dieser Seite («mehr dazu unter Wenn Depression anders aussieht»). «Angaben» ist etwas amtlich, entspricht aber dem Vermerk am Ziel («Angaben zu den Angeboten: …»). Zum Inhalt des Versprechens siehe W1-34 | erfüllt |
| Absatz als Ganzes | vier Sätze mit 12, 21, 10 und 13 Wörtern; Gedankengang von der eigenen Grenze über das Angebot zum Verweis; bei 360 px 12 Zeilen (Bildschirmfoto im Scratchpad) | erfüllt |
| Verneinung, Satzlänge, Schreibweise | keiner der 2 neuen Sätze verneint; längster 21 Wörter; «ss», Guillemets; Seitenwerte unverändert bis auf 89 → 90 Sätze (W1, Prüfrunde 7) | erfüllt |

Zählung Prüfrunde S 6: S-34 erledigt; keine neuen Befunde. Stufe S erledigt.

### Bedienung und Barrierefreiheit

#### Prüfrunde Bedienung (11.10.2026, Stand `9ff948b`)

**Geprüft durch:** Prüfsitzung (Claude Code, hat nicht gebaut; dieselbe wie W1, W2, S und der Visualisierungs-Check). Die Messungen führte ein Hilfsagent dieser Prüfsitzung aus; die Prüfsitzung hat die Belege zu BD-01, BD-05, BD-06 und BD-10 selbst nachgeprüft und die Schwere mit W3 abgeglichen. Keine Dateien geändert.

**Grundlage:** «Prüfung und Freigabe» (Stufe 5), «Barrierefreiheit und Test», «Interaktionskonzept», «Farben und Kontrast»; WCAG 2.2 AA. Werkzeug: Playwright mit Chromium (headless), lokaler Server im Worktree-Stamm, alle 8 Seiten (`index`, `depression-verstehen`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `begleiten`, `fuer-sich-sorgen`, `rechte-und-angebote`). Breiten 320, 360, 640, 768, 1024, 1280, 1440 px (640 px entspricht 200 % Seitenzoom bei 1280 px, 320 px entspricht 400 %). 200 % Text: Das CSS setzt alle Schriftgrössen in px (`--web-size-body:21px`); `html{font-size:200%}` änderte 0 von 30 Stichproben je Seite. Darum wurde «nur Text zoomen» emuliert: jede berechnete Schriftgrösse und px-Zeilenhöhe verdoppelt. Textabstände nach WCAG 1.4.12 per Stylesheet-Injektion. Tastatur und Touch: **automatisiert mit Playwright** (`keyboard.press`, `tap` mit `hasTouch`/`isMobile`), kein realer Tastatur- oder Gerätetest. Reduzierte Bewegung und `forced-colors: active` emuliert. Kontrast aus berechneten Farben, Hintergrund über die Vorfahren aufgelöst. Struktur über DOM-Abfragen und `ariaSnapshot()`; das ersetzt **keine** realen Screenreader-Läufe. Hilfsskripte und Bildschirmfotos liegen im Scratchpad (`bd/`), nicht im Repository.

**Nachgerechnet (Messungen der bauenden Sitzung):** «Kein horizontaler Überlauf bei 1280, 360 und 320 px» – bestätigt (`scrollWidth − clientWidth = 0` auf allen Seiten). «Schritt für Schritt aufbauen per Tastatur, Live-Region meldet ‹Schritt 1 von 3: Verletzlichkeit›» – bestätigt.

**Ergebnis:** Die Stufe bleibt **«offen»**. Die zwei verlangten realen Screenreader-Läufe fehlen (Vorlage unten). Zudem gibt es 11 Befunde: 3 blockierend (BD-01 Name des Logo-Links, WCAG 2.5.3; BD-02 englische Quellentitel ohne `lang`, WCAG 3.1.2; BD-06 Bedienziele unter 44 px, Grundanforderung des Profils), 3 wichtig, 5 optional. Vier davon hat auch W3 gefunden (BD-01 = W3-07, BD-02 = W3-02, BD-05 = W3-06, BD-06 = W3-04; BD-09 ist Teil von W3-10). Breiten, Reflow, Textabstände, Tastaturbedienung, Fokusbild im Normalmodus, reduzierte Bewegung, Text- und Linienkontraste sowie die Textalternativen der Figuren sind nach den automatisierten Messungen erfüllt.

| Bereich | Prüfpunkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- | --- |
| Breiten | Kein waagrechter Überlauf bei 320–1440 px | erfüllt | 56 Messungen (8 Seiten × 7 Breiten): `scrollWidth − clientWidth = 0`, 0 Elemente über dem rechten Rand, 0 Bereiche mit `overflow:hidden/clip`, die Inhalt abschneiden | – |
| Breiten | Inhalte und Figuren nicht abgeschnitten | erfüllt | alle 11 Figuren bei 320 px innerhalb der Spalte (280 px); Netz, Kreislauf und Schichtenbild wechseln in die Listenansicht (Bildschirmfotos `fig-normal-360-*`). `behandlung-und-verlauf` › `v-bv-weg` ab 1024 px: `li` 16 px breiter als ihre Box = gewollte Verbindungslinie zum nächsten Schritt (Bildschirmfoto `fig-normal-1280-v-bv-weg`) | – |
| Breiten | Hauptnavigation bei schmalen Breiten bedienbar | teilweise | 8 Links, je ≥ 44 px hoch (320 px: 280×44, 360 px: 320×44). Getippt: «Begleiten» → `begleiten.html`. Kein Menü: Der Kopf ist 616 px (320) bzw. 592 px (360) hoch, auf 360×740 beginnt der `h1` der Startseite bei 700 px | BD-05 |
| Breiten | Seitennavigation «Weg durch die Seite» | erfüllt | 7 Seiten, 43 Links, alle ≥ 44 px hoch; unter 760 px einspaltig | – |
| 200 % Text | Seitenzoom 200 % (≙ 640 px bei 1280 px) | erfüllt | 8 Seiten: kein Überlauf, keine Überlappung; in `fuer-sich-sorgen` › `v-fs-netz` nur Trennungen mitten im Wort («Angehörigenarb/eit», «Angehörigengru/ppe») | – |
| 200 % Text | Nur Text 200 % (emuliert) bei 768, 1024, 1280, 1440 px | teilweise | 8 Seiten ohne Überlauf und ohne abgeschnittene Bereiche. Überlappende Beschriftungen in `v-fs-netz` und `v-is-kreislauf`, Trennungen mitten im Wort in `v-bv-weg` (Bildschirmfotos `fig-text200-1280-*`) | BD-04 |
| 200 % Text | Browser-Einstellung «Schriftgrösse» wirkt | nicht erfüllt | `html{font-size:200%}`: 0 von 30 Stichproben je Seite verändert (alle Grössen in px) | BD-11 |
| 200 % Text | Textabstände 1.4.12 (Zeilenhöhe 1,5; Absätze 2 em; Buchstaben 0,12 em; Wörter 0,16 em) | erfüllt | bei 1280 px, 320 px und kombiniert mit 200 % Text: 0 Überlauf, 0 abgeschnitten, 0 Überlappungen in den Figuren | – |
| 200 % Text | Reflow 1.4.10 (320 px ≙ 400 %) | erfüllt | wie Zeile «Kein waagrechter Überlauf»; keine Tabellen, keine zweidimensional scrollenden Bereiche | – |
| Tastatur | Sprunglink als erster Tab-Stopp, sichtbar, wirksam | erfüllt | 8/8 Seiten: erster Tab «Zum Hauptinhalt», sichtbar bei y = 8 px, 153×41 px, #222222 auf #FFFFFF; Enter → Fokus auf `main#main-content`; nächster Tab erster Link im Hauptinhalt (z. B. `depression-verstehen`: «Was eine Depression ist») | – |
| Tastatur | Reihenfolge plausibel, alles erreichbar | erfüllt | 27 (`begleiten`) bis 49 (`je-nach-rolle`) Tab-Stopps = Zahl der fokussierbaren Elemente im DOM (z. B. 37/37). Reihenfolge: Sprunglink → Logo → 8 × Hauptnavigation → E-Mail der Absenderin → Seitennavigation → Inhalt in Lesereihenfolge → Quellen. Inhalte geschlossener Vertiefungen sind nicht erreichbar. Fusszeile ohne Bedienelemente | – |
| Tastatur | Keine Falle (2.1.2) | erfüllt | 8/8 Seiten: nach dem letzten Tab-Stopp verlässt der Fokus das Dokument; Shift+Tab erreicht den letzten Quellenlink; aus dem Schritt-Aufbau führt Shift+Tab zurück bis in die Seitennavigation | – |
| Tastatur | Fokus sichtbar (2.4.7), Kontrast des Fokusrings | erfüllt | alle Tab-Stopps bei 1280 und 360 px: `:focus-visible` trifft zu, `box-shadow` 2 px Weiss + 2 px #3C64FF; der Ring hat 4,71:1 auf #FFFFFF und 4,40:1 auf #F7F7F7 (Figurenfläche). 0 Ringe durch `overflow` abgeschnitten (Ring + 4 px gegen Vorfahren geprüft) | – |
| Tastatur | Fokus nicht verdeckt (2.4.11) | erfüllt | kein fixierter Kopf; `elementFromPoint` am fokussierten Element: 0 verdeckt, 0 ausserhalb des Fensters (1280 und 360 px) | – |
| Tastatur | Seitennavigation anspringen | erfüllt | 43 Einträge je mit Enter: Ziel an der Oberkante (`top` = 24 px); der nächste Tab landet im Zielabschnitt oder, wenn dieser kein Bedienelement hat (7 Fälle), im folgenden. Der Fokus selbst bleibt auf `body` (Browserverhalten); Ansage im realen Lauf prüfen | – |
| Tastatur | Vertiefungen (`details`) | erfüllt | 11 `summary` auf 7 Seiten: Enter öffnet, Leertaste schliesst und öffnet, der Fokus bleibt auf `summary`; Links im Inhalt sind erst nach dem Öffnen erreichbar; Escape ohne Wirkung (für Vertiefungen nicht verlangt) | – |
| Tastatur | Schritt-Aufbau `[data-vis-build]` (`depression-verstehen` › Abb. 2) | erfüllt | Umschalter nach 21 Tabs. Enter → `data-mode="steps"`, Status «Schritt 1 von 3: Verletzlichkeit», «Zurück» deaktiviert. Tab → «Weiter». Leertaste → «Schritt 2 von 3: Belastung». Enter → «Schritt 3 von 3: Die Schwelle», danach liegt der Fokus auf «Zurück», weil «Weiter» deaktiviert ist. «Zurück» bis Schritt 1 → Fokus auf dem Umschalter. Umschalter → «Ganzes Modell sichtbar». Live-Region `p.puk-vis-build__status[aria-live=polite]`, beim Laden leer | – |
| Tastatur | Escape schliesst, was sich öffnet; Fokus danach | erfüllt | keine Dialoge, Dropdowns oder Tooltips vorhanden; Escape ändert weder Schritt-Aufbau noch Vertiefung, der Fokus bleibt am Ort | – |
| Tastatur | Menü per Tastatur | entfällt | kein Menü vorhanden | BD-05 |
| Touch | Zielgrösse ≥ 24 × 24 px (2.5.8) | erfüllt | 360 px, `hasTouch`, `isMobile`, `pointer:coarse` = true. Hauptnavigation min. 320×44, Seitennavigation 320×44, `summary` 278×44, Schaltfläche 236×44, Logo 160×63, Lesepfad-Links 28 px hoch. Unter 24 px nur Links im Fliesstext (Zeilen 23 px, Ausnahme «inline») und die E-Mail der Absenderin (213×23, Abstandsausnahme: Der 24-px-Kreis berührt kein anderes Ziel) | – |
| Touch | Profil: 44 px für Navigation und eigenständige Aktionen | teilweise | `index`: 19 Lesepfad-Links `.puk-site-paths a` 28 px hoch; Sprunglink 41 px | BD-06 |
| Touch | Bedienung per Tippen | erfüllt | `summary` öffnet und schliesst; Schritt-Aufbau «Schritt 1 von 3» → «Schritt 2 von 3» → «Ganzes Modell sichtbar»; Navigation «Begleiten» → `begleiten.html`; Seitennavigation → `#suizidgedanken` an der Oberkante (24 px). Hover-Regeln ändern nur Farbe und Unterstreichung | – |
| Touch | Test auf einem realen Touch-Gerät | nicht geprüft | nur emuliert | – |
| Bewegung | Reduzierte Bewegung | erfüllt | `reducedMotion:'reduce'`: 0 Elemente mit `transition`/`animation` > 0,01 ms (8 Seiten, inkl. `::before`/`::after`). Schritt-Aufbau: Teile nach 20 ms (2 Bildfolgen) ausgeblendet; ohne Präferenz Überblendung 200 ms (nach 89 ms Deckkraft 0,54) | – |
| Bewegung | Nichts bewegt sich von selbst | erfüllt | 0 laufende Animationen (`document.getAnimations()`), keine Videos, iframes oder SVG-Animationen; Bildschirmfotos nach 0 und 2 s identisch (8 Seiten, beide Einstellungen); Sprung in der Seite ohne weiches Scrollen | – |
| Kontrast | Text (1.4.3) | erfüllt | 1164 Textknoten bei 1280 px und 1165 bei 360 px (Vertiefungen geöffnet): 0 unter der Schwelle, 0 unsichere Fälle (keine Hintergrundbilder, keine Transparenz). Tiefster Wert 4,71:1 (#3C64FF auf #FFFFFF: Links, aktuelle Seite 18 px); Grau #646464 5,35–5,92:1 (ab 13 px); Text in Figuren #222222 auf #D8E0FF 12,14:1 | – |
| Kontrast | Linien in den Figuren (1.4.11) | erfüllt | SVG-Striche #3C64FF: 4,40:1 auf #F7F7F7, 4,71:1 auf #FFFFFF; gerendert 1,5–2 px (`vector-effect:non-scaling-stroke`), Markierungskreise ≥ 1,74 px. Flächen #D8E0FF (1,22–1,31:1) und Weiss liegen nur innerhalb blauer Umrisse. Ob die Flächenfarbe in Abb. 2 «Verletzlichkeit/Belastung» (gefüllt/leer, 1,3:1 zueinander) bedeutungstragend ist, lässt sich nicht sicher berechnen: Lage, Nummer und Text tragen dieselbe Information | – |
| Kontrast | Bedienelemente und Zustände | erfüllt | Rahmen der Schaltfläche #222222 auf #F7F7F7 14,85:1; `summary` Text und Chevron #2B4FE0 5,94:1; Trennlinien der Navigation #E9E9E9 (1,21:1) sind dekorativ, die Ziele sind über den Text erkennbar | – |
| Kontrast | Farbe nicht einziges Merkmal (1.4.1) | erfüllt | 0 Links im Hauptinhalt ohne Unterstreichung; aktuelle Seite mit 2-px-Unterstreichung; Ansatzpunkte mit Doppelrahmen und Wort «Ansatzpunkt» | – |
| Erzwungene Farben | Figuren erkennbar | erfüllt (emuliert) | alle 11 Figuren mit `forced-colors: active` und dunklem Schema angesehen: Linien bleiben blau (#3C64FF auf Schwarz ≈ 4,5:1), Rahmen und Text weiss, gestrichelt und durchgezogen unterscheidbar (Netz, Pfad, Vergleiche), Doppelrahmen des Ansatzpunkts sichtbar (`fcv-dark-*`, `fcv-montage.png`) | – |
| Erzwungene Farben | Fokus sichtbar | nicht erfüllt | 8/8 Seiten, alle Tab-Stopps: `box-shadow: none`, `outline-style: none` | BD-03 |
| Erzwungene Farben | Logo sichtbar | teilweise | Logo #222222 auf #000000 (≈ 1,3:1) | BD-07 |
| Struktur | `lang`, Titel, Beschreibung | erfüllt | `lang="de-CH"` auf 8/8 Seiten; 8 verschiedene `title`; Meta-Description 125–188 Zeichen | – |
| Struktur | Landmarken | erfüllt | je Seite genau 1 `banner`, 1 `main`, 1 `contentinfo`, `navigation` «Hauptnavigation», auf 7 Seiten zusätzlich `navigation` «Weg durch die Seite». Daneben 6–13 benannte Regionen je Seite | BD-08 |
| Struktur | Überschriftenhierarchie | erfüllt | je Seite 1 `h1`, 0 Sprünge (8 Seiten) | – |
| Struktur | Namen aller Links und Schaltflächen | teilweise | 0 Elemente ohne Namen; der Name des Logo-Links enthält den sichtbaren Bildtext nicht | BD-01 |
| Struktur | Keine gleichnamigen Links mit verschiedenen Zielen | teilweise | 1 Fall auf `ihre-situation` | BD-10 |
| Struktur | Figuren mit Textalternative | erfüllt | 11/11 Figuren: Name über `aria-labelledby`, Beschreibung über `aria-describedby` (193–367 Zeichen), 0 fehlende IDs; alle SVG `aria-hidden="true" focusable="false"`; Inhalte zusätzlich als HTML-Listen und -Überschriften (z. B. «Teil 1: Verletzlichkeit» als `h3`) | – |
| Struktur | Live-Region | erfüllt | genau 1 (Schritt-Aufbau, `polite`, beim Laden leer); Ansagen siehe Zeile «Schritt-Aufbau» | – |
| Struktur | Tabellen mit Kopfzellen | entfällt | keine Tabellen auf den 8 Seiten | – |
| Struktur | IDs und Verweise | erfüllt | 0 doppelte IDs, 0 kaputte `aria-*`-Verweise, 0 fehlende Sprungziele, 0 leere Listeneinträge (früherer Rest `<li></ul>` auf `ihre-situation` ist behoben); `aria-current="page"` genau einmal je Seite und richtig | – |
| Struktur | Sprache von Textteilen (3.1.2) | nicht erfüllt | 38 englische Quellentitel ohne `lang`; kein Element im `body` mit `lang` | BD-02 |
| Struktur | Links auf Dateien mit Format- und Grössenangabe (Interaktionskonzept) | nicht erfüllt | 10 PDF-Links ohne Angabe | BD-09 |
| Screenreader | Mindestens zwei reale Läufe | nicht geprüft | Vorlage unten, alle Fälle «ausstehend» | – |

#### Befunde Bedienung

- **BD-01 · blockierend · Logo-Link: Der Name enthält den sichtbaren Bildtext nicht (WCAG 2.5.3 Label in Name).**
  - **Beleg:** alle 8 Seiten, `a.puk-web-logo`: zugänglicher Name aus `aria-label` «Startseite: Depression: Informationen für Angehörige». Das Logo zeigt als Bildtext «Psychiatrische Universitätsklinik Zürich». `ariaSnapshot`: `link "Startseite: Depression: Informationen für Angehörige"` › `img "Psychiatrische Universitätsklinik Zürich"`; das `aria-label` überschreibt das `alt`. Erzeugt beim Build: `tools/contract.js` Zeile 141. Personen mit Sprachsteuerung («Psychiatrische Universitätsklinik Zürich klicken») treffen den Link nicht.
  - **Vorschlag:** Name mit dem sichtbaren Text beginnen, z. B. `aria-label="Psychiatrische Universitätsklinik Zürich – Startseite: Depression: Informationen für Angehörige"`; oder `aria-label` weglassen und das `alt` so fassen. Am besten im Starter beheben, weil alle Websites dieselbe Vorlage nutzen.
  - **Dazu:** Die Leitlinie «Barrierefreiheit und Test», Testfall SR-05, erwartet für den Logo-Link die Ansage «Startseite der Psychiatrischen Universitätsklinik Zürich»; der Build weicht davon ab.
  - **Zuständig:** Profil (`tools/contract.js` des Starters, Änderung im Design-System-Artefakt), danach bauende Sitzung.
- **BD-02 · blockierend · Englische Quellentitel ohne Sprachauszeichnung (WCAG 3.1.2 Sprache von Teilen).**
  - **Beleg:** 38 Links in den Quellenlisten mit englischem Titel: `depression-verstehen` 9, `behandlung-und-verlauf` 4, `ihre-situation` 7, `je-nach-rolle` 11, `begleiten` 1, `fuer-sich-sorgen` 6. Im `body` gibt es kein Element mit `lang`. Beispiel: `depression-verstehen` › Quellen «Salk RH, Hyde JS, Abramson LY (2017): Gender differences in depression in representative national samples: Meta-analyses of diagnoses and symptoms». Ein Screenreader liest den Titel mit deutscher Aussprache. Gezählt wurde mit einer Wortliste (mindestens 3 englische Funktionswörter, höchstens 1 deutsches); die Zahl ist eine Grössenordnung, keine exakte Zählung.
  - **Vorschlag:** in `content/<id>.html` den englischen Titel (ohne Autorennamen) in `<span lang="en">…</span>` fassen. Der Wortlaut bleibt unverändert.
  - **Zuständig:** bauende Sitzung.
- **BD-03 · wichtig · Mit erzwungenen Farben (Windows-Kontrastmodus) ist der Fokus unsichtbar.**
  - **Beleg:** `forced-colors: active` emuliert, dunkles Schema auf allen 8 Seiten, helles Schema als Stichprobe auf `index` und `depression-verstehen`: bei allen Tab-Stopps (27–49 je Seite) ist `box-shadow: none` und `outline-style: none` berechnet. Der Fokusring ist ein Box-Shadow (`components/bundle.css`: `:where(a[href],button,summary,…):focus-visible{outline:none;box-shadow:var(--focus-ring)}`), und der Browser entfernt Box-Shadows in diesem Modus. Ohne jeden Ersatz bleiben die Schaltflächen des Schritt-Aufbaus, alle 11 `summary`, der Sprunglink und der Logo-Link. Die Hauptnavigation zeigt nur eine Unterstreichung; bei der aktuellen Seite ändert sich nichts. Im Normalmodus ist 2.4.7 erfüllt; betroffen sind Menschen, die den Kontrastmodus nutzen.
  - **Vorschlag:** zur Fokusregel `outline:2px solid transparent; outline-offset:2px` ergänzen. Diese Umrandung wird im Kontrastmodus sichtbar; alternativ `@media (forced-colors:active){…:focus-visible{outline:2px solid CanvasText}}`.
  - **Zuständig:** bauende Sitzung meldet es ans Profil (Änderung im Design-System-Artefakt, nicht in diesem Repository).
- **BD-04 · wichtig · Bei 200 % Textgrösse überlappen Beschriftungen in zwei Figuren.**
  - **Beleg:** Emulation «nur Text 200 %» bei 768, 1024, 1280 und 1440 px:
    - `fuer-sich-sorgen` › Abb. 1 (`v-fs-netz`): «Arbeitgeberin oder Arbeitgeber» liegt unter «Fachstelle Angehörigenarbeit» (Überlappung 134×26 px), die Ringbeschriftung «Fachliche Unterstützung» ist verdeckt, «Nachbarschaft» wird von «Angehörigengruppe» überdeckt, Wörter brechen mitten im Wort («Fachstell/e», «Schweste/r»).
    - `ihre-situation` › Abb. 2 (`v-is-kreislauf`): Der Kasten von Station 3 überdeckt den Kasten «Ansatzpunkt für Angehörige …» (107×27 px); «Gereizth/eit», «Ungedul/d».
    - `behandlung-und-verlauf` › Abb. 2 (`v-bv-weg`): fünf schmale Spalten mit Brüchen wie «Hausarztprax/is» und «Weiterbeha/ndeln».

    Bildschirmfotos `fig-text200-1280-v-fs-netz.png` und `fig-text200-1280-v-is-kreislauf.png`. Kein waagrechter Überlauf. Mit Seitenzoom 200 % (640 px) gibt es keine Überlappung; damit ist WCAG 1.4.4 über den Browserzoom erfüllt. Das Profil verlangt die Prüfung jedoch «bei 200 % Textgrösse», und Firefox «Nur Text zoomen» wirkt so.
  - **Vorschlag:** Figuren mit frei platzierten Beschriftungen (Netz, Kreislauf) bei grosser Schrift auf die vorhandene Listenansicht umschalten, z. B. über eine Container-Abfrage, deren Schwelle in `em` statt in px gesetzt ist; beim Pfad früher auf die gestapelte Ansicht wechseln.
  - **Zuständig:** bauende Sitzung (Muster in `templates/website/longform/`: Änderung im Profil).
- **BD-05 · wichtig · Acht Hauptpunkte ohne Menü; auf dem Telefon füllt der Kopf den ersten Bildschirm.**
  - **Beleg:** alle 8 Seiten: 8 Navigationslinks, unter 760 px einspaltig gestapelt (Kopf 616 px bei 320 px, 592 px bei 360 px; auf 360×740 beginnt der `h1` der Startseite bei 700 px); kein `[data-puk-disclosure]`. Interaktionskonzept: «Bis sechs Hauptpunkte sichtbar; unter 760 px als Raster mit Trennlinien; darüber `DisclosureMenu`», und das Dropdown-Menü ist für schmale Bildschirme gedacht, «wenn die umbrechende Navigation zu lang wird». Die Navigation selbst ist bedienbar: Ziele 44 px, Tippen wechselt die Seite.
  - **Vorschlag:** die Navigation auf höchstens sechs Punkte kürzen oder unter 760 px ein «Menü» (`DisclosureMenu` aus `components/interaktion.js`) anbieten; der Sprunglink bleibt. Den Entscheid im Prüfbericht begründen.
  - **Zuständig:** bauende Sitzung (Strukturentscheid mit der Fachstelle).
- **BD-06 · blockierend · Eigenständige Links unter 44 px.**
  - **Beleg:** `index` › «Wo Sie anfangen können» und «Die Seiten im Überblick»: 19 Links `.puk-site-paths a`, je 28 px hoch (151–562 px breit) bei 360 und 1280 px. Sprunglink 153×41 px. WCAG 2.5.8 ist erfüllt (≥ 24 px); die Profilvorgabe «Buttons, Navigation und eigenständige Aktionen mindestens 44 px» nicht. Sie steht in «Barrierefreiheit und Test» unter «Grundanforderungen jeder Seite»; deshalb blockierend (Schwere an W3-04 angeglichen).
  - **Vorschlag:** `.puk-site-paths a{display:inline-flex;align-items:center;min-height:44px}` (bzw. `var(--web-touch-target)`); die Höhe des Sprunglinks auf 44 px anheben. Die Komponenten stammen aus dem Starter, deshalb dort ändern.
  - **Zuständig:** bauende Sitzung (Änderung über das Profil).
- **BD-07 · optional · Logo mit erzwungenen Farben im dunklen Schema kaum sichtbar.**
  - **Beleg:** emuliert mit `forced-colors: active` und dunklem Schema: Die Logo-Pfade bleiben #222222 auf Hintergrund #000000 (≈ 1,3:1, gemessen im Bildschirmfoto `fc2-top-cdp.png`); der Browser passt Bilder nicht an. Name des Links siehe BD-01.
  - **Vorschlag:** im Profil `@media (forced-colors:active){.puk-web-logo img{background:#fff}}` oder das Logo inline mit `currentColor`.
  - **Zuständig:** bauende Sitzung meldet es ans Profil.
- **BD-08 · optional · Viele Regionen in der Liste der Orientierungspunkte.**
  - **Beleg:** Jede `section` mit `aria-labelledby` wird eine Region: 6 (`index`) bis 13 (`je-nach-rolle`) je Seite. Dazu gehören «Zuständigkeit» und «Über diese Seiten» in der Fusszeile und Teilbereiche in Figuren, z. B. «Da sein», «Was beides verbindet», «Loslassen» (`je-nach-rolle`) oder «Psychotherapie», «Antidepressiva» (`behandlung-und-verlauf`). In NVDA (Taste D) und im VoiceOver-Rotor kann das die Hauptbereiche verwässern.
  - **Vorschlag:** in den realen Läufen beobachten (Fall SR-03); wenn es stört, Figurenteile als `div` mit Überschrift statt `section` mit Namen auszeichnen.
  - **Zuständig:** Prüfperson mit Screenreader (Beobachtung), danach bauende Sitzung.
- **BD-09 · optional · PDF-Links ohne Format- und Grössenangabe.**
  - **Beleg:** 10 Links auf `.pdf`: `depression-verstehen` 2, `behandlung-und-verlauf` 1, `ihre-situation` 2, `je-nach-rolle` 1, `begleiten` 2, `fuer-sich-sorgen` 1, `rechte-und-angebote` 1. Beispiel: `depression-verstehen` › Quellen «Schweizer Behandlungsempfehlungen: … Update 2025, Teil 1». Interaktionskonzept: «Link führt zu einem Ort (… Datei mit Format- und Grössenangabe)». Kein Link öffnet ein neues Fenster (0 × `target="_blank"`).
  - **Vorschlag:** «(PDF, … MB)» nach dem Linktext ergänzen.
  - **Zuständig:** bauende Sitzung.
- **BD-10 · optional · Gleicher Linktext, verschiedene Ziele auf «Ihre Situation».**
  - **Beleg:** «Rechte und Angebote» in der Hauptnavigation → `rechte-und-angebote.html`; im Abschnitt «Was besonders belastet» («… steht unter Rechte und Angebote») → `rechte-und-angebote.html#schweigepflicht`. Im Satzkontext ist der Zweck klar (2.4.4 erfüllt); in einer Linkliste (NVDA+F7, Rotor) stehen zwei gleiche Einträge mit verschiedenen Zielen.
  - **Vorschlag:** den Linktext im Fliesstext auf das Ziel beziehen, z. B. «Was Sie dürfen» (Wortlaut über S bzw. die Fachstelle).
  - **Zuständig:** bauende Sitzung; Formulierung Fachstelle.
- **BD-11 · optional · Die Schriftgrösse des Browsers wirkt nicht.**
  - **Beleg:** alle Schriftgrössen in px (`--web-size-body:21px`, Navigation 18 px, Fusszeile 16 px). `html{font-size:200%}` änderte 0 von 30 Stichproben je Seite. Die Einstellung «Schriftgrösse» in Chrome und Safari vergrössert den Text deshalb nicht; Seitenzoom und Firefox «Nur Text zoomen» wirken (siehe BD-04). Kein WCAG-Verstoss, weil der Seitenzoom genügt.
  - **Vorschlag:** Schriftgrössen-Tokens im Profil in `rem` umrechnen (21 px = 1,3125 rem); danach BD-04 erneut prüfen.
  - **Zuständig:** bauende Sitzung meldet es ans Profil.

**Nebenbefund ausserhalb Stufe 5:** `transition360.png` wird von keiner Datei referenziert (W3-03).

#### Protokoll reale Screenreader-Läufe (offen)

Vorgabe: mindestens zwei reale Läufe (Stufe 5), Testplan «Barrierefreiheit und Test» › «Screenreader-Testplan». Ergebnisse nur eintragen, wenn sie tatsächlich mit dem genannten Screenreader und Browser gewonnen wurden. Automatisierte Prüfungen dieser Runde gelten nicht als Lauf.

**Umgebungen**

| Kürzel | Gerät | System und Version | Screenreader und Version | Browser und Version | Sprache der Sprachausgabe | Ausführlichkeit | Zoom | Datum | Person | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VO | Mac | macOS … | VoiceOver | Safari … | Deutsch | Standard | 100 % | | | ausstehend |
| NV | Windows-PC | Windows … | NVDA … | Firefox … | Deutsch | Standard | 100 % | | | ausstehend |
| VO-iOS (empfohlen) | iPhone | iOS … | VoiceOver | Safari … | Deutsch | Standard | 100 % | | | ausstehend |
| TB (optional) | Android-Telefon | Android … | TalkBack … | Chrome … | Deutsch | Standard | 100 % | | | ausstehend |

**Fälle**

Ergebnis je Umgebung: «bestanden», «nicht bestanden» oder «nicht geprüft», mit Befundnotiz.

| Fall | Aufgabe | Seite | Erwartet | VO | NV | VO-iOS | Befund | Datum · Person |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SR-01 | Seite laden, Titel und Sprache anhören | alle 8 (Stichprobe: `index`, `ihre-situation`) | Titel «… \| Depression: Informationen für Angehörige» wird angesagt, deutsche Aussprache | ausstehend | ausstehend | ausstehend | | |
| SR-02 | Sprunglink «Zum Hauptinhalt» mit Tab erreichen und aktivieren | `depression-verstehen` | erster Tab-Stopp, sichtbar, als Link angesagt; danach beginnt das Lesen im Hauptinhalt | ausstehend | ausstehend | – | | |
| SR-03 | Orientierungspunkte auflisten (VO+U, NVDA D/F7) | `je-nach-rolle` | Banner, «Hauptnavigation», Hauptbereich, «Weg durch die Seite», Fussbereich; Anzahl und Nutzen der 13 Regionen notieren (BD-08) | ausstehend | ausstehend | ausstehend | | |
| SR-04 | Überschriftenliste prüfen | `behandlung-und-verlauf` | eine Ebene 1, Ebene 2 je Abschnitt, Ebene 3 ohne Sprünge | ausstehend | ausstehend | ausstehend | | |
| SR-05 | Hauptnavigation durchgehen | `ihre-situation` | 8 Links, «Ihre Situation» als aktuelle Seite angesagt, kein Notfalllink | ausstehend | ausstehend | ausstehend | | |
| SR-06 | Logo-Link anhören; mit Sprachsteuerung «Psychiatrische Universitätsklinik Zürich» aufrufen (Sprachsteuerung macOS bzw. Dragon) | `index` | Ansage des Namens notieren; Sprachbefehl mit dem sichtbaren Text trifft den Link (BD-01) | ausstehend | ausstehend | – | | |
| SR-07 | Absenderin im Kopf lesen | `begleiten` | «Absenderin Fachstelle Angehörigenarbeit · Psychiatrische Universitätsklinik Zürich», E-Mail als Link; Trennpunkte nicht vorgelesen | ausstehend | ausstehend | ausstehend | | |
| SR-08 | Abschnitt über die Seitennavigation anspringen: «Wie sie entsteht» | `depression-verstehen` | Sprung wird angesagt, Lesen und nächster Tab beginnen im Abschnitt «Wie eine Depression entsteht» (der Fokus bleibt technisch auf `body`) | ausstehend | ausstehend | ausstehend | | |
| SR-09 | Vertiefung öffnen und schliessen: «Beispiel und Grenzen des Bildes» | `depression-verstehen` | Zustand «reduziert/erweitert» angesagt, Inhalt danach lesbar, Fokus bleibt | ausstehend | ausstehend | ausstehend | | |
| SR-10 | Schritt-Aufbau bedienen: «Schritt für Schritt aufbauen», zweimal «Weiter», «Zurück», «Ganzes Modell zeigen» | `depression-verstehen` › Abb. 2 | Ansagen «Schritt 1 von 3: Verletzlichkeit», «Schritt 2 von 3: Belastung», «Schritt 3 von 3: Die Schwelle», «Ganzes Modell sichtbar», ohne Fokussprung; nach dem letzten Schritt liegt der Fokus auf «Zurück»; im Grundzustand alle drei Teile lesbar | ausstehend | ausstehend | ausstehend | | |
| SR-11 | Figur im Lesemodus und mit Grafiknavigation lesen | `depression-verstehen` › Abb. 1 (Schichten) | Name «Abbildung 1 · …» und Beschreibung angesagt; zwei Listen «Was Sie sehen und hören», «Was die Person erleben kann»; SVG nicht vorgelesen | ausstehend | ausstehend | ausstehend | | |
| SR-12 | Kreislauf lesen, breit (1440 px) und schmal (320 px) | `ihre-situation` › Abb. 2 | 4 Stationen als Liste; Leserichtung und Rückkehr zu Station 1 verständlich; Ansatzpunkt bei Station 3 angesagt | ausstehend | ausstehend | ausstehend | | |
| SR-13 | Pfad lesen | `behandlung-und-verlauf` › Abb. 2 | 5 Schritte als Liste «Schritt 1 von 5 …»; Schritt 4 als «bei Bedarf» angesagt, nicht nur über die Linienart | ausstehend | ausstehend | ausstehend | | |
| SR-14 | Netz und Vergleich lesen | `fuer-sich-sorgen` › Abb. 1; `rechte-und-angebote` › Abb. 1 | Netz als nach Ringen gegliederte Listen mit «besteht schon/wäre möglich»; Vergleich: Merkmale je Spalte verständlich | ausstehend | ausstehend | ausstehend | | |
| SR-15 | Quellen vorlesen lassen | `je-nach-rolle` › Quellen | Aussprache englischer Titel notieren (BD-02); PDF-Links ohne Formatangabe (BD-09) | ausstehend | ausstehend | – | | |
| SR-16 | Zuständigkeitsverweis im Text und in der Fusszeile lesen | `begleiten` › «Wenn Sie befürchten, dass die Person nicht mehr leben will»; Fusszeile | Verweis direkt nach der Handlungsanleitung lesbar; Fusszeile «Zuständigkeit» und «Über diese Seiten», keine Telefonnummern | ausstehend | ausstehend | ausstehend | | |
| SR-17 | Linkliste aufrufen (NVDA+F7, Rotor «Links») | `ihre-situation` | Linknamen verständlich; doppelter Eintrag «Rechte und Angebote» notieren (BD-10) | ausstehend | ausstehend | – | | |
| SR-18 | SR-02, SR-08 und SR-10 bei 200 % Zoom wiederholen | `depression-verstehen` | Fokus bleibt sichtbar und im Fenster, Ansagen unverändert | ausstehend | ausstehend | – | | |
| SR-19 | Mobil: Kopf und Navigation durchwischen, Schritt-Aufbau per Doppeltippen | `index`, `depression-verstehen` | 8 Navigationslinks erreichbar; Weg zum Hauptinhalt (Sprunglink, Orientierungspunkte) in vertretbarer Zahl von Wischgesten (BD-05) | – | – | ausstehend | | |

#### Zählung der Befunde Bedienung

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| blockierend | 3 | BD-01, BD-02, BD-06 |
| wichtig | 3 | BD-03, BD-04, BD-05 |
| optional | 5 | BD-07, BD-08, BD-09, BD-10, BD-11 |
| offen ohne Befund | 1 | mindestens zwei reale Screenreader-Läufe (Protokoll oben, alle «ausstehend»); realer Touch-Gerätetest |

#### Prüfrunde Bedienung 2 · Nachprüfung (11.10.2026, Stand `e63bd73`)

**Geprüft durch:** zweite Prüfsitzung (Claude Code, hat nicht gebaut und die Runde davor nicht durchgeführt). Keine Dateien geändert. Quelle: Prüfung 2.

**Grundlage:** «Barrierefreiheit und Test» und «Interaktionskonzept» in der Fassung von Profil 2026.10.1 (200 % Text heisst jetzt Seitenzoom **und** Browser-Einstellung «Schriftgrösse»; erzwungene Farben im hellen und dunklen Schema; Menü ab sieben Hauptpunkten). Werkzeug: Playwright 1.56.1 mit Chromium 141 (headless), lokaler Server im Repository-Stamm, alle 10 Seiten (8 Inhaltsseiten, `impressum-datenschutz`, `404`). Breiten 320, 360, 640, 768, 1024, 1280, 1440 px. 200 % Schrift: Chromium-Einstellung über `Page.setFontSizes` (Standardschrift 32 statt 16 px), keine Emulation per Stylesheet. Erzwungene Farben: `forcedColors: 'active'` mit dunklem und hellem Schema. Tastatur und Touch **automatisiert** (`keyboard.press`, `tap` mit `hasTouch`/`isMobile`), kein realer Geräte- oder Screenreader-Test. Hilfsskripte und Bildschirmfotos im Scratchpad, nicht im Repository.

**Ergebnis:** Die blockierenden und wichtigen Befunde der Runde 1 sind erledigt (BD-01 bis BD-06), ebenso BD-07, BD-10 und BD-11. BD-09 ist teilweise erledigt (Dateigrössen fehlen), BD-08 bleibt eine Beobachtung für die realen Läufe. Keine neuen Befunde. Die Stufe bleibt **offen**: Die zwei realen Screenreader-Läufe und ein Test mit Hardwaretastatur und auf einem realen Touch-Gerät fehlen.

| Befund | Nachprüfung (Beleg) | Ergebnis |
| --- | --- | --- |
| BD-01 Name des Logo-Links | alle 10 Seiten: `aria-label="Psychiatrische Universitätsklinik Zürich – Startseite Depression: Informationen für Angehörige"`, `alt` «Psychiatrische Universitätsklinik Zürich»; der Name beginnt mit dem sichtbaren Logotext, wie Leitlinie und Testfall SR-05 jetzt erwarten | erledigt |
| BD-02 Sprache von Teilen | 50 × `lang="en"` auf 6 Seiten; in den Quellenlisten ausserhalb von `lang="en"` nur Namen, Jahre, Zeitschriften (Suche je Listeneintrag) | erledigt |
| BD-03 Fokus mit erzwungenen Farben | dunkles Schema bei 1280 und 360 px auf allen 10 Seiten, helles Schema auf `index` und `depression-verstehen`: jeder Tab-Stopp (7 bis 51 je Seite, inkl. «Menü», alle `summary`, Schritt-Aufbau, Sprunglink, Logo) hat eine sichtbare Umrandung (`outline-style` nicht `none`, mindestens 1 px); Bildschirmfoto `focus-dark-360-index`: weisser Rahmen um «Menü» | erledigt |
| BD-04 Beschriftungen bei 200 % | Browser-Schriftgrösse 32 px bei 768, 1024, 1280, 1440 px: 0 überlappende Beschriftungen in allen 11 Figuren; Netz, Kreislauf, Waage, Kontinuum in der Listenansicht, Pfad senkrecht; kein waagrechter Überlauf (Einzelheiten: Visualisierungs-Check, Runde 2) | erledigt |
| BD-05 Hauptnavigation | unter 760 px Schaltfläche «Menü» (280 × 44 px), Kopf 270 px bei 360 px statt 592 px; ab 761 px alle 8 Punkte sichtbar, ohne Schaltfläche (2 bis 3 Zeilen). Tastatur bei 320 px mit reduzierter Bewegung auf allen 10 Seiten: Tab-Folge Sprunglink → Logo → «Menü»; Enter öffnet (`aria-expanded="true"`, Fokus bleibt auf «Menü»), Tab führt zu «Übersicht», Pfeil ab und Ende bewegen den Fokus, Escape schliesst und setzt den Fokus auf «Menü»; Tab aus der offenen Liste hinaus schliesst sie. Touch bei 360 px: Tippen öffnet, Tippen auf «Begleiten» lädt `begleiten.html`, Tippen ausserhalb schliesst. Ohne JavaScript bei 320 px: «Menü» als Text, alle 8 Links sichtbar (Kopf 487 px) | erledigt |
| BD-06 Bedienziele 44 px | 360 px mit Touch-Emulation: Lesepfad-Links mindestens 46 px (19 Links), Sprunglink 153 × 44, «Menü» 280 × 44, Menülinks mindestens 44 px, Impressum und Datenschutz in der Fusszeile 96 × 51 und 109 × 51 px, «Zur Übersicht» auf der 404-Seite 44 px. Unter 44 px nur Links im Fliesstext (inline) und die E-Mail-Adressen der Absenderin (213 × 23) und im Impressum (261 × 23); beide stehen allein, der 24-px-Kreis berührt kein anderes Ziel (WCAG 2.5.8 erfüllt) | erledigt |
| BD-07 Logo im dunklen Kontrastmodus | `forced-colors` mit dunklem Schema: `filter: invert(1)` auf dem Logo, Logo weiss auf Schwarz (Bildschirmfoto `top-dark-1280-index`); helles Schema ohne Filter | erledigt |
| BD-08 Regionen | unverändert 2 (`404`) bis 13 (`je-nach-rolle`) benannte Regionen je Seite | offen (Beobachtung in SR-03) |
| BD-09 PDF-Links | 11 Links auf 7 PDF-Dateien enden mit «(PDF)»; Dateigrösse fehlt (Interaktionskonzept: «Format- und Grössenangabe»); externe Links im Fliesstext nennen die Domain | teilweise |
| BD-10 gleichnamige Links | auf keiner der 10 Seiten zwei Links mit gleichem Namen und verschiedenem Ziel | erledigt |
| BD-11 Browser-Schriftgrösse | mit 32 px Standardschrift: Lesetext 21 → 42 px, Navigation 18 → 36 px, Fusszeile 21 → 42 px, Kurztext in Figuren 15 → 30 px (`ihre-situation`, 1280 px); `h1` bleibt 102,4 px (fluide Grösse unter dem Höchstwert, so im Profil vorgesehen) | erledigt |

**Weitere Punkte der Stufe, nachgeprüft** (auch auf den neuen Seiten)

| Bereich | Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- | --- |
| Breiten | kein waagrechter Überlauf | erfüllt | 70 Messungen (10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px): `scrollWidth − clientWidth` = 0 |
| Kontrast | Text (1.4.3) | erfüllt | alle sichtbaren Textknoten der 10 Seiten bei 1280 und 360 px, Vertiefungen und Menü offen, Standard-Theme und Theme «kontrast»: 0 unter der Schwelle; tiefster Wert 4,71 : 1 (#3C64FF auf Weiss: aktuelle Seite in der Navigation, E-Mail-Links) |
| Struktur | Landmarken, Überschriften, IDs | erfüllt | je Seite 1 `h1`, 0 Sprünge, 0 doppelte IDs; axe-core 4.10.3 (wcag2a/aa, wcag21a/aa, wcag22aa, best-practice) auf 10 Seiten × 1280 und 360 px: 0 Verstösse; «unvollständig» nur Kontrast von SVG-Ziffern auf `depression-verstehen` und `ihre-situation` (Text in `--text-default` auf hellem Grund) |
| Bewegung | reduzierte Bewegung | erfüllt | `reducedMotion: 'reduce'`, Menü offen: 0 Elemente mit Übergang oder Animation über 0,01 ms auf allen 10 Seiten |
| Touch | realer Gerätetest | nicht geprüft | nur emuliert |
| Screenreader | mindestens zwei reale Läufe | nicht geprüft | Protokoll unten weiterhin «ausstehend» |

**Hinweise für die realen Läufe** (Protokollvorlage oben, nach Profil 2026.10.1): SR-05 und SR-19: unter 760 px ist die Hauptnavigation hinter «Menü»; Zustand «reduziert/erweitert» der Schaltfläche anhören. SR-06: erwartet ist jetzt die Ansage «Psychiatrische Universitätsklinik Zürich – Startseite Depression: Informationen für Angehörige», Sprachbefehl «Psychiatrische Universitätsklinik Zürich klicken» trifft den Link. SR-15: englische Titel sollten englisch ausgesprochen werden, PDF-Links enden mit «(PDF)». SR-17: kein doppelter Eintrag «Rechte und Angebote» mehr erwartet. Zusätzlich die Seiten `impressum-datenschutz` und `404` einmal durchgehen.

#### Prüfrunde Bedienung 3 · Nachprüfung der geänderten Teile (12.10.2026, Stand `5f68c39`)

**Geprüft durch:** dritte Prüfsitzung (Claude Code, hat nicht gebaut und die Befunde nicht umgesetzt). Keine Dateien geändert. Quelle: Prüfung 3.

**Grundlage:** Playwright 1.56.1 mit Chromium (headless), lokaler Server im Repository-Stamm, CSP aus `_headers` der Website per Route in jede Antwort. 200 % Schrift über `Page.setFontSizes` (Standardschrift 32 px); Bildschirmfotos dazu mit `page.screenshot` und `clip`. Tastatur automatisiert (`keyboard.press`), reduzierte Bewegung über `reducedMotion`. axe-core 4.10.3 (wcag2a/aa, wcag21a/aa, wcag22aa, best-practice). Kein realer Screenreader-, Tastatur- oder Touch-Test. Hilfsskripte und Bildschirmfotos im Scratchpad, nicht im Repository.

**Ergebnis:** Die geänderten Teile sind bedienbar und lesbar: kein Überlauf, kein Kontrastmangel, keine überlappenden Beschriftungen, das Menü wie bisher. Die Kurzbeschreibung des Kreislaufs ist vollständig, liest sich aber holprig (BD-12, optional). Die Stufe bleibt **offen**: Es fehlen die zwei realen Screenreader-Läufe und ein Test mit Hardwaretastatur und auf einem realen Touch-Gerät; BD-08 und BD-09 (Dateigrössen) bleiben wie in Runde 2.

| Bereich | Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- | --- |
| Screenreader (automatisiert) | Kurzbeschreibung des Kreislaufs | erfüllt, Einzelbefund BD-12 | `figure[data-visual-id="v-is-kreislauf"]` im Accessibility-Baum (CDP): Rolle `figure`, Name «Abbildung 2 · Ein Kreis, in den Paare und Familien geraten können», Beschreibung = `p#is-kr-text` mit 388 Zeichen: «Station 1 «Er zieht sich zurück und ist gereizt.» führt zu Station 2 «Ich mache mir Sorgen, treibe an und übernehme.», diese zu Station 3 «Ich bin erschöpft und werde ungeduldig.», diese zu Station 4 «Er fühlt sich unverstanden.» Danach geht es zurück zu Station 1: Der Rückzug verstärkt sich. Die Pfeile zeigen nur die Richtung. Bei Station 3 ist ein Ansatzpunkt für Angehörige markiert.» Inhalt gleich wie Figur und Plan; SVG mit `aria-hidden="true"`; die Stationen folgen als Liste (`ol`, 4 Einträge, je «Station n» und Satz, bei Station 3 zusätzlich «Ansatzpunkt») |
| Screenreader (automatisiert) | Legende des Netzes | erfüllt | `ul.puk-vis-legend` mit `aria-label="Legende"`, drei Einträge «besteht schon», «wäre möglich», «geordnet von nah im Alltag nach weiter weg»; Musterflächen `aria-hidden="true"`. Jeder Eintrag der Karte trägt «(besteht)» oder «(wäre möglich)» nur für Screenreader. Die Gruppen stehen im DOM in der Reihenfolge der Legende (Nah – im Alltag, Umfeld, Fachliche Unterstützung). Sichtbar bei 1280 px in einer Zeile, bei 360 px und bei 768 bis 1440 px mit 200 % unter den Gruppen |
| Schrift 200 % | Figuren und Seiten | erfüllt | Figuren: 0 überlappende Textzeilen in 132 Messungen (Visualisierungs-Check, Runde 3). Seiten: 10 Seiten × 320, 360, 768, 1024, 1280, 1440 px mit 32 px Standardschrift, `scrollWidth − clientWidth` = 0 (60 Messungen). Kreislauf, Netz, Pfad und Vergleich bei 360, 768 und 1280 px angesehen; zu den Verbindungsstrichen im Kreislauf siehe V-10 |
| Kontrast | Text (1.4.3) | erfüllt | 10 Seiten × 1280/360 px × Standard-Theme und «kontrast», Vertiefungen und Menü offen: 5546 Textknoten, 0 unter der Schwelle; tiefster Wert 4,71 : 1. axe: 0 Verstösse auf 10 Seiten × 2 Breiten; «unvollständig» nur der Kontrast der SVG-Ziffern auf `depression-verstehen` (3) und `ihre-situation` (2, nur bei 1280 px), wie in Runde 2 |
| Breiten | Überlauf, Konsole, CSP | erfüllt | 70 Messungen (10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px): 0 Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse (mit Positivkontrolle), 0 Anfragen an fremde Server |
| Struktur | `h1`, IDs | erfüllt | je Seite 1 `h1`, 0 doppelte IDs (10 Seiten × 2 Breiten) |
| Menü (Stichprobe) | Tastatur bei 320 px, reduzierte Bewegung | erfüllt | `ihre-situation`, `impressum-datenschutz`, `fuer-sich-sorgen`: Tab 1 «Zum Hauptinhalt» (153 × 44), Tab 2 Logo-Link, Tab 3 «Menü» (280 × 44, `aria-expanded="false"`); Enter → `true`, 8 Links, je mindestens 44 px hoch, `aria-current` auf der jeweiligen Seite (keins auf dem Impressum); Tab → «Übersicht»; Escape → `false`, Fokus auf «Menü»; kein Überlauf |
| Screenreader | mindestens zwei reale Läufe | nicht geprüft | Protokoll weiterhin «ausstehend» |

#### Neue Befunde Bedienung, Runde 3

- **BD-12 · optional · Kurzbeschreibung des Kreislaufs: Schlusspunkte mitten im Satz, Sprecher nicht genannt.**
  - **Beleg:** `ihre-situation` › Abb. 2, `p#is-kr-text` (oben zitiert). Seit R2-04 stehen die Stationen als ganze Sätze mit Schlusspunkt in der Kurzbeschreibung: «… «Er zieht sich zurück und ist gereizt.» führt zu Station 2 «Ich mache mir Sorgen, treibe an und übernehme.», diese zu …». Sprachausgaben machen nach «gereizt.» in der Regel eine Satzpause; «führt zu Station 2» klingt dann wie ein neuer, unvollständiger Satz. Wer die Zeichnung nicht sieht, erfährt aus der Beschreibung nicht, dass «Ich» die angehörige Person ist; Sehende schliessen es aus Bild und Kurztext. Nur automatisiert geprüft; wie es klingt, zeigt erst ein realer Lauf.
  - **Vorschlag:** je Station ein eigener Satz und der Sprecher vorweg, z. B. «Vier Stationen im Kreis, beschriftet mit Sätzen einer angehörigen Person. Station 1: «Er zieht sich zurück und ist gereizt.» Station 2: «Ich mache mir Sorgen, treibe an und übernehme.» Station 3: «Ich bin erschöpft und werde ungeduldig.» Station 4: «Er fühlt sich unverstanden.» Danach geht es zurück zu Station 1: Der Rückzug verstärkt sich. …» Im realen Lauf anhören (Protokoll unter «Protokoll reale Screenreader-Läufe»).
  - **Zuständig:** bauende Sitzung nach Freigabe; Prüfung in den realen Screenreader-Läufen.

Zählung Bedienung, Runde 3: 1 neuer, optionaler Befund (BD-12); BD-08 und BD-09 unverändert.

#### Prüfrunde Bedienung 4 · Nachprüfung BD-12 und geänderte Teile (12.10.2026, Stand `1a328f5`)

**Geprüft durch:** vierte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und S-33, V-11, BD-12 und K1 nicht umgesetzt (die Umsetzung in den Pull Requests #40 und #41 stammt von der dritten Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 4.

**Grundlage:** Playwright 1.56.1 mit Chromium (headless), lokaler Server im Repository-Stamm, CSP aus `_headers` der Website per Route in jede HTML-Antwort; Anfragen an fremde Server abgefangen und gezählt. 200 % über `Page.setFontSizes` (32 px). Accessibility-Baum über CDP (`Accessibility.getPartialAXTree`). axe-core 4.10.3 (wcag2a/aa, wcag21a/aa, wcag22aa, best-practice) auf den vier geänderten Seiten. Kein realer Screenreader-, Tastatur- oder Touch-Test. Skripte und Bildschirmfotos im Scratchpad, nicht im Repository.

**Ergebnis:** BD-12 ist erledigt, soweit automatisiert prüfbar. Die geänderten Teile sind bedienbar und lesbar. Keine neuen Befunde. Die Stufe bleibt **offen**: Es fehlen die zwei realen Screenreader-Läufe und ein Test mit Hardwaretastatur und auf einem realen Touch-Gerät; BD-08 und BD-09 (Dateigrössen) bleiben wie in Runde 2.

| Bereich | Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- | --- |
| Screenreader (automatisiert) | Kurzbeschreibung des Kreislaufs (BD-12) | erfüllt | `figure[data-visual-id="v-is-kreislauf"]`: Rolle `figure`, Name «Abbildung 2 · Ein Kreis, in den Paare und Familien geraten können», Beschreibung = `p#is-kr-text` mit 437 Zeichen, beginnend «Vier Stationen im Kreis, beschriftet mit Sätzen einer angehörigen Person. Station 1: «Er zieht sich zurück und ist gereizt.» Station 2: …». Jede Station ist ein eigener Satz, der Sprecher steht vorweg (Vorschlag BD-12). Ob die Sprachausgabe die Satzpausen nach «gereizt.»» richtig setzt, zeigt erst ein realer Lauf |
| Linknamen | VASK-Links (K1) | erfüllt | `rechte-und-angebote`: «vaskzuerich.ch» → `https://www.vaskzuerich.ch/de/`, «Treffpunkte auf vaskzuerich.ch» → `…/Angebote-der-VASK/Treffpunkte`; `je-nach-rolle`: «VASK Zürich (vaskzuerich.ch)» → `…/Angebote-der-VASK/Treffpunkte`. Auf beiden Seiten keine zwei gleichnamigen Links mit verschiedenem Ziel (alle Links im `main` gezählt). Die Domain steht in jedem Linknamen (W3-10); der Zweck folgt aus dem Satz davor (2.4.4) |
| Breiten | Überlauf, Konsole, CSP, fremde Anfragen | erfüllt | 10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px (70 Messungen): 0 Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse, 0 fremde Anfragen. Positivkontrolle: ein eingefügtes Inline-Skript und ein `style`-Attribut werden von der CSP gemeldet («Refused to execute inline script», «Refused to apply inline style») |
| Schrift 200 % | Seiten und Figuren | erfüllt | 10 Seiten × 360, 768, 900, 1024, 1280, 1440 px mit 32 px: 0 Überlauf; Figuren: 0 überlappende Textzeilen in 132 Messungen (Visualisierungs-Check, Runde 4). Kreislauf und VASK-Abschnitte bei 360 und 1280 px angesehen |
| axe | geänderte Seiten | erfüllt | `ihre-situation`, `behandlung-und-verlauf`, `je-nach-rolle`, `rechte-und-angebote` × 1280/360 px: 0 Verstösse; «unvollständig» nur `color-contrast` an 2 Knoten auf `ihre-situation` bei 1280 px (SVG-Ziffern, wie in Runde 3) |
| Screenreader | mindestens zwei reale Läufe | nicht geprüft | Protokoll weiterhin «ausstehend»; den Kreislauf dabei anhören (BD-12) |

Zählung Bedienung, Runde 4: BD-12 erledigt (automatisiert); keine neuen Befunde; BD-08 und BD-09 unverändert.

#### Prüfrunde Bedienung 5 · Nachprüfung des neuen Links und der geänderten Seite (12.10.2026, Stand `007006a`)

**Geprüft durch:** fünfte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und W1-33 und S-34 nicht umgesetzt (Umsetzung in #44 durch die vierte Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle: Prüfung 5.

**Grundlage:** Playwright 1.56.1 mit Chromium (headless), Server im Repository-Stamm (`python3 -m http.server 8000`), CSP aus `_headers` der Website per Route in jede HTML-Antwort; Anfragen an fremde Server abgefangen und gezählt. 200 % über `Page.setFontSizes` (32 px; Kontrolle: Absatz in `erwachsene-kinder` 21 → 42 px). axe-core 4.10.3 (wcag2a/aa, wcag21a/aa, wcag22aa, best-practice). Tastatur nur simuliert (Tab, Enter). Kein realer Screenreader-, Tastatur- oder Touch-Test. Skripte und Bildschirmfotos im Scratchpad, nicht im Repository.

**Ergebnis:** Der neue Link ist bedienbar, eindeutig benannt und führt auf das richtige Ziel. Keine neuen Befunde. Die Lage des Stand-Vermerks am Ziel ist unter W1-34 geführt (Inhalt des Versprechens, nicht Bedienung). Die Stufe bleibt **offen**: Es fehlen die zwei realen Screenreader-Läufe und ein Test mit Hardwaretastatur und auf einem realen Touch-Gerät; BD-08 und BD-09 (Dateigrössen) bleiben wie in Runde 2.

| Bereich | Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- | --- |
| Linknamen | Links auf `je-nach-rolle` › `erwachsene-kinder` | erfüllt | «Wenn Depression anders aussieht» → `depression-verstehen.html#anders`; «Grenzen setzen» → `fuer-sich-sorgen.html#grenzen`; «VASK Zürich (vaskzuerich.ch)» → `https://www.vaskzuerich.ch/de/Angebote-der-VASK/Treffpunkte`; neu «Unterstützung für Angehörige» → `rechte-und-angebote.html#angebote`. Das Ziel `#angebote` gibt es genau einmal; seine Überschrift lautet wie der Linkname |
| Linknamen | keine zwei gleichnamigen Links mit verschiedenem Ziel | erfüllt | je Seite alle `a[href]` gezählt (Kopf, Navigation, `main`, Fusszeile): `je-nach-rolle` 51 Links, davon 38 in `main`, 0 Namen mit mehr als einem Ziel; ebenso 0 auf den übrigen 9 Seiten |
| Linknamen | «Unterstützung für Angehörige» auf `fuer-sich-sorgen` | erfüllt | «Angebote im Kanton Zürich finden Sie unter Unterstützung für Angehörige.» → `rechte-und-angebote.html#angebote`, gleiches Ziel wie auf `je-nach-rolle`. Website-weit hat dieser Name nur dieses eine Ziel. Mehrere Ziele haben website-weit nur «Zum Hauptinhalt» und «Quellen dieser Seite»; sie zeigen je Seite auf die eigene Seite, auf keiner Seite gibt es zwei verschiedene |
| Tastatur | neuer Link | erfüllt (simuliert) | mit Tab erreichbar (320 px: 25. Tabstopp, 1280 px: 32.), `:focus-visible`, Fokusring sichtbar (weisser und blauer Ring als `box-shadow`, Bildschirmfoto 360 px), beim Fokus im sichtbaren Bereich; Enter öffnet `rechte-und-angebote.html#angebote`, die Überschrift steht danach 107 px (360 px) bzw. 140 px (1280 px) unter dem oberen Rand, nicht verdeckt (Kopf `position: static`) |
| Breiten | Überlauf, Konsole, CSP, fremde Anfragen | erfüllt | 10 Seiten × 320, 360, 640, 768, 1024, 1280, 1440 px (70 Messungen): 0 Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse, 0 fremde Anfragen. Positivkontrolle: ein eingefügtes `style`-Attribut und ein Inline-Skript werden gemeldet (`style-src-attr`, `script-src-elem`; «Refused to apply inline style», «Refused to execute inline script»), das Skript läuft nicht |
| Schrift 200 % | Seiten und Figuren | erfüllt | 10 Seiten × 360, 768, 900, 1024, 1280, 1440 px mit 32 px (60 Messungen): 0 Überlauf; Figuren: 0 überlappende Textzeilen in 132 Messungen (Visualisierungs-Check, Runde 5). Abschnitt «Erwachsene Kinder» bei 360 und 1280 px mit 16 und 32 px angesehen |
| axe | geänderte Seite und Ziel | erfüllt | `je-nach-rolle` und `rechte-und-angebote` × 1280/360 px: 0 Verstösse, 0 unvollständig |
| Screenreader | mindestens zwei reale Läufe | nicht geprüft | Protokoll weiterhin «ausstehend» |

Zählung Bedienung, Runde 5: keine neuen Befunde; BD-08 und BD-09 unverändert.

### W3 Code-Review

#### Prüfrunde W3 (11.10.2026, Stand `9ff948b`)

**Geprüft durch:** Prüfsitzung (Claude Code, hat nicht gebaut; dieselbe wie W1, W2, S und der Visualisierungs-Check). Die Messungen führte ein Hilfsagent dieser Prüfsitzung aus; die Prüfsitzung hat die Belege zu W3-01, W3-03, W3-04, W3-05 und W3-07 selbst nachgeprüft und die Schwere mit der Bedienung abgeglichen. **Vorgezogen:** Nach «Prüfung und Freigabe» prüft W3 zuletzt; nach den Korrekturen aus W1, S, Visualisierungs-Check und Bedienung ist eine Nachprüfung W3 nötig. Reines Review, keine Dateien geändert (`git status` im Worktree vor und nach der Prüfung leer; kein `build.mjs`; `export.mjs` nur in einen Ordner ausserhalb des Worktrees).

**Grundlage:**
- Gelesen: `CLAUDE.md`, `guidelines/00-technische-qualitaet.md`, `00-ablauf-pruefung-und-freigabe.md`, `04-barrierefreiheit-und-test.md`, `09-interaktionskonzept.md`, `02-farben-und-kontrast.md`, `00-pre-release-audits.md` (Teil E/F); Website: `_headers`, `README.md`, `site.config.json`, `content/*.html`, die 8 gebauten Seiten, `tools/*`; gemeinsam: `components/interaktion.js`, Druckregeln in `components/bundle.css`, `templates/website/longform/*.css`, `styles.css`, `tokens/fonts.css`, Stamm-`_headers`.
- Werkzeuge (nur lesend): `node tools/gate.mjs`, `--selftest`, `--production`; `scratchpad/rebuild-check.mjs`; `diff -r` gegen den Starter; html-validate 9.5.0 (recommended); axe-core 4.10.3 (wcag2a/aa, wcag21a/aa, wcag22aa, best-practice; Vertiefungen geöffnet; 1280 und 360 px); Playwright 1.56.1 mit Chromium 141 (Arbeitsordner über `python3 -m http.server 8766`, Export über eigenen Server; CSP aus `_headers` per Route in jede Antwort eingesetzt); `export.mjs` (Entwurf) nach `scratchpad/w3-export`; `page.pdf()` A4 + `pdftotext`/`pdfinfo`/`pdftoppm`; eigene statische Prüfskripte (`scratchpad/w3-*.py|cjs`).
- Gemessen: Konsolenfehler, Herkunft und Zahl der Anfragen, Seitengewicht (unkomprimiert), Ladezeit gedrosselt (1,6 Mbit/s, 150 ms RTT, CPU 4×), waagrechter Überlauf bei 320/360/640/768/1280/1440 px, Textabstände nach 1.4.12, Tab-Durchlauf je Seite, Bedienzielgrössen bei 360 px (Touch-Emulation), Schritt-Aufbau mit und ohne reduzierte Bewegung, ohne JavaScript, Druck.
- Nicht geprüft: externe Links (Prüfumgebung: Proxy verweigert CONNECT mit 403 für alle 66 Adressen); reale Tastatur-, Touch- und Screenreader-Tests; Text-only-Vergrösserung auf 200 % (nur Zoom-Äquivalent 640 px); Theme «Hoher Kontrast» (im Visualisierungs-Check geprüft); echte Hosting-Header. Automatisierte Prüfungen ersetzen keinen realen Tastatur- oder Screenreader-Test.
- Schweregrade nach Auftrag: «blockierend» = verletzt eine Muss-Regel aus CLAUDE.md (u. a. WCAG 2.2 AA, keine Arbeitsstände committen) oder aus einer Leitlinie, oder bricht eine Funktion.

**Ergebnis:** Technisch solide Basis: Quellen und gebaute Seiten stimmen überein, keine externen Ressourcen, keine Konsolenfehler, keine CSP-Verletzung, kein Überlauf, axe ohne Verstoss, schnell. Offen sind 11 Befunde, davon 6 blockierend (Vertiefungen fehlen im Druck auf 6 Seiten, englische Quellentitel ohne `lang`, committetes Bildschirmfoto, Bedienziele unter 44 px, Impressum und Datenschutzerklärung fehlen, Name des Logo-Links), 2 wichtig, 3 optional. Vier Befunde hat auch die Bedienung gefunden (W3-02 = BD-02, W3-04 = BD-06, W3-06 = BD-05, W3-07 = BD-01). W3 bleibt «offen».

| Bereich | Prüfpunkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- | --- |
| Funktion | Gebaute Seiten entstehen nur aus Quellen | erfüllt | `rebuild-check.mjs`: «gerendert 8, identisch mit gebauter Seite: 8» | – |
| Funktion | Gate Entwurf, Selbsttest | erfüllt | `gate.mjs`: «0 blockierend, 13 Hinweise» (11 × `visual-approval`, `site-url`, `review-report`), Exit 0; `--selftest`: «53/53 bestanden» | – |
| Funktion | Gate Produktion blockiert | erfüllt (blockiert wie erwartet) | `--production`: «12 blockierend, 1 Hinweise», Exit 1: 11 × `visual-approval` (alle elf Figuren «ausstehend»), 1 × `review-report` (offen: W1, S, Visualisierungs-Check, Bedienung und Barrierefreiheit, W3, R1, R2, R3); keine Blocker zu Absenderin, Zuständigkeit, Platzhaltern | – |
| Funktion | Kennzahlen der bauenden Sitzung nachgerechnet | erfüllt, eine Aussage widerlegt | Abschnitt «Grundlage und Arbeitsstand der bauenden Sitzung»: Gate 0/13, Selbsttest 53/53, kein Überlauf 1280/360/320, Live-Region «Schritt 1 von 3: Verletzlichkeit», keine Hexwerte/`style` in `content/` – alle bestätigt. dort «Bildschirmfotos … nicht im Repository» widerlegt (`transition360.png`) | W3-03 |
| Funktion | Interne Links und Sprungziele | erfüllt | statisch: alle internen `href` und `#`-Ziele der 8 Seiten vorhanden (0 defekt); Laufzeit: alle Anfragen Status 200 | – |
| Funktion | Externe Links | nicht geprüft | 66 eindeutige Adressen; aus der Prüfumgebung nicht erreichbar («CONNECT tunnel failed, response 403») | – |
| Funktion | JavaScript-Fehler | erfüllt | 8 Seiten × 1280/360 px, mit CSP: 0 Konsolenfehler/-warnungen, 0 `pageerror`; Export ebenso | – |
| Funktion | Inhalte ohne JavaScript | erfüllt | `javaScriptEnabled:false`: Steuerung des Schritt-Aufbaus `display:none`, alle drei Teile sichtbar; Vertiefungen sind native `details` | – |
| Funktion | Schritt-Aufbau `[data-vis-build]` (depression-verstehen, Abb. 2) | erfüllt (emuliert) | Enter auf «Schritt für Schritt aufbauen» → «Ganzes Modell zeigen», Live-Region «Schritt 1 von 3: Verletzlichkeit», «Schritt 2 von 3: Belastung», «Schritt 3 von 3: Die Schwelle»; «Zurück» bei Schritt 1, «Weiter» bei Schritt 3 deaktiviert, Fokus wandert dann auf «Zurück»; zurück: «Ganzes Modell sichtbar»; Schaltflächen 44 px hoch | – |
| Funktion | Vertiefungen (`details`) | erfüllt (Bildschirm) | 11 `details`; Enter öffnet, Leertaste schliesst; `summary` 44 bzw. 47 px hoch | – |
| Funktion | Navigation bei 360 px | teilweise | alle 8 Links sichtbar, je 320 × 44 px, `aria-current="page"` auf jeder Seite richtig; Kopf 592 px hoch, `main` beginnt bei y = 592 (Viewport 780) | W3-06 |
| Barrierefreiheit | Gültigkeit, Verschachtelung | erfüllt | html-validate: keine Verschachtelungsfehler, keine leeren `li`, keine Nicht-`li`-Kinder in Listen. Gemeldet: `aria-label` auf `ol`/`ul` (behandlung-und-verlauf.html Z. 91, fuer-sich-sorgen.html Z. 56) – nach ARIA 1.2 für Rolle `list` zulässig; `role="list"` auf der Navigation (absichtlich wegen Safari) | – |
| Barrierefreiheit | IDs und ARIA-Bezüge | erfüllt | 0 doppelte `id`; 0 `aria-labelledby`/`aria-describedby` auf fehlende IDs | – |
| Barrierefreiheit | `lang`, `title`, Meta-Beschreibung, Favicon | erfüllt | `lang="de-CH"` auf allen 8 Seiten; 8 eindeutige Titel «… \| Depression: Informationen für Angehörige»; Beschreibungen 125–188 Zeichen; `assets/favicon.svg` lokal | – |
| Barrierefreiheit | Sprachwechsel ausgezeichnet | nicht erfüllt | `content/` enthält kein einziges `lang`-Attribut; ≥ 37 englische Quellentitel | W3-02 |
| Barrierefreiheit | Landmarks, Überschriften | erfüllt | je 1 `header`, `main`, `footer`; `nav` «Hauptnavigation» (+ «Weg durch die Seite» auf 7 Seiten); genau 1 `h1`; keine Ebenensprünge | – |
| Barrierefreiheit | Skip-Link, Tastaturreihenfolge, Fokus sichtbar und nicht verdeckt | erfüllt (emuliert) | erster Tab-Stopp «Zum Hauptinhalt» auf allen Seiten; Enter → Fokus `#main-content`, nächster Tab im `main`; 27–49 Tab-Stopps je Seite, alle mit Fokusring (`outline`/`box-shadow`), keiner verdeckt (5 Treffer der Erstmessung waren umbrochene Inline-Links, mit `getClientRects` widerlegt) | – |
| Barrierefreiheit | axe-core | erfüllt | 0 Verstösse auf 8 Seiten × 2 Breiten; «unvollständig» nur Kontrast der SVG-Ziffern 1–3 (`.puk-vis-marktext`, `fill: var(--text-default)`) und der Kreislauf-Stationen – Text in `--text-default` auf hellem Grund, kein Befund | – |
| Barrierefreiheit | Bedienziele ≥ 44 px | nicht erfüllt | Lesepfad-Links Startseite 28 px hoch (13 von 19), Skip-Link 41 px | W3-04 |
| Barrierefreiheit | Zoom, 320 px, Textabstände | erfüllt | kein Überlauf bei 320/360/640/768/1280/1440 px; bei 320/360 kein Wort ohne Trennstrich umbrochen; Textabstände (1.4.12) bei 320 px: kein Überlauf, nichts abgeschnitten | – |
| Barrierefreiheit | Bilder und Darstellungen | erfüllt | einziges `img` = Logo mit `alt`; alle 9 Inline-SVG `aria-hidden="true" focusable="false"`; keine fokussierbaren Elemente unter `aria-hidden` | – |
| Barrierefreiheit | Linktexte | erfüllt; Kennzeichnung extern/PDF fehlt | keine «hier», «mehr», leeren Links; externe Links und PDF ohne Hinweis | W3-10 |
| Barrierefreiheit | Name des Logo-Links | nicht erfüllt | `aria-label="Startseite: Depression: …"` ersetzt den sichtbaren Logotext | W3-07 |
| Barrierefreiheit | Hilfe an gleicher Stelle (3.2.6), Absenderin | erfüllt | Kopf (ohne `aria-current`) und Fusszeile auf allen 8 Seiten bytegleich (md5 `244bd510` bzw. `cdb38453`); Absenderin «Fachstelle Angehörigenarbeit · Psychiatrische Universitätsklinik Zürich · angehoerigenarbeit@pukzh.ch» mit `mailto:` in jedem Kopf, auch im Druck | – |
| Barrierefreiheit | Reduzierte Bewegung, nichts bewegt sich selbst | erfüllt | `reducedMotion: reduce`: 0 Animationen beim Schrittwechsel, Übergänge 0,01 ms, `html{scroll-behavior:auto}`; ohne: Animation nur auf Knopfdruck | – |
| Barrierefreiheit | Farben nur über Tokens | erfüllt | keine Hexwerte/`rgb()` in `starter.css` (nur Kommentar Z. 36) und `content/`; SVG nur `var(--puk-blue-100)`, `currentColor`, Klassen; Laufzeit: Pfeil-Strich löst zu `rgb(60,100,255)` auf | – |
| Datenschutz | Nur gleiche Herkunft, Schriften lokal | erfüllt | alle Anfragen `localhost` (Arbeitsordner und Export, 8 Seiten × 2 Breiten); Rubik 300/400/500 als WOFF2 aus `assets/fonts` | – |
| Datenschutz | Kein Tracking, keine Cookies, keine Speicherung | erfüllt | einziges Skript `components/interaktion.js` (nur depression-verstehen, `defer`); im Code keine Cookies, kein Web Storage, keine Netzwerkaufrufe | – |
| Datenschutz | Impressum und Datenschutzerklärung | nicht erfüllt | keine Seite, kein Link, kein Treffer «Impressum», «Datenschutz» in `content/` und `site.config.json` | W3-05 |
| Sicherheit | Sicherheits-Header | erfüllt | `_headers`: CSP `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; …; object-src 'none'; frame-ancestors 'none'`, `nosniff`, `no-referrer`, `Permissions-Policy` ohne Kamera/Mikrofon/Standort, `X-Frame-Options: DENY`; identisch mit dem Starter | – |
| Sicherheit | Seiten funktionieren mit dieser CSP | erfüllt | 0 Inline-Skripte, 0 `<style>`, 0 `style`-Attribute (auch SVG), 0 `on*`-Handler; einziges `<script>` mit `src`; Laufzeit mit CSP: 0 `securitypolicyviolation` (Arbeitsordner und Export) | – |
| Sicherheit | `target="_blank"`, `tel:`, Nummern | erfüllt | 0 `target`; 0 `tel:`; keine Telefon- oder Notrufnummern im sichtbaren Text (Regex über alle Seiten) | – |
| Sicherheit | Abhängigkeiten | erfüllt | `tools/` nutzt nur `node:`-Module, kein `package.json` → `npm audit` entfällt | – |
| Sicherheit | `X-Robots-Tag` | erfüllt / nicht prüfbar | Website-`_headers` ohne `noindex` (richtig für die Ziel-Adresse); Repository-Vorschau: Stamm-`_headers` `X-Robots-Tag: noindex, nofollow`; Vorschau-Adressen eines späteren Exports hängen vom Hosting ab. Hinweis: In der Repository-Vorschau gilt die CSP der Website nicht (Stamm-`_headers` Z. 2–3) | – |
| Sicherheit | Keine Arbeitsstände im Repository | nicht erfüllt | `transition360.png` | W3-03 |
| Performance | Anfragen und Gewicht | erfüllt, eine Ausnahme | Export: 6–7 Anfragen, 300–328 kB unkomprimiert; behandlung-und-verlauf 423 kB wegen zusätzlicher Schriftdatei; Arbeitsordner 11–12 Anfragen | W3-09 |
| Performance | Ladezeit | erfüllt | Export, 360 px, gedrosselt: FCP = LCP 1092–1184 ms, `load` 2141–2205 ms, CLS 0,010–0,017 (index, behandlung-und-verlauf, depression-verstehen) | – |
| Performance | Bilder, Schriften, Skript nur wo nötig | erfüllt | keine Fotos; Logo SVG 39,7 kB (ohne `width`/`height`, CLS gering); `font-display:swap`; `interaktion.js` nur auf der Seite mit `data-vis-build` (Folge für den Druck: W3-01) | – |
| Darstellung und Druck | Bedienelemente im Druck ausgeblendet | erfüllt | Druckmedium: Skip-Link, Hauptnavigation, Schritt-Steuerung ausgeblendet; Absenderin und Fusszeile gedruckt; URL hinter externen Links; Kapitelorientierung wird als Inhaltsübersicht mitgedruckt (vertretbar) | – |
| Darstellung und Druck | Vertiefungen vollständig gedruckt | nicht erfüllt | 9 von 11 Vertiefungen auf 6 Seiten fehlen im PDF | W3-01 |
| Darstellung und Druck | Darstellungen nicht über Seitenumbrüche geteilt | teilweise | bei 7 von 11 Figuren steht die Kennzeichnung im PDF auf der Folgeseite; Bildteile bleiben zusammen; Seitenzahlen 6–14 je Seite plausibel | W3-11 |
| Darstellung und Druck | Silbentrennung | erfüllt (Wirkung) | `starter.css` Z. 24 `hyphens:manual` statt Leitlinie F «`hyphens: auto`»; gemessen keine Folgen (kein Überlauf, kein Wort mitten umbrochen). Hinweis an das Profil, kein Befund der Website | – |
| Darstellung und Druck | Zuständigkeitsverweis an einer Stelle | erfüllt | Fusszeile aus `site.config.json › responsibility`; im Text nur über `data-responsibility-inline` (begleiten, fuer-sich-sorgen) | – |
| Wartbarkeit | Starter-Teile unverändert | erfüllt | `diff -r` gegen den Starter: `tools/` (inkl. `selftest/`), `_headers`, `starter.css`, `gate.html`, `assets/` identisch | – |
| Wartbarkeit | README, Struktur `site.config.json` | erfüllt | README mit Bauen, Gate, Selbsttest, Export, Ansehen; Seitenvertrag mit 8 Seiten und Visualisierungsplan je Seite | – |
| Wartbarkeit | Metadaten, Sitemap, 404 | nicht erfüllt | Open Graph ohne Tracking vorhanden; `siteUrl` leer → kein `canonical`, keine `sitemap.xml`; keine 404-Seite | W3-08 |
| Wartbarkeit | Ungenutzte Dateien | nicht erfüllt | `transition360.png`; `gate.html` ist Starter-Werkzeug (nicht exportiert, kein Befund) | W3-03 |

#### Befunde W3

- **W3-01 · blockierend · Vertiefungen fehlen im Druck auf sechs Seiten.**
  - **Beleg:** `page.pdf()` (A4) und `pdftotext`, je Vertiefung ein auf der Seite eindeutiger Satzteil gesucht: nicht gedruckt auf behandlung-und-verlauf (3: «Weitere Verfahren und Grenzen des Vergleichs», «Kosten, Wartezeiten und Grenzen des Bildes», «Grenzen des Bildes»), ihre-situation (2: «Beispiel und Grenzen des Bildes», «Was die Forschung sagt»), je-nach-rolle (1), begleiten (1), fuer-sich-sorgen (1: «Als eigene Übung nutzen und Grenzen der Karte»), rechte-und-angebote (1: «Grenzen der Übersicht»); gedruckt wird nur die `summary`-Zeile. Auf depression-verstehen sind beide Vertiefungen gedruckt. Ursache: Das Öffnen vor dem Druck steckt nur in `components/interaktion.js` Z. 177–178 (`beforeprint`); `tools/contract.js` Z. 14 und 137 bindet das Skript nur bei `data-puk-accordion|tabs|disclosure|dialog-open|data-vis-build` ein, nicht bei `<details>`; die Druckregeln in `components/bundle.css` (ab Z. 632) behandeln `details` nicht. Leitlinie «Technische Qualität» F: Akkordeons «vollständig gedruckt».
  - **Vorschlag:** Im Profil beheben: `INTERACTIVE` in `contract.js` um `<details` ergänzen (Skript auf jeder Seite mit Vertiefung) und in `@media print` zusätzlich `details::details-content{content-visibility:visible}` als Rückfall ohne Skript (nur Browser mit `::details-content`); neues Paket übernehmen, neu bauen, Druck je Seite nachprüfen. Nicht mit Markup-Tricks in `content/` umgehen.
  - **Zuständig:** Profil (Design-System-Artefakt), danach bauende Sitzung (Umsetzung erst nach Freigabe).

- **W3-02 · blockierend · Englische Quellentitel ohne Sprachauszeichnung (WCAG 3.1.2; gleich wie BD-02).**
  - **Beleg:** `grep 'lang="' content/*.html`: 0 Treffer. Linktexte mit mindestens drei englischen Funktionswörtern: depression-verstehen 8, behandlung-und-verlauf 3, ihre-situation 7, je-nach-rolle 11, begleiten 2, fuer-sich-sorgen 6 (≥ 37), z. B. `content/depression-verstehen.html` Z. 90 «Gender differences in depression in representative national samples …», `content/begleiten.html` Quellen «Offering mental health first aid to a person with depression …»; dazu unverlinkte Titel wie `content/ihre-situation.html` «A diathesis-stress conceptualization of expressed emotion and clinical outcome». Screenreader lesen sie mit deutscher Aussprache. Leitlinie B: «Sprachwechsel ausgezeichnet».
  - **Vorschlag:** Den englischen Titelteil jeder Quellenangabe in `<span lang="en">…</span>` fassen (Autorennamen, Jahr, Zeitschrift dürfen aussen bleiben); gleich bei englischen Werktiteln wie «Mental Health First Aid Guidelines». Optional im Profil ein Gate-Hinweis.
  - **Zuständig:** bauende Sitzung (Umsetzung erst nach Freigabe).

- **W3-03 · blockierend · Bildschirmfoto als Arbeitsstand committet.**
  - **Beleg:** `templates/website/depression-angehoerige/transition360.png`, PNG 320 × 140, 10 980 Bytes, Commit `a34018b` («Sprach-Review umgesetzt …»); zeigt den Übergangssatz «Wie eine Depression behandelt wird und wie sie verläuft, steht auf der nächsten Seite: Behandlung und Verlauf.»; keine Referenz in `.html`, `.md`, `.json`, `.css`. Verstösst gegen CLAUDE.md «Keine Exporte, Arbeitsstände … committen» und widerspricht dem Satz «Bildschirmfotos … sind als Arbeitsstand nicht im Repository» im Abschnitt «Grundlage und Arbeitsstand der bauenden Sitzung». Nicht im Export, aber in der Repository-Vorschau abrufbar. Weitere Suche (`git ls-files` nach png, jpg, pdf, zip, log, bak, orig, txt): keine weitere solche Datei; `puk-website-profil-2026.10.zip` im Stamm ist das Profilpaket.
  - **Vorschlag:** Datei mit `git rm` in einem eigenen Commit entfernen; Bildschirmfotos nur im Scratchpad ablegen.
  - **Zuständig:** bauende Sitzung (Umsetzung erst nach Freigabe).

- **W3-04 · blockierend · Bedienziele unter 44 px (gleich wie BD-06).**
  - **Beleg:** 360 × 780 px, Touch-Emulation: Startseite, Lesepfade und Seitenüberblick (`content/index.html` Z. 20, 29, 40, `ol.puk-site-paths`): 13 von 19 Links nur 28 px hoch, z. B. «Partnerin oder Partner» 250 × 28, «Ist das eine Depression?» 270 × 28, «Mir wird es zu viel.» 201 × 28; Ursache `starter.css` Z. 19 (`.puk-site-paths a` ohne Mindesthöhe). Skip-Link «Zum Hauptinhalt» auf allen Seiten 153 × 41 px (`components/bundle.css` Z. 307). WCAG 2.5.8 (24 px oder Abstand) ist erfüllt, die Profilregel «Buttons, Navigation und eigenständige Aktionen mindestens 44 px» (Barrierefreiheit, Grundanforderungen) nicht.
  - **Vorschlag:** Im Starter `.puk-site-paths a{display:inline-flex;align-items:center;min-height:var(--web-touch-target)}` und beim Skip-Link `min-height:var(--web-touch-target)`; als Profiländerung, dann Paket übernehmen.
  - **Zuständig:** Profil, danach bauende Sitzung (Umsetzung erst nach Freigabe).

- **W3-05 · blockierend (vor Veröffentlichung) · Impressum und Datenschutzerklärung fehlen.**
  - **Beleg:** Keine Seite, kein Link in der Fusszeile, kein Treffer «Impressum», «Datenschutz», «Cookie» in `content/` und `site.config.json`. Leitlinie «Technische Qualität» C: «Impressum und Datenschutzerklärung vorhanden und deckungsgleich mit dem, was der Code tatsächlich tut.» Der Starter enthält keine Vorlage dafür.
  - **Vorschlag:** Seite «Impressum und Datenschutz» im Seitenvertrag (oder geprüfter Link auf die entsprechenden PUK-Seiten), in der Fusszeile über `site.config.json` verlinkt. Inhalt deckungsgleich mit dem Code: keine Cookies, kein Tracking, keine Drittanbieter, Zugriffsprotokolle beim Hosting, E-Mail an die Fachstelle. Rechtlicher Wortlaut durch Fachstelle bzw. PUK.
  - **Zuständig:** Fachstelle (Inhalt), bauende Sitzung (Einbau); ein Fusszeilenfeld im Starter wäre Sache des Profils.

- **W3-06 · wichtig · (gleich wie BD-05) Acht Navigationspunkte: auf dem Smartphone beginnt der Inhalt erst unterhalb der Navigation.**
  - **Beleg:** `site.config.json` 8 Seiten mit `navLabel` (Z. 48–701). Bei 360 × 780 px ist der Kopf 592 px hoch, `main` beginnt bei y = 592; auf dem ersten Bildschirm stehen Logo, acht Navigationszeilen à 44 px und die Absenderin, der Seitentitel beginnt erst im unteren Viertel (Bildschirmfoto `scratchpad/w3-shots/index-360.png`, nicht im Repository). Ursache: `starter.css` Z. 30 (`minmax(min(100%,196px),1fr)`) ergibt bei 320 px Inhaltsbreite eine Spalte; bei 1280 px bricht die Navigation auf zwei Zeilen um. Leitlinie «Interaktionskonzept», Navigation: «Bis sechs Hauptpunkte sichtbar; unter 760 px als Raster mit Trennlinien; darüber `DisclosureMenu`»; Entscheidungshilfe: zuerst «Gliederung kürzen, Lesepfade». Der Starter erzeugt keine Menü-Navigation (`contract.js` Z. 142–143).
  - **Vorschlag:** a) Website: Hauptnavigation auf höchstens sechs Punkte kürzen (z. B. «Übersicht» über das Logo, «Nach Rolle» über die Lesepfade) – Strukturentscheid der Fachstelle. b) Profil: zweispaltiges Raster unter 760 px (wie `bundle.css` Z. 342 `minmax(132px,1fr)`, das `starter.css` überschreibt) oder Menü-Navigation im Starter.
  - **Zuständig:** Fachstelle (Struktur) und bauende Sitzung; Variante b Profil.

- **W3-07 · blockierend · Name des Logo-Links enthält den sichtbaren Logotext nicht (WCAG 2.5.3; gleich wie BD-01).**
  - **Beleg:** Alle 8 Seiten Z. 23 (depression-verstehen Z. 24): `<a class="puk-web-logo" … aria-label="Startseite: Depression: Informationen für Angehörige"><img … alt="Psychiatrische Universitätsklinik Zürich">`; das `aria-label` ersetzt den `alt`-Text, sichtbar steht im Logo «Psychiatrische Universitätsklinik Zürich». Erzeugt in `tools/contract.js` Z. 141. Der Testfall SR-05 der Leitlinie erwartet für das Kit «Startseite der Psychiatrischen Universitätsklinik Zürich». Ob ein Logo als Textbild unter 2.5.3 fällt, wird unterschiedlich ausgelegt; weil der Build zusätzlich vom Testfall SR-05 des Profils abweicht, ist die Schwere an BD-01 angeglichen (blockierend).
  - **Vorschlag:** `aria-label` weglassen und den `alt`-Text so fassen, dass der sichtbare Text vorne steht, z. B. «Psychiatrische Universitätsklinik Zürich – Startseite Depression: Informationen für Angehörige».
  - **Zuständig:** Profil (`contract.js`), danach bauende Sitzung.

- **W3-08 · wichtig · Vor der Veröffentlichung fehlen Ziel-Adresse, Sitemap, kanonische Links und 404-Seite.**
  - **Beleg:** `site.config.json` Z. 763 `"siteUrl": ""` → Gate-Hinweis `site-url`, kein `<link rel="canonical">`, Export ohne `sitemap.xml` (`scratchpad/w3-export`); keine 404-Seite im Website-Ordner und im Export. Leitlinie G («`sitemap.xml`»), Pre-Release-Audit R3 Punkte 16 und 18.
  - **Vorschlag:** Ziel-Adresse festlegen und `siteUrl` setzen; eine 404-Seite mit Rückweg zur Übersicht als Seite des Seitenvertrags ohne `navLabel` anlegen und prüfen, ob Gate (`reachability`) und Export sie zulassen.
  - **Zuständig:** Fachstelle (Adresse), bauende Sitzung.

- **W3-09 · optional · Zwei Pfeilzeichen laden eine zusätzliche Schriftdatei (110 kB).**
  - **Beleg:** behandlung-und-verlauf lädt als einzige Seite `Rubik-VariableFont_wght.woff2` (110 504 Bytes; 423 statt rund 310 kB). Auslöser: «←» und «→» in `.puk-vis-cont__ends` (`content/behandlung-und-verlauf.html` Z. 54), die in den statischen Rubik-Schnitten fehlen → Rückfall auf «Rubik Variable» (`--font-core`, `bundle.css` Z. 140). Gleiches Muster in `templates/website/longform/erklaermuster.html` (Muster J).
  - **Vorschlag:** Pfeile als SVG zeichnen (wie die Achse darüber) oder weglassen; im Profil «Rubik Variable» aus `--font-core` nehmen oder per `unicode-range` begrenzen.
  - **Zuständig:** bauende Sitzung bzw. Profil (Muster).

- **W3-10 · optional · Externe Links und PDF-Dateien nicht gekennzeichnet (PDF-Teil gleich wie BD-09).**
  - **Beleg:** 11 Links auf 7 PDF-Dateien ohne Format- und Grössenangabe, z. B. Schweizer Behandlungsempfehlungen (`…_DE_20251113.pdf`, auf 3 Seiten), Obsan Bulletin 11/2024, Barometer 2024, MHFA Guidelines, BAG-Broschüre; externe Links im Fliesstext ohne Hinweis, z. B. je-nach-rolle «Institut Kinderseele Schweiz», «VASK Zürich». Leitlinie «Interaktionskonzept», Links: «Datei mit Format- und Grössenangabe»; «Externe Links sagen das im Linktext oder per Icon mit Text». In den Quellenlisten ergibt sich «extern» aus dem Zusammenhang.
  - **Vorschlag:** «(PDF, … MB)» an die PDF-Links; im Fliesstext «(externe Website)» oder die Domain nennen.
  - **Zuständig:** bauende Sitzung.

- **W3-11 · optional · Hohe Figuren werden im Druck geteilt.**
  - **Beleg:** Im PDF (A4, Chromium) beginnt die Folgeseite mit der Kennzeichnung «Eigene didaktische Darstellung …» der Figur davor: behandlung-und-verlauf S. 4 und 6, depression-verstehen S. 5 und 8, fuer-sich-sorgen S. 4, ihre-situation S. 5 und 7 (7 von 11 Figuren); der Bildteil bleibt jeweils zusammen. Höhe im Druckmedium bei 794 px Breite: `v-is-kreislauf` 1232 px, `v-bv-weg` 1137, `v-is-gefaess` 1131, `v-fs-netz` 1128, `v-bv-vergleich` 1099, `v-dv-schichten` 995 (ohne geöffnete Vertiefung) gegenüber 1123 px A4-Höhe ohne Ränder. `break-inside:avoid` kann das bei Überhöhe nicht verhindern.
  - **Vorschlag:** Im Profil die Druckregeln für Figuren straffen (SVG-Höhe und Abstände im Druck begrenzen), Ziel: jede Figur höchstens eine A4-Seite.
  - **Zuständig:** Profil.

**Hinweise an das Profil (keine Befunde der Website):** `starter.css` Z. 24 setzt `hyphens:manual` entgegen Leitlinie F; der Export liefert `Rubik-Italic-VariableFont_wght.woff2` (115 kB) mit, das keine Seite lädt; die Repository-Vorschau sendet für die Website keine CSP.

#### Zählung der Befunde W3

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| blockierend | 6 | W3-01, W3-02, W3-03, W3-04, W3-05, W3-07 |
| wichtig | 2 | W3-06, W3-08 |
| optional | 3 | W3-09, W3-10, W3-11 |

#### Prüfrunde W3 2 · Nachprüfung inkl. Export und 404 (11.10.2026, Stand `e63bd73`)

**Geprüft durch:** zweite Prüfsitzung (Claude Code, hat nicht gebaut und die Runde davor nicht durchgeführt). Reines Review: keine Datei im Repository geändert (`git status` vor dem Eintrag in diesen Bericht leer), kein `build.mjs`; `export.mjs` nur in den Scratchpad. Quelle: Prüfung 2.

**Grundlage:**
- Gelesen: `guidelines/00-technische-qualitaet.md` (Fassung 2026.10.1), `_headers` der Website und des Stamms, `site.config.json`, `content/*.html`, die 10 gebauten Seiten, `tools/contract.js` und `tools/export.mjs`, Block «Prüfbefunde 11.10.2026» in `components/bundle.css`, `components/interaktion.js`.
- Werkzeuge: `node tools/gate.mjs` (Entwurf, Produktion, Selbsttest); Rendern im Speicher mit `tools/contract.js`; `cmp`/`diff -r` gegen den Starter; html-validate 9.5.0 (recommended); axe-core 4.10.3; Playwright 1.56.1 mit Chromium 141, CSP aus `_headers` per Route in jede Antwort; `export.mjs` (Entwurf) nach `scratchpad/p2/export-draft`, eigener Server; `page.pdf()` A4 mit `pdftotext`, `pdfinfo`, `pdftoppm`, mit und ohne JavaScript; 404-Seite des Exports unter einer verschachtelten fehlenden Adresse.
- Nicht geprüft: externe Links (Proxy der Prüfumgebung); echte Hosting-Header und Umschreibungen von Netlify; reale Tastatur-, Touch- und Screenreader-Tests.

**Ergebnis:** Alle sechs blockierenden und beide wichtigen Befunde der Runde 1 sind erledigt. Offen bleiben zwei optionale: W3-10 (Dateigrössen) und W3-11 (Figuren im Druck geteilt). Neu ist ein optionaler Befund (W3-12), dazu ein Hinweis an das Profil zum Druck ohne Skript. W3 bleibt **offen**, bis die Fachstelle die optionalen Befunde umsetzen lässt oder zurückstellt.

| Befund | Nachprüfung (Beleg) | Ergebnis |
| --- | --- | --- |
| W3-01 Vertiefungen im Druck | alle 10 Seiten laden `interaktion.js` (Menü und `details`). PDF mit JavaScript, Arbeitsordner und Export: 11 von 11 Vertiefungen auf 7 Seiten gedruckt (je ein eindeutiger Satzteil im PDF gefunden, z. B. `begleiten`: «Nicht jede Beziehung ist ein gemeinsames Boot …»). Ohne JavaScript: 0 von 11 gedruckt, obwohl `details::details-content` im Druckmedium als `content-visibility: visible` berechnet wird (Chromium 141) – siehe Hinweis unten | erledigt |
| W3-02 Sprachwechsel | wie BD-02: 50 × `lang="en"` | erledigt |
| W3-03 Arbeitsstand im Repository | `git ls-files` im Website-Ordner: nur `assets/favicon.svg` und `assets/logo.svg` als Bilddateien; `transition360.png` entfernt | erledigt |
| W3-04 Bedienziele | wie BD-06: Lesepfade mindestens 46 px, Sprunglink 44 px (`bundle.css`: `.puk-web-skip{…min-height:var(--web-touch-target)…}`) | erledigt |
| W3-05 Impressum und Datenschutz | Seite `impressum-datenschutz` im Seitenvertrag, `legal` mit `#impressum` und `#datenschutz`, Links in jeder Fusszeile (10 von 10 Seiten); Gate meldet keinen `legal`-Befund. Deckungsgleich mit dem Code bis auf W1-31 (Netlify); keine Cookies und kein Web Storage gemessen | erledigt (Inhalt: W1-31) |
| W3-06 Navigation | wie BD-05: Menü unter 760 px | erledigt |
| W3-07 Name des Logo-Links | wie BD-01 | erledigt |
| W3-08 Ziel-Adresse, Sitemap, kanonische Links, 404 | `siteUrl` `https://depression-angehoerige.netlify.app`; 9 Seiten mit `<link rel="canonical">` (404 ohne, richtig); `sitemap.xml` mit 9 Adressen ohne 404, im Arbeitsordner und im Export; 404-Seite mit `noindex`, ohne Navigationseintrag; im Export Pfade ab dem Stamm (`/css/site.css`, `/index.html` …). Unter `/gibt/es/nicht.html` mit Status 404 ausgeliefert: Schrift Rubik, Logo, Menü und «Zur Übersicht» (44 px, Ziel `/index.html`) funktionieren; einzige Konsolenmeldung ist der Status 404 selbst | erledigt (siehe W3-12) |
| W3-09 Pfeilzeichen, Schriftdatei | 0 × `←` `→` in `content/`; Export auf allen 10 Seiten nur `Rubik-Light`, `-Regular`, `-Medium` (315–338 kB, 7 Anfragen); der Export liefert keine Kursivschrift mehr | erledigt |
| W3-10 externe Links und PDF | «(PDF)» an 11 Links; externe Links im Fliesstext nennen die Domain (`je-nach-rolle`: kinderseele.ch, vaskzuerich.ch; `rechte-und-angebote` › `angebote`: 8 Links mit Domain im Linktext). Dateigrösse fehlt | teilweise |
| W3-11 Figuren im Druck | Profil 2026.10.1 setzt im Druck `html{font-size:81.25%}`, die Figur als Spalte und `.puk-vis-more{order:1}`. PDF (Chromium 141, A4, Standardränder), je Figur Seite von Titel, Bildanfang, Bildende und Kennzeichnung ausgewertet und bei `ihre-situation` und `behandlung-und-verlauf` als Bild angesehen: Bei **11 von 11** Figuren steht die Kennzeichnung nach der Vertiefung auf der Folgeseite (`order` wirkt im PDF nicht; im Druckmedium des Browserfensters steht sie davor). Geteilt werden `v-dv-schichten` (obere Schicht S. 3, untere S. 4), `v-bv-weg` (Schritte 1–3 S. 4, 4–5 S. 5), `v-ra-vergleich` (Zeile «Auskunft …» über S. 2/3). Der Titel steht allein am Seitenende bei `v-bv-vergleich` (S. 2), `v-bv-fruehzeichen` (S. 7), `v-ro-spannung` (S. 5). Leitlinie F: «Titel, Kernaussage, Darstellung und Kennzeichnung stehen auf einer A4-Seite» | offen |

**Weitere Punkte, nachgeprüft**

| Bereich | Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- | --- |
| Funktion | Seiten nur aus Quellen; Gate; Selbsttest | erfüllt | 10 von 10 gerendert identisch; Entwurf 0 blockierend, 12 Hinweise; Selbsttest 65/65; Produktion 12 blockierend (11 × `visual-approval`, `review-report`) |
| Funktion | Starter-Teile unverändert | erfüllt | `tools/` (mit `selftest/`), `starter.css`, `gate.html`, `_headers`, `assets/` byte-gleich mit `psychoeducation-site-starter` |
| Funktion | Export | erfüllt | Entwurf: 10 Seiten, `css/site.css`, 3 Schriftdateien, `js/interaktion.js`, `_headers`, `sitemap.xml`, `assets/`; keine Arbeitsdateien (kein `PRUEFBERICHT.md`, kein `tools/`, kein `content/`, kein `gate.html`). Produktion bricht ab (Exit 1) |
| Funktion | interne Links, JavaScript-Fehler | erfüllt | 296 interne Verweise, 0 fehlerhaft; 0 Konsolenfehler und 0 CSP-Verstösse auf 10 Seiten × 7 Breiten |
| Barrierefreiheit | axe-core, html-validate | erfüllt | axe: 0 Verstösse (10 Seiten × 2 Breiten). html-validate: wie in Runde 1 nur `role="list"` auf der Navigation (absichtlich) und `aria-label` auf zwei Listen; neu nur `long-title` auf `rechte-und-angebote` (Titel 84 Zeichen), kein Barrierefreiheitsfehler |
| Datenschutz | nur gleiche Herkunft, keine Cookies | erfüllt | alle Anfragen gleiche Herkunft (Arbeitsordner und Export); 0 Cookies, 0 Einträge in `localStorage`/`sessionStorage` |
| Sicherheit | CSP und Header | erfüllt | Website-`_headers` unverändert (CSP mit `frame-ancestors 'none'`, `nosniff`, `no-referrer`, `Permissions-Policy`, `X-Frame-Options: DENY`); im Export enthalten; Stamm-`_headers` hat jetzt einen Block für `/templates/website/depression-angehoerige/*` mit derselben CSP (`frame-ancestors 'self'` für die QA-Seite) |
| Sicherheit | `tel:`, Nummern, `target` | erfüllt | 0 `tel:`, 0 `target`; keine Telefon- oder Notrufnummern im sichtbaren Text (Suche nach Schweizer Rufnummern und 112, 117, 118, 143, 144, 145, 147 auf 10 Seiten) |
| Darstellung und Druck | Bedienelemente ausgeblendet; Absenderin und Fusszeile gedruckt | erfüllt | Druckmedium: Navigation und Sprunglink `display:none`, Absenderin und Fusszeile sichtbar (10 Seiten) |

#### Neue Befunde W3, Runde 2

- **W3-12 · optional · Kanonische Links und Sitemap zeigen auf `.html`-Adressen.**
  - **Beleg:** `index.html`: `<link rel="canonical" href="https://depression-angehoerige.netlify.app/index.html">`; `sitemap.xml` ebenso mit `…/index.html`, `…/begleiten.html` usw. Netlify kann solche Adressen mit seiner Funktion für «schöne» Adressen auf `/` bzw. `/begleiten` umleiten; in der Vorschau des Repositorys schreibt Netlify Links so um (Hinweis im Design-System: «seite.html → /pfad/seite»). Dann zeigen kanonischer Link und Sitemap auf Adressen mit Weiterleitung. Nicht geprüft, ob die Ziel-Website diese Umschreibung nutzt (R3, Punkt 21).
  - **Vorschlag:** auf der Ziel-Adresse prüfen; wenn umgeleitet wird, im Starter die Startseite als `…/` und die übrigen Seiten in der Form ausgeben, die der Host ausliefert, oder die Umschreibung beim Host abschalten.
  - **Zuständig:** Profil (`contract.js`, `build.mjs`, `export.mjs`), Prüfung auf der Ziel-Adresse in R3.

**Hinweis an das Profil (kein Befund der Website):** Der Rückfall `@media print{details::details-content{content-visibility:visible;display:block}}` wirkt in Chromium 141 nicht: ohne JavaScript fehlen im PDF alle 11 Vertiefungen. Mit Skript (Normalfall) werden sie gedruckt. Die Leitlinie nennt den Rückfall als gegeben; im Design-System prüfen.

#### Zählung der Befunde W3, Runde 2

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| erledigt aus Runde 1 | 9 | W3-01 bis W3-09 |
| teilweise | 1 | W3-10 (Dateigrössen) |
| offen, optional | 2 | W3-11, W3-12 (neu) |

#### Prüfrunde W3 3 · Nachprüfung (12.10.2026, Stand `5f68c39`)

**Geprüft durch:** dritte Prüfsitzung (Claude Code, hat nicht gebaut und die Befunde nicht umgesetzt). Reines Review: keine Datei im Repository geändert; `build.mjs` nur in einer getrennten Arbeitskopie im Scratchpad, `export.mjs` nur in den Scratchpad. Quelle: Prüfung 3.

**Grundlage:** `git diff e63bd73 5f68c39` (20 Dateien im Website-Ordner: `PRUEFBERICHT.md`, 9 Dateien in `content/`, 10 gebaute Seiten, `site.config.json`); `node tools/gate.mjs` (Entwurf, Produktion, Selbsttest); Playwright und axe-core wie in Bedienung, Runde 3.

**Ergebnis:** Die Pull Requests #28, #29 und #31 ändern nur Text und eine Klasse (`puk-vis-compare__col--b`). Technik, Header und Werkzeuge sind unverändert. Alle Prüfpunkte des Auftrags sind erfüllt. Keine neuen Befunde. W3 bleibt **offen** wegen der optionalen Befunde W3-10 Rest, W3-11 und W3-12 aus Runde 2 (unverändert).

| Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- |
| Build reproduzierbar | erfüllt | `node tools/build.mjs` in einem Git-Worktree von `5f68c39`: «10 Seiten geschrieben · PUK Website Kit 1.10.1-r4 · abgeleitet · Build r4-8 · Gate draft: 0 blockierend, 12 Hinweise.» Danach `git status` leer: Seiten und `sitemap.xml` byte-gleich |
| Gate | erfüllt | Entwurf: 0 blockierend, 12 Hinweise (11 × `visual-approval`, `review-report`); Selbsttest 65/65; Produktion: 12 blockierend (dieselben 12), wie vorgesehen bis zur Freigabe |
| keine `style`-Attribute | erfüllt | 0 Treffer `style=` in den 10 gebauten Seiten und in `content/`; zur Laufzeit 0 CSP-Verstösse `style-src-attr` (die Positivkontrolle meldet ein eingefügtes `style`-Attribut) |
| keine Inline-Skripte | erfüllt | jedes `<script>` mit `src` (`../../../components/interaktion.js?v=r4-8`, `defer`); 0 Ereignis-Attribute (`on…=`); 0 CSP-Verstösse `script-src` |
| kein `tel:` | erfüllt | 0 Treffer in den gebauten Seiten und in `content/` |
| Export | erfüllt | `export.mjs <scratchpad>` (Entwurf): 10 Seiten, `css/site.css`, 3 Schriftdateien, `js/interaktion.js`, `_headers`, `sitemap.xml`, `assets/`. Keine Arbeitsdateien: kein `PRUEFBERICHT.md`, `README.md`, `content/`, `tools/`, `gate.html`, `site.config.json`, `starter.css`. `--production` bricht mit Exit 1 ab und legt keinen Ordner an |
| Barrierefreiheit (axe) | erfüllt | 0 Verstösse auf 10 Seiten × 1280/360 px |
| Datenschutz | erfüllt | 0 Anfragen an fremde Server in 70 Seitenaufrufen |
| geänderte Auszeichnung | erfüllt | Nach dem Entfernen von `p.puk-vis-compare__key` beginnt jede `section` der Vergleiche mit ihrer `h3`. Der neue `p.puk-longform__boundary` im Kopf des Impressums ist gleich gebaut wie auf `rechte-und-angebote`. Keine neuen IDs, 0 doppelte IDs |

#### Prüfrunde W3 4 · Nachprüfung (12.10.2026, Stand `1a328f5`)

**Geprüft durch:** vierte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und S-33, V-11, BD-12 und K1 nicht umgesetzt (die Umsetzung in den Pull Requests #40 und #41 stammt von der dritten Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle aller Befunde dieser Runde: Prüfung 4. Reines Review: `build.mjs` nur in Git-Worktrees im Scratchpad.

**Grundlage:** `git diff 7cc4e1b 1a328f5`: 9 Dateien im Website-Ordner (`PRUEFBERICHT.md`, 4 Dateien in `content/`, 4 gebaute Seiten); `site.config.json`, `_headers`, `tools/`, `sitemap.xml`, `components/` und `templates/website/longform/` unverändert. `node tools/gate.mjs` (Entwurf, Produktion, Selbsttest).

**Ergebnis:** #40 und #41 ändern nur Text, ein Linkziel und fügen einen externen Link hinzu (69 → 70 eindeutige externe Adressen). Alle Prüfpunkte des Auftrags sind erfüllt. Keine neuen Befunde. W3 bleibt **offen** wegen der optionalen Befunde W3-10 Rest, W3-11 und W3-12 aus Runde 2 (unverändert).

| Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- |
| Build reproduzierbar | erfüllt | `node tools/build.mjs` in Git-Worktrees von `b8288d0` und `1a328f5`: je «10 Seiten geschrieben · PUK Website Kit 1.10.1-r4 · abgeleitet · Build r4-8 · Gate draft: 0 blockierend, 12 Hinweise.»; danach `git status` leer, Seiten und `sitemap.xml` byte-gleich |
| Gate | erfüllt | Entwurf: 0 blockierend, 12 Hinweise (11 × `visual-approval`, `review-report`); Produktion: 12 blockierend (dieselben 12), wie vorgesehen bis zur Freigabe; Selbsttest 65/65 |
| keine `style`-Attribute | erfüllt | 0 Treffer `style=` in den 10 gebauten Seiten und in `content/`; zur Laufzeit 0 CSP-Verstösse (mit Positivkontrolle, Bedienung Runde 4) |
| keine Inline-Skripte | erfüllt | jedes `<script>` mit `src`: 10 × `../../../components/interaktion.js?v=r4-8` (`defer`), in `gate.html` zusätzlich `tools/contract.js` und `tools/gate-browser.js`; 0 Ereignis-Attribute (`on…=`) |
| kein `tel:` | erfüllt | 0 Treffer in den gebauten Seiten und in `content/` |
| geänderte Auszeichnung | erfüllt | neue Links mit `class="puk-link--inline"` wie die übrigen Links im Eintrag; keine neuen IDs; `aria-describedby="is-kr-text"` zeigt weiterhin auf `p.puk-sr#is-kr-text` |

#### Prüfrunde W3 5 · Nachprüfung (12.10.2026, Stand `007006a`)

**Geprüft durch:** fünfte Prüfsitzung (Claude Code). Sie hat die Website nicht gebaut und W1-33 und S-34 nicht umgesetzt (Umsetzung in #44 durch die vierte Prüfsitzung im Rollenwechsel). Keine Inhalte und kein Code geändert. Quelle: Prüfung 5. Reines Review: `build.mjs` nur in Git-Worktrees im Scratchpad.

**Grundlage:** `git diff f24e5af 007006a`: 3 Dateien (`PRUEFBERICHT.md`, `content/je-nach-rolle.html`, `je-nach-rolle.html`); `site.config.json`, `_headers`, `tools/`, `sitemap.xml`, `components/` und `templates/website/longform/` unverändert. `node tools/gate.mjs` (Entwurf, Produktion, Selbsttest) an `007006a`.

**Ergebnis:** #44 ändert nur Text und fügt einen internen Link hinzu; die Zahl der eindeutigen externen Adressen bleibt 70 (ohne die kanonischen Links). Alle Prüfpunkte des Auftrags sind erfüllt. Keine neuen Befunde. W3 bleibt **offen** wegen der optionalen Befunde W3-10 Rest, W3-11 und W3-12 aus Runde 2 (unverändert).

| Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- |
| Build reproduzierbar | erfüllt | `node tools/build.mjs` in Git-Worktrees von `f24e5af` und `007006a`: je «10 Seiten geschrieben · PUK Website Kit 1.10.1-r4 · abgeleitet · Build r4-8 · Gate draft: 0 blockierend, 12 Hinweise.»; danach `git status --porcelain` leer, Seiten und `sitemap.xml` byte-gleich mit dem Commit |
| Gate | erfüllt | Entwurf: 0 blockierend, 12 Hinweise (11 × `visual-approval`, `review-report`); Produktion: 12 blockierend (dieselben 12), wie vorgesehen bis zur Freigabe; Selbsttest 65/65 |
| keine `style`-Attribute | erfüllt | 0 Treffer `style=` in den 11 HTML-Dateien des Website-Ordners (10 Seiten und `gate.html`) und in `content/`; zur Laufzeit 0 CSP-Verstösse (mit Positivkontrolle, Bedienung Runde 5) |
| keine Inline-Skripte | erfüllt | jedes `<script>` mit `src`: 10 × `../../../components/interaktion.js?v=r4-8` (`defer`), in `gate.html` `tools/contract.js` und `tools/gate-browser.js`; 0 Ereignis-Attribute (`on…=`) |
| kein `tel:` | erfüllt | 0 Treffer in den gebauten Seiten und in `content/` |
| geänderte Auszeichnung | erfüllt | neuer Link mit `class="puk-link--inline"` wie die übrigen Links im Absatz; relatives Ziel `rechte-und-angebote.html#angebote` wie auf `fuer-sich-sorgen`; keine neuen IDs |

## Pre-Release-Audits

Aufträge und Prüfpunkte: Abschnitt «Pre-Release-Audits» (`guidelines/00-pre-release-audits.md`). Erst nach W3; R3 unmittelbar vor der Veröffentlichung. R3 steht nur bei «Go» auf «erledigt».

### R1 Profil-Audit

#### R1 · Runde 1 (11.10.2026, Stand `e63bd73`)

**Kontext:** Website `templates/website/depression-angehoerige/`, Branch `main` (geprüft auf `website/depression-angehoerige-pruefung-2`, abgezweigt von `e63bd73`; Website-Dateien aus `51892c5`). Vorschau: Netlify-Vorschau des Repositorys unter `/templates/website/depression-angehoerige/` (nicht abgerufen; geprüft wurde aus dem Repository über einen lokalen Server). Anrede: Sie.

**Geprüft durch:** zweite Prüfsitzung (Claude Code, hat nicht gebaut). Keine Inhalte und kein Code geändert. Grundlagen gelesen: `README.md` (Zuständigkeit statt Krisenzugang, Verweis im Text, Absenderin), Leitlinien 01, 02, 03, 04, 05, 06, 09, `components/bundle.css` (Block «Prüfbefunde 11.10.2026»), `starter.css`, `site.config.json`.

**Vorgehen:** alle 10 Seiten bei 320, 360, 768, 1280 und 1440 px und mit `data-theme="kontrast"` als ganze Seite fotografiert (60 Aufnahmen, Scratchpad); angesehen als verkleinerte Übersicht je Breite, dazu in voller Grösse: Kopf bei 360, 768 und 1280 px, Fusszeile bei 1440 px, Impressum bei 320 px, alle Figuren bei 1280 und 360 px. Messwerte aus den Runden Bedienung 2 und W3 2 (Kontrast, Überlauf, Bedienziele, Fokus, Tab-Folge).

**Gesamturteil:** Die Website entspricht dem Profil in Marke, Farben, Schrift, Navigation, Komponenten und Zuständigkeit. Logo, Absenderin, Fusszeile und Zuständigkeitsverweis stehen auf allen 10 Seiten wie vorgeschrieben; es gibt keine Krisennummern und keinen Notfallblock. Die Befunde aus Bedienung und W3 zu Navigation, Logo-Link, Bedienzielen und Kontrastmodus sind behoben. Offen sind nur optionale Punkte, drei davon im Profil, und ein Prüfbedarf zum Verweis im Text. Kritische oder wichtige Befunde gibt es keine.

| Nr. | Prüfpunkt | Ergebnis | Beleg | Priorität | Website oder Profil |
| --- | --- | --- | --- | --- | --- |
| 1 | Logo positiv im Kopf oben links, Sperrzone, Wortmarke mit Symbol | erfüllt | `assets/logo.svg` byte-gleich mit `assets/logo/PUK_Logo_statisch_positiv_de.svg` (md5 `b725d22c…`); oben links auf allen 10 Seiten, frei stehend (Bildschirmfotos 320 bis 1440 px); kein animiertes Logo | – | – |
| 2 | Absenderin auf jeder Seite sichtbar | erfüllt (Darstellung: R1-01) | «Absenderin Fachstelle Angehörigenarbeit · Psychiatrische Universitätsklinik Zürich · angehoerigenarbeit@pukzh.ch» mit `mailto:` im Kopf aller 10 Seiten, auch im Druck | optional | Profil |
| 3 | Bildwelt: keine KI-Personenbilder, keine Stimmungsbilder | erfüllt | einziges `img` ist das Logo; alle Figuren sind Linienzeichnungen oder Diagramme aus Profil-Tokens | – | – |
| 4 | Nur semantische Tokens, keine Hexwerte | erfüllt | `content/` und `starter.css` ohne Hexwerte und `rgb()` (einziger Treffer ein Kommentar); SVG-Attribute nur `var(--puk-blue-100)`, `currentColor`, `none` | – | – |
| 5 | Kontrast gemessen | erfüllt | Text: tiefster Wert 4,71 : 1 auf 10 Seiten, bei 1280 und 360 px, auch im Theme «kontrast» (Links, aktuelle Seite, E-Mail); Vertiefungs-Schalter #2B4FE0 5,94 : 1; Hinweiskästen #222222 auf #D8E0FF 12,14 : 1; Linien #3C64FF 4,40 : 1 auf #F7F7F7 (Komponenten unverändert gegenüber der Messung in Bedienung Runde 1) | – | – |
| 6 | Theme «Hoher Kontrast» lesbar | erfüllt | Übersicht aller 10 Seiten bei 1280 px mit `data-theme="kontrast"`; Figuren mit dunkleren Linien, keine verlorenen Linien (Gefäss, Waage angesehen) | – | – |
| 7 | Bedeutung nie nur über Farbe | erfüllt | aktuelle Seite mit Unterstreichung und `aria-current`; Ansatzpunkte mit Doppelrahmen und Wort «Ansatzpunkt»; «besteht schon / wäre möglich» über Linienart und Text; Menü offen/zu über Chevron und `aria-expanded` | – | – |
| 8 | Schrift lokal | erfüllt | nur Rubik 300, 400, 500 als WOFF2 aus derselben Herkunft (Export: `fonts/`); keine externen Anfragen | – | – |
| 9 | Lesetext in Seitenschrift; Überschriften und Handlungshinweise nicht kleiner als der Erklärtext daneben; Zeilenlänge | teilweise | Lesetext 21 px (19 px unter 760 px), Fusszeile 21/19 px nach AUDIT 04; Zeilenlänge über `--web-content-measure` begrenzt. In Figuren stehen Kurztext und Ansatzpunkt in 15 px, die Bezeichnung «Ansatzpunkt für Angehörige» in 13 px; daneben steht Lesetext in 21 px (R1-04) | optional | Profil |
| 10 | Abstände, Linien, Radien nur über Tokens | teilweise | `starter.css` Z. 51 und 54 (Menü des Starters): `padding:6px 4px`; sonst Profil-Variablen (R1-02) | optional | Profil |
| 11 | Sprunglink zuerst; `aria-current`; Reihenfolge wie Seitenvertrag | erfüllt | erster Tab-Stopp «Zum Hauptinhalt» auf 10 von 10 Seiten; `aria-current="page"` genau einmal auf den 8 Inhaltsseiten, keins auf Impressum und 404; Reihenfolge Übersicht, Depression, Behandlung, Ihre Situation, Nach Rolle, Begleiten, Für sich sorgen, Rechte und Angebote = `pages` in `site.config.json` | – | – |
| 12 | Kein waagrechter Überlauf 320–1440 px und bei 200 % | erfüllt | 0 px auf 10 Seiten bei 320, 360, 640 (≙ 200 % Zoom bei 1280), 768, 1024, 1280, 1440 px und mit doppelter Browser-Schriftgrösse bei 360 bis 1440 px | – | – |
| 13 | Fusszeile: Zuständigkeitsverweis wortgleich, Inhaltsverantwortung, Prüfdatum | teilweise | Verweis wortgleich mit dem Standardwortlaut in `README.md` (geprüft 09.10.2026), `reviewStatus` «geprueft»; «Inhaltsverantwortung: Ch. Egger, Fachstelle Angehörigenarbeit PUK»; «Redaktioneller Status: Musterentwurf, Stand 10.10.2026 – fachliche Prüfung ausstehend». Die Texte wurden am 11.10.2026 geändert, das Impressum sagt «Stand: 11.10.2026» (R1-03) | optional | Website |
| 14 | Nur Profil-Komponenten; keine Kartenraster | erfüllt | Muster A bis K, Akkordeon als `details`, Menü `data-puk-disclosure`; Gate ohne `card-grid`, keine `puk-web-card-list` | – | – |
| 15 | Sichtbar vor versteckt | erfüllt | Suizidgedanken, Sicherheit und Zuständigkeit stehen im Fliesstext (`begleiten` › `suizidgedanken`, `fuer-sich-sorgen` › `eigene-krise`, Fusszeile); die Vertiefungen enthalten Beispiele, Grenzen und Quellen, keine kritische Information | – | – |
| 16 | Bedienziele 44 px; Hover nie einzige Auslösung; Fokus sichtbar; nichts bewegt sich | erfüllt | siehe Bedienung Runde 2 (BD-03, BD-06): alle eigenständigen Ziele mindestens 44 px; Fokus auch mit erzwungenen Farben; 0 Animationen bei reduzierter Bewegung; Schritt-Aufbau nur auf Knopfdruck | – | – |
| 17 | Keine Krisennummern, keine `tel:`, kein Notfallblock, keine Krisenseite | erfüllt | 0 `tel:`; keine Rufnummern im sichtbaren Text (Suche auf 10 Seiten); keine Seite «Hilfe in der Krise» im Seitenvertrag | – | – |
| 18 | Verweis im Text nur über den Platzhalter, nach der Handlungsanleitung, höchstens einer je Abschnitt, nicht in Figur oder Vertiefung, Wortlaut wie `responsibility.inline` | teilweise (Prüfbedarf) | zwei Verweise, beide über `<p data-responsibility-inline></p>`, Wortlaut gleich `responsibility.inline`: `begleiten` › `suizidgedanken` direkt nach «… holen Sie gemeinsam Hilfe.», `fuer-sich-sorgen` › `eigene-krise` nach den Warnsignalen und vor der Fachstelle. Prüfbedarf: `fuer-sich-sorgen` › `grenzen` sagt nach «Beleidigungen, Drohungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen.» – «Sie dürfen ein Gespräch beenden und den Raum verlassen.» Das README nennt «eine bedrohliche Situation verlassen» als Beispiel, nach dem der Verweis folgt. Ob hier eine akute Lage gemeint ist, entscheidet die Fachstelle | Prüfbedarf | Website |
| 19 | Kein Text weckt die Erwartung, die Fachstelle sei in Krisen zuständig | erfüllt | Fusszeile: Beratung per E-Mail, für akute Sorge Notfalldienst, Notfallstation, Polizei; in `eigene-krise` steht der Verweis vor dem Satz zur Fachstelle (W1-F-14) | – | – |

**Kritische und wichtige Befunde:** keine.

**Optionale Befunde mit Änderungsvorschlag**

- **R1-01 · optional · Profil · Trennpunkte der Absenderzeile am Zeilenanfang.** Bei 320 und 360 px bricht die Absenderzeile so um, dass «•» am Zeilenende und am Zeilenanfang steht («Fachstelle Angehörigenarbeit •» / «Psychiatrische Universitätsklinik Zürich •» / E-Mail; Bildschirmfotos Kopf 360 px und Impressum 320 px). Die bauende Sitzung hat das schon beobachtet. Vorschlag: im Profil schmal die drei Teile untereinander ohne Trennpunkte setzen (die Trennpunkte sind `aria-hidden`, für Screenreader ändert sich nichts).
- **R1-02 · optional · Profil · Freie Pixelwerte im Menü des Starters.** `starter.css` Z. 51 und 54: `padding:6px 4px` für Schaltfläche und Beschriftung des Menüs. Vorschlag: Profil-Abstände (`--space-*`) verwenden.
- **R1-03 · optional · Website · Prüfdatum in der Fusszeile.** «Musterentwurf, Stand 10.10.2026» auf allen Seiten, obwohl Texte am 11.10.2026 geändert wurden; das Impressum sagt «Stand: 11.10.2026». Vorschlag: `editorialStatusLabel` beim nächsten Bau auf den Stand der Texte setzen.
- **R1-04 · optional · Profil · Kurztext und Ansatzpunkt in Figuren kleiner als der Lesetext.** `p.puk-vis-short` und `p.puk-vis-ansatz` 15 px neben 21 px Lesetext; der Ansatzpunkt ist der «Was Sie tun können»-Teil der Figur. Leitlinie 03 verlangt «Lesen in Seitenschrift». Vorschlag: im Design-System entscheiden, ob Ansatzpunkt (und Kurztext) in Seitenschrift stehen sollen.

**Prüfbedarf (Fachstelle):** Punkt 18, Verweis im Text nach «Sie dürfen ein Gespräch beenden und den Raum verlassen».

**Was nicht geprüft werden konnte:** die Netlify-Vorschau selbst (geprüft wurde aus dem Repository; laut CLAUDE.md der verlässlichere Weg); Darstellung in Safari und Firefox (nur Chromium); Bildschirmfotos aller Seiten in voller Grösse bei jeder Breite (angesehen als verkleinerte Übersicht, Einzelheiten über Messwerte); reale Geräte.

#### R1 · Runde 2 · Nachprüfung Punkt 13 (12.10.2026, Stand `5f68c39`)

**Kontext:** wie Runde 1; Stand `5f68c39` (`main` nach #31), geprüft auf `website/depression-angehoerige-pruefung-3`. **Geprüft durch:** dritte Prüfsitzung (Claude Code, hat nicht gebaut und R1-03 nicht umgesetzt). Keine Inhalte und kein Code geändert. Auftrag: Punkt 13; die übrigen Punkte sind nicht neu geprüft.

| Nr. | Prüfpunkt | Ergebnis | Beleg | Priorität | Website oder Profil |
| --- | --- | --- | --- | --- | --- |
| 13 | Fusszeile: Zuständigkeitsverweis wortgleich, Inhaltsverantwortung, Prüfdatum | erfüllt | Auf allen 10 Seiten: Verweis wortgleich mit dem Standardwortlaut in `README.md` › «Zuständigkeit statt Krisenzugang» (geprüft 09.10.2026; `site.config.json` › `responsibility`: `reviewStatus` «geprueft», 09.10.2026); «Inhaltsverantwortung: Ch. Egger, Fachstelle Angehörigenarbeit PUK»; «Redaktioneller Status: Musterentwurf, Stand 11.10.2026 – fachliche Prüfung ausstehend» (R1-03). 0 Seiten mit «Stand 10.10.2026» in der Fusszeile. Das Datum stimmt mit dem Impressum («Stand: 11.10.2026») überein; die Texte sind seit dem 11.10.2026 nicht mehr geändert worden | – | – |

- **R1-03:** erledigt (Beleg oben). «Rechtliche Angaben: Stand 10.10.2026» und «Angaben zu den Angeboten: Stand 10.10.2026» auf `rechte-und-angebote` bleiben richtig, weil sie den Stand der Recherche nennen. Das Impressum trägt jetzt «Rechtliche Angaben: Stand 11.10.2026» (W1-32).
- **Stichproben aus den anderen Stufen dieser Runde:** Punkt 5 (Kontrast, 0 unter der Schwelle), 12 (kein Überlauf von 320 bis 1440 px, auch mit 200 % Schrift), 17 (0 `tel:`) und 18 (die beiden Verweise im Text stehen unverändert auf `begleiten` und `fuer-sich-sorgen`, je einmal `data-responsibility-inline` in `content/`).
- **Prüfbedarf (Fachstelle), unverändert:** Punkt 18, `fuer-sich-sorgen` › `grenzen`: Gehört nach «Sie dürfen ein Gespräch beenden und den Raum verlassen.» der Verweis im Text? Der Satz steht unverändert; die Prüfsitzung entscheidet das nicht.
- **Ergebnis Runde 2:** 16 erfüllt, 3 teilweise (9 und 10 Profil, 18 Prüfbedarf). R1 bleibt **offen** wegen des Prüfbedarfs zu Punkt 18; R1-01, R1-02 und R1-04 gehören zum Profil.

### R2 Visualisierung und Laienverständlichkeit

#### R2 · Runde 1 (11.10.2026, Stand `e63bd73`)

**Kontext:** Website `templates/website/depression-angehoerige/`, Branch `main` (geprüft auf `website/depression-angehoerige-pruefung-2`, abgezweigt von `e63bd73`). Vorschau nicht abgerufen; geprüft aus dem Repository über einen lokalen Server. Lesende: Angehörige ohne Fachwissen; Prüfperson im Kopf: eine erschöpfte Mutter oder ein Partner, abends, auf dem Handy, nach einem schwierigen Gespräch.

**Geprüft durch:** zweite Prüfsitzung (Claude Code, hat nicht gebaut). Keine Inhalte und kein Code geändert. Grundlagen gelesen: Leitlinien 00-visuelle-wissensvermittlung (Bildsprache, «Ein Bild, eine Idee»), 07-visualisierung-umsetzen, 06-langform-und-psychoedukation, 00-sprache-und-ton; `site.config.json` › `visualPlan`; `README.md` › «Zuständigkeit statt Krisenzugang». Jede Figur bei 1280 und 360 px und im Theme «kontrast» fotografiert und angesehen (Visualisierungs-Check, Runde 2); jede Seite ganz gelesen (sichtbarer Text des Hauptbereichs, Vertiefungen eingeschlossen). R2 ersetzt keinen Lesetest mit Angehörigen.

**Gesamturteil:** Die Website ist für Laien gut verständlich und praxisnah: Die Sätze haben im Mittel 12 Wörter, 34 von 41 Abschnitten sagen, was man tun kann, und zehn Gesprächsbeispiele klingen wie gesprochen. Am besten tragen das Boot und das Gefäss: Man versteht sie ohne Erklärung, und Angehörige finden sich darin. Am wenigsten sprechen die beiden Vergleiche an: Sie erklären in sichtbaren Schlüsseln, welche Linie was bedeutet, und zeichnen die Antidepressiva gestrichelt, wie sonst nur Mögliches oder Optionales. Vor der Freigabe sollten sieben Kurztexte und einige Beschriftungen den Inhalt erklären statt die Zeichnung (R2-01). Ein Lesetest mit Angehörigen steht aus.

##### Teil 1 · Matrix je Figur (1 bis 25)

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Zeilen 1 bis 19 wie im Visualisierungs-Check, Runde 2 (Belege dort); Zeilen 20 bis 25 mit Belegen unten.

| Nr. | Prüfpunkt | `v-dv-schichten` | `v-dv-entstehung` | `v-bv-vergleich` | `v-bv-weg` | `v-bv-fruehzeichen` | `v-is-gefaess` | `v-is-kreislauf` | `v-ro-spannung` | `v-bg-boot` | `v-fs-netz` | `v-ra-vergleich` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1–13 | Leitlinie 07, Punkte 1 bis 13 | E | E | E | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | E | E | E | E | T | E | E | E | E |
| 16 | Metapher ohne Code | E | – | – | – | – | T | – | E | E | – | – |
| 17 | Keine ungewollten Bedeutungen | E | E | T | E | E | E | E | E | E | E | E |
| 18 | 200 % Schrift; Kurztext ohne schmal fehlende Bildteile | T | E | E | E | E | E | E | E | E | T | E |
| 19 | Versprechen des Kurztexts bei allen Breiten | E | E | E | E | E | E | E | E | E | T | E |
| 20 | 10-Sekunden-Test | E | T | E | E | E | E | E | E | E | E | E |
| 21 | Alltagsworte | E | E | T | E | E | E | E | E | E | E | E |
| 22 | Kein sichtbarer Text, der nur die Zeichnung beschreibt | T | T | N | N | T | T | N | E | E | N | N |
| 23 | Kurztext und Kernaussage erklären den Inhalt | T | E | T | N | T | E | N | E | E | N | T |
| 24 | Formen und Linien bedeuten überall dasselbe | T | T | T | E | E | E | E | T | E | E | T |
| 25 | Ansatzpunkt konkret, mit Beispielsatz | – | – | – | T | E | E | T | – | – | – | – |

**Belege zu T und N (Zeilen 15 bis 25)**
- **15 `v-is-kreislauf`:** Das Thema ist Erleben in der Beziehung; das Bild besteht aus vier Rechteckkästen mit Pfeilen und Substantiven («Rückzug und Gereiztheit», «Sorge, Antreiben, Übernehmen», «Erschöpfung und Ungeduld», «Sich unverstanden fühlen»), nicht aus Sätzen von Menschen. Leitlinie: «keine Bauplan-Optik (Kästen …), wo es um Erleben geht». Die Wirkung «So geht es uns oft» kommt über die Wörter an, nicht über das Bild (R2-04).
- **16 `v-is-gefaess`:** Die Bezeichnung des Ansatzpunkts nennt einen Bildteil: «Ansatzpunkt für Angehörige · beim Abfluss, doppelter Ring» (R2-01).
- **17 `v-bv-vergleich`:** Antidepressiva in der Spalte mit gestrichelter Linie; gestrichelt heisst auf derselben Seite «bei Bedarf» (Pfad, Schritt 4) und auf «Für sich sorgen» «wäre möglich» (R2-02).
- **18, 19:** siehe V-08 (Netz) und V-09 (Schichtenmodell).
- **20 `v-dv-entstehung`:** Ohne die Liste daneben sagen zwei Säulen mit Ziffern 1 bis 3 nichts über «fast nie nur eine Ursache» oder «niemand hat sie verschuldet»; die Kernaussage steht nur im Text. Für ein Strukturmodell vertretbar (keine Massnahme).
- **21 `v-bv-vergleich`:** «kognitive Verhaltenstherapie», «interpersonelle Therapie» ohne Erklärung; in der Vertiefung «Elektrokonvulsionstherapie (EKT)», «transkranielle Magnetstimulation (rTMS)», «Esketamin» (R2-03).
- **22 und 23:** sichtbarer Text, der die Zeichnung beschreibt (R2-01):
  - `v-dv-schichten`, Kurztext: «Über der Wasserlinie steht, was Angehörige sehen und hören. Darunter steht, …» (teilweise Inhalt).
  - `v-dv-entstehung`, Liste: «Sie ist bei jedem Menschen anders, im Bild der gefüllte untere Teil.»; «Bei der linken Säule genügt wenig Belastung, bei der rechten braucht es viel.» (Kurztext selbst erklärt den Inhalt.)
  - `v-bv-vergleich`: «Weg A · durchgezogene Linie», «Weg B · gestrichelte Linie»; Kurztext «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge; Beschriftung und Linienart unterscheiden die beiden Wege.»
  - `v-bv-weg`, Kurztext ganz: «Nummer und Linie zeigen die Reihenfolge, die gestrichelte Markierung den Schritt, der nur bei Bedarf folgt. Bei Schritt 1 ist ein Ansatzpunkt für Angehörige markiert.»
  - `v-bv-fruehzeichen`, Kurztext: «Die Linienstärke zeigt, wie stark die Depression wieder spürbar ist.» (die übrigen Sätze erklären den Inhalt).
  - `v-is-gefaess`: «doppelter Ring» (siehe 16).
  - `v-is-kreislauf`: Kurztext «Vier Stationen folgen aufeinander; nach der vierten beginnt der Kreis von vorn. Bei Station 3 ist ein Ansatzpunkt für Angehörige markiert.»; «Leserichtung: im Uhrzeigersinn, beginnend oben bei Station 1.» (die Leserichtung verlangt Muster B; Profil).
  - `v-fs-netz`: Kurztext «Der Abstand zur Mitte zeigt, wie nah jemand im Alltag ist. Durchgezogene Rahmen stehen für Unterstützung, die schon besteht, gestrichelte für Möglichkeiten, die sich nutzen liessen.»; Legende «Abstand zur Mitte: wie nah im Alltag».
  - `v-ra-vergleich`: «Spalte A · durchgezogene Linie», «Spalte B · gestrichelte Linie»; Kurztext beginnt mit «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge.»
- **24:** gestrichelt heisst auf der Website: «bei Bedarf» (`v-bv-weg`), «wäre möglich» (`v-fs-netz`), «kann sich verschieben» (`v-ro-spannung`), «Schwelle» (`v-dv-entstehung`), «was die Person erleben kann» (`v-dv-schichten`), «Weg B» bzw. «mit Einverständnis» (beide Vergleiche). Doppelte Linie heisst «Ansatzpunkt» (Pfad, Gefäss, Kreislauf), bei der Waage aber «Loslassen» (R2-02).
- **25:** `v-bv-weg`: «Anbieten, bei der Terminsuche zu helfen oder mitzukommen, wenn die Person das möchte.» – konkret, ohne Beispielsatz; `v-is-kreislauf`: «Ein ruhiges Gespräch über das, was Sie beobachten, hilft oft mehr als ein Vorwurf.» – ohne Beispielsatz (R2-05). Erfüllt: `v-is-gefaess` (Sätze im Bild «Meine Schwester übernimmt den Mittwoch.»), `v-bv-fruehzeichen` (Beispielsatz direkt nach der Figur: «Mir fällt auf, dass du seit ein paar Tagen kaum mehr rausgehst. …»).

##### Teil 2 · Bildsprache und Wirkung je Figur

Jede Zeichnung zuerst ohne Text angesehen, dann mit Text. Wirkung = `resonance` im Plan.

| Seite › Abbildung | Motiv in einem Satz | Erster Eindruck (B1) | Befunde (B2 bis B6) | Bewertung | Priorität |
| --- | --- | --- | --- | --- | --- |
| `depression-verstehen` › Abb. 1 `v-dv-schichten` | Eine angehörige Person steht am Ufer und schaut auf eine weiche Form, von der nur die Spitze aus dem Wasser ragt; darüber und darunter Sätze | ruhig, nachdenklich | B2: Angehörige im Bild, ihre Sätze oben («Er sagt schon wieder ab.»). B3: «… und es hat nicht mit mir zu tun» wird eingelöst. B4 würdevoll. B5: Bild nötig, es verbindet Gesehenes und Erlebtes. B6 ja. Kurztext beschreibt die Zeichnung (R2-01) | trägt | – |
| `depression-verstehen` › Abb. 2 `v-dv-entstehung` | Zwei Säulen aus Verletzlichkeit und Belastung erreichen dieselbe gestrichelte Schwelle | sachlich, etwas technisch (Balkendiagramm) | B2: Angehörige nicht im Bild, passend (es geht um Ursachen). B3: Entlastung «Niemand ist schuld» kommt über Kernaussage und Text, nicht über das Bild. B4 neutral. B5: Das Bild zeigt «je grösser die Verletzlichkeit, desto weniger Belastung» schneller als Text. B6 nein, aber kein Erlebensbild | trägt | – |
| `behandlung-und-verlauf` › Abb. 1 `v-bv-vergleich` | Zwei Textspalten «Psychotherapie» und «Antidepressiva» mit vier gleichen Merkmalen | übersichtlich, schulisch | B2: Fragen der Angehörigen («Machen Antidepressiva abhängig?») werden beantwortet. B3: «Es gibt mehrere wirksame Wege» – ja; die gestrichelte Spalte schwächt «beide gleich wirksam» (R2-02). B5: Spalten helfen. Schlüssel «· durchgezogene Linie» (R2-01) | überarbeiten | wichtig |
| `behandlung-und-verlauf` › Abb. 2 `v-bv-weg` | Ein Weg mit fünf Punkten, der vierte gestrichelt | ruhig, klar | B2: Ansatzpunkt bei Schritt 1. B3: Orientierung «wo man anfangen kann» eingelöst. B4 sachlich. B6: Man würde ihn zeigen, um den Weg zu erklären | trägt | – |
| `behandlung-und-verlauf` › Abb. 3 `v-bv-fruehzeichen` | Eine Achse von «es geht gut» bis «die Depression ist zurück» mit drei Bereichen und zunehmender Linienstärke | sachlich, ruhig | B2: Sätze aus Sicht der erkrankten Person («Ich schlafe wieder schlechter.»). B3: «Wir können früh reagieren» eingelöst. B4: nicht dramatisierend | trägt | – |
| `ihre-situation` › Abb. 1 `v-is-gefaess` | Ein Gefäss, in das zwei Zuflüsse laufen und aus dem unten etwas abfliesst; Sätze an Zu- und Abfluss | ruhig, warm | B2: Sätze aus Sicht der Angehörigen («Niemand sagt mir, wie es weitergeht.»). B3: «… kein Versagen» und «Stellen, an denen ich etwas tun kann» eingelöst. B6 ja. Der doppelte Ring am Abfluss wirkt technisch (Zielscheibe) | trägt | – |
| `ihre-situation` › Abb. 2 `v-is-kreislauf` | Vier Kästen im Kreis, verbunden mit Pfeilen | sachlich, eher technisch (Flussdiagramm) | B2: Angehörige erkennen «Sorge, Antreiben, Übernehmen» und «Erschöpfung und Ungeduld», aber als Substantive, nicht als eigene Sätze. B3: «So geht es uns oft» teilweise. B4 sachlich, ohne Schuld («Daran ist niemand schuld»). B6: eher nein, eher die Wörter als das Bild (R2-04) | überarbeiten | optional |
| `je-nach-rolle` › Abb. 1 `v-ro-spannung` | Eine Waage mit «Da sein» und «Loslassen», in der Mitte «Was beides verbindet» | ausgewogen, ruhig | B2: Sätze der Eltern auf beiden Seiten («Ich sehe doch, wie schlecht es ihm geht.» / «Er ist erwachsen.»). B3: «Mein Hin und Her ist kein Versagen» eingelöst. B6 ja. Doppelte Linie bei «Loslassen» (R2-02, optional) | trägt | – |
| `begleiten` › Abb. 1 `v-bg-boot` | Zwei Menschen in einem Boot, jede Person rudert auf ihrer Seite | ruhig, warm | B2: Sätze beider («Heute schaffe ich nur wenige Züge.» / «Ich bin da und rudere auf meiner Seite.»). B3: «Ich muss nicht für zwei rudern» eingelöst. B4 würdevoll. B6 ja, das stärkste Bild der Website | trägt | – |
| `fuer-sich-sorgen` › Abb. 1 `v-fs-netz` | «Sie» in der Mitte, drei Kreise mit Menschen und Stellen, manche gestrichelt | ruhig, geordnet | B2: Platz der angehörigen Person in der Mitte. B3: «Ich trage nicht allein» eingelöst. B6 ja (und als eigene Übung in der Vertiefung). Kurztext und Legende erklären die Zeichnung (R2-01, V-08) | trägt | – |
| `rechte-und-angebote` › Abb. 1 `v-ra-vergleich` | Zwei Textspalten «Ohne Einverständnis» und «Mit Einverständnis» mit fünf gleichen Merkmalen | übersichtlich, amtlich | B2: Die Frage «Was darf ich?» wird beantwortet. B3: «Ich darf anrufen und erzählen, was ich sehe» eingelöst (drei von fünf Zeilen gleich «möglich»). B5: Die drei gleichen Zeilen wiederholen sich; eine Zeile «Das geht immer» wäre klarer. Schlüssel «· durchgezogene Linie» (R2-01) | überarbeiten | optional |

**Vorschläge für die Figuren, die nicht tragen** (ohne Code, höchstens zwei Varianten; die fachliche Bedeutung bleibt):
- **`v-bv-vergleich`:**
  - Variante 1: Man sieht zwei gleich gerahmte Spalten, beide mit durchgezogener Linie; die Überschriften «Psychotherapie» und «Antidepressiva» tragen die Unterscheidung. Merkmale als Fragen der Angehörigen: «Wie wirkt es?», «Wann wird es besser?», «Worauf ist zu achten?», «Für wen?». Es fallen weg: «Weg A · durchgezogene Linie», «Weg B · gestrichelte Linie» und der erste Satz des Kurztexts.
  - Variante 2: wie Variante 1, dazu unter beiden Spalten eine durchgehende Zeile «Bei einer schweren Depression: beides zusammen».
- **`v-ra-vergleich`:**
  - Variante 1: Die drei Zeilen, die in beiden Spalten gleich sind, stehen als eine durchgehende Zeile über beide Spalten: «Das geht immer: eigene Beobachtungen mitteilen, allgemeine Informationen erhalten, sich selbst beraten lassen.» Darunter nur die zwei Zeilen, die sich unterscheiden (Auskunft, Akten). Die Schlüssel «Spalte A/B · … Linie» fallen weg.
  - Variante 2: zwei Kästen statt Spalten: «Das dürfen Sie immer» und «Dafür braucht es das Einverständnis», die Zürcher Regel zur Auskunft als Satz darunter.
- **`v-is-kreislauf`:**
  - Variante 1: dieselbe Schleife, die Stationen als kurze Sätze aus Sicht der beiden: «Er zieht sich zurück und ist gereizt.» – «Ich mache mir Sorgen, treibe an und übernehme.» – «Ich bin erschöpft und werde ungeduldig.» – «Er fühlt sich unverstanden.» (Prüfbedarf: wessen Erleben Station 4 ist). Ohne Kästen, die Sätze stehen an der Linie. Es fallen weg: die Kästen, der Kurztext zur Abfolge (R2-01).
  - Variante 2: Kästen bleiben, aber mit den Sätzen aus Variante 1 statt Substantiven.

**Geplante Figuren:** keine. Alle elf Figuren des Plans sind gebaut; es gibt keine Entwurfsseiten und keinen `UMBAUPLAN.md`.

##### Teil 3 · Lesetest je Seite

a = verstehe ich beim ersten Lesen (ja / mit Mühe / nein); b = weiss ich danach, was ich tun kann (ja, mit Beispielsatz oder Handlung / Verweis / nein). Ton (d) ist auf allen Seiten warm und erwachsen, ohne Schuldzuweisung; Absicherungen (e) stehen bei Aussagen über Ursachen und Verlauf («fast nie nur eine Ursache», «kann», «oft», «bei etwa der Hälfte»), bei Handlungshinweisen fehlen sie zu Recht. Abweichungen sind in der Tabelle genannt.

| Seite | Abschnitt | a | b | Stolperstellen | Priorität |
| --- | --- | --- | --- | --- | --- |
| Übersicht | `einstieg` | ja | ja (Fachstelle, E-Mail) | Satz mit 31 Wörtern («Wenn Sie über Ihre Situation sprechen möchten, berät Sie …») | optional (R2-07) |
| Übersicht | `kurz` | ja | ja («Sie dürfen sich beraten lassen …») | – | – |
| Übersicht | `lesepfade` | ja | ja (Einstieg nach Rolle oder Frage) | – | – |
| Übersicht | `kapitel` | ja | nein (Überblick) | – | – |
| Depression verstehen | `was-ist` | ja | Verweis («Was Sie tun können, … steht im Abschnitt Bei Suizidgedanken») | – | – |
| Depression verstehen | `dahinter` | ja | ja («Nachfragen hilft mehr als Deuten»; Beispielfrage nur in der Vertiefung) | Kurztext beschreibt die Zeichnung | wichtig (R2-01) |
| Depression verstehen | `anders` | ja | ja («Die Hausarztpraxis ist ein guter erster Schritt.») | – | – |
| Depression verstehen | `entstehung` | mit Mühe | nein (bewusst; entlastet) | «im Bild der gefüllte untere Teil», «Bei der linken Säule …» | wichtig (R2-01) |
| Depression verstehen | `formen` | ja | ja (bipolar: «sagen Sie es der behandelnden Fachperson») | «Mit psychotischen Merkmalen» – erklärt durch «Wahnvorstellungen» | – |
| Behandlung und Verlauf | `behandelbar` | ja | nein (Orientierung) | «angeleitete Selbsthilfe» ohne Erklärung | optional (R2-03) |
| Behandlung und Verlauf | `wege` | mit Mühe | nein (Information) | «kognitive Verhaltenstherapie», «interpersonelle Therapie», in der Vertiefung «EKT», «rTMS», «Esketamin»; «Weg A · durchgezogene Linie»; «stellt beide … nebeneinander» (schmal untereinander) | wichtig (R2-01), optional (R2-03) |
| Behandlung und Verlauf | `weg` | ja | ja (Ansatzpunkt; Gespräch vor dem Austritt mit Liste) | Kurztext beschreibt die Grafik | wichtig (R2-01) |
| Behandlung und Verlauf | `verlauf` | ja | nein («Wird er früh erkannt, …» ohne Handlung) | Satz mit 32 Wörtern und zwei Zahlen | optional (R2-07) |
| Behandlung und Verlauf | `vorbeugen` | ja | ja (Plan für schwierige Zeiten, Beispielsatz) | «Die Linienstärke zeigt …» | wichtig (R2-01) |
| Behandlung und Verlauf | `einbezug` | ja | ja (Beispielsatz) | – | – |
| Ihre Situation | `nicht-allein` | ja | nein (Orientierung, entlastend) | – | – |
| Ihre Situation | `was-belastet` | ja | Verweis («Dagegen lässt sich etwas tun: Mehr dazu unter …») | – | – |
| Ihre Situation | `belastung` | ja | ja (Ansatzpunkt, Sätze im Bild) | «doppelter Ring»; Satz mit 36 Wörtern, durch den Doppelpunkt lesbar | wichtig (R2-01) |
| Ihre Situation | `gesundheit` | ja | ja («Achten Sie auf Warnsignale bei sich selbst.») | – | – |
| Ihre Situation | `wechselwirkung` | mit Mühe | ja (Ansatzpunkt), ohne Beispielsatz | Kurztext und «Leserichtung» beschreiben die Grafik; Vertiefung beginnt mit «Kritik in der Familie hängt mit Rückfällen zusammen.» – der nächste Satz entlastet | wichtig (R2-01), optional (R2-05) |
| Ihre Situation | `angst` | ja | Verweis | – | – |
| Je nach Rolle | `rollen` | ja | nein (Orientierung) | Satz mit 27 Wörtern (Seitennamen) | – |
| Je nach Rolle | `partner` | ja | ja (Beispielsatz) | zwei Sätze mit 31 und 28 Wörtern und Zahlen | optional (R2-07) |
| Je nach Rolle | `kinder` | ja | ja (Beispielsatz für Kinder) | Satz mit 32 Wörtern und zwei Zahlen | optional (R2-07) |
| Je nach Rolle | `eltern` | ja | ja (Waage; Beobachtungen mitteilen) | – | – |
| Je nach Rolle | `geschwister` | ja | ja, schwach («dürfen … selbst entscheiden, wie viel Sie mittragen»), ohne Beispielsatz | Satz mit 26 Wörtern | – |
| Je nach Rolle | `erwachsene-kinder` | ja | ja (zur Abklärung ermutigen, Gruppe) | – | – |
| Je nach Rolle | `freunde` | ja | ja (Beispielsatz) | Satz mit 30 Wörtern | – |
| Begleiten | `haltung` | ja | ja | – | – |
| Begleiten | `ansprechen` | ja | ja (Beispielsätze) | – | – |
| Begleiten | `alltag` | ja | ja | – | – |
| Begleiten | `ablehnung` | ja | ja (Beispielsatz) | Satz mit 28 Wörtern | – |
| Begleiten | `suizidgedanken` | ja | ja (direkt fragen, Beispielsatz, Verweis im Text) | – | – |
| Für sich sorgen | `erlaubt` | ja | ja | drei Verneinungen in vier Sätzen («nimmt … nichts weg», «keine Nebensache») | optional (R2-06) |
| Für sich sorgen | `grenzen` | ja | ja (Beispielsatz) | Prüfbedarf zum Verweis im Text (R1, Punkt 18) | – |
| Für sich sorgen | `netz` | ja | ja (Übung, nur in der Vertiefung) | Kurztext beschreibt die Karte | wichtig (R2-01) |
| Für sich sorgen | `was-hilft` | mit Mühe | ja (Angebote) | viele Einschränkungen hintereinander («wenig untersucht», «nur schwach», «Das heisst nicht …», «Versprechen lässt sich nichts»); für die Ehrlichkeit nötig; Satz mit 31 Wörtern | optional (R2-06) |
| Für sich sorgen | `eigene-krise` | ja | ja | – | – |
| Rechte und Unterstützung | `schweigepflicht` | ja | ja (Beispielsatz) | «Spalte A · durchgezogene Linie»; «Die Merkmale stehen …» | wichtig (R2-01) |
| Rechte und Unterstützung | `vorsorge` | ja | ja | – | – |
| Rechte und Unterstützung | `angebote` | ja | ja | – | – |
| Impressum und Datenschutz | `impressum` | mit Mühe | – | Herausgeberin und «kein offizielles Angebot» (S-32) | optional |
| Impressum und Datenschutz | `datenschutz` | ja | – | «keine Daten an andere Anbieter» und Netlify (W1-31) | wichtig |
| Seite nicht gefunden | – | ja | ja («Zur Übersicht») | – | – |

**Die zehn schwierigsten Stellen** (Vorschläge halten die Bedeutung; wo «Prüfbedarf» steht, entscheidet die Fachstelle den Wortlaut)
1. `behandlung-und-verlauf` › Abb. 1 › Vertiefung: «… etwa die Elektrokonvulsionstherapie (EKT), die transkranielle Magnetstimulation (rTMS) oder Esketamin als Nasenspray.» → «… etwa eine Behandlung mit kurzen Stromimpulsen in Narkose (Elektrokonvulsionstherapie), mit Magnetimpulsen am Kopf (transkranielle Magnetstimulation) oder ein Medikament als Nasenspray (Esketamin).» Prüfbedarf.
2. `behandlung-und-verlauf` › Abb. 1, Weg A: «Am besten untersucht sind die kognitive Verhaltenstherapie und die interpersonelle Therapie.» → «Am besten untersucht sind die kognitive Verhaltenstherapie, die an belastenden Gedanken und Gewohnheiten ansetzt, und die interpersonelle Therapie, die an Beziehungen und Veränderungen im Leben ansetzt.» Prüfbedarf.
3. `rechte-und-angebote` › Abb. 1: «Spalte A · durchgezogene Linie» und «Die Merkmale stehen in beiden Spalten in derselben Reihenfolge.» → Schlüssel und Satz streichen; der Kurztext beginnt mit «Vieles ist schon ohne Einverständnis der erkrankten Person möglich.» Ebenso Abb. 1 auf `behandlung-und-verlauf` (nur «Bei einer schweren Depression wirkt die Kombination beider am besten.» bleibt).
4. `behandlung-und-verlauf` › Abb. 2, Kurztext: «Nummer und Linie zeigen die Reihenfolge, die gestrichelte Markierung den Schritt, der nur bei Bedarf folgt. …» → «Die meisten beginnen in der Hausarztpraxis. Eine Tagesklinik oder Klinik braucht es nur bei Bedarf, und auch wenn die Beschwerden abgeklungen sind, geht die Behandlung weiter. Schon beim ersten Schritt können Sie helfen.»
5. `ihre-situation` › Abb. 2, Kurztext: «Vier Stationen folgen aufeinander; nach der vierten beginnt der Kreis von vorn. …» → «Wer sich zurückzieht, löst bei anderen Sorge und Antreiben aus; das erschöpft, und Erschöpfung macht ungeduldig. Die erkrankte Person fühlt sich dann unverstanden und zieht sich weiter zurück. Bei der eigenen Erschöpfung können Sie ansetzen.» Prüfbedarf (Station 4).
6. `fuer-sich-sorgen` › Abb. 1, Kurztext: «Der Abstand zur Mitte zeigt, wie nah jemand im Alltag ist. Durchgezogene Rahmen …» → «Unterstützung kann von nahen Menschen, aus dem Umfeld und von Fachstellen kommen. Manches gibt es schon, anderes liesse sich nutzen.»
7. `depression-verstehen` › Abb. 1, Kurztext: «Über der Wasserlinie steht, was Angehörige sehen und hören. Darunter steht, was …» → «Was Angehörige sehen und hören, ist oft nur ein kleiner Teil. Darunter kann liegen, was die erkrankte Person erlebt, oft ohne es zeigen oder sagen zu können. Das ist eine Möglichkeit, keine Gewissheit: Nachfragen hilft mehr als Deuten.»
8. `depression-verstehen` › Abb. 2, Teil 1 und 3: «…, im Bild der gefüllte untere Teil.» und «Bei der linken Säule genügt wenig Belastung, bei der rechten braucht es viel.» → Teil 1 endet mit «Sie ist bei jedem Menschen anders.»; Teil 3: «Wer sehr verletzlich ist, braucht wenig Belastung, bis eine Depression beginnt; bei anderen braucht es viel.»
9. `je-nach-rolle` › `kinder`: «Die Schutzfaktoren wirken zusammen: In einer britischen Studie blieben von den Jugendlichen mit allen fünf Schutzfaktoren 48 von 100 über die ganze Studienzeit psychisch gesund, mit höchstens einem nur 4 von 100.» → «Die Schutzfaktoren wirken zusammen. In einer britischen Studie blieben 48 von 100 Jugendlichen mit allen fünf Schutzfaktoren über die ganze Studienzeit psychisch gesund. Mit höchstens einem Schutzfaktor waren es nur 4 von 100.»
10. `index` › `einstieg`: «Wenn Sie über Ihre Situation sprechen möchten, berät Sie die Fachstelle Angehörigenarbeit der PUK kostenlos und vertraulich, auch wenn die erkrankte Person nicht in der PUK behandelt wird: angehoerigenarbeit@pukzh.ch.» → «Möchten Sie über Ihre Situation sprechen? Die Fachstelle Angehörigenarbeit der PUK berät Sie kostenlos und vertraulich, auch wenn die erkrankte Person nicht in der PUK behandelt wird: angehoerigenarbeit@pukzh.ch.»

**Kennzahlen je Seite**

| Seite | Sätze | Ø Wörter je Satz | Sätze mit Verneinung | Sätze über 25 Wörter | Abschnitte mit Handlungsteil |
| --- | --- | --- | --- | --- | --- |
| Übersicht | 47 | 10,3 | 10 (21 %) | 1 | 3 von 4 (75 %) |
| Depression verstehen | 96 | 11,7 | 19 (20 %) | 0 | 4 von 5 (80 %) |
| Behandlung und Verlauf | 102 | 11,5 | 19 (19 %) | 1 | 3 von 6 (50 %) |
| Ihre Situation | 64 | 13,1 | 11 (17 %) | 2 | 5 von 6 (83 %) |
| Je nach Rolle | 85 | 12,9 | 13 (15 %) | 6 | 6 von 7 (86 %) |
| Begleiten und Gespräche | 57 | 11,1 | 16 (28 %) | 1 | 5 von 5 (100 %) |
| Für sich sorgen | 50 | 12,5 | 17 (34 %) | 1 | 5 von 5 (100 %) |
| Rechte und Unterstützung | 36 | 11,9 | 7 (19 %) | 0 | 3 von 3 (100 %) |
| Gesamt | 537 | 11,9 | 112 (21 %) | 12 | 34 von 41 (83 %) |

**Zählweise** (zum Nachrechnen): sichtbarer Text im `main` der gebauten Seiten, ohne Quellenliste, ohne SVG und ohne Text nur für Screenreader (`p.puk-sr`); Vertiefungen eingeschlossen. Gezählt werden nur Textblöcke (Absatz, Listeneintrag, Kurztext usw.), die mit «.», «!», «?» oder «»» enden; Überschriften, Navigations- und Stichwortlisten ohne Satzzeichen fallen weg. Sätze werden an «.», «!» oder «?» vor einem Grossbuchstaben, einer Ziffer oder «« getrennt; Sätze unter 4 Wörtern zählen nicht. Wort = Folge aus Buchstaben, Ziffern und Bindestrichen. Verneinung = mindestens eines der Wörter nicht, nichts, kein, keine, keinen, keinem, keiner, keines, weder. Handlungsteil = mindestens ein Satz, der sagt, was die lesende Person tun kann, auch als Verweis mit «Was Sie tun können …» (Einstufung je Abschnitt in der Tabelle oben). Die Satzzählung weicht von der S-Zählung der Runde 1 ab, die auch Teaser und Textfassungen einschloss.

##### Befunde R2

- **R2-01 · wichtig · Sichtbarer Text beschreibt die Zeichnung statt den Inhalt.**
  - **Beleg:** sieben Kurztexte und mehrere Beschriftungen, einzeln unter «Belege zu T und N», Zeilen 22 und 23 (`v-dv-schichten`, `v-dv-entstehung`, `v-bv-vergleich`, `v-bv-weg`, `v-bv-fruehzeichen`, `v-is-gefaess`, `v-is-kreislauf`, `v-fs-netz`, `v-ra-vergleich`). Pre-Release-Audits, R2 Punkt 22: «Kein sichtbarer Text, der nur die Zeichnung beschreibt (…, «durchgezogene Linie»). Die Kurzbeschreibung steht als p.puk-sr nur für Screenreader.» Alle 11 Figuren haben diese Kurzbeschreibung bereits (`aria-describedby`, 193 bis 367 Zeichen).
  - **Vorschlag:** Kurztexte wie unter «Die zehn schwierigsten Stellen», Nr. 3 bis 8; Kontinuum: ersten Satz streichen; Gefäss: «Ansatzpunkt für Angehörige · beim Abfluss». Profil: In Muster E die sichtbaren Schlüssel «· durchgezogene Linie» und «· gestrichelte Linie» entfernen oder nur für Screenreader setzen; in Muster B klären, ob «Leserichtung» sichtbar bleiben muss (Leitlinie 07 verlangt sie); die Muster-Kurztexte in den Vorlagen («Durchgezogene und gestrichelte Linie unterscheiden die Bereiche ohne Farbe») auf Inhalt umstellen, damit neue Websites das nicht übernehmen.
  - **Zuständig:** bauende Sitzung (Website), Profil (Muster E und B, Vorlagen).
- **R2-02 · wichtig · Gestrichelte Linie bei den Antidepressiva; Linienarten mit mehreren Bedeutungen.**
  - **Beleg:** `behandlung-und-verlauf` › Abb. 1: «Weg B · gestrichelte Linie» › «Antidepressiva». Auf derselben Seite heisst gestrichelt «bei Bedarf» (Abb. 2, Schritt 4), auf «Für sich sorgen» «wäre möglich». Wer die Website als Ganzes liest, kann die Antidepressiva als zweite Wahl lesen, obwohl Kernaussage und Text sagen: «Beide Wege wirken.» Ursache ist Muster E (Option B immer gestrichelt). Optional dazu: gestrichelt heisst ausserdem «Schwelle», «was die Person erleben kann», «mit Einverständnis»; doppelte Linie heisst «Ansatzpunkt», bei der Waage aber «Loslassen».
  - **Vorschlag:** im Vergleich der Behandlungen beide Spalten gleich darstellen und die Überschriften unterscheiden lassen (siehe Bildsprache, Variante 1). Profil: Muster E ohne wertende Linienart, oder Linienarten website-weit mit einer Bedeutung (gestrichelt = «möglich, bei Bedarf»).
  - **Zuständig:** Fachstelle (Haltung zu den Behandlungen), Profil (Muster E), danach bauende Sitzung.
- **R2-03 · optional · Fachbegriffe in der Behandlung ohne Erklärung (Prüfbedarf).**
  - **Beleg:** `behandlung-und-verlauf` › `behandelbar` «angeleitete Selbsthilfe»; Abb. 1 «kognitive Verhaltenstherapie», «interpersonelle Therapie»; Vertiefung «Elektrokonvulsionstherapie (EKT)», «transkranielle Magnetstimulation (rTMS)», «Esketamin».
  - **Vorschlag:** Nr. 1 und 2 der zehn schwierigsten Stellen; «angeleitete Selbsthilfe (Übungen nach einem Programm, begleitet von einer Fachperson)».
  - **Zuständig:** Fachstelle (Erklärungen), danach bauende Sitzung.
- **R2-04 · optional · Kreislauf: Stationen als Substantive in Kästen (Prüfbedarf).**
  - **Beleg:** Bildsprache, Zeile `v-is-kreislauf`; CLAUDE.md: «Beschriftet wird Erleben mit Sätzen aus Sicht von Menschen».
  - **Vorschlag:** Bildsprache, Vorschläge `v-is-kreislauf`. Prüfbedarf: Wessen Erleben beschreibt Station 4 («Sich unverstanden fühlen»)?
  - **Zuständig:** Fachstelle (Perspektive), bauende Sitzung.
- **R2-05 · optional · Ansatzpunkt ohne Beispielsatz bei Pfad und Kreislauf.**
  - **Beleg:** Matrix, Zeile 25.
  - **Vorschlag** (Wortlaut entscheidet die Fachstelle): Pfad: «So könnte es klingen: «Soll ich dir helfen, einen Termin zu finden? Ich komme gern mit.»» Kreislauf: «So könnte es klingen: «Ich merke, dass ich ungeduldig werde. Das liegt an meiner Müdigkeit, nicht an dir.»»
  - **Zuständig:** Fachstelle, bauende Sitzung.
- **R2-06 · optional · Viele Verneinungen auf «Für sich sorgen» (34 %) und «Begleiten» (28 %).**
  - **Beleg:** Kennzahlen; z. B. `fuer-sich-sorgen` › `erlaubt`: «Für sich zu sorgen, nimmt der erkrankten Person nichts weg.», «Eigene Kontakte, Hobbys und Erholung sind keine Nebensache.»; `grenzen`: «Sie braucht keine lange Begründung.» Viele Verneinungen sind gewollt entlastend («kein Egoismus», «kein Versagen») und sollen bleiben.
  - **Vorschlag:** nur wo die positive Form gleich klar ist: «Eigene Kontakte, Hobbys und Erholung sind wichtig, auch jetzt.»; «Eine kurze Begründung genügt.»
  - **Zuständig:** bauende Sitzung nach Freigabe (S).
- **R2-07 · optional · Lange Sätze mit Zahlen.**
  - **Beleg:** 12 Sätze über 25 Wörter, 6 davon auf «Je nach Rolle», meist mit Studienzahlen (Kennzahlen; Nr. 9 und 10 der zehn schwierigsten Stellen; `partner`: «In einer Befragung in Deutschland fühlten sich fast drei Viertel der Partnerinnen und Partner schuldig oder für die Erkrankung oder die Genesung verantwortlich, sechs von zehn berichteten von Streit oder Ärger.»).
  - **Vorschlag:** an der Zahl teilen, z. B. «… schuldig oder für die Erkrankung oder die Genesung verantwortlich. Sechs von zehn berichteten von Streit oder Ärger.»
  - **Zuständig:** bauende Sitzung nach Freigabe (S).

**Zählung der Befunde R2:** wichtig 2 (R2-01, R2-02), optional 5 (R2-03 bis R2-07); Bildsprache: 8 Figuren tragen, 3 überarbeiten (`v-bv-vergleich`, `v-ra-vergleich`, `v-is-kreislauf`), keine «neues Motiv» oder «durch Text ersetzen».

**Was nicht geprüft werden konnte:** ein Lesetest mit Angehörigen und Menschen mit eigener Erfahrung; die Wirkung auf einem echten Telefon (nur Bildschirmfotos bei 360 und 320 px).

#### R2 · Runde 2 · Nachprüfung (12.10.2026, Stand `5f68c39`)

**Kontext:** wie Runde 1; Stand `5f68c39`. **Geprüft durch:** dritte Prüfsitzung (Claude Code, hat nicht gebaut und R2-01 bis R2-07 nicht umgesetzt). Keine Inhalte und kein Code geändert. Die 9 von R2-01 bis R2-07 betroffenen Figuren bei 1280 und 360 px, im Theme «kontrast» und, wo nötig, mit 200 % Schrift angesehen (Visualisierungs-Check, Runde 3). Die geänderten Abschnitte der betroffenen Seiten (`index`, `depression-verstehen`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `fuer-sich-sorgen`, `rechte-und-angebote`, `impressum-datenschutz`) neu gelesen. R2 ersetzt keinen Lesetest mit Angehörigen.

**Gesamturteil:** Die wichtigen Befunde R2-01 und R2-02 sind behoben: Kein Kurztext erklärt mehr die Zeichnung, und die Antidepressiva sind gleich gezeichnet wie die Psychotherapie. Die optionalen R2-03 bis R2-07 sind umgesetzt; die neuen Erklärungen und Beispielsätze machen «Behandlung und Verlauf» und den Kreislauf greifbarer, brauchen aber die fachliche Freigabe. Der Kreislauf trägt jetzt, weil man sich in den Sätzen wiedererkennt. Am wenigsten spricht weiterhin der Rechte-Vergleich an, weil drei von fünf Zeilen in beiden Spalten gleich sind (R2-08, optional). Ein Lesetest mit Angehörigen steht aus.

**Nachprüfung R2-01 bis R2-07:** alle erledigt (Website-Teil); Umsetzung, Abweichungen und Beurteilung je Befund in W1, Prüfrunde 5, Tabelle «Nachprüfung je Befund». Die zehn schwierigsten Stellen aus Runde 1 sind alle umgesetzt, Nr. 4, 5, 7 und 8 mit begründeten Abweichungen, Nr. 3 beim Vergleich der Behandlungen mit einem zusätzlichen ersten Satz. Die Profil-Teile von R2-01 (Muster E, «Leserichtung» in Muster B, Muster-Kurztexte) und R2-02 (Muster E, Option B gestrichelt) sind festgehalten und nicht als Mangel der Website gewertet.

##### Teil 1 · Matrix je Figur, Runde 2 (Zeilen 15 bis 25 neu beurteilt)

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Zeilen 1 bis 19 aus dem Visualisierungs-Check, Runde 3 (dort mit Belegen); in den Zeilen 1 bis 13 steht jetzt T beim Kreislauf (Punkt 8, V-10).

| Nr. | Prüfpunkt | `v-dv-schichten` | `v-dv-entstehung` | `v-bv-vergleich` | `v-bv-weg` | `v-bv-fruehzeichen` | `v-is-gefaess` | `v-is-kreislauf` | `v-ro-spannung` | `v-bg-boot` | `v-fs-netz` | `v-ra-vergleich` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1–13 | Leitlinie 07, Punkte 1 bis 13 | E | E | E | E | E | E | T | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | E | E | E | E | E | E | E | E | E |
| 16 | Metapher ohne Code | E | – | – | – | – | E | – | E | E | – | – |
| 17 | Keine ungewollten Bedeutungen | E | E | E | E | E | E | E | E | E | E | E |
| 18 | 200 % Schrift; Kurztext ohne schmal fehlende Bildteile | E | E | E | E | E | E | E | E | E | E | E |
| 19 | Versprechen des Kurztexts bei allen Breiten | E | E | T | E | E | E | E | E | E | E | E |
| 20 | 10-Sekunden-Test | E | T | E | E | E | E | E | E | E | E | E |
| 21 | Alltagsworte | E | E | E | E | E | E | E | E | E | E | E |
| 22 | Kein sichtbarer Text, der nur die Zeichnung beschreibt | E | E | E | E | E | E | T | E | E | E | E |
| 23 | Kurztext und Kernaussage erklären den Inhalt | E | E | E | E | E | E | E | E | E | E | E |
| 24 | Formen und Linien bedeuten überall dasselbe | E | T | E | E | E | E | E | T | E | E | E |
| 25 | Ansatzpunkt konkret, mit Beispielsatz | – | – | – | E | E | E | E | – | – | – | – |

**Belege zu den neu beurteilten Zeilen**
- **15 bis 19:** Visualisierungs-Check, Runde 3 (Zeile 19 `v-bv-vergleich`: V-11).
- **20:** unverändert; `v-dv-entstehung` T wie in Runde 1 (für ein Strukturmodell vertretbar, keine Massnahme).
- **21 `v-bv-vergleich`:** «kognitive Verhaltenstherapie» und «interpersonelle Therapie» sind im nächsten Satz erklärt, die weiteren Verfahren in der Vertiefung in Alltagsworten mit dem Fachbegriff in Klammern; «angeleitete Selbsthilfe» ist auf derselben Seite erklärt (R2-03).
- **22:**
  - erledigt: Schichtenmodell; Entstehung (Teil 1 und 3); beide Vergleiche (Schlüssel und erster Kurztext-Satz entfernt); Pfad; Kontinuum; Gefäss; Netz. Die Legende des Netzes erklärt die Ordnung als Nähe im Alltag; das ist Inhalt, nicht Zeichnung.
  - `v-is-kreislauf` T: Sichtbar bleiben «Leserichtung: im Uhrzeigersinn, beginnend oben bei Station 1.» (schmal «von oben nach unten; nach Station 4 zurück zu Station 1.») und schmal «Nach Station 4: zurück zu Station 1. Der Kreis beginnt von vorn.». Muster B verlangt das (Profil-Teil von R2-01).
- **23:** Alle Kurztexte erklären den Inhalt. `v-bv-vergleich` beginnt mit «Die Übersicht beantwortet Fragen, die Angehörige oft stellen: …», also mit einem Satz über die Übersicht; er nennt aber ihren Inhalt (die Fragen), nicht Linien oder Lage.
- **24:** Gestrichelt heisst jetzt «bei Bedarf» (Pfad), «wäre möglich» (Netz), «kann sich verschieben» (Waage), «was die Person erleben kann» (Schichtenmodell) und «mit Einverständnis» (Rechte-Vergleich), also überall «möglich, unter einer Bedingung». Ausnahmen: die gestrichelte Schwelle in `v-dv-entstehung` (übliche Darstellung einer Grenzlinie; T, keine Massnahme) und die doppelte Linie bei «Loslassen» in `v-ro-spannung`, die sonst «Ansatzpunkt» bedeutet (Muster H, Profil; T). Schichtenmodell und beide Vergleiche jetzt E.
- **25:** `v-bv-weg`: «So könnte es klingen: «Soll ich dir helfen, einen Termin zu finden? Ich komme gern mit.»»; `v-is-kreislauf`: «So könnte es klingen: «Ich merke, dass ich ungeduldig werde. Das liegt an meiner Müdigkeit, nicht an dir.»» (R2-05; Wortlaut W1-F-21).

##### Teil 2 · Bildsprache, betroffene Figuren neu beurteilt

| Seite › Abbildung | Was sich geändert hat | Befunde (B1 bis B6) | Bewertung Runde 1 → Runde 2 | Priorität |
| --- | --- | --- | --- | --- |
| `depression-verstehen` › Abb. 1 `v-dv-schichten` | Kurztext | B1 ruhig, nachdenklich (Zeichnung gleich). Der Kurztext spricht jetzt über das Erleben, nicht über die Wasserlinie. B6 ja | trägt → trägt | – |
| `depression-verstehen` › Abb. 2 `v-dv-entstehung` | Liste, Teil 1 und 3 | B1 sachlich (Säulen). Die Liste spricht ohne «linke Säule»; die Entlastung kommt wie bisher über die Kernaussage | trägt → trägt | – |
| `behandlung-und-verlauf` › Abb. 1 `v-bv-vergleich` | Schlüssel weg, beide Spalten durchgezogen, Kurztext, Erklärungen | B1 übersichtlich und ruhiger als vorher, zwei gleich gezeichnete Spalten. B3 «Es gibt mehrere wirksame Wege» jetzt auch im Bild: keine Spalte wirkt zweitrangig. B5 Spalten helfen. Variante 1 aus Runde 1 ist bis auf «Merkmale als Fragen» umgesetzt; die Merkmale lauten schon «Wie es wirkt», «Wann es besser wird», «Worauf zu achten ist» | überarbeiten → trägt | – |
| `behandlung-und-verlauf` › Abb. 2 `v-bv-weg` | Kurztext, Beispielsatz | B2 Der Ansatzpunkt hat jetzt einen Satz, den man sagen kann. Breit steht der längere Ansatzpunkt in der schmalen ersten Spalte (rund 11 Zeilen bei 1280 px), lesbar | trägt → trägt | – |
| `behandlung-und-verlauf` › Abb. 3 `v-bv-fruehzeichen` | Kurztext, Vertiefung | unverändert ruhig; Kurztext ohne Linienstärke | trägt → trägt | – |
| `ihre-situation` › Abb. 1 `v-is-gefaess` | Bezeichnung des Ansatzpunkts | Der doppelte Ring bleibt im Bild, wird aber nicht mehr benannt; seine Wirkung als Zielscheibe bleibt eine Kleinigkeit (keine Massnahme). B6 ja | trägt → trägt | – |
| `ihre-situation` › Abb. 2 `v-is-kreislauf` | Stationen als Sätze, Kurztext, Beispielsatz | B1 ruhiger und persönlicher, noch schematisch (Kästen, Pfeile). B2 Angehörige finden sich als «Ich» in Station 2 und 3, die erkrankte Person als «Er» in 1 und 4. B3 «So geht es uns oft» eingelöst. B4 ohne Schuld («Das liegt an meiner Müdigkeit, nicht an dir.»). B6 eher ja | überarbeiten → trägt | – |
| `fuer-sich-sorgen` › Abb. 1 `v-fs-netz` | Kurztext, Legende | Kurztext und Legende ohne Bildcode. B6 ja | trägt → trägt | – |
| `rechte-und-angebote` › Abb. 1 `v-ra-vergleich` | Schlüssel weg, erster Kurztext-Satz weg | B1 übersichtlich, amtlich. Die Schlüssel sind weg (R2-01). B5 bleibt: Drei von fünf Zeilen sind in beiden Spalten gleich; die Vorschläge aus Runde 1 (Zeile «Das geht immer» oder zwei Kästen) hatten keine Befundnummer und sind nicht umgesetzt (R2-08) | überarbeiten → überarbeiten | optional |

Unverändert und weiterhin tragend: `v-ro-spannung` und `v-bg-boot`. **Zählung Bildsprache:** 10 tragen, 1 überarbeiten (`v-ra-vergleich`); keine «neues Motiv» und kein «durch Text ersetzen».

##### Teil 3 · Lesetest, geänderte Abschnitte

a = verstehe ich beim ersten Lesen; b = weiss ich danach, was ich tun kann (wie Runde 1). Die übrigen Abschnitte sind unverändert wie in Runde 1.

| Seite | Abschnitt | a | b | Stolperstellen jetzt | Priorität |
| --- | --- | --- | --- | --- | --- |
| Übersicht | `einstieg` | ja | ja (Fachstelle, E-Mail) | – (Satz mit 31 Wörtern geteilt, R2-07) | – |
| Depression verstehen | `dahinter` | ja | ja | – (R2-01) | – |
| Depression verstehen | `entstehung` | ja (vorher mit Mühe) | nein (bewusst; entlastet) | – (R2-01) | – |
| Behandlung und Verlauf | `behandelbar` | ja | nein (Orientierung) | – (R2-03) | – |
| Behandlung und Verlauf | `wege` | ja (vorher mit Mühe) | nein (Information) | «Die Abbildung stellt beide nach denselben Merkmalen nebeneinander.» (schmal untereinander) | optional (V-11) |
| Behandlung und Verlauf | `weg` | ja | ja, mit Beispielsatz | – | – |
| Behandlung und Verlauf | `verlauf` | ja | nein («Wird er früh erkannt, …» ohne Handlung) | – (Satz geteilt) | – |
| Behandlung und Verlauf | `vorbeugen` | ja | ja | – (R2-01) | – |
| Ihre Situation | `belastung` | ja | ja | Satz mit 36 Wörtern («Wie stark die Belastung ist, …»), durch den Doppelpunkt lesbar, ohne Vorschlag | – |
| Ihre Situation | `wechselwirkung` | ja (vorher mit Mühe) | ja, mit Beispielsatz | «Leserichtung» (Profil); «wer sich unverstanden fühlt» ohne Person | optional (S-33) |
| Je nach Rolle | `partner` | ja | ja | ein Satz mit 28 Wörtern («Viele Paare …», ohne Vorschlag) | – |
| Je nach Rolle | `kinder` | ja | ja | – (R2-07) | – |
| Für sich sorgen | `erlaubt` | ja | ja | – (R2-06) | – |
| Für sich sorgen | `grenzen` | ja | ja | Prüfbedarf R1, Punkt 18 (unverändert) | – |
| Für sich sorgen | `netz` | ja | ja (Übung in der Vertiefung) | – (R2-01, V-08) | – |
| Rechte und Unterstützung | `schweigepflicht` | ja | ja | drei gleiche Zeilen im Vergleich | optional (R2-08) |
| Impressum und Datenschutz | `impressum` | ja (vorher mit Mühe) | – | – (S-32) | – |

**Kennzahlen je Seite, Stand `5f68c39`** (Zählweise wie Runde 1; Skript der dritten Prüfsitzung. Für `e63bd73` ergibt es dieselben Werte wie Runde 1, ausser bei «Behandlung und Verlauf» 103 statt 102 Sätze)

| Seite | Sätze | Ø Wörter je Satz | Sätze mit Verneinung | Sätze über 25 Wörter | Abschnitte mit Handlungsteil |
| --- | --- | --- | --- | --- | --- |
| Übersicht | 48 | 10,0 | 10 (21 %) | 0 | 3 von 4 (75 %) |
| Depression verstehen | 96 | 11,6 | 20 (21 %) | 0 | 4 von 5 (80 %) |
| Behandlung und Verlauf | 107 | 11,4 | 19 (18 %) | 0 | 3 von 6 (50 %) |
| Ihre Situation | 70 | 12,7 | 12 (17 %) | 1 | 5 von 6 (83 %) |
| Je nach Rolle | 88 | 12,4 | 13 (15 %) | 4 | 6 von 7 (86 %) |
| Begleiten und Gespräche | 57 | 11,1 | 16 (28 %) | 1 | 5 von 5 (100 %) |
| Für sich sorgen | 50 | 12,4 | 15 (30 %) | 1 | 5 von 5 (100 %) |
| Rechte und Unterstützung | 35 | 12,0 | 7 (20 %) | 0 | 3 von 3 (100 %) |
| Gesamt | 551 | 11,8 | 112 (20 %) | 7 | 34 von 41 (83 %) |

Veränderungen gegenüber Runde 1: Verneinungen auf «Für sich sorgen» 17 → 15 (R2-06); neu je eine auf «Depression verstehen» («Was Angehörige sehen und hören, ist nicht alles.», R2-01) und «Ihre Situation» («… nicht an dir.», Beispielsatz R2-05). Sätze über 25 Wörter 12 → 7; einer davon ist nur ein Zählartefakt (W1, Prüfrunde 5).

##### Befunde R2, Runde 2

- **R2-08 · optional · Rechte-Vergleich: Drei von fünf Zeilen sind in beiden Spalten gleich.**
  - **Beleg:** `rechte-und-angebote` › Abb. 1 (`v-ra-vergleich`): «Eigene Beobachtungen mitteilen» – «jederzeit möglich» / «jederzeit möglich»; «Allgemeine Informationen zu Krankheit und Behandlungsablauf» – «möglich» / «möglich»; «Beratung für Sie selbst» – «möglich, zum Beispiel bei einer Fachstelle für Angehörige» / «möglich» (Bildschirmfotos 1280 und 360 px). Schmal stehen die Spalten untereinander; man liest dieselben drei Zeilen zweimal, bevor die zwei Unterschiede kommen. Die Kernaussage sagt es schon: «Zuhören, allgemein informieren und Sie beraten dürfen Fachpersonen immer.» R2, Runde 1, hat das unter Bildsprache (B5) genannt und zwei Varianten vorgeschlagen, aber ohne Befundnummer. Die Stelle fehlte deshalb in den offenen Punkten und wurde mit R2-01 nicht bearbeitet.
  - **Vorschlag** (rechtliche Aussagen unverändert): Variante 1 aus Runde 1: die drei gleichen Zeilen als eine Zeile über beide Spalten «Das geht immer: eigene Beobachtungen mitteilen, allgemeine Informationen erhalten, sich selbst beraten lassen.», darunter nur «Auskunft über Gesundheitszustand und Behandlung» und «Einsicht in die Akten» in zwei Spalten. Das braucht in Muster E eine Zeile über beide Spalten (Profil). Variante 2, ohne Änderung am Profil: zwei Kästen «Das dürfen Sie immer» und «Dafür braucht es das Einverständnis», die Zürcher Regel zur Auskunft als Satz darunter.
  - **Zuständig:** Fachstelle (ob und welche Variante; rechtliche Prüfung des Wortlauts mit W1-F-21), danach bauende Sitzung; für Variante 1 zuerst das Profil.

**Zählung der Befunde R2, Runde 2:** R2-01 bis R2-07 erledigt (Website-Teil; die Profil-Teile von R2-01 und R2-02 sind im Profil offen); 1 neuer, optionaler Befund (R2-08). Aus anderen Stufen dieser Runde in der Matrix: V-10 (Profil), V-11.

**Was nicht geprüft werden konnte:** wie in Runde 1 (Lesetest mit Angehörigen und Menschen mit eigener Erfahrung, Wirkung auf einem echten Telefon). Neu gelesen wurden nur die geänderten Abschnitte; die übrigen Abschnitte sind unverändert.

### R3 Freigabe-Audit

Noch nicht durchgeführt (Stand `1a328f5`, vierte Prüfsitzung, 12.10.2026; Auftrag: R3 noch nicht). Es fehlen weiterhin die fachliche Freigabe der Texte und der 11 Darstellungen (W1-F-21), mindestens zwei reale Screenreader-Läufe und die rechtliche Prüfung von Impressum und Datenschutz (W1-31). S-33, V-11, BD-12 und K1 sind umgesetzt und nachgeprüft; W1-F-19 ist abgeschlossen. Offen sind optionale Befunde (W1-33, S-34, V-10, R2-08 und ältere) und der Prüfbedarf zu R1, Punkt 18. Das Produktionsgate blockiert weiterhin mit 12 Befunden.

Vorher (Stand `5f68c39`, dritte Prüfsitzung, 12.10.2026; Auftrag: R3 noch nicht). Voraussetzungen fehlen: die fachliche Freigabe der Texte und der 11 Darstellungen (W1-F-21, mit den neuen Erklärungen, Beispielsätzen und Sätzen im Kreislauf), mindestens zwei reale Screenreader-Läufe und die rechtliche Prüfung von Impressum und Datenschutz (W1-31). Die Korrekturen aus R1 und R2 der Runde 1 sind umgesetzt und nachgeprüft; offen sind optionale Befunde (S-33, V-10, V-11, BD-12, R2-08 und ältere) und der Prüfbedarf zu R1, Punkt 18. Erwartbar wäre heute ein «No-Go»: Das Produktionsgate blockiert mit 12 Befunden (11 × `visual-approval`, `review-report`).

Vorher (Stand `e63bd73`, zweite Prüfsitzung, 11.10.2026): ebenfalls nicht durchgeführt, mit denselben fehlenden Voraussetzungen und den damals offenen Korrekturen aus R1 und R2.
