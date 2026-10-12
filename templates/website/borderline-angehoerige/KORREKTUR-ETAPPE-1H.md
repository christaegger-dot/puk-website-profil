# Korrekturauftrag · Borderline-Website, Etappe 1h

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Bildsprache-Audit** (`PRUEFBERICHT.md`, Abschnitt «Bildsprache-Audit», Commit `c9e0375`). Die Befunde sind nachgeprüft (Bildschirmfotos bei 1280 und 360 px): Das Pendel wirkt wie eine Physikskizze und verliert schmal alle Beschriftungen; der Eisberg verschwindet schmal ganz.
- **Entscheide der Fachstelle (10.10.2026):**
  - BS-1: Das Pendel wird ersetzt durch das Bild **«Momentaufnahmen»** (Fotoalbum), nach der freigegebenen Skizze.
  - BS-2: Der **Eisberg** bleibt als Motiv, wird weicher gezeichnet, die Wörter stehen im Eisberg, daneben die Frage «Wie ist es gerade für dich?», nach der freigegebenen Skizze. Er bleibt auch schmal sichtbar.
- **Strukturelle Punkte aus dem Audit** (BS-3, BS-4 Variante B, BS-5 erster Teil, BS-6, BS-7) werden mit umgesetzt. BS-5 zweiter Teil (zweite Linie für die eigene Anspannung) und BS-8 (Etappe 2) bleiben offen.
- **Profil-Update vom 10.10.2026** («Bildsprache: ein Bild, eine Idee», Build r4-6) wird übernommen. Es bringt die Klassen `.puk-vis-scene` und das Planfeld `resonance` (Wirkung).

## 2. Regeln

- Die Texte und Zeichnungen in diesem Auftrag gelten so, wie sie dort stehen. Keine eigenen Formulierungen, nichts weglassen. Was nicht genannt ist, bleibt.
- SVG-Code unverändert übernehmen. Farben nur über die Klassen des Profils, keine `style`-Attribute.
- Alle Beschriftungen sind HTML-Text.
- **Abgleich:** wie in Abschnitt 8. `node abgleich/pruefe-abgleich.mjs` mit 0 Zeilen ohne Fundstelle.

## 3. Profil-Update übernehmen

1. `main` in `borderline-umbau` holen (`git merge origin/main`). Konflikte melden, nicht selbst auflösen, falls sie Dateien der Website betreffen.
2. Aus `templates/website/psychoeducation-site-starter/` in die Website kopieren: `tools/contract.js`, `tools/selftest/site.config.json`, `tools/selftest/README.md`. Die übrigen Werkzeuge sind gleich wie im Starter.
3. `site.config.json`: `assetVersion` auf `r4-6`. Im `$comment` «Profil-Update 10.10.2026 übernommen: Build r4-6» ergänzen.
4. `PRUEFBERICHT.md`, Abschnitt «Visualisierungs-Check»: die Zeilen 15–17 aus der Vorlage des Starters ergänzen (Tabelle und Matrix) und für den neuen Stand ausfüllen.

## 4. Seite `verstehen`

### Abbildung 1 · Eisberg (`v-vs-eisberg`)

- **Bezeichnung:** «Abbildung 1 · Was man sieht – und was darunter mitwirken kann»
- **Kernaussage und Kurztext:** unverändert.
- **Darstellung:** ersetzt Zeichnung und Wortkästen. Aufbau:

```html
<div class="bl-eis">
<svg class="bl-eis__art" viewBox="0 0 760 400" aria-hidden="true" focusable="false">
<path class="puk-vis-scene__soft" d="M0 150 C60 144 110 156 170 150 S280 144 340 150 S450 156 510 150 S620 144 680 150 S740 154 760 150 L760 400 L0 400 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M250 150 C262 120 280 90 300 72 C312 60 326 58 338 48 C356 30 384 26 404 40 C420 52 432 50 446 62 C466 80 478 110 492 150 C530 176 566 214 572 256 C578 300 552 338 500 356 C450 372 360 376 300 362 C240 348 196 316 192 272 C188 228 214 186 250 150 Z"/>
<path class="puk-vis-scene__ln" d="M0 150 C60 144 110 156 170 150 S280 144 340 150 S450 156 510 150 S620 144 680 150 S740 154 760 150"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M40 300 C70 294 100 304 130 298 M620 330 C650 324 680 334 710 328 M80 360 C104 355 128 363 152 358"/>
</svg>
<div class="bl-eis__zone bl-eis__zone--oben"><p class="bl-eis__key">Sichtbar</p><ul>
<li class="bl-eis__w bl-eis__w--1">Wut</li><li class="bl-eis__w bl-eis__w--2">Vorwürfe</li><li class="bl-eis__w bl-eis__w--3">Lautwerden</li><li class="bl-eis__w bl-eis__w--4">Rückzug</li>
</ul></div>
<div class="bl-eis__zone bl-eis__zone--unten"><p class="bl-eis__key">Darunter möglich</p><ul>
<li class="bl-eis__w bl-eis__w--5">Angst</li><li class="bl-eis__w bl-eis__w--6">Scham</li><li class="bl-eis__w bl-eis__w--7">Trauer</li><li class="bl-eis__w bl-eis__w--8">Einsamkeit</li><li class="bl-eis__w bl-eis__w--9">Anspannung</li><li class="bl-eis__w bl-eis__w--10">… oder ganz andere Erfahrungen</li>
</ul></div>
<p class="puk-vis-scene__say bl-eis__frage">«Wie ist es gerade für dich?»</p>
</div>
```

- **CSS in `borderline.css`, breit:** `.bl-eis` relativ, `max-width:760px`, Seitenverhältnis 760/400; die Zeichnung füllt die Fläche. Die Wörter stehen absolut, mittig auf diesen Punkten (`transform: translate(-50%,-50%)`), Schrift `type-body`, Nr. 10 `type-body-sm`, ohne Kästen und ohne Rahmen. `.bl-eis__key` nur für Screenreader. Die Frage steht oben rechts, linke Kante bei 78,9 %, Oberkante bei 14,5 %, höchstens 21 % breit.

| Wort | links | oben |
| --- | --- | --- |
| Wut | 44,5 % | 21,0 % |
| Vorwürfe | 55,3 % | 21,0 % |
| Lautwerden | 42,9 % | 29,5 % |
| Rückzug | 57,1 % | 29,5 % |
| Angst | 41,6 % | 48,5 % |
| Scham | 59,5 % | 48,5 % |
| Trauer | 39,5 % | 60,0 % |
| Einsamkeit | 58,4 % | 60,0 % |
| Anspannung | 50,0 % | 71,5 % |
| … oder ganz andere Erfahrungen | 50,5 % | 81,5 % |

- **Schmal** (Container unter 560 px): Die Zeichnung bleibt sichtbar, ohne Wörter darin, über die ganze Breite. Darunter stehen beide Gruppen als Listen mit sichtbarer Überschrift («Sichtbar», «Darunter möglich»), Wörter nebeneinander und umbrechend, ohne Kästen. Darunter steht die Frage. Prüfen, dass bei 1280 px kein Wort über den Rand des Eisbergs ragt; sonst Schrift `type-body-sm`, nie kleiner.
- **Vertiefung «Grenzen des Bildes»:** «Der Eisberg ist ein Bild dafür, was man von aussen sieht, keine Aussage darüber, was in einer bestimmten Person «darunterliegt». Er soll Wut nicht verharmlosen.»
- **Kurzbeschreibung (`p.puk-sr`):** «Eisberg an einer Wasserlinie. Über dem Wasser stehen im Eisberg Wut, Vorwürfe, Lautwerden und Rückzug. Darunter stehen Angst, Scham, Trauer, Einsamkeit, Anspannung – oder ganz andere Erfahrungen. Daneben steht die Frage «Wie ist es gerade für dich?».»
- Kennzeichnung und Quelle unverändert.

### Abbildung 2 · Anspannungskurve (`v-vs-anspannung`)

- Beschriftungen an der Kurve mit Schlusspunkt, wie in der Liste: «Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.», «Es wird wieder ruhiger.»
- Stelle 4 in der Liste: Überschrift «Später.» wird «Es wird wieder ruhiger.». Text und Beispiel bleiben.
- Kurzbeschreibung: «4 «Später»» wird «4 «Es wird wieder ruhiger.»».
- Bei 1280 px prüfen, dass die längere Beschriftung an Stelle 4 nicht über den Rand ragt oder die Kurve überdeckt.

