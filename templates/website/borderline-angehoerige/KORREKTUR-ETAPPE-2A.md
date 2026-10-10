# Korrekturauftrag · Borderline-Website, Etappe 2a · nach der Prüfrunde 2a

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Prüfrunde 2a** (`PRUEFBERICHT.md`, Abschnitt «Prüfrunde 2a», Commit `b6db6a7`, geprüfter Stand `94afac7`). Die wichtigsten Befunde sind nachgeprüft (Prüfung 1).
- **Entscheide der Fachstelle vom 10.10.2026:**
  - **P2a-F-1:** Verantwortung an Etappe 1 angleichen (Abschnitt 3).
  - **P2a-F-2:** Kinder in der vorgeschlagenen Fassung, mit dem Schutzsatz (Abschnitt 4).
  - **P2a-F-3:** Kürzen in beiden Stufen, a und b, mit allen Vorschlägen der Prüfrunde (Abschnitt 5).
  - **P2a-F-4:** Vor den Verweis im Text auf `selbstfuersorge` › `eigenes-leben` kommt wieder «Bei Gefahr hat Schutz Vorrang.».
  - **P2a-F-6 (Teil):** «Ein Stück Weg» wird verfeinert. Beim «freien Abend» bleibt der Dampf über der Tasse.
  - **P2a-F-7:** «Innehalten, bevor Sie reagieren» weicht einem Satz mit Verweis auf STOPP (zusammen mit K-R-b2).
  - **P2a-F-8:** Der Verweis bei Schuld zeigt auf `verstehen` › «Häufige Annahmen – und was realistischer ist».
  - **P2a-F-9:** Der Zusatz «einer wissenschaftlich untersuchten Psychotherapie für Borderline» bleibt. «zentrales Element» kommt nicht zurück.
  - **P2a-F-10:** Gunderson et al. (2018) und die Handout-Vermerke («kein validiertes Instrument» usw.) bleiben weg.
  - **Schon vorher entschieden:** «Vielleicht ruft sie gleich an.» wird «Vielleicht kommt gleich eine Nachricht.».
- **Offen bis zur Freigabe:** P2a-F-5 (neue Sätze) und die fachliche Freigabe der zwei Abbildungen. Die Fachstelle liest die Seiten nach dieser Korrektur.
- **Geändert werden nur** `rolle` und `selbstfuersorge`, `site.config.json` (Plan) und der Abgleich. Die Seiten der Etappe 1 und `index` bleiben unverändert.

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen.
- **Kürzen und Umordnen** (Abschnitt 5) setzt die Vorschläge der Prüfrunde um. Dabei gilt:
  - Bestandswortlaut vor eigener Formulierung.
  - Keine fachliche Aussage geht verloren.
  - Eine Absicherung zu Person, Ursachen, Diagnose, Verlauf oder Schutz, die nur einmal vorkommt, bleibt.
