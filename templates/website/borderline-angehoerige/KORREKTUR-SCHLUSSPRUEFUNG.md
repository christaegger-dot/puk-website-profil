# Korrekturauftrag · Borderline-Website · nach der Schlussprüfung (SP-K)

Stand 12.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf `main`, nach dem Merge der Entscheide (`ENTSCHEIDE-SCHLUSSPRUEFUNG.md`). Für eine **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Schlussprüfung:** zwei unabhängige Prüfungen und ihre Zusammenführung in `PRUEFBERICHT.md`, Block «Schlussprüfung · Zusammenführung der beiden Prüfsitzungen». Darin stehen 60 Befunde (SPZ-1 bis -60, 6 wichtig) und 39 Fragen (SPZ-F-1 bis -39).
- **Entscheide:** `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`, von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026). Dieser Auftrag setzt die Abschnitte 3 und 6 der Entscheide um. Was dort begründet ist, wird hier nicht wiederholt.
- **Wer korrigiert:** eine bauende Sitzung. Ausgeschlossen sind die Sitzungen der Schlussprüfung, der Zusammenführung und der Entscheide.
- **Übersicht:**

  | Thema | Befund oder Frage | Abschnitt |
  | --- | --- | --- |
  | Fusszeile, Status | SPZ-1, SPZ-F-2 | 3 |
  | Eisberg, Schleife, Zwei Sichten bei grosser Schrift | SPZ-2, SPZ-3, SPZ-38, SPZ-40 (Teil) | 4 |
  | Fachliche Sätze | SPZ-4, SPZ-5, SPZ-F-6, -8, -9, -10, -21, -27 | 5 |
  | Quellen | SPZ-F-18, SPZ-16 | 6 |
  | Sprache, Meta, 404 | SPZ-19, -20, -22, -26, -33, -36, -37 | 7 |
  | Weiterleitungen | SPZ-F-39, SPZ-54 | 8 |
  | Plan, Werkzeug, UMBAUPLAN | SPZ-F-3, -15, -22; SPZ-8, -9 | 9 |
  | Abgleich und Bericht | SPZ-4, -7, -11, -12, -60 | 10 |

- **Nicht Teil dieser Korrektur:**
  - SPZ-6: PR #659 ist schon wieder ein Entwurf (erledigt durch die Fachstelle).
  - Alles auf Profilebene (Entscheide 6.3) und alle bewusst nicht korrigierten Befunde (Entscheide 6.4).
  - Die rechtliche Prüfung (SPZ-F-13, -14): Cookie-Satz und Urheberrecht bleiben, wie sie sind.
  - Die Handlungen der Fachstelle (Netlify, reale Tests) und die Fassung der Fusszeile «bei der Veröffentlichung».
  - Die Freigabe der neuen Sätze und der geänderten Abbildungen. Sie folgt nach der Nachprüfung.
- **Geändert werden nur:** die in den Abschnitten 3 bis 10 genannten Stellen in `content/`, `site.config.json`, `borderline.css`, `_redirects`, `UMBAUPLAN.md`, `abgleich/kennzahlen.mjs`, `abgleich/*.md` und im Prüfbericht die Selbstprüfung. Die gebauten Seiten entstehen mit `node tools/build.mjs`.

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen. Keine eigenen Formulierungen, nichts weglassen.
- **Ein Satz steht an mehreren Stellen** (Text, `p.puk-sr`, `statement` im Plan, Liste der neuen Sätze): Er wird überall gleich geändert.
- **Keine weiteren Änderungen.** Was dieser Auftrag nicht nennt, bleibt. Fällt dir etwas auf, nennst du es in der Selbstprüfung unter «Aufgefallen, nicht geändert».
- **Leitlinien, Tokens, Komponenten, Starter-Werkzeuge** (`tools/`, `components/`, `guidelines/`) bleiben unverändert (CLAUDE.md).
- **Verweis im Text** und Zuständigkeit: Dieser Auftrag setzt keinen neuen Verweis im Text. Keine Telefonnummer, kein `tel:`.
- **Abbildungen:** Zeichnung, SVG-Pfade und Beschriftungen bleiben, ausser wo Abschnitt 5 einen Satz ändert. Berührt eine Änderung in Abschnitt 4 trotzdem eine Zeichnung oder einen Wortlaut: anhalten und in der Selbstprüfung melden.
- **Abgleich:** Jede geänderte Zeile bekommt einen Status mit dem Kürzel «SP-K»:
  - «übernommen (SP-K)»
  - «umformuliert (SP-K)»
  - «entfällt (SP-K)»
  - «neu (SP-K)»

  Die Bemerkung nennt die Nummer aus diesem Auftrag und den Befund oder die Frage, z. B. «SP-K 5.1, SPZ-F-4». Die alte Bemerkung bleibt dahinter stehen («bis SP-K: …»).

## 3. Fusszeile und Status (SPZ-1, SPZ-F-2)

| Ort | heute | neu |
| --- | --- | --- |
| `site.config.json` › `editorialStatus` (Z. 19) | «Entwurf – fachliche Prüfung ausstehend» | «Entwurf – fachlich freigegeben, Prüfung vor der Veröffentlichung offen» |
| `site.config.json` › `shortDescription` (Z. 7) | «Psychoedukative Website der Fachstelle Angehörigenarbeit PUK für Angehörige von Menschen mit Borderline. Entwurf, fachliche Prüfung ausstehend.» | «Psychoedukative Website der Fachstelle Angehörigenarbeit PUK für Angehörige von Menschen mit Borderline. Entwurf, Prüfung vor der Veröffentlichung offen.» |