### Abbildung 3 · Momentaufnahmen (ersetzt das Pendel, `v-vs-bewertungen`)

Die ganze Figur wird ersetzt. Sie steht offen (`puk-vis-figure puk-vis-figure--open`), `data-visual-type="illustration"`.

- **Bezeichnung:** «Abbildung 3 · Momentaufnahmen»
- **Kernaussage:** unverändert («Weder eine sehr positive noch eine sehr negative Momentaufnahme muss die ganze Beziehung oder Person beschreiben.»)
- **Kurztext:** «Unter starker Anspannung kann ein einzelner Moment das ganze Bild bestimmen: einmal sehr hell, einmal sehr dunkel. Beides sind Momentaufnahmen, und der Blick kann sich wieder weiten. Stärken, Grenzen, Nähe und Ärger können gleichzeitig wahr sein, ohne dass schwierige Erfahrungen kleingeredet werden.»
- **Darstellung:**

```html
<div class="puk-vis-scene">
<p class="puk-vis-scene__say">«Du bist die Einzige, die mich versteht.»</p>
<p class="puk-vis-scene__say puk-vis-scene__say--b">«Du bist wie alle anderen.»</p>
<svg class="puk-vis-scene__art" viewBox="0 0 640 300" aria-hidden="true" focusable="false">
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M58 214 C150 199 240 203 318 217 L318 290 C240 278 150 274 58 288 C52 288 50 284 50 279 L50 222 C50 217 53 215 58 214 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M322 217 C400 203 490 199 582 214 C587 215 590 217 590 222 L590 279 C590 284 588 288 582 288 C490 274 400 278 322 290 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M84 230 L128 226 C131 226 132 227 132 230 L132 252 C132 254 131 255 128 255 L84 258 C81 258 80 257 80 254 L80 233 C80 231 81 230 84 230 Z M86 248 C96 242 106 250 126 243"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M152 224 L196 221 C199 221 200 222 200 225 L200 247 C200 249 199 250 196 250 L152 252 C149 252 148 251 148 248 L148 227 C148 225 149 224 152 224 Z M154 243 C166 236 176 246 194 238"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M254 228 L296 230 C299 230 300 231 300 234 L300 256 C300 258 299 259 296 259 L254 257 C251 257 250 256 250 253 L250 231 C250 229 251 228 254 228 Z M252 249 C264 243 278 252 298 246"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M346 230 L388 228 C391 228 392 229 392 232 L392 254 C392 256 391 257 388 257 L346 259 C343 259 342 258 342 255 L342 233 C342 231 343 230 346 230 Z M344 250 C356 243 370 252 390 245"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M444 221 L488 224 C491 224 492 225 492 228 L492 250 C492 252 491 253 488 253 L444 250 C441 250 440 249 440 246 L440 224 C440 222 441 221 444 221 Z M442 243 C454 236 468 246 490 240"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M512 226 L556 230 C559 230 560 231 560 234 L560 256 C560 258 559 259 556 259 L512 255 C509 255 508 254 508 251 L508 229 C508 227 509 226 512 226 Z M510 248 C522 241 536 251 558 245"/>
<g transform="rotate(-6 190 110)">
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M118 50 L262 50 C267 50 270 53 270 58 L270 164 C270 169 267 172 262 172 L118 172 C113 172 110 169 110 164 L110 58 C110 53 113 50 118 50 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M124 62 L256 62 L256 146 L124 146 Z"/>
<circle class="puk-vis-scene__ln puk-vis-scene__soft" cx="218" cy="90" r="16"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M126 128 C150 114 172 126 196 118 C220 110 236 122 254 116"/>
</g>
<g transform="rotate(6 450 110)">
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M378 50 L522 50 C527 50 530 53 530 58 L530 164 C530 169 527 172 522 172 L378 172 C373 172 370 169 370 164 L370 58 C370 53 373 50 378 50 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M384 62 L516 62 L516 146 L384 146 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M414 96 C410 84 424 76 434 82 C438 70 458 68 464 80 C476 76 488 86 482 98 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M424 108 L418 124 M444 108 L438 124 M464 108 L458 124"/>
</g>
</svg>
</div>
```

