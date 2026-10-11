# Bauauftrag · Borderline-Website, Etappe 2c-2 · «Diagnose und Begleiterkrankungen» und «Behandlung und Ihre Rolle darin»

Stand 11.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`, Grundlage `66d73b1`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Stand:** Die Etappen 1, 2a und 2b sind fachlich freigegeben. 2c-1 (`genesung`, `unterstuetzung`) ist gebaut (`66d73b1`) und noch nicht geprüft.
- **Dieser Auftrag:** Teil 2c-2 mit `diagnose` und `behandlung`, dazu kleine Korrekturen an `genesung` und `unterstuetzung` (Abschnitt 6). Danach folgt **eine** Prüfrunde für alle vier Seiten der Etappe 2c.
- **Entscheide der Fachstelle vom 11.10.2026:**
  - **Fragen aus 2c-1** («Zur Prüfung durch die Fachstelle», Nr. 1 bis 12): alle wie empfohlen. Nur Nr. 2 ändert den Wortlaut (Abschnitt 6). Die übrigen elf bleiben wie gebaut.
  - **Eine Angebotsliste auf `behandlung`:** Angebote für Abklärung und Therapie stehen zusammen in einer Liste, nur mit Link zur Website, ohne Telefonnummern und ohne Stations-E-Mail. `diagnose` verweist dorthin. «Kein Therapieplatz oder lange Wartezeit» steht nur einmal, auf `behandlung`.
  - **Zwei Textdarstellungen, keine Zeichnung:** auf `diagnose` der Weg zur Abklärung als nummerierte Schritte, auf `behandlung` drei Rollen nebeneinander. Beide haben das Format `text` und brauchen keine Bildfreigabe.
- **Entscheide von Claude (Aufbau und Technik):**
  - Der Diagnostik-Text aus `verstehen` steht schon auf `verstehen` › `borderline`. `diagnose` verweist dorthin, statt ihn zu wiederholen.
  - Medikamente und die Behandlung von Begleiterkrankungen stehen auf `behandlung` › `therapieformen`. `diagnose` verweist dorthin.
  - Die Gruppe für Eltern von Jugendlichen (PUK) ist ein Angebot für Austausch. Sie kommt auf `unterstuetzung` › `austausch` (Abschnitt 6).
  - Die Therapieformen stehen als Begriffsliste. Ein Vergleich nach Ziel, Form und Einbezug (UMBAUPLAN, Format `comparison`) entfällt, weil der Bestand je Form nur den Schwerpunkt nennt.
  - Alle Links der Angebotsliste sind am 11.10.2026 aufgerufen worden (Abschnitt 5, Tabelle).
- **Geändert werden nur:**
  - die Seiten `diagnose` und `behandlung`
  - die Korrekturen an `genesung` und `unterstuetzung` in Abschnitt 6
  - `site.config.json` und der Abgleich
- **Freigegebene Seiten:** Ihr Wortlaut bleibt unverändert, auch `index`. `diagnose` und `behandlung` kommen nicht in die Hauptnavigation (`navLabel` bleibt `null`) und bekommen keinen Einstieg auf `index`. Verweise von freigegebenen Seiten folgen mit der Freigabe 2c.

## 2. Regeln

Es gelten alle Regeln aus `BAUAUFTRAG-ETAPPE-2C1.md`, Abschnitt 2. Kurz die wichtigsten und was hier dazukommt:

- **Einfache Sprache und klares Subjekt.** Keine Semikolons im Fliesstext.
- **Personenzentriert und ohne Doppelpunkt:** «betroffene Person» statt «erkrankte Person». Statt «Hausärzt:in» neutrale Formen wie auf den freigegebenen Seiten («Hausarztpraxis», «Fachperson») oder die Paarform.
- **Absicherungen** zu Diagnose, Verlauf, Schweigepflicht und Schutz bleiben wie im Bestand. Wiederholte Absicherungen im selben Abschnitt dürfen entfallen (UMBAUPLAN, «Einschränkungen gezielt»). Kein Heilungsversprechen.
- **Verantwortung im Wortlaut der freigegebenen Seiten:**
  - «Für Behandlung und Genesung sind Sie nicht verantwortlich.» (`rolle`)
  - «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (`verstehen`)
  - Kein «allein» bei Erkrankung, Behandlung oder Genesung.
- **Akute Gefahr im Wortlaut von `krise`:** «Notruf» statt «Notfallwege», «Notfalldienst» oder «Soforthilfe», z. B. «Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» Links auf `/soforthilfe` entfallen.
- **Verweis im Text** (`<p data-responsibility-inline></p>`):
  - direkt nach einer Handlungsanleitung für eine akute Lage
  - höchstens einer pro Abschnitt, nie in einer Vertiefung
  - Steht dieselbe Anleitung auch in einer Vertiefung, entfällt sie dort (Abgleich: «zusammengeführt», mit Fundstelle).
  - Erwartet sind vier: `diagnose` › `zweifel` und `begleiterkrankungen`, `behandlung` › `kontakt` und `wartezeit`.
- **Verlinken statt wiederholen:**
  - was die Diagnose beschreiben kann: `verstehen#borderline`
  - was Angehörige anbieten können: `rolle#anbieten`
  - Schuld und Verantwortung: `rolle#schuld`
  - Suizidgedanken ansprechen: `krise#suizid`
  - nach einer Krise: `krise#danach`
  - Beratung der Fachstelle: `index#beratung`
  - eigene Belastung: `selbstfuersorge#warnsignale`, `selbstfuersorge#unterstuetzung`, `selbstfuersorge#beratung`
  - Genesung: `genesung#forschung`, `genesung#verlauf`
  - Beratung, Austausch, andere Kantone: `unterstuetzung#beratung`, `#austausch`, `#kantone`
  - Verweissätze im Muster «… steht auf der Seite «…» im Abschnitt «…».»
