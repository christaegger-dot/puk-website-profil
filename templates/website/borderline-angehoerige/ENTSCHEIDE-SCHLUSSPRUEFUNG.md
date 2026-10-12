# Entscheide · Borderline-Website · Fragen der Schlussprüfung (SPZ-F-1 bis -39)

Stand 12.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `main`, Stand `3a6e966`. Erstellt nach `ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md`.

## 1. Kopf

- **Geprüfter Stand:** `main` `3f9a1e4` (Merge von PR #58). `git diff --stat 3a6e966 3f9a1e4 -- templates/website/borderline-angehoerige/` zeigt nur `ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md`. Inhalte, Code, Werkzeuge und Abgleich sind also gleich wie in `3a6e966`.
- **Delegation (Wortlaut des Auftrags):** «Die Fachstelle hat am 12.10.2026 entschieden, dass Claude diese Fragen «selbständig anstelle der Fachstelle» beantwortet.» Alle Entscheide in diesem Dokument sind **von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026)**. Keiner ist der Entscheid einer Person der Fachstelle.
- **Unabhängigkeit:** Diese Entscheidsitzung (Claude Code) hat an der Borderline-Website weder gebaut noch korrigiert noch geprüft und den Auftrag nicht vorbereitet. Sie ändert keine Inhalte, keinen Code, keine Werkzeuge und keinen Abgleich. Sie ändert nur dieses Dokument und den Eintrag in `PRUEFBERICHT.md`. An Netlify und im Repository `christaegger-dot/borderline-angehoerige` hat sie nichts geändert und nichts gelesen. Nach Abschnitt 2 des Auftrags ist sie von der Korrektur und der Nachprüfung ausgeschlossen.
- **Gelesene Grundlagen:**
  - `CLAUDE.md`, `guidelines/00-ablauf-pruefung-und-freigabe.md`, `ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md` ganz
  - die Leitlinien `00-fachliche-qualitaet-und-haltung.md`, `00-gesamtkohaerenz-und-aufbau.md`, `00-sprache-und-ton.md`, `00-visuelle-wissensvermittlung.md`, `07-visualisierung-umsetzen.md`, `04-barrierefreiheit-und-test.md`, `00-technische-qualitaet.md` ganz
  - `PRUEFBERICHT.md`: «Fachliche Freigabe der Fachstelle» (Z. 28–84), «Schlussprüfung · Zusammenführung» ganz (Z. 86–262); aus Prüfung 2 und Prüfung 1 die Belege zu jeder Frage (Fundstellen in der Tabelle unten)
  - `FREIGABE-ETAPPE-2A.md`, `FREIGABE-ETAPPE-2B.md`, `FREIGABE-ETAPPE-2C-3-1.md` ganz; aus `KORREKTUR-ETAPPE-1C` bis `-1F`, `-2A`, `-2B2` und `-2C` die Stellen, die eine Frage betreffen
  - der Bestand: `origin/borderline-bestand` (`ba49bdc`), `bestand/borderline-angehoerige/texte/`, ausgepackt ausserhalb des Repositorys; `abgleich/*.md`, `UMBAUPLAN.md`, `site.config.json`, `content/*.html`
- **Selbst ausgeführt (Stand `3f9a1e4`):**
  - `node tools/gate.mjs --production` → «1 blockierend, 1 Hinweise» (`review-report`; Hinweis `crisis-number-check` «144» auf `quellen`)
  - `node abgleich/pruefe-abgleich.mjs` → «7371 Zeilen, 0 ohne Fundstelle.»
  - `node abgleich/verwendet-auf.mjs --ohne-legenden` → «85 Einträge, 6 mit anderer Angabe» (Baranger 2020, Degasperi 2021, Santangelo 2014, Shields 2016, Linehan 2015, Hoffman 2005; alle `verstehen`)
  - Zählung `visualPlan`: 109 Zeilen, davon 10 Abbildungen «freigegeben», 98 Text «ausstehend», 1 Text «entfällt»

## 2. Entscheide

Abkürzungen: «P1» = Prüfung 1 (Block «Schlussprüfung (12.10.2026, Stand f1d6572)»), «P2» = Prüfung 2 (Block «Schlussprüfung · zweite Prüfsitzung»), «Z.» = Zeile in `PRUEFBERICHT.md` am Stand `3f9a1e4`, wenn nichts anderes steht. «B» = Bestand `bestand/borderline-angehoerige/texte/`. Die Massstäbe M1 bis M7 sind die Massstäbe in Abschnitt 4 des Auftrags.

### A · Verfahren und Status

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-1 | Bestätigung des Prüfauftrags | Der Prüfauftrag `PRUEFAUFTRAG-SCHLUSSPRUEFUNG.md` gilt mit der Delegation vom 12.10.2026 als bestätigt, so wie er ausgeführt wurde. Eingetragen im Unterabschnitt «Entscheide zur Schlussprüfung» in `PRUEFBERICHT.md`. | Beide Prüfungen haben nach Abschnitt 8 des Auftrags geprüft und die fehlende Bestätigung offen genannt (P1 Z. 2316; P2 Z. 271). Die Fachstelle hat die Entscheide zu den Fragen der Schlussprüfung delegiert (`ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md`, Abschnitt 1 und 5). Die Bestätigung betrifft nur das Verfahren, keine fachliche Aussage. | keine Änderung | keine |
| SPZ-F-2 | Wortlaut und Prüfdatum der Fusszeile, wer setzt sie | **Wortlaut:** `editorialStatus` = «Fachlich freigegeben am TT.MM.JJJJ». In der Fusszeile steht dann «Redaktioneller Status: Fachlich freigegeben am TT.MM.JJJJ», direkt unter «Inhaltsverantwortung: Fachstelle Angehörigenarbeit PUK». **Datum:** der Tag des Freigabe-Eintrags nach der Nachprüfung dieser Korrektur (Abschnitt 6, Schritt 3). Ändert sich danach ein Inhalt (z. B. nach R1 bis R3), wird das Datum mit der neuen Freigabe nachgeführt. **Wer, wann:** die bauende Sitzung, die den Freigabe-Eintrag umsetzt, vor R1 und damit vor dem Export mit `--production`. Bis dahin bleibt «Entwurf – fachliche Prüfung ausstehend», weil die neuen Sätze dieser Korrektur erst nach der Nachprüfung freigegeben gelten. **Profilebene:** Vorschlag unten. | Das Profil verlangt Inhaltsverantwortung und Prüfdatum in der Fusszeile und die Freigabesprache «fachlich freigegeben» (`guidelines/00-ablauf-pruefung-und-freigabe.md`, «Inhaltsverantwortung und Status»). Heute: `site.config.json` Z. 19 «Entwurf – fachliche Prüfung ausstehend»; `tools/contract.js` Z. 176 gibt den Wert unverändert aus, `--production` ändert ihn nicht (SPZ-1). Die Fachstelle hat `editorialStatus` bisher bewusst nicht geändert (`FREIGABE-ETAPPE-2A.md` Abschnitt 2: «Nicht ändern: … `editorialStatus`»). Das passt zum Zwischenstand; zur Veröffentlichung muss der Wert stimmen. Der Name der Fachstelle steht schon in der Zeile darüber, deshalb kein Zusatz in Klammern. | Änderung | `site.config.json` › `editorialStatus` (Abschnitt 6, Schritt 3) |
| SPZ-F-3 | 98 Textzeilen des Plans auf «freigegeben»? | Ja. Mit dem Freigabe-Eintrag nach der Nachprüfung (gleicher Schritt wie SPZ-F-2) setzt die bauende Sitzung `approvalStatus` bei den 98 Zeilen mit `format` «text» und Status «ausstehend» auf «freigegeben». Die Zeile mit «entfällt» bleibt. | Die Seiten sind «als Ganzes» freigegeben (Z. 32, 47, 58, 71–72). Dazu gehört der Entscheid, dass ein Abschnitt als Text steht. «ausstehend» war eine Regel für den Zwischenstand: «Die übrigen Zeilen behalten «ausstehend», wie auf den Seiten der Etappen 1 bis 2b» (`FREIGABE-ETAPPE-2C-3-1.md` Abschnitt 5), «Nicht ändern: … die Zeilen mit `format` «text» im Plan» (`FREIGABE-ETAPPE-2A.md` Abschnitt 2). Das Gate verlangt «freigegeben» nur für Abbildungen (`tools/contract.js` Z. 256); 98 Zeilen auf «ausstehend» widersprechen aber der Freigabe (SPZ-46). | Änderung | `site.config.json` › `visualPlan` (Abschnitt 6, Schritt 3) |
| SPZ-F-15 | Richtwert für `verstehen`, `beziehungen`, `grenzen` | Für diese drei Seiten gilt kein Richtwert. Bestätigt, nicht neu entschieden. `UMBAUPLAN.md` und `abgleich/kennzahlen.mjs` werden nachgeführt, dort auch `fragen` und `ueber`. | M1. «Der Richtwert für die Länge gilt nicht» steht in `KORREKTUR-ETAPPE-1C.md` Z. 12, `-1D.md` Z. 65, `-1E.md` Z. 15 und `-1F.md` Z. 14; die Seiten sind in dieser Länge freigegeben (Z. 32). Für `fragen` gilt kein Richtwert (Entscheid zu S-Nr. 1, `UMBAUPLAN.md` Z. 44), für `ueber` auch nicht (NK-F-7, `FREIGABE-ETAPPE-2C-3-1.md`). Heute widersprechen `kennzahlen.mjs` Z. 40 (`verstehen: 1300, beziehungen: 1100, grenzen: 1500, fragen: 1500, ueber: 900`) und `UMBAUPLAN.md` Z. 33, 34, 39 («(1100)», «(1000)», «(1200)») den Entscheiden (SPZ-31, SPZ-32). | Änderung | `abgleich/kennzahlen.mjs` Z. 40: die fünf Werte auf `null`; `UMBAUPLAN.md` Z. 33, 34, 39: Klammer ersetzen durch «(kein Richtwert, Entscheide in `KORREKTUR-ETAPPE-1C.md` bis `-1F.md`, bestätigt mit SPZ-F-15)» |