- **Vertiefungen:** Für Text ausserhalb von Abbildungen nimmst du das Akkordeon des Profils für optionale Vertiefung («Langform und Psychoedukation», «Interaktionskonzept»). Es muss ohne Skript lesbar sein und vollständig gedruckt werden. Schutz, Gewalt, akute Gefahr und Gesundheitshinweise stehen nie nur in einer Vertiefung.
- **Ein Satz steht an mehreren Stellen** (Text, `p.puk-sr`, Plan): Er wird überall gleich geändert.
- **Abgleich:**
  - Jede geänderte Zeile bekommt «umformuliert (2a-K)», «verschoben (Vertiefung, 2a-K)» oder «neu (2a-K)» und eine Bemerkung mit der Auftragsnummer.
  - `node abgleich/pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle.

## 3. Verantwortung (P2a-F-1) · `rolle` › `schuld`

| Ort | bisher | neu |
| --- | --- | --- |
| Absatz «Konkrete Verantwortung heisst …» | «Sie können einen eigenen Fehler anerkennen, ohne die ganze Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» | «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» |
| Antwort auf «Ich tue nicht genug.» | «Behandlung und Genesung müssen Sie nicht allein tragen.» | «Für Behandlung und Genesung sind Sie nicht verantwortlich.» |
| Absatz nach den fünf Sätzen | «Sie müssen die Erkrankung nicht heilen und weder Behandlung noch Genesung allein tragen.» | «Sie müssen die Erkrankung nicht heilen und sind weder für die Behandlung noch für die Genesung verantwortlich.» |
| Antwort auf «Wenn ich ein besserer Elternteil gewesen wäre …» | «Belastende Erfahrungen können mitwirken.» | «Belastende Erfahrungen können mitwirken, neben vielen anderen Einflüssen. Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.» |

- **Gleicher Wortlaut wie Etappe 1:** Der letzte Satz der Tabelle folgt `verstehen`, Annahme 3.
- **Prüfe die ganze Seite.** Kein anderer Satz darf sagen, Angehörige trügen einen Teil der Verantwortung für Erkrankung, Behandlung oder Genesung. Fundstellen nennst du in der Selbstprüfung.

## 4. Kinder (P2a-F-2) · `rolle` › `kinder`

1. **Erster Absatz:** «Betreuung, Unterstützung und Sicherheit organisieren Erwachsene.» wird «Betreuung, Unterstützung und Sicherheit müssen Erwachsene organisieren.». Direkt danach folgt der Bestandssatz «Kinder müssen weder Streit schlichten noch Medikamente kontrollieren oder einen Elternteil bewachen.».
2. **«Was Sie tun können»:**
   - Die zwei Sätze «Was Kinder nicht übernehmen müssen, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt». Dort steht auch, wer einspringt, wenn die erste Person ausfällt.» entfallen.
   - An ihre Stelle kommt die Bestandsfrage «Welche zweite erwachsene Person ist erreichbar, wenn die erste ausfällt?».
3. **Letzter Absatz** in dieser Reihenfolge:
   - «Bei Angst, Gewalt oder fehlender Betreuung organisieren Erwachsene Hilfe.»
   - «Bei akuter Gefahr holen Erwachsene sofort Hilfe.»
   - der Verweis im Text (Platzhalter)
   - «Was bei Gewalt oder Bedrohung für Sie und die Kinder wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».»
   - «Eine Fachstelle, die Kinderarztpraxis oder eine Familienberatung können beim Planen unterstützen.»
4. **Abgleich:** Die Zeilen r67, r68, r72 und r736 bekommen den Ort `rolle#kinder` (verschoben, 2a-K). Auf `grenzen` bleibt alles unverändert.

## 5. Kürzen und Umordnen (P2a-F-3)

Umgesetzt werden alle Vorschläge aus `PRUEFBERICHT.md`, «Prüfrunde 2a», Teil C2, in der dort beschriebenen Form.

**`rolle`, Stufe a:** K-R-a1 bis K-R-a7. Bei K-R-a3 gilt der Wortlaut aus Abschnitt 3.

**`rolle`, Stufe b:**

- **K-R-b1:** «Grosse Ausgaben und finanzielle Risiken» und «Plötzliche Entscheidungen» kommen in eine Vertiefung auf `rolle`. Sie ziehen nicht nach `krise`. «Substanzkonsum und riskantes Verhalten» bleibt sichtbar.
- **K-R-b2 (P2a-F-7):** «Innehalten, bevor Sie reagieren» wird ein Satz mit Verweis auf `selbstfuersorge` › «Wenn es gerade zu viel ist» (STOPP). Die vier Schritte entfallen von `rolle`. Im Abgleich stehen sie als «zusammengeführt» mit STOPP.
- **K-R-b3:** «Drei Fragen zur Selbstklärung» kommt als Vertiefung in den Abschnitt `anbieten`.
- **K-R-b4:** «Kleine gute Momente schaffen» kommt in eine Vertiefung.
- **K-R-b5:** Der Absatz zu den gemischten Gefühlen in `an-grenzen` wird ein Satz mit Verweis auf `verstehen` › «Was Angehörige erleben können». Die Liste «Mögliche Reaktionen auf anhaltende Belastung» bleibt sichtbar.

**`selbstfuersorge`, Stufe a:** K-S-a1 bis K-S-a8.

**`selbstfuersorge`, Stufe b:**

- **K-S-b1:** Die vier Absätze aus «Wenn der Alltag angespannt erlebt wird» werden auf zwei Sätze verdichtet. Die Absicherung «kein typischer Verlauf, nicht aus der Diagnose vorhersagen» bleibt.
- **K-S-b2:** «Langfristig für sich sorgen» kommt in eine Vertiefung. Der Satz zur ärztlichen oder psychotherapeutischen Abklärung bleibt sichtbar.
- **K-S-b3:** «Je nach Ihrer Situation» kommt in eine Vertiefung.
- **K-S-b4:** Die Übung in vier Schritten kommt mit ihrem Beispiel in eine Vertiefung. «Was Sie tun können» verweist darauf. Der Schutzsatz bleibt sichtbar.

