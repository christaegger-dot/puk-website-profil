# Abgleich · Borderline-Website, Etappe 1

Beleg für W1 nach UMBAUPLAN, Abschnitt 5: Jeder Satz des Bestands ist übernommen, gekürzt, zusammengeführt, verschoben, geändert oder mit Grund entfallen. Erstellt von der bauenden Sitzung am 08.10.2026, nachgeführt am 09.10.2026 (Korrektur Etappe 1, 1b, 1c, 1d, 1e, 1f, 1g und 1h). Das ist ein Arbeitsstand, keine Prüfung.

- `index.md` · `/`, `/selbsttest`, `/wegweiser`
- `verstehen.md` · `/verstehen` ohne Diagnostik-Teil, sechs Handouts; der Teil «Materialien zum Vertiefen» (Z. 277–396) steht seit Korrektur 1c am Ende der Tabelle (Nr. 474–540); seit Korrektur 1f mit zwei Zeilen für Sätze der neuen Seite ohne Bestandssatz am Ende (Nr. 541–542)
- `beziehungen.md` · `/verstehen/beziehungen`; seit Korrektur 1e mit Zeilen für Sätze der neuen Seite ohne Bestandssatz am Ende (Nr. 233–248)
- `grenzen.md` · `/grenzen`, acht Handouts, zwei Übungsszenarien; seit Korrektur 1f mit zwei Zeilen ohne Bestandssatz am Ende (Nr. 710–711)
- `kennzahlen.mjs` · Wörter, Absicherungen und Semikolons alt und neu (ohne Abhängigkeiten)
- `pruefe-abgleich.mjs` · prüft die Tabellen gegen die gebauten Seiten (ohne Abhängigkeiten)
- `verneinung.mjs` · Sätze mit Verneinung alt und neu, mit `--seite <id>` je Abschnitt und mit den gezählten Sätzen (ohne Abhängigkeiten; seit Korrektur 1e)
- `bedienung.mjs` · Tabstopps, Seitenhöhen und Pfeile der Bedeutungsschleife im Browser, gemessen nach dem Laden der Webschriften (braucht Playwright und einen lokalen Server)

**Grundlage:** Branch `borderline-bestand`, `bestand/borderline-angehoerige/` (`INVENTAR.md`, `texte/`), erhoben aus Commit `5c8471c` der alten Website. Die beiden ersten Skripte lesen den Bestand mit `git show origin/borderline-bestand:…` oder aus einem Ordner (`--bestand <ordner>`).

## Aufbau je Seite (Korrektur 1b, E)

Je Seite eine Tabelle «Satz für Satz» mit jedem Satz der alten Seite und der zugeordneten Handouts. Sie ersetzt die abschnittsweisen Tabellen vom 08.10.2026 und den Abschnitt «Satz für Satz» der ersten Korrektur. Die beiden widersprachen sich an einzelnen Stellen (F-K-02); es gilt die neue Zeile.

- **Spalten:** Nr · Quelle › Abschnitt · Satz (Bestand) · Status · Neue Fassung · Ort neu · Bemerkung.
- **Neue Fassung:** der Satz der neuen Seite, der die Aussage trägt; «wörtlich», wenn er gleich lautet; «–» bei «entfällt» und bei Sätzen, die für eine spätere Seite vorgemerkt sind.
- **Ort neu:** `seite#abschnitt` (Abschnitts-ID der gebauten Seite, `kopf`, `kapitel`), `Fusszeile` oder «seite (Etappe 2)».
- **Zustandekommen:** Ein Skript der bauenden Sitzung zerlegt den Bestand in Sätze und schlägt je Satz den ähnlichsten Satz im Zielabschnitt vor. Status, Zielabschnitt und jede schwache Zuordnung sind von Hand gesetzt und geprüft. Ob der genannte Satz die Aussage wirklich trägt, ist Gegenstand der Prüfung.

