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
| W1 Fachliche Prüfung | offen | 09.10.2026 | dritte Prüfrunde: zwei Prüfsitzungen (Claude, haben nicht gebaut) | 1 mittel, 5 leicht; Prüfbedarf für die Fachstelle. Freigabe nur durch die Fachstelle. |
| W2 Gesamtkohärenz | offen | 09.10.2026 | dritte Prüfrunde | kein neuer Befund; offen aus der zweiten Runde: F-W2-02, F-W2-03 (Fachstelle) |
| S Sprach-Review | offen | 09.10.2026 | dritte Prüfrunde | 1 leicht; abschliessbar erst nach W1 und W2 |
| Visualisierungs-Check | offen | 09.10.2026 | dritte Prüfrunde | 1 mittel, 3 leicht |
| Bedienung und Barrierefreiheit | offen | 09.10.2026 | dritte Prüfrunde, automatisiert | 1 leicht; reale Screenreader-Läufe fehlen |
| W3 Code-Review | offen | | | erst nach Umsetzung von W2 und S |

Dazu 5 leichte Befunde zu Bericht und Abgleich. Die erste und zweite Prüfrunde stehen weiter unten zur Nachvollziehbarkeit; ihre Befunde sind durch die dritte Runde überholt, soweit sie nicht ausdrücklich als offen genannt sind.

## Selbstprüfung der bauenden Sitzung

Nach jedem Bau ohne Nachfrage ausfüllen: Visualisierungs-Check wie unten, mit Beleg je Punkt. Arbeitsstand, keine Prüfstufe.

**Stand 10.10.2026 · Korrektur Etappe 1g · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1G.md`:

- `verstehen`, Abbildung 2: zwei Sätze in einfacher Sprache.
- `grenzen`, Abschnitt 02: Text statt Abbildung «Die Brücke mit Geländer» (Entscheid der Fachstelle, 10.10.2026).
- DEAR ist Abbildung 1.

`index` und `beziehungen` sind unverändert. Die Prüfstufen bleiben offen. Diese Selbstprüfung ersetzt die der Korrektur 1f (Stand `325195d`) und ist nicht die Stufe «Visualisierungs-Check».

**Gates und Skripte:**

- **`node tools/build.mjs`:** 15 Seiten, Build r4-5, 0 blockierend, 21 Hinweise (7 Visualisierungen und 12 Platzhalter nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen). Vor 1g waren es 22 Hinweise; `v-gr-bruecke` ist jetzt eine Textzeile im Plan.
- **`node tools/gate.mjs --selftest`:** 51/51 bestanden.
- **`node tools/gate.mjs --production`:** blockiert erwartungsgemäss mit 20 Befunden (7 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report` mit R1 bis R3).
- **`node abgleich/pruefe-abgleich.mjs`:** **1759 Zeilen, 0 ohne Fundstelle.** Ob die genannte Fassung die Aussage trägt, prüft das Skript nicht; das bleibt Aufgabe von W1.
- **Wortlaut:** Ein Skript der bauenden Sitzung sucht jede Stelle in «…» aus 1G, Abschnitt 3, im sichtbaren Text der gebauten Seiten. Ergebnis: 26 Stellen, 20 gefunden. Die 6 übrigen sind keine Fehler:
  - 5 zitiert der Auftrag als Text, der ersetzt wird; sie stehen nicht mehr auf der Seite.
  - Die neue `reason` von `v-gr-bruecke` steht in `site.config.json`, nicht auf der Seite. Sie stimmt dort wörtlich mit dem Auftrag überein (Skript).
- **Unverändert:** Ein Skript vergleicht mit dem Stand `325195d` (vor 1g).
  - `content/verstehen.html` ist ausser den zwei Sätzen gleich.
  - `content/grenzen.html` ist ausser Abschnitt 02 und der Bezeichnung von DEAR gleich.
  - `index` und `beziehungen` sind gleich, ebenso ihre gebauten Seiten.

### Auftrag verschieben

