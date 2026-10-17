# Bauauftrag · Borderline-Website, Etappe 2a · «Ihre Rolle» und «Auf sich achten»

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Etappe 1 ist fachlich freigegeben** (Korrektur 1j, Stand `67495c0`).
- **Etappe 2 kommt in drei Teilen** (Entscheid der Fachstelle, 10.10.2026):
  - **2a:** `rolle` und `selbstfuersorge`, die zwei Punkte, die in der Hauptnavigation noch fehlen (dieser Auftrag)
  - **2b:** `kommunizieren` und `krise`
  - **2c:** `diagnose`, `behandlung`, `genesung` und `unterstuetzung`
- **Entscheide der Fachstelle für 2a (10.10.2026):**
  - `rolle` bekommt die Abbildung «Ein Stück Weg» (Abschnitt 3).
  - `selbstfuersorge` bekommt die Abbildung «Ein freier Abend» (Abschnitt 4).
  - Kinder bekommen einen Abschnitt auf `rolle`, keine eigene Seite.
  - Die Fusszeile (`editorialStatus`) bleibt bis zur Veröffentlichung unverändert.
- **Geändert werden nur:** die Seiten `rolle` und `selbstfuersorge`, die Einstiege auf `index` (Abschnitt 5), `site.config.json` und der Abgleich. Die freigegebenen Seiten `verstehen`, `beziehungen` und `grenzen` bleiben unverändert. Die Navigation ergänzt sich von selbst.

## 2. Regeln aus Etappe 1

Etappe 1 brauchte zehn Korrekturen. Die meisten betrafen vier Dinge: zu schwere Sprache, gestrichene Absicherungen, neue Sätze ohne Grundlage und Bilder, die erst erklärt werden mussten. Diese Regeln gelten darum von Anfang an.

**Lies zuerst:**

- `guidelines/`: Sprache und Ton, Fachliche Qualität und Haltung, Visuelle Wissensvermittlung (vor allem «Ein Bild, eine Idee»), Visualisierung umsetzen, Barrierefreiheit, Technische Qualität
- `README.md`: «Zuständigkeit statt Krisenzugang» und «Verweis im Text»
- `UMBAUPLAN.md`, Abschnitt 5. Die Richtwerte für den Umfang in Abschnitt 2 gelten nicht mehr (seit Korrektur 1c).
- `PRUEFBERICHT.md`: «Vierte Prüfrunde» und «Bildsprache-Audit», vor allem die Tabelle «Geplante Figuren»
- `KORREKTUR-ETAPPE-1E.md`, `1F.md` und `1I.md` als Beispiele für Ton und Absicherungen

**Vorbild:** `beziehungen` und `grenzen` im Stand nach 1j, in Sprache, Aufbau und «Was Sie tun können».

### a) Sprache

- **Einfache Sprache** wie auf `beziehungen` und `grenzen`:
  - kurze Sätze, meist unter 15 Wörtern
  - ein Gedanke pro Satz
  - aktiv, mit «Sie», Verben statt Nominalstil
  - Fachwörter beim ersten Vorkommen erklären
- **«Was Sie tun können»:** Wo es passt, bekommt ein Abschnitt einen Absatz «Was Sie tun können:» mit Beispielsatz, in der Form aus 1E. Beispielsätze aus dem Bestand haben Vorrang.
- **Verneinungen:** Positiv formulieren, wenn die Bedeutung gleich bleibt.
- **Schreibweise:** Schweizer Hochdeutsch (ss, «»), kein Telegrammstil, klarer Bezug von «es» und «sie».
- **Meta-Texte entfallen:** «Worum es hier geht», «Das können Sie mitnehmen», Lesezeit, Schrittzähler, Prüfvermerke und Handout-Rahmen.

### b) Inhalt und Absicherungen

- **Nichts verschwindet still.** Jede fachliche Aussage des Bestands bleibt, oder ihr Wegfall steht mit Grund im Abgleich. Es gibt kein Kürzungsziel. Gekürzt werden nur Wiederholungen und Meta-Texte.
- **Absicherungen bleiben wie im Bestand**, wo es um Folgendes geht: die betroffene Person, Ursachen, Diagnose, Verlauf, Schutz und die Wirkung von Unterstützung. Gemeint sind Wörter wie «kann», «manche», «häufig», «nicht bei allen» und «lässt sich nicht vorhersagen». Es gibt keine neue absolute Aussage. Das ist die Lehre aus P4-F-1, -7, -10 und -12.
- **Keine neuen fachlichen Aussagen.**
- **Schuld und Verantwortung** stehen wie auf den freigegebenen Seiten, und kein Satz darf dem widersprechen:
  - «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (`verstehen`, Annahme 3)
  - «Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.» (`beziehungen`)