**Prüfung der Tabellen:** `node abgleich/pruefe-abgleich.mjs`. Ergebnis am 10.10.2026 nach Korrektur 1h: **1763 Zeilen, 0 ohne Fundstelle** (1739 Bestandszeilen und 24 Zeilen ohne Bestandssatz: 16 auf `beziehungen`, 6 auf `verstehen`, 2 auf `grenzen`). Das Skript liest auch Text nur für Screenreader (`.puk-sr`, Kurzbeschreibungen der Bildlegenden), denn er steht auf der Seite. Geprüft wird je Zeile:

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
| verschoben | Aussage steht auf dieser Website an anderer Stelle, oder sie gehört laut Plan auf eine andere Seite und erscheint dort, wenn die Seite gebaut ist («seite (Etappe 2)»). Seit Korrektur 1h auch: Der Satz wandert aus einer Abbildung in deren Vertiefung (1H, Abschnitt 8). |
| geändert | Aussage steht mit verändertem Inhalt, auf Auftrag (Korrektur Etappe 1, 1b, 1c oder 1d) oder als natürlichere Fassung eines Beispiels (S-5). Der Grund steht in der Bemerkung. |
| umformuliert (einfache Sprache, 1e) | Seit Korrektur 1e: Der Satz, der die Aussage trägt, ist in der Neufassung von `beziehungen` anders formuliert (`KORREKTUR-ETAPPE-1E.md`, Abschnitt 2). Die neue Fassung steht in der Tabelle; der frühere Status steht in der Bemerkung («bis 1d: …»), ebenso Teile, die weiterhin entfallen. Steht der Bestandssatz oder sein behaltener Teil nach 1e wieder unverändert da, bleibt der frühere Status. Gilt auch für Zeilen anderer Seiten mit Ort auf `beziehungen` und, mit «–» als Bestandssatz, für Verweise und einen Satz, die schon bis 1d ohne Bestandszeile auf der Seite standen. |
| umformuliert (einfache Sprache, 1f) | Seit Korrektur 1f: wie «umformuliert (einfache Sprache, 1e)», für die Neufassungen von `verstehen` und `grenzen` (`KORREKTUR-ETAPPE-1F.md`, Abschnitt 2 und 3). Der frühere Status steht in der Bemerkung («bis 1e: …»), ebenso Teile, die weiterhin entfallen. Steht der Bestandssatz oder sein behaltener Teil nach 1f wieder unverändert da, bleibt der frühere Status. Gilt auch für Zeilen anderer Seiten mit Ort auf `verstehen` und, mit «–» als Bestandssatz, für einen Satz, der schon bis 1e ohne Bestandszeile auf der Seite stand. |
| umformuliert (einfache Sprache, 1g) | Seit Korrektur 1g: wie «umformuliert (einfache Sprache, 1f)», für die Stellen 1 und 3 der Anspannungskurve auf `verstehen` und den Abschnitt 02 `bruecke` auf `grenzen`, der statt der Abbildung «Die Brücke mit Geländer» ein Text ist (`KORREKTUR-ETAPPE-1G.md`, Abschnitt 3 und 4). Der frühere Status steht in der Bemerkung («bis 1f: …»). |
| umformuliert (Bildsprache, 1h) | Seit Korrektur 1h (Bildsprache-Audit): Die Fassung ändert sich, weil eine Abbildung neu gezeichnet oder ersetzt ist (Eisberg, «Momentaufnahmen» statt Pendel, Stationen der Bedeutungsschleife; `KORREKTUR-ETAPPE-1H.md`, Abschnitt 4, 5 und 8). Der frühere Status steht in der Bemerkung («bis 1g: …»). |
| entfällt | Aussage erscheint nicht mehr. Mögliche Gründe: <ul><li>Meta-Text oder Handout-Rahmen</li><li>Profil (Krisenzugang, Telefonnummern)</li><li>Entscheid der Fachstelle (Personenbilder, Handouts)</li><li>Wiederholung</li><li>Kürzung für den Richtwert: «Kürzung W2-2» ab 09.10.2026, «Kürzung Umfang (Korrektur 1b)» in der zweiten Korrektur; Korrektur 1c kürzt nicht</li></ul> |
| Bezeichnung | Überschrift, Kicker, Eintrag der Kapitelübersicht oder Stichwort ohne eigene Aussage. Ohne Ort, wenn die Bezeichnung nicht mehr vorkommt. |
| neu (1e) | Seit Korrektur 1e: Satz der neuen Seite `beziehungen` ohne Bestandssatz, zum Beispiel Beispielsätze zu «Was Sie tun können», «Das kann kränken» oder der Hinweis auf die Beratung. «Satz (Bestand)» ist «–». |
| neu (1f) | Seit Korrektur 1f: Satz der neuen Seiten `verstehen` oder `grenzen` ohne Bestandssatz, hier Beispielsätze zu «Was Sie tun können». «Satz (Bestand)» ist «–». |
| neu (1h) | Seit Korrektur 1h: Satz auf `verstehen` ohne Bestandssatz in einer Abbildung: die Sätze über den Fotos in «Momentaufnahmen», die Frage neben dem Eisberg und «Es wird wieder ruhiger.» an Stelle 4 der Anspannungskurve. «Satz (Bestand)» ist «–». |

## Wörter und Absicherungen

Gemessen wird an der alten Seite allein, nicht an Seite plus Handouts. So verlangt es der Auftrag, und so sagt es CLAUDE.md unter «Bauende Sitzung beim Straffen». Die Werte erzeugt `node abgleich/kennzahlen.mjs`.

**Zählweise:**

- **Wörter:** durch Leerraum getrennte Zeichenfolgen mit mindestens einem Buchstaben oder einer Ziffer.
- **Neu:** Text in `<main>` der gebauten Seite, mit Vertiefungen (`details`). Ohne SVG und ohne Text nur für Screenreader (`.puk-sr`, `.puk-vis-sr`); seit Korrektur 1d zählen deshalb die Kurzbeschreibungen der Bildlegenden nicht mehr. Jede Elementgrenze trennt Wörter, wie im Browser (`innerText`). Text, der nur breit oder nur schmal sichtbar ist, zählt je einmal.
- **Alt:** Bestandstext der alten Seite (`texte/<route>.md`). Ohne den Kopfblock der Erhebung, ohne Klammermarken («[Akkordeon: …]») und ohne Bild- und Linkadressen. Vorschautexte geschlossener Akkordeons zählen mit.
- **Absicherungen:** «kann», «können», «könnte», «könnten», «kannst», Wörter mit «möglich…», «vielleicht», «nicht sicher» und «nicht automatisch», je 100 Wörter.
- **Semikolons:** im Fliesstext. Absätze, die mit «Quellen», «Bezug…», «Grundlage» oder «Eigene didaktische Darstellung» beginnen, zählen nicht.
- **Sätze mit Verneinung** (seit Korrektur 1e, `node abgleich/verneinung.mjs`): Text wie bei den Wörtern, neu je Blockelement (`p`, `li`, `dt`, `dd`, `h1`–`h3`, `summary`, `figcaption`), alt je Zeile des Bestands, mit derselben Satzzerlegung wie der Abgleich. Gezählt wird ein Satz, der «nicht», «nichts», «nie», «niemals», «niemand», «weder» oder eine Form von «kein» enthält. Überschriften und Bezeichnungen zählen als Satz.