| Schritt | Stand | Beleg |
| --- | --- | --- |
| Upload im Stamm | `KORREKTUR-ETAPPE-1G.md` aus `db9be5f` unverändert in den Website-Ordner gelegt | Commit `71090c6` auf `borderline-umbau`; `cmp` mit der Fassung aus `main`: gleich |
| Stamm von `main` | Datei gelöscht | Commit `d1b4a3a` auf `main`; im Stamm von `main` liegt kein Korrekturauftrag mehr |
| Zusammenführen | `main` in `borderline-umbau`, ohne Konflikt | Merge-Commit `f320143` |

### Korrekturauftrag 1g: Stand je Punkt (Abschnitt 3)

| Punkt | Stand | Beleg |
| --- | --- | --- |
| `verstehen`, Abbildung 2, Stelle 1 | umgesetzt | erster Satz «Wenn die Anspannung niedriger ist, kann es leichter fallen, zuzuhören, nachzudenken und zu planen.»; der zweite Satz «Ob ein klärendes Gespräch gewünscht ist, entscheiden beide.» bleibt. Bildschirmfotos der Abbildung bei 1280 und 360 px angesehen |
| `verstehen`, Abbildung 2, Stelle 3 | umgesetzt | erster Satz «Dann kann es vorübergehend schwerfallen, zuzuhören, nachzudenken und sich zurückzuhalten.»; «Die Anspannung kann sich auch als Rückzug oder Schweigen zeigen.» bleibt |
| `verstehen`, übrige Abbildung | unverändert | Zeichnung, Kurztext, «Was hilft», Ansatzpunkt, Textfassung und Quellenzeile per Skript gleich wie `325195d` |
| `grenzen` › 02: bleibt | eingehalten | Kicker «02 · Grenze und Kontakt», Wegweiser «Grenze und Kontakt» und `id="bruecke"` stehen unverändert (Skript) |
| `grenzen` › 02: entfällt | umgesetzt | Weg sind die Figur `v-gr-bruecke` (Bezeichnung, Kernaussage, Kurztext, beide SVG, Beschriftungen, Liste der drei Teile, Vertiefung «Grenzen des Bildes», Bildlegende) und der Absatz «Das Bild der Brücke beschreibt eine Haltung: …». `grep -c 'v-gr-bruecke' grenzen.html`: 0 |
| `grenzen` › 02: neu | umgesetzt | als `puk-longform__copy`, in dieser Reihenfolge: H2 «Kontakt halten, ohne immer verfügbar zu sein», vier Absätze («Ein Geländer gibt Halt, …» bis «… können mittragen.»), `<p><strong>Was Sie tun können:</strong> Sagen Sie früh, kurz und ruhig, was für Sie möglich ist. Zum Beispiel: «Ich bin da – und ich brauche einen ruhigen Ton.» Oder: «Das kann ich nicht allein tragen. Wir holen Unterstützung dazu.»</p>`, Quellenzeile `<p><strong>Bezugspunkte:</strong> Hoffman et al. (2005); NICE CG78 (2009); Linehan; Mason und Kreger (2014); Stand by You / Sotomo (2024).</p>`. Bildschirmfotos bei 1280 und 360 px angesehen |
| `grenzen` › 05, DEAR | umgesetzt | «Abbildung 1 · DEAR in vier Schritten»; sonst gleich (Skript). Bildschirmfotos bei 1280 und 360 px |
| `site.config.json` › `v-gr-bruecke` | umgesetzt | `format` «text», `statement`, `source` und `alternative` «–», kein `understood`, `reason` wörtlich, `approvalStatus` «ausstehend»; `id`, `section`, `sectionId` und `goal` unverändert. Kein Gate-Hinweis `visual-plan` |
| `borderline.css` | umgesetzt | Vorher `grep`: `bl-fig__wide` und `bl-fig__narrow` nur in `grenzen.html` und `borderline.css`. Entfernt: alle Regeln mit `.bl-fig--bruecke` (14 Zeilen), `.bl-fig__narrow{display:none}` und die beiden Kommentare zur Brücke. `@container (max-width:560px)` behält zwei Regeln (Pendel, Kurve), ist also nicht leer. `.bl-fig__label` und `.bl-parts` bleiben (`verstehen`). Im Sammelkommentar zu Muster A ist die Brücke gestrichen |
| Regeln (Abschnitt 2) | eingehalten | keine eigenen Formulierungen (Wortlaut-Skript); Beispielsätze im Satz wie in 07; kein neues CSS (`git diff` von `borderline.css`: nur Zeilen entfernt und ein Kommentar gekürzt); keine `style`-Attribute und keine `tel:`-Links |
| Abgleich (Abschnitt 4) | umgesetzt | siehe unten |

