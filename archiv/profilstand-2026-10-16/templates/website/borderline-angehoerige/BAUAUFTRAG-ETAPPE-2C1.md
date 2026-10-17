# Bauauftrag · Borderline-Website, Etappe 2c-1 · «Genesung» und «Unterstützung finden»

Stand 11.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Stand:** Die Etappen 1, 2a und 2b sind fachlich freigegeben (`PRUEFBERICHT.md`, «Fachliche Freigabe der Fachstelle», Stand `6213de7`).
- **Dieser Auftrag:** Teil 2c-1 mit `genesung` («Genesung») und `unterstuetzung` («Unterstützung finden»). `diagnose` und `behandlung` folgen in 2c-2.
- **Entscheide der Fachstelle vom 11.10.2026:**
  - **Reihenfolge:** zuerst `genesung` und `unterstuetzung`. Damit sind alle Einstiege der Startseite gebaut.
  - **Bild:** `genesung` bekommt die Abbildung «Ein neuer Trieb», eine Pflanze mit abgefallenem Blatt, neuem Trieb und Giesskanne (Abschnitt 4, Anhang A).
  - **Bücher:** Alle empfohlenen Bücher stehen sichtbar, nach Zielgruppe geordnet. Die vier kritisch eingeordneten Titel stehen mit ihrer Einordnung in einer Vertiefung, ohne Bezugslinks, wie im Bestand.
- **Entscheide von Claude (Aufbau und Technik):**
  - Angebote stehen nur mit Link zur Website, ohne Telefonnummern und ohne Telefonzeiten.
  - Die Zahlen der Langzeitstudie (93 % und 50 %) stehen als hervorgehobener Text mit allen Einschränkungen dazu. Es gibt kein Diagramm.
  - Der Garten-Text des Bestands steht schon auf `rolle` › `anbieten`. `genesung` verweist dorthin, statt ihn zu wiederholen.
  - Zwei Reste aus 2b werden auf allen Seiten erledigt (Abschnitt 7).
- **Geändert werden nur:**
  - die Seiten `genesung` und `unterstuetzung`
  - die Einstiege auf `index` (Abschnitt 6)
  - `site.config.json` und der Abgleich
  - die zwei technischen Reste in Abschnitt 7
- **Freigegebene Seiten:** Ihr Wortlaut bleibt unverändert. `genesung` und `unterstuetzung` kommen nicht in die Hauptnavigation (`navLabel` bleibt `null`).

## 2. Regeln

Es gelten alle Regeln aus `BAUAUFTRAG-ETAPPE-2B.md`, Abschnitt 2, und die Lehren aus den Korrekturen 2b-K, 2b-2 und `FREIGABE-ETAPPE-2B.md`.

**Kurz die wichtigsten:**

- **Einfache Sprache und klares Subjekt:**
  - «Die Bereiche …», nicht «Sie …» für Dinge.
  - «Manche …», wo die Lesenden nicht gemeint sind.
  - Keine Semikolons im Fliesstext.
- **Absicherungen** zu Person, Diagnose, Verlauf und Schutz bleiben wie im Bestand. Es gibt keine neue absolute Aussage und kein Heilungsversprechen.
- **Verantwortung im Wortlaut der freigegebenen Seiten:**
  - «Für Behandlung und Genesung sind Sie nicht verantwortlich.» (`rolle`)
  - «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.» (`verstehen`)
  - Kein «allein» bei Erkrankung, Behandlung oder Genesung.
- **Verlinken statt wiederholen:**
  - Was Angehörige anbieten können: `rolle#anbieten`
  - Beratung der Fachstelle: `index#beratung`
  - eigene Belastung: `selbstfuersorge#unterstuetzung` und `selbstfuersorge#beratung`
  - Verweissätze im üblichen Muster «… steht auf der Seite «…» im Abschnitt «…».»
- **Keine Links auf Entwurfsseiten:** Das sind `diagnose`, `behandlung`, `fragen`, `quellen` und `ueber`. Der Hinweis auf Begleiterkrankungen bleibt ohne Link, der Link kommt mit 2c-2.
- **Zuständigkeit:**
  - Keine Telefonnummern, keine `tel:`-Links, kein Notfallblock.
  - Links auf `/soforthilfe` entfallen. Steht dort eine Handlungsanleitung für akute Gefahr, folgt der Verweis im Text.