- **Begriffe** wie in Etappe 1: «betroffene Person», «Anspannung», «Grenze», «Pause» und «Beratung».
- **Verlinken statt wiederholen.** Was Etappe 1 schon sagt, wird verlinkt. Zum Beispiel:
  - Anspannung → `verstehen.html#anspannung`
  - DEAR → `grenzen.html#dear`
  - Schutz bei Gewalt → `grenzen.html#gewalt`
  - Beratung der Fachstelle → `index.html#beratung`

  Der Linktext nennt den Titel der Zielstelle, wie in 1i (P4-S-3).
- **Neue Sätze nur, wo nötig.** Das betrifft Beispielsätze, Sätze in Abbildungen, Kernaussagen, Einstiege und Überschriften, die etwas aussagen. Jeder neue Satz steht an zwei Stellen:
  - in der Selbstprüfung in der Liste «Neue Sätze zur Freigabe», mit Ort
  - im Abgleich mit Status «neu (2a)»

### c) Zuständigkeit

- Keine Krisennummern, keine Telefonnummern, keine `tel:`-Links und kein Notfallblock.
- Angebote werden mit ihrer Website verlinkt, ohne Nummer.
- **Verweis im Text** nur unter drei Bedingungen:
  - über den Platzhalter (`data-responsibility-inline`)
  - auf Seiten, deren `sensitiveTopics` passen
  - an Stellen, an denen der Bestand auf akute Gefahr verweist
- **Keine Links auf Entwurfsseiten** (`kommunizieren`, `krise` usw.). Inhalt, der dorthin gehört, steht im Abgleich als «verschoben», mit Ort «seite (Etappe 2)».

### d) Bilder

- **Genau eine Abbildung je Seite**, wie in den Abschnitten 3 und 4 entschieden. Alles andere ist Text. Jeder Abschnitt hat eine `visualPlan`-Zeile, bei Text mit `format` «text» und Begründung.
- **Ausdrücklich als Text:**
  - STOPP als nummerierte Liste (Bildsprache-Audit)
  - die Warnsignale
  - das Energie-Konto, ohne Konto- oder Bilanzbild
  - die Sauerstoffmaske nur als Satz, ohne Flugzeugbild
  - der Garten nur als Satz
  - keine Leuchtturm-Bildwelt
- **Die zwei neuen Abbildungen** bekommen `approvalStatus` «ausstehend» und ein Feld `resonance`.

## 3. Seite `rolle` · «Ihre Rolle klären»

**Bestand:**

- `unterstuetzen--uebersicht.md` und `unterstuetzen--alltag.md`
- die Handouts `rolle-klaeren`, `garten`, `leuchtturm`, `schuld-verantwortung`, `drei-saeulen`, `konsistenz-prinzip`, `4-alltags-tipps`, `6-leitlinien`, `beziehungs-achtsamkeit` und `kinder`
- die 5 Zeilen der Etappe-1-Tabellen mit Ort «rolle (Etappe 2)»

**Gliederung (Vorschlag).** Begründe Abweichungen in der Selbstprüfung.

| Nr. | Abschnitt | Bestand |
| --- | --- | --- |
| 01 | Was Sie anbieten können und was nicht Ihre Aufgabe ist, **mit Abbildung 1** | `uebersicht`: «Unterstützung ist wichtig, aber nicht allmächtig», «Die Angehörigenrolle realistisch klären»; Handouts `rolle-klaeren`, `garten`, `leuchtturm` |
| 02 | Schuld und Verantwortung | Handouts `schuld-verantwortung` (mit «5 Sätze, die Angehörige sich oft sagen – und mögliche Einordnungen») und `drei-saeulen` |
| 03 | Im Alltag unterstützen | `alltag`: «Was braucht im Alltag Veränderung?», «Was im Alltag oft wirklich hilft», «Kleine positive Inseln schaffen», «Was Sie konkret tun können»; `uebersicht`: «Woran hilfreiche Unterstützung erkennbar ist»; Handouts `konsistenz-prinzip`, `4-alltags-tipps`, `6-leitlinien`, `beziehungs-achtsamkeit` |
| 04 | Nach Konflikten und Rückzug | `alltag`: «Nach Konflikten und Rückzug», «Nach einer belastenden Situation: Erleben offen lassen» |
| 05 | Wenn mehrere Angehörige beteiligt sind | `uebersicht` |
| 06 | Wenn Kinder mitbetroffen sind | Handout `kinder`; `uebersicht`: «Wenn Kinder mitbetroffen sind»; `schuld-verantwortung`: «Kinder entlasten» |
| 07 | Wenn Unterstützung an Grenzen kommt | `uebersicht`: «Was Unterstützung so schwierig macht», «Wann Unterstützung an Grenzen kommt»; `alltag`: «Wenn Entscheidungen oder Verhalten riskant werden», «Grenzen der Alltagsunterstützung» |