**Nachgerechnet (F-K-03):** Das Skript ergibt am Stand `2a4abb2` genau die Werte der zweiten Prüfrunde: 1301 / 1112 / 1510 Wörter und 2,15 / 2,70 / 1,79 Absicherungen je 100 Wörter.

Die damals berichteten 1299 / 1099 / 1500 waren zu tief. Die Zählung der bauenden Sitzung hatte Bezeichnungen in eigenen `span` ohne Leerzeichen an das nächste Wort gehängt, zum Beispiel «Station 1 · Schwester» an «Ereignis» oder «Beispiel» an den Beispielsatz.

**Stand 10.10.2026, nach Korrektur 1h:**

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 238 | 55 % | – | – | 1,85 → 1,68 | 1 → 0 |
| `verstehen` | 2524 | 1602 | 63 % | 1300 | 1365 | 2,54 → 3,00 | 12 → 0 |
| `beziehungen` | 2149 | 1564 | 73 % | 1100 | 1155 | 3,82 → 4,48 | 6 → 1 |
| `grenzen` | 2985 | 1601 | 54 % | 1500 | 1575 | 2,41 → 2,62 | 4 → 0 |

**Lesart:**

- **Richtwert:** Er gilt nicht: «Der Richtwert für die Länge gilt nicht. Nicht kürzen, um Wörter auszugleichen.» (`KORREKTUR-ETAPPE-1D.md`, Abschnitt 4; ebenso 1C, Abschnitt 1). Für `beziehungen` sagt `KORREKTUR-ETAPPE-1E.md`, Abschnitt 2: «Die Seite wird länger (geschätzt +25 %); das ist so gewollt.» Für `verstehen` und `grenzen` sagt `KORREKTUR-ETAPPE-1F.md`, Abschnitt 2: «Der Richtwert für die Länge gilt nicht.» Die Wortzahlen werden nur berichtet. Über die Länge entscheidet die Fachstelle in W1.
- **Korrektur 1e:** `beziehungen` 1164 → 1564 Wörter (+400, +34 %; Auftrag: geschätzt +25 %). Je Abschnitt vor → nach 1e: Kopf und Kapitelübersicht 43 → 70, `verbindung` 70 → 80, `schleife` 242 → 272, `verstaerker` 284 → 470, `zwei-sichten` 238 → 276, `was-hilft` 89 → 159, `verantwortung` 198 → 237. Absicherungen 3,69 → 4,48 je 100 Wörter: Die neuen Sätze enthalten «kann» und «können» (zum Beispiel «Eine kurze, verlässliche Ankündigung kann helfen», «Sie können die Person ermutigen …»); sie sind Wortlaut des Auftrags. `verstehen` 1461 → 1456: Stelle 2 hat kein eigenes «Was hilft» mehr (1E, Abschnitt 3).
- **Korrektur 1h:** `verstehen` 1591 → 1602 Wörter; je Abschnitt vor → nach 1h: `eisberg` 161 → 180 (Wörter im Bild, Frage, längere Kurzbeschreibung), `anspannung` 389 → 395 (Beschriftungen mit Punkt, «Es wird wieder ruhiger.»), `bewertungen` 236 → 235 (Momentaufnahmen statt Pendel), `mythen` 407 → 394 (keine Bezeichnung «Abbildung 4», keine Bildlegende). `grenzen` 1613 → 1601 (`dear` 246 → 234: «1» bis «4» statt «Schritt n von 4»). `beziehungen` 1564 wie vor 1h. Werte vor 1h am Stand `c9e0375` mit `--seiten`. Absicherungen `verstehen` 2,89 → 3,00: Die neuen Texte enthalten «kann» und «können» (Kurztext und Vertiefung von «Momentaufnahmen»), alles Wortlaut des Auftrags. Sätze mit Verneinung: `verstehen` 37 von 190 → 37 von 183, `grenzen` 42 von 195 wie vor 1h, `beziehungen` 33 von 167 → 33 von 169.
- **Korrektur 1g:** `verstehen` 1583 → 1591 Wörter (`anspannung` 381 → 389: zwei längere Sätze in Abbildung 2); `grenzen` 1621 → 1613 Wörter (`bruecke` 161 → 153: Abbildung 1 entfällt, dafür Abschnittstext). Werte vor 1g am Stand `325195d` mit `--seiten` gemessen. Absicherungen `grenzen` 2,28 → 2,60 je 100 Wörter: Der neue Abschnittstext enthält «kann» und «können» (zum Beispiel «Grenzen können Kontakt auf ähnliche Weise schützen», «Kontakt kann viel Nähe bedeuten», «… können mittragen»), dazu die Bezeichnung «Was Sie tun können:»; alles Wortlaut des Auftrags. `verstehen` 2,91 → 2,89. Sätze mit Verneinung: `verstehen` 37 von 190 wie vor 1g; `grenzen` 43 von 205 → 42 von 195 (`bruecke` 5 von 26 → 4 von 16).
- **Korrektur 1f:** `verstehen` 1456 → 1583 Wörter (+127, +9 %); je Abschnitt vor → nach 1f: Kopf und Kapitelübersicht 48 → 69, `erleben` 69 → 99, `borderline` 106 → 125, `eisberg` 143 → 161, `anspannung` 378 → 381, `bewertungen` 233 → 236, `mythen` 374 → 407 (drei Einordnungen in Abbildung 4), `einordnung` 105 → 105. `grenzen` 1554 → 1621 Wörter (+67, +4 %); Kopf und Kapitelübersicht 54 → 60, `erkennen` 140 → 158, `bruecke` 161 → 161, `arten` 144 → 144, `reihenfolge` 89 → 91, `dear` 246 → 246, `saetze` 163 → 167, `konsequenz` 118 → 143, `kontakt` 84 → 97, `rollen` 73 → 72, `gewalt` 282 → 282. Werte vor 1f am Stand `ee18daf` mit `--seiten` gemessen. Absicherungen `verstehen` 2,82 → 2,91 und `grenzen` 2,06 → 2,28 je 100 Wörter: Die drei Bezeichnungen «Was Sie tun können:» je Seite zählen als «können»; dazu kommen Sätze wie «Verstehen kann helfen, manches anders zu deuten …», «Solche Erfahrungen können das Risiko erhöhen.» oder «Wie die andere Person reagiert, können sie aber nicht garantieren.». Alles ist Wortlaut des Auftrags.
- **Sätze mit Verneinung auf `verstehen` und `grenzen`** (Korrektur 1f, Zählweise oben): `verstehen` Bestand 55 von 291 Sätzen (19 %), vor 1f 38 von 179 (21 %), nach 1f 37 von 190 (19 %); `grenzen` Bestand 75 von 389 (19 %), vor 1f 43 von 200 (22 %), nach 1f 43 von 205 (21 %). Die Zahl sinkt kaum. Viele neue Fassungen tragen die Verneinung in anderer Form weiter, zum Beispiel «Die Diagnose allein sagt nichts darüber, ob von einem Menschen Gefahr ausgeht.» statt «… erlaubt keine Aussage darüber …» oder «Verlässlich sein heisst nicht, starr zu sein.» statt «Verlässlichkeit bedeutet nicht Starrheit.». Ein Satz kommt mit Verneinung dazu (`rollen`: «… keine Frage von moralisch richtig oder falsch.»). Je Abschnitt und Satz: `node abgleich/verneinung.mjs --seite verstehen` und `--seite grenzen`.
- **Sätze mit Verneinung auf `beziehungen`** (Zählweise oben): Bestand 60 von 251 Sätzen (24 %); vor 1e (Stand `4bf98ab`) 31 von 127 (24 %); nach 1e 33 von 167 (20 %). Die Zahl der Sätze mit Verneinung ist also nicht gesunken (+2), ihr Anteil schon, weil die neuen Sätze meist ohne Verneinung sind. Die übrigen Seiten nach 1e: `index` 3 von 24, `verstehen` 38 von 179, `grenzen` 43 von 200.
- **Kurzbeschreibungen nicht mehr gezählt:** Sie stehen seit Korrektur 1d nur für Screenreader (D-2). Das sind 95 Wörter auf `verstehen`, 34 auf `beziehungen` und 20 auf `grenzen`.
- **Veränderung gegenüber Korrektur 1c** (1379 / 1198 / 1574, damals mit Kurzbeschreibungen):
  - `verstehen` 1461 sichtbare Wörter nach 1d; mit Kurzbeschreibungen wären es 1556, also +177. Davon `anspannung` +113 (neue Abbildung 2 mit Liste, Beispielen und Vertiefung, D-3, und «Was hilft» bei Stelle 2, 14 Wörter) und `einordnung` +66 (Bestand «Verstehen hat Grenzen» und Merksatz, D-4).
  - `beziehungen` 1164 (nach 1d) und `grenzen` 1554: nur die Kurzbeschreibungen fallen aus der Zählung, der sichtbare Text ist gleich.
