# Entscheide · Borderline-Website · Fragen der Schlussprüfung (SPZ-F-1 bis -39)

## 1. Kopf

- **Stand:** 12.10.2026. Geprüft ist `templates/website/borderline-angehoerige/` auf `main`, Stand `3a6e966`. Seit `3a6e966` sind auf `main` nur `ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md` und `PRUEFBERICHT.md` hinzugekommen (`git diff --stat 3a6e966 3f9a1e4`: 1 Datei, nur der Auftrag). Inhalte, Code und Werkzeuge sind also gleich wie im geprüften Stand `f1d6572`.
- **Auftrag:** `ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md` (Commits `9b6a45b`, `b3e3626`).
- **Delegation (Wortlaut des Auftrags, Abschnitt 1):** «Die Fachstelle hat am 12.10.2026 entschieden, dass Claude diese Fragen «selbständig anstelle der Fachstelle» beantwortet.» Jeder Entscheid in diesem Dokument ist **von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026)**. Kein Entscheid ist der Entscheid einer Person der Fachstelle.
- **Unabhängigkeit:** Diese Sitzung hat an der Website weder gebaut noch korrigiert noch geprüft, auch nicht an der Schlussprüfung, ihrer Zusammenführung oder an der Vorbereitung dieses Auftrags. Nach dem Auftrag (Abschnitt 2) ist sie jetzt von der Korrektur und der Nachprüfung ausgeschlossen.
- **Was sich geändert hat:** nur diese Datei und ein Unterabschnitt in `PRUEFBERICHT.md`. Keine Inhalte, kein Code, keine Werkzeuge, kein Abgleich. Die Statustabelle bleibt unverändert, jede Stufe bleibt «offen».
- **Gelesene Grundlagen:**
  - `CLAUDE.md`, `guidelines/00-ablauf-pruefung-und-freigabe.md`, der Entscheidauftrag ganz
  - aus den Leitlinien die Stellen, auf die sich Entscheide stützen: `00-technische-qualitaet.md` Z. 23 (Listenansicht bei grosser Schrift), Z. 36, Z. 57 (Druckregel); `07-visualisierung-umsetzen.md` Z. 19, 31 (`entryPoint`), Z. 74 (Schwellen in rem), Z. 126–127; `03-typografie-und-flaechen.md` Z. 60–62
  - `PRUEFBERICHT.md`: «Fachliche Freigabe der Fachstelle» (Z. 28–84), der Block der Zusammenführung ganz (Z. 86–262), dazu je Frage die Belege in Prüfung 2 (Z. 264–2307) und Prüfung 1 (Z. 2308–3725)
  - frühere Entscheide: `FREIGABE-ETAPPE-2A.md`, `FREIGABE-ETAPPE-2B.md`, `FREIGABE-ETAPPE-2C-3-1.md`, `KORREKTUR-ETAPPE-1C.md` bis `-1I.md`, `KORREKTUR-ETAPPE-2A.md`, `KORREKTUR-ETAPPE-2C.md`, `BAUAUFTRAG-ETAPPE-2B.md`, `BAUAUFTRAG-ETAPPE-2C1.md`, `BAUAUFTRAG-ETAPPE-2C2.md`
  - der Bestand: Branch `borderline-bestand`, `bestand/borderline-angehoerige/texte/` (unten «Bestand `<datei>`»); dazu `abgleich/<seite>.md`, `UMBAUPLAN.md`, `site.config.json`, `_redirects`, `content/*.html`
  - Befehle (nur lesend): `node abgleich/verwendet-auf.mjs --ohne-legenden` («85 Einträge, 6 mit anderer Angabe»), `node tools/gate.mjs --production` («1 blockierend» = `review-report`, «1 Hinweise»); `git status` danach leer

**Massstäbe** (Auftrag, Abschnitt 4): Bestehende Entscheide gelten (M1). Fachliche Vorsicht vor Kürze, im Zweifel der Wortlaut des Bestands (M2). Keine neue fachliche Aussage ohne Quelle (M3). Freigegebene Seiten nur so weit ändern, wie die Frage es verlangt (M4). Profil vor Website (M5). Haltung und Zuständigkeit (M6). Bildsprache und erneute Freigabe geänderter Abbildungen (M7).

## 2. Entscheide

Zeilen in `content/*.html` sind die Zeile des Abschnitts (eine Zeile je `<section>`). Zeilenangaben zu `PRUEFBERICHT.md` gelten für den Stand `3a6e966`, also vor dem Eintrag dieser Entscheide; seither stehen alle Zeilen ab Z. 86 um die Länge des neuen Unterabschnitts weiter unten. «Bestand» heisst `bestand/borderline-angehoerige/texte/` auf `borderline-bestand`.

### A · Verfahren und Status

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-1 | Prüfauftrag bestätigen | Der Prüfauftrag `PRUEFAUFTRAG-SCHLUSSPRUEFUNG.md` («Entwurf zur Bestätigung», Z. 1) gilt mit der Delegation vom 12.10.2026 als bestätigt, ohne Änderung. Eingetragen in diesem Dokument und im Unterabschnitt «Entscheide zur Schlussprüfung» von `PRUEFBERICHT.md` | Entscheidauftrag Abschnitt 5, Zeile SPZ-F-1: «festhalten, dass der Prüfauftrag mit der Delegation vom 12.10.2026 als bestätigt gilt». Beide Prüfungen haben nach ihm geprüft; die Zusammenführung nennt keine Abweichung, die eine Änderung verlangt | keine Änderung | keine |
| SPZ-F-2 | Wortlaut und Prüfdatum der Fusszeile | **a) Ab der Korrektur, bis zur Veröffentlichung:** `editorialStatus` «Entwurf – fachlich freigegeben, Prüfung vor der Veröffentlichung offen»; `shortDescription` endet mit «Entwurf, Prüfung vor der Veröffentlichung offen.» **b) Bei der Veröffentlichung:** `editorialStatus` «Fachlich freigegeben am TT.MM.JJJJ (Fachstelle Angehörigenarbeit PUK)», Datum = Tag der Produktionsfreigabe (Stufe 7) nach R3 «Go»; `shortDescription` ohne Statussatz. **c) Wer und wann:** eine bauende Sitzung setzt b) in einem eigenen Commit nach R3 «Go» und der Produktionsfreigabe, vor `node tools/export.mjs <ziel> --production`. Danach `grep` über die 17 gebauten Seiten, Ergebnis im Prüfbericht. **d) Profil:** Vorschlag unten (6.3) | Heute «Entwurf – fachliche Prüfung ausstehend» (`site.config.json` Z. 19), obwohl alle Seiten fachlich freigegeben sind (`PRUEFBERICHT.md` Z. 32, 47, 58, 71–72); das ist falsch. «Entwurf» bleibt bis zur Veröffentlichung richtig, weil Stufen offen sind. Freigabesprache «fachlich freigegeben» und Prüfdatum: `00-ablauf-pruefung-und-freigabe.md`, «Inhaltsverantwortung und Status». `--production` ändert den Wert nicht (`tools/contract.js` Z. 176, 190; SPZ-1). Das Datum in b) ist das der Freigabe mit «Datum und Person» (Stufe 7); diese Freigabe gibt die Fachstelle selbst | Änderung | SPZ-1: a) in der Korrektur; b) als Handlung 5.4 |
| SPZ-F-3 | 98 Textzeilen des Plans auf «freigegeben» | Ja. Jede Zeile `format: "text"` im `visualPlan` einer Seite, die «als Ganzes» freigegeben ist, bekommt `approvalStatus: "freigegeben"`. Die Zeile `reason` bleibt; es kommt kein neuer Text dazu | Die Freigaben gelten für die Seiten «als Ganzes» (`PRUEFBERICHT.md` Z. 32, 47, 58, 71, 72), also auch für ihre Textdarstellungen. Das Gate blockiert Textzeilen nicht (`tools/contract.js` Z. 256: `v.format !== 'text'`), der Status ist also nur Dokumentation und soll stimmen. Betrifft alle 16 Seiten ausser `404` | Änderung | SPZ-46 |
| SPZ-F-15 | Richtwert für `verstehen`, `beziehungen`, `grenzen` | Für diese drei Seiten gilt **kein Richtwert**. Massgebend ist die freigegebene Länge. `UMBAUPLAN.md` (Abschnitt 2, Zeilen `verstehen`, `beziehungen`, `grenzen`) und `abgleich/kennzahlen.mjs` Z. 38 (`RICHTWERT`) werden nachgeführt: `verstehen`, `beziehungen`, `grenzen`, `fragen` und `ueber` auf `null`, je mit Verweis auf den Entscheid | Der Richtwert war für jede Korrektur der Etappe 1 aufgehoben: `KORREKTUR-ETAPPE-1C.md` Z. 12 («Über die Länge entscheidet die Fachstelle in W1»), `-1D.md` Z. 65, `-1E.md` Z. 15 («das ist so gewollt»), `-1F.md` Z. 14. Danach hat die Fachstelle die Seiten «als Ganzes» freigegeben (`PRUEFBERICHT.md` Z. 32). Für `fragen` und `ueber` steht der Entscheid schon fest (`UMBAUPLAN.md` Z. 44, 46; `FREIGABE-ETAPPE-2C-3-1.md` Z. 31), nur `kennzahlen.mjs` widerspricht (SPZ-32) | Änderung (Plan und Werkzeug, kein Inhalt) | SPZ-31, SPZ-32 |

