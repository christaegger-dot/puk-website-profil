# Korrekturauftrag · Borderline-Website, Etappe 2c · nach den Prüfungen 2c

Stand 12.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Zwei unabhängige Prüfungen am Stand `7ee24ba`:** Beide stehen in `PRUEFBERICHT.md`.
  - **Prüfrunde 2c:** Commit `e2ebb1c`, Fragen P2c-F-1 bis -17.
  - **Prüfrunde 2c, zweite Prüfsitzung:** PR #26, Fragen P2c2-F-1 bis -15, Kürzungen K2-B-a1 und -a2.
- **Entscheide der Fachstelle vom 12.10.2026:** Wo beide Prüfungen dasselbe fragen, gilt ein Entscheid für beide Nummern.

  | Thema | Fragen | Entscheid | Abschnitt |
  | --- | --- | --- | --- |
  | Unklare Dringlichkeit auf `behandlung` | P2c-F-1, P2c2-F-1 | Wortlaut von `krise` › `belastung` | 3 a |
  | «Ein neuer Trieb» | P2c-F-2 b und c, P2c2-F-2, P2c2-V-3 | Sätze gekennzeichnet, die Giesskanne entfällt, der Rückschritt wird deutlicher | 4 |
  | Angebotsliste | P2c-F-3, P2c2-F-3 | Kriterium in der Einleitung; HYPE, ipw, Kilchberg und Dachverband nach Abschnitt 3 c | 3 c |
  | Externe Links | P2c-F-3, P2c-F-9 (c), P2c2-F-11 | Die Fachstelle hat am 12.10.2026 alle 12 externen Links aufgerufen, auch die Seite des BAG. Alle Ziele stimmen. | – |
  | Rollen | P2c-F-15, P2c2-F-4 | «Mögliche Beiträge»; Angehörige fünf statt sieben Punkte; Zuordnung bestätigt | 3 d |
  | «eigenständig behandelt» | P2c2-F-5 | «ebenfalls behandelt» | 5 a |
  | Medikamente | P2c-F-4, P2c2-F-10 | Wortlaut des Bestands bestätigt; Schlusssatz «… ärztlichen Fachperson …» | 5 a |
  | Vertiefung in `kontakt` | P2c2-F-14, K2-B-a1 | entfällt, der Beispielsatz kommt in «Beobachtungen mitteilen» | 3 b |
  | Kürzung in `therapieformen` | K2-B-a2 | «Auch strukturierte generalistische Behandlung ist relevant.» entfällt | 3 e |
  | Wohnkanton | P2c-F-10 | Bestandssatz vor dem Verweissatz | 3 a |
  | Zweite Einschätzung ohne Wartefrist | P2c-F-9 (d) | Die Quelle des Kantons Zürich ist geprüft; der Satz bleibt | – |
  | Gruppe für Eltern | P2c-F-11, P2c2-F-12 | Name wie auf der Website der PUK | 6 a |
  | Kinderbuch | P2c-F-12 | «Ein deutschsprachiges Kinderbuch …» | 6 b |
  | Essstörungen auf `diagnose` | P2c-F-13 | (a): bleibt in der Vertiefung, keine Änderung | – |
  | Krankenkasse | P2c-F-14 | Satz auf `unterstuetzung` › `beratung` | 6 c |
  | Sprache | P2c-F-15, P2c2-F-15, P2c2-S-1 bis -6 | alle Vorschläge | 3, 5 b |
  | Bestätigt ohne Änderung | P2c-F-5 bis -9, P2c2-F-6 bis -11 und -13 | Klassifikation, Jugendliche und Einverständnis, Depression und Suizid, Verantwortung, Therapieinhalte, Musterbrief | – |

- **Nicht Teil dieser Korrektur:** Diese Punkte folgen mit der Freigabe 2c, nach der Nachprüfung:
  - die Freigabe der Abbildung (P2c-F-2 a)
  - die Verweise von freigegebenen Seiten (P2c-F-16)
  - die Freigabe der neuen Sätze (P2c-F-17)
- **Geändert werden nur:**
  - `genesung`, `unterstuetzung`, `diagnose` und `behandlung`
  - `borderline.css`, falls nötig
  - `site.config.json` (Plan)
  - der Abgleich
  - im Prüfbericht die Selbstprüfung
