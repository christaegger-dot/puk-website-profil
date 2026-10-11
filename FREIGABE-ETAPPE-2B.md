# Auftrag · Borderline-Website, Etappe 2b · letzte Anpassungen und Freigabe eintragen

Stand 11.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Grundlage:** Stand `31215a8` nach der Korrektur 2b-2, nachgeprüft (Prüfung 1 ohne Befund zum Wortlaut; Belege, Gates und Abgleich bestätigt).
- **Entscheide der Fachstelle vom 11.10.2026:**
  - **Freigabe Etappe 2b als Ganzes:**
    - Freigegeben sind `kommunizieren`, `krise`, der neue Einstieg auf `index`, die Abbildung «Zwei Tassen» und alle neuen Sätze.
    - Massgebend ist der Stand nach diesem Auftrag. Die Liste «Neue Sätze zur Freigabe» dient als Übersicht.
  - **Frage 12 der Selbstprüfung:** Bestätigt. «keine nachweisbare Zunahme» sagt dasselbe wie «kein statistisch signifikanter Anstieg». Im Quellenblock bleibt der Fachbegriff.
  - **Fragen der Nachprüfung 2b-K:**
    1. Freigabe als Ganzes, wie oben.
    2. K-K-a1 gilt auch bei «Nächster Schritt» (Abschnitt 3 d).
    3. Der Verweissatz auf die Anspannungskurve steht seit 2b-2 nach der Einleitung. Das ist erledigt.
  - **Verweise:** Die sieben Verweissätze in Abschnitt 4 kommen jetzt auf die freigegebenen Seiten. Verweise auf die Seiten der Etappe 2c folgen mit 2c.
  - **Entscheide der bauenden Sitzung 2b-2 (Nr. 1 bis 11):** bestätigt, ausser Nr. 1. Dazu Abschnitt 3 a.
- **Geändert werden nur:**
  - die Stellen in den Abschnitten 3 und 4
  - `site.config.json` (Abschnitt 5)
  - der Abgleich
  - im Prüfbericht die Teile aus Abschnitt 6

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen. Sonst ändert sich kein Wortlaut.
- **Verweissätze:**
  - Der Linktext ist der Titel der Zielstelle.
  - Kein Verweissatz steht zwischen einer Handlungsanleitung und dem Verweis im Text.
  - Keiner steht in einer Abbildung oder Vertiefung.
- **Abgleich:** Jede betroffene Zeile bekommt einen Status mit «(2b-F)», z. B. «neu (Verweis, 2b-F)», und eine Bemerkung. Neue Werte erklärst du in `abgleich/README.md`. `node abgleich/pruefe-abgleich.mjs` meldet 0 ohne Fundstelle.
- **Prüfbericht:** Der Eintrag in Abschnitt 6 a ist der Eintrag der Fachstelle. Du überträgst ihn unverändert, im Auftrag der Fachstelle. Keine Prüfstufe wird «erledigt».

## 3. Anpassungen

### a) «Die sechs Stufen im Detail» (`kommunizieren` › `anerkennen`)

- **Sechs Einträge** statt einem: «Stufe 1 · Aufmerksam sein» bis «Stufe 6 · Radikale Echtheit: auf Augenhöhe bleiben». Darüber steht der Zwischentitel «Die sechs Stufen im Detail».
- **Inhalt je Eintrag:** wie heute der Teil dieser Stufe.
- **Grund:** Man öffnet nur die Stufe, die man sucht.

### b) «Mitgefühl heisst nicht übernehmen» (`kommunizieren` › `anerkennen`)

- **Zwischentitel:** Der Satz wird zum eigenen Zwischentitel «Mitgefühl heisst nicht übernehmen», auf derselben Ebene wie «Sechs Stufen der Validierung».
- **Absatz:** Er beginnt danach mit «Sie können Beobachtungen vorsichtig spiegeln, …». Der Rest bleibt gleich.
- **Darunter, unverändert:** die Gegenüberstellung, «Spiegeln kann …» und «Ein hilfreicher innerer Satz: …».
- **Grund:** Die Absätze gehören damit in der Überschriftenliste nicht mehr zur Vertiefung.

### c) Leerraum vor dem Quellenblock (alle sieben Seiten)

