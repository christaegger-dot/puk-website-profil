# Prüfbericht, Belege · Borderline – Orientierung für Angehörige · Etappe 1, zweite Prüfrunde

**Prüfung 2 der zweiten Prüfrunde (unabhängige Sitzung, hat nicht gebaut), 09.10.2026.** Zusammenfassung und Abgleich mit Prüfung 1: `PRUEFBERICHT.md`, Abschnitt «Zweite Prüfrunde». Einschränkungen von Prüfung 1 gehen vor (F-K-04; Entscheid zu «nur»). Geprüft wurde der Stand auf `deploy-preview-10--puk-website-profil.netlify.app/templates/website/borderline-angehoerige/` (index, verstehen, beziehungen, grenzen) mit den dort veröffentlichten Quellen (`site.config.json`, `KORREKTUR-ETAPPE-1.md`, `PRUEFBERICHT.md`, `UMBAUPLAN.md`, `abgleich/*.md`, `content/*.html`, `borderline.css`). Bestand: Texte der alten Website (`bestand/texte/*.md`) und `INVENTAR.md` aus der Bestandsaufnahme. Kriterien: Leitlinien 00-ablauf (inkl. «Prüftiefe»), 00-visuelle-wissensvermittlung, 07, 06, 00-sprache-und-ton, 00-gesamtkohaerenz, 00-fachliche-qualitaet, 04 und README «Zuständigkeit» (inkl. «Verweis im Text»).

Frühere Prüfnotizen und Arbeitskopien wurden nicht geöffnet. Die Befunde früherer Prüfungen im `PRUEFBERICHT.md` habe ich nur gelesen, um zu wissen, was die bauende Sitzung behauptet. Übernommen habe ich nichts ungeprüft.

Es wurden keine Inhalte und kein Code geändert. Fachliche Fragen sind als «Prüfbedarf» markiert. Fachliche Freigaben trägt nur die Fachstelle ein.

**Schweregrad** (wie im Prüfbericht): **schwer** heisst, die Stelle vermittelt etwas Falsches oder blockiert. **mittel** heisst, sie schwächt das Verständnis deutlich oder ein Auftrag ist nicht erfüllt. **leicht** sind kleinere Mängel.

**Arbeitsdateien** (Skripte, Bildschirmfotos, Messdaten) lagen in der Prüfsitzung und sind nicht Teil des Repositorys. Verweise wie `shots/…`, `a11y.json` oder `cyc.mjs` bezeichnen diese Dateien.

**Grenzen dieser Prüfung**
- Build und Gate (`node tools/build.mjs`, `gate.mjs --selftest`, `--production`) konnte ich nicht ausführen. Ich habe keinen Zugriff auf das Repository, nur auf die Vorschau. Die Angaben der bauenden Sitzung dazu sind deshalb **nicht geprüft**.
- **Reale Screenreader-Läufe fehlen** (VoiceOver/Safari, NVDA/Firefox), ebenso ein Test mit Hardwaretastatur und Touch. Alles unter «Bedienung» ist automatisiert und ersetzt Stufe 5 nicht.

---

## 0 Zusammenfassung

- **Korrekturauftrag:** Die Tabelle in Abschnitt 1 hat 38 Zeilen. Davon sind 29 umgesetzt (einige mit Einschränkungen), 6 teilweise (einschliesslich S-2 «weitgehend»), eine anders umgesetzt (W1-1 Annahmen) und eine nicht umgesetzt (Opferhilfe-Link). Eine Zeile war nicht prüfbar (Build, Selbsttest, Produktionsgate).
  - Für die Opferhilfe beruft sich die bauende Sitzung auf einen «Entscheid im Chat», der im Auftrag nicht steht.
- **Kein schwerer Befund.** Elf mittlere Befunde, davon:
  - zwei zu Suizid-Aussagen (Quelle deckt die Ausweitung auf «Suizidgedanken» nicht; «Bleiben Sie bei der Person» ohne «nur»);
  - ein Sicherheitshinweis, der nur noch in einer Vertiefung steht;
  - ein Abgleich, der weiterhin Übernahmen behauptet, die auf der Seite fehlen, und Bedeutungsänderungen nicht aufführt.
- **Kennzahlen:** Nachgerechnet mit der beschriebenen Zählweise liegen alle drei Inhaltsseiten knapp über dem Richtwert: 1301 / 1112 / 1510 statt 1299 / 1099 / 1500. Die Absicherungsdichte ist wie berichtet gesunken. Sie sank aber auch dort, wo der Entscheid der Fachstelle Absicherungen erhalten will (Aussagen über die betroffene Person).
- **Bedienung, automatisiert:**
  - axe: 0 Verstösse in beiden Themes.
  - Kein Überlauf bei 320 bis 1440 px und bei Zoom 200 %.
  - Fokus überall sichtbar.
  - Der Verweis im Text steht an den drei verlangten Stellen, wortgleich mit `site.config.json`, nicht in Figur oder Vertiefung.

---

## 1 Korrekturauftrag: Stand je Befund-ID

Legende: **umgesetzt** · **teilweise** · **nicht umgesetzt** · **anders umgesetzt** · **nicht prüfbar**