### B · Fachliche Aussagen

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-4 | Satz zu Häufigkeitsangaben auf `diagnose`; Diagnostik-Teil im Abgleich | **Ja, der Satz kommt zurück**, wörtlich aus dem Bestand (Wortlaut W1). **Der Abgleich wird nachgeführt:** Bestand `verstehen.md` Z. 224–275 (Diagnostik- und Begleiterkrankungsteil der alten Seite `/verstehen`) bekommt in `abgleich/verstehen.md` je Satz eine Zeile mit Status und Fundstelle (meist `diagnose#…`); Bemerkung «SPZ-4». Die Zeile zu Z. 271 lautet «übernommen (Entscheide Schlussprüfung, SPZ-F-4)» | M2: Der Bestand sicherte die Liste ab: «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren. Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.» (Bestand `verstehen.md` Z. 271). Auf `diagnose` › `begleiterkrankungen` (`content/diagnose.html` Z. 12) steht die Liste mit «In Studien werden unter anderem diese Begleiterkrankungen beschrieben.», aber ohne diese Einschränkung; «nicht bei allen … individuell verschieden» sagt etwas anderes (keine Aussage zur Stichprobe). Abgleichlücke: `abgleich/verstehen.md` Z. 3 und `abgleich/diagnose.md` Z. 3 nennen den Teil nicht; Nachprüfung der Zusammenführung, `PRUEFBERICHT.md` Z. 106 | Änderung | SPZ-4 |
| SPZ-F-5 | «Sie sind es nicht.» | **Kommt zurück**, wörtlich, direkt nach «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» (Wortlaut W2). «oft» und «können» bleiben. Abgleich: `abgleich/grenzen.md` Nr. 214 bekommt in der Bemerkung den Hinweis auf die neue Zeile; neue Zeile für den Satz, Status «übernommen (Entscheide Schlussprüfung, SPZ-F-5)», Fundstelle `kommunizieren#beispiele` | M2 und M6: Der Satz entlastet Angehörige; der Bestand hatte ihn direkt nach dem ersten (Bestand `grenzen.md` Z. 378). Er ist ohne Abgleichzeile entfallen (`grep -rn "Sie sind es nicht" content/ abgleich/`: kein Treffer; `PRUEFBERICHT.md` Z. 105). Die Absicherung «oft», «können» aus 2b (`abgleich/grenzen.md` Nr. 214) ist kein Grund, die Entlastung wegzulassen | Änderung | SPZ-5 |
| SPZ-F-6 | Verweis bei «manipulieren bewusst» | **Ja, ein Verweissatz** am Ende der Antwort (Wortlaut W3), nach dem Muster der freigegebenen Verweissätze, Link `kommunizieren.html#kippen`. Abgleich `verstehen.md` Nr. 116: «umformuliert (Entscheide Schlussprüfung, SPZ-F-6)» mit neuer Fassung und Fundstelle | M2: Der Bestand verwies hier auf beide Seiten: «Mehr dazu auf Kommunizieren und Grenzen.» (Bestand `verstehen.md` Z. 181). Die Abgleichzeile 116 steht noch auf «entfällt … (folgt mit Etappe 2)»; einen Entscheid, den Verweis wegzulassen, gibt es nicht (`FREIGABE-ETAPPE-2B.md` Abschnitt 4 und `FREIGABE-ETAPPE-2C-3-1.md` Abschnitt 4 setzen Verweise in denselben Abschnitt `mythen`, Nr. 116 nennen sie nicht). Ziel: Der Abschnitt «Wenn Gespräche kippen» behandelt Druck im Gespräch und enthält «Eine Grenze in drei Teilen»; er verweist selbst auf «Grenzen». Ein Satz deckt so beide Seiten des Bestands ab, ohne neue fachliche Aussage | Änderung | SPZ-7 (Nr. 116) |
| SPZ-F-7 | «Die Abgrenzung …» wieder direkt bei PTBS | **Bleibt, wo er steht.** | M1: Die Fachstelle hat den Ort festgelegt: «Am Ende der Erklärung kommt dazu: «Die Abgrenzung gehört in eine fachliche Abklärung.»» (`KORREKTUR-ETAPPE-1I.md` Z. 54, P4-F-6), freigegeben mit Etappe 1. Am Ende bezieht sich der Satz auf die ganze Annahme «Borderline ist dasselbe wie Trauma.» und damit auch auf die PTBS-Sätze am Anfang derselben Antwort (`content/verstehen.html` Z. 78) | keine Änderung | keine (SPZ-17 bewusst nicht) |
| SPZ-F-8 | Anspannungskurve, Stelle 3, «können helfen» | **Ja:** «Eine Pause, Abstand und weniger Reize helfen.» wird «Eine Pause, Abstand und weniger Reize können helfen.» (Wortlaut W4). Sonst bleibt die Abbildung unverändert. Abgleich `verstehen.md` Nr. 240: Bemerkung «Absicherung «können helfen» zurück (Entscheide Schlussprüfung, SPZ-F-8)» | M2 und M6 («Keine absolute Aussage über Betroffene»): Der Bestand sicherte ab: «Zeit, weniger Reize, selbst gewählte Unterstützung oder Abstand können helfen.» (Bestand `materialien--text--alarm-modus.md` Z. 51). Der heutige Satz stammt aus `KORREKTUR-ETAPPE-1D.md` Z. 46; der Auftrag hat die Zeichnung neu festgelegt, die Absicherung aber nicht ausdrücklich gestrichen, und der Abgleich nennt ihren Verlust nicht (`PRUEFBERICHT.md`, Prüfung 1, 5.1 d, Nr. 11). M1 steht dem nicht entgegen: Die Fachstelle hat keinen Entscheid gegen die Absicherung getroffen. Zwei Wörter, gleicher Sinn, Bestandswortlaut | Änderung (Abbildung) | SPZ-15; erneute Freigabe von `v-vs-anspannung` nach der Nachprüfung (M7) |
| SPZ-F-9 | Schleife: keine feste Abfolge | **Ja**, mit dem Bestandssatz, wörtlich, im Kurztext von Abbildung 1 nach «Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will.» (Wortlaut W5). Zeichnung, Stationen und Leserichtung bleiben. Abgleich `verstehen.md` Nr. 91: «übernommen (Entscheide Schlussprüfung, SPZ-F-9)», Fundstelle `beziehungen#schleife` | M2: «Daraus ergibt sich keine feste Abfolge, und die Diagnose einer Person erklärt den Verlauf nicht allein.» (Bestand `verstehen.md` Z. 135). Der Bestand lehnte dort einen «vorgegebenen Zyklus» ausdrücklich ab (Z. 137). Gerade bei einer Figur mit nummerierten Stationen schützt der Satz davor, die Schleife als Gesetz zu lesen; der zweite Teil entlastet von der Deutung «alles kommt von der Diagnose». Heute ist er still entfallen: Abgleich Nr. 91 nennt «umformuliert», die neue Fassung enthält ihn nicht (Prüfung 1, 5.1 d, Nr. 22). «Daraus» bezieht sich auf den Satz davor im Kurztext («Was die eine Person tut, kann für die andere zum Anlass werden.») | Änderung (Abbildung) | SPZ-11 (Nr. 91); erneute Freigabe von `v-bz-schleife` nach der Nachprüfung (M7) |
| SPZ-F-10 | Vertiefung «Eltern» an `rolle` angleichen | **Ja:** «Eigene Fehler lassen sich ernst nehmen, ohne für alles verantwortlich zu sein.» wird durch den freigegebenen Satz von `rolle` › `schuld` ersetzt (Wortlaut W6). Abgleich `selbstfuersorge.md` Nr. 276: «umformuliert (Entscheide Schlussprüfung, SPZ-F-10)» | M6 und M1: «ohne für alles verantwortlich zu sein» legt nahe, Eltern trügen einen Teil der Verantwortung. Genau diese Lesart hat die Fachstelle auf `rolle` gestrichen: «ohne die ganze Verantwortung» wurde «ohne Verantwortung für die Erkrankung …» (`KORREKTUR-ETAPPE-2A.md` Z. 39, P2a-F-1; Z. 45: «Kein anderer Satz darf sagen, Angehörige trügen einen Teil der Verantwortung …»). Der Satz auf `selbstfuersorge` (`content/selbstfuersorge.html` Z. 3, Vertiefung «Eltern») ist Bestandswortlaut (Bestand `selbstfuersorge.md` Z. 472), stand aber nie unter dieser Regel. Der Ersatz ist ein freigegebener Satz (`content/rolle.html` Z. 41), keine neue Aussage | Änderung | keine Befund-ID (Prüfung 1, 5.1 a) |
| SPZ-F-11 | «Beides kann nebeneinander bestehen.» (E14) | **Verzichtbar, bleibt entfallen.** | M1: entfallen mit Kürzung K-R-a3 (`abgleich/selbstfuersorge.md` Nr. 54: «die zwei Fragenreihen stehen als eine, beide Fragen nebeneinander; der Satz hätte keinen klaren Bezug mehr»; `PRUEFBERICHT.md` Z. 8739), die die Fachstelle mit P2a-F-3 beauftragt (`KORREKTUR-ETAPPE-2A.md` Z. 11) und mit Etappe 2a freigegeben hat. Die Aussage trägt heute die Frage «Wofür fühle ich mich verantwortlich, obwohl ich es nicht ganz beeinflussen kann?» in derselben Reihe (`content/rolle.html` Z. 41) | keine Änderung | keine |
| SPZ-F-12 | `selbstfuersorge` › `beratung`: «Orientierung, keine Garantie» genügt? | **Genügt.** | M1 und M4: Der Satz steht im Text: «Das ist eine Orientierung, keine Garantie, dass sie wirken.» (`content/selbstfuersorge.html` Z. 39). Die Einordnung der Forschungslage steht im Quellenblock derselben Seite: «Bailey und Grenyer (2013) … (eine Übersicht über sechs Studien mit deutlichen Forschungslücken)», «NICE NG150 (2020) … (nicht spezifisch für Borderline)» (Z. 40). Die Quellen sind mit Korrektur 2b-2 dorthin gewandert; die Freigabe 2b hält fest, dass sich dadurch «nur der Ort der Quellen geändert» hat und die Freigaben weiter gelten (`PRUEFBERICHT.md` Z. 62). Für Angehörige trägt der Satz im Text die nötige Einschränkung | keine Änderung | keine |
| SPZ-F-16 | «Recovery» auf `fragen` wie auf `genesung` | **Bleibt.** | M1: Die Fachstelle hat genau diesen Satz in Z31-F-2 behandelt: «Remission …» wurde an `genesung` angeglichen, der Recovery-Satz blieb wörtlich (`abgleich/fragen.md` Nr. 26, Bestand `faq.md` Z. 49). Die Kurzantwort verweist direkt auf «Remission, Alltag und persönliche Recovery» (`fragen`), wo beide Bedeutungen unterschieden werden (`genesung` › «Persönliche Recovery»). Die Kurzantwort ist nicht falsch, nur knapper | keine Änderung | SPZ-24 bewusst nicht |
| SPZ-F-17 | Rechte und Schweigepflicht gebündelt? | **Kein neuer Abschnitt.** Die verteilten Stellen genügen | M3 und M4: Ein gebündelter Abschnitt bräuchte neue rechtliche Aussagen; dafür gibt es weder Bestand noch Quelle auf `quellen`, und die rechtliche Prüfung von Impressum und Datenschutz ist offen. Die Themen stehen dort, wo Angehörige sie suchen: Schweigepflicht `behandlung` › `kontakt`; FU, KESB, Meldepflichten `fragen` (`behandlung`, `schutz`); Beistandschaft `genesung`. Die Leitlinie nennt eine Prüfliste, kein Pflichtprogramm (`PRUEFBERICHT.md` Z. 895). Der Bestand bündelte ebenfalls nicht | keine Änderung | keine |
| SPZ-F-20 | Geschwister, Freundinnen und Freunde als eigene Rolle | **Nicht in diesem Release.** | M3 und M4: Eigene Rollenabschnitte wären neue fachliche Aussagen auf drei freigegebenen Seiten (`kommunizieren` › `rollen`, `grenzen` › `rollen`, `selbstfuersorge` › `eigenes-leben`). Der Bestand nennt Geschwister ebenfalls kaum (`git grep -c Geschwister origin/borderline-bestand`: 4 Treffer in 3 Dateien, `PRUEFBERICHT.md` Z. 895). Die allgemeinen Abschnitte sprechen alle Angehörigen an. Eine Erweiterung wäre ein eigener Bauauftrag mit Quellen | keine Änderung | keine |
| SPZ-F-21 | Bezeichnung zu F60.31 nennen | **Ja, auf `diagnose`**, direkt nach «Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen.» (Wortlaut W7). Dazu ein Eintrag auf `quellen` für die ICD-10-GM 2024 (BfArM) und die Zeile im Quellenblock von `diagnose`. **Bedingung:** Die bauende Sitzung schlägt die Bezeichnung in der amtlichen Systematik der ICD-10-GM 2024 nach und belegt sie im Prüfbericht. Weicht sie ab, setzt sie nichts ein und meldet es | Angehörige lesen in Berichten oft die Bezeichnung, nicht den Code; die Website nennt nur den Code (`content/diagnose.html` Z. 4, Vertiefung «Wie die Diagnose beschrieben wird»; `begriffe.mjs`: «emotional instabil…» 0×, `PRUEFBERICHT.md` Z. 896). Es ist keine neue fachliche Aussage, sondern der amtliche Name des schon genannten Codes. M3: Die Quelle kommt dazu auf `quellen`; der Eintrag «Bundesamt für Statistik (2026)» belegt nur, dass die ICD-10-GM gilt, nicht den Wortlaut | Änderung | keine Befund-ID |
| SPZ-F-23 | Gleichlautende Absicherungen bündeln? | **Nein.** Die Absicherungen bleiben, wie sie stehen | M1, M2 und M4: Der Bauauftrag 2a schützt die Absicherungen ausdrücklich (Z. 48, zitiert in `PRUEFBERICHT.md` Z. 1411); die Fachstelle hat `krise` und `kommunizieren` mit ihnen freigegeben (Z. 58). Bündeln hiesse umformulieren und verschieben, mit dem Risiko, dass eine Einschränkung ihren Bezug verliert. Die Leitlinie empfiehlt Bündeln für allgemeine redaktionelle Hinweise; diese hier beziehen sich jeweils auf den Satz davor | keine Änderung | SPZ-35 (Teil) bewusst nicht |