- **Quellen:** Sie stehen nicht im Text, sondern im Block «Quellen zu dieser Seite» am Seitenende (wie seit 2b-2). Die Quelle der Abbildung bleibt bei der Abbildung.
- **Länge:** `genesung` höchstens etwa 1800, `unterstuetzung` höchstens etwa 1500 Wörter im Lesefluss (Zählweise C1). Ergänzendes kommt in Vertiefungen (Akkordeon des Profils, ohne Skript offen, im Druck vollständig).
- **Neue Sätze und Abgleich:**
  - Die Liste «Neue Sätze zur Freigabe» wird vollständig geführt, mit allen nicht wörtlichen Sätzen und mit dem Bildtitel.
  - Neue Tabellen `abgleich/genesung.md` und `abgleich/unterstuetzung.md`.
  - Die vorgemerkten Zeilen «genesung (Etappe 2)» und «unterstuetzung (Etappe 2)» bekommen ihren neuen Ort.
  - `pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle. Alle Skripte erfassen die neuen Seiten.

## 3. Seite `genesung` · «Genesung»

**Bestand:**
- `genesung.md`
- die Handouts `genesung-zahlen`, `fortschritt-paradox`, `remission-heilung`, `5-faktoren-genesung` und `rolle-genesungsprozess`
- die 4 vorgemerkten Zeilen aus `beziehungen` («Ein realistischer Massstab für Veränderung …»)

**Gliederung (Vorschlag).** Abweichungen begründest du in der Selbstprüfung.

| Nr. | Abschnitt | Bestand |
| --- | --- | --- |
| Kopf | Genesung | «Hoffnung ist bei Borderline berechtigt. …» und die drei Kernsätze («Besserung ist möglich …», «Studienzahlen beschreiben Gruppen …», «Angehörige können begleiten …») |
| 01 | Was die Forschung zeigt | 93 %, 50 %, 10 Jahre mit Erklärung. Sichtbar direkt dabei: der Hinweis «Untersucht wurden 290 Erwachsene …» und «Was die Zahlen nicht sagen» (`genesung-zahlen`). Darstellung wie das Anwendungsmuster «Datenbotschaft»: Kernaussage zuerst, Werte als Text, kein Diagramm |
| 02 | Remission, Alltag und persönliche Recovery | «Was Remission und Genesung bedeuten» und `remission-heilung`: drei Begriffe nebeneinander, als Liste oder Gegenüberstellung in Text. «Zum Begriff «Heilung»» kommt in eine Vertiefung |
| 03 | Veränderung verläuft unterschiedlich, **mit Abbildung 1** | `fortschritt-paradox` und «Realistische Hoffnung statt glatter Zuversicht». Die Abbildung steht direkt nach dem ersten Absatz. Danach folgen «Weniger hilfreich / Tragfähiger» als Gegenüberstellung (`.puk-say`), ohne das Satzpaar der Abbildung, und «Was Sie tun können». Die 4 vorgemerkten Zeilen aus `beziehungen` passen hierher («Woran sich Veränderung zeigen kann») |
| 04 | Was Genesung beeinflussen kann | `5-faktoren-genesung`: fünf Bereiche als Liste, ausdrücklich ohne Reihenfolge und ohne Formel. «Sozialberatungen können unterstützen» bleibt |
| 05 | Was Sie anbieten können und was nicht Ihre Aufgabe ist | `rolle-genesungsprozess` und «Was Angehörige freiwillig anbieten können». Kurz halten und auf `rolle#anbieten` verweisen. Sichtbar bleiben die Selbstfrage «Ist das, was ich anbiete, gewünscht, freiwillig, sicher und für mich tragbar?» und «Ihre Gesundheit zählt für sich, nicht erst als Beitrag zur Genesung einer anderen Person.» Der Hinweis zu Eltern Minderjähriger und Beistandschaft kommt in eine Vertiefung |

**Weitere Regeln für `genesung`:**

- **Begleiterkrankungen:** «Bei vielen, nicht allen Menschen bestehen zusätzlich …» bleibt als Satz, vorerst ohne Link.
- **Was entfällt:**
  - «Materialien & Infografiken», Lesezeit und «Schritt 7 von 8», mit Grund im Abgleich
  - die Garten-Bereiche, weil sie auf `rolle` stehen. Im Abgleich steht «zusammengeführt» mit Fundstelle `rolle#anbieten`.