| ID | Stand | Beleg |
| --- | --- | --- |
| Entscheid «Absicherungen» | teilweise (über den Entscheid hinaus) | Bei Handlungshinweisen gestrichen, wie vorgesehen. Gestrichen aber auch bei Aussagen über die betroffene Person, wo sie bleiben sollen: Abb. 2 `verstehen` «Zuhören, Abwägen und Impulse steuern werden vorübergehend schwerer» (Handout `alarm-modus`: «können … schwerer werden. Das ist eine Möglichkeit, keine sichere Erklärung …»); Abb. 3 «Unter Stress schlägt der Blick weiter aus» (Handout `spaltung`: «kann … vorübergehend enger werden»); `abgleich/beziehungen.md` Z. 138: «Ob dies im Einzelfall zutrifft, bleibt offen» → «entfällt · Absicherung (S-1)». Siehe F-W1-06. |
| Entscheid «Angebot» / W1-4 | umgesetzt | `index` › Beratung: Wortlaut wörtlich gleich mit dem Auftrag, per Skript geprüft. `grenzen` › Kontakt: ein Satz mit Link `…/#beratung`. Die Begriffe «kostenlos» und «Schweigepflicht» kommen auf `grenzen` nicht vor. |
| W1-1 `responsibility.inline` | umgesetzt | `site.config.json`: Text gleich dem Standardwortlaut im README, `reviewStatus: geprueft`, 09.10.2026. |
| W1-1 `verstehen` › Annahmen | anders umgesetzt | Abschnittstext: «… fragen Sie ruhig und direkt …» → Platzhalter → «Bleiben Sie bei der Person, soweit …», wie verlangt. Die Figur sagt nicht «nur», dass direktes Nachfragen keine Suizidgedanken auslöst, sondern «weder Suizidgedanken noch suizidale Handlungen». Neu davor steht der Satz «Auch die Sorge, ein Gespräch über Suizid mache es schlimmer, greift zu kurz.» Der Auftrag verlangt ihn nicht. Siehe F-W1-01 und F-W1-12. |
| W1-1 `beziehungen` › Verantwortung | umgesetzt | Platzhalter direkt nach «… angemessene professionelle Einschätzung.» (`a11y.json` › `inline`). |
| W1-1 `grenzen` › Schutz, Schritt 2 | umgesetzt | «wenden Sie sich an passende professionelle Hilfe» ersetzt; der Platzhalter steht im `li` von Schritt 2. |
| W1-1 `sensitiveTopics`, höchstens einer je Abschnitt | umgesetzt | `verstehen` und `beziehungen` mit «selbstgefaehrdung», `grenzen` mit «gewalt»; je Abschnitt höchstens einer. |
| W1-2 | umgesetzt | Kernaussage «Kontakt braucht Geländer: Grenzen können Kontakt schützen.»; die Vertiefung behält «Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden.» |
| W1-3 (fünf Aussagen) | umgesetzt (eine mit Abweichung) | Vier stehen wie verlangt. Die Aussage aus `lmk` steht **ohne «nur»**. W1-3 im Auftrag nennt sie mit «nur», W1-1 ohne – der Auftrag ist in sich widersprüchlich. Siehe F-W1-02. |
| W1-3 (Abgleich Satz für Satz) | teilweise | Formal vorhanden. Aber: Sätze, die als «übernommen» gezählt sind, werden nicht aufgeführt, darunter solche mit Bedeutungsänderung. Mehrere Einträge verweisen auf Text, den es auf den Seiten nicht gibt. Siehe F-K-02, F-W1-03, F-W1-04. |
| W1-6 Brücke | umgesetzt | Bildlegende: «Eigene didaktische Darstellung · Bezugspunkte: Hoffman et al. (2005); NICE CG78 (2009); Linehan; Mason und Kreger (2014); Stand by You / Sotomo (2024)», wie im Handout. |
| W1-6 `grenzen` › Sätze | umgesetzt | Keine Quellenzeile mehr im Abschnitt. |
| W1-7 | umgesetzt | «in fester Reihenfolge» entfällt; Kernaussage «Vier Schritte helfen, ein Anliegen vorzubereiten.»; `beziehungen`: «sollte aber weder alle Regulation übernehmen noch Behandlung ersetzen». |
| Opferhilfe | **nicht umgesetzt** | Schritt 4 ohne Link, und auch der frühere Verweis auf den Ort der Informationen entfällt. Begründung der bauenden Sitzung: «Entscheid im Chat vom 09.10.2026: ganz weglassen» (`abgleich/README.md` Z. 88, `PRUEFBERICHT.md` Z. 101). Der Auftrag sagt das Gegenteil. Siehe F-K-01. |
| V-1 | umgesetzt | Station 5 trägt `is-ansatz` (doppelte Kontur, Bildschirmfoto). Text wie verlangt; Satz mit «dein Schweigen» entfällt; `entryPoint` nachgeführt. |
| V-3 | umgesetzt (mit Restunschärfe) | Bei jeder Station steht, wer handelt. «Zwei Sichten» verwendet die verlangten Bezeichnungen. Dasselbe Zitat heisst in Abb. 1 aber «Station 2» und in Abb. 2 «Station 1» (F-V-06). |
| V-2 | umgesetzt (mit Mängeln) | Aufhängepunkt, Bogen, Ruhelage, zwei Auslenkungen, Pfeile zurück und Beschriftungen sind da. Den grösseren Ausschlag unter Stress zeigt die Zeichnung nicht; schmal fehlt die Zuordnung der Beschriftungen (F-V-02, F-V-03). |
| V-4 | umgesetzt | Achsentitel; «Rückzug oder Schweigen» im Alarm-Modus; Kurztext «gleitende Achse … nicht sicher ablesbar». Die Linienstärke steigt weiter in drei Stufen (F-V-08). |
| V-5 | umgesetzt | `grenzen` › Bereiche als `dl`, Planzeile `format: text` mit Begründung. |
| V-6 | umgesetzt | Annahme klein («Verbreitete Annahme: «…»»), Einordnung als `h3` im Kasten, keine gestrichelte Linie, Annahme 7 entfällt. |
| V-7 | umgesetzt, schmal teilweise | Beide Ufer gezeichnet und beschriftet; Teile ab 560 px direkt beschriftet. Unter 560 px sind «Geländer», «Fahrbahn» und «Pfeiler» ausgeblendet (`display:none`, `innertext.json`). Siehe F-V-10. |
| V-8 | umgesetzt | Fünf Einträge, je mit Station, als `dl`; «Dass etwas anderswo gelingt …» steht bei Station 5. |
| V-9 | teilweise | Der Kurztext von Abb. 2 `verstehen` beschreibt die Zeichnung («Eine gleitende Achse: …»). V-4 schreibt das vor, V-9 verbietet es; der Auftrag widerspricht sich hier. Abb. 2 `beziehungen` trägt Meta-Bezeichnungen «durchgezogene Linie» und «gestrichelte Linie» (F-V-07, F-V-09). |
| V-12 | umgesetzt | Je Schritt eine Aufgabe und darunter ein `.puk-say` mit «Beispiel». |
| W2-1 | umgesetzt | `pages`: verstehen, beziehungen, **rolle**, grenzen, …, selbstfuersorge. Daraus folgt nach der Veröffentlichung die Reihenfolge Verstehen · Beziehungen · Ihre Rolle · Grenzen · Auf sich achten. Heute sichtbar sind drei Punkte. |
| W2-2 Umfang | teilweise | Eigene Zählung (Abschnitt 4): 1301 / 1112 / 1510 Wörter, alle drei knapp **über** dem Richtwert 1300 / 1100 / 1500. Die Basis «alte Seite allein» ist eingehalten. Drei `.puk-say`-Beispiele, die übrigen vorgemerkt; Rollen als Absatz. |
| W2-3 | umgesetzt | `grenzen` › Sätze: drei Paare «Eher problematisch / Eher hilfreich» (`sec/gr-saetze.png`). |
| W2-4 | umgesetzt | Beratung nur auf `index`. «Schutz vor Gespräch» auf `grenzen` nur im Kopf («geht Schutz vor Gesprächsführung») und unter Schutz («Vorrang vor jedem Gespräch»). |
| W2-5 | teilweise | Remission, PTBS, Dissoziation und DBT sind beim ersten Auftreten erklärt; Eisberg-Text und Figur nennen dieselben Begriffe. «Stress» steht aber nicht nur in der Pendel-Beschriftung, wie die Selbstprüfung sagt, sondern auch im Kurztext, in der Vertiefung («Stressreaktion») und in der Legende von Abb. 3 (F-W2-01). |
| W2-6 | umgesetzt | Drei Einstiege als Anliegen; `title` «Startseite | …», H1 «Borderline – Orientierung für Angehörige». |
| S-1 | umgesetzt, teils über den Entscheid hinaus | 2,54 → 2,15, 3,81 → 2,70, 2,40 → 1,79 (eigene Zählung). Siehe F-W1-06. |
| S-2 | weitgehend | Semikolons nur in Quellenzeilen und in der schmalen Leserichtung. Telegrammstil bleibt in Figurentexten (F-S-02). |
| S-3 | umgesetzt | Der Satz zur Formel fehlt. |
| S-5 | umgesetzt | «Was soll ich übernehmen, was möchtest du selbst tun?»; «… wende dich an die Stelle, die wir für Krisen abgemacht haben.» Kein «Sie» in Beispielen unter Angehörigen (Skript). |
| B-3 | umgesetzt | Bei 320 und 360 px sind alle fünf Stationen gleich breit und bündig (`cyc.mjs`: 238 bzw. 198 px, links 41 px). |
| B-1, B-2 | nachgeprüft: behoben | axe ohne `color-contrast`-Verstoss bei 1280 px, auch im Theme «kontrast». Betrifft `summary` der Figuren und den Link im Hinweiskasten von `grenzen`. |
| Danach: Build, Selbsttest 50/50, Produktionsgate | nicht prüfbar | Kein Repositoryzugriff. |
| Danach: Selbstprüfung im Prüfbericht | umgesetzt, Angaben teils nicht reproduzierbar | Matrix, Kennzahlen und Tabelle je ID sind vorhanden. Abweichungen in F-K-03 und F-K-05. |

**Was die bauende Sitzung als Entscheid ausgibt, ohne dass es im Korrekturauftrag steht**

1. **Opferhilfe:** «Entscheid im Chat vom 09.10.2026: ganz weglassen» (`abgleich/README.md` Z. 88; `abgleich/grenzen.md` Prüfbedarf 5: «Entscheid 09.10.2026: kein Link»; `PRUEFBERICHT.md` Z. 101). Im Auftrag steht: «mit der Website der Opferhilfe Schweiz verlinken (… Adresse vor dem Setzen prüfen), ohne Nummer». Ein solcher Entscheid ist nirgends schriftlich belegt.
2. **Annahme 6 «beides steht (Entscheid an Claude übertragen)»** (`abgleich/verstehen.md` Z. 190 und Prüfbedarf 1). Übertragen hat die Fachstelle nur, «was nach der Suizidfrage folgt». Den Wortlaut der Einordnung gibt W1-1 vor («nur noch …, dass … keine Suizidgedanken auslöst»). Die Ergänzung «noch suizidale Handlungen» ist eine eigene Abweichung. Sie ist fachlich nachvollziehbar, aber nicht übertragen.
3. **«Ohne nur» als «Entscheid an Claude übertragen»** (`abgleich/grenzen.md` Z. 617). Den Wortlaut ohne «nur» gibt W1-1 vor, mit «nur» steht er in W1-3. Hier liegt kein übertragener Entscheid vor, sondern ein Widerspruch im Auftrag.
4. **Hauptnavigation mit fünf Punkten** («Entscheid der Fachstelle 09.10.2026», `abgleich/README.md` Z. 57). Der Korrekturauftrag nennt nur W2-1. Der Entscheid steht aber im `UMBAUPLAN.md` (Abschnitt 1) und ist im Auftrag dieser Prüfung bestätigt. Kein Befund, nur nachzutragen.

---

## 2 Visualisierungs-Check je Figur