- **Keine Links auf Entwurfsseiten:** `fragen`, `quellen`, `ueber`. Links zwischen `diagnose`, `behandlung`, `genesung` und `unterstuetzung` sind erlaubt.
- **Angebote:** nur Link auf die offizielle Website. Keine Telefonnummern, keine `tel:`- oder `mailto:`-Links, keine Zeiten.
- **Quellen** stehen im Block «Quellen zu dieser Seite» am Seitenende, mit «Verwendet in: …». Nicht im Text.
- **Länge:** je Seite höchstens etwa 1800 Wörter im Lesefluss (Zählweise C1). Ergänzendes kommt in Vertiefungen (Akkordeon des Profils, ohne Skript offen, im Druck vollständig).
- **Neue Sätze und Abgleich:**
  - Die Liste «Neue Sätze zur Freigabe» wird vollständig geführt.
  - Neue Tabellen `abgleich/diagnose.md` (Bestand `verstehen--diagnostik` und `verstehen--begleiterkrankungen`) und `abgleich/behandlung.md` (Bestand `unterstuetzen--therapie`).
  - Vorgemerkte Zeilen bekommen ihren Ort: `beziehungen.md` Nr. 208 «Behandlung kann Veränderung unterstützen.» → `behandlung`, `genesung.md` Nr. 163 → `diagnose#begleiterkrankungen`.
  - Was entfällt, steht mit Grund im Abgleich: Lesezeit, Prüfangaben, «Das könnte Sie auch interessieren», Lernweg-Links, Telefonnummern, E-Mail-Adressen, Links auf `/selbsttest` und `/glossar` (Seiten gibt es nicht mehr).
  - `pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle. Alle Skripte erfassen die neuen Seiten.

## 3. Seite `diagnose` · «Diagnose und Begleiterkrankungen»

**Bestand:** `verstehen--diagnostik.md` und `verstehen--begleiterkrankungen.md`.

**Gliederung (Vorschlag).** Abweichungen begründest du in der Selbstprüfung.

| Nr. | Abschnitt (`id`) | Inhalt aus dem Bestand |
| --- | --- | --- |
| Kopf | Diagnose und Begleiterkrankungen | H1 des Bestands «Wie eine Borderline-Diagnose entsteht» oder eine H1, die beide Themen nennt. Einleitung aus «Was eine Diagnose bedeutet, wer … abklärt …» (ohne «Nicht als Anleitung, jemanden zur Diagnose zu drängen …» zu verlieren) und ein Satz zu Begleiterkrankungen |
| 01 | Der Weg zur Abklärung (`abklaerung`) | **Textdarstellung**, siehe unten. Davor zwei, drei Sätze: wer abklärt und dass Diagnostik ein gestufter Prozess ist, kein einzelner Test. Danach hervorgehoben: «Die Diagnose ist eine fachliche Beurteilung über Zeit, nicht ein Stempel aus einem einzelnen Gespräch.» Dann sichtbar das Unterkapitel «Bei Jugendlichen» und die Vertiefung «Wie die Diagnose beschrieben wird» |
| 02 | Was die Diagnose für Sie bedeuten kann (`bedeutung`) | «Was bedeutet die Diagnose für Sie als Angehörige?» und «Was eine Diagnose nicht leistet». Verweissätze auf `verstehen#borderline` (was die Diagnose beschreiben kann) und `genesung#forschung` (statt «Recovery ist möglich — siehe Genesung») |
| 03 | Wenn die Diagnose nicht geteilt wird (`zweifel`) | Zweifel und zweite Einschätzung. «Was nicht hilft» und «Was möglich ist» als zwei Listen nebeneinander, schmal untereinander. Die «Klare Grenze» bei akuter Gefahr als Handlungsanleitung, danach der **Verweis im Text** |
| 04 | Wenn noch keine Diagnose gestellt ist (`ohne-diagnose`) | Wiedererkennen erlaubt keine Diagnose der anderen Person. Die Hausarztpraxis als erste Anlaufstelle. «Sie müssen nicht warten, bis eine Diagnose gestellt ist» als Verweissatz auf `index#beratung`. Spezialisierte Stellen: Verweissatz auf `behandlung#angebote`. Dazu «Bin ich auch betroffen?» als Unterkapitel: kein Selbstdiagnose-Werkzeug, eigene Beratung oder Therapie ist eine legitime Option, Verweissatz auf `selbstfuersorge#warnsignale` |
| 05 | Begleiterkrankungen (`begleiterkrankungen`) | Was Komorbidität heisst (Fachwort einmal erklärt). Die sechs Beispiele als Liste mit dem Satz, dass die Reihenfolge keine Rangfolge ist. «Mehrere Diagnosen heissen mehr Komplexität, nicht mehr Schuld. Sie müssen nicht sortieren, was was ist.» Der Unterschied zur Differenzialdiagnostik in zwei Sätzen. Unterkapitel «Depression» (Sie müssen kurze Stimmungswechsel und eine depressive Episode nicht selbst unterscheiden. Beobachtungen benennen, Sorge nicht verharmlosen). Unterkapitel «Wenn Suizidgedanken dazukommen» mit NICE-Gruppenbefund und professioneller Einschätzung, danach der **Verweis im Text** und ein Verweissatz auf `krise#suizid`. Was das für die Behandlung heisst: Verweissatz auf `behandlung#therapieformen`. Eigene Belastung in depressiven Phasen: Verweissatz auf `selbstfuersorge#unterstuetzung`. Vertiefungen: «Mögliche Hinweise auf eine depressive Phase» (Liste des Bestands) und «Weitere Begleiterkrankungen kurz» (Angst, PTBS, Substanzgebrauch, Essstörungen, ADHS, je ein bis zwei Sätze) |
| – | Quellen zu dieser Seite (`quellen`) | wie auf den anderen Seiten |

