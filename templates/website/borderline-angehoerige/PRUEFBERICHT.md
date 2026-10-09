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

**Stand 09.10.2026 · Korrektur Etappe 1c · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1C.md`, K-1 bis K-10, auf `verstehen`, `beziehungen` und `grenzen`. `index` ist unverändert. Nichts ist gekürzt; der Richtwert gilt für diese Korrektur nicht (Abschnitt 1). Die Prüfstufen bleiben offen. Diese Selbstprüfung ersetzt die der Korrektur 1b und ist nicht die Stufe «Visualisierungs-Check».

**Gates und Skripte:**

- `node tools/build.mjs`: 15 Seiten, 0 blockierend, 22 Hinweise (8 Visualisierungen und 12 Platzhalter nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen).
- `node tools/gate.mjs --selftest`: 50/50 bestanden.
- `node tools/gate.mjs --production`: blockiert erwartungsgemäss mit 21 Befunden (8 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`).
- `node abgleich/pruefe-abgleich.mjs`: **1739 Zeilen, 0 ohne Fundstelle** (vorher 1672; neu sind die 67 Zeilen aus `verstehen.md` Z. 277–396). Ob die genannte Fassung die Aussage trägt, prüft das Skript nicht; das bleibt Aufgabe von W1.
- `node abgleich/kennzahlen.mjs` und `node abgleich/bedienung.mjs`: Werte unten.

### Korrekturauftrag 1c: Stand je Punkt

