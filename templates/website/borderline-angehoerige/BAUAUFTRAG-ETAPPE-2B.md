# Bauauftrag · Borderline-Website, Etappe 2b · «Zugewandt und klar sprechen» und «Krisen begleiten»

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Stand:** Etappe 1 und Etappe 2a sind fachlich freigegeben (`PRUEFBERICHT.md`, «Fachliche Freigabe der Fachstelle», Stand `e3f7187`).
- **Dieser Auftrag:** Teil 2b mit `kommunizieren` («Zugewandt und klar sprechen») und `krise` («Krisen begleiten»).
- **Entscheide der Fachstelle vom 10.10.2026:**
  - `kommunizieren` bekommt die Abbildung «Zwei Tassen» (Abschnitt 4, Anhang A).
  - `krise` bekommt **kein** Bild. Die drei Bereiche des Bestands stehen als kurze, klare Liste.
  - **Validierung:** «Aufmerksam sein» und «Spiegeln» stehen im Lesefluss. Die übrigen vier Stufen sind vollständig in einer Vertiefung.
  - **Gleich kurz bauen:** höchstens etwa **2500 Wörter im Lesefluss** je Seite (Abschnitt 2 d).
- **Früher entschieden:**
  - **Übungen** (`/uebungen`): Die interaktiven Szenarien werden durch zwei bis drei Beispiele «So könnte es klingen» ersetzt (Fachstelle, 08.10.2026, `UMBAUPLAN.md`).
  - **Suizidgedanken ansprechen:** Nach der Handlungsanleitung folgt der Verweis im Text (Profilentscheid 09.10.2026). Es gibt keine Notfallnummern und keinen Link auf eine Notfallseite.
- **Geändert werden nur:** die Seiten `kommunizieren` und `krise`, die Einstiege auf `index` (Abschnitt 6), `site.config.json` und der Abgleich. Die freigegebenen Seiten der Etappen 1 und 2a bleiben unverändert. `kommunizieren` und `krise` kommen nicht in die Hauptnavigation (`navLabel` bleibt `null`).

## 2. Regeln

Es gelten alle Regeln aus `BAUAUFTRAG-ETAPPE-2A.md`, Abschnitt 2 (Sprache, Inhalt und Absicherungen, Zuständigkeit, Bilder). Dazu kommen die Lehren aus Prüfrunde 2a und den Korrekturen 2a-K und 2a-2. Lies dafür im Prüfbericht die Abschnitte «Prüfrunde 2a» und die Selbstprüfungen 2a-K und 2a-2.

### a) Sprache und Begriffe

- **Einfache Sprache** wie auf `beziehungen`, `grenzen`, `rolle` und `selbstfuersorge`. Wo es passt: «Was Sie tun können» mit Beispielsatz aus dem Bestand.
- **Klares Subjekt:**
  - «Manche …», «Viele …» statt eines «Sie», das die Lesenden meinen könnte.
  - Gefühle nicht unterstellen. Besser: «Vielleicht merken Sie: …».
- **Begriffe:**
  - «betroffene Person», «andere Person» bei direkter Ansprache
  - «Anspannung», nicht «Alarm» oder «Stress»
  - «gemischte Gefühle»
  - «Pause» mit Zusatz, wo mehrdeutig
- **Seitennamen in Verweisen:**
  - Seiten in der Navigation mit ihrem Namen dort: «Verstehen», «Beziehungen», «Ihre Rolle», «Grenzen», «Auf sich achten».
  - Die übrigen mit ihrem Titel, etwa «Zugewandt und klar sprechen».
  - Verweissatz wie bisher: «… steht auf der Seite «…» im Abschnitt «…».», mit dem Titel der Zielstelle.

### b) Inhalt, Absicherungen und Verantwortung

- **Nichts verschwindet still.** Jede Aussage des Bestands bleibt, oder ihr Wegfall steht im Abgleich mit Grund.
- **Absicherungen** zu Person, Ursachen, Diagnose, Verlauf und Schutz bleiben wie im Bestand. Es gibt keine neue absolute Aussage.
- **Verantwortung** wie auf den freigegebenen Seiten. Kein «allein» bei Erkrankung, Behandlung oder Genesung. Bei Beziehung und Krise ist «nicht allein» richtig, etwa «Sie müssen eine Krise nicht allein bewältigen».
  - `verstehen`: «Angehörige sind nicht schuld an der Erkrankung und nicht für die Genesung verantwortlich.»
  - `beziehungen`: «Für den Verlauf der Erkrankung sind sie nicht verantwortlich, für die Beziehung nicht allein.»
  - `rolle`: «Für Behandlung und Genesung sind Sie nicht verantwortlich.»
