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
| W1 Fachliche Prüfung | offen | 09.10.2026 | Vorprüfung durch zwei Prüfsitzungen (Claude, haben nicht gebaut) | 8 Befunde, davon 1 schwer; Prüfbedarf für die Fachstelle. Freigabe nur durch die Fachstelle. |
| W2 Gesamtkohärenz | offen | 09.10.2026 | zwei Prüfsitzungen | 7 Befunde |
| S Sprach-Review | offen | 09.10.2026 | zwei Prüfsitzungen | 6 Befunde; abschliessbar erst nach W1 und W2 |
| Visualisierungs-Check | offen | 09.10.2026 | zwei Prüfsitzungen | 12 Befunde, davon 2 schwer |
| Bedienung und Barrierefreiheit | offen | 09.10.2026 | zwei Prüfsitzungen, automatisiert | 5 Befunde; reale Screenreader-Läufe fehlen |
| W3 Code-Review | offen | | | erst nach Umsetzung von W2 und S |

## Selbstprüfung der bauenden Sitzung

Nach jedem Bau ohne Nachfrage ausfüllen: Visualisierungs-Check wie unten, mit Beleg je Punkt. Arbeitsstand, keine Prüfstufe.

**Stand 08.10.2026 · Etappe 1 · bauende Sitzung (Claude Code)**. Gebaut sind `index`, `verstehen`, `beziehungen` und `grenzen`; die übrigen 11 Seiten sind Entwürfe mit Platzhalter. Die Tabelle unten ist die Selbstprüfung, nicht die Stufe «Visualisierungs-Check»; deren Status bleibt «offen».

