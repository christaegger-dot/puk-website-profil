# Befunde · «Borderline – Orientierung für Angehörige», Etappe 1

Unabhängige Prüfsitzung (hat die Website nicht gebaut) · 09.10.2026
Geprüft: `index`, `verstehen`, `beziehungen`, `grenzen` auf der Vorschau `deploy-preview-10--puk-website-profil.netlify.app/templates/website/borderline-angehoerige/` sowie `site.config.json`, `UMBAUPLAN.md`, `abgleich/*.md`, `content/*.html`, `borderline.css`, `PRUEFBERICHT.md` (nur gelesen, Urteile selbst gebildet).
Massstab: Leitlinien 00-ablauf-pruefung-und-freigabe, 00-visuelle-wissensvermittlung, 07-visualisierung-umsetzen, 00-sprache-und-ton, 00-gesamtkohaerenz-und-aufbau, 00-fachliche-qualitaet-und-haltung, 04-barrierefreiheit-und-test.
Vergleichsbasis: Bestand `bl/bestand/texte/*.md` und `INVENTAR.md`.

Es wurden keine Inhalte und kein Code geändert. Fachliche Fragen sind als **Prüfbedarf** markiert; fachliche Freigaben trägt nur die Fachstelle ein.

**Schweregrade:** schwer = Darstellung oder Aussage kann Angehörige fehlleiten oder verfehlt ihren Zweck; mittel = deutlicher Mangel gegen eine Leitlinie, behebbar ohne Neukonzept; leicht = Verbesserung, Unschärfe oder Einzelfall.

**Methode:** Alle 9 Figuren mit Playwright/Chromium bei 1280, 768 (Schleife) und 360 px sowie im Theme `kontrast` fotografiert und angesehen (`shots/`); axe-core 4 auf allen vier Seiten bei 1280 px; Überlaufmessung bei 320/360/768/1280/1440 px und bei 640 px mit Skalierung 2 (entspricht 200 % Zoom auf 1280 px); Tastaturdurchgang mit `Tab`; Wortzählung und Heckenmessung mit `tools/hedges.py` und `tools/prose.py` (gleiche Zählweise für alt und neu). Netlify-Vorschauleiste beim Fotografieren blockiert.

---

## Übersicht der Befunde

| Stufe | schwer | mittel | leicht |
| --- | ---: | ---: | ---: |
| Visualisierungs-Check (V) | 2 | 8 | 4 |
| W1-Vorprüfung (W1) | 1 | 6 | 3 |
| W2 Gesamtkohärenz (W2) | 0 | 3 | 5 |
| S Sprach-Review (S) | 0 | 4 | 3 |
| Bedienung und Barrierefreiheit (B) | 0 | 3 | 3 |
| Profil und Design-System (P) | 0 | 4 | 11 |

Die gravierendsten Punkte: Abbildung 3 auf `verstehen` zeigt kein Pendel und ist eine Kopie von Abbildung 2 mit umgedeuteter Linienstärke (V-01, V-07); der Ansatzpunkt der Bedeutungsschleife sitzt an der Station, an der im Beispiel die betroffene Person deutet, nicht dort, wo Angehörige handeln (V-02); die Empfehlung, direkt nach Suizidplänen zu fragen, steht ohne sichtbaren nächsten Schritt (W1-01).

---

## 1 Visualisierungs-Check (Stufe 4, Leitlinie 07)

### 1.1 Tabelle: 14 Punkte × 9 Figuren

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Belege in 1.2, Befunde in 1.3.