- **Absicherungen auf `verstehen`:** 2,54 → 2,81 nach 1d, 2,82 nach 1e. Die neuen Texte aus D-3 und D-4 enthalten «kann», «können» und «könnten» (zum Beispiel «Anspannung kann im Gespräch ansteigen …», «… entschärfen könnten»); sie sind Wortlaut des Auftrags.
- **Quote:** Die Quote «Neu / alt» misst nicht, wie stark gekürzt wurde. Die alte Seite enthält Teile, die nach Etappe 2 gehen, und Meta-Text. Die zweite Prüfrunde hat deshalb einen vergleichbaren Kern berechnet (Belege b, Abschnitt 4).

**Bedienung (`node abgleich/bedienung.mjs`, Chromium, 10.10.2026, nach Korrektur 1h):** Tabstopps bei 1280 × 900 px mit Tab ab Seitenanfang. Seitenhöhe ist `document.documentElement.scrollHeight` bei 360 × 800 px, gemessen nach `load` und `document.fonts.ready`.

| Seite | Tabstopps ohne Fusszeile | Seitenhöhe bei 360 px | höchste Figur bei 360 px |
| --- | ---: | ---: | --- |
| `index` | 10 | 3863 px | – |
| `verstehen` | 18 | 16 071 px | Anspannungskurve 3282 px |
| `beziehungen` | 16 | 15 199 px | Zwei Sichten 2359 px |
| `grenzen` | 20 | 16 500 px | DEAR 1791 px |

