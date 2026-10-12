# Auftrag · Borderline-Website, Etappen 2c und 3-1 · letzte Anpassungen und Freigabe eintragen

Stand 12.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Grundlage:** Stand `55e98cb`. Er enthält die Korrekturen 2c-K und 3-1-K. Beide sind nachgeprüft (Abschnitt «Nachprüfung 2c-K und 3-1-K» in `PRUEFBERICHT.md`): Sie sind im Wortlaut der Aufträge umgesetzt, und die Liste «Neue Sätze zur Freigabe» hat keine Lücke.
- **Entscheide der Fachstelle vom 12.10.2026:**
  - **Freigabe Etappe 2c als Ganzes:**
    - die Seiten `genesung`, `unterstuetzung`, `diagnose` und `behandlung`
    - die zwei Einstiege auf `index`
    - die Abbildung «Ein neuer Trieb» (`v-ge-trieb`, P2c-F-2 a, NK-F-2)
    - alle neuen Sätze (P2c-F-17)
  - **Freigabe Etappe 3-1 als Ganzes:**
    - die Seiten `fragen`, `quellen`, `ueber` und `impressum-datenschutz`
    - die Weiterleitungen in `_redirects`
    - alle neuen Sätze
    - **Vorbehalt:** Für `impressum-datenschutz` gilt die Freigabe unter Vorbehalt der rechtlichen Prüfung (Abschnitt 6 a).
  - **Für beide Freigaben gilt:** Massgebend ist der Stand nach diesem Auftrag. Die Listen «Neue Sätze zur Freigabe» (Korrektur 2c-K und Korrektur 3-1-K) dienen als Übersicht.
  - **Fragen der Nachprüfung, alle wie empfohlen:**
    - **NK-F-1:** Die neuen Sätze auf den freigegebenen Seiten sind freigegeben, so wie sie stehen (Liste 3-1-K Nr. 549 bis 561):
      - V1 und V2 auf `index`
      - der Verweissatz auf `quellen` im Quellenblock der Themenseiten
      - «Linehan (2015)» auf `grenzen`
      - V1 bleibt an seinem Ort.
    - **NK-F-2:** «Ein neuer Trieb» ist freigegeben.
    - **NK-F-3:** Bei «Schluss mit dem Eiertanz» bleibt die Angabe «Balance Buch + Medien Verlag, 2014». Die Fachstelle bestätigt Verlag, Auflage und Jahr am Buch oder auf der Verlagsseite vor R3.
    - **NK-F-4:** «Versorgungssetting» wird ersetzt (Abschnitt 3 a).
    - **NK-F-5:** «Sie wollen helfen …» wird ersetzt (Abschnitt 3 b).
    - **NK-F-6:** «holen Sie sofort Hilfe» bleibt zweimal hintereinander stehen.
    - **NK-F-7:** Für `ueber` und `impressum-datenschutz` gilt der Richtwert von 900 Wörtern nicht.
    - **NK-F-8:** Die Angaben zu den Protokollen beim Betrieb kommen in die offene rechtliche Prüfung.
  - **P2c-F-16, wie empfohlen:** Die 13 Verweissätze von den freigegebenen Seiten auf die Seiten der Etappe 2c kommen jetzt (Abschnitt 4).
  - **Befunde der Nachprüfung, wie vorgeschlagen:**
    - NK31-1 (Abschnitt 3 d)
    - NK31-2 und NK31-4 (Abschnitt 6 c)
    - NK31-3 (Abschnitt 3 c)
    - NK2c-1 (Abschnitt 5)
    - NK2c-2 (Abschnitt 3 e)
- **Geändert werden nur:**
  - die Stellen in den Abschnitten 3 und 4
  - `borderline.css`, soweit Abschnitt 3 d und 3 e es verlangen
  - `site.config.json` (Abschnitt 5)
  - der Abgleich
  - `UMBAUPLAN.md` (Abschnitt 6 d)
  - im Prüfbericht die Teile aus Abschnitt 6

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen. Sonst ändert sich kein Wortlaut.
- **Verweissätze:**
  - Der Linktext ist der Titel der Zielstelle.
  - Kein Verweissatz steht zwischen einer Handlungsanleitung und dem Verweis im Text.
  - Keiner steht in einer Abbildung oder Vertiefung.
  - Passt der genaue Ort nicht (z. B. mitten in einer Liste), setzt du den Satz ans Ende des nächsten Absatzes und begründest das in der Selbstprüfung.