**Textdarstellung «Der Weg zur Abklärung» (Abschnitt 01).** Grundlage ist die alte Infografik «Den Weg zur Abklärung begleiten» mit ihrer Textversion.

- **Form:** nummerierte Liste wie «Die sechs Stufen» auf `kommunizieren` (`ol.bl-stufen`, mit «Schritt n» statt «Stufe n»). Kein `figure`, keine Abbildungsnummer.
- **Je Schritt:** Name, was geschieht (ein bis zwei Sätze), und wo der Bestand es sagt, eine abgesetzte Zeile «Ihre Rolle».

| Schritt | Name | Was geschieht (Bestand) | Ihre Rolle (Bestand) |
| --- | --- | --- | --- |
| 1 | Erste Anlaufstelle | Hausarztpraxis, psychiatrische oder psychotherapeutische Praxis, Ambulatorium. Die Hausarztpraxis kann Beschwerden einordnen, andere Ursachen mitprüfen und überweisen. | «Den ersten Kontakt dürfen Sie anregen oder begleiten. Anbieten ja, erzwingen nein.» |
| 2 | Fachliche Abklärung | Qualifizierte Fachpersonen klären ab, je nach Versorgungsweg in Praxis, Ambulatorium oder Klinik. Gespräche über Lebensgeschichte, Beschwerden und Beziehungen, oft ein strukturiertes Interview. Auch andere Erkrankungen mit ähnlichen Mustern werden geprüft: «normaler Teil sorgfältiger Diagnostik und keine Verzögerungstaktik». | – |
| 3 | Mehrere Gespräche | Ein Muster über die Zeit, nicht ein einzelner Moment. Wie viele Termine nötig sind, hängt von Fragestellung, Verlauf und Setting ab. | «Geduld ist hier kein Nichtstun.» |
| 4 | Rückmeldung und Einordnung | Die Fachperson erklärt ihre Einordnung im Gespräch, mit Unsicherheiten, Bedeutung und möglichen nächsten Schritten. | Ob Sie einbezogen werden, hängt vom Einverständnis der betroffenen Person ab. Das kann schwer sein. |
| 5 | Behandlungsplanung | Ein Behandlungsplan entsteht, oft mit einer störungsspezifischen Psychotherapie wie DBT. | «Fragen Sie, wie Sie unterstützen können.» Danach ein Verweissatz auf `behandlung#rollen` |