### B · Fachliche Aussagen (Prüfbedarf)

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-4 | Satz zu Häufigkeitsangaben auf `diagnose`? Abgleich des Diagnostik-Teils? | Der Satz des Bestands kommt wörtlich auf `diagnose` › `begleiterkrankungen`, als eigener Absatz direkt nach der Liste der Begleiterkrankungen (Wortlaut 3.1). Der Diagnostik-Teil des Bestands (`verstehen.md` Z. 224–275) bekommt im Abgleich je Satz und Listenpunkt eine Zeile. | M2: Die Einschränkung sicherte die Liste ab und fehlt heute. B `verstehen.md` Z. 271: «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren. Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.» Auf `diagnose` steht heute nach «In Studien werden unter anderem diese Begleiterkrankungen beschrieben. Die Reihenfolge ist keine Rangfolge.» eine Liste mit sechs Erkrankungen, aber keine Einschränkung zur Häufigkeit (`grep -ril Häufigkeitsangaben content/`: kein Treffer, P2 Z. 275). Der Bezug «Die Liste» stimmt am neuen Ort, weil dort wieder eine Liste steht. Lücke im Abgleich: `abgleich/verstehen.md` Kopf «ohne Diagnostik-Teil», `abgleich/diagnose.md` Kopf nur Unterseiten (SPZ-4). | Änderung | Wortlaut 3.1; Abgleich-Zeilen in `abgleich/diagnose.md`, angehängt mit neuen Nummern, Status mit «(SPZ-E)»; Kopf von `abgleich/verstehen.md` und `abgleich/diagnose.md` nachführen |
| SPZ-F-5 | «Sie sind es nicht.» zurück? | Ja. Der Satz kommt wörtlich zurück, direkt nach «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» (`kommunizieren` › `beispiele`, «Eine Bitte um Geld»). Der erste Satz bleibt, wie er ist. | M2: Der Satz entlastet und ist still entfallen. B `grenzen.md` Z. 378: «Finanzielle Grenzen sind besonders schwer, weil sie sich anfühlen wie «ich lasse dich fallen». Sie sind es nicht.» `abgleich/grenzen.md` Nr. 214 deckt nur den ersten Satz. M4: Der erste Satz ist mit «oft» und «können» nach Bauauftrag 2b abgesichert und freigegeben (Z. 58); er wird nicht zurückgeändert. Der Bezug «sie» = Grenzen bleibt nach «können» erhalten. Am Satzanfang lässt sich «Sie» auch als Anrede lesen; beide Lesarten sagen dasselbe (keine Grenze beim Geld ist ein Fallenlassen). Deshalb bleibt der Wortlaut des Bestands. | Änderung | Wortlaut 3.2; neue Zeile in `abgleich/grenzen.md` für den Bestandssatz, Fundstelle `kommunizieren#beispiele` |
| SPZ-F-6 | Verweis bei «manipulieren bewusst» | Der Verweis kommt zurück, wie im Bestand auf beide Seiten. Neuer Verweissatz am Ende der Antwort, nach «Bleiben Sie bei der Wirkung, Ihrer Sicherheit und Ihrer Grenze.» (Wortlaut 3.3). | B `verstehen.md` Z. 181 endet mit «Mehr dazu auf [Kommunizieren](/kommunizieren) und [Grenzen](/grenzen).» `abgleich/verstehen.md` Nr. 116: «entfällt … Verweis (folgt mit Etappe 2)». Die Fachstelle hat die gleich vorgemerkten Verweise Nr. 112 und 127 mit der Freigabe 2c gesetzt (`FREIGABE-ETAPPE-2C-3-1.md` Abschnitt 4, Nr. 1 und 2). Nr. 116 ist dabei ohne Entscheid liegen geblieben (SPZ-7). Ziele: `kommunizieren#kippen` «Wenn Gespräche kippen» (Begrenzen, beenden, Grenze in drei Teilen) und `grenzen#konsequenz` «Konsequenz heisst nicht Härte» («Eine Grenze gilt auch, wenn die andere Person nicht zustimmt.»). Seitennamen wie in den übrigen Verweissätzen: «Zugewandt und klar sprechen» (Titel), «Grenzen» (Navigation). | Änderung | Wortlaut 3.3; `abgleich/verstehen.md` Nr. 116 auf «umformuliert (Verweis, SPZ-E)» mit Fundstelle `verstehen#mythen` |
| SPZ-F-7 | «Die Abgrenzung gehört in eine fachliche Abklärung.» zu den PTBS-Sätzen? | Ja. Der Satz rückt im selben Absatz direkt hinter «Einzelne Merkmale können sich überschneiden, und die Diagnosen können zusammen auftreten.» Der Verweissatz «Welche Begleiterkrankungen vorkommen können, …» folgt danach. Kein Wort ändert sich. | B `verstehen.md` Z. 193: Im Bestand folgt «Die Abgrenzung gehört in eine fachliche Diagnostik.» direkt auf die PTBS-Sätze. Heute steht der Satz nach den Sätzen zu Kindheitserfahrungen, getrennt durch den Verweissatz aus 2c-3-1-F. So ist unklar, dass Borderline gegen PTBS gemeint ist (P2 SP2-W1B-6, Z. 805). Nur die Reihenfolge ändert sich (M4). | Änderung | Wortlaut 3.4 (Reihenfolge); `abgleich/verstehen.md` Nr. 126 Bemerkung nachführen |
| SPZ-F-8 | Anspannungskurve, Stelle 3, wieder «können helfen»? | Ja. «Eine Pause, Abstand und weniger Reize helfen.» wird zu «Eine Pause, Abstand und weniger Reize können helfen.» Sonst ändert sich an der Abbildung nichts. | M2: Der Bestand sicherte ab. B `materialien--text--alarm-modus.md` Z. 51: «Zeit, weniger Reize, selbst gewählte Unterstützung oder Abstand können helfen.»; `abgleich/verstehen.md` Nr. 240 und 288 («… können helfen – aber nicht immer und nicht jeder Person gleich.»), beide «zusammengeführt» ohne Hinweis auf den Verlust (SP1-12, Z. 3630). Leitlinie «Visuelle Wissensvermittlung», «Fachlich richtig vereinfachen»: «‹kann›, ‹oft›, ‹häufig› auch in Beschriftungen». Übernommen wird nur «können helfen» aus dem Bestand, damit die freigegebene Abbildung so wenig wie möglich ändert (M4). | Änderung | Wortlaut 3.5; `abgleich/verstehen.md` Nr. 240, 288 nachführen. Neue Freigabe der Abbildung nach der Nachprüfung (M7, Abschnitt 4) |
| SPZ-F-9 | Schleife: «keine feste Abfolge» sagen? | Nein, keine Änderung an der Abbildung. Die Abgleichzeile Nr. 91 wird berichtigt (unter SPZ-11). | Der Bestandssatz (B `verstehen.md` Z. 135: «Daraus ergibt sich keine feste Abfolge, und die Diagnose einer Person erklärt den Verlauf nicht allein.») gehörte zu einer allgemeinen Beschreibung belasteter Beziehungen ohne Stationen. Die Schleife ist ein Kreislauf (Muster B) mit Leserichtung; der Satz «keine feste Abfolge» direkt an den nummerierten Stationen würde dem Modell widersprechen. Die Absicherung tragen heute: «Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will.» (`beziehungen` › `schleife`, Erklärtext) und «Einen ganzen Menschen erklären sie nicht.» (`beziehungen` › `verstaerker`). Die Abbildung ist freigegeben (P4-F-21, Z. 33; M1, M4). | keine Änderung | `abgleich/verstehen.md` Nr. 91: Status «zusammengeführt (SPZ-E)», Bemerkung: «keine feste Abfolge» entfällt mit Grund (Kreislauf-Modell), Träger der Absicherung wie hier genannt |
| SPZ-F-10 | Vertiefung «Eltern» auf `selbstfuersorge` an `rolle` angleichen? | Nein. | Der Satz «Eigene Fehler lassen sich ernst nehmen, ohne für alles verantwortlich zu sein.» ist wörtlich Bestand (B `selbstfuersorge.md` Z. 472; `abgleich/selbstfuersorge.md` Nr. 276 «wörtlich»). Er sagt dasselbe wie `rolle` › `schuld`: «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» Kein Widerspruch, keine Teilverantwortung für Erkrankung oder Genesung; freigegeben mit Etappe 2a (Z. 47; M1, M4). | keine Änderung | keine |
| SPZ-F-11 | «Beides kann nebeneinander bestehen.» (E14) verzichtbar? | Ja, verzichtbar. | Die bauende Sitzung hat den Wegfall offen ausgewiesen (E14, Z. 8739; `abgleich/selbstfuersorge.md` Nr. 54), die Fachstelle hat Etappe 2a danach freigegeben (Z. 47; M1). Die zwei Fragen stehen heute in einer Reihe nebeneinander («Was habe ich konkret getan? … Wofür fühle ich mich verantwortlich, obwohl ich es nicht ganz beeinflussen kann?»), und davor steht «Schuldgefühle und konkrete Verantwortung können schwer auseinanderzuhalten sein.» (`rolle` › `schuld`). Die Aussage ist getragen. | keine Änderung | keine |
| SPZ-F-12 | Genügt «Das ist eine Orientierung, keine Garantie …»? | Ja. | M1: Die Quellen stehen nach dem Entscheid der Fachstelle am Seitenende (Korrektur 2b-2, Z. 62); «Sätze …, die keine Quelle nennen, sondern etwas aussagen, bleiben im Text» (`KORREKTUR-ETAPPE-2B2.md` Z. 64–68). Die Absicherung steht im Text (`selbstfuersorge` › `beratung`: «Das ist eine Orientierung, keine Garantie, dass sie wirken.»), die Einschränkung zur Forschungslage im Quellenblock («eine Übersicht über sechs Studien mit deutlichen Forschungslücken»). | keine Änderung | keine |
| SPZ-F-16 | «Recovery» auf `fragen` wie auf `genesung` und im Glossar? | Nein. | Die drei Stellen widersprechen sich nicht. `fragen`: «Recovery umfasst darüber hinaus persönliche Lebensqualität, Beziehungen und Teilhabe.» (kurze Antwort mit Link auf «Remission, Alltag und persönliche Recovery»); `genesung`: «Persönliche Recovery beschreibt einen individuellen Weg zu einem selbstbestimmten und als sinnvoll erlebten Leben …»; Glossar: Studiendefinition und persönliche Recovery. `fragen` gibt nach Entscheid kurze Antworten mit Link auf die Themenseite (`UMBAUPLAN.md` Z. 44). Freigegeben (Z. 71–72; M4). | keine Änderung | keine |
| SPZ-F-17 | Rechte und Schweigepflicht gebündelt? | Nein, kein neuer Abschnitt. | Die Leitlinie nennt «Rechte und Schweigepflicht» in einer Prüfliste, «nicht als Pflichtprogramm» (`00-gesamtkohaerenz-und-aufbau.md`, «Lücken im Gesamtkonzept»). Die Themen stehen an den Stellen, an denen Angehörige sie brauchen: Einwilligung und Schweigepflicht auf `behandlung` › `kontakt`, FU, KESB und Meldepflichten auf `fragen` wie im Bestand (B: nur `faq.md` nennt KESB und FU). Ein gebündelter Abschnitt wäre neuer rechtlicher Inhalt, der amtliche Quellen und eine eigene Prüfung braucht (M3). | keine Änderung | keine |
| SPZ-F-20 | Geschwister, Freundinnen und Freunde als eigene Rolle? | Nein, nicht für diese Veröffentlichung. Für eine spätere Überarbeitung vorgemerkt. | Der Bestand nennt Geschwister kaum (`grep -c Geschwister` in B: `materialien--text--kinder.md` 1, `verstehen--beziehungen.md` 1, `quellen.md` 2). Ein eigener Rollenabschnitt wäre neuer Inhalt ohne Grundlage im Bestand und in den Quellen (M3). Heute: `rolle` › `kinder` «Auch Geschwister eines erkrankten Kindes brauchen Aufmerksamkeit und Freiräume.»; `index` › `beratung` spricht «Freundinnen und Freunde» an. | keine Änderung | keine |
| SPZ-F-21 | Bezeichnung zu F60.31 nennen? | **Zurück an die Fachstelle.** | Der Bestand nennt nur den Code (B `verstehen--diagnostik.md` Z. 104, `quellen.md` Z. 137), die Website ebenso (`diagnose` › `abklaerung`; `quellen`: «Dort wird der Borderline-Typ unter F60.31 codiert.»). Die Bezeichnung aus der ICD-10-GM 2024 steht weder im Bestand noch auf einer Seite des Repositorys; sie wäre aus dem Gedächtnis ergänzt (M3, Leitlinie «Quellenstandard»: «Keine Quelle … aus dem Gedächtnis ergänzen»). Vorschlag zur Prüfung: Die Fachstelle prüft die Bezeichnung zu F60.31 in der amtlichen Fassung der ICD-10-GM 2024. Stimmt sie, kommt nach «Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen.» der Satz «In der ICD-10-GM 2024 heisst er «<amtliche Bezeichnung>».» | zurück an die Fachstelle | keine; bis zum Entscheid bleibt der heutige Text |
| SPZ-F-23 | Gleichlautende Absicherungen bündeln? | Nein. | Die Leitlinie erlaubt Bündeln nur für «allgemeine redaktionelle Hinweise»; «konkrete Warnzeichen, Handlungsfristen, Zugangsvoraussetzungen und Schutzanweisungen bleiben an ihrer Stelle» (`00-sprache-und-ton.md`, Abschnitt 5). Die drei Absätze in `krise` › `belastung` grenzen die Einteilung von Diagnose, Sicherheit und Dringlichkeit ab; das sind Schutzhinweise in einem Krisenabschnitt (M2, M6). Die Fachstelle hat Wiederholungen bei Sicherheitshinweisen schon bewusst stehen lassen (NK-F-6: «holen Sie sofort Hilfe» zweimal, `FREIGABE-ETAPPE-2C-3-1.md`). Freigegeben (Z. 58; M1, M4). | keine Änderung | keine |

