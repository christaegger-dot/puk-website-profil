# Abgleich · Borderline-Website, Etappe 1

Beleg für W1 nach UMBAUPLAN, Abschnitt 5: Jeder Satz des Bestands ist übernommen, gekürzt, zusammengeführt, verschoben, geändert oder mit Grund entfallen. Erstellt von der bauenden Sitzung am 08.10.2026, nachgeführt am 09.10.2026 (Korrektur Etappe 1, 1b, 1c und 1d). Das ist ein Arbeitsstand, keine Prüfung.

- `index.md` · `/`, `/selbsttest`, `/wegweiser`
- `verstehen.md` · `/verstehen` ohne Diagnostik-Teil, sechs Handouts; der Teil «Materialien zum Vertiefen» (Z. 277–396) steht seit Korrektur 1c am Ende der Tabelle (Nr. 474–540)
- `beziehungen.md` · `/verstehen/beziehungen`
- `grenzen.md` · `/grenzen`, acht Handouts, zwei Übungsszenarien
- `kennzahlen.mjs` · Wörter, Absicherungen und Semikolons alt und neu (ohne Abhängigkeiten)
- `pruefe-abgleich.mjs` · prüft die Tabellen gegen die gebauten Seiten (ohne Abhängigkeiten)
- `bedienung.mjs` · Tabstopps, Seitenhöhen und Pfeile der Bedeutungsschleife im Browser, gemessen nach dem Laden der Webschriften (braucht Playwright und einen lokalen Server)

**Grundlage:** Branch `borderline-bestand`, `bestand/borderline-angehoerige/` (`INVENTAR.md`, `texte/`), erhoben aus Commit `5c8471c` der alten Website. Die beiden ersten Skripte lesen den Bestand mit `git show origin/borderline-bestand:…` oder aus einem Ordner (`--bestand <ordner>`).

## Aufbau je Seite (Korrektur 1b, E)

Je Seite eine Tabelle «Satz für Satz» mit jedem Satz der alten Seite und der zugeordneten Handouts. Sie ersetzt die abschnittsweisen Tabellen vom 08.10.2026 und den Abschnitt «Satz für Satz» der ersten Korrektur. Die beiden widersprachen sich an einzelnen Stellen (F-K-02); es gilt die neue Zeile.

- **Spalten:** Nr · Quelle › Abschnitt · Satz (Bestand) · Status · Neue Fassung · Ort neu · Bemerkung.
- **Neue Fassung:** der Satz der neuen Seite, der die Aussage trägt; «wörtlich», wenn er gleich lautet; «–» bei «entfällt» und bei Sätzen, die für eine spätere Seite vorgemerkt sind.
- **Ort neu:** `seite#abschnitt` (Abschnitts-ID der gebauten Seite, `kopf`, `kapitel`), `Fusszeile` oder «seite (Etappe 2)».
- **Zustandekommen:** Ein Skript der bauenden Sitzung zerlegt den Bestand in Sätze und schlägt je Satz den ähnlichsten Satz im Zielabschnitt vor. Status, Zielabschnitt und jede schwache Zuordnung sind von Hand gesetzt und geprüft. Ob der genannte Satz die Aussage wirklich trägt, ist Gegenstand der Prüfung.

**Prüfung der Tabellen:** `node abgleich/pruefe-abgleich.mjs`. Ergebnis am 09.10.2026 nach Korrektur 1d: **1739 Zeilen, 0 ohne Fundstelle.** Das Skript liest auch Text nur für Screenreader (`.puk-sr`, Kurzbeschreibungen der Bildlegenden), denn er steht auf der Seite. Geprüft wird je Zeile:

- Den Ort gibt es.
- Die neue Fassung steht dort wörtlich.
- Jede Stelle in «…» der Bemerkung steht auf einer neuen Seite, im Bestand oder in den Profilregeln.
- «entfällt» hat weder Ort noch neue Fassung.

