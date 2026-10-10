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
| W1 Fachliche Prüfung | offen | 10.10.2026 | Fachstelle Angehörigenarbeit PUK (Freigabe Etappe 1); vierte Prüfrunde: eine Prüfsitzung (Claude, hat nicht gebaut) | Etappe 1 fachlich freigegeben (Abschnitt «Fachliche Freigabe der Fachstelle»); alle 21 Fragen P4-F-1 bis P4-F-21 entschieden. Offen, bis die Seiten von Etappe 2 geprüft und freigegeben sind. |
| W2 Gesamtkohärenz | offen | 10.10.2026 | vierte Prüfrunde | 1 wichtig, 3 optional; offen weiter F-W2-02, F-W2-03 (jetzt P4-F-18, P4-F-19) |
| S Sprach-Review | offen | 10.10.2026 | vierte Prüfrunde | 6 optional; Lesetest je Abschnitt und Kennzahlen; abschliessbar erst nach W1 und W2 |
| Visualisierungs-Check | offen | 10.10.2026 | vierte Prüfrunde | 1 wichtig, 5 optional; Matrix 1–17 × 6 Figuren; seit 10.10.2026 alle sechs Figuren fachlich freigegeben (Fachstelle) |
| Bedienung und Barrierefreiheit | offen | 10.10.2026 | vierte Prüfrunde, automatisiert | kein Befund; reale Screenreader-Läufe, Hardwaretastatur und Touch fehlen (nicht prüfbar) |
| W3 Code-Review | offen | 10.10.2026 | vierte Prüfrunde: nur Stichprobe Technik und Zuständigkeit, kein volles W3 | Stichprobe ohne Befund; W3 erst nach Umsetzung von W2 und S |
| R1 Profil-Audit | offen | | | noch nicht geprüft |
| R2 Visualisierung und Laienverständlichkeit | offen | | | noch nicht geprüft (Lesetest und Bildsprache der vierten Runde sind Vorarbeit, kein R2) |
| R3 Freigabe-Audit | offen | | | noch nicht geprüft |

Dazu 5 leichte Befunde zu Bericht und Abgleich. Die erste und zweite Prüfrunde stehen weiter unten zur Nachvollziehbarkeit; ihre Befunde sind durch die dritte Runde überholt, soweit sie nicht ausdrücklich als offen genannt sind.

## Fachliche Freigabe der Fachstelle

**10.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`KORREKTUR-ETAPPE-1J.md`).

- **Etappe 1 ist fachlich freigegeben:** die Seiten `index`, `verstehen`, `beziehungen` und `grenzen` als Ganzes, mit allen Texten im Stand `540c37d` (nach Korrektur 1i) und der Quellenzeile aus Korrektur 1j.
- **Die sechs Abbildungen sind fachlich freigegeben (P4-F-21):** Eisberg (`v-vs-eisberg`), Anspannungskurve (`v-vs-anspannung`), Momentaufnahmen (`v-vs-bewertungen`), Bedeutungsschleife (`v-bz-schleife`), Zwei Sichten (`v-bz-sichten`) und DEAR (`v-gr-dear`).
- **Die neuen Beispielsätze sind fachlich freigegeben (P4-F-8):**
  - `verstehen`: «Du bist die Einzige, die mich versteht.», «Sätze, die Angehörige hören können:» und «Erfahrungen in engen Beziehungen können mitwirken, neben vielen anderen Einflüssen.»
  - `beziehungen`: «Wie hast du meine Absage verstanden?», «Ich bin bei der Arbeit. Ich melde mich heute Abend.», «Vorhin warst du plötzlich weit weg. Wie war das für dich?», «Ich habe den Eindruck, du bist enttäuscht von mir. Stimmt das?», «Vielleicht wirkt die Person bei Freunden oder bei der Arbeit ruhiger als bei Ihnen.» und «Das kann kränken.»
  - `grenzen`: «Lass uns zusammen schauen, wer dich sonst noch unterstützen kann.»
- **Quellen (P4-F-16):** Die Quellenzeilen tragen die Aussagen. Bei den Ursachen (`verstehen` › `borderline`) kommt NICE CG78 (2009) dazu, wie im Bestand. Fruzzetti (2006) und Gunderson et al. (1997) bleiben auf `beziehungen`. Die Bezugspunkte der Anspannungskurve stammen aus den Handouts des Bestands und bleiben.
- **Alle 21 Fragen der vierten Prüfrunde sind entschieden:** P4-F-1 bis -7, -9 bis -15 und -17 bis -20 mit Korrektur 1i (P4-F-14, -15, -18 und -20 als Strukturentscheide), P4-F-8, -16 und -21 hier.
- **Nicht Teil dieser Freigabe:** die zwölf Platzhalter und die Seiten von Etappe 2. Die Platzhalter markieren Seiten, die noch folgen, und entfallen, wenn diese gebaut sind.
- **Weiter offen vor der Veröffentlichung:** W2, S, Visualisierungs-Check und W3 abschliessen, reale Screenreader-Läufe, Hardwaretastatur und Touch, danach R1 bis R3.

## Selbstprüfung der bauenden Sitzung

Nach jedem Bau ohne Nachfrage ausfüllen: Visualisierungs-Check wie unten, mit Beleg je Punkt. Arbeitsstand, keine Prüfstufe.

**Stand 10.10.2026 · Etappe 2a · bauende Sitzung (Claude Code).** Umgesetzt ist `BAUAUFTRAG-ETAPPE-2A.md`:

- die neuen Seiten `rolle` («Ihre Rolle klären») und `selbstfuersorge` («Auf sich achten»), je mit einer Abbildung
- die Einstiege auf `index`
- `site.config.json`
- der Abgleich

`verstehen`, `beziehungen` und `grenzen` sind inhaltlich unverändert. Keine Prüfstufe ist «erledigt». Die Selbstprüfung von 1j steht darunter.

### Etappe 2a: Stand je Abschnitt des Auftrags

| Punkt | Stand | Beleg |
| --- | --- | --- |
| Auftrag verschieben | umgesetzt | `BAUAUFTRAG-ETAPPE-2A.md` aus `9810d16` unverändert im Website-Ordner (Commit `0a602d1`, `cmp`: gleich); im Stamm von `main` gelöscht (`d79f018`); zusammengeführt (`bebf43b`) |
| 1 Nur die genannten Teile geändert | eingehalten | `git diff` gegen `bebf43b`: `content/verstehen.html`, `content/beziehungen.html` und `content/grenzen.html` ohne Änderung. Die gebauten Seiten der Etappe 1 und die Entwurfsseiten haben nur zwei neue Zeilen in der Navigation («Ihre Rolle», «Auf sich achten»). `editorialStatus` und Fusszeile sind unverändert. `content/index.html` ändert sich nur in `einstiege`. Dazu kommt eine Regel in `borderline.css` (`.bl-nach-figur`, Abstand nach der Abbildung, nur mit Token) |
| 2a Sprache | umgesetzt; zu prüfen in S | Satzlänge (sichtbarer Text, Skript der bauenden Sitzung): `rolle` 384 Sätze, im Mittel 8,5 Wörter, 32 Sätze (8 %) über 15 Wörter; `selbstfuersorge` 320 Sätze, 8,7 Wörter, 23 (7 %). Vorbilder: `beziehungen` 14 %, `grenzen` 9 %, `verstehen` 12 %. «Was Sie tun können:» mit Beispielsatz: `rolle` 6-mal, `selbstfuersorge` 4-mal; Beispielsätze aus dem Bestand zuerst, zum Beispiel «Was wäre dein Vorschlag?» (`alltag`). Fachwörter ersetzt: «zwiespältige Gefühle» statt «Ambivalenz», «die Gefühle eines anderen Menschen ausgleichen» statt «Regulation» (Abgleich `rolle` Nr. 18, 33, 39 und 292) |
| 2a Meta-Texte | entfallen | «Worum es hier geht», «Das können Sie mitnehmen», Lesezeit, Prüfvermerke, Handout-Rahmen: «entfällt» mit Grund, zum Beispiel `rolle` Nr. 5 bis 10 und Nr. 405 bis 409 |
| 2b Nichts verschwindet still | umgesetzt | `pruefe-abgleich.mjs`: 3204 Zeilen, 0 ohne Fundstelle; jeder Satz der Bestandsquellen aus Abschnitt 3 und 4 hat eine Zeile (`rolle` 757, `selbstfuersorge` 659). Umgekehrt geprüft (Skript): 148 Stellen der neuen Seiten haben keine eigene Zeile als neue Fassung. Von Hand durchgesehen sind das Bezeichnungen und Überschriften aus dem Bestand oder dem Auftrag, zweite Teile geteilter Bestandssätze (zum Beispiel «Sie wollen helfen und möchten zugleich weg.» aus Nr. 33) und die Verweissätze der Liste unten. Ein weiterer neuer Satz ist nicht dabei |
| 2b Absicherungen | umgesetzt; zu prüfen in W1 | Absicherungen je 100 Wörter: `rolle` 1,94 → 2,16, `selbstfuersorge` 2,27 → 2,64. Beispiele: «Manche Angehörige bleiben …» (Abbildung, nicht «viele»); «Ob eine Absprache wirkt, lässt sich nicht vorhersagen.» (`rolle` › `alltag`); «Dass es bei jeder Person wirkt, ist nicht garantiert.» (`selbstfuersorge` › `zu-viel`, Bestand «keine Wirkungsgarantie für jede Person»); «Sie treten nicht bei allen Menschen mit Borderline auf.» (`rolle` › `an-grenzen`) |
| 2b Schuld und Verantwortung | eingehalten | `rolle` › `schuld`: «Sie sind nicht für den Verlauf einer anderen Person verantwortlich.», «Eine Diagnose weist Ihnen keine persönliche Schuld zu.»; `selbstfuersorge` › `unterstuetzung`: «Ein Schuldgefühl allein erklärt weder die Erkrankung noch Ihre Verantwortung.» Alle Sätze mit «Schuld» oder «verantwortlich» der zwei Seiten per Skript gelesen: keiner widerspricht `verstehen` (Annahme 3) oder `beziehungen` |
| 2b Keine neuen fachlichen Aussagen | eingehalten (Selbsteinschätzung) | 25 neue Sätze, alle aus den Arten, die Abschnitt 2b erlaubt: Kernaussagen, Sätze in Abbildungen, Kurzbeschreibungen, Zwischentitel, Verweissätze und Einstiege (Liste unten) |
| 2b Verlinken statt wiederholen | umgesetzt | `rolle` → `verstehen.html#borderline`, `#anspannung`; `beziehungen.html#was-hilft`; `grenzen.html#gewalt` (zweimal), `grenzen.html`; `selbstfuersorge.html#kraft`, `selbstfuersorge.html`. `selbstfuersorge` → `verstehen.html#anspannung`, `rolle.html#schuld`, `grenzen.html#gewalt`, `index.html#beratung`, `#zu-viel`. Der Linktext nennt den Zieltitel in «…», die Anführungszeichen stehen ausserhalb des Links (P4-S-3). Sätze von Etappe-1-Seiten stehen im Abgleich als «verschoben» mit Ort dort, zum Beispiel die Ursachen (`rolle` Nr. 453 bis 462) |
| 2c Zuständigkeit | eingehalten | `grep`: kein `tel:`, keine Telefonnummer in `content/rolle.html`, `content/selbstfuersorge.html`, `content/index.html`. Verweis im Text nur über `<p data-responsibility-inline></p>`: `rolle` 1-mal (`an-grenzen`), `selbstfuersorge` 3-mal (`eigenes-leben`, `warnsignale`, `zu-viel`), je an einer Stelle, an der der Bestand auf akute Gefahr verweist. `sensitiveTopics` beider Seiten: `selbstgefaehrdung`, `gewalt`, `akute-krise`. Kein Link auf eine Entwurfsseite (Gate ohne Befund); Inhalte für `kommunizieren` und `unterstuetzung` im Abgleich mit Ort «… (Etappe 2)» |
| 2d Bilder | umgesetzt | Je Seite genau eine Abbildung. `visualPlan` mit 7 Zeilen je Seite, eine je Abschnitt; die übrigen 12 Zeilen sind `format` «text» mit Begründung. STOPP: `<ol>` mit fünf Schritten. Warnsignale: Begriffsliste mit fünf Bereichen. Energie-Konto: Text, zwei Listen «Was Kraft kosten kann:» und «Was entlasten kann:». Sauerstoffmaske: ein Satz («Die Sauerstoffmaske im Flugzeug ist ein Bild dafür, die eigene Sicherheit und Gesundheit ernst zu nehmen.»). Garten: ein Satz («… so wie Wasser und Licht einen Garten.»). Kein Leuchtturm-Bild |
| 3 `rolle` | umgesetzt | Abschnitte 01 `anbieten`, 02 `schuld`, 03 `alltag`, 04 `nach-konflikten`, 05 `mehrere`, 06 `kinder`, 07 `an-grenzen`, wie vorgeschlagen; Abweichungen unter «Entscheide». Abbildung 1 mit Titel, Kernaussage, Satz in der Szene, Kurzbeschreibung, Vertiefung (drei Punkte des Auftrags) und Quelle im Wortlaut. Zeichnung: SVG aus Anhang A Zeichen für Zeichen gleich (Skript), nur der Bildausschnitt `viewBox` ist «0 52 640 218» statt «0 0 640 270» (leerer Rand oben weg). «Begrenzte Verfügbarkeit» steht auf `selbstfuersorge`; `rolle` › `alltag` verweist dorthin |
| 3 Schmal | umgesetzt | Bei 360 px steht der Satz über der Zeichnung, die Zeichnung bleibt (Bildschirmfoto) |
| 4 `selbstfuersorge` | umgesetzt | Abschnitte 01 `eigenes-leben`, 02 `kraft`, 03 `warnsignale`, 04 `zu-viel`, 05 `unterstuetzung`, 06 `akzeptanz`, 07 `beratung`. Abbildung 1: SVG und Satzpaar Zeichen für Zeichen gleich wie Abbildung 4 in `templates/website/longform/visualisierungsmuster.html` (Skript); Kernaussage, Kurztext, Vertiefung und Quelle im Wortlaut des Auftrags; ohne «Sie ist kein Zeichen von Schwäche.». Direkt nach der Abbildung: «Sie müssen nicht rund um die Uhr erreichbar sein. …» mit «Nach 22 Uhr bin ich nicht mehr am Handy. Wenn es ernst wird, holen wir zusätzliche Hilfe dazu.». «Bei Gefahr hat Schutz Vorrang» ist der Verweis im Text in `eigenes-leben` |
| 5a `index` | umgesetzt | Reihenfolge Verstehen, Beziehungen, Ihre Rolle, Grenzen, Auf sich achten; die drei bisherigen Einträge im Wortlaut (`git diff --word-diff`); zwei neue Einträge und der Platzhalter «Weitere Einstiege folgen: Zugewandt und klar sprechen · Genesung · Unterstützung finden.» im Wortlaut |
| 5b `site.config.json` | umgesetzt | `rolle` und `selbstfuersorge`: `status` «published», `primaryTask`, `description`, `sensitiveTopics`, `visualPlan`. Die zwei Abbildungen mit `goal`, `statement`, `understood`, `source`, `alternative`, `reason`, `resonance` (Wortlaut des Auftrags) und `approvalStatus` «ausstehend». Die Seitenplatzhalter der zwei Seiten entfallen (10 statt 12) |
| 5c Abgleich | umgesetzt | `abgleich/rolle.md` und `abgleich/selbstfuersorge.md` neu. Vorgemerkte Zeilen mit neuem Ort und neuer Fassung: `verstehen` Nr. 484, 485, 527, 528; `beziehungen` Nr. 115; `grenzen` Nr. 511. `index` Nr. 17 bis 20 und 22 bis 28 auf die neuen Einstiege und den neuen Platzhalter. Per Skript gegen den Stand vor 2a verglichen: In den vier Tabellen der Etappe 1 ist keine andere Zeile geändert. Statuswerte «neu (2a)» und «umformuliert (einfache Sprache, 2a)» in `abgleich/README.md` erklärt, dazu ein Abschnitt «Etappe 2a». Skripte: `pruefe-abgleich.mjs`, `kennzahlen.mjs`, `verneinung.mjs` und `bedienung.mjs` erfassen die neuen Seiten. Prüfbedarf für W1 am Ende jeder neuen Tabelle (`rolle` 10 Punkte, `selbstfuersorge` 8) |
| 6 Prüfen | umgesetzt | unten |
| 6 Pull Request | Entwurf | bleibt Entwurf |

### Etappe 2a: Prüfungen nach Abschnitt 6

- **`node tools/build.mjs`:** 0 blockierend, 14 Hinweise: 2 × `visual-approval` (`v-ro-weg`, `v-sf-abend`), 10 × `placeholder-approval`, `site-url`, `review-report`.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 13 blockierend und 1 Hinweis (`site-url`), wie erwartet. Die 13 sind 2 × `visual-approval`, 10 × `placeholder-approval` (`einstiege` auf `index` und die Seitenplatzhalter von `diagnose`, `behandlung`, `kommunizieren`, `krise`, `genesung`, `unterstuetzung`, `fragen`, `quellen`, `ueber`) und 1 × `review-report`.
- **`node abgleich/pruefe-abgleich.mjs`:** 3204 Zeilen, 0 ohne Fundstelle.
- **Bildschirmfotos und Sicht:** beide Abbildungen bei 1280 und 360 px, je im Standard-Theme und im Theme «kontrast» (acht Fotos), alle angesehen.
  - «Ein Stück Weg»: breit steht der Satz über der Zeichnung links. Die zwei Menschen gehen nebeneinander von hinten auf dem Weg, der sich zwischen Hügeln in die Ferne verengt. Schmal steht der Satz über der Zeichnung. Die zwei Menschen sind dann etwa 60 px hoch, klein, aber als zwei Gehende erkennbar.
  - «Ein freier Abend»: breit stehen die zwei Sätze nebeneinander über Telefon und Buch, schmal untereinander. Tisch, Tasse, Telefon, Buch und Mond im Fenster sind bei 360 px erkennbar.
  - Theme «kontrast»: Linien und Flächen dunkler, nichts verschwindet.
  - Text nach «Ein freier Abend»: 32 px Abstand zur Abbildung bei 360 und 1280 px (gemessen).