- Die Liste «Links / Mitte / Rechts» und alle Beschriftungen des Pendels entfallen.
- **Vertiefung**, Titel «Was den Blick färben kann – und Grenzen des Bildes»: «Im hellen Moment können Nähe, Dankbarkeit oder Hoffnung sehr gross werden. Im dunklen Moment können Kränkung, Angst oder Wut den Blick stark färben. Mitwirken können Erschöpfung, erlebte Kritik, Nähe oder Abstand, Missverständnisse, Scham oder Kränkung. Das Bild beschreibt eine mögliche Reaktion auf Anspannung, nicht den Charakter eines Menschen, und gilt nicht für alle Menschen mit Borderline.»
- **Kurzbeschreibung (`p.puk-sr`):** «Zeichnung eines offenen Fotoalbums mit kleinen Fotos. Zwei Fotos sind herausgenommen: links ein helles mit Sonne, darüber der Satz «Du bist die Einzige, die mich versteht.», rechts ein dunkles mit Regenwolke, darüber der Satz «Du bist wie alle anderen.».»
- Kennzeichnung unverändert: «Eigene didaktische Darstellung · Grundlage: Linehan (1993); Hoffman et al. (2005).»
- In `borderline.css` die Regeln entfernen, die nur dem Pendel dienten (`.bl-fig--pendel` und seine Beschriftungen), und die des alten Eisbergs, falls nur dort verwendet. Vorher mit `grep` prüfen.

### Abschnitt 06 · Annahmen (`v-vs-mythen`): keine Abbildung mehr

- Die `figure` entfällt mit Bezeichnung «Abbildung 4», Bildlegende und Kurzbeschreibung.
- Die bisherige Kernaussage und der Kurztext werden zwei gewöhnliche Absätze vor der Liste, Wortlaut unverändert.
- Die sieben Paare bleiben mit gleichem Wortlaut und gleicher Reihenfolge, als Begriffsliste (`dl`) wie in `grenzen` › 09: `dt` = «Verbreitete Annahme: «…»», `dd` = Einordnung, erster Satz fett, danach die Erklärung.
- Die Quellen der Vertiefung werden eine sichtbare Quellenzeile nach der Liste: `<p><strong>Quellen:</strong> …</p>`.
- Der übrige Abschnitt 06 bleibt unverändert, auch der Suizid-Absatz und der Verweis im Text.

## 5. Seite `beziehungen`

### Abbildung 1 · Bedeutungsschleife (`v-bz-schleife`)

- In jeder Station drei Zeilen: oben, wer handelt («Schwester» oder «Betroffene Person»), in `type-body-sm`, mittleres Gewicht; in der Mitte der Beispielsatz als Hauptzeile in `type-body`; unten klein «Station 1 · Ereignis» usw. in `type-caption`. Wortlaut sonst unverändert.
- Die Felder bekommen den Radius-Token des Profils für Karten, keine freien Werte.
- Leserichtung, Pfeile, Ansatzpunkt und schmale Ansicht bleiben.

### Abbildung 2 · Zwei Sichten (`v-bz-sichten`)

- Beide Sichten mit durchgezogener Oberkante. Der Unterschied steht in der Überschrift und in der Lage, nicht in der Linienart.

## 6. Seite `grenzen`

### Abbildung 1 · DEAR (`v-gr-dear`)

- «Schritt 1 von 4» bis «Schritt 4 von 4» werden zu «1» bis «4». Sonst bleibt alles.

## 7. `site.config.json` › `visualPlan`

- **Wirkung (`resonance`)** für jede Darstellung:
  - `v-vs-eisberg`: «Entlastung: Hinter einem heftigen Moment kann mehr stecken, und ich darf nachfragen, statt zu raten.»
  - `v-vs-anspannung`: «Wiedererkennen und Erlaubnis: So kann ein Gespräch kippen, und ich darf eine Pause machen.»
  - `v-vs-bewertungen`: «Entlastung: Ein harter Satz in einem schwierigen Moment ist nicht unser ganzes Album.»
  - `v-bz-schleife`: «Entlastung: Ich sehe, wie wir uns gegenseitig in eine Schleife bringen können, und wo ich anders reagieren kann.»
  - `v-bz-sichten`: «Verständnis: Beide Sichten können gleichzeitig wahr sein.»
  - `v-gr-dear`: «Sicherheit: Ich kann mein Anliegen in Ruhe vorbereiten.»
