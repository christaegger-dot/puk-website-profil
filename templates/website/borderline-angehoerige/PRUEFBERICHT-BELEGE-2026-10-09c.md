# Prüfbericht, Belege · Borderline – Orientierung für Angehörige · Etappe 1, dritte Prüfrunde

**Prüfsitzung:** Prüfung 2 der dritten Prüfrunde, unabhängige Sitzung (Claude), hat die Website nicht gebaut und kennt keine früheren Prüfungen. Keine Änderung an Inhalten oder Code. Keine fachliche Freigabe.
**Datum:** 09.10.2026.
**Geprüfter Stand:** Netlify-Vorschau `deploy-preview-10`, Seiten `index`, `verstehen`, `beziehungen`, `grenzen`. Der Inhalt von `<main>` der Live-Seiten ist mit `e3/content/*.html` identisch (Skript `scripts/cmp_live.py`; verglichen ohne Linkziele und mit eingesetztem Verweis im Text). `borderline.css` live = `e3/borderline.css`.

Zusammenfassung und Abgleich mit Prüfung 1: `PRUEFBERICHT.md`, Abschnitt «Dritte Prüfrunde». Die Arbeitsdateien dieser Prüfung (Skripte, Bildschirmfotos, Messdaten) lagen in der Prüfsitzung und sind nicht Teil des Repositorys. Mit `e2/` und `e3/` sind die Stände vor und nach der Korrektur 1b gemeint.

**Methode**

- Korrekturauftrag: Zitate per Skript gegen den gebauten Seitentext und gegen den Bestand geprüft (`scripts/pruefe_auftrag.py`, Ergebnis `pruefe_auftrag.txt`).
- Kürzungen: Satz- und Wortdiff e2 → e3 je Abschnitt (`scripts/diff_e2_e3.py`, `scripts/worddiff.py`; Ergebnisse `diff_e2_e3.txt`, `worddiff.txt`), jede entfallene Stelle gegen Bestand und Abgleich geprüft.
- W1-Stichprobe: 32 Aussagen, von Hand mit `bestand/texte/*.md` verglichen.
- Abgleich: 30 Zeilen per Zufall, Seed **20261009** (`scripts/stichprobe_abgleich.py`, Ergebnis `stichprobe_abgleich.txt`). Prüfskript der bauenden Sitzung gegen die Live-Seiten ausgeführt.
- Visualisierung: 48 Bildschirmfotos (8 Figuren × 1280/768/360 px × Standard/«kontrast»), dazu Nahaufnahmen und Messungen der Schleife (`scripts/figuren.mjs`, `scripts/schleife.mjs`, `scripts/pfeile.mjs`; Bilder in `shots/`).
- Kennzahlen: eigenes Zählskript nach der Zählweise in `abgleich/README.md` (`scripts/kennzahlen.py`); Bedienskript der bauenden Sitzung zusätzlich gegen den Live-Stand ausgeführt.
- Bedienung: axe-core 4.10.2, Playwright/Chromium (`scripts/bedienung.mjs`, Ergebnis `bedienung.json`; `scripts/fokus.mjs`, `scripts/text200.mjs`).
- Vorlagen: Skripte aus `review4/scripts/` kopiert nach `scripts/vorlage-review4/` und angepasst.

**Grenzen der Prüfung**

- Kein Screenreader, keine Hardwaretastatur, kein Touch. Automatisierte Prüfungen ersetzen Stufe 5 nicht.
- Linkziele: Die Dateien in `e3/content/` enthalten bereits umgeschriebene Pfade (`/…/content/beziehungen`). Linkziele sind daher nur eingeschränkt beurteilbar. Geprüft: Sprungziele auf den Seiten und Abschnitts-IDs der Zielseiten existieren.
- `e3/tools/` ist leer, `abgleich/kennzahlen.mjs` fehlt. Das Prüfskript lief mit `contract.js` des Starters r4-4 (identisch mit `e2/tools/contract.js`).
- Die Opferhilfe-Adresse wurde nicht aufgerufen (Auftrag: nur feststellen).
- Fachliche Fragen sind als «Prüfbedarf» markiert. Fachliche Freigaben trägt nur die Fachstelle ein.

---

## 0 Zusammenfassung

- **Korrekturauftrag:** 15 von 20 Punkten umgesetzt, 3 teilweise (C-2, E, F), 1 nicht (A-4, begründet), 1 umgesetzt mit Nebenwirkung (B-2). Alle zitierten Sätze stehen wörtlich auf der Seite (Skript: 63 von 63 Prüfstellen; der Linktext «Opferhilfe Schweiz» nur in den Bezugspunkten, nicht als Link).
- **Sicherheit:** Der Verweis im Text steht dreimal, wortgleich, im Fliesstext, nicht in Figur oder Vertiefung. Keine Telefonnummer, kein `tel:`-Link. Der Opferhilfe-Link fehlt (A-4, festgestellt).
- **Schwerster Punkt der Kürzungen:** Auf `beziehungen` › Station 4 folgt die Dissoziation jetzt direkt auf den Wechsel von Nähe und Rückzug. Der Satz, auf den sie sich bezog, ist für den Richtwert entfallen (R3-W1-01).
- **Schwerster Punkt der Figuren:** Die Pfeilspitze 4 → 5 der Schleife liegt 7,2 px im Kasten von Station 5 und ist verdeckt. C-2 ist nicht erfüllt; die Selbstprüfung meldet das Gegenteil (R3-V-01).
- **Kennzahlen:** Wörter, Absicherungen, Semikolons und Tabstopps stimmen. Seitenhöhen bei 360 px weichen ab (bis +228 px).
- **Bedienung:** axe 0 Verstösse in beiden Themes. Kein Überlauf bei 320–1440 px und bei 200 % Zoom.
- **Befunde:** 0 schwer, 2 mittel, 15 leicht.

---

## 1 Korrekturauftrag je ID

Beleg «Skript» = `pruefe_auftrag.txt` (Satz wörtlich im genannten Abschnitt der Live-Seite).