- **Überlauf:** 320, 360, 414, 768, 1024, 1280 und 1440 px, Vertiefungen offen, beide Themes: `rolle`, `selbstfuersorge` und `index` ohne waagrechten Überlauf, kein Element breiter als das Fenster. Zoom 200 % (640 px bei Faktor 2, und 1280 px mit Schriftgrösse 200 %): ohne Überlauf.
- **Kontraste:** Textelemente mit eigenem Text (`rolle` 278, `selbstfuersorge` 219, `index` 45), in beiden Themes und allen Breiten. Kein Element liegt unter AA (4,5 : 1, grosse Schrift 3 : 1). Linien der Zeichnungen gegen den Hintergrund der Figur: keine unter 3 : 1. Keine festen Farben in SVG, keine `style`-Attribute.
- **Tastatur** (1280 px, reduzierte Bewegung):
  - Tabstopps: `rolle` 24, `selbstfuersorge` 21, `index` 14.
  - Der erste Stopp ist «Zum Hauptinhalt». Jeder Stopp hat einen sichtbaren Fokus und liegt im Fenster.
  - Die Reihenfolge folgt dem Lesen: Kopf, Navigation, Kapitelübersicht, dann die Links im Text.
  - Enter öffnet «Grenzen des Bildes».
  - Nach dem Laden läuft keine Animation. Auf `selbstfuersorge` lief direkt nach Enter ein Fokus-Übergang von 0,01 ms, nach 800 ms keiner mehr.
- **`node abgleich/bedienung.mjs`:** Tabelle in `abgleich/README.md`.
  - `rolle`: 24 Tabstopps, 30 067 px bei 360 px, Abbildung 673 px.
  - `selbstfuersorge`: 21 Tabstopps, 25 453 px, Abbildung 680 px.
  - Seiten der Etappe 1 (wegen der zwei neuen Punkte der Navigation): zwei Tabstopps mehr, bei 360 px 92 px höher.
  - `index`: 14 statt 10 Tabstopps, 3922 → 4408 px.
- **Nicht prüfbar in dieser Umgebung:** reale Screenreader-Läufe, Hardwaretastatur und Touch.

### Etappe 2a: Visualisierungs-Check der zwei neuen Abbildungen

Selbstprüfung, keine Prüfstufe. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | `v-ro-weg` | `v-sf-abend` | Beleg | Massnahme |
| --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | Build ohne Hinweis `visual-plan`; `data-visual-id` und `data-visual-type` «illustration» wie im Plan | – |
| 2 | Zeile je Abschnitt; Begründungen für Text passen | E | E | je 7 Zeilen für 7 Abschnitte; zum Beispiel `v-sf-zu-viel`: «Text ist klarer: STOPP als nummerierte Liste im Wortlaut der …», `v-ro-schuld`: «Text ist klarer: Die fünf Sätze sind Zitate mit je einer Ein…» | – |
| 3 | Prüffrage beantwortet und eingelöst | E | E | Weg: `understood` «… Das Bild zeigt auf einen Blick, wer neben wem geht, ohne eine Liste von Aufgaben.»; das Bild zeigt zwei Menschen nebeneinander. Abend: «Zwei Gedanken am selben Abend zeigen, dass ein Teil der Aufmerksamkeit beim Telefon bleibt …»; die zwei Sätze stehen über Telefon und Buch | – |
| 4 | Kernaussage und Erklärtext; Hauptaussage nicht nur in der Vertiefung | E | E | Kernaussage und Kurztext sichtbar, Figur offen; die Vertiefung nennt nur Grenzen des Bildes | – |
| 5 | Ansatzpunkt (B, C, G) | – | – | Illustrationen (Muster D), kein Erklärmodell | – |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | je die einzige Abbildung der Seite; Garten und Sauerstoffmaske nur als Satz, kein Leuchtturm | – |
| 7 | Kartenraster-Check | E | E | keine Kastenreihe; Text in Listen und Begriffslisten | – |
| 8 | Anordnung und Formen tragen Bedeutung | E | E | Weg: zwei Menschen gleich weit vorn auf demselben Weg, der in die Ferne führt; niemand zieht oder trägt. Abend: Telefon links mit dickerem Rand (leuchtender Bildschirm), Buch rechts geschlossen, Tee dazwischen | – |
| 9 | Verteilt, keine Textwand | T | T | Je eine Abbildung, wie entschieden. Die Seiten sind lang: `rolle` 3339 Wörter, 30 067 px bei 360 px; `selbstfuersorge` 2955 Wörter, 25 453 px. Gegliedert durch Kapitelübersicht, Zwischentitel, Listen und Begriffslisten | Fachstelle (Länge) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle | E | E | Vertiefung «Grenzen des Bildes» im Wortlaut des Auftrags; Quelle «Eigene didaktische Darstellung nach dem Handout «Der Garten»; Bezug: NICE CG78 (2009).» und «Eigene didaktische Darstellung; Bezug: Handout «Energie-Konto».» | – |
| 11 | Ohne Animation, Aufklappen und Skript verständlich | E | E | SVG ohne Animation; Sätze, Kernaussage und Kurztext sind HTML-Text | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | E | E | Kein Überlauf bei 320 und 360 px. Weg: Menschen klein (etwa 60 px bei 360 px), aber erkennbar. Kurzbeschreibungen im Wortlaut des Auftrags, über `aria-describedby` verbunden | – |
| 13 | Theme «kontrast» geprüft | E | E | Bildschirmfotos bei 1280 und 360 px; Linien ≥ 3 : 1; keine festen Farben | – |
| 14 | Inhalt fachlich freigegeben | N | N | `approvalStatus` «ausstehend»; Gate production: `visual-approval` | Fachstelle |
| 15 | Bildsprache passt; Wirkung (`resonance`) eingelöst | E | T | Weg: «Entlastung: Ich darf begleiten, …»: Bild und Satz zeigen genau das. Abend: «Wiedererkennen» trägt das Bild; die «Erlaubnis» (Erreichbarkeit begrenzen) steht erst im Text direkt danach, nicht im Bild | R2 |
| 16 | Ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | E | E | Je ein Gedanke aus Sicht eines Menschen; kein Bildteil beschriftet, keine Liste, die das Bild übersetzt | – |
| 17 | Keine ungewollten Bedeutungen | T | T | Weg: Die linke Person ist etwas grösser (Kopf r 8,4 statt 7,9); das liest sich als zwei Erwachsene, nicht als Führung; die Zeichnung ist die gewählte Skizze. Der Weg «in die Ferne» kann ein Ziel nahelegen; die Vertiefung sagt, dass sich der Verlauf nicht vorhersagen lässt. Abend: «Vielleicht ruft sie gleich an.» nennt die betroffene Person weiblich; das kann ein Klischee über Borderline stützen. Der Satz ist nach dem Auftrag unverändert aus dem Profilbeispiel | R2; Fachstelle (Satz «sie») |

**Freundin-Test (bauende Sitzung):**

- «Ein Stück Weg» besteht ihn: zwei Menschen gehen nebeneinander, der Satz sagt, worum es geht.
- «Ein freier Abend» besteht ihn: Ein Abend mit kaltem Tee und dem Blick aufs Telefon ist ohne Erklärung verständlich.

### Etappe 2a: Neue Sätze zur Freigabe

Jeder Satz steht auch im Abgleich mit Status «neu (2a)».

| Nr. | Satz | Ort | Abgleich |
| --- | --- | --- | --- |
| 1 | «Sie können begleiten.» (Kernaussage, erster Satz; der zweite, «Genesung herstellen können Sie nicht.», stammt aus `garten`) | `rolle` › `anbieten`, Abbildung 1 | `rolle` Nr. 757 |
| 2 | «Zeichnung: Zwei Menschen gehen nebeneinander auf einem Weg, von hinten gesehen. Der Weg führt durch eine Hügellandschaft in die Ferne. Darüber steht der Satz: «Ich kann diesen Weg begleiten, aber nicht für dich gehen.»» (Kurzbeschreibung, Wortlaut des Auftrags) | `rolle` › `anbieten`, Abbildung 1 | `rolle` Nr. 758 |
| 3 | «Innehalten, bevor Sie reagieren» (Zwischentitel; Bestand: «Beziehungs-Achtsamkeit im echten Alltag») | `rolle` › `alltag` | `rolle` Nr. 759 |
| 4 | «Warum Borderline nicht eine einzige Ursache hat, erklärt die Seite «Verstehen» im Abschnitt «Was die Diagnose beschreiben kann».» | `rolle` › `schuld` | `rolle` Nr. 760 |
| 5 | «Wie Sie Ihre Erreichbarkeit begrenzen können, steht auf der Seite «Auf sich achten» im Abschnitt «Was Kraft kostet und was entlastet».» | `rolle` › `alltag` | `rolle` Nr. 761 |
| 6 | «Woran Sie merken, dass die Anspannung steigt, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | `rolle` › `alltag` | `rolle` Nr. 762 |
| 7 | «Was ein solches Gespräch klären kann, steht auf der Seite «Beziehungen» im Abschnitt «Was die Beziehung stärken kann».» | `rolle` › `nach-konflikten` | `rolle` Nr. 763 |
| 8 | «Was Kinder nicht übernehmen müssen, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `rolle` › `kinder` | `rolle` Nr. 764 |
| 9 | «Dort steht auch, wer einspringt, wenn die erste Person ausfällt.» | `rolle` › `kinder` | `rolle` Nr. 765 |
| 10 | «Was bei Gewalt wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `rolle` › `an-grenzen`, nach dem Verweis im Text | `rolle` Nr. 766 |
| 11 | «Wie Sie auf sich achten können, steht auf der Seite «Auf sich achten».» | `rolle` › `an-grenzen` | `rolle` Nr. 767 |
| 12 | «Manche Angehörige bleiben auch an einem freien Abend innerlich auf Abruf.» (Kernaussage, Wortlaut des Auftrags) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 659 |
| 13 | «Das Buch liegt bereit, der Tee wird kalt, und ein Teil der Aufmerksamkeit bleibt beim Telefon. Diese ständige Bereitschaft kann Kraft kosten, auch wenn nichts passiert.» (Kurztext, Wortlaut des Auftrags) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 660 |
| 14 | «Vielleicht ruft sie gleich an.» (Satz in der Szene, aus dem Profilbeispiel) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 661 |
| 15 | «Eigentlich wollte ich lesen.» (Satz in der Szene, aus dem Profilbeispiel) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 662 |
| 16 | «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Das Bild zeigt eine Erfahrung, die manche beschreiben, keine Pflicht und keinen Fehler.» (Vertiefung, Wortlaut des Auftrags) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 663 |
| 17 | «Zeichnung eines Tisches am Abend: eine Tasse Tee, ein Mobiltelefon mit leuchtendem Bildschirm und ein geschlossenes Buch; im Fenster steht der Mond.» (Kurzbeschreibung, aus dem Profilbeispiel) | `selbstfuersorge` › `kraft`, Abbildung 1 | `selbstfuersorge` Nr. 664 |
| 18 | «Ruhig atmen» (Zwischentitel; Bestand: «4-6 Atemübung ohne Atemanhalten») | `selbstfuersorge` › `zu-viel` | `selbstfuersorge` Nr. 665 |
| 19 | «5-4-3-2-1: im Hier und Jetzt ankommen» (Zwischentitel; Bestand: «5-4-3-2-1 Grounding») | `selbstfuersorge` › `zu-viel` | `selbstfuersorge` Nr. 666 |
| 20 | «Kurze Übungen finden Sie im Abschnitt «Wenn es gerade zu viel ist».» | `selbstfuersorge` › `eigenes-leben` | `selbstfuersorge` Nr. 667 |
| 21 | «Wie Anspannung in einem Gespräch steigen kann, erklärt die Seite «Verstehen» im Abschnitt «Wenn die Anspannung steigt».» | `selbstfuersorge` › `kraft` | `selbstfuersorge` Nr. 668 |
| 22 | «Mehr zu Schuldgefühlen steht auf der Seite «Ihre Rolle klären» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» | `selbstfuersorge` › `unterstuetzung` | `selbstfuersorge` Nr. 669 |
| 23 | «Was dann wichtig ist, steht auf der Seite «Grenzen» im Abschnitt «Wenn Gewalt oder Bedrohung vorkommt».» | `selbstfuersorge` › `akzeptanz`, nach «Bei Gefahr geht Schutz vor.» | `selbstfuersorge` Nr. 670 |
| 24 | «Ich weiss nicht mehr, was meine Aufgabe ist und was nicht.» (Anliegen, Wortlaut des Auftrags) | `index` › `einstiege`, Eintrag `rolle` | `index` Nr. 255 |
| 25 | «Ich bin erschöpft und komme selbst zu kurz.» (Anliegen, Wortlaut des Auftrags) | `index` › `einstiege`, Eintrag `selbstfuersorge` | `index` Nr. 256 |

### Etappe 2a: Verweise von Etappe-1-Seiten (Vorschlag)

Stellen auf `verstehen`, `beziehungen` und `grenzen`, die auf die neuen Seiten verweisen könnten. Der Linktext besteht aus Wörtern, die schon dastehen. Die Seiten sind jetzt nicht geändert; ein Link würde den Wortlaut nicht ändern.

| Nr. | Seite › Abschnitt | Stelle | Linktext | Ziel |
| --- | --- | --- | --- | --- |
| V1 | `verstehen` › `mythen` | «Daraus folgt keine Schuld und keine Aufteilung von Verantwortung für die Erkrankung.» | «keine Schuld» | `rolle.html#schuld` («Schuld, Verantwortung und was dazwischen liegt») |
| V2 | `verstehen` › `bewertungen` | «Mitwirken können Erschöpfung, erlebte Kritik, Nähe oder Abstand, Missverständnisse, Scham oder Kränkung.» | «Erschöpfung» | `selbstfuersorge.html#warnsignale` («Warnsignale für Überlastung») |
| V3 | `verstehen` › `anspannung` | «Senken Sie Ihr eigenes Tempo, achten Sie auf Ihre eigene Anspannung und bieten Sie eine Pause an.» | «achten Sie auf Ihre eigene Anspannung» | `selbstfuersorge.html#zu-viel` («Wenn es gerade zu viel ist») |
| V4 | `beziehungen` › `was-hilft` | «Wenn Angehörige oft eigene Termine absagen oder dauernd erreichbar sind, kann das kurz entlasten und zugleich die eigene Belastung erhöhen.» | «dauernd erreichbar» | `selbstfuersorge.html#kraft` («Was Kraft kostet und was entlastet», mit «Ein freier Abend») |
| V5 | `beziehungen` › `verantwortung` | «Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.» | «nicht verantwortlich» | `rolle.html#anbieten` («Was Sie anbieten können und was nicht Ihre Aufgabe ist») |
| V6 | `grenzen` › `bruecke` | «Sie müssen die Beziehung nicht allein tragen.» | «nicht allein tragen» | `selbstfuersorge.html#beratung` («Nicht allein tragen») |
| V7 | `grenzen` › `arten` | «Sie dürfen Zeiten anbieten, in denen Sie erreichbar sind.» | «erreichbar» | `selbstfuersorge.html#kraft` |
| V8 | `grenzen` › `konsequenz` | «Ein Schuldgefühl heisst nicht, dass Sie etwas falsch gemacht haben.» | «Schuldgefühl» | `rolle.html#schuld` |
| V9 | `grenzen` › `gewalt` | Zwischentitel «Wenn Kinder mitbetroffen sind» | ein Satz am Ende des Absatzes wäre nötig, denn Überschriften verlinken nicht; ohne neuen Satz: kein Link | `rolle.html#kinder` («Wenn Kinder mitbetroffen sind») |

Empfehlung der bauenden Sitzung: V1, V4, V6 und V8. Sie treffen das Thema der Zielstelle genau. V2, V3, V5 und V7 sind möglich, aber weniger eindeutig. Ein Link in der Mitte eines Satzes bricht mit der Regel aus 1i, dass ein Verweis den Zieltitel in «…» nennt. Die Fachstelle entscheidet, ob vorhandene Wörter als Linktext genügen.

### Etappe 2a: Entscheide der bauenden Sitzung (zur Prüfung)

- **Gesprächsbeispiele** («Wie das klingen kann», Person A und B) stehen nicht auf `rolle` und `selbstfuersorge`. Sie sind für `kommunizieren` (Etappe 2) vorgemerkt, weil Abschnitt 3 Gesprächstechniken dorthin legt. Drei Einzelsätze daraus stehen als Beispielsätze in `rolle` › `nach-konflikten` (Abgleich Nr. 189, 193 und 194), wie Abschnitt 2a es für Beispielsätze aus dem Bestand verlangt.
- **«Was braucht im Alltag Veränderung?»** (`alltag`) steht auf `selbstfuersorge` › `kraft`, nicht auf `rolle` › `alltag` (Abweichung von der Gliederung). Der Abschnitt fragt nach der eigenen Erschöpfung und nach einer anderen Verteilung von Aufgaben, wie das Energie-Konto. `rolle` verweist auf `selbstfuersorge`.
- **«Wenn Schuldgefühle dazukommen»** (`selbstfuersorge.md`) steht auf `rolle` › `schuld`, zusammen mit `schuld-verantwortung`. So gibt es eine Stelle für Schuld. `selbstfuersorge` › `unterstuetzung` verweist dorthin.
- **«Hinweise für Ihre Situation»** (Partnerin oder Partner, Eltern, erwachsenes Kind) steht in `selbstfuersorge` › `eigenes-leben`, als Begriffsliste nach «Sie dürfen:». Die Hinweise sagen, was jede Rolle für sich selbst braucht.
- **Verweis im Text auf `selbstfuersorge`:** dreimal, an den drei Stellen, an denen der Bestand auf akute Gefahr verweist. In `akzeptanz` (Bestand «Bei Gefahr geht Schutz vor.») steht stattdessen ein Link auf `grenzen.html#gewalt`, damit der Verweis nicht viermal auf einer Seite steht.
- **Übungen als Text:** Atmen und 5-4-3-2-1 mit den Absicherungen des Bestands. Der Timer und seine Schaltfläche entfallen, weil die Seite ohne Skript und ohne Animation auskommt.
- **Leuchtturm:** Die Aussagen des Handouts stehen ohne Bild in `anbieten`. Das Wort «Leuchtturm» kommt auf der Seite nicht vor.
- **Kinder:** Sätze, die schon auf `grenzen` › `gewalt` stehen, sind nicht wiederholt; `rolle` › `kinder` verlinkt dorthin.
- **Bildausschnitt «Ein Stück Weg»:** `viewBox` «0 52 640 218» statt «0 0 640 270». Über den Hügeln war ein leerer Rand von 52 Einheiten der Zeichnung. Die Zeichnung selbst ist unverändert. Sonst nichts verfeinert: Die Sicht bei 1280 und 360 px verlangt keine Änderung.
- **Abstand nach «Ein freier Abend»:** Der Text danach steht in einem zweiten Raster desselben Abschnitts, mit `.bl-nach-figur` (`margin-top: var(--space-8)`). Ohne die Regel klebte der Text an der Quellenzeile der Abbildung.
- **Gunderson et al. (2018)** (Handout `schuld-verantwortung`) ist nicht übernommen, weil die Ursachen auf `verstehen` stehen und dort belegt sind. Das steht als Prüfbedarf in `abgleich/rolle.md`.
- **Kennzeichnungen der Handouts** («Redaktionelle Reflexionshilfe, kein validiertes Drei-Säulen-Modell», «kein DBT-Protokoll») entfallen in den Quellenzeilen, weil die Seite keine Modelle mit Namen nennt. Auch das ist Prüfbedarf.