- Die Fassung «bei der Veröffentlichung» setzt **nicht** diese Korrektur, sondern der Export nach R3 «Go» (Entscheide 5.4, Schritt 1).
- **Prüfen:** Nach dem Build steht der neue Status auf allen 17 gebauten Seiten (`grep -c "Prüfung vor der Veröffentlichung offen" *.html`), «fachliche Prüfung ausstehend» auf keiner.

## 4. Figuren bei grosser Schrift (SPZ-2, SPZ-3, SPZ-38, SPZ-40 Teil)

**Leitregel:** «Figuren mit frei platzierten Beschriftungen wechseln bei grosser Schrift in die Listenansicht» (Profilentscheid 11.10.2026, `guidelines/00-technische-qualitaet.md` Z. 23). Die Schwellen stehen in rem, damit die Browser-Einstellung «Schriftgrösse» wirkt (`guidelines/07-visualisierung-umsetzen.md` Z. 74). Bei Standardschrift (16 px) bleibt jede Schwelle gleich.

In `borderline.css`:

| Nr. | Figur | Stelle | heute | neu |
| --- | --- | --- | --- | --- |
| 4.1 | Eisberg (`v-vs-eisberg`) | Z. 119 | `@container (max-width:800px)` | `@container (max-width:50rem)` |
| 4.2 | Eisberg | `.bl-eis` (Z. 106) | `max-width:760px` | `max-width:47.5rem` |
| 4.3 | Bedeutungsschleife (`v-bz-schleife`) | Z. 26 | `@container (max-width:700px)` | `@container (max-width:43.75rem)` |
| 4.4 | Bedeutungsschleife | `.puk-vis-cycle.bl-cycle--5` (Z. 19) | `max-width:640px` | `max-width:40rem` |
| 4.5 | Zwei Sichten (`v-bz-sichten`) | Z. 86 | `@container (max-width:560px)` | `@container (max-width:35rem)` |
| 4.6 | Eisberg, Schleife, Zwei Sichten | Wörter und Stationen (`.bl-eis__w`, `.bl-cycle--5 li`, `.bl-sicht .puk-vis-compare__col`) | ohne Silbentrennung | `hyphens:auto` (die Seiten tragen `lang="de-CH"`); nicht für Fliesstext (`guidelines/00-technische-qualitaet.md` Z. 58) |

- Die Kommentare über den Regeln nennen die Schwellen in px; nachführen («50 rem = 800 px bei Standardschrift …»), mit Verweis auf SP-K 4.
- **Reicht eine Schwelle nicht:** Überlappt bei den Messungen unten trotzdem etwas, die Schwelle in rem erhöhen, bis es nicht mehr überlappt. Messung und Wert in der Selbstprüfung nennen.
- **Prüfen** (Bildschirmfotos, Schrift über die Browser-Einstellung, z. B. CDP `Page.setFontSizes`):

  | Figur | Breiten | Schrift | Erwartung |
  | --- | --- | --- | --- |
  | Eisberg | 360, 1024, 1280, 1440 px | 16, 24, 32 px | kein Wort über einem anderen, keins über der Wasserlinie verschoben; bei grosser Schrift Listenansicht mit beiden Gruppen und der Frage |
  | Schleife | 360, 768, 1280 px | 16, 20, 24, 32 px | keine Station über einer anderen, kein Text abgeschnitten; bei grosser Schrift die gestufte Liste mit «Leserichtung: von oben nach unten» |
  | Zwei Sichten | 360, 768, 1280 px | 16, 32 px | keine Spalte schmaler als ein langes Wort; kein Bruch mitten im Wort ohne Trennstrich |

  Alles im Standard und im Theme «kontrast». Bei 16 px Schrift sehen die drei Figuren aus wie vorher (Foto vorher/nachher bei 1280 und 360 px).

## 5. Fachliche Sätze

Freigegeben im Auftrag der Fachstelle, unter Vorbehalt der Nachprüfung (Entscheide, Abschnitt 4). Neu oder geändert heisst: in die Liste «Neue Sätze zur Freigabe».

### 5.1 `diagnose` › `begleiterkrankungen` (SPZ-4, SPZ-F-4)

- **Ort:** direkt nach der Liste der sechs Begleiterkrankungen, vor «Erkrankungen können gemeinsame Risikofaktoren haben …», als eigener Absatz.
- **Neu:** «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren. Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.»
- **Quelle:** Bestand `verstehen.md` Z. 271, wörtlich.
- **Abgleich:** Abschnitt 10.1.

### 5.2 `kommunizieren` › `beispiele`, «Eine Bitte um Geld» (SPZ-5, SPZ-F-5)

- **Heute:** «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».»
- **Neu:** «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen». Sie sind es nicht.»
- **Quelle:** Bestand `grenzen.md` Z. 378, zweiter Satz wörtlich.
- **Abgleich:** `abgleich/grenzen.md` neue Zeile für «Sie sind es nicht.» (Bestand `/grenzen` › Finanzielle Grenzen), «übernommen (SP-K)», Fundstelle `kommunizieren#beispiele`; Bemerkung von Nr. 214 um «Folgesatz: siehe Zeile «Sie sind es nicht.» (SP-K 5.2)» ergänzen.

