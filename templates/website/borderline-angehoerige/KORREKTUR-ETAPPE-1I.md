# Korrekturauftrag · Borderline-Website, Etappe 1i

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Vierte Prüfrunde** (`PRUEFBERICHT.md`, Abschnitt «Vierte Prüfrunde», Stand `f32c255`). Die Befunde sind stichprobenweise nachgeprüft (Prüfung 1).
- **Entscheide der Fachstelle vom 10.10.2026:**
  - P4-F-1, -5, -7, -9, -10, -12, -13 und -17: Die vorsichtigen Formulierungen aus dem Bestand kommen zurück (Abschnitt 3).
  - P4-F-2: Annahme 3 heisst neu «nicht schuld» statt «nicht die Ursache», mit einem Satz, der beides verbindet.
  - P4-F-3: Verantwortung für den Krankheitsverlauf und für die Beziehung werden getrennt.
  - P4-F-4: In «Momentaufnahmen» steht der rechte Satz im Bestandswortlaut, und eine Zeile sagt, wer spricht.
  - P4-F-6: Neun gekürzte Sätze aus dem Bestand kommen zurück, in einfacher Sprache.
  - P4-F-11: Der Satz «Eine Grenze gilt auch ohne Zustimmung» kommt zurück.
  - P4-F-19: Der Ort der Beratung wird genannt.
- **Struktur, entschieden von Claude:**
  - P4-F-14: Der Eisberg bleibt schmal mit Listen.
  - P4-F-15: Die Frage bleibt im Text und in der Abbildung.
  - P4-F-18: «Was helfen kann» bleibt Text.
  - P4-F-20: Es gibt keine zweite Linie in der Kurve.
  - Umgesetzt werden P4-S-3, P4-S-5, P4-S-6, P4-W2-4, P4-V-1 und P4-W1-9.
  - Zurückgestellt (optional) sind P4-W2-2, P4-S-4, P4-V-2, P4-V-4, P4-V-5 und P4-V-6.
- **Offen bis zur Freigabe:** P4-F-8, P4-F-16 und P4-F-21 (Freigabe der Beispielsätze, Quellen und Figuren). Dieser Auftrag ändert daran nichts.

## 2. Regeln

- Die Texte in diesem Auftrag gelten so, wie sie dort stehen. Keine eigenen Formulierungen, nichts weglassen. Was nicht genannt ist, bleibt.
- Kommt ein Satz an mehreren Stellen vor (Abschnittstext, Liste, Kurzbeschreibung `p.puk-sr`, Plan), wird er überall gleich geändert.
- **Abgleich:** wie in Abschnitt 9. `node abgleich/pruefe-abgleich.mjs` mit 0 Zeilen ohne Fundstelle.

## 3. Vorsichtige Formulierungen zurück (P4-F-1, -5, -7, -9, -10, -12, -13, -17)

| Seite › Ort | bisher | neu |
| --- | --- | --- |
| `verstehen` › `bewertungen`, Absatz | «Das geschieht ohne Absicht.» | «Wenn das geschieht, ist es keine Absicht.» |
| `verstehen` › `anspannung`, Absatz | «Bei Gefahr hat Schutz Vorrang.» | «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» |
| `verstehen` › `anspannung`, Absatz | «Bei hoher Anspannung zählt für einen Menschen oft nur noch der Schmerz oder Streit im Moment.» | «Bei hoher Anspannung dreht sich für einen Menschen häufig fast alles um den Schmerz oder Streit im Moment.» |
| `verstehen` › Abbildung 2, Stelle 4 (Beschriftung an der Kurve, Überschrift in der Liste, Kurzbeschreibung) | «Es wird wieder ruhiger.» | «Es kann wieder ruhiger werden.» |
| `verstehen` › `erleben`, Absatz 1 | «Das ist nicht bei allen Menschen mit Borderline so.» | «Das ist nicht bei allen Menschen mit Borderline so und lässt sich aus der Diagnose nicht vorhersagen.» |
| `verstehen` › Abbildung 1, Vertiefung | «Der Eisberg ist ein Bild dafür, was man von aussen sieht, keine Aussage darüber, was in einer bestimmten Person «darunterliegt». Er soll Wut nicht verharmlosen.» | «Das Eisberg-Bild ist eine mögliche Verständnishilfe, keine Aussage darüber, was in einer bestimmten Person sicher «darunterliegt». Es soll Wut nicht verharmlosen.» |
| `beziehungen` › Abbildung 1, Rücksprung (überall, wo der Satz steht) | «Was die Schwester tut, wird zum neuen Ereignis.» | «Was die Schwester tut, kann zum neuen Ereignis werden.» |
| `verstehen` › `mythen`, Suizid-Absatz | «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» | «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» |