### C · Quellen, Verweise, Aufbau

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-18 | Quellen aus Bildlegenden in Quellenblock und «Verwendet in» | **Ja**, wie auf allen anderen Seiten. Der Block «Quellen zu dieser Seite» auf `verstehen` bekommt die Quellen aus den Bildlegenden: Baranger et al. (2020), Degasperi et al. (2021), Santangelo et al. (2014), Shields et al. (2016) und Linehan (2015) mit «Verwendet in: «Wenn die Anspannung steigt» (Abbildung 2)», Hoffman et al. (2005) mit «Verwendet in: «Wenn Bewertungen einseitiger werden» (Abbildung 3)». Die Bildlegenden bleiben, wie sie sind. Danach `node abgleich/verwendet-auf.mjs --ohne-legenden`: 0 Abweichungen, und «Verwendet auf» auf `quellen` stimmt | Auf allen anderen Seiten stehen die Legendenquellen im Block (Prüfung 1, SP1-24). `verwendet-auf.mjs --ohne-legenden` meldet heute 6 Abweichungen, alle `verstehen`: Baranger et al. (2020), Degasperi et al. (2021), Santangelo et al. (2014), Shields et al. (2016), Linehan (2015), Hoffman et al. (2005). Die Legende nennt «Bezugspunkte: Linehan (1993, 2015); Shields et al. (2016); Degasperi et al. (2021); Baranger et al. (2020); Santangelo et al. (2014); NICE CG78 (2009)» (`content/verstehen.html`, Abschnitt `anspannung`). Die Bezugspunkte bleiben nach P4-F-16 (`PRUEFBERICHT.md` Z. 38). Hoffman et al. (2005) steht in der Legende der Momentaufnahmen («Grundlage: Linehan (1993); Hoffman et al. (2005).», `content/verstehen.html` Z. 76). Keine neue Aussage, nur Zuordnung | Änderung | SPZ-23 |
| SPZ-F-19 | Bildlegenden nennen entfallene Handouts | **Bleiben.** Die Angabe ist eine Herkunft («nach dem Handout …»), kein Verweis auf ein Angebot der Website | M1: Die Fachstelle hat die Kennzeichnung selbst vorgegeben: «Eigene didaktische Darstellung nach dem Handout «Die Anspannungskurve»» (`KORREKTUR-ETAPPE-1D.md`, Abschnitt Bildlegende), dazu «Die Bezugspunkte der Anspannungskurve stammen aus den Handouts des Bestands und bleiben.» (`PRUEFBERICHT.md` Z. 38). Gleiches Muster in den Aufträgen 2a bis 2c (z. B. `BAUAUFTRAG-ETAPPE-2C1.md` Z. 111). Die Handouts sind Material der Fachstelle; die Angabe nennt ehrlich die Vorlage. Keine Legende verlinkt oder verspricht ein Handout | keine Änderung | SPZ-28 bewusst nicht |
| SPZ-F-22 | Startseite für `krise`, `diagnose`, `behandlung`; Verweise aus dem UMBAUPLAN | **Startseite: kein Einstieg.** **UMBAUPLAN:** Der Plan wird an die freigegebenen Verweise angepasst; keine neuen Verweise. In `UMBAUPLAN.md` Abschnitt 2 heisst es bei `krise` «– (verlinkt aus Verstehen, Diagnose, Behandlung, Kommunizieren, Auf sich achten, Häufige Fragen)», bei `kommunizieren` die tatsächlichen Quellen der Verweise; Zusatz «nachgeführt nach den Entscheiden zur Schlussprüfung (SPZ-F-22)» | M1: «Für `krise` gibt es keinen Einstieg (`UMBAUPLAN.md`).» (`BAUAUFTRAG-ETAPPE-2B.md` Z. 183); «`diagnose` und `behandlung` … bekommen keinen Einstieg auf `index`» (`BAUAUFTRAG-ETAPPE-2C2.md` Z. 23); beides so freigegeben. Alle drei Seiten sind in höchstens zwei Seitenwechseln erreichbar (Prüfung 1, `PRUEFBERICHT.md` Z. 17). Für einen Einstieg zu `krise` auf der Startseite spricht auch die Haltung nicht: Die Startseite soll nicht wie ein Krisenzugang wirken (CLAUDE.md, «Kein Krisenzugang»). M4: Die Fachstelle hat in den Freigaben 2b und 2c gezielt Verweise gesetzt (je Abschnitt 4), die im Plan genannten nicht; heute verlinken sechs Seiten auf `krise` (`PRUEFBERICHT.md` Z. 888) | Änderung (nur Plan) | SPZ-29, SPZ-30 |