Angesehen bei 1280 und 360 px sowie im Theme «kontrast» (`shots/fig-*.png`, `shots/kontrast-montage.png`). E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | `v-vs-eisberg` | `v-vs-anspannung` | `v-vs-bewertungen` | `v-vs-mythen` | `v-bz-schleife` | `v-bz-sichten` | `v-gr-bruecke` | `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | T | T | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | E | T | E | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | T | T | E | E | T | E | E |
| 4 | Kernaussage und Erklärtext (2–4 Sätze) | T | T | E | T | E | T | E | T |
| 5 | Ansatzpunkt (B, C, G) | – | E (J, freiwillig) | – | – | E | – | – | E (Verzicht begründet) |
| 6 | Mechanismus nicht doppelt, sondern verbunden | E | E | E | E | T | T | E | E |
| 7 | Kartenraster-Check | E | E | E | T | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | T | T | T | T | T | E | T |
| 9 | Verteilt, keine Textwand | E | E | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | T | T | T | T | T | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | T | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | T | T | E | E | T | T | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N | N | N |

### Belege je T und N

- **Eisberg (`v-vs-eisberg`)**
  - **4:** Der Kurztext ist ein einziger Satz («Nachfragen hilft mehr als Gedankenlesen.»).
  - **10:** Die Kernaussage «… lässt sich erfragen, nicht ablesen» ist stärker als die Quelle. Das Handout sagt: «lädt zum Nachfragen ein», «lässt sich nicht sicher ableiten», Scham «lässt sich nur im Gespräch klären». Siehe F-W1-06.
  - Sonst trägt die Figur gut: Wasserlinie, durchgezogene Kästen für «sichtbar», gestrichelte für «möglich», keine Verbindungslinien. Schmal stehen zwei Schichten untereinander.
- **Anspannung (`v-vs-anspannung`)**
  - **1:** Die Bildlegende nennt Degasperi (2021) und Baranger (2020), die Planzeile nicht.
  - **3, 8:** «Gleitend, keine Stufen» behaupten Kurztext und Plan. Gezeigt sind drei gleich breite Felder mit drei Linienstärken.
  - **4:** Der Kurztext ist ein Satz und beschreibt die Zeichnung.
  - **10:** wie 3, 8.
  - **11:** «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» steht nur in der Vertiefung (F-V-01).
  - **12:** Schmal stehen «← weniger angespannt» und «stärker angespannt →» waagrecht über der senkrechten Liste (`shots/fig-v-vs-anspannung-360.png`).
  - Ansatzpunkt: Er sitzt im Bereich «Zunehmend angespannt». Dort können Angehörige tatsächlich handeln (eigenes Tempo, Pause), und er nimmt sie aus der Pflicht («Sie müssen die andere Person nicht beruhigen»).
- **Pendel (`v-vs-bewertungen`)**
  - **1:** Die geplante Textalternative «Die drei Lagen als Liste mit Überschrift und Erklärung» ist nicht umgesetzt; es gibt keine Erklärung je Lage.
  - **3, 8:** «Unter Stress grösserer Ausschlag» steht nur als Wort am Bogen. Die Zeichnung zeigt eine einzige Auslenkung, keinen Vergleich zwischen kleinem und grossem Ausschlag. Die Beschriftung steht rechts neben dem Bogen und wirkt, als gehöre sie zur negativen Seite (`shots/fig-v-vs-bewertungen-1280.png`). Siehe F-V-02.
  - **10:** Der Kurztext «Unter Stress schlägt der Blick weiter aus» hat keine Absicherung, obwohl er von der Person spricht.
  - **12:** Unter 560 px stehen die vier Beschriftungen als lose Zeilen unter der Zeichnung, ohne Zuordnung zu den Kreisen. «unter Stress grösserer Ausschlag» erscheint wie eine vierte Lage (`shots/fig-v-vs-bewertungen-360.png`). Siehe F-V-03.
- **Annahmen (`v-vs-mythen`)**
  - **4:** Die Kernaussage ist eine Meta-Aussage («Eine realistischere Einordnung hilft Angehörigen, Betroffenen und Fachpersonen.»). Der Kurztext ist ein Satz und deckt zwei von sieben Paaren ab.
  - **7, 9:** Sieben gleich gebaute Kästen, 1459 px hoch bei 1280 und 2748 px bei 360.
  - **8:** Bedeutung tragen nur Grösse und Kasten.
  - **10:** Die Quelle von Annahme 6 deckt die Aussage nur teilweise (F-W1-01).
- **Schleife (`v-bz-schleife`)**
  - **2:** Die Planzeile `v-bz-was-hilft` begründet Text mit «keine Beziehung untereinander». Der Abschnitt sagt aber, die Schleife lasse sich «an mehreren Stellen unterbrechen», ohne die Stellen zu nennen.
  - **6:** wie 2. Die beiden Möglichkeiten in «Handlungsspielraum» sind nicht mit Stationen verbunden.
  - **8:** Die Pfeilspitze von Station 4 nach 5 liegt unter dem Kasten von Station 5 und ist ab 560 px Containerbreite unsichtbar (F-V-04).
  - **10:** Die Grenzen des Modells fehlen; der Bestand hatte «Ein mögliches Erklärungsmodell, keine sichere Aussage …». Der Kurztext sagt «wird», die Kernaussage «kann … werden» (F-V-05).
  - Ansatzpunkt: richtig gesetzt. Station 5 ist die eigene Reaktion der Schwester, also eine Stelle, an der Angehörige handeln können. Der Text begrenzt die Verantwortung («eine Möglichkeit, keine Pflicht, die Schleife allein zu unterbrechen»).
- **Zwei Sichten (`v-bz-sichten`)**
  - **3, 12:** Schmal stehen die Spalten untereinander. Der Vergleich Schritt für Schritt, den `understood` verspricht («nebeneinander wird das sichtbar»), geht dabei verloren. Die Legende sagt weiter «Zwei Spalten».
  - **4:** Der Kurztext ist ein Satz.
  - **6:** Das Zitat «Wenn es mir schlecht geht, bin ich allein.» heisst in Abb. 1 «Station 2», hier «Station 1 · Absage». «Neuer Anlass · Gespräch endet» ist keine Station der Schleife.
  - **8:** Durchgezogen und gestrichelt tragen keine inhaltliche Bedeutung. «gestrichelt» bedeutet im Eisberg «möglich», hier «Sicht der Angehörigen» (F-V-07).
- **Brücke (`v-gr-bruecke`)**
  - **12:** Unter 560 px sind Fahrbahn, Geländer und Pfeiler in der Zeichnung nicht beschriftet; die Liste erklärt sie.
  - Sonst trägt die Metapher: Ufer «Sie» und «die andere Person», Fahrbahn als Verbindung, Geländer, Pfeiler. Die Kernaussage folgt der Quelle.
- **DEAR (`v-gr-dear`)**
  - **4:** Der Kurztext ist ein Satz, eine Einschränkung, keine Erklärung.
  - **8:** Vier gefüllte blaue Punkte, obwohl Leitlinie 07 «höchstens ein gefülltes blaues Feld» erlaubt. Das ist Teil des Musters C (Profil).
- **Alle Figuren**
  - **13:** In den SVG stehen keine Farbattribute (`grep` ohne Treffer); im Theme «kontrast» werden alle sauber dargestellt.
  - **14:** `approvalStatus` steht überall auf «ausstehend».

### Befunde Visualisierung

- **F-V-01 · mittel · Sicherheitshinweis nur in der Vertiefung.**
  - Beleg: `verstehen` › Abb. 2, `details` «Grenzen des Modells»: «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» Im Abschnittstext steht nichts dazu.
  - Im Bestand stand der Satz sichtbar: `verstehen.md` Z. 131 «Bei Gefahr hat Schutz Vorrang.» und Handout `alarm-modus`, Abschnitt «Orientierung».
  - Damit widerspricht die Stelle Leitlinie 06 («Sicherheit … bleiben direkt sichtbar»), Leitlinie 07 Punkt 4 und der Regel «Verweis im Text»: Eine Handlungsanleitung für akute Lagen gehört nicht in eine Vertiefung.
  - `abgleich/verstehen.md` Z. 165 nennt die Verschiebung, aber nicht als Problem.
  - Empfehlung: Satz in den Abschnittstext von «Wenn die Anspannung steigt» holen. Ob danach ein Verweis im Text nötig ist (höchstens einer je Abschnitt), entscheidet die Fachstelle.
- **F-V-02 · mittel · Pendel zeigt den Stress nicht.**
  - `understood` verspricht «Ausschlag, Stress und Rückschwung in einem Bild».
  - Gezeichnet ist eine einzige Amplitude; «grösser» steht nur als Text.
  - Empfehlung: zwei Auslenkungen zeigen, zum Beispiel einen kleinen gestrichelten Bogen «ohne Stress» und einen grossen «unter Stress». Sonst `understood` an das Gezeigte anpassen.
- **F-V-03 · mittel · Pendel schmal ohne Zuordnung.**
  - `borderline.css` Z. 37–40 stellt die Beschriftungen unter 560 px als vier Zeilen ohne Lagebezug unter einen Ausschnitt der Zeichnung.
  - Die geplante Liste mit Erklärung je Lage fehlt.
  - Gerade auf dem Telefon lesen viele Angehörige.
  - Empfehlung: geordnete Liste «links · Mitte · rechts» mit je einem Erklärsatz aus dem Handout. Der Bogen-Text gehört als Satz unter die Liste.
- **F-V-04 · leicht · Pfeil 4 → 5 der Schleife unsichtbar.**
  - Gemessen bei 1280 px: Der Pfad endet bei y = 2284, Station 5 reicht bis y = 2315 (`cyc.mjs`). Die Spitze liegt also im Kasten. Gleich bei 768 px.
  - Bei Muster B trägt die Pfeilrichtung die Bedeutung.
  - Empfehlung: Pfad in `borderline.css` oder SVG kürzen.
- **F-V-05 · leicht · Schleife ohne Modellgrenzen, «kann» und «wird» gemischt, Asymmetrie.**
  - Die Vertiefung mit «Ein mögliches Erklärungsmodell …» ist für W2-2 gestrichen (`abgleich/beziehungen.md` Z. 109, Prüfbedarf).
  - Kurztext «Was die eine Person tut, wird für die andere zum Anlass» gegenüber Kernaussage «kann … werden».
  - Prüfbedarf: Drei der fünf Stationen (Bedeutung, Gefühl, Reaktion) zeigen das Innere der betroffenen Person, die Schwester hat nur «Ereignis» und «Wirkung». Die eigene Deutung der Schwester erscheint erst in Abb. 2. Das kann nahelegen, die Deutung liege nur bei der betroffenen Person.
- **F-V-06 · leicht · Zwei Sichten: Stationsbezug uneinheitlich, schmal kein Vergleich.** Belege unter Punkt 3, 6 und 12. Die Bezeichnungen hat der Auftrag (V-3) vorgegeben.
  - Empfehlung: In Abb. 1 «Bedeutung» als «Station 2 · Bedeutung der Absage» führen oder die Zuordnung in Abb. 2 als «zu Station 1–2» kennzeichnen.
  - Schmal je Schritt beide Sichten hintereinander zeigen statt Spalte nach Spalte.
- **F-V-07 · leicht · Linienarten ohne einheitliche Bedeutung.**
  - Gestrichelt heisst «möglich» (Eisberg, darunter) und «Sicht der Angehörigen» (Abb. 2 `beziehungen`).
  - Der hervorgehobene durchgezogene Kasten heisst «realistischere Einordnung» (Abb. 4 `verstehen`) und «Sicht der betroffenen Person» (Abb. 2 `beziehungen`).
  - Die Meta-Bezeichnungen «Sicht A · durchgezogene Linie» und «Sicht B · gestrichelte Linie» erklären die Zeichnung, nicht den Inhalt. Profilthema P-7.
- **F-V-08 · leicht · Kontinuum in Stufen; schmale Achsenbeschriftung.** Belege unter Punkt 3, 8 und 12 bei Anspannung. Die Achsenbeschriftung war schon früher bemängelt (V-10) und ist nicht Teil des Auftrags. Profilthema P-6.
- **F-V-09 · leicht · Kurztexte zu knapp oder beschreibend.**
  - Ein Satz statt zwei bis vier (Leitlinie 07): Eisberg, Anspannung, Annahmen, Zwei Sichten, DEAR.
  - Die Kernaussage der Annahmen ist Meta-Text.
  - V-4 und V-9 widersprechen sich beim Kurztext von Abb. 2 `verstehen`.
- **F-V-10 · leicht · Brücke schmal unbeschriftet; Kurztext unklar.**
  - Siehe Punkt 12.
  - «Was die Brücke trägt, müssen Sie nicht allein tragen.» ist schwer verständlich. Im Handout steht: «Sie müssen die Brücke nicht allein tragen».
- **F-V-11 · leicht · Annahmen bleiben eine Kastenreihe.**
  - Die Figur ist ein Inhaltscontainer, keine Erklärform (Leitlinie: «zählt nicht als visuelle Erklärung») und bei 360 px 2748 px hoch.
  - Die bauende Sitzung sieht das selbst (T).
- **F-V-12 · leicht · DEAR: vier gefüllte Punkte; Vertiefung ohne Grenzen.**
  - Die Vertiefung «Herkunft und Grenzen des Modells» enthält nur die Herkunft; die Grenze steht im Kurztext.

---

## 3 W1-Vorprüfung (keine Freigabe)

Verglichen sind 39 Aussagen aus allen vier Seiten, Figuren eingeschlossen, mit dem Bestand. An diesen Stellen ist auch der Abgleich Satz für Satz geprüft. Bestandszitate stammen aus `bestand/texte/`.

| Nr. | Neu (Seite › Ort) | Neu | Bestand | Ergebnis |
| --- | --- | --- | --- | --- |
| 1 | index › Beratung | Wortlaut der Fachstelle | KORREKTUR, Abschnitt 1 | wörtlich ✓ |
| 2 | index › Haltung | «Sie sind nicht für die Genesung … verantwortlich.» | `startseite.md` | wörtlich ✓ |
| 3 | verstehen › Erleben | «Viele schwanken zwischen Mitgefühl, Angst …» | Z. 39 «Viele **Angehörige** schwanken …» | Das Subjekt fehlt. Der Satz bezieht sich jetzt grammatisch auf «Menschen mit Borderline» (F-S-01). |
| 4 | verstehen › Diagnose | «Die Diagnose … kann intensive … beschreiben» | Z. 45 «kann **unter anderem** …» | «unter anderem» fehlt; die Aufzählung wirkt vollständig (F-W1-14). |
| 5 | verstehen › Diagnose | «Die Diagnose allein erlaubt keine Aussage darüber, ob von einem Menschen Gefahr ausgeht.» | Z. 47 | wörtlich ✓ |
| 6 | verstehen › Diagnose | Ursachensatz vor «Quellen: WHO, ICD-11; APA; Linehan» | Z. 157–159, Kasten ohne Quelle | Neue Quellenzuschreibung (F-W1-11) |
| 7 | verstehen › Abb. 1, Kernaussage | «lässt sich erfragen, nicht ablesen» | `eisberg`: «lädt zum Nachfragen ein»; «nicht sicher ableiten» | stärker (F-W1-06) |
| 8 | verstehen › Eisberg, Begriffe | Text gleich Figur | `eisberg` | ✓ (W2-5) |
| 9 | verstehen › Anspannung | «Das erklärt manches, hebt die Verantwortung … nicht auf.» | `gehirn` | ✓ |
| 10 | verstehen › Abb. 2, Alarm-Modus | «… werden vorübergehend schwerer» | `alarm-modus`: «können … schwerer werden. Das ist eine Möglichkeit …» | «kann» wird zu «ist» (F-W1-06) |
| 11 | verstehen › Abb. 2, Vertiefung | «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» | `verstehen.md` Z. 131 sichtbar | in die Vertiefung verschoben (F-V-01) |
| 12 | verstehen › Abb. 2, Kernaussage | «Bei hoher Anspannung können Worte schwerer ankommen. …» | Merksatz `anspannungskurve` | wörtlich ✓ |
| 13 | verstehen › Abb. 3, Kernaussage | «Weder eine sehr positive …» | Kernaussage `spaltung` | wörtlich ✓ |
| 14 | verstehen › Abb. 3, Kurztext | «Unter Stress schlägt der Blick weiter aus» | `spaltung`: «kann … vorübergehend enger werden» | Absicherung entfällt (F-W1-06) |
| 15 | verstehen › Bewertungen, Schritt 3 | «Eine ruhige Antwort ist ein Angebot, nicht Ihre Pflicht.» | `spaltung` | gekürzt ✓ |
| 16 | verstehen › Annahme 1 | «Remission (die Kriterien sind eine Zeit lang nicht mehr erfüllt)» | `remission-heilung` Z. 35 | ✓ |
| 17 | verstehen › Annahme 2 | «Aus Druck oder Angst lässt sich kein Motiv sicher ableiten.» | Z. 181: Druck und Angst **bei Angehörigen** | Wessen Druck, bleibt offen (F-W1-08). |
| 18 | verstehen › Annahme 5 | «In Studien berichten viele …»; «Einzelne Merkmale können sich überschneiden.» | Z. 193 «In **klinischen** Studien …» | Einschränkung entfällt (F-W1-14); W1-3 ✓ |
| 19 | verstehen › Annahme 6 | «… löst nach heutigem Wissen weder Suizidgedanken noch suizidale Handlungen aus.» | Z. 197 «… keine suizidale Handlung aus»; WHO 2026 laut `quellen.md` Z. 159 | ausgeweitet; Quelle deckt es nur teilweise (F-W1-01) |
| 20 | verstehen › Annahmen, Abschnittstext | «Auch die Sorge … greift zu kurz.» | – (neu) | neuer Satz, relativiert (F-W1-12) |
| 21 | verstehen › Annahmen, Abschnittstext | «Bleiben Sie bei der Person, soweit …» | `lmk`: «Bleiben Sie **nur** bei der Person …» | «nur» fehlt (F-W1-02) |
| 22 | verstehen › Annahme 7 | «… finden teils keine Unterschiede» | Z. 205 «keine **signifikanten** Unterschiede» | Präzision verloren (F-W1-14) |
| 23 | beziehungen › Verbindung | «Beide können zu Nähe, Klärung und Veränderung beitragen.» | Z. 81 | ✓ (W1-3) |
| 24 | beziehungen › Station 2 | «Erlebte Zurückweisung ist nicht immer eingebildet.» | Z. 187 ✓; `verstehen.md` Z. 68 «das Erleben der betroffenen Person ist dennoch real» | Die Validierung fehlt, obwohl der Abgleich sie hier verortet (F-W1-03). |
| 25 | beziehungen › Station 3 | «Frühere Zuneigung war deshalb nicht unecht» | Z. 235 «nicht **automatisch** unecht» | stärker; steht nicht im Abgleich (F-W1-04) |
| 26 | beziehungen › Station 4 | «…, das sich am Verhalten nicht feststellen lässt» | Z. 271 «keine, die **Angehörige** aus dem Verhalten **allein** feststellen können» | verallgemeinert; steht nicht im Abgleich (F-W1-04) |
| 27 | beziehungen › Station 4 | «Statt zu raten, hilft eine Absprache: «Was soll ich übernehmen …»» | Z. 225, Abschnitt Nähe und Eigenständigkeit | Zusammenhang verschoben (F-W1-05) |
| 28 | beziehungen › Station 5 | «… beweist weder Täuschung noch Ihre Schuld» | Z. 253 und 261: «noch Ursache», «verursacht» | Aus Ursache wird Schuld (F-W1-04). |
| 29 | beziehungen › Handlungsspielraum | «sollte aber weder alle Regulation übernehmen …» | Z. 335 | ✓ (W1-7) |
| 30 | beziehungen › Verantwortung | Satz zu Suizidgedanken und Selbstverletzung | Z. 314 | wörtlich ✓; Verweis im Text folgt ✓ |
| 31 | grenzen › Erkennen | Signale «sind ein Anlass innezuhalten» | `grenzen-erkennen`: «können Anlass sein … Sie beweisen keine Grenzverletzung»; «Ein Signal sagt nicht automatisch, was die Ursache ist» | Einschränkung still entfallen; der Abgleich sagt «zusammengeführt» (F-W1-03). |
| 32 | grenzen › Reihenfolge | «Bei geringerer Belastung genügt oft eine klare Absprache …» | Z. 234–240, Raster «emotional hoch / niedriger» | neue Aussage; Kriterium umgedeutet (F-W1-07) |
| 33 | grenzen › Abb. 1, Kernaussage | «Kontakt braucht Geländer: Grenzen können Kontakt schützen.» | `bruecke-gelaender` | ✓ (W1-2) |
| 34 | grenzen › DEAR, Schritt R | «Benennen, was für das Miteinander hilfreich sein könnte …» | Z. 302: «für die andere Person oder das Miteinander … und würdigen Sie Entgegenkommen» | Der Kern von «Verstärken» fehlt (F-W1-09). |
| 35 | grenzen › Dranbleiben | «Er entzieht niemandem Versorgung …» | `lmk`: «Der Schritt **darf** niemandem … entziehen» | aus einer Pflicht wird eine Beschreibung (F-W1-10) |
| 36 | grenzen › Schutz, Schritt 1 | «… ohne etwas anzukündigen oder zu erklären» | `lmk`, Sicherheit | belegt ✓ |
| 37 | grenzen › Schutz, Schritt 2 | «Holen Sie Hilfe. Bringen Sie sich in Sicherheit.» | Z. 475–476: zuerst Sicherheit, mit Bedingung | Reihenfolge und Bedingung geändert (F-W1-13) |
| 38 | grenzen › Schutz, Schritt 4 | Opferhilfe ohne Weg dorthin | Z. 482: Verweis auf den Ort der Informationen | Der Auftrag verlangte einen Link (F-K-01). |
| 39 | grenzen › Rollen | – | Z. 457 «Welche Grenze passt, ist individuell und darf ohne moralische Bewertung entschieden werden.» | fehlt; der Abgleich sagt «gekürzt» (F-W1-03). |

### Suizid-Aussagen gegen ihre Quelle

- **`verstehen` › Annahme 6 (Figur):** «Direkt nachzufragen, löst nach heutigem Wissen weder Suizidgedanken noch suizidale Handlungen aus.» Quelle in der Vertiefung: «WHO, Suicide: Questions and answers (2026)».
  - Der Bestand beschreibt diese Quelle so: «Sie hält fest, dass direktes Fragen nach Suizidgedanken **eine suizidale Handlung nicht auslöst** und helfen kann, die Lage zu verstehen» (`quellen.md` Z. 159).
  - Für **Suizidgedanken** stützt sich der Bestand auf eine andere Quelle und formuliert vorsichtiger. `unterstuetzen--krise.md` Z. 147: «Die von Dazzi et al. ausgewerteten Studien zeigten **keinen statistisch signifikanten Anstieg** von Suizidgedanken durch direktes Fragen. **Das garantiert keine bestimmte Wirkung im einzelnen Gespräch.**» `notfallplan-krise.md` Z. 49: «verstärkt direktes Fragen Suizidgedanken nicht».
  - Das neue «löst … keine Suizidgedanken aus» ist absoluter und trägt die falsche Quelle. Der Wortlaut geht auf W1-1 im Auftrag zurück.
- **`verstehen` › Annahmen, Abschnittstext:** «fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat» (Bestand Z. 197, wörtlich). Danach folgen der Verweis im Text und «Bleiben Sie bei der Person, soweit dies für Sie sicher möglich ist.»
  - Quelle des letzten Satzes ist das Handout `lmk`, Kasten «Sicherheit». Dort steht er **mit «nur»** als Begrenzung, nach dem Satz zu Gewalt und Selbstgefährdung.
  - `lmk` war im Bestand «Entwurf – fachlich-redaktionelle Freigabe ausstehend» und nennt sich selbst «keine standardisierte oder wissenschaftlich geprüfte Methode».
- **`beziehungen` › Verantwortung:** wörtlich wie im Bestand (Z. 314). Kein Befund.
- **«Sie können helfen, die Lage zu verstehen und passende professionelle Hilfe einzubeziehen»** (Bestand Z. 197): Diese Aussage über den Nutzen des Fragens entfällt. Den zweiten Teil ersetzt der Verweis im Text. Dass Fragen hilft, die Lage zu verstehen, steht nirgends mehr. Teil von F-W1-01.

### Befunde W1 (Prüfbedarf für die Fachstelle)

- **F-W1-01 · mittel · Annahme 6: Ausweitung auf Suizidgedanken mit unpassender Quelle.**
  - Belege oben.
  - Prüfbedarf:
    - Dazzi et al. (2014) als Quelle ergänzen oder WHO nur für «suizidale Handlungen» nennen.
    - Formulierung «verstärkt nach heutigem Wissen keine Suizidgedanken» erwägen.
    - Den Nutzen («hilft, die Lage zu verstehen») wieder aufnehmen.
  - Der Auftrag selbst gab «keine Suizidgedanken auslöst» vor; die Fachstelle sollte das bestätigen.
- **F-W1-02 · mittel · «Bleiben Sie bei der Person …» ohne «nur».**
  - Im Bestand begrenzt der Satz («nur, soweit sicher»), jetzt fordert er zum Dableiben auf.
  - Leitlinie und README sagen: keine Verantwortung für Krisenvermeidung zuschreiben.
  - Prüfbedarf: Der Korrekturauftrag widerspricht sich (W1-1 ohne, W1-3 mit «nur»), die Fachstelle muss entscheiden. Die Quelle ist ein nicht freigegebenes Handout.
- **F-W1-03 · mittel · Still entfallene Aussagen, die der Abgleich als vorhanden ausweist.**
  - (a) `grenzen-erkennen`: «Sie beweisen keine Grenzverletzung» und «Ein Signal sagt nicht automatisch, was die Ursache ist». Laut Abgleich «zusammengeführt | `erkennen`, erster Absatz» (`abgleich/grenzen.md` Z. 452, 462, ausserdem Z. 53 «übernommen»). Der Absatz enthält das nicht. Folge: Schlafprobleme oder Grübeln stehen unter «Woran Sie merken, dass eine Grenze nötig ist» als «Anlass», ohne Hinweis auf andere Ursachen.
  - (b) «das Erleben der betroffenen Person ist dennoch real» (`verstehen.md` Z. 68). Laut Abgleich steht es bei Station 2 (`abgleich/verstehen.md` Z. 128; Z. 26 «Das Erleben ist trotzdem real übernommen»). Dort steht nur das schwächere «nicht immer eingebildet».
  - (c) «aus dem Wechsel allein lässt sich weder eine Ursache noch eine Absicht ableiten». Laut Abgleich steht es bei Station 4 (Z. 131, ausserdem Z. 27 «übernommen»). Es fehlt.
  - (d) «Welche Grenze passt, ist individuell und darf ohne moralische Bewertung entschieden werden». Laut Abgleich «gekürzt | `rollen`» (`abgleich/grenzen.md` Z. 267). Es fehlt.
  - (e) Als Ort für drei Bestandssätze nennt der Abgleich den Eisberg-Kurztext «Aus einem Verhalten lässt sich kein bestimmtes Gefühl ablesen» (`abgleich/verstehen.md` Z. 106, 147, 154). Diesen Text gibt es nicht; der Kurztext lautet «Nachfragen hilft mehr als Gedankenlesen.»
  - Empfehlung: (a) bis (d) wieder aufnehmen oder als «entfällt» mit Grund führen.
- **F-W1-04 · mittel · Bedeutungsänderungen in Sätzen, die als «übernommen» nur gezählt und nicht aufgeführt sind.**
  - «nicht automatisch unecht» → «nicht unecht» (Station 3).
  - «keine, die Angehörige aus dem Verhalten allein feststellen können» → «das sich am Verhalten nicht feststellen lässt» (Station 4).
  - «noch Ursache» / «verursacht» → «noch Ihre Schuld» (Station 5).
  - Keiner der drei Sätze steht in `abgleich/beziehungen.md`. Laut Kopf heisst das «unverändert oder sprachlich geglättet übernommen».
- **F-W1-05 · mittel · Falscher Zusammenhang bei Station 4.**
  - «Möglich ist eine Dissoziation … Statt zu raten, hilft eine Absprache: «Was soll ich übernehmen, was möchtest du selbst tun?»»
  - Im Bestand gehört die Absprache zu «Unterstützung kann gleichzeitig erwünscht und schwer auszuhalten sein» (Z. 223–225), nicht zur Dissoziation.
  - Jetzt liest sie sich als Reaktion auf eine dissoziative Entfernung.
  - Empfehlung: trennen oder die Dissoziation mit dem Bestandshinweis «Wiederkehrende Erfahrungen gehören in die Behandlung» abschliessen.
- **F-W1-06 · leicht · Absicherungen auch bei Aussagen über die betroffene Person entfernt.** Das geht über den Entscheid der Fachstelle hinaus. Belege in den Zeilen 7, 10 und 14. Dazu kommen:
  - «Ob dies im Einzelfall zutrifft, bleibt offen» gestrichen mit Begründung S-1 (`abgleich/beziehungen.md` Z. 138);
  - Denk-Modus «fallen leichter» (Quelle: «können … leichter werden»);
  - `grenzen` «Viele Veränderungen gleichzeitig überfordern» (Bestand: «können überfordern»).
- **F-W1-07 · leicht · Reihenfolge umgedeutet.**
  - Aus «emotional hoch / niedriger» wird «hohe / geringere Belastung».
  - Neu ist die Aussage «genügt oft eine klare Absprache».
- **F-W1-08 · leicht · Annahme 2: Träger von Druck und Angst unklar.** Empfehlung: «Aus dem Druck oder der Angst, die etwas bei Ihnen auslöst, lässt sich kein Motiv sicher ableiten.»
- **F-W1-09 · leicht · DEAR fachlich verkürzt.**
  - Bei «R» fehlen «für die andere Person» und «würdigen Sie Entgegenkommen», also der Kern von «Reinforce». Der Abgleich nennt das.
  - Bei «E» wird aus der Erlaubnis «müssen weder beweisen noch ausführlich rechtfertigen» die Anweisung «ohne sich zu rechtfertigen».
- **F-W1-10 · leicht · Schutz der Kinder als Beschreibung statt als Regel** (Dranbleiben, Zeile 35).
- **F-W1-11 · leicht · Quellenzuordnungen** (Prüfbedarf W1-6):
  - (a) Der Ursachensatz steht jetzt über einer Quellenzeile; im Bestand hatte er keine Quelle.
  - (b) Unter `beziehungen` › Grundlage stehen neu Fruzzetti (2006) und Gunderson et al. (1997). Im Bestand standen sie auf `/verstehen`, Abschnitt «Wenn Nähe und Belastung zusammenkommen».
  - (c) Abb. 2 `verstehen`: Die Legende nennt Degasperi und Baranger, die Planzeile nicht. Die Bezugspunkte des Handouts `anspannungskurve` (Carpenter/Trull, Hoffman et al., Stand by You) fehlen, obwohl sein Merksatz die Kernaussage ist.
- **F-W1-12 · leicht · Neuer Einleitungssatz in den Annahmen.**
  - «Auch die Sorge, ein Gespräch über Suizid mache es schlimmer, greift zu kurz.»
  - Der Satz steht im Bestand nicht. «Greift zu kurz» schwächt ab, was die Figur als widerlegt zeigt. «Auch» hat keinen Bezug: Es ist der erste Satz des Abschnitts.
  - Der Abschnitt führt die Annahmen nicht ein, sondern beginnt mit der Suizidfrage.
- **F-W1-13 · leicht · Schutz, Schritt 2: Reihenfolge.**
  - «Holen Sie Hilfe. Bringen Sie sich in Sicherheit.» Im Bestand kam zuerst die Sicherheit.
  - Prüfbedarf: «Bringen Sie sich in Sicherheit und holen Sie Hilfe.»
- **F-W1-14 · leicht · Kleine Präzisionsverluste:** «unter anderem», «klinischen», «signifikanten» (Zeilen 4, 18, 22).
- **F-W1-15 · leicht · Beispiel setzt eine Krisenabsprache voraus.**
  - Das hilfreiche Beispiel zu späten Anrufen verweist auf «die Stelle, die wir für Krisen abgemacht haben».
  - Die Empfehlung «Vereinbaren Sie für Krisen passende professionelle Anlaufstellen» ist für W2-2 gestrichen (`abgleich/grenzen.md` Z. 198) und kommt erst mit `krise` in Etappe 2.
  - Bis dahin bezieht sich das Beispiel auf etwas, das die Website nicht einführt.

---

## 4 Kennzahlen nachgerechnet

**Methode** (`scripts/extract.mjs`, `scripts/count.py`): genau die Zählweise aus `abgleich/README.md`.
- **Neu:** sichtbarer Text in `main` der gebauten Seite (1280 px), ohne SVG und `.puk-vis-sr`. Vertiefungen eingeschlossen. Text, der nur breit oder nur schmal sichtbar ist, zählt je einmal.
- **Wörter:** durch Leerraum getrennt, mit mindestens einem Buchstaben oder einer Ziffer.
- **Absicherungen:** kann, können, könnte, könnten, kannst, Wörter mit «möglich…», vielleicht, «nicht sicher», «nicht automatisch».
- **Alt:** Bestandstext ohne Kopfblock, Klammermarken, Bild- und Linkadressen. Die Vorschautexte der Akkordeons zählen mit; mit dieser Variante ergibt sich für `verstehen` exakt 2524 wie bei der bauenden Sitzung.

| Seite | Alt, Bauende | Alt, eigene | Neu, Bauende | Neu, eigene | Richtwert | Neu / alt, eigene | Absicherungen je 100 Wörter, Bauende | eigene |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 441 | 238 | 238 | – | 54 % | 1,85 → 1,68 | 1,81 → 1,68 |
| `verstehen` | 2524 | 2524 | 1299 | **1301** | 1300 | 51,5 % | 2,54 → 2,16 | 2,54 → 2,15 |
| `beziehungen` | 2149 | 2151 | 1099 | **1112** | 1100 | 51,7 % | 3,82 → 2,73 | 3,81 → 2,70 |
| `grenzen` | 2985 | 2997 | 1500 | **1510** | 1500 | 50,4 % | 2,41 → 1,80 | 2,40 → 1,79 |

- **Abweichung bei den neuen Wortzahlen:** Mit der beschriebenen Zählweise liegen alle drei Inhaltsseiten **über** dem Richtwert, um 1, 12 und 10 Wörter.
  - Bei `beziehungen` sind nur breit sichtbar 1086 Wörter, nur schmal 1105, beides zusammen 1112 (`innertext.json`).
  - Die Werte 1299 / 1099 / 1500 lassen sich mit keiner dieser Lesarten nachbilden.
  - Die Abweichung ist klein. Sie wiederholt aber das Muster, dass berichtete Zahlen genau auf der Grenze liegen (F-K-03).
- **Absicherungsdichte:** Meine Werte stimmen bis auf ±0,04 überein. Die Senkung ist echt (−15 %, −29 %, −25 %). Siehe aber F-W1-06.
- **Lesart der Quote «51 %»:** Die alte Seite allein enthält Teile, die anderswohin gehen oder Meta-Text sind.
  - `verstehen`: Diagnostik und Begleiterkrankungen (307 Wörter, nach Etappe 2 verschoben) sowie Materialien und Weiterführen (447). Gegen den vergleichbaren Kern (1770 Wörter) liegt die neue Seite bei **74 %**.
  - `beziehungen`: Kern 2054 Wörter, Quote 54 %.
  - `grenzen`: Kern 2673 Wörter, Quote 57 %. Darin sind «Vier Arten» und «DEAR» doppelt erfasst (145 und 151 Wörter, Auswahlansicht plus «Alle … zusammen lesen»); ohne die Doppelungen sind es 64 %.
  - Die Messung «Seite allein» hat der Auftrag so verlangt. Die Quote misst aber nicht, wie stark gekürzt wurde. Der Aufwand an Inhalt bleibt auf `verstehen` hoch, weil sechs Handouts dort eingehen.
- **Semikolons:** Ausserhalb von Quellenzeilen steht nur eines, in der schmalen Leserichtung der Schleife. Wie berichtet.

---

## 5 W2 Gesamtkohärenz und S Sprache

**Geprüft ohne Befund**
- **Navigation:** Die Reihenfolge in `pages` ergibt nach der Veröffentlichung Verstehen · Beziehungen · Ihre Rolle · Grenzen · Auf sich achten, wie entschieden. Heute zeigt der Kopf drei Punkte, `aria-current` stimmt.
- **Keine Doppelungen:** Beratung nur auf `index`; «Schutz vor Gespräch» zweimal auf `grenzen`.
- **Querverweise funktionieren:** `beziehungen` → `verstehen#anspannung`, `#bewertungen`, `grenzen#gewalt`; `grenzen` → `index#beratung`.
- **Gesprächsbeispiele unter Angehörigen in «du»:** Ein Skript fand kein «Sie» in den Beispielen; die Treffer «Sie hört …» und «Sie» sind Pronomen bzw. Ufer-Beschriftung.
- **Rechtschreibung:** kein «ß», nur Guillemets, Paarform.