### 5.3 `verstehen` › `mythen`, «Menschen mit Borderline manipulieren bewusst.» (SPZ-7, SPZ-F-6)

- **Ort:** am Ende der Antwort, nach «Bleiben Sie bei der Wirkung, Ihrer Sicherheit und Ihrer Grenze.»
- **Neu:** «Wie Sie in solchen Momenten eine Grenze klar sagen können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen».»
- **Link:** `kommunizieren.html#kippen` auf «Wenn Gespräche kippen», wie bei den anderen Verweissätzen dieses Abschnitts (`puk-link--inline`).
- **Abgleich:** `abgleich/verstehen.md` Nr. 116 → «umformuliert (SP-K)», neue Fassung wie oben, Fundstelle `verstehen#mythen`, Bemerkung «SP-K 5.3, SPZ-F-6; bis SP-K: Verweis (folgt mit Etappe 2)».

### 5.4 `verstehen` › `anspannung`, Abbildung 2, Stelle 3 (SPZ-15, SPZ-F-8)

- **Heute** («Was hilft»): «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize helfen.»
- **Neu:** «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize können helfen.»
- **Auch dort ändern,** wo der Satz sonst steht: `statement` von `v-vs-anspannung` und `p.puk-sr`, falls er dort steht (`grep -n "weniger Reize helfen"`).
- **Abgleich:** `abgleich/verstehen.md` Nr. 240: Bemerkung «Absicherung «können helfen» zurück (SP-K 5.4, SPZ-F-8)». Nr. 194 und 288 nennen den Verlust nicht; je Bemerkung «Absicherung siehe Nr. 240 (SP-K)».
- **Abbildung:** braucht danach eine neue Freigabe; `approvalStatus` bleibt «freigegeben» bis zum Entscheid nach der Nachprüfung, `reason` bekommt den Satz «SP-K 5.4: «helfen» → «können helfen» (SPZ-F-8); neue Freigabe nach der Nachprüfung ausstehend.»

### 5.5 `beziehungen` › `schleife`, Abbildung 1, Kurztext (SPZ-11, SPZ-F-9)

- **Heute:** «Was die eine Person tut, kann für die andere zum Anlass werden. Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will. Angehörige setzen bei ihrer eigenen Reaktion an.»
- **Neu:** «Was die eine Person tut, kann für die andere zum Anlass werden. Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will. Daraus ergibt sich keine feste Abfolge, und die Diagnose einer Person erklärt den Verlauf nicht allein. Angehörige setzen bei ihrer eigenen Reaktion an.»
- **Quelle:** Bestand `verstehen.md` Z. 135, wörtlich.
- Zeichnung, Stationen, Leserichtung und Ansatzpunkt bleiben.
- **Abgleich:** `abgleich/verstehen.md` Nr. 91 → «übernommen (SP-K)», Fundstelle `beziehungen#schleife`, Bemerkung «SP-K 5.5, SPZ-F-9; bis SP-K: umformuliert (1e)».
- **Abbildung:** `reason` von `v-bz-schleife` bekommt «SP-K 5.5: Bestandssatz «keine feste Abfolge …» im Kurztext (SPZ-F-9); neue Freigabe nach der Nachprüfung ausstehend.»

### 5.6 `selbstfuersorge` › `eigenes-leben`, Vertiefung «Eltern» (SPZ-F-10)

- **Heute:** «Eigene Fehler lassen sich ernst nehmen, ohne für alles verantwortlich zu sein.»
- **Neu:** «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.»
- **Quelle:** freigegebener Satz `rolle` › `schuld` (P2a-F-1).
- **Prüfen:** Kein anderer Satz auf `selbstfuersorge` legt eine Teilverantwortung für Erkrankung, Behandlung oder Genesung nahe (Suche nach «verantwort», «allein», «tragen»; Fundstellen in der Selbstprüfung).
- **Abgleich:** `abgleich/selbstfuersorge.md` Nr. 276 → «umformuliert (SP-K)», neue Fassung, Bemerkung «SP-K 5.6, SPZ-F-10: Wortlaut von `rolle` › `schuld`».

### 5.7 `diagnose` › `abklaerung`, Vertiefung «Wie die Diagnose beschrieben wird» (SPZ-F-21)

- **Bedingung zuerst:** Schlage in der amtlichen Systematik der ICD-10-GM Version 2024 (BfArM) die Bezeichnung zu F60.31 nach. Nenne Fundstelle und Wortlaut in der Selbstprüfung. Lautet sie nicht «Emotional instabile Persönlichkeitsstörung», Untergruppe «Borderline-Typ», setzt du nichts ein und meldest es.
- **Ort:** direkt nach «Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen.»
- **Neu:** «Die Bezeichnung dazu lautet «emotional instabile Persönlichkeitsstörung, Borderline-Typ».»
- **Quelle auf `quellen`:** neuer Eintrag im Abschnitt mit dem Eintrag «Bundesamt für Statistik (2026)», alphabetisch:
  - Angabe: «Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM) (2023). ICD-10-GM Version 2024, Systematisches Verzeichnis.» Ort und Link nach der Fundstelle, die du nachgeschlagen hast; Link nur, wenn er sich aufrufen lässt, sonst ohne.
  - Einordnung: «Amtliche deutsche Fassung der ICD-10. Die Website nennt daraus die Bezeichnung zum Code F60.31.»
  - «Verwendet auf: «Diagnose und Begleiterkrankungen»»