### D · Abbildungen

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-24 | «Ein neuer Trieb»: betroffene Person als Pflanze? | **In Kauf genommen; das Bild bleibt.** | M1 und M7: Die Fachstelle hat die Pflanze für `genesung` am 11.10.2026 gewählt (`BAUAUFTRAG-ETAPPE-2C1.md` Z. 11), einen Tag nach dem Verzicht auf das Garten-Bild für `rolle`, und sie nach zwei Prüfungen mit Korrektur 2c-K freigegeben (P2c-F-2 a, NK-F-2; `PRUEFBERICHT.md` Z. 74). Der Einwand gegen den Garten galt einem Bild, in dem Angehörige eine Person «pflegen» (drei Zonen, «wirkt wie eine Zielscheibe», `site.config.json` › `v-ro-weg` › `reason`). Diese Lesart ist mit der Giesskanne entfernt (2c-K, P2c2-F-2 a). Übrig bleibt eine Metapher für einen Verlauf: Blatt fällt, Trieb wächst. Prüfung 1 urteilt im Freundin-Test «Eher ja für die Hoffnung» (Teil 5.4). «Das Bild ist eine Metapher, keine Vorhersage eines Genesungsverlaufs.» steht in «Grenzen des Bildes» (`BAUAUFTRAG-ETAPPE-2C1.md` Z. 108). Dass Angehörige im Bild keinen Platz haben, ist gewollt: Das Bild hat eine Idee, nicht zwei | keine Änderung | keine; R2 sieht das Bild erneut an |
| SPZ-F-25 | «Zwei Tassen»: Sätze tragen die Aussage | **Genügt.** | Bildsprache-Regel (CLAUDE.md): «Beschriftet wird Erleben mit Sätzen aus Sicht von Menschen». Genau das tut die Figur: Das Bild zeigt zwei gleichwertige Menschen im selben Gespräch (`understood`, von Prüfung 1 als eingelöst bestätigt), die zwei Sätze zeigen das Anerkennen. M1: freigegeben am 11.10.2026 (P2b-F-11 b, `PRUEFBERICHT.md` Z. 60). R2 prüft die Laienverständlichkeit ohnehin | keine Änderung | SPZ-42 bewusst nicht |
| SPZ-F-26 | DEAR: Kürzel verständlich? | **Ja, so lassen.** | Jeder Schritt hat ein deutsches Wort und einen Erklärsatz («1 D · Beschreiben», «2 E · Empfinden ausdrücken» …, `content/grenzen.html`, Abschnitt `dear`). Die Buchstaben helfen, das Modell wiederzuerkennen, wenn Angehörige ihm in einer DBT-Gruppe begegnen; zum Verstehen braucht es sie nicht. Die Herkunft steht in der Vertiefung. M1: freigegeben (P4-F-21) | keine Änderung | keine |
| SPZ-F-27 | `was-hilft`: mehrere Stellen, Modell nur Station 5 | **Text präzisieren, Modell bleibt.** Im ersten Punkt kommt «eigene» dazu (Wortlaut W8). Abgleich `beziehungen.md` Nr. 172: Bemerkung ergänzen | Der Punkt «bei der Bedeutung: eine Vermutung zuerst mit einer Frage prüfen» kann so gelesen werden, als sollten Angehörige an der Bedeutung der anderen Person arbeiten (Station 2 gehört im Modell der betroffenen Person). Gemeint ist die eigene Vermutung, wie im Beispiel des Ansatzpunkts («Wie hast du meine Absage verstanden?», `content/beziehungen.html` Z. 8) und in «Zwei Sichten» («Auch Ihre eigenen Reaktionen werden Teil der Schleife»). Ein Wort klärt das und folgt der Regel «Ansatzpunkte beschreiben eigene Möglichkeiten» (CLAUDE.md). Das Modell bleibt freigegeben, wie es ist (M4, M7) | Änderung | keine Befund-ID (Teil 5.4 beider Prüfungen) |
| SPZ-F-28 | «Ein freier Abend»: Tee wird kalt, Tasse dampft | **Gewollt.** | M1: «Beim «freien Abend» bleibt der Dampf über der Tasse.» (`KORREKTUR-ETAPPE-2A.md` Z. 13, P2a-F-6). «wird kalt» beschreibt einen Vorgang: Noch dampft der Tee, die Aufmerksamkeit ist schon beim Telefon | keine Änderung | keine |
| SPZ-F-29 | Eisberg: `entryPoint`? | **Nein.** | Das Profil verlangt `entryPoint` für Kreislauf, Prozesspfad und Modell in Schritten (`07-visualisierung-umsetzen.md` Z. 19, 31: «MUSS»), nicht für ein Schichtenmodell (`format: layer-model`, `site.config.json` › `v-vs-eisberg`). Einen Ansatzpunkt gibt die Figur trotzdem: die Frage «Wie ist es gerade für dich?» daneben. Dass der Prüfauftrag das Schichtenmodell mitnennt (`PRUEFAUFTRAG-SCHLUSSPRUEFUNG.md` Z. 109), ändert die Profilregel nicht (M5) | keine Änderung | keine |
| SPZ-F-30 | «Ein neuer Trieb»: Sims rechts abgeschnitten | **Bleibt.** Der Schnitt ist der Bildrand des gewählten Ausschnitts | Der Ausschnitt `60 44 420 214` ist in 2c-K bewusst enger gewählt, «mit der Pflanze in der Mitte» (`site.config.json` › `v-ge-trieb` › `reason`); dabei schneidet der Bildrand den Sims. So freigegeben (NK-F-2). Eine Änderung bräuchte eine neue Freigabe (M7) und brächte inhaltlich nichts | keine Änderung | SPZ-41 bewusst nicht |
| SPZ-F-31 | «Ein neuer Trieb»: «Tragfähiger» 3 px? | **Nein, so lassen.** | Die Hauptanweisung «dieselbe Linie wie … `.puk-say`» für «Weniger hilfreich» ist erfüllt (Prüfung 1, 5.1 c, Punkt 3 e: «Szene «Weniger hilfreich» 2 px grau = `.puk-say`»). Die zwei Haltungen unterscheiden sich in der Szene durch Farbe (grau gegen blau) und Bezeichnung. Freigegeben im heutigen Stand (NK-F-2); eine Änderung bräuchte eine neue Freigabe (M7) für einen Unterschied von 1 px | keine Änderung | keine |

### E · Bedienung und Profil

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-32 | Druck: Ausnahme für Figuren über eine A4-Seite | **Profilebene: Änderung im Design-System-Artefakt, in dieser Website keine.** Vorschlag in 6.3 | Die Druckregel steht im Profil (`00-technische-qualitaet.md` Z. 57, Profilentscheid 11.10.2026) und in `components/bundle.css`. Eine Figur, die mit ihrer Liste länger als eine Seite ist, kann die Regel nicht erfüllen; `break-inside: avoid` erzeugt dann die leere Seite (SPZ-43). Das betrifft jede Website mit langen Erklärmustern (M5) | Profilebene | SPZ-43 nicht in der Korrektur |
| SPZ-F-33 | Reale Tests: wer, wann | **Umfang und Protokoll festgelegt (5.3).** Die Tests führt eine Person durch, nicht Claude. **Person und Termin bleiben offen.** Zeitpunkt: nach der Korrektur und der Nachprüfung, auf der neu ausgerollten Vorschau, vor R3 | Claude kann reale Screenreader-, Tastatur-, Touch- und Kontrastmodus-Tests nicht durchführen (Entscheidauftrag Abschnitt 5). Das Profil verlangt «mindestens zwei reale Screenreader-Läufe» (Stufe 5). Grundlage sind die Vorschläge beider Prüfungen (`PRUEFBERICHT.md` Z. 1797–1828 und Prüfung 1, 5.5); die Tests gehören nach der Korrektur, weil SPZ-2 und SPZ-3 die Figuren bei grosser Schrift ändern | Handlung der Fachstelle | keine |
| SPZ-F-34 | E-Mail-Link der Absenderin: Text oder Aktion | **Profilebene: Änderung im Design-System-Artefakt, in dieser Website keine.** Vorschlag in 6.3 | Die Absenderin entsteht beim Build aus dem Starter (`tools/contract.js`); die Website darf sie nicht anders bauen (CLAUDE.md). WCAG 2.5.8 ist heute über den Abstand erfüllt (SPZ-45) | Profilebene | SPZ-45 nicht in der Korrektur |

