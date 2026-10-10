# Prüfbericht · Depression: Informationen für Angehörige

Gehört zur Website in diesem Ordner (`templates/website/depression-angehoerige/`). Ohne vollständigen Prüfbericht blockiert `node tools/gate.mjs --production` die Veröffentlichung (Abschnitt «Prüfung und Freigabe»).

**Regeln**

- **Bauen und Prüfen sind getrennt.** Die Stufen unten prüft eine Sitzung oder Person, die die Website nicht gebaut hat. Die bauende Sitzung macht nur die Selbstprüfung (unten) und trägt keine Stufe als «erledigt» ein.
- **Jeder Punkt braucht einen Beleg** (Seite und Abschnitt, Figur, Zitat). Ein Punkt ohne Beleg gilt als nicht geprüft. Ein Gesamturteil ersetzt keine Einzelprüfung.
- **Kein Merge ohne Prüfbericht.** Ein Pull Request mit einer neuen oder geänderten Website enthält diesen Bericht im aktuellen Stand und verweist in der Beschreibung darauf.
- **Prüftiefe:** Kennzahlen der bauenden Sitzung werden nachgerechnet; der Visualisierungs-Check der Prüfsitzung steht je Figur in der Matrix unten. Eine zweite, unabhängige Prüfsitzung wird empfohlen; jeder Befund nennt seine Quelle.
- **Status:** «offen», «erledigt» oder «entfällt: Begründung». Fachliche Freigaben trägt nur die Fachstelle ein.

## Status

| Stufe | Status | Datum | Geprüft durch | Ergebnis |
| --- | --- | --- | --- | --- |
| W1 Fachliche Prüfung | offen | 10.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut) | Prüfrunde W1 abgeschlossen, Stufe offen: 14 wichtige und 11 optionale Befunde, 21 Fragen an die Fachstelle (W1-F-01 bis W1-F-21); Kennzahlen bestätigt; Seiteninventar für W2 liegt vor; Leitlinien, Recht, Statistiken und Angebote nicht am Original geprüft (W1-25) |
| W2 Gesamtkohärenz | offen | 10.10.2026 | Prüfsitzung (Claude Code, hat nicht gebaut; dieselbe wie W1) | Prüfrunde W2 abgeschlossen, Stufe offen: Aufbau trägt; 3 wichtige und 8 optionale Befunde (Verweise zwischen den Seiten, Begriff «Bezugsperson», Paartherapie bündeln), 8 Fragen an die Fachstelle (W2-F-01 bis W2-F-08); Strukturänderungen vor S umsetzen |
| S Sprach-Review | offen | | | |
| Visualisierungs-Check | offen | | | |
| Bedienung und Barrierefreiheit | offen | | | |
| W3 Code-Review | offen | | | |
| R1 Profil-Audit | offen | | | |
| R2 Visualisierung und Laienverständlichkeit | offen | | | |
| R3 Freigabe-Audit | offen | | | «Go», «Go mit Auflagen» oder «No-Go» |

## Grundlage und Arbeitsstand der bauenden Sitzung

- **Plan:** Claude Doc «Website Depression für Angehörige: Plan zur Freigabe», von der Fachstelle am 10.10.2026 freigegeben mit diesen Entscheiden: acht Seiten in der vorgeschlagenen Reihenfolge; Titel «Depression: Informationen für Angehörige»; eigene Abschnitte für erwachsene Kinder und für Freundinnen und Freunde; Abschnitt zu Suizidgedanken mit Lesepfad von der Startseite; **kein** Abschnitt zur fürsorgerischen Unterbringung; Link auf wie-gehts-dir.ch, nicht auf reden-kann-retten.ch; eigene Materialien (Partner-Heft, BipolarSite, BUE-Materialien) später; Inhaltsverantwortung «Ch. Egger, Fachstelle Angehörigenarbeit PUK».
- **Inhaltsgrundlage:** Recherchebericht «Depression bei Erwachsenen» (2026), Ergänzung «Ursachen, Formen, Männer und Frauen» und Dokument «Angehörige von Menschen mit Depression: Situation und Belastung» mit den unabhängig nachgeprüften Schlüsselzahlen (10.10.2026).
- **Status aller Texte:** Musterentwurf, sichtbar im Kopfbereich jeder Seite und in der Fusszeile («Musterentwurf, Stand 10.10.2026 – fachliche Prüfung ausstehend»).
- **Build und Gate (10.10.2026, bauende Sitzung):** `node tools/build.mjs` → 8 Seiten, 0 blockierende Befunde, 13 Hinweise (11 × Visualisierung nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen). `node tools/gate.mjs --selftest` → 53/53.
- **Messungen der bauenden Sitzung (bitte nachrechnen):** kein horizontaler Überlauf bei 1280, 360 und 320 px auf allen acht Seiten (Playwright, `scrollWidth − clientWidth = 0`); Schaltfläche «Schritt für Schritt aufbauen» (Seite «Depression verstehen», Abbildung 2) per Tastatur auslösbar, Live-Region meldet «Schritt 1 von 3: Verletzlichkeit»; keine Hexwerte und keine `style`-Attribute in `content/`.
- **Bildschirmfotos** aller elf Figuren bei 1280 und 360 px wurden der Fachstelle im Chat gezeigt; sie sind als Arbeitsstand nicht im Repository.
- **Rückmeldung der Fachstelle zu den Bildern (10.10.2026, Ch. Egger):** «Die Bilder sind perfekt.» Bildsprache und Zeichnungen sind damit gutgeheissen. Die fachliche Freigabe der Figuren (`approvalStatus` im Visualisierungsplan) bleibt «ausstehend», bis W1 und S abgeschlossen sind, weil sich Kernaussagen und Beschriftungen in den Figuren dort noch ändern können.

### Abweichungen vom freigegebenen Plan

| Stelle | Plan | Umsetzung | Grund |
| --- | --- | --- | --- |
| Rechte und Angebote › `vorsorge` | Bezugsperson, Vertrauensperson, Patientenverfügung | Bezugsperson, Entbindung von der Schweigepflicht, Patientenverfügung | Die Vertrauensperson nach Art. 432 ZGB gilt bei fürsorgerischer Unterbringung; dieser Teil entfällt nach Entscheid der Fachstelle. |
| Übersicht › `einstieg` | «rund jede dritte Person» (Lebenszeit, Prüfbedarf) | «rund jede zehnte Person» mit mittelschweren bis schweren Beschwerden (SGB 2022) | Die Lebenszeitzahl beruht auf Symptomen, nicht auf Diagnosen; die SGB-Zahl ist eindeutig belegt. |
| Behandlung und Verlauf › `weg` | Anordnung mit 15 und 30 Sitzungen (Prüfbedarf) | ohne Sitzungszahlen | Prüfbedarf vermieden; die Zahlen sind für Angehörige nicht nötig. |
| Rechte und Angebote › `arbeit-geld` | Hilflosenentschädigung | ohne Frankenbeträge | Die Beträge ändern per 1.1.2027. |
| `sensitiveTopics` | Übersicht und Rechte ohne sensible Themen | beide mit `selbstgefaehrdung` | Die Seiten nennen «Suizid» (Lesepfad, Kapitelliste, Quellentitel des BAG); Vertragsprüfung des Gates. |
| Begleiten | ohne `zwang` | mit `zwang` | Der Text sagt «nie Täuschung, Zwang oder Drohungen»; Vertragsprüfung des Gates. |
| Quellenangaben | – | Fachartikel als «Autorin et al. Jahr, Zeitschrift» statt mit Titel | Titel wurden in der Recherche nicht immer wörtlich erfasst; so wird kein Titel erfunden. |

### Zusammenführung vor Abschluss der Prüfung (11.10.2026)

- **Was geschah:** Pull Request #13 wurde am 11.10.2026 um 01:15 von der Fachstelle zusammengeführt, während alle Prüfstufen offen waren. Das weicht von der Regel «Kein Merge, solange Stufen offen sind» ab.
- **Entscheid:** Die Website bleibt auf `main` (Entscheid der bauenden Sitzung im Auftrag der Fachstelle, 11.10.2026). Begründung: Jede Seite ist als «Musterentwurf: noch nicht fachlich geprüft» markiert; das ganze Repository sendet `X-Robots-Tag: noindex, nofollow`; eine Veröffentlichung als eigenständige Website (`export.mjs --production`) blockiert das Produktionsgate weiterhin, bis dieser Bericht vollständig ist. Ein Rückgängigmachen hätte die spätere Zusammenführung verkompliziert, ohne mehr Schutz zu bringen.
- **Folge:** Der Entwurf ist unter der Netlify-Adresse des Profils erreichbar (`/templates/website/depression-angehoerige/`, am 11.10.2026 geprüft). Die weiteren Prüf- und Umsetzungsrunden laufen auf dem Branch `website/depression-angehoerige-pruefung` in einem neuen Entwurfs-Pull-Request.

### Von der Fachstelle entschieden (Ch. Egger)

- Rechte und Angebote, Abbildung 1: Die Zürcher Regel zur Auskunft an Bezugspersonen (§ 15 Patientinnen- und Patientengesetz ZH) gilt auch in Privatpraxen. Markierung entfernt, Text unverändert.
- Für sich sorgen › `was-hilft`: Der «Familiencoach Depression» ist aus der Schweiz nutzbar. Markierung entfernt, Text unverändert.
- Für sich sorgen › Quellen: Die Meta-Analyse zu Achtsamkeitsprogrammen nur mit vollständiger, überprüfbarer Angabe aufführen, sonst weglassen. Die bauende Sitzung hat sie in PubMed gefunden und wieder eingesetzt: Zhang X, Ren H, Wang C, Zhang Y, Zhou Q, Fan J (2024). The effect of mindfulness-based interventions on mental health outcomes and wellbeing of informal caregivers of people with mental illness: A systematic review and meta-analysis. *International Journal of Mental Health Nursing*, 33(4), 797–816. https://doi.org/10.1111/inm.13295 (PMID 38291626). 13 Studien mit 1007 Teilnehmenden; laut Zusammenfassung weniger Stress, Depressivität und Belastung, kein Effekt auf Angst; die Autorinnen und Autoren fordern methodisch strengere Studien.

- **11.10.2026 · Fragen W1-F und W2-F:** Die Fachstelle übernimmt die Empfehlungen der bauenden Sitzung («Empfehlungen ok»): W1-F-01 a, b, c ja; W1-F-02 an die NVL-Zahl angleichen; W1-F-03 kürzen auf das Gezeigte; W1-F-04 b, mit Butzlaff und Hooley 1998; W1-F-05 beide Ja; W1-F-06 ja; W1-F-07 ja; W1-F-08 a (Bild bleibt); W1-F-09 ja; W1-F-10 ja; W1-F-12 weglassen (Entscheid gegen einen Abschnitt zur fürsorgerischen Unterbringung); W1-F-13 «sage dir»; W1-F-14 Verweis vor der Fachstelle; W1-F-15 Heft in die Quellenliste; W1-F-16 «In einer grossen Befragung in Deutschland»; W1-F-17 alle Abschwächungen; W1-F-18 ja; W1-F-20 ja. W2-F-01 ja; W2-F-02 «Einverständnis», einmal «(rechtlich: Einwilligung)»; W2-F-03 ja; W2-F-04 ja; W2-F-05 «Plan für schwierige Zeiten»; W2-F-06 ja; W2-F-07 a ja (kurzer Abschnitt auf «Behandlung und Verlauf»), b über W1-F-09, c nein. **Offen bei der Fachstelle:** W1-F-11 (Betreuungsgutschriften, Kurzurlaub), W1-F-15 (Abgleich des Boots mit dem Heft), W1-F-19 (Angebote), W1-F-21 (fachliche Freigaben).

### Umgesetzt nach den Prüfrunden (bauende Sitzung)

- **11.10.2026 · W2-01, W2-02 (Verweise L1 bis L12, `5ad9cc8`):** zwölf Verweise nach W2-C eingefügt, je ein Satz mit Link und ohne neue fachliche Aussage. L1 und L2 im Wortlaut von `ihre-situation` › `angst`; L9 als Link auf «Grenzen setzen» im bestehenden Satz; L12 als Übergangssatz (`.puk-longform__transition`) am Ende der Seiten 2 bis 7, nicht auf der letzten Seite. Geprüft: alle internen Links führen auf vorhandene Ziele; kein horizontaler Überlauf bei 320 und 1280 px; Gate 0 blockierend.
- **11.10.2026 · Entscheide W1-F und W2-F, Quellen W1-09 und W1-10:**
  - **Rechte (W1-01, W2-03, W2-04):** Abb. 1 Kurztext an § 15 Abs. 2 PatG ZH angepasst; Formulierungsbeispiel «Falls Sie mir nichts über meinen Mann sagen dürfen: …»; Visualisierungsplan `v-ra-vergleich` › `resonance` «vielleicht»; «Bezugsperson» nur noch auf `rechte-und-angebote`, vor Abb. 1 erklärt (erste, dann zweite Linie nach Leitfaden der Gesundheitsdirektion); «Einverständnis» auf allen Seiten, einmal «(rechtlich: Einwilligung)»; `index` «nahestehende Menschen».
  - **Verlauf (W1-02, W1-20):** `formen` «Bei etwa der Hälfte …» für beide Formen; «nach dem Abklingen der Beschwerden» in `vorbeugen` und Abb. 2 Schritt 5.
  - **Belastung (W1-03, W1-04, W1-08, W1-19):** `gesundheit` auf Idstad gekürzt; Vertiefung Abb. 2 mit Butzlaff und Hooley 1998; Gefäss-Kurztext: «fehlende Information» fliesst zu, «dagegen lässt sich etwas tun» (Bild unverändert); Barometer-Zahl auf `index` und `nicht-allein` mit «in Deutschland» und «für das Familienleben».
  - **Rollen (W1-05, W1-13, W1-14, W1-15, W1-16):** Geschwister «ein erhöhtes Risiko», Satz zur Unterstützung gestrichen, «psychische Erkrankungen allgemein» benannt; Schutzfaktoren nach Collishaw (fünf gemessene Faktoren); Absatz zu einem Elternteil, der erst im Alter erkrankt; Waage Mitte «sage dir»; Satz zu Scham bei Kindern (Dam und Hall, bisher ohne Aussage auf der Seite).
  - **Hilfen (W1-06, W1-07, W1-11, W2-06):** «Familienkurse zur Krankheit» ohne «nachweislich»; Achtsamkeit mit Einschränkung; Paartherapie nur auf `fuer-sich-sorgen` ausgeführt, auf `ihre-situation` und `je-nach-rolle` je ein Satz mit Link; Barbato auf `ihre-situation` entfernt.
  - **Struktur (W2-05, W2-09, W2-10, W2-11, W1-18):** «mittelgradig» und «(nach einem Fragebogen)»; «Plan für schwierige Zeiten»; Abschnitt «Wenn ein Klinikaufenthalt nötig wird» nach Abb. 2 auf `behandlung-und-verlauf`; sechster Kernsatz auf `index`; `eigene-krise`: Zuständigkeitsverweis vor dem Satz zur Fachstelle.
  - **Abschwächungen (W1-12):** Salk («in Befragungen … die Merkmale»), Martin («kann sich eher … zeigen», «noch nicht sicher geklärt»), Sullivan («Lebenserfahrungen und andere Einflüsse»), Whisman («Studien weisen darauf hin»), Martire («kann … leichter werden»), Kern Gefäss («weniger von Ihrer Stärke»), Lichttherapie («kann helfen»), Kika («Manche»), Dazzi («kann sogar entlasten»), «oft Zeichen der Krankheit»; Etikett «Eltern depressiver Jugendlicher» ersetzt. «die Hälfte der Erkrankten» (`verlauf`) bleibt bis S.
  - **Trauer, Psychotherapie (W1-23, W1-24):** Satz zur ungewöhnlich langen Trauer; Anordnung «Hausärztin, Psychiaterin oder eine andere dazu berechtigte Ärztin», Quelle Art. 11b KLV.
  - **Quellen (W1-09):** vollständige Angaben mit Titel und DOI aus W1-C für alle Fachartikel; Barbato mit Parabiaghi; SGPP-Titel «Die Behandlung der unipolaren depressiven Störungen. Update 2025, Teil 1»; Albermann und Müller, Pro Mente Sana, Greally, MHFA (revised 2018) korrigiert; PatG § 15 Abs. 2; NVL «Kapitel 1.4 (Verlauf), 3 bis 6»; Studie zur Dauer genannt (Spijker et al. 2002, über PubMed geprüft); Arbeitsheft in der Quellenliste von `begleiten`. Schomerus nur mit dem englischen Titel aus PubMed (deutscher Originaltitel nicht geprüft). Bei Salk ohne Band, weil «143» das Gate für Notrufnummern auslöst.
  - **Neue Quellen (W1-10), über PubMed geprüft:** Cipriani et al. 2018 (Wirkung der Antidepressiva, `depression-verstehen`, `behandlung-und-verlauf`); Chung et al. 2017 (Zeit nach dem Klinikaustritt); Butzlaff und Hooley 1998; Spijker et al. 2002. Aussagen ohne Quelle angepasst: «Über Belastendes zu sprechen, kann zu Beginn anstrengend sein»; «acht bis zwölf Wochen» gestrichen; «Wird er früh erkannt, lässt sich die Behandlung rasch anpassen»; «Sie dürfen die Veränderungen ansprechen»; «Ferien oder einen Ortswechsel als Heilmittel verordnen»; «Partnerinnen und Partner leben oft Tag und Nacht mit der Krankheit»; Rasic «deutlich häufiger» statt «zwei- bis dreimal»; Angehörigengruppen «von den Teilnehmenden sehr geschätzt»; van Wijngaarden ohne Rangfolge; Barometer «fühlten sich nicht gut informiert oder nicht einbezogen».
  - **Gate:** `rechte-und-angebote` erhält `zwang` in `sensitiveTopics` (Quellentitel «im psychiatrischen Zwangskontext»).
  - **Geprüft:** Gate 0 blockierend, 13 Hinweise; alle internen Links mit Ziel; kein horizontaler Überlauf bei 320 und 1280 px; Abb. 1 `rechte-und-angebote` und der neue Abschnitt zum Klinikaufenthalt bei 360 und 1280 px angesehen.

### Begriffe nach den Entscheiden W2-F-01 bis W2-F-03 (bauende Sitzung, für S und W2-D)

| Begriff | Gilt | Wo |
| --- | --- | --- |
| Bezugsperson | nur als Rechtsbegriff nach PatG ZH, vor Abb. 1 erklärt | `rechte-und-angebote` |
| nahestehende Menschen | allgemein für Angehörige und Freunde | `index` |
| Einverständnis | im Text überall; einmal «(rechtlich: Einwilligung)» | alle Seiten |
| mittelgradig | Schweregrad der Diagnose | `depression-verstehen`, `behandlung-und-verlauf` |
| mittelschwere bis schwere Beschwerden (nach einem Fragebogen) | nur bei der SGB-Zahl | `index`, `depression-verstehen` |
| Plan für schwierige Zeiten | Absprache für frühe Zeichen und Rückfall | `behandlung-und-verlauf` › `vorbeugen` |

### Weiterhin offen nach der Umsetzung (für die nächste W1-Runde)

1. **Neue Inhalte, noch nicht geprüft:** Abschnitt «Wenn ein Klinikaufenthalt nötig wird»; Absatz zu einem Elternteil, der erst im Alter erkrankt; Satz zu Scham bei Kindern; Erklärung «Bezugsperson» vor Abb. 1; Satz zur langen Trauer.
2. **Aussagen weiterhin ohne deckende Quelle (W1-10):** `depression-verstehen` › `anders` (ältere Menschen, körperliche Beschwerden, rund um die Geburt); `behandlung-und-verlauf` › Abb. 1 «drei bis vier Wochen» (nur Paraphrase der NVL); `ihre-situation` › `angst` «dauernde Wachsamkeit», «Trauer um das, was … verloren geht»; `fuer-sich-sorgen` Programmname «Familiencoach Depression» und «kostenlos» (Website des Programms fehlt); `rechte-und-angebote` «auch bei einer psychischen Erkrankung» (BSV) und «allgemein informieren» (BAG). Streichen entscheidet die Fachstelle.
3. **Quellenangaben (W1-09):** Abrufdatum der Online-Quellen setzt, wer die Links vor der Veröffentlichung prüft; Obsan-Bulletin für die Suizidzahlen (08/2024 oder 11/2024) und PatG § 19 nicht geprüft; NVL-Kapitel zu Suizidalität (2 oder 12) nicht geprüft.
4. **Prüflücke W1-25** bleibt: Leitlinien, Recht, Statistiken und Angebote am Original prüfen.

### Offener Prüfbedarf (für W1)

1. Für sich sorgen › `was-hilft`, Eintrag «Achtsamkeit»: Die Aussage mit Zhang et al. 2024 abgleichen (bisher nur anhand der Zusammenfassung). Der Text sagt die Wirkung ohne Einschränkung aus, beim Familiencoach dagegen «leicht»; W1 entscheidet, ob ein Hinweis auf die begrenzte Studienqualität nötig ist.
2. Begleiten, Abbildung 1: Bild und Aussage mit der Ruderboot-Metapher im Arbeitsheft «Wenn dein Partner depressiv ist» abgleichen.
3. Je nach Rolle: Befunde zu Eltern erwachsener Kinder und zu erwachsenen Kindern stammen aus Studien zu Jugendlichen bzw. allgemein; auf der Seite benannt.
4. Rechte und Angebote: Websites der Angebote vor der Veröffentlichung prüfen; Stand auf der Seite: 10.10.2026.
5. Aktualisierung einplanen: NVL-Kapitel 10 (Gender, Alter, Peripartalzeit) bei Erscheinen; nächste NVL-Überprüfung 09/2027.

Ergebnis der Prüfsitzung zu diesen fünf Punkten: «W1-E · Offener Prüfbedarf der bauenden Sitzung» unter «Befunde je Stufe».

## Selbstprüfung der bauenden Sitzung

Arbeitsstand vom 10.10.2026, keine Prüfstufe. Elf Figuren: `v-dv-schichten` (K), `v-dv-entstehung` (G), `v-bv-vergleich` (E), `v-bv-weg` (C), `v-bv-fruehzeichen` (J), `v-is-gefaess` (G), `v-is-kreislauf` (B), `v-ro-spannung` (H), `v-bg-boot` (D), `v-fs-netz` (I), `v-ra-vergleich` (E).

## Visualisierungs-Check