- **Quellenblock `diagnose`:** neue Zeile «BfArM, ICD-10-GM 2024» mit «Verwendet in: «Der Weg zur Abklärung» (Bezeichnung zu F60.31)».
- Danach `node abgleich/verwendet-auf.mjs` (beide Modi) ohne Abweichung.

### 5.8 `beziehungen` › `was-hilft`, erster Punkt (SPZ-F-27)

- **Heute:** «bei der Bedeutung: eine Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)»
- **Neu:** «bei der Bedeutung: eine eigene Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)»
- **Abgleich:** `abgleich/beziehungen.md` Nr. 172: Bemerkung «SP-K 5.8, SPZ-F-27: «eigene» ergänzt».

## 6. Quellen

### 6.1 Quellenblock `verstehen` (SPZ-23, SPZ-F-18)

Im Block «Quellen zu dieser Seite» kommen sechs Einträge dazu, alphabetisch eingeordnet, im Format der bestehenden Einträge:

| Quelle | Verwendet in |
| --- | --- |
| Baranger et al. (2020) | «Wenn die Anspannung steigt» (Abbildung 2) |
| Degasperi et al. (2021) | «Wenn die Anspannung steigt» (Abbildung 2) |
| Hoffman et al. (2005) | «Wenn Bewertungen einseitiger werden» (Abbildung 3) |
| Linehan (2015) | «Wenn die Anspannung steigt» (Abbildung 2) |
| Santangelo et al. (2014) | «Wenn die Anspannung steigt» (Abbildung 2) |
| Shields et al. (2016) | «Wenn die Anspannung steigt» (Abbildung 2) |

- Steht eine Quelle schon im Block (z. B. Linehan (1993)), bleibt ihr Eintrag; Linehan (2015) ist ein eigener Eintrag.
- Die Bildlegenden bleiben unverändert.
- **Prüfen:** `node abgleich/verwendet-auf.mjs --ohne-legenden`: «0 mit anderer Angabe». «Verwendet auf» auf `quellen` stimmt danach mit beiden Modi überein; wo das Werkzeug eine Änderung an «Verwendet auf» meldet, nachführen.

### 6.2 Guillén et al. (2024) auf `quellen` (SPZ-16)

- **Heute:** «Family Connections» in Guillemets.
- **Neu:** “Family Connections” mit den englischen Anführungszeichen des Originaltitels. Der Titel steht in `lang="en"`.

## 7. Sprache, Meta, 404

### 7.1 Meta-Beschreibungen (SPZ-19, SPZ-20), `site.config.json` › `pages[].description`

| Seite | heute | neu |
| --- | --- | --- |
| `index` | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen zu Verstehen, Beziehungen und Grenzen sowie die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen zu Verstehen, Beziehungen, Gesprächen, Grenzen, der eigenen Rolle, Selbstfürsorge, Genesung und Unterstützung sowie die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» |
| `fragen` | «…, je mit Verweis auf die ausführliche Seite.» | «…, meist mit Verweis auf die ausführliche Seite.» |
| `impressum-datenschutz` | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, keine Dienste anderer Anbieter beim Lesen.» | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, beim Lesen keine Daten an andere Anbieter als den Dienst, der die Website ausliefert.» |

### 7.2 `404` (SPZ-14, SPZ-22)

| Ort | heute | neu |
| --- | --- | --- |
| `content/404.html`, Text | «Von der Übersicht aus finden Sie alle Seiten.» | «Von der Startseite aus finden Sie alle Seiten.» |
| `content/404.html`, Link | «Zur Übersicht» | «Zur Startseite» |
| `site.config.json` › `404` › `description` | «Diese Seite gibt es nicht. Von der Übersicht aus finden Sie alle Seiten.» | «Diese Seite gibt es nicht. Von der Startseite aus finden Sie alle Seiten.» |
| `site.config.json` › `404` › `primaryTask` und `visualPlan` › `goal` | «… zur Übersicht zurückfinden» | «… zur Startseite zurückfinden» |

- Die Dachzeile «Übersicht» auf `index` bleibt.
- Der ganze Text der `404` kommt in die Liste «Neue Sätze zur Freigabe», damit er mit der Nachprüfung freigegeben wird (SPZ-14).

### 7.3 Abkürzungen und Fachwörter (SPZ-26)