**Fachlich heikel, Wortlaut des Bestands halten** (in der Selbstprüfung unter «Zur Prüfung durch die Fachstelle», mit Bestandszitat):

- Die Zahlen 93 % und 50 % mit Studiendefinition, Stichprobe und «keine individuelle Prognose»
- «Für Borderline selbst sind Medikamente keine Kernbehandlung. Änderungen nur mit der behandelnden Fachperson.»
- «Allgemeine Beratung ist auch ohne Zustimmung der betroffenen Person möglich. Auskünfte über ihre Behandlung gibt es grundsätzlich nur mit ihrer Zustimmung. Gesetzliche Ausnahmen gelten etwa bei Minderjährigen oder fehlender Urteilsfähigkeit.»

## 4. Abbildung 1 · Ein neuer Trieb (`genesung` › Abschnitt 03)

Format `illustration` (Muster D), gebaut wie «Zwei Tassen» mit `.puk-vis-scene`.

- **Titel:** «Abbildung 1 · Ein neuer Trieb»
- **Kernaussage:** «Eine schwierigere Phase bedeutet nicht, dass alles Erreichte verloren ist.» (`fortschritt-paradox`)
- **Kurztext:** «Genesungswege unterscheiden sich. Schwierigere Phasen können vorkommen und müssen ernst genommen werden. Sie sind weder vorgeschrieben noch ein Beleg für fehlenden Willen.» (`fortschritt-paradox`, Kernaussage; das Semikolon wird zu einem Punkt)
- **Sätze in der Szene** (Bestand, «Weniger hilfreich / Tragfähiger»):
  - links `p.puk-vis-scene__say`: «Eine schwierigere Phase entwertet alles.»
  - rechts `__say--b`: «Schwierigere Phasen kommen vor und müssen nicht alles kippen.»
- **Zeichnung:** Anhang A, von der Fachstelle gewählt.
  - Eine Topfpflanze steht auf einem Fenstersims. Ein Blatt ist abgefallen, oben wächst ein neuer Trieb. Daneben steht eine Giesskanne, sie giesst nicht.
  - **Darfst du verfeinern:** Linienführung, Bildausschnitt, Abstände.
  - **Fest bleibt:**
    - abgefallenes Blatt und neuer Trieb
    - die Giesskanne steht daneben und giesst nicht: Angehörige können Bedingungen anbieten, wachsen muss die Pflanze selbst
  - **Technik:** nur Profil-Klassen, keine Hexwerte, keine `style`-Attribute.
  - Schmal stehen die Sätze untereinander über der Zeichnung.
- **Kurzbeschreibung** (`p.puk-sr`): «Zeichnung: Eine Topfpflanze steht auf einem Fenstersims. Ein Blatt ist abgefallen und liegt neben dem Topf, oben wächst ein neuer Trieb. Daneben steht eine Giesskanne. Über der Zeichnung stehen die Sätze «Eine schwierigere Phase entwertet alles.» und «Schwierigere Phasen kommen vor und müssen nicht alles kippen.»»
- **Vertiefung «Grenzen des Bildes»** (Bestand):
  - «Das Bild ist eine Metapher, keine Vorhersage eines Genesungsverlaufs.» (Bestand: «Der Garten ist eine Metapher, keine Vorhersage eines Genesungsverlaufs.»)
  - «Hilfreiche Bedingungen können Entwicklung unterstützen. Wie und wann ein Mensch sich verändert, lässt sich daraus nicht vorhersagen.»
  - «Angehörige können Genesung nicht herstellen.»
- **Quelle:** «Eigene didaktische Darstellung nach den Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; Bezug: Zanarini et al. (2012); NICE CG78 (2009)»
- **`visualPlan`:**
  - `resonance`: «Entlastung und realistische Hoffnung: Ein Rückschritt macht nicht alles zunichte, und das Wachsen muss ich nicht machen.»
  - `approvalStatus`: «ausstehend»

## 5. Seite `unterstuetzung` · «Unterstützung finden»

**Bestand:** `fachstelle.md`, `beratung.md`, `buchempfehlungen.md` und die vorgemerkten Zeilen «unterstuetzung (Etappe 2)».

**Gliederung (Vorschlag).** Abweichungen begründest du in der Selbstprüfung.