### C · Quellen, Verweise, Aufbau

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-18 | Quellenblöcke und «Verwendet in» mit den Quellen aus Bildlegenden? | Ja. Die Legenden bleiben, wie sie sind. Jede Quelle, die eine Bildlegende nennt, steht auch im Block «Quellen zu dieser Seite», und «Verwendet in» nennt auch den Abschnitt der Abbildung. | Heute fehlen auf `verstehen` sechs Legendenquellen ganz im Block (`verwendet-auf.mjs --ohne-legenden`: Baranger 2020, Degasperi 2021, Santangelo 2014, Shields 2016, Linehan 2015, Hoffman 2005), auf den anderen Seiten stehen sie dort (SP1-24, Z. 3642). «Verwendet in» lässt die Abschnitte mit Legende aus, z. B. `grenzen` Linehan (2015) ohne «DEAR: ein Anliegen klar formulieren», `genesung` NICE CG78 ohne «Veränderung verläuft unterschiedlich» (SP2-W2-5, Z. 883). Leitlinie: «dieselbe Aussage wird überall gleich belegt»; Angaben stimmen mit dem zentralen Verzeichnis überein (`00-gesamtkohaerenz-und-aufbau.md`). «Quellen in Abbildungen … bleiben bei der Abbildung» (`KORREKTUR-ETAPPE-2B2.md` Z. 63) gilt weiter. | Änderung | `verstehen` › `quellen`: die sechs Einträge im Format der übrigen Seiten, Angaben wie auf `quellen`; auf allen Seiten «Verwendet in» um die Abschnitte mit Legende ergänzen. Danach `node abgleich/verwendet-auf.mjs --ohne-legenden`: 0 mit anderer Angabe |
| SPZ-F-19 | Bildlegenden mit entfallenen Handouts? | Die Herkunft bleibt genannt, aber als frühere Handouts erkennbar: «nach dem früheren Handout …», «nach den früheren Handouts …», «Bezug: früheres Handout …» (Wortlaut 3.6). | Die 42 Textfassungen der Handouts gibt es nicht mehr (`UMBAUPLAN.md` Abschnitt 1); Lesende suchen «das Handout» vergeblich (SP2-W2-9, Z. 887). Die Herkunft ganz zu streichen, würde die Kennzeichnung schwächen (Leitlinie «Visualisierung umsetzen»: Kennzeichnung mit Bezug). Geändert wird nur ein Wort je Legende; die Zeichnungen bleiben (M4). | Änderung | Wortlaut 3.6; die gleichen Wörter in `site.config.json` › `visualPlan` › `source` der fünf Abbildungen |
| SPZ-F-22 | `krise`, `diagnose`, `behandlung` auf der Startseite? Verweise aus dem UMBAUPLAN? | Startseite: nein. Verweise: keine neuen; `UMBAUPLAN.md` wird an die freigegebenen Verweise angepasst. | Der Plan sah für die drei Seiten nie einen Einstieg auf der Startseite vor (`UMBAUPLAN.md` Z. 35, 37 und 40, Spalte «Navigation»: «– (verlinkt aus …)»). Alle drei sind in höchstens zwei Seitenwechseln erreichbar (Statustabelle W2, Z. 17; P2 Z. 297). Ein Einstieg «Krisen begleiten» auf der Startseite könnte als Krisenzugang gelesen werden (Profil «Zuständigkeit statt Krisenzugang», M6). `krise` wird von sechs Seiten verlinkt (`verstehen`, `diagnose`, `behandlung`, `kommunizieren`, `selbstfuersorge`, `fragen`; SP2-W2-10, Z. 888). Neue Verweissätze auf freigegebenen Seiten braucht es dafür nicht (M4). | Änderung (nur Plan) | `UMBAUPLAN.md` Abschnitt 2, Spalte «Navigation» bei `krise`, `kommunizieren` und den übrigen Seiten nach dem heutigen Linkgraph (Hauptinhalt) nachführen, mit Vermerk «nachgeführt mit SPZ-F-22» |