| Seite › Ort | heute | neu |
| --- | --- | --- |
| `behandlung` › `rollen`, Fachpersonen | «Skills anbieten und vermitteln, zum Beispiel in der DBT» | «Skills anbieten und vermitteln, zum Beispiel in der Dialektisch-Behavioralen Therapie (DBT)» |
| `behandlung` › `therapieformen` | «Nach NICE sollen Medikamente …» | «Nach der britischen Behandlungsleitlinie NICE sollen Medikamente …» (Rest des Satzes unverändert) |
| `unterstuetzung` › `buecher`, Aguirre | «Englischsprachiges Standardwerk zu BPS bei Jugendlichen.» · «… McLean-Hospital-Programm für Adoleszente.» | «Englischsprachiges Standardwerk zu Borderline bei Jugendlichen.» · «… McLean-Hospital-Programm für Jugendliche.» |
| `selbstfuersorge` › `warnsignale` | «Die fünf Bereiche sind eine eigene didaktische Ordnung.» | «Die Einteilung in fünf Bereiche hat die Fachstelle selbst gewählt.» |
| `kommunizieren` › `beispiele` | «Die Beispiele sind eigene didaktische Ableitungen aus den Ansätzen auf dieser Seite, kein auf Wirksamkeit geprüftes Übungsprogramm.» | «Die Beispiele hat die Fachstelle selbst aus den Ansätzen auf dieser Seite abgeleitet. Sie sind kein auf Wirksamkeit geprüftes Übungsprogramm.» |

- Die Wortlaute stammen aus den Vorschlägen von Prüfung 2 (SP2-S-5, -7, -19) und aus `diagnose` («Die britische Behandlungsleitlinie NICE …»). Die Ausschreibung von DBT steht so auf `selbstfuersorge` und `grenzen`.
- **Keine Änderung** bei «SET-UP», «Psychoedukation», «SCID-5-PD» und «IPDE»: Das Glossar erklärt sie nicht, eine Erklärung wäre eine neue Aussage (Entscheide 6.2, Regel zu SPZ-26). Bei SCID-5-PD und IPDE erklärt der Satz selbst, dass es Interviews sind. «didaktisch» in Quellenzeilen («Eigene didaktische Darstellung») bleibt.

### 7.4 Personenbezeichnungen (SPZ-33)

| Seite › Ort | heute | neu |
| --- | --- | --- |
| `unterstuetzung` › `buecher` | «Für: Partner, Familienmitglieder» | «Für: Partnerinnen und Partner, Familienmitglieder» |
| `unterstuetzung` › `buecher` | «Für: Partner, Familienmitglieder, enge Freunde» | «Für: Partnerinnen und Partner, Familienmitglieder, enge Freundinnen und Freunde» |
| `unterstuetzung` › `buecher` | «Für: Partner, Angehörige» | «Für: Partnerinnen und Partner, Angehörige» |
| `unterstuetzung` › `buecher` | «Für: Angehörige, Partner» | «Für: Angehörige, Partnerinnen und Partner» |
| `unterstuetzung` › `buecher` | «Kommunikationsratgeber speziell für Partner in einer Borderline-Beziehung.» | «Kommunikationsratgeber speziell für Partnerinnen und Partner in einer Borderline-Beziehung.» |
| `unterstuetzung` › `buecher` | «Für: Partner in Paarbeziehungen» | «Für: Partnerinnen und Partner in Paarbeziehungen» |
| `grenzen` › `gewalt` | «Halten Sie Vorfälle fest: Datum, Beschreibung, allfällige Zeugen.» | «Halten Sie Vorfälle fest: Datum, Beschreibung, allfällige Zeuginnen und Zeugen.» |

- Der Musterbrief auf `behandlung` › `kontakt` («Kurze Anfrage als Angehörige von [Vorname]») bleibt: Er ist eine Vorlage, die Schreibende anpassen.
- Weitere Stellen mit generischem Maskulinum nennst du in der Selbstprüfung, änderst sie aber nicht.

### 7.5 Grammatik (SPZ-36)

| Seite › Ort | heute | neu |
| --- | --- | --- |
| `grenzen`, Kopf | «Wie die andere Person reagiert, können sie aber nicht garantieren.» | «Wie die andere Person reagiert, können Grenzen aber nicht garantieren.» |
| `grenzen` › `konsequenz` | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen sie an.» | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen Sie die Grenze an.» |
| `krise`, Beispielsatz | «Mir ist noch beklemmend zumute. Ich bin trotzdem hier.» | «Mir ist noch beklommen zumute. Ich bin trotzdem hier.» |

Steht ein Satz auch in `site.config.json` (Kopf, `description`), dort gleich ändern.

### 7.6 Schreibweisen (SPZ-37)

| Seite › Ort | heute | neu |
| --- | --- | --- |
| `fragen` › `verlauf` | «… oder eine Posttraumatische Belastungsstörung (PTBS) …» | «… oder eine posttraumatische Belastungsstörung (PTBS) …» |
| `quellen` › `begriffe`, Vertiefung «Die neun Kriterien im DSM-5-TR» | «mindestens 5 der folgenden 9 Merkmale» | «mindestens fünf der folgenden neun Merkmale» |
| `quellen` › `leitlinien` | «Veröffentlicht am 29.06.2022» | «Veröffentlicht am 29. Juni 2022» |
| `quellen` › `diagnostik` | «Version 2.0 vom 14.11.2022» · «Gültigkeit bis 31.05.2026» | «Version 2.0 vom 14. November 2022» · «Gültigkeit bis 31. Mai 2026» |
| `unterstuetzung` › `buecher` | «Für: Jüngere Kinder ab 4 Jahren» · «Für: Alle, die verstehen wollen» · «Für: Alle Angehörigen, auch Betroffene selbst» · «Für: Erwachsene Kinder von Betroffenen» | «Für: jüngere Kinder ab 4 Jahren» · «Für: alle, die verstehen wollen» · «Für: alle Angehörigen, auch Betroffene selbst» · «Für: erwachsene Kinder von Betroffenen» |

