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

**Stand 09.10.2026 · Korrektur Etappe 1d · bauende Sitzung (Claude Code).** Umgesetzt sind `KORREKTUR-ETAPPE-1D.md`, D-1 bis D-4, auf `verstehen`, `beziehungen` und `grenzen` sowie das Profil-Update `update-2026-10-09b`. Auf `index` hat sich nur die Fusszeile geändert. Gekürzt wurde nichts; der Richtwert gilt nicht (Abschnitt 4). Die Prüfstufen bleiben offen. Diese Selbstprüfung ersetzt die der Korrektur 1c und ist nicht die Stufe «Visualisierungs-Check».

**Gates und Skripte:**

- `node tools/build.mjs`: 15 Seiten, 0 blockierend, 22 Hinweise (8 Visualisierungen und 12 Platzhalter nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen).
- `node tools/gate.mjs --selftest`: 50/50 bestanden, auf der Website und im Starter auf `main`.
- `node tools/gate.mjs --production`: blockiert erwartungsgemäss mit 21 Befunden (8 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`).
- `node abgleich/pruefe-abgleich.mjs`: **1739 Zeilen, 0 ohne Fundstelle.** Ob die genannte Fassung die Aussage trägt, prüft das Skript nicht; das bleibt Aufgabe von W1.
- `node abgleich/kennzahlen.mjs` und `node abgleich/bedienung.mjs`: Werte unten.

### Profil-Update 2026-10-09b

| Schritt | Stand | Beleg |
| --- | --- | --- |
| Patch auf `main` | angewendet, ausser 11 Dateien `components/Vis*/preview.html`: Diese Dateien gibt es im Repository nicht, auch nicht in der Historie | Commit `2c47478` auf `main`, Patch-Datei dort gelöscht. Starter: Selbsttest 50/50, Build ohne weitere Änderung (`git apply -R --check` passt auf den gebauten Stand) |
| Uploads im Stamm | `KORREKTUR-ETAPPE-1D.md` aus dem Stamm gelöscht, liegt im Website-Ordner | Commit `6c4acf2` auf `main` |
| Zusammenführen | `main` in `borderline-umbau`, ohne Konflikt | Merge-Commit `abe98ff` |
| Kopie des Starters | Die vier Dateien in `tools/selftest/` der Website waren identisch mit dem Starter und sind wie dort nachgeführt (Legenden mit `puk-sr`, neuer Zuständigkeitsverweis). `tools/*.mjs`, `contract.js`, `starter.css` und `_headers` sind unverändert gleich wie im Starter. | Selbsttest der Website 50/50 |

### Korrekturauftrag 1d: Stand je Punkt

| ID | Stand | Wie | Beleg |
| --- | --- | --- | --- |
| D-1 | umgesetzt | `site.config.json` › `responsibility.text` im Wortlaut des Auftrags, `reviewedAt` «09.10.2026»; `inline` unverändert; neu gebaut | Fusszeile aller 15 Seiten: «Die Fachstelle Angehörigenarbeit der PUK berät Angehörige kostenlos und vertraulich: angehoerigenarbeit@pukzh.ch. Sorgen Sie sich akut um das Leben oder die Sicherheit eines Menschen, holen Sie sofort Hilfe: ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei.» (`grep -c` auf den gebauten Seiten: 15). Abgleich `index` Nr. 37, 247 |
| D-2 | umgesetzt | <ul><li>Die 8 Absätze, auf die `aria-describedby` zeigt, tragen `class="puk-sr"`: `vs-eisberg-text`, `vs-anspannung-text`, `vs-bewertungen-text`, `vs-mythen-text`, `bz-schleife-text`, `bz-sichten-text`, `gr-bruecke-text`, `gr-dear-text`.</li><li>Sichtbar bleiben in der Legende Kennzeichnung und Quelle. Die «Leserichtung» der Schleife bleibt sichtbar.</li><li>Das Gate liest die Kurzbeschreibung weiter als Textalternative (mindestens 40 Zeichen); 0 blockierend.</li></ul> | Skript bei 1440 und 360 px (nach `document.fonts.ready`): Alle 8 Kurzbeschreibungen tragen `puk-sr` und sind 1 × 1 px gross; sichtbar bleiben Kennzeichnung und Quelle (Bildschirmfotos von Abbildung 2 angesehen) |
| D-2, Durchsicht | erledigt, nichts weiter entfernt | Weiterer sichtbarer Text, der nur die Zeichnung beschreibt, steht in keiner Figur. Geblieben sind Zuordnungen von Liste und Zeichnung, wie die Leserichtung: «Links: / Mitte: / Rechts:» in der Pendel-Liste, «Fahrbahn · Verbindung», «Geländer · Grenzen», «Pfeiler · was trägt» bei der Brücke, die Nummern der Anspannungskurve. | Abbildung 3 `verstehen`, Abbildung 1 `grenzen`, Abbildung 2 `verstehen` |
| D-3 | umgesetzt | <ul><li>Titel, Kernaussage, Kurztext, die vier Stellen mit Liste, Ansatzpunkt, «Was hilft», Beispielen und die drei Sätze der Vertiefung im Wortlaut des Auftrags.</li><li>Zeichnung: eine Kurve `puk-vis-ln` (2 px) über 640 × 280, links tief, Scheitel, rechts sinkend; keine Skala, keine Achse, keine Füllfläche.</li><li>Nummern als HTML-Marken auf der Kurve wie in Muster G; Stelle 2 mit doppeltem Ring (`outline` über `--border-width-strong`), auch in der Liste.</li><li>Kurze Beschriftungen als HTML-Text in `type-body-sm`; unter 560 px entfallen nur sie, Kurve und Nummern bleiben.</li><li>Liste in Seitenschrift, `h3` in `--web-size-h4`, «Was hilft» und Ansatzpunkt in `--web-size-body` (wie 1c, K-8).</li><li>Vertiefung «Grenzen des Bildes» mit den drei Sätzen des Auftrags und, ohne Fachbegriffe, «Gefahr lässt sich aus der Stelle auf der Kurve nicht ableiten.» und «Die Kurve zeigt kein «Borderline-Gehirn», und solche Verläufe sind nicht auf Borderline beschränkt.»</li><li>Legende «Eigene didaktische Darstellung nach dem Handout «Die Anspannungskurve»», Bezugspunkte wie bisher, Kurzbeschreibung als `p.puk-sr`.</li><li>`visualPlan` › `v-vs-anspannung`: Format «figure», Aussage, «Was wird besser verstanden?» (wann Reden hilft und wann eine Pause besser ist), `entryPoint` Stelle 2.</li><li>CSS des früheren Kontinuums aus `borderline.css` entfernt.</li></ul> | <ul><li>Bildschirmfotos angesehen bei 1280 und 360 px, dazu 1440, 768, 600 und 320 px und im Theme «kontrast».</li><li>Skript: keine Beschriftung und keine Nummer ragt aus der Zeichnung, keine überlappt eine andere (1440 bis 320 px).</li><li>«Denk-Modus» und «Alarm-Modus» stehen auf keiner gebauten Seite, in `content/` und `site.config.json` nicht (`grep`); nur noch als Bestandszitate im Abgleich.</li></ul> |
| D-3, Hinweis | Wortlaut befolgt, als Prüfbedarf gemeldet | Stelle 2 hat nach dem Auftrag nur den Ansatzpunkt. Der bisherige «Was hilft»-Satz dort (nicht weiter argumentieren, langsamer sprechen, weniger Druck) steht damit nicht mehr auf der Seite. | `abgleich/verstehen.md`, Prüfbedarf 9; Nr. 83, 222, 436, 440, 441, 522 |
| D-4 | umgesetzt | Abschnitt 07: erster Satz, die beiden Absätze aus dem Bestand Z. 162–164 wörtlich, Merksatz als `div.puk-longform__reflection` mit `h3` «Merksatz für Angehörige», danach «Mehr dazu unter …»; `visualPlan` › `v-vs-einordnung` nachgeführt | `verstehen` › `einordnung`; Bildschirmfoto bei 1280 px; `abgleich/verstehen.md` Nr. 102–107 «übernommen» |
| Regeln | eingehalten | Wortlaute aus D-1 bis D-4 unverändert; nichts gekürzt; Abgleich für D-3 und D-4 nachgeführt (alle Zeilen mit Ort `verstehen#anspannung`, das Handout `anspannungskurve`, «Verstehen hat Grenzen»), 0 ohne Fundstelle | `abgleich/README.md`, Abschnitt «Korrektur Etappe 1d» |

### Seitenhöhen, Tabstopps, Pfeile

Skript `node abgleich/bedienung.mjs`, Chromium, nach `load` und `document.fonts.ready`. Seitenhöhe: `document.documentElement.scrollHeight` bei 360 × 800 px. Tabstopps bei 1280 × 900 px, ab Seitenanfang, ohne Fusszeile.

| Seite | Tabstopps | Seitenhöhe bei 360 px | höchste Figur bei 360 px |
| --- | ---: | ---: | --- |
| `index` | 10 | 3863 px | – |
| `verstehen` | 19 | 16 756 px | Annahmen 3714 px |
| `beziehungen` | 15 | 12 737 px | Zwei Sichten 2359 px |
| `grenzen` | 21 | 16 413 px | DEAR 1791 px |

- Abbildung 2 `verstehen` ist bei 360 px 2994 px hoch (gemessen nach dem Laden der Schriften); Abschnitt 07 ist mit dem Merksatz länger.
- Die Pfeile der Schleife sind unverändert: 7,5 bis 15,3 px vor dem Zielkasten bei 1440, 1280, 768 und 720 px (Tabelle in `abgleich/README.md`).
- Alle Tabstopps haben einen sichtbaren Fokus; der erste ist «Zum Hauptinhalt».

**Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5:**

- **Überlauf:** keiner bei 320, 360, 768, 1280 und 1440 px auf den vier Seiten.
- **Kontrast nach WCAG 1.4.3:** für allen sichtbaren Text in `main` gemessen, Vertiefungen geöffnet; kein Wert unter AA.
- **Reduzierte Bewegung:** keine laufende Animation.
- **Theme «kontrast»:** alle 8 Figuren gerendert, auch die neue Abbildung 2; in SVG keine festen Farbattribute.
- **Nicht geprüft:** Screenreader, Hardwaretastatur und Touch (Stufe 5, Person). Ob Screenreader die Kurzbeschreibungen in `p.puk-sr` wie erwartet vorlesen, ist damit offen.

### Kennzahlen (Skript `abgleich/kennzahlen.mjs`)

Gemessen an der alten Seite allein, mit derselben Zählweise für alt und neu (`abgleich/README.md`). Neu zählt Text nur für Screenreader (`.puk-sr`) nicht mit; das betrifft die Kurzbeschreibungen der Legenden (95 / 34 / 20 Wörter). Der Richtwert gilt nicht; die Wortzahlen werden nur berichtet.

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 238 | 55 % | – | – | 1,85 → 1,68 | 1 → 0 |
| `verstehen` | 2524 | 1447 | 57 % | 1300 | 1365 | 2,54 → 2,83 | 12 → 0 |
| `beziehungen` | 2149 | 1164 | 54 % | 1100 | 1155 | 3,82 → 3,69 | 6 → 1 |
| `grenzen` | 2985 | 1554 | 52 % | 1500 | 1575 | 2,41 → 2,06 | 4 → 0 |

- **`verstehen`:** Mit den Kurzbeschreibungen wären es 1542 Wörter, gegenüber 1379 in 1c also +163: Abbildung 2 +99 (D-3), Abschnitt 07 +66 (D-4).
- **`beziehungen` und `grenzen`:** Der sichtbare Text ist gleich; nur die Kurzbeschreibungen fallen aus der Zählung.
- **Absicherungen auf `verstehen`:** 2,83, über dem Bestand (2,54). Grund sind die Wortlaute aus D-3 und D-4 («kann», «können», «könnten»).

## Visualisierungs-Check

Selbstprüfung als Matrix je Figur (Vorlage im Starter). E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Belege und Gründe für T und N stehen unter der Matrix. Die Spalte `v-vs-anspannung` gilt der neuen Abbildung 2 (Anspannungskurve). Die übrigen Spalten sind wie in Korrektur 1c; D-2 ändert dort nur, dass die Kurzbeschreibung nicht mehr sichtbar ist.

| Nr. | Prüfpunkt | `v-vs-eisberg` | `v-vs-anspannung` | `v-vs-bewertungen` | `v-vs-mythen` | `v-bz-schleife` | `v-bz-sichten` | `v-gr-bruecke` | `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | T | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | T | E | E | E | E |
| 4 | Kernaussage und Erklärtext (2–4 Sätze) | E | E | E | E | E | E | E | E |
| 5 | Ansatzpunkt (B, C, G) | – | E | – | – | E | – | – | E |
| 6 | Mechanismus nicht doppelt, sondern verbunden | E | E | E | E | T | E | E | E |
| 7 | Kartenraster-Check | E | E | E | T | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | E | T | E | T | E | T |
| 9 | Verteilt, keine Textwand | E | T | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | T | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N |

**Belege für die neue Abbildung 2 (`v-vs-anspannung`)**

- **1, 2:** Die Planzeile ist nachgeführt: Format «figure», Aussage, Quelle, Alternative, Begründung, `entryPoint` Stelle 2. Kein Gate-Hinweis `visual-plan`.
- **3:** «Was wird besser verstanden?»: wann Reden hilft und wann eine Pause besser ist. Die Kurve zeigt den Verlauf, die Liste sagt je Stelle, was hilft; die Kernaussage nennt die Pause.
- **4:** Kernaussage zwei Sätze, Kurztext drei Sätze, beide im Wortlaut des Auftrags.
- **5:** Stelle 2 «Es wird eng», in Zeichnung und Liste mit doppeltem Ring, mit «Ansatzpunkt für Angehörige: Senken Sie Ihr eigenes Tempo, …».
- **6:** Die Kurve verbindet die Handouts «Anspannungskurve», Stressmodell, «Hohe Anspannung» und Zustands-Landkarte in einer Darstellung; Abschnittstext und Figur doppeln sich nicht.
- **7:** kein Kartenraster; eine Kurve und eine nummerierte Liste.
- **8:** Die Höhe der Kurve trägt die Anspannung, die Reihenfolge den Gesprächsverlauf, der doppelte Ring den Ansatzpunkt. Eine Linienstärke (2 px), keine Füllung.
- **9, T:** Die Liste ist in vier Stellen mit Bezeichnungen gegliedert. Sie trägt aber viel Text: Bei 360 px ist die Figur 2994 px hoch.
- **10:** Vertiefung «Grenzen des Bildes»: «Die Kurve stellt den Verlauf beispielhaft dar. Sie ist kein validiertes Messinstrument …». Kennzeichnung «Eigene didaktische Darstellung nach dem Handout «Die Anspannungskurve»».
- **11:** Hauptaussagen, Liste und Ansatzpunkt stehen ausserhalb der Vertiefung; kein Skript.
- **12:** Bei 320 px bleibt die Kurve 238 px breit mit den Nummern 1 bis 4; die Liste trägt den Text. Textfassung über `aria-describedby` (`p.puk-sr`).
- **13:** Bildschirmfoto mit `data-theme="kontrast"`: Kurve, Ringe und Text lesbar; nur Token-Klassen.
- **14:** `approvalStatus` «ausstehend».

**Übrige Figuren:** Belege wie in Korrektur 1c (dritte Prüfrunde und Selbstprüfung 1c). Gründe für T:

- **2 und 6, Schleife:** Planbegründung «Handlungsspielraum» (F-W2-02, Fachstelle).
- **3, 7, 8, 9, Annahmen:** Kastenreihe, bei 360 px 3714 px hoch (F-V-11, Fachstelle).
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

- **Profil-Update:** 11 Dateien `components/Vis*/preview.html` aus dem Patch gibt es im Repository nicht; ihre Hunks sind nicht angewendet.
- **Stelle 2 ohne «Was hilft»:** nach dem Wortlaut von D-3; Prüfbedarf 9 in `abgleich/verstehen.md`.
- **Umfang:** `verstehen` (1447) und `beziehungen` (1164) liegen über Richtwert plus 5 %; der Richtwert gilt nicht, über die Länge entscheidet die Fachstelle.
- **Offen für die Fachstelle:**
  - R3-W1-05, R3-W1-06, F-V-11, F-V-05, F-W1-11, F-W2-02, F-W2-03
  - Prüfbedarf in `abgleich/*.md`
  - alle fachlichen Freigaben, auch für die neue Abbildung 2
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