### D · Abbildungen

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-24 | «Ein neuer Trieb»: Person als Pflanze in Kauf genommen? | Ja, die Lesart ist in Kauf genommen. Keine Änderung. | Der Einwand beim Garten war, dass Angehörige die Person «pflegen» oder «stutzen» (Bildsprache-Audit, Z. 12579: «Die betroffene Person darf nicht als Pflanze erscheinen, die Angehörige «pflegen» oder «stutzen»»). Diese Lesart ist mit der Korrektur 2c-K entfallen: Die Giesskanne ist gestrichen, damit das Bild «eine Idee» hat (`KORREKTUR-ETAPPE-2C.md` Z. 150–160). Die Pflanze zeigt den Verlauf (Blatt fällt, Trieb wächst), keine Handlung von Angehörigen an der Person. Die Vertiefung sagt: «Das Bild ist eine Metapher, keine Vorhersage eines Genesungsverlaufs.» Die Fachstelle hat das Bild in diesem Stand freigegeben, nachdem die Selbstprüfung die Nebenbedeutung «Pflanze als passives Wesen» genannt hatte (Z. 6487; Freigabe Z. 74; M1). | keine Änderung | keine |
| SPZ-F-25 | «Zwei Tassen»: Genügt es, dass die Sätze die Aussage tragen? | Ja. | Das Profil verlangt bei Illustrationen Beschriftungen als «Sätze aus Sicht von Menschen» (`00-visuelle-wissensvermittlung.md`, «Ein Bild, eine Idee», Regel 2). Die Sätze sind Teil des Bildes. P1 urteilt «Teilweise» (Z. 3240), nicht «nein». Freigegeben (Z. 60; M1). R2 prüft die Wirkung bei Lesenden ohnehin. | keine Änderung | keine; Hinweis an R2 |
| SPZ-F-26 | DEAR: Kürzel für Laien verständlich? | Ja. | Jeder Schritt nennt neben dem Buchstaben das deutsche Wort und eine Aufgabe in einem Satz, dazu einen Beispielsatz: «D · Beschreiben», «E · Empfinden ausdrücken», «A · Anliegen nennen», «R · Verstärken» (`grenzen` › `dear`, Abbildung 1). Man versteht die Schritte ohne «DEAR MAN»; die Vertiefung erklärt nur die Herkunft. Freigegeben (P4-F-21, Z. 33; M1). | keine Änderung | keine |
| SPZ-F-27 | Mehrere Unterbrechungsstellen im Text, ein Ansatzpunkt im Modell | Keine Änderung. | Der Wortlaut ist entschieden (Korrektur 1e, P2 Z. 1666; M1). Die Abbildung zeigt den Ansatzpunkt im Moment selbst: «Angehörige setzen bei ihrer eigenen Reaktion an.» (Station 5). Der Text nennt, was «ist wieder Ruhe da» möglich ist, und verweist dafür auf «Zwei Sichten». Das widerspricht sich nicht. Das Profil verlangt einen markierten Ansatzpunkt im Modell (`07-visualisierung-umsetzen.md`, «Aufbau einer Darstellung»), nicht alle. | keine Änderung | keine |
| SPZ-F-28 | «Ein freier Abend»: «der Tee wird kalt», Tasse dampft | Gewollt. Bestätigt, nicht neu entschieden. | M1: «Beim «freien Abend» bleibt der Dampf über der Tasse.» (`KORREKTUR-ETAPPE-2A.md` Z. 13, Z. 103). «Wird kalt» beschreibt einen Vorgang; der Tee ist noch warm. | keine Änderung | keine |
| SPZ-F-29 | Braucht der Eisberg einen `entryPoint`? | Nein. | Das Profil verlangt `entryPoint` nur für Kreislauf, Prozesspfad und Modell in Schritten (`07-visualisierung-umsetzen.md`, «Visualisierungsplan», dritter MUSS-Punkt: «Kreislauf, Prozesspfad und Modell in Schritten nennen in `entryPoint` …»). Der Eisberg ist ein Schichtenmodell (K). Die Möglichkeit der Angehörigen steht im Bild («Wie ist es gerade für dich?»). | keine Änderung | keine |
| SPZ-F-30 | «Ein neuer Trieb»: rechts abgeschnittener Sims gewollt? | Nein. Der Sims endet rechts mit derselben runden Kante wie links, innerhalb des Bildausschnitts. | Der Pfad des Simses endet bei x 578 mit einer runden Kante, die `viewBox` («60 44 420 214») endet bei 480. Der Schnitt entstand, als der Ausschnitt nach dem Wegfall der Giesskanne enger wurde (`KORREKTUR-ETAPPE-2C.md` Z. 155), nicht als Gestaltungsentscheid (SP2-B-3, Z. 1792). Links ist die Kante rund. Profil: «Kurven, weiche Formen, runde Linienenden» (`00-visuelle-wissensvermittlung.md`, Regel 5). | Änderung | Wortlaut 3.7 (Zeichnung); neue Freigabe der Abbildung nach der Nachprüfung (M7, Abschnitt 4) |
| SPZ-F-31 | «Tragfähiger» mit 3 px? | Nein. | Der Auftrag lautete: «dieselbe Linie wie «Weniger hilfreich» in der Gegenüberstellung `.puk-say`», «also grau und dünner» (`FREIGABE-ETAPPE-2C-3-1.md` Abschnitt 3 e). Umgesetzt ist dieselbe Linie (`borderline.css` Z. 166: `var(--border-width-strong) solid var(--ui-hairline)`, wie `.puk-say__item` in `components/bundle.css` Z. 661). «Dünner» beschrieb die Linie in `.puk-say`, keine weitere Vorgabe für die Szene. Die Szene von Muster D hat 2 px (`visual-patterns.css` Z. 86); 3 px bräuchte einen Wert ohne Token. Grau gegen Blau und die Bezeichnungen tragen die Unterscheidung (M4, M7). | keine Änderung | keine |

### E · Bedienung und Profil

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-32 | Ausnahme von der Druckregel für Figuren länger als eine A4-Seite? | **Profilebene: Änderung im Design-System-Artefakt, in dieser Website keine.** Vorschlag für das Profil unten (Abschnitt 5.6). | Die Regel «Titel, Kernaussage, Darstellung und Kennzeichnung stehen auf einer A4-Seite» ist ein Profilentscheid vom 11.10.2026 (`00-technische-qualitaet.md`, F); die Druckregeln stehen in `components/bundle.css`. Eine Ausnahme ändert die Regel, nicht die Website (M5, `CLAUDE.md`). Davon getrennt: Bei der Schleife steht nur die Kennzeichnung allein auf der Folgeseite (SP2-B-1, Z. 1790); das verletzt die heutige Regel und wird in der Korrektur behoben (Abschnitt 6, SPZ-43). | Profilebene | für `v-vs-anspannung` und `v-bz-sichten` keine; Schleife siehe SPZ-43 |
| SPZ-F-33 | Wer führt die realen Tests durch, bis wann? | Umfang und Protokoll festgelegt (Abschnitt 5.4). Die Tests führt eine Person durch, nicht Claude; Person und Termin bleiben offen. Zeitpunkt: nach Korrektur und Nachprüfung, vor R1. | Claude kann keine realen Screenreader-, Tastatur-, Touch- und Kontrastmodus-Tests durchführen (Auftrag Abschnitt 5). Profil: «Protokoll, mindestens zwei reale Screenreader-Läufe» (`00-ablauf-pruefung-und-freigabe.md`, Stufe 5); Testplan mit VO/Safari und NV/Firefox (`04-barrierefreiheit-und-test.md`). Grundlage sind die Vorschläge beider Prüfungen (P2 Z. 1797–1827, P1 Z. 3334–3345). Die Tests laufen auf dem korrigierten Stand, weil die Korrektur Figuren bei grosser Schrift ändert (SPZ-2, -3). | Handlung der Fachstelle | keine |
| SPZ-F-34 | E-Mail-Link der Absenderin: Link im Text oder eigenständige Aktion? | **Profilebene: Änderung im Design-System-Artefakt, in dieser Website keine.** Vorschlag für das Profil unten (Abschnitt 5.6). | Die Absenderin entsteht beim Build aus `tools/contract.js` Z. 170; Stil und Zielgrösse kommen aus dem Profil (M5). Heute 23 px hoch; WCAG 2.5.8 ist über den Abstand erfüllt (SP1-42, Z. 3660). Kein Verstoss gegen WCAG 2.2 AA. | Profilebene | keine |

### F · Rechtliches

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-13 | «Die Website setzt keine Cookies» absolut? | In die rechtliche Prüfung aufnehmen. Bis dahin bleibt der heutige Text. Vorschlag für die rechtliche Prüfung: Abschnitt 5.5. | Rechtliche Frage; die rechtliche Prüfung von Impressum und Datenschutz ist offen (Z. 77–79; Auftrag Abschnitt 5). Heute: «Die Website setzt keine Cookies und verwendet keine Dienste, die Besuche auswerten oder Werbung zeigen.» Der Bestand sicherte ab: «Die Website setzt nach aktuellem technischem Stand selbst **keine Tracking- oder Werbe-Cookies**. Beim geprüften Seitenaufruf wurde auch kein Cookie durch den Hosting-Dienst gesetzt. Diese einzelne Beobachtung ist keine Zusicherung für alle Seitenaufrufe oder zukünftigen Hosting-Konfigurationen.» (B `datenschutz.md` Z. 107) | rechtliche Prüfung | keine |
| SPZ-F-14 | Urheberrecht: «Die Inhalte» statt «Infografiken und Handouts» gewollt? | In die rechtliche Prüfung aufnehmen. Bis dahin bleibt der heutige Text. Vorschlag: Abschnitt 5.5. | Rechtliche Frage (Auftrag Abschnitt 5). Heute: «Die Inhalte dürfen im Rahmen der Angehörigenberatung und für den persönlichen Gebrauch verwendet werden.» Bestand: «Die Infografiken und Handouts dürfen …» (B `impressum.md` Z. 101). «Die Inhalte» schliesst auch Texte und angepasste Modelle Dritter ein (z. B. DEAR nach Linehan 2015), über die die Fachstelle nicht allein verfügt. | rechtliche Prüfung | keine |

