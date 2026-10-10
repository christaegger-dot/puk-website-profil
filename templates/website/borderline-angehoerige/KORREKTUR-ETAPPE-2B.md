# Korrekturauftrag · Borderline-Website, Etappe 2b · nach der Prüfrunde 2b

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

> **Entwurf zur Bestätigung durch die Fachstelle.** Die Entscheide in Abschnitt 1 folgen den Empfehlungen der Prüfrunde 2b. Vor der Übergabe an die bauende Sitzung bestätigt oder ändert die Fachstelle sie; danach wird dieser Kasten gelöscht.

## 1. Anlass und Entscheide

- **Prüfrunde 2b** (`PRUEFBERICHT.md`, Abschnitt «Prüfrunde 2b», Commit `778b2f3`, geprüfter Stand `26af566`).
- **Entscheide der Fachstelle** (Fragen P2b-F-1 bis -12):
  - **P2b-F-1:** Für den Anruf in akuter Gefahr steht auf `krise` überall «Notruf», ohne Nummer. «Leitstelle» und «Rettungsdienst» entfallen. In `danach` und `sagen` kommt je ein Verweis im Text dazu; in `sagen` werden die zwei Sätze zur Bedrohung zu einem (Abschnitt 3).
  - **P2b-F-2:** Die Handlungsanleitung in `belastung` nennt auch die Unsicherheit über die Dringlichkeit (Abschnitt 3).
  - **P2b-F-3:** «Was Sie in einer Krise vermeiden sollten», ohne «eher» (Abschnitt 4).
  - **P2b-F-4:** WHO (2026) kommt in die Quellenzeile von `suizid`. Beide Sätze zum direkten Fragen bleiben. Ort und Wortlaut von «Bleiben Sie bei der Person nur, soweit dies für Sie sicher möglich ist.» sind bestätigt.
  - **P2b-F-5:** «Pause statt Streit» übernimmt die drei Sätze der Anspannungskurve als Begriffe (Abschnitt 5).
  - **P2b-F-6:** Der Satz zur Fachstelle bleibt. «Diese Seite ersetzt keine professionelle Krisenberatung.» entfällt. Die Handlungsanleitung steht als erster Absatz von `belastung` (Abschnitt 3).
  - **P2b-F-7:** Die betroffene Person klärt die Nachsorge mit dem Behandlungsteam; zwei Sätze in Vertiefungen und «Fachteam» werden angeglichen (Abschnitt 4).
  - **P2b-F-8:** `krise` › `sagen` behält den Standardsatz und die Ausstiegssätze. Für die Schritte verweist der Abschnitt auf `kommunizieren` › «Wenn Gespräche kippen» (Abschnitt 3).
  - **P2b-F-9:** «Linehan beschreibt fünf aufeinander aufbauende Formen und als sechste Form radikale Echtheit.» entfällt, ausser die Fachstelle bestätigt die Zuschreibung vor der Übergabe an der Quelle (Abschnitt 5).
  - **P2b-F-10:** bestätigt ohne Änderung: Medikamente und gefährliche Gegenstände im Wortlaut des Bestands; «Grenzen beim Geld sind oft besonders schwer, …»; «Dafür sind Sie nicht verantwortlich, auch wenn Sie versuchen, die Lage zu beruhigen.»; der Absatz zur Selbstverletzung in `suizid`.
  - **P2b-F-11 (Teil):** Die zwei Tassen rücken näher zur Tischmitte (Abschnitt 6).
  - **P2b-F-12:** Kürzungen K-K-a1, K-K-a2 und K-K-a3; K-C-a1 mit P2b-F-6. K-K-a4 und K-K-b1 nicht (Abschnitt 5).