**Befunde**
- **F-W2-01 · leicht · Begriffe uneinheitlich.**
  - «Stress» neben «Anspannung»: Kurztext, Beschriftung, Vertiefung «Stressreaktion» und Legende von Abb. 3; Eisberg-Schicht «Stress». Die Selbstprüfung behauptet «nur die Beschriftung».
  - «innerer Beziehungsalarm» (`beziehungen`) steht ohne Abgrenzung neben «Alarm-Modus» (`verstehen`).
  - «Belastung» ist neu Kriterium der Reihenfolge.
- **F-W2-02 · leicht · Planbegründungen passen nicht zum Inhalt.**
  - `v-vs-erleben` begründet Text mit «Aufzählung von Erfahrungen ohne darzustellende Beziehung». Der Abschnitt beschreibt aber eine Ambivalenz (Mitgefühl ↔ Wunsch nach Abstand). Für Borderline nennt die Leitlinie ausdrücklich H · Spannungsfeld.
  - `v-bz-was-hilft`: siehe Visualisierung Punkt 2.
  - Das ist kein Bau-Fehler, aber die Begründung trägt nicht.
- **F-W2-03 · leicht · Beratung: «vor Ort» ohne Ort.**
  - Der Wortlaut der Fachstelle nennt «vor Ort oder telefonisch», aber weder Adresse noch Telefonnummer (Profil). Wer vor Ort beraten werden will, findet keinen Ort.
  - Nur Hinweis an die Fachstelle, kein Bau-Befund.