### F · Rechtliches

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-13 | «Die Website setzt keine Cookies» absolut | **In die rechtliche Prüfung aufnehmen. Bis dahin bleibt der heutige Text.** Vorschlag für die rechtliche Prüfung: «Die Website selbst setzt keine Cookies. Sie verwendet keine Dienste, die Besuche auswerten oder Werbung zeigen.» Dazu nach dem Merge eine Messung auf der Produktion (5.4, Schritt 8) | Heute: «Die Website setzt keine Cookies und verwendet keine Dienste, die Besuche auswerten oder Werbung zeigen.» (`content/impressum-datenschutz.html`, Abschnitt `datenschutz`). Der Bestand war eingeschränkt («nach aktuellem technischem Stand selbst keine Tracking- oder Werbe-Cookies … Diese einzelne Beobachtung ist keine Zusicherung», Bestand `datenschutz.md`; Prüfung 1, 5.1 e, Nr. 48). Ob der ausliefernde Dienst Cookies setzen kann, ist eine Frage der Betriebsangaben; das gehört zur offenen rechtlichen Prüfung (Z31-F-9, `PRUEFBERICHT.md` Z. 78) | rechtliche Prüfung | keine |
| SPZ-F-14 | Urheberrecht: «Die Inhalte» statt «Infografiken und Handouts» | **In die rechtliche Prüfung aufnehmen. Bis dahin bleibt der heutige Text.** Vorschlag: «Texte und Abbildungen dürfen im Rahmen der Angehörigenberatung und für den persönlichen Gebrauch verwendet werden. Das Logo der Psychiatrischen Universitätsklinik Zürich ist davon ausgenommen.» | Heute: «Die Inhalte dürfen im Rahmen der Angehörigenberatung und für den persönlichen Gebrauch verwendet werden.» Bestand: «Die Infografiken und Handouts dürfen …» (Bestand `impressum.md` Z. 101). Die Handouts gibt es auf der Website nicht mehr; eine Erweiterung auf Texte und Abbildungen ist daher folgerichtig. «Die Inhalte» schliesst aber auch das Logo ein, an dem die Fachstelle keine Nutzungsrechte vergeben kann. Fremde Fotos gibt es keine (`grep '<img' content/*.html`: 0) | rechtliche Prüfung | keine |

### G · Netlify und Veröffentlichung

| ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
| --- | --- | --- | --- | --- | --- |
| SPZ-F-35 | «Pretty URLs» lassen oder ausschalten | **Lassen (eingeschaltet).** Die Abweichung zwischen Links ohne `.html` und `canonical`/`sitemap.xml` mit `.html` ist bewusst hingenommen. Nach dem Merge prüft eine Sitzung, die nicht gebaut hat, dass die Einstellung in der Produktion gleich ist, und wiederholt dort Z31-W3-2, Punkte 3, 5 und 10 (5.4) | Mit der Einstellung ist geprüft, dass alte Adressen mit Schrägstrich ankommen: `/verstehen/` → 301 `/verstehen`, Ziel 200 (Codex P1, `PRUEFBERICHT.md` Z. 2035, 2242). `_redirects` setzt voraus, dass `/verstehen` die Seite `verstehen.html` liefert (`_redirects` Z. 5–6). Ohne die Einstellung ist dieser Nachweis offen und SPZ-58 würde wichtig. Die heutige Abweichung ist funktional ohne Fehler (beide Prüfungen; SPZ-56 «optional»); `canonical` zeigt eindeutig auf eine Adresse je Seite. Ausschalten hiesse: mehr Risiko für alte Links, neue Prüfung, kein Gewinn für Lesende | Handlung der Fachstelle | keine; SPZ-56 und SPZ-58 bleiben optional und werden nicht korrigiert |
| SPZ-F-36 | Team-Anmeldung für Vorschauen | **Wieder einschalten, sobald R3 abgeschlossen ist**, vor dem Merge. Bis dahin bleibt sie aus | Die Nachprüfung, die realen Tests und R1 bis R3 brauchen die Vorschau ohne Anmeldung; die Prüfsitzungen haben sie mit `curl` und Browser ohne Konto geprüft (`PRUEFBERICHT.md` Z. 2285). Das Risiko ist klein: `x-robots-tag: noindex`, keine Personendaten, die Fusszeile sagt «Entwurf», der Inhalt ist für die Öffentlichkeit bestimmt. Nach R3 braucht niemand mehr den offenen Zugang | Handlung der Fachstelle | keine |
| SPZ-F-37 | Build-Einstellungen vor dem Merge; Prüfung der Produktion | **Ja, vor dem Merge angleichen** (Publish-Ordner `site`, kein Build, kein Framework-Preset). **Die Produktion prüft nach dem Merge eine Sitzung, die nicht gebaut hat**, mit denselben Punkten wie die Vorschau. Dass auf `main` die fünf Workflows und `material-download` entfallen, ist gewollt, soweit sie zur React-Fassung gehören; die Fachstelle bestätigt das vor dem Merge je Workflow. Schritte in 5.4 | `netlify.toml` im Ziel: `publish = "site"`, Build-Befehl nur `echo` (`PRUEFBERICHT.md` Z. 2005). Die Produktion steht noch auf «Framework vite» (Z. 2286); die Einstellungen sind über die Verbindung nicht lesbar. Alte PDF- und Material-Adressen leitet `_redirects` um; dafür braucht es `material-download` nicht. Die Aussage der Selbstprüfung 3-2, Workflows und Funktion blieben auf `main` erhalten, ist falsch (SPZ-60) | Handlung der Fachstelle | SPZ-60: der Satz der Selbstprüfung wird berichtigt |
| SPZ-F-38 | PR #659 wieder Entwurf | **Erledigt durch die Fachstelle.** PR `christaegger-dot/borderline-angehoerige#659` ist seit 12.10.2026, 18:19 UTC wieder ein Entwurf und bleibt es, bis R3 «Go» ergibt | Beleg: Entscheidauftrag Abschnitt 6 (Commit `b3e3626`): «nachgeprüft: `"draft":true`, ungemergt». Diese Sitzung konnte das nicht selbst nachsehen: Das Repository `borderline-angehoerige` liegt ausserhalb ihres Zugriffs. Die Nachprüfung bestätigt es. Regel: «Solange Stufen offen sind, bleibt er ein Entwurf» (CLAUDE.md). Damit ist SPZ-6 behoben | Handlung der Fachstelle | SPZ-6: keine Korrektur, Nachprüfung bestätigt |
| SPZ-F-39 | Alte Adressen in anderer Schreibweise | **Zwei Regeln dazu, sonst genügt die 404-Seite:** `/FAQ` → `/fragen.html` 301 und `/Soforthilfe` → `/index.html` 301 (Wortlaut W9) | Die alte Produktion leitete genau diese zwei Schreibweisen weiter («`/Soforthilfe` 301 `/soforthilfe/`, `/FAQ` 301 `/faq`», Prüfung 1, 5.6 b). Sie können also auf Papier oder in alten Links stehen. Beliebige Schreibweisen abzudecken, ginge nur mit vielen Regeln; die 404-Seite führt zur Startseite. Die Ziele folgen den bestehenden Regeln (`_redirects` Z. 9, 35); `/Soforthilfe` führt wie `/soforthilfe` auf die Startseite (kein Krisenzugang) | Änderung | SPZ-55 |

## 3. Wortlaute

Je Änderung: Seite › Abschnitt, heute, neu, Quelle. Nichts weiter ändern.