- **Offen bis zur Freigabe:** P2b-F-11 a (die neuen Sätze) und die fachliche Freigabe von «Zwei Tassen». Die Fachstelle liest die Seiten nach dieser Korrektur.
- **Geändert werden nur** `kommunizieren`, `krise`, `site.config.json` (Plan) und der Abgleich. Die Seiten der Etappen 1 und 2a und `index` bleiben unverändert.

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen.
- **Verweis im Text:** nur über den Platzhalter `<p data-responsibility-inline></p>`, direkt nach der Handlungsanleitung, nicht in Figur oder Vertiefung, höchstens einer je Abschnitt.
- **Ein Satz steht an mehreren Stellen** (Text, `p.puk-sr`, Plan, Liste der neuen Sätze): Er wird überall gleich geändert.
- **Keine weiteren Änderungen.** Was dieser Auftrag nicht nennt, bleibt. Fällt dir etwas auf, nennst du es in der Selbstprüfung.
- **Abgleich:**
  - Jede geänderte Zeile bekommt «umformuliert (2b-K)», «zusammengeführt (2b-K)», «entfällt (2b-K)» oder «neu (2b-K)» und eine Bemerkung mit der Nummer der Frage (z. B. «P2b-F-1»).
  - Neue Statuswerte erklärst du in `abgleich/README.md`.
  - `node abgleich/pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle.

## 3. `krise`: Hilfe holen und Verweise im Text (P2b-F-1, -2, -6, -8)

### a) `belastung`

| Ort | bisher | neu |
| --- | --- | --- |
| erster Absatz | «Diese Seite ersetzt keine professionelle Krisenberatung. Die Fachstelle Angehörigenarbeit bietet Beratung und Orientierung, aber keine Krisenintervention. Sie können jederzeit direkt Hilfe holen. Diese Seite ist keine notwendige Vorstufe.» | siehe Reihenfolge unten |
| Handlungsanleitung | «Bei unmittelbarer Gefahr holen Sie sofort Hilfe und schützen sich selbst.» | «Bei unmittelbarer Gefahr oder wenn Sie nicht einschätzen können, wie dringend es ist, holen Sie sofort Hilfe und schützen sich selbst.» |
| Satz über die Bereiche | «Sie bewerten keine Diagnose und sagen nicht voraus, wie sich eine Situation entwickeln wird.» | «Die Bereiche bewerten keine Diagnose und sagen nicht voraus, wie sich eine Situation entwickeln wird.» |
| Absatz nach den Bereichen | «Ein unbekannter Plan bedeutet keine Sicherheit.» | «Wenn Sie nicht wissen, ob die Person einen Plan hat, bedeutet das keine Sicherheit.» |

**Reihenfolge am Anfang von `belastung`:**

1. die Handlungsanleitung (neu, Tabelle)
2. der Verweis im Text (Platzhalter)
3. «Die Fachstelle Angehörigenarbeit bietet Beratung und Orientierung, aber keine Krisenintervention. Sie können jederzeit direkt Hilfe holen. Diese Seite ist keine notwendige Vorstufe.»
4. weiter wie bisher mit «Die drei Bereiche unten …»

«Diese Seite ersetzt keine professionelle Krisenberatung.» entfällt. Im Abgleich bekommen c29 und c65 «zusammengeführt (2b-K)» mit dem Satz zur Fachstelle und dem Hinweis in der Fusszeile.

### b) `waehrend`

Unverändert. «Bei unmittelbarer Gefahr holen Sie Hilfe über den Notruf.» bleibt mit dem Verweis im Text.

### c) `sagen`

1. **Neu nach dem ersten Absatz** («Sie müssen keine perfekten Worte finden. …»), vor der Begriffsliste:
   - «Bei Bedrohung oder Gewalt gehen Sie auf Abstand, bringen sich in Sicherheit und holen Hilfe über den Notruf.»
   - direkt danach der Verweis im Text (Platzhalter)
2. **«Da sein»:** «Bei Bedrohung bringen Sie sich in Sicherheit und informieren die Leitstelle.» entfällt. «Bieten Sie nur Nähe oder Erreichbarkeit an, die für Sie möglich und sicher ist.» bleibt.
3. **«Wenn ein Gespräch kippt»** lautet neu:
   - «Dann helfen Verbindung, kurze Orientierung und eine klare Grenze oft mehr als langes Argumentieren.»
   - «Ein Satz kann so klingen: «Ich sehe, dass du gerade sehr angespannt bist. Und gleichzeitig gilt: So kann ich nicht weiterreden. Ich beende das Gespräch jetzt.»»
   - «Zum Aussteigen reicht: «Ich beende das Gespräch jetzt. Ich entscheide später, ob und wann ich wieder ansprechbar bin.»»
   - «Wie Sie ein kippendes Gespräch verlangsamen und eine Grenze in drei Teilen sagen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen».» (Link `kommunizieren.html#kippen`; ersetzt den bisherigen Verweissatz)