- **Kein Leerraum mehr:** Zwischen dem letzten Inhaltsabschnitt und «Quellen zu dieser Seite» steht kein Leerraum mehr.
- **Sprung zum letzten Abschnitt:** Er funktioniert weiter. Die Mindesthöhe (`puk-site-anchor-end`) kommt dafür z. B. an den Quellenblock.
- **Prüfen:** Bildschirmfoto bei 1280 × 900 px auf `kommunizieren` und `verstehen`. Teste den Sprung über die Kapitelübersicht zum letzten Abschnitt.

### d) «Nächster Schritt» (`kommunizieren` › `kippen`, K-K-a1)

| bisher | neu |
| --- | --- |
| «Nennen Sie einen Schritt, den Sie selbst in der Hand haben: «Ich beende das Gespräch jetzt und entscheide später, ob ich wieder ansprechbar bin.»» | «Nennen Sie einen Schritt, den Sie selbst in der Hand haben.» |

Abgleich: k726 nachführen.

### e) Befunde der Nachprüfung 2b-K

- **N2bK-1:** Die Liste «Neue Sätze zur Freigabe» wird vollständig:
  - die Regel von 2b im Kopf
  - die zwei Verdichtungen «Legen Sie sich einen Satz für eine Pause zurecht, …» und «Schreiben Sie zwei oder drei typische Grenzsätze vorab auf, …»
  - der Bildtitel «Abbildung 1 · Zuhören, ohne zuzustimmen»
  - dazu die Änderungen aus 3 b, 3 d und die sieben Verweissätze aus Abschnitt 4
- **N2bK-2:** Die zwei Einzelposten der Wortzahl in `sagen` werden richtiggestellt.
- **N2bK-3:** Die Bemerkung von c253 wird nachgeführt. Bei c260 und c261 kommt der Hinweis auf c265 und c266 dazu.

## 4. Verweissätze auf den freigegebenen Seiten

| Nr. | Seite › Ort | Satz (neu) |
| --- | --- | --- |
| 1 | `verstehen` › `mythen`, Teil «Wenn Sie sich wegen Suizid sorgen», nach «Direkt nachzufragen, löst nach heutigem Wissensstand keine suizidale Handlung aus.» | «Wie Sie Suizidgedanken direkt ansprechen können, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Suizidgedanken ein Thema sind».» |
| 2 | `verstehen` › `anspannung`, am Ende des Abschnittstexts, nicht in der Abbildung | «Wie Sie eine Pause ankündigen können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Der richtige Moment».» |
| 3 | `verstehen` › `mythen`, nach der Antwort mit «Daraus folgt keine Schuld …» | «Wie Sie mit Schuldgefühlen umgehen können, steht auf der Seite «Ihre Rolle» im Abschnitt «Schuld, Verantwortung und was dazwischen liegt».» |
| 4 | `beziehungen` › `was-hilft`, am Ende des Abschnitts | «Wie Sie Gefühle anerkennen können, ohne zuzustimmen, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Anerkennen, ohne zuzustimmen».» |
| 5 | `grenzen` › `bruecke`, nach «… Fachpersonen und andere Vertrauenspersonen können mittragen.» | «Wo Sie Unterstützung für sich finden, steht auf der Seite «Auf sich achten» im Abschnitt «Nicht allein tragen».» |
| 6 | `grenzen` › `gewalt`, am Ende von «Wenn Kinder mitbetroffen sind» | «Wie Sie Kindern die Erkrankung erklären und die Betreuung planen, steht auf der Seite «Ihre Rolle» im Abschnitt «Wenn Kinder mitbetroffen sind».» |
| 7 | `selbstfuersorge` › `zu-viel`, direkt nach dem Verweis im Text, der auf «… holen Sie Hilfe, statt weiterzuüben.» folgt | «Was in einer Krise hilft, steht auf der Seite «Krisen begleiten» im Abschnitt «Wenn Belastung zunimmt».» |

- **Satz 6** steht wortgleich auf `krise` › `bleibt`.
- **Satz 1** steht wortgleich auf `kommunizieren` › `worte`.
- **Ort:** Wo der genaue Ort nicht passt (z. B. mitten in einer Liste), setzt du den Satz ans Ende des nächsten Absatzes. Die Begründung steht in der Selbstprüfung.

## 5. `site.config.json`

- `visualPlan` › `v-ko-tassen` › `approvalStatus`: «ausstehend» → «freigegeben».
- Plan-Zeilen nachführen, wo sich durch Abschnitt 3 etwas ändert.