### G · Netlify und Veröffentlichung

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-35 | «Pretty URLs» lassen oder ausschalten? | Lassen. Die Einstellung bleibt eingeschaltet; die Abweichung vom Export (Links ohne `.html`) ist hingenommen. Nach dem Merge prüft eine Prüfsitzung die Produktion mit denselben Punkten wie die Vorschau, darunter `/verstehen/` → `/verstehen` (Abschnitt 5.3). | Eingeschaltet ist alles geprüft und funktioniert: 85 von 85 Weiterleitungen, 0 defekte Links, Codex P1 widerlegt, weil Netlify `/verstehen/` auf `/verstehen` umleitet (P1 Z. 3566, P2 Z. 2242). Ausgeschaltet wäre dieser Nachweis offen und SPZ-58 würde wichtig. `canonical` und `sitemap.xml` nennen einheitlich die Adressen mit `.html`; Suchmaschinen folgen der kanonischen Adresse. Das Risiko einer Änderung ist grösser als der Nutzen (M4). | Handlung der Fachstelle | keine; SPZ-56 und SPZ-58 bleiben bewusst unkorrigiert (Abschnitt 6) |
| SPZ-F-36 | Wann wird die Team-Anmeldung für Vorschauen wieder eingeschaltet? | Direkt nach R3, vor dem Merge von #659. Bis dahin bleibt sie aus, damit Nachprüfung, reale Tests und R1 bis R3 die Vorschau ohne Anmeldung prüfen können. | Die Fachstelle entscheidet, ob und wie lange der Schutz für Prüfungen aus ist (`PRUEFAUFTRAG-SCHLUSSPRUEFUNG.md` Z. 48). Prüfsitzungen können sich nicht anmelden. Die Vorschau liefert `x-robots-tag: noindex` (P2 Z. 2158); sie zeigt freigegebene Inhalte ohne Personendaten. | Handlung der Fachstelle | keine |
| SPZ-F-37 | Build-Einstellungen vor dem Merge angleichen; wer prüft die Produktion? | Ja, vor dem Merge angleichen (Abschnitt 5.3). Die Produktion prüft nach dem Merge eine Prüfsitzung, die weder gebaut noch entschieden hat, mit den Punkten von Z31-W3-2. Dass mit dem Merge die fünf Workflows und `material-download` auf `main` entfallen, ist hingenommen: Die neue Website hat keine Downloads, alte PDF-Adressen leiten auf Abschnitte, und `react-archiv` (`f46038b`) bewahrt alles. | Die Vorschau wendet `publish = "site"` an, die Produktion baut heute mit «vite» (P2 Z. 2247). Die Build-Einstellungen sind über die Schnittstelle nicht lesbar (P1 Z. 3576 und 3724, P2 Z. 2247). Ohne Angleichung könnte der erste Produktions-Deploy einen Build starten, den es nicht mehr gibt. SP2-SB-1 (Z. 2273): `git diff --name-status origin/main 34a2e58` zeigt das Entfallen. | Handlung der Fachstelle | keine im Website-Ordner |
| SPZ-F-38 | PR #659 wieder Entwurf? | **Erledigt durch die Fachstelle.** PR `christaegger-dot/borderline-angehoerige#659` ist seit 12.10.2026, 18:19 UTC wieder ein Entwurf. Er bleibt ein Entwurf, bis R3 «Go» ergibt. Damit ist SPZ-6 behoben; die Nachprüfung bestätigt das. | Vermerk in `ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md` Abschnitt 6: «seit 12.10.2026, 18:19 UTC wieder ein Entwurf; nachgeprüft: `"draft":true`, ungemergt». Diese Sitzung hat den PR nicht selbst gelesen: Das Repository liegt ausserhalb ihres Zugriffs, und der Auftrag sagt «PR #659 nicht anfassen». `CLAUDE.md`: «Solange Stufen offen sind, bleibt er ein Entwurf.» | Handlung der Fachstelle | keine; Nachprüfung bestätigt `draft: true` |
| SPZ-F-39 | Alte Adressen in anderer Schreibweise weiterleiten? | Nein. Die 404-Seite mit Rückweg genügt. | Betroffen sind Links von aussen in abweichender Schreibung (`/FAQ`, `/Soforthilfe`), die selten sind (SP2-W3N-1, Z. 2169: «Wirkung klein»). Jede Variante wäre eine weitere Handregel in `_redirects` (SPZ-52). Die 404-Seite führt zur Startseite (`404` «Zur Übersicht», mit SPZ-22 «Zur Startseite»). `_redirects` ist freigegeben (Z. 72; M4). | keine Änderung | keine |

**Zu den wichtigen Befunden ohne Frage (SPZ-2, SPZ-3):** Sie gehören in die Korrektur. Leitregel: «Figuren mit frei platzierten Beschriftungen wechseln bei grosser Schrift in die Listenansicht», Profilentscheid 11.10.2026 (`00-technische-qualitaet.md`, B; `07-visualisierung-umsetzen.md`, «Schmale Bildschirme»: Schwellen in `rem`). Umsetzung Abschnitt 6.

## 3. Wortlaute

Je Änderung: Seite › Abschnitt, Wortlaut heute, Wortlaut neu, Quelle. Die Wortlaute gelten so, wie sie hier stehen.

### 3.1 `diagnose` › `begleiterkrankungen` (SPZ-F-4)

- **Ort:** neuer Absatz direkt nach der Liste «depressive Erkrankungen … Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS)», vor «Erkrankungen können gemeinsame Risikofaktoren haben, …».
- **Heute:** –
- **Neu:** «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren. Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.»
- **Quelle:** Bestand `verstehen.md` Z. 271, wörtlich.

### 3.2 `kommunizieren` › `beispiele`, «Eine Bitte um Geld» (SPZ-F-5)

| heute | neu |
| --- | --- |
| «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» | «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen». Sie sind es nicht.» |

- **Quelle:** Bestand `grenzen.md` Z. 378, zweiter Satz wörtlich.

### 3.3 `verstehen` › `mythen`, Annahme «Menschen mit Borderline manipulieren bewusst.» (SPZ-F-6)

- **Ort:** am Ende der Antwort, nach «Bleiben Sie bei der Wirkung, Ihrer Sicherheit und Ihrer Grenze.»
- **Heute:** –
- **Neu:** «Wie Sie in angespannten Gesprächen bei Ihrer Grenze bleiben können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen» und auf der Seite «Grenzen» im Abschnitt «Konsequenz heisst nicht Härte».»
- **Links:** «Wenn Gespräche kippen» → `kommunizieren.html#kippen`; «Konsequenz heisst nicht Härte» → `grenzen.html#konsequenz`. Linktext = Titel der Zielstelle, Klasse `puk-link--inline` wie bei den übrigen Verweissätzen.
- **Quelle:** Verweis des Bestands, `verstehen.md` Z. 181 («Mehr dazu auf Kommunizieren und Grenzen.»); Satzmuster der freigegebenen Verweissätze.

### 3.4 `verstehen` › `mythen`, Annahme «Borderline ist dasselbe wie Trauma.» (SPZ-F-7)

| heute (Reihenfolge) | neu (Reihenfolge) |
| --- | --- |
| «Borderline, PTBS und komplexe PTBS sind verschiedene Diagnosen. PTBS heisst posttraumatische Belastungsstörung. Einzelne Merkmale können sich überschneiden, und die Diagnosen können zusammen auftreten. Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen». In klinischen Studien berichten viele, aber nicht alle Menschen mit Borderline von belastenden Kindheitserfahrungen. Solche Erfahrungen können das Risiko erhöhen. Sie führen aber nicht zwingend zu Borderline, und Borderline kann auch ohne sie entstehen. Die Abgrenzung gehört in eine fachliche Abklärung.» | «Borderline, PTBS und komplexe PTBS sind verschiedene Diagnosen. PTBS heisst posttraumatische Belastungsstörung. Einzelne Merkmale können sich überschneiden, und die Diagnosen können zusammen auftreten. Die Abgrenzung gehört in eine fachliche Abklärung. Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen». In klinischen Studien berichten viele, aber nicht alle Menschen mit Borderline von belastenden Kindheitserfahrungen. Solche Erfahrungen können das Risiko erhöhen. Sie führen aber nicht zwingend zu Borderline, und Borderline kann auch ohne sie entstehen.» |

- **Quelle:** Reihenfolge des Bestands, `verstehen.md` Z. 193. Kein Wort ändert sich.

### 3.5 `verstehen` › `anspannung`, Abbildung «Anspannungskurve» (`v-vs-anspannung`), Stelle 3, «Was hilft» (SPZ-F-8)

| heute | neu |
| --- | --- |
| «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize helfen.» | «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize können helfen.» |

- **Quelle:** Bestand `materialien--text--alarm-modus.md` Z. 51 («… können helfen.»).
- Steht derselbe Satz in der Kurzbeschreibung, der Textfassung oder im Plan (`statement`), gilt dort derselbe Wortlaut.

### 3.6 Bildlegenden mit Handout (SPZ-F-19)

| Seite › Abbildung | heute | neu |
| --- | --- | --- |
| `verstehen` › `v-vs-anspannung` | «… nach dem Handout «Die Anspannungskurve» · Bezugspunkte: …» | «… nach dem früheren Handout «Die Anspannungskurve» · Bezugspunkte: …» |
| `rolle` › `v-ro-weg` | «… nach dem Handout «Der Garten»; Bezug: NICE CG78 (2009).» | «… nach dem früheren Handout «Der Garten»; Bezug: NICE CG78 (2009).» |
| `selbstfuersorge` › `v-sf-abend` | «…; Bezug: Handout «Energie-Konto».» | «…; Bezug: früheres Handout «Energie-Konto».» |
| `kommunizieren` › `v-ko-tassen` | «… nach den Handouts «Zuhören ohne Zustimmen» und «Wenn Worte treffen»; …» | «… nach den früheren Handouts «Zuhören ohne Zustimmen» und «Wenn Worte treffen»; …» |
| `genesung` › `v-ge-trieb` | «… nach den Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; …» | «… nach den früheren Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; …» |

- Sonst ändert sich in den Legenden nichts. «Eigene didaktische Darstellung» bleibt am Anfang.
- In `site.config.json` › `visualPlan` › `source` dieser fünf Abbildungen gilt dasselbe Wort. Beim Eisberg (`v-vs-eisberg`) nennt nur der Plan das Handout, die Legende nicht; dort bleibt der Plan, wie er ist.

### 3.7 `genesung` › Abbildung «Ein neuer Trieb» (`v-ge-trieb`), Zeichnung (SPZ-F-30)

- **Heute:** Der erste Pfad (Sims) beginnt links bei x 84 mit runder Kante und endet bei x 578 («… C574 226 578 230 578 236 …»), ausserhalb der `viewBox` «60 44 420 214» (rechter Rand x 480). Rechts ist der Sims gerade abgeschnitten.
- **Neu:** Der Sims endet rechts innerhalb der `viewBox`, mit derselben runden Kante wie links und gleich weit vom Rand wie links (links 24 Einheiten vom Rand x 60, also rechtes Ende bei etwa x 456). Dazu werden nur die x-Werte des rechten Endes im Pfad versetzt.
- **Unverändert:** `viewBox`, Topf, Pflanze, Blatt, Trieb, die zwei Sätze, Kernaussage, Erklärtext, Kurzbeschreibung, Vertiefung und Legende.
- **Ansehen:** bei 1280 und 360 px, Standard und «kontrast». Danach neue Freigabe der Abbildung (Abschnitt 4).