| ID | Stand | Wie | Beleg |
| --- | --- | --- | --- |
| K-1 | umgesetzt | Link mit Linktext «Opferhilfe Schweiz», ohne Nummer, ohne `target`. Adresse nach dem Auftrag nicht erneut aufgerufen. Das Gate erlaubt externe Links in `a href`; es blockiert nur externe Laufzeitquellen und `target="_blank"` ohne `rel` (`tools/contract.js`). | `grenzen` › `gewalt`, Schritt 4: «Opferhilfe und Beratung dazunehmen: Opferhilfe Schweiz. Unterstützung gibt es auch für Männer, Angehörige und Vertrauenspersonen.» Link `https://www.opferhilfe-schweiz.ch/de/`. Adresse geprüft durch Prüfung 1, 09.10.2026. `abgleich/grenzen.md`, Nr. 288, 289 |
| K-2 | umgesetzt | Bestandssatz wörtlich nach dem Satz zu Therapeutinnen und Therapeuten | `beziehungen` › `verantwortung`: «… noch allein für den Verlauf oder die Beziehung verantwortlich. Die Beziehung wird nicht durch eine «perfekte» Reaktion der Angehörigen repariert.» `abgleich/beziehungen.md`, Nr. 210 |
| K-3 | umgesetzt | «Mögliche» in allen acht Zellen und in der Textfassung; Planzeile `v-bz-sichten` nachgeführt | Abbildung 2 `beziehungen`: «Mögliche Sicht der betroffenen Person», «Mögliche Sicht der Schwester»; Textfassung «Vier Schritte aus Abbildung 1, je mit der möglichen Sicht der betroffenen Person und der möglichen Sicht der Schwester.» |
| K-4 | umgesetzt | Wortlaut des Auftrags | `beziehungen` › `verantwortung`: «Trennen Sie: Was könnte die Person innerlich erleben, was tut sie tatsächlich, wie wirkt das auf andere, und was braucht es für Verantwortung und Schutz?» `abgleich/beziehungen.md`, Nr. 200–203 |
| K-5 | umgesetzt | Bestandssatz wörtlich vor «Möglich ist eine Dissoziation …» | `beziehungen` › `verstaerker`, Station 4: «Verstummen, Unwirklichkeitsgefühle oder abweichende Erinnerungen können viele Gründe haben. Möglich ist eine Dissoziation …» `abgleich/beziehungen.md`, Nr. 131 |
| K-6 | umgesetzt | <ul><li>Ursache: Die Messung zu 1b lief vor dem Laden der Webschriften; mit Schrift ist Station 5 höher, der Pfad endete im Kasten.</li><li>Station 3 und 4 sitzen breit am unteren Rand ihrer Rasterzeile (`align-self:end`). Dadurch liegen zwischen Station 4 und 5 rund 47 px.</li><li>Pfade nachgesetzt: 2 → 3 `M333 262 L 333 293`, 3 → 4 auf der Mitte der unteren Kästen (y = 350), 4 → 5 `M67 296 L 67 277.8`, Anfang von 5 → 1 bei y = 124 (vorher 1,8 px am Kasten).</li><li>`abgleich/bedienung.mjs` misst alle fünf Pfeile.</li></ul> | Tabelle «Pfeile» unten; `content/beziehungen.html`, `borderline.css` |
| K-7 | umgesetzt | <ul><li>Neue Zeichnung 640 × 330, Aufhängepunkt (320, 16).</li><li>Langer Bogen: Kreis um den Aufhängepunkt, Radius 250, ±36°; die ausgelenkten Pendelkörper an seinen Enden (x = 173,1 und 466,9, y = 218,3), die Ruhelage unten (320, 266). «Sehr positive Bewertung» und «Sehr negative Bewertung» stehen aussen neben diesen Pendelkörpern.</li><li>Kurzer Bogen: Kreis um den Aufhängepunkt, Radius 150, ±15°, dünne Linie, an den Enden kleine Marken (r = 4).</li><li>Keine Pfeilspitzen. Die Beschriftungen auf dem senkrechten Stab tragen den Grund der Figur.</li><li>Schmal dieselbe Zeichnung; die Beschriftungen im Bild entfallen wie bisher (R3-V-03, hingenommen).</li><li>Textfassung um einen Satz zu den Lagen ergänzt; Planzeile `v-vs-bewertungen` ohne «kein Mittelwert» und ohne Pfeile.</li></ul> | Abbildung 3 `verstehen`; Bildschirmfotos bei 1440, 1280, 768, 600 und 360 px: keine Beschriftung ragt hinaus, keine überlappt eine andere; Theme «kontrast» lesbar |
| K-8 | umgesetzt | <ul><li>Anspannung, Annahmen, Zwei Sichten (Erklärtext 21 px): Überschriften `--web-size-h4` (21 px) in `--fw-medium`; «Was hilft» (`dt`), sein Text (`dd`) und der Ansatzpunkt in `--web-size-body` (21 px), Bezeichnungen in `--fw-medium`; Bezeichnung der Sicht 21 px in `--fw-regular`.</li><li>Schleife und Ansatzpunkt-Kasten (Erklärtext 15 px): Bezeichnung «Ansatzpunkt» von 13 auf 15 px (`type-body-sm`, `--fw-medium`).</li><li>Nur Profil-Tokens. Einen Token für Fett gibt es nicht; `--fw-medium` (500) ist das stärkste Gewicht im Profil.</li></ul> | Gemessen in Chromium bei 1280 px, Anspannung und Zwei Sichten auch bei 360 px mit denselben Werten (berechnete Schrift): Anspannung `h3` 21/500, `dt` 21/500, `dd` 21/300, Ansatzpunkt 21/300 mit Bezeichnung 21/500; Annahmen `h3` 21/500 neben Erklärtext 21/300; Zwei Sichten `h3` 21/500, Bezeichnung 21/400, Zitat 21/300; Schleife «Ansatzpunkt» 15/500 neben Erklärtext 15/400 |
| K-9 | umgesetzt | beide `2px` durch `var(--border-width-strong)` ersetzt | `grep -c 2px borderline.css`: 0 |
| K-10 | umgesetzt | <ul><li>`kennzahlen.mjs` liegt seit `242a74b` im Repository (`git ls-tree 242a74b abgleich/`), unverändert.</li><li>`bedienung.mjs` misst nach `load` und `document.fonts.ready`; Seitenhöhen neu gemessen (unten).</li><li>`verstehen.md` Z. 277–396 als Nr. 474–540 angehängt, je Satz mit Status.</li><li>Die 7 Stichprobenzeilen berichtigt (unten).</li><li>`visualPlan`: `v-vs-einordnung`, `v-gr-reihenfolge`, `v-gr-kontakt`, `v-vs-bewertungen`, dazu `v-bz-sichten` (K-3).</li><li>Abgleich für K-1 bis K-5 nachgeführt, Prüfbedarf je Seite und `abgleich/README.md` auf Stand 1c.</li></ul> | `node abgleich/pruefe-abgleich.mjs`: 1739 Zeilen, 0 ohne Fundstelle; `abgleich/README.md`, Abschnitt «Korrektur Etappe 1c» |

**Stichprobenzeilen (Belege 09.10.2026c, Abschnitt 4):**