| Nr. | Prüfpunkt | Ergebnis | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Visualisierungsplan liegt vor; die Seiten entsprechen ihm | erfüllt | `site.config.json` › `visualPlan`: 49 Zeilen auf 8 Seiten, 11 Darstellungen; jede Figur trägt `data-visual-id` und `data-visual-type` wie im Plan (Gate: keine Befunde «visual-plan» oder «plan-section») | – |
| 2 | Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt | erfüllt | Gate meldet keinen Abschnitt ohne Zeile. Beispiel: Depression verstehen › `anders` «Ein Vergleich Männer–Frauen würde einen Unterschied zuspitzen, den die Studien nur als Tendenz zeigen»; Begleiten › `suizidgedanken` «kurze, direkte Anleitung ohne Grafik» | – |
| 3 | Prüffrage je Darstellung konkret beantwortet; die Darstellung zeigt, was die Antwort verspricht | erfüllt | Behandlung › Abb. 2: Plan verspricht Reihenfolge, optionalen Schritt und Weiterbehandlung; Pfad zeigt Schritt 4 gestrichelt «bei Bedarf» und Schritt 5 «Weiterbehandeln», keine Dauer (Vertiefung: «Der Pfad zeigt nur die Reihenfolge, keine Dauer»). Rechte › Abb. 1 zeigt «ohne/mit Einwilligung» nach fünf gleichen Merkmalen | – |
| 4 | Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung | erfüllt | alle 11 Figuren mit `p.puk-vis-kern` und `p.puk-vis-short`. Je nach Rolle › `eltern`: «Auch ohne Einverständnis Ihres erwachsenen Kindes dürfen Sie …» steht im Fliesstext nach der Figur, nicht in der Vertiefung | – |
| 5 | Erklärmodelle (B, C, G): Ansatzpunkt markiert oder Verzicht begründet; keine Verantwortung zugeschoben | erfüllt | `v-bv-weg` Schritt 1 (`li.is-ansatz`); `v-is-kreislauf` Station 3 (`li.is-ansatz`, «Ansatzpunkt»); `v-is-gefaess` Abfluss mit doppeltem Ring; `v-dv-entstehung` entryPoint «entfällt: Die Entstehung liegt nicht in der Hand der Angehörigen …». Zusätzlich J: «Die Entscheidung über die Behandlung bleibt bei der erkrankten Person.» | – |
| 6 | Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt | erfüllt | Der Kreislauf steht nur auf «Ihre Situation»; «Je nach Rolle › Partner» verlinkt ihn («zeigt der Kreis unter …»). Gefäss (Verhältnis von Belastung und Entlastung) und Kreislauf (Wechselwirkung in der Beziehung) zeigen verschiedene Mechanismen | Prüfsitzung: K (Verhalten/Erleben) und B Station 1 berühren sich; beurteilen, ob ein Verweis nötig ist |
| 7 | Kartenraster-Check | erfüllt | keine `puk-web-card-list`; Gate ohne Hinweis «card-grid» | – |
| 8 | Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung | erfüllt | K: Lage über/unter der Wasserlinie; G Schwelle: Höhe der Teile an derselben Linie; Gefäss: Zu- und Abfluss; B: geschlossene Schleife; C: Reihenfolge und gestrichelter Schritt; J: Linienstärke; H: Seiten und Drehpunkt; I: Abstand zur Mitte, Linienart; E: gleiche Merkmale auf gleicher Höhe | – |
| 9 | Darstellungen über den Erkenntnisweg verteilt; keine unbegründete Textwand | teilweise | Seiten 2–8 mit 1–3 Figuren, die Übersicht ohne Figur (begründet). «Je nach Rolle» hat sechs Textabschnitte und eine Figur | Prüfsitzung: beurteilen, ob «Je nach Rolle» als Textseite trägt (eigenständige Einstiege) oder eine weitere Erklärform braucht |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle oder Kennzeichnung vorhanden | erfüllt | Kennzeichnung in allen 11 Legenden (Gate «figure-source» ohne Befund). Grenzen in der Vertiefung aller 11 Figuren, z. B. J: «Nicht jeder Rückfall kündigt sich an … keine Skala zum Selbsttest»; Rechte › Abb. 1: «Die Übersicht vereinfacht das Recht.» | – |
| 11 | Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich | erfüllt | G Schwelle: Grundzustand `data-mode="all"`, Schritt-Aufbau nur auf Knopfdruck; keine Hover-Inhalte; Kernaussagen stehen ausserhalb von `details` | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | erfüllt | kein Überlauf bei 320 px (Messung oben); alle Figuren mit `aria-describedby` ≥ 40 Zeichen (Gate «figure-alt» ohne Befund). K blendet die Zeichnung unter 560 px aus, die beiden Schichten bleiben als Listen | Prüfsitzung: Lesbarkeit der Boot-Zeichnung bei 360 px beurteilen (Figuren klein) |
| 13 | Theme «Hoher Kontrast» geprüft | teilweise | nur im Code geprüft: keine Hexwerte, Linien und Flächen über Klassen (`puk-vis-ln`, `puk-vis-scene__ln`, `puk-vis-water`); Kreislauf-Pfeile mit `var(--puk-blue-100)` wie im Starter. **Nicht im Browser mit dem Theme angesehen** | Prüfsitzung: Theme visuell prüfen |
| 14 | Inhalt fachlich freigegeben | nicht erfüllt | alle 11 Darstellungen «ausstehend» im Plan; Texte Musterentwurf | Freigabe durch die Fachstelle nach W1 |
| 15 | Bildsprache passt zum Thema; Wirkung im Plan und im Bild eingelöst | erfüllt (Selbsteinschätzung) | Wirkung (`resonance`) bei allen 11 Darstellungen im Plan. Boot: zwei ruhige Linienfiguren, je ein Ruder, Sätze aus Sicht der beiden Menschen; Gefäss: Sätze an Zu- und Abfluss. G Schwelle nutzt Rechtecke, ist aber ein Strukturmodell, kein Erlebensbild | Bilder von der Fachstelle am 10.10.2026 gutgeheissen («Die Bilder sind perfekt.»); Prüfsitzung prüft die Punkte trotzdem je Figur |
| 16 | Metapher ohne Code: ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | erfüllt | Gefäss: «Sie ist seit Wochen schwer krank.», «Meine Schwester übernimmt den Mittwoch.» – keine Namen von Bildteilen, keine Legende; Boot: «Heute schaffe ich nur wenige Züge.» / «Ich bin da und rudere auf meiner Seite.»; K: Sätze in beiden Schichten | – |
| 17 | Keine ungewollten Bedeutungen | erfüllt (Selbsteinschätzung) | K bewusst ohne Eisberg (Gefahr für Schiffe); die Form ist eine weiche, neutrale Rundung. Kein Motiv zeigt die erkrankte Person als Gefahr oder Defekt | Prüfsitzung: Lesart der K-Form (Stein, Ei?) beurteilen |

### Matrix je Figur (Prüfsitzung)

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Je Befund ein Eintrag unter «Befunde je Stufe».

| Nr. | Prüfpunkt | `v-dv-schichten` | `v-dv-entstehung` | `v-bv-vergleich` | `v-bv-weg` | `v-bv-fruehzeichen` | `v-is-gefaess` | `v-is-kreislauf` | `v-ro-spannung` | `v-bg-boot` | `v-fs-netz` | `v-ra-vergleich` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | | | | | | | | | | | |
| 2 | Zeile je Abschnitt; Begründungen passen | | | | | | | | | | | |
| 3 | Prüffrage beantwortet und eingelöst | | | | | | | | | | | |
| 4 | Kernaussage und Erklärtext | | | | | | | | | | | |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | | | | | | | | | | | |
| 6 | Mechanismus nicht doppelt gezeigt | | | | | | | | | | | |
| 7 | Kartenraster-Check | | | | | | | | | | | |
| 8 | Form und Linien tragen Bedeutung | | | | | | | | | | | |
| 9 | Verteilt, keine Textwand | | | | | | | | | | | |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | | | | | | | | | | | |
| 11 | Ohne Aufklappen und Skript verständlich | | | | | | | | | | | |
| 12 | 320 px lesbar; Textalternative | | | | | | | | | | | |
| 13 | Theme «Hoher Kontrast» | | | | | | | | | | | |
| 14 | Fachlich freigegeben | | | | | | | | | | | |
| 15 | Bildsprache passt; Wirkung eingelöst | | | | | | | | | | | |
| 16 | Metapher ohne Code | | | | | | | | | | | |
| 17 | Keine ungewollten Bedeutungen | | | | | | | | | | | |

## Befunde je Stufe

### W1 Fachliche Prüfung

#### Prüfrunde W1 (10.10.2026, Stand `58d5fad`)

**Geprüft durch:** eine Prüfsitzung (Claude Code), die die Website nicht gebaut hat. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht. Jeder Befund stammt aus dieser einen Prüfung («Prüfung 1»); eine zweite, unabhängige W1-Sitzung wird empfohlen.

**Grundlage:** `content/*.html` und `site.config.json` aller acht Seiten, Seite für Seite gelesen; die gebauten Seiten (in der Prüfsitzung im Speicher neu gerendert: alle 8 identisch mit den committeten Dateien, also aktuell). Kriterien: Abschnitt «Fachliche Qualität und Haltung» (`guidelines/00-fachliche-qualitaet-und-haltung.md`), Punkte A1–A6, Q1–Q5, B1–B7, C1–C3, D1–D2 (Liste unten).

**Grenzen dieser Prüfung**

- **Originale nur teilweise zugänglich.** Die Prüfumgebung durfte die Websites der Originale nicht laden (Netzwerkrichtlinie, Proxy 403 für leitlinien.de, psychiatrie.ch, obsan.admin.ch, fedlex.admin.ch, zh.ch, bag.admin.ch, ahv-iv.ch, pubmed.ncbi.nlm.nih.gov, doi.org und die Anbieter).
  - **Fachartikel** (33 zitierte Arbeiten, dazu Spijker et al. 2002 und Butzlaff und Hooley 1998 zum Abgleich) wurden über die PubMed-Schnittstelle an Metadaten und Abstract geprüft, wo vorhanden zusätzlich am PMC-Volltext. Hooley und Gotlib 2000 ist nicht in PubMed.
  - **Leitlinien, Gesetze, Statistiken, Befragungen und Angebote** konnten nur über Suchergebnisse geprüft werden. Sie gelten in diesem Bericht als **nicht am Original geprüft** (W1-25).
- **Kein Umbau.** Die Website ist neu, es gibt keinen Bestand. Der Abgleich von 20 Aussagen mit dem Bestand entfällt. Die Inhaltsgrundlage (Recherchebericht «Depression bei Erwachsenen», Ergänzung, Dokument zur Situation der Angehörigen) und das Arbeitsheft «Wenn dein Partner depressiv ist» liegen nicht im Repository; ein Abgleich damit war nicht möglich.
- Die Matrix des Visualisierungs-Checks gehört zu Stufe 4 und ist nicht Teil dieser Runde. Fachliche Befunde zu Figuren stehen unter C2.

**Ergebnis:** W1 bleibt **offen**. 25 Befunde (14 wichtig, 11 optional), 21 Fragen an die Fachstelle (W1-F-01 bis W1-F-21). Für «erledigt» fehlen die Entscheide der Fachstelle, die Korrekturen der bauenden Sitzung und die Prüfung der in W1-25 genannten Stellen am Original.

**Prüfpunkte (Kurzform der Leitlinie)**

- **A Fachliche Richtigkeit:** A1 Definitionen, Modelle, Zahlen, Klassifikation · A2 Ursache, Risikofaktor, Zusammenhang, Folge; Stärke der Formulierung · A3 Ebenen (Symptom, Diagnose, Erleben, Beziehung, Behandlung, Alltag) · A4 Medikamente und Therapien ohne Einzelfallempfehlung · A5 Schweizer Kontext · A6 Krisenthemen ruhig, keine Krisenzuständigkeit, keine Nummern
- **Q Quellenstandard:** Q1 zentrale Aussagen belegt, Quelle deckt die Aussage · Q2 Angaben vollständig und korrekt (Autorinnen und Autoren, Jahr, Titel, Zeitschrift; URL und Abrufdatum) · Q3 wissenschaftlich, leitlinienbasiert, bei Recht amtlich · Q4 Darstellung (`.puk-longform__sources`, `.puk-longform__source-use`, Linktexte) · Q5 nichts erfunden, Unsicheres markiert
- **B Zielgruppenbezug und Haltung:** B1 Perspektive, wer gemeint ist · B2 entlastend · B3 personenzentriert · B4 Hoffnung ohne Beschönigung · B5 Autonomie, keine Kontrollinstanz · B6 Belastung, Grenzen, Selbstsorge · B7 Anrede
- **C Verständlichkeit:** C1 lesbar unter Stress, Fachbegriffe erklärt, Kernaussage · C2 Grafiken und Tabellen korrekt · C3 Überschriftenfolge, Alternativtexte, Linktexte
- **D Praxisbezug:** D1 konkrete Empfehlungen, Formulierungsbeispiele · D2 reale Situationen

#### W1-A · Kennzahlen der bauenden Sitzung, nachgerechnet

| Angabe der bauenden Sitzung | Nachgerechnet (Prüfsitzung, 10.10.2026) | Ergebnis |
| --- | --- | --- |
| `node tools/build.mjs` → 8 Seiten, 0 blockierend, 13 Hinweise (11 × Visualisierung, `siteUrl`, Prüfbericht) | `build.mjs` schreibt die Seiten und wurde darum nicht ausgeführt. Stattdessen: Seiten im Speicher mit `tools/contract.js` gerendert und das Gate darauf angewendet → 8 Seiten, alle identisch mit den committeten Dateien; 0 blockierend, 13 Hinweise (`visual-approval` 11, `site-url` 1, `review-report` 1). `node tools/gate.mjs` auf den committeten Seiten: «Gate draft: 0 blockierend, 13 Hinweise» | bestätigt |
| `node tools/gate.mjs --selftest` → 53/53 | «Selbsttest: 53/53 bestanden.» | bestätigt |
| `--production` blockiert | 12 blockierend (11 × `visual-approval`, 1 × `review-report`), 1 Hinweis (`site-url`) | wie erwartet |
| `visualPlan`: 49 Zeilen auf 8 Seiten, 11 Darstellungen | 49 Zeilen; 11 Zeilen mit `format` ≠ `text`; je Seite Abschnitte = Planzeilen (4, 6, 7, 7, 8, 6, 6, 5), kein Abschnitt ohne Zeile, keine Zeile ohne Abschnitt | bestätigt |
| `understood` und `resonance` bei allen 11, `entryPoint` bei B, C, G | `understood` 11/11, `resonance` 11/11; `entryPoint` bei `v-dv-entstehung`, `v-bv-weg`, `v-is-gefaess`, `v-is-kreislauf` (G, C, G, B) | bestätigt |
| 11 Figuren mit `data-visual-id`, Kernaussage und Erklärtext | 11 × `data-visual-id`; je Figur `p.puk-vis-kern`, `p.puk-vis-short` und `details.puk-vis-more` vorhanden | bestätigt |
| Textalternativen ≥ 40 Zeichen | Länge des Textes hinter `aria-describedby`: 193 (`v-fs-netz`) bis 367 (`v-dv-entstehung`) Zeichen | bestätigt |
| keine Hexwerte und keine `style`-Attribute in `content/` | 0 Treffer für Hexwerte (ohne Sprungmarken), 0 × `style=` | bestätigt |
| kein horizontaler Überlauf bei 1280, 360, 320 px (Playwright) | Playwright/Chromium, alle 8 Seiten, `scrollWidth − clientWidth` = 0 bei 1280, 360 und 320 px; keine Konsolenfehler | bestätigt |
| «Schritt für Schritt aufbauen» per Tastatur, Live-Region «Schritt 1 von 3: Verletzlichkeit» | Fokus auf die Schaltfläche, Enter → Live-Region «Schritt 1 von 3: Verletzlichkeit», `data-mode="steps"`, «Weiter» sichtbar; Leertaste auf «Weiter» → «Schritt 2 von 3: Belastung» | bestätigt |
| (neu) Wörter je Seite | sichtbarer Text ohne Quellenliste und SVG: 529 · 1289 · 1460 · 1062 · 1154 · 809 · 695 · 774 (Reihenfolge der Navigation), zusammen 7772 | für W2 und S |

#### W1-B · Seite für Seite

Ergebnis je Prüfpunkt: erfüllt · teilweise · nicht erfüllt · entfällt (mit Grund). Belege nennen Seite (`id`) › Abschnitt (`sectionId`) und zitieren den Text.