### 3.8 Weitere Wortlaute aus den optionalen Befunden (Abschnitt 6)

| Nr. | Seite › Ort | heute | neu | Befund, Quelle |
| --- | --- | --- | --- | --- |
| W1 | `404`, Text | «Von der Übersicht aus finden Sie alle Seiten.» | «Von der Startseite aus erreichen Sie alle Seiten.» | SPZ-22; Name wie im `<title>` und im Logo («Startseite») |
| W2 | `404`, Link | «Zur Übersicht» | «Zur Startseite» | SPZ-22 |
| W3 | `site.config.json` › `404` › `description` | «Diese Seite gibt es nicht. Von der Übersicht aus finden Sie alle Seiten.» | «Diese Seite gibt es nicht. Von der Startseite aus erreichen Sie alle Seiten.» | SPZ-22 |
| W4 | `site.config.json` › `index` › `description` | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen zu Verstehen, Beziehungen und Grenzen sowie die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen, von Verstehen und Grenzen bis Genesung und Unterstützung, und die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» | SPZ-19; acht Einstiege auf `index` › `einstiege` |
| W5 | `site.config.json` › `fragen` › `description` | «…, Schutz und dem eigenen Leben, je mit Verweis auf die ausführliche Seite.» | «…, Schutz und dem eigenen Leben, meist mit Verweis auf die ausführliche Seite.» | SPZ-20; 2 von 27 Antworten ohne Verweis (SP1-18) |
| W6 | `site.config.json` › `impressum-datenschutz` › `description` | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, keine Dienste anderer Anbieter beim Lesen.» | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, beim Lesen keine Daten an andere Anbieter als den Dienst, der die Website ausliefert.» | SPZ-20; Wortlaut der Seite, Abschnitt «Keine Dienste anderer Anbieter». Ändert die rechtliche Prüfung den Satz zu Cookies (SPZ-F-13), folgt die Beschreibung |
| W7 | `behandlung` › `rollen` | «Skills anbieten und vermitteln, zum Beispiel in der DBT» | «Skills anbieten und vermitteln, zum Beispiel in der Dialektisch-Behavioralen Therapie (DBT)» | SPZ-26; Wortlaut wie `diagnose`, `grenzen`, `selbstfuersorge`, `ueber` |
| W8 | `behandlung` › `therapieformen` | «Nach NICE sollen Medikamente …» | «Nach der britischen Behandlungsleitlinie NICE sollen Medikamente …» | SPZ-26; Wortlaut wie `diagnose` › `begleiterkrankungen` |
| W9 | `unterstuetzung` › `buecher` | «Englischsprachiges Standardwerk zu BPS bei Jugendlichen.» | «Englischsprachiges Standardwerk zu Borderline bei Jugendlichen.» | SPZ-26 (SP2-S-7) |
| W10 | `unterstuetzung` › `buecher` | «Aguirre leitet das McLean-Hospital-Programm für Adoleszente.» | «Aguirre leitet das McLean-Hospital-Programm für Jugendliche.» | SPZ-26 (SP2-S-7) |
| W11 | `unterstuetzung` › `buecher` | «Für: Partner, Familienmitglieder» (zweimal), «Für: Partner, Angehörige», «Für: Partner in Paarbeziehungen», «Für: Partner, Familienmitglieder, enge Freunde», «Für: Angehörige, Partner» | «Für: Partnerinnen und Partner, Familienmitglieder», «Für: Partnerinnen und Partner, Angehörige», «Für: Partnerinnen und Partner in Paarbeziehungen», «Für: Partnerinnen und Partner, Familienmitglieder, enge Freundinnen und Freunde», «Für: Angehörige, Partnerinnen und Partner» | SPZ-33 |
| W12 | `unterstuetzung` › `buecher` | «Kommunikationsratgeber speziell für Partner in einer Borderline-Beziehung.» | «Kommunikationsratgeber speziell für Partnerinnen und Partner in einer Borderline-Beziehung.» | SPZ-33 (SP1-30) |
| W13 | `grenzen` › `gewalt` | «… allfällige Zeugen.» | «… allfällige Zeuginnen und Zeugen.» | SPZ-33 |
| W14 | `grenzen` › `konsequenz` | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen sie an.» | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen Sie die Grenze an.» | SPZ-36 (SP2-S-2) |
| W15 | `grenzen`, Kopf | «Wie die andere Person reagiert, können sie aber nicht garantieren.» | «Wie die andere Person reagiert, können Grenzen aber nicht garantieren.» | SPZ-36 (SP1-31) |
| W16 | `krise` › `danach`, Vertiefung «Vertrauen wieder aufbauen» | «Mir ist noch beklemmend zumute.» | «Mir ist noch beklommen zumute.» | SPZ-36 (SP2-S-3); Bestand `unterstuetzen--krise.md` Z. 214, nur das falsche Wort berichtigt |
| W17 | `fragen` › `verlauf` | «… oder eine Posttraumatische Belastungsstörung (PTBS) …» | «… oder eine posttraumatische Belastungsstörung (PTBS) …» | SPZ-37 (SP2-S-8) |
| W18 | `quellen` › `begriffe`, Vertiefung «Die neun Kriterien im DSM-5-TR» | «Im DSM-5-TR gehören mindestens 5 der folgenden 9 Merkmale …» | «Im DSM-5-TR gehören mindestens fünf der folgenden neun Merkmale …» | SPZ-37 (SP2-S-9); wie `diagnose` › `abklaerung` |
| W19 | `quellen` | «Veröffentlicht am 29.06.2022.», «Version 2.0 vom 14.11.2022.», «Gültigkeit bis 31.05.2026» | «Veröffentlicht am 29. Juni 2022.», «Version 2.0 vom 14. November 2022.», «Gültigkeit bis 31. Mai 2026» | SPZ-37 (SP2-S-10); Form wie «22. Januar 2020» |
| W20 | `unterstuetzung` › `buecher` | «Für: Jüngere Kinder ab 4 Jahren», «Für: Alle, die verstehen wollen», «Für: Alle Angehörigen, auch Betroffene selbst», «Für: Erwachsene Kinder von Betroffenen» | «Für: jüngere Kinder ab 4 Jahren», «Für: alle, die verstehen wollen», «Für: alle Angehörigen, auch Betroffene selbst», «Für: erwachsene Kinder von Betroffenen» | SPZ-37 (SP2-S-12) |
| W21 | `site.config.json` › `editorialStatus` | «Entwurf – fachliche Prüfung ausstehend» | «Fachlich freigegeben am TT.MM.JJJJ» (Datum nach SPZ-F-2) | SPZ-1, SPZ-F-2; erst in Schritt 3 von Abschnitt 6 |

## 4. Neue Sätze zur Freigabe

**Freigabe im Auftrag der Fachstelle:** Die Sätze dieser Liste sind im hier stehenden Wortlaut fachlich freigegeben, von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026). Die Nachprüfung bestätigt, dass sie wörtlich und am genannten Ort stehen. Weicht ein Wortlaut ab, gilt die Freigabe für ihn nicht.

| Nr. | Seite › Ort | Satz | Art | Grundlage |
| --- | --- | --- | --- | --- |
| N1 | `diagnose` › `begleiterkrankungen` | «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren.» | Bestand, wörtlich | `verstehen.md` Z. 271 |
| N2 | `diagnose` › `begleiterkrankungen` | «Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.» | Bestand, wörtlich | `verstehen.md` Z. 271 |
| N3 | `kommunizieren` › `beispiele` | «Sie sind es nicht.» | Bestand, wörtlich | `grenzen.md` Z. 378 |
| N4 | `verstehen` › `mythen` | «Wie Sie in angespannten Gesprächen bei Ihrer Grenze bleiben können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen» und auf der Seite «Grenzen» im Abschnitt «Konsequenz heisst nicht Härte».» | Verweissatz, neu | Bestand `verstehen.md` Z. 181 |
| N5 | `verstehen` › `mythen` | «Die Abgrenzung gehört in eine fachliche Abklärung.» | nur neuer Ort im selben Absatz | `verstehen.md` Z. 193 |
| N6 | `verstehen` › `anspannung`, Abbildung, Stelle 3 | «Eine Pause, Abstand und weniger Reize können helfen.» | geändert | `alarm-modus.md` Z. 51 |
| N7 | Legenden von fünf Abbildungen | «nach dem früheren Handout …», «nach den früheren Handouts …», «Bezug: früheres Handout «Energie-Konto».» (3.6) | geändert, Kennzeichnung | SPZ-F-19 |
| N8 | `404` | «Von der Startseite aus erreichen Sie alle Seiten.» und Link «Zur Startseite» | geändert | SPZ-22 |
| N9 | Meta-Beschreibungen | W3 bis W6 | geändert | SPZ-19, SPZ-20, SPZ-22 |
| N10 | `behandlung`, `unterstuetzung` | W7 bis W10 | geändert, Fachwort ausgeschrieben | SPZ-26 |
| N11 | `unterstuetzung`, `grenzen` | W11 bis W13 | geändert, Paarformen | SPZ-33 |
| N12 | `grenzen`, `krise` | W14 bis W16 | geändert, Grammatik | SPZ-36 |
| N13 | `fragen`, `quellen`, `unterstuetzung` | W17 bis W20 | geändert, Schreibweise | SPZ-37 |
| N14 | `verstehen` › Quellenblock und «Verwendet in» aller Seiten | Einträge und Abschnittsnamen nach SPZ-F-18 | ergänzt, Angaben wie auf `quellen` | SPZ-F-18 |
| N15 | Fusszeile aller Seiten | «Redaktioneller Status: Fachlich freigegeben am TT.MM.JJJJ» | geändert | SPZ-F-2 |

**Die Seite `404`** ist mit N8 und W3 fachlich freigegeben (SPZ-14).