- Unter der Liste steht «Eine Diagnose ist ein Anfang, kein Etikett.»
- **Unterkapitel «Bei Jugendlichen»** (sichtbar, kurz):
  - Abklärung und Behandlung sind auch vor dem 18. Geburtstag möglich. Jugendliche müssen nicht warten, bis sie erwachsen sind oder eine bestimmte Diagnose feststeht. Eine Momentaufnahme reicht für die Einordnung nicht.
  - Wie Eltern einbezogen werden, hängt unter anderem von Alter, Urteilsfähigkeit, Einwilligung, Behandlungsrahmen und Schutzbedarf ab. Auch urteilsfähige Minderjährige haben ein Recht auf Vertraulichkeit. Konkrete Fragen klären Sie mit der zuständigen Fachperson.
  - Verweissätze: HYPE Züri auf `behandlung#angebote`, die Gruppe für Eltern auf `unterstuetzung#austausch`.
- **Vertiefung «Wie die Diagnose beschrieben wird»:** DSM-5-TR (neun Kriterien, mindestens fünf als anhaltendes Muster), ICD-11 (zuerst Schweregrad, dann Borderline-Muster 6D11.5), Schweizer Kodierkontext ICD-10-GM mit F60.31, strukturierte Interviews (SCID-5-PD, IPDE). Wortlaut des Bestands halten.
- **`visualPlan`** `v-di-abklaerung`: Format `text`, `reason` «Entscheid der Fachstelle 11.10.2026: Textdarstellung als nummerierte Schritte statt Abbildung (UMBAUPLAN: `process`)».

## 4. Seite `behandlung` · «Behandlung und Ihre Rolle darin»

**Bestand:** `unterstuetzen--therapie.md`, die vorgemerkte Zeile `beziehungen.md` Nr. 208 und aus `verstehen--diagnostik.md` die Angebote, die Kosten und «Kein Therapieplatz oder lange Wartezeit».

**Gliederung (Vorschlag).** Abweichungen begründest du in der Selbstprüfung.