| ID | Stand | Beleg |
| --- | --- | --- |
| A-1 | umgesetzt | `verstehen` › `mythen`: Reihenfolge 1–5 wie verlangt (HTML und `bedienung.json` › `inline`: vorher «… Das kann helfen, die Lage zu verstehen.», nachher «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.»). «Auch die Sorge …» 0 Treffer. Abb. 4: «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.»; Quelle «WHO, Suicide: Questions and answers (2026)» in der Vertiefung. Skript: alle Teile ja. |
| A-2 | umgesetzt | `verstehen` › `anspannung`: Abschnittstext endet mit «Bei Gefahr hat Schutz Vorrang.» (Bestand `verstehen.md` Z. 131, wörtlich). «Bei Gefahr haben Abstand, Schutz …» 0 Treffer. Kein Verweis im Text in `anspannung`. Folge: siehe R3-W1-06. |
| A-3 | umgesetzt | `grenzen` › `gewalt`, Schritt 2: «Bei akuter Gefahr oder Unsicherheit: Bringen Sie sich in Sicherheit und holen Sie Hilfe.» → Verweis im Text → «Sie müssen die Dringlichkeit nicht allein einschätzen.» (`bedienung.json` › `inline.grenzen`). |
| A-4 | nicht umgesetzt (festgestellt) | Kein Link mit «opferhilfe» auf der Seite (`misc.grenzen.opferhilfeLink` = 0). Keine Nummer. «Unterstützung gibt es auch für Männer, Angehörige und Vertrauenspersonen.» steht. Begründung der bauenden Sitzung: Adresse in ihrer Umgebung gesperrt (`PRUEFBERICHT.md`, `abgleich/README.md`). Folge für Lesende: Schritt 4 nennt die Opferhilfe ohne Zugangsweg; der Bestand verwies auf eine Seite (`grenzen.md` Z. 482). Offen für die Fachstelle. |
| A-5 | umgesetzt | Abb. 2 `grenzen`, Kurztext wörtlich wie verlangt; zweiter Satz wörtlich im Bestand (`grenzen.md` Z. 316). Das Beispiel «… die Stelle, die wir für Krisen abgemacht haben» hat damit einen Bezug. |
| B-1 | umgesetzt | Alle vier Sätze wörtlich an der verlangten Stelle (Skript). «Sie beweisen keine Grenzverletzung.» und «Ein Signal sagt nicht automatisch …» wörtlich im Handout `grenzen-erkennen` Z. 15 und 37. «Das Erleben … dennoch real.» und «Aus dem Wechsel allein …» stehen im Bestand klein nach Semikolon (`verstehen.md` Z. 68, 70); sonst wörtlich. |
| B-2 | umgesetzt, mit Nebenwirkung | Station 3: «Im Konflikt kann …» vor «Frühere Zuneigung war deshalb nicht automatisch unecht.» Station 4: drei Sätze wörtlich; Absprache 0 Treffer, im Abgleich Nr. 115 für `rolle` (Etappe 2). Station 5: Titel und Satz wörtlich (Bestand `verstehen--beziehungen.md` Z. 253, 261). Nebenwirkung: R3-W1-01. |
| B-3 | umgesetzt | Alle sechs Stellen (Skript): Eisberg «… nicht sicher ablesen.»; Denk-Modus «können leichter fallen»; Alarm-Modus «können vorübergehend schwerer werden»; Pendel «Unter starker Anspannung kann …»; `beziehungen` «Ob dies im Einzelfall zutrifft, bleibt offen.» nach dem Satz zur Kritik (wie Bestand Z. 247); `grenzen` «Viele Veränderungen gleichzeitig können überfordern.» |
| B-4 | umgesetzt | `reihenfolge`: vier Punkte «Dringend und emotional hoch» … «Langfristig und emotional niedrig» wie im Raster `grenzen.md` Z. 226–254; «genügt oft» 0 Treffer. Annahme 2, DEAR E und R, Dranbleiben, «unter anderem», «In klinischen Studien», «teils keine signifikanten Unterschiede» wörtlich (Skript). |
| C-1 | umgesetzt | Zwei Bögen, kurzer dünn «kleinerer Ausschlag», langer «unter starker Anspannung grösserer Ausschlag», beide mittig beschriftet; Lagen am Ende des langen Bogens (`shots/v-vs-bewertungen-1280.png`, `pendel-zeichnung-768`). Liste «Links/Mitte/Rechts» mit Erklärsätzen aus Handout `spaltung` Z. 37, 41, 45 in allen Breiten (`-360.png`). Unter 560 px nur die Beschriftungen im Bild weg. Keine gestrichelte Linie. Mängel: R3-V-02, R3-V-03. |
| C-2 | teilweise | Kurztext mit «kann … werden» und Bestandssatz Z. 155 (Skript). **Pfeilspitze 4 → 5 bei 1280 und 768 px nicht sichtbar:** Pfadende 7,2 px im Kasten Station 5 (`pfeile.txt`, `shots/zoom-schleife-45-1280-detail.png`). Bei 360 px Liste statt Pfeil (anders als verlangt, zulässig nach Leitlinie 07). R3-V-01. |
| C-3 | umgesetzt | «Zu Station 1 und 2 · Absage», «Zurück zu Station 1 · Gespräch endet», «Sicht der betroffenen Person», «Sicht der Schwester» (Skript). Schmal je Schritt beide Sichten nacheinander (`shots/v-bz-sichten-360.png`). «Zwei Spalten» 0 Treffer; Legende «Vier Schritte aus Abbildung 1, je mit beiden Sichten.» Absicherung: R3-W1-03. |
| C-4 | umgesetzt | Alle Kurztexte zwei bis drei Sätze. Anspannung: Satz des Auftrags plus «Sie sind kein validiertes Messinstrument …» (Handout `anspannungskurve` Z. 27). Annahmen getauscht. Eisberg: Bestandssatz Z. 111 wörtlich. Zwei Sichten: zweiter Satz aus Bestand Z. 199. «Eine gleitende Achse» 0 Treffer. Hinweis: Die Kernaussage «Borderline ist behandelbar, und Angehörige sind nicht schuld.» steht so nicht im Bestand; sie fasst Z. 177 und 185 zusammen («beides Bestand» im Auftrag ist sinngemäss, nicht wörtlich). |
| C-5 | umgesetzt | Unter 560 px eigene Zeichnung, alle fünf Teile im Bild beschriftet, bei 360 und 320 px (`shots/v-gr-bruecke-360.png`, `bruecke320-pendel768.png`). Kurztext «Sie müssen die Brücke nicht allein tragen.» (Handout Z. 27, erster Satzteil). |
| D-1 | umgesetzt | «Viele Angehörige schwanken …», «Eine Grenze kann Nähe und eigenen Raum nebeneinander ermöglichen.» (Skript). «perfekte» 0 Treffer. Prüfbedarf: R3-W1-02. |
| D-2 | umgesetzt | DEAR D und A, Ansatzpunkte («Senken Sie Ihr eigenes Tempo …», «Statt sich weiter zu verteidigen, können Sie …») und «Was hilft» («Kurze Sätze, Zuhören und Absprachen helfen: …») in ganzen Sätzen. Stationsbeispiele 3 und 4 bleiben Stichworte («Angst, Verletzung oder Wut») – als Beschriftung vertretbar. |
| D-3 | umgesetzt (Auslegung) | Erster Eintrag Station 2 hat drei Sätze; «Benennen Sie das Verhalten konkret:» steht. Station 2 hat aber zwei Einträge mit zusammen sechs Sätzen und einem Beispiel (R3-S-01). Verschobenes steht im Abgleich Nr. 100–105. |
| D-4 | umgesetzt | «Ob ein klärendes Gespräch gewünscht ist, entscheiden beide.»; «Vier Arten» je Erklärsatz aus Handout `4-arten-von-grenzen` und Beispiel; «Stress» nur im Quellentitel «WHO, Stress: …»; «inneres Warnsignal» (Skript). |
| E | teilweise | Je Seite eine Tabelle. Prüfskript reproduziert: **1672 Zeilen, 0 ohne Fundstelle.** README nachgeführt (Brücke, Opferhilfe, Annahme 6, «nur»). Mängel: `kennzahlen.mjs` fehlt (R3-K-02); Bestandsteil fehlt (R3-K-03); Zuordnungen teils ungenau (R3-K-04); Plan nicht nachgeführt (R3-K-05); Messwerte weichen ab (R3-K-01). |
| F | teilweise | `.bl-cycle__who` entfernt. Seitenschrift nur für drei Elementgruppen; Kurztexte, Listen, «Was hilft», Ansatzpunkte und DEAR bleiben 15 px (R3-V-04). Zweimal `2px` statt Token (R3-B-01). |