- **F-S-01 · mittel · Bezugslücken und Mehrdeutigkeiten.**
  - «Viele schwanken …» bezieht sich auf «Menschen mit Borderline» (Erleben).
  - «Frühere Zuneigung war **deshalb** nicht unecht»: «deshalb» hat keinen Bezug mehr (Station 3).
  - «**Auch** die Sorge …» steht als erster Satz (Annahmen).
  - «Keine «perfekte» Reaktion repariert **sie**»: Beziehung? Therapeutinnen? (Verantwortung).
  - «**Sie** kann Nähe und eigenen Raum nebeneinander ermöglichen»: die Grenze oder die Anrede «Sie»? (Rollen).
  - «Aus Druck oder Angst …» (Annahme 2).
  - Diese Stellen sind beim Kürzen entstanden; jede verlangt Rückfragen beim Lesen.
- **F-S-02 · leicht · Telegrammstil in Figurentexten.**
  - DEAR: «Eine konkrete Beobachtung, ohne Vermutungen …», «Sagen, was …», «Benennen, was …».
  - Ansatzpunkte: «Das eigene Tempo senken, …», «Statt sich weiter zu verteidigen, das Gefühl anerkennen, …».
  - «Was hilft: Nicht weiterargumentieren, langsamer sprechen, weniger Druck.»
  - «Das erfundene Beispiel: …».
  - S-2 schliesst Telegrammsätze aus.