| Nr. | Abschnitt (`id`) | Inhalt aus dem Bestand |
| --- | --- | --- |
| Kopf | Behandlung und Ihre Rolle darin | Einleitung «Professionelle Behandlung kann ein wichtiger Teil eines individuellen Genesungswegs sein. …» und «Behandlung kann Veränderung unterstützen.» (vorgemerkt) |
| 01 | Wer was beitragen kann (`rollen`) | **Textdarstellung**, siehe unten. Danach die drei Kernsätze («Behandlung liegt bei der betroffenen Person und den Fachpersonen.» usw.), hervorgehoben «Sie müssen eine Therapie weder zum Funktionieren bringen noch ihren Rahmen mittragen. …» und ein Verweissatz auf `rolle#anbieten` |
| 02 | Kontakt zum Behandlungsteam (`kontakt`) | «Mit dem Behandlungssystem zusammenarbeiten»: die drei Informationswege (Beobachtungen mitteilen, vertrauliche Auskünfte erhalten, eigene Beratung nutzen) als Begriffsliste. Die Handlungsanleitung bei akuter Gefahr, danach der **Verweis im Text**. «Die eigene Rolle und Ansprechwege klären» mit den vier Fragen sichtbar. Vertiefungen: die Situationen des Bestands («Ich werde nicht zu Sitzungen eingeladen», «Ich möchte über meine eigene Belastung sprechen», «Ich mache mir Sorgen um den Verlauf», «Was kann ich in einem vereinbarten Kontakt mitteilen?», «Nach einer Krise: Zuständigkeiten klären») und «Musterbrief für einen ersten Kontakt». Bei «Nach einer Krise» bleibt nur, was `krise#danach` nicht sagt (Entlassung heisst nicht automatisch Betreuung durch Angehörige, kein allgemeiner Anspruch auf den Austrittsbericht), mit Verweissatz auf `krise#danach` |
| 03 | Therapieformen (`therapieformen`) | DBT, MBT, Schematherapie, TFP und strukturierte generalistische Behandlung als Begriffsliste, je ein Satz. Die drei Settings (ambulant, teilstationär, stationär). Die Einordnung der Forschung («Mehrere strukturierte Psychotherapien können … helfen …», keine für alle beste Methode). Unterkapitel «Begleiterkrankungen und Medikamente» (Abschnitt 4 b). Vertiefung «Programme für Angehörige» mit Family Connections und der Einordnung der Studien 2024 |
| 04 | Unterbrüche und Rückschläge (`rueckschlaege`) | «Rückschläge und Unterbrüche», «Ich habe den Eindruck, dass Therapie gerade schwierig ist» (Ambivalenz nicht vorschnell persönlich nehmen), «Therapie als Möglichkeit ansprechen, nicht als Drohkulisse» aus «Welche Angebote möglich sein können», die offenen Fragen («Was war hilfreich? …»), Dolmetschung (Kinder dolmetschen nicht). Verweissatz auf `genesung#verlauf` |
| 05 | Angebote im Kanton Zürich (`angebote`) | **Angebotsliste** für Abklärung und Therapie (Abschnitt 5) |
| 06 | Kein Therapieplatz oder lange Wartezeit (`wartezeit`) | Die vier Schritte (Anmeldung, Kosten mit BAG-Link, Wartezeit, Verschlechterung). Bei Schritt 4 die Handlungsanleitung bei akuter Gefahr, danach der **Verweis im Text**. «In anderen Kantonen» als Verweissatz auf `unterstuetzung#kantone`, «Eigene Unterstützung» als Verweissatz auf `unterstuetzung#beratung` |
| – | Quellen zu dieser Seite (`quellen`) | wie auf den anderen Seiten |

**a) Textdarstellung «Wer was beitragen kann» (Abschnitt 01).** Grundlage ist die alte Klick-Grafik «Rollen im Therapiesystem». Alles steht sichtbar, ohne Auswahl-Schaltflächen.

- **Form:** drei Spalten nebeneinander ab Tablet-Breite, schmal untereinander. Reihenfolge: betroffene Person, Fachpersonen, Angehörige. Profil-Klassen, wo es passende gibt, sonst eine `bl-`-Klasse in `borderline.css` ohne Hexwerte. Kein `figure`.
- **Je Rolle:** Name, «Kann beitragen» und «Nicht zu erwarten» als zwei kurze Listen.
- **Davor** der Satz «Was passt, hängt von Wünschen, Einwilligung, Situation und verfügbaren Kräften ab.»
- **Inhalt** aus den drei Auswahlen des Bestands («Ihre Rolle», «Therapie», «Person»). Bei «Angehörige» › «Nicht zu erwarten» kommen die Punkte aus «Was Ihre Rolle ausdrücklich nicht ist» dazu, ohne Doppelung mit «Fortschritt kontrollieren».
- **Grundlage** (Linehan 1993, Gunderson und Hoffman 2005, S3-Leitlinie 2022) in den Quellenblock.
- **`visualPlan`** `v-be-rollen`: Format `text`, `reason` «Entscheid der Fachstelle 11.10.2026: drei Rollen nebeneinander als Text statt Abbildung (UMBAUPLAN: `relationship-map`)».

**b) Begleiterkrankungen und Medikamente** (`behandlung` › `therapieformen`, Bestand `verstehen--begleiterkrankungen.md`, «Was bedeutet das für die Behandlung?»):

- Begleiterkrankungen werden in der Regel mitbehandelt. Die Behandlung kann integriert, parallel oder schrittweise geplant werden. Eine starre Reihenfolge gilt nicht.
- Akute Gefährdungen brauchen sofortige Aufmerksamkeit (Beispiele des Bestands).
- Medikamente, Wortlaut des Bestands halten: «Nach NICE sollen Medikamente nicht gezielt zur Behandlung von Borderline selbst oder ihrer einzelnen Kernsymptome eingesetzt werden. Bei einer zusätzlichen Depression kann eine Kombination aus einem Antidepressivum und psychologischer Behandlung erwogen werden.» Danach derselbe Satz wie auf `genesung`: «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.»