**Neue Freigabe von Abbildungen (M7):** Die Abbildungen «Anspannungskurve» (`v-vs-anspannung`, N6) und «Ein neuer Trieb» (`v-ge-trieb`, 3.7) ändern sich im Inhalt. Ihre Freigabe trägt eine Entscheidsitzung nach der Nachprüfung im Auftrag der Fachstelle ein, wenn die Nachprüfung sie bei 1280 und 360 px, Standard und «kontrast», angesehen und den Freundin-Test bestätigt hat. Bis dahin setzt die bauende Sitzung `approvalStatus` dieser zwei Zeilen auf «ausstehend». Die Abbildungen, deren Darstellung sich nur bei grosser Schrift ändert (SPZ-2, -3, -38), bleiben freigegeben; am Inhalt ändert sich nichts (wie NK31-1, `FREIGABE-ETAPPE-2C-3-1.md` Abschnitt 3 d). Dasselbe gilt für die Legenden in N7: Nur ein Wort der Kennzeichnung ändert sich, freigegeben mit dieser Liste.

## 5. Handlungen für die Fachstelle

Reihenfolge im Ablauf: **vor der Korrektur** – nichts. **Während Korrektur und Nachprüfung** – Netlify unverändert lassen. **Nach der Nachprüfung, vor R1** – 5.4. **Vor R3** – 5.5. **Nach R3, vor dem Merge** – 5.1, 5.2, 5.3 a. **Nach dem Merge** – 5.3 b.

### 5.1 PR #659 (SPZ-F-38)

1. Erledigt: Der PR ist seit 12.10.2026, 18:19 UTC ein Entwurf.
2. Er bleibt ein Entwurf, bis R3 «Go» ergibt und `node tools/gate.mjs --production` ohne blockierende Befunde besteht.
3. Vor dem Merge den Export mit `--production` neu erzeugen (Fusszeile nach SPZ-F-2) und auf den Umzugs-Branch übertragen; danach die Vorschau noch einmal ansehen.
4. In der Beschreibung von #659 festhalten: Mit dem Merge entfallen auf `main` die fünf Workflows und `netlify/functions/material-download.ts`; sie bleiben in `react-archiv` (`f46038b`).
5. Erst dann «Ready for review» und Merge, durch die Fachstelle.

### 5.2 Schutz der Vorschauen (SPZ-F-36)

1. Bis R3 aus lassen, damit Nachprüfung, reale Tests und R1 bis R3 die Vorschau ohne Anmeldung prüfen können.
2. Direkt nach R3, vor dem Merge: im Netlify-Projekt die Team-Anmeldung für Vorschauen einschalten.
3. Kontrolle: Die Projektangaben zeigen `requiresSSOTeamLogin: true`; die Vorschau antwortet ohne Anmeldung nicht mehr mit dem Inhalt.

### 5.3 Netlify-Projekt (SPZ-F-35, SPZ-F-37)

a) **Vor dem Merge:**
1. In den Build-Einstellungen des Projekts nachsehen, was heute steht (Basisordner, Build-Befehl, Publish-Ordner, Funktionsordner).
2. Angleichen an die neue Fassung: kein Build-Befehl, Publish-Ordner `site`, kein Funktionsordner. Steht dasselbe in der `netlify.toml` des Umzugs-Branchs, gilt die Datei; die Projekteinstellungen sollen ihr nicht widersprechen.
3. «Pretty URLs» bleibt eingeschaltet (SPZ-F-35). Nichts daran ändern.
4. Diese Einstellungen in der Beschreibung von #659 festhalten.

b) **Nach dem Merge:**
1. Eine Prüfsitzung, die weder gebaut noch entschieden hat, prüft die Produktion: die zehn Punkte von Z31-W3-2, alle 85 Weiterleitungen, die Kopfzeilen gegen `_headers`, `/verstehen/` → `/verstehen` und dass die Seiten ihre Stile laden.
2. Ergebnis mit Beleg in `PRUEFBERICHT.md`.
3. Bei einem Befund: Fachstelle entscheidet über Rücknahme oder Korrektur.

### 5.4 Reale Tests (SPZ-F-33)

- **Wer:** eine Person, nicht Claude. Person und Termin bestimmt die Fachstelle; beides ist offen.
- **Wann:** nach Korrektur und Nachprüfung, auf der Vorschau des korrigierten Stands, vor R1.
- **Vorlage:** `templates/website/website-screenreader-test.example.json`. Je Lauf festhalten: Datum, Person, Gerät, System-, Browser- und Screenreader-Version, Sprache Deutsch; je Aufgabe «bestanden», «nicht bestanden» oder «nicht geprüft» mit Notiz.
- **Kombinationen:**

  | Kürzel | Kombination | Pflicht |
  | --- | --- | --- |
  | NV | NVDA (aktuell) + Firefox, Windows, Laptop mit Hardwaretastatur | ja |
  | VO-mac | VoiceOver + Safari, macOS | ja |
  | HK | Windows-Kontrastmodus (Kontrastdesign dunkel und hell) + Edge, ohne Screenreader | ja |
  | T | Telefon mit Touch, ohne Screenreader, Browser-Schriftgrösse auf Maximum | ja |
  | VO-iOS | VoiceOver + Safari, iPhone | empfohlen |
  | TB | TalkBack + Chrome, Android | empfohlen |

- **Aufgaben:** A1 bis A14 aus dem Vorschlag von Prüfung 2 (`PRUEFBERICHT.md` Z. 1812–1825), unverändert. Dazu aus Prüfung 1 (Z. 3343–3344):
  - A15 (T, NV): Fusszeile und Absenderin: «Impressum», «Datenschutz» und der E-Mail-Link der Absenderin sind mit einem Tippen ohne Fehltipp treffbar und mit Tab erreichbar.
  - A16 (NV, VO-mac): `quellen`: Sprung über «Weg durch die Seite», danach beginnt das Lesen an der richtigen Stelle.
- **Bestanden,** wenn alle Pflichtkombinationen bei ihren Aufgaben kein «nicht bestanden» haben (NV und VO-mac: A1–A11, A14, A16; HK: A13; T: A12, A15). Jede Abweichung wird als Befund mit Seite, Aufgabe und Kombination in `PRUEFBERICHT.md` eingetragen; über Korrekturen entscheidet die Fachstelle.

### 5.5 Rechtliche Prüfung (SPZ-F-13, SPZ-F-14; dazu S-Nr. 5 und 6, Z31-F-9, Z31-F-19, NK-F-8)

- **Wann:** vor R3. Bis zum Ergebnis bleiben die heutigen Texte.
- **Zusätzlich aufnehmen:**
  - **Cookies (SPZ-F-13).** Vorschlag, aus dem Bestand: «Die Website setzt selbst keine Cookies und verwendet keine Dienste, die Besuche auswerten oder Werbung zeigen. Beim geprüften Seitenaufruf wurde auch kein Cookie durch den Hosting-Dienst gesetzt. Diese einzelne Beobachtung ist keine Zusicherung für alle Seitenaufrufe oder zukünftigen Hosting-Konfigurationen.» (Bestand `datenschutz.md` Z. 107, Satz 2 und 3 wörtlich; im ersten Satz kommt «selbst» dazu.)
  - **Urheberrecht (SPZ-F-14).** Vorschlag: «Die Abbildungen dürfen im Rahmen der Angehörigenberatung und für den persönlichen Gebrauch verwendet werden.» (Bestand `impressum.md` Z. 101; «Infografiken und Handouts» → «Abbildungen», weil es keine Handouts mehr gibt). Zu klären ist, ob die Fachstelle auch Texte freigeben will und ob angepasste Modelle Dritter (z. B. DEAR nach Linehan 2015) ausgenommen werden müssen.
  - **Lizenz der Schrift (SPZ-49):** ob der Lizenztext der Schrift Rubik (SIL Open Font License) mit der Website ausgeliefert werden muss.
- **Nicht Teil dieser Entscheide:** NK-F-3 (Ausgabe von «Schluss mit dem Eiertanz») bleibt offen bis vor R3.

### 5.6 Vorschläge für das Profil (Design-System-Artefakt)

Leitlinien, Starter und Komponenten werden in diesem Repository nicht geändert (`CLAUDE.md`). Die Vorschläge gehen an das Design-System-Artefakt «PUK Zürich Website-Profil»:

1. **Druckregel (SPZ-F-32):** Ergänzen: «Ist eine Darstellung mit ihrer Liste länger als eine A4-Seite, stehen Titel, Kernaussage und der Anfang der Darstellung auf einer Seite; die Darstellung darf danach umbrechen, die Kennzeichnung folgt direkt auf das Ende der Darstellung. Eine leere Seite davor entsteht nicht.» In `components/bundle.css` dafür `break-inside: avoid` nur auf Titel und Kernaussage, nicht auf die ganze Figur, wenn sie länger als eine Seite ist.
2. **E-Mail-Link der Absenderin (SPZ-F-34):** Die Absenderin als eigenständige Aktion behandeln, weil sie auf jeder Seite der einzige Kontaktweg ist: Zielhöhe 44 px über den Innenabstand des Links, ohne die Zeile sichtbar zu verändern.
3. **Fusszeile und Gate (SPZ-1, SPZ-F-2):** `gate.mjs --production` blockiert, wenn `editorialStatus` «Entwurf» enthält oder kein Datum nennt. Die Vorlage im Starter nennt das Format «Fachlich freigegeben am TT.MM.JJJJ».
4. Die übrigen Profilbefunde der Schlussprüfung: SPZ-34 (Webtexte des Starters), SPZ-39 (Ziffernkreise wachsen nicht mit), SPZ-40 (Trennung langer Wörter), SPZ-47 (`gate.html`), SPZ-48 (Kopfzeilen: CSP, HSTS, `Cache-Control`), SPZ-49 (Lizenztext der Schrift im Export), SPZ-50 (C2PA-Manifest im Logo), SPZ-51 (ungenutztes CSS), SPZ-53 (`robots.txt` mit Hinweis auf `sitemap.xml` im Export).