| Nr. | Abschnitt | Bestand |
| --- | --- | --- |
| Kopf | Unterstützung finden | «Wenn Belastung, Unsicherheit oder Erschöpfung zu gross werden, kann es entlastend sein, nicht nur im eigenen System nach Lösungen zu suchen. …» |
| 01 | Beratung für Angehörige | Die Fachstelle Angehörigenarbeit der PUK: Was sie anbietet (Beratung, Psychoedukation, Orientierung und Vermittlung, Schulungen). Der Satz «Die Fachstelle ist kein Krisendienst und keine Therapie.» steht sichtbar. Kontakt und Bedingungen werden nicht wiederholt, sondern mit einem Verweissatz auf `index#beratung` verlinkt. «Was Sie vorab klären können» nur, soweit die Startseite es nicht beantwortet. Dazu Pro Mente Sana (psychosoziale und juristische Beratung), mit Website-Link |
| 02 | Austausch mit anderen Angehörigen | Stand by You Schweiz (ehemals VASK Schweiz; HelpLine von Angehörigen für Angehörige, ohne Nummer und Zeiten, mit Website-Link) und VASK Zürich (Beratungs-Treffpunkte in Zürich und Winterthur, mit Website-Link) |
| 03 | Selbsthilfegruppen | Selbsthilfe Schweiz, mit Website-Link |
| 04 | Ausserhalb des Kantons Zürich | Der Regional-Hinweis des Bestands |
| 05 | Bücher für Angehörige | Die empfohlenen Titel nach Zielgruppe: Partner, Eltern, Kinderbücher, Erfahrungsberichte, Zum Vertiefen, Englischsprachig. Je Titel stehen Autorin oder Autor, Verlag und Jahr, ein Satz und «Für: …». Dazu der Hinweis zu den Empfehlungen und «Viele Bücher sind auch in Bibliotheken verfügbar …». Die vier kritisch eingeordneten Titel stehen in einer Vertiefung mit ihrer Einordnung |

**Weitere Regeln für `unterstuetzung`:**

- **Links zu Angeboten:** nur auf die offizielle Website. Keine Telefonnummern, keine HelpLine-Zeiten.
- **Bezugslinks zu Buchhandlungen** (Ex Libris) entfallen. Bibliografische Angaben genügen. Das steht in der Liste für die Fachstelle.
- **«Einordnung dieser Website»** («kein offizieller Kommunikationskanal der PUK») gehört nach `ueber`. Im Abgleich steht «verschoben (ueber, Etappe 3)».
- **«Nächste Schritte» des Bestands:** Verweissätze auf `selbstfuersorge` und `kommunizieren`.

**Zur Prüfung durch die Fachstelle**, mit Bestandszitat:

- Stand und Angaben der Angebote: Stand by You, VASK Zürich mit den Treffpunkten, Pro Mente Sana, Selbsthilfe Schweiz
- Bücher ohne Bezugslinks

## 6. `index`, `site.config.json`

- **`index` › `einstiege`:**
  - Nach «Zugewandt und klar sprechen» kommen zwei Einträge:
    - `genesung.html`: «Ich frage mich, ob es je besser wird.» mit der Beschreibung «Genesung: Hoffnung, unterschiedliche Verläufe und Grenzen des eigenen Einflusses verbinden.» (Lernweg der alten Startseite)
    - `unterstuetzung.html`: «Ich suche Beratung oder Austausch mit anderen Angehörigen.» mit der Beschreibung «Unterstützung finden: Beratung, Austausch mit anderen Angehörigen und Bücher.»
  - Die zwei Anliegen-Sätze und die zweite Beschreibung sind neu.
  - Der Platzhalter «Weitere Einstiege folgen: …» entfällt.
  - Sonst bleibt `index` unverändert.
- **`site.config.json`:** `genesung` und `unterstuetzung` bekommen:
  - `status` «published»
  - `primaryTask` und `description`
  - passende `sensitiveTopics`
  - einen `visualPlan` mit einer Zeile pro Abschnitt, auch für den Quellenblock
  - `navLabel` bleibt `null`, und die Seitenplatzhalter entfallen

## 7. Zwei technische Reste aus 2b (alle Seiten)

- **Leerraum unter dem Quellenblock:**
  - Die Mindesthöhe (`puk-site-anchor-end`) fällt ganz weg.
  - Prüfe den Sprung über die Kapitelübersicht zum letzten Abschnitt bei 1280 × 900, 1920 × 1080 und 360 × 800 px. Nenne die Werte.
  - Der Wortlaut der Seiten ändert sich nicht.