**Weitere Zuordnungen:**

- **«Begrenzte Verfügbarkeit»** (`alltag`) kommt auf `selbstfuersorge` zu Abbildung 1 (Abschnitt 4). `rolle` verweist dorthin.
- **«Wenn der Alltag angespannt erlebt wird»** (`alltag`, mit Grafik) beschreibt die eigene Anspannung der Angehörigen. Der Abschnitt kommt als Text auf `selbstfuersorge`, ohne Grafik. Für Anspannung im Gespräch verweist er auf `verstehen.html#anspannung`.
- **Gesprächstechniken** gehören zu `kommunizieren`: «verschoben … kommunizieren (Etappe 2)».

### Abbildung 1 · Ein Stück Weg

Format `illustration` (Muster D), gebaut wie «Momentaufnahmen» mit `.puk-vis-scene`.

- **Titel:** «Abbildung 1 · Ein Stück Weg»
- **Kernaussage** (`p.puk-vis-kern`): «Sie können begleiten. Genesung herstellen können Sie nicht.» Grundlage ist `garten`: «Angehörige können Genesung nicht herstellen.»
- **Satz in der Szene** (`p.puk-vis-scene__say`): «Ich kann diesen Weg begleiten, aber nicht für dich gehen.» Er stammt aus `garten`, Beispiel zu «Wachstum nicht bestimmen». Der Satz davor im Handout, «Ich wünsche dir, dass es besser wird.», steht im Abschnittstext oder entfällt mit Grund.
- **Zeichnung:** Anhang A. Die Fachstelle hat diese Skizze gewählt.
  - **Fest:** zwei Menschen gehen nebeneinander, von hinten gesehen. Beide wirken gleichwertig. Niemand führt, zieht oder trägt den anderen. Der Weg führt in die Ferne.
  - **Darfst du verfeinern:** ruhige Linienfiguren in realistischen Proportionen, keine Gesichter, weiche Formen.
  - **Technik:** nur Profil-Klassen, keine Hexwerte, keine `style`-Attribute.
- **Schmal:** Unter 560 px steht der Satz über der Zeichnung, und die Zeichnung bleibt. Prüfe 360 px.
- **Kurzbeschreibung** (`p.puk-sr`): «Zeichnung: Zwei Menschen gehen nebeneinander auf einem Weg, von hinten gesehen. Der Weg führt durch eine Hügellandschaft in die Ferne. Darüber steht der Satz: «Ich kann diesen Weg begleiten, aber nicht für dich gehen.»»
- **Vertiefung «Grenzen des Bildes»** (`details.puk-vis-more`), in einfacher Sprache aus dem Handout `garten`:
  - Das Bild ist eine Metapher.
  - «Wie und wann ein Mensch sich verändert, lässt sich daraus nicht vorhersagen.»
  - «Manchmal ist weniger Unterstützung, eine Kontaktpause oder zusätzliche professionelle Hilfe nötig.»
- **Quelle:** «Eigene didaktische Darstellung nach dem Handout «Der Garten»; Bezug: NICE CG78 (2009)»
- **`visualPlan`:**
  - `resonance`: «Entlastung: Ich darf begleiten, ohne den Weg für die andere Person gehen zu müssen.»
  - `approvalStatus`: «ausstehend»

## 4. Seite `selbstfuersorge` · «Auf sich achten»

**Bestand:**

- `selbstfuersorge.md`
- die Handouts `sauerstoffmaske`, `energie-konto`, `warnsignale`, `stopp-technik`, `radikale-akzeptanz` und `erlaubnis-karte`
- aus `unterstuetzen--alltag.md`: «Begrenzte Verfügbarkeit» und «Wenn der Alltag angespannt erlebt wird» (siehe Abschnitt 3)
- die Zeile der Etappe-1-Tabellen mit Ort «selbstfuersorge (Etappe 2)»