- **Gleicher Wortlaut für gleiche Aussagen:** Was auf einer freigegebenen Seite schon steht, wird im selben Wortlaut aufgenommen oder verlinkt. Zum Beispiel: «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» (`verstehen`).
- **Verlinken statt wiederholen.** Das betrifft:
  - Anspannung (`verstehen#anspannung`)
  - DEAR und Grenzsätze (`grenzen`)
  - Schutz bei Gewalt (`grenzen#gewalt`)
  - Kinder (`rolle#kinder`)
  - STOPP (`selbstfuersorge#zu-viel`)
  - Beratung (`index#beratung`)

  **Ausnahme:** Sicherheitshinweise. Eine Handlungsanleitung für akute Lagen steht dort, wo sie gebraucht wird, nicht nur hinter einem Link.

### c) Zuständigkeit

- Keine Notfall- oder Telefonnummern, keine `tel:`-Links, kein Notfallblock.
- **Bestandslinks auf «Akute Hilfe und Notfallkontakte» und `/soforthilfe` entfallen.**
  - Wo der Bestand damit sagt, was in akuter Gefahr zu tun ist, folgt der Verweis im Text über den Platzhalter.
  - Er steht direkt nach der Handlungsanleitung, wie README «Verweis im Text» verlangt.
  - Jeder Verweis im Text braucht diese Stelle. Ein Verweis ohne Handlungsanleitung davor ist ein Fehler (Lehre aus P2a-F-4).
- **`sensitiveTopics`:** für `krise` mindestens «akute-krise», «selbstgefaehrdung» und «gewalt». Für `kommunizieren` nach Inhalt.
- **Keine Links auf Entwurfsseiten.** Gemeint sind `diagnose`, `behandlung`, `genesung`, `unterstuetzung`, `fragen`, `quellen` und `ueber`. `kommunizieren` und `krise` dürfen einander verlinken.

### d) Länge und Vertiefungen

- **Ziel:** höchstens etwa 2500 Wörter im Lesefluss je Seite, ohne Vertiefungen, gezählt wie in Prüfrunde 2a, C1.
- **Von Anfang an:**
  - Wiederholungen und gehäufte Hinweise («Angebot, keine Pflicht», «kein Versagen») bündeln.
  - Ergänzendes kommt in Vertiefungen.
- **Vertiefungen:** das Akkordeon des Profils wie in 2a-K, ohne Skript offen und vollständig gedruckt.
- **Immer im Lesefluss:** Schutz, Gewalt, akute Gefahr, Suizidalität, Gesundheitshinweise und die Kernaussagen.
- Wird das Ziel nicht erreicht, nennst du den Grund und die Zahl in der Selbstprüfung.

### e) Bilder

- **Nur eine Abbildung**, auf `kommunizieren` (Abschnitt 4). Alles andere ist Text; jeder Abschnitt hat eine `visualPlan`-Zeile.
- **Ausdrücklich als Text:**
  - die drei Bereiche auf `krise`
  - «Pause statt Streit» (Stabil, Warnstufe, Eskalation): Text mit Verweis auf die Anspannungskurve, keine zweite Kurve
  - «Wenn Gespräche kippen» (drei Schritte): nummerierte Liste
  - die sechs Stufen der Validierung, ohne Treppenbild
- **Die Abbildung** steht direkt nach dem ersten Absatz ihres Abschnitts. Die Quellenzeile steht am Ende des Abschnitts.

### f) Neue Sätze und Abgleich