## Statuswerte

| Status | Bedeutung |
| --- | --- |
| übernommen | Aussage steht inhaltlich gleich, höchstens sprachlich geglättet. Die neue Fassung steht in der Tabelle, wenn sie abweicht, sonst «wörtlich». |
| gekürzt | Aussage steht, Teile sind entfallen; der Vergleich mit der neuen Fassung zeigt, welche. |
| zusammengeführt | Aussage steht an anderer Stelle, zusammen mit gleichem Inhalt aus einer anderen Quelle. |
| verschoben | Aussage steht auf dieser Website an anderer Stelle, oder sie gehört laut Plan auf eine andere Seite und erscheint dort, wenn die Seite gebaut ist («seite (Etappe 2)»). |
| geändert | Aussage steht mit verändertem Inhalt, auf Auftrag (Korrektur Etappe 1, 1b, 1c oder 1d) oder als natürlichere Fassung eines Beispiels (S-5). Der Grund steht in der Bemerkung. |
| entfällt | Aussage erscheint nicht mehr. Mögliche Gründe: <ul><li>Meta-Text oder Handout-Rahmen</li><li>Profil (Krisenzugang, Telefonnummern)</li><li>Entscheid der Fachstelle (Personenbilder, Handouts)</li><li>Wiederholung</li><li>Kürzung für den Richtwert: «Kürzung W2-2» ab 09.10.2026, «Kürzung Umfang (Korrektur 1b)» in der zweiten Korrektur; Korrektur 1c kürzt nicht</li></ul> |
| Bezeichnung | Überschrift, Kicker, Eintrag der Kapitelübersicht oder Stichwort ohne eigene Aussage. Ohne Ort, wenn die Bezeichnung nicht mehr vorkommt. |

## Wörter und Absicherungen

Gemessen wird an der alten Seite allein, nicht an Seite plus Handouts. So verlangt es der Auftrag, und so sagt es CLAUDE.md unter «Bauende Sitzung beim Straffen». Die Werte erzeugt `node abgleich/kennzahlen.mjs`.

**Zählweise:**

- **Wörter:** durch Leerraum getrennte Zeichenfolgen mit mindestens einem Buchstaben oder einer Ziffer.
- **Neu:** Text in `<main>` der gebauten Seite, mit Vertiefungen (`details`). Ohne SVG und ohne Text nur für Screenreader (`.puk-sr`, `.puk-vis-sr`); seit Korrektur 1d zählen deshalb die Kurzbeschreibungen der Bildlegenden nicht mehr. Jede Elementgrenze trennt Wörter, wie im Browser (`innerText`). Text, der nur breit oder nur schmal sichtbar ist, zählt je einmal.
- **Alt:** Bestandstext der alten Seite (`texte/<route>.md`). Ohne den Kopfblock der Erhebung, ohne Klammermarken («[Akkordeon: …]») und ohne Bild- und Linkadressen. Vorschautexte geschlossener Akkordeons zählen mit.
- **Absicherungen:** «kann», «können», «könnte», «könnten», «kannst», Wörter mit «möglich…», «vielleicht», «nicht sicher» und «nicht automatisch», je 100 Wörter.
- **Semikolons:** im Fliesstext. Absätze, die mit «Quellen», «Bezug…», «Grundlage» oder «Eigene didaktische Darstellung» beginnen, zählen nicht.

**Nachgerechnet (F-K-03):** Das Skript ergibt am Stand `2a4abb2` genau die Werte der zweiten Prüfrunde: 1301 / 1112 / 1510 Wörter und 2,15 / 2,70 / 1,79 Absicherungen je 100 Wörter.

Die damals berichteten 1299 / 1099 / 1500 waren zu tief. Die Zählung der bauenden Sitzung hatte Bezeichnungen in eigenen `span` ohne Leerzeichen an das nächste Wort gehängt, zum Beispiel «Station 1 · Schwester» an «Ereignis» oder «Beispiel» an den Beispielsatz.

