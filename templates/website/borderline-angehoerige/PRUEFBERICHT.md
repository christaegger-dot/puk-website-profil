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
| W1 Fachliche Prüfung | offen | | | |
| W2 Gesamtkohärenz | offen | | | |
| S Sprach-Review | offen | | | |
| Visualisierungs-Check | offen | | | |
| Bedienung und Barrierefreiheit | offen | | | |
| W3 Code-Review | offen | | | |

## Selbstprüfung der bauenden Sitzung

Nach jedem Bau ohne Nachfrage ausfüllen: Visualisierungs-Check wie unten, mit Beleg je Punkt. Arbeitsstand, keine Prüfstufe.

**Stand 08.10.2026 · Etappe 1 · bauende Sitzung (Claude Code)**. Gebaut sind `index`, `verstehen`, `beziehungen` und `grenzen`; die übrigen 11 Seiten sind Entwürfe mit Platzhalter. Die Tabelle unten ist die Selbstprüfung, nicht die Stufe «Visualisierungs-Check»; deren Status bleibt «offen».

- `node tools/build.mjs`: 15 Seiten, 0 blockierend, 23 Hinweise (9 Visualisierungen und 12 Platzhalter nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen).
- `node tools/gate.mjs --selftest`: 46/46 bestanden.
- `node tools/gate.mjs --production`: blockiert erwartungsgemäss mit 22 Befunden (9 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`).
- Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5: kein horizontaler Überlauf bei 320, 360, 768 und 1440 px auf den vier Seiten. Tab-Durchlauf: Alle Fokusziele haben einen sichtbaren Fokus (index 10, verstehen 19, beziehungen 17, grenzen 22), und Enter öffnet eine Vertiefung. Mit reduzierter Bewegung bewegt sich ohne Bedienung nichts; nach dem Öffnen einer Vertiefung laufen zwei kurze Übergänge aus dem Profil-CSS, die nach weniger als 50 ms beendet sind. Theme `data-theme="kontrast"` ist bei vier Figuren gerendert. Ein Test mit Screenreader und Hardwaretastatur fehlt.
- Abgleich der Texte mit dem Bestand: `abgleich/` (je Seite, Wörtertabelle und Entscheide im Bau in `abgleich/README.md`).

## Visualisierungs-Check

| Nr. | Prüfpunkt | Ergebnis | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Visualisierungsplan liegt vor; die Seiten entsprechen ihm | erfüllt | `site.config.json` › `visualPlan`: eine Zeile pro Abschnitt auf allen 15 Seiten. Die 9 Figuren der Etappe 1 entsprechen dem Plan (UMBAUPLAN, Abschnitt 3): `v-vs-eisberg` K, `v-vs-anspannung` J, `v-vs-bewertungen` J, `v-vs-mythen` E, `v-bz-schleife` B, `v-bz-sichten` E, `v-gr-bruecke` A, `v-gr-arten` A, `v-gr-dear` C. Zwei Zeilen mit «im Bau prüfen» sind als Text entschieden: `v-gr-reihenfolge` (Raster) und `v-gr-kontakt` (Kontinuum), Begründung in der Planzeile. | W1/Visualisierungs-Check: die beiden Entscheide für Text bestätigen oder verwerfen |
| 2 | Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt | erfüllt | Kein Gate-Befund `plan-coverage`. Die Begründungen benennen den Inhalt, z. B. `v-bz-verstaerker`: «Die Einflüsse vertiefen Stationen derselben Schleife … eine zweite Grafik würde denselben Mechanismus doppeln»; `v-gr-gewalt`: «In einer möglichen Gefahrensituation braucht es kurze, direkte Hinweise ohne Grafik». | – |
| 3 | Prüffrage je Darstellung konkret beantwortet; die Darstellung zeigt, was die Antwort verspricht | teilweise | Konkret beantwortet und eingelöst, z. B. `v-bz-schleife` (Rückkopplung als geschlossene Schleife, 5 Bögen), `v-vs-mythen` (Paare auf gleicher Höhe, schmal hintereinander). Schwach bei `v-gr-arten`: Der geteilte Kreis zeigt Gleichwertigkeit und Überschneidung (gestrichelt), die eigentliche Information steckt aber in der Liste daneben. | Visualisierungs-Check: prüfen, ob `arten` als Figur trägt oder Text genügt |
| 4 | Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung | erfüllt | Alle 9 Figuren haben `p.puk-vis-kern` als ganzen Satz und `p.puk-vis-short`, z. B. `v-vs-anspannung`: «Bei hoher Anspannung können Worte schwerer ankommen. Sie dürfen eine Pause machen oder das Gespräch beenden.» Was Angehörige tun können, steht sichtbar: Ansatzpunkte in `v-bz-schleife` und `v-vs-anspannung`, die drei Schritte zu den Bewertungen im Abschnittstext `verstehen` › `bewertungen`. | – |
| 5 | Erklärmodelle (B, C, G): Ansatzpunkt für Angehörige markiert oder Verzicht begründet; keine Verantwortung für Behandlung oder Verlauf zugeschoben | erfüllt | `v-bz-schleife`: Station 2 «Bedeutung» als `li.is-ansatz` (doppelte Kontur) und `p.puk-vis-ansatz`, dazu in der Textfassung genannt. Zitat: «Ein Ansatzpunkt ist eine Möglichkeit, keine Pflicht, die Schleife allein zu unterbrechen.» `v-gr-dear`: entryPoint «entfällt: Der ganze Ablauf beschreibt das eigene Handeln der Angehörigen.» Muster G kommt nicht vor. | – |
| 6 | Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt | erfüllt | Vier Handouts zum selben Mechanismus sind in einer Figur verbunden (`v-vs-anspannung`). Schleife und Zwei Sichten nutzen dasselbe Beispiel (Absage der Schwester) für Mechanismus und Perspektiven. `beziehungen` › `verstaerker` verlinkt `verstehen.html#anspannung` und `#bewertungen`, statt sie zu wiederholen. | – |
| 7 | Kartenraster-Check: keine Reihe gleichartiger Karten, wo eine Anordnung erklären müsste | erfüllt | Keine `.puk-web-card-list` (kein Gate-Hinweis `card-grid`). Die 16 Felder in `v-vs-mythen` sind Paare: Links/rechts und gleiche Höhe tragen die Bedeutung «Annahme ↔ Einordnung», Linienart oben unterscheidet die Seiten. | Visualisierungs-Check: Wirkung der 16 Felder bei 1440 px ansehen |
| 8 | Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung, nicht nur die Wörter | teilweise | Bedeutung tragen: Pfeilrichtung und Rücksprung (`v-bz-schleife`), Linienstärke (`v-vs-anspannung` steigend; `v-vs-bewertungen` dick an beiden Polen), Linie ohne Verbindungen zwischen den Schichten (`v-vs-eisberg`), Linienart durchgezogen/gestrichelt (`v-bz-sichten`, `v-vs-mythen`), Reihenfolge und Nummer (`v-gr-dear`), Metapher (`v-gr-bruecke`). Wenig Bedeutung trägt die Form bei `v-gr-arten` (siehe Punkt 3). | wie Punkt 3 |
| 9 | Darstellungen über den Erkenntnisweg verteilt; keine unbegründete Textwand | teilweise | Die Figuren sind über den Erkenntnisweg verteilt: `verstehen` Abschnitte 03–06, `beziehungen` 02 und 04, `grenzen` 02, 03 und 05. Auf `grenzen` folgen danach fünf Textabschnitte (06–10, rund 1000 Wörter); jeder ist im Plan begründet (Formulierungen, Hinweise, Liste, Rollen, Schutz). `beziehungen` › `verstaerker` ist eine lange Liste mit acht Einträgen. | W2: Länge von `grenzen` 06–10 und `beziehungen` › `verstaerker` prüfen; Kürzungskandidaten in `abgleich/` |
| 10 | Vereinfacht, nicht verfälscht; Grenzen des Modells benannt; Quelle oder Kennzeichnung vorhanden | erfüllt (formal) | Jede Figur nennt die Grenzen des Modells in der Vertiefung, z. B. `v-vs-anspannung` «keine messbaren Zustände und kein Phasenmodell … Gefahr lässt sich aus der Lage auf der Achse nicht ableiten», `v-vs-eisberg` «keine Aussage darüber, was in einer bestimmten Person ‹darunterliegt›». Die Kennzeichnung in der Bildlegende ist «Eigene didaktische Darstellung» bzw. «Quelle: Linehan (2015)» (`v-gr-dear`). Ob die Vereinfachung fachlich stimmt, entscheidet W1. | W1 |
| 11 | Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich | erfüllt | Keine Seite lädt `interaktion.js`, kein `data-puk-*`, kein `data-vis-build`. Interaktiv sind nur native `details` mit Vertiefungen. Reiter, Auswahl-Schaltflächen und Akkordeons des Bestands sind sichtbare Darstellungen geworden (`abgleich/`). | – |
| 12 | Bei 320 px lesbar; Textalternative bzw. Langbeschreibung vollständig | erfüllt (technisch) | Bildschirmfotos bei 320 px: `v-bz-schleife` als Liste mit Linie und Text «Nach Station 5: zurück zu Station 1»; «Uhrzeigersinn» nur in `[data-cycle-wide]` (Gate). `v-vs-mythen` paarweise untereinander, Kontinua als Bereiche untereinander, kein horizontaler Überlauf. Jede Figur hat eine Textfassung über `aria-describedby` mit mindestens 40 Zeichen (Gate). | Stufe 5: Screenreader-Läufe mit den Textfassungen |
| 13 | Theme «Hoher Kontrast» geprüft (keine festen Farbwerte in SVG) | erfüllt (technisch) | In den SVG stehen keine festen Farbwerte (Suche nach Hexwerten in `content/` und `borderline.css` ohne Treffer), nur Token-Klassen (`puk-vis-ln`, `puk-vis-fill`, `puk-vis-mark`, `puk-vis-water`, `puk-vis-paper`). `data-theme="kontrast"` ist gerendert bei `v-bz-schleife`, `v-vs-mythen`, `v-vs-eisberg` und `v-gr-dear`: Linien und Text folgen dem Theme. | Stufe 5: alle Figuren im Kontrast-Theme ansehen |
| 14 | Inhalt fachlich freigegeben | nicht erfüllt | `approvalStatus` «ausstehend» bei allen 9 Figuren; W1 ist offen; das Produktionsgate blockiert 9 × `visual-approval`. | W1 durch die Fachstelle |

## Befunde je Stufe

### W1 Fachliche Prüfung

### W2 Gesamtkohärenz

### S Sprach-Review

### Bedienung und Barrierefreiheit

### W3 Code-Review