Gegenüber Korrektur 1g (Korrektur 1h): `verstehen` hat einen Tabstopp weniger (die Vertiefung «Quellen» der Annahmen entfällt, die Quellen stehen als Zeile im Text) und ist bei 360 px 1643 px niedriger (17 714 → 16 071 px; die Annahmen sind eine Liste statt Karten, «Momentaufnahmen» ist kürzer als das Pendel). Die Anspannungskurve ist bei 360 px 3282 px hoch (vorher 3254 px). `beziehungen` ist 62 px höher (15 137 → 15 199 px; Stationen in drei Zeilen).

Gegenüber Korrektur 1f (Korrektur 1g): `grenzen` hat einen Tabstopp weniger (die Vertiefung «Grenzen des Bildes» der Brücke entfällt) und ist bei 360 px 395 px niedriger (16 895 → 16 500 px). `verstehen` ist 163 px höher (17 551 → 17 714 px; Abbildung 2 bei 360 px 3254 px statt 3092 px, längere Sätze bei Stelle 1 und 3).

Gegenüber Korrektur 1e (Korrektur 1f, Werte vor 1f am Stand `ee18daf` mit demselben Skript nachgemessen): gleiche Tabstopps, 1f bringt keinen neuen Link. `verstehen` ist bei 360 px 697 px höher (16 854 → 17 551 px; längerer Text, drei Absätze «Was Sie tun können», Abbildung 4 3714 → 3975 px), `grenzen` 482 px höher (16 413 → 16 895 px; längere Abschnitte 01, 07 und 08, `rollen` als Begriffsliste).

Gegenüber Korrektur 1d (Korrektur 1e): `beziehungen` hat einen Tabstopp mehr (Link «Beratung der Fachstelle Angehörigenarbeit» in `verantwortung`) und ist bei 360 px 2400 px höher (12 737 → 15 137 px, längerer Text); `verstehen` ist 100 px niedriger (Stelle 2 ohne «Was hilft»).

Gegenüber Korrektur 1c (Korrektur 1d): Die Kurzbeschreibungen der Bildlegenden sind nicht mehr sichtbar (alle Seiten mit Figuren niedriger), die Fusszeile ist länger (neuer Zuständigkeitsverweis, auf `index` +24 px), auf `verstehen` kommen Abbildung 2 neu und Abschnitt 07 mit Merksatz dazu.

Die Fusszeile hat keinen Tabstopp. Die früher berichteten 40 Tabstopps auf `grenzen` waren falsch gezählt (F-K-03). Der letzte Tabstopp auf `grenzen` ist der Link «Opferhilfe Schweiz» (K-1).

**Seitenhöhen (R3-K-01):** Die Werte der Selbstprüfung 1b (3848 / 15 593 / 12 236 / 16 293 px) waren vor dem Laden der Webschriften gemessen. Das Skript wartet seit Korrektur 1c auf `load` und `document.fonts.ready`. Am Stand `242a74b` ergibt es so die Werte der dritten Prüfrunde (3839 / 15 593 / 12 342 / 16 521 px). Die Zunahme seither auf `verstehen` und `beziehungen` kommt von K-8 (Überschriften, «Was hilft» und Ansatzpunkte in Seitenschrift), dazu auf `beziehungen` von den Sätzen aus K-2 bis K-5 und auf `verstehen` vom Satz in der Textfassung des Pendels (K-7).

**Pfeile der Bedeutungsschleife** (gleiches Skript; Abstand der Pfeilspitze, Marker eingerechnet, zum Rand des Zielkastens / Abstand des Pfadanfangs zum Ausgangskasten, in CSS-Pixeln):

| Fensterbreite | 1 → 2 | 2 → 3 | 3 → 4 | 4 → 5 | 5 → 1 |
| ---: | --- | --- | --- | --- | --- |
| 1440 px | 28,6 / 13,9 | 35,3 / 20,3 | 8,3 / 12,8 | 10,3 / 8,6 | 9,4 / 11,9 |
| 1280 px | 28,6 / 13,9 | 35,3 / 20,3 | 8,3 / 12,8 | 10,3 / 8,6 | 9,4 / 11,9 |
| 768 px | 28,6 / 13,9 | 35,3 / 20,3 | 8,3 / 12,8 | 10,3 / 8,6 | 9,4 / 11,9 |
| 720 px | schmale Liste, keine Pfeile im Bild | | | | |