**Stand 09.10.2026, nach Korrektur 1d:**

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 238 | 55 % | – | – | 1,85 → 1,68 | 1 → 0 |
| `verstehen` | 2524 | 1447 | 57 % | 1300 | 1365 | 2,54 → 2,83 | 12 → 0 |
| `beziehungen` | 2149 | 1164 | 54 % | 1100 | 1155 | 3,82 → 3,69 | 6 → 1 |
| `grenzen` | 2985 | 1554 | 52 % | 1500 | 1575 | 2,41 → 2,06 | 4 → 0 |

**Lesart:**

- **Richtwert:** Er gilt nicht: «Der Richtwert für die Länge gilt nicht. Nicht kürzen, um Wörter auszugleichen.» (`KORREKTUR-ETAPPE-1D.md`, Abschnitt 4; ebenso 1C, Abschnitt 1). Die Wortzahlen werden nur berichtet. Über die Länge entscheidet die Fachstelle in W1.
- **Kurzbeschreibungen nicht mehr gezählt:** Sie stehen seit Korrektur 1d nur für Screenreader (D-2). Das sind 95 Wörter auf `verstehen`, 34 auf `beziehungen` und 20 auf `grenzen`.
- **Veränderung gegenüber Korrektur 1c** (1379 / 1198 / 1574, damals mit Kurzbeschreibungen):
  - `verstehen` 1447 sichtbare Wörter; mit Kurzbeschreibungen wären es 1542, also +163. Davon `anspannung` +99 (neue Abbildung 2 mit Liste, Beispielen und Vertiefung, D-3) und `einordnung` +66 (Bestand «Verstehen hat Grenzen» und Merksatz, D-4).
  - `beziehungen` 1164 und `grenzen` 1554: nur die Kurzbeschreibungen fallen aus der Zählung, der sichtbare Text ist gleich.
- **Absicherungen auf `verstehen`:** 2,54 → 2,83. Die neuen Texte aus D-3 und D-4 enthalten «kann», «können» und «könnten» (zum Beispiel «Anspannung kann im Gespräch ansteigen …», «… entschärfen könnten»); sie sind Wortlaut des Auftrags.
- **Quote:** Die Quote «Neu / alt» misst nicht, wie stark gekürzt wurde. Die alte Seite enthält Teile, die nach Etappe 2 gehen, und Meta-Text. Die zweite Prüfrunde hat deshalb einen vergleichbaren Kern berechnet (Belege b, Abschnitt 4).

**Bedienung (`node abgleich/bedienung.mjs`, Chromium, 09.10.2026, nach Korrektur 1d):** Tabstopps bei 1280 × 900 px mit Tab ab Seitenanfang. Seitenhöhe ist `document.documentElement.scrollHeight` bei 360 × 800 px, gemessen nach `load` und `document.fonts.ready`.

| Seite | Tabstopps ohne Fusszeile | Seitenhöhe bei 360 px | höchste Figur bei 360 px |
| --- | ---: | ---: | --- |
| `index` | 10 | 3863 px | – |
| `verstehen` | 19 | 16 756 px | Annahmen 3714 px |
| `beziehungen` | 15 | 12 737 px | Zwei Sichten 2359 px |
| `grenzen` | 21 | 16 413 px | DEAR 1791 px |

Gegenüber Korrektur 1c: Die Kurzbeschreibungen der Bildlegenden sind nicht mehr sichtbar (alle Seiten mit Figuren niedriger), die Fusszeile ist länger (neuer Zuständigkeitsverweis, auf `index` +24 px), auf `verstehen` kommen Abbildung 2 neu und Abschnitt 07 mit Merksatz dazu.

Die Fusszeile hat keinen Tabstopp. Die früher berichteten 40 Tabstopps auf `grenzen` waren falsch gezählt (F-K-03). Der 21. Tabstopp auf `grenzen` ist der Link «Opferhilfe Schweiz» (K-1).