| Zeile | vorher | jetzt |
| --- | --- | --- |
| bez. 86 | entfällt | zusammengeführt, `beziehungen#schleife`: Station 2 und Ansatzpunkt («das Gefühl anerkennen, nach der Deutung fragen»); das Beispiel «dein Schweigen» entfällt (Korrektur V-1) |
| bez. 179 | übernommen | gekürzt; «das nicht hält» entfällt |
| gr. 397 | zusammengeführt | gekürzt; der zweite Satzteil «und keinen Kontakt versprechen, der für Sie nicht sicher oder tragbar ist» entfällt, so benannt |
| gr. 629 | zusammengeführt | zusammengeführt; Bemerkung nennt, dass «schreibt weder ein Gespräch noch eine spätere Rückkehr vor» sinngemäss in `saetze` steht |
| gr. 636 | entfällt (Bemerkung aus Nr. 635 kopiert) | zusammengeführt, `grenzen#konsequenz`: «Für die Reaktion des Gegenübers sind Sie nicht verantwortlich.» |
| vs. 274 | Bemerkung «Alarm-Modus, Kurztext» | Bemerkung «Abbildung 2, Kurztext» |
| vs. 365 | Fassung: Kernaussage | Fassung: Abschnittstext «Bei hoher Anspannung kann es schwerer werden, positive und schwierige Seiten eines Menschen zugleich zu sehen.» |

### Pfeile der Bedeutungsschleife (K-6)

Skript `node abgleich/bedienung.mjs`, Chromium, nach `load` und `document.fonts.ready`. Gemessen in Einheiten der Zeichnung und in CSS-Pixel umgerechnet (Faktor Breite der Zeichnung / 400). Pfeilspitze = Ende des Pfads plus Überstand der Markerspitze ((10 − refX) / 10 × `markerWidth` × Strichstärke). Erster Wert: Abstand der Spitze zum Rand des Zielkastens; zweiter Wert: Abstand des Pfadanfangs zum Ausgangskasten. Positiv heisst ausserhalb des Kastens.

| Fensterbreite | 1 → 2 | 2 → 3 | 3 → 4 | 4 → 5 | 5 → 1 |
| ---: | --- | --- | --- | --- | --- |
| 1440 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |
| 1280 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |
| 768 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |
| 720 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |

- **Gleiche Werte in allen Breiten:** Die Kreisanordnung ist dort immer 600 px breit. Unter 660 px Containerbreite gilt die Liste ohne Pfeile im Bild.
- **Vergleich mit `242a74b`** (gleiches Skript): 4 → 5 −11,4 px (Spitze im Kasten von Station 5, R3-V-01 bestätigt), 2 → 3 0,4 px mit Anfang −7,5 px im Kasten von Station 2, Anfang von 5 → 1 1,8 px.

### Seitenhöhen und Tabstopps (K-10, R3-K-01)

Skript `node abgleich/bedienung.mjs`, Chromium. Seitenhöhe: `document.documentElement.scrollHeight` bei 360 × 800 px, nach `load` und `document.fonts.ready`. Tabstopps bei 1280 × 900 px, ab Seitenanfang, ohne Fusszeile.

| Seite | Tabstopps | Seitenhöhe bei 360 px | höchste Figur bei 360 px |
| --- | ---: | ---: | --- |
| `index` | 10 | 3839 px | – |
| `verstehen` | 19 | 16 218 px | Annahmen 3769 px |
| `beziehungen` | 15 | 12 868 px | Zwei Sichten 2437 px |
| `grenzen` | 21 | 16 521 px | DEAR 1846 px |

- **Abweichung in 1b erklärt:** Am Stand `242a74b` ergibt das Skript jetzt 3839 / 15 593 / 12 342 / 16 521 px, wie die dritte Prüfrunde. Die Werte der Selbstprüfung 1b waren vor dem Laden der Webschriften gemessen.
- **Zunahme seit 1b:** auf `verstehen` und `beziehungen` durch K-8 (Seitenschrift in den Figuren), dazu auf `beziehungen` die Sätze aus K-2 bis K-5 und auf `verstehen` der Satz in der Textfassung des Pendels (K-7).
- **Tabstopps:** Der 21. Tabstopp auf `grenzen` ist der Link «Opferhilfe Schweiz». Alle Tabstopps haben einen sichtbaren Fokus; der erste ist «Zum Hauptinhalt».

**Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5:**

- **Überlauf:** keiner bei 320, 360, 768, 1280 und 1440 px auf den vier Seiten.
- **Kontrast nach WCAG 1.4.3:** für allen sichtbaren Text in `main` gemessen, Vertiefungen geöffnet; kein Wert unter AA.
- **Beschriftungen im Bild:** alle innerhalb der Zeichnung und in 15 px (`type-body-sm`). Pendel unter 560 px ohne Beschriftungen im Bild. Brücke bei 320 und 360 px mit allen fünf Beschriftungen.
- **Reduzierte Bewegung:** Ohne Bedienung läuft keine Animation. Nach Enter auf einer Vertiefung laufen Übergänge von 0,01 ms.
- **Theme «kontrast»:** alle 8 Figuren gerendert; in SVG keine festen Farbattribute.
- **Nicht geprüft:** Screenreader, Hardwaretastatur und Touch (Stufe 5, Person).