**`grep`-Belege** (Anzahl Treffer, gebaute Seite, CSS und Quelle):

| Suche | `grenzen.html` | `borderline.css` | `content/grenzen.html` |
| --- | ---: | ---: | ---: |
| «Brücke mit Geländer» | 0 | 0 | 0 |
| «Fahrbahn» | 0 | 0 | 0 |
| «Pfeiler» | 0 | 0 | 0 |
| `bl-fig--bruecke` | 0 | 0 | 0 |
| `bl-fig__wide` oder `bl-fig__narrow` | 0 | 0 | 0 |

### Abgleich (Abschnitt 4)

- **`abgleich/verstehen.md`:**
  - Nr. 236 und 238: «umformuliert (einfache Sprache, 1g)», die Bemerkung nennt «bis 1f: übernommen».
  - Nr. 273, 285, 286 und 426: Status bleibt «zusammengeführt»; neue Fassung «Dann kann es vorübergehend schwerfallen, …».
- **`abgleich/grenzen.md`:** Nr. 390 bis 432 nach der Tabelle des Auftrags, Ort überall `grenzen#bruecke`. Die Bemerkung nennt den neuen Ort und bei geändertem Status «bis 1f: …».
  - 16 Zeilen «umformuliert (einfache Sprache, 1g)».
  - Nr. 405 gekürzt.
  - Nr. 418, 421 und 422 übernommen («wörtlich»).
  - Nr. 415, 416, 417, 424 und 428 bis 432 mit neuer Fassung und neuem Ort in der Bemerkung, Status unverändert.
  - Nr. 408 bis 412 bleiben «entfällt».
  - Kopfnotiz «Korrektur 1g: …» und die Notiz «Ab 1g ist DEAR Abbildung 1. Ältere Bemerkungen nennen sie Abbildung 2.»; die Bemerkungen der DEAR-Zeilen sind unverändert.
- **Nicht im Auftrag genannt:** `verstehen` Nr. 455 hatte den Ort `grenzen#bruecke` und die Bemerkung «`grenzen`, Abbildung 1, Vertiefung». Die neue Fassung steht weiter im Abschnitt. Nur die Bemerkung nennt jetzt den neuen Ort, wie bei Nr. 415 und 424; Status und Fassung bleiben.
- **Vergleich mit dem Stand vor 1g:** Geändert sind genau die 7 Zeilen auf `verstehen` und die 29 Zeilen auf `grenzen` von oben; keine andere Zeile (Skript).
- **Zählung:**
  - `verstehen`: 2 «umformuliert (einfache Sprache, 1g)».
  - `grenzen`: 16 «umformuliert (einfache Sprache, 1g)», 61 statt 62 «umformuliert (einfache Sprache, 1f)» (Nr. 422 ist jetzt «übernommen»).
  - `abgleich/README.md`: Status, Messwerte und Abschnitt «Korrektur Etappe 1g» nachgeführt.

### Wortzahl, Verneinungen und Bedienung

Skripte `abgleich/kennzahlen.mjs`, `abgleich/verneinung.mjs` und `abgleich/bedienung.mjs`. Werte vor 1g am Stand `325195d`.