### Etappe 2a: Kennzahlen der neuen Seiten

Skripte `abgleich/kennzahlen.mjs` und `abgleich/verneinung.mjs`. «Alt» ist bei `rolle` die Summe von `/unterstuetzen/uebersicht` und `/unterstuetzen/alltag`, bei `selbstfuersorge` `/selbstfuersorge` allein, jeweils ohne Handouts.

| Seite | Wörter alt → neu | Absicherungen je 100 Wörter alt → neu | Semikolons alt → neu | Sätze mit Verneinung alt → neu | Sätze über 15 Wörter |
| --- | --- | --- | --- | --- | --- |
| `rolle` | 2736 → 3339 (122 %) | 1,94 → 2,16 | 4 → 2 | 62 von 389 (16 %) → 83 von 389 (21 %) | 32 von 384 (8 %) |
| `selbstfuersorge` | 2419 → 2955 (122 %) | 2,27 → 2,64 | 10 → 2 | 44 von 341 (13 %) → 69 von 330 (21 %) | 23 von 320 (7 %) |
| `index` | 248 → 283 (vor → nach 2a) | 1,61 → 1,41 | 0 → 0 | 4 von 26 → 4 von 28 | – |

- **Länge:** Die neuen Seiten sind länger als die alten, weil sie 16 Handouts aufnehmen, die «alt» nicht zählt. Es gibt kein Kürzungsziel (Abschnitt 2b).
- **Wörter je Abschnitt:**
  - `rolle`: `anbieten` 534, `schuld` 593, `alltag` 818, `nach-konflikten` 196, `mehrere` 192, `kinder` 257, `an-grenzen` 679.
  - `selbstfuersorge`: `eigenes-leben` 366, `kraft` 790, `warnsignale` 284, `zu-viel` 485, `unterstuetzung` 433, `akzeptanz` 366, `beratung` 187.
- **Verneinungen:** Der Anteil liegt bei 21 %, wie auf den Seiten der Etappe 1 (20 bis 21 %). Die meisten Verneinungen tragen eine Entlastung oder eine Absicherung aus dem Bestand, zum Beispiel «Eine schwierigere Phase beweist nicht, dass Sie zu wenig getan haben.».
- **Semikolons:** `rolle` hat zwei in Listenpunkten («… oder anderen Substanzen; wozu er dient, bleibt offen» und «… wenn die Person das möchte; eigene Beratung …»). `selbstfuersorge` hat eines in einem Listenpunkt von `akzeptanz` und eines in der Kurzbeschreibung der Abbildung (Wortlaut des Profilbeispiels, nur für Screenreader; `kennzahlen.mjs` zählt diesen Text bei den Semikolons mit). Ein Prüfpunkt für S.

**Stand 10.10.2026 · Korrektur Etappe 1j · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1J.md` (Freigabe der Fachstelle eintragen). Sonst ist nichts geändert. Die Selbstprüfung von 1i steht darunter.

| Punkt | Stand | Beleg |
| --- | --- | --- |
| Auftrag verschieben | umgesetzt | `KORREKTUR-ETAPPE-1J.md` aus `6ccb57a` unverändert im Website-Ordner (Commit `d0ca1ba`, `cmp`: gleich); im Stamm von `main` gelöscht (`878536e`); zusammengeführt (`ad2c971`) |
| 3 Quellenzeile der Ursachen (P4-F-16) | umgesetzt | `verstehen` › `borderline`: «**Quellen:** WHO, ICD-11 (2024); American Psychiatric Association (2024); NICE CG78 (2009); Linehan (1993).»; «Quellen:» bleibt fett. `git diff --word-diff` auf den Seiten: nur «NICE CG78 (2009);» in `content/verstehen.html` und der gebauten `verstehen.html` |
| 4 `visualPlan` (P4-F-21) | umgesetzt | `approvalStatus` «freigegeben» bei genau `v-vs-eisberg`, `v-vs-anspannung`, `v-vs-bewertungen`, `v-bz-schleife`, `v-bz-sichten`, `v-gr-dear` (Skript mit Prüfung je ID; `git diff`: 6 Zeilen). `editorialStatus`, die zwölf Platzhalter und die Zeilen mit `format` «text» sind unverändert |
| 4 Abgleich, Quellenzeile | umgesetzt | `abgleich/verstehen.md` Nr. 34, 35 und 36: neue Zeile als Fassung, Status «gekürzt», Bemerkung endet mit «; NICE CG78 ergänzt (1j, P4-F-16)». Vergleich mit dem Stand vor 1j per Skript: keine andere Zeile geändert |
| 4 Abgleich, Prüfbedarf | umgesetzt | Bemerkungen mit «Prüfbedarf» enden mit «; erledigt: Freigabe Etappe 1 durch die Fachstelle, 10.10.2026 (1j)»: `verstehen` 11, `beziehungen` 1, `grenzen` 2, `index` 0 Zeilen (Skript: alle mit Vermerk). Unter jeder Überschrift «Prüfbedarf für W1 (Stand …)» der vier Tabellen steht der Absatz «**Erledigt am 10.10.2026:** …» im Wortlaut als erster Absatz |
| 4 Kopfnotizen, README | umgesetzt | «Korrektur 1j: …» und «Stand … Korrektur Etappe 1j» in allen vier Tabellen; `abgleich/README.md`: 1j in der Liste, Prüfergebnis nach 1j, Abschnitt «Korrektur Etappe 1j» |
| 5a Abschnitt «Fachliche Freigabe der Fachstelle» | umgesetzt | zeichengleich aus dem Codeblock von 1J übertragen (Skript), direkt vor diesem Abschnitt |
| 5b Statustabelle | umgesetzt | Zeile «W1 Fachliche Prüfung» zeichengleich ersetzt, Status «offen»; Zeile «Visualisierungs-Check»: «seit 10.10.2026 alle sechs Figuren fachlich freigegeben (Fachstelle)», Status «offen». Keine Stufe steht auf «erledigt» |
| 5c Selbstprüfung | umgesetzt | dieser Block |
| 2 Regeln | eingehalten | Per Skript gegen den Stand vor 1j geprüft: Der Prüfbericht ist ausser 5a, 5b und diesem Block gleich, die Seiten ausser der Quellenzeile |

**Gates (Abschnitt 6):**

- **`node tools/build.mjs`:** 0 blockierend, 14 Hinweise (bisher 20; die sechs Hinweise `visual-approval` entfallen): 12 × `placeholder-approval`, `site-url`, `review-report`.
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** 13 blockierend (12 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`site-url`), wie erwartet.
- **`node abgleich/pruefe-abgleich.mjs`:** 1763 Zeilen, 0 ohne Fundstelle.

**Hinweis (nicht geändert):** Die Fusszeile aller Seiten sagt weiter «Redaktioneller Status: Entwurf – fachliche Prüfung ausstehend». Sie kommt aus `editorialStatus`, und den ändert 1J ausdrücklich nicht.

**Stand 10.10.2026 · Korrektur Etappe 1i · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1I.md` mit den Entscheiden zur vierten Prüfrunde vom 10.10.2026:

- vorsichtige Formulierungen aus dem Bestand zurück
- Annahme 3 «nicht schuld»
- Verantwortung für Verlauf und Beziehung getrennt
- «Momentaufnahmen» mit Sprecherzeile und Bestandswortlaut
- neun gekürzte Sätze zurück
- «Eine Grenze gilt auch …»
- Ort der Beratung
- Verweise als Titel kenntlich
- Visualisierungsplan nachgeführt
- Abgleich nachgeführt (P4-W1-9)

Diese Selbstprüfung ersetzt die der Korrektur 1h mit Nachtrag r4-7 (Stand `f32c255`). Die Prüfstufen bleiben offen. Der Abschnitt «Visualisierungs-Check» unten beschreibt weiter den Stand 1h. Was 1i an den Figuren ändert, steht hier unter «Visualisierungs-Check: Änderungen durch 1i».

**Gates und Skripte:**

- **`node tools/build.mjs`:** 15 Seiten, Build r4-7, 0 blockierend, 20 Hinweise wie zuvor:
  - 6 Visualisierungen und 12 Platzhalter nicht freigegeben
  - `siteUrl` fehlt
  - Prüfbericht offen