**Gliederung (Vorschlag).** Begründe Abweichungen in der Selbstprüfung.

| Nr. | Abschnitt | Bestand |
| --- | --- | --- |
| 01 | Auch Ihr eigenes Leben zählt | Kopf und «Was Sie sich jetzt schenken können»; Handout `erlaubnis-karte`; Bildunterschrift «Eigene Zeit muss nicht erst durch zusätzliche Hilfe verdient werden.» als Satz |
| 02 | Was Kraft kostet und was entlastet, **mit Abbildung 1** | Handout `energie-konto`; «Langfristige Selbstfürsorge-Strategien»; `alltag`: «Begrenzte Verfügbarkeit», «Wenn der Alltag angespannt erlebt wird» |
| 03 | Warnsignale für Überlastung | «Warnsignale für Überlastung»; Handout `warnsignale` |
| 04 | Wenn es gerade zu viel ist | «Sofort-Übungen für akute Belastung»; Handout `stopp-technik`; STOPP als nummerierte Liste im Wortlaut der Schritte |
| 05 | Auch Sie brauchen Unterstützung | «Auch ich brauche Unterstützung» (Abgeben, Begrenzen, Beraten lassen, Eigenes Leben bewahren); Handout `sauerstoffmaske`, nur als Satz |
| 06 | Radikale Akzeptanz | «Radikale Akzeptanz»; Handout `radikale-akzeptanz` |
| 07 | Beratung für Sie | «Beratung & Netzwerke»: Verweis auf `index.html#beratung`; weitere Angebote «verschoben … unterstuetzung (Etappe 2)» |

**Zuständigkeit:** Der Hinweis «Bei Gefahr hat Schutz Vorrang» (`selbstfuersorge.md`, Abschnitt «Was Sie sich jetzt schenken können») wird zum Verweis im Text über den Platzhalter. Setze die `sensitiveTopics` entsprechend.

### Abbildung 1 · Ein freier Abend

Format `illustration` (Muster D), `.puk-vis-scene`.

- **Zeichnung und Satzpaar:** unverändert aus `templates/website/longform/visualisierungsmuster.html`, Abbildung 4 «Ein freier Abend» (Profilbeispiel). Übernommen werden das SVG, «Vielleicht ruft sie gleich an.» und «Eigentlich wollte ich lesen.».
- **Titel:** «Abbildung 1 · Ein freier Abend»
- **Kernaussage:** «Manche Angehörige bleiben auch an einem freien Abend innerlich auf Abruf.»
  - Abgesichert wie der Bestand: «Manche Angehörige berichten … von … Erreichbarkeitsdruck» (`alltag`).
  - Nicht «viele», wie es das Profilbeispiel sagt.
- **Kurztext:** «Das Buch liegt bereit, der Tee wird kalt, und ein Teil der Aufmerksamkeit bleibt beim Telefon. Diese ständige Bereitschaft kann Kraft kosten, auch wenn nichts passiert.»
  - Grundlage `energie-konto`: «Wenig planbare Unterbrechungen und fehlende Pausen können Erholung erschweren.»
  - Der Satz «Sie ist kein Zeichen von Schwäche.» aus dem Profilbeispiel entfällt.
- **Direkt nach der Abbildung** steht im Abschnittstext «Begrenzte Verfügbarkeit» aus `alltag`: «Sie müssen nicht rund um die Uhr erreichbar sein. …», mit dem Beispiel «Nach 22 Uhr bin ich nicht mehr am Handy. Wenn es ernst wird, holen wir zusätzliche Hilfe dazu.».
- **Vertiefung «Grenzen des Bildes»:** «Nicht alle Angehörigen erleben das so, und es muss nicht so bleiben. Das Bild zeigt eine Erfahrung, die manche beschreiben, keine Pflicht und keinen Fehler.»
- **Kurzbeschreibung** (`p.puk-sr`): wie im Profilbeispiel.
- **Quelle:** «Eigene didaktische Darstellung; Bezug: Handout «Energie-Konto»»
- **`visualPlan`:**
  - `resonance`: «Wiedererkennen und Erlaubnis: So fühlt sich ständige Bereitschaft an, und ich darf meine Erreichbarkeit begrenzen.»
  - `approvalStatus`: «ausstehend»