Seit Korrektur 1h ist die Kreisanordnung bis 640 px breit (vorher 600 px): Mit dem Beispielsatz in Seitenschrift sind die Felder höher, und bei 600 px begann der Pfeil 4 → 5 im Feld von Station 4 (gemessen −1,8 px). Bei 1440, 1280 und 768 px ist sie 640 px breit; deshalb sind die Werte gleich. Unter 700 px Containerbreite (vorher 660 px) gilt die Liste ohne Pfeile im Bild; bei 720 px Fensterbreite ist das der Fall. Die Pfeilspitzen liegen 8 bis 35 px vor dem Zielkasten, die Anfänge 9 bis 20 px nach dem Ausgangskasten.

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
| «Was hilft» bei Stelle 2 (überholt durch Korrektur 1e, Abschnitt 3) | Der Auftrag sah dort nur den Ansatzpunkt vor; der frühere Satz entfiel zuerst und war als Prüfbedarf gemeldet. Auf Entscheid der Fachstelle steht wieder «Was hilft: Argumentieren Sie nicht weiter, sprechen Sie langsamer und machen Sie weniger Druck.» vor dem Ansatzpunkt | Entscheid der Fachstelle, 09.10.2026 (Chat); `verstehen.md`, Prüfbedarf 9 |
| Abschnitt 07 | Bestand «Verstehen hat Grenzen» wörtlich, Merksatz als `div.puk-longform__reflection` | D-4 |
| Selbsttest-Kopie | `tools/selftest/` der Website wie im Starter nachgezogen (vier Dateien aus dem Profil-Update); Selbsttest 50/50 | Profil-Update 2026-10-09b |
| `kennzahlen.mjs` | Text nur für Screenreader (`.puk-sr`) zählt nicht als sichtbares Wort | D-2 |

## Korrektur Etappe 1e: Entscheide der Aufträge und Umsetzung (09.10.2026)

Grundlage: fachliche Durchsicht von `beziehungen` durch die Fachstelle (Chat, 09.10.2026), `KORREKTUR-ETAPPE-1E.md`. Die Zeile «Was hilft» bei Stelle 2 der Tabelle zu Korrektur 1d ist damit überholt.

| Thema | Umsetzung | Quelle |
| --- | --- | --- |
| `beziehungen` in einfacher Sprache | alle Texte von Kopf und Abschnitt 01 bis 06 im Wortlaut des Auftrags; unverändert: Oberzeile, H1, Seitentitel, Abbildung 1 ausser Kurztext und Text des Ansatzpunkts, Abbildung 2, Quellenliste | `KORREKTUR-ETAPPE-1E.md`, Abschnitt 1, 2 und 4 |
| «Was Sie tun können» | 8 Absätze `<p><strong>Was Sie tun können:</strong> …</p>`: 01, 04 und 06 im Fliesstext, in 03 je als zweiter Absatz im `dd` (fünf Einträge); kein neues CSS. Gemessen: Absätze im `dd` 21 px wie der Fliesstext, 20 px Abstand darunter | Abschnitt 2 |
| Bezeichnungen | Kicker 01 «Was verbindet», 03 «Was Reaktionen verschärfen kann», 05 «Was helfen kann»; Titel 03 «Was den Spielraum zwischen Anlass und Reaktion verengen kann», 05 «Was die Beziehung stärken kann»; Station 5 «Wenn es bei anderen besser klappt»; Kapitelübersicht wie die Kicker. Die Bezeichnungen stehen nicht in der Tabelle, weil sie keine Sätze sind; bis 1d hiessen sie «Ressourcen», «Einflüsse», «Handlungsspielraum», «Was den Spielraum zwischen Ereignis und Reaktion verengen kann», «Was Verbindung tragfähiger machen kann» und «Dass etwas anderswo gelingt, beweist weder Täuschung noch Ursache» | Abschnitt 4 |
| Links | Ziele wie bisher: `verstehen.html#anspannung`, `#bewertungen`, `grenzen.html#gewalt`; neu `index.html#beratung` in `verantwortung`, gleiche Form wie auf `grenzen` › `kontakt` | Abschnitt 4 |
| Verweis im Text | `<p data-responsibility-inline></p>` unverändert direkt nach «… Dann braucht es eine fachliche Einschätzung.» | Abschnitt 4 und 5 |
| W1-7 | «alle Regulation übernehmen» wird auf dieser Seite «alle schwierigen Gefühle auffangen»; die Fachstelle prüft das beim Lesen | Abschnitt 2 |
| `verstehen`, Abbildung 2, Stelle 2 | Ansatzpunkt «Argumentieren Sie nicht weiter und machen Sie weniger Druck. Senken Sie Ihr eigenes Tempo, achten Sie auf Ihre eigene Anspannung und bieten Sie eine Pause an. Sie müssen die andere Person nicht beruhigen.»; kein eigenes «Was hilft». Die Fassung aus 1d mit «Was hilft» war schon umgesetzt; auf Rückfrage in der bauenden Sitzung am 09.10.2026 ist die Fassung aus 1E gewählt | Abschnitt 3 |
| `visualPlan` | Abschnittsnamen und Ziele von 01, 03, 05 an die neuen Bezeichnungen angeglichen; Zitate aus Kurztext und Ansatzpunkt der Schleife im neuen Wortlaut; Stelle 2 der Anspannungskurve ohne «Was hilft» | Abschnitt 3 und 4 |
| Abgleich | neue Statuswerte «umformuliert (einfache Sprache, 1e)» und «neu (1e)» (oben); 62 Bestandszeilen auf `beziehungen` und 9 auf `verstehen` umformuliert, 16 Zeilen ohne Bestandssatz angehängt | Abschnitt 2 |
| `verneinung.mjs` | zählt Sätze mit Verneinung alt und neu (oben) | Abschnitt 5 |


## Korrektur Etappe 1f: Entscheide der Aufträge und Umsetzung (09.10.2026)

Grundlage: `KORREKTUR-ETAPPE-1F.md`. Die Fachstelle hat `beziehungen` in der Fassung von 1e gelesen und gutgeheissen; `verstehen` und `grenzen` werden auf dieselbe Weise überarbeitet (1F, Abschnitt 1).