- **Unverändert bleiben:** die Seiten der Etappen 1, 2a und 2b und `index`.

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen.
- **Verweis im Text:**
  - nur über den Platzhalter `<p data-responsibility-inline></p>`
  - direkt nach der Handlungsanleitung
  - nicht in einer Figur oder Vertiefung
  - höchstens einer je Abschnitt
- **Ein Satz steht an mehreren Stellen** (Text, `p.puk-sr`, Plan, Liste der neuen Sätze): Er wird überall gleich geändert. Ausnahme ist Abschnitt 5 b, Nr. 6: Sie gilt nur am genannten Ort.
- **Keine weiteren Änderungen.** Was dieser Auftrag nicht nennt, bleibt. Fällt dir etwas auf, nennst du es in der Selbstprüfung.
- **Externe Links:** Die Adressen bleiben, wie sie sind. Aus der Umgebung lassen sie sich nicht aufrufen.
- **Abgleich:**
  - Jede geänderte Zeile bekommt einen dieser Status:
    - «umformuliert (2c-K)»
    - «zusammengeführt (2c-K)»
    - «entfällt (2c-K)»
    - «neu (2c-K)»
  - Dazu kommt eine Bemerkung mit der Nummer der Frage, z. B. «P2c-F-1» oder «P2c2-F-5».
  - Neue Statuswerte erklärst du in `abgleich/README.md`.
  - `node abgleich/pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle.

## 3. `behandlung`

### a) `wartezeit` (P2c-F-1, P2c2-F-1, P2c-F-10)

| Ort | bisher | neu |
| --- | --- | --- |
| Schritt 4 «Bei Verschlechterung neu beurteilen lassen» | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz. Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» | «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, warten Sie nicht auf einen Therapieplatz und holen sofort Hilfe.» |

- Der neue Satz folgt dem freigegebenen Wortlaut von `krise` › `belastung`.
- Der Verweis im Text bleibt direkt danach.
- In der Liste der neuen Sätze ändert sich 2c-2 Nr. 243 mit.

**«In anderen Kantonen»**

- **Neu:** Nach «Die Angebote auf dieser Seite sind keine schweizweite Liste.» steht der Satz «Fragen Sie in der Hausarztpraxis oder beim psychiatrischen Dienst Ihres Wohnkantons nach Anmeldung, Zuständigkeit und Zwischenversorgung.»
- **Danach bleibt:** der Verweissatz auf `unterstuetzung#kantone`.
- **Abgleich:** Zeile d181 «umformuliert (2c-K)», Bemerkung «P2c-F-10; ‹Hausarztpraxis› statt ‹Hausärzt:in›».

### b) `kontakt` (P2c2-F-14, K2-B-a1, P2c-F-15)

- **Vertiefung «Was kann ich in einem vereinbarten Kontakt mitteilen?»:** Sie entfällt ganz. Die übrigen fünf Vertiefungen bleiben.
- **Begriff «Beobachtungen mitteilen»:** Nach «Beschreiben Sie eigene konkrete Beobachtungen und Ihren eigenen Unterstützungsbedarf, ohne Motive, Diagnose oder Therapieverlauf zu bewerten.» steht neu «Zum Beispiel: «Mir ist aufgefallen, dass … An wen kann ich mich mit meiner Sorge wenden?»».
- **Abgleich:**
  - Die vier Punkte der Vertiefung bekommen «zusammengeführt (2c-K)», mit dem Satz im Begriff, der dasselbe sagt.
  - «Eine laufende Überwachung ist nicht Ihre Aufgabe.» wird mit «den Fortschritt kontrollieren oder überwachen» in `rollen` zusammengeführt.
- **Vertiefung «Ich mache mir Sorgen um den Verlauf»:**

  | bisher | neu |
  | --- | --- |
  | «… welche Ziele die Person mit dem Fachteam vereinbart hat.» | «… welche Ziele die Person mit dem Behandlungsteam vereinbart hat.» |

### c) `angebote` (P2c-F-3, P2c2-F-3)