- **CSS:** nur in `borderline.css`, nur mit Tokens, keine `style`-Attribute, kein Hexwert.
- **Abgleich:**
  - Jede betroffene Zeile bekommt einen Status mit «(2c-3-1-F)», z. B. «neu (Verweis, 2c-3-1-F)», und eine Bemerkung mit der Nummer der Frage oder des Befunds.
  - Neue Werte erklärst du in `abgleich/README.md`.
  - `node abgleich/pruefe-abgleich.mjs` meldet 0 ohne Fundstelle.
- **Prüfbericht:**
  - Der Eintrag in Abschnitt 6 a ist der Eintrag der Fachstelle. Du überträgst ihn unverändert, im Auftrag der Fachstelle.
  - Keine Prüfstufe wird «erledigt».

## 3. Anpassungen

### a) `diagnose` › `abklaerung`, Vertiefung «Wie die Diagnose beschrieben wird» (NK-F-4)

| bisher | neu |
| --- | --- |
| «Diese Vorgabe bedeutet nicht, dass ICD-10-GM, DSM-5-TR und ICD-11 inhaltlich gleich aufgebaut sind oder in jedem Versorgungssetting identisch verwendet werden.» | «Diese Vorgabe bedeutet nicht, dass ICD-10-GM, DSM-5-TR und ICD-11 inhaltlich gleich aufgebaut sind oder in jedem Behandlungsrahmen identisch verwendet werden.» |

Danach steht auf `diagnose` weder «Setting» noch «Versorgungssetting».

### b) `ueber` › `warum` (NK-F-5)

| bisher | neu |
| --- | --- |
| «Sie wollen helfen und fühlen sich zugleich hilflos, sie lieben und sind erschöpft, sie verstehen nicht, was geschieht, und haben Angst, etwas falsch zu machen.» | «Viele wollen helfen und fühlen sich zugleich hilflos, sie lieben und sind erschöpft, sie verstehen nicht, was geschieht, und haben Angst, etwas falsch zu machen.» |

### c) `quellen`, LeDoux (1996) (NK31-3)

| bisher | neu |
| --- | --- |
| «Simon und Schuster, New York.» | «Simon & Schuster, New York.» |

### d) Überlauf auf `verstehen` bei 200 % Schrift (NK31-1)

- **Befund:** Bei 1280 px und 200 % Schrift ragt die Bezeichnung «Es kann wieder ruhiger werden.» der Anspannungskurve (`v-vs-anspannung`, `p.bl-fig__label`) 48 px über den rechten Rand. Das ist so seit `7ee24ba`, dem Merge von Profil 2026.10.1.
- **Ändern:** nur eine Regel in `borderline.css`, zum Beispiel:
  - Die Bezeichnungen der Kurve ab einer Breite in `em` ausblenden und auf die Liste darunter umschalten.
  - Die Container-Abfrage `max-width: 960px` in `em` fassen.
- **Nicht ändern:** Wortlaut, Pfade und Bezeichnungen. Die Abbildung bleibt freigegeben, weil sich am Inhalt nichts ändert.
- **Prüfen:** 200 % Schrift bei 1280 und 1440 px auf **allen** Seiten, nicht nur auf `verstehen`, je mit «Standard» und «kontrast». Danach ist der Überlauf überall 0 px.

### e) Randlinie in «Ein neuer Trieb» (NK2c-2)

- **Ändern:** In der Szene bekommt der Satz unter «Weniger hilfreich» dieselbe Linie wie «Weniger hilfreich» in der Gegenüberstellung `.puk-say` desselben Abschnitts, also grau und dünner. Die Regel kommt in `borderline.css`, mit Tokens.
- **Nicht ändern:** Wortlaut, Bezeichnungen, Zeichnung und Kurzbeschreibung.
- **Ansehen:** bei 1280 und 360 px, Standard und «kontrast».

## 4. Verweissätze auf den freigegebenen Seiten (P2c-F-16)