| Nr. | Seite › Abschnitt | Wortlaut heute | Wortlaut neu | Quelle |
| --- | --- | --- | --- | --- |
| W1 | `diagnose` › `begleiterkrankungen`, direkt nach der Liste der sechs Begleiterkrankungen, vor «Erkrankungen können gemeinsame Risikofaktoren haben …» | – | «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren. Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.» | Bestand `verstehen.md` Z. 271, wörtlich |
| W2 | `kommunizieren` › `beispiele`, «Eine Bitte um Geld» | «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» | «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen». Sie sind es nicht.» | Bestand `grenzen.md` Z. 378, zweiter Satz wörtlich |
| W3 | `verstehen` › `mythen`, Annahme «Menschen mit Borderline manipulieren bewusst.», nach «Bleiben Sie bei der Wirkung, Ihrer Sicherheit und Ihrer Grenze.» | – | «Wie Sie in solchen Momenten eine Grenze klar sagen können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen».» Link `kommunizieren.html#kippen` auf «Wenn Gespräche kippen» | Verweis des Bestands `verstehen.md` Z. 181; Muster der Verweissätze aus `FREIGABE-ETAPPE-2B.md` und `FREIGABE-ETAPPE-2C-3-1.md`, je Abschnitt 4 |
| W4 | `verstehen` › `anspannung`, Abbildung 2, Stelle 3, «Was hilft» | «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize helfen.» | «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize können helfen.» | Bestand `materialien--text--alarm-modus.md` Z. 51 («… können helfen.») |
| W5 | `beziehungen` › `schleife`, Abbildung 1, Kurztext | «Was die eine Person tut, kann für die andere zum Anlass werden. Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will. Angehörige setzen bei ihrer eigenen Reaktion an.» | «Was die eine Person tut, kann für die andere zum Anlass werden. Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will. Daraus ergibt sich keine feste Abfolge, und die Diagnose einer Person erklärt den Verlauf nicht allein. Angehörige setzen bei ihrer eigenen Reaktion an.» | Bestand `verstehen.md` Z. 135, wörtlich |
| W6 | `selbstfuersorge` › `eigenes-leben`, Vertiefung «Eltern» | «Eigene Fehler lassen sich ernst nehmen, ohne für alles verantwortlich zu sein.» | «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» | freigegebener Satz `rolle` › `schuld` (`KORREKTUR-ETAPPE-2A.md` Z. 39, P2a-F-1) |
| W7 | `diagnose` › `abklaerung`, Vertiefung «Wie die Diagnose beschrieben wird», nach «Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen.» | – | «Die Bezeichnung dazu lautet «emotional instabile Persönlichkeitsstörung, Borderline-Typ».» Dazu auf `quellen` (Abschnitt der Diagnose-Quellen, alphabetisch) ein Eintrag zur ICD-10-GM Version 2024 des Bundesinstituts für Arzneimittel und Medizinprodukte (BfArM), mit «Verwendet auf: «Diagnose und Begleiterkrankungen»», und im Quellenblock von `diagnose` die Zeile «BfArM, ICD-10-GM 2024 · Verwendet in: «Der Weg zur Abklärung» (Bezeichnung zu F60.31)» | ICD-10-GM 2024, Systematik F60.3/F60.31; vor dem Einsetzen nachschlagen (Bedingung SPZ-F-21) |
| W8 | `beziehungen` › `was-hilft`, erster Punkt der Liste | «bei der Bedeutung: eine Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)» | «bei der Bedeutung: eine eigene Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)» | Ansatzpunkt der Abbildung 1 derselben Seite («Wie hast du meine Absage verstanden?») |
| W9 | `_redirects`, Block «Seiten», nach `/faq` | – | `/FAQ                                         /fragen.html                                 301` und im Block «Krisenzugang entfällt» nach `/soforthilfe/*`: `/Soforthilfe                                 /index.html                                  301` | Prüfung 1, 5.6 b (Verhalten der alten Produktion) |
| W10 | `site.config.json` Z. 19 › `editorialStatus` | «Entwurf – fachliche Prüfung ausstehend» | bis zur Veröffentlichung: «Entwurf – fachlich freigegeben, Prüfung vor der Veröffentlichung offen»; bei der Veröffentlichung: «Fachlich freigegeben am TT.MM.JJJJ (Fachstelle Angehörigenarbeit PUK)» | SPZ-F-2; `00-ablauf-pruefung-und-freigabe.md`, «Inhaltsverantwortung und Status» |
| W11 | `site.config.json` Z. 7 › `shortDescription` | «… Entwurf, fachliche Prüfung ausstehend.» | bis zur Veröffentlichung: «… Entwurf, Prüfung vor der Veröffentlichung offen.»; bei der Veröffentlichung entfällt der Satz: «Psychoedukative Website der Fachstelle Angehörigenarbeit PUK für Angehörige von Menschen mit Borderline.» | wie W10 |

**Wortlaute aus optionalen Befunden** (Abschnitt 6.2), ebenfalls verbindlich:

| Nr. | Seite › Ort | Wortlaut heute | Wortlaut neu | Befund |
| --- | --- | --- | --- | --- |
| O1 | `site.config.json` › `index` › `description` | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen zu Verstehen, Beziehungen und Grenzen sowie die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen zu Verstehen, Beziehungen, Gesprächen, Grenzen, der eigenen Rolle, Selbstfürsorge, Genesung und Unterstützung sowie die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» | SPZ-19 |
| O2 | `site.config.json` › `fragen` › `description` | «…, je mit Verweis auf die ausführliche Seite.» | «…, meist mit Verweis auf die ausführliche Seite.» | SPZ-20 |
| O3 | `site.config.json` › `impressum-datenschutz` › `description` | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, keine Dienste anderer Anbieter beim Lesen.» | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, beim Lesen keine Daten an andere Anbieter als den Dienst, der die Website ausliefert.» | SPZ-20 (folgt dem Text der Seite, Abschnitt «Keine Dienste anderer Anbieter»; «keine Cookies» bleibt bis zur rechtlichen Prüfung, SPZ-F-13) |
| O4 | `404`: Text, `description`, Link | «Von der Übersicht aus finden Sie alle Seiten.» · Link «Zur Übersicht» | «Von der Startseite aus finden Sie alle Seiten.» · Link «Zur Startseite» | SPZ-22 (ein Name für die Startseite) |
| O5 | `grenzen`, Kopf | «Wie die andere Person reagiert, können sie aber nicht garantieren.» | «Wie die andere Person reagiert, können Grenzen aber nicht garantieren.» | SPZ-36 |
| O6 | `grenzen` › `konsequenz` | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen sie an.» | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen Sie die Grenze an.» | SPZ-36 |
| O7 | `krise`, Beispielsatz | «Mir ist noch beklemmend zumute. Ich bin trotzdem hier.» | «Mir ist noch beklommen zumute. Ich bin trotzdem hier.» | SPZ-36 |
| O8 | `quellen`, Guillén et al. (2024) | «Family Connections» mit Guillemets | “Family Connections” mit den englischen Anführungszeichen des Originaltitels (Titel steht mit `lang="en"`) | SPZ-16 |

## 4. Neue Sätze zur Freigabe

**Freigegeben im Auftrag der Fachstelle (Claude, Delegation vom 12.10.2026), unter dem Vorbehalt, dass die Nachprüfung den Wortlaut so auf der Seite findet:**

1. W1: «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren.» · «Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.» (Bestand)
2. W2: «Sie sind es nicht.» (Bestand)
3. W3: «Wie Sie in solchen Momenten eine Grenze klar sagen können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen».» (neu, Verweis)
4. W4: «Eine Pause, Abstand und weniger Reize können helfen.» (geändert, Bestand)
5. W5: «Daraus ergibt sich keine feste Abfolge, und die Diagnose einer Person erklärt den Verlauf nicht allein.» (Bestand)
6. W6: «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» (freigegeben auf `rolle`, neu auf `selbstfuersorge`)
7. W7: «Die Bezeichnung dazu lautet «emotional instabile Persönlichkeitsstörung, Borderline-Typ».» und der Quelleneintrag ICD-10-GM 2024 (neu; nur wenn die Bedingung von SPZ-F-21 erfüllt ist)
8. W8: «bei der Bedeutung: eine eigene Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)» (geändert)
9. W10, W11: die Fassungen «bis zur Veröffentlichung» (geändert)
10. O1 bis O8 (geändert)
11. SPZ-F-18: die sechs neuen Einträge im Quellenblock von `verstehen` (nur Zuordnung, keine Aussage)

**Nicht jetzt freigegeben:**
- **Abbildungen `v-vs-anspannung` (W4) und `v-bz-schleife` (W5):** Der Text der Abbildungen ändert sich; nach M7 braucht die neue Fassung eine erneute Freigabe. Sie wird nach der Nachprüfung eingetragen, im Auftrag der Fachstelle, von dieser Entscheidsitzung oder einer Sitzung, die die Fachstelle dafür bestimmt und die weder gebaut, geprüft noch nachgeprüft hat. Grundlage: Fotos bei 1280 und 360 px, Standard und «kontrast», Freundin-Test.
- **Fassung W10 «bei der Veröffentlichung»:** Sie gehört zur Produktionsfreigabe (Stufe 7) mit Datum und Person.
- **Regelbasierte Änderungen aus 6.2** (SPZ-26, -33, -37): Die bauende Sitzung führt jeden geänderten Satz in ihrer Liste «Neue Sätze zur Freigabe»; Freigabe nach der Nachprüfung wie bei den Abbildungen.

## 5. Handlungen für die Fachstelle

Reihenfolge: **K** = vor der Korrektur, **N** = nach Korrektur und Nachprüfung, vor R3, **R** = nach R3 «Go», vor dem Merge, **P** = nach dem Merge.

### 5.1 PR #659 (SPZ-F-38) · erledigt, K

1. Erledigt am 12.10.2026, 18:19 UTC: PR `christaegger-dot/borderline-angehoerige#659` ist wieder ein Entwurf.
2. Er bleibt Entwurf und ungemergt bis R3 «Go». Erst danach «Ready for review» und Merge durch die Fachstelle (5.4).

### 5.2 Rechtliche Prüfung (SPZ-F-13, -14), N

1. Der rechtlichen Prüfung von Impressum und Datenschutz (schon offen: S-Nr. 5 und 6, Z31-F-9, Z31-F-19, NK-F-8) zwei Punkte beifügen: Cookie-Satz (Vorschlag SPZ-F-13) und Nutzungserlaubnis (Vorschlag SPZ-F-14).
2. Ergebnis als Wortlaut in einen Korrekturauftrag; bis dahin bleiben die heutigen Sätze.
3. Abschluss vor R3; R3 prüft, dass das Ergebnis eingetragen ist.

### 5.3 Reale Tests (SPZ-F-33), N