- **`node tools/gate.mjs --selftest`:** 53/53 bestanden.
- **`node tools/gate.mjs --production`:** blockiert erwartungsgemäss mit 19 Befunden (6 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`), dazu 1 Hinweis (`siteUrl`).
- **`node abgleich/pruefe-abgleich.mjs`:** **1763 Zeilen, 0 ohne Fundstelle.** Ob die genannte Fassung die Aussage trägt, prüft das Skript nicht; das bleibt Aufgabe von W1.
- **Wortlaut:** Ein Skript sucht jede Stelle in «…» aus 1I, Abschnitte 3 bis 9 (Teil `visualPlan`), im sichtbaren Text von `index`, `verstehen`, `beziehungen` und `grenzen` und in `site.config.json`.
  - Ergebnis: 62 Stellen, 45 gefunden (eine davon erst ohne die führende Auslassung «… »).
  - Die 17 übrigen sind keine Fehler:
    - 13 sind Ausgangstexte («bisher») und stehen nicht mehr auf den Seiten bzw. im Plan («4 «Später»»).
    - 4 sind Stellen mit Auslassung «…»; ihr Anfang steht unverändert auf der Seite.
- **Unverändert:** Ein Skript vergleicht den sichtbaren Text Satz für Satz mit dem Stand `af892a5` (vor 1i).
  - Geändert sind genau die Stellen aus 1I (Satz-Diff: `index` 7, `verstehen` 35, `beziehungen` 12, `grenzen` 16 Zeilen).
  - Der Verweis im Text (`data-responsibility-inline`) steht unverändert auf `verstehen`, `beziehungen` und `grenzen` (je 1).
  - Keine `style`-Attribute, keine `tel:`-Links (`grep`: 0).

### Auftrag verschieben

| Schritt | Stand | Beleg |
| --- | --- | --- |
| Upload im Stamm | `KORREKTUR-ETAPPE-1I.md` aus `5c9079c` unverändert in den Website-Ordner gelegt | Commit `2c5d88b` auf `borderline-umbau`; `cmp` mit der Fassung aus `main`: gleich |
| Stamm von `main` | Datei gelöscht | Commit `247d787` auf `main` |
| Zusammenführen | `main` in `borderline-umbau`, ohne Konflikt | Merge-Commit `af892a5` |

### Korrekturauftrag 1i: Stand je Punkt (Abschnitte 3 bis 9)

| Punkt | Stand | Beleg |
| --- | --- | --- |
| 3 `bewertungen` (P4-F-1) | umgesetzt | «Wenn das geschieht, ist es keine Absicht.» |
| 3 `anspannung` (P4-F-5) | umgesetzt | «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» |
| 3 `anspannung` (P4-F-12) | umgesetzt | «… dreht sich für einen Menschen häufig fast alles um den Schmerz oder Streit im Moment.» |
| 3 Stelle 4 (P4-F-7) | umgesetzt | «Es kann wieder ruhiger werden.» an der Kurve, als Überschrift in der Liste und in der Kurzbeschreibung (3 Stellen, Skript) |
| 3 Stelle 4 bei 1280 px | erfüllt, mit Anpassung | bei 1280 px 90 px innerhalb der Figur, überdeckt die Kurve nicht (Bildschirmfoto). Zwischen 800 und 960 px Containerbreite ragte sie aus der Figur (900 px Fenster: 48 px, Seite 12 px Überlauf). Deshalb `@container (max-width:960px)` statt 800 px; darunter Nummern und Liste. Messung bei 12 Breiten von 700 bis 1440 px: Beschriftung innerhalb oder ausgeblendet, kein Überlauf |
| 3 `erleben` (P4-F-10) | umgesetzt | «… so und lässt sich aus der Diagnose nicht vorhersagen.» |
| 3 Eisberg, Vertiefung (P4-F-13) | umgesetzt | «Das Eisberg-Bild ist eine mögliche Verständnishilfe, … sicher «darunterliegt». Es soll Wut nicht verharmlosen.» |
| 3 Rücksprung (P4-F-17) | umgesetzt | «Was die Schwester tut, kann zum neuen Ereignis werden.»; der Satz steht nur einmal (`grep`) |
| 3 Suizid-Absatz (P4-F-9) | umgesetzt | «Bleiben Sie bei der Person nur, …»; Verweis im Text an seiner Stelle |
| 4 Annahme 3 (P4-F-2) | umgesetzt | Hauptsatz und Erklärung im Wortlaut (Skript) |
| 4 Annahme 5 | umgesetzt | «Die Abgrenzung gehört in eine fachliche Abklärung.» am Ende der Erklärung |
| 4 Stelle 4, Text | umgesetzt | «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» nach «Bieten Sie neuen Kontakt …»; Beispiel bleibt |
| 4 Momentaufnahmen (P4-F-4) | umgesetzt | `<p class="bl-scene__lead">Sätze, die Angehörige hören können:</p>` als erstes Element der Szene. «Du bist genau wie alle anderen.» am Satz und in `p.puk-sr` (2 Stellen). Zwei Sätze in der Vertiefung. Bildschirmfotos bei 1280 und 360 px: Zeile über beiden Spalten bzw. über den Sätzen |
| 4 CSS | umgesetzt | `.bl-scene__lead{grid-column:1/-1;margin:0 0 var(--space-2);font:var(--type-body-sm);color:var(--text-default)}`, ohne Rahmen |
| 5 `verantwortung` (P4-F-3) | umgesetzt | «… Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.»; «Es gibt keine «perfekte» Reaktion …» bleibt |
| 5 «Unterstützung verteilen» (P4-F-6) | umgesetzt | zwei Sätze vor «Auch eigene Strategien …» |
| 6 «Geld und Unterstützung» | umgesetzt | «Ihre eigene finanzielle Sicherheit und Ihre Belastungsgrenzen gehören in diese Entscheidung.»; Beispiel bleibt |
| 6 `konsequenz` (P4-F-6, P4-F-11) | umgesetzt | Absatz 1 in vier Sätzen; neuer Absatz direkt vor «Ein Schuldgefühl …». Bildschirmfotos bei 1280 und 360 px |
| 6 `bruecke` (P4-S-5), `reihenfolge` (P4-S-6) | umgesetzt | «…, denn sie zeigen, was geht und was nicht.»; «Langfristig und emotional niedriger:» |
| 6 `dear` (P4-W2-4) | umgesetzt | Verweissatz mit Link `verstehen.html#anspannung` auf den Titel; ein Tabstopp mehr (`bedienung.mjs`) |
| 7 `index` › `beratung` (P4-F-19, P4-S-6) | umgesetzt | fünf Sätze im Wortlaut, im selben Absatz; der Satz davor und «Kontakt: …» bleiben. Bildschirmfotos bei 1280 und 360 px |
| 8 Verweise (P4-S-3) | umgesetzt | drei Stellen; Anführungszeichen ausserhalb von `<a>`, Linkziele gleich (`git diff`) |
| 9 `visualPlan` (P4-V-1) | umgesetzt | `v-vs-anspannung` › `statement`: «4 «Es kann wieder ruhiger werden.»». Sonst kommt «Später» im Plan nicht vor (`grep`). `v-vs-bewertungen` › `goal`, `source` und `statement` im Wortlaut |
| 9 Abgleich | umgesetzt | siehe unten |
| 2 Regeln | eingehalten | keine eigenen Formulierungen auf den Seiten (Wortlaut-Skript); Sätze an allen Stellen gleich geändert |

### Abgleich (Abschnitt 9)

- **Neuer Status:** «umformuliert (Prüfrunde 4, 1i)»; der frühere Status steht in der Bemerkung («bis 1h: …»).
- **Geänderte Zeilen:**
  - `verstehen`: 29 Zeilen und Zusatzzeilen Nr. 544 und 546
  - `beziehungen`: 6 Zeilen und Zusatzzeilen Nr. 239 und 247
  - `grenzen`: 24 Zeilen
  - `index`: keine
  - Vergleich mit dem Stand vor 1i per Skript: keine andere Zeile geändert.
- **Zurückgekehrte Sätze** mit neuer Fassung und Ort: b162, b163, g51, g79, g369, g228, g261, g627, v17, v49, v119, v126, v330, v377, v381 sowie zu P4-F-5 v89 und v246, zu P4-F-12 v78 und zu P4-F-13 v61.
  - «übernommen», wo der Satz wörtlich gleich ist: v246, v330, v377.
  - Sonst «umformuliert (Prüfrunde 4, 1i)».
  - In der Bemerkung steht «Entscheid Fachstelle 10.10.2026 (P4-F-…)» statt «Prüfbedarf».
- **v289** (P4-F-5): Die Fassung bleibt. Die Bemerkung nennt jetzt den Satz mit «professionelle Hilfe» statt «Prüfbedarf».
- **P4-W1-9:**
  - v371 und v390 nennen die entfallenen Teile.
  - g208 ist «verschoben» nach `kommunizieren` (Etappe 2).
  - v138 und zusätzlich v140 bis v146 nennen die Quellenzeile statt der Vertiefung «Quellen».
  - Nr. 546 ist der Bestandszeile «Du bist genau wie alle anderen.» aus dem Handout `wenn-worte-treffen` zugeordnet, Status «übernommen».
- **Weitere Zeilen, deren Fassung sich mit 1i ändert:**
  - Eisberg: v167, v170
  - «häufig fast alles»: v242, v265, v272
  - «Abstand, Schutz und professionelle Hilfe»: v342, v343
  - Annahme 3: v117
  - Kopf von `grenzen`: g61, g110, g125, g308, g374, g602
  - Beratung auf `index`: g115, g247
  - «niedriger»: g138 bis g140
  - «denn sie zeigen»: g396, g399, g403, g405, g423
  - Suizid-Absatz: g646
  - `verantwortung`: b209
- **Nur die Bemerkung angepasst** (Zitat der neuen Fassung): v204, v249, v340, v445, v456, v504, b154, b155, b210.
- **Zählung:**
  - 1739 Bestandszeilen und 23 Zeilen ohne Bestandssatz (vorher 24).
  - Dazu 1 Zeile mit Bestandssatz aus einem Handout, das sonst keiner Seite der Etappe 1 zugeordnet ist (Nr. 546).
  - Kopfnotiz «Korrektur 1i: …» auf allen vier Tabellen.
  - `abgleich/README.md`: Status, Prüfergebnis, Messwerte, Abschnitt «Korrektur Etappe 1i».

### Wortzahl, Verneinungen und Bedienung

Skripte `abgleich/kennzahlen.mjs`, `abgleich/verneinung.mjs` und `abgleich/bedienung.mjs`. Werte vor 1i am Stand `af892a5`.

| | `index` | `verstehen` | `beziehungen` | `grenzen` |
| --- | --- | --- | --- | --- |
| Wörter vor → nach 1i | 238 → 248 | 1602 → 1673 | 1564 → 1600 | 1601 → 1667 |
| Sätze mit Verneinung | 3 von 24 → 4 von 26 | 37 von 183 → 39 von 190 | 33 von 169 → 35 von 172 | 42 von 195 → 43 von 201 |
| Absicherungen je 100 Wörter | 1,68 → 1,61 | 3,00 → 3,35 | 4,48 → 4,56 | 2,62 → 2,52 |
| Tabstopps | 10 → 10 | 18 → 18 | 16 → 16 | 20 → 21 |
| Seitenhöhe bei 360 px | 3863 → 3922 px | 16 071 → 16 418 px | 15 199 → 15 435 px | 16 500 → 16 982 px |
| höchste Figur bei 360 px | – | Anspannungskurve 3282 → 3379 px | Zwei Sichten 2359 px | DEAR 1791 px |

**Abschnitte mit geänderter Wortzahl:**

| Seite | Abschnitt | Wörter |
| --- | --- | --- |
| `index` | `beratung` | 67 → 77 |
| `verstehen` | `erleben` | 99 → 107 |
| `verstehen` | `eisberg` | 180 → 176 |
| `verstehen` | `anspannung` | 395 → 412 |
| `verstehen` | `bewertungen` | 235 → 270 |
| `verstehen` | `mythen` | 394 → 409 |
| `beziehungen` | `schleife` | 272 → 273 |
| `beziehungen` | `verstaerker` | 470 → 473 |
| `beziehungen` | `was-hilft` | 159 → 187 |
| `beziehungen` | `verantwortung` | 237 → 241 |
| `grenzen` | `bruecke` | 153 → 154 |
| `grenzen` | `arten` | 144 → 155 |
| `grenzen` | `dear` | 234 → 253 |
| `grenzen` | `konsequenz` | 143 → 174 |

Die Absicherungen auf `verstehen` steigen durch die vorsichtigen Formulierungen («kann», «häufig», «mögliche»); das ist Wortlaut des Auftrags.

**Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5:**

- **Überlauf:** keiner bei 320, 360, 768, 1280 und 1440 px auf den vier Seiten, auch nicht im Theme «kontrast» bei 1280 px.
- **Kontrast nach WCAG 1.4.3:** für allen sichtbaren Text in `main` gemessen, Vertiefungen geöffnet; kein Wert unter AA.
- **Fokus:** Alle Tabstopps haben einen sichtbaren Fokus; der erste ist «Zum Hauptinhalt».
- **Kein Wort über einer Form:**
  - Eisberg wie bisher: jedes Wort in der Form bei 900 bis 1440 px Fensterbreite; schmale Darstellung unter 800 px Containerbreite.
  - Kurvenbeschriftungen innerhalb der Figur oder ausgeblendet; die Beschriftung an Stelle 4 überdeckt die Kurve nicht.
- **Bildschirmfotos angesehen:**
  - bei 1280 und 360 px: Abbildung 2 und 3 auf `verstehen`, `index` › `beratung`, `grenzen` › `konsequenz`
  - im Theme «kontrast» bei 1280 px: alle sechs Figuren
- **Nicht geprüft:** Screenreader, Hardwaretastatur und Touch (Stufe 5, Person).

### Visualisierungs-Check: Änderungen durch 1i

| Figur | Punkt | Ergebnis | Beleg |
| --- | --- | --- | --- |
| `v-vs-anspannung` | 1 Plan entspricht der Seite | E (vierte Runde: T, P4-V-1) | `statement` nennt Stelle 4 «Es kann wieder ruhiger werden.» wie Beschriftung, Liste und Kurzbeschreibung |
| `v-vs-anspannung` | 10 nicht verfälscht | E | Stelle 4 mit «kann» (P4-F-7); «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» aus dem Handout |
| `v-vs-anspannung` | 9 keine Textwand | T, wie bisher | bei 360 px 3379 px hoch (vorher 3282 px) |
| `v-vs-anspannung` | 12 lesbar | E | unter 960 px Containerbreite Nummern an der Kurve, Sätze in der Liste darunter |
| `v-vs-bewertungen` | 1 Plan entspricht der Seite | E (vierte Runde: T, P4-V-1) | `goal`, `source` und `statement` ohne Pendel; `statement` nennt die Zeile «Sätze, die Angehörige hören können:» |
| `v-vs-bewertungen` | 4 Kernaussage, Erklärtext | E | unverändert; die Vertiefung ergänzt zwei Sätze und trägt die Hauptaussage nicht allein |
| `v-vs-bewertungen` | 16 Beschriftungen nennen Erleben | E | Die Zeile nennt, wer die Sätze hört (P4-F-4), und keinen Bildteil |

**Nicht erfüllt oder offen:**

- **Punkt 14:** Keine Figur ist fachlich freigegeben.
- **Weiter teilweise erfüllt** (Visualisierungs-Check unten):
  - Schleife: 2, 6, 15
  - DEAR: 8, 15, 16
  - Anspannungskurve: 9
  - Eisberg: 16, 17
- **Offen bis zur Freigabe:** P4-F-8, P4-F-16, P4-F-21. Dieser Auftrag ändert daran nichts.
- **Zurückgestellt (optional):** P4-W2-2, P4-S-4, P4-V-2, P4-V-4, P4-V-5, P4-V-6.
- **Stufe 5:** Screenreader-Läufe, Hardwaretastatur und Touch.

### Entscheide der bauenden Sitzung (zur Prüfung)

- **Schwelle der Kurvenbeschriftungen 960 statt 800 px:** Sonst ragte die längere Beschriftung bei 900 px Fensterbreite aus der Figur. Der Kommentar in `borderline.css` nennt den Grund.
- **Abstand unter der Sprecherzeile:** `--space-2`; der Auftrag sagt «mit Abstand nach unten».
- **Abgleich:**
  - **Nr. 544:** «umformuliert (Prüfrunde 4, 1i)», obwohl es keine Bestandszeile gibt (Regel des Auftrags: geänderte Fassung). Bisher gab es solche Zeilen schon mit «umformuliert (einfache Sprache, 1e)».
  - **Nr. 546:** zählt nicht mehr zu den Zeilen ohne Bestandssatz.
  - **Sätze ohne Bestandszeile:** «Sätze, die Angehörige hören können:», «Erfahrungen in engen Beziehungen können mitwirken, neben vielen anderen Einflüssen.» und der Verweissatz in `dear` bekommen keine eigene Zeile. Der Auftrag verlangt das nicht; die Kopfnotizen nennen sie.
  - **Zitate alter Fassungen:** Bemerkungen nennen sie ohne «…» (etwa «bis 1h ohne «kann»»). Das Prüfskript sucht jedes Zitat auf den Seiten oder im Bestand.
  - **Nicht genannt:** v140 bis v145 sind wie v138 und v146 berichtigt (gleicher Befund).

### Kennzahlen aller Seiten (Skript `abgleich/kennzahlen.mjs`)

Gemessen an der alten Seite allein, mit derselben Zählweise für alt und neu (`abgleich/README.md`). Text nur für Screenreader (`.puk-sr`) zählt nicht. Der Richtwert gilt nicht; die Wortzahlen werden nur berichtet.

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 248 | 57 % | – | – | 1,85 → 1,61 | 1 → 0 |
| `verstehen` | 2524 | 1673 | 66 % | 1300 | 1365 | 2,54 → 3,35 | 12 → 0 |
| `beziehungen` | 2149 | 1600 | 74 % | 1100 | 1155 | 3,82 → 4,56 | 6 → 1 |
| `grenzen` | 2985 | 1667 | 56 % | 1500 | 1575 | 2,41 → 2,52 | 4 → 0 |

## Visualisierungs-Check

Selbstprüfung der bauenden Sitzung nach Korrektur 1h, keine Prüfstufe. Zuerst die Tabelle der Vorlage über alle Figuren, danach die Matrix je Figur. E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

Mit Korrektur 1h gibt es 6 Figuren:

- **`v-vs-eisberg`:** neu gezeichnet; die Wörter stehen im Bild.
- **`v-vs-anspannung`:** Beschriftungen mit Punkt; Stelle 4 neu.
- **`v-vs-bewertungen`:** «Momentaufnahmen» ersetzt das Pendel.
- **`v-bz-schleife`:** Stationen in drei Zeilen.
- **`v-bz-sichten`:** gleiche Oberkante für beide Sichten.
- **`v-gr-dear`:** Nummern «1» bis «4».

`v-vs-mythen` ist im Plan jetzt Text (BS-3) und keine Figur mehr.

| Nr. | Prüfpunkt | Ergebnis | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Visualisierungsplan liegt vor; die Seiten entsprechen ihm | erfüllt | Build ohne Hinweis `visual-plan`. Jede Figur trägt `data-visual-id` und `data-visual-type` wie im Plan. `v-vs-bewertungen` steht im Plan und auf der Seite als «illustration» (seit Build r4-7) | – |
| 2 | Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt | teilweise | `v-vs-mythen` als Text: «Text ist klarer: Annahme und Einordnung sind Paare ohne Bildform; …». Schleife wie bisher: F-W2-02 | W2 entscheidet F-W2-02 |
| 3 | Prüffrage je Darstellung konkret beantwortet; die Darstellung zeigt, was die Antwort verspricht | erfüllt | Momentaufnahmen: `understood` «… Das Album zeigt auf einen Blick, dass es mehr als zwei Bilder gibt.» Das Bild zeigt das Album mit kleinen Fotos und zwei herausgenommenen. Eisberg: Wörter im Bild, oben und unten ohne Zuordnung | – |
| 4 | Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung | erfüllt | Momentaufnahmen: Kernaussage und Kurztext mit drei Sätzen sichtbar, Figur offen. Die Vertiefung ergänzt nur, was den Blick färben kann | – |
| 5 | Erklärmodelle (B, C, G): Ansatzpunkt markiert oder Verzicht begründet; keine Verantwortung für Behandlung oder Verlauf zugeschoben | erfüllt | Kurve Stelle 2 und Schleife Station 5 mit doppeltem Ring und Satz «… keine Pflicht.»; DEAR «entfällt: Der ganze Ablauf beschreibt das eigene Handeln …» | – |
| 6 | Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt | teilweise | Schleife wie bisher (F-W2-02) | W2 |
| 7 | Kartenraster-Check | erfüllt | Die Kastenreihe der Annahmen ist entfallen (BS-3). Zwei Sichten zeigen Paare nebeneinander, kein Raster gleichartiger Karten | – |
| 8 | Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung | teilweise | Zwei Sichten: Der Unterschied steht jetzt in Lage und Überschrift, nicht mehr in der Linienart (BS-6). DEAR: vier gefüllte Punkte auf einer Linie (P-6) | Profil P-6 |
| 9 | Darstellungen über den Erkenntnisweg verteilt; keine unbegründete Textwand | teilweise | Anspannungskurve bei 360 px 3282 px hoch. Abschnitt 06 ist eine Begriffsliste mit sieben Paaren, gegliedert durch `dt` und `dd` | Fachstelle (Länge) |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle oder Kennzeichnung | erfüllt | Eisberg: «… keine Aussage darüber, was in einer bestimmten Person «darunterliegt».» Momentaufnahmen: Vertiefung «… und Grenzen des Bildes»; Kennzeichnung «Eigene didaktische Darstellung · Grundlage: Linehan (1993); Hoffman et al. (2005).» | – |
| 11 | Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich | erfüllt | Eisberg-Wörter und Szenensätze sind HTML-Text, ohne Skript sichtbar; keine Animation | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | erfüllt | Bei 320 und 360 px kein Überlauf. Der Eisberg bleibt sichtbar (vorher fehlte er), die Szene ebenfalls. Kurzbeschreibungen im Wortlaut von 1H. Der Pendel-Befund R3-V-03 ist gegenstandslos, weil das Pendel entfällt; das bestätigt die Prüfsitzung | – |
| 13 | Theme «Hoher Kontrast» geprüft | erfüllt | Bildschirmfotos aller sechs Figuren bei 1280 px; `grep` nach festen Farbwerten in SVG: 0 | – |
| 14 | Inhalt fachlich freigegeben | nicht erfüllt | alle sechs `approvalStatus` «ausstehend» | Fachstelle |
| 15 | Bildsprache passt zum Thema; Wirkung im Plan und im Bild eingelöst | teilweise | `resonance` für alle sechs Figuren. Eisberg weich, mit Frage an die andere Person; Momentaufnahmen als Fotoalbum aus dem Alltag. Schleife: fünf Felder mit Pfeilen bleiben ein Ablaufbild (Variante B). DEAR: Punktreihe wie eine Schrittanzeige (BS-7 nur zum Teil) | R2 |
| 16 | Metapher ohne Code: ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | teilweise | Eisberg breit: die Wörter selbst sind das Erleben. Eisberg schmal: Listen «Sichtbar» und «Darunter möglich» unter der Zeichnung (Wortlaut des Auftrags). DEAR: Kürzel «D • Beschreiben» usw. | R2 |
| 17 | Keine ungewollten Bedeutungen | teilweise | Eisberg: Kälte und Gefahr bleiben im Motiv (Audit B6); die Fachstelle hat das Motiv am 10.10.2026 bestätigt. Die übrigen Figuren ohne solche Bedeutung; Zwei Sichten ohne gestrichelte Linie | R2; Fachstelle entschieden |

### Matrix je Figur (Selbstprüfung)

| Nr. | Prüfpunkt | `v-vs-eisberg` | `v-vs-anspannung` | `v-vs-bewertungen` | `v-bz-schleife` | `v-bz-sichten` | `v-gr-dear` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | E | E | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | T | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | E | E | E |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | E |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | – | E | – | E | – | E |
| 6 | Mechanismus nicht doppelt gezeigt | E | E | E | T | E | E |
| 7 | Kartenraster-Check | E | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | E | E | E | T |
| 9 | Verteilt, keine Textwand | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | E | E | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | E | T | E | T |
| 16 | Metapher ohne Code | T | E | E | E | E | T |
| 17 | Keine ungewollten Bedeutungen | T | E | E | E | E | E |

**Belege für die mit 1h geänderten Figuren**

- **`v-vs-eisberg`:**
  - **1:** `data-visual-type="layer-model"` wie im Plan.
  - **3 und 8:** Die Wörter stehen im Eisberg, oben die sichtbaren, unten die möglichen, ohne Linien dazwischen. Der Plan sagt: «Keine Zuordnung zwischen oben und unten.»
  - **12:** Bei 360 px steht die Zeichnung über die ganze Breite, darunter die Listen und die Frage (Bildschirmfoto).
  - **15:** Wirkung «Entlastung: … und ich darf nachfragen, statt zu raten.» Die Frage «Wie ist es gerade für dich?» steht neben dem Bild.
  - **16, T:** Schmal ordnen die Überschriften «Sichtbar» und «Darunter möglich» die Wörter oben und unten zu. Das ist eine Liste unter dem Bild nach Auftrag. Ob sie als Liste gilt, die Bildteile übersetzt, beurteilt R2.
  - **17, T:** wie in der Tabelle oben.
- **`v-vs-anspannung`:**
  - **15 und 16:** Alle vier Stellen sind Sätze aus dem Erleben, auch Stelle 4 (BS-5, erster Teil).
  - **9, T:** 3282 px bei 360 px (vorher 3254 px).
  - BS-5 zweiter Teil (eigene Anspannung als zweite Linie) bleibt offen.
- **`v-vs-bewertungen`:**
  - **3, 8 und 15:** Album mit kleinen Fotos; zwei herausgenommene Fotos, hell mit Sonne und dunkel mit Regenwolke. Die Sätze stehen darüber.
  - **11:** Die Figur ist offen, die Sätze sind HTML-Text.
  - **12:** Bei 360 px stehen die Sätze untereinander über der Zeichnung; Höhe 848 px.
  - **16:** keine Beschriftung von Bildteilen; die Liste «Links / Mitte / Rechts» ist entfallen.
- **`v-bz-schleife`:**
  - **15, T:** Wer handelt, steht oben in Lesegrösse, der Beispielsatz ist die Hauptzeile, der Modellbegriff steht klein darunter (BS-4 Variante B). Die Form aus fünf Feldern mit Pfeilen bleibt ein Ablaufbild. Variante A (zwei Seiten) hat die Fachstelle nicht gewählt.
  - **2 und 6, T:** wie bisher (F-W2-02).
- **`v-bz-sichten`:**
  - **8:** Beide Spalten haben eine durchgezogene Oberkante. Der Unterschied steht in Überschrift und Lage (BS-6). Damit ist P-7 für diese Figur gegenstandslos.
- **`v-gr-dear`:**
  - **8, T:** vier gefüllte Punkte (P-6).
  - **15, T:** Statt «Schritt n von 4» stehen jetzt nur Nummern. Die Punktreihe bleibt und wirkt wie eine Schrittanzeige; BS-7 nennt auch sie.
  - **16, T:** Kürzel «D • Beschreiben» usw. bleiben; sie zeigen die Herkunft des Modells.

**Übrige Punkte:** Belege wie in der Selbstprüfung 1g und der dritten Prüfrunde.

**Nicht erfüllt oder offen (Selbstprüfung):**

- **Punkt 14:** keine Figur ist fachlich freigegeben.
- **Teilweise erfüllt:**

  | Punkt | Figuren |
  | --- | --- |
  | 2 | Schleife |
  | 6 | Schleife |
  | 8 | DEAR |
  | 9 | Anspannungskurve |
  | 15 | Schleife, DEAR |
  | 16 | Eisberg (schmal), DEAR |
  | 17 | Eisberg |

- **Umfang:** Alle Wortzahlen liegen über Richtwert plus 5 %. Der Richtwert gilt nicht; über die Länge entscheidet die Fachstelle.
  - `verstehen`: 1602 Wörter.
  - `beziehungen`: 1564 Wörter.
  - `grenzen`: 1601 Wörter.
- **Abweichungen vom Auftrag**, mit Grund oben:
  - Schwellen 800 und 700 px.
  - `radius-md`, Entscheid auf Rückfrage.
- **Design-System:** Die Gate-Lücke für eigene Zeichnungen als «illustration» ist mit Build r4-7 geschlossen (Gate-Korrektur 10.10.2026).
- **Aus dem Audit offen:** BS-5 zweiter Teil (Fachstelle), BS-8 (Etappe 2).
- **Offen für die Fachstelle:**
  - R3-W1-05, R3-W1-06, F-V-05, F-W1-11, F-W2-02, F-W2-03.
  - Prüfbedarf in `abgleich/*.md`.
  - Was mit den Skizzen im Stamm geschieht.
  - Alle fachlichen Freigaben.
  - F-V-11 (Höhe der Annahmen) ist mit BS-3 gegenstandslos; das bestätigt die Prüfsitzung.
- **Statustabelle:** Die Zeilen R1 bis R3 fehlen noch; die Prüfsitzung trägt sie ein.
- **Profil (später):** P-6, P-9.
- **Offen für Stufe 5:** Screenreader-Läufe, Hardwaretastatur und Touch.

## Vierte Prüfrunde (10.10.2026, Stand f32c255)

**Geprüfter Stand:** Branch `borderline-umbau`, Commit `f32c255` (nach Korrektur 1h und Gate-Korrektur r4-7). Etappe 1: `index`, `verstehen`, `beziehungen`, `grenzen`. Die Entwurfsseiten sind nicht Gegenstand dieser Runde. Die Prüfsitzung hat die Website nicht gebaut. Sie hat keine Inhalte und keinen Code geändert und committet nur diesen Bericht.

**Vorgehen**

- **Grundlagen gelesen:** `CLAUDE.md`; aus `guidelines/` die Abschnitte Ablauf, Fachliche Qualität, Gesamtkohärenz, Sprache, Visuelle Wissensvermittlung («Ein Bild, eine Idee»), Visualisierung umsetzen (Check 1–17) und Pre-Release-Audits (R2 Teil 2 und 3); `README.md` («Zuständigkeit statt Krisenzugang», «Verweis im Text»); dazu `KORREKTUR-ETAPPE-1E.md` bis `1H.md`, `site.config.json` und `abgleich/README.md`.
- **Bestand:** Branch `origin/borderline-bestand`, `bestand/borderline-angehoerige/texte/` (73 Dateien) und `INVENTAR.md`, mit `git show` ausgelesen.
- **Abgleich:** Die vier Tabellen in `abgleich/*.md` sind per Skript in 1763 Zeilen zerlegt. Jede zitierte Bestandsstelle ist im Bestandstext nachgesucht.
- **Neue Sätze:** Ein Skript sammelt alle Stellen in «…» der vier Seiten (`content/*.html`). Es vergleicht sie mit dem Stand `0ba7013` (vor Korrektur 1e) und sucht sie im ganzen Bestand.
- **Browser:** lokal `python3 -m http.server 8765` (am Ende beendet), Chromium über Playwright. Bildschirmfotos jeder Figur bei 1280 und 360 px, je im Theme Standard und «kontrast». Die Bildschirmfotos sind nicht committet; die Belege beschreiben sie.
- **Skripte der bauenden Sitzung:** selbst ausgeführt, nicht übernommen (Teil F).

**Ergebnis in Kürze:**

- Etappe 1 ist technisch sauber: kein Überlauf, keine Kontrastverletzung, Tastatur in Ordnung, Gate und Skripte wie gemeldet.
- Die Kennzahlen der bauenden Sitzung stimmen.
- Kein kritischer Befund.
- Fachlich bleibt eine Reihe von Fragen offen. Die wichtigsten betreffen die Neufassungen:
  - eine neue absolute Aussage über die betroffene Person («Das geschieht ohne Absicht.»)
  - die Spannung zwischen «Angehörige sind nicht die Ursache» und Beziehungserfahrungen als Mitursache
  - «nicht allein verantwortlich für den Verlauf»
  - die neuen Sätze in «Momentaufnahmen»
- Dazu ist der Visualisierungsplan bei zwei Figuren veraltet.

### Teil A · W1 Fachliche Vorprüfung

#### A1 · 33 Aussagen gegen den Bestand

29 Aussagen stammen aus den Neufassungen 1e bis 1h, 4 aus anderen Stellen (Suizid, Gewalt, Kinder, Anspannung). Nr. = Zeile im Abgleich (b = `beziehungen.md`, v = `verstehen.md`, g = `grenzen.md`). Bestandsdateien in `texte/`.

| # | Korr. | Bestand (Zitat, Datei) | Neue Fassung (Zitat, Seite › Abschnitt) | Urteil |
| --- | --- | --- | --- | --- |
| 1 | 1e | «Eine Diagnose kann beeinflussen, wie Gefühle, Nähe oder Zurückweisung erlebt werden.» (`verstehen--beziehungen.md`, b17) | «Borderline kann beeinflussen, wie jemand Nähe oder Zurückweisung erlebt.» (`beziehungen` › Kopf) | gleichbedeutend («Gefühle» entfällt, im Abgleich genannt) |
| 2 | 1e | «Die Zurückweisung kann aber auch real sein; beides muss offenbleiben.» (b60) | «Und manchmal war die Zurückweisung tatsächlich da.» und «Für die betroffene Person ist dieses Erleben real, auch wenn Sie es anders gemeint haben.» (`beziehungen` › `verstaerker`, Station 2) | gleichbedeutend |
| 3 | 1e | «… können Abwehr, Selbstabwertung oder Rückzug die Klärung erschweren.» (b121) | «Dann können Abwehr oder Rückzug folgen, und eine Klärung wird schwieriger. Ob es im Einzelfall so ist, bleibt offen.» (`verstaerker`, Station 2) | gleichbedeutend; das «wird» ist durch den Folgesatz abgesichert |
| 4 | 1e | «Unterschiedliches Verhalten beweist weder bewusste Kontrolle noch, dass Angehörige die Schwierigkeiten verursacht haben.» (b128) | «… beweist nicht, dass die Person bewusst steuert oder täuscht. Es beweist auch nicht, dass Sie die Schwierigkeiten verursacht haben.» (`verstaerker`, Station 5) | gleichbedeutend |
| 5 | 1e | «Dissoziation ist eine mögliche Erklärung, aber keine, die Angehörige aus dem Verhalten allein feststellen können.» (b132) | «Ein möglicher Grund ist eine Dissoziation: ein Gefühl, wie abgetrennt oder nicht ganz da zu sein. Ob das zutrifft, können Sie aus dem Verhalten allein nicht feststellen.» (`verstaerker`, Station 4) | gleichbedeutend; die Erklärung ist gedeckt durch `glossar.md` Z. 122 («Abgetrenntsein von sich selbst») |
| 6 | 1e | «Bei Suizidgedanken oder Selbstverletzung darf Hilfe nicht aus Sorge vor einer «Verstärkung» vorenthalten werden.» (b168) | «… darf Hilfe nie zurückgehalten werden – auch nicht aus der Sorge, Zuwendung könnte das Verhalten verstärken.» (`beziehungen` › `verantwortung`) | gleichbedeutend, im Sinn der Sicherheit verschärft («nie»); der Verweis im Text folgt |
| 7 | 1e | «Dann braucht es eine angemessene professionelle Einschätzung.» (b169) | «Dann braucht es eine fachliche Einschätzung.» (ebd.) | gleichbedeutend |
| 8 | 1e | «… sollte aber weder alle Regulation übernehmen noch Behandlung ersetzen.» (b191) | «Sie sollte aber weder alle schwierigen Gefühle auffangen noch eine Behandlung ersetzen.» (`was-hilft`) | leicht enger («Regulation»); die Fachstelle hat die Fassung 1e gelesen («es ist gut», 1F) |
| 9 | 1e | «… sind aber weder Therapeut:innen noch allein für den Verlauf oder die Beziehung verantwortlich.» (b209) | «… keine Therapeutinnen oder Therapeuten und nicht allein verantwortlich für den Verlauf oder die Beziehung.» (`verantwortung`) | gleichbedeutend mit dem Bestand; widerspricht aber anderen Seiten (P4-W2-1) |
| 10 | 1f | «Solche Erfahrungen kommen nicht bei allen Menschen mit Borderline vor und lassen sich aus der Diagnose nicht vorhersagen.» (`verstehen.md`, v17) | «Das ist nicht bei allen Menschen mit Borderline so.» (`verstehen` › `erleben`) | **Absicherung fehlt:** «aus der Diagnose nicht vorhersagen» entfällt; im Abgleich als Prüfbedarf genannt (P4-F-10) |
| 11 | 1f | «Manche drücken starke Gefühle sichtbar aus, andere erleben sie eher nach innen gerichtet oder ziehen sich zurück.» (v26) | «Manche zeigen starke Gefühle nach aussen. Andere erleben sie eher nach innen oder ziehen sich zurück.» (`borderline`) | gleichbedeutend |
| 12 | 1f | «Die Diagnose allein erlaubt keine Aussage darüber, ob von einem Menschen Gefahr ausgeht.» (v28) | «Die Diagnose allein sagt nichts darüber, ob von einem Menschen Gefahr ausgeht.» (`borderline`) | gleichbedeutend |
| 13 | 1f | «Unter hoher emotionaler Überflutung verengt sich das Erleben häufig stark auf den aktuellen Schmerz, die aktuelle Angst oder den aktuellen Konflikt.» (v78) | «Bei hoher Anspannung zählt für einen Menschen oft nur noch der Schmerz oder Streit im Moment.» (`anspannung`) | **Bedeutung leicht verschoben:** «verengt sich stark» wird «zählt nur noch»; «Angst» entfällt (P4-F-12) |
| 14 | 1f | «Borderline entsteht nicht durch eine einzige Ursache, sondern im Zusammenspiel biologischer Empfindlichkeit, Bindungs- und Entwicklungserfahrungen sowie Belastungsfaktoren.» (v100) | «Borderline hat nicht eine einzige Ursache. Mehrere Dinge wirken zusammen: eine biologische Empfindlichkeit, Erfahrungen in engen Beziehungen und beim Aufwachsen sowie Belastungen.» (`borderline`) | gleichbedeutend; Spannung zu Nr. 16 (P4-F-2) |
| 15 | 1f | «Schuldzuweisungen an Betroffene oder Angehörige greifen zu kurz und helfen niemandem.» (v101) | «Die Schuld bei der betroffenen Person oder bei Angehörigen zu suchen, ist zu einfach.» (`borderline`) | gleichbedeutend (gekürzt, im Abgleich genannt) |
| 16 | 1f | «Angehörige sind weder Ursache der Borderline-Erkrankung noch für die Genesung einer anderen Person verantwortlich.» (v117) | «Angehörige sind nicht die Ursache der Erkrankung und nicht für die Genesung verantwortlich.» (`mythen`, Annahme 3) | gleichbedeutend; Spannung zu Nr. 14 und Annahme 5 (P4-F-2) |
| 17 | 1f | «Wechselseitigen Einfluss anzuerkennen bedeutet keine Schuldzuweisung und keine Aufteilung von Verantwortung für die Erkrankung.» (v119) | «Dass man sich in einer Beziehung gegenseitig beeinflusst, heisst nicht, dass jemand schuld ist.» (Annahme 3) | gleichbedeutend im Kern; «keine Aufteilung von Verantwortung» entfällt (im Abgleich genannt) |
| 18 | 1f | «Solche Erfahrungen können Risikofaktoren sein; sie sind weder notwendig noch hinreichend …» (v123) | «Solche Erfahrungen können das Risiko erhöhen. Sie führen aber nicht zwingend zu Borderline, und Borderline kann auch ohne sie entstehen.» (Annahme 5) | gleichbedeutend |
| 19 | 1f | «In klinischen Kontexten wird die Störung häufig als frauendominiert wahrgenommen; bevölkerungsbezogene Studien berichten teils keine signifikanten Unterschiede.» (v135) | «In Kliniken gilt Borderline oft als Erkrankung, die vor allem Frauen betrifft. Studien in der allgemeinen Bevölkerung finden aber teils keine statistisch bedeutsamen Unterschiede …» (Annahme 7) | gleichbedeutend |
| 20 | 1f | «Eine Pendel-Metapher für einen vorübergehend verengten Blick – nicht für eine feste Eigenschaft oder Absicht.» (`verstehen.md` Z. 349, v504); «Sie beschreibt weder eine feste Eigenschaft einer Person noch eine Absicht …» (`materialien--text--spaltung.md`, v371) | «Das geschieht ohne Absicht.» (`verstehen` › `bewertungen`, Abschnittstext) | **Bedeutung verschoben, Absicherung fehlt:** Der Bestand sagt, das Bild beschreibe keine Absicht. Neu steht als Tatsache über die Person, es geschehe ohne Absicht (P4-F-1) |
| 21 | 1f | «Eine Grenze gilt auch ohne Zustimmung der anderen Person; deren Reaktion können Sie nicht steuern.» (`materialien--text--lmk.md`, g627) | «Für die Reaktion der anderen Person sind Sie nicht verantwortlich.» (`grenzen` › `konsequenz`) | **Bedeutung verschoben:** «gilt auch ohne Zustimmung» fehlt; im Abgleich als «zusammengeführt» geführt (P4-F-11) |
| 22 | 1f | «Welche Grenze passt, ist individuell und darf ohne moralische Bewertung entschieden werden.» (g271) | «Welche Grenze passt, ist individuell und keine Frage von moralisch richtig oder falsch.» (`rollen`) | gleichbedeutend |
| 23 | 1f | «Sie beweisen keine Grenzverletzung.» / «Ein Signal sagt nicht automatisch, was die Ursache ist.» (`materialien--text--grenzen-erkennen.md`, g490, g500) | «Solche Signale beweisen nicht, dass jemand eine Grenze verletzt hat, und zeigen auch nicht sicher, woher die Belastung kommt.» (`erkennen`) | gleichbedeutend (F-W1-03 hier erledigt) |
| 24 | 1g | «Bei starker Aktivierung können Zuhören, Abwägen und Impulse steuern vorübergehend schwerer werden.» (`materialien--text--alarm-modus.md`, v236) | «Dann kann es vorübergehend schwerfallen, zuzuhören, nachzudenken und sich zurückzuhalten.» (`anspannung`, Abbildung 2, Stelle 3) | gleichbedeutend |
| 25 | 1g | «Grenzen können Kontakt schützen.» (`materialien--text--bruecke-gelaender.md`, g423) | «Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht.» (`grenzen` › `bruecke`) | gleichbedeutend (W1-2 der ersten Runde erledigt) |
| 26 | 1h | «Das Eisberg-Bild ist eine mögliche Verständnishilfe, keine Aussage darüber, was in einer konkreten Person sicher «darunterliegt».» (`verstehen.md`, v61) | «Der Eisberg ist ein Bild dafür, was man von aussen sieht, keine Aussage darüber, was in einer bestimmten Person «darunterliegt».» (Abbildung 1, Vertiefung) | **leicht verschoben:** Das Bild handelt gerade auch vom Unsichtbaren, nicht nur vom Sichtbaren (P4-F-13; Wortlaut aus 1H) |
| 27 | 1h | «Unter hoher Anspannung kann der Blick auf einen Menschen vorübergehend enger werden.» (spaltung, v391) | «Unter starker Anspannung kann ein einzelner Moment das ganze Bild bestimmen …» und «… der Blick kann sich wieder weiten.» (Abbildung 3, Kurztext) | gleichbedeutend |
| 28 | 1h | «Sie gilt nicht für alle Menschen mit Borderline und erklärt keine einzelne Situation abschliessend.» (spaltung, v390) | «… und gilt nicht für alle Menschen mit Borderline.» (Abbildung 3, Vertiefung) | gleichbedeutend im Kern; «erklärt keine einzelne Situation abschliessend» entfällt, die Bemerkung im Abgleich nennt das nicht (P4-W1-9) |
| 29 | 1h | Bestand-Handout: drei Bereiche «Rückzug», «Im Gespräch», «Zu viel Alarm»; dazu «Später nur dann neuen Kontakt anbieten, wenn es für Sie sicher und gewollt ist.» (`materialien--text--anspannungskurve.md`) | Stelle 4 «Es wird wieder ruhiger.» (Abbildung 2, Beschriftung und Überschrift) | **neu ohne Grundlage:** Der Bestand kennt keine vierte Stelle und kein Wiederabklingen als Satz. Das Beispiel bei Stelle 4 stammt aus «Bei Rückzug» (P4-F-7) |
| 30 | – | «Wenn Sie sich konkret sorgen, fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Solche Fragen lösen nach heutigem Wissensstand keine suizidale Handlung aus; sie können helfen, die Lage zu verstehen …» (`verstehen.md` Z. 197) | wörtlich (`mythen`, Abschnittstext) und «Das kann helfen, die Lage zu verstehen.», danach der Verweis im Text; Annahme 6 «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» | gleichbedeutend |
| 31 | – | «Bringen Sie sich in Sicherheit und wenden Sie sich an passende professionelle Hilfe. Sie müssen die Dringlichkeit nicht allein einschätzen.» (`grenzen.md` Z. 476) | «Bringen Sie sich in Sicherheit und holen Sie Hilfe.», Verweis im Text, «Sie müssen die Dringlichkeit nicht allein einschätzen.» (`gewalt`, Schritt 2) | gleichbedeutend |
| 32 | – | «Vereinbaren Sie, welche vertraute erwachsene Person das Kind betreut, wohin es gehen kann und wer erreichbar ist, wenn die erste Person ausfällt.» (`grenzen.md` Z. 491) | «… und wer einspringt, wenn diese ausfällt.» (`gewalt`, Kinder) | gleichbedeutend |
| 33 | – | «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» (`materialien--text--alarm-modus.md`, v246) | «Bei Gefahr hat Schutz Vorrang.» (`anspannung`) | gekürzt: «professionelle Hilfe» fehlt (R3-W1-06, P4-F-5) |

**Bilanz:** 24 gleichbedeutend (davon 3 mit bekanntem Spannungs- oder Widerspruchsbezug), 5 Bedeutung verschoben, 2 mit fehlender Absicherung (Nr. 10 und Nr. 20, Nr. 20 zugleich verschoben), 1 neu ohne Grundlage (Nr. 29), 1 gekürzt mit offenem Prüfbedarf (Nr. 33). Keine Sicherheitsaussage ist entfallen.

#### A2 · 20 Zeilen des Abgleichs mit Status «umformuliert», «verschoben» oder «entfällt»

| Nr. | Status | Bestand (Kern) | Trägt die neue Fassung / ist «entfällt» begründet? |
| --- | --- | --- | --- |
| v59 | entfällt | «Ärger oder Wut … müssen aber weder im Vordergrund stehen noch auf eine bestimmte Weise geäussert werden.» | Aussage getragen von `borderline` («Manche zeigen starke Gefühle nach aussen. Andere erleben sie eher nach innen …»); die Begründung «Kürzung W2-2» verweist nicht dorthin |
| v330 | entfällt | «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» | begründet (Figur zeigt nur Anspannung); im Abgleich als Prüfbedarf markiert (P4-F-6) |
| v336 | entfällt | «Was kann die andere Person freiwillig anbieten, und wo liegt ihre Grenze?» | nur teilweise begründet: `erkennen` fragt nach dem eigenen Angebot, nicht nach dem der anderen Person |
| v393 | entfällt | «… bedeutet nicht, verletzende Aussagen, Drohungen oder Gewalt hinzunehmen.» | getragen von `einordnung` («Verstehen bedeutet nicht, alles auszuhalten.») und `beziehungen` › `verantwortung` |
| v27 | entfällt | «Ausdruck, Verlauf und Belastung unterscheiden sich deutlich.» | begründet (Wiederholung von «Kein einzelnes Merkmal trifft auf alle zu») |
| b54 | entfällt | «Zunächst steht nur fest: Eine Antwort ist noch nicht da.» | begründet (Beispiel ersetzt durch die Absage) |
| b158 | entfällt | «Diese Reaktionen sind verständlich und verdienen Aufmerksamkeit …» | getragen: Abbildung 2 «Beide Sichten sind nachvollziehbar»; Ansatzpunkt Station 5 |
| b162 | entfällt | «… dauerhaft verfügbar bleiben, kann das kurzfristig entlasten und zugleich die eigene Belastung erhöhen.» | **Begründung überholt:** «Kürzung Umfang (Korrektur 1b)»; der Richtwert gilt seit 1c nicht mehr (R3-W1-05, P4-F-6) |
| b163 | entfällt | «… keine einzelne Bezugsperson kann Sicherheit allein gewährleisten.» | **Begründung überholt** («Kürzung W2-2»); entlastende Aussage, nur teilweise getragen von «ich kann das nicht allein tragen» (P4-F-6) |
| b39 | entfällt | «Unterschiede, die stehen bleiben dürfen» | **Begründung überholt** («Kürzung Umfang»; R3-W1-05) |
| g60 | entfällt | «Wenn sie schwer einzuhalten ist, können kleinere Schritte oder eigene Beratung helfen.» | getragen von `konsequenz` («holen Sie Unterstützung und passen sie an») und `kontakt` |
| g208 | entfällt | «Zeitgrenzen wirken am besten, wenn Sie sie in einer ruhigen Situation ankündigen …» | Status passt nicht: Die Bemerkung sagt «vorgemerkt für `kommunizieren`», das wäre «verschoben» (P4-W1-9) |
| g234 | entfällt | «Bei Gefahr hat Schutz Vorrang.» | begründet (Kopf und `gewalt`) |
| g264 | entfällt | «Die Beispiele können bei der individuellen Einordnung helfen.» | begründet (Meta-Satz) |
| g425 | umformuliert (1g) | «Eine Grenze bewertet keinen Menschen.» | nur teilweise: «Sie beschreibt, was für Sie möglich ist.» Die Aussage «bewertet keinen Menschen» steht sinngemäss in «keine Strafe und kein Liebesentzug» und `rollen`; Wortlaut 1G |
| g397 | umformuliert (1g) | «… keinen Kontakt versprechen, der für Sie nicht sicher oder tragbar ist.» | trägt («Sie entscheiden, welcher Kontakt für Sie sicher und tragbar ist.») |
| v371 | umformuliert (1h) | «… weder eine feste Eigenschaft … noch eine Absicht und lässt sich nicht aus einer Diagnose vorhersagen.» | teilweise: Die Vertiefung sagt «nicht den Charakter»; «Absicht» steht verschoben im Abschnittstext (Nr. 20 oben); «nicht aus einer Diagnose vorhersagen» entfällt, die Bemerkung nennt das nicht |
| v390 | umformuliert (1h) | «… erklärt keine einzelne Situation abschliessend.» | teilweise (siehe A1 Nr. 28) |
| v380 | verschoben (1h) | «Kränkung, Angst oder Wut können den Blick stark färben.» | trägt (Vertiefung von Abbildung 3; keine Hauptaussage) |
| b131 | umformuliert (1e) | «Verstummen, Unwirklichkeitsgefühle oder abweichende Erinnerungen …» | trägt («abwesend wirkt», das Gefühl beschreibt der Folgesatz) |

**Weitere Feststellungen zum Abgleich:**

- Der Abgleich markiert **24 Zeilen** als «Prüfbedarf». Die meisten sind Kürzungen für den Richtwert, der nicht mehr gilt: v17, v92, v126, v278–v283, v289, v326, v329–v331, v377, v381, v441, b133, g51, g79, g121, g261, g369, g650. Sie stehen gesammelt in P4-F-6.
- «Du bist wie alle anderen.» ist als «neu (1h)» geführt. Der Bestand hat den Satz fast gleich als Vorwurf an Angehörige: «Du bist genau wie alle anderen.» (`materialien--text--wenn-worte-treffen.md` Z. 47).
- v138 und v146 nennen weiter eine «Vertiefung «Quellen»», die es seit 1h nicht mehr gibt.

#### A3 · Beispielsätze und Sätze in Abbildungen, neu seit Korrektur 1e

Grundlage: alle Stellen in «…» auf den vier Seiten, verglichen mit dem Stand `0ba7013` und gesucht im ganzen Bestand. Dazu die Wörter im Eisberg.

| Satz | Seite › Ort | Herkunft |
| --- | --- | --- |
| «Wie ist es gerade für dich?» | `verstehen` › `eisberg`, Text und Abbildung 1 | Bestand: `glossar.md` Z. 296 («Offene Frage: 'Wie ist es gerade für dich?'») |
| «Es wird wieder ruhiger.» | `verstehen` › Abbildung 2, Stelle 4 | **neu** → P4-F-7 |
| «Du bist die Einzige, die mich versteht.» | `verstehen` › Abbildung 3 | **neu** → P4-F-4 |
| «Du bist wie alle anderen.» | `verstehen` › Abbildung 3 | gekürzt aus dem Bestand: «Du bist genau wie alle anderen.» (`wenn-worte-treffen.md` Z. 47, dort als Vorwurf an Angehörige mit Antwortvorschlag) → P4-F-4 |
| «… oder ganz andere Erfahrungen» (Wort im Eisberg) | `verstehen` › Abbildung 1 | Bestand: `materialien--text--eisberg.md` Z. 91 |
| Wörter «Rückzug», «Anspannung» im Eisberg | `verstehen` › Abbildung 1 | vor 1e im Text; das Handout nennt «Stress» statt «Anspannung» und kein «Rückzug» (Z. 15). Sachlich gedeckt durch den Begriffsentscheid W2-5 |
| «Was trägt unsere Beziehung – und wann gelingt der Kontakt?» | `beziehungen` › `verbindung` | umformuliert aus `verstehen--beziehungen.md` Z. 70 |
| «Wie hast du meine Absage verstanden?» | `beziehungen` › Abbildung 1, Ansatzpunkt | **neu** (1e) → P4-F-8 |
| «Ich bin bei der Arbeit. Ich melde mich heute Abend.» | `beziehungen` › `verstaerker`, Station 2 | **neu** (1e) → P4-F-8 |
| «Vorhin warst du plötzlich weit weg. Wie war das für dich?» | `verstaerker`, Station 4 | **neu** (1e) → P4-F-8 |
| «Ich habe den Eindruck, du bist enttäuscht von mir. Stimmt das?» | `zwei-sichten` | **neu** (1e) → P4-F-8 |
| Nicht in «…»: «Vielleicht wirkt die Person bei Freunden oder bei der Arbeit ruhiger als bei Ihnen.», «Das kann kränken.» | `verstaerker`, Station 5 | **neu** (1e, Abgleich b242, b243) → P4-F-8 |
| «Ich bin da – und ich brauche einen ruhigen Ton.», «Das kann ich nicht allein tragen. Wir holen Unterstützung dazu.» | `grenzen` › `bruecke` | Bestand: `materialien--text--bruecke-gelaender.md` |
| «Ich bin gerne für dich da – und ich kann nicht dein ganzes Netz sein. Lass uns zusammen schauen, wer dich sonst noch unterstützen kann.» | `grenzen` › `saetze` | erster Satz Bestand (`grenzen.md` Z. 396); zweiter Satz **neu**, im Bestand «Dafür brauchen wir gemeinsam andere Unterstützung.» → P4-F-8 |
| «Ich brauche jetzt Abstand. Ob und wann wir weiterreden, kläre ich später.» | `grenzen` › `konsequenz` | Bestand: `materialien--text--beispiel-dialog.md` |

#### A4 · Offener Prüfbedarf aus früheren Runden

| Punkt | Stand | Beleg |
| --- | --- | --- |
| F-V-05 Schleife ohne Modellgrenzen, «kann» und «wird» gemischt | teilweise erledigt, Rest neu zu fassen | Grenze steht im Kurztext: «Das Modell ist eine mögliche Erklärung, keine sichere Aussage …» (1b, 1e). Es bleibt «Was die Schwester tut, wird zum neuen Ereignis.» neben der Kernaussage mit «kann» → P4-F-17 |
| F-V-11 Annahmen als Kastenreihe | durch Korrektur 1h erledigt (BS-3) | `verstehen` › `mythen` ist eine `dl` ohne `figure`. Der Abschnitt ist bei 360 px 3430 px hoch, jetzt als Text |
| F-W1-11 Quellenzuordnungen | noch offen | Ursachensatz mit Quellenzeile «WHO, ICD-11 (2024); American Psychiatric Association (2024); Linehan (1993)»; Fruzzetti (2006) und Gunderson et al. (1997) auf `beziehungen`; sechs Bezugspunkte bei Abbildung 2. Neu dazu nur Quellen, die der Bestand nennt: Momentaufnahmen wie `spaltung.md`, `bruecke` wie `bruecke-gelaender.md` → P4-F-16 |
| F-W2-02 Planbegründungen `v-vs-erleben`, `v-bz-was-hilft` | noch offen | `v-bz-was-hilft`: «Inhaltscontainer, keine Beziehung untereinander». Die Liste nennt aber «Stellen, an denen sich die Schleife unterbrechen lässt», also eine Beziehung zu Abbildung 1 → P4-F-18 |
| F-W2-03 Beratung «vor Ort» ohne Ort | noch offen | `index` › `beratung`: «Sie findet vor Ort oder telefonisch statt» → P4-F-19 |
| R3-W1-05 Kürzungen an Aussagen für Angehörige | noch offen | b39, b45 (Teil «eine Person «handhabt» nicht die andere»), b162, g228 weiter entfallen, Begründung jeweils Kürzung für den Richtwert → P4-F-6 |
| R3-W1-06 Anspannung ohne professionelle Hilfe | noch offen | `anspannung`: «Bei Gefahr hat Schutz Vorrang.»; Abgleich v246, v289 → P4-F-5 |
| Spannung «Angehörige sind nicht die Ursache» und Kindheitserfahrungen als Risikofaktor | neu zu fassen, verschärft | Seit 1f nennt `borderline` «Erfahrungen in engen Beziehungen und beim Aufwachsen» als Mitursache. Annahme 3 sagt «nicht die Ursache», Annahme 5 «können das Risiko erhöhen» → P4-F-2 |
| R3-W1-01 bis R3-W1-04 | durch Korrektur 1c/1e erledigt | Station 4 jetzt «kann das viele Gründe haben. Ein möglicher Grund ist eine Dissoziation …»; «Es gibt keine «perfekte» Reaktion …»; «Mögliche Sicht der …»; «Was könnte die Person innerlich erleben?» |
| BS-5 zweiter Teil (eigene Anspannung als zweite Linie) | noch offen | Kurztext «Das gilt für die andere Person und auch für Sie.», im Bild eine Linie → P4-F-20 |
| Skizzen im Stamm | erledigt | laut Nachtrag mit Merge `56f5438` entfernt; `ls` im Stamm: keine `skizze-*.png` |

#### Prüfbedarf für die Fachstelle

Nach Wichtigkeit sortiert. Jede Frage lässt sich mit Ja oder Nein oder mit einer Auswahl beantworten. Die Varianten halten den Bestand, wo es einen gibt.

1. **P4-F-1 · Absicht.** `verstehen` › `bewertungen`: «Das geschieht ohne Absicht.» Der Bestand sagt nur, das Bild beschreibe «keine Absicht» (`spaltung.md`; `verstehen.md` Z. 349). Soll der Satz (a) so bleiben, (b) wie im Bestand abgesichert werden, etwa «Das beschreibt keine Absicht.», oder (c) entfallen?
2. **P4-F-2 · Ursache und Angehörige.** `verstehen` sagt dreierlei:
   - `borderline`: «Mehrere Dinge wirken zusammen: … Erfahrungen in engen Beziehungen und beim Aufwachsen …»
   - Annahme 3: «Angehörige sind nicht die Ursache der Erkrankung …»
   - Annahme 5: «Solche Erfahrungen können das Risiko erhöhen.»
   
   Eltern können das als Widerspruch lesen. Soll (a) alles so bleiben, (b) Annahme 3 den Bestandssatz wieder aufnehmen («… keine Aufteilung von Verantwortung für die Erkrankung», v119), oder (c) die Fachstelle einen Satz vorgeben, der beides verbindet?
3. **P4-F-3 · Verantwortung für den Verlauf.** Die Seiten sagen Verschiedenes:
   - `beziehungen` › `verantwortung`: «… nicht allein verantwortlich für den Verlauf oder die Beziehung»
   - `index` › `haltung`: «Sie sind nicht für die Genesung eines anderen Menschen verantwortlich.»
   - `verstehen` › Annahme 3: «… nicht für die Genesung verantwortlich.»
   
   «Nicht allein» kann eine Mitverantwortung für den Krankheitsverlauf nahelegen. Soll es heissen (a) wie bisher, (b) «nicht verantwortlich für den Verlauf der Erkrankung und nicht allein für die Beziehung», oder (c) anders?
4. **P4-F-4 · Sätze in «Momentaufnahmen».** «Du bist die Einzige, die mich versteht.» ist neu. «Du bist wie alle anderen.» ist aus einem anderen Handout gekürzt (dort ein Vorwurf an Angehörige). Die Figur sagt nicht, wer spricht, und engt die Aussage auf Bewertungen der Angehörigen ein; das Handout meint Bewertungen allgemein. Werden (a) beide Sätze so freigegeben, (b) mit dem Bestandswortlaut «Du bist genau wie alle anderen.», (c) mit Angabe, wer spricht, oder (d) andere Sätze?
5. **P4-F-5 · Professionelle Hilfe bei Anspannung** (R3-W1-06). `anspannung`: «Bei Gefahr hat Schutz Vorrang.» Das Handout sagt: «Bei Gefahr haben Abstand, Schutz und professionelle Hilfe Vorrang.» Soll der Handout-Wortlaut stehen (Ja/Nein)?
6. **P4-F-6 · Gekürzte Aussagen für Angehörige.** Gekürzt wurde für den Richtwert, der seit 1c nicht mehr gilt. Betroffen sind R3-W1-05 und die 24 Zeilen «Prüfbedarf» im Abgleich (Liste in A2). Darunter:
   - «Wenn Angehörige … dauerhaft verfügbar bleiben, kann das kurzfristig entlasten und zugleich die eigene Belastung erhöhen.» (b162)
   - «keine einzelne Bezugsperson kann Sicherheit allein gewährleisten» (b163)
   - «etwa bei Angst, Abhängigkeit oder fehlender Unterstützung» (g228)
   - «Der Wunsch nach Kontakt oder Abstand darf sich verändern.» (v330)
   
   Sollen (a) alle, (b) nur b162, b163 und g228, oder (c) keine wieder aufgenommen werden?
7. **P4-F-7 · Stelle 4 der Anspannungskurve.** «Es wird wieder ruhiger.» ist neu und klingt wie eine sichere Aussage über den Verlauf. Der Kurztext sagt «kann … wieder sinken». Das Beispiel «Ich lasse dir Raum …» steht im Handout bei «Rückzug». Soll (a) «Es wird wieder ruhiger.» bleiben, oder (b) «Es kann wieder ruhiger werden.» stehen? Bleibt das Beispiel bei Stelle 4 (Ja/Nein)?
8. **P4-F-8 · Neue Beispielsätze aus 1e und 1f** (Liste in A3, 7 Stellen ohne Bestand). Die Fachstelle hat `beziehungen` nach 1e gelesen («es ist gut», 1F). Werden die Sätze damit ausdrücklich freigegeben (Ja/Nein, je Satz)?
9. **P4-F-9 · Wortstellung im Suizid-Absatz.** `verstehen` › `mythen`: «Bleiben Sie nur bei der Person, soweit dies für Sie sicher möglich ist.» Man kann «nur bei der Person» lesen. Soll es heissen «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.»? Die Bedeutung bleibt gleich (Entscheid F-W1-02 «mit nur»). Ja/Nein.
10. **P4-F-10 · Vorhersage aus der Diagnose.** `erleben`: «Das ist nicht bei allen Menschen mit Borderline so.» Soll «und lässt sich aus der Diagnose nicht vorhersagen» (v17) wieder dazu (Ja/Nein)?
11. **P4-F-11 · Grenze ohne Zustimmung.** Soll «Eine Grenze gilt auch ohne Zustimmung der anderen Person» (g627) auf `grenzen` › `konsequenz` stehen (Ja/Nein)?
12. **P4-F-12 · «nur noch».** `anspannung`: «… zählt für einen Menschen oft nur noch der Schmerz oder Streit im Moment.» Bestand: «verengt sich das Erleben häufig stark auf …». Bleibt «nur noch» (Ja/Nein)?
13. **P4-F-13 · Grenzen des Eisberg-Bildes.** Vertiefung: «Der Eisberg ist ein Bild dafür, was man von aussen sieht …». Soll (a) der Wortlaut bleiben, oder (b) der Bestandssatz stehen: «Das Eisberg-Bild ist eine mögliche Verständnishilfe, keine Aussage darüber, was in einer konkreten Person sicher «darunterliegt».»?
14. **P4-F-14 · Eisberg schmal.** Unter 800 px steht die Zeichnung ohne Wörter, darunter die Listen «Sichtbar» und «Darunter möglich». Das widerspricht Prüfpunkt 16 («keine Liste, die Bildteile übersetzt»), entspricht aber dem Auftrag 1H. Bleibt es so (Ja/Nein)?
15. **P4-F-15 · Frage doppelt.** «Wie ist es gerade für dich?» steht in `eisberg` im Text und wenige Zeilen später in Abbildung 1. Soll sie (a) an beiden Stellen bleiben, oder (b) nur in der Abbildung stehen?
16. **P4-F-16 · Quellenzuordnungen** (F-W1-11). Tragen die Quellenzeilen die genannten Aussagen? Betroffen sind die Ursachen (`borderline`), Fruzzetti und Gunderson auf `beziehungen` und die sechs Bezugspunkte der Anspannungskurve. Je Ja/Nein.
17. **P4-F-17 · «wird» in der Schleife** (F-V-05). Soll «Was die Schwester tut, wird zum neuen Ereignis.» bleiben oder «kann zum neuen Ereignis werden» heissen?
18. **P4-F-18 · Planbegründung `v-bz-was-hilft`** (F-W2-02). Bleibt der Abschnitt Text, oder sollen die drei Unterbrechungsstellen in Abbildung 1 markiert werden?
19. **P4-F-19 · Ort der Beratung** (F-W2-03). Soll «vor Ort» einen Ort nennen (Ja/Nein; wenn Ja, welchen)?
20. **P4-F-20 · Eigene Anspannung als zweite Linie** (BS-5, zweiter Teil). Ja/Nein.
21. **P4-F-21 · Fachliche Freigaben.** Offen sind die sechs Visualisierungen (`approvalStatus` «ausstehend») und zwölf Platzhalter.

#### Befunde W1

- **P4-W1-1 · wichtig · «Das geschieht ohne Absicht.»**
  - **Beleg:** A1 Nr. 20.
  - **Vorschlag:** Den Satz wie im Bestand als Aussage über das Bild fassen, nicht über die Person.
  - **Zuständig:** Fachstelle (P4-F-1).
- **P4-W1-2 · wichtig · Ursache und Angehörige.**
  - **Beleg:** A1 Nr. 14, 16, 18.
  - **Vorschlag:** Die drei Stellen in ein Verhältnis setzen.
  - **Zuständig:** Fachstelle (P4-F-2).
- **P4-W1-3 · wichtig · Neue Sätze in «Momentaufnahmen».**
  - **Beleg:** A3.
  - **Zuständig:** Fachstelle (P4-F-4).
- **P4-W1-4 · wichtig · Kürzungen für den Richtwert ohne Grundlage.**
  - **Beleg:** A2 b39, b162, b163; 24 Zeilen «Prüfbedarf» im Abgleich.
  - **Zuständig:** Fachstelle (P4-F-6), danach die bauende Sitzung.
- **P4-W1-5 · optional · Stelle 4 neu.**
  - **Beleg:** A1 Nr. 29.
  - **Zuständig:** Fachstelle (P4-F-7).
- **P4-W1-6 · optional · «nur noch».**
  - **Beleg:** A1 Nr. 13.
  - **Zuständig:** Fachstelle (P4-F-12).
- **P4-W1-7 · optional · «gilt auch ohne Zustimmung» fehlt.**
  - **Beleg:** A1 Nr. 21.
  - **Zuständig:** Fachstelle (P4-F-11).
- **P4-W1-8 · optional · Vertiefung Eisberg.**
  - **Beleg:** A1 Nr. 26.
  - **Zuständig:** Fachstelle (P4-F-13).
- **P4-W1-9 · optional · Abgleich ungenau.**
  - **Beleg:**
    - Bei v371 und v390 nennt die Bemerkung die entfallenen Teile nicht.
    - g208 steht auf «entfällt», ist laut Bemerkung aber vorgemerkt; das wäre «verschoben».
    - v138 und v146 nennen eine «Vertiefung «Quellen»», die es nicht mehr gibt.
    - «Du bist wie alle anderen.» ist ohne Bestandszeile geführt.
  - **Vorschlag:** Die Bemerkungen nachführen; den Satz auf `wenn-worte-treffen.md` beziehen.
  - **Zuständig:** bauende Sitzung.

### Teil B · W2 Gesamtkohärenz

**Begriffe** (Zählung im sichtbaren Text von `main`, je `index` / `verstehen` / `beziehungen` / `grenzen`):

- **Anspannung:** einheitlich (1 / 18 / 2 / 1). «Stress» kommt nur im Quellentitel «WHO, Stress: Questions and answers» vor. «Alarm» und «Überflutung» kommen nicht vor. F-W2-01 ist erledigt.
- **Grenze:** einheitlich.
- **Betroffene Person:** Die Rolle heisst je nach Stelle «betroffene Person» (Schleife, Zwei Sichten), «die andere Person» (`verstehen` Abbildung 2, `grenzen`) oder «die Person». Wo Lesende direkt angesprochen werden, ist «die andere Person» verständlich. Kein Befund.
- **Pause:** zwei Bedeutungen, siehe P4-W2-2.

**Widersprüche:** einer, P4-W2-1. Schutz vor Gespräch ist überall gleich formuliert: «Bei Gefahr hat Schutz Vorrang.» (`verstehen`) und «Bei Bedrohung oder Gewalt geht Schutz vor jedem Gespräch» (`grenzen`).

**Wiederholungen:**

- Die Frage «Wie ist es gerade für dich?» steht zweimal im selben Abschnitt (P4-W2-3).
- Den Beratungsabsatz gibt es nur auf `index`; die anderen Seiten verlinken ihn (`index.html#beratung`, zweimal). W2-4 der ersten Runde ist erledigt.

**Wegweiser und Navigation:**

- Die Hauptnavigation «Verstehen · Beziehungen · Grenzen» ist auf allen vier Seiten gleich, mit `aria-current`.
- Jede Inhaltsseite hat einen Wegweiser «Auf dieser Seite»; alle Anker existieren.
- Die drei Einstiege auf `index` passen zu den Seiten.

**Verweise zwischen den Seiten:** Alle Ziele und Anker existieren.

- `verstehen` verweist auf `beziehungen` und `grenzen`.
- `beziehungen` verweist auf `verstehen#anspannung`, `verstehen#bewertungen`, `grenzen#gewalt` und `index#beratung`.
- `grenzen` verweist nur auf `index#beratung` (P4-W2-4).

**Entwurfsseiten:**

- Keine der 12 Entwurfsseiten (einschliesslich `gate.html`) ist von den vier Seiten aus verlinkt; geprüft wurden alle `a[href]`.
- Sie haben kein `noindex`. `tools/export.mjs` exportiert laut Code aber nur Seiten mit `status: "published"`; im Arbeitsordner sind sie nur über die direkte Adresse erreichbar. Kein Befund für diese Etappe; für W3 vormerken.
- Der Platzhalter auf `index` («Entwurf · Platzhalter Weitere Einstiege folgen …») ist sichtbar als Entwurf markiert. Das Produktionsgate blockiert ihn.

**Befunde W2**

- **P4-W2-1 · wichtig · Verantwortung für den Verlauf.**
  - **Beleg:** `beziehungen` › `verantwortung`: «nicht allein verantwortlich für den Verlauf oder die Beziehung». Dagegen `index` › `haltung`: «Sie sind nicht für die Genesung eines anderen Menschen verantwortlich.» und `verstehen` › Annahme 3.
  - **Vorschlag:** Die Fachstelle entscheidet über die Abgrenzung von Krankheitsverlauf und Beziehung.
  - **Zuständig:** Fachstelle (P4-F-3).
- **P4-W2-2 · optional · «Pause» in zwei Bedeutungen.**
  - **Beleg:** Gesprächspause (`verstehen` Abbildung 2; `grenzen` › `konsequenz` «eine Pause») neben Kontaktpause (`grenzen` › `kontakt` «eine vereinbarte Pause», `index` «Kontaktpausen»). Mehrdeutig ist `grenzen` › `bruecke`: «Absprachen, Pausen, …».
  - **Vorschlag:** Wo beides gemeint sein kann, «Gesprächspause» oder «Kontaktpause» schreiben.
  - **Zuständig:** bauende Sitzung, nach Freigabe des Wortlauts.
- **P4-W2-3 · optional · Frage doppelt.**
  - **Beleg:** `verstehen` › `eisberg`, Abschnittstext und Abbildung 1.
  - **Zuständig:** Fachstelle (P4-F-15).
- **P4-W2-4 · optional · `grenzen` ohne Rückverweis.**
  - **Beleg:** `grenzen` nennt Pause, ruhige Situation und Anspannung (`dear`: «in einer ruhigen und sicheren Situation»), verweist aber nicht auf die Anspannungskurve oder die Schleife.
  - **Vorschlag:** Ein Verweissatz, etwa bei `dear` auf `verstehen#anspannung`.
  - **Zuständig:** bauende Sitzung.

### Teil C · S Sprach-Review

**Zählweise (eigenes Skript der Prüfsitzung, im Browser):**

- **Text:** sichtbarer Text der Abschnitte in `main`, Vertiefungen geöffnet. Ohne SVG, ohne `.puk-sr` und ohne die nur schmal sichtbare Rücksprungzeile.
- **Blöcke und Sätze:** je Blockelement (`p`, `li`, `dt`, `dd`, `h1`–`h3`, `summary`) zerlegt, mit derselben Satzregel wie `abgleich/verneinung.mjs`.
- **Verneinung:** Satz mit «nicht», «nichts», «nie», «niemals», «niemand», «weder» oder einer Form von «kein». In Klammern die enge Zählung ohne «nie», «niemals», «niemand».
- **Satzlänge:** nur Fliesstext (`p`, `li`, `dd`). Ohne Bezeichnungen und Kicker, ohne Quellenzeilen, ohne Beispielsätze in `.puk-say` und ohne Beschriftungen in Figuren; Kernaussage, Kurztext, Ansatzpunkt, Vertiefung und Liste der Kurve zählen mit. Wörter wie in `kennzahlen.mjs`.
- **Handlungsteil:**
  - eng: Der Abschnitt hat «Was Sie tun können» oder einen Ansatzpunkt für Angehörige.
  - weit: dazu ein Beispielsatz zum Sagen, «Was hilft» oder nummerierte Handlungsschritte im Imperativ, von Hand bestimmt.

| Seite | Sätze | mit Verneinung | Anteil | Fliesstext-Sätze | mittlere Satzlänge (Median) | Sätze > 25 Wörter | Abschnitte mit Handlungsteil eng / weit |
| --- | ---: | ---: | ---: | ---: | --- | ---: | --- |
| `index` | 24 | 3 (3) | 13 % | 16 | 11,7 (11) Wörter | 1 | 0 von 3 / 2 von 3 (`einstiege`, `beratung`) |
| `verstehen` | 175 | 37 (37) | 21 % | 111 | 11,2 (10) | 1 | 4 von 7 / 5 von 7 (ohne `borderline`, `einordnung`) |
| `beziehungen` | 162 | 33 (32) | 20 % | 104 | 11,1 (11) | 2 | 5 von 6 / 6 von 6 |
| `grenzen` | 184 | 42 (41) | 23 % | 116 | 9,8 (9) | 0 | 4 von 10 / 9 von 10 (ohne `rollen`) |

**Abweichung zur Zählung der bauenden Sitzung:** Die Zahl der Sätze mit Verneinung ist gleich (37 / 33 / 42). Die Gesamtzahl der Sätze ist kleiner (175 statt 183, 162 statt 169, 184 statt 195), weil hier `figcaption` und die schmale Rücksprungzeile nicht zählen.

**Abschnitte mit hohem Verneinungsanteil:**

- `verstehen` › `einordnung`: 5 von 11
- `beziehungen` › `verantwortung`: 8 von 20
- `grenzen` › `konsequenz`: 7 von 15

Es sind überwiegend entlastende Sätze («… ist kein Versagen», «… heisst nicht, dass Sie etwas falsch gemacht haben»). Kein Befund; nur ein Hinweis für S nach W1.

**Sätze über 25 Wörter:**

- `index` › `beratung` (30 Wörter): «Die Fachstelle Angehörigenarbeit der PUK berät alle Angehörigen – …, auch wenn die betroffene Person nicht in der PUK behandelt wird und ohne ihre Vollmacht.»
- `verstehen` › `borderline` (28): «Die Diagnose Borderline-Persönlichkeitsstörung kann unter anderem beschreiben: …»
- `beziehungen` › Abbildung 1, Ansatzpunkt (27, mit Bezeichnung) und `zwei-sichten` (26, mit «Was Sie tun können:»): ohne die Bezeichnung unter 25 Wörtern.

**Rechtschreibung:** kein «ß», keine „…“ (`grep` in den vier gebauten Seiten: 0). Der Build meldet keinen Hinweis zu Anführungszeichen.

**Lesetest je Abschnitt** (Prüfperson: erschöpfte Mutter oder Partner, abends, Handy, 360 px).

- a = beim ersten Lesen verstanden; b = weiss danach, was ich tun kann.
- d (Ton) ist überall warm, erwachsen und ohne Schuldzuweisung, ausser wo vermerkt.
- e (Absicherungen) steht nur, wo es einen Befund gibt.

| Seite | Abschnitt | a | b | Stolperstellen (c) und e | Priorität |
| --- | --- | --- | --- | --- | --- |
| `index` | Kopf, `haltung` | ja | teils | – | – |
| `index` | `einstiege` | ja | ja | Platzhalter «Entwurf · Platzhalter Weitere Einstiege folgen …» sichtbar | (Gate) |
| `index` | `beratung` | ja | ja (E-Mail) | Satz mit 30 Wörtern (P4-S-6); «vor Ort» ohne Ort (P4-F-19) | optional |
| `verstehen` | Kopf | ja | – | «… eine Krise nicht als persönliches Versagen»: wessen Versagen, bleibt offen (so im Bestand) | – |
| `verstehen` | `erleben` | ja | ja | «Das ist nicht bei allen Menschen mit Borderline so.»: Bezug von «Das» unklar (P4-S-1); e: P4-F-10 | optional |
| `verstehen` | `borderline` | mit Mühe | nein | 28 Wörter mit Doppelpunkt-Aufzählung; «innere Stabilität» abstrakt; Handlungsteil fehlt, für eine Begriffsklärung vertretbar | optional |
| `verstehen` | `eisberg` | ja | ja | Frage zweimal (P4-W2-3) | optional |
| `verstehen` | `anspannung` | ja | ja | Liste bei 360 px sehr lang (3282 px); e: «nur noch» (P4-F-12), Stelle 4 (P4-F-7) | optional |
| `verstehen` | `bewertungen` | ja | ja | wer spricht in Abbildung 3? (P4-F-4); e: «Das geschieht ohne Absicht.» (P4-F-1) | wichtig |
| `verstehen` | `mythen` | ja | teils (Annahme 2, Suizid) | «komplexe PTBS» nicht erklärt; «Bleiben Sie nur bei der Person …» (P4-S-2) | optional |
| `verstehen` | `einordnung` | ja | nein (Verweis) | 5 von 11 Sätzen verneint | – |
| `beziehungen` | `verbindung` | ja | ja | Liste mischt Stichwörter mit einem ganzen Satz (P4-S-4) | optional |
| `beziehungen` | `schleife` | ja | ja | Ansatzpunkt mit 6 Sätzen auf dem Handy lang | – |
| `beziehungen` | `verstaerker` | mit Mühe | ja | Titel «Spielraum zwischen Anlass und Reaktion» abstrakt; zweimal «Station 2» (R3-S-01); Links als Satzteile (P4-S-3) | optional |
| `beziehungen` | `zwei-sichten` | ja | ja | – | – |
| `beziehungen` | `was-hilft` | ja | ja | Listenpunkte im Infinitiv-Telegrammstil («eine Vermutung zuerst mit einer Frage prüfen») | optional |
| `beziehungen` | `verantwortung` | ja | ja | «nicht allein verantwortlich für den Verlauf» (P4-W2-1); Link als Satzteil | wichtig |
| `grenzen` | Kopf | ja | ja | Link «Wenn Gewalt oder Bedrohung vorkommt» als Satzteil (P4-S-3) | optional |
| `grenzen` | `erkennen`, `arten`, `kontakt` | ja | ja | – | – |
| `grenzen` | `bruecke` | ja | ja | «Sie zeigen, was geht und was nicht.»: «Sie» nach dem Doppelpunkt, Grenzen oder Anrede? (P4-S-5) | optional |
| `grenzen` | `reihenfolge` | mit Mühe | ja | «emotional niedriger» (Punkt 2) neben «emotional niedrig» (Punkt 4) (P4-S-6) | optional |
| `grenzen` | `dear` | ja | ja | «R · Verstärken»: Buchstabe aus dem englischen Kürzel, sichtbar nicht erklärt (P4-V-5) | optional |
| `grenzen` | `saetze`, `konsequenz` | ja | ja | – | – |
| `grenzen` | `rollen` | ja | nein | für Rollenbeschreibung vertretbar | – |
| `grenzen` | `gewalt` | ja | ja | klar und direkt; Verweis im Text an der richtigen Stelle | – |

**Befunde S**

- **P4-S-1 · optional · Bezug von «Das».**
  - **Beleg:** `verstehen` › `erleben`, Satz 3.
  - **Vorschlag:** Subjekt nennen, etwa «Solche Erfahrungen machen nicht alle Angehörigen von Menschen mit Borderline.» Die Bedeutung bleibt; den Rest regelt P4-F-10.
  - **Zuständig:** Fachstelle.
- **P4-S-2 · optional · «Bleiben Sie nur bei der Person, …».**
  - **Beleg:** `verstehen` › `mythen`.
  - **Vorschlag:** Wortstellung nach P4-F-9.
  - **Zuständig:** Fachstelle, weil es ein Sicherheitstext ist.
- **P4-S-3 · optional · Links als Satzteile.**
  - **Beleg:**
    - `beziehungen` › `verstaerker`: «Mehr dazu auf der Seite «Verstehen»: Wenn die Anspannung steigt und Wenn Bewertungen einseitiger werden.» Das liest sich wie ein Nebensatz.
    - `grenzen` › Kopf: «…: Wenn Gewalt oder Bedrohung vorkommt.»
    - `beziehungen` › `verantwortung`.
  - **Vorschlag:** Den Abschnittstitel als Titel kenntlich machen, etwa «im Abschnitt «Wenn die Anspannung steigt»».
  - **Zuständig:** bauende Sitzung.
- **P4-S-4 · optional · Liste in `verbindung`.**
  - **Beleg:** Drei Stichwörter und ein ganzer Satz unter «Was eine Beziehung tragen kann:».
  - **Vorschlag:** Den vierten Punkt als Stichwort fassen, etwa «dass beide zu Nähe, Klärung und Veränderung beitragen können».
  - **Zuständig:** bauende Sitzung nach Freigabe.
- **P4-S-5 · optional · «Sie zeigen …» nach Doppelpunkt.**
  - **Beleg:** `grenzen` › `bruecke`.
  - **Vorschlag:** «Grenzen können Kontakt auf ähnliche Weise schützen, denn sie zeigen, was geht und was nicht.»
  - **Zuständig:** bauende Sitzung.
- **P4-S-6 · optional · Einzelstellen.**
  - **Beleg:** «emotional niedriger» / «emotional niedrig» (`reihenfolge`); Satz mit 30 Wörtern in `index` › `beratung`.
  - **Vorschlag:** Einheitlich «emotional niedriger»; den Beratungssatz nach der Aufzählung teilen.
  - **Zuständig:** bauende Sitzung (Beratungstext: Wortlaut der Fachstelle, deshalb Fachstelle).

### Teil D · Visualisierungs-Check je Figur

Bildschirmfotos aller sechs Figuren bei 1280 und 360 px, im Theme Standard und «kontrast», angesehen. Die Figurhöhen bei 1280 / 360 px:

| Figur | 1280 px | 360 px |
| --- | ---: | ---: |
| Eisberg | 830 | 1071 |
| Kurve | 1773 | 3282 |
| Momentaufnahmen | 827 | 848 |
| Schleife | 1266 | 1920 |
| Zwei Sichten | 1106 | 2359 |
| DEAR | 854 | 1791 |

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar.

| Nr. | Prüfpunkt | Eisberg | Kurve | Momentaufnahmen | Schleife | Zwei Sichten | DEAR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | E | **T** | **T** | E | E | E |
| 2 | Zeile je Abschnitt; Begründungen passen | E | E | E | T | E | E |
| 3 | Prüffrage beantwortet und eingelöst | E | E | E | E | E | E |
| 4 | Kernaussage und Erklärtext | E | E | E | E | E | E |
| 5 | Ansatzpunkt (B, C, G) | – | E | – | E | – | E |
| 6 | Mechanismus nicht doppelt | E | E | E | T | E | E |
| 7 | Kartenraster-Check | E | E | E | E | E | E |
| 8 | Form und Linien tragen Bedeutung | E | E | **T** | E | **T** | T |
| 9 | Verteilt, keine Textwand | E | T | E | E | E | E |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | E | **T** | **T** | E | E | E |
| 11 | Ohne Aufklappen und Skript verständlich | E | E | E | E | E | E |
| 12 | 320 px lesbar; Textalternative | E | E | E | E | E | E |
| 13 | Theme «Hoher Kontrast» | E | E | E | E | E | E |
| 14 | Fachlich freigegeben | N | N | N | N | N | N |
| 15 | Bildsprache passt; Wirkung eingelöst | E | E | **T** | T | E | T |
| 16 | Metapher ohne Code | T | E | E | – | – | T |
| 17 | Keine ungewollten Bedeutungen | T | E | E | E | E | E |

**Abweichungen von der Selbstprüfung** (fett): Punkt 1 bei Kurve und Momentaufnahmen, Punkt 8 bei Momentaufnahmen und Zwei Sichten, Punkt 10 bei Kurve und Momentaufnahmen, Punkt 15 bei Momentaufnahmen. Bei Punkt 16 sind Schleife und Zwei Sichten Modelle, keine Metaphern («–» statt «E»).

**Belege je T und N**

- **Eisberg:**
  - **16 T:** Bei 360 px ist die Zeichnung 278 × 146 px gross und ohne Wörter. Darunter übersetzen die Listen «Sichtbar» und «Darunter möglich» die Bildteile oben und unten (Bildschirmfoto 360). Das entspricht dem Auftrag 1H (P4-F-14).
  - **17 T:** Kälte und Gefahr bleiben im Motiv; die Fachstelle hat das Motiv am 10.10.2026 bestätigt.
  - **14 N:** `approvalStatus` «ausstehend».
- **Kurve:**
  - **1 T:** `visualPlan` › `v-vs-anspannung` › `statement` nennt «4 «Später»». Auf der Seite steht «Es wird wieder ruhiger.» (P4-V-1).
  - **9 T:** 3282 px hoch bei 360 px. Die Liste ist eingerückt; der Text steht in 21 px in einer schmalen Spalte (Bildschirmfoto 360, Teil 1).
  - **10 T:** Stelle 4 «Es wird wieder ruhiger.» ist kategorisch, der Kurztext sagt «kann … wieder sinken» (P4-F-7).
- **Momentaufnahmen:**
  - **1 T:** Der Plan ist teilweise vom Pendel übrig geblieben:
    - `goal`: «… weiter ausschlagen und zurückschwingen können»
    - `source`: «Eigene didaktische Pendel-Darstellung …» (P4-V-1)
  - **8 T:** Das «sehr dunkle» Foto ist hellblau gefüllt, mit weisser Wolke. Hell und dunkel unterscheiden sich vor allem durch Sonne und Wolke, kaum durch die Helligkeit (Bildschirmfoto 1280; P4-V-2).
  - **10 T:** Die Sätze engen die Aussage auf Bewertungen der Angehörigen ein; wer spricht, steht nirgends (P4-F-4).
  - **15 T:** Die Wirkung «Ein harter Satz in einem schwierigen Moment ist nicht unser ganzes Album» trägt nur, wenn klar ist, dass die betroffene Person zur angehörigen Person spricht.
- **Schleife:**
  - **2 T, 6 T:** F-W2-02 (P4-F-18): Liste «an mehreren Stellen unterbrechen» neben der Figur.
  - **15 T:** fünf Rechtecke mit Pfeilen, wirkt wie ein Ablaufschema. `radius-md` (4 px) ist bei 1280 px kaum als weiche Ecke sichtbar (Bildschirmfoto; P4-V-4).
- **Zwei Sichten:**
  - **8 T:** Beide Sichten haben dieselbe Kastenform und Oberkante. Der Unterschied steht nur in Lage und grauer Bezeichnung. Bei 360 px stehen acht gleiche Kästen untereinander (2359 px), der Vergleich ist nur über die Bezeichnung lesbar. Optional, weil die Bezeichnung trägt.
- **DEAR:**
  - **8 T, 15 T:** vier gefüllte Punkte auf einer Linie (P-6), wie eine Schrittanzeige. Die Ziffern «1» bis «4» stehen klein (13 px) unter den Punkten statt in ihnen (Bildschirmfoto 1280).
  - **16 T:** «R · Verstärken» und «A · Anliegen nennen»: Die Buchstaben stammen aus dem englischen DEAR. Die Herkunft steht nur in der Vertiefung (P4-V-5).

**B1–B6 nur für Figuren, die sich seit dem Bildsprache-Audit geändert haben**

| Figur | B1 erster Eindruck | B2 Erleben der Angehörigen | B3 Wirkung eingelöst | B4 Ton | B5 Bild nötig? | B6 Freundin-Test |
| --- | --- | --- | --- | --- | --- | --- |
| Eisberg (neu) | ruhig, weich; der Unterteil wirkt eher wie ein Tropfen als wie Eis | ja, über die Frage «Wie ist es gerade für dich?»; sie steht ohne Person rechts oben | breit ja; schmal nur über die Listen | würdevoll | ja (Sichtbar/Verborgen als Raum) | eher ja, breit |
| Kurve, Stelle 4 | ruhig, nachvollziehbar | ja, Sätze aus dem Erleben | ja | warm | ja | ja |
| Momentaufnahmen (neu) | freundlich, alltagsnah, ruhig | ja: Sätze, die Angehörige hören; Sprecher offen | teilweise (siehe 15) | warm, nicht verniedlichend | ja | ja, wenn klar ist, wer spricht |
| Schleife (drei Zeilen, 4-px-Radius) | geordnet, wie ein Ablaufschema | ja, «Schwester» oben in Lesegrösse | ja | sachlich | ja | eher ja |
| Zwei Sichten (gleiche Oberkante) | ruhig, gleichwertig | ja, stärkste Sätze der Website | ja | warm | ja | ja |
| DEAR (Nummern) | ordentlich, belehrend; weiter Schrittanzeige | Beispielsätze alltagsnah | ja | sachlich | knapp; eine nummerierte Liste trüge gleich | eher nein |

**Befunde Visualisierungs-Check**

- **P4-V-1 · wichtig · Visualisierungsplan veraltet.**
  - **Beleg:**
    - `site.config.json` › `v-vs-anspannung` › `statement`: «4 «Später»».
    - `v-vs-bewertungen` › `goal`: «weiter ausschlagen und zurückschwingen».
    - `v-vs-bewertungen` › `source`: «Eigene didaktische Pendel-Darstellung».
    - Die Selbstprüfung setzt bei Punkt 1 überall E.
  - **Gewicht:** Die fachliche Freigabe der Fachstelle bezieht sich auf die Planzeile.
  - **Vorschlag:** Die drei Felder an die Seite angleichen, ohne Inhalt zu ändern.
  - **Zuständig:** bauende Sitzung.
- **P4-V-2 · optional · «sehr dunkel» nicht sichtbar.**
  - **Beleg:** Momentaufnahmen, rechtes Foto in `puk-blue-25`.
  - **Vorschlag:** Das dunkle Foto mit der einen erlaubten Akzentfläche (`__accent`) zeichnen.
  - **Zuständig:** Fachstelle (Skizze freigegeben), danach die bauende Sitzung.
- **P4-V-3 · optional · Eisberg schmal.**
  - **Beleg:** Punkt 16.
  - **Zuständig:** Fachstelle (P4-F-14).
- **P4-V-4 · optional · Ecken der Schleife.**
  - **Beleg:** `radius-md` mit 4 px wirkt eckig; BS-4 Variante B wollte «weiche Ecken».
  - **Vorschlag:** einen grösseren Radius-Token des Profils, falls vorhanden; sonst Profilthema.
  - **Zuständig:** bauende Sitzung oder Profil.
- **P4-V-5 · optional · DEAR.**
  - **Beleg:** Ziffern unter den Punkten; englische Kürzel ohne sichtbare Erklärung.
  - **Vorschlag:** die Ziffer im Punkt; im Kurztext ein Satz, woher die Buchstaben kommen (Wortlaut aus der Vertiefung).
  - **Zuständig:** bauende Sitzung, Fachstelle für den Wortlaut.
- **P4-V-6 · optional · Schrifthierarchie und Länge der Kurve** (R3-V-04 weiter offen).
  - **Beleg:** Listentext 21 px, Kurztext etwa 15 px; 3282 px bei 360 px.
  - **Vorschlag:** schmal ohne Einzug; Hierarchie im Profil klären.
  - **Zuständig:** Profil, bauende Sitzung.

### Teil E · Bedienung und Barrierefreiheit (automatisiert)

Chromium über Playwright, lokal. Alle Werte sind selbst gemessen.

- **Überlauf** (`scrollWidth − innerWidth`): 0 px auf allen vier Seiten.
  - Breiten: 320, 360, 768, 1280 und 1440 px.
  - 200 %: 640 px Breite bei Faktor 2 und 1280 px mit Schriftgrösse 200 %.
  - Theme «kontrast»: bei 360 und 1280 px.
  - Kein `overflow-x:hidden` auf `html` oder `body`, das einen Überlauf verstecken könnte.
- **Tastatur** (1280 px):
  - Tabstopps bis zur Fusszeile: 10 / 18 / 16 / 20.
  - Fokus sichtbar bei allen Stopps (`box-shadow`, 2 px weiss und 4 px Blau).
  - Reihenfolge gleich der DOM-Reihenfolge; erster Stopp «Zum Hauptinhalt».
  - Alle vier Vertiefungen per Tab erreichbar. Enter und Leertaste öffnen und schliessen.
  - Die Fusszeile hat keinen fokussierbaren Link (Profilthema B-4 der ersten Runde, kein neuer Befund).
- **Kontrast** (WCAG 1.4.3):
  - **Umfang:** aller sichtbare Text in `main`, mit geöffneten Vertiefungen, je Seite bei 1280 und 360 px und in beiden Themes. Bei Text über SVG zählt die Füllung der Form unter dem Text.
  - **Ergebnis:** kein Wert unter 4,5:1.
  - **Tiefster Wert Standard:** 4,71:1 (Kicker, 14 px, Blau auf Weiss).
  - **Tiefster Wert «kontrast»:** 7,65:1.
  - Einzelwerte:

  | Text | Hintergrund | Standard | «kontrast» |
  | --- | --- | ---: | ---: |
  | Eisberg, alle zehn Wörter einschliesslich «… oder ganz andere Erfahrungen», 1280 px | weisse Eisbergfläche (an allen fünf Messpunkten je Wort; kein Wort liegt auf dem Hellblau) | 15,91 | 15,91 |
  | dieselben Wörter, 360 px (als Liste) | #F7F7F7 | 14,85 | 14,85 |
  | Frage «Wie ist es gerade für dich?» | #F7F7F7 | 14,85 | 14,85 |
  | Sätze der Szene «Momentaufnahmen» | Weiss | 15,91 | 15,91 |
  | Beschriftungen der Kurve | – | 14,85 | 14,85 |
  | Stationstexte der Schleife | – | 15,91 | 15,91 |
  | `summary` | – | 5,94 bzw. 6,37 | 11,84 bzw. 12,68 |
  | «Beispiel» (`.puk-say__label`) | – | 5,52 | 7,65 |
  | Bezeichnungen der Zwei Sichten | – | 5,92 | 8,19 |

  Hellblau unter Text (#D8E0FF) wäre rechnerisch etwa 12:1, kommt aber nicht vor.
- **Eisberg-Geometrie:**
  - Bei 1440, 1280, 1024 und 900 px liegen alle vier Ecken jedes Worts in der Eisbergform (`isPointInFill`).
  - Die Zonen stimmen: die oberen Wörter über der Wasserlinie, die unteren darunter. Kleinster Abstand zur Wasserlinie: 20 Einheiten («Lautwerden», «Rückzug»).
- **Pfeile der Schleife:** Die Spitzen enden 8,3 bis 35,3 px vor dem Zielkasten (1440, 1280, 768 px). R3-V-01 ist erledigt.
- **Reduzierte Bewegung:** keine CSS-Animation. Beim Laden entstehen nur Übergänge von 0,01 ms aus der globalen Regel in `bundle.css`; nicht wahrnehmbar, kein Befund.
- **Theme «kontrast»:** Linien und Punkte werden dunkelblau, Text bleibt lesbar (Bildschirmfotos aller sechs Figuren). Keine festen Farben in SVG (Teil F).
- **Nicht prüfbar:**
  - reale Screenreader-Läufe (z. B. VoiceOver mit Safari, NVDA mit Firefox), Hardwaretastatur und Touch: Sie brauchen eine Person (Stufe 5). Sie sind **nicht** bestanden, sondern offen.
  - Kontrast von Fokusringen und Nicht-Text-Elementen (WCAG 1.4.11): nicht gemessen.

### Teil F · Technik und Zuständigkeit (Stichprobe)

| Prüfung | Ergebnis (selbst ausgeführt am Stand `f32c255`) |
| --- | --- |
| `node tools/build.mjs` | 15 Seiten, Build r4-7, Gate draft: **0 blockierend, 20 Hinweise**: 6 × `visual-approval`, 12 × `placeholder-approval`, 1 × `site-url`, 1 × `review-report`. `git status` danach ohne Änderung: Der Build verändert keine gebauten Dateien |
| `node tools/gate.mjs --selftest` | **53/53 bestanden** |
| `node tools/gate.mjs --production` | blockiert erwartungsgemäss mit **19 Befunden**: 6 × `visual-approval` (alle sechs Figuren), 12 × `placeholder-approval` (`index` › Einstiege und 11 Entwurfsseiten), 1 × `review-report` (offen: W1, W2, S, Visualisierungs-Check, Bedienung, W3, R1, R2, R3); dazu 1 Hinweis `site-url` |
| `node abgleich/pruefe-abgleich.mjs` | **1763 Zeilen, 0 ohne Fundstelle** |
| `node abgleich/kennzahlen.mjs` | Wörter 238 / 1602 / 1564 / 1601; Absicherungen je 100 Wörter 1,68 / 3,00 / 4,48 / 2,62; Semikolons 0 / 0 / 1 / 0 |
| `node abgleich/verneinung.mjs` | 3 von 24 / 37 von 183 / 33 von 169 / 42 von 195 |
| `abgleich/bedienung.mjs` | Tabstopps 10 / 18 / 16 / 20; Höhe bei 360 px 3863 / 16 071 / 15 199 / 16 500 px; höchste Figur Kurve 3282, Zwei Sichten 2359, DEAR 1791 px |

**Kennzahlen der bauenden Sitzung:** Nachgerechnet und **bestätigt**, ohne Abweichung:

- Wörter, Absicherungen und Semikolons
- Sätze mit Verneinung
- Tabstopps, Seitenhöhen und Figurhöhen bei 360 px (Eisberg 1071, Momentaufnahmen 848, Schleife 1920 px)
- Pfeilabstände («8 bis 35 px»)
- Selbsttest, Produktionsgate und Abgleich

R3-K-01 (Seitenhöhen nicht reproduzierbar) ist damit erledigt. Die eigene Satzzählung aus Teil C weicht nur in der Gesamtzahl der Sätze ab (Zählweise dort).

**Zuständigkeit und Krisenzugang** (alle 16 gebauten HTML-Dateien):

- `tel:`-Links: 0.
- Telefonnummern im sichtbaren Text: 0. Gesucht wurden Muster wie «0xx xxx xx xx», «+41», «0800» sowie 143, 144, 147, 117 und 112.
- Kein Notfallblock.
- **Verweis im Text:** je einmal auf `verstehen` (`mythen`, direkt nach «… fragen Sie ruhig und direkt, ob die Person Suizidgedanken oder einen Plan hat. Das kann helfen, die Lage zu verstehen.»), `beziehungen` (`verantwortung`, nach dem Satz zu Suizidgedanken und Selbstverletzung) und `grenzen` (`gewalt`, Schritt 2, nach «Bringen Sie sich in Sicherheit und holen Sie Hilfe.»).
  - Er steht nur über den Platzhalter `<p data-responsibility-inline></p>` in `content/`; gefüllt mit dem Wortlaut aus `responsibility.inline`.
  - Nie in `figure` oder `details`; höchstens einer je Abschnitt; nur auf Seiten mit `sensitiveTopics`.
  - Auf `index` und den Entwurfsseiten: 0.
- **Technik:**
  - `style`-Attribute: 0.
  - Hexwerte oder `rgb(` in SVG: 0.
  - `borderline.css` hat keine freien `2px` mehr; R3-B-01 ist erledigt.
- **Hinweis für W3:** Entwurfsseiten ohne `noindex`; der Export lässt sie laut `tools/export.mjs` weg.

### Bericht und Abgleich

- **P4-K-1 · Berichtigung · R3-K-02 war falsch.** Die dritte Runde meldete «`abgleich/kennzahlen.mjs` fehlt im Repository». Die Datei war vorhanden: angelegt mit Commit `242a74b`, dem Stand, den die dritte Runde geprüft hat. Die Prüfung hatte sie nicht geladen. Der Befund entfällt; der Text der dritten Runde bleibt unverändert.
- **Weitere Befunde früherer Runden:**
  - R3-K-03 ist erledigt: Die Zeilen Z. 277–396 stehen als Nr. 474–540 im Abgleich.
  - R3-K-05 ist teilweise erledigt; der Rest steht in P4-V-1.

### Zählung der Befunde der vierten Runde

| Stufe | kritisch | wichtig | optional |
| --- | ---: | ---: | ---: |
| W1 | 0 | 4 | 5 |
| W2 | 0 | 1 | 3 |
| S | 0 | 0 | 6 |
| Visualisierungs-Check | 0 | 1 | 5 |
| Bedienung und Barrierefreiheit | 0 | 0 | 0 |
| Technik und Zuständigkeit (Stichprobe) | 0 | 0 | 0 |

Dazu P4-K-1 (Berichtigung) und 21 Fragen an die Fachstelle (P4-F-1 bis P4-F-21).

**Gesamturteil:** Etappe 1 ist bereit, der Fachstelle zur fachlichen Durchsicht vorgelegt zu werden. Freigabereif ist sie noch nicht. Technik, Barrierefreiheit (automatisiert), Zuständigkeit und Kennzahlen sind ohne Befund. Vor der Freigabe muss die Fachstelle vier Fragen entscheiden: P4-F-1 bis P4-F-4. Ausserdem muss die bauende Sitzung den Visualisierungsplan angleichen (P4-V-1). Danach folgen S, die Screenreader-Läufe, W3 und R1 bis R3.

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