---

## 2 Kürzungen dieser Runde (e2 → e3)

Wortzahl des Seiteninhalts (ohne Verweis im Text) e2 → e3: `verstehen` 1277 → 1338, `beziehungen` 1088 → 1131, `grenzen` 1486 → 1548. Netto kam Text dazu; für den Richtwert wurde an anderer Stelle gekürzt. Alle entfallenen Stellen aus `worddiff.txt`:

| Nr. | Seite › Ort | Entfallen (e2) | Bestand | Wirkung | Im Abgleich? | Bewertung |
| --- | --- | --- | --- | --- | --- | --- |
| K1 | `verstehen` › `eisberg` | «Scham ist oft schwer auszusprechen und kann sich als Rückzug, Selbstentwertung oder Abwehr zeigen.» | `verstehen.md` Z. 95 | Bestandsaussage entfällt; Scham bleibt als Begriff in Text und Abb. 1 | ja, Nr. 62, 63, 181 | vertretbar |
| K2 | `verstehen` › `eisberg` | Frage «Welche aktuellen Lebensumstände wirken mit?» | Z. 107 | Äussere Umstände als Erklärung fehlen; «Welche anderen Erklärungen …» deckt teilweise | ja, Nr. 71 | vertretbar |
| K3 | `verstehen` › `anspannung`, Vertiefung | «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» | Handout `alarm-modus`; `zustands-landkarte` | Auftrag A-2. «professionelle Hilfe holen» steht nicht mehr auf der Seite | ja, Nr. 246, 343 als «zusammengeführt» | R3-W1-06 |
| K4 | `verstehen` › Abb. 2, Kurztext | «Eine gleitende Achse: Die Bereiche sind Orientierung, keine Stufen, …» | `zustands-landkarte` | Auftrag C-4; «ineinander über» trägt die Aussage | ja, Nr. 325 | in Ordnung |
| K5 | `verstehen` › Abb. 3, Kurztext | «Die differenziertere Sicht ist kein Mittelwert: …» | kein Bestandssatz | Liste trägt «gleichzeitig wahr»; Plan nennt «kein Mittelwert» weiter | nicht nötig | R3-K-05 |
| K6 | `verstehen` › `einordnung` | Merksatz (zwei Sätze) | Z. 167 | «Es bedeutet nicht, alles auszuhalten.» trägt Teil 2 sinngemäss | ja, Nr. 106, 107 | vertretbar; Plan veraltet (R3-K-05) |
| K7 | `verstehen` › `mythen` | «Auch die Sorge, …», «weder Suizidgedanken noch» | – / Z. 197 | Auftrag A-1 | – | in Ordnung |
| K8 | `beziehungen` › `verbindung` | Listenpunkt «Unterschiede, die stehen bleiben dürfen» | Z. 76–77 | Aussage fehlt auf der Website (auch «Unterschiedlichkeit aushalten» erst Etappe 2) | ja, Nr. 39 | R3-W1-05 |
| K9 | `beziehungen` › `verbindung` | «Niemand «handhabt» den anderen.» | Z. 81 | Haltungsaussage gegen ein «Handhaben» der betroffenen Person fehlt | ja, Nr. 45 | R3-W1-05 |
| K10 | `beziehungen` › Station 2 → `zwei-sichten` | Vermutungen, Empathie (verschoben) | Z. 193–201 | Bedeutung bleibt; Bestand hatte dafür einen eigenen Punkt. Prüfbedarf 2 der bauenden Sitzung: aus Sicht dieser Prüfung tragbar | ja, Nr. 100–105 | in Ordnung |
| K11 | `beziehungen` › Station 4 | «Plötzliche Entfernung hat nicht nur eine Erklärung.» | Z. 265, 271 | **Bezug der Dissoziation verschoben** | ja, README Prüfbedarf 3, Nr. 131 | R3-W1-01 |
| K12 | `beziehungen` › Station 4 | Absprache «Was soll ich übernehmen …» | Z. 225 | Auftrag B-2 | ja, Nr. 115 (Etappe 2) | in Ordnung |
| K13 | `beziehungen` › Abb. 2 | «Mögliche» in den Bezeichnungen | Z. 284–294 | Absicherung über die betroffene Person entfällt (Auftrag C-3) | Nr. 141 ff. als «übernommen» | R3-W1-03 |
| K14 | `beziehungen` › `was-hilft` | «Dauernd verfügbar zu bleiben, kann kurzfristig entlasten und zugleich Ihre eigene Belastung erhöhen.» | Z. 308 | Selbstsorge-Aussage für Angehörige fehlt | ja, Nr. 162 | R3-W1-05 |
| K15 | `beziehungen` › `verantwortung` | «Was erlebt die Person vielleicht?» | Z. 346 | «Trennen Sie:» verliert die Erlebensseite | ja, Nr. 200 | R3-W1-04 |
| K16 | `beziehungen` › `verantwortung` | «Keine «perfekte» Reaktion repariert sie.» | Z. 355 (sinngemäss) | Entlastende Bestandsaussage fehlt | ja, Nr. 210, Prüfbedarf | R3-W1-02 |
| K17 | `grenzen` › `arten` | «Vier Bereiche helfen, eine Grenze konkret zu benennen.» | Handout | Liste trägt | ja, Nr. 56 | in Ordnung |
| K18 | `grenzen` › `reihenfolge` | «… genügt oft eine klare Absprache …» | – | Auftrag B-4 | – | in Ordnung |
| K19 | `grenzen` › `saetze` | «Die Beispiele sind Anregungen.» | kein Bestandssatz | Kennzeichnung «So könnte es klingen» bleibt (Kicker) | nicht nötig | in Ordnung |
| K20 | `grenzen` › `konsequenz` | «… etwa bei Angst, Abhängigkeit oder fehlender Unterstützung» | Z. 402 | Gründe fehlen; «Abhängigkeit» ist auch für Schutzfragen wichtig | ja, Nr. 228 | R3-W1-05 |
| K21 | `grenzen` › `konsequenz` | «Bereiten Sie Grenzen in ruhigen Momenten vor, nicht im Affekt.» | Z. 430 | `dear`: «… in einer ruhigen und sicheren Situation» trägt | ja, Nr. 254 | in Ordnung |
| K22 | `grenzen` › `kontakt` | «Keine davon ist Pflicht oder Ziel» | eigener Satz | «Beziehungserhalt ist kein verpflichtendes Ziel» bleibt; Plan zitiert den Satz weiter | nicht nötig | R3-K-05 |
| K23 | `grenzen` › Abb. 1 | «Was die Brücke trägt, müssen Sie nicht allein tragen.» | Handout Z. 27 | Auftrag C-5 | ja, Nr. 397 | in Ordnung |
| K24 | `grenzen` › `gewalt` | «Holen Sie Hilfe.» / «Bringen Sie sich in Sicherheit.» | Z. 476 | in einem Satz zusammengeführt (A-3) | ja | in Ordnung |