**Seitenhöhen (R3-K-01):** Die Werte der Selbstprüfung 1b (3848 / 15 593 / 12 236 / 16 293 px) waren vor dem Laden der Webschriften gemessen. Das Skript wartet seit Korrektur 1c auf `load` und `document.fonts.ready`. Am Stand `242a74b` ergibt es so die Werte der dritten Prüfrunde (3839 / 15 593 / 12 342 / 16 521 px). Die Zunahme seither auf `verstehen` und `beziehungen` kommt von K-8 (Überschriften, «Was hilft» und Ansatzpunkte in Seitenschrift), dazu auf `beziehungen` von den Sätzen aus K-2 bis K-5 und auf `verstehen` vom Satz in der Textfassung des Pendels (K-7).

**Pfeile der Bedeutungsschleife** (gleiches Skript; Abstand der Pfeilspitze, Marker eingerechnet, zum Rand des Zielkastens / Abstand des Pfadanfangs zum Ausgangskasten, in CSS-Pixeln):

| Fensterbreite | 1 → 2 | 2 → 3 | 3 → 4 | 4 → 5 | 5 → 1 |
| ---: | --- | --- | --- | --- | --- |
| 1440 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |
| 1280 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |
| 768 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |
| 720 px | 15,3 / 13,0 | 8,5 / 7,5 | 7,8 / 12,0 | 7,5 / 8,2 | 8,8 / 9,0 |

Die Kreisanordnung ist in allen vier Breiten 600 px breit; deshalb sind die Werte gleich. Unter 660 px Containerbreite gilt die Liste ohne Pfeile im Bild.

Die Annahmen sind bei 360 px höher als in der ersten Korrektur (3714 statt 2748 px), weil die Einordnungen und seit Korrektur 1c auch die Überschriften in Seitenschrift stehen (Korrektur 1b, F; Korrektur 1c, K-8). Ob die Annahmen Text werden, entscheidet die Fachstelle (F-V-11).

## Entscheide im Bau (Struktur und Technik)

Entscheide über Inhalte stehen in `../KORREKTUR-ETAPPE-1.md`, `../KORREKTUR-ETAPPE-1B.md`, `../KORREKTUR-ETAPPE-1C.md` und `../KORREKTUR-ETAPPE-1D.md` (je Abschnitt 1), im `../UMBAUPLAN.md` und im `../PRUEFBERICHT.md`, jeweils mit Datum. Ein Entscheid ohne eine solche Quelle wird hier nicht genannt (Korrektur 1b, Abschnitt 1).