| Nr. | Prüfpunkt | Eisberg `v-vs-eisberg` | Anspannung `v-vs-anspannung` | Pendel `v-vs-bewertungen` | Annahmen `v-vs-mythen` | Schleife `v-bz-schleife` | Zwei Sichten `v-bz-sichten` | Brücke `v-gr-bruecke` | Vier Arten `v-gr-arten` | DEAR `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | T | N | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Text-Begründungen passen | E | E | E | E | T | T | E | E | E |
| 3 | Prüffrage konkret beantwortet und eingelöst | E | T | N | N | E | T | T | N | E |
| 4 | Kernaussage + Erklärtext; Hauptaussage nicht nur in Vertiefung | E | T | E | E | E | E | T | E | E |
| 5 | Ansatzpunkt (B, C, G) markiert oder Verzicht begründet | – | – (J, freiwillig markiert) | – | – | T | – | – | – | E |
| 6 | Derselbe Mechanismus nicht getrennt gezeigt | E | N | N | E | T | T | E | E | E |
| 7 | Kartenraster-Check | E | E | E | N | E | E | E | E | E |
| 8 | Anordnung, Form, Linienart tragen Bedeutung | E | T | N | N | E | T | T | N | E |
| 9 | Über den Erkenntnisweg verteilt, keine unbegründete Textwand | E | E | E | E | T | T | T | T | T |
| 10 | Vereinfacht, nicht verfälscht; Grenzen; Kennzeichnung | E | T | T | E | T | E | T | T | T |
| 11 | Grundaussage ohne Animation, Aufklappen, Skript | E | E | E | E | E | E | E | E | E |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | T | T | T | T | T | E | E | E |
| 13 | Theme «Hoher Kontrast» geprüft | E | E | E | E | E | E | E | E | E |
| 14 | Inhalt fachlich freigegeben | N | N | N | N | N | N | N | N | N |

Gesamtergebnis Stufe 4: **nicht erledigt.** Zwei schwere und acht mittlere Befunde sind offen; Punkt 14 liegt bei der Fachstelle.

### 1.2 Belege je Punkt

**Punkt 1 – Plan entspricht der Seite.** `site.config.json` › `visualPlan` hat für alle 26 Abschnitte der vier Seiten eine Zeile (`sectionId` = `id` geprüft: verstehen 7, beziehungen 6, grenzen 10, index 3). Abweichungen: `v-vs-bewertungen` verspricht im `statement` «Pendel … unter Stress schwingt es weiter aus»; die Figur zeigt eine waagrechte Doppelpfeil-Achse mit drei Feldern, weder Pendel noch Stressabhängigkeit (Bild `shots/fig-v-vs-bewertungen-1280.png`). `v-vs-anspannung`: Plan «Gespräch · kurze Sätze, weniger Druck · Pause»; gebaut steht «Kurze Sätze» im Bereich «Denk-Modus», «weniger Druck» im mittleren Bereich – kleine Verschiebung, inhaltlich vertretbar (Handout «Anspannungskurve», Bereich «Im Gespräch»).

**Punkt 2 – Begründungen für Text.** Für die Figuren selbst erfüllt. Seitenebene `beziehungen`: Die Begründung `v-bz-was-hilft` («unabhängige Möglichkeiten … keine Beziehung untereinander») widerspricht dem eigenen Abschnittstext «Ist wieder Gesprächsraum da, kann die Schleife an mehreren Stellen unterbrochen werden»; der Bestand ordnete die Möglichkeiten ausdrücklich Stellen der Schleife zu («bei der Bedeutung eines Ereignisses, bei der Form der Unterstützung oder bei der späteren Wiedergutmachung», `verstehen--beziehungen.md`, Abschnitt 05). Ebenso `v-bz-verstaerker`: Die Einflüsse werden mit «(Station 2)» im Text zugeordnet statt im Modell. Deshalb T bei Schleife und Sichten (Befund V-13).

**Punkt 3 – Prüffrage eingelöst.**
- Eisberg: «die Schichten zeigen … auch die Grenze des Wissens» – eingelöst: durchgehende Wasserlinie, oben durchgezogen umrandete Begriffe, unten gestrichelte, keine Verbindungslinien.
- Anspannung: «Das Kontinuum zeigt den Übergang» – gezeigt werden drei getrennte Felder mit Trennstrichen und drei Linienstärken (2/4/7 px laut `erklaermuster.css`), also Stufen; der Kurztext sagt gleichzeitig «nicht als feste Stufen» (V-06).
- Pendel: «Dass Bewertungen unter Stress zu den Polen ausschlagen und die Mitte schwerer erreichbar wird» – nicht gezeigt; es gibt keine Variable «Stress» und keinen Ausschlag (V-01).
- Annahmen: `understood` beschreibt ein Layout («jeder Mythos steht direkt neben seiner Korrektur»), keinen Verständnisgewinn; die Figur ist ein Inhaltscontainer (V-05).
- Schleife: «Dass eine Reaktion beim Gegenüber zum neuen Anlass wird» – eingelöst durch geschlossene Schleife mit fünf Pfeilen und Rücksprung (1280, 768, 360 px angesehen).
- Zwei Sichten: «beide versuchen etwas Verständliches und verfehlen sich» – das Nebeneinander trägt das Gleichzeitige; das Verfehlen tragen nur die Wörter; Schrittnummern passen nicht zur Schleife (V-03).
- Brücke: «Grenzen tragen Kontakt statt ihn zu beenden» – im Bild verläuft das Geländer längs, nicht quer zur Fahrbahn; das wäre die tragende Bildaussage, wird aber nirgends benannt; Ufer fehlen (V-08).
- Vier Arten: «die Figur zeigt die vier Bereiche gleichwertig nebeneinander» – der Kreis mit vier unbeschrifteten, nummerierten Vierteln zeigt nichts, was die Liste nicht zeigt (V-04).
- DEAR: «jeder Schritt hat eine eigene Aufgabe» – eingelöst, Mehrwert gegenüber einer nummerierten Liste gering (V-12).

**Punkt 4 – drei Ebenen.** Alle 9 Figuren haben `p.puk-vis-kern` als ganzen Satz und `p.puk-vis-short`. Hauptaussage nur in der Vertiefung bei: Anspannung – «Wo jemand steht, ist von aussen nicht sicher ablesbar» und «bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang» stehen nur in `details` «Grenzen des Modells», obwohl die Figur ohne diese Einschränkung zum Einordnen der anderen Person einlädt; Brücke – die Erlaubnis «Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden» steht nur in der Vertiefung, die Kernaussage sagt das Gegenteil (V-08).

**Punkt 5 – Ansatzpunkt.** Schleife: Station 2 trägt `li.is-ansatz` (doppelte Kontur sichtbar) und «Ansatzpunkt»; `p.puk-vis-ansatz` und Textfassung nennen ihn – formal erfüllt. Inhaltlich liegt er an der Station, an der im Beispiel die betroffene Person deutet («Wenn es mir schlecht geht, bin ich allein.»), nicht an den Stationen, an denen die Angehörige handelt (Station 1 Absage, Station 5 Verteidigung) – deshalb T (V-02). DEAR: «entfällt: Der ganze Ablauf beschreibt das eigene Handeln der Angehörigen» – passend. Anspannung (Muster J, freiwillig): markiert im mittleren Bereich, Formulierung «Sie müssen die andere Person nicht beruhigen» schiebt keine Verantwortung zu.

**Punkt 6 – Verbinden statt doppeln.** Abbildung 2 und 3 auf `verstehen` zeigen denselben Mechanismus (Anspannung verengt Wahrnehmung, Abb. 3 Kern: «Unter hoher Anspannung kann der Blick … enger werden») in zwei getrennten, gleich gebauten Achsen (V-07). Schleife und Sichten nutzen dasselbe Beispiel, sind aber nicht verbunden: vier Schritte gegen fünf Stationen, abweichende Nummern (V-03). Die Einflüsse in `beziehungen` › `verstaerker` stehen als Liste neben dem Modell (V-13).

**Punkt 7 – Kartenraster.** Abbildung 4 auf `verstehen` besteht aus 16 gleichartigen weissen Kästen in zwei Spalten (8 × «Annahme n» / «Realistischer»), 438 Wörter, bei 360 px 4 138 px hoch (`shots/fig-v-vs-mythen-360.png`) – ein Kartenraster als Ersatz für eine Tabelle (V-05). Übrige Figuren ohne Kartenraster.

**Punkt 8 – Form trägt Bedeutung.** Bedeutung tragen: Wasserlinie und Linienart (Eisberg), geschlossene Schleife mit Pfeilen und Rücksprung (Schleife), Reihenfolge und Nummer (DEAR). Teilweise: Linienstärke bei Anspannung (trägt Intensität, aber in Stufen); Linienart bei Sichten (unterscheidet nur «A» und «B»); Brücke (Geländer längs ist bedeutungstragend, Ufer und Personen fehlen). Nicht: Pendel (keine Pendelform; Linienstärke bedeutet hier «Ausschlag», zwei Abschnitte vorher «Anspannung»); Annahmen (gestrichelte Oberkante markiert ausgerechnet die gesicherte Einordnung, profilweit steht gestrichelt für «optional», «kann sich verschieben», «nicht sicher»); Vier Arten (Viertelkreis ohne Beschriftung, gestrichelte Teilungslinien sollen «Überschneidung» zeigen, Viertel können sich aber nicht überschneiden).

**Punkt 9 – Verteilung, Textwand.** `verstehen`: Figuren in 03–06, gut verteilt. `beziehungen`: nach der Schleife folgt `verstaerker` mit 312 Wörtern in einer unformatierten Definitionsliste (`shots/bz-verstaerker-1280.png`). `grenzen`: nach Abschnitt 05 folgen fünf Textabschnitte 06–10 mit zusammen 1 027 Wörtern, darunter `saetze` mit 372 Wörtern in unformatierter Definitionsliste (`shots/grenzen-saetze-1280.png`). Begründet sind sie im Plan, als Textwand wirken sie wegen fehlender Gestaltung (W2-03).

**Punkt 10 – vereinfacht, nicht verfälscht.** Jede Figur nennt Grenzen in der Vertiefung und hat Kennzeichnung («Eigene didaktische Darstellung» bzw. «Quelle: Linehan, M. M. (2015) …»). Teilweise: Anspannung (Rückzug, im Handout «Anspannungskurve» ein eigener, nicht einordenbarer Zustand, fehlt auf der Achse und landet in der Vertiefung; die Achse legt nahe, Rückzug sei «weniger angespannt»); Pendel (Mitte «Differenziertere Sicht» als Punkt zwischen «sehr positiv» und «sehr negativ» liest sich als mittlere Bewertung, gemeint ist das gleichzeitige Halten beider Seiten); Schleife (Perspektive, V-02); Brücke (Kern verschiebt «können … schützen» zu «schützen …, statt sie zu beenden»; Zuschreibung geändert, W1-05); Vier Arten (behauptete Überschneidung); DEAR («Die Schritte folgen in fester Reihenfolge» ist neu, W1-09).

**Punkt 11 – ohne Skript.** Keine Seite lädt ein Skript für die Figuren; Bedienelemente nur native `details`. Bei reduzierter Bewegung keine Animation im Ruhezustand, nach dem Öffnen einer Vertiefung eine Animation mit 0,01 ms.

**Punkt 12 – 320 px, Textalternative.** Kein waagrechter Überlauf bei 320 und 360 px auf allen vier Seiten. Jede Figur hat `aria-labelledby`, `aria-describedby` auf eine sichtbare Textfassung, `data-visual-id` und `data-visual-type`. Mängel schmal: Anspannung und Pendel behalten die waagrechten Endbeschriftungen «← weniger angespannt / stärker angespannt →» bzw. «← sehr positiv / sehr negativ →» über einer senkrechten Liste; Sichten-Kurztext und -Legende sagen «Links … rechts», schmal stehen die Spalten untereinander und der Vergleich je Schritt geht verloren (Schritt 1 A und Schritt 1 B rund 450 px auseinander); Schleife bei 360 px: Station 3 sitzt versetzt (links 51 statt 41 px, Breite 217 statt 238 px), der Rücksprung «Nach Station 5: zurück zu Station 1» ist als Linie und Text sichtbar, «Uhrzeigersinn» nur in `[data-cycle-wide]`; Annahmen 4 138 px hoch.

**Punkt 13 – Hoher Kontrast.** Alle 9 Figuren mit `data-theme="kontrast"` bei 1280 und 360 px fotografiert (`shots/*-kontrast*.png`). In den SVG keine Hexwerte und keine `fill`/`stroke`-Attribute mit Farben (Suche in `content/*.html`); Linien wechseln im Theme auf rgb(0, 40, 194); axe `color-contrast` im Theme: 0 Verstösse auf allen vier Seiten.

**Punkt 14 – Freigabe.** `approvalStatus` «ausstehend» bei allen 9 Figuren.

### 1.3 Befunde Visualisierung

**V-01 · schwer · `verstehen` › 05 Bewertungen › Abb. 3 `v-vs-bewertungen` – Das «Pendel» ist kein Pendel und zeigt nicht, was der Plan verspricht.**
Beleg: Titel «Abbildung 3 · Das Pendel der Bewertungen», Kurztext «Das Pendel kann zu beiden Polen ausschlagen; die dicke Linie an den Enden steht für den Ausschlag». Gezeichnet ist dieselbe waagrechte Doppelpfeil-Achse mit zwei Trennstrichen wie in Abb. 2; die Felder tragen die Klassen `zone--3 / zone--1 / zone--3` (7 / 2 / 7 px). Plan-`statement`: «unter Stress schwingt es weiter aus» – keine Darstellung von Stress, Ruhelage oder Ausschlag. Die Mitte «Differenziertere Sicht» steht als Punkt zwischen den Polen und liest sich als «mittelmässige» Bewertung statt als Sicht, die Positives und Schwieriges zugleich hält (Handout `spaltung`: «Stärken, Grenzen, Nähe und Ärger können gleichzeitig wahr sein»).
Empfehlung: Entweder eine echte Pendelform (Aufhängung, Ruhelage in der Mitte, zwei Ausschlagbögen «bei geringer Anspannung» klein / «bei hoher Anspannung» gross, Pole beschriftet) oder die Aussage als Bereich «Alarm-Modus» in Abb. 2 aufnehmen und Abb. 3 streichen (siehe V-07).

**V-02 · schwer · `beziehungen` › 02 › Abb. 1 `v-bz-schleife` – Ansatzpunkt sitzt dort, wo im Beispiel die betroffene Person deutet.**
Beleg: Station 1 «Die Schwester sagt den Besuch ab.», Station 2 «Bedeutung» – «Wenn es mir schlecht geht, bin ich allein.» (Deutung der betroffenen Person, identisch mit Abb. 2 «Mögliche Sicht der betroffenen Person»), Stationen 3 und 4 Gefühl und Reaktion der betroffenen Person, Station 5 «Die Schwester erklärt und verteidigt sich zunehmend schärfer.» Die Angehörige (die Schwester) handelt an Station 1 und 5. Markiert ist Station 2 mit «nachfragen, welche Bedeutung ein Ereignis bekommen hat». Das Beispiel im Ansatzpunkt – «Ich merke, dass ich dein Schweigen als Ablehnung verstehe. Ist das tatsächlich das, was gerade bei dir passiert?» – ist der Satz der Person, die deutet, also im Beispiel der betroffenen Person; «Schweigen» kommt im Beispiel nicht vor (Rest des früheren Telefon-Beispiels). Die Seite selbst nennt die Hebel der Angehörigen an anderen Stationen: `was-hilft` «Du bist mir wichtig. Heute kann ich nicht kommen. Morgen können wir telefonieren.» (= Station 1) und `zwei-sichten` «sich immer ausführlicher erklären» (= Station 5). Der Fehler steckt schon im Plan (UMBAUPLAN, Abschnitt 3: «nachfragen, wie etwas gemeint war»). Leitlinie 00-visuelle-wissensvermittlung, Grundsatz 7: der Ansatzpunkt beschreibt «eigene Möglichkeiten im Umgang».
Empfehlung: Ansatzpunkte an Station 1 (Absage zugewandt und begrenzt formulieren) und Station 5 (nicht weiter rechtfertigen, Pause) markieren; Station 2 höchstens als «Nachfragen, wenn ein Gespräch möglich ist». Beispielsatz an das Absage-Beispiel anpassen. **Prüfbedarf** Fachstelle (Perspektive des Modells).

**V-03 · mittel · `beziehungen` › 04 › Abb. 2 `v-bz-sichten` – Vier Schritte widersprechen den fünf Stationen der Schleife.**
Beleg: Abb. 2 «1 · Absage», «2 · Vorwurfsvolle Nachrichten», «3 · Die Schwester verteidigt sich», «4 · Das Gespräch endet»; in Abb. 1 sind das Station 1, 4, 5 und keine Station. Sicht A zu Schritt 1 («Wenn es mir schlecht geht, bin ich allein.») ist in Abb. 1 Station 2. Plan: «Dasselbe Beispiel wie in der Schleife: verbunden, nicht gedoppelt.»
Empfehlung: Stationsnummern der Schleife verwenden («Station 1 · Absage», «Station 4 · Nachrichten», «Station 5 · Verteidigung», «danach · Gesprächsende») oder die Sicht der Angehörigen als zweite Spur in die Schleife legen.

**V-04 · mittel · `grenzen` › 03 › Abb. 2 `v-gr-arten` – Der Viertelkreis ist dekorativ und behauptet eine Überschneidung, die er nicht zeigt.**
Beleg: SVG = Kreis, zwei gestrichelte Durchmesser, vier Kreise mit Ziffern 1–4, keine Beschriftung (`shots/fig-v-gr-arten-1280.png`); alle Inhalte stehen in der Liste daneben. Kurztext: «die gestrichelten Linien zeigen, dass sich die Bereiche überschneiden können». Viertel überschneiden sich geometrisch nicht; der volle Kreis legt eine vollständige Einteilung nahe, der Kurztext sagt «keine Klassifikation». Leitlinie 00-visuelle-wissensvermittlung, Muster A: «Verzichten, wenn nur Aufzählung ohne Beziehung»; «Dekorative Bilder … erfüllen den Plan nicht».
Empfehlung: Text (Liste) mit Begründung «Aufzählung ohne Beziehung». Wenn die Überschneidung die Aussage ist: vier sich überlappende Bereiche mit einem Beispiel in der Schnittmenge (etwa «Nächtliche Anrufe: Zeit und Gefühle»).

**V-05 · mittel · `verstehen` › 06 › Abb. 4 `v-vs-mythen` – Kartenraster aus 16 Kästen statt Tabelle; Linienart verkehrt.**
Beleg: 8 Paare in 16 gleich gestalteten Kästen, 438 Wörter, schmal 4 138 px. Muster E ist für «zwei Optionen nach gleichen Merkmalen»; hier hat jede Zeile ein anderes Thema. Die Einordnung («Realistischer») trägt die gestrichelte Oberkante, die Annahme die durchgezogene – die gesicherte Aussage sieht vorläufig aus. Leitlinie: Inhaltscontainer «zählen nicht als visuelle Erklärung».
Empfehlung: Als zweispaltige Tabelle oder Definitionsliste ohne «Abbildung» führen; Planzeile «Text: Inhaltscontainer»; wenn Linienart, dann gestrichelt für die Annahme.

**V-06 · mittel · `verstehen` › 04 › Abb. 2 `v-vs-anspannung` – Wessen Anspannung? Einschränkungen nur in der Vertiefung; Stufen trotz «keine Stufen».**
Beleg: Die Bereiche beschreiben die andere Person («Argumente und Erklärungen kommen schwerer an»), der Ansatzpunkt die eigene («auf die eigene Anspannung achten»); die Figur sagt nicht, wessen Zustand die Achse zeigt. Wer «Was helfen kann» anwenden will, muss die andere Person einordnen; dass das nicht sicher geht («Wo jemand steht, ist von aussen nicht sicher ablesbar»), steht nur in der Vertiefung, ebenso «bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang». Rückzug, im Handout «Anspannungskurve» ein eigener Bereich («Schweigen, Wegsehen oder Erstarren … erlauben keine sichere Einschätzung»), fehlt auf der Achse. Kurztext «nicht als feste Stufen; die Linie wird mit der Anspannung dicker» – gezeichnet sind drei Stufen (2/4/7 px) mit Trennstrichen. Die Zustands-Landkarte (drei unabhängige Dimensionen, «keine Stufen») ist auf eine Achse reduziert (vom Bau selbst als Prüfbedarf 3 vermerkt).
Empfehlung: Achse beschriften («Anspannung im Gespräch – bei beiden möglich»); die Einschränkung «von aussen nicht sicher ablesbar» und den Schutzsatz in den Kurztext; Rückzug sichtbar neben der Achse als «nicht einordenbar»; Linienstärke stetig ansteigen lassen oder Kurztext anpassen. **Prüfbedarf** zur Landkarte.

**V-07 · mittel · `verstehen` › Abb. 2 und Abb. 3 – Zwei gleich aussehende Figuren für denselben Mechanismus, gleicher Code mit anderer Bedeutung.**
Beleg: Beide Figuren: SVG-Achse `M8 12 L 992 12` mit Pfeilspitzen an beiden Enden und Strichen bei 333 und 667, Endbeschriftungen, drei Felder mit Oberkante. In Abb. 2 heisst dicke Linie «mehr Anspannung» und links «weniger angespannt»; in Abb. 3 heisst dicke Linie «Ausschlag», und links steht «sehr positiv» mit dicker Linie. Wer Abb. 2 gelesen hat, liest Abb. 3 links als ruhig. Abb. 3 Kern beschreibt denselben Mechanismus wie Abb. 2 («Unter hoher Anspannung kann der Blick … enger werden»). Leitlinie 07, Punkt «Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt».
Empfehlung: Bewertungen als Wirkung im Bereich «Alarm-Modus» der Abb. 2 zeigen und Abb. 3 streichen, oder Abb. 3 in eigener Form (V-01).

**V-08 · mittel · `grenzen` › 02 › Abb. 1 `v-gr-bruecke` – Kernaussage widerspricht der Vertiefung; Zeichnung trägt die Metapher kaum.**
Beleg: Kern «Kontakt braucht Geländer: Grenzen schützen die Verbindung, statt sie zu beenden.» Vertiefung: «Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden.» Seitenkopf: «auch eine Pause oder eine Trennung kann eine mögliche Entscheidung sein.» Handout `bruecke-gelaender`, Schutzsatz: «Grenzen können Kontakt schützen.» Die Zeichnung: keine Ufer (die Legende behauptet «Brücke zwischen zwei Ufern»), zwei dünne Pfeiler mit Füssen im Wasser, nur einer nummeriert, obwohl der Text fünf Stützen nennt («Absprachen, Pausen, Fachpersonen, andere Vertrauenspersonen und Selbstschutz»); das Geländer wirkt wie ein Zaun. Die eigentlich tragende Bildaussage – das Geländer läuft entlang der Fahrbahn und versperrt den Weg nicht – wird nicht benannt. Die Figur steht im grauen Rahmen, Leitlinie 07: «Illustrationen stehen offen (`puk-vis-figure--open`)».
Empfehlung: Kern mit «können» und ohne «statt sie zu beenden»; die Erlaubnis, Kontakt zu beenden, in den Kurztext; Ufer beschriften (Sie · die andere Person), Pfeiler einzeln beschriften; offene Figur. **Prüfbedarf** (siehe W1-02).

**V-09 · mittel · alle Figuren – Ebene 2 beschreibt die Zeichnung statt den Inhalt; Text um die Figuren überwiegt.**
Beleg: Kurztexte: «die Linie wird mit der Anspannung dicker» (Abb. 2 verstehen), «durchgezogene und gestrichelte Oberkante unterscheiden beide. Schmal folgt jede Einordnung direkt auf ihre Annahme.» (Abb. 4), «Die vier Felder sind gleich gross und gleichwertig; die gestrichelten Linien zeigen …» (Abb. 2 grenzen), «Links die mögliche Sicht …, rechts die der Angehörigen; die Linienart unterscheidet sie.» (Abb. 2 beziehungen), «Unter jedem Stichwort steht das Beispiel. Bei Station 2 ist ein Ansatzpunkt für Angehörige markiert.» (Abb. 1 beziehungen). Die sichtbare Legende wiederholt dasselbe. Messung: Die 9 Figuren enthalten 2 586 von 5 788 Wörtern der vier Seiten (45 %); Anspannung 368, Schleife 349, DEAR 302, Vier Arten 292 Wörter. Leitlinie 00-visuelle-wissensvermittlung, Ebene 2: «zwei bis vier zusammenhängende Sätze, konkrete Beispiele».
Empfehlung: Kurztexte auf die inhaltliche Aussage und ein Beispiel beschränken; Bildbeschreibung nur in der Textfassung. Siehe P-10.

**V-10 · leicht · schmale Darstellung (360 px) – Orientierung und Ausrichtung.**
Beleg: Abb. 2 und 3 auf `verstehen`: waagrechte Pfeilbeschriftungen über senkrechter Liste; Abb. 2 auf `beziehungen`: «Links … rechts» bei untereinanderstehenden Spalten; Abb. 1 auf `beziehungen`: Station 3 versetzt (gemessen: left 51/41 px, width 217/238 px). Schmal ist die Ansatzpunkt-Markierung (4-px-Linie links) von den Bereichslinien des Kontinuums (2/4/7 px links) kaum zu unterscheiden.
Empfehlung: Schmal «oben weniger, unten stärker» bzw. «oben/unten»; Station 3 ausrichten; Ansatzpunkt schmal anders markieren.

**V-11 · leicht · seitenübergreifend – Linienart und Linienstärke haben keine stabile Bedeutung.**
Beleg: gestrichelt = «darunter möglich, nicht sicher» (Eisberg), «Realistischer» (Annahmen), «Sicht der Angehörigen» (Sichten), «Überschneidung möglich» (Vier Arten); Linienstärke = Anspannung (Abb. 2) bzw. Ausschlag (Abb. 3). Dass die Sicht der Angehörigen gestrichelt ist, kann als «weniger gewichtig» gelesen werden.
Empfehlung: Gestrichelt nur für «möglich / nicht sicher» verwenden; zwei gleichwertige Sichten mit gleicher Linienart und Beschriftung unterscheiden. Siehe P-09.

**V-12 · leicht · `grenzen` › 05 › Abb. 3 `v-gr-dear` – Geringer Mehrwert, eine ergänzte Aussage, leere fünfte Spalte.**
Beleg: Pfad mit vier gefüllten Punkten; das Raster der Vorlage hat fünf Spalten, die fünfte bleibt bei 1280 px leer, die Spalten sind dadurch rund 22 Zeichen breit, Erklärung und Beispielsatz laufen in derselben grauen Farbe ohne Absatz ineinander. «Die Schritte folgen in fester Reihenfolge» steht weder im Handout `dear` noch auf `/grenzen` (W1-09).
Empfehlung: Beispielsatz absetzen (Anführungszeichen-Zeile in `text-default`), «feste» streichen oder belegen.

**V-13 · mittel · `beziehungen` › 03 und 05 – Handlungsmöglichkeiten und Einflüsse getrennt vom Modell.**
Beleg: siehe Punkt 2. «(Station 2)», «(Station 3)» in den Überschriften der Einflüsse; die fünf Möglichkeiten in `was-hilft` ohne Bezug zu Stationen, obwohl der Bestand sie drei Stellen der Schleife zuordnete. Leitlinie 00-visuelle-wissensvermittlung, Grundsatz 8 «Verbinden statt doppeln»; Leitlinie 07: «kein ‹nebeneinander›, wenn der Text ein Zusammenwirken beschreibt».
Empfehlung: Mögliche Unterbrechungen als Ansatzpunkte an den Stationen der Schleife markieren (zusammen mit V-02); `was-hilft` verweist dann auf die Stationen.

**V-14 · leicht · `verstehen` › 03 › Eisberg – Abschnittstext und Figur nennen verschiedene «verborgene» Begriffe.**
Beleg: Text «Scham, Sorge vor Beziehungsverlust, Ohnmacht, innere Leere»; Figur «Angst, Scham, Trauer, Einsamkeit, Stress». Zwei nicht abgestimmte Listen nebeneinander.
Empfehlung: Eine Liste, im Text auf die Figur verweisen.

---

## 2 W1-Vorprüfung (fachlich, ohne Freigabe)

Vorbemerkung: Der Abgleich der bauenden Sitzung belegt Treue zum Bestand, nicht Richtigkeit. Der Bestand selbst war nicht freigegeben (W1-06). Diese Vorprüfung vergleicht 21 Aussagen; sie ersetzt die W1 der Fachstelle nicht.

### 2.1 Vergleich neu – alt

| Nr. | Seite › Abschnitt | Neu (Zitat) | Alt (Zitat, Datei) | Ergebnis |
| --- | --- | --- | --- | --- |
| 1 | verstehen › borderline | «Die Diagnose allein erlaubt keine Aussage darüber, ob von einem Menschen Gefahr ausgeht.» | gleich (`verstehen.md`, «Was die Diagnose … beschreiben kann») | übernommen, wörtlich |
| 2 | verstehen › erleben | «Solche Erfahrungen kommen nicht in jeder Beziehung vor …»; «bedeutsam, erschöpfend und unsicher» | «… kommen nicht bei allen Menschen mit Borderline vor …»; «bedeutsam, zart, erschöpfend oder unsicher» | Bedeutungsänderung leicht: Bezug Person → Beziehung; «oder» → «und» behauptet alles zugleich (W1-10) |
| 3 | verstehen › Abb. 1 | «Sichtbar: Wut, Vorwürfe, Lautwerden, Rückzug» | Handout `eisberg`: «Wut, Vorwürfe, Laut werden»; `verstehen.md`: «Rückzug oder Schweigen» | ergänzt, im Bestand belegt |
| 4 | verstehen › Abb. 2 Kern | «Bei hoher Anspannung können Worte schwerer ankommen. Sie dürfen eine Pause machen oder das Gespräch beenden.» | Handout `anspannungskurve`, Merksatz, gleich | übernommen, wörtlich |
| 5 | verstehen › Abb. 2 | Rückzug nur in der Vertiefung; eine Achse | `anspannungskurve`: Rückzug eigener Bereich; `zustands-landkarte`: «drei getrennt betrachtete Dimensionen … keine Stufen» | Verdichtung mit Bedeutungsverlust, **Prüfbedarf** (V-06) |
| 6 | verstehen › Abb. 3 Kern | «keine Momentaufnahme beschreibt die ganze Person oder Beziehung» | `spaltung`: «Weder eine sehr positive noch eine sehr negative Momentaufnahme muss die ganze Beziehung oder Person beschreiben.» | Verschiebung «muss nicht» → absolut (W1-07) |
| 7 | verstehen › Abb. 3 Mitte | «Stärken, Grenzen, Nähe und Ärger dürfen gleichzeitig wahr sein» | `spaltung`: «… können gleichzeitig wahr sein» | Modalität geändert (Möglichkeit → Erlaubnis), leicht |
| 8 | verstehen › Abb. 4, Annahme 6 | «… sie können helfen, die Lage zu verstehen und professionelle Hilfe einzubeziehen.» | «… passende professionelle Hilfe einzubeziehen. Mehr dazu auf Soforthilfe.» | nächster Schritt entfallen, **Prüfbedarf schwer** (W1-01) |
| 9 | verstehen › Abb. 4, Annahme 5 | «belastenden Kindheitserfahrungen»; «verschiedene Diagnosen, die zusammen auftreten können» | «Misshandlung, Vernachlässigung oder andere belastende Kindheitserfahrungen»; «Einzelne Merkmale können sich überschneiden» | Aussage zur Überschneidung entfallen, im Abgleich nicht genannt (W1-08) |
| 10 | beziehungen › Abb. 1 Ansatzpunkt | Station 2 der Absage, Satz «… dein Schweigen als Ablehnung …» | Kasten «Beobachtung, Deutung und Gefühl auseinanderhalten», Beispiel Telefon, deutende Person ist die Sprecherin | Perspektive verschoben, **Prüfbedarf** (V-02) |
| 11 | beziehungen › verbindung | «Fähigkeiten beider Seiten: Niemand «handhabt» den anderen.» | «Fähigkeiten beider Seiten stärken … Beide können zu Nähe, Klärung und Veränderung beitragen; eine Person «handhabt» nicht die andere.» | Ressourcenaussage verloren, nur die Verneinung bleibt (W1-08) |
| 12 | beziehungen › verstaerker | «Das kann auch Angehörigen geschehen. Vermutungen als überprüfbare Fragen formulieren. Die Diagnose erlaubt weder …» | zusätzlich: «Etwas stark mitzufühlen, zutreffend zu verstehen und hilfreich zu reagieren sind zudem verschiedene Fähigkeiten.» | Aussage verloren; der Empathie-Satz steht jetzt ohne Bezug (W1-08, S-03) |
| 13 | beziehungen › was-hilft | «Dauernd verfügbar zu sein kann kurzfristig entlasten und Sie zugleich mehr belasten»; «muss nicht alle Regulation übernehmen» | «Wenn Angehörige … dauerhaft verfügbar bleiben, kann das kurzfristig entlasten und zugleich die eigene Belastung erhöhen. Wie die andere Person Sicherheit erlebt, lässt sich daraus nicht ableiten»; «sollte aber weder alle Regulation übernehmen …» | Bezug unklar (wen entlastet es?); «sollte nicht» → «muss nicht» (Empfehlung → Erlaubnis) (W1-09) |
| 14 | beziehungen › verantwortung | «Bei Suizidgedanken oder Selbstverletzung … dann braucht es eine angemessene professionelle Einschätzung.» | gleich, mit Soforthilfe-Hinweis am Seitenende | übernommen; Weg fehlt (W1-01) |
| 15 | grenzen › Abb. 1 Kern | «Grenzen schützen die Verbindung, statt sie zu beenden.» | «Grenzen können Kontakt schützen. Sie dürfen ein Gespräch oder – wenn nötig – auch einen Kontakt beenden.» | Bedeutungsverschiebung (W1-02) |
| 16 | grenzen › Abb. 1 Kennzeichnung | «Eigene didaktische Darstellung der Fachstelle · Bezugspunkte: Hoffman …; NICE CG78; Mason und Kreger» | Handout: «Quelle: Hoffman …; NICE CG78; Linehan, M. M.; Mason & Kreger; Stand by You / Sotomo» | Zuschreibung geändert, **Prüfbedarf** (W1-05) |
| 17 | grenzen › saetze | «Quellen: Mason und Kreger (2014); Linehan (2015).» | `/grenzen` «Konkrete Grenzsätze für typische Situationen»: ohne Quelle; Beispiele aus Fachstellentexten und `/uebungen` | neue Quellenzuschreibung, **Prüfbedarf** (W1-05) |
| 18 | grenzen › gewalt, Schritt 1 | «Verlassen Sie die Situation … ohne etwas anzukündigen oder zu erklären.» | `lmk`, Sicherheit: zusätzlich «Bei akuter Gefahr oder Sorge um Selbstgefährdung …» und «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» | zwei Aussagen entfallen; Abgleich sagt «übernommen» (W1-08) |
| 19 | grenzen › konsequenz | H2 «Konsequenz heisst nicht Härte»; Text ohne positive Bestimmung | «Konsequenz heisst nicht Härte. Es heisst, dass Sie sich an tragfähigen Absprachen orientieren. Sie dürfen eine Grenze verändern …»; Zitat «… braucht meist Wiederholung, innere Festigkeit …» | positive Bestimmung entfallen, Merksatz verdichtet (vom Bau als Prüfbedarf 4 vermerkt) (W1-08) |
| 20 | grenzen › dear | «Die Schritte folgen in fester Reihenfolge» | «Vier Schritte helfen, ein Anliegen vorzubereiten.» | ergänzte Aussage (W1-09) |
| 21 | index › beratung; grenzen › kontakt | «Klären Sie direkt bei der Fachstelle Angehörigenarbeit, wer das Angebot nutzen kann, ob Kosten entstehen …» | gleich; dazu Linktext «Kostenlos und ohne Vollmacht beraten lassen» | Widerspruch bleibt offen (W1-04) |

### 2.2 Befunde W1

**W1-01 · schwer · `verstehen` › Abb. 4 Annahme 6; `beziehungen` › 06 – Empfehlung zur direkten Suizidfrage ohne sichtbaren nächsten Schritt. Prüfbedarf.**
Beleg: «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt nach Suizidgedanken oder einem Plan. … professionelle Hilfe einzubeziehen.» Wo diese Hilfe zu finden ist, steht nur in der Fusszeile («Wenden Sie sich dann an den ärztlichen Notfalldienst oder eine Notfallstation, bei Gefahr an die Polizei»), ohne Verweis aus dem Text. Wer die Frage stellt und ein «Ja» hört, steht ohne Weg da. Der Bau hat das als W1-Frage 1 offen gelassen.
Empfehlung: Fachstelle entscheidet; mindestens ein Satz mit Verweis auf den Abschnitt «Zuständigkeit» der Fusszeile (ohne Nummer). Profilfrage: P-01.

**W1-02 · mittel · `grenzen` › Abb. 1 – Kernaussage verschiebt die Bedeutung des Handouts. Prüfbedarf.** Siehe Tabelle Nr. 15 und V-08.

**W1-03 · mittel · `beziehungen` › Abb. 1 – Ansatzpunkt aus der Perspektive der betroffenen Person. Prüfbedarf.** Siehe Tabelle Nr. 10 und V-02.

**W1-04 · mittel · `index` › beratung, `grenzen` › kontakt – Die Absenderin bittet die Lesenden, bei ihr selbst nachzufragen, ob Kosten entstehen und wer das Angebot nutzen kann. Prüfbedarf.**
Beleg: Die Fachstelle ist laut Kopf Absenderin; der Satz stammt aus dem Bestand, der die Fachstelle als Dritte nannte. Der Bestand nannte zugleich «Kostenlos und ohne Vollmacht beraten lassen». Für Angehörige zentral wäre auch, ob die Beratung möglich ist, wenn die betroffene Person nicht in der PUK behandelt wird.
Empfehlung: Bedingungen (Kosten, Zugang, Vertraulichkeit, Terminweg) direkt nennen; Satz «Klären Sie direkt …» streichen.

**W1-05 · mittel · alle Seiten – Quellenstandard nicht erfüllt; zwei Zuschreibungen geändert. Prüfbedarf.**
Beleg: Keine Seite nutzt `.puk-longform__sources` mit `.puk-longform__source-use` (Leitlinie 00-fachliche-qualitaet, Quellenstandard); Quellen stehen als Kurzangaben in uneinheitlicher Form («WHO, ICD-11 (2024)» / «Linehan, M. M. (2015), DBT Skills Training Manual, 2. Auflage, Guilford Press» / «Opferhilfe Schweiz; EBG» ohne Jahr). Für Foxhall et al. (2019), McLaren et al. (2022), Cavicchioli et al. (2021), Sutherland et al. (2020), Leonards et al. (2024) gibt es nirgends eine Vollangabe (auch im Bestand nicht). Geänderte Zuschreibungen: Tabelle Nr. 16 und 17.
Empfehlung: Quellenliste je Seite mit Verwendungszweck vor der Freigabe, nicht erst in Etappe 3; Zuschreibungen klären.

**W1-06 · mittel · Grundlage – Der Bestand war fachlich nicht freigegeben.**
Beleg: Handouts `gehirn`, `zustands-landkarte`, `grenzen-erkennen`, `lmk`: «Entwurf – fachlich-redaktionelle Freigabe ausstehend»; `eisberg`, `alarm-modus`, `anspannungskurve`: «fachlich-redaktionelle Freigabe ausstehend»; `/grenzen` und `/verstehen/beziehungen`: «Freigabe des aktuellen Stands ausstehend». Diese Texte tragen Abb. 2 (verstehen) und Teile von `grenzen` › erkennen, konsequenz, gewalt.
Empfehlung: W1 als vollständige fachliche Prüfung, nicht als Abgleich gegen den Bestand.

**W1-07 · leicht · `verstehen` › Abb. 3 – Kernaussage absolut statt relativ.** Tabelle Nr. 6 und 7.

**W1-08 · mittel · mehrere Abschnitte – Aussagen sind entfallen, ohne dass der Abgleich es nennt («Nichts verschwindet still», UMBAUPLAN Abschnitt 5).**
Beleg: Tabelle Nr. 9, 11, 12, 18, 19. Für Nr. 18 steht im Abgleich `grenzen.md` «`lmk` · Sicherheit … | übernommen», obwohl zwei Sätze fehlen.
Empfehlung: Abgleich je Satz nachführen; Fachstelle entscheidet über Wiederaufnahme, besonders Nr. 18 (Sicherheit) und Nr. 19.

**W1-09 · leicht · `grenzen` › dear, `beziehungen` › was-hilft – Ergänzte oder verschobene Aussagen. Prüfbedarf.** Tabelle Nr. 13 und 20.

**W1-10 · leicht · `verstehen` › erleben – Bezug und Konjunktion verschoben.** Tabelle Nr. 2.

---

## 3 W2 Gesamtkohärenz

**W2-01 · mittel · `site.config.json` › `pages` – Reihenfolge widerspricht dem Navigationsentscheid vom 09.10.2026.**
Beleg: Entscheid (UMBAUPLAN Abschnitt 1, `abgleich/README.md`): «Verstehen · Beziehungen · Ihre Rolle · Grenzen · Auf sich achten». In `pages` steht `grenzen` an 4., `rolle` an 6. Stelle. Die Navigation folgt laut Leitlinie 00-gesamtkohaerenz der Reihenfolge in `pages`; sobald `rolle` veröffentlicht ist, lautet sie «Verstehen · Beziehungen · Grenzen · Ihre Rolle · Auf sich achten». Heute zeigt der Kopf korrekt nur die drei gebauten Punkte (Entwürfe erscheinen nicht).
Empfehlung: `rolle` vor `grenzen` einordnen.

**W2-02 · mittel · Umfang – Richtwerte deutlich überschritten; das Ziel «ein Drittel» ist nur durch die Bezugsgrösse erreicht.**
Beleg: Wörter neu (eigene Zählung, deckt sich mit `abgleich/README.md` bis ±2): index 192, verstehen 1 798, beziehungen 1 521, grenzen 2 277 – gegenüber den Richtwerten 300/1 100/1 000/1 200 also 64/163/152/190 %. Gegenüber der jeweiligen alten Seite allein: verstehen 72 %, beziehungen 76 %, grenzen 81 %. Die «38 %» für `grenzen` entstehen, weil Handouts mitgezählt werden, die laut Abgleich «inhaltsgleich mit `/grenzen`» waren (`4-arten-von-grenzen`, `dear`). Seitenhöhe bei 360 px: grenzen 20 206 px (rund 25 Bildschirme à 800 px), verstehen 16 476 px, beziehungen 13 917 px. 45 % der Wörter stehen in Figurenrahmen (V-09).
Empfehlung: Fachstelle entscheidet über Kürzungen; Kandidaten: Text um die Figuren (V-09), `grenzen` › rollen, Doppelungen (W2-04).

**W2-03 · mittel · `beziehungen` › 03, 05; `grenzen` › 06, 09 – Unformatierte Definitionslisten erzeugen Textwände.**
Beleg: `dt` in normaler Schrift, `dd` mit Browser-Einzug 40 px, keine Abstände zwischen Einträgen; «Eher problematisch:» und «Eher hilfreich:» stehen mit `<br>` im Fliesstext (`shots/grenzen-saetze-1280.png`, `shots/bz-verstaerker-1280.png`). Die Gegenüberstellung problematisch/hilfreich, im Bestand zwei abgesetzte Felder, ist nicht mehr erkennbar.
Empfehlung: Formulierungsbausteine als gestaltete Komponente (Situation als Zwischentitel, Beispiele abgesetzt); siehe P-04.

**W2-04 · leicht · seitenübergreifend – Wiederholungen.**
Beleg: Beratungsabsatz fast wörtlich auf `index` › beratung und `grenzen` › kontakt; der Hinweis «Schutz vor Gespräch» steht auf `grenzen` fünfmal (Kopf, reihenfolge 1, DEAR-Vertiefung, kontakt, gewalt); Annahme 7 («Wer bei anderen stabiler wirkt, spielt nur») und `beziehungen` › verstaerker («Dass etwas anderswo gelingt, beweist weder Täuschung noch Ursache») sagen dasselbe.
Empfehlung: Je einmal ausführen, sonst verweisen.

**W2-05 · leicht · Begriffe und Verweise uneinheitlich.**
Beleg: `verstehen` › 04: Kapitelübersicht «Wenn Anspannung steigt», H2 «Wenn Denken unter Stress enger wird», Text «Unter starker emotionaler Überflutung», Figur «Anspannung» – vier Wörter für einen Begriff. Verweis in `beziehungen` «Wenn Bewertungen einseitiger werden» vs. Ziel-H2 «Wenn Bewertungen unter Stress einseitiger werden». Brücke: Liste «Verbindung», Kurztext «Fahrbahn». «Station» (Abb. 1) vs. «Schritt» (Abb. 2) für dasselbe Beispiel.
Empfehlung: Begriffsübersicht führen (Leitlinie 00-gesamtkohaerenz), Verweistexte = Zielüberschrift.

**W2-06 · leicht · Quereinstieg – verwendet, aber nicht erklärt.**
Beleg: «Dissoziation» auf `beziehungen` › verstaerker (erklärt nur in der Vertiefung von Abb. 2 auf `verstehen`); «Remission» (Annahme 1); «PTBS und komplexe PTBS» (Annahme 5); «DBT» (DEAR-Vertiefung) – ohne Erklärung, Glossar folgt erst in Etappe 3.
Empfehlung: Beim ersten Auftreten je Seite kurz erklären.

**W2-07 · leicht · `index` – Startseite verspricht mehr, als gebaut ist.**
Beleg: H1 «Verstehen. Unterstützung finden. Auf sich achten.» – zwei der drei Versprechen sind Platzhalter; `<title>` «Übersicht | …» weicht von H1 ab; die Startseite ist nur über das Logo erreichbar.
Empfehlung: H1 für Etappe 1 an den Bestand der Seiten anpassen oder bewusst so lassen und dokumentieren.

**W2-08 · leicht · Kopf bei 320 px.**
Beleg: Kopf heute (drei Punkte) 386 px hoch, H1 beginnt bei 476–494 px eines 800 px hohen Bildschirms; mit fünf Punkten laut eigener Messung des Baus 478 px, H1 bei 568 px. Vom Entscheid der Fachstelle gedeckt, aber mehr als die Hälfte des ersten Bildschirms ist Kopf. Siehe P-12.

---

## 4 S Sprach-Review

### 4.1 Messung

Zählweise: sichtbarer Inhalt von `content/*.html` (inkl. Vertiefungen und Legenden) gegen Bestandstexte (Seite und zugeordnete Handouts, ohne Kopf-/Quellenblöcke der Handouts). «Kernhecken» = «kann/können/könnte(n)», «möglich*», «vielleicht», «nicht sicher», «nicht automatisch».

| Seite | Wörter alt / neu | Kernhecken je 100 W alt / neu | «kann/können» alt / neu | Semikolons je 100 W alt / neu | Ø Wörter je Prosasatz alt / neu | Sätze > 20 W alt / neu | «nicht/kein/weder/noch» je 100 W alt / neu |
| --- | --- | --- | --- | --- | --- | --- | --- |
| index | 445 / 192 | 1,80 / 2,08 | 6 / 3 | 0,22 / 0,52 | 10,4 / 12,8 | 3 % / 8 % | 1,1 / 1,0 |
| verstehen (Seite + 6 Handouts) | 5 008 / 1 798 | 3,33 / 3,34 | 110 / 43 | 0,34 / 1,78 | 11,5 / 12,5 | 4 % / 8 % | 3,3 / 3,4 |
| verstehen (nur alte Seite) | 2 444 / 1 798 | 2,50 / 3,34 | 43 / 43 | 0,49 / 1,78 | 12,1 / 12,5 | 7 % / 8 % | 2,7 / 3,4 |
| beziehungen | 2 090 / 1 521 | 3,88 / 3,22 | 55 / 34 | 0,29 / 1,58 | 11,1 / 11,8 | 6 % / 6 % | 3,4 / 3,2 |
| grenzen (Seite + 8 Handouts) | 5 494 / 2 277 | 2,18 / 2,33 | 86 / 41 | 0,15 / 1,10 | 10,4 / 11,7 | 3 % / 9 % | 2,6 / 2,9 |
| grenzen (nur alte Seite) | 2 915 / 2 277 | 2,37 / 2,33 | 52 / 41 | 0,14 / 1,10 | 10,1 / 11,7 | 4 % / 9 % | 2,9 / 2,9 |
| **Etappe 1 gesamt** | 13 037 / 5 788 | **2,88 / 2,87** | | | | | |

Rechtschreibung: 0 × «ß», nur Guillemets «» (31/37/21 Paare), Paarformen ausgeschrieben – erfüllt.

### 4.2 Befunde S

**S-01 · mittel · alle Seiten – Die Absicherungsdichte ist nicht gesunken.**
Beleg: 2,88 → 2,87 Kernhecken je 100 Wörter; auf `verstehen` gegenüber der alten Seite gestiegen (2,50 → 3,34). UMBAUPLAN Abschnitt 5: «Wiederholte Absicherungen … in jedem Absatz entfallen.» Beispiele für gestapelte Einschränkungen: «Unter Belastung kann es schwerer werden, positive und schwierige Seiten einer Person zugleich im Blick zu behalten – ohne Absicht und nicht aus der Diagnose vorhersagbar.» (`verstehen` › 05); «Die Rolle legt nicht fest, wie jemand Grenzen erlebt; die folgenden Erfahrungen sind möglich, aber weder typisch noch unausweichlich.» (`grenzen` › 09); «Sie sind mögliche Faktoren, keine Erklärung einer Person.» (`beziehungen` › 03); «Was darunter mitwirkt, ist von aussen nicht sicher erkennbar» steht in Abb. 1 dreimal (Kern, Zonentitel, Kurztext sinngemäss).
Empfehlung: Je Abschnitt eine Einordnung, wo sie fachlich trägt; Rest streichen.

**S-02 · mittel · alle Seiten – Gekürzt wurde durch Verdichtung: Semikolon-Ketten und Ellipsen.**
Beleg: Semikolons je 100 Wörter 3,5- bis 7-mal so häufig wie im Bestand. «Wenn es schwer wird: Grenzen in ruhigen Momenten vorbereiten statt im Affekt; wenige priorisieren statt viele; als Selbstschutz erklären statt als Strafe; bei fehlender Umsetzbarkeit Sicherheit prüfen, Unterstützung holen und anpassen.» (`grenzen` › 07, 31 Wörter Telegrammstil); «Dringendes: bei hoher Belastung die eigene Gesundheit schützen (…); bei geringerer klar kommunizieren (…).» (`grenzen` › 04, «geringerer» ohne Bezugswort); «Eigene Strategien der betroffenen Person, weitere Bezugspersonen, Beratung und Fachhilfe können nebeneinander stehen; Unterstützung darf freiwillig und begrenzt sein: «…»» (`beziehungen` › 05, 30 Wörter). Leitlinie 00-sprache-und-ton 1: «abgehackte Sprache nicht durch lange, verschachtelte Sätze ersetzen».
Empfehlung: Ketten in ganze Sätze auflösen, `reihenfolge` als kleine Tabelle mit zwei Kriterien.

**S-03 · mittel · mehrere Abschnitte – Abrupte Übergänge und Bezugslücken durch Kürzung.**
Beleg: «Scham kann schwer auszusprechen sein und sich als Rückzug, Selbstentwertung oder Abwehr zeigen. Das macht Verhalten nicht folgenlos.» (`verstehen` › 03 – «Das» bezieht sich jetzt auf Scham); «Das kann auch Angehörigen geschehen. Vermutungen als überprüfbare Fragen formulieren. Die Diagnose erlaubt weder die Aussage «keine Empathie» noch «besonders empathisch».» (`beziehungen` › 03 – Empathie ohne Vorbereitung); «Eine Fähigkeit kann in einem Kontext zugänglich … sein. Verletzungen sind kein Liebesbeweis.» (ebd.); Überschrift «Dass etwas anderswo gelingt, beweist weder Täuschung noch Ursache» (Ursache wofür? Bestand: «dass Angehörige die Schwierigkeiten verursacht haben»); «Dauernd verfügbar zu sein kann kurzfristig entlasten und Sie zugleich mehr belasten» (`beziehungen` › 05).
Empfehlung: Fehlende Übergänge ergänzen (Leitlinie 1: «Kein Stakkato …, keine unvermittelten Einschränkungen»).

**S-04 · mittel · Figuren und Seitenköpfe – Meta-Text bleibt bzw. entsteht neu.**
Beleg: Bildbeschreibungen im Kurztext (V-09); «Diese Seite zeigt mögliche Zusammenhänge, ohne Motive zu unterstellen oder Schuld zu verteilen.» (`beziehungen`, Kopf) – auf `verstehen` wurde der gleichartige Satz als Meta-Text gestrichen; «Viele Sätze über Borderline klingen eindeutig, greifen aber zu kurz.» und direkt darunter Kern «Viele Annahmen über Borderline greifen zu kurz» (`verstehen` › 06); «Sie sind eine Ordnungshilfe, keine Klassifikation, und legen nicht fest, welche Grenze für Sie richtig ist.» (Abb. 2 grenzen).
Empfehlung: Meta-Regel des UMBAUPLANs gleich anwenden; Doppelungen Abschnittstext/Kern streichen.

**S-05 · leicht · Gesprächsbeispiele – Anrede und Ton.**
Beleg: «Was soll ich übernehmen, was möchten Sie selbst tun, wann prüfen wir die Aufteilung?» (`beziehungen` › 03, Sie im Gespräch unter Angehörigen; alle anderen Beispiele «du»); technisch/therapeutisch: «Für Krisen nutzen wir die vereinbarten professionellen Hilfewege.», «Und ich darf ernst nehmen, was dein Verhalten bei mir ausgelöst hat.», «Ist das tatsächlich das, was gerade bei dir passiert?», «aber das wäre für mich keine tragfähige Lösung», «Ich esse für mich; wir können später besprechen …» (Semikolon in gesprochener Sprache). Die Beispiele sind laut Plan wörtlich übernommen; Leitlinie 3 verlangt trotzdem die Laut-Lese-Probe.
Empfehlung: Fachstelle entscheidet, ob diese Sätze natürlicher werden sollen.

**S-06 · leicht · `grenzen` › 06 – Uneinheitliches Beispielformat.**
Beleg: «Eher problematisch / Eher hilfreich» bei 3 von 6 Situationen, bei «Bitte um Geld» ist die problematische Variante entfallen.
Empfehlung: Einheitlich – entweder überall Gegenüberstellung oder nur hilfreiche Beispiele.

**S-07 · leicht · alle Seiten – Hohe Verneinungsdichte.**
Beleg: 2,9–3,4 «nicht/kein/weder/noch» je 100 Wörter (wie Bestand). Beispiel `verstehen` › 07: «ohne es zu entschuldigen oder zu dramatisieren … Es bedeutet aber nicht, alles auszuhalten: Sie müssen nicht jede Eskalation auffangen und nicht jede Krise … Sie müssen nicht alles allein tragen.»
Empfehlung: Wo möglich positiv formulieren, was Angehörige tun können.

---

## 5 Bedienung und Barrierefreiheit (automatisierter Teil)

**Wichtig: Reale Screenreader-Läufe (VoiceOver/Safari, NVDA/Firefox) wurden nicht durchgeführt. Stufe 5 kann ohne mindestens zwei reale Läufe nicht abgeschlossen werden (Leitlinie 04).** Ebenfalls nicht geprüft: Touch auf echten Geräten, Hardwaretastatur am echten Gerät.

| Prüfung | Ergebnis |
| --- | --- |
| axe-core, 1280 px, WCAG 2.0/2.1/2.2 A/AA + best-practice | index 0 Verstösse; verstehen 1 Regel (4 Knoten), beziehungen 1 (2), grenzen 1 (4): alle `color-contrast` (B-01, B-02); 7 «incomplete» (SVG-Ziffern Brücke/Arten) |
| Waagrechter Überlauf 320/360/768/1280/1440 px | keiner auf allen vier Seiten (scrollWidth = clientWidth) |
| 200 % Zoom (640 CSS-px, Skalierung 2) | kein Überlauf |
| 200 % Schriftgrösse über die Grundschrift (`html { font-size: 200% }`) | keine Wirkung: Fliesstext und Figurentext bleiben 14/15 px (B-03) |
| Tastatur | erster Tab-Stopp «Zum Hauptinhalt»; Enter setzt den Fokus auf `main#main-content`, nächster Tab auf die Kapitelübersicht; Reihenfolge logisch; Tab-Stopps: index 10, verstehen 19, beziehungen 17, grenzen 22; jeder Stopp mit sichtbarem Fokus (`box-shadow` 2 px weiss + 2 px Blau), Navigationsziele 44 px hoch; kein Fokus verdeckt (Kopf nicht fixiert) |
| Theme «kontrast» | alle 9 Figuren bei 1280 und 360 px gerendert; SVG-Linien rgb(0, 40, 194); axe `color-contrast` im Theme: 0 Verstösse |
| Reduzierte Bewegung | keine Animation im Ruhezustand; nach Öffnen einer Vertiefung 0,01 ms |
| Überschriften | je Seite eine H1, keine Sprünge (Folge geprüft) |

**B-01 · mittel · alle 9 Figuren – Kontrast der Vertiefungs-Schalter 4,39:1.**
Beleg: axe: `figure[data-visual-id=…] > details > summary`, «#3c64ff auf #f7f7f7, 15 px, normal: 4,39 (erwartet 4,5:1)». Ursache Profil-CSS `.puk-vis-more > summary` (P-03).

**B-02 · mittel · `grenzen` › Kopf – Sprunglink zum Schutzabschnitt mit 3,59:1.**
Beleg: axe: `.puk-longform__boundary > .puk-link--inline[href$="#gewalt"]`, «#3c64ff auf #d8e0ff: 3,59». Gerade dieser Link führt zu «Wenn Gewalt oder Bedrohung vorkommt».

**B-03 · leicht · alle Seiten – Schriftgrösse folgt nicht der Browser-Einstellung.**
Beleg: Typo-Tokens in px (`--size-body: 17px`, `--web-size-body: 21px`, `--size-body-sm: 15px`); Grundschrift 200 % ändert nichts. Zoom funktioniert. Siehe P-05.

**B-04 · leicht · alle Seiten – Viele benannte Bereiche.**
Beleg: Jede `section[aria-labelledby]` ist ein Orientierungspunkt «Region»: verstehen 11, beziehungen 10, grenzen 12 (inklusive Bereichen innerhalb der Figuren Eisberg und Zwei Sichten). Ob das die Landmarken-Navigation mit Screenreader stört, muss der reale Lauf zeigen.

**B-05 · leicht · Fusszeile – E-Mail im Zuständigkeitsverweis nicht verlinkt.**
Beleg: «Die Fachstelle Angehörigenarbeit PUK berät Angehörige: angehoerigenarbeit@pukzh.ch.» als reiner Text, im Kopf dagegen als Link.

**B-06 · mittel · Stufe 5 offen – Screenreader-Läufe fehlen.**
Beleg: siehe oben; die Textfassungen der Figuren (`aria-describedby`) und die Ansage der Ansatzpunkte sind nur mit realem Screenreader prüfbar.

Hinweis ohne Befund: Bei 160 CSS-px (320 px mit 200 % Zoom) entsteht 20 px Überlauf; das liegt unter der WCAG-Anforderung (Reflow bei 320 CSS-px) und ist nicht verlangt.

---

## 6 Befunde zum Profil und Design-System

**P-01 · mittel · Zuständigkeit – Die Regel «nur ein Zuständigkeitsverweis in der Fusszeile» kollidiert mit Psychoedukation, die zum Handeln in akuten Lagen auffordert.**
Beleg: W1-01 (Suizidfrage), `grenzen` › gewalt («Holen Sie Hilfe … wenden Sie sich an professionelle Hilfe»), `beziehungen` › 06 («angemessene professionelle Einschätzung»). Das Profil erlaubt keinen Verweis im Text; Lesende müssen die Fusszeile selbst finden.
Empfehlung: Ein zulässiges Textmuster ohne Nummer, das auf den Fusszeilenabschnitt «Zuständigkeit» verlinkt.

**P-02 · mittel · Gate und Check – Formale Prüfung des Ansatzpunkts und der Figuren.**
Beleg: Das Gate prüft `li.is-ansatz` und `entryPoint`, nicht ob die Station von Angehörigen beeinflussbar ist (V-02 besteht formal); dekorative (V-04) und doppelte (V-07) Figuren bestehen ebenfalls.
Empfehlung: Leitlinie 07, Check-Punkt 5 ergänzen: «Der Ansatzpunkt liegt an einer Stelle, die Angehörige selbst beeinflussen; im Beispiel ist klar, wer handelt.»

**P-03 · mittel · Kit-CSS – Kontraste unter 4,5:1.** `.puk-vis-more > summary` auf `surface-diagram` (4,39:1) und Links in `.puk-longform__boundary` (3,59:1), siehe B-01, B-02.

**P-04 · mittel · Fehlende Komponente für Formulierungsbausteine.**
Beleg: Für `dl` in `.puk-longform__copy` gibt es nur die Zeilenhöhe; `.puk-longform__term-guide` ist für Begriffe gedacht. Die Leitlinie nennt «Formulierungsbausteine» als Inhaltscontainer, stellt aber keine Vorlage bereit (W2-03).

**P-05 · leicht · Typo in px** – Browser-Grundschrift wirkt nicht (B-03).

**P-06 · leicht · Muster J schmal** – Endbeschriftungen mit waagrechten Pfeilen bleiben über der senkrechten Liste (V-10).

**P-07 · leicht · Muster B nur mit vier Stationen** – fünf Stationen brauchen website-eigenes CSS (`borderline.css`); schmal sitzt Station 3 versetzt.

**P-08 · leicht · Muster C** – festes Raster mit fünf Spalten (bei vier Schritten bleibt eine leer); Erklärung und Beispielsatz in `text-muted`; vier gefüllte blaue Punkte gegenüber der Regel «höchstens ein gefülltes blaues Feld pro Darstellung» – Regel oder Muster klären.

**P-09 · leicht · Linienart ohne profilweite Bedeutung** – gestrichelt heisst in C «optional», in H «kann sich verschieben», in E nur «Spalte B»; Websites übernehmen das beliebig (V-11).

**P-10 · leicht · Drei Ebenen plus sichtbare Textfassung** – Kern, Kurztext, Vertiefung, sichtbare Legende mit Bildbeschreibung und Kennzeichnung ergeben schwere Textrahmen (45 % der Wörter, V-09). Leitlinie könnte klären: Ebene 2 erklärt Inhalt, nicht die Zeichnung; Textfassung darf entfallen oder eingeklappt sein, wenn die HTML-Liste in der Figur den Inhalt vollständig trägt.

**P-11 · leicht · Kernsatz schmal zu gross** – bei 360 px belegt der Kern von Abb. 3 neun Zeilen, das Diagramm beginnt erst unter dem ersten Bildschirm.

**P-12 · leicht · Kein kompaktes Navigationsmuster** – Kopf 386 px (drei Punkte) bzw. 478 px (fünf Punkte) bei 320 px (W2-08).

**P-13 · leicht · Fusszeile zeigt Kit-Revision** – «PUK Website Kit 1.10.1-r4 · abgeleitet – abgeleitetes Profil auf Basis des PUK Zürich Design System 1.10.1, nicht dessen offizielle Version.» ist für Angehörige Meta-Text.

**P-14 · leicht · Benannte Abschnitte als Regionen** – der Starter macht jede Langform-Section zur Landmarke (B-04).

**P-15 · leicht · Auslieferung** – Entwurfsseiten (`rolle.html`, `diagnose.html`, `selbstfuersorge.html` …) sind erreichbar und enthalten interne Notizen («Aufbau und Visualisierungsplan nach UMBAUPLAN.md, Abschnitte 2 und 3»); im selben Ordner werden `UMBAUPLAN.md`, `abgleich/`, `PRUEFBERICHT.md`, `site.config.json`, `README.md`, `tools/gate.mjs` ausgeliefert (alle HTTP 200). Für die Vorschau unkritisch; für den Export in Etappe 3 gilt Leitlinie 04 «nur die tatsächlich benötigten Seiten».

---

## 7 Abweichungen von der Selbstprüfung (`PRUEFBERICHT.md`)

Nur zur Einordnung; die Urteile oben sind unabhängig gebildet.
- Punkt 3: Selbstprüfung «teilweise» nur wegen `v-gr-arten`; hier zusätzlich N für `v-vs-bewertungen` und `v-vs-mythen`.
- Punkt 5: Selbstprüfung «erfüllt»; hier T – Ansatzpunkt formal markiert, inhaltlich an der falschen Station (V-02).
- Punkt 6: Selbstprüfung «erfüllt»; hier N für Abb. 2/3 `verstehen` und T für Schleife/Sichten.
- Punkt 7: Selbstprüfung «erfüllt» für die 16 Felder der Annahmen; hier N.
- Punkt 13: Selbstprüfung «bei vier Figuren gerendert»; hier alle neun.
- Abgleich: «`lmk` · Sicherheit | übernommen» trifft nicht zu (W1-08).

---

## Anhang

- Bildschirmfotos: `shots/fig-<visual-id>-1280.png`, `…-360.png`, `…-kontrast.png`, `fig-v-bz-schleife-768.png`, `*-full.png`, `grenzen-saetze-1280.png`, `bz-verstaerker-1280.png`
- Rohdaten: `a11y-results.json` (axe, Überlauf, 200 %, Tab-Folge, Kontrast-Theme)
- Skripte: `shots.mjs`, `a11y.mjs`, `focus.mjs`, `rm.mjs`, `w768.mjs`, `measure.mjs`, `tools/hedges.py`, `tools/prose.py`
- Geladene Quellen: `src/` (gebaute Seiten, Inhalte, Plan, Abgleich, Prüfbericht), `css/` (Profil-CSS)