**Ergebnis:**

- Jede Kürzung an einem Bestandssatz steht im Abgleich.
- Kein Sicherheitshinweis ist durch eine Ersatzkürzung entfallen. Einzige Sicherheitsstelle: K3, durch den Auftrag.
- Eine Bedeutungsverschiebung mit klinischem Gewicht: K11 (R3-W1-01).
- Absicherungen über die betroffene Person: entfallen nur auf Auftrag (K13).
- Die Aussage der bauenden Sitzung, Ersatzkürzungen beträfen «einzelne» eigene Formulierungen, trifft zu. Die meisten Ersatzkürzungen treffen aber Bestandssätze (K1, K2, K8, K9, K14, K15, K20).
- Schleife 560–660 px: Bis 660 px Containerbreite (Viewport bis etwa 718 px) gilt die Liste, gemessen bei Viewport 700 bis 320 (`schleife.txt`). Ab Viewport 720 erscheint die Schleife. Leserichtung schaltet mit. Bei 768 und 1440 px sichtbare Schleife (Leitlinie 07 erfüllt).

---

## 3 W1-Stichprobe (32 Aussagen)

Ergebnis: ✓ = trägt die Bestandsaussage · T = teilweise · ✗ = nicht.

| Nr. | Seite › Ort | Neu | Bestand (Datei, Zeile) | Ergebnis |
| --- | --- | --- | --- | --- |
| 1 | `verstehen` › `borderline` | «Die Diagnose allein erlaubt keine Aussage darüber, ob von einem Menschen Gefahr ausgeht.» | `verstehen.md` Z. 47, wörtlich | ✓ |
| 2 | `verstehen` › `borderline` | «Borderline entsteht nicht durch eine einzige Ursache, sondern im Zusammenspiel … Schuldzuweisungen an Betroffene oder Angehörige greifen zu kurz.» | `verstehen.md` Z. 159 («… und helfen niemandem») | ✓ gekürzt |
| 3 | `verstehen` › `erleben` | «Solche Erfahrungen kommen nicht bei allen Menschen mit Borderline vor.» | Z. 37 («… und lassen sich aus der Diagnose nicht vorhersagen») | ✓ gekürzt |
| 4 | `verstehen` › Abb. 1, Kern | «Was darunter mitwirkt, lässt sich erfragen, nicht sicher ablesen.» | Z. 125 («… von aussen nicht sicher ablesen») | ✓ |
| 5 | `verstehen` › Abb. 1, Kurztext | «Aus einem beobachtbaren Verhalten lässt sich kein bestimmtes Gefühl, Bedürfnis oder Motiv ablesen.» | Z. 111, wörtlich | ✓ |
| 6 | `verstehen` › `anspannung` | «Das erklärt manches, hebt die Verantwortung für das eigene Verhalten aber nicht auf. Bei Gefahr hat Schutz Vorrang.» | `verstehen--beziehungen.md` Z. 123; `verstehen.md` Z. 131 | ✓ |
| 7 | `verstehen` › Abb. 2, Ansatzpunkt | «Sie müssen die andere Person nicht beruhigen.» | `verstehen.md` Z. 131 («… nicht beruhigen können») | ✓ |
| 8 | `verstehen` › Abb. 2, Vertiefung | «Gefahr lässt sich aus der Lage auf der Achse nicht ableiten.» | `zustands-landkarte` Z. 70 | ✓ |
| 9 | `verstehen` › Abb. 2, Denk-Modus | «Ob ein klärendes Gespräch gewünscht ist, entscheiden beide.» | `alarm-modus` Z. 47 («möglich und gewünscht … gemeinsam geklärt») | ✓ (Auftrag D-4; «möglich» entfällt) |
| 10 | `verstehen` › `anspannung` | nur «Bei Gefahr hat Schutz Vorrang.» | `zustands-landkarte` (Abgleich Nr. 343): «… und holen Sie professionelle Hilfe» | T (R3-W1-06) |
| 11 | `verstehen` › `bewertungen` | «Das geschieht ohne Absicht.» | Z. 72 («Diese mögliche Verengung ist keine Absicht …») | ✓ |
| 12 | `verstehen` › Abb. 3, Liste | «Kränkung, Angst oder Wut können den Blick stark färben.» | `spaltung` Z. 45 (zweiter Satz entfällt) | ✓ |
| 13 | `verstehen` › `mythen` | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt … Das kann helfen, die Lage zu verstehen.» | Z. 197 (Rest «passende professionelle Hilfe» → Verweis im Text) | ✓ |
| 14 | `verstehen` › `mythen` | «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» | `lmk` Z. 67, wörtlich (dort im Kontext akuter Gefahr) | ✓ |
| 15 | `verstehen` › Abb. 4, Annahme 6 | «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» | Z. 197 | ✓ |
| 16 | `verstehen` › Abb. 4, Annahme 5 | «Sie können Risikofaktoren sein, sind aber weder notwendig noch hinreichend.» | Z. 193 | ✓ |
| 17 | `verstehen` › Abb. 4, Annahme 7 | «In Kliniken gilt sie oft als frauendominiert, bevölkerungsbezogene Studien finden teils keine signifikanten Unterschiede.» | Z. 205 | ✓ |
| 18 | `verstehen` › Abb. 4, Annahme 1 | «Viele erleben über Jahre deutliche Besserung, Remission (die Kriterien sind eine Zeit lang nicht mehr erfüllt) …» | Z. 177; `glossar.md` Z. 266 | ✓ |
| 19 | `beziehungen` › Station 2 | «Erlebte Zurückweisung ist nicht immer eingebildet.» | `verstehen--beziehungen.md` Z. 187 | ✓ |
| 20 | `beziehungen` › Station 4 | «Aus dem Wechsel allein … Möglich ist eine Dissoziation …» | Z. 271; `verstehen.md` Z. 70 | T (R3-W1-01) |
| 21 | `beziehungen` › Station 5 | «Unterschiedliches Verhalten beweist weder bewusste Kontrolle noch, dass Angehörige die Schwierigkeiten verursacht haben.» | Z. 261, wörtlich | ✓ |
| 22 | `beziehungen` › `verantwortung` | «Bei Suizidgedanken oder Selbstverletzung darf Hilfe nicht aus Sorge vor einer «Verstärkung» vorenthalten werden. Dann braucht es eine angemessene professionelle Einschätzung.» | Z. 314, wörtlich | ✓ |
| 23 | `beziehungen` › `verantwortung` | «Schmerz kann Verhalten erklären, macht Einschüchterung, Gewalt oder andere Übergriffe aber nicht in Ordnung.» | Z. 351 | ✓ |
| 24 | `beziehungen` › `verantwortung` | «Trennen Sie: Was tut die Person tatsächlich, wie wirkt das auf andere, …» | Z. 344–349 (vier Fragen) | T (R3-W1-04) |
| 25 | `beziehungen` › Abb. 2 | «Sicht der betroffenen Person: «Vielleicht versteht sie so, wie verletzt ich bin.»» | Z. 287 («Mögliche Sicht …») | T (R3-W1-03) |
| 26 | `beziehungen` › Abb. 1, Kurztext | «Ein mögliches Erklärungsmodell, keine sichere Aussage …» | Z. 155, wörtlich | ✓ |
| 27 | `grenzen` › `gewalt` | «Körperliche Gewalt ist kein Beziehungsproblem, sondern eine Sicherheitsfrage. Sie lässt sich nicht aus einer Borderline-Diagnose ableiten und wird dadurch nicht entschuldigt.» | `grenzen.md` Z. 467–469 | ✓ |
| 28 | `grenzen` › `gewalt`, Schritt 3 | «Fragen Sie eine spezialisierte Fachstelle nach Dokumentation und Spurensicherung, auch wenn Sie zunächst keine Anzeige erstatten möchten.» | Z. 479 | ✓ |
| 29 | `grenzen` › `gewalt`, Schritt 4 | «Opferhilfe und Beratung dazunehmen.» ohne Zugangsweg | Z. 481–482 (Verweis auf Seite «Akute Hilfe …») | T (A-4 offen, festgestellt) |
| 30 | `grenzen` › `gewalt`, Kinder | «Kinder müssen weder Streit schlichten …» / «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» | Z. 491, 493 | ✓ |
| 31 | `grenzen` › `konsequenz` | «Er darf niemandem Versorgung oder Sicherheit entziehen, … etwa minderjährigen Kindern.» | `lmk` Z. 43 | ✓ |
| 32 | `grenzen` › `saetze` | «… wende dich an die Stelle, die wir für Krisen abgemacht haben.» | Z. 366 («vereinbarten professionellen Hilfewege») | ✓ geändert (S-5); Bezug über DEAR-Kurztext |