| Thema | Umsetzung | Quelle |
| --- | --- | --- |
| `verstehen` in einfacher Sprache | Einleitung im Kopf, Abschnitte 01 bis 05 und drei Einordnungen in Abbildung 4 im Wortlaut des Auftrags; unverändert: Oberzeile, H1, Seitentitel, Wegweiser, Abbildungen 1 bis 3, Abschnitt 06 ausser den drei Einordnungen (mit dem Suizid-Absatz), Abschnitt 07, alle Quellenzeilen | Abschnitt 1 und 3 |
| `grenzen` in einfacher Sprache | Einleitung und Hinweis im Kopf, Abschnitte 01, 03, 04 und 06 bis 09 im Wortlaut des Auftrags; unverändert: Oberzeile, H1, Seitentitel, Wegweiser, Abschnitt 02 mit Abbildung 1, Abschnitt 05 mit Abbildung 2, der ganze Abschnitt 10 «Schutz», alle Quellenzeilen | Abschnitt 1 und 3 |
| «Was Sie tun können» | je drei Absätze `<p><strong>Was Sie tun können:</strong> …</p>`. `verstehen`: 01 und 03 im Fliesstext, 05 als eigener Absatz vor der Liste. `grenzen`: 01 vor der unveränderten Liste, zusammen mit dem Satz «Diese Fragen helfen, eine Grenze zu finden:», wie im Auftrag; 07 und 08 im Fliesstext. Auf diesen Seiten steht kein «Was Sie tun können» in einem `dd`. Kein neues CSS | Abschnitt 2 |
| Bezeichnungen | `grenzen` › `rollen` ist eine Begriffsliste (`dl`) mit «Partnerin oder Partner», «Eltern eines erwachsenen Kindes» und «Erwachsenes Kind», danach ein Absatz. `verstehen`, Abbildung 4, Einordnung zu Annahme 3: «Angehörige sind nicht die Ursache der Erkrankung und nicht für die Genesung verantwortlich.» Kicker, Titel und Kapitelübersicht bleiben auf beiden Seiten gleich | Abschnitt 3 |
| Links | keine neuen und keine geänderten Ziele; der Link «Beratung der Fachstelle Angehörigenarbeit» in `grenzen` › `kontakt` und der Link im Hinweis des Kopfs (`#gewalt`) bleiben | Abschnitt 3 |
| Verweis im Text | `<p data-responsibility-inline></p>` unverändert auf `verstehen` › `mythen` (nach dem Suizid-Absatz) und auf `grenzen` › `gewalt`, je mit demselben Satz davor | Abschnitt 1 und 4 |
| Frühere Wortlaute | ersetzt an denselben Stellen: Korrektur 1b, B-1 (`grenzen` › `erkennen` und `rollen`), B-4 (Annahme 5 «weder notwendig noch hinreichend», Annahme zu Frauen «signifikanten»); die übrigen Wortlaute aus B-3 und B-4 stehen unverändert | Abschnitt 2 |
| `visualPlan` | `v-gr-kontakt`: Zitat in der Begründung im neuen Wortlaut («Die Beziehung zu erhalten, ist kein Ziel, das Sie erreichen müssen.»); `v-gr-rollen`: Begründung nennt die Begriffsliste. Übrige Zeilen unverändert | Abschnitt 3 |
| Abgleich | neue Statuswerte «umformuliert (einfache Sprache, 1f)» und «neu (1f)» (oben); 50 Bestandszeilen auf `verstehen`, 62 auf `grenzen` und 3 auf `beziehungen` umformuliert, 4 Zeilen ohne Bestandssatz angehängt; Bemerkungen von 2 Zeilen auf `beziehungen` (Nr. 154, 155: Zitat aus Annahme 3) und 4 auf `grenzen` (Nr. 240, 256, 257, 594) nachgeführt, ohne Änderung des Status. Nr. 17 auf `verstehen` war bis 1e zu Unrecht «entfällt» (Prüfbedarf 14 in `verstehen.md`) | Abschnitt 2 |
| Messungen | Wörter und Sätze mit Verneinung vor und nach 1f (oben, «Korrektur 1f»); Bedienung (oben) | Abschnitt 4 |

## Korrektur Etappe 1g: Entscheide der Aufträge und Umsetzung (10.10.2026)

Grundlage: `KORREKTUR-ETAPPE-1G.md`. Die Fachstelle hat `verstehen` und `grenzen` nach 1f gelesen und ist bis auf zwei Stellen einverstanden (1G, Abschnitt 1).

