# Korrekturauftrag · Borderline-Website, Etappe 1g

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheid

- Die Fachstelle hat `verstehen` und `grenzen` nach Auftrag 1f gelesen. Sie ist bis auf zwei Stellen einverstanden.
- **`verstehen`, Abbildung 2:** Zwei Sätze sind schwer lesbar, weil Tätigkeiten als Hauptwörter stehen («Zuhören, Abwägen und Impulse steuern können …»). **Entscheid:** Beide Sätze werden in einfacher Sprache neu gefasst. Die Absicherung («kann») bleibt.
- **`grenzen`, Abbildung 1 «Die Brücke mit Geländer»:** Die Fachstelle beurteilt die Zeichnung als zu technisch und für das Thema unpassend. Die Erklärungen findet sie zu abstrakt. **Entscheid der Fachstelle (10.10.2026):** Die Abbildung entfällt. Abschnitt 02 wird ein einfacher Text. Das Bild der Brücke steht dort nur noch in einem Satz. Dazu kommen zwei Beispielsätze aus dem Handout «Die Brücke mit Geländer». DEAR wird zu Abbildung 1.

## 2. Regeln

- Die Texte in Abschnitt 3 gelten so, wie sie dort stehen. Keine eigenen Formulierungen, nichts weglassen. Was nicht genannt ist, bleibt.
- **«Was Sie tun können»** wie bisher: `<p><strong>Was Sie tun können:</strong> …</p>`. Beispielsätze stehen im Satz, wie in 07 (`Zum Beispiel: «…»`). Kein neues CSS.
- **Abgleich:** wie in Abschnitt 4. `node abgleich/pruefe-abgleich.mjs` muss mit 0 Zeilen ohne Fundstelle laufen.

## 3. Änderungen

### Seite `verstehen` · Abbildung 2 (Anspannungskurve), Liste der Stellen

- **Stelle 1 «Wir können sprechen.»** Erster Satz statt «Zuhören, Abwägen und Planen können leichter fallen.»:
  «Wenn die Anspannung niedriger ist, kann es leichter fallen, zuzuhören, nachzudenken und zu planen.»
  Der zweite Satz bleibt («Ob ein klärendes Gespräch gewünscht ist, entscheiden beide.»).
- **Stelle 3 «Es ist gerade zu viel.»** Erster Satz statt «Zuhören, Abwägen und Impulse steuern können vorübergehend schwerer werden.»:
  «Dann kann es vorübergehend schwerfallen, zuzuhören, nachzudenken und sich zurückzuhalten.»
  Der zweite Satz bleibt («Die Anspannung kann sich auch als Rückzug oder Schweigen zeigen.»).
- Sonst bleibt die Abbildung unverändert: Zeichnung, Kurztext, «Was hilft», Ansatzpunkt, Textfassung und Quellenzeile.

### Seite `grenzen` · Abschnitt 02 (`id="bruecke"` bleibt)

**Unverändert bleiben:** Oberzeile «02 · Grenze und Kontakt», Eintrag im Wegweiser «Grenze und Kontakt», die `id` des Abschnitts.

**Entfällt ganz:** die Figur `v-gr-bruecke`. Das sind die Bezeichnung, die Kernaussage, der Kurztext, beide SVG, die Beschriftungen, die Liste der drei Teile, die Vertiefung «Grenzen des Bildes» und die Bildlegende. Der bisherige Abschnittstext «Das Bild der Brücke beschreibt eine Haltung: …» entfällt ebenfalls.

**Neu, in dieser Reihenfolge, als gewöhnlicher Abschnittstext (`puk-longform__copy`):**