### Kennzahlen (Skript `abgleich/kennzahlen.mjs`)

Gemessen an der alten Seite allein, mit derselben Zählweise für alt und neu (`abgleich/README.md`). Der Richtwert gilt für Korrektur 1c nicht; die Wortzahlen werden nur berichtet.

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 238 | 55 % | – | – | 1,85 → 1,68 | 1 → 0 |
| `verstehen` | 2524 | 1379 | 55 % | 1300 | 1365 | 2,54 → 2,54 | 12 → 0 |
| `beziehungen` | 2149 | 1198 | 56 % | 1100 | 1155 | 3,82 → 3,76 | 6 → 1 |
| `grenzen` | 2985 | 1574 | 53 % | 1500 | 1575 | 2,41 → 2,03 | 4 → 0 |

- **Zuwachs gegenüber 1b** (1362 / 1155 / 1572): `verstehen` +17 (Textfassung des Pendels, K-7), `beziehungen` +43 (K-2 bis K-5), `grenzen` +2 (Linktext, K-1). Damit liegen `verstehen` und `beziehungen` über Richtwert plus 5 %.
- **Absicherungen auf `beziehungen`:** 2,86 → 3,76. Zehn der zwölf neuen Absicherungen sind «Mögliche Sicht» und «möglichen Sicht» aus K-3.

## Visualisierungs-Check

Selbstprüfung als Matrix je Figur (Vorlage im Starter). E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Belege und Gründe für T und N stehen unter der Matrix. Ausgangspunkt ist die Matrix der dritten Prüfrunde. Wo Korrektur 1c den Grund für ein T behebt, steht E mit Beleg; wo der Grund bleibt, steht weiter T.