| Thema | Entscheid | Begründung |
| --- | --- | --- |
| `grenzen` › `reihenfolge` (Plan: «im Bau prüfen», Raster 2×2 oder Text) | **Text**, geordnete Liste mit den vier Feldern des Rasters (Korrektur 1b, B-4) | Die Quelle nennt das Raster «keine fachliche Einstufung». Die Liste nennt die Kriterien des Bestands (dringend oder langfristig, emotional hoch oder niedriger), ohne die Beispiele fest einzuordnen. |
| `grenzen` › `kontakt` (Plan: Kontinuum J, «im Bau prüfen, ob die Form eine Steigerung nahelegt») | **Text**, Liste der vier Möglichkeiten | Die Möglichkeiten liegen nicht auf einer Achse. Ein Kontinuum würde eine Steigerung nahelegen. |
| Hauptnavigation (UMBAUPLAN, Abschnitt 1) | **Fünf Punkte:** Verstehen · Beziehungen · Ihre Rolle · Grenzen · Auf sich achten | Gemessen in Chromium bei 320 px: Mit acht Punkten war der Kopf 616 px hoch, mit fünf ist er 478 px hoch. Heute sind drei Punkte sichtbar. |
| Bedeutungsschleife mit fünf Stationen | `borderline.css` setzt die fünfte Station ins 3×3-Raster des Musters B. Bis 660 px Containerbreite gilt die Liste des Musters. | Die Kreisanordnung trägt nur bei voller Breite des Musters (600 px). Darunter überlappen Station 4 und 5, und der Pfeil 4 → 5 verschwindet (gemessen bei Viewport 620 bis 700 px). Station 3 und 4 sitzen am unteren Rand ihrer Rasterzeile, damit zwischen Station 4 und der höheren Station 5 Platz für den Pfeil bleibt; alle fünf Pfeile enden 7 bis 16 px vor dem Zielkasten (Korrektur 1c, K-6; Messung oben). |
| Pendel, Brücke und Anspannungskurve (Muster A) | Zeichnung als SVG, Beschriftungen als HTML-Text darüber, Lage in Prozent. Anspannungskurve: eine Kurve, vier Nummern als HTML-Marken auf der Kurve (wie Muster G), Stelle 2 mit doppeltem Ring (`outline` über `--border-width-strong`); unter 560 px entfallen nur die kurzen Beschriftungen, Kurve und Nummern bleiben (Korrektur 1d, D-3). Pendel: beide Bögen Kreisbögen um den Aufhängepunkt, die ausgelenkten Pendelkörper an den Enden des langen Bogens, kleine Marken an den Enden des kurzen (Korrektur 1c, K-7); unter 560 px entfallen nur die Beschriftungen im Bild, die Liste der drei Lagen steht in allen Breiten. Brücke: unter 560 px eine eigene, schmalere Zeichnung (400 × 360), damit Geländer, Fahrbahn und Pfeiler in `type-body-sm` im Bild beschriftet bleiben. | Leitlinie 07: Beschriftungen sind echter Text und bleiben schmal mindestens `type-body-sm` (Korrektur 1b, C-1, C-5). |
| Zwei Sichten (Muster E) | Je Schritt eine Überschrift und zwei Zellen: breit nebeneinander, schmal nacheinander. Bezeichnungen «Mögliche Sicht der betroffenen Person» und «Mögliche Sicht der Schwester» | Korrektur 1b, C-3; Bezeichnungen nach Korrektur 1c, K-3. Der Vergleich Schritt für Schritt bleibt auch auf dem Telefon erhalten. |
| Lesetext in Figuren | Seitenschrift (`--web-size-body`, `--web-fw-body`) für die Einordnungen der Annahmen, die Liste unter der Anspannungskurve und die Zellen der Zwei Sichten; Überschriften, «Was hilft» und Ansatzpunkte dort nicht kleiner (Korrektur 1c, K-8) | Korrektur 1b, F; Leitlinie 03 «Lesen in Seitenschrift». Freie Pixelwerte in `borderline.css` sind durch Rechnungen mit `--space-*` ersetzt, Strichstärken durch `--border-width-strong` (Korrektur 1c, K-9). |
| Links auf Entwurfsseiten | keine | Das Gate blockiert Links von veröffentlichten Seiten auf Entwürfe. Vorgemerkte Inhalte stehen in den Tabellen mit «seite (Etappe 2)». |
| Quellen | Kurzangaben je Abschnitt oder Figur, ohne Link | `quellen` ist ein Entwurf. Die Kurzangaben folgen `texte/quellen.md` des Bestands. |
| Startseite ohne Navigationspunkt | `index` mit `navLabel: null`, erreichbar über das Logo | Die Hauptnavigation im Plan nennt keinen Punkt «Start». |
| Absenderin, Zuständigkeitsverweis, Verweis im Text | wörtlich aus dem Starter r4-4; Zuständigkeitsverweis seit Korrektur 1d im Wortlaut des Profil-Updates 2026-10-09b | Profilweite Fassung, fachlich geprüft von der Fachstelle (Zuständigkeitsverweis neu am 09.10.2026); keine neue Freigabe durch die bauende Sitzung. |
| Paarform | «Therapeutinnen und Therapeuten», «Partnerin oder Partner» | README des Profils |