4. **Entfallen:** «Zuerst stellen Sie Verbindung her, dann halten Sie Kontakt, dann nennen Sie Ihre Grenze und den nächsten Schritt.», die nummerierte Liste «Verbinden / Kontakt / Grenze und Plan» und «Bei Bedrohung oder Gewalt gehen Sie auf Abstand und holen Hilfe.» (dieser Satz ist in Punkt 1 zusammengeführt).
5. **Abgleich:** c106 und c279 «zusammengeführt (2b-K)» mit dem Satz aus Punkt 1; c252 und c254 bis c261 «entfällt (2b-K): verlinkt auf `kommunizieren#kippen`, P2b-F-8»; c263 bekommt die neue Fassung «Ein Satz kann so klingen:», c303 den neuen Verweissatz aus Punkt 3.

### d) `danach`

| bisher | neu |
| --- | --- |
| «Bei möglicher unmittelbarer Lebensgefahr rufen Sie den Rettungsdienst.» | «Bei möglicher unmittelbarer Lebensgefahr holen Sie sofort Hilfe über den Notruf.» |

Direkt danach steht der Verweis im Text (Platzhalter), vor «Für die betroffene Person».

### e) Ergebnis

Auf `krise` stehen danach sechs Verweise im Text, in `belastung`, `waehrend`, `sagen`, `suizid`, `danach` und `bleibt`. Jeder steht direkt nach einer Handlungsanleitung. Auf der Seite kommen «Leitstelle» und «Rettungsdienst» nicht mehr vor.

## 4. `krise`: weitere Stellen (P2b-F-3, -4, -7)

### a) `vermeiden` (P2b-F-3)

| Ort | bisher | neu |
| --- | --- | --- |
| Titel (h2) | «Was Sie in einer Krise eher vermeiden» | «Was Sie in einer Krise vermeiden sollten» |
| Einleitung der Liste | «In einer Krise hilft es eher nicht,» | «In einer Krise sollten Sie vermeiden,» |

Die sechs Listenpunkte bleiben. Kapitelübersicht und Kicker («Was Sie vermeiden») bleiben.

### b) `suizid` (P2b-F-4)

In der Quellenzeile wird der Schluss «… keine Vorhersage durch pauschale Risikostufen.» zu «… keine Vorhersage durch pauschale Risikostufen; WHO, Suicide: Questions and answers (2026), direktes Fragen löst nach heutigem Wissensstand keine suizidale Handlung aus.». Der Text des Abschnitts bleibt.

### c) Nachsorge (P2b-F-7)

| Ort | bisher | neu |
| --- | --- | --- |
| Vertiefung «Drei mögliche Anliegen», «Unterstützung: Wer ist wofür zuständig?» | «Fachliche Nachsorge und erreichbare Kontakte werden mit dem Behandlungsteam geklärt.» | «Fachliche Nachsorge und erreichbare Kontakte klärt die betroffene Person mit dem Behandlungsteam.» |
| Vertiefung «Früh erkennen und Absprachen treffen», Listenpunkt | «Vereinbarte Hilfe überprüfen: mit dem Behandlungsteam klären, welche professionelle Unterstützung vorgesehen und erreichbar ist» | «Vereinbarte Hilfe überprüfen: Die betroffene Person klärt mit dem Behandlungsteam, welche professionelle Unterstützung vorgesehen und erreichbar ist, wenn sie möchte, gemeinsam mit Ihnen.» |
| `bleibt` | «Weitere Behandlungsschritte klärt die betroffene Person mit dem Fachteam.» | «Weitere Behandlungsschritte klärt die betroffene Person mit dem Behandlungsteam.» |

«Welche fachliche Nachsorge nötig ist, klärt die betroffene Person mit dem Behandlungsteam. …» in `danach` bleibt.

## 5. `kommunizieren` (P2b-F-5, -9, -12)

### a) «Pause statt Streit» in `moment` (P2b-F-5)