## 5. Angebotsliste (`behandlung` › `angebote`)

- **Einleitung:**
  - Die Liste ist nicht abschliessend. Auch niedergelassene Psychiaterinnen und Psychiater oder psychologische Psychotherapeutinnen und -therapeuten mit Borderline-Erfahrung kommen infrage. Die Hausarztpraxis kann ein erster Schritt sein.
  - Kosten: «Ob und unter welchen Voraussetzungen die Grundversicherung Kosten übernimmt, hängt von Leistung, Zuweisung und Versicherungsmodell ab. Klären Sie die Kostenübernahme vorab.»
  - Aktuelle Bedingungen und Anmeldung stehen auf der Website des Angebots.
- **Je Angebot:** Name, ein Satz aus dem Bestand, für wen, Link auf die Website. Keine Nummern, keine E-Mail.

| Angebot | Satz (Bestand) | Link (aufgerufen 11.10.2026) | Hinweis für die Selbstprüfung |
| --- | --- | --- | --- |
| HYPE Züri, Kinder- und Jugendpsychiatrie der PUK | «Frühinterventionsangebot für Jugendliche ab 13 Jahren mit Verdacht, Risiko oder bereits diagnostizierter Borderline-Persönlichkeitsstörung.» | https://www.pukzh.ch/unsere-angebote/kinder-und-jugendpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/ | Die Website nennt kein Mindestalter. «ab 13 Jahren» in die Liste für die Fachstelle |
| PUK Zürich, Erwachsene | «Spezialisierte DBT-orientierte Behandlungsangebote für Erwachsene.» | https://www.pukzh.ch/unsere-angebote/erwachsenenpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/ | Neuer Link statt Telefon und Stations-E-Mail. Die Seite nennt ambulante, tagesklinische und stationäre Behandlung und eine Station für DBT (18 bis 65 Jahre) |
| ipw, Psychotherapiestation für junge Erwachsene | «Klären Sie die aktuellen Alters- und Aufnahmebedingungen direkt mit dem Anbieter.» | https://ipw.ch/angebot/kinder-jugendliche-junge-erwachsene/psychotherapiestation-fuer-junge-erwachsene | Die Seite nennt 17 bis 25 Jahre, Borderline und DBT nennt sie nicht |
| Sanatorium Kilchberg | «Privatklinik für Psychiatrie und Psychotherapie am Zürichsee.» | https://www.sanatorium-kilchberg.ch | Nur im Bestand von `diagnostik`. Die Website nennt kein Angebot für Borderline. Behalten? In die Liste für die Fachstelle |
| Clienia Schlössli, Oetwil am See | «Spezialisierte DBT-Station für Borderline-Persönlichkeitsstörung.» (`diagnostik`), «Weiterführendes stationäres Emotionsregulationsprogramm.» (`therapie`) | https://www.clienia.ch/de/standorte/clienia-schloessli/stationen/a2/ | Ein Satz genügt. Die Seite nennt Erwachsene ab 18 und Aufnahme auf ärztliche oder psychotherapeutische Zuweisung |
| DBT-Therapeutensuche, Dachverband DBT | «Suchweg für zertifizierte DBT-Therapeutinnen und -Therapeuten.» | https://www.dachverband-dbt.de/dbt-therapieangebote | Deutscher Dachverband, Karte mit Filter nach Land. Ob Schweizer Einträge enthalten sind, ist nicht belegt |

## 6. Korrekturen an `genesung` und `unterstuetzung` (aus 2c-1)