## Korrektur Etappe 1b: Entscheide der Aufträge und Umsetzung (09.10.2026)

| Thema | Umsetzung | Quelle |
| --- | --- | --- |
| Annahme 6 | «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» Quelle WHO (2026) | `KORREKTUR-ETAPPE-1B.md`, Abschnitt 1 und A-1 (zurück zum Bestand) |
| Satz nach der Suizidfrage | «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» mit «nur» | `KORREKTUR-ETAPPE-1B.md`, Abschnitt 1 |
| Opferhilfe | **nicht verlinkt.** Der Auftrag verlangt, die Adresse vorher aufzurufen. `https://www.opferhilfe-schweiz.ch/de/` war am 09.10.2026 aus der Arbeitsumgebung der bauenden Sitzung nicht erreichbar (Netzwerkrichtlinie, Abfrage abgelehnt). Schritt 4 bleibt ohne Link und ohne Nummer. | `KORREKTUR-ETAPPE-1B.md`, A-4: «ist sie nicht erreichbar, nicht verlinken und im Bericht melden». Entscheid der Fachstelle zum Link: Abschnitt 1 |
| Brücke | Kurztext «Sie müssen die Brücke nicht allein tragen.» (Handout). Teile schmal im Bild beschriftet. | `KORREKTUR-ETAPPE-1B.md`, C-5 |
| Station 2 auf höchstens drei Sätze | Erster Eintrag: «Unklare Signale …», «Das Erleben der betroffenen Person ist dennoch real.», «Erlebte Zurückweisung ist nicht immer eingebildet.» Vermutungen und Empathie stehen in `zwei-sichten`: Kurztext und Abschnittstext. | `KORREKTUR-ETAPPE-1B.md`, D-3. Im Bestand ein eigener Punkt «Vermutungen können sich wie Gewissheiten anfühlen». So bleibt die Aussage aus W1-3 der ersten Korrektur erhalten. |
| Absprache «Was soll ich übernehmen …» | entfällt bei Station 4, vorgemerkt für `rolle` (Etappe 2) | `KORREKTUR-ETAPPE-1B.md`, B-2 |
| Kurztexte mit zwei bis vier Sätzen | Anspannung: zweiter Satz nach dem Handout `anspannungskurve`. Zwei Sichten: Empathie-Satz aus dem Bestand. Pendel: zweiter Satz aus dem Handout `spaltung`. | `KORREKTUR-ETAPPE-1B.md`, C-4 |
| Annahme 2 | Überschrift der Einordnung mit beiden Sätzen des Auftrags | `KORREKTUR-ETAPPE-1B.md`, B-4 |
| DEAR, Vertiefung | Titel «Herkunft des Modells», weil die Grenze im Kurztext steht | F-V-12, Teil «Vertiefung ohne Grenzen» |

## Korrektur Etappe 1c: Entscheide der Aufträge und Umsetzung (09.10.2026)

Die Zeile «Opferhilfe» der Tabelle zu Korrektur 1b ist damit überholt.