- **Neue Sätze:** wie in 2a. Liste «Neue Sätze zur Freigabe» mit Ort und Art: neu, Verdichtung, Verweissatz, Auftrag.
- **Abgleich:**
  - Zwei neue Tabellen `abgleich/kommunizieren.md` und `abgleich/krise.md`.
  - Alle Zeilen der bisherigen Tabellen mit Ort «kommunizieren (Etappe 2)» (122) oder «krise (Etappe 2)» (4) bekommen den neuen Ort und die neue Fassung.
  - Status «neu (2b)», «umformuliert (2b)», «verschoben (Vertiefung, 2b)» usw. Erkläre neue Werte in `abgleich/README.md`.
  - `pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle. Alle Skripte erfassen die neuen Seiten.

## 3. Seite `kommunizieren` · «Zugewandt und klar sprechen»

**Bestand:**

- `kommunizieren.md` und `uebungen.md`
- die Handouts `zuhoeren-ohne-zustimmen`, `gespraeche-kippen`, `pause-statt-streit`, `wenn-worte-treffen` und `beispiel-dialog`
- die 122 vorgemerkten Zeilen, vor allem:
  - Gesprächsbeispiele aus `unterstuetzen--alltag.md`
  - die Handouts `grenzen-ohne-eskalation` und `spiegeln-statt-aufsaugen`
  - Teile von `/verstehen/beziehungen`, `/grenzen` und `grenzen-spickzettel`

**Gliederung (Vorschlag).** Begründe Abweichungen in der Selbstprüfung.

| Nr. | Abschnitt | Bestand |
| --- | --- | --- |
| 01 | Zuhören und die eigene Sicht behalten | «Kommunikation beginnt nicht mit Technik»; Bildunterschrift des Bestands «Zuhören, nachfragen und die eigene Sicht behalten dürfen gleichzeitig möglich sein.» als Satz |
| 02 | Anerkennen, ohne zuzustimmen, **mit Abbildung 1** | «Validierung: der wichtigste Ausgangspunkt»: «Aufmerksam sein» und «Spiegeln» sichtbar, die Stufen 3 bis 6 in einer Vertiefung; Handout `zuhoeren-ohne-zustimmen`; Handout `spiegeln-statt-aufsaugen` |
| 03 | Der richtige Moment | «Timing ist oft wichtiger als der perfekte Satz» (Eher jetzt, Eher später); Handout `pause-statt-streit` als Text mit Verweis auf `verstehen#anspannung` |
| 04 | Wenn Gespräche kippen | «Wenn Gespräche kippen», «Ein Satz darf reichen»; Handout `gespraeche-kippen` als nummerierte Liste; Handout `beispiel-dialog` in einer Vertiefung; Handout `grenzen-ohne-eskalation` |
| 05 | Wenn Worte treffen | Handout `wenn-worte-treffen`: vier belastende Aussagen mit möglichen Antworten. Das «Separate Sicherheitssignal» (Suizid) steht sichtbar, mit Verweis im Text und Verweissatz auf `krise` |
| 06 | So könnte es klingen | «Typische schwierige Situationen»; zwei bis drei Beispiele aus `uebungen.md` und den vorgemerkten Gesprächsbeispielen; die übrigen Szenarien im Abgleich «entfällt: ersetzt durch Beispiele (Entscheid 08.10.2026)» |
| 07 | Je nach Rolle | «Kommunikation aus verschiedenen Angehörigenrollen» in einer Vertiefung |

Was `beziehungen` oder `grenzen` schon sagen (etwa «Was die Beziehung stärken kann», DEAR, «Sätze für typische Situationen»), wird verlinkt, nicht wiederholt.

## 4. Abbildung 1 · Zuhören, ohne zuzustimmen (`kommunizieren` › Abschnitt 02)

Format `illustration` (Muster D), gebaut wie «Ein freier Abend» mit `.puk-vis-scene`.

- **Titel:** «Abbildung 1 · Zuhören, ohne zuzustimmen»
- **Kernaussage:** «Sie können ein Gefühl anerkennen, ohne die Deutung zu übernehmen.» Grundlage `zuhoeren-ohne-zustimmen`: «Sie können Gefühle anerkennen, ohne die Interpretation zu übernehmen.»
- **Kurztext:** «Sie können sagen, dass der Schmerz echt ist, ohne die ganze Erklärung zu teilen oder pauschale Schuld zu übernehmen.» Grundlage ist die Merkhilfe des Handouts.
- **Sätze in der Szene:**
  - links `p.puk-vis-scene__say`: «Du verstehst mich sowieso nicht.»
  - rechts `__say--b`: «Vielleicht verstehe ich nicht alles. Wenn du möchtest, sag mir, was dir gerade besonders wichtig ist.»
  - Beide stehen im Handout `wenn-worte-treffen`.