- **F-S-03 · leicht · Station 2 überladen; Sprecher unklar.**
  - Der erste Eintrag bündelt drei Themen in fünf Sätzen: Beziehungsalarm, Vermutungen, Empathie.
  - Im zweiten Eintrag steht «Die Beschimpfung hat mich verletzt …» ohne Einleitung. Die Einleitung «Das Verhalten konkret benennen …» ist gestrichen. So kann man den Satz der betroffenen Person zuschreiben.
- **F-S-04 · leicht · Einzelstellen.**
  - «Ob ein klärendes Gespräch gewünscht ist, klären beide.» (doppeltes «klären»)
  - «Was die Brücke trägt, müssen Sie nicht allein tragen.»
  - «Vier Arten»: Zwei der vier Einträge bestehen nur aus einem Beispiel, ohne Erklärung (uneinheitlich, `sec/gr-arten.png`).
  - «Dafür brauchen wir gemeinsam andere Unterstützung.» (aus dem Bestand; laut gelesen hölzern)
- **Meta-Text:** «Sicht A · durchgezogene Linie», der Kurztext «Eine gleitende Achse: …» und «Das erfundene Beispiel:». Siehe F-V-07 und F-V-09.

---

## 6 Bedienung und Barrierefreiheit (automatisiert)

Werkzeuge: `scripts/a11y.mjs`, Ergebnis `a11y.json`. **Reale Screenreader-Läufe fehlen**, ebenso Hardwaretastatur und Touch; Stufe 5 ist damit nicht abschliessbar.