Weitere Daten in der Form «TT.MM.JJJJ» im sichtbaren Text von `quellen` stellst du gleich um und nennst sie in der Selbstprüfung. Angaben aus fremden Titeln (Originaltitel, Registernummern) bleiben.

## 8. Weiterleitungen (SPZ-55, SPZ-F-39; SPZ-54)

### 8.1 Schreibweisen

In `_redirects`, im Format der bestehenden Zeilen (Spalten wie dort):

- im Block «Krisenzugang entfällt», nach `/soforthilfe/*`:
  `/Soforthilfe                                 /index.html                                  301`
- im Block «Seiten», nach `/faq`:
  `/FAQ                                         /fragen.html                                 301`

### 8.2 Alte `-v1`-PDFs (SPZ-54)

1. Lies im Repository `christaegger-dot/borderline-angehoerige` auf `main` die Datei `client/public/_redirects` (nur lesen, dort nichts ändern). Sie leitete neun `…-v1`-Dateien auf `…-v3` weiter (Prüfung 1, Teil 5.6 b).
2. Für jede dieser neun Regeln eine Zeile im Block «Veröffentlichte PDFs der alten Website», vor `/infografiken/*`:
   - Gibt es eine Regel für die `-v3`-Fassung (z. B. `manus-genesung-zahlen-v3.pdf`): dasselbe Ziel.
   - Sonst: das Ziel der Regel `/materialien/text/<name>` desselben Handouts.
   - Krisenmaterial (Notfallkarte, Notfallplan) bleibt bei `/index.html`.
3. In der Selbstprüfung: die neun alten Regeln, die neuen Zeilen und ihre Ziele als Tabelle.
4. Ist das Repository nicht lesbar: 8.2 nicht umsetzen und in der Selbstprüfung melden.

Danach: Alle Ziele in `_redirects` gibt es als Datei und Anker (`#…` als `id` auf der Zielseite); Zahl der Regeln vorher und nachher.

## 9. Plan, Werkzeug, UMBAUPLAN

### 9.1 Textzeilen des Plans (SPZ-46, SPZ-F-3)

- Jede Zeile in `pages[].visualPlan` mit `format: "text"` bekommt `approvalStatus: "freigegeben"`. Betrifft alle Seiten ausser `404`.
- Zeilen mit anderem Format bleiben, wie sie sind (auch `v-vs-anspannung` und `v-bz-schleife`, siehe 5.4 und 5.5).
- **Prüfen:** Zahl der geänderten Zeilen (erwartet um 98) und `node -e` mit der Zählung «format text, nicht freigegeben» = 0.

### 9.2 Veraltete Begründungen im Plan (SPZ-8, SPZ-9)

| Zeile | heute (Kern) | neu |
| --- | --- | --- |
| `index` › `v-ix-beratung` › `reason` | «steht nur hier, andere Seiten verweisen darauf» | durch eine Beschreibung des heutigen Stands ersetzen: Die Beratung steht ausführlich hier; `unterstuetzung` › `beratung` nennt die Kosten noch einmal (seit 2c-K) und verweist hierher; Quelle der Angabe die Selbstprüfung «Freigabe 2c und 3-1», Aufgefallen Nr. 3 |
| `index` › Zeile `haltung` › `reason` | «… als Muster H vorgesehen (Etappe 2)» | durch eine Beschreibung des heutigen Stands ersetzen: Auf `selbstfuersorge` steht stattdessen «Ein freier Abend» (`v-sf-abend`) |
| `grenzen` › Zeile `saetze` › `reason` | «… für «Zugewandt und klar sprechen» (Etappe 2) vorgemerkt» | «Die übrigen Beispiele des Bestands stehen auf «Zugewandt und klar sprechen» › «So könnte es klingen» (Etappe 2b).» |

Nur der Plantext ändert sich, nichts Sichtbares. Jede `reason` endet mit «(SP-K 9.2)».

### 9.3 Richtwert (SPZ-31, SPZ-32, SPZ-F-15)

- `abgleich/kennzahlen.mjs` Z. 38: in `RICHTWERT` `verstehen`, `beziehungen`, `grenzen`, `fragen` und `ueber` auf `null`. Darüber ein Kommentar: «Kein Richtwert: `verstehen`, `beziehungen`, `grenzen` nach SPZ-F-15 (Entscheide zur Schlussprüfung), `fragen` nach S-Nr. 1 (Korrektur 3-1), `ueber` nach NK-F-7.»
- `UMBAUPLAN.md` Abschnitt 2: in den Zeilen `verstehen`, `beziehungen` und `grenzen` statt «(1100)», «(1000)», «(1200)» je «(kein Richtwert, SPZ-F-15 in `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`)».

### 9.4 Verweise im UMBAUPLAN (SPZ-29, SPZ-30, SPZ-F-22)