| Thema | Umsetzung | Quelle |
| --- | --- | --- |
| `verstehen`, Abbildung 2 | Stelle 1 und 3: erster Satz im Wortlaut des Auftrags («Wenn die Anspannung niedriger ist, kann es leichter fallen, …», «Dann kann es vorübergehend schwerfallen, …»); sonst ist die Abbildung unverändert | Abschnitt 3 |
| `grenzen`, Abschnitt 02 | Abbildung «Die Brücke mit Geländer» entfällt ganz (Entscheid der Fachstelle, 10.10.2026), ebenso der bisherige Abschnittstext. Neu: H2 «Kontakt halten, ohne immer verfügbar zu sein», vier Absätze, «Was Sie tun können» mit zwei Beispielsätzen aus dem Handout, Quellenzeile «Bezugspunkte: …». Kicker, Eintrag im Wegweiser und `id="bruecke"` bleiben | Abschnitt 1 und 3 |
| DEAR | «Abbildung 1 · DEAR in vier Schritten»; ältere Bemerkungen im Abgleich nennen sie Abbildung 2 | Abschnitt 3 und 4 |
| `visualPlan` › `v-gr-bruecke` | `format` «text», `statement`, `source` und `alternative` «–», ohne `understood`, `reason` im Wortlaut des Auftrags, `approvalStatus` «ausstehend». Das Gate zählt eine Visualisierung weniger (Hinweise 22 → 21, Produktionsgate 21 → 20 blockierend) | Abschnitt 3 |
| `borderline.css` | entfernt: alle Regeln mit `.bl-fig--bruecke`, `.bl-fig__narrow{display:none}` und der Kommentar zur Brücke; `bl-fig__wide` und `bl-fig__narrow` kamen vorher nur auf `grenzen` vor. `.bl-fig__label` und `.bl-parts` bleiben (`verstehen`). Die Media Query behält ihre Regeln für Pendel und Kurve. Im Sammelkommentar zu Muster A ist die Brücke gestrichen | Abschnitt 3 |
| Abgleich | neuer Status «umformuliert (einfache Sprache, 1g)» (oben). `verstehen`: Nr. 236 und 238 umformuliert, Nr. 273, 285, 286 und 426 mit neuer Fassung. `grenzen`: Nr. 390 bis 432 nach der Tabelle des Auftrags (16 umformuliert, Nr. 405 gekürzt, Nr. 418, 421 und 422 übernommen, die übrigen mit neuem Ort); Nr. 408 bis 412 bleiben «entfällt». Nicht im Auftrag genannt: `verstehen` Nr. 455 (Ort `grenzen#bruecke`) nennt den neuen Ort in der Bemerkung, Status und Fassung unverändert | Abschnitt 4 |

## Korrektur Etappe 1h: Entscheide der Aufträge und Umsetzung (10.10.2026)

Grundlage: `KORREKTUR-ETAPPE-1H.md` (Entscheide der Fachstelle zum Bildsprache-Audit, 10.10.2026) und Entscheide auf Rückfrage in der bauenden Sitzung am 10.10.2026.

| Thema | Umsetzung | Quelle |
| --- | --- | --- |
| Profil-Update r4-6 | `main` zusammengeführt; aus dem Starter `tools/contract.js`, `tools/selftest/site.config.json`, `tools/selftest/README.md` und (auf Rückfrage) `gate.html`, `README.md`; `assetVersion` r4-6; Selbsttest 52/52 | Abschnitt 3 |
| Eisberg | neue Zeichnung und Wörter im Eisberg im Wortlaut des Auftrags, Frage «Wie ist es gerade für dich?»; Wörter in `type-body-sm`, weil «Vorwürfe» in `type-body` bei 1280 px den Umriss berührte. Schmale Darstellung schon unter 800 px Containerbreite (Auftrag: 560 px), weil darunter Wörter über den Umriss ragten | Abschnitt 4 |
| Anspannungskurve | Beschriftungen mit Punkt, Stelle 4 «Es wird wieder ruhiger.»; Beschriftungen an der Kurve erst ab 800 px Containerbreite, weil die längere Beschriftung sonst aus der Figur ragte | Abschnitt 4 |
| Momentaufnahmen | ersetzt das Pendel, Zeichnung und Texte im Wortlaut des Auftrags; vorläufig `data-visual-type` und Planformat «figure» statt «illustration», weil das Gate r4-6 eine eigene SVG-Zeichnung als Illustration nicht zulässt (Entscheid auf Rückfrage) | Abschnitt 4 und 7 |
| Annahmen | keine Abbildung mehr; Kernaussage und Kurztext als Absätze, sieben Paare als Begriffsliste, Quellen als Zeile; die Liste steht vor dem Zwischentitel «Wenn Sie sich wegen Suizid sorgen», damit sie nicht unter diesem Titel steht; Suizid-Absatz und Verweis im Text unverändert | Abschnitt 4 |
| Bedeutungsschleife | je Station drei Zeilen; Felder mit `radius-md` (Entscheid auf Rückfrage nach Audit BS-4, Variante B; Karten-Token wäre `radius-none`); Kreisanordnung bis 640 px, Liste unter 700 px (Pfeile oben) | Abschnitt 5 |
| Zwei Sichten, DEAR | gleiche Oberkante für beide Sichten (Klasse `puk-vis-compare__col--b` entfällt); DEAR mit «1» bis «4» | Abschnitt 5 und 6 |
| `visualPlan` | `resonance` für die sechs Darstellungen; Einträge Eisberg, Momentaufnahmen und Annahmen im Wortlaut des Auftrags | Abschnitt 7 |
| Abgleich | neue Statuswerte «umformuliert (Bildsprache, 1h)» und «neu (1h)», «verschoben» auch für Sätze in die Vertiefung (oben); `verstehen` 21 Zeilen, `beziehungen` 5 Zeilen, 4 Zeilen ohne Bestandssatz. Nr. 74 («Zwischen den beiden Listen besteht keine Zuordnung.») entfällt: Die Kurzbeschreibung im Wortlaut von 1H nennt das nicht mehr | Abschnitt 8 |