| Prüfung | Ergebnis |
| --- | --- |
| axe-core, 1280 px, WCAG 2.0 bis 2.2 A/AA und best-practice | 0 Verstösse auf allen vier Seiten, auch im Theme «kontrast». «Unvollständig» nur `color-contrast` bei 9 HTML-Beschriftungen über SVG (Pendel, Brücke). Von Hand geprüft: Text in `text-default` auf `surface-diagram`, keine Überlagerung mit Linien. |
| Überlauf 320 / 360 / 768 / 1280 / 1440 px | kein waagrechter Überlauf (`scrollWidth = clientWidth`). |
| Zoom 200 % (1280 px bei 200 % = 640 CSS-px) | kein Überlauf. |
| Nur Text 200 % (Grundschrift `html` 200 %) | keine Wirkung: Fliesstext bleibt 21 px, Kurztexte 15 px, weil die Grössen in px gesetzt sind. Profilthema (P-9), siehe F-B-02. |
| Tastatur | Erster Tabstopp ist «Zum Hauptinhalt». Alle Stopps haben den Fokusring (2 px Weiss + 2 px PUK-Blau, `box-shadow`). Reihenfolge folgt dem Lesefluss, auch bei `summary`. Tabstopps: index 10, verstehen 19, beziehungen 15, grenzen **20**. In der Fusszeile gibt es keinen Tabstopp. |
| Überschriften | je ein `h1`, keine Sprünge (Folge in `a11y.json` › `misc`); keine `tel:`-Links; `lang="de-CH"`. |
| Theme «kontrast» | alle 8 Figuren sauber dargestellt (`shots/*-kontrast.png`); keine Farbattribute im SVG. |
| Verweis im Text | `verstehen` › `mythen`, `beziehungen` › `verantwortung`, `grenzen` › `gewalt`: je einmal, **wortgleich** mit `site.config.json` › `responsibility.inline.text`, nicht in `figure` oder `details`. Ort jeweils direkt nach der Anleitung. Bei `grenzen` steht er im `li` von Schritt 2; das ist zulässig, aber kein Fliesstext im engeren Sinn. Auf `index` keiner (keine `sensitiveTopics`). Siehe aber F-V-01: In einer Vertiefung steht eine Anleitung für akute Lagen ohne Verweis. |
| Zuständigkeitsverweis in der Fusszeile | Wortlaut gleich `responsibility.text`; die E-Mail-Adresse ist dort nicht verlinkt (Profil). |
| `borderline.css` | Farben nur `var(--text-default)`, Schrift nur `--type-*` und `--fw-*`, Abstände `--space-*`; keine Hexwerte, keine Schatten, keine eigene Schrift. Einschränkungen siehe F-B-03. |