- **Neue Sätze:** Kernaussage, Kurztext, die zwei Sätze der Szene und die Vertiefung sind neu. Sie gehören in die Liste «Neue Sätze zur Freigabe».

## 5. `index`, `site.config.json` und Abgleich

### a) `index` › `einstiege`

- **Neue Reihenfolge der Einstiege** wie die Navigation: Verstehen, Beziehungen, Ihre Rolle, Grenzen, Auf sich achten. Die drei bestehenden Einträge bleiben im Wortlaut.
- **Zwei neue Einträge in derselben Form:**
  - `rolle.html`: «Ich weiss nicht mehr, was meine Aufgabe ist und was nicht.» Beschreibung: «Ihre Rolle klären: freiwillige Unterstützung, eigene Verantwortung und Aufgaben von Fachpersonen unterscheiden.»
  - `selbstfuersorge.html`: «Ich bin erschöpft und komme selbst zu kurz.» Beschreibung: «Auf sich achten: eigene Belastung, Bedürfnisse und Unterstützung ernst nehmen.»
- **Herkunft:** Die Beschreibungen folgen dem Lernweg der alten Startseite. Die beiden Anliegen-Sätze sind neu und kommen in die Liste «Neue Sätze zur Freigabe».
- **Platzhalter neu:** «Weitere Einstiege folgen: Zugewandt und klar sprechen · Genesung · Unterstützung finden.»
- Sonst bleibt `index` unverändert.

### b) `site.config.json`

- `rolle` und `selbstfuersorge` bekommen:
  - `status` «published»
  - `primaryTask` und `description`
  - passende `sensitiveTopics`
  - einen `visualPlan` mit einer Zeile pro Abschnitt
- Die Seitenplatzhalter dieser zwei Seiten entfallen.

### c) Abgleich

