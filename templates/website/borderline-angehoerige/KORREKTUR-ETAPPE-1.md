# Korrekturauftrag · Borderline-Website, Etappe 1

Stand 09.10.2026. Grundlage: `PRUEFBERICHT.md` (zwei Prüfsitzungen, Befund-IDs wie dort) und `PRUEFBERICHT-BELEGE-2026-10-09.md`. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`, nachdem das Profil-Update vom 09.10.2026 (Build r4-4, Patch `update-2026-10-09.patch`) dort übernommen ist.

Dieser Auftrag ist für die **bauende Sitzung**. Danach prüft wieder eine eigene Sitzung.

## 1. Entscheide der Fachstelle (09.10.2026)

| Frage | Entscheid |
| --- | --- |
| Absicherungen bei Handlungshinweisen | **Dürfen entfallen.** Bei Hinweisen, was Angehörige tun können, steht die Aussage direkt («Eine Pause hilft oft mehr als weitere Argumente»). Absicherungen bleiben bei Aussagen über die betroffene Person, über Ursachen, Diagnose und Verlauf. |
| Angebot der Fachstelle | **Kostenlos, unter Schweigepflicht, für alle Angehörigen.** Laut Factsheet der Fachstelle (05.04.2024): Angehörige sind alle Bezugspersonen innerhalb oder ausserhalb der Familie; eine Behandlung der betroffenen Person in der PUK ist nicht nötig; Beratung auch ohne Vollmacht; telefonisch oder vor Ort, einzeln oder in Gruppen. Keine Telefonnummer (Profil). |
| Ansatzpunkt der Bedeutungsschleife | an Claude übertragen → Abschnitt 2, V-1 |
| Was nach der Suizidfrage folgt | an Claude übertragen → Abschnitt 2, W1-1; Wortlaut des Verweises im Text von der Fachstelle geprüft (09.10.2026) |
| Still entfallene Aussagen | an Claude übertragen → alle fünf wieder aufnehmen (Abschnitt 2, W1-3) |

**Wortlaut Beratung** (`index` › Beratung; auf `grenzen` nur ein Satz mit Link dorthin):

> Die Fachstelle Angehörigenarbeit der PUK berät alle Angehörigen – Familie, Partnerinnen und Partner, Freundinnen und Freunde –, auch wenn die betroffene Person nicht in der PUK behandelt wird und ohne ihre Vollmacht. Die Beratung ist kostenlos und untersteht der Schweigepflicht. Sie findet vor Ort oder telefonisch statt, einzeln oder in Gruppen. Kontakt: angehoerigenarbeit@pukzh.ch

## 2. Korrekturen

### Fachlich (W1)

- **W1-1 · Suizidfrage mit nächstem Schritt.** Neue Profilregel «Verweis im Text» (README, Abschnitt «Zuständigkeit»):
  - `site.config.json` › `responsibility.inline` unverändert aus dem Starter übernehmen: Wortlaut von der Fachstelle am 09.10.2026 fachlich geprüft («Sorgen Sie sich akut um das Leben oder die Sicherheit eines Menschen, holen Sie sofort Hilfe: ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei.»).
  - `verstehen` › Annahmen: Die Einordnung von Annahme 6 in der Figur sagt nur noch, dass direktes Nachfragen nach heutigem Wissen keine Suizidgedanken auslöst. Die Handlungsanleitung steht im Abschnittstext, nicht in der Figur: ruhig und direkt fragen, dann der Platzhalter `<p data-responsibility-inline></p>`, dann «Bleiben Sie bei der Person, soweit dies für Sie sicher möglich ist.» (Satz aus `lmk`).
  - `beziehungen` › Verantwortung: nach dem Satz zu Suizidgedanken und Selbstverletzung der Platzhalter.
  - `grenzen` › Schutz, Schritt 2: statt «wenden Sie sich an professionelle Hilfe» der Platzhalter.
  - `sensitiveTopics` prüfen (Gate). Höchstens ein Platzhalter je Abschnitt.
- **W1-2 · Brücke:** Kernaussage «Kontakt braucht Geländer: Grenzen können Kontakt schützen.» Die Vertiefung behält «Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden.»
- **W1-3 · Still entfallene Aussagen wieder aufnehmen**, je an der Stelle aus dem Bestand:
  - «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» (siehe W1-1)
  - «Beide können zu Nähe, Klärung und Veränderung beitragen.» (`beziehungen` › Verbindung)
  - «Etwas stark mitzufühlen, zutreffend zu verstehen und hilfreich zu reagieren sind verschiedene Fähigkeiten.» (`beziehungen` › Einflüsse, vor dem Satz zur Empathie)
  - «Es heisst, dass Sie sich an tragfähigen Absprachen orientieren.» (`grenzen` › Dranbleiben)
  - «Einzelne Merkmale können sich überschneiden.» (`verstehen` › Annahme 5)
  
  Danach den Abgleich **Satz für Satz** für alle vier Seiten nachführen: Jeder entfallene Satz steht mit Grund in `abgleich/`, auch innerhalb eines Abschnitts mit Status «übernommen».
- **W1-4 · Angebot:** Wortlaut aus Abschnitt 1 auf `index`; auf `grenzen` › Kontakt nur noch ein Satz mit Link auf `index.html#beratung`.
- **W1-6 · Quellen:**
  - Brücke: Bezugspunkte wie im Handout (Hoffman et al. 2005; NICE CG78; Linehan; Mason und Kreger; Stand by You / Sotomo); Kennzeichnung «Eigene didaktische Darstellung».
  - `grenzen` › Sätze: Die neue Zuschreibung an Mason/Kreger und Linehan entfällt (im Bestand ohne Quelle).