- Bei 1280 px prüfen, dass die längere Beschriftung an Stelle 4 nicht über den Rand ragt und die Kurve nicht überdeckt.
- Der Suizid-Absatz ändert sich nur in der Wortstellung. Der Verweis im Text bleibt an seiner Stelle.

## 4. Seite `verstehen`

### Abschnitt 06 · Annahmen

- **Annahme 3 «Angehörige sind schuld.»:**
  - Hauptsatz: «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.»
  - Erklärung: «Erfahrungen in engen Beziehungen können mitwirken, neben vielen anderen Einflüssen. Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.»
- **Annahme 5 «Borderline ist dasselbe wie Trauma.»:** Am Ende der Erklärung kommt dazu: «Die Abgrenzung gehört in eine fachliche Abklärung.»

### Abbildung 2 · Anspannungskurve, Stelle 4

- Nach «Bieten Sie neuen Kontakt nur an, wenn es für Sie sicher und gewollt ist.» kommt dazu: «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» Das Beispiel bleibt.

### Abbildung 3 · Momentaufnahmen

- **Zeile über den beiden Sätzen**, über beide Spalten: «Sätze, die Angehörige hören können:». Dafür eine kleine Regel in `borderline.css`: über die ganze Breite der Szene, `type-body-sm`, Farbe `text-default`, ohne Rahmen, mit Abstand nach unten. Schmal steht die Zeile über den beiden Sätzen.
- **Rechter Satz:** «Du bist genau wie alle anderen.» statt «Du bist wie alle anderen.». Das gilt auch für die Kurzbeschreibung und den Visualisierungsplan.
- **Vertiefung:** 
  - Nach «Im hellen Moment können Nähe, Dankbarkeit oder Hoffnung sehr gross werden.» kommt dazu: «Das kann warm wirken und zugleich Erwartungen oder Druck erzeugen.»
  - Nach «Im dunklen Moment können Kränkung, Angst oder Wut den Blick stark färben.» kommt dazu: «Harte Sätze können verletzen. Sie sind trotzdem nicht automatisch ein vollständiges Bild der Person oder Beziehung.»
  - Der Rest der Vertiefung bleibt.

## 5. Seite `beziehungen`

- **`verantwortung`:** Statt «Angehörige dürfen zur Veränderung beitragen. Sie sind aber keine Therapeutinnen oder Therapeuten und nicht allein verantwortlich für den Verlauf oder die Beziehung.» steht: «Angehörige dürfen zur Veränderung beitragen. Sie sind aber keine Therapeutinnen oder Therapeuten. Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.» Der Satz danach («Es gibt keine «perfekte» Reaktion …») bleibt.
- **`was-hilft` › «Unterstützung verteilen»:** Nach «Eine Beziehung kann helfen. Sie sollte aber weder alle schwierigen Gefühle auffangen noch eine Behandlung ersetzen.» kommen zwei Sätze dazu:
  - «Wenn Angehörige oft eigene Termine absagen oder dauernd erreichbar sind, kann das kurz entlasten und zugleich die eigene Belastung erhöhen.»
  - «Keine einzelne Bezugsperson kann für Sicherheit allein sorgen.»
  
  Danach folgt wie bisher «Auch eigene Strategien der Person, weitere Bezugspersonen und Fachleute können mittragen: …».

## 6. Seite `grenzen`

- **`arten` › «Geld und Unterstützung»:** Nach «Sie dürfen prüfen, welche Ausgaben oder Aufgaben Sie übernehmen können.» kommt dazu: «Ihre eigene finanzielle Sicherheit und Ihre Belastungsgrenzen gehören in diese Entscheidung.» Das Beispiel bleibt.
- **`konsequenz`, Absatz 1, neu:** «Konsequenz heisst, dass Sie sich an tragfähigen Absprachen orientieren. Eine angekündigte Grenze umzusetzen, ist oft der schwierigste Teil, etwa bei Angst, Abhängigkeit oder fehlender Unterstützung. Eine Grenze gilt auch, wenn die andere Person nicht zustimmt. Für die Reaktion der anderen Person sind Sie nicht verantwortlich.»
- **`konsequenz`, neuer Absatz** direkt vor «Ein Schuldgefühl heisst nicht, dass Sie etwas falsch gemacht haben. …»: «Grenzen brauchen oft Wiederholung. Sie dürfen an einer Grenze festhalten, auch wenn Schuldgefühle bleiben.»
- **`bruecke` (P4-S-5):** «Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht.» wird zu «Grenzen können Kontakt auf ähnliche Weise schützen, denn sie zeigen, was geht und was nicht.»
- **`reihenfolge` (P4-S-6):** «Langfristig und emotional niedrig:» wird zu «Langfristig und emotional niedriger:».
- **`dear` (P4-W2-4):** Nach «Nutzen Sie die Schritte in einer ruhigen und sicheren Situation. Die Beispiele betreffen Anrufe am späten Abend.» kommt ein Satz dazu: «Woran Sie merken, dass ein Gespräch gerade schwer wird, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» Der Abschnittstitel ist der Link auf `verstehen.html#anspannung`.