## 6. Prüfbericht

### a) Eintrag der Fachstelle

Setze diesen Unterabschnitt unverändert ans Ende von «## Fachliche Freigabe der Fachstelle», direkt vor «## Selbstprüfung der bauenden Sitzung»:

```
### Etappe 2b

**11.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`FREIGABE-ETAPPE-2B.md`).

- **Etappe 2b ist fachlich freigegeben:** die Seiten `kommunizieren` («Zugewandt und klar sprechen») und `krise` («Krisen begleiten») als Ganzes und auf `index` der neue Einstieg, mit allen Texten im Stand nach den Korrekturen 2b-K und 2b-2 und den Anpassungen aus `FREIGABE-ETAPPE-2B.md`.
- **Die neuen Sätze sind freigegeben (P2b-F-11 a):** alle Sätze der Liste «Neue Sätze zur Freigabe» in der Selbstprüfung, im nachgeführten Stand. Die Liste ist die Übersicht zur Freigabe als Ganzes.
- **Die Abbildung «Zwei Tassen» (`v-ko-tassen`) ist fachlich freigegeben (P2b-F-11 b).**
- **Alle Fragen sind entschieden:** P2b-F-1 bis -12 der Prüfrunde 2b, die Fragen der Selbstprüfung bis Nr. 12 und die drei Fragen der Nachprüfung 2b-K.
- **Quellen am Seitenende (Korrektur 2b-2):** Auf allen Seiten stehen die Quellen in «Quellen zu dieser Seite». Auf den Seiten der Etappen 1 und 2a hat sich dadurch nur der Ort der Quellen geändert; ihre Freigaben gelten weiter.
- **Verweise auf die neuen Seiten:** Die sieben Verweissätze auf `verstehen`, `beziehungen`, `grenzen` und `selbstfuersorge` aus `FREIGABE-ETAPPE-2B.md` sind freigegeben. Verweise auf die Seiten der Etappe 2c folgen mit 2c.
- **Nicht Teil dieser Freigabe:** die Seiten der Etappe 2c und die Platzhalter.
- **Weiter offen vor der Veröffentlichung:** wie bei Etappe 1 und 2a. Dazu kommt in der Schlussprüfung eine unabhängige Prüfung der Korrekturen 2b-K und 2b-2 und der Anpassungen aus `FREIGABE-ETAPPE-2B.md`.
```

### b) Statustabelle

Der Status bleibt in allen Zeilen «offen».

- **Zeile «W1 Fachliche Prüfung»:**
  - Spalte «Geprüft durch»: ergänze «; Fachstelle (Freigabe Etappe 2b)».
  - Spalte «Ergebnis»: ergänze am Ende «Etappe 2b (`kommunizieren`, `krise`, Einstieg auf `index`) fachlich freigegeben am 11.10.2026.».
- **Zeile «Visualisierungs-Check»:** In der Spalte «Ergebnis» ergänzt du am Ende «Etappe 2b: «Zwei Tassen» fachlich freigegeben (Fachstelle, 11.10.2026).».

### c) Selbstprüfung

Setze einen Block «Freigabe 2b eintragen» über den Block «Korrektur 2b-2». Er enthält:

- «umgesetzt, Beleg» je Punkt der Abschnitte 3 bis 6
- die Fotos aus 3 a bis 3 c
- die sieben Verweissätze mit Ort und Satz davor

## 7. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend, ein Hinweis weniger als bisher (`visual-approval` entfällt)
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: 9 blockierend (8 × `placeholder-approval`, 1 × `review-report`) und der Hinweis `siteUrl`. Das ist erwartet.
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Prüfen im Browser:** Überlauf von 320 bis 1440 px und bei 200 % Zoom, Tastatur und Druck auf `kommunizieren` und den vier Seiten mit neuem Verweissatz.
- **Links:** Alle sieben neuen Links zeigen auf ein vorhandenes Ziel, und der Linktext gleicht dem Titel.
- **Freigegebene Seiten:** `git diff --word-diff` gegen `31215a8` zeigt auf den Seiten der Etappen 1 und 2a nur die sieben Verweissätze und die Klasse aus 3 c. `index` bleibt unverändert.
- **Pull Request:** Er bleibt Entwurf. Führe seine Beschreibung nach: Etappe 2b freigegeben, als Nächstes Etappe 2c.