| Nr. | Prüfpunkt | `v-vs-eisberg` | `v-vs-anspannung` | `v-vs-bewertungen` | `v-vs-mythen` | `v-bz-schleife` | `v-bz-sichten` | `v-gr-bruecke` | `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | T | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | T | E | T | E | E | E | E |
| 4 | Kernaussage und Erklärtext (2–4 Sätze) | E | E | E | E | E | E | E | E |
| 5 | Ansatzpunkt (B, C, G) | – | E | – | – | E | – | – | E |
| 6 | Mechanismus nicht doppelt, sondern verbunden | E | E | E | E | T | E | E | E |
| 7 | Kartenraster-Check | E | E | E | T | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | T | E | T | E | T | E | T |
| 9 | Verteilt, keine Textwand | E | E | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | T | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | T | T | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N |

**Belege je Punkt**

- **1:** `site.config.json` › `visualPlan` ist nachgeführt: `v-vs-einordnung` ohne Merksatz, `v-gr-reihenfolge` mit den vier Feldern des Rasters statt «samt Belastung als Kriterium», `v-gr-kontakt` mit «Beziehungserhalt ist kein verpflichtendes Ziel.» statt «keine Möglichkeit ist Pflicht oder Ziel», `v-vs-bewertungen` nach K-7 ohne «kein Mittelwert», `v-bz-sichten` mit «Mögliche Sicht …» (R3-K-05). Kein Gate-Hinweis `plan-coverage` oder `visual-plan`.
- **2, T bei Schleife:** Die Planzeile `v-bz-was-hilft` begründet Text mit «keine Beziehung untereinander»; der Abschnitt nennt keine Stationen (F-W2-02, Fachstelle).
- **3:**
  - **Pendel:** kurzer und langer Bogen um denselben Aufhängepunkt, die Lagen an den Enden des langen Bogens (K-7).
  - **T bei Anspannung:** Kurztext «Die Bereiche gehen ineinander über»; gezeigt sind drei gleich breite Felder mit drei Linienstärken (P-6, Profil).
  - **T bei Annahmen:** weiterhin eine Reihe von Kästen (F-V-11, Fachstelle).
- **4:** unverändert seit 1b. Beispiele: Eisberg «… Aus einem beobachtbaren Verhalten lässt sich kein bestimmtes Gefühl, Bedürfnis oder Motiv ablesen.»; Zwei Sichten «In jedem Schritt versuchen beide etwas Verständliches – und verfehlen sich trotzdem.»
- **5:**
  - **Anspannung:** «Senken Sie Ihr eigenes Tempo, achten Sie auf Ihre eigene Anspannung und bieten Sie eine Pause an.», jetzt in Seitenschrift wie der Erklärtext (K-8).
  - **Schleife:** bei Station 5, «Statt sich weiter zu verteidigen, können Sie das Gefühl anerkennen …»; Bezeichnung «Ansatzpunkt» in 15 px wie der Erklärtext (K-8).
  - **DEAR:** «entfällt: Der ganze Ablauf beschreibt das eigene Handeln der Angehörigen.»
- **6, T bei Schleife:** wie Punkt 2.
- **7, 9, T bei Annahmen:** sieben gleich gebaute Kästen; bei 360 px ist die Figur 3769 px hoch (Überschriften seit K-8 in 21 px).
- **8:**
  - **Pendel:** Die Pendelkörper sitzen an den Enden des langen Bogens, die Marken an den Enden des kurzen; Länge und Linienstärke der Bögen tragen den Unterschied (K-7, R3-V-02 behoben).
  - **Schleife:** Alle fünf Pfeilspitzen enden 7,5 bis 15,3 px vor dem Zielkasten (Tabelle oben, R3-V-01 behoben).
  - **T bei Anspannung und DEAR:** Linienstärke und Punkte (P-6, Profil). **T bei Annahmen:** nur Grösse und Kasten (F-V-11). **T bei Zwei Sichten:** Die Linienart unterscheidet die Sichten, hat im Profil aber keine feste Bedeutung (P-7).
- **10:**
  - **Zwei Sichten:** «Mögliche Sicht der betroffenen Person» und «Mögliche Sicht der Schwester» (K-3); die Absicherung über die betroffene Person ist zurück.
  - **Schleife:** «Ein mögliches Erklärungsmodell, keine sichere Aussage …»; Station 4 mit «Verstummen, Unwirklichkeitsgefühle oder abweichende Erinnerungen können viele Gründe haben.» vor der Dissoziation (K-5).
  - **T bei Anspannung:** wie Punkt 3.
- **11:** «Bei Gefahr hat Schutz Vorrang.» steht im Abschnittstext von `anspannung`. Kein Skript; die Hauptaussagen stehen ausserhalb der Vertiefungen.
- **12:**
  - Jede Figur hat eine Textfassung über `aria-describedby`; die des Pendels nennt jetzt auch die Lagen an den Enden des langen Bogens.
  - **T bei Pendel:** Unter 560 px sind die Bögen im Bild unbeschriftet; der Unterschied steht im Kurztext (R3-V-03, laut Korrektur 1c, Abschnitt 3 hingenommen).
  - **T bei Anspannung:** Schmal stehen die Enden der Achse waagrecht über der senkrechten Liste (F-V-08).
- **13:** Bildschirmfotos aller 8 Figuren mit `data-theme="kontrast"`; in SVG nur Token-Klassen.
- **14:** `approvalStatus` steht bei allen Figuren auf «ausstehend».

**Nicht erfüllt oder offen (Selbstprüfung):**

- **Punkt 14:** keine Figur ist fachlich freigegeben.
- **Teilweise erfüllt:**

  | Punkt | Figuren |
  | --- | --- |
  | 2 | Schleife |
  | 3 | Anspannung, Annahmen |
  | 6 | Schleife |
  | 7 | Annahmen |
  | 8 | Anspannung, Annahmen, Zwei Sichten, DEAR |
  | 9 | Annahmen |
  | 10 | Anspannung |
  | 12 | Anspannung, Pendel |

  Die Gründe liegen bei Profilthemen (P-6, P-7), bei Entscheiden der Fachstelle (F-V-11, F-W2-02, F-V-08) oder sind laut Korrektur 1c hingenommen (R3-V-03).
- **Umfang:** `verstehen` (1379) und `beziehungen` (1198) liegen über Richtwert plus 5 %; laut Korrektur 1c entscheidet die Fachstelle über die Länge.
- **Achsentitel der Anspannung:** «Anspannung im Gespräch – bei einer oder beiden Personen» steht weiter in 15 px über der Achse. Er ist Beschriftung der Achse, keine Überschrift eines Erklärtexts; deshalb nicht unter K-8 geändert.
- **Offen für die Fachstelle (Korrektur 1c, Abschnitt 3):**
  - R3-W1-05 (Kürzungen an Aussagen für Angehörige), R3-W1-06 (Anspannung: professionelle Hilfe)
  - F-V-11, F-V-05, F-W1-11, F-W2-02, F-W2-03
  - Prüfbedarf in `abgleich/*.md`
  - alle fachlichen Freigaben
- **Profil (später):** P-6, P-7, P-9.
- **Offen für Stufe 5:** Screenreader-Läufe, Hardwaretastatur und Touch.


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