**Ziel:** Im Lesefluss etwa 2640 Wörter auf `rolle` und 2170 auf `selbstfuersorge`. Melde die Zahlen vorher und nachher (`kennzahlen.mjs` und die Zählweise der Prüfrunde, C1). Bei mehr als 10 % Abweichung nennst du den Grund.

## 6. Weitere Punkte

- **Schutzsatz (P2a-F-4):** In `selbstfuersorge` › `eigenes-leben` steht direkt vor dem Verweis im Text «Bei Gefahr hat Schutz Vorrang.».
- **Verweis bei Schuld (P2a-F-8):** In `rolle` › `schuld` lautet der Verweissatz «Warum Angehörige nicht schuld sind, erklärt die Seite «Verstehen» im Abschnitt «Häufige Annahmen – und was realistischer ist».». Er verlinkt `verstehen.html#mythen`.
- **DBT (P2a-F-9):** Der Zusatz bleibt. Im Abgleich steht s213 als «zusammengeführt», mit `glossar.md` Z. 108 als zweiter Quelle.
- **Satz im Abendbild:** «Vielleicht ruft sie gleich an.» wird überall «Vielleicht kommt gleich eine Nachricht.». Das gilt für die Szene, `p.puk-sr` und den Plan (P2a-T-2).
- **Vertiefung «Ein freier Abend» (P2a-S-4):** «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Ständige Bereitschaft ist keine Pflicht, und wer sie spürt, macht nichts falsch.»
- **Lage der Abbildungen (P2a-V-1):**
  - «Ein Stück Weg» steht direkt nach dem ersten Absatz von `anbieten`.
  - «Ein freier Abend» steht direkt nach dem ersten Absatz von `kraft`.
  - Quellenzeilen stehen am Ende des Abschnitts.
- **«Ein Stück Weg» verfeinern (P2a-V-2):**
  - Die Wegkanten berühren die Köpfe nicht mehr.
  - Eine leichte Schrittstellung zeigt, dass beide gehen.
  - Die Arme bleiben bei 360 px vom Körper getrennt sichtbar.
  - **Fest bleibt:** zwei Menschen nebeneinander, von hinten, gleichwertig, niemand führt oder trägt den anderen, der Weg führt in die Ferne.
  - Nur Profil-Klassen, keine Hexwerte. Schaue bei 1280 und 360 px nach.
- **«Ein freier Abend» (P2a-V-3):** Die Zeichnung bleibt unverändert, auch der Dampf.
- **Seitennamen in Verweisen (P2a-W2-1):** wie die Navigation, also «Grenzen» statt «Grenzen setzen» und «Ihre Rolle» statt «Ihre Rolle klären».
- **Begriffe (P2a-W2-5):**
  - «Anspannung» statt «Alarm», wo der Satz bleibt.
  - «gemischte Gefühle» statt «zwiespältige Gefühle».
  - «… wann eine Pause möglich ist» (`mehrere`) bekommt einen Zusatz, der sagt, welche Pause gemeint ist.
- **Klares Subjekt (P2a-S-2):**
  - «Manche sind angespannt …» und «Viele wollen helfen …» statt «Sie …».
  - In `selbstfuersorge` › `unterstuetzung` stehen die vier Aussagesätze als Aufzählung unter «Vielleicht merken Sie:».
- **Abgleich nachführen (P2a-W1-4):** r145, r458, r655, s213 und s65.

## 7. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: wie bisher 13 blockierend (2 × `visual-approval`, 10 × `placeholder-approval`, 1 × `review-report`)
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Bildschirmfotos:** beide Abbildungen und jede neue Vertiefung bei 1280 und 360 px, ansehen. Prüfe dazu:
  - kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom
  - Tastatur und Fokus bei den Vertiefungen
  - die Druckansicht: Vertiefungen werden vollständig gedruckt
- **Selbstprüfung** in `PRUEFBERICHT.md`, nur im Abschnitt «Selbstprüfung der bauenden Sitzung». Setze einen Block «Korrektur 2a-K» über den Block von 2a. Er enthält:
  - Stand je Punkt der Abschnitte 3 bis 6, mit Beleg
  - Wörter vorher und nachher je Seite und Abschnitt
  - die vollständige Liste **«Neue Sätze zur Freigabe»** für beide Seiten und `index`, im neuen Stand, mit Ort. Darin auch die Sätze aus den Abschnitten 3, 4 und 6, der DBT-Zusatz und der Verweissatz zur Startseite (s65). Diese Liste ist die Grundlage für die Freigabe durch die Fachstelle.
- **Keine Änderung** an den Seiten der Etappe 1 und an `index` (`git diff` zeigt nichts).
- Der Pull Request bleibt Entwurf.