1. **Person und Termin:** offen, legt die Fachstelle fest. Claude führt diese Tests nicht durch.
2. **Zeitpunkt:** nach der Korrektur und der Nachprüfung, auf der Vorschau mit dem neuen Export; vor R3.
3. **Kombinationen:**

   | Kürzel | Gerät | Pflicht |
   | --- | --- | --- |
   | NV | NVDA (aktuell) + Firefox, Windows, Laptop mit Hardwaretastatur | ja |
   | VO-iOS | VoiceOver + Safari, iPhone (Touch, Wischgesten) | ja |
   | HK | Windows-Kontrastmodus, Kontrastdesign dunkel und hell, Edge, ohne Screenreader | ja |
   | VO-mac | VoiceOver + Safari, macOS | empfohlen |
   | TB | TalkBack + Chrome, Android | empfohlen |

   Zwei Pflicht-Läufe mit Screenreader (NV, VO-iOS) erfüllen «mindestens zwei reale Screenreader-Läufe» (Stufe 5) und decken Hardwaretastatur und Touch ab.
4. **Aufgaben:** A1 bis A14 aus dem Protokollvorschlag von Prüfung 2 (`PRUEFBERICHT.md` Z. 1812–1825), unverändert. Dazu aus Prüfung 1 (5.5, Aufgabe 7): Fusszeile auf dem Telefon, Links «Impressum», «Datenschutz» und der E-Mail-Link der Absenderin ohne Fehltipp treffbar. Zusätzlich nach der Korrektur von SPZ-2 und SPZ-3: Eisberg (`verstehen`) und Bedeutungsschleife (`beziehungen`) mit Browser-Schriftgrösse 150 % und 200 %, Listenansicht ohne Überlappung.
5. **Protokoll** je Lauf: Datum, Person, Gerät, System-, Browser- und Screenreader-Version, Sprache Deutsch; je Aufgabe «bestanden», «nicht bestanden» oder «nicht geprüft» mit Notiz. Vorlage `templates/website/website-screenreader-test.example.json`.
6. **Bestanden**, wenn NV, VO-iOS und HK alle Aufgaben ohne «nicht bestanden» abschliessen. Abweichungen als Befund mit Seite, Aufgabe und Kombination in `PRUEFBERICHT.md`, Stufe «Bedienung und Barrierefreiheit».

### 5.4 Netlify und Veröffentlichung (SPZ-F-2, -35, -36, -37), R und P

1. **R · Export für die Veröffentlichung** (auch SPZ-52, SPZ-49), durch eine bauende Sitzung:
   1. `editorialStatus` und `shortDescription` auf die Fassung «bei der Veröffentlichung» setzen (W10, W11), Datum der Produktionsfreigabe; `node tools/build.mjs`.
   2. Den Zielordner `site/` im Repository `borderline-angehoerige` leeren (`export.mjs` leert ihn nicht).
   3. `node tools/export.mjs <ziel>/site --production`; das Gate muss ohne blockierenden Befund durchlaufen.
   4. `_redirects` von Hand in `<ziel>/site/` kopieren (Handschritt, `_redirects` Z. 2–4).
   5. Die Lizenzdatei der Schrift Rubik (SIL Open Font License) aus dem Profilpaket neben die Schriften kopieren, bis das Profil das selbst tut (SPZ-49).
   6. `grep -c "Fachlich freigegeben am" <ziel>/site/*.html` = 17; Ergebnis im Prüfbericht.
2. **R · Build-Einstellungen** (Fachstelle, in Netlify):
   1. «Site configuration › Build & deploy» öffnen und die heutigen Werte notieren: Base directory, Build command, Publish directory, Functions directory, Framework.
   2. Base directory leer lassen, damit `netlify.toml` im Stamm gilt. Publish directory `site`; Build command leer oder wie `netlify.toml`; Framework-Preset entfernen («vite»).
   3. Die fünf Workflows unter `.github/workflows/` auf `main` und die Funktion `material-download` einzeln ansehen. Gehören sie zur React-Fassung (Build, Test, Deploy, PDF-Download), entfallen sie mit dem Merge. Tut einer etwas anderes, vor dem Merge entscheiden.
   4. Die notierten Werte und Entscheide in `PRUEFBERICHT.md` (W3) eintragen lassen.
3. **R · «Pretty URLs»:** nicht ändern (SPZ-F-35).
4. **R · Team-Anmeldung für Vorschauen** wieder einschalten (`requiresSSOTeamLogin: true`), sobald R3 abgeschlossen ist (SPZ-F-36).
5. **R · PR #659:** «Ready for review», dann Merge durch die Fachstelle.
6. **P · Produktion prüfen**, durch eine Sitzung, die nicht gebaut hat, mit denselben Punkten wie die Vorschau: Z31-W3-2, Punkte 1 bis 10; alle Regeln aus `_redirects`; Kopfzeilen gegen `_headers`; «Pretty URLs» gleich wie auf der Vorschau (`/verstehen/` → 301 `/verstehen`, Ziel 200); Fusszeile «Fachlich freigegeben am …» auf allen Seiten.
7. **P · Bei einem Fehler:** in Netlify den letzten Produktions-Deploy vor dem Merge wieder veröffentlichen und den Befund eintragen.
8. **P · Cookies messen** für die rechtliche Prüfung (SPZ-F-13): je eine Seite ohne Anmeldung abrufen und `Set-Cookie` in den Antwortköpfen zählen; Ergebnis im Prüfbericht.

## 6. Folgen für den Korrekturauftrag

### 6.1 Wichtige Befunde (alle in die Korrektur, ausser SPZ-6)

| Befund | Was die Korrektur tut | Grundlage |
| --- | --- | --- |
| SPZ-1 Fusszeile | W10 und W11, Fassung «bis zur Veröffentlichung». Die Fassung «bei der Veröffentlichung» setzt der Export (5.4, Schritt 1). Werkzeug und Gate bleiben (Profil, 6.3) | SPZ-F-2 |
| SPZ-2 Eisberg bei 200 % Schrift | Schwellen in `borderline.css` (Z. 103–125, `@container (max-width:800px)`) von px auf rem. Leitregel: «Figuren mit frei platzierten Beschriftungen wechseln bei grosser Schrift in die Listenansicht» (Profilentscheid 11.10.2026, `00-technische-qualitaet.md` Z. 23; `07-visualisierung-umsetzen.md` Z. 74). Zeichnung und Wortlaut unverändert. Prüfen bei 1024, 1280 und 1440 px mit 150 % und 200 % Schrift, Standard und «kontrast» | technisch, kein fachlicher Entscheid |
| SPZ-3 Bedeutungsschleife bei 150 % Schrift | ebenso in `borderline.css` (Z. 19, 26): Schwelle in rem, bei grosser Schrift Listenansicht. Prüfen mit 125 %, 150 % und 200 % | technisch |
| SPZ-4 Diagnostik-Teil | W1 und Abgleich nach SPZ-F-4 | SPZ-F-4 |
| SPZ-5 «Sie sind es nicht.» | W2 und Abgleich nach SPZ-F-5 | SPZ-F-5 |
| SPZ-6 PR #659 | **keine Korrektur**, erledigt durch die Fachstelle; die Nachprüfung bestätigt `draft:true` | SPZ-F-38 |

Wird bei SPZ-2 oder SPZ-3 eine Zeichnung oder ein Wortlaut berührt, statt nur die Schwelle: anhalten und melden (dann M7).

### 6.2 Optionale Befunde in die Korrektur