| Ort | bisher | neu |
| --- | --- | --- |
| Einleitung | «… Die Liste ist nicht abschliessend. …» | Neu nach «Die Liste ist nicht abschliessend.»: «Aufgeführt sind Angebote mit Schwerpunkt Borderline oder DBT und Behandlungsangebote für junge Menschen, die Menschen aus dem Kanton Zürich nutzen können.» |
| HYPE Züri | «Für: Jugendliche ab 13 Jahren» | «Für: Jugendliche» |
| PUK Zürich, Erwachsene | – | bleibt |
| ipw, Psychotherapiestation für junge Erwachsene | «Klären Sie die aktuellen Alters- und Aufnahmebedingungen direkt mit dem Anbieter.» | Davor neu: «Die Station richtet sich an junge Erwachsene von 17 bis 25 Jahren.» Der Rest bleibt, auch «Für: junge Erwachsene». |
| Sanatorium Kilchberg | ganzer Eintrag | entfällt; Abgleich «entfällt (2c-K): kein Angebot mit Schwerpunkt Borderline oder DBT belegt, P2c-F-3, P2c2-F-3» |
| Clienia Schlössli | – | bleibt |
| Dachverband DBT | «Der Dachverband ist ein deutscher Verband.» | «Die Suche lässt sich nach Land filtern.» |

- Danach stehen fünf Einträge in der Liste.
- Neue Sätze kommen in die Liste der neuen Sätze. Die Nummern 214, 221, 224 und 232 der Liste 2c-2 führst du im neuen Stand.

### d) `rollen` (P2c-F-15, P2c2-F-4)

- **In allen drei Spalten:** «Mögliche Beiträge» statt «Kann beitragen». «Nicht zu erwarten» bleibt.
- **Spalte «Angehörige» › «Nicht zu erwarten»:** fünf Punkte statt sieben.

  | bisher (7) | neu (5) |
  | --- | --- |
  | «Therapieziele bestimmen» | «Therapieziele bestimmen» |
  | «den Fortschritt kontrollieren oder überwachen» | «den Fortschritt kontrollieren oder überwachen» |
  | «Behandlung oder Krisenhilfe ersetzen» | «Behandlung oder Krisenhilfe ersetzen» |
  | «Motivation oder Genesung herstellen» · «Motivation dauerhaft aufrechterhalten» | «Motivation oder Genesung herstellen oder dauerhaft aufrechterhalten» |
  | «Therapiesprache ständig in den Alltag übersetzen» · «jedes Verhalten analysieren oder mit Fachbegriffen einordnen» | «Therapiesprache in den Alltag übersetzen oder jedes Verhalten mit Fachbegriffen einordnen» |

- **Die übrigen Spalten** bleiben (Zuordnung bestätigt, P2c2-F-4 (3)).

### e) `therapieformen` (P2c-F-15, P2c2-S-1, K2-B-a2)

| Ort | bisher | neu |
| --- | --- | --- |
| erster Absatz | «Auch strukturierte generalistische Behandlung ist relevant.» | entfällt; der Begriff «Strukturierte generalistische Behandlung» darunter sagt es genauer |
| vor den drei Settings | «Therapie ist in drei Formen möglich:» | «Therapie kann in drei Rahmen stattfinden:» |
| Absatz nach den Settings | «Behandlungsziele und Fortschritt bewertet die betroffene Person gemeinsam mit dem Fachteam.» | «Behandlungsziele und Fortschritt bewertet die betroffene Person gemeinsam mit dem Behandlungsteam.» |
| «Begleiterkrankungen und Medikamente» | «Eine starre Reihenfolge gilt nicht, der Behandlungsplan wird individuell abgestimmt.» | «Eine starre Reihenfolge gilt nicht. Der Behandlungsplan wird individuell abgestimmt.» |

Danach steht auf `behandlung` «Fachteam» nicht mehr.

## 4. `genesung`: Abbildung «Ein neuer Trieb» (`v-ge-trieb`)

### a) Bezeichnungen der zwei Sätze (P2c-F-2 c, P2c2-F-2, P2c2-V-1)

- **Neu:**
  - Vor «Eine schwierigere Phase entwertet alles.» steht die Bezeichnung «Weniger hilfreich».
  - Vor «Schwierigere Phasen kommen vor und müssen nicht alles kippen.» steht «Tragfähiger».
  - Der tragfähige Satz bleibt der zweite.
- **Gestaltung:**
  - wie die Bezeichnungen der Gegenüberstellung `.puk-say` weiter unten im selben Abschnitt
  - nur vorhandene Klassen oder Regeln in `borderline.css` mit Tokens
  - keine `style`-Attribute