| | `verstehen` vor → nach 1g | `grenzen` vor → nach 1g |
| --- | --- | --- |
| Wörter | 1583 → 1591 (`anspannung` 381 → 389) | 1621 → 1613 (`bruecke` 161 → 153) |
| Sätze mit Verneinung | 37 von 190 → 37 von 190 | 43 von 205 → 42 von 195 (`bruecke` 5 von 26 → 4 von 16) |
| Absicherungen je 100 Wörter | 2,91 → 2,89 | 2,28 → 2,60 |
| Tabstopps | 19 → 19 | 21 → 20 (Vertiefung «Grenzen des Bildes» entfällt) |
| Seitenhöhe bei 360 px | 17 551 → 17 714 px | 16 895 → 16 500 px |
| höchste Figur bei 360 px | Annahmen 3975 px; Anspannungskurve 3092 → 3254 px | DEAR 1791 px |

**Lesart:**

- Die Absicherungen auf `grenzen` steigen, weil der neue Text «kann» und «können» enthält («Grenzen können Kontakt auf ähnliche Weise schützen», «… können mittragen») und «Was Sie tun können:» mitzählt. Das ist Wortlaut des Auftrags.
- `index` und `beziehungen` sind unverändert (238 und 1564 Wörter).

**Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5:**

- **Überlauf:** keiner bei 320, 360, 768, 1280 und 1440 px auf den vier Seiten.
- **Kontrast nach WCAG 1.4.3:** für allen sichtbaren Text in `main` gemessen, Vertiefungen geöffnet; kein Wert unter AA.
- **Fokus:** Alle Tabstopps haben einen sichtbaren Fokus; der erste ist «Zum Hauptinhalt».
- **Bildschirmfotos angesehen:**
  - `verstehen`, Abbildung 2, bei 1280 und 360 px.
  - `grenzen` › 02 und 05 bei 1280 und 360 px.
  - Kein Überlauf, keine abgeschnittene Zeile. «Was Sie tun können» steht fett am Absatzanfang wie in 07.
- **Nicht geprüft:** Screenreader, Hardwaretastatur und Touch (Stufe 5, Person).

### Kennzahlen aller Seiten (Skript `abgleich/kennzahlen.mjs`)

Gemessen an der alten Seite allein, mit derselben Zählweise für alt und neu (`abgleich/README.md`). Text nur für Screenreader (`.puk-sr`) zählt nicht. Der Richtwert gilt nicht; die Wortzahlen werden nur berichtet.

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 238 | 55 % | – | – | 1,85 → 1,68 | 1 → 0 |
| `verstehen` | 2524 | 1591 | 63 % | 1300 | 1365 | 2,54 → 2,89 | 12 → 0 |
| `beziehungen` | 2149 | 1564 | 73 % | 1100 | 1155 | 3,82 → 4,48 | 6 → 1 |
| `grenzen` | 2985 | 1613 | 54 % | 1500 | 1575 | 2,41 → 2,60 | 4 → 0 |

## Visualisierungs-Check

Selbstprüfung als Matrix je Figur (Vorlage im Starter). E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Belege und Gründe für T und N stehen unter der Matrix.

Mit Korrektur 1g gibt es noch 7 Figuren:

- **`v-gr-bruecke`:** entfällt als Figur. Sie steht im Plan als Text, mit Begründung (Entscheid der Fachstelle, 10.10.2026).
- **`v-vs-anspannung`:** Stelle 1 und 3 haben je einen neuen ersten Satz.
- **`v-gr-dear`:** ist jetzt Abbildung 1.
- **Übrige Spalten:** wie in Korrektur 1f.