| Thema | Umsetzung | Quelle |
| --- | --- | --- |
| Opferhilfe | **verlinkt:** Schritt 4 «Opferhilfe und Beratung dazunehmen» mit Link «Opferhilfe Schweiz» auf `https://www.opferhilfe-schweiz.ch/de/`, ohne Nummer, im selben Fenster. Adresse geprüft durch Prüfung 1, 09.10.2026; die bauende Sitzung hat sie nicht erneut aufgerufen. | `KORREKTUR-ETAPPE-1C.md`, Abschnitt 1 und K-1 |
| Umfang | nichts gekürzt; Wortzahlen nur berichtet (oben) | `KORREKTUR-ETAPPE-1C.md`, Abschnitt 1 |
| «Perfekte» Reaktion, Bezeichnungen der Zwei Sichten | Bestandssatz wieder in `verantwortung`; «Mögliche Sicht …» in allen Zellen und in der Textfassung | `KORREKTUR-ETAPPE-1C.md`, Abschnitt 1 (D-1 und C-3 aus 1b waren falsch), K-2, K-3 |
| Trennfragen, Station 4 | Satz mit vier Fragen im Wortlaut des Auftrags; «Verstummen, Unwirklichkeitsgefühle …» vor «Möglich ist eine Dissoziation …» | K-4, K-5 |
| Schrift in Figuren | Anspannung, Annahmen, Zwei Sichten: Überschriften `--web-size-h4` (21 px), «Was hilft», Ansatzpunkte und Bezeichnung der Sicht `--web-size-body` (21 px). Schleife und Ansatzpunkt-Kasten: Bezeichnung «Ansatzpunkt» `type-body-sm` (15 px) wie der Erklärtext. Überschriften, «Was hilft» und die Bezeichnung «Ansatzpunkt» in `--fw-medium` (500), dem stärksten Gewicht unter den Profil-Tokens; einen Token für Fett gibt es nicht. Die Bezeichnung der Sicht steht in `--fw-regular` (400), damit sie sich von der Schrittüberschrift abhebt; der Erklärtext in `--web-fw-body` (300). | K-8 |
| Abgleich `verstehen` | Bestand Z. 277–396 als Nr. 474–540 angehängt | K-10, R3-K-03 |
| `kennzahlen.mjs` | liegt seit Commit `242a74b` im Repository (`git ls-tree 242a74b abgleich/`); R3-K-02 betraf den gelieferten Prüfstand ohne die Datei | K-10, R3-K-02 |

## Korrektur Etappe 1d: Entscheide der Aufträge und Umsetzung (09.10.2026)

Grundlage: fachliche Durchsicht von `verstehen` durch die Fachstelle (09.10.2026) und Profil-Update `update-2026-10-09b` (auf `main` angewendet und hierher zusammengeführt).

| Thema | Umsetzung | Quelle |
| --- | --- | --- |
| Zuständigkeitsverweis | neuer Wortlaut in `site.config.json` › `responsibility.text`, `reviewedAt` 09.10.2026; `inline` unverändert; auf allen 15 Seiten in der Fusszeile | `KORREKTUR-ETAPPE-1D.md`, Abschnitt 1 und D-1 |
| Kurzbeschreibung in der Bildlegende | `p.puk-sr` bei allen 8 Figuren, weiter über `aria-describedby` verbunden; sichtbar bleiben Kennzeichnung und Quelle; «Leserichtung» der Schleife bleibt sichtbar | D-2; Leitlinie 07 (Profil-Update) |
| Abbildung 2 | «Die Anspannungskurve: wann Reden hilft» statt der Achse mit drei Bereichen; Texte im Wortlaut des Auftrags; die beiden Fachbegriffe der früheren Achse kommen auf keiner Seite mehr vor | D-3; Entscheid der Fachstelle, 09.10.2026 |
| Stelle 2 ohne «Was hilft» | nach dem Wortlaut des Auftrags; der frühere Satz dazu entfällt und steht als Prüfbedarf in `verstehen.md` (Punkt 9) | `KORREKTUR-ETAPPE-1D.md`, Abschnitt 4: «Die Wortlaute in D-1 bis D-4 gelten so, wie sie hier stehen.» |
| Abschnitt 07 | Bestand «Verstehen hat Grenzen» wörtlich, Merksatz als `div.puk-longform__reflection` | D-4 |
| Selbsttest-Kopie | `tools/selftest/` der Website wie im Starter nachgezogen (vier Dateien aus dem Profil-Update); Selbsttest 50/50 | Profil-Update 2026-10-09b |
| `kennzahlen.mjs` | Text nur für Screenreader (`.puk-sr`) zählt nicht als sichtbares Wort | D-2 |