### b) Die Giesskanne entfällt (P2c2-F-2 a)

- **Zeichnung:**
  - Die Pfade der Giesskanne entfallen.
  - Pflanze, Topf, Sims, abgefallenes Blatt und neuer Trieb bleiben.
  - Der Bildausschnitt darf enger werden.
  - Ob die zwei Sätze bei 1280 px nebeneinander oder untereinander stehen, entscheidest du nach dem Bild und begründest es in der Selbstprüfung.
- **Unverändert bleiben:**
  - Kernaussage, Kurztext und «Grenzen des Bildes», auch «Angehörige können Genesung nicht herstellen.»
  - die Quelle
- **Grund:** Die Idee «begleiten, nicht herstellen» trägt «Ein Stück Weg» auf `rolle`. Das Bild hat danach eine Idee.

### c) Deutlicherer Rückschritt (P2c2-V-3)

- **Abgefallenes Blatt:** liegt direkt unter der Pflanze, an den Topf gelehnt, und ist etwas grösser.
- **Neuer Trieb:** Er ist heller als die übrigen Blätter (Token-Klasse), damit er als neu liest.
- **Grenze:** Ändere die Pfade nur so weit.

### d) Kurzbeschreibung und Plan

- **Kurzbeschreibung** (`p.puk-sr`):

  | bisher | neu |
  | --- | --- |
  | «Zeichnung: Eine Topfpflanze steht auf einem Fenstersims. Ein Blatt ist abgefallen und liegt neben dem Topf, oben wächst ein neuer Trieb. Daneben steht eine Giesskanne. Über der Zeichnung stehen die Sätze «Eine schwierigere Phase entwertet alles.» und «Schwierigere Phasen kommen vor und müssen nicht alles kippen.»» | «Zeichnung: Eine Topfpflanze steht auf einem Fenstersims. Ein Blatt ist abgefallen und liegt am Topf, oben wächst ein neuer, heller Trieb. Über der Zeichnung stehen zwei Haltungen: als weniger hilfreich «Eine schwierigere Phase entwertet alles.», als tragfähiger «Schwierigere Phasen kommen vor und müssen nicht alles kippen.»» |

- **Plan:**

  | Feld | neu |
  | --- | --- |
  | `goal` | «Verstehen, dass eine schwierigere Phase nicht alles Erreichte aufhebt» |
  | `statement` | «Eine Topfpflanze steht auf einem Fenstersims. Ein Blatt ist abgefallen und liegt am Topf, oben wächst ein neuer, heller Trieb. Über der Zeichnung stehen zwei Haltungen, bezeichnet wie die Gegenüberstellung darunter: «Weniger hilfreich» mit «Eine schwierigere Phase entwertet alles.» und «Tragfähiger» mit «Schwierigere Phasen kommen vor und müssen nicht alles kippen.».» |
  | `understood` | Der letzte Satz («Die Giesskanne steht daneben und giesst nicht: …») entfällt. Der Rest bleibt. |
  | `resonance` | «Entlastung und realistische Hoffnung: Ein Rückschritt macht nicht alles zunichte.» |
  | `reason` | Der Satz «Die Skizze ist unverändert übernommen (Pfade, Bildausschnitt `0 40 640 220`).» wird ersetzt durch eine Beschreibung des neuen Stands: Giesskanne entfernt, Blatt und Trieb geändert, Bildausschnitt, Grund P2c2-F-2 und P2c2-V-3 (P2c-T-1, P2c2-T-1). |

- **`approvalStatus`** bleibt «ausstehend».
- In der Liste der neuen Sätze ändern sich 2c-1 Nr. 11, 12 und 15 mit.

### e) Ansehen

- **Ansichten:** 1280 und 360 px, je Standard und «kontrast».
- **Prüfen:**
  - Die Bezeichnungen sind bei 360 px lesbar.
  - Sie stehen eindeutig beim richtigen Satz.
  - Blatt und Trieb sind bei 360 px als Rückschritt und neues Wachsen zu erkennen.
- **Freundin-Test:** Mache ihn und beschreibe in der Selbstprüfung, wie das Bild jetzt wirkt. Lege die Bildschirmfotos nicht in den Commit.