- **W1-7 · DEAR:** «in fester Reihenfolge» entfällt; «Vier Schritte helfen, ein Anliegen vorzubereiten.» `beziehungen`: «sollte weder alle Regulation übernehmen» wie im Bestand.
- **Opferhilfe** (`grenzen` › Schutz, Punkt 4): mit der Website der Opferhilfe Schweiz verlinken (`https://www.opferhilfe-schweiz.ch/de/`, Adresse vor dem Setzen prüfen), ohne Nummer.

### Visualisierungen

- **V-1 · Ansatzpunkt bei Station 5 «Wirkung».** Text: Statt sich weiter zu verteidigen, das Gefühl anerkennen, nach der Deutung fragen und die eigene Grenze halten – «Ich kann verstehen, weshalb diese Situation für dich schwierig war. Und ich darf ernst nehmen, was dein Verhalten bei mir ausgelöst hat.» (Bestand). `entryPoint` im Plan nachführen. Der Satz «dein Schweigen» entfällt (passt nicht zur Absage).
- **V-3 · Wer handelt wo:**
  - Jede Station nennt, wer handelt: Station 1 und 5 «Schwester», Station 2 bis 4 «betroffene Person».
  - «Zwei Sichten» bezieht ihre Schritte auf die Stationen: «Station 1 · Absage», «Station 4 · Nachrichten», «Station 5 · Verteidigung», «Neuer Anlass · Gespräch endet».
- **V-2 · Pendel als Pendel:**
  - `verstehen` › Bewertungen wird Muster A (`figure`): ein Pendel mit Aufhängepunkt und Bogen.
  - Die Ruhelage in der Mitte heisst «Differenziertere Sicht». Zwei ausgelenkte Lagen links und rechts heissen «Sehr positive Bewertung» und «Sehr negative Bewertung», mit der Beschriftung «unter Stress grösserer Ausschlag».
  - Die Figur zeigt, dass das Pendel zurückschwingt.
  - Planzeile: `understood` neu, keine gleiche Form wie das Anspannungs-Kontinuum.
- **V-4 · Anspannung:**
  - Achse beschriften: «Anspannung im Gespräch – bei einer oder beiden Personen».
  - Im Alarm-Modus «Rückzug oder Schweigen» als mögliche Form nennen.
  - «Nicht von aussen sicher ablesbar» in den Kurztext.
  - Kurztext: «gleitende Achse, die Bereiche sind Orientierung, keine Stufen».
- **V-5 · Vier Arten von Grenzen als Text** (`format: text`, Begründung: vier gleichrangige Bereiche ohne Beziehung untereinander).
- **V-6 · Annahmen:**
  - Die Einordnung ist die Hauptaussage. Die Annahme steht kleiner, als «Verbreitete Annahme: «…»».
  - Keine gestrichelte Linie für die gesicherte Aussage.
  - Annahme 7 entfällt, weil `beziehungen` › Einflüsse dasselbe sagt (W2-4). Dort bleibt sie.
- **V-7 · Brücke:**
  - Beide Ufer zeichnen und beschriften («Sie», «die andere Person»).
  - Fahrbahn, Geländer und Pfeiler direkt im Bild beschriften statt über Ziffern; die Liste bleibt als Erklärung.