- `node tools/build.mjs`: 15 Seiten, 0 blockierend, 23 Hinweise (9 Visualisierungen und 12 Platzhalter nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen).
- `node tools/gate.mjs --selftest`: 46/46 bestanden.
- `node tools/gate.mjs --production`: blockiert erwartungsgemäss mit 22 Befunden (9 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`).
- Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5: kein horizontaler Überlauf bei 320, 360, 768 und 1440 px auf den vier Seiten. Tab-Durchlauf: Alle Fokusziele haben einen sichtbaren Fokus (index 10, verstehen 19, beziehungen 17, grenzen 22), und Enter öffnet eine Vertiefung. Mit reduzierter Bewegung bewegt sich ohne Bedienung nichts; nach dem Öffnen einer Vertiefung laufen zwei kurze Übergänge aus dem Profil-CSS, die nach weniger als 50 ms beendet sind. Theme `data-theme="kontrast"` ist bei vier Figuren gerendert. Ein Test mit Screenreader und Hardwaretastatur fehlt.
- Abgleich der Texte mit dem Bestand: `abgleich/` (je Seite, Wörtertabelle und Entscheide im Bau in `abgleich/README.md`).

## Visualisierungs-Check

| Nr. | Prüfpunkt | Ergebnis | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Visualisierungsplan liegt vor; die Seiten entsprechen ihm | erfüllt | `site.config.json` › `visualPlan`: eine Zeile pro Abschnitt auf allen 15 Seiten. Die 9 Figuren der Etappe 1 entsprechen dem Plan (UMBAUPLAN, Abschnitt 3): `v-vs-eisberg` K, `v-vs-anspannung` J, `v-vs-bewertungen` J, `v-vs-mythen` E, `v-bz-schleife` B, `v-bz-sichten` E, `v-gr-bruecke` A, `v-gr-arten` A, `v-gr-dear` C. Zwei Zeilen mit «im Bau prüfen» sind als Text entschieden: `v-gr-reihenfolge` (Raster) und `v-gr-kontakt` (Kontinuum), Begründung in der Planzeile. | W1/Visualisierungs-Check: die beiden Entscheide für Text bestätigen oder verwerfen |
| 2 | Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt | erfüllt | Kein Gate-Befund `plan-coverage`. Die Begründungen benennen den Inhalt, z. B. `v-bz-verstaerker`: «Die Einflüsse vertiefen Stationen derselben Schleife … eine zweite Grafik würde denselben Mechanismus doppeln»; `v-gr-gewalt`: «In einer möglichen Gefahrensituation braucht es kurze, direkte Hinweise ohne Grafik». | – |
| 3 | Prüffrage je Darstellung konkret beantwortet; die Darstellung zeigt, was die Antwort verspricht | teilweise | Konkret beantwortet und eingelöst, z. B. `v-bz-schleife` (Rückkopplung als geschlossene Schleife, 5 Bögen), `v-vs-mythen` (Paare auf gleicher Höhe, schmal hintereinander). Schwach bei `v-gr-arten`: Der geteilte Kreis zeigt Gleichwertigkeit und Überschneidung (gestrichelt), die eigentliche Information steckt aber in der Liste daneben. | Visualisierungs-Check: prüfen, ob `arten` als Figur trägt oder Text genügt |
| 4 | Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung | erfüllt | Alle 9 Figuren haben `p.puk-vis-kern` als ganzen Satz und `p.puk-vis-short`, z. B. `v-vs-anspannung`: «Bei hoher Anspannung können Worte schwerer ankommen. Sie dürfen eine Pause machen oder das Gespräch beenden.» Was Angehörige tun können, steht sichtbar: Ansatzpunkte in `v-bz-schleife` und `v-vs-anspannung`, die drei Schritte zu den Bewertungen im Abschnittstext `verstehen` › `bewertungen`. | – |
| 5 | Erklärmodelle (B, C, G): Ansatzpunkt für Angehörige markiert oder Verzicht begründet; keine Verantwortung für Behandlung oder Verlauf zugeschoben | erfüllt | `v-bz-schleife`: Station 2 «Bedeutung» als `li.is-ansatz` (doppelte Kontur) und `p.puk-vis-ansatz`, dazu in der Textfassung genannt. Zitat: «Ein Ansatzpunkt ist eine Möglichkeit, keine Pflicht, die Schleife allein zu unterbrechen.» `v-gr-dear`: entryPoint «entfällt: Der ganze Ablauf beschreibt das eigene Handeln der Angehörigen.» Muster G kommt nicht vor. | – |
| 6 | Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt | erfüllt | Vier Handouts zum selben Mechanismus sind in einer Figur verbunden (`v-vs-anspannung`). Schleife und Zwei Sichten nutzen dasselbe Beispiel (Absage der Schwester) für Mechanismus und Perspektiven. `beziehungen` › `verstaerker` verlinkt `verstehen.html#anspannung` und `#bewertungen`, statt sie zu wiederholen. | – |
| 7 | Kartenraster-Check: keine Reihe gleichartiger Karten, wo eine Anordnung erklären müsste | erfüllt | Keine `.puk-web-card-list` (kein Gate-Hinweis `card-grid`). Die 16 Felder in `v-vs-mythen` sind Paare: Links/rechts und gleiche Höhe tragen die Bedeutung «Annahme ↔ Einordnung», Linienart oben unterscheidet die Seiten. | Visualisierungs-Check: Wirkung der 16 Felder bei 1440 px ansehen |
| 8 | Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung, nicht nur die Wörter | teilweise | Bedeutung tragen: Pfeilrichtung und Rücksprung (`v-bz-schleife`), Linienstärke (`v-vs-anspannung` steigend; `v-vs-bewertungen` dick an beiden Polen), Linie ohne Verbindungen zwischen den Schichten (`v-vs-eisberg`), Linienart durchgezogen/gestrichelt (`v-bz-sichten`, `v-vs-mythen`), Reihenfolge und Nummer (`v-gr-dear`), Metapher (`v-gr-bruecke`). Wenig Bedeutung trägt die Form bei `v-gr-arten` (siehe Punkt 3). | wie Punkt 3 |
| 9 | Darstellungen über den Erkenntnisweg verteilt; keine unbegründete Textwand | teilweise | Die Figuren sind über den Erkenntnisweg verteilt: `verstehen` Abschnitte 03–06, `beziehungen` 02 und 04, `grenzen` 02, 03 und 05. Auf `grenzen` folgen danach fünf Textabschnitte (06–10, rund 1000 Wörter); jeder ist im Plan begründet (Formulierungen, Hinweise, Liste, Rollen, Schutz). `beziehungen` › `verstaerker` ist eine lange Liste mit acht Einträgen. | W2: Länge von `grenzen` 06–10 und `beziehungen` › `verstaerker` prüfen; Kürzungskandidaten in `abgleich/` |
| 10 | Vereinfacht, nicht verfälscht; Grenzen des Modells benannt; Quelle oder Kennzeichnung vorhanden | erfüllt (formal) | Jede Figur nennt die Grenzen des Modells in der Vertiefung, z. B. `v-vs-anspannung` «keine messbaren Zustände und kein Phasenmodell … Gefahr lässt sich aus der Lage auf der Achse nicht ableiten», `v-vs-eisberg` «keine Aussage darüber, was in einer bestimmten Person ‹darunterliegt›». Die Kennzeichnung in der Bildlegende ist «Eigene didaktische Darstellung» bzw. «Quelle: Linehan (2015)» (`v-gr-dear`). Ob die Vereinfachung fachlich stimmt, entscheidet W1. | W1 |
| 11 | Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich | erfüllt | Keine Seite lädt `interaktion.js`, kein `data-puk-*`, kein `data-vis-build`. Interaktiv sind nur native `details` mit Vertiefungen. Reiter, Auswahl-Schaltflächen und Akkordeons des Bestands sind sichtbare Darstellungen geworden (`abgleich/`). | – |
| 12 | Bei 320 px lesbar; Textalternative bzw. Langbeschreibung vollständig | erfüllt (technisch) | Bildschirmfotos bei 320 px: `v-bz-schleife` als Liste mit Linie und Text «Nach Station 5: zurück zu Station 1»; «Uhrzeigersinn» nur in `[data-cycle-wide]` (Gate). `v-vs-mythen` paarweise untereinander, Kontinua als Bereiche untereinander, kein horizontaler Überlauf. Jede Figur hat eine Textfassung über `aria-describedby` mit mindestens 40 Zeichen (Gate). | Stufe 5: Screenreader-Läufe mit den Textfassungen |
| 13 | Theme «Hoher Kontrast» geprüft (keine festen Farbwerte in SVG) | erfüllt (technisch) | In den SVG stehen keine festen Farbwerte (Suche nach Hexwerten in `content/` und `borderline.css` ohne Treffer), nur Token-Klassen (`puk-vis-ln`, `puk-vis-fill`, `puk-vis-mark`, `puk-vis-water`, `puk-vis-paper`). `data-theme="kontrast"` ist gerendert bei `v-bz-schleife`, `v-vs-mythen`, `v-vs-eisberg` und `v-gr-dear`: Linien und Text folgen dem Theme. | Stufe 5: alle Figuren im Kontrast-Theme ansehen |
| 14 | Inhalt fachlich freigegeben | nicht erfüllt | `approvalStatus` «ausstehend» bei allen 9 Figuren; W1 ist offen; das Produktionsgate blockiert 9 × `visual-approval`. | W1 durch die Fachstelle |


## Prüfung durch die Prüfsitzungen (09.10.2026)

**Vorgehen.** Etappe 1 wurde zweimal unabhängig geprüft, am Stand von PR #10 nach Commit `2c188ea` (Navigation mit fünf Punkten; die Seiten selbst sind seit dem ersten Bau unverändert).

- **Prüfung 1:** Chat-Sitzung, die die Website nicht gebaut, aber den Umbauplan geschrieben hat.
- **Prüfung 2:** eigene Sitzung ohne Kenntnis von Prüfung 1. Sie hat alle 9 Figuren bei 1280 und 360 px und im Kontrast-Theme angesehen und 21 Aussagen gegen den Bestand verglichen. Ausführliche Belege: `PRUEFBERICHT-BELEGE-2026-10-09.md`.
- Sechs Befunde, die nur Prüfung 2 fand, hat Prüfung 1 am Quelltext nachgeprüft und bestätigt: W1-2, W1-3, W2-1, B-4, V-9 und den Abgleich zu `lmk`.

**Was der Vergleich zeigt.** Prüfung 2 fand alle Hauptbefunde von Prüfung 1 und zusätzlich rund zwanzig weitere. Darunter sind zwei, die Prüfung 1 ausdrücklich falsch beurteilt hatte:

- Prüfung 1 schrieb, der Abgleich sei vollständig. Das trifft nicht zu: Mehrere Aussagen sind entfallen, ohne dass der Abgleich es nennt (W1-3).
- Prüfung 1 übernahm die Kürzungsquote von 41 %. Sie entsteht nur, weil inhaltsgleiche Handouts mitgezählt sind; gemessen an der alten Seite allein liegen die Seiten bei 72 bis 81 % (W2-2).

Ursache: Prüfung 1 hat sieben Aussagen verglichen, Prüfung 2 einundzwanzig. Folgerung für den Ablauf: Der Vergleich mit dem Bestand braucht eine Stichprobe von mindestens zwanzig Aussagen je Etappe, und Kennzahlen der bauenden Sitzung werden nachgerechnet, nicht übernommen.

Die Quelle jedes Befunds steht in Klammern: (1) nur Prüfung 1, (2) nur Prüfung 2, (1+2) beide. Schweregrad: **schwer** heisst, die Stelle vermittelt etwas Falsches oder blockiert; **mittel** heisst, sie schwächt das Verständnis deutlich; **leicht** sind kleinere Mängel.

## Visualisierungs-Check der Prüfsitzungen

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

## Befunde je Stufe

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