## 5. `genesung` › `einfluesse`, Medikamente und `diagnose`

### a) Begleiterkrankungen und Medikamente (P2c2-F-5, P2c-F-4 b)

| Ort | bisher | neu |
| --- | --- | --- |
| `genesung` › `einfluesse`, «Körperliche und psychische Gesundheit» | «Körperliche Beschwerden und weitere psychische Erkrankungen werden eigenständig behandelt, bei Bedarf auch mit Medikamenten.» | «Körperliche Beschwerden und weitere psychische Erkrankungen werden ebenfalls behandelt, bei Bedarf auch mit Medikamenten.» |
| `genesung` › `einfluesse`, gleicher Begriff | «Medikamente werden nur gemeinsam mit der behandelnden Fachperson geändert.» | «Medikamente werden nur gemeinsam mit der behandelnden ärztlichen Fachperson geändert.» |
| `behandlung` › `therapieformen`, «Begleiterkrankungen und Medikamente» | wie oben | wie oben |

Die übrigen Sätze zu Medikamenten bleiben im Wortlaut des Bestands.

### b) `diagnose` (P2c-F-15, P2c2-F-15, P2c2-S-1 bis -6)

| Nr. | Ort | bisher | neu |
| ---: | --- | --- | --- |
| 1 | `abklaerung`, erster Absatz | «Eine vertiefte Abklärung findet je nach Fragestellung und Versorgungsweg zum Beispiel in psychiatrisch-psychotherapeutischen Praxen, Ambulatorien, spezialisierten Angeboten oder Kliniken statt.» | «Eine vertiefte Abklärung findet je nach Fragestellung und Versorgungsweg statt. Das kann zum Beispiel eine psychiatrisch-psychotherapeutische Praxis, ein Ambulatorium, ein spezialisiertes Angebot oder eine Klinik sein.» |
| 2 | `abklaerung`, erster Absatz | «… hängt von Qualifikation, Setting und Behandlungsweg ab.» | «… hängt von Qualifikation, Behandlungsrahmen und Behandlungsweg ab.» |
| 3 | `abklaerung`, Schritt 1, «Ihre Rolle» | «Anbieten ja, erzwingen nein.» | «Sie können ihn anbieten, aber nicht erzwingen.» |
| 4 | `abklaerung`, Schritt 2 | «Dafür qualifizierte Fachpersonen klären ab, je nach Versorgungsweg in Praxis, Ambulatorium oder Klinik.» | «Die Abklärung machen dafür qualifizierte Fachpersonen, je nach Versorgungsweg in Praxis, Ambulatorium oder Klinik.» |
| 5 | `abklaerung`, Schritt 3 | «Eine Abklärung entsteht aus einem Muster über die Zeit, nicht aus einem einzelnen Moment. Wie viele Termine und wie viel Zeit nötig sind, hängt von Fragestellung, Verlauf und Setting ab.» | «Eine Einordnung beruht auf einem Muster über die Zeit, nicht auf einem einzelnen Moment. Wie viele Termine und wie viel Zeit nötig sind, hängt von Fragestellung, Verlauf und Behandlungsrahmen ab.» |
| 6 | `ohne-diagnose`, **nur hier** | «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» | «Wie die Beratung abläuft, steht auf der Startseite im Abschnitt «Beratung für Sie».» (Link unverändert) |
| 7 | `begleiterkrankungen`, Differenzialdiagnostik | «Davon zu unterscheiden ist die Differenzialdiagnostik: Bei der Abklärung prüfen Fachpersonen, ob …» | «Davon zu unterscheiden ist die Differenzialdiagnostik. Bei der Abklärung prüfen Fachpersonen, ob …» |
| 8 | `begleiterkrankungen`, Vertiefung, Begriff «ADHS» | «Aus der Borderline-Diagnose allein lässt sich ADHS nicht ableiten, eine Abklärung berücksichtigt …» | «Aus der Borderline-Diagnose allein lässt sich ADHS nicht ableiten. Eine Abklärung berücksichtigt …» |

Danach steht auf `diagnose` «Setting» nicht mehr.

## 6. `unterstuetzung`

### a) Gruppe für Eltern (`austausch`, P2c-F-11, P2c2-F-12)

