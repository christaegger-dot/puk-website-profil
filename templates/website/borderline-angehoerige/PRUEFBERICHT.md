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
| W1 Fachliche Prüfung | offen | 09.10.2026 | zweite Prüfrunde: zwei Prüfsitzungen (Claude, haben nicht gebaut) | 5 mittel, 10 leicht; Prüfbedarf für die Fachstelle. Freigabe nur durch die Fachstelle. |
| W2 Gesamtkohärenz | offen | 09.10.2026 | zweite Prüfrunde | 3 leicht |
| S Sprach-Review | offen | 09.10.2026 | zweite Prüfrunde | 1 mittel, 3 leicht; abschliessbar erst nach W1 und W2 |
| Visualisierungs-Check | offen | 09.10.2026 | zweite Prüfrunde | 3 mittel, 9 leicht |
| Bedienung und Barrierefreiheit | offen | 09.10.2026 | zweite Prüfrunde, automatisiert | 2 leicht; reale Screenreader-Läufe fehlen |
| W3 Code-Review | offen | | | erst nach Umsetzung von W2 und S |

Dazu 2 mittlere und 3 leichte Befunde zu Bericht und Abgleich. Die erste Prüfrunde steht weiter unten zur Nachvollziehbarkeit; ihre Befunde sind durch die zweite Runde überholt.

## Selbstprüfung der bauenden Sitzung

Nach jedem Bau ohne Nachfrage ausfüllen: Visualisierungs-Check wie unten, mit Beleg je Punkt. Arbeitsstand, keine Prüfstufe.

**Stand 09.10.2026 · Korrektur Etappe 1 · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1.md` auf `index`, `verstehen`, `beziehungen` und `grenzen`, nach Übernahme des Profil-Updates vom 09.10.2026 (Build r4-4). Die Prüfstufen bleiben offen. Diese Selbstprüfung ersetzt die vom 08.10.2026 und ist nicht die Stufe «Visualisierungs-Check».

- `node tools/build.mjs`: 15 Seiten, 0 blockierend, 22 Hinweise (8 Visualisierungen und 12 Platzhalter nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen).
- `node tools/gate.mjs --selftest`: 50/50 bestanden.
- `node tools/gate.mjs --production`: blockiert erwartungsgemäss mit 21 Befunden (8 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`). Der Verweis im Text blockiert nicht, sein Wortlaut ist geprüft.
- Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5:
  - kein horizontaler Überlauf bei 320, 360, 768 und 1440 px auf den vier Seiten;
  - Kontrast nach WCAG 1.4.3 für allen Text in `main` gemessen (Figuren, Vertiefungen, Links, Hinweiskästen, `.puk-say`): kein Wert unter AA (B-1, B-2 behoben);
  - Tab-Durchlauf: erster Tabstopp «Zum Hauptinhalt», alle Fokusziele mit sichtbarem Fokus (index 10, verstehen 19, beziehungen 15, grenzen 40 Tabstopps einschliesslich Fusszeile), Enter öffnet eine Vertiefung (`beziehungen` hat keine mehr);
  - reduzierte Bewegung: keine laufende Animation ohne Bedienung;
  - Theme `data-theme="kontrast"` bei allen 8 Figuren gerendert, keine festen Farbattribute in SVG;
  - Seitenhöhe bei 360 px: `verstehen` 13 734 px (vorher 16 476), `beziehungen` 11 514 px (13 917), `grenzen` 15 936 px (20 206); Abbildung «Annahmen» 2667 px (vorher rund 4100).
- Ein Test mit Screenreader und Hardwaretastatur fehlt (B-5).

### Wortzahlen und Absicherungen (W2-2, S-1)

Gemessen an der alten Seite allein, gleiche Zählweise alt und neu. Die Zählweise ist in `abgleich/README.md` beschrieben, damit die Prüfsitzung nachrechnen kann.

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Absicherungen je 100 Wörter alt → neu |
| --- | ---: | ---: | ---: | ---: | --- |
| `index` | 433 | 238 | 55 % | – | 1,85 → 1,68 |
| `verstehen` | 2524 | 1299 | 51 % | 1300 | 2,54 → 2,16 |
| `beziehungen` | 2149 | 1099 | 51 % | 1100 | 3,82 → 2,73 |
| `grenzen` | 2985 | 1500 | 50 % | 1500 | 2,41 → 1,80 |