- In `UMBAUPLAN.md` Abschnitt 2 die Spalte «verlinkt aus» bei `krise` und `kommunizieren` an die heutigen Links anpassen. Grundlage: Linkgraph der gebauten Seiten (Hauptinhalt, ohne Navigation und Fusszeile). Für `krise` heute: Verstehen, Diagnose, Behandlung, Kommunizieren, Auf sich achten, Häufige Fragen; prüfe es nach.
- Dazu in der Zeile: «nachgeführt nach den Entscheiden zur Schlussprüfung (SPZ-F-22)».
- Keine neuen Verweise auf den Seiten und kein Einstieg auf `index`.

## 10. Abgleich und Bericht

### 10.1 Diagnostik-Teil der alten Seite `/verstehen` (SPZ-4, SPZ-F-4)

- Bestand `verstehen.md` Z. 224–275 (Diagnostik und Begleiterkrankungen) bekommt in `abgleich/verstehen.md` **je Satz eine Zeile**, fortlaufend nummeriert nach der letzten Nummer der Tabelle, im Format der Tabelle.
- Status je Satz, mit Fundstelle (meist `diagnose#abklaerung` oder `diagnose#begleiterkrankungen`); «entfällt» nur mit Grund. Bemerkung «SP-K 10.1, SPZ-4».
- Die Zeile für Z. 271 (zwei Sätze, je eine Zeile): «übernommen (SP-K)», Fundstelle `diagnose#begleiterkrankungen`, Bemerkung «SP-K 5.1, SPZ-F-4».
- Steht die Aussage schon in `abgleich/diagnose.md` (Bestand `/verstehen/diagnostik` oder `/verstehen/begleiterkrankungen`), verweist die Bemerkung auf diese Zeile.
- Den Kopf von `abgleich/verstehen.md` (Z. 3) ergänzen: Bestand umfasst auch den Diagnostik- und Begleiterkrankungsteil (Z. 224–275), nachgeführt mit SP-K.
- In der Selbstprüfung: Zahl der neuen Zeilen je Status; jede «entfällt»-Zeile mit Grund.

### 10.2 Verweise «folgt mit Etappe 2» (SPZ-7)

- Suche in `abgleich/*.md` (ohne `README.md`) alle Zeilen, deren Bemerkung oder Status einen Verweis «folgt/folgen mit Etappe 2» oder «vorgemerkt für … (Etappe 2)» verspricht (Prüfung 1 zählte 17, SP1-10).
- Je Zeile: Steht der Verweis heute (Freigaben 2b und 2c, je Abschnitt 4, oder ein Verweis im Seitentext), Status «umformuliert (SP-K)» mit Fundstelle; sonst «entfällt (SP-K)» mit Grund, z. B. «Verweis nicht gesetzt; der Abschnitt ist über … erreichbar».
- Nr. 116 nach 5.3.
- In der Selbstprüfung: die Liste aller Zeilen mit altem und neuem Status.

### 10.3 Zeilen mit falschem Status oder Beleg (SPZ-11)

Berichtige diese Zeilen nach den Belegen der Prüfungen. Nur Status, Fundstelle, neue Fassung und Bemerkung, kein Seitentext.

| Datei | Nummern | Beleg |
| --- | --- | --- |
| `verstehen.md` | 401, 204 (91 nach 5.5) | Prüfung 1, 5.1 d (SP1-13) |
| `selbstfuersorge.md` | 449 (276 nach 5.6) | SP1-13 |
| `grenzen.md` | 285, 287, 202, 638, 509 | SP1-13; SP2-W1B-4, -5 |
| `beziehungen.md` | 206, 142, 145, 151 | SP1-13; SP2-W1B-3 |
| `unterstuetzung.md` | 40 | SP1-14: Begründung wie in `ueber.md` Nr. 73 (Z31-W1-12) |
| `genesung.md` | 264, 315 | SP2-W1B-5; SP1-15 |
| `behandlung.md` | 266 | SP1-15 |
| `kommunizieren.md` | 466 | SP2-W1B-5 |
| `quellen.md` | 490, 175, 162 | SP2-W1B-5; SP1-15 |
| `index.md` | 228 | SP2-W1B-5 |
| `rolle.md` | 457 | SP2-W1B-4 |

- «übernommen» nur, wenn inhaltlich gleich (`abgleich/README.md` Z. 48); sonst «gekürzt» oder «umformuliert», und die Bemerkung nennt, was entfällt.
- «entfällt» nur, wenn die Aussage nicht auf der Website steht; sonst Status und Fundstelle nachführen.

### 10.4 Liste «Entfallene Sätze» 2a-K (SPZ-12)

- Im Block «Korrektur 2a-K» der Selbstprüfung: den in 2a-2 ersetzten Satz «Ein Vergleich mit anderen Familien erklärt weder die Ursachen noch Ihre persönliche Verantwortung.» ergänzen, mit Träger `rolle` › `schuld` (neue Fassung aus 2a-2, Abgleich r483).
- E85 bis E88 und E93: Träger auf den heutigen Stand (nach 2a-2) bringen.
- Darüber ein Satz: «Nachgeführt mit SP-K 10.4 (SPZ-12).»

### 10.5 Selbstprüfung «Etappe 3-2» (SPZ-60)

- Im Block «Etappe 3-2», Entscheide Nr. 2, steht: «Erhalten sind sie in `react-archiv` und auf `main`.»
- Darunter, ohne den alten Satz zu löschen: «Berichtigt mit SP-K 10.5 (SPZ-60): Mit dem Merge von PR #659 entfallen auf `main` alle fünf Workflows und die Funktion `material-download`. Erhalten bleiben sie in `react-archiv`. Was vor dem Merge zu tun ist, steht in `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`, Abschnitt 5.4.»