| Ort | bisher | neu |
| --- | --- | --- |
| Einleitung | «Manche Angehörige achten im Gespräch auf drei Lagen. Die Begriffe sind eine Orientierung, keine festen Stufen. Sie erlauben keine sichere Beurteilung, wie es einem Menschen innerlich geht. Achten Sie auch in einem ruhig wirkenden Gespräch auf Ihre eigene Belastung und Ihre Grenze.» | «Drei Stellen der Anspannungskurve können eine Orientierung geben, ob ein Gespräch gerade trägt. Diese Stellen sind keine festen Stufen und erlauben keine sichere Beurteilung, wie es einem Menschen innerlich geht. Achten Sie auch in einem ruhig wirkenden Gespräch auf Ihre eigene Belastung und Ihre Grenze.» |
| Begriff 1 | «Stabil» | «Wir können sprechen.» |
| Begriff 2 | «Warnstufe» | «Es wird eng.» |
| Begriff 3 | «Eskalation» | «Es ist gerade zu viel.» |
| Beschreibung zu Begriff 3 (K-K-a1) | «… Stoppen Sie, und schaffen Sie Abstand: «Ich unterbreche das Gespräch jetzt. Ob und wann ich wieder ansprechbar bin, entscheide ich später.»» | «… Stoppen Sie, und schaffen Sie Abstand.» |

Die übrigen Beschreibungen und Beispielsätze bleiben, auch «Ich merke, es wird schwierig. Ich unterbreche das Gespräch jetzt.». Der Verweissatz auf `verstehen#anspannung` bleibt nach der Liste. Den Ausstiegssatz trägt «Ein Satz darf reichen» in `kippen`.

**Ebenfalls in `moment`:**

| bisher | neu |
| --- | --- |
| «Zeitliche Grenzen wirken am besten, wenn Sie sie in einer ruhigen Situation ankündigen, nicht mitten in einem Konflikt.» | «Grenzen dafür, wie lange oder wann Sie sprechen, wirken am besten, wenn Sie sie in einer ruhigen Situation ankündigen, nicht mitten in einem Konflikt.» |

### b) Validierung in `anerkennen` (P2b-F-9)

- «Linehan beschreibt fünf aufeinander aufbauende Formen und als sechste Form radikale Echtheit.» entfällt (k28 «entfällt (2b-K): Zuschreibung nicht an der Quelle geprüft, P2b-F-9»). Hat die Fachstelle den Satz vor der Übergabe bestätigt, bleibt er.
- «Sie sind keine Pflichtfolge, und nicht jeder Schritt passt in jedes Gespräch.» wird «Die Stufen sind keine Pflichtfolge, und nicht jeder Schritt passt in jedes Gespräch.».
- «Übernehmen hiesse: Aus einer Beobachtung wird …» wird «Übernehmen heisst hier: Aus einer Beobachtung wird …».

### c) `zuhoeren` (P2b-F-12)

| Ort | bisher | neu |
| --- | --- | --- |
| zweiter Absatz (K-K-a3) | «Zuhören, nachfragen und die eigene Sicht behalten dürfen gleichzeitig möglich sein. Sie dürfen zuhören, nachfragen oder eine Pause machen. Ihre eigenen Anliegen bleiben dabei wichtig.» | «Sie dürfen zuhören, nachfragen oder eine Pause machen und dabei Ihre eigene Sicht behalten. Ihre eigenen Anliegen bleiben wichtig.» |
| Liste, zweiter Punkt (K-K-a2) | «Kurze Sätze und Pausen können helfen. Eine bestimmte Reaktion lässt sich nicht garantieren.» | «Kurze Sätze und Pausen können helfen.» |
| «Zuerst klären: zuhören oder lösen?» | «Auch verschiedene Gefühle, Meinungen oder Wünsche nach Nähe gehören dazu. Sie sind nicht automatisch ein Zeichen fehlender Liebe.» | «Verschiedene Gefühle, Meinungen oder Bedürfnisse nach Nähe sind nicht automatisch ein Zeichen fehlender Liebe.» (Bestand b184) |

«Ein hilfreicher Satz kann unterstützen, aber die Reaktion der anderen Person nicht garantieren.» bleibt; k14 bekommt «zusammengeführt (2b-K)» damit.

### d) `worte`

«Die folgenden Sätze sind Beispiele. Sie sind nicht typisch für alle Menschen mit Borderline.» wird «Die folgenden Sätze sind Beispiele und nicht typisch für alle Menschen mit Borderline.» (Bestand k837).

### e) Nicht ändern

- Die vier belastenden Aussagen in `worte` bleiben vollständig, auch «Du verstehst mich sowieso nicht.» (K-K-a4 nicht).
- «Typische schwierige Situationen» bleibt sichtbar (K-K-b1 nicht).
- Der Satz zu Dazzi et al. in `krise` › `suizid` bleibt im Wortlaut.
- Namen in den Beispielen und die Bezeichnungen der Gegenüberstellung «Übernehmen / Spiegeln» bleiben (P2b-S-4 ist nicht Teil dieser Korrektur).