| bisher | neu |
| --- | --- |
| «Für Eltern jugendlicher Betroffener gibt es an der PUK Zürich die Gruppe «Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung».» | «Für Eltern jugendlicher Betroffener gibt es an der PUK Zürich die «Gruppentherapie für Eltern von Jugendlichen mit einer Borderline-Persönlichkeitsstörung».» |

Der Zwischentitel «Gruppe für Eltern von Jugendlichen mit Borderline» und der Link bleiben.

### b) Kinderbuch (`buecher`, P2c-F-12)

| bisher | neu |
| --- | --- |
| «Das einzige deutschsprachige Kinderbuch speziell zum Thema Borderline.» | «Ein deutschsprachiges Kinderbuch speziell zum Thema Borderline.» |

### c) Krankenkasse (`beratung`, P2c-F-14)

- **Neu:** Direkt nach «Wie die Fachstelle Angehörigenarbeit der PUK berät, steht auf der Startseite im Abschnitt «Beratung für Sie».» steht der Satz «Die Beratung der Fachstelle kostet nichts und wird nicht an Krankenkassen weitergegeben.»
- **Abgleich:**
  - Die Zeile d369 und die Zeile mit diesem Satz in `unterstuetzung.md` (Bestand `/beratung`) bekommen die Fundstelle `unterstuetzung#beratung`.
  - Status «umformuliert (2c-K)», Bemerkung «P2c-F-14; ‹Die Beratung der Fachstelle› statt ‹Beratung›».
  - In d369 korrigierst du die Bemerkung (P2c-W1-6).

## 7. Bericht und Abgleich (P2c-W1-6)

- **Liste 2c-2 Nr. 57:** Die Art ist «gekürzt» statt «Satzzeichen». Im Bestand folgt «und die Zugangsbedingungen klären».
- **Kennzahlen von `genesung` und `unterstuetzung`:** Führe Absicherungen je 100 Wörter und Sätze mit Verneinung im neuen Stand nach (`kennzahlen.mjs`, `verneinung.mjs`).
- **Alle übrigen Zeilen**, die dieser Auftrag berührt, behandelst du nach den Regeln in Abschnitt 2.

## 8. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: wie bisher 5 blockierend (1 × `visual-approval` `v-ge-trieb`, 3 × `placeholder-approval`, 1 × `review-report`), dazu der Hinweis `site-url`
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Prüfen im Browser:**
  - «Ein neuer Trieb» wie in Abschnitt 4 e
  - `rollen` bei 1280, 768 und 360 px: Ist die Spalte «Angehörige» ausgewogener?
  - kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom auf den vier Seiten
  - Tastatur und Fokus
  - Druckansicht mit allen Vertiefungen
  - `node abgleich/bedienung.mjs`
- **Selbstprüfung** in `PRUEFBERICHT.md`, nur im Abschnitt «Selbstprüfung der bauenden Sitzung». Setze einen Block «Korrektur 2c-K» über den Block von 2c-2. Er enthält:
  - den Stand je Punkt der Abschnitte 3 bis 7, mit Beleg und der Nummer der Frage aus beiden Prüfungen
  - die Wörter im Lesefluss und mit Vertiefungen, vorher und nachher, je Seite und Abschnitt (Zählweise C1)
  - jeden Verweis im Text, mit der Handlungsanleitung davor und seiner Lage bei 360 px
  - den Visualisierungs-Check «Ein neuer Trieb» im neuen Stand (Punkte 1 bis 17), mit Beleg
  - die vollständige Liste **«Neue Sätze zur Freigabe»** im neuen Stand, mit Ort:
    - für `genesung`, `unterstuetzung`, `diagnose`, `behandlung` und die zwei Einstiege auf `index`
    - auch mit den neuen und geänderten Sätzen aus diesem Auftrag
    - mit Verweis auf die Nummern der Listen 2c-1 und 2c-2
    - Diese Liste ist die Grundlage für die Freigabe 2c.
- **Keine Änderung** an den Seiten der Etappen 1, 2a und 2b und an `index`. `git diff` zeigt dort nichts.
- **Nachprüfung:** Danach prüft eine Sitzung die Korrektur, die weder 2c-1 oder 2c-2 gebaut noch 2c-K umgesetzt hat. Das kann eine der zwei Prüfsitzungen 2c sein.
- **Pull Request:** bleibt Entwurf.