| Nr. | Seite › Ort | Satz (neu) |
| --- | --- | --- |
| 1 | `verstehen` › `mythen`, Annahme «Borderline ist nicht behandelbar.», nach «Viele erleben über Jahre deutliche Besserung, Remission (die Kriterien sind eine Zeit lang nicht mehr erfüllt) oder umfassendere Genesung.» | «Was Langzeitstudien zeigen, steht auf der Seite «Genesung» im Abschnitt «Was die Forschung zeigt».» |
| 2 | `verstehen` › `mythen`, Annahme «Borderline ist dasselbe wie Trauma.», nach «Einzelne Merkmale können sich überschneiden, und die Diagnosen können zusammen auftreten.» | «Welche Begleiterkrankungen vorkommen können, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Begleiterkrankungen».» |
| 3 | `verstehen` › `borderline`, nach «Die Diagnose allein sagt nichts darüber, ob von einem Menschen Gefahr ausgeht.» | «Wie eine Abklärung abläuft und was eine Diagnose für Sie bedeuten kann, steht auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Der Weg zur Abklärung».» |
| 4 | `beziehungen` › `was-hilft`, am Ende des Abschnitts, nach dem Verweissatz aus der Freigabe 2b | «Woran sich Veränderung zeigen kann, steht auf der Seite «Genesung» im Abschnitt «Veränderung verläuft unterschiedlich».» |
| 5 | `beziehungen` › `verantwortung`, nach «Angehörige dürfen zur Veränderung beitragen. Sie sind aber keine Therapeutinnen oder Therapeuten.» | «Was die Behandlung leisten kann und was Ihre Rolle darin ist, steht auf der Seite «Behandlung und Ihre Rolle darin».» |
| 6 | `rolle` › `anbieten`, nach der Abbildung, nach «Sie müssen diese Beiträge nicht alle leisten. Ihre eigenen Bedürfnisse, Grenzen und Möglichkeiten zählen ebenfalls.» | «Was Genesung beeinflussen kann, steht auf der Seite «Genesung» im Abschnitt «Was Genesung beeinflussen kann».» |
| 7 | `rolle` › `anbieten`, «Was nicht Ihre Aufgabe ist», nach «Therapie, Psychiatrie und Beratung bieten Fachpersonen an.» | «Wer in der Behandlung was beitragen kann, steht auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Wer was beitragen kann».» |
| 8 | `rolle` › `kinder`, nach «Eine Fachstelle, die Kinderarztpraxis oder eine Familienberatung können beim Planen unterstützen.» | «Bücher für Kinder stehen auf der Seite «Unterstützung finden» im Abschnitt «Bücher für Angehörige».» |
| 9 | `selbstfuersorge` › `beratung`, Begriff «Austausch mit anderen Angehörigen», nach «Selbsthilfegruppen und Beratungsstellen bieten Orientierung, praktische Tipps und das Gefühl, nicht allein zu sein.» | «Angebote für Beratung und Austausch stehen auf der Seite «Unterstützung finden».» |
| 10 | `selbstfuersorge` › `warnsignale`, nach «Dabei können auch andere Ursachen abgeklärt werden.» | «Wenn Sie sich fragen, ob Sie selbst erkrankt sind, steht mehr dazu auf der Seite «Diagnose und Begleiterkrankungen» im Abschnitt «Wenn noch keine Diagnose gestellt ist».» |
| 11 | `krise` › `danach`, direkt nach «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | «Weitere Angebote für Angehörige stehen auf der Seite «Unterstützung finden».» |
| 12 | `krise` › `danach`, «Für die betroffene Person», nach «Dabei kann auch geklärt werden, welche Rolle Sie freiwillig übernehmen können.» | «Wie Sie den Kontakt zum Behandlungsteam klären können, steht auf der Seite «Behandlung und Ihre Rolle darin» im Abschnitt «Kontakt zum Behandlungsteam».» |
| 13 | `index` › `beratung`, direkt nach «Kontakt: angehoerigenarbeit@pukzh.ch» und vor V2 («Wer die Website herausgibt …») | «Weitere Beratung und Austausch mit anderen Angehörigen stehen auf der Seite «Unterstützung finden».» |

- **Herkunft:**
  - Nr. 1, 4, 6, 8, 9, 11 und 13 sind die Vorschläge 2c-1 Nr. 1 bis 7.
  - Nr. 2, 3, 5, 7, 10 und 12 sind die Vorschläge 2c-2 Nr. 1 bis 6.
  - Zu Nr. 1 und 2 sind im Abgleich die Zeilen `verstehen.md` Nr. 112 und 127 nachzuführen. Dort stand der Verweis im Bestand.
  - Nr. 5 betrifft die vorgemerkte Zeile `beziehungen.md` Nr. 208.
- **Links:**

  | Ziel | Nummern |
  | --- | --- |
  | `genesung.html#forschung` | 1 |
  | `genesung.html#verlauf` | 4 |
  | `genesung.html#einfluesse` | 6 |
  | `diagnose.html#begleiterkrankungen` | 2 |
  | `diagnose.html#abklaerung` | 3 |
  | `diagnose.html#ohne-diagnose` | 10 |
  | `behandlung.html` (ohne Anker) | 5 |
  | `behandlung.html#rollen` | 7 |
  | `behandlung.html#kontakt` | 12 |
  | `unterstuetzung.html#buecher` | 8 |
  | `unterstuetzung.html` (ohne Anker) | 9, 11, 13 |