Im Fliesstext steht höchstens ein Semikolon je Absatz. Es gibt ein einziges, in der schmalen Leserichtung der Schleife. Quellenzeilen trennen Literaturangaben weiterhin mit Semikolon.

## Visualisierungs-Check

Selbstprüfung als Matrix je Figur (Vorlage im Starter). E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Belege und Gründe für T und N stehen unter der Matrix. «Vier Arten von Grenzen» ist keine Figur mehr (V-5).

| Nr. | Prüfpunkt | `v-vs-eisberg` | `v-vs-anspannung` | `v-vs-bewertungen` | `v-vs-mythen` | `v-bz-schleife` | `v-bz-sichten` | `v-gr-bruecke` | `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | E | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | T | E | E | E | T |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | E | E | E |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | – | – | – | E | – | – | E |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | E | E | E | E | E | E |
| 7 | Kartenraster-Check | E | E | E | T | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | T | E | T | E | T | E | E |
| 9 | Verteilt, keine Textwand | E | E | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N |

**Belege je Punkt**

- **1, 2:** `site.config.json` › `visualPlan` mit einer Zeile pro Abschnitt, nachgeführt am 09.10.2026. Pendel `format: figure` mit neuem `understood`, «Vier Arten» `format: text` mit Begründung, `entryPoint` der Schleife «Station 5 «Wirkung»». Kein Gate-Hinweis `plan-coverage` oder `visual-plan`.
- **3:** Das Pendel löst ein, was die Planzeile verspricht: Ausschlag unter Stress und Rückschwung, mit eigener Form statt einer zweiten Achse. **T bei Annahmen:** Die Paarung auf einer Zeile trägt; der Vergleich bleibt aber eine Liste von sieben Kästen. **T bei DEAR:** Der Pfad zeigt die Schritte, bringt aber gegenüber einer nummerierten Liste wenig (V-12 der Prüfsitzung). Verbessert ist nur die Trennung von Aufgabe und Beispiel.
- **4:** Jede Figur hat `p.puk-vis-kern` und einen Kurztext zum Inhalt (V-9). Beispiele: Eisberg «Nachfragen hilft mehr als Gedankenlesen.»; Brücke «Grenzen gehören zur Verbindung wie das Geländer zur Brücke.»; Schleife «Angehörige setzen bei ihrer eigenen Reaktion an.»
- **5:** Schleife: Station 5 «Wirkung» (Schwester) als `li.is-ansatz` und `p.puk-vis-ansatz` (V-1). Text: «Statt sich weiter zu verteidigen, das Gefühl anerkennen, nach der Deutung fragen und die eigene Grenze halten». DEAR: «entfällt: Der ganze Ablauf beschreibt das eigene Handeln der Angehörigen.»
- **6:** Anspannung (Achse) und Pendel (Aufhängepunkt, Bogen) haben verschiedene Formen für verschiedene Mechanismen (V-2). Zwei Sichten bezieht jeden Schritt auf eine Station der Schleife (V-3): «Station 1 · Absage», «Station 4 · Nachrichten», «Station 5 · Verteidigung», «Neuer Anlass · Gespräch endet». Die Einflüsse auf `beziehungen` sind Text mit Station (V-8), keine zweite Grafik.
- **7, 9:** **T bei Annahmen:** sieben gleich gebaute Kästen. Die Annahme steht klein links, die Einordnung im Kasten. Bei 360 px ist die Figur 2667 px hoch statt rund 4100. Sonst kein Kartenraster.
- **8:** Bedeutung tragen Ausschlag und Rückschwung (Pendel), Ufer, Geländer und Pfeiler (Brücke, direkt beschriftet, V-7), Richtung und Rücksprung (Schleife), Reihenfolge (DEAR) und Schichten ohne Verbindung (Eisberg). **T bei Anspannung:** Die Linienstärke steigt in drei Stufen (Muster J), während Kurztext und Bereiche «gleitend, keine Stufen» sagen; die Striche auf der Achse sind entfernt. Das ist ein Profilbefund (P-6). **T bei Zwei Sichten:** Die Linienart (durchgezogen/gestrichelt) unterscheidet die Sichten, hat im Profil aber keine feste Bedeutung (V-11, P-7). **T bei Annahmen:** Bedeutung tragen Lage und Schriftgrösse, keine Linie.
- **10:** Jede Figur hat eine Kennzeichnung in der Bildlegende. Grenzen des Modells stehen beim Eisberg, bei der Anspannung, beim Pendel und bei der Brücke in der Vertiefung, bei den Annahmen in «Quellen und Grenzen». Ob die Vereinfachungen fachlich stimmen und die Bezugspunkte passen, entscheidet W1 (W1-6).
- **11:** Kein Skript. Die Vertiefungen sind native `details`. Die Hauptaussagen stehen ausserhalb.
- **12:** Kein Überlauf bei 320 px. Beschriftungen in `type-body-sm` (15 px): beim Pendel schmal als Liste unter der Zeichnung, bei der Brücke bleiben die Ufer beschriftet, und die Liste erklärt die Teile. Jede Figur hat eine Textfassung über `aria-describedby`.
- **13:** Bildschirmfotos aller 8 Figuren mit `data-theme="kontrast"`. In SVG stehen nur Token-Klassen (`puk-vis-ln`, `puk-vis-fill`, `puk-vis-mark`, `puk-vis-water`, `puk-vis-ln--paper`), keine festen Farbattribute.
- **14:** `approvalStatus` «ausstehend» bei allen Figuren; das Produktionsgate blockiert 8 × `visual-approval`.

### Korrekturauftrag: Stand je Befund

| Befund | Stand | Wie | Beleg |
| --- | --- | --- | --- |
| Profil-Update | umgesetzt | Merge von `profil-0910`; Werkzeuge der Website aus dem Starter r4-4 übernommen | Selbsttest 50/50; `site.config.json` › `responsibility.inline` wie im Starter |
| W1-1 | umgesetzt | Verweis im Text je einmal nach der Suizidfrage, nach dem Satz zu Suizidgedanken und in Schritt 2 bei Gewalt; Annahme 6 nur noch Einordnung | `verstehen` › `mythen`: «… fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat.» → Verweis → «Bleiben Sie bei der Person, soweit dies für Sie sicher möglich ist.»; `beziehungen` › `verantwortung`; `grenzen` › `gewalt`, Schritt 2. Wortlaut von Annahme 6 und lmk-Satz: Prüfbedarf in `abgleich/verstehen.md` |
| W1-2 | umgesetzt | Kernaussage der Brücke wie im Handout | «Kontakt braucht Geländer: Grenzen können Kontakt schützen.»; Vertiefung «Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden.» |
| W1-3 | umgesetzt | fünf Aussagen wieder aufgenommen; Abgleich Satz für Satz für alle vier Seiten | `verstehen`, Annahme 5 «Einzelne Merkmale können sich überschneiden»; `beziehungen` › `verbindung`, `verstaerker`; `grenzen` › `konsequenz` «Konsequenz heisst, dass Sie sich an tragfähigen Absprachen orientieren.»; `abgleich/*.md` › «Satz für Satz» |
| W1-4 | umgesetzt | Wortlaut der Fachstelle auf `index` › `beratung`; `grenzen` › `kontakt` ein Satz mit Link | «… berät alle Angehörigen … kostenlos und untersteht der Schweigepflicht …»; Link `index.html#beratung` |
| W1-6 | umgesetzt (Prüfung offen) | Bezugspunkte der Brücke wie im Handout; Quellenzeile in `saetze` entfällt | Bildlegende Abbildung 1 `grenzen`. Ob die Bezugspunkte der Figuren passen, bleibt für die Fachstelle offen |
| W1-7 | umgesetzt | DEAR ohne «feste Reihenfolge»; «Eine Beziehung kann helfen, sollte aber weder alle Regulation übernehmen noch Behandlung ersetzen» | Abbildung 2 `grenzen`, Kernaussage «Vier Schritte helfen, ein Anliegen vorzubereiten.»; `beziehungen` › `was-hilft` |
| Opferhilfe | entfällt | kein Link, Entscheid im Chat vom 09.10.2026 | `grenzen` › `gewalt`, Schritt 4 ohne Link und ohne Nummer |
| V-1 | umgesetzt | Ansatzpunkt bei Station 5, Text laut Auftrag, «dein Schweigen» entfällt; `entryPoint` nachgeführt | Abbildung 1 `beziehungen` |
| V-2 | umgesetzt | Pendel als Muster A mit Aufhängepunkt, Bogen, Ruhelage und zwei Auslenkungen, Beschriftung «unter Stress grösserer Ausschlag», Pfeile zurück | Abbildung 3 `verstehen`; Planzeile `v-vs-bewertungen` |
| V-3 | umgesetzt | Handelnde je Station; Zwei Sichten auf Stationen bezogen | «Station 1 · Schwester» … «Station 5 · Schwester»; Abbildung 2 `beziehungen` |
| V-4 | umgesetzt | Achsentitel, «Rückzug oder Schweigen», Kurztext «gleitende Achse … nicht sicher ablesbar» | Abbildung 2 `verstehen` (Linienstärke in Stufen: Profilbefund, siehe Punkt 8) |
| V-5 | umgesetzt | Begriffsliste statt Figur, Planzeile `format: text` | `grenzen` › `arten` |
| V-6 | umgesetzt | Einordnung als Hauptsatz, Annahme klein, ohne gestrichelte Linie, Annahme 7 entfällt | Abbildung 4 `verstehen` |
| V-7 | umgesetzt | beide Ufer gezeichnet und beschriftet, Teile direkt beschriftet, Liste bleibt | Abbildung 1 `grenzen` |
| V-8 | umgesetzt | fünf Einträge mit Station, als `dl`; «Dass etwas anderswo gelingt …» bei Station 5 | `beziehungen` › `verstaerker` |
| V-9 | umgesetzt | Kurztexte sagen, was Angehörige mitnehmen | Punkt 4 oben |
| V-12 | umgesetzt | Beispielsatz je Schritt als `.puk-say` | Abbildung 2 `grenzen` |
| W2-1 | umgesetzt | `rolle` vor `grenzen` | `site.config.json` › `pages` |
| W2-2 | umgesetzt | 1299 / 1099 / 1500 Wörter; drei `.puk-say`-Beispiele, übrige für `kommunizieren` vorgemerkt; Rollen als Absatz | Tabelle oben; `abgleich/README.md` |
| W2-3 | umgesetzt | Gegenüberstellungen mit `.puk-say` | `grenzen` › `saetze` |
| W2-4 | umgesetzt | Beratung nur auf `index`; «Schutz vor Gespräch» auf `grenzen` nur im Kopf und in `gewalt` | Reihenfolge ohne Punkt «Bei Bedrohung oder Gewalt», DEAR-Vertiefung ohne Schutzsatz, Planungssatz aus `kontakt` nach `gewalt` |
| W2-5 | umgesetzt | «Anspannung» durchgehend (Ausnahme: Beschriftung des Pendels laut V-2); Dissoziation, Remission, PTBS, DBT beim ersten Auftreten erklärt; Eisberg-Text mit den Begriffen der Figur | `verstehen` › `anspannung` «Wenn die Anspannung steigt»; Annahmen 1 und 5; `beziehungen`, Station 4; DEAR-Vertiefung |
| W2-6 | umgesetzt | Einstiege als Anliegen; `title` und H1 abgestimmt | `index` › `einstiege` |
| S-1 | umgesetzt | Absicherungen bei Handlungshinweisen gestrichen; Ziel: auf jeder Seite unter dem Bestand | Tabelle oben (z. B. `beziehungen` 3,82 → 2,73) |
| S-2 | umgesetzt | höchstens ein Semikolon je Absatz, Ketten aufgelöst | `grenzen` › `reihenfolge`, `konsequenz` |
| S-3 | umgesetzt | Satz zur Formel entfällt | `beziehungen` › `verstaerker` |
| S-5 | umgesetzt (Prüfung offen) | «du» im Beispiel; zwei technische Beispiele natürlicher gefasst | «Was soll ich übernehmen, was möchtest du selbst tun?»; «… wende dich an die Stelle, die wir für Krisen abgemacht haben.»; «… und bin beim nächsten Gespräch aufmerksamer.» Laut-Lese-Probe durch S offen |
| B-3 | umgesetzt | Stationen schmal auf volle Breite | `borderline.css`; Messung 320 und 360 px: alle fünf Stationen gleich breit und bündig |
| B-1, B-2 | nachgeprüft | durch das Profil-Update behoben | Kontrastmessung oben: kein Wert unter AA |

**Nicht erfüllt oder offen (Selbstprüfung):** Punkt 14 bei allen Figuren (fachliche Freigabe). Teilweise: Punkt 3 (Annahmen, DEAR), Punkt 7 und 9 (Annahmen), Punkt 8 (Anspannung, Zwei Sichten, Annahmen). Offen für die Fachstelle: Bezugspunkte der Figuren (W1-6), alle fachlichen Freigaben, der Prüfbedarf in `abgleich/*.md`. Offen für Stufe 5: Screenreader-Läufe und Hardwaretastatur (B-5).


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