Dazu ohne Befund geprüft: `grenzen` › `erkennen` «Lassen Sie neue, starke oder anhaltende körperliche Beschwerden medizinisch abklären.» (`grenzen-erkennen` Z. 65); `grenzen` › `reihenfolge` «… keine fachliche Einstufung.» (Z. 218); `index` › `haltung` «Sie sind nicht für die Genesung eines anderen Menschen verantwortlich.» (`startseite.md` Z. 64).

**Ergebnis:** 26 ✓, 6 T, 0 ✗. Keine Aussage widerspricht dem Bestand. Die T-Fälle sind in Abschnitt 8 erfasst.

---

## 4 Abgleich

**Prüfskript:** `node abgleich/pruefe-abgleich.mjs --bestand bestand/texte` gegen die vier Live-Seiten: **1672 Zeilen, 0 ohne Fundstelle** (Exit 0). Das bestätigt den Bericht. Das Skript prüft nur, ob die neue Fassung wörtlich am Ort steht. Ob sie die Aussage trägt, prüft es nicht.

**Stichprobe:** Seed 20261009. Grundgesamtheit 993 Zeilen aus `verstehen`, `beziehungen`, `grenzen` ohne «Bezeichnung» und ohne «entfällt» mit Bemerkung Meta-Text/Handout-Rahmen.