## 11. Selbstprüfung

Im Prüfbericht ein neuer Block «Korrektur SP-K (nach der Schlussprüfung)» in der Selbstprüfung, mit:

1. Je Abschnitt 3 bis 10: umgesetzt oder nicht, mit Beleg (Datei, Zeile, Zitat, Befehl mit Ausgabe).
2. **Neue Sätze zur Freigabe:** jeder neue oder geänderte sichtbare Satz mit Seite › Abschnitt, Wortlaut heute und neu, Abschnitt dieses Auftrags. Dazu der ganze Text der `404`.
3. **Entfallene Sätze:** jeder entfallene sichtbare Satz mit Ersatz (erwartet: nur die ersetzten Fassungen aus 5, 7).
4. **Satzdiff:** neue und entfallene Sätze je Seite gegen den Stand vor der Korrektur, per Skript; jeder Treffer steht in 2. oder 3.
5. **Abbildungen:** Fotos vor und nach der Korrektur für die vier Figuren aus Abschnitt 4 (Breiten und Schrift wie dort); Messwerte, falls eine Schwelle erhöht wurde.
6. **Aufgefallen, nicht geändert.**
7. Keine Stufe als «erledigt» eintragen. Die Statustabelle bleibt.

## 12. Prüfungen vor dem Commit

- `node tools/build.mjs`: 0 blockierend; danach `git status`: nur die erwarteten Dateien.
- `node tools/gate.mjs --production`: blockierend nur `review-report` (offene Stufen).
- `node tools/gate.mjs --selftest`: alle bestanden (das Gate selbst bleibt unverändert).
- `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle.
- `node abgleich/verwendet-auf.mjs` und `--ohne-legenden`: je 0 Abweichungen.
- `node abgleich/kennzahlen.mjs`: läuft ohne Fehler; Wortzahlen der geänderten Seiten in der Selbstprüfung.
- `grep -rn "tel:" *.html content/`: 0.
- Interaktive Elemente (Akkordeons auf den geänderten Seiten): einmal mit Tastatur, bei 320 px und mit reduzierter Bewegung.

## 13. Danach

1. Commit auf einem eigenen Branch, Entwurfs-PR gegen `main`. Die Beschreibung nennt die offenen Stufen.
2. Neuer Export auf die Vorschau (`christaegger-dot/borderline-angehoerige`, Branch von PR #659) mit `node tools/export.mjs <ziel>/site` (Entwurf, ohne `--production`) und `_redirects` von Hand; PR #659 bleibt Entwurf.
3. Nachprüfung durch eine Sitzung, die weder gebaut, noch geprüft, noch entschieden hat: Umsetzung dieses Auftrags, SPZ-6 (`draft:true`), Abbildungen bei grosser Schrift.
4. Danach trägt die Entscheidsitzung (oder eine Sitzung, die die Fachstelle dafür bestimmt) im Auftrag der Fachstelle die Freigabe der neuen Sätze und der Abbildungen `v-vs-anspannung` und `v-bz-schleife` ein.
5. Reale Tests (Entscheide 5.3), rechtliche Prüfung (5.2), NK-F-3; danach R1, R2 und R3.

## 14. Startnachricht für die Korrektursitzung

Voraussetzung: PR #59 ist in `main` gemergt. Sonst in der Nachricht «abgezweigt von main nach dem Merge von PR #59» durch «abgezweigt von entscheide-schlusspruefung» ersetzen.

```
Setze den Korrekturauftrag KORREKTUR-SCHLUSSPRUEFUNG.md (Korrektur «SP-K») für die Website
templates/website/borderline-angehoerige/ um. Grundlage sind die Entscheide in
ENTSCHEIDE-SCHLUSSPRUEFUNG.md im selben Ordner, von Claude im Auftrag der Fachstelle
entschieden (Delegation vom 12.10.2026). Du bist die bauende Sitzung. An der Schlussprüfung,
ihrer Zusammenführung und den Entscheiden hast du nicht mitgearbeitet.
Lies zuerst CLAUDE.md, guidelines/00-ablauf-pruefung-und-freigabe.md, den Korrekturauftrag
ganz und die Abschnitte 3 und 6 der Entscheide.
Halte dich an die Wortlaute des Auftrags. Ändere nur die Stellen, die er nennt, und weder
Leitlinien noch Tokens, Komponenten oder Starter-Werkzeuge. Was dir sonst auffällt, nennst
du in der Selbstprüfung.
Bei SP-K 5.7 (F60.31) und 8.2 (alte -v1-PDFs) gilt die Bedingung im Auftrag: Geht der
Nachweis nicht, setzt du nichts ein und meldest es.
Trage keine Stufe als «erledigt» ein; die Statustabelle bleibt unverändert.
Arbeite auf dem Branch korrektur-schlusspruefung, abgezweigt von main nach dem Merge von
PR #59. Committe erst, wenn die Prüfungen aus Abschnitt 12 des Auftrags durchlaufen, und
öffne einen Entwurfs-PR gegen main, der die offenen Stufen nennt.
```