## 6. Folgen für den Korrekturauftrag

### Ablauf

1. **Korrektur** durch eine bauende Sitzung, nach einem Korrekturauftrag aus diesem Abschnitt. Abgleich: Status mit «(SPZ-E)», Bemerkung mit der ID; neue Werte in `abgleich/README.md`; `node abgleich/pruefe-abgleich.mjs` meldet 0 ohne Fundstelle.
2. **Nachprüfung** durch eine Sitzung, die weder gebaut, noch geprüft, noch entschieden hat.
3. **Freigabe eintragen:** neue Freigabe der zwei Abbildungen (Abschnitt 4) durch eine Entscheidsitzung im Auftrag der Fachstelle; danach setzt eine bauende Sitzung `editorialStatus` (SPZ-F-2, W21) und die 98 Textzeilen (SPZ-F-3), baut neu und trägt die Freigabe in den Prüfbericht ein.
4. Reale Tests (5.4), rechtliche Prüfung und NK-F-3 (5.5), danach R1, R2, R3.

### Wichtige Befunde

| ID | Folge |
| --- | --- |
| SPZ-1 | Fusszeile: Wortlaut und Zeitpunkt nach SPZ-F-2 (Schritt 3). Profilvorschlag 5.6 Nr. 3 |
| SPZ-2 | Eisberg: Die Container-Schwelle in `borderline.css` Z. 103–125 (`@container (max-width:800px)`) in `rem` oder `em` fassen, so dass die Figur bei 200 % Schrift in die Listenansicht wechselt. Leitregel: «Figuren mit frei platzierten Beschriftungen wechseln bei grosser Schrift in die Listenansicht» (Profilentscheid 11.10.2026). Prüfen bei 1280 und 1440 px mit 100, 150 und 200 % Schrift, Standard und «kontrast», durch Ansehen (nicht nur `scrollWidth`) |
| SPZ-3 | Bedeutungsschleife: dasselbe für `borderline.css` Z. 19 und 26 (Schwelle `700px`, feste Kreisanordnung), so dass die Schleife ab 150 % Schrift als gestufte Liste mit «zurück zu Station 1» steht. Prüfen wie SPZ-2 |
| SPZ-4 | SPZ-F-4: Wortlaut 3.1, Abgleich des Diagnostik-Teils |
| SPZ-5 | SPZ-F-5: Wortlaut 3.2, Abgleichzeile |
| SPZ-6 | Erledigt durch die Fachstelle (SPZ-F-38); die Nachprüfung bestätigt `draft: true` |

### Optionale Befunde, die in die Korrektur gehören

| ID | Folge |
| --- | --- |
| SPZ-7 | `abgleich/verstehen.md` Nr. 116 nach SPZ-F-6. Die übrigen 16 Zeilen mit «folgt mit Etappe 2»: je Zeile prüfen, ob der Verweis heute steht (dann Status und Fundstelle nachführen) oder nicht (dann «entfällt» mit Grund, z. B. «Verweis durch Navigation und Verweissätze der Freigaben 2b und 2c ersetzt») |
| SPZ-8 | `site.config.json` › `v-ix-beratung` › `reason` an den heutigen Stand anpassen: Die Beratung der Fachstelle steht auf `index`, `unterstuetzung` wiederholt Kosten und Vertraulichkeit (wie `v-un-beratung` › `reason` seit der Freigabe 2c) |
| SPZ-9 | Veraltete Begründungen im Plan berichtigen: `v-ix-haltung` ohne «Muster H», `grenzen` › `saetze` nach dem heutigen Abschnitt |
| SPZ-11 | Die Abgleichzeilen der Liste in SPZ-11 berichtigen (Status, Fundstelle, Bemerkung), darunter `verstehen` Nr. 91 nach SPZ-F-9 und Nr. 240, 288 nach SPZ-F-8 |
| SPZ-14 | `404` freigegeben mit diesem Dokument (Abschnitt 4) |
| SPZ-15 | SPZ-F-8 |
| SPZ-17 | SPZ-F-7 |
| SPZ-19 | W4 |
| SPZ-20 | W5, W6 |
| SPZ-22 | W1 bis W3 |
| SPZ-23 | SPZ-F-18 |
| SPZ-26 | W7 bis W10 |
| SPZ-28 | SPZ-F-19 |
| SPZ-29, SPZ-30 | SPZ-F-22 (nur `UMBAUPLAN.md`) |
| SPZ-31, SPZ-32 | SPZ-F-15 |
| SPZ-33 | W11 bis W13 |
| SPZ-36 | W14 bis W16 |
| SPZ-37 | W17 bis W20 |
| SPZ-38 | «Zwei Sichten»: Schwelle `@container (max-width:560px)` (`borderline.css` Z. 75, 86) in `rem` oder `em`, wie SPZ-2 |
| SPZ-41 | SPZ-F-30, Wortlaut 3.7 |
| SPZ-43 | Nur die Schleife: Die Kennzeichnung im Druck an die Darstellung binden (Regel in `borderline.css`, nur mit Tokens), so dass Titel, Kernaussage, Darstellung und Kennzeichnung auf einer A4-Seite stehen. Für `v-vs-anspannung` und `v-bz-sichten` Profilebene (SPZ-F-32) |
| SPZ-44 | `abgleich/bedienung.mjs`: `404` in `PAGES` aufnehmen |
| SPZ-46 | SPZ-F-3 (Schritt 3) |
| SPZ-52 | Im `README.md` der Website die Schritte für den Produktions-Export festhalten: in einen leeren Zielordner exportieren, `_redirects` von Hand kopieren, danach Weiterleitungen und Kopfzeilen auf der Vorschau prüfen |
| SPZ-54 | `_redirects`: Für die `-v1`-Fassungen der Handouts, deren `-v3`-Fassung auf einen Abschnitt leitet, eine Regel mit demselben Ziel, vor der Platzhalterregel `/infografiken/*`. Welche `-v1`-Adressen es gab, steht in der alten `client/public/_redirects` auf `main` von `borderline-angehoerige` (nur lesen) |

### Optionale Befunde, die bewusst nicht korrigiert werden

| ID | Grund |
| --- | --- |
| SPZ-10 | Die Prüfungen haben Bestandssatz und Vollständigkeit mit eigenen Skripten geprüft; ein strengeres Werkzeug würde wegen der Normalisierung 30 bis 101 Zeilen melden (Z. 278–281) und ist eine eigene Arbeit, nicht Teil dieser Korrektur. |
| SPZ-12 | Die Liste «Entfallene Sätze» ist der Verlauf von 2a-K; der aktuelle Stand steht im Abgleich. |
| SPZ-13 | Nur zur Kenntnis; mit Freigabe 2a abgedeckt. |
| SPZ-16 | Guillemets im Originaltitel sind die Schweizer Schreibweise der Website; der Titel bleibt erkennbar. |
| SPZ-18 | Die Statustabelle führt die nächste Prüfsitzung nach; die Entscheidsitzung ändert sie nicht (Auftrag Abschnitt 7). |
| SPZ-21 | «Beratung der Fachstelle Angehörigenarbeit» ist als Linktext ausserhalb des Satzes verständlicher als «Beratung für Sie» (WCAG 2.4.4); «Borderline verstehen» ist der Titel der Seite. |
| SPZ-24 | SPZ-F-16. |
| SPZ-25 | Die Dachzeile «Selbstfürsorge» nennt das Thema, der Titel «Auf sich achten» die Seite; das widerspricht sich nicht. |
| SPZ-27 | «Fachleute» und «Fachpersonen» bedeuten dasselbe; Änderungen auf freigegebenen Seiten wären nicht nötig (M4). |
| SPZ-34, SPZ-39, SPZ-40, SPZ-45, SPZ-47 bis SPZ-51, SPZ-53 | Profilebene (5.6). |
| SPZ-35 | Stil auf freigegebenen Seiten, ohne fachliches oder grammatisches Problem; keine Umformulierung «bei der Gelegenheit» (M4). |
| SPZ-42 | Den zweiten Satz trägt der Text direkt nach der Abbildung: «Anerkennen heisst nicht automatisch zustimmen. … Das ist keine Lüge, sondern Respekt.»; freigegeben mit 2b. |
| SPZ-55 | SPZ-F-39. |
| SPZ-56, SPZ-58 | SPZ-F-35: «Pretty URLs» bleibt an; SPZ-58 bleibt damit optional. |
| SPZ-57 | SPZ-F-36 (5.2). |
| SPZ-59 | Die Zahlen gehören zum Verlauf der Selbstprüfung 3-2; das Ergebnis selbst stimmt. |
| SPZ-60 | SPZ-F-37 (5.1 Nr. 4, 5.3). |

## 7. Zählung

| Art | Zahl | Fragen |
| --- | ---: | --- |
| keine Änderung | 17 | SPZ-F-1, -9, -10, -11, -12, -16, -17, -20, -23, -24, -25, -26, -27, -28, -29, -31, -39 |
| Änderung | 12 | SPZ-F-2, -3, -4, -5, -6, -7, -8, -15, -18, -19, -22, -30 |
| Profilebene | 2 | SPZ-F-32, -34 |
| Handlung der Fachstelle | 5 | SPZ-F-33, -35, -36, -37, -38 (erledigt) |
| rechtliche Prüfung | 2 | SPZ-F-13, -14 |
| zurück an die Fachstelle | 1 | SPZ-F-21 |
| **Summe** | **39** | |

**Zurück an die Fachstelle:** SPZ-F-21 (Bezeichnung zu F60.31, nur mit der amtlichen Fassung der ICD-10-GM 2024).

**Offen nach diesen Entscheiden:** SPZ-F-21; die Handlungen in Abschnitt 5; die rechtliche Prüfung mit SPZ-F-13 und -14; NK-F-3; die neue Freigabe von zwei Abbildungen nach der Nachprüfung. Alle Stufen in `PRUEFBERICHT.md` bleiben «offen».