| Datei · Nr. | Status | Ergebnis | Anmerkung |
| --- | --- | --- | --- |
| bez. 17 | gekürzt | ✓ | «Gefühle» entfällt, benannt |
| bez. 32 | entfällt | ✓ | |
| bez. 86 | entfällt | T | Begründung nennt nur das Beispiel; «Das Gefühl kann sehr real sein, während die Deutung überprüft werden darf» ist sinngemäss in Station 2 und Ansatzpunkt enthalten → eher «zusammengeführt» |
| bez. 179 | übernommen | T | «das nicht hält» entfällt → «gekürzt» |
| gr. 64 | entfällt | ✓ | |
| gr. 66 | übernommen | ✓ | |
| gr. 186 | übernommen | ✓ | |
| gr. 204 | übernommen | ✓ | |
| gr. 206 | übernommen | ✓ | |
| gr. 207 | geändert | ✓ | Grund S-5 genannt |
| gr. 218 | übernommen | ✓ | |
| gr. 397 | zusammengeführt | T | Zweiter Satzteil «und keinen Kontakt versprechen, der für Sie nicht sicher oder tragbar ist» entfällt unbenannt → «gekürzt» |
| gr. 406 | übernommen | ✓ | |
| gr. 407 | übernommen | ✓ | |
| gr. 459 | zusammengeführt | ✓ | |
| gr. 472 | übernommen | ✓ | |
| gr. 536 | entfällt | ✓ | |
| gr. 629 | zusammengeführt | T | Genannte Fassung trägt nur den Teil «Abhängigkeiten, Minderjährigkeit»; «schreibt weder ein Gespräch noch eine Rückkehr vor» steht sinngemäss in `saetze` |
| gr. 635 | entfällt | ✓ | |
| gr. 636 | entfällt | T | Bemerkung «der Beispielsatz steht in `saetze`» ist aus Nr. 635 kopiert und passt nicht; Aussage steht sinngemäss in `konsequenz` («Für die Reaktion des Gegenübers sind Sie nicht verantwortlich.») |
| gr. 645 | entfällt | ✓ | Profil; Verweis im Text in `gewalt` |
| vs. 99 | übernommen | ✓ | |
| vs. 111 | gekürzt | ✓ | |
| vs. 176 | entfällt | ✓ | |
| vs. 249 | zusammengeführt | ✓ | |
| vs. 274 | zusammengeführt | T | Bemerkung «Alarm-Modus, Kurztext»; die Fassung steht nur im Kurztext |
| vs. 324 | zusammengeführt | ✓ | Fusszeile |
| vs. 365 | zusammengeführt | T | Genannte Fassung ist die Kernaussage; die Aussage trägt der Abschnittstext «… schwerer werden, positive und schwierige Seiten eines Menschen zugleich zu sehen» |
| vs. 371 | zusammengeführt | ✓ | |
| vs. 431 | zusammengeführt | ✓ | Fusszeile |

**Ergebnis:** 23 ✓, 7 T, 0 falsch. Keine Zeile verschleiert eine entfallene Sicherheitsaussage. Die T-Fälle betreffen Status oder Bemerkung (R3-K-04).

**Vollständigkeit:** `abgleich/verstehen.md` springt von Nr. 146 (Quellen der Annahmen) zu Nr. 147 («Das könnte Sie auch interessieren»). Der Bestandsteil `verstehen.md` Z. 277–396 («Materialien zum Vertiefen» mit Kurzbeschreibungen der Handouts) hat keine Zeilen. Der README nimmt nur den «Diagnostik-Teil» aus (R3-K-03).

---

## 5 Visualisierungs-Check je Figur

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Grundlage: 48 Bildschirmfotos in `shots/`, alle angesehen in Auszügen und Übersichten (`kontrast-uebersicht.png`, `eisberg-dear-360.png`, `bruecke320-pendel768.png`).

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

**Belege je T und N**

- **2, 6 Schleife:** Planzeile `v-bz-was-hilft` begründet Text mit «keine Beziehung untereinander». Der Abschnitt sagt «lässt sich die Schleife an mehreren Stellen unterbrechen», nennt aber keine Station.
- **3, 10 Anspannung:** Kurztext «Die Bereiche gehen ineinander über». Gezeigt sind drei getrennte, gleich breite Felder (`v-vs-anspannung-1280.png`). Profilthema P-6.
- **3, 7, 9 Annahmen:** sieben gleich gebaute Kästen; bei 360 px 3580 px hoch (`bedienung.json` › `heights360`). Offen für die Fachstelle (F-V-11).
- **8 Anspannung:** Unterschied nur über Linienstärke der Felder (P-6).
- **8 Pendel:** Die zwei offenen Kreise (ausgelenkte Pendelkörper) liegen weder am Ende des kurzen noch des langen Bogens (R3-V-02).
- **8 Annahmen:** Bedeutung nur über Grösse und Kasten.
- **8 Schleife:** Pfeilspitze 4 → 5 verdeckt; der Pfeil wirkt wie ein «T» (R3-V-01, `zoom-schleife-45-1280-detail.png`).
- **8 Zwei Sichten:** durchgezogene und gestrichelte Oberkante unterscheiden die Sichten ohne Legende (P-7).
- **8 DEAR:** vier gefüllte blaue Punkte; Leitlinie 07: «höchstens ein gefülltes blaues Feld» (P-6).
- **10 Zwei Sichten:** Absicherung «Mögliche Sicht» entfallen (R3-W1-03).
- **12 Anspannung:** schmal stehen «← weniger angespannt» und «stärker angespannt →» waagrecht über der senkrechten Liste (`v-vs-anspannung-360.png`).
- **12 Pendel:** unter 560 px beide Bögen unbeschriftet; die Liste nennt nur die drei Lagen (R3-V-03, `v-vs-bewertungen-360.png`).
- **14 alle:** `approvalStatus` «ausstehend» in `site.config.json` › `visualPlan`.

**Besondere Prüfungen**

- **Pendel:** zwei Ausschläge, Beschriftung mittig, Lagen an den Enden des langen Bogens. Liste bei 1280, 768 und 360 px vorhanden. Im Theme «kontrast» gleich lesbar.
- **Schleife, Pfeile (CSS-px, `pfeile.txt`):** 1 → 2 endet 19,5 px vor dem Zielkasten, 2 → 3 4,6 px, 3 → 4 12,0 px, 5 → 1 13,0 px. **4 → 5 endet 7,2 px im Kasten Station 5**, gleich bei 1440, 1280, 768 und 720 px. Station 5 ist höher als die Zeichnung annimmt.
- **Schleife, Listenansicht:** Liste bei Viewport 700, 690, 680, 660, 640, 600, 580, 560, 540, 400, 360, 320 (Containerbreite 644 bis 280 px). Rücksprung als Linie und Text sichtbar (`v-bz-schleife-600.png`, `-360.png`). «Uhrzeigersinn» nur bei der Schleife.
- **Zwei Sichten:** bei 360 px je Schritt Überschrift, dann beide Sichten nacheinander.
- **Brücke:** bei 360 und 320 px eigene Zeichnung, «Geländer», «Fahrbahn», «Pfeiler», «Sie», «die andere Person» im Bild, ohne Überlappung.
- **Kontrast-Theme:** alle 24 Fotos geprüft; Linien dunkler, keine festen Farbwerte in SVG (keine `fill`/`stroke`-Attribute mit Farbwert in den Live-Seiten).
- **Schriftgrössen in Figuren bei 360 px** (`shots/figuren.json`): Erklärtexte der Anspannung, Einordnungen der Annahmen und Zitate der Zwei Sichten 21 px (Gewicht 300). Überschriften 17 px. Kurztexte, «Was hilft», Ansatzpunkte, DEAR-Schritte, Pendel- und Brückenliste 15 px. Siehe R3-V-04.