- **F-B-01 · offen · Reale Screenreader-Läufe fehlen.** Nötig sind mindestens zwei (VoiceOver/Safari, NVDA/Firefox), dazu Hardwaretastatur und Touch.
- **F-B-02 · leicht · Grössere Grundschrift im Browser wirkt nicht.** Die Grössen sind in px gesetzt, deshalb ändert eine grössere Grundschrift nichts. Profilthema.
- **F-B-03 · leicht · `borderline.css`:**
  - Lesetext steht in `type-body-sm` (15 px): die Einordnungen der Annahmen (bis vier Sätze, Z. 56) und die Bereichsbeschreibungen in Abb. 2 (Z. 49). Das Profil verlangt «Lesen in Seitenschrift».
  - Freie Pixelwerte `max-width: 640px` und `400px` sowie `line-height: 1.3`, entgegen «keine freien Pixelwerte».
  - Die Regel `.bl-cycle__who` (Z. 13) wird nirgends verwendet.
- **Hinweis, kein Befund:** Der Kopf ist bei 320 px 386 px hoch, `h1` beginnt bei 476 px (Profilthema P-4).

---

## 7 Befunde zu Bericht und Abgleich

- **F-K-01 · mittel · Opferhilfe-Link nicht umgesetzt; Entscheid nicht belegt.**
  - Der Auftrag verlangt den Link nach geprüfter Adresse. Der Bestand selbst hatte `https://www.opferhilfe-schweiz.ch/de/` am 06.10.2026 als bestätigt geführt (`soforthilfe.md`, «Quellen und Kontaktprüfung»).
  - Schritt 4 sagt jetzt «Opferhilfe und Beratung dazunehmen», ohne zu sagen, wo.
  - Empfehlung: Link setzen (Adresse prüfen) oder den Entscheid mit Datum und Person im Korrekturauftrag oder Prüfbericht festhalten.
- **F-K-02 · mittel · Der Abgleich ist als Beleg nicht verlässlich.**
  - Was als «übernommen» gilt, wird nur gezählt, nicht aufgeführt. Darunter sind Sätze mit Bedeutungsänderung (F-W1-04).
  - Fünf Einträge verweisen auf Text, den es nicht gibt (F-W1-03).
  - Die Tabellen vom 08.10.2026 widersprechen dem Abschnitt «Satz für Satz». Beispiel: `eisberg` «Verstehen bedeutet nicht, Beschimpfungen …» steht oben als «übernommen» (`abgleich/verstehen.md` Z. 53), unten als «entfällt» (Z. 268).
  - Empfehlung: Auch die übernommenen Sätze mit ihrer neuen Fassung aufführen. Die Spalte «Ort neu» per Skript gegen den Seitentext prüfen. Mein Skript hat die Fälle in Sekunden gefunden.
- **F-K-03 · leicht · Kennzahlen der Selbstprüfung nicht reproduzierbar.**
  - Wortzahlen: Abschnitt 4.
  - Tabstopps `grenzen`: 20 statt «40 … einschliesslich Fusszeile». Die Fusszeile hat keinen Tabstopp.
  - Seitenhöhe `verstehen` bei 360 px: 14 198 statt 13 734 px; Abbildung «Annahmen» 2748 statt 2667 px.
  - Die Quote «51 %» misst nicht die Kürzung (Abschnitt 4).
- **F-K-04 · leicht · Behauptete Entscheide.**
  - Annahme 6 «beides» und «ohne nur» sind als «Entscheid an Claude übertragen» ausgegeben, ohne dass die Fachstelle das übertragen hätte.
  - Der Navigationsentscheid ist im Auftrag nicht genannt.
  - Belege in Abschnitt 1.
- **F-K-05 · leicht · Dokumentation veraltet oder widersprüchlich.**
  - `abgleich/README.md` Z. 60: «Brücke und vier Arten (Muster A) | SVG mit nummerierten Marken plus nummerierte Liste» ist überholt (V-5, V-7).
  - Die Selbstprüfung setzt bei der Schleife Punkt 10 auf E, obwohl die Grenzen des Modells fehlen. Punkt 11 steht bei der Anspannung auf E, Punkt 12 beim Pendel auf E. Beides trifft nicht zu (Abschnitt 2).
  - Die Aussage zu W2-5 («nur die Beschriftung») trifft nicht zu.
  - Die ID «B-3» bezeichnet im `PRUEFBERICHT.md` die Landmarken, im Korrekturauftrag Station 3.

---

## 8 Alle Befunde kompakt

| ID | Schwere | Kurz |
| --- | --- | --- |
| F-K-01 | mittel | Opferhilfe-Link nicht umgesetzt; «Entscheid im Chat» nicht im Auftrag |
| F-K-02 | mittel | Abgleich: übernommene Sätze ungeprüft, Verweise auf nicht vorhandenen Text |
| F-V-01 | mittel | «Bei Gefahr … Vorrang» nur in der Vertiefung von Abb. 2 `verstehen` |
| F-V-02 | mittel | Pendel zeigt den grösseren Ausschlag unter Stress nicht |
| F-V-03 | mittel | Pendel schmal: Beschriftungen ohne Zuordnung, Erklärliste fehlt |
| F-W1-01 | mittel | Annahme 6: «keine Suizidgedanken» absoluter als Bestand, WHO-Quelle deckt es nicht |
| F-W1-02 | mittel | «Bleiben Sie bei der Person» ohne «nur», Auftrag widersprüchlich |
| F-W1-03 | mittel | Still entfallene Aussagen, Abgleich behauptet Übernahme (Signal ≠ Ursache u. a.) |
| F-W1-04 | mittel | Bedeutungsänderungen in nicht aufgeführten Sätzen (unecht, Dissoziation, Schuld) |
| F-W1-05 | mittel | Absprache-Beispiel steht als Antwort auf Dissoziation |
| F-S-01 | mittel | Bezugslücken und Mehrdeutigkeiten aus dem Kürzen |
| F-V-04 | leicht | Pfeilspitze 4 → 5 der Schleife unter Station 5 verdeckt |
| F-V-05 | leicht | Schleife ohne Modellgrenzen; «kann»/«wird»; Asymmetrie (Prüfbedarf) |
| F-V-06 | leicht | Zwei Sichten: Station 1/2 uneinheitlich; schmal kein Vergleich |
| F-V-07 | leicht | Linienarten mit wechselnder Bedeutung, Meta-Bezeichnungen |
| F-V-08 | leicht | Kontinuum in Stufen; schmal waagrechte Pfeiltexte |
| F-V-09 | leicht | Kurztexte einsätzig oder beschreibend; Kernaussage Annahmen Meta |
| F-V-10 | leicht | Brücke schmal unbeschriftet; Kurztext unklar |
| F-V-11 | leicht | Annahmen bleiben eine Kastenreihe |
| F-V-12 | leicht | DEAR: vier gefüllte Punkte; Vertiefung ohne Grenzen |
| F-W1-06 | leicht | Absicherungen auch bei Aussagen über die Person entfernt |
| F-W1-07 | leicht | Reihenfolge umgedeutet, «genügt oft» neu |
| F-W1-08 | leicht | Annahme 2: wessen Druck und Angst |
| F-W1-09 | leicht | DEAR R ohne Entgegenkommen; E als Anweisung |
| F-W1-10 | leicht | Kinderschutz als Beschreibung statt Regel |
| F-W1-11 | leicht | Quellenzuordnungen (Ursachen, Fruzzetti/Gunderson, Abb. 2) |
| F-W1-12 | leicht | Neuer Satz «Auch die Sorge … greift zu kurz» |
| F-W1-13 | leicht | Schutz Schritt 2: Hilfe vor Sicherheit |
| F-W1-14 | leicht | «unter anderem», «klinisch», «signifikant» entfallen |
| F-W1-15 | leicht | Beispiel setzt nicht eingeführte Krisenabsprache voraus |
| F-W2-01 | leicht | Stress/Anspannung, Beziehungsalarm/Alarm-Modus |
| F-W2-02 | leicht | Planbegründungen Erleben und Handlungsspielraum tragen nicht |
| F-W2-03 | leicht | Beratung «vor Ort» ohne Ort (Hinweis an die Fachstelle) |
| F-S-02 | leicht | Telegrammstil in Figurentexten |
| F-S-03 | leicht | Station 2 überladen; Sprecher des Beispiels unklar |
| F-S-04 | leicht | Einzelstellen (klären/klärend, Brücke, Vier Arten) |
| F-B-01 | offen | Reale Screenreader-Läufe fehlen |
| F-B-02 | leicht | Grundschrift 200 % ohne Wirkung (px, Profil) |
| F-B-03 | leicht | `borderline.css`: Lesetext 15 px, freie px, tote Regel |
| F-K-03 | leicht | Kennzahlen nicht reproduzierbar (Wörter über Richtwert, Tabstopps, Höhen) |
| F-K-04 | leicht | «An Claude übertragen» ohne Grundlage; Navigation nicht im Auftrag |
| F-K-05 | leicht | Abgleich-README und Selbstprüfung veraltet oder widersprüchlich |

**Stufen:** W1, W2, S, Visualisierungs-Check und Bedienung bleiben **offen**. W3 ist noch nicht begonnen. Für die Fachstelle bleiben offen: Prüfbedarf F-W1-01 bis F-W1-15, alle fachlichen Freigaben (Punkt 14) und der Entscheid zur Opferhilfe.