- **`v-vs-eisberg`:** `statement` «Eisberg an einer weichen Wasserlinie, eigene Linienzeichnung: Über dem Wasser stehen im Eisberg Wut, Vorwürfe, Lautwerden, Rückzug; darunter Angst, Scham, Trauer, Einsamkeit, Anspannung – oder ganz andere Erfahrungen. Daneben die Frage «Wie ist es gerade für dich?». Keine Zuordnung zwischen oben und unten.» `alternative` «Schmal: Zeichnung ohne Wörter, darunter beide Gruppen als Listen und die Frage; Textfassung über aria-describedby». `reason` am Ende ergänzen: «Überarbeitet nach dem Bildsprache-Audit (BS-2), Entscheid Fachstelle 10.10.2026.»
- **`v-vs-bewertungen`:** `format` «illustration». `statement` «Offenes Fotoalbum mit kleinen Fotos; zwei Fotos sind herausgenommen: ein helles mit Sonne und dem Satz «Du bist die Einzige, die mich versteht.», ein dunkles mit Regenwolke und dem Satz «Du bist wie alle anderen.».» `understood` «Dass ein einzelner heller oder dunkler Moment nicht die ganze Beziehung beschreibt: Das Album zeigt auf einen Blick, dass es mehr als zwei Bilder gibt.» `alternative` «Sätze als HTML-Text über der Zeichnung, schmal untereinander; Textfassung über aria-describedby». `reason` «Ersetzt das Pendel (Bildsprache-Audit BS-1: wirkte wie eine Physikskizze, schmal ohne Beschriftung). Das Bild nimmt das Wort «Momentaufnahme» aus dem Handout auf: ein Bild, eine Idee (Entscheid Fachstelle 10.10.2026).» `approvalStatus` «ausstehend».
- **`v-vs-mythen`:** `format` «text»; `statement`, `source`, `alternative` «–»; `understood` entfällt. `reason` «Text ist klarer: Annahme und Einordnung sind Paare ohne Bildform; als Liste im Abschnittstext statt als Abbildung (Bildsprache-Audit BS-3).»

## 8. Abgleich

- Jede Zeile, deren neue Fassung sich ändert, bekommt den Status «umformuliert (Bildsprache, 1h)» oder, wenn der Satz in die Vertiefung wandert, «verschoben»; der frühere Status steht in der Bemerkung («bis 1g: …»).
- Beschriftungen des Pendels («kleinerer Ausschlag», «unter starker Anspannung grösserer Ausschlag», «Links: …», «Mitte: …», «Rechts: …») entfallen mit der Bemerkung «Pendel ersetzt durch «Momentaufnahmen» (BS-1, Entscheid Fachstelle 10.10.2026)». Ihre Aussagen stehen im Kurztext und in der Vertiefung; die Zeilen der Handout-Sätze zeigen dorthin.
- Neue Sätze ohne Bestandszeile («Du bist die Einzige, die mich versteht.», «Du bist wie alle anderen.», «Wie ist es gerade für dich?» an der neuen Stelle, «Es wird wieder ruhiger.») als «neu (1h)».
- Zählung und Kopfnotiz («Korrektur 1h: …») nachführen.

## 9. Danach

- `node tools/build.mjs` ohne blockierende Befunde. `node tools/gate.mjs --selftest` 52/52.
- Bildschirmfotos aller Figuren auf `verstehen`, `beziehungen` und `grenzen` bei 1280 und 360 px und im Theme «kontrast» ansehen. Es darf keinen Überlauf geben, kein Wort darf über eine Form ragen, und schmal muss jede Zeichnung sichtbar bleiben.
- Selbstprüfung in `PRUEFBERICHT.md`: Tabelle je Punkt aus den Abschnitten 3 bis 7 mit «umgesetzt, Beleg». Nur den Abschnitt «Selbstprüfung der bauenden Sitzung» und die Tabellen im Abschnitt «Visualisierungs-Check» ändern.
- Der Pull Request bleibt Entwurf.