**Seite 1 · Übersicht (`index`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | erfüllt (nicht am Original geprüft) | `einstieg`: «rund jede zehnte Person …» – SGB 2022: 9,8 % (kantonale Auswertung, Sekundärquelle); `kurz`: «Drei von vier Angehörigen …» – Barometer 2024: «Rund drei Viertel der Angehörigen beschreibt die Depression … als große Belastung für das Familienleben» | W1-25 |
| A2 Zusammenhang und Stärke | teilweise | `kurz` verallgemeinert eine deutsche Befragung zu einer allgemeinen Aussage ohne «in Deutschland» und ohne «für das Familienleben» (so auf `ihre-situation` › `nicht-allein`) | W1-19 |
| A3 Ebenen | erfüllt | Kernsätze trennen Krankheit, Ursache, Belastung, Rolle, Rechte | – |
| A4 Therapien | erfüllt | nur «gut behandelbar», Verweis auf `behandlung-und-verlauf` | – |
| A5 Schweizer Kontext | erfüllt | SGB 2022; Fachstelle der PUK | – |
| A6 Krisenthemen | erfüllt | Lesepfad «Ich mache mir Sorgen, dass die Person nicht mehr leben will.» führt auf `begleiten.html#suizidgedanken`; keine Nummer, keine Krisenzuständigkeit der Fachstelle | – |
| Q1 belegt | erfüllt | Seite ohne Quellenliste; beide Zahlen sind auf `depression-verstehen` (Obsan) bzw. `ihre-situation` (Barometer 2024) belegt | – |
| Q2–Q5 | entfällt | keine eigene Quellenliste (Übersicht) | – |
| B1 Perspektive | erfüllt | `einstieg`: «richtet sich an Angehörige und nahe Bezugspersonen von Erwachsenen mit Depression» | – |
| B2 entlastend | erfüllt | «Niemand hat die Depression verschuldet, weder die erkrankte Person noch Sie» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Erwachsene mit Depression» | – |
| B4 Hoffnung | erfüllt | «Sie ist gut behandelbar» | – |
| B5 Autonomie | erfüllt | «Sie können begleiten, aber nicht heilen. Die Verantwortung für die Behandlung liegt nicht bei Ihnen» | – |
| B6 Belastung | erfüllt | «Ihre Belastung ist berechtigt»; Lesepfad «Mir wird es zu viel.» | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | fünf Kernsätze, Lesepfade als Fragen | – |
| C2 Grafiken | entfällt | keine Figur (Planbegründungen) | – |
| C3 Überschriften, Links | erfüllt | 19 sprechende interne Links, alle Ziele vorhanden (Gate ohne Befund «link-target») | – |
| D1 Empfehlungen konkret | erfüllt | Kontakt zur Fachstelle mit Adresse; Einstieg nach Frage | – |
| D2 reale Situationen | erfüllt | «Warum zieht sie sich so zurück?», «Was darf ich erfahren?» | – |

**Seite 2 · Depression verstehen (`depression-verstehen`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Definitionen, Zahlen, Klassifikation | teilweise | `was-ist`: Kriterien entsprechen nach Kenntnis der Prüfsitzung der ICD-11 (mind. zwei Wochen, ein Kernsymptom aus Stimmung oder Interesse; nicht am Original geprüft); ICD-11 kennt keine eigene Kategorie «chronische Depression» (Dysthymie 6A72, Zusatzcode 6A80.2), die Quellenzeile ordnet die Formen aber der ICD-11 zu; `formen`: «Etwa jede vierte Depression bleibt einmalig» und «Bei den meisten kehrt die Depression … wieder» passen nicht zu `behandlung-und-verlauf` › `verlauf` («40 bis 60 von 100»); `anders`: «fast dreimal so oft durch Suizid» gestützt (2022: 695 Männer, 263 Frauen; Zahlen vermutlich aus Obsan-Bulletin 08/2024), «Männer lassen sich seltener behandeln» im Obsan-Material nicht gefunden | W1-02, W1-09, W1-24, W1-25 |
| A2 Zusammenhang und Stärke | teilweise | `entstehung` sauber («Eine einzelne Ursache gibt es fast nie», «kann … beginnen»); zu stark: «Frauen erhalten die Diagnose» (Salk: Kriterien in Befragungen), «zeigt sich häufiger als …» (Martin: weiterer Forschungsbedarf), «den grösseren Teil erklären Lebenserfahrungen» (Sullivan: inkl. Messfehler) | W1-12 |
| A3 Ebenen | erfüllt | Symptom (`was-ist`), Erleben (Abb. 1 «Was die Person erleben kann»), Entstehung, Formen getrennt | – |
| A4 Therapien | erfüllt | nur Hinweise: «die Behandlung ist eine andere» (bipolar), «braucht es eine fachärztliche Behandlung» (psychotisch) | – |
| A5 Schweizer Kontext | erfüllt | SGB 2022, Suizidzahlen der Schweiz, Hausarztpraxis als erster Schritt | – |
| A6 Krisenthemen | erfüllt | Suizid als Symptom («Gedanken an den Tod oder an Suizid») und als Zahl, ohne Alarmton | – |
| Q1 belegt, Quelle deckt | teilweise | ohne deckende Quelle: `anders` › «Bei älteren Menschen», «Mit körperlichen Beschwerden», «Rund um eine Geburt»; `formen` › Trauer und Burnout; Vertiefung «Antidepressiva wirken trotzdem» (Moncrieff und Jauhar enthalten keine Wirksamkeitsdaten) | W1-10 |
| Q2 Angaben vollständig | teilweise | ICD-11 ohne URL und Abrufdatum; Salk, Martin, Sullivan ohne Titel; Moncrieff/Jauhar ohne DOI; kein Abrufdatum; SGPP-Titel lautet «Die Behandlung der unipolaren depressiven Störungen: Update 2025, Teil 1» | W1-09 |
| Q3 Quellenart | erfüllt | NVL, SGPP, ICD-11, Obsan, Meta-Analysen | – |
| Q4 Darstellung | erfüllt | 8 Einträge mit Verwendung | – |
| Q5 nichts erfunden | erfüllt | alle Fachartikel in PubMed gefunden, Links führen zur Arbeit | – |
| B1 Perspektive | erfüllt | `dahinter`: «Viele Angehörige erleben, dass …»; Übergang: «Für Angehörige ist oft nicht die Diagnose das Schwierigste» | – |
| B2 entlastend | erfüllt | Abb. 2 Kern: «Niemand hat sie verschuldet, weder die erkrankte Person noch Sie.»; Veranlagung «bestimmt aber nicht das Schicksal» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Menschen» | – |
| B4 Hoffnung | erfüllt | Dysthymie: «eine behandelbare Erkrankung und kein Charakterzug» | – |
| B5 Autonomie | erfüllt | Abb. 1: «Nachfragen hilft mehr als Deuten» | – |
| B6 Belastung | entfällt | Thema der Seiten `ihre-situation` und `fuer-sich-sorgen` | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | Fachbegriffe erklärt (Episode, Dysthymie, psychotische Merkmale mit Beispiel); Kernaussage je Abschnitt | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 «Was darunter liegt, ist eine Möglichkeit, keine Gewissheit»; Abb. 2 entspricht dem Vulnerabilitäts-Stress-Modell, Grenzen in der Vertiefung | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassungen 306 und 367 Zeichen; h3 in den Figuren | – |
| D1 Empfehlungen konkret | erfüllt | «Was würde es dir heute leichter machen?»; «Die Hausarztpraxis ist ein guter erster Schritt.» | – |
| D2 reale Situationen | erfüllt | «Ihr Partner sagt das Treffen mit Freunden zum dritten Mal ab.» | – |

**Seite 3 · Behandlung und Verlauf (`behandlung-und-verlauf`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `verlauf`: «die Hälfte … nach drei Monaten, drei Viertel nach einem Jahr» stimmt mit Spijker 2002 überein (Allgemeinbevölkerung); «40 bis 60 von 100» und «15 bis 30 von 100» laut Suchergebnis aus NVL Kap. 1.4 (Original nicht geöffnet); Widerspruch zu `depression-verstehen` › `formen` | W1-02, W1-25 |
| A2 Zusammenhang und Stärke | teilweise | «Je früher er erkannt wird, desto besser lässt er sich behandeln.» ohne Beleg; Lichttherapie «hilft» (Vertiefung Abb. 1) | W1-12 |
| A3 Ebenen | erfüllt | Behandlung, Weg, Verlauf, Vorbeugen, Einbezug getrennt | – |
| A4 Medikamente und Therapien | teilweise | ohne Einzelfallempfehlung: Kern Abb. 1 «Welcher passt, entscheidet die erkrankte Person gemeinsam mit der Fachperson»; Johanniskraut mit Wechselwirkungen. `vorbeugen`: «nach der Besserung noch sechs bis zwölf Monate» – NVL Kap. 6: «6–12 Monate über die Remission … hinaus»; Psychotherapie «nach acht bis zwölf Wochen» nicht belegt | W1-20, W1-10 |
| A5 Schweizer Kontext | teilweise | Weg im Kanton Zürich; Vertiefung Abb. 2: Grundversicherung, Franchise, Selbstbehalt, ärztliche Anordnung (BAG: seit 1.7.2022). «wenn eine Ärztin oder ein Arzt sie anordnet» – anordnen dürfen nur bestimmte Fachrichtungen (Art. 11b KLV) | W1-23 |
| A6 Krisenthemen | erfüllt | Schritt 2: «auch nach Suizidgedanken wird gefragt»; Krisenplan als Vorsorge der Person, ohne Krisenzugang | – |
| Q1 belegt, Quelle deckt | teilweise | Studie zu «Hälfte nach drei Monaten» nicht genannt; Psychotherapie «Zu Beginn kann es vorübergehend schwerer werden» ohne Quelle; Weg und Anordnung nur mit dem internen Recherchebericht belegt | W1-09, W1-10 |
| Q2 Angaben vollständig | teilweise | NVL «Kapitel 3 bis 6» mit Link auf Kapitel 3; Verlauf und Rückfallrisiko stehen laut Suchergebnis in NVL Kap. 1.4 «Verlaufsformen und prognostische Faktoren»; Recherchebericht nicht öffentlich; kein Abrufdatum | W1-09 |
| Q3 Quellenart | teilweise | rechtlich-administrative Aussage (Anordnung psychologischer Psychotherapie, Kostenübernahme) ohne amtliche Primärquelle (KLV, BAG) | W1-09 |
| Q4 Darstellung | erfüllt | 4 Einträge mit Verwendung; NVL-Empfehlung 3-8 genannt | – |
| Q5 nichts erfunden; Unsicheres markiert | erfüllt | Plan-Abweichung «ohne Sitzungszahlen» begründet (Prüfbericht); Kuyken mit vollem Titel | – |
| B1 Perspektive | erfüllt | Hero: «wo Sie unterstützen können, ohne die Verantwortung zu übernehmen» | – |
| B2 entlastend | erfüllt | «Ein Rückfall ist kein Versagen, weder von der erkrankten Person noch von Ihnen.» | – |
| B3 personenzentriert | teilweise | «die Hälfte der Erkrankten» (`verlauf`) | W1-12 |
| B4 Hoffnung ohne Beschönigung | erfüllt | «gut behandelbar» neben «Die Behandlung braucht aber Geduld, und die Krankheit kann wiederkommen.» | – |
| B5 Autonomie | erfüllt | Abb. 3 Ansatzpunkt: «Die Entscheidung über die Behandlung bleibt bei der erkrankten Person.»; Krisenplan: «Ein solcher Plan gehört der erkrankten Person.» | – |
| B6 Belastung | erfüllt | Schritt 4: «… oder das Umfeld überlastet ist» | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | Fachbegriffe erklärt oder ausgeschrieben (EKT, rTMS); Kernaussage je Abschnitt | – |
| C2 Grafiken korrekt | erfüllt | Abb. 2: Schritt 4 «bei Bedarf» gestrichelt; Vertiefung: «Der Pfad zeigt nur die Reihenfolge, keine Dauer.»; Abb. 3 › Grenzen: «keine Skala zum Selbsttest» | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassungen 221, 295, 305 Zeichen | – |
| D1 Empfehlungen konkret | erfüllt | Krisenplan mit fünf Punkten; zwei Formulierungsbeispiele | – |
| D2 reale Situationen | erfüllt | «Mir fällt auf, dass du seit einer Woche kaum schläfst. Wir hatten abgemacht, dass ich das anspreche.» | – |

**Seite 4 · Ihre Situation (`ihre-situation`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `nicht-allein`: «drei von vier Angehörigen …» (Barometer 2024, siehe Quellentabelle), «73 von 100» (Stand by You); `gesundheit`: «Schlafproblemen, Erschöpfung, Grübeln und körperlichen Beschwerden» – Idstad 2010 misst das nicht; `wechselwirkung` › Vertiefung: «spätere nicht» widerspricht Butzlaff und Hooley 1998 | W1-03, W1-04 |
| A2 Zusammenhang und Stärke | teilweise | Abb. 1 › Vertiefung benennt die Grenze gut («Ursache und Wirkung lassen sich nicht sicher trennen»). Zu stark: «Das ist gut untersucht» / «Gut belegt» (eine Längsschnittstudie, Assoziation); «wird es meist auch für Angehörige leichter» (Martire: nur depressionsspezifische Belastung, ab 60 Jahren); Kern Abb. 1 «hängt nicht von Ihrer Stärke ab» (absolut) | W1-12 |
| A3 Ebenen | erfüllt | Belastung der Angehörigen (`nicht-allein` bis `gesundheit`), Beziehung (`wechselwirkung`) und Angst um das Leben (`angst`) stehen in getrennten Abschnitten | – |
| A4 Therapien | erfüllt | Paartherapie nur mit Vorbehalt: «nach bisherigen, noch schwachen Studien ähnlich gut wie eine Einzeltherapie» (Barbato 2018: «low-quality evidence») | – |
| A5 Schweizer Kontext | erfüllt | Schweizer Zahl neben der deutschen: «In einer Schweizer Befragung berichteten 73 von 100 …»; deutsche Daten als solche benannt («in Deutschland») | – |
| A6 Krisenthemen | erfüllt | `angst`: ruhig («Viele beschreiben eine dauernde Wachsamkeit»), Verweis auf `begleiten.html#suizidgedanken`, keine Nummer, keine Krisenzuständigkeit | – |
| Q1 belegt, Quelle deckt | teilweise | Idstad deckt `gesundheit` nicht; Hooley und Gotlib nicht prüfbar, «spätere nicht» ohne Quelle; «Am häufigsten … Sorge» im Abstract von van Wijngaarden 2004 ohne Rangfolge; «Viele beschreiben eine dauernde Wachsamkeit» und «Trauer um das, was … verloren geht» ohne Quelle | W1-03, W1-04, W1-10 |
| Q2 Angaben vollständig | teilweise | keine Titel bei 8 Fachartikeln; Martire und Hooley ohne Link; Barbato ohne dritten Autor; kein Abrufdatum bei Barometer und Stand by You | W1-09 |
| Q3 Quellenart | erfüllt | Meta-Analysen, Kohorten, Cochrane; Befragungen als solche bezeichnet («Daten aus Deutschland», «Alle psychischen Erkrankungen, nicht nur Depression») | – |
| Q4 Darstellung | erfüllt | `ul.puk-longform__sources` mit 10 Einträgen, je `.puk-longform__source-use`; Linktexte nennen Autor und Jahr | – |
| Q5 nichts erfunden | erfüllt | alle 10 Quellen existieren; jeder verlinkte DOI führt zur genannten Arbeit (Quellentabelle) | – |
| B1 Perspektive | erfüllt | durchgehend Angehörige: «Wenn Sie sich belastet fühlen, geht es vielen ähnlich.» | – |
| B2 entlastend | erfüllt | «Sie ist kein Zeichen von Schwäche»; Abb. 2 Kern: «Daran ist niemand schuld»; Abb. 1 › Grenzen: «ein volles Gefäss ist kein Versagen» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Menschen mit Depression»; keine etikettierenden Bezeichnungen (Suche nach «Depressive», «Kranke») | – |
| B4 Hoffnung | erfüllt | Abb. 1: «wenn die Behandlung wirkt, wird es meist auch für Angehörige leichter» (Stärke siehe A2); Abb. 2: «eine Stelle, an der sich der Kreis lockern lässt» | – |
| B5 Autonomie | erfüllt | Abb. 2 › Ansatzpunkt beschreibt eigene Möglichkeiten: «Die eigene Ungeduld als Zeichen von Überlastung sehen … Entlastung für sich suchen» – keine Verantwortung für den Verlauf | – |
| B6 Belastung, Selbstsorge | erfüllt | Kern der Seite; Verweise auf `fuer-sich-sorgen` (2×) und `#eigene-krise` | – |
| B7 Anrede | erfüllt | «Sie» durchgehend | – |
| C1 verständlich | erfüllt | je Abschnitt eine Kernaussage, z. B. `nicht-allein` «Sie sind nicht allein»; keine unerklärten Fachbegriffe | – |
| C2 Grafiken korrekt | teilweise | Abb. 1: «fehlende Information» steht bei den Zuflüssen, an denen Angehörige «wenig ändern» können, und zugleich als Ansatzpunkt «Information holen»; `was-belastet` sagt: «Dagegen lässt sich etwas tun» | W1-08 |
| C3 Überschriften, Alternativen, Links | erfüllt | h1 › h2 je Abschnitt; Textfassungen 343 und 339 Zeichen; Linktexte sprechend | – |
| D1 Empfehlungen konkret | erfüllt | Abb. 1 › Ansatzpunkt: «Information holen, sich beraten lassen, Aufgaben teilen, Auszeiten einplanen»; Beispiel Herr K. | – |
| D2 reale Situationen | erfüllt | Sätze «Meine Schwester übernimmt den Mittwoch.», «Niemand sagt mir, wie es weitergeht.» | – |

**Seite 5 · Je nach Rolle (`je-nach-rolle`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `kinder`: «48 von 100 … 4 von 100» stimmt (Collishaw); Schutzfaktoren teils frei gedeutet; «zwei- bis dreimal so häufig» am Abstract von Rasic nicht prüfbar; `geschwister`: «etwas erhöhtes Risiko» bei HR 1,74 (Rhee) untertrieben; Barometer 2018 siehe Quellentabelle | W1-05, W1-13 |
| A2 Zusammenhang und Stärke | nicht erfüllt | `geschwister`: «Das liegt an gemeinsamen familiären und erblichen Faktoren, nicht an der Unterstützung, die sie leisten.» – kausale Aussage, die Rhee 2025 nicht untersucht; `partner`: «sind meist Zeichen der Krankheit» (auf `depression-verstehen` «oft»); `eltern`: «Viele erleben Schuld oder Scham» (Kika: «Some parents») | W1-05, W1-12 |
| A3 Ebenen | erfüllt | Rollen getrennt; Hinweise zu Behandlung nur als Verweis | – |
| A4 Therapien | erfüllt | `partner`: «es gibt Medikamente, die seltener solche Nebenwirkungen haben» – ohne Einzelfallempfehlung; Paartherapie «kann sinnvoll sein» | – |
| A5 Schweizer Kontext | erfüllt | Angebote Kinderseele Schweiz und VASK Zürich; Schweizer Zahl bei `freunde` | – |
| A6 Krisenthemen | erfüllt | `eltern`: «ob sich das Kind etwas antun könnte» ohne Alarmton, keine Nummer | – |
| Q1 belegt, Quelle deckt | teilweise | Rhee deckt den Teil «nicht an der Unterstützung» nicht; Greally ist keine «Übersicht zu Eltern erwachsener Kinder» (13 von 26 Studien); Dam und Hall: Quellenzeile «Scham und Verheimlichen» ohne Aussage auf der Seite; «Partnerinnen und Partner tragen oft die Hauptlast» ohne Quelle | W1-05, W1-09, W1-10 |
| Q2 Angaben vollständig | teilweise | Titel fehlen bei 11 Einträgen; Jayasinghe ohne Link; kein Abrufdatum | W1-09 |
| Q3 Quellenart | erfüllt | Meta-Analysen, Registerstudie, qualitative Synthesen; Barometer als Befragung benannt | – |
| Q4 Darstellung | erfüllt | 15 Einträge mit Verwendung | – |
| Q5 nichts erfunden; Unsicheres markiert | erfüllt | `eltern` und `erwachsene-kinder` benennen die dünne Forschung selbst: «die Befunde stammen meist aus Studien zu Jugendlichen oder zu psychischen Erkrankungen allgemein» (Prüfbedarf 3) | – |
| B1 Perspektive, wer gemeint ist | teilweise | `erwachsene-kinder` spricht nur an, wer «mit einem Elternteil mit Depression aufgewachsen ist»; Töchter und Söhne eines im Alter erkrankten Elternteils finden sich nicht; `geschwister` sagt nicht, dass die Befunde psychische Erkrankungen allgemein betreffen | W1-14, W1-15 |
| B2 entlastend | erfüllt | `kinder`: «Du bist nicht schuld»; Abb. 1: «Mein Hin und Her ist kein Versagen» (Plan); `geschwister`: «Sie dürfen selbst entscheiden, wie viel sie mittragen» | – |
| B3 personenzentriert | teilweise | Seitentext ohne Etiketten; Quellenzeile «Meta-Synthese zu Eltern depressiver Jugendlicher» | W1-12 |
| B4 Hoffnung | erfüllt | `partner`: «die Beziehung sei … tiefer geworden»; `kinder`: «Das ist kein Schicksal» | – |
| B5 Autonomie | teilweise | Abb. 1 Mitte: «… und frage, bevor ich etwas unternehme», darunter: «Auch ohne Einverständnis Ihres erwachsenen Kindes dürfen Sie dem Behandlungsteam Ihre Beobachtungen mitteilen» – das Verhältnis beider Aussagen bleibt offen | W1-16 |
| B6 Belastung, Selbstsorge | erfüllt | `erwachsene-kinder`: «Sie dürfen Grenzen setzen»; `freunde`: «Die Rolle einer Therapeutin … müssen Sie nicht übernehmen» | – |
| B7 Anrede | erfüllt | «Sie»; «du» nur in Formulierungsbeispielen | – |
| C1 verständlich | erfüllt | Einstieg `rollen`: «Jeder Abschnitt ist für sich lesbar.»; «Wir-Krankheit» erklärt («betrifft das Paar als Ganzes») | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 sagt «nicht, wo die Mitte liegen soll» (Vertiefung); Befunde nach Kika, Greally, Johansson | – |
| C3 Überschriften, Alternativen, Links | erfüllt | h2 je Rolle; Textfassung Abb. 1 267 Zeichen; Sprungziele aus `index` treffen die Abschnitte | – |
| D1 Empfehlungen konkret | erfüllt | drei Formulierungsbeispiele (`partner`, `kinder`, `freunde`); Fragen von Kindern als Liste | – |
| D2 reale Situationen | erfüllt | «Ich vermisse unsere Abende. Magst du mit mir eine kleine Runde spazieren?» | – |

**Seite 6 · Begleiten und Gespräche (`begleiten`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | entfällt | keine Zahlen; Warnsignale wie in den Quellen üblich | – |
| A2 Zusammenhang und Stärke | teilweise | «Über die Depression zu reden, macht sie nicht schlimmer.» (absolut, ohne zugeordnete Quelle); «für viele ist das Gespräch eine Entlastung» (Dazzi: «may», Menschen in Behandlung). Die Seite benennt die Evidenzart selbst: «beruhen vor allem auf dem Konsens von Fachleuten …» | W1-12 |
| A3 Ebenen | erfüllt | Haltung, Gespräch, Alltag, Ablehnung, Suizid getrennt | – |
| A4 Therapien | entfällt | keine Aussagen zu Medikamenten oder Therapien | – |
| A5 Schweizer Kontext | erfüllt | Hausarztpraxis als Weg; wie-gehts-dir.ch; keine deutschen Begriffe | – |
| A6 Krisenthemen | erfüllt | `suizidgedanken`: ruhig, direkt («Fragen Sie direkt nach.»), danach der Platzhalter `<p data-responsibility-inline></p>` mit geprüftem Wortlaut; keine Nummer, kein `tel:` | – |
| Q1 belegt, Quelle deckt | teilweise | «Ferien als Heilmittel verordnen: Ein Ortswechsel heilt keine Depression.» und «macht sie nicht schlimmer» ohne Quelle, die das deckt (MHFA am Original nicht prüfbar); Metapher «Mit im Boot» aus dem Arbeitsheft der Fachstelle, das nicht in der Quellenliste steht | W1-10, W1-17 |
| Q2 Angaben vollständig | teilweise | NVL-Kapitel und SGPP ohne Abrufdatum; MHFA ohne Jahr | W1-09 |
| Q3 Quellenart | erfüllt | Delphi-Leitlinie, Übersicht, NVL, SGPP | – |
| Q4 Darstellung | erfüllt | 5 Einträge mit Verwendung | – |
| Q5 nichts erfunden | erfüllt | Bond 2019 und Dazzi 2014 existieren wie angegeben | – |
| B1 Perspektive | erfüllt | Hero: «Heilen können Sie die Depression nicht, und das ist auch nicht Ihre Aufgabe.» | – |
| B2 entlastend | erfüllt | «Sie müssen das Problem nicht lösen.»; Abb. 1: «Manchmal geht es nur langsam, und das ist in Ordnung.» | – |
| B3 personenzentriert | erfüllt | «Menschen mit Depression», «erkrankte Person» | – |
| B4 Hoffnung | erfüllt | «Hoffnung vermitteln: Depression ist behandelbar» | – |
| B5 Autonomie | erfüllt | «Entscheidungen über die Behandlung und über das eigene Leben bleiben bei der erkrankten Person»; «Setzen Sie nie Täuschung, Zwang oder Drohungen ein.» | – |
| B6 Belastung, Grenzen | erfüllt | «Beleidigungen oder Übergriffe müssen Sie trotzdem nicht hinnehmen»; «Ein solches Gespräch belastet auch Sie.» | – |
| B7 Anrede | erfüllt | «Sie»; «du» nur in Beispielen | – |
| C1 verständlich | erfüllt | kurze Sätze, Listen; Kernaussage je Abschnitt | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 › Grenzen: «Das Bild zeigt eine Haltung, keine Pflicht.» Abgleich mit dem Arbeitsheft: Prüfbedarf 2 (unten) | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassung Abb. 1 306 Zeichen; Lesepfad von `index` trifft `#suizidgedanken` | – |
| D1 Empfehlungen konkret | erfüllt | drei Formulierungsbeispiele inkl. «Denkst du daran, dir das Leben zu nehmen?»; zehn konkrete Verhaltensweisen in `alltag` | – |
| D2 reale Situationen | erfüllt | «Ich habe die Nummer der Hausarztpraxis herausgesucht. Wenn du magst, rufen wir zusammen an.» | – |

**Seite 7 · Für sich sorgen (`fuer-sich-sorgen`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Zahlen und Modelle | teilweise | `was-hilft`: «Information über die Krankheit … Hilft nachweislich vor allem der erkrankten Person» (Katsuki 2022: Familien-Psychoedukation, GRADE «very low»); Achtsamkeit ohne Einschränkung | W1-06, W1-07 |
| A2 Zusammenhang und Stärke | teilweise | Einleitung von `was-hilft` vorbildlich («Versprechen lässt sich nichts»); dagegen «verbessert sie die Partnerschaft» (Paartherapie, «very low-quality evidence») und Achtsamkeit ohne Vorbehalt, während der Familiencoach «leicht» heisst | W1-07, W1-11 |
| A3 Ebenen | erfüllt | Haltung, Grenzen, Netz, Angebote, eigene Krise getrennt | – |
| A4 Therapien | erfüllt | Angebote ohne Einzelfallempfehlung («es lohnt sich, das Passende zu suchen») | – |
| A5 Schweizer Kontext | erfüllt | Familiencoach aus der Schweiz nutzbar (Entscheid der Fachstelle 10.10.2026); Verweis auf Angebote im Kanton Zürich | – |
| A6 Krisenthemen | teilweise | `eigene-krise`: Warnsignal «Sie haben selbst Gedanken, nicht mehr leben zu wollen.», danach E-Mail der Fachstelle, dann der Platzhalter. Keine Nummer; ob die Reihenfolge eine Krisenzuständigkeit der Fachstelle nahelegt, ist zu entscheiden | W1-18 |
| Q1 belegt, Quelle deckt | teilweise | Katsuki 2022 deckt «nachweislich» nicht; «werden sehr geschätzt» nur für eine Partnergruppe (Schomerus) belegt; Name und «kostenlos» des Familiencoachs nicht in Schramm 2026; Zhang 2024 nur am Abstract prüfbar | W1-06, W1-07, W1-10 |
| Q2 Angaben vollständig | teilweise | Katsuki 2018, Ipsen 2026, Schomerus 2007 ohne Titel und Link; Barbato ohne dritten Autor | W1-09 |
| Q3 Quellenart | erfüllt | RCTs, Meta-Analysen, Cochrane | – |
| Q4 Darstellung | erfüllt | 6 Einträge mit Verwendung | – |
| Q5 nichts erfunden | erfüllt | alle Arbeiten in PubMed gefunden; Zhang 2024 vollständig angegeben | – |
| B1 Perspektive | erfüllt | ganz bei den Angehörigen | – |
| B2 entlastend | erfüllt | «Für sich zu sorgen, nimmt der erkrankten Person nichts weg.»; Abb. 1 › Grenzen: «… das ist kein Versagen» | – |
| B3 personenzentriert | erfüllt | «Angehörige psychisch erkrankter Menschen» | – |
| B4 Hoffnung ohne Beschönigung | erfüllt | «Das heisst nicht, dass sie nutzlos sind. Es heisst: Versprechen lässt sich nichts» | – |
| B5 Autonomie | erfüllt | Grenze als «Entscheid über Ihren eigenen Beitrag» | – |
| B6 Belastung, Grenzen, Selbstsorge | erfüllt | Kern der Seite | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | kurze Abschnitte; Begriffsliste in `was-hilft` | – |
| C2 Grafiken korrekt | erfüllt | Abb. 1 › Grenzen: «Die Karte zeigt Möglichkeiten, keine Pflichten.» | – |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassung Abb. 1 193 Zeichen; Legende als Liste | – |
| D1 Empfehlungen konkret | erfüllt | «Ich koche gern weiter für uns beide. Die Gespräche mit deiner Chefin übernehme ich aber nicht mehr.»; Übung «drei Kreise» | – |
| D2 reale Situationen | erfüllt | «einen Fahrdienst, einen Einkauf pro Woche oder ein Gespräch pro Monat» | – |

**Seite 8 · Rechte und Unterstützung im Kanton Zürich (`rechte-und-angebote`)**

| Punkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- |
| A1 Rechtliche Aussagen | nicht erfüllt | Abb. 1 Kurztext: «erst für Auskünfte über ihre Behandlung und für die Akten braucht es ihre Zustimmung» – widerspricht der Zeile «Auskunft über Gesundheitszustand und Behandlung · ohne Einwilligung: im Kanton Zürich an Bezugspersonen möglich, solange die erkrankte Person nicht widerspricht» und dem Entscheid der Fachstelle zu § 15 PatG ZH; Formulierungsbeispiel «Ich weiss, dass Sie mir nichts über meinen Mann sagen dürfen.»; `arbeit-geld`: «nur bei einer schweren, dauerhaften Beeinträchtigung» – für Betreuungsgutschriften genügt laut Suchergebnis seit 2021 eine Hilflosenentschädigung leichten Grades; Kurzurlaub «pro Ereignis» gilt laut Pro Infirmis bei wiederkehrender Erkrankung nur einmal je Beeinträchtigung (Sekundärquelle) | W1-01, W1-21 |
| A2 Stärke | erfüllt | Vertiefung Abb. 1: «Die Übersicht vereinfacht das Recht.»; Hero: «rechtliche Prüfung ausstehend» | – |
| A3 Ebenen | erfüllt | Rechte, Vorsorge, Arbeit und Geld, Angebote getrennt | – |
| A4 Therapien | entfällt | – | – |
| A5 Schweizer Kontext | teilweise | StGB, PatG ZH, ZGB, OR, IV; keine deutschen Rechtsbegriffe (Gate-Hinweis «swiss-context» ohne Befund); nicht erwähnt: gesetzliches Vertretungsrecht bei Urteilsunfähigkeit (Art. 378 ZGB; für die Klinikbehandlung psychischer Störungen Art. 380 ZGB) | W1-22 |
| A6 Krisenthemen | erfüllt | Stand by You «HelpLine» ohne Nummer; keine FU (Entscheid der Fachstelle) | – |
| Q1 belegt, Quelle deckt | teilweise | §§ 2a und 15 Abs. 2 PatG ZH durch Leitfaden der Gesundheitsdirektion gestützt; § 19 als Akteneinsicht nicht gefunden; BSV-FAQ «auch bei psychischer Erkrankung» nicht gefunden (das Gesetz spricht allgemein von «gesundheitlicher Beeinträchtigung»); BAG: «zuhören» gestützt, «allgemein informieren» nicht gefunden | W1-10, W1-25 |
| Q2 Angaben vollständig | teilweise | Pro Mente Sana mit gekürztem Titel («Rechte von Angehörigen» statt «Rechte von Angehörigen im psychiatrischen Zwangskontext»); § 15 ohne Absatz (Abs. 2); kein Abrufdatum bei Online-Quellen; PatG-Link zeigt auf eine bestimmte Fassung («…-083.html»), ob die aktuelle, ist nicht geprüft | W1-09 |
| Q3 Quellenart | erfüllt | amtliche Primärquellen: Fedlex (StGB, ZGB, OR), zh.ch (PatG), BAG, BSV, Informationsstelle AHV/IV | – |
| Q4 Darstellung | erfüllt | 8 Einträge mit Verwendung | – |
| Q5 Unsicheres markiert | erfüllt | «Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.»; Hero «rechtliche Prüfung ausstehend» | – |
| B1 Perspektive | erfüllt | «Für Sie als angehörige Person gilt die Schweigepflicht nicht.» | – |
| B2 entlastend | erfüllt | Hero: «Viele Angehörige glauben, sie dürften … nichts sagen … Das stimmt nicht.» | – |
| B3 personenzentriert | erfüllt | «erkrankte Person», «Menschen mit psychischen Erkrankungen» | – |
| B4 Hoffnung | entfällt | Sachseite | – |
| B5 Autonomie | erfüllt | «Mehr Rechte erhalten Sie, wenn die erkrankte Person Sie ausdrücklich einbezieht. Am besten sprechen Sie das in einer guten Phase an.» | – |
| B6 Belastung | erfüllt | Angebote für Angehörige | – |
| B7 Anrede | erfüllt | «Sie» | – |
| C1 verständlich | erfüllt | Begriffe als Begriffsliste erklärt (Bezugsperson, Entbindung, Patientenverfügung) | – |
| C2 Grafiken korrekt | nicht erfüllt | Abb. 1: Kurztext und Tabellenzeile widersprechen sich (siehe A1) | W1-01 |
| C3 Überschriften, Alternativen, Links | erfüllt | Textfassung 314 Zeichen; Anbieterlinks mit Domain als Linktext | – |
| D1 Empfehlungen konkret | erfüllt | Formulierungsbeispiel; Angebote mit Websites | – |
| D2 reale Situationen | erfüllt | Anruf beim Behandlungsteam | – |

#### W1-C · Quellen geprüft (Fachartikel über PubMed, übrige nur über Suchergebnisse)

Jede Quelle der acht Quellenlisten, dazu Aussagen ohne genannte Studie. Die vollständigen Angaben in der dritten Spalte stammen aus PubMed und können für W1-09 übernommen werden.

**Fachartikel (geprüft über PubMed: Metadaten, Abstract, PMC-Volltext wo vorhanden)**

G = gedeckt · T = teilweise gedeckt · N = nicht gedeckt · ? = nicht prüfbar. «Link» = führt die angegebene Adresse (DOI, PMID, PMC) zu dieser Arbeit.

| Seite › Abschnitt | Quelle auf der Seite | Vollständige Angabe (PubMed) | Link | Aussage auf der Seite | Ergebnis | Beleg (wörtlich aus Abstract oder Volltext) | Befund |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `depression-verstehen` › `was-ist` | Salk, Hyde und Abramson 2017 | Salk RH, Hyde JS, Abramson LY. Gender differences in depression in representative national samples: Meta-analyses of diagnoses and symptoms. Psychol Bull 2017;143(8):783–822. doi:10.1037/bul0000102, PMID 28447828 | ja | «Frauen erhalten die Diagnose etwa doppelt so oft wie Männer.» | T | «OR = 1.95» gesamt; Erwachsene «ORs between 1.71 and 2.02». Gemessen: Kriterien in Bevölkerungsbefragungen, keine gestellten Diagnosen | W1-12 |
| `depression-verstehen` › `anders` | Martin, Neighbors und Griffith 2013 | Martin LA, Neighbors HW, Griffith DM. The experience of symptoms of depression in men vs women: analysis of the National Comorbidity Survey Replication. JAMA Psychiatry 2013;70(10):1100–6. doi:10.1001/jamapsychiatry.2013.1985, PMID 23986338 | ja | «… häufiger als Gereiztheit, Wut, mehr Alkohol, riskantes Verhalten oder Flucht in die Arbeit … auch bei Frauen» | T | «Men reported higher rates of anger attacks/aggression, substance abuse, and risk taking»; «Further study is needed to clarify which symptoms truly describe men's experiences». Gereiztheit und «Flucht in die Arbeit» nicht im Abstract, kein PMC-Volltext (?) | W1-12 |
| `depression-verstehen` › `entstehung` (Vertiefung) | Sullivan, Neale und Kendler 2000 | Sullivan PF, Neale MC, Kendler KS. Genetic epidemiology of major depression: review and meta-analysis. Am J Psychiatry 2000;157(10):1552–62. doi:10.1176/appi.ajp.157.10.1552, PMID 11007705 | ja | gehäuft in Familien; erblicher Anteil rund ein Drittel; «den grösseren Teil erklären Lebenserfahrungen» | G / G / T | «heritability of liability=37%»; «individual-specific environmental effects/measurement error (point estimate=63%)» – enthält Messfehler | W1-12 |
| `depression-verstehen` › `entstehung` (Vertiefung) | Moncrieff et al. 2022; Jauhar et al. 2023 | Moncrieff J, Cooper RE, Stockmann T, Amendola S, Hengartner MP, Horowitz MA. The serotonin theory of depression: a systematic umbrella review of the evidence. Mol Psychiatry 2023;28(8):3243–56 (online 2022). doi:10.1038/s41380-022-01661-0 · Jauhar S, Arnone D, Baldwin DS, et al. A leaky umbrella has little value: evidence clearly indicates the serotonin system is implicated in depression. Mol Psychiatry 2023;28(8):3149–52. doi:10.1038/s41380-023-02095-y | – (kein Link) | «einfacher Serotoninmangel nicht belegt»; «Antidepressiva wirken trotzdem; ihre Wirkung wurde in Studien direkt gemessen» | G / N | Beide Arbeiten enthalten keine Wirksamkeitsdaten; Moncrieff relativiert die Wirksamkeit («apparent efficacy of SSRIs … amplified placebo effect»). Der zweite Satz braucht eine eigene Quelle (z. B. NVL) | W1-10 |
| `behandlung-und-verlauf` › `vorbeugen` | Kuyken et al. 2016 | Kuyken W, Warren FC, Taylor RS, Whalley B, Crane C, Bondolfi G, et al. Efficacy of Mindfulness-Based Cognitive Therapy in Prevention of Depressive Relapse: An Individual Patient Data Meta-analysis From Randomized Trials. JAMA Psychiatry 2016;73(6):565–74. doi:10.1001/jamapsychiatry.2016.0076, PMID 27119968 | ja | «Eine Psychotherapie, die gezielt Rückfällen vorbeugt, senkt das Risiko ebenfalls.» | G | «reduced risk of depressive relapse … (hazard ratio, 0.69 …)»; gilt für MBCT bei rezidivierender Depression in Remission | – |
| `behandlung-und-verlauf` › `verlauf` | keine (im Text «eine Studie, auf die sich die deutsche Leitlinie stützt») | vermutlich Spijker J, de Graaf R, Bijl RV, Beekman AT, Ormel J, Nolen WA. Duration of major depressive episodes in the general population: results from NEMESIS. Br J Psychiatry 2002;181:208–13. doi:10.1192/bjp.181.3.208 | – | «nach drei Monaten die Hälfte … nach einem Jahr drei Viertel» | G (Zahlen) | «50% … recovered within 3 months, 63% within 6 months, 76% within 12 months». Allgemeinbevölkerung, meist unbehandelt. Studie auf der Seite nicht genannt | W1-09 |
| `ihre-situation` › `was-belastet` | van Wijngaarden et al. 2004 | van Wijngaarden B, Schene AH, Koeter MW. Family caregiving in depression: impact on caregivers' daily life, distress, and help seeking. J Affect Disord 2004;81(3):211–22. doi:10.1016/S0165-0327(03)00168-X, PMID 15337325 | ja | Sorge als häufigste Belastung; Belastung in akuten Phasen | T / G | «About 25–50% of caregivers worried about the patient's general health, treatment, safety, and future» (keine Rangfolge im Abstract); «felt burdened, especially when the patient was in an acute phase» | W1-12 |
| `ihre-situation` › `nicht-allein`, `belastung` | van Wijngaarden et al. 2009 | van Wijngaarden B, Koeter M, Knapp M, Tansella M, Thornicroft G, Vázquez-Barquero JL, et al. Caring for people with depression or with schizophrenia: are the consequences different? Psychiatry Res 2009;169(1):62–9. doi:10.1016/j.psychres.2008.06.013, PMID 19625087 | ja | ähnlich hoch wie bei Schizophrenie; mehr Belastung bei engem Zusammenleben | G / T | «Caregiver consequences of depression and schizophrenia are very similar»; «caregivers live close to a patient» – «live close» ist nicht sicher «zusammenwohnen» | – |
| `ihre-situation` › `belastung` | Huang et al. 2026 | Huang X, Zhou R, Lei H, Li J, Ye Q, Yang Y, et al. Caregiver burden among caregivers of patients with depression: a systematic review and meta-analysis. Front Psychiatry 2026;17:1878799. doi:10.3389/fpsyt.2026.1878799, PMID 42621420 | ja | mehr Belastung bei schwerer und langer Depression, weniger bei sozialer Unterstützung | T | je 2 Studien pro Untergruppe, «should be interpreted with caution»; soziale Unterstützung aus 2 Querschnittstudien; 11 Studien, I² 98,9 %. Die Vertiefung der Abbildung benennt die Grenze («Befragungen zu einem einzigen Zeitpunkt») | – |
| `ihre-situation` › `belastung` | Martire et al. 2010 | Martire LM, Schulz R, Reynolds CF, Karp JF, Gildengers AG, Whyte EM. Treatment of late-life depression alleviates caregiver burden. J Am Geriatr Soc 2010;58(1):23–9. doi:10.1111/j.1532-5415.2009.02610.x, PMID 19943833 | – (kein Link) | «wenn die Behandlung wirkt, wird es meist auch für Angehörige leichter» | T | «decreased depression-specific burden (beta=-0.22, P=.001) and a trend toward lower general burden (beta=-0.08, P=.08)»; nur Patientinnen und Patienten ab 60; «meist» nicht belegt | W1-12 |
| `ihre-situation` › `gesundheit` | Idstad et al. 2010 | Idstad M, Ask H, Tambs K. Mental disorder and caregiver burden in spouses: the Nord-Trøndelag health study. BMC Public Health 2010;10:516. doi:10.1186/1471-2458-10-516, PMID 20796279 | ja | «häufiger … Schlafproblemen, Erschöpfung, Grübeln und körperlichen Beschwerden, und ihre Lebensqualität ist tiefer»; «nicht sicher bekannt», wie viele erkranken | N / T / G | gemessen nur Summenwert Angst/Depression (SCL-10) und subjektives Wohlbefinden: «spouses … scored significantly lower on subjective well-being and significantly higher on symptoms of anxiety and depression»; Grübeln nicht erhoben; nur Partner, «mental disorder» allgemein; «do not indicate that a large proportion … reach … clinical mental disorder» | W1-03 |
| `ihre-situation` › `wechselwirkung` | Whisman und Uebelacker 2009 | Whisman MA, Uebelacker LA. Prospective associations between marital discord and depressive symptoms in middle-aged and older adults. Psychol Aging 2009;24(1):184–9. doi:10.1037/a0014759, PMID 19290750 | ja | «gut untersucht»; «gut belegt, dass sich … gegenseitig beeinflussen» | T | «These results suggest a bidirectional longitudinal association»; eine Studie, Symptome statt Diagnosen, Assoziation | W1-12 |
| `ihre-situation` › `wechselwirkung` (Vertiefung) | Hooley und Gotlib 2000 | Hooley JM, Gotlib IH. A diathesis-stress conceptualization of expressed emotion and clinical outcome. Applied and Preventive Psychology 2000;9(3):135–51 (nicht in PubMed) | – | «Kritik entsteht oft als Antwort auf eine belastende Situation»; «Frühe kleine Studien fanden einen Zusammenhang, spätere nicht» | ? / N | Volltext nicht zugänglich. Gegen «spätere nicht»: Butzlaff RL, Hooley JM. Expressed emotion and psychiatric relapse: a meta-analysis. Arch Gen Psychiatry 1998;55(6):547–52, doi:10.1001/archpsyc.55.6.547: «the mean effect sizes for EE for both mood disorders and eating disorders were significantly higher than the mean effect size for schizophrenia» | W1-04 |
| `ihre-situation` › `wechselwirkung`; `fuer-sich-sorgen` › `was-hilft` | Barbato und D'Avanzo 2018 | Barbato A, D'Avanzo B, Parabiaghi A. Couple therapy for depression. Cochrane Database Syst Rev 2018;6:CD004188. doi:10.1002/14651858.CD004188.pub3, PMID 29882960 | ja | gegen die Depression ähnlich wie Einzeltherapie, schwache Studien; «verbessert sie die Partnerschaft» | G / T | «no evidence of difference … (SMD -0.17 … low-quality evidence)»; Beziehung: «SMD -0.50 … very low-quality evidence». Dritter Autor fehlt auf beiden Seiten | W1-09, W1-11 |
| `je-nach-rolle` › `partner` | Atlantis und Sullivan 2012 | Atlantis E, Sullivan T. Bidirectional association between depression and sexual dysfunction: a systematic review and meta-analysis. J Sex Med 2012;9(6):1497–507. doi:10.1111/j.1743-6109.2012.02709.x, PMID 22462756 | ja | Sexualität leidet oft durch die Depression | G | «Clinicians should be aware of a bidirectional association between depression and sexual dysfunction» | – |
| `je-nach-rolle` › `partner` | Serretti und Chiesa 2009 | Serretti A, Chiesa A. Treatment-emergent sexual dysfunction related to antidepressants: a meta-analysis. J Clin Psychopharmacol 2009;29(3):259–66. doi:10.1097/JCP.0b013e3181a5233f, PMID 19440080 | ja | «es gibt Medikamente, die seltener solche Nebenwirkungen haben» | G | «No significant difference with placebo was found for … agomelatine, amineptine, bupropion, moclobemide, mirtazapine, and nefazodone» | – |
| `je-nach-rolle` › `partner` | Bodenmann und Randall 2013 | Bodenmann G, Randall AK. Close relationships in psychiatric disorders. Curr Opin Psychiatry 2013;26(5):464–7. doi:10.1097/YCO.0b013e3283642de7, PMID 23867661 | ja | «Wir-Krankheit» | G | «examining psychiatric disorders from a we-disease perspective» | – |
| `je-nach-rolle` › `kinder` | Rasic et al. 2014 | Rasic D, Hajek T, Alda M, Uher R. Risk of mental illness in offspring of parents with schizophrenia, bipolar disorder, and major depressive disorder: a meta-analysis of family high-risk studies. Schizophr Bull 2014;40(1):28–38. doi:10.1093/schbul/sbt114, PMID 23960245 | ja | «etwa zwei- bis dreimal so häufig selbst an einer Depression» | T (?) | Abstract nur gepoolt über drei elterliche Diagnosen: «increased rate of the disorder present in the parent (RR = 3.59 …)»; eigener Wert für Depression nur im Volltext, PMC lieferte keinen Text | W1-10 |
| `je-nach-rolle` › `kinder` | Collishaw et al. 2016 | Collishaw S, Hammerton G, Mahedy L, Sellers R, Owen MJ, Craddock N, et al. Mental health resilience in the adolescent offspring of parents with depression: a prospective longitudinal study. Lancet Psychiatry 2016;3(1):49–57. doi:10.1016/S2215-0366(15)00358-2, PMID 26654748 | ja | fünf Schutzfaktoren; «48 von 100 … 4 von 100 durchgehend gesund» | T / G | «Index parent positive expressed emotion …, co-parent support …, good-quality social relationships …, self-efficacy …, and frequent exercise»; «five protective factors, 48%», «zero or one … 4%». «verlässliche Bezugsperson» nicht gemessen; Wärme-Skala nicht signifikant («warme Momente» ist Deutung von «positive expressed emotion»); «durchgehend gesund» = unauffällig bei drei Erhebungen | W1-13 |
| `je-nach-rolle` › `kinder` | Dam und Hall 2016 | Dam K, Hall EOC. Navigating in an unpredictable daily life: a metasynthesis on children's experiences living with a parent with severe mental illness. Scand J Caring Sci 2016;30(3):442–57. doi:10.1111/scs.12285, PMID 26763757 | ja | Verwendung «Scham und Verheimlichen» – auf der Seite steht dazu keine Aussage | – | «Children feel shame … and they conceal their family life» | W1-10 |
| `je-nach-rolle` › `eltern` | Kika et al. 2026 | Kika N, Lambert J, Higson-Sweeney N, Wallace V, Bhatt H, Perry G, et al. Parents' experiences of their adolescent child's depression: a qualitative systematic review and meta-synthesis. BMC Psychol 2026;14(1):188. doi:10.1186/s40359-025-03923-2, PMID 41514471 | ja | Schuld oder Scham, Ausschluss, grösste Sorge Selbstverletzung/Suizid, helfen und loslassen | T / T / G / T | «The most commonly expressed causes for worry among parents were self-harm and suicidal ideation»; Schuld: «Some parents …»; Ausschluss: «feeling left out of the process»; Eltern von Jugendlichen (auf der Seite benannt) | W1-12 |
| `je-nach-rolle` › `eltern` | Greally, Oute und McPherson 2025 | Greally S, Oute J, McPherson S. Experiences of parents of children with mental illnesses: a systematic review and meta-ethnographic synthesis. Fam Process 2025;64(1):e13087. doi:10.1111/famp.13087, PMID 39581628 | ja | «Übersicht zu Eltern erwachsener Kinder» | T | «in 13 studies the children were adults»; Schwerpunkt Psychosen. Die Quellenzeile beschreibt die Arbeit ungenau | W1-09 |
| `je-nach-rolle` › `eltern` | Johansson et al. 2014 | Johansson A, Andershed B, Anderzen-Carlsson A. Conceptions of mental health care – from the perspective of parents' of adult children suffering from mental illness. Scand J Caring Sci 2014;28(3):496–504. doi:10.1111/scs.12074, PMID 23980612 | ja | Ausschluss aus der Versorgung | G | «disapproval of parental exclusion … do not provide them with adequate information» | – |
| `je-nach-rolle` › `geschwister` | Jayasinghe et al. 2023 (zwei Meta-Analysen) | Jayasinghe A, Wrobel A, Filia K, et al. Distress, burden, and wellbeing in siblings of people with mental illness: a mixed studies systematic review and meta-analysis. Psychol Med 2023;53(15):6945–64. doi:10.1017/S0033291723001733 · Jayasinghe A, Wrobel A, Filia K, et al. Psychological distress in siblings of people with mental illness: a systematic review and meta-analysis. Aust N Z J Psychiatry 2023;57(5):642–60. doi:10.1177/00048674221123481 | – (kein Link) | mehr depressive Beschwerden und Ängste; ausgeschlossen oder zweitrangig; gewachsen | G / T / G | «significantly greater depressive symptoms (Hedges's g = 0.53 …) and anxiety symptoms (Hedges's g = 0.40 …)»; ausgeschlossen: 2 Studien; «siblings recognise there are positive aspects». Psychische Erkrankungen allgemein, nicht Depression; GRADE «very low» | W1-15 |
| `je-nach-rolle` › `geschwister` | Rhee et al. 2025 | Rhee SJ, Abrahamsson L, Sundquist J, Sundquist K, Kendler KS. The risks for major psychiatric disorders in the siblings of probands with major depressive disorder. Mol Psychiatry 2025;30(1):69–75. doi:10.1038/s41380-024-02650-1, PMID 38972942 | ja | «etwas erhöhtes Risiko»; «liegt an gemeinsamen familiären und erblichen Faktoren, nicht an der Unterstützung, die sie leisten» | T / G / N | «MD (1.74, 1.72–1.76)»; «The familial liability to MD, mostly due to genetic factors»; Unterstützung oder Pflege wurde nicht untersucht | W1-05 |
| `begleiten` › Quellen | Bond et al. 2019 | Bond KS, Cottrill FA, Blee FL, Kelly CM, Kitchener BA, Jorm AF. Offering mental health first aid to a person with depression: a Delphi study to re-develop the guidelines published in 2008. BMC Psychol 2019;7(1):37. doi:10.1186/s40359-019-0310-3, PMID 31227016 | ja | Konsens von Fachleuten und Menschen mit eigener Erfahrung | G | «rated by 53 experts (36 with lived experience and 17 professionals)» | – |
| `begleiten` › `suizidgedanken` | Dazzi et al. 2014 | Dazzi T, Gribble R, Wessely S, Fear NT. Does asking about suicide and related behaviours induce suicidal ideation? What is the evidence? Psychol Med 2014;44(16):3361–3. doi:10.1017/S0033291714001299, PMID 24998511 | ja (Titel) | «erhöht das Risiko nicht; für viele ist das Gespräch eine Entlastung» | G / T | «None found a statistically significant increase in suicidal ideation»; «may … reduce, rather than increase suicidal ideation … in treatment-seeking populations» | W1-12 |
| `fuer-sich-sorgen` › `was-hilft` | Katsuki et al. 2022 | Katsuki F, Watanabe N, Yamada A, Hasegawa T. Effectiveness of family psychoeducation for major depressive disorder: systematic review and meta-analysis. BJPsych Open 2022;8(5):e148. doi:10.1192/bjo.2022.543, PMID 35915980 | ja | «Information über die Krankheit: Hilft nachweislich vor allem der erkrankten Person»; Daten zur Belastung fehlen | N / G | «small but statistically significant effect … all outcomes are graded very low on certainty»; Familien-Psychoedukation, reine Information ausgeschlossen; «Only one study reported family functioning and family members' distress» | W1-06 |
| `fuer-sich-sorgen` › `was-hilft` | Katsuki et al. 2018; Ipsen et al. 2026; Schomerus et al. 2007 | Katsuki F, Takeuchi H, Inagaki T, et al. Brief multifamily psychoeducation for family members of patients with chronic major depression: a randomized controlled trial. BMC Psychiatry 2018;18:207. doi:10.1186/s12888-018-1788-6 · Ipsen IS, Csillag C, Austin SF, Vinberg M. Who benefits from family psychoeducation for relatives of adults with major depressive disorder? J Clin Med 2026;15(11):4118. doi:10.3390/jcm15114118 · Schomerus G, Heider D, Wittmund B, et al. Psychiatr Prax 2007;34(5):239–45, doi:10.1055/s-2006-940081; PubMed führt nur die englische Übersetzung des Titels «[A group intervention for spouses of patients with depression – is it effective?]», der deutsche Originaltitel ist hier nicht geprüft | – (kein Link) | «werden sehr geschätzt»; «kurze Gruppen veränderten die Belastung meist kaum»; Quellenzeile: «zwei randomisierte Studien zu kurzen Gruppen» | T / G | Katsuki 2018: «no statistically significant effect … at 16-weeks»; Ipsen: «No significant intervention effects … on well-being», Kontrollgruppe aktiv; Schomerus: «did not cause any improvement … satisfaction … very high», 12 Sitzungen, nicht randomisiert. «sehr geschätzt» nur für Gruppen belegt | W1-10 |
| `fuer-sich-sorgen` › `was-hilft` | Schramm et al. 2026 | Schramm E, Zehender N, Breuninger C, Hegerl U, Elsner A, Maun A, et al. Efficacy of an online self-help programme with automated or individualised psychological support versus treatment as usual for caregivers of people with depression: a randomised, controlled, open-label, superiority trial. Lancet Reg Health Eur 2026;62:101560. doi:10.1016/j.lanepe.2025.101560, PMID 41488791 | ja | grosse Studie, Deutschland, «leicht», drei Monate; «kostenlose Programm» «Familiencoach Depression» | G / ? | n = 1640; d = −0,27 bzw. −0,17; «The results were sustainable three months after randomisation»; «rather small». Programmname und «kostenlos» stehen nicht im Paper | W1-10 |
| `fuer-sich-sorgen` › `was-hilft` | Zhang et al. 2024 | Zhang X, Ren H, Wang C, Zhang Y, Zhou Q, Fan J. The effect of mindfulness-based interventions on mental health outcomes and wellbeing of informal caregivers of people with mental illness: A systematic review and meta-analysis. Int J Ment Health Nurs 2024;33(4):797–816. doi:10.1111/inm.13295, PMID 38291626 | ja | «verringerten bei Angehörigen psychisch erkrankter Menschen Stress und Niedergeschlagenheit» | G (Abstract) | «13 studies with 1007 participants … stress (SMD = -0.80, 95% CI [-1.33, -0.28]) … depression (SMD = -0.43 …) … caregiver burden (SMD = -0.21 …) … but not on anxiety»; «future research should aim to employ more rigorous methodologies». Kein PMC-Volltext: Studienqualität, I², GRADE nicht prüfbar | W1-07 |

**Leitlinien, Recht, Statistik, Befragungen, Organisationen (Originale in der Prüfumgebung gesperrt; geprüft über Suchergebnisse)**

Die Websites der Originale (leitlinien.de, psychiatrie.ch, obsan.admin.ch, fedlex.admin.ch, zh.ch, bag.admin.ch, ahv-iv.ch, bsv.admin.ch, deutsche-depressionshilfe.de, swisslife.ch, mhfa.com.au, paediatrieschweiz.ch, Anbieter) waren aus der Prüfumgebung nicht erreichbar (Netzwerkrichtlinie, Proxy 403). Geprüft wurde über eine Websuche, die Zusammenfassungen und teils wörtliche Zitate liefert. **Keine dieser Zeilen gilt als «am Original geprüft».** «gestützt» = Suchergebnis zitiert oder paraphrasiert das Original bzw. eine amtliche Stelle; «Sekundärquelle» = nur über Dritte; «nicht gefunden» = kein Treffer.

| Seite › Abschnitt | Quelle auf der Seite | Aussage | Suchergebnis | Ergebnis | Befund |
| --- | --- | --- | --- | --- | --- |
| `depression-verstehen`, `index` | Obsan Bulletin 11/2024 (Autorinnen und Autoren laut Begleitdokument: D. Schuler, A. Tuch, I. Sturny, C. Peter) | «rund jede zehnte Person … mittelschwere bis schwere depressive Beschwerden» (SGB 2022) | SGB 2022: 9,8 % (2017: 8,6 %) laut kantonaler Auswertung Tessin (Sekundärquelle); Bulletin-Zusammenfassung ohne Prozentzahl. Nicht verwechseln mit 12 % aus der Obsan-Erhebung Herbst 2022 | gestützt (Sekundärquelle) | W1-25 |
| `depression-verstehen` › `anders` | Obsan Bulletin 11/2024 | «Männer lassen sich seltener behandeln»; «fast dreimal so oft durch Suizid» | Suizid 2022: 695 Männer, 263 Frauen; Rate «fast dreimal so hoch» (SRF; Zahlen vermutlich aus Obsan-Bulletin 08/2024). Behandlung nach Geschlecht nicht gefunden | teilweise gestützt | W1-09, W1-25 |
| `depression-verstehen`, `behandlung-und-verlauf`, `begleiten` | NVL Unipolare Depression, Version 3.2 | Fassung | «Version 3.2, Juli 2023» (nvl-programm.de); Kapitel: 1 Grundlagen (1.4 «Verlaufsformen und prognostische Faktoren»), 2 Diagnostik und Monitoring, 3 Therapieplanung (3.6 «Einbindung von Angehörigen»), 6 Erhaltungstherapie und Rezidivprophylaxe, 12 Suizidalität | gestützt (Seitentitel) | W1-09 |
| `behandlung-und-verlauf` › `verlauf` | NVL «Kapitel 3 bis 6» | «40 bis 60 von 100 … erneut», «mit jeder weiteren Episode steigt das Risiko»; «15 bis 30 von 100 … länger als zwei Jahre» | Suchergebnis der Prüfsitzung (Teil C) zitiert NVL Kap. 1: «Das Risiko für eine Chronifizierung … liegt in Studien bei etwa 15–30%», 40–60 % als Paraphrase; eine zweite Suche fand die Zahlen nicht. Stehen in Kap. 1, nicht 3 bis 6 | gestützt, nicht am Original | W1-09, W1-25 |
| `depression-verstehen` › `formen` | NVL Kap. 1, ICD-11 | «Etwa jede vierte Depression bleibt einmalig.»; «Bei den meisten kehrt die Depression … wieder» | nicht gefunden; widerspricht rechnerisch «40 bis 60 von 100» | nicht gestützt | W1-02 |
| `behandlung-und-verlauf` › `behandelbar` | NVL, SGPP | Behandlung nach Schweregrad | NVL-Flyer Version 3 wörtlich: «Bei einer ersten leichten depressiven Episode sollen zuerst niedrigschwellige Interventionen angeboten werden»; mittelschwer «Psychotherapie oder eine medikamentöse Behandlung»; schwer «beide Ansätze kombiniert» | gestützt | – |
| `behandlung-und-verlauf` › Abb. 1 | NVL, SGPP | Antidepressiva «drei bis vier Wochen, nachdem die passende Dosis erreicht ist»; Psychotherapie «nach acht bis zwölf Wochen» | 3–4 Wochen nach Erreichen der Standarddosis (Paraphrase NVL); 8–12 Wochen nicht gefunden | teilweise | W1-10, W1-25 |
| `behandlung-und-verlauf` › `vorbeugen` | NVL Kap. 6 | «nach der Besserung noch sechs bis zwölf Monate» | NVL Kap. 6: «6–12 Monate über die Remission einer depressiven Episode hinaus» | abweichend | W1-20 |
| `behandlung-und-verlauf` › `einbezug` | NVL Empfehlung 3-8 | einbeziehen, wenn einverstanden | wörtlich: «Wenn die Patient*innen damit einverstanden sind, sollen Angehörige in die Aufklärung, Information und Behandlung eingebunden werden.» | gestützt (Wortlaut) | – |
| `depression-verstehen`, `behandlung-und-verlauf`, `begleiten` | Schweizer Behandlungsempfehlungen 2025, Teil 1 | Diagnose, körperliche Abklärung, Wirkeintritt, Verfahren, Warnsignale, Mittel sichern | Dokument existiert: «Die Behandlung der unipolaren depressiven Störungen: Update 2025, Teil 1» (SGAD mit SGPP, SGBP, SCAP); EKT und Esketamin gestützt; übrige Inhalte nicht gefunden | teilweise | W1-09, W1-25 |
| `depression-verstehen` › `formen` | ICD-11 6A70–6A7Z | Formen; Burnout keine Krankheit | Kategorien 6A70, 6A71, 6A72, 6A73; saisonales Muster als Zusatzcode 6A80.4 nur bei rezidivierender Störung; keine Kategorie «chronische Depression» (6A72, Zusatzcode 6A80.2); Burnout QD85 «occupational phenomenon» (WHO) – alles über Spiegelseiten und Paraphrase | gestützt (Sekundärquelle) | – |
| `ihre-situation`, `index` | Deutschland-Barometer 2024 | «drei von vier … belastend oder sehr belastend für das Familienleben»; «vier von zehn» | Pressemitteilung wörtlich: «Rund drei Viertel der Angehörigen beschreibt die Depression jedoch auch als große Belastung für das Familienleben»; «nicht gut von den Behandlern informiert worden (41 Prozent) und nicht in die Behandlung eingebunden zu sein (39 Prozent)». «oder sehr belastend» und eine Rangfolge der Belastungen nicht gefunden | gestützt | W1-19 |
| `je-nach-rolle` › `partner` | Deutschland-Barometer 2018 | fast drei Viertel Schuld/Verantwortung; sechs von zehn Streit; mehr als die Hälfte vertiefte Beziehung | Grafikband (Paraphrase): 73 %, 61 %, 56 % bei 200 Partnerinnen und Partnern; Pressemitteilung bestätigt 73 % | gestützt | – |
| `ihre-situation`, `je-nach-rolle` › `freunde` | Studie «Stand by You» (Sotomo 2024) | 73 von 100 (engste Familie), 40 von 100 (Freundeskreis), mehr als jede dritte Angst vor Suizid | Studie existiert (2042 Befragte, März 2024); SRF: Rolle «für drei Viertel der Betreuenden psychisch belastend». Die drei Werte nicht gefunden; die Studie enthält andere 73-%-Werte («zu wenig Verständnis», «kennt mehrere Personen») | nicht prüfbar | W1-25 |
| `rechte-und-angebote` › `schweigepflicht` | Art. 321 StGB | Ärztinnen, Psychologen, Pflegefachpersonen unter Schweigepflicht | kantonale Leitfäden (BE, BS) nennen Psychologen und Pflegefachpersonen | gestützt (Sekundärquelle) | – |
| `rechte-und-angebote` › `schweigepflicht`, `vorsorge` | PatG ZH §§ 2a, 15, 19 | Bezugspersonen ohne Bezeichnung; Auskunft, solange kein Widerspruch; Akteneinsicht | Leitfaden der Gesundheitsdirektion: ohne Bezeichnung «in erster Linie die Lebenspartnerin bzw. der Lebenspartner und in zweiter Linie nahe Angehörige …»; Information der Bezugspersonen nach § 15 Abs. 2, sofern kein Widerspruch; § 19 als Akteneinsicht nicht gefunden | gestützt (amtliche Sekundärquelle); § 19 offen | W1-09, W1-25 |
| `rechte-und-angebote` › `schweigepflicht` | BAG, Empfehlungen für Fachpersonen (2021) | Fachpersonen dürfen ohne Entbindung zuhören und allgemein informieren | «zuhören und mit ihnen sprechen» (Paraphrase); allgemeine Informationen nicht gefunden; Jahr 2021 über Dateinamen wahrscheinlich | teilweise | W1-25 |
| `rechte-und-angebote` › `vorsorge` | Art. 370 ff. ZGB | Patientenverfügung, Vertretungsperson | Art. 370 Abs. 1 und 2 im Wortlaut über Gesetzesspiegel | gestützt | W1-22 |
| `rechte-und-angebote` › `arbeit-geld` | Art. 329h und 329i OR, BSV-FAQ | 3 Tage pro Ereignis, 10 pro Jahr; 14 Wochen nur für Eltern Minderjähriger; «auch bei einer psychischen Erkrankung» | BSV-FAQ wörtlich: «höchstens drei Tage pro gesundheitsbezogenes Ereignis und nicht mehr als zehn Tage pro Jahr»; 329i für Eltern eines schwer beeinträchtigten minderjährigen Kindes; «psychisch» in der FAQ nicht gefunden; Pro Infirmis: Kurzurlaub nur einmal je Beeinträchtigung, auch bei wiederholten Krisen (Sekundärquelle) | teilweise | W1-21, W1-25 |
| `rechte-und-angebote` › `arbeit-geld` | Merkblätter 4.13 und 1.03 | «nur bei einer schweren, dauerhaften Beeinträchtigung»; rein psychisch braucht es eine IV-Rente | Merkblatt 4.13 wörtlich: «Ist nur die psychische Gesundheit beeinträchtigt, muss … ein Anspruch auf eine Rente gegeben sein»; Betreuungsgutschriften seit 2021 bereits bei Hilflosenentschädigung leichten Grades (Sekundärquelle) | teilweise abweichend | W1-21 |
| `rechte-und-angebote` › Quellen | Pro Mente Sana | Titel «Rechte von Angehörigen» | Seitentitel: «Rechte von Angehörigen im psychiatrischen Zwangskontext» | Titel gekürzt | W1-09 |
| `begleiten`, `fuer-sich-sorgen` | MHFA Australia, Depression Guidelines | Hinweise zum Umgang; Übergriffe nicht hinnehmen; Ortswechsel | allgemeine Fassung «Depression: Mental Health First Aid Guidelines», revised 2018 (Datei 2023 hochgeladen); Inhalte nicht gefunden | nicht prüfbar | W1-09, W1-25 |
| `begleiten`, `rechte-und-angebote` | wie-gehts-dir.ch | Kampagne der Deutschschweizer Kantone und von Pro Mente Sana | «Absender: Kantone und Pro Mente Sana im Auftrag von GFCH» (Präsentation 2019) | gestützt (Stand 2019) | – |
| `je-nach-rolle` › `kinder` | Albermann und Müller 2021 | Fragen, die Kinder oft haben | Artikel heisst «Kinder und Jugendliche aus Familien mit einem psychisch erkrankten Elternteil», Paediatrica 32(4) 2021; Inhalt nicht gefunden | Titel abweichend | W1-09, W1-25 |
| `behandlung-und-verlauf` › Abb. 2 | Recherchebericht der Fachstelle | ärztliche Anordnung psychologischer Psychotherapie, Grundversicherung | BAG-Mitteilung wörtlich: «seit dem 1. Juli 2022 … auf ärztliche Anordnung hin … zulasten der … OKP»; anordnen dürfen nach Art. 11b KLV Ärztinnen und Ärzte bestimmter Fachrichtungen (Paraphrase) | gestützt; Quelle intern | W1-09, W1-23 |
| `rechte-und-angebote` › `angebote`, `je-nach-rolle` | VASK Zürich, Stand by You, Equilibrium | Treffpunkte Zürich und Winterthur, Kurse, Gruppe für erwachsene Kinder; früher VASK Schweiz, HelpLine von geschulten Angehörigen, kostenlos, anonym; Gruppen auch für Angehörige | Treffpunkte und Kurse gestützt; Gruppe für erwachsene Kinder nur in VASK-Nachrichten 2010/2011 gefunden; Umbenennung in Stand by You (Januar 2024) und Schulung der HelpLine-Mitarbeitenden gestützt; «kostenlos», «anonym», Angehörigengruppen bei Equilibrium nicht gefunden | teilweise | Prüfbedarf 4, W1-25 |

#### W1-D · Seiteninventar für W2

Je Seite: Funktion (`primaryTask`), Kernaussagen, Begriffe, Handlungsempfehlungen, Zahlen, Quellen, Verweise, Grafiken. Wörter: sichtbarer Text aus `content/<id>.html` ohne Quellenliste und ohne SVG, nachgezählt von der Prüfsitzung.

**1 · Übersicht (`index`, 529 Wörter, 4 Abschnitte, keine Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Einen passenden Einstieg finden, von vorne oder nach Rolle und Frage» |
| Kernaussagen | Depression ist häufig, eine Krankheit und gut behandelbar · betrifft auch Angehörige · die Website ersetzt keine Abklärung · Fachstelle berät kostenlos, auch ohne PUK-Behandlung · fünf Kernsätze in `kurz`: keine Charakterschwäche; niemand schuld; drei von vier belastet; begleiten, nicht heilen; Beobachtungen mitteilen ohne Einverständnis |
| Begriffe | Angehörige und nahe Bezugspersonen · Behandlungsteam · Einverständnis · Lesepfade |
| Handlungsempfehlungen | Fachstelle per E-Mail kontaktieren · Einstieg nach Rolle (6) oder Frage (6) |
| Zahlen | «rund jede zehnte Person» (SGB 2022) · «Drei von vier Angehörigen» |
| Quellen | keine eigene Quellenliste; beide Zahlen sind auf `depression-verstehen` bzw. `ihre-situation` belegt |
| Verweise | 19 interne Ziele auf alle 7 Themenseiten (davon 13 mit Sprungmarke) · `mailto:` Fachstelle |
| Grafiken | keine (Planbegründungen für alle 4 Abschnitte) |

**2 · Depression verstehen (`depression-verstehen`, 1289 Wörter, 6 Abschnitte, 2 Figuren)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Erkennen, was eine Depression ist, wie sie sich im Alltag zeigen kann und warum niemand sie verschuldet hat» |
| Kernaussagen | mehr als Traurigkeit; Kriterien (2 Wochen, Kernsymptom) · Schweregrade · Diagnose durch Fachperson mit körperlicher Abklärung · häufig, Frauen öfter · Rückzug und Gereiztheit oft Krankheitszeichen, nicht Ablehnung · andere Erscheinungsformen (Männer, Ältere, körperlich, rund um die Geburt) · Verletzlichkeit und Belastung, niemand schuld · Formen nach Verlauf · Abgrenzung Trauer, Burnout, bipolare Störung |
| Begriffe | depressive Episode · gedrückte Stimmung · leicht/mittelgradig/schwer · Verletzlichkeit, Belastung, Schwelle · Vulnerabilitäts-Stress-Modell (nur Legende) · Veranlagung, erblicher Anteil · «Serotoninmangel» · einmalige Episode, wiederkehrende Depression, Dysthymie, chronische Depression, psychotische Merkmale · Baby Blues · Burnout · bipolare Störung |
| Handlungsempfehlungen | offen nachfragen statt deuten («Was würde es dir heute leichter machen?») · bei Veränderungen über Wochen Abklärung, Hausarztpraxis als erster Schritt · Phasen gehobener Stimmung der Fachperson sagen |
| Zahlen | 2 Wochen · «rund jede zehnte Person» · «etwa doppelt so oft» (Frauen) · «fast dreimal so oft» (Suizid Männer) · «rund ein Drittel» erblich · «etwa jede vierte» einmalig · 2 Jahre (Dysthymie, chronisch) |
| Quellen | 8 (NVL Kap. 1, SGPP 2025, ICD-11, Obsan 11/2024, Salk 2017, Martin 2013, Sullivan 2000, Moncrieff 2022/Jauhar 2023) |
| Verweise | `begleiten.html#ansprechen` |
| Grafiken | Abb. 1 `v-dv-schichten` (K) · Abb. 2 `v-dv-entstehung` (G, Schritt-Aufbau) |

**3 · Behandlung und Verlauf (`behandlung-und-verlauf`, 1460 Wörter, 7 Abschnitte, 3 Figuren)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Wissen, wie Depression behandelt wird und verläuft und wie man die Behandlung unterstützen kann, ohne Verantwortung dafür zu übernehmen» |
| Kernaussagen | Behandlung nach Schweregrad, Entscheid bei der Person mit der Fachperson · Psychotherapie und Antidepressiva im Vergleich, Kombination bei schwerer Depression · weitere Verfahren · Weg in die Behandlung in 5 Schritten, meist ambulant · Verlauf in Episoden, Erholung häufig, Wiederkehr häufig · Rückfall kein Versagen · Erhaltungstherapie · frühe Zeichen, Krisenplan gehört der Person · Einbezug mit Einverständnis, darum bitten |
| Begriffe | Schweregrad · Psychotherapie (KVT, IPT) · Antidepressiva, Nebenwirkungen, Absetzen · Lichttherapie, EKT, rTMS, Esketamin, Johanniskraut · ambulant, Tagesklinik, Klinik · ärztliche Anordnung, Grundversicherung, Franchise, Selbstbehalt · Episode, Rückfall · frühe Zeichen · Krisenplan · Behandlungsteam |
| Handlungsempfehlungen | bei Terminsuche helfen, mitkommen (wenn gewünscht) · Beobachtungen der Fachperson mitteilen · frühe Zeichen in ruhiger Zeit aufschreiben und wie vereinbart ansprechen · Krisenplan vereinbaren · um Einbezug bitten (Formulierungsbeispiel) |
| Zahlen | 8–12 Wochen · 3–4 Wochen · Hälfte nach 3 Monaten, drei Viertel nach 1 Jahr · 40–60 von 100 · 15–30 von 100, > 2 Jahre · 6–12 Monate · 5 Schritte |
| Quellen | 4 (NVL Kap. 3–6, SGPP 2025, Kuyken 2016, Recherchebericht der Fachstelle) |
| Verweise | `rechte-und-angebote.html#schweigepflicht` |
| Grafiken | Abb. 1 `v-bv-vergleich` (E) · Abb. 2 `v-bv-weg` (C, Ansatzpunkt Schritt 1) · Abb. 3 `v-bv-fruehzeichen` (J, Ansatzpunkt mittlerer Bereich) |

**4 · Ihre Situation (`ihre-situation`, 1062 Wörter, 7 Abschnitte, 2 Figuren)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Die eigene Belastung als häufig und berechtigt einordnen und erkennen, was sie verstärkt und was entlastet» |
| Kernaussagen | Belastung häufig und ähnlich hoch wie bei Schizophrenie, kein Zeichen von Schwäche · häufigste Belastungen · Belastung hängt von der Lebenslage ab (Gefäss) · Ansatzpunkt beim Abfluss · eigene Gesundheit · Beziehung und Depression verstärken sich gegenseitig, niemand schuld (Kreis) · Ansatzpunkt Station 3 · Angst vor Suizid, Trauer |
| Begriffe | Belastung · Lebenslage · Zufluss/Abfluss (Bild) · Lebensqualität · Wechselwirkung · Station, Ansatzpunkt · Kritik in der Familie · Paartherapie · Wachsamkeit |
| Handlungsempfehlungen | Rechte kennen · Information holen, sich beraten lassen, Aufgaben teilen, Auszeiten · auf Warnsignale bei sich achten · eigene Ungeduld als Überlastung sehen, ruhiges Gespräch statt Vorwurf · bei starkem Leiden Paartherapie |
| Zahlen | drei von vier (DE) · 73 von 100 (CH) · etwa vier von zehn · mehr als jede dritte |
| Quellen | 10 (Barometer 2024, Stand by You 2024, van Wijngaarden 2004 und 2009, Huang 2026, Martire 2010, Idstad 2010, Whisman und Uebelacker 2009, Hooley und Gotlib 2000, Barbato 2018) |
| Verweise | `rechte-und-angebote.html#schweigepflicht` · `fuer-sich-sorgen.html` (2×) · `fuer-sich-sorgen.html#eigene-krise` · `begleiten.html#suizidgedanken` |
| Grafiken | Abb. 1 `v-is-gefaess` (G) · Abb. 2 `v-is-kreislauf` (B) |

**5 · Je nach Rolle (`je-nach-rolle`, 1154 Wörter, 8 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Finden, was in der eigenen Rolle besonders zählt …» |
| Kernaussagen | Partner: Hauptlast, Schuldgefühle, Streit, Sexualität, «Wir-Krankheit», Beziehung kann sich vertiefen · Kinder: ehrlich und altersgerecht erklären, «Du bist nicht schuld», erhöhtes Risiko, fünf Schutzfaktoren, keine Erwachsenenaufgaben · Eltern erwachsener Kinder: Schuld, Ausschluss, Sorge um Suizid, unterstützen und loslassen · Geschwister: übersehen, mehr Beschwerden, etwas erhöhtes Risiko · erwachsene Kinder: frühe Verantwortung, Grenzen · Freunde: belastet, Kontakt halten |
| Begriffe | «Wir-Krankheit» · Paartherapie · Schutzfaktoren · Selbstbestimmung · Drehpunkt (Bild) |
| Handlungsempfehlungen | Formulierungsbeispiele für Partner, Kinder, Freunde · Schutzfaktoren stärken · Kinderseele · Absprachen in guter Phase, sich beraten lassen · Beobachtungen ohne Einverständnis mitteilen · Geschwister: eigene Ansprechpersonen · VASK-Gruppe · Kontakt halten, einladen ohne Drängen |
| Zahlen | fast drei Viertel · sechs von zehn · mehr als die Hälfte · zwei- bis dreimal · 48 von 100 und 4 von 100 · fünf Schutzfaktoren · 40 von 100 |
| Quellen | 15 |
| Verweise | `ihre-situation.html`, `ihre-situation.html#wechselwirkung` · `begleiten.html` · `rechte-und-angebote.html`, `#schweigepflicht` · extern: kinderseele.ch, vaskzuerich.ch |
| Grafiken | Abb. 1 `v-ro-spannung` (H) |

**6 · Begleiten und Gespräche (`begleiten`, 809 Wörter, 6 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Die Person ansprechen und im Alltag begleiten können; wissen, was bei Suizidgedanken zu tun ist» |
| Kernaussagen | begleiten statt übernehmen, Entscheidungen bei der Person · Reden macht die Depression nicht schlimmer · was eher hilft und was nicht · Übergriffe nicht hinnehmen · Ablehnung oft Teil der Krankheit, nie Täuschung oder Zwang · Suizid: Warnsignale, direkt fragen, nicht allein lassen, Mittel wegräumen, gemeinsam Hilfe holen |
| Begriffe | begleiten, übernehmen · Warnsignale · Suizidgedanken · akute Lage |
| Handlungsempfehlungen | zuhören, kleine Dinge gemeinsam, zu Terminen ermutigen · Gespräch beginnen (Beispiel) · Abklärung über Schlaf oder Erschöpfung ansprechen · fünf hilfreiche, fünf nicht hilfreiche Verhaltensweisen · Angebot wiederholen, kleine Vorschläge, selbst Beratung holen · direkt nach Suizidgedanken fragen (Beispiel) · danach selbst darüber sprechen |
| Zahlen | keine |
| Quellen | 5 Einträge (MHFA und Bond 2019, wie-gehts-dir.ch, Dazzi 2014, NVL Kap. 2, SGPP 2025) |
| Verweise | `fuer-sich-sorgen.html`, `#grenzen` · Zuständigkeitsverweis im Text (Platzhalter) nach `suizidgedanken` |
| Grafiken | Abb. 1 `v-bg-boot` (D) |

**7 · Für sich sorgen (`fuer-sich-sorgen`, 695 Wörter, 6 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Eigene Grenzen ernst nehmen und passende Entlastung finden» |
| Kernaussagen | Selbstsorge ist kein Egoismus · Grenze = Entscheid über den eigenen Beitrag · Übergriffe nicht hinnehmen · Unterstützung verteilen (Netz) · Angebote wenig untersucht, meist schwache Wirkung · eigene Warnsignale, dann Hilfe holen |
| Begriffe | Grenze · Netz, Kreise · Angehörigengruppe · «Familiencoach Depression» · Paartherapie · Achtsamkeit |
| Handlungsempfehlungen | Grenze formulieren (Beispiel) · Gespräch beenden, Raum verlassen · Übung: drei Kreise zeichnen · Angebote im Kanton Zürich · Hausarztpraxis, Beratungsstelle, Fachstelle |
| Zahlen | drei Monate (Familiencoach) |
| Quellen | 6 |
| Verweise | `rechte-und-angebote.html#angebote` · `mailto:` Fachstelle · Zuständigkeitsverweis im Text (Platzhalter) nach `eigene-krise` |
| Grafiken | Abb. 1 `v-fs-netz` (I) |

**8 · Rechte und Unterstützung im Kanton Zürich (`rechte-und-angebote`, 774 Wörter, 5 Abschnitte, 1 Figur)**

| Feld | Inhalt |
| --- | --- |
| Funktion | «Wissen, was man erfahren und mitteilen darf, welche Rechte man hat und wo es Unterstützung gibt» |
| Kernaussagen | Schweigepflicht gilt für Fachpersonen, nicht für Angehörige · vieles ohne Einwilligung möglich · Bezugspersonen im Kanton Zürich · mehr Rechte durch Einbezug · Ansprüche bei Arbeit und Geld begrenzt · Angebote im Kanton Zürich und in der Schweiz |
| Begriffe | Schweigepflicht · Einwilligung, Zustimmung · Bezugsperson · Entbindung · psychiatrische Patientenverfügung, Vertretungsperson · Akteneinsicht · Kurzurlaub, Betreuungsurlaub · Betreuungsgutschriften, Hilflosenentschädigung, IV-Rente |
| Handlungsempfehlungen | Beobachtungen mitteilen (Beispiel) · Einbezug in einer guten Phase ansprechen · Angebote nutzen |
| Zahlen | 3 Tage pro Ereignis, 10 Tage pro Jahr · 14 Wochen |
| Quellen | 8 (StGB 321, PatG ZH, BAG 2021, ZGB 370 ff., OR 329h/329i, BSV-FAQ, AHV/IV-Merkblätter, Pro Mente Sana) |
| Verweise | keine internen im Inhalt · extern 8 (Anbieter, wie-gehts-dir.ch) · `mailto:` Fachstelle |
| Grafiken | Abb. 1 `v-ra-vergleich` (E) |

**Hinweise für W2 (Begriffe, Doppelungen, Lücken; keine W1-Befunde)**

- **Schweregrad:** «mittelgradig» (`depression-verstehen` › `was-ist`, `behandlung-und-verlauf` › `behandelbar`, Abb. 1) neben «mittelschwer» (Johanniskraut in Abb. 1 › Vertiefung; SGB-Zahl auf `index` und `depression-verstehen`).
- **Einwilligung:** «Einverständnis» (`index`, `behandlung-und-verlauf`, `je-nach-rolle`, `begleiten`), «Einwilligung» und «Zustimmung» (`rechte-und-angebote`).
- **Fachperson und Behandlungsteam** wechseln; «Beratungsstelle für Angehörige» bleibt unbestimmt (`begleiten` › `suizidgedanken`, `fuer-sich-sorgen` › `eigene-krise`).
- **Linktext und Seitentitel:** `ihre-situation` › `was-belastet` und `je-nach-rolle` › `rollen` verlinken «Rechte und Angebote»; der Seitentitel heisst «Rechte und Unterstützung im Kanton Zürich».
- **Stärke derselben Aussage:** «oft Zeichen der Krankheit» (`depression-verstehen` › `dahinter`) und «meist Zeichen der Krankheit» (`je-nach-rolle` › `partner`); Paartherapie «kann helfen» (`ihre-situation`), «kann sinnvoll sein» (`je-nach-rolle`), «verbessert sie die Partnerschaft» (`fuer-sich-sorgen`) – siehe W1-11.
- **Doppelungen:** Paartherapie auf drei Seiten; «Übergriffe nicht hinnehmen» auf `begleiten` › `alltag` und `fuer-sich-sorgen` › `grenzen`; SGB-Zahl auf `index` und `depression-verstehen`; Stand by You und Barbato 2018 je zweimal als Quelle.
- **Verlaufszahlen über zwei Seiten:** `depression-verstehen` › `formen` und `behandlung-und-verlauf` › `verlauf` – siehe W1-02.
- **Lücken für W2 zu beurteilen:** Angehörige älterer Menschen (nur `depression-verstehen` › `anders`); erwachsene Kinder eines im Alter erkrankten Elternteils (W1-14); keine Seite verlinkt `rechte-und-angebote.html#vorsorge` oder `#arbeit-geld`.

#### W1-E · Offener Prüfbedarf der bauenden Sitzung

| Nr. | Punkt | Ergebnis der Prüfsitzung | Beleg | Stand |
| --- | --- | --- | --- | --- |
| 1 | Achtsamkeit (`fuer-sich-sorgen` › `was-hilft`) mit Zhang et al. 2024 abgleichen | Der Satz deckt den Abstract. Studienqualität, Heterogenität und Anteil der Studien zu Depression sind nicht prüfbar: kein PMC-Volltext, Verlagsseite gesperrt. Die Autorinnen und Autoren verlangen «more rigorous methodologies». Neben «leicht» beim Familiencoach (grosse RCT) wirkt die Achtsamkeit ohne Einschränkung besser belegt, als sie ist | Abstract: «stress (SMD = -0.80, 95% CI [-1.33, -0.28]) … depression (SMD = -0.43 …) … but not on anxiety» | offen: W1-07, W1-F-07 |
| 2 | Abb. 1 «Mit im Boot» mit dem Arbeitsheft «Wenn dein Partner depressiv ist» abgleichen | nicht prüfbar: Das Heft liegt nicht im Repository. Das Heft steht nicht in der Quellenliste der Seite | `begleiten` › Abb. 1 › Legende: «Metapher nach dem Arbeitsheft …»; Quellenliste ohne Heft | offen: W1-17, W1-F-15 |
| 3 | Befunde zu Eltern erwachsener Kinder und zu erwachsenen Kindern stammen aus anderen Gruppen; auf der Seite benannt | bestätigt für `eltern` (Kika: Eltern von Jugendlichen; Greally: 13 von 26 Studien zu Erwachsenen, Schwerpunkt Psychosen; Johansson: Eltern Erwachsener mit verschiedenen Erkrankungen) und `erwachsene-kinder`. Die Seite benennt das. Nicht benannt ist es bei `geschwister` (Jayasinghe: psychische Erkrankungen allgemein) | `eltern`: «die Befunde stammen meist aus Studien zu Jugendlichen oder zu psychischen Erkrankungen allgemein» | für `eltern` und `erwachsene-kinder` erfüllt; `geschwister`: W1-15 |
| 4 | Websites der Angebote vor der Veröffentlichung prüfen | in dieser Umgebung nicht möglich (gesperrt). Suchergebnisse: Treffpunkte VASK Zürich in Zürich und Winterthur und Kurse gestützt; **Gruppe für erwachsene Kinder nur in VASK-Nachrichten 2010/2011 gefunden** (`je-nach-rolle` › `erwachsene-kinder` und `rechte-und-angebote` › `angebote`); Stand by You = frühere VASK Schweiz (seit Januar 2024) gestützt; HelpLine «kostenlos, anonym» und Angehörigengruppen bei Equilibrium nicht gefunden | Quellentabelle, letzte Zeile | offen: W1-F-19 |
| 5 | Aktualisierung einplanen (NVL-Kapitel 10, Überprüfung 09/2027) | zur Kenntnis genommen; kein W1-Befund. Suchergebnis: NVL Version 3.2 von Juli 2023; ob eine neuere Fassung erschienen ist, vor der Freigabe prüfen | Quellentabelle, Zeile NVL | offen (Planung) |

#### W1-F · Fragen an die Fachstelle (Prüfbedarf)

Die Prüfsitzung entscheidet keine fachlichen Fragen. Bitte je Frage entscheiden; danach setzt die bauende Sitzung um.

1. **W1-F-01 · Was Angehörige erfahren dürfen** (W1-01). Abb. 1 auf `rechte-und-angebote` sagt im Kurztext «erst für Auskünfte über ihre Behandlung und für die Akten braucht es ihre Zustimmung», die Tabelle aber «im Kanton Zürich an Bezugspersonen möglich, solange die erkrankte Person nicht widerspricht». Soll (a) der Kurztext an die Zürcher Regel angepasst werden? Soll (b) das Formulierungsbeispiel «Ich weiss, dass Sie mir nichts über meinen Mann sagen dürfen.» so umformuliert werden, dass es auch für Bezugspersonen stimmt (etwa «Falls Sie mir nichts sagen dürfen: …»)? Gilt (c) dasselbe für die Wirkung im Plan («auch wenn das Team mir nichts sagen darf»)? Je Ja/Nein.
2. **W1-F-02 · Verlauf** (W1-02). `depression-verstehen` › `formen` sagt «Etwa jede vierte Depression bleibt einmalig» und «Bei den meisten kehrt die Depression … wieder»; `behandlung-und-verlauf` › `verlauf` sagt «Nach einer ersten Episode erkranken etwa 40 bis 60 von 100 Menschen erneut». Welche Aussage gilt? Vorschlag: «jede vierte» und «bei den meisten» streichen oder an die NVL-Zahl angleichen (etwa «Bei etwa der Hälfte kehrt die Depression wieder»).
3. **W1-F-03 · Eigene Gesundheit** (W1-03). Idstad et al. 2010 zeigt bei Partnerinnen und Partnern mehr Angst- und Depressionsbeschwerden und weniger Wohlbefinden, nicht Schlafprobleme, Erschöpfung, Grübeln, körperliche Beschwerden oder Lebensqualität einzeln. Soll der Satz auf das Gezeigte gekürzt werden, oder gibt es eine Quelle für die Aufzählung?
4. **W1-F-04 · Kritik in der Familie** (W1-04). Soll der Satz «Frühe kleine Studien fanden einen Zusammenhang, spätere nicht» (a) gestrichen oder (b) ersetzt werden, etwa: «Kritik in der Familie hängt mit Rückfällen zusammen; sie entsteht aber oft als Antwort auf eine belastende Situation»? Dabei Butzlaff und Hooley 1998 als Quelle aufnehmen (Ja/Nein)?
5. **W1-F-05 · Geschwister** (W1-05). «nicht an der Unterstützung, die sie leisten» streichen (Ja/Nein)? «etwas erhöhtes Risiko» durch «ein erhöhtes Risiko» ersetzen (Rhee: HR 1,74)?
6. **W1-F-06 · Information für Familien** (W1-06). «Information über die Krankheit: Hilft nachweislich vor allem der erkrankten Person» – soll es heissen: «Familienkurse (Psychoedukation) helfen nach ersten, noch schwachen Studien vor allem der erkrankten Person»? «nachweislich» streichen (Ja/Nein)?
7. **W1-F-07 · Achtsamkeit** (W1-07, Prüfbedarf 1). Einschränkung ergänzen, etwa: «… in kleineren Studien von begrenzter Qualität; die Belastung sank nur wenig» (Ja/Nein, Wortlaut)?
8. **W1-F-08 · Gefäss und fehlende Information** (W1-08). Steht «fehlende Information» (a) weiter bei den Zuflüssen, dann ohne «An ihnen können Angehörige wenig ändern» für diesen Punkt, oder (b) nur beim Ansatzpunkt «Information holen»?
9. **W1-F-09 · Erwachsene Kinder** (W1-14). Soll `erwachsene-kinder` auch Töchter und Söhne eines erst im Alter erkrankten Elternteils ansprechen (ein Satz oder Absatz, Ja/Nein)?
10. **W1-F-10 · Erhaltungstherapie** (W1-20). «nach der Besserung» durch «nach dem Abklingen der Beschwerden» (NVL: Remission) ersetzen (Ja/Nein)?
11. **W1-F-11 · Arbeit und Geld** (W1-21). Rechtliche Prüfung: (a) Betreuungsgutschriften schon bei Hilflosenentschädigung leichten Grades; (b) Kurzurlaub bei wiederkehrender Erkrankung nur einmal je Beeinträchtigung? Wortlaut danach anpassen.
12. **W1-F-12 · Vertretung bei Urteilsunfähigkeit** (W1-22). Soll `vorsorge` das gesetzliche Vertretungsrecht (Art. 378 ZGB) erwähnen, mit dem Hinweis auf Art. 380 ZGB, oder bleibt es wegen des Entscheids «keine fürsorgerische Unterbringung» weg?
13. **W1-F-13 · Eltern erwachsener Kinder, Abb. 1** (W1-16). Mitte «… und frage, bevor ich etwas unternehme» und darunter «Auch ohne Einverständnis … dürfen Sie dem Behandlungsteam Ihre Beobachtungen mitteilen»: Soll die Mitte «… und sage dir, bevor ich etwas unternehme» heissen (passt zu «Offen sagen, was man selbst unternimmt»), oder bleibt es?
14. **W1-F-14 · Eigene Krise** (W1-18). Steht der Zuständigkeitsverweis auf `fuer-sich-sorgen` › `eigene-krise` vor dem Satz mit der E-Mail der Fachstelle, oder bleibt die Reihenfolge?
15. **W1-F-15 · Boot und Arbeitsheft** (W1-17, Prüfbedarf 2). Stimmt Abb. 1 auf `begleiten` mit der Metapher im Arbeitsheft überein? Soll das Heft mit Titel, Jahr und Herausgeberin in die Quellenliste?
16. **W1-F-16 · Übersicht** (W1-19). «Drei von vier Angehörigen erleben die Depression als belastend.» – ergänzen zu «In einer grossen Befragung in Deutschland …» oder durch die Schweizer Zahl ersetzen?
17. **W1-F-17 · Stärke einzelner Formulierungen** (W1-11, W1-12, W1-13, W1-15). Bitte je Stelle in W1-12 Ja/Nein, ob abgeschwächt wird; ebenso Paartherapie (W1-11), die Schutzfaktoren (W1-13) und der Hinweis «psychische Erkrankungen allgemein» bei Geschwistern und Achtsamkeit (W1-15).
18. **W1-F-18 · Anordnung von Psychotherapie** (W1-23). «wenn eine Ärztin oder ein Arzt sie anordnet» präzisieren, etwa «wenn eine Hausärztin, Psychiaterin oder eine andere dazu berechtigte Ärztin sie anordnet» (Ja/Nein)?
19. **W1-F-19 · Angebote** (Prüfbedarf 4). Besteht die Gruppe der VASK Zürich für erwachsene Kinder psychisch erkrankter Eltern noch? Ist die HelpLine von Stand by You kostenlos und anonym? Bietet Equilibrium Gruppen für Angehörige an?
20. **W1-F-20 · Trauer** (W1-24). Soll `formen` › Trauer erwähnen, dass eine ungewöhnlich lange, lähmende Trauer abgeklärt werden kann?
21. **W1-F-21 · Fachliche Freigaben.** Offen sind alle Texte (Musterentwurf) und die elf Visualisierungen (`approvalStatus` «ausstehend»).

#### W1-G · Befunde W1

Schwere: **wichtig** = vor der Freigabe zu klären; **optional** = Verbesserung. Quelle aller Befunde: Prüfung 1.

- **W1-01 · wichtig · Rechte: Abbildung, Beispiel und Plan widersprechen der Zürcher Regel.**
  - **Beleg:** `rechte-und-angebote` › Abb. 1, `p.puk-vis-short`: «erst für Auskünfte über ihre Behandlung und für die Akten braucht es ihre Zustimmung»; Tabelle Spalte A: «im Kanton Zürich an Bezugspersonen möglich, solange die erkrankte Person nicht widerspricht» (Entscheid der Fachstelle vom 10.10.2026 zu § 15 PatG ZH); Formulierungsbeispiel: «Ich weiss, dass Sie mir nichts über meinen Mann sagen dürfen.»; `site.config.json` › `v-ra-vergleich` › `resonance`: «auch wenn das Team mir nichts sagen darf».
  - **Folge:** Eine Partnerin, die nach Zürcher Recht Bezugsperson ist, liest zweimal, dass man ihr nichts sagen darf.
  - **Zuständig:** Fachstelle (W1-F-01), danach bauende Sitzung.
- **W1-02 · wichtig · Verlaufszahlen widersprechen sich.**
  - **Beleg:** `depression-verstehen` › `formen`: «Etwa jede vierte Depression bleibt einmalig.» und «Bei den meisten kehrt die Depression nach Monaten oder Jahren wieder.»; `behandlung-und-verlauf` › `verlauf`: «Nach einer ersten Episode erkranken etwa 40 bis 60 von 100 Menschen erneut». Bei 40 bis 60 Rückfällen auf 100 bleiben 40 bis 60 einmalig, nicht 25. «jede vierte» ist in den Quellen nicht gefunden; «40–60 %» gibt ein Suchergebnis aus NVL Kap. 1.4 wieder.
  - **Zuständig:** Fachstelle (W1-F-02).
- **W1-03 · wichtig · «Die eigene Gesundheit»: Quelle deckt die Aufzählung nicht.**
  - **Beleg:** `ihre-situation` › `gesundheit`: «Schlafproblemen, Erschöpfung, Grübeln und körperlichen Beschwerden, und ihre Lebensqualität ist tiefer»; Idstad 2010 misst nur einen Summenwert für Angst und Depression und das subjektive Wohlbefinden, Grübeln gar nicht; nur Partner, «mental disorder» allgemein.
  - **Zuständig:** Fachstelle (W1-F-03).
- **W1-04 · wichtig · Kritik und Rückfall: Aussage ohne Quelle, im Widerspruch zur Meta-Analyse.**
  - **Beleg:** `ihre-situation` › Abb. 2 › Vertiefung: «Frühe kleine Studien fanden einen Zusammenhang, spätere nicht.» Keine Quelle der Seite deckt das; Butzlaff und Hooley 1998 (Meta-Analyse): «the mean effect sizes for EE for both mood disorders and eating disorders were significantly higher than the mean effect size for schizophrenia».
  - **Zuständig:** Fachstelle (W1-F-04).
- **W1-05 · wichtig · Geschwister: kausale Aussage ohne Beleg.**
  - **Beleg:** `je-nach-rolle` › `geschwister`: «Das liegt an gemeinsamen familiären und erblichen Faktoren, nicht an der Unterstützung, die sie leisten.» Rhee 2025 untersucht Unterstützung nicht; «etwas erhöhtes Risiko» bei HR 1,74.
  - **Zuständig:** Fachstelle (W1-F-05).
- **W1-06 · wichtig · «nachweislich» widerspricht der Quelle.**
  - **Beleg:** `fuer-sich-sorgen` › `was-hilft`: «Information über die Krankheit · Hilft nachweislich vor allem der erkrankten Person.» Katsuki 2022: «all outcomes are graded very low on certainty»; untersucht wurde Familien-Psychoedukation, reine Information war ausgeschlossen.
  - **Zuständig:** Fachstelle (W1-F-06).
- **W1-07 · wichtig · Achtsamkeit ohne Einschränkung (Prüfbedarf 1).**
  - **Beleg:** `fuer-sich-sorgen` › `was-hilft`: «Programme zur Achtsamkeit verringerten bei Angehörigen psychisch erkrankter Menschen Stress und Niedergeschlagenheit.»; derselbe Abschnitt verspricht «ehrlich betrachtet» und nennt den Familiencoach «leicht». Zhang 2024 verlangt «more rigorous methodologies»; Belastung nur SMD −0,21.
  - **Zuständig:** Fachstelle (W1-F-07).
- **W1-08 · wichtig · Gefäss: «fehlende Information» steht auf beiden Seiten.**
  - **Beleg:** `ihre-situation` › Abb. 1, `p.puk-vis-short`: Zuflüsse «… fehlende Information. An ihnen können Angehörige wenig ändern.»; Satz im Bild «Niemand sagt mir, wie es weitergeht.» bei den Zuflüssen; Ansatzpunkt «Information holen»; `was-belastet`: «Dagegen lässt sich etwas tun».
  - **Zuständig:** Fachstelle (W1-F-08).
- **W1-09 · wichtig · Quellenangaben unvollständig oder ungenau.**
  - **Beleg:**
    - Titel fehlen in 31 Quelleneinträgen zu Fachartikeln (Abweichung «Autorin et al. Jahr, Zeitschrift» der bauenden Sitzung). Die vollständigen Angaben stehen in der Quellentabelle (W1-C) und können übernommen werden.
    - Bei keiner Online-Quelle steht ein Abrufdatum. ICD-11, Martire, Hooley, Jayasinghe, Moncrieff/Jauhar, Katsuki 2018, Ipsen, Schomerus ohne Link oder DOI.
    - Barbato 2018: dritter Autor Parabiaghi fehlt (`ihre-situation`, `fuer-sich-sorgen`).
    - `behandlung-und-verlauf` › `verlauf`: «In einer Studie, auf die sich die deutsche Leitlinie stützt» ohne Angabe der Studie (vermutlich Spijker et al. 2002, Allgemeinbevölkerung).
    - NVL «Kapitel 3 bis 6» für Verlauf und Rückfallrisiko; diese stehen laut Suchergebnis in Kap. 1.4 «Verlaufsformen und prognostische Faktoren».
    - Titel gekürzt oder ungenau: SGPP («Die Behandlung der unipolaren depressiven Störungen: Update 2025, Teil 1»), Albermann und Müller («Kinder und Jugendliche aus Familien mit einem psychisch erkrankten Elternteil»), Pro Mente Sana («… im psychiatrischen Zwangskontext»), Greally («Übersicht zu Eltern erwachsener Kinder» – betrifft Eltern von Kindern jeden Alters), MHFA ohne Jahr (Fassung «revised 2018»).
    - PatG ZH: § 15 ohne Absatz (Abs. 2); § 19 als Akteneinsicht nicht bestätigt; Link auf eine bestimmte Fassung («…-083.html»).
    - Suizidzahlen («fast dreimal») stammen vermutlich aus Obsan-Bulletin 08/2024, nicht 11/2024.
    - Rechtlich-administrative Aussagen zur Anordnung psychologischer Psychotherapie nur mit dem internen Recherchebericht belegt; Standard sind amtliche Quellen (Art. 11b KLV, BAG).
  - **Zuständig:** bauende Sitzung (Titel und Angaben aus W1-C übernehmen); Fachstelle nur für die Studie zu «Hälfte nach drei Monaten».
- **W1-10 · wichtig · Aussagen ohne deckende Quelle.**
  - **Beleg:**
    - `depression-verstehen` › `anders`: ältere Menschen, körperliche Beschwerden, rund um die Geburt; `formen` › Trauer, Burnout (keine Quellenzeile nennt sie).
    - `depression-verstehen` › Vertiefung Abb. 2: «Antidepressiva wirken trotzdem; ihre Wirkung wurde in Studien direkt gemessen.» – Moncrieff und Jauhar enthalten keine Wirksamkeitsdaten.
    - `behandlung-und-verlauf` › Abb. 1: «Zu Beginn kann es vorübergehend schwerer werden»; «nach acht bis zwölf Wochen» (nicht gefunden); `verlauf`: «Je früher er erkannt wird, desto besser lässt er sich behandeln.»
    - `ihre-situation`: «Am häufigsten nennen Angehörige die Sorge» (keine Rangfolge in van Wijngaarden 2004 und Barometer 2024 gefunden); «dauernde Wachsamkeit»; «Trauer um das, was … verloren geht».
    - `je-nach-rolle`: «Partnerinnen und Partner tragen oft die Hauptlast»; «zwei- bis dreimal» (Rasic: Wert für Depression nur im Volltext); Dam und Hall in der Quellenliste ohne Aussage auf der Seite.
    - `begleiten`: «Über die Depression zu reden, macht sie nicht schlimmer.»; «Ein Ortswechsel heilt keine Depression.»
    - `fuer-sich-sorgen`: «werden sehr geschätzt» (nur für eine Partnergruppe belegt); Name «Familiencoach Depression» und «kostenlos» stehen nicht in Schramm 2026.
    - `rechte-und-angebote`: «auch bei einer psychischen Erkrankung» (BSV-FAQ) und «allgemein informieren» (BAG) nicht gefunden.
  - **Zuständig:** bauende Sitzung (Quellen ergänzen oder Aussage anpassen), Fachstelle bei Streichungen.
- **W1-11 · optional · Paartherapie mit unterschiedlicher Stärke.**
  - **Beleg:** «kann … helfen» (`ihre-situation`), «kann sinnvoll sein» (`je-nach-rolle`), «verbessert sie die Partnerschaft» (`fuer-sich-sorgen`); Barbato 2018: «very low-quality evidence».
  - **Zuständig:** Fachstelle (W1-F-17).
- **W1-12 · optional · Formulierungen stärker als die Evidenz.**
  - **Beleg:**
    - «Frauen erhalten die Diagnose etwa doppelt so oft» – Salk misst Kriterien in Befragungen (Erwachsene OR 1,7–2,0).
    - «Depression zeigt sich häufiger als Gereiztheit … oder Flucht in die Arbeit» – Martin: «Further study is needed»; Gereiztheit und Arbeit nicht im Abstract.
    - «den grösseren Teil erklären Lebenserfahrungen» – Sullivan: «individual-specific environmental effects/measurement error».
    - «Das ist gut untersucht» / «Gut belegt» (Whisman: eine Studie, Assoziation); «wird es meist auch für Angehörige leichter» (Martire: Trend bei allgemeiner Belastung, ab 60 Jahren).
    - «sind meist Zeichen der Krankheit» (`je-nach-rolle`; `depression-verstehen`: «oft»); «Viele erleben Schuld oder Scham» (Kika: «Some parents»); «für viele ist das Gespräch eine Entlastung» (Dazzi: «may»).
    - Abb. 1 `ihre-situation`, Kern: «hängt nicht von Ihrer Stärke ab» (absolut).
    - Lichttherapie «hilft» (`behandlung-und-verlauf` › Abb. 1 › Vertiefung).
    - Etikettierend: «die Hälfte der Erkrankten» (`behandlung-und-verlauf` › `verlauf`), «Eltern depressiver Jugendlicher» (Quellenzeile Kika).
  - **Zuständig:** Fachstelle (W1-F-17), Sprachliches an S.
- **W1-13 · optional · Schutzfaktoren frei gedeutet.**
  - **Beleg:** `je-nach-rolle` › `kinder`: «eine verlässliche Bezugsperson und die Unterstützung durch den anderen Elternteil» (gemessen: «co-parent support»), «zugewandte, warme Momente mit dem erkrankten Elternteil» (gemessen: «positive expressed emotion»; die Wärme-Skala war nicht signifikant). Die Zahlen 48 und 4 von 100 stimmen.
  - **Zuständig:** Fachstelle (W1-F-17).
- **W1-14 · wichtig · Erwachsene Kinder: eine grosse Gruppe fehlt.**
  - **Beleg:** `je-nach-rolle` › `erwachsene-kinder`: «Wer mit einem Elternteil mit Depression aufgewachsen ist, hat oft früh Verantwortung übernommen.» Töchter und Söhne eines erst im Alter erkrankten Elternteils finden sich nicht; der Lesepfad auf `index` («Tochter oder Sohn eines Elternteils mit Depression») führt alle dorthin; `depression-verstehen` › `anders` nennt Depression im Alter.
  - **Zuständig:** Fachstelle (W1-F-09).
- **W1-15 · optional · Befunde zu psychischen Erkrankungen allgemein nicht als solche benannt.**
  - **Beleg:** `je-nach-rolle` › `geschwister` (Jayasinghe: «any psychiatric disorder»); `fuer-sich-sorgen` › Achtsamkeit (Zhang: «people with mental illness»; im Text benannt, aber als Beleg für Depression gelesen). Bei `eltern` und bei Stand by You ist es benannt.
  - **Zuständig:** Fachstelle (W1-F-17).
- **W1-16 · optional · Eltern erwachsener Kinder: Mitte der Waage und Text darunter.**
  - **Beleg:** Abb. 1 Mitte: «… und frage, bevor ich etwas unternehme»; Absatz danach: «Auch ohne Einverständnis Ihres erwachsenen Kindes dürfen Sie dem Behandlungsteam Ihre Beobachtungen mitteilen»; rechte Seite: «Offen sagen, was man selbst unternimmt».
  - **Zuständig:** Fachstelle (W1-F-13).
- **W1-17 · optional · Arbeitsheft fehlt in der Quellenliste; Abgleich offen (Prüfbedarf 2).**
  - **Beleg:** `begleiten` › Abb. 1 › Legende: «Metapher nach dem Arbeitsheft …»; Quellenliste ohne Heft.
  - **Zuständig:** Fachstelle (W1-F-15).
- **W1-18 · optional · Eigene Krise: Reihenfolge von Fachstelle und Zuständigkeitsverweis.**
  - **Beleg:** `fuer-sich-sorgen` › `eigene-krise`: letzte Warnsignal-Zeile «Sie haben selbst Gedanken, nicht mehr leben zu wollen.», dann «Die Fachstelle Angehörigenarbeit der PUK berät Sie kostenlos und vertraulich: …», erst danach `<p data-responsibility-inline></p>`. Kein Verstoss gegen die Regel (Platzhalter steht nach der Handlungsanleitung); offen ist nur, ob die Reihenfolge eine Zuständigkeit der Fachstelle in Krisen nahelegt.
  - **Zuständig:** Fachstelle (W1-F-14).
- **W1-19 · optional · Übersicht verallgemeinert eine deutsche Befragung.**
  - **Beleg:** `index` › `kurz`: «Drei von vier Angehörigen erleben die Depression als belastend.»; Barometer 2024: «als große Belastung für das Familienleben», Deutschland; `ihre-situation` › `nicht-allein` nennt beides.
  - **Zuständig:** Fachstelle (W1-F-16).
- **W1-20 · wichtig · Erhaltungstherapie: «nach der Besserung» statt «nach der Remission».**
  - **Beleg:** `behandlung-und-verlauf` › `vorbeugen`: «Antidepressiva sollen nach der Besserung noch sechs bis zwölf Monate weiter eingenommen … werden»; NVL Kap. 6 (Suchergebnis, Wortlaut): «6–12 Monate über die Remission einer depressiven Episode hinaus». «Besserung» kann als erste Erleichterung gelesen werden; die Frist begänne zu früh.
  - **Zuständig:** Fachstelle (W1-F-10).
- **W1-21 · wichtig · Arbeit und Geld: zwei Aussagen rechtlich prüfen.**
  - **Beleg:** `rechte-und-angebote` › `arbeit-geld`: «Sie kommen nur bei einer schweren, dauerhaften Beeinträchtigung in Frage» – für Betreuungsgutschriften genügt laut Suchergebnis seit 2021 eine Hilflosenentschädigung leichten Grades; «höchstens drei Tage pro Ereignis» – laut Pro Infirmis (Sekundärquelle) bei wiederholten Krisen derselben Erkrankung nur einmal. Die Seite sagt selbst «rechtliche Prüfung ausstehend».
  - **Zuständig:** Fachstelle mit rechtlicher Prüfung (W1-F-11).
- **W1-22 · optional · Vertretungsrecht bei Urteilsunfähigkeit nicht erwähnt.**
  - **Beleg:** `rechte-und-angebote` › `vorsorge` nennt Bezugsperson, Entbindung und Patientenverfügung, nicht Art. 378 ZGB (Vertretung durch Ehegatten und Angehörige bei Urteilsunfähigkeit); für die Klinikbehandlung psychischer Störungen gilt Art. 380 ZGB.
  - **Zuständig:** Fachstelle (W1-F-12).
- **W1-23 · optional · Anordnung von Psychotherapie zu allgemein.**
  - **Beleg:** `behandlung-und-verlauf` › Abb. 2 › Vertiefung: «wenn eine Ärztin oder ein Arzt sie anordnet»; anordnen dürfen nach Art. 11b KLV nur Ärztinnen und Ärzte bestimmter Fachrichtungen (Suchergebnis, Paraphrase).
  - **Zuständig:** Fachstelle (W1-F-18).
- **W1-24 · optional · Trauer.**
  - **Beleg:** `depression-verstehen` › `formen`: «Trauer nach einem Verlust ist keine Krankheit.» Die ICD-11 führt nach Kenntnis der Prüfsitzung eine «anhaltende Trauerstörung» (6B42); nicht am Original geprüft.
  - **Zuständig:** Fachstelle (W1-F-20).
- **W1-25 · wichtig · Nicht am Original geprüft (Prüflücke).**
  - **Beleg:** Quellentabelle W1-C, zweiter Teil. Vor allem: Stand by You (73 von 100, 40 von 100, Angst vor Suizid: nicht gefunden, andere 73-%-Werte in der Studie); NVL «40 bis 60» und «15 bis 30»; Obsan (Behandlung nach Geschlecht); PatG ZH § 19; BSV-FAQ; BAG «allgemein informieren»; MHFA-Inhalte; Albermann und Müller; Rasic (Wert für Depression); Angebote (Prüfbedarf 4).
  - **Zuständig:** eine Prüfsitzung mit Zugriff auf die Originale oder die Fachstelle. Bis dahin kann W1 nicht «erledigt» sein.

#### Zählung der Befunde W1

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| wichtig | 14 | W1-01 bis W1-10, W1-14, W1-20, W1-21, W1-25 |
| optional | 11 | W1-11 bis W1-13, W1-15 bis W1-19, W1-22 bis W1-24 |
| Fragen an die Fachstelle | 21 | W1-F-01 bis W1-F-21 |

### W2 Gesamtkohärenz

#### Prüfrunde W2 (10.10.2026, Stand `c2d1de8`)

**Geprüft durch:** dieselbe Prüfsitzung wie W1 (Claude Code, hat die Website nicht gebaut). Keine Inhalte und kein Code geändert; nur dieser Bericht.

**Grundlage:** Seiteninventar W1-D und die acht Inhaltsseiten. Dazu von der Prüfsitzung nachgezählt: Wörter je Seite mit und ohne Vertiefung (`details`), interne Links zwischen den Seiten, 31 zentrale Begriffe je Seite, Fusszeile und Zuständigkeitsverweise der gebauten Seiten. Kriterien: Abschnitt «Gesamtkohärenz und Aufbau» (`guidelines/00-gesamtkohaerenz-und-aufbau.md`). W2 wiederholt die Seitenbefunde aus W1 nicht und verweist auf sie.

**Ergebnis:** W2 bleibt **offen**. 11 Befunde (3 wichtig, 8 optional), 8 Fragen an die Fachstelle (W2-F-01 bis W2-F-08). Der Aufbau trägt; eine Umstrukturierung ist nicht nötig. Nötig sind Verweise zwischen den Seiten, ein einheitlicher Begriff «Bezugsperson» und eine Bündelung der Paartherapie. Diese Strukturänderungen sollen vor S umgesetzt werden (Liste am Ende).

#### W2-A · Prüfpunkte

| Nr. | Prüfpunkt | Ergebnis | Beleg | Befund |
| --- | --- | --- | --- | --- |
| 1 | Eine übergeordnete Zielsetzung; jede Seite trägt erkennbar bei | erfüllt | `index` › Hero: «Diese Website erklärt die Erkrankung, ordnet Ihre eigene Situation ein und zeigt, was Sie tun können und wo Sie Unterstützung finden.» Jede der sieben Themenseiten deckt einen der vier Teile ab (`primaryTask` im Inventar W1-D); keine Seite ohne Bezug zum Ziel | – |
| 2 | Wichtigste Inhalte erhalten den meisten Raum; Nebenthemen nicht überproportional | erfüllt | Sichtbare Wörter (ohne Vertiefung): Verstehen 2395, Ihre Situation 2032, Handeln 2140 (W2-B). Nebenthemen der Behandlung (EKT, rTMS, Esketamin, Lichttherapie, Johanniskraut, Kosten) stehen in der Vertiefung (176 Wörter). `fuer-sich-sorgen` ist die kürzeste Themenseite (625 sichtbare Wörter), aber vollständig; Selbstsorge fehlt als Kernsatz auf `index` | W2-11 |
| 3 | Aufbaulogik festgelegt und benannt | erfüllt | `index` › `kapitel`: «Die Seiten führen vom Verstehen über die eigene Situation zum Handeln. Jede Seite ist auch für sich verständlich.»; README «vom Verstehen über die eigene Situation zum Handeln, mit Lesepfaden nach Rolle und nach Frage»; Plan von der Fachstelle am 10.10.2026 freigegeben | – |
| 4 | Logik konsequent durchgehalten | erfüllt | Eyebrows der gebauten Seiten: «Verstehen» (`depression-verstehen`, `behandlung-und-verlauf`), «Ihre Situation» (`ihre-situation`, `je-nach-rolle`), «Handeln» (`begleiten`, `fuer-sich-sorgen`, `rechte-und-angebote`). Handlungsteile auf «Verstehen»-Seiten (Krisenplan, Einbezug) sind als «05 · Alltag» und «06 · Handeln» gekennzeichnet | – |
| 5 | Navigation spiegelt die Logik | erfüllt | `site.config.json` › `pages` und Hauptnavigation (8 Einträge) in derselben Reihenfolge wie die Gruppen | – |
| 6 | Abhängigkeiten: kein Wissen vorausgesetzt, das später oder nie erklärt wird; Übergänge; Wiederaufnahme früherer Inhalte | teilweise | `rechte-und-angebote` › Abb. 1 verwendet «Bezugspersonen» als Rechtsbegriff, erklärt wird er erst in `vorsorge`; der Lesepfad «Was darf ich erfahren?» landet in Abb. 1. Spätere Seiten greifen frühere Inhalte auf (Rückzug als Krankheitszeichen auf `ihre-situation`, `je-nach-rolle`, `begleiten`), verweisen aber nicht zurück; die Seiten enden ohne Hinweis auf die nächste Seite. Verwendet, aber nicht erklärt: W2-D, letzte Spalte | W2-01, W2-03, W2-08 |
| 7 | Begriffe einheitlich verwendet und definiert; Begriffsübersicht | teilweise | «Bezugsperson» in zwei Bedeutungen; «Einverständnis», «Einwilligung», «Zustimmung» für dasselbe; «mittelgradig» neben «mittelschwer». Eine Begriffsübersicht gab es nicht; sie steht jetzt in W2-D | W2-03, W2-04, W2-05, W2-07 |
| 8 | Keine Widersprüche bei Fakten, Empfehlungen, Zahlen; Erklärmodelle ins Verhältnis gesetzt | teilweise | Widersprüche zwischen Seiten sind bereits W1-Befunde: Verlauf (W1-02), Stärke der Paartherapie (W1-11), «oft» und «meist» Zeichen der Krankheit (W1-12), Bezugspersonen und Auskunft (W1-01). Erklärmodelle: Schwelle (`depression-verstehen`, Entstehung), Gefäss (`ihre-situation`, Belastung der Angehörigen), Kreis (`ihre-situation`, Wechselwirkung) erklären verschiedene Dinge und konkurrieren nicht. «Belastung» heisst in der Schwelle «Belastung der erkrankten Person», im Gefäss «Belastung der Angehörigen» (W2-D) | siehe W1 |
| 9 | Quellen einheitlich zitiert; dieselbe Aussage überall gleich belegt | teilweise | Mehrfach zitierte Quellen stehen gleich da (Barbato 2018 auf `ihre-situation` und `fuer-sich-sorgen`, Stand by You auf `ihre-situation` und `je-nach-rolle`, SGPP auf drei Seiten). Ungleich belegt: Paartherapie auf `je-nach-rolle` ohne Quelle, auf zwei anderen Seiten mit Barbato. Uneinheitliches Format (mit und ohne Titel): W1-09 | W2-06, siehe W1-09 |
| 10 | Haltung durchgehend gleich (Anrede, Ton, Bild der Angehörigen und der erkrankten Person) | erfüllt | «Sie» auf allen Seiten, «du» nur in Formulierungsbeispielen; Angehörige als Begleitende ohne Behandlungsverantwortung (`index` › `kurz`, `begleiten` › Hero, `behandlung-und-verlauf` › Hero); erkrankte Person als selbstbestimmt (`begleiten` › `haltung`, `behandlung-und-verlauf` › Krisenplan). Einzige Spannung: W1-16 | siehe W1-16 |
| 11 | Redundanz bewusst eingesetzt | teilweise | Kerngedanken werden sinnvoll wiederholt und verlinkt (W2-E). Unnötig: Paartherapie mit gleichem Satz auf zwei Seiten und einer dritten Erwähnung | W2-06 |
| 12 | Quereinstieg: Einstiegsseiten für sich verständlich | erfüllt | Jede Seite hat eine einordnende Einleitung (Hero), z. B. `je-nach-rolle`: «Das Allgemeine steht auf den anderen Seiten.»; Die 12 Lesepfade auf `index` führen in 11 Abschnitte und eine Seite. Lücken bei Fachbegriffen auf einzelnen Seiten: W2-08 | W2-08 |
| 13 | Verlinkung unterstützt Aufbaulogik und Quereinstieg | nicht erfüllt | `depression-verstehen`, `behandlung-und-verlauf` und `je-nach-rolle` erhalten von keiner Themenseite einen Link; `rechte-und-angebote` verlinkt keine andere Seite; `depression-verstehen`, `behandlung-und-verlauf` und `begleiten` verlinken je nur eine andere Seite (W2-C). `je-nach-rolle` › `eltern` nennt die Sorge um Suizid ohne Weg zu `begleiten.html#suizidgedanken` | W2-01, W2-02 |
| 14 | Hinweis «ersetzt keine Abklärung» auf jeder Seite | erfüllt | Fusszeile aller 8 gebauten Seiten: `<p … data-disclaimer>Diese Website ersetzt keine individuelle Abklärung, Beratung oder Behandlung.</p>`; zusätzlich `index` › `einstieg` | – |
| 15 | Zuständigkeitsverweis: genau einer an fester Stelle; im Text nur direkt nach einer Handlungsanleitung für akute Lagen; nächster Schritt vorhanden | erfüllt | Fusszeile aller 8 Seiten (`data-safety-access="responsibility"`, geprüft 09.10.2026). Im Text nur zweimal, je direkt nach einer Anleitung: `begleiten` › `suizidgedanken` (nach «… holen Sie gemeinsam Hilfe.») und `fuer-sich-sorgen` › `eigene-krise` (nach «Dann ist es Zeit, Unterstützung für sich zu holen …»); Wortlaut aus `responsibility.inline`. Keine weiteren Verweise. Reihenfolge auf `fuer-sich-sorgen`: W1-18 | siehe W1-18 |
| 16 | Lücken im Gesamtkonzept (Prüfliste) | erfüllt, mit Fragen | Alle neun Themen der Prüfliste sind abgedeckt (W2-L). Fragen zu drei möglichen Lücken an die Fachstelle | W2-10 |

#### W2-B · Raum und Gewichtung

Wörter: sichtbarer Text aus `content/<id>.html` ohne Quellenliste und SVG; «Vertiefung» = Text in `details`.

| Gruppe | Seite | Wörter | davon Vertiefung | sichtbar | Abschnitte | Figuren |
| --- | --- | --- | --- | --- | --- | --- |
| Einstieg | Übersicht | 529 | 0 | 529 | 4 | 0 |
| Verstehen | Depression verstehen | 1289 | 178 | 1111 | 6 | 2 |
| Verstehen | Behandlung und Verlauf | 1460 | 176 | 1284 | 7 | 3 |
| Ihre Situation | Ihre Situation | 1062 | 145 | 917 | 7 | 2 |
| Ihre Situation | Je nach Rolle | 1154 | 39 | 1115 | 8 | 1 |
| Handeln | Begleiten und Gespräche | 809 | 38 | 771 | 6 | 1 |
| Handeln | Für sich sorgen | 695 | 70 | 625 | 6 | 1 |
| Handeln | Rechte und Unterstützung | 774 | 30 | 744 | 5 | 1 |
| | **Summe** | **7772** | **676** | **7096** | **49** | **11** |

**Beurteilung:** Die drei Gruppen sind etwa gleich gross (sichtbar 2395 / 2032 / 2140). Die längste Seite ist «Behandlung und Verlauf»; ihre Spezialthemen stehen in der Vertiefung, und Abb. 2 und 3 haben Ansatzpunkte für Angehörige. Kein Nebenthema ist überproportional ausgebaut. Zur Frage der bauenden Sitzung (Visualisierungs-Check Nr. 9), ob «Je nach Rolle» als Textseite trägt: Aus Sicht von W2 ja. Jeder der sechs Abschnitte ist ein eigenständiges Ziel eines Lesepfads und für sich lesbar; die Beziehungsdynamik zeigt der verlinkte Kreis auf `ihre-situation`. Das abschliessende Urteil gehört in den Visualisierungs-Check.

#### W2-C · Verlinkung zwischen den Seiten

Interne Links im Inhalt (ohne Navigation, Fusszeile und `index`):

| Seite | verlinkt auf | wird verlinkt von |
| --- | --- | --- |
| Depression verstehen | `begleiten#ansprechen` | – |
| Behandlung und Verlauf | `rechte-und-angebote#schweigepflicht` | – |
| Ihre Situation | `rechte-und-angebote#schweigepflicht`, `fuer-sich-sorgen` (2×), `fuer-sich-sorgen#eigene-krise`, `begleiten#suizidgedanken` | `je-nach-rolle` |
| Je nach Rolle | `ihre-situation`, `ihre-situation#wechselwirkung`, `begleiten`, `rechte-und-angebote`, `rechte-und-angebote#schweigepflicht` | – |
| Begleiten und Gespräche | `fuer-sich-sorgen`, `fuer-sich-sorgen#grenzen` | `depression-verstehen`, `ihre-situation`, `je-nach-rolle` |
| Für sich sorgen | `rechte-und-angebote#angebote` | `ihre-situation`, `begleiten` |
| Rechte und Unterstützung | – | `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `fuer-sich-sorgen` |

Die Links laufen fast nur «vorwärts» zu Handeln und Rechten. Die beiden Verstehensseiten und «Je nach Rolle» sind nur über `index` und die Navigation erreichbar.

**Vorgeschlagene Verweise** (Ort im Text › Ziel; je ein kurzer Satz oder Linktext, kein neuer Inhalt):

| Nr. | Ort | Anlass im Text | Ziel |
| --- | --- | --- | --- |
| L1 | `je-nach-rolle` › `eltern` | «ob sich das Kind etwas antun könnte» | `begleiten.html#suizidgedanken` (W2-02) |
| L2 | `depression-verstehen` › `was-ist` | «Gedanken an den Tod oder an Suizid» | `begleiten.html#suizidgedanken` (W2-02) |
| L3 | `je-nach-rolle` › `partner` | «Rückzug, Gereiztheit und wenig Lust auf Nähe sind … Zeichen der Krankheit» | `depression-verstehen.html#dahinter` |
| L4 | `ihre-situation` › `wechselwirkung` | Station 1 «Rückzug und Gereiztheit» (Frage der bauenden Sitzung, Visualisierungs-Check Nr. 6) | `depression-verstehen.html#dahinter` |
| L5 | `begleiten` › `ansprechen` | «Ermutigen Sie zu einer Abklärung» | `behandlung-und-verlauf.html#weg` |
| L6 | `depression-verstehen` › `anders` | «Die Hausarztpraxis ist ein guter erster Schritt.» | `behandlung-und-verlauf.html#weg` |
| L7 | `behandlung-und-verlauf` › `behandelbar` | «richtet sich vor allem nach dem Schweregrad» | `depression-verstehen.html#was-ist` |
| L8 | `behandlung-und-verlauf` › `vorbeugen` | Krisenplan: «wie und von wem die Zeichen angesprochen werden dürfen» | `begleiten.html#ansprechen` |
| L9 | `je-nach-rolle` › `erwachsene-kinder` | «Sie dürfen Grenzen setzen» | `fuer-sich-sorgen.html#grenzen` |
| L10 | `rechte-und-angebote` › `angebote` | Einleitung der Angebote | `fuer-sich-sorgen.html#netz` |
| L11 | `rechte-und-angebote` › `schweigepflicht` | nach dem Formulierungsbeispiel | `behandlung-und-verlauf.html#einbezug` |
| L12 | Ende jeder Themenseite | Übergang zur nächsten Seite der Aufbaulogik (ein Satz, wie `depression-verstehen` › `was-ist` › `.puk-longform__transition`) | nächste Seite |

#### W2-D · Begriffsübersicht

Zählung im sichtbaren Text je Seite: idx = Übersicht, dv = Depression verstehen, bv = Behandlung und Verlauf, is = Ihre Situation, ro = Je nach Rolle, bg = Begleiten, fs = Für sich sorgen, ra = Rechte und Unterstützung.

| Begriff | idx | dv | bv | is | ro | bg | fs | ra | Bedeutung und Befund |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bezugsperson | 1 | 0 | 0 | 0 | 1 | 0 | 0 | 4 | **zwei Bedeutungen:** umgangssprachlich auf `index` («Angehörige und nahe Bezugspersonen», Zielgruppe) und `je-nach-rolle` («eine verlässliche Bezugsperson», Schutzfaktor); Rechtsbegriff des PatG ZH auf `ra`, dort in Abb. 1 vor der Erklärung in `vorsorge` → W2-03 |
| Einverständnis / einverstanden | 1 | 0 | 2 | 0 | 1 | 1 | 0 | 0 | dieselbe Sache wie «Einwilligung» und «Zustimmung»; die Kernaussage «auch ohne Einverständnis» führt auf eine Seite, die «Einwilligung» sagt → W2-04 |
| Einwilligung | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | → W2-04 |
| Zustimmung | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | → W2-04 |
| mittelgradig | 0 | 1 | 2 | 0 | 0 | 0 | 0 | 0 | Schweregrad der Diagnose → W2-05 |
| mittelschwer | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | SGB-Zahl (Fragebogen) und Johanniskraut → W2-05 |
| Fachperson | 0 | 2 | 3 | 0 | 0 | 0 | 0 | 3 | einzelne behandelnde Person; einheitlich |
| Behandlungsteam | 1 | 0 | 2 | 0 | 1 | 0 | 0 | 1 | Team; einheitlich neben «Fachperson» |
| Fachleute | 0 | 3 | 1 | 0 | 1 | 1 | 0 | 0 | Fachwelt allgemein («Fachleute sprechen von …»); einheitlich |
| Episode | 0 | 3 | 3 | 0 | 0 | 0 | 0 | 0 | auf beiden Seiten erklärt («Phasen, die Fachleute Episoden nennen»); einheitlich |
| Rückfall | 1 | 0 | 10 | 1 | 0 | 0 | 0 | 0 | einheitlich; «Rezidiv» kommt nicht vor |
| Krisenplan | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | meint einen Plan für frühe Zeichen eines Rückfalls → W2-09 |
| Belastung | 2 | 8 | 0 | 8 | 2 | 0 | 2 | 0 | zwei Bedeutungen, aus dem Zusammenhang klar: Belastung der erkrankten Person (Schwelle, `dv` › `entstehung`) und der Angehörigen (`is`, `fs`); kein Befund |
| Beratungsstelle | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | unbestimmt («eine Beratungsstelle für Angehörige»); die Angebote stehen auf `ra` › `angebote` → Link (W2-01) |
| Hausarztpraxis / Hausärztin | 0 | 2 | 6 | 0 | 0 | 2 | 2 | 0 | einheitlich |
| Ansatzpunkt | 0 | 0 | 5 | 6 | 0 | 0 | 0 | 0 | in den Figuren erklärt; einheitlich |
| Schweigepflicht | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 6 | einheitlich |
| erkrankte Person | 4 | 4 | 7 | 1 | 1 | 2 | 4 | 8 | einheitliche Bezeichnung |
| Suizid / nicht mehr leben | 2 | 2 | 1 | 4 | 0 | 4 | 1 | 0 | `ro` nennt die Sorge ohne das Wort und ohne Link → W2-02 |

**Verwendet, aber nicht erklärt** (für den Quereinstieg): «NVL» und «unipolar» in Bildlegenden (`dv`, `bv`); «Tagesklinik» (`bv` › Abb. 2); «Achtsamkeit» (`fs` › `was-hilft`); «Betreuungsgutschriften», «Hilflosenentschädigung», «IV-Rente» (`ra` › `arbeit-geld`); «VASK» (`ro`, `ra`) → W2-08.

#### W2-E · Redundanzen

| Inhalt | Stellen | Bewertung | Vorschlag |
| --- | --- | --- | --- |
| Beobachtungen mitteilen, auch ohne Einverständnis | `index` › `kurz`; `bv` › Abb. 2 und `einbezug`; `ro` › `eltern`; `ra` › `schweigepflicht` | sinnvoll: Kerngedanke, überall mit Link auf `ra` | – |
| Niemand ist schuld | `index`; `dv` › `entstehung` und Abb. 2; `is` › Abb. 2; `bv` › `verlauf` («kein Versagen») | sinnvoll: Kerngedanke | – |
| Rückzug und Gereiztheit als Zeichen der Krankheit | `dv` › `dahinter` (Abb. 1); `is` › Abb. 2 Station 1; `ro` › `partner`; `bg` › `alltag` | sinnvoll, aber ohne Rückverweis auf die Seite, die es erklärt | L3, L4 (W2-01) |
| Gereiztheit und Übergriffe | `bg` › `alltag` (Liste und Absatz); `fs` › `grenzen` | zwischen den Seiten sinnvoll (`bg` verweist auf `fs`); auf `bg` steht «Gereiztheit» zweimal hintereinander (Liste «Gereiztheit als Teil der Krankheit sehen.» und Absatz «Gereiztheit gehört oft zur Krankheit.») | auf `bg` einmal → S |
| Paartherapie | `is` › Abb. 2 › Vertiefung; `ro` › `partner`; `fs` › `was-hilft`. Der Satz «Gegen die Depression wirkt sie nach bisherigen, noch schwachen Studien ähnlich gut wie eine Einzeltherapie.» steht wörtlich auf `is` und `fs` | unnötig, zudem unterschiedlich stark (W1-11) | ausführen nur auf `fs` › `was-hilft`; auf `is` und `ro` ein Satz mit Link (W2-06) |
| Hausarztpraxis als erster Schritt | `dv` › `anders`; `bv` › `weg`; `bg` › `ansprechen` und `ablehnung` | sinnvoll | Link L5, L6 |
| Fachstelle berät kostenlos | `index` › `einstieg`; `fs` › `eigene-krise`; `ra` › `angebote`; Fusszeile | sinnvoll (Kontakt) | – |
| SGB-Zahl «rund jede zehnte Person» | `index` › `einstieg`; `dv` › `was-ist` | sinnvoll: Startseite fasst zusammen | – |
| Kinderseele, VASK-Gruppe | `ro` › `kinder`, `erwachsene-kinder`; `ra` › `angebote` | sinnvoll: Quereinstieg nach Rolle | – |

#### W2-L · Lücken im Gesamtkonzept (Prüfliste)

| Thema der Prüfliste | Abgedeckt auf | Ergebnis |
| --- | --- | --- |
| Störungsbild verstehen | `depression-verstehen` | erfüllt |
| Diagnose und Verlauf | `depression-verstehen` › `was-ist`; `behandlung-und-verlauf` › `verlauf` | erfüllt |
| Behandlung | `behandlung-und-verlauf` | erfüllt |
| Kommunikation | `begleiten` › `ansprechen`; Formulierungsbeispiele (`.puk-say`) auf fünf Seiten, dazu ein Beispiel in `depression-verstehen` › Abb. 1 | erfüllt |
| Umgang mit Ablehnung von Hilfe | `begleiten` › `ablehnung` | erfüllt |
| eigene Belastung und Grenzen | `ihre-situation`; `fuer-sich-sorgen` | erfüllt |
| Rechte und Schweigepflicht (Schweizer Recht) | `rechte-und-angebote` (ohne fürsorgerische Unterbringung, Entscheid der Fachstelle) | erfüllt |
| Geschwister und Kinder | `je-nach-rolle` › `kinder`, `geschwister`, `erwachsene-kinder` | erfüllt |
| Unterstützungsangebote | `rechte-und-angebote` › `angebote`; `fuer-sich-sorgen` › `netz` | erfüllt |
| Krisenthemen | `begleiten` › `suizidgedanken` mit Zuständigkeitsverweis; keine Krisenseite | keine Lücke (Profil «Zuständigkeit statt Krisenzugang») |

**Mögliche Lücken, gemessen an Ziel und Zielgruppe** (Entscheid der Fachstelle, W2-F-07):

1. **Klinikaufenthalt und Austritt aus Sicht der Angehörigen.** `behandlung-und-verlauf` › Abb. 2 nennt Tagesklinik oder Klinik in einem Satz; was Angehörige während eines Aufenthalts und beim Austritt tun können, steht nirgends.
2. **Angehörige älterer Menschen.** Depression im Alter kommt nur in `depression-verstehen` › `anders` vor; zu den erwachsenen Kindern siehe W1-14.
3. **Arbeit und Einkommen der erkrankten Person.** `rechte-und-angebote` › `arbeit-geld` behandelt nur die Ansprüche der Angehörigen; Fragen zu Krankschreibung, Taggeld oder IV der erkrankten Person sind für viele Familien zentral.

#### W2-F · Fragen an die Fachstelle (Prüfbedarf)

1. **W2-F-01 · Begriff «Bezugsperson»** (W2-03). Soll «Bezugsperson» nur noch als Rechtsbegriff auf `rechte-und-angebote` stehen und dort beim ersten Auftreten (Abb. 1) kurz erklärt werden? Und sollen `index` («nahe Bezugspersonen») und `je-nach-rolle` («eine verlässliche Bezugsperson») ein anderes Wort erhalten, etwa «nahestehende Menschen» bzw. «ein verlässlicher Erwachsener»? Je Ja/Nein.
2. **W2-F-02 · Einverständnis oder Einwilligung** (W2-04). Welcher Begriff gilt auf allen Seiten? Vorschlag: «Einverständnis» im Text, auf `rechte-und-angebote` einmal «Einverständnis (rechtlich: Einwilligung)» und danach einheitlich.
3. **W2-F-03 · Schweregrad** (W2-05). «mittelgradig» für die Diagnose überall; bei der SGB-Zahl «mittelschwere bis schwere Beschwerden (nach einem Fragebogen)» und beim Johanniskraut «mittelgradig» (Ja/Nein)?
4. **W2-F-04 · Paartherapie bündeln** (W2-06). Paartherapie nur auf `fuer-sich-sorgen` › `was-hilft` ausführen; auf `ihre-situation` und `je-nach-rolle` je ein Satz mit Link (Ja/Nein)? Wortlaut gemäss W1-F-17.
5. **W2-F-05 · «Krisenplan»** (W2-09). Soll der Plan für frühe Zeichen anders heissen, etwa «Plan für schwierige Zeiten» oder «Vorsorgeplan», damit er nicht wie ein Krisenzugang klingt und zum Abschnitt «Frühe Zeichen und gemeinsam vorbeugen» passt?
6. **W2-F-06 · Kernsatz zur Selbstsorge** (W2-11). Soll `index` › `kurz` einen sechsten Kernsatz zu «Für sich sorgen» erhalten, etwa «Sie dürfen auf sich achten und sich Unterstützung holen (Für sich sorgen)»?
7. **W2-F-07 · Mögliche Lücken** (W2-10). Braucht die Website (a) einen Abschnitt zu Klinikaufenthalt und Austritt, (b) mehr zu Angehörigen älterer Menschen, (c) Hinweise zu Arbeit und Einkommen der erkrankten Person? Je Ja/Nein; bei Ja Ort (Seite, Abschnitt).
8. **W2-F-08 · Verweise** (W2-01, W2-02). Keine fachliche Frage: Struktur und Verweise darf die bauende Sitzung entscheiden. Die Fachstelle wird nur informiert, dass L1 bis L12 eingefügt werden.

#### W2-H · Befunde W2

Schwere: **wichtig** = vor S umsetzen; **optional** = Verbesserung. Quelle aller Befunde: Prüfung 1. W1-Befunde werden nicht wiederholt.

- **W2-01 · wichtig · Verlinkung trägt die Aufbaulogik nicht.**
  - **Beleg:** W2-C. `depression-verstehen`, `behandlung-und-verlauf` und `je-nach-rolle` erhalten von keiner Themenseite einen Link; `rechte-und-angebote` verlinkt keine Seite; `depression-verstehen`, `behandlung-und-verlauf` und `begleiten` verlinken je nur eine andere Seite. Spätere Seiten nehmen Inhalte der Verstehensseiten auf (Rückzug, Hausarztpraxis, Schweregrad), ohne zurückzuverweisen; keine Seite führt am Ende zur nächsten.
  - **Vorschlag:** Verweise L3 bis L12 aus W2-C.
  - **Zuständig:** bauende Sitzung (Struktur).
- **W2-02 · wichtig · Sorge um Suizid ohne Weg zur Anleitung.**
  - **Beleg:** `je-nach-rolle` › `eltern`: «Die grösste Sorge gilt oft der Frage, ob sich das Kind etwas antun könnte.» – kein Link auf `begleiten.html#suizidgedanken`, obwohl Eltern hier über den Lesepfad einsteigen. `ihre-situation` › `angst` macht es richtig («Was Sie tun können, wenn Sie befürchten, … steht unter …»). Ebenso ohne Link: `depression-verstehen` › `was-ist` «Gedanken an den Tod oder an Suizid».
  - **Vorschlag:** L1 und L2, jeweils ein Satz wie auf `ihre-situation` › `angst`.
  - **Zuständig:** bauende Sitzung.
- **W2-03 · wichtig · «Bezugsperson» mit zwei Bedeutungen; Rechtsbegriff vor der Erklärung.**
  - **Beleg:** `index` › `einstieg`: «Angehörige und nahe Bezugspersonen»; `je-nach-rolle` › `kinder`: «eine verlässliche Bezugsperson»; `rechte-und-angebote` › Abb. 1: «im Kanton Zürich an Bezugspersonen möglich», erklärt erst in `vorsorge`. Eine Freundin, die sich als «nahe Bezugsperson» angesprochen fühlt, kann daraus ein Auskunftsrecht ableiten, das nach PatG ZH nur Bezugspersonen im Rechtssinn haben.
  - **Zuständig:** Fachstelle (W2-F-01), danach bauende Sitzung; gemeinsam mit W1-01 lösen.
- **W2-04 · optional · Einverständnis, Einwilligung, Zustimmung.**
  - **Beleg:** W2-D; `index` › `kurz` «auch ohne Einverständnis» verlinkt auf `rechte-und-angebote`, wo die Spalten «Ohne Einwilligung» und «Mit Einwilligung» heissen und der Kurztext «Zustimmung» sagt.
  - **Zuständig:** Fachstelle (W2-F-02).
- **W2-05 · optional · «mittelgradig» und «mittelschwer».**
  - **Beleg:** `depression-verstehen` › `was-ist`: «leichte, mittelgradige und schwere Depressionen» und zwei Absätze später «mittelschwere bis schwere depressive Beschwerden»; `behandlung-und-verlauf` › `behandelbar` «Mittelgradige Depression», Vertiefung Abb. 1 «leichter bis mittelschwerer Depression».
  - **Zuständig:** Fachstelle (W2-F-03).
- **W2-06 · optional · Paartherapie dreimal, zweimal mit gleichem Satz.**
  - **Beleg:** W2-E; gleicher Satz auf `ihre-situation` › Abb. 2 › Vertiefung und `fuer-sich-sorgen` › `was-hilft`; dritte Erwähnung ohne Quelle auf `je-nach-rolle` › `partner`.
  - **Zuständig:** Fachstelle (W2-F-04), danach bauende Sitzung.
- **W2-07 · optional · Begriffsübersicht pflegen.**
  - **Beleg:** Die Leitlinie verlangt eine Begriffsübersicht, sobald mehrere Seiten dieselben Begriffe einführen. Es gab keine; W2-D ist ein Anfang.
  - **Vorschlag:** W2-D nach den Entscheiden W2-F-01 bis W2-F-03 nachführen und bei jeder Textänderung (S) prüfen.
  - **Zuständig:** bauende Sitzung.
- **W2-08 · optional · Begriffe ohne Erklärung beim Quereinstieg.**
  - **Beleg:** W2-D, letzte Zeile: «NVL», «unipolar», «Tagesklinik», «Achtsamkeit», «Betreuungsgutschriften», «Hilflosenentschädigung», «IV-Rente», «VASK».
  - **Zuständig:** S (Sprach-Review), Abkürzungen in Legenden ausschreiben.
- **W2-09 · optional · «Krisenplan» für einen Plan bei frühen Zeichen.**
  - **Beleg:** `behandlung-und-verlauf` › `vorbeugen`: Zwischenüberschrift «Einen Krisenplan vereinbaren» im Abschnitt «Frühe Zeichen und gemeinsam vorbeugen»; Inhalt: «was bei einem Rückfall gelten soll». Das Profil vermeidet Krisenzugang; der Begriff steht sonst nirgends.
  - **Zuständig:** Fachstelle (W2-F-05).
- **W2-10 · optional · Mögliche Lücken.**
  - **Beleg:** W2-L, «Mögliche Lücken» 1 bis 3.
  - **Zuständig:** Fachstelle (W2-F-07).
- **W2-11 · optional · Selbstsorge fehlt unter den Kernsätzen der Übersicht.**
  - **Beleg:** `index` › `kurz`: fünf Kernsätze zu Krankheit, Schuld, Belastung, Begleiten und Rechten; «Für sich sorgen» ist nur über den Lesepfad «Mir wird es zu viel.» und die Kapitelliste erreichbar.
  - **Zuständig:** Fachstelle (W2-F-06).

#### Zählung der Befunde W2

| Schwere | Anzahl | Befunde |
| --- | --- | --- |
| wichtig | 3 | W2-01, W2-02, W2-03 |
| optional | 8 | W2-04 bis W2-11 |
| Fragen an die Fachstelle | 8 | W2-F-01 bis W2-F-08 (W2-F-08 nur zur Information) |

#### Vor S umzusetzen (Strukturänderungen)

1. Verweise L1 bis L12 einfügen (W2-01, W2-02) – bauende Sitzung, ohne fachlichen Entscheid.
2. Begriffe nach W2-F-01 bis W2-F-03 vereinheitlichen und W2-D nachführen (W2-03 bis W2-05, W2-07).
3. Paartherapie nach W2-F-04 bündeln (W2-06).
4. Allfällige neue Abschnitte nach W2-F-06 und W2-F-07 (W2-10, W2-11).
5. Die W1-Befunde, die Text auf mehreren Seiten ändern (W1-01, W1-02, W1-11, W1-12), mit diesen Änderungen zusammen umsetzen, damit S nur feststehenden Text prüft.

### S Sprach-Review

### Bedienung und Barrierefreiheit

### W3 Code-Review

## Pre-Release-Audits

Aufträge und Prüfpunkte: Abschnitt «Pre-Release-Audits» (`guidelines/00-pre-release-audits.md`). Erst nach W3; R3 unmittelbar vor der Veröffentlichung. R3 steht nur bei «Go» auf «erledigt».

### R1 Profil-Audit

### R2 Visualisierung und Laienverständlichkeit

### R3 Freigabe-Audit