- **`genesung` › `einfluesse`, Frage Nr. 2:** «Änderungen nur mit der behandelnden Fachperson.» wird zu «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.»
- **`genesung` › `einfluesse`, Begleiterkrankungen:** Nach «… braucht eine individuelle fachliche Abklärung.» folgt «Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen».» mit Link auf `diagnose.html#begleiterkrankungen`. Abgleich `genesung.md` Nr. 163 bekommt diesen Ort.
- **`unterstuetzung` › `austausch`, Gruppe für Eltern von Jugendlichen:** neuer Eintrag nach VASK Zürich.
  - Bestand (`verstehen--diagnostik.md`, «Für Eltern jugendlicher Betroffener»): «Für Eltern jugendlicher Betroffener gibt es an der PUK Zürich die Gruppe «Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung». Sie bietet Austausch, Psychoedukation und Beratung für Eltern, die mit der Diagnose und ihren Folgen umgehen lernen.»
  - Dazu «Teilnahmebedingungen und Anmeldung stehen auf der Website.» und der Link https://www.pukzh.ch/unsere-angebote/kinder-und-jugendpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/ (die Seite nennt die Gruppe «Gruppentherapie für Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung», fünf Module).
  - Abgleich: Zeile in `diagnose.md` mit Ort `unterstuetzung#austausch`.
- **Sonst** bleiben `genesung` und `unterstuetzung` wie gebaut. Die Selbstprüfung zeigt die Änderungen mit `git diff --word-diff`.

## 7. `site.config.json`

`diagnose` und `behandlung` bekommen:

- `status` «published», `primaryTask` und `description`
- passende `sensitiveTopics` (so, dass `safety-contract` nicht blockiert)
- einen `visualPlan` mit einer Zeile pro Abschnitt, auch für den Quellenblock. Alle Zeilen haben das Format `text`.
- `navLabel` bleibt `null`. Die Platzhalter-Zeilen `v-diagnose-geplant` und `v-behandlung-geplant` entfallen.

## 8. Zur Prüfung durch die Fachstelle

In der Selbstprüfung als Tabelle mit Bestandszitat, wie in 2c-1:

- **`diagnose`:**
  - die Klassifikation (DSM-5-TR, ICD-11, ICD-10-GM, F60.31)
  - Jugendliche: Einbezug der Eltern und Vertraulichkeit urteilsfähiger Minderjähriger
  - Schritt 4: Einbezug nur mit Einverständnis
  - der NICE-Gruppenbefund zu Depression und Suizidversuchen
  - jede Handlungsanleitung bei akuter Gefahr im neuen Wortlaut
- **`behandlung`:**
  - die drei Informationswege, besonders «Vertraulichkeit Ihrer Mitteilung gegenüber der betroffenen Person kann nicht pauschal zugesichert werden.»
  - Medikamente nach NICE
  - Family Connections und die Einordnung der Studien 2024
  - Kosten: ärztliche Anordnung und wer sie ausstellen darf (BAG)
  - zweite Einschätzung: «eine pauschale Wartefrist von einem Jahr gibt es dafür nicht»
  - der Musterbrief
  - die Angebotsliste: Auswahl, Sätze und Links (Hinweise aus Abschnitt 5)
- **`unterstuetzung`:** der Eintrag zur Gruppe für Eltern

## 9. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: erwartet 1 × `visual-approval` («Ein neuer Trieb»), 3 × `placeholder-approval` (`fragen`, `quellen`, `ueber`), 1 × `review-report`. Weicht das ab, nenne den Grund.
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Bildschirmfotos:** beide Textdarstellungen und jede Vertiefung bei 1280 und 360 px und im Theme «kontrast», ansehen.
- **Prüfung der neuen Seiten:**
  - kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom
  - Tastatur und Fokus
  - Druckansicht (keine Zwischentitel allein am Seitenende)
  - Kontraste
  - `bedienung.mjs`
  - Sprung über die Kapitelübersicht zum letzten Abschnitt
  - alle externen Links: Ziel ist die offizielle Website
- **Selbstprüfung** in `PRUEFBERICHT.md`, nur im Abschnitt «Selbstprüfung der bauenden Sitzung». Setze einen Block «Etappe 2c-2» über den obersten Block. Er enthält:
  - Stand je Abschnitt dieses Auftrags, mit Beleg
  - Wörter im Lesefluss je Seite und Abschnitt (Zählweise C1)
  - jeden Verweis im Text mit der Handlungsanleitung davor
  - die vollständige Liste «Neue Sätze zur Freigabe»
  - die Liste «Zur Prüfung durch die Fachstelle» (Abschnitt 8)
  - Vorschläge für Verweise von freigegebenen Seiten auf `diagnose` und `behandlung` (z. B. `verstehen` › `borderline`, `rolle` › `anbieten`, `krise` › `danach`), ohne diese Seiten zu ändern
- **Keine Änderung am Wortlaut** der freigegebenen Seiten. Beleg mit `git diff --word-diff`.
- Der Pull Request bleibt Entwurf.