- **Zwei neue Tabellen** `abgleich/rolle.md` und `abgleich/selbstfuersorge.md`, aufgebaut wie die Tabellen von Etappe 1. Sie enthalten jeden Satz der Bestandsquellen aus den Abschnitten 3 und 4.
- **Satz steht schon auf einer Seite der Etappe 1:** Status «verschoben», mit Ort auf der Etappe-1-Seite. Er wird nicht doppelt geschrieben.
- **Vorgemerkte Zeilen:** In den Etappe-1-Tabellen bekommen die Zeilen mit «rolle (Etappe 2)» oder «selbstfuersorge (Etappe 2)» den neuen Ort und die neue Fassung.
- **Neue Statuswerte** «neu (2a)» und, wo nötig, «umformuliert (einfache Sprache, 2a)». Erkläre sie in `abgleich/README.md`.
- **Skripte:** `pruefe-abgleich.mjs`, `kennzahlen.mjs`, `verneinung.mjs` und `bedienung.mjs` erfassen auch die neuen Seiten. `pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle.

## 6. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: erwartet sind 2 × `visual-approval` (die neuen Abbildungen), 10 × `placeholder-approval` und 1 × `review-report`. Weicht das ab, nenne den Grund.
- **Bildschirmfotos:** beide Abbildungen bei 1280 und 360 px und im Theme «kontrast». Ansehen, nicht nur speichern.
- **Prüfung der neuen Seiten:**
  - kein waagrechter Überlauf bei 320 bis 1440 px und bei 200 % Zoom
  - Tastatur
  - Kontraste
  - Tabstopps und Seitenhöhen (`bedienung.mjs`)
- **Selbstprüfung** in `PRUEFBERICHT.md`, nur im Abschnitt «Selbstprüfung der bauenden Sitzung». Setze einen Block «Stand … · Etappe 2a» über den Block von 1j. Er enthält:
  - Stand je Abschnitt dieses Auftrags, mit Beleg
  - den Visualisierungs-Check 1–17 für die zwei neuen Abbildungen
  - die Liste «Neue Sätze zur Freigabe», mit Ort
  - die Liste «Verweise von Etappe-1-Seiten (Vorschlag)»: Stellen auf `verstehen`, `beziehungen` und `grenzen`, die auf die neuen Seiten verweisen könnten, mit vorhandenen Wörtern als Linktext. Diese Seiten werden jetzt nicht geändert.
  - die Entscheide der bauenden Sitzung
  - die Kennzahlen der neuen Seiten
- Der Pull Request bleibt Entwurf.

## Anhang A · Zeichnung «Ein Stück Weg» (Skizze, von der Fachstelle gewählt)

```html
<svg class="puk-vis-scene__art" viewBox="0 0 640 270" aria-hidden="true" focusable="false">
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M14 112 C96 92 178 100 250 98 C300 96 360 92 420 86 C500 78 560 82 626 100"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M380 88 C420 66 470 58 520 70"/>
<path class="puk-vis-scene__soft" d="M170 272 C240 238 268 210 262 184 C256 160 300 134 330 97 L342 97 C350 134 330 166 344 190 C358 218 410 244 500 272 Z"/>
<path class="puk-vis-scene__ln" d="M170 272 C240 238 268 210 262 184 C256 160 300 134 330 97"/>
<path class="puk-vis-scene__ln" d="M500 272 C410 244 358 218 344 190 C330 166 350 134 342 97"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M104 120 C122 112 146 122 152 140 C162 152 158 176 146 186 C136 202 112 206 96 198 C78 194 66 176 70 158 C68 140 84 122 104 120 Z"/>
<path class="puk-vis-scene__ln" d="M110 200 C111 216 110 230 108 246"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin puk-vis-scene__paper" d="M548 70 C556 62 570 64 574 74 C582 80 578 94 568 96 C560 100 548 98 544 90 C538 84 540 74 548 70 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M559 97 L559 108"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M520 238 C522 230 524 226 528 222 M528 240 C529 232 531 228 535 226 M200 246 C202 240 205 236 209 233"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M 287.8 184.6 L 298.5 184.6 C 298.0 207.6 297.2 226.8 296.7 243.4 C 294.9 245.4 292.3 245.4 291.0 243.4 C 289.8 226.8 288.5 207.6 287.8 184.6 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M 312.2 184.6 L 301.5 184.6 C 302.0 207.6 302.8 226.8 303.3 238.3 C 305.1 240.2 307.7 240.2 309.0 238.3 C 310.2 226.8 311.5 207.6 312.2 184.6 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M 296.2 137.2 C 289.8 137.8 284.6 139.8 284.0 144.9 C 283.6 159.0 285.3 171.8 286.6 184.6 C 294.9 186.5 305.1 186.5 313.4 184.6 C 314.7 171.8 316.4 159.0 316.0 144.9 C 315.4 139.8 310.2 137.8 303.8 137.2 Z"/>
<path class="puk-vis-scene__ln" d="M 284.3 144.2 C 280.8 147.4 278.5 162.8 278.0 176.9 C 277.9 180.2 281.3 181.0 281.7 177.9 C 282.3 166.6 283.5 156.4 285.2 151.3"/>
<path class="puk-vis-scene__ln" d="M 315.7 144.2 C 319.2 147.4 321.5 162.8 322.0 176.9 C 322.1 180.2 318.7 181.0 318.3 177.9 C 317.7 166.6 316.5 156.4 314.8 151.3"/>
<circle class="puk-vis-scene__ln puk-vis-scene__paper" cx="301.3" cy="127.6" r="8.4"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M 340.6 188.4 L 350.6 188.4 C 350.1 210.0 349.4 228.0 348.9 238.8 C 347.2 240.6 344.8 240.6 343.6 238.8 C 342.4 228.0 341.2 210.0 340.6 188.4 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M 363.4 188.4 L 353.4 188.4 C 353.9 210.0 354.6 228.0 355.1 243.6 C 356.8 245.4 359.2 245.4 360.4 243.6 C 361.6 228.0 362.8 210.0 363.4 188.4 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M 348.4 144.0 C 342.4 144.6 337.6 146.4 337.0 151.2 C 336.6 164.4 338.2 176.4 339.4 188.4 C 347.2 190.2 356.8 190.2 364.6 188.4 C 365.8 176.4 367.4 164.4 367.0 151.2 C 366.4 146.4 361.6 144.6 355.6 144.0 Z"/>
<path class="puk-vis-scene__ln" d="M 337.2 150.6 C 334.0 153.6 331.8 168.0 331.4 181.2 C 331.2 184.3 334.5 185.0 334.8 182.2 C 335.4 171.6 336.5 162.0 338.1 157.2"/>
<path class="puk-vis-scene__ln" d="M 366.8 150.6 C 370.0 153.6 372.2 168.0 372.6 181.2 C 372.8 184.3 369.5 185.0 369.2 182.2 C 368.6 171.6 367.5 162.0 365.9 157.2"/>
<circle class="puk-vis-scene__ln puk-vis-scene__paper" cx="350.2" cy="135.0" r="7.9"/>
</svg>
```