---

## 6 Kennzahlen

Zählweise nach `abgleich/README.md`; Skript `scripts/kennzahlen.py`. Variante A trennt an jeder Elementgrenze (wie `pruefe-abgleich.mjs`), Variante B nur an Blockgrenzen.

| Kennzahl | Bericht (Selbstprüfung) | Nachgerechnet | Ergebnis |
| --- | --- | --- | --- |
| Wörter neu index / verstehen / beziehungen / grenzen | 238 / 1362 / 1155 / 1572 | A: 238 / 1362 / 1155 / 1572; B: 238 / 1360 / 1142 / 1562 | gleich (A) |
| Wörter alt | 433 / 2524 / 2149 / 2985 | 441 / 2524 / 2151 / 2997 | Abweichung bis 1,8 %; eigene Bereinigung, Originalskript fehlt (R3-K-02) |
| Richtwert + 5 % | verstehen 1365, beziehungen 1155, grenzen 1575 | 1362 ≤ 1365; 1155 = 1155; 1572 ≤ 1575 | eingehalten; `beziehungen` ohne Reserve |
| Absicherungen je 100 Wörter neu | 1,68 / 2,57 / 2,86 / 2,04 | 1,68 / 2,57 / 2,86 / 2,04 | gleich («möglich…» am Wortanfang; enthaltend: grenzen 2,16) |
| Absicherungen je 100 Wörter alt | 1,85 / 2,54 / 3,82 / 2,41 | 1,81 / 2,54 / 3,81 / 2,40 | praktisch gleich |
| Semikolons im Fliesstext alt → neu | 1→0, 12→0, 6→1, 4→0 | 1→0, 12→0, 6→1, 4→0 | gleich (`beziehungen`: Leserichtung schmal) |
| Tabstopps ohne Fusszeile | 10 / 19 / 15 / 20 | 10 / 19 / 15 / 20 | gleich |
| Seitenhöhe bei 360 px | 3848 / 15 593 / 12 236 / 16 293 | 3839 / 15 593 / **12 342 / 16 521** | Abweichung −9 / 0 / +106 / +228 px (R3-K-01) |
| Höchste Figur bei 360 px | Annahmen 3580, Zwei Sichten 2097, DEAR 1796 | 3580, **2128, 1846** | Abweichung bei Zwei Sichten und DEAR |
| Pfeilspitze 4 → 5 | «liegt zwischen den Kästen» | 7,2 px im Kasten | falsch (R3-V-01) |

Die Seitenhöhen ergab auch das Skript der bauenden Sitzung (`abgleich/bedienung.mjs`) gegen den Live-Stand: 3839 / 15 593 / 12 342 / 16 521 px, Zwei Sichten 2128 px, DEAR 1846 px. Die Werte im Bericht stammen also nicht vom geprüften Stand.

Die Wortzahlen der Inhaltsdateien plus 24 Wörter Verweis im Text ergeben genau die Live-Werte (1338 + 24, 1131 + 24, 1548 + 24).

---

## 7 Bedienung

| Prüfung | Ergebnis | Beleg |
| --- | --- | --- |
| axe-core 4.10.2, Standard, 1280 px, Vertiefungen offen | 0 Verstösse auf allen vier Seiten | `bedienung.json` › `axe` |
| axe-core, Theme «kontrast» | 0 Verstösse | › `axeKontrast` |
| axe-core, 360 px | 0 Verstösse | › `axe360` |
| axe «unvollständig» | Kontrast nicht bestimmbar bei 4–5 Beschriftungen über SVG (Pendel, Brücke). Von Hand: dunkler Text auf hellem Grund in beiden Themes | Fotos Pendel, Brücke |
| Überlauf 320 / 360 / 768 / 1280 / 1440 px | keiner (20 Messungen) | › `overflow` |
| Zoom 200 % (640 CSS-px, DSF 2) | kein Überlauf | › `zoom200` |
| Text 200 % (Wurzelschrift) | Schriftgrössen ändern sich nicht (px-Werte), kein Überlauf. Profilthema P-9, nicht im Auftrag | `scripts/text200.mjs` |
| Tastatur | erster Stopp «Zum Hauptinhalt»; Reihenfolge = Dokumentreihenfolge auf allen Seiten; jeder Stopp mit sichtbarem Fokus; Enter öffnet Vertiefung | › `kbd` |
| Fokus im Sichtbereich | alle Stopps nach dem Scrollen im Sichtbereich (Wartezeit 400 ms). Die Verdeckungsprobe meldet umbrochene Inline-Links; das ist eine Grenze der Methode, kein Befund | `scripts/fokus.mjs` |
| Kleine Ziele | E-Mail-Link der Absenderin 23 px hoch (Inline-Link, Profil) | › `kbd.small` |
| Überschriften | je ein `h1` und ein `main`; keine Sprünge | › `misc` |
| Verweis im Text | 3 Stellen: `verstehen#mythen`, `beziehungen#verantwortung`, `grenzen#gewalt` (in Schritt 2 der Liste). Wortgleich mit `responsibility.inline`, nicht in `figure` oder `details`, höchstens einer je Abschnitt, direkt nach der Anleitung | › `inline` |
| Krisennummern, `tel:` | keine | › `misc` |
| Sprungziele | alle `#`-Ziele vorhanden; seitenübergreifende Ziele `verstehen#anspannung`, `#bewertungen`, `grenzen#gewalt`, `index#beratung` existieren | › `misc.anchorsOk`, HTML |

Kein Befund aus Stufe 5 ausser R3-B-01. Reale Screenreader-Läufe fehlen weiter.

---

## 8 Alle Befunde