- **H2** (statt «Kontakt braucht Geländer»): «Kontakt halten, ohne immer verfügbar zu sein»
- Absatz: «Ein Geländer gibt Halt, damit man sicher über eine Brücke gehen kann. Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht.»
- Absatz: «Kontakt kann viel Nähe bedeuten, eine kurze Nachricht oder auch Abstand. Sie entscheiden, welcher Kontakt für Sie sicher und tragbar ist.»
- Absatz: «Eine Grenze ist keine Strafe und kein Liebesentzug. Sie beschreibt, was für Sie möglich ist. Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden.»
- Absatz: «Sie müssen die Beziehung nicht allein tragen. Absprachen, Pausen, Fachpersonen und andere Vertrauenspersonen können mittragen.»
- **Was Sie tun können:** «Sagen Sie früh, kurz und ruhig, was für Sie möglich ist. Zum Beispiel: «Ich bin da – und ich brauche einen ruhigen Ton.» Oder: «Das kann ich nicht allein tragen. Wir holen Unterstützung dazu.»»
- Quellenzeile wie in Abschnitt 01: `<p><strong>Bezugspunkte:</strong> Hoffman et al. (2005); NICE CG78 (2009); Linehan; Mason und Kreger (2014); Stand by You / Sotomo (2024).</p>`

### Seite `grenzen` · Abschnitt 05 (DEAR)

- «Abbildung 2 · DEAR in vier Schritten» wird zu «Abbildung 1 · DEAR in vier Schritten». Sonst bleibt alles unverändert.

### `site.config.json` › `pages` › `grenzen` › `visualPlan` › `v-gr-bruecke`

- `format`: «text»; `statement`, `source`, `alternative`: «–»; das Feld `understood` entfällt.
- `reason`: «Text ist klarer: Die Fachstelle hat die Zeichnung als zu technisch und die Erklärungen als zu abstrakt beurteilt (Durchsicht 10.10.2026). Das Bild der Brücke steht als ein Satz im Text; zwei Beispielsätze aus dem Handout zeigen, was Angehörige tun können (Korrektur 1g).»
- `approvalStatus` bleibt «ausstehend». Die übrigen Felder bleiben.

### `borderline.css`

- Entferne die Regeln, die nur der Brücke dienten: alle Selektoren mit `.bl-fig--bruecke` sowie `.bl-fig__narrow{display:none}`. Prüfe vorher mit `grep`, dass `bl-fig__wide` und `bl-fig__narrow` auf keiner anderen Seite vorkommen.
- `.bl-fig__label` und `.bl-parts` bleiben, weil `verstehen` sie braucht. Bleibt eine Media Query leer, entferne sie.

## 4. Abgleich

Bei jeder geänderten Zeile steht der frühere Status in der Bemerkung («bis 1f: …»). Die Bemerkung nennt den neuen Ort («Abschnittstext» statt «Abbildung 1 …»). Zählung und Kopfnotiz («Korrektur 1g: …») nachführen.

**`abgleich/verstehen.md`**

| Nr | Status | Neue Fassung |
| ---: | --- | --- |
| 236 | umformuliert (einfache Sprache, 1g) | Dann kann es vorübergehend schwerfallen, zuzuhören, nachzudenken und sich zurückzuhalten. |
| 238 | umformuliert (einfache Sprache, 1g) | Wenn die Anspannung niedriger ist, kann es leichter fallen, zuzuhören, nachzudenken und zu planen. |
| 273, 285, 286, 426 | bleibt | Dann kann es vorübergehend schwerfallen, zuzuhören, nachzudenken und sich zurückzuhalten. |

**`abgleich/grenzen.md`** (Ort neu überall `grenzen#bruecke`)