- **Zeichnung:** Anhang A, von der Fachstelle gewählt.
  - Zwei Tassen stehen sich auf einem Tisch gegenüber, im Stil von «Ein freier Abend».
  - **Darfst du verfeinern:** Die Transformationen darfst du in feste Pfade umrechnen. Den Bildausschnitt darfst du anpassen.
  - **Fest bleibt:** zwei gleich grosse Tassen, gleichwertig, auf demselben Tisch.
  - **Technik:** nur Profil-Klassen, keine Hexwerte, keine `style`-Attribute.
  - Schmal stehen die Sätze untereinander über der Zeichnung.
- **Kurzbeschreibung** (`p.puk-sr`): «Zeichnung: Zwei Tassen Tee stehen sich auf einem Tisch gegenüber. Über der linken steht der Satz «Du verstehst mich sowieso nicht.», über der rechten «Vielleicht verstehe ich nicht alles. Wenn du möchtest, sag mir, was dir gerade besonders wichtig ist.»»
- **Vertiefung «Grenzen des Bildes»**, aus `wenn-worte-treffen`:
  - «Von aussen lässt sich nicht sicher erkennen, was hinter einem Satz steht.»
  - «Sie dürfen zugleich entscheiden, wie viel Sie in diesem Moment aufnehmen können.»
- **Quelle:** «Eigene didaktische Darstellung nach den Handouts «Zuhören ohne Zustimmen» und «Wenn Worte treffen»; Bezug: Fruzzetti (2006); Mason und Kreger (2014)»
- **`visualPlan`:**
  - `resonance`: «Wiedererkennen und Entlastung: Ich kann zuhören und anerkennen, ohne mich zu verteidigen und ohne zuzustimmen.»
  - `approvalStatus`: «ausstehend»

## 5. Seite `krise` · «Krisen begleiten»

**Bestand:**

- `unterstuetzen--krise.md`
- das Handout `krisenkommunikation`
- die 4 vorgemerkten Zeilen

**Gliederung (Vorschlag).** Begründe Abweichungen in der Selbstprüfung.

| Nr. | Abschnitt | Bestand |
| --- | --- | --- |
| 01 | Wenn Belastung zunimmt | Kopf («Sie müssen eine Krise nicht allein deeskalieren oder bewältigen …»). Die drei Bereiche «Eigene Mittel tragen noch», «… reichen knapp» und «… reichen nicht mehr» stehen als Liste, je mit «Eher hilfreich». Sichtbar dazu «Die Bereiche sind keine Sicherheitsbewertung» und «Kein Bereich bedeutet automatisch «sicher» oder «gefährlich».» |
| 02 | Während einer Krise | «Was während einer Krise helfen kann»: Sicherheit prüfen, mit wenigen Worten sprechen usw. Nach den Handlungsanleitungen für akute Gefahr folgt der Verweis im Text |
| 03 | Was Sie sagen können | «Was Sie in der Krise sagen können»: Präsenz zeigen, Gefühle validieren (Verweis auf `kommunizieren`), Hoffnung vermitteln, konkrete Hilfe anbieten; Handout `krisenkommunikation` (drei Schritte, Standardsatz, Ausstiegssätze) |
| 04 | Wenn Suizidgedanken ein Thema sind | «Bei Suizidgedanken direkt ansprechen», mit Verweis im Text. Wortlaut wie `verstehen`, wo dieselbe Aussage steht |
| 05 | Was Sie eher vermeiden | «Was Sie in der Krise vermeiden sollten» |
| 06 | Nach der Krise | «Nach der Krise: Verarbeitung und Neubeginn» (für die betroffene Person, für Sie, gemeinsame Nachbesprechung, Vertrauenswiederaufbau, drei mögliche Anliegen, Früherkennung). Ergänzendes kommt in Vertiefungen |
| 07 | Wenn Belastung oder Gefahr bleibt | «Hinweise: wenn Belastung oder Gefahr bestehen bleibt». Kinder: Verweis auf `rolle#kinder`; krisenbezogene Sätze bleiben sichtbar |

**Fachlich heikel, Wortlaut des Bestands halten:**

- Sicherheit prüfen. Den Zugang zu Medikamenten oder gefährlichen Gegenständen begrenzen Sie «nur ohne Eigengefährdung, möglichst gemeinsam und nach professioneller Anleitung». Nichts aus der Hand oder gegen Widerstand wegnehmen, nicht körperlich eingreifen.
- Suizidgedanken direkt ansprechen.
- «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» (`verstehen`)