| Nr. | Prüfpunkt | `v-vs-eisberg` | `v-vs-anspannung` | `v-vs-bewertungen` | `v-vs-mythen` | `v-bz-schleife` | `v-bz-sichten` | `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | T | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | T | E | E | E |
| 4 | Kernaussage und Erklärtext (2–4 Sätze) | E | E | E | E | E | E | E |
| 5 | Ansatzpunkt (B, C, G) | – | E | – | – | E | – | E |
| 6 | Mechanismus nicht doppelt, sondern verbunden | E | E | E | E | T | E | E |
| 7 | Kartenraster-Check | E | E | E | T | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | E | T | E | T | T |
| 9 | Verteilt, keine Textwand | E | T | E | T | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | T | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N |

**Belege für die mit 1g geänderten Figuren**

- **`v-vs-anspannung`, 4 und 10:** Kernaussage und Kurztext unverändert. Die neuen Sätze behalten die Absicherung «kann» («… kann es leichter fallen …», «… kann es vorübergehend schwerfallen …»), wie 1G, Abschnitt 1, verlangt.
- **`v-vs-anspannung`, 9, T:** Die Liste trägt viel Text; bei 360 px ist die Figur jetzt 3254 px hoch (vorher 3092 px).
- **`v-vs-anspannung`, 12:** bei 320 und 360 px kein Überlauf; Bildschirmfoto bei 360 px angesehen.
- **`v-gr-dear`, 1:** Bezeichnung «Abbildung 1 · DEAR in vier Schritten»; die Planzeile nennt keine Nummer. Inhalt unverändert (Skript).
- **`v-gr-bruecke`:** Der Plan führt die Zeile als Text («Text ist klarer: …»). Das Gate verlangt dafür kein `understood` und keine Figur. Kein Hinweis `visual-plan`.

**Übrige Figuren und Punkte:** Belege wie in der Selbstprüfung 1f und der dritten Prüfrunde. Gründe für T:

- **3, 7, 8, 9, Annahmen:** Kastenreihe, bei 360 px 3975 px hoch (F-V-11, Fachstelle).
- **2 und 6, Schleife:** wie bisher; ob F-W2-02 mit der Planbegründung von `v-bz-was-hilft` erledigt ist, entscheidet W2.
- **8, Zwei Sichten:** Die Linienart unterscheidet die Sichten, hat im Profil aber keine feste Bedeutung (P-7).
- **8, DEAR:** vier gefüllte Punkte (P-6, Profil).
- **12, Pendel:** schmal ohne Beschriftungen im Bild (R3-V-03, laut Korrektur 1c hingenommen).

**Nicht erfüllt oder offen (Selbstprüfung):**

- **Punkt 14:** keine Figur ist fachlich freigegeben.
- **Teilweise erfüllt:**

  | Punkt | Figuren |
  | --- | --- |
  | 2 | Schleife |
  | 3 | Annahmen |
  | 6 | Schleife |
  | 7 | Annahmen |
  | 8 | Annahmen, Zwei Sichten, DEAR |
  | 9 | Anspannungskurve, Annahmen |
  | 12 | Pendel |

- **Umfang:** Alle Wortzahlen liegen über Richtwert plus 5 %. Der Richtwert gilt nicht; über die Länge entscheidet die Fachstelle.
  - `verstehen`: 1591 Wörter.
  - `beziehungen`: 1564 Wörter.
  - `grenzen`: 1613 Wörter.
- **Nicht im Auftrag genannt** (Entscheid der bauenden Sitzung, zur Prüfung):
  - Bemerkung von `verstehen` Nr. 455.
  - Sammelkommentar in `borderline.css`.
- **Prüfbedarf:** wie nach 1f in `abgleich/*.md`. 1g bringt keinen neuen Prüfbedarf; die Änderungen sind Entscheide der Fachstelle.
- **Profil-Update (aus 1d weiter offen):** 11 Dateien `components/Vis*/preview.html` aus dem Patch gibt es im Repository nicht; ihre Hunks sind nicht angewendet.
- **Offen für die Fachstelle:**
  - R3-W1-05, R3-W1-06, F-V-11, F-V-05, F-W1-11, F-W2-02, F-W2-03.
  - Prüfbedarf in `abgleich/*.md`.
  - Alle fachlichen Freigaben.
- **Statustabelle:** Die Zeilen R1 bis R3 fehlen noch; die Prüfsitzung trägt sie ein.
- **Profil (später):** P-6, P-7, P-9.
- **Offen für Stufe 5:** Screenreader-Läufe, Hardwaretastatur und Touch.

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