| ID | Schwere | Kurz |
| --- | --- | --- |
| R3-W1-01 | mittel | `beziehungen` › Station 4: Weil «Plötzliche Entfernung hat nicht nur eine Erklärung.» für den Richtwert entfiel, folgt «Möglich ist eine Dissoziation …» direkt auf «Aus dem Wechsel allein …». Die Dissoziation erscheint so als mögliche Erklärung für den Wechsel von Nähe und Rückzug. Im Bestand erklärt sie Verstummen und Unwirklichkeit (`verstehen--beziehungen.md` Z. 271); für den Wechsel nennt der Bestand Bindungsstress (`verstehen.md` Z. 70; Abgleich `verstehen` Nr. 46: «Bindungsstress kann dabei mitwirken» entfällt). **Prüfbedarf.** |
| R3-V-01 | mittel | Schleife: Pfeil 4 → 5 endet 7,2 px im Kasten Station 5 (1440 bis 720 px). Die Spitze ist verdeckt; sichtbar bleibt ein «T». C-2 ist nicht erfüllt. Die Selbstprüfung meldet «zwischen den Kästen» (`pfeile.txt`, `zoom-schleife-45-1280-detail.png`). |
| R3-W1-02 | leicht | `beziehungen` › `verantwortung`: Auftrag D-1 strich «Keine «perfekte» Reaktion repariert sie.» als «nicht im Bestand». Der Bestand sagt: «Die Beziehung wird nicht durch eine «perfekte» Reaktion der Angehörigen repariert.» (Z. 355). Eine entlastende Aussage fehlt. Die bauende Sitzung hat es als Prüfbedarf gemeldet (Abgleich Nr. 210). **Prüfbedarf.** |
| R3-W1-03 | leicht | `beziehungen` › Abb. 2: «Mögliche» ist in den Bezeichnungen entfallen (Auftrag C-3). Gedanken der betroffenen Person stehen ohne Absicherung; «erfundenes Beispiel» steht nur in der Legende. Der Abgleich führt Nr. 141 ff. als «übernommen». **Prüfbedarf.** |
| R3-W1-04 | leicht | `beziehungen` › `verantwortung`: Die Frage «Was könnte die Person innerlich erleben?» (Z. 346) entfiel. «Trennen Sie:» trennt nun nur noch Tun, Wirkung und Bedarf; die Gegenseite (Erleben) fehlt. |
| R3-W1-05 | leicht | Ersatzkürzungen treffen Bestandsaussagen für Angehörige: «etwa bei Angst, Abhängigkeit oder fehlender Unterstützung» (`grenzen.md` Z. 402), Dauerverfügbarkeit erhöht die eigene Belastung (`verstehen--beziehungen.md` Z. 308), «Unterschiede, die stehen bleiben dürfen» (Z. 76), «eine Person «handhabt» nicht die andere» (Z. 81). Alle im Abgleich. **Prüfbedarf**, ob vertretbar. |
| R3-W1-06 | leicht | `verstehen` › `anspannung`: Nach A-2 steht nur «Bei Gefahr hat Schutz Vorrang.». Die Aufforderung, professionelle Hilfe zu holen (Handouts `alarm-modus`, `zustands-landkarte`), steht nicht mehr auf der Seite; der Abgleich führt Nr. 246 und 343 als «zusammengeführt». Fusszeile deckt die Zuständigkeit. **Prüfbedarf.** |
| R3-S-01 | leicht | `beziehungen` › Einflüsse: Zwei Einträge heissen «Station 2 · …»; zusammen sechs Sätze und ein Beispiel. D-3 («Station 2 auf höchstens drei Sätze») ist nur für den ersten Eintrag umgesetzt. Auslegung offen. |
| R3-V-02 | leicht | Pendel: Die zwei offenen Kreise (ausgelenkte Pendelkörper, x = 224 und 416) liegen weder am Ende des kurzen (x = 268/372) noch des langen Bogens (x = 145/495). Die Lagen «sehr positiv/negativ» stehen an Bogenenden ohne Pendelkörper (`v-vs-bewertungen-1280.png`, SVG). |
| R3-V-03 | leicht | Pendel unter 560 px: Beide Bögen sind unbeschriftet; die Liste nennt nur die drei Lagen. Die Kernunterscheidung «kleinerer / grösserer Ausschlag» steht nur im Kurztext und in der Legende (`v-vs-bewertungen-360.png`). Auftragskonform (C-1). |
| R3-V-04 | leicht | Schrifthierarchie in Figuren umgekehrt (F teilweise): Erklärtexte 21 px leicht sind grösser als Überschriften (17 px) und Handlungshinweise («Was hilft», Ansatzpunkt, 15 px). Sichtbar bei Annahmen und Anspannung (`v-vs-mythen-1280.png`, `figuren.json`). Kurztexte, DEAR, Pendel- und Brückenliste bleiben in `type-body-sm` (Leitlinie 03: Lesetext in Seitenschrift). |
| R3-B-01 | leicht | `borderline.css`: zweimal `2px` (Linien der Schleifenliste) statt `--border-width-strong`; der Kopfkommentar sagt «keine … freien Pixelwerte» (F teilweise). |
| R3-K-01 | leicht | Bericht: Seitenhöhen und Figurenhöhen bei 360 px stimmen nicht mit dem Live-Stand (beziehungen 12 342 statt 12 236, grenzen 16 521 statt 16 293, Zwei Sichten 2128 statt 2097, DEAR 1846 statt 1796 px; auch mit dem Skript der bauenden Sitzung). |
| R3-K-02 | leicht | `abgleich/kennzahlen.mjs` ist in Bericht und README genannt, fehlt aber im gelieferten Stand (`e3/abgleich/`). Altwerte sind nur näherungsweise nachrechenbar. |
| R3-K-03 | leicht | Abgleich unvollständig: `verstehen.md` Z. 277–396 («Materialien zum Vertiefen») hat keine Zeilen; der README nimmt nur den Diagnostik-Teil aus (Auftrag E: «Jeder Satz der vier alten Seiten steht mit Status»). |
| R3-K-04 | leicht | Stichprobe: 7 von 30 Zeilen nur teilweise zutreffend (Status oder Bemerkung): bez. 86, 179; gr. 397, 629, 636; vs. 274, 365. Keine falsche Zuordnung bei Sicherheitsaussagen. |
| R3-K-05 | leicht | Visualisierungsplan nicht nachgeführt: `v-vs-einordnung` «Abschluss mit Merksatz» (entfallen), `v-gr-reihenfolge` «samt Belastung als Kriterium» (B-4 geändert), `v-gr-kontakt` «keine Möglichkeit ist Pflicht oder Ziel» (Satz entfallen), `v-vs-bewertungen` «kein Mittelwert» (Satz entfallen). |

**Zählung:** 0 schwer · 2 mittel · 15 leicht.

**Nicht als Befund gezählt (festgestellt oder Profilthema):** A-4 Opferhilfe-Link (festgestellt, offen für die Fachstelle); P-6, P-7, P-9 und F-V-11 (laut Auftrag Abschnitt 3 ausserhalb); fehlende reale Screenreader-Läufe (Stufe 5).