Diese Stellen kommen in die Selbstprüfung unter «Zur Prüfung durch die Fachstelle», mit Bestandszitat.

## 6. `index`, `site.config.json`

- **`index` › `einstiege`:**
  - Nach «Auf sich achten» kommt ein Eintrag für `kommunizieren.html`: «Ich weiss nicht, was ich sagen soll, wenn es schwierig wird.»
  - Beschreibung: «Zugewandt und klar sprechen: zuhören, nachfragen, eigene Anliegen nennen und Pausen machen.» Sie folgt dem Lernweg der alten Startseite.
  - Der Anliegen-Satz ist neu.
  - **Platzhalter neu:** «Weitere Einstiege folgen: Genesung · Unterstützung finden.»
  - Für `krise` gibt es keinen Einstieg (`UMBAUPLAN.md`). Sonst bleibt `index` unverändert.
- **`site.config.json`:** `kommunizieren` und `krise` bekommen:
  - `status` «published»
  - `primaryTask` und `description`
  - passende `sensitiveTopics`
  - einen `visualPlan` mit einer Zeile pro Abschnitt

  `navLabel` bleibt `null`, und die Seitenplatzhalter entfallen.

## 7. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: erwartet 1 × `visual-approval`, 8 × `placeholder-approval` und 1 × `review-report`. Weicht das ab, nenne den Grund.
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Bildschirmfotos:** die Abbildung und jede Vertiefung bei 1280 und 360 px und im Theme «kontrast», ansehen.
- **Prüfung der neuen Seiten:**
  - kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom
  - Tastatur und Fokus
  - Druckansicht
  - Kontraste
  - `bedienung.mjs`
- **Selbstprüfung** in `PRUEFBERICHT.md`, nur im Abschnitt «Selbstprüfung der bauenden Sitzung». Setze einen Block «Etappe 2b» über den obersten Block. Er enthält:
  - Stand je Abschnitt dieses Auftrags, mit Beleg
  - Wörter im Lesefluss je Seite und Abschnitt (Zählweise C1)
  - den Visualisierungs-Check 1–17 für die Abbildung
  - jeden Verweis im Text mit der Handlungsanleitung davor
  - die Liste «Neue Sätze zur Freigabe»
  - die Liste «Zur Prüfung durch die Fachstelle» (Abschnitt 5)
  - Vorschläge für Verweise von freigegebenen Seiten auf die neuen Seiten, ohne diese Seiten zu ändern
- **Keine Änderung** an den freigegebenen Seiten ausser den Einstiegen auf `index`.
- Der Pull Request bleibt Entwurf.

## Anhang A · Zeichnung «Zwei Tassen» (Skizze, von der Fachstelle gewählt)

```html
<svg class="puk-vis-scene__art" viewBox="0 60 640 200" aria-hidden="true" focusable="false">
<path class="puk-vis-scene__ln puk-vis-scene__soft" d="M70 186 C230 180 410 180 572 186 C580 186 585 190 588 196 L616 228 C620 234 616 240 608 240 C420 248 220 248 32 240 C24 240 20 234 24 228 L54 196 C57 190 62 186 70 186 Z"/>
<g transform="translate(468,0) scale(-1,1)">
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M291 132 C282 120 300 112 291 98 C285 90 294 84 290 76"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M315 130 C307 117 324 109 316 95"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M270 150 C269 176 271 200 279 213 C287 222 321 222 329 213 C337 200 339 176 338 150 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M270 150 C270 143 338 143 338 150 C338 157 270 157 270 150 Z"/>
<path class="puk-vis-scene__ln" d="M338 164 C361 161 363 197 335 197"/>
</g>
<g transform="translate(170,0)">
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M291 132 C282 120 300 112 291 98 C285 90 294 84 290 76"/>
<path class="puk-vis-scene__ln puk-vis-scene__ln--thin" d="M315 130 C307 117 324 109 316 95"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M270 150 C269 176 271 200 279 213 C287 222 321 222 329 213 C337 200 339 176 338 150 Z"/>
<path class="puk-vis-scene__ln puk-vis-scene__paper" d="M270 150 C270 143 338 143 338 150 C338 157 270 157 270 150 Z"/>
<path class="puk-vis-scene__ln" d="M338 164 C361 161 363 197 335 197"/>
</g>
</svg>
```