## 6. Abbildung «Zwei Tassen» (`v-ko-tassen`, P2b-F-11 b)

- **Ändern:** Die zwei Tassen rücken näher zur Tischmitte, spiegelgleich zu x = 320.
  - Heute liegen die Tassenkörper bei x 130–198 und 442–510; der freie Raum dazwischen ist 244 Einheiten breit.
  - Neu verschiebst du jede Tasse mit Dampf und Henkel um etwa 60 Einheiten zur Mitte; der freie Raum wird etwa 120 Einheiten breit.
- **Fest bleibt:** zwei gleich grosse Tassen, gleichwertig, am selben Tisch, Henkel nach aussen, je zwei Dampflinien, Tisch und Bildausschnitt (`0 60 640 200`) unverändert. Nur Profil-Klassen, keine Hexwerte, keine `style`-Attribute.
- **Kurzbeschreibung** (`p.puk-sr`) und `statement` im Plan: «stehen sich auf einem Tisch gegenüber» wird «stehen nebeneinander auf einem Tisch». Der Rest bleibt.
- **Ansehen:** bei 1280 und 360 px, Standard und «kontrast». Die Sätze stehen breit weiter über ihrer Tasse. Mache danach den Freundin-Test und beschreibe in der Selbstprüfung, wie das Bild jetzt wirkt.
- `approvalStatus` bleibt «ausstehend».

## 7. Plan und Abgleich

- **`site.config.json`:**
  - `v-ko-moment`, `reason`: «Pause statt Streit» mit den drei Sätzen der Anspannungskurve statt «Stabil, Warnstufe, Eskalation».
  - `v-kr-sagen`, `reason`: Standardsatz und Ausstiegssätze, die Schritte verlinkt auf `kommunizieren`; Handlungsanleitung für Bedrohung mit Verweis im Text.
  - `v-kr-danach`, `reason`: Handlungsanleitung mit Verweis im Text vor den Vertiefungen.
  - `v-ko-tassen`, `statement`: wie Abschnitt 6.
- **Abgleich nachführen (P2b-W1-7):**
  - k25: «Gründe» entfällt.
  - k726: «und wann» fehlt im Satz bei «Nächster Schritt».
  - c190: «sofort» steht nur noch bei Lebensgefahr; «unabhängig vom Zeitpunkt» trägt «Nötige medizinische oder psychiatrische Hilfe hat keine Wartefrist.».
  - k572: «Eine Entschuldigung schafft keinen Anspruch auf Vergebung.» steht auch sinngemäss nirgends.
  - k764, k765 und k968: neuer Ort und neue Fassung aus Abschnitt 5 a; Nr. 17 der bisherigen Liste («Manche Angehörige achten …») entfällt.
- Alle übrigen Zeilen, die dieser Auftrag berührt, nach den Regeln in Abschnitt 2.

## 8. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: wie bisher 10 blockierend (1 × `visual-approval`, 8 × `placeholder-approval`, 1 × `review-report`)
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Prüfen im Browser:**
  - «Zwei Tassen» wie in Abschnitt 6
  - kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom auf `kommunizieren` und `krise`
  - Tastatur und Fokus; Druckansicht mit allen Vertiefungen
  - `node abgleich/bedienung.mjs`
- **Selbstprüfung** in `PRUEFBERICHT.md`, nur im Abschnitt «Selbstprüfung der bauenden Sitzung». Setze einen Block «Korrektur 2b-K» über den Block von 2b. Er enthält:
  - Stand je Punkt der Abschnitte 3 bis 7, mit Beleg
  - Wörter im Lesefluss vorher und nachher je Seite und Abschnitt (Zählweise C1)
  - jeden Verweis im Text mit der Handlungsanleitung davor und seiner Lage bei 360 px
  - die vollständige Liste **«Neue Sätze zur Freigabe»** für `kommunizieren`, `krise` und `index` im neuen Stand, mit Ort. Darin auch die neuen und geänderten Sätze aus diesem Auftrag. Diese Liste ist die Grundlage für die Freigabe durch die Fachstelle.
- **Keine Änderung** an den Seiten der Etappen 1 und 2a und an `index` (`git diff` zeigt nichts).
- **Nachprüfung:** Die Korrektur prüft danach eine Sitzung, die weder gebaut noch 2b-K umgesetzt hat (Lehre aus 2a-K).
- Der Pull Request bleibt Entwurf.