## 5. `site.config.json`

- **«Ein neuer Trieb»:** `visualPlan` › `v-ge-trieb` › `approvalStatus`: «ausstehend» → «freigegeben».
- **`v-be-therapieformen` (NK2c-1):**

  | Feld | bisher | neu |
  | --- | --- | --- |
  | `goal` | «Die wichtigsten Therapieformen, Settings und die Regeln zu Medikamenten kennen» | «Die wichtigsten Therapieformen, die drei Rahmen der Behandlung und die Regeln zu Medikamenten kennen» |
  | `reason` | «Settings als Begriffsliste, …» | «Die drei Rahmen als Begriffsliste, …» |

  In `reason` ändert sich nur dieses Wort, der Rest bleibt.
- **`v-un-beratung` › `reason` (NK2c-1):**

  | bisher | neu |
  | --- | --- |
  | «Kontakt und Bedingungen der Fachstelle sind auf `index` › `beratung` verlinkt, nicht wiederholt.» | «Kontakt und Bedingungen der Fachstelle sind auf `index` › `beratung` verlinkt; wiederholt ist nur, dass die Beratung der Fachstelle nichts kostet und nicht an Krankenkassen weitergegeben wird (P2c-F-14).» |

- **Plan-Zeilen:** Nachführen, wo sich durch Abschnitt 3 oder 4 etwas ändert, z. B. ein Verweissatz, den eine `reason` aufzählt.
- **Text-Zeilen:** Die übrigen Zeilen behalten «ausstehend», wie auf den Seiten der Etappen 1 bis 2b.

## 6. Prüfbericht und Plan

### a) Eintrag der Fachstelle

Setze diesen Unterabschnitt unverändert ans Ende von «## Fachliche Freigabe der Fachstelle», direkt nach «### Etappe 2b» und vor «## Nachprüfung 2c-K und 3-1-K»:

```
### Etappen 2c und 3-1

**12.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`FREIGABE-ETAPPE-2C-3-1.md`).

- **Etappe 2c ist fachlich freigegeben:** die Seiten `genesung` («Genesung»), `unterstuetzung` («Unterstützung finden»), `diagnose` («Diagnose und Begleiterkrankungen») und `behandlung` («Behandlung und Ihre Rolle darin») als Ganzes und auf `index` die zwei Einstiege, im Stand nach der Korrektur 2c-K und den Anpassungen aus `FREIGABE-ETAPPE-2C-3-1.md`.
- **Etappe 3-1 ist fachlich freigegeben:** die Seiten `fragen` («Häufige Fragen»), `quellen` («Quellen und Begriffe»), `ueber` («Über diese Website») und `impressum-datenschutz` als Ganzes und die Weiterleitungen in `_redirects`, im Stand nach der Korrektur 3-1-K und den Anpassungen aus `FREIGABE-ETAPPE-2C-3-1.md`. Für `impressum-datenschutz` gilt die Freigabe unter Vorbehalt der rechtlichen Prüfung (unten).
- **Die neuen Sätze sind freigegeben (P2c-F-17, Etappe 3-1):** alle Sätze der Listen «Neue Sätze zur Freigabe» der Blöcke «Korrektur 2c-K» und «Korrektur 3-1-K», im nachgeführten Stand. Die Listen sind die Übersicht zur Freigabe als Ganzes.
- **Die Abbildung «Ein neuer Trieb» (`v-ge-trieb`) ist fachlich freigegeben (P2c-F-2 a, NK-F-2).**
- **Sätze auf freigegebenen Seiten (NK-F-1, P2c-F-16):** Freigegeben sind V1 und V2 auf `index`, der Verweissatz auf `quellen` im Quellenblock der Themenseiten, «Linehan (2015)» auf `grenzen` und die 13 Verweissätze auf die Seiten der Etappe 2c. Die Freigaben der Etappen 1 bis 2b gelten für diese Seiten weiter.
- **Alle Fragen sind entschieden:** P2c-F-1 bis -17, P2c2-F-1 bis -15, Z31-F-1 bis -22 (bis auf die rechtlichen Punkte), die Fragen der Selbstprüfungen 2c und 3-1 und NK-F-1 bis -8 der Nachprüfung 2c-K und 3-1-K.
- **Offen bis vor R3:**
  - die rechtliche Prüfung von Impressum und Datenschutz: Verantwortlichkeit nach DSG und DSGVO, Angaben zu Netlify, Protokolle beim Betrieb (S-Nr. 5 und 6, Z31-F-9, Z31-F-19, NK-F-8)
  - die Bestätigung der Ausgabe von «Schluss mit dem Eiertanz» am Buch (NK-F-3)
- **Weiter offen vor der Veröffentlichung:**
  - Etappe 3-2
  - die Schlussprüfungen W2, S, Visualisierungs-Check, Bedienung und W3; darin auch eine unabhängige Prüfung der Anpassungen aus `FREIGABE-ETAPPE-2C-3-1.md`
  - reale Screenreader-Läufe, Hardwaretastatur und Touch
  - danach R1 bis R3
```