- **V-8 · Einflüsse:**
  - Höchstens fünf Einträge, je mit Station.
  - «Dass etwas anderswo gelingt …» bleibt hier, Annahme 7 entfällt (siehe V-6).
  - Als `dl` (vom Profil jetzt gestaltet).
- **V-9 · Kurztexte** erklären den Inhalt, nicht die Zeichnung («Die Achse zeigt …» → was Angehörige daraus mitnehmen).
- **V-12 · DEAR:** siehe W1-7; die Erklärung und der Beispielsatz werden je Schritt sichtbar getrennt.

### Aufbau und Sprache (W2, S)

- **W2-1:** In `pages` steht `rolle` vor `grenzen`.
- **W2-2 · Umfang.** Richtwerte neu, inklusive Figurentexte:
  - `verstehen` höchstens 1300 Wörter, `beziehungen` höchstens 1100, `grenzen` höchstens 1500.
  - Gemessen und berichtet wird an der alten Seite allein, nicht an Seite plus Handouts.
  - Hebel: W1-1-Entscheid (Absicherungen), S-2, W2-4.
  - `grenzen` › Sätze: drei Beispiele mit `.puk-say`; die übrigen sind für `kommunizieren` (Etappe 2) im Abgleich vorgemerkt.
  - `grenzen` › Rollen: als kurzer Absatz.
- **W2-3:** Gegenüberstellungen «eher problematisch / eher hilfreich» mit `.puk-say` (Leitlinie 06, Abschnitt «Formulierungsbeispiele»).
- **W2-4 · Wiederholungen:**
  - Der Beratungsabsatz steht nur auf `index`.
  - Der Hinweis «Schutz vor Gespräch» steht auf `grenzen` höchstens zweimal: im Kopf und im Abschnitt Schutz.
- **W2-5 · Begriffe:**
  - Durchgehend «Anspannung»; «Denk-Modus» und «Alarm-Modus» nur als Namen der Bereiche.
  - Dissoziation, Remission, PTBS und DBT beim ersten Auftreten kurz erklären.
  - Eisberg: Abschnittstext und Figur nennen dieselben Begriffe.
- **W2-6 · Startseite:** Einstiege nach Anliegen der Lesenden formulieren, z. B. «Ich verstehe nicht, warum Gespräche so schnell kippen». Seitentitel und H1 abstimmen.
- **S-1:** Absicherungen nach dem Entscheid in Abschnitt 1 reduzieren; Ziel und Messung im Abgleich berichten (Absicherungen je 100 Wörter, alt und neu, gleiche Zählweise).
- **S-2:** Höchstens ein Semikolon je Absatz; Aufzählungen als Liste; keine Telegrammsätze.
- **S-3:** «Auch die Formel, Menschen mit Borderline reagierten immer schneller, stärker und länger, ist zu pauschal.» entfällt.
- **S-5:**
  - Gesprächsbeispiele unter Angehörigen in «du»: «Was soll ich übernehmen, was möchtest du selbst tun …».
  - Technisch klingende Beispiele laut lesen und natürlicher fassen, ohne den Inhalt zu ändern. Beispiel: «Für Krisen nutzen wir die vereinbarten professionellen Hilfewege.»

### Darstellung (B)

- **B-3:** Station 3 der Schleife bei 360 px nicht versetzt (`borderline.css`).
- B-1, B-2 sind mit dem Profil-Update behoben; nachprüfen.

## 3. Danach

- `node tools/build.mjs` ohne blockierende Befunde, `node tools/gate.mjs --selftest` 50/50.
- Das Produktionsgate blockiert erwartungsgemäss: offene Freigaben und Prüfbericht.
- Selbstprüfung in `PRUEFBERICHT.md`:
  - Visualisierungs-Check als Matrix je Figur (Vorlage im Starter).
  - Wortzahlen und Absicherungsdichte alt (Seite allein) und neu.
  - Je Befund-ID in diesem Auftrag: umgesetzt, wie, mit Beleg.
- Den Prüfbericht der Prüfsitzungen nicht überschreiben; die Selbstprüfung ersetzt nur den Abschnitt «Selbstprüfung der bauenden Sitzung».
- Offen für die Fachstelle (W1) bleiben: Bezugspunkte der Figuren (W1-6) und alle fachlichen Freigaben.