| Nr | Status | Neue Fassung | Bemerkung (Kern) |
| ---: | --- | --- | --- |
| 390 | umformuliert (einfache Sprache, 1g) | Ein Geländer gibt Halt, damit man sicher über eine Brücke gehen kann. | |
| 395 | umformuliert (einfache Sprache, 1g) | Kontakt halten, ohne immer verfügbar zu sein | H2 |
| 396 | umformuliert (einfache Sprache, 1g) | Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht. | |
| 397 | umformuliert (einfache Sprache, 1g) | Sie müssen die Beziehung nicht allein tragen. | zweiter Teil in «Sie entscheiden, welcher Kontakt für Sie sicher und tragbar ist.» |
| 399 | umformuliert (einfache Sprache, 1g) | Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht. | Merksatz; bis 1f H2 und Kernaussage |
| 400 | umformuliert (einfache Sprache, 1g) | Sie entscheiden, welcher Kontakt für Sie sicher und tragbar ist. | |
| 401 | umformuliert (einfache Sprache, 1g) | Kontakt kann viel Nähe bedeuten, eine kurze Nachricht oder auch Abstand. | |
| 402 | umformuliert (einfache Sprache, 1g) | Sie entscheiden, welcher Kontakt für Sie sicher und tragbar ist. | bis 1f: entfällt (W2-2) |
| 403 | umformuliert (einfache Sprache, 1g) | Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht. | |
| 404 | umformuliert (einfache Sprache, 1g) | Eine Grenze ist keine Strafe und kein Liebesentzug. | |
| 405 | gekürzt | Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht. | «beide Seiten vor weiterer Eskalation» entfällt mit Abbildung 1 (Entscheid Fachstelle 10.10.2026) |
| 406 | umformuliert (einfache Sprache, 1g) | Sie müssen die Beziehung nicht allein tragen. | |
| 407 | umformuliert (einfache Sprache, 1g) | Absprachen, Pausen, Fachpersonen und andere Vertrauenspersonen können mittragen. | «Selbstschutz» entfällt hier |
| 413 | umformuliert (einfache Sprache, 1g) | Sagen Sie früh, kurz und ruhig, was für Sie möglich ist. | Was Sie tun können |
| 414 | umformuliert (einfache Sprache, 1g) | Sagen Sie früh, kurz und ruhig, was für Sie möglich ist. | dazu `saetze`: «Ihre Grenze ist auch berechtigt, wenn Sie nicht vollkommen ruhig sind.» |
| 415, 424 | bleibt | Sie dürfen ein Gespräch oder, wenn nötig, einen Kontakt beenden. | Abschnittstext; bis 1f: Abbildung 1, Vertiefung |
| 416 | bleibt | Sie müssen die Beziehung nicht allein tragen. | |
| 417 | bleibt | Sie entscheiden, welcher Kontakt für Sie sicher und tragbar ist. | |
| 418 | übernommen | wörtlich | Was Sie tun können; bis 1f: entfällt (W2-2); wieder aufgenommen, Entscheid Fachstelle 10.10.2026 |
| 421 | übernommen | wörtlich | wie 418; `saetze` bleibt zusätzlicher Ort |
| 422 | übernommen | wörtlich | wie 418; bis 1f: umformuliert (1f) in `saetze` |
| 423 | umformuliert (einfache Sprache, 1g) | Grenzen können Kontakt auf ähnliche Weise schützen: Sie zeigen, was geht und was nicht. | |
| 425 | umformuliert (einfache Sprache, 1g) | Sie beschreibt, was für Sie möglich ist. | bewertet keinen Menschen → beschreibt, was für Sie möglich ist |
| 428–432 | bleibt | Bezugspunkte: Hoffman et al. (2005); NICE CG78 (2009); Linehan; Mason und Kreger (2014); Stand by You / Sotomo (2024). | Quellenzeile im Abschnitt; bis 1f: Bildlegende Abbildung 1 |

- Die Zeilen 408–412 bleiben «entfällt».
- Dazu kommt eine Notiz unter der Kopfnotiz: «Ab 1g ist DEAR Abbildung 1. Ältere Bemerkungen nennen sie Abbildung 2.» Die Bemerkungen der DEAR-Zeilen bleiben unverändert.

## 5. Danach

- `node tools/build.mjs` ohne blockierende Befunde. `node tools/gate.mjs --selftest` 51/51.
- Bildschirmfotos von `verstehen` (Abbildung 2) und `grenzen` (Abschnitte 02 und 05) bei 1280 und 360 px ansehen. Es darf keinen Überlauf geben.
- Selbstprüfung in `PRUEFBERICHT.md`: eine Tabelle mit «umgesetzt, Beleg» je Punkt aus Abschnitt 3. Dazu `grep` als Beleg, dass «Brücke mit Geländer», «Fahrbahn», «Pfeiler» und `bl-fig--bruecke` nicht mehr in `grenzen.html` und `borderline.css` stehen. Nur den Abschnitt «Selbstprüfung der bauenden Sitzung» ändern.
- Der Pull Request bleibt Entwurf.