### b) Statustabelle

Der Status bleibt in allen Zeilen «offen».

- **Zeile «W1 Fachliche Prüfung»:**
  - Spalte «Geprüft durch»: ergänze «; Fachstelle (Freigabe Etappen 2c und 3-1)».
  - Spalte «Ergebnis»: ergänze am Ende «Etappen 2c (`genesung`, `unterstuetzung`, `diagnose`, `behandlung`, Einstiege auf `index`) und 3-1 (`fragen`, `quellen`, `ueber`, `impressum-datenschutz`, `_redirects`) fachlich freigegeben am 12.10.2026; rechtliche Prüfung von Impressum und Datenschutz offen.».
- **Zeile «Visualisierungs-Check»:** In der Spalte «Ergebnis» ergänzt du am Ende «Etappe 2c: «Ein neuer Trieb» fachlich freigegeben (Fachstelle, 12.10.2026).».

### c) Selbstprüfung

Setze einen Block «Freigabe 2c und 3-1 eintragen» über den Block «Korrektur 3-1-K». Er enthält:

- «umgesetzt, Beleg» je Punkt der Abschnitte 3 bis 6
- die Messungen aus 3 d (alle Seiten) und die Fotos aus 3 e
- die 13 Verweissätze mit Ort, Satz davor und Linkziel
- **NK31-2:** die Richtigstellung der zwei Angaben im Block «Korrektur 3-1-K»:
  - `grenzen` +13 statt +12
  - die Gründe bei `quellen` › `forschung`

  Ändere dafür nur diese zwei Stellen. Vermerke dort «berichtigt mit der Freigabe 2c und 3-1».
- **NK31-4:** In den Listen 3-1-K Nr. 110 und 2c-K Nr. 342 lautet die Art «Bedingung im Wortlaut von `krise` › `belastung`, Handlung nach Auftrag».
- **Die Listen «Neue Sätze zur Freigabe»** führst du um die Sätze aus den Abschnitten 3 a, 3 b und 4 nach.

### d) `UMBAUPLAN.md`

- **Abschnitt 2:** Für `ueber` und `impressum-datenschutz` gilt kein Richtwert (NK-F-7).
- **Stand:** Etappen 2c und 3-1 freigegeben, als Nächstes Etappe 3-2.

## 7. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend, ein Hinweis weniger als bisher (`visual-approval` entfällt)
  - `node tools/gate.mjs --selftest`: 65/65
  - `node tools/gate.mjs --production`: nur noch `review-report` blockierend, dazu der Hinweis `siteUrl`. Das ist erwartet.
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Prüfen im Browser:**
  - kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom und 200 % Schrift auf allen Seiten
  - Tastatur und Druck auf den Seiten mit neuem Verweissatz
  - «Ein neuer Trieb» wie in 3 e
- **Links:** Alle 13 neuen Links zeigen auf ein vorhandenes Ziel, und der Linktext gleicht dem Titel.
- **Freigegebene Seiten:**
  - `git diff --word-diff 55e98cb` zeigt auf `verstehen`, `beziehungen`, `rolle`, `selbstfuersorge`, `krise` und `index` nur die Verweissätze aus Abschnitt 4.
  - Auf `grenzen` und `kommunizieren` zeigt er nichts.
  - In `borderline.css` stehen nur die Regeln aus 3 d und 3 e.
- **Keine Telefonnummern, keine `tel:`-Links**, keine `style`-Attribute.
- **Pull Request:**
  - Entwurf gegen `borderline-umbau`.
  - Führe die Beschreibung von PR #10 nach: Etappen 2c und 3-1 freigegeben, als Nächstes Etappe 3-2 und die Schlussprüfungen.
- **Melde das Ergebnis je Abschnitt mit Beleg.**
