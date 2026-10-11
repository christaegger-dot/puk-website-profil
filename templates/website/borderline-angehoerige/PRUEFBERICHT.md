# Prüfbericht · Borderline – Orientierung für Angehörige

Gehört zur Website in diesem Ordner. Wer den Starter kopiert, übernimmt diese Vorlage: Titel anpassen, alle Stufen stehen auf «offen». Ohne vollständigen Prüfbericht blockiert `node tools/gate.mjs --production` die Veröffentlichung (Abschnitt «Prüfung und Freigabe»).

**Regeln**

- **Bauen und Prüfen sind getrennt.** Die Stufen unten prüft eine Sitzung oder Person, die die Website nicht gebaut hat. Die bauende Sitzung macht nur die Selbstprüfung (unten) und trägt keine Stufe als «erledigt» ein.
- **Jeder Punkt braucht einen Beleg** (Seite und Abschnitt, Figur, Zitat). Ein Punkt ohne Beleg gilt als nicht geprüft. Ein Gesamturteil ersetzt keine Einzelprüfung.
- **Kein Merge ohne Prüfbericht.** Ein Pull Request mit einer neuen oder geänderten Website enthält diesen Bericht im aktuellen Stand und verweist in der Beschreibung darauf.
- **Status:** «offen», «erledigt» oder «entfällt: Begründung». Fachliche Freigaben trägt nur die Fachstelle ein.

## Status

| Stufe | Status | Datum | Geprüft durch | Ergebnis |
| --- | --- | --- | --- | --- |
| W1 Fachliche Prüfung | offen | 10.10.2026 | Fachstelle Angehörigenarbeit PUK (Freigabe Etappe 1); vierte Prüfrunde: eine Prüfsitzung (Claude, hat nicht gebaut); Fachstelle (Freigabe Etappe 2a); Prüfrunde 2b: eine Prüfsitzung (Claude, hat nicht gebaut); Fachstelle (Freigabe Etappe 2b) | Etappe 1 fachlich freigegeben (Abschnitt «Fachliche Freigabe der Fachstelle»); alle 21 Fragen P4-F-1 bis P4-F-21 entschieden. Offen, bis die Seiten von Etappe 2 geprüft und freigegeben sind. Prüfrunde 2a: 2 wichtig, 3 optional; 10 Fragen P2a-F-1 bis P2a-F-10. Etappe 2a (`rolle`, `selbstfuersorge`, Einstiege auf `index`) fachlich freigegeben am 10.10.2026. Prüfrunde 2b (`kommunizieren`, `krise`, Einstieg auf `index`): 4 wichtig, 3 optional; 12 Fragen P2b-F-1 bis P2b-F-12. Nachprüfung 2b-K (Stand `f9e2314`, eine Prüfsitzung, hat weder gebaut noch 2b-K umgesetzt): Korrektur wie beauftragt; 1 wichtig (Liste «Neue Sätze zur Freigabe»), 3 optional; 3 Fragen. Etappe 2b (`kommunizieren`, `krise`, Einstieg auf `index`) fachlich freigegeben am 11.10.2026. Prüfrunde 2c (Stand `7ee24ba`, `genesung`, `unterstuetzung`, `diagnose`, `behandlung`, Einstiege auf `index`; eine Prüfsitzung, hat weder 2c-1 noch 2c-2 gebaut): 2 wichtig, 5 optional; 17 Fragen P2c-F-1 bis P2c-F-17. Prüfrunde 2c, zweite Prüfsitzung (Stand `7ee24ba`): 2 wichtig, 1 optional; 15 Fragen P2c2-F-1 bis P2c2-F-15. |
| W2 Gesamtkohärenz | offen | 10.10.2026 | vierte Prüfrunde | 1 wichtig, 3 optional; offen weiter F-W2-02, F-W2-03 (jetzt P4-F-18, P4-F-19). Prüfrunde 2a: 5 optional. Prüfrunde 2b: 1 wichtig, 3 optional Prüfrunde 2c: 2 optional Prüfrunde 2c, zweite Prüfsitzung: 1 wichtig, 2 optional. |
| S Sprach-Review | offen | 10.10.2026 | vierte Prüfrunde | 6 optional; Lesetest je Abschnitt und Kennzahlen; abschliessbar erst nach W1 und W2. Prüfrunde 2a: 1 wichtig (Länge), 3 optional; 24 Kürzungsvorschläge. Prüfrunde 2b: 4 optional; Längenziel nachgerechnet und erreicht; 6 Kürzungsvorschläge Prüfrunde 2c: 3 optional; Längenziele nachgerechnet und erreicht Prüfrunde 2c, zweite Prüfsitzung: 6 optional; Längenziele nachgerechnet und erreicht. |
| Visualisierungs-Check | offen | 10.10.2026 | vierte Prüfrunde | 1 wichtig, 5 optional; Matrix 1–17 × 6 Figuren; seit 10.10.2026 alle sechs Figuren fachlich freigegeben (Fachstelle). Prüfrunde 2a: 1 wichtig, 3 optional; Matrix 1–17 × 2 neue Figuren. Etappe 2a: beide Abbildungen fachlich freigegeben (Fachstelle, 10.10.2026). Prüfrunde 2b: 1 optional; Matrix 1–17 für «Zwei Tassen» (`v-ko-tassen`), trägt, Freigabe ausstehend. Nachprüfung 2b-K: «Zwei Tassen» nach dem Verschieben angesehen, trägt, Freundin-Test bestanden, Freigabe ausstehend. Etappe 2b: «Zwei Tassen» fachlich freigegeben (Fachstelle, 11.10.2026). Prüfrunde 2c: «Ein neuer Trieb» (`v-ge-trieb`), Matrix 1–17, trägt für die Kernaussage; 1 wichtig, 1 optional; Freigabe ausstehend. Prüfrunde 2c, zweite Prüfsitzung: «Ein neuer Trieb» trägt nur mit Änderung; 2 wichtig, 1 optional; zwei Textdarstellungen ohne Befund. |
| Bedienung und Barrierefreiheit | offen | 10.10.2026 | vierte Prüfrunde, automatisiert | kein Befund; reale Screenreader-Läufe, Hardwaretastatur und Touch fehlen (nicht prüfbar). Prüfrunde 2b: kein Befund (automatisiert) Prüfrunde 2c: kein Befund (automatisiert) |
| W3 Code-Review | offen | 10.10.2026 | vierte Prüfrunde: nur Stichprobe Technik und Zuständigkeit, kein volles W3 | Stichprobe ohne Befund; W3 erst nach Umsetzung von W2 und S. Prüfrunde 2b: Stichprobe Technik und Zuständigkeit ohne technischen Befund Prüfrunde 2c: Stichprobe Technik und Zuständigkeit, 1 optional (Plan), keine Nummer, kein `tel:` |
| R1 Profil-Audit | offen | | | noch nicht geprüft |
| R2 Visualisierung und Laienverständlichkeit | offen | | | noch nicht geprüft (Lesetest und Bildsprache der vierten Runde sind Vorarbeit, kein R2) |
| R3 Freigabe-Audit | offen | | | noch nicht geprüft |

Dazu 5 leichte Befunde zu Bericht und Abgleich. Die erste und zweite Prüfrunde stehen weiter unten zur Nachvollziehbarkeit; ihre Befunde sind durch die dritte Runde überholt, soweit sie nicht ausdrücklich als offen genannt sind.

## Fachliche Freigabe der Fachstelle

**10.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`KORREKTUR-ETAPPE-1J.md`).

- **Etappe 1 ist fachlich freigegeben:** die Seiten `index`, `verstehen`, `beziehungen` und `grenzen` als Ganzes, mit allen Texten im Stand `540c37d` (nach Korrektur 1i) und der Quellenzeile aus Korrektur 1j.
- **Die sechs Abbildungen sind fachlich freigegeben (P4-F-21):** Eisberg (`v-vs-eisberg`), Anspannungskurve (`v-vs-anspannung`), Momentaufnahmen (`v-vs-bewertungen`), Bedeutungsschleife (`v-bz-schleife`), Zwei Sichten (`v-bz-sichten`) und DEAR (`v-gr-dear`).
- **Die neuen Beispielsätze sind fachlich freigegeben (P4-F-8):**
  - `verstehen`: «Du bist die Einzige, die mich versteht.», «Sätze, die Angehörige hören können:» und «Erfahrungen in engen Beziehungen können mitwirken, neben vielen anderen Einflüssen.»
  - `beziehungen`: «Wie hast du meine Absage verstanden?», «Ich bin bei der Arbeit. Ich melde mich heute Abend.», «Vorhin warst du plötzlich weit weg. Wie war das für dich?», «Ich habe den Eindruck, du bist enttäuscht von mir. Stimmt das?», «Vielleicht wirkt die Person bei Freunden oder bei der Arbeit ruhiger als bei Ihnen.» und «Das kann kränken.»
  - `grenzen`: «Lass uns zusammen schauen, wer dich sonst noch unterstützen kann.»
- **Quellen (P4-F-16):** Die Quellenzeilen tragen die Aussagen. Bei den Ursachen (`verstehen` › `borderline`) kommt NICE CG78 (2009) dazu, wie im Bestand. Fruzzetti (2006) und Gunderson et al. (1997) bleiben auf `beziehungen`. Die Bezugspunkte der Anspannungskurve stammen aus den Handouts des Bestands und bleiben.
- **Alle 21 Fragen der vierten Prüfrunde sind entschieden:** P4-F-1 bis -7, -9 bis -15 und -17 bis -20 mit Korrektur 1i (P4-F-14, -15, -18 und -20 als Strukturentscheide), P4-F-8, -16 und -21 hier.
- **Nicht Teil dieser Freigabe:** die zwölf Platzhalter und die Seiten von Etappe 2. Die Platzhalter markieren Seiten, die noch folgen, und entfallen, wenn diese gebaut sind.
- **Weiter offen vor der Veröffentlichung:** W2, S, Visualisierungs-Check und W3 abschliessen, reale Screenreader-Läufe, Hardwaretastatur und Touch, danach R1 bis R3.

### Etappe 2a

**10.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`FREIGABE-ETAPPE-2A.md`).

- **Etappe 2a ist fachlich freigegeben:** die Seiten `rolle` («Ihre Rolle klären») und `selbstfuersorge` («Auf sich achten») als Ganzes und auf `index` die zwei neuen Einstiege, mit allen Texten im Stand `416f6d0` (nach den Korrekturen 2a-K und 2a-2).
- **Die neuen Sätze sind freigegeben (P2a-F-5):** alle Sätze der Liste «Neue Sätze zur Freigabe» in der Selbstprüfung (Block «Korrektur 2a-K», nachgeführt mit 2a-2).
- **Die zwei Abbildungen sind fachlich freigegeben (P2a-F-6):** «Ein Stück Weg» (`v-ro-weg`) und «Ein freier Abend» (`v-sf-abend`).
- **Alle zehn Fragen der Prüfrunde 2a sind entschieden:** P2a-F-1 bis -4 und -6 bis -10 mit den Korrekturen 2a-K und 2a-2, P2a-F-5 und die Freigabe der Abbildungen hier.
- **Nicht Teil dieser Freigabe:** die Seiten der Etappen 2b und 2c, die Platzhalter und die Verweise von den Etappe-1-Seiten auf die neuen Seiten (V1–V9). Über die Verweise wird am Schluss von Etappe 2 entschieden.
- **Weiter offen vor der Veröffentlichung:** wie bei Etappe 1. Dazu kommt eine unabhängige Prüfung der Korrekturen 2a-K und 2a-2 in der Schlussprüfung, weil die Sitzung, die sie umgesetzt hat, auch die Prüfrunde 2a gemacht hat.

### Etappe 2b

**11.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`FREIGABE-ETAPPE-2B.md`).

- **Etappe 2b ist fachlich freigegeben:** die Seiten `kommunizieren` («Zugewandt und klar sprechen») und `krise` («Krisen begleiten») als Ganzes und auf `index` der neue Einstieg, mit allen Texten im Stand nach den Korrekturen 2b-K und 2b-2 und den Anpassungen aus `FREIGABE-ETAPPE-2B.md`.
- **Die neuen Sätze sind freigegeben (P2b-F-11 a):** alle Sätze der Liste «Neue Sätze zur Freigabe» in der Selbstprüfung, im nachgeführten Stand. Die Liste ist die Übersicht zur Freigabe als Ganzes.
- **Die Abbildung «Zwei Tassen» (`v-ko-tassen`) ist fachlich freigegeben (P2b-F-11 b).**
- **Alle Fragen sind entschieden:** P2b-F-1 bis -12 der Prüfrunde 2b, die Fragen der Selbstprüfung bis Nr. 12 und die drei Fragen der Nachprüfung 2b-K.
- **Quellen am Seitenende (Korrektur 2b-2):** Auf allen Seiten stehen die Quellen in «Quellen zu dieser Seite». Auf den Seiten der Etappen 1 und 2a hat sich dadurch nur der Ort der Quellen geändert; ihre Freigaben gelten weiter.
- **Verweise auf die neuen Seiten:** Die sieben Verweissätze auf `verstehen`, `beziehungen`, `grenzen` und `selbstfuersorge` aus `FREIGABE-ETAPPE-2B.md` sind freigegeben. Verweise auf die Seiten der Etappe 2c folgen mit 2c.
- **Nicht Teil dieser Freigabe:** die Seiten der Etappe 2c und die Platzhalter.
- **Weiter offen vor der Veröffentlichung:** wie bei Etappe 1 und 2a. Dazu kommt in der Schlussprüfung eine unabhängige Prüfung der Korrekturen 2b-K und 2b-2 und der Anpassungen aus `FREIGABE-ETAPPE-2B.md`.

## Selbstprüfung der bauenden Sitzung

Nach jedem Bau ohne Nachfrage ausfüllen: Visualisierungs-Check wie unten, mit Beleg je Punkt. Arbeitsstand, keine Prüfstufe.

**Stand 11.10.2026 · Etappe 2c-2 · bauende Sitzung (Claude Code).** Umgesetzt ist `BAUAUFTRAG-ETAPPE-2C2.md` (Seiten `diagnose` und `behandlung`, Korrekturen an `genesung` und `unterstuetzung`). Grundlage ist `borderline-umbau` am Stand `66d73b1`. Geändert sind nur:

- `content/` und die gebauten Seiten von `diagnose` und `behandlung` (neu gebaut, Abschnitte 3 bis 5), `genesung` › `einfluesse` (zwei Sätze, Abschnitt 6) und `unterstuetzung` › `austausch` (ein Eintrag, Abschnitt 6)
- `borderline.css`: Regeln für die Schritte auf `diagnose` (`.bl-stufen` mit h3, Zeile «Ihre Rolle»), die zwei Listen nebeneinander (`.bl-zwei`) und die drei Rollen (`.bl-rollen`); in der Druckregel Kicker und Titel zusammen (gilt für alle Seiten, nur im Druck)
- `site.config.json`: `diagnose` und `behandlung` (Status, Aufgabe, Beschreibung, `sensitiveTopics`, `visualPlan`); in `unterstuetzung` die Begründung der Planzeile `v-un-austausch`
- der Abgleich: zwei neue Tabellen, `genesung.md` (Nr. 145, 163, 396), `beziehungen.md` (Nr. 208), `README.md` und drei Skripte (`pruefe-abgleich.mjs`, `kennzahlen.mjs`, `bedienung.mjs`; `verneinung.mjs` übernimmt die Seiten aus `kennzahlen.mjs`)
- in diesem Bericht nur dieser Block

Die freigegebenen Seiten sind im Wortlaut unverändert (`git diff 66d73b1 --word-diff` über `content/` und die gebauten Seiten von `index`, `verstehen`, `beziehungen`, `grenzen`, `rolle`, `selbstfuersorge`, `kommunizieren` und `krise`: leer). Keine Prüfstufe ist «erledigt»; der Status bleibt in allen Zeilen «offen». Der Block «Etappe 2c-1» steht darunter.

**Auftrag im Website-Ordner:** `BAUAUFTRAG-ETAPPE-2C2.md` lag im Stamm von `main` (`89fc0ef`). Die Datei liegt unverändert in diesem Ordner (`9d2e5be`; `cmp` und SHA-256 gleich). Sie ist aus dem Stamm von `main` entfernt (`16a4a87`, direkter Push auf `main`, wie bei 2c-1).

### Etappe 2c-2: Stand je Abschnitt des Auftrags

| Abschnitt | Stand | Beleg |
| --- | --- | --- |
| 1 Entscheide | umgesetzt | Eine Angebotsliste auf `behandlung` › `angebote`, nur mit Link zur Website, ohne Telefonnummern und ohne Stations-E-Mail; `diagnose` verweist dorthin («Angebote für Abklärung und Therapie stehen auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Angebote im Kanton Zürich».», dazu der Verweissatz zu HYPE Züri). «Kein Therapieplatz oder lange Wartezeit» steht nur auf `behandlung` › `wartezeit`. Zwei Textdarstellungen ohne Zeichnung und ohne `figure`: `diagnose` › `abklaerung` (fünf nummerierte Schritte) und `behandlung` › `rollen` (drei Rollen nebeneinander), beide im Plan mit Format `text`. Diagnostik-Text nicht wiederholt, Verweissatz auf `verstehen#borderline`; Medikamente und Begleiterkrankungen in der Behandlung auf `behandlung` › `therapieformen`, `diagnose` verweist dorthin; die Gruppe für Eltern auf `unterstuetzung` › `austausch`; Therapieformen als Begriffsliste. `navLabel` beider Seiten `null`, kein Einstieg auf `index` (`index` unverändert) |
| 2 Regeln | umgesetzt, Rest siehe «Zur Prüfung» | Keine Semikolons im Fliesstext (`kennzahlen.mjs`: `diagnose` 20 → 0, `behandlung` 11 → 0). Personenzentriert und ohne Doppelpunkt: «betroffene Person» statt «erkrankte Person» (`behandlung.md` Nr. 48, 92), «Hausarztpraxis», «Patientinnen und Patienten», «Ärztinnen und Ärzte», «Psychiaterinnen und Psychiater» statt der Formen mit Doppelpunkt; Gate `person-first` ohne Hinweis. Verantwortung im Wortlaut von `verstehen`: «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (`diagnose` › `begleiterkrankungen`); kein «allein» bei Erkrankung, Behandlung oder Genesung (einziges «allein» auf beiden Seiten: «allein für die Qualität der Beziehung sorgen», Spalte «Die betroffene Person», und «Aus der Borderline-Diagnose allein …»). Akute Gefahr im Wortlaut von `krise` mit «Notruf»; keine Links auf `/soforthilfe`. Vier Verweise im Text (Tabelle unten), keiner in einer Vertiefung; Anleitungen aus Vertiefungen entfallen dort («zusammengeführt», `behandlung.md` Nr. 103, 121). Verlinkt statt wiederholt: `verstehen#borderline`, `rolle#anbieten`, `rolle#schuld`, `krise#suizid`, `krise#danach`, `index#beratung` (zweimal), `selbstfuersorge#warnsignale`, `#unterstuetzung`, `genesung#forschung`, `genesung#verlauf`, `unterstuetzung#beratung` (zweimal), `#austausch` (zweimal), `#kantone`, `diagnose#begleiterkrankungen` und die Links von `diagnose` auf `behandlung` (`#rollen`, `#angebote` zweimal, `#therapieformen`); nicht verlinkt: `selbstfuersorge#beratung` (der Bestand nennt dort «Beratung & Netzwerke», das trägt `unterstuetzung#beratung`). Keine Links auf `fragen`, `quellen`, `ueber` (Build ohne `link-draft`). Angebote nur mit Link, keine Nummer, kein `tel:` und kein `mailto:` in `main`. Quellen nur im Block «Quellen zu dieser Seite». Länge: `diagnose` 1538, `behandlung` 1677 Wörter im Lesefluss (Ziel je etwa 1800). Vertiefungen als Akkordeon des Profils, ohne Skript offen (4 von 4, 8 von 8) und im Druck vollständig. Abgleich vollständig (unten) |
| 3 `diagnose` | umgesetzt, Gliederung wie vorgeschlagen, kleine Abweichungen (Entscheide Nr. 1 bis 4) | Kopf: H1 «Diagnose und Begleiterkrankungen» (nennt beide Themen), Einleitung aus dem Bestand mit «Die Seite ist keine Anleitung, jemanden zur Diagnose zu drängen, …» und einem Satz zu Begleiterkrankungen. 01 `abklaerung`: einleitende Sätze (wer abklärt, Gesamtbeurteilung, gestufter Prozess), fünf Schritte als `ol.bl-stufen` mit «Schritt n», Name, was geschieht, «Ihre Rolle» bei Schritt 1, 3, 4 und 5, bei Schritt 5 der Verweissatz auf `behandlung#rollen`; darunter «Eine Diagnose ist ein Anfang, kein Etikett.» und hervorgehoben «Die Diagnose ist eine fachliche Beurteilung über Zeit, nicht ein Stempel aus einem einzelnen Gespräch.»; «Bei Jugendlichen» sichtbar mit den Verweissätzen auf `behandlung#angebote` und `unterstuetzung#austausch`; Vertiefung «Wie die Diagnose beschrieben wird» (DSM-5-TR, ICD-11, Schweizer Kodierkontext mit F60.31, strukturierte Interviews). 02 `bedeutung`: Bestand, Verweissätze auf `verstehen#borderline` und `genesung#forschung`, «Was eine Diagnose nicht leistet». 03 `zweifel`: zwei Listen nebeneinander (`.bl-zwei`, schmal untereinander), «Klare Grenze» als Handlungsanleitung, danach der Verweis im Text. 04 `ohne-diagnose`: Wiedererkennen erlaubt keine Diagnose, Hausarztpraxis, «Sie müssen nicht warten, bis eine Diagnose gestellt ist» mit Verweissatz auf `index#beratung`, spezialisierte Stellen mit Verweissatz auf `behandlung#angebote`, «Bin ich auch betroffen?» mit «Diese Seite ist kein Selbstdiagnose-Werkzeug.» und Verweissatz auf `selbstfuersorge#warnsignale`. 05 `begleiterkrankungen`: Komorbidität erklärt, sechs Beispiele mit «Die Reihenfolge ist keine Rangfolge.», hervorgehoben «Mehrere Diagnosen heissen mehr Komplexität, nicht mehr Schuld. Sie müssen nicht sortieren, was was ist.», Differenzialdiagnostik in zwei Sätzen, Verweissatz auf `behandlung#therapieformen`, Unterkapitel «Depression» (nicht selbst unterscheiden, Beobachtungen benennen, Sorge nicht verharmlosen, eigene Belastung mit Verweissatz auf `selbstfuersorge#unterstuetzung`) und «Wenn Suizidgedanken dazukommen» (NICE-Gruppenbefund, professionelle Einschätzung, Handlungsanleitung, Verweis im Text, Verweissatz auf `krise#suizid`); Vertiefungen «Mögliche Hinweise auf eine depressive Phase» und «Weitere Begleiterkrankungen kurz». Quellenblock mit 13 Einträgen. `visualPlan` `v-di-abklaerung` mit der `reason` des Auftrags |
| 4 `behandlung` | umgesetzt, Gliederung wie vorgeschlagen, kleine Abweichungen (Entscheide Nr. 5 bis 9) | Kopf: Einleitung des Bestands und «Behandlung kann Veränderung unterstützen.» (vorgemerkt). 01 `rollen`: «Was passt, hängt von Wünschen, Einwilligung, Situation und verfügbaren Kräften ab.», drei Rollen über die volle Breite in der Reihenfolge betroffene Person, Fachpersonen, Angehörige, je «Kann beitragen» und «Nicht zu erwarten», alles sichtbar, kein `figure`; bei «Angehörige» › «Nicht zu erwarten» die Punkte aus «Was Ihre Rolle ausdrücklich nicht ist», «Fortschritt kontrollieren» und «Behandlungsfortschritt nicht kontrollieren oder überwachen» als ein Punkt; danach die drei Kernsätze, hervorgehoben «Sie müssen eine Therapie weder zum Funktionieren bringen noch ihren Rahmen mittragen. …» und der Verweissatz auf `rolle#anbieten`. Grundlage (Linehan 1993, Gunderson und Hoffman 2005, AWMF 2022) im Quellenblock. 02 `kontakt`: drei Informationswege als Begriffsliste, Handlungsanleitung und Verweis im Text, «Die eigene Rolle und Ansprechwege klären» mit den vier Fragen sichtbar, sechs Vertiefungen (fünf Situationen und Musterbrief); in «Nach einer Krise» nur Entlassung und Austrittsbericht, dazu Verweissatz auf `krise#danach`. 03 `therapieformen`: Einordnung der Forschung, fünf Therapieformen als Begriffsliste mit je einem Satz, drei Settings, Unterkapitel «Begleiterkrankungen und Medikamente» (Abschnitt 4 b im Wortlaut, danach «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.»), Vertiefung «Programme für Angehörige». 04 `rueckschlaege`: Bestand, «Wenn Therapie gerade schwierig ist», «Was Sie tun können» mit «Therapie als Möglichkeit ansprechen, nicht als Drohung», offene Fragen, Dolmetschung, Verweissatz auf `genesung#verlauf`. 05 `angebote`: Angebotsliste (Abschnitt 5). 06 `wartezeit`: vier Schritte, bei Schritt 4 Handlungsanleitung und Verweis im Text, Verweissätze auf `unterstuetzung#kantone` und `#beratung`. Quellenblock mit 17 Einträgen. `visualPlan` `v-be-rollen` mit der `reason` des Auftrags |
| 5 Angebotsliste | umgesetzt | Einleitung im Wortlaut des Auftrags («Die Liste ist nicht abschliessend. …», Kosten, «Aktuelle Bedingungen und Anmeldung stehen auf der Website des Angebots.»). Sechs Einträge mit Name, einem Satz, «Für: …» und Link; Adressen wie in der Tabelle des Auftrags (Prüfungen unten). Hinweise der Tabelle in der Liste «Zur Prüfung» (Nr. 15) |
| 6 Korrekturen | umgesetzt | `genesung` › `einfluesse`: «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» und nach «… braucht eine individuelle fachliche Abklärung.» der Verweissatz mit Link auf `diagnose.html#begleiterkrankungen`; `genesung.md` Nr. 163 mit diesem Ort. `unterstuetzung` › `austausch`: neuer Eintrag nach VASK Zürich mit dem Bestandstext, «Teilnahmebedingungen und Anmeldung stehen auf der Website.» und Link; im Abgleich `diagnose.md` Nr. 187 bis 191 mit Ort `unterstuetzung#austausch`. Sonst bleiben beide Seiten wie gebaut. `git diff --word-diff` (nur diese Stellen): `genesung`: [-Änderungen-] {+Medikamente werden+} nur {+gemeinsam+} mit der behandelnden [-Fachperson.-] {+Fachperson geändert.+} und {+Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen».+}; `unterstuetzung`: {+Gruppe für Eltern von Jugendlichen mit Borderline · Für Eltern jugendlicher Betroffener gibt es … umgehen lernen. Teilnahmebedingungen und Anmeldung stehen auf der Website. · Website: Persönlichkeitsstörungen bei Jugendlichen auf www.pukzh.ch+} |
| 7 `site.config.json` | umgesetzt | `diagnose` und `behandlung`: `status` «published», `primaryTask`, `description`, `sensitiveTopics` (`diagnose`: «selbstgefaehrdung», «akute-krise»; `behandlung`: dazu «gewalt» wegen «Gewaltgespräche»; ohne die Einträge blockiert `safety-contract`), `visualPlan` mit einer Zeile je Abschnitt und dem Quellenblock (6 und 7 Zeilen), alle Format `text`; `navLabel` `null`; die Zeilen `v-diagnose-geplant` und `v-behandlung-geplant` sind weg |
| 8 Zur Prüfung | Liste unten | Tabelle «Zur Prüfung durch die Fachstelle» mit Bestandszitat |
| 9 Danach | bestanden, Abweichungen siehe unten | Prüfungen unten. Nicht möglich: die Ziele der externen Links online aufrufen (Netzwerkrichtlinie dieser Umgebung, `CONNECT` abgelehnt); geprüft ist, dass jede Adresse der Adresse in Abschnitt 5 des Auftrags oder des Bestands entspricht |

### Etappe 2c-2: Prüfungen nach Abschnitt 9

- **`node tools/build.mjs`:** 0 blockierend, 6 Hinweise: 1 × `visual-approval` (`v-ge-trieb`), 3 × `placeholder-approval`, `site-url`, `review-report`.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 5 blockierend und 1 Hinweis (`site-url`), wie erwartet: 1 × `visual-approval` («Ein neuer Trieb»), 3 × `placeholder-approval` (`fragen`, `quellen`, `ueber`), 1 × `review-report`.
- **`node abgleich/pruefe-abgleich.mjs`:** 6067 Zeilen, 0 ohne Fundstelle (vorher 5342; dazu 388 + 17 in `diagnose.md`, 291 + 29 in `behandlung.md`). Vor dem Nachführen der Bemerkungen meldete es 11 Zeilen ohne Fundstelle (Zitate in Bemerkungen).
- **Bildschirmfotos, angesehen** (68 Fotos): die Schritte (`diagnose` › `abklaerung`), die zwei Listen (`zweifel`) und die drei Rollen (`behandlung` › `rollen`) bei 1280 und 360 px, Standard und «kontrast»; jede Vertiefung offen bei 1280 und 360 px in beiden Themes (`diagnose`: «Wie die Diagnose beschrieben wird», «Mögliche Hinweise auf eine depressive Phase», «Weitere Begleiterkrankungen kurz», «Quellen zu dieser Seite»; `behandlung`: fünf Situationen, «Musterbrief für einen ersten Kontakt», «Programme für Angehörige», «Quellen zu dieser Seite»); dazu `genesung` › `einfluesse` und `unterstuetzung` › `austausch`.
  - Schritte: senkrechte Linie mit Punkten wie die sechs Stufen auf `kommunizieren`; «Ihre Rolle» klein über einer Zeile mit blauer Linie; schmal ohne Abschneiden.
  - Rollen: breit drei Spalten mit Linie oben, schmal untereinander; «Kontakt anbieten, wenn er gewünscht und für Sie tragbar ist» und «auf Wunsch bei Behandlungsschritten unterstützen» brechen sauber um.
  - Zwei Listen: bei 1280 px nebeneinander, bei 360 px untereinander.
  - «kontrast»: Linien und Punkte dunkler, nichts verschwindet.
- **Überlauf:** 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px, Vertiefungen zu und offen, `diagnose`, `behandlung`, `genesung` und `unterstuetzung` in beiden Themes (72 Messungen): kein waagrechter Überlauf, kein Element breiter als das Fenster. Zoom 200 % (640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %), alle vier Seiten: 0 px Überlauf.
- **Kontraste:** alle Textelemente mit eigenem Text in `main`, Kopf und Fusszeile der vier Seiten, beide Themes, 1280 und 360 px, Vertiefungen offen: keines unter AA; tiefster Wert 4,71 : 1 (Link der Absenderin, wie 2c-1). Die kleinen Bezeichnungen «Schritt n», «Ihre Rolle», «Kann beitragen», «Nicht zu erwarten» (`--text-muted`, `type-caption`) liegen darüber.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps bis zur Fusszeile: `diagnose` 30, `behandlung` 35, `genesung` 21 (vorher 20, ein Link mehr), `unterstuetzung` 22 (vorher 21); jeder mit sichtbarem Fokus und im Fenster; der erste ist «Zum Hauptinhalt».
  - Reihenfolge wie beim Lesen: Kopf, Navigation, Absenderin, Kapitelübersicht, dann Links und Vertiefungen im Text, zuletzt «Quellen zu dieser Seite».
  - Vertiefungen: Enter öffnet 4 von 4 und 8 von 8, Leertaste schliesst sie. Nach dem Laden läuft keine Animation.
- **Ohne Skript:** 4 von 4 und 8 von 8 Panels sichtbar.
- **Druck:** PDFs aus Chromium in acht Einstellungen je Seite (A4 und Letter; Rand 0 bis 25 mm; Skalierung 70 bis 100 %), alle zwölf gebauten Themenseiten und `index`; je Seite die letzte Zeile gegen alle Titel, Begriffe, Kicker und die Bezeichnungen der Schritte und Rollen. Ergebnis nach der Ergänzung der Druckregel: 0 Titel allein am Seitenende. Vorher stand auf `behandlung` der Kicker «02 · Behandlungsteam» allein am Ende von Seite 2 (A4 ohne Rand), der Titel oben auf Seite 3; die Druckregel hält jetzt Kicker und Titel zusammen. Die Prüfung meldet einmal «Substanzgebrauchsstörungen» am Ende von Seite 8 (`diagnose`, A4 ohne Rand); das ist der vierte Punkt der Liste der Begleiterkrankungen, kein Titel. Die freigegebenen Seiten am Stand `66d73b1` (alte Druckregel) haben in denselben Einstellungen keinen Kicker allein am Seitenende. Seitenzahl A4 ohne Rand: `diagnose` 14, `behandlung` 18; Vertiefungen und externe Links (mit Adresse) im Druck sichtbar.
- **`node abgleich/bedienung.mjs`:** `diagnose` 30 Tabstopps, 17 739 px bei 360 px; `behandlung` 35 Tabstopps, 21 298 px; `genesung` 21, 14 299 px; `unterstuetzung` 22, 13 707 px. Übrige Seiten unverändert.
- **Sprung über die Kapitelübersicht zum letzten Abschnitt** (letzter Eintrag, Klick, Abstand der Abschnittsoberkante vom Fensterrand): 1280 × 900, 1920 × 1080 und 360 × 800 px je 24 px auf `diagnose` (`#begleiterkrankungen`), `behandlung` (`#wartezeit`), `genesung` (`#freiwillig`) und `unterstuetzung` (`#buecher`).
- **Externe Links** (alle in `main`, Linktext beschreibt das Ziel, kein `target="_blank"`):
  - `behandlung`: `https://www.pukzh.ch/unsere-angebote/kinder-und-jugendpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/` (HYPE Züri), `https://www.pukzh.ch/unsere-angebote/erwachsenenpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/` (PUK, Erwachsene), `https://ipw.ch/angebot/kinder-jugendliche-junge-erwachsene/psychotherapiestation-fuer-junge-erwachsene`, `https://www.sanatorium-kilchberg.ch`, `https://www.clienia.ch/de/standorte/clienia-schloessli/stationen/a2/`, `https://www.dachverband-dbt.de/dbt-therapieangebote`, `https://www.bag.admin.ch/de/neuregelung-der-psychologischen-psychotherapie-ab-1-juli-2022` (Kosten, Schritt 2).
  - `unterstuetzung`: neu `https://www.pukzh.ch/unsere-angebote/kinder-und-jugendpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/` (Gruppe für Eltern).
  - `diagnose`: keine.
  - Jede Adresse ist die Adresse der Tabelle in Abschnitt 5 bzw. 6 des Auftrags (dort am 11.10.2026 aufgerufen) oder des Bestands (BAG). **Nicht prüfbar:** Erreichbarkeit heute (Netzwerkrichtlinie dieser Umgebung).
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Etappe 2c-2: Wörter im Lesefluss (Zählweise C1)

C1 wie in 2c-1 (innerste `p`, `li`, `dt`, `dd` in `<main>`, ohne SVG, Text nur für Screenreader, Kapitelübersicht, Kicker, Eyebrow, «Abbildung n · …», Quellenzeilen und den Block «Quellen zu dieser Seite»; «im Lesefluss» ohne die Panels der Akkordeons; der Verweis im Text zählt mit). Skript dieser bauenden Sitzung im Browser. Es ergibt am Stand `66d73b1` genau die Werte von 2c-1 für `index` (232), `unterstuetzung` (1057), `rolle` (2627), `selbstfuersorge` (2130) und `krise` (1523); auf Seiten mit Abbildung zählt es 4 bis 15 Wörter weniger (`genesung` 1143 statt 1147), wie schon in der Freigabe 2b vermerkt. `diagnose` und `behandlung` haben keine Abbildung.

| Seite | Kopf | Abschnitte (C1 im Lesefluss) | C1 im Lesefluss | Ziel | C1 mit Vertiefungen | `kennzahlen.mjs` gesamt (alt → neu) |
| --- | ---: | --- | ---: | ---: | ---: | --- |
| `diagnose` | 60 | `abklaerung` 420 · `bedeutung` 114 · `zweifel` 185 · `ohne-diagnose` 251 · `begleiterkrankungen` 508 | **1538** | etwa 1800 | 1867 | 3769 → 2165 |
| `behandlung` | 39 | `rollen` 261 · `kontakt` 336 · `therapieformen` 318 · `rueckschlaege` 215 · `angebote` 200 · `wartezeit` 308 | **1677** | etwa 1800 | 2344 | 2696 → 2700 |
| `genesung` | 55 | `einfluesse` 245 → 262 (übrige Abschnitte gleich) | 1147 → **1164** | etwa 1800 | 1224 → 1241 | 1475 → 1492 |
| `unterstuetzung` | 39 | `austausch` 88 → 136 (übrige gleich) | 1057 → **1105** | etwa 1500 | 1270 → 1318 | 1338 → 1393 |

Beide Ziele sind erreicht. «Alt» bei `diagnose` ist die Summe von `/verstehen/diagnostik` und `/verstehen/begleiterkrankungen`, bei `behandlung` nur `/unterstuetzen/therapie`; `behandlung` enthält zusätzlich die Angebote und «Kein Therapieplatz» aus `/verstehen/diagnostik`, deshalb 100 %. Absicherungen je 100 Wörter (`kennzahlen.mjs`): `diagnose` 2,10 → 2,03, `behandlung` 2,74 → 2,59. Semikolons im Fliesstext 20 → 0 und 11 → 0. Sätze mit Verneinung (`verneinung.mjs`): `diagnose` 81 von 378 (21 %) → 46 von 215 (21 %), `behandlung` 56 von 295 (19 %) → 48 von 290 (17 %). Die Werte für `genesung` und `unterstuetzung` vorher sind die von 2c-1; nachher ist die Differenz aus den geänderten Sätzen addiert (Skript: 1143 → 1160 und 1057 → 1105).

### Etappe 2c-2: Verweise im Text

Vier, wie erwartet. Jeder steht direkt nach der Handlungsanleitung, keiner in einer Vertiefung, höchstens einer je Abschnitt (Gate `inline-ref` ohne Befund).

| Nr. | Seite › Abschnitt | Handlungsanleitung davor | Bestand |
| ---: | --- | --- | --- |
| 1 | `diagnose` › `zweifel` | «Klare Grenze: Bei akuter Gefahr, etwa bei Suizidgefahr, schwerer Selbstverletzung oder Gefahr für andere Menschen, ist die Frage nach der Diagnose nachrangig. Dann holen Sie Hilfe über den Notruf.» | `diagnose.md` Nr. 108, 109 |
| 2 | `diagnose` › `begleiterkrankungen` | «Bei akuter Gefahr oder Hinweisen auf eine konkrete suizidale Absicht holen Sie sofort Hilfe über den Notruf.» (Unterkapitel «Wenn Suizidgedanken dazukommen») | `diagnose.md` Nr. 298, 312 |
| 3 | `behandlung` › `kontakt` | «Bei möglicher akuter Gefahr holen Sie sofort Hilfe über den Notruf und warten nicht auf eine Rückmeldung per E-Mail.» (nach den drei Informationswegen) | `behandlung.md` Nr. 67; zusammengeführt Nr. 103, 121, 140 |
| 4 | `behandlung` › `wartezeit` | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» (Schritt 4, der Verweis im selben Listenpunkt wie auf `grenzen` › `gewalt`) | `diagnose.md` Nr. 179, `behandlung.md` Nr. 198; zusammengeführt Nr. 272 |

### Etappe 2c-2: Neue Sätze zur Freigabe

Alle Sätze von `diagnose` und `behandlung`, die nicht wörtlich im Bestand der Seite stehen (Vergleich je Satz mit dem Bestand, Skript der bauenden Sitzung), dazu die Titel und Bezeichnungen, die neu sind oder anders lauten, und die neuen Sätze auf `genesung` und `unterstuetzung`. **Art:** neu · Verdichtung · umformuliert · gekürzt · Verweissatz · Auftrag · Satzzeichen (nur Satzzeichen, Gross- und Kleinschreibung, Paarform statt Doppelpunkt, «und» statt «&» oder Satzteilung) · Bezeichnung. **Abgleich:** d = `diagnose.md`, b = `behandlung.md`, g = `genesung.md`.

**`diagnose`**

| Nr. | Ort | Satz | Art | Abgleich |
| ---: | --- | --- | --- | --- |
| 1 | `diagnose` › `kopf` | «Diagnose und Begleiterkrankungen» | Auftrag | d1 |
| 2 | `diagnose` › `kopf` | «Diese Seite zeigt, wer eine Borderline-Abklärung üblicherweise durchführt, wie sie abläuft und was eine Diagnose für Sie als Angehörige bedeuten kann.» | umformuliert | d2, d19 |
| 3 | `diagnose` › `kopf` | «Die Seite ist keine Anleitung, jemanden zur Diagnose zu drängen, sondern eine Orientierung in einer Phase, in der vieles unklar ist.» | umformuliert | d3 |
| 4 | `diagnose` › `kopf` | «Ausserdem geht es um Begleiterkrankungen: Bei vielen, aber nicht allen Menschen mit Borderline bestehen zusätzlich weitere psychische Erkrankungen.» | Verdichtung | d235 |
| 5 | `diagnose` › `abklaerung` | «Eine vertiefte Abklärung findet je nach Fragestellung und Versorgungsweg zum Beispiel in psychiatrisch-psychotherapeutischen Praxen, Ambulatorien, spezialisierten Angeboten oder Kliniken statt.» | umformuliert | d22, d26 |
| 6 | `diagnose` › `abklaerung` | «Schritt 1 Erste Anlaufstelle» | Bezeichnung | d47 |
| 7 | `diagnose` › `abklaerung` | «Mögliche erste Anlaufstellen sind die Hausarztpraxis, eine psychiatrische oder psychotherapeutische Praxis oder ein Ambulatorium.» | neu | d394 |
| 8 | `diagnose` › `abklaerung` | «Die Hausarztpraxis oder eine andere Facharztpraxis kann Beschwerden einordnen, andere Ursachen mitprüfen und an eine geeignete Fachperson überweisen.» | umformuliert | d24 |
| 9 | `diagnose` › `abklaerung` | «Den ersten Kontakt dürfen Sie anregen oder begleiten.» | Satzzeichen | d47 |
| 10 | `diagnose` › `abklaerung` | «Schritt 2 Fachliche Abklärung» | Bezeichnung | d49 |
| 11 | `diagnose` › `abklaerung` | «Dafür qualifizierte Fachpersonen klären ab, je nach Versorgungsweg in Praxis, Ambulatorium oder Klinik.» | umformuliert | d49 |
| 12 | `diagnose` › `abklaerung` | «In Gesprächen geht es um Lebensgeschichte, aktuelle Beschwerden und Beziehungsmuster, oft auch in einem strukturierten Interview.» | umformuliert | d32 |
| 13 | `diagnose` › `abklaerung` | «Geprüft werden auch andere Erkrankungen, die ähnliche Muster zeigen können.» | umformuliert | d80 |
| 14 | `diagnose` › `abklaerung` | «Das ist ein normaler Teil sorgfältiger Diagnostik und keine Verzögerungstaktik.» | umformuliert | d81 |
| 15 | `diagnose` › `abklaerung` | «Schritt 3 Mehrere Gespräche» | Bezeichnung | d50 |
| 16 | `diagnose` › `abklaerung` | «Geduld ist hier kein Nichtstun.» | Satzzeichen | d51 |
| 17 | `diagnose` › `abklaerung` | «Schritt 4 Rückmeldung und Einordnung» | Bezeichnung | d52 |
| 18 | `diagnose` › `abklaerung` | «Die Fachperson ordnet die Beschwerden ein und grenzt sie von anderen Erkrankungen ab.» | umformuliert | d52 |
| 19 | `diagnose` › `abklaerung` | «Diese Einordnung sollte in einem Gespräch erklärt werden, mit Unsicherheiten, Bedeutung und möglichen nächsten Schritten.» | umformuliert | d42 |
| 20 | `diagnose` › `abklaerung` | «Ob Sie einbezogen werden, hängt vom Einverständnis der betroffenen Person ab.» | umformuliert | d53 |
| 21 | `diagnose` › `abklaerung` | «Das kann schwer sein.» | Satzzeichen | d53 |
| 22 | `diagnose` › `abklaerung` | «Schritt 5 Behandlungsplanung» | Bezeichnung | d54 |
| 23 | `diagnose` › `abklaerung` | «Danach entsteht ein Behandlungsplan, oft mit einer störungsspezifischen Psychotherapie wie der Dialektisch-Behavioralen Therapie (DBT).» | umformuliert | d54 |
| 24 | `diagnose` › `abklaerung` | «Fragen Sie, wie Sie unterstützen können.» | Satzzeichen | d55 |
| 25 | `diagnose` › `abklaerung` | «Wer in der Behandlung was beitragen kann, steht auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Wer was beitragen kann».» | Verweissatz | d395 |
| 26 | `diagnose` › `abklaerung` | «Eine Fachperson der Kinder- und Jugendpsychiatrie beurteilt Beschwerden, Belastung und Entwicklungsverlauf gemeinsam.» | umformuliert | d56, d135 |
| 27 | `diagnose` › `abklaerung` | «Manche Muster können zur Entwicklung gehören, andere brauchen gezielte Unterstützung.» | Satzzeichen | d136 |
| 28 | `diagnose` › `abklaerung` | «Eine Momentaufnahme reicht für die Einordnung nicht aus.» | Satzzeichen | d136 |
| 29 | `diagnose` › `abklaerung` | «Auch urteilsfähige Minderjährige haben ein Recht auf Vertraulichkeit.» | Satzzeichen | d58 |
| 30 | `diagnose` › `abklaerung` | «Konkrete Fragen klären Sie mit der zuständigen Fachperson.» | Auftrag | d58 |
| 31 | `diagnose` › `abklaerung` | «Das Frühinterventionsangebot HYPE Züri für Jugendliche steht auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Angebote im Kanton Zürich».» | Verweissatz | d396 |
| 32 | `diagnose` › `abklaerung` | «Eine Gruppe für Eltern von Jugendlichen mit Borderline steht auf der Seite «Unterstützung finden» im Abschnitt «Austausch mit anderen Angehörigen».» | Verweissatz | d397 |
| 33 | `diagnose` › `abklaerung` | «Wie die Diagnose beschrieben wird» | Auftrag | d398 |
| 34 | `diagnose` › `abklaerung` | «Fachpersonen beschreiben Diagnosen mit Klassifikationssystemen.» | neu | d399 |
| 35 | `diagnose` › `abklaerung` | «Für Borderline sind das vor allem das DSM-5-TR der American Psychiatric Association und die ICD-11 der Weltgesundheitsorganisation.» | neu | d399 |
| 36 | `diagnose` › `abklaerung` | «DSM-5-TR und ICD-11 beschreiben nicht dasselbe Modell.» | Satzzeichen | d400 |
| 37 | `diagnose` › `abklaerung` | «Geprüft werden neun Kriterien.» | umformuliert | d36, d60 |
| 38 | `diagnose` › `abklaerung` | «Mindestens fünf müssen als anhaltendes und situationsübergreifendes Muster vorliegen.» | Satzzeichen | d36, d60 |
| 39 | `diagnose` › `abklaerung` | «Zuerst wird der Schweregrad einer Persönlichkeitsstörung bestimmt.» | umformuliert | d37, d61 |
| 40 | `diagnose` › `abklaerung` | «Das Borderline-Muster kann anschliessend mit dem Zusatzcode 6D11.5 beschrieben werden.» | Satzzeichen | d37, d61 |
| 41 | `diagnose` › `abklaerung` | «Das ist eine begrenzte Vorgabe für die stationäre Kodierung.» | Satzzeichen | d64 |
| 42 | `diagnose` › `abklaerung` | «Diese Vorgabe bedeutet nicht, dass ICD-10-GM, DSM-5-TR und ICD-11 inhaltlich gleich aufgebaut sind oder in jedem Versorgungssetting identisch verwendet werden.» | umformuliert | d64 |
| 43 | `diagnose` › `abklaerung` | «Verfahren wie SCID-5-PD oder IPDE prüfen die Kriterien systematisch.» | Satzzeichen | d34 |
| 44 | `diagnose` › `abklaerung` | «Diese Interviews sind keine Selbstauskunft, sondern ein Fachgespräch.» | umformuliert | d34 |
| 45 | `diagnose` › `bedeutung` | «Was die Diagnose für Sie bedeuten kann» | Auftrag | d84 |
| 46 | `diagnose` › `bedeutung` | «Die Diagnose kann helfen, eine passende strukturierte Psychotherapie zu planen und wiederkehrende Schwierigkeiten fachlich einzuordnen.» | umformuliert | d86 |
| 47 | `diagnose` › `bedeutung` | «Eine Diagnose ist aber weder Voraussetzung für jede Hilfe noch eine vollständige Erklärung eines Menschen oder einer Beziehung.» | umformuliert | d87 |
| 48 | `diagnose` › `bedeutung` | «Was die Diagnose beschreiben kann, steht auf der Seite «Borderline verstehen» im Abschnitt «Was die Diagnose beschreiben kann».» | Verweissatz | d401 |
| 49 | `diagnose` › `bedeutung` | «Was Langzeitstudien über Besserung zeigen, steht auf der Seite «Genesung» im Abschnitt «Was die Forschung zeigt».» | Verweissatz | d89 |
| 50 | `diagnose` › `bedeutung` | «Eine Diagnose hilft nicht automatisch der Beziehung.» | umformuliert | d90 |
| 51 | `diagnose` › `bedeutung` | «Diese Erwartung ist verständlich, aber hoch.» | Satzzeichen | d92 |
| 52 | `diagnose` › `bedeutung` | «Die Beziehung zu klären, bleibt eigene Arbeit, auch nachdem die Diagnose feststeht.» | umformuliert | d92 |
| 53 | `diagnose` › `zweifel` | «Wenn die Diagnose nicht geteilt wird» | Satzzeichen | d93 |
| 54 | `diagnose` › `zweifel` | «Auch eine fachlich gestellte Diagnose darf hinterfragt werden.» | Satzzeichen | d96 |
| 55 | `diagnose` › `zweifel` | «Eine zweite fachliche Einschätzung ist legitim.» | Satzzeichen | d96 |
| 56 | `diagnose` › `zweifel` | «offene Fragen mit der behandelnden Fachperson klären oder eine zweite fachliche Einschätzung einholen, sofern die Person das möchte» | Satzzeichen | d106 |
| 57 | `diagnose` › `zweifel` | «bei der Fachstelle Angehörigenarbeit der PUK nach eigener Beratung fragen» | Satzzeichen | d107 |
| 58 | `diagnose` › `zweifel` | «Klare Grenze: Bei akuter Gefahr, etwa bei Suizidgefahr, schwerer Selbstverletzung oder Gefahr für andere Menschen, ist die Frage nach der Diagnose nachrangig.» | umformuliert | d108 |
| 59 | `diagnose` › `zweifel` | «Dann holen Sie Hilfe über den Notruf.» | umformuliert | d109 |
| 60 | `diagnose` › `ohne-diagnose` | «Wenn noch keine Diagnose gestellt ist» | Satzzeichen | d120 |
| 61 | `diagnose` › `ohne-diagnose` | «Vielleicht erkennen Sie Verhaltensweisen oder Erfahrungen aus den Beschreibungen auf dieser Website wieder.» | umformuliert | d121 |
| 62 | `diagnose` › `ohne-diagnose` | «Das kann ein Anlass sein, Beobachtungen zu benennen und Beratung zu suchen.» | umformuliert | d121 |
| 63 | `diagnose` › `ohne-diagnose` | «Mit der Hausarztpraxis sprechen» | Bezeichnung | d124 |
| 64 | `diagnose` › `ohne-diagnose` | «Die Hausarztpraxis ist eine mögliche erste Anlaufstelle für Einschätzung, erste Abklärungen und Überweisung.» | umformuliert | d125 |
| 65 | `diagnose` › `ohne-diagnose` | «Welche Aufgaben die Praxis selbst übernimmt, hängt von Qualifikation, Situation und Versorgungsweg ab.» | umformuliert | d126 |
| 66 | `diagnose` › `ohne-diagnose` | «Die Fachstelle Angehörigenarbeit der PUK berät auch dann, wenn die Diagnostik noch nicht abgeschlossen ist oder mehrere Diagnosen im Raum stehen.» | umformuliert | d368 |
| 67 | `diagnose` › `ohne-diagnose` | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | Verweissatz | d128, d195, d369, b74 |
| 68 | `diagnose` › `ohne-diagnose` | «Spezialisierte Stellen anfragen» | Bezeichnung | d129 |
| 69 | `diagnose` › `ohne-diagnose` | «Wenn die betroffene Person eine fachliche Abklärung wünscht, kann eine direkte Anfrage bei einer spezialisierten Stelle sinnvoll sein.» | umformuliert | d130 |
| 70 | `diagnose` › `ohne-diagnose` | «Angebote für Abklärung und Therapie stehen auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Angebote im Kanton Zürich».» | neu | d27, d402 |
| 71 | `diagnose` › `ohne-diagnose` | «Nach langer Belastung fragen sich manche Angehörige, ob sie selbst eine psychische Erkrankung entwickelt haben, etwa eine Erschöpfungsdepression, Angststörungen oder Schlafstörungen.» | Satzzeichen | d112 |
| 72 | `diagnose` › `ohne-diagnose` | «Ihre Hausarztpraxis oder eine Psychotherapeutin oder ein Psychotherapeut kann eine Anlaufstelle sein.» | umformuliert | d119 |
| 73 | `diagnose` › `ohne-diagnose` | «Das ist keine Pflicht, aber eine reale Option.» | umformuliert | d119 |
| 74 | `diagnose` › `ohne-diagnose` | «Wie Sie eigene Überlastung erkennen, steht auf der Seite «Auf sich achten» im Abschnitt «Warnsignale für Überlastung».» | Verweissatz | d117 |
| 75 | `diagnose` › `ohne-diagnose` | «Wo Sie Beratung finden, steht auf der Seite «Unterstützung finden» im Abschnitt «Beratung für Angehörige».» | Verweissatz | d118, d184, d365, b203 |
| 76 | `diagnose` › `begleiterkrankungen` | «Komorbidität ist der medizinische Begriff für Begleiterkrankungen.» | umformuliert | d238 |
| 77 | `diagnose` › `begleiterkrankungen` | «Er bedeutet, dass eine Person gleichzeitig oder im Verlauf mehrere Erkrankungen hat.» | umformuliert | d238 |
| 78 | `diagnose` › `begleiterkrankungen` | «Bei Menschen mit Borderline kommen weitere psychische Diagnosen häufig vor, aber nicht bei allen.» | umformuliert | d239, d257, d322 |
| 79 | `diagnose` › `begleiterkrankungen` | «In Studien werden unter anderem diese Begleiterkrankungen beschrieben.» | gekürzt | d241, d271 |
| 80 | `diagnose` › `begleiterkrankungen` | «Die Reihenfolge ist keine Rangfolge.» | umformuliert | d218, d242, d266, d272 |
| 81 | `diagnose` › `begleiterkrankungen` | «Mehrere Diagnosen heissen mehr Komplexität, nicht mehr Schuld.» | Satzzeichen | d249, d267 |
| 82 | `diagnose` › `begleiterkrankungen` | «Davon zu unterscheiden ist die Differenzialdiagnostik: Bei der Abklärung prüfen Fachpersonen, ob ähnliche Muster zu einer anderen Erkrankung gehören, etwa zu bipolaren Störungen, einer PTBS, ADHS oder dissoziativen Störungen.» | umformuliert | d80, d82 |
| 83 | `diagnose` › `begleiterkrankungen` | «Manche dieser Erkrankungen, zum Beispiel eine PTBS, können auch zusätzlich zu Borderline bestehen.» | umformuliert | d82 |
| 84 | `diagnose` › `begleiterkrankungen` | «Wie Begleiterkrankungen behandelt werden und was für Medikamente gilt, steht auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Therapieformen».» | Verweissatz | d403 |
| 85 | `diagnose` › `begleiterkrankungen` | «Depressive Erkrankungen werden in Studien zu Borderline häufig beschrieben.» | gekürzt | d278 |
| 86 | `diagnose` › `begleiterkrankungen` | «Die älteren Studien dazu untersuchten Menschen, die zu Beginn stationär behandelt wurden.» | umformuliert | d279 |
| 87 | `diagnose` › `begleiterkrankungen` | «Die Befunde dieser Studien zeigen nicht, wie häufig Depressionen bei allen Menschen mit Borderline sind, und sie sind keine persönliche Prognose.» | umformuliert | d280 |
| 88 | `diagnose` › `begleiterkrankungen` | «Diese Unterscheidung ist Aufgabe der behandelnden Fachperson.» | Verdichtung | d281, d306 |
| 89 | `diagnose` › `begleiterkrankungen` | «Was Sie tun können: Benennen Sie beobachtbare Veränderungen, und verharmlosen Sie Ihre Sorge nicht.» | umformuliert | d307 |
| 90 | `diagnose` › `begleiterkrankungen` | «Wenn der Rückzug länger dauert, mehr Beschwerden dazukommen oder Hoffnungslosigkeit zentraler wird:» | umformuliert | d308 |
| 91 | `diagnose` › `begleiterkrankungen` | «Sprechen Sie Ihre Sorge ruhig an, ohne zu drängen oder zu drohen.» | umformuliert | d309 |
| 92 | `diagnose` › `begleiterkrankungen` | «Regen Sie, wenn möglich und gewünscht, gemeinsam eine fachliche Einschätzung an.» | umformuliert | d310 |
| 93 | `diagnose` › `begleiterkrankungen` | «Bei Fragen zur Schweigepflicht oder zur eigenen Entlastung können Sie sich unabhängig beraten lassen.» | umformuliert | d311 |
| 94 | `diagnose` › `begleiterkrankungen` | «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» | Auftrag | d314, d315 |
| 95 | `diagnose` › `begleiterkrankungen` | «Was Schuld von Verantwortung unterscheidet, steht auf der Seite «Ihre Rolle» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | Verweissatz | d316, d317 |
| 96 | `diagnose` › `begleiterkrankungen` | «Eigene Erschöpfung ist kein Zeichen von Schwäche.» | Satzzeichen | d320, d363 |
| 97 | `diagnose` › `begleiterkrankungen` | «Wie Sie für sich Unterstützung finden, steht auf der Seite «Auf sich achten» im Abschnitt «Auch Sie brauchen Unterstützung».» | Verweissatz | d364 |
| 98 | `diagnose` › `begleiterkrankungen` | «Wenn Suizidgedanken dazukommen» | Auftrag | d293 |
| 99 | `diagnose` › `begleiterkrankungen` | «Die britische Behandlungsleitlinie NICE beschreibt einen beobachteten Zusammenhang zwischen Borderline mit einer zusätzlichen Depression (Major Depression) und Suizidversuchen.» | umformuliert | d294 |
| 100 | `diagnose` › `begleiterkrankungen` | «Suizidale Aussagen oder Hinweise auf konkrete Pläne brauchen eine professionelle Einschätzung, unabhängig von ihrer diagnostischen Zuordnung.» | umformuliert | d270, d296 |
| 101 | `diagnose` › `begleiterkrankungen` | «Bei akuter Gefahr oder Hinweisen auf eine konkrete suizidale Absicht holen Sie sofort Hilfe über den Notruf.» | umformuliert | d298, d312 |
| 102 | `diagnose` › `begleiterkrankungen` | «Wie Sie Suizidgedanken direkt ansprechen können, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Suizidgedanken ein Thema sind».» | Verweissatz | d300 |
| 103 | `diagnose` › `begleiterkrankungen` | «Diese Hinweise können im Zusammenhang mit Borderline auf eine depressive Phase deuten.» | neu | d404 |
| 104 | `diagnose` › `begleiterkrankungen` | «Die Hinweise ersetzen keine fachliche Beurteilung.» | neu | d404 |
| 105 | `diagnose` › `begleiterkrankungen` | «Weitere Begleiterkrankungen kurz» | Auftrag | d321 |
| 106 | `diagnose` › `begleiterkrankungen` | «Diese Übersicht ist bewusst knapp und ohne Rangfolge.» | gekürzt | d323 |
| 107 | `diagnose` › `begleiterkrankungen` | «Eine PTBS kann gleichzeitig bestehen oder bei der Differenzialdiagnostik geprüft werden.» | umformuliert | d328 |
| 108 | `diagnose` › `begleiterkrankungen` | «ADHS kann gleichzeitig bestehen, und einzelne Merkmale wie Impulsivität oder Schwierigkeiten mit der Emotionsregulation können sich überschneiden.» | umformuliert | d338, d339 |
| 109 | `diagnose` › `begleiterkrankungen` | «Aus der Borderline-Diagnose allein lässt sich ADHS nicht ableiten, eine Abklärung berücksichtigt unter anderem Entwicklungsgeschichte, Beginn und situationsübergreifendes Auftreten.» | umformuliert | d340 |

**`behandlung`**

| Nr. | Ort | Satz | Art | Abgleich |
| ---: | --- | --- | --- | --- |
| 110 | `behandlung` › `kopf` | «Behandlung und Ihre Rolle darin» | Auftrag | b2 |
| 111 | `behandlung` › `kopf` | «Behandlung kann Veränderung unterstützen.» | Auftrag | b291 |
| 112 | `behandlung` › `rollen` | «Wer was beitragen kann» | Auftrag | b16, b17 |
| 113 | `behandlung` › `rollen` | «Die betroffene Person, Fachpersonen und Angehörige können Unterschiedliches beitragen, und von jeder Rolle ist manches nicht zu erwarten.» | neu | b297 |
| 114 | `behandlung` › `rollen` | «Kann beitragen» | Auftrag | b21 |
| 115 | `behandlung` › `rollen` | «eigene Ziele und Wünsche für die Behandlung benennen» | Satzzeichen | b40 |
| 116 | `behandlung` › `rollen` | «Fertigkeiten (Skills) ausprobieren, wenn sie passen» | umformuliert | b41 |
| 117 | `behandlung` › `rollen` | «Verantwortung für eigenes Handeln übernehmen, soweit es möglich ist» | umformuliert | b42 |
| 118 | `behandlung` › `rollen` | «Warnzeichen mitteilen, wenn das möglich und gewünscht ist» | umformuliert | b43 |
| 119 | `behandlung` › `rollen` | «Nicht zu erwarten» | Auftrag | b27, b243 |
| 120 | `behandlung` › `rollen` | «allein für die Qualität der Beziehung sorgen» | umformuliert | b44 |
| 121 | `behandlung` › `rollen` | «die Behandlung gemeinsam planen und fachlich begleiten» | umformuliert | b32 |
| 122 | `behandlung` › `rollen` | «Skills anbieten und vermitteln, zum Beispiel in der DBT» | umformuliert | b33 |
| 123 | `behandlung` › `rollen` | «Therapieziele mit der betroffenen Person vereinbaren» | umformuliert | b35 |
| 124 | `behandlung` › `rollen` | «alle Beziehungsfragen stellvertretend lösen» | Satzzeichen | b38 |
| 125 | `behandlung` › `rollen` | «rund um die Uhr erreichbar sein» | Satzzeichen | b39 |
| 126 | `behandlung` › `rollen` | «eigene Grenzen mitteilen» | umformuliert | b23 |
| 127 | `behandlung` › `rollen` | «auf Wunsch bei Behandlungsschritten unterstützen» | Satzzeichen | b24, b210 |
| 128 | `behandlung` › `rollen` | «eigene Entlastung suchen» | Satzzeichen | b25 |
| 129 | `behandlung` › `rollen` | «den Fortschritt kontrollieren oder überwachen» | umformuliert | b29, b247 |
| 130 | `behandlung` › `rollen` | «Motivation dauerhaft aufrechterhalten» | umformuliert | b246 |
| 131 | `behandlung` › `rollen` | «Therapiesprache ständig in den Alltag übersetzen» | umformuliert | b244 |
| 132 | `behandlung` › `rollen` | «Behandlung liegt bei der betroffenen Person und den Fachpersonen.» | Auftrag | b48 |
| 133 | `behandlung` › `rollen` | «Was Sie freiwillig anbieten können, steht auf der Seite «Ihre Rolle» im Abschnitt «Was Sie anbieten können und was nicht Ihre Aufgabe ist».» | Verweissatz | b55, b56, b211, b300 |
| 134 | `behandlung` › `kontakt` | «Drei Wege sind zu unterscheiden:» | umformuliert | b61 |
| 135 | `behandlung` › `kontakt` | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | Verweissatz | d128, d195, d369, b74 |
| 136 | `behandlung` › `kontakt` | «Bei möglicher akuter Gefahr holen Sie sofort Hilfe über den Notruf und warten nicht auf eine Rückmeldung per E-Mail.» | umformuliert | b67, b103, b121, b140 |
| 137 | `behandlung` › `kontakt` | «Welche eigenen konkreten Beobachtungen möchten Sie, möglichst mit Wissen der betroffenen Person, in ein gemeinsames Gespräch einbringen?» | Satzzeichen | b136 |
| 138 | `behandlung` › `kontakt` | «Welche Unterstützung haben alle Beteiligten miteinander vereinbart, und was gehört ausdrücklich nicht zu Ihrer Rolle?» | Satzzeichen | b138 |
| 139 | `behandlung` › `kontakt` | «Das Behandlungsteam entscheidet gemeinsam mit ihr über Ziele und Verlauf.» | Satzzeichen | b142 |
| 140 | `behandlung` › `kontakt` | «Ich werde nicht zu Sitzungen eingeladen» | Auftrag | b81 |
| 141 | `behandlung` › `kontakt` | «Sprechen Sie Ihren Wunsch nach Einbezug offen an, und respektieren Sie die Grenzen der Schweigepflicht.» | Satzzeichen | b88 |
| 142 | `behandlung` › `kontakt` | «Das ist berechtigt.» | Satzzeichen | b90 |
| 143 | `behandlung` › `kontakt` | «Sie dürfen Orientierung für Ihre eigene Rolle suchen.» | Satzzeichen | b90 |
| 144 | `behandlung` › `kontakt` | «Bei der Fachstelle Angehörigenarbeit der PUK ist sie kostenlos und ohne Vollmacht der betroffenen Person möglich.» | umformuliert | b92 |
| 145 | `behandlung` › `kontakt` | «Ein Beispiel:» vor dem Beispielsatz (Satz wörtlich) | Bezeichnung (statt «Formulierungsbeispiel:») | b101 |
| 146 | `behandlung` › `kontakt` | «Bei begründeten Zweifeln an Diagnose oder Behandlung kann eine zweite fachliche Einschätzung sinnvoll sein.» | Satzzeichen | b104 |
| 147 | `behandlung` › `kontakt` | «Eine pauschale Wartefrist von einem Jahr gibt es dafür nicht.» | Satzzeichen | b104 |
| 148 | `behandlung` › `kontakt` | «Eigene konkrete Beobachtungen, vereinbarte Themen und den eigenen Unterstützungsbedarf, ohne Diagnose, Motiv- oder Verlaufsbewertung.» | umformuliert | b117 |
| 149 | `behandlung` › `kontakt` | «Stimmen Sie nicht akute Angaben möglichst mit der betroffenen Person ab.» | Satzzeichen | b118 |
| 150 | `behandlung` › `kontakt` | «Beobachtung statt Deutung: «Mir ist aufgefallen, dass … An wen kann ich mich mit meiner Sorge wenden?»» | Satzzeichen | b122 |
| 151 | `behandlung` › `kontakt` | «Sagen Sie früh, was Sie freiwillig übernehmen können.» | Satzzeichen | b129 |
| 152 | `behandlung` › `kontakt` | «Auch eine nicht übernommene Aufgabe muss im Nachsorgeplan berücksichtigt werden.» | Satzzeichen | b129 |
| 153 | `behandlung` › `kontakt` | «Bitten Sie mit Einwilligung der betroffenen Person um die Informationen, die Sie für Ihre vereinbarte Rolle brauchen.» | umformuliert | b130 |
| 154 | `behandlung` › `kontakt` | «Was nach einer Krise sonst hilft, steht auf der Seite «Krisen begleiten» im Abschnitt «Nach der Krise».» | Verweissatz | b124, b125, b126, b127 |
| 155 | `behandlung` › `kontakt` | «Musterbrief für einen ersten Kontakt» | Auftrag | b222 |
| 156 | `behandlung` › `kontakt` | «Wenn Sie als nahestehende Person Kontakt mit der behandelnden Fachperson aufnehmen möchten, kann eine kurze schriftliche Nachricht helfen.» | umformuliert | b224 |
| 157 | `behandlung` › `kontakt` | «Das Muster dient als Ausgangspunkt, wenn Sie Ihre Perspektive einbringen oder nach einem Angehörigengespräch fragen möchten.» | umformuliert | b225 |
| 158 | `behandlung` › `kontakt` | «Ich bin [Beziehung zu Vorname, z. B. Mutter, Vater oder Partnerin] von [Vorname].» | Satzzeichen (eigene Zeile, «Ich» gross) | b227 |
| 159 | `behandlung` › `kontakt` | «Mit freundlichen Grüssen [Ihr Name] [Optional: Telefonnummer für Rückruf]» | Satzzeichen | b232 |
| 160 | `behandlung` › `kontakt` | «Die behandelnde Fachperson ist an die Schweigepflicht gebunden und darf ohne Einwilligung der betroffenen Person keine Inhalte der Behandlung besprechen.» | umformuliert | b233 |
| 161 | `behandlung` › `kontakt` | «Das ist keine Ablehnung, sondern professionelles Handeln.» | umformuliert | b234 |
| 162 | `behandlung` › `therapieformen` | «Mehrere strukturierte Psychotherapien können bei Borderline helfen.» | umformuliert | b166 |
| 163 | `behandlung` › `therapieformen` | «Für viele Einzelvergleiche sind die Forschungsergebnisse nur begrenzt sicher, und es gibt keine Methode, die für alle Menschen die beste ist.» | umformuliert | b166 |
| 164 | `behandlung` › `therapieformen` | «Die DBT ist stark strukturiert und setzt den Schwerpunkt auf Emotionsregulation, Stresstoleranz, Achtsamkeit und zwischenmenschliche Fertigkeiten (Skills).» | umformuliert | b154 |
| 165 | `behandlung` › `therapieformen` | «Die MBT konzentriert sich auf das Verstehen eigener und fremder innerer Zustände und auf das Beziehungsgeschehen.» | umformuliert | b156 |
| 166 | `behandlung` › `therapieformen` | «Die Schematherapie arbeitet mit frühen Prägungen, Beziehungsmustern und inneren Zuständen, die unter Stress reaktiv werden.» | umformuliert | b158 |
| 167 | `behandlung` › `therapieformen` | «Die TFP arbeitet mit dem Erleben in der Beziehung zur Therapeutin oder zum Therapeuten: Innere Konflikte werden dort im «Hier und Jetzt» betrachtet und bearbeitet.» | umformuliert | b160 |
| 168 | `behandlung` › `therapieformen` | «Auch klar strukturierte, auf Borderline abgestimmte Behandlungen ohne spezialisiertes Therapielabel können wirksam sein.» | umformuliert | b162 |
| 169 | `behandlung` › `therapieformen` | «Therapie ist in drei Formen möglich:» | umformuliert | b251 |
| 170 | `behandlung` › `therapieformen` | «Ambulant» | Satzzeichen | b251, b302 |
| 171 | `behandlung` › `therapieformen` | «Teilstationär» | Satzzeichen | b251 |
| 172 | `behandlung` › `therapieformen` | «Stationär» | Satzzeichen | b251 |
| 173 | `behandlung` › `therapieformen` | «Behandlungsziele und Fortschritt bewertet die betroffene Person gemeinsam mit dem Fachteam.» | Satzzeichen | b165 |
| 174 | `behandlung` › `therapieformen` | «Begleiterkrankungen und Medikamente» | Auftrag | d341 |
| 175 | `behandlung` › `therapieformen` | «Begleiterkrankungen werden in der Regel mitbehandelt.» | Auftrag | d342 |
| 176 | `behandlung` › `therapieformen` | «Die Behandlung kann integriert, parallel oder schrittweise geplant werden.» | Auftrag | d290, d343, d345 |
| 177 | `behandlung` › `therapieformen` | «Eine starre Reihenfolge gilt nicht, der Behandlungsplan wird individuell abgestimmt.» | umformuliert | d346, d350, d351, d352 |
| 178 | `behandlung` › `therapieformen` | «Akute Gefährdungen, etwa eine schwere depressive Episode, eine Krise beim Substanzgebrauch oder eine Essstörung mit körperlicher Gefährdung, brauchen sofortige Aufmerksamkeit.» | umformuliert | d344 |
| 179 | `behandlung` › `therapieformen` | «Ob ein Medikament passt, wird individuell mit der behandelnden ärztlichen Fachperson geklärt.» | umformuliert | d349, d354 |
| 180 | `behandlung` › `therapieformen` | «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» | Auftrag | b303 |
| 181 | `behandlung` › `therapieformen` | «Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen».» | Verweissatz | b304 |
| 182 | `behandlung` › `therapieformen` | «Programme für Angehörige» | Auftrag | b305 |
| 183 | `behandlung` › `therapieformen` | «Psychoedukative Angehörigenprogramme vermitteln verständliche Informationen zur Erkrankung und zum Umgang damit.» | neu | b306 |
| 184 | `behandlung` › `therapieformen` | «Diese Programme können entlastende Unterstützung bieten und sind fachlich beschrieben.» | umformuliert | b168, b220 |
| 185 | `behandlung` › `therapieformen` | «Family Connections ist ein solches Programm für Angehörige von Menschen mit Borderline.» | neu | b307 |
| 186 | `behandlung` › `therapieformen` | «Dazu liegen inzwischen auch Daten aus einer randomisierten Studie vor: Die Studie von 2024 fand keinen statistisch signifikanten Vorteil gegenüber einer aktiven Vergleichsbehandlung.» | umformuliert | b169 |
| 187 | `behandlung` › `therapieformen` | «Daraus folgt weder gesicherte Überlegenheit noch Gleichwertigkeit.» | Satzzeichen | b169 |
| 188 | `behandlung` › `therapieformen` | «Ob ein Programm in Ihrer Nähe angeboten wird, ist getrennt von der Wirksamkeit zu klären.» | umformuliert | b171 |
| 189 | `behandlung` › `therapieformen` | «Angebote für Austausch mit anderen Angehörigen stehen auf der Seite «Unterstützung finden» im Abschnitt «Austausch mit anderen Angehörigen».» | umformuliert | b221 |
| 190 | `behandlung` › `rueckschlaege` | «Unterbrüche und Rückschläge» | Auftrag | b235 |
| 191 | `behandlung` › `rueckschlaege` | «Diese Reaktionen sind verständlich.» | Satzzeichen | b238 |
| 192 | `behandlung` › `rueckschlaege` | «Den Verlauf bewerten müssen Sie deshalb nicht.» | umformuliert | b238 |
| 193 | `behandlung` › `rueckschlaege` | «Wenn Therapie gerade schwierig ist» | Bezeichnung | b107 |
| 194 | `behandlung` › `rueckschlaege` | «Zwiespältige Gefühle gegenüber einer Therapie können viele Gründe haben, zum Beispiel Scham, Angst, Überforderung, schlechte Erfahrungen oder Misstrauen.» | umformuliert | b114 |
| 195 | `behandlung` › `rueckschlaege` | «Sie können Motivation nicht erzwingen, aber Sie können Interesse zeigen.» | Satzzeichen | b110 |
| 196 | `behandlung` › `rueckschlaege` | «In einer stabilen Phase direkt ansprechen» über dem Beispielsatz (Satz wörtlich) | Bezeichnung (statt «Direkt ansprechen (in stabiler Phase):») | b108 |
| 197 | `behandlung` › `rueckschlaege` | «Was Sie tun können:» | Bezeichnung | – |
| 198 | `behandlung` › `rueckschlaege` | «Sprechen Sie Therapie als Möglichkeit an, nicht als Drohung.» | umformuliert | b209 |
| 199 | `behandlung` › `rueckschlaege` | «Fragen Sie nach, welche Veränderungen für die Person selbst bedeutsam sind.» | umformuliert | b212 |
| 200 | `behandlung` › `rueckschlaege` | «Nehmen Sie schwierige Phasen ernst, ohne den Therapieverlauf von aussen zu bewerten.» | umformuliert | b213 |
| 201 | `behandlung` › `rueckschlaege` | «Welche Art von Unterstützung ist jetzt gewünscht, oder auch nicht?» | Satzzeichen | b239, b240, b241 |
| 202 | `behandlung` › `rueckschlaege` | «Wenn Sprache Gespräche erschwert» | neu | b308 |
| 203 | `behandlung` › `rueckschlaege` | «Wenn Sprache, Scham oder Migrationserfahrungen Gespräche erschweren, schliesst das eine Behandlung nicht aus.» | umformuliert | b215 |
| 204 | `behandlung` › `rueckschlaege` | «Wie Veränderung verlaufen kann, steht auf der Seite «Genesung» im Abschnitt «Veränderung verläuft unterschiedlich».» | Verweissatz | b308 |
| 205 | `behandlung` › `angebote` | «Angebote im Kanton Zürich» | Satzzeichen | d139, b250 |
| 206 | `behandlung` › `angebote` | «Für Abklärung und Therapie kommen verschiedene Stellen infrage.» | umformuliert | d141 |
| 207 | `behandlung` › `angebote` | «Die Liste ist nicht abschliessend.» | Auftrag | d142 |
| 208 | `behandlung` › `angebote` | «Auch niedergelassene Psychiaterinnen und Psychiater oder psychologische Psychotherapeutinnen und Psychotherapeuten mit Borderline-Erfahrung kommen infrage.» | umformuliert | d142 |
| 209 | `behandlung` › `angebote` | «Die Hausarztpraxis kann ein erster Schritt sein und bei Bedarf an eine geeignete Fachperson überweisen.» | umformuliert | d143 |
| 210 | `behandlung` › `angebote` | «Klären Sie die Kostenübernahme vorab.» | Auftrag | d161 |
| 211 | `behandlung` › `angebote` | «Aktuelle Bedingungen und Anmeldung stehen auf der Website des Angebots.» | Auftrag | d145, d146, b256 |
| 212 | `behandlung` › `angebote` | «HYPE Züri, Kinder- und Jugendpsychiatrie der PUK» | Auftrag | b252 |
| 213 | `behandlung` › `angebote` | «HYPE Züri ist ein Frühinterventionsangebot bei Verdacht, Risiko oder bereits diagnostizierter Borderline-Persönlichkeitsstörung.» | umformuliert | d137, b253 |
| 214 | `behandlung` › `angebote` | «Für: Jugendliche ab 13 Jahren» | Satzzeichen | b310 |
| 215 | `behandlung` › `angebote` | «Website: Persönlichkeitsstörungen bei Jugendlichen auf www.pukzh.ch» | neu | b318 |
| 216 | `behandlung` › `angebote` | «PUK Zürich, Erwachsene» | Satzzeichen | d144, b257 |
| 217 | `behandlung` › `angebote` | «Die PUK bietet spezialisierte, an der DBT orientierte Behandlungsangebote.» | umformuliert | b258 |
| 218 | `behandlung` › `angebote` | «Für: Erwachsene» | Satzzeichen | b311 |
| 219 | `behandlung` › `angebote` | «Website: Persönlichkeitsstörungen bei Erwachsenen auf www.pukzh.ch» | neu | b319 |
| 220 | `behandlung` › `angebote` | «ipw, Psychotherapiestation für junge Erwachsene» | Satzzeichen | d149, b260 |
| 221 | `behandlung` › `angebote` | «Für: junge Erwachsene» | Satzzeichen | b312 |
| 222 | `behandlung` › `angebote` | «Website: Psychotherapiestation für junge Erwachsene auf ipw.ch» | Bezeichnung | b264 |
| 223 | `behandlung` › `angebote` | «Das Sanatorium Kilchberg ist eine Privatklinik für Psychiatrie und Psychotherapie am Zürichsee.» | umformuliert | d155 |
| 224 | `behandlung` › `angebote` | «Für: Angaben auf der Website» | neu | b313 |
| 225 | `behandlung` › `angebote` | «Website: www.sanatorium-kilchberg.ch» | gekürzt | d156 |
| 226 | `behandlung` › `angebote` | «Clienia Schlössli, Oetwil am See» | Satzzeichen | d157, b265 |
| 227 | `behandlung` › `angebote` | «Clienia Schlössli bietet eine spezialisierte DBT-Station für Menschen mit Borderline-Persönlichkeitsstörung.» | umformuliert | d158, b266 |
| 228 | `behandlung` › `angebote` | «Für: Erwachsene ab 18 Jahren» | neu | b314 |
| 229 | `behandlung` › `angebote` | «Website: Station A2 auf www.clienia.ch» | Bezeichnung | d159, b267 |
| 230 | `behandlung` › `angebote` | «DBT-Therapeutensuche, Dachverband DBT» | Auftrag | b268 |
| 231 | `behandlung` › `angebote` | «Der Dachverband DBT bietet einen Suchweg für zertifizierte DBT-Therapeutinnen und -Therapeuten.» | umformuliert | b269 |
| 232 | `behandlung` › `angebote` | «Der Dachverband ist ein deutscher Verband.» | neu | b316 |
| 233 | `behandlung` › `angebote` | «Für: Menschen, die eine DBT-Therapie suchen» | neu | b315 |
| 234 | `behandlung` › `angebote` | «Website: DBT-Therapieangebote auf www.dachverband-dbt.de» | Bezeichnung | b270 |
| 235 | `behandlung` › `wartezeit` | «Wenn kein Therapieplatz verfügbar ist, kann die betroffene Person mit der Hausarztpraxis oder einer bereits behandelnden Fachperson den nächsten Schritt besprechen.» | umformuliert | d164, b183 |
| 236 | `behandlung` › `wartezeit` | «Anmeldung klären: Nimmt die Stelle neue Patientinnen und Patienten auf?» | umformuliert | d166, b185 |
| 237 | `behandlung` › `wartezeit` | «Ist eine direkte Anmeldung möglich, oder braucht es eine Überweisung oder eine ärztliche Anordnung?» | umformuliert | d167, b186 |
| 238 | `behandlung` › `wartezeit` | «Berücksichtigen Sie den vereinbarten Zugangsweg des Versicherungsmodells.» | umformuliert | d171, b190 |
| 239 | `behandlung` › `wartezeit` | «Für psychologische Psychotherapie zulasten der Grundversicherung ist eine ärztliche Anordnung nötig.» | Satzzeichen | d172, b191 |
| 240 | `behandlung` › `wartezeit` | «Nicht alle Ärztinnen und Ärzte sind regulär anordnungsberechtigt.» | umformuliert | d172, b191 |
| 241 | `behandlung` › `wartezeit` | «Wer ist bis dahin ansprechbar, welche Zwischenhilfe ist möglich, und wann findet der nächste Kontakt statt?» | Satzzeichen | d176, b195 |
| 242 | `behandlung` › `wartezeit` | «Bei Verschlechterung neu beurteilen lassen: Melden Sie veränderte Beschwerden der zuständigen Fachperson, und fragen Sie nach einem früheren Termin oder einer anderen Hilfe.» | Satzzeichen | d178, b197 |
| 243 | `behandlung` › `wartezeit` | «Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | Auftrag | d179, b198 |
| 244 | `behandlung` › `wartezeit` | «In anderen Kantonen: Die Angebote auf dieser Seite sind keine schweizweite Liste.» | umformuliert | d182, b201 |
| 245 | `behandlung` › `wartezeit` | «Wie Sie ausserhalb des Kantons Zürich Anlaufstellen finden, steht auf der Seite «Unterstützung finden» im Abschnitt «Ausserhalb des Kantons Zürich».» | Verweissatz | d181, b200 |
| 246 | `behandlung` › `wartezeit` | «Eigene Unterstützung: Angehörigenberatung können Sie unabhängig von einer Diagnose oder einem Therapieplatz nutzen.» | umformuliert | d183, b202 |
| 247 | `behandlung` › `wartezeit` | «Wo Sie Beratung finden, steht auf der Seite «Unterstützung finden» im Abschnitt «Beratung für Angehörige».» | Verweissatz | d118, d184, d365, b203 |

**`genesung` und `unterstuetzung` (Abschnitt 6)**

| Nr. | Ort | Satz | Art | Abgleich |
| ---: | --- | --- | --- | --- |
| 248 | `genesung` › `einfluesse` | «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» | Auftrag (Frage Nr. 2 aus 2c-1) | g145, g396 |
| 249 | `genesung` › `einfluesse` | «Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen».» | Auftrag (Verweissatz) | g163 |
| 250 | `unterstuetzung` › `austausch` | «Gruppe für Eltern von Jugendlichen mit Borderline» | neu (Zwischentitel) | d187 |
| 251 | `unterstuetzung` › `austausch` | «Teilnahmebedingungen und Anmeldung stehen auf der Website.» | Auftrag | d191 |
| 252 | `unterstuetzung` › `austausch` | «Persönlichkeitsstörungen bei Jugendlichen auf www.pukzh.ch» | Bezeichnung (Linktext) | – |

Nicht in der Liste, weil wörtlich aus dem Bestand: die übrigen Sätze beider Seiten, zum Beispiel die Listen «Was nicht hilft» und «Was möglich ist» (ausser zwei Punkten), «Eine Diagnose ist ein Anfang, kein Etikett.» (Infografik), die drei Informationswege, die vier Fragen, die Situationen der Vertiefungen, die Sätze zu Family Connections nach dem ersten und die vier Schritte bei «Kein Therapieplatz» (ausser den genannten Sätzen). Der Eintrag der Gruppe für Eltern auf `unterstuetzung` steht im Bestandswortlaut.

### Etappe 2c-2: Zur Prüfung durch die Fachstelle

| Nr. | Ort | neu | Bestand (Zitat) | Frage |
| ---: | --- | --- | --- | --- |
| 1 | `diagnose` › `abklaerung`, Vertiefung «Wie die Diagnose beschrieben wird» | «Fachpersonen beschreiben Diagnosen mit Klassifikationssystemen. Für Borderline sind das vor allem das DSM-5-TR der American Psychiatric Association und die ICD-11 der Weltgesundheitsorganisation. DSM-5-TR und ICD-11 beschreiben nicht dasselbe Modell.» DSM-5-TR: «Geprüft werden neun Kriterien. Mindestens fünf müssen als anhaltendes und situationsübergreifendes Muster vorliegen.» ICD-11: «Zuerst wird der Schweregrad einer Persönlichkeitsstörung bestimmt. Das Borderline-Muster kann anschliessend mit dem Zusatzcode 6D11.5 beschrieben werden.» Schweizer Kodierkontext: «… gilt in der Schweiz 2026 weiterhin die ICD-10-GM 2024. Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen. …» | «DSM-5-TR und ICD-11 beschreiben nicht dasselbe Modell: Im DSM-5-TR werden neun Kriterien geprüft; mindestens fünf müssen als anhaltendes und situationsübergreifendes Muster vorliegen. In der ICD-11 wird zuerst der Schweregrad einer Persönlichkeitsstörung bestimmt; das Borderline-Muster kann anschliessend mit dem Zusatzcode 6D11.5 beschrieben werden.» · «Für die stationäre medizinische Statistik gilt in der Schweiz 2026 weiterhin die ICD-10-GM 2024. Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen.» | Wortlaut gehalten, Semikolons als Punkte. Neu sind die zwei Sätze, die DSM-5-TR und ICD-11 erklären. Stimmen sie? |
| 2 | `diagnose` › `abklaerung`, «Bei Jugendlichen» | «Wie Eltern oder andere Bezugspersonen einbezogen werden, hängt unter anderem von Alter, Urteilsfähigkeit, Einwilligung, Behandlungsrahmen und Schutzbedarf ab. Auch urteilsfähige Minderjährige haben ein Recht auf Vertraulichkeit. Konkrete Fragen klären Sie mit der zuständigen Fachperson.» | «… Auch urteilsfähige Minderjährige haben ein Recht auf Vertraulichkeit; konkrete Fragen sollten mit der zuständigen Fachperson geklärt werden.» | Aufforderung statt «sollten … geklärt werden» (Wortlaut des Auftrags). Bestätigen |
| 3 | `diagnose` › `abklaerung`, Schritt 4 | «Ob Sie einbezogen werden, hängt vom Einverständnis der betroffenen Person ab. Das kann schwer sein.» | «Ob Sie einbezogen werden, hängt vom Einverständnis Ihres/Ihrer Angehörigen ab – das kann schwer sein.» | Bestätigen. Bei Minderjährigen gilt das Unterkapitel «Bei Jugendlichen» |
| 4 | `diagnose` › `begleiterkrankungen`, «Wenn Suizidgedanken dazukommen» | «Die britische Behandlungsleitlinie NICE beschreibt einen beobachteten Zusammenhang zwischen Borderline mit einer zusätzlichen Depression (Major Depression) und Suizidversuchen. Dieser Gruppenbefund erlaubt keine Vorhersage für eine einzelne Person.» | «Die NICE-Vollleitlinie (2009) beschreibt einen beobachteten Zusammenhang zwischen Borderline mit zusätzlicher Major Depression und Suizidversuchen. Dieser Gruppenbefund erlaubt keine Vorhersage für eine einzelne Person.» | «britische Behandlungsleitlinie» erklärt NICE; Jahr und Kapitel im Quellenblock. Ist «Depression (Major Depression)» fachlich richtig genug? |
| 5 | `diagnose` › `zweifel` und `begleiterkrankungen` | (a) «Klare Grenze: Bei akuter Gefahr, etwa bei Suizidgefahr, schwerer Selbstverletzung oder Gefahr für andere Menschen, ist die Frage nach der Diagnose nachrangig. Dann holen Sie Hilfe über den Notruf.» (b) «Bei akuter Gefahr oder Hinweisen auf eine konkrete suizidale Absicht holen Sie sofort Hilfe über den Notruf.» Je danach der Verweis im Text | (a) «Klare Grenze: Bei akuter Gefahr — Suizidalität, schwerer Selbstverletzung oder Fremdgefährdung — ist die Diagnose-Frage nachrangig. Dann zählt die Soforthilfe.» (b) «Bei akuter Gefahr oder Hinweisen auf konkrete suizidale Absicht: Soforthilfe — Notfallnummern und Anlaufstellen für die akute Situation.» | Neuer Wortlaut mit «Notruf» (Auftrag, Wortlaut von `krise`). «Suizidgefahr» statt «Suizidalität», «Gefahr für andere Menschen» statt «Fremdgefährdung». Bestätigen |
| 6 | `diagnose` › `begleiterkrankungen`, «Depression» | «Die älteren Studien dazu untersuchten Menschen, die zu Beginn stationär behandelt wurden. Die Befunde dieser Studien zeigen nicht, wie häufig Depressionen bei allen Menschen mit Borderline sind, und sie sind keine persönliche Prognose.» | «Die älteren Zanarini-Untersuchungen beruhen auf einer spezialisierten, zunächst stationär behandelten Stichprobe und betrachten Diagnosen im Lebenszeit- und Langzeitverlauf. Ihre Befunde sind keine Prävalenzschätzung für alle Menschen mit Borderline und keine individuelle Prognose.» | Einfache Sprache; «spezialisierte» Stichprobe und «Lebenszeit- und Langzeitverlauf» entfallen. Trägt das die Einschränkung? (nicht im Auftrag genannt) |
| 7 | `diagnose` › `begleiterkrankungen`, «Depression» | «Depressive Episoden entstehen durch ein Zusammenspiel biologischer, psychischer und sozialer Faktoren. Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich. Was Schuld von Verantwortung unterscheidet, steht auf der Seite «Ihre Rolle» …» | «… Aus einer Diagnose lässt sich keine persönliche Schuld ableiten. Angehörige müssen die Erkrankung weder verhindern noch heilen. Beziehungen können das Befinden dennoch beeinflussen; Verantwortung für konkrete verletzende oder gewalttätige Handlungen bleibt davon getrennt. Veränderungen im Miteinander sind allein kein Beleg für die Ursache einer Erkrankung.» | Verantwortung im Wortlaut von `verstehen`; die Sätze zu Beziehungen und verletzenden Handlungen tragen der Verweis auf `rolle#schuld`. Genügt das? (nicht im Auftrag genannt) |
| 8 | `behandlung` › `kontakt` | Drei Informationswege wörtlich, darunter «Vertraulichkeit Ihrer Mitteilung gegenüber der betroffenen Person kann nicht pauschal zugesichert werden.»; danach «Bei möglicher akuter Gefahr holen Sie sofort Hilfe über den Notruf und warten nicht auf eine Rückmeldung per E-Mail.» und der Verweis im Text | «Vertraulichkeit Ihrer Mitteilung gegenüber der betroffenen Person kann nicht pauschal zugesichert werden. Bei möglicher akuter Gefahr nutzen Sie die Notfallwege und warten nicht auf eine Rückmeldung per E-Mail.» | Wortlaut der Informationswege gehalten. Die Handlungsanleitung steht nach der Begriffsliste, weil sie für alle drei Wege gilt. Bestätigen |
| 9 | `behandlung` › `therapieformen` | «Nach NICE sollen Medikamente nicht gezielt zur Behandlung von Borderline selbst oder ihrer einzelnen Kernsymptome eingesetzt werden. Bei einer zusätzlichen Depression kann eine Kombination aus einem Antidepressivum und psychologischer Behandlung erwogen werden. Ob ein Medikament passt, wird individuell mit der behandelnden ärztlichen Fachperson geklärt. Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» | «Medikation: Nach NICE sollen Medikamente … erwogen werden. Ob Medikation passt, wird individuell mit der behandelnden ärztlichen Fachperson geklärt.» | Wortlaut des Bestands gehalten, dazu der Satz von `genesung` (Auftrag). Bestätigen |
| 10 | `behandlung` › `therapieformen`, Vertiefung «Programme für Angehörige» | «Psychoedukative Angehörigenprogramme vermitteln verständliche Informationen zur Erkrankung und zum Umgang damit. Diese Programme können entlastende Unterstützung bieten und sind fachlich beschrieben. Family Connections ist ein solches Programm für Angehörige von Menschen mit Borderline. Dazu liegen inzwischen auch Daten aus einer randomisierten Studie vor: Die Studie von 2024 fand keinen statistisch signifikanten Vorteil gegenüber einer aktiven Vergleichsbehandlung. Daraus folgt weder gesicherte Überlegenheit noch Gleichwertigkeit. Eine Beobachtungsstudie aus Frankreich und der Schweiz …» | «Psychoedukative Angehörigenprogramme können entlastende Unterstützung bieten. Für Family Connections liegen inzwischen auch randomisierte Daten vor: Die Studie von 2024 fand keinen statistisch signifikanten Vorteil gegenüber einer aktiven Vergleichsbehandlung; daraus folgt weder gesicherte Überlegenheit noch Gleichwertigkeit.» · «… sind nicht nur entlastende Zusatzangebote, sondern fachlich beschrieben.» | Einordnung der Studien wörtlich. Neu sind die Erklärung von «psychoedukativ» und der Satz zu Family Connections. Stimmen sie? |
| 11 | `behandlung` › `wartezeit`, Schritt 2 | «Für psychologische Psychotherapie zulasten der Grundversicherung ist eine ärztliche Anordnung nötig. Nicht alle Ärztinnen und Ärzte sind regulär anordnungsberechtigt. Klären Sie, wer sie ausstellen kann. Die Voraussetzungen erläutert das Bundesamt für Gesundheit.» (Link auf die BAG-Seite) | «Für psychologische Psychotherapie zulasten der Grundversicherung ist eine ärztliche Anordnung nötig; nicht alle Ärzt:innen sind regulär anordnungsberechtigt. Klären Sie, wer sie ausstellen kann.» | Wortlaut gehalten, Paarform. Ist der Stand beim BAG aktuell (Link liess sich hier nicht aufrufen)? |
| 12 | `behandlung` › `kontakt`, Vertiefung «Ich mache mir Sorgen um den Verlauf» | «Bei begründeten Zweifeln an Diagnose oder Behandlung kann eine zweite fachliche Einschätzung sinnvoll sein. Eine pauschale Wartefrist von einem Jahr gibt es dafür nicht.» | «…; eine pauschale Wartefrist von einem Jahr gibt es dafür nicht.» | Wortlaut gehalten. Bestätigen |
| 13 | `behandlung` › `kontakt`, Vertiefung «Musterbrief für einen ersten Kontakt» | «Wenn Sie als nahestehende Person Kontakt mit der behandelnden Fachperson aufnehmen möchten, …» Muster: «Betreff: Kurze Anfrage als Angehörige von [Vorname]» · «Guten Tag Frau/Herr [Name]» · «Ich bin [Beziehung zu Vorname, z. B. Mutter, Vater oder Partnerin] von [Vorname]. …» · «Mit freundlichen Grüssen [Ihr Name] [Optional: Telefonnummer für Rückruf]»; danach «Die behandelnde Fachperson ist an die Schweigepflicht gebunden und darf ohne Einwilligung der betroffenen Person keine Inhalte der Behandlung besprechen. Das ist keine Ablehnung, sondern professionelles Handeln.» | «Kontakt mit dem Therapeuten …» · «ich bin …» · «Wichtig: Der Therapeut ist an die Schweigepflicht gebunden und darf ohne Einwilligung Ihres Angehörigen keine Inhalte der Behandlung besprechen. Das ist kein Ablehnen – sondern professionelles Handeln.» | «behandelnde Fachperson» statt «Therapeut», Text des Musters sonst wörtlich. Der Platzhalter für die eigene Telefonnummer bleibt (keine Nummer eines Angebots). Bestätigen |
| 14 | `behandlung` › `rollen` | Spalte «Fachpersonen», «Nicht zu erwarten»: «Angehörige therapieren», «alle Beziehungsfragen stellvertretend lösen», «rund um die Uhr erreichbar sein»; Spalte «Die betroffene Person», «Nicht zu erwarten»: «allein für die Qualität der Beziehung sorgen» | Auswahl «Therapie» und «Person» ohne Trennung in zwei Listen (nur «Ihre Rolle» hat «MÖGLICHE BEITRÄGE» und «NICHT VON DIESER ROLLE ZU ERWARTEN») | Die Zuordnung zu «Nicht zu erwarten» ist abgeleitet. Stimmt sie? |
| 15 | `behandlung` › `angebote` | HYPE Züri «Für: Jugendliche ab 13 Jahren»; PUK Erwachsene mit neuem Link statt Telefon und Stations-E-Mail; ipw «Für: junge Erwachsene» und der Satz «Klären Sie die aktuellen Alters- und Aufnahmebedingungen direkt mit dem Anbieter.»; Sanatorium Kilchberg «Das Sanatorium Kilchberg ist eine Privatklinik für Psychiatrie und Psychotherapie am Zürichsee.» mit «Für: Angaben auf der Website»; Clienia «Für: Erwachsene ab 18 Jahren»; Dachverband DBT mit «Der Dachverband ist ein deutscher Verband.» | `/unterstuetzen/therapie` und `/verstehen/diagnostik`: «Frühinterventionsangebot für Jugendliche ab 13 Jahren …» · «Spezialisierte DBT-orientierte Behandlungsangebote für Erwachsene. Telefon …» · «Privatklinik für Psychiatrie und Psychotherapie am Zürichsee.» · «Suchweg für zertifizierte DBT-Therapeutinnen und -Therapeuten.» | Auswahl, Sätze und Links prüfen. Die Website von HYPE nennt kein Mindestalter («ab 13»?). Die ipw nennt 17 bis 25 Jahre, aber nicht Borderline und DBT. Sanatorium Kilchberg: die Website nennt kein Angebot für Borderline, behalten? Dachverband: ob Schweizer Einträge enthalten sind, ist nicht belegt |
| 16 | `behandlung` › `therapieformen` | «Auch klar strukturierte, auf Borderline abgestimmte Behandlungen ohne spezialisiertes Therapielabel können wirksam sein.» | «Auch klar strukturierte, störungsinformierte Behandlungen ohne spezialisiertes Therapielabel können wirksam sein.» | «auf Borderline abgestimmt» für «störungsinformiert». Trifft das? (nicht im Auftrag genannt) |
| 17 | `behandlung` › `kontakt` und `wartezeit` | Handlungsanleitungen im neuen Wortlaut (Tabelle «Verweise im Text», Nr. 3 und 4); in `wartezeit`: «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz: Nutzen Sie den zuständigen Notfalldienst.» | Bei unklarer Dringlichkeit nennt der Verweis im Text den ärztlichen Notfalldienst, bei unmittelbarer Gefahr steht «Notruf». Bestätigen (der Auftrag nennt die Anleitungen nur für `diagnose`) |
| 18 | `unterstuetzung` › `austausch` | «Gruppe für Eltern von Jugendlichen mit Borderline» · «Für Eltern jugendlicher Betroffener gibt es an der PUK Zürich die Gruppe «Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung». Sie bietet Austausch, Psychoedukation und Beratung für Eltern, die mit der Diagnose und ihren Folgen umgehen lernen. Teilnahmebedingungen und Anmeldung stehen auf der Website.» | `/verstehen/diagnostik`, «Für Eltern jugendlicher Betroffener»: derselbe Text, dazu «Mehr Informationen auf pukzh.ch» | Die Website nennt die Gruppe «Gruppentherapie für Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung» (Auftrag). Soll der Name auf der Seite so lauten? |

### Etappe 2c-2: Verweise von freigegebenen Seiten (Vorschlag)

Diese Seiten sind nicht geändert. Der Linktext ist jeweils der Titel der Zielstelle.

| Nr. | Seite › Ort | nach dem Satz | Vorschlag |
| ---: | --- | --- | --- |
| 1 | `verstehen` › `borderline` | «Die Diagnose allein sagt nichts darüber, ob von einem Menschen Gefahr ausgeht.» | «Wie eine Abklärung abläuft und was eine Diagnose für Sie bedeuten kann, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Der Weg zur Abklärung».» |
| 2 | `verstehen` › `mythen`, Annahme «Borderline ist dasselbe wie Trauma.» | «Einzelne Merkmale können sich überschneiden, und die Diagnosen können zusammen auftreten.» | «Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen».» (Bestand: «Begleiterkrankungen.», `verstehen.md` Nr. 127, entfällt mit Verweis auf `diagnose`) |
| 3 | `rolle` › `anbieten`, «Was nicht Ihre Aufgabe ist» | «Therapie, Psychiatrie und Beratung bieten Fachpersonen an.» | «Wer in der Behandlung was beitragen kann, steht auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Wer was beitragen kann».» |
| 4 | `krise` › `danach`, «Für die betroffene Person» | «Dabei kann auch geklärt werden, welche Rolle Sie freiwillig übernehmen können.» | «Wie Sie den Kontakt zum Behandlungsteam klären können, steht auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Kontakt zum Behandlungsteam».» |
| 5 | `selbstfuersorge` › `warnsignale` | «Dabei können auch andere Ursachen abgeklärt werden.» | «Wenn Sie sich fragen, ob Sie selbst erkrankt sind, steht mehr dazu auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Wenn noch keine Diagnose gestellt ist».» |
| 6 | `beziehungen` › `verantwortung` | «Angehörige dürfen zur Veränderung beitragen. Sie sind aber keine Therapeutinnen oder Therapeuten.» | «Was die Behandlung leisten kann und was Ihre Rolle darin ist, steht auf der Seite «Behandlung und Ihre Rolle darin».» (die vorgemerkte Zeile `beziehungen.md` Nr. 208 kommt von hier) |

Dazu, auf Seiten der Etappe 2c (nicht freigegeben), ebenfalls nicht umgesetzt: `unterstuetzung` › `kantone` könnte auf `behandlung#angebote` verweisen, `genesung` › `einfluesse` («Strukturierte Behandlung») auf `behandlung#therapieformen`.

### Etappe 2c-2: Entscheide der bauenden Sitzung (zur Prüfung)

1. **H1 von `diagnose`:** «Diagnose und Begleiterkrankungen» (Seitentitel) statt «Wie eine Borderline-Diagnose entsteht», weil die Seite beide Themen hat; wie eine Diagnose entsteht, sagt die Einleitung.
2. **`diagnose` › `abklaerung`:** vier statt zwei, drei einleitende Sätze; «Wer die diagnostische Gesamtbeurteilung übernimmt, hängt von Qualifikation, Setting und Behandlungsweg ab.» bleibt, damit die Aussage nicht entfällt. Die Schrittnamen sind h3 (direkt unter dem Abschnittstitel), in der Grösse der Stufen auf `kommunizieren`. Schritt 2 hat vier kurze Sätze statt ein bis zwei, weil der Auftrag dort drei Inhalte nennt.
3. **`diagnose` › `ohne-diagnose`:** Reihenfolge des Bestands (Hausarztpraxis, Fachstelle, spezialisierte Stellen), «Bin ich auch betroffen?» zuletzt. Zusätzlicher Verweissatz auf `unterstuetzung#beratung` für «Beratung & Netzwerke» des Bestands.
4. **`diagnose` › `begleiterkrankungen`:** Der Verweissatz auf `behandlung#therapieformen` steht direkt nach der Differenzialdiagnostik (vor «Depression»); die eigene Belastung in depressiven Phasen mit dem Verweissatz auf `selbstfuersorge#unterstuetzung` steht im Unterkapitel «Depression», weil sie dorthin gehört. So endet der sichtbare Teil mit dem Unterkapitel zu Suizidgedanken.
5. **`behandlung` › `rollen`:** Die drei Rollen stehen über die volle Breite (`.puk-vis-wide`, ohne `figure`), drei Spalten ab 860 px Containerbreite, also ab etwa 1024 px Fensterbreite (Tablet quer). Bei 768 px Fenster wäre eine Spalte nur 214 px breit, und «Behandlungsschritten» passt in Seitenschrift nicht. Darunter stehen die Rollen untereinander. Ein Einleitungssatz nennt die drei Rollen. Die Bezeichnungen «Kann beitragen» und «Nicht zu erwarten» stehen im Wortlaut des Auftrags (auch bei «Fachpersonen» und «Angehörige»).
6. **`behandlung` › `kontakt`:** Die Handlungsanleitung steht nach der Begriffsliste, weil sie für alle drei Wege gilt; «Bei akuten Sicherheitsbedenken holen Sie sofort professionelle Hilfe.» ist mit ihr zusammengeführt (höchstens ein Verweis im Text je Abschnitt).
7. **`behandlung` › `therapieformen`:** Die Einordnung der Forschung steht vor der Begriffsliste (Kernaussage zuerst); die Settings stehen als Begriffsliste «Ambulant», «Teilstationär», «Stationär» mit «Formen» statt «Settings». Zusätzlicher Verweissatz auf `diagnose#begleiterkrankungen` im Wortlaut von `genesung`.
8. **`behandlung` › `rueckschlaege`:** zwei Zwischentitel «Wenn Therapie gerade schwierig ist» (Bestand) und «Wenn Sprache Gespräche erschwert» (neu); der Beispielsatz als `.puk-say` mit der Bezeichnung «In einer stabilen Phase direkt ansprechen».
9. **`behandlung` › `angebote`:** je Angebot ein Zwischentitel, ein Satz, «Für: …» und «Website: …» mit einem Linktext, der das Ziel nennt (zwei Seiten auf www.pukzh.ch). Sanatorium Kilchberg «Für: Angaben auf der Website», weil der Bestand keine Zielgruppe nennt.
10. **Musterbrief:** als `.puk-say` mit der Bezeichnung «Muster-E-Mail», Betreff, Anrede, Text und Gruss je als eigene Zeile; «z. B.» mit festem Leerschlag.
11. **`sensitiveTopics`:** `diagnose` «selbstgefaehrdung», «akute-krise»; `behandlung` dazu «gewalt» («Gewaltgespräche»). Ohne die Einträge blockiert `safety-contract`, und der Verweis im Text braucht eines dieser Themen.
12. **Druckregel:** Kicker und Abschnittstitel bleiben im Druck zusammen (`break-after: avoid` am Kicker, `break-inside: avoid` am Titelblock). Gilt für alle Seiten, nur im Druck; am Bildschirm ändert sich nichts.
13. **Quellen:** «Gunderson et al. (1997)» als Kurzname wie auf `rolle` und `beziehungen`; NICE CG78 und NG222 stehen auf beiden Seiten mit der jeweils verwendeten Aussage.

### Etappe 2c-2: Aufgefallen, nicht geändert

1. **«Kann beitragen» bei Mehrzahl:** Bei «Fachpersonen» und «Angehörige» wäre grammatisch «Können beitragen» richtig. Der Auftrag nennt «Kann beitragen» für alle drei Rollen.
2. **Kennzahlen `behandlung`:** 100 % des alten Umfangs, weil die Seite auch die Angebote und «Kein Therapieplatz» aus `/verstehen/diagnostik` aufnimmt; im Lesefluss 1677 Wörter (Ziel etwa 1800).
3. **Verneinung:** `diagnose` 21 % wie im Bestand, `behandlung` 17 % (Bestand 19 %).
4. **Ein Link, zwei Einträge:** HYPE Züri (`behandlung`) und die Gruppe für Eltern (`unterstuetzung`) verlinken dieselbe Seite der PUK; das entspricht dem Auftrag.
5. **`starter.css`** definiert `.puk-site-anchor-end` weiter (wie in 2c-1 vermerkt).
6. **Zählweise C1:** Das Skript dieser Sitzung zählt auf Seiten mit Abbildung 4 bis 15 Wörter weniger als die Werte der früheren Selbstprüfungen; `diagnose` und `behandlung` sind davon nicht betroffen.

**Stand 11.10.2026 · Etappe 2c-1 · bauende Sitzung (Claude Code).** Umgesetzt ist `BAUAUFTRAG-ETAPPE-2C1.md` (Seiten `genesung` und `unterstuetzung`, Einstiege auf `index`, zwei technische Reste aus 2b). Grundlage ist `borderline-umbau` am Stand `ed277d9`. Geändert sind nur:

- `content/` und die gebauten Seiten von `genesung` und `unterstuetzung` (neu gebaut, Abschnitte 3 bis 5) und `index` (Einstiege, Abschnitt 6)
- auf den sieben Seiten mit Quellenblock (`verstehen`, `beziehungen`, `grenzen`, `rolle`, `selbstfuersorge`, `kommunizieren`, `krise`) nur die Klasse `puk-site-anchor-end` am Quellenblock (Abschnitt 7); der Seitentext ist gleich
- `borderline.css`: Regeln für die Kernsätze, die Zahlen und die Bücherliste; die Druckregel aus Abschnitt 7
- `site.config.json`: `genesung` und `unterstuetzung` (Status, Aufgabe, Beschreibung, `sensitiveTopics`, `visualPlan`)
- der Abgleich: zwei neue Tabellen, `index.md`, `beziehungen.md`, `selbstfuersorge.md`, `README.md` und drei Skripte (`pruefe-abgleich.mjs`, `kennzahlen.mjs`, `bedienung.mjs`; `verneinung.mjs` übernimmt die Seiten aus `kennzahlen.mjs`)
- in diesem Bericht nur dieser Block

Keine Prüfstufe ist «erledigt»; der Status bleibt in allen Zeilen «offen». Der Block «Freigabe 2b eintragen» steht darunter.

**Auftrag im Website-Ordner:** `BAUAUFTRAG-ETAPPE-2C1.md` lag im Stamm von `main` (`e693bde`, hochgeladen als «BAUAUFTRAG-ETAPPE-2C1 (1).md»). Die Datei liegt unverändert in diesem Ordner (`78f3da3`; `cmp` und SHA-256 gleich, nur der Dateiname ohne « (1)»). Sie ist aus dem Stamm von `main` entfernt (`d8f419e`, direkter Push auf `main`).

### Etappe 2c-1: Stand je Abschnitt des Auftrags

| Abschnitt | Stand | Beleg |
| --- | --- | --- |
| 1 Entscheide | umgesetzt | Reihenfolge: `genesung` und `unterstuetzung` gebaut, alle Einstiege der Startseite sind gebaut. Bild: `genesung` › `verlauf` Abbildung 1 «Ein neuer Trieb» (`v-ge-trieb`). Bücher: alle empfohlenen Titel sichtbar nach Zielgruppe (`unterstuetzung` › `buecher`, sechs Zwischentitel); die vier kritisch eingeordneten Titel mit Einordnung in der Vertiefung «Historisch einflussreich oder kritisch einzuordnen», ohne Bezugslinks. Angebote nur mit Link zur Website, ohne Telefonnummern und Telefonzeiten. Zahlen 93 % und 50 % als hervorgehobener Text (`dl.bl-zahlen`), kein Diagramm. Garten-Text nicht wiederholt, Verweissatz auf `rolle#anbieten`. `navLabel` beider Seiten `null` |
| 2 Regeln | umgesetzt, Rest siehe «Zur Prüfung» | Einfache Sprache und klares Subjekt, zum Beispiel «Die Fachstelle ist eine Anlaufstelle …» statt «Sie ist …», «Die Bereiche sind eine Orientierung …»; keine Semikolons im Fliesstext (`kennzahlen.mjs`: 0 und 0; im Bestand 7 und 7). Absicherungen wie im Bestand: «Studienzahlen beschreiben Gruppen und keine persönliche Prognose.», «Veränderungen können früher eintreten.», «Was davon relevant ist und welche Behandlung passt, braucht eine individuelle fachliche Abklärung.»; kein Heilungsversprechen («Zum Begriff «Heilung»» steht in einer Vertiefung). Verantwortung im Wortlaut von `rolle`: «Für Behandlung und Genesung sind Sie nicht verantwortlich.» (`genesung` › `freiwillig`); kein «allein» bei Erkrankung, Behandlung oder Genesung. Verlinkt statt wiederholt: `rolle#anbieten`, `index#beratung` (zweimal), `selbstfuersorge#beratung`, `selbstfuersorge#warnsignale`, `kommunizieren`. Keine Links auf Entwurfsseiten (Build ohne `link-target`); der Satz zu Begleiterkrankungen steht ohne Link, der Link ist im Abgleich für `diagnose` (Etappe 2) vorgemerkt (`genesung.md` Nr. 163). Keine Nummer, kein `tel:`, kein Notfallblock; Links auf `/soforthilfe` entfallen (`unterstuetzung.md` Nr. 49 bis 51, `genesung.md` Nr. 223). Quellen im Block «Quellen zu dieser Seite» am Ende von `genesung`; die Quelle der Abbildung steht bei der Abbildung. Länge: `genesung` 1147, `unterstuetzung` 1057 Wörter im Lesefluss (Ziele etwa 1800 und 1500). Vertiefungen als Akkordeon des Profils, ohne Skript offen (3 von 3, 1 von 1) und im Druck vollständig (3 von 3, 1 von 1) |
| 3 `genesung` | umgesetzt, Gliederung wie vorgeschlagen, eine Abweichung | Kopf: «Hoffnung ist bei Borderline berechtigt. …» und die drei Kernsätze als Liste. 01 `forschung`: Kernaussage zuerst («Langzeitstudien sprechen klar gegen das alte Bild einer hoffnungslosen Entwicklung. …»), dann 93 %, 50 %, 10 Jahre mit Erklärung, direkt danach «Untersucht wurden 290 Erwachsene, die zu Studienbeginn stationär behandelt wurden.» und «Was die Zahlen nicht sagen». 02 `begriffe`: drei Begriffe als Begriffsliste, «Zum Begriff «Heilung»» als Vertiefung. 03 `verlauf`: Abbildung 1 direkt nach dem ersten Absatz; danach «Weniger hilfreich / Tragfähiger» als `.puk-say` ohne das Satzpaar der Abbildung, die vier vorgemerkten Sätze aus `beziehungen` unter «Ein realistischer Massstab für Veränderung», «Was Sie tun können». 04 `einfluesse`: fünf Bereiche als Begriffsliste «ohne Reihenfolge, keine Formel und keine persönliche Prognose»; «Sozialberatungen können unterstützen.» bleibt; Begleiterkrankungen als Satz ohne Link. 05 `freiwillig`: kurz, Verweissatz auf `rolle#anbieten`; sichtbar die Selbstfrage und «Ihre Gesundheit zählt für sich, nicht erst als Beitrag zur Genesung einer anderen Person.»; Eltern Minderjähriger und Beistandschaft in einer Vertiefung. Abweichung: Titel von 05 «Freiwillige Unterstützung und eigene Grenzen» (Handout-Titel des Bestands) statt «Was Sie anbieten können und was nicht Ihre Aufgabe ist», weil dieser Titel schon auf `rolle` steht und der Verweissatz sonst denselben Titel zweimal nennt. Entfallen mit Grund: «Materialien & Infografiken», Lesezeit, «Schritt 7 von 8» (Abgleich «entfällt»); die Garten-Bereiche «zusammengeführt» mit Ort `rolle#anbieten` |
| 4 Abbildung 1 | umgesetzt | Titel, Kernaussage, Kurztext (Semikolon als Punkt), die zwei Sätze der Szene, Kurzbeschreibung, «Grenzen des Bildes» (drei Teile) und Quelle im Wortlaut des Auftrags (Abgleich prüft jede Fassung auf der gebauten Seite). Zeichnung aus Anhang A, Pfade unverändert; verfeinert ist nur der Bildausschnitt: `viewBox` «60 44 530 214» statt «0 40 640 220», die leeren Ränder links und rechts entfallen, damit die Zeichnung schmal grösser ist (bei 360 px Fensterbreite 320 × 129 px; mit dem alten Ausschnitt wäre der gezeichnete Teil etwa 265 px breit). Fest bleibt: abgefallenes Blatt neben dem Topf, neuer Trieb oben, Giesskanne daneben, sie giesst nicht. Nur Profil-Klassen, keine Hexwerte, keine `style`-Attribute. Schmal stehen die Sätze untereinander über der Zeichnung. `resonance` und `approvalStatus` «ausstehend» wie im Auftrag |
| 5 `unterstuetzung` | umgesetzt, Gliederung wie vorgeschlagen | Kopf aus `/beratung`. 01 `beratung`: Fachstelle mit vier Angeboten als Begriffsliste, «Die Fachstelle ist kein Krisendienst und keine Therapie.» sichtbar, Kontakt und Bedingungen über den Verweissatz auf `index#beratung`, «Was Sie vorab klären können» mit den drei Fragen, die die Startseite nicht beantwortet; Pro Mente Sana mit Link; die «Nächsten Schritte» als Verweissätze auf `selbstfuersorge#warnsignale` und `kommunizieren`. 02 `austausch`: Stand by You Schweiz (früher VASK Schweiz, HelpLine von Angehörigen für Angehörige, ohne Nummer und Zeiten) und VASK Zürich (Treffpunkte Zürich und Winterthur, ohne Termine); je Link. 03 `selbsthilfe`: Selbsthilfe Schweiz mit Link. 04 `kantone`: Regional-Hinweis. 05 `buecher`: alle empfohlenen Titel nach Zielgruppe mit Autorin oder Autor, Verlag und Jahr (wo der Bestand eines nennt), ein bis zwei Sätzen und «Für: …»; Hinweis zu den Empfehlungen; «Viele Bücher sind auch in Bibliotheken verfügbar …»; die vier kritisch eingeordneten Titel in der Vertiefung. Bezugslinks zu Ex Libris entfallen. «Einordnung dieser Website» im Abgleich «verschoben» mit Ort «ueber (Etappe 3)» (`unterstuetzung.md` Nr. 37, 38, 40; Nr. 39, die offene Freigabe des Bestands, entfällt als Meta-Text) |
| 6 `index`, `site.config.json` | umgesetzt | Nach «Zugewandt und klar sprechen»: «Ich frage mich, ob es je besser wird.» mit «Genesung: Hoffnung, unterschiedliche Verläufe und Grenzen des eigenen Einflusses verbinden.» und «Ich suche Beratung oder Austausch mit anderen Angehörigen.» mit «Unterstützung finden: Beratung, Austausch mit anderen Angehörigen und Bücher.»; der Platzhalter «Weitere Einstiege folgen» ist weg; sonst ist `index` unverändert (`git diff --word-diff`: nur die Liste der Einstiege). `genesung` und `unterstuetzung`: `status` «published», `primaryTask`, `description`, `sensitiveTopics` (`genesung` keine; `unterstuetzung` «akute-krise», weil die Seite «kein Krisendienst», «seelische Krisen» und «Krisenhinweise» nennt; ohne den Eintrag blockiert das Gate `safety-contract`), `visualPlan` mit einer Zeile je Abschnitt (`genesung` 5 + Quellenblock; `unterstuetzung` 5, die Seite hat keinen Quellenblock, weil der Bestand dieser drei Seiten keine Quellen nennt); die Seitenplatzhalter sind weg |
| 7 Technische Reste | umgesetzt | Mindesthöhe: `puk-site-anchor-end` ist auf allen sieben Seiten weg (`grep` findet die Klasse in `content/` nicht mehr); Sprung über die Kapitelübersicht zum letzten Abschnitt: Tabelle unten. Druck: Regel in `borderline.css` (Titel nicht allein am Seitenende); sie wirkt erst, seit das Abschnittsraster im Druck im Blockfluss steht. Vorher und nachher gemessen, Tabelle unten. Wortlaut der Seiten unverändert (sichtbarer Text der sieben Seiten vorher und nachher gleich) |
| 8 Danach | bestanden, Abweichungen siehe unten | Prüfungen nach Abschnitt 8 unten. Nicht möglich: die Ziele der externen Links online aufrufen (die Netzwerkrichtlinie dieser Umgebung sperrt die vier Hosts); geprüft ist, dass jede Adresse der Website-Adresse im Bestand entspricht |

### Etappe 2c-1: Prüfungen nach Abschnitt 8

- **`node tools/build.mjs`:** 0 blockierend, 8 Hinweise: 1 × `visual-approval` (`v-ge-trieb`), 5 × `placeholder-approval`, `site-url`, `review-report`.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 7 blockierend und 1 Hinweis (`site-url`), wie erwartet: 1 × `visual-approval` («Ein neuer Trieb»), 5 × `placeholder-approval` (`diagnose`, `behandlung`, `fragen`, `quellen`, `ueber`), 1 × `review-report`.
- **`node abgleich/pruefe-abgleich.mjs`:** 5342 Zeilen, 0 ohne Fundstelle (vorher 4509; dazu 508 Zeilen in `genesung.md`, 323 in `unterstuetzung.md`, 2 in `index.md`). Vor dem Nachführen der bestehenden Zeilen meldete es 17 Zeilen ohne Fundstelle (Platzhalter auf `index`, Zitate in Bemerkungen).
- **Bildschirmfotos, angesehen:** Abbildung 1 bei 1280 und 360 px, Standard und «kontrast» (vier Fotos); jede Vertiefung offen bei 1280 und 360 px in beiden Themes (`genesung`: «Zum Begriff «Heilung»», «Eltern Minderjähriger und Beistandschaft», «Quellen zu dieser Seite», «Grenzen des Bildes»; `unterstuetzung`: «Historisch einflussreich oder kritisch einzuordnen»), dazu Kopf, Zahlen und Bücherliste.
  - «Ein neuer Trieb»: breit steht der Satz «Eine schwierigere Phase entwertet alles.» über der Pflanze, «Schwierigere Phasen kommen vor und müssen nicht alles kippen.» über der Giesskanne. Schmal stehen beide Sätze untereinander über der Zeichnung; die Zeichnung ist dann 320 × 129 px, Blatt, Trieb und Giesskanne sind erkennbar.
  - «kontrast»: Linien dunkler, die Fläche des Fenstersimses und der Blätter bleibt, nichts verschwindet.
  - Vertiefungen: Titel bei 360 px zwei- bis dreizeilig ohne Abschneiden; geöffnet vollständig.
- **Überlauf:** 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px, Vertiefungen zu und offen; `genesung`, `unterstuetzung` und `index` in beiden Themes, die übrigen sieben Seiten im Standard-Theme (234 Messungen): kein waagrechter Überlauf, kein Element breiter als das Fenster. Zoom 200 % (640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %), alle zehn Seiten: 0 px Überlauf.
- **Kontraste:** alle Textelemente mit eigenem Text in `main`, Kopf und Fusszeile von `genesung`, `unterstuetzung` und `index`, beide Themes, 1280 und 360 px: keines unter AA; tiefster Wert 4,71 : 1 (Link der Absenderin). Linien der Zeichnung gegen den Hintergrund der Figur 4,71 : 1 (Standard) und 10,08 : 1 («kontrast»), Linien gegen die hellblaue Fläche 3,59 : 1 und 7,70 : 1. Keine festen Farben in SVG, keine `style`-Attribute.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps bis zur Fusszeile: `genesung` 20, `unterstuetzung` 21, `index` 17 (vorher 15, zwei neue Einstiege); jeder mit sichtbarem Fokus und im Fenster; der erste ist «Zum Hauptinhalt».
  - Reihenfolge wie beim Lesen: Kopf, Navigation, Absenderin, Kapitelübersicht, dann Vertiefungen und Links im Text, zuletzt «Quellen zu dieser Seite».
  - Vertiefungen: Enter öffnet 3 von 3 und 1 von 1, Leertaste schliesst sie; «Grenzen des Bildes» öffnet mit Enter.
  - Nach dem Laden läuft keine Animation.
- **Druck:** alle Panels und «Grenzen des Bildes» im Druck sichtbar; PDF von `genesung` (11 Seiten), `unterstuetzung` (10) und `kommunizieren` (21; je A4 ohne Rand) erzeugt und angesehen; externe Links zeigen im Druck die Adresse.
- **Ohne Skript:** 3 von 3 und 1 von 1 Panels sichtbar.
- **`node abgleich/bedienung.mjs`:** `genesung` 20 Tabstopps, 14 152 px bei 360 px, Abbildung 766 px; `unterstuetzung` 21 Tabstopps, 13 181 px; `index` 17 Tabstopps, 4964 px. Übrige Seiten ohne den Leerraum unter dem Quellenblock: `verstehen` 16 833, `beziehungen` 15 684, `grenzen` 17 093, `rolle` 25 771, `selbstfuersorge` 21 631, `kommunizieren` 25 246, `krise` 16 306 px; Tabstopps unverändert.
- **Externe Links** (`unterstuetzung`): `https://www.promentesana.ch`, `https://www.stand-by-you.ch`, `https://www.vaskzuerich.ch`, `https://www.selbsthilfeschweiz.ch`. Jede Adresse ist die Website-Adresse des Bestands (`/beratung`); Linktext ist die Adresse, kein `target="_blank"`. **Nicht prüfbar:** Ob die Ziele heute erreichbar und die offizielle Website sind, liess sich hier nicht aufrufen (Netzwerkrichtlinie: `CONNECT` 403, Namensauflösung gesperrt). Das prüft die Fachstelle mit den Angaben der Angebote (Liste unten).
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Etappe 2c-1: Sprung zum letzten Abschnitt und Druck (Abschnitt 7)

**Sprung über die Kapitelübersicht** (letzter Eintrag, Klick, danach Abstand der Abschnittsoberkante vom Fensterrand):

| Fenster | `verstehen` | `beziehungen` | `grenzen` | `rolle` | `selbstfuersorge` | `kommunizieren` | `krise` | `genesung` | `unterstuetzung` |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1280 × 900 | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px |
| 1920 × 1080 | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px |
| 360 × 800 | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px | 24 px |

Der letzte Abschnitt der Kapitelübersicht ist auf jeder Seite ein Inhaltsabschnitt, und darunter folgen Quellenblock und Fusszeile. Deshalb erreicht der Sprung den Abschnitt auch ohne Mindesthöhe; 24 px ist der Abstand des Profils über dem Ziel. `index` hat keine Kapitelübersicht.

**Druck: Zwischentitel allein am Seitenende.** Gemessen mit PDFs aus Chromium, je Seite und Einstellung die letzte Zeile jeder Seite gegen alle Titel in `main` (h2 bis h5). «Vorher» ist der Stand `ed277d9` (alte `borderline.css` und, auf den sieben Seiten, die alte gebaute Seite).

| Prüfung | vorher | nachher |
| --- | --- | --- |
| `kommunizieren`, 56 Einstellungen (A4 und Letter; Rand 0 bis 25 mm; Skalierung 70 bis 100 %) | 79 Titel allein am Seitenende, davon «Die sechs Stufen im Detail» zweimal (A4 ohne Rand, Seite 7; A4, Rand 12,7 mm, 90 %) | 0 |
| übrige neun Seiten, je 6 Einstellungen (A4 ohne Rand, 10, 15, 20 mm; Letter ohne Rand, 12 mm) | auf 34 von 54 Seiten-Einstellungen mindestens ein Titel allein, zum Beispiel «Wenn Gespräche kippen», «Es wird eng.», «R · Verstärken», «Was die Zahlen nicht sagen» | 0 von 60 (alle zehn Seiten) |

**Ursache und Lösung:** Eine Regel nur mit `break-after: avoid` (erster Versuch) änderte nichts: Im Druck ist das Abschnittsraster des Profils einspaltig, und zwischen Rasterzeilen beachtet Chromium `break-after` nicht. Die Regel stellt den Abschnitt deshalb im Druck auf Blockfluss um (Titelspalte über dem Text, Abstand `--space-8`), gilt für alle Titel in `main` und für Begriffe in Begriffslisten (`dt`) und hält in «Zwei Sichten» (`beziehungen`, ein kleines Raster je Schritt) jeden Schritt zusammen. Sie wirkt nur im Druck; am Bildschirm ändert sich nichts.

### Etappe 2c-1: Wörter im Lesefluss (Zählweise C1)

C1 wie in den Selbstprüfungen 2b bis Freigabe 2b: innerste `p`, `li`, `dt`, `dd` in `<main>`, ohne SVG, Text nur für Screenreader, Kapitelübersicht, Kicker, Eyebrow, «Abbildung n · …», Quellenzeilen und den Block «Quellen zu dieser Seite»; «im Lesefluss» ohne die Panels der Akkordeons, «Grenzen des Bildes» zählt mit. Skript der bauenden Sitzung im Browser; am Stand `ed277d9` ergibt es genau die Werte der Freigabe 2b (`index` 221, `verstehen` 1502, `beziehungen` 1452, `grenzen` 1508, `rolle` 2627, `selbstfuersorge` 2130, `kommunizieren` 2452, `krise` 1523).

| Seite | Kopf | Abschnitte (C1 im Lesefluss) | C1 im Lesefluss | Ziel | C1 mit Vertiefungen | `kennzahlen.mjs` gesamt (alt → neu) |
| --- | ---: | --- | ---: | ---: | ---: | --- |
| `genesung` | 55 | `forschung` 184 · `begriffe` 192 · `verlauf` 274 · `einfluesse` 245 · `freiwillig` 197 | **1147** | etwa 1800 | 1224 | 1620 → 1475 |
| `unterstuetzung` | 39 | `beratung` 205 · `austausch` 88 · `selbsthilfe` 35 · `kantone` 42 · `buecher` 648 | **1057** | etwa 1500 | 1270 | 2010 → 1338 |
| `index` | 23 | `einstiege` 96 → 107 · `beratung` 73 · `haltung` 29 | 221 → 232 | – | gleich | 302 → 329 |

Beide Ziele sind erreicht. «Alt» bei `unterstuetzung` ist die Summe von `/fachstelle`, `/beratung` und `/buchempfehlungen`. Absicherungen je 100 Wörter (`kennzahlen.mjs`): `genesung` 1,98 → 2,17, `unterstuetzung` 0,90 → 1,12. Semikolons im Fliesstext 7 → 0 und 7 → 0. Sätze mit Verneinung (`verneinung.mjs`): `genesung` 37 von 217 (17 %) → 45 von 158 (28 %); `unterstuetzung` 28 von 313 (9 %) → 16 von 193 (8 %). Auf `genesung` tragen die Verneinungen meist eine Absicherung des Bestands weiter («keine persönliche Prognose», «keine feste Wartezeit», «nicht automatisch», «nicht verantwortlich»). Die sieben übrigen Seiten haben dieselben Werte wie nach Freigabe 2b (sichtbarer Text unverändert).

### Etappe 2c-1: Verweise im Text

Keine. Auf `genesung` und `unterstuetzung` steht keine Handlungsanleitung für eine akute Lage; der Bestand nennt bei den Links auf «Akute Hilfe und Notfallkontakte» und `/soforthilfe` keine Handlungsanleitung (`genesung.md` Nr. 223, `unterstuetzung.md` Nr. 49 bis 51). Der Zuständigkeitsverweis steht wie auf allen Seiten in der Fusszeile. `unterstuetzung` hat `sensitiveTopics` «akute-krise» nur wegen der Stichwörter (Gate `safety-contract`), nicht für einen Verweis im Text.

### Etappe 2c-1: Visualisierungs-Check «Ein neuer Trieb»

Selbstprüfung, keine Prüfstufe. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | `v-ge-trieb` | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | Build ohne Hinweis `visual-plan`; `data-visual-id` «v-ge-trieb», `data-visual-type` «illustration» wie im Plan | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | `genesung` 5 Abschnitte + Quellenblock, 6 Zeilen; `unterstuetzung` 5 und 5. Zum Beispiel `v-ge-forschung`: «… Ein Balkendiagramm würde zwei Werte vergleichen, die Verschiedenes messen (Remission und Recovery), und die Einschränkungen von den Zahlen trennen.»; `v-ge-einfluesse`: «… Eine Figur mit fünf gleichen Feldern wäre ein Kartenraster …» | – |
| 3 | Prüffrage beantwortet und eingelöst | E | `understood`: «Dass Rückschritt und neues Wachsen zugleich da sein können: Das abgefallene Blatt und der neue Trieb an derselben Pflanze zeigen auf einen Blick, dass eine schwierigere Phase das Erreichte nicht aufhebt. …»; die Zeichnung zeigt beides an einer Pflanze | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | Kernaussage «Eine schwierigere Phase bedeutet nicht, dass alles Erreichte verloren ist.» und Kurztext sichtbar; die Vertiefung nennt nur Grenzen des Bildes | – |
| 5 | Ansatzpunkt (B, C, G) | – | Illustration (Muster D), kein Erklärmodell | – |
| 6 | Mechanismus nicht doppelt gezeigt | T | einzige Abbildung der Seite; Zahlen, Begriffe und Bereiche als Text. Die Giesskanne trägt dieselbe Idee wie «Ein Stück Weg» auf `rolle` («Sie können begleiten. Genesung herstellen können Sie nicht.»); beide kommen aus dem Handout «Der Garten». Der Schwerpunkt hier ist der Rückschritt | Fachstelle (entschieden), R2 |
| 7 | Kartenraster-Check | E | keine Kastenreihe; Begriffslisten, Listen und `.puk-say`; die Bücherliste ist eine Liste mit Trennlinien (Gate ohne `card-grid`) | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | Das Blatt liegt neben dem Topf, der neue Trieb wächst oben an derselben Pflanze; die Giesskanne steht daneben, Ausguss zur Pflanze hin, kein Wasser | – |
| 9 | Verteilt, keine Textwand | E | eine Abbildung in der Mitte der Seite (Abschnitt 03); 1147 Wörter im Lesefluss (C1), 14 152 px bei 360 px; gegliedert durch Kapitelübersicht, hervorgehobene Zahlen, Begriffslisten, `.puk-say` und drei Vertiefungen | – |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle | E | «Grenzen des Bildes»: «Das Bild ist eine Metapher, keine Vorhersage eines Genesungsverlaufs. Hilfreiche Bedingungen können Entwicklung unterstützen. Wie und wann ein Mensch sich verändert, lässt sich daraus nicht vorhersagen. Angehörige können Genesung nicht herstellen.»; Quelle im Wortlaut des Auftrags | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | SVG ohne Animation; Sätze, Kernaussage und Kurztext sind HTML-Text | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | kein Überlauf bei 320 und 360 px; Sätze schmal untereinander; Kurzbeschreibung im Wortlaut des Auftrags, über `aria-describedby` verbunden | – |
| 13 | Theme «kontrast» geprüft | E | Fotos bei 1280 und 360 px; Linien 10,08 : 1, gegen die Fläche 7,70 : 1; keine festen Farben | – |
| 14 | Inhalt fachlich freigegeben | N | `approvalStatus` «ausstehend»; Gate production: `visual-approval` | Fachstelle |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | «Entlastung und realistische Hoffnung: Ein Rückschritt macht nicht alles zunichte, und das Wachsen muss ich nicht machen.»: Blatt und Trieb zeigen den ersten Teil, die Giesskanne, die nicht giesst, den zweiten | – |
| 16 | Ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | T | zwei gedachte Sätze, kein Bildteil beschriftet, keine Liste, die das Bild übersetzt. Das Bild trägt aber zwei Ideen (Rückschritt; begrenzter Einfluss). Die Sätze sprechen nur die erste an; die zweite erschliesst sich ohne Text erst beim zweiten Hinsehen | R2 |
| 17 | Keine ungewollten Bedeutungen | T | Die betroffene Person erscheint nicht als Gefahr oder Defekt. Möglich sind: die Pflanze als passives Wesen, das gepflegt wird (der Garten des Bestands hat dieselbe Nebenbedeutung); die ruhende Giesskanne als «Angehörige tun nichts» statt «Angehörige bieten Bedingungen an». Das abgefallene Blatt kann nach Verlust aussehen; der neue Trieb daneben gleicht das aus | R2 |

**Freundin-Test (bauende Sitzung):** besteht ihn mit Einschränkung. Eine Pflanze, die ein Blatt verliert und oben weiterwächst, versteht man ohne Erklärung; eine Angehörige könnte damit zeigen, dass ein Rückschritt nicht alles zunichtemacht. Die Giesskanne versteht man als «ich kann giessen, wachsen muss sie selbst» erst zusammen mit dem Text.

### Etappe 2c-1: Neue Sätze zur Freigabe

Alle Sätze von `genesung`, `unterstuetzung` und der neuen Einstiege auf `index`, die nicht wörtlich im Bestand stehen (Vergleich je Satz mit dem Bestand der Seite, Skript der bauenden Sitzung), dazu der Bildtitel und die neuen Zwischentitel. **Art:** neu · Verdichtung · umformuliert · gekürzt · Verweissatz · Auftrag · Satzzeichen (nur Satzzeichen, Gross- und Kleinschreibung, «und» statt «&» oder Satzteilung). **Abgleich:** g = `genesung.md`, u = `unterstuetzung.md`, i = `index.md`.

**`genesung`**

| Nr. | Ort | Satz | Art | Abgleich |
| ---: | --- | --- | --- | --- |
| 1 | Kopf, H1 | «Genesung ist möglich und kann unterschiedlich aussehen» | Satzzeichen (Gedankenstrich als «und») | g1 |
| 2 | Kopf | «Wege, Tempo und Bedeutung von Veränderung sind individuell. Weder eine Diagnose noch eine einzelne Phase legt den weiteren Verlauf fest.» | Satzzeichen (Semikolon) | g3 |
| 3 | Kopf, Kernsatz | «Besserung ist möglich. Verlauf und Tempo unterscheiden sich von Mensch zu Mensch.» | Satzzeichen (Semikolon) | g66 |
| 4 | `forschung`, «10 Jahre» | «Veränderungen können früher eintreten.» | Satzzeichen (Semikolon; «Verläufe bleiben unterschiedlich» trägt `verlauf`) | g255 |
| 5 | `forschung` | «93 %», «50 %» | Satzzeichen (Leerschlag) | g75, g78 |
| 6 | `begriffe` | «Symptomatische Remission, Alltag und Teilhabe sowie persönliche Recovery beschreiben unterschiedliche Aspekte. Sie müssen sich nicht gleichzeitig verändern.» | Satzzeichen (zwei Sätze) | g282 |
| 7 | `begriffe`, «Alltag und Teilhabe» | «Zu einer umfassenderen Genesung gehören auch Stabilität im Alltag und mehr Lebensqualität.» | Verdichtung | g100 |
| 8 | `begriffe` | «Kein einzelner Begriff beschreibt den ganzen Genesungsweg.» | gekürzt (Rest im Satz danach) | g312 |
| 9 | `verlauf`, Abbildung 1 | «Abbildung 1 · Ein neuer Trieb» | Auftrag | g498 |
| 10 | `verlauf`, Abbildung 1, Kernaussage | «Eine schwierigere Phase bedeutet nicht, dass alles Erreichte verloren ist.» | wörtlich (Handout), hier zur Übersicht | g354 |
| 11 | `verlauf`, Abbildung 1, Kurztext | «Genesungswege unterscheiden sich. Schwierigere Phasen können vorkommen und müssen ernst genommen werden. Sie sind weder vorgeschrieben noch ein Beleg für fehlenden Willen.» | Auftrag (Semikolon als Punkt) | g348, g349 |
| 12 | `verlauf`, Abbildung 1, Szene | «Eine schwierigere Phase entwertet alles.» · «Schwierigere Phasen kommen vor und müssen nicht alles kippen.» | Auftrag (Bestand mit Schlusspunkt) | g121, g125 |
| 13 | `verlauf`, Abbildung 1 | «Grenzen des Bildes» | Bezeichnung des Profils | g499 |
| 14 | `verlauf`, Abbildung 1, Vertiefung | «Das Bild ist eine Metapher, keine Vorhersage eines Genesungsverlaufs.» | Auftrag («Der Garten» als «Das Bild») | g44 |
| 15 | `verlauf`, Abbildung 1, Kurzbeschreibung | «Zeichnung: Eine Topfpflanze steht auf einem Fenstersims. Ein Blatt ist abgefallen und liegt neben dem Topf, oben wächst ein neuer Trieb. Daneben steht eine Giesskanne. Über der Zeichnung stehen die Sätze «Eine schwierigere Phase entwertet alles.» und «Schwierigere Phasen kommen vor und müssen nicht alles kippen.»» | Auftrag | g500 |
| 16 | `verlauf`, Abbildung 1, Quelle | «Eigene didaktische Darstellung nach den Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; Bezug: Zanarini et al. (2012); NICE CG78 (2009).» | Auftrag | g64 |
| 17 | `verlauf`, Gegenüberstellung | «Jetzt muss es doch endlich besser werden.» · «Besserung ist möglich und oft wahrscheinlich.» · «Wenn genug Wille da ist, geht es schnell.» · «Tempo und Zeitpunkt bleiben begrenzt steuerbar.» | Satzzeichen (Schlusspunkt, Guillemets) | g120, g124, g122, g126 |
| 18 | `verlauf`, «Was Sie tun können» | «Bauen Sie auch in einer besseren Phase keinen Zeit- oder Erfolgsdruck auf.» | umformuliert (Aufforderung) | g113 |
| 19 | `verlauf`, «Was Sie tun können» | «Halten Sie für eigene Grenzen und professionelle Kontakte einen kleinen Plan bereit.» | umformuliert (Aufforderung) | g114 |
| 20 | `einfluesse`, Titel | «Was Genesung beeinflussen kann» | Auftrag (Gliederung) | g138 |
| 21 | `einfluesse` | «Die folgenden Bereiche sind eine Orientierung ohne Reihenfolge, keine Formel und keine persönliche Prognose.» | gekürzt (ohne «redaktionelle») | g139 |
| 22 | `einfluesse` | «Für Borderline selbst sind Medikamente keine Kernbehandlung. Änderungen nur mit der behandelnden Fachperson.» | Satzzeichen (Semikolon) | g145 |
| 23 | `einfluesse` | «Peer-Unterstützung heisst: Unterstützung durch Menschen mit eigener Erfahrung.» | neu (Erklärung eines Fachworts) | g501 |
| 24 | `einfluesse` | «Die fünf Bereiche sind eine eigene Zusammenstellung der Fachstelle aus Behandlungsleitlinien, kein geprüftes Modell.» | Verdichtung | g153, g154 |
| 25 | `einfluesse`, «Was Sie tun können» | «Praktische oder strukturelle Belastungen, zum Beispiel beim Wohnen oder bei den Finanzen, lassen sich oft nicht innerhalb der Familie lösen. Sozialberatungen können unterstützen.» | Satzzeichen (Klammer, Semikolon) | g411 |
| 26 | `freiwillig` | «Sie können auf Wunsch etwas anbieten, zum Beispiel Absprachen, Informationen oder Begleitung.» | Verdichtung | g431 |
| 27 | `freiwillig` | «Fragen Sie die Person selbst, welche Unterstützung oder welcher Abstand hilfreich wäre.» | umformuliert (Aufforderung) | g133 |
| 28 | `freiwillig` | «Die betroffene Person entscheidet mit.» | Satzzeichen (Semikolon; der Rest steht bei «Was Sie tun können») | g129 |
| 29 | `freiwillig` | «Für Behandlung und Genesung sind Sie nicht verantwortlich.» | Auftrag (Wortlaut von `rolle`) | g469 |
| 30 | `freiwillig` | «Wie Sie Ihre Rolle klären können, steht auf der Seite «Ihre Rolle» im Abschnitt «Was Sie anbieten können und was nicht Ihre Aufgabe ist».» | Verweissatz | g128 |
| 31 | `freiwillig` | «Ihre Gesundheit zählt für sich, nicht erst als Beitrag zur Genesung einer anderen Person.» | Auftrag | g483 |
| 32 | `freiwillig` | «Allgemeine Beratung ist auch ohne Zustimmung der betroffenen Person möglich. Auskünfte über ihre Behandlung gibt es grundsätzlich nur mit ihrer Zustimmung. Gesetzliche Ausnahmen gelten etwa bei Minderjährigen oder fehlender Urteilsfähigkeit.» | Auftrag (Semikolons als Punkte) | g482 |
| 33 | `freiwillig` | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | Verweissatz (Wortlaut von `krise`, freigegeben) | g502 |
| 34 | `freiwillig` | «Wo Sie Unterstützung für sich finden, steht auf der Seite «Auf sich achten» im Abschnitt «Nicht allein tragen».» | Verweissatz (Wortlaut von `grenzen`, Freigabe 2b, Satz 5) | g317, g360 |
| 35 | `freiwillig`, Vertiefung | «Eltern Minderjähriger und Beistandschaft» | neu (Titel) | g503 |
| 36 | `freiwillig`, Vertiefung | «Diese Hinweise richten sich an Angehörige erwachsener Personen.» | umformuliert («Dieses Blatt» als «Diese Hinweise») | g442 |
| 37 | `freiwillig`, Vertiefung | «Angehörige ersetzen keine Behandlung und müssen sie nicht koordinieren, ausser etwa als Eltern Minderjähriger oder als Beistand.» | Satzzeichen (Gedankenstrich, «als») | g459 |
| 38 | Kapitelübersicht und Kicker | «Genesung» (Eyebrow), «Forschung», «Begriffe», «Verläufe», «Einflüsse», «Ihre Unterstützung» | Bezeichnungen | g0, g71, g504 bis g507 |

**`unterstuetzung`**

| Nr. | Ort | Satz | Art | Abgleich |
| ---: | --- | --- | --- | --- |
| 39 | Kopf | «Wenn Belastung, Unsicherheit oder Erschöpfung zu gross werden, kann es entlasten, nicht nur in der Familie oder im eigenen Umfeld nach Lösungen zu suchen.» | umformuliert («im eigenen System») | u54 |
| 40 | Kopf | «Hier finden Sie Beratung, Selbsthilfe und weitere Anlaufstellen für Angehörige in der Schweiz, dazu Bücher.» | umformuliert («dazu Bücher») | u55 |
| 41 | `beratung`, Zwischentitel | «Fachstelle Angehörigenarbeit der PUK» | Bezeichnung (Schreibweise der Startseite) | u1, u75 |
| 42 | `beratung` | «Die Fachstelle ist eine Anlaufstelle für Angehörige, die ihre Rolle klären, Belastung einordnen und passende nächste Schritte finden möchten.» | umformuliert (Subjekt) | u13 |
| 43 | `beratung`, Angebote | «Ein Gespräch zu Ihrer Rolle, Ihrer Belastung oder einer konkreten Entscheidung.» | umformuliert (Angebot statt Frage) | u15 |
| 44 | `beratung`, Angebote | «Verständliche Informationen und Materialien zur Erkrankung und zum Umgang damit, passend zu Ihrer Situation.» | umformuliert (Angebot; erklärt «Psychoedukation») | u17 |
| 45 | `beratung`, Angebote | «Gemeinsam klären, welche weiteren Hilfen, Selbsthilfeangebote oder Anlaufstellen für Sie infrage kommen könnten.» | umformuliert (Angebot statt Frage) | u19 |
| 46 | `beratung`, Angebote | «Aktuelle Angebote, Zielgruppen, Termine und mögliche Kosten erfragen Sie direkt bei der Fachstelle.» | Satzstellung | u21 |
| 47 | `beratung`, Begriffe | «Psychoedukation und Materialien» · «Orientierung und Vermittlung» · «Schulungen und Weiterbildung» | Satzzeichen («und» statt «&») | u16, u18, u20 |
| 48 | `beratung` | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | Verweissatz (Wortlaut von `krise`) | u158 |
| 49 | `beratung` | «Was Sie vorab klären können:» | Bezeichnung (Zwischentitel des Bestands als Einleitung) | u319 |
| 50 | `beratung` | «Ist Beratung zu Ihrer Situation möglich, auch wenn keine Diagnose vorliegt?» | gekürzt | u81 |
| 51 | `beratung` | «Wie werden Termine vereinbart, und wie lange dauert ein Gespräch?» | umformuliert | u83 |
| 52 | `beratung` | «Welche Angaben werden für eine Anfrage benötigt?» | umformuliert (Frage) | u32 |
| 53 | `beratung`, Pro Mente Sana | «Die Telefonberatung zu Fragen rund um psychische Gesundheit ist kostenlos.» | umformuliert (Satz) | u96 |
| 54 | `beratung`, `austausch`, `selbsthilfe` | «Website:» vor jedem Link | Bezeichnung | u320 |
| 55 | `beratung` | «Wie Sie eigene Überlastung erkennen, steht auf der Seite «Auf sich achten» im Abschnitt «Warnsignale für Überlastung».» | Verweissatz | u159 |
| 56 | `beratung` | «Wie Sie in belasteten Situationen sprechen können, steht auf der Seite «Zugewandt und klar sprechen».» | Verweissatz | u160 |
| 57 | `austausch`, Titel | «Austausch mit anderen Angehörigen» | Auftrag (Gliederung) | u99 |
| 58 | `austausch` | «Organisationen und Netzwerke ermöglichen Austausch, Orientierung und Entlastung für Angehörige.» | umformuliert (Satz) | u100 |
| 59 | `austausch` | «Stand by You Schweiz ist der Dachverband der Vereinigungen von Angehörigen psychisch erkrankter Menschen.» | umformuliert (Satz, personenzentriert) | u102 |
| 60 | `austausch` | «Bis Januar 2024 hiess er VASK Schweiz.» | umformuliert | u103 |
| 61 | `austausch` | «Die VASK Zürich ist die kantonale Vereinigung für Angehörige von Menschen mit einer psychischen Erkrankung. Sie bietet regelmässige Beratungs-Treffpunkte in Zürich und Winterthur an.» | umformuliert (personenzentriert) | u125 |
| 62 | `austausch` | «Die Treffpunkte sind offen für alle Angehörigen und Freunde.» | umformuliert (Satz) | u130 |
| 63 | `austausch` | «Wann sie stattfinden, steht auf der Website.» | neu (ersetzt die Termine) | u321 |
| 64 | `selbsthilfe` | «Selbsthilfegruppen für Angehörige von Menschen mit Borderline finden Sie über Selbsthilfe Schweiz. Das ist die zentrale Vermittlungsstelle für Selbsthilfegruppen in der ganzen Schweiz.» | Satzzeichen (zwei Sätze) | u151 |
| 65 | `selbsthilfe` | «Es gibt Gruppen in mehreren Kantonen, vor Ort und online.» | gekürzt («sowohl … als auch») | u152 |
| 66 | `kantone`, Titel | «Ausserhalb des Kantons Zürich» | Auftrag (Gliederung) | u322 |
| 67 | `kantone` | «Die Angebote auf dieser Seite sind vor allem für den Kanton Zürich gedacht.» | umformuliert | u56 |
| 68 | `kantone` | «Für andere Kantone führt der schnellste Weg über Selbsthilfe Schweiz. Dort finden Sie kantonale Stellen. Sie können auch in der Hausarztpraxis oder in der psychiatrischen Praxis vor Ort nachfragen.» | umformuliert | u57 |
| 69 | `buecher` | «Die Bücher sind eine persönliche Auswahl, überwiegend deutschsprachig und ohne Anspruch auf Vollständigkeit.» | Verdichtung | u163, u312 |
| 70 | `buecher` | «Sie verbinden Grundwissen, Beziehungsperspektiven, Selbstfürsorge und Erfahrungsnähe.» | umformuliert | u164 |
| 71 | `buecher` | «Die Titel sind nach Zielgruppen geordnet.» | gekürzt | u168 |
| 72 | `buecher` | «Die Bezeichnung «Empfehlung» meint eine redaktionelle Auswahl, keine wissenschaftliche Bewertung.» | umformuliert («Label») | u315 |
| 73 | `buecher`, Zwischentitel | «Für Partnerinnen und Partner» | umformuliert («Partner & Ehepartner») | u170 |
| 74 | `buecher`, Kinderbücher | «Ein Bilderbuch für Kinder, deren Eltern psychisch erkrankt sind.» | umformuliert (personenzentriert) | u235 |
| 75 | `buecher`, Titelangaben | «… und …» statt «… & …» bei acht Titeln; «Schleuderprogramm der Gefühle» und «Monster» in Guillemets; Gedankenstriche als Komma oder Punkt (Windmüller, Sendera, Englischsprachig, «Zum Vertiefen») | Satzzeichen | u176, u200, u206, u215, u218, u224, u239, u254, u260, u262, u265, u268 |
| 76 | `buecher`, Vertiefung | «Sie sind keine wissenschaftlichen Evidenzquellen. Ihre Sprache, Verallgemeinerungen und Krisenhinweise müssen kritisch eingeordnet werden.» | umformuliert («Solche Titel» als «Sie», Semikolon) | u314 |
| 77 | `buecher`, Vertiefung | Einordnungen der vier Titel mit Semikolon als Punkt; «und» statt «&» | Satzzeichen | u282, u286, u290, u293, u300, u308 |
| 78 | Kapitelübersicht und Kicker | «Unterstützung» (Eyebrow), «Beratung», «Austausch», «Selbsthilfegruppen», «Andere Kantone», «Bücher» | Bezeichnungen | u52, u71, u166, u317, u318 |

**`index`**

| Nr. | Ort | Satz | Art | Abgleich |
| ---: | --- | --- | --- | --- |
| 79 | `einstiege` | «Ich frage mich, ob es je besser wird.» | Auftrag | i258 |
| 80 | `einstiege` | «Genesung: Hoffnung, unterschiedliche Verläufe und Grenzen des eigenen Einflusses verbinden.» | Auftrag (Lernweg der alten Startseite) | i25, i26 |
| 81 | `einstiege` | «Ich suche Beratung oder Austausch mit anderen Angehörigen.» | Auftrag | i259 |
| 82 | `einstiege` | «Unterstützung finden: Beratung, Austausch mit anderen Angehörigen und Bücher.» | Auftrag | i27, i28 |

Nicht in der Liste, weil wörtlich aus dem Bestand: die übrigen Sätze beider Seiten, zum Beispiel «Untersucht wurden 290 Erwachsene, die zu Studienbeginn stationär behandelt wurden.» (ohne «Hinweis:»), die vier Sätze «Ein realistischer Massstab für Veränderung» (wörtlich aus `/verstehen/beziehungen`, `beziehungen.md` Nr. 194 bis 197) und alle Buchbeschreibungen ausser Nr. 74 bis 77.

### Etappe 2c-1: Zur Prüfung durch die Fachstelle

| Nr. | Ort | neu | Bestand (Zitat) | Frage |
| ---: | --- | --- | --- | --- |
| 1 | `genesung` › `forschung` | 93 %: «erreichten während einer zehnjährigen Studie mindestens einmal eine symptomatische Remission über zwei Jahre. Die Diagnosekriterien waren in diesem Zeitraum nicht mehr erfüllt. Einzelne Beschwerden konnten weiterhin bestehen.» 50 %: «… eine mindestens zweijährige Recovery: Remission zusammen mit guter sozialer und beruflicher Funktionsfähigkeit nach der Studiendefinition.» Danach: «Untersucht wurden 290 Erwachsene, die zu Studienbeginn stationär behandelt wurden.» und die Liste «Was die Zahlen nicht sagen» mit «Die Zahlen beschreiben diese Studiengruppe und keine persönliche Prognose.» | `/genesung`: «93% erreichten während einer zehnjährigen Studie mindestens einmal eine symptomatische Remission über zwei Jahre.» · «50% erreichten im selben Beobachtungszeitraum eine mindestens zweijährige Recovery: …» · «Hinweis: Untersucht wurden 290 Erwachsene, …» · «Sie sind keine individuelle Prognose.»; Handout: «Die Diagnosekriterien waren in diesem Zeitraum nicht mehr erfüllt. Einzelne Beschwerden konnten weiterhin bestehen.» | Trägt die Zusammenführung aus Seite und Handout die Studiendefinition richtig? Reicht «keine persönliche Prognose» in der Liste statt des eigenen Satzes «Sie sind keine individuelle Prognose.»? |
| 2 | `genesung` › `einfluesse` | «Für Borderline selbst sind Medikamente keine Kernbehandlung. Änderungen nur mit der behandelnden Fachperson.» | «Für Borderline selbst sind Medikamente keine Kernbehandlung; Änderungen nur mit der behandelnden Fachperson.» | Wortlaut gehalten, nur Semikolon als Punkt. Der zweite Satz hat kein Verb; so verlangt es der Auftrag. Bleibt er so? |
| 3 | `genesung` › `freiwillig` | «Allgemeine Beratung ist auch ohne Zustimmung der betroffenen Person möglich. Auskünfte über ihre Behandlung gibt es grundsätzlich nur mit ihrer Zustimmung. Gesetzliche Ausnahmen gelten etwa bei Minderjährigen oder fehlender Urteilsfähigkeit.» | «Allgemeine Beratung ist auch ohne Zustimmung der betroffenen Person möglich; Auskünfte über ihre Behandlung gibt es grundsätzlich nur mit ihrer Zustimmung; gesetzliche Ausnahmen gelten etwa bei Minderjährigen oder fehlender Urteilsfähigkeit.» | Wortlaut gehalten, sichtbar im Lesefluss. Bestätigen |
| 4 | `genesung` › `einfluesse` | «Die fünf Bereiche sind eine eigene Zusammenstellung der Fachstelle aus Behandlungsleitlinien, kein geprüftes Modell.» | «Die fünf Bereiche sind eine eigene redaktionelle Synthese der Fachstelle, kein validiertes Fünf-Faktoren-Modell und keine individuelle Prognose. Sie ordnen Aussagen aus Behandlungsleitlinien und einem leitliniengestützten Recovery-Rahmen für diese Website.» | «Recovery-Rahmen» entfällt, «validiert» heisst «geprüft» (wie auf `rolle`). Trägt das die Einschränkung? |
| 5 | `genesung` › `einfluesse` | «Peer-Unterstützung heisst: Unterstützung durch Menschen mit eigener Erfahrung.» | – (Fachwort im Bestand ohne Erklärung) | Erklärung fachlich richtig und gewünscht? |
| 6 | `genesung` › `forschung`, Quellenblock | Gunderson et al. (2011) mit «Verwendet in: «Was die Forschung zeigt» (Ten-year course of BPD, CLPS)»; Zanarini et al. (2024) bei «Remission, Alltag und persönliche Recovery» | Gunderson: «Quellen zu Prognose- und Remissionsaussagen (3)»; Zanarini 2024: Quellenzeile des Handouts «Zanarini et al. (2012, 2024)» | Beide Quellen aus dem Bestand übernommen; kein Satz der Seite stützt sich allein auf sie. Behalten? |
| 7 | `unterstuetzung` › `beratung`, `austausch`, `selbsthilfe` | Stand by You Schweiz (Dachverband, früher VASK Schweiz, kostenlose HelpLine), VASK Zürich (Treffpunkte Zürich und Winterthur, offen für alle Angehörigen und Freunde), Pro Mente Sana (psychosoziale und juristische Beratung, kostenlose Telefonberatung), Selbsthilfe Schweiz; je Link auf die Website | `/beratung`: «Frühere Prüfangabe: 30.04.2026», HelpLine-Zeiten, Treffpunkt-Termine («Jeden letzten Dienstag des Monats, 19:00 – 21:00 Uhr», «Jeden ersten Montag des Monats, …»), Adresse und E-Mail der VASK Zürich, «0848 800 858 (Normaltarif)» | Stand und Angaben prüfen. Die Links liessen sich hier nicht aufrufen (Netzwerk gesperrt). Ist «kostenlos» bei Pro Mente Sana richtig, obwohl der Bestand die Nummer mit «Normaltarif» nennt? |
| 8 | `unterstuetzung` › `buecher` | alle Titel ohne Bezugslink | «Bei Ex Libris (CH)» bei jedem empfohlenen Titel | Bücher ohne Bezugslinks bestätigen (Auftrag). Drei Titel haben im Bestand kein Jahr: Glistrup (Kösel), Homeier (Mabuse-Verlag), Gliemann und Faichney (Monterosa); nicht ergänzt |
| 9 | `unterstuetzung` › `beratung` | Link auf `www.pukzh.ch` entfällt | «Web www.pukzh.ch Website der PUK Zürich.» | Kontakt läuft über E-Mail (Startseite, Absenderin). Soll der Link auf die PUK bleiben? |
| 10 | `unterstuetzung` › `beratung` | drei Fragen «Was Sie vorab klären können»; Kosten, Krankenkasse, Vertraulichkeit und Vollmacht verlinkt auf die Startseite | «Entstehen Kosten, und werden Informationen an eine Krankenkasse weitergegeben?» · «Wie wird mit vertraulichen Informationen umgegangen, und wird eine Vollmacht benötigt?» | Beantwortet «Die Beratung ist kostenlos und untersteht der Schweigepflicht.» auch die Frage nach der Krankenkasse? |
| 11 | `unterstuetzung` › `beratung` | Angebote der Fachstelle als Beschreibung: «Ein Gespräch zu …», «Verständliche Informationen und Materialien zur Erkrankung und zum Umgang damit, …», «Gemeinsam klären, …» | «Fragen Sie, ob ein Gespräch … möglich ist.» · «Erfragen Sie, welche Informationen und Materialien … angeboten werden …» | Der Bestand formuliert vorsichtig als Fragen an die Fachstelle. Stimmen die Angebote so? |
| 12 | `unterstuetzung` › `austausch` | «Die VASK Zürich ist die kantonale Vereinigung für Angehörige von Menschen mit einer psychischen Erkrankung.» | «Kantonale Vereinigung der Angehörigen von psychisch Kranken – …» | personenzentriert umformuliert (Gate `person-first`); der Vereinsname lautet anders. Passt das? |

### Etappe 2c-1: Verweise von freigegebenen Seiten (Vorschlag)

Diese Seiten sind nicht geändert. Der Linktext ist jeweils der Titel der Zielstelle.

| Nr. | Seite › Ort | nach dem Satz | Vorschlag |
| ---: | --- | --- | --- |
| 1 | `verstehen` › `mythen`, Annahme «Borderline ist nicht behandelbar.» | «Viele erleben über Jahre deutliche Besserung, Remission (die Kriterien sind eine Zeit lang nicht mehr erfüllt) oder umfassendere Genesung.» | «Was Langzeitstudien zeigen, steht auf der Seite «Genesung» im Abschnitt «Was die Forschung zeigt».» (Bestand: «Mehr dazu auf Genesung.», `verstehen.md` Nr. 112) |
| 2 | `rolle` › `anbieten`, nach der Abbildung | «Sie müssen diese Beiträge nicht alle leisten. Ihre eigenen Bedürfnisse, Grenzen und Möglichkeiten zählen ebenfalls.» | «Was Genesung beeinflussen kann, steht auf der Seite «Genesung» im Abschnitt «Was Genesung beeinflussen kann».» |
| 3 | `beziehungen` › `was-hilft`, am Ende | – | «Woran sich Veränderung zeigen kann, steht auf der Seite «Genesung» im Abschnitt «Veränderung verläuft unterschiedlich».» (die vier Sätze «Ein realistischer Massstab» kommen von hier) |
| 4 | `selbstfuersorge` › `beratung`, Begriff «Austausch mit anderen Angehörigen» | «Selbsthilfegruppen und Beratungsstellen bieten Orientierung, praktische Tipps und das Gefühl, nicht allein zu sein.» | «Angebote für Beratung und Austausch stehen auf der Seite «Unterstützung finden».» (`selbstfuersorge.md` Nr. 232) |
| 5 | `index` › `beratung`, am Ende | «… Kontakt: angehoerigenarbeit@pukzh.ch» | «Weitere Beratung und Austausch mit anderen Angehörigen stehen auf der Seite «Unterstützung finden».» |
| 6 | `rolle` › `kinder` | «Eine Fachstelle, die Kinderarztpraxis oder eine Familienberatung können beim Planen unterstützen.» | «Bücher für Kinder stehen auf der Seite «Unterstützung finden» im Abschnitt «Bücher für Angehörige».» |
| 7 | `krise` › `danach`, nach dem Verweissatz auf die Beratung | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | «Weitere Angebote für Angehörige stehen auf der Seite «Unterstützung finden».» |

### Etappe 2c-1: Entscheide der bauenden Sitzung (zur Prüfung)

1. **Titel von `genesung` › 05:** «Freiwillige Unterstützung und eigene Grenzen» (Handout-Titel) statt des vorgeschlagenen «Was Sie anbieten können und was nicht Ihre Aufgabe ist», der auf `rolle` schon so heisst; sonst nennt der Verweissatz zweimal denselben Titel.
2. **H1 von `genesung`:** die H1 der alten Seite, «Genesung ist möglich und kann unterschiedlich aussehen» (Gedankenstrich als «und»); der Seitentitel bleibt «Genesung». Die drei Kernsätze stehen als Liste unter der Einleitung (`bl-kernsaetze`).
3. **Datenbotschaft:** die drei Werte als Begriffsliste mit grossem Wert (`bl-zahlen`, Schrift `--web-size-h3-fluid`), die Stichprobe als eigener Satz direkt danach, «Was die Zahlen nicht sagen» als Zwischentitel mit Liste. Die Herkunft der Werte steht im Quellenblock bei Zanarini et al. (2010): «die Werte 93 % und 50 % sowie der Zeitraum von zehn Jahren».
4. **Abbildung 1:** Pfade unverändert, Bildausschnitt enger (`viewBox` «60 44 530 214»), damit die Zeichnung schmal grösser ist.
5. **«Ein realistischer Massstab für Veränderung»** als Zwischentitel (Wortlaut des Bestands) statt eines neuen Titels «Woran sich Veränderung zeigen kann».
6. **«Was Sie tun können» in `verlauf`:** aus Seite und zwei Handouts zu vier Punkten zusammengeführt; «Achten Sie auch auf Ihre eigenen Grenzen und holen Sie bei Bedarf Unterstützung.» trägt der Verweissatz auf «Nicht allein tragen» in `freiwillig`.
7. **`unterstuetzung` ohne Quellenblock:** Die drei Bestandsseiten nennen keine Quellen; der Plan hat deshalb fünf Zeilen.
8. **Fachstelle auf `unterstuetzung`:** Angebote als Begriffsliste in beschreibender Form; Kontakt, Ort, Kosten, Schweigepflicht und Vollmacht nur über den Verweissatz auf die Startseite; «Was Sie vorab klären können» mit den drei Fragen, die die Startseite nicht beantwortet (Diagnose, Termin und Dauer, Angaben für eine Anfrage).
9. **«Nächste Schritte»:** «Nicht jede Unterstützung passt in jeder Lage.» und zwei Verweissätze am Ende von `beratung`; der dritte Weg (Beratungsgespräch anfragen) ist der Verweissatz auf die Startseite weiter oben.
10. **VASK Zürich:** Termine der Treffpunkte entfallen («Wann sie stattfinden, steht auf der Website.»), weil sie nur eine frühere Prüfangabe tragen und Angebote nur mit Link stehen. Adresse, E-Mail und Beratungstelefon entfallen ebenso.
11. **Stand by You:** «Stand by You macht Angehörige und Vertraute … sicht-, hör- und spürbar.» entfällt (Selbstdarstellung, keine Angabe zum Angebot).
12. **Personenzentriert:** drei Stellen umformuliert, weil das Gate `person-first` «psychisch Kranken» meldete (VASK Zürich, Homeier, Stand by You).
13. **`sensitiveTopics`:** `unterstuetzung` «akute-krise» (Stichwörter «Krisendienst», «seelische Krisen», «Krisenhinweise»; sonst blockiert `safety-contract`); `genesung` keine.
14. **Druckregel** für alle Seiten in `borderline.css`: Abschnittsraster im Druck als Blockfluss, `break-after: avoid` für alle Titel und Begriffe in `main`, «Zwei Sichten» je Schritt zusammen. Sie ändert nur den Druck.
15. **`puk-site-anchor-end`:** Klasse auf allen sieben Seiten entfernt; die Regel dafür steht weiter in `starter.css` (Kopie des Starters, nicht geändert).
16. **«Empfehlung»** bleibt als kleine Bezeichnung über drei Titeln, wie im Bestand.

### Etappe 2c-1: Aufgefallen, nicht geändert

1. **Zwei Bilder aus dem Garten-Handout:** «Ein Stück Weg» (`rolle`) und «Ein neuer Trieb» (`genesung`) tragen beide «begleiten, nicht herstellen». Die Fachstelle hat beide gewählt; für R2 notiert (Visualisierungs-Check Nr. 6).
2. **`starter.css`** definiert `.puk-site-anchor-end` weiter; keine Seite nutzt die Klasse mehr.
3. **Verneinung auf `genesung`:** 28 % der Sätze (Bestand 17 %), vor allem Absicherungen des Bestands.
4. **Seitentitel und H1 von `index`** bleiben; die Einstiege sind jetzt acht. Die Liste ist bei 360 px 1826 px hoch (vorher sechs Einstiege und der Platzhalter).
5. **`index` › `beratung`** nennt «oder telefonisch», ohne Nummer; das ist der freigegebene Wortlaut.

**Stand 11.10.2026 · Freigabe Etappe 2b eintragen · bauende Sitzung (Claude Code).** Umgesetzt ist `FREIGABE-ETAPPE-2B.md` (Entscheide der Fachstelle vom 11.10.2026: Etappe 2b als Ganzes freigegeben, letzte Anpassungen, Verweissätze auf den freigegebenen Seiten). Grundlage ist `borderline-umbau` am Stand `31215a8`. Geändert sind nur:

- `content/` und die gebauten Seiten von `kommunizieren` (Abschnitt 3 a, 3 b und 3 d) und von `verstehen`, `beziehungen`, `grenzen` und `selbstfuersorge` (Abschnitt 4); auf allen sieben Seiten mit Quellenblock die Klasse `puk-site-anchor-end` (Abschnitt 3 c), auf `rolle` und `krise` nur diese
- `borderline.css`: Die zwei Regeln für `.bl-stufen__detail` entfallen, weil es die Klasse nicht mehr gibt (Abschnitt 3 a)
- `site.config.json`: `v-ko-tassen` › `approvalStatus` und `reason`
- der Abgleich: sechs Tabellen und `abgleich/README.md`
- in diesem Bericht: der Eintrag der Fachstelle (6 a), die Statustabelle (6 b), dieser Block (6 c), die Liste «Neue Sätze zur Freigabe» im Block 2b-K (N2bK-1) und zwei Zahlen der «Gründe» im Block 2b-K (N2bK-2)

`index` ist unverändert (`git diff 31215a8` leer). Keine Prüfstufe ist «erledigt»; der Status bleibt in allen Zeilen «offen». Der Block 2b-2 steht darunter.

**Auftrag im Website-Ordner:** `FREIGABE-ETAPPE-2B.md` lag im Stamm von `main` (`744d849`). Die Datei liegt unverändert in diesem Ordner (`9183272`; `cmp` und SHA-256 gleich). Sie ist aus dem Stamm von `main` entfernt (`19b3623`, über Pull Request #22, gemergt mit `ed717f4`; ein direkter Push auf `main` war in dieser Sitzung nicht erlaubt).

### Freigabe 2b: Stand je Punkt (Abschnitte 3 bis 6)

| Punkt | Stand | Beleg |
| --- | --- | --- |
| 3 a Sechs Einträge | umgesetzt | Nach der Liste der sechs Stufen steht der Zwischentitel «Die sechs Stufen im Detail» (h4, `puk-site-subheading`), darunter ein Akkordeon mit sechs Einträgen «Stufe 1 · Aufmerksam sein» bis «Stufe 6 · Radikale Echtheit: auf Augenhöhe bleiben» (h5, `data-multiple`). Inhalt je Eintrag: der bisherige Teil der Stufe, Zeichen für Zeichen gleich (Skript: Titel 6 von 6 und Inhalte 6 von 6 gleich wie die Teile am Stand `31215a8`). Überschriftenliste: h3 «Sechs Stufen der Validierung» › h4 die sechs Stufen › h4 «Die sechs Stufen im Detail» › h5 die sechs Einträge, dann h3 «Mitgefühl heisst nicht übernehmen». Tabstopps der Einträge: 18 bis 23 |
| 3 b Zwischentitel | umgesetzt | h3 «Mitgefühl heisst nicht übernehmen» mit derselben Klasse und Ebene wie «Sechs Stufen der Validierung» (beide 28 px). Der Absatz beginnt mit «Sie können Beobachtungen vorsichtig spiegeln, offen nachfragen und zugleich bei den eigenen Gefühlen und Grenzen bleiben.»; der Rest ist gleich. Darunter unverändert die Gegenüberstellung «Übernehmen / Spiegeln», «Spiegeln kann Verständnis erleichtern, …» und «Ein hilfreicher innerer Satz: …». Damit ist «Aufgefallen» 2b-2, Nr. 5 erledigt |
| 3 c Leerraum | umgesetzt | `puk-site-anchor-end` steht auf allen sieben Seiten am Quellenblock (`section#quellen`), nicht mehr am letzten Inhaltsabschnitt. Abstand vom letzten Inhalt bis «Quellen zu dieser Seite» bei 1280 × 900 px: `kommunizieren` 322 → 170 px, `verstehen` 271 → 170 px, die übrigen fünf Seiten 170 px wie vorher. 170 px ist der Abstand zwischen allen Abschnitten (gemessen 169 bis 170 px auf beiden Seiten). Sprung über die Kapitelübersicht zum letzten Abschnitt: auf allen sieben Seiten steht der Abschnitt danach 24 px unter dem Fensterrand, bei 1280 × 900 und 360 × 800 px, wie vorher. Folge: «Aufgefallen», Nr. 1 |
| 3 d «Nächster Schritt» | umgesetzt | «Nennen Sie einen Schritt, den Sie selbst in der Hand haben.» Entfallen ist der Beispielsatz «Ich beende das Gespräch jetzt und entscheide später, ob ich wieder ansprechbar bin.» (13 Wörter). Abgleich: k726 «zusammengeführt (2b-F)»; die Aussage tragen in `kippen` «Ein Satz darf reichen» («… Ob und wann ein neuer Kontakt für Sie möglich und sicher ist, können Sie später in Ruhe entscheiden.») und in `moment` «Legen Sie sich einen Satz für eine Pause zurecht, …». Ebenso nachgeführt: g590, g591 und c274, deren Fassung den Satz mit Doppelpunkt nannte |
| 3 e N2bK-1 | umgesetzt | Liste im Block 2b-K: Regel von 2b im Kopf («Einzelne Bestandssätze in einfacher Sprache («umformuliert (2b)») stehen nur im Abgleich.»); nachgetragen Nr. 8a (Bildtitel), 20a und 29b (die zwei Verdichtungen); geändert Nr. 14c (Form aus 3 a), 14d (3 b) und 29a (3 d); neu Nr. 71 bis 77 (die sieben Verweissätze). Skript: 134 Stellen in «…» der Spalte «Satz» in 102 Zeilen, alle wörtlich auf den gebauten Seiten (am Stand `31215a8` ergibt dieselbe Zählung 119 in 90 Zeilen, wie dort angegeben) |
| 3 e N2bK-2 | umgesetzt | «Gründe» im Block 2b-K, `sagen`: Schrittfolge mit Einleitung −47 (bisher −46), Handlungsanleitung +18 (bisher +17); die Summe −24 bleibt |
| 3 e N2bK-3 | umgesetzt | c253: «Zwischentitel; die Schritte sind seit 2b-K verlinkt (`kommunizieren#kippen`, P2b-F-8); bis 2b-K: die drei Schritte als nummerierte Liste (nachgeführt 2b-F, N2bK-3)». c260 und c261: Hinweis auf den gleichen Wortlaut im Standardsatz (c265, c266), bei c261 auch in den Ausstiegssätzen (c277). Status unverändert (Entscheide unten, Nr. 3) |
| 4 Verweissätze | umgesetzt | Sieben Sätze im Wortlaut des Auftrags (Tabelle unten). Linktext gleich dem Titel der Zielstelle (Skript, 7 von 7). Keiner steht direkt vor einem Verweis im Text, keiner in einer Abbildung, Vertiefung oder in `details` (Skript im Browser). Satz 1 ist wortgleich mit dem Satz auf `kommunizieren` › `worte`, Satz 6 mit dem Satz auf `krise` › `bleibt` |
| 4 Ort | wie Auftrag, ausser Satz 1 | Satz 2 bis 7 stehen am Ort des Auftrags. Satz 1: Der genaue Ort passt nicht, Begründung in der Tabelle unten und unter «Entscheide», Nr. 5 |
| 4 Abgleich | umgesetzt | sieben Zeilen «neu (Verweis, 2b-F)»: `verstehen.md` Nr. 547 bis 549, `beziehungen.md` Nr. 249, `grenzen.md` Nr. 712 und 713, `selbstfuersorge.md` Nr. 672; je mit Satz, Ort, Linkziel und Bemerkung. Neue Statuswerte in `abgleich/README.md` erklärt |
| 5 `approvalStatus` | umgesetzt | `v-ko-tassen` «freigegeben»; im Plan jetzt 9 × «freigegeben». Build und Produktionsgate ohne `visual-approval` |
| 5 Plan-Zeilen | umgesetzt | `v-ko-tassen` › `reason` endet jetzt: «… alle sechs sichtbar mit Leitsatz, Ziel und einem Beispiel (Korrektur 2b-2, Abschnitt 3). Die Einzelheiten stehen unter dem Zwischentitel «Die sechs Stufen im Detail» in einer Vertiefung mit sechs Einträgen, einer je Stufe, damit man nur die gesuchte Stufe öffnet (Freigabe 2b, Abschnitt 3 a). «Mitgefühl heisst nicht übernehmen» ist ein eigener Zwischentitel (Freigabe 2b, Abschnitt 3 b).» Keine andere Zeile nennt die geänderten Stellen: `v-ko-kippen` beschreibt die Grenze in drei Teilen als Begriffsliste, das gilt weiter; die Zeilen `v-…-quellen` nennen Format und Ort des Blocks, die Mindesthöhe ist Technik |
| 6 a Eintrag der Fachstelle | übertragen | «### Etappe 2b» unverändert aus `FREIGABE-ETAPPE-2B.md`, Abschnitt 6 a (Skript: Text des Auftrags Zeichen für Zeichen im Bericht), am Ende von «## Fachliche Freigabe der Fachstelle», direkt vor «## Selbstprüfung der bauenden Sitzung» |
| 6 b Statustabelle | umgesetzt | W1: «Geprüft durch» endet mit «; Fachstelle (Freigabe Etappe 2b)», «Ergebnis» mit «Etappe 2b (`kommunizieren`, `krise`, Einstieg auf `index`) fachlich freigegeben am 11.10.2026.». Visualisierungs-Check: «Ergebnis» endet mit «Etappe 2b: «Zwei Tassen» fachlich freigegeben (Fachstelle, 11.10.2026).»; davor steht nach «Freigabe ausstehend» jetzt ein Punkt. Status in allen Zeilen «offen» |
| 6 c Selbstprüfung | umgesetzt | dieser Block, über dem Block 2b-2 |
| 7 Danach | erfüllt | Prüfungen unten |

### Freigabe 2b: Prüfungen nach Abschnitt 7

- **`node tools/build.mjs`:** 0 blockierend, 10 Hinweise (8 × `placeholder-approval`, `site-url`, `review-report`); vorher 11, `visual-approval` entfällt.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 9 blockierend (8 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`site-url`), wie erwartet.
- **`node abgleich/pruefe-abgleich.mjs`:** 4509 Zeilen, 0 ohne Fundstelle. Vor dem Nachführen: 4502 Zeilen, 5 ohne Fundstelle (g590, g591, g663, k726, c274).
- **Überlauf** (Chromium): `kommunizieren`, `verstehen`, `beziehungen`, `grenzen` und `selbstfuersorge` bei 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px, Vertiefungen zu und offen, Standard und «kontrast» (180 Messungen): kein waagrechter Überlauf, kein Element ausserhalb des Fensters. Zoom 200 % (640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %), Vertiefungen zu und offen (20 Messungen): ohne Überlauf. Ohne Skript bei 320, 360 und 640 px: ohne Überlauf, alle Panels offen (`kommunizieren` 12 von 12, `verstehen` 1, `beziehungen` 1, `grenzen` 1, `selbstfuersorge` 8).
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps bis zur Fusszeile: `kommunizieren` 30 → 35 (sechs Einträge statt einem), `verstehen` 21 → 24, `beziehungen` 19 → 20, `grenzen` 24 → 26, `selbstfuersorge` 29 → 30 (je ein Stopp je neuem Link). Jeder mit sichtbarem Fokus und im Fenster.
  - Alle sieben neuen Links werden erreicht, mit sichtbarem Fokus.
  - Die sechs Einträge der Stufen: Enter öffnet 6 von 6, Leertaste schliesst 6 von 6, Pfeil nach unten führt von «Stufe 1 · Aufmerksam sein» zu «Stufe 2 · Spiegeln»; zwei Einträge lassen sich zugleich öffnen.
- **Druck** (`print`, dazu PDF A4 von `kommunizieren` und `verstehen`, angesehen): alle Panels sichtbar (`kommunizieren` 12 von 12, `verstehen` 1, `beziehungen` 1, `grenzen` 1, `selbstfuersorge` 8). Die sechs Einträge stehen mit Titel und den vier Bezeichnungen; bei «Nächster Schritt» steht der Satz ohne Beispiel. «Aufgefallen», Nr. 2.
- **Links:** 7 von 7 zeigen auf einen vorhandenen Abschnitt der Zielseite (`krise#suizid`, `kommunizieren#moment`, `rolle#schuld`, `kommunizieren#anerkennen`, `selbstfuersorge#beratung`, `rolle#kinder`, `krise#belastung`); der Linktext ist der Titel (h2) der Zielstelle (Skript). Build ohne `link-target`.
- **`node abgleich/bedienung.mjs`:** Tabstopps wie oben, `rolle` 31 und `krise` 26 unverändert, `index` 15. Höhe bei 360 px: `verstehen` 16 430 → 17 405 px, `beziehungen` 15 516 → 16 256, `grenzen` 16 837 → 17 665, `rolle` 25 771 → 26 343, `selbstfuersorge` 21 494 → 22 204, `kommunizieren` 24 887 → 25 818, `krise` 16 306 → 16 878; `index` 4636 unverändert. Auf jeder der sieben Seiten kommen 572 px von der Mindesthöhe des Quellenblocks (`rolle` und `krise` ohne neuen Text: genau +572 px), der Rest von den neuen Sätzen und auf `kommunizieren` von den sechs Einträgen. Höchste Figur je Seite unverändert.
- **Freigegebene Seiten** (`git diff --word-diff 31215a8`, Quelltext und gebaute Seite): `index` ohne Unterschied. `verstehen`, `beziehungen`, `grenzen` und `selbstfuersorge`: nur die sieben Verweissätze und die Klasse aus 3 c. `rolle`: nur die Klasse. Auf `krise` ebenfalls nur die Klasse.
- **«Zwei Tassen»:** Figur Zeichen für Zeichen gleich wie am Stand `31215a8` (Skript).
- **Technik:** in den sieben geänderten Quelltexten 0 `style`-Attribute, 0 Hexwerte, 0 `tel:`; keine neue Farbe und keine neue Klasse ausser den Profil-Klassen des Akkordeons, Kontraste deshalb nicht neu gemessen.
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Freigabe 2b: Fotos

**Bildschirmfotos** (Chromium), alle angesehen, nicht committet:

- **3 a, «Die sechs Stufen im Detail»** zu und offen (Stufe 1 und 3 offen) bei 1280 × 900 und 360 × 800 px, Standard und «kontrast» (8 Fotos). Breit steht der Zwischentitel in der Grösse der Stufennamen (24 px) unter der Liste der Stufen, darunter sechs Zeilen «Stufe n · Name» (21 px) mit Pfeil, getrennt durch Linien. Ein offener Eintrag zeigt die vier Bezeichnungen fett und darunter den Text; der nächste Eintrag folgt nach einer Linie. Schmal brechen lange Titel auf zwei Zeilen um («Stufe 3 · Zwischen den Zeilen verstehen»), ohne Überlauf. «kontrast»: Linien und Text dunkler, nichts verschwindet.
- **3 b, «Mitgefühl heisst nicht übernehmen»** bei 1280 × 900 und 360 × 800 px, Standard und «kontrast» (4 Fotos). Der Zwischentitel folgt nach dem letzten Eintrag in der Grösse von «Sechs Stufen der Validierung»; der Absatz beginnt mit «Sie können …»; Gegenüberstellung und innerer Satz wie vorher.
- **3 c, Übergang zum Quellenblock** bei 1280 × 900 px auf `kommunizieren` und `verstehen`, vorher und nachher (4 Fotos), dazu der Sprung über die Kapitelübersicht vorher und nachher (4 Fotos). Vorher lag zwischen dem letzten Absatz von «Je nach Rolle» bzw. «Was Verstehen leistet – und was nicht» und dem Quellenblock eine leere Fläche von etwa einem Drittel des Fensters. Nachher folgen Trennlinie und «Quellen zu dieser Seite» im gleichen Abstand wie zwischen allen Abschnitten. Unter dem geschlossenen Block bleibt die Fläche bis zur Fusszeile leer («Aufgefallen», Nr. 1). Nach dem Sprung steht «07 · Je nach Rolle» bzw. «07 · Einordnung» oben im Fenster, darunter der ganze Abschnitt und der Anfang des Quellenblocks.
- **Druck:** PDF-Seite mit dem Ende der Stufenliste und dem Zwischentitel, PDF-Seite mit den Einträgen Stufe 1 und 2.

### Freigabe 2b: Verweissätze (Ort und Satz davor)

| Nr. | Seite › Abschnitt | Satz direkt davor | Verweissatz | Ort |
| --- | --- | --- | --- | --- |
| 1 | `verstehen` › `mythen`, Teil «Wenn Sie sich wegen Suizid sorgen» | «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» Davor: «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Das kann helfen, die Lage zu verstehen.» und der Verweis im Text | «Wie Sie Suizidgedanken direkt ansprechen können, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Suizidgedanken ein Thema sind».» | Ende des Teils, im selben Absatz wie «Bleiben Sie …». Der genaue Ort passt nicht: «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» steht auf `verstehen` nicht im Teil, sondern als Antwort in der Liste der Annahmen. Der nächste Absatz nach der Liste ist die Handlungsanleitung; dort stünde der Satz zwischen Handlungsanleitung und Verweis im Text. Also ans Ende des nächsten möglichen Absatzes, wie auf `kommunizieren` › `worte` |
| 2 | `verstehen` › `anspannung` | «… Das erklärt manches. Die Verantwortung für das eigene Verhalten bleibt trotzdem. Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» | «Wie Sie eine Pause ankündigen können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Der richtige Moment».» | eigener Absatz am Ende des Abschnittstexts, vor Abbildung 2, nicht in der Abbildung |
| 3 | `verstehen` › `mythen`, Annahme «Angehörige sind schuld.» | «Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.» | «Wie Sie mit Schuldgefühlen umgehen können, steht auf der Seite «Ihre Rolle» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | am Ende der Antwort, im selben Eintrag der Liste (`dd`); kein neuer Eintrag |
| 4 | `beziehungen` › `was-hilft` | letzter Eintrag der Begriffsliste, «Unterstützung verteilen», endet mit «… «Ich begleite dich dabei – und ich kann das nicht allein tragen.»» | «Wie Sie Gefühle anerkennen können, ohne zuzustimmen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Anerkennen, ohne zuzustimmen».» | eigener Absatz nach der Begriffsliste, am Ende des Abschnitts |
| 5 | `grenzen` › `bruecke` | «Sie müssen die Beziehung nicht allein tragen. Absprachen, Pausen, Fachpersonen und andere Vertrauenspersonen können mittragen.» | «Wo Sie Unterstützung für sich finden, steht auf der Seite «Auf sich achten» im Abschnitt «Nicht allein tragen».» | im selben Absatz, direkt nach dem Satz des Auftrags |
| 6 | `grenzen` › `gewalt`, Teil «Wenn Kinder mitbetroffen sind» | «… Das Kind darf Fragen stellen, Gefühle zeigen und seinen Alltag behalten. Bei akuter Gefahr holen Erwachsene sofort Hilfe.» | «Wie Sie Kindern die Erkrankung erklären und die Betreuung planen, steht auf der Seite «Ihre Rolle» im Abschnitt «Wenn Kinder mitbetroffen sind».» | eigener Absatz am Ende des Teils und des Abschnitts, wie auf `krise` › `bleibt`. Auf den letzten Satz davor folgt kein Verweis im Text |
| 7 | `selbstfuersorge` › `zu-viel` | der Verweis im Text (Wortlaut `responsibility.inline`) nach «… Bei Bedrohung, Gewalt, akuter Gefahr oder Selbstgefährdung holen Sie Hilfe, statt weiterzuüben.» | «Was in einer Krise hilft, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Belastung zunimmt».» | eigener Absatz direkt nach dem Verweis im Text, vor «Ruhig atmen» |

### Freigabe 2b: Wörter im Lesefluss (Zählweise C1)

Gezählt mit einem Skript der bauenden Sitzung nach der Zählweise C1 der Selbstprüfung 2b-2. Am Stand `31215a8` ergibt es für `index`, `rolle`, `selbstfuersorge` und `krise` genau die Werte von 2b-2, für `verstehen`, `beziehungen`, `grenzen` und `kommunizieren` 6 bis 15 Wörter weniger. Die Tabelle nennt deshalb den Wert von 2b-2 und die Differenz, die nur aus den geänderten Blöcken kommt.

| Seite | C1 im Lesefluss nach 2b-2 | Differenz | nachher | Grund |
| --- | ---: | ---: | ---: | --- |
| `verstehen` | 1444 | +58 | 1502 | Satz 1 (19), Satz 2 (19), Satz 3 (20) |
| `beziehungen` | 1432 | +20 | 1452 | Satz 4 |
| `grenzen` | 1468 | +40 | 1508 | Satz 5 (18), Satz 6 (22) |
| `selbstfuersorge` | 2114 | +16 | 2130 | Satz 7 |
| `kommunizieren` | 2469 | −17 | 2452 | Beispielsatz bei «Nächster Schritt» (−13); «Mitgefühl heisst nicht übernehmen.» ist jetzt Zwischentitel und zählt in C1 nicht mehr (−4). 3 a ändert nichts, die Einträge sind Panels wie vorher die Teile |
| `rolle`, `krise`, `index` | 2627, 1523, 221 | 0 | gleich | – |

`kommunizieren` bleibt unter dem Ziel «höchstens etwa 2500» (Bauauftrag 2b). `kennzahlen.mjs` (gesamt, mit Überschriften und Quellenblock): `verstehen` 1749 → 1807, `beziehungen` 1674 → 1694, `grenzen` 1749 → 1789, `selbstfuersorge` 2748 → 2764, `kommunizieren` 3429 → 3416 (`kippen` 559 → 546); die übrigen Seiten gleich.

### Freigabe 2b: Visualisierungs-Check «Zwei Tassen»

Selbstprüfung, keine Prüfstufe. Die Figur ist unverändert (Skript); geändert gegenüber 2b-K sind die Punkte 2, 9 und 14. Die Figuren der übrigen Seiten sind unverändert, kein Verweissatz steht in einer Abbildung. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | `v-ko-tassen` | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | Build ohne Hinweis `visual-plan`; Figur und `statement` wie 2b-K | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | `reason` nennt jetzt den Zwischentitel «Die sechs Stufen im Detail», die sechs Einträge und den Zwischentitel «Mitgefühl heisst nicht übernehmen» | – |
| 3 | Prüffrage beantwortet und eingelöst | E | wie 2b-K | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | wie 2b-K | – |
| 5 | Ansatzpunkt (B, C, G) | – | Illustration (Muster D) | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | wie 2b-K | – |
| 7 | Kartenraster-Check | E | wie 2b-K; die sechs Einträge sind eine Liste von Akkordeon-Zeilen, kein Kartenraster | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | wie 2b-K | – |
| 9 | Verteilt, keine Textwand | T | `kommunizieren` 2452 Wörter im Lesefluss (C1), 25 818 px bei 360 px (davon 572 px Mindesthöhe des Quellenblocks); die Einzelheiten der Stufen sind jetzt in sechs kleinere Einträge geteilt | Fachstelle (Länge) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle | E | wie 2b-K | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | wie 2b-K | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | kein Überlauf (Prüfungen oben); Kurzbeschreibung unverändert | – |
| 13 | Theme «kontrast» geprüft | E | Fotos zu 3 a und 3 b in «kontrast»; Figur und Klassen unverändert | – |
| 14 | Inhalt fachlich freigegeben | E | `approvalStatus` «freigegeben» (Fachstelle, 11.10.2026, P2b-F-11 b); Gate production ohne `visual-approval` | – |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | wie 2b-K | – |
| 16 | Ein Bild, eine Idee; Beschriftungen nennen Erleben | E | wie 2b-K | – |
| 17 | Keine ungewollten Bedeutungen | T | wie 2b-K | R2 |

**Freundin-Test:** nicht neu gemacht, weil die Figur unverändert ist; Ergebnis der bauenden Sitzung und der Nachprüfung 2b-K: bestanden.

### Freigabe 2b: Entscheide der bauenden Sitzung (zur Prüfung)

1. **Ebenen in 3 a.** Der Zwischentitel «Die sechs Stufen im Detail» ist ein h4 unter «Sechs Stufen der Validierung», auf der Ebene der Stufennamen; die Einträge sind h5. So gehören die Einträge in der Überschriftenliste zu den sechs Stufen. Klasse `puk-site-subheading` wie bei den übrigen Zwischentiteln.
2. **Mehrere Einträge zugleich offen** (`data-multiple`), wie bei der Vertiefung der Stufen 3 bis 6 in Etappe 2b. Wer zwei Stufen vergleichen möchte, muss die erste nicht schliessen, und kein Eintrag schliesst sich beim Öffnen eines anderen von selbst.
3. **N2bK-3 ohne neuen Status.** c253, c260, c261 (und g664 zu 3 b) behalten ihren Status; nur die Bemerkung ist nachgeführt und endet mit «(nachgeführt 2b-F, …)». Der Status sagt, was mit der Aussage geschehen ist und auf welchen Entscheid; daran ändert sich nichts. So ist es seit 2b-K bei «nur Bemerkung nachgeführt». Die Regel aus Abschnitt 2 («Jede betroffene Zeile bekommt einen Status mit «(2b-F)»») ist damit für alle Zeilen umgesetzt, deren Fassung oder Ort sich ändert, und für die neuen Zeilen.
4. **3 a ohne Zeile im Abgleich.** Fassung und Ort der Zeilen zu den Stufen bleiben, ihre Bemerkung «Vertiefung «Die sechs Stufen im Detail», Eintrag «Stufe n · …»» stimmt weiter (`abgleich/README.md`, «Freigabe Etappe 2b eintragen»).
5. **Ort von Satz 1.** Am Ende des Teils «Wenn Sie sich wegen Suizid sorgen», angehängt an «Bleiben Sie bei der Person nur, …». Der Auftrag nennt den Teil und «nach «Direkt nachzufragen, …»»; auf `verstehen` steht dieser Satz aber als Antwort in der Liste der Annahmen, vor dem Teil. Der Teil ist für den Satz der passendere Ort: Dort steht die Handlungsanleitung «fragen Sie ruhig und direkt», und der Satz sagt, wo mehr dazu steht. Auf `kommunizieren` › `worte` steht derselbe Satz ebenso im Absatz nach dem Verweis im Text.
6. **Ort von Satz 3.** Am Ende der Antwort im selben Eintrag der Liste, also wörtlich «nach der Antwort». Der Satz unterbricht die Liste nicht. Nach der Liste käme die Handlungsanleitung zu Suizid, dort passt er nicht.
7. **Angehängt oder eigener Absatz.** Angehängt, wo der Auftrag einen Satz als Ort nennt und dort ein Absatz endet (Satz 3 und 5) und bei Satz 1 (Regel «ans Ende des nächsten Absatzes»). Eigener Absatz, wo der Auftrag das Ende eines Abschnitts oder Teils nennt (Satz 2, 4 und 6) und direkt nach dem Verweis im Text (Satz 7). Satz 6 steht damit gleich wie auf `krise` › `bleibt`.
8. **Nummern in der Liste.** Nach dem Ort auf der Seite: Bildtitel 8a, «Mitgefühl heisst nicht übernehmen» 14d, Pausensatz 20a, «Nächster Schritt» 29a, Grenzsätze 29b; die Verweissätze auf den anderen Seiten am Ende als 71 bis 77.
9. **CSS.** Die zwei Regeln für `.bl-stufen__detail` entfallen, weil es die Klasse nicht mehr gibt. Keine neue Regel; die Einträge nutzen die Klassen des Akkordeons aus dem Profil.

### Freigabe 2b: Zur Prüfung durch die Fachstelle

| Nr. | Stelle | Stand | Frage |
| --- | --- | --- | --- |
| 1 | Mindesthöhe am Quellenblock (3 c) | Wie vorgeschlagen steht `puk-site-anchor-end` am Quellenblock. Der Leerraum vor dem Block ist weg, dafür ist der Block selbst mindestens eine Fensterhöhe hoch: Unter dem geschlossenen Block bleiben bis zur Fusszeile 722 px leer bei 1280 × 900 px (vorher 84 px) und 624 px bei 360 × 800 px (vorher 52 px), auf allen sieben Seiten. Ohne die Klasse wäre die Fläche weg. Der Sprung zum letzten Abschnitt funktioniert dann trotzdem bis 1920 × 1080 px auf allen sieben Seiten (24 px unter dem Fensterrand, gemessen), weil der Quellenblock und die Fusszeile genug Höhe geben. Erst bei 2560 × 1440 px bleibt der Abschnitt auf `verstehen` 120 px und auf `kommunizieren` 171 px unter dem Fensterrand stehen | Bleibt die Mindesthöhe am Quellenblock, oder entfällt sie? Empfehlung der bauenden Sitzung: entfällt. Die Klasse ist im Starter nur für einen Abschnitt gedacht, auf den ein Link springt und der zuletzt steht; der Quellenblock ist kein Sprungziel |

### Freigabe 2b: Aufgefallen, nicht geändert

1. **Leerraum unter dem Quellenblock** (Folge von 3 c): siehe «Zur Prüfung», Nr. 1. Auch die Seitenhöhe bei 360 px steigt dadurch auf jeder Seite um 572 px.
2. **Druck:** Im PDF (A4) von `kommunizieren` steht der Zwischentitel «Die sechs Stufen im Detail» allein am Ende von Seite 7, die Einträge beginnen auf Seite 8. Das Profil hat keine Druckregel gegen allein stehende Zwischentitel (`components/bundle.css`: nur `break-inside: avoid` für Figuren); das betrifft alle Zwischentitel. Eine Regel dafür gehört ins Profil, nicht in dieses Repository.
3. **Andere Stellen des Berichts:** Die Selbstprüfungen 2b und 2b-K nennen bei «Zwei Tassen» Punkt 14 noch «N», die Entscheide der bauenden Sitzung 2b-2, Nr. 1, noch die Vertiefung mit einem Eintrag. Beides ist Verlauf; der Auftrag erlaubt im Bericht nur die Teile aus Abschnitt 6 und die Stellen aus Abschnitt 3 e. Der Stand steht in diesem Block.
4. **Datum der Statustabelle:** In der Zeile W1 und Visualisierungs-Check steht weiter «10.10.2026»; der Auftrag nennt die Spalte nicht.

**Stand 11.10.2026 · Korrektur Etappe 2b-2 · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-2B2.md` (Entscheide der Fachstelle vom 11.10.2026: sechs Stufen der Validierung, Quellen am Seitenende, Reste aus 2b-K). Grundlage ist `borderline-umbau` am Stand `386b8fc`; die Seiten sind dort gleich wie im Stand der Nachprüfung 2b-K (`f9e2314`). Geändert sind nur:

- `content/` und die gebauten Seiten von `verstehen`, `beziehungen`, `grenzen`, `rolle`, `selbstfuersorge`, `kommunizieren` und `krise`
- `borderline.css`: die Klassen `bl-stufen`, `bl-stufen__n`, `bl-stufen__name` und `bl-stufen__detail` (nur Tokens) und eine Druckregel
- `site.config.json`: je Seite eine Planzeile `v-…-quellen` für den Quellenblock; `krise` › `description`, `v-kr-vermeiden` › `goal`, `v-ko-tassen` › `reason`
- der Abgleich: sieben Tabellen und `abgleich/README.md`

`index` ist unverändert (`git diff f9e2314` leer). Keine Prüfstufe ist «erledigt». Danach liest die Fachstelle `kommunizieren` und `krise` und gibt sie frei (Auftrag, Abschnitt 1). Der Block von 2b-K steht darunter. Seine Liste «Neue Sätze zur Freigabe» ist mit dieser Korrektur nachgeführt.

**Auftrag im Website-Ordner:** `KORREKTUR-ETAPPE-2B2.md` lag im Stamm von `main` (`8cd4ed2`). Die Datei liegt unverändert in diesem Ordner (`22bcf2c`; `cmp` und SHA-256 gleich) und ist aus dem Stamm von `main` entfernt (`c79e9aa`).

### Korrektur 2b-2: Stand je Abschnitt (Abschnitte 2 bis 6)

| Punkt | Stand | Beleg |
| --- | --- | --- |
| 2 Wortlaut, nichts geht verloren | eingehalten | Satzvergleich aller sieben Seiten (Quelltext `f9e2314` gegen heute, Skript). Nicht mehr wörtlich stehen nur: (a) die Quellenzeilen mit «Quellen:», «Quelle:», «Grundlage:», «Bezugspunkte:» oder «Bezug:», deren Quellen im Block stehen (Tabellen unten); (b) Bezeichnungen der Stufen (die Nummer vor dem Namen, «Ziel», «Beispiel» in der Begriffsliste, «Beispielsätze», «Oder:»); (c) die drei Stellen aus Abschnitt 5 (Satz zu Dazzi et al., Einleitung der Beispiele, Person A und Person B). Jede andere Aussage steht auf derselben Seite, im Text, in einer Vertiefung oder im Quellenblock |
| 2 Vertiefungen | umgesetzt | «Die sechs Stufen im Detail» und «Quellen zu dieser Seite» sind `.puk-acc[data-puk-accordion]`. Ohne Skript sind alle Panels offen, im Druck sichtbar (Prüfungen unten) |
| 2 Keine neue Abbildung | eingehalten | Figuren je Seite wie vorher (`data-visual-id`: `kommunizieren` 1, `krise` 0, die übrigen unverändert); keine «Abbildung n» dazu; das Gate meldet weiter 1 × `visual-approval` (`v-ko-tassen`) |
| 2 Abgleich | umgesetzt | 185 Zeilen mit «verschoben (2b-2)» oder «umformuliert (2b-2)» und Bemerkung («2b-2 (Auftrag 2b-2, Abschnitt …): …; bis 2b-2: …»), 6 Zeilen nur mit nachgeführter Bemerkung; je Tabelle ein Absatz «Korrektur 2b-2» mit den Nummern und eine neue Zählung. Statuswerte erklärt in `abgleich/README.md`. `pruefe-abgleich.mjs`: vor dem Nachführen 94 Zeilen ohne Fundstelle, danach 4502 Zeilen, 0 ohne Fundstelle |
| 3 Reihenfolge | umgesetzt | Im Unterabschnitt «Sechs Stufen der Validierung»: 1. die Einleitung «Die sechs Stufen lehnen sich an …» unverändert; 2. die Liste `ol.bl-stufen` mit allen sechs Stufen; 3. die Vertiefung «Die sechs Stufen im Detail»; 4. «Mitgefühl heisst nicht übernehmen. …», die Gegenüberstellung «Übernehmen / Spiegeln», «Spiegeln kann Verständnis erleichtern, …» und «Ein hilfreicher innerer Satz: …», je Zeichen für Zeichen wie vorher (Skript) |
| 3 Je Stufe | umgesetzt | kleine Bezeichnung «Stufe 1» bis «Stufe 6»; der Name als Zwischentitel (h4): «Aufmerksam sein», «Spiegeln», «Zwischen den Zeilen verstehen», «Im biografischen Kontext verstehen», «Im aktuellen Kontext nachvollziehen», «Radikale Echtheit: auf Augenhöhe bleiben»; Leitsatz und Ziel in einem Absatz, zum Beispiel «Ich bin jetzt wirklich da.» Zugewandtheit und Aufmerksamkeit zeigen.; das Beispiel als `.puk-say__item--hilfreich` mit der Bezeichnung «Beispiel». Die sechs Beispiele lauten genau wie in der Tabelle des Auftrags (Skript: 6 von 6) |
| 3 Vertiefung | umgesetzt | ein Akkordeon mit dem Eintrag «Die sechs Stufen im Detail»; darin sechs gleich gebaute Teile «Stufe 1 · Aufmerksam sein» bis «Stufe 6 · Radikale Echtheit: auf Augenhöhe bleiben» (h5), je mit «So kann es aussehen», «Typischer Stolperstein», «Weiterer Beispielsatz» und «Kurzer Beispiel-Dialog». Bei Stufe 1 und 2 enthält der Dialog den sichtbaren Beispielsatz noch einmal, weil Person A damit antwortet. «Oder:» entfällt als Verbindungswort, der Satz danach ist der weitere Beispielsatz. Lesart des Auftrags: Entscheide unten, Nr. 1 |
| 3 Gestaltung | umgesetzt | Nummernpunkt `--space-6`, Linie `--border-width-strong` in `--puk-blue-100`, Einzug `--space-10` wie DEAR in der schmalen Darstellung, senkrecht bei jeder Breite. Bezeichnung in `--type-caption`; der Name 24 px (h4 des Profils), der Titel «Sechs Stufen der Validierung» 28 px; Leitsatz und Ziel 21 px (Seitenschrift). Nur die Klassen `bl-stufen…` in `borderline.css` und Profil-Klassen; in den neuen Regeln 0 Hexwerte und 0 Pixelwerte, auf den Seiten 0 `style`-Attribute. Überschriften: auf allen sieben Seiten ein h1 und kein Sprung über eine Ebene (Skript). Überlauf und Fotos unten |
| 4 Was wandert | umgesetzt | 27 Zeilen: `verstehen` 2, `beziehungen` 1, `grenzen` 4, `rolle` 5, `selbstfuersorge` 7, `kommunizieren` 5, `krise` 3 (Tabellen unten). Auch «Bezug: NICE CG78 (2009).» (`grenzen` › `arten`): Der Auftrag nennt diese Bezeichnung nicht, die Zeile nennt aber eine Quelle ausserhalb einer Abbildung (Entscheide, Nr. 5). Skript: auf den sieben Seiten keine Zeile mehr mit «Quellen:», «Quelle:», «Grundlage:», «Bezugspunkte:» oder «Bezug:» ausserhalb einer `figcaption` |
| 4 Was bleibt | eingehalten | Quellen in Abbildungen unverändert: `verstehen` Abbildungen 1 bis 3, `beziehungen` Abbildung 1 («Quellen am Seitenende.», das stimmt jetzt wörtlich), `grenzen` DEAR, `rolle` «Ein Stück Weg», `selbstfuersorge` «Ein freier Abend», `kommunizieren` «Zwei Tassen». Sätze ohne Quellennamen: Liste unten |
| 4 Der Block | umgesetzt | letzter Abschnitt jeder der sieben Seiten (`section#quellen`, nach dem letzten Inhaltsabschnitt), nicht in der Kapitelübersicht (7 von 7, Skript); Akkordeon mit einem Eintrag «Quellen zu dieser Seite» (h2), ohne Skript offen, im Druck vollständig. Darin `ul.puk-longform__sources`: jede Quelle einmal im Wortlaut von heute, darunter `.puk-longform__source-use` «Verwendet in: «Abschnittstitel»», bei mehreren Abschnitten alle in der Reihenfolge der Seite. Angaben, wofür eine Quelle steht, in Klammern nach dem Abschnitt, zum Beispiel bei Dazzi et al. (2014): «Verwendet in: «Wenn Suizidgedanken ein Thema sind» (Übersicht zum direkten Fragen nach Suizidgedanken, in den eingeschlossenen Studien kein statistisch signifikanter Anstieg)». Reihenfolge alphabetisch nach erstem Autor oder Herausgeber |
| 4 Prüfen | erfüllt | Tabellen je Seite unten (Skript: keine Quelle fehlt, keine ist dazugekommen, keine steht doppelt); `git diff --word-diff` unten. Links im Block: keine (0 `a` in `#quellen` auf allen sieben Seiten); der Vertrag (`contract.js`, Regel für Links in `puk-longform__sources`) meldet nichts |
| 5 `krise` › `suizid` | umgesetzt | «Eine Übersicht über mehrere Studien (Dazzi et al., 2014) fand keine nachweisbare Zunahme von Suizidgedanken durch direktes Fragen.» |
| 5 «Nach einem Arztbesuch» | umgesetzt | «Kim fühlt sich nach einem Arztbesuch nicht gehört. Sascha möchte nach dem Erleben fragen, …», die Bezeichnungen «Kim» und «Sascha», «Sascha muss den Arztbesuch nicht beurteilen …». «Person A» und «Person B» stehen auf `kommunizieren` nur noch in den Beispiel-Dialogen der sechs Stufen (je 6-mal) |
| 5 Einleitung `beispiele` | umgesetzt | «Die Namen bezeichnen keine festen Rollen und lassen sich nicht aus einer Diagnose ableiten.»; der Rest des Absatzes ist gleich |
| 5 «Pause statt Streit» | umgesetzt | Der Verweissatz «Wie Anspannung in einem Gespräch steigen und wieder sinken kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» steht als eigener Absatz direkt nach der Einleitung, vor der Begriffsliste. Nach der Liste bleibt «Eine Pause kann entlasten. Ihre Wirkung ist individuell. Ein späterer Kontakt ist keine Pflicht.» |
| 5 `krise` › `description` | umgesetzt | «… Suizidgedanken ansprechen, was Sie vermeiden sollten, nach der Krise …»; die Meta-Beschreibung der gebauten Seite lautet gleich |
| 5 `v-kr-vermeiden` › `goal` | umgesetzt | «Erkennen, was Sie in einer Krise vermeiden sollten» |
| 5 `v-ko-tassen` › `reason` | umgesetzt | «… Seit Korrektur 2b-K (P2b-F-11 b) stehen die zwei Tassen näher zur Tischmitte, spiegelgleich zu x = 320: Tassenkörper bei x 190–258 und 382–450, dazwischen 124 Einheiten frei; Henkel aussen. Tisch und Bildausschnitt unverändert.» Der Satz zu den Stufen beschreibt jetzt das neue Layout |
| 6 Danach | erfüllt | Prüfungen, Länge, Fotos und Listen unten |

### Korrektur 2b-2: Sätze ohne Quellennamen (Ort vorher und nachher)

Diese Sätze standen in Quellenzeilen, nennen aber keine Quelle. Sie bleiben im heutigen Wortlaut an ihrem Ort, nur ohne die Bezeichnung am Anfang und ohne die Quellennamen (Auftrag, Abschnitt 4).

| Seite › Abschnitt | Satz | vorher | nachher |
| --- | --- | --- | --- |
| `beziehungen` › `verantwortung` | «Studien beschreiben Gruppen, nicht eine bestimmte Person oder Beziehung.» | letzter Absatz des Abschnitts, nach «Grundlage:» und vor «Quellen: …» | eigener Absatz an derselben Stelle |
| `selbstfuersorge` › `warnsignale` | «Die fünf Bereiche sind eine eigene didaktische Ordnung.» | am Ende der Zeile «Quellen: WHO, Stress: …; NICE NG150 (2020), …», direkt nach dem Verweis im Text | eigener Absatz an derselben Stelle, direkt nach dem Verweis im Text |
| `selbstfuersorge` › `akzeptanz` | «Die Übung in vier Schritten ist eine vereinfachte eigene Darstellung.» | letzter Absatz des Abschnitts, nach «Quelle: Linehan (2015), DBT Skills Training Manual;» mit kleinem «die» | eigener Absatz an derselben Stelle; der Satz beginnt gross (Entscheide, Nr. 9) |
| `selbstfuersorge` › `beratung` | «Die Hinweise auf dieser Seite übertragen Forschung und eine Leitlinie in Schritte für den Alltag: eine Übersicht zur Belastung von Angehörigen, Forschung zu kurzer körperlicher Beruhigung und eine Leitlinie zur Unterstützung erwachsener Angehöriger, die unbezahlt betreuen.» und «Das ist eine Orientierung, keine Garantie, dass sie wirken.» | letzter Absatz des Abschnitts, nach «Grundlage:» und vor «Quellen: …» | eigener Absatz an derselben Stelle |
| `kommunizieren` › `worte` | «Beispiele und Antwortsätze: eigene didaktische Darstellung.» | letzter Absatz des Abschnitts, nach «Bezugspunkte: …» | eigener Absatz an derselben Stelle |
| `kommunizieren` › `beispiele` | «Die Beispiele sind eigene didaktische Ableitungen aus den Ansätzen auf dieser Seite, kein auf Wirksamkeit geprüftes Übungsprogramm.» | letzter Absatz des Abschnitts, nach «Grundlage:» | eigener Absatz an derselben Stelle |

Angaben, die sagen, wofür eine Quelle steht, sind keine Aussage über den Inhalt der Seite. Sie stehen jetzt im Block bei ihrer Quelle, in Klammern nach dem Abschnitt: «für Körper, Gefühle und Gedanken» (WHO, Stress), «für Verhalten und Erholungsbedarf» und «nicht spezifisch für Borderline» (NICE NG150), «angepasste deutsche Fassung» (STOPP), «eine Übersicht über sechs Studien mit deutlichen Forschungslücken» (Bailey und Grenyer), die Angaben zu Dazzi et al., NICE NG225 und WHO, Suicide auf `krise`.

### Korrektur 2b-2: Quellen je Seite (Quellenzeile → Eintrag im Block)

Je Seite jede Quellenzeile bis 2b-2 mit den Einträgen, die sie im Block ergibt. Ein Skript vergleicht die alten Zeilen (Quelltext `f9e2314`) mit dem Block der gebauten Seite: Jede Quelle der alten Zeilen beginnt einen Eintrag, kein Eintrag nennt eine Quelle, die in den alten Zeilen fehlt, und kein Eintrag steht doppelt. Was keine Quelle ist, steht in der letzten Spalte.

**`verstehen`** · 2 Quellenzeilen, 9 Einträge im Block

| Abschnitt | Quellenzeile bis 2b-2 (Stand `f9e2314`) | Eintrag im Block | Im Text bleibt |
| --- | --- | --- | --- |
| `borderline` «Was die Diagnose beschreiben kann» | «Quellen: WHO, ICD-11 (2024); American Psychiatric Association (2024); NICE CG78 (2009); Linehan (1993).» | WHO, ICD-11 (2024); American Psychiatric Association (2024); NICE CG78 (2009); Linehan (1993) | – |
| `mythen` «Häufige Annahmen – und was realistischer ist» | «Quellen: Storebø et al. (2020); Zanarini et al. (2012); Porter et al. (2020); Qian et al. (2022); WHO, ICD-11 (2024); WHO, Suicide: Questions and answers (2026).» | Storebø et al. (2020); Zanarini et al. (2012); Porter et al. (2020); Qian et al. (2022); WHO, ICD-11 (2024); WHO, Suicide: Questions and answers (2026) | – |

Reihenfolge im Block (alphabetisch nach erstem Autor oder Herausgeber): American Psychiatric Association (2024); Linehan (1993); NICE CG78 (2009); Porter et al. (2020); Qian et al. (2022); Storebø et al. (2020); WHO, ICD-11 (2024); WHO, Suicide: Questions and answers (2026); Zanarini et al. (2012).

**`beziehungen`** · 1 Quellenzeile, 9 Einträge im Block

| Abschnitt | Quellenzeile bis 2b-2 (Stand `f9e2314`) | Eintrag im Block | Im Text bleibt |
| --- | --- | --- | --- |
| `verantwortung` «Verstehen ist keine Pflicht, alles auszuhalten» | «Grundlage: Studien beschreiben Gruppen, nicht eine bestimmte Person oder Beziehung. Quellen: American Psychiatric Association (2024); NICE CG78 (2009); Fruzzetti (2006); Gunderson et al. (1997); Foxhall et al. (2019); McLaren et al. (2022); Cavicchioli et al. (2021); Sutherland et al. (2020); Leonards et al. (2024).» | American Psychiatric Association (2024); NICE CG78 (2009); Fruzzetti (2006); Gunderson et al. (1997); Foxhall et al. (2019); McLaren et al. (2022); Cavicchioli et al. (2021); Sutherland et al. (2020); Leonards et al. (2024) | «Studien beschreiben Gruppen, nicht eine bestimmte Person oder Beziehung.» |

Reihenfolge im Block (alphabetisch nach erstem Autor oder Herausgeber): American Psychiatric Association (2024); Cavicchioli et al. (2021); Foxhall et al. (2019); Fruzzetti (2006); Gunderson et al. (1997); Leonards et al. (2024); McLaren et al. (2022); NICE CG78 (2009); Sutherland et al. (2020).

**`grenzen`** · 4 Quellenzeilen, 9 Einträge im Block

| Abschnitt | Quellenzeile bis 2b-2 (Stand `f9e2314`) | Eintrag im Block | Im Text bleibt |
| --- | --- | --- | --- |
| `erkennen` «Woran Sie merken, dass eine Grenze nötig ist» | «Quellen: NICE NG150 (2020); WHO, Stress: Questions and answers (2026).» | NICE NG150 (2020); WHO, Stress: Questions and answers (2026) | – |
| `bruecke` «Kontakt halten, ohne immer verfügbar zu sein» | «Bezugspunkte: Hoffman et al. (2005); NICE CG78 (2009); Linehan; Mason und Kreger (2014); Stand by You / Sotomo (2024).» | Hoffman et al. (2005); NICE CG78 (2009); Linehan; Mason und Kreger (2014); Stand by You / Sotomo (2024) | – |
| `arten` «Vier Arten von Grenzen» | «Bezug: NICE CG78 (2009).» | NICE CG78 (2009) | – |
| `gewalt` «Wenn Gewalt oder Bedrohung vorkommt» | «Bezugspunkte: Opferhilfe Schweiz; Eidgenössisches Büro für die Gleichstellung von Frau und Mann (EBG); NICE CG78 (2009).» | Opferhilfe Schweiz; Eidgenössisches Büro für die Gleichstellung von Frau und Mann (EBG); NICE CG78 (2009) | – |

Reihenfolge im Block (alphabetisch nach erstem Autor oder Herausgeber): Eidgenössisches Büro für die Gleichstellung von Frau und Mann (EBG); Hoffman et al. (2005); Linehan; Mason und Kreger (2014); NICE CG78 (2009); NICE NG150 (2020); Opferhilfe Schweiz; Stand by You / Sotomo (2024); WHO, Stress: Questions and answers (2026).

**`rolle`** · 5 Quellenzeilen, 10 Einträge im Block

| Abschnitt | Quellenzeile bis 2b-2 (Stand `f9e2314`) | Eintrag im Block | Im Text bleibt |
| --- | --- | --- | --- |
| `anbieten` «Was Sie anbieten können und was nicht Ihre Aufgabe ist» | «Quellen: Berkowitz und Gunderson, Family Guidelines (NEABPD); Mason und Kreger (2014); NICE CG78 (2009); NICE NG150 (2020).» | Berkowitz und Gunderson, Family Guidelines (NEABPD); Mason und Kreger (2014); NICE CG78 (2009); NICE NG150 (2020) | – |
| `schuld` «Schuld, Verantwortung und was dazwischen liegt» | «Quellen: Berkowitz und Gunderson, Family Guidelines (NEABPD); Hoffman et al. (2005); NICE CG78 (2009); NICE NG150 (2020).» | Berkowitz und Gunderson, Family Guidelines (NEABPD); Hoffman et al. (2005); NICE CG78 (2009); NICE NG150 (2020) | – |
| `alltag` «Im Alltag unterstützen» | «Quellen: American Psychiatric Association (2024); NICE CG78 (2009); NICE NG150 (2020); NICE NG225; WHO, Doing What Matters in Times of Stress.» | American Psychiatric Association (2024); NICE CG78 (2009); NICE NG150 (2020); NICE NG225; WHO, Doing What Matters in Times of Stress | – |
| `mehrere` «Wenn mehrere Angehörige beteiligt sind» | «Quellen: American Psychiatric Association (2024); NICE CG78 (2009).» | American Psychiatric Association (2024); NICE CG78 (2009) | – |
| `kinder` «Wenn Kinder mitbetroffen sind» | «Quellen: Pro Juventute, Wenn ein Elternteil psychisch krank ist; PUK Zürich, Informationen für Angehörige.» | Pro Juventute, Wenn ein Elternteil psychisch krank ist; PUK Zürich, Informationen für Angehörige | – |

Reihenfolge im Block (alphabetisch nach erstem Autor oder Herausgeber): American Psychiatric Association (2024); Berkowitz und Gunderson, Family Guidelines (NEABPD); Hoffman et al. (2005); Mason und Kreger (2014); NICE CG78 (2009); NICE NG150 (2020); NICE NG225; Pro Juventute, Wenn ein Elternteil psychisch krank ist; PUK Zürich, Informationen für Angehörige; WHO, Doing What Matters in Times of Stress.

**`selbstfuersorge`** · 7 Quellenzeilen, 11 Einträge im Block

| Abschnitt | Quellenzeile bis 2b-2 (Stand `f9e2314`) | Eintrag im Block | Im Text bleibt |
| --- | --- | --- | --- |
| `eigenes-leben` «Auch Ihr eigenes Leben zählt» | «Quellen: NICE NG150 (2020); WHO Europa, Caring for yourself while caring for others (2025).» | NICE NG150 (2020); WHO Europa, Caring for yourself while caring for others (2025) | – |
| `kraft` «Was Kraft kostet und was entlastet» | «Quellen: NICE NG150 (2020); WHO Europa, Caring for yourself while caring for others (2025); Bundesamt für Gesundheit, Psychische Gesundheit.» | NICE NG150 (2020); WHO Europa, Caring for yourself while caring for others (2025); Bundesamt für Gesundheit, Psychische Gesundheit | – |
| `warnsignale` «Warnsignale für Überlastung» | «Quellen: WHO, Stress: Questions and answers (2026), für Körper, Gefühle und Gedanken; NICE NG150 (2020), für Verhalten und Erholungsbedarf. Die fünf Bereiche sind eine eigene didaktische Ordnung.» | WHO, Stress: Questions and answers (2026) («Verwendet in» mit «für Körper, Gefühle und Gedanken»); NICE NG150 (2020) («Verwendet in» mit «für Verhalten und Erholungsbedarf») | «Die fünf Bereiche sind eine eigene didaktische Ordnung.» |
| `zu-viel` «Wenn es gerade zu viel ist» | «Quellen: Carol Vivyan, STOPP (Getselfhelp), angepasste deutsche Fassung; NHS, Breathing exercises for stress; NHS inform, Grounding exercises; Zaccaro et al. (2018).» | Carol Vivyan, STOPP (Getselfhelp) («Verwendet in» mit «angepasste deutsche Fassung»); NHS, Breathing exercises for stress; NHS inform, Grounding exercises; Zaccaro et al. (2018) | – |
| `unterstuetzung` «Auch Sie brauchen Unterstützung» | «Quellen: NICE NG150 (2020); Mason und Kreger (2014).» | NICE NG150 (2020); Mason und Kreger (2014) | – |
| `akzeptanz` «Radikale Akzeptanz» | «Quelle: Linehan (2015), DBT Skills Training Manual; die Übung in vier Schritten ist eine vereinfachte eigene Darstellung.» | Linehan (2015), DBT Skills Training Manual | «Die Übung in vier Schritten ist eine vereinfachte eigene Darstellung.» |
| `beratung` «Nicht allein tragen» | «Grundlage: Die Hinweise auf dieser Seite übertragen Forschung und eine Leitlinie in Schritte für den Alltag: eine Übersicht zur Belastung von Angehörigen, Forschung zu kurzer körperlicher Beruhigung und eine Leitlinie zur Unterstützung erwachsener Angehöriger, die unbezahlt betreuen. Das ist eine Orientierung, keine Garantie, dass sie wirken. Quellen: Bailey und Grenyer (2013), eine Übersicht über sechs Studien mit deutlichen Forschungslücken; Zaccaro et al. (2018); NICE NG150 (2020), nicht spezifisch für Borderline.» | Bailey und Grenyer (2013) («Verwendet in» mit «eine Übersicht über sechs Studien mit deutlichen Forschungslücken»); Zaccaro et al. (2018); NICE NG150 (2020) («Verwendet in» mit «nicht spezifisch für Borderline») | «Die Hinweise auf dieser Seite übertragen Forschung und eine Leitlinie in Schritte für den Alltag: eine Übersicht zur Belastung von Angehörigen, Forschung zu kurzer körperlicher Beruhigung und eine Leitlinie zur Unterstützung erwachsener Angehöriger, die unbezahlt betreuen. Das ist eine Orientierung, keine Garantie, dass sie wirken.» |

Reihenfolge im Block (alphabetisch nach erstem Autor oder Herausgeber): Bailey und Grenyer (2013); Bundesamt für Gesundheit, Psychische Gesundheit; Linehan (2015), DBT Skills Training Manual; Mason und Kreger (2014); NHS, Breathing exercises for stress; NHS inform, Grounding exercises; NICE NG150 (2020); Carol Vivyan, STOPP (Getselfhelp); WHO, Stress: Questions and answers (2026); WHO Europa, Caring for yourself while caring for others (2025); Zaccaro et al. (2018).

**`kommunizieren`** · 5 Quellenzeilen, 5 Einträge im Block

| Abschnitt | Quellenzeile bis 2b-2 (Stand `f9e2314`) | Eintrag im Block | Im Text bleibt |
| --- | --- | --- | --- |
| `anerkennen` «Anerkennen, ohne zuzustimmen» | «Grundlage: Linehan (1997), «Validation and psychotherapy»; Fruzzetti (2006); Mason und Kreger (2014).» | Linehan (1997), «Validation and psychotherapy»; Fruzzetti (2006); Mason und Kreger (2014) | – |
| `moment` «Der richtige Moment» | «Quellen: Linehan (1993); Mason und Kreger (2014).» | Linehan (1993); Mason und Kreger (2014) | – |
| `kippen` «Wenn Gespräche kippen» | «Quellen: Mason und Kreger (2014); Linehan (1993); Fruzzetti (2006).» | Mason und Kreger (2014); Linehan (1993); Fruzzetti (2006) | – |
| `worte` «Wenn Worte treffen» | «Bezugspunkte: Berkowitz und Gunderson, Family Guidelines (NEABPD); Linehan (1993). Beispiele und Antwortsätze: eigene didaktische Darstellung.» | Berkowitz und Gunderson, Family Guidelines (NEABPD); Linehan (1993) | «Beispiele und Antwortsätze: eigene didaktische Darstellung.» |
| `beispiele` «So könnte es klingen» | «Grundlage: Die Beispiele sind eigene didaktische Ableitungen aus den Ansätzen auf dieser Seite, kein auf Wirksamkeit geprüftes Übungsprogramm.» | – (nennt keine Quelle) | «Die Beispiele sind eigene didaktische Ableitungen aus den Ansätzen auf dieser Seite, kein auf Wirksamkeit geprüftes Übungsprogramm.» |

Reihenfolge im Block (alphabetisch nach erstem Autor oder Herausgeber): Berkowitz und Gunderson, Family Guidelines (NEABPD); Fruzzetti (2006); Linehan (1993); Linehan (1997), «Validation and psychotherapy»; Mason und Kreger (2014).

**`krise`** · 3 Quellenzeilen, 6 Einträge im Block

| Abschnitt | Quellenzeile bis 2b-2 (Stand `f9e2314`) | Eintrag im Block | Im Text bleibt |
| --- | --- | --- | --- |
| `belastung` «Wenn Belastung zunimmt» | «Grundlage: NICE NG225 (2022) und NICE CG78 (2009).» | NICE NG225 (2022); NICE CG78 (2009) | – |
| `sagen` «Was Sie sagen können» | «Quellen: Mason und Kreger (2014); Linehan (1993).» | Mason und Kreger (2014); Linehan (1993) | – |
| `suizid` «Wenn Suizidgedanken ein Thema sind» | «Quellen: Dazzi et al. (2014), Übersicht zum direkten Fragen nach Suizidgedanken, in den eingeschlossenen Studien kein statistisch signifikanter Anstieg; NICE NG225 (2022), fachliche Beurteilung nach Selbstverletzung, keine Vorhersage durch pauschale Risikostufen; WHO, Suicide: Questions and answers (2026), direktes Fragen löst nach heutigem Wissensstand keine suizidale Handlung aus.» | Dazzi et al. (2014) («Verwendet in» mit «Übersicht zum direkten Fragen nach Suizidgedanken, in den eingeschlossenen Studien kein statistisch signifikanter Anstieg»); NICE NG225 (2022) («Verwendet in» mit «fachliche Beurteilung nach Selbstverletzung, keine Vorhersage durch pauschale Risikostufen»); WHO, Suicide: Questions and answers (2026) («Verwendet in» mit «direktes Fragen löst nach heutigem Wissensstand keine suizidale Handlung aus») | – |

Reihenfolge im Block (alphabetisch nach erstem Autor oder Herausgeber): Dazzi et al. (2014); Linehan (1993); Mason und Kreger (2014); NICE CG78 (2009); NICE NG225 (2022); WHO, Suicide: Questions and answers (2026).

### Korrektur 2b-2: Prüfungen nach Abschnitt 6

- **`node tools/build.mjs`:** 0 blockierend, 11 Hinweise wie vorher (1 × `visual-approval`, 8 × `placeholder-approval`, `site-url`, `review-report`). Vor dem Eintragen der Planzeilen für `#quellen` waren es 18 Hinweise (7 × `plan-coverage`).
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 10 blockierend wie bisher (1 × `visual-approval`, 8 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`site-url`).
- **`node abgleich/pruefe-abgleich.mjs`:** 4502 Zeilen, 0 ohne Fundstelle.
- **Länge:** Tabelle unten. `kommunizieren` 2469 und `krise` 1523 Wörter im Lesefluss (C1), beide unter etwa 2500.
- **Stufen und Quellenblock im Browser:** Fotos bei 1280 und 360 px, je Standard und «kontrast» (unten).
- **Überlauf:** die sieben Seiten bei 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px, Vertiefungen zu und offen, beide Themes (252 Messungen): kein waagrechter Überlauf, kein Element der Stufen, der Vertiefung oder des Quellenblocks ausserhalb des Fensters. Zoom 200 % (640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %), Vertiefungen zu und offen (28 Messungen): ohne Überlauf.
- **Tastatur und Fokus** (1280 px, reduzierte Bewegung): Der Knopf «Quellen zu dieser Seite» ist auf allen sieben Seiten der letzte Tabstopp vor der Fusszeile (`verstehen` 21, `beziehungen` 19, `grenzen` 24, `rolle` 31, `selbstfuersorge` 29, `kommunizieren` 30, `krise` 26), «Die sechs Stufen im Detail» ist auf `kommunizieren` Tabstopp 19. Beide mit sichtbarem Fokus und im Fenster; Enter öffnet, Leertaste schliesst (8 von 8).
- **Druck** (`print`, dazu PDF von `kommunizieren` und `krise`, Seite mit den Stufen angesehen): alle Panels sichtbar (`verstehen` 1, `beziehungen` 1, `grenzen` 1, `rolle` 5, `selbstfuersorge` 8, `kommunizieren` 7, `krise` 5), der Quellenblock mit allen Einträgen, die Stufen mit Punkten und Linie. Eine Stufe bricht nicht über den Seitenumbruch (Entscheide, Nr. 11).
- **Ohne Skript:** alle Panels offen (dieselben Zahlen wie im Druck).
- **Kontraste** (gemessen): Bezeichnung «Stufe n», Name, Leitsatz, Titel der Teile, Quellennamen und Knopf 15,91 : 1; «Beispiel» und «Verwendet in» 5,92 : 1 (Standard) und 8,19 : 1 («kontrast»); Punkt und Linie 4,71 : 1 und 10,08 : 1.
- **`node abgleich/bedienung.mjs`:** Tabstopps je ein Stopp mehr für den Quellenblock, `kommunizieren` 32 → 30 (vier Vertiefungen der Stufen 3 bis 6 werden eine). Höhe bei 360 px: `verstehen` 16 540 → 16 430 px, `beziehungen` 15 527 → 15 516, `grenzen` 17 074 → 16 837, `rolle` 26 243 → 25 771, `selbstfuersorge` 22 123 → 21 494, `kommunizieren` 24 625 → 24 887, `krise` 16 671 → 16 306. Höchste Figur je Seite unverändert; `index` unverändert (15 Tabstopps, 4636 px).
- **Technik:** in den sieben Quelltexten 0 `style`-Attribute, 0 Hexwerte, 0 `tel:`.
- **Keine Änderung am Wortlaut der Etappen 1 und 2a und an `index`** (`git diff --word-diff f9e2314`):
  - `index`: kein Unterschied (Quelltext und gebaute Seite).
  - `verstehen`: zwei Quellenzeilen entfernt (`borderline`, `mythen`), Block angehängt.
  - `beziehungen`: aus dem letzten Absatz von `verantwortung` entfallen «Grundlage:» und «Quellen: …»; Block angehängt.
  - `grenzen`: vier Quellenzeilen entfernt (`erkennen`, `bruecke`, `arten`, `gewalt`), Block angehängt.
  - `rolle`: fünf Quellenzeilen entfernt, Block angehängt.
  - `selbstfuersorge`: sieben Quellenzeilen; in `warnsignale`, `akzeptanz` und `beratung` bleiben die Sätze ohne Quellennamen; einzige Änderung an einem Wort: «die» → «Die» am neuen Satzanfang in `akzeptanz`; Block angehängt.
  - Sonst kein Unterschied, auch nicht in Bildlegenden und Vertiefungen.
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Korrektur 2b-2: Wörter im Lesefluss vorher und nachher (Zählweise C1)

C1 wie in den Selbstprüfungen 2b und 2b-K und den Prüfrunden 2a und 2b: innerste `p`, `li`, `dt`, `dd` in `<main>`, ohne SVG, Text nur für Screenreader, Kapitelübersicht, Kicker, Eyebrow, «Abbildung n · …» und Absätze, die mit «Quelle», «Quellen», «Bezugspunkte», «Grundlage» oder «Eigene didaktische Darstellung» beginnen; im Lesefluss ohne die Panels der Akkordeons. Der Block «Quellen zu dieser Seite» zählt nicht (Quellenzeilen). «Vorher» ist `f9e2314`; das Skript ergibt dort genau die Werte der Selbstprüfung 2b-K (`kommunizieren` 2432 und 3100, `krise` 1522 und 1945, je Abschnitt gleich) und der Prüfrunde 2b (`rolle` 2627, `selbstfuersorge` 2051).

| Seite | C1 im Lesefluss vorher | nachher | Differenz | C1 mit Vertiefungen vorher → nachher |
| --- | ---: | ---: | ---: | --- |
| `index` | 221 | 221 | 0 | 221 → 221 |
| `verstehen` | 1444 | 1444 | 0 | 1444 → 1444 |
| `beziehungen` | 1423 | 1432 | +9 | 1423 → 1432 |
| `grenzen` | 1472 | 1468 | −4 | 1472 → 1468 |
| `rolle` | 2627 | 2627 | 0 | 2914 → 2914 |
| `selbstfuersorge` | 2051 | 2114 | +63 | 2390 → 2453 |
| **`kommunizieren`** | **2432** | **2469** | **+37** | 3100 → 3135 |
| **`krise`** | **1522** | **1523** | **+1** | 1945 → 1946 |

**Geänderte Abschnitte und Gründe:**

- `beziehungen` › `verantwortung` 187 → 196: «Studien beschreiben Gruppen, nicht eine bestimmte Person oder Beziehung.» steht ohne «Grundlage:» und zählt jetzt (+9).
- `grenzen` › `arten` 149 → 145: «Bezug: NICE CG78 (2009).» zählte bisher in C1, weil «Bezug» nicht zu den ausgeschlossenen Anfängen gehört; die Zeile steht jetzt im Block (−4).
- `selbstfuersorge` › `warnsignale` 232 → 240, `akzeptanz` 214 → 224, `beratung` 108 → 153: die Sätze ohne Quellennamen zählen jetzt (+8, +10, +45).
- `kommunizieren` › `anerkennen` 613 → 637: Im Lesefluss standen bisher die Stufen 1 und 2 mit allen Teilen (135 Wörter); jetzt stehen alle sechs Stufen mit Leitsatz, Ziel, «Beispiel» und Beispielsatz (159 Wörter, +24). In der Vertiefung −2 (980 → 1002 mit Vertiefungen).
- `kommunizieren` › `worte` 269 → 275: «Beispiele und Antwortsätze: eigene didaktische Darstellung.» zählt jetzt (+6).
- `kommunizieren` › `beispiele` 516 → 523: Einleitung «Die Namen …» (−5), Kim und Sascha statt Person A und Person B, je im Text und in den Bezeichnungen (−5), «Die Beispiele sind …» ohne «Grundlage:» zählt jetzt (+17).
- `krise` › `suizid` 182 → 183: der neue Satz zu Dazzi et al. hat 18 statt 17 Wörter (+1).

**Weitere Kennzahlen** (`kennzahlen.mjs`, gesamt mit Vertiefungen und Quellenblock): `verstehen` 1676 → 1749, `beziehungen` 1600 → 1674, `grenzen` 1667 → 1749, `rolle` 3145 → 3236, `selbstfuersorge` 2679 → 2748, `kommunizieren` 3344 → 3429, `krise` 2117 → 2156. Die Zunahme kommt aus den Angaben «Verwendet in: …». Semikolons unverändert (0, 1, 0, 2, 2, 0, 1).

### Korrektur 2b-2: Fotos

**Bildschirmfotos** (Chromium, Ausschnitt des Elements): Stufen und Vertiefung offen bei 1280 und 360 px, je Standard und «kontrast» (8 Fotos); Quellenblock offen auf allen sieben Seiten bei 1280 und 360 px, je Standard und «kontrast» (28 Fotos); dazu der Übergang vom letzten Abschnitt zum Quellenblock auf `kommunizieren` und `verstehen` bei 1280 px und die Druckseite mit den Stufen. Alle angesehen.

- **Stufen, 1280 px:** Punkte und Linie wie DEAR schmal, in der Textspalte. Über jedem Namen klein «Stufe n», darunter der Absatz mit Leitsatz und Ziel und das Beispiel mit blauer Randlinie. Die sechs Stufen lesen sich als Folge; der Name ist deutlich kleiner als «Sechs Stufen der Validierung» und grösser als der Text.
- **Stufen, 360 px:** Punkte und Linie bleiben links, lange Namen umbrechen auf zwei Zeilen («Im biografischen Kontext verstehen», «Radikale Echtheit: auf Augenhöhe bleiben»). Kein Überlauf.
- **«kontrast»:** Punkte und Linie dunkelblau, die Bezeichnungen «Beispiel» dunkler; nichts verschwindet.
- **Vertiefung offen:** «Die sechs Stufen im Detail» auf dem Knopf; darin sechs fette Zwischentitel «Stufe n · …», je mit denselben vier Bezeichnungen in derselben Reihenfolge. Schmal gut lesbar, die Dialoge umbrechen.
- **Quellenblock:** geschlossen eine Zeile «Quellen zu dieser Seite» mit Pfeil zwischen zwei Trennlinien, links die leere Spalte wie bei den Abschnitten. Offen je Quelle eine Zeile in Seitenschrift, darunter klein und grau «Verwendet in: …» mit den Abschnittstiteln in «…» und den Angaben in Klammern. Bei 360 px umbrechen lange Titel ohne Überlauf.

### Korrektur 2b-2: Neue Sätze zur Freigabe

Die Liste im Block «Korrektur 2b-K» ist nachgeführt; ihre Überschrift sagt jetzt «Stand nach Korrektur 2b-2».

- **Die zwei geänderten Sätze aus Abschnitt 5:** Nr. 35 «Die Namen bezeichnen keine festen Rollen und lassen sich nicht aus einer Diagnose ableiten.» und Nr. 53a «Eine Übersicht über mehrere Studien (Dazzi et al., 2014) fand keine nachweisbare Zunahme von Suizidgedanken durch direktes Fragen.»
- **Ebenfalls in dieser Korrektur neu oder neu gefasst** (Regel der Liste von 2b-K):
  - Nr. 36a: Kim und Sascha in «Nach einem Arztbesuch»
  - Nr. 14b und 14c: die Bezeichnungen der Stufen und der Vertiefung
  - Nr. 42: ohne «Grundlage:»
  - Nr. 43a: «Quellen zu dieser Seite» und «Verwendet in:»
- **Neuer Ort:** Nr. 20 (Verweissatz in «Pause statt Streit») und Nr. 54a (Angabe zu WHO im Quellenblock).
- **Geprüft:** 119 Stellen in «…» der Spalte «Satz» stehen wörtlich auf den gebauten Seiten `kommunizieren`, `krise` und `index` (Skript).

### Korrektur 2b-2: Zur Prüfung durch die Fachstelle

Die Zeile ergänzt die Liste «Etappe 2b: Zur Prüfung durch die Fachstelle» (Nr. 1 bis 11) weiter unten.

| Nr. | Stelle | Bestand | Neu | Frage |
| --- | --- | --- | --- | --- |
| 12 | Satz zu Dazzi et al., `krise` › `suizid` (Auftrag 2b-2, Abschnitt 5) | «Die von Dazzi et al. ausgewerteten Studien zeigten keinen statistisch signifikanten Anstieg von Suizidgedanken durch direktes Fragen.» (`unterstuetzen--krise.md`, «Bei Suizidgedanken direkt ansprechen»); Quelle im Bestand: «Dazzi et al. (2014) — Übersicht zum direkten Fragen nach Suizidgedanken; in den eingeschlossenen Studien kein statistisch signifikanter Anstieg.» | «Eine Übersicht über mehrere Studien (Dazzi et al., 2014) fand keine nachweisbare Zunahme von Suizidgedanken durch direktes Fragen.» Im Quellenblock steht bei Dazzi et al. (2014) weiter die Angabe des Bestands («… in den eingeschlossenen Studien kein statistisch signifikanter Anstieg») | Trägt «keine nachweisbare Zunahme» dieselbe Aussage wie «kein statistisch signifikanter Anstieg»? Der Satz ist der einzige auf den sieben Seiten, der eine Quelle im Text nennt. |

### Korrektur 2b-2: Entscheide der bauenden Sitzung (zur Prüfung)

1. **Eine Vertiefung mit einem Eintrag.** «Eine Vertiefung «Die sechs Stufen im Detail» mit sechs Einträgen» ist gebaut als ein Akkordeon-Eintrag mit diesem Titel; die sechs Stufen sind darin Teile mit Zwischentitel (h5). So steht der Titel des Auftrags auf dem Knopf, und ein Tabstopp genügt (vorher vier). Möglich wäre auch: sechs Einträge «Stufe 1 · …» unter einem Zwischentitel «Die sechs Stufen im Detail». Das wäre nur eine Änderung im Markup.
2. **Bezeichnungen in der Vertiefung.**
   - «Weiterer Beispielsatz» ist neu (Liste, Nr. 14c). Nach dem sichtbaren Beispiel bleibt je Stufe genau ein Beispielsatz, «Beispielsätze» passte nicht mehr.
   - Bei Stufe 1 und 2 heisst der Dialog wie bei den Stufen 3 bis 6 «Kurzer Beispiel-Dialog» (bisher «Beispiel»).
3. **«Stufe n» im Zwischentitel.** Die Bezeichnung steht als eigene Zeile im h4. Screenreader lesen «Stufe 1 Aufmerksam sein»; in der Überschriftenliste ist die Stufe erkennbar. Die Liste ist zudem ein `ol`.
4. **Quellenblock mit Abschnitts-ID und Planzeile.** Der Block ist `section#quellen`, je Seite mit einer Planzeile `v-…-quellen` (`format` «text»). Gründe:
   - Der Abgleich braucht für den neuen Ort eine Abschnitts-ID (`pruefe-abgleich.mjs`).
   - Das Gate verlangt für jeden Abschnitt mit ID eine Planzeile (`plan-coverage`).
   - Die Planzeilen ändern nichts am Wortlaut der Seiten.
5. **«Bezug:» mitverschoben.** «Bezug: NICE CG78 (2009).» (`grenzen` › `arten`) steht jetzt im Block, obwohl der Auftrag «Bezug:» nicht nennt. Grund ist der Entscheid «Auf allen Seiten stehen die Quellen nicht mehr im Text» (Abschnitt 1).
6. **«Verwendet in».**
   - Die Abschnitte stehen in der Reihenfolge der Seite.
   - Eine Angabe, wofür eine Quelle steht, steht in Klammern direkt nach dem Abschnitt, aus dem sie stammt. NICE NG150 (2020) hat auf `selbstfuersorge` zwei solche Angaben.
   - «angepasste deutsche Fassung» gilt als solche Angabe; der Quellenname bleibt «Carol Vivyan, STOPP (Getselfhelp)».
   - Im Block stehen keine Semikolons, sonst zählte `kennzahlen.mjs` sie als Fliesstext.
7. **Alphabetische Reihenfolge.**
   - nach Nachname oder Herausgeber, Umlaute wie Grundbuchstaben: «Carol Vivyan, STOPP (Getselfhelp)» unter V, «Eidgenössisches Büro …» unter E
   - NHS vor NHS inform vor NICE, WHO vor WHO Europa
   - gleicher Autor nach Jahr: Linehan (1993) vor Linehan (1997)
8. **Keine Links im Block.** Die Abschnittstitel stehen als Text: weniger Tabstopps, und die Kapitelübersicht führt schon zu den Abschnitten.
9. **Grosser Satzanfang.** «Die Übung in vier Schritten …» beginnt gross, weil der Satzteil jetzt allein steht; sonst ist der Wortlaut gleich.
10. **`puk-site-anchor-end` bleibt.** Die Klasse bleibt am letzten Inhaltsabschnitt. So steht dieser Abschnitt beim Sprung über die Kapitelübersicht weiter oben im Fenster. Folge: «Aufgefallen», Nr. 1.
11. **Druck.** Für die Stufen gilt `break-inside: avoid`, damit Name, Leitsatz und Beispiel einer Stufe auf einer Seite stehen. Im ersten PDF brach Stufe 4 zwischen «Beispiel» und dem Satz.

### Korrektur 2b-2: Aufgefallen, nicht geändert

1. **Leerraum vor dem Quellenblock.**
   - Breit ist der letzte Inhaltsabschnitt mindestens eine Fensterhöhe hoch (`puk-site-anchor-end`).
   - Wo er kurz ist, steht zwischen dem letzten Absatz und dem Quellenblock Leerraum: bei 1280 × 900 px auf `kommunizieren` 321 px, auf `verstehen` 270 px (Foto).
   - Schmal entsteht kein Leerraum, weil die Abschnitte länger als das Fenster sind.
2. **Fachbegriff im Quellenblock.** Bei Dazzi et al. (2014) steht weiter «in den eingeschlossenen Studien kein statistisch signifikanter Anstieg». Das ist der Wortlaut der Quellenzeile, und Abschnitt 4 des Auftrags nennt genau diese Angabe. Im Text steht jetzt «keine nachweisbare Zunahme» (Prüfung durch die Fachstelle, Nr. 12).
3. **Eine Quelle im Text.** «(Dazzi et al., 2014)» steht im neuen Satz (Wortlaut des Auftrags). Alle anderen Quellennamen stehen nur noch im Block oder in Bildlegenden.
4. **Offene Befunde der Nachprüfung 2b-K**, die dieser Auftrag nicht nennt:
   - N2bK-1: Der Liste fehlen zwei Verdichtungen und der Bildtitel, im Kopf fehlt die Regel von 2b.
   - N2bK-2: zwei Einzelposten der Wortzahl
   - N2bK-3: die Bemerkung von c253
   - Erledigt mit Abschnitt 5 sind N2bK-4 und «Aufgefallen» 2b-K, Nr. 1, 2 und 4.
5. **Überschriften nach der Vertiefung.** In `anerkennen` folgen auf die Vertiefung «Die sechs Stufen im Detail» (h4) «Mitgefühl heisst nicht übernehmen. …» und die übrigen Absätze ohne eigene Überschrift. In der Überschriftenliste gehören sie damit formal zu dieser Vertiefung, vorher zu «Sechs Stufen der Validierung». Der Auftrag sagt «unverändert».

**Stand 11.10.2026 · Korrektur Etappe 2b-K · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-2B.md` (Entscheide der Fachstelle vom 11.10.2026 zu P2b-F-1 bis -12; Auftrag im Website-Ordner seit `ec98cc8`, Grundlage `borderline-umbau` am Stand `ac7ea04`). Geändert sind nur:

- `content/kommunizieren.html` und `content/krise.html` (und die zwei gebauten Seiten)
- der Plan in `site.config.json` (`v-ko-tassen` › `statement`, `v-ko-moment`, `v-kr-sagen` und `v-kr-danach` › `reason`)
- der Abgleich (`abgleich/kommunizieren.md`, `krise.md`, `grenzen.md`, `beziehungen.md`, `README.md`) und in `abgleich/pruefe-abgleich.mjs` eine Zeile für den Status «entfällt (2b-K)»

Die Seiten der Etappen 1 und 2a und `index` sind unverändert (`git diff` leer). Keine Prüfstufe ist «erledigt». **Nachprüfung:** Die Korrektur prüft eine Sitzung, die weder gebaut noch 2b-K umgesetzt hat. Offen bis zur Freigabe bleiben P2b-F-11 a (die Liste unten) und die fachliche Freigabe von «Zwei Tassen». Der Block von Etappe 2b steht darunter.

### Korrektur 2b-K: Stand je Punkt (Abschnitte 3 bis 7)

| Punkt | Stand | Beleg |
| --- | --- | --- |
| 3 a `belastung`, Reihenfolge | umgesetzt | Quelltext in dieser Reihenfolge: 1. «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, holen Sie sofort Hilfe und schützen sich selbst.» 2. `<p data-responsibility-inline></p>` 3. «Die Fachstelle Angehörigenarbeit bietet Beratung und Orientierung, aber keine Krisenintervention. Sie können jederzeit direkt Hilfe holen. Diese Seite ist keine notwendige Vorstufe.» 4. «Die drei Bereiche unten …». Der Satz zur Seite und Krisenberatung kommt auf `krise` nicht mehr vor (`grep`: 0) |
| 3 a `belastung`, Sätze | umgesetzt | «Die Bereiche bewerten keine Diagnose und sagen nicht voraus, wie sich eine Situation entwickeln wird.»; «Wenn Sie nicht wissen, ob die Person einen Plan hat, bedeutet das keine Sicherheit.». Abgleich: c29 und c65 «zusammengeführt (2b-K)» mit dem Satz zur Fachstelle und dem Hinweis in der Fusszeile («Diese Website ersetzt keine individuelle Abklärung, Beratung oder Behandlung.») |
| 3 b `waehrend` | unverändert | Skript (Blöcke vor und nach der Korrektur): kein Block in `waehrend` geändert; «Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» mit dem Verweis im Text direkt danach |
| 3 c `sagen` | umgesetzt | Nach «Sie müssen keine perfekten Worte finden. …»: «Bei Bedrohung oder Gewalt gehen Sie auf Abstand, bringen sich in Sicherheit und holen Hilfe über den Notruf.», direkt danach der Verweis im Text, dann die Begriffsliste. «Da sein» endet mit «Bieten Sie nur Nähe oder Erreichbarkeit an, die für Sie möglich und sicher ist.». «Wenn ein Gespräch kippt»: «Dann helfen Verbindung, …», «Ein Satz kann so klingen: «…»» und «Zum Aussteigen reicht: «…»» in einem Absatz, danach «Wie Sie ein kippendes Gespräch verlangsamen und eine Grenze in drei Teilen sagen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen».» (Link `kommunizieren.html#kippen`). Entfallen: der Satz zur Schrittfolge, die nummerierte Liste mit drei Schritten, der Satz mit der Leitstelle und der kurze Satz zu Bedrohung nach den Ausstiegssätzen. Abgleich: c106 und c279 «zusammengeführt (2b-K)», c252 und c254 bis c261 «entfällt (2b-K)» mit «verlinkt auf `kommunizieren#kippen`, P2b-F-8», c263 «Ein Satz kann so klingen:», c303 neuer Verweissatz |
| 3 d `danach` | umgesetzt | «Bei möglicher unmittelbarer Lebensgefahr holen Sie sofort Hilfe über den Notruf.», direkt danach der Verweis im Text, vor «Für die betroffene Person» |
| 3 e Ergebnis | erreicht | Sechs Verweise im Text auf `krise`: `belastung`, `waehrend`, `sagen`, `suizid`, `danach`, `bleibt` (Tabelle «Verweise im Text» unten), jeder direkt nach einer Handlungsanleitung, keiner in Figur oder Vertiefung, einer je Abschnitt (Build: kein Hinweis `inline-ref`). «Leitstelle» und «Rettungsdienst»: 0 auf `krise` (Quelltext und gebaute Seite) |
| 4 a `vermeiden` | umgesetzt | Titel «Was Sie in einer Krise vermeiden sollten», Einleitung «In einer Krise sollten Sie vermeiden,»; die sechs Listenpunkte, der Kicker «05 · Was Sie vermeiden» und der Eintrag der Kapitelübersicht unverändert |
| 4 b `suizid` | umgesetzt | Quellenzeile endet «… keine Vorhersage durch pauschale Risikostufen; WHO, Suicide: Questions and answers (2026), direktes Fragen löst nach heutigem Wissensstand keine suizidale Handlung aus.»; Text des Abschnitts unverändert (Skript: nur die Quellenzeile geändert) |
| 4 c Nachsorge | umgesetzt | «Fachliche Nachsorge und erreichbare Kontakte klärt die betroffene Person mit dem Behandlungsteam.» («Drei mögliche Anliegen»); «Vereinbarte Hilfe überprüfen: Die betroffene Person klärt mit dem Behandlungsteam, welche professionelle Unterstützung vorgesehen und erreichbar ist, wenn sie möchte, gemeinsam mit Ihnen.» («Früh erkennen und Absprachen treffen»); «Weitere Behandlungsschritte klärt die betroffene Person mit dem Behandlungsteam.» (`bleibt`). «Fachteam»: 0 auf `krise`. «Welche fachliche Nachsorge nötig ist, klärt die betroffene Person mit dem Behandlungsteam. …» in `danach` unverändert |
| 5 a «Pause statt Streit» | umgesetzt | Einleitung im Wortlaut des Auftrags; Begriffe «Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.» (gleich wie die Stellen 1 bis 3 auf `verstehen` › `anspannung`); dritte Beschreibung endet «… Stoppen Sie, und schaffen Sie Abstand.». Beschreibungen und Beispielsätze sonst unverändert, auch «Ich merke, es wird schwierig. Ich unterbreche das Gespräch jetzt.»; der Verweissatz auf `verstehen#anspannung` steht weiter nach der Liste. Ebenfalls: «Grenzen dafür, wie lange oder wann Sie sprechen, wirken am besten, …» |
| 5 b Validierung | umgesetzt | Der Satz zu fünf Formen und radikaler Echtheit entfällt (k28 «entfällt (2b-K): Zuschreibung nicht an der Quelle geprüft, P2b-F-9»); «Die Stufen sind keine Pflichtfolge, und nicht jeder Schritt passt in jedes Gespräch.»; «Übernehmen heisst hier: Aus einer Beobachtung wird …» |
| 5 c `zuhoeren` | umgesetzt | «Sie dürfen zuhören, nachfragen oder eine Pause machen und dabei Ihre eigene Sicht behalten. Ihre eigenen Anliegen bleiben wichtig.» (K-K-a3); Listenpunkt «Kurze Sätze und Pausen können helfen.» (K-K-a2); «Verschiedene Gefühle, Meinungen oder Bedürfnisse nach Nähe sind nicht automatisch ein Zeichen fehlender Liebe.» (Bestand b184). «Ein hilfreicher Satz kann unterstützen, aber die Reaktion der anderen Person nicht garantieren.» bleibt; k14 «zusammengeführt (2b-K)» damit |
| 5 d `worte` | umgesetzt | «Die folgenden Sätze sind Beispiele und nicht typisch für alle Menschen mit Borderline.» (k837) |
| 5 e Nicht ändern | eingehalten | Die vier belastenden Aussagen in `worte` vollständig, auch «Du verstehst mich sowieso nicht.»; «Typische schwierige Situationen» sichtbar (Begriffsliste in `beispiele`, Block unverändert); der Satz zu Dazzi et al. in `suizid` unverändert; Namen und «Übernehmen / Spiegeln» unverändert |
| 6 «Zwei Tassen» | umgesetzt | Linke Tasse mit Dampf und Henkel +60 Einheiten, rechte −60: Tassenkörper bei x 190–258 und 382–450 (vorher 130–198 und 442–510), freier Raum 124 Einheiten (vorher 244). Spiegelgleich zu x = 320: Für jedes Punktpaar ist die Summe der x-Werte 640 (Skript, alle 10 Pfade). Tisch und Bildausschnitt `0 60 640 200` Zeichen für Zeichen gleich; je zwei Dampflinien, Henkel aussen, gleich grosse Tassen. Nur `puk-vis-scene__ln`, `__ln--thin`, `__paper`, `__soft`; 0 Hexwerte, 0 `style`-Attribute. `p.puk-sr` und `statement`: «… stehen nebeneinander auf einem Tisch.», Rest gleich. `approvalStatus` «ausstehend». Fotos und Freundin-Test unten |
| 7 Plan | umgesetzt | `v-ko-moment`: «… «Pause statt Streit» mit den drei Sätzen der Anspannungskurve («Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.») als Begriffsliste …»; `v-kr-sagen`: Handlungsanleitung für Bedrohung mit Verweis im Text, Standardsatz und Ausstiegssätze, Schritte verlinkt auf `kommunizieren`; `v-kr-danach`: «Sicherheitshinweis als Handlungsanleitung mit Verweis im Text vor den Vertiefungen …»; `v-ko-tassen` › `statement` wie Abschnitt 6 |
| 7 Abgleich (P2b-W1-7) | umgesetzt | k25 «… «Gründe» entfällt (nachgeführt 2b-K, P2b-W1-7)»; k726 «… «und wann» fehlt im Satz bei «Nächster Schritt» …»; c190 «… «sofort» steht nur noch bei Lebensgefahr; «unabhängig vom Zeitpunkt» trägt «Nötige medizinische oder psychiatrische Hilfe hat keine Wartefrist.» …»; k572 «… die Aussage steht auch sinngemäss auf keiner neuen Seite …»; k764, k765, k968 mit der neuen Einleitung; Nr. 17 der Liste von 2b entfällt |
| 7 Abgleich, übrige Zeilen | umgesetzt | 53 Zeilen mit Status «umformuliert (2b-K)», «zusammengeführt (2b-K)», «entfällt (2b-K)» oder «neu (2b-K)» (`kommunizieren.md` 20, `krise.md` 28, `grenzen.md` 4, `beziehungen.md` 1), je mit der Nummer der Frage oder des Vorschlags und «bis 2b-K: …»; 7 Zeilen nur mit nachgeführter Bemerkung (k25, k572, k726; k758 und k776 nennen die neuen Begriffe; c1 die neue Lage in `belastung`; c283 die sechs Abschnitte mit Verweis im Text). Statuswerte in `abgleich/README.md` erklärt. Gefunden mit einem Skript, das jede Zeile aller acht Tabellen meldet, deren neue Fassung in einem geänderten oder entfallenen Block stand; Zeilen mit unverändertem Satz bleiben |

### Korrektur 2b-K: Prüfungen nach Abschnitt 8

- **`node tools/build.mjs`:** 0 blockierend, 11 Hinweise wie vorher (1 × `visual-approval`, 8 × `placeholder-approval`, `site-url`, `review-report`).
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 10 blockierend wie bisher (1 × `visual-approval`, 8 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`site-url`).
- **`node abgleich/pruefe-abgleich.mjs`:** 4502 Zeilen, 0 ohne Fundstelle.
- **«Zwei Tassen»:** bei 1280 und 360 px, je Standard und «kontrast» (vier Fotos der Abbildung, vier der Szene), angesehen; Beschreibung und Freundin-Test unten.
- **Überlauf:** `kommunizieren` und `krise` bei 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px, Vertiefungen zu und offen, beide Themes (72 Messungen): kein waagrechter Überlauf, kein Element ausserhalb des Fensters. Zoom 200 % (640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %), Vertiefungen zu und offen: ohne Überlauf.
- **Tastatur und Fokus** (1280 px, reduzierte Bewegung): Tabstopps bis zur Fusszeile `kommunizieren` 32, `krise` 25 (wie vorher; der neue Link in `sagen` ersetzt den alten); jeder mit sichtbarem Fokus und im Fenster, der erste «Zum Hauptinhalt». Vertiefungen: Enter öffnet 13 von 13, Leertaste schliesst 13 von 13; Pfeil nach unten führt in Akkordeons mit mehreren Einträgen zum nächsten Eintrag (8 von 8). «Grenzen des Bildes» öffnet mit Enter. Keine Animation nach dem Laden.
- **Druckansicht** (`print`, dazu PDF beider Seiten, angesehen): alle 13 Panels und «Grenzen des Bildes» sichtbar; die geänderten Sätze in den Vertiefungen stehen vollständig im Druck (Foto der Seite mit «Früh erkennen und Absprachen treffen»).
- **Ohne Skript:** 9 von 9 und 4 von 4 Panels sichtbar.
- **`node abgleich/bedienung.mjs`:** `kommunizieren` 32 Tabstopps, 24 625 px bei 360 px (vorher 24 890), Zwei Tassen 716 px; `krise` 25 Tabstopps, 16 671 px (vorher 16 436: zwei Verweise im Text mehr). Übrige Seiten unverändert (`index` 15 / 4636 px, `verstehen` 20, `beziehungen` 18, `grenzen` 23, `rolle` 30, `selbstfuersorge` 28).
- **Technik:** keine `style`-Attribute, keine Hexwerte, kein `tel:`, keine Telefonnummer in den zwei Quelltexten. Kontraste nicht neu gemessen: Farben und Klassen sind unverändert (2b: tiefster Textwert 4,71 : 1, Linien 4,71 und 10,08 : 1).
- **Keine Änderung an Etappe 1, 2a und `index`:** `git diff` für `content/` und die gebauten Seiten von `index`, `verstehen`, `beziehungen`, `grenzen`, `rolle`, `selbstfuersorge`: leer.
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Korrektur 2b-K: Wörter im Lesefluss vorher und nachher (Zählweise C1)

C1 wie in der Selbstprüfung 2b und der Prüfrunde 2b (Absätze, Listenpunkte und Begriffslisten in `<main>`, ohne Überschriften, Kicker, Bezeichnungen, Text nur für Screenreader und Quellenzeilen; im Lesefluss ohne die Panels der Akkordeons; Skript im Browser). «Vorher» ist der geprüfte Stand `26af566`; das Skript ergibt dort genau die Werte der Selbstprüfung 2b und der Prüfrunde 2b (2458 und 1507, je Abschnitt gleich). Der Verweis im Text ist ein Absatz und zählt mit (24 Wörter).

| Seite › Abschnitt | C1 im Lesefluss vorher | C1 im Lesefluss nachher | Differenz | C1 mit Vertiefungen vorher → nachher |
| --- | ---: | ---: | ---: | --- |
| **`kommunizieren`** | **2458** | **2432** | **−26** | 3126 → 3100 |
| Kopf | 28 | 28 | 0 | – |
| `zuhoeren` | 193 | 176 | −17 | 278 → 261 |
| `anerkennen` | 623 | 613 | −10 | 990 → 980 |
| `moment` | 372 | 374 | +2 | 372 → 374 |
| `kippen` | 419 | 419 | 0 | 536 → 536 |
| `worte` | 270 | 269 | −1 | 270 → 269 |
| `beispiele` | 516 | 516 | 0 | 516 → 516 |
| `rollen` | 37 | 37 | 0 | 136 → 136 |
| **`krise`** | **1507** | **1522** | **+15** | 1919 → 1945 |
| Kopf | 36 | 36 | 0 | – |
| `belastung` | 289 | 302 | +13 | 289 → 302 |
| `waehrend` | 215 | 215 | 0 | 215 → 215 |
| `sagen` | 263 | 239 | −24 | 263 → 239 |
| `suizid` | 182 | 182 | 0 | 182 → 182 |
| `vermeiden` | 57 | 56 | −1 | 57 → 56 |
| `danach` | 259 | 286 | +27 | 671 → 709 |
| `bleibt` | 206 | 206 | 0 | 206 → 206 |

- **Gründe:** `zuhoeren` K-K-a3 (−6), K-K-a2 (−7), Bestandswortlaut b184 (−4); `anerkennen` Satz zu Linehan (−12, P2b-F-9), «Die Stufen sind» und «heisst hier» (+2); `moment` Einleitung (+3), Sätze der Kurve als Begriffe (+8), Satz zu den Grenzen (+6), Ausstiegssatz bei «Es ist gerade zu viel.» (−15, K-K-a1); `belastung` Unsicherheit in der Handlungsanleitung (+10), Subjekt (+1), Satz zum Plan (+8), Satz zur Seite und Krisenberatung (−6); `sagen` Schrittfolge mit Einleitung (−47), zwei Sätze zu Bedrohung (−22), kürzere Einleitung des Standardsatzes (−2), Handlungsanleitung (+18), Verweis im Text (+24), längerer Verweissatz (+5); `danach` Verweis im Text (+24), «über den Notruf» (+3), in den Vertiefungen Nachsorge mit Subjekt (+11); `vermeiden` Einleitung (−1).
- **Weitere Kennzahlen:** `kennzahlen.mjs` gesamt `kommunizieren` 3370 → 3344, `krise` 2075 → 2117; im Lesefluss 2702 → 2676 und 1663 → 1694. Sätze im Lesefluss (C1) `kommunizieren` 258 → 251, mit Verneinung 70 → 68 (27 %); `krise` 159 → 153, mit Verneinung 39 → 37 (24 %). `verneinung.mjs`: `kommunizieren` 83 von 402 → 81 von 395 (21 %), `krise` 52 von 241 → 50 von 235 (21 %). Absicherungen je 100 Wörter 2,64 → 2,69 und 2,17 → 2,13. Semikolons 0 und 1 wie vorher.
- **Ziel «höchstens etwa 2500»** (Bauauftrag 2b) weiter erreicht: 2432 und 1522.

### Korrektur 2b-K: Verweise im Text

Jeder Verweis im Text steht direkt nach einer Handlungsanleitung (Skript: Element unmittelbar vor dem Platzhalter). Lage bei 360 × 800 px, gemessen nach dem Laden der Schriften: Oberkante des Verweises ab Anfang des Abschnitts und ab dem Abschnittstitel, Unterkante ab Anfang des Abschnitts, Lage auf der Seite. Beim Sprung über die Kapitelübersicht steht der Abschnitt oben im Fenster; bei einer Unterkante unter 800 px ist der Verweis dann ohne Scrollen ganz sichtbar (Foto `sagen`).

| Nr. | Seite › Abschnitt | Handlungsanleitung direkt davor | ab Abschnitt / ab Titel | Unterkante ab Abschnitt | Lage auf der Seite | Stand |
| --- | --- | --- | ---: | ---: | ---: | --- |
| 1 | `kommunizieren` › `kippen` | «Bei Bedrohung oder Gewalt beenden Sie das Gespräch, schaffen Abstand und bringen sich in Sicherheit.» | 605 / 521 px | 761 px | 13 056 von 24 625 px | wie 2b |
| 2 | `kommunizieren` › `worte` | «Eine Aussage wie «Wenn du gehst, bringe ich mich um» gehört nicht in eine Liste von Vorwürfen. Nehmen Sie sie ernst, und holen Sie eine professionelle Einschätzung oder Hilfe dazu. Versuchen Sie nicht, Motiv oder Gefährdung allein zu beurteilen.» | 1855 / 1771 px | 2011 px | 17 912 px | wie 2b |
| 3 | `krise` › `belastung` | «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, holen Sie sofort Hilfe und schützen sich selbst.» | 319 / 237 px | 475 px | 1663 von 16 671 px | Handlungsanleitung geändert, jetzt erster Absatz |
| 4 | `krise` › `waehrend` | «Begrenzen Sie den Zugang zu Medikamenten oder gefährlichen Gegenständen nur ohne Eigengefährdung, möglichst gemeinsam und nach professioneller Anleitung. Nehmen Sie nichts aus der Hand oder gegen Widerstand weg; greifen Sie nicht körperlich ein. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | 807 / 724 px | 963 px | 4693 px | wie 2b |
| 5 | `krise` › `sagen` | «Bei Bedrohung oder Gewalt gehen Sie auf Abstand, bringen sich in Sicherheit und holen Hilfe über den Notruf.» | 453 / 370 px | 609 px | 6215 px | neu (P2b-F-1 c) |
| 6 | `krise` › `suizid` | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Das kann helfen, die Lage zu verstehen. Zum Beispiel: «Ich mache mir Sorgen um dich. Denkst du gerade daran, dir das Leben zu nehmen?»» | 438 / 354 px | 594 px | 8408 px | wie 2b |
| 7 | `krise` › `danach` | «Krisen verlaufen unterschiedlich. Ein ruhigerer Eindruck oder verstrichene Zeit beweist keine Sicherheit. Bei erneuter Sorge holen Sie eine professionelle Einschätzung. Bei möglicher unmittelbarer Lebensgefahr holen Sie sofort Hilfe über den Notruf.» | 404 / 321 px | 560 px | 11 062 px | neu (P2b-F-1 b) |
| 8 | `krise` › `bleibt` | «Bei akuter Gefahr schützen Sie sich und holen sofort Hilfe.» | 801 / 717 px | 957 px | 14 818 px | wie 2b |

Auf `krise` stehen damit sechs Verweise im Text in sieben Abschnitten (ohne `vermeiden`), bei 360 px im Abstand von 1522 bis 3756 px. Nr. 4 und 8 beginnen knapp unter dem ersten Bildschirm (807 und 801 px ab Abschnitt); davor stehen die Handlungsanleitung und die Liste der Hinweise. Weitere Handlungsanleitungen ohne eigenen Verweis: «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» (`bleibt`, Kinder; der Abschnitt hat schon einen).

### Korrektur 2b-K: «Zwei Tassen» nach dem Verschieben

**Bildschirmfotos** (Chromium, Faktor 2): Abbildung und Szene bei 1280 und 360 px, Standard und «kontrast», alle angesehen.

- **1280 px:** Die zwei Tassen stehen jetzt im mittleren Drittel des Tisches, zwischen ihnen knapp zwei Tassenbreiten Platz (124 Einheiten, im Bild 147 px); links und rechts bleibt Tisch frei. Die Sätze stehen weiter über ihrer Tasse: Der linke Satz (88–390 px im Fenster) endet über der linken Tasse (313–395 px), der rechte (546–848 px) beginnt über der rechten Tasse (541–623 px); die blaue Randlinie des rechten Satzes steht fast genau über dem linken Rand der rechten Tasse. Die Hinterkante des Tisches läuft hinter beiden Tassen durch.
- **360 px:** Die Sätze stehen untereinander über der Zeichnung; die Tassen sind 34 px breit, etwa 62 px auseinander, klar als zwei gleiche dampfende Tassen erkennbar. Welche Tasse welchen Satz sagt, ergibt sich weiter nur aus der Reihenfolge (die Kurzbeschreibung nennt es).
- **«kontrast»:** Linien dunkler, Tischfläche und Tassen gleich; nichts verschwindet.

**Freundin-Test (bauende Sitzung):** besteht. Vorher standen die Tassen an den Tischenden mit leerer Mitte; das konnte als Abstand gelesen werden. Jetzt stehen sie nahe beisammen am selben Tisch, gleich gross, die Henkel spiegelbildlich nach aussen: zwei Menschen, die zusammen Tee trinken, auch wenn der eine Satz hart ist. Eine Angehörige könnte das Bild einer Freundin zeigen und sagen: «So möchte ich antworten, am selben Tisch, ohne mich zu verteidigen.» Ohne die Sätze bleibt es ein ruhiges Stillleben; die Aussage tragen die zwei Sätze.

**Visualisierungs-Check `v-ko-tassen`** (Selbstprüfung, keine Prüfstufe; E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar). Geändert gegenüber 2b sind die Punkte 1, 2, 8, 9, 12 und 17.

| Nr. | Prüfpunkt | `v-ko-tassen` | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | Build ohne Hinweis `visual-plan`; `statement` «Zwei gleich grosse Tassen Tee stehen nebeneinander auf einem Tisch. …» wie die Zeichnung und `p.puk-sr` | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | je 7 Zeilen; `v-ko-moment`, `v-kr-sagen`, `v-kr-danach` nennen die neuen Fassungen (Abschnitt 7 des Auftrags) | – |
| 3 | Prüffrage beantwortet und eingelöst | E | `understood` unverändert; das Satzpaar zeigt Anerkennen ohne Zustimmen | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | Kernaussage und Kurztext unverändert sichtbar | – |
| 5 | Ansatzpunkt (B, C, G) | – | Illustration (Muster D) | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | einzige Abbildung der Seite; «Pause statt Streit» als Text mit den Sätzen der Anspannungskurve, keine zweite Kurve | – |
| 7 | Kartenraster-Check | E | keine Kastenreihe | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | zwei gleich grosse Tassen, spiegelgleich zu x = 320, nahe beisammen auf demselben Tisch, beide dampfen; keine ist grösser, höher oder näher | – |
| 9 | Verteilt, keine Textwand | T | eine Abbildung, wie entschieden; `kommunizieren` 2432 Wörter im Lesefluss (C1), 24 625 px bei 360 px | Fachstelle (Länge) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle | E | «Grenzen des Bildes» und Quelle unverändert | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | SVG ohne Animation; Sätze, Kernaussage und Kurztext sind HTML-Text | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | kein Überlauf bei 320 und 360 px; Kurzbeschreibung «… stehen nebeneinander auf einem Tisch. …» über `aria-describedby` | – |
| 13 | Theme «kontrast» geprüft | E | Fotos bei 1280 und 360 px; Klassen unverändert, keine festen Farben | – |
| 14 | Inhalt fachlich freigegeben | N | `approvalStatus` «ausstehend»; Gate production `visual-approval` | Fachstelle (P2b-F-11 b) |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | Wiedererkennen beim harten Satz, Entlastung bei der Antwort; die Nähe der Tassen stützt «zugewandt» | – |
| 16 | Ein Bild, eine Idee; Beschriftungen nennen Erleben | E | zwei gesprochene Sätze, kein Bildteil beschriftet | – |
| 17 | Keine ungewollten Bedeutungen | T | Die leere Mitte (Abstand, Kühle) ist behoben; Plan und Kurzbeschreibung sagen jetzt «nebeneinander», wie gezeichnet. Bleibt: Tee kann ein ruhiges Gespräch nahelegen, schmal ist die Zuordnung der Sätze nur über die Reihenfolge erkennbar | R2 |

### Korrektur 2b-K: Neue Sätze zur Freigabe (vollständig, Stand nach Freigabe 2b)

Grundlage für die Freigabe durch die Fachstelle (P2b-F-11 a). Die Liste ersetzt die Liste von 2b darunter. Sie enthält alle Sätze von `kommunizieren`, `krise` und `index`, die nicht im Wortlaut aus dem Bestand stammen, und alle Sätze, die in dieser Korrektur neu gefasst sind. Einzelne Bestandssätze in einfacher Sprache («umformuliert (2b)») stehen nur im Abgleich (Regel der Liste von 2b). Seit der Freigabe 2b enthält sie auch die sieben Verweissätze auf `verstehen`, `beziehungen`, `grenzen` und `selbstfuersorge` (`FREIGABE-ETAPPE-2B.md`, Abschnitt 4). Die Nummern von 2b bleiben; neue Einträge tragen einen Buchstaben, in der Nähe ihres Orts. Jedes Zitat ist per Skript wörtlich auf der gebauten Seite gefunden (nach Freigabe 2b: 134 Stellen in «…» der Spalte «Satz» in 102 Zeilen, dieselbe Zählung ergibt am Stand `31215a8` 119 Stellen in 90 Zeilen; nach Korrektur 2b-2: 119 Stellen in «…» der Spalte «Satz»; dieselbe Zählung ergibt am Stand vor 2b-2 97, die Selbstprüfung 2b-K nannte 98). **Stand:** «wie 2b» = unverändert aus der Liste von 2b · «geändert (2b-K)» = Satz in dieser Korrektur neu gefasst · «neu (2b-K)» = Satz neu in dieser Korrektur. **Nachgeführt mit Korrektur 2b-2** (`KORREKTUR-ETAPPE-2B2.md`, Abschnitt 6): «geändert (2b-2)», «neu (2b-2)» und «verschoben (2b-2)» bei Nr. 14b, 14c, 20, 35, 36a, 42, 43a, 53a und 54a; darunter die zwei geänderten Sätze aus Abschnitt 5 (Nr. 35 und 53a). **Nachgeführt mit der Freigabe 2b** (`FREIGABE-ETAPPE-2B.md`, Abschnitt 3 e, N2bK-1): die Regel von 2b im Kopf; nachgetragen Nr. 8a (Bildtitel), 20a und 29b (zwei Verdichtungen aus 2b); geändert Nr. 14c (Form, Abschnitt 3 a), 14d (Abschnitt 3 b) und 29a (Abschnitt 3 d); neu Nr. 71 bis 77 (Verweissätze, Abschnitt 4). Stand zusätzlich: «nachgetragen (2b-F)» = Satz seit 2b unverändert auf der Seite, in der Liste nachgetragen · «geändert (2b-F)» = mit der Freigabe 2b neu gefasst · «neu (2b-F)» = neu mit der Freigabe 2b. **Abgleich:** k = `kommunizieren.md`, c = `krise.md`, i = `index.md`, g = `grenzen.md`, b = `beziehungen.md`, r = `rolle.md`, v = `verstehen.md`, s = `selbstfuersorge.md`.

**Nicht mehr in der Liste** (Satz entfällt): Nr. 17 (Einleitung mit den drei Lagen; ersetzt durch Nr. 17a und 17b, P2b-F-5), Nr. 44 (Satz zur Seite und Krisenberatung, P2b-F-6), Nr. 50 (Satz zur Schrittfolge, P2b-F-8).

| Nr. | Satz | Ort | Art | Stand | Abgleich |
| --- | --- | --- | --- | --- | --- |
| 1 | «Zuhören und die eigene Sicht behalten» (Abschnittstitel) | `kommunizieren` › `zuhoeren` | Auftrag (Abschnitt 3) | wie 2b | k957 |
| 1a | «Sie dürfen zuhören, nachfragen oder eine Pause machen und dabei Ihre eigene Sicht behalten. Ihre eigenen Anliegen bleiben wichtig.» | `kommunizieren` › `zuhoeren` | Auftrag 2b-K, Abschnitt 5 c (K-K-a3, P2b-F-12) | neu (2b-K) | k5, k12, k20, k21 |
| 1b | «Kurze Sätze und Pausen können helfen.» (Listenpunkt; der zweite Satz zur Reaktion entfällt, die Aussage trägt «Ein hilfreicher Satz kann unterstützen, aber die Reaktion der anderen Person nicht garantieren.») | `kommunizieren` › `zuhoeren` | Auftrag 2b-K, Abschnitt 5 c (K-K-a2, P2b-F-12) | geändert (2b-K) | k14 |
| 2 | «Fragen Sie, was gerade gewünscht ist:» (Einleitung) | `kommunizieren` › `zuhoeren`, «Was Sie tun können» | neu | wie 2b | k958 |
| 3 | «Und wenn Sie verschieden empfinden:» (Einleitung) | ebenda | neu | wie 2b | k959 |
| 4 | «Verschiedene Gefühle, Meinungen oder Bedürfnisse nach Nähe sind nicht automatisch ein Zeichen fehlender Liebe.» | `kommunizieren` › `zuhoeren` | Auftrag 2b-K, Abschnitt 5 c (Bestandswortlaut) | geändert (2b-K) | b184 |
| 5 | «Fragen zum Innehalten» (Titel der Vertiefung) | `kommunizieren` › `zuhoeren` | neu | wie 2b | k960 |
| 6 | «Vor einer Antwort kann es helfen, kurz innezuhalten.» | ebenda, Vertiefung | neu | wie 2b | k961 |
| 7 | «Die Fragen sind ein Angebot:» | ebenda, Vertiefung | neu | wie 2b | k962 |
| 8 | «Wie eine Reaktion zum neuen Anlass werden kann, erklärt die Seite «Beziehungen» im Abschnitt «Nicht nur was geschieht, sondern was es bedeutet».» | ebenda, Vertiefung | Verweissatz | wie 2b | k963 |
| 8a | «Abbildung 1 · Zuhören, ohne zuzustimmen» (Bildtitel) | `kommunizieren` › `anerkennen`, Abbildung 1 | Auftrag (Bauauftrag 2b, Abschnitt 4) | nachgetragen (2b-F) | keine eigene Zeile (Bildtitel, wie die übrigen Bildtitel) |
| 9 | «Sie können ein Gefühl anerkennen, ohne die Deutung zu übernehmen.» (Kernaussage) | `kommunizieren` › `anerkennen`, Abbildung 1 | Auftrag (Abschnitt 4) | wie 2b | k663 |
| 10 | «Sie können sagen, dass der Schmerz echt ist, ohne die ganze Erklärung zu teilen oder pauschale Schuld zu übernehmen.» (Kurztext) | ebenda | Auftrag (Abschnitt 4) | wie 2b | k667 |
| 11 | «Zeichnung: Zwei Tassen Tee stehen nebeneinander auf einem Tisch. Über der linken steht der Satz «Du verstehst mich sowieso nicht.», über der rechten «Vielleicht verstehe ich nicht alles. Wenn du möchtest, sag mir, was dir gerade besonders wichtig ist.»» (Kurzbeschreibung) | `kommunizieren` › `anerkennen`, Abbildung 1 | Auftrag 2b-K, Abschnitt 6 (P2b-F-11 b) | geändert (2b-K) | k964 |
| 12 | «Wenn Sie zugleich eine Grenze brauchen:» (Einleitung) | `kommunizieren` › `anerkennen`, «Was Sie tun können» | neu | wie 2b | k965 |
| 13 | «Eine pauschale Schuldzuweisung müssen Sie nicht übernehmen, etwa mit «Du hast recht, ich bin an allem schuld.» oder «Okay, dann mache ich es so, wie du willst.»» | `kommunizieren` › `anerkennen` | Verdichtung | wie 2b | k650, k653, k654 |
| 14 | «Sechs Stufen der Validierung» (Zwischentitel) | `kommunizieren` › `anerkennen` | neu | wie 2b | k966 |
| 14a | «Die Stufen sind keine Pflichtfolge, und nicht jeder Schritt passt in jedes Gespräch.» | `kommunizieren` › `anerkennen` | Auftrag 2b-K, Abschnitt 5 b | geändert (2b-K) | k30 |
| 14b | «Stufe 1» bis «Stufe 6» (kleine Bezeichnungen), die Namen der Stufen als Zwischentitel ohne Nummer davor («Aufmerksam sein», «Spiegeln», «Zwischen den Zeilen verstehen», «Im biografischen Kontext verstehen», «Im aktuellen Kontext nachvollziehen», «Radikale Echtheit: auf Augenhöhe bleiben») und die Bezeichnung «Beispiel» je Stufe | `kommunizieren` › `anerkennen`, Sechs Stufen | Auftrag 2b-2, Abschnitt 3 | neu (2b-2) | k33, k51, k67, k82, k96, k113 |
| 14c | «Die sechs Stufen im Detail» (Zwischentitel; bis 2b-F Titel der Vertiefung) über einer Vertiefung mit sechs Einträgen «Stufe 1 · Aufmerksam sein» bis «Stufe 6 · Radikale Echtheit: auf Augenhöhe bleiben» (bis 2b-F Teile eines Eintrags); darin die Bezeichnung «Weiterer Beispielsatz» (von der bauenden Sitzung, bis 2b-2 Beispielsätze) | `kommunizieren` › `anerkennen`, Vertiefung | Auftrag 2b-2, Abschnitt 3; Bezeichnung neu; Form: Freigabe 2b, Abschnitt 3 a | neu (2b-2), Form geändert (2b-F) | k42, k59, k75, k90, k104, k121 |
| 14d | «Mitgefühl heisst nicht übernehmen» (Zwischentitel auf der Ebene von «Sechs Stufen der Validierung»; bis 2b-F erster Satz des Absatzes, der jetzt mit «Sie können Beobachtungen vorsichtig spiegeln, …» beginnt) | `kommunizieren` › `anerkennen` | Freigabe 2b, Abschnitt 3 b | geändert (2b-F) | g663, g664 |
| 15 | «Übernehmen heisst hier: Aus einer Beobachtung wird die Annahme, Sie müssten das Erleben oder die Situation der anderen Person lösen.» | `kommunizieren` › `anerkennen` | Auftrag 2b-K, Abschnitt 5 b | geändert (2b-K) | g679, g683, g692 |
| 16 | «Der richtige Moment» (Abschnittstitel) | `kommunizieren` › `moment` | Auftrag (Abschnitt 3) | wie 2b | k967 |
| 17a | «Drei Stellen der Anspannungskurve können eine Orientierung geben, ob ein Gespräch gerade trägt.» (ersetzt Nr. 17) | `kommunizieren` › `moment` | Auftrag 2b-K, Abschnitt 5 a (P2b-F-5) | neu (2b-K) | k764, k968 |
| 17b | «Diese Stellen sind keine festen Stufen und erlauben keine sichere Beurteilung, wie es einem Menschen innerlich geht.» | `kommunizieren` › `moment` | Auftrag 2b-K, Abschnitt 5 a (P2b-F-5) | neu (2b-K) | k765 |
| 17c | «Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.» (Begriffe der Begriffsliste, Sätze der Anspannungskurve von `verstehen`, freigegeben mit Etappe 1) | `kommunizieren` › `moment`, «Pause statt Streit» | Auftrag 2b-K, Abschnitt 5 a (P2b-F-5) | neu (2b-K) | k770, k778, k784 |
| 18 | «Ein Gespräch ist möglich, Zuhören funktioniert, der Körper ist entspannt.» | `kommunizieren` › `moment`, «Wir können sprechen.» | Verdichtung | wie 2b | k771 bis k773 |
| 19 | «Die Stimme wird lauter, Vorwürfe beginnen, der Körper spannt sich an.» | `kommunizieren` › `moment`, «Es wird eng.» | Verdichtung | wie 2b | k779 bis k781 |
| 19a | «Stoppen Sie, und schaffen Sie Abstand.» (Ende der Beschreibung; der Beispielsatz danach entfällt) | `kommunizieren` › `moment`, «Es ist gerade zu viel.» | Auftrag 2b-K, Abschnitt 5 a (K-K-a1, P2b-F-12) | geändert (2b-K) | k787 bis k789, k659, k803 |
| 20 | «Wie Anspannung in einem Gespräch steigen und wieder sinken kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | `kommunizieren` › `moment`, «Pause statt Streit», seit 2b-2 direkt nach der Einleitung | Verweissatz (Ort: Auftrag 2b-2, Abschnitt 5) | verschoben (2b-2) | k969 |
| 20a | «Legen Sie sich einen Satz für eine Pause zurecht, der für Sie natürlich klingt und kein Versprechen enthält, zurückzukommen.» | `kommunizieren` › `moment`, «Was Sie tun können» | Verdichtung | nachgetragen (2b-F) | k807, k808, k931 |
| 21 | «Dann müssen Sie ihn unter Anspannung nicht erst suchen.» | `kommunizieren` › `moment`, «Was Sie tun können» | Verdichtung | wie 2b | k807, k808 |
| 22 | «Jetzt Sicherheit oder Pause, später Klärung» (Zwischentitel) | `kommunizieren` › `moment` | Verdichtung | wie 2b | k131 |
| 23 | «Dafür sind Sie nicht verantwortlich, auch wenn Sie versuchen, die Lage zu beruhigen.» | `kommunizieren` › `moment` | Verdichtung | wie 2b | k134 |
| 24 | «Auch wer verletzend war, kann später Verantwortung übernehmen:» (Einleitung) | `kommunizieren` › `moment` | neu | wie 2b | k970 |
| 24a | «Grenzen dafür, wie lange oder wann Sie sprechen, wirken am besten, wenn Sie sie in einer ruhigen Situation ankündigen, nicht mitten in einem Konflikt.» | `kommunizieren` › `moment` | Auftrag 2b-K, Abschnitt 5 a | geändert (2b-K) | g208 |
| 25 | «Wenn aus einem Austausch plötzlich Streit, Rückzug oder Rechtfertigung wird, können kurze Schritte helfen.» | `kommunizieren` › `kippen` | Verdichtung | wie 2b | k211, k692, k699 |
| 26 | «Bei Bedrohung oder Gewalt beenden Sie das Gespräch, schaffen Abstand und bringen sich in Sicherheit.» (vor dem Verweis im Text) | `kommunizieren` › `kippen` | Verdichtung | wie 2b | k150, k719, k796, k925 |
| 27 | «Was bei Gewalt wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `kommunizieren` › `kippen` | Verweissatz | wie 2b | k971 |
| 28 | «Sie können auch sagen, was Sie tun:» (Einleitung zu «Ich spreche langsamer.») | `kommunizieren` › `kippen`, Schritt 1 | neu | wie 2b | k972 |
| 29 | «Eine Grenze in drei Teilen» (Zwischentitel) und «Drei kurze Teile helfen, eine Grenze klar zu sagen, ohne in lange Rechtfertigungen oder in Streit zu geraten.» | `kommunizieren` › `kippen` | Verdichtung | wie 2b | g575, g576, g581, g595 bis g597 |
| 29a | «Nennen Sie einen Schritt, den Sie selbst in der Hand haben.» (bei «Nächster Schritt»; der Beispielsatz danach entfällt, K-K-a1) | `kommunizieren` › `kippen`, «Eine Grenze in drei Teilen» | Freigabe 2b, Abschnitt 3 d | geändert (2b-F) | g590, g591, k726, c274 |
| 29b | «Schreiben Sie zwei oder drei typische Grenzsätze vorab auf, und üben Sie sie laut in Ihrer eigenen Sprache.» | `kommunizieren` › `kippen`, «Was Sie tun können» | Verdichtung | nachgetragen (2b-F) | g599, g600, k723, k929 |
| 30 | «Wie Sie ein Anliegen in Ruhe vorbereiten, steht auf der Seite «Grenzen» im Abschnitt «DEAR: ein Anliegen klar formulieren».» | `kommunizieren` › `kippen` | Verweissatz | wie 2b | k973 |
| 31 | «Beispiel-Dialog: von der Anspannung bis zur Pause» (Titel der Vertiefung) | `kommunizieren` › `kippen` | Verdichtung | wie 2b | k892 |
| 32 | «Harte oder vorwurfsvolle Aussagen können treffen und Angehörige stark verunsichern.» | `kommunizieren` › `worte` | Verdichtung | wie 2b | k828, k835 |
| 32a | «Die folgenden Sätze sind Beispiele und nicht typisch für alle Menschen mit Borderline.» | `kommunizieren` › `worte` | Auftrag 2b-K, Abschnitt 5 d | geändert (2b-K) | k837 |
| 33 | «Wie Sie Suizidgedanken direkt ansprechen können, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Suizidgedanken ein Thema sind».» | `kommunizieren` › `worte` | Verweissatz (Abschnitt 3) | wie 2b | k974 |
| 34 | «So könnte es klingen» (Abschnittstitel) | `kommunizieren` › `beispiele` | Auftrag (Abschnitt 3) | wie 2b | k975 |
| 35 | «Die Namen bezeichnen keine festen Rollen und lassen sich nicht aus einer Diagnose ableiten.» | `kommunizieren` › `beispiele` | Verdichtung; Wortlaut Auftrag 2b-2, Abschnitt 5 | geändert (2b-2) | r149, k265 |
| 36 | «Nach einem Arztbesuch» (Titel des Beispiels) | `kommunizieren` › `beispiele` | neu | wie 2b | k507 |
| 36a | «Kim fühlt sich nach einem Arztbesuch nicht gehört.», «Sascha möchte nach dem Erleben fragen, ohne eine Erklärung oder Lösung vorauszusetzen.», «Sascha muss den Arztbesuch nicht beurteilen oder eine Lösung finden, um zuzuhören.» und die Bezeichnungen «Kim» und «Sascha» (bis 2b-2 Person A und Person B) | `kommunizieren` › `beispiele`, «Nach einem Arztbesuch» | Auftrag 2b-2, Abschnitt 5 | geändert (2b-2) | k551, k552, k518 |
| 37 | «Robin kommt um 20 Uhr.» | ebenda | Verdichtung | wie 2b | k382 |
| 38 | «Robin, wenn Zeit für ein Gespräch ist» und «Robin, wenn die Kraft nicht mehr reicht» (Bezeichnungen) | ebenda | neu | wie 2b | k976, k977 |
| 39 | «Eine Bitte um Geld» (Titel) und «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» | `kommunizieren` › `beispiele` | Verdichtung | wie 2b | g209, g214 |
| 40 | «Wie Sie nach einem Konflikt Kontakt anbieten können, steht auf der Seite «Ihre Rolle» im Abschnitt «Nach Konflikten und Rückzug».» | `kommunizieren` › `beispiele` | Verweissatz | wie 2b | k978 |
| 41 | «Weitere Beispiele stehen auf der Seite «Grenzen» im Abschnitt «Sätze für typische Situationen».» | `kommunizieren` › `beispiele` | Verweissatz | wie 2b | k979 |
| 42 | «Die Beispiele sind eigene didaktische Ableitungen aus den Ansätzen auf dieser Seite, kein auf Wirksamkeit geprüftes Übungsprogramm.» (seit 2b-2 ohne die Bezeichnung Grundlage) | `kommunizieren` › `beispiele` | Verdichtung; Auftrag 2b-2, Abschnitt 4 | geändert (2b-2) | k263, k264 |
| 43 | «Wie sich Grenzen je nach Rolle unterscheiden, steht auf der Seite «Grenzen» im Abschnitt «Grenzen in verschiedenen Angehörigenrollen».» | `kommunizieren` › `rollen` | Verweissatz | wie 2b | k980 |
| 43a | «Quellen zu dieser Seite» (Eintrag des Akkordeons am Seitenende) und «Verwendet in:» mit den Abschnittstiteln (Angabe je Quelle) | `kommunizieren`, `krise` und die fünf Seiten der Etappen 1 und 2a, Block am Seitenende (`#quellen`) | Auftrag 2b-2, Abschnitt 4 | neu (2b-2) | Ort `seite#quellen` |
| 44a | «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, holen Sie sofort Hilfe und schützen sich selbst.» (erster Absatz, vor dem Verweis im Text) | `krise` › `belastung` | Auftrag 2b-K, Abschnitt 3 a (P2b-F-2, -6) | neu (2b-K) | c2, c68 |
| 45 | «Sie können jederzeit direkt Hilfe holen.» | `krise` › `belastung` | Verdichtung | wie 2b | c11 |
| 45a | «Die Bereiche bewerten keine Diagnose und sagen nicht voraus, wie sich eine Situation entwickeln wird.» | `krise` › `belastung` | Auftrag 2b-K, Abschnitt 3 a | geändert (2b-K) | c34 |
| 45b | «Wenn Sie nicht wissen, ob die Person einen Plan hat, bedeutet das keine Sicherheit.» | `krise` › `belastung` | Auftrag 2b-K, Abschnitt 3 a | geändert (2b-K) | c69 |
| 46 | «Während einer Krise» (Abschnittstitel) | `krise` › `waehrend` | Auftrag (Abschnitt 5) | wie 2b | c72 |
| 47 | «Im Gespräch» (Zwischentitel) | `krise` › `waehrend` | neu | wie 2b | c300 |
| 48 | «Wenn ein Gespräch kippt» (Zwischentitel) | `krise` › `sagen` | neu | wie 2b | c301 |
| 49 | «Wie Sie Gefühle anerkennen können, ohne zuzustimmen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Anerkennen, ohne zuzustimmen».» | `krise` › `sagen` | Verweissatz (Abschnitt 5) | wie 2b | c302 |
| 49a | «Bei Bedrohung oder Gewalt gehen Sie auf Abstand, bringen sich in Sicherheit und holen Hilfe über den Notruf.» (vor dem Verweis im Text) | `krise` › `sagen` | Auftrag 2b-K, Abschnitt 3 c (P2b-F-1) | neu (2b-K) | c106, c279 |
| 51 | «Ein Satz kann so klingen:» und «Zum Aussteigen reicht:» (Einleitungen) | `krise` › `sagen` | Auftrag 2b-K, Abschnitt 3 c (P2b-F-8) und neu | geändert (2b-K) | c263, c275, c276 |
| 52 | «Wie Sie ein kippendes Gespräch verlangsamen und eine Grenze in drei Teilen sagen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen».» | `krise` › `sagen` | Verweissatz (Auftrag 2b-K, Abschnitt 3 c, P2b-F-8) | geändert (2b-K) | c303 |
| 53 | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat.» «Das kann helfen, die Lage zu verstehen.» «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» | `krise` › `suizid` | Auftrag (Wortlaut von `verstehen`, Abschnitt 2b und 5) | wie 2b | c304 bis c307 |
| 53a | «Eine Übersicht über mehrere Studien (Dazzi et al., 2014) fand keine nachweisbare Zunahme von Suizidgedanken durch direktes Fragen.» (bis 2b-2 Bestandswortlaut) | `krise` › `suizid` | Auftrag 2b-2, Abschnitt 5 | geändert (2b-2) | c120 |
| 54 | «Diese Beurteilung ist Aufgabe von Fachpersonen, nicht von Angehörigen.» | `krise` › `suizid` | Verdichtung | wie 2b | c125 |
| 54a | «WHO, Suicide: Questions and answers (2026)» mit «Verwendet in: «Wenn Suizidgedanken ein Thema sind» (direktes Fragen löst nach heutigem Wissensstand keine suizidale Handlung aus)» (bis 2b-2 Teil der Quellenzeile von `suizid`, ergänzt in 2b-K) | `krise`, Block «Quellen zu dieser Seite» | Auftrag 2b-K, Abschnitt 4 b (P2b-F-4); Ort Auftrag 2b-2, Abschnitt 4 | verschoben (2b-2) | c123, c124 |
| 55 | «Was Sie in einer Krise vermeiden sollten» (Abschnittstitel) und «In einer Krise sollten Sie vermeiden,» (Einleitung) | `krise` › `vermeiden` | Auftrag 2b-K, Abschnitt 4 a (P2b-F-3) | geändert (2b-K) | c126, c308 |
| 55a | «Bei möglicher unmittelbarer Lebensgefahr holen Sie sofort Hilfe über den Notruf.» (vor dem Verweis im Text) | `krise` › `danach` | Auftrag 2b-K, Abschnitt 3 d (P2b-F-1) | geändert (2b-K) | c139, c190 |
| 56 | «Nach einer Krise können Scham, Reue, Erleichterung, Ärger, Rückzug oder ganz andere Reaktionen auftreten.» | `krise` › `danach` | Auftrag (Wortlaut von `rolle`, Abschnitt 2b) | wie 2b | c141 |
| 57 | «Welche fachliche Nachsorge nötig ist, klärt die betroffene Person mit dem Behandlungsteam. Dabei kann auch geklärt werden, welche Rolle Sie freiwillig übernehmen können.» | `krise` › `danach` | Verdichtung | wie 2b | c149 |
| 57a | «Fachliche Nachsorge und erreichbare Kontakte klärt die betroffene Person mit dem Behandlungsteam.» | `krise` › `danach`, Vertiefung «Drei mögliche Anliegen» | Auftrag 2b-K, Abschnitt 4 c (P2b-F-7) | geändert (2b-K) | c188 |
| 57b | «Vereinbarte Hilfe überprüfen: Die betroffene Person klärt mit dem Behandlungsteam, welche professionelle Unterstützung vorgesehen und erreichbar ist, wenn sie möchte, gemeinsam mit Ihnen.» | `krise` › `danach`, Vertiefung «Früh erkennen und Absprachen treffen» | Auftrag 2b-K, Abschnitt 4 c (P2b-F-7) | geändert (2b-K) | c204 |
| 58 | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | `krise` › `danach` | Verweissatz | wie 2b | c309 |
| 59 | «Kurze Übungen für Momente, in denen es zu viel ist, stehen auf der Seite «Auf sich achten» im Abschnitt «Wenn es gerade zu viel ist».» | `krise` › `danach` | Verweissatz | wie 2b | c310 |
| 60 | «Wenn Sie später zurückschauen möchten:» (Einleitung) | `krise` › `danach` | neu | wie 2b | c311 |
| 61 | «Sie dürfen dabei auch eigene Verletzungen und Grenzen ansprechen. Was Sie gemeinsam nicht klären können, können Sie mit Unterstützung von aussen besprechen.» | `krise` › `danach`, Vertiefung «Gemeinsame Nachbesprechung» | Verdichtung | wie 2b | c193, c194 |
| 62 | «Dabei muss niemand nach einer einzigen Ursache suchen.» | `krise` › `danach`, Vertiefung | Verdichtung | wie 2b | c196 |
| 63 | «Achten Sie auf diese Hinweise:» (Einleitung) | `krise` › `bleibt` | neu | wie 2b | c312 |
| 64 | «Bei akuter Gefahr schützen Sie sich und holen sofort Hilfe.» (vor dem Verweis im Text) | `krise` › `bleibt` | Verdichtung | wie 2b | c212 |
| 64a | «Weitere Behandlungsschritte klärt die betroffene Person mit dem Behandlungsteam.» | `krise` › `bleibt` | Auftrag 2b-K, Abschnitt 4 c (P2b-F-7) | geändert (2b-K) | c213 |
| 65 | «Was bei Gewalt oder Bedrohung wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `krise` › `bleibt` | Verweissatz | wie 2b | c239 |
| 66 | «Vereinbaren Sie, welche vertraute erwachsene Person das Kind betreut, wohin es gehen kann und wer einspringt, wenn diese ausfällt. Besprechen Sie den Plan in einfachen Worten. Das Kind darf Fragen stellen, Gefühle zeigen und seinen Alltag behalten.» | `krise` › `bleibt`, Kinder | Auftrag (Wortlaut von `grenzen`, Abschnitt 2b) | wie 2b | c217 bis c219 |
| 67 | «Wie Sie Kindern die Erkrankung erklären und die Betreuung planen, steht auf der Seite «Ihre Rolle» im Abschnitt «Wenn Kinder mitbetroffen sind».» | `krise` › `bleibt` | Verweissatz (Abschnitt 5) | wie 2b | c221, i39 |
| 68 | «Ich weiss nicht, was ich sagen soll, wenn es schwierig wird.» (Anliegen) | `index` › `einstiege` | Auftrag (Abschnitt 6) | wie 2b | i257 |
| 69 | «Zugewandt und klar sprechen: zuhören, nachfragen, eigene Anliegen nennen und Pausen machen.» (Beschreibung) | `index` › `einstiege` | Auftrag (Abschnitt 6) | wie 2b | i19, i20, k4 |
| 70 | «Weitere Einstiege folgen: Genesung · Unterstützung finden.» (Platzhalter) | `index` › `einstiege` | Auftrag (Abschnitt 6) | wie 2b | i25 bis i28 |
| 71 | «Wie Sie Suizidgedanken direkt ansprechen können, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Suizidgedanken ein Thema sind».» | `verstehen` › `mythen`, Ende des Teils «Wenn Sie sich wegen Suizid sorgen» | Verweissatz (Freigabe 2b, Abschnitt 4, Satz 1); wortgleich mit Nr. 33 | neu (2b-F) | v547 |
| 72 | «Wie Sie eine Pause ankündigen können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Der richtige Moment».» | `verstehen` › `anspannung`, Ende des Abschnittstexts (nicht in der Abbildung) | Verweissatz (Freigabe 2b, Abschnitt 4, Satz 2) | neu (2b-F) | v548 |
| 73 | «Wie Sie mit Schuldgefühlen umgehen können, steht auf der Seite «Ihre Rolle» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | `verstehen` › `mythen`, Antwort zu «Angehörige sind schuld.» | Verweissatz (Freigabe 2b, Abschnitt 4, Satz 3) | neu (2b-F) | v549 |
| 74 | «Wie Sie Gefühle anerkennen können, ohne zuzustimmen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Anerkennen, ohne zuzustimmen».» | `beziehungen` › `was-hilft`, Ende des Abschnitts | Verweissatz (Freigabe 2b, Abschnitt 4, Satz 4); wortgleich mit Nr. 49 | neu (2b-F) | b249 |
| 75 | «Wo Sie Unterstützung für sich finden, steht auf der Seite «Auf sich achten» im Abschnitt «Nicht allein tragen».» | `grenzen` › `bruecke` | Verweissatz (Freigabe 2b, Abschnitt 4, Satz 5) | neu (2b-F) | g712 |
| 76 | «Wie Sie Kindern die Erkrankung erklären und die Betreuung planen, steht auf der Seite «Ihre Rolle» im Abschnitt «Wenn Kinder mitbetroffen sind».» | `grenzen` › `gewalt`, Ende von «Wenn Kinder mitbetroffen sind» | Verweissatz (Freigabe 2b, Abschnitt 4, Satz 6); wortgleich mit Nr. 67 | neu (2b-F) | g713 |
| 77 | «Was in einer Krise hilft, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Belastung zunimmt».» | `selbstfuersorge` › `zu-viel`, direkt nach dem Verweis im Text | Verweissatz (Freigabe 2b, Abschnitt 4, Satz 7) | neu (2b-F) | s672 |

### Korrektur 2b-K: Aufgefallen, nicht geändert

Der Auftrag sagt «Was dieser Auftrag nicht nennt, bleibt.» Diese Stellen sind deshalb nicht geändert:

1. **Seitenbeschreibung von `krise`** (`site.config.json` › `pages` › `description`, Meta-Beschreibung): «… Suizidgedanken ansprechen, was Sie eher vermeiden, …» passt nicht mehr zum Titel «Was Sie in einer Krise vermeiden sollten» (P2b-F-3). Ebenso `v-kr-vermeiden` › `goal`: «Erkennen, was in einer Krise eher nicht hilft».
2. **`v-ko-tassen` › `reason`:** «… die rechte Tasse steht 2 Einheiten weiter rechts als in der Skizze, damit beide Tassen spiegelgleich zur Tischmitte stehen.» beschreibt den Stand vor dem Verschieben; spiegelgleich sind die Tassen weiter, aber nicht mehr an der Stelle der Skizze.
3. **K-K-a1 bei «Nächster Schritt»** (`kippen`): «Ich beende das Gespräch jetzt und entscheide später, ob ich wieder ansprechbar bin.» bleibt. Die Prüfrunde hatte auch diesen Satz zum Bündeln vorgeschlagen; der Auftrag nennt nur «Es ist gerade zu viel.» (Abschnitt 5 a) und hält in Abschnitt 7 (k726) den Satz fest.
4. **Reihenfolge in «Pause statt Streit»:** Die Einleitung nennt die Anspannungskurve, der Verweissatz mit Link auf die Kurve steht erst nach der Liste. Wer `verstehen` nicht kennt, erfährt erst dort, welche Kurve gemeint ist. Vorschlag zur Prüfung: Verweissatz direkt nach der Einleitung.
5. **Übrige Einzelstellen aus P2b-S-3** stehen weiter: «keinen statistisch signifikanten Anstieg» (`suizid`, der Dazzi-Satz bleibt nach Abschnitt 5 e). «radikale Echtheit» steht im Lesefluss nicht mehr, nur noch im Titel der Vertiefung «6 · Radikale Echtheit: auf Augenhöhe bleiben», wo die Stufe erklärt wird.
6. **`sagen` nach der Korrektur:** Der Zwischentitel «Wenn ein Gespräch kippt» steht über zwei kurzen Absätzen und dem Verweissatz. Der Standardsatz und der Ausstiegssatz stehen wie bisher in einem Absatz; bei 360 px sind das acht Zeilen.

**Stand 10.10.2026 · Etappe 2b · bauende Sitzung (Claude Code).** Umgesetzt ist `BAUAUFTRAG-ETAPPE-2B.md`: neue Seiten `kommunizieren` («Zugewandt und klar sprechen») und `krise` («Krisen begleiten»), ein neuer Einstieg auf `index`, `site.config.json` und der Abgleich. Die Seiten der Etappen 1 und 2a sind unverändert (`git diff` auf `content/` und den gebauten Seiten: nur `index` › `einstiege`, `kommunizieren`, `krise`). Keine Prüfstufe ist «erledigt»; W1 bis R3 für Etappe 2b braucht eine Sitzung, die nicht gebaut hat. Der Block «Freigabe 2a eintragen» steht darunter.

**Auftrag im Website-Ordner:** Die Datei lag zuerst nicht im Stamm eines Branches. Die bauende Sitzung hat den Anhang aus dem Chat unverändert in den Website-Ordner gelegt (`7263395`). Danach kam `BAUAUFTRAG-ETAPPE-2B_1.md` in den Stamm von `main` (`921e586`); sie ist Zeichen für Zeichen gleich (`cmp`), ist dort gelöscht (`a92d5d1`) und in `borderline-umbau` zusammengeführt (`ca42f76`).

### Etappe 2b: Stand je Abschnitt des Auftrags

| Abschnitt | Stand | Beleg |
| --- | --- | --- |
| 1 Entscheide | umgesetzt | `kommunizieren` mit Abbildung «Zwei Tassen» (`v-ko-tassen`), `krise` ohne Bild, die drei Bereiche als Begriffsliste (`krise` › `belastung`). «Aufmerksam sein» und «Spiegeln» im Lesefluss, Stufen 3 bis 6 vollständig in einer Vertiefung (ein Akkordeon mit vier Einträgen, je Stufe Ziel, So kann es aussehen, Stolperstein, Beispielsätze, Beispiel-Dialog). Übungen ersetzt durch drei Beispiele in `kommunizieren` › `beispiele`. Suizid: Handlungsanleitung, danach Verweis im Text, keine Nummer, kein Link auf eine Notfallseite. `navLabel` beider Seiten `null` |
| 2a Sprache und Begriffe | umgesetzt, Rest siehe Liste «Zur Prüfung» | «andere Person» statt «Gegenüber» (z. B. «Gefühle und Motive der anderen Person sind von aussen nicht sicher erkennbar.»), «betroffene Person» statt «Ihr Angehöriger» (`krise` › `waehrend`), «Anspannung» statt «Stress» und «Alarm» («Einseitige Aussagen unter Anspannung», «fühlt sich dauerhaft angespannt», «ständige Wachsamkeit»). Klares Subjekt: «Manche Angehörige achten im Gespräch auf drei Lagen.» Seitennamen in Verweisen wie in der Navigation («Verstehen», «Beziehungen», «Ihre Rolle», «Grenzen», «Auf sich achten») und «Zugewandt und klar sprechen», «Krisen begleiten». «Was Sie tun können» mit Beispielsatz: `kommunizieren` in 4 von 7 Abschnitten; `krise` in keinem, weil jeder Abschnitt selbst aus Handlungsanleitungen besteht. Die Begriffe «Stabil», «Warnstufe», «Eskalation» aus dem Handout bleiben (Liste «Zur Prüfung», Nr. 10) |
| 2b Inhalt, Absicherungen, Verantwortung | umgesetzt | Abgleich: jeder Satz der Quellen mit Status, Wegfall mit Grund. Verantwortung: «Sie sind nicht allein für den Gesprächsverlauf verantwortlich.» (Beziehung), «Sie müssen eine Krise nicht allein deeskalieren oder bewältigen.» (Krise); kein «allein» bei Erkrankung, Behandlung oder Genesung («Das bedeutet nicht, für die Erkrankung oder die Genesung der anderen Person verantwortlich zu sein.»). Gleicher Wortlaut: die Sätze von `verstehen` zu Suizid in `krise` › `suizid`, die Sätze von `grenzen` › `gewalt` zu Kindern in `krise` › `bleibt`, die Reaktionen nach einer Krise im Wortlaut von `rolle` › `nach-konflikten`. Verlinkt statt wiederholt: `verstehen#anspannung`, `grenzen#dear`, `grenzen#saetze`, `grenzen#gewalt` (zweimal), `grenzen#rollen`, `rolle#kinder`, `rolle#nach-konflikten`, `selbstfuersorge#zu-viel`, `index#beratung`, `beziehungen#schleife`; `kommunizieren` und `krise` verlinken einander. Sicherheitshinweise stehen dort, wo sie gebraucht werden (Liste der Verweise im Text unten). Neue Absicherung statt neuer absoluter Aussage: «Grenzen beim Geld sind oft besonders schwer …» (Liste «Zur Prüfung», Nr. 7) |
| 2c Zuständigkeit | umgesetzt | Keine Nummer, kein `tel:`, kein Notfallblock (Build ohne `crisis-number`). Alle Links auf «Akute Hilfe und Notfallkontakte», `/soforthilfe` und den Situations-Wegweiser entfallen (Abgleich: Grund «Profil (kein Krisenzugang) …»). Sechs Verweise im Text, je direkt nach einer Handlungsanleitung (Liste unten); keiner in einer Figur oder Vertiefung, höchstens einer je Abschnitt (Gate `inline-ref` ohne Befund). `sensitiveTopics`: `kommunizieren` «selbstgefaehrdung», «gewalt», «akute-krise»; `krise` «akute-krise», «selbstgefaehrdung», «gewalt». Keine Links auf Entwurfsseiten (Build ohne `link-target`) |
| 2d Länge und Vertiefungen | erreicht | Wörter im Lesefluss (C1): `kommunizieren` 2458, `krise` 1507 (Tabelle unten). Vertiefungen als Akkordeon des Profils, ohne Skript offen (13 von 13 Panels sichtbar) und im Druck vollständig (13 von 13). Schutz, Gewalt, akute Gefahr, Suizidalität, Gesundheitshinweise und Kernaussagen stehen im Lesefluss; der Sicherheitshinweis aus «Drei mögliche Anliegen» («Bei erneuten Sorgen um die Sicherheit sofort Hilfe holen …») steht deshalb vor den Vertiefungen (`krise.md` Nr. 190) |
| 2e Bilder | umgesetzt | Eine Abbildung, direkt nach dem ersten Absatz von `anerkennen`; Quellenzeile «Grundlage: …» am Ende des Abschnitts. Als Text: die drei Bereiche (Begriffsliste), «Pause statt Streit» (Begriffsliste mit Verweissatz auf die Anspannungskurve), «Wenn Gespräche kippen» (nummerierte Liste), die sechs Stufen ohne Treppenbild. Je Abschnitt eine `visualPlan`-Zeile: 7 + 7 |
| 2f Neue Sätze und Abgleich | umgesetzt | `abgleich/kommunizieren.md` (957 Bestandszeilen, 24 × «neu (2b)»), `abgleich/krise.md` (300, 13 × «neu (2b)»), `index.md` Nr. 257. Die vorgemerkten Zeilen nennen den neuen Ort: 125 Zeilen (`beziehungen` 14, `grenzen` 59, `rolle` 35, `selbstfuersorge` 12, `verstehen` 4, `index` 1). Der Auftrag nennt 122 + 4; die Suche nach «kommunizieren (Etappe» findet 122 Treffer, einer davon ist eine Erwähnung im README, keine Zeile. Statuswerte «umformuliert (2b)», «verschoben (Vertiefung, 2b)», «neu (2b)» in `abgleich/README.md` erklärt. `pruefe-abgleich.mjs`: 4502 Zeilen, 0 ohne Fundstelle; alle Skripte erfassen die neuen Seiten |
| 3 `kommunizieren` | umgesetzt, Gliederung wie vorgeschlagen | 01 `zuhoeren`, 02 `anerkennen` mit Abbildung 1, 03 `moment`, 04 `kippen`, 05 `worte`, 06 `beispiele`, 07 `rollen` (Vertiefung). Abweichungen: «Sicherheit oder Pause, später klären» steht in 03 statt unter der Validierung, weil es um den Zeitpunkt geht; «Typische schwierige Situationen» steht sichtbar als Begriffsliste in 06; die Fragen «Zum Innehalten» aus `beziehungen` stehen als Vertiefung in 01, der Prüfstein aus `spiegeln-statt-aufsaugen` dabei. Beispiele: «Nach einem Arztbesuch» (`/uebungen`, Validierung 1, Reaktion B), «Ein Zeitpunkt, zwei Vorstellungen» (`/uebungen`, Zugewandtheit 2, Reaktionen B und C), «Eine Bitte um Geld» (vorgemerkt aus `/grenzen`) |
| 4 Abbildung 1 | umgesetzt | Titel, Kernaussage, Kurztext, die zwei Sätze, Kurzbeschreibung, «Grenzen des Bildes» und Quelle im Wortlaut des Auftrags (Skript: Zeichen für Zeichen auf der gebauten Seite). Zeichnung aus Anhang A mit festen Pfaden statt `transform`; verfeinert: die rechte Tasse steht 2 Einheiten weiter rechts (172 statt 170), damit beide Tassen genau spiegelgleich zur Tischmitte stehen; Bildausschnitt unverändert (`0 60 640 200`). Nur Profil-Klassen, keine Hexwerte, keine `style`-Attribute. `resonance` und `approvalStatus` «ausstehend» wie im Auftrag |
| 5 `krise` | umgesetzt, Gliederung wie vorgeschlagen | 01 `belastung` … 07 `bleibt`. Abweichungen: Der Absatz zur Selbstverletzung steht in 04 statt in 03, weil er Suizidgedanken betrifft; der Satz «Die Fachstelle Angehörigenarbeit bietet Beratung und Orientierung, aber keine Krisenintervention.» aus dem Hinweis oben auf der alten Seite steht im ersten Absatz von 01. Heikle Stellen im Wortlaut des Bestands (Liste «Zur Prüfung», Nr. 1 bis 3) |
| 6 `index`, `site.config.json` | umgesetzt | Einstieg nach «Auf sich achten»: «Ich weiss nicht, was ich sagen soll, wenn es schwierig wird.» mit «Zugewandt und klar sprechen: zuhören, nachfragen, eigene Anliegen nennen und Pausen machen.»; Platzhalter «Weitere Einstiege folgen: Genesung · Unterstützung finden.»; kein Einstieg für `krise`. `kommunizieren` und `krise`: `status` «published», `primaryTask`, `description`, `sensitiveTopics`, je 7 Zeilen `visualPlan`, `navLabel` `null`; die Seitenplatzhalter sind weg |
| 7 Prüfen | bestanden, Abweichungen keine | Tabelle «Prüfungen nach Abschnitt 7» unten |

### Etappe 2b: Prüfungen nach Abschnitt 7

- **`node tools/build.mjs`:** 0 blockierend, 11 Hinweise: 1 × `visual-approval` (`v-ko-tassen`), 8 × `placeholder-approval`, `site-url`, `review-report`.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 10 blockierend und 1 Hinweis (`site-url`), wie erwartet: 1 × `visual-approval`, 8 × `placeholder-approval` (`einstiege` auf `index` und die Seitenplatzhalter von `diagnose`, `behandlung`, `genesung`, `unterstuetzung`, `fragen`, `quellen`, `ueber`), 1 × `review-report`.
- **`node abgleich/pruefe-abgleich.mjs`:** 4502 Zeilen, 0 ohne Fundstelle.
- **Bildschirmfotos und Sicht:** Abbildung 1 bei 1280 und 360 px, Standard und «kontrast» (vier Fotos); jede Vertiefung zu und offen bei 1280 und 360 px in beiden Themes (fünf Akkordeons, 40 Fotos). Alle angesehen.
  - «Zwei Tassen»: breit stehen die Sätze nebeneinander über den Tassen, der harte Satz links, die Antwort rechts. Schmal stehen sie untereinander über der Zeichnung; die Tassen sind dann etwa 34 px breit, als zwei gleiche Tassen auf einem Tisch erkennbar.
  - «kontrast»: Linien dunkler (10,1 : 1 gegen den Hintergrund der Figur), die Tischfläche bleibt, nichts verschwindet.
  - Vertiefungen: Titel bei 360 px zweizeilig ohne Abschneiden; geöffnet vollständig, Begriffslisten mit hervorgehobenem Begriff.
- **Überlauf:** 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px, Vertiefungen zu und offen; `kommunizieren`, `krise` und `index` in beiden Themes, die übrigen Seiten im Standard-Theme (198 Messungen): kein waagrechter Überlauf, kein Element breiter als das Fenster. Zoom 200 % (640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %): `kommunizieren`, `krise`, `index` ohne Überlauf.
- **Kontraste:** Textelemente mit eigenem Text (`kommunizieren` 286, `krise` 165, `index` 47), beide Themes, 1280 und 360 px: keines unter AA; tiefster Wert 4,71 : 1 (Links, Standard). Linien der Zeichnung gegen den Hintergrund der Figur 4,71 : 1 (Standard) und 10,08 : 1 («kontrast»), Tischkante gegen Tischfläche 3,59 : 1 und 7,70 : 1. Keine festen Farben in SVG, keine `style`-Attribute.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps bis zur Fusszeile: `kommunizieren` 32, `krise` 25; jeder mit sichtbarem Fokus und im Fenster; der erste ist «Zum Hauptinhalt».
  - Reihenfolge wie beim Lesen: Kopf, Navigation, Absenderin, Kapitelübersicht, dann Vertiefungen und Links im Text.
  - Vertiefungen: Enter öffnet 13 von 13, Leertaste schliesst 13 von 13, Pfeil nach unten wechselt in Akkordeons mit mehreren Einträgen 11 von 11. «Grenzen des Bildes» öffnet mit Enter.
  - Nach dem Laden läuft keine Animation.
- **Druck:** alle 13 Panels und «Grenzen des Bildes» im Druck sichtbar; PDF beider Seiten erzeugt und angesehen.
- **Ohne Skript:** 9 von 9 und 4 von 4 Panels sichtbar.
- **`node abgleich/bedienung.mjs`:** `kommunizieren` 32 Tabstopps, 24 890 px bei 360 px, Abbildung 716 px; `krise` 25 Tabstopps, 16 436 px; `index` 15 Tabstopps (vorher 14), 4636 px. Die Seiten der Etappen 1 und 2a sind gleich wie nach 2a-K.
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Etappe 2b: Wörter im Lesefluss (Zählweise C1)

C1 wie in Prüfrunde 2a: Absätze, Listenpunkte und Begriffslisten in `<main>`, ohne Überschriften, Kicker, Bezeichnungen, Text nur für Screenreader und Quellenzeilen; «im Lesefluss» ohne die Panels der Akkordeons. Zum Vergleich die Zählweise von `kennzahlen.mjs` (mit Überschriften und Quellenzeilen).

| Seite | Kopf | Abschnitte (C1 im Lesefluss) | C1 im Lesefluss | C1 mit Vertiefungen | `kennzahlen.mjs` im Lesefluss / gesamt |
| --- | ---: | --- | ---: | ---: | --- |
| `kommunizieren` | 28 | `zuhoeren` 193 · `anerkennen` 623 · `moment` 372 · `kippen` 419 · `worte` 270 · `beispiele` 516 · `rollen` 37 | **2458** | 3126 | 2702 / 3370 |
| `krise` | 36 | `belastung` 289 · `waehrend` 215 · `sagen` 263 · `suizid` 182 · `vermeiden` 57 · `danach` 259 · `bleibt` 206 | **1507** | 1919 | 1663 / 2075 |

Ziel «höchstens etwa 2500» erreicht. Sätze mit Verneinung (C1): `kommunizieren` 27 % im Lesefluss, `krise` 25 %; nach `verneinung.mjs` 21 % und 22 % (Bestand 16 % und 23 %). Die meisten tragen eine Absicherung oder Entlastung des Bestands weiter, zum Beispiel «Eine bestimmte Reaktion lässt sich nicht garantieren.» oder «Kein Bereich bedeutet automatisch «sicher» oder «gefährlich».».

### Etappe 2b: Verweise im Text

Jeder Verweis im Text steht direkt nach einer Handlungsanleitung für eine akute Lage (Skript: Absatz unmittelbar vor dem Platzhalter).

| Nr. | Seite › Abschnitt | Handlungsanleitung direkt davor |
| --- | --- | --- |
| 1 | `kommunizieren` › `kippen` | «Bei Bedrohung oder Gewalt beenden Sie das Gespräch, schaffen Abstand und bringen sich in Sicherheit.» |
| 2 | `kommunizieren` › `worte` | «Eine Aussage wie «Wenn du gehst, bringe ich mich um» gehört nicht in eine Liste von Vorwürfen. Nehmen Sie sie ernst, und holen Sie eine professionelle Einschätzung oder Hilfe dazu. Versuchen Sie nicht, Motiv oder Gefährdung allein zu beurteilen.» |
| 3 | `krise` › `belastung` | «Bei unmittelbarer Gefahr holen Sie sofort Hilfe und schützen sich selbst.» |
| 4 | `krise` › `waehrend` | «Begrenzen Sie den Zugang zu Medikamenten oder gefährlichen Gegenständen nur ohne Eigengefährdung, möglichst gemeinsam und nach professioneller Anleitung. Nehmen Sie nichts aus der Hand oder gegen Widerstand weg; greifen Sie nicht körperlich ein. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» |
| 5 | `krise` › `suizid` | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Das kann helfen, die Lage zu verstehen. Zum Beispiel: «Ich mache mir Sorgen um dich. Denkst du gerade daran, dir das Leben zu nehmen?»» |
| 6 | `krise` › `bleibt` | «Bei akuter Gefahr schützen Sie sich und holen sofort Hilfe.» |

Auf `krise` stehen damit vier Verweise im Text. Weitere Handlungsanleitungen des Bestands stehen ohne eigenen Verweis, weil der Abschnitt schon einen hat oder der Bestand dort keinen Link auf die Notfallseite hatte: «Bei Bedrohung bringen Sie sich in Sicherheit und informieren die Leitstelle.» (`sagen`), «Bei möglicher unmittelbarer Lebensgefahr rufen Sie den Rettungsdienst.» (`danach`), «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» (`bleibt`, Kinder).

### Etappe 2b: Visualisierungs-Check der Abbildung

Selbstprüfung, keine Prüfstufe. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | `v-ko-tassen` | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | Build ohne Hinweis `visual-plan`; `data-visual-id` «v-ko-tassen», `data-visual-type` «illustration» wie im Plan | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | je 7 Zeilen für 7 Abschnitte; zum Beispiel `v-ko-moment`: «Text ist klarer (Bauauftrag 2b, Abschnitt 2e): «Pause statt Streit» … als Begriffsliste mit Verweis auf die Anspannungskurve …», `v-kr-belastung`: «Entscheid der Fachstelle 10.10.2026 (Bauauftrag 2b): kein Bild. …» | – |
| 3 | Prüffrage beantwortet und eingelöst | E | `understood`: «Wie Anerkennen ohne Zustimmen klingt: Auf einen harten Satz folgt eine Antwort, die das Gefühl ernst nimmt, ohne die Deutung zu übernehmen oder sich zu verteidigen. …»; das Bild zeigt genau dieses Satzpaar | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | Kernaussage «Sie können ein Gefühl anerkennen, ohne die Deutung zu übernehmen.» und Kurztext sichtbar; die Vertiefung nennt nur Grenzen des Bildes | – |
| 5 | Ansatzpunkt (B, C, G) | – | Illustration (Muster D), kein Erklärmodell | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | einzige Abbildung der Seite; die Stufen der Validierung und «Pause statt Streit» als Text, keine zweite Kurve | – |
| 7 | Kartenraster-Check | E | keine Kastenreihe; Text in Listen, Begriffslisten und `.puk-say` | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | zwei gleiche Tassen, spiegelgleich zur Tischmitte, auf demselben Tisch, beide dampfen; keine ist grösser, höher oder näher | – |
| 9 | Verteilt, keine Textwand | T | Eine Abbildung, wie entschieden. Die Seite ist lang: 2458 Wörter im Lesefluss (C1), 24 890 px bei 360 px; gegliedert durch Kapitelübersicht, Zwischentitel, Listen, Begriffslisten, `.puk-say` und vier Vertiefungen | Fachstelle (Länge) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle | E | «Grenzen des Bildes»: «Von aussen lässt sich nicht sicher erkennen, was hinter einem Satz steht. Sie dürfen zugleich entscheiden, wie viel Sie in diesem Moment aufnehmen können.»; Quelle im Wortlaut des Auftrags | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | SVG ohne Animation; Sätze, Kernaussage und Kurztext sind HTML-Text | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | kein Überlauf bei 320 und 360 px; Sätze schmal untereinander; Kurzbeschreibung im Wortlaut des Auftrags, über `aria-describedby` verbunden | – |
| 13 | Theme «kontrast» geprüft | E | Fotos bei 1280 und 360 px; Linien 10,08 : 1; keine festen Farben | – |
| 14 | Inhalt fachlich freigegeben | N | `approvalStatus` «ausstehend»; Gate production: `visual-approval` | Fachstelle |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | «Wiedererkennen und Entlastung: Ich kann zuhören und anerkennen, ohne mich zu verteidigen und ohne zuzustimmen.»: Der harte Satz ist zum Wiedererkennen, die Antwort zeigt die Entlastung | – |
| 16 | Ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | E | zwei gesprochene Sätze, kein Bildteil beschriftet, keine Liste, die das Bild übersetzt | – |
| 17 | Keine ungewollten Bedeutungen | T | Tee kann ein ruhiges Gespräch nahelegen, obwohl der erste Satz hart ist; das passt zur Haltung «zugewandt», nicht zu einer eskalierten Lage, für die der Text Pause und Schutz nennt. Schmal stehen beide Sätze über beiden Tassen; wer welchen Satz sagt, ergibt sich dann nur aus der Reihenfolge (die Kurzbeschreibung nennt es). Die Henkel zeigen nach aussen; das liest sich als Spiegelbild, nicht als Abwenden | R2 |

**Freundin-Test (bauende Sitzung):** «Zwei Tassen» besteht ihn: Ein harter Satz und eine ruhige Antwort am selben Tisch sind ohne Erklärung verständlich; eine Angehörige könnte damit zeigen, wie sie antworten möchte.

### Etappe 2b: Neue Sätze zur Freigabe

Alle Sätze der zwei Seiten und von `index`, die nicht im Wortlaut aus dem Bestand stammen: neue Sätze ohne Bestandssatz, Verdichtungen (zwei oder mehr Bestandssätze in neuem Wortlaut oder ein Satz mit neuer Absicherung), Verweissätze und Wortlaut des Auftrags. Einzelne Bestandssätze in einfacher Sprache («umformuliert (2b)») stehen nur im Abgleich. **Art:** neu · Verdichtung · Verweissatz · Auftrag. **Abgleich:** k = `kommunizieren.md`, c = `krise.md`, i = `index.md`, g = `grenzen.md`, b = `beziehungen.md`, r = `rolle.md`.

| Nr. | Satz | Ort | Art | Abgleich |
| --- | --- | --- | --- | --- |
| 1 | «Zuhören und die eigene Sicht behalten» (Abschnittstitel) | `kommunizieren` › `zuhoeren` | Auftrag (Abschnitt 3) | k957 |
| 2 | «Fragen Sie, was gerade gewünscht ist:» (Einleitung) | `kommunizieren` › `zuhoeren`, «Was Sie tun können» | neu | k958 |
| 3 | «Und wenn Sie verschieden empfinden:» (Einleitung) | ebenda | neu | k959 |
| 4 | «Auch verschiedene Gefühle, Meinungen oder Wünsche nach Nähe gehören dazu. Sie sind nicht automatisch ein Zeichen fehlender Liebe.» | `kommunizieren` › `zuhoeren` | Verdichtung | b184 |
| 5 | «Fragen zum Innehalten» (Titel der Vertiefung) | `kommunizieren` › `zuhoeren` | neu | k960 |
| 6 | «Vor einer Antwort kann es helfen, kurz innezuhalten.» | ebenda, Vertiefung | neu | k961 |
| 7 | «Die Fragen sind ein Angebot:» | ebenda, Vertiefung | neu | k962 |
| 8 | «Wie eine Reaktion zum neuen Anlass werden kann, erklärt die Seite «Beziehungen» im Abschnitt «Nicht nur was geschieht, sondern was es bedeutet».» | ebenda, Vertiefung | Verweissatz | k963 |
| 9 | «Sie können ein Gefühl anerkennen, ohne die Deutung zu übernehmen.» (Kernaussage) | `kommunizieren` › `anerkennen`, Abbildung 1 | Auftrag (Abschnitt 4) | k663 |
| 10 | «Sie können sagen, dass der Schmerz echt ist, ohne die ganze Erklärung zu teilen oder pauschale Schuld zu übernehmen.» (Kurztext) | ebenda | Auftrag (Abschnitt 4) | k667 |
| 11 | «Zeichnung: Zwei Tassen Tee stehen sich auf einem Tisch gegenüber. Über der linken steht der Satz «Du verstehst mich sowieso nicht.», über der rechten «Vielleicht verstehe ich nicht alles. Wenn du möchtest, sag mir, was dir gerade besonders wichtig ist.»» (Kurzbeschreibung) | ebenda | Auftrag (Abschnitt 4) | k964 |
| 12 | «Wenn Sie zugleich eine Grenze brauchen:» (Einleitung) | `kommunizieren` › `anerkennen`, «Was Sie tun können» | neu | k965 |
| 13 | «Eine pauschale Schuldzuweisung müssen Sie nicht übernehmen, etwa mit «Du hast recht, ich bin an allem schuld.» oder «Okay, dann mache ich es so, wie du willst.»» | `kommunizieren` › `anerkennen` | Verdichtung | k650, k653, k654 |
| 14 | «Sechs Stufen der Validierung» (Zwischentitel) | `kommunizieren` › `anerkennen` | neu | k966 |
| 15 | «Übernehmen hiesse: Aus einer Beobachtung wird die Annahme, Sie müssten das Erleben oder die Situation der anderen Person lösen.» | `kommunizieren` › `anerkennen` | Verdichtung | g679, g683, g692 |
| 16 | «Der richtige Moment» (Abschnittstitel) | `kommunizieren` › `moment` | Auftrag (Abschnitt 3) | k967 |
| 17 | «Manche Angehörige achten im Gespräch auf drei Lagen.» | `kommunizieren` › `moment` | neu | k968 |
| 18 | «Ein Gespräch ist möglich, Zuhören funktioniert, der Körper ist entspannt.» | `kommunizieren` › `moment`, «Stabil» | Verdichtung | k771 bis k773 |
| 19 | «Die Stimme wird lauter, Vorwürfe beginnen, der Körper spannt sich an.» | `kommunizieren` › `moment`, «Warnstufe» | Verdichtung | k779 bis k781 |
| 20 | «Wie Anspannung in einem Gespräch steigen und wieder sinken kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | `kommunizieren` › `moment` | Verweissatz | k969 |
| 21 | «Dann müssen Sie ihn unter Anspannung nicht erst suchen.» | `kommunizieren` › `moment`, «Was Sie tun können» | Verdichtung | k807, k808 |
| 22 | «Jetzt Sicherheit oder Pause, später Klärung» (Zwischentitel) | `kommunizieren` › `moment` | Verdichtung | k131 |
| 23 | «Dafür sind Sie nicht verantwortlich, auch wenn Sie versuchen, die Lage zu beruhigen.» | `kommunizieren` › `moment` | Verdichtung | k134 |
| 24 | «Auch wer verletzend war, kann später Verantwortung übernehmen:» (Einleitung) | `kommunizieren` › `moment` | neu | k970 |
| 25 | «Wenn aus einem Austausch plötzlich Streit, Rückzug oder Rechtfertigung wird, können kurze Schritte helfen.» | `kommunizieren` › `kippen` | Verdichtung | k211, k692, k699 |
| 26 | «Bei Bedrohung oder Gewalt beenden Sie das Gespräch, schaffen Abstand und bringen sich in Sicherheit.» (vor dem Verweis im Text) | `kommunizieren` › `kippen` | Verdichtung | k150, k719, k796, k925 |
| 27 | «Was bei Gewalt wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `kommunizieren` › `kippen` | Verweissatz | k971 |
| 28 | «Sie können auch sagen, was Sie tun:» (Einleitung zu «Ich spreche langsamer.») | `kommunizieren` › `kippen`, Schritt 1 | neu | k972 |
| 29 | «Eine Grenze in drei Teilen» (Zwischentitel) und «Drei kurze Teile helfen, eine Grenze klar zu sagen, ohne in lange Rechtfertigungen oder in Streit zu geraten.» | `kommunizieren` › `kippen` | Verdichtung | g575, g576, g581, g595 bis g597 |
| 30 | «Wie Sie ein Anliegen in Ruhe vorbereiten, steht auf der Seite «Grenzen» im Abschnitt «DEAR: ein Anliegen klar formulieren».» | `kommunizieren` › `kippen` | Verweissatz | k973 |
| 31 | «Beispiel-Dialog: von der Anspannung bis zur Pause» (Titel der Vertiefung) | `kommunizieren` › `kippen` | Verdichtung | k892 |
| 32 | «Harte oder vorwurfsvolle Aussagen können treffen und Angehörige stark verunsichern.» | `kommunizieren` › `worte` | Verdichtung | k828, k835 |
| 33 | «Wie Sie Suizidgedanken direkt ansprechen können, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Suizidgedanken ein Thema sind».» | `kommunizieren` › `worte` | Verweissatz (Abschnitt 3) | k974 |
| 34 | «So könnte es klingen» (Abschnittstitel) | `kommunizieren` › `beispiele` | Auftrag (Abschnitt 3) | k975 |
| 35 | «Namen und «Person A» oder «Person B» bezeichnen keine festen Rollen und lassen sich nicht aus einer Diagnose ableiten.» | `kommunizieren` › `beispiele` | Verdichtung | r149, k265 |
| 36 | «Nach einem Arztbesuch» (Titel des Beispiels) | `kommunizieren` › `beispiele` | neu | k507 |
| 37 | «Robin kommt um 20 Uhr.» | ebenda | Verdichtung | k382 |
| 38 | «Robin, wenn Zeit für ein Gespräch ist» und «Robin, wenn die Kraft nicht mehr reicht» (Bezeichnungen) | ebenda | neu | k976, k977 |
| 39 | «Eine Bitte um Geld» (Titel) und «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» | `kommunizieren` › `beispiele` | Verdichtung | g209, g214 |
| 40 | «Wie Sie nach einem Konflikt Kontakt anbieten können, steht auf der Seite «Ihre Rolle» im Abschnitt «Nach Konflikten und Rückzug».» | `kommunizieren` › `beispiele` | Verweissatz | k978 |
| 41 | «Weitere Beispiele stehen auf der Seite «Grenzen» im Abschnitt «Sätze für typische Situationen».» | `kommunizieren` › `beispiele` | Verweissatz | k979 |
| 42 | «Grundlage: Die Beispiele sind eigene didaktische Ableitungen aus den Ansätzen auf dieser Seite, kein auf Wirksamkeit geprüftes Übungsprogramm.» | `kommunizieren` › `beispiele` | Verdichtung | k263, k264 |
| 43 | «Wie sich Grenzen je nach Rolle unterscheiden, steht auf der Seite «Grenzen» im Abschnitt «Grenzen in verschiedenen Angehörigenrollen».» | `kommunizieren` › `rollen` | Verweissatz | k980 |
| 44 | «Diese Seite ersetzt keine professionelle Krisenberatung.» | `krise` › `belastung` | Verdichtung | c29, c65 |
| 45 | «Sie können jederzeit direkt Hilfe holen.» | `krise` › `belastung` | Verdichtung | c11 |
| 46 | «Während einer Krise» (Abschnittstitel) | `krise` › `waehrend` | Auftrag (Abschnitt 5) | c72 |
| 47 | «Im Gespräch» (Zwischentitel) | `krise` › `waehrend` | neu | c300 |
| 48 | «Wenn ein Gespräch kippt» (Zwischentitel) | `krise` › `sagen` | neu | c301 |
| 49 | «Wie Sie Gefühle anerkennen können, ohne zuzustimmen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Anerkennen, ohne zuzustimmen».» | `krise` › `sagen` | Verweissatz (Abschnitt 5) | c302 |
| 50 | «Zuerst stellen Sie Verbindung her, dann halten Sie Kontakt, dann nennen Sie Ihre Grenze und den nächsten Schritt.» | `krise` › `sagen` | Verdichtung | c252 |
| 51 | «Alles in einem Satz kann so klingen:» und «Zum Aussteigen reicht:» (Einleitungen) | `krise` › `sagen` | neu | c263, c275, c276 |
| 52 | «Wie Sie eine Grenze in drei Teilen sagen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen».» | `krise` › `sagen` | Verweissatz | c303 |
| 53 | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat.» «Das kann helfen, die Lage zu verstehen.» «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» | `krise` › `suizid` | Auftrag (Wortlaut von `verstehen`, Abschnitt 2b und 5) | c304 bis c307 |
| 54 | «Diese Beurteilung ist Aufgabe von Fachpersonen, nicht von Angehörigen.» | `krise` › `suizid` | Verdichtung | c125 |
| 55 | «Was Sie in einer Krise eher vermeiden» (Abschnittstitel) und «In einer Krise hilft es eher nicht,» (Einleitung) | `krise` › `vermeiden` | Auftrag (Abschnitt 5) und neu | c126, c308 |
| 56 | «Nach einer Krise können Scham, Reue, Erleichterung, Ärger, Rückzug oder ganz andere Reaktionen auftreten.» | `krise` › `danach` | Auftrag (Wortlaut von `rolle`, Abschnitt 2b) | c141 |
| 57 | «Welche fachliche Nachsorge nötig ist, klärt die betroffene Person mit dem Behandlungsteam. Dabei kann auch geklärt werden, welche Rolle Sie freiwillig übernehmen können.» | `krise` › `danach` | Verdichtung | c149 |
| 58 | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | `krise` › `danach` | Verweissatz | c309 |
| 59 | «Kurze Übungen für Momente, in denen es zu viel ist, stehen auf der Seite «Auf sich achten» im Abschnitt «Wenn es gerade zu viel ist».» | `krise` › `danach` | Verweissatz | c310 |
| 60 | «Wenn Sie später zurückschauen möchten:» (Einleitung) | `krise` › `danach` | neu | c311 |
| 61 | «Sie dürfen dabei auch eigene Verletzungen und Grenzen ansprechen. Was Sie gemeinsam nicht klären können, können Sie mit Unterstützung von aussen besprechen.» | `krise` › `danach`, Vertiefung «Gemeinsame Nachbesprechung» | Verdichtung | c193, c194 |
| 62 | «Dabei muss niemand nach einer einzigen Ursache suchen.» | `krise` › `danach`, Vertiefung | Verdichtung | c196 |
| 63 | «Achten Sie auf diese Hinweise:» (Einleitung) | `krise` › `bleibt` | neu | c312 |
| 64 | «Bei akuter Gefahr schützen Sie sich und holen sofort Hilfe.» (vor dem Verweis im Text) | `krise` › `bleibt` | Verdichtung | c212 |
| 65 | «Was bei Gewalt oder Bedrohung wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `krise` › `bleibt` | Verweissatz | c239 |
| 66 | «Vereinbaren Sie, welche vertraute erwachsene Person das Kind betreut, wohin es gehen kann und wer einspringt, wenn diese ausfällt. Besprechen Sie den Plan in einfachen Worten. Das Kind darf Fragen stellen, Gefühle zeigen und seinen Alltag behalten.» | `krise` › `bleibt`, Kinder | Auftrag (Wortlaut von `grenzen`, Abschnitt 2b) | c217 bis c219 |
| 67 | «Wie Sie Kindern die Erkrankung erklären und die Betreuung planen, steht auf der Seite «Ihre Rolle» im Abschnitt «Wenn Kinder mitbetroffen sind».» | `krise` › `bleibt` | Verweissatz (Abschnitt 5) | c221, i39 |
| 68 | «Ich weiss nicht, was ich sagen soll, wenn es schwierig wird.» (Anliegen) | `index` › `einstiege` | Auftrag (Abschnitt 6) | i257 |
| 69 | «Zugewandt und klar sprechen: zuhören, nachfragen, eigene Anliegen nennen und Pausen machen.» (Beschreibung) | `index` › `einstiege` | Auftrag (Abschnitt 6) | i19, i20, k4 |
| 70 | «Weitere Einstiege folgen: Genesung · Unterstützung finden.» (Platzhalter) | `index` › `einstiege` | Auftrag (Abschnitt 6) | i25 bis i28 |

### Etappe 2b: Zur Prüfung durch die Fachstelle

Nr. 1 bis 3 nennt der Auftrag (Abschnitt 5, fachlich heikel). Die übrigen sind Stellen, an denen die bauende Sitzung Wortlaut oder Ort entschieden hat und eine fachliche Bestätigung braucht.

| Nr. | Stelle | Bestand | Neu | Frage |
| --- | --- | --- | --- | --- |
| 1 | Sicherheit prüfen, `krise` › `waehrend` | «Begrenzen Sie den Zugang zu Medikamenten oder gefährlichen Gegenständen nur ohne Eigengefährdung, möglichst gemeinsam und nach professioneller Anleitung. Nehmen Sie nichts aus der Hand oder gegen Widerstand weg; greifen Sie nicht körperlich ein. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | wörtlich, dazu davor «Sind Sie und die betroffene Person sicher? Gibt es gefährliche Gegenstände in der Nähe?» und direkt danach der Verweis im Text | Bleibt «über den Notruf» neben dem Verweis im Text («ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei»)? |
| 2 | Suizidgedanken direkt ansprechen, `krise` › `suizid` | «Bei Suizidgedanken direkt ansprechen» mit «Ich mache mir Sorgen um dich. Denkst du gerade daran, dir das Leben zu nehmen?»; «Die von Dazzi et al. ausgewerteten Studien zeigten keinen statistisch signifikanten Anstieg von Suizidgedanken durch direktes Fragen. Das garantiert keine bestimmte Wirkung im einzelnen Gespräch.» | Handlungsanleitung im Wortlaut von `verstehen` mit dem Beispielsatz des Bestands, Verweis im Text, dann «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» (Wortlaut `verstehen`) und die Sätze zu Dazzi et al. | Passen die beiden Aussagen (keine suizidale Handlung; kein signifikanter Anstieg von Suizidgedanken) so nebeneinander? |
| 3 | Bei der Person bleiben, `krise` › `suizid` | auf `krise` kein gleicher Satz; ähnlich «Bieten Sie nur Nähe oder Erreichbarkeit an, die für Sie möglich und sicher ist.» (steht in `sagen`) | «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» (Wortlaut `verstehen`), nach dem Verweis im Text wie auf `verstehen` | Ort und Wortlaut bestätigen |
| 4 | Leitstelle, `krise` › `sagen` | «Bei Bedrohung bringen Sie sich in Sicherheit und informieren die Leitstelle.» | wörtlich | Ist «Leitstelle» für Angehörige verständlich, oder besser «holen Hilfe» wie in Nr. 6 der Verweise? |
| 5 | Nachsorge, `krise` › `danach` | «Mit dem Behandlungsteam klären, welche fachliche Nachsorge nötig ist und welche Rolle Sie freiwillig übernehmen können»; «Fachliche Nachsorge und erreichbare Kontakte mit dem Behandlungsteam klären» | «Welche fachliche Nachsorge nötig ist, klärt die betroffene Person mit dem Behandlungsteam. Dabei kann auch geklärt werden, welche Rolle Sie freiwillig übernehmen können.»; «Fachliche Nachsorge und erreichbare Kontakte werden mit dem Behandlungsteam geklärt.» | Der Bestand nennt kein Subjekt. Die neue Fassung legt es auf die betroffene Person (Schweigepflicht). Richtig so? |
| 6 | Lebensgefahr nach der Krise, `krise` › `danach` | «Bei erneuter Sorge holen Sie professionelle Einschätzung; bei möglicher unmittelbarer Lebensgefahr rufen Sie den Rettungsdienst.» | zwei Sätze, Wortlaut sonst gleich, ohne eigenen Verweis im Text (der nächste steht in `bleibt`) | Reicht das, oder soll auch hier der Verweis im Text stehen? |
| 7 | Finanzielle Grenzen, `kommunizieren` › `beispiele` | «Finanzielle Grenzen sind besonders schwer, weil sie sich anfühlen wie «ich lasse dich fallen».» | «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» | Absicherung mit «oft» und «können» bestätigen |
| 8 | Verantwortung bei Deeskalation, `kommunizieren` › `moment` | «Ob ein Muster bestehen bleibt, hängt von vielen Faktoren ab; Deeskalation macht Sie dafür nicht verantwortlich.» | «Ob ein Muster bestehen bleibt, hängt von vielen Faktoren ab. Dafür sind Sie nicht verantwortlich, auch wenn Sie versuchen, die Lage zu beruhigen.» | Gleiche Aussage? |
| 9 | Keine Krisenintervention, `krise` › `belastung` | «Die Fachstelle Angehörigenarbeit bietet Beratung und Orientierung, aber keine Krisenintervention.» (Hinweis oben auf der alten Seite) | wörtlich im ersten Absatz | Der Zuständigkeitsverweis in der Fusszeile sagt das nicht ausdrücklich (`index.md` Nr. 37). Soll der Satz auf `krise` stehen? |
| 10 | Begriffe in «Pause statt Streit», `kommunizieren` › `moment` | «Stabil», «Warnstufe», «Eskalation» | gleich, mit «Die Begriffe sind eine Orientierung, keine festen Stufen.» | Bleiben die Begriffe des Handouts, oder sollen sie wie die Anspannungskurve heissen («Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.»)? |
| 11 | Selbstverletzung, `krise` | im Bestand unter «Was Sie in der Krise sagen können» | wörtlich in `suizid` | Ort bestätigen |

### Etappe 2b: Verweise von freigegebenen Seiten (Vorschlag)

Stellen auf den Seiten der Etappen 1 und 2a, die auf die neuen Seiten verweisen könnten. Der Linktext besteht aus Wörtern, die schon dastehen. Die Seiten sind jetzt nicht geändert.

| Nr. | Seite › Abschnitt | Stelle | Linktext | Ziel |
| --- | --- | --- | --- | --- |
| 1 | `verstehen` › `anspannung`, Stelle 2 | «… achten Sie auf Ihre eigene Anspannung und bieten Sie eine Pause an.» | «bieten Sie eine Pause an» | `kommunizieren#moment` |
| 2 | `verstehen` › `mythen`, «Wenn Sie sich wegen Suizid sorgen» | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, …» | «Wenn Sie sich wegen Suizid sorgen» (Zwischentitel) oder ein Verweissatz danach | `krise#suizid` |
| 3 | `beziehungen` › `was-hilft` | «Wenn beide stark angespannt sind, kommen zuerst Sicherheit, Abstand oder eine Pause.» | «eine Pause» | `kommunizieren#moment` |
| 4 | `beziehungen` › `was-hilft` | «bei der Bedeutung: eine Vermutung zuerst mit einer Frage prüfen» | «mit einer Frage prüfen» | `kommunizieren#anerkennen` |
| 5 | `grenzen` › `saetze` | «Sätze für typische Situationen» | Abschnittsende, Verweissatz | `kommunizieren#beispiele` |
| 6 | `grenzen` › `gewalt` | «Bei akuter Gefahr oder Unsicherheit: Bringen Sie sich in Sicherheit und holen Sie Hilfe.» | Verweissatz nach dem Verweis im Text | `krise#waehrend` |
| 7 | `rolle` › `nach-konflikten`, «Nach einer belastenden Situation» | «Danach können Scham, Reue, Erleichterung, Ärger, Rückzug oder ganz andere Reaktionen auftreten.» | «Nach einer belastenden Situation» | `krise#danach` |
| 8 | `rolle` › `anbieten` | «Therapeutin oder Therapeut zu sein, die Therapie zu kontrollieren oder Krisenhilfe zu ersetzen» | «Krisenhilfe» | `krise#belastung` |
| 9 | `selbstfuersorge` › `zu-viel` | «Bei Bedrohung, Gewalt, akuter Gefahr oder Selbstgefährdung holen Sie Hilfe, statt weiterzuüben.» | «holen Sie Hilfe» | `krise#belastung` |

### Etappe 2b: Entscheide der bauenden Sitzung (zur Prüfung)

- **Vertiefungen mit einem Eintrag:** «Fragen zum Innehalten» (`zuhoeren`) und «Beispiel-Dialog: von der Anspannung bis zur Pause» (`kippen`) sind Akkordeons mit nur einem Eintrag. Das Profil rät, unter drei Einträgen auf ein Akkordeon zu verzichten. Der Auftrag verlangt den Beispiel-Dialog in einer Vertiefung; die Fragen sind ergänzend und kämen sonst mit 85 Wörtern (C1) in den Lesefluss.
- **Stufen 3 bis 6:** «in einer Vertiefung» ist ein Akkordeon mit vier Einträgen, eine Stufe je Eintrag (`data-multiple`), damit sich die Stufen einzeln öffnen lassen.
- **Sätze, die zweimal stehen:** Die Antwort auf «Du verstehst mich sowieso nicht.» steht in Abbildung 1 und in der Liste von `worte`, weil der Auftrag beide Stellen nennt. «Sie dürfen zugleich entscheiden, wie viel Sie in diesem Moment aufnehmen können.» steht nur in der Abbildung.
- **Drei Beispiele:** Die Beispiele decken Anerkennen (Arztbesuch), den eigenen Anteil an einem Missverständnis (Alex und Robin) und eine Grenze (Geld) ab. Die Gesprächsbeispiele aus `/unterstuetzen/alltag` entfallen; ihre Aussage steht schon auf `rolle#alltag` und `grenzen#saetze` (im Abgleich zitiert).
- **«Was Sie tun können» auf `krise`:** keine Kennzeichnung, weil jeder Abschnitt selbst aus Handlungsanleitungen besteht.

**Stand 10.10.2026 · Freigabe 2a eintragen · bauende Sitzung (Claude Code).** Umgesetzt ist `FREIGABE-ETAPPE-2A.md` (Auftrag aus dem Stamm unverändert im Website-Ordner, `59f6f6b`; im Stamm von `main` gelöscht, `e92bd2a`; zusammengeführt, `1185b9f`). Die Texte aller Seiten sind unverändert (`git diff` auf `content/` und den gebauten Seiten leer). Keine Stufe ist auf «erledigt» gesetzt. Der Block 2a-2 steht darunter.

| Punkt | Stand | Beleg |
| --- | --- | --- |
| 3 `visualPlan` | umgesetzt | `approvalStatus` «freigegeben» bei `v-ro-weg` und `v-sf-abend`, sonst keine Zeile geändert (`git diff site.config.json`: zwei Zeilen). Im Plan jetzt 8 × «freigegeben» (sechs Abbildungen der Etappe 1 und die zwei neuen), 41 × «ausstehend» (Zeilen mit `format` «text» und Platzhalter, unverändert); `editorialStatus` unverändert |
| 3 Abgleich, Bemerkungen mit «Prüfbedarf» | umgesetzt | `rolle.md` Nr. 496 bis 500 enden mit «; erledigt: Freigabe Etappe 2a durch die Fachstelle, 10.10.2026»; in `selbstfuersorge.md` nennt keine Bemerkung «Prüfbedarf». Tabellen der Etappe 1 unverändert |
| 3 Abgleich, Vermerk unter «Prüfbedarf …» | umgesetzt | Unter «## Prüfbedarf für W1 (Stand 10.10.2026, Etappe 2a)» in `rolle.md` und `selbstfuersorge.md` steht als erster Absatz «**Erledigt am 10.10.2026:** Die Prüfrunde 2a hat den offenen Prüfbedarf …» im Wortlaut des Auftrags; die Listen bleiben stehen |
| 3 Kopfnotizen und README | umgesetzt | Kopfnotiz «Freigabe Etappe 2a (10.10.2026): …» in beiden Tabellen; `abgleich/README.md`: Einleitung, Ergebnis von `pruefe-abgleich.mjs` und Abschnitt «Freigabe Etappe 2a eintragen» |
| 4a Neuer Unterabschnitt | umgesetzt | «### Etappe 2a» unverändert aus `FREIGABE-ETAPPE-2A.md`, Abschnitt 4 a (Skript: Text des Auftrags ist Zeichen für Zeichen im Bericht enthalten), am Ende von «## Fachliche Freigabe der Fachstelle», direkt vor «## Selbstprüfung der bauenden Sitzung» |
| 4b Statustabelle | umgesetzt | «W1 Fachliche Prüfung»: «Geprüft durch» endet mit «; Fachstelle (Freigabe Etappe 2a)», «Ergebnis» mit «Etappe 2a (`rolle`, `selbstfuersorge`, Einstiege auf `index`) fachlich freigegeben am 10.10.2026.». «Visualisierungs-Check»: «Ergebnis» endet mit «Etappe 2a: beide Abbildungen fachlich freigegeben (Fachstelle, 10.10.2026).». Status in beiden Zeilen weiter «offen» |
| 4c Selbstprüfung | umgesetzt | dieser Block |
| 5 Prüfen | bestanden | `node tools/build.mjs`: 0 blockierend, 12 Hinweise (10 × `placeholder-approval`, `site-url`, `review-report`; die zwei `visual-approval` entfallen). `node tools/gate.mjs --selftest`: 53/53. `node tools/gate.mjs --production`: 11 blockierend (10 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`site-url`). `node abgleich/pruefe-abgleich.mjs`: 3207 Zeilen, 0 ohne Fundstelle. Pull Request bleibt Entwurf |

**Stand 10.10.2026 · Korrektur Etappe 2a-2 · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-2A2.md` (Entscheide der Fachstelle nach der Nachprüfung von 2a-K). Geändert sind nur die drei genannten Stellen, die Begründung von `v-ro-weg` im Plan und der Abgleich. `index` und die Seiten der Etappe 1 sind unverändert. Keine Prüfstufe ist «erledigt»; die nächste Prüfrunde braucht weiter eine Sitzung, die nicht gebaut hat. Der Block 2a-K steht darunter.

### Korrektur 2a-2: Stand je Abschnitt des Auftrags

| Punkt | Stand | Beleg |
| --- | --- | --- |
| Auftrag verschieben | umgesetzt | `KORREKTUR-ETAPPE-2A2.md` aus dem Stamm unverändert im Website-Ordner (`5e5464e`, `cmp`: gleich), im Stamm von `main` gelöscht (`41eb8c7`), zusammengeführt (`cfb482e`) |
| 1 Nur die genannten Stellen | eingehalten | `git status`: `content/rolle.html`, `content/selbstfuersorge.html`, die zwei gebauten Seiten, `site.config.json` (nur `v-ro-weg` › `reason`), `abgleich/rolle.md`, `abgleich/selbstfuersorge.md`, `abgleich/README.md` und dieser Bericht. In der Zeichnung sind nur die drei Pfade des Wegs neu (Fläche, zwei Kanten); Figuren, Hügel, Bäume und Gras sind Zeile für Zeile gleich (21 von 24 Zeilen, Skript) |
| 2 Weg gewunden | umgesetzt | Kein gerades Dreieck mehr: Der Weg kommt unten breit von rechts, biegt in weichen Kurven zu den Figuren, verschwindet hinter ihnen und läuft zwischen den Köpfen weiter, oben mit einer Biegung nach links bis zum Horizont. Kanten als glatte Kurven (Catmull-Rom), keine geraden Linien |
| 2 Figuren wie 2a-K | eingehalten | Die Wegkanten laufen seitlich an den Beinen vorbei und hinter den Schultern, keine berührt einen Kopf. **Kleinster Abstand Wegkante–Kopfrand: 11,3 SVG-Einheiten** (gemessen im Browser mit `getPointAtLength`, Schritt 0,25): 13,4 px bei 1280 px, 5,6 px bei 360 px (vorher 2a-K: 12,1). Ferse gehoben (je ein Bein mit Sohle), Arme bei 360 px vom Körper getrennt (Foto). Zwei Menschen nebeneinander, von hinten, gleich gross, niemand vorn |
| 2 Technik | eingehalten | nur `puk-vis-scene__ln`, `__ln--thin`, `__paper`, `__soft`; 0 Hexwerte, 0 `style`-Attribute. Kurzbeschreibung unverändert, sie trifft weiter zu («Der Weg führt durch eine Hügellandschaft in die Ferne.») |
| 2 Fotos | angesehen | `v-ro-weg` bei 1280 und 360 px, je im Standard-Theme und im Theme «kontrast» (vier Fotos der Zeichnung, dazu die ganze Abbildung bei 1280 und 360 px). Breit: Der Weg windet sich sichtbar zum Horizont, die Biegung oben ist klar. Schmal (360 px): der Weg als S-förmiges Band, die Figuren mit abgesetzten Armen und kürzerem Bein. Kontrast: Linien dunkler, nichts verschwindet. Freundin-Test: zwei Menschen gehen nebeneinander einen gewundenen Weg entlang; besteht |
| 3 `selbstfuersorge` › `kraft` | umgesetzt | Absatz im Wortlaut der Tabelle: «Einige Angehörige berichten auch von Phasen, … rechnen. Das ist eine mögliche Erfahrung, kein typischer Verlauf, und lässt sich nicht aus der Diagnose vorhersagen. Wenn Sie sich oft wachsam oder erschöpft fühlen, verdient das Aufmerksamkeit, auch wenn von aussen wenig sichtbar ist. Sie sind weder dafür verantwortlich, dass eine Beziehung vorhersehbar ist, noch dafür, die Gefühle eines anderen Menschen auszugleichen.» |
| 3 Abgleich | umgesetzt | `selbstfuersorge` Nr. 303, 304, 307 und 310 «umformuliert (2a-2)» mit der neuen Fassung; Nr. 307 hat wieder den Ort `selbstfuersorge#kraft`. Nr. 302 bleibt (Satz unverändert) |
| 4 `rolle` › `schuld` | umgesetzt | Antwort auf «Andere Familien haben dieses Problem nicht.»: «Borderline betrifft Menschen mit unterschiedlichen Lebensgeschichten und in unterschiedlichen Familien. Ein Vergleich mit anderen Familien erklärt nicht, warum jemand erkrankt. Daraus folgt keine Schuld.» Damit ist der Prüfbedarf aus 2a-K erledigt |
| 4 Abgleich | umgesetzt | `rolle` Nr. 483 «umformuliert (2a-2)» (bis 2a-K: «übernommen»); neuer Status in `abgleich/README.md` erklärt, dazu ein Abschnitt «Korrektur Etappe 2a-2» |
| 5 Build und Gates | bestanden | `node tools/build.mjs`: 0 blockierend, 14 Hinweise wie vorher. `node tools/gate.mjs --selftest`: 53/53. `node tools/gate.mjs --production`: 13 blockierend (2 × `visual-approval`, 10 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis, wie bisher. `node abgleich/pruefe-abgleich.mjs`: 3207 Zeilen, 0 ohne Fundstelle |
| 5 Liste «Neue Sätze zur Freigabe» | nachgeführt | in der Liste unten (Block 2a-K): Nr. 51 geändert, Nr. 51a und 51b neu (Abschnitt 3), Nr. 17a und 17b neu (Abschnitt 4). Alle 82 Zitate der Liste per Skript wörtlich auf den gebauten Seiten gefunden |
| 5 Keine Änderung an Etappe 1 und `index` | eingehalten | `git diff` für `content/index.html`, `content/verstehen.html`, `content/beziehungen.html`, `content/grenzen.html` und die gebauten Seiten dazu: leer |
| 5 Pull Request | Entwurf | bleibt Entwurf |

**Wörter** (`kennzahlen.mjs`; Lesefluss ohne die Panels der Akkordeons): `rolle` 3144 → 3145, im Lesefluss 2857 → 2858 (`schuld` 434 → 435); `selbstfuersorge` 2649 → 2679, im Lesefluss 2310 → 2340 (`kraft` 637 → 667, im Lesefluss 492 → 522). Abweichung vom Ziel des Auftrags 2a-K im Lesefluss: +8 % und +8 %, weiter unter 10 %.

**Stand 10.10.2026 · Korrektur Etappe 2a-K · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-2A.md` (Entscheide der Fachstelle zur Prüfrunde 2a). Geändert sind nur:

- `content/rolle.html` und `content/selbstfuersorge.html` (und die daraus gebauten Seiten)
- der Plan in `site.config.json` (`visualPlan` der zwei Seiten)
- der Abgleich (`abgleich/rolle.md`, `selbstfuersorge.md`, eine Zeile in `verstehen.md`, `README.md`)

`index` und die Seiten der Etappe 1 sind unverändert. Keine Prüfstufe ist «erledigt». **Hinweis zur Unabhängigkeit:** Dieselbe Sitzung hat die Prüfrunde 2a durchgeführt und danach diese Korrektur gebaut. Die nächste Prüfrunde braucht deshalb eine Sitzung, die weder 2a noch 2a-K gebaut oder geprüft hat. Die Selbstprüfung von 2a steht darunter.

### Korrektur 2a-K: Stand je Abschnitt des Auftrags

| Punkt | Stand | Beleg |
| --- | --- | --- |
| Auftrag verschieben | umgesetzt | `KORREKTUR-ETAPPE-2A.md` aus dem Stamm unverändert im Website-Ordner (`31e3d47`), im Stamm von `main` gelöscht (`01b63d5`), zusammengeführt (`45b5dbb`) |
| 1 Nur die genannten Teile | eingehalten | `git status`: geändert sind nur `content/rolle.html`, `content/selbstfuersorge.html`, `rolle.html`, `selbstfuersorge.html`, `site.config.json`, `abgleich/rolle.md`, `abgleich/selbstfuersorge.md`, `abgleich/verstehen.md`, `abgleich/README.md` und dieser Bericht. `git diff` für `content/index.html`, `content/verstehen.html`, `content/beziehungen.html`, `content/grenzen.html` und die gebauten Seiten dazu: leer |
| 2 Wortlaut des Auftrags | eingehalten | Alle Sätze aus Abschnitt 3, 4 und 6 per Skript wörtlich auf der gebauten Seite gefunden (Liste unten, Art «Auftrag»: Nr. 11, 12, 14 bis 18, 20, 27, 29 bis 37, 39, 43, 47, 49, 56, 58, 60) |
| 2 Bestandswortlaut vor eigener Formulierung | eingehalten | Beim Streichen von Doppelungen bleibt der Satz mit Bestandswortlaut, zum Beispiel in `schuld` der Merksatz-Absatz (`rolle` Nr. 487, 490: «übernommen»); `kinder`: «Betreuung, Unterstützung und Sicherheit müssen Erwachsene organisieren.» ist jetzt der Wortlaut von Nr. 485. Neu gefasst sind nur Sätze, in denen zwei Bestandssätze zusammenkommen (Liste unten, Art «Verdichtung») |
| 2 Keine Aussage verloren | eingehalten (Selbsteinschätzung) | Jeder Satz, der im Wortlaut entfällt, ist unten mit dem Satz genannt, der ihn trägt (Tabelle «Entfallene Sätze», 127 Sätze). Ohne Träger entfällt nur «Beides kann nebeneinander bestehen.» (E14, ohne Bezug nach dem Zusammenführen der Fragenreihen) |
| 2 Einmalige Absicherungen bleiben | eingehalten | «kein typischer Verlauf, nicht aus der Diagnose vorhersagen» (`kraft`), «Verläufe sind individuell», «nicht aus einer Diagnose ableiten», «nicht vorhersagen» (`alltag`, in einem Satz), «kein geprüftes Modell» (Drei Fragen), «Sie treten nicht bei allen Menschen mit Borderline auf.», «Aus einer Handlung allein lassen sich weder Motiv noch Charakter eines Menschen ableiten.» (`an-grenzen`), die Warnzeichen beim Atmen (`zu-viel`) und alle Gesundheitshinweise in `warnsignale` stehen weiter |
| 2 Vertiefungen | umgesetzt; Abweichung offen | Akkordeon des Profils (`div.puk-acc[data-puk-accordion]`, `templates/website/interaktion/`), Einträge geschlossen; ohne Skript offen, im Druck vollständig (Prüfungen unten). Sieben Vertiefungen auf den zwei Seiten, keine mit Schutz, Gewalt, akuter Gefahr oder Gesundheitshinweis: der Schutzsatz in `akzeptanz`, Substanzkonsum in `an-grenzen` und der Satz zur ärztlichen Abklärung in `kraft` stehen sichtbar. **Abweichung:** Der Abschnitt «Interaktionskonzept» sagt beim Akkordeon «Verzichten, wenn: … weniger als drei Einträge». Drei Akkordeons haben einen Eintrag («Drei Fragen zur Selbstklärung», «Kleine gute Momente schaffen», «Eine freiwillige Übung in vier Schritten»), eines hat zwei (Geld und plötzliche Entscheidungen), weil der Auftrag diese Teile als Vertiefung verlangt | 
| 2 Satz an mehreren Stellen | eingehalten | «Vielleicht kommt gleich eine Nachricht.» in Szene, `p.puk-sr` und Plan (`grep «ruft sie»`: 0 in `content/`, gebauten Seiten und `site.config.json`) |
| 2 Abgleich | umgesetzt | `pruefe-abgleich.mjs`: 3207 Zeilen, 0 ohne Fundstelle. Nachgeführt: `rolle.md` 154 Zeilen, `selbstfuersorge.md` 131, `verstehen.md` 1 (Nr. 485). Statuswerte «umformuliert (2a-K)», «verschoben (Vertiefung, 2a-K)», «verschoben (2a-K)», «neu (2a-K)» mit Auftragsnummer und «bis 2a: …» in der Bemerkung, erklärt in `abgleich/README.md`. Gefunden mit einem Skript, das die Sätze der gebauten Seiten vor und nach der Korrektur je Abschnitt vergleicht; danach meldet es keine Zeile mehr, deren Satz sich geändert hat, ohne Status 2a-K |
| 3 Verantwortung | umgesetzt | `rolle` › `schuld`, alle vier Sätze im Wortlaut der Tabelle: «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung …» (Absatz «Konkrete Verantwortung heisst …»), «Für Behandlung und Genesung sind Sie nicht verantwortlich.» («Ich tue nicht genug.»), «Sie müssen die Erkrankung nicht heilen und sind weder für die Behandlung noch für die Genesung verantwortlich.» (Merksatz-Absatz), «Belastende Erfahrungen können mitwirken, neben vielen anderen Einflüssen. Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.» (Eltern; gleich wie `verstehen`, Annahme 3) |
| 3 Ganze Seite geprüft | eingehalten, ein Prüfbedarf | Alle 27 Sätze von `rolle` mit «Verantwortung», «verantwortlich», «tragen» oder «allein» per Skript gelesen. Keiner legt eine Teilverantwortung für Erkrankung, Behandlung oder Genesung nahe: Kopf «… nicht ihre Behandlung oder Genesung tragen.» (ohne «allein»); `anbieten` «für den Verlauf der Genesung verantwortlich zu sein» (nicht Ihre Aufgabe); `schuld` «Sie sind nicht für den Verlauf einer anderen Person verantwortlich.», «Die Verantwortung für eigene verletzende oder gewalttätige Handlungen bleibt bestehen.» (eigene Handlungen); `kinder` «Sie sind nicht für die Erkrankung oder Behandlung ihrer Eltern verantwortlich.»; `an-grenzen` «Sie müssen die Lage nicht allein beurteilen oder absichern.» (akute Lage, nicht Erkrankung). **Prüfbedarf (nicht geändert):** «Ein Vergleich mit anderen Familien erklärt weder die Ursachen noch Ihre persönliche Verantwortung.» (`schuld`, «Andere Familien …») kann so gelesen werden, als gebe es eine persönliche Verantwortung für die Erkrankung. Vorschlag für die Fachstelle: «… erklärt weder die Ursachen noch macht er Sie verantwortlich.» oder Wortlaut der Fachstelle |
| 4.1 Kinder, erster Absatz | umgesetzt | «Betreuung, Unterstützung und Sicherheit müssen Erwachsene organisieren. Kinder müssen weder Streit schlichten noch Medikamente kontrollieren oder einen Elternteil bewachen.» |
| 4.2 «Was Sie tun können» | umgesetzt | Die zwei Verweissätze entfallen (`rolle` Nr. 764 neu gefasst, Nr. 765 «entfällt»); an ihrer Stelle «Welche zweite erwachsene Person ist erreichbar, wenn die erste ausfällt?» |
| 4.3 Letzter Absatz | umgesetzt | Reihenfolge im Quelltext: «Bei Angst, Gewalt oder fehlender Betreuung organisieren Erwachsene Hilfe.», «Bei akuter Gefahr holen Erwachsene sofort Hilfe.», `<p data-responsibility-inline></p>`, «Was bei Gewalt oder Bedrohung für Sie und die Kinder wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» (Link `grenzen.html#gewalt`), «Eine Fachstelle, die Kinderarztpraxis oder eine Familienberatung können beim Planen unterstützen.» Gate: Verweis im Text in `kinder` erlaubt (`sensitiveTopics` `gewalt`, `akute-krise`), einer je Abschnitt, nicht in `figure` |
| 4.4 Abgleich Kinder | umgesetzt | `rolle` Nr. 67, 68, 72, 736: Ort `rolle#kinder`, Status «verschoben (2a-K)»; `grenzen` unverändert (`git diff` leer) |
| 5 Kürzen, Ziel | erreicht innerhalb 10 % | Im Lesefluss `rolle` 2857 Wörter (Ziel etwa 2640, +8 %), `selbstfuersorge` 2310 (Ziel etwa 2170, +6 %); Tabelle «Wörter» unten. Gründe für den Rest: neue Sätze aus Abschnitt 3, 4 und 6 (`kinder` +51, `schuld` +4 Sätze, fünf Verweissätze), sichtbare Titel und Einleitungen der Vertiefungen, der Verweis an Stelle von «Innehalten» |
| K-R-a1 `anbieten` | umgesetzt | Die zwei Absätze «Unterstützung ist ein Angebot …» und «Was eine andere Person entscheidet …» stehen als ein Absatz vor «Was Sie tun können»; «Abstand, ein Nein oder professionelle Hilfe» einmal (Schritt 2), «nächster Schritt» im Abschnitt zweimal (Einstieg «gemeinsam nach einem nächsten Schritt fragen», Schritt 2). «Prüfen Sie ab und zu …» ist Schritt 3, «Wenn Sie unsicher sind …» Schritt 4 |
| K-R-a2 `anbieten` | umgesetzt | Listenpunkt «Therapeutin oder Therapeut zu sein, die Therapie zu kontrollieren oder Krisenhilfe zu ersetzen»; «Therapie, Psychiatrie und Beratung bieten Fachpersonen an.» bleibt als Satz nach der Liste |
| K-R-a3 `schuld` | umgesetzt | Wortlaut nach Abschnitt 3. Im Einstieg je einmal: «Ein Schuldgefühl allein entscheidet nicht …» bleibt, «Das Gefühl allein ist aber kein Nachweis …» entfällt; «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten.» und «Eigene Grenzen, Selbstschutz und Unterstützung bleiben trotzdem berechtigt.» entfallen, der Merksatz-Absatz trägt sie. Die zwei Fragenreihen sind eine: «Was habe ich konkret getan? Was braucht Anerkennung oder Wiedergutmachung? Wofür fühle ich mich verantwortlich, obwohl ich es nicht ganz beeinflussen kann? Was kann ich jetzt tun?» |
| K-R-a4 Drei Fragen | umgesetzt | Sieben Hinweise in zwei Sätzen: «Drei Fragen können Orientierung geben, und Sie dürfen sie je nach Beziehung, Situation und eigener Kraft unterschiedlich gewichten.» und «Die Fragen sind eine Hilfe zum Nachdenken, kein geprüftes Modell, und messen weder …» |
| K-R-a5 `alltag` | umgesetzt | «Was daraus folgt und ob eine Absprache wirkt, lässt sich weder aus einer Diagnose ableiten noch vorhersagen, denn Verläufe sind individuell.» (vier Absicherungen in einem Satz); «Klare Absprachen heissen nicht Härte.»; «Kleine gute Momente»: eine Begründung («Eine Beziehung darf mehr sein als …») statt drei |
| K-R-a6 `an-grenzen` | umgesetzt | Liste «Sie können nicht:» in «Was nicht Ihre Aufgabe ist» (`anbieten`) aufgenommen, Doppelungen zusammengeführt; «Über Charakter oder Absicht sagen sie nichts aus.» entfällt, «Aus einer Handlung allein lassen sich weder Motiv noch Charakter eines Menschen ableiten.» bleibt |
| K-R-a7 `mehrere` | umgesetzt | «Unterschiedliche Angehörige dürfen unterschiedliche Grenzen haben.» entfällt («Niemand muss dieselbe Rolle oder Grenze übernehmen.» bleibt); die Liste «Was hilft» steht in «Was Sie tun können» («soweit die Beteiligten das möchten», «offen und in einem ruhigen Moment»); «Was belastet» bleibt |
| K-R-b1 | umgesetzt | Akkordeon mit zwei Einträgen «Grosse Ausgaben und finanzielle Risiken» und «Plötzliche Entscheidungen: Kündigung, Umzug, Trennung» in `an-grenzen` (nicht nach `krise`); «Substanzkonsum und riskantes Verhalten» sichtbar danach |
| K-R-b2 (P2a-F-7) | umgesetzt | Die vier Schritte und der Zwischentitel «Innehalten, bevor Sie reagieren» entfallen. An ihrer Stelle, am Ende von «Fragen statt übernehmen»: «Vielleicht merken Sie, dass Ihre Anspannung steigt, dass Sie sich rechtfertigen oder sich zu sehr anpassen. Wie Sie dann innehalten können, bevor Sie reagieren, steht auf der Seite «Auf sich achten» im Abschnitt «Wenn es gerade zu viel ist».» (Link `selbstfuersorge.html#zu-viel`). Das ist ein Satz aus dem Bestand mit dem Verweissatz. «Ihre eigenen Warnsignale und Ihre Sicherheit haben Vorrang.» (Schutz) steht jetzt sichtbar nach «Respekt gilt für alle Beteiligten.». Abgleich: 21 Zeilen «zusammengeführt», meist mit STOPP |
| K-R-b3 | umgesetzt | Akkordeon «Drei Fragen zur Selbstklärung» am Ende von `anbieten`, vor der Quellenzeile; Quellenzeile um NICE NG150 (2020) ergänzt (Handout `drei-saeulen`: NICE CG78, NICE NG150) |
| K-R-b4 | umgesetzt | Akkordeon «Kleine gute Momente schaffen» in `alltag` |
| K-R-b5 | umgesetzt | Der Absatz nach der Liste wird «Dass solche gemischten Gefühle oft zur Belastung dazugehören, steht auf der Seite «Verstehen» im Abschnitt «Was Angehörige erleben können».» (Link `verstehen.html#erleben`; dort: «Solche gemischten Gefühle sind kein Zeichen mangelnder Liebe. Sie gehören oft zur Belastung dazu.»). Die Liste «Mögliche Reaktionen auf anhaltende Belastung sind:» bleibt sichtbar |
| K-S-a1 `kraft` | umgesetzt | In «Was entlasten kann» bleiben drei Punkte (Pausen, Kontakte, Interessen); dazu «Wie Sie Aufgaben abgeben, Ihre Erreichbarkeit begrenzen, sich beraten lassen und Ihr eigenes Leben bewahren können, steht im Abschnitt «Auch Sie brauchen Unterstützung».» (Link `#unterstuetzung`) |
| K-S-a2 `kraft` | umgesetzt | «Was wie schwer wiegt, ist persönlich.» entfällt («individuell» steht am Anfang); «Bleibt kein Raum …» einmal (Vertiefung «Kleine Auszeiten»), sichtbar trägt den Gedanken «Nicht jede Belastung lässt sich durch Selbstfürsorge ausgleichen. … Dann braucht es praktische Entlastung und Unterstützung von aussen.»; «Bewegung ist eine mögliche Ergänzung.» entfällt |
| K-S-a3 `eigenes-leben` | umgesetzt | «Die Sätze sind Angebote zum Auswählen, keine Pflichtliste.» statt drei Sätzen |
| K-S-a4 `warnsignale` | umgesetzt | «Die Liste ist kein Test, keine Diagnose und kein Beweis, dass Sie «zu wenig» für sich tun.»; «Was passt und verfügbar ist …» und der Satz zur Disziplin entfallen. Alle Gesundheitshinweise bleiben (fett gesetzter Satz, Hausärztin oder Hausarzt, Abklärung anderer Ursachen, «Warten Sie nicht auf bestimmte Warnzeichen.», Verweis im Text) |
| K-S-a5 `zu-viel` | umgesetzt | Einleitung «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt, und es gibt kein richtiges Ergebnis.»; die Wiederholungen bei den drei Übungen entfallen. Die Warnzeichen beim Atmen («Bei Schwindel, Luftnot oder Unwohlsein …») und «Bei Unwohlsein kehren Sie zu etwas zurück …» (STOPP) bleiben |
| K-S-a6 `unterstuetzung` | umgesetzt | «Selbstfürsorge dürfen Sie als Ihr eigenes Recht verstehen: Daraus folgt keine Pflicht, danach wieder zu unterstützen.» statt drei Sätzen; «kein persönliches Versagen» einmal im Abschnitt; «eine Auswahl» und «kein zusätzliches Programm» entfallen hier (stehen in `kraft`) |
| K-S-a7 `akzeptanz` | umgesetzt | «Es ist ein Angebot, kein Auftrag, und kann schwerfallen.» entfällt; «Er beschreibt eine Haltung, in der Gefühle, Grenzen, Unterstützung und der Einsatz für Veränderung ausdrücklich Platz haben.»; «Akzeptanz heisst nicht» mit zwei Punkten («aufgeben, resignieren oder sich aus dem Leben zurückziehen», «passiv werden: …»); der Beispielsatz «So ist es gerade. …» steht nur noch in der Übung |
| K-S-a8 `beratung` | umgesetzt | «Sie sind nicht allein.» entfällt; «… und das Gefühl, nicht allein zu sein.» bleibt |
| K-S-b1 | umgesetzt | Zwei Sätze: «Einige Angehörige berichten auch von Phasen, in denen sie Stimmungen genauer beobachten, Worte abwägen oder mit Rückzug und Ärger rechnen. Das ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen, verdient aber Aufmerksamkeit, auch wenn äusserlich wenig sichtbar ist.» Der Verweissatz auf «Wenn die Anspannung steigt» entfällt hier und steht auf `rolle` › `alltag` |
| K-S-b2 | umgesetzt | Zwischentitel «Langfristig für sich sorgen» und Einleitung sichtbar, darunter ein Akkordeon mit «Kleine Auszeiten», «Bewegung», «Kontakte»; «Bei anhaltender Erschöpfung, Schlafproblemen oder gedrückter Stimmung kann eine ärztliche oder psychotherapeutische Abklärung sinnvoll sein.» sichtbar danach |
| K-S-b3 | umgesetzt | «Je nach Ihrer Situation:» sichtbar, darunter ein Akkordeon mit «Partnerin oder Partner», «Eltern», «Erwachsenes Kind» |
| K-S-b4 | umgesetzt | Akkordeon «Eine freiwillige Übung in vier Schritten» mit Übung und Beispiel. «Was Sie tun können: Probieren Sie die Übung in vier Schritten zuerst an einer kleinen, sicheren Alltagssituation aus, wenn Sie möchten. Wählen Sie daraus einen Satz, der Ihnen hilft.» «Akzeptanz heisst auch nicht, zu bleiben, zu schweigen oder Gewalt hinzunehmen. Bei Gefahr geht Schutz vor.» und der Verweis auf `grenzen` stehen sichtbar davor |
| 6 Schutzsatz (P2a-F-4) | umgesetzt | `eigenes-leben`: `<p>Bei Gefahr hat Schutz Vorrang.</p>` direkt vor `<p data-responsibility-inline></p>` (Quelltext Zeile 3) |
| 6 Verweis bei Schuld (P2a-F-8) | umgesetzt | «Warum Angehörige nicht schuld sind, erklärt die Seite «Verstehen» im Abschnitt «Häufige Annahmen – und was realistischer ist».»; Link `verstehen.html#mythen`, Linktext gleich der Überschrift dort |
| 6 DBT (P2a-F-9) | umgesetzt | Satz unverändert mit Zusatz; `selbstfuersorge` Nr. 213 «zusammengeführt» mit `glossar.md` Z. 108 als zweiter Quelle; «zentrales Element» nicht zurück |
| 6 Satz im Abendbild | umgesetzt | Szene, `p.puk-sr` («Über dem Telefon steht der Gedanke «Vielleicht kommt gleich eine Nachricht.», …») und `visualPlan` › `v-sf-abend` › `statement` |
| 6 Vertiefung «Ein freier Abend» (P2a-S-4) | umgesetzt | «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Ständige Bereitschaft ist keine Pflicht, und wer sie spürt, macht nichts falsch.» |
| 6 Lage der Abbildungen (P2a-V-1) | umgesetzt | «Ein Stück Weg» direkt nach dem ersten Absatz von `anbieten` (endet «… annehmen, verändern oder ablehnen.»); «Ein freier Abend» direkt nach dem ersten Absatz von `kraft`; der Text danach steht je in einem Raster `bl-nach-figur`, die Quellenzeile am Ende des Abschnitts. Abstand vom Abschnittsanfang (gemessen): «Ein Stück Weg» 629 px bei 360 px und 311 px bei 1280 px (Prüfrunde 2a: 3487 und 2022 px); «Ein freier Abend» 391 und 218 px (Prüfrunde 2a: 2295 und 1368 px) |
| 6 «Ein Stück Weg» verfeinern (P2a-V-2) | umgesetzt | Die Wegkanten verlaufen zwischen den Köpfen und verschwinden hinter den Schultern; kleinster Abstand der Kanten zum Kopfrand 12,1 Einheiten im SVG (berechnet; etwa 14 px bei 1280 px, 6 px bei 360 px). Schrittstellung: je ein Bein kürzer mit sichtbarer Sohle (Ferse gehoben), links und rechts gespiegelt. Arme schräg vom Körper weg, Abstand an der Hand etwa 10 Einheiten: bei 360 px als eigene Linien neben dem Rumpf sichtbar (Bildschirmfoto). Fest geblieben: zwei Menschen nebeneinander, von hinten, gleich gross, niemand vorn, der Weg führt zwischen ihnen in die Ferne. Nur Profil-Klassen (`puk-vis-scene__ln`, `__ln--thin`, `__paper`, `__soft`), 0 Hexwerte, 0 `style`-Attribute |
| 6 «Ein freier Abend» (P2a-V-3) | eingehalten | SVG Zeichen für Zeichen gleich wie vorher (Skript), Dampf bleibt |
| 6 Seitennamen (P2a-W2-1) | umgesetzt | «… auf der Seite «Grenzen».» (`rolle` › `an-grenzen`), «… auf der Seite «Ihre Rolle» …» (`selbstfuersorge` › `unterstuetzung`). Dazu der zweite Teil von P2a-W2-1, nicht im Auftrag genannt: Der Verweis auf «Wenn die Anspannung steigt» auf `rolle` steht jetzt im Wortlaut des Verweises auf `selbstfuersorge` («Wie Anspannung in einem Gespräch steigen kann, …»), weil er an der Stelle der vier Schritte neu gesetzt ist. Die Fachstelle kann das zurücknehmen |
| 6 Begriffe (P2a-W2-5) | umgesetzt | «Anspannung» statt «Alarm»: «Vielleicht merken Sie, dass Ihre Anspannung steigt, …»; «gemischte Gefühle» (zweimal, `an-grenzen`); «… wann jemand eine Pause von der Unterstützung machen kann …» (`mehrere`) |
| 6 Klares Subjekt (P2a-S-2) | umgesetzt | «Manche sind angespannt, …» (`alltag`); «Viele wollen helfen und möchten zugleich weg. Oder sie wollen verstehen … Oder sie wollen eine Grenze setzen …» (`an-grenzen`; das klein geschriebene «sie» ist eindeutig); `unterstuetzung`: «Vielleicht merken Sie:» mit fünf Punkten (der erste aus dem einleitenden Satz, vier Aussagesätze) |
| 6 Abgleich (P2a-W1-4) | umgesetzt | `rolle` Nr. 145, 458, 655 und `selbstfuersorge` Nr. 213, 65 nachgeführt; s65 und der DBT-Zusatz stehen in der Liste unten (Nr. 64, 60) |
| 7 Prüfen | umgesetzt | unten |
| 7 Pull Request | Entwurf | bleibt Entwurf |

### Korrektur 2a-K: Wörter vorher und nachher

«Vorher» ist der geprüfte Stand der Prüfrunde 2a (`94afac7`, Werte dort nachgerechnet), «nachher» dieser Stand. `kennzahlen.mjs` zählt den ganzen Text in `main` mit allen Vertiefungen; «Lesefluss» ist dieselbe Zählung ohne die Panels der Akkordeons. C1 ist die Zählweise der Prüfrunde (Fliesstext `p`, `li`, `dt`, `dd` ohne Quellenzeilen; Skript der Prüfsitzung, im Browser), einmal mit und einmal ohne die Panels.

| Seite › Abschnitt | `kennzahlen` vorher | `kennzahlen` nachher | Lesefluss nachher | C1 vorher | C1 nachher | C1 nachher, Lesefluss |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| **`rolle`** | **3339** | **3144** | **2857** | **3107** | **2913** | **2626** |
| `anbieten` | 534 | 643 | 536 | 487 | 589 | 482 |
| `schuld` | 593 | 434 | 434 | 555 | 400 | 400 |
| `alltag` | 818 | 683 | 621 | 770 | 639 | 577 |
| `nach-konflikten` | 196 | 196 | 196 | 185 | 185 | 185 |
| `mehrere` | 192 | 169 | 169 | 176 | 153 | 153 |
| `kinder` | 257 | 308 | 308 | 237 | 288 | 288 |
| `an-grenzen` | 679 | 641 | 523 | 651 | 613 | 495 |
| **`selbstfuersorge`** | **2955** | **2649** | **2310** | **2682** | **2360** | **2021** |
| `eigenes-leben` | 366 | 356 | 253 | 344 | 328 | 225 |
| `kraft` | 790 | 637 | 492 | 745 | 588 | 443 |
| `warnsignale` | 284 | 264 | 264 | 252 | 232 | 232 |
| `zu-viel` | 485 | 450 | 450 | 440 | 405 | 405 |
| `unterstuetzung` | 433 | 383 | 383 | 419 | 369 | 369 |
| `akzeptanz` | 366 | 332 | 241 | 345 | 305 | 214 |
| `beratung` | 187 | 183 | 183 | 112 | 108 | 108 |
| **`index`** | 283 | 283 | 283 | – | – | – |

- **Ziel:** im Lesefluss etwa 2640 (`rolle`) und 2170 (`selbstfuersorge`), gemessen mit `kennzahlen.mjs` ohne Panels: 2857 (+8,2 %) und 2310 (+6,5 %), beide unter 10 %. In der Zählweise C1 entspricht das Ziel etwa 2457 und 1970 (gleicher Anteil); erreicht sind 2626 (+6,9 %) und 2021 (+2,6 %). Ohne Vertiefungen gezählt sind die Seiten um 15 % (`rolle`) und 25 % (`selbstfuersorge`) kürzer als vorher (C1).
- **Weitere Kennzahlen C1 im Lesefluss, vorher → nachher:** `rolle` 345 → 275 Sätze, Ø 9,0 → 9,5 Wörter, über 15 Wörter 32 (9 %) → 32 (12 %), Sätze mit Verneinung 82 (24 %) → 63 (23 %); `selbstfuersorge` 289 → 215 Sätze, Ø 9,3 → 9,4, über 15 Wörter 23 (8 %) → 21 (10 %), Verneinung 66 (23 %) → 44 (20 %). Der Anteil langer Sätze steigt, weil Verdichten Sätze zusammenführt (zum Beispiel K-R-a5, K-S-b1). `rolle` › `schuld` hat 46 % Sätze mit Verneinung (vorher 39 %): Die Sätze aus Abschnitt 3 enthalten «nicht verantwortlich» und «keine Schuld und keine Aufteilung», Wortlaut des Auftrags.
- **`verneinung.mjs`:** `rolle` 83 von 389 → 70 von 351 (20 %), `selbstfuersorge` 69 von 330 → 54 von 293 (18 %). Absicherungen je 100 Wörter (`kennzahlen.mjs`): `rolle` 2,16 → 2,16, `selbstfuersorge` 2,64 → 2,53. Semikolons im Fliesstext: 2 und 2 wie vorher.
- **Höhe bei 360 px** (`bedienung.mjs`): `rolle` 30 067 → 26 243 px, `selbstfuersorge` 25 453 → 21 947 px.

### Korrektur 2a-K: Prüfungen nach Abschnitt 7

- **`node tools/build.mjs`:** 0 blockierend, 14 Hinweise (wie vorher: 2 × `visual-approval`, 10 × `placeholder-approval`, `site-url`, `review-report`).
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 13 blockierend und 1 Hinweis (`site-url`), wie bisher: 2 × `visual-approval`, 10 × `placeholder-approval`, 1 × `review-report`.
- **`node abgleich/pruefe-abgleich.mjs`:** 3207 Zeilen, 0 ohne Fundstelle.
- **Bildschirmfotos** (Chromium, Faktor 2, alle angesehen):
  - beide Abbildungen bei 1280 und 360 px, dazu bei 360 px im Theme «kontrast»;
  - jede Vertiefung bei 1280 und 360 px geschlossen und geöffnet: `rolle` drei Akkordeons (Drei Fragen, Kleine gute Momente, Geld und Entscheidungen), `selbstfuersorge` drei (Je nach Ihrer Situation, Langfristig für sich sorgen, Übung), zusammen 24 Fotos.
  - «Ein Stück Weg»: Die Kanten laufen zwischen den Köpfen zum Horizont und verschwinden hinter den Schultern. Bei 360 px sind die Arme als eigene Linien neben dem Rumpf zu sehen, die kürzeren Beine mit Sohle zeigen das Gehen. Kontrast-Theme: Linien dunkler, nichts verschwindet.
  - «Ein freier Abend»: unverändert bis auf den Gedanken. «Vielleicht kommt gleich eine Nachricht.» bricht breit und schmal in zwei Zeilen um (Höhe bei 360 px 707 statt 680 px).
  - Vertiefungen: Kopfzeile in Lesegrösse mit Chevron rechts, Haarlinien, geöffnet mit Listen und Begriffslisten in gewohnter Form; kein Text abgeschnitten.
- **Überlauf:** 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px, je mit geschlossenen und mit geöffneten Vertiefungen, auf `rolle`, `selbstfuersorge`, `index` und den drei Seiten der Etappe 1: kein waagrechter Überlauf, kein Element ausserhalb des Fensters. 640 px entspricht 200 % Zoom bei 1280 px.
- **Tastatur und Fokus** (1280 px, Tab ab Seitenanfang): Alle Knöpfe der Vertiefungen sind erreichbar (`rolle` 4 von 4, `selbstfuersorge` 7 von 7), alle mit sichtbarem Fokusring (`box-shadow` des Profils). Enter öffnet (`aria-expanded` «true», Panel sichtbar), Leertaste schliesst, Pfeil ab wechselt innerhalb eines Akkordeons mit mehreren Einträgen zum nächsten Knopf (`rolle` 2 von 2, `selbstfuersorge` 6 von 6). Tabstopps: `rolle` 30 (vorher 24), `selbstfuersorge` 28 (21): die Knöpfe der Vertiefungen und neue Verweise.
- **Ohne Skript:** alle 11 Panels offen und sichtbar (JavaScript aus).
- **Druckansicht** (`emulateMedia` «print», dazu PDF): alle 11 Panels werden gezeigt, obwohl sie geschlossen sind (`hidden`); keine Chevrons. Foto der gedruckten Vertiefung «Drei Fragen zur Selbstklärung»: vollständig.
- **Keine Änderung an Etappe 1 und `index`:** `git diff` für `content/` und die gebauten Seiten von `index`, `verstehen`, `beziehungen`, `grenzen`: leer.
- **Technik:** keine `style`-Attribute, keine Hexwerte, keine Inline-Skripte in den zwei Quelltexten; `interaktion.js` bindet der Build ein (Gate ohne Befund `interaction-script`). Kein `tel:`, keine Telefonnummer; Verweis im Text nur über den Platzhalter (`rolle`: `kinder`, `an-grenzen`; `selbstfuersorge`: `eigenes-leben`, `warnsignale`, `zu-viel`).
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Korrektur 2a-K: Visualisierungs-Check der zwei Abbildungen

Selbstprüfung, keine Prüfstufe. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Geändert gegenüber 2a sind die Punkte 3, 8, 9, 12, 15 und 17.

| Nr. | Prüfpunkt | `v-ro-weg` | `v-sf-abend` | Beleg | Massnahme |
| --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | Build ohne Hinweis `visual-plan`; `statement` nachgeführt (Weg: «… in leichter Schrittstellung …»; Abend: «Vielleicht kommt gleich eine Nachricht.») | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | E | je 7 Zeilen; Begründungen nennen die Vertiefungen, zum Beispiel `v-ro-alltag`: «… «Kleine gute Momente schaffen» steht als Vertiefung (Akkordeon, K-R-b4) …» | – |
| 3 | Prüffrage beantwortet und eingelöst | E | E | Weg: «Dass Begleiten und den Weg selbst gehen zwei verschiedene Dinge sind …»; die Gehbewegung ist jetzt sichtbar (Schrittstellung). Abend: unverändert | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | E | Kernaussage und Kurztext sichtbar; Vertiefungen nennen Grenzen des Bildes («Ständige Bereitschaft ist keine Pflicht, und wer sie spürt, macht nichts falsch.») | – |
| 5 | Ansatzpunkt (B, C, G) | – | – | Illustrationen (Muster D) | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | je die einzige Abbildung der Seite | – |
| 7 | Kartenraster-Check | E | E | keine Kastenreihe | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | E | Weg: beide gleich gross auf derselben Höhe, der Weg führt zwischen ihnen in die Ferne; die Kanten enden nicht mehr in den Köpfen. Abend: unverändert | – |
| 9 | Verteilt, keine Textwand | T | T | Die Abbildungen stehen jetzt am Anfang des Abschnitts (629 und 391 px nach dem Abschnittsanfang bei 360 px). Seiten im Lesefluss 2857 und 2310 Wörter, 26 243 und 21 947 px bei 360 px | Fachstelle (Länge, nach Lesen) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle | E | E | Vertiefungen und Quellen wie vorher, Abend mit dem Wortlaut des Auftrags | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | E | SVG ohne Animation; Sätze, Kernaussage, Kurztext sind HTML-Text | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | E | Kein Überlauf bei 320 px. Weg: Arme und Schrittstellung bei 360 px erkennbar. Kurzbeschreibungen über `aria-describedby`; Abend mit dem neuen Gedanken | – |
| 13 | Theme «kontrast» geprüft | E | E | Bildschirmfotos bei 360 px; keine festen Farben | – |
| 14 | Inhalt fachlich freigegeben | N | N | `approvalStatus` «ausstehend»; Gate production: `visual-approval` | Fachstelle (P2a-F-6) |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | T | Weg: wie 2a. Abend: Die Erlaubnis steht jetzt auch in der Vertiefung («Ständige Bereitschaft ist keine Pflicht …»), im Bild selbst weiterhin nicht | R2 |
| 16 | Ein Bild, eine Idee; Beschriftungen nennen Erleben | E | E | je ein Gedanke aus Sicht eines Menschen, kein Bildteil beschriftet | – |
| 17 | Keine ungewollten Bedeutungen | T | E | Weg: Die Kanten, die zu den Schultern laufen, könnten breit als «V» gelesen werden; die Fläche des Wegs ist durchgehend blau, das trägt die Lesart «Weg». Der Weg «in die Ferne» kann ein Ziel nahelegen; die Vertiefung sagt, dass sich der Verlauf nicht vorhersagen lässt. Abend: Der Gedanke nennt keine Person mehr | R2 |

**Freundin-Test (bauende Sitzung):** «Ein Stück Weg» besteht ihn weiter: Zwei Menschen gehen nebeneinander einen Weg entlang, jetzt sichtbar im Gehen. «Ein freier Abend» besteht ihn: Ein Abend mit kaltem Tee und dem Blick aufs Telefon, «Vielleicht kommt gleich eine Nachricht.», ist ohne Erklärung verständlich.

### Korrektur 2a-K: Neue Sätze zur Freigabe (vollständig, Stand nach Korrektur 2a-2)

Grundlage für die Freigabe durch die Fachstelle (P2a-F-5). Die Liste ersetzt die Liste von 2a darunter. Nachgeführt in Korrektur 2a-2: Nr. 17a und 17b neu, Nr. 51 geändert, Nr. 51a und 51b neu. Sie enthält alle Sätze der zwei Seiten und von `index`, die nicht im Wortlaut aus dem Bestand stammen oder in 2a-K neu gefasst sind. Jeder Satz ist per Skript wörtlich auf der gebauten Seite gefunden.

**Art:** «neu (2a)» = schon in der Liste von 2a, unverändert · «Auftrag» = Wortlaut des Korrekturauftrags (Abschnitt 3, 4 oder 6) · «neu (2a-K)» = neuer Verweissatz oder Satz ohne Bestandssatz · «Verdichtung» = zwei oder mehr Bestandssätze zu einem zusammengeführt (Kürzen nach Abschnitt 5; Inhalt aus dem Bestand, Wortlaut neu) · «Bestand» = im Auftrag genannter Satz, der wörtlich im Bestand steht (zur Vollständigkeit).

| Nr. | Satz | Ort | Art | Abgleich |
| --- | --- | --- | --- | --- |
| 1 | «Sie können begleiten.» (Kernaussage; «Genesung herstellen können Sie nicht.» aus `garten`) | `rolle` › `anbieten`, Abbildung 1 | neu (2a) | r757 |
| 2 | «Zeichnung: Zwei Menschen gehen nebeneinander auf einem Weg, von hinten gesehen. Der Weg führt durch eine Hügellandschaft in die Ferne. Darüber steht der Satz: «Ich kann diesen Weg begleiten, aber nicht für dich gehen.»» (Kurzbeschreibung; trifft auch auf die verfeinerte Zeichnung zu) | `rolle` › `anbieten`, Abbildung 1 | neu (2a) | r758 |
| 3 | «Therapeutin oder Therapeut zu sein, die Therapie zu kontrollieren oder Krisenhilfe zu ersetzen» (Listenpunkt «Was nicht Ihre Aufgabe ist») | `rolle` › `anbieten` | Verdichtung (K-R-a2, a6) | r27 u. a. |
| 4 | «jede Anspannung aufzufangen oder auf Dauer die Gefühle eines anderen Menschen auszugleichen» | `rolle` › `anbieten` | Verdichtung (K-R-a6) | r28, r292 |
| 5 | «jede Krise oder Eskalation zu verhindern oder alle Auslöser zu vermeiden» | `rolle` › `anbieten` | Verdichtung (K-R-a6) | r18, r293, r294 |
| 6 | «Verhalten ständig zu überwachen oder eine Entwicklung zu erzwingen» | `rolle` › `anbieten` | Verdichtung (K-R-a6) | r30, r334 |
| 7 | «Wählen Sie Ihren nächsten Schritt danach, was Ihnen wichtig, möglich und sicher ist: ein Angebot oder eine Grenze.» | `rolle` › `anbieten`, «Was Sie tun können» | Verdichtung (K-R-a1) | r404, r417 u. a. |
| 8 | «Auch Abstand, ein Nein oder professionelle Hilfe können verantwortbar sein, wenn das nötig ist oder Sie entlastet.» | `rolle` › `anbieten`, «Was Sie tun können» | Verdichtung (K-R-a1) | r21, r423 u. a. |
| 9 | «Drei Fragen können Orientierung geben, und Sie dürfen sie je nach Beziehung, Situation und eigener Kraft unterschiedlich gewichten.» | `rolle` › `anbieten`, Vertiefung «Drei Fragen zur Selbstklärung» | Verdichtung (K-R-a4) | r515, r524 |
| 10 | «Die Fragen sind eine Hilfe zum Nachdenken, kein geprüftes Modell, und messen weder die Qualität einer Beziehung noch, ob Sie genug unterstützen.» | `rolle` › `anbieten`, Vertiefung | Verdichtung (K-R-a4) | r526, r534 |
| 11 | «Warum Angehörige nicht schuld sind, erklärt die Seite «Verstehen» im Abschnitt «Häufige Annahmen – und was realistischer ist».» | `rolle` › `schuld` | Auftrag (Abschnitt 6, P2a-F-8) | r760 |
| 12 | «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» | `rolle` › `schuld` | Auftrag (Abschnitt 3) | r470, s55 |
| 13 | «Wofür fühle ich mich verantwortlich, obwohl ich es nicht ganz beeinflussen kann?» (in der Fragenreihe von «Was Sie tun können») | `rolle` › `schuld` | Verdichtung (K-R-a3) | s53 |
| 14 | «Belastende Erfahrungen können mitwirken, neben vielen anderen Einflüssen.» | `rolle` › `schuld`, «Wenn ich ein besserer Elternteil …» | Auftrag (Abschnitt 3) | r476 |
| 15 | «Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.» | `rolle` › `schuld`, ebenda | Auftrag (Abschnitt 3) | r768 |
| 16 | «Für Behandlung und Genesung sind Sie nicht verantwortlich.» | `rolle` › `schuld`, «Ich tue nicht genug.» | Auftrag (Abschnitt 3) | r479 |
| 17 | «Sie müssen die Erkrankung nicht heilen und sind weder für die Behandlung noch für die Genesung verantwortlich.» | `rolle` › `schuld`, Merksatz-Absatz | Auftrag (Abschnitt 3) | r488 |
| 17a | «Ein Vergleich mit anderen Familien erklärt nicht, warum jemand erkrankt.» (Antwort auf «Andere Familien haben dieses Problem nicht.») | `rolle` › `schuld` | Auftrag 2a-2 (Abschnitt 4) | r483 |
| 17b | «Daraus folgt keine Schuld.» (ebenda; Wortlaut nach `verstehen`, Annahme 3) | `rolle` › `schuld` | Auftrag 2a-2 (Abschnitt 4) | r483 |
| 18 | «Manche sind angespannt, tasten sich vorsichtig heran oder ziehen sich nach Konflikten zurück.» | `rolle` › `alltag` | Auftrag (Abschnitt 6, P2a-S-2) | – |
| 19 | «Wie Sie Ihre Erreichbarkeit begrenzen können, steht auf der Seite «Auf sich achten» im Abschnitt «Was Kraft kostet und was entlastet».» | `rolle` › `alltag` | neu (2a) | r761 |
| 20 | «Vielleicht merken Sie, dass Ihre Anspannung steigt, dass Sie sich rechtfertigen oder sich zu sehr anpassen.» | `rolle` › `alltag`, «Fragen statt übernehmen» | Auftrag (Abschnitt 6, P2a-W2-5) | r205 |
| 21 | «Wie Sie dann innehalten können, bevor Sie reagieren, steht auf der Seite «Auf sich achten» im Abschnitt «Wenn es gerade zu viel ist».» | `rolle` › `alltag` | neu (2a-K), K-R-b2 | r759 |
| 22 | «Wie Anspannung in einem Gespräch steigen kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» (gleicher Wortlaut wie bisher auf `selbstfuersorge`, dort entfallen) | `rolle` › `alltag` | neu (2a-K), P2a-W2-1 | r762 |
| 23 | «Was daraus folgt und ob eine Absprache wirkt, lässt sich weder aus einer Diagnose ableiten noch vorhersagen, denn Verläufe sind individuell.» | `rolle` › `alltag`, «Absprachen klar und anpassbar halten» | Verdichtung (K-R-a5) | r561, r571, r641 u. a. |
| 24 | «Klare Absprachen heissen nicht Härte.» und «Veränderung braucht Zeit.» (Teile zweier Bestandssätze) | `rolle` › `alltag`, ebenda | Verdichtung (K-R-a5) | r573, r574 |
| 25 | «Zur Unterstützung im Alltag gehört deshalb auch, kleine gemeinsame Momente ohne Belastung zu schützen.» | `rolle` › `alltag`, Vertiefung «Kleine gute Momente schaffen» | Verdichtung (K-R-a5) | r217, r219 |
| 26 | «Was ein solches Gespräch klären kann, steht auf der Seite «Beziehungen» im Abschnitt «Was die Beziehung stärken kann».» | `rolle` › `nach-konflikten` | neu (2a) | r763 |
| 27 | «Was Sie tun können: Klären Sie gemeinsam, soweit die Beteiligten das möchten, wer was übernehmen möchte, wann jemand eine Pause von der Unterstützung machen kann und welche Grenzen gelten.» | `rolle` › `mehrere` | Verdichtung (K-R-a7) und Auftrag (Abschnitt 6, Pause) | r577, r49 u. a. |
| 28 | «Besprechen Sie Unterschiede offen und in einem ruhigen Moment, und beziehen Sie die betroffene Person ein, soweit sie das möchte.» | `rolle` › `mehrere` | Verdichtung (K-R-a7) | r579, r50, r52 |
| 29 | «Betreuung, Unterstützung und Sicherheit müssen Erwachsene organisieren.» | `rolle` › `kinder`, erster Absatz | Auftrag (Abschnitt 4), Bestand | r485, r67 |
| 30 | «Kinder müssen weder Streit schlichten noch Medikamente kontrollieren oder einen Elternteil bewachen.» (steht auch auf `grenzen`) | `rolle` › `kinder`, erster Absatz | Auftrag (Abschnitt 4), Bestand | r68 |
| 31 | «Welche zweite erwachsene Person ist erreichbar, wenn die erste ausfällt?» | `rolle` › `kinder`, «Was Sie tun können» | Auftrag (Abschnitt 4), Bestand | r736 |
| 32 | «Bei Angst, Gewalt oder fehlender Betreuung organisieren Erwachsene Hilfe.» | `rolle` › `kinder`, letzter Absatz | Auftrag (Abschnitt 4), Bestand | r742 |
| 33 | «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» (danach der Verweis im Text, Wortlaut aus `responsibility.inline`) | `rolle` › `kinder`, letzter Absatz | Auftrag (Abschnitt 4), Bestand | r72 |
| 34 | «Was bei Gewalt oder Bedrohung für Sie und die Kinder wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `rolle` › `kinder` | Auftrag (Abschnitt 4) | r764 |
| 35 | «Eine Fachstelle, die Kinderarztpraxis oder eine Familienberatung können beim Planen unterstützen.» | `rolle` › `kinder` | Auftrag (Abschnitt 4), unverändert aus 2a | r743 |
| 36 | «Viele Angehörige erleben nicht nur die Belastung der betroffenen Person, sondern auch eigene gemischte Gefühle.» | `rolle` › `an-grenzen` | Auftrag (Abschnitt 6, P2a-W2-5) | r33 |
| 37 | «Viele wollen helfen und möchten zugleich weg. Oder sie wollen verstehen und werden innerlich hart. Oder sie wollen eine Grenze setzen und geben dann aus Schuld doch wieder nach.» | `rolle` › `an-grenzen` | Auftrag (Abschnitt 6, P2a-S-2) | – |
| 38 | «Dass solche gemischten Gefühle oft zur Belastung dazugehören, steht auf der Seite «Verstehen» im Abschnitt «Was Angehörige erleben können».» | `rolle` › `an-grenzen` | neu (2a-K), K-R-b5 | r769, r40 |
| 39 | «Wie Sie Grenzen setzen und halten, steht auf der Seite «Grenzen».» | `rolle` › `an-grenzen` | Auftrag (Abschnitt 6, P2a-W2-1) | r43 |
| 40 | «Was bei Gewalt wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `rolle` › `an-grenzen`, nach dem Verweis im Text | neu (2a) | r766 |
| 41 | «Wie Sie auf sich achten können, steht auf der Seite «Auf sich achten».» | `rolle` › `an-grenzen` | neu (2a) | r767 |
| 42 | «Kurze Übungen finden Sie im Abschnitt «Wenn es gerade zu viel ist».» | `selbstfuersorge` › `eigenes-leben` | neu (2a) | s667 |
| 43 | «Bei Gefahr hat Schutz Vorrang.» (direkt vor dem Verweis im Text) | `selbstfuersorge` › `eigenes-leben` | Auftrag (Abschnitt 6, P2a-F-4), Bestand | s15 |
| 44 | «Manche Angehörige bleiben auch an einem freien Abend innerlich auf Abruf.» (Kernaussage) | `selbstfuersorge` › `kraft`, Abbildung 1 | neu (2a) | s659 |
| 45 | «Das Buch liegt bereit, der Tee wird kalt, und ein Teil der Aufmerksamkeit bleibt beim Telefon. Diese ständige Bereitschaft kann Kraft kosten, auch wenn nichts passiert.» (Kurztext) | `selbstfuersorge` › `kraft`, Abbildung 1 | neu (2a) | s660 |
| 46 | «Eigentlich wollte ich lesen.» (Satz in der Szene) | `selbstfuersorge` › `kraft`, Abbildung 1 | neu (2a) | s662 |
| 47 | «Vielleicht kommt gleich eine Nachricht.» (Satz in der Szene, auch in der Kurzbeschreibung und im Plan) | `selbstfuersorge` › `kraft`, Abbildung 1 | Auftrag (Abschnitt 6, P2a-T-2) | s661 |
| 48 | «Zeichnung eines Tisches am Abend: eine Tasse Tee, ein Mobiltelefon mit leuchtendem Bildschirm und ein geschlossenes Buch; im Fenster steht der Mond. Über dem Telefon steht der Gedanke «Vielleicht kommt gleich eine Nachricht.», über dem Buch «Eigentlich wollte ich lesen.»» (Kurzbeschreibung) | `selbstfuersorge` › `kraft`, Abbildung 1 | neu (2a), Satz nach Abschnitt 6 | s664 |
| 49 | «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Ständige Bereitschaft ist keine Pflicht, und wer sie spürt, macht nichts falsch.» (Vertiefung) | `selbstfuersorge` › `kraft`, Abbildung 1 | Auftrag (Abschnitt 6, P2a-S-4) | s663 |
| 50 | «Wie Sie Aufgaben abgeben, Ihre Erreichbarkeit begrenzen, sich beraten lassen und Ihr eigenes Leben bewahren können, steht im Abschnitt «Auch Sie brauchen Unterstützung».» | `selbstfuersorge` › `kraft` | neu (2a-K), K-S-a1 | s671 |
| 51 | «Das ist eine mögliche Erfahrung, kein typischer Verlauf, und lässt sich nicht aus der Diagnose vorhersagen.» | `selbstfuersorge` › `kraft` | Auftrag 2a-2 (Abschnitt 3) | s303 |
| 51a | «Wenn Sie sich oft wachsam oder erschöpft fühlen, verdient das Aufmerksamkeit, auch wenn von aussen wenig sichtbar ist.» | `selbstfuersorge` › `kraft` | Auftrag 2a-2 (Abschnitt 3) | s304, s310 |
| 51b | «Sie sind weder dafür verantwortlich, dass eine Beziehung vorhersehbar ist, noch dafür, die Gefühle eines anderen Menschen auszugleichen.» | `selbstfuersorge` › `kraft` | Auftrag 2a-2 (Abschnitt 3) | s307 |
| 52 | «Die Liste ist kein Test, keine Diagnose und kein Beweis, dass Sie «zu wenig» für sich tun.» | `selbstfuersorge` › `warnsignale` | Verdichtung (K-S-a4) | s68, s69 u. a. |
| 53 | «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt, und es gibt kein richtiges Ergebnis.» | `selbstfuersorge` › `zu-viel` | Verdichtung (K-S-a5) | s32, s524 u. a. |
| 54 | «Ruhig atmen» (Zwischentitel) | `selbstfuersorge` › `zu-viel` | neu (2a) | s665 |
| 55 | «5-4-3-2-1: im Hier und Jetzt ankommen» (Zwischentitel) | `selbstfuersorge` › `zu-viel` | neu (2a) | s666 |
| 56 | «Vielleicht merken Sie:» mit den Punkten «Ihre eigenen Bedürfnisse kommen zu kurz», «Sie sind fast nur noch für andere da», «Sie schieben Pausen, Schlaf oder Unterstützung auf», «Sie haben das Gefühl, nie genug zu tun und trotzdem nicht zu genügen», «Sie sind erschöpft und gereizt» | `selbstfuersorge` › `unterstuetzung` | Auftrag (Abschnitt 6, P2a-S-2) | s345, s347 bis s349 |
| 57 | «Selbstfürsorge dürfen Sie als Ihr eigenes Recht verstehen: Daraus folgt keine Pflicht, danach wieder zu unterstützen.» | `selbstfuersorge` › `unterstuetzung` | Verdichtung (K-S-a6) | s333, s339, s351 |
| 58 | «Mehr zu Schuldgefühlen steht auf der Seite «Ihre Rolle» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | `selbstfuersorge` › `unterstuetzung` | Auftrag (Abschnitt 6, P2a-W2-1) | s669 |
| 59 | «Er beschreibt eine Haltung, in der Gefühle, Grenzen, Unterstützung und der Einsatz für Veränderung ausdrücklich Platz haben.» | `selbstfuersorge` › `akzeptanz` | Verdichtung (K-S-a7) | s194, s214 |
| 60 | «… einer wissenschaftlich untersuchten Psychotherapie für Borderline.» (DBT-Zusatz in «Der Begriff stammt aus der Dialektisch-Behavioralen Therapie (DBT), einer wissenschaftlich untersuchten Psychotherapie für Borderline.»; Quelle `glossar.md` Z. 108) | `selbstfuersorge` › `akzeptanz` | Auftrag (Abschnitt 6, P2a-F-9) | s213 |
| 61 | «aufgeben, resignieren oder sich aus dem Leben zurückziehen» (Listenpunkt «Akzeptanz heisst nicht») | `selbstfuersorge` › `akzeptanz` | Verdichtung (K-S-a7) | s195, s198 u. a. |
| 62 | «Was dann wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `selbstfuersorge` › `akzeptanz`, nach «Bei Gefahr geht Schutz vor.» | neu (2a) | s670 |
| 63 | «Was Sie tun können: Probieren Sie die Übung in vier Schritten zuerst an einer kleinen, sicheren Alltagssituation aus, wenn Sie möchten. Wählen Sie daraus einen Satz, der Ihnen hilft.» | `selbstfuersorge` › `akzeptanz` | Verdichtung (K-S-a7, b4) | s592, s593 |
| 64 | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» (Verweissatz zur Startseite) | `selbstfuersorge` › `beratung` | neu (Verweissatz an Stelle eines Bestandslinks; P2a-W1-4) | s65 |
| 65 | «Ich weiss nicht mehr, was meine Aufgabe ist und was nicht.» (Anliegen) | `index` › `einstiege`, Eintrag `rolle` | neu (2a) | `index` Nr. 255 |
| 66 | «Ich bin erschöpft und komme selbst zu kurz.» (Anliegen) | `index` › `einstiege`, Eintrag `selbstfuersorge` | neu (2a) | `index` Nr. 256 |

**Aus der Liste von 2a entfallen:** Nr. 3 «Innehalten, bevor Sie reagieren» (K-R-b2), Nr. 4 (ersetzt durch Nr. 11), Nr. 6 (ersetzt durch Nr. 22), Nr. 8 und 9 (ersetzt durch Nr. 31 und 34), Nr. 14 (ersetzt durch Nr. 47), Nr. 16 (ersetzt durch Nr. 49), Nr. 21 (auf `selbstfuersorge` entfallen, steht als Nr. 22 auf `rolle`), Nr. 22 (ersetzt durch Nr. 58). **Titel der Vertiefungen:** Alle stammen aus dem Bestand, «Eine freiwillige Übung in vier Schritten» ist der Zwischentitel von 2a ohne Doppelpunkt (Bestand: «Freiwillige Übung: vier mögliche Schritte»).

### Korrektur 2a-K: Entfallene Sätze

Jeder Satz der gebauten Seiten von 2a, der im neuen Stand nicht mehr im Wortlaut auf der Seite steht, mit dem Satz, der seine Aussage jetzt trägt. Ermittelt per Skript (Sätze der gebauten Seiten vorher und nachher je Abschnitt); Sätze, die nur in eine Vertiefung oder einen anderen Abschnitt gewandert sind, fehlen hier (sie stehen im Abgleich als «verschoben (Vertiefung, 2a-K)»). Abgleich: r = `rolle.md`, s = `selbstfuersorge.md`, v = `verstehen.md`.

| Nr. | Seite › Abschnitt | Satz bis 2a | jetzt getragen von | Abgleich | Auftrag |
| --- | --- | --- | --- | --- | --- |
| E1 | `rolle` › `anbieten` | «Therapeutin oder Therapeut zu sein oder die Therapie zu kontrollieren» | «Therapeutin oder Therapeut zu sein, die Therapie zu kontrollieren oder Krisenhilfe zu ersetzen» | r27, r314, r332, r340 | K-R-a2 |
| E2 | `rolle` › `anbieten` | «Verhalten ständig zu überwachen oder etwas zu erzwingen» | «Verhalten ständig zu überwachen oder eine Entwicklung zu erzwingen» | r30, r334 | K-R-a6 |
| E3 | `rolle` › `anbieten` | «Behandlung, Krisenhilfe oder Kontrolle müssen Sie nicht übernehmen.» | «Therapeutin oder Therapeut zu sein, die Therapie zu kontrollieren oder Krisenhilfe zu ersetzen» | r338 | K-R-a2 |
| E4 | `rolle` › `anbieten` | «Auch Abstand, ein Nein oder professionelle Hilfe können ein verantwortbarer nächster Schritt sein.» | «Auch Abstand, ein Nein oder professionelle Hilfe können verantwortbar sein, wenn das nötig ist oder Sie entlastet.» | r21, r602 | K-R-a1 |
| E5 | `rolle` › `anbieten` | «Ihren eigenen nächsten Schritt dürfen Sie danach ausrichten, was Ihnen wichtig, was möglich und was sicher ist.» | «Wählen Sie Ihren nächsten Schritt danach, was Ihnen wichtig, möglich und sicher ist: ein Angebot oder eine Grenze.» | r404, r411, r420, v485 | K-R-a1 |
| E6 | `rolle` › `anbieten` | «Wählen Sie Ihren nächsten Schritt: ein Angebot oder eine Grenze.» | «Wählen Sie Ihren nächsten Schritt danach, was Ihnen wichtig, möglich und sicher ist: ein Angebot oder eine Grenze.» | r417 | K-R-a1 |
| E7 | `rolle` › `anbieten` | «Holen Sie Beratung oder Hilfe, und nehmen Sie Abstand, wenn das nötig ist oder Sie entlastet.» | «Auch Abstand, ein Nein oder professionelle Hilfe können verantwortbar sein, wenn das nötig ist oder Sie entlastet.» | r379, r418, r423 | K-R-a1 |
| E8 | `rolle` › `anbieten` | «Quellen: Berkowitz und Gunderson, Family Guidelines (NEABPD); Mason und Kreger (2014); NICE CG78 (2009).» | «Quellen: Berkowitz und Gunderson, Family Guidelines (NEABPD); Mason und Kreger (2014); NICE CG78 (2009); NICE NG150 (2020).» | r348, r349, r350, r351 | K-R-b3 |
| E9 | `rolle` › `schuld` | «Das Gefühl allein ist aber kein Nachweis persönlicher Schuld.» | «Ein Schuldgefühl allein entscheidet nicht, ob Sie etwas falsch gemacht haben.» | r452 | K-R-a3 |
| E10 | `rolle` › `schuld` | «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten.» | «Eine Diagnose weist Ihnen keine persönliche Schuld zu.» | r441, r454 | K-R-a3 |
| E11 | `rolle` › `schuld` | «Warum Borderline nicht eine einzige Ursache hat, erklärt die Seite «Verstehen» im Abschnitt «Was die Diagnose beschreiben kann».» | «Warum Angehörige nicht schuld sind, erklärt die Seite «Verstehen» im Abschnitt «Häufige Annahmen – und was realistischer ist».» | r760 | P2a-F-8 |
| E12 | `rolle` › `schuld` | «Fragen Sie sich: Gibt es ein eigenes Verhalten, das Sie bedauern und verändern möchten?» | «Was habe ich konkret getan?» | s52 | K-R-a3 |
| E13 | `rolle` › `schuld` | «Oder fühlen Sie sich für etwas verantwortlich, das Sie nicht ganz beeinflussen können?» | «Wofür fühle ich mich verantwortlich, obwohl ich es nicht ganz beeinflussen kann?» | s53 | K-R-a3 |
| E14 | `rolle` › `schuld` | «Beides kann nebeneinander bestehen.» | entfällt: Die zwei Fragenreihen stehen als eine; beide Fragen stehen nebeneinander, der Satz hätte keinen klaren Bezug mehr | s54 | K-R-a3 |
| E15 | `rolle` › `schuld` | «Sie können einen eigenen Fehler anerkennen, ohne die ganze Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» | «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» | r470, s55 | P2a-F-1 |
| E16 | `rolle` › `schuld` | «Eigene Grenzen, Selbstschutz und Unterstützung bleiben trotzdem berechtigt.» | «Grenzen, Schutz und eigene Unterstützung sind berechtigt.» | r472 | K-R-a3 |
| E17 | `rolle` › `schuld` | «Belastende Erfahrungen können mitwirken.» | «Belastende Erfahrungen können mitwirken, neben vielen anderen Einflüssen.» | r476 | Abschnitt 3 |
| E18 | `rolle` › `schuld` | «Behandlung und Genesung müssen Sie nicht allein tragen.» | «Für Behandlung und Genesung sind Sie nicht verantwortlich.» | r479 | P2a-F-1 |
| E19 | `rolle` › `schuld` | «Sie müssen die Erkrankung nicht heilen und weder Behandlung noch Genesung allein tragen.» | «Sie müssen die Erkrankung nicht heilen und sind weder für die Behandlung noch für die Genesung verantwortlich.» | r488 | P2a-F-1 |
| E20 | `rolle` › `schuld` | «Drei Fragen können Orientierung geben.» | «Drei Fragen können Orientierung geben, und Sie dürfen sie je nach Beziehung, Situation und eigener Kraft unterschiedlich gewichten.» (`rolle` › `anbieten`) | r515, r533 | K-R-b3 |
| E21 | `rolle` › `schuld` | «Keine davon muss in jeder Situation erfüllt sein.» | «Drei Fragen können Orientierung geben, und Sie dürfen sie je nach Beziehung, Situation und eigener Kraft unterschiedlich gewichten.» (`rolle` › `anbieten`) | r523, r529 | K-R-b3 |
| E22 | `rolle` › `schuld` | «Die Fragen messen weder die Qualität einer Beziehung noch, ob Sie genug unterstützen.» | «Die Fragen sind eine Hilfe zum Nachdenken, kein geprüftes Modell, und messen weder die Qualität einer Beziehung noch, ob Sie genug unterstützen.» (`rolle` › `anbieten`) | r534 | K-R-b3 |
| E23 | `rolle` › `schuld` | «Sie sind eine Hilfe zum Nachdenken, kein geprüftes Modell.» | «Die Fragen sind eine Hilfe zum Nachdenken, kein geprüftes Modell, und messen weder die Qualität einer Beziehung noch, ob Sie genug unterstützen.» (`rolle` › `anbieten`) | r526 | K-R-b3 |
| E24 | `rolle` › `schuld` | «Prüfen Sie später, was für Sie tragbar war.» | «Prüfen Sie ab und zu, ob Ihre Aufgaben noch zu dem passen, was für Sie sicher und tragbar ist.» (`rolle` › `anbieten`) | r537, r658 | K-R-a4 |
| E25 | `rolle` › `schuld` | «Sie dürfen Ihre Entscheidung verändern.» | «Prüfen Sie ab und zu, ob Ihre Aufgaben noch zu dem passen, was für Sie sicher und tragbar ist.» (`rolle` › `anbieten`) | r538 | K-R-a4 |
| E26 | `rolle` › `alltag` | «Sie sind angespannt, tasten sich vorsichtig heran oder ziehen sich nach Konflikten zurück.» | «Manche sind angespannt, tasten sich vorsichtig heran oder ziehen sich nach Konflikten zurück.» | – | P2a-S-2 |
| E27 | `rolle` › `alltag` | «Was daraus folgt, ist individuell und lässt sich nicht aus einer Diagnose ableiten.» | «Was daraus folgt und ob eine Absprache wirkt, lässt sich weder aus einer Diagnose ableiten noch vorhersagen, denn Verläufe sind individuell.» | r571 | K-R-a5 |
| E28 | `rolle` › `alltag` | «Klare Absprachen heissen nicht Härte und nicht, dass alle immer gleich reagieren.» | «Sie müssen dafür nicht immer gleich reagieren oder jederzeit verfügbar bleiben.» | r562, r573, r574 | K-R-a5 |
| E29 | `rolle` › `alltag` | «Ob eine Absprache wirkt, lässt sich nicht vorhersagen.» | «Was daraus folgt und ob eine Absprache wirkt, lässt sich weder aus einer Diagnose ableiten noch vorhersagen, denn Verläufe sind individuell.» | r561, r566, r575, r654 | K-R-a5 |
| E30 | `rolle` › `alltag` | «Veränderung braucht Zeit, und Verläufe sind individuell.» | «Was daraus folgt und ob eine Absprache wirkt, lässt sich weder aus einer Diagnose ableiten noch vorhersagen, denn Verläufe sind individuell.» | r641 | K-R-a5 |
| E31 | `rolle` › `alltag` | «Wenn sie fast nur noch um Symptome, Anspannung und Konflikte kreist, verliert sie, was sie trägt.» | «Eine Beziehung darf mehr sein als Klärung, Kontrolle, Sorge und Krisen.» | r218 | K-R-b4 |
| E32 | `rolle` › `alltag` | «Kleine Momente ohne Belastung sind deshalb kein Luxus.» | «Zur Unterstützung im Alltag gehört deshalb auch, kleine gemeinsame Momente ohne Belastung zu schützen.» | r217 | K-R-b4 |
| E33 | `rolle` › `alltag` | «Zur Unterstützung im Alltag gehört auch, solche gemeinsamen Momente zu schützen.» | «Zur Unterstützung im Alltag gehört deshalb auch, kleine gemeinsame Momente ohne Belastung zu schützen.» | r219 | K-R-b4 |
| E34 | `rolle` › `alltag` | «Innehalten, bevor Sie reagieren» | «Wie Sie dann innehalten können, bevor Sie reagieren, steht auf der Seite «Auf sich achten» im Abschnitt «Wenn es gerade zu viel ist».» | r759 | K-R-b2 |
| E35 | `rolle` › `alltag` | «Vielleicht merken Sie, dass Sie innerlich in Alarm gehen, sich rechtfertigen oder sich zu sehr anpassen.» | «Vielleicht merken Sie, dass Ihre Anspannung steigt, dass Sie sich rechtfertigen oder sich zu sehr anpassen.» | r205 | P2a-W2-5 |
| E36 | `rolle` › `alltag` | «Dann können vier Schritte helfen.» | «Dann können fünf Schritte helfen, die nächste Handlung bewusster zu wählen.» (`selbstfuersorge` › `zu-viel`) | r673, r679, r690, r692 | K-R-b2 |
| E37 | `rolle` › `alltag` | «Sie sind ein Angebot, kein Auftrag, die andere Person zu beruhigen oder die Beziehung zu erhalten.» | «Sie müssen keine andere Person beruhigen und nicht ihre Behandlung oder Genesung tragen.» (`rolle` › `kopf`) | r680 | K-R-b2 |
| E38 | `rolle` › `alltag` | «Kurz innehalten: Halten Sie an, bevor Sie reagieren.» | «Unterbrechen Sie kurz, was Sie gerade tun, wenn das sicher möglich ist.» (`selbstfuersorge` › `zu-viel`) | r207, r684 | K-R-b2 |
| E39 | `rolle` › `alltag` | «Genauer hinschauen: Was beobachte ich konkret?» | «Was habe ich beobachtet, und was vermute ich nur?» (`selbstfuersorge` › `zu-viel`) | r209, r685, r694 | K-R-b2 |
| E40 | `rolle` › `alltag` | «Was vermute ich nur?» | «Was habe ich beobachtet, und was vermute ich nur?» (`selbstfuersorge` › `zu-viel`) | r210, r686 | K-R-b2 |
| E41 | `rolle` › `alltag` | «Was könnte ich offen erfragen?» | «Fragen Sie nach, statt ein bestimmtes Erleben vorauszusetzen.» (`rolle` › `nach-konflikten`) | r211 | K-R-b2 |
| E42 | `rolle` › `alltag` | «Sich selbst wahrnehmen: Bin ich gerade hilfsbereit, erschöpft, gereizt, schuldig oder unter Druck, alles lösen zu müssen?» | «Was bemerke ich: Gedanken, Gefühle, Körperempfindungen?» (`selbstfuersorge` › `zu-viel`) | r213 | K-R-b2 |
| E43 | `rolle` › `alltag` | «Bewusst und begrenzt handeln: Wählen Sie, was auf längere Sicht tragbar ist, nicht nur, was die Beziehung sofort beruhigt.» | «Wählen Sie einen machbaren nächsten Schritt: zum Beispiel eine Pause, eine kurze Antwort oder Unterstützung holen.» (`selbstfuersorge` › `zu-viel`) | r215 | K-R-b2 |
| E44 | `rolle` › `alltag` | «Das kann ein Satz sein, eine Grenze, eine Pause, ein Gesprächsende oder Hilfe.» | «Wählen Sie einen machbaren nächsten Schritt: zum Beispiel eine Pause, eine kurze Antwort oder Unterstützung holen.» (`selbstfuersorge` › `zu-viel`) | r681, r689, r695 | K-R-b2 |
| E45 | `rolle` › `alltag` | «Probieren Sie einen Schritt zuerst in einer kleinen Situation aus, wenn Sie das möchten.» | «Sie können eine Übung ausprobieren, wenn die Situation sicher ist.» (`selbstfuersorge` › `zu-viel`) | r693 | K-R-b2 |
| E46 | `rolle` › `alltag` | «Eine Beobachtung ist nicht automatisch eine Erklärung.» | «Was habe ich beobachtet, und was vermute ich nur?» (`selbstfuersorge` › `zu-viel`) | r687 | K-R-b2 |
| E47 | `rolle` › `alltag` | «Eine Lösung muss nicht im selben Moment entstehen.» | «Nicht jede Stimmung muss sofort gelöst werden.» | r688 | K-R-b2 |
| E48 | `rolle` › `alltag` | «Woran Sie merken, dass die Anspannung steigt, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | «Wie Anspannung in einem Gespräch steigen kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | r762 | P2a-W2-1 |
| E49 | `rolle` › `mehrere` | «Unterschiedliche Angehörige dürfen unterschiedliche Grenzen haben.» | «Niemand muss dieselbe Rolle oder Grenze übernehmen.» | r569, r637 | K-R-a7 |
| E50 | `rolle` › `mehrere` | «Was hilft:» | Bezeichnung; die Punkte stehen in «Was Sie tun können» | – | K-R-a7 |
| E51 | `rolle` › `mehrere` | «gemeinsame Grundlinien klären, soweit die Beteiligten das möchten» | «Was Sie tun können: Klären Sie gemeinsam, soweit die Beteiligten das möchten, wer was übernehmen möchte, wann jemand eine Pause von der Unterstützung …» | r49, r636, r657 | K-R-a7 |
| E52 | `rolle` › `mehrere` | «Absprachen offen und in ruhigen Momenten treffen» | «Besprechen Sie Unterschiede offen und in einem ruhigen Moment, und beziehen Sie die betroffene Person ein, soweit sie das möchte.» | r50 | K-R-a7 |
| E53 | `rolle` › `mehrere` | «Absprachen anpassen, wenn es nötig und sicher ist» | «Und sie lassen sich anpassen, wenn Situation oder Sicherheit es erfordern.» | r51 | K-R-a7 |
| E54 | `rolle` › `mehrere` | «Unterschiede offen besprechen» | «Besprechen Sie Unterschiede offen und in einem ruhigen Moment, und beziehen Sie die betroffene Person ein, soweit sie das möchte.» | r52 | K-R-a7 |
| E55 | `rolle` › `mehrere` | «Was Sie tun können: Klären Sie gemeinsam, wer was übernehmen möchte, wann eine Pause möglich ist und welche Grenzen gelten.» | «Was Sie tun können: Klären Sie gemeinsam, soweit die Beteiligten das möchten, wer was übernehmen möchte, wann jemand eine Pause von der Unterstützung …» | r577 | K-R-a7 |
| E56 | `rolle` › `mehrere` | «Besprechen Sie Unterschiede in einem ruhigen Moment, und beziehen Sie die betroffene Person ein, soweit sie das möchte.» | «Besprechen Sie Unterschiede offen und in einem ruhigen Moment, und beziehen Sie die betroffene Person ein, soweit sie das möchte.» | r563, r579 | K-R-a7 |
| E57 | `rolle` › `kinder` | «Betreuung, Unterstützung und Sicherheit organisieren Erwachsene.» | «Betreuung, Unterstützung und Sicherheit müssen Erwachsene organisieren.» | r485 | P2a-F-2 |
| E58 | `rolle` › `kinder` | «Was Kinder nicht übernehmen müssen, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | «Was bei Gewalt oder Bedrohung für Sie und die Kinder wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | r764 | P2a-F-2 |
| E59 | `rolle` › `kinder` | «Dort steht auch, wer einspringt, wenn die erste Person ausfällt.» | entfällt: an seiner Stelle die Bestandsfrage «Welche zweite erwachsene Person ist erreichbar, wenn die erste ausfällt?» | r765 | P2a-F-2 |
| E60 | `rolle` › `an-grenzen` | «Viele Angehörige erleben nicht nur die Belastung der betroffenen Person, sondern auch eigene zwiespältige Gefühle.» | «Viele Angehörige erleben nicht nur die Belastung der betroffenen Person, sondern auch eigene gemischte Gefühle.» | r33 | P2a-W2-5 |
| E61 | `rolle` › `an-grenzen` | «Sie wollen helfen und möchten zugleich weg.» | «Viele wollen helfen und möchten zugleich weg.» | – | P2a-S-2 |
| E62 | `rolle` › `an-grenzen` | «Sie wollen verstehen und werden innerlich hart.» | «Oder sie wollen verstehen und werden innerlich hart.» | – | P2a-S-2 |
| E63 | `rolle` › `an-grenzen` | «Sie wollen eine Grenze setzen und geben dann aus Schuld doch wieder nach.» | «Oder sie wollen eine Grenze setzen und geben dann aus Schuld doch wieder nach.» | – | P2a-S-2 |
| E64 | `rolle` › `an-grenzen` | «Solche zwiespältigen Gefühle sind kein Zeichen fehlender Haltung.» | «Solche gemischten Gefühle sind kein Zeichen mangelnder Liebe.» (`verstehen` › `erleben`) | r39 | K-R-b5 |
| E65 | `rolle` › `an-grenzen` | «Sie sind oft Ausdruck einer lang dauernden Belastung.» | Verweissatz «Dass solche gemischten Gefühle oft zur Belastung dazugehören, …»; `verstehen`: «Sie gehören oft zur Belastung dazu.» | r40, r769 | K-R-b5 |
| E66 | `rolle` › `an-grenzen` | «Beziehung, Verantwortung und Selbstschutz brauchen dann gleichzeitig Platz.» | «Dass solche gemischten Gefühle oft zur Belastung dazugehören, steht auf der Seite «Verstehen» im Abschnitt «Was Angehörige erleben können».» | r40 | K-R-b5 |
| E67 | `rolle` › `an-grenzen` | «Sie können nicht:» | Bezeichnung; die Punkte stehen in «Was nicht Ihre Aufgabe ist» (`anbieten`) | – | K-R-a6 |
| E68 | `rolle` › `an-grenzen` | «jede Krise oder Eskalation verhindern» | «jede Krise oder Eskalation zu verhindern oder alle Auslöser zu vermeiden» (`rolle` › `anbieten`) | r18, r294 | K-R-a6 |
| E69 | `rolle` › `an-grenzen` | «eine Entwicklung erzwingen» | «Verhalten ständig zu überwachen oder eine Entwicklung zu erzwingen» (`anbieten`) | – | K-R-a6 |
| E70 | `rolle` › `an-grenzen` | «auf Dauer die Gefühle eines anderen Menschen ausgleichen» | «jede Anspannung aufzufangen oder auf Dauer die Gefühle eines anderen Menschen auszugleichen» (`rolle` › `anbieten`) | r292 | K-R-a6 |
| E71 | `rolle` › `an-grenzen` | «alle Auslöser vermeiden» | «jede Krise oder Eskalation zu verhindern oder alle Auslöser zu vermeiden» (`rolle` › `anbieten`) | r293 | K-R-a6 |
| E72 | `rolle` › `an-grenzen` | «Therapie oder Krisenhilfe ersetzen» | «Therapeutin oder Therapeut zu sein, die Therapie zu kontrollieren oder Krisenhilfe zu ersetzen» (`rolle` › `anbieten`) | r295 | K-R-a6 |
| E73 | `rolle` › `an-grenzen` | «Wie Sie Grenzen setzen und halten, steht auf der Seite «Grenzen setzen».» | «Wie Sie Grenzen setzen und halten, steht auf der Seite «Grenzen».» | r43 | P2a-W2-1 |
| E74 | `rolle` › `an-grenzen` | «Über Charakter oder Absicht sagen sie nichts aus.» | «Aus einer Handlung allein lassen sich weder Motiv noch Charakter eines Menschen ableiten.» (gleicher Abschnitt) | – | K-R-a6 |
| E75 | `selbstfuersorge` › `eigenes-leben` | «Sie verlangen nichts zusätzlich von Ihnen.» | «Die Sätze sind Angebote zum Auswählen, keine Pflichtliste.» | s641 | K-S-a3 |
| E76 | `selbstfuersorge` › `eigenes-leben` | «Sie erinnern daran, was auch unter Belastung erlaubt bleibt.» | «Die Sätze sind Angebote zum Auswählen, keine Pflichtliste.» | s642 | K-S-a3 |
| E77 | `selbstfuersorge` › `kraft` | «eine Aufgabe abgeben und konkret vereinbaren, wer was übernimmt» | «Eine konkrete Aufgabe mit jemandem teilen.» (`selbstfuersorge` › `unterstuetzung`) | r134, r135, s401 | K-S-a1 |
| E78 | `selbstfuersorge` › `kraft` | «eine Zeit vereinbaren, in der Sie nicht erreichbar sind» | «Eine freie Zeit oder eine kleinere Zusage ermöglichen.» (`selbstfuersorge` › `unterstuetzung`) | r136, r137 | K-S-a1 |
| E79 | `selbstfuersorge` › `kraft` | «vertraulich über Ihre Situation sprechen oder Beratung nutzen» | «Ich brauche einen Termin, bei dem meine eigene Situation im Mittelpunkt steht.» (`selbstfuersorge` › `unterstuetzung`) | r138, r139, s402 | K-S-a1 |
| E80 | `selbstfuersorge` › `kraft` | «Zeit für Freunde, Interessen und Ihr eigenes Leben» | «Freundschaften, Interessen und Freude haben ihren eigenen Wert.» (`selbstfuersorge` › `unterstuetzung`) | r140, r141, s403 | K-S-a1 |
| E81 | `selbstfuersorge` › `kraft` | «Was wie schwer wiegt, ist persönlich.» | «Was Kraft kostet oder entlastet, ist individuell und kann sich verändern.» | r124 | K-S-a2 |
| E82 | `selbstfuersorge` › `kraft` | «Vielleicht ruft sie gleich an.» (Satz in der Szene) | «Vielleicht kommt gleich eine Nachricht.» | s661 | P2a-T-2 |
| E83 | `selbstfuersorge` › `kraft` | «Das Bild zeigt eine Erfahrung, die manche beschreiben, keine Pflicht und keinen Fehler.» | «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Ständige Bereitschaft ist keine Pflicht, und wer sie spürt, macht nichts falsch.» | s663 | P2a-S-4 |
| E84 | `selbstfuersorge` › `kraft` | «Über dem Telefon steht der Gedanke «Vielleicht ruft sie gleich an.», über dem Buch «Eigentlich wollte ich lesen.»» (Kurzbeschreibung) | «Über dem Telefon steht der Gedanke «Vielleicht kommt gleich eine Nachricht.», über dem Buch «Eigentlich wollte ich lesen.»» | s661, s662 | Abschnitt 4, P2a-T-2 |
| E85 | `selbstfuersorge` › `kraft` | «Das ist eine mögliche Erfahrung.» | «Das ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen, …» | – | K-S-b1 |
| E86 | `selbstfuersorge` › `kraft` | «Es ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen.» | «Das ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen, verdient aber Aufmerksamkeit, auch wenn äusserlich wenig sichtbar …» | s303 | K-S-b1 |
| E87 | `selbstfuersorge` › `kraft` | «Wenn Sie sich häufig wachsam oder erschöpft fühlen, verdient diese Belastung Aufmerksamkeit, auch wenn äusserlich gerade wenig sichtbar ist.» | «Das ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen, verdient aber Aufmerksamkeit, auch wenn äusserlich wenig sichtbar …» | s304 | K-S-b1 |
| E88 | `selbstfuersorge` › `kraft` | «Die eigene Anspannung kann auch ohne sichtbaren Anlass schwanken.» | «Das ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen, verdient aber Aufmerksamkeit, auch wenn äusserlich wenig sichtbar …» | s310 | K-S-b1 |
| E89 | `selbstfuersorge` › `kraft` | «Wie sie verläuft, ist individuell und hängt von vielen Einflüssen ab.» | «Was Kraft kostet oder entlastet, ist individuell und kann sich verändern.» | s311 | K-S-b1 |
| E90 | `selbstfuersorge` › `kraft` | «Wie Anspannung in einem Gespräch steigen kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | entfällt auf `selbstfuersorge` (Absätze verdichtet); derselbe Verweissatz steht auf `rolle` › `alltag` (r762) | s668 | K-S-b1 |
| E91 | `selbstfuersorge` › `kraft` | «Sie können prüfen, welche Absprachen Sie freiwillig anbieten möchten und welche Entlastung Sie selbst brauchen.» | «Vereinbaren Sie eine Erreichbarkeit, die Sie freiwillig übernehmen können.» | s305 | K-S-b1 |
| E92 | `selbstfuersorge` › `kraft` | «Klarheit oder Absprachen können eine freiwillige Möglichkeit sein, wenn sie für die Beteiligten passen.» | «Vereinbaren Sie eine Erreichbarkeit, die Sie freiwillig übernehmen können.» | s306 | K-S-b1 |
| E93 | `selbstfuersorge` › `kraft` | «Sie sind aber weder dafür verantwortlich, dass eine Beziehung vorhersehbar ist, noch dafür, die Gefühle eines anderen Menschen auszugleichen.» | «jede Anspannung aufzufangen oder auf Dauer die Gefühle eines anderen Menschen auszugleichen» (`rolle` › `anbieten`) | s307 | K-S-b1 |
| E94 | `selbstfuersorge` › `kraft` | «Wenn selbst kleine Pausen nicht möglich sind, kann Unterstützung bei Betreuung und Aufgaben wichtiger sein.» | «Dann braucht es praktische Entlastung und Unterstützung von aussen.» | s157 | K-S-a2 |
| E95 | `selbstfuersorge` › `kraft` | «Bleibt dafür kaum Raum, darf es zuerst darum gehen, Aufgaben abzugeben oder Unterstützung zu organisieren.» | «Bleibt dafür kein Raum, braucht es Entlastung oder eine andere Verteilung der Aufgaben, keine zusätzliche Disziplin.» | s178 | K-S-b2 |
| E96 | `selbstfuersorge` › `kraft` | «Bewegung ist eine mögliche Ergänzung.» | «Bewegung kann Wohlbefinden und Erholung unterstützen.» | s175 | K-S-b2 |
| E97 | `selbstfuersorge` › `warnsignale` | «Sie sind keine Diagnose und kein Beweis, dass Sie «zu wenig» für sich tun.» | «Die Liste ist kein Test, keine Diagnose und kein Beweis, dass Sie «zu wenig» für sich tun.» | s68, s453 | K-S-a4 |
| E98 | `selbstfuersorge` › `warnsignale` | «Die Liste ist kein Test.» | «Die Liste ist kein Test, keine Diagnose und kein Beweis, dass Sie «zu wenig» für sich tun.» | s69, s447 | K-S-a4 |
| E99 | `selbstfuersorge` › `warnsignale` | «Was passt und verfügbar ist, hängt von Ihrer Situation ab.» | «Was Kraft kostet oder entlastet, ist individuell und kann sich verändern.» (`selbstfuersorge` › `kraft`) | s476 | K-S-a4 |
| E100 | `selbstfuersorge` › `warnsignale` | «Belastung müssen Sie nicht durch mehr Disziplin ausgleichen.» | «… keine zusätzliche Disziplin.» (`kraft`, Vertiefung «Kleine Auszeiten»); sichtbar: «Nicht jede Belastung lässt sich durch Selbstfürsorge ausgleichen.» | s5 | K-S-a4 |
| E101 | `selbstfuersorge` › `zu-viel` | «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt.» | «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt, und es gibt kein richtiges Ergebnis.» | s32, s103, s243 | K-S-a5 |
| E102 | `selbstfuersorge` › `zu-viel` | «Passen Sie das Tempo an.» | «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt, und es gibt kein richtiges Ergebnis.» | s18 | K-S-a5 |
| E103 | `selbstfuersorge` › `zu-viel` | «Es braucht keinen Timer und kein «richtiges» Ergebnis.» | «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt, und es gibt kein richtiges Ergebnis.» | s117 | K-S-a5 |
| E104 | `selbstfuersorge` › `zu-viel` | «Wenn die Übung Sie eher zusätzlich stresst, lassen Sie sie weg.» | «Bei Unwohlsein kehren Sie zu etwas zurück, das für Sie angenehm ist.» | s25 | K-S-a5 |
| E105 | `selbstfuersorge` › `zu-viel` | «Es gibt keine feste Sekundenzahl und kein richtiges Ergebnis.» | «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt, und es gibt kein richtiges Ergebnis.» | s524 | K-S-a5 |
| E106 | `selbstfuersorge` › `zu-viel` | «Sie dürfen Schritte auslassen oder die Übung beenden.» | «Übungen sind Angebote: Anpassen, Auslassen und Beenden sind erlaubt, und es gibt kein richtiges Ergebnis.» | s525 | K-S-a5 |
| E107 | `selbstfuersorge` › `unterstuetzung` | «Vielleicht merken Sie, dass Ihre eigenen Bedürfnisse zu kurz kommen.» | «Vielleicht merken Sie: Ihre eigenen Bedürfnisse kommen zu kurz» | s345 | P2a-S-2 |
| E108 | `selbstfuersorge` › `unterstuetzung` | «Sie sind fast nur noch für andere da.» | «Sie sind fast nur noch für andere da» | s347 | P2a-S-2 |
| E109 | `selbstfuersorge` › `unterstuetzung` | «Sie schieben Pausen, Schlaf oder Unterstützung auf.» | «Sie schieben Pausen, Schlaf oder Unterstützung auf» | s348 | P2a-S-2 |
| E110 | `selbstfuersorge` › `unterstuetzung` | «Sie haben das Gefühl, nie genug zu tun und trotzdem nicht zu genügen.» | «Sie haben das Gefühl, nie genug zu tun und trotzdem nicht zu genügen» | s349 | P2a-S-2 |
| E111 | `selbstfuersorge` › `unterstuetzung` | «Oder Sie sind erschöpft und gereizt.» | Punkt «Sie sind erschöpft und gereizt» unter «Vielleicht merken Sie:» | – | P2a-S-2 |
| E112 | `selbstfuersorge` › `unterstuetzung` | «Selbstfürsorge muss nicht damit begründet werden, später wieder besser helfen zu können.» | «Selbstfürsorge dürfen Sie als Ihr eigenes Recht verstehen: Daraus folgt keine Pflicht, danach wieder zu unterstützen.» | s333 | K-S-a6 |
| E113 | `selbstfuersorge` › `unterstuetzung` | «Selbstfürsorge dürfen Sie als Ihr eigenes Recht verstehen, unabhängig davon, welche Rolle Sie als Angehörige oder Angehöriger übernehmen.» | «Selbstfürsorge dürfen Sie als Ihr eigenes Recht verstehen: Daraus folgt keine Pflicht, danach wieder zu unterstützen.» | s351 | K-S-a6 |
| E114 | `selbstfuersorge` › `unterstuetzung` | «Die folgenden Möglichkeiten sind eine Auswahl.» | «Die folgenden Ideen sind eine Auswahl, kein zusätzliches Programm.» (`selbstfuersorge` › `kraft`) | s38 | K-S-a6 |
| E115 | `selbstfuersorge` › `unterstuetzung` | «Sie müssen kein zusätzliches Programm erfüllen.» | «Die folgenden Ideen sind eine Auswahl, kein zusätzliches Programm.» (`kraft`) und «Ein einzelner Schritt darf reichen.» | s38 | K-S-a6 |
| E116 | `selbstfuersorge` › `unterstuetzung` | «Mehr zu Schuldgefühlen steht auf der Seite «Ihre Rolle klären» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | «Mehr zu Schuldgefühlen steht auf der Seite «Ihre Rolle» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | s669 | P2a-W2-1 |
| E117 | `selbstfuersorge` › `unterstuetzung` | «Fällt es schwer, Hilfe zu finden oder anzunehmen, ist das kein persönliches Versagen.» | «Das ist keine Bewertung und kein persönliches Versagen.» | s366 | K-S-a6 |
| E118 | `selbstfuersorge` › `akzeptanz` | «Es ist ein Angebot, kein Auftrag, und kann schwerfallen.» | «Eine freiwillige Übung in vier Schritten» (Titel der Vertiefung) und «Sie machen nichts falsch, wenn Akzeptanz heute schwerfällt.» | s210 | K-S-a7 |
| E119 | `selbstfuersorge` › `akzeptanz` | «Er beschreibt eine Haltung, keine Kapitulation.» | «Er beschreibt eine Haltung, in der Gefühle, Grenzen, Unterstützung und der Einsatz für Veränderung ausdrücklich Platz haben.» | s214 | K-S-a7 |
| E120 | `selbstfuersorge` › `akzeptanz` | «Gefühle, Grenzen, Unterstützung und der Einsatz für Veränderung haben darin ausdrücklich Platz.» | «Er beschreibt eine Haltung, in der Gefühle, Grenzen, Unterstützung und der Einsatz für Veränderung ausdrücklich Platz haben.» | s194 | K-S-a7 |
| E121 | `selbstfuersorge` › `akzeptanz` | «aufgeben oder sich aus dem Leben zurückziehen» | «aufgeben, resignieren oder sich aus dem Leben zurückziehen» | s195, s553, s554 | K-S-a7 |
| E122 | `selbstfuersorge` › `akzeptanz` | «gutheissen: Sie müssen eine schwierige Wirklichkeit nicht gut finden, um sie anzuerkennen» | «Radikale Akzeptanz heisst: anerkennen, was gerade ist, ohne es gutzuheissen.» | s196, s555, s556, s571, s590 | K-S-a7 |
| E123 | `selbstfuersorge` › `akzeptanz` | «resignieren und hoffnungslos werden» | «aufgeben, resignieren oder sich aus dem Leben zurückziehen» | s198, s560, s561 | K-S-a7 |
| E124 | `selbstfuersorge` › `akzeptanz` | «Eine freiwillige Übung in vier Schritten:» | Titel der Vertiefung «Eine freiwillige Übung in vier Schritten» | s210 | K-S-b4 |
| E125 | `selbstfuersorge` › `akzeptanz` | «Was Sie tun können: Probieren Sie die vier Schritte zuerst an einer kleinen, sicheren Alltagssituation aus, wenn Sie möchten.» | «Was Sie tun können: Probieren Sie die Übung in vier Schritten zuerst an einer kleinen, sicheren Alltagssituation aus, wenn Sie möchten.» | s592 | K-S-b4 |
| E126 | `selbstfuersorge` › `akzeptanz` | «Wählen Sie einen Satz, der Ihnen hilft, zum Beispiel: «So ist es gerade. Ich muss es nicht gut finden.»» | «Wählen Sie daraus einen Satz, der Ihnen hilft.» | s191, s593 | K-S-a7 |
| E127 | `selbstfuersorge` › `beratung` | «Sie sind nicht allein.» | «Selbsthilfegruppen und Beratungsstellen bieten Orientierung, praktische Tipps und das Gefühl, nicht allein zu sein.» | s188 | K-S-a8 |

**Stand 10.10.2026 · Etappe 2a · bauende Sitzung (Claude Code).** Umgesetzt ist `BAUAUFTRAG-ETAPPE-2A.md`:

- die neuen Seiten `rolle` («Ihre Rolle klären») und `selbstfuersorge` («Auf sich achten»), je mit einer Abbildung
- die Einstiege auf `index`
- `site.config.json`
- der Abgleich

`verstehen`, `beziehungen` und `grenzen` sind inhaltlich unverändert. Keine Prüfstufe ist «erledigt». Die Selbstprüfung von 1j steht darunter.

### Etappe 2a: Stand je Abschnitt des Auftrags

| Punkt | Stand | Beleg |
| --- | --- | --- |
| Auftrag verschieben | umgesetzt | `BAUAUFTRAG-ETAPPE-2A.md` aus `9810d16` unverändert im Website-Ordner (Commit `0a602d1`, `cmp`: gleich); im Stamm von `main` gelöscht (`d79f018`); zusammengeführt (`bebf43b`) |
| 1 Nur die genannten Teile geändert | eingehalten | `git diff` gegen `bebf43b`: `content/verstehen.html`, `content/beziehungen.html` und `content/grenzen.html` ohne Änderung. Die gebauten Seiten der Etappe 1 und die Entwurfsseiten haben nur zwei neue Zeilen in der Navigation («Ihre Rolle», «Auf sich achten»). `editorialStatus` und Fusszeile sind unverändert. `content/index.html` ändert sich nur in `einstiege`. Dazu kommt eine Regel in `borderline.css` (`.bl-nach-figur`, Abstand nach der Abbildung, nur mit Token) |
| 2a Sprache | umgesetzt; zu prüfen in S | Satzlänge (sichtbarer Text, Skript der bauenden Sitzung): `rolle` 384 Sätze, im Mittel 8,5 Wörter, 32 Sätze (8 %) über 15 Wörter; `selbstfuersorge` 320 Sätze, 8,7 Wörter, 23 (7 %). Vorbilder: `beziehungen` 14 %, `grenzen` 9 %, `verstehen` 12 %. «Was Sie tun können:» mit Beispielsatz: `rolle` 6-mal, `selbstfuersorge` 4-mal; Beispielsätze aus dem Bestand zuerst, zum Beispiel «Was wäre dein Vorschlag?» (`alltag`). Fachwörter ersetzt: «zwiespältige Gefühle» statt «Ambivalenz», «die Gefühle eines anderen Menschen ausgleichen» statt «Regulation» (Abgleich `rolle` Nr. 18, 33, 39 und 292) |
| 2a Meta-Texte | entfallen | «Worum es hier geht», «Das können Sie mitnehmen», Lesezeit, Prüfvermerke, Handout-Rahmen: «entfällt» mit Grund, zum Beispiel `rolle` Nr. 5 bis 10 und Nr. 405 bis 409 |
| 2b Nichts verschwindet still | umgesetzt | `pruefe-abgleich.mjs`: 3204 Zeilen, 0 ohne Fundstelle; jeder Satz der Bestandsquellen aus Abschnitt 3 und 4 hat eine Zeile (`rolle` 757, `selbstfuersorge` 659). Umgekehrt geprüft (Skript): 148 Stellen der neuen Seiten haben keine eigene Zeile als neue Fassung. Von Hand durchgesehen sind das Bezeichnungen und Überschriften aus dem Bestand oder dem Auftrag, zweite Teile geteilter Bestandssätze (zum Beispiel «Sie wollen helfen und möchten zugleich weg.» aus Nr. 33) und die Verweissätze der Liste unten. Ein weiterer neuer Satz ist nicht dabei |
| 2b Absicherungen | umgesetzt; zu prüfen in W1 | Absicherungen je 100 Wörter: `rolle` 1,94 → 2,16, `selbstfuersorge` 2,27 → 2,64. Beispiele: «Manche Angehörige bleiben …» (Abbildung, nicht «viele»); «Ob eine Absprache wirkt, lässt sich nicht vorhersagen.» (`rolle` › `alltag`); «Dass es bei jeder Person wirkt, ist nicht garantiert.» (`selbstfuersorge` › `zu-viel`, Bestand «keine Wirkungsgarantie für jede Person»); «Sie treten nicht bei allen Menschen mit Borderline auf.» (`rolle` › `an-grenzen`) |
| 2b Schuld und Verantwortung | eingehalten | `rolle` › `schuld`: «Sie sind nicht für den Verlauf einer anderen Person verantwortlich.», «Eine Diagnose weist Ihnen keine persönliche Schuld zu.»; `selbstfuersorge` › `unterstuetzung`: «Ein Schuldgefühl allein erklärt weder die Erkrankung noch Ihre Verantwortung.» Alle Sätze mit «Schuld» oder «verantwortlich» der zwei Seiten per Skript gelesen: keiner widerspricht `verstehen` (Annahme 3) oder `beziehungen` |
| 2b Keine neuen fachlichen Aussagen | eingehalten (Selbsteinschätzung) | 25 neue Sätze, alle aus den Arten, die Abschnitt 2b erlaubt: Kernaussagen, Sätze in Abbildungen, Kurzbeschreibungen, Zwischentitel, Verweissätze und Einstiege (Liste unten) |
| 2b Verlinken statt wiederholen | umgesetzt | `rolle` → `verstehen.html#borderline`, `#anspannung`; `beziehungen.html#was-hilft`; `grenzen.html#gewalt` (zweimal), `grenzen.html`; `selbstfuersorge.html#kraft`, `selbstfuersorge.html`. `selbstfuersorge` → `verstehen.html#anspannung`, `rolle.html#schuld`, `grenzen.html#gewalt`, `index.html#beratung`, `#zu-viel`. Der Linktext nennt den Zieltitel in «…», die Anführungszeichen stehen ausserhalb des Links (P4-S-3). Sätze von Etappe-1-Seiten stehen im Abgleich als «verschoben» mit Ort dort, zum Beispiel die Ursachen (`rolle` Nr. 453 bis 462) |
| 2c Zuständigkeit | eingehalten | `grep`: kein `tel:`, keine Telefonnummer in `content/rolle.html`, `content/selbstfuersorge.html`, `content/index.html`. Verweis im Text nur über `<p data-responsibility-inline></p>`: `rolle` 1-mal (`an-grenzen`), `selbstfuersorge` 3-mal (`eigenes-leben`, `warnsignale`, `zu-viel`), je an einer Stelle, an der der Bestand auf akute Gefahr verweist. `sensitiveTopics` beider Seiten: `selbstgefaehrdung`, `gewalt`, `akute-krise`. Kein Link auf eine Entwurfsseite (Gate ohne Befund); Inhalte für `kommunizieren` und `unterstuetzung` im Abgleich mit Ort «… (Etappe 2)» |
| 2d Bilder | umgesetzt | Je Seite genau eine Abbildung. `visualPlan` mit 7 Zeilen je Seite, eine je Abschnitt; die übrigen 12 Zeilen sind `format` «text» mit Begründung. STOPP: `<ol>` mit fünf Schritten. Warnsignale: Begriffsliste mit fünf Bereichen. Energie-Konto: Text, zwei Listen «Was Kraft kosten kann:» und «Was entlasten kann:». Sauerstoffmaske: ein Satz («Die Sauerstoffmaske im Flugzeug ist ein Bild dafür, die eigene Sicherheit und Gesundheit ernst zu nehmen.»). Garten: ein Satz («… so wie Wasser und Licht einen Garten.»). Kein Leuchtturm-Bild |
| 3 `rolle` | umgesetzt | Abschnitte 01 `anbieten`, 02 `schuld`, 03 `alltag`, 04 `nach-konflikten`, 05 `mehrere`, 06 `kinder`, 07 `an-grenzen`, wie vorgeschlagen; Abweichungen unter «Entscheide». Abbildung 1 mit Titel, Kernaussage, Satz in der Szene, Kurzbeschreibung, Vertiefung (drei Punkte des Auftrags) und Quelle im Wortlaut. Zeichnung: SVG aus Anhang A Zeichen für Zeichen gleich (Skript), nur der Bildausschnitt `viewBox` ist «0 52 640 218» statt «0 0 640 270» (leerer Rand oben weg). «Begrenzte Verfügbarkeit» steht auf `selbstfuersorge`; `rolle` › `alltag` verweist dorthin |
| 3 Schmal | umgesetzt | Bei 360 px steht der Satz über der Zeichnung, die Zeichnung bleibt (Bildschirmfoto) |
| 4 `selbstfuersorge` | umgesetzt | Abschnitte 01 `eigenes-leben`, 02 `kraft`, 03 `warnsignale`, 04 `zu-viel`, 05 `unterstuetzung`, 06 `akzeptanz`, 07 `beratung`. Abbildung 1: SVG und Satzpaar Zeichen für Zeichen gleich wie Abbildung 4 in `templates/website/longform/visualisierungsmuster.html` (Skript); Kernaussage, Kurztext, Vertiefung und Quelle im Wortlaut des Auftrags; ohne «Sie ist kein Zeichen von Schwäche.». Direkt nach der Abbildung: «Sie müssen nicht rund um die Uhr erreichbar sein. …» mit «Nach 22 Uhr bin ich nicht mehr am Handy. Wenn es ernst wird, holen wir zusätzliche Hilfe dazu.». «Bei Gefahr hat Schutz Vorrang» ist der Verweis im Text in `eigenes-leben` |
| 5a `index` | umgesetzt | Reihenfolge Verstehen, Beziehungen, Ihre Rolle, Grenzen, Auf sich achten; die drei bisherigen Einträge im Wortlaut (`git diff --word-diff`); zwei neue Einträge und der Platzhalter «Weitere Einstiege folgen: Zugewandt und klar sprechen · Genesung · Unterstützung finden.» im Wortlaut |
| 5b `site.config.json` | umgesetzt | `rolle` und `selbstfuersorge`: `status` «published», `primaryTask`, `description`, `sensitiveTopics`, `visualPlan`. Die zwei Abbildungen mit `goal`, `statement`, `understood`, `source`, `alternative`, `reason`, `resonance` (Wortlaut des Auftrags) und `approvalStatus` «ausstehend». Die Seitenplatzhalter der zwei Seiten entfallen (10 statt 12) |
| 5c Abgleich | umgesetzt | `abgleich/rolle.md` und `abgleich/selbstfuersorge.md` neu. Vorgemerkte Zeilen mit neuem Ort und neuer Fassung: `verstehen` Nr. 484, 485, 527, 528; `beziehungen` Nr. 115; `grenzen` Nr. 511. `index` Nr. 17 bis 20 und 22 bis 28 auf die neuen Einstiege und den neuen Platzhalter. Per Skript gegen den Stand vor 2a verglichen: In den vier Tabellen der Etappe 1 ist keine andere Zeile geändert. Statuswerte «neu (2a)» und «umformuliert (einfache Sprache, 2a)» in `abgleich/README.md` erklärt, dazu ein Abschnitt «Etappe 2a». Skripte: `pruefe-abgleich.mjs`, `kennzahlen.mjs`, `verneinung.mjs` und `bedienung.mjs` erfassen die neuen Seiten. Prüfbedarf für W1 am Ende jeder neuen Tabelle (`rolle` 10 Punkte, `selbstfuersorge` 8) |
| 6 Prüfen | umgesetzt | unten |
| 6 Pull Request | Entwurf | bleibt Entwurf |

### Etappe 2a: Prüfungen nach Abschnitt 6

- **`node tools/build.mjs`:** 0 blockierend, 14 Hinweise: 2 × `visual-approval` (`v-ro-weg`, `v-sf-abend`), 10 × `placeholder-approval`, `site-url`, `review-report`.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 13 blockierend und 1 Hinweis (`site-url`), wie erwartet. Die 13 sind 2 × `visual-approval`, 10 × `placeholder-approval` (`einstiege` auf `index` und die Seitenplatzhalter von `diagnose`, `behandlung`, `kommunizieren`, `krise`, `genesung`, `unterstuetzung`, `fragen`, `quellen`, `ueber`) und 1 × `review-report`.
- **`node abgleich/pruefe-abgleich.mjs`:** 3204 Zeilen, 0 ohne Fundstelle.
- **Bildschirmfotos und Sicht:** beide Abbildungen bei 1280 und 360 px, je im Standard-Theme und im Theme «kontrast» (acht Fotos), alle angesehen.
  - «Ein Stück Weg»: breit steht der Satz über der Zeichnung links. Die zwei Menschen gehen nebeneinander von hinten auf dem Weg, der sich zwischen Hügeln in die Ferne verengt. Schmal steht der Satz über der Zeichnung. Die zwei Menschen sind dann etwa 60 px hoch, klein, aber als zwei Gehende erkennbar.
  - «Ein freier Abend»: breit stehen die zwei Sätze nebeneinander über Telefon und Buch, schmal untereinander. Tisch, Tasse, Telefon, Buch und Mond im Fenster sind bei 360 px erkennbar.
  - Theme «kontrast»: Linien und Flächen dunkler, nichts verschwindet.
  - Text nach «Ein freier Abend»: 32 px Abstand zur Abbildung bei 360 und 1280 px (gemessen).
- **Überlauf:** 320, 360, 414, 768, 1024, 1280 und 1440 px, Vertiefungen offen, beide Themes: `rolle`, `selbstfuersorge` und `index` ohne waagrechten Überlauf, kein Element breiter als das Fenster. Zoom 200 % (640 px bei Faktor 2, und 1280 px mit Schriftgrösse 200 %): ohne Überlauf.
- **Kontraste:** Textelemente mit eigenem Text (`rolle` 278, `selbstfuersorge` 219, `index` 45), in beiden Themes und allen Breiten. Kein Element liegt unter AA (4,5 : 1, grosse Schrift 3 : 1). Linien der Zeichnungen gegen den Hintergrund der Figur: keine unter 3 : 1. Keine festen Farben in SVG, keine `style`-Attribute.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps: `rolle` 24, `selbstfuersorge` 21, `index` 14.
  - Der erste Stopp ist «Zum Hauptinhalt». Jeder Stopp hat einen sichtbaren Fokus und liegt im Fenster.
  - Die Reihenfolge folgt dem Lesen: Kopf, Navigation, Kapitelübersicht, dann die Links im Text.
  - Enter öffnet «Grenzen des Bildes».
  - Nach dem Laden läuft keine Animation. Auf `selbstfuersorge` lief direkt nach Enter ein Fokus-Übergang von 0,01 ms, nach 800 ms keiner mehr.
- **`node abgleich/bedienung.mjs`:** Tabelle in `abgleich/README.md`.
  - `rolle`: 24 Tabstopps, 30 067 px bei 360 px, Abbildung 673 px.
  - `selbstfuersorge`: 21 Tabstopps, 25 453 px, Abbildung 680 px.
  - Seiten der Etappe 1 (wegen der zwei neuen Punkte der Navigation): zwei Tabstopps mehr, bei 360 px 92 px höher.
  - `index`: 14 statt 10 Tabstopps, 3922 → 4408 px.
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Etappe 2a: Visualisierungs-Check der zwei neuen Abbildungen

Selbstprüfung, keine Prüfstufe. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | `v-ro-weg` | `v-sf-abend` | Beleg | Massnahme |
| --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | Build ohne Hinweis `visual-plan`; `data-visual-id` und `data-visual-type` «illustration» wie im Plan | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | E | je 7 Zeilen für 7 Abschnitte; zum Beispiel `v-sf-zu-viel`: «Text ist klarer: STOPP als nummerierte Liste im Wortlaut der …», `v-ro-schuld`: «Text ist klarer: Die fünf Sätze sind Zitate mit je einer Ein…» | – |
| 3 | Prüffrage beantwortet und eingelöst | E | E | Weg: `understood` «… Das Bild zeigt auf einen Blick, wer neben wem geht, ohne eine Liste von Aufgaben.»; das Bild zeigt zwei Menschen nebeneinander. Abend: «Zwei Gedanken am selben Abend zeigen, dass ein Teil der Aufmerksamkeit beim Telefon bleibt …»; die zwei Sätze stehen über Telefon und Buch | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | E | Kernaussage und Kurztext sichtbar, Figur offen; die Vertiefung nennt nur Grenzen des Bildes | – |
| 5 | Ansatzpunkt (B, C, G) | – | – | Illustrationen (Muster D), kein Erklärmodell | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | je die einzige Abbildung der Seite; Garten und Sauerstoffmaske nur als Satz, kein Leuchtturm | – |
| 7 | Kartenraster-Check | E | E | keine Kastenreihe; Text in Listen und Begriffslisten | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | E | Weg: zwei Menschen gleich weit vorn auf demselben Weg, der in die Ferne führt; niemand zieht oder trägt. Abend: Telefon links mit dickerem Rand (leuchtender Bildschirm), Buch rechts geschlossen, Tee dazwischen | – |
| 9 | Verteilt, keine Textwand | T | T | Je eine Abbildung, wie entschieden. Die Seiten sind lang: `rolle` 3339 Wörter, 30 067 px bei 360 px; `selbstfuersorge` 2955 Wörter, 25 453 px. Gegliedert durch Kapitelübersicht, Zwischentitel, Listen und Begriffslisten | Fachstelle (Länge) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle | E | E | Vertiefung «Grenzen des Bildes» im Wortlaut des Auftrags; Quelle «Eigene didaktische Darstellung nach dem Handout «Der Garten»; Bezug: NICE CG78 (2009).» und «Eigene didaktische Darstellung; Bezug: Handout «Energie-Konto».» | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | E | SVG ohne Animation; Sätze, Kernaussage und Kurztext sind HTML-Text | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | E | Kein Überlauf bei 320 und 360 px. Weg: Menschen klein (etwa 60 px bei 360 px), aber erkennbar. Kurzbeschreibungen im Wortlaut des Auftrags, über `aria-describedby` verbunden | – |
| 13 | Theme «kontrast» geprüft | E | E | Bildschirmfotos bei 1280 und 360 px; Linien ≥ 3 : 1; keine festen Farben | – |
| 14 | Inhalt fachlich freigegeben | N | N | `approvalStatus` «ausstehend»; Gate production: `visual-approval` | Fachstelle |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | T | Weg: «Entlastung: Ich darf begleiten, …»: Bild und Satz zeigen genau das. Abend: «Wiedererkennen» trägt das Bild; die «Erlaubnis» (Erreichbarkeit begrenzen) steht erst im Text direkt danach, nicht im Bild | R2 |
| 16 | Ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | E | E | Je ein Gedanke aus Sicht eines Menschen; kein Bildteil beschriftet, keine Liste, die das Bild übersetzt | – |
| 17 | Keine ungewollten Bedeutungen | T | T | Weg: Die linke Person ist etwas grösser (Kopf r 8,4 statt 7,9); das liest sich als zwei Erwachsene, nicht als Führung; die Zeichnung ist die gewählte Skizze. Der Weg «in die Ferne» kann ein Ziel nahelegen; die Vertiefung sagt, dass sich der Verlauf nicht vorhersagen lässt. Abend: «Vielleicht ruft sie gleich an.» nennt die betroffene Person weiblich; das kann ein Klischee über Borderline stützen. Der Satz ist nach dem Auftrag unverändert aus dem Profilbeispiel | R2; Fachstelle (Satz «sie») |

**Freundin-Test (bauende Sitzung):**

- «Ein Stück Weg» besteht ihn: zwei Menschen gehen nebeneinander, der Satz sagt, worum es geht.
- «Ein freier Abend» besteht ihn: Ein Abend mit kaltem Tee und dem Blick aufs Telefon ist ohne Erklärung verständlich.

### Etappe 2a: Neue Sätze zur Freigabe

Jeder Satz steht auch im Abgleich mit Status «neu (2a)».

| Nr. | Satz | Ort | Abgleich |
| --- | --- | --- | --- |
| 1 | «Sie können begleiten.» (Kernaussage, erster Satz; der zweite, «Genesung herstellen können Sie nicht.», stammt aus `garten`) | `rolle` › `anbieten`, Abbildung 1 | `rolle` Nr. 757 |
| 2 | «Zeichnung: Zwei Menschen gehen nebeneinander auf einem Weg, von hinten gesehen. Der Weg führt durch eine Hügellandschaft in die Ferne. Darüber steht der Satz: «Ich kann diesen Weg begleiten, aber nicht für dich gehen.»» (Kurzbeschreibung, Wortlaut des Auftrags) | `rolle` › `anbieten`, Abbildung 1 | `rolle` Nr. 758 |
| 3 | «Innehalten, bevor Sie reagieren» (Zwischentitel; Bestand: «Beziehungs-Achtsamkeit im echten Alltag») | `rolle` › `alltag` | `rolle` Nr. 759 |
| 4 | «Warum Borderline nicht eine einzige Ursache hat, erklärt die Seite «Verstehen» im Abschnitt «Was die Diagnose beschreiben kann».» | `rolle` › `schuld` | `rolle` Nr. 760 |
| 5 | «Wie Sie Ihre Erreichbarkeit begrenzen können, steht auf der Seite «Auf sich achten» im Abschnitt «Was Kraft kostet und was entlastet».» | `rolle` › `alltag` | `rolle` Nr. 761 |
| 6 | «Woran Sie merken, dass die Anspannung steigt, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | `rolle` › `alltag` | `rolle` Nr. 762 |
| 7 | «Was ein solches Gespräch klären kann, steht auf der Seite «Beziehungen» im Abschnitt «Was die Beziehung stärken kann».» | `rolle` › `nach-konflikten` | `rolle` Nr. 763 |
| 8 | «Was Kinder nicht übernehmen müssen, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `rolle` › `kinder` | `rolle` Nr. 764 |
| 9 | «Dort steht auch, wer einspringt, wenn die erste Person ausfällt.» | `rolle` › `kinder` | `rolle` Nr. 765 |
| 10 | «Was bei Gewalt wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `rolle` › `an-grenzen`, nach dem Verweis im Text | `rolle` Nr. 766 |
| 11 | «Wie Sie auf sich achten können, steht auf der Seite «Auf sich achten».» | `rolle` › `an-grenzen` | `rolle` Nr. 767 |
| 12 | «Manche Angehörige bleiben auch an einem freien Abend innerlich auf Abruf.» (Kernaussage, Wortlaut des Auftrags) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 659 |
| 13 | «Das Buch liegt bereit, der Tee wird kalt, und ein Teil der Aufmerksamkeit bleibt beim Telefon. Diese ständige Bereitschaft kann Kraft kosten, auch wenn nichts passiert.» (Kurztext, Wortlaut des Auftrags) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 660 |
| 14 | «Vielleicht ruft sie gleich an.» (Satz in der Szene, aus dem Profilbeispiel) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 661 |
| 15 | «Eigentlich wollte ich lesen.» (Satz in der Szene, aus dem Profilbeispiel) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 662 |
| 16 | «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Das Bild zeigt eine Erfahrung, die manche beschreiben, keine Pflicht und keinen Fehler.» (Vertiefung, Wortlaut des Auftrags) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 663 |
| 17 | «Zeichnung eines Tisches am Abend: eine Tasse Tee, ein Mobiltelefon mit leuchtendem Bildschirm und ein geschlossenes Buch; im Fenster steht der Mond.» (Kurzbeschreibung, aus dem Profilbeispiel) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 664 |
| 18 | «Ruhig atmen» (Zwischentitel; Bestand: «4-6 Atemübung ohne Atemanhalten») | `selbstfuersorge` › `zu-viel` | `selbstfuersorge` Nr. 665 |
| 19 | «5-4-3-2-1: im Hier und Jetzt ankommen» (Zwischentitel; Bestand: «5-4-3-2-1 Grounding») | `selbstfuersorge` › `zu-viel` | `selbstfuersorge` Nr. 666 |
| 20 | «Kurze Übungen finden Sie im Abschnitt «Wenn es gerade zu viel ist».» | `selbstfuersorge` › `eigenes-leben` | `selbstfuersorge` Nr. 667 |
| 21 | «Wie Anspannung in einem Gespräch steigen kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | `selbstfuersorge` › `kraft` | `selbstfuersorge` Nr. 668 |
| 22 | «Mehr zu Schuldgefühlen steht auf der Seite «Ihre Rolle klären» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | `selbstfuersorge` › `unterstuetzung` | `selbstfuersorge` Nr. 669 |
| 23 | «Was dann wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `selbstfuersorge` › `akzeptanz`, nach «Bei Gefahr geht Schutz vor.» | `selbstfuersorge` Nr. 670 |
| 24 | «Ich weiss nicht mehr, was meine Aufgabe ist und was nicht.» (Anliegen, Wortlaut des Auftrags) | `index` › `einstiege`, Eintrag `rolle` | `index` Nr. 255 |
| 25 | «Ich bin erschöpft und komme selbst zu kurz.» (Anliegen, Wortlaut des Auftrags) | `index` › `einstiege`, Eintrag `selbstfuersorge` | `index` Nr. 256 |

### Etappe 2a: Verweise von Etappe-1-Seiten (Vorschlag)

Stellen auf `verstehen`, `beziehungen` und `grenzen`, die auf die neuen Seiten verweisen könnten. Der Linktext besteht aus Wörtern, die schon dastehen. Die Seiten sind jetzt nicht geändert; ein Link würde den Wortlaut nicht ändern.

| Nr. | Seite › Abschnitt | Stelle | Linktext | Ziel |
| --- | --- | --- | --- | --- |
| V1 | `verstehen` › `mythen` | «Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.» | «keine Schuld» | `rolle.html#schuld` («Schuld, Verantwortung und was dazwischen liegt») |
| V2 | `verstehen` › `bewertungen` | «Mitwirken können Erschöpfung, erlebte Kritik, Nähe oder Abstand, Missverständnisse, Scham oder Kränkung.» | «Erschöpfung» | `selbstfuersorge.html#warnsignale` («Warnsignale für Überlastung») |
| V3 | `verstehen` › `anspannung` | «Senken Sie Ihr eigenes Tempo, achten Sie auf Ihre eigene Anspannung und bieten Sie eine Pause an.» | «achten Sie auf Ihre eigene Anspannung» | `selbstfuersorge.html#zu-viel` («Wenn es gerade zu viel ist») |
| V4 | `beziehungen` › `was-hilft` | «Wenn Angehörige oft eigene Termine absagen oder dauernd erreichbar sind, kann das kurz entlasten und zugleich die eigene Belastung erhöhen.» | «dauernd erreichbar» | `selbstfuersorge.html#kraft` («Was Kraft kostet und was entlastet», mit «Ein freier Abend») |
| V5 | `beziehungen` › `verantwortung` | «Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.» | «nicht verantwortlich» | `rolle.html#anbieten` («Was Sie anbieten können und was nicht Ihre Aufgabe ist») |
| V6 | `grenzen` › `bruecke` | «Sie müssen die Beziehung nicht allein tragen.» | «nicht allein tragen» | `selbstfuersorge.html#beratung` («Nicht allein tragen») |
| V7 | `grenzen` › `arten` | «Sie dürfen Zeiten anbieten, in denen Sie erreichbar sind.» | «erreichbar» | `selbstfuersorge.html#kraft` |
| V8 | `grenzen` › `konsequenz` | «Ein Schuldgefühl heisst nicht, dass Sie etwas falsch gemacht haben.» | «Schuldgefühl» | `rolle.html#schuld` |
| V9 | `grenzen` › `gewalt` | Zwischentitel «Wenn Kinder mitbetroffen sind» | ein Satz am Ende des Absatzes wäre nötig, denn Überschriften verlinken nicht; ohne neuen Satz: kein Link | `rolle.html#kinder` («Wenn Kinder mitbetroffen sind») |

Empfehlung der bauenden Sitzung: V1, V4, V6 und V8. Sie treffen das Thema der Zielstelle genau. V2, V3, V5 und V7 sind möglich, aber weniger eindeutig. Ein Link in der Mitte eines Satzes bricht mit der Regel aus 1i, dass ein Verweis den Zieltitel in «…» nennt. Die Fachstelle entscheidet, ob vorhandene Wörter als Linktext genügen.

### Etappe 2a: Entscheide der bauenden Sitzung (zur Prüfung)

- **Gesprächsbeispiele** («Wie das klingen kann», Person A und B) stehen nicht auf `rolle` und `selbstfuersorge`. Sie sind für `kommunizieren` (Etappe 2) vorgemerkt, weil Abschnitt 3 Gesprächstechniken dorthin legt. Drei Einzelsätze daraus stehen als Beispielsätze in `rolle` › `nach-konflikten` (Abgleich Nr. 189, 193 und 194), wie Abschnitt 2a es für Beispielsätze aus dem Bestand verlangt.
- **«Was braucht im Alltag Veränderung?»** (`alltag`) steht auf `selbstfuersorge` › `kraft`, nicht auf `rolle` › `alltag` (Abweichung von der Gliederung). Der Abschnitt fragt nach der eigenen Erschöpfung und nach einer anderen Verteilung von Aufgaben, wie das Energie-Konto. `rolle` verweist auf `selbstfuersorge`.
- **«Wenn Schuldgefühle dazukommen»** (`selbstfuersorge.md`) steht auf `rolle` › `schuld`, zusammen mit `schuld-verantwortung`. So gibt es eine Stelle für Schuld. `selbstfuersorge` › `unterstuetzung` verweist dorthin.
- **«Hinweise für Ihre Situation»** (Partnerin oder Partner, Eltern, erwachsenes Kind) steht in `selbstfuersorge` › `eigenes-leben`, als Begriffsliste nach «Sie dürfen:». Die Hinweise sagen, was jede Rolle für sich selbst braucht.
- **Verweis im Text auf `selbstfuersorge`:** dreimal, an den drei Stellen, an denen der Bestand auf akute Gefahr verweist. In `akzeptanz` (Bestand «Bei Gefahr geht Schutz vor.») steht stattdessen ein Link auf `grenzen.html#gewalt`, damit der Verweis nicht viermal auf einer Seite steht.
- **Übungen als Text:** Atmen und 5-4-3-2-1 mit den Absicherungen des Bestands. Der Timer und seine Schaltfläche entfallen, weil die Seite ohne Skript und ohne Animation auskommt.
- **Leuchtturm:** Die Aussagen des Handouts stehen ohne Bild in `anbieten`. Das Wort «Leuchtturm» kommt auf der Seite nicht vor.
- **Kinder:** Sätze, die schon auf `grenzen` › `gewalt` stehen, sind nicht wiederholt; `rolle` › `kinder` verlinkt dorthin.
- **Bildausschnitt «Ein Stück Weg»:** `viewBox` «0 52 640 218» statt «0 0 640 270». Über den Hügeln war ein leerer Rand von 52 Einheiten der Zeichnung. Die Zeichnung selbst ist unverändert. Sonst nichts verfeinert: Die Sicht bei 1280 und 360 px verlangt keine Änderung.
- **Abstand nach «Ein freier Abend»:** Der Text danach steht in einem zweiten Raster desselben Abschnitts, mit `.bl-nach-figur` (`margin-top: var(--space-8)`). Ohne die Regel klebte der Text an der Quellenzeile der Abbildung.
- **Gunderson et al. (2018)** (Handout `schuld-verantwortung`) ist nicht übernommen, weil die Ursachen auf `verstehen` stehen und dort belegt sind. Das steht als Prüfbedarf in `abgleich/rolle.md`.
- **Kennzeichnungen der Handouts** («Redaktionelle Reflexionshilfe, kein validiertes Drei-Säulen-Modell», «kein DBT-Protokoll») entfallen in den Quellenzeilen, weil die Seite keine Modelle mit Namen nennt. Auch das ist Prüfbedarf.

### Etappe 2a: Kennzahlen der neuen Seiten

Skripte `abgleich/kennzahlen.mjs` und `abgleich/verneinung.mjs`. «Alt» ist bei `rolle` die Summe von `/unterstuetzen/uebersicht` und `/unterstuetzen/alltag`, bei `selbstfuersorge` `/selbstfuersorge` allein, jeweils ohne Handouts.

| Seite | Wörter alt → neu | Absicherungen je 100 Wörter alt → neu | Semikolons alt → neu | Sätze mit Verneinung alt → neu | Sätze über 15 Wörter |
| --- | --- | --- | --- | --- | --- |
| `rolle` | 2736 → 3339 (122 %) | 1,94 → 2,16 | 4 → 2 | 62 von 389 (16 %) → 83 von 389 (21 %) | 32 von 384 (8 %) |
| `selbstfuersorge` | 2419 → 2955 (122 %) | 2,27 → 2,64 | 10 → 2 | 44 von 341 (13 %) → 69 von 330 (21 %) | 23 von 320 (7 %) |
| `index` | 248 → 283 (vor → nach 2a) | 1,61 → 1,41 | 0 → 0 | 4 von 26 → 4 von 28 | – |

- **Länge:** Die neuen Seiten sind länger als die alten, weil sie 16 Handouts aufnehmen, die «alt» nicht zählt. Es gibt kein Kürzungsziel (Abschnitt 2b).
- **Wörter je Abschnitt:**
  - `rolle`: `anbieten` 534, `schuld` 593, `alltag` 818, `nach-konflikten` 196, `mehrere` 192, `kinder` 257, `an-grenzen` 679.
  - `selbstfuersorge`: `eigenes-leben` 366, `kraft` 790, `warnsignale` 284, `zu-viel` 485, `unterstuetzung` 433, `akzeptanz` 366, `beratung` 187.
- **Verneinungen:** Der Anteil liegt bei 21 %, wie auf den Seiten der Etappe 1 (20 bis 21 %). Die meisten Verneinungen tragen eine Entlastung oder eine Absicherung aus dem Bestand, zum Beispiel «Eine schwierigere Phase beweist nicht, dass Sie zu wenig getan haben.».
- **Semikolons:** `rolle` hat zwei in Listenpunkten («… oder anderen Substanzen; wozu er dient, bleibt offen» und «… wenn die Person das möchte; eigene Beratung …»). `selbstfuersorge` hat eines in einem Listenpunkt von `akzeptanz` und eines in der Kurzbeschreibung der Abbildung (Wortlaut des Profilbeispiels, nur für Screenreader; `kennzahlen.mjs` zählt diesen Text bei den Semikolons mit). Ein Prüfpunkt für S.

**Stand 10.10.2026 · Korrektur Etappe 1j · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1J.md` (Freigabe der Fachstelle eintragen). Sonst ist nichts geändert. Die Selbstprüfung von 1i steht darunter.

| Punkt | Stand | Beleg |
| --- | --- | --- |
| Auftrag verschieben | umgesetzt | `KORREKTUR-ETAPPE-1J.md` aus `6ccb57a` unverändert im Website-Ordner (Commit `d0ca1ba`, `cmp`: gleich); im Stamm von `main` gelöscht (`878536e`); zusammengeführt (`ad2c971`) |
| 3 Quellenzeile der Ursachen (P4-F-16) | umgesetzt | `verstehen` › `borderline`: «**Quellen:** WHO, ICD-11 (2024); American Psychiatric Association (2024); NICE CG78 (2009); Linehan (1993).»; «Quellen:» bleibt fett. `git diff --word-diff` auf den Seiten: nur «NICE CG78 (2009);» in `content/verstehen.html` und der gebauten `verstehen.html` |
| 4 `visualPlan` (P4-F-21) | umgesetzt | `approvalStatus` «freigegeben» bei genau `v-vs-eisberg`, `v-vs-anspannung`, `v-vs-bewertungen`, `v-bz-schleife`, `v-bz-sichten`, `v-gr-dear` (Skript mit Prüfung je ID; `git diff`: 6 Zeilen). `editorialStatus`, die zwölf Platzhalter und die Zeilen mit `format` «text» sind unverändert |
| 4 Abgleich, Quellenzeile | umgesetzt | `abgleich/verstehen.md` Nr. 34, 35 und 36: neue Zeile als Fassung, Status «gekürzt», Bemerkung endet mit «; NICE CG78 ergänzt (1j, P4-F-16)». Vergleich mit dem Stand vor 1j per Skript: keine andere Zeile geändert |
| 4 Abgleich, Prüfbedarf | umgesetzt | Bemerkungen mit «Prüfbedarf» enden mit «; erledigt: Freigabe Etappe 1 durch die Fachstelle, 10.10.2026 (1j)»: `verstehen` 11, `beziehungen` 1, `grenzen` 2, `index` 0 Zeilen (Skript: alle mit Vermerk). Unter jeder Überschrift «Prüfbedarf für W1 (Stand …)» der vier Tabellen steht der Absatz «**Erledigt am 10.10.2026:** …» im Wortlaut als erster Absatz |
| 4 Kopfnotizen, README | umgesetzt | «Korrektur 1j: …» und «Stand … Korrektur Etappe 1j» in allen vier Tabellen; `abgleich/README.md`: 1j in der Liste, Prüfergebnis nach 1j, Abschnitt «Korrektur Etappe 1j» |
| 5a Abschnitt «Fachliche Freigabe der Fachstelle» | umgesetzt | zeichengleich aus dem Codeblock von 1J übertragen (Skript), direkt vor diesem Abschnitt |
| 5b Statustabelle | umgesetzt | Zeile «W1 Fachliche Prüfung» zeichengleich ersetzt, Status «offen»; Zeile «Visualisierungs-Check»: «seit 10.10.2026 alle sechs Figuren fachlich freigegeben (Fachstelle)», Status «offen». Keine Stufe steht auf «erledigt» |
| 5c Selbstprüfung | umgesetzt | dieser Block |
| 2 Regeln | eingehalten | Per Skript gegen den Stand vor 1j geprüft: Der Prüfbericht ist ausser 5a, 5b und diesem Block gleich, die Seiten ausser der Quellenzeile |

**Gates (Abschnitt 6):**

- **`node tools/build.mjs`:** 0 blockierend, 14 Hinweise (bisher 20; die sechs Hinweise `visual-approval` entfallen): 12 × `placeholder-approval`, `site-url`, `review-report`.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 13 blockierend (12 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`site-url`), wie erwartet.
- **`node abgleich/pruefe-abgleich.mjs`:** 1763 Zeilen, 0 ohne Fundstelle.

**Hinweis (nicht geändert):** Die Fusszeile aller Seiten sagt weiter «Redaktioneller Status: Entwurf – fachliche Prüfung ausstehend». Sie kommt aus `editorialStatus`, und den ändert 1J ausdrücklich nicht.

**Stand 10.10.2026 · Korrektur Etappe 1i · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1I.md` mit den Entscheiden zur vierten Prüfrunde vom 10.10.2026:

- vorsichtige Formulierungen aus dem Bestand zurück
- Annahme 3 «nicht schuld»
- Verantwortung für Verlauf und Beziehung getrennt
- «Momentaufnahmen» mit Sprecherzeile und Bestandswortlaut
- neun gekürzte Sätze zurück
- «Eine Grenze gilt auch …»
- Ort der Beratung
- Verweise als Titel kenntlich
- Visualisierungsplan nachgeführt
- Abgleich nachgeführt (P4-W1-9)

Diese Selbstprüfung ersetzt die der Korrektur 1h mit Nachtrag r4-7 (Stand `f32c255`). Die Prüfstufen bleiben offen. Der Abschnitt «Visualisierungs-Check» unten beschreibt weiter den Stand 1h. Was 1i an den Figuren ändert, steht hier unter «Visualisierungs-Check: Änderungen durch 1i».

**Gates und Skripte:**

- **`node tools/build.mjs`:** 15 Seiten, Build r4-7, 0 blockierend, 20 Hinweise wie zuvor:
  - 6 Visualisierungen und 12 Platzhalter nicht freigegeben
  - `siteUrl` fehlt
  - Prüfbericht offen
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** blockiert erwartungsgemäss mit 19 Befunden (6 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`), dazu 1 Hinweis (`siteUrl`).
- **`node abgleich/pruefe-abgleich.mjs`:** **1763 Zeilen, 0 ohne Fundstelle.** Ob die genannte Fassung die Aussage trägt, prüft das Skript nicht; das bleibt Aufgabe von W1.
- **Wortlaut:** Ein Skript sucht jede Stelle in «…» aus 1I, Abschnitte 3 bis 9 (Teil `visualPlan`), im sichtbaren Text von `index`, `verstehen`, `beziehungen` und `grenzen` und in `site.config.json`.
  - Ergebnis: 62 Stellen, 45 gefunden (eine davon erst ohne die führende Auslassung «… »).
  - Die 17 übrigen sind keine Fehler:
    - 13 sind Ausgangstexte («bisher») und stehen nicht mehr auf den Seiten bzw. im Plan («4 «Später»»).
    - 4 sind Stellen mit Auslassung «…»; ihr Anfang steht unverändert auf der Seite.
- **Unverändert:** Ein Skript vergleicht den sichtbaren Text Satz für Satz mit dem Stand `af892a5` (vor 1i).
  - Geändert sind genau die Stellen aus 1I (Satz-Diff: `index` 7, `verstehen` 35, `beziehungen` 12, `grenzen` 16 Zeilen).
  - Der Verweis im Text (`data-responsibility-inline`) steht unverändert auf `verstehen`, `beziehungen` und `grenzen` (je 1).
  - Keine `style`-Attribute, keine `tel:`-Links (`grep`: 0).

### Auftrag verschieben

| Schritt | Stand | Beleg |
| --- | --- | --- |
| Upload im Stamm | `KORREKTUR-ETAPPE-1I.md` aus `5c9079c` unverändert in den Website-Ordner gelegt | Commit `2c5d88b` auf `borderline-umbau`; `cmp` mit der Fassung aus `main`: gleich |
| Stamm von `main` | Datei gelöscht | Commit `247d787` auf `main` |
| Zusammenführen | `main` in `borderline-umbau`, ohne Konflikt | Merge-Commit `af892a5` |

### Korrekturauftrag 1i: Stand je Punkt (Abschnitte 3 bis 9)

| Punkt | Stand | Beleg |
| --- | --- | --- |
| 3 `bewertungen` (P4-F-1) | umgesetzt | «Wenn das geschieht, ist es keine Absicht.» |
| 3 `anspannung` (P4-F-5) | umgesetzt | «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» |
| 3 `anspannung` (P4-F-12) | umgesetzt | «… dreht sich für einen Menschen häufig fast alles um den Schmerz oder Streit im Moment.» |
| 3 Stelle 4 (P4-F-7) | umgesetzt | «Es kann wieder ruhiger werden.» an der Kurve, als Überschrift in der Liste und in der Kurzbeschreibung (3 Stellen, Skript) |
| 3 Stelle 4 bei 1280 px | erfüllt, mit Anpassung | bei 1280 px 90 px innerhalb der Figur, überdeckt die Kurve nicht (Bildschirmfoto). Zwischen 800 und 960 px Containerbreite ragte sie aus der Figur (900 px Fenster: 48 px, Seite 12 px Überlauf). Deshalb `@container (max-width:960px)` statt 800 px; darunter Nummern und Liste. Messung bei 12 Breiten von 700 bis 1440 px: Beschriftung innerhalb oder ausgeblendet, kein Überlauf |
| 3 `erleben` (P4-F-10) | umgesetzt | «… so und lässt sich aus der Diagnose nicht vorhersagen.» |
| 3 Eisberg, Vertiefung (P4-F-13) | umgesetzt | «Das Eisberg-Bild ist eine mögliche Verständnishilfe, … sicher «darunterliegt». Es soll Wut nicht verharmlosen.» |
| 3 Rücksprung (P4-F-17) | umgesetzt | «Was die Schwester tut, kann zum neuen Ereignis werden.»; der Satz steht nur einmal (`grep`) |
| 3 Suizid-Absatz (P4-F-9) | umgesetzt | «Bleiben Sie bei der Person nur, …»; Verweis im Text an seiner Stelle |
| 4 Annahme 3 (P4-F-2) | umgesetzt | Hauptsatz und Erklärung im Wortlaut (Skript) |
| 4 Annahme 5 | umgesetzt | «Die Abgrenzung gehört in eine fachliche Abklärung.» am Ende der Erklärung |
| 4 Stelle 4, Text | umgesetzt | «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» nach «Bieten Sie neuen Kontakt …»; Beispiel bleibt |
| 4 Momentaufnahmen (P4-F-4) | umgesetzt | `<p class="bl-scene__lead">Sätze, die Angehörige hören können:</p>` als erstes Element der Szene. «Du bist genau wie alle anderen.» am Satz und in `p.puk-sr` (2 Stellen). Zwei Sätze in der Vertiefung. Bildschirmfotos bei 1280 und 360 px: Zeile über beiden Spalten bzw. über den Sätzen |
| 4 CSS | umgesetzt | `.bl-scene__lead{grid-column:1/-1;margin:0 0 var(--space-2);font:var(--type-body-sm);color:var(--text-default)}`, ohne Rahmen |
| 5 `verantwortung` (P4-F-3) | umgesetzt | «… Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.»; «Es gibt keine «perfekte» Reaktion …» bleibt |
| 5 «Unterstützung verteilen» (P4-F-6) | umgesetzt | zwei Sätze vor «Auch eigene Strategien …» |
| 6 «Geld und Unterstützung» | umgesetzt | «Ihre eigene finanzielle Sicherheit und Ihre Belastungsgrenzen gehören in diese Entscheidung.»; Beispiel bleibt |
| 6 `konsequenz` (P4-F-6, P4-F-11) | umgesetzt | Absatz 1 in vier Sätzen; neuer Absatz direkt vor «Ein Schuldgefühl …». Bildschirmfotos bei 1280 und 360 px |
| 6 `bruecke` (P4-S-5), `reihenfolge` (P4-S-6) | umgesetzt | «…, denn sie zeigen, was geht und was nicht.»; «Langfristig und emotional niedriger:» |
| 6 `dear` (P4-W2-4) | umgesetzt | Verweissatz mit Link `verstehen.html#anspannung` auf den Titel; ein Tabstopp mehr (`bedienung.mjs`) |
| 7 `index` › `beratung` (P4-F-19, P4-S-6) | umgesetzt | fünf Sätze im Wortlaut, im selben Absatz; der Satz davor und «Kontakt: …» bleiben. Bildschirmfotos bei 1280 und 360 px |
| 8 Verweise (P4-S-3) | umgesetzt | drei Stellen; Anführungszeichen ausserhalb von `<a>`, Linkziele gleich (`git diff`) |
| 9 `visualPlan` (P4-V-1) | umgesetzt | `v-vs-anspannung` › `statement`: «4 «Es kann wieder ruhiger werden.»». Sonst kommt «Später» im Plan nicht vor (`grep`). `v-vs-bewertungen` › `goal`, `source` und `statement` im Wortlaut |
| 9 Abgleich | umgesetzt | siehe unten |
| 2 Regeln | eingehalten | keine eigenen Formulierungen auf den Seiten (Wortlaut-Skript); Sätze an allen Stellen gleich geändert |

### Abgleich (Abschnitt 9)

- **Neuer Status:** «umformuliert (Prüfrunde 4, 1i)»; der frühere Status steht in der Bemerkung («bis 1h: …»).
- **Geänderte Zeilen:**
  - `verstehen`: 29 Zeilen und Zusatzzeilen Nr. 544 und 546
  - `beziehungen`: 6 Zeilen und Zusatzzeilen Nr. 239 und 247
  - `grenzen`: 24 Zeilen
  - `index`: keine
  - Vergleich mit dem Stand vor 1i per Skript: keine andere Zeile geändert.
- **Zurückgekehrte Sätze** mit neuer Fassung und Ort: b162, b163, g51, g79, g369, g228, g261, g627, v17, v49, v119, v126, v330, v377, v381 sowie zu P4-F-5 v89 und v246, zu P4-F-12 v78 und zu P4-F-13 v61.
  - «übernommen», wo der Satz wörtlich gleich ist: v246, v330, v377.
  - Sonst «umformuliert (Prüfrunde 4, 1i)».
  - In der Bemerkung steht «Entscheid Fachstelle 10.10.2026 (P4-F-…)» statt «Prüfbedarf».
- **v289** (P4-F-5): Die Fassung bleibt. Die Bemerkung nennt jetzt den Satz mit «professionelle Hilfe» statt «Prüfbedarf».
- **P4-W1-9:**
  - v371 und v390 nennen die entfallenen Teile.
  - g208 ist «verschoben» nach `kommunizieren` (Etappe 2).
  - v138 und zusätzlich v140 bis v146 nennen die Quellenzeile statt der Vertiefung «Quellen».
  - Nr. 546 ist der Bestandszeile «Du bist genau wie alle anderen.» aus dem Handout `wenn-worte-treffen` zugeordnet, Status «übernommen».
- **Weitere Zeilen, deren Fassung sich mit 1i ändert:**
  - Eisberg: v167, v170
  - «häufig fast alles»: v242, v265, v272
  - «Abstand, Schutz und professionelle Hilfe»: v342, v343
  - Annahme 3: v117
  - Kopf von `grenzen`: g61, g110, g125, g308, g374, g602
  - Beratung auf `index`: g115, g247
  - «niedriger»: g138 bis g140
  - «denn sie zeigen»: g396, g399, g403, g405, g423
  - Suizid-Absatz: g646
  - `verantwortung`: b209
- **Nur die Bemerkung angepasst** (Zitat der neuen Fassung): v204, v249, v340, v445, v456, v504, b154, b155, b210.
- **Zählung:**
  - 1739 Bestandszeilen und 23 Zeilen ohne Bestandssatz (vorher 24).
  - Dazu 1 Zeile mit Bestandssatz aus einem Handout, das sonst keiner Seite der Etappe 1 zugeordnet ist (Nr. 546).
  - Kopfnotiz «Korrektur 1i: …» auf allen vier Tabellen.
  - `abgleich/README.md`: Status, Prüfergebnis, Messwerte, Abschnitt «Korrektur Etappe 1i».

### Wortzahl, Verneinungen und Bedienung

Skripte `abgleich/kennzahlen.mjs`, `abgleich/verneinung.mjs` und `abgleich/bedienung.mjs`. Werte vor 1i am Stand `af892a5`.

| | `index` | `verstehen` | `beziehungen` | `grenzen` |
| --- | --- | --- | --- | --- |
| Wörter vor → nach 1i | 238 → 248 | 1602 → 1673 | 1564 → 1600 | 1601 → 1667 |
| Sätze mit Verneinung | 3 von 24 → 4 von 26 | 37 von 183 → 39 von 190 | 33 von 169 → 35 von 172 | 42 von 195 → 43 von 201 |
| Absicherungen je 100 Wörter | 1,68 → 1,61 | 3,00 → 3,35 | 4,48 → 4,56 | 2,62 → 2,52 |
| Tabstopps | 10 → 10 | 18 → 18 | 16 → 16 | 20 → 21 |
| Seitenhöhe bei 360 px | 3863 → 3922 px | 16 071 → 16 418 px | 15 199 → 15 435 px | 16 500 → 16 982 px |
| höchste Figur bei 360 px | – | Anspannungskurve 3282 → 3379 px | Zwei Sichten 2359 px | DEAR 1791 px |

**Abschnitte mit geänderter Wortzahl:**

| Seite | Abschnitt | Wörter |
| --- | --- | --- |
| `index` | `beratung` | 67 → 77 |
| `verstehen` | `erleben` | 99 → 107 |
| `verstehen` | `eisberg` | 180 → 176 |
| `verstehen` | `anspannung` | 395 → 412 |
| `verstehen` | `bewertungen` | 235 → 270 |
| `verstehen` | `mythen` | 394 → 409 |
| `beziehungen` | `schleife` | 272 → 273 |
| `beziehungen` | `verstaerker` | 470 → 473 |
| `beziehungen` | `was-hilft` | 159 → 187 |
| `beziehungen` | `verantwortung` | 237 → 241 |
| `grenzen` | `bruecke` | 153 → 154 |
| `grenzen` | `arten` | 144 → 155 |
| `grenzen` | `dear` | 234 → 253 |
| `grenzen` | `konsequenz` | 143 → 174 |

Die Absicherungen auf `verstehen` steigen durch die vorsichtigen Formulierungen («kann», «häufig», «mögliche»); das ist Wortlaut des Auftrags.

**Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5:**

- **Überlauf:** keiner bei 320, 360, 768, 1280 und 1440 px auf den vier Seiten, auch nicht im Theme «kontrast» bei 1280 px.
- **Kontrast nach WCAG 1.4.3:** für allen sichtbaren Text in `main` gemessen, Vertiefungen geöffnet; kein Wert unter AA.
- **Fokus:** Alle Tabstopps haben einen sichtbaren Fokus; der erste ist «Zum Hauptinhalt».
- **Kein Wort über einer Form:**
  - Eisberg wie bisher: jedes Wort in der Form bei 900 bis 1440 px Fensterbreite; schmale Darstellung unter 800 px Containerbreite.
  - Kurvenbeschriftungen innerhalb der Figur oder ausgeblendet; die Beschriftung an Stelle 4 überdeckt die Kurve nicht.
- **Bildschirmfotos angesehen:**
  - bei 1280 und 360 px: Abbildung 2 und 3 auf `verstehen`, `index` › `beratung`, `grenzen` › `konsequenz`
  - im Theme «kontrast» bei 1280 px: alle sechs Figuren
- **Nicht geprüft:** Screenreader, Hardwaretastatur und Touch (Stufe 5, Person).

### Visualisierungs-Check: Änderungen durch 1i

| Figur | Punkt | Ergebnis | Beleg |
| --- | --- | --- | --- |
| `v-vs-anspannung` | 1 Plan entspricht der Seite | E (vierte Runde: T, P4-V-1) | `statement` nennt Stelle 4 «Es kann wieder ruhiger werden.» wie Beschriftung, Liste und Kurzbeschreibung |
| `v-vs-anspannung` | 10 nicht verfälscht | E | Stelle 4 mit «kann» (P4-F-7); «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» aus dem Handout |
| `v-vs-anspannung` | 9 keine Textwand | T, wie bisher | bei 360 px 3379 px hoch (vorher 3282 px) |
| `v-vs-anspannung` | 12 lesbar | E | unter 960 px Containerbreite Nummern an der Kurve, Sätze in der Liste darunter |
| `v-vs-bewertungen` | 1 Plan entspricht der Seite | E (vierte Runde: T, P4-V-1) | `goal`, `source` und `statement` ohne Pendel; `statement` nennt die Zeile «Sätze, die Angehörige hören können:» |
| `v-vs-bewertungen` | 4 Kernaussage, Erklärtext | E | unverändert; die Vertiefung ergänzt zwei Sätze und trägt die Hauptaussage nicht allein |
| `v-vs-bewertungen` | 16 Beschriftungen nennen Erleben | E | Die Zeile nennt, wer die Sätze hört (P4-F-4), und keinen Bildteil |

**Nicht erfüllt oder offen:**

- **Punkt 14:** Keine Figur ist fachlich freigegeben.
- **Weiter teilweise erfüllt** (Visualisierungs-Check unten):
  - Schleife: 2, 6, 15
  - DEAR: 8, 15, 16
  - Anspannungskurve: 9
  - Eisberg: 16, 17
- **Offen bis zur Freigabe:** P4-F-8, P4-F-16, P4-F-21. Dieser Auftrag ändert daran nichts.
- **Zurückgestellt (optional):** P4-W2-2, P4-S-4, P4-V-2, P4-V-4, P4-V-5, P4-V-6.
- **Stufe 5:** Screenreader-Läufe, Hardwaretastatur und Touch.

### Entscheide der bauenden Sitzung (zur Prüfung)

- **Schwelle der Kurvenbeschriftungen 960 statt 800 px:** Sonst ragte die längere Beschriftung bei 900 px Fensterbreite aus der Figur. Der Kommentar in `borderline.css` nennt den Grund.
- **Abstand unter der Sprecherzeile:** `--space-2`; der Auftrag sagt «mit Abstand nach unten».
- **Abgleich:**
  - **Nr. 544:** «umformuliert (Prüfrunde 4, 1i)», obwohl es keine Bestandszeile gibt (Regel des Auftrags: geänderte Fassung). Bisher gab es solche Zeilen schon mit «umformuliert (einfache Sprache, 1e)».
  - **Nr. 546:** zählt nicht mehr zu den Zeilen ohne Bestandssatz.
  - **Sätze ohne Bestandszeile:** «Sätze, die Angehörige hören können:», «Erfahrungen in engen Beziehungen können mitwirken, neben vielen anderen Einflüssen.» und der Verweissatz in `dear` bekommen keine eigene Zeile. Der Auftrag verlangt das nicht; die Kopfnotizen nennen sie.
  - **Zitate alter Fassungen:** Bemerkungen nennen sie ohne «…» (etwa «bis 1h ohne «kann»»). Das Prüfskript sucht jedes Zitat auf den Seiten oder im Bestand.
  - **Nicht genannt:** v140 bis v145 sind wie v138 und v146 berichtigt (gleicher Befund).

### Kennzahlen aller Seiten (Skript `abgleich/kennzahlen.mjs`)

Gemessen an der alten Seite allein, mit derselben Zählweise für alt und neu (`abgleich/README.md`). Text nur für Screenreader (`.puk-sr`) zählt nicht. Der Richtwert gilt nicht; die Wortzahlen werden nur berichtet.

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 248 | 57 % | – | – | 1,85 → 1,61 | 1 → 0 |
| `verstehen` | 2524 | 1673 | 66 % | 1300 | 1365 | 2,54 → 3,35 | 12 → 0 |
| `beziehungen` | 2149 | 1600 | 74 % | 1100 | 1155 | 3,82 → 4,56 | 6 → 1 |
| `grenzen` | 2985 | 1667 | 56 % | 1500 | 1575 | 2,41 → 2,52 | 4 → 0 |

## Visualisierungs-Check

Selbstprüfung der bauenden Sitzung nach Korrektur 1h, keine Prüfstufe. Zuerst die Tabelle der Vorlage über alle Figuren, danach die Matrix je Figur. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

Mit Korrektur 1h gibt es 6 Figuren:

- **`v-vs-eisberg`:** neu gezeichnet; die Wörter stehen im Bild.
- **`v-vs-anspannung`:** Beschriftungen mit Punkt; Stelle 4 neu.
- **`v-vs-bewertungen`:** «Momentaufnahmen» ersetzt das Pendel.
- **`v-bz-schleife`:** Stationen in drei Zeilen.
- **`v-bz-sichten`:** gleiche Oberkante für beide Sichten.
- **`v-gr-dear`:** Nummern «1» bis «4».

`v-vs-mythen` ist im Plan jetzt Text (BS-3) und keine Figur mehr.

| Nr. | Prüfpunkt | Ergebnis | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Visualisierungsplan liegt vor; die Seiten entsprechen ihm | erfüllt | Build ohne Hinweis `visual-plan`. Jede Figur trägt `data-visual-id` und `data-visual-type` wie im Plan. `v-vs-bewertungen` steht im Plan und auf der Seite als «illustration» (seit Build r4-7) | – |
| 2 | Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt | teilweise | `v-vs-mythen` als Text: «Text ist klarer: Annahme und Einordnung sind Paare ohne Bildform; …». Schleife wie bisher: F-W2-02 | W2 entscheidet F-W2-02 |
| 3 | Prüffrage je Darstellung konkret beantwortet; die Darstellung zeigt, was die Antwort verspricht | erfüllt | Momentaufnahmen: `understood` «… Das Album zeigt auf einen Blick, dass es mehr als zwei Bilder gibt.» Das Bild zeigt das Album mit kleinen Fotos und zwei herausgenommenen. Eisberg: Wörter im Bild, oben und unten ohne Zuordnung | – |
| 4 | Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung | erfüllt | Momentaufnahmen: Kernaussage und Kurztext mit drei Sätzen sichtbar, Figur offen. Die Vertiefung ergänzt nur, was den Blick färben kann | – |
| 5 | Erklärmodelle (B, C, G): Ansatzpunkt markiert oder Verzicht begründet; keine Verantwortung für Behandlung oder Verlauf zugeschoben | erfüllt | Kurve Stelle 2 und Schleife Station 5 mit doppeltem Ring und Satz «… keine Pflicht.»; DEAR «entfällt: Der ganze Ablauf beschreibt das eigene Handeln …» | – |
| 6 | Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt | teilweise | Schleife wie bisher (F-W2-02) | W2 |
| 7 | Kartenraster-Check | erfüllt | Die Kastenreihe der Annahmen ist entfallen (BS-3). Zwei Sichten zeigen Paare nebeneinander, kein Raster gleichartiger Karten | – |
| 8 | Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung | teilweise | Zwei Sichten: Der Unterschied steht jetzt in Lage und Überschrift, nicht mehr in der Linienart (BS-6). DEAR: vier gefüllte Punkte auf einer Linie (P-6) | Profil P-6 |
| 9 | Darstellungen über den Erkenntnisweg verteilt; keine unbegründete Textwand | teilweise | Anspannungskurve bei 360 px 3282 px hoch. Abschnitt 06 ist eine Begriffsliste mit sieben Paaren, gegliedert durch `dt` und `dd` | Fachstelle (Länge) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle oder Kennzeichnung | erfüllt | Eisberg: «… keine Aussage darüber, was in einer bestimmten Person «darunterliegt».» Momentaufnahmen: Vertiefung «… und Grenzen des Bildes»; Kennzeichnung «Eigene didaktische Darstellung · Grundlage: Linehan (1993); Hoffman et al. (2005).» | – |
| 11 | Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich | erfüllt | Eisberg-Wörter und Szenensätze sind HTML-Text, ohne Skript sichtbar; keine Animation | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | erfüllt | Bei 320 und 360 px kein Überlauf. Der Eisberg bleibt sichtbar (vorher fehlte er), die Szene ebenfalls. Kurzbeschreibungen im Wortlaut von 1H. Der Pendel-Befund R3-V-03 ist gegenstandslos, weil das Pendel entfällt; das bestätigt die Prüfsitzung | – |
| 13 | Theme «Hoher Kontrast» geprüft | erfüllt | Bildschirmfotos aller sechs Figuren bei 1280 px; `grep` nach festen Farbwerten in SVG: 0 | – |
| 14 | Inhalt fachlich freigegeben | nicht erfüllt | alle sechs `approvalStatus` «ausstehend» | Fachstelle |
| 15 | Bildsprache passt zum Thema; Wirkung im Plan und im Bild eingelöst | teilweise | `resonance` für alle sechs Figuren. Eisberg weich, mit Frage an die andere Person; Momentaufnahmen als Fotoalbum aus dem Alltag. Schleife: fünf Felder mit Pfeilen bleiben ein Ablaufbild (Variante B). DEAR: Punktreihe wie eine Schrittanzeige (BS-7 nur zum Teil) | R2 |
| 16 | Metapher ohne Code: ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | teilweise | Eisberg breit: die Wörter selbst sind das Erleben. Eisberg schmal: Listen «Sichtbar» und «Darunter möglich» unter der Zeichnung (Wortlaut des Auftrags). DEAR: Kürzel «D • Beschreiben» usw. | R2 |
| 17 | Keine ungewollten Bedeutungen | teilweise | Eisberg: Kälte und Gefahr bleiben im Motiv (Audit B6); die Fachstelle hat das Motiv am 10.10.2026 bestätigt. Die übrigen Figuren ohne solche Bedeutung; Zwei Sichten ohne gestrichelte Linie | R2; Fachstelle entschieden |

### Matrix je Figur (Selbstprüfung)

| Nr. | Prüfpunkt | `v-vs-eisberg` | `v-vs-anspannung` | `v-vs-bewertungen` | `v-bz-schleife` | `v-bz-sichten` | `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | T | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | E | E | E |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | E |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | E | – | E | – | E |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | E | T | E | E |
| 7 | Kartenraster-Check | E | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | E | E | E | T |
| 9 | Verteilt, keine Textwand | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | E | T | E | T |
| 16 | Metapher ohne Code | T | E | E | E | E | T |
| 17 | Keine ungewollten Bedeutungen | T | E | E | E | E | E |

**Belege für die mit 1h geänderten Figuren**

- **`v-vs-eisberg`:**
  - **1:** `data-visual-type="layer-model"` wie im Plan.
  - **3 und 8:** Die Wörter stehen im Eisberg, oben die sichtbaren, unten die möglichen, ohne Linien dazwischen. Der Plan sagt: «Keine Zuordnung zwischen oben und unten.»
  - **12:** Bei 360 px steht die Zeichnung über die ganze Breite, darunter die Listen und die Frage (Bildschirmfoto).
  - **15:** Wirkung «Entlastung: … und ich darf nachfragen, statt zu raten.» Die Frage «Wie ist es gerade für dich?» steht neben dem Bild.
  - **16, T:** Schmal ordnen die Überschriften «Sichtbar» und «Darunter möglich» die Wörter oben und unten zu. Das ist eine Liste unter dem Bild nach Auftrag. Ob sie als Liste gilt, die Bildteile übersetzt, beurteilt R2.
  - **17, T:** wie in der Tabelle oben.
- **`v-vs-anspannung`:**
  - **15 und 16:** Alle vier Stellen sind Sätze aus dem Erleben, auch Stelle 4 (BS-5, erster Teil).
  - **9, T:** 3282 px bei 360 px (vorher 3254 px).
  - BS-5 zweiter Teil (eigene Anspannung als zweite Linie) bleibt offen.
- **`v-vs-bewertungen`:**
  - **3, 8 und 15:** Album mit kleinen Fotos; zwei herausgenommene Fotos, hell mit Sonne und dunkel mit Regenwolke. Die Sätze stehen darüber.
  - **11:** Die Figur ist offen, die Sätze sind HTML-Text.
  - **12:** Bei 360 px stehen die Sätze untereinander über der Zeichnung; Höhe 848 px.
  - **16:** keine Beschriftung von Bildteilen; die Liste «Links / Mitte / Rechts» ist entfallen.
- **`v-bz-schleife`:**
  - **15, T:** Wer handelt, steht oben in Lesegrösse, der Beispielsatz ist die Hauptzeile, der Modellbegriff steht klein darunter (BS-4 Variante B). Die Form aus fünf Feldern mit Pfeilen bleibt ein Ablaufbild. Variante A (zwei Seiten) hat die Fachstelle nicht gewählt.
  - **2 und 6, T:** wie bisher (F-W2-02).
- **`v-bz-sichten`:**
  - **8:** Beide Spalten haben eine durchgezogene Oberkante. Der Unterschied steht in Überschrift und Lage (BS-6). Damit ist P-7 für diese Figur gegenstandslos.
- **`v-gr-dear`:**
  - **8, T:** vier gefüllte Punkte (P-6).
  - **15, T:** Statt «Schritt n von 4» stehen jetzt nur Nummern. Die Punktreihe bleibt und wirkt wie eine Schrittanzeige; BS-7 nennt auch sie.
  - **16, T:** Kürzel «D • Beschreiben» usw. bleiben; sie zeigen die Herkunft des Modells.

**Übrige Punkte:** Belege wie in der Selbstprüfung 1g und der dritten Prüfrunde.

**Nicht erfüllt oder offen (Selbstprüfung):**

- **Punkt 14:** keine Figur ist fachlich freigegeben.
- **Teilweise erfüllt:**

  | Punkt | Figuren |
  | --- | --- |
  | 2 | Schleife |
  | 6 | Schleife |
  | 8 | DEAR |
  | 9 | Anspannungskurve |
  | 15 | Schleife, DEAR |
  | 16 | Eisberg (schmal), DEAR |
  | 17 | Eisberg |

- **Umfang:** Alle Wortzahlen liegen über Richtwert plus 5 %. Der Richtwert gilt nicht; über die Länge entscheidet die Fachstelle.
  - `verstehen`: 1602 Wörter.
  - `beziehungen`: 1564 Wörter.
  - `grenzen`: 1601 Wörter.
- **Abweichungen vom Auftrag**, mit Grund oben:
  - Schwellen 800 und 700 px.
  - `radius-md`, Entscheid auf Rückfrage.
- **Design-System:** Die Gate-Lücke für eigene Zeichnungen als «illustration» ist mit Build r4-7 geschlossen (Gate-Korrektur 10.10.2026).
- **Aus dem Audit offen:** BS-5 zweiter Teil (Fachstelle), BS-8 (Etappe 2).
- **Offen für die Fachstelle:**
  - R3-W1-05, R3-W1-06, F-V-05, F-W1-11, F-W2-02, F-W2-03.
  - Prüfbedarf in `abgleich/*.md`.
  - Was mit den Skizzen im Stamm geschieht.
  - Alle fachlichen Freigaben.
  - F-V-11 (Höhe der Annahmen) ist mit BS-3 gegenstandslos; das bestätigt die Prüfsitzung.
- **Statustabelle:** Die Zeilen R1 bis R3 fehlen noch; die Prüfsitzung trägt sie ein.
- **Profil (später):** P-6, P-9.
- **Offen für Stufe 5:** Screenreader-Läufe, Hardwaretastatur und Touch.

## Prüfrunde 2c · zweite Prüfsitzung (11.10.2026, Stand 7ee24ba)

**Verhältnis zur Prüfrunde 2c darunter:** Eine zweite Prüfsitzung hat denselben Auftrag am selben Stand unabhängig ausgeführt, ohne die erste Prüfung zu kennen (sie war beim Start noch nicht gemergt). Sie hat weder gebaut noch die erste Prüfung gemacht. Die IDs tragen deshalb das Präfix «P2c2-». Übereinstimmungen und Unterschiede zur ersten Prüfung stehen am Ende dieses Abschnitts. Das entspricht der «Prüftiefe» (zweite, unabhängige Prüfsitzung für W1 und Visualisierungs-Check).

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `7ee24ba` «main in borderline-umbau zusammengeführt (Profil 2026.10.1)» (`git log -1` beim Start). Geprüft sind die Seiten `genesung`, `unterstuetzung`, `diagnose` und `behandlung` sowie auf `index` die zwei neuen Einstiege (Genesung, Unterstützung finden). Die Etappen 1, 2a und 2b sind von der Fachstelle freigegeben. Sie dienen hier nur als Massstab für Begriffe, Ton, Verantwortung, Absicherungen und Wörter für Hilfe. Die Prüfsitzung hat die Website nicht gebaut. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht.

**Vorgehen**

- **Grundlagen gelesen:** aus `guidelines/` Ablauf, Fachliche Qualität, Gesamtkohärenz, Sprache und Ton, Visuelle Wissensvermittlung («Ein Bild, eine Idee»), Visualisierung umsetzen (Check 1–17), Barrierefreiheit, Technische Qualität, Pre-Release-Audits (R2 Teil 3); `README.md` («Zuständigkeit statt Krisenzugang», «Verweis im Text», «Kritische Information nie nur hinter …»); im Website-Ordner `BAUAUFTRAG-ETAPPE-2C1.md`, `BAUAUFTRAG-ETAPPE-2C2.md`, `BAUAUFTRAG-ETAPPE-2B.md` (Abschnitt 2), die Selbstprüfungen 2c-1 und 2c-2, die Prüfrunde 2b, das Bildsprache-Audit, `UMBAUPLAN.md`, `site.config.json` und `abgleich/` (`README.md`, `genesung.md`, `unterstuetzung.md`, `diagnose.md`, `behandlung.md`).
- **Bestand:** Branch `origin/borderline-bestand`, `bestand/borderline-angehoerige/texte/` mit `git archive` ausgelesen. Ganz gelesen: `verstehen--diagnostik.md`, `verstehen--begleiterkrankungen.md`, `unterstuetzen--therapie.md`, `genesung.md`; in Teilen `fachstelle.md`, `beratung.md`, `buchempfehlungen.md` und die Handouts `garten`, `fortschritt-paradox`, `remission-heilung`, `5-faktoren-genesung`.
- **Abgleich:** die vier Tabellen nach Status gefiltert; 40 Zeilen «entfällt», «zusammengeführt» oder «verschoben» von Hand gegen Seite und Bestand gelesen (Teil A2), dazu gezielt alle Zeilen mit Inhalt zu Schutz, Nachsorge, Schuld und Medikamenten.
- **Rückwärtsprüfung:** Ein Skript der Prüfsitzung zerlegt den sichtbaren Text der vier Seiten (mit Vertiefungen, ohne Quellenblock und SVG) in 619 Sätze, sucht für jeden den ähnlichsten Satz im ganzen Bestand (Wortüberlappung) und prüft, ob er in den Listen «Neue Sätze zur Freigabe» (2c-1 und 2c-2) steht. Die 60 schwächsten Sätze und alle 37 Sätze unter 80 % Übereinstimmung, die in keiner Liste stehen, sind von Hand gelesen (Teil A3).
- **Browser:** lokal `python3 -m http.server 8765` im Projektstamm, Chromium über Playwright (`/opt/pw-browsers/chromium`). Zum Vergleich der Stand `2d5330b` in einem eigenen Arbeitsbaum auf Port 8766. Bildschirmfotos angesehen, nicht committet.
- **Netz:** Externe Adressen und die Vorschau auf Netlify waren aus dieser Umgebung nicht erreichbar (`curl`: keine Verbindung; Abruf über das Werkzeug zum Laden von Webseiten: Name nicht auflösbar). Teil A4 stützt sich deshalb auf «Bekannt aus Prüfung 1», Punkt 3, und auf Abschnitt 5 des Bauauftrags 2c-2.

**Ergebnis in Kürze**

- Die vier Seiten übertragen den Bestand treu. In 70 verglichenen Aussagen ist keine Absicherung zu Person, Ursachen, Diagnose, Verlauf, Schweigepflicht oder Schutz ersatzlos entfallen. Es gibt keine neue absolute Aussage über die betroffene Person und kein Heilungsversprechen. Die Rückwärtsprüfung findet keinen neuen Satz ausserhalb der Listen.
- Vor der Durchsicht durch die Fachstelle sind fünf Punkte wichtig:
  - **Schutz:** In `behandlung` › `wartezeit` nennt der Satz für «unklare Dringlichkeit» keinen Weg. Er sollte den freigegebenen Wortlaut von `krise` übernehmen (P2c2-F-1).
  - **Abbildung «Ein neuer Trieb»:** Die zwei Sätze stehen gleichrangig und ohne Kennzeichnung. Die Prüfperson kann den Satz «Eine schwierigere Phase entwertet alles.» als Aussage der Website lesen. Die Giesskanne trägt eine zweite Idee, die nur in der Vertiefung steht (P2c2-F-2).
  - **Angebotsliste:** Das Kriterium der Liste ist nicht erkennbar. Für HYPE («ab 13 Jahren») und das Sanatorium Kilchberg trägt die Website die Angabe nicht (P2c2-F-3).
  - **Rollen:** «Kann beitragen» passt nicht zu den Mehrzahlrollen, und die Liste der Angehörigen ist mit sieben Punkten zu lang (P2c2-F-4).
  - **Widerspruch:** `genesung` sagt, weitere psychische Erkrankungen werden «eigenständig behandelt»; `behandlung` sagt «mitbehandelt» und «integriert» (P2c2-F-5).
- Die Kennzahlen der bauenden Sitzung stimmen (Abweichungen von höchstens 4 Wörtern ausser bei `genesung`, siehe Teil C). Alle vier Seiten bleiben unter dem Längenziel; das Wichtige steht ohne Aufklappen. Technik, Zuständigkeit, Bedienung und Kontrast sind ohne Befund. Die freigegebenen Seiten sind im Wortlaut unverändert.

### Teil A · W1 Fachliche Vorprüfung

#### A1 · 70 Aussagen gegen den Bestand

Je Seite mindestens 12, auf `diagnose` und `behandlung` je mindestens 18 (13 / 13 / 22 / 22). Ausgewählt nach Auftrag. Nr. = Zeile im Abgleich (g = `genesung.md`, u = `unterstuetzung.md`, d = `diagnose.md`, b = `behandlung.md`), wo die Prüfsitzung sie nachgeschlagen hat. Bestandsdateien in `texte/`; «Handout x» = `materialien--text--x.md`.

**`genesung`**

| # | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- |
| 1 | «93% erreichten während einer zehnjährigen Studie mindestens einmal eine symptomatische Remission über zwei Jahre.» (`genesung.md`) | wörtlich mit Leerschlag vor %, dazu aus dem Handout «Die Diagnosekriterien waren in diesem Zeitraum nicht mehr erfüllt. Einzelne Beschwerden konnten weiterhin bestehen.» (`forschung`) | gleichbedeutend (2c-1 Frage 1, entschieden) |
| 2 | «50% erreichten im selben Beobachtungszeitraum eine mindestens zweijährige Recovery: Remission zusammen mit guter sozialer und beruflicher Funktionsfähigkeit nach der Studiendefinition.» | wörtlich (`forschung`) | gleichbedeutend |
| 3 | «Hinweis: Untersucht wurden 290 Erwachsene, die zu Studienbeginn stationär behandelt wurden. Die Zahlen beschreiben jemals erreichte Zustände im Verlauf, nicht den Anteil dauerhaft beschwerdefreier Menschen am Studienende. Sie sind keine individuelle Prognose.» | Satz zur Stichprobe direkt nach den Zahlen; Liste «Was die Zahlen nicht sagen» mit drei Punkten, darunter «Die Zahlen beschreiben diese Studiengruppe und keine persönliche Prognose.» (`forschung`) | gleichbedeutend; Einschränkung sichtbar und direkt bei den Zahlen |
| 4 | «10 Jahre beschreiben den Beobachtungszeitraum der Forschung. Daraus lässt sich keine feste Wartezeit bis zu einer Besserung ableiten.» | wörtlich, dazu «Veränderungen können früher eintreten.» (Handout `genesung-zahlen`, g255) | gleichbedeutend |
| 5 | «Die diagnostischen Kriterien der Borderline-Störung werden über einen festgelegten Zeitraum nicht mehr erfüllt. Einzelne Beschwerden können trotzdem bestehen bleiben.» (`genesung.md`, Remission) | «In Verlaufsstudien bedeutet symptomatische Remission, dass die Diagnosekriterien während eines festgelegten Zeitraums nicht mehr erfüllt sind. … Remission bedeutet nicht automatisch, dass alle Beschwerden verschwunden sind oder keine Unterstützung mehr nötig ist.» (`begriffe`, Handout `remission-heilung`) | gleichbedeutend |
| 6 | «Eine Einteilung in «geheilt» oder «für immer krank» wird individuellen Verläufen nicht gerecht.» (Handout `remission-heilung`) | wörtlich, Vertiefung «Zum Begriff «Heilung»» (`begriffe`) | gleichbedeutend; kein Heilungsversprechen; die Vertiefung ist Begriffsklärung, kein Schutzhinweis |
| 7 | «Ein schwieriger Abschnitt macht frühere Erfahrungen oder Fähigkeiten nicht wertlos.» (`genesung.md`, g105) | Kernaussage von Abbildung 1 «Eine schwierigere Phase bedeutet nicht, dass alles Erreichte verloren ist.» (`verlauf`) | gleichbedeutend |
| 8 | «erneute Belastung ernst nehmen, ohne bisherige Entwicklung für verloren zu erklären» (`genesung.md`, g111) | «Nehmen Sie erneute Belastungen ernst, ohne sie als persönliches Scheitern zu deuten.» (`verlauf`, Wortlaut Handout `fortschritt-paradox`) | gleichbedeutend über die Kernaussage (Nr. 7); die Bemerkung im Abgleich nennt das |
| 9 | «Für Borderline selbst sind Medikamente keine Kernbehandlung; Änderungen nur mit der behandelnden Fachperson.» | «Für Borderline selbst sind Medikamente keine Kernbehandlung. Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» (`einfluesse`) | gleichbedeutend (Entscheid 11.10.2026); gleich wie `behandlung` |
| 10 | «Körperliche Beschwerden und weitere psychische Erkrankungen werden eigenständig behandelt, bei Bedarf auch mit Medikamenten.» | wörtlich (`einfluesse`) | gleichbedeutend mit dem Bestand, aber **widersprüchlich** zu `behandlung` › `therapieformen` («mitbehandelt», «integriert») (P2c2-W2-1, P2c2-F-5) |
| 11 | «Angehörige können Genesung nicht herstellen. Eine schwierigere Phase beweist nicht, dass Sie zu wenig getan haben.» (`genesung.md`, Garten, g34) | «Für Behandlung und Genesung sind Sie nicht verantwortlich.» (`freiwillig`); der Satz zu «zu wenig getan» steht wörtlich auf `rolle` › `anbieten` (Verweissatz); «Angehörige können Genesung nicht herstellen.» in «Grenzen des Bildes» | gleichbedeutend; Verantwortung im Wortlaut von `rolle` |
| 12 | «Allgemeine Beratung ist auch ohne Zustimmung der betroffenen Person möglich; Auskünfte über ihre Behandlung gibt es grundsätzlich nur mit ihrer Zustimmung; gesetzliche Ausnahmen gelten etwa bei Minderjährigen oder fehlender Urteilsfähigkeit.» (Handout `rolle-genesungsprozess`) | drei Sätze, sichtbar (`freiwillig`) | gleichbedeutend; Schweigepflicht sichtbar (2c-1 Frage 3, entschieden) |
| 13 | «Die fünf Bereiche sind eine eigene redaktionelle Synthese der Fachstelle, kein validiertes Fünf-Faktoren-Modell und keine individuelle Prognose.» | «… eine eigene Zusammenstellung der Fachstelle aus Behandlungsleitlinien, kein geprüftes Modell.»; «keine persönliche Prognose» im Satz davor (`einfluesse`) | gleichbedeutend (2c-1 Frage 4, entschieden) |

**`unterstuetzung`**

| # | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- |
| 14 | «Die Fachstelle ist kein Krisendienst und keine Therapie. Sie ist eine Anlaufstelle für Angehörige, die ihre Rolle klären, …» (`fachstelle.md`) | «Die Fachstelle ist eine Anlaufstelle für Angehörige, die … Die Fachstelle ist kein Krisendienst und keine Therapie.» (`beratung`) | gleichbedeutend; sichtbar |
| 15 | «Fragen Sie, ob ein Gespräch zu Ihrer Rolle, Belastung oder einer konkreten Entscheidung möglich ist.» (`fachstelle.md`) | «Ein Gespräch zu Ihrer Rolle, Ihrer Belastung oder einer konkreten Entscheidung.» (`beratung`, Begriff «Beratung für Angehörige») | Bedeutung leicht verschoben (Angebot statt Frage), von der Fachstelle entschieden (2c-1 Frage 11) |
| 16 | «Beratung kostet nichts und wird nicht an Krankenkassen weitergegeben.» (`verstehen--begleiterkrankungen.md`) | Verweissatz auf `index#beratung`; dort «Die Beratung ist kostenlos und untersteht der Schweigepflicht.» | gleichbedeutend über die Startseite (2c-1 Frage 10, entschieden) |
| 17 | «Die Schweizerische Stiftung Pro Mente Sana bietet psychosoziale und juristische Beratung für Betroffene und Angehörige. Kostenlose Telefonberatung …» (`beratung.md`) | wörtlich, zweiter Satz als Satz (`beratung`) | gleichbedeutend |
| 18 | «Ehemals VASK Schweiz – Dachverband der Vereinigungen von Angehörigen psychisch Erkrankter. Seit Januar 2024 unter neuem Namen.» | «Stand by You Schweiz ist der Dachverband der Vereinigungen von Angehörigen psychisch erkrankter Menschen. Bis Januar 2024 hiess er VASK Schweiz.» (`austausch`) | gleichbedeutend |
| 19 | «Die Organisation bietet eine kostenlose HelpLine, die von Angehörigen für Angehörige betrieben wird.» | wörtlich, ohne Nummer und Zeiten (`austausch`) | gleichbedeutend; Profil eingehalten |
| 20 | «Kantonale Vereinigung der Angehörigen von psychisch Kranken – mit regelmässigen Beratungs-Treffpunkten in Zürich und Winterthur.» | «Die VASK Zürich ist die kantonale Vereinigung für Angehörige von Menschen mit einer psychischen Erkrankung. Sie bietet regelmässige Beratungs-Treffpunkte in Zürich und Winterthur an.» (`austausch`) | gleichbedeutend, personenzentriert (2c-1 Frage 12, entschieden) |
| 21 | «Für Eltern jugendlicher Betroffener gibt es an der PUK Zürich die Gruppe «Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung». Sie bietet Austausch, Psychoedukation und Beratung …» (`verstehen--diagnostik.md`, d187–d190) | wörtlich, dazu «Teilnahmebedingungen und Anmeldung stehen auf der Website.» (`austausch`) | gleichbedeutend; Name der Gruppe weicht von der Website ab (Frage 18, P2c2-F-12) |
| 22 | «Selbsthilfegruppen für Angehörige von Menschen mit Borderline finden Sie über Selbsthilfe Schweiz – die zentrale Vermittlungsstelle …» (`beratung.md`) | zwei Sätze (`selbsthilfe`) | gleichbedeutend |
| 23 | «Regional-Hinweis: Die hier aufgeführten Angebote sind primär für den Kanton Zürich relevant. Für andere Kantone führt der schnellste Weg …» (`beratung.md`) | «Die Angebote auf dieser Seite sind vor allem für den Kanton Zürich gedacht. Für andere Kantone führt der schnellste Weg über Selbsthilfe Schweiz. …» (`kantone`) | gleichbedeutend |
| 24 | «Diese Liste ist eine persönliche Auswahl und erhebt keinen Anspruch auf Vollständigkeit.» (`buchempfehlungen.md`) | «Die Bücher sind eine persönliche Auswahl, überwiegend deutschsprachig und ohne Anspruch auf Vollständigkeit.» (`buecher`) | gleichbedeutend |
| 25 | Kritische Einordnung «Schluss mit dem Eiertanz»: Krisenhinweise nicht als heutige Notfallanleitung (`buchempfehlungen.md`) | «Krisenhinweise nicht als heutige Notfallanleitung verwenden. Mit kritischer Distanz lesen.» (Vertiefung «Historisch einflussreich …») | gleichbedeutend; Einordnung bleibt beim Titel; Entscheid der Fachstelle (Bücher in Vertiefung) |
| 26 | «Fachstelle Angehörigenarbeit PUK Zürich» mit Telefon, Adresse, E-Mail, Web (`beratung.md`) | Verweissatz auf `index#beratung`; keine Nummer, keine E-Mail im Abschnitt | gleichbedeutend über die Startseite; Profil (kein Krisenzugang) eingehalten |

**`diagnose`**

| # | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- |
| 27 | «Nicht als Anleitung, jemanden zur Diagnose zu drängen, sondern als Orientierung in einer Phase, in der vieles unklar ist.» (`verstehen--diagnostik.md`, Kopf) | «Die Seite ist keine Anleitung, jemanden zur Diagnose zu drängen, sondern eine Orientierung …» (`kopf`) | gleichbedeutend |
| 28 | «Wer die diagnostische Gesamtbeurteilung übernimmt, hängt von Qualifikation, Setting und Behandlungsweg ab.» | wörtlich (`abklaerung`) | gleichbedeutend; «Setting» unerklärt (P2c2-S-3) |
| 29 | «Den ersten Kontakt dürfen Sie anregen oder begleiten … Anbieten ja, erzwingen nein.» (Infografik) | wörtlich, «Ihre Rolle» bei Schritt 1 (`abklaerung`) | gleichbedeutend; Telegrammstil des Bestands (P2c2-S-5) |
| 30 | «Ob Sie einbezogen werden, hängt vom Einverständnis Ihres/Ihrer Angehörigen ab – das kann schwer sein.» | «Ob Sie einbezogen werden, hängt vom Einverständnis der betroffenen Person ab. Das kann schwer sein.» (Schritt 4) | gleichbedeutend (Frage 3); bei Minderjährigen gilt das sichtbare Unterkapitel darunter |
| 31 | «Eine Abklärung entsteht aus einem Muster über die Zeit, nicht aus einem einzelnen Moment.» | wörtlich (Schritt 3) | gleichbedeutend |
| 32 | «Die Diagnose ist eine fachliche Beurteilung über Zeit, nicht ein Stempel aus einem einzelnen Gespräch.» | wörtlich, hervorgehoben (`abklaerung`) | gleichbedeutend |
| 33 | «Auch urteilsfähige Minderjährige haben ein Recht auf Vertraulichkeit; konkrete Fragen sollten mit der zuständigen Fachperson geklärt werden.» | «Auch urteilsfähige Minderjährige haben ein Recht auf Vertraulichkeit. Konkrete Fragen klären Sie mit der zuständigen Fachperson.» (`abklaerung`, «Bei Jugendlichen», sichtbar) | gleichbedeutend (Frage 2); im Bestand nur in der Textversion und einem Akkordeon, jetzt sichtbar |
| 34 | «Im DSM-5-TR werden neun Kriterien geprüft; mindestens fünf müssen als anhaltendes und situationsübergreifendes Muster vorliegen. In der ICD-11 wird zuerst der Schweregrad … bestimmt; das Borderline-Muster kann anschliessend mit dem Zusatzcode 6D11.5 beschrieben werden.» | wörtlich als Begriffsliste, Semikolons als Punkte (Vertiefung «Wie die Diagnose beschrieben wird») | gleichbedeutend (Frage 1) |
| 35 | «Für die stationäre medizinische Statistik gilt in der Schweiz 2026 weiterhin die ICD-10-GM 2024. Deshalb kann in entsprechenden Unterlagen der Code F60.31 erscheinen. Das ist eine begrenzte Vorgabe …» | wörtlich, letzter Satz geteilt (Vertiefung) | gleichbedeutend; Quelle BFS (2026) im Quellenblock |
| 36 | «Bei der Diagnose werden auch andere Erkrankungen geprüft, die ähnliche Muster zeigen können — etwa bipolare Störungen, posttraumatische Belastungsstörungen, ADHS oder dissoziative Störungen. Das ist normaler Teil sorgfältiger Diagnostik und keine Verzögerungstaktik.» | Schritt 2 (zweiter Satz wörtlich) und `begleiterkrankungen` («Davon zu unterscheiden ist die Differenzialdiagnostik: …») | gleichbedeutend |
| 37 | «Wichtig: Eine Diagnose ist nicht dauerhaft fixiert. Recovery ist möglich — siehe Genesung.» | «Eine Diagnose ist nicht dauerhaft fixiert.» und Verweissatz auf `genesung#forschung` (`bedeutung`) | gleichbedeutend; Verweis statt Versprechen |
| 38 | «Auch eine fachlich gestellte Diagnose darf hinterfragt werden; eine zweite fachliche Einschätzung ist legitim.» | zwei Sätze (`zweifel`) | gleichbedeutend |
| 39 | «Klare Grenze: Bei akuter Gefahr — Suizidalität, schwerer Selbstverletzung oder Fremdgefährdung — ist die Diagnose-Frage nachrangig. Dann zählt die Soforthilfe.» | «… etwa bei Suizidgefahr, schwerer Selbstverletzung oder Gefahr für andere Menschen, ist die Frage nach der Diagnose nachrangig. Dann holen Sie Hilfe über den Notruf.» + Verweis im Text (`zweifel`) | gleichbedeutend (Frage 5); Wörter für Hilfe siehe P2c2-F-1 |
| 40 | «Es erlaubt aber keine Diagnose der anderen Person.» (Wiedererkennen) | wörtlich (`ohne-diagnose`) | gleichbedeutend; Absicherung über die Person gehalten |
| 41 | «Diese Seite ist kein Selbstdiagnose-Werkzeug. … Eigene Hausärzt:in oder Psychotherapeut:in — keine Pflicht, aber eine reale Option.» | wörtlich bzw. «Ihre Hausarztpraxis oder eine Psychotherapeutin oder ein Psychotherapeut kann eine Anlaufstelle sein. Das ist keine Pflicht, aber eine reale Option.» (`ohne-diagnose`, im Bestand Akkordeon, jetzt sichtbar) | gleichbedeutend |
| 42 | «Bei Menschen mit Borderline kommen weitere psychische Diagnosen häufig vor.» / «bei vielen, aber nicht allen» (`verstehen--begleiterkrankungen.md`) | «… kommen weitere psychische Diagnosen häufig vor, aber nicht bei allen.» (`begleiterkrankungen`) | gleichbedeutend; Absicherung «nicht bei allen» im selben Satz |
| 43 | «Mehrere Diagnosen heissen mehr Komplexität – nicht mehr Schuld. … Sie müssen nicht sortieren, was was ist.» (Infografik) | wörtlich, hervorgehoben (`begleiterkrankungen`) | gleichbedeutend |
| 44 | «Die älteren Zanarini-Untersuchungen beruhen auf einer spezialisierten, zunächst stationär behandelten Stichprobe und betrachten Diagnosen im Lebenszeit- und Langzeitverlauf. Ihre Befunde sind keine Prävalenzschätzung für alle Menschen mit Borderline und keine individuelle Prognose.» | «Die älteren Studien dazu untersuchten Menschen, die zu Beginn stationär behandelt wurden. Die Befunde dieser Studien zeigen nicht, wie häufig Depressionen bei allen Menschen mit Borderline sind, und sie sind keine persönliche Prognose.» (`begleiterkrankungen` › «Depression») | gleichbedeutend im Kern; «spezialisierte» und «Lebenszeit- und Langzeitverlauf» entfallen (Frage 6, P2c2-F-8) |
| 45 | «Die NICE-Vollleitlinie (2009) beschreibt einen beobachteten Zusammenhang zwischen Borderline mit zusätzlicher Major Depression und Suizidversuchen. Dieser Gruppenbefund erlaubt keine Vorhersage für eine einzelne Person.» | «Die britische Behandlungsleitlinie NICE beschreibt … mit einer zusätzlichen Depression (Major Depression) …» und der zweite Satz wörtlich | gleichbedeutend (Frage 4); Absicherung im nächsten Satz |
| 46 | «Bei akuter Gefahr oder Hinweisen auf konkrete suizidale Absicht: Soforthilfe — Notfallnummern …» | «Bei akuter Gefahr oder Hinweisen auf eine konkrete suizidale Absicht holen Sie sofort Hilfe über den Notruf.» + Verweis im Text + Verweissatz auf `krise#suizid` | gleichbedeutend; ohne Nummern (Profil) |
| 47 | «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten. Angehörige müssen die Erkrankung weder verhindern noch heilen. Beziehungen können das Befinden dennoch beeinflussen; Verantwortung für konkrete verletzende oder gewalttätige Handlungen bleibt davon getrennt.» | «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (Wortlaut `verstehen`) und Verweissatz auf `rolle#schuld` | gleichbedeutend über `rolle#schuld` (Frage 7); die Nuance zu Beziehungen und verletzenden Handlungen steht dort |
| 48 | «Ob Medikation passt, wird individuell mit der behandelnden ärztlichen Fachperson geklärt.» (Behandlung, d354) | auf `behandlung` › `therapieformen` wörtlich mit «ein Medikament»; auf `diagnose` Verweissatz | gleichbedeutend; verlinkt statt wiederholt |

**`behandlung`**

| # | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- |
| 49 | «Ob, wie und mit welchen Zielen sie stattfindet, entscheidet die betroffene Person gemeinsam mit Fachpersonen. Angehörige dürfen ihre eigene Rolle und Unterstützung unabhängig davon klären.» (`unterstuetzen--therapie.md`) | wörtlich (`kopf`) | gleichbedeutend |
| 50 | Auswahl «Ihre Rolle»: «MÖGLICHE BEITRÄGE – WENN GEWÜNSCHT UND MÖGLICH … NICHT VON DIESER ROLLE ZU ERWARTEN»; «Was Ihre Rolle ausdrücklich nicht ist» (vier Punkte) | Spalte «Angehörige», «Kann beitragen» / «Nicht zu erwarten» mit sieben Punkten (`rollen`) | Inhalt gleichbedeutend; Bezeichnung und Länge siehe P2c2-F-4 |
| 51 | «Behandlung liegt bei der erkrankten Person und den Fachpersonen.» | «… bei der betroffenen Person …» (`rollen`) | gleichbedeutend, personenzentriert |
| 52 | «Sie müssen eine Therapie weder zum Funktionieren bringen noch ihren Rahmen mittragen.» | wörtlich (`rollen`) | gleichbedeutend |
| 53 | «Vertraulichkeit Ihrer Mitteilung gegenüber der betroffenen Person kann nicht pauschal zugesichert werden. Bei möglicher akuter Gefahr nutzen Sie die Notfallwege und warten nicht auf eine Rückmeldung per E-Mail.» | erster Satz wörtlich im Begriff «Beobachtungen mitteilen»; zweiter Satz «… holen Sie sofort Hilfe über den Notruf …» nach der Begriffsliste + Verweis im Text (`kontakt`) | gleichbedeutend (Frage 8); sichtbar |
| 54 | «Informationen über Diagnose, Sitzungen oder Verlauf dürfen grundsätzlich nur mit entsprechender Einwilligung oder einer anderen Rechtsgrundlage weitergegeben werden. Eine Mitteilung an das Team hebt die Schweigepflicht nicht auf.» | wörtlich (`kontakt`) | gleichbedeutend; Schweigepflicht sichtbar |
| 55 | «Eigene Beratung gibt Ihnen keinen automatischen Zugang zu vertraulichen Behandlungsinformationen einer anderen Person.» | wörtlich (`kontakt`) | gleichbedeutend |
| 56 | «Bei der Fachstelle Angehörigenarbeit der PUK ist sie kostenlos und ohne Vollmacht der erkrankten Person möglich.» | «… der betroffenen Person …» (Vertiefung «Ich möchte über meine eigene Belastung sprechen») | gleichbedeutend; gleich wie `index` › `beratung` |
| 57 | «… kann eine zweite fachliche Einschätzung sinnvoll sein; eine pauschale Wartefrist von einem Jahr gibt es dafür nicht.» | zwei Sätze (Vertiefung «Ich mache mir Sorgen um den Verlauf») | gleichbedeutend (Frage 12) |
| 58 | «Formulierungsbeispiel: «Ich beobachte weiterhin Selbstverletzungen …» Bei akuter Gefahr nutzen Sie den Notruf, statt auf eine Antwort zu warten.» (b103) | Beispielsatz wörtlich in der Vertiefung; der Notruf-Satz ist mit der sichtbaren Anleitung in `kontakt` zusammengeführt | gleichbedeutend; regelkonform (keine Anleitung in einer Vertiefung) |
| 59 | «Eine Entlassung bedeutet nicht automatisch, dass Angehörige Betreuung übernehmen oder rund um die Uhr verfügbar sind. … kein allgemeiner Anspruch auf … den Austrittsbericht.»; «Notfallkontakt klären: «Wenn es wieder kritisch wird, rufe ich … an?»» (b127) | die zwei Punkte wörtlich (Vertiefung «Nach einer Krise»); «Notfallkontakt klären» zusammengeführt mit `krise` › `danach` («Welche Hilfe soll leicht erreichbar sein?») und der sichtbaren Frage «… an wen wenden Sie sich bei möglicher akuter Gefahr?» (`kontakt`) | gleichbedeutend; nachgeschlagen: beide Stellen vorhanden |
| 60 | «Die Behandlung kann je nach Situation integriert, parallel oder schrittweise geplant werden. Eine starre Reihenfolge gilt nicht; der Gesamtbehandlungsplan wird individuell abgestimmt.» (`verstehen--begleiterkrankungen.md`) | zwei Sätze, der zweite als Kommasatz (`therapieformen`) | gleichbedeutend; Kommasatz (P2c2-S-1) |
| 61 | «Nach NICE sollen Medikamente nicht gezielt zur Behandlung von Borderline selbst … Bei einer zusätzlichen Depression kann eine Kombination aus einem Antidepressivum und psychologischer Behandlung erwogen werden.» | wörtlich, dazu der Satz von `genesung` (`therapieformen`) | gleichbedeutend (Frage 9); gleich wie `genesung` |
| 62 | «Für Family Connections liegen inzwischen auch randomisierte Daten vor: Die Studie von 2024 fand keinen statistisch signifikanten Vorteil gegenüber einer aktiven Vergleichsbehandlung; daraus folgt weder gesicherte Überlegenheit noch Gleichwertigkeit.» | wörtlich mit «Daten aus einer randomisierten Studie», Semikolon als Punkt (Vertiefung «Programme für Angehörige») | gleichbedeutend (Frage 10) |
| 63 | «Auch klar strukturierte, störungsinformierte Behandlungen ohne spezialisiertes Therapielabel können wirksam sein.» | «… auf Borderline abgestimmte …» (`therapieformen`) | gleichbedeutend (Frage 16) |
| 64 | «Diese Reaktionen sind verständlich; sie machen Sie nicht zur Bewertungsinstanz des Verlaufs.» | «Diese Reaktionen sind verständlich. Den Verlauf bewerten müssen Sie deshalb nicht.» (`rueckschlaege`) | gleichbedeutend |
| 65 | «Kinder sollten Diagnose-, Krisen- oder Gewaltgespräche nicht dolmetschen müssen.» | wörtlich (`rueckschlaege`) | gleichbedeutend; sichtbar |
| 66 | «Frühinterventionsangebot für Jugendliche ab 13 Jahren mit Verdacht, Risiko oder bereits diagnostizierter Borderline-Störung.» | «HYPE Züri ist ein Frühinterventionsangebot bei Verdacht, Risiko oder bereits diagnostizierter Borderline-Persönlichkeitsstörung.» und «Für: Jugendliche ab 13 Jahren» (`angebote`) | gleichbedeutend mit dem Bestand; die Website trägt «ab 13» laut Prüfung 1 nicht (P2c2-F-3) |
| 67 | «Privatklinik für Psychiatrie und Psychotherapie am Zürichsee.» (`verstehen--diagnostik.md`) | «Das Sanatorium Kilchberg ist eine Privatklinik …» und «Für: Angaben auf der Website» (`angebote`) | gleichbedeutend mit dem Bestand; Bezug zu Borderline fehlt auf Seite und Website (P2c2-F-3) |
| 68 | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz: Nutzen Sie den zuständigen Notfalldienst.» | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» + Verweis im Text (`wartezeit`, Schritt 4) | **Absicherung schwächer:** Für die unklare Dringlichkeit nennt die Anleitung selbst keinen Weg mehr; nur der Verweis im Text danach nennt den ärztlichen Notfalldienst (P2c2-W1-1, P2c2-F-1) |
| 69 | «Für psychologische Psychotherapie zulasten der Grundversicherung ist eine ärztliche Anordnung nötig; nicht alle Ärzt:innen sind regulär anordnungsberechtigt.» | zwei Sätze, Paarform, Link auf das BAG (`wartezeit`, Schritt 2) | gleichbedeutend (Frage 11); Link nicht aufrufbar |
| 70 | «Beratung und Selbsthilfe ersetzen keine notwendige Behandlung.» | wörtlich (`wartezeit`) | gleichbedeutend |

**Bilanz:** 70 Aussagen (13 / 13 / 22 / 22). 66 gleichbedeutend, davon 6 mit Hinweis auf Wort, Name oder Angabe (Nr. 21, 28, 29, 44, 50, 60). 1 gleichbedeutend mit dem Bestand, aber widersprüchlich zu einer anderen neuen Seite (Nr. 10). 1 leicht verschoben, von der Fachstelle entschieden (Nr. 15). Bei 1 ist eine Absicherung schwächer (Nr. 68). 2 tragen den Bestand, aber die Angabe ist durch die Website nicht gedeckt (Nr. 66, 67). Keine Aussage ist neu ohne Grundlage. Keine Absicherung zu Person, Ursachen, Diagnose, Verlauf, Schweigepflicht oder Schutz ist ersatzlos entfallen; alle Schutzhinweise stehen im Lesefluss.

#### A2 · 40 Zeilen des Abgleichs mit Status «entfällt», «zusammengeführt» oder «verschoben»

Je Tabelle 10 Zeilen: jede siebte Zeile dieser Status (Stichprobe) und gezielt die Zeilen mit Inhalt zu Schutz, Nachsorge, Schuld, Schweigepflicht und Medikamenten.

| Nr. | Status | Bestand (Kern) | Trägt die neue Fassung? Ist «entfällt» begründet? |
| --- | --- | --- | --- |
| g6 | entfällt | «Orientierung auf dieser Seite: Garten · Eigene didaktische Darstellung.» | begründet (Meta-Text) |
| g22 | zusammengeführt | «Fragen Sie, welche Unterstützung gewünscht ist, und bieten Sie nur an, was für Sie möglich ist.» | trägt: `rolle` › `anbieten` (wörtlich dort, nachgeschlagen), Verweissatz in `freiwillig`; dazu sichtbar «Fragen Sie die Person selbst, …» |
| g34 | zusammengeführt | «Eine schwierigere Phase beweist nicht, dass Sie zu wenig getan haben.» | trägt: wörtlich auf `rolle` › `anbieten` (nachgeschlagen) |
| g46 | zusammengeführt | «Manchmal ist weniger Unterstützung, eine Kontaktpause oder zusätzliche professionelle Hilfe nötig.» | trägt: wörtlich auf `rolle` › `anbieten` |
| g88 | verschoben | «Gunderson et al. (2011) – Ten-year course of BPD (CLPS)» | trägt: Quellenblock |
| g105 | zusammengeführt | «Ein schwieriger Abschnitt macht frühere Erfahrungen oder Fähigkeiten nicht wertlos.» | trägt: Kernaussage von Abbildung 1 |
| g109 | zusammengeführt | «Keine Verlaufskurve ist eine Prognose oder ein Ziel.» | trägt: «Das Bild ist eine Metapher, keine Vorhersage eines Genesungsverlaufs.» (Vertiefung der Abbildung); die Grenze ist kein Schutzhinweis, Vertiefung zulässig |
| g111 | zusammengeführt | «… ohne bisherige Entwicklung für verloren zu erklären» | trägt über die Kernaussage (A1 Nr. 8) |
| g137 | zusammengeführt | «Behandlung bleibt Entscheidung der Person und des Fachteams» | trägt: «Urteilsfähige Erwachsene entscheiden selbst über ihre Behandlung, gemeinsam mit den Behandelnden.» |
| g163 | verschoben | «Mehr dazu auf der Seite Begleiterkrankungen.» | trägt: Verweissatz mit Link auf `diagnose#begleiterkrankungen` (Ziel vorhanden) |
| u35 | entfällt | «Website der PUK Zürich.» | begründet (2c-1 Frage 9, entschieden) |
| u49 | entfällt | Link «Soforthilfe» | begründet (Profil); keine Handlungsanleitung im Bestand, deshalb kein Verweis im Text |
| u79 | entfällt | «E-Mail, Adresse und Angebotsbedingungen sind damit nicht abschliessend geprüft.» | begründet (Meta-Text) |
| u93 | entfällt | «Mehr über die Fachstelle erfahren» | begründet (Inhalt im Abschnitt) |
| u119 | entfällt | HelpLine-Zeiten | begründet (Profil, Bauauftrag 2c-1) |
| u128 | entfällt | Prüfangabe VASK Zürich | begründet (Meta-Text) |
| u22 | entfällt | «Direkt erreichen» (Zwischentitel) | begründet |
| u42 | entfällt | «Aktuelle redaktionelle Änderungen und frühere Prüfangaben ersetzen keine … Freigabe.» | begründet (Meta-Text) |
| u62 | entfällt | frühere Prüfangabe | begründet |
| u4 | entfällt | Lesezeit | begründet |
| d56 | zusammengeführt | «Bei Jugendlichen kann die Abklärung in der Kinder- und Jugendpsychiatrie erfolgen.» | trägt: «Eine Fachperson der Kinder- und Jugendpsychiatrie beurteilt …» (sichtbar) |
| d83 | entfällt | «Mehr dazu auf der Seite Begleiterkrankungen.» | begründet (jetzt Abschnitt 05 derselben Seite) |
| d123 | entfällt | Link auf `/selbsttest` («Passende Inhalte finden») | begründet (Seite entfällt); «Es erlaubt aber keine Diagnose der anderen Person.» trägt die Absicherung |
| d153 | entfällt | Telefonnummern ipw | begründet (Profil) |
| d249 | zusammengeführt | «Mehrere Diagnosen bedeuten mehr Komplexität, aber keine Rangfolge des Leids.» | trägt: «… nicht mehr Schuld.» und «Die Reihenfolge ist keine Rangfolge.» |
| d252 | zusammengeführt | «Begleiterkrankungen sind weder eine zusätzliche «Strafe» noch etwas, das Angehörige selbst diagnostisch sortieren müssen.» | trägt: «Sie müssen nicht sortieren, was was ist.» und «nicht mehr Schuld» |
| d312 | zusammengeführt | «Bei Hinweisen auf Suizidalität → siehe Soforthilfe.» | trägt: sichtbare Anleitung mit Verweis im Text (A1 Nr. 46) |
| d316, d317 | zusammengeführt | Verantwortung für verletzende Handlungen; «Veränderungen im Miteinander sind allein kein Beleg für die Ursache einer Erkrankung.» | trägt über den Verweissatz auf `rolle#schuld` (A1 Nr. 47); auf `diagnose` selbst steht die Nuance nicht. Vertretbar, weil `rolle` freigegeben ist (P2c2-F-9) |
| d333 | zusammengeführt | «Eine fachliche Abklärung kann passende Behandlungsschritte klären.» (Substanzgebrauch) | trägt: «Welche Erklärung passt, muss individuell abgeklärt werden.» |
| d369 | zusammengeführt | «Beratung kostet nichts und wird nicht an Krankenkassen weitergegeben.» | trägt über `index#beratung` (A1 Nr. 16) |
| b8 | entfällt | «Behandlungsentscheidungen und vertrauliche Informationen haben eigene Zuständigkeiten.» («Das können Sie mitnehmen») | begründet (Meta-Text); Inhalt trägt `kontakt` (Wege 1 und 2) |
| b20 | entfällt | Auswahl-Schaltflächen | begründet (alle Rollen sichtbar) |
| b76 | zusammengeführt | «Angehörigenberatung kontaktieren» | trägt: Verweissatz auf `index#beratung` |
| b103 | zusammengeführt | «Bei akuter Gefahr nutzen Sie den Notruf, statt auf eine Antwort zu warten.» | trägt: sichtbare Anleitung in `kontakt` (A1 Nr. 58) |
| b113 | zusammengeführt | «Die Mitteilung begründet keinen Anspruch auf vertrauliche Auskünfte.» | trägt: «Eine Mitteilung an das Team hebt die Schweigepflicht nicht auf.» |
| b124, b125, b127 | zusammengeführt | Nachsorge, «Wer macht was?», Notfallkontakt | trägt: `krise` › `danach` «Unterstützung: Wer ist wofür zuständig?», «Fachliche Nachsorge und erreichbare Kontakte klärt die betroffene Person mit dem Behandlungsteam.», «Welche Hilfe soll leicht erreichbar sein?» (nachgeschlagen) |
| b210 | zusammengeführt | «bei Organisation helfen, wenn das erwünscht ist» | trägt: Spalte «Angehörige» und `wartezeit` |
| b211 | zusammengeführt | «gemeinsam üben, wenn die Person dies ausdrücklich möchte» | trägt: `rolle` › `anbieten` «gemeinsam üben, wenn das gewünscht und vereinbart ist» |
| b273 | entfällt | «Zuständige Notfalldienste finden Sie unter Akute Hilfe und Notfallkontakte.» | begründet (Profil); der Verweis im Text in `wartezeit` ersetzt ihn |
| b289 | entfällt | «Grundlagen zum Nachlesen: …» | begründet |

**Ergebnis:** Alle 40 Zeilen tragen oder sind begründet. Keine Aussage zu Schutz, Sicherheit, Schweigepflicht oder Verantwortung ist weggefallen, die sonst nirgends steht. Die Fundstellen auf `rolle` und `krise` sind nachgeschlagen und vorhanden.

#### A3 · Neue Sätze

**(a) Rückwärtsprüfung (619 Sätze, davon 97 von Hand gelesen):** Kein Satz der vier Seiten ist neu und fehlt in den Listen. Die 37 Sätze unter 80 % Übereinstimmung, die nicht in einer Liste stehen, sind Bestand mit anderer Zeichensetzung: Buchangaben mit «und» statt «&» (sammelnd in 2c-1 Nr. 75 genannt), «Für: …»-Zeilen der Bücher, «Eine Einteilung in «geheilt» …» (Handout `remission-heilung`), «Erinnern Sie sich: Genesung ist individuell und keine Leistung der Familie.» (Handout `5-faktoren-genesung`), die Fragen aus den Vertiefungen auf `behandlung`.

**(b) Stichprobe aus den Listen (44 Sätze):**

| Nr. (Liste) | Satz (gekürzt) | Urteil |
| --- | --- | --- |
| 2c-2 Nr. 4 | «Ausserdem geht es um Begleiterkrankungen: Bei vielen, aber nicht allen …» | tragbar, nah am Bestand |
| Nr. 7 | «Mögliche erste Anlaufstellen sind die Hausarztpraxis, eine psychiatrische oder psychotherapeutische Praxis oder ein Ambulatorium.» | tragbar; aus der Infografik |
| Nr. 11 | «Dafür qualifizierte Fachpersonen klären ab, …» | tragbar; Satzbeginn holprig (P2c2-S-5) |
| Nr. 12, 13, 14 | Gespräche, andere Erkrankungen, «keine Verzögerungstaktik» | tragbar |
| Nr. 18, 19 | Rückmeldung und Einordnung | tragbar |
| Nr. 26–30 | «Bei Jugendlichen» | tragbar (Frage 2) |
| Nr. 34, 35 | «Fachpersonen beschreiben Diagnosen mit Klassifikationssystemen. Für Borderline sind das vor allem das DSM-5-TR der American Psychiatric Association und die ICD-11 der Weltgesundheitsorganisation.» | fachlich richtig (Herausgeber stimmen); tragbar (Frage 1) |
| Nr. 46, 47, 50, 52 | Bedeutung der Diagnose | tragbar, wörtlich nahe |
| Nr. 61, 62, 64, 65 | ohne Diagnose | tragbar |
| Nr. 66, 67 | zwei Sätze mit «Fachstelle Angehörigenarbeit der PUK» direkt nacheinander | tragbar; Wiederholung (P2c2-S-2) |
| Nr. 76–78 | Komorbidität | tragbar |
| Nr. 85–88 | Depression, Stichprobe | tragbar (Frage 6) |
| Nr. 89–93 | «Was Sie tun können» bei Depression | tragbar; Ton der Website |
| Nr. 99, 100 | NICE, professionelle Einschätzung | tragbar (Frage 4) |
| Nr. 103, 104 | Einleitung der Vertiefung «Mögliche Hinweise …» | tragbar; Absicherung «ersetzen keine fachliche Beurteilung» |
| Nr. 109 | ADHS, Kommasatz | tragbar; Kommasatz (P2c2-S-1) |
| Nr. 113 | «Die betroffene Person, Fachpersonen und Angehörige können Unterschiedliches beitragen, und von jeder Rolle ist manches nicht zu erwarten.» | tragbar |
| Nr. 129–131 | «Nicht zu erwarten» der Angehörigen | tragbar; zwei Punkte fast gleich (P2c2-F-4) |
| Nr. 136 | Akute Gefahr in `kontakt` | tragbar (P2c2-F-1) |
| Nr. 160, 161 | Schweigepflicht im Musterbrief | tragbar (Frage 13) |
| Nr. 162–168 | Therapieformen | tragbar |
| Nr. 177 | «Eine starre Reihenfolge gilt nicht, der Behandlungsplan …» | tragbar; Kommasatz (P2c2-S-1) |
| Nr. 183, 185 | Psychoedukation, Family Connections | fachlich richtig (Hoffman et al. 2005); tragbar (Frage 10) |
| Nr. 213, 214 | HYPE Züri | Satz tragbar; «ab 13 Jahren» offen (P2c2-F-3) |
| Nr. 224 | «Für: Angaben auf der Website» | gibt der Prüfperson keine Angabe (P2c2-F-3) |
| Nr. 228 | «Für: Erwachsene ab 18 Jahren» (Clienia) | tragbar laut Auftrag (Website am 11.10.2026) |
| Nr. 232 | «Der Dachverband ist ein deutscher Verband.» | tragbar; Kriterium der Liste siehe P2c2-F-3 |
| Nr. 243 | «Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | tragbar; der Satz davor braucht einen Weg (P2c2-F-1) |
| 2c-1 Nr. 23 | «Peer-Unterstützung heisst: Unterstützung durch Menschen mit eigener Erfahrung.» | tragbar (entschieden) |
| 2c-1 Nr. 59–62 | Stand by You, VASK Zürich | tragbar (entschieden) |

**Verweissätze (eine Gruppe, 28 Links):** Jeder Verweissatz der vier Seiten ist geprüft (Skript der Prüfsitzung, Teil B). Ziel vorhanden: 28 von 28. Linktext gleich dem Titel der Zielstelle: 28 von 28. Der angekündigte Inhalt steht im Zielabschnitt: 28 von 28, nachgeschlagen zum Beispiel «Wie Sie Suizidgedanken direkt ansprechen können» → `krise#suizid` (Beispielsatz «Denkst du gerade daran, dir das Leben zu nehmen?»), «Wie Begleiterkrankungen behandelt werden und was für Medikamente gilt» → `behandlung#therapieformen` (Unterkapitel «Begleiterkrankungen und Medikamente»), «Was nach einer Krise sonst hilft» → `krise#danach`, «Wo Sie Unterstützung für sich finden» → `selbstfuersorge#beratung` («Nicht allein tragen»), «Wie Sie ausserhalb des Kantons Zürich Anlaufstellen finden» → `unterstuetzung#kantone`. Keine Links auf `fragen`, `quellen`, `ueber`.

#### A4 · Externe Links

**Nicht prüfbar:** Keine der zwölf Adressen liess sich aus dieser Umgebung aufrufen (`curl` ohne Verbindung, Namensauflösung gesperrt). Geprüft ist nur die Form: Jede Adresse gehört zur offiziellen Domain des Angebots (`pukzh.ch` zweimal, `ipw.ch`, `sanatorium-kilchberg.ch`, `clienia.ch`, `dachverband-dbt.de`, `bag.admin.ch`, `promentesana.ch`, `stand-by-you.ch`, `vaskzuerich.ch`, `selbsthilfeschweiz.ch`), ist `https`, ohne `target="_blank"`, mit beschreibendem Linktext oder der Adresse als Linktext. Die Bewertung der Inhalte stützt sich auf «Bekannt aus Prüfung 1», Punkt 3, und auf Abschnitt 5 des Bauauftrags (P2c2-F-3).

#### A5 · Übereinstimmung mit den freigegebenen Seiten

- **Verantwortung:** `genesung` «Für Behandlung und Genesung sind Sie nicht verantwortlich.» (Wortlaut `rolle`), `diagnose` «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (Wortlaut `verstehen`). «allein» steht nur bei «allein für die Qualität der Beziehung sorgen» (Spalte «Die betroffene Person») und «Aus der Borderline-Diagnose allein …»; nie bei Erkrankung, Behandlung oder Genesung. Erfüllt.
- **Suizid:** `diagnose` beschreibt den NICE-Gruppenbefund mit Absicherung, verlangt eine professionelle Einschätzung und verweist für das Ansprechen auf `krise#suizid`; kein eigener, abweichender Wortlaut zum direkten Fragen. Erfüllt.
- **Wörter für Hilfe:** «Notruf» in allen vier Anleitungen; keine «Leitstelle», kein «Rettungsdienst», kein «Notfalldienst» im eigenen Text (nur im Verweis im Text aus `site.config.json`). Uneinheitlich bleibt, wofür «Notruf» steht: auf `krise` für «unmittelbare Gefahr», auf `diagnose` und in `behandlung` › `kontakt` schon für «akute» bzw. «mögliche akute Gefahr»; für «unklare Dringlichkeit» fehlt der Weg (P2c2-F-1).
- **Absolute Aussagen über die betroffene Person, Heilungsversprechen:** keine gefunden. Absicherungen wie im Bestand (A1).

#### A6 · Fragen der Selbstprüfung 2c-2 und Punkte aus Prüfung 1

Alle 18 Fragen und die fünf Punkte gehen in der Liste «Prüfbedarf für die Fachstelle» auf (Spalte «aus»).

#### Prüfbedarf für die Fachstelle

Sortiert nach Wichtigkeit. Jede Frage lässt sich mit Ja oder Nein oder mit einer Auswahl beantworten.

| Nr. | Frage | Zitat und Ort | Empfehlung | aus |
| --- | --- | --- | --- | --- |
| P2c2-F-1 | **Akute Lagen einheitlich:** Soll `behandlung` › `wartezeit`, Schritt 4, den freigegebenen Wortlaut von `krise` › `belastung` übernehmen? Vorschlag: «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, warten Sie nicht auf einen Therapieplatz und holen sofort Hilfe.» Danach wie bisher der Verweis im Text. Die übrigen drei Anleitungen bleiben (Ja zu Frage 5 und 8). | jetzt: «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» (`behandlung` › `wartezeit`, Schritt 4). Bestand: «… Nutzen Sie den zuständigen Notfalldienst.» | **Ja.** Der Satz nennt für «unklare Dringlichkeit» heute keinen Weg; nur der Verweis im Text danach tut es. Der Vorschlag ist freigegebener Wortlaut, und der Verweis im Text nennt danach Notfalldienst, Notfallstation und Polizei. Die Anleitungen auf `diagnose` (`zweifel`, `begleiterkrankungen`) und in `kontakt` bestätigen: Sie stehen sichtbar, mit «Notruf» und mit Verweis im Text | Prüfung 1 Nr. 2; Fragen 5, 8, 17 |
| P2c2-F-2 | **«Ein neuer Trieb»:** Welche Fassung soll die Fachstelle freigeben? (a) Sätze gekennzeichnet wie die Paare darunter («Weniger hilfreich» über «Eine schwierigere Phase entwertet alles.», «Tragfähiger» über «Schwierigere Phasen kommen vor …») und **ohne** Giesskanne; (b) Sätze gekennzeichnet, Giesskanne bleibt; (c) so lassen | Abbildung 1, `genesung` › `verlauf`. Die zwei Sätze stehen gleichrangig mit gleicher blauer Randlinie, bei 360 px untereinander; ohne Text ist nicht erkennbar, welcher Satz die weniger hilfreiche Sicht ist. Die Giesskanne trägt «Bedingungen anbieten, wachsen muss die Pflanze selbst»; das steht nur in «Grenzen des Bildes» («Angehörige können Genesung nicht herstellen.») | **(a).** Ohne Kennzeichnung kann die Prüfperson «Eine schwierigere Phase entwertet alles.» als Aussage der Website lesen (Teil D, Punkt 17). Die Giesskanne ist eine zweite Idee und wiederholt «Ein Stück Weg» auf `rolle`; ohne sie trägt das Bild nur den Rückschritt und unterscheidet sich klar von «Ein Stück Weg». Danach die Bildfreigabe (`approvalStatus`) | Teil D |
| P2c2-F-3 | **Angebotsliste:** (1) Soll die Einleitung das Kriterium nennen: «Aufgeführt sind Angebote mit Schwerpunkt Borderline oder DBT, die Menschen aus dem Kanton Zürich nutzen können.»? (2) Je Eintrag: HYPE Züri «Für: Jugendliche» statt «ab 13 Jahren»; PUK Erwachsene so lassen; ipw behalten oder streichen; Sanatorium Kilchberg streichen; Clienia so lassen; Dachverband DBT behalten, mit «Die Suche lässt sich nach Land filtern.» statt «Der Dachverband ist ein deutscher Verband.» | `behandlung` › `angebote`. Prüfung 1: HYPE-Website ohne Mindestalter; Sanatorium Kilchberg ohne Angebot für Borderline; Dachverband DBT deutsch, Karte mit Filter nach Land, Clienia Station A2 von ihm zertifiziert. Auftrag 2c-2: ipw nennt 17 bis 25 Jahre, aber nicht Borderline und DBT | (1) **Ja**: Die Prüfperson soll verstehen, warum diese sechs Stellen stehen und andere nicht. (2) HYPE **ändern** (die Seite soll nichts sagen, was die Website nicht trägt; kennt die Fachstelle das Mindestalter, bleibt es); PUK **so lassen**; ipw: **Fachstelle entscheidet** nach Kenntnis des Angebots (nach dem Kriterium streichen, wenn kein Schwerpunkt besteht); Kilchberg **streichen** (erfüllt das Kriterium nicht, «Für: Angaben auf der Website» gibt keine Angabe); Clienia **so lassen**; Dachverband **ändern** (sagt, was die Prüfperson tun kann; der Bezug zur Schweiz ergibt sich über den Filter und Clienia) | Prüfung 1 Nr. 3; Frage 15 |
| P2c2-F-4 | **Rollen:** (1) «Mögliche Beiträge» statt «Kann beitragen» bei allen drei Rollen? (2) Spalte «Angehörige» › «Nicht zu erwarten» mit fünf statt sieben Punkten: «Therapieziele bestimmen» · «den Fortschritt kontrollieren oder überwachen» · «Behandlung oder Krisenhilfe ersetzen» · «Motivation oder Genesung herstellen oder dauerhaft aufrechterhalten» · «Therapiesprache in den Alltag übersetzen oder jedes Verhalten mit Fachbegriffen einordnen»? (3) Zuordnung bei Fachpersonen und betroffener Person bestätigen? | `behandlung` › `rollen`. Bestand: «MÖGLICHE BEITRÄGE – WENN GEWÜNSCHT UND MÖGLICH»; «Was Ihre Rolle ausdrücklich nicht ist» | (1) **Ja** (Bestandswort, grammatisch für alle drei Rollen richtig). (2) **Ja** (keine Aussage entfällt; «ständig» entfällt, weil «übersetzen» als Erwartung schon verneint ist). (3) **Ja**: «Angehörige therapieren», «alle Beziehungsfragen stellvertretend lösen», «rund um die Uhr erreichbar sein» und «allein für die Qualität der Beziehung sorgen» sind im Bestand erkennbar Grenzen | Prüfung 1 Nr. 1; Frage 14 |
| P2c2-F-5 | **Begleiterkrankungen behandeln:** Soll `genesung` › `einfluesse` statt «werden eigenständig behandelt» sagen «werden ebenfalls behandelt»? | `genesung`: «Körperliche Beschwerden und weitere psychische Erkrankungen werden eigenständig behandelt, bei Bedarf auch mit Medikamenten.» · `behandlung` › `therapieformen`: «Begleiterkrankungen werden in der Regel mitbehandelt. Die Behandlung kann integriert, parallel oder schrittweise geplant werden.» | **Ja.** «eigenständig» kann die Prüfperson als «getrennt» lesen; `behandlung` sagt «mitbehandelt», «integriert». Gemeint ist im Handout, dass sie nicht übergangen werden. Der Verweissatz auf `diagnose` folgt im selben Abschnitt | Teil B |
| P2c2-F-6 | **Klassifikation** (DSM-5-TR, ICD-11, ICD-10-GM 2024, F60.31): bestätigen? | `diagnose`, Vertiefung «Wie die Diagnose beschrieben wird» | **Ja.** Wortlaut des Bestands; die zwei neuen Sätze nennen die richtigen Herausgeber (American Psychiatric Association, Weltgesundheitsorganisation) | Frage 1 |
| P2c2-F-7 | **Jugendliche und Einverständnis:** «Konkrete Fragen klären Sie mit der zuständigen Fachperson.» und Schritt 4 «Ob Sie einbezogen werden, hängt vom Einverständnis der betroffenen Person ab. Das kann schwer sein.» bestätigen? | `diagnose` › `abklaerung` | **Ja.** Bedeutung gleich; das Unterkapitel «Bei Jugendlichen» steht sichtbar direkt darunter | Fragen 2, 3 |
| P2c2-F-8 | **Depression und Suizid:** «Depression (Major Depression)» und die Einschränkung der älteren Studien («… untersuchten Menschen, die zu Beginn stationär behandelt wurden. … zeigen nicht, wie häufig Depressionen bei allen Menschen mit Borderline sind, und sie sind keine persönliche Prognose.») bestätigen? | `diagnose` › `begleiterkrankungen` | **Ja.** Der Fachbegriff steht in Klammern, die Laienform davor. Die Einschränkung trägt den Kern (stationäre Stichprobe, keine Häufigkeit für alle, keine Prognose); «spezialisierte» und «Lebenszeitverlauf» ändern für die Prüfperson nichts | Fragen 4, 6 |
| P2c2-F-9 | **Verantwortung bei Depression:** genügt «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» mit Verweissatz auf `rolle#schuld`? | `diagnose` › `begleiterkrankungen` | **Ja.** Wortlaut von `verstehen`; die Sätze zu Beziehungen und verletzenden Handlungen stehen auf `rolle#schuld` (nachgeschlagen) | Frage 7 |
| P2c2-F-10 | **Therapieinhalte auf `behandlung`:** Medikamente nach NICE (Frage 9), «Programme für Angehörige» mit der Erklärung von «psychoedukativ» und dem Satz zu Family Connections (Frage 10), zweite Einschätzung ohne Wartefrist (Frage 12), «auf Borderline abgestimmt» für «störungsinformiert» (Frage 16): bestätigen? | `behandlung` › `therapieformen`, `kontakt` | **Ja**, alle vier. Wortlaut des Bestands oder sinngleich; die neuen Sätze sind fachlich richtig (Family Connections ist ein Angehörigenprogramm, Hoffman et al. 2005) | Fragen 9, 10, 12, 16 |
| P2c2-F-11 | **Kosten (BAG):** «Für psychologische Psychotherapie zulasten der Grundversicherung ist eine ärztliche Anordnung nötig. Nicht alle Ärztinnen und Ärzte sind regulär anordnungsberechtigt.» bestätigen und den BAG-Link vor der Veröffentlichung einmal aufrufen? | `behandlung` › `wartezeit`, Schritt 2 | **Ja.** Wortlaut des Bestands; der Link liess sich auch in dieser Prüfung nicht aufrufen | Frage 11 |
| P2c2-F-12 | **Gruppe für Eltern:** Soll der Text den Namen der Website verwenden («Gruppentherapie für Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung»)? | `unterstuetzung` › `austausch`: «… die Gruppe «Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung»» | **Ja.** Die Prüfperson findet das Angebot auf der verlinkten Seite unter diesem Namen. Der Zwischentitel bleibt | Frage 18 |
| P2c2-F-13 | **Musterbrief:** bestätigen? | `behandlung` › `kontakt`, Vertiefung | **Ja.** Text wörtlich; «behandelnde Fachperson» statt «Therapeut»; der Platzhalter für die eigene Telefonnummer ist keine Nummer eines Angebots | Frage 13 |
| P2c2-F-14 | **Vertiefungen in `kontakt`:** Soll «Was kann ich in einem vereinbarten Kontakt mitteilen?» entfallen und sein Beispielsatz («Mir ist aufgefallen, dass … An wen kann ich mich mit meiner Sorge wenden?») in den sichtbaren Begriff «Beobachtungen mitteilen» kommen? Die übrigen fünf Vertiefungen bleiben | `behandlung` › `kontakt`: sechs Vertiefungen; die Seite hat mit Vertiefungen 2345 Wörter | **Ja.** Die Vertiefung wiederholt den sichtbaren Begriff fast Punkt für Punkt (eigene Beobachtungen, ohne Bewertung, mit der Person abstimmen, Kontaktweg); etwa 55 Wörter weniger, ohne Aussageverlust («Eine laufende Überwachung ist nicht Ihre Aufgabe.» trägt sichtbar «den Fortschritt kontrollieren oder überwachen» in `rollen`). Die übrigen Vertiefungen sind als Situationen der Prüfperson («Ich werde nicht zu Sitzungen eingeladen») gut auffindbar; das Wichtige (drei Wege, akute Gefahr, vier Fragen) steht ohne Aufklappen | Prüfung 1 Nr. 5 |
| P2c2-F-15 | **Kleinigkeiten:** zwei Kommasätze teilen und die doppelte Nennung der Fachstelle kürzen (Wortlaut in P2c2-S-1 und P2c2-S-2)? | `diagnose` › Vertiefung «Weitere Begleiterkrankungen kurz»; `behandlung` › `therapieformen`; `diagnose` › `ohne-diagnose` | **Ja**, ohne Bedeutungsänderung; kann die bauende Sitzung ohne weitere Fachfrage umsetzen | Prüfung 1 Nr. 4 |

### Teil B · W2 Gesamtkohärenz mit den Etappen 1, 2a und 2b

**Begriffe** (Zählung im sichtbaren Text der Seiten)

| Begriff | Befund |
| --- | --- |
| «betroffene Person» | durchgehend; «erkrankt» nur in Vereinsnamen und einer Buchbeschreibung («Angehörigen psychisch erkrankter Menschen», «deren Eltern psychisch erkrankt sind») |
| «Fachperson», «Behandlungsteam» | `behandlung`: 9 × «Behandlungsteam», dazu 2 × «Fachteam» («… mit dem Fachteam vereinbart hat», «… gemeinsam mit dem Fachteam»). Auf `krise` ist «Fachteam» seit 2b-K vereinheitlicht (P2c2-W2-2) |
| «Beratung» | einheitlich; die Fachstelle immer «Fachstelle Angehörigenarbeit der PUK» |
| «Genesung», «Recovery» | «Recovery» nur auf `genesung`, dort als Begriff erklärt; sonst «Genesung» |
| Wörter für Hilfe | «Notruf»; Abstufung siehe A5 und P2c2-F-1 |

**Widersprüche**

- **Begleiterkrankungen:** `genesung` «eigenständig behandelt» gegen `behandlung` «mitbehandelt … integriert» (P2c2-W2-1, P2c2-F-5).
- **Medikamente:** `genesung` und `behandlung` sagen dasselbe («keine Kernbehandlung» / «nicht gezielt … nach NICE»; beide «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.»). Kein Widerspruch.
- **Häufigkeit von Begleiterkrankungen:** `genesung` «Bei vielen, nicht allen Menschen …», `diagnose` «… häufig vor, aber nicht bei allen». Kein Widerspruch.
- Zu den freigegebenen Seiten: keiner gefunden.

**Doppelungen**

| Thema | Stellen | Sagen beide dasselbe? | Urteil |
| --- | --- | --- | --- |
| Was Angehörige anbieten können | `genesung` › `freiwillig`, `behandlung` › `rollen`, `rolle` › `anbieten` | je ein anderer Blickwinkel (Genesung, Behandlung, Alltag); beide neuen Seiten verlinken `rolle#anbieten` statt den Garten-Text zu wiederholen | nützlich, so lassen |
| Nach einer Krise | `behandlung` › `kontakt` (Vertiefung), `krise` › `danach` | nein: auf `behandlung` nur Entlassung und Austrittsbericht, sonst Verweissatz | nützlich, so lassen |
| Suizid | `diagnose` › `begleiterkrankungen`, `krise` › `suizid`, `verstehen` | `diagnose` nennt nur den Gruppenbefund und die Anleitung, das Ansprechen steht auf `krise` (Verweissatz) | nützlich, so lassen |
| Eigene Belastung | `diagnose` › `ohne-diagnose` («Bin ich auch betroffen?»), `diagnose` › `begleiterkrankungen`, `selbstfuersorge` | Frage nach eigener Erkrankung ist neu gegenüber `selbstfuersorge`; sonst Verweissätze | nützlich, so lassen |
| Beratung der Fachstelle | `unterstuetzung` › `beratung`, `index` › `beratung`, `behandlung` › `kontakt`, `diagnose` › `ohne-diagnose` | alle verlinken `index#beratung` statt Kontakt und Bedingungen zu wiederholen; `behandlung` nennt in einer Vertiefung «kostenlos und ohne Vollmacht» (gleich wie `index`) | so lassen; auf `diagnose` die doppelte Nennung kürzen (P2c2-S-2) |
| Angebote und Austausch | `behandlung` › `angebote`, `unterstuetzung` | getrennt: Therapie und Abklärung auf `behandlung`, Beratung und Austausch auf `unterstuetzung`; HYPE und die Elterngruppe verlinken dieselbe PUK-Seite | so lassen |
| Kontakt mitteilen | `behandlung` › `kontakt`, Begriff «Beobachtungen mitteilen» und Vertiefung «Was kann ich in einem vereinbarten Kontakt mitteilen?» | ja, fast Punkt für Punkt | ersetzbar (P2c2-W2-3, P2c2-F-14) |

**Links** (Skript der Prüfsitzung über `content/` und die gebauten Seiten): 28 Links in den Verweissätzen der vier Seiten und 8 Einstiege auf `index`. Ziel vorhanden: 36 von 36. Linktext gleich dem Titel der Zielstelle: 28 von 28 Verweissätzen. Die Einstiege haben als Linktext den Satz der Angehörigen, danach steht der Seitentitel («Genesung: …», «Unterstützung finden: …»), gleich wie die freigegebenen Einstiege. Keine Links auf `fragen`, `quellen`, `ueber`.

**Befunde W2**

- **P2c2-W2-1 · wichtig · Begleiterkrankungen «eigenständig» gegen «mitbehandelt».**
  - **Beleg:** `genesung` › `einfluesse`, Begriff «Körperliche und psychische Gesundheit»; `behandlung` › `therapieformen`, Unterkapitel «Begleiterkrankungen und Medikamente».
  - **Vorschlag:** «eigenständig» durch «ebenfalls» ersetzen. Fachliche Frage.
  - **Zuständig:** Fachstelle (P2c2-F-5).
- **P2c2-W2-2 · optional · «Fachteam» neben «Behandlungsteam».**
  - **Beleg:** `behandlung` › `kontakt`, Vertiefung «Ich mache mir Sorgen um den Verlauf» («… welche Ziele die Person mit dem Fachteam vereinbart hat»); `therapieformen` («… bewertet die betroffene Person gemeinsam mit dem Fachteam»).
  - **Vorschlag:** an beiden Stellen «Behandlungsteam», wie auf `krise` nach 2b-K.
  - **Zuständig:** bauende Sitzung.
- **P2c2-W2-3 · optional · Doppelung in `kontakt`.**
  - **Beleg:** Begriff «Beobachtungen mitteilen» und Vertiefung «Was kann ich in einem vereinbarten Kontakt mitteilen?».
  - **Vorschlag:** wie P2c2-F-14.
  - **Zuständig:** Fachstelle (Entscheid), danach bauende Sitzung.

### Teil C · S Sprach-Review und Länge

#### C1 · Lesetest je Abschnitt (R2 Teil 3, a–e)

Gelesen als Mutter, deren Tochter gerade eine Diagnose bekommen hat, und als Partner, der auf einen Therapieplatz wartet; abends, auf dem Handy (360 px). a = verständlich beim ersten Lesen · b = weiss, was ich tun kann · c = Stolperstellen · d = Ton · e = Absicherungen am richtigen Ort.

| Seite › Abschnitt | a | b | c | d | e |
| --- | --- | --- | --- | --- | --- |
| `genesung` › Kopf | ja | Kernsätze | – | warm, ermutigend | ja («keine persönliche Prognose») |
| `genesung` › `forschung` | ja | nein, nötig nicht | «symptomatische Remission» erst im nächsten Abschnitt erklärt; trägt durch den Satz zu den Kriterien | sachlich | ja, direkt bei den Zahlen |
| `genesung` › `begriffe` | mit Mühe (drei Fachbegriffe), aber erklärt | nein | – | sachlich | ja |
| `genesung` › `verlauf` | ja | ja, «Was Sie tun können» | Satzpaar der Abbildung ohne Kennzeichnung (P2c2-F-2) | warm | ja |
| `genesung` › `einfluesse` | ja | ja | «eigenständig behandelt» (P2c2-F-5) | sachlich | ja |
| `genesung` › `freiwillig` | ja | ja, Selbstfrage | – | warm, entlastend | ja |
| `unterstuetzung` › `beratung` | ja | ja, drei Fragen | – | sachlich | – |
| `unterstuetzung` › `austausch` | ja | ja, Links | – | sachlich | – |
| `unterstuetzung` › `selbsthilfe`, `kantone` | ja | ja | – | sachlich | – |
| `unterstuetzung` › `buecher` | ja | ja | lang (648 Wörter), aber Liste mit Zwischentiteln nach Zielgruppe | sachlich | ja (Einordnung der vier Titel) |
| `diagnose` › Kopf | ja | – | – | ruhig | ja («keine Anleitung, jemanden zur Diagnose zu drängen») |
| `diagnose` › `abklaerung` | ja; einleitender Satz 21 Wörter | ja, «Ihre Rolle» bei vier Schritten | «Setting» (P2c2-S-3); «Anbieten ja, erzwingen nein.» (P2c2-S-5); «Geduld ist hier kein Nichtstun.» ohne Bezug, was Geduld hier heisst | ruhig, nicht drängend | ja |
| `diagnose` › `bedeutung` | ja | nein, nötig nicht | – | ehrlich («Diese Erwartung ist verständlich, aber hoch.») | ja |
| `diagnose` › `zweifel` | ja | ja, zwei Listen | – | respektvoll | ja; Schutz sichtbar |
| `diagnose` › `ohne-diagnose` | ja | ja | Fachstelle zweimal (P2c2-S-2) | entlastend | ja («erlaubt keine Diagnose der anderen Person») |
| `diagnose` › `begleiterkrankungen` | mit Mühe am Anfang («Komorbidität», «Differenzialdiagnostik»), beide erklärt | ja, «Was Sie tun können» | – | sachlich, entlastend («nicht mehr Schuld») | ja; Suizid sichtbar mit Verweis im Text |
| `behandlung` › Kopf | ja | – | zwei fast gleiche Sätze («kann ein wichtiger Teil …», «kann Veränderung unterstützen») | ruhig | ja |
| `behandlung` › `rollen` | ja | ja | «Kann beitragen» bei Mehrzahl (P2c2-S-4); sieben Punkte bei «Nicht zu erwarten» (P2c2-F-4) | entlastend | ja |
| `behandlung` › `kontakt` | ja | ja, vier Fragen | – | sachlich | ja; Schweigepflicht und Schutz sichtbar |
| `behandlung` › `therapieformen` | mit Mühe (fünf Therapieformen, «generalistisch») | nein, nötig nicht | «Auch strukturierte generalistische Behandlung ist relevant.» doppelt zum Begriff darunter; Kommasatz (P2c2-S-1) | sachlich | ja |
| `behandlung` › `rueckschlaege` | ja | ja, «Was Sie tun können», Beispielsatz | – | warm | ja |
| `behandlung` › `angebote` | ja | ja, Links | Kriterium unklar; «Für: Angaben auf der Website» (P2c2-F-3) | sachlich | ja («nicht abschliessend») |
| `behandlung` › `wartezeit` | ja | ja, vier Schritte | – | sachlich, konkret | Schritt 4 (P2c2-F-1) |
| `index` › Einstiege «Genesung», «Unterstützung finden» | ja | ja | – | in der Stimme der Angehörigen, wie die übrigen | – |

#### C1 · Kennzahlen je Seite

**Zählweise:** C1 wie in der Selbstprüfung (innerste `p`, `li`, `dt`, `dd` in `main`, ohne SVG, `.puk-sr`, Kapitelübersicht, Kicker, Eyebrow, «Abbildung n», Quellenzeilen und Quellenblock; «im Lesefluss» ohne Panels der Akkordeons). Sätze: Text im Lesefluss, getrennt nach «.», «!», «?», «:» oder «»» vor einem Grossbuchstaben oder «; Wörter = Folgen mit Buchstaben oder Ziffern. Verneinung (Prüfsitzung): Satz enthält «nicht», «kein…», «nie», «nichts», «weder» oder «ohne». Absicherungen: `kennzahlen.mjs`. Anteil «Was Sie tun können»: Abschnitte mit dieser Bezeichnung, ohne Quellenblock.

| Seite | Wörter im Lesefluss | Sätze | mittlere Satzlänge | Sätze über 15 Wörter | Sätze mit Verneinung (Prüfsitzung / `verneinung.mjs`) | Absicherungen je 100 Wörter | Abschnitte mit «Was Sie tun können» |
| --- | ---: | ---: | ---: | ---: | --- | ---: | --- |
| `genesung` | 1133 (Selbstprüfung 1164) | 111 | 10,2 | 13 % | 37 % / 28 % | 2,21 | 3 von 5 |
| `unterstuetzung` | 1105 | 99 | 11,2 | 28 % | 11 % / 8 % | 1,08 | 0 von 5 |
| `diagnose` | 1542 | 114 | 13,5 | 32 % | 29 % / 21 % | 2,03 | 1 von 5 |
| `behandlung` | 1678 | 137 | 12,2 | 25 % | 25 % / 17 % | 2,59 | 1 von 6 |
| `rolle` (Vergleich) | 2599 (Selbstprüfung 2627) | 220 | 11,8 | 19 % | 31 % / 21 % | 2,22 | 6 von 7 |
| `krise` (Vergleich) | 1523 | 147 | 10,4 | 18 % | 29 % / 22 % | 2,18 | 0 von 7 |

**Einordnung:** `diagnose` hat die längsten Sätze der Website (13,5 Wörter im Mittel, ein Drittel über 15 Wörter); das trägt die Seite, weil die Sätze sachlich und erklärend sind, ist aber für die Prüfperson abends die anstrengendste Seite (P2c2-S-6). Die Verneinung auf `genesung` ist hoch; sie trägt meist Absicherungen des Bestands («keine persönliche Prognose», «nicht automatisch», «nicht verantwortlich») und ist nicht zu kürzen. Dass `unterstuetzung`, `diagnose` und `behandlung` selten «Was Sie tun können» haben, passt zu ihrer Aufgabe (Orientierung, Angebote); die Handlung steht dort als «Ihre Rolle», als Fragen oder als Schritte.

#### C2 · Länge

**Nachgerechnet** (Skript der Prüfsitzung im Browser, Stand `7ee24ba`):

| Seite | Selbstprüfung | Prüfsitzung | Abweichung | Ziel |
| --- | ---: | ---: | --- | ---: |
| `genesung` | 1164 | 1133 | −31; das Skript der Prüfsitzung zählt die Abbildung anders (dieselbe Abweichung auf `rolle`, −28; `krise` ohne Abbildung stimmt auf das Wort). Die Abschnitte ohne Abbildung stimmen auf das Wort (`forschung` 184, `begriffe` 192, `einfluesse` 262, `freiwillig` 197) | etwa 1800 |
| `unterstuetzung` | 1105 | 1105 | 0 | etwa 1500 |
| `diagnose` | 1538 | 1542 | +4 (`abklaerung` 424 statt 420) | etwa 1800 |
| `behandlung` | 1677 | 1678 | +1 (`rueckschlaege` 216 statt 215) | etwa 1800 |

Mit Vertiefungen: `genesung` 1210, `unterstuetzung` 1318, `diagnose` 1871, `behandlung` 2345 (Selbstprüfung 1241, 1318, 1867, 2344). **Bestätigt:** Alle vier Seiten liegen unter dem Längenziel.

**Trägt die Länge?** Ja. Auf allen vier Seiten steht das Wichtige oben und ohne Aufklappen: auf `genesung` die Hoffnung mit Einschränkung im Kopf und die Zahlen mit Stichprobe; auf `unterstuetzung` die Fachstelle mit «kein Krisendienst»; auf `diagnose` die Schritte mit «Ihre Rolle», die «Klare Grenze» und der Suizidteil; auf `behandlung` die Rollen, die drei Wege mit der Anleitung bei akuter Gefahr und die vier Schritte bei Wartezeit (über die Kapitelübersicht «Wartezeit» direkt erreichbar). Kritische Information (Schutz, Suizid, akute Gefahr, Schweigepflicht) steht auf allen vier Seiten im Lesefluss.

**Kürzungen:** keine nötig. Zwei mögliche, ohne Aussageverlust:

| ID | Abschnitt | was | Wörter weniger | Fachstelle? |
| --- | --- | --- | ---: | --- |
| K2-B-a1 | `behandlung` › `kontakt` | Vertiefung «Was kann ich in einem vereinbarten Kontakt mitteilen?» in den Begriff «Beobachtungen mitteilen» überführen | etwa 55 (mit Vertiefungen) | ja (P2c2-F-14) |
| K2-B-a2 | `behandlung` › `therapieformen` | «Auch strukturierte generalistische Behandlung ist relevant.» (der Begriff darunter sagt es genauer) | 6 | nein |

#### C3 · Schweizer Hochdeutsch und Form

- «ss» statt «ß»: erfüllt (0 × «ß»). Guillemets: erfüllt. Semikolons im Fliesstext: 0 auf allen vier Seiten (`kennzahlen.mjs`). Doppelpunkt-Genderformen: 0 (Paarformen und neutrale Formen). «es» und «sie» mit klarem Bezug: keine Stelle gefunden.
- Telegrammstil: «Anbieten ja, erzwingen nein.» (P2c2-S-5).

**Befunde S**

- **P2c2-S-1 · optional · Zwei Kommasätze.**
  - **Beleg:** `diagnose`, Vertiefung «Weitere Begleiterkrankungen kurz», ADHS: «Aus der Borderline-Diagnose allein lässt sich ADHS nicht ableiten, eine Abklärung berücksichtigt …»; `behandlung` › `therapieformen`: «Eine starre Reihenfolge gilt nicht, der Behandlungsplan wird individuell abgestimmt.»
  - **Vorschlag:** je zwei Sätze («… nicht ableiten. Eine Abklärung berücksichtigt …»; «Eine starre Reihenfolge gilt nicht. Der Behandlungsplan wird individuell abgestimmt.»).
  - **Zuständig:** bauende Sitzung (P2c2-F-15).
- **P2c2-S-2 · optional · Fachstelle zweimal hintereinander.**
  - **Beleg:** `diagnose` › `ohne-diagnose`: «Die Fachstelle Angehörigenarbeit der PUK berät auch dann, … Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite …»
  - **Vorschlag:** den ersten Satz lassen und den Verweissatz kürzen: «Wie die Beratung abläuft, steht auf der Startseite im Abschnitt «Beratung für Sie».»
  - **Zuständig:** bauende Sitzung (P2c2-F-15).
- **P2c2-S-3 · optional · «Setting» unerklärt.**
  - **Beleg:** `diagnose` › `abklaerung`: «… hängt von Qualifikation, Setting und Behandlungsweg ab.», Schritt 3: «… hängt von Fragestellung, Verlauf und Setting ab.»
  - **Vorschlag:** «Behandlungsrahmen» (das Wort steht schon auf der Seite).
  - **Zuständig:** bauende Sitzung.
- **P2c2-S-4 · optional · «Kann beitragen» bei Mehrzahl.**
  - **Beleg:** `behandlung` › `rollen`, Spalten «Fachpersonen» und «Angehörige».
  - **Vorschlag:** «Mögliche Beiträge» (P2c2-F-4).
  - **Zuständig:** Fachstelle, danach bauende Sitzung.
- **P2c2-S-5 · optional · Telegrammstil und holpriger Satzbeginn auf `diagnose`.**
  - **Beleg:** Schritt 1 «Anbieten ja, erzwingen nein.»; Schritt 2 «Dafür qualifizierte Fachpersonen klären ab, …».
  - **Vorschlag:** «Sie können ihn anbieten, aber nicht erzwingen.»; «Die Abklärung machen dafür qualifizierte Fachpersonen, …» (Wortlaut der Textversion im Bestand).
  - **Zuständig:** bauende Sitzung.
- **P2c2-S-6 · optional · Lange Sätze auf `diagnose`.**
  - **Beleg:** mittlere Satzlänge 13,5 Wörter, 32 % über 15 Wörter (`rolle` 11,8 und 19 %); zum Beispiel der erste Satz von `abklaerung` (21 Wörter).
  - **Vorschlag:** den ersten Satz von `abklaerung` teilen: «Eine vertiefte Abklärung findet je nach Fragestellung und Versorgungsweg statt. Das kann zum Beispiel eine psychiatrisch-psychotherapeutische Praxis, ein Ambulatorium, ein spezialisiertes Angebot oder eine Klinik sein.»
  - **Zuständig:** bauende Sitzung.

### Teil D · Visualisierungs-Check, Bildsprache und Textdarstellungen

#### D1 · «Ein neuer Trieb» (`v-ge-trieb`)

**Bildschirmfotos** bei 1280 und 360 px, je Theme Standard und «kontrast» (vier Fotos), angesehen. Figur 1104 × 747 px (1280) und 320 × 766 px (360).

- **1280 px:** Titel, Kernaussage als grosser Satz, Kurztext. Darunter zwei Sätze nebeneinander, beide mit derselben blauen Randlinie: links «Eine schwierigere Phase entwertet alles.» (über der Pflanze), rechts «Schwierigere Phasen kommen vor und müssen nicht alles kippen.» (über der Giesskanne). Darunter ein hellblauer Fenstersims, darauf ein Topf mit einer Pflanze mit sechs Blättern und einer Knospe oben, rechts davon eine Giesskanne, Ausguss zur Pflanze hin, ohne Wasser. Das abgefallene Blatt liegt auf dem Sims zwischen Topf und Giesskanne, etwa so gross wie die übrigen Blätter.
- **360 px:** Die Sätze stehen untereinander, gleich gestaltet. Die Zeichnung ist 320 × 129 px: Topf und Giesskanne sind erkennbar; das abgefallene Blatt ist ein kleines Oval auf dem Sims und liest sich eher als Muster des Simses; die Knospe oben ist von den übrigen Blättern kaum zu unterscheiden. Die Pflanze wirkt gesund.
- **«kontrast»:** Linien und Randlinien dunkler, Flächen bleiben, nichts verschwindet.
- **Kontrast:** alle Sätze der Abbildung über 4,5 : 1 (Teil E).

**Matrix** (E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar)

| Nr. | Prüfpunkt | «Ein neuer Trieb» | Beleg (bei T und N) |
| --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | – |
| 3 | Prüffrage beantwortet und eingelöst | **T** | `understood`: «Das abgefallene Blatt und der neue Trieb an derselben Pflanze zeigen auf einen Blick, …». Bei 360 px sind Blatt und Trieb kaum als solche erkennbar; die Pflanze wirkt einfach gesund |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | **T** | Die erste Idee steht sichtbar. Die zweite Idee der Abbildung (Giesskanne: Bedingungen anbieten, wachsen muss die Pflanze selbst) steht nur in «Grenzen des Bildes» («Angehörige können Genesung nicht herstellen.») |
| 5 | Ansatzpunkt (B, C, G) | – | – |
| 6 | Mechanismus nicht doppelt gezeigt | T | Die Giesskanne trägt dieselbe Idee wie «Ein Stück Weg» auf `rolle` («begleiten, nicht herstellen»), beide aus dem Garten-Handout |
| 7 | Kartenraster-Check | E | – |
| 8 | Anordnung und Formen tragen Bedeutung | **T** | Der Satz der weniger hilfreichen Sicht steht über der Pflanze, der tragfähigere über der Giesskanne; das legt nahe, die Pflanze (die betroffene Person) denke «entwertet alles». Das Blatt liegt neben der Giesskanne statt unter der Pflanze |
| 9 | Verteilt, keine Textwand | E | – |
| 10 | Vereinfacht, nicht verfälscht; Grenzen; Quelle | E | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | **T** | Lesbar und ohne Überlauf; welcher Satz die weniger hilfreiche Sicht ist, sagt weder das Bild noch die Kurzbeschreibung |
| 13 | Theme «kontrast» | E | – |
| 14 | Fachlich freigegeben | N | `approvalStatus` «ausstehend»; Gate production `visual-approval` (P2c2-F-2) |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | **T** | «Ein Rückschritt macht nicht alles zunichte» über Kernaussage und Kurztext; «das Wachsen muss ich nicht machen» nur in der Vertiefung |
| 16 | Ein Bild, eine Idee; Erleben beschriften | T | zwei Ideen; die Sätze nennen Erleben, aber ohne Kennzeichnung der Sicht |
| 17 | Keine ungewollten Bedeutungen | **N** | Die Prüfperson kann «Eine schwierigere Phase entwertet alles.» als Aussage der Website lesen: Der Satz steht gleichrangig neben dem tragfähigen und hat dieselbe Gestaltung. Die ruhende Giesskanne kann «Angehörige tun nichts» heissen. Keine Schuld- oder Pflichtbotschaft gefunden |

**Abweichungen von der Selbstprüfung** (fett): Punkte 3, 4, 8, 12 und 15 T statt E; Punkt 17 N statt T. Hauptgrund ist die fehlende Kennzeichnung der zwei Sätze; die Selbstprüfung hat sie nicht geprüft.

**Bildsprache, Fragen B1–B11**

| Frage | «Ein neuer Trieb» |
| --- | --- |
| B1 erster Eindruck | ruhig, häuslich, freundlich: eine Zimmerpflanze und eine Giesskanne. Kein Rückschritt sichtbar, eher «alles im grünen Bereich» |
| B2 Form | organisch, weiche Linien, runde Enden; keine Kästen, keine Bemassung |
| B3 Ein Bild, eine Idee | nein: Rückschritt und neues Wachsen (Blatt, Trieb) und begrenzter Einfluss (Giesskanne) |
| B4 Wiedererkennen und Ton | «Eine schwierigere Phase entwertet alles.» ist ein Gedanke, den Angehörige kennen; würdevoll, nicht verniedlichend |
| B5 Platz der Angehörigen | nur über die Giesskanne, ohne Text nicht erkennbar |
| B6 Nebenbedeutungen | Pflanze als passives Wesen (wie im Garten-Handout); ruhende Giesskanne als Untätigkeit; der negative Satz über der Pflanze |
| B7 Wirkung | Hoffnung über die Kernaussage eingelöst; Entlastung («das Wachsen muss ich nicht machen») nur mit Vertiefung |
| B8 Erleben beschriften | ja, zwei Gedanken; ohne «Weniger hilfreich» und «Tragfähiger» unklar, welcher trägt |
| B9 fachlich vereinfacht | ja: «Das Bild ist eine Metapher, keine Vorhersage eines Genesungsverlaufs.» |
| B10 Braucht es ein Bild? | knapp ja für den Rückschritt; die Giesskanne braucht es nicht, weil «Ein Stück Weg» die Idee schon trägt |
| B11 Freundin-Test | in der gebauten Form eher nein: Ohne Kennzeichnung der Sätze und mit kaum sichtbarem Rückschritt erklärt das Bild nicht, wie es ihr geht. Mit gekennzeichneten Sätzen und deutlichem abgefallenem Blatt eher ja |
| **Bewertung** | **trägt nur mit Änderung** (P2c2-F-2, P2c2-V-1 bis -3) |

**Trägt das Bild die Kernaussage?** Nur über den Text. Die Zeichnung allein zeigt bei 360 px keinen Rückschritt. **Giesskanne:** Ohne Text nicht als «Bedingungen anbieten, wachsen muss die Pflanze selbst» lesbar; sie legt weder Schuld noch Pflicht nahe, eher Untätigkeit. **Zuordnung der Sätze:** bei 1280 und 360 px nicht klar. **Unterschied zu «Ein Stück Weg»:** nur der Rückschritt ist neu; die Giesskanne wiederholt «begleiten, nicht herstellen».

#### D2 · Textdarstellungen

**Bildschirmfotos** bei 1280, 768 und 360 px, angesehen.

- **`diagnose` › `abklaerung`** (Liste 720 × 1507, 433 × 2061, 320 × 2420 px): senkrechte Linie mit Punkten, je Schritt «Schritt n» klein, Name gross, Text, darunter abgesetzt «Ihre Rolle» mit blauer Randlinie. Reihenfolge und Zuordnung sind ohne Erklärung klar. Schritt 2 hat keine «Ihre Rolle»-Zeile (wie im Bestand); das fällt nicht auf. Kein Befund.
- **`behandlung` › `rollen`** (Liste 1104 × 884, 707 × 1322, 320 × 2071 px): breit drei Spalten mit Linie oben, Name, darunter klein «Kann beitragen» und «Nicht zu erwarten». Zuordnung klar. Die Spalte «Angehörige» ist mit sieben Punkten fast doppelt so lang wie «Die betroffene Person» (ein Punkt); das lenkt den Blick auf die Liste, was Angehörige nicht müssen, und wirkt bei 1280 px unausgewogen (P2c2-F-4). **768 px:** Die drei Rollen stehen untereinander über die volle Breite, jede Zeile in einer Linie; das ist leichter zu lesen als drei schmale Spalten und passt. Kein Befund zur Anordnung.

**Befunde V**

- **P2c2-V-1 · wichtig · Satzpaar ohne Kennzeichnung.**
  - **Beleg:** Punkte 12, 16, 17; Bildschirmfotos 1280 und 360 px.
  - **Vorschlag:** über jedem Satz die Bezeichnung wie bei den Paaren darunter («Weniger hilfreich», «Tragfähiger»), in der Kurzbeschreibung ebenso; den tragfähigen Satz als zweiten oder rechten lassen.
  - **Zuständig:** Fachstelle (P2c2-F-2), danach bauende Sitzung.
- **P2c2-V-2 · wichtig · Zweite Idee nur in der Vertiefung.**
  - **Beleg:** Punkte 4, 6, 15; B3, B10.
  - **Vorschlag:** Giesskanne weglassen (P2c2-F-2 a). Bleibt sie, braucht der Kurztext einen sichtbaren Satz dazu (Fachstelle).
  - **Zuständig:** Fachstelle.
- **P2c2-V-3 · optional · Rückschritt bei 360 px kaum sichtbar.**
  - **Beleg:** Punkte 3, 8; Beschreibung 360 px.
  - **Vorschlag:** das abgefallene Blatt direkt unter die Pflanze, an den Topf gelehnt, und etwas grösser; den neuen Trieb oben heller oder kleiner als die übrigen Blätter, damit er als neu liest. Pfade nur so weit ändern; Fachstelle sieht das Ergebnis mit der Bildfreigabe.
  - **Zuständig:** bauende Sitzung nach P2c2-F-2.

### Teil E · Bedienung und Barrierefreiheit (automatisiert)

Chromium über Playwright, lokal; alle Werte selbst gemessen.

- **Überlauf** (`scrollWidth − clientWidth` und Elemente ausserhalb des Fensters): `genesung`, `unterstuetzung`, `diagnose`, `behandlung`, `index`; 320, 360, 768, 1280 und 1440 px; je Theme Standard und «kontrast»; je Vertiefungen zu und offen (100 Messungen). Zoom 200 % (640 px bei Faktor 2, Vertiefungen offen, 5 Messungen). Alle 0 px.
- **Tastatur** (`abgleich/bedienung.mjs`, 1280 px, reduzierte Bewegung): Tabstopps bis zur Fusszeile `genesung` 21, `unterstuetzung` 22, `diagnose` 30, `behandlung` 35, `index` 17; erster Stopp «Zum Hauptinhalt»; kein Stopp ohne sichtbaren Fokus. Eigenes Skript: Enter öffnet jede Vertiefung des Profils (`genesung` 3, `unterstuetzung` 1, `diagnose` 4, `behandlung` 8). «Grenzen des Bildes» (`details`) ist mit der Tastatur erreichbar; Öffnen nicht eigens gemessen.
- **Sprung über die Kapitelübersicht** (letzter Eintrag, Klick, 1280 × 900): Abschnittsoberkante 24 px unter dem Fensterrand auf `genesung`, `unterstuetzung`, `diagnose`, `behandlung`.
- **Ohne Skript:** Panels 3 von 3, 1 von 1, 4 von 4, 8 von 8 sichtbar.
- **Kontrast** (WCAG 1.4.3): aller Text mit eigenem Textknoten, Vertiefungen offen, 1280 px, beide Themes; `genesung` 146, `unterstuetzung` 173, `diagnose` 189, `behandlung` 239, `index` 49 Elemente, darunter die Sätze in der Abbildung und die Bezeichnungen «Schritt n», «Ihre Rolle», «Kann beitragen», «Nicht zu erwarten». Keines unter AA; tiefster Wert 4,71 : 1 (Link der Absenderin).
- **Druck** (`page.pdf`, A4, Schriften geladen): `genesung` 9, `unterstuetzung` 9, `diagnose` 11, `behandlung` 15 Seiten; Kicker und Titel stehen auf allen vier Seiten und auf `krise` und `rolle` zusammen; kein Titel oder Kicker allein am Seitenende. Alle Vertiefungen vollständig im Druck (Stichworte aus jeder Vertiefung im PDF-Text gefunden). In einem ersten Lauf ohne Warten auf die Schriften und mit Rand 0 stand dreimal ein Kicker am Seitenende, der Titel oben auf der nächsten Seite (`genesung` «01 · Forschung», `diagnose` «02 · Bedeutung», «03 · Zweifel»); derselbe Lauf zeigt das Muster schon am Stand `2d5330b`. Mit geladenen Schriften trat es nicht auf. Kein Befund; zur Beobachtung in W3.
- **Abweichung zur Selbstprüfung:** Seitenhöhe bei 360 px je Seite 162 px höher (`genesung` 14 461 statt 14 299, `diagnose` 17 901 statt 17 739, `behandlung` 21 460 statt 21 298, `unterstuetzung` 13 869 statt 13 707; `index` 5126). Ursache ist der Merge des Profils 2026.10.1 nach der Selbstprüfung (Fusszeile); Seitenzahl im Druck ebenso kleiner. Kein Befund.
- **Nicht prüfbar:** reale Screenreader-Läufe, Hardwaretastatur und Touch. Sie brauchen eine Person und sind offen, nicht bestanden.

**Befunde B:** keine.

### Teil F · Technik und Zuständigkeit (Stichprobe)

| Prüfung | Ergebnis (selbst ausgeführt am Stand `7ee24ba`) |
| --- | --- |
| `node tools/build.mjs` | 15 Seiten, Build r4-7, Gate draft: **0 blockierend, 6 Hinweise**: 1 × `visual-approval` (`v-ge-trieb`), 3 × `placeholder-approval` (`fragen`, `quellen`, `ueber`), `site-url`, `review-report`. `git status` danach ohne Änderung |
| `node tools/gate.mjs --selftest` | **53/53 bestanden** |
| `node tools/gate.mjs --production` | **5 blockierend, 1 Hinweis**: 1 × `visual-approval` («Ein neuer Trieb»), 3 × `placeholder-approval` (`fragen`, `quellen`, `ueber`), 1 × `review-report`; Hinweis `site-url`. Wie erwartet |
| `node abgleich/pruefe-abgleich.mjs` | **6067 Zeilen, 0 ohne Fundstelle** |
| `node abgleich/kennzahlen.mjs` | `genesung` 1620 → 1492, `unterstuetzung` 2010 → 1393, `diagnose` 3769 → 2165, `behandlung` 2696 → 2700 Wörter; Absicherungen je 100 Wörter 1,98 → 2,21, 0,90 → 1,08, 2,10 → 2,03, 2,74 → 2,59; Semikolons 7 → 0, 7 → 0, 20 → 0, 11 → 0 |
| `node abgleich/verneinung.mjs` | `genesung` 45 von 159 (28 %), `unterstuetzung` 16 von 198 (8 %), `diagnose` 46 von 215 (21 %), `behandlung` 48 von 290 (17 %) |
| `node abgleich/bedienung.mjs` | Tabstopps wie Selbstprüfung; Höhen +162 px (Teil E) |

**Kennzahlen der bauenden Sitzung:** nachgerechnet und **bestätigt** für Build, Gates, Abgleich, `kennzahlen.mjs` (`diagnose`, `behandlung` auf die Stelle), `verneinung.mjs` (`diagnose`, `behandlung`), Tabstopps, Kontraste (tiefster Wert 4,71 : 1) und Wörter im Lesefluss (Abweichungen in Teil C2). `genesung` 159 statt 158 und `unterstuetzung` 198 statt 193 Sätze in `verneinung.mjs` sind die Änderungen aus 2c-2 (die Selbstprüfung nennt für diese zwei Seiten die Werte von 2c-1).

**Zuständigkeit und Krisenzugang** (gebaute Seiten und `content/` von `genesung`, `unterstuetzung`, `diagnose`, `behandlung`):

- `tel:`-Links: 0. `mailto:` in `main`: 0. `style`-Attribute: 0. Hexwerte in `content/` und in `borderline.css`: 0.
- Telefonnummern im sichtbaren Text: 0 (gesucht: Muster «0xx xxx xx xx», 143, 144, 147, 117, 112; der einzige Treffer «147» ist eine Koordinate im SVG). Kein Notfallblock, kein Link auf eine Notfallseite.
- **Verweise im Text:** `genesung` 0, `unterstuetzung` 0, `diagnose` 2, `behandlung` 2; nur über den Platzhalter, Wortlaut aus `responsibility.inline` («Sorgen Sie sich akut um das Leben oder die Sicherheit eines Menschen, holen Sie sofort Hilfe: ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei.»); keiner in einer Vertiefung oder Figur; höchstens einer je Abschnitt.

| Seite › Abschnitt | Was direkt davor steht | Nach einer Handlungsanleitung? | Trägt er? |
| --- | --- | --- | --- |
| `diagnose` › `zweifel` | «Klare Grenze: … Dann holen Sie Hilfe über den Notruf.» | ja | ja |
| `diagnose` › `begleiterkrankungen` | «… holen Sie sofort Hilfe über den Notruf.» | ja | ja |
| `behandlung` › `kontakt` | «Bei möglicher akuter Gefahr holen Sie sofort Hilfe über den Notruf und warten nicht auf eine Rückmeldung per E-Mail.» | ja | ja |
| `behandlung` › `wartezeit` | «… Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» (Schritt 4) | ja | ja; der Satz davor braucht einen Weg (P2c2-F-1) |

**Handlungsanleitungen für akute Lagen ohne Verweis im Text:**

| Ort | Satz | Verweis nötig? |
| --- | --- | --- |
| `behandlung` › `therapieformen` | «Akute Gefährdungen, etwa eine schwere depressive Episode, eine Krise beim Substanzgebrauch oder eine Essstörung mit körperlicher Gefährdung, brauchen sofortige Aufmerksamkeit.» | nein: Aussage über die Behandlungsplanung, keine Anleitung an Angehörige |
| `diagnose`, Vertiefung «Weitere Begleiterkrankungen kurz», Essstörungen | «Bei körperlicher Gefährdung braucht es rasch eine fachliche und medizinische Einschätzung.» | nein: Bestand, keine Anleitung zum Hilfeholen in einer akuten Lage; die Anleitungen für akute Gefahr stehen sichtbar im selben Abschnitt |
| `behandlung` › `kontakt`, vierte Frage | «… an wen wenden Sie sich bei möglicher akuter Gefahr?» | nein: Frage zur Planung, der Verweis im Text steht im selben Abschnitt darüber |
| `genesung`, `unterstuetzung` | keine Anleitung für akute Lagen | – |

- **Freigegebene Seiten unverändert:** sichtbarer Text von `content/verstehen`, `beziehungen`, `grenzen`, `rolle`, `selbstfuersorge`, `kommunizieren`, `krise` am Stand `ed277d9` und `7ee24ba` Zeile für Zeile verglichen: 0 Unterschiede. `git diff ed277d9` zeigt auf diesen sieben Seiten nur die entfallene Klasse `puk-site-anchor-end` (Klassenvergleich je Seite: einzige Differenz). `index`: nur die zwei Einstiege statt des Platzhalters «Weitere Einstiege folgen …».

**Befunde T**

- **P2c2-T-1 · optional · Begründung im Plan veraltet.**
  - **Beleg:** `site.config.json`, `v-ge-trieb` › `reason`: «Die Skizze ist unverändert übernommen (Pfade, Bildausschnitt `0 40 640 220`).» Gebaut ist `viewBox="60 44 530 214"` (Selbstprüfung 2c-1, Entscheid Nr. 4).
  - **Vorschlag:** den Satz an den gebauten Bildausschnitt anpassen, mit der Änderung aus P2c2-F-2.
  - **Zuständig:** bauende Sitzung.

### Zählung der Befunde der Prüfrunde 2c (zweite Prüfsitzung)

| Stufe | kritisch | wichtig | optional |
| --- | ---: | ---: | ---: |
| W1 | 0 | 2 | 1 |
| W2 | 0 | 1 | 2 |
| S | 0 | 0 | 6 |
| V (Visualisierungs-Check) | 0 | 2 | 1 |
| B (Bedienung und Barrierefreiheit) | 0 | 0 | 0 |
| T (Technik und Zuständigkeit, Stichprobe) | 0 | 0 | 1 |

**Befunde W1**

- **P2c2-W1-1 · wichtig · Unklare Dringlichkeit ohne Weg.**
  - **Beleg:** A1 Nr. 68; `behandlung` › `wartezeit`, Schritt 4.
  - **Vorschlag:** Wortlaut von `krise` › `belastung` (P2c2-F-1).
  - **Zuständig:** Fachstelle, danach bauende Sitzung.
- **P2c2-W1-2 · wichtig · Angebotsliste ohne erkennbares Kriterium, zwei Angaben ohne Beleg.**
  - **Beleg:** A1 Nr. 66, 67; A3 Nr. 224; «Bekannt aus Prüfung 1», Punkt 3.
  - **Vorschlag:** P2c2-F-3.
  - **Zuständig:** Fachstelle, danach bauende Sitzung.
- **P2c2-W1-3 · optional · Einschränkung der älteren Studien gekürzt.**
  - **Beleg:** A1 Nr. 44.
  - **Vorschlag:** so lassen (P2c2-F-8).
  - **Zuständig:** Fachstelle.

Dazu 15 Fragen an die Fachstelle (P2c2-F-1 bis P2c2-F-15) und 2 Kürzungsvorschläge (K2-B-a1, K2-B-a2).

**Gesamturteil:** Fachlich tragen die vier Seiten. Sie übertragen den Bestand mit seinen Absicherungen, übernehmen Verantwortung und Suizid im Wortlaut der freigegebenen Seiten, halten die Zuständigkeit ohne Nummern ein und bleiben unter dem Längenziel. Vor der Durchsicht durch die Fachstelle sollte die bauende Sitzung nichts ändern; die Fachstelle entscheidet zuerst P2c2-F-1 bis -5 (akute Lage auf `behandlung`, Abbildung «Ein neuer Trieb», Angebotsliste, Rollen, «eigenständig behandelt»). Danach kann eine Korrektur 2c-K diese Entscheide, die sprachlichen Punkte (P2c2-S-1 bis -6, P2c2-W2-2) und P2c2-T-1 in einem Durchgang umsetzen, und die Fachstelle kann die neuen Sätze und die Abbildung freigeben.

**Nicht geprüft, und warum:**

- **Externe Links und Vorschau auf Netlify:** aus dieser Umgebung nicht erreichbar (keine Verbindung, Namensauflösung gesperrt). Geprüft ist der gebaute Stand im Repository über einen lokalen Server; ob die Vorschau denselben Stand zeigt und ob die Websites der Angebote heute sagen, was die Seite verspricht, ist offen (Teil A4).
- **Reale Screenreader-Läufe, Hardwaretastatur und Touch:** brauchen eine Person (Teil E).
- **Verweise von den freigegebenen Seiten auf die neuen Seiten** (13 Vorschläge der bauenden Sitzung): auftragsgemäss nicht geprüft.
- **Studien im Original** (Zanarini, NICE-Vollleitlinie, Guillén et al. 2024): nicht eingesehen; geprüft ist die Treue zum Bestand.
- **Abgleich mit der ersten Prüfsitzung:** nur über die Liste der Befunde und Fragen, nicht Punkt für Punkt.

### Vergleich mit der ersten Prüfsitzung 2c

- **Gleich gefunden:** unklare Dringlichkeit in `wartezeit` (P2c-W1-1 / P2c2-W1-1), Angaben der Angebotsliste (P2c-W1-2 / P2c2-W1-2), Giesskanne nur in der Vertiefung (P2c-V-1 / P2c2-V-2), «Fachteam» (P2c-W2-2 / P2c2-W2-2), «Kann beitragen» (P2c-S-1 / P2c2-S-4), lange Sätze auf `diagnose` (P2c-S-2 / P2c2-S-6), veraltete Begründung im Plan (P2c-T-1 / P2c2-T-1).
- **Anders gewichtet:** Zuordnung der zwei Sätze in «Ein neuer Trieb»: erste Prüfung optional (P2c-V-2), zweite wichtig (P2c2-V-1), weil der Satz «Eine schwierigere Phase entwertet alles.» ohne Kennzeichnung als Aussage der Website gelesen werden kann (Punkt 17 N). Essstörungen in der Vertiefung auf `diagnose`: erste Prüfung Befund (P2c-W1-7), zweite kein Befund (Teil F).
- **Nur in der zweiten Prüfung:** Widerspruch «eigenständig behandelt» (`genesung`) gegen «mitbehandelt … integriert» (`behandlung`) (P2c2-W2-1, P2c2-F-5); konkrete Empfehlung je Angebot mit Kriteriumssatz (P2c2-F-3); Kürzung der Rollenliste auf fünf Punkte (P2c2-F-4).
- **Nur in der ersten Prüfung:** unter anderem P2c-W1-3 bis -6 und P2c-W2-1 («Formen» für Settings). Die Fachstelle kann beide Listen zusammen entscheiden; wo sie sich decken, genügt ein Entscheid.

## Prüfrunde 2c (11.10.2026, Stand 7ee24ba)

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `7ee24ba` (Etappe 2c-2 `2d5330b`, danach `main` mit Profil 2026.10.1 zusammengeführt). Geprüft sind die Seiten `genesung` («Genesung»), `unterstuetzung` («Unterstützung finden»), `diagnose` («Diagnose und Begleiterkrankungen») und `behandlung` («Behandlung und Ihre Rolle darin») sowie auf `index` die zwei neuen Einstiege. Die Etappen 1, 2a und 2b sind von der Fachstelle freigegeben. Sie dienen hier nur als Massstab. Die Prüfsitzung hat weder Etappe 2c-1 noch 2c-2 gebaut. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht.

**Vorgehen**

- **Grundlagen gelesen:** `CLAUDE.md`, `BAUAUFTRAG-ETAPPE-2C1.md`, `BAUAUFTRAG-ETAPPE-2C2.md`, die Selbstprüfungen «Etappe 2c-1» und «Etappe 2c-2» und als Vorbild die «Prüfrunde 2b»; `site.config.json` (Seiten, `visualPlan`, `responsibility`); im Abgleich `genesung.md`, `unterstuetzung.md`, `diagnose.md`, `behandlung.md` und `README.md`.
- **Bestand:** Branch `origin/borderline-bestand`, `bestand/borderline-angehoerige/texte/`, mit `git show` ausgelesen. Ganz gelesen: `genesung.md`, `beratung.md`, `fachstelle.md`, `buchempfehlungen.md`, `verstehen--diagnostik.md`, `verstehen--begleiterkrankungen.md`, `unterstuetzen--therapie.md` und die Handouts `genesung-zahlen`, `fortschritt-paradox`, `remission-heilung`, `5-faktoren-genesung` und `rolle-genesungsprozess`.
- **Abgleich:** die Zeilen zu jedem Satz, der auf den Seiten fehlt oder anders steht, gezielt gesucht und gelesen (Teil A2).
- **Rückwärtsprüfung:** Ein Skript der Prüfsitzung sucht für jeden Satz der vier Seiten (643 Sätze im sichtbaren Text ohne Quellenblock) den ähnlichsten Satz im ganzen Bestand (73 Dateien, Wortüberlappung). Die 110 Sätze unter 0,41 sind gegen die Listen «Neue Sätze zur Freigabe» gesucht.
- **Browser:** lokal `python3 -m http.server` im Projektstamm, Chromium über Playwright. Eigene Skripte für Wörter (C1), Sätze, Überlauf, Tastatur, ohne Skript, Druck (PDF und `pdftotext`), Kontrast, Links, Lage der Verweise im Text und Sprung zum letzten Abschnitt. Bildschirmfotos der Abbildung bei 1280 und 360 px, Standard und «kontrast» (vier Fotos, angesehen, nicht committet).
- **Vergleichsstand:** Für Abweichungen bei Höhen und Druck ist zusätzlich der Stand `2d5330b` (ohne den Merge von `main`) in einem eigenen Arbeitsverzeichnis gebaut und gemessen.

**Ergebnis in Kürze**

- Die vier Seiten übertragen den Bestand treu. In 98 verglichenen Aussagen ist keine Sicherheitsaussage ersatzlos entfallen. Es gibt keine neue absolute Aussage über die betroffene Person und kein Heilungsversprechen. Die Kennzahlen der Selbstprüfungen stimmen (Teil F).
- **Zahlen 93 % und 50 %:** richtig übertragen, mit Studiendefinition, Stichprobe («290 Erwachsene, die zu Studienbeginn stationär behandelt wurden») und «keine persönliche Prognose», direkt bei den Zahlen und sichtbar.
- **Medikamente:** auf `genesung` und `behandlung` im Wortlaut des Bestands und ohne Widerspruch. Der neue Schlusssatz nennt nicht, wer ändert, und sagt «Fachperson» statt «ärztliche Fachperson» (P2c-F-4).
- **Keine Telefonnummern, keine `tel:`-Links:** auf allen vier Seiten und auf `index` 0. Kein Notfallblock. Vier Verweise im Text, jeder direkt nach einer Handlungsanleitung.
- **Zwei Stellen brauchen einen Entscheid der Fachstelle:**
  - Auf `behandlung` › `wartezeit` sagt die Anleitung bei «unklarer Dringlichkeit» nur, was nicht zu tun ist. Auf der freigegebenen Seite `krise` ist derselbe Fall seit P2b-F-2 klar geregelt (P2c-F-1).
  - Die Angebote auf `behandlung` sind nur teilweise belegt («ab 13 Jahren», Sanatorium Kilchberg, ipw, Dachverband). Die externen Links liessen sich auch hier nicht aufrufen (P2c-F-3).
- **«Ein neuer Trieb»:** trägt den Rückschritt. Die zweite Idee, die Giesskanne («wachsen muss die Pflanze selbst»), steht sichtbar nur im Bild und in Worten nur in der geschlossenen Vertiefung (P2c-F-2).
- Die freigegebenen Seiten sind im Wortlaut unverändert. Technik, Bedienung, Kontrast, Druck und Links sind ohne Befund.

### Teil A · W1 Fachliche Vorprüfung

#### A1 · 98 Aussagen gegen den Bestand

Ausgewählt nach Auftrag: Zahlen und Prognose, Medikamente, Angebote und Links, akute Gefahr und Verweise im Text, Schweigepflicht und Einwilligung, Minderjährige, Verantwortung und Schuld, Aussagen über die betroffene Person, Quellen. Nr. = Zeile im Abgleich (g = `genesung.md`, u = `unterstuetzung.md`, d = `diagnose.md`, b = `behandlung.md`), wo zitiert. «Handout x» = `materialien--text--x.md`.

**`genesung`** (Bestand `genesung.md` und Handouts)

| # | Bestand (Zitat) | Neue Fassung (Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- |
| 1 | «Hoffnung ist bei Borderline berechtigt. Wege, Tempo und Bedeutung von Veränderung sind individuell; weder eine Diagnose noch eine einzelne Phase legt den weiteren Verlauf fest.» | zwei Sätze (`kopf`) | gleichbedeutend |
| 2 | Drei Kernsätze: «Besserung ist möglich; …», «Studienzahlen beschreiben Gruppen und keine persönliche Prognose.», «Angehörige können begleiten. Den Verlauf müssen sie nicht herstellen oder verantworten.» | wörtlich, Liste unter der Einleitung (`kopf`) | gleichbedeutend; die Prognose-Absicherung steht schon im Kopf |
| 3 | «Langzeitstudien sprechen klar gegen das alte Bild einer hoffnungslosen Entwicklung. Viele Menschen mit Borderline erleben über Jahre deutliche Besserungen.» | wörtlich (`forschung`) | gleichbedeutend |
| 4 | «93% erreichten während einer zehnjährigen Studie mindestens einmal eine symptomatische Remission über zwei Jahre.»; Handout `genesung-zahlen`: «Die Diagnosekriterien waren in diesem Zeitraum nicht mehr erfüllt. Einzelne Beschwerden konnten weiterhin bestehen.» | Seite und Handout zusammen (`forschung`, `dl.bl-zahlen`) | gleichbedeutend; die Studiendefinition (Kriterien über zwei Jahre nicht erfüllt) ist richtig wiedergegeben und genauer als auf der alten Seite (2c-1 Frage 1, entschieden) |
| 5 | «50% erreichten im selben Beobachtungszeitraum eine mindestens zweijährige Recovery: Remission zusammen mit guter sozialer und beruflicher Funktionsfähigkeit nach der Studiendefinition.» | wörtlich (`forschung`) | gleichbedeutend; «nach der Studiendefinition» bleibt |
| 6 | «10 Jahre beschreiben den Beobachtungszeitraum der Forschung. Daraus lässt sich keine feste Wartezeit bis zu einer Besserung ableiten.»; Handout: «Veränderungen können früher eintreten» | wörtlich, dazu der Handout-Satz (`forschung`) | gleichbedeutend |
| 7 | «Hinweis: Untersucht wurden 290 Erwachsene, die zu Studienbeginn stationär behandelt wurden.» | wörtlich, sichtbar direkt nach den drei Werten (`forschung`) | gleichbedeutend; Stichprobe steht bei den Zahlen, wie der Auftrag verlangt |
| 8 | «Die Zahlen beschreiben jemals erreichte Zustände im Verlauf, nicht den Anteil dauerhaft beschwerdefreier Menschen am Studienende.» | wörtlich, Liste «Was die Zahlen nicht sagen» | gleichbedeutend |
| 9 | «Sie sind keine individuelle Prognose.» | «Die Zahlen beschreiben diese Studiengruppe und keine persönliche Prognose.» (Wortlaut Handout) | gleichbedeutend |
| 10 | Handout: «Eine zu Beginn stationär behandelte Gruppe bildet nicht alle Menschen mit Borderline ab.» | wörtlich (`forschung`) | gleichbedeutend |
| 11 | «Lebensqualität und ein selbstbestimmter Alltag zählen auch dann, wenn die strengen Recovery-Kriterien einer Studie nicht erfüllt sind.»; Handout: «Arbeit oder Partnerschaft sind kein Massstab für den Wert eines Menschen.» | wörtlich (`forschung`) | gleichbedeutend |
| 12 | «Die diagnostischen Kriterien … werden über einen festgelegten Zeitraum nicht mehr erfüllt. Einzelne Beschwerden können trotzdem bestehen bleiben.» | Handout `remission-heilung` wörtlich, dazu «Remission bedeutet nicht automatisch, dass alle Beschwerden verschwunden sind …» (`begriffe`) | gleichbedeutend |
| 13 | «Zum Begriff «Heilung»» (drei Sätze, Handout) | wörtlich, Vertiefung (`begriffe`) | gleichbedeutend; kein Heilungsversprechen, kein Sicherheitsinhalt in der Vertiefung |
| 14 | «Für Angehörige ist entscheidend: Besserung ist oft real, auch wenn nicht alles konfliktfrei, leicht oder linear wird.» | wörtlich (`begriffe`) | gleichbedeutend |
| 15 | «Ein schwieriger Abschnitt macht frühere Erfahrungen oder Fähigkeiten nicht wertlos.» | Kernaussage der Abbildung «Eine schwierigere Phase bedeutet nicht, dass alles Erreichte verloren ist.» (Handout `fortschritt-paradox`) | gleichbedeutend |
| 16 | Handout: «Schwierigere Phasen können vorkommen und müssen ernst genommen werden; sie sind weder vorgeschrieben noch ein Beleg für fehlenden Willen.» | Kurztext, Semikolon als Punkt | gleichbedeutend |
| 17 | «Was als hilfreiche Veränderung erlebt wird, bestimmt die betroffene Person selbst. Angehörige müssen keinen Verlauf vorhersagen, bewerten oder beschleunigen.» | wörtlich (`verlauf`) | gleichbedeutend |
| 18 | «Für Borderline selbst sind Medikamente keine Kernbehandlung; Änderungen nur mit der behandelnden Fachperson.» | «Für Borderline selbst sind Medikamente keine Kernbehandlung. Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» (`einfluesse`) | gleichbedeutend (Korrektur 2c-2, Frage Nr. 2 entschieden). Wer ändert, sagt der Satz nicht; «Fachperson» statt «ärztliche Fachperson» (P2c-F-4) |
| 19 | «Die fünf Bereiche sind eine eigene redaktionelle Synthese der Fachstelle, kein validiertes Fünf-Faktoren-Modell und keine individuelle Prognose.» | «… eine eigene Zusammenstellung der Fachstelle aus Behandlungsleitlinien, kein geprüftes Modell.»; «keine persönliche Prognose» im Einleitungssatz | gleichbedeutend (2c-1 Frage 4, entschieden) |
| 20 | «Bei vielen, nicht allen Menschen bestehen zusätzlich andere psychische oder körperliche Belastungen. … Mehr dazu auf der Seite Begleiterkrankungen.» | wörtlich, Verweissatz auf `diagnose#begleiterkrankungen` (g163) | gleichbedeutend; Link führt auf den richtigen Abschnitt |
| 21 | Handout: «Praktische oder strukturelle Belastungen (z. B. Wohnen, Finanzen) lassen sich oft nicht innerhalb der Familie lösen; Sozialberatungen können unterstützen.» | zwei Sätze (`einfluesse`) | gleichbedeutend |
| 22 | Handout: «Allgemeine Beratung ist auch ohne Zustimmung … möglich; Auskünfte über ihre Behandlung gibt es grundsätzlich nur mit ihrer Zustimmung; gesetzliche Ausnahmen gelten etwa bei Minderjährigen oder fehlender Urteilsfähigkeit.» | drei Sätze, sichtbar (`freiwillig`) | gleichbedeutend (2c-1 Frage 3, entschieden) |
| 23 | Handout: «Für Genesung verantwortlich sein: Das liegt nicht in Ihrer Hand.» | «Für Behandlung und Genesung sind Sie nicht verantwortlich.» (Wortlaut `rolle`) | gleichbedeutend; kein «allein» |
| 24 | Handout: «Ihre Gesundheit zählt für sich – nicht erst als Beitrag zur Genesung einer anderen Person.» und die Selbstfrage «Ist das, was ich anbiete, gewünscht, freiwillig, sicher und für mich tragbar?» | wörtlich, sichtbar (`freiwillig`) | gleichbedeutend |
| 25 | Garten: «Eine schwierigere Phase beweist nicht, dass Sie zu wenig getan haben.» | auf `rolle` › `anbieten` (freigegeben), verlinkt (g34, g60) | gleichbedeutend über den Verweissatz; auf `genesung` selbst steht der Satz nicht, obwohl er zur Abbildung passt (siehe Teil D) |
| 26 | Handout: «Angehörige ersetzen keine Behandlung und müssen sie nicht koordinieren – ausser etwa als Eltern Minderjähriger oder Beistand.» | wörtlich, Vertiefung «Eltern Minderjähriger und Beistandschaft» | gleichbedeutend; kein akuter Hinweis |
| 27 | «Bei akuter Gefahr oder Unsicherheit: Akute Hilfe und Notfallkontakte» (Link `/soforthilfe`) | entfällt (g223); Zuständigkeitsverweis in der Fusszeile | begründet (Profil); die Seite hat keine Handlungsanleitung für akute Lagen |

**`unterstuetzung`** (Bestand `beratung.md`, `fachstelle.md`, `buchempfehlungen.md`)

| # | Bestand (Zitat) | Neue Fassung | Urteil |
| --- | --- | --- | --- |
| 28 | «… kann es entlastend sein, nicht nur im eigenen System nach Lösungen zu suchen.» | «… nicht nur in der Familie oder im eigenen Umfeld …» (`kopf`) | gleichbedeutend, verständlicher |
| 29 | «Die Fachstelle ist kein Krisendienst und keine Therapie.» | wörtlich, sichtbar (`beratung`) | gleichbedeutend |
| 30 | «Sie ist eine Anlaufstelle für Angehörige, die ihre Rolle klären, Belastung einordnen und passende nächste Schritte finden möchten.» | Subjekt «Die Fachstelle» (`beratung`) | gleichbedeutend |
| 31 | Vier Angebote als Fragen («Fragen Sie, ob ein Gespräch … möglich ist.») | als Beschreibung («Ein Gespräch zu Ihrer Rolle …») | gleichbedeutend im Inhalt, bestimmter im Ton (2c-1 Frage 11, entschieden) |
| 32 | «Klären Sie direkt bei der Fachstelle, wer das Angebot nutzen kann, ob Kosten entstehen …»; Telefon, E-Mail, Adresse | Verweissatz auf `index#beratung`; dort kostenlos, Schweigepflicht, ohne Vollmacht, Lenggstrasse 31, E-Mail | gleichbedeutend; Telefonnummer entfällt (Profil) |
| 33 | «Entstehen Kosten, und werden Informationen an eine Krankenkasse weitergegeben?» | entfällt; die Startseite sagt «kostenlos und untersteht der Schweigepflicht» | **teilweise**; der Bestand beantwortet die Frage an anderer Stelle ausdrücklich: «Beratung kostet nichts und wird nicht an Krankenkassen weitergegeben.» (`verstehen--begleiterkrankungen.md`, d369). Diese Antwort steht jetzt nirgends (P2c-W1-6) |
| 34 | Pro Mente Sana: «… psychosoziale und juristische Beratung für Betroffene und Angehörige. Kostenlose Telefonberatung …» | wörtlich, ohne Nummer, Link auf die Website | gleichbedeutend (2c-1 Frage 7, entschieden) |
| 35 | Stand by You: «Ehemals VASK Schweiz – Dachverband … Seit Januar 2024 unter neuem Namen.» | «… ist der Dachverband … Bis Januar 2024 hiess er VASK Schweiz.» | gleichbedeutend |
| 36 | «… kostenlose HelpLine, die von Angehörigen für Angehörige betrieben wird.»; Nummer und Zeiten | wörtlich, ohne Nummer und Zeiten | gleichbedeutend; Auftrag erfüllt |
| 37 | VASK Zürich: «Kantonale Vereinigung der Angehörigen von psychisch Kranken – mit regelmässigen Beratungs-Treffpunkten in Zürich und Winterthur.» | personenzentriert, zwei Sätze | gleichbedeutend (2c-1 Frage 12, entschieden) |
| 38 | «Offener Treffpunkt für alle Angehörigen und Freunde», Termine | «Die Treffpunkte sind offen für alle Angehörigen und Freunde. Wann sie stattfinden, steht auf der Website.» | gleichbedeutend; Termine entfallen begründet |
| 39 | `verstehen--diagnostik.md`: «Für Eltern jugendlicher Betroffener gibt es an der PUK Zürich die Gruppe «Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung». …» | wörtlich (`austausch`), Link wie im Bestand | gleichbedeutend; Name der Gruppe offen (2c-2 Frage 18 → P2c-F-11) |
| 40 | Selbsthilfe Schweiz: «… die zentrale Vermittlungsstelle für Selbsthilfegruppen in der ganzen Schweiz. Es gibt Gruppen in mehreren Kantonen, sowohl vor Ort als auch online.» | zwei Sätze, gekürzt | gleichbedeutend |
| 41 | «Regional-Hinweis: Die hier aufgeführten Angebote sind primär für den Kanton Zürich relevant. … über die Hausarzt-/Psychiater:innen-Praxis vor Ort.» | (`kantone`) | gleichbedeutend |
| 42 | «Kuratierte, überwiegend deutschsprachige Bücher … ohne Anspruch auf Vollständigkeit.» | «Die Bücher sind eine persönliche Auswahl, überwiegend deutschsprachig und ohne Anspruch auf Vollständigkeit.» | gleichbedeutend |
| 43 | 15 empfohlene Titel mit Autorin oder Autor, Verlag, Jahr, Beschreibung und «Für: …» | alle 15 vorhanden, Angaben gleich (Titel für Titel verglichen); Ex Libris entfällt | gleichbedeutend (2c-1 Frage 8, entschieden) |
| 44 | «Das einzige deutschsprachige Kinderbuch speziell zum Thema Borderline.» | wörtlich | gleichbedeutend; die Aussage ist absolut und nicht belegt, sie kann veralten (P2c-F-12) |
| 45 | Vier kritisch eingeordnete Titel mit Einordnung, ohne Bezugslinks | wörtlich, Vertiefung, ohne Links | gleichbedeutend; «Krisenhinweise nicht als heutige Notfallanleitung verwenden» bleibt |
| 46 | «Solche Titel sind keine wissenschaftlichen Evidenzquellen; ihre Sprache, Verallgemeinerungen und Krisenhinweise müssen kritisch eingeordnet werden.» | zwei Sätze, in der Vertiefung | gleichbedeutend |
| 47 | «Das Label «Empfehlung» bezeichnet eine redaktionelle Auswahl, keine wissenschaftliche Bewertung.» | «Die Bezeichnung «Empfehlung» meint …» | gleichbedeutend |
| 48 | «Die Website ist … kein offizieller Kommunikationskanal der PUK Zürich.» | verschoben (`ueber`, Etappe 3) | begründet; bis Etappe 3 steht der Satz nirgends. Die Fusszeile nennt «Inhaltsverantwortung: Fachstelle Angehörigenarbeit PUK» |

**`diagnose`** (Bestand `verstehen--diagnostik.md`, `verstehen--begleiterkrankungen.md`)

| # | Bestand (Zitat) | Neue Fassung | Urteil |
| --- | --- | --- | --- |
| 49 | «Nicht als Anleitung, jemanden zur Diagnose zu drängen, sondern als Orientierung in einer Phase, in der vieles unklar ist.» | «Die Seite ist keine Anleitung, …» (`kopf`) | gleichbedeutend |
| 50 | «Bei vielen Menschen mit Borderline bestehen zusätzlich Depression, …» | «Bei vielen, aber nicht allen Menschen mit Borderline …» (`kopf`) | gleichbedeutend, besser abgesichert |
| 51 | «Beteiligt sein können ärztliche und psychologische Fachpersonen … Wer die diagnostische Gesamtbeurteilung übernimmt, hängt von Qualifikation, Setting und Behandlungsweg ab.» | wörtlich (`abklaerung`) | gleichbedeutend |
| 52 | «Eine Borderline-Diagnostik ist kein einzelner Test, sondern ein gestufter Prozess.» | wörtlich | gleichbedeutend |
| 53 | Infografik Schritt 1: «Anbieten ja, erzwingen nein.» | wörtlich, «Ihre Rolle» | gleichbedeutend |
| 54 | «Das ist normaler Teil sorgfältiger Diagnostik und keine Verzögerungstaktik.» | wörtlich (Schritt 2) | gleichbedeutend |
| 55 | Schritt 4: «Ob Sie einbezogen werden, hängt vom Einverständnis Ihres/Ihrer Angehörigen ab – das kann schwer sein.» | «… vom Einverständnis der betroffenen Person ab. Das kann schwer sein.» | gleichbedeutend; für Minderjährige gilt das Unterkapitel «Bei Jugendlichen» (2c-2 Frage 3 → P2c-F-6) |
| 56 | «Fachliche Abklärung und Behandlung sind auch vor dem 18. Geburtstag möglich. Jugendliche müssen nicht warten …» | wörtlich, sichtbar (im Bestand ein Akkordeon) | gleichbedeutend, sichtbarer |
| 57 | «Auch urteilsfähige Minderjährige haben ein Recht auf Vertraulichkeit; konkrete Fragen sollten mit der zuständigen Fachperson geklärt werden.» | zwei Sätze, Aufforderung | gleichbedeutend (2c-2 Frage 2 → P2c-F-6) |
| 58 | DSM-5-TR: neun Kriterien, mindestens fünf; ICD-11: zuerst Schweregrad, dann 6D11.5 | wörtlich in kurzen Sätzen, Vertiefung | gleichbedeutend und fachlich richtig (6D11.5 ist der Borderline-Muster-Spezifizierer der ICD-11) |
| 59 | «Für die stationäre medizinische Statistik gilt in der Schweiz 2026 weiterhin die ICD-10-GM 2024. Deshalb kann … F60.31 erscheinen.» | wörtlich | gleichbedeutend; F60.31 ist «Emotional instabile Persönlichkeitsstörung, Borderline-Typ» |
| 60 | «Die Diagnose ist eine fachliche Beurteilung über Zeit, nicht ein Stempel aus einem einzelnen Gespräch.» | wörtlich, hervorgehoben | gleichbedeutend |
| 61 | «Wichtig: Eine Diagnose ist nicht dauerhaft fixiert. Recovery ist möglich — siehe Genesung.» | «Eine Diagnose ist nicht dauerhaft fixiert.» und Verweissatz auf `genesung#forschung` | gleichbedeutend; kein Heilungsversprechen |
| 62 | «Sie hilft nicht automatisch der Beziehung. … Beziehungs-Klärung bleibt eigene Arbeit …» | wörtlich bzw. «Die Beziehung zu klären, bleibt eigene Arbeit …» | gleichbedeutend |
| 63 | «Auch eine fachlich gestellte Diagnose darf hinterfragt werden; eine zweite fachliche Einschätzung ist legitim.» | zwei Sätze (`zweifel`) | gleichbedeutend |
| 64 | Listen «Was nicht hilft» und «Was möglich ist» | wörtlich, nebeneinander | gleichbedeutend; im letzten Punkt entfällt «und die Zugangsbedingungen klären» (in der Liste «Neue Sätze» als «Satzzeichen» geführt, P2c-W1-6) |
| 65 | «Klare Grenze: Bei akuter Gefahr — Suizidalität, schwerer Selbstverletzung oder Fremdgefährdung — ist die Diagnose-Frage nachrangig. Dann zählt die Soforthilfe.» | «… etwa bei Suizidgefahr, schwerer Selbstverletzung oder Gefahr für andere Menschen … Dann holen Sie Hilfe über den Notruf.», danach der Verweis im Text | gleichbedeutend, klarer; Wortlaut von `krise` (2c-2 Frage 5 → P2c-F-7) |
| 66 | «Bin ich auch betroffen?» (Akkordeon): «kein Selbstdiagnose-Werkzeug», «eigene Beratung oder Therapie … legitime und oft hilfreiche Option», «keine Pflicht, aber eine reale Option» | wörtlich, sichtbar (`ohne-diagnose`) | gleichbedeutend, sichtbarer |
| 67 | «Es erlaubt aber keine Diagnose der anderen Person.» | wörtlich | gleichbedeutend |
| 68 | «Komorbidität … bedeutet, dass eine Person gleichzeitig oder im Verlauf an mehreren Erkrankungen leidet. Bei Menschen mit Borderline kommen weitere psychische Diagnosen häufig vor.» | «… mehrere Erkrankungen hat.»; «… häufig vor, aber nicht bei allen.» | gleichbedeutend, personenzentriert, besser abgesichert |
| 69 | «Die Reihenfolge ist keine Häufigkeitsrangliste» | «Die Reihenfolge ist keine Rangfolge.» | gleichbedeutend |
| 70 | Grafik: «Mehrere Diagnosen heissen mehr Komplexität – nicht mehr Schuld. … Sie müssen nicht sortieren, was was ist.» | wörtlich, hervorgehoben | gleichbedeutend |
| 71 | «Die älteren Zanarini-Untersuchungen beruhen auf einer spezialisierten, zunächst stationär behandelten Stichprobe … Ihre Befunde sind keine Prävalenzschätzung … und keine individuelle Prognose.» | «Die älteren Studien dazu untersuchten Menschen, die zu Beginn stationär behandelt wurden. Die Befunde … zeigen nicht, wie häufig Depressionen bei allen Menschen mit Borderline sind, und sie sind keine persönliche Prognose.» | gleichbedeutend in einfacher Sprache; «spezialisiert» und «Lebenszeit- und Langzeitverlauf» entfallen ohne Verlust für Laien (2c-2 Frage 6 → P2c-F-8) |
| 72 | «Eine Differenzierung zwischen kurzfristigen Stimmungswechseln und einer eigenständigen depressiven Episode ist Aufgabe der behandelnden Fachperson — Sie als Angehörige müssen das nicht selbst leisten.» | zwei Sätze, Angehörige zuerst | gleichbedeutend |
| 73 | «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten. … Verantwortung für konkrete verletzende oder gewalttätige Handlungen bleibt davon getrennt.» | «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (Wortlaut `verstehen`) und Verweissatz auf `rolle#schuld` | gleichbedeutend über den Verweis: `rolle` › `schuld` sagt «Die Verantwortung für eigene verletzende oder gewalttätige Handlungen bleibt bestehen.» (2c-2 Frage 7 → P2c-F-8) |
| 74 | «Die NICE-Vollleitlinie (2009) beschreibt einen beobachteten Zusammenhang … Dieser Gruppenbefund erlaubt keine Vorhersage für eine einzelne Person.» | «Die britische Behandlungsleitlinie NICE …», Jahr und Kapitel im Quellenblock | gleichbedeutend (2c-2 Frage 4 → P2c-F-7) |
| 75 | «Suizidale Aussagen oder Hinweise auf konkrete Pläne brauchen unabhängig von ihrer diagnostischen Zuordnung eine professionelle Einschätzung. Nehmen Sie auch anhaltende Hoffnungslosigkeit … ernst.» | wörtlich (`begleiterkrankungen`) | gleichbedeutend |
| 76 | «Bei akuter Gefahr oder Hinweisen auf konkrete suizidale Absicht: Soforthilfe — Notfallnummern …» | «… holen Sie sofort Hilfe über den Notruf.», Verweis im Text, Verweissatz auf `krise#suizid` | gleichbedeutend, ohne Nummern |
| 77 | «Essstörungen … Bei körperlicher Gefährdung braucht es rasch eine fachliche und medizinische Einschätzung.» (im Bestand sichtbarer Abschnitt) | wörtlich, jetzt in der Vertiefung «Weitere Begleiterkrankungen kurz» | gleichbedeutend im Wortlaut; **Ort:** ein Schutzhinweis steht auf dieser Seite nur noch hinter Aufklappen; sichtbar steht er auf `behandlung` › `therapieformen` (P2c-W1-7) |
| 78 | «Die Fachstelle … berät auch dann, wenn die Diagnostik noch nicht abgeschlossen ist oder mehrere Diagnosen im Raum stehen. Beratung kostet nichts und wird nicht an Krankenkassen weitergegeben.» | erster Satz wörtlich, zweiter über den Verweissatz auf `index#beratung` | **teilweise:** «nicht an Krankenkassen weitergegeben» entfällt (Nr. 33, P2c-W1-6) |

**`behandlung`** (Bestand `unterstuetzen--therapie.md` und Teile von `verstehen--diagnostik.md`, `verstehen--begleiterkrankungen.md`)

| # | Bestand (Zitat) | Neue Fassung | Urteil |
| --- | --- | --- | --- |
| 79 | «Ob, wie und mit welchen Zielen sie stattfindet, entscheidet die betroffene Person gemeinsam mit Fachpersonen.» | wörtlich (`kopf`) | gleichbedeutend |
| 80 | «Behandlung liegt bei der erkrankten Person und den Fachpersonen.» | «… bei der betroffenen Person …» | gleichbedeutend, personenzentriert |
| 81 | Klick-Grafik, Auswahl «Ihre Rolle», «Therapie», «Person» | drei Spalten, alles sichtbar, je «Kann beitragen» und «Nicht zu erwarten» (`rollen`) | gleichbedeutend; die Zuordnung der letzten Punkte bei «Therapie» und «Person» zu «Nicht zu erwarten» ist inhaltlich zwingend («Angehörige therapieren», «Allein für Beziehungsqualität sorgen») (2c-2 Frage 14 → P2c-F-9) |
| 82 | «Vertraulichkeit Ihrer Mitteilung gegenüber der betroffenen Person kann nicht pauschal zugesichert werden.» | wörtlich (`kontakt`) | gleichbedeutend |
| 83 | «Bei möglicher akuter Gefahr nutzen Sie die Notfallwege und warten nicht auf eine Rückmeldung per E-Mail.» | «… holen Sie sofort Hilfe über den Notruf und warten nicht …», nach der Begriffsliste, Verweis im Text | gleichbedeutend, klarer (2c-2 Frage 8 → P2c-F-9) |
| 84 | «Informationen über Diagnose, Sitzungen oder Verlauf dürfen grundsätzlich nur mit entsprechender Einwilligung oder einer anderen Rechtsgrundlage weitergegeben werden. Eine Mitteilung an das Team hebt die Schweigepflicht nicht auf.» | wörtlich | gleichbedeutend |
| 85 | «Bei akuten Sicherheitsbedenken holen Sie sofort professionelle Hilfe.» | zusammengeführt mit Nr. 83 | gleichbedeutend (ein Verweis je Abschnitt) |
| 86 | «Formulierungsbeispiel: «Ich beobachte weiterhin Selbstverletzungen …» Bei akuter Gefahr nutzen Sie den Notruf, statt auf eine Antwort zu warten.» | Beispiel wörtlich in der Vertiefung; der Notruf-Satz entfällt dort (b103) | gleichbedeutend über Nr. 83 im sichtbaren Text desselben Abschnitts; Regel des Auftrags |
| 87 | «… eine pauschale Wartefrist von einem Jahr gibt es dafür nicht.» | wörtlich, eigener Satz | gleichbedeutend; Quelle «Kanton Zürich, Anlaufstellen und Zweitmeinung» nicht aufrufbar (P2c-F-9) |
| 88 | «Bei der Fachstelle Angehörigenarbeit der PUK ist sie kostenlos und ohne Vollmacht der erkrankten Person möglich.» | «… der betroffenen Person …» | gleichbedeutend; passt zu `index` |
| 89 | «Ohne entsprechende Einwilligung oder andere Rechtsgrundlage besteht kein allgemeiner Anspruch auf vertrauliche Behandlungsinformationen oder den Austrittsbericht.» | wörtlich (Vertiefung «Nach einer Krise») | gleichbedeutend |
| 90 | «Notfallkontakt klären: «Wenn es wieder kritisch wird, rufe ich … an?»» | zusammengeführt, Verweissatz auf `krise#danach` (b127) | gleichbedeutend über den Verweis; `krise` nennt Nachsorge und erreichbare Kontakte |
| 91 | Musterbrief, «Der Therapeut ist an die Schweigepflicht gebunden …» | «Die behandelnde Fachperson …», Text des Musters wörtlich | gleichbedeutend; Platzhalter «Telefonnummer für Rückruf» ist die eigene Nummer der Angehörigen, keine Angebotsnummer (2c-2 Frage 13 → P2c-F-9) |
| 92 | «Mehrere strukturierte Psychotherapien können bei BPS helfen; die Sicherheit der Evidenz ist für viele Einzelvergleiche begrenzt, und es gibt keine für alle Menschen beste Methode.» | zwei Sätze, vor den Therapieformen | gleichbedeutend |
| 93 | «Für Family Connections liegen inzwischen auch randomisierte Daten vor: … weder gesicherte Überlegenheit noch Gleichwertigkeit.» | wörtlich, Vertiefung «Programme für Angehörige» | gleichbedeutend; die zwei neuen Erklärsätze sind richtig und vorsichtig (2c-2 Frage 10 → P2c-F-9) |
| 94 | «Komorbide Erkrankungen werden in der Regel mitbehandelt … integriert, parallel oder schrittweise … Akute Gefährdungen … brauchen sofortige Aufmerksamkeit.» | wörtlich bzw. im Wortlaut des Auftrags (`therapieformen`) | gleichbedeutend |
| 95 | «Medikation: Nach NICE sollen Medikamente nicht gezielt zur Behandlung von Borderline selbst oder ihrer einzelnen Kernsymptome eingesetzt werden. Bei einer zusätzlichen Depression kann eine Kombination aus einem Antidepressivum und psychologischer Behandlung erwogen werden. Ob Medikation passt, wird individuell mit der behandelnden ärztlichen Fachperson geklärt.» | wörtlich, dazu «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» | gleichbedeutend; deckt NICE CG78 1.3.5.1 (keine Medikamente gezielt für Borderline oder einzelne Symptome) und 1.3.5.3 (Begleiterkrankungen). Der Zusatzsatz sagt «Fachperson», zwei Sätze vorher «ärztliche Fachperson» (P2c-F-4) |
| 96 | «Für psychologische Psychotherapie zulasten der Grundversicherung ist eine ärztliche Anordnung nötig; nicht alle Ärzt:innen sind regulär anordnungsberechtigt.» | Paarform, zwei Sätze, BAG-Link | gleichbedeutend; stimmt mit dem Anordnungsmodell seit 1. Juli 2022 überein («regulär» lässt die Krisenintervention offen). Aktueller Stand beim BAG nicht aufrufbar (2c-2 Frage 11 → P2c-F-9) |
| 97 | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz: Nutzen Sie den zuständigen Notfalldienst.» | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.», danach der Verweis im Text | **Absicherung schwächer:** Für den Fall «unklare Dringlichkeit» fehlt in der Anleitung die Handlung («Nutzen Sie den zuständigen Notfalldienst»); der Notruf gilt nur bei unmittelbarer Gefahr. Den Notfalldienst nennt nur der Verweis im Text. Die freigegebene Seite `krise` sagt seit P2b-F-2: «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, holen Sie sofort Hilfe und schützen sich selbst.» (P2c-F-1) |
| 98 | «In anderen Kantonen: Fragen Sie die Hausärzt:in oder den psychiatrischen Dienst Ihres Wohnkantons nach Anmeldung, Zuständigkeit und Zwischenversorgung.» | Verweissatz auf `unterstuetzung#kantone`: Selbsthilfe Schweiz, Hausarztpraxis oder psychiatrische Praxis vor Ort | **teilweise:** Der Zielabschnitt richtet sich an Angehörige (Selbsthilfe). Der Weg der betroffenen Person zu Behandlung und Zwischenversorgung im eigenen Kanton («psychiatrischer Dienst des Wohnkantons») steht nicht mehr da (P2c-F-10) |

**Bilanz:** 94 gleichbedeutend, davon 16 mit einer offenen Frage an die Fachstelle zu Wortlaut, Ort oder Belegen, 1 mit einer kleinen Kürzung (Nr. 64) und 1 hinter Aufklappen statt sichtbar (Nr. 77). Bei 1 ist eine Absicherung schwächer (Nr. 97). 3 tragen nur teilweise (Nr. 33, 78, 98). Keine Aussage ist neu ohne Grundlage. Keine Sicherheitsaussage ist ersatzlos entfallen.

#### A2 · Angebote und externe Links

Alle Links in `main` per Skript erfasst. Kein Link öffnet ein neues Fenster. Der Linktext nennt das Ziel. Die Ziele liessen sich aus dieser Umgebung nicht aufrufen (Proxy: `CONNECT` 403, Namensauflösung gesperrt, auch über WebFetch).

| Seite | Angebot | Link | entspricht | Prüfbedarf |
| --- | --- | --- | --- | --- |
| `unterstuetzung` | Pro Mente Sana | `https://www.promentesana.ch` | Bestand | – |
| `unterstuetzung` | Stand by You Schweiz | `https://www.stand-by-you.ch` | Bestand | – |
| `unterstuetzung` | VASK Zürich | `https://www.vaskzuerich.ch` | Bestand | – |
| `unterstuetzung` | Gruppe für Eltern | `…/kinder-und-jugendpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/` | Bestand und Auftrag | Name der Gruppe (P2c-F-11) |
| `unterstuetzung` | Selbsthilfe Schweiz | `https://www.selbsthilfeschweiz.ch` | Bestand | – |
| `behandlung` | HYPE Züri | wie Gruppe für Eltern | Bestand und Auftrag | «ab 13 Jahren» nennt die Website laut Auftrag nicht (P2c-F-3) |
| `behandlung` | PUK, Erwachsene | `…/erwachsenenpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/` | Auftrag (neu) | – |
| `behandlung` | ipw | `https://ipw.ch/angebot/…/psychotherapiestation-fuer-junge-erwachsene` | Bestand | Eintrag ohne Beschreibung des Angebots; Borderline und DBT laut Auftrag nicht genannt (P2c-F-3) |
| `behandlung` | Sanatorium Kilchberg | `https://www.sanatorium-kilchberg.ch` | Bestand | kein Borderline-Angebot belegt, «Für: Angaben auf der Website» (P2c-F-3) |
| `behandlung` | Clienia Schlössli | `…/clienia-schloessli/stationen/a2/` | Bestand | – |
| `behandlung` | Dachverband DBT | `https://www.dachverband-dbt.de/dbt-therapieangebote` | Bestand | ob Schweizer Einträge enthalten sind, ist nicht belegt (P2c-F-3) |
| `behandlung` | BAG | `https://www.bag.admin.ch/de/neuregelung-der-psychologischen-psychotherapie-ab-1-juli-2022` | Bestand | Stand nicht prüfbar |

Alle 12 Adressen gleichen der Adresse im Bestand oder in der Tabelle des Auftrags 2c-2 (dort am 11.10.2026 aufgerufen). Keine Nummer, keine Zeiten, keine Stations-E-Mail, kein `mailto:` in `main`.

#### A3 · Neue Sätze

**(a) Rückwärtsprüfung.** Von 643 Sätzen haben 110 eine Wortüberlappung unter 0,41 zum besten Satz im Bestand (`genesung` 13, `unterstuetzung` 22, `diagnose` 37, `behandlung` 38). 98 davon stehen in den Listen «Neue Sätze zur Freigabe» 2c-1 und 2c-2. Die übrigen 12 sind wörtlich aus dem Bestand: vier «Für: …»-Zeilen der Bücher, der Verweis im Text (viermal), die drei Beschreibungen der Settings («mit regelmässigen Terminen und Leben zu Hause» usw.) und «Dauer, Auslöser und Auswirkungen sind hilfreiche Beobachtungen, …». **Kein neuer Satz fehlt in den Listen.**

**(b) Art in den Listen.** Gegen den Bestand gelesen sind die Sätze der Listen, die in A1 vorkommen. Die Art stimmt mit einer Ausnahme. Liste 2c-2 Nr. 57 «bei der Fachstelle Angehörigenarbeit der PUK nach eigener Beratung fragen» ist als «Satzzeichen» geführt. Im Bestand folgt «und die Zugangsbedingungen klären». Richtig wäre «gekürzt» (P2c-W1-6).

**(c) Verweissätze.** Alle 49 internen Links der vier Seiten per Skript aufgerufen (28 in Verweissätzen, 21 in den Kapitelübersichten): Ziel und Anker vorhanden, Linktext gleich dem Titel der Zielstelle, kein Link auf `fragen`, `quellen` oder `ueber`. Der angekündigte Inhalt steht jeweils am Ziel, z. B. `rolle#schuld` (verletzende Handlungen), `krise#suizid` (direkt fragen), `behandlung#therapieformen` (Medikamente), `diagnose#begleiterkrankungen` (sechs Beispiele). Auf `index` führen die zwei neuen Einstiege auf `genesung.html` (h1 «Genesung ist möglich und kann unterschiedlich aussehen») und `unterstuetzung.html` (h1 «Unterstützung finden»).

#### A4 · Übereinstimmung mit den freigegebenen Seiten

| Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- |
| Verantwortung wie `rolle` und `verstehen` | erfüllt | «Für Behandlung und Genesung sind Sie nicht verantwortlich.» (`genesung` › `freiwillig`); «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (`diagnose` › `begleiterkrankungen`). «allein» nur bei der Beziehung («allein für die Qualität der Beziehung sorgen», `behandlung` › `rollen`) |
| Akute Gefahr im Wortlaut von `krise` | erfüllt bis auf eine Stelle | «Notruf» in allen vier Handlungsanleitungen; «unklare Dringlichkeit» auf `behandlung` › `wartezeit` schwächer als `krise` › `belastung` (A1 Nr. 97) |
| Suizid wie `verstehen` und `krise` | erfüllt | professionelle Einschätzung, Notruf, Verweis im Text, Verweissatz auf `krise#suizid`; der Gruppenbefund mit «erlaubt keine Vorhersage für eine einzelne Person» |
| Keine neue absolute Aussage über die betroffene Person | erfüllt | «Gründe und Funktionen unterscheiden sich und lassen sich nicht aus einer Diagnose ableiten.», «Aus der Borderline-Diagnose allein lässt sich ADHS nicht ableiten», «Nehmen Sie das nicht vorschnell persönlich.» |
| Begriffe | erfüllt | «betroffene Person» 28-mal, «erkrankte Person» 0-mal; «Hausarztpraxis» und Paarformen statt Doppelpunkt |
| Zuständigkeit | erfüllt | Teil F |

#### Befunde W1

- **P2c-W1-1 · wichtig · «Unklare Dringlichkeit» auf `behandlung` › `wartezeit` ohne Handlung.**
  - **Beleg:** A1 Nr. 97; `krise` › `belastung` (freigegeben).
  - **Zuständig:** Fachstelle (P2c-F-1), danach die bauende Sitzung.
- **P2c-W1-2 · wichtig · Angaben in der Angebotsliste nicht belegt.**
  - **Beleg:** A2; Hinweise der Tabelle im Auftrag 2c-2, Abschnitt 5; 2c-2 Frage 15.
  - **Zuständig:** Fachstelle (P2c-F-3).
- **P2c-W1-3 · optional · Schlusssatz zu Medikamenten ohne Handelnde und ohne «ärztlich».**
  - **Beleg:** A1 Nr. 18 und 95.
  - **Zuständig:** Fachstelle (P2c-F-4).
- **P2c-W1-4 · optional · «In anderen Kantonen» trägt den Zugang zur Behandlung nur teilweise.**
  - **Beleg:** A1 Nr. 98; d181 nennt nur den Satz zur Hausarztpraxis.
  - **Zuständig:** Fachstelle (P2c-F-10).
- **P2c-W1-5 · optional · «Das einzige deutschsprachige Kinderbuch speziell zum Thema Borderline.»**
  - **Beleg:** A1 Nr. 44.
  - **Zuständig:** Fachstelle (P2c-F-12).
- **P2c-W1-6 · optional · Bericht und Abgleich ungenau.**
  - **Beleg:**
    - Liste 2c-2 Nr. 57 «Satzzeichen» statt «gekürzt» (A3 b).
    - d369 nennt nicht, dass «wird nicht an Krankenkassen weitergegeben» entfällt; die Bemerkung verweist auf 2c-1 Frage 10, dort stand nur die Frage des Bestands, nicht diese Antwort (A1 Nr. 33, 78).
    - Die Selbstprüfung 2c-2 führt Absicherungen und Verneinung von `genesung` und `unterstuetzung` nicht nach (Teil F).
  - **Zuständig:** bauende Sitzung (Bemerkungen und Liste); Fachstelle für die Krankenkasse (P2c-F-14).
- **P2c-W1-7 · optional · Schutzhinweis zu Essstörungen auf `diagnose` nur in der Vertiefung.**
  - **Beleg:** A1 Nr. 77. Im Bestand stand «Weitere mögliche Begleiterkrankungen — knapp» sichtbar; der Auftrag 2c-2 verlangt die Vertiefung. Ebenso die Liste «Mögliche Hinweise auf eine depressive Phase» (mit «Suizidgedanken oder entsprechende Aussagen»); für Suizid trägt der sichtbare Text desselben Abschnitts.
  - **Zuständig:** Fachstelle (P2c-F-13).

### Teil B · W2 Gesamtkohärenz mit den Etappen 1 bis 2b

**Begriffe** (sichtbarer Text mit Vertiefungen)

- **Betroffene Person:** `genesung` 7, `diagnose` 3, `behandlung` 18, `unterstuetzung` 0; «erkrankte Person» 0. Einheitlich.
- **Hilfe bei akuter Gefahr:** «Notruf» in allen vier Handlungsanleitungen, im Verweis im Text «ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei». Einheitlich mit `krise` nach P2b-F-1.
- **Behandlungsteam / Fachteam:** `behandlung` 9-mal «Behandlungsteam», 2-mal «Fachteam» («… welche Ziele die Person mit dem Fachteam vereinbart hat», Vertiefung; «… gemeinsam mit dem Fachteam», `therapieformen`). Auf `krise` ist «Fachteam» mit P2b-F-7 zu «Behandlungsteam» geworden. Uneinheitlich (P2c-W2-2).
- **Therapieformen / Formen:** Der Abschnitt «Therapieformen» nennt fünf Therapieformen und danach «Therapie ist in drei Formen möglich: Ambulant, Teilstationär, Stationär». Zweimal «Form» für Verschiedenes (P2c-W2-1).
- **Fachstelle:** «Fachstelle Angehörigenarbeit der PUK» wie auf `index` und `krise`. Einheitlich.

**Widersprüche zu den freigegebenen Seiten:** einer, die unklare Dringlichkeit (A1 Nr. 97, gegen `krise` › `belastung`). Sonst keine.

**Widersprüche zwischen den neuen Seiten:** keiner. Zu prüfen war:
- Begleiterkrankungen «werden eigenständig behandelt» (`genesung` › `einfluesse`, Handout) neben «werden in der Regel mitbehandelt … integriert, parallel oder schrittweise» (`behandlung` › `therapieformen`). Beide stehen so im Bestand und meinen dasselbe (als eigene Erkrankung beachtet). Kein Befund.
- Medikamente: `genesung` «keine Kernbehandlung», `behandlung` NICE im Wortlaut, beide mit demselben Schlusssatz. Kein Widerspruch.

**Doppelungen**

| Thema | Stellen | Urteil |
| --- | --- | --- |
| Angebote für Abklärung und Therapie | nur `behandlung` › `angebote`; `diagnose` verweist zweimal dorthin | wie entschieden, keine Doppelung |
| «Kein Therapieplatz oder lange Wartezeit» | nur `behandlung` › `wartezeit` | wie entschieden |
| Beratung der Fachstelle | `index` › `beratung`, `unterstuetzung` › `beratung`, Verweissätze auf `genesung`, `diagnose`, `behandlung` | verlinkt statt wiederholt; nützlich |
| Garten / Giesskanne | `rolle` › `anbieten` («Ein Stück Weg», Garten-Text) und `genesung` › `verlauf` («Ein neuer Trieb») | zwei Bilder für «begleiten, nicht herstellen» (2c-1 Visualisierungs-Check Nr. 6, entschieden); der Garten-Text ist nur verlinkt |
| Gleicher Link für zwei Einträge | HYPE Züri (`behandlung`) und Gruppe für Eltern (`unterstuetzung`) | Auftrag; kein Befund |

**Befunde W2**

- **P2c-W2-1 · optional · «Formen» für Settings im Abschnitt «Therapieformen».**
  - **Beleg:** `behandlung` › `therapieformen`: «Therapie ist in drei Formen möglich:».
  - **Vorschlag:** «Therapie kann in drei Rahmen stattfinden:» oder «Therapie ist auf drei Arten möglich:». Neuer Wortlaut zur Freigabe.
  - **Zuständig:** bauende Sitzung nach P2c-F-15.
- **P2c-W2-2 · optional · «Fachteam» neben «Behandlungsteam».**
  - **Beleg:** oben.
  - **Vorschlag:** «Behandlungsteam», wie auf `krise` nach P2b-F-7.
  - **Zuständig:** bauende Sitzung nach P2c-F-15.

### Teil C · S Sprach-Review und Länge

#### C1 · Kennzahlen

Zählweise C1 wie in den Selbstprüfungen (innerste `p`, `li`, `dt`, `dd` in `main`, ohne SVG, Text nur für Screenreader, Kapitelübersicht, Kicker, Eyebrow, «Abbildung n · …», Quellenzeilen und Quellenblock; «im Lesefluss» ohne die Panels der Akkordeons, «Grenzen des Bildes» zählt mit). Sätze: Teilung an Satzzeichen vor Grossbuchstaben oder «.

| Seite | C1 im Lesefluss | Ziel | Sätze | Mittel (Median) | > 15 Wörter | > 25 | mit Verneinung |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: |
| `genesung` | 1160 | etwa 1800 | 119 | 9,7 (10) | 14 (12 %) | 0 | 41 (34 %) |
| `unterstuetzung` | 1105 | etwa 1500 | 138 | 8,0 (7) | 10 (7 %) | 0 | 9 (7 %) |
| `diagnose` | 1538 | etwa 1800 | 127 | 12,1 (12) | 36 (28 %) | 1 | 32 (25 %) |
| `behandlung` | 1677 | etwa 1800 | 174 | 9,6 (9) | 27 (16 %) | 0 | 33 (19 %) |

- **Länge:** Alle vier Ziele sind erreicht.
- **Satzlänge:** `diagnose` hat deutlich mehr lange Sätze als die übrigen Seiten (28 % über 15 Wörter, auf `rolle` und `selbstfuersorge` 11 und 12 %). Ein Satz hat 29 Wörter: «Davon zu unterscheiden ist die Differenzialdiagnostik: Bei der Abklärung prüfen Fachpersonen, ob ähnliche Muster zu einer anderen Erkrankung gehören, etwa zu bipolaren Störungen, einer PTBS, ADHS oder dissoziativen Störungen.» (P2c-S-2).
- **Verneinung:** auf `genesung` hoch (34 % nach dieser Satzteilung, 28 % nach `verneinung.mjs`). Fast alle sind Absicherungen des Bestands («keine persönliche Prognose», «keine feste Wartezeit», «nicht verantwortlich»). Kein Befund, wie in 2c-1 vermerkt.

#### C2 · Lesetest je Abschnitt

Prüfperson: Mutter oder Partner, abends auf dem Handy (360 px), nach einer schwierigen Woche. a = beim ersten Lesen verstanden (ja / mit Mühe / nein), b = weiss danach, was ich tun kann. Ton überall warm, erwachsen und ohne Schuldzuweisung, ausser wo vermerkt.

| Seite | Abschnitt | a | b | Stolperstellen |
| --- | --- | --- | --- | --- |
| `genesung` | Kopf | ja | – | – |
| | `forschung` | ja | – | «Recovery» bleibt Fachwort, wird aber im selben Satz erklärt |
| | `begriffe` | mit Mühe | – | drei Fachbegriffe hintereinander; die Begriffsliste hilft |
| | `verlauf` | ja | ja | Was die Giesskanne bedeutet, steht nur in der Vertiefung (Teil D) |
| | `einfluesse` | ja | ja | – |
| | `freiwillig` | ja | ja | – |
| `unterstuetzung` | Kopf | ja | – | – |
| | `beratung` | ja | ja | – |
| | `austausch` | ja | ja | – |
| | `selbsthilfe`, `kantone` | ja | ja | – |
| | `buecher` | ja | ja | lang (648 Wörter), aber gut gegliedert |
| `diagnose` | Kopf | ja | – | – |
| | `abklaerung` | mit Mühe | ja | «Eine Abklärung entsteht aus einem Muster über die Zeit» (Schritt 3): gemeint ist die Einordnung, nicht die Abklärung (P2c-S-3) |
| | `bedeutung` | ja | – | – |
| | `zweifel` | ja | ja | – |
| | `ohne-diagnose` | ja | ja | – |
| | `begleiterkrankungen` | mit Mühe | ja | lange Sätze; ADHS-Satz mit Komma statt Punkt (Vertiefung) |
| `behandlung` | Kopf | ja | – | – |
| | `rollen` | ja | ja | «Kann beitragen» bei «Fachpersonen» und «Angehörige» grammatisch falsch (P2c-S-1) |
| | `kontakt` | ja | ja | – |
| | `therapieformen` | ja | – | «Formen» (P2c-W2-1) |
| | `rueckschlaege` | ja | ja | – |
| | `angebote` | ja | ja | ipw ohne Satz zum Angebot; «Für: Angaben auf der Website» (Kilchberg) sagt nichts (P2c-S-3) |
| | `wartezeit` | ja | ja | bei unklarer Dringlichkeit fehlt «was dann» (P2c-W1-1) |

#### Befunde S

- **P2c-S-1 · optional · «Kann beitragen» bei Mehrzahl.**
  - **Beleg:** `behandlung` › `rollen`, Spalten «Fachpersonen» und «Angehörige»; Selbstprüfung 2c-2, «Aufgefallen» Nr. 1.
  - **Vorschlag:** «Mögliche Beiträge» und «Nicht zu erwarten» in allen drei Spalten (Bestand: «MÖGLICHE BEITRÄGE»).
  - **Zuständig:** bauende Sitzung nach P2c-F-15.
- **P2c-S-2 · optional · Lange Sätze auf `diagnose`.**
  - **Beleg:** C1; ADHS: «Aus der Borderline-Diagnose allein lässt sich ADHS nicht ableiten, eine Abklärung berücksichtigt …».
  - **Vorschlag:** Differenzialdiagnostik und ADHS je in zwei Sätze teilen («… ableiten. Eine Abklärung berücksichtigt …»).
  - **Zuständig:** bauende Sitzung nach P2c-F-15.
- **P2c-S-3 · optional · Drei unklare Stellen.**
  - **Beleg:** «Eine Abklärung entsteht aus einem Muster über die Zeit, nicht aus einem einzelnen Moment.» (`diagnose`, Schritt 3, Bestand der Infografik); ipw-Eintrag ohne Satz zum Angebot; «Für: Angaben auf der Website» (Kilchberg).
  - **Vorschlag:** «Eine Einordnung beruht auf einem Muster über die Zeit, nicht auf einem einzelnen Moment.»; ipw und Kilchberg nach P2c-F-3.
  - **Zuständig:** bauende Sitzung nach P2c-F-15 und P2c-F-3.

### Teil D · Visualisierungs-Check «Ein neuer Trieb» (`v-ge-trieb`)

**Bildschirmfotos** bei 1280 und 360 px, je Standard und «kontrast», angesehen.

| Figur 1280 px | Zeichnung 1280 px | Figur 360 px | Zeichnung 360 px | Lage (Abstand vom Abschnittsanfang 1280 / 360 px) |
| --- | --- | --- | --- | --- |
| 1104 × 747 | 760 × 307 | 320 × 766 | 320 × 129 | 254 / 332 px, direkt nach dem ersten Absatz von `verlauf`, wie im Auftrag |

**Beschreibung**

- **1280 px:** Titel, Kernaussage als grosser Satz, Kurztext. Darüber der Zeichnung zwei Sätze mit blauer Randlinie, links «Eine schwierigere Phase entwertet alles.» über der Pflanze, rechts «Schwierigere Phasen kommen vor und müssen nicht alles kippen.» über der Giesskanne. Darunter ein hellblauer Sims. Eine Topfpflanze mit sechs Blättern, oben zwei kleine neue Blätter. Ein Blatt liegt flach auf dem Sims vor dem Topf. Rechts eine Giesskanne mit Ausguss zur Pflanze hin, ohne Wasser. Darunter «Grenzen des Bildes» (geschlossen) und die Quelle.
- **360 px:** Die Sätze stehen untereinander über der Zeichnung. Pflanze und Giesskanne sind erkennbar. Das abgefallene Blatt ist etwa 15 px lang und leicht zu übersehen; der neue Trieb oben wirkt wie eine Knospe.
- **«kontrast»:** Linien dunkelblau, Flächen bleiben, nichts verschwindet.
- **Pfade:** alle 26 Pfade und Klassen gleich wie Anhang A des Auftrags 2c-1. Nur der Bildausschnitt ist enger (`viewBox` «60 44 530 214»).

**Matrix** (E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar)

| Nr. | Prüfpunkt | «Ein neuer Trieb» | Beleg (bei T und N) |
| --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | `genesung` 6 Zeilen, `unterstuetzung` 5, `diagnose` 6, `behandlung` 7, alle mit Begründung |
| 3 | Prüffrage beantwortet und eingelöst | E | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | **T** | Die zweite Hälfte der Wirkung («das Wachsen muss ich nicht machen», `resonance`) steht in Worten nur in «Grenzen des Bildes» («Angehörige können Genesung nicht herstellen.»), und die ist geschlossen. Kernaussage und Kurztext sprechen nur vom Rückschritt (P2c-V-1) |
| 5 | Ansatzpunkt | – | Illustration |
| 6 | Mechanismus nicht doppelt gezeigt | T | wie Selbstprüfung: dieselbe Idee wie «Ein Stück Weg» auf `rolle` (entschieden) |
| 7 | Kartenraster-Check | E | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | Blatt am Boden, Trieb oben, Kanne giesst nicht |
| 9 | Verteilt, keine Textwand | E | – |
| 10 | Vereinfacht, nicht verfälscht; Grenzen; Quelle | E | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | Kurzbeschreibung im Wortlaut des Auftrags |
| 13 | Theme «kontrast» | E | – |
| 14 | Fachlich freigegeben | N | `approvalStatus` «ausstehend»; Gate production `visual-approval` (P2c-F-2) |
| 15 | Bildsprache passt; Wirkung eingelöst | T | Entlastung beim Rückschritt ja; die Entlastung «wachsen muss sie selbst» nur mit der Vertiefung |
| 16 | Ein Bild, eine Idee; Erleben beschriften | T | wie Selbstprüfung: zwei Ideen; die Sätze sprechen nur die erste an |
| 17 | Keine ungewollten Bedeutungen | T | Die Sätze stehen über Pflanze und Giesskanne wie bei «Zwei Tassen» über zwei Sprechenden. So liest sich das Bild als Gespräch: Die Pflanze (die betroffene Person) sagt «Eine schwierigere Phase entwertet alles.», die Giesskanne (die Angehörigen) antwortet. Im Bestand sind beide Sätze Haltungen von Angehörigen («Weniger hilfreich / Tragfähiger»). Dazu die Nebenbedeutungen der Selbstprüfung (passive Pflanze, ruhende Kanne) (P2c-V-2) |

**Abweichung von der Selbstprüfung** (fett): Punkt 4 T statt E. Die Selbstprüfung bewertet nur die Kernaussage zum Rückschritt. Die Wirkung im Plan hat zwei Teile, und der zweite steht nur in der geschlossenen Vertiefung. Punkt 15 T statt E aus demselben Grund. Punkt 17 T wie in der Selbstprüfung, mit einem weiteren Grund (Zuordnung der Sätze).

**Bildsprache, Fragen B1–B11**

| Frage | «Ein neuer Trieb» |
| --- | --- |
| B1 erster Eindruck | ruhig, alltäglich, freundlich: eine Zimmerpflanze am Fenster, daneben eine Giesskanne |
| B2 Form | organisch, weiche Linien, keine Kästen |
| B3 Ein Bild, eine Idee | nein, zwei: Rückschritt und begrenzter Einfluss |
| B4 Wiedererkennen und Ton | ja beim Satz «Eine schwierigere Phase entwertet alles.»; würdevoll, nicht verniedlichend |
| B5 Platz der Angehörigen | die Giesskanne, aber nur mit Text verständlich |
| B6 Nebenbedeutungen | Gespräch Pflanze gegen Kanne (Punkt 17); die Pflanze wirkt gesund, der Rückschritt ist klein |
| B7 Wirkung | Rückschritt ja, «wachsen muss sie selbst» nur mit Vertiefung |
| B8 Erleben beschriften | ja, zwei Sätze, kein Bildteil beschriftet |
| B9 fachlich vereinfacht | ja, «Grenzen des Bildes» nennt die Grenzen |
| B10 Braucht es ein Bild? | ja für den Rückschritt; die Zahlen daneben sind bewusst Text |
| B11 Freundin-Test | eher ja für «ein Blatt fällt, die Pflanze wächst weiter»; die Giesskanne erklärt sich einer Freundin nicht ohne Worte |
| **Bewertung** | **trägt** für die Kernaussage; zwei Verfeinerungen nötig, damit die Wirkung ganz ankommt (P2c-V-1, P2c-V-2) |

**Befunde Visualisierungs-Check**

- **P2c-V-1 · wichtig · Die Aussage der Giesskanne steht nur in der geschlossenen Vertiefung.**
  - **Beleg:** Punkt 4 und 15; `visualPlan` › `understood`: «Die Giesskanne steht daneben und giesst nicht: Angehörige können Bedingungen anbieten, wachsen muss die Pflanze selbst.»; CLAUDE.md: «die Hauptaussage für Angehörige nie nur in der Vertiefung».
  - **Vorschlag:** «Angehörige können Genesung nicht herstellen.» (Bestand, heute in «Grenzen des Bildes») als letzter Satz in den Kurztext.
  - **Zuständig:** Fachstelle (P2c-F-2 b), danach die bauende Sitzung.
- **P2c-V-2 · optional · Zuordnung der Sätze zu Pflanze und Giesskanne.**
  - **Beleg:** Punkt 17; `visualPlan` › `statement` («Über der Pflanze steht …, über der Giesskanne …»).
  - **Vorschlag:** die zwei Sätze mit den Bezeichnungen des Bestands «Weniger hilfreich» und «Tragfähiger», wie in der Gegenüberstellung darunter (`.puk-say`). So lesen sie als zwei Haltungen und nicht als Gespräch.
  - **Zuständig:** Fachstelle (P2c-F-2 c), danach die bauende Sitzung.

### Teil E · Bedienung und Barrierefreiheit (automatisiert)

Chromium über Playwright, lokal, am Stand `7ee24ba`; alle Werte selbst gemessen.

- **Überlauf:** 180 Messungen, alle 0 px.
  - Seiten: `genesung`, `unterstuetzung`, `diagnose`, `behandlung`, `index`.
  - Breiten: 320, 360, 375, 414, 640, 768, 1024, 1280 und 1440 px; je Theme Standard und «kontrast», je Vertiefungen zu und offen.
  - Zoom 200 % (640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %): alle fünf Seiten 0 px.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps bis zur Fusszeile: `genesung` 21, `unterstuetzung` 22, `diagnose` 30, `behandlung` 35, `index` 17; erster Stopp «Zum Hauptinhalt»; kein Stopp ohne sichtbaren Fokus.
  - Akkordeons: Enter öffnet 3 von 3, 1 von 1, 4 von 4 und 8 von 8, Leertaste schliesst alle. «Grenzen des Bildes» öffnet mit Enter.
- **Ohne Skript:** 3 von 3, 1 von 1, 4 von 4 und 8 von 8 Panels sichtbar.
- **Druck:** alle Panels und «Grenzen des Bildes» sichtbar. PDF je Seite in drei Einstellungen (A4 ohne Rand, A4 15 mm, Letter 12 mm), letzte Zeile jeder Seite gegen alle Titel, Begriffe, Kicker und Vertiefungstitel: 0 Titel allein am Seitenende. Seitenzahl A4 ohne Rand: `genesung` 9, `unterstuetzung` 9, `diagnose` 11, `behandlung` 15.
- **Sprung zum letzten Abschnitt** über die Kapitelübersicht: 1280 × 900, 1920 × 1080 und 360 × 800 px je 24 px auf allen vier Seiten.
- **Kontrast** (WCAG 1.4.3): aller Text mit eigenem Textknoten, Vertiefungen offen, 1280 und 360 px, beide Themes; 146 bis 239 Elemente je Seite, keines unter AA. Tiefster Wert 4,71 : 1 (E-Mail der Absenderin, Standard), im Theme «kontrast» mindestens 5,97 : 1.
- **Nicht prüfbar:** reale Screenreader-Läufe, Hardwaretastatur und Touch. Sie brauchen eine Person und sind offen, nicht bestanden.

### Teil F · Technik und Zuständigkeit (Stichprobe W3)

| Prüfung | Ergebnis (selbst ausgeführt am Stand `7ee24ba`) |
| --- | --- |
| `node tools/build.mjs` | 15 Seiten, Build r4-7, Gate draft: **0 blockierend, 6 Hinweise** (1 × `visual-approval` `v-ge-trieb`, 3 × `placeholder-approval`, `site-url`, `review-report`). `git status` danach ohne Änderung |
| `node tools/gate.mjs --selftest` | **53/53 bestanden** |
| `node tools/gate.mjs --production` | **5 blockierend, 1 Hinweis**: 1 × `visual-approval`, 3 × `placeholder-approval` (`fragen`, `quellen`, `ueber`), 1 × `review-report`; Hinweis `site-url`. Wie im Auftrag 2c-2, Abschnitt 9, erwartet |
| `node abgleich/pruefe-abgleich.mjs` | **6067 Zeilen, 0 ohne Fundstelle** |
| `node abgleich/kennzahlen.mjs` | `genesung` 1620 → 1492, `unterstuetzung` 2010 → 1393, `diagnose` 3769 → 2165, `behandlung` 2696 → 2700; Absicherungen je 100 Wörter 1,98 → 2,21, 0,90 → 1,08, 2,10 → 2,03, 2,74 → 2,59; Semikolons 7 → 0, 7 → 0, 20 → 0, 11 → 0 |
| `node abgleich/verneinung.mjs` | `genesung` 45 von 159 (28 %), `unterstuetzung` 16 von 198 (8 %), `diagnose` 46 von 215 (21 %), `behandlung` 48 von 290 (17 %) |
| `node abgleich/bedienung.mjs` | Tabstopps wie Teil E; Höhe bei 360 px `genesung` 14 461 (Abbildung 766), `unterstuetzung` 13 869, `diagnose` 17 901, `behandlung` 21 460 px |
| Quelltext der vier Seiten | `style`-Attribute 0, Inline-Skripte 0, Hexwerte und `fill`/`stroke` im SVG 0; nur lokale Stylesheets und `interaktion.js`; `_headers` unverändert seit `6213de7` |
| `site.config.json` | alle vier Seiten `status` «published», `navLabel` `null`; `sensitiveTopics` `genesung` keine, `unterstuetzung` «akute-krise», `diagnose` «selbstgefaehrdung», «akute-krise», `behandlung` dazu «gewalt»; `visualPlan` mit einer Zeile je Abschnitt und Quellenblock; `diagnose` und `behandlung` alle Format `text` |

**Kennzahlen der bauenden Sitzungen nachgerechnet**

- **Bestätigt, ohne Abweichung:** Wörter C1 im Lesefluss je Abschnitt und mit Vertiefungen für `diagnose` (1538, 1867), `behandlung` (1677, 2344) und `unterstuetzung` (1105, 1318), `index` 232; `kennzahlen.mjs` für alle vier Seiten (Wörter, Absicherungen von `diagnose` und `behandlung`, Semikolons); `verneinung.mjs` für `diagnose` und `behandlung`; Abgleich (5342 + 405 + 320 = 6067); Tabstopps; Selbsttest und Produktionsgate; Sprung zum letzten Abschnitt; Pfade der Zeichnung.
- **`genesung` C1:** Das Skript der Prüfsitzung ergibt 1160 im Lesefluss (`verlauf` 270) und 1237 mit Vertiefungen, die Selbstprüfung nennt 1164 und 1241. Das ist die bekannte Abweichung der Zählweise bei Abbildungen (4 Wörter; die Selbstprüfung 2c-2 nennt für ihr eigenes Skript ebenfalls 1160). Kein Befund.
- **Nicht nachgeführt:** Die Selbstprüfung 2c-1 nennt für `genesung` 2,17 Absicherungen und 45 von 158 Sätzen mit Verneinung, für `unterstuetzung` 1,12 und 16 von 193. Nach den Korrekturen 2c-2 sind es 2,21 / 45 von 159 und 1,08 / 16 von 198. Die Selbstprüfung 2c-2 führt nur die Wörter nach (P2c-W1-6).
- **Höhen und Druck nach dem Merge:** Am Stand `2d5330b` ergibt `bedienung.mjs` genau die Höhen der Selbstprüfung 2c-2 (z. B. `diagnose` 17 739 px) und der Druck genau ihre Seitenzahlen (`diagnose` 14, `behandlung` 18). Am Stand `7ee24ba` sind alle zwölf Seiten 162 px höher und im Druck kürzer. Ursache ist der Merge von `main` mit Profil 2026.10.1 (`components/bundle.css`, `components/interaktion.js`). Wortlaut und Bedienung ändert er nicht. Kein Befund.

**Zuständigkeit und Krisenzugang** (gebaute Seiten und `content/` von `genesung`, `unterstuetzung`, `diagnose`, `behandlung`, `index`):

- `tel:`-Links: 0. Telefonnummern im sichtbaren Text: 0 (gesucht: «+41», «0800», «0848», Muster «0xx xxx xx xx», 143, 144, 145, 147, 112, 117, 118). `mailto:` nur in der Absenderin und auf `index` › `beratung` (freigegeben).
- Kein Notfallblock, kein Link auf eine Notfallseite.
- **Verweis im Text:** nur über den Platzhalter, Wortlaut aus `responsibility.inline`, keiner in einer Vertiefung oder Figur, höchstens einer je Abschnitt.

| Seite › Abschnitt | Was direkt davor steht | Lage bei 1280 px | trägt er? |
| --- | --- | --- | --- |
| `diagnose` › `zweifel` | «Klare Grenze: … ist die Frage nach der Diagnose nachrangig. Dann holen Sie Hilfe über den Notruf.» | 5572 px | ja |
| `diagnose` › `begleiterkrankungen` | «Bei akuter Gefahr oder Hinweisen auf eine konkrete suizidale Absicht holen Sie sofort Hilfe über den Notruf.» | 9884 px | ja |
| `behandlung` › `kontakt` | «Bei möglicher akuter Gefahr holen Sie sofort Hilfe über den Notruf und warten nicht auf eine Rückmeldung per E-Mail.» | 3519 px | ja |
| `behandlung` › `wartezeit` | «… Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | 11 920 px | ja; die Anleitung davor ist für unklare Dringlichkeit zu schwach (P2c-W1-1) |

Weitere Stellen mit Bezug zu akuter Gefahr ohne Verweis, geprüft: «Akute Gefährdungen … brauchen sofortige Aufmerksamkeit.» (`behandlung` › `therapieformen`) ist eine Aussage zur Behandlungsplanung, keine Handlungsanleitung für Angehörige; «Bei körperlicher Gefährdung braucht es rasch …» steht in einer Vertiefung (P2c-W1-7). `genesung` und `unterstuetzung` haben keine Handlungsanleitung für akute Lagen.

**Freigegebene Seiten unverändert:** Sichtbarer Text (Titel, Kopf, Navigation, `main`, Fusszeile) der gebauten Seiten `verstehen`, `beziehungen`, `grenzen`, `rolle`, `selbstfuersorge`, `kommunizieren`, `krise` und `index` am Stand `6213de7` (Freigabe 2b eingetragen) und `7ee24ba` per Skript verglichen: auf den sieben Themenseiten 0 Unterschiede; auf `index` nur die Einstiege (der Platzhalter «Weitere Einstiege folgen: …» ist ersetzt durch die zwei neuen Einstiege, beauftragt). `git diff 6213de7 7ee24ba --word-diff` über `content/` dieser Seiten: nur die Klasse `puk-site-anchor-end` am Quellenblock (Auftrag 2c-1, Abschnitt 7) und auf `index` die Einstiege.

**Befunde T**

- **P2c-T-1 · optional · Begründung im Plan widerspricht dem Bildausschnitt.**
  - **Beleg:** `site.config.json`, `v-ge-trieb` › `reason`: «Die Skizze ist unverändert übernommen (Pfade, Bildausschnitt `0 40 640 220`).»; gebaut ist `viewBox` «60 44 530 214» (Selbstprüfung 2c-1, Entscheid 4).
  - **Vorschlag:** `reason` nachführen («Pfade unverändert, Bildausschnitt enger»).
  - **Zuständig:** bauende Sitzung.

### Fragen an die Fachstelle

Nach Wichtigkeit sortiert, je mit Empfehlung. Die 18 offenen Fragen der Selbstprüfung 2c-2 gehen darin auf: Nr. 1 → P2c-F-5; Nr. 2, 3 → P2c-F-6; Nr. 4, 5 → P2c-F-7; Nr. 6, 7 → P2c-F-8; Nr. 8, 10 bis 14, 16 → P2c-F-9; Nr. 9 → P2c-F-4; Nr. 15 → P2c-F-3; Nr. 17 → P2c-F-1; Nr. 18 → P2c-F-11. Die zwölf Fragen der Selbstprüfung 2c-1 sind entschieden (Auftrag 2c-2, Abschnitt 1) und nicht erneut gefragt.

1. **P2c-F-1 · Unklare Dringlichkeit auf `behandlung` › `wartezeit`** (Frage 17). Heute: «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» Für die unklare Dringlichkeit fehlt, was Angehörige tun sollen. Soll es (a) heissen: «Bei akuter Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, warten Sie nicht auf einen Therapieplatz und holen sofort Hilfe. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» (nach `krise` › `belastung`, freigegeben; neue Verdichtung), oder (b) bleibt es, weil der Verweis im Text direkt danach den Notfalldienst nennt? **Empfehlung (a):** gleiche Regel wie auf `krise`, und die Anleitung trägt ohne den Verweis.
2. **P2c-F-2 · «Ein neuer Trieb» (`v-ge-trieb`).**
   - (a) Wird die Abbildung fachlich freigegeben (nach Sicht bei 1280 und 360 px)? **Empfehlung: Ja, mit b.**
   - (b) Kommt «Angehörige können Genesung nicht herstellen.» aus «Grenzen des Bildes» als letzter Satz in den sichtbaren Kurztext? Ja/Nein. **Empfehlung: Ja** (P2c-V-1); der Satz ist Bestand und freigegebener Gedanke von `rolle`.
   - (c) Bekommen die zwei Sätze über der Zeichnung die Bezeichnungen «Weniger hilfreich» und «Tragfähiger», damit sie nicht als Gespräch zwischen Pflanze und Giesskanne lesen? Ja/Nein. **Empfehlung: Ja** (P2c-V-2).
3. **P2c-F-3 · Angebotsliste auf `behandlung`** (Frage 15). Die Prüfsitzung konnte keine Website aufrufen. Je Eintrag bitte bestätigen oder ändern:
   - HYPE Züri «Für: Jugendliche ab 13 Jahren»: Die Website nennt laut Auftrag kein Mindestalter. **Empfehlung:** «ab 13 Jahren» nur, wenn die Kinder- und Jugendpsychiatrie es bestätigt, sonst «Für: Jugendliche».
   - ipw: Der Eintrag sagt nichts zum Angebot, nur «Klären Sie die aktuellen Alters- und Aufnahmebedingungen …». Die Website nennt laut Auftrag 17 bis 25 Jahre, aber nicht Borderline oder DBT. **Empfehlung:** behalten, mit einem Satz zum Angebot von der Website (neu, zur Freigabe), z. B. «Psychotherapiestation für junge Erwachsene von 17 bis 25 Jahren.»
   - Sanatorium Kilchberg: Die Website nennt laut Auftrag kein Angebot für Borderline, «Für: Angaben auf der Website». **Empfehlung:** nur behalten, wenn die Fachstelle ein passendes Angebot kennt; sonst entfällt der Eintrag (Grund im Abgleich).
   - Dachverband DBT: deutscher Verband, ob Schweizer Einträge enthalten sind, ist offen. **Empfehlung:** behalten, wenn die Suche Schweizer Einträge findet; sonst entfällt er oder bekommt den Satz «Die Suche umfasst vor allem Angebote in Deutschland.» (neu).
   - Alle 12 externen Links aufrufen und Ziel bestätigen (Teil A2). **Empfehlung: Ja**, vor der Freigabe.
4. **P2c-F-4 · Medikamente** (Frage 9). Der Wortlaut des Bestands auf `behandlung` und der Satz auf `genesung` sind richtig. Der neue Schlusssatz auf beiden Seiten lautet «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.»; auf `behandlung` steht direkt davor «… mit der behandelnden ärztlichen Fachperson geklärt.».
   - (a) Bestätigt die Fachstelle den Wortlaut des Bestands (NICE, Antidepressivum bei zusätzlicher Depression)? **Empfehlung: Ja.**
   - (b) Soll der Schlusssatz auf beiden Seiten «… mit der behandelnden ärztlichen Fachperson …» heissen? Ja/Nein. **Empfehlung: Ja**, weil Medikamente ärztlich verordnet werden und auf `behandlung` sonst zwei Begriffe nebeneinander stehen.
5. **P2c-F-5 · Klassifikation** (Frage 1): Stimmen die zwei neuen Sätze zu DSM-5-TR und ICD-11? **Empfehlung: Ja**; der Inhalt (neun Kriterien, mindestens fünf; Schweregrad, dann 6D11.5; ICD-10-GM 2024, F60.31) entspricht dem Bestand und den Klassifikationen.
6. **P2c-F-6 · Jugendliche und Einbezug** (Fragen 2, 3): Bestätigt die Fachstelle «Konkrete Fragen klären Sie mit der zuständigen Fachperson.» und Schritt 4 «Ob Sie einbezogen werden, hängt vom Einverständnis der betroffenen Person ab.»? **Empfehlung: Ja**; bei Minderjährigen steht das Unterkapitel «Bei Jugendlichen» im selben Abschnitt.
7. **P2c-F-7 · Suizid und akute Gefahr auf `diagnose`** (Fragen 4, 5): Bestätigt die Fachstelle «Depression (Major Depression)» und die zwei Handlungsanleitungen mit «Notruf» («Suizidgefahr», «Gefahr für andere Menschen»)? **Empfehlung: Ja**; Wortlaut wie `krise`, Verweis im Text direkt danach.
8. **P2c-F-8 · Depression und Schuld** (Fragen 6, 7): Tragen die vereinfachte Einschränkung der Zanarini-Studien und der Verweis auf `rolle#schuld`? **Empfehlung: Ja**; `rolle` › `schuld` sagt «Die Verantwortung für eigene verletzende oder gewalttätige Handlungen bleibt bestehen.» (A1 Nr. 71, 73).
9. **P2c-F-9 · Bestätigungen ohne Änderung auf `behandlung`**, je Ja/Nein, **Empfehlung je Ja:**
   - (a) Frage 8: Handlungsanleitung nach den drei Informationswegen.
   - (b) Frage 10: Erklärung von «psychoedukativ» und der Satz zu Family Connections.
   - (c) Frage 11: Kosten und Anordnung (Stand beim BAG bitte prüfen).
   - (d) Frage 12: «Eine pauschale Wartefrist von einem Jahr gibt es dafür nicht.» (Quelle Kanton Zürich bitte prüfen).
   - (e) Frage 13: Musterbrief mit «behandelnde Fachperson».
   - (f) Frage 14: Zuordnung der Punkte zu «Nicht zu erwarten».
   - (g) Frage 16: «auf Borderline abgestimmte» statt «störungsinformierte».
10. **P2c-F-10 · «In anderen Kantonen» auf `behandlung` › `wartezeit`** (P2c-W1-4). Soll vor dem Verweissatz der Bestandssatz stehen: «Fragen Sie in der Hausarztpraxis oder beim psychiatrischen Dienst Ihres Wohnkantons nach Anmeldung, Zuständigkeit und Zwischenversorgung.» (Paarform statt Doppelpunkt)? Ja/Nein. **Empfehlung: Ja**; der Zielabschnitt auf `unterstuetzung` zeigt Angebote für Angehörige, nicht den Weg zur Behandlung.
11. **P2c-F-11 · Name der Gruppe für Eltern** (Frage 18). Soll die Gruppe auf `unterstuetzung` so heissen wie auf der Website der PUK («Gruppentherapie für Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung»)? **Empfehlung: Ja**, wenn das der aktuelle Name ist; der Zwischentitel bleibt.
12. **P2c-F-12 · «Das einzige deutschsprachige Kinderbuch speziell zum Thema Borderline.»** (P2c-W1-5). Soll es heissen: «Ein deutschsprachiges Kinderbuch speziell zum Thema Borderline.»? Ja/Nein. **Empfehlung: Ja**; «das einzige» lässt sich nicht belegen und kann veralten.
13. **P2c-F-13 · Essstörungen auf `diagnose`** (P2c-W1-7). Soll «Bei körperlicher Gefährdung braucht es rasch eine fachliche und medizinische Einschätzung.» (a) in der Vertiefung bleiben oder (b) zusätzlich sichtbar nach der Liste der Begleiterkrankungen stehen? **Empfehlung (a):** Es ist keine Anleitung für eine akute Lage; sichtbar steht der Schutz auf `behandlung` › `therapieformen`, und `diagnose` verweist direkt danach dorthin.
14. **P2c-F-14 · Krankenkasse** (P2c-W1-6). Der Bestand sagt «Beratung kostet nichts und wird nicht an Krankenkassen weitergegeben.»; heute steht das nirgends. Soll der Satz beim Entscheid über die Verweise und die Freigabe 2c auf `unterstuetzung` › `beratung` nach dem Verweissatz auf die Startseite stehen (Bestand, `index` bleibt unverändert)? Ja/Nein. **Empfehlung: Ja**; er beantwortet eine häufige Sorge, die die Startseite offen lässt.
15. **P2c-F-15 · Sprache und Begriffe** (P2c-W2-1, -2, P2c-S-1 bis -3), je Ja/Nein, **Empfehlung je Ja:** «Mögliche Beiträge» statt «Kann beitragen»; «Therapie kann in drei Rahmen stattfinden:» statt «… in drei Formen möglich:»; «Behandlungsteam» statt «Fachteam»; die zwei langen Sätze auf `diagnose` teilen; «Eine Einordnung beruht auf einem Muster über die Zeit, nicht auf einem einzelnen Moment.»
16. **P2c-F-16 · Verweise von freigegebenen Seiten.** Die Vorschläge der Selbstprüfungen (2c-1 Nr. 1 bis 7, 2c-2 Nr. 1 bis 6) sind geprüft: Alle Ziele und Titel stimmen, und jeder genannte Satz davor steht auf der freigegebenen Seite. Sollen sie mit der Freigabe 2c umgesetzt werden? **Empfehlung: Ja**, alle 13; besonders 2c-1 Nr. 1 (`verstehen` › `mythen` → `genesung#forschung`, im Bestand verlinkt) und 2c-2 Nr. 2 (`verstehen` › `mythen` → `diagnose#begleiterkrankungen`, im Bestand verlinkt).
17. **P2c-F-17 · Neue Sätze.** Werden die Sätze der Listen «Neue Sätze zur Freigabe» 2c-1 (Nr. 1 bis 82) und 2c-2 (Nr. 1 bis 252) freigegeben, mit den Änderungen aus P2c-F-1 bis -15? Je Ja/Nein: `genesung` (2c-1 Nr. 1–38, 2c-2 Nr. 248, 249), `unterstuetzung` (2c-1 Nr. 39–78, 2c-2 Nr. 250–252), `index` (2c-1 Nr. 79–82), `diagnose` (2c-2 Nr. 1–109), `behandlung` (2c-2 Nr. 110–247). Gesondert: 2c-2 Nr. 214, 221, 224, 232 (hängen an P2c-F-3), Nr. 243 (P2c-F-1), 2c-1 Nr. 11, 12 und 15 (P2c-F-2). **Empfehlung: Ja.**

### Zählung der Befunde der Prüfrunde 2c

| Stufe | kritisch | wichtig | optional |
| --- | ---: | ---: | ---: |
| W1 | 0 | 2 | 5 |
| W2 | 0 | 0 | 2 |
| S | 0 | 0 | 3 |
| V (Visualisierungs-Check) | 0 | 1 | 1 |
| B (Bedienung und Barrierefreiheit) | 0 | 0 | 0 |
| T (Technik und Zuständigkeit, Stichprobe) | 0 | 0 | 1 |

Dazu 17 Fragen an die Fachstelle (P2c-F-1 bis P2c-F-17).

**Gesamturteil:** Fachlich tragen die vier Seiten. Sie übertragen den Bestand mit seinen Absicherungen, halten Zahlen, Medikamente, Schweigepflicht und Verantwortung im Wortlaut des Bestands oder der freigegebenen Seiten und kommen ohne Nummern und ohne Notfallblock aus. Vor der Freigabe braucht es drei Entscheide: die Anleitung bei unklarer Dringlichkeit (P2c-F-1), die Angaben der Angebotsliste mit einem Aufruf aller Links (P2c-F-3) und die sichtbare Aussage der Giesskanne in «Ein neuer Trieb» (P2c-F-2). Die übrigen Punkte sind klein. Sinnvoll ist eine Korrektur 2c-K für die Entscheide und danach eine kurze Nachprüfung durch eine Sitzung, die weder gebaut noch korrigiert hat.

**Nicht geprüft, und warum:**

- **Externe Links und Angaben der Angebote:** aus dieser Umgebung gesperrt (Proxy `CONNECT` 403, WebFetch ohne Namensauflösung). Geprüft ist nur, dass jede Adresse der Adresse im Bestand oder im Auftrag entspricht.
- **Quellen im Original:** NICE CG78 (Empfehlungen 1.3.5.1 bis 1.3.5.3, 1.3.6.2, Vollleitlinie Kapitel 8.3), NICE NG222 (1.2.8 bis 1.2.11, 1.11.2), Guillén et al. (2024), Cohen et al. (2024), Zanarini et al. (2010) nicht eingesehen. Die Aussagen sind gegen den Bestand und das Fachwissen der Prüfsitzung geprüft, nicht an der Quelle.
- **Angaben in den Buchbeschreibungen** (z. B. «Aguirre leitet das McLean-Hospital-Programm für Adoleszente.»): wörtlich aus dem Bestand, nicht geprüft.
- **Reale Screenreader-Läufe, Hardwaretastatur und Touch:** brauchen eine Person (Teil E).
- **Vorschau auf Netlify:** nicht aufgerufen; geprüft ist der gebaute Stand im Repository über einen lokalen Server.
- **Zweite, unabhängige Prüfsitzung:** gibt es für diese Runde nicht.

## Nachprüfung 2b-K (11.10.2026, Stand f9e2314)

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `f9e2314` (Merge von PR #20; Korrektur `c0b312c`). «Vorher» ist `ac7ea04`, die Grundlage der Korrektur. Seine Seiten sind gleich wie im Stand der Prüfrunde 2b (`26af566`): `git diff 26af566 ac7ea04` zeigt nur `PRUEFBERICHT.md` und `KORREKTUR-ETAPPE-2B.md`. Auftrag ist `KORREKTUR-ETAPPE-2B.md`, Abschnitt 8 («Nachprüfung»). Die Prüfsitzung hat weder Etappe 2b gebaut noch 2b-K umgesetzt. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht.

**Vorgehen**

- **Gelesen:**
  - `KORREKTUR-ETAPPE-2B.md`
  - die Selbstprüfung «Korrektur 2b-K» (alle sieben Teile)
  - aus der Prüfrunde 2b die Teile A3, C1 und C2 sowie die Fragen P2b-F-1 bis -12
  - `abgleich/README.md` mit den neuen Statuswerten und den Zählweisen
  - der ganze Diff `ac7ea04..f9e2314` (12 Dateien)
- **Seiten:** Ein Skript der Prüfsitzung zerlegt `content/kommunizieren.html` und `content/krise.html` (vorher und nachher) in Textblöcke mit Abschnitt und Platzhalter. Ein `diff` vergleicht die Blöcke, und jede Änderung ist einem Punkt des Auftrags zugeordnet. Die Zeichnung «Zwei Tassen» ist Pfad für Pfad verglichen.
- **Abgleich:**
  - Alle 60 geänderten Zeilen sind von Hand gelesen: 53 mit Status 2b-K und 7, bei denen nur die Bemerkung nachgeführt ist.
  - Für 29 geänderte Aussagen ist der Bestandssatz direkt in `bestand/borderline-angehoerige/texte/` nachgeschlagen (Branch `origin/borderline-bestand`; Teil A, Tabelle 2).
  - Die Bemerkungen aller acht Tabellen sind nach Begriffen durchsucht, die mit 2b-K entfallen sind.
- **Werkzeuge:** in einem eigenen Arbeitsbaum ausgeführt (`git worktree` ausserhalb des Repositorys), am Stand `f9e2314` und am Stand vorher.
  - Der Build schreibt die Seiten Zeichen für Zeichen gleich (`git status` danach leer).
  - Zwei lokale Server (`python3 -m http.server`), Chromium über Playwright.
- **Eigene Skripte** (nicht committet):
  - Zählweise C1 der Prüfrunde 2b im Browser
  - Lesefluss wie `kennzahlen.mjs`
  - Lage der Verweise im Text
  - Überlauf, Tastatur und Druck
  - Bildschirmfotos
  - Liste gegen Seiten, Bestand und Abgleich

**Ergebnis in Kürze**

- **Abschnitte 3 bis 7:** wie beauftragt umgesetzt, im Wortlaut des Auftrags. Keine Änderung, die der Auftrag nicht nennt. `index` und die Seiten der Etappen 1 und 2a sind unverändert.
- **Zahlen der Selbstprüfung:** Alle stimmen.
  - C1 je Seite und Abschnitt auf das Wort, Verweise im Text auf ±1 px.
  - Gates, `pruefe-abgleich.mjs`, `kennzahlen.mjs`, `verneinung.mjs` und `bedienung.mjs` ergeben dieselben Werte.
  - Nur zwei Einzelposten der «Gründe» weichen um je ein Wort ab, die Summe stimmt (N2bK-2).
- **Liste «Neue Sätze zur Freigabe»:** Sie enthält jeden Satz, den 2b-K neu bringt oder neu fasst. Als Grundlage der Freigabe ist sie nicht vollständig (N2bK-1):
  - Ihr Kopf verspricht alle Sätze, die nicht wörtlich aus dem Bestand stammen. Die Regel von 2b fehlt: Umformulierte Einzelsätze stehen nur im Abgleich.
  - Zwei Verdichtungen aus 2b fehlen, obwohl die Liste sie nach ihrer eigenen Regel enthalten müsste. Sie stehen nirgends im Bericht.
- **«Aufgefallen, nicht geändert»:** Alle sechs Punkte treffen zu. Punkt 1 und 2 sind Folgeänderungen. Punkt 3 ist eine Frage an die Fachstelle. Punkt 4 und 6 sind Strukturvorschläge. Punkt 5 ist entschieden.
- **«Zwei Tassen»:** Die Zeichnung trägt nach dem Verschieben, der Freundin-Test der Prüfsitzung ist bestanden. Die Freigabe bleibt ausstehend.

### Teil A · Abschnitte 3 bis 7 gegen `kommunizieren`, `krise` und den Abgleich

| Punkt | Auftrag | Seite (Stand `f9e2314`) | Abgleich | Urteil |
| --- | --- | --- | --- | --- |
| 3 a Reihenfolge in `belastung` | 1. Handlungsanleitung, 2. Platzhalter, 3. Satz zur Fachstelle, 4. «Die drei Bereiche unten …» | Die ersten vier Blöcke von `belastung` stehen genau so. «Diese Seite ersetzt keine professionelle Krisenberatung.» kommt auf `krise` nicht mehr vor (Quelltext und gebaute Seite: 0) | c29 und c65 «zusammengeführt (2b-K)», neue Fassung: Satz zur Fachstelle; die Bemerkung nennt den Hinweis in der Fusszeile. c1: Bemerkung nachgeführt | erfüllt |
| 3 a Handlungsanleitung | «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, holen Sie sofort Hilfe und schützen sich selbst.» | wörtlich, erster Absatz | c2 «zusammengeführt (2b-K)», c68 «umformuliert (2b-K)», je P2b-F-2 | erfüllt |
| 3 a Bereiche und Plan | «Die Bereiche bewerten …»; «Wenn Sie nicht wissen, ob die Person einen Plan hat, bedeutet das keine Sicherheit.» | beide wörtlich | c34 und c69 «umformuliert (2b-K)», P2b-S-3 | erfüllt |
| 3 b `waehrend` | unverändert | Blockvergleich: kein Block in `waehrend` geändert. «Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.», direkt danach der Platzhalter | – | erfüllt |
| 3 c 1 Anfang von `sagen` | Handlungsanleitung für Bedrohung und Platzhalter nach dem ersten Absatz | so, vor der Begriffsliste «Da sein …» | c106 und c279 «zusammengeführt (2b-K)», P2b-F-1 | erfüllt |
| 3 c 2 «Da sein» | Satz mit «Leitstelle» entfällt, der Satz zur Nähe bleibt | so | c106 | erfüllt |
| 3 c 3 «Wenn ein Gespräch kippt» | drei Sätze und ein neuer Verweissatz mit Link `kommunizieren.html#kippen` | Wortlaut gleich. «Ein Satz kann so klingen: …» und «Zum Aussteigen reicht: …» stehen in einem Absatz, wie vorher. Der Link ist ein Tabstopp; das Ziel `#kippen` gibt es | c263 «umformuliert (2b-K)», c303 «neu (2b-K)» | erfüllt (Absatz: Teil E, Punkt 6) |
| 3 c 4 Entfallen | Satz zur Schrittfolge, Liste «Verbinden / Kontakt / Grenze und Plan», «Bei Bedrohung oder Gewalt gehen Sie auf Abstand und holen Hilfe.» | alle drei entfallen | c252 und c254 bis c261 «entfällt (2b-K)» mit «verlinkt auf `kommunizieren#kippen`, P2b-F-8» | erfüllt (c253: N2bK-3) |
| 3 d `danach` | «Bei möglicher unmittelbarer Lebensgefahr holen Sie sofort Hilfe über den Notruf.», Platzhalter vor «Für die betroffene Person» | so | c139 «umformuliert (2b-K)», c190 «zusammengeführt (2b-K)» | erfüllt |
| 3 e Ergebnis | sechs Verweise im Text, je direkt nach einer Handlungsanleitung; kein «Leitstelle», kein «Rettungsdienst» | Sechs Platzhalter in `belastung`, `waehrend`, `sagen`, `suizid`, `danach` und `bleibt`. Das Element davor ist jedes Mal die Handlungsanleitung; keiner steht in einer Vertiefung oder Figur, einer je Abschnitt. «Leitstelle», «Rettungsdienst», «Fachteam», `tel:`: 0 (Quelltext und gebaute Seite mit Meta). «Notruf»: 3 | c283: Bemerkung nennt die sechs Abschnitte | erfüllt |
| 4 a `vermeiden` | Titel und Einleitung ohne «eher» | wörtlich. Die sechs Listenpunkte, der Kicker «05 · Was Sie vermeiden» und die Kapitelübersicht sind unverändert | c126 «umformuliert (2b-K)», c308 «neu (2b-K)» | erfüllt (Meta-Beschreibung: Teil E, Punkt 1) |
| 4 b `suizid` | Quellenzeile mit WHO (2026) | wörtlich. Der Text des Abschnitts ist unverändert. Die Quelle heisst im Bestand (`quellen.md`) und auf `verstehen` gleich | c123 und c124 «zusammengeführt (2b-K)» | erfüllt |
| 4 c Nachsorge | drei Sätze mit der betroffenen Person als Subjekt | alle drei wörtlich. «Welche fachliche Nachsorge nötig ist, …» in `danach` ist unverändert | c188, c204 und c213 «umformuliert (2b-K)», P2b-F-7 | erfüllt |
| 5 a «Pause statt Streit» | Einleitung, drei Begriffe, Kürzung K-K-a1 | Einleitung wörtlich. Die Begriffe «Wir können sprechen.», «Es wird eng.» und «Es ist gerade zu viel.» sind die Stellen 1 bis 3 der Anspannungskurve auf `verstehen` › `anspannung`; die Kurve hat vier Stellen, «Drei Stellen» stimmt. «… Stoppen Sie, und schaffen Sie Abstand.». «Ich merke, es wird schwierig. Ich unterbreche das Gespräch jetzt.» bleibt; der Verweissatz steht nach der Liste | k764, k765 und k770, k778, k784 «umformuliert (2b-K)», k968 «neu (2b-K)»; k787 bis k789, k803 und k659 zu K-K-a1; k758 und k776: Bemerkung nachgeführt | erfüllt |
| 5 a Satz zu Grenzen | «Grenzen dafür, wie lange oder wann Sie sprechen, wirken am besten, …» | wörtlich | g208 «umformuliert (2b-K)» | erfüllt |
| 5 b Validierung | Satz zu Linehan entfällt; «Die Stufen sind …»; «Übernehmen heisst hier: …» | so | k28 «entfällt (2b-K)» mit «Zuschreibung nicht an der Quelle geprüft, P2b-F-9»; k30; g679, g683 und g692 | erfüllt |
| 5 c `zuhoeren` | K-K-a3, K-K-a2, Bestandswortlaut b184 | alle drei wörtlich; «Ein hilfreicher Satz kann unterstützen, aber die Reaktion der anderen Person nicht garantieren.» bleibt | k5, k12, k20 und k14 «zusammengeführt (2b-K)», k21 «umformuliert (2b-K)»; b184 «wörtlich» | erfüllt |
| 5 d `worte` | ein Satz | wörtlich | k837 «umformuliert (2b-K)» | erfüllt |
| 5 e Nicht ändern | vier Aussagen in `worte`, «Typische schwierige Situationen», Satz zu Dazzi et al., Namen und «Übernehmen / Spiegeln» | Blockvergleich: kein Block in `beispiele` und im Text von `suizid` geändert. In `worte` ist nur die Einleitung geändert (5 d); die vier Aussagen sind vollständig | – | erfüllt |
| 6 «Zwei Tassen» | je etwa 60 Einheiten zur Mitte, spiegelgleich zu x = 320; fest bleiben Tisch und Bildausschnitt | Pfade 2 bis 6 je +60, Pfade 7 bis 11 je −60 Einheiten waagrecht; y unverändert. Tisch und `viewBox="0 60 640 200"` sind gleich. Jedes Punktpaar links/rechts summiert sich zu 640. Tassenkörper 190–258 und 382–450, frei 124 Einheiten. Klassen nur `puk-vis-scene__ln`, `__ln--thin`, `__paper`, `__soft`; 0 `style`, 0 Hexwerte. `p.puk-sr` und `statement`: «stehen nebeneinander auf einem Tisch»; `approvalStatus` «ausstehend» | k964 «neu (2b-K)» | erfüllt (Ansicht: Teil C) |
| 7 Plan | vier Zeilen | `v-ko-moment`, `v-kr-sagen` und `v-kr-danach` › `reason` sowie `v-ko-tassen` › `statement` wie beauftragt. `understood` und `resonance` von `v-ko-tassen` sagen nicht «gegenüber» | – | erfüllt (`reason` von `v-ko-tassen`: Teil E, Punkt 2) |
| 7 Abgleich (P2b-W1-7) | k25, k726, c190, k572, k764, k765, k968 | Alle Bemerkungen sagen, was der Auftrag verlangt; Nr. 17 der Liste von 2b entfällt | – | erfüllt |
| 7 übrige Zeilen, Regeln aus Abschnitt 2 | Status mit «(2b-K)» und Nummer der Frage; neue Statuswerte im README; `pruefe-abgleich.mjs` ohne Zeile ohne Fundstelle | 53 Zeilen (k 20, c 28, g 4, b 1). Jede nennt eine Frage oder einen Vorschlag («P2b-…») und den früheren Stand («bis 2b-K»). Vier neue Statuswerte sind in `abgleich/README.md` erklärt. `pruefe-abgleich.mjs`: Eine Zeile behandelt «entfällt (2b-K)» wie «entfällt», die Prüfung «kein Ort, keine neue Fassung» bleibt, also keine Lockerung | – | erfüllt bis auf c253 (N2bK-3) |
| Abschnitt 1 «Geändert werden nur …» | `kommunizieren`, `krise`, Plan, Abgleich | Diff: in `content/` und bei den gebauten Seiten nur `kommunizieren` und `krise`; `site.config.json` vier Zeilen im Plan; Abgleich mit `pruefe-abgleich.mjs` (eine Zeile, nötig für den neuen Status); Bericht. CSS und Skripte der Seiten sind unverändert | – | erfüllt |

**Aussagen gegen den Bestand.** Die 29 Aussagen sind im Bestand nachgeschlagen (Datei in `texte/`). Die Spalte «trägt» sagt, ob der Stand nach 2b-K die Aussage trägt. b = `unterstuetzen--krise.md`, h = Handout (`materialien--text--…`).

| Nr. | Abgleich | Bestand | Stand nach 2b-K | trägt |
| --- | --- | --- | --- | --- |
| 1 | c2 | «Bei akuter Gefahr oder wenn Sie die Dringlichkeit nicht sicher einschätzen können, wenden Sie sich an den zuständigen Notfalldienst.» (b) | Nr. 44a der Liste; die Stellen nennt der Verweis im Text direkt danach | ja; die Unsicherheit steht wieder in der Anleitung |
| 2 | c29 | «Diese Inhalte ersetzen keine professionelle Krisenberatung.» (b) | Satz zur Fachstelle und Hinweis in der Fusszeile | ja (P2b-F-6) |
| 3 | c65 | «Diese Einteilung ersetzt keine professionelle Krisenberatung.» (b) | ebenso; dazu «Die Bereiche sind keine Sicherheitsbewertung. …» in `belastung` | ja |
| 4 | c34 | «Sie bewerten keine Diagnose …» (b) | «Die Bereiche bewerten keine Diagnose …» | ja |
| 5 | c68 | «Bei unmittelbarer Gefahr holen Sie sofort Hilfe und schützen sich selbst.» (b) | Nr. 44a, erweitert | ja |
| 6 | c69 | «… ein unbekannter Plan bedeutet keine Sicherheit.» (b) | Nr. 45b | ja, klarer |
| 7 | c106 | «Bei Bedrohung bringen Sie sich in Sicherheit und informieren die Leitstelle.» (b) | Nr. 49a, «Notruf» statt «Leitstelle» | ja (P2b-F-1) |
| 8 | c279 | «Bei Bedrohung oder Gewalt gehe ich auf Abstand und hole Hilfe.» (h `krisenkommunikation`) | Nr. 49a | ja |
| 9 | c123 | «Dazzi et al. (2014) — Übersicht zum direkten Fragen nach Suizidgedanken; …» (b) | Quellenzeile von `suizid`, ergänzt um WHO (2026) | ja |
| 10 | c126 | «Was Sie in der Krise vermeiden sollten» (b) | «Was Sie in einer Krise vermeiden sollten» | ja, Bestand |
| 11 | c139 | «… bei möglicher unmittelbarer Lebensgefahr rufen Sie den Rettungsdienst.» (b) | Nr. 55a, «Notruf» | ja |
| 12 | c190 | «Bei erneuten Sorgen um die Sicherheit sofort Hilfe holen, unabhängig vom Zeitpunkt» (b) | «Bei erneuter Sorge holen Sie eine professionelle Einschätzung.», Nr. 55a und «Nötige medizinische oder psychiatrische Hilfe hat keine Wartefrist.» | ja; «sofort» nur bei Lebensgefahr, so in der Bemerkung genannt (P2b-W1-7) |
| 13 | c188 | «Fachliche Nachsorge und erreichbare Kontakte mit dem Behandlungsteam klären» (b) | Nr. 57a | ja (P2b-F-7) |
| 14 | c204 | «Mit dem Behandlungsteam klären, welche professionelle Unterstützung vorgesehen und erreichbar ist» (b) | Nr. 57b | ja; Angehörige nur, wenn die Person das möchte |
| 15 | c213 | «… klärt die betroffene Person mit dem Fachteam.» (b) | «… mit dem Behandlungsteam.» | ja |
| 16 | c252 | «Die Grundidee ist bewusst knapp gehalten: zuerst Verbindung herstellen, dann Kontakt halten, dann Grenze und nächsten Schritt benennen.» (h `krisenkommunikation`) | entfällt; die Schritte stehen auf `kommunizieren` › `kippen` («Eigenes Tempo senken», «Verbinden», «Begrenzen oder beenden»), verlinkt | ja, sinngemäss (P2b-F-8) |
| 17 | c255 | «Ich sehe, dass du gerade sehr aufgebracht bist.» (h) | entfällt; der Standardsatz «Ich sehe, dass du gerade sehr angespannt bist. …» bleibt (c264) | ja |
| 18 | c260, c261 | «So kann ich nicht weiterreden. Ich beende das Gespräch jetzt.» (h) | «entfällt (2b-K)» wie beauftragt; derselbe Wortlaut steht weiter im Standardsatz (c265, c266) und im Ausstiegssatz (c277) | ja; die Aussage geht nicht verloren |
| 19 | k28 | «Linehan beschreibt fünf aufeinander aufbauende Formen und als sechste Form radikale Echtheit.» (`kommunizieren.md`) | entfällt; «Die sechs Stufen lehnen sich an die Validierungsstufen von Linehan … an.» trägt | ja (P2b-F-9) |
| 20 | k30 | «Sie sind keine Pflichtfolge, …» (`kommunizieren.md`) | «Die Stufen sind keine Pflichtfolge, …» | ja |
| 21 | k12, k20 | «Zuhören, nachfragen und die eigene Sicht behalten dürfen gleichzeitig möglich sein.», «Sie dürfen zuhören, nachfragen oder eine Pause machen.» (`kommunizieren.md`) | Nr. 1a («… und dabei Ihre eigene Sicht behalten.») | ja; «gleichzeitig» als «dabei» |
| 22 | k14 | «Kurze Sätze und Pausen können helfen; eine bestimmte Reaktion lässt sich nicht garantieren.» (`kommunizieren.md`) | Nr. 1b und «Ein hilfreicher Satz kann unterstützen, aber die Reaktion der anderen Person nicht garantieren.» im selben Abschnitt | ja |
| 23 | b184 | «Verschiedene Gefühle, Meinungen oder Bedürfnisse nach Nähe sind nicht automatisch ein Zeichen fehlender Liebe.» (`verstehen--beziehungen.md`) | wörtlich | ja |
| 24 | k764 | «Die Begriffe «stabil», «Warnstufe» und «Eskalation» sind eine redaktionelle Orientierung.» (h `pause-statt-streit`) | Nr. 17a, Begriffe der Kurve | ja (P2b-F-5) |
| 25 | k765 | «Sie beschreiben keine verbindlichen Stufen und erlauben keine sichere Beurteilung des inneren Zustands einer Person.» (h) | Nr. 17b | ja |
| 26 | k789 | «Ob und wann ich wieder ansprechbar bin, entscheide ich später.» (h) | Der Ausstiegssatz bei «Es ist gerade zu viel.» entfällt. Die Aussage tragen «Ob und wann ein neuer Kontakt für Sie möglich und sicher ist, können Sie später in Ruhe entscheiden.» (k659) und «Nächster Schritt» | ja. Als neue Fassung nennt k789 den Beispielsatz mit «Morgen kann ich dir sagen, …» (Bestand `kommunizieren.md`), wie es der Auftrag vorgibt; die Aussage «später, ohne Frist» trägt der Satz danach |
| 27 | k837 | «Die Sätze sind Beispiele und nicht typisch für alle Menschen mit Borderline.» (h `wenn-worte-treffen`) | Nr. 32a | ja |
| 28 | g208 | «Zeitgrenzen wirken am besten, wenn Sie sie in einer ruhigen Situation ankündigen — nicht mitten in einem Konflikt.» (`grenzen.md`) | Nr. 24a | ja; hat jetzt einen Bezug auf der Seite |
| 29 | g679 | «Aus einer Beobachtung wird die Annahme, Sie müssten das Erleben oder die Situation der anderen Person lösen.» (h `spiegeln-statt-aufsaugen`) | Nr. 15, «Übernehmen heisst hier: …» | ja |

Keine Sicherheitsaussage ist ersatzlos entfallen. Es gibt keine neue absolute Aussage über die betroffene Person.

### Teil B · Zahlen der Selbstprüfung nachgerechnet

**Wörter C1.** Die Zählweise der Prüfrunde 2b (Teil C1) ist als Skript im Browser nachgebaut. Am Stand vorher ergibt sie genau die Werte der Prüfrunde 2b, je Abschnitt gleich. Damit ist sie dieselbe Zählweise.

| Seite | C1 im Lesefluss je Abschnitt (nachher) | C1 im Lesefluss vorher → nachher | mit Vertiefungen | Sätze im Lesefluss / mit Verneinung | Selbstprüfung |
| --- | --- | ---: | --- | --- | --- |
| `kommunizieren` | Kopf 28 · `zuhoeren` 176 · `anerkennen` 613 · `moment` 374 · `kippen` 419 · `worte` 269 · `beispiele` 516 · `rollen` 37 | 2458 → 2432 | 3126 → 3100 | 258 → 251 / 70 → 68 (27 %) | stimmt auf das Wort |
| `krise` | Kopf 36 · `belastung` 302 · `waehrend` 215 · `sagen` 239 · `suizid` 182 · `vermeiden` 56 · `danach` 286 · `bleibt` 206 | 1507 → 1522 | 1919 → 1945 (`danach` 671 → 709) | 159 → 153 / 39 → 37 (24 %) | stimmt auf das Wort |

- **Gründe** je Abschnitt nachgezählt: Alle Posten stimmen bis auf `sagen`. Dort hat die Schrittfolge mit Einleitung 47 Wörter (18 + 9 + 7 + 13), nicht 46. Die neue Handlungsanleitung hat 18 Wörter, nicht 17. Die Summe −24 stimmt (N2bK-2).
- **Weitere Kennzahlen:** Alle Werte stimmen.
  - `kennzahlen.mjs` gesamt: 3370 → 3344 und 2075 → 2117.
  - Lesefluss: 2702 → 2676 und 1663 → 1694 (gleiche Zählung ohne `.puk-acc__panel`).
  - Absicherungen je 100 Wörter: 2,64 → 2,69 und 2,17 → 2,13. Semikolons: 0 und 1.
  - `verneinung.mjs`: 83 von 402 → 81 von 395 und 52 von 241 → 50 von 235.
- **Ziel «höchstens etwa 2500»:** weiter erreicht.

**Verweise im Text** bei 360 × 800 px, gemessen nach dem Laden der Schriften. Die Werte sind Oberkante ab Abschnitt / ab Titel, Unterkante ab Abschnitt und Lage auf der Seite. Das Element davor ist jedes Mal ein Absatz mit der Handlungsanleitung der Tabelle «Verweise im Text».

| Nr. | Seite › Abschnitt | Prüfsitzung | Selbstprüfung | Urteil |
| --- | --- | --- | --- | --- |
| 1 | `kommunizieren` › `kippen` | 605 / 522 · 761 · 13 056 | 605 / 521 · 761 · 13 056 | stimmt |
| 2 | `kommunizieren` › `worte` | 1854 / 1771 · 2010 · 17 912 | 1855 / 1771 · 2011 · 17 912 | stimmt |
| 3 | `krise` › `belastung` | 319 / 237 · 475 · 1663 | gleich | stimmt |
| 4 | `krise` › `waehrend` | 807 / 724 · 963 · 4693 | gleich | stimmt |
| 5 | `krise` › `sagen` | 454 / 371 · 610 · 6215 | 453 / 370 · 609 · 6215 | stimmt |
| 6 | `krise` › `suizid` | 438 / 355 · 594 · 8408 | 438 / 354 · 594 · 8408 | stimmt |
| 7 | `krise` › `danach` | 404 / 321 · 560 · 11 062 | gleich | stimmt |
| 8 | `krise` › `bleibt` | 801 / 718 · 957 · 14 818 | 801 / 717 · 957 · 14 818 | stimmt |

Die Abstände zwischen den Verweisen auf `krise` betragen 3030, 1522, 2193, 2654 und 3756 px, wie angegeben «1522 bis 3756». Seitenhöhe bei 360 px: `kommunizieren` 24 625 px, `krise` 16 671 px.

**Gates und Skripte** (Arbeitsbaum am Stand `f9e2314`):

- `node tools/build.mjs`: 0 blockierend, 11 Hinweise (1 × `visual-approval`, 8 × `placeholder-approval`, `site-url`, `review-report`). Kein Hinweis `inline-ref`. Die geschriebenen Seiten sind gleich wie im Commit.
- `node tools/gate.mjs --selftest`: 53/53.
- `node tools/gate.mjs --production`: 10 blockierend (1 × `visual-approval`, 8 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`site-url`), wie bisher.
- `node abgleich/pruefe-abgleich.mjs`: 4502 Zeilen, 0 ohne Fundstelle.
  - Hinweis für künftige Prüfungen: Ohne den Branch `origin/borderline-bestand` meldet das Skript 659 Zeilen ohne Fundstelle, weil es die Bestandszitate nicht findet. Vorher `git fetch origin borderline-bestand`.
- `node abgleich/bedienung.mjs`:
  - `kommunizieren` 32 Tabstopps, 24 625 px (vorher 24 890), Zwei Tassen 716 px.
  - `krise` 25 Tabstopps, 16 671 px (vorher 16 436).
  - Übrige Seiten vorher und nachher gleich: `index` 15 / 4636, `verstehen` 20, `beziehungen` 18, `grenzen` 23, `rolle` 30, `selbstfuersorge` 28.
  - Kein Tabstopp ohne sichtbaren Fokus.

**Stichprobe Bedienung und Druck:**

- **Überlauf:** kein waagrechter Überlauf auf `kommunizieren` und `krise`.
  - bei 320, 360, 414, 640, 768, 1024, 1280 und 1440 px, Vertiefungen zu und offen (32 Messungen)
  - ohne Skript bei 320, 360 und 640 px (alle Panels offen)
  - bei 200 % Zoom (640 CSS-px bei Faktor 2), mit und ohne Skript
- **Tastatur:** Enter öffnet und Leertaste schliesst 9 von 9 und 4 von 4 Vertiefungen.
- **Druck** (`print`): 9 von 9 und 4 von 4 Panels sowie «Grenzen des Bildes» sichtbar. Die zwei geänderten Sätze in den Vertiefungen von `danach` sind sichtbar.
- **Technik:** 0 `style`, 0 Hexwerte, 0 `tel:` und keine Telefonnummer in den zwei Quelltexten.

### Teil C · «Zwei Tassen» nach dem Verschieben

**Bildschirmfotos** (Chromium, Faktor 2): die Abbildung bei 1280 und 360 px, je Standard und «kontrast», vorher und nachher. Acht Fotos, angesehen, nicht committet.

- **Masse bei 1280 px:**
  - Die Zeichnung ist 760 px breit.
  - Tassenkörper bei 313–395 und 541–623 px im Fenster (vorher 242–323 und 613–694).
  - Satz links bei 88–390 px, rechts bei 546–848 px.
  - Die Werte der Selbstprüfung stimmen.
- **Masse bei 360 px:** Die Tassen sind 34 px breit und stehen 62 px auseinander. Die Sätze stehen untereinander über der Zeichnung.
- **«kontrast»:** Die Linien sind dunkler, Fläche und Tassen gleich, nichts verschwindet.
- **Wirkung (Prüfsitzung):**
  - Die zwei Tassen stehen jetzt im mittleren Teil desselben Tisches, nahe beisammen, beide dampfen, die Henkel zeigen nach aussen. Das liest sich als zwei Menschen, die zusammen Tee trinken. Die leere Mitte von vorher ist weg.
  - Bei 1280 px steht der rechte Satz mit seiner Randlinie genau über der rechten Tasse. Der linke beginnt am linken Rand der Abbildung, etwa 225 px vor seiner Tasse, und endet über ihr. Die Zuordnung links ist deshalb lockerer als rechts, bleibt aber über die Seite (links/rechts) klar.
  - Kein Befund; Hinweis für R2.
- **Freundin-Test (Prüfsitzung):** bestanden. Eine Angehörige könnte das Bild einer Freundin zeigen und sagen: «So sitzen wir da. Die eine Person sagt den harten Satz, die andere antwortet, ohne sich zu verteidigen, und beide bleiben am selben Tisch.» Ohne die Sätze bleibt ein ruhiges Bild von zwei Menschen beim Tee; die Aussage tragen die Sätze, wie im Plan vorgesehen.
- **Visualisierungs-Check:** Die geänderten Punkte 1, 2, 8, 9, 12 und 17 der Selbstprüfung sind nachgeprüft, die Bewertungen bestätigt (E, E, E, T, E, T). Punkt 14 bleibt N, bis die Fachstelle die Abbildung freigibt (P2b-F-11 b).

### Teil D · Liste «Neue Sätze zur Freigabe»

- **Umfang:** 85 Zeilen.
  - Aus der Liste von 2b stammen 70 Zeilen; 3 davon entfallen mit Grund (Nr. 17, 44, 50).
  - 18 Einträge sind neu: 1a, 1b, 14a, 17a, 17b, 17c, 19a, 24a, 32a, 44a, 45a, 45b, 49a, 54a, 55a, 57a, 57b, 64a.
  - 6 Einträge sind geändert: 4, 11, 15, 51, 52, 55.
  - Die Nummern von 2b bleiben.
- **Gegen 2b-K:** Jeder Satz, den die Korrektur neu bringt oder neu fasst, steht in der Liste, mit Ort, Art und Abgleichzeile (Blockvergleich, Teil A). Darin enthalten sind die drei Begriffe der Kurve (17c), die Kurzbeschreibung von «Zwei Tassen» (11) und die Quellenzeile (54a). Sätze, die in einer geänderten Abgleichzeile stehen, aber selbst gleich geblieben sind, fehlen zu Recht, z. B. «Bei Unsicherheit ist eine professionelle Einschätzung sinnvoll.» (c69).
- **Zitate:** 97 Zitate auf oberster Ebene sind wörtlich auf der genannten Seite gefunden; Teile mit «…» sind je für sich geprüft. Die Selbstprüfung nennt 98, sie zählt anders. Kein Befund.
- **Ganze Seiten:** Ein Skript der Prüfsitzung prüft jeden Satz auf `kommunizieren` und `krise` gegen den Bestand (alle 73 Dateien), die Liste und den Abgleich. Gezählt sind alle Sätze mit Vertiefungen, Titeln und Kurzbeschreibung, maschinell in Satzteile getrennt.
  - 223 Satzteile stehen nicht wörtlich im Bestand und nicht in der Liste (143 auf `kommunizieren`, 80 auf `krise`).
  - Davon sind 82 «umformuliert (2b)», 39 «verschoben (Vertiefung, 2b)», 28 Bezeichnungen und 27 «übernommen» mit geänderten Satzzeichen (z. B. Semikolon durch Punkt).
  - 19 sind «zusammengeführt», 5 «verschoben».
  - 17 haben keine eigene Zeile: Einleitungen wie «Zum Beispiel:», «Oder:» und «Was Sie tun können:», Bezeichnungen der Beispiele, der Bildtitel.
  - 6 stehen in Zeilen mit 2b-K oder «neu (2b)» und sind gleich geblieben oder als Bezeichnung gelistet.
- **Regel von 2b:** Nach ihr stehen umformulierte Einzelsätze nur im Abgleich. Fast alle 223 fehlen deshalb zu Recht. Nach derselben Regel gehören aber drei Stellen in die Liste und fehlen:
  - «Legen Sie sich einen Satz für eine Pause zurecht, der für Sie natürlich klingt und kein Versprechen enthält, zurückzukommen.» (`kommunizieren` › `moment`, «Was Sie tun können»). Das ist eine Verdichtung aus k807, k808 und k931. Der Satz direkt danach aus denselben Zeilen steht als Nr. 21 in der Liste.
  - «Schreiben Sie zwei oder drei typische Grenzsätze vorab auf, und üben Sie sie laut in Ihrer eigenen Sprache.» (`kommunizieren` › `kippen`, «Was Sie tun können»). Das ist eine Verdichtung aus g599, g600, k723 und k929.
  - Der Bildtitel «Abbildung 1 · Zuhören, ohne zuzustimmen». Kernaussage, Kurztext und Kurzbeschreibung stehen als Nr. 9 bis 11 in der Liste, der Titel nicht.
  - Alle drei stammen aus 2b und stehen nirgends im Bericht. Die Prüfrunde 2b hat in ihrer Rückwärtsprüfung die 70 Sätze mit der schwächsten Übereinstimmung gelesen; die zwei Verdichtungen nennt sie nicht.
- **Kopf der Liste:** Er sagt «Sie enthält alle Sätze von `kommunizieren`, `krise` und `index`, die nicht im Wortlaut aus dem Bestand stammen, …». Die Einschränkung der Liste von 2b («Einzelne Bestandssätze in einfacher Sprache («umformuliert (2b)») stehen nur im Abgleich.») fehlt. Wer die Liste als Grundlage der Freigabe nimmt (P2b-F-11 a), hält sie damit für vollständiger, als sie ist (N2bK-1).

**Ergebnis:** Für die Änderungen aus 2b-K ist die Liste vollständig. Als Grundlage der Freigabe von `kommunizieren`, `krise` und dem Einstieg auf `index` ist sie es nicht.

### Teil E · «Aufgefallen, nicht geändert» bewertet

| Nr. | Punkt der Selbstprüfung | Geprüft | Bewertung | Empfehlung | Zuständig |
| --- | --- | --- | --- | --- | --- |
| 1 | Seitenbeschreibung von `krise` «… was Sie eher vermeiden, …» und `v-kr-vermeiden` › `goal` «Erkennen, was in einer Krise eher nicht hilft» | `site.config.json` › `pages` › `krise` › `description`; in `krise.html` als `meta name="description"` und `og:description` | Trifft zu. Der Auftrag nennt die Stellen nicht, deshalb sind sie zu Recht unverändert. Die Beschreibung ist nach aussen sichtbar (Suchergebnis, Vorschau beim Teilen) und schwächt wie vor P2b-F-3 den Schutzhinweis ab | Folgeänderung zu P2b-F-3: «… was Sie in einer Krise vermeiden sollten, …» und `goal` «Erkennen, was Sie in einer Krise vermeiden sollten». Kein neuer Entscheid nötig | bauende Sitzung, im nächsten Auftrag (N2bK-4) |
| 2 | `v-ko-tassen` › `reason` mit «… die rechte Tasse steht 2 Einheiten weiter rechts als in der Skizze …» | Plan, Zeile 616 | Trifft zu. Der Satz beschreibt den Stand vor 2b-K. Die Tassen stehen jetzt je 60 Einheiten näher zur Mitte; spiegelgleich sind sie weiter (Teil A, Punkt 6) | Satz nachführen, z. B. «… beide Tassen je 60 Einheiten näher zur Tischmitte (P2b-F-11 b), spiegelgleich zu x = 320.» | bauende Sitzung, im nächsten Auftrag (N2bK-4) |
| 3 | K-K-a1 bei «Nächster Schritt» | `kippen`: «Ich beende das Gespräch jetzt und entscheide später, ob ich wieder ansprechbar bin.» | Trifft zu. Der Auftrag beschränkt K-K-a1 auf «Es ist gerade zu viel.» (5 a) und hält k726 fest (7); unverändert ist richtig. Damit stehen in `kippen` weiter drei fast gleiche Sätze zum Beenden: Schritt «Begrenzen oder beenden», «Ein Satz darf reichen», «Nächster Schritt» | Frage an die Fachstelle: Gilt K-K-a1 auch für «Nächster Schritt» (nur die Beschreibung)? Dann entfällt auch der Unterschied «und wann» (k726) | Fachstelle (Beispielsätze des Bestands) |
| 4 | Reihenfolge in «Pause statt Streit»: Die Einleitung nennt die Kurve, der Link folgt erst nach der Liste | bei 360 px: Einleitung bei 9960 px, Link bei 11 103 px, 1143 px später (mehr als eine Bildschirmhöhe) | Trifft zu. Abschnitt 5 a legt fest, dass der Verweissatz nach der Liste bleibt; unverändert ist richtig. Wer `verstehen` nicht kennt, liest «Anspannungskurve» eine Bildschirmhöhe lang ohne Erklärung | Strukturvorschlag: In der Einleitung das Wort «Anspannungskurve» als Link auf `verstehen#anspannung` setzen (Wortlaut bleibt) oder den Verweissatz direkt nach der Einleitung stellen | Fachstelle gibt frei, weil 5 a die Lage festlegt; danach bauende Sitzung |
| 5 | Übrige Einzelstellen aus P2b-S-3 | «keinen statistisch signifikanten Anstieg» steht im Satz zu Dazzi et al.; «radikale Echtheit» nur noch im Titel der Vertiefung «6 · Radikale Echtheit: auf Augenhöhe bleiben» | Trifft zu. Der Satz zu Dazzi et al. bleibt nach 5 e im Wortlaut; die Stufe wird in ihrer Vertiefung erklärt | Keine Massnahme. Der Fachbegriff bleibt ein Punkt für den Lesetest in S | – |
| 6 | `sagen`: Standardsatz und Ausstiegssatz in einem Absatz | bei 360 px 8 Zeilen (gemessen), dazu 3 Zeilen davor und 6 Zeilen Verweissatz | Trifft zu. Der Auftrag nennt keine Absätze; vorher war es auch ein Absatz | Optional: «Zum Aussteigen reicht: …» als eigener Absatz, damit der Ausstiegssatz in einer Krise schneller zu finden ist (Wortlaut gleich) | bauende Sitzung (Struktur) |

### Befunde der Nachprüfung 2b-K

- **N2bK-1 · wichtig · Liste «Neue Sätze zur Freigabe» als Grundlage der Freigabe unvollständig.**
  - **Beleg:** Teil D.
    - Der Kopf verspricht alle nicht wörtlichen Sätze; die Regel von 2b fehlt.
    - Zwei Verdichtungen fehlen: «Legen Sie sich einen Satz für eine Pause zurecht, …» (k807, k808, k931) und «Schreiben Sie zwei oder drei typische Grenzsätze vorab auf, …» (g599, g600, k723, k929).
    - Der Bildtitel «Abbildung 1 · Zuhören, ohne zuzustimmen» fehlt.
    - Für die Änderungen aus 2b-K selbst ist die Liste vollständig.
  - **Vorschlag:**
    - Die Liste nachführen: die drei Einträge an ihrem Ort ergänzen (z. B. 8a, 20a, 29a) und den Satz der Regel von 2b wieder in den Kopf setzen.
    - Oder die Fachstelle gibt die Seiten wie bei Etappe 2a «als Ganzes, mit allen Texten im Stand …» frei und die Liste dient als Übersicht der neuen Sätze.
  - **Zuständig:** bauende Sitzung (Liste); Fachstelle (Form der Freigabe P2b-F-11 a).
- **N2bK-2 · optional · Zwei Einzelposten der Wortzahl in `sagen`.**
  - **Beleg:** Teil B. Die Schrittfolge mit Einleitung hat −47 Wörter (gemeldet −46), die Handlungsanleitung +18 (gemeldet +17); die Summe −24 stimmt.
  - **Vorschlag:** Die zwei Zahlen in «Gründe» richtigstellen.
  - **Zuständig:** bauende Sitzung.
- **N2bK-3 · optional · Abgleich: Bemerkung von c253 veraltet.**
  - **Beleg:** `krise.md` Nr. 253 («Die 3 Schritte», Bezeichnung): «Zwischentitel; die drei Schritte als nummerierte Liste». Auf `krise` steht keine Liste der Schritte mehr (P2b-F-8; im Quelltext ist das einzige `<ol>` die Kapitelübersicht). Das Skript der bauenden Sitzung hat die Zeile nicht gemeldet, weil sie keine neue Fassung hat.
  - **Hinweis:** Zu c260 und c261 («entfällt (2b-K)», wie beauftragt) könnte die Bemerkung sagen, dass derselbe Wortlaut im Standardsatz weiter steht (c265, c266).
  - **Vorschlag:** Bemerkung nachführen, z. B. «Zwischentitel; die Schritte sind seit 2b-K verlinkt (`kommunizieren#kippen`, P2b-F-8)».
  - **Zuständig:** bauende Sitzung.
- **N2bK-4 · optional · Folgeänderungen aus «Aufgefallen» 1 und 2.**
  - **Beleg:** Teil E, Punkt 1 (Meta-Beschreibung und `goal` mit «eher») und Punkt 2 (`reason` von `v-ko-tassen`).
  - **Vorschlag:** wie dort.
  - **Zuständig:** bauende Sitzung, mit dem nächsten Auftrag.

**Prüfbedarf für die Fachstelle**

1. **Form der Freigabe (zu N2bK-1):** Sollen die Seiten wie bei Etappe 2a als Ganzes freigegeben werden, mit der nachgeführten Liste als Übersicht? Oder wird die Liste vorher ergänzt und einzeln freigegeben? **Empfehlung:** Liste nachführen und die Seiten als Ganzes freigeben.
2. **K-K-a1 bei «Nächster Schritt»** (Teil E, Punkt 3): Soll dort nur die Beschreibung stehen, ohne eigenen Beispielsatz? Ja/Nein. **Empfehlung:** Ja; der Ausstiegssatz steht kurz davor im selben Abschnitt («Ein Satz darf reichen»).
3. **Link auf die Anspannungskurve früher** (Teil E, Punkt 4): Darf das Wort «Anspannungskurve» in der Einleitung von «Pause statt Streit» als Link stehen, oder der Verweissatz direkt nach der Einleitung? Ja/Nein. **Empfehlung:** Ja, als Link in der Einleitung.

**Nicht geprüft:** reale Screenreader-Läufe, Hardwaretastatur und Touch; die Vorschau auf Netlify. Kontraste sind nicht neu gemessen, weil Farben, Klassen und CSS unverändert sind (`git diff`: keine CSS-Datei, keine neue Klasse in der Zeichnung).

**Zählung:** 1 wichtig (N2bK-1), 3 optional (N2bK-2 bis -4), 3 Fragen an die Fachstelle. Keine Prüfstufe ist «erledigt». Die Freigabe von «Zwei Tassen» und der neuen Sätze (P2b-F-11) bleibt offen.

## Prüfrunde 2b (10.10.2026, Stand 26af566)

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `26af566` (Etappe 2b, `git log -1` beim Start). Geprüft sind die Seiten `kommunizieren` («Zugewandt und klar sprechen») und `krise` («Krisen begleiten») sowie auf `index` der Abschnitt `einstiege`. Etappe 1 und Etappe 2a sind von der Fachstelle freigegeben; sie dienen hier nur als Massstab für Begriffe, Ton, Verantwortung und Absicherungen. Die Prüfsitzung hat die Website nicht gebaut. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht.

**Vorgehen**

- **Grundlagen gelesen:** aus `guidelines/` Ablauf (mit «Prüftiefe»), Fachliche Qualität, Gesamtkohärenz, Sprache und Ton, Visuelle Wissensvermittlung («Bildsprache», «Ein Bild, eine Idee»), Visualisierung umsetzen (Check 1–17), Pre-Release-Audits (R2 Teil 2 und 3); `README.md` («Zuständigkeit statt Krisenzugang», «Verweis im Text», «Kritische Information nie nur hinter …»); im Website-Ordner `BAUAUFTRAG-ETAPPE-2B.md`, `BAUAUFTRAG-ETAPPE-2A.md` (Abschnitt 2), die Selbstprüfung 2b, die Prüfrunde 2a, `UMBAUPLAN.md`, `site.config.json` und `abgleich/` (`README.md`, `kommunizieren.md`, `krise.md`; dazu die Zeilen mit Ort `krise` oder `kommunizieren` in den übrigen Tabellen).
- **Bestand:** Branch `origin/borderline-bestand`, `bestand/borderline-angehoerige/texte/` (73 Dateien) und `INVENTAR.md`, mit `git show` ausgelesen. Ganz gelesen: `kommunizieren.md`, `unterstuetzen--krise.md`, `uebungen.md` (Rahmen und die Szenarien mit Sicherheits- oder Verantwortungsbezug) und die Handouts `zuhoeren-ohne-zustimmen`, `gespraeche-kippen`, `pause-statt-streit`, `wenn-worte-treffen`, `beispiel-dialog`, `spiegeln-statt-aufsaugen`, `krisenkommunikation`; dazu `quellen.md` für die Suizid-Quellen.
- **Abgleich:** `abgleich/kommunizieren.md` (981 Zeilen) und `abgleich/krise.md` (313 Zeilen) per Skript in Zeilen zerlegt, nach Status und Grund gefiltert; alle Zeilen ausser «übernommen», «Bezeichnung» und Rahmen- oder Meta-Text von Hand gelesen.
- **Rückwärtsprüfung:** Ein Skript der Prüfsitzung sucht für jeden Satz der zwei Seiten (523 Sätze, sichtbarer Text mit Vertiefungen) den ähnlichsten Satz im ganzen Bestand (Wortüberlappung). Die 70 Sätze mit der schwächsten Übereinstimmung sind von Hand gegen Bestand und Abgleich gelesen (Teil A3).
- **Browser:** lokal `python3 -m http.server 8765` im Projektstamm, Chromium über Playwright. Bildschirmfotos der Abbildung bei 1280 und 360 px, je im Theme Standard und «kontrast» (vier Fotos, angesehen, nicht committet). Die Vorschau auf Netlify war aus dieser Umgebung nicht erreichbar (Teil «Nicht geprüft»).
- **Skripte der bauenden Sitzung:** selbst ausgeführt, Werte nachgerechnet (Teil F). Dazu eigene Skripte für Kennzahlen, Links, Überlauf, Tastatur, Kontrast und die Lage der Verweise im Text.
- **Auftrag:** Der Prüfauftrag im Chat bricht in Teil C, Punkt 2 («Länge: Die bauende Sitzung meldet im …») ab. Teil C2 ist deshalb wie in Prüfrunde 2a ausgefüllt (Zahlen nachrechnen, Länge aus Sicht der Prüfperson, Kürzungsvorschläge ohne Aussageverlust), die Teile D bis F ebenfalls wie in Prüfrunde 2a.

**Ergebnis in Kürze**

- Die zwei Seiten übertragen den Bestand weitgehend treu. In 48 verglichenen Aussagen ist keine Sicherheitsaussage ersatzlos entfallen, und es gibt keine neue absolute Aussage über die betroffene Person. Die Kennzahlen der bauenden Sitzung stimmen auf das Wort (`kommunizieren` 2458, `krise` 1507 Wörter im Lesefluss).
- Auf `krise` braucht die Fachstelle vier Entscheide zu Schutz und Hilfe, bevor der Wortlaut freigegeben werden kann:
  - Für Hilfe stehen drei Wörter («Notruf», «Leitstelle», «Rettungsdienst»), und zwei Abschnitte mit Handlungsanleitungen für akute Lagen haben keinen Verweis im Text (`danach`, `sagen`; P2b-F-1).
  - Der Fall «Sie können die Dringlichkeit nicht sicher einschätzen» ist schwächer abgesichert als im Bestand und auf den freigegebenen Seiten (P2b-F-2).
  - «Was Sie in einer Krise eher vermeiden» schwächt «sich selbst in Gefahr zu bringen» zu «hilft es eher nicht» ab (P2b-F-3).
  - Der Satz «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» steht ohne seine Quelle (P2b-F-4).
- Auf `kommunizieren` widersprechen die Begriffe «Stabil / Warnstufe / Eskalation» der eigenen Einleitung («keine festen Stufen») und der freigegebenen Anspannungskurve, auf die der Abschnitt verweist (P2b-F-5). Die Seite erreicht das Längenziel knapp; Länge entsteht vor allem durch sieben ähnliche Pausen- und Ausstiegssätze.
- Die Abbildung «Zwei Tassen» trägt. Technik, Zuständigkeit (keine Nummer, kein `tel:`), Bedienung, Kontrast und Links sind ohne Befund.

### Teil A · W1 Fachliche Vorprüfung

#### A1 · 48 Aussagen gegen den Bestand

Je Seite 24 Aussagen. Ausgewählt nach Auftrag: Suizid und Selbstverletzung, Medikamente und gefährliche Gegenstände, Bleiben bei der Person, Schutz bei Bedrohung, Kinder, Nachsorge und Behandlungsteam, Zustimmung (Krisenplan), Aussagen über die betroffene Person, Verantwortung und Schuld, Validierung, Quellen. Nr. = Zeile im Abgleich (k = `abgleich/kommunizieren.md`, c = `abgleich/krise.md`, g = `grenzen.md`, v = `verstehen.md`). Bestandsdateien in `texte/`; «Handout x» = `materialien--text--x.md`.

**`kommunizieren`**

| # | Nr. | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- | --- |
| 1 | k15 | «Bei Bedrohung oder Gewalt geht Schutz vor Gesprächsführung.» (`kommunizieren.md`, Liste unter dem Bild) | wörtlich (`zuhoeren`, Liste) | gleichbedeutend |
| 2 | k203, k204 | «Sie sind nicht allein für den Gesprächsverlauf verantwortlich. Ein hilfreicher Satz kann unterstützen, aber die Reaktion des Gegenübers nicht garantieren.» (`kommunizieren.md`, «Zwei Materialien») | wörtlich, «der anderen Person» (`zuhoeren`) | gleichbedeutend; «nicht allein» bei der Beziehung, wie im Bauauftrag 2b, Abschnitt 2b |
| 3 | k150, k719 | «Bei Bedrohung oder akuter Gefahr: Soforthilfe.» (`kommunizieren.md`); «Bei Bedrohung oder Gewalt: Beenden Sie das Gespräch, schaffen Sie Abstand und bringen Sie sich in Sicherheit.» (Handout `gespraeche-kippen`) | «Bei Bedrohung oder Gewalt beenden Sie das Gespräch, schaffen Abstand und bringen sich in Sicherheit.», direkt danach der Verweis im Text (`kippen`) | gleichbedeutend; der Link auf `/soforthilfe` ist durch den Verweis im Text ersetzt |
| 4 | k798 | «Sie müssen die Dringlichkeit nicht allein beurteilen und tragen nicht allein die Verantwortung für Überwachung oder Sicherung.» (Handout `pause-statt-streit`) | «Sie müssen die Dringlichkeit nicht allein beurteilen oder bewältigen.» (`kippen`, Wortlaut Handout `gespraeche-kippen`) | gleichbedeutend über `krise` › `vermeiden` («… die Person ohne professionelle Hilfe zu überwachen»); auf `kommunizieren` fehlt «Überwachung oder Sicherung», die Bemerkung nennt das |
| 5 | k865–k868 | «Eine Aussage wie «Wenn du gehst, bringe ich mich um» gehört nicht in eine Liste von Vorwürfen. Nehmen Sie sie ernst und holen Sie eine professionelle Einschätzung oder Hilfe dazu. Versuchen Sie nicht, Motiv oder Gefährdung allein zu beurteilen; nutzen Sie bei akuter Gefahr die separat ausgewiesenen Krisen- und Notfallwege. Ihre eigene Sicherheit bleibt wichtig.» (Handout `wenn-worte-treffen`) | gleich, ohne den Teilsatz zu den Notfallwegen; danach der Verweis im Text, «Ihre eigene Sicherheit bleibt wichtig.» und der Verweissatz auf `krise#suizid` (`worte`, «Wenn Suizid angesprochen wird») | gleichbedeutend; sichtbar unter eigener Zwischenüberschrift |
| 6 | k837 | «Die Sätze sind Beispiele und nicht typisch für alle Menschen mit Borderline.» (Handout `wenn-worte-treffen`) | «Die folgenden Sätze sind Beispiele. Sie sind nicht typisch für alle Menschen mit Borderline.» (`worte`) | gleichbedeutend; Absicherung über die Person gehalten |
| 7 | k836, k872 | «Die Beispiele zeigen mögliche Antworten, ohne festzulegen, ob eine Aussage stimmt oder welches Motiv dahintersteht.»; «Eine Aussage ist keine verlässliche Auskunft über ein verborgenes Motiv.» (Handout `wenn-worte-treffen`) | «Eine Aussage ist keine verlässliche Auskunft über ein verborgenes Motiv.» (`worte`) | gleichbedeutend; «ob eine Aussage stimmt» trägt «… die Aussage anders beurteilen» im selben Absatz |
| 8 | k857 | «Sie müssen die Aussage weder widerlegen noch als Diagnosemerkmal deuten.» (Handout `wenn-worte-treffen`) | «… noch als Merkmal der Diagnose deuten.» (`worte`) | gleichbedeutend |
| 9 | k650, k652 | «Sie müssen keine pauschale Schuldzuweisung übernehmen. Wenn Sie selbst etwas Verletzendes gesagt oder getan haben, können Sie dafür Verantwortung übernehmen und sich entschuldigen. Das bedeutet nicht, für die Erkrankung oder Genesung der anderen Person verantwortlich zu sein.» (Handout `zuhoeren-ohne-zustimmen`) | gleich, mit den zwei Beispielsätzen des Handouts (`anerkennen`) | gleichbedeutend; passt zu `verstehen` und `rolle` (keine Verantwortung für Erkrankung und Genesung, ohne «allein») |
| 10 | k23 | «Validierung bedeutet, dass Sie das Erleben Ihres Gegenübers als nachvollziehbar behandeln, ohne jeden Vorwurf, jede Interpretation oder jedes Verhalten zu bestätigen.» (`kommunizieren.md`) | «Validierung heisst: Sie behandeln das Erleben der anderen Person als nachvollziehbar. Dafür müssen Sie nicht jeden Vorwurf, jede Deutung oder jedes Verhalten bestätigen.» (`anerkennen`) | gleichbedeutend |
| 11 | k27–k29 | «Die sechs Stufen lehnen sich an Linehans Validierungsstufen der Dialektisch-Behavioralen Therapie (DBT) an. Linehan beschreibt fünf aufeinander aufbauende Formen und als sechste Form radikale Echtheit. Hier sind sie für Angehörige vereinfacht.» (`kommunizieren.md`, Grundlage Linehan 1997) | gleich, «die Validierungsstufen von Linehan aus der …» (`anerkennen`); Quellenzeile «Linehan (1997), «Validation and psychotherapy»; Fruzzetti (2006); Mason und Kreger (2014)» | gleichbedeutend mit dem Bestand. Die Zuschreibung selbst konnte die Prüfsitzung nicht an der Quelle prüfen: Sekundärquellen beschreiben sechs aufeinander aufbauende Ebenen mit der radikalen Echtheit als höchster; ob Linehan die sechste ausdrücklich als Form neben fünf aufbauenden beschreibt, ist im Kapitel nachzulesen (P2b-F-9) |
| 12 | k25 | «Gründe, Wirkung und passende Reaktion unterscheiden sich jedoch von Person zu Person.» (`kommunizieren.md`) | «Was hilft und wie jemand reagiert, ist von Person zu Person verschieden.» (`anerkennen`) | gleichbedeutend; «Gründe» entfällt, die Bemerkung nennt es nicht (P2b-W1-7) |
| 13 | k26 | «Validierung ist ein mögliches Gesprächsangebot, kein Mittel, um die andere Person zu beruhigen oder eine spätere Klärung zu erzwingen.» (`kommunizieren.md`) | «Anerkennen ist ein mögliches Angebot im Gespräch. Es ist kein Mittel, um …» (`anerkennen`) | gleichbedeutend |
| 14 | k663, k667 | «Sie können Gefühle anerkennen, ohne die Interpretation zu übernehmen.»; «Sie können sagen, dass der Schmerz real ist, ohne automatisch die ganze Erklärung zu teilen oder pauschale Schuld zu übernehmen.» (Handout `zuhoeren-ohne-zustimmen`) | Kernaussage und Kurztext von Abbildung 1 im Wortlaut des Auftrags («ein Gefühl», «Deutung», «echt», ohne «automatisch») | gleichbedeutend |
| 15 | g679, g683 | «Aus einer Beobachtung wird die Annahme, Sie müssten das Erleben oder die Situation der anderen Person lösen.»; «Das kann Druck, Schuldgefühle oder Erschöpfung verstärken. Die Wirkung ist individuell.» (Handout `spiegeln-statt-aufsaugen`) | «Übernehmen hiesse: Aus einer Beobachtung wird die Annahme, …» und die zwei Sätze wörtlich (`anerkennen`) | gleichbedeutend |
| 16 | k131–k134 | «In einem angespannten Moment dürfen Sie Sicherheit herstellen, Abstand nehmen oder eine Pause vorschlagen. Das verpflichtet Sie nicht, Forderungen zu erfüllen, verletzendes Verhalten hinzunehmen oder das Gegenüber zu beruhigen. … Ob ein Muster bestehen bleibt, hängt von vielen Faktoren ab; Deeskalation macht Sie dafür nicht verantwortlich.» (`kommunizieren.md`) | gleich; letzter Satz «Dafür sind Sie nicht verantwortlich, auch wenn Sie versuchen, die Lage zu beruhigen.» (`moment`) | gleichbedeutend (Frage 8 der Selbstprüfung) |
| 17 | k764, k765 | «Die Begriffe «stabil», «Warnstufe» und «Eskalation» sind eine redaktionelle Orientierung. Sie beschreiben keine verbindlichen Stufen und erlauben keine sichere Beurteilung des inneren Zustands einer Person.» (Handout `pause-statt-streit`) | «Manche Angehörige achten im Gespräch auf drei Lagen. Die Begriffe sind eine Orientierung, keine festen Stufen. Sie erlauben keine sichere Beurteilung, wie es einem Menschen innerlich geht.» und danach die Begriffe «Stabil», «Warnstufe», «Eskalation» (`moment`) | **Bedeutung leicht verschoben:** Aus der «redaktionellen Orientierung» wird eine Praxis («Manche Angehörige achten …»); die Absicherung «keine festen Stufen» steht direkt vor «Warnstufe» (P2b-F-5) |
| 18 | k786, k787 | «Ein respektvolles Gespräch ist in diesem Moment nicht möglich. Jetzt stoppen und Abstand schaffen.» (Handout `pause-statt-streit`, «Eskalation») | wörtlich bzw. «Stoppen Sie, und schaffen Sie Abstand:» (`moment`) | gleichbedeutend |
| 19 | k157 | «Lassen Sie sich korrigieren; die Gefühle und Motive des Gegenübers sind nicht von aussen sicher erkennbar.» (`kommunizieren.md`) | zwei Sätze, «der anderen Person» (`kippen`, Schritt 2) | gleichbedeutend |
| 20 | k176, k178 | «Prüfen Sie konkrete Kritik, statt jeden Vorwurf als Symptom oder Verzerrung zu verstehen.»; «Rückzug kann verschiedene Gründe haben. … Wenn Sie sich um die Sicherheit sorgen, holen Sie professionelle Einschätzung.» (`kommunizieren.md`, «Typische schwierige Situationen», im Bestand ein Akkordeon) | wörtlich, sichtbar im Lesefluss (`beispiele`, Begriffsliste) | gleichbedeutend; der Sicherheitssatz steht jetzt sichtbar statt im Akkordeon |
| 21 | k265, r149 | «Die Rollen sind nicht aus einer Diagnose ableitbar; die Sprecherposition wechselt zwischen den Alltagsszenarien.» (`uebungen.md`) | «Namen und «Person A» oder «Person B» bezeichnen keine festen Rollen und lassen sich nicht aus einer Diagnose ableiten.» (`beispiele`) | gleichbedeutend |
| 22 | g214 | «Finanzielle Grenzen sind besonders schwer, weil sie sich anfühlen wie «ich lasse dich fallen».» (`grenzen.md`) | «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» (`beispiele`) | gleichbedeutend mit zusätzlicher Absicherung; der Satz betrifft das Erleben der Angehörigen und unterstellt so kein Gefühl (Frage 7) |
| 23 | k194 | «Bei erwachsenen Kindern hilft es, Selbstbestimmung und Verantwortung aller Beteiligten zu beachten; bei Minderjährigen gelten andere Schutz- und Sorgepflichten.» (`kommunizieren.md`, Akkordeon) | zwei Sätze (`rollen`, Vertiefung «Als Elternteil») | gleichbedeutend; im Bestand ebenfalls in einem Akkordeon; kein akuter Sicherheitshinweis |
| 24 | k198 | «Damit übernehmen Sie nicht die Aufgabe, die Gefühle, Behandlung oder Genesung Ihres Elternteils zu steuern.» (`kommunizieren.md`) | wörtlich mit Artikeln (`rollen`, Vertiefung «Als erwachsenes Kind») | gleichbedeutend; passt zu `rolle` |

**`krise`**

| # | Nr. | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- | --- |
| 25 | c2 | «Bei akuter Gefahr oder wenn Sie die Dringlichkeit nicht sicher einschätzen können, wenden Sie sich an den zuständigen Notfalldienst.» (`unterstuetzen--krise.md`, Hinweis oben) | «Bei unmittelbarer Gefahr holen Sie sofort Hilfe und schützen sich selbst.» und der Verweis im Text; für die Unsicherheit «Bei Unsicherheit ist eine professionelle Einschätzung sinnvoll.» (`belastung`, vier Absätze tiefer) | **Absicherung schwächer:** Im Bestand führt «Dringlichkeit nicht sicher einschätzen» zum Notfalldienst, neu nur zu «professionelle Einschätzung sinnvoll». Die freigegebenen Seiten behandeln Unsicherheit wie Gefahr: «Bei akuter Gefahr oder Unsicherheit: Bringen Sie sich in Sicherheit und holen Sie Hilfe.» (`grenzen` › `gewalt`), «Wenn Sie sich nicht mehr sicher fühlen oder nicht einschätzen können, wie dringend es ist, wenden Sie sich an professionelle Hilfe.» (`selbstfuersorge` › `warnsignale`) (P2b-F-2) |
| 26 | c1 | «Die Fachstelle Angehörigenarbeit bietet Beratung und Orientierung, aber keine Krisenintervention.» (`unterstuetzen--krise.md`, Hinweis oben) | wörtlich (`belastung`, erster Absatz) | gleichbedeutend (Frage 9, P2b-F-6) |
| 27 | c11 | «Akute Hilfe ist jederzeit direkt erreichbar; diese Seite ist keine notwendige Vorstufe.» | «Sie können jederzeit direkt Hilfe holen. Diese Seite ist keine notwendige Vorstufe.» (`belastung`) | gleichbedeutend |
| 28 | c35–c38, c63, c64 | «Die Bereiche sind keine Sicherheitsbewertung. Die Einteilung zeigt nur, wie weit eigene Mittel gerade tragen. Sie kann nicht beurteilen, ob eine Situation sicher ist. … Kein Bereich bedeutet automatisch «sicher» oder «gefährlich». Die Einteilung entscheidet weder über Behandlung noch über die Dringlichkeit von Hilfe.» | wörtlich, sichtbar, Bereiche als Begriffsliste ohne Nummern (`belastung`) | gleichbedeutend; entspricht dem Entscheid «ausdrücklich ohne Sicherheitsbewertung» |
| 29 | c68, c69 | «Bei Unsicherheit ist professionelle Einschätzung sinnvoll; ein unbekannter Plan bedeutet keine Sicherheit.» | zwei Sätze (`belastung`) | gleichbedeutend; «Ein unbekannter Plan bedeutet keine Sicherheit.» ist für Laien schwer zu verstehen (P2b-S-3) |
| 30 | c76 | «Sind Sie und Ihr Angehöriger sicher? Gibt es gefährliche Gegenstände in der Nähe?» | «Sind Sie und die betroffene Person sicher? …» (`waehrend`) | gleichbedeutend |
| 31 | c78–c80 | «Begrenzen Sie den Zugang zu Medikamenten oder gefährlichen Gegenständen nur ohne Eigengefährdung, möglichst gemeinsam und nach professioneller Anleitung. Nehmen Sie nichts aus der Hand oder gegen Widerstand weg; greifen Sie nicht körperlich ein. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | wörtlich, sichtbar, direkt danach der Verweis im Text (`waehrend`) | gleichbedeutend (Frage 1; zum Wort «Notruf» P2b-F-1) |
| 32 | c83 | «Sie dürfen selbst erschrocken sein und müssen keine Beruhigung erreichen.» | wörtlich (`waehrend`) | gleichbedeutend |
| 33 | c92, c93 | «Wenn die Person das möchte, können Sie an bereits mit Fachpersonen vereinbarte Strategien erinnern. Drängen Sie keine Übung auf; bei Gefahr geht Hilfeholen vor.» | gleich, zwei Sätze (`waehrend`) | gleichbedeutend |
| 34 | c105, c106 | «Bieten Sie nur Nähe oder Erreichbarkeit an, die für Sie möglich und sicher ist. Bei Bedrohung bringen Sie sich in Sicherheit und informieren die Leitstelle.» | wörtlich (`sagen`, Begriffsliste «Da sein») | gleichbedeutend im Inhalt. «Leitstelle» ist ein Fachwort der Rettungsdienste; ein Verweis im Text fehlt im ganzen Abschnitt (P2b-F-1) |
| 35 | c279, c283 | «Bei Bedrohung oder Gewalt gehe ich auf Abstand und hole Hilfe.»; «Bei akuter Gefahr oder wenn Sie die Dringlichkeit nicht sicher einschätzen können, finden Sie passende Anlaufstellen unter «Akute Hilfe und Notfallkontakte».» (Handout `krisenkommunikation`) | «Bei Bedrohung oder Gewalt gehen Sie auf Abstand und holen Hilfe.» (`sagen`); der zweite Satz entfällt (Profil) | erster Satz gleichbedeutend (aus der Ich-Form gelöst); für den zweiten gibt es in `sagen` keinen Verweis im Text (P2b-F-1) |
| 36 | c117, c118 | «Bei Suizidgedanken direkt ansprechen» mit «Ich mache mir Sorgen um dich. Denkst du gerade daran, dir das Leben zu nehmen?» | Handlungsanleitung im Wortlaut von `verstehen` («Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Das kann helfen, die Lage zu verstehen.») mit dem Beispielsatz des Bestands, direkt danach der Verweis im Text (`suizid`) | gleichbedeutend; gleicher Wortlaut wie `verstehen`; «oder einen Plan» kommt aus `verstehen` |
| 37 | v129 | «Solche Fragen lösen nach heutigem Wissensstand keine suizidale Handlung aus; …» (`verstehen.md`), belegt mit WHO, Suicide: Questions and answers (2026) (`quellen.md`) | «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» (`suizid`); Quellenzeile nur «Dazzi et al. (2014) …; NICE NG225 (2022) …» | Wortlaut wie `verstehen`. **Quelle fehlt:** Dazzi et al. betrifft Suizidgedanken, nicht Handlungen; auf `verstehen` steht dafür WHO (2026) (P2b-F-4) |
| 38 | c120–c122 | «Die von Dazzi et al. ausgewerteten Studien zeigten keinen statistisch signifikanten Anstieg von Suizidgedanken durch direktes Fragen. Das garantiert keine bestimmte Wirkung im einzelnen Gespräch. Holen Sie bei Sorge professionelle Einschätzung; Sie müssen nicht auf vollständige Antworten warten.» | wörtlich, Semikolon als Punkt (`suizid`) | gleichbedeutend (Frage 2) |
| 39 | c98–c101, c125 | «Selbstverletzung kann ohne Todesabsicht erfolgen, schliesst Suizidgedanken aber nicht aus. Auch eine klein wirkende Verletzung erlaubt keine Entwarnung. Fragen Sie ausdrücklich nach Suizidgedanken; … Die Antworten ersetzen keine fachliche Beurteilung.»; Quellenerläuterung NICE: «Aufgaben der Fachpersonen werden Angehörigen nicht übertragen.» | wörtlich, aus «Was Sie sagen können» nach `suizid` verschoben; dazu «Diese Beurteilung ist Aufgabe von Fachpersonen, nicht von Angehörigen.» | gleichbedeutend; Ort passt (Frage 11) |
| 40 | (neu, Wortlaut v) | auf der alten Krisenseite kein gleicher Satz; ähnlich «Bieten Sie nur Nähe oder Erreichbarkeit an, die für Sie möglich und sicher ist.» (c105) | «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» nach dem Verweis im Text (`suizid`) | gleichbedeutend mit c105; Wortlaut und Reihenfolge wie `verstehen` (Frage 3) |
| 41 | c127–c132 | «Was Sie in der Krise vermeiden sollten» mit «✗ Versuchen, die Gefahr allein zu beurteilen oder die Person ohne professionelle Hilfe zu überwachen», «✗ Sich selbst in Gefahr bringen» | «Was Sie in einer Krise eher vermeiden» und «In einer Krise hilft es eher nicht, … die Gefahr allein beurteilen zu wollen oder die Person ohne professionelle Hilfe zu überwachen, … sich selbst in Gefahr zu bringen.» (`vermeiden`) | **Bedeutung verschoben:** «eher» und «hilft eher nicht» schwächen zwei Schutzhinweise ab («Dringende Hinweise klar und direkt», Leitlinie Sprache und Ton, 5) (P2b-F-3) |
| 42 | c138, c139 | «Ein ruhigerer Eindruck oder verstrichene Zeit beweist keine Sicherheit. Bei erneuter Sorge holen Sie professionelle Einschätzung; bei möglicher unmittelbarer Lebensgefahr rufen Sie den Rettungsdienst.» | wörtlich, zwei Sätze, ohne Verweis im Text (`danach`) | gleichbedeutend; Verweis im Text fehlt (P2b-F-1) |
| 43 | c190 | «Bei erneuten Sorgen um die Sicherheit sofort Hilfe holen, unabhängig vom Zeitpunkt» («Drei mögliche Anliegen») | zusammengeführt mit Nr. 42 | **teilweise:** «sofort» steht nur noch bei Lebensgefahr; «unabhängig vom Zeitpunkt» trägt «Nötige medizinische oder psychiatrische Hilfe hat keine Wartefrist.» (c148, `danach`). Vertretbar; die Bemerkung nennt das fehlende «sofort» nicht (P2b-W1-7) |
| 44 | c149 | «Mit dem Behandlungsteam klären, welche fachliche Nachsorge nötig ist und welche Rolle Sie freiwillig übernehmen können» (Liste «Für die betroffene Person») | «Welche fachliche Nachsorge nötig ist, klärt die betroffene Person mit dem Behandlungsteam. Dabei kann auch geklärt werden, welche Rolle Sie freiwillig übernehmen können.» (`danach`) | gleichbedeutend, Subjekt richtig gesetzt (Frage 5). Uneinheitlich bleiben c188 «… werden mit dem Behandlungsteam geklärt.» und c204 «mit dem Behandlungsteam klären, …» (Vertiefungen) (P2b-F-7) |
| 45 | v339 | «Angehörige werden nur mit Zustimmung der betroffenen Person in einen Krisenplan einbezogen; beide Seiten dürfen ihre Möglichkeiten und Grenzen benennen.» (Handout `zustands-landkarte`) | zwei Sätze (`danach`, Vertiefung «Früh erkennen und Absprachen treffen») | gleichbedeutend; Schweigepflicht richtig; als Planungsinhalt in einer Vertiefung vertretbar, kein akuter Hinweis |
| 46 | c141 | «Nach einer Krise können Scham, Rückzug, Erleichterung oder andere Gefühle auftreten.» | «… Scham, Reue, Erleichterung, Ärger, Rückzug oder ganz andere Reaktionen …» (`danach`, Wortlaut `rolle` › `nach-konflikten`) | gleichbedeutend; Wortlaut der freigegebenen Seite |
| 47 | c212, c213 | «Dann: Bei akuter Gefahr gilt der Notfallweg. Sonst kann jede beteiligte Person eigene Beratung nutzen; weitere Behandlungsschritte klärt die betroffene Person mit dem Fachteam.» | «Bei akuter Gefahr schützen Sie sich und holen sofort Hilfe.», Verweis im Text, dann der Rest wörtlich (`bleibt`) | gleichbedeutend; «Fachteam» neben viermal «Behandlungsteam» (P2b-W2-4) |
| 48 | c215–c220 | «Erwachsene organisieren Hilfe und Betreuung. Kinder müssen weder Streit schlichten noch Medikamente kontrollieren oder einen Elternteil bewachen. Vereinbaren Sie, … wer erreichbar ist, wenn die erste Person ausfällt. Besprechen Sie den Plan in einfachen Worten mit dem Kind. Es darf … seinen Alltag mit Schule, Spiel und Freunden behalten. Bei akuter Gefahr holen Erwachsene sofort Hilfe.» | Wortlaut von `grenzen` › `gewalt` («… wer einspringt, wenn diese ausfällt», ohne «mit dem Kind» und ohne «mit Schule, Spiel und Freunden»), dann der Verweissatz auf `rolle#kinder` (`bleibt`) | gleichbedeutend; Wortlaut der freigegebenen Seite; «sofort» bei akuter Gefahr steht |

**Bilanz:** 43 gleichbedeutend, davon 5 mit offener Frage zu Wort, Ort oder fehlendem Verweis im Text (Nr. 26, 34, 35, 42, 47). Bei 3 ist die Bedeutung verschoben oder eine Absicherung schwächer (Nr. 17, 25, 41). Bei 1 fehlt die Quelle (Nr. 37). 1 trägt nur teilweise (Nr. 43). Keine Aussage ist neu ohne Grundlage. Keine Sicherheitsaussage ist ersatzlos entfallen; alle Schutzhinweise stehen im Lesefluss.

#### A2 · 32 Zeilen des Abgleichs mit Status «entfällt», «zusammengeführt» oder «verschoben»

Davon 13 Zeilen «entfällt: ersetzt durch Beispiele», ausgewählt nach Schutz, Sicherheit und Verantwortung (Suche nach diesen Wörtern in allen 303 Zeilen dieses Grundes: 46 Treffer, die übrigen sind Rahmen und Bedienung der Übungen).

| Nr. | Status | Bestand (Kern) | Trägt die neue Fassung? Ist «entfällt» begründet? |
| --- | --- | --- | --- |
| k269 | entfällt: Beispiele | «Diese Kommunikationsübung nimmt keine Risikoeinschätzung vor.» | begründet; die Seite schätzt keine Risiken ein, Sicherheit über die Verweise im Text in `kippen` und `worte` |
| k279 | entfällt: Beispiele | «Grenzen und Sicherheit benennen» (Aufbau der Technik) | begründet; getragen von «Bei Bedrohung oder Gewalt geht Schutz vor Gesprächsführung.» (`zuhoeren`) und `kippen` |
| k284 | entfällt: Beispiele | «Ich merke, dass ich gerade zu aufgewühlt bin, um aufmerksam zuzuhören. Ich mache jetzt eine Pause …» | begründet; getragen von «Wenn es Ihnen selbst zu viel wird, helfen eher Abstand oder Unterstützung als weiteres Spiegeln.» (`anerkennen`) |
| k291 | entfällt: Beispiele | «Zuhören bedeutet keine unbegrenzte Verfügbarkeit und keine Zustimmung zu jedem Vorwurf.» | trägt: «… muss keine ständige Verfügbarkeit versprechen» (`beispiele`), «… ohne einer Aussage oder Forderung zuzustimmen» (`zuhoeren`) |
| k294 | entfällt: Beispiele | «Die andere Person darf noch nicht antworten wollen.» | trägt sinngemäss: «Es braucht keine sofortige Entscheidung.» (`beispiele`); `rolle` › `nach-konflikten`: «Du musst jetzt nicht antworten.» |
| k344 | entfällt: Beispiele | «Sie übernehmen Ihren Anteil an der unklaren Absprache, ohne die gesamte Verantwortung für den Abend zu übernehmen.» | trägt: «Ein Missverständnis ist nicht automatisch die Schuld einer Person. Beide dürfen ihren Anteil benennen …» (`beispiele`); die neue Fassung vermeidet «gesamte Verantwortung» (vgl. P2a-F-1) |
| k358 | entfällt: Beispiele | «Zuhören verpflichtet Sie nicht, den ursprünglichen Plan nachzuholen.» | trägt: Robins zweite Antwort und «… eine gemeinsame Aktivität ablehnen» (`beispiele`) |
| k375 | entfällt: Beispiele | «Eine Grenze muss nicht beiden gefallen, um ausgesprochen werden zu dürfen.» | trägt sinngemäss: «Eine Grenze braucht keine vorherige Einigung über den Konflikt.» (`kippen`) |
| k408 | entfällt: Beispiele | «Eine Bitte ist keine Verpflichtung für die andere Person.» (DEAR) | trägt sinngemäss: `rolle` «Die betroffene Person darf ein Angebot annehmen, verändern oder ablehnen.» |
| k421 | entfällt: Beispiele | «Sie können die angekündigte Grenze selbst umsetzen und verwenden sie nicht als Strafe.» | trägt: `grenzen` «Eine Grenze ist keine Strafe und kein Liebesentzug.» |
| k569 | entfällt: Beispiele | «Verantwortung für den eigenen Kommentar bedeutet nicht, jedes weitere Urteil über sich übernehmen zu müssen.» | trägt: «Eine pauschale Schuldzuweisung müssen Sie nicht übernehmen …» (`anerkennen`) |
| k572 | entfällt: Beispiele | «Eine Entschuldigung schafft keinen Anspruch auf Vergebung.» | **steht nirgends.** Die Verantwortung für eigenes Verhalten trägt `anerkennen`; die Nuance, dass eine Entschuldigung keinen Anspruch auf Vergebung schafft, entfällt mit den Übungen. Begründet durch den Entscheid; keine Schutz- oder Sicherheitsaussage, deshalb kein Prüfbedarf |
| k596 | entfällt: Beispiele | «Sie brauchen eine Pause und nutzen sie nicht, um die Verantwortung für den Kommentar abzuweisen.» | trägt: «Auch wer verletzend war, kann später Verantwortung übernehmen …» (`moment`) |
| k8 | entfällt | Link «Einordnung und Grenzen des Modells» | begründet (Seite entfällt); Einordnung im Text («keine Pflichtfolge …») |
| k61 | entfällt (Kürzung) | «Du hast gesagt, dass du dich heute allein gelassen gefühlt hast.» | begründet; gleiche Aussage im Beispiel-Dialog von Stufe 2 |
| k720 | entfällt | «Bei Sorgen um Sicherheit oder Unsicherheit finden Sie passende Anlaufstellen unter «Akute Hilfe und Notfallkontakte».» (Handout `gespraeche-kippen`) | begründet (Profil); Verweis im Text in `kippen` nach der Handlungsanleitung |
| k726 | zusammengeführt | «… entscheide später, ob und wann ich wieder ansprechbar bin.» | trägt; in der Fassung («Nächster Schritt») fehlt «und wann», die Bemerkung nennt es nicht (P2b-W1-7) |
| k792, k793 | zusammengeführt | Kernaussage des Handouts: «Ich stoppe jetzt. Ich darf ein Gespräch unterbrechen oder beenden, wenn ich eine Pause oder Abstand brauche.» | trägt: «Sie dürfen auch vorher eine Pause machen oder das Gespräch beenden.» (`moment`, «Stabil») und der Kopf («… Pausen machen und Grenzen setzen»); als Kernaussage nicht mehr hervorgehoben |
| k798 | zusammengeführt | «… tragen nicht allein die Verantwortung für Überwachung oder Sicherung.» | teilweise, siehe A1 Nr. 4 |
| c2 | zusammengeführt | Hinweis oben: akute Gefahr oder Unsicherheit über die Dringlichkeit → Notfalldienst | **Absicherung schwächer**, siehe A1 Nr. 25 |
| c10 | zusammengeführt | «Sie können Schutz und professionelle Unterstützung priorisieren.» | trägt: «Sicherheit hat Vorrang.» (`waehrend`) |
| c65 | zusammengeführt | «Diese Einteilung ersetzt keine professionelle Krisenberatung.» | trägt: «Diese Seite ersetzt keine professionelle Krisenberatung.» (`belastung`) |
| c66 | entfällt | «… finden Sie passende Anlaufstellen unabhängig von der ausgewählten Situation unter …» | begründet (Profil); Verweis im Text in `belastung` |
| c135 | entfällt | «Die akute Krise ist vorbei – aber die innere Landschaft braucht Zeit.» | begründet (Vorschautext, Bild entfällt); getragen von «Krisen verlaufen unterschiedlich.» und «Vertrauen hat keinen festen Zeitplan.» |
| c150 | verschoben (Vertiefung) | «Wenn beide möchten: Was wurde vor der Krise bemerkt, was hat geholfen und wo braucht es zusätzliche Unterstützung?» | trägt in zwei Vertiefungen («Drei mögliche Anliegen», «Früh erkennen …») |
| c182 | verschoben (Vertiefung) | «Dringende Hilfe kann zu jedem Zeitpunkt nötig sein; …» | trägt im Lesefluss: «Nötige medizinische oder psychiatrische Hilfe hat keine Wartefrist.» |
| c190 | zusammengeführt | «Bei erneuten Sorgen um die Sicherheit sofort Hilfe holen, unabhängig vom Zeitpunkt» | teilweise, siehe A1 Nr. 43 |
| c221 | zusammengeführt | Link «Erklärung und Betreuungsplan für Kinder» | trägt: Verweissatz auf `rolle#kinder` |
| c222, c223 | entfällt | Einleitung und Link «Situations-Wegweiser» | begründet (Profil, kein Krisenzugang) |
| c239 | zusammengeführt | «Grundlagen zum Nachlesen: … Schutz bei Bedrohung und Gewalt …» | trägt: Verweissätze auf `grenzen#gewalt` und `rolle#kinder` |
| c268–c274 | zusammengeführt | Grenzsetzung in drei Bausteinen (Fakt, Ich-Grenze, nächster Schritt) aus dem Handout `krisenkommunikation` | trägt über den Verweissatz auf `kommunizieren#kippen`, wo die drei Teile stehen; «nur wenn es für Sie sicher und gewollt ist – ein späteres Kontaktangebot» trägt «Bieten Sie nur einen nächsten Kontakt an, den Sie einhalten können und möchten.» |
| c283 | entfällt | «Bei akuter Gefahr oder wenn Sie die Dringlichkeit nicht sicher einschätzen können, finden Sie passende Anlaufstellen unter …» (Handout `krisenkommunikation`) | im Profil begründet; die Bemerkung verweist auf Verweise in anderen Abschnitten, in `sagen` selbst steht keiner (P2b-F-1) |

**Ist mit den Übungen eine Aussage zu Schutz, Sicherheit oder Verantwortung weggefallen, die sonst nirgends steht?** Zu Schutz und Sicherheit nein: Die Übungen enthielten nur «Diese Kommunikationsübung nimmt keine Risikoeinschätzung vor.» und den Link auf die Notfallseite (k269, k270). Zur Verantwortung entfällt eine Nuance ohne Ersatz (k572, Vergebung); alle übrigen geprüften Sätze tragen andere Stellen.

#### A3 · Neue Sätze

**(a) Rückwärtsprüfung.** Gelesen sind die 70 Sätze der zwei Seiten mit der schwächsten Übereinstimmung zum Bestand (Wortüberlappung unter 0,41; 33 auf `kommunizieren`, 37 auf `krise`). Alle sind Umformulierungen mit Zeile im Abgleich, Zwischentitel, Sätze der Liste «Neue Sätze zur Freigabe» oder der Verweis im Text. Beispiele: «Missverständnisse verringern und Tempo herausnehmen.» (k53), «Sie erlauben keine sichere Beurteilung, wie es einem Menschen innerlich geht.» (k765), «Eine Wahl kann Orientierung geben oder gerade zu viel sein.» (k532, aus `/uebungen`), «Je knapper Sie bleiben, desto eher bleibt Ihre Grenze hörbar.» (g598), «Beruhigung ist nicht dasselbe wie Klärung.» (b187). **Kein neuer Satz fehlt in der Liste.**

**(b) Die 56 Sätze der Liste ohne Verweissätze.** j = ja · t = teilweise. Die Verweissätze stehen in der Tabelle danach.

| Nr. | Satz (gekürzt) | Ort | tragbar | nahe am Bestand | Ton | Bemerkung |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | «Zuhören und die eigene Sicht behalten» | `kommunizieren` › `zuhoeren` | j | j | j | – |
| 2, 3 | «Fragen Sie, was gerade gewünscht ist:», «Und wenn Sie verschieden empfinden:» | ebenda | j | j | j | – |
| 4 | «Auch verschiedene Gefühle, Meinungen oder Wünsche nach Nähe gehören dazu. Sie sind nicht automatisch ein Zeichen fehlender Liebe.» | ebenda | j | j (b184) | t | «gehören dazu» hat keinen klaren Bezug (P2b-S-3) |
| 5–7 | «Fragen zum Innehalten», «Vor einer Antwort kann es helfen, kurz innezuhalten.», «Die Fragen sind ein Angebot:» | ebenda, Vertiefung | j | j | j | – |
| 9–11 | Kernaussage, Kurztext, Kurzbeschreibung von Abbildung 1 | `anerkennen` | j | Auftrag | j | Kurzbeschreibung: «stehen sich … gegenüber», im Bild stehen die Tassen nebeneinander an den Tischenden (P2b-V-1) |
| 12 | «Wenn Sie zugleich eine Grenze brauchen:» | `anerkennen` | j | j | j | – |
| 13 | «Eine pauschale Schuldzuweisung müssen Sie nicht übernehmen, etwa mit …» | `anerkennen` | j | j | j | – |
| 14 | «Sechs Stufen der Validierung» | `anerkennen` | j | j | j | – |
| 15 | «Übernehmen hiesse: Aus einer Beobachtung wird die Annahme, …» | `anerkennen` | j | j | t | Konjunktiv und abstrakt (P2b-S-3) |
| 16 | «Der richtige Moment» | `moment` | j | Auftrag | j | – |
| 17 | «Manche Angehörige achten im Gespräch auf drei Lagen.» | `moment` | t | t | j | Der Bestand nennt die Begriffe eine «redaktionelle Orientierung», keine Praxis von Angehörigen; «Lagen» ist ein neuer Begriff (P2b-F-5) |
| 18, 19 | Beschreibungen von «Stabil» und «Warnstufe» | `moment` | j | j | j | – |
| 21 | «Dann müssen Sie ihn unter Anspannung nicht erst suchen.» | `moment` | j | j | j | – |
| 22 | «Jetzt Sicherheit oder Pause, später Klärung» | `moment` | j | j | j | – |
| 23 | «Dafür sind Sie nicht verantwortlich, auch wenn Sie versuchen, die Lage zu beruhigen.» | `moment` | j | j | j | gleichbedeutend (Frage 8) |
| 24 | «Auch wer verletzend war, kann später Verantwortung übernehmen:» | `moment` | j | j | j | – |
| 25 | «Wenn aus einem Austausch plötzlich Streit, Rückzug oder Rechtfertigung wird, können kurze Schritte helfen.» | `kippen` | j | j | j | – |
| 26 | «Bei Bedrohung oder Gewalt beenden Sie das Gespräch, schaffen Abstand und bringen sich in Sicherheit.» | `kippen` | j | j | j | – |
| 28 | «Sie können auch sagen, was Sie tun:» | `kippen` | j | j | j | – |
| 29 | «Eine Grenze in drei Teilen» und Einleitung | `kippen` | j | j | j | dritte Schrittfolge im selben Abschnitt (P2b-F-8) |
| 31 | «Beispiel-Dialog: von der Anspannung bis zur Pause» | `kippen`, Vertiefung | j | j | j | – |
| 32 | «Harte oder vorwurfsvolle Aussagen können treffen und Angehörige stark verunsichern.» | `worte` | j | j | j | – |
| 34 | «So könnte es klingen» | `beispiele` | j | Auftrag | j | – |
| 35 | «Namen und «Person A» oder «Person B» bezeichnen keine festen Rollen …» | `beispiele` | j | j | j | – |
| 36–38 | «Nach einem Arztbesuch», «Robin kommt um 20 Uhr.», «Robin, wenn Zeit für ein Gespräch ist», «Robin, wenn die Kraft nicht mehr reicht» | `beispiele` | j | j | j | – |
| 39 | «Eine Bitte um Geld» und «Grenzen beim Geld sind oft besonders schwer, …» | `beispiele` | j | j | j | Absicherung bestätigen (Frage 7) |
| 42 | «Grundlage: Die Beispiele sind eigene didaktische Ableitungen …» | `beispiele` | j | j | j | – |
| 44 | «Diese Seite ersetzt keine professionelle Krisenberatung.» | `krise` › `belastung` | j | j | j | gleiche Aussage wie der Satz zur Fachstelle direkt danach (P2b-F-6) |
| 45 | «Sie können jederzeit direkt Hilfe holen.» | `belastung` | j | j | j | – |
| 46–48 | «Während einer Krise», «Im Gespräch», «Wenn ein Gespräch kippt» | `waehrend`, `sagen` | j | j | j | – |
| 50, 51 | Reihenfolge der drei Schritte; «Alles in einem Satz kann so klingen:», «Zum Aussteigen reicht:» | `sagen` | j | j | j | zweite Schrittfolge mit anderen Namen als auf `kommunizieren` (P2b-F-8) |
| 53 | Handlungsanleitung, «Das kann helfen, …», «Bleiben Sie …», «Direkt nachzufragen, löst …» | `suizid` | j | Wortlaut `verstehen` | j | Quelle fehlt für den letzten Satz (P2b-F-4) |
| 54 | «Diese Beurteilung ist Aufgabe von Fachpersonen, nicht von Angehörigen.» | `suizid` | j | j (c125) | j | – |
| 55 | «Was Sie in einer Krise eher vermeiden», «In einer Krise hilft es eher nicht,» | `vermeiden` | t | t | j | schwächt zwei Schutzhinweise ab (P2b-F-3) |
| 56 | «Nach einer Krise können Scham, Reue, …» | `danach` | j | Wortlaut `rolle` | j | – |
| 57 | «Welche fachliche Nachsorge nötig ist, klärt die betroffene Person …» | `danach` | j | j | j | Frage 5 (P2b-F-7) |
| 60–62 | «Wenn Sie später zurückschauen möchten:», Nachbesprechung, «Dabei muss niemand nach einer einzigen Ursache suchen.» | `danach` | j | j | j | – |
| 63, 64 | «Achten Sie auf diese Hinweise:», «Bei akuter Gefahr schützen Sie sich und holen sofort Hilfe.» | `bleibt` | j | j | j | – |
| 66 | Kinder im Wortlaut von `grenzen` | `bleibt` | j | Wortlaut `grenzen` | j | – |
| 68–70 | Einstieg «Ich weiss nicht, was ich sagen soll, wenn es schwierig wird.», Beschreibung, Platzhalter | `index` › `einstiege` | j | Auftrag | j | Der erste Einstieg nennt ebenfalls das Kippen («Ich verstehe nicht, warum Gespräche so schnell kippen.»); die beiden bleiben unterscheidbar (verstehen und handeln), kein Befund |

**Verweissätze** (Nr. 8, 20, 27, 30, 33, 40, 41, 43, 49, 52, 58, 59, 65, 67). Alle 14 Links per Skript aufgerufen: Ziel und Anker vorhanden, Linktext gleich dem Titel der Zielstelle (h2), Seitenname wie in der Navigation bzw. Titel («Zugewandt und klar sprechen», «Krisen begleiten», «Startseite»), kein Link auf eine Entwurfsseite.

| Nr. | Ort | Ziel | Abschnitt hat den angekündigten Inhalt | Bemerkung |
| --- | --- | --- | --- | --- |
| 8 | `kommunizieren` › `zuhoeren`, Vertiefung | `beziehungen#schleife` | ja: die Bedeutungsschleife | – |
| 20 | `moment` | `verstehen#anspannung` | ja: «Anspannung kann im Gespräch ansteigen und später wieder sinken.» | Die Namen der Stellen weichen von «Pause statt Streit» ab (P2b-F-5) |
| 27 | `kippen` | `grenzen#gewalt` | ja | – |
| 30 | `kippen` | `grenzen#dear` | ja: DEAR in vier Schritten | – |
| 33 | `worte` | `krise#suizid` | ja | – |
| 40 | `beispiele` | `rolle#nach-konflikten` | ja: «Machen Sie ein kurzes Angebot, ohne zu drängen …» | – |
| 41 | `beispiele` | `grenzen#saetze` | ja | – |
| 43 | `rollen` | `grenzen#rollen` | ja | – |
| 49 | `krise` › `sagen` | `kommunizieren#anerkennen` | ja | – |
| 52 | `sagen` | `kommunizieren#kippen` | ja: «Eine Grenze in drei Teilen» | Der Zielabschnitt enthält drei Schrittfolgen (P2b-F-8) |
| 58 | `danach` | `index#beratung` | ja | – |
| 59 | `danach` | `selbstfuersorge#zu-viel` | ja: Atmen, 5-4-3-2-1, STOPP | – |
| 65 | `bleibt` | `grenzen#gewalt` | ja | – |
| 67 | `bleibt` | `rolle#kinder` | ja: Erklären und Betreuung planen | – |

#### A4 · Übereinstimmung mit den freigegebenen Seiten

| Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- |
| Verantwortung wie `verstehen`, `beziehungen`, `rolle` | erfüllt | «Das bedeutet nicht, für die Erkrankung oder die Genesung der anderen Person verantwortlich zu sein.» (`anerkennen`); «Damit übernehmen Sie nicht die Aufgabe, die Gefühle, die Behandlung oder die Genesung Ihres Elternteils zu steuern.» (`rollen`). «nicht allein» steht nur bei Gespräch und Krise: «Sie sind nicht allein für den Gesprächsverlauf verantwortlich.», «Sie müssen eine Krise nicht allein deeskalieren oder bewältigen.». Einmal bei Betreuung: «Nötige Betreuung organisieren Sie gemeinsam. Sie müssen sie nicht allein übernehmen.» (Vertiefung, Bestand c186); Betreuung nach einer Krise ist nicht Behandlung, vertretbar |
| Suizid wie `verstehen` | erfüllt im Wortlaut, Quelle fehlt | Handlungsanleitung, Verweis im Text, «Bleiben Sie …» und «Direkt nachzufragen, …» in derselben Reihenfolge wie `verstehen` › `mythen`; die Quelle WHO (2026) fehlt auf `krise` (P2b-F-4) |
| Kinder wie `rolle` und `grenzen` | erfüllt | `krise` › `bleibt` gleich wie `grenzen` › `gewalt`; «sofort» bei akuter Gefahr steht; Verweis auf `rolle#kinder`. `rolle` sagt «müssen Erwachsene organisieren», `grenzen` und `krise` «Erwachsene organisieren»; beide freigegeben, kein Widerspruch |
| Keine neue absolute Aussage über die betroffene Person | erfüllt | «Sie sind nicht typisch für alle Menschen mit Borderline.», «Eine Aussage ist keine verlässliche Auskunft über ein verborgenes Motiv.», «Rückzug kann verschiedene Gründe haben.», «Gefühle und Motive der anderen Person sind von aussen nicht sicher erkennbar.», «Welche Themen schwierig werden, lässt sich nicht aus einer Diagnose ableiten.» |
| Absicherungen wie im Bestand | erfüllt bis auf zwei Stellen | Unsicherheit über die Dringlichkeit (A1 Nr. 25) und «eher vermeiden» (A1 Nr. 41) |
| Zuständigkeit | teilweise | zwei Abschnitte mit Handlungsanleitungen für akute Lagen ohne Verweis im Text (Teil F, P2b-F-1) |

#### Prüfbedarf für die Fachstelle

Nach Wichtigkeit sortiert. Jede Frage lässt sich mit Ja oder Nein oder mit einer Auswahl beantworten. Varianten halten den Bestand, wo es einen gibt. Die 11 Fragen der Selbstprüfung und die drei Punkte aus Prüfung 1 gehen darin auf: Punkt 1 → P2b-F-5; Punkt 2 → P2b-F-1 a; Punkt 3 → P2b-F-1 b. Frage 1 → P2b-F-1 a und P2b-F-10; Frage 2 → P2b-F-4; Frage 3 → P2b-F-4; Frage 4 → P2b-F-1 a; Frage 5 → P2b-F-7; Frage 6 → P2b-F-1 b; Frage 7, 8, 11 → P2b-F-10; Frage 9 → P2b-F-6; Frage 10 → P2b-F-5. Nicht gefragt sind die schon entschiedenen Punkte (Übungen, kein Bild auf `krise`, Validierung in zwei Ebenen, Längenziel, Navigation, keine Nummern, Akkordeons unter drei Einträgen, Verweise von freigegebenen Seiten, Hinweis «Entwurf» im Fuss).

1. **P2b-F-1 · Hilfe holen auf `krise`: ein Wort für Hilfe und ein Verweis im Text in jedem Abschnitt mit Handlungsanleitung.**
   - Für Hilfe stehen drei Wörter: «Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» (`waehrend`), «Bei Bedrohung bringen Sie sich in Sicherheit und informieren die Leitstelle.» (`sagen`), «Bei möglicher unmittelbarer Lebensgefahr rufen Sie den Rettungsdienst.» (`danach`). Der Verweis im Text nennt «ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei».
   - **Bewertung «Leitstelle»:** für Angehörige nicht verständlich. Es ist ein Fachwort der Rettungs- und Polizeidienste, im Schweizer Alltag sagt man «Notruf», «Polizei» oder «Sanität». Die Prüfperson weiss nach dem Satz nicht, wen sie anrufen soll.
   - **Bewertung «Rettungsdienst» ohne Verweis im Text:** Der Satz ist eine Handlungsanleitung für eine akute Lage am Anfang eines Abschnitts, den die Kapitelübersicht direkt anspringt. Der nächste Verweis im Text steht bei 360 px 2281 px darüber, in `suizid`. README «Verweis im Text»: «folgt unmittelbar ein Verweis».
   - **Bewertung `sagen`:** Der Abschnitt hat zwei Handlungsanleitungen für Bedrohung («… informieren die Leitstelle.», «Bei Bedrohung oder Gewalt gehen Sie auf Abstand und holen Hilfe.») und keinen Verweis im Text. Der nächste steht 1414 px darüber am Ende von `waehrend`; wer über die Kapitelübersicht «Was Sie sagen können» öffnet, sieht ihn nicht. Im Bestand verwies das Handout `krisenkommunikation` an dieser Stelle auf die Notfallseite (c283).
   - **Frage a (Wörter):** Soll (a) einheitlich «Notruf» stehen, ohne Nummer: `waehrend` bleibt; `sagen` «Bei Bedrohung bringen Sie sich in Sicherheit und holen Hilfe über den Notruf.»; `danach` «Bei möglicher unmittelbarer Lebensgefahr holen Sie sofort Hilfe über den Notruf.» Oder (b) bleibt der Bestand ausser «Leitstelle» → «… und rufen die Polizei.» (passt zu «bei Gefahr die Polizei» im Verweis)? Oder (c) überall «holen Sie sofort Hilfe» ohne Stelle, die Stellen nennt nur der Verweis? **Empfehlung (a):** ein Wort, das alle kennen, für den einen Anruf; «über den Notruf» bleibt in `waehrend` (Frage 1: Ja), daneben nennt der Verweis die übrigen Stellen.
   - **Frage b (Verweis im Text in `danach`):** Kommt er direkt nach dem Satz zur Lebensgefahr? Ja/Nein. **Empfehlung: Ja** (Frage 6: Es reicht nicht ohne).
   - **Frage c (`sagen`):** Soll (i) eine Handlungsanleitung für Bedrohung am Anfang von `sagen` stehen, mit dem Verweis im Text direkt danach; die zwei Bestandssätze werden dafür zu einem («Bei Bedrohung oder Gewalt gehen Sie auf Abstand, bringen sich in Sicherheit und holen Hilfe.»; neue Verdichtung)? Oder (ii) bleiben beide Sätze, mit dem Verweis nach dem zweiten? Oder (iii) kein Verweis in `sagen`? **Empfehlung (i).** Mit b und c (i) hat `krise` sechs Verweise im Text in sieben Abschnitten (bei 360 px etwa alle 2500 px). Das ist die Folge der Regel «höchstens einer je Abschnitt, unmittelbar nach der Anleitung»; die Prüfsitzung hält das auf einer Krisenseite für richtig.
2. **P2b-F-2 · Unsicherheit über die Dringlichkeit** (`krise` › `belastung`). Bestand: «Bei akuter Gefahr oder wenn Sie die Dringlichkeit nicht sicher einschätzen können, wenden Sie sich an den zuständigen Notfalldienst.» Neu: «Bei unmittelbarer Gefahr holen Sie sofort Hilfe und schützen sich selbst.»; die Unsicherheit nur als «Bei Unsicherheit ist eine professionelle Einschätzung sinnvoll.» vier Absätze später. Soll (a) die Handlungsanleitung vor dem Verweis im Text lauten: «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, holen Sie sofort Hilfe und schützen sich selbst.» (Wortlaut nach `selbstfuersorge` › `warnsignale` und `grenzen` › `gewalt`), oder (b) bleibt es? **Empfehlung (a).**
3. **P2b-F-3 · «Was Sie in einer Krise eher vermeiden»** (`krise` › `vermeiden`). Bestand: «Was Sie in der Krise vermeiden sollten» mit «✗ Sich selbst in Gefahr bringen» und «✗ Versuchen, die Gefahr allein zu beurteilen oder die Person ohne professionelle Hilfe zu überwachen». Neu: «In einer Krise hilft es eher nicht, … sich selbst in Gefahr zu bringen.» Soll (a) der Titel wieder «Was Sie in einer Krise vermeiden sollten» heissen und die Einleitung «In einer Krise sollten Sie vermeiden,» lauten, (b) «eher» für die Gesprächspunkte bleiben und die zwei Schutzpunkte als eigener, klarer Satz danach stehen («Bringen Sie sich nicht selbst in Gefahr. Versuchen Sie nicht, die Gefahr allein zu beurteilen oder die Person ohne professionelle Hilfe zu überwachen.»), oder (c) bleibt es? **Empfehlung (a)**, Bestand.
4. **P2b-F-4 · Suizid auf `krise`** (`suizid`; Fragen 2 und 3). Die Seite übernimmt von `verstehen` «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» und stellt den Bestandssatz zu Dazzi et al. daneben («… keinen statistisch signifikanten Anstieg von Suizidgedanken …»). Bewertung: Die zwei Aussagen widersprechen sich nicht; die erste betrifft Handlungen, die zweite Gedanken. Die erste steht aber ohne ihre Quelle: Auf `verstehen` und im Bestand (`quellen.md`) ist sie mit WHO, Suicide: Questions and answers (2026) belegt; die Quellenzeile auf `krise` nennt nur Dazzi et al. (2014) und NICE NG225.
   - (a) Kommt WHO (2026) in die Quellenzeile von `suizid`, wie auf `verstehen`? Ja/Nein. **Empfehlung: Ja.**
   - (b) Bleiben beide Sätze nebeneinander (Frage 2)? Ja/Nein. **Empfehlung: Ja**; sprachlich siehe P2b-S-3 («statistisch signifikant»).
   - (c) Bestätigt die Fachstelle Ort und Wortlaut von «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» nach dem Verweis im Text, wie auf `verstehen` (Frage 3)? **Empfehlung: Ja**; inhaltlich deckt der Satz den Bestandssatz «Bieten Sie nur Nähe oder Erreichbarkeit an, die für Sie möglich und sicher ist.» (c105).
5. **P2b-F-5 · «Pause statt Streit»** (`kommunizieren` › `moment`; Punkt 1 und Frage 10). Die Einleitung sagt «Die Begriffe sind eine Orientierung, keine festen Stufen.», der zweite Begriff heisst «Warnstufe». Zwei Sätze weiter verweist der Abschnitt auf die freigegebene Anspannungskurve mit den Stellen «Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.». Bewertung: Die drei Lagen entsprechen den Stellen 1 bis 3 der Kurve; dort stehen sie als Sätze aus Sicht von Menschen, wie es das Profil für Beschriftungen verlangt. Zwei Wortreihen für dasselbe machen die Verbindung schwer.
   Soll (a) «Pause statt Streit» die drei Sätze der Kurve als Begriffe übernehmen (die Beschreibungen und Beispielsätze bleiben; «Lagen» und «keine festen Stufen» werden dann durch einen Satz ersetzt, der auf die Kurve zeigt; neue Sätze zur Freigabe), (b) die Handout-Begriffe bleiben, aber «Warnstufe» z. B. «Warnzeichen» heissen, oder (c) alles bleiben? **Empfehlung (a).**
6. **P2b-F-6 · Einstieg von `krise` › `belastung`** (Frage 9). Der Abschnitt beginnt mit vier Sätzen dazu, was die Seite und die Fachstelle nicht sind: «Diese Seite ersetzt keine professionelle Krisenberatung. Die Fachstelle Angehörigenarbeit bietet Beratung und Orientierung, aber keine Krisenintervention. Sie können jederzeit direkt Hilfe holen. Diese Seite ist keine notwendige Vorstufe.» Danach erst die Handlungsanleitung. Bewertung zu Frage 9: Der Satz zur Fachstelle soll bleiben. Auf einer Seite der Fachstelle mit dem Titel «Krisen begleiten» verhindert er die Erwartung, die Fachstelle sei in Krisen zuständig (README); die Fusszeile sagt das nicht ausdrücklich. Soll (a) alles bleiben, (b) der Fachstellen-Satz bleiben, «Diese Seite ersetzt keine professionelle Krisenberatung.» entfallen (gleiche Aussage; die Fusszeile sagt «ersetzt keine individuelle Abklärung, Beratung oder Behandlung») und die Handlungsanleitung mit Verweis im Text als erster Absatz stehen, oder (c) der Fachstellen-Satz entfallen? **Empfehlung (b).**
7. **P2b-F-7 · Wer klärt die Nachsorge?** (`krise` › `danach`; Frage 5). Bewertung: Die neue Fassung «Welche fachliche Nachsorge nötig ist, klärt die betroffene Person mit dem Behandlungsteam. Dabei kann auch geklärt werden, welche Rolle Sie freiwillig übernehmen können.» ist richtig und passt zu «Angehörige werden nur mit Zustimmung der betroffenen Person in einen Krisenplan einbezogen.» und zu `rolle` («das Behandlungsteam einbeziehen, wenn die Person das möchte»). Uneinheitlich bleiben zwei Sätze in Vertiefungen: «Fachliche Nachsorge und erreichbare Kontakte werden mit dem Behandlungsteam geklärt.» (ohne Subjekt) und «Vereinbarte Hilfe überprüfen: mit dem Behandlungsteam klären, …» (Angehörige als Handelnde). Dazu «Weitere Behandlungsschritte klärt die betroffene Person mit dem Fachteam.» (`bleibt`).
   Ja/Nein: Gilt die neue Fassung, und sollen die zwei Vertiefungssätze dasselbe Subjekt bekommen («… klärt die betroffene Person mit dem Behandlungsteam»; beim zweiten «…, wenn sie das möchte, gemeinsam mit Ihnen») und «Fachteam» zu «Behandlungsteam» werden? **Empfehlung: Ja.**
8. **P2b-F-8 · Drei Schrittfolgen für kippende Gespräche.** `kommunizieren` › `kippen` hat «Eigenes Tempo senken / Verbinden / Begrenzen oder beenden» (Handout `gespraeche-kippen`), «Fakt / Ich-Grenze / Nächster Schritt» und den Beispiel-Dialog «Verbinden / Vorsichtig spiegeln / Grenze / Pause / Wiedereinstieg». `krise` › `sagen` hat «Verbinden / Kontakt / Grenze und Plan» (Handout `krisenkommunikation`). «Verbinden» meint dabei drei verschiedene Sätze. Soll (a) `krise` nur den Standardsatz und die Ausstiegssätze behalten und für die Schritte auf `kommunizieren#kippen` verweisen (die drei Bestandssätze von `krisenkommunikation` entfallen mit Grund im Abgleich), (b) beide Folgen bleiben, aber mit unterscheidbaren Namen, oder (c) bleibt alles? **Empfehlung (a):** In der Krise hilft ein Satz mehr als eine zweite Folge mit gleichen Namen.
9. **P2b-F-9 · Zuschreibung an Linehan** (`kommunizieren` › `anerkennen`). «Linehan beschreibt fünf aufeinander aufbauende Formen und als sechste Form radikale Echtheit.» steht wörtlich wie im Bestand, Quelle Linehan (1997). Die Prüfsitzung konnte das Kapitel nicht einsehen; Sekundärquellen nennen sechs aufeinander aufbauende Ebenen, die sechste als höchste. Ja/Nein: Bestätigt die Fachstelle die Zuschreibung an der Quelle? Bei Nein oder ohne Prüfung: Soll der Satz entfallen («Die sechs Stufen lehnen sich an die Validierungsstufen von Linehan … an.» trägt allein)? **Empfehlung:** an der Quelle prüfen; sonst entfallen lassen.
10. **P2b-F-10 · Bestätigungen ohne Änderung**, je Ja/Nein:
    - (a) Frage 1: Wortlaut «Begrenzen Sie den Zugang zu Medikamenten oder gefährlichen Gegenständen nur ohne Eigengefährdung, möglichst gemeinsam und nach professioneller Anleitung. Nehmen Sie nichts aus der Hand oder gegen Widerstand weg; greifen Sie nicht körperlich ein.» wörtlich wie im Bestand, sichtbar, mit Verweis im Text. **Empfehlung: Ja.**
    - (b) Frage 7: «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» **Empfehlung: Ja**; die Absicherung betrifft das Erleben der Angehörigen und unterstellt kein Gefühl.
    - (c) Frage 8: «Dafür sind Sie nicht verantwortlich, auch wenn Sie versuchen, die Lage zu beruhigen.» sagt dasselbe wie «Deeskalation macht Sie dafür nicht verantwortlich.» **Empfehlung: Ja.**
    - (d) Frage 11: Der Absatz zur Selbstverletzung steht in `suizid` statt in «Was Sie sagen können». **Empfehlung: Ja**; er gehört inhaltlich zum direkten Fragen nach Suizidgedanken und steht nach dem Verweis im Text desselben Abschnitts.
11. **P2b-F-11 · Neue Sätze und Abbildung.**
    - (a) Werden die 70 Sätze der Liste «Neue Sätze zur Freigabe» freigegeben, mit den Änderungen aus P2b-F-1 bis -8? Je Ja/Nein: Nr. 1–43 (`kommunizieren`), Nr. 44–67 (`krise`), Nr. 68–70 (`index`). Gesondert: Nr. 17 («Manche Angehörige achten im Gespräch auf drei Lagen.», hängt an P2b-F-5) und Nr. 55 (hängt an P2b-F-3).
    - (b) Wird «Zwei Tassen» (`v-ko-tassen`) fachlich freigegeben (nach Sicht auf die Abbildung bei 1280 und 360 px)? Ja/Nein. Dazu, Ja/Nein: Darf die bauende Sitzung die zwei Tassen näher zur Tischmitte rücken, damit sie als Gegenüber am selben Tisch lesen und nicht als zwei Enden mit leerer Mitte (P2b-V-1)? «Zwei gleich grosse Tassen, gleichwertig, auf demselben Tisch» bleibt.
12. **P2b-F-12 · Kürzung auf `kommunizieren`** (optional; das Längenziel ist erreicht, Teil C2). Soll die bauende Sitzung die Kürzungen der Stufe a umsetzen, die Beispielsätze des Bestands betreffen (K-K-a1, K-K-a3, K-K-a4; je Ja/Nein)? **Empfehlung:** K-K-a1 Ja (siebenmal fast derselbe Ausstiegssatz), K-K-a3 und K-K-a4 nach Wahl.

#### Befunde W1

- **P2b-W1-1 · wichtig · Hilfe holen auf `krise`: drei Wörter, zwei Abschnitte ohne Verweis im Text.**
  - **Beleg:** A1 Nr. 31, 34, 35, 42; A2 c283; Teil F (Lage der Verweise).
  - **Zuständig:** Fachstelle (P2b-F-1), danach die bauende Sitzung.
- **P2b-W1-2 · wichtig · Unsicherheit über die Dringlichkeit schwächer abgesichert als im Bestand.**
  - **Beleg:** A1 Nr. 25; A2 c2.
  - **Zuständig:** Fachstelle (P2b-F-2).
- **P2b-W1-3 · wichtig · «eher vermeiden» schwächt zwei Schutzhinweise ab.**
  - **Beleg:** A1 Nr. 41; A3 (b) Nr. 55.
  - **Zuständig:** Fachstelle (P2b-F-3).
- **P2b-W1-4 · wichtig · Quelle für «Direkt nachzufragen, löst … keine suizidale Handlung aus.» fehlt auf `krise`.**
  - **Beleg:** A1 Nr. 37; Quellenzeile von `suizid`: «Quellen: Dazzi et al. (2014), Übersicht zum direkten Fragen nach Suizidgedanken, …; NICE NG225 (2022), …».
  - **Zuständig:** Fachstelle (P2b-F-4), danach die bauende Sitzung.
- **P2b-W1-5 · optional · Zuschreibung an Linehan nicht an der Quelle geprüft.**
  - **Beleg:** A1 Nr. 11.
  - **Zuständig:** Fachstelle (P2b-F-9).
- **P2b-W1-6 · optional · Subjekt bei der Nachsorge uneinheitlich.**
  - **Beleg:** A1 Nr. 44, 47.
  - **Zuständig:** Fachstelle (P2b-F-7), danach die bauende Sitzung.
- **P2b-W1-7 · optional · Abgleich ungenau.**
  - **Beleg:** k25 nennt nicht, dass «Gründe» entfällt; k726 nicht, dass «und wann» entfällt; c190 nicht, dass «sofort» nur noch bei Lebensgefahr steht; k572 («Eine Entschuldigung schafft keinen Anspruch auf Vergebung.») ist «ersetzt durch Beispiele», steht aber auch sinngemäss nirgends, was die Bemerkung sagen sollte; k764 nennt «Lagen» und den neuen Satz Nr. 17 nicht.
  - **Vorschlag:** Bemerkungen nachführen.
  - **Zuständig:** bauende Sitzung.

### Teil B · W2 Gesamtkohärenz mit den Etappen 1 und 2a

**Begriffe** (Zählung im sichtbaren Text mit Vertiefungen, ohne Kurzbeschreibungen, je `kommunizieren` / `krise`):

- **Betroffene Person:** «betroffene Person» 0 / 5, «andere Person» 9 / 0; «Gegenüber» und «Ihr Angehöriger» 0 / 0. Wie auf den freigegebenen Seiten: «andere Person» bei direkter Ansprache im Gespräch, «betroffene Person» bei Behandlung und Krise. Einheitlich.
- **Anspannung:** 8 / 4; «Stress» und «Alarm» 0 / 0 («Alarmbereitschaft» des Bestands ist «ständige Wachsamkeit» bzw. «Anspannung»). Einheitlich.
- **Grenze:** 28 / 7, einheitlich.
- **Pause:** 10 / 1, überall Gesprächspause, aus dem Satz klar («Ich unterbreche das Gespräch jetzt.»). Kein Befund.
- **Beratung:** 0 / 4, «eigene Beratung» wie auf `rolle` und `selbstfuersorge`.
- **Wörter für Hilfe:** `krise` nennt «Notruf» (1), «Leitstelle» (1), «Rettungsdienst» (1), im Verweis «ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei» (4), dazu «Hilfe holen» (13), «professionelle Einschätzung» (3), «professionelle Hilfe/Unterstützung» (4), «Behandlungsteam» (4), «Fachteam» (1), «Fachpersonen» (2). Uneinheitlich bei der akuten Hilfe (P2b-F-1) und bei «Fachteam» (P2b-F-7).
- **Validierung / Anerkennen:** Der Abschnitt heisst «Anerkennen, ohne zuzustimmen» und erklärt im ersten Satz «Validierung heisst: …»; danach beide Wörter. Auf `krise` heisst der Punkt «Gefühle anerkennen» (Bestand «Gefühle validieren»). Einheitlich genug.
- **Gemischte Gefühle:** kommt auf den zwei Seiten nicht vor.

**Widersprüche zu den freigegebenen Seiten:** einer, die Begriffe von «Pause statt Streit» neben der Anspannungskurve (P2b-F-5). Zur Unsicherheit über die Dringlichkeit ist `krise` schwächer als `grenzen` und `selbstfuersorge` (P2b-F-2). Sonst keine: Verantwortung, Suizid, Kinder und die Reaktionen nach einer Krise stehen im Wortlaut der freigegebenen Seiten (A4).

**Doppelungen**

| Thema | Stellen | Sagen beide dasselbe? | Urteil |
| --- | --- | --- | --- |
| Kippende Gespräche | `kommunizieren` › `kippen` (drei Schritte aus `gespraeche-kippen`, drei Teile einer Grenze, Beispiel-Dialog) und `krise` › `sagen` (drei Schritte aus `krisenkommunikation`, Standardsatz, Ausstiegssätze) | im Kern ja (verbinden, kurz bleiben, Grenze, beenden), aber in zwei Schrittfolgen mit gleichen Namen für verschiedene Sätze («Verbinden» dreimal verschieden) | **teilweise ersetzbar durch einen Verweis** (P2b-F-8). Der Standardsatz und die Ausstiegssätze sind krisenspezifisch und nützlich |
| Suizid | `kommunizieren` › `worte` («Wenn Suizid angesprochen wird»), `krise` › `suizid`, `verstehen` › `mythen` | `worte` behandelt eine Drohung im Streit als Sicherheitssignal und verweist auf `krise`; `krise` wiederholt `verstehen` wörtlich und ergänzt Dazzi und Selbstverletzung | **nützlich** (anderer Blickwinkel; Sicherheitshinweis dort, wo er gebraucht wird). Quelle siehe P2b-F-4. Der Weg von `verstehen` zu `krise` ist V2 (Entscheid am Schluss von Etappe 2) |
| Kinder | `krise` › `bleibt`, `rolle` › `kinder`, `grenzen` › `gewalt` | `krise` gleicht `grenzen` Wort für Wort (sechs Sätze), `rolle` sagt mehr und verweist für Gewalt auf `grenzen` | **nützlich:** In einer Krise braucht es den Betreuungsplan sichtbar; der Verweis auf `rolle#kinder` trägt das Erklären. Kein Befund |
| Grenzsätze | `kommunizieren` › `kippen` (Fakt, Ich-Grenze, nächster Schritt) und `beispiele` («Eine Bitte um Geld»); `grenzen` › `dear`, `saetze`, `arten` («Geld und Unterstützung») | verschiedene Blickwinkel: im Moment knapp (kommunizieren) gegenüber vorbereitet (DEAR); zwei Geld-Sätze («Ich kann dir kein Geld leihen. …» und «… Weiteres Geld kann ich dir nicht leihen.») | **nützlich**, verlinkt (Verweissätze Nr. 30, 41) |
| Reaktionen nach einer Krise | `krise` › `danach` und `rolle` › `nach-konflikten` | gleicher Satz «… Scham, Reue, Erleichterung, Ärger, Rückzug oder ganz andere Reaktionen …» und «Fragen Sie nach, statt ein bestimmtes Erleben vorauszusetzen.» | **nützlich** (Krise statt Konflikt); gleicher Wortlaut wie verlangt |
| Ausstiegssätze innerhalb von `kommunizieren` | `moment` (zwei), `kippen` (vier, einer in der Vertiefung), `worte` (einer); dazu `krise` › `sagen` (drei) | fast derselbe Satz: «Ich unterbreche / beende das Gespräch jetzt. … entscheide ich später.» | **ersetzbar:** einmal ausführen («Ein Satz darf reichen»), sonst darauf zeigen (K-K-a1, P2b-F-12) |
| «Du verstehst mich sowieso nicht.» | Abbildung 1, `worte` (gleiche Antwort), Stufe 6 in der Vertiefung (andere Antwort: «Ich nehme dich ernst. Lass uns zusammen schauen, was gerade hilft.») | gleicher Vorwurf, zwei Antworten | vom Auftrag so verlangt; die zweite Antwort zeigt eine andere Stufe. Kürzung K-K-a4 nach Wahl |

**Links der zwei Seiten** (14 Links im Text, alle per Skript aufgerufen; Liste in A3): Alle Ziele und Anker existieren; der Linktext gleicht in allen 14 dem Titel der Zielstelle; kein Link auf eine Entwurfsseite. Die Kapitelübersichten (7 und 7 Einträge) zeigen auf vorhandene Abschnitte; ihre Kurzformen («Wenn es kippt», «Beispiele», «Wenn Gefahr bleibt») folgen dem Muster der übrigen Seiten. Auf `index` zeigt der neue Einstieg auf `kommunizieren.html` (h1 «Zugewandt und klar sprechen»).

**Befunde W2**

- **P2b-W2-1 · wichtig · «Pause statt Streit» spricht eine andere Sprache als die Anspannungskurve.**
  - **Beleg:** `moment`: «Die Begriffe sind eine Orientierung, keine festen Stufen.» und die Begriffe «Stabil», «Warnstufe», «Eskalation»; `verstehen` › `anspannung`: «Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.»; Verweissatz Nr. 20 verbindet beide.
  - **Zuständig:** Fachstelle (P2b-F-5), danach die bauende Sitzung.
- **P2b-W2-2 · optional · Zwei Schrittfolgen mit gleichen Namen.**
  - **Beleg:** Doppelung «Kippende Gespräche».
  - **Zuständig:** Fachstelle (P2b-F-8).
- **P2b-W2-3 · optional · Ausstiegssätze siebenmal auf `kommunizieren`.**
  - **Beleg:** Doppelung «Ausstiegssätze»; Teil C2.
  - **Zuständig:** Fachstelle (P2b-F-12), danach die bauende Sitzung.
- **P2b-W2-4 · optional · Begriffe.**
  - **Beleg:** «Fachteam» (`bleibt`) neben viermal «Behandlungsteam»; «drei Lagen» (neu, `moment`); «Leitstelle» (`sagen`).
  - **Vorschlag:** «Behandlungsteam»; «Lagen» mit P2b-F-5; «Leitstelle» mit P2b-F-1.
  - **Zuständig:** bauende Sitzung nach den Entscheiden.

### Teil C · S Sprach-Review und Länge

#### C1 · Lesetest und Kennzahlen

**Zählweise (Skript der Prüfsitzung, im Browser):**

- **Fliesstext:** innerste Blöcke `p`, `li`, `dt`, `dd` in `main`. Nicht gezählt: SVG, `.puk-sr`, Kapitelübersicht, Kicker, Eyebrow, Bezeichnung «Abbildung n · …» und Absätze, die mit «Quelle», «Quellen», «Bezugspunkte», «Grundlage» oder «Eigene didaktische Darstellung» beginnen. «Im Lesefluss» = ohne die Panels der Akkordeons; «Grenzen des Bildes» (`details`) zählt mit. Bezeichnungen in `.puk-say` (z. B. «Person A») zählen als eigene Wörter. Das ist C1 der Prüfrunde 2a und der Selbstprüfung 2b.
- **Sätze:** Satzregel von `abgleich/verneinung.mjs`; Wörter wie `kennzahlen.mjs`.
- **Verneinung:** «nicht», «nichts», «nie», «niemals», «niemand», «weder», Formen von «kein».
- **Absicherungen je 100 Wörter:** eng wie `kennzahlen.mjs` («kann» und Formen, «möglich…», «vielleicht», «nicht sicher», «nicht automatisch»); weit zusätzlich «manche», «einige», «oft», «häufig», «meist», «eher», «individuell», «nicht bei allen», «nicht vorhersag…», «nicht ableit…», «nicht garantier…», «keine bestimmte».
- **«Was Sie tun können»:** Abschnitte, deren Text die Wendung enthält.

| Seite | Wörter (`kennzahlen.mjs`, gesamt) | Wörter C1 im Lesefluss | Sätze im Lesefluss | mittlere Satzlänge (Median) | Sätze > 15 Wörter | > 25 | Sätze mit Verneinung | Absicherungen je 100 Wörter eng / weit | «Was Sie tun können» |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | --- |
| `kommunizieren` | 3370 | **2458** | 258 | 9,5 (9) | 36 (14 %) | 0 | 70 (27 %) | 2,77 / 3,54 | 4 von 7 |
| `krise` | 2075 | **1507** | 159 | 9,5 (8) | 24 (15 %) | 0 | 39 (25 %) | 2,06 / 2,46 | 0 von 7 |
| `rolle` (Vergleich, Stand nach 2a-2) | 3145 | 2627 | 276 | 9,5 (8) | 32 (12 %) | 1 | 64 (23 %) | 2,36 / 3,27 | 6 von 7 |
| `selbstfuersorge` (Vergleich) | 2679 | 2051 | 217 | 9,5 (9) | 23 (11 %) | 0 | 45 (21 %) | 2,68 / 3,12 | 4 von 7 |

Mit Vertiefungen: `kommunizieren` 3126 Wörter, 353 Sätze, 82 mit Verneinung (23 %); `krise` 1919, 204, 51 (25 %).

- **Satzlänge:** wie auf `rolle` und `selbstfuersorge` (Mittel 9,5 Wörter), etwas mehr Sätze über 15 Wörter (14 und 15 % gegenüber 11 und 12 %), kein Satz über 25. Die Vorgabe «meist unter 15 Wörtern» ist erfüllt.
- **Verneinung:** etwas höher als auf den Vergleichsseiten (27 und 25 % gegenüber 21 und 23 %). Gehäuft in `krise` › `belastung` (12 von 32 Sätzen, 38 %) und `suizid` (8 von 17, 47 %); fast alle sind Absicherungen des Bestands («Kein Bereich bedeutet automatisch «sicher» oder «gefährlich».», «Das garantiert keine bestimmte Wirkung im einzelnen Gespräch.»).
- **Absicherungen:** `kommunizieren` im Bereich der Vergleichsseiten; `krise` niedriger, weil die Seite aus Handlungsanleitungen besteht, wo Absicherungen fehlen dürfen. Bei Aussagen über die betroffene Person stehen sie (A4).
- **Handlungsteil:** `krise` nennt die Wendung nie, hat aber in sechs von sieben Abschnitten Handlungsanleitungen und Beispielsätze; nur `vermeiden` sagt allein, was nicht hilft (Lesetest b).
- **Nachgerechnet:** Die Wörter C1 je Seite und je Abschnitt stimmen mit der Selbstprüfung auf das Wort (`kommunizieren` 28 / 193 / 623 / 372 / 419 / 270 / 516 / 37; `krise` 36 / 289 / 215 / 263 / 182 / 57 / 259 / 206), ebenso «mit Vertiefungen» (3126, 1919) und die Anteile mit Verneinung (27 %, 25 %).

**Lesetest je Abschnitt** (Prüfperson: Partner oder Mutter, spät abends auf dem Handy, nach einem Streit oder während sich eine Krise anbahnt; 360 px).

- a = beim ersten Lesen verstanden (ja / mit Mühe / nein)
- b = weiss danach, was ich tun kann
- d (Ton) ist überall warm, erwachsen und ohne Schuldzuweisung, ausser wo vermerkt
- e (Absicherungen) steht nur, wo es einen Befund gibt

| Seite | Abschnitt | a | b | Stolperstellen (c) und e | Priorität |
| --- | --- | --- | --- | --- | --- |
| `kommunizieren` | Kopf | ja | – | – | – |
| `kommunizieren` | `zuhoeren` | ja | ja | «Zuhören, nachfragen und die eigene Sicht behalten dürfen gleichzeitig möglich sein.» (holprig; gleich danach «Sie dürfen zuhören, nachfragen oder eine Pause machen.»); «Auch verschiedene Gefühle, … gehören dazu.» (wozu?); «Sie sind nicht automatisch ein Zeichen fehlender Liebe.» lässt sich am Satzanfang als Anrede lesen | optional |
| `kommunizieren` | `anerkennen` | mit Mühe | ja | Längster Abschnitt (623 Wörter). Die Abbildung steht früh (218 px nach Abschnittsbeginn bei 1280 px, 362 px bei 360 px). «Linehan beschreibt fünf aufeinander aufbauende Formen und als sechste Form radikale Echtheit.»: «radikale Echtheit» wird erst in der Vertiefung erklärt. «Übernehmen hiesse: …» (Konjunktiv, abstrakt). Die Gegenüberstellung trägt die Bezeichnung «Übernehmen» ohne Wertung; dass «Es ist meine Schuld, dass es dir schlecht geht.» kein empfohlener Satz ist, ergibt sich nur aus dem Absatz davor | optional |
| `kommunizieren` | `moment` | mit Mühe | ja | «drei Lagen» und dann «Warnstufe» nach «keine festen Stufen» (P2b-F-5); «Sie erlauben keine sichere Beurteilung …» («Sie» = die Begriffe); «Zeitliche Grenzen wirken am besten, wenn Sie sie in einer ruhigen Situation ankündigen …» ohne Bezug, auf der Seite sind keine zeitlichen Grenzen eingeführt (Satz aus `grenzen` › «Zeitliche Grenzen») | wichtig |
| `kommunizieren` | `kippen` | mit Mühe | ja | Schutz zuerst, Verweis im Text richtig. Drei Schrittfolgen in einem Abschnitt (P2b-F-8); fünf fast gleiche Ausstiegssätze (K-K-a1) | optional |
| `kommunizieren` | `worte` | ja | ja | «Sie sind nicht typisch für alle Menschen mit Borderline.» («Sie» = die Sätze, am Satzanfang als Anrede lesbar). Suizid-Signal klar getrennt, mit Verweis im Text | optional |
| `kommunizieren` | `beispiele` | ja | ja | Drei Arten, Personen zu nennen: «Person A / Person B», «Alex / Robin», «die andere Person»; sonst natürlich klingende Sätze | optional |
| `kommunizieren` | `rollen` | ja | ja | nur Einleitung im Lesefluss, Inhalt in der Vertiefung (wie im Bestand) | – |
| `krise` | Kopf | ja | – | – | – |
| `krise` | `belastung` | mit Mühe | ja | Vier Sätze dazu, was die Seite nicht ist, vor der Handlungsanleitung (P2b-F-6); danach sechs Sätze dazu, was die Bereiche nicht sind, die eigentliche Hilfe (drei Bereiche mit «Eher hilfreich») beginnt bei 360 px erst 1061 px nach dem Titel, nach gut einer Bildschirmhöhe. «Sie bewerten keine Diagnose …» («Sie» = die Bereiche) liest sich am Satzanfang als Anrede. «Ein unbekannter Plan bedeutet keine Sicherheit.» ist ohne den Zusammenhang Suizid nicht verständlich. e: Unsicherheit über die Dringlichkeit (P2b-F-2) | wichtig |
| `krise` | `waehrend` | ja | ja | e: «über den Notruf» neben dem Verweis im Text (P2b-F-1) | – |
| `krise` | `sagen` | ja | ja | «Leitstelle» (P2b-F-1); zweite Schrittfolge mit «Verbinden» (P2b-F-8); e: kein Verweis im Text (P2b-F-1) | wichtig |
| `krise` | `suizid` | ja | ja | «statistisch signifikanten Anstieg» ist ein Fachbegriff; «Die von Dazzi et al. ausgewerteten Studien» ohne Einordnung, wer das ist. e: Quelle (P2b-F-4) | wichtig |
| `krise` | `vermeiden` | ja | mit Mühe | nur, was nicht hilft; das Gegenstück steht in `waehrend` und `sagen`. e: «eher» bei Schutzpunkten (P2b-F-3) | wichtig |
| `krise` | `danach` | ja | ja | «Leisten Sie keine Aufarbeitung, solange Sie selbst noch aufgewühlt sind.» abstrakt («Aufarbeitung leisten»). e: Verweis im Text fehlt (P2b-F-1) | wichtig |
| `krise` | `bleibt` | ja | ja | «Fachteam» (P2b-F-7) | optional |
| `index` | `einstiege` | ja | ja | – | – |

#### C2 · Länge

**Nachgerechnet:** Die bauende Sitzung meldet im Lesefluss 2458 Wörter (`kommunizieren`) und 1507 (`krise`), Zählweise C1. Die Prüfsitzung kommt auf dieselben Zahlen, je Abschnitt gleich (C1). Das Ziel «höchstens etwa 2500» ist erreicht, auf `kommunizieren` knapp (98 %).

**Urteil aus Sicht der Prüfperson:**

- `krise` trägt: 1507 Wörter, bei 360 px 16 436 px (etwa 21 Bildschirmhöhen), bei 200 Wörtern je Minute etwa 8 Minuten. Wer während einer anbahnenden Krise liest, springt über die Kapitelübersicht in einen Abschnitt; die Abschnitte sind kurz (57 bis 289 Wörter). Hinderlich ist nur der Anfang von `belastung` (P2b-F-6).
- `kommunizieren` ist lang: 2458 Wörter im Lesefluss, 24 890 px (etwa 31 Bildschirmhöhen), etwa 12 Minuten. Als Nachschlagewerk brauchbar, weil die Abschnitte einzeln verständlich sind. Ein grosser Teil der Länge entsteht aus Wiederholungen: siebenmal ein fast gleicher Ausstiegssatz, fünfmal «garantiert keine bestimmte Reaktion» oder ähnlich, sechsmal «keine Pflicht(folge)» oder «keine feste Reihenfolge», dreimal «Du verstehst mich sowieso nicht.». Fachliche Aussagen stehen kaum doppelt.
- Zum Vergleich: `rolle` 2627 und `selbstfuersorge` 2051 Wörter im Lesefluss (nach 2a-K).

**Kürzungsvorschläge** (das Ziel ist erreicht; alle optional). Geschätzt sind die Wörter weniger im Lesefluss. Keine neuen Texte; Absicherungen zu Person, Ursachen, Diagnose, Verlauf und Schutz, die nur einmal vorkommen, bleiben.

| ID | Seite › Abschnitt | Was genau | Wörter weniger | Fachstelle |
| --- | --- | --- | ---: | --- |
| K-K-a1 | `kommunizieren` › `moment`, `kippen` | Ausstiegssätze bündeln: Der Satz in «Ein Satz darf reichen» bleibt als Muster; bei «Eskalation» und «Nächster Schritt» genügt die Beschreibung ohne eigenen, fast gleichen Satz | 30 | ja (Beispielsätze des Bestands) |
| K-K-a2 | `kommunizieren` › `zuhoeren` | «Eine bestimmte Reaktion lässt sich nicht garantieren.» und «… aber die Reaktion der anderen Person nicht garantieren.» stehen fünf Zeilen auseinander; einer genügt | 12 | nein |
| K-K-a3 | `kommunizieren` › `zuhoeren` | «Zuhören, nachfragen und die eigene Sicht behalten dürfen gleichzeitig möglich sein.» und «Sie dürfen zuhören, nachfragen oder eine Pause machen.» zu einem Satz | 10 | ja (Wortlaut des Auftrags) |
| K-K-a4 | `kommunizieren` › `worte` | «Du verstehst mich sowieso nicht.» mit derselben Antwort wie in Abbildung 1: in der Liste weglassen; dieselbe Antwort steht in Abbildung 1 (`anerkennen`) | 17 | ja (Auftrag nennt beide Stellen) |
| K-K-b1 | `kommunizieren` › `beispiele` | «Typische schwierige Situationen» (im Bestand ein Akkordeon) in eine Vertiefung; der Satz «Wenn Sie sich um die Sicherheit sorgen, holen Sie eine professionelle Einschätzung.» bleibt sichtbar | 100 | nein (Struktur) |
| K-C-a1 | `krise` › `belastung` | wie P2b-F-6 (b): «Diese Seite ersetzt keine professionelle Krisenberatung.» entfällt, Handlungsanleitung zuerst | 7 | ja (P2b-F-6) |

**Summen:** `kommunizieren` Stufe a −69, Stufe b −100, danach etwa 2290 Wörter im Lesefluss; `krise` etwa 1500.

#### C3 · Schreibweise

- Kein «ß», keine „…“ (`grep` in `content/kommunizieren.html`, `content/krise.html`, `content/index.html`: 0).
- Kein Telegrammstil im Fliesstext; Listenpunkte im Infinitiv wie auf den freigegebenen Seiten («das eigene Sprechtempo senken»).
- **«Sie» am Satzanfang für Dinge:** «Sie bewerten keine Diagnose …» (die Bereiche), «Sie sind nicht typisch für alle Menschen mit Borderline.» (die Sätze), «Sie erlauben keine sichere Beurteilung …» (die Begriffe), «Sie sind nicht automatisch ein Zeichen fehlender Liebe.» (die Gefühle), «Sie sind keine Pflichtfolge, …» (die Stufen). Am Satzanfang ist das von der Anrede nicht zu unterscheiden (wie P2a-S-2).

**Befunde S**

- **P2b-S-1 · optional · Wiederholte Ausstiegssätze und Hinweisformeln auf `kommunizieren`.**
  - **Beleg:** C2.
  - **Vorschlag:** K-K-a1 bis a4; K-K-b1 nach Wahl.
  - **Zuständig:** Fachstelle (P2b-F-12) für a1, a3, a4; bauende Sitzung für a2 und b1.
- **P2b-S-2 · optional · Einstieg von `krise` › `belastung`.**
  - **Beleg:** Lesetest `belastung`; 12 von 32 Sätzen verneint.
  - **Vorschlag:** P2b-F-6 (b); die Absicherungen zu den Bereichen bleiben, wie entschieden.
  - **Zuständig:** Fachstelle (P2b-F-6), danach die bauende Sitzung.
- **P2b-S-3 · optional · Einzelstellen.**
  - **Beleg und Vorschlag** (Bedeutung bleibt):
    - «Sie bewerten …», «Sie sind nicht typisch …», «Sie erlauben …», «Sie sind nicht automatisch …» → das Subjekt nennen («Die Bereiche bewerten …», «Diese Sätze sind …»).
    - «Auch verschiedene Gefühle, Meinungen oder Wünsche nach Nähe gehören dazu.» → sagen, wozu («… gehören zu einer Beziehung»), oder Bestandswortlaut b184.
    - «Zeitliche Grenzen wirken am besten, …» → Bezug herstellen («Grenzen dafür, wie lange oder wann Sie sprechen, …»); neuer Wortlaut, Fachstelle.
    - «Ein unbekannter Plan bedeutet keine Sicherheit.» → sagen, welcher Plan (z. B. «Wenn Sie nicht wissen, ob die Person einen Plan hat, heisst das nicht, dass sie sicher ist.»); neuer Wortlaut, Fachstelle.
    - «keinen statistisch signifikanten Anstieg» → in Alltagssprache («… haben Suizidgedanken durch direktes Fragen nicht messbar zugenommen»); Fachstelle, weil Quellenaussage.
    - «radikale Echtheit» im Lesefluss in einem Halbsatz erklären oder den Satz nach P2b-F-9 kürzen.
  - **Zuständig:** bauende Sitzung; neue Wortlaute zur Freigabe.
- **P2b-S-4 · optional · Beispiele und Gegenüberstellungen.**
  - **Beleg:** «Person A / Person B» (Arztbesuch), «Alex / Robin», «die andere Person» (Geld); Bezeichnung «Übernehmen» in `anerkennen` ohne Wertung, während die Geld-Gegenüberstellung «Eher problematisch / Eher hilfreich» nutzt.
  - **Vorschlag:** in allen drei Beispielen Namen; bei «Übernehmen» die Wertung sichtbar machen (z. B. «Übernehmen, eher belastend»).
  - **Zuständig:** bauende Sitzung.

### Teil D · Visualisierungs-Check und Bildsprache

**Bildschirmfotos** bei 1280 und 360 px, je Theme Standard und «kontrast» (vier Fotos), angesehen. Masse:

| Figur | Figur 1280 px | Zeichnung 1280 px | Figur 360 px | Zeichnung 360 px | Lage im Abschnitt (Abstand vom Abschnittsanfang 1280 / 360 px) |
| --- | --- | --- | --- | --- | --- |
| «Zwei Tassen» (`v-ko-tassen`) | 1104 × 680 | 760 × 238 | 320 × 716 | 320 × 100 | 218 / 362 px: direkt nach dem ersten Absatz von `anerkennen`, wie im Auftrag |

**Beschreibung der Bildschirmfotos**

- **1280 px:** Titel, Kernaussage als grosser Satz, Kurztext. Darüber der Zeichnung zwei Sätze mit blauer Randlinie: links unten «Du verstehst mich sowieso nicht.», rechts, drei Zeilen hoch, «Vielleicht verstehe ich nicht alles. Wenn du möchtest, sag mir, was dir gerade besonders wichtig ist.». Darunter ein breiter, hellblauer Tisch mit weichen Ecken. Auf ihm stehen zwei gleiche weisse Tassen von vorne, je mit zwei Dampflinien, die linke nahe am linken, die rechte nahe am rechten Tischende; die Henkel zeigen nach aussen. Zwischen den Tassen bleibt etwa die Hälfte des Tisches leer. Die Hinterkante des Tisches läuft hinter den Tassen durch.
- **360 px:** Die zwei Sätze stehen untereinander über der Zeichnung. Die Tassen sind etwa 34 × 35 px gross und klar als Tassen mit Dampf erkennbar. Welche Tasse welchen Satz sagt, ergibt sich nur aus der Reihenfolge.
- **«kontrast»:** Linien dunkelblau (`rgb(0, 40, 194)`), Tischfläche und Tassen gleich; nichts verschwindet.
- **Kontrast der Linien** (WCAG 1.4.11): gegen Weiss 4,71 : 1 (Standard) und 10,08 : 1 («kontrast»), gegen die Tischfläche 3,59 : 1 und 7,70 : 1. Keine Linie unter 3 : 1.

**Matrix** (E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar)

| Nr. | Prüfpunkt | «Zwei Tassen» | Beleg (bei T und N) |
| --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | – |
| 3 | Prüffrage beantwortet und eingelöst | E | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | – |
| 5 | Ansatzpunkt (B, C, G) | – | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | – |
| 7 | Kartenraster-Check | E | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | – |
| 9 | Verteilt, keine Textwand | **E** | – |
| 10 | Vereinfacht, nicht verfälscht; Grenzen; Quelle | E | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | – |
| 13 | Theme «kontrast» | E | – |
| 14 | Fachlich freigegeben | N | `approvalStatus` «ausstehend»; Gate production `visual-approval` (P2b-F-11) |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | – |
| 16 | Ein Bild, eine Idee; Erleben beschriften | E | – |
| 17 | Keine ungewollten Bedeutungen | T | Die Tassen stehen an den zwei Tischenden mit leerer Mitte; das kann als Abstand oder Kühle gelesen werden, obwohl der Abschnitt Zuwendung meint. Von vorne gezeichnet stehen sie nebeneinander, nicht «gegenüber», wie Plan und Kurzbeschreibung sagen. Schmal ist die Zuordnung der Sätze nur über die Reihenfolge erkennbar (P2b-V-1) |

**Abweichung von der Selbstprüfung** (fett): Punkt 9 E statt T. Die Seite hat nur eine Abbildung, und vier Abschnitte sind Text; das ist im Plan je Abschnitt begründet und von der Fachstelle so entschieden (keine zweite Kurve, Listen statt Treppe). Eine unbegründete Textwand liegt nicht vor; die Länge steht in Teil C2. Punkt 17 ist gleich (T), mit anderem Hauptgrund (Abstand der Tassen statt Tee und Henkel).

**Bildsprache, Fragen B1–B11** (Zuordnung wie in Prüfrunde 2a, Teil D)

| Frage | «Zwei Tassen» |
| --- | --- |
| B1 erster Eindruck | ruhig, warm, alltäglich: ein Tisch, zwei dampfende Tassen, ein Gespräch. Passt zu «zugewandt»; der harte Satz steht dazu im Kontrast, was die Aussage stützt |
| B2 Form | organisch: weiche Tischform, leicht unregelmässige Tassen, runde Linienenden; keine Kästen |
| B3 Ein Bild, eine Idee | ja; keine Legende, keine benannten Bildteile |
| B4 Wiedererkennen und Ton | ja: «Du verstehst mich sowieso nicht.» ist ein Satz, den Angehörige kennen; würdevoll, nicht verniedlichend |
| B5 Platz der Angehörigen | ja: die rechte Tasse mit der Antwort |
| B6 Nebenbedeutungen | grosse leere Mitte (Abstand); Tee kann ein ruhiges Gespräch nahelegen, während der Text bei Eskalation Pause und Schutz nennt; keine Gefahr- oder Defektbilder |
| B7 Wirkung | eingelöst über das Satzpaar: Wiedererkennen beim harten Satz, Entlastung bei der Antwort |
| B8 Erleben beschriften | ja, zwei gesprochene Sätze |
| B9 fachlich vereinfacht | ja: «Von aussen lässt sich nicht sicher erkennen, was hinter einem Satz steht.» (Grenzen des Bildes); Kernaussage aus dem Handout |
| B10 Braucht es ein Bild? | knapp ja: Das Satzpaar trüge auch als `.puk-say`; die Zeichnung fügt Gleichwertigkeit und einen ruhigen Moment hinzu (Entscheid der Fachstelle) |
| B11 Freundin-Test | eher ja, mit den Sätzen («So möchte ich antworten»); ohne Sätze ein Stillleben |
| **Bewertung** | **trägt** (kleine Verfeinerung möglich, P2b-V-1) |

**Befunde Visualisierungs-Check**

- **P2b-V-1 · optional · «Zwei Tassen»: Abstand der Tassen.**
  - **Beleg:** Punkt 17; Beschreibung 1280 px.
  - **Vorschlag:** die Tassen näher zur Tischmitte rücken, damit sie als Gegenüber am selben Tisch lesen; fest bleiben zwei gleich grosse Tassen auf demselben Tisch. Die Kurzbeschreibung entsprechend prüfen («gegenüber» oder «nebeneinander»).
  - **Zuständig:** Fachstelle (P2b-F-11 b), danach die bauende Sitzung.

### Teil E · Bedienung und Barrierefreiheit (automatisiert)

Chromium über Playwright, lokal; alle Werte selbst gemessen.

- **Überlauf** (`scrollWidth − clientWidth` und Elemente ausserhalb des Fensters): 108 Messungen, alle 0 px.
  - Seiten: `kommunizieren`, `krise`, `index`.
  - Breiten: 320, 360, 375, 768, 1024, 1280 und 1440 px; 200 %: 640 px bei Faktor 2 und 1280 px mit Schriftgrösse 200 %.
  - Je Theme Standard und «kontrast», je Vertiefungen zu und offen.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps bis zur Fusszeile: `kommunizieren` 32, `krise` 25; erster Stopp «Zum Hauptinhalt»; bei jedem Stopp sichtbarer Fokus; jeder fokussierte Stopp liegt im Fenster.
  - Reihenfolge: Kopf (Logo, fünf Punkte der Navigation, E-Mail-Adresse), Kapitelübersicht, dann Vertiefungen und Links im Text in Lesereihenfolge.
  - Akkordeons: Enter öffnet 9 von 9 (`kommunizieren`) und 4 von 4 (`krise`), Leertaste schliesst alle; «Grenzen des Bildes» öffnet mit Enter.
  - Bewegung: Unter reduzierter Bewegung laufen nur Übergänge von 0,01 ms (Breite, Schatten, Drehung des Pfeils); ohne reduzierte Bewegung läuft eine Sekunde nach dem Laden keine Animation.
- **Ohne Skript:** Panels 9 von 9 und 4 von 4 sichtbar.
- **Druck** (`emulateMedia print`): alle Panels und «Grenzen des Bildes» sichtbar (10 von 10, 4 von 4). PDF erzeugt (25 und 16 Seiten); nicht Seite für Seite angesehen.
- **Kontrast** (WCAG 1.4.3): aller Text mit eigenem Textknoten in `main`, Vertiefungen offen, 1280 und 360 px, beide Themes.
  - `kommunizieren` 265, `krise` 146, `index` 28 Elemente; keines unter AA.
  - Tiefster Wert 4,71 : 1 (Kicker) im Standard-Theme, 8,19 : 1 im Theme «kontrast».
- **Nicht prüfbar:** reale Screenreader-Läufe, Hardwaretastatur und Touch. Sie brauchen eine Person (Stufe 5) und sind offen, nicht bestanden.

### Teil F · Technik und Zuständigkeit (Stichprobe)

| Prüfung | Ergebnis (selbst ausgeführt am Stand `26af566`) |
| --- | --- |
| `node tools/build.mjs` | 15 Seiten, Build r4-7, Gate draft: **0 blockierend, 11 Hinweise**: 1 × `visual-approval` (`v-ko-tassen`), 8 × `placeholder-approval`, 1 × `site-url`, 1 × `review-report`. `git status` danach ohne Änderung |
| `node tools/gate.mjs --selftest` | **53/53 bestanden** |
| `node tools/gate.mjs --production` | **10 blockierend, 1 Hinweis**: 1 × `visual-approval`, 8 × `placeholder-approval` (`index` › Einstiege und die Seitenplatzhalter von `diagnose`, `behandlung`, `genesung`, `unterstuetzung`, `fragen`, `quellen`, `ueber`), 1 × `review-report`; Hinweis `site-url`. Wie im Bauauftrag 2b, Abschnitt 7, erwartet |
| `node abgleich/pruefe-abgleich.mjs` | **4502 Zeilen, 0 ohne Fundstelle** |
| `node abgleich/kennzahlen.mjs` | Wörter `kommunizieren` 3370, `krise` 2075 (alt: Seite allein 4114 und 1916); Absicherungen je 100 Wörter alt → neu 3,23 → 2,64 und 2,04 → 2,17; Semikolons 36 → 0 und 18 → 1 |
| `node abgleich/verneinung.mjs` | `kommunizieren` 83 von 402 (21 %), `krise` 52 von 241 (22 %); alt 16 % und 23 % |
| `node abgleich/bedienung.mjs` | Tabstopps `index` 15, `kommunizieren` 32, `krise` 25; Höhe bei 360 px 4636 / 24 890 / 16 436 px; Abbildung 716 px. Die Seiten der Etappen 1 und 2a gleich wie nach 2a-K |

**Kennzahlen der bauenden Sitzung:** nachgerechnet und **bestätigt**, ohne Abweichung: Wörter C1 je Seite und Abschnitt, mit Vertiefungen und nach `kennzahlen.mjs`; Anteile mit Verneinung (C1 und `verneinung.mjs`); Tabstopps, Seiten- und Figurhöhen; Selbsttest, Produktionsgate und Abgleich; Linienkontraste der Zeichnung (4,71 / 10,08 / 3,59 / 7,70 : 1). Die Zahl der Textelemente für den Kontrast weicht ab (Selbstprüfung 286 / 165 / 47, Prüfsitzung 265 / 146 / 28), weil die Prüfsitzung nur Elemente mit eigenem Textknoten ohne `.puk-sr` zählt; das Ergebnis (keines unter AA, tiefster Wert 4,71 : 1) ist gleich.

**Zuständigkeit und Krisenzugang** (`kommunizieren.html`, `krise.html`, `index.html` und ihre `content/`-Dateien):

- `tel:`-Links: 0. `style`-Attribute: 0. Hexwerte oder `fill=`/`stroke=`-Attribute im SVG: 0.
- Telefonnummern im sichtbaren Text: 0 (gesucht: «+41», «0800», Muster «0xx xxx xx xx», 143, 144, 147, 117, 112, 118).
- Kein Notfallblock; kein Link auf eine Notfallseite.
- **Verweis im Text:** nur über den Platzhalter (`kommunizieren` 2, `krise` 4), Wortlaut aus `responsibility.inline`; keiner in `figure` oder Vertiefung; höchstens einer je Abschnitt; `sensitiveTopics` beider Seiten: «selbstgefaehrdung», «gewalt», «akute-krise».

| Seite › Abschnitt | Was direkt davor steht | Lage bei 360 px | Nach einer Handlungsanleitung? | Trägt er? |
| --- | --- | --- | --- | --- |
| `kommunizieren` › `kippen` | «Bei Bedrohung oder Gewalt beenden Sie das Gespräch, schaffen Abstand und bringen sich in Sicherheit.» | 13 321 px | ja | ja |
| `kommunizieren` › `worte` | «… Versuchen Sie nicht, Motiv oder Gefährdung allein zu beurteilen.» | 18 177 px | ja | ja |
| `krise` › `belastung` | «Bei unmittelbarer Gefahr holen Sie sofort Hilfe und schützen sich selbst.» | 1830 px | ja | ja; Unsicherheit fehlt in der Anleitung (P2b-F-2) |
| `krise` › `waehrend` | «… Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | 4634 px | ja | ja |
| `krise` › `sagen` | – | – | **zwei Anleitungen ohne Verweis**: «… informieren die Leitstelle.» (6048 px) und «Bei Bedrohung oder Gewalt gehen Sie auf Abstand und holen Hilfe.» (7436 px) | nein (P2b-F-1 c) |
| `krise` › `suizid` | «… Zum Beispiel: «Ich mache mir Sorgen um dich. Denkst du gerade daran, dir das Leben zu nehmen?»» | 8496 px | ja | ja |
| `krise` › `danach` | – | – | **Anleitung ohne Verweis**: «Bei möglicher unmittelbarer Lebensgefahr rufen Sie den Rettungsdienst.» (10 777 px, Abschnittsbeginn 10 628 px) | nein (P2b-F-1 b) |
| `krise` › `bleibt` | «Bei akuter Gefahr schützen Sie sich und holen sofort Hilfe.» | 14 612 px | ja | ja |

**Etappe 1 und 2a unverändert:** `git diff e3f7187 26af566` auf `content/` und die gebauten Seiten: nur `index` › `einstiege` (ein neuer Eintrag, neuer Platzhalter) sowie `kommunizieren` und `krise`; `verstehen`, `beziehungen`, `grenzen`, `rolle` und `selbstfuersorge` ohne Änderung (`--word-diff`: 0 Änderungen).

**Befunde T:** keine. Die zwei fehlenden Verweise im Text sind fachliche Fragen und stehen in P2b-W1-1.

### Zählung der Befunde der Prüfrunde 2b

| Stufe | kritisch | wichtig | optional |
| --- | ---: | ---: | ---: |
| W1 | 0 | 4 | 3 |
| W2 | 0 | 1 | 3 |
| S | 0 | 0 | 4 |
| V (Visualisierungs-Check) | 0 | 0 | 1 |
| B (Bedienung und Barrierefreiheit) | 0 | 0 | 0 |
| T (Technik und Zuständigkeit, Stichprobe) | 0 | 0 | 0 |

Dazu 12 Fragen an die Fachstelle (P2b-F-1 bis P2b-F-12) und 6 Kürzungsvorschläge (K-K-a1 bis K-C-a1).

**Gesamturteil:** Fachlich tragen die zwei Seiten. Sie übertragen den Bestand mit seinen Absicherungen, übernehmen Verantwortung, Suizid und Kinder im Wortlaut der freigegebenen Seiten und halten die Zuständigkeit ohne Nummern ein. Vor der Freigabe des Wortlauts muss die Fachstelle vier Stellen auf `krise` entscheiden, die alle Schutz und Hilfe betreffen (P2b-F-1 bis -4), und die Begriffe von «Pause statt Streit» (P2b-F-5). Sinnvoll ist, dass eine Korrektur 2b-K die Entscheide F-1 bis F-8 und die Bemerkungen im Abgleich (P2b-W1-7) in einem Durchgang umsetzt; danach kann die Fachstelle die neuen Sätze und die Abbildung freigeben (P2b-F-11).

**Nicht geprüft, und warum:**

- **Vorschau auf Netlify:** Die Adresse `deploy-preview-10--puk-website-profil.netlify.app` war aus dieser Umgebung gesperrt (Proxy: «connect_rejected»). Geprüft ist der gebaute Stand im Repository über einen lokalen Server; ob die Vorschau denselben Stand zeigt, ist offen.
- **Reale Screenreader-Läufe, Hardwaretastatur und Touch:** brauchen eine Person (Teil E).
- **Verweise von den freigegebenen Seiten auf die neuen Seiten** (Vorschläge der bauenden Sitzung): auftragsgemäss nicht geprüft.
- **Linehan (1997) im Original:** nicht eingesehen (P2b-F-9).
- **Zweite, unabhängige Prüfsitzung** (Prüftiefe, empfohlen für W1 und Visualisierungs-Check): gibt es für diese Runde nicht; alle Befunde stammen aus dieser einen Prüfung.
- **Auftrag ab Teil C2 abgeschnitten:** Die Teile C2 bis F folgen dem Aufbau der Prüfrunde 2a. Fehlt darin ein Prüfpunkt des vollständigen Auftrags, ist er offen.

## Prüfrunde 2a (10.10.2026, Stand 94afac7)

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `94afac7` (Etappe 2a, `git log -1` beim Start). Geprüft sind die Seiten `rolle` («Ihre Rolle klären») und `selbstfuersorge` («Auf sich achten») sowie auf `index` der Abschnitt `einstiege`. Etappe 1 (`index`, `verstehen`, `beziehungen`, `grenzen`) ist von der Fachstelle freigegeben; sie dient hier nur als Massstab für Begriffe, Ton und Absicherungen. Die Prüfsitzung hat die Website nicht gebaut. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht.

**Vorgehen**

- **Grundlagen gelesen:** aus `guidelines/` die Abschnitte Ablauf (mit «Prüftiefe»), Fachliche Qualität, Gesamtkohärenz, Sprache und Ton, Visuelle Wissensvermittlung («Bildsprache», «Ein Bild, eine Idee»), Visualisierung umsetzen (Check 1–17, «Metaphern und Illustrationen zeichnen») und Pre-Release-Audits (R2 Teil 2 und 3); `README.md` («Zuständigkeit statt Krisenzugang», «Verweis im Text», «Kritische Information nie nur hinter …»); im Website-Ordner `BAUAUFTRAG-ETAPPE-2A.md`, die Selbstprüfung 2a, die vierte Prüfrunde, das Bildsprache-Audit, `UMBAUPLAN.md`, `site.config.json` und `abgleich/` (`README.md`, `rolle.md`, `selbstfuersorge.md`).
- **Bestand:** Branch `origin/borderline-bestand`, `bestand/borderline-angehoerige/texte/` (73 Dateien) und `INVENTAR.md`, mit `git show` ausgelesen. Gelesen sind alle Bestandsquellen aus Bauauftrag Abschnitt 3 und 4: `unterstuetzen--uebersicht.md`, `unterstuetzen--alltag.md`, `selbstfuersorge.md` und die 16 Handouts.
- **Abgleich:** `abgleich/rolle.md` (768 Zeilen) und `abgleich/selbstfuersorge.md` (671 Zeilen) per Skript in Zeilen zerlegt und nach Status gefiltert.
- **Rückwärtsprüfung:** Ein Skript der Prüfsitzung sucht für jeden Satz der zwei Seiten (sichtbarer Text, 700 Sätze) den ähnlichsten Satz im ganzen Bestand (Wortüberlappung). Die 106 Sätze mit der schwächsten Übereinstimmung sind von Hand gegen den Bestand gelesen (Teil A3).
- **Browser:** lokal `python3 -m http.server 8765` im Projektstamm, Chromium über Playwright. Bildschirmfotos beider Abbildungen bei 1280 und 360 px, je im Theme Standard und «kontrast» (acht Fotos, alle angesehen, nicht committet; die Belege beschreiben sie). Die Vorschau-Adresse auf Netlify war aus dieser Umgebung nicht erreichbar (Teil «Nicht geprüft»).
- **Skripte der bauenden Sitzung:** selbst ausgeführt, Werte nicht übernommen (Teil F). Dazu eigene Skripte für Kennzahlen, Links, Überlauf, Tastatur und Kontrast.

**Ergebnis in Kürze**

- Die zwei Seiten übertragen den Bestand treu. In 48 verglichenen Aussagen ist keine Sicherheitsaussage entfallen, keine neue absolute Aussage über die betroffene Person dazugekommen, und die Absicherungen zu Person, Diagnose und Verlauf stehen wie im Bestand.
- Zwei fachliche Stellen brauchen einen Entscheid der Fachstelle, bevor der Wortlaut freigegeben werden kann:
  - `rolle` › `schuld` übernimmt Bestandssätze, die den Entscheiden zu Etappe 1 widersprechen: «… ohne die ganze Verantwortung für die Erkrankung … zu übernehmen» und «Behandlung und Genesung müssen Sie nicht allein tragen» (P2a-F-1).
  - `rolle` › `kinder` verweist für das, was Kinder nicht übernehmen müssen, auf den Gewaltabschnitt von `grenzen`. Im Bestand stand dieser Inhalt auch ausserhalb des Gewaltkontexts (P2a-F-2, Vorschlag einer Fassung).
- Die Seiten sind sehr lang (`rolle` 3339, `selbstfuersorge` 2955 Wörter, bei 360 px etwa 38 und 32 Bildschirmhöhen). Für die Prüfperson tragen sie als Nachschlagewerk, nicht als Lesestück. Die Abbildungen stehen spät im Abschnitt (P2a-V-1). Zwei Stufen von Kürzungen ohne Aussageverlust stehen in Teil C2.
- Technik, Zuständigkeit, Bedienung und Kontrast sind ohne Befund. Die Kennzahlen der bauenden Sitzung stimmen auf das Wort.

### Teil A · W1 Fachliche Vorprüfung

#### A1 · 48 Aussagen gegen den Bestand

Je Seite 24 Aussagen. Ausgewählt nach Auftrag: betroffene Person, Schuld, Verantwortung und Ursachen, Kinder, riskantes Verhalten, Substanzen und Geld, Schutz und Gewalt, Gesundheit der Angehörigen, Handlungshinweise. Nr. = Zeile im Abgleich (r = `abgleich/rolle.md`, s = `abgleich/selbstfuersorge.md`). Bestandsdateien in `texte/`; «Handout x» = `materialien--text--x.md`.

**`rolle`**

| # | Nr. | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- | --- |
| 1 | r470, s55 | «Sie können einen eigenen Fehler anerkennen, ohne die gesamte Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» (`selbstfuersorge.md`, «Wenn Schuldgefühle dazukommen»); dazu Handout `schuld-verantwortung`: «… ohne für die gesamte Erkrankung oder Genesung einer anderen Person verantwortlich zu sein.» | «Sie können einen eigenen Fehler anerkennen, ohne die ganze Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» (`rolle` › `schuld`) | gleichbedeutend mit dem Bestand. **Widerspricht** `verstehen` › Annahme 3: «Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.» «Die ganze Verantwortung» setzt einen Teil voraus (P2a-F-1) |
| 2 | r479 | «Behandlung und Genesung müssen Sie nicht allein tragen.» (Handout `schuld-verantwortung`, «Ich tue nicht genug.») | wörtlich (`schuld`, «Fünf Sätze …») | gleichbedeutend. **Spannung** zu `verstehen` › Annahme 3 («nicht für die Genesung verantwortlich») und `index` › `haltung`. Die Fachstelle hat bei P4-F-3 «nicht allein» für den Verlauf gestrichen und nur für die Beziehung behalten (P2a-F-1) |
| 3 | r488 | «Sie müssen die Erkrankung nicht heilen und weder Behandlung noch Genesung allein tragen.» (Handout `schuld-verantwortung`, Merksatz) | wörtlich (`schuld`, Absatz nach den fünf Sätzen) | wie Nr. 2 |
| 4 | r476 | «Belastende Erfahrungen können mitwirken; für konkrete verletzende Handlungen können Sie Verantwortung übernehmen.» (Handout `schuld-verantwortung`) | «Belastende Erfahrungen können mitwirken. Für konkrete verletzende Handlungen können Sie Verantwortung übernehmen.» (`schuld`, Antwort auf «Wenn ich ein besserer Elternteil gewesen wäre …») | gleichbedeutend. Die freigegebene Fassung auf `verstehen` ergänzt «… neben vielen anderen Einflüssen. Daraus folgt keine Schuld …». Hier steht der Satz ohne diese Einordnung direkt als Antwort an Eltern (P2a-F-1 c) |
| 5 | r454 | «Aus der Diagnose lässt sich keine individuelle Schuldzuweisung ableiten; Verantwortung für konkrete verletzende oder gewalttätige Handlungen bleibt davon getrennt.» (Handout `schuld-verantwortung`) | «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten.» und «Die Verantwortung für eigene verletzende oder gewalttätige Handlungen bleibt bestehen.» (`schuld`) | gleichbedeutend |
| 6 | r480 | «Genesung hängt von vielen persönlichen, sozialen und professionellen Faktoren ab. Sie sind nicht für den Verlauf einer anderen Person verantwortlich.» (Handout `schuld-verantwortung`) | wörtlich (`schuld`) | gleichbedeutend |
| 7 | r382–r384, r425 | «Behandlung, persönliche Entscheidungen und Lebensumstände beeinflussen den Verlauf. Angehörige können Genesung nicht herstellen. Eine schwierigere Phase beweist nicht, dass Sie zu wenig getan haben.» (Handout `garten`); «Genesung wird von der Person selbst mitgestaltet …» (Handout `leuchtturm`) | Kernaussage «Sie können begleiten. Genesung herstellen können Sie nicht.»; Kurztext «Die Person gestaltet ihre Genesung selbst mit. Auch Behandlung, Beziehungen, Lebensumstände und Unterstützung in der Gesellschaft beeinflussen den Verlauf. Eine schwierigere Phase …» (`anbieten`, Abbildung 1) | gleichbedeutend (zwei Handouts zusammengeführt) |
| 8 | r373 | «Wie und wann ein Mensch sich verändert, lässt sich daraus nicht vorhersagen.» (Handout `garten`) | wörtlich (Abbildung 1, Vertiefung «Grenzen des Bildes») | gleichbedeutend. Die Absicherung steht nur in der Vertiefung; der Abschnittstext sagt aber selbst «können … unterstützen» (Garten-Satz) und ist damit abgesichert |
| 9 | r18 | «Sie können nicht jede Krise verhindern, keine Entwicklung erzwingen und nicht dauerhaft die innere Regulation eines anderen Menschen übernehmen.» (`unterstuetzen--uebersicht.md`) | Liste «Sie können nicht:» mit «jede Krise oder Eskalation verhindern», «eine Entwicklung erzwingen», «auf Dauer die Gefühle eines anderen Menschen ausgleichen» (`an-grenzen`) | gleichbedeutend («Regulation» etwas enger, wie auf `beziehungen` freigegeben) |
| 10 | r485 | «Betreuung, Unterstützung und Sicherheit müssen Erwachsene organisieren; Kinder brauchen altersgerechte Informationen und verlässliche Bezugspersonen.» (Handout `schuld-verantwortung`) | «Betreuung, Unterstützung und Sicherheit organisieren Erwachsene.» (`kinder`) | **Bedeutung leicht verschoben:** Aus der Pflicht («müssen») wird eine Beschreibung. README: «Bestehende Sorge- und Schutzaufgaben werden klar benannt.» (P2a-F-2) |
| 11 | r68, r739 | «Kinder müssen weder Streit schlichten noch Medikamente kontrollieren oder einen Elternteil bewachen.» (`unterstuetzen--uebersicht.md`, «Wann Unterstützung an Grenzen kommt»; Handout `kinder`) | nur als Verweis: «Was Kinder nicht übernehmen müssen, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» (`kinder`) | **Bedeutung verschoben:** Der Inhalt gilt im Bestand allgemein; der Verweis stellt ihn unter Gewalt (P2a-F-2) |
| 12 | r72, r744 | «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» (`unterstuetzen--uebersicht.md`) | auf `rolle` nicht; dort «Bei Angst, Gewalt oder fehlender Betreuung organisieren Erwachsene Hilfe.» (Handout `kinder`) | **Absicherung fehlt auf der Seite:** «sofort» bei akuter Gefahr steht nur auf `grenzen` › `gewalt` (P2a-F-2) |
| 13 | r732 | «Das Kind muss weder die Behandlung erklären noch die Familie zusammenhalten.» (Handout `kinder`) | wörtlich (`kinder`) | gleichbedeutend |
| 14 | r245 | «Bei unmittelbarer Selbst- oder Fremdgefährdung oder bei Gewalt holen Sie Hilfe und schützen sich.» (`unterstuetzen--alltag.md`) | «Gefährdet ein Mensch sich selbst oder andere unmittelbar, oder kommt es zu Gewalt: Holen Sie Hilfe und schützen Sie sich.» und danach der Verweis im Text (`an-grenzen`) | gleichbedeutend |
| 15 | r247, r248 | «Riskante oder abrupte Entscheidungen können in unterschiedlichen Belastungslagen vorkommen. Sie treten nicht bei allen Menschen mit Borderline auf und sagen nichts über Charakter oder Absicht aus.» (`unterstuetzen--alltag.md`) | in drei Sätzen: «… können in unterschiedlichen belastenden Lagen vorkommen. Sie treten nicht bei allen Menschen mit Borderline auf. Über Charakter oder Absicht sagen sie nichts aus.» (`an-grenzen`) | gleichbedeutend |
| 16 | r257 | «Beobachtbarer oder riskanter Konsum von Alkohol, Cannabis oder anderen Substanzen; die mögliche Funktion bleibt offen» (`unterstuetzen--alltag.md`) | «sichtbarer oder riskanter Konsum von Alkohol, Cannabis oder anderen Substanzen; wozu er dient, bleibt offen» (`an-grenzen`) | gleichbedeutend |
| 17 | r281 | «Eigene Sicherheit priorisieren: Fahren mit unter Einfluss stehender Person ablehnen» (`unterstuetzen--alltag.md`) | «die eigene Sicherheit zuerst: nicht mitfahren, wenn die Person unter Einfluss steht» (`an-grenzen`) | gleichbedeutend |
| 18 | r264 | «Gemeinsame Konten getrennt halten, wenn das Muster bekannt ist» (`unterstuetzen--alltag.md`) | wörtlich, klein geschrieben (`an-grenzen`) | gleichbedeutend |
| 19 | r283 | «Wenn die Person das möchte, das Behandlungsteam einbeziehen; eigene Beratung können Sie unabhängig nutzen» (`unterstuetzen--alltag.md`) | «das Behandlungsteam einbeziehen, wenn die Person das möchte; eigene Beratung können Sie unabhängig davon nutzen» (`an-grenzen`) | gleichbedeutend |
| 20 | r647 | «Angehörige müssen die Situation nicht allein beurteilen oder absichern.» (Handout `6-leitlinien`) | «Sie müssen die Lage nicht allein beurteilen oder absichern.» (`an-grenzen`, nach dem Verweis im Text) | gleichbedeutend |
| 21 | r575 | «Transparente Absprachen können Orientierung geben; ihre Wirkung lässt sich nicht vorhersagen.» (Handout `konsistenz-prinzip`) | «Ob eine Absprache wirkt, lässt sich nicht vorhersagen.» (`alltag`) | gleichbedeutend |
| 22 | r111, r112 | «Manche Angehörige berichten in belastenden Phasen von Anspannung, vorsichtigem Abtasten, Rückzug nach Konflikten, Schuldgefühlen oder Erreichbarkeitsdruck. Andere erleben den Alltag anders; aus einer Diagnose lässt sich der Beziehungsverlauf nicht vorhersagen.» (`unterstuetzen--alltag.md`) | «Manche Angehörige berichten von belastenden Phasen im Alltag. Sie sind angespannt, tasten sich vorsichtig heran oder ziehen sich nach Konflikten zurück. … Aus einer Diagnose lässt sich nicht vorhersagen, wie eine Beziehung verläuft.» (`alltag`) | gleichbedeutend; «Sie sind angespannt …» lässt sich als Anrede lesen (P2a-S-2) |
| 23 | r655 | «Sicherheit und die Autonomie aller Beteiligten haben Vorrang.» (Handout `6-leitlinien`) | «Respekt gilt für alle Beteiligten.» (`alltag`) | **Bedeutung leicht verschoben** («Autonomie», «Vorrang»). Getragen von «Die betroffene Person darf ein Angebot annehmen, verändern oder ablehnen.» und «Ihre eigenen Warnsignale und Ihre Sicherheit haben Vorrang.»; kein Prüfbedarf, nur Abgleich (P2a-W1-4) |
| 24 | r29 | «alles Schwierige stellvertretend zu regulieren» (`unterstuetzen--uebersicht.md`) | «alle Probleme stellvertretend zu lösen» (`anbieten`, Wortlaut Handout `rolle-klaeren`) | gleichbedeutend im Ganzen; die Regulation von Gefühlen steht in «jede Anspannung aufzufangen» |

**`selbstfuersorge`**

| # | Nr. | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- | --- |
| 25 | s15 | «Bei Gefahr hat Schutz Vorrang:» (`selbstfuersorge.md`, «Was Sie sich jetzt schenken können») | ersetzt durch den Verweis im Text (`eigenes-leben`); davor steht «Kurze Übungen finden Sie im Abschnitt «Wenn es gerade zu viel ist».» | Schutz getragen, der Verweis ist stärker. Der Anlass-Satz selbst fehlt, so dass der Verweis nicht nach einer Handlungsanleitung steht (P2a-T-1, P2a-F-4) |
| 26 | s17, s19, s109 | «Wenn angenehm: vier Sekunden ein, sechs Sekunden aus, ohne Atemanhalten oder besonders tiefes Atmen. … Bei Schwindel oder Unwohlsein beenden Sie die Übung.»; «Bei Schwindel, Luftnot oder Unwohlsein stoppen Sie und atmen in Ihrem gewohnten Rhythmus weiter.» (`selbstfuersorge.md`) | «Wenn es für Sie angenehm ist: vier Sekunden ein, sechs Sekunden aus. Halten Sie den Atem nicht an, und atmen Sie nicht besonders tief. … Bei Schwindel, Luftnot oder Unwohlsein hören Sie auf und atmen in Ihrem gewohnten Rhythmus weiter.» (`zu-viel`) | gleichbedeutend |
| 27 | s285 | «Langsames Atmen kann körperliche Regulationsprozesse und akute Anspannung beeinflussen (Zaccaro et al., 2018); daraus folgt keine Wirkungsgarantie für jede Person» (`selbstfuersorge.md`) | «Langsames Atmen kann Anspannung beeinflussen. Dass es bei jeder Person wirkt, ist nicht garantiert.» (`zu-viel`) | gleichbedeutend |
| 28 | s104, s512 | «Bei Gewalt oder akuter Gefahr holen Sie Hilfe, statt weiterzuüben.» (`selbstfuersorge.md`); «Bei Bedrohung, Gewalt oder akuter Selbstgefährdung geht Hilfeholen vor dem Weiterüben.» (Handout `stopp-technik`) | «Bei Bedrohung, Gewalt, akuter Gefahr oder Selbstgefährdung holen Sie Hilfe, statt weiterzuüben.» und danach der Verweis im Text (`zu-viel`) | gleichbedeutend, im Sinn der Sicherheit etwas weiter |
| 29 | s67 | «Diese Anzeichen sind unspezifisch: Sie können bei Überlastung auftreten, aber auch andere körperliche oder psychische Ursachen haben. Sie sind keine Diagnose und kein Beweis, dass Sie «zu wenig» für sich tun.» (`selbstfuersorge.md`) | «Die folgenden Anzeichen können bei Überlastung auftreten. Sie können aber auch andere körperliche oder psychische Ursachen haben. Sie sind keine Diagnose und kein Beweis, dass Sie «zu wenig» für sich tun.» (`warnsignale`) | gleichbedeutend |
| 30 | s449 | «Sie erlauben keine Einschätzung der Dringlichkeit. Fehlende Anzeichen bedeuten keine Entwarnung …» (Handout `warnsignale`) | «Sie zeigt auch nicht, wie dringend etwas ist. Fehlende Anzeichen bedeuten keine Entwarnung.» (`warnsignale`) | gleichbedeutend |
| 31 | s100 | «Sprechen Sie bei Bedarf mit Ihrer Hausärzt:in oder einer psychologischen Fachperson, damit auch andere Ursachen abgeklärt werden können.» (`selbstfuersorge.md`) | «Sprechen Sie bei Bedarf mit Ihrer Hausärztin, Ihrem Hausarzt oder einer psychologischen Fachperson. Dabei können auch andere Ursachen abgeklärt werden.» (`warnsignale`) | gleichbedeutend |
| 32 | s481 | «Wenn Sie sich nicht mehr sicher fühlen oder die Dringlichkeit nicht einschätzen können, wenden Sie sich an professionelle Hilfe. Warten Sie nicht auf bestimmte Warnzeichen.» (Handout `warnsignale`) | «Wenn Sie sich nicht mehr sicher fühlen oder nicht einschätzen können, wie dringend es ist, wenden Sie sich an professionelle Hilfe. Warten Sie nicht auf bestimmte Warnzeichen.» und danach der Verweis im Text (`warnsignale`) | gleichbedeutend |
| 33 | s176 | «Bei anhaltender Erschöpfung, Schlafproblemen oder depressiver Stimmung kann eine ärztliche oder psychotherapeutische Abklärung sinnvoll sein.» (`selbstfuersorge.md`) | «… oder gedrückter Stimmung kann …» (`kraft`) | gleichbedeutend (Alltagswort) |
| 34 | s136 | «Wenn Sie merken, dass die Übung Sie eher zusätzlich stresst, lassen Sie sie weg …» (`selbstfuersorge.md`) | «Wenn die Übung Sie eher zusätzlich stresst, lassen Sie sie weg.» (`zu-viel`) | gleichbedeutend |
| 35 | s391 | «Angehörigen- oder Sorgearbeit kann psychisch, körperlich, sozial und finanziell belasten.» (Handout `energie-konto`) | «Die Sorge für einen nahestehenden Menschen kann psychisch, körperlich, sozial und finanziell belasten.» (`kraft`) | gleichbedeutend |
| 36 | s392 | «Nicht jede Belastung lässt sich durch persönliche Selbstfürsorge ausgleichen. Auch praktische Entlastung und Unterstützung von aussen gehören in den Blick.» (Handout `energie-konto`) | «Nicht jede Belastung lässt sich durch Selbstfürsorge ausgleichen. … Dann braucht es praktische Entlastung und Unterstützung von aussen.» (`kraft`) | gleichbedeutend |
| 37 | s406 | «Wenig planbare Unterbrechungen und fehlende Pausen können Erholung erschweren.» (Handout `energie-konto`) | «Diese ständige Bereitschaft kann Kraft kosten, auch wenn nichts passiert.» (Abbildung 1, Kurztext) | gleichbedeutend im Kern; «auch wenn nichts passiert» ist neu (Liste Nr. 13) |
| 38 | r111 | «Manche Angehörige berichten … von … Erreichbarkeitsdruck.» (`unterstuetzen--alltag.md`) | «Manche Angehörige bleiben auch an einem freien Abend innerlich auf Abruf.» (Abbildung 1, Kernaussage) | gleichbedeutend; Absicherung «manche» gehalten (nicht «viele» wie im Profilbeispiel) |
| 39 | s303 | «Das ist eine mögliche Erfahrung, kein typischer oder aus der Diagnose vorhersehbarer Beziehungsverlauf.» (`unterstuetzen--alltag.md`) | «Das ist eine mögliche Erfahrung. Es ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen.» (`kraft`) | gleichbedeutend |
| 40 | s307 | «Angehörige sind weder für die Vorhersehbarkeit einer Beziehung noch für die Regulation einer anderen Person verantwortlich.» (`unterstuetzen--alltag.md`) | «Sie sind aber weder dafür verantwortlich, dass eine Beziehung vorhersehbar ist, noch dafür, die Gefühle eines anderen Menschen auszugleichen.» (`kraft`) | gleichbedeutend |
| 41 | s314 | «Vereinbaren Sie eine Verfügbarkeit, die Sie freiwillig übernehmen können, und klären Sie professionelle Hilfewege für Krisen.» (`unterstuetzen--alltag.md`) | «Vereinbaren Sie eine Erreichbarkeit, die Sie freiwillig übernehmen können. Und klären Sie, welche professionelle Hilfe es für Krisen gibt.» (`kraft`) | gleichbedeutend |
| 42 | s344 | «Sie dürfen zuerst oder ausschliesslich für die eigene Sicherheit und Gesundheit sorgen.» (Handout `sauerstoffmaske`) | «Sie dürfen zuerst oder ausschliesslich für sich sorgen.» (`unterstuetzung`) | gleichbedeutend im Zusammenhang (der Satz davor nennt Sicherheit und Gesundheit) |
| 43 | s354 | «Selbstfürsorge kann entlasten. Schuldgefühle können trotzdem bestehen bleiben oder zunächst stärker werden. Das ist kein Beweis, dass Sie etwas falsch machen.» (Handout `sauerstoffmaske`) | «… Schuldgefühle können trotzdem bleiben oder zuerst sogar stärker werden. Das beweist nicht, dass Sie etwas falsch machen.» (`unterstuetzung`) | gleichbedeutend |
| 44 | s275 | «Ein Schuldgefühl allein erklärt weder die Erkrankung noch Ihre Verantwortung. Eigene Fehler lassen sich ernst nehmen, ohne für alles verantwortlich zu sein.» (`selbstfuersorge.md`, «Als Elternteil») | wörtlich (`eigenes-leben`, «Eltern») | gleichbedeutend; passt zu `verstehen` › Annahme 3 |
| 45 | s557, s589 | «Akzeptanz heisst nicht bleiben, schweigen oder Gewalt tolerieren.»; «Bei Gefahr geht Schutz vor Akzeptanzübung.» (Handout `radikale-akzeptanz`) | «Akzeptanz heisst auch nicht, zu bleiben, zu schweigen oder Gewalt hinzunehmen. Bei Gefahr geht Schutz vor.» und Verweis auf `grenzen` › «Wenn Gewalt oder Bedrohung vorkommt» (`akzeptanz`) | gleichbedeutend |
| 46 | s213 | «Das Konzept der Radikalen Akzeptanz ist ein zentrales Element der Dialektisch-Behavioralen Therapie (DBT).» (`selbstfuersorge.md`) | «Der Begriff stammt aus der Dialektisch-Behavioralen Therapie (DBT), einer wissenschaftlich untersuchten Psychotherapie für Borderline.» (`akzeptanz`) | **Zusatz aus anderer Bestandsquelle:** «wissenschaftlich untersuchten Psychotherapie für Borderline» stammt aus `glossar.md` Z. 108, nicht aus den Quellen der Seite, und fehlt in der Liste neuer Sätze; «zentrales Element» entfällt (P2a-F-9) |
| 47 | s632 | «Pausen machen, wenn es zu viel wird – bei akuter Gefahr aber Hilfe holen.» (Handout `erlaubnis-karte`) | «Pausen machen und auftanken, wenn es zu viel wird» (`eigenes-leben`, Liste «Sie dürfen:»); die akute Gefahr trägt der Verweis im Text oben im selben Abschnitt | gleichbedeutend über den Verweis; hängt von P2a-F-4 ab |
| 48 | s283 | «Die Übertragung in konkrete Alltagsschritte ist eine redaktionelle Orientierung, keine Wirkungsgarantie.» (`selbstfuersorge.md`, Forschungsstand) | «Das ist eine Orientierung, keine Garantie, dass sie wirken.» (`beratung`) | gleichbedeutend |

**Bilanz:** 42 gleichbedeutend, davon 4 mit Widerspruch oder Spannung zu den Entscheiden der Etappe 1 (Nr. 1–4). Bei 3 ist die Bedeutung verschoben (Nr. 10, 11 und 23; Nr. 23 nur leicht und getragen). 2 Absicherungen fehlen auf der Seite (Nr. 12 Kinder bei akuter Gefahr; Nr. 25 Anlass-Satz des Verweises). 1 Zusatz stammt aus einer anderen Bestandsquelle (Nr. 46). Keine Aussage ist neu ohne Grundlage. Keine Sicherheitsaussage ist entfallen; die zwei fehlenden Stellen stehen auf `grenzen` bzw. im Verweis im Text.

#### A2 · 25 Zeilen des Abgleichs mit Status «entfällt», «zusammengeführt» oder «verschoben»

| Nr. | Status | Bestand (Kern) | Trägt die neue Fassung? Ist «entfällt» begründet? Stimmt die Vormerkung? |
| --- | --- | --- | --- |
| r67, r68 | verschoben → `grenzen#gewalt` | «Erwachsene organisieren Hilfe und Betreuung. Kinder müssen weder Streit schlichten …» | Fassung steht dort wörtlich. **Ort passt nicht:** Im Bestand stehen die Sätze in «Wann Unterstützung an Grenzen kommt», nicht nur bei Gewalt (P2a-F-2) |
| r72 | verschoben → `grenzen#gewalt` | «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» | wie oben; auf `rolle` › `kinder` fehlt der Satz |
| r736 | verschoben → `grenzen#gewalt` | «Welche zweite erwachsene Person ist erreichbar, wenn die erste ausfällt?» | trägt («… und wer einspringt, wenn diese ausfällt»). Auf `rolle` steht dafür der Satz «Dort steht auch, wer einspringt, wenn die erste Person ausfällt.» ohne Bezug für «die erste Person» |
| r737 | zusammengeführt | «Den Plan mit den beteiligten Erwachsenen vereinbaren und dem Kind erklären.» | nur teilweise: «… dem Kind erklären» steht nur auf `grenzen` («Besprechen Sie den Plan in einfachen Worten.»); die Bemerkung nennt das |
| r125 | verschoben → `selbstfuersorge#kraft` | «Eine Pause gleicht dauerhafte Überlastung nicht automatisch aus; manchmal müssen sich Aufgaben oder Bedingungen ändern.» | trägt; die Fassung zitiert nur den zweiten Teil, der erste steht dort als «Auch eine Pause gleicht dauernde Überlastung nicht automatisch aus.» |
| r145 | verschoben → `selbstfuersorge#kraft` | «Sie müssen nicht ständig erreichbar sein oder jede Stimmung ausgleichen.» | teilweise: «… oder jede Stimmung ausgleichen» fehlt in der Fassung; inhaltlich getragen von «… die Gefühle eines anderen Menschen auszugleichen» (`kraft`). Die Bemerkung nennt es nicht (P2a-W1-4) |
| r148–r150 | verschoben → `kommunizieren (Etappe 2)` | Einleitung der Gesprächsbeispiele «Person A / Person B» | richtig vorgemerkt (Bauauftrag: Gesprächstechniken gehören zu `kommunizieren`) |
| r453 | verschoben → `verstehen#borderline` | «Eine Borderline-Persönlichkeitsstörung hat keine einfache einzelne Ursache.» | trägt («Borderline hat nicht eine einzige Ursache.») |
| r458 | verschoben → `verstehen#borderline` | «Sie bestimmen weder Erkrankung noch Verlauf allein.» (Genetik und Temperament) | teilweise: «Verlauf» ist auf `verstehen` nicht getragen; vertretbar, weil die Gene-Aussage dort nicht einzeln steht (P2a-W1-4) |
| r460 | verschoben → `verstehen#borderline` | «Eine Diagnose erlaubt keine einfache Zuordnung von Ursache oder Schuld zu einer Person.» | trägt («Die Schuld bei der betroffenen Person oder bei Angehörigen zu suchen, ist zu einfach.»); auf `rolle` zusätzlich «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten.» |
| r461, r462 | verschoben → `verstehen#mythen` | Kindheitsbelastungen «stehen in Studien mit Borderline in Zusammenhang. Das beweist keine einfache individuelle Ursache …» | trägt (Annahme «Borderline ist dasselbe wie Trauma») |
| r116 | zusammengeführt | «Das ist kein Auftrag, den Alltag einer anderen Person zu regulieren.» | trägt («Sie müssen keine andere Person beruhigen …», Kopf) |
| r314 | zusammengeführt | «Therapie, Kontrolle und Verantwortung für die Genesung gehören nicht zu Ihrer Rolle.» | trägt (Liste «Was nicht Ihre Aufgabe ist:», auch «für den Verlauf der Genesung verantwortlich zu sein») |
| r611, r646 | zusammengeführt | «In akuter Gefahr haben Sicherheit und professionelle Hilfe Vorrang.»; «Bei akuter Gefahr gelten die vorhandenen Sicherheits- und Notfallwege.» | trägt (Verweis im Text in `an-grenzen`) |
| r655 | zusammengeführt | «Sicherheit und die Autonomie aller Beteiligten haben Vorrang.» | teilweise (A1 Nr. 23) |
| r424 | zusammengeführt | «Die Metapher verteilt keine festen Rollen: Die betroffene Person ist kein steuerloses Schiff, und Sie müssen kein dauernd ruhiger Anker sein.» | trägt für die Angehörigen; der Teil über die betroffene Person entfällt mit der Leuchtturm-Bildwelt (Bauauftrag 2d), begründet |
| r496–r500 | entfällt | Quelle Gunderson et al. (2018) | begründet (Ursachen stehen auf `verstehen`), als Prüfbedarf vermerkt (P2a-F-10) |
| r331 | entfällt | «Die rechte Spalte grenzt bewusst ab …» | begründet (Erklärung der Druckgrafik) |
| r108, r146, r246, r310 | entfällt | Links auf «Akute Hilfe und Notfallkontakte» | begründet (Profil); an ihrer Stelle Zuständigkeitsverweis und Verweis im Text |
| s15 | zusammengeführt | «Bei Gefahr hat Schutz Vorrang:» | trägt im Schutz, siehe A1 Nr. 25 |
| s55 | verschoben → `rolle#schuld` | «… ohne die gesamte Verantwortung für die Erkrankung …» | trägt; Widerspruch zu Etappe 1, siehe A1 Nr. 1 |
| s62, s234 | verschoben → `index#beratung` | «Klären Sie direkt bei der Fachstelle, wer das Angebot nutzen kann, ob Kosten entstehen …» | trägt: `index` › `beratung` nennt «alle Angehörigen», «kostenlos», «Schweigepflicht», Ort und Form |
| s238 | zusammengeführt → Fusszeile | «Die Fachstelle ist kein Krisendienst.» | trägt (Zuständigkeitsverweis in jeder Fusszeile) |
| s327 | verschoben → `kommunizieren (Etappe 2)` | «Bei Sorge um Sicherheit finden wir passende professionelle Hilfe unter «Akute Hilfe und Notfallkontakte».» | richtig vorgemerkt; **Hinweis für 2b:** Beim Bau von `kommunizieren` gilt der Verweis im Text, kein Link auf eine Notfallseite |
| s371, s420, s648 | entfällt | Kennzeichnungen «redaktionelle Reflexionsmetapher, kein validiertes Wirkungsmodell» (Sauerstoffmaske), «Redaktionelle Reflexionsmetapher» (Energie-Konto), «kein validiertes Instrument» (Erlaubnis-Karte) | begründet, weil die Seite die Metaphern nicht als Modell zeigt; als Prüfbedarf vermerkt (P2a-F-10) |

**Weitere Feststellungen zum Abgleich:**

- s213 (DBT) steht als «umformuliert (einfache Sprache, 2a)», obwohl die Fassung einen Zusatz aus `glossar.md` trägt (A1 Nr. 46). Richtig wäre «zusammengeführt» mit Nennung von `glossar.md`, oder «neu (2a)» für den Zusatz.
- s65: Der Verweissatz «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» ist als «zusammengeführt» mit dem Linktext «Beratung für mich finden» geführt. Er ist ein Verweissatz wie Nr. 4–11 und 20–23 der Liste und fehlt dort.
- Die Prüfbedarf-Abschnitte am Ende der zwei Tabellen (10 und 8 Punkte) sind in P2a-F-1 bis -10 aufgenommen, soweit sie etwas ändern würden.

#### A3 · Neue Sätze

**(a) Rückwärtsprüfung.** Gelesen sind die 106 Sätze mit der schwächsten Übereinstimmung zum Bestand (63 auf `rolle`, 43 auf `selbstfuersorge`, Wortüberlappung unter 0,36 bzw. 0,40). Fast alle sind Umformulierungen, Teilsätze geteilter Bestandssätze, Zwischentitel aus dem Bestand oder Sätze der Liste. Zwei Stellen fehlen in der Liste «Neue Sätze zur Freigabe»:

- «… einer wissenschaftlich untersuchten Psychotherapie für Borderline.» (`selbstfuersorge` › `akzeptanz`; Grundlage `glossar.md` Z. 108, A1 Nr. 46).
- «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» (`selbstfuersorge` › `beratung`, Verweissatz; Abgleich s65).

Dazu kommt ein Verweissatz, der als Umformulierung eines Bestandslinks geführt ist: «Wie Sie Grenzen setzen und halten, steht auf der Seite «Grenzen setzen».» (`rolle` › `an-grenzen`, r43). Er nennt die Seite anders als die übrigen Verweise (P2a-W2-1).

**(b) Die 25 Sätze der Liste.** Ohne die Verweissätze; die stehen gesammelt in der Tabelle danach.

| Nr. | Satz (gekürzt) | Ort | fachlich tragbar | nahe am Bestand | Ton | Bemerkung |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | «Sie können begleiten.» | `rolle` › Abb. 1, Kernaussage | ja | ja (`garten`: «Ich kann diesen Weg begleiten …») | ja | – |
| 2 | Kurzbeschreibung «Zeichnung: Zwei Menschen gehen nebeneinander …» | `rolle` › Abb. 1 | ja | Wortlaut des Auftrags | ja | beschreibt das Bild zutreffend; die Gehbewegung ist im Bild kaum sichtbar (P2a-V-2) |
| 3 | «Innehalten, bevor Sie reagieren» | `rolle` › `alltag`, Zwischentitel | ja | ja (`alltag`: «Nicht sofort reagieren …») | ja | – |
| 12 | «Manche Angehörige bleiben auch an einem freien Abend innerlich auf Abruf.» | `selbstfuersorge` › Abb. 1 | ja | ja (A1 Nr. 38) | ja | – |
| 13 | «Das Buch liegt bereit, der Tee wird kalt, … auch wenn nichts passiert.» | `selbstfuersorge` › Abb. 1 | ja | ja (A1 Nr. 37) | ja | Die Zeichnung zeigt Dampf über der Tasse; «wird kalt» und Dampf passen nur knapp zusammen (P2a-V-3) |
| 14 | «Vielleicht ruft sie gleich an.» | `selbstfuersorge` › Abb. 1 | – | – | – | entschieden: wird «Vielleicht kommt gleich eine Nachricht.» (nicht erneut gefragt); der Satz steht dreimal (P2a-T-2) |
| 15 | «Eigentlich wollte ich lesen.» | `selbstfuersorge` › Abb. 1 | ja | Profilbeispiel | ja | – |
| 16 | «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Das Bild zeigt eine Erfahrung, die manche beschreiben, keine Pflicht und keinen Fehler.» | `selbstfuersorge` › Abb. 1, Vertiefung | ja | Wortlaut des Auftrags | ja | «keine Pflicht und keinen Fehler» liest sich beim ersten Mal schwer: Gemeint ist, dass ständige Bereitschaft weder Pflicht noch Fehler ist (P2a-S-4) |
| 17 | Kurzbeschreibung «Zeichnung eines Tisches am Abend …» | `selbstfuersorge` › Abb. 1 | ja | Profilbeispiel | ja | enthält den Satz Nr. 14; ändert sich mit ihm |
| 18 | «Ruhig atmen» | `selbstfuersorge` › `zu-viel` | ja | ja | ja | – |
| 19 | «5-4-3-2-1: im Hier und Jetzt ankommen» | `selbstfuersorge` › `zu-viel` | ja | ja («im Hier und Jetzt zu verankern») | ja | – |
| 24 | «Ich weiss nicht mehr, was meine Aufgabe ist und was nicht.» | `index` › `einstiege` | ja | Wortlaut des Auftrags | ja | trifft den Inhalt von `rolle` |
| 25 | «Ich bin erschöpft und komme selbst zu kurz.» | `index` › `einstiege` | ja | Wortlaut des Auftrags | ja | liegt nahe bei «Ich kann nicht mehr …» (`grenzen`); beide Einstiege bleiben unterscheidbar, kein Befund |

**Verweissätze** (Nr. 4–11, 20–23 und die zwei Sätze aus (a)). Geprüft sind Ziel, Linktext und ob der Abschnitt den angekündigten Inhalt hat.

| Nr. | Ort | Seite und Abschnitt stimmen | Abschnitt hat den angekündigten Inhalt | Bemerkung |
| --- | --- | --- | --- | --- |
| 4 | `rolle` › `schuld` | ja (`verstehen#borderline`) | ja: «Borderline hat nicht eine einzige Ursache. Mehrere Dinge wirken zusammen …» | Für Eltern mit Schuldgefühlen wäre `verstehen` › «Häufige Annahmen – und was realistischer ist» (Annahme «Angehörige sind schuld.») das entlastendere Ziel. Das jetzige Ziel nennt «Erfahrungen … beim Aufwachsen» als Mitursache ohne die Einordnung von Annahme 3 (P2a-F-8) |
| 5 | `rolle` › `alltag` | ja (`selbstfuersorge#kraft`) | ja: «Sie müssen nicht rund um die Uhr erreichbar sein. …» | – |
| 6 | `rolle` › `alltag` | ja (`verstehen#anspannung`) | teilweise: Die Kurve zeigt Stellen («Es wird eng»), sagt aber: «Wo jemand gerade steht, lässt sich von aussen nicht sicher erkennen.» «Woran Sie merken» verspricht etwas mehr | Fassung wie Nr. 21 wäre genauer (P2a-W2-1) |
| 7 | `rolle` › `nach-konflikten` | ja (`beziehungen#was-hilft`) | ja: «später, in einem eigenen Gespräch: klären, wer wofür Verantwortung übernimmt …» | – |
| 8 | `rolle` › `kinder` | Ziel vorhanden (`grenzen#gewalt`) | ja, aber im Unterabschnitt «Wenn Kinder mitbetroffen sind» unter dem Gewaltabschnitt | stellt Kinder unter Gewalt (P2a-F-2) |
| 9 | `rolle` › `kinder` | – (ohne Link) | ja («… und wer einspringt, wenn diese ausfällt») | «die erste Person» hat auf `rolle` keinen Bezug; doppelt zu «Halten Sie fest, wer das Kind betreut, wenn ein Elternteil ausfällt …» (P2a-F-2) |
| 10 | `rolle` › `an-grenzen` | ja (`grenzen#gewalt`) | ja | – |
| 11 | `rolle` › `an-grenzen` | ja (`selbstfuersorge.html`) | ja | – |
| 20 | `selbstfuersorge` › `eigenes-leben` | ja (`#zu-viel`) | ja | – |
| 21 | `selbstfuersorge` › `kraft` | ja (`verstehen#anspannung`) | ja | – |
| 22 | `selbstfuersorge` › `unterstuetzung` | ja (`rolle#schuld`) | ja | nennt die Seite «Ihre Rolle klären», die Navigation «Ihre Rolle» (P2a-W2-1) |
| 23 | `selbstfuersorge` › `akzeptanz` | ja (`grenzen#gewalt`) | ja | gleicher Wortlaut wie auf `beziehungen` («Was dann wichtig ist, …») |
| (a) | `selbstfuersorge` › `beratung` | ja (`index#beratung`) | ja | nicht in der Liste (A3 a) |
| (r43) | `rolle` › `an-grenzen` | ja (`grenzen.html`) | ja | nennt die Seite «Grenzen setzen», alle anderen Verweise «Grenzen» (P2a-W2-1) |

#### A4 · Übereinstimmung mit den Entscheiden zu Etappe 1

| Prüfpunkt | Ergebnis | Beleg |
| --- | --- | --- |
| Schuld wie `verstehen` › Annahme 3 | **nicht erfüllt** an einer Stelle | `rolle` › `schuld`: «… ohne die ganze Verantwortung für die Erkrankung … zu übernehmen» gegen «keine Aufteilung von Verantwortung für die Erkrankung» (A1 Nr. 1). Erfüllt dagegen: «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten.», «Ein Schuldgefühl allein erklärt weder die Erkrankung noch Ihre Verantwortung.» (`selbstfuersorge` › `eigenes-leben`) |
| Verantwortung wie `beziehungen` › `verantwortung` («Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.») | **teilweise** | erfüllt: «für den Verlauf der Genesung verantwortlich zu sein» (Liste «Was nicht Ihre Aufgabe ist»), «Sie sind nicht für den Verlauf einer anderen Person verantwortlich.»; nicht erfüllt: «Behandlung und Genesung müssen Sie nicht allein tragen.» und «… weder Behandlung noch Genesung allein tragen.» (A1 Nr. 2, 3). Auch innerhalb von `rolle` uneinheitlich: Der Kopf sagt «… nicht ihre Behandlung oder Genesung tragen» (ohne «allein») |
| Keine neue absolute Aussage über die betroffene Person | erfüllt | Alle Aussagen über die Person tragen die Absicherungen des Bestands, zum Beispiel «Sie treten nicht bei allen Menschen mit Borderline auf.», «Aus einer Handlung allein lassen sich weder Motiv noch Charakter eines Menschen ableiten.», «Was daraus folgt, ist individuell und lässt sich nicht aus einer Diagnose ableiten.». Unabgesichert ist nur «Die Person gestaltet ihre Genesung selbst mit.» (Abb. 1); sie steht so im Bestand (`leuchtturm`) und ist eine Aussage über Mitgestaltung, keine Prognose |
| Absicherungen wie im Bestand | erfüllt bis auf A1 Nr. 10 und 12 | Absicherungen je 100 Wörter steigen (Teil F); die Kürzungen betreffen Wiederholungen |
| Begriffe | weitgehend erfüllt | Teil B |
| Zuständigkeit | erfüllt | Teil F |

#### Prüfbedarf für die Fachstelle

Nach Wichtigkeit sortiert. Jede Frage lässt sich mit Ja oder Nein oder mit einer Auswahl beantworten. Varianten halten den Bestand, wo es einen gibt. Nicht gefragt sind die schon entschiedenen Punkte («Vielleicht kommt gleich eine Nachricht.»; Verweise V1–V9 am Schluss von Etappe 2).

1. **P2a-F-1 · Verantwortung für Erkrankung und Genesung** (`rolle` › `schuld`). Drei Bestandssätze widersprechen den Entscheiden zu Etappe 1 (`verstehen` › Annahme 3, P4-F-3):
   - «Sie können einen eigenen Fehler anerkennen, ohne die ganze Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.»
   - «Behandlung und Genesung müssen Sie nicht allein tragen.»
   - «Sie müssen die Erkrankung nicht heilen und weder Behandlung noch Genesung allein tragen.»

   Soll (a) der Bestandswortlaut bleiben, oder (b) an Etappe 1 angeglichen werden: «ganze» und beide «allein» entfallen, sodass die Sätze sagen, dass Angehörige keine Verantwortung für die Erkrankung und die Genesung tragen? Oder (c) gibt die Fachstelle eine Fassung vor?
   Dazu, Ja/Nein: Soll bei «Belastende Erfahrungen können mitwirken.» (Antwort an Eltern) die Einordnung der freigegebenen Fassung stehen, «… neben vielen anderen Einflüssen. Daraus folgt keine Schuld …» (`verstehen` › Annahme 3)?
2. **P2a-F-2 · Kinder** (`rolle` › `kinder`). Bewertung: Der Satz «Was Kinder nicht übernehmen müssen, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» ordnet Kinder unter Gewalt ein. Im Bestand stand derselbe Inhalt auf «Unterstützen» unter «Wann Unterstützung an Grenzen kommt» und im Handout `kinder` allgemein. Dazu fehlen auf `rolle` die Pflicht («müssen Erwachsene organisieren») und «sofort» bei akuter Gefahr (A1 Nr. 10–12). **Vorgeschlagene Fassung** (nur Bestandssätze und ein Verweissatz):
   - statt des Verweissatzes der Bestandssatz «Kinder müssen weder Streit schlichten noch Medikamente kontrollieren oder einen Elternteil bewachen.» (`unterstuetzen--uebersicht.md`, Handout `kinder`)
   - statt «Dort steht auch, wer einspringt, wenn die erste Person ausfällt.» in «Was Sie tun können» die Bestandsfrage «Welche zweite erwachsene Person ist erreichbar, wenn die erste ausfällt?» (Handout `kinder`)
   - «Betreuung, Unterstützung und Sicherheit müssen Erwachsene organisieren.» (mit «müssen», wie im Bestand)
   - der Verweis auf `grenzen` nur für den Fall von Gewalt, nach «Bei Angst, Gewalt oder fehlender Betreuung organisieren Erwachsene Hilfe.»: «Was bei Gewalt oder Bedrohung für Sie und die Kinder wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» (neuer Verweissatz)

   Soll (a) die Fassung so umgesetzt werden, (b) zusätzlich der Bestandssatz «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» mit Verweis im Text danach stehen (dann je ein Verweis in `kinder` und `an-grenzen`), oder (c) alles bleiben?
3. **P2a-F-3 · Länge.** `rolle` hat 3339, `selbstfuersorge` 2955 Wörter; die Seiten der Etappe 1 haben je 1600 bis 1700 (Teil C2). Soll (a) nur Stufe a umgesetzt werden (verdichten ohne Aussageverlust: etwa −270 Wörter auf `rolle`, −305 auf `selbstfuersorge`, bauende Sitzung), (b) Stufe a und die Vorschläge der Stufe b, die die Fachstelle auswählt (Liste in C2, Spalte «Fachstelle»: K-R-b1, K-R-b2, K-R-b5, K-S-b1; je Ja/Nein), oder (c) keine Kürzung?
4. **P2a-F-4 · Verweis im Text auf `selbstfuersorge` › `eigenes-leben`.** Er ersetzt «Bei Gefahr hat Schutz Vorrang» und steht nach «Kurze Übungen finden Sie im Abschnitt …», nicht nach einer Handlungsanleitung für eine akute Lage (README «Verweis im Text»). Soll (a) es so bleiben, (b) der Bestandssatz «Bei Gefahr hat Schutz Vorrang.» direkt davor stehen, oder (c) der Verweis hier entfallen? Bei (c) erhält der Erlaubnis-Punkt wieder den Bestandszusatz «– bei akuter Gefahr aber Hilfe holen». Die Verweise in `warnsignale` und `zu-viel` tragen (Teil F).
5. **P2a-F-5 · Neue Sätze zur Freigabe** (Liste der Selbstprüfung und A3). Werden freigegeben, je Ja/Nein:
   - (a) «Ein Stück Weg»: Nr. 1 und 2
   - (b) Zwischentitel Nr. 3, 18 und 19
   - (c) Verweissätze Nr. 4–11 und 20–23 sowie der Satz zur Startseite (A3 a), mit den Änderungen aus P2a-F-2 und P2a-F-8
   - (d) «Ein freier Abend»: Nr. 12, 13, 15, 16 und 17 (Nr. 14 ist entschieden)
   - (e) Einstiege Nr. 24 und 25
6. **P2a-F-6 · Abbildungen** (`v-ro-weg`, `v-sf-abend`, `approvalStatus` «ausstehend»). Werden beide fachlich freigegeben (je Ja/Nein, nach Sicht auf die Abbildungen bei 1280 und 360 px)? Dazu, je Ja/Nein: Darf die bauende Sitzung «Ein Stück Weg» verfeinern (die Wegkanten enden nicht mehr in den Köpfen, eine leichte Schrittstellung; P2a-V-2)? Bei «Ein freier Abend»: Soll (a) der Dampf über der Tasse bleiben, (b) entfallen (Abweichung vom Profilbeispiel), oder (c) der Kurztext statt «der Tee wird kalt» etwas anderes sagen (P2a-V-3)?
7. **P2a-F-7 · Zwei ähnliche Schrittfolgen.** `rolle` › `alltag` «Innehalten, bevor Sie reagieren» (vier Schritte, Handout `beziehungs-achtsamkeit`) und `selbstfuersorge` › `zu-viel` «STOPP» (fünf Schritte) haben denselben Kern: anhalten, wahrnehmen, Beobachtung und Vermutung trennen, einen nächsten Schritt wählen. Sollen (a) beide bleiben, (b) die vier Schritte auf `rolle` einem Satz mit Verweis auf STOPP weichen (oder in eine Vertiefung gehen), oder (c) umgekehrt?
8. **P2a-F-8 · Verweisziel bei Schuld** (`rolle` › `schuld`). Soll der Verweis statt auf `verstehen` › «Was die Diagnose beschreiben kann» auf «Häufige Annahmen – und was realistischer ist» zeigen, wo Annahme 3 «Angehörige sind nicht schuld …» steht? (a) ja, (b) auf beide, (c) nein.
9. **P2a-F-9 · DBT** (`selbstfuersorge` › `akzeptanz`). Bleibt der Zusatz «einer wissenschaftlich untersuchten Psychotherapie für Borderline» (Grundlage `glossar.md`, nicht eine Quelle der Seite)? Ja/Nein. Soll «zentrales Element» aus dem Bestand wieder stehen? Ja/Nein.
10. **P2a-F-10 · Quellen und Kennzeichnungen.** Bleibt es dabei, dass Gunderson et al. (2018) aus dem Handout `schuld-verantwortung` nicht übernommen wird (Ja/Nein)? Bleibt es dabei, dass die Kennzeichnungen der Handouts entfallen, etwa «kein validiertes Instrument», «kein DBT-Protokoll», «keine validierte Methode» (Ja/Nein)? «Kein geprüftes Modell» (Drei Fragen), «eigene didaktische Ordnung» (Warnsignale) und «vereinfachte eigene Darstellung» (Akzeptanz) stehen weiter auf den Seiten.

#### Befunde W1

- **P2a-W1-1 · wichtig · Verantwortung für Erkrankung und Genesung widerspricht Etappe 1.**
  - **Beleg:** A1 Nr. 1–3; A4.
  - **Vorschlag:** Die drei Sätze an die Entscheide zu Etappe 1 angleichen, ohne die übrige Aussage zu ändern.
  - **Zuständig:** Fachstelle (P2a-F-1), danach die bauende Sitzung.
- **P2a-W1-2 · wichtig · Kinder unter Gewalt eingeordnet; Pflicht und «sofort» fehlen auf `rolle`.**
  - **Beleg:** A1 Nr. 10–12; A2 r67, r68, r72, r736, r737; Verweissätze Nr. 8 und 9.
  - **Vorschlag:** Fassung in P2a-F-2.
  - **Zuständig:** Fachstelle (P2a-F-2), danach die bauende Sitzung.
- **P2a-W1-3 · optional · Zusatz zur DBT aus einer anderen Bestandsquelle.**
  - **Beleg:** A1 Nr. 46; A3 (a).
  - **Zuständig:** Fachstelle (P2a-F-9).
- **P2a-W1-4 · optional · Abgleich ungenau.**
  - **Beleg:** r145 nennt das fehlende «oder jede Stimmung ausgleichen» nicht; r458 «Verlauf» nicht getragen; r655 Autonomie; s213 Status «umformuliert» trotz Zusatz; s65 Verweissatz als «zusammengeführt» und nicht in der Liste neuer Sätze.
  - **Vorschlag:** Bemerkungen und Status nachführen; s65 und den DBT-Zusatz in die Liste «Neue Sätze zur Freigabe».
  - **Zuständig:** bauende Sitzung.
- **P2a-W1-5 · optional · Quellen und Kennzeichnungen.**
  - **Beleg:** A2 r496–r500, s371, s420, s648.
  - **Zuständig:** Fachstelle (P2a-F-10).

### Teil B · W2 Gesamtkohärenz mit Etappe 1

**Begriffe** (Zählung im sichtbaren Text ohne Kurzbeschreibungen, je `rolle` / `selbstfuersorge`):

- **Betroffene Person:** «betroffene Person» 4 / 1, «andere Person» 8 / 2, wie in Etappe 1 (P4-W2: «die andere Person» bei direkter Ansprache). Einheitlich.
- **Anspannung:** 6 / 7. «Stress» kommt nur in Quellentiteln vor. **Aber:** «Vielleicht merken Sie, dass Sie innerlich in Alarm gehen, …» (`rolle` › `alltag`). Etappe 1 hat «Alarm» zugunsten von «Anspannung» gestrichen (F-W2-01). Im Abgleich ersetzt r204 «im Alarm» durch «in grosser Anspannung», r205 behält «in Alarm» (P2a-W2-5).
- **Grenze:** 31 / 7, einheitlich.
- **Pause:** 3 / 10. Auf `selbstfuersorge` überwiegend als Erholungspause («eine kurze Pause», «verlässliche Pausen und Erholung»), also in einer dritten Bedeutung neben Gesprächspause und Kontaktpause (P4-W2-2). Meist klar aus dem Satz. Mehrdeutig ist `rolle` › `mehrere`: «… wann eine Pause möglich ist» (P2a-W2-5).
- **Beratung:** 4 / 13, einheitlich («eigene Beratung», «Beratung für Angehörige»).
- **Gemischte Gefühle:** `rolle` › `an-grenzen` sagt «zwiespältige Gefühle» (zweimal), `verstehen` › `erleben` (freigegeben) «gemischte Gefühle» für dasselbe (P2a-W2-5).

**Widersprüche zu den freigegebenen Seiten:** einer, die Verantwortung für Erkrankung und Genesung (P2a-W1-1, A4). Schutz ist überall gleich: «Bei Gefahr geht Schutz vor.» (`selbstfuersorge` › `akzeptanz`) passt zu `grenzen` und `verstehen`. «Ein Schuldgefühl allein entscheidet nicht, ob Sie etwas falsch gemacht haben.» (`rolle`) passt zu «Ein Schuldgefühl heisst nicht, dass Sie etwas falsch gemacht haben.» (`grenzen` › `konsequenz`).

**Doppelungen**

| Thema | Stellen | Urteil |
| --- | --- | --- |
| Kinder | `rolle` › `kinder` (257 Wörter) und `grenzen` › `gewalt` › «Wenn Kinder mitbetroffen sind» | **Nützlich, aber falsch verteilt.** `rolle` › `kinder` ist nach dem Entscheid der Fachstelle der Ort für Kinder (Alltag, Worte, Betreuung). `grenzen` zeigt den Schutzfall. Schon jetzt doppeln sich Teile: «Betreuung, Unterstützung und Sicherheit organisieren Erwachsene.» ~ «Erwachsene organisieren Hilfe und Betreuung.»; «Kinder dürfen spielen …» ~ «… seinen Alltag behalten». Ausgerechnet die zwei Sätze, die Kinder am meisten entlasten, stehen nur im Gewaltabschnitt. Vorschlag: P2a-F-2; der Rückweg von `grenzen` nach `rolle#kinder` ist V9 (Entscheid am Schluss von Etappe 2) |
| Erreichbarkeit | `selbstfuersorge` › `kraft` (Abbildung, «Sie müssen nicht rund um die Uhr erreichbar sein …», Liste «ständige Bereitschaft»), `rolle` › `alltag` («… nicht immer gleich reagieren oder jederzeit verfügbar bleiben», Verweis auf `kraft`), `grenzen` › «Kontakt halten, ohne immer verfügbar zu sein» | **Nützlich**, drei Blickwinkel: eigene Kraft, Absprache im Alltag, Grenze. `rolle` verweist schon richtig. Auf `selbstfuersorge` steht Erreichbarkeit siebenmal (dazu Warnsignale, Erwachsenes Kind, Liste «Was entlasten kann»); dort bündeln (K-S-a1) |
| Schuldgefühle | `rolle` › `schuld` (593 Wörter) und auf `selbstfuersorge` in `eigenes-leben` (Eltern, Erlaubnis), `unterstuetzung` (mit Verweis auf `rolle#schuld`) | **Nützlich und gut gelöst:** eine Stelle führt aus, die andere nimmt den Blickwinkel der Selbstfürsorge («Schuldgefühle können trotzdem bleiben») und verweist |
| Zwiespältige Gefühle | `rolle` › `an-grenzen` und `verstehen` › `erleben` | teilweise ersetzbar: Die Liste «Mögliche Reaktionen auf anhaltende Belastung» ist eigenständig, der Satz «… kein Zeichen fehlender Haltung» doppelt «… kein Zeichen mangelnder Liebe» (K-R-b5) |
| Innehalten und STOPP | `rolle` › `alltag` (vier Schritte) und `selbstfuersorge` › `zu-viel` (STOPP) | **ersetzbar durch einen Verweis** (P2a-F-7) |
| Entlastungsmöglichkeiten | `selbstfuersorge` › `kraft` («Was entlasten kann», sieben Punkte) und `selbstfuersorge` › `unterstuetzung` (Abgeben, Begrenzen, Beraten lassen, Eigenes Leben bewahren) | **Doppelung innerhalb der Seite** aus zwei Bestandsquellen (`alltag`, `selbstfuersorge.md`); zusammenführen (P2a-W2-4) |

**Links der zwei Seiten** (13 Links, alle per Skript aufgerufen):

- Alle Ziele und Anker existieren; der Linktext gleicht dem Titel der Zielstelle in allen elf Abschnittslinks (zum Beispiel «Was die Diagnose beschreiben kann» → `verstehen#borderline`, h2 gleich).
- Zwei Seitenlinks: «Grenzen setzen» → `grenzen.html` (h1 «Grenzen setzen, das eigene Leben schützen», Navigation «Grenzen») und «Auf sich achten» → `selbstfuersorge.html`.
- Kein Link auf eine Entwurfsseite (alle `a[href]` in `main` geprüft; Gate ohne Befund `link-draft`).
- Etappe 1 nennt Seiten mit dem Navigationsnamen («Verstehen», «Beziehungen», «Grenzen»). Die neuen Seiten weichen zweimal ab: «Grenzen setzen» und «Ihre Rolle klären» (P2a-W2-1).

**Befunde W2**

- **P2a-W2-1 · optional · Seitennamen in Verweisen uneinheitlich.**
  - **Beleg:** `rolle` › `an-grenzen` «… auf der Seite «Grenzen setzen».» neben dreimal «… auf der Seite «Grenzen» …»; `selbstfuersorge` › `unterstuetzung` «… auf der Seite «Ihre Rolle klären» …», Navigation «Ihre Rolle». Dazu Verweissatz Nr. 6: «Woran Sie merken, dass die Anspannung steigt, …» verspricht mehr als das Ziel; Nr. 21 sagt es genauer.
  - **Vorschlag:** überall den Navigationsnamen; Nr. 6 im Wortlaut von Nr. 21.
  - **Zuständig:** bauende Sitzung.
- **P2a-W2-2 · optional · Verweisziel bei Schuld.**
  - **Beleg:** Verweissatz Nr. 4.
  - **Zuständig:** Fachstelle (P2a-F-8).
- **P2a-W2-3 · optional · Innehalten und STOPP doppelt.**
  - **Beleg:** `rolle` › `alltag` «Kurz innehalten: Halten Sie an, bevor Sie reagieren. … Genauer hinschauen: Was beobachte ich konkret? Was vermute ich nur? …»; `selbstfuersorge` › `zu-viel` «S – Stopp … O – Orientieren: … Was habe ich beobachtet, und was vermute ich nur? … P – Plan …».
  - **Zuständig:** Fachstelle (P2a-F-7).
- **P2a-W2-4 · optional · Entlastungsmöglichkeiten doppelt auf `selbstfuersorge`.**
  - **Beleg:** `kraft`: «eine Aufgabe abgeben und konkret vereinbaren, wer was übernimmt», «eine Zeit vereinbaren, in der Sie nicht erreichbar sind», «vertraulich über Ihre Situation sprechen oder Beratung nutzen», «Zeit für Freunde, Interessen und Ihr eigenes Leben»; `unterstuetzung`: «Abgeben», «Begrenzen», «Beraten lassen», «Eigenes Leben bewahren», je mit Beispielsatz.
  - **Vorschlag:** In `kraft` die vier Punkte durch einen Satz mit Verweis auf `unterstuetzung` ersetzen (K-S-a1). Die übrigen Punkte bleiben: Pausen, Kontakte, Interessen.
  - **Zuständig:** bauende Sitzung.
- **P2a-W2-5 · optional · Begriffe.**
  - **Beleg:** «in Alarm gehen» (`rolle` › `alltag`); «zwiespältige Gefühle» (`rolle`) neben «gemischte Gefühle» (`verstehen`); «wann eine Pause möglich ist» (`rolle` › `mehrere`).
  - **Vorschlag:** «Anspannung» wie in Etappe 1, etwa «… dass Ihre Anspannung steigt, …»; «gemischte Gefühle»; «Pause» mit Zusatz, wo mehrdeutig. Die Bedeutung bleibt.
  - **Zuständig:** bauende Sitzung.

### Teil C · S Sprach-Review und Länge

#### C1 · Lesetest und Kennzahlen

**Zählweise (Skript der Prüfsitzung, im Browser, Vertiefungen offen):**

- **Fliesstext:** `p`, `li`, `dt`, `dd` in `main`, innerste Blöcke. Nicht gezählt: SVG, `.puk-sr`, Kapitelübersicht, Kicker, Eyebrow, Bezeichnung «Abbildung n · …» und Absätze, die mit «Quelle», «Quellen», «Bezugspunkte», «Grundlage» oder «Eigene didaktische Darstellung» beginnen.
- **Sätze:** gleiche Satzregel wie `abgleich/verneinung.mjs`. Wörter wie in `kennzahlen.mjs`.
- **Verneinung:** wie `verneinung.mjs` («nicht», «nichts», «nie», «niemals», «niemand», «weder», Formen von «kein»).
- **Absicherungen:**
  - eng wie `kennzahlen.mjs`: «kann» und Formen, «möglich…», «vielleicht», «nicht sicher», «nicht automatisch»
  - weit: dazu «manche», «einige», «oft», «häufig», «meist», «eher», «individuell», «nicht bei allen», «nicht vorhersagen», «nicht ableiten», «nicht garantiert»
  - je 100 Wörter Fliesstext
- **«Was Sie tun können»:** Abschnitte, deren Text die Wendung enthält.

| Seite | Wörter (`kennzahlen.mjs`) | Wörter Fliesstext | Sätze | mittlere Satzlänge (Median) | Sätze > 15 Wörter | > 25 | Sätze mit Verneinung | Absicherungen je 100 Wörter eng / weit | «Was Sie tun können» |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | --- |
| `rolle` | 3339 | 3107 | 345 | 9,0 (8) | 32 (9 %) | 0 | 82 (24 %) | 2,29 / 3,15 | 6 von 7 |
| `selbstfuersorge` | 2955 | 2682 | 289 | 9,3 (9) | 23 (8 %) | 0 | 66 (23 %) | 2,91 / 3,36 | 4 von 7 |
| `beziehungen` (Vergleich) | 1600 | 1412 | 141 | 10,0 (9) | 23 (16 %) | 2 | 32 (23 %) | 4,75 / 4,82 | 4 von 6 |
| `grenzen` (Vergleich) | 1667 | 1472 | 154 | 9,6 (9) | 18 (12 %) | 0 | 42 (27 %) | 2,72 / 3,53 | 4 von 10 |

- **Satzlänge:** Die neuen Seiten haben kürzere Sätze als die Vorbilder (8 bis 9 % über 15 Wörter, kein Satz über 25). Die Vorgabe «meist unter 15 Wörtern» ist erfüllt.
- **Verneinung:** im Bereich der Vorbilder (23 bis 27 %). Hoch sind `rolle` › `schuld` (22 von 56, 39 %), `selbstfuersorge` › `akzeptanz` (13 von 39, 33 %) und `warnsignale` (9 von 29, 31 %). Meist sind es Entlastungen aus dem Bestand («… kein Nachweis persönlicher Schuld», «… kein Beweis, dass Sie «zu wenig» für sich tun»).
- **Absicherungen:** niedriger als auf `beziehungen`, ähnlich wie `grenzen`. Gehäuft stehen sie dort, wo Hinweise wie «Angebot, keine Pflicht» wiederholt werden, nicht bei Aussagen über die Person (P2a-S-3).
- **Handlungsteil:** `rolle` 6 von 7 Abschnitten (ohne `an-grenzen`, das aber «Was eher hilft» hat), `selbstfuersorge` 4 von 7 (`warnsignale`, `zu-viel` und `beratung` haben Handlungshinweise ohne die Wendung).

**Lesetest je Abschnitt** (Prüfperson: erschöpfte Mutter oder Partner, abends, Handy, 360 px).

- a = beim ersten Lesen verstanden (ja / mit Mühe / nein)
- b = weiss danach, was ich tun kann
- d (Ton) ist überall warm, erwachsen und ohne Schuldzuweisung, ausser wo vermerkt
- e (Absicherungen) steht nur, wo es einen Befund gibt

| Seite | Abschnitt | a | b | Stolperstellen (c) und e | Priorität |
| --- | --- | --- | --- | --- | --- |
| `rolle` | Kopf | ja | – | «… nicht ihre Behandlung oder Genesung tragen» (ohne «allein») gegen `schuld` (P2a-F-1) | – |
| `rolle` | `anbieten` | ja | ja | Lang (534 Wörter); «nächster Schritt» dreimal, «Abstand, ein Nein, Hilfe» dreimal. Das Bild mit der Kernaussage kommt erst nach 3487 px (P2a-V-1) | optional |
| `rolle` | `schuld` | ja | ja | 39 % der Sätze verneint; dieselbe Entlastung zwei- bis dreimal (K-R-a3). «Selbstorientierung» ist abstrakt. e: P2a-F-1 | wichtig |
| `rolle` | `alltag` | mit Mühe | ja | 818 Wörter in fünf Teilen. «Sie sind angespannt, tasten sich vorsichtig heran …» lässt sich als Anrede lesen (P2a-S-2); «in Alarm gehen» (P2a-W2-5) | optional |
| `rolle` | `nach-konflikten` | ja | ja | – | – |
| `rolle` | `mehrere` | ja | ja | «Grundlinien» abstrakt; Listen und «Was Sie tun können» wiederholen sich (K-R-a7) | optional |
| `rolle` | `kinder` | ja | ja | Verweis auf den Gewaltabschnitt; «die erste Person» ohne Bezug. e: Pflicht und «sofort» fehlen (P2a-F-2) | wichtig |
| `rolle` | `an-grenzen` | mit Mühe | ja | 679 Wörter in sechs Teilen. «Sie wollen helfen und möchten zugleich weg.» lässt sich als Anrede lesen und unterstellt dann Gefühle (P2a-S-2); «Charakter oder Absicht» zweimal | optional |
| `selbstfuersorge` | Kopf | ja | – | Die Seite sagt gleich danach: «… hilft eine kurze Pause vielleicht mehr als weitere Informationen» und folgt mit 2955 Wörtern (P2a-S-1) | – |
| `selbstfuersorge` | `eigenes-leben` | ja | ja | Der Verweis im Text steht vor jedem Inhalt (P2a-F-4); elf Erlaubnis-Sätze, dann drei Meta-Sätze und Rollenhinweise | optional |
| `selbstfuersorge` | `kraft` | mit Mühe | ja | 790 Wörter: zwei Listen, dann die Abbildung, dann vier Absätze, dann «Langfristig für sich sorgen». Die Absätze aus «Wenn der Alltag angespannt erlebt wird» sind abstrakt («Stimmungen genauer beobachten, Worte abwägen»); die Entlastungsliste doppelt `unterstuetzung` | wichtig |
| `selbstfuersorge` | `warnsignale` | ja | ja | – (Gesundheit klar: Hausärztin, Hausarzt, nicht warten) | – |
| `selbstfuersorge` | `zu-viel` | ja | ja | Der Hinweis «anpassen, auslassen, beenden» steht viermal (K-S-a5) | optional |
| `selbstfuersorge` | `unterstuetzung` | ja | ja | Nach «Vielleicht merken Sie, …» folgen vier Aussagesätze über die Leserin («Sie sind fast nur noch für andere da.»); «keine Pflicht, danach wieder zu unterstützen» dreifach gesagt (P2a-S-2, K-S-a6) | optional |
| `selbstfuersorge` | `akzeptanz` | mit Mühe | ja | Der Begriff «Radikale Akzeptanz» klingt hart, ist aber im ersten Satz erklärt; Beispielsatz zweimal | optional |
| `selbstfuersorge` | `beratung` | ja | ja | «Sie sind nicht allein.» und «… das Gefühl, nicht allein zu sein» hintereinander; der Absatz «Grundlage: …» mit Studiennamen ist lang | optional |
| `index` | `einstiege` | ja | ja | Platzhalter sichtbar (Gate); die fünf Einstiege sind gleich gebaut | – |

#### C2 · Länge

**Urteil aus Sicht der Prüfperson:** Die Länge trägt nur zum Teil.

- `rolle` hat 3339 Wörter, bei 360 px 30 067 px, etwa 38 Bildschirmhöhen; bei 200 Wörtern je Minute etwa 17 Minuten Lesezeit. `selbstfuersorge` hat 2955 Wörter, 25 453 px, etwa 32 Bildschirmhöhen und 15 Minuten. Die Seiten der Etappe 1 haben etwa 16 000 px und 8 Minuten.
- Die Prüfperson liest abends auf dem Handy nach einem schwierigen Gespräch. Sie liest einen Abschnitt, nicht die Seite. Dafür sind die Seiten brauchbar: Die Kapitelübersicht springt zu jedem Abschnitt, und jeder Abschnitt ist für sich verständlich.
- Drei Abschnitte sind für dieses Lesen zu lang: `rolle` › `alltag` (818 Wörter), `selbstfuersorge` › `kraft` (790) und `rolle` › `an-grenzen` (679).
- Auf `selbstfuersorge` widerspricht die Länge dem eigenen ersten Satz: «… hilft eine kurze Pause vielleicht mehr als weitere Informationen.»
- Der grösste Teil der Länge sind Wiederholungen innerhalb der Seite und gehäufte Hinweise wie «Angebot, keine Pflicht» (Zählung: «kein (zusätzliches) Programm / keine Pflicht(liste) / kein Auftrag» 6-mal und «kein (persönliches) Versagen» 3-mal auf `selbstfuersorge`; «nächster Schritt» 5-mal auf `rolle`). Fachliche Aussagen stehen kaum doppelt.

**Kürzungsvorschläge.** Geschätzt sind die Wörter weniger im Lesefluss. Bei Stufe b bleibt der Text in einer Vertiefung erhalten oder zieht auf eine andere Seite um. Keine neuen Texte; die Änderung ist in Worten beschrieben. Absicherungen zu Person, Ursachen, Diagnose, Verlauf und Schutz, die nur einmal vorkommen, bleiben.

**`rolle`, Stufe a (Verdichten)**

| ID | Abschnitt | Was genau | Wörter weniger | Fachstelle |
| --- | --- | --- | ---: | --- |
| K-R-a1 | `anbieten` | Den Absatz «Unterstützung ist ein Angebot, keine feste Rolle. …» und den Absatz «Was eine andere Person entscheidet, …» mit «Was Sie tun können» zusammenführen; «Abstand, ein Nein oder Hilfe» und «nächster Schritt» je einmal | 45 | nein |
| K-R-a2 | `anbieten` | Die Liste «Was nicht Ihre Aufgabe ist» und den Satz «Therapie, Psychiatrie und Beratung bieten Fachpersonen an. …» zusammenführen (Therapie und Kontrolle doppelt) | 12 | nein |
| K-R-a3 | `schuld` | Den Merksatz-Absatz als einzige Zusammenfassung lassen. Im Einstieg je einmal: «Das Gefühl allein ist kein Nachweis …» / «Ein Schuldgefühl allein entscheidet nicht …»; «Aus einer Diagnose lässt sich keine persönliche Schuld ableiten.» / «Eine Diagnose weist Ihnen keine persönliche Schuld zu.»; «Eigene Grenzen, Selbstschutz und Unterstützung bleiben trotzdem berechtigt.» / «Grenzen, Schutz und eigene Unterstützung sind berechtigt.». Die zwei Fragenreihen zu einer | 60 | nein (Wortlaut nach P2a-F-1) |
| K-R-a4 | `schuld` | Bei den drei Fragen die drei einleitenden und vier abschliessenden Hinweise zu zwei Sätzen bündeln; «kein geprüftes Modell» bleibt | 30 | nein |
| K-R-a5 | `alltag` | In «Absprachen klar und anpassbar halten» vier Absicherungen in einem Satz bündeln, jede einmal behalten: «individuell», «nicht aus einer Diagnose ableiten», «nicht vorhersagen», «Verläufe sind individuell». In «Kleine gute Momente» eine Begründung statt drei | 35 | nein |
| K-R-a6 | `an-grenzen` | Die Liste «Sie können nicht:» mit der Liste in `anbieten` zusammenführen (Krisenhilfe ersetzen, Anspannung auffangen doppelt). «Über Charakter oder Absicht sagen sie nichts aus.» und «Aus einer Handlung allein lassen sich weder Motiv noch Charakter … ableiten.» zu einem Satz | 50 | nein |
| K-R-a7 | `mehrere` | «Niemand muss dieselbe Rolle oder Grenze übernehmen.» und «Unterschiedliche Angehörige dürfen unterschiedliche Grenzen haben.» einmal; die Liste «Was hilft» und «Was Sie tun können» überschneiden sich (ruhiger Moment, Unterschiede besprechen, anpassen) | 38 | nein |
| | | **Summe Stufe a** | **270** | |

**`rolle`, Stufe b (Umordnen)**

| ID | Abschnitt | Was genau | Wörter weniger | Fachstelle |
| --- | --- | --- | ---: | --- |
| K-R-b1 | `an-grenzen` | «Grosse Ausgaben und finanzielle Risiken» und «Plötzliche Entscheidungen» (Was eher hilft / weniger hilft) in eine Vertiefung oder nach `krise` (Etappe 2b). «Substanzkonsum und riskantes Verhalten» bleibt sichtbar (Sicherheit: nicht mitfahren) | 120 | ja |
| K-R-b2 | `alltag` | «Innehalten, bevor Sie reagieren»: ein Satz mit Verweis auf STOPP (`selbstfuersorge` › «Wenn es gerade zu viel ist») oder Vertiefung (P2a-F-7) | 90 | ja |
| K-R-b3 | `schuld` | «Drei Fragen zur Selbstklärung» in eine Vertiefung oder nach `anbieten` (Thema Rolle, nicht Schuld) | 110 | nein (Struktur) |
| K-R-b4 | `alltag` | «Kleine gute Momente schaffen» in eine Vertiefung (im Bestand ein Akkordeon) | 75 | nein |
| K-R-b5 | `an-grenzen` | Der Absatz zu den zwiespältigen Gefühlen ohne die Liste: Verweis auf `verstehen` › «Was Angehörige erleben können» | 35 | ja |
| | | **Summe Stufe b** | **430** | |

**`selbstfuersorge`, Stufe a (Verdichten)**

| ID | Abschnitt | Was genau | Wörter weniger | Fachstelle |
| --- | --- | --- | ---: | --- |
| K-S-a1 | `kraft` | In «Was entlasten kann» die vier Punkte, die `unterstuetzung` mit Beispielsatz bringt, durch einen Verweis ersetzen (P2a-W2-4) | 60 | nein |
| K-S-a2 | `kraft` | «individuell», «persönlich» und «keine vollständige Liste» einmal; der Gedanke «Bleibt kein Raum, braucht es Entlastung, keine Disziplin» steht dreimal (Einleitung, «Kleine Auszeiten», «Kontakte») und soll einmal stehen; «Bewegung ist eine mögliche Ergänzung.» doppelt | 60 | nein |
| K-S-a3 | `eigenes-leben` | Die drei Hinweise nach der Erlaubnis-Liste zu einem | 15 | nein |
| K-S-a4 | `warnsignale` | «kein Test» und «keine Diagnose» einmal; «Was passt und verfügbar ist …» und «Disziplin» stehen schon in `kraft`. Alle Gesundheitshinweise bleiben | 25 | nein |
| K-S-a5 | `zu-viel` | «Anpassen, Auslassen und Beenden sind erlaubt» und «kein richtiges Ergebnis» einmal in der Einleitung statt bei jeder Übung; die Warnzeichen beim Atmen (Schwindel, Luftnot, Unwohlsein) bleiben | 45 | nein |
| K-S-a6 | `unterstuetzung` | Drei Sätze zu einem: «Daraus folgt keine Pflicht, danach wieder zu unterstützen.», «… muss nicht damit begründet werden …», «… als Ihr eigenes Recht verstehen …». «Kein persönliches Versagen» zweimal im Abschnitt; «eine Auswahl, kein zusätzliches Programm» steht schon in `kraft` | 60 | nein |
| K-S-a7 | `akzeptanz` | «Angebot, kein Auftrag», «Haltung, keine Kapitulation» und die Liste «Akzeptanz heisst nicht» überschneiden sich; der Beispielsatz «So ist es gerade. …» steht in der Übung und in «Was Sie tun können» | 35 | nein |
| K-S-a8 | `beratung` | «Sie sind nicht allein.» und «… das Gefühl, nicht allein zu sein» einmal | 5 | nein |
| | | **Summe Stufe a** | **305** | |

**`selbstfuersorge`, Stufe b (Umordnen)**

| ID | Abschnitt | Was genau | Wörter weniger | Fachstelle |
| --- | --- | --- | ---: | --- |
| K-S-b1 | `kraft` | Die vier Absätze aus «Wenn der Alltag angespannt erlebt wird» («Einige Angehörige berichten …» bis «… auszugleichen») auf zwei Sätze verdichten oder in eine Vertiefung; die Absicherung «kein typischer Verlauf, nicht aus der Diagnose vorhersagen» bleibt | 110 | ja |
| K-S-b2 | `kraft` | «Langfristig für sich sorgen» (Kleine Auszeiten, Bewegung, Kontakte; im Bestand ein Akkordeon) in eine Vertiefung. Der Satz zur ärztlichen oder psychotherapeutischen Abklärung bleibt sichtbar (Gesundheit) | 170 | nein |
| K-S-b3 | `eigenes-leben` | «Je nach Ihrer Situation» (Partnerin oder Partner, Eltern, Erwachsenes Kind; im Bestand ein Akkordeon) in eine Vertiefung | 100 | nein |
| K-S-b4 | `akzeptanz` | Die Übung in vier Schritten mit Beispiel in eine Vertiefung; «Was Sie tun können» verweist darauf; der Schutzsatz bleibt sichtbar | 100 | nein |
| | | **Summe Stufe b** | **480** | |

**Summen:**

| Seite | heute | Stufe a | Stufe b | nach a und b (geschätzt) |
| --- | ---: | ---: | ---: | ---: |
| `rolle` | 3339 | −270 (8 %) | −430 (13 %) | etwa 2640 (−21 %) |
| `selbstfuersorge` | 2955 | −305 (10 %) | −480 (16 %) | etwa 2170 (−27 %) |

Stufe a braucht nur bei K-R-a3 den Wortlaut aus P2a-F-1. Bei Stufe b entscheidet die Fachstelle über vier Vorschläge (P2a-F-3); die übrigen sind Struktur.

**Die drei wirksamsten Vorschläge je Seite:**

- `rolle`: K-R-b1 (120 Wörter, Fachstelle), K-R-b3 (110), K-R-b2 (90, Fachstelle).
- `selbstfuersorge`: K-S-b2 (170), K-S-b1 (110, Fachstelle), K-S-b3 und K-S-b4 (je 100).

#### C3 · Schreibweise

- Kein «ß», keine „…“ (`grep` in `content/rolle.html`, `content/selbstfuersorge.html`, `content/index.html`: 0).
- Kein Telegrammstil im Fliesstext. Listenpunkte im Infinitiv wie in Etappe 1, zum Beispiel «Absprachen konkret und verständlich formulieren».
- **«es» und «sie»:** P2a-S-2. Dazu der Verweissatz Nr. 9 «die erste Person» ohne Bezug (P2a-F-2).

**Befunde S**

- **P2a-S-1 · wichtig · Länge.**
  - **Beleg:** C2.
  - **Vorschlag:** Stufe a umsetzen; Stufe b nach Auswahl der Fachstelle.
  - **Zuständig:** Fachstelle (P2a-F-3), danach die bauende Sitzung.
- **P2a-S-2 · optional · «Sie» ohne klaren Bezug.**
  - **Beleg:** `rolle` › `alltag`: «Manche Angehörige berichten von belastenden Phasen im Alltag. Sie sind angespannt, …». `rolle` › `an-grenzen`: «Viele Angehörige erleben … Sie wollen helfen und möchten zugleich weg. Sie wollen verstehen …». Am Satzanfang ist «Sie» (die Angehörigen) nicht von der Anrede zu unterscheiden; als Anrede gelesen unterstellt der Satz Gefühle (README: «Vielleicht erleben Sie …» statt «Sie fühlen sich …»). `selbstfuersorge` › `unterstuetzung`: Nach «Vielleicht merken Sie, dass …» folgen vier Aussagesätze über die Leserin.
  - **Vorschlag:** Ein eindeutiges Subjekt («Manche sind angespannt …», «Viele wollen helfen …»); in `unterstuetzung` die vier Sätze als Aufzählung unter «Vielleicht merken Sie:». Die Bedeutung bleibt.
  - **Zuständig:** bauende Sitzung.
- **P2a-S-3 · optional · Gehäufte Hinweise.**
  - **Beleg:** C2 (Zählung der Formeln).
  - **Vorschlag:** K-S-a3, a5, a6, a7 und K-R-a4.
  - **Zuständig:** bauende Sitzung.
- **P2a-S-4 · optional · Einzelstellen.**
  - **Beleg:** «Das Bild zeigt eine Erfahrung, die manche beschreiben, keine Pflicht und keinen Fehler.» (Vertiefung «Ein freier Abend», beim ersten Lesen schwer); «Sie sind nicht allein.» neben «… das Gefühl, nicht allein zu sein» (`beratung`).
  - **Vorschlag:** In der Vertiefung sagen, was keine Pflicht und kein Fehler ist (die ständige Bereitschaft); Wortlaut der Fachstelle. Den zweiten Fall regelt K-S-a8.
  - **Zuständig:** Fachstelle (Vertiefung, neuer Satz), bauende Sitzung.

### Teil D · Visualisierungs-Check und Bildsprache

**Bildschirmfotos** bei 1280 und 360 px, je Theme Standard und «kontrast», angesehen. Masse:

| Figur | Figur 1280 px | Zeichnung 1280 px | Figur 360 px | Zeichnung 360 px | Lage im Abschnitt (Abstand vom Abschnittsanfang bei 360 / 1280 px) |
| --- | --- | --- | --- | --- | --- |
| «Ein Stück Weg» (`v-ro-weg`) | 1104 × 675 | 760 × 259 | 320 × 673 | 320 × 109 | 3487 von 4211 px / 2022 von 2781 px: am Ende von `anbieten`, nach der Quellenzeile |
| «Ein freier Abend» (`v-sf-abend`) | 1104 × 687 | 760 × 321 | 320 × 680 | 320 × 135 | 2295 von 6199 px / 1368 von 3981 px: nach «Was Sie tun können» |

**Beschreibung der Bildschirmfotos**

- **«Ein Stück Weg», 1280 px:** Breit steht der Satz über der Zeichnung links, mit blauer Randlinie. Die Zeichnung zeigt eine Hügellinie, links einen runden Baum, rechts hinten einen kleinen Baum und einen Hügel. Ein hellblauer Weg kommt von unten und verengt sich zur Horizontlinie. Unten auf dem Weg stehen zwei Linienfiguren von hinten nebeneinander, ohne Gesicht, die Füsse auf gleicher Höhe. Die linke ist etwas grösser: Kopfradius 8,4 statt 7,9, Rumpf 32 statt 30 Einheiten breit, Rumpf 7 Einheiten höher. Die Beine sind gerade, die Arme hängen; eine Gehbewegung ist kaum zu sehen. Beide Wegkanten laufen von der Horizontlinie in die Köpfe: die linke an den Kopf der linken Figur, die rechte in den Kopf der rechten Figur, und hinter der rechten Figur weiter bis zum Knie.
- **«Ein Stück Weg», 360 px:** Satz über der Zeichnung, die Zeichnung bleibt (320 × 109 px). Die Figuren sind 59 und 63 px hoch, als zwei Menschen von hinten erkennbar. Die Arme verschmelzen zu dicken Strichen; die Figuren wirken eher piktogrammartig. Die Wegkanten wirken wie zwei Striche, die aus den Köpfen wachsen.
- **«Ein freier Abend», 1280 px:** Zwei Sätze nebeneinander über der Zeichnung, links «Vielleicht ruft sie gleich an.», rechts «Eigentlich wollte ich lesen.». Darunter ein hellblauer Tisch, links ein Mobiltelefon mit dicker, gefüllter Umrandung (die einzige Akzentfläche), in der Mitte eine Tasse mit Dampf, rechts ein geschlossenes Buch mit Lesebändchen, rechts oben ein Fenster mit Mondsichel.
- **«Ein freier Abend», 360 px:** Die Sätze stehen untereinander über der Zeichnung (320 × 135 px). Telefon, Tasse, Buch und Mond bleiben erkennbar. Die Zuordnung der Sätze zu Telefon und Buch geht verloren; der Inhalt der Sätze trägt sie selbst.
- **Theme «kontrast»:** Linien dunkelblau (#0028C2), Flächen unverändert; nichts verschwindet (vier Fotos).

**Matrix** (E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar)

| Nr. | Prüfpunkt | «Ein Stück Weg» | «Ein freier Abend» |
| --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | E |
| 3 | Prüffrage beantwortet und eingelöst | **T** | E |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | E |
| 5 | Ansatzpunkt (B, C, G) | – | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | E |
| 7 | Kartenraster-Check | E | E |
| 8 | Anordnung und Formen tragen Bedeutung | E | E |
| 9 | Verteilt, keine Textwand | T | T |
| 10 | Vereinfacht, nicht verfälscht; Grenzen; Quelle | E | E |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | E |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | E |
| 13 | Theme «kontrast» | E | E |
| 14 | Fachlich freigegeben | N | N |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | T |
| 16 | Ein Bild, eine Idee; Erleben beschriften | E | E |
| 17 | Keine ungewollten Bedeutungen | T | T |

**Abweichung von der Selbstprüfung** (fett): Punkt 3 bei «Ein Stück Weg» (T statt E). Bei Punkt 9 ist das Ergebnis gleich (T), der Grund ein anderer: nicht nur die Seitenlänge, sondern die späte Stellung der Abbildungen.

**Belege je T und N**

- **«Ein Stück Weg»:**
  - **3 T:** `understood`: «Dass Begleiten und den Weg selbst gehen zwei verschiedene Dinge sind: Das Bild zeigt auf einen Blick, wer neben wem geht …». Das Bild zeigt das Nebeneinander, nicht den Unterschied; der trägt erst der Satz «… aber nicht für dich gehen». Zusammen mit dem Satz ist die Aussage da (deshalb 15 E). Die Planzeile verspricht es aber vom Bild (P2a-V-4).
  - **9 T:** Die Abbildung steht am Ende von `anbieten`, nach der Quellenzeile, 3487 px nach dem Abschnittsanfang bei 360 px. Ihre Kernaussage «Sie können begleiten. Genesung herstellen können Sie nicht.» ist die Hauptaussage des Abschnitts und käme als Einstieg früher an (P2a-V-1).
  - **14 N:** `approvalStatus` «ausstehend».
  - **17 T:** Die Wegkanten enden in den Köpfen der Figuren, bei 360 px wie Striche aus den Köpfen. Der Weg «in die Ferne» kann ein Ziel nahelegen; die Vertiefung sagt, dass sich Veränderung nicht vorhersagen lässt. Die Grössenunterschiede lesen sich als zwei Erwachsene, nicht als Führung (P2a-V-2).
- **«Ein freier Abend»:**
  - **9 T:** Die Abbildung kommt nach zwei Listen, einem Absatz und «Was Sie tun können», 2295 px nach dem Abschnittsanfang bei 360 px (P2a-V-1).
  - **14 N:** `approvalStatus` «ausstehend».
  - **15 T:** `resonance`: «Wiedererkennen und Erlaubnis …». Das Wiedererkennen trägt das Bild. Die Erlaubnis («ich darf meine Erreichbarkeit begrenzen») steht erst im Text danach («Sie müssen nicht rund um die Uhr erreichbar sein.»); so auch die Selbstprüfung.
  - **17 T:** «Vielleicht ruft sie gleich an.» nennt die betroffene Person weiblich; die Fachstelle hat am 10.10.2026 «Vielleicht kommt gleich eine Nachricht.» entschieden. Dampf über der Tasse neben «der Tee wird kalt» (P2a-V-3).

**Bildsprache: Fragen B1–B11.** Die Fragen B1–B11 sind im Repository nicht ausgeschrieben; das Bildsprache-Audit nennt nur die Nummern. Die Prüfsitzung hat sie aus ihrer Verwendung im Audit und aus der Leitlinie (`00-visuelle-wissensvermittlung.md`, «Bildsprache», «Ein Bild, eine Idee»; `00-pre-release-audits.md`, R2 Teil 2) so zugeordnet:

| Frage | Inhalt | Quelle |
| --- | --- | --- |
| B1 | erster Eindruck, fünf Sekunden, ohne Text | R2 B1 |
| B2 | Form: organisch, keine Bauplan-, Raster-, Kasten- oder Formularoptik | Tabelle «Passt nicht», Regel 5 |
| B3 | Ein Bild, eine Idee: keine Liste, die Bildteile übersetzt | Regel 1 |
| B4 | Wiedererkennen und Ton (würdevoll, warm, nicht verniedlichend) | Regel 3; R2 B2, B4 |
| B5 | Angehörige haben einen Platz im Bild | Regel 4 |
| B6 | Nebenbedeutungen | Regel 6 |
| B7 | Wirkung (`resonance`) eingelöst | Regel 7; R2 B3 |
| B8 | Erleben beschriften, nicht Bildteile | Regel 2 |
| B9 | fachlich richtig vereinfacht | Abschnitt «Fachlich richtig vereinfachen» |
| B10 | Braucht es ein Bild? | Regel 8; R2 B5 |
| B11 | Freundin-Test | R2 B6 |

| Frage | «Ein Stück Weg» | «Ein freier Abend» |
| --- | --- | --- |
| B1 | ruhig, freundlich, etwas still; zwei Menschen am Anfang eines Weges, die eher stehen und schauen als gehen. Passt zum Thema Begleiten | ruhig, still, ein wenig einsam; Abendstimmung. Passt zum Thema Bereitschaft |
| B2 | ja: Kurven, weiche Hügel, Bäume als runde Formen. Die Figuren haben einen rechteckigen Rumpf und wirken bei 360 px piktogrammartig | ja: weiche Linien, Alltagsgegenstände; das Fenster ist rechteckig, als Gegenstand passend |
| B3 | ja, keine Legende | ja |
| B4 | würdevoll, nicht verniedlichend; das Wiedererkennen kommt über den Satz | stark: «Eigentlich wollte ich lesen.» ist ein Satz, den Angehörige selbst sagen könnten |
| B5 | ja, als eine der zwei Figuren; welche, bleibt offen (gewollt: gleichwertig) | ja, über die Gedanken (Satzpaar); keine Figur nötig |
| B6 | Wegkanten in den Köpfen; der Weg «in die Ferne» kann ein Ziel nahelegen (Vertiefung relativiert); keine Gefahr- oder Defektbilder | «sie» (entschieden); Dampf neben «wird kalt»; das Telefon als einzige gefüllte Fläche ist gewollt (Aufmerksamkeit) |
| B7 | ja, mit dem Satz («Ich darf begleiten …») | Wiedererkennen ja, Erlaubnis nur im Text (15 T) |
| B8 | ja, ein Satz aus Sicht der Angehörigen | ja, zwei Gedanken aus Sicht der Angehörigen |
| B9 | ja: «Das Bild ist eine Metapher. Wie und wann ein Mensch sich verändert, lässt sich daraus nicht vorhersagen.» | ja: «Manche» statt «viele»; die Vertiefung sagt «Nicht alle Angehörigen erleben das so …» |
| B10 | ja, knapp: Der Satz trüge auch allein, das Bild gibt aber einen ruhigen Moment | ja, eindeutig |
| B11 | eher ja, mit dem Satz; ohne Satz ist es ein allgemeines Wanderbild | ja |
| **Bewertung** | **trägt** (kleine Verfeinerungen) | **trägt** |

**Besonders geprüft: «Ein Stück Weg»**

- **Wirken die zwei Menschen gleichwertig?** Ja. Sie sind gleich gezeichnet und stehen nebeneinander, die Füsse auf gleicher Höhe. Niemand ist vorn, niemand zieht oder trägt. Die linke Figur ist etwas grösser und reicht 7 Einheiten höher; das liest sich als zwei unterschiedliche Erwachsene, nicht als Führung. Beide überlappen an der Aussenseite den Wegrand, weil der Weg hinter ihnen schmaler wird als die zwei; das fällt kaum auf.
- **Sind sie bei 360 px erkennbar?** Ja, als zwei Menschen von hinten (59 und 63 px hoch). Nicht erkennbar sind Gehbewegung und Arme; die Wegkanten wachsen sichtbar aus den Köpfen (P2a-V-2).

**Befunde Visualisierungs-Check**

- **P2a-V-1 · wichtig · Abbildungen stehen spät im Abschnitt.**
  - **Beleg:** Punkt 9; Tabelle der Masse.
  - **Vorschlag:** Die Abbildung jeweils nach dem ersten Absatz des Abschnitts setzen, vor die Listen; in `anbieten` jedenfalls vor die Quellenzeile.
  - **Zuständig:** bauende Sitzung (Struktur).
- **P2a-V-2 · optional · «Ein Stück Weg» verfeinern.**
  - **Beleg:** Punkt 17; Beschreibung 1280 und 360 px.
  - **Vorschlag:** im Rahmen von «Darfst du verfeinern» (Bauauftrag, Anhang A): die Wegkanten hinter den Figuren enden lassen oder den Fluchtpunkt über die Köpfe legen; eine leichte Schrittstellung; den Rumpf weniger rechteckig. Fest bleiben zwei gleichwertige Menschen nebeneinander, von hinten, auf einem Weg in die Ferne.
  - **Zuständig:** Fachstelle (P2a-F-6), danach die bauende Sitzung.
- **P2a-V-3 · optional · «Ein freier Abend».**
  - **Beleg:** Punkt 17; A3 (b) Nr. 13.
  - **Vorschlag:** P2a-F-6.
  - **Zuständig:** Fachstelle.
- **P2a-V-4 · optional · Planzeile «Ein Stück Weg».**
  - **Beleg:** Punkt 3.
  - **Vorschlag:** `understood` so fassen, dass Bild und Satz zusammen den Unterschied zeigen. Die Aussage bleibt.
  - **Zuständig:** bauende Sitzung.

### Teil E · Bedienung und Barrierefreiheit (automatisiert)

Chromium über Playwright, lokal; alle Werte selbst gemessen.

- **Überlauf** (`scrollWidth − clientWidth` und Elemente ausserhalb des Fensters): 84 Messungen, alle 0 px.
  - Seiten: `rolle`, `selbstfuersorge`, `index`.
  - Breiten: 320, 360, 768, 1280 und 1440 px.
  - 200 %: 640 px Breite bei Faktor 2 und 1280 px mit Schriftgrösse 200 %.
  - Je Theme Standard und «kontrast», je Vertiefungen zu und offen.
  - `overflow-x` auf `html` und `body` ist `visible`; es versteckt keinen Überlauf.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps bis zur Fusszeile: `rolle` 24, `selbstfuersorge` 21, `index` 14.
  - Erster Stopp «Zum Hauptinhalt».
  - Reihenfolge: Kopf (Logo, fünf Punkte der Navigation, E-Mail-Adresse), dann Kapitelübersicht, dann Links und Vertiefung im Text in Lesereihenfolge.
  - Sichtbarer Fokus bei jedem Stopp (`box-shadow`, 2 px Weiss und Blau).
  - Auf `index` liegt der Stopp «Ich kann nicht mehr …» mit der Unterkante genau am Fensterrand; der Fokusring wird dort unten angeschnitten. Browserübliches Scrollen, kein Befund.
  - «Grenzen des Bildes» auf beiden Seiten: Enter öffnet, Leertaste schliesst.
  - Nach dem Laden und nach den Tastendrücken läuft keine Animation (`document.getAnimations()`: leer).
- **Kontrast** (WCAG 1.4.3): aller Text mit eigenem Textknoten in `main`, Vertiefungen offen, bei 1280 und 360 px, beide Themes.
  - `rolle` 259, `selbstfuersorge` 200, `index` 26 Elemente; keines unter AA.
  - Tiefster Wert 4,71:1 (Kicker, 14 px, und Links, Blau auf Weiss).
  - Sätze in den Abbildungen und Kernaussagen: 15,91:1 in beiden Themes.
  - Linien der Zeichnungen gegen Weiss (WCAG 1.4.11): 4,71:1 (Standard) und 10,1:1 («kontrast»); gegen die hellblaue Wegfläche 3,59:1. Keine Linie unter 3:1.
  - **Hinweis (kein Befund dieser Website):** Links behalten im Theme «kontrast» ihre Standardfarbe (4,71:1), auch auf den Seiten der Etappe 1. Die Linien der Zeichnungen werden dunkler. AA ist erfüllt; ob «kontrast» auch Links abdunkeln soll, ist eine Frage an das Profil.
- **Nicht prüfbar:**
  - reale Screenreader-Läufe (z. B. VoiceOver mit Safari, NVDA mit Firefox), Hardwaretastatur und Touch. Sie brauchen eine Person (Stufe 5); sie sind **nicht** bestanden, sondern offen.
  - Kontrast des Fokusrings gegen alle Hintergründe: nur gegen Weiss gemessen (4,71:1).

### Teil F · Technik und Zuständigkeit (Stichprobe)

| Prüfung | Ergebnis (selbst ausgeführt am Stand `94afac7`) |
| --- | --- |
| `node tools/build.mjs` | 15 Seiten, Build r4-7, Gate draft: **0 blockierend, 14 Hinweise**: 2 × `visual-approval` (`v-ro-weg`, `v-sf-abend`), 10 × `placeholder-approval`, 1 × `site-url`, 1 × `review-report`. `git status` danach ohne Änderung |
| `node tools/gate.mjs --selftest` | **53/53 bestanden** |
| `node tools/gate.mjs --production` | blockiert erwartungsgemäss mit **13 Befunden**: 2 × `visual-approval` (die zwei neuen Abbildungen), 10 × `placeholder-approval` (`index` › Einstiege und die Seitenplatzhalter von `diagnose`, `behandlung`, `kommunizieren`, `krise`, `genesung`, `unterstuetzung`, `fragen`, `quellen`, `ueber`), 1 × `review-report` (offen: W1, W2, S, Visualisierungs-Check, Bedienung, W3, R1, R2, R3); dazu 1 Hinweis `site-url`. Das entspricht dem Bauauftrag (Abschnitt 6) |
| `node abgleich/pruefe-abgleich.mjs` | **3204 Zeilen, 0 ohne Fundstelle** |
| `node abgleich/kennzahlen.mjs` | Wörter `rolle` 3339, `selbstfuersorge` 2955, `index` 283; Absicherungen je 100 Wörter alt → neu 1,94 → 2,16 / 2,27 → 2,64 / 1,85 → 1,41; Semikolons alt → neu 4 → 2 / 10 → 2 / 1 → 0 |
| `node abgleich/verneinung.mjs` | `rolle` 83 von 389, `selbstfuersorge` 69 von 330, `index` 4 von 28 |
| `node abgleich/bedienung.mjs` | Tabstopps `index` 14, `rolle` 24, `selbstfuersorge` 21 (Etappe 1: 20 / 18 / 23); Höhe bei 360 px 4408 / 30 067 / 25 453 px; Abbildungen 673 und 680 px |

**Kennzahlen der bauenden Sitzung:** nachgerechnet und **bestätigt**, ohne Abweichung:

- Wörter je Seite und je Abschnitt (`rolle` 534 / 593 / 818 / 196 / 192 / 257 / 679; `selbstfuersorge` 366 / 790 / 284 / 485 / 433 / 366 / 187; eigenes Skript mit der Zählweise von `kennzahlen.mjs`)
- Absicherungen, Semikolons und Sätze mit Verneinung
- Tabstopps, Seiten- und Figurhöhen
- Selbsttest, Produktionsgate und Abgleich
- «Menschen etwa 60 px hoch» bei 360 px (gemessen 59 und 63 px)

Die eigene Satzzählung (Teil C1) zählt weniger Sätze (345 statt 384 auf `rolle`), weil sie Überschriften, Bezeichnungen und Quellenzeilen nicht mitzählt. Die Zahl der Sätze über 15 Wörter ist gleich (32 und 23).

**Zuständigkeit und Krisenzugang** (`rolle.html`, `selbstfuersorge.html`, `index.html` und ihre `content/`-Dateien):

- `tel:`-Links: 0.
- Telefonnummern im sichtbaren Text: 0. Gesucht wurden «+41», «0800», Muster «0xx xxx xx xx» sowie 143, 144, 147, 117, 112 und 118. Die Treffer im Quelltext sind Koordinaten in den SVG-Pfaden.
- Kein Notfallblock; `data-safety-access` steht nur am Zuständigkeitsverweis der Fusszeile.
- **Verweis im Text:** nur über `<p data-responsibility-inline></p>` in `content/` (`rolle` 1, `selbstfuersorge` 3, `index` 0), gefüllt mit dem Wortlaut aus `responsibility.inline`. Keiner steht in `figure` oder `details`; höchstens einer je Abschnitt; beide Seiten haben `sensitiveTopics` `selbstgefaehrdung`, `gewalt`, `akute-krise`.

| Seite › Abschnitt | Was davor steht | Nach einer Handlungsanleitung für eine akute Lage? | Trägt er? |
| --- | --- | --- | --- |
| `rolle` › `an-grenzen` | «Gefährdet ein Mensch sich selbst oder andere unmittelbar, oder kommt es zu Gewalt: Holen Sie Hilfe und schützen Sie sich.» | ja | ja |
| `selbstfuersorge` › `eigenes-leben` | «Wenn Sie diese Seite gerade in grosser Erschöpfung lesen, hilft eine kurze Pause vielleicht mehr als weitere Informationen. Wählen Sie nur, was Ihnen guttut. Kurze Übungen finden Sie im Abschnitt «Wenn es gerade zu viel ist».» | **nein:** Der Bestandssatz «Bei Gefahr hat Schutz Vorrang» ist durch den Verweis ersetzt, nicht vorangestellt | teilweise. Er trägt den Zusatz der Erlaubnis-Karte («bei akuter Gefahr aber Hilfe holen»), steht aber vor jedem Inhalt und ohne Anlass (P2a-T-1) |
| `selbstfuersorge` › `warnsignale` | «Wenn Sie sich nicht mehr sicher fühlen oder nicht einschätzen können, wie dringend es ist, wenden Sie sich an professionelle Hilfe. Warten Sie nicht auf bestimmte Warnzeichen.» | ja (Bestand: Handout `warnsignale` verwies hier auf «Akute Hilfe und Notfallkontakte») | ja |
| `selbstfuersorge` › `zu-viel` | «Bei Bedrohung, Gewalt, akuter Gefahr oder Selbstgefährdung holen Sie Hilfe, statt weiterzuüben.» | ja | ja |

**Sind drei Verweise auf `selbstfuersorge` zu viel?** Zwei tragen eindeutig (`warnsignale`, `zu-viel`). Sie stehen bei 360 px 813 px auseinander, also derselbe Satz zweimal innerhalb einer Bildschirmhöhe (12 550 und 13 363 px vom Seitenanfang). Der dritte (`eigenes-leben`, 1694 px) steht ohne Anlass-Satz. Er trägt nur, wenn der Bestandssatz «Bei Gefahr hat Schutz Vorrang.» davor steht; sonst ist er entbehrlich (P2a-F-4).

**Technik:**

- `style`-Attribute: 0.
- Hexwerte, `rgb(` oder `fill=`/`stroke=`-Attribute in den zwei SVG: 0; Farben nur über Klassen (berechnet: Linien `puk-blue-100`, Flächen `puk-blue-25` und Weiss).

**Etappe-1-Seiten unverändert:**

- `git diff 67495c0 -- content/verstehen.html content/beziehungen.html content/grenzen.html`: leer.
- `content/index.html`: nur die Zeile `einstiege` (zwei neue Einträge, neue Reihenfolge, neuer Platzhalter).
- Gebaute Seiten `verstehen.html`, `beziehungen.html`, `grenzen.html` und `index.html`: nur die zwei neuen Punkte der Navigation («Ihre Rolle», «Auf sich achten»), auf `index` dazu die Einstiege (`git diff --word-diff`).

**Befunde T**

- **P2a-T-1 · optional · Verweis im Text in `eigenes-leben` ohne Anlass.**
  - **Beleg:** Tabelle oben.
  - **Zuständig:** Fachstelle (P2a-F-4), danach die bauende Sitzung.
- **P2a-T-2 · optional · Der entschiedene Satz steht dreimal.**
  - **Beleg:** «Vielleicht ruft sie gleich an.» steht in `content/selbstfuersorge.html` in der Szene (`p.puk-vis-scene__say`) und in der Kurzbeschreibung (`p.puk-sr`), dazu in `site.config.json` › `v-sf-abend` › `statement`. Ausserdem in `abgleich/selbstfuersorge.md` (Nr. 661, 664) und in der Liste «Neue Sätze zur Freigabe» (Nr. 14, 17).
  - **Vorschlag:** In der nächsten Korrektur alle Stellen auf «Vielleicht kommt gleich eine Nachricht.» ändern.
  - **Zuständig:** bauende Sitzung.

### Zählung der Befunde der Prüfrunde 2a

| Stufe | kritisch | wichtig | optional |
| --- | ---: | ---: | ---: |
| W1 | 0 | 2 | 3 |
| W2 | 0 | 0 | 5 |
| S | 0 | 1 | 3 |
| V (Visualisierungs-Check) | 0 | 1 | 3 |
| B (Bedienung und Barrierefreiheit) | 0 | 0 | 0 |
| T (Technik und Zuständigkeit, Stichprobe) | 0 | 0 | 2 |

Dazu 10 Fragen an die Fachstelle (P2a-F-1 bis P2a-F-10) und 24 Kürzungsvorschläge (K-R-a1 bis K-S-b4).

**Gesamturteil:** Fachlich tragen die zwei Seiten. Sie übertragen den Bestand mit seinen Absicherungen und behandeln Sicherheit und Zuständigkeit richtig. Vor dem Wortlaut der Seiten muss die Fachstelle zwei Inhalte entscheiden: die Bestandssätze zur Verantwortung für Erkrankung und Genesung, die Etappe 1 widersprechen (P2a-F-1), und die Kinder (P2a-F-2). Dazu die Frage, wie stark gekürzt wird (P2a-F-3). Zu ändern ist vor der Durchsicht nichts; sinnvoll ist, dass die nächste Korrektur die Entscheide F-1 bis F-6, die Stellung der Abbildungen (P2a-V-1) und den Satz «Vielleicht kommt gleich eine Nachricht.» in einem Durchgang umsetzt, damit die Fachstelle danach die kürzere Fassung liest.

**Nicht geprüft, und warum:**

- **Vorschau auf Netlify:** Die Adresse `deploy-preview-10--puk-website-profil.netlify.app` war aus dieser Umgebung gesperrt (Proxy: «connect_rejected»). Geprüft ist der gebaute Stand im Repository über einen lokalen Server; ob die Vorschau denselben Stand zeigt, ist offen.
- **Reale Screenreader-Läufe, Hardwaretastatur und Touch:** brauchen eine Person (Teil E).
- **Verweise von den Etappe-1-Seiten (V1–V9):** auftragsgemäss nicht geprüft.
- **Zweite, unabhängige Prüfsitzung** (Prüftiefe, empfohlen für W1 und Visualisierungs-Check): gibt es für diese Runde nicht; die Befunde stammen alle aus dieser einen Prüfung.

## Vierte Prüfrunde (10.10.2026, Stand f32c255)

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `f32c255` (nach Korrektur 1h und Gate-Korrektur r4-7). Etappe 1: `index`, `verstehen`, `beziehungen`, `grenzen`. Die Entwurfsseiten sind nicht Gegenstand dieser Runde. Die Prüfsitzung hat die Website nicht gebaut. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht.

**Vorgehen**

- **Grundlagen gelesen:** `CLAUDE.md`; aus `guidelines/` die Abschnitte Ablauf, Fachliche Qualität, Gesamtkohärenz, Sprache, Visuelle Wissensvermittlung («Ein Bild, eine Idee»), Visualisierung umsetzen (Check 1–17) und Pre-Release-Audits (R2 Teil 2 und 3); `README.md` («Zuständigkeit statt Krisenzugang», «Verweis im Text»); dazu `KORREKTUR-ETAPPE-1E.md` bis `1H.md`, `site.config.json` und `abgleich/README.md`.
- **Bestand:** Branch `origin/borderline-bestand`, `bestand/borderline-angehoerige/texte/` (73 Dateien) und `INVENTAR.md`, mit `git show` ausgelesen.
- **Abgleich:** Die vier Tabellen in `abgleich/*.md` sind per Skript in 1763 Zeilen zerlegt. Jede zitierte Bestandsstelle ist im Bestandstext nachgesucht.
- **Neue Sätze:** Ein Skript sammelt alle Stellen in «…» der vier Seiten (`content/*.html`). Es vergleicht sie mit dem Stand `0ba7013` (vor Korrektur 1e) und sucht sie im ganzen Bestand.
- **Browser:** lokal `python3 -m http.server 8765` (am Ende beendet), Chromium über Playwright. Bildschirmfotos jeder Figur bei 1280 und 360 px, je im Theme Standard und «kontrast». Die Bildschirmfotos sind nicht committet; die Belege beschreiben sie.
- **Skripte der bauenden Sitzung:** selbst ausgeführt, nicht übernommen (Teil F).

**Ergebnis in Kürze:**

- Etappe 1 ist technisch sauber: kein Überlauf, keine Kontrastverletzung, Tastatur in Ordnung, Gate und Skripte wie gemeldet.
- Die Kennzahlen der bauenden Sitzung stimmen.
- Kein kritischer Befund.
- Fachlich bleibt eine Reihe von Fragen offen. Die wichtigsten betreffen die Neufassungen:
  - eine neue absolute Aussage über die betroffene Person («Das geschieht ohne Absicht.»)
  - die Spannung zwischen «Angehörige sind nicht die Ursache» und Beziehungserfahrungen als Mitursache
  - «nicht allein verantwortlich für den Verlauf»
  - die neuen Sätze in «Momentaufnahmen»
- Dazu ist der Visualisierungsplan bei zwei Figuren veraltet.

### Teil A · W1 Fachliche Vorprüfung

#### A1 · 33 Aussagen gegen den Bestand

29 Aussagen stammen aus den Neufassungen 1e bis 1h, 4 aus anderen Stellen (Suizid, Gewalt, Kinder, Anspannung). Nr. = Zeile im Abgleich (b = `beziehungen.md`, v = `verstehen.md`, g = `grenzen.md`). Bestandsdateien in `texte/`.

| # | Korr. | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- | --- |
| 1 | 1e | «Eine Diagnose kann beeinflussen, wie Gefühle, Nähe oder Zurückweisung erlebt werden.» (`verstehen--beziehungen.md`, b17) | «Borderline kann beeinflussen, wie jemand Nähe oder Zurückweisung erlebt.» (`beziehungen` › Kopf) | gleichbedeutend («Gefühle» entfällt, im Abgleich genannt) |
| 2 | 1e | «Die Zurückweisung kann aber auch real sein; beides muss offenbleiben.» (b60) | «Und manchmal war die Zurückweisung tatsächlich da.» und «Für die betroffene Person ist dieses Erleben real, auch wenn Sie es anders gemeint haben.» (`beziehungen` › `verstaerker`, Station 2) | gleichbedeutend |
| 3 | 1e | «… können Abwehr, Selbstabwertung oder Rückzug die Klärung erschweren.» (b121) | «Dann können Abwehr oder Rückzug folgen, und eine Klärung wird schwieriger. Ob es im Einzelfall so ist, bleibt offen.» (`verstaerker`, Station 2) | gleichbedeutend; das «wird» ist durch den Folgesatz abgesichert |
| 4 | 1e | «Unterschiedliches Verhalten beweist weder bewusste Kontrolle noch, dass Angehörige die Schwierigkeiten verursacht haben.» (b128) | «… beweist nicht, dass die Person bewusst steuert oder täuscht. Es beweist auch nicht, dass Sie die Schwierigkeiten verursacht haben.» (`verstaerker`, Station 5) | gleichbedeutend |
| 5 | 1e | «Dissoziation ist eine mögliche Erklärung, aber keine, die Angehörige aus dem Verhalten allein feststellen können.» (b132) | «Ein möglicher Grund ist eine Dissoziation: ein Gefühl, wie abgetrennt oder nicht ganz da zu sein. Ob das zutrifft, können Sie aus dem Verhalten allein nicht feststellen.» (`verstaerker`, Station 4) | gleichbedeutend; die Erklärung ist gedeckt durch `glossar.md` Z. 122 («Abgetrenntsein von sich selbst») |
| 6 | 1e | «Bei Suizidgedanken oder Selbstverletzung darf Hilfe nicht aus Sorge vor einer «Verstärkung» vorenthalten werden.» (b168) | «… darf Hilfe nie zurückgehalten werden – auch nicht aus der Sorge, Zuwendung könnte das Verhalten verstärken.» (`beziehungen` › `verantwortung`) | gleichbedeutend, im Sinn der Sicherheit verschärft («nie»); der Verweis im Text folgt |
| 7 | 1e | «Dann braucht es eine angemessene professionelle Einschätzung.» (b169) | «Dann braucht es eine fachliche Einschätzung.» (ebd.) | gleichbedeutend |
| 8 | 1e | «… sollte aber weder alle Regulation übernehmen noch Behandlung ersetzen.» (b191) | «Sie sollte aber weder alle schwierigen Gefühle auffangen noch eine Behandlung ersetzen.» (`was-hilft`) | leicht enger («Regulation»); die Fachstelle hat die Fassung 1e gelesen («es ist gut», 1F) |
| 9 | 1e | «… sind aber weder Therapeut:innen noch allein für den Verlauf oder die Beziehung verantwortlich.» (b209) | «… keine Therapeutinnen oder Therapeuten und nicht allein verantwortlich für den Verlauf oder die Beziehung.» (`verantwortung`) | gleichbedeutend mit dem Bestand; widerspricht aber anderen Seiten (P4-W2-1) |
| 10 | 1f | «Solche Erfahrungen kommen nicht bei allen Menschen mit Borderline vor und lassen sich aus der Diagnose nicht vorhersagen.» (`verstehen.md`, v17) | «Das ist nicht bei allen Menschen mit Borderline so.» (`verstehen` › `erleben`) | **Absicherung fehlt:** «aus der Diagnose nicht vorhersagen» entfällt; im Abgleich als Prüfbedarf genannt (P4-F-10) |
| 11 | 1f | «Manche drücken starke Gefühle sichtbar aus, andere erleben sie eher nach innen gerichtet oder ziehen sich zurück.» (v26) | «Manche zeigen starke Gefühle nach aussen. Andere erleben sie eher nach innen oder ziehen sich zurück.» (`borderline`) | gleichbedeutend |
| 12 | 1f | «Die Diagnose allein erlaubt keine Aussage darüber, ob von einem Menschen Gefahr ausgeht.» (v28) | «Die Diagnose allein sagt nichts darüber, ob von einem Menschen Gefahr ausgeht.» (`borderline`) | gleichbedeutend |
| 13 | 1f | «Unter hoher emotionaler Überflutung verengt sich das Erleben häufig stark auf den aktuellen Schmerz, die aktuelle Angst oder den aktuellen Konflikt.» (v78) | «Bei hoher Anspannung zählt für einen Menschen oft nur noch der Schmerz oder Streit im Moment.» (`anspannung`) | **Bedeutung leicht verschoben:** «verengt sich stark» wird «zählt nur noch»; «Angst» entfällt (P4-F-12) |
| 14 | 1f | «Borderline entsteht nicht durch eine einzige Ursache, sondern im Zusammenspiel biologischer Empfindlichkeit, Bindungs- und Entwicklungserfahrungen sowie Belastungsfaktoren.» (v100) | «Borderline hat nicht eine einzige Ursache. Mehrere Dinge wirken zusammen: eine biologische Empfindlichkeit, Erfahrungen in engen Beziehungen und beim Aufwachsen sowie Belastungen.» (`borderline`) | gleichbedeutend; Spannung zu Nr. 16 (P4-F-2) |
| 15 | 1f | «Schuldzuweisungen an Betroffene oder Angehörige greifen zu kurz und helfen niemandem.» (v101) | «Die Schuld bei der betroffenen Person oder bei Angehörigen zu suchen, ist zu einfach.» (`borderline`) | gleichbedeutend (gekürzt, im Abgleich genannt) |
| 16 | 1f | «Angehörige sind weder Ursache der Borderline-Erkrankung noch für die Genesung einer anderen Person verantwortlich.» (v117) | «Angehörige sind nicht die Ursache der Erkrankung und nicht für die Genesung verantwortlich.» (`mythen`, Annahme 3) | gleichbedeutend; Spannung zu Nr. 14 und Annahme 5 (P4-F-2) |
| 17 | 1f | «Wechselseitigen Einfluss anzuerkennen bedeutet keine Schuldzuweisung und keine Aufteilung von Verantwortung für die Erkrankung.» (v119) | «Dass man sich in einer Beziehung gegenseitig beeinflusst, heisst nicht, dass jemand schuld ist.» (Annahme 3) | gleichbedeutend im Kern; «keine Aufteilung von Verantwortung» entfällt (im Abgleich genannt) |
| 18 | 1f | «Solche Erfahrungen können Risikofaktoren sein; sie sind weder notwendig noch hinreichend …» (v123) | «Solche Erfahrungen können das Risiko erhöhen. Sie führen aber nicht zwingend zu Borderline, und Borderline kann auch ohne sie entstehen.» (Annahme 5) | gleichbedeutend |
| 19 | 1f | «In klinischen Kontexten wird die Störung häufig als frauendominiert wahrgenommen; bevölkerungsbezogene Studien berichten teils keine signifikanten Unterschiede.» (v135) | «In Kliniken gilt Borderline oft als Erkrankung, die vor allem Frauen betrifft. Studien in der allgemeinen Bevölkerung finden aber teils keine statistisch bedeutsamen Unterschiede …» (Annahme 7) | gleichbedeutend |
| 20 | 1f | «Eine Pendel-Metapher für einen vorübergehend verengten Blick – nicht für eine feste Eigenschaft oder Absicht.» (`verstehen.md` Z. 349, v504); «Sie beschreibt weder eine feste Eigenschaft einer Person noch eine Absicht …» (`materialien--text--spaltung.md`, v371) | «Das geschieht ohne Absicht.» (`verstehen` › `bewertungen`, Abschnittstext) | **Bedeutung verschoben, Absicherung fehlt:** Der Bestand sagt, das Bild beschreibe keine Absicht. Neu steht als Tatsache über die Person, es geschehe ohne Absicht (P4-F-1) |
| 21 | 1f | «Eine Grenze gilt auch ohne Zustimmung der anderen Person; deren Reaktion können Sie nicht steuern.» (`materialien--text--lmk.md`, g627) | «Für die Reaktion der anderen Person sind Sie nicht verantwortlich.» (`grenzen` › `konsequenz`) | **Bedeutung verschoben:** «gilt auch ohne Zustimmung» fehlt; im Abgleich als «zusammengeführt» geführt (P4-F-11) |
| 22 | 1f | «Welche Grenze passt, ist individuell und darf ohne moralische Bewertung entschieden werden.» (g271) | «Welche Grenze passt, ist individuell und keine Frage von moralisch richtig oder falsch.» (`rollen`) | gleichbedeutend |
| 23 | 1f | «Sie beweisen keine Grenzverletzung.» / «Ein Signal sagt nicht automatisch, was die Ursache ist.» (`materialien--text--grenzen-erkennen.md`, g490, g500) | «Solche Signale beweisen nicht, dass jemand eine Grenze verletzt hat, und zeigen auch nicht sicher, woher die Belastung kommt.» (`erkennen`) | gleichbedeutend (F-W1-03 hier erledigt) |
| 24 | 1g | «Bei starker Aktivierung können Zuhören, Abwägen und Impulse steuern vorübergehend schwerer werden.» (`materialien--text--alarm-modus.md`, v236) | «Dann kann es vorübergehend schwerfallen, zuzuhören, nachzudenken und sich zurückzuhalten.» (`anspannung`, Abbildung 2, Stelle 3) | gleichbedeutend |
| 25 | 1g | «Grenzen können Kontakt schützen.» (`materialien--text--bruecke-gelaender.md`, g423) | «Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht.» (`grenzen` › `bruecke`) | gleichbedeutend (W1-2 der ersten Runde erledigt) |
| 26 | 1h | «Das Eisberg-Bild ist eine mögliche Verständnishilfe, keine Aussage darüber, was in einer konkreten Person sicher «darunterliegt».» (`verstehen.md`, v61) | «Der Eisberg ist ein Bild dafür, was man von aussen sieht, keine Aussage darüber, was in einer bestimmten Person «darunterliegt».» (Abbildung 1, Vertiefung) | **leicht verschoben:** Das Bild handelt gerade auch vom Unsichtbaren, nicht nur vom Sichtbaren (P4-F-13; Wortlaut aus 1H) |
| 27 | 1h | «Unter hoher Anspannung kann der Blick auf einen Menschen vorübergehend enger werden.» (spaltung, v391) | «Unter starker Anspannung kann ein einzelner Moment das ganze Bild bestimmen …» und «… der Blick kann sich wieder weiten.» (Abbildung 3, Kurztext) | gleichbedeutend |
| 28 | 1h | «Sie gilt nicht für alle Menschen mit Borderline und erklärt keine einzelne Situation abschliessend.» (spaltung, v390) | «… und gilt nicht für alle Menschen mit Borderline.» (Abbildung 3, Vertiefung) | gleichbedeutend im Kern; «erklärt keine einzelne Situation abschliessend» entfällt, die Bemerkung im Abgleich nennt das nicht (P4-W1-9) |
| 29 | 1h | Bestand-Handout: drei Bereiche «Rückzug», «Im Gespräch», «Zu viel Alarm»; dazu «Später nur dann neuen Kontakt anbieten, wenn es für Sie sicher und gewollt ist.» (`materialien--text--anspannungskurve.md`) | Stelle 4 «Es wird wieder ruhiger.» (Abbildung 2, Beschriftung und Überschrift) | **neu ohne Grundlage:** Der Bestand kennt keine vierte Stelle und kein Wiederabklingen als Satz. Das Beispiel bei Stelle 4 stammt aus «Bei Rückzug» (P4-F-7) |
| 30 | – | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Solche Fragen lösen nach heutigem Wissensstand keine suizidale Handlung aus; sie können helfen, die Lage zu verstehen …» (`verstehen.md` Z. 197) | wörtlich (`mythen`, Abschnittstext) und «Das kann helfen, die Lage zu verstehen.», danach der Verweis im Text; Annahme 6 «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» | gleichbedeutend |
| 31 | – | «Bringen Sie sich in Sicherheit und wenden Sie sich an passende professionelle Hilfe. Sie müssen die Dringlichkeit nicht allein einschätzen.» (`grenzen.md` Z. 476) | «Bringen Sie sich in Sicherheit und holen Sie Hilfe.», Verweis im Text, «Sie müssen die Dringlichkeit nicht allein einschätzen.» (`gewalt`, Schritt 2) | gleichbedeutend |
| 32 | – | «Vereinbaren Sie, welche vertraute erwachsene Person das Kind betreut, wohin es gehen kann und wer erreichbar ist, wenn die erste Person ausfällt.» (`grenzen.md` Z. 491) | «… und wer einspringt, wenn diese ausfällt.» (`gewalt`, Kinder) | gleichbedeutend |
| 33 | – | «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» (`materialien--text--alarm-modus.md`, v246) | «Bei Gefahr hat Schutz Vorrang.» (`anspannung`) | gekürzt: «professionelle Hilfe» fehlt (R3-W1-06, P4-F-5) |

**Bilanz:** 24 gleichbedeutend (davon 3 mit bekanntem Spannungs- oder Widerspruchsbezug), 5 Bedeutung verschoben, 2 mit fehlender Absicherung (Nr. 10 und Nr. 20, Nr. 20 zugleich verschoben), 1 neu ohne Grundlage (Nr. 29), 1 gekürzt mit offenem Prüfbedarf (Nr. 33). Keine Sicherheitsaussage ist entfallen.

#### A2 · 20 Zeilen des Abgleichs mit Status «umformuliert», «verschoben» oder «entfällt»

| Nr. | Status | Bestand (Kern) | Trägt die neue Fassung / ist «entfällt» begründet? |
| --- | --- | --- | --- |
| v59 | entfällt | «Ärger oder Wut … müssen aber weder im Vordergrund stehen noch auf eine bestimmte Weise geäussert werden.» | Aussage getragen von `borderline` («Manche zeigen starke Gefühle nach aussen. Andere erleben sie eher nach innen …»); die Begründung «Kürzung W2-2» verweist nicht dorthin |
| v330 | entfällt | «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» | begründet (Figur zeigt nur Anspannung); im Abgleich als Prüfbedarf markiert (P4-F-6) |
| v336 | entfällt | «Was kann die andere Person freiwillig anbieten, und wo liegt ihre Grenze?» | nur teilweise begründet: `erkennen` fragt nach dem eigenen Angebot, nicht nach dem der anderen Person |
| v393 | entfällt | «… bedeutet nicht, verletzende Aussagen, Drohungen oder Gewalt hinzunehmen.» | getragen von `einordnung` («Verstehen bedeutet nicht, alles auszuhalten.») und `beziehungen` › `verantwortung` |
| v27 | entfällt | «Ausdruck, Verlauf und Belastung unterscheiden sich deutlich.» | begründet (Wiederholung von «Kein einzelnes Merkmal trifft auf alle zu») |
| b54 | entfällt | «Zunächst steht nur fest: Eine Antwort ist noch nicht da.» | begründet (Beispiel ersetzt durch die Absage) |
| b158 | entfällt | «Diese Reaktionen sind verständlich und verdienen Aufmerksamkeit …» | getragen: Abbildung 2 «Beide Sichten sind nachvollziehbar»; Ansatzpunkt Station 5 |
| b162 | entfällt | «… dauerhaft verfügbar bleiben, kann das kurzfristig entlasten und zugleich die eigene Belastung erhöhen.» | **Begründung überholt:** «Kürzung Umfang (Korrektur 1b)»; der Richtwert gilt seit 1c nicht mehr (R3-W1-05, P4-F-6) |
| b163 | entfällt | «… keine einzelne Bezugsperson kann Sicherheit allein gewährleisten.» | **Begründung überholt** («Kürzung W2-2»); entlastende Aussage, nur teilweise getragen von «ich kann das nicht allein tragen» (P4-F-6) |
| b39 | entfällt | «Unterschiede, die stehen bleiben dürfen» | **Begründung überholt** («Kürzung Umfang»; R3-W1-05) |
| g60 | entfällt | «Wenn sie schwer einzuhalten ist, können kleinere Schritte oder eigene Beratung helfen.» | getragen von `konsequenz` («holen Sie Unterstützung und passen sie an») und `kontakt` |
| g208 | entfällt | «Zeitgrenzen wirken am besten, wenn Sie sie in einer ruhigen Situation ankündigen …» | Status passt nicht: Die Bemerkung sagt «vorgemerkt für `kommunizieren`», das wäre «verschoben» (P4-W1-9) |
| g234 | entfällt | «Bei Gefahr hat Schutz Vorrang.» | begründet (Kopf und `gewalt`) |
| g264 | entfällt | «Die Beispiele können bei der individuellen Einordnung helfen.» | begründet (Meta-Satz) |
| g425 | umformuliert (1g) | «Eine Grenze bewertet keinen Menschen.» | nur teilweise: «Sie beschreibt, was für Sie möglich ist.» Die Aussage «bewertet keinen Menschen» steht sinngemäss in «keine Strafe und kein Liebesentzug» und `rollen`; Wortlaut 1G |
| g397 | umformuliert (1g) | «… keinen Kontakt versprechen, der für Sie nicht sicher oder tragbar ist.» | trägt («Sie entscheiden, welcher Kontakt für Sie sicher und tragbar ist.») |
| v371 | umformuliert (1h) | «… weder eine feste Eigenschaft … noch eine Absicht und lässt sich nicht aus einer Diagnose vorhersagen.» | teilweise: Die Vertiefung sagt «nicht den Charakter»; «Absicht» steht verschoben im Abschnittstext (Nr. 20 oben); «nicht aus einer Diagnose vorhersagen» entfällt, die Bemerkung nennt das nicht |
| v390 | umformuliert (1h) | «… erklärt keine einzelne Situation abschliessend.» | teilweise (siehe A1 Nr. 28) |
| v380 | verschoben (1h) | «Kränkung, Angst oder Wut können den Blick stark färben.» | trägt (Vertiefung von Abbildung 3; keine Hauptaussage) |
| b131 | umformuliert (1e) | «Verstummen, Unwirklichkeitsgefühle oder abweichende Erinnerungen …» | trägt («abwesend wirkt», das Gefühl beschreibt der Folgesatz) |

**Weitere Feststellungen zum Abgleich:**

- Der Abgleich markiert **24 Zeilen** als «Prüfbedarf». Die meisten sind Kürzungen für den Richtwert, der nicht mehr gilt: v17, v92, v126, v278–v283, v289, v326, v329–v331, v377, v381, v441, b133, g51, g79, g121, g261, g369, g650. Sie stehen gesammelt in P4-F-6.
- «Du bist wie alle anderen.» ist als «neu (1h)» geführt. Der Bestand hat den Satz fast gleich als Vorwurf an Angehörige: «Du bist genau wie alle anderen.» (`materialien--text--wenn-worte-treffen.md` Z. 47).
- v138 und v146 nennen weiter eine «Vertiefung «Quellen»», die es seit 1h nicht mehr gibt.

#### A3 · Beispielsätze und Sätze in Abbildungen, neu seit Korrektur 1e

Grundlage: alle Stellen in «…» auf den vier Seiten, verglichen mit dem Stand `0ba7013` und gesucht im ganzen Bestand. Dazu die Wörter im Eisberg.

| Satz | Seite › Ort | Herkunft |
| --- | --- | --- |
| «Wie ist es gerade für dich?» | `verstehen` › `eisberg`, Text und Abbildung 1 | Bestand: `glossar.md` Z. 296 («Offene Frage: 'Wie ist es gerade für dich?'») |
| «Es wird wieder ruhiger.» | `verstehen` › Abbildung 2, Stelle 4 | **neu** → P4-F-7 |
| «Du bist die Einzige, die mich versteht.» | `verstehen` › Abbildung 3 | **neu** → P4-F-4 |
| «Du bist wie alle anderen.» | `verstehen` › Abbildung 3 | gekürzt aus dem Bestand: «Du bist genau wie alle anderen.» (`wenn-worte-treffen.md` Z. 47, dort als Vorwurf an Angehörige mit Antwortvorschlag) → P4-F-4 |
| «… oder ganz andere Erfahrungen» (Wort im Eisberg) | `verstehen` › Abbildung 1 | Bestand: `materialien--text--eisberg.md` Z. 91 |
| Wörter «Rückzug», «Anspannung» im Eisberg | `verstehen` › Abbildung 1 | vor 1e im Text; das Handout nennt «Stress» statt «Anspannung» und kein «Rückzug» (Z. 15). Sachlich gedeckt durch den Begriffsentscheid W2-5 |
| «Was trägt unsere Beziehung – und wann gelingt der Kontakt?» | `beziehungen` › `verbindung` | umformuliert aus `verstehen--beziehungen.md` Z. 70 |
| «Wie hast du meine Absage verstanden?» | `beziehungen` › Abbildung 1, Ansatzpunkt | **neu** (1e) → P4-F-8 |
| «Ich bin bei der Arbeit. Ich melde mich heute Abend.» | `beziehungen` › `verstaerker`, Station 2 | **neu** (1e) → P4-F-8 |
| «Vorhin warst du plötzlich weit weg. Wie war das für dich?» | `verstaerker`, Station 4 | **neu** (1e) → P4-F-8 |
| «Ich habe den Eindruck, du bist enttäuscht von mir. Stimmt das?» | `zwei-sichten` | **neu** (1e) → P4-F-8 |
| Nicht in «…»: «Vielleicht wirkt die Person bei Freunden oder bei der Arbeit ruhiger als bei Ihnen.», «Das kann kränken.» | `verstaerker`, Station 5 | **neu** (1e, Abgleich b242, b243) → P4-F-8 |
| «Ich bin da – und ich brauche einen ruhigen Ton.», «Das kann ich nicht allein tragen. Wir holen Unterstützung dazu.» | `grenzen` › `bruecke` | Bestand: `materialien--text--bruecke-gelaender.md` |
| «Ich bin gerne für dich da – und ich kann nicht dein ganzes Netz sein. Lass uns zusammen schauen, wer dich sonst noch unterstützen kann.» | `grenzen` › `saetze` | erster Satz Bestand (`grenzen.md` Z. 396); zweiter Satz **neu**, im Bestand «Dafür brauchen wir gemeinsam andere Unterstützung.» → P4-F-8 |
| «Ich brauche jetzt Abstand. Ob und wann wir weiterreden, kläre ich später.» | `grenzen` › `konsequenz` | Bestand: `materialien--text--beispiel-dialog.md` |

#### A4 · Offener Prüfbedarf aus früheren Runden

| Punkt | Stand | Beleg |
| --- | --- | --- |
| F-V-05 Schleife ohne Modellgrenzen, «kann» und «wird» gemischt | teilweise erledigt, Rest neu zu fassen | Grenze steht im Kurztext: «Das Modell ist eine mögliche Erklärung, keine sichere Aussage …» (1b, 1e). Es bleibt «Was die Schwester tut, wird zum neuen Ereignis.» neben der Kernaussage mit «kann» → P4-F-17 |
| F-V-11 Annahmen als Kastenreihe | durch Korrektur 1h erledigt (BS-3) | `verstehen` › `mythen` ist eine `dl` ohne `figure`. Der Abschnitt ist bei 360 px 3430 px hoch, jetzt als Text |
| F-W1-11 Quellenzuordnungen | noch offen | Ursachensatz mit Quellenzeile «WHO, ICD-11 (2024); American Psychiatric Association (2024); Linehan (1993)»; Fruzzetti (2006) und Gunderson et al. (1997) auf `beziehungen`; sechs Bezugspunkte bei Abbildung 2. Neu dazu nur Quellen, die der Bestand nennt: Momentaufnahmen wie `spaltung.md`, `bruecke` wie `bruecke-gelaender.md` → P4-F-16 |
| F-W2-02 Planbegründungen `v-vs-erleben`, `v-bz-was-hilft` | noch offen | `v-bz-was-hilft`: «Inhaltscontainer, keine Beziehung untereinander». Die Liste nennt aber «Stellen, an denen sich die Schleife unterbrechen lässt», also eine Beziehung zu Abbildung 1 → P4-F-18 |
| F-W2-03 Beratung «vor Ort» ohne Ort | noch offen | `index` › `beratung`: «Sie findet vor Ort oder telefonisch statt» → P4-F-19 |
| R3-W1-05 Kürzungen an Aussagen für Angehörige | noch offen | b39, b45 (Teil «eine Person «handhabt» nicht die andere»), b162, g228 weiter entfallen, Begründung jeweils Kürzung für den Richtwert → P4-F-6 |
| R3-W1-06 Anspannung ohne professionelle Hilfe | noch offen | `anspannung`: «Bei Gefahr hat Schutz Vorrang.»; Abgleich v246, v289 → P4-F-5 |
| Spannung «Angehörige sind nicht die Ursache» und Kindheitserfahrungen als Risikofaktor | neu zu fassen, verschärft | Seit 1f nennt `borderline` «Erfahrungen in engen Beziehungen und beim Aufwachsen» als Mitursache. Annahme 3 sagt «nicht die Ursache», Annahme 5 «können das Risiko erhöhen» → P4-F-2 |
| R3-W1-01 bis R3-W1-04 | durch Korrektur 1c/1e erledigt | Station 4 jetzt «kann das viele Gründe haben. Ein möglicher Grund ist eine Dissoziation …»; «Es gibt keine «perfekte» Reaktion …»; «Mögliche Sicht der …»; «Was könnte die Person innerlich erleben?» |
| BS-5 zweiter Teil (eigene Anspannung als zweite Linie) | noch offen | Kurztext «Das gilt für die andere Person und auch für Sie.», im Bild eine Linie → P4-F-20 |
| Skizzen im Stamm | erledigt | laut Nachtrag mit Merge `56f5438` entfernt; `ls` im Stamm: keine `skizze-*.png` |

#### Prüfbedarf für die Fachstelle

Nach Wichtigkeit sortiert. Jede Frage lässt sich mit Ja oder Nein oder mit einer Auswahl beantworten. Die Varianten halten den Bestand, wo es einen gibt.

1. **P4-F-1 · Absicht.** `verstehen` › `bewertungen`: «Das geschieht ohne Absicht.» Der Bestand sagt nur, das Bild beschreibe «keine Absicht» (`spaltung.md`; `verstehen.md` Z. 349). Soll der Satz (a) so bleiben, (b) wie im Bestand abgesichert werden, etwa «Das beschreibt keine Absicht.», oder (c) entfallen?
2. **P4-F-2 · Ursache und Angehörige.** `verstehen` sagt dreierlei:
   - `borderline`: «Mehrere Dinge wirken zusammen: … Erfahrungen in engen Beziehungen und beim Aufwachsen …»
   - Annahme 3: «Angehörige sind nicht die Ursache der Erkrankung …»
   - Annahme 5: «Solche Erfahrungen können das Risiko erhöhen.»
   
   Eltern können das als Widerspruch lesen. Soll (a) alles so bleiben, (b) Annahme 3 den Bestandssatz wieder aufnehmen («… keine Aufteilung von Verantwortung für die Erkrankung», v119), oder (c) die Fachstelle einen Satz vorgeben, der beides verbindet?
3. **P4-F-3 · Verantwortung für den Verlauf.** Die Seiten sagen Verschiedenes:
   - `beziehungen` › `verantwortung`: «… nicht allein verantwortlich für den Verlauf oder die Beziehung»
   - `index` › `haltung`: «Sie sind nicht für die Genesung eines anderen Menschen verantwortlich.»
   - `verstehen` › Annahme 3: «… nicht für die Genesung verantwortlich.»
   
   «Nicht allein» kann eine Mitverantwortung für den Krankheitsverlauf nahelegen. Soll es heissen (a) wie bisher, (b) «nicht verantwortlich für den Verlauf der Erkrankung und nicht allein für die Beziehung», oder (c) anders?
4. **P4-F-4 · Sätze in «Momentaufnahmen».** «Du bist die Einzige, die mich versteht.» ist neu. «Du bist wie alle anderen.» ist aus einem anderen Handout gekürzt (dort ein Vorwurf an Angehörige). Die Figur sagt nicht, wer spricht, und engt die Aussage auf Bewertungen der Angehörigen ein; das Handout meint Bewertungen allgemein. Werden (a) beide Sätze so freigegeben, (b) mit dem Bestandswortlaut «Du bist genau wie alle anderen.», (c) mit Angabe, wer spricht, oder (d) andere Sätze?
5. **P4-F-5 · Professionelle Hilfe bei Anspannung** (R3-W1-06). `anspannung`: «Bei Gefahr hat Schutz Vorrang.» Das Handout sagt: «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» Soll der Handout-Wortlaut stehen (Ja/Nein)?
6. **P4-F-6 · Gekürzte Aussagen für Angehörige.** Gekürzt wurde für den Richtwert, der seit 1c nicht mehr gilt. Betroffen sind R3-W1-05 und die 24 Zeilen «Prüfbedarf» im Abgleich (Liste in A2). Darunter:
   - «Wenn Angehörige … dauerhaft verfügbar bleiben, kann das kurzfristig entlasten und zugleich die eigene Belastung erhöhen.» (b162)
   - «keine einzelne Bezugsperson kann Sicherheit allein gewährleisten» (b163)
   - «etwa bei Angst, Abhängigkeit oder fehlender Unterstützung» (g228)
   - «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» (v330)
   
   Sollen (a) alle, (b) nur b162, b163 und g228, oder (c) keine wieder aufgenommen werden?
7. **P4-F-7 · Stelle 4 der Anspannungskurve.** «Es wird wieder ruhiger.» ist neu und klingt wie eine sichere Aussage über den Verlauf. Der Kurztext sagt «kann … wieder sinken». Das Beispiel «Ich lasse dir Raum …» steht im Handout bei «Rückzug». Soll (a) «Es wird wieder ruhiger.» bleiben, oder (b) «Es kann wieder ruhiger werden.» stehen? Bleibt das Beispiel bei Stelle 4 (Ja/Nein)?
8. **P4-F-8 · Neue Beispielsätze aus 1e und 1f** (Liste in A3, 7 Stellen ohne Bestand). Die Fachstelle hat `beziehungen` nach 1e gelesen («es ist gut», 1F). Werden die Sätze damit ausdrücklich freigegeben (Ja/Nein, je Satz)?
9. **P4-F-9 · Wortstellung im Suizid-Absatz.** `verstehen` › `mythen`: «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» Man kann «nur bei der Person» lesen. Soll es heissen «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.»? Die Bedeutung bleibt gleich (Entscheid F-W1-02 «mit nur»). Ja/Nein.
10. **P4-F-10 · Vorhersage aus der Diagnose.** `erleben`: «Das ist nicht bei allen Menschen mit Borderline so.» Soll «und lässt sich aus der Diagnose nicht vorhersagen» (v17) wieder dazu (Ja/Nein)?
11. **P4-F-11 · Grenze ohne Zustimmung.** Soll «Eine Grenze gilt auch ohne Zustimmung der anderen Person» (g627) auf `grenzen` › `konsequenz` stehen (Ja/Nein)?
12. **P4-F-12 · «nur noch».** `anspannung`: «… zählt für einen Menschen oft nur noch der Schmerz oder Streit im Moment.» Bestand: «verengt sich das Erleben häufig stark auf …». Bleibt «nur noch» (Ja/Nein)?
13. **P4-F-13 · Grenzen des Eisberg-Bildes.** Vertiefung: «Der Eisberg ist ein Bild dafür, was man von aussen sieht …». Soll (a) der Wortlaut bleiben, oder (b) der Bestandssatz stehen: «Das Eisberg-Bild ist eine mögliche Verständnishilfe, keine Aussage darüber, was in einer konkreten Person sicher «darunterliegt».»?
14. **P4-F-14 · Eisberg schmal.** Unter 800 px steht die Zeichnung ohne Wörter, darunter die Listen «Sichtbar» und «Darunter möglich». Das widerspricht Prüfpunkt 16 («keine Liste, die Bildteile übersetzt»), entspricht aber dem Auftrag 1H. Bleibt es so (Ja/Nein)?
15. **P4-F-15 · Frage doppelt.** «Wie ist es gerade für dich?» steht in `eisberg` im Text und wenige Zeilen später in Abbildung 1. Soll sie (a) an beiden Stellen bleiben, oder (b) nur in der Abbildung stehen?
16. **P4-F-16 · Quellenzuordnungen** (F-W1-11). Tragen die Quellenzeilen die genannten Aussagen? Betroffen sind die Ursachen (`borderline`), Fruzzetti und Gunderson auf `beziehungen` und die sechs Bezugspunkte der Anspannungskurve. Je Ja/Nein.
17. **P4-F-17 · «wird» in der Schleife** (F-V-05). Soll «Was die Schwester tut, wird zum neuen Ereignis.» bleiben oder «kann zum neuen Ereignis werden» heissen?
18. **P4-F-18 · Planbegründung `v-bz-was-hilft`** (F-W2-02). Bleibt der Abschnitt Text, oder sollen die drei Unterbrechungsstellen in Abbildung 1 markiert werden?
19. **P4-F-19 · Ort der Beratung** (F-W2-03). Soll «vor Ort» einen Ort nennen (Ja/Nein; wenn Ja, welchen)?
20. **P4-F-20 · Eigene Anspannung als zweite Linie** (BS-5, zweiter Teil). Ja/Nein.
21. **P4-F-21 · Fachliche Freigaben.** Offen sind die sechs Visualisierungen (`approvalStatus` «ausstehend») und zwölf Platzhalter.

#### Befunde W1

- **P4-W1-1 · wichtig · «Das geschieht ohne Absicht.»**
  - **Beleg:** A1 Nr. 20.
  - **Vorschlag:** Den Satz wie im Bestand als Aussage über das Bild fassen, nicht über die Person.
  - **Zuständig:** Fachstelle (P4-F-1).
- **P4-W1-2 · wichtig · Ursache und Angehörige.**
  - **Beleg:** A1 Nr. 14, 16, 18.
  - **Vorschlag:** Die drei Stellen in ein Verhältnis setzen.
  - **Zuständig:** Fachstelle (P4-F-2).
- **P4-W1-3 · wichtig · Neue Sätze in «Momentaufnahmen».**
  - **Beleg:** A3.
  - **Zuständig:** Fachstelle (P4-F-4).
- **P4-W1-4 · wichtig · Kürzungen für den Richtwert ohne Grundlage.**
  - **Beleg:** A2 b39, b162, b163; 24 Zeilen «Prüfbedarf» im Abgleich.
  - **Zuständig:** Fachstelle (P4-F-6), danach die bauende Sitzung.
- **P4-W1-5 · optional · Stelle 4 neu.**
  - **Beleg:** A1 Nr. 29.
  - **Zuständig:** Fachstelle (P4-F-7).
- **P4-W1-6 · optional · «nur noch».**
  - **Beleg:** A1 Nr. 13.
  - **Zuständig:** Fachstelle (P4-F-12).
- **P4-W1-7 · optional · «gilt auch ohne Zustimmung» fehlt.**
  - **Beleg:** A1 Nr. 21.
  - **Zuständig:** Fachstelle (P4-F-11).
- **P4-W1-8 · optional · Vertiefung Eisberg.**
  - **Beleg:** A1 Nr. 26.
  - **Zuständig:** Fachstelle (P4-F-13).
- **P4-W1-9 · optional · Abgleich ungenau.**
  - **Beleg:**
    - Bei v371 und v390 nennt die Bemerkung die entfallenen Teile nicht.
    - g208 steht auf «entfällt», ist laut Bemerkung aber vorgemerkt; das wäre «verschoben».
    - v138 und v146 nennen eine «Vertiefung «Quellen»», die es nicht mehr gibt.
    - «Du bist wie alle anderen.» ist ohne Bestandszeile geführt.
  - **Vorschlag:** Die Bemerkungen nachführen; den Satz auf `wenn-worte-treffen.md` beziehen.
  - **Zuständig:** bauende Sitzung.

### Teil B · W2 Gesamtkohärenz

**Begriffe** (Zählung im sichtbaren Text von `main`, je `index` / `verstehen` / `beziehungen` / `grenzen`):

- **Anspannung:** einheitlich (1 / 18 / 2 / 1). «Stress» kommt nur im Quellentitel «WHO, Stress: Questions and answers» vor. «Alarm» und «Überflutung» kommen nicht vor. F-W2-01 ist erledigt.
- **Grenze:** einheitlich.
- **Betroffene Person:** Die Rolle heisst je nach Stelle «betroffene Person» (Schleife, Zwei Sichten), «die andere Person» (`verstehen` Abbildung 2, `grenzen`) oder «die Person». Wo Lesende direkt angesprochen werden, ist «die andere Person» verständlich. Kein Befund.
- **Pause:** zwei Bedeutungen, siehe P4-W2-2.

**Widersprüche:** einer, P4-W2-1. Schutz vor Gespräch ist überall gleich formuliert: «Bei Gefahr hat Schutz Vorrang.» (`verstehen`) und «Bei Bedrohung oder Gewalt geht Schutz vor jedem Gespräch» (`grenzen`).

**Wiederholungen:**

- Die Frage «Wie ist es gerade für dich?» steht zweimal im selben Abschnitt (P4-W2-3).
- Den Beratungsabsatz gibt es nur auf `index`; die anderen Seiten verlinken ihn (`index.html#beratung`, zweimal). W2-4 der ersten Runde ist erledigt.

**Wegweiser und Navigation:**

- Die Hauptnavigation «Verstehen · Beziehungen · Grenzen» ist auf allen vier Seiten gleich, mit `aria-current`.
- Jede Inhaltsseite hat einen Wegweiser «Auf dieser Seite»; alle Anker existieren.
- Die drei Einstiege auf `index` passen zu den Seiten.

**Verweise zwischen den Seiten:** Alle Ziele und Anker existieren.

- `verstehen` verweist auf `beziehungen` und `grenzen`.
- `beziehungen` verweist auf `verstehen#anspannung`, `verstehen#bewertungen`, `grenzen#gewalt` und `index#beratung`.
- `grenzen` verweist nur auf `index#beratung` (P4-W2-4).

**Entwurfsseiten:**

- Keine der 12 Entwurfsseiten (einschliesslich `gate.html`) ist von den vier Seiten aus verlinkt; geprüft wurden alle `a[href]`.
- Sie haben kein `noindex`. `tools/export.mjs` exportiert laut Code aber nur Seiten mit `status: "published"`; im Arbeitsordner sind sie nur über die direkte Adresse erreichbar. Kein Befund für diese Etappe; für W3 vormerken.
- Der Platzhalter auf `index` («Entwurf · Platzhalter Weitere Einstiege folgen …») ist sichtbar als Entwurf markiert. Das Produktionsgate blockiert ihn.

**Befunde W2**

- **P4-W2-1 · wichtig · Verantwortung für den Verlauf.**
  - **Beleg:** `beziehungen` › `verantwortung`: «nicht allein verantwortlich für den Verlauf oder die Beziehung». Dagegen `index` › `haltung`: «Sie sind nicht für die Genesung eines anderen Menschen verantwortlich.» und `verstehen` › Annahme 3.
  - **Vorschlag:** Die Fachstelle entscheidet über die Abgrenzung von Krankheitsverlauf und Beziehung.
  - **Zuständig:** Fachstelle (P4-F-3).
- **P4-W2-2 · optional · «Pause» in zwei Bedeutungen.**
  - **Beleg:** Gesprächspause (`verstehen` Abbildung 2; `grenzen` › `konsequenz` «eine Pause») neben Kontaktpause (`grenzen` › `kontakt` «eine vereinbarte Pause», `index` «Kontaktpausen»). Mehrdeutig ist `grenzen` › `bruecke`: «Absprachen, Pausen, …».
  - **Vorschlag:** Wo beides gemeint sein kann, «Gesprächspause» oder «Kontaktpause» schreiben.
  - **Zuständig:** bauende Sitzung, nach Freigabe des Wortlauts.
- **P4-W2-3 · optional · Frage doppelt.**
  - **Beleg:** `verstehen` › `eisberg`, Abschnittstext und Abbildung 1.
  - **Zuständig:** Fachstelle (P4-F-15).
- **P4-W2-4 · optional · `grenzen` ohne Rückverweis.**
  - **Beleg:** `grenzen` nennt Pause, ruhige Situation und Anspannung (`dear`: «in einer ruhigen und sicheren Situation»), verweist aber nicht auf die Anspannungskurve oder die Schleife.
  - **Vorschlag:** Ein Verweissatz, etwa bei `dear` auf `verstehen#anspannung`.
  - **Zuständig:** bauende Sitzung.

### Teil C · S Sprach-Review

**Zählweise (eigenes Skript der Prüfsitzung, im Browser):**

- **Text:** sichtbarer Text der Abschnitte in `main`, Vertiefungen geöffnet. Ohne SVG, ohne `.puk-sr` und ohne die nur schmal sichtbare Rücksprungzeile.
- **Blöcke und Sätze:** je Blockelement (`p`, `li`, `dt`, `dd`, `h1`–`h3`, `summary`) zerlegt, mit derselben Satzregel wie `abgleich/verneinung.mjs`.
- **Verneinung:** Satz mit «nicht», «nichts», «nie», «niemals», «niemand», «weder» oder einer Form von «kein». In Klammern die enge Zählung ohne «nie», «niemals», «niemand».
- **Satzlänge:** nur Fliesstext (`p`, `li`, `dd`). Ohne Bezeichnungen und Kicker, ohne Quellenzeilen, ohne Beispielsätze in `.puk-say` und ohne Beschriftungen in Figuren; Kernaussage, Kurztext, Ansatzpunkt, Vertiefung und Liste der Kurve zählen mit. Wörter wie in `kennzahlen.mjs`.
- **Handlungsteil:**
  - eng: Der Abschnitt hat «Was Sie tun können» oder einen Ansatzpunkt für Angehörige.
  - weit: dazu ein Beispielsatz zum Sagen, «Was hilft» oder nummerierte Handlungsschritte im Imperativ, von Hand bestimmt.

| Seite | Sätze | mit Verneinung | Anteil | Fliesstext-Sätze | mittlere Satzlänge (Median) | Sätze > 25 Wörter | Abschnitte mit Handlungsteil eng / weit |
| --- | ---: | ---: | ---: | ---: | --- | ---: | --- |
| `index` | 24 | 3 (3) | 13 % | 16 | 11,7 (11) Wörter | 1 | 0 von 3 / 2 von 3 (`einstiege`, `beratung`) |
| `verstehen` | 175 | 37 (37) | 21 % | 111 | 11,2 (10) | 1 | 4 von 7 / 5 von 7 (ohne `borderline`, `einordnung`) |
| `beziehungen` | 162 | 33 (32) | 20 % | 104 | 11,1 (11) | 2 | 5 von 6 / 6 von 6 |
| `grenzen` | 184 | 42 (41) | 23 % | 116 | 9,8 (9) | 0 | 4 von 10 / 9 von 10 (ohne `rollen`) |

**Abweichung zur Zählung der bauenden Sitzung:** Die Zahl der Sätze mit Verneinung ist gleich (37 / 33 / 42). Die Gesamtzahl der Sätze ist kleiner (175 statt 183, 162 statt 169, 184 statt 195), weil hier `figcaption` und die schmale Rücksprungzeile nicht zählen.

**Abschnitte mit hohem Verneinungsanteil:**

- `verstehen` › `einordnung`: 5 von 11
- `beziehungen` › `verantwortung`: 8 von 20
- `grenzen` › `konsequenz`: 7 von 15

Es sind überwiegend entlastende Sätze («… ist kein Versagen», «… heisst nicht, dass Sie etwas falsch gemacht haben»). Kein Befund; nur ein Hinweis für S nach W1.

**Sätze über 25 Wörter:**

- `index` › `beratung` (30 Wörter): «Die Fachstelle Angehörigenarbeit der PUK berät alle Angehörigen – …, auch wenn die betroffene Person nicht in der PUK behandelt wird und ohne ihre Vollmacht.»
- `verstehen` › `borderline` (28): «Die Diagnose Borderline-Persönlichkeitsstörung kann unter anderem beschreiben: …»
- `beziehungen` › Abbildung 1, Ansatzpunkt (27, mit Bezeichnung) und `zwei-sichten` (26, mit «Was Sie tun können:»): ohne die Bezeichnung unter 25 Wörtern.

**Rechtschreibung:** kein «ß», keine „…“ (`grep` in den vier gebauten Seiten: 0). Der Build meldet keinen Hinweis zu Anführungszeichen.

**Lesetest je Abschnitt** (Prüfperson: erschöpfte Mutter oder Partner, abends, Handy, 360 px).

- a = beim ersten Lesen verstanden; b = weiss danach, was ich tun kann.
- d (Ton) ist überall warm, erwachsen und ohne Schuldzuweisung, ausser wo vermerkt.
- e (Absicherungen) steht nur, wo es einen Befund gibt.

| Seite | Abschnitt | a | b | Stolperstellen (c) und e | Priorität |
| --- | --- | --- | --- | --- | --- |
| `index` | Kopf, `haltung` | ja | teils | – | – |
| `index` | `einstiege` | ja | ja | Platzhalter «Entwurf · Platzhalter Weitere Einstiege folgen …» sichtbar | (Gate) |
| `index` | `beratung` | ja | ja (E-Mail) | Satz mit 30 Wörtern (P4-S-6); «vor Ort» ohne Ort (P4-F-19) | optional |
| `verstehen` | Kopf | ja | – | «… eine Krise nicht als persönliches Versagen»: wessen Versagen, bleibt offen (so im Bestand) | – |
| `verstehen` | `erleben` | ja | ja | «Das ist nicht bei allen Menschen mit Borderline so.»: Bezug von «Das» unklar (P4-S-1); e: P4-F-10 | optional |
| `verstehen` | `borderline` | mit Mühe | nein | 28 Wörter mit Doppelpunkt-Aufzählung; «innere Stabilität» abstrakt; Handlungsteil fehlt, für eine Begriffsklärung vertretbar | optional |
| `verstehen` | `eisberg` | ja | ja | Frage zweimal (P4-W2-3) | optional |
| `verstehen` | `anspannung` | ja | ja | Liste bei 360 px sehr lang (3282 px); e: «nur noch» (P4-F-12), Stelle 4 (P4-F-7) | optional |
| `verstehen` | `bewertungen` | ja | ja | wer spricht in Abbildung 3? (P4-F-4); e: «Das geschieht ohne Absicht.» (P4-F-1) | wichtig |
| `verstehen` | `mythen` | ja | teils (Annahme 2, Suizid) | «komplexe PTBS» nicht erklärt; «Bleiben Sie nur bei der Person …» (P4-S-2) | optional |
| `verstehen` | `einordnung` | ja | nein (Verweis) | 5 von 11 Sätzen verneint | – |
| `beziehungen` | `verbindung` | ja | ja | Liste mischt Stichwörter mit einem ganzen Satz (P4-S-4) | optional |
| `beziehungen` | `schleife` | ja | ja | Ansatzpunkt mit 6 Sätzen auf dem Handy lang | – |
| `beziehungen` | `verstaerker` | mit Mühe | ja | Titel «Spielraum zwischen Anlass und Reaktion» abstrakt; zweimal «Station 2» (R3-S-01); Links als Satzteile (P4-S-3) | optional |
| `beziehungen` | `zwei-sichten` | ja | ja | – | – |
| `beziehungen` | `was-hilft` | ja | ja | Listenpunkte im Infinitiv-Telegrammstil («eine Vermutung zuerst mit einer Frage prüfen») | optional |
| `beziehungen` | `verantwortung` | ja | ja | «nicht allein verantwortlich für den Verlauf» (P4-W2-1); Link als Satzteil | wichtig |
| `grenzen` | Kopf | ja | ja | Link «Wenn Gewalt oder Bedrohung vorkommt» als Satzteil (P4-S-3) | optional |
| `grenzen` | `erkennen`, `arten`, `kontakt` | ja | ja | – | – |
| `grenzen` | `bruecke` | ja | ja | «Sie zeigen, was geht und was nicht.»: «Sie» nach dem Doppelpunkt, Grenzen oder Anrede? (P4-S-5) | optional |
| `grenzen` | `reihenfolge` | mit Mühe | ja | «emotional niedriger» (Punkt 2) neben «emotional niedrig» (Punkt 4) (P4-S-6) | optional |
| `grenzen` | `dear` | ja | ja | «R · Verstärken»: Buchstabe aus dem englischen Kürzel, sichtbar nicht erklärt (P4-V-5) | optional |
| `grenzen` | `saetze`, `konsequenz` | ja | ja | – | – |
| `grenzen` | `rollen` | ja | nein | für Rollenbeschreibung vertretbar | – |
| `grenzen` | `gewalt` | ja | ja | klar und direkt; Verweis im Text an der richtigen Stelle | – |

**Befunde S**

- **P4-S-1 · optional · Bezug von «Das».**
  - **Beleg:** `verstehen` › `erleben`, Satz 3.
  - **Vorschlag:** Subjekt nennen, etwa «Solche Erfahrungen machen nicht alle Angehörigen von Menschen mit Borderline.» Die Bedeutung bleibt; den Rest regelt P4-F-10.
  - **Zuständig:** Fachstelle.
- **P4-S-2 · optional · «Bleiben Sie nur bei der Person, …».**
  - **Beleg:** `verstehen` › `mythen`.
  - **Vorschlag:** Wortstellung nach P4-F-9.
  - **Zuständig:** Fachstelle, weil es ein Sicherheitstext ist.
- **P4-S-3 · optional · Links als Satzteile.**
  - **Beleg:**
    - `beziehungen` › `verstaerker`: «Mehr dazu auf der Seite «Verstehen»: Wenn die Anspannung steigt und Wenn Bewertungen einseitiger werden.» Das liest sich wie ein Nebensatz.
    - `grenzen` › Kopf: «…: Wenn Gewalt oder Bedrohung vorkommt.»
    - `beziehungen` › `verantwortung`.
  - **Vorschlag:** Den Abschnittstitel als Titel kenntlich machen, etwa «im Abschnitt «Wenn die Anspannung steigt»».
  - **Zuständig:** bauende Sitzung.
- **P4-S-4 · optional · Liste in `verbindung`.**
  - **Beleg:** Drei Stichwörter und ein ganzer Satz unter «Was eine Beziehung tragen kann:».
  - **Vorschlag:** Den vierten Punkt als Stichwort fassen, etwa «dass beide zu Nähe, Klärung und Veränderung beitragen können».
  - **Zuständig:** bauende Sitzung nach Freigabe.
- **P4-S-5 · optional · «Sie zeigen …» nach Doppelpunkt.**
  - **Beleg:** `grenzen` › `bruecke`.
  - **Vorschlag:** «Grenzen können Kontakt auf ähnliche Weise schützen, denn sie zeigen, was geht und was nicht.»
  - **Zuständig:** bauende Sitzung.
- **P4-S-6 · optional · Einzelstellen.**
  - **Beleg:** «emotional niedriger» / «emotional niedrig» (`reihenfolge`); Satz mit 30 Wörtern in `index` › `beratung`.
  - **Vorschlag:** Einheitlich «emotional niedriger»; den Beratungssatz nach der Aufzählung teilen.
  - **Zuständig:** bauende Sitzung (Beratungstext: Wortlaut der Fachstelle, deshalb Fachstelle).

### Teil D · Visualisierungs-Check je Figur

Bildschirmfotos aller sechs Figuren bei 1280 und 360 px, im Theme Standard und «kontrast», angesehen. Die Figurhöhen bei 1280 / 360 px:

| Figur | 1280 px | 360 px |
| --- | ---: | ---: |
| Eisberg | 830 | 1071 |
| Kurve | 1773 | 3282 |
| Momentaufnahmen | 827 | 848 |
| Schleife | 1266 | 1920 |
| Zwei Sichten | 1106 | 2359 |
| DEAR | 854 | 1791 |

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | Eisberg | Kurve | Momentaufnahmen | Schleife | Zwei Sichten | DEAR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | **T** | **T** | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | T | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | E | E | E |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | E |
| 5 | Ansatzpunkt (B, C, G) | – | E | – | E | – | E |
| 6 | Mechanismus nicht doppelt | E | E | E | T | E | E |
| 7 | Kartenraster-Check | E | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | **T** | E | **T** | T |
| 9 | Verteilt, keine Textwand | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | **T** | **T** | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | **T** | T | E | T |
| 16 | Metapher ohne Code | T | E | E | – | – | T |
| 17 | Keine ungewollten Bedeutungen | T | E | E | E | E | E |

**Abweichungen von der Selbstprüfung** (fett): Punkt 1 bei Kurve und Momentaufnahmen, Punkt 8 bei Momentaufnahmen und Zwei Sichten, Punkt 10 bei Kurve und Momentaufnahmen, Punkt 15 bei Momentaufnahmen. Bei Punkt 16 sind Schleife und Zwei Sichten Modelle, keine Metaphern («–» statt «E»).

**Belege je T und N**

- **Eisberg:**
  - **16 T:** Bei 360 px ist die Zeichnung 278 × 146 px gross und ohne Wörter. Darunter übersetzen die Listen «Sichtbar» und «Darunter möglich» die Bildteile oben und unten (Bildschirmfoto 360). Das entspricht dem Auftrag 1H (P4-F-14).
  - **17 T:** Kälte und Gefahr bleiben im Motiv; die Fachstelle hat das Motiv am 10.10.2026 bestätigt.
  - **14 N:** `approvalStatus` «ausstehend».
- **Kurve:**
  - **1 T:** `visualPlan` › `v-vs-anspannung` › `statement` nennt «4 «Später»». Auf der Seite steht «Es wird wieder ruhiger.» (P4-V-1).
  - **9 T:** 3282 px hoch bei 360 px. Die Liste ist eingerückt; der Text steht in 21 px in einer schmalen Spalte (Bildschirmfoto 360, Teil 1).
  - **10 T:** Stelle 4 «Es wird wieder ruhiger.» ist kategorisch, der Kurztext sagt «kann … wieder sinken» (P4-F-7).
- **Momentaufnahmen:**
  - **1 T:** Der Plan ist teilweise vom Pendel übrig geblieben:
    - `goal`: «… weiter ausschlagen und zurückschwingen können»
    - `source`: «Eigene didaktische Pendel-Darstellung …» (P4-V-1)
  - **8 T:** Das «sehr dunkle» Foto ist hellblau gefüllt, mit weisser Wolke. Hell und dunkel unterscheiden sich vor allem durch Sonne und Wolke, kaum durch die Helligkeit (Bildschirmfoto 1280; P4-V-2).
  - **10 T:** Die Sätze engen die Aussage auf Bewertungen der Angehörigen ein; wer spricht, steht nirgends (P4-F-4).
  - **15 T:** Die Wirkung «Ein harter Satz in einem schwierigen Moment ist nicht unser ganzes Album» trägt nur, wenn klar ist, dass die betroffene Person zur angehörigen Person spricht.
- **Schleife:**
  - **2 T, 6 T:** F-W2-02 (P4-F-18): Liste «an mehreren Stellen unterbrechen» neben der Figur.
  - **15 T:** fünf Rechtecke mit Pfeilen, wirkt wie ein Ablaufschema. `radius-md` (4 px) ist bei 1280 px kaum als weiche Ecke sichtbar (Bildschirmfoto; P4-V-4).
- **Zwei Sichten:**
  - **8 T:** Beide Sichten haben dieselbe Kastenform und Oberkante. Der Unterschied steht nur in Lage und grauer Bezeichnung. Bei 360 px stehen acht gleiche Kästen untereinander (2359 px), der Vergleich ist nur über die Bezeichnung lesbar. Optional, weil die Bezeichnung trägt.
- **DEAR:**
  - **8 T, 15 T:** vier gefüllte Punkte auf einer Linie (P-6), wie eine Schrittanzeige. Die Ziffern «1» bis «4» stehen klein (13 px) unter den Punkten statt in ihnen (Bildschirmfoto 1280).
  - **16 T:** «R · Verstärken» und «A · Anliegen nennen»: Die Buchstaben stammen aus dem englischen DEAR. Die Herkunft steht nur in der Vertiefung (P4-V-5).

**B1–B6 nur für Figuren, die sich seit dem Bildsprache-Audit geändert haben**

| Figur | B1 erster Eindruck | B2 Erleben der Angehörigen | B3 Wirkung eingelöst | B4 Ton | B5 Bild nötig? | B6 Freundin-Test |
| --- | --- | --- | --- | --- | --- | --- |
| Eisberg (neu) | ruhig, weich; der Unterteil wirkt eher wie ein Tropfen als wie Eis | ja, über die Frage «Wie ist es gerade für dich?»; sie steht ohne Person rechts oben | breit ja; schmal nur über die Listen | würdevoll | ja (Sichtbar/Verborgen als Raum) | eher ja, breit |
| Kurve, Stelle 4 | ruhig, nachvollziehbar | ja, Sätze aus dem Erleben | ja | warm | ja | ja |
| Momentaufnahmen (neu) | freundlich, alltagsnah, ruhig | ja: Sätze, die Angehörige hören; Sprecher offen | teilweise (siehe 15) | warm, nicht verniedlichend | ja | ja, wenn klar ist, wer spricht |
| Schleife (drei Zeilen, 4-px-Radius) | geordnet, wie ein Ablaufschema | ja, «Schwester» oben in Lesegrösse | ja | sachlich | ja | eher ja |
| Zwei Sichten (gleiche Oberkante) | ruhig, gleichwertig | ja, stärkste Sätze der Website | ja | warm | ja | ja |
| DEAR (Nummern) | ordentlich, belehrend; weiter Schrittanzeige | Beispielsätze alltagsnah | ja | sachlich | knapp; eine nummerierte Liste trüge gleich | eher nein |

**Befunde Visualisierungs-Check**

- **P4-V-1 · wichtig · Visualisierungsplan veraltet.**
  - **Beleg:**
    - `site.config.json` › `v-vs-anspannung` › `statement`: «4 «Später»».
    - `v-vs-bewertungen` › `goal`: «weiter ausschlagen und zurückschwingen».
    - `v-vs-bewertungen` › `source`: «Eigene didaktische Pendel-Darstellung».
    - Die Selbstprüfung setzt bei Punkt 1 überall E.
  - **Gewicht:** Die fachliche Freigabe der Fachstelle bezieht sich auf die Planzeile.
  - **Vorschlag:** Die drei Felder an die Seite angleichen, ohne Inhalt zu ändern.
  - **Zuständig:** bauende Sitzung.
- **P4-V-2 · optional · «sehr dunkel» nicht sichtbar.**
  - **Beleg:** Momentaufnahmen, rechtes Foto in `puk-blue-25`.
  - **Vorschlag:** Das dunkle Foto mit der einen erlaubten Akzentfläche (`__accent`) zeichnen.
  - **Zuständig:** Fachstelle (Skizze freigegeben), danach die bauende Sitzung.
- **P4-V-3 · optional · Eisberg schmal.**
  - **Beleg:** Punkt 16.
  - **Zuständig:** Fachstelle (P4-F-14).
- **P4-V-4 · optional · Ecken der Schleife.**
  - **Beleg:** `radius-md` mit 4 px wirkt eckig; BS-4 Variante B wollte «weiche Ecken».
  - **Vorschlag:** einen grösseren Radius-Token des Profils, falls vorhanden; sonst Profilthema.
  - **Zuständig:** bauende Sitzung oder Profil.
- **P4-V-5 · optional · DEAR.**
  - **Beleg:** Ziffern unter den Punkten; englische Kürzel ohne sichtbare Erklärung.
  - **Vorschlag:** die Ziffer im Punkt; im Kurztext ein Satz, woher die Buchstaben kommen (Wortlaut aus der Vertiefung).
  - **Zuständig:** bauende Sitzung, Fachstelle für den Wortlaut.
- **P4-V-6 · optional · Schrifthierarchie und Länge der Kurve** (R3-V-04 weiter offen).
  - **Beleg:** Listentext 21 px, Kurztext etwa 15 px; 3282 px bei 360 px.
  - **Vorschlag:** schmal ohne Einzug; Hierarchie im Profil klären.
  - **Zuständig:** Profil, bauende Sitzung.

### Teil E · Bedienung und Barrierefreiheit (automatisiert)

Chromium über Playwright, lokal. Alle Werte sind selbst gemessen.

- **Überlauf** (`scrollWidth − innerWidth`): 0 px auf allen vier Seiten.
  - Breiten: 320, 360, 768, 1280 und 1440 px.
  - 200 %: 640 px Breite bei Faktor 2 und 1280 px mit Schriftgrösse 200 %.
  - Theme «kontrast»: bei 360 und 1280 px.
  - Kein `overflow-x:hidden` auf `html` oder `body`, das einen Überlauf verstecken könnte.
- **Tastatur** (1280 px):
  - Tabstopps bis zur Fusszeile: 10 / 18 / 16 / 20.
  - Fokus sichtbar bei allen Stopps (`box-shadow`, 2 px weiss und 4 px Blau).
  - Reihenfolge gleich der DOM-Reihenfolge; erster Stopp «Zum Hauptinhalt».
  - Alle vier Vertiefungen per Tab erreichbar. Enter und Leertaste öffnen und schliessen.
  - Die Fusszeile hat keinen fokussierbaren Link (Profilthema B-4 der ersten Runde, kein neuer Befund).
- **Kontrast** (WCAG 1.4.3):
  - **Umfang:** aller sichtbare Text in `main`, mit geöffneten Vertiefungen, je Seite bei 1280 und 360 px und in beiden Themes. Bei Text über SVG zählt die Füllung der Form unter dem Text.
  - **Ergebnis:** kein Wert unter 4,5:1.
  - **Tiefster Wert Standard:** 4,71:1 (Kicker, 14 px, Blau auf Weiss).
  - **Tiefster Wert «kontrast»:** 7,65:1.
  - Einzelwerte:

  | Text | Hintergrund | Standard | «kontrast» |
  | --- | --- | ---: | ---: |
  | Eisberg, alle zehn Wörter einschliesslich «… oder ganz andere Erfahrungen», 1280 px | weisse Eisbergfläche (an allen fünf Messpunkten je Wort; kein Wort liegt auf dem Hellblau) | 15,91 | 15,91 |
  | dieselben Wörter, 360 px (als Liste) | #F7F7F7 | 14,85 | 14,85 |
  | Frage «Wie ist es gerade für dich?» | #F7F7F7 | 14,85 | 14,85 |
  | Sätze der Szene «Momentaufnahmen» | Weiss | 15,91 | 15,91 |
  | Beschriftungen der Kurve | – | 14,85 | 14,85 |
  | Stationstexte der Schleife | – | 15,91 | 15,91 |
  | `summary` | – | 5,94 bzw. 6,37 | 11,84 bzw. 12,68 |
  | «Beispiel» (`.puk-say__label`) | – | 5,52 | 7,65 |
  | Bezeichnungen der Zwei Sichten | – | 5,92 | 8,19 |

  Hellblau unter Text (#D8E0FF) wäre rechnerisch etwa 12:1, kommt aber nicht vor.
- **Eisberg-Geometrie:**
  - Bei 1440, 1280, 1024 und 900 px liegen alle vier Ecken jedes Worts in der Eisbergform (`isPointInFill`).
  - Die Zonen stimmen: die oberen Wörter über der Wasserlinie, die unteren darunter. Kleinster Abstand zur Wasserlinie: 20 Einheiten («Lautwerden», «Rückzug»).
- **Pfeile der Schleife:** Die Spitzen enden 8,3 bis 35,3 px vor dem Zielkasten (1440, 1280, 768 px). R3-V-01 ist erledigt.
- **Reduzierte Bewegung:** keine CSS-Animation. Beim Laden entstehen nur Übergänge von 0,01 ms aus der globalen Regel in `bundle.css`; nicht wahrnehmbar, kein Befund.
- **Theme «kontrast»:** Linien und Punkte werden dunkelblau, Text bleibt lesbar (Bildschirmfotos aller sechs Figuren). Keine festen Farben in SVG (Teil F).
- **Nicht prüfbar:**
  - reale Screenreader-Läufe (z. B. VoiceOver mit Safari, NVDA mit Firefox), Hardwaretastatur und Touch: Sie brauchen eine Person (Stufe 5). Sie sind **nicht** bestanden, sondern offen.
  - Kontrast von Fokusringen und Nicht-Text-Elementen (WCAG 1.4.11): nicht gemessen.

### Teil F · Technik und Zuständigkeit (Stichprobe)

| Prüfung | Ergebnis (selbst ausgeführt am Stand `f32c255`) |
| --- | --- |
| `node tools/build.mjs` | 15 Seiten, Build r4-7, Gate draft: **0 blockierend, 20 Hinweise**: 6 × `visual-approval`, 12 × `placeholder-approval`, 1 × `site-url`, 1 × `review-report`. `git status` danach ohne Änderung: Der Build verändert keine gebauten Dateien |
| `node tools/gate.mjs --selftest` | **53/53 bestanden** |
| `node tools/gate.mjs --production` | blockiert erwartungsgemäss mit **19 Befunden**: 6 × `visual-approval` (alle sechs Figuren), 12 × `placeholder-approval` (`index` › Einstiege und 11 Entwurfsseiten), 1 × `review-report` (offen: W1, W2, S, Visualisierungs-Check, Bedienung, W3, R1, R2, R3); dazu 1 Hinweis `site-url` |
| `node abgleich/pruefe-abgleich.mjs` | **1763 Zeilen, 0 ohne Fundstelle** |
| `node abgleich/kennzahlen.mjs` | Wörter 238 / 1602 / 1564 / 1601; Absicherungen je 100 Wörter 1,68 / 3,00 / 4,48 / 2,62; Semikolons 0 / 0 / 1 / 0 |
| `node abgleich/verneinung.mjs` | 3 von 24 / 37 von 183 / 33 von 169 / 42 von 195 |
| `abgleich/bedienung.mjs` | Tabstopps 10 / 18 / 16 / 20; Höhe bei 360 px 3863 / 16 071 / 15 199 / 16 500 px; höchste Figur Kurve 3282, Zwei Sichten 2359, DEAR 1791 px |

**Kennzahlen der bauenden Sitzung:** Nachgerechnet und **bestätigt**, ohne Abweichung:

- Wörter, Absicherungen und Semikolons
- Sätze mit Verneinung
- Tabstopps, Seitenhöhen und Figurhöhen bei 360 px (Eisberg 1071, Momentaufnahmen 848, Schleife 1920 px)
- Pfeilabstände («8 bis 35 px»)
- Selbsttest, Produktionsgate und Abgleich

R3-K-01 (Seitenhöhen nicht reproduzierbar) ist damit erledigt. Die eigene Satzzählung aus Teil C weicht nur in der Gesamtzahl der Sätze ab (Zählweise dort).

**Zuständigkeit und Krisenzugang** (alle 16 gebauten HTML-Dateien):

- `tel:`-Links: 0.
- Telefonnummern im sichtbaren Text: 0. Gesucht wurden Muster wie «0xx xxx xx xx», «+41», «0800» sowie 143, 144, 147, 117 und 112.
- Kein Notfallblock.
- **Verweis im Text:** je einmal auf `verstehen` (`mythen`, direkt nach «… fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Das kann helfen, die Lage zu verstehen.»), `beziehungen` (`verantwortung`, nach dem Satz zu Suizidgedanken und Selbstverletzung) und `grenzen` (`gewalt`, Schritt 2, nach «Bringen Sie sich in Sicherheit und holen Sie Hilfe.»).
  - Er steht nur über den Platzhalter `<p data-responsibility-inline></p>` in `content/`; gefüllt mit dem Wortlaut aus `responsibility.inline`.
  - Nie in `figure` oder `details`; höchstens einer je Abschnitt; nur auf Seiten mit `sensitiveTopics`.
  - Auf `index` und den Entwurfsseiten: 0.
- **Technik:**
  - `style`-Attribute: 0.
  - Hexwerte oder `rgb(` in SVG: 0.
  - `borderline.css` hat keine freien `2px` mehr; R3-B-01 ist erledigt.
- **Hinweis für W3:** Entwurfsseiten ohne `noindex`; der Export lässt sie laut `tools/export.mjs` weg.

### Bericht und Abgleich

- **P4-K-1 · Berichtigung · R3-K-02 war falsch.** Die dritte Runde meldete «`abgleich/kennzahlen.mjs` fehlt im Repository». Die Datei war vorhanden: angelegt mit Commit `242a74b`, dem Stand, den die dritte Runde geprüft hat. Die Prüfung hatte sie nicht geladen. Der Befund entfällt; der Text der dritten Runde bleibt unverändert.
- **Weitere Befunde früherer Runden:**
  - R3-K-03 ist erledigt: Die Zeilen Z. 277–396 stehen als Nr. 474–540 im Abgleich.
  - R3-K-05 ist teilweise erledigt; der Rest steht in P4-V-1.

### Zählung der Befunde der vierten Runde

| Stufe | kritisch | wichtig | optional |
| --- | ---: | ---: | ---: |
| W1 | 0 | 4 | 5 |
| W2 | 0 | 1 | 3 |
| S | 0 | 0 | 6 |
| Visualisierungs-Check | 0 | 1 | 5 |
| Bedienung und Barrierefreiheit | 0 | 0 | 0 |
| Technik und Zuständigkeit (Stichprobe) | 0 | 0 | 0 |

Dazu P4-K-1 (Berichtigung) und 21 Fragen an die Fachstelle (P4-F-1 bis P4-F-21).

**Gesamturteil:** Etappe 1 ist bereit, der Fachstelle zur fachlichen Durchsicht vorgelegt zu werden. Freigabereif ist sie noch nicht. Technik, Barrierefreiheit (automatisiert), Zuständigkeit und Kennzahlen sind ohne Befund. Vor der Freigabe muss die Fachstelle vier Fragen entscheiden: P4-F-1 bis P4-F-4. Ausserdem muss die bauende Sitzung den Visualisierungsplan angleichen (P4-V-1). Danach folgen S, die Screenreader-Läufe, W3 und R1 bis R3.

## Bildsprache-Audit (10.10.2026, Stand 3f94087)

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `3f94087` (nach Korrektur 1g). Die Prüfsitzung hat die Website nicht gebaut. Sie hat keine Inhalte und keinen Code geändert. Auftrag: «Bildsprache-Audit · Passen die Illustrationen zum Thema?» (Ergänzung zu R2).

**Vorgehen**

- **Grundlagen gelesen:** `guidelines/00-visuelle-wissensvermittlung.md` (Bildsprache, Fotos, Muster A–K), `07-visualisierung-umsetzen.md`, `06-langform-und-psychoedukation.md`, `00-sprache-und-ton.md`, `01-marke-und-logo.md` (verweist für die Bildwelt auf «Visuelle Wissensvermittlung»), dazu `site.config.json` › `visualPlan` aller 15 Seiten und `UMBAUPLAN.md` Abschnitt 3.
- **Figuren erfasst:** 7 Elemente mit `data-visual-id` auf den gebauten Seiten. Sie decken sich mit den 7 Einträgen in `visualPlan`, deren Format nicht «text» ist. Die 11 Entwurfsseiten haben nur je eine Zeile `geplant` mit Format «text». Die geplanten Figuren stammen deshalb aus `UMBAUPLAN.md` (Etappe 2), dazu die vier Einträge aus Etappe 1, die im Bau zu Text wurden.
- **Bildschirmfotos:** Jede gebaute Figur bei 1280 und 360 px Viewport, lokal über `python3 -m http.server 8765`, Chromium über Playwright. Zuerst nur die Zeichnung (SVG mit ihren Beschriftungen) betrachtet und den ersten Eindruck notiert. Danach Kernaussage, Kurztext, Liste und Vertiefung gelesen. Die Bildschirmfotos sind nicht committet; die Belege unten beschreiben Motiv und Beschriftung wörtlich.
- **Prüfperson im Kopf:** eine Mutter oder ein Partner, abends auf dem Handy. Deshalb zählt die Ansicht bei 360 px gleich viel wie die breite Ansicht.

### Gesamturteil

Am besten spricht die **Anspannungskurve** (`verstehen` › Abbildung 2) an. Sie ist eine weiche, ruhige Linie ohne Achse, und ihre Stellen sind Sätze, die Menschen sagen («Wir können sprechen», «Es ist gerade zu viel»). Am wenigsten trägt das **Pendel der Bewertungen** (`verstehen` › Abbildung 3). Es wirkt wie eine Physikskizze, mit Aufhängebalken, Ruhelage und den Wörtern «kleinerer Ausschlag» und «grösserer Ausschlag». Es braucht drei Zuordnungen und eine Liste, um Sinn zu ergeben, und bei 360 px bleibt eine unbeschriftete Mechanik. Auch der **Eisberg** verliert auf dem Handy sein Motiv vollständig: Bei 360 px bleiben nur zwei Gruppen von Wortkästen. Die Bedeutungsschleife und die beiden Vergleiche überzeugen mit ihren Sätzen, nicht mit ihrer Form: Kästen und Kartenraster lassen Beziehungen wie ein Ablaufschema aussehen.

### Gebaute Figuren

| Seite › Abbildung | Motiv in einem Satz | Erster Eindruck (B1) | Befunde | Bewertung | Priorität |
| --- | --- | --- | --- | --- | --- |
| `verstehen` › Abb. 1 Eisberg (`v-vs-eisberg`) | Breit: eckige Eisberg-Silhouette an einer Wasserlinie, daneben rechts zwei Reihen Wortkästen, «Sichtbar» (Wut, Vorwürfe, Lautwerden, Rückzug, durchgezogen) und «Darunter möglich» (Angst, Scham, Trauer, Einsamkeit, Anspannung, gestrichelt). | ruhig, vertraut, aber kühl; die Wortkästen wirken wie Schlagwort-Etiketten. | B2, B4, B5, B6, B8; **360 px: Der Eisberg fehlt ganz**, es bleiben nur die beiden Kastengruppen. | überarbeiten | wichtig |
| `verstehen` › Abb. 2 Anspannungskurve (`v-vs-anspannung`) | Eine weiche Kurve steigt an, hat oben einen Scheitel und sinkt wieder. Vier nummerierte Stellen tragen Sätze; Stelle 2 hat einen doppelten Ring. | ruhig, nachvollziehbar, in Bewegung; kein Messgerät. | B5 (eine Linie, unklar wessen Anspannung), B8 (Stelle 4 «Später» ist kein Satz aus dem Erleben); 360 px: Sätze an der Kurve entfallen, nur die Ziffern bleiben. | trägt | optional |
| `verstehen` › Abb. 3 Pendel (`v-vs-bewertungen`) | Pendel an einem Querbalken: zwei ausgelenkte offene Pendelkörper, eine gefüllte Ruhelage, ein grosser und ein kleiner Bogen. | technisch, physikalisch, wie aus einem Physikbuch oder ein Metronom; kalt. | B1, B2, B3 (links = positiv, rechts = negativ, Mitte = differenziert, kleiner/grosser Bogen = Anspannung), B4, B5, B6, B8 («Ausschlag»), B9, B10; 360 px: alle Beschriftungen entfallen. | neues Motiv | wichtig |
| `verstehen` › Abb. 4 Annahmen (`v-vs-mythen`) | Sieben Zeilen: links klein die verbreitete Annahme, rechts eine Karte mit blauer Oberkante und der Einordnung. | sachlich, geordnet, wie ein Faktenblatt; kein Bild. | B2 (Kartenraster), B10: Eine Bildform gibt es hier nicht. Die Form ist eine gute Textgliederung, aber keine Abbildung. | durch Text ersetzen | optional |
| `beziehungen` › Abb. 1 Bedeutungsschleife (`v-bz-schleife`) | Fünf rechteckige Kästen im Kreis mit Pfeilen, je «Station n • Schwester/betroffene Person», Modellbegriff und Beispielsatz; Station 5 doppelt umrandet. | geordnet, verständlich, aber wie ein Flussdiagramm oder Organigramm. | B2 (zwei Menschen als Etikett in Kästen), B5 (Schwester nur als Kleinschrift), B8 (Überschriften «Ereignis», «Bedeutung», «Wirkung» sind Modellbegriffe). Die Beispielsätze sind stark (B4). | überarbeiten | optional |
| `beziehungen` › Abb. 2 Zwei Sichten (`v-bz-sichten`) | Vier Schritte, je zwei Karten nebeneinander mit dem Satz der betroffenen Person (Oberkante durchgezogen) und der Schwester (Oberkante gestrichelt). | ruhig, gleichwertig, nahe am Erleben. | B6 (gestrichelte Linie bei der Schwester kann «weniger fest» heissen; gestrichelt bedeutet auf derselben Website «möglich», Abb. 1, und im Profil «optional», Muster C). | trägt | optional |
| `grenzen` › Abb. 1 DEAR (`v-gr-dear`) | Vier gefüllte Punkte auf einer waagrechten Linie, darunter «Schritt 1 von 4 · D • Beschreiben» usw. mit Aufgabe und Beispielsatz. | ordentlich, belehrend; wie die Schrittanzeige eines Formulars. | B2 (Stepper eines Formulars), B8 («Schritt 1 von 4», Kürzel «D • …»). Die Beispielsätze sind alltagsnah (B4). | trägt | optional |

**Belege je Figur**

- **Eisberg.** Die Wortkästen stehen rechts neben dem Eisberg, nicht in ihm (Bildschirmfoto 1280). Damit trägt die Liste die Aussage, nicht das Bild. Bei 360 px zeigt die Figur nur «Sichtbar» und «Darunter möglich» mit Kästen, keinen Eisberg und keine Wasserlinie mehr; die Metapher erreicht die Lesenden auf dem Handy nicht. B6: Ein Eisberg ist kalt und gilt als Gefahr unter Wasser, an der man zerschellt. Die Person wird so zum Hindernis mit bedrohlichem Unterbau. Die Vertiefung räumt nur ein, dass der Eisberg «Wut nicht verharmlosen» soll; zur Kälte sagt sie nichts. B4/B5: Das Bild zeigt ein Modell von aussen. Die Angehörigen kommen nur in der Kernaussage vor («Was Sie sehen …»). Was sie tun können («fragen Sie nach», «Wie ist es gerade für dich?»), steht nur im Abschnittstext.
- **Anspannungskurve.** Beschriftungen an der Kurve: «Wir können sprechen», «Es wird eng», «Es ist gerade zu viel», «Später». Die ersten drei sind Sätze, die Menschen sagen oder denken. «Später» ist eine Zeitangabe. Der Kurztext sagt, die Kurve gelte «für die andere Person und auch für Sie». Im Bild gibt es aber nur eine Linie; wo die Angehörigen stehen, zeigt allein der Ansatzpunkt (doppelter Ring an Stelle 2). In der Zeichnung fehlt der Schlusspunkt, in der Liste steht er («Wir können sprechen.»): kleine Unstimmigkeit. Bei 360 px sind nur die Ziffern 1–4 an der Kurve zu sehen. Die Liste folgt direkt darunter, das ist hinnehmbar.
- **Pendel.** Beschriftungen: «Sehr positive Bewertung», «Sehr negative Bewertung», «Differenziertere Sicht», «kleinerer Ausschlag», «unter starker Anspannung grösserer Ausschlag». Das sind Fachbegriffe und Begriffe aus der Mechanik. Der kleine Bogen schwebt ohne erkennbaren Bezug in der Mitte. Erst die Liste («Links: …», «Mitte: …», «Rechts: …») und die Vertiefung erklären das Bild; die Figur umfasst 188 Wörter für drei Lagen. Offen bleibt, wer hier wen bewertet: die betroffene Person die Angehörigen, oder auch die Angehörigen die Person? Das Erleben der Angehörigen («Gestern war ich die Einzige, heute bin ich die Schlimmste») kommt im Bild nicht vor. B6: «Ausschlag» heisst im Alltag auch Hautausschlag. Die gefüllte Ruhelage wirkt wie der «richtige» Zustand, die Pole wie Abweichung. Bei 360 px bleibt ein unbeschriftetes Pendel (Bildschirmfoto 360).
- **Annahmen.** Sieben Karten mit blauer Oberkante; die Figur heisst «Abbildung 4», enthält aber kein Bild. Inhaltscontainer «zählen nicht als visuelle Erklärung» (`00-visuelle-wissensvermittlung.md`, Abschnitt «Auswahl»). Die Suizid-Einordnung steht in der Karte. Die Handlungsanleitung («fragen Sie ruhig und direkt …») steht aber im Abschnittstext mit dem Verweis im Text (`verstehen.html`, Abschnitt `mythen`), also nicht nur in der Figur: erfüllt.
- **Bedeutungsschleife.** Die Sätze in den Kästen tragen: «Sie sagt den Besuch ab.», «Wenn es mir schlecht geht, bin ich allein.», «Mehrere vorwurfsvolle Nachrichten», «Sie erklärt und verteidigt sich zunehmend schärfer.» Die Form aus fünf gleichen Rechtecken mit Pfeilen zeigt aber einen Ablauf und keine zwei Menschen. Die Seite heisst «Was zwischen Ihnen geschieht»; das «Zwischen» ist im Bild nicht als Raum zu sehen. Bei 360 px bleibt die Abfolge mit sichtbarem Rücksprung erhalten.
- **Zwei Sichten.** Die Sätze sind die wärmste Stelle der Website: «Meine ganze Unterstützung wird entwertet.», «Ich halte den Druck nicht mehr aus und muss mich schützen.», «Jetzt geht sie tatsächlich weg.» Angehörige können sich darin wiedererkennen (B4, B11).
- **DEAR.** «Schritt 1 von 4» bis «Schritt 4 von 4» über den Schritten. `UMBAUPLAN.md` Abschnitt 5 zählt «Schritt n von 8» zu den Meta-Texten, die entfallen. Die vier gefüllten blauen Punkte wirken wie die Fortschrittsanzeige eines Formulars. Die Beispielsätze sind konkret und alltagsnah («In den letzten drei Nächten hast du mich nach 23 Uhr angerufen.»). Den Krisenhinweis im Kurztext («Vereinbaren Sie für Krisen passende professionelle Anlaufstellen») gibt es auch im Seitentext, als Beispielsatz in Abschnitt `saetze`: nicht nur in der Figur, erfüllt.

### Vorschläge für Figuren, die nicht tragen

**Eisberg (überarbeiten, wichtig)**

- *Variante A – Eisberg behalten, Wörter ins Bild:* Die Begriffe stehen in der Form, oben im sichtbaren Teil und unten im Wasser (gestrichelt), ohne Linien zwischen oben und unten. Bei 360 px bleibt eine kleinere Silhouette mit Wasserlinie über den Listen, statt zu verschwinden. Die abgesetzten Wortkästen rechts entfallen. Die Kälte des Motivs bleibt; dazu ein Satz in der Vertiefung: «Ein Eisberg ist kein Bild für den Menschen, sondern für das, was man von aussen sieht.»
- *Variante B – Wasseroberfläche statt Eis:* Eine weiche Wellenlinie, darüber wenig Bewegung, darunter eine ruhige, tiefere Wasserfläche (`puk-blue-25`). Am Ufer steht eine ruhige Linienfigur in realistischen Proportionen: die angehörige Person. Bei ihr steht als Satz: «Wie ist es gerade für dich?» Oben stehen die sichtbaren Wörter, unten die möglichen, gestrichelt. Das Motiv «Wasserlinie» und Menschen als Linienfiguren sind im Profil ausdrücklich zulässig (`00-visuelle-wissensvermittlung.md`, Abschnitt «Bildsprache», Tabelle «Passt»). Es entfällt die Gefahr-Bedeutung des Eisbergs, und die Angehörigen haben einen Platz mit ihrem Ansatzpunkt, dem Nachfragen. Fachliche Aussage unverändert, aber neues Motiv: **Prüfbedarf Fachstelle** (Abweichung vom Handout «Eisberg»).

**Pendel der Bewertungen (neues Motiv, wichtig)**

- *Variante A – eine Bahn mit Sätzen:* Nur ein weicher, nach unten gewölbter Bogen ohne Aufhängebalken, ohne Pendelstange und ohne zweiten Bogen. An den Enden stehen Sätze, wie sie Angehörige hören können. Links: «Du bist die Einzige, die mich versteht.» Rechts: «Du bist wie alle anderen.» Unten in der Mitte: «Du hast mich enttäuscht, und du bist mir wichtig.» Darunter in einem Satz: «Unter starker Anspannung kann der Blick weiter ausschlagen – und wieder zurückkommen.» Die Beschriftungen «Ausschlag», «Bewertung», «Differenziertere Sicht» entfallen im Bild, und bei 360 px bleiben die drei Sätze untereinander am Bogen. **Prüfbedarf Fachstelle:** Die Beispielsätze sind neu, und sie engen die Aussage auf Bewertungen der Angehörigen ein; das Handout meint Bewertungen allgemein.
- *Variante B – durch Text ersetzen:* «Unter starker Anspannung kann ein Mensch einen anderen in kurzer Zeit sehr unterschiedlich sehen: gestern als die Einzige, die versteht, heute als jemand, der enttäuscht. Beides ist eine Momentaufnahme; meistens kommt der Blick wieder zurück. Stärken, Grenzen, Nähe und Ärger können gleichzeitig wahr sein.» Die Kernaussage der Figur bleibt als Satz stehen. Beispielsätze neu: **Prüfbedarf Fachstelle.**

**Annahmen (durch Text ersetzen, optional)**

Die Form bleibt, aber sie heisst nicht mehr «Abbildung 4», sondern ist eine Liste «Verbreitete Annahme – was realistischer ist» im Abschnittstext. Der Kern: «Viele Sätze über Borderline klingen eindeutig, greifen aber zu kurz. Borderline ist behandelbar, und Angehörige sind nicht schuld.» So verspricht die Website kein Bild, wo es keines gibt, und die Zählung der Abbildungen auf `verstehen` stimmt mit den wirklichen Bildern überein.

**Bedeutungsschleife (überarbeiten, optional)**

- *Variante A – zwei Seiten statt fünf Kästen:* Links steht die Schwester, rechts die betroffene Person, als Name oder ruhige Linienfigur. Die Schleife pendelt als weiche Linie zwischen beiden hin und her. Jede Station steht auf der Seite der Person, die gerade handelt: links «Sie sagt den Besuch ab.» und «Sie verteidigt sich schärfer.», rechts «Wenn es mir schlecht geht, bin ich allein.», «Angst, Verletzung oder Wut», «Mehrere vorwurfsvolle Nachrichten». Der Raum zwischen beiden ist das «Zwischen Ihnen». Die Modellbegriffe «Ereignis», «Bedeutung», «Gefühl», «Reaktion», «Wirkung» werden klein oder wandern in die Liste. Fachliche Aussage unverändert.
- *Variante B – Form behalten:* Die Rechtecke werden zu Feldern mit weichen Ecken. Überschrift je Station ist der Beispielsatz, der Modellbegriff steht klein darunter. Wer handelt, steht über jedem Feld in Lesegrösse und nicht in der Kleinschrift.

### Geplante Figuren (UMBAUPLAN, Entwurfsseiten)

| Seite › Abschnitt | Geplantes Motiv | Befunde | Bewertung | Hinweis für den Bau |
| --- | --- | --- | --- | --- |
| `diagnose` › Weg zur Abklärung | Prozesspfad, fünf Schritte | B2 (Gefahr Behördenweg) | trägt | Schritte als Sätze aus Sicht der Angehörigen; der Ansatzpunkt «anbieten, nicht erzwingen» als Satz («Ich kann eine Anlaufstelle vorschlagen.»). |
| `diagnose` › Begleiterkrankungen | Text | – | trägt | Entscheid für Text ist richtig. |
| `rolle` › Einflussbereiche | drei Zonen, Garten-Bild | B2 (drei Kreise wirken wie eine Zielscheibe), B6 (Garten: Die betroffene Person darf nicht als Pflanze erscheinen, die Angehörige «pflegen» oder «stutzen») | überarbeiten | Den Garten wirklich zeichnen, als Garten der Angehörigen: Beet (was ich selbst entscheide), Zaun mit Tor (was ich anbieten kann), Wetter (was ausserhalb meines Einflusses liegt). Beschriftungen als Sätze («Ich entscheide, wann ich schlafe.» – «Ich kann ein Gespräch anbieten.» – «Ob sie eine Therapie macht, entscheidet sie.»). **Prüfbedarf Fachstelle** bei den Sätzen. |
| `behandlung` › Rollen im Behandlungssystem | Beziehungskarte | B2 (Organigramm), B5 | trägt | Die Angehörigen brauchen einen eigenen Platz mit eigener Unterstützung (eigene Beratung), nicht nur einen äusseren Ring um die Person in Behandlung. |
| `behandlung` › Therapieformen | Vergleich (E) mit vier Therapien | B10; Muster E gilt für genau zwei Optionen, bei mehr als zwei eine Tabelle (`00-visuelle-wissensvermittlung.md`, Muster E) | durch Text ersetzen | Tabelle: Ziel, Form, Einbezug von Angehörigen. Kern: «Es gibt mehrere wirksame Therapien. Sie unterscheiden sich darin, wie sie arbeiten und wie sie Angehörige einbeziehen.» |
| `kommunizieren` › Validierung | sechs Stufen (G) | B2, B6 (eine Treppe «aufwärts» wirkt wie Leistung, die Angehörige erbringen müssen; belehrend), B8; G empfiehlt höchstens fünf Teile | neues Motiv | Nur die Stufen, die Angehörigen im Alltag nützen (aufmerksam sein, spiegeln), mit je einem Beispielsatz; die übrigen Stufen in der Vertiefung. Kein Treppenbild. **Prüfbedarf Fachstelle** (Fachmodell nach Linehan wird gekürzt dargestellt). |
| `kommunizieren` › Wenn Gespräche kippen | Prozesspfad, drei Schritte | Doppelung mit der Anspannungskurve | überarbeiten | Verbinden statt doppeln: die Anspannungskurve als kleines Motiv wieder aufnehmen und die drei Schritte an Stelle 2 hängen, statt einen neuen Pfad zu zeichnen. |
| `krise` › Wenn Belastung zunimmt | Kontinuum der eigenen Mittel | B6 (Tacho oder Ampel bewerten), keine Selbstdiagnose-Skala | trägt | Ohne Farbskala und ohne Zeiger. Beschriftungen als Sätze der Angehörigen («Ich komme zurecht.» – «Es reicht gerade noch.» – «Allein schaffe ich es nicht mehr.»). Hinweise zu Schutz und Suizidalität nur im Text, nie nur in der Figur. |
| `selbstfuersorge` › Für andere und für sich | Spannungsfeld (H), Sauerstoffmaske als Vertiefung | B6 (eine Waage kann nach Urteil oder Schuld aussehen) | trägt | Beide Seiten als Sätze («Ich will für sie da sein.» – «Ich brauche auch Schlaf.»). Die Sauerstoffmaske nur als Satz, nicht zeichnen: Ein Flugzeugnotfall ist ein Krisenbild. |
| `selbstfuersorge` › STOPP | Prozesspfad, fünf Schritte | B10, B2 (wieder ein Stepper wie bei DEAR) | durch Text ersetzen | Nummerierte Liste mit je einem Satz. Kern: «Wenn es zu viel wird, halten Sie kurz an, atmen durch, schauen auf die Lage und entscheiden dann den nächsten Schritt.» Wortlaut der Schritte nach Handout. |
| `selbstfuersorge` › Warnsignale | Text oder Verweis | – | trägt | Verweis auf das Kontinuum in `krise` reicht; keine zweite Figur. |
| `genesung` › Genesung in Zahlen | Zahlenfigur | B6 (Fortschrittsbalken oder Erfolgsquote; Raster aus Personen-Icons macht Menschen zu Zählpunkten) | überarbeiten | Ein Satz mit der Zahl und ein einfacher Balken mit Quelle; keine Icons von Menschen. |
| `genesung` › Remission und Recovery | Vergleich (E) | – | trägt | Zwei Begriffe, je ein Alltagssatz («Die Kriterien sind nicht mehr erfüllt.» – «Das Leben fühlt sich wieder tragfähig an.»). **Prüfbedarf Fachstelle** bei den Sätzen. |
| `genesung` › Veränderung verläuft unterschiedlich | Verlauf mit Rückschritten | B2 (Börsen- oder Fieberkurve) | überarbeiten | Gutes Motiv aus dem Alltag: ein Wanderweg mit Kehren, der auch wieder ein Stück abwärts führt und trotzdem höher ankommt. Beschriftung als Satz («Ein Rückschritt nimmt nicht weg, was schon erreicht ist.»). |
| `grenzen` › Arten, Reihenfolge, Kontakt (Etappe 1, im Bau zu Text) | Text | – | trägt | Die Entscheide für Text sind nachvollziehbar. |
| `grenzen` › Grenze und Kontakt (Brücke gestrichen) | Text mit Geländer-Bild als Satz | – | trägt | Als Satz trägt das Bild («Ein Geländer gibt Halt, damit man sicher über eine Brücke gehen kann.»): Alltagsbild ohne Bauteilnamen. So lassen. |

### Was gut funktioniert und als Muster dienen kann

- **Sätze statt Begriffe an der Figur:** Die Anspannungskurve beschriftet ihre Stellen mit Sätzen, die Menschen sagen («Es ist gerade zu viel»). Die Zwei Sichten und die Schleife legen Sätze aus beiden Sichten nebeneinander («Meine ganze Unterstützung wird entwertet.»). Das ist der stärkste Zugang der Website und sollte für alle Figuren der Etappe 2 gelten.
- **Weiche Linie, keine Achse, wo es um Gefühle geht:** Die Kurve zeigt Anspannung als Bewegung, ohne Skala oder Zahlen. Darum misst sie nicht und bewertet niemanden. Die «Grenzen des Bildes» sagen das ausdrücklich («kein validiertes Messinstrument und keine Beurteilung des Zustands einer Person»).
- **Ansatzpunkt im Bild:** Der doppelte Ring an Stelle 2 der Kurve und an Station 5 der Schleife gibt den Angehörigen einen Ort im Bild, dazu einen ganzen Satz, was sie tun können, und die Entlastung («Sie müssen die andere Person nicht beruhigen.», «Der Ansatzpunkt ist eine Möglichkeit, keine Pflicht.»).
- **Ein durchgehendes Beispiel:** Die Absage der Schwester verbindet Schleife und Zwei Sichten. Lesende müssen nur einen Fall verstehen, nicht zwei Modelle.
- **Schutz und Krise im Text, nicht nur in der Figur:** Bei Kurve, Annahmen und DEAR stehen die Hinweise auch im Abschnittstext.

### Offene Punkte aus diesem Audit

| Nr. | Befund | Priorität | Zuständig |
| --- | --- | --- | --- |
| BS-1 | Pendel der Bewertungen: neues Motiv oder Text (Varianten oben) | wichtig | Fachstelle entscheidet, bauende Sitzung setzt um |
| BS-2 | Eisberg: Motiv bei 360 px nicht sichtbar; Kälte und Gefahr-Bedeutung; Angehörige ohne Platz im Bild | wichtig | Fachstelle (Variante B: Prüfbedarf), bauende Sitzung |
| BS-3 | Annahmen: nicht als «Abbildung» führen | optional | bauende Sitzung |
| BS-4 | Bedeutungsschleife: zwei Menschen statt fünf Kästen, Modellbegriffe kleiner | optional | bauende Sitzung |
| BS-5 | Anspannungskurve: «Später» als Satz fassen; offen, ob die eigene Anspannung als zweite, dünnere Linie gezeigt wird (**Prüfbedarf Fachstelle**) | optional | Fachstelle, bauende Sitzung |
| BS-6 | Zwei Sichten: gleiche Linienart für beide Sichten, Unterschied über Lage und Überschrift | optional | bauende Sitzung |
| BS-7 | DEAR: «Schritt n von 4» und den Formular-Stepper ersetzen, z. B. durch Nummer und Satz | optional | bauende Sitzung |
| BS-8 | Etappe 2: Hinweise der Tabelle «Geplante Figuren» vor dem Bau in `visualPlan` übernehmen; Therapieformen als Tabelle, Validierung ohne Treppe | wichtig | bauende Sitzung, Fachstelle |

## Dritte Prüfrunde (09.10.2026, nach Korrektur 1b)

**Geprüfter Stand:** PR #10, Commit `242a74b` (Vorschau `deploy-preview-10`). Der Inhalt von `main` der Live-Seiten ist identisch mit `content/*.html`.

**Vorgehen**

- **Prüfung 2:** eigene Sitzung ohne Kenntnis der früheren Prüfungen. Auftrag 1b Punkt für Punkt (63 zitierte Stellen per Skript), jede Kürzung zwischen dem vorherigen und diesem Stand gegen Bestand und Abgleich, 32 Aussagen gegen den Bestand, 30 Zeilen des Abgleichs (Seed 20261009), 8 Figuren bei 1280, 768 und 360 px und im Theme «kontrast», Kennzahlen nachgerechnet, Bedienung automatisiert. Belege: `PRUEFBERICHT-BELEGE-2026-10-09c.md`.
- **Prüfung 1:** Chat-Sitzung, die den Auftrag 1b geschrieben hat. Sie hat 5 Befunde von Prüfung 2 am Seitentext, am Bestand und an Bildschirmfotos nachgeprüft und bestätigt (R3-W1-01, R3-W1-02, R3-W1-03, R3-V-01, R3-V-02), dazu einen eigenen Satzvergleich zwischen den beiden Ständen gemacht und die Opferhilfe-Adresse geprüft.
- Build, Selbsttest und Produktionsgate sind wie bisher nur von der bauenden Sitzung gemeldet, nicht nachgeprüft.

Quelle je Befund: (2) nur Prüfung 2, (1+2) von Prüfung 1 bestätigt.

**Ergebnis:** Auftrag 1b ist bis auf den Opferhilfe-Link umgesetzt. Alle zitierten Bestandssätze stehen wörtlich auf den Seiten. Durch die Kürzungen ist kein Sicherheitshinweis entfallen, und jede Kürzung steht im Abgleich. Die Kennzahlen der bauenden Sitzung stimmen bis auf die Seitenhöhen. Kein schwerer Befund, 2 mittlere, 15 leichte.

### Korrekturen an Befunden und am Auftrag (Prüfung 1)

- **Zwei Fehler stammen aus dem Auftrag 1b:**
  - D-1 strich «Keine «perfekte» Reaktion repariert sie.» als «nicht im Bestand». Der Bestand hat die Aussage (`verstehen--beziehungen.md` Z. 355). Ursache: eine abgeschnittene Suche in Prüfung 1.
  - C-3 gab die Bezeichnungen «Sicht der betroffenen Person» ohne «Mögliche» vor. Damit fiel eine Absicherung über die betroffene Person weg.
  - Beides korrigiert der Auftrag 1c.
- **Opferhilfe-Adresse geprüft** (Prüfung 1, 09.10.2026): `https://www.opferhilfe-schweiz.ch/de/` lädt auf Deutsch. Es ist die offizielle Website der Opferhilfe Schweiz; Herausgeberin ist die Konferenz der kantonalen Sozialdirektorinnen und Sozialdirektoren (SODK). Die bauende Sitzung konnte die Adresse in ihrer Umgebung nicht aufrufen. Der Link kann gesetzt werden.
- **Umfang:** Die Kürzungen für den Richtwert haben in dieser Runde wieder Aussagen getroffen (R3-W1-01, R3-W1-04, R3-W1-05). Für die nächste Korrektur gilt der Richtwert deshalb nicht mehr. Über die Länge entscheidet die Fachstelle in W1.

### Visualisierungs-Check der Prüfsitzungen (dritte Runde)

Quelle: Prüfung 2. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Belege: Belege, Abschnitt 5.

| Nr. | Prüfpunkt | Eisberg | Anspannung | Pendel | Annahmen | Schleife | Zwei Sichten | Brücke | DEAR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht | E | E | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt, Begründung passt | E | E | E | E | T | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | T | E | T | E | E | E | E |
| 4 | Kernaussage und Kurztext (2–4 Sätze) | E | E | E | E | E | E | E | E |
| 5 | Ansatzpunkt (B, C, G) | – | E | – | – | E | – | – | E |
| 6 | Mechanismus verbunden | E | E | E | E | T | E | E | E |
| 7 | Kartenraster-Check | E | E | E | T | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | T | T | T | T | T | E | T |
| 9 | Verteilt, keine Textwand | E | E | E | T | E | E | E | E |
| 10 | Nicht verfälscht, Grenzen, Kennzeichnung | E | T | E | E | E | T | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar, Textalternative | E | T | T | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N |

Die Selbstprüfung der bauenden Sitzung stimmt in dieser Runde weitgehend mit Prüfung 2 überein. Abweichungen: Pendel Punkt 8 (R3-V-02) und Schleife Punkt 8 (R3-V-01).

### Kennzahlen nachgerechnet (Prüfung 2)

Wörter (238 / 1362 / 1155 / 1572), Absicherungen je 100 Wörter, Semikolons und Tabstopps stimmen exakt mit der Selbstprüfung. Die Seitenhöhen bei 360 px weichen um bis zu 228 px ab (R3-K-01).

### Befunde (dritte Runde)

**W1 Fachliche Prüfung** (Vorprüfung; Prüfbedarf für die Fachstelle)

- **R3-W1-01 · mittel · Dissoziation im falschen Zusammenhang (1+2).** `beziehungen` › Einflüsse, Station 4: Für den Richtwert entfiel «Plötzliche Entfernung hat nicht nur eine Erklärung.». Jetzt folgt «Möglich ist eine Dissoziation …» direkt auf «Aus dem Wechsel allein …» und wirkt wie eine Erklärung für den Wechsel von Nähe und Rückzug. Im Bestand erklärt sie Verstummen, Unwirklichkeitsgefühle und abweichende Erinnerungen (`verstehen--beziehungen.md` Z. 271).
- **R3-W1-02 · leicht · Entlastende Aussage entfallen (1+2).** «Die Beziehung wird nicht durch eine «perfekte» Reaktion der Angehörigen repariert.» (`verstehen--beziehungen.md` Z. 355). Ursache: Auftrag 1b, D-1.
- **R3-W1-03 · leicht · «Mögliche» in den Bezeichnungen von Abb. 2 `beziehungen` entfallen (1+2).** Die Gedanken der betroffenen Person stehen ohne Absicherung. Ursache: Auftrag 1b, C-3.
- **R3-W1-04 · leicht · Frage zum inneren Erleben entfallen (2).** `beziehungen` › Verantwortung: «Was könnte die Person innerlich erleben?» (Z. 346). «Trennen Sie:» nennt nur noch Tun, Wirkung und Bedarf.
- **R3-W1-05 · leicht · Kürzungen an Aussagen für Angehörige (2).** «etwa bei Angst, Abhängigkeit oder fehlender Unterstützung» (`grenzen.md` Z. 402), Dauerverfügbarkeit erhöht die eigene Belastung (`verstehen--beziehungen.md` Z. 308), «Unterschiede, die stehen bleiben dürfen» (Z. 76), «eine Person «handhabt» nicht die andere» (Z. 81). Alle im Abgleich. **Prüfbedarf**, ob vertretbar.
- **R3-W1-06 · leicht · Anspannung: nur «Bei Gefahr hat Schutz Vorrang.» (2).** Der Satz entspricht dem Bestand der Seite. Die Handouts nannten zusätzlich professionelle Hilfe. **Prüfbedarf.**

**S Sprach-Review**

- **R3-S-01 · leicht · Zwei Einträge «Station 2» (2).** `beziehungen` › Einflüsse, zusammen sechs Sätze. Inhaltlich in Ordnung; Auslegung von D-3 offen.

**Visualisierungs-Check**

- **R3-V-01 · mittel · Pfeilspitze 4 → 5 weiterhin verdeckt (1+2).** Der Pfad endet 7,2 px im Kasten von Station 5, bei 1440 bis 720 px. Sichtbar bleibt ein «T». C-2 ist nicht erfüllt; die Selbstprüfung meldet es als erfüllt.
- **R3-V-02 · leicht · Pendelkörper nicht an den Bogenenden (1+2).** Die ausgelenkten Kreise liegen weder am Ende des kurzen noch des langen Bogens; die Lagen «sehr positiv/negativ» stehen an Bogenenden ohne Pendelkörper.
- **R3-V-03 · leicht · Pendel schmal: Bögen unbeschriftet (2).** Auftragskonform; der Unterschied steht im Kurztext.
- **R3-V-04 · leicht · Schrifthierarchie in Figuren umgekehrt (2).** Erklärtexte 21 px, Überschriften 17 px, «Was hilft» und Ansatzpunkte 15 px.

**Bedienung und Barrierefreiheit (automatisiert)**

Ohne Mangel (2): axe 0 Verstösse in beiden Themes; kein Überlauf 320–1440 px und bei Zoom 200 %; Tastaturreihenfolge und Fokus; Verweis im Text dreimal, wortgleich, nicht in Figur oder Vertiefung.

- **R3-B-01 · leicht · `borderline.css`: zweimal `2px` statt Token (2).**
- Offen: reale Screenreader-Läufe, Hardwaretastatur, Touch (Stufe 5, Person).

**Bericht und Abgleich**

- **R3-K-01 · leicht · Seitenhöhen bei 360 px nicht reproduzierbar (2).**
- **R3-K-02 · leicht · `abgleich/kennzahlen.mjs` fehlt im Repository (2).**
- **R3-K-03 · leicht · Abgleich `verstehen.md` Z. 277–396 ohne Zeilen (2).**
- **R3-K-04 · leicht · 7 von 30 Stichprobenzeilen nur teilweise zutreffend (2).** Keine falsche Zuordnung bei Sicherheitsaussagen.
- **R3-K-05 · leicht · Visualisierungsplan nicht nachgeführt (2):** `v-vs-einordnung`, `v-gr-reihenfolge`, `v-gr-kontakt`, `v-vs-bewertungen`.

**Weiter offen:** A-4 Opferhilfe-Link (Adresse jetzt geprüft, siehe oben). Profilthemen P-6, P-7, P-9. Für die Fachstelle: F-V-11 (Annahmen als Text?), F-V-05, F-W1-11, F-W2-02, F-W2-03 aus der zweiten Runde.

## Zweite Prüfrunde (09.10.2026, korrigierte Fassung)

**Geprüfter Stand:** PR #10 nach der Korrektur gemäss `KORREKTUR-ETAPPE-1.md` (Vorschau `deploy-preview-10`). Quellen und Seiten der Vorschau sind identisch mit dem Branch.

**Vorgehen**

- **Prüfung 2:** eigene Sitzung ohne Kenntnis der früheren Prüfungen und ohne Repositoryzugriff. 39 Aussagen aus allen vier Seiten mit dem Bestand verglichen, alle 8 Figuren bei 1280 und 360 px und im Theme «kontrast» angesehen, Kennzahlen nachgerechnet, axe, Überlauf, Zoom und Tastatur automatisiert. Ausführliche Belege: `PRUEFBERICHT-BELEGE-2026-10-09b.md`.
- **Prüfung 1:** Chat-Sitzung, die die Website nicht gebaut, aber den Korrekturauftrag geschrieben hat. Sie hat 14 Befunde von Prüfung 2 am Seitentext, am Bestand und an Bildschirmfotos nachgeprüft und alle bestätigt. Eigene Befunde: siehe «Korrekturen an Befunden».
- Build, Selbsttest und Produktionsgate konnte keine der beiden Prüfungen ausführen (kein Repositoryzugriff). Die Angaben der bauenden Sitzung dazu sind **nicht geprüft**.

Quelle je Befund in Klammern: (2) nur Prüfung 2, (1+2) von Prüfung 1 nachgeprüft und bestätigt. Schweregrad wie in der ersten Runde.

**Ergebnis:** Die Korrektur hat die schweren Befunde der ersten Runde behoben: Ansatzpunkt, Pendel, Brücke, Kontraste, Verweis im Text an allen drei Stellen. Kein schwerer Befund mehr. Freigabereif ist Etappe 1 noch nicht: 11 mittlere Befunde, vor allem zur Treue gegenüber dem Bestand und zu den Suizid-Aussagen.

### Korrekturen an Befunden (Prüfung 1)

- **Ursache von F-W1-01 und F-W1-02 ist der Korrekturauftrag.** W1-1 verlangte «keine Suizidgedanken auslöst» (über die Quelle hinaus) und nannte den Satz aus `lmk` ohne «nur», W1-3 mit «nur». Die bauende Sitzung ist dem Auftrag gefolgt.
- **F-K-04 teilweise unzutreffend.** Die Fachstelle hat am 09.10.2026 im Chat entschieden: «Was nach der Suizidfrage folgt» entscheidet Claude. Der Wortlaut «Bleiben Sie [nur] bei der Person …» fällt darunter. Nicht übertragen war die Ausweitung von Annahme 6 auf «noch suizidale Handlungen». Die Navigation mit fünf Punkten ist ein Entscheid der Fachstelle (Umbauplan, Abschnitt 1).
- **Entscheid zu «nur»** (übertragen, Prüfung 1, 09.10.2026): **mit «nur»**, wie im Bestand. Grund: Die Profilregel «Zuständigkeit statt Krisenzugang» weist Angehörigen keine Verantwortung für Krisenvermeidung zu. Ohne «nur» fordert der Satz zum Dableiben auf. Damit ist F-W1-02 entschieden; die fachliche Freigabe bleibt bei der Fachstelle.

### Stand des ersten Korrekturauftrags

38 Zeilen: 29 umgesetzt, 6 teilweise, 1 anders umgesetzt (Annahme 6), 1 nicht umgesetzt (Opferhilfe-Link), 1 nicht prüfbar (Build und Gate). Tabelle mit Beleg je Zeile: Belege, Abschnitt 1.

### Visualisierungs-Check der Prüfsitzungen (zweite Runde)

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Quelle: Prüfung 2; Prüfung 1 bestätigt die T beim Pendel (3, 8, 12) und bei der Schleife (8).

| Nr. | Prüfpunkt | Eisberg | Anspannung | Pendel | Annahmen | Schleife | Zwei Sichten | Brücke | DEAR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | T | T | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | T | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | T | T | E | E | T | E | E |
| 4 | Kernaussage und Erklärtext | T | T | E | T | E | T | E | T |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | E | – | – | E | – | – | E |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | E | E | T | T | E | E |
| 7 | Kartenraster-Check | E | E | E | T | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | T | T | T | T | T | E | T |
| 9 | Verteilt, keine Textwand | E | E | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | T | T | T | T | T | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | T | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | T | T | E | E | T | T | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N |

Die Selbstprüfung der bauenden Sitzung setzt fast überall E. Abweichungen: F-K-05.

### Kennzahlen nachgerechnet (Prüfung 2)

| Seite | Neu, bauende Sitzung | Neu, nachgerechnet | Richtwert | Absicherungen je 100 Wörter, nachgerechnet |
| --- | ---: | ---: | ---: | --- |
| `verstehen` | 1299 | 1301 | 1300 | 2,54 → 2,15 |
| `beziehungen` | 1099 | 1112 | 1100 | 3,81 → 2,70 |
| `grenzen` | 1500 | 1510 | 1500 | 2,40 → 1,79 |

Gemessen am vergleichbaren Kern der alten Seite (ohne Teile, die in Etappe 2 gehen, und ohne Meta-Text) liegen die Seiten bei 74 %, 54 % und 57 % (ohne doppelt erfasste Auswahlansichten 64 %). Die Quote «51 %» misst deshalb nicht, wie stark gekürzt wurde.

### Befunde (zweite Runde)

**W1 Fachliche Prüfung** (Vorprüfung; Prüfbedarf für die Fachstelle)

- **F-W1-01 · mittel · Annahme 6 geht über die Quelle hinaus (1+2).** «Direkt nachzufragen, löst nach heutigem Wissen weder Suizidgedanken noch suizidale Handlungen aus.» Die genannte Quelle (WHO 2026) belegt laut Bestand nur: löst keine suizidale Handlung aus. Zu Suizidgedanken sagt der Bestand vorsichtiger: kein statistisch signifikanter Anstieg (Dazzi et al. 2014). Der Nutzen («kann helfen, die Lage zu verstehen») fehlt.
- **F-W1-02 · mittel · «Bleiben Sie bei der Person …» ohne «nur» (1+2).** Entschieden: mit «nur» (siehe oben).
- **F-W1-03 · mittel · Still entfallene Aussagen, die der Abgleich als vorhanden ausweist (1+2):**
  - `grenzen` › Erkennen: «Sie beweisen keine Grenzverletzung» und «Ein Signal sagt nicht automatisch, was die Ursache ist» (Handout `grenzen-erkennen`).
  - `beziehungen` › Station 2: «das Erleben der betroffenen Person ist dennoch real» (`verstehen.md` Z. 68).
  - `beziehungen` › Station 4: «aus dem Wechsel allein lässt sich weder eine Ursache noch eine Absicht ableiten» (`verstehen.md` Z. 70).
  - `grenzen` › Rollen: «Welche Grenze passt, ist individuell und darf ohne moralische Bewertung entschieden werden.» (`grenzen.md` Z. 457).
  - Der Abgleich verweist dreimal auf einen Eisberg-Kurztext «Aus einem Verhalten lässt sich kein bestimmtes Gefühl ablesen», den es nicht gibt.
- **F-W1-04 · mittel · Bedeutungsänderungen, im Abgleich nicht aufgeführt (1+2):** «nicht automatisch unecht» → «nicht unecht» (Station 3); «keine, die Angehörige aus dem Verhalten allein feststellen können» → «das sich am Verhalten nicht feststellen lässt» (Station 4); «noch Ursache» → «noch Ihre Schuld» (Station 5).
- **F-W1-05 · mittel · Absprache-Beispiel als Antwort auf Dissoziation (1+2).** Im Bestand gehört «Was soll ich übernehmen …» zu «Unterstützung kann erwünscht und schwer auszuhalten sein», nicht zur Dissoziation.
- **F-W1-06 · leicht · Absicherungen auch bei Aussagen über die betroffene Person entfernt (2).** Gegen den Entscheid der Fachstelle. Belege: Abb. 2 `verstehen` («werden vorübergehend schwerer»), Abb. 3 («schlägt der Blick weiter aus»), Eisberg-Kernaussage («lässt sich erfragen, nicht ablesen»), «Ob dies im Einzelfall zutrifft, bleibt offen» gestrichen, `grenzen` «Viele Veränderungen gleichzeitig überfordern».
- **F-W1-07 · leicht · Reihenfolge umgedeutet (2).** «emotional hoch / niedriger» wird «hohe / geringere Belastung»; neu «genügt oft eine klare Absprache».
- **F-W1-08 · leicht · Annahme 2: wessen Druck und Angst (2).**
- **F-W1-09 · leicht · DEAR verkürzt (2).** R ohne «für die andere Person» und «würdigen Sie Entgegenkommen»; E als Anweisung statt Erlaubnis.
- **F-W1-10 · leicht · Kinderschutz als Beschreibung statt Regel (2).** `lmk`: «Der Schritt darf niemandem … entziehen».
- **F-W1-11 · leicht · Quellenzuordnungen (2).** Ursachensatz neu mit Quellenzeile; Fruzzetti und Gunderson neu auf `beziehungen`; Bezugspunkte von Abb. 2 `verstehen`. Prüfbedarf für die Fachstelle.
- **F-W1-12 · leicht · Neuer Satz «Auch die Sorge … greift zu kurz» (1+2).** Steht nicht im Bestand, schwächt ab, «Auch» ohne Bezug.
- **F-W1-13 · leicht · Schutz, Schritt 2: «Holen Sie Hilfe. Bringen Sie sich in Sicherheit.» (1+2).** Im Bestand zuerst die Sicherheit, mit der Bedingung «Bei akuter Gefahr oder Unsicherheit».
- **F-W1-14 · leicht · Präzisionsverluste (2):** «unter anderem», «klinischen», «signifikanten».
- **F-W1-15 · leicht · Beispiel setzt eine Krisenabsprache voraus (1+2).** «… die Stelle, die wir für Krisen abgemacht haben»; die Empfehlung, solche Anlaufstellen zu vereinbaren, ist gestrichen.

**W2 Gesamtkohärenz**

- **F-W2-01 · leicht · Begriffe (2).** «Stress» neben «Anspannung»; «innerer Beziehungsalarm» neben «Alarm-Modus».
- **F-W2-02 · leicht · Planbegründungen tragen nicht (2):** `v-vs-erleben`, `v-bz-was-hilft`.
- **F-W2-03 · leicht · Beratung «vor Ort» ohne Ort (2).** Hinweis an die Fachstelle.

**S Sprach-Review**

- **F-S-01 · mittel · Bezugslücken aus dem Kürzen (2):** «Viele schwanken …» (Subjekt «Angehörige» fehlt), «deshalb» ohne Bezug (Station 3), «Auch die Sorge …», «Keine ‹perfekte› Reaktion repariert sie», «Sie kann Nähe und eigenen Raum …» (Rollen), «Aus Druck oder Angst …».
- **F-S-02 · leicht · Telegrammstil in Figurentexten (2).**
- **F-S-03 · leicht · Station 2 überladen; Sprecher eines Beispiels unklar (2).**
- **F-S-04 · leicht · Einzelstellen (2):** «klärend … klären», Brücken-Kurztext, «Vier Arten» uneinheitlich.

**Visualisierungs-Check**

- **F-V-01 · mittel · Sicherheitshinweis nur in der Vertiefung (1+2).** `verstehen` › Abb. 2, «Grenzen des Modells»: «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» Im Bestand sichtbar («Bei Gefahr hat Schutz Vorrang.»).
- **F-V-02 · mittel · Pendel zeigt den grösseren Ausschlag unter Stress nicht (1+2).** Eine einzige Auslenkung; «grösser» steht nur als Wort.
- **F-V-03 · mittel · Pendel schmal ohne Zuordnung (1+2).** Unter 560 px vier lose Zeilen unter der Zeichnung; «unter Stress grösserer Ausschlag» wirkt wie eine vierte Lage.
- **F-V-04 · leicht · Pfeilspitze 4 → 5 der Schleife verdeckt (1+2).**
- **F-V-05 · leicht · Schleife ohne Modellgrenzen; «kann» und «wird» gemischt (2).**
- **F-V-06 · leicht · Zwei Sichten: Stationsbezug uneinheitlich, schmal kein Vergleich (2).**
- **F-V-07 · leicht · Linienarten mit wechselnder Bedeutung; Meta-Bezeichnungen (2).** Profilthema P-7.
- **F-V-08 · leicht · Kontinuum in Stufen (2).** Profilthema P-6.
- **F-V-09 · leicht · Kurztexte einsätzig oder beschreibend (2).**
- **F-V-10 · leicht · Brücke schmal unbeschriftet; Kurztext unklar (2).**
- **F-V-11 · leicht · Annahmen bleiben eine Kastenreihe (2).** Bei 360 px 2748 px hoch.
- **F-V-12 · leicht · DEAR: vier gefüllte Punkte; Vertiefung ohne Grenzen (2).** Profilthema P-6.

**Bedienung und Barrierefreiheit (automatisiert)**

Ohne Mangel (2): axe 0 Verstösse in beiden Themes; kein Überlauf 320–1440 px und bei Zoom 200 %; Fokus überall sichtbar; Verweis im Text an den drei verlangten Stellen, wortgleich, nicht in Figur oder Vertiefung.

- **F-B-01 · offen · Reale Screenreader-Läufe fehlen (2).**
- **F-B-02 · leicht · Grössere Grundschrift im Browser wirkt nicht (2).** Profilthema P-9.
- **F-B-03 · leicht · `borderline.css` (2):** Lesetext in 15 px, freie Pixelwerte, unbenutzte Regel `.bl-cycle__who`.

**Bericht und Abgleich**

- **F-K-01 · mittel · Opferhilfe-Link nicht umgesetzt (1+2).** Der Auftrag verlangte den Link; die bauende Sitzung beruft sich auf einen «Entscheid im Chat», der nicht belegt ist. Der Bestand führte `https://www.opferhilfe-schweiz.ch/de/` am 06.10.2026 als bestätigt. **Entscheid der Fachstelle (Chat, 09.10.2026): verlinken, ohne Nummer.**
- **F-K-02 · mittel · Abgleich als Beleg nicht verlässlich (1+2).** Übernommene Sätze nur gezählt, nicht aufgeführt; Verweise auf nicht vorhandenen Text (F-W1-03); widersprüchliche Tabellen.
- **F-K-03 · leicht · Kennzahlen nicht reproduzierbar (2).** Wortzahlen (oben), Tabstopps `grenzen` 20 statt 40, Seitenhöhen.
- **F-K-04 · leicht · Behauptete Entscheide (2, von Prüfung 1 eingeschränkt).** Siehe «Korrekturen an Befunden».
- **F-K-05 · leicht · Dokumentation veraltet oder widersprüchlich (2).** `abgleich/README.md` zur Brücke; Selbstprüfung E bei Schleife (10), Anspannung (11), Pendel (12).

**Profilthemen aus dieser Runde** (im Design-System, nicht an dieser Website): P-6 (Kontinuum in Stufen, Muster C mit vier gefüllten Punkten), P-7 (Linienarten), P-9 (px-Schriftgrössen).

## Erste Prüfrunde · Vorgehen (09.10.2026, erster Bau)

**Vorgehen.** Etappe 1 wurde zweimal unabhängig geprüft, am Stand von PR #10 nach Commit `2c188ea` (Navigation mit fünf Punkten; die Seiten selbst sind seit dem ersten Bau unverändert).

- **Prüfung 1:** Chat-Sitzung, die die Website nicht gebaut, aber den Umbauplan geschrieben hat.
- **Prüfung 2:** eigene Sitzung ohne Kenntnis von Prüfung 1. Sie hat alle 9 Figuren bei 1280 und 360 px und im Kontrast-Theme angesehen und 21 Aussagen gegen den Bestand verglichen. Ausführliche Belege: `PRUEFBERICHT-BELEGE-2026-10-09.md`.
- Sechs Befunde, die nur Prüfung 2 fand, hat Prüfung 1 am Quelltext nachgeprüft und bestätigt: W1-2, W1-3, W2-1, B-4, V-9 und den Abgleich zu `lmk`.

**Was der Vergleich zeigt.** Prüfung 2 fand alle Hauptbefunde von Prüfung 1 und zusätzlich rund zwanzig weitere. Darunter sind zwei, die Prüfung 1 ausdrücklich falsch beurteilt hatte:

- Prüfung 1 schrieb, der Abgleich sei vollständig. Das trifft nicht zu: Mehrere Aussagen sind entfallen, ohne dass der Abgleich es nennt (W1-3).
- Prüfung 1 übernahm die Kürzungsquote von 41 %. Sie entsteht nur, weil inhaltsgleiche Handouts mitgezählt sind; gemessen an der alten Seite allein liegen die Seiten bei 72 bis 81 % (W2-2).

Ursache: Prüfung 1 hat sieben Aussagen verglichen, Prüfung 2 einundzwanzig. Folgerung für den Ablauf: Der Vergleich mit dem Bestand braucht eine Stichprobe von mindestens zwanzig Aussagen je Etappe, und Kennzahlen der bauenden Sitzung werden nachgerechnet, nicht übernommen.

Die Quelle jedes Befunds steht in Klammern: (1) nur Prüfung 1, (2) nur Prüfung 2, (1+2) beide. Schweregrad: **schwer** heisst, die Stelle vermittelt etwas Falsches oder blockiert; **mittel** heisst, sie schwächt das Verständnis deutlich; **leicht** sind kleinere Mängel.

## Erste Prüfrunde · Visualisierungs-Check

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar

| Nr. | Prüfpunkt | Eisberg | Anspannung | Pendel | Annahmen | Schleife | Zwei Sichten | Brücke | Vier Arten | DEAR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | T | N | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | T | T | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | T | N | N | E | T | T | N | E |
| 4 | Kernaussage und Erklärtext | E | T | E | E | E | E | T | E | E |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | – | – | – | **N** | – | – | – | E |
| 6 | Mechanismus nicht doppelt gezeigt | E | N | N | E | T | T | E | E | E |
| 7 | Kartenraster-Check | E | E | E | N | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | T | N | N | E | T | T | N | E |
| 9 | Verteilt, keine Textwand | E | E | E | E | T | T | T | T | T |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | T | T | E | T | E | T | T | T |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | T | T | T | T | T | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N | N |

Bei Punkt 5 der Schleife urteilt Prüfung 1 strenger als Prüfung 2 (N statt T), siehe V-1.

## Erste Prüfrunde · Befunde je Stufe

### W1 Fachliche Prüfung (Vorprüfung, Prüfbedarf für die Fachstelle)

- **W1-1 · schwer · Suizidfrage ohne nächsten Schritt (1+2).** `verstehen` › Annahme 6: «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt nach Suizidgedanken oder einem Plan.» Wer ein «Ja» hört, findet auf der Seite keinen Weg; nur die Fusszeile nennt ihn, ohne Verweis aus dem Text. Das Profil verbietet heute jeden Verweis auf einzelnen Seiten (siehe P-1). Zu entscheiden: ein Satz mit Verweis auf den Zuständigkeitsverweis der Fusszeile (ohne Nummer), oder die Empfehlung entfällt.
- **W1-2 · mittel · Brücke widerspricht sich (2).** `grenzen` › Abbildung 1: Die Kernaussage lautet «Grenzen schützen die Verbindung, statt sie zu beenden». In der Vertiefung steht: «Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden.» Das Handout sagte «Grenzen können Kontakt schützen». Die Kernaussage ist absoluter als die Quelle.
- **W1-3 · mittel · Stille Auslassungen (2).** Der Abgleich nennt nicht alle entfallenen Aussagen. Beispiele:
  - `lmk` › Sicherheit: «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» fehlt; der Abgleich sagt «übernommen».
  - `beziehungen` › Verbindung: die Ressourcenaussage «Beide können zu Nähe, Klärung und Veränderung beitragen».
  - `beziehungen` › Einflüsse: Der Satz «Etwas stark mitzufühlen, zutreffend zu verstehen und hilfreich zu reagieren sind verschiedene Fähigkeiten» ist entfallen; der Satz zur Empathie steht nun ohne Bezug.
  - `grenzen` › Dranbleiben: die positive Bestimmung «Es heisst, dass Sie sich an tragfähigen Absprachen orientieren».
  - `verstehen` › Annahme 5: «Einzelne Merkmale können sich überschneiden».
  
  Der Abgleich muss Satz für Satz nachgeführt werden.
- **W1-4 · mittel · Angebot der Fachstelle (1+2).** `index` › Beratung und `grenzen` › Kontakt: «Klären Sie direkt bei der Fachstelle, wer das Angebot nutzen kann, ob Kosten entstehen …». Als Absenderin sollte die Fachstelle ihre Bedingungen selbst nennen. Der Bestand widerspricht sich («kostenlos und ohne Vollmacht» gegenüber «ob Kosten entstehen»).
- **W1-5 · mittel · Ansatzpunkt der Schleife (1+2).** Siehe V-1. Zu entscheiden: Wo setzen Angehörige im Beispiel tatsächlich an?
- **W1-6 · mittel · Quellenzuschreibungen (1+2):**
  - `grenzen` › Brücke heisst neu «Eigene didaktische Darstellung der Fachstelle»; das Handout nannte Linehan sowie Stand by You / Sotomo.
  - `grenzen` › Sätze sind neu Mason/Kreger und Linehan zugeschrieben; im Bestand standen sie ohne Quelle.
  - `verstehen` › Eisberg nennt «Emotionsregulation nach Linehan (1993)».
  - `verstehen` › Anspannung nennt sechs Bezugspunkte.
  
  Passen sie zur jeweiligen Aussage?
- **W1-7 · leicht · Ergänzte oder verschobene Aussagen (2):**
  - DEAR: «Die Schritte folgen in fester Reihenfolge» ist neu.
  - `beziehungen`: «sollte nicht alle Regulation übernehmen» wurde zu «muss nicht» (aus einer Empfehlung wird eine Erlaubnis).
  - `verstehen` › Pendel: Die Kernaussage ist absoluter formuliert als die Quelle.
- **W1-8 · mittel · Bestand nicht freigegeben (2).** Mehrere Handouts standen im Bestand auf «Entwurf». Der Abgleich belegt Treue zum Bestand, nicht fachliche Richtigkeit. W1 prüft deshalb den Inhalt, nicht nur die Übertragung.
- **Opferhilfe** (Plan, Frage 2): `grenzen` › Schutz, Punkt 4, ohne Link – offen.

### W2 Gesamtkohärenz

- **W2-1 · mittel · Reihenfolge der Navigation (2).** In `site.config.json` steht `grenzen` vor `rolle`. Die Navigation folgt dieser Reihenfolge und lautet nach Etappe 2 «Verstehen · Beziehungen · Grenzen · Ihre Rolle · Auf sich achten», nicht wie entschieden. `rolle` vor `grenzen` setzen.
- **W2-2 · mittel · Umfang (1+2).** Gemessen an der alten Seite allein: `verstehen` 72 %, `beziehungen` 76 %, `grenzen` 81 % (Richtwerte des Plans: 163 / 152 / 190 % überschritten). Bei 360 px ist `grenzen` rund 25 Bildschirmhöhen lang. 45 % der Wörter stehen in Figurenrahmen. Das Ziel «Straffen» ist nicht erreicht.
- **W2-3 · mittel · Textwände aus Definitionslisten (1+2).** `beziehungen` › Einflüsse und Handlungsspielraum, `grenzen` › Sätze und Rollen: `dt` ohne Auszeichnung, `dd` mit Browsereinzug. Die Gegenüberstellung «eher problematisch / eher hilfreich» ist nicht mehr erkennbar. Ursache im Profil (P-3).
- **W2-4 · leicht · Wiederholungen (2).**
  - Der Beratungsabsatz steht fast wörtlich auf `index` und `grenzen`.
  - Der Hinweis «Schutz vor Gespräch» steht auf `grenzen` fünfmal.
  - Annahme 7 und `beziehungen` › Einflüsse sagen dasselbe.
- **W2-5 · leicht · Begriffe (2):**
  - Für Anspannung stehen vier verschiedene Begriffe.
  - Fachbegriffe ohne Erklärung: Dissoziation, Remission, PTBS, DBT.
  - Der Eisberg-Text nennt andere «verborgene» Gefühle als die Figur.
- **W2-6 · leicht · Startseite (1+2).** Die Einstiege sind abstrakt («Diagnose, individuelles Erleben und mögliche Kontexte auseinanderhalten»). Die H1 verspricht zwei Bereiche, die erst Platzhalter sind.
- **W2-7 · leicht · Kopf auf dem Telefon (1+2).** Schon mit drei Punkten ist der Kopf bei 320 px 386 px hoch, mit fünf Punkten 478 px. Logo und Absenderin tragen den grösseren Teil. Lösung im Profil (P-4).

### S Sprach-Review

- **S-1 · mittel · Absicherungen nicht reduziert (1+2).** Auf 100 Wörter kommen 2,87 Absicherungen (Bestand: 2,88). Auf `verstehen` stieg der Wert von 2,50 auf 3,34. Beispiel: «Was eher möglich ist: Zuhören, Abwägen und Planen können leichter fallen.» Entscheid der Fachstelle nötig (siehe Antwort an die Fachstelle).
- **S-2 · mittel · Gekürzt durch Verdichtung (2).** Es stehen drei- bis siebenmal mehr Semikolons, dazu Telegrammstil und Ellipsen. Beispiel aus `grenzen` › Dranbleiben: «Grenzen in ruhigen Momenten vorbereiten statt im Affekt; wenige priorisieren statt viele; …».
- **S-3 · mittel · Bezugslücken und Meta-Korrekturen (1+2).** `beziehungen` › Einflüsse: «Auch die Formel, Menschen mit Borderline reagierten immer schneller, stärker und länger, ist zu pauschal.» Die Formel kommt sonst nirgends vor. Der Empathie-Satz steht ohne Vorbereitung (W1-3).
- **S-4 · mittel · Kurztexte beschreiben die Zeichnung (2).** Beispiel: «Die Achse zeigt Anspannung als Verlauf …». Kurztext und Kernaussage sollten den Inhalt erklären, nicht die Grafik.
- **S-5 · leicht · Gesprächsbeispiele (2).** Einmal steht «Sie» statt «du» («Was soll ich übernehmen, was möchten Sie selbst tun …»). Einige Beispiele klingen technisch, etwa «Für Krisen nutzen wir die vereinbarten professionellen Hilfewege.». Laut-Lese-Probe nötig.
- **S-6 · leicht · Uneinheitliches Beispielformat und viele Verneinungen (2).**

Rechtschreibung erfüllt: kein «ß», nur «», Paarform durchgehend.

### Visualisierungs-Check

- **V-1 · schwer · Ansatzpunkt an falscher Station (1+2).** `beziehungen` › Abbildung 1: Station 2 «Bedeutung» ist im Beispiel die Deutung der betroffenen Person («Wenn es mir schlecht geht, bin ich allein.»). Angehörige handeln bei Station 1 (wie die Absage gesagt wird) und Station 5 (wie sie auf die Nachrichten reagieren). Der Beispielsatz «dein Schweigen» passt nicht zur Absage. **Der Fehler stammt aus dem Umbauplan**, Abschnitt 3.
- **V-2 · schwer · Pendel ohne Pendel (1+2).** `verstehen` › Abbildung 3 hat dieselbe Form wie Abbildung 2 direkt davor, aber eine andere Bedeutung der Linienstärke. Weder das Pendel noch die Abhängigkeit vom Stress ist zu sehen. Die «differenziertere Sicht» wirkt wie ein Mittelwert statt wie das gleichzeitige Halten beider Seiten.
- **V-3 · mittel · Wer handelt wo? (1+2).** Die Schleife wechselt zwischen zwei Personen, ohne es zu zeigen. «Zwei Sichten» zählt vier Schritte, die Schleife fünf Stationen.
- **V-4 · mittel · Wessen Anspannung? (1+2).** `verstehen` › Abbildung 2:
  - Die Achse sagt nicht, wessen Anspannung sie zeigt.
  - «Rückzug» aus der Anspannungskurve fehlt.
  - Gezeichnet sind Stufen, obwohl der Text «keine festen Stufen» sagt.
  - «Nicht von aussen ablesbar» steht nur in der Vertiefung.
- **V-5 · mittel · Vier Arten von Grenzen ist dekorativ (1+2).** Ein geteilter Kreis neben einer Liste; die angedeutete Überschneidung wird nicht gezeigt. Als Text setzen.
- **V-6 · mittel · Annahmen-Figur (1+2).** 16 gleiche Kästen, bei 360 px rund 4100 px hoch. Die Annahme ist stärker ausgezeichnet als die Einordnung, die gestrichelte Linie markiert ausgerechnet die gesicherte Aussage.
- **V-7 · mittel · Brücke (1+2).** Die Ufer fehlen, obwohl die Bildlegende sie nennt, und damit die Verbindung zwischen zwei Menschen. Die Teile sind über Ziffern statt direkt beschriftet. Zur Kernaussage siehe W1-2.
- **V-8 · mittel · Hilfen neben statt in der Schleife (2).** Was den Spielraum verengt und was hilft, steht als lange Liste neben der Figur, obwohl der Text sagt, die Schleife lasse sich «an mehreren Stellen unterbrechen».
- **V-9 · mittel · Figuren als Textrahmen (2).** 45 % der Wörter stehen in Figurenrahmen (Kernaussage, Kurztext, Vertiefung, sichtbare Textfassung).
- **V-10 · leicht · Schmale Ansicht (1+2):**
  - Die Pfeilbeschriftung der Kontinua steht waagrecht über senkrechten Listen.
  - Der Text spricht von «links/rechts», obwohl die Spalten untereinander stehen.
  - Station 3 der Schleife ist versetzt.
- **V-11 · leicht · Linienarten ohne feste Bedeutung (2).** Gestrichelt bedeutet einmal «Sicht der Angehörigen», einmal «Einordnung».
- **V-12 · leicht · DEAR (2).** Bringt gegenüber einer Liste wenig. Die fünfte Spalte bleibt leer, Erklärung und Beispielsatz laufen ineinander.

### Bedienung und Barrierefreiheit (automatisiert)

Beide Prüfungen fanden keinen Mangel bei diesen Punkten:

- kein Überlauf bei 320 bis 1440 px und bei 200 % Text;
- Sprunglink als erster Tabstopp, Fokus überall sichtbar, Vertiefungen per Enter;
- Überschriftenfolge ohne Sprünge, keine `tel:`-Links;
- Kontrast-Theme bei allen Figuren in Ordnung.

- **B-1 · schwer · Kontrast der Vertiefungen (1+2).** `summary` in allen 9 Figuren: 4,39 : 1 (verlangt 4,5 : 1). Gleicher Fehler im Starter. Ursache im Profil (P-2).
- **B-2 · schwer · Link im Hinweiskasten (1+2).** `grenzen` › Kopf: 3,59 : 1. Ursache im Profil (P-2).
- **B-3 · leicht · 10 bis 12 benannte Regionen pro Seite (2).** Jeder Abschnitt ist eine Landmarke. Ursache im Profil (P-5).
- **B-4 · leicht · E-Mail im Zuständigkeitsverweis nicht verlinkt (2).** Ursache im Profil.
- **B-5 · offen · Reale Screenreader-Läufe fehlen (1+2).** Nötig sind mindestens zwei, zum Beispiel VoiceOver mit Safari und NVDA mit Firefox, dazu ein Test mit Hardwaretastatur.

### W3 Code-Review

Noch nicht geprüft (nach W2 und S). Für den Export in Etappe 3 vormerken: Entwurfsseiten, `UMBAUPLAN.md` und `abgleich/` dürfen nicht ausgeliefert werden (2).

## Profil-Befunde

Nicht an dieser Website zu beheben, sondern im Design-System.

- **P-1** Die Regel «ein Zuständigkeitsverweis nur in der Fusszeile» kollidiert mit Texten, die zum Handeln in akuten Lagen anleiten (W1-1). Das Profil braucht einen zulässigen Verweis aus dem Text auf den Zuständigkeitsverweis, ohne Nummern.
- **P-2** Kontraste von `summary` in Figuren und von Links in `.puk-longform__boundary` (B-1, B-2); die Prüfansicht `qa.html` hat das im Starter nicht gefunden.
- **P-3** Keine Gestaltung für `dl` im Fliesstext und keine Komponente für Formulierungsbeispiele («So könnte es klingen», problematisch/hilfreich).
- **P-4** Kompakter Seitenkopf unter 760 px.
- **P-5** Jeder Abschnitt wird zur Landmarke.
- **P-6** Muster B nur für vier Stationen; Muster J ist schmal falsch beschriftet; bei Muster C sind die vier gefüllten Punkte mit der Regel «höchstens ein gefülltes Feld» abzustimmen.
- **P-7** Gestrichelte Linien und Linienstärken brauchen eine feste Bedeutung im ganzen Profil.
- **P-8** Gate und Check prüfen den Ansatzpunkt nur formal; dekorative oder doppelte Figuren bestehen. Der Visualisierungs-Check sollte je Figur einzeln ausgefüllt werden (Matrix wie oben).
- **P-9** Weitere, kleinere Punkte:
  - Schriftgrössen in px, eine grössere Grundschrift im Browser wirkt nicht;
  - Kit-Revision als Meta-Text in der Fusszeile;
  - Kernsatz bei 360 px zu gross.