## 7. Seite `index` · `beratung` (P4-F-19, P4-S-6)

Statt der drei Sätze ab «Die Fachstelle Angehörigenarbeit der PUK berät alle Angehörigen …» stehen fünf:

«Die Fachstelle Angehörigenarbeit der PUK berät alle Angehörigen: Familie, Partnerinnen und Partner, Freundinnen und Freunde. Das gilt auch, wenn die betroffene Person nicht in der PUK behandelt wird. Eine Vollmacht der betroffenen Person braucht es nicht. Die Beratung ist kostenlos und untersteht der Schweigepflicht. Sie findet an der Lenggstrasse 31 in Zürich oder telefonisch statt, einzeln oder in Gruppen.»

Der Satz davor und die Kontaktzeile bleiben.

## 8. Verweise als Titel kenntlich machen (P4-S-3)

Ein Link, der einen Abschnittstitel nennt, steht in «…»; die Anführungszeichen stehen ausserhalb des Linktexts.

- `beziehungen` › `verstaerker`: «Mehr dazu auf der Seite «Verstehen» in den Abschnitten «Wenn die Anspannung steigt» und «Wenn Bewertungen einseitiger werden».»
- `beziehungen` › `verantwortung`: «… steht auf der Seite «Grenzen» unter «Wenn Gewalt oder Bedrohung vorkommt».»
- `grenzen` › Kopf: «**Bei Bedrohung oder Gewalt** geht Schutz vor jedem Gespräch. Mehr dazu im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».»

Linkziele bleiben gleich.

## 9. `site.config.json`, Abgleich und Plan

- **`visualPlan` (P4-V-1):**
  - `v-vs-anspannung` › `statement`: «4 «Später»» wird «4 «Es kann wieder ruhiger werden.»». Wo Stelle 4 sonst beschrieben ist, gilt dasselbe.
  - `v-vs-bewertungen` › `goal`: «Verstehen, dass ein einzelner heller oder dunkler Moment nicht die ganze Beziehung oder Person beschreibt».
  - `v-vs-bewertungen` › `source`: «Eigene didaktische Darstellung (Bild «Momentaufnahmen»); Grundlage: Linehan (1993); Hoffman et al. (2005)».
  - `v-vs-bewertungen` › `statement`: Der rechte Satz heisst «Du bist genau wie alle anderen.». Ergänze «Darüber die Zeile «Sätze, die Angehörige hören können:».».
- **Abgleich:**
  - Jede Zeile, deren neue Fassung sich ändert, bekommt «umformuliert (Prüfrunde 4, 1i)»; der frühere Status steht in der Bemerkung («bis 1h: …»).
  - Zeilen, deren Satz zurückkommt, bekommen «übernommen» oder «umformuliert (Prüfrunde 4, 1i)» mit der neuen Fassung und dem Ort. Das sind b162, b163, g51 (mit g79 und g369), g228, g261, g627, v17, v49, v119, v126, v330, v377, v381 und die Zeilen zu P4-F-5, -12 und -13.
  - «Prüfbedarf» in der Bemerkung wird bei diesen Zeilen zu «Entscheid Fachstelle 10.10.2026 (P4-F-…)».
  - **P4-W1-9:**
    - Bei v371 und v390 die entfallenen Teile nennen.
    - g208 auf «verschoben» setzen.
    - Bei v138 und v146 «Vertiefung «Quellen»» durch die Quellenzeile ersetzen.
    - «Du bist genau wie alle anderen.» der Bestandszeile aus `wenn-worte-treffen` zuordnen.
  - Zählung und Kopfnotiz («Korrektur 1i: …») nachführen.

## 10. Danach

- `node tools/build.mjs` ohne blockierende Befunde. `node tools/gate.mjs --selftest` 53/53.
- Bildschirmfotos von Abbildung 2 und 3 auf `verstehen`, Abschnitt `index` › `beratung` und `grenzen` › `konsequenz` bei 1280 und 360 px ansehen. Es darf keinen Überlauf geben, und keine Beschriftung darf über eine Form ragen.
- Kennzahlen mit `abgleich/kennzahlen.mjs` und `abgleich/verneinung.mjs` neu rechnen.
- Selbstprüfung in `PRUEFBERICHT.md`: eine Tabelle mit «umgesetzt, Beleg» je Punkt der Abschnitte 3 bis 9. Nur den Abschnitt «Selbstprüfung der bauenden Sitzung» ändern.
- Der Pull Request bleibt Entwurf.