| Befund | Was die Korrektur tut |
| --- | --- |
| SPZ-7 | Die 17 Abgleichzeilen «folgt mit Etappe 2» nachführen: steht der Verweis heute (Freigaben 2b, 2c), Status «umformuliert» mit Fundstelle; sonst «entfällt» mit Grund. Nr. 116 nach SPZ-F-6 |
| SPZ-8, SPZ-9 | Veraltete `reason` im Plan berichtigen (`v-ix-beratung`, `v-ix-haltung`, `grenzen` › `saetze`); nur beschreiben, was heute steht |
| SPZ-11 | Abgleichzeilen mit falschem Status, Fundstelle oder fehlender Bemerkung berichtigen (Liste in SPZ-11); Nr. 91, 240 und 276 nach SPZ-F-9, -8 und -10 |
| SPZ-12 | Liste «Entfallene Sätze» (Block «Korrektur 2a-K») um den in 2a-2 ersetzten Satz ergänzen |
| SPZ-14 | `404` mit O4 korrigieren; danach steht ihr Text in der Liste «Neue Sätze» und wird mit der Nachprüfung freigegeben |
| SPZ-15 | W4 |
| SPZ-16 | O8 |
| SPZ-19, SPZ-20 | O1, O2, O3 |
| SPZ-22 | O4; dazu überall dort «Übersicht» als Name der Startseite durch «Startseite» ersetzen, wo es die Startseite meint |
| SPZ-23 | nach SPZ-F-18 |
| SPZ-26 | Abkürzungen und Fachwörter beim ersten Vorkommen je Seite erklären («BPS», «DBT» auf `behandlung`, «NICE» auf `behandlung`, «SET-UP», «Psychoedukation», «SCID-5-PD», «IPDE», «didaktisch»). Wortlaut der Erklärung aus dem Glossar auf `quellen` oder aus der späteren Erklärung auf derselben Seite, keine neue Aussage. Ist die Erklärung schon auf der Seite, nur die Reihenfolge ändern |
| SPZ-29, SPZ-30 | `UMBAUPLAN.md` nach SPZ-F-22 |
| SPZ-31, SPZ-32 | nach SPZ-F-15 |
| SPZ-33 | Ungleiche Personenbezeichnungen durch die Formen ersetzen, die die Website schon verwendet («Partnerin oder Partner», «Freundinnen und Freunde»). Fundstellen: Teile 5.3 beider Prüfungen |
| SPZ-36 | O5, O6, O7 |
| SPZ-37 | Schreibweisen vereinheitlichen nach Teil 5.3 von Prüfung 2 (SP2-S-8, -9, -10, -12): «posttraumatische» klein im Fliesstext, Zahlen nach der Leitlinie «Sprache und Ton», eine Datumsform, Gross- und Kleinschreibung nach Doppelpunkt nach Duden |
| SPZ-38 | «Zwei Sichten»: Schwelle `@container (max-width:560px)` in rem (35 rem), zusammen mit SPZ-2 und SPZ-3 |
| SPZ-40 (Teil) | In den website-eigenen Figurenklassen von `borderline.css` (Eisberg, Schleife, Zwei Sichten) `hyphens: auto` setzen, wie es die Leitlinie für Stationen in Figuren verlangt (`00-technische-qualitaet.md` Z. 58). Überschriften: Profil |
| SPZ-46 | nach SPZ-F-3 |
| SPZ-54 | Die alten `-v1`-PDF-Adressen auf den Abschnitt leiten, auf den die gleichnamige Regel `/materialien/text/<name>` zeigt, statt auf die Startseite. Ausnahme: Krisenmaterial bleibt auf `/index.html` |
| SPZ-55 | W9 |
| SPZ-60 | In der Selbstprüfung «Etappe 3-2» den Satz berichtigen, Workflows und `material-download` blieben auf `main` erhalten: Sie entfallen mit dem Merge (5.4, Schritt 2.3) |

### 6.3 Profilebene (Vorschläge für das Design-System-Artefakt; in dieser Website keine Änderung)

| Befund | Vorschlag |
| --- | --- |
| SPZ-1 (Werkzeug) | Das Produktionsgate blockiert, wenn `editorialStatus` «Entwurf» enthält oder kein Datum nennt. |
| SPZ-32 (Teil), SPZ-10, SPZ-44 | Umbau-Werkzeuge (`pruefe-abgleich.mjs`, `verwendet-auf.mjs`, `bedienung.mjs`) als Teil des Profils pflegen: Prüfen, dass jeder Bestandssatz eine Zeile hat und wörtlich im Bestand steht; Exit-Code ungleich 0 bei Abweichungen; `404` in der Seitenliste; Fokusring nicht über `box-shadow` allein erkennen. |
| SPZ-34 | Versionszeile der Fusszeile und Logo-`aria-label` in Alltagssprache. |
| SPZ-39 | Ziffernkreise der Erklärmuster in rem, damit sie mit der Schrift wachsen. |
| SPZ-40 (Teil) | Silbentrennung für lange Wörter in Überschriften (`h1`, `h2`) mit `hyphens: auto` und `lang="de-CH"`. |
| SPZ-43, SPZ-F-32 | Druckregel ergänzen: «Ist eine Darstellung mit Liste länger als eine A4-Seite, darf sie zwischen ganzen Stationen umbrechen. Titel, Kernaussage und Zeichnung stehen zusammen auf der ersten Seite, die Kennzeichnung steht direkt nach der letzten Station. Keine leere Seite davor.» |
| SPZ-45, SPZ-F-34 | Der E-Mail-Link der Absenderin bleibt Link im Text, bekommt aber eine Zielfläche von mindestens 24 × 24 px ohne Abstandsausnahme (WCAG 2.5.8). 44 px gelten nur für eigenständige Aktionen. |
| SPZ-47 | `gate.html` rechnet wie die Kommandozeile oder sagt, dass es nur eine Vorschau ist. |
| SPZ-48 | `_headers`: CSP enger, HSTS, `Cache-Control` für Schriften und Logo. |
| SPZ-49 | `export.mjs` kopiert die OFL-Lizenzdatei der Schrift mit. |
| SPZ-50 | Logo ohne C2PA-Manifest ausliefern. |
| SPZ-51 | Nicht verwendete Regeln in `site.css` entfernen. |
| SPZ-52, SPZ-53 | `export.mjs` leert das Ziel, kopiert `_redirects` und erzeugt `robots.txt` mit Sitemap-Zeile. |

### 6.4 Optionale Befunde, bewusst nicht korrigiert

| Befund | Grund |
| --- | --- |
| SPZ-10, SPZ-44 | Werkzeuge der Umbauphase; die Nachprüfung prüft die geänderten Stellen von Hand. Vorschlag fürs Profil (6.3) |
| SPZ-13 | nur zur Kenntnis, mit Freigabe 2a abgedeckt |
| SPZ-17 | Ort von der Fachstelle festgelegt (SPZ-F-7) |
| SPZ-18 | Die Statustabelle führen die Prüfsitzungen; die nächste, die sie nachführt, bereinigt die veralteten «offen»-Angaben |
| SPZ-21 | Die Linktexte sind allein verständlich («Borderline verstehen» ist der Titel der Seite); M4 |
| SPZ-24 | SPZ-F-16 |
| SPZ-25 | Der Kicker nennt das Thema der Seite, kein Missverständnis möglich; M4 |
| SPZ-27 | «Fachleute» und «Fachpersonen» meinen dasselbe und stören das Verstehen nicht; M4 |
| SPZ-28 | SPZ-F-19 |
| SPZ-35 | Umformulieren auf freigegebenen Seiten mit dem Risiko, Absicherungen zu verlieren (M2, M4, SPZ-F-23). R2 prüft die Lesbarkeit aus Sicht der Lesenden |
| SPZ-41 | SPZ-F-30 |
| SPZ-42 | SPZ-F-25: Erklärtext, Vertiefung und Abschnittstext tragen die Figur; ein zusätzlicher Satz wäre eine neue Freigabe ohne Gewinn |
| SPZ-56, SPZ-58 | SPZ-F-35 |
| SPZ-57 | SPZ-F-36, Handlung |
| SPZ-59 | Das Ergebnis der Selbstprüfung stimmt (Prüfung 2); nur die Zahl ist nicht nachrechenbar |
| SPZ-34, -39, -40 (Teil), -43, -45, -47 bis -53 | Profilebene (6.3) |

### 6.5 Regeln für die Korrektur

- Nur die Stellen aus 3, 6.1 und 6.2. Jede Änderung mit Abgleichzeile (Status, Fundstelle, Bemerkung «Entscheide Schlussprüfung, SPZ-…»).
- Liste «Neue Sätze zur Freigabe» und «Entfallene Sätze» in der Selbstprüfung.
- `node tools/build.mjs` ohne blockierende Befunde; `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle; `node abgleich/verwendet-auf.mjs --ohne-legenden`: 0 Abweichungen.
- Abbildungen `v-vs-anspannung`, `v-bz-schleife`, `v-vs-eisberg`, `v-bz-sichten` bei 360, 1024, 1280 px, mit 150 % und 200 % Schrift, Standard und «kontrast» ansehen.
- Danach Export auf die Vorschau, damit Nachprüfung und reale Tests den neuen Stand sehen.

## 7. Zählung

| Art | Zahl | Fragen |
| --- | --- | --- |
| keine Änderung | 16 | SPZ-F-1, -7, -11, -12, -16, -17, -19, -20, -23, -24, -25, -26, -28, -29, -30, -31 |
| Änderung | 14 | SPZ-F-2, -3, -4, -5, -6, -8, -9, -10, -15, -18, -21, -22, -27, -39 |
| Profilebene | 2 | SPZ-F-32, -34 |
| Handlung der Fachstelle | 5 | SPZ-F-33, -35, -36, -37, -38 |
| rechtliche Prüfung | 2 | SPZ-F-13, -14 |
| zurück an die Fachstelle | 0 | – |
| **zusammen** | **39** | |

- **Zurück an die Fachstelle:** keine Frage. Offen bleiben aber Punkte, die diese Sitzung nicht entscheiden kann: Person und Termin der realen Tests (SPZ-F-33), das Ergebnis der rechtlichen Prüfung (SPZ-F-13, -14) und das Datum der Produktionsfreigabe (SPZ-F-2 b).
- **Unter Bedingung:** SPZ-F-21 wird nur umgesetzt, wenn die Bezeichnung in der ICD-10-GM 2024 so steht.
- **Erneute Freigabe nach der Nachprüfung:** `v-vs-anspannung` (SPZ-F-8), `v-bz-schleife` (SPZ-F-9), die regelbasierten Sätze aus 6.2.
- **Nicht Teil dieser Entscheide** (Auftrag, Abschnitt 5): die rechtliche Prüfung selbst, NK-F-3, die Korrektur, die Nachprüfung, R1 bis R3.
- **Stand der Stufen:** unverändert; W1, W2, S, Visualisierungs-Check, Bedienung und Barrierefreiheit, W3, R1, R2 und R3 sind «offen».