- **Druck:**
  - Zwischentitel stehen nicht allein am Seitenende, z. B. mit `break-after: avoid` in der Druckregel von `borderline.css`.
  - Prüfe das PDF von `kommunizieren` an der Stelle «Die sechs Stufen im Detail».

## 8. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: erwartet 1 × `visual-approval` («Ein neuer Trieb»), 5 × `placeholder-approval` (`diagnose`, `behandlung`, `fragen`, `quellen`, `ueber`), 1 × `review-report`. Weicht das ab, nenne den Grund.
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Bildschirmfotos:** die Abbildung und jede Vertiefung bei 1280 und 360 px und im Theme «kontrast», ansehen.
- **Prüfung der neuen Seiten:**
  - kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom
  - Tastatur und Fokus
  - Druckansicht
  - Kontraste
  - `bedienung.mjs`
  - alle externen Links: Ziel ist die offizielle Website
- **Selbstprüfung** in `PRUEFBERICHT.md`, nur im Abschnitt «Selbstprüfung der bauenden Sitzung». Setze einen Block «Etappe 2c-1» über den obersten Block. Er enthält:
  - Stand je Abschnitt dieses Auftrags, mit Beleg
  - Wörter im Lesefluss je Seite und Abschnitt (Zählweise C1)
  - den Visualisierungs-Check 1–17 für die Abbildung
  - jeden Verweis im Text mit der Handlungsanleitung davor (falls es welche gibt)
  - die vollständige Liste «Neue Sätze zur Freigabe»
  - die Liste «Zur Prüfung durch die Fachstelle»
  - Vorschläge für Verweise von freigegebenen Seiten auf die neuen Seiten, ohne diese Seiten zu ändern
- **Keine Änderung am Wortlaut** der freigegebenen Seiten, ausser den Einstiegen auf `index`. Beleg mit `git diff --word-diff`.
- Der Pull Request bleibt Entwurf.

## Anhang A · Zeichnung «Ein neuer Trieb» (Skizze, von der Fachstelle gewählt)

```html
<svg class="puk-vis-scene__art" viewBox="0 40 640 220" aria-hidden="true" focusable="false">
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M84 226 C230 222 420 222 566 226 C574 226 578 230 578 236 L578 240 C578 246 574 248 566 248 C420 252 230 252 84 248 C76 248 72 246 72 240 L72 236 C72 230 76 226 84 226 Z"/>
<path class="puk-vis-scene__ln" d="M262 162 C258 132 266 104 260 70"/>
<path class="puk-vis-scene__ln" d="M262 140 C276 124 292 116 312 112"/>
<path class="puk-vis-scene__ln" d="M261 118 C248 104 232 98 214 96"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M312 112 C328 119 349 105 354 93 C342 88 317 95 312 112 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M312 112 L341 98"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M214 96 C209 81 187 77 176 82 C181 93 200 104 214 96 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M214 96 L188 86"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M262 150 C257 138 239 134 230 138 C234 147 251 156 262 150 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M262 150 L240 142"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M260 72 C263 65 256 56 250 55 C248 60 252 71 260 72 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M260 72 L253 60"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M260 72 C268 71 272 60 270 55 C264 56 257 65 260 72 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M260 72 L267 60"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M261 92 C272 95 284 83 286 75 C277 73 262 80 261 92 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M261 92 L278 80"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M322 234 C334 241 355 233 361 224 C351 219 329 222 322 234 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M322 234 L349 227"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M226 172 L298 172 L290 224 C289 228 286 230 282 230 L242 230 C238 230 235 228 234 224 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M220 160 C220 157 222 156 225 156 L299 156 C302 156 304 157 304 160 L304 170 C304 173 302 174 299 174 L225 174 C222 174 220 173 220 170 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M420 178 C420 172 424 168 430 168 L486 168 C492 168 496 172 496 178 L494 222 C494 226 491 229 487 229 L429 229 C425 229 422 226 422 222 Z"/>
<path class="puk-vis-scene__ln" d="M422 190 L384 152"/>
<path class="puk-vis-scene__ln" d="M426 202 L384 160"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M376 148 L392 146 L392 164 L376 162 Z"/>
<path class="puk-vis-scene__ln" d="M440 168 C444 140 476 138 482 168"/>
<path class="puk-vis-scene__ln" d="M496 182 C516 184 518 212 496 214"/>
</svg>
```
