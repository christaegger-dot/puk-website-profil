# Korrekturauftrag · Borderline-Website · nach der Schlussprüfung, zweite Fassung (SP2-K)

Stand 12.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `main`, Stand `2c7078a` (Merge von PR #61). Für eine **bauende Sitzung**. Ersetzt `KORREKTUR-SCHLUSSPRUEFUNG.md` (SP-K); jener Auftrag gilt nicht und wird nicht ausgeführt.

**Nachgeführt am 12.10.2026:** Die Rückfragen RF-1 bis RF-5 sind entschieden, von Claude im Auftrag der Fachstelle (Abschnitt 11). Die Stellen in SP2-K-6, -8, -17 und -25 und Abschnitt 15 sind danach angepasst.

## 1. Anlass, Grundlage, Stand

- **Anlass:** die Schlussprüfung, zwei unabhängige Prüfungen und ihre Zusammenführung in `PRUEFBERICHT.md`, Block «Schlussprüfung · Zusammenführung der beiden Prüfsitzungen». Darin stehen 60 Befunde (SPZ-1 bis -60, davon 6 wichtig) und 39 Fragen (SPZ-F-1 bis -39).
- **Grundlage:** `ENTSCHEIDE-SCHLUSSPRUEFUNG.md` im selben Ordner, in der Fassung aus PR #60 mit dem Nachtrag aus PR #61 (auf `main` seit `2c7078a`). Sie ersetzt die Fassung aus PR #59. Alle Entscheide sind von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026).
  - **Massgebend** sind Abschnitt 3 (Wortlaute), Abschnitt 4 (Neue Sätze zur Freigabe) und Abschnitt 6 (Folgen für den Korrekturauftrag).
  - **Die Reihenfolge in Abschnitt 5 und 6** gilt so, wie sie dort steht. Dieser Auftrag ist Schritt 1 von Abschnitt 6 («Korrektur»). Was danach kommt, steht in Abschnitt 15.
  - Was die Entscheide begründen, wiederholt dieser Auftrag nicht. Die Wortlaute sind wörtlich aus den Entscheiden übernommen.
- **Gilt nicht:** `KORREKTUR-SCHLUSSPRUEFUNG.md` (SP-K). Er setzt die Entscheide aus PR #59 um. Übernimm daraus nichts. Hast du SP-K gelesen, beachte die Unterschiede:

  | Thema | SP-K (gilt nicht) | SP2-K (gilt) |
  | --- | --- | --- |
  | Fusszeile (`editorialStatus`) | neuer Status in der Korrektur | bleibt bis Schritt 3 nach der Nachprüfung (Abschnitt 11) |
  | 98 Textzeilen des Plans | in der Korrektur auf «freigegeben» | bleiben bis Schritt 3 (Abschnitt 11) |
  | Bedeutungsschleife | Bestandssatz «keine feste Abfolge» in den Kurztext | Abbildung bleibt; nur Abgleich Nr. 91 (SPZ-F-9) |
  | F60.31 | Bezeichnung einsetzen | nicht Teil der Korrektur (SPZ-F-21, zurück an die Fachstelle) |
  | Verweissatz «manipulieren bewusst» | ein Ziel | zwei Ziele, Wortlaut 3.3 (SP2-K-3) |
  | `/FAQ`, `/Soforthilfe` | neue Weiterleitungen | keine (SPZ-F-39) |
  | alte `-v1`-PDFs | neun Regeln mit Ersatzzielen | nur `-v1`-Fassungen, deren `-v3`-Fassung auf einen Abschnitt leitet (SP2-K-26) |
  | Guillén et al. (2024), «didaktisch» | geändert | bleiben (SPZ-16 bewusst nicht korrigiert; SPZ-26 nur W7 bis W10) |
  | Abgleich des Diagnostik-Teils | in `abgleich/verstehen.md` | in `abgleich/diagnose.md` (SPZ-F-4) |
  | Status im Abgleich | «(SP-K)» | «(SPZ-E)» |
  | Anspannungskurve | bleibt «freigegeben» | `approvalStatus` «ausstehend» bis zur neuen Freigabe (SP2-K-18) |
  | Vorschau | neuer Export nach der Korrektur | Netlify bleibt während Korrektur und Nachprüfung unverändert (Entscheide, Abschnitt 5) |

- **Stand:** `main` `2c7078a`. Gemessen von der Sitzung, die diesen Auftrag geschrieben hat (12.10.2026), ohne etwas zu ändern:
  - `node tools/gate.mjs` → «0 blockierend, 2 Hinweise» (`crisis-number-check` «144» auf `quellen`; `review-report`)
  - `node tools/gate.mjs --production` → «1 blockierend, 1 Hinweise» (`review-report`)
  - `node tools/gate.mjs --selftest` → «65/65 bestanden»
  - `node abgleich/pruefe-abgleich.mjs` → «7371 Zeilen, 0 ohne Fundstelle»
  - `node abgleich/verwendet-auf.mjs` → «85 Einträge, 0 mit anderer Angabe»; mit `--ohne-legenden` → «85 Einträge, 6 mit anderer Angabe»
  - Plan: 109 Zeilen, davon 10 Abbildungen «freigegeben», 98 Text «ausstehend», 1 Text «entfällt»
  - `_redirects`: 85 Regeln
- **Wer korrigiert:** eine bauende Sitzung. Ausgeschlossen sind die Sitzungen der Schlussprüfung (Prüfung 1, Prüfung 2, Zusammenführung), die beiden Entscheidsitzungen (PR #59; PR #60 und #61) und die Sitzung, die diesen Auftrag geschrieben hat.
- **Kennung:** «SP2-K» ist die Kennung dieser Korrektur, nicht eine ID von Prüfung 2 («SP2-B-…», «SP2-S-…» usw.). Jede Änderung hat eine Nummer SP2-K-1 bis SP2-K-28.

### Übersicht

| Nr. | Thema | Entscheide | Neue Sätze (Abschnitt 4 der Entscheide) |
| --- | --- | --- | --- |
| SP2-K-1 | `diagnose`: Satz zu Häufigkeitsangaben | SPZ-4, SPZ-F-4, Wortlaut 3.1 | N1, N2 |
| SP2-K-2 | `kommunizieren`: «Sie sind es nicht.» | SPZ-5, SPZ-F-5, Wortlaut 3.2 | N3 |
| SP2-K-3 | `verstehen`: Verweissatz «manipulieren bewusst» | SPZ-7, SPZ-F-6, Wortlaut 3.3 | N4 |
| SP2-K-4 | `selbstfuersorge`: Vertiefung «Eltern» | SPZ-F-10, Wortlaut 3.4 | N5 |
| SP2-K-5 | Anspannungskurve, Stelle 3 | SPZ-15, SPZ-F-8, Wortlaut 3.5 | N6 |
| SP2-K-6 | Bildlegenden «früheres Handout» | SPZ-28, SPZ-F-19, Wortlaut 3.6 | N7 |
| SP2-K-7 | «Ein neuer Trieb»: Sims | SPZ-41, SPZ-F-30, Wortlaut 3.7 | – |
| SP2-K-8 bis -14 | W1 bis W20 und W22 | SPZ-19, -20, -22, -26, -33, -36, -37, SPZ-F-27, Wortlaut 3.8 | N8 bis N13, N16 |
| SP2-K-15 bis -17 | Eisberg, Schleife, Zwei Sichten bei grosser Schrift | SPZ-2, SPZ-3, SPZ-38 | – |
| SP2-K-18 | Freigabestatus von zwei Abbildungen | Abschnitt 4 (M7) | – |
| SP2-K-19 | Druck der Schleife, begründete Ausnahme | SPZ-43, SPZ-F-32, Abschnitt 5.6 Nr. 1 | – |
| SP2-K-20 | Quellenblock `verstehen`, «Verwendet in» | SPZ-23, SPZ-F-18 | N14 |
| SP2-K-21 | Plan: drei Begründungen | SPZ-8, SPZ-9 | – |
| SP2-K-22 bis -25 | Abgleich | SPZ-4, -7, -11; SPZ-F-4, -5, -6, -8, -9, -10, -27 | – |
| SP2-K-26 | `_redirects`: alte `-v1`-PDFs | SPZ-54 | – |
| SP2-K-27 | Werkzeuge, `UMBAUPLAN.md`, `README.md` | SPZ-F-15, SPZ-F-22, SPZ-44, SPZ-52 | – |
| SP2-K-28 | Selbstprüfung | – | – |

### Dateien, die sich ändern dürfen

- **`content/`:** `404.html`, `behandlung.html`, `beziehungen.html`, `diagnose.html`, `fragen.html`, `genesung.html`, `grenzen.html`, `kommunizieren.html`, `krise.html`, `quellen.html`, `rolle.html`, `selbstfuersorge.html`, `unterstuetzung.html`, `verstehen.html`, je nur an den Stellen dieses Auftrags. `index.html`, `ueber.html` und `impressum-datenschutz.html` ändern sich nicht.
- **Gebaute Seiten** (`*.html` im Website-Ordner, `sitemap.xml`): nur durch `node tools/build.mjs`.
- **`site.config.json`:** `description` von `index`, `fragen`, `impressum-datenschutz` und `404` (W3 bis W6); `primaryTask` von `404` und `goal` von `v-404-text` (SP2-K-8, RF-4); `visualPlan` › `source` von fünf Abbildungen (SP2-K-6); `approvalStatus` von zwei Abbildungen (SP2-K-18); `reason` von drei Textzeilen (SP2-K-21).
- **`borderline.css`** (SP2-K-15 bis -17, SP2-K-19)
- **`_redirects`** (SP2-K-26)
- **`abgleich/`:** die Tabellen `*.md` nach SP2-K-22 bis -25, `README.md` (neue Statuswerte), `kennzahlen.mjs`, `bedienung.mjs` (SP2-K-27)
- **`UMBAUPLAN.md`**, Abschnitt 2 (SP2-K-27)
- **`README.md`** der Website, Abschnitt «Veröffentlichen» (SP2-K-27)
- **`PRUEFBERICHT.md`:** der Unterabschnitt «Begründete Ausnahme» (SP2-K-19) und der Block «Korrektur SP2-K» in der Selbstprüfung (SP2-K-28)

Sonst nichts. Insbesondere bleiben `tools/`, `components/`, `guidelines/`, `templates/website/longform/`, `starter.css`, `_headers`, `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`, die übrigen Auftragsdateien und die Statustabelle im Prüfbericht unverändert.

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen. Keine eigenen Formulierungen, nichts weglassen, keine Änderung «bei der Gelegenheit». Wo die Entscheide «…» schreiben, bleibt der Rest des Satzes, wie er ist.
- **Ein Satz steht an mehreren Stellen** (Seitentext, Kurzbeschreibung `p.puk-sr`, `site.config.json`, Spalte «Neue Fassung» im Abgleich): Er wird überall gleich geändert.
- **Keine weiteren Änderungen.** Was dieser Auftrag nicht nennt, bleibt. Fällt dir etwas auf, nennst du es in der Selbstprüfung unter «Aufgefallen, nicht geändert». Fachlich Fragwürdiges markierst du dort als «Prüfbedarf»; du änderst es nicht.
- **Abgleich mit Status «(SPZ-E)»:** Jede Zeile, die sich ändert oder neu ist, bekommt einen Status mit «(SPZ-E)», z. B. «übernommen (SPZ-E)», «gekürzt (SPZ-E)», «umformuliert (SPZ-E)», «zusammengeführt (SPZ-E)», «verschoben (SPZ-E)», «entfällt (SPZ-E)», «umformuliert (Verweis, SPZ-E)». Nennt dieser Auftrag einen Status, gilt dieser.
  - Die Bemerkung nennt die ID aus den Entscheiden und die Nummer dieses Auftrags, z. B. «SPZ-F-4, SP2-K-22». Die alte Bemerkung bleibt dahinter stehen («bis SPZ-E: …»).
  - Ändert sich ein Satz der Seite, ändert sich die «Neue Fassung» jeder Zeile, die ihn nennt (Regel oben).
  - Neue Statuswerte erklärst du in `abgleich/README.md`, Abschnitt «Statuswerte», im Stil der bestehenden Einträge.
  - `node abgleich/pruefe-abgleich.mjs` meldet danach 0 ohne Fundstelle.
- **CSS:** nur in `borderline.css`. Farben, Abstände, Linien und Schrift nur über Tokens; kein Hexwert, kein neuer `px`-Wert. Schwellen in `@container` und Breiten, die mit der Schrift wachsen sollen, stehen in `rem` oder `em` (Entscheide SPZ-2; die Leitlinie nennt `rem`, `guidelines/07-visualisierung-umsetzen.md` Z. 74). Dort sind Tokens nicht möglich. Die Kommentare über geänderten Regeln führst du nach (Schwelle, Umrechnung, Nummer dieses Auftrags).
- **Keine `style`-Attribute, keine Inline-Skripte** (Content-Security-Policy in `_headers`).
- **Keine Telefonnummern, keine `tel:`-Links**, kein Notfallblock. Dieser Auftrag setzt keinen neuen Verweis im Text (`<p data-responsibility-inline></p>`).
- **Abbildungen:** Zeichnungen, Pfade und Beschriftungen bleiben, ausser wo SP2-K-5 (ein Satz) und SP2-K-7 (Sims) sie ändern. Berührt eine andere Änderung eine Zeichnung oder einen Wortlaut einer Abbildung: anhalten und in der Selbstprüfung melden.
- **Leitlinien, Tokens, Komponenten, Starter-Werkzeuge** (`guidelines/`, `components/`, `tools/`) bleiben unverändert (`CLAUDE.md`).
- **Netlify und Vorschau:** Während Korrektur und Nachprüfung bleibt Netlify unverändert (Entscheide, Abschnitt 5). Kein Export auf den Umzugs-Branch, keine Änderung in `christaegger-dot/borderline-angehoerige`. Lesen ist nur für SP2-K-26 nötig.
- **Prüfbericht:** Keine Stufe wird «erledigt». Die Statustabelle bleibt unverändert.

## 3. Sätze aus Abschnitt 3 der Entscheide

### SP2-K-1 · `diagnose` › `begleiterkrankungen` (SPZ-4, SPZ-F-4; Wortlaut 3.1; N1, N2)

- **Ort:** neuer Absatz direkt nach der Liste «depressive Erkrankungen … Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS)», vor «Erkrankungen können gemeinsame Risikofaktoren haben, …».
- **Heute:** –
- **Neu:** «Häufigkeitsangaben unterscheiden sich je nach Stichprobe, Erhebungszeitraum und Diagnoseverfahren. Die Liste sagt deshalb nichts über die Wahrscheinlichkeit bei einer einzelnen Person aus.»
- **Quelle:** Bestand `verstehen.md` Z. 271, wörtlich.
- **Nachgesehen:** In `content/diagnose.html` folgt auf die Liste heute direkt «Erkrankungen können gemeinsame Risikofaktoren haben, …». Bestand: `git show origin/borderline-bestand:bestand/borderline-angehoerige/texte/verstehen.md`, Z. 271, lautet wie «Neu».
- **Abgleich:** SP2-K-22.

### SP2-K-2 · `kommunizieren` › `beispiele`, «Eine Bitte um Geld» (SPZ-5, SPZ-F-5; Wortlaut 3.2; N3)

| heute | neu |
| --- | --- |
| «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen».» | «Grenzen beim Geld sind oft besonders schwer, weil sie sich anfühlen können wie «ich lasse dich fallen». Sie sind es nicht.» |

- **Quelle:** Bestand `grenzen.md` Z. 378, zweiter Satz wörtlich.
- Der erste Satz bleibt, wie er ist.
- **Abgleich:** SP2-K-23 a.

### SP2-K-3 · `verstehen` › `mythen`, Annahme «Menschen mit Borderline manipulieren bewusst.» (SPZ-7, SPZ-F-6; Wortlaut 3.3; N4)

- **Ort:** am Ende der Antwort, nach «Bleiben Sie bei der Wirkung, Ihrer Sicherheit und Ihrer Grenze.»
- **Heute:** –
- **Neu:** «Wie Sie in angespannten Gesprächen bei Ihrer Grenze bleiben können, steht auf der Seite «Zugewandt und klar sprechen» im Abschnitt «Wenn Gespräche kippen» und auf der Seite «Grenzen» im Abschnitt «Konsequenz heisst nicht Härte».»
- **Links:** «Wenn Gespräche kippen» → `kommunizieren.html#kippen`; «Konsequenz heisst nicht Härte» → `grenzen.html#konsequenz`. Linktext = Titel der Zielstelle, Klasse `puk-link--inline` wie bei den übrigen Verweissätzen.
- **Quelle:** Verweis des Bestands, `verstehen.md` Z. 181 («Mehr dazu auf Kommunizieren und Grenzen.»); Satzmuster der freigegebenen Verweissätze.
- **Markup** wie beim Verweissatz der Annahme davor (`… im Abschnitt «<a class="puk-link--inline" href="genesung.html#forschung">Was die Forschung zeigt</a>».`): die Guillemets ausserhalb des Links.
- **Nachgesehen:** Beide Anker gibt es: `kommunizieren` `id="kippen"` mit dem Titel «Wenn Gespräche kippen», `grenzen` `id="konsequenz"` mit dem Titel «Konsequenz heisst nicht Härte».
- **Abgleich:** SP2-K-23 b.

### SP2-K-4 · `selbstfuersorge` › `eigenes-leben`, Vertiefung «Eltern» (SPZ-F-10; Wortlaut 3.4; N5)

| heute | neu |
| --- | --- |
| «Eigene Fehler lassen sich ernst nehmen, ohne für alles verantwortlich zu sein.» | «Sie können einen eigenen Fehler anerkennen, ohne Verantwortung für die Erkrankung oder die Entscheidungen eines anderen Menschen zu übernehmen.» |

- **Quelle:** freigegebener Satz von `rolle` › `schuld` (`KORREKTUR-ETAPPE-2A.md` Z. 39, P2a-F-1), wörtlich. Nachgesehen: Er steht so in `content/rolle.html`.
- Die übrigen Sätze der Vertiefung bleiben.
- **Abgleich:** SP2-K-23 e.

### SP2-K-5 · `verstehen` › `anspannung`, Abbildung «Anspannungskurve» (`v-vs-anspannung`), Stelle 3, «Was hilft» (SPZ-15, SPZ-F-8; Wortlaut 3.5; N6)

| heute | neu |
| --- | --- |
| «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize helfen.» | «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize können helfen.» |

- **Quelle:** Bestand `materialien--text--alarm-modus.md` Z. 51 («… können helfen.»).
- Steht derselbe Satz in der Kurzbeschreibung, der Textfassung oder im Plan (`statement`), gilt dort derselbe Wortlaut. **Nachgesehen:** Am Stand `2c7078a` steht «weniger Reize helfen» nur einmal in `content/verstehen.html` (Liste unter der Kurve), nicht in `p.puk-sr` und nicht in `site.config.json`. Nach dem Bau: `grep -c "weniger Reize helfen"` ergibt 0 in `content/`, `site.config.json` und den gebauten Seiten.
- Sonst ändert sich an der Abbildung nichts. Freigabestatus: SP2-K-18.
- **Abgleich:** SP2-K-23 c.

### SP2-K-6 · Bildlegenden mit Handout (SPZ-28, SPZ-F-19; Wortlaut 3.6; N7)

| Seite › Abbildung | heute | neu |
| --- | --- | --- |
| `verstehen` › `v-vs-anspannung` | «… nach dem Handout «Die Anspannungskurve» · Bezugspunkte: …» | «… nach dem früheren Handout «Die Anspannungskurve» · Bezugspunkte: …» |
| `rolle` › `v-ro-weg` | «… nach dem Handout «Der Garten»; Bezug: NICE CG78 (2009).» | «… nach dem früheren Handout «Der Garten»; Bezug: NICE CG78 (2009).» |
| `selbstfuersorge` › `v-sf-abend` | «…; Bezug: Handout «Energie-Konto».» | «…; Bezug: früheres Handout «Energie-Konto».» |
| `kommunizieren` › `v-ko-tassen` | «… nach den Handouts «Zuhören ohne Zustimmen» und «Wenn Worte treffen»; …» | «… nach den früheren Handouts «Zuhören ohne Zustimmen» und «Wenn Worte treffen»; …» |
| `genesung` › `v-ge-trieb` | «… nach den Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; …» | «… nach den früheren Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; …» |

- Sonst ändert sich in den Legenden nichts. «Eigene didaktische Darstellung» bleibt am Anfang.
- In `site.config.json` › `visualPlan` › `source` dieser fünf Abbildungen gilt dasselbe Wort. Beim Eisberg (`v-vs-eisberg`) nennt nur der Plan das Handout, die Legende nicht; dort bleibt der Plan, wie er ist.
- **Plan, nachgesehen am Stand `2c7078a`:**

  | Zeile | `source` heute | `source` neu |
  | --- | --- | --- |
  | `v-vs-anspannung` | «Eigene didaktische Darstellung nach dem Handout «Die Anspannungskurve – Wann Reden hilft», mit Inhalten aus drei weiteren Handouts zur Anspannung (…); …» | «Eigene didaktische Darstellung nach dem früheren Handout «Die Anspannungskurve – Wann Reden hilft», mit Inhalten aus drei weiteren Handouts zur Anspannung (…); …» |
  | `v-ro-weg` | «Eigene didaktische Darstellung nach dem Handout «Der Garten»; Bezug: NICE CG78 (2009)» | «Eigene didaktische Darstellung nach dem früheren Handout «Der Garten»; Bezug: NICE CG78 (2009)» |
  | `v-sf-abend` | «Eigene didaktische Darstellung; Bezug: Handout «Energie-Konto»» | «Eigene didaktische Darstellung; Bezug: früheres Handout «Energie-Konto»» |
  | `v-ko-tassen` | «Eigene didaktische Darstellung nach den Handouts «Zuhören ohne Zustimmen» und «Wenn Worte treffen»; …» | «Eigene didaktische Darstellung nach den früheren Handouts «Zuhören ohne Zustimmen» und «Wenn Worte treffen»; …» |
  | `v-ge-trieb` | «Eigene didaktische Darstellung nach den Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; …» | «Eigene didaktische Darstellung nach den früheren Handouts «Veränderung verläuft unterschiedlich» und «Der Garten»; …» |

- Bei `v-vs-anspannung` bleibt «mit Inhalten aus drei weiteren Handouts zur Anspannung» im Plan, wie es ist. Die Legende nennt diese Handouts nicht; wie beim Eisberg bleibt der Plan dort (RF-3, entschieden in Abschnitt 11).
- Die Zeichnungen bleiben; die Abbildungen bleiben freigegeben, bis auf SP2-K-18 (Entscheide, Abschnitt 4: «Nur ein Wort der Kennzeichnung ändert sich, freigegeben mit dieser Liste»).

### SP2-K-7 · `genesung` › Abbildung «Ein neuer Trieb» (`v-ge-trieb`), Zeichnung (SPZ-41, SPZ-F-30; Wortlaut 3.7)

- **Heute:** Der erste Pfad (Sims) beginnt links bei x 84 mit runder Kante und endet bei x 578 («… C574 226 578 230 578 236 …»), ausserhalb der `viewBox` «60 44 420 214» (rechter Rand x 480). Rechts ist der Sims gerade abgeschnitten.
- **Neu:** Der Sims endet rechts innerhalb der `viewBox`, mit derselben runden Kante wie links und gleich weit vom Rand wie links (links 24 Einheiten vom Rand x 60, also rechtes Ende bei etwa x 456). Dazu werden nur die x-Werte des rechten Endes im Pfad versetzt.
- **Unverändert:** `viewBox`, Topf, Pflanze, Blatt, Trieb, die zwei Sätze, Kernaussage, Erklärtext, Kurzbeschreibung, Vertiefung und Legende.
- **Ansehen:** bei 1280 und 360 px, Standard und «kontrast». Danach neue Freigabe der Abbildung (Abschnitt 4).
- Mit «Abschnitt 4» sind die Entscheide gemeint (SP2-K-18). Fotos nach SP2-K-28.
- **Umsetzung (Rechnung der Sitzung, die diesen Auftrag geschrieben hat; keine neue Vorgabe):** Links besteht die Kante aus den x-Werten 84 (Beginn der Rundung), 76 und 72 (äusserste Kante). Gespiegelt an der Mitte der `viewBox` (x 270) liegen sie rechts bei 456, 464 und 468. Das rechte Ende rückt damit um 110 Einheiten nach links; der Beginn der Rundung liegt bei x 456, 24 Einheiten vom rechten Rand.
  - Pfad heute: `M84 226 C230 222 420 222 566 226 C574 226 578 230 578 236 L578 240 C578 246 574 248 566 248 C420 252 230 252 84 248 C76 248 72 246 72 240 L72 236 C72 230 76 226 84 226 Z`
  - Pfad neu: `M84 226 C230 222 420 222 456 226 C464 226 468 230 468 236 L468 240 C468 246 464 248 456 248 C420 252 230 252 84 248 C76 248 72 246 72 240 L72 236 C72 230 76 226 84 226 Z`
  - Es ändern sich nur die acht x-Werte des rechten Endes (566 → 456, 574 → 464, 578 → 468). Die y-Werte und die Stützpunkte bei x 420 und 230 bleiben. Sieht die Kante danach nicht gleich aus wie links, meldest du es in der Selbstprüfung, statt weitere Werte zu ändern.

## 4. Weitere Wortlaute W1 bis W20 und W22 (Wortlaut 3.8 der Entscheide)

| SP2-K | Nr. | Seite › Ort | heute | neu | Befund, Quelle |
| --- | --- | --- | --- | --- | --- |
| 8 | W1 | `404`, Text | «Von der Übersicht aus finden Sie alle Seiten.» | «Von der Startseite aus erreichen Sie alle Seiten.» | SPZ-22; Name wie im `<title>` und im Logo («Startseite») |
| 8 | W2 | `404`, Link | «Zur Übersicht» | «Zur Startseite» | SPZ-22 |
| 8 | W3 | `site.config.json` › `404` › `description` | «Diese Seite gibt es nicht. Von der Übersicht aus finden Sie alle Seiten.» | «Diese Seite gibt es nicht. Von der Startseite aus erreichen Sie alle Seiten.» | SPZ-22 |
| 9 | W4 | `site.config.json` › `index` › `description` | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen zu Verstehen, Beziehungen und Grenzen sowie die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» | «Orientierung für Angehörige von Menschen mit Borderline: Einstiege nach Anliegen, von Verstehen und Grenzen bis Genesung und Unterstützung, und die kostenlose Beratung der Fachstelle Angehörigenarbeit PUK.» | SPZ-19; acht Einstiege auf `index` › `einstiege` |
| 9 | W5 | `site.config.json` › `fragen` › `description` | «…, Schutz und dem eigenen Leben, je mit Verweis auf die ausführliche Seite.» | «…, Schutz und dem eigenen Leben, meist mit Verweis auf die ausführliche Seite.» | SPZ-20; 2 von 27 Antworten ohne Verweis (SP1-18) |
| 9 | W6 | `site.config.json` › `impressum-datenschutz` › `description` | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, keine Dienste anderer Anbieter beim Lesen.» | «Herausgeberin, Kontakt und Datenschutz: keine Cookies, keine Auswertung, beim Lesen keine Daten an andere Anbieter als den Dienst, der die Website ausliefert.» | SPZ-20; Wortlaut der Seite, Abschnitt «Keine Dienste anderer Anbieter». Ändert die rechtliche Prüfung den Satz zu Cookies (SPZ-F-13), folgt die Beschreibung |
| 10 | W7 | `behandlung` › `rollen` | «Skills anbieten und vermitteln, zum Beispiel in der DBT» | «Skills anbieten und vermitteln, zum Beispiel in der Dialektisch-Behavioralen Therapie (DBT)» | SPZ-26; Wortlaut wie `diagnose`, `grenzen`, `selbstfuersorge`, `ueber` |
| 10 | W8 | `behandlung` › `therapieformen` | «Nach NICE sollen Medikamente …» | «Nach der britischen Behandlungsleitlinie NICE sollen Medikamente …» | SPZ-26; Wortlaut wie `diagnose` › `begleiterkrankungen` |
| 10 | W9 | `unterstuetzung` › `buecher` | «Englischsprachiges Standardwerk zu BPS bei Jugendlichen.» | «Englischsprachiges Standardwerk zu Borderline bei Jugendlichen.» | SPZ-26 (SP2-S-7) |
| 10 | W10 | `unterstuetzung` › `buecher` | «Aguirre leitet das McLean-Hospital-Programm für Adoleszente.» | «Aguirre leitet das McLean-Hospital-Programm für Jugendliche.» | SPZ-26 (SP2-S-7) |
| 11 | W11 | `unterstuetzung` › `buecher` | «Für: Partner, Familienmitglieder» (zweimal), «Für: Partner, Angehörige», «Für: Partner in Paarbeziehungen», «Für: Partner, Familienmitglieder, enge Freunde», «Für: Angehörige, Partner» | «Für: Partnerinnen und Partner, Familienmitglieder», «Für: Partnerinnen und Partner, Angehörige», «Für: Partnerinnen und Partner in Paarbeziehungen», «Für: Partnerinnen und Partner, Familienmitglieder, enge Freundinnen und Freunde», «Für: Angehörige, Partnerinnen und Partner» | SPZ-33 |
| 11 | W12 | `unterstuetzung` › `buecher` | «Kommunikationsratgeber speziell für Partner in einer Borderline-Beziehung.» | «Kommunikationsratgeber speziell für Partnerinnen und Partner in einer Borderline-Beziehung.» | SPZ-33 (SP1-30) |
| 11 | W13 | `grenzen` › `gewalt` | «… allfällige Zeugen.» | «… allfällige Zeuginnen und Zeugen.» | SPZ-33 |
| 12 | W14 | `grenzen` › `konsequenz` | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen sie an.» | «Lässt sich eine Grenze nicht umsetzen, holen Sie Unterstützung und passen Sie die Grenze an.» | SPZ-36 (SP2-S-2) |
| 12 | W15 | `grenzen`, Kopf | «Wie die andere Person reagiert, können sie aber nicht garantieren.» | «Wie die andere Person reagiert, können Grenzen aber nicht garantieren.» | SPZ-36 (SP1-31) |
| 12 | W16 | `krise` › `danach`, Vertiefung «Vertrauen wieder aufbauen» | «Mir ist noch beklemmend zumute.» | «Mir ist noch beklommen zumute.» | SPZ-36 (SP2-S-3); Bestand `unterstuetzen--krise.md` Z. 214, nur das falsche Wort berichtigt |
| 13 | W17 | `fragen` › `verlauf` | «… oder eine Posttraumatische Belastungsstörung (PTBS) …» | «… oder eine posttraumatische Belastungsstörung (PTBS) …» | SPZ-37 (SP2-S-8) |
| 13 | W18 | `quellen` › `begriffe`, Vertiefung «Die neun Kriterien im DSM-5-TR» | «Im DSM-5-TR gehören mindestens 5 der folgenden 9 Merkmale …» | «Im DSM-5-TR gehören mindestens fünf der folgenden neun Merkmale …» | SPZ-37 (SP2-S-9); wie `diagnose` › `abklaerung` |
| 13 | W19 | `quellen` | «Veröffentlicht am 29.06.2022.», «Version 2.0 vom 14.11.2022.», «Gültigkeit bis 31.05.2026» | «Veröffentlicht am 29. Juni 2022.», «Version 2.0 vom 14. November 2022.», «Gültigkeit bis 31. Mai 2026» | SPZ-37 (SP2-S-10); Form wie «22. Januar 2020» |
| 13 | W20 | `unterstuetzung` › `buecher` | «Für: Jüngere Kinder ab 4 Jahren», «Für: Alle, die verstehen wollen», «Für: Alle Angehörigen, auch Betroffene selbst», «Für: Erwachsene Kinder von Betroffenen» | «Für: jüngere Kinder ab 4 Jahren», «Für: alle, die verstehen wollen», «Für: alle Angehörigen, auch Betroffene selbst», «Für: erwachsene Kinder von Betroffenen» | SPZ-37 (SP2-S-12) |
| 14 | W22 | `beziehungen` › `was-hilft`, erster Punkt der Liste | «bei der Bedeutung: eine Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)» | «bei der Bedeutung: eine eigene Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)» | SPZ-F-27; Ansatzpunkt der Abbildung 1 derselben Seite |

W21 (`editorialStatus`) gehört nicht in diese Korrektur (Abschnitt 11).

**Hinweise zur Umsetzung:**

- **Nachgesehen:** Jeder Wortlaut der Spalte «heute» steht am Stand `2c7078a` einmal in der Datei der Spalte «Seite › Ort» (`content/<seite>.html` oder `site.config.json`); zu W11 siehe den nächsten Punkt.
- **W11:** «Für: Partner, Familienmitglieder» steht heute einmal allein und einmal als Anfang von «Für: Partner, Familienmitglieder, enge Freunde»; die Entscheide zählen das als «zweimal». Jede der fünf Fassungen wird durch die Fassung an derselben Stelle der Spalte «neu» ersetzt. Danach steht in `content/unterstuetzung.html` kein «Für: Partner,» und kein «Partner in» mehr ohne «Partnerinnen und».
- **W8:** «…» heisst: Der Rest des Satzes bleibt.
- **W3 bis W6** erscheinen in `<meta name="description">` und `og:description`; der Build übernimmt sie.
- **W1 bis W3:** Die Dachzeile «Übersicht» auf `index` bleibt.
- **Dazu, nach RF-4 (entschieden in Abschnitt 11), in `site.config.json` bei der Seite `404`:**

  | Feld | heute | neu |
  | --- | --- | --- |
  | `primaryTask` | «Von einer nicht vorhandenen Adresse zur Übersicht zurückfinden» | «Von einer nicht vorhandenen Adresse zur Startseite zurückfinden» |
  | `visualPlan` › `v-404-text` › `goal` | «Zur Übersicht zurückfinden» | «Zur Startseite zurückfinden» |

  Beides ist nicht sichtbar auf der Website; `gate.html` zeigt `primaryTask` als «Hauptaufgabe». Kein Satz zur Freigabe.

## 5. Figuren bei grosser Schrift und im Druck

Leitregel: «Figuren mit frei platzierten Beschriftungen wechseln bei grosser Schrift in die Listenansicht» (Profilentscheid 11.10.2026, `guidelines/00-technische-qualitaet.md` Z. 23; `guidelines/07-visualisierung-umsetzen.md` Z. 74: Schwellen und Höchstbreiten in `rem`).

### SP2-K-15 · Eisberg (`v-vs-eisberg`) (SPZ-2)

- **Vorgabe (Entscheide, Abschnitt 6):** «Eisberg: Die Container-Schwelle in `borderline.css` Z. 103–125 (`@container (max-width:800px)`) in `rem` oder `em` fassen, so dass die Figur bei 200 % Schrift in die Listenansicht wechselt. Leitregel: «Figuren mit frei platzierten Beschriftungen wechseln bei grosser Schrift in die Listenansicht» (Profilentscheid 11.10.2026). Prüfen bei 1280 und 1440 px mit 100, 150 und 200 % Schrift, Standard und «kontrast», durch Ansehen (nicht nur `scrollWidth`)»
- **Stellen heute:** Z. 119 `@container (max-width:800px)`; Z. 103 `.bl-eis{position:relative;max-width:760px;…}`.

### SP2-K-16 · Bedeutungsschleife (`v-bz-schleife`) (SPZ-3)

- **Vorgabe:** «Bedeutungsschleife: dasselbe für `borderline.css` Z. 19 und 26 (Schwelle `700px`, feste Kreisanordnung), so dass die Schleife ab 150 % Schrift als gestufte Liste mit «zurück zu Station 1» steht. Prüfen wie SPZ-2»
- **Stellen heute:** Z. 19 `.puk-vis-cycle.bl-cycle--5{max-width:640px}`; Z. 26 `@container (max-width:700px)`.

### SP2-K-17 · Zwei Sichten (`v-bz-sichten`) (SPZ-38)

- **Vorgabe:** ««Zwei Sichten»: Schwelle `@container (max-width:560px)` (`borderline.css` Z. 75, 86) in `rem` oder `em`, wie SPZ-2»
- **Stelle heute:** Z. 86 `@container (max-width:560px){.bl-sicht{grid-template-columns:minmax(0,1fr)}}`.
- **Nur Z. 86.** Z. 75 ist die schmale Regel der Anspannungskurve (`.bl-fig`, `.bl-fig--kurve .bl-fig__label`), nicht von «Zwei Sichten». Sie bleibt in `px` (RF-1, entschieden in Abschnitt 11).

### Für SP2-K-15 bis -17 gemeinsam

- **Umrechnung:** Bei Standardschrift (Wurzel 16 px) bleibt jede Schwelle und Breite gleich wie heute. Die Abbildungen bleiben nur freigegeben, weil sich ihre Darstellung nur bei grosser Schrift ändert (Entscheide, Abschnitt 4).
  - `rem` bezieht sich auf die Wurzel: 800 px = 50rem, 760 px = 47.5rem, 700 px = 43.75rem, 640 px = 40rem, 560 px = 35rem.
  - `em` bezieht sich in `@container` auf die Schrift des Containers (`.puk-vis-wide`, 21 px; so in Z. 59–62 für die Kurve: 45.71em ≈ 960 px).
  - Die Höchstbreiten in Z. 19 und Z. 103 fasst du wie ihre Schwellen, damit die Zeichnung mit der Schrift wächst.
- **Gemessen** (Sitzung, die diesen Auftrag geschrieben hat; Chromium, Standardschrift): Breite des Containers `.puk-vis-wide` bei 768 px Fenster 707 px, bei 1024 px 942 px, bei 1280 und 1440 px je 1104 px.
  - Eisberg: 50rem ergibt bei 150 % (24 px) 1200 px, bei 200 % (32 px) 1600 px, beides über 1104 px: Listenansicht wie verlangt.
  - Zwei Sichten: 35rem ergibt bei 200 % 1120 px, knapp über 1104 px: eine Spalte wie verlangt.
  - **Schleife:** 43.75rem ergibt bei 150 % nur 1050 px, unter 1104 px. Die blosse Umrechnung erfüllt das Ziel «ab 150 % Schrift als gestufte Liste» bei 1280 und 1440 px also nicht. Eine einfache, höhere Schwelle (ab etwa 46rem) würde dagegen bei Standardschrift die Darstellung ändern: Container zwischen 700 und 736 px, etwa bei 768 px Fensterbreite, stünden dann als Liste statt als Kreis.
  - Wähle deshalb eine Umsetzung, die **beides** erfüllt: Liste ab 150 % Schrift in allen vier Breiten, und bei 100 % Schrift dieselbe Darstellung wie heute. Ein möglicher Weg ist eine Schwelle, die mit der Schrift stärker als linear wächst, z. B. `@container (max-width: calc(43.75rem + (1rem - 16px) * 100))`: bei 16 px Wurzelschrift 700 px, bei 24 px 1850 px. In Chromium nachgesehen (Container 1104 px): bei 16 px keine Liste, ab 20 px Liste. Prüfe in der Selbstprüfung, dass auch Firefox und Safari (WebKit) die Abfrage auswerten.
  - Findest du keine Umsetzung, die beides erfüllt: Setze für die Schleife nur die Umrechnung um, nenne Messung und Grund in der Selbstprüfung als «Prüfbedarf» und entscheide nicht selbst zwischen den beiden Zielen.
- **Ziel, geprüft durch Ansehen** (Fotos nach SP2-K-28; nicht nur `scrollWidth`):

  | Figur | 100 % Schrift | 150 % | 200 % |
  | --- | --- | --- | --- |
  | Eisberg | wie vorher | ohne Überlagerung | Listenansicht: Zeichnung, beide Gruppen als Liste, die Frage |
  | Schleife | wie vorher | gestufte Liste mit «zurück zu Station 1» | gestufte Liste |
  | Zwei Sichten | wie vorher | ohne Überlagerung, kein Bruch im Wort ohne Trennstrich | eine Spalte |

  Bei keiner Breite und keiner Schriftgrösse überlagert sich Text oder ist abgeschnitten. Alles im Standard und mit `data-theme="kontrast"`.
- Wortlaut, Pfade, Stationen, Leserichtung und Ansatzpunkte bleiben. Die drei Abbildungen bleiben freigegeben (Entscheide, Abschnitt 4).

### SP2-K-18 · Freigabestatus von zwei Abbildungen (Entscheide, Abschnitt 4, M7)

- `site.config.json` › `visualPlan` › `v-vs-anspannung` › `approvalStatus`: «freigegeben» → «ausstehend» (SP2-K-5).
- `site.config.json` › `visualPlan` › `v-ge-trieb` › `approvalStatus`: «freigegeben» → «ausstehend» (SP2-K-7).
- Wortlaut der Entscheide: «Ihre Freigabe trägt eine Entscheidsitzung nach der Nachprüfung im Auftrag der Fachstelle ein, wenn die Nachprüfung sie bei 1280 und 360 px, Standard und «kontrast», angesehen und den Freundin-Test bestätigt hat. Bis dahin setzt die bauende Sitzung `approvalStatus` dieser zwei Zeilen auf «ausstehend».»
- Die übrigen Felder der zwei Zeilen bleiben. Die übrigen acht Abbildungen bleiben «freigegeben».
- Folge: Das Entwurfsgate meldet `visual-approval` für diese zwei Abbildungen als Hinweis; das Produktionsgate blockiert damit zusätzlich. Das ist erwartet.

### SP2-K-19 · Druck der Schleife und begründete Ausnahme (SPZ-43, SPZ-F-32, Entscheide 5.6 Nr. 1)

- **Vorgabe (Entscheide, Abschnitt 6):** «Nur die Schleife: Die Kennzeichnung im Druck an die Darstellung binden (Regel in `borderline.css`, nur mit Tokens), so dass Titel, Kernaussage, Darstellung und Kennzeichnung auf einer A4-Seite stehen. Für `v-vs-anspannung` und `v-bz-sichten`: im Prüfbericht als begründete Ausnahme eintragen, bis das Profil geändert ist (SPZ-F-32, 5.6 Nr. 1)»
- **Druck prüfen:** `beziehungen` als PDF (A4, Chromium) vor und nach der Änderung; danach stehen Titel, Kernaussage, Darstellung und Kennzeichnung der Schleife auf einer Seite. Die Regel gilt nur für die Schleife (z. B. über `[data-visual-id="v-bz-schleife"]`, wie Z. 166 für «Ein neuer Trieb»).
- **Eintrag im Prüfbericht:** Setze diesen Unterabschnitt unverändert direkt nach «### Entscheide zu den Rückfragen RF-1 bis RF-5 (Korrekturauftrag SP2-K, 12.10.2026, im Auftrag der Fachstelle)» und vor «## Schlussprüfung · Zusammenführung der beiden Prüfsitzungen …» ein. Der Wortlaut stammt aus den Entscheiden, Abschnitt 5.6 Nr. 1 und Abschnitt 6.

```
### Begründete Ausnahme · Druckregel (SPZ-F-32)

**12.10.2026 · von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026), `ENTSCHEIDE-SCHLUSSPRUEFUNG.md` Abschnitt 5.6 Nr. 1.** Von der bauenden Sitzung mit der Korrektur SP2-K übertragen.

- **Regel:** «Titel, Kernaussage, Darstellung und Kennzeichnung stehen auf einer A4-Seite» (Profilentscheid 11.10.2026, `guidelines/00-technische-qualitaet.md`).
- **Ausnahme:** Die Abweichung bei `v-vs-anspannung` und `v-bz-sichten` gilt als begründete Ausnahme. Grund: Die Figuren sind mit ihrer Liste länger als eine A4-Seite; die heutige Regel ist für sie nicht einhaltbar (SP2-B-1).
- **Geltung:** bis das Profil geändert ist. R1 prüft gegen die Regel und die eingetragene Ausnahme. Die Profiländerung leitet die Fachstelle im Design-System-Artefakt ein; ist sie vor R1 als neues Paket eingespielt, gilt die neue Regel.
- **Nicht ausgenommen:** die Bedeutungsschleife (`v-bz-schleife`). Ihre Kennzeichnung ist im Druck an die Darstellung gebunden (SPZ-43, Korrektur SP2-K-19).
```

## 6. Quellen und «Verwendet in» (SP2-K-20; SPZ-23, SPZ-F-18; N14)

- **Vorgabe (Entscheide, SPZ-F-18):** «`verstehen` › `quellen`: die sechs Einträge im Format der übrigen Seiten, Angaben wie auf `quellen`; auf allen Seiten «Verwendet in» um die Abschnitte mit Legende ergänzen. Danach `node abgleich/verwendet-auf.mjs --ohne-legenden`: 0 mit anderer Angabe». Die Legenden bleiben, wie sie sind.
- **Format:** wie die bestehenden Einträge, `<li><strong>Kurzangabe</strong><span class="puk-longform__source-use">Verwendet in: «Abschnitt», …</span></li>`; Einträge alphabetisch, Abschnitte in der Reihenfolge der Seite; Abschnittsname = Titel (`h2`) des Abschnitts, in dem die Abbildung steht.
- **Erwartete Änderungen** (ausgezählt von der Sitzung, die diesen Auftrag geschrieben hat, aus `figcaption` und Absätzen mit «Bezugspunkte:» oder «Grundlage:»; prüfe sie nach):

  | Seite | Eintrag | heute | neu |
  | --- | --- | --- | --- |
  | `verstehen` | Baranger et al. (2020) | – | Verwendet in: «Wenn die Anspannung steigt» |
  | `verstehen` | Degasperi et al. (2021) | – | Verwendet in: «Wenn die Anspannung steigt» |
  | `verstehen` | Hoffman et al. (2005) | – | Verwendet in: «Wenn Bewertungen einseitiger werden» |
  | `verstehen` | Linehan (2015) | – | Verwendet in: «Wenn die Anspannung steigt» |
  | `verstehen` | Santangelo et al. (2014) | – | Verwendet in: «Wenn die Anspannung steigt» |
  | `verstehen` | Shields et al. (2016) | – | Verwendet in: «Wenn die Anspannung steigt» |
  | `verstehen` | Linehan (1993) | «Was die Diagnose beschreiben kann» | «Was die Diagnose beschreiben kann», «Was man sieht – und was darunter liegen kann», «Wenn die Anspannung steigt», «Wenn Bewertungen einseitiger werden» |
  | `verstehen` | NICE CG78 (2009) | «Was die Diagnose beschreiben kann» | «Was die Diagnose beschreiben kann», «Wenn die Anspannung steigt» |
  | `grenzen` | Linehan (2015) | «Kontakt halten, ohne immer verfügbar zu sein» | «Kontakt halten, ohne immer verfügbar zu sein», «DEAR: ein Anliegen klar formulieren» |
  | `genesung` | NICE CG78 (2009) | «Remission, Alltag und persönliche Recovery», «Was Genesung beeinflussen kann», «Freiwillige Unterstützung und eigene Grenzen» | «Remission, Alltag und persönliche Recovery», «Veränderung verläuft unterschiedlich», «Was Genesung beeinflussen kann», «Freiwillige Unterstützung und eigene Grenzen» |

  Reihenfolge im Block `verstehen` danach: American Psychiatric Association (2024), Baranger et al. (2020), Degasperi et al. (2021), Hoffman et al. (2005), Linehan (1993), Linehan (2015), NICE CG78 (2009), Porter et al. (2020), Qian et al. (2022), Santangelo et al. (2014), Shields et al. (2016), Storebø et al. (2020), WHO, ICD-11 (2024), WHO, Suicide: Questions and answers (2026), Zanarini et al. (2012).
- Auf `rolle` (NICE CG78) und `kommunizieren` (Fruzzetti, Mason und Kreger) stehen die Abschnitte mit Legende schon. `beziehungen` und `selbstfuersorge` nennen in Legenden keine Quelle mit Jahr.
- Findest du weitere Legendenquellen ohne Abschnitt in «Verwendet in», ergänzt du sie nach derselben Regel und nennst sie in der Selbstprüfung.
- **Prüfen:** `node abgleich/verwendet-auf.mjs --ohne-legenden` → «0 mit anderer Angabe»; `node abgleich/verwendet-auf.mjs` → weiter «0 mit anderer Angabe». «Verwendet auf» auf `quellen` ändert sich dadurch nicht; meldet das Werkzeug trotzdem eine Abweichung, schreibst du nichts mit `--schreiben`, sondern nennst sie in der Selbstprüfung.

## 7. Plan: drei Begründungen (SP2-K-21; SPZ-8, SPZ-9)

Nur Plantext in `site.config.json`, nichts Sichtbares. Vorgaben der Entscheide (Abschnitt 6): SPZ-8 «`site.config.json` › `v-ix-beratung` › `reason` an den heutigen Stand anpassen: Die Beratung der Fachstelle steht auf `index`, `unterstuetzung` wiederholt Kosten und Vertraulichkeit (wie `v-un-beratung` › `reason` seit der Freigabe 2c)»; SPZ-9 «Veraltete Begründungen im Plan berichtigen: `v-ix-haltung` ohne «Muster H», `grenzen` › `saetze` nach dem heutigen Abschnitt». Sie geben den Inhalt vor, keinen Wortlaut; die Spalte «neu» übernimmt ihre Worte oder streicht nur den veralteten Teil und lässt den übrigen Text stehen.

| Zeile | Vorgabe (Entscheide) | `reason` heute | `reason` neu |
| --- | --- | --- | --- |
| `index` › `v-ix-beratung` | SPZ-8: «`site.config.json` › `v-ix-beratung` › `reason` an den heutigen Stand anpassen: Die Beratung der Fachstelle steht auf `index`, `unterstuetzung` wiederholt Kosten und Vertraulichkeit (wie `v-un-beratung` › `reason` seit der Freigabe 2c)» | «Text ist klarer: Angebot und Kontaktweg ohne Beziehung. Wortlaut der Fachstelle vom 09.10.2026 (Korrektur W1-4); steht nur hier, andere Seiten verweisen darauf.» | «Text ist klarer: Angebot und Kontaktweg ohne Beziehung. Wortlaut der Fachstelle vom 09.10.2026 (Korrektur W1-4). Die Beratung der Fachstelle steht auf `index`, `unterstuetzung` wiederholt Kosten und Vertraulichkeit (wie `v-un-beratung` › `reason` seit der Freigabe 2c; SPZ-8).» |
| `index` › `v-ix-haltung` | SPZ-9: «`v-ix-haltung` ohne «Muster H»» | «Text ist klarer: kurze Haltungsaussage. Das Spannungsfeld Fürsorge – eigene Gesundheit ist für «Auf sich achten» als Muster H vorgesehen (Etappe 2); hier genügt der Satz.» | «Text ist klarer: kurze Haltungsaussage; hier genügt der Satz (SPZ-9).» |
| `grenzen` › `v-gr-saetze` | SPZ-9: «`grenzen` › `saetze` nach dem heutigen Abschnitt» | «… Die übrigen Beispiele des Bestands sind für «Zugewandt und klar sprechen» (Etappe 2) vorgemerkt (Korrektur W2-2, W2-3, 09.10.2026).» | «… Die für «Zugewandt und klar sprechen» vorgemerkten Beispiele des Bestands stehen dort im Abschnitt «So könnte es klingen» (Etappe 2b; vorgemerkt mit Korrektur W2-2, W2-3, 09.10.2026; SPZ-9).» |

- Belege: `v-un-beratung` › `reason` («wiederholt ist nur, dass die Beratung der Fachstelle nichts kostet und nicht an Krankenkassen weitergegeben wird (P2c-F-14)»); `v-sf-abend` › `reason` («Ersetzt das geplante Spannungsfeld»: das Muster H wurde nie gebaut, deshalb fällt der Satz weg); `abgleich/grenzen.md` Nr. 209 bis 214 («Bitte um Geld», `kommunizieren#beispiele`); Titel von `kommunizieren` › `beispiele`: «So könnte es klingen».
- Bei `v-gr-saetze` ändert sich nur der letzte Satz; der Anfang («Text ist klarer: drei Situationen …») bleibt.

## 8. Abgleich (SP2-K-22 bis -25)

### SP2-K-22 · Diagnostik-Teil der alten Seite `/verstehen` (SPZ-4, SPZ-F-4)

- **Vorgabe (Entscheide, SPZ-F-4):** «Der Diagnostik-Teil des Bestands (`verstehen.md` Z. 224–275) bekommt im Abgleich je Satz und Listenpunkt eine Zeile.» Folge: «Abgleich-Zeilen in `abgleich/diagnose.md`, angehängt mit neuen Nummern, Status mit «(SPZ-E)»; Kopf von `abgleich/verstehen.md` und `abgleich/diagnose.md` nachführen».
- **Ort:** `abgleich/diagnose.md`, angehängt nach Nr. 405 (letzte Nummer heute), ab Nr. 406. Quelle je Zeile `/verstehen` › Abschnitt («Diagnostischer Überblick», «Begleiterkrankungen — mögliche Kombinationen»).
- **Status** je Zeile mit «(SPZ-E)» und Fundstelle (meist `diagnose#abklaerung` oder `diagnose#begleiterkrankungen`); «entfällt (SPZ-E)» nur mit Grund. Steht dieselbe Aussage schon in einer Zeile für `/verstehen/diagnostik` oder `/verstehen/begleiterkrankungen`, nennt die Bemerkung diese Nummer.
- **Z. 271** (zwei Sätze, je eine Zeile): «übernommen (SPZ-E)», Fundstelle `diagnose#begleiterkrankungen`, Bemerkung «SPZ-F-4, SP2-K-1».
- **Köpfe:** In `abgleich/verstehen.md` Z. 3 wird «ohne Diagnostik-Teil» ergänzt um «(der Diagnostik-Teil, Bestand Z. 224–275, steht in `diagnose.md` ab Nr. 406, SPZ-F-4)». In `abgleich/diagnose.md` Z. 3 kommt dazu: «und der Diagnostik-Teil von `/verstehen` (Bestand `verstehen.md` Z. 224–275, ab Nr. 406, SPZ-F-4)».
- **Selbstprüfung:** Zahl der neuen Zeilen je Status; jede «entfällt»-Zeile mit Grund.

### SP2-K-23 · Zeilen zu den Sätzen aus Abschnitt 3 der Entscheide

| | Datei, Nr. | Status | Neue Fassung, Ort | Bemerkung | Entscheid |
| --- | --- | --- | --- | --- | --- |
| a | `grenzen.md`, neue Zeile mit der nächsten freien Nummer, für «Sie sind es nicht.» (Bestand `/grenzen` › Finanzielle Grenzen, Z. 378) | «übernommen (SPZ-E)» | wörtlich; `kommunizieren#beispiele` | «SPZ-F-5, SP2-K-2» | SPZ-F-5 |
| b | `verstehen.md` Nr. 116 | «umformuliert (Verweis, SPZ-E)» | Wortlaut N4; `verstehen#mythen` | «SPZ-F-6, SP2-K-3; bis SPZ-E: entfällt, Verweis (folgt mit Etappe 2)» | SPZ-F-6 |
| c | `verstehen.md` Nr. 240 und 288 | «zusammengeführt (SPZ-E)» | «Eine Pause, Abstand und weniger Reize können helfen.»; `verstehen#anspannung` | «SPZ-F-8, SP2-K-5: «können helfen» aus dem Bestand zurück»; dazu nennt die Bemerkung, was gegenüber dem Bestandssatz weiter fehlt (SP1-12) | SPZ-F-8 |
| d | `verstehen.md` Nr. 91 | «zusammengeführt (SPZ-E)» | wie heute; `beziehungen#schleife` | «SPZ-F-9: «keine feste Abfolge» entfällt mit Grund (Kreislauf-Modell). Die Absicherung tragen «Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will.» (`beziehungen` › `schleife`, Erklärtext) und «Einen ganzen Menschen erklären sie nicht.» (`beziehungen` › `verstaerker`); bis SPZ-E: umformuliert (einfache Sprache, 1e)» | SPZ-F-9 (unter SPZ-11) |
| e | `selbstfuersorge.md` Nr. 276 | «umformuliert (SPZ-E)» | Wortlaut N5; `selbstfuersorge#eigenes-leben` | «SPZ-F-10, SP2-K-4: Wortlaut von `rolle` › `schuld`; bis SPZ-E: verschoben (Vertiefung, 2a-K)» | SPZ-F-10 |
| f | `beziehungen.md` Nr. 172 | «umformuliert (SPZ-E)» | Fassung mit «eine eigene Vermutung»; `beziehungen#was-hilft` | «SPZ-F-27, SP2-K-14: «eigene» ergänzt; bis SPZ-E: umformuliert (einfache Sprache, 1e)» | SPZ-F-27 |

- Für die übrigen Wortlaute (SP2-K-6, -8 bis -13) gilt die Regel aus Abschnitt 2: Jede Zeile, deren «Neue Fassung» den geänderten Satz nennt, bekommt die neue Fassung, einen Status mit «(SPZ-E)» und die Bemerkung mit W-Nummer und SP2-K-Nummer. Treffer suchen mit `grep` nach dem alten Wortlaut in `abgleich/*.md`; nur die Spalte «Neue Fassung» zählt, nicht «Satz (Bestand)». Die `404` hat keine Abgleichtabelle.

### SP2-K-24 · Verweise «folgt mit Etappe 2» (SPZ-7)

- **Vorgabe (Entscheide):** «`abgleich/verstehen.md` Nr. 116 nach SPZ-F-6. Die übrigen 16 Zeilen mit «folgt mit Etappe 2»: je Zeile prüfen, ob der Verweis heute steht (dann Status und Fundstelle nachführen) oder nicht (dann «entfällt» mit Grund, z. B. «Verweis durch Navigation und Verweissätze der Freigaben 2b und 2c ersetzt»)»
- **Die 16 Zeilen** (nachgesehen, `grep "folgt mit Etappe 2\|folgen mit Etappe 2" abgleich/*.md`): `beziehungen.md` Nr. 221 bis 231 (11 Zeilen, «Weiterführen», Lernweg) und `index.md` Nr. 250 bis 254 (5 Zeilen, Verweise auf `krise` und `selbstfuersorge`). Dazu Nr. 116 (SP2-K-23 b); zusammen 17 wie in SPZ-7.
- Steht der Verweis heute: «umformuliert (Verweis, SPZ-E)» mit Fundstelle und dem Verweissatz als neue Fassung. Sonst: «entfällt (SPZ-E)» mit Grund. Bemerkung «SPZ-7, SP2-K-24».
- **Selbstprüfung:** alle 16 Zeilen mit altem und neuem Status.

### SP2-K-25 · Zeilen mit falschem Status, falscher Fundstelle oder fehlender Bemerkung (SPZ-11)

- **Vorgabe (Entscheide):** «Die Abgleichzeilen der Liste in SPZ-11 berichtigen (Status, Fundstelle, Bemerkung), darunter `verstehen` Nr. 91 nach SPZ-F-9 und Nr. 240, 288 nach SPZ-F-8». Nr. 91, 240 und 288: SP2-K-23 c und d.
- **Die Liste in SPZ-11** mit den Belegen der Prüfungen:

  | Datei | Nr. | Befund | Beleg |
  | --- | --- | --- | --- |
  | `verstehen.md` | 401 | «übernommen», aber gekürzt: «keine Erfolgsgarantie» entfällt (`bewertungen`: «Eine ruhige Antwort ist ein Angebot, nicht Ihre Pflicht.») | SP1-13 (Prüfung 1, 5.1 d, Nr. 19) |
  | `verstehen.md` | 204 | «entfällt» zu streng: gekürzt in `einordnung` («Verstehen bedeutet nicht, alles auszuhalten.») | SP1-13 (Nr. 16) |
  | `selbstfuersorge.md` | 449 | Bemerkung nennt den entfallenen Teil «Unterstützung ist auch ohne Zuordnung zu einem Bereich möglich» nicht; getragen von «Sie dürfen Beratung, Begleitung oder ein Gespräch suchen, sobald Sie das brauchen.» | SP1-13 (Nr. 56) |
  | `grenzen.md` | 285 | Fassung nennt den falschen Satz; tragend ist «Fragen Sie eine spezialisierte Fachstelle nach Dokumentation und Spurensicherung …» | SP1-13 (Nr. 30), SP2-W1B-4 |
  | `grenzen.md` | 287 | «übernommen», aber gekürzt («direkt» und «klären Sie dort das Vorgehen» entfallen) | SP2-W1B-4 |
  | `grenzen.md` | 202 | «übernommen», aber «oder an Wochenenden» entfällt | SP2-W1B-4 |
  | `grenzen.md` | 638 | «übernommen», aber «oder zu einer bestimmten Reaktion zu bringen» entfällt | SP2-W1B-4 |
  | `grenzen.md` | 509 | «entfällt», Bemerkung «verschoben nach `selbstfuersorge`»; die Aussage steht auf `selbstfuersorge` › `kraft` und `warnsignale` | SP2-W1B-5 (E7) |
  | `beziehungen.md` | 206 | Fundstelle unscharf (`grenzen#gewalt`); tragend ist `rolle` › `kinder` | SP1-13 (Nr. 28) |
  | `beziehungen.md` | 142, 145, 151 | «Neue Fassung» nennt nur die Bezeichnung «Mögliche Sicht der betroffenen Person», nicht den Satz; bei Nr. 142 die falsche Bezeichnung (heute «Mögliche Sicht der Schwester») und «übernommen» trotz «Angehörigen» → «Schwester» | SP2-W1B-3 |
  | `unterstuetzung.md` | 40 | Begründung noch «Wortlaut der Vorlage des Starters»; richtig wie `ueber.md` Nr. 73: «Profilentscheid 11.10.2026 (`site.config.json` › `legal`)» | SP1-14 |
  | `genesung.md` | 264 | «entfällt», die Angabe steht aber auf `quellen` › `forschung` | SP2-W1B-5 (E1) |
  | `genesung.md` | 315 | Bemerkung nennt das entfallene «wenn die Person darüber sprechen möchte» nicht | SP1-15 |
  | `behandlung.md` | 266 | Bemerkung nennt das entfallene «weiterführend» nicht | SP1-15 |
  | `kommunizieren.md` | 466 | «entfällt», die Aussage steht auf `fragen` › `behandlung` («Ob jemand eine Therapie beginnt, entscheidet die betroffene Person.») | SP2-W1B-5 (E2) |
  | `quellen.md` | 490 | «entfällt», die Aussage steht auf `fragen` › `gespraeche` | SP2-W1B-5 (E3) |
  | `quellen.md` | 175, 162 | «übernommen», aber gekürzt (First et al. 2017: «Arlington, VA» → «Arlington»; Bundesamt für Statistik: «(BFS)» entfällt) | SP1-15 |
  | `rolle.md` | 457 | «verschoben», aber umformuliert, und «Temperament» entfällt (`grep -c Temperament content/*.html`: 0). Neu: «umformuliert (SPZ-E)»; die Bemerkung nennt «Temperament» als entfallen | SP2-W1B-4; RF-2 |
  | `index.md` | 228 | «entfällt», die Aussage steht aber auf `quellen` › `begriffe`, Begriff «Grenzen setzen»: «Klar sagen, was für Sie möglich, sicher und tragbar ist.» Neu: «umformuliert (SPZ-E)», Fundstelle `quellen#begriffe` | SP2-W1B-5 (E20); RF-2 |

- Die Belege stehen in `PRUEFBERICHT.md`: Prüfung 1, Teile 5.1 d und e; Prüfung 2, Teil 5.1 Punkt 3 (W1B), Befunde SP2-W1B-3 bis -5.
- Nur Status, Fundstelle, Neue Fassung und Bemerkung, kein Seitentext. «übernommen» nur, wenn inhaltlich gleich (`abgleich/README.md`, «Statuswerte»); sonst «gekürzt» oder «umformuliert», und die Bemerkung nennt, was entfällt. «entfällt» nur, wenn die Aussage nicht auf der Website steht; sonst Status und Fundstelle nachführen.
- `rolle.md` Nr. 457 und `index.md` Nr. 228 stehen nicht im Befundtext von SPZ-11, aber in dessen Quellen SP2-W1B-4 und -5. Sie gehören dazu (RF-2, entschieden in Abschnitt 11). Damit stehen 22 Zeilen in dieser Tabelle, dazu Nr. 91, 240 und 288 aus SP2-K-23.

## 9. Weiterleitungen (SP2-K-26; SPZ-54)

- **Vorgabe (Entscheide):** «`_redirects`: Für die `-v1`-Fassungen der Handouts, deren `-v3`-Fassung auf einen Abschnitt leitet, eine Regel mit demselben Ziel, vor der Platzhalterregel `/infografiken/*`. Welche `-v1`-Adressen es gab, steht in der alten `client/public/_redirects` auf `main` von `borderline-angehoerige` (nur lesen)»
- **Heute leiten drei `-v3`-Fassungen auf einen Abschnitt** (`_redirects` Z. 97, 98, 100):
  - `/infografiken/manus-genesung-zahlen-v3.pdf` → `/genesung.html#forschung`
  - `/infografiken/manus-kinder-v3.pdf` → `/rolle.html#kinder`
  - `/infografiken/manus-stopp-technik-v3.pdf` → `/selbstfuersorge.html#zu-viel`
- **Vorgehen:**
  1. Lies in `christaegger-dot/borderline-angehoerige`, Branch `main`, die Datei `client/public/_redirects`. Nur lesen, dort nichts ändern.
  2. Für jede `-v1`-Adresse dort, deren `-v3`-Fassung oben steht, eine Regel mit demselben Ziel und Status 301, im Block «Veröffentlichte PDFs der alten Website», direkt vor `/infografiken/*`, in den Spalten der bestehenden Zeilen. Höchstens drei neue Regeln.
  3. Andere `-v1`-Adressen bekommen keine Regel; sie fallen weiter unter `/infografiken/*`.
  4. Ist die Datei nicht lesbar: SP2-K-26 nicht umsetzen und in der Selbstprüfung melden.
- **Selbstprüfung:** die `-v1`-Regeln der alten Datei, die neuen Zeilen mit Ziel, Zahl der Regeln vorher (85) und nachher. Jedes Ziel gibt es als Datei und als `id` auf der Zielseite.

## 10. Werkzeuge, `UMBAUPLAN.md`, `README.md` (SP2-K-27)

| | Ort | Vorgabe (Entscheide) | Umsetzung |
| --- | --- | --- | --- |
| a | `abgleich/kennzahlen.mjs`, `RICHTWERT` | SPZ-F-15: «`abgleich/kennzahlen.mjs` Z. 40: die fünf Werte auf `null`» | `verstehen: 1300`, `beziehungen: 1100`, `grenzen: 1500`, `fragen: 1500`, `ueber: 900` → je `null`. Die Konstante steht heute in **Z. 38** (die Entscheide nennen Z. 40). |
| b | `UMBAUPLAN.md` Z. 33, 34, 39 | SPZ-F-15: «Klammer ersetzen durch «(kein Richtwert, Entscheide in `KORREKTUR-ETAPPE-1C.md` bis `-1F.md`, bestätigt mit SPZ-F-15)»» | Zeilen `verstehen` «(1100)», `beziehungen` «(1000)», `grenzen` «(1200)» → je «(kein Richtwert, Entscheide in `KORREKTUR-ETAPPE-1C.md` bis `-1F.md`, bestätigt mit SPZ-F-15)» |
| c | `UMBAUPLAN.md` Abschnitt 2, Spalte «Navigation» | SPZ-F-22: «Spalte «Navigation» bei `krise`, `kommunizieren` und den übrigen Seiten nach dem heutigen Linkgraph (Hauptinhalt) nachführen, mit Vermerk «nachgeführt mit SPZ-F-22»» | In jeder Zeile, deren Spalte eine Liste «verlinkt aus …» hat, die Seiten nach den Links in `content/*.html` nach dem Bau, im Stil der Spalte. Am Stand `2c7078a` verlinken auf `krise`: Verstehen, Diagnose, Behandlung, Kommunizieren, Auf sich achten, Häufige Fragen (wie in SPZ-F-22). Den Vermerk «nachgeführt mit SPZ-F-22» setzt du in den einleitenden Absatz von Abschnitt 2, wie die Vermerke der früheren Korrekturen, mit den geänderten Zeilen. Keine neuen Verweise auf den Seiten, kein Einstieg auf `index`. |
| d | `abgleich/bedienung.mjs`, `PAGES` (Z. 23) | SPZ-44: «`404` in `PAGES` aufnehmen» | `'404'` am Ende der Liste. Danach läuft das Skript, soweit die Umgebung es erlaubt; Ergebnis für `404` in der Selbstprüfung. |
| e | `README.md` der Website, Abschnitt «Veröffentlichen» | SPZ-52: «Im `README.md` der Website die Schritte für den Produktions-Export festhalten: in einen leeren Zielordner exportieren, `_redirects` von Hand kopieren, danach Weiterleitungen und Kopfzeilen auf der Vorschau prüfen» | Am Ende des Abschnitts eine Liste mit genau diesen drei Schritten, der erste mit dem Befehl `node tools/export.mjs <zielordner> --production` aus demselben Abschnitt. |

Danach läuft `node abgleich/kennzahlen.mjs` ohne Fehler.

## 11. Was nicht geändert wird

- **Fusszeile (`editorialStatus`, W21) und die 98 Textzeilen des Plans:** erst in Schritt 3 nach der Nachprüfung (SPZ-F-2, SPZ-F-3; Entscheide, Abschnitt 6, Schritt 3). In dieser Korrektur bleiben «Entwurf – fachliche Prüfung ausstehend» und `approvalStatus` «ausstehend» bei allen Zeilen mit `format` «text».
  - W21 (Entscheide 3.8): `site.config.json` › `editorialStatus`, heute «Entwurf – fachliche Prüfung ausstehend», neu «Fachlich freigegeben am TT.MM.JJJJ» (Datum nach SPZ-F-2); «SPZ-1, SPZ-F-2; erst in Schritt 3 von Abschnitt 6».
  - SPZ-1 (Entscheide 6): «Fusszeile: Wortlaut und Zeitpunkt nach SPZ-F-2 (Schritt 3). Profilvorschlag 5.6 Nr. 3». SPZ-46: «SPZ-F-3 (Schritt 3)».
- **SPZ-F-21** (Bezeichnung zu F60.31): zurück an die Fachstelle; der heutige Text bleibt. Nicht nachschlagen, nichts einsetzen.
- **Rechtliche Prüfung** (SPZ-F-13, -14, Entscheide 5.5): nicht Teil der Korrektur. Cookie-Satz, Urheberrecht und Lizenztext der Schrift bleiben.
- **Entscheide «keine Änderung»:** SPZ-F-1, -7, -9 (an der Abbildung), -11, -12, -16, -17, -20, -23, -24, -25, -26, -28, -29, -31, -39. Insbesondere: keine Verschiebung von «Die Abgrenzung gehört in eine fachliche Abklärung.» (SPZ-F-7), kein Satz «keine feste Abfolge» an der Schleife (SPZ-F-9), keine Linie mit 3 px in «Ein neuer Trieb» (SPZ-F-31), keine neuen Weiterleitungen für `/FAQ` oder `/Soforthilfe` (SPZ-F-39).
- **Profilebene** (SPZ-F-32, -34; SPZ-34, -39, -40, -45, -47 bis -51, -53): nichts in diesem Repository. Ausnahme: der Eintrag der begründeten Ausnahme (SP2-K-19).
- **Bewusst nicht korrigierte Befunde** (Entscheide, Abschnitt 6): SPZ-10, -12, -13, -16, -17, -18, -21, -24, -25, -27, -35, -42, -55, -56, -57, -58, -59, -60.
- **Handlungen der Fachstelle** (Entscheide, Abschnitt 5): Netlify, PR `christaegger-dot/borderline-angehoerige#659`, Schutz der Vorschauen, reale Tests. SPZ-6 (Entscheide 6): «Erledigt durch die Fachstelle (SPZ-F-38); die Nachprüfung bestätigt `draft: true`».
- **Ohne eigene Handlung in der Korrektur:** SPZ-14 (Entscheide 6): «`404` freigegeben mit diesem Dokument (Abschnitt 4)»; SPZ-15: «SPZ-F-8» (= SP2-K-5).
- **Die Freigabe** der neuen Sätze gilt mit Abschnitt 4 der Entscheide für den dort stehenden Wortlaut. Die Freigabe der Abbildungen `v-vs-anspannung` und `v-ge-trieb` folgt nach der Nachprüfung (SP2-K-18).

### Entscheide zu den Rückfragen RF-1 bis RF-5

**12.10.2026 · von Claude im Auftrag der Fachstelle entschieden.** Der Auftrag nannte zuerst fünf Lücken in den Entscheiden als Rückfragen an die Fachstelle. Die Fachstelle hat am 12.10.2026 entschieden, dass Claude sie anstelle der Fachstelle entscheidet («DU sollst für die Fachstelle entscheiden und diese Pendenzen erledigen!»). Entschieden hat die Sitzung, die diesen Auftrag geschrieben hat. Sie hat an der Website weder gebaut, korrigiert noch geprüft und ist von Korrektur und Nachprüfung ausgeschlossen. Massstäbe wie bei den Entscheiden (`ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md`, Abschnitt 4, M1 bis M7). Keiner der Entscheide bringt einen neuen sichtbaren Satz; die Liste «Neue Sätze zur Freigabe» der Entscheide bleibt, wie sie ist.

| Nr. | Frage | Entscheid | Begründung und Beleg | Folge |
| --- | --- | --- | --- | --- |
| RF-1 | Gilt die Umrechnung in `rem` oder `em` auch für `borderline.css` Z. 75? | **Nein.** Z. 75 bleibt in `px`; umgestellt wird nur Z. 86. | SPZ-38 betrifft nur «Zwei Sichten» («Schwelle `@container (max-width:560px)` in px; bei 768 px mit 200 % zwei schmale Spalten, «Unterstützung» bricht im Wort», `PRUEFBERICHT.md`, SPZ-38). Z. 75 hat dieselbe Schwelle, gehört aber zur Anspannungskurve (`.bl-fig`). Deren Verhalten bei grosser Schrift regelt schon Z. 62 in `em` (NK31-1, `FREIGABE-ETAPPE-2C-3-1.md` Abschnitt 3 d, freigegeben). Gemessen: Container bei 1280 und 1440 px 1104 px; Z. 75 in `rem` (35rem) griffe bei 200 % Schrift (1120 px) und würde die Zeichnung nur auf `calc(var(--space-20) * 5)` = 400 px verkleinern, die Beschriftungen blendet Z. 62 dann schon aus. Eine kleinere Zeichnung bei grösserer Schrift widerspricht der Leitlinie («Bei grösserer Schrift wächst die Zeichnung mit», `guidelines/07-visualisierung-umsetzen.md` Z. 74). M4. | SP2-K-17 |
| RF-2 | Sollen `abgleich/rolle.md` Nr. 457 und `abgleich/index.md` Nr. 228 mit berichtigt werden? | **Ja**, nach denselben Regeln wie die übrigen Zeilen in SP2-K-25. | SPZ-11 nennt als Quelle «SP2-W1B-3, -4, -5». SP2-W1B-4 nennt `rolle.md` Nr. 457, SP2-W1B-5 nennt `index.md` Nr. 228 (`PRUEFBERICHT.md`, Befunde SP2-W1B-4 und -5, Stichprobe E20). Die Liste im Befundtext hat sie ausgelassen, die Zusammenführung hat sie nicht verworfen. Gleiche Fehlerart, nur Abgleich, kein Seitentext (M4). Nachgesehen: «Temperament» steht auf keiner Seite; «Klar sagen, was für Sie möglich, sicher und tragbar ist.» steht auf `quellen` › `begriffe`. | SP2-K-25, zwei Zeilen mehr |
| RF-3 | Kommt «früheren» im Plan von `v-vs-anspannung` auch zu «mit Inhalten aus drei weiteren Handouts zur Anspannung»? | **Nein.** Der Teil bleibt, wie er ist. | Die Entscheide regeln den gleichen Fall beim Eisberg: «Beim Eisberg (`v-vs-eisberg`) nennt nur der Plan das Handout, die Legende nicht; dort bleibt der Plan, wie er ist.» (Wortlaut 3.6). Die drei weiteren Handouts nennt ebenfalls nur der Plan. Der Grund von SPZ-F-19 (Lesende suchen «das Handout» vergeblich) betrifft nur die sichtbaren Legenden. M1, M4. | SP2-K-6 |
| RF-4 | Ändern sich mit W1 bis W3 auch `404` › `primaryTask` und `v-404-text` › `goal`? | **Ja.** «Übersicht» wird in beiden Feldern «Startseite»; Wortlaut in SP2-K-8. | SPZ-22: Die Startseite hat zwei Namen; die Entscheide wählen «Startseite», «Name wie im `<title>` und im Logo» (W1). Beide Felder beschreiben den Link, der nach W2 «Zur Startseite» heisst. `gate.html` zeigt `primaryTask` als «Hauptaufgabe» (`tools/gate-browser.js` Z. 8). Nur dieses Wort ändert sich; nicht sichtbar auf der Website, kein Satz zur Freigabe. Regel «Ein Satz steht an mehreren Stellen» (Abschnitt 2). | SP2-K-8 |
| RF-5 | Ändert sich in Schritt 3 mit `editorialStatus` auch `shortDescription`? | **Ja, in Schritt 3:** Der Satz «Entwurf, fachliche Prüfung ausstehend.» entfällt. Neu: «Psychoedukative Website der Fachstelle Angehörigenarbeit PUK für Angehörige von Menschen mit Borderline.» | Nach Schritt 3 wäre der Satz falsch (SPZ-F-2). Den Status mit Datum trägt `editorialStatus`. Ein zweiter Ort mit Status müsste bei jeder neuen Freigabe mitgeführt werden («Ändert sich danach ein Inhalt …, wird das Datum mit der neuen Freigabe nachgeführt», SPZ-F-2). `shortDescription` steht auf keiner gebauten Seite; es ist nur ein Pflichtfeld (`tools/contract.js` Z. 190). Die Website «Depression» im selben Repository nennt in `shortDescription` keinen Status. Der erste Satz bleibt wörtlich. | Abschnitt 15, Schritt 3; nicht Teil von SP2-K |

## 12. Selbstprüfung (SP2-K-28)

Im Prüfbericht ein neuer Block «Korrektur SP2-K (nach der Schlussprüfung, Entscheide PR #60 und #61)» in «## Selbstprüfung der bauenden Sitzung», direkt nach dem Satz «Nach jedem Bau ohne Nachfrage ausfüllen: …» und vor «**Stand 12.10.2026 · Etappe 3-2 …**». Er enthält:

1. **Stand je Punkt:** SP2-K-1 bis -27, je «umgesetzt» oder «nicht umgesetzt» mit Beleg (Datei, Zeile, Zitat, Befehl mit Ausgabe).
2. **Neue Sätze zur Freigabe:** jeder neue oder geänderte sichtbare Satz mit Seite › Abschnitt, Wortlaut heute und neu, SP2-K-Nummer und der Nummer aus Abschnitt 4 der Entscheide (N1 bis N14, N16). Jeder Satz muss wörtlich der Liste der Entscheide entsprechen; ein Satz ohne N-Nummer ist ein Befund. N15 (Fusszeile) steht mit dem Vermerk «Schritt 3, nicht in SP2-K».
3. **Entfallene Sätze:** jeder entfallene sichtbare Satz mit dem Satz, der ihn ersetzt. Erwartet sind nur die Wortlaute der Spalten «heute» aus SP2-K-4 bis -6 und SP2-K-8 bis -14 sowie die bisherigen Angaben «Verwendet in» aus SP2-K-20. Ein entfallener Satz ohne Ersatz ist ein Befund.
4. **Satzdiff:** neue und entfallene Sätze je Seite gegen `2c7078a`, per Skript, mit Text in `<main>`, Vertiefungen, `p.puk-sr` und den Meta-Beschreibungen. Jeder Treffer steht in Punkt 2 oder 3.
5. **Fotos der geänderten Figuren:** Eisberg, Anspannungskurve, Bedeutungsschleife, Zwei Sichten, «Ein neuer Trieb» und die drei Figuren mit geänderter Legende (`v-ro-weg`, `v-sf-abend`, `v-ko-tassen`).
   - je bei 360, 1024, 1280 und 1440 px Fensterbreite
   - je mit 100, 150 und 200 % Schrift über die Browser-Einstellung «Schriftgrösse» (z. B. CDP `Page.setFontSizes({standard: 16 | 24 | 32})`; Kontrolle `getComputedStyle(document.documentElement).fontSize`), nicht über den Seitenzoom
   - je im Standard und mit `<html data-theme="kontrast">`
   - dazu für Eisberg, Schleife und Zwei Sichten dieselben Fotos bei 100 % am Stand `2c7078a` (vorher), zum Vergleich
   - Die Fotos bleiben ausserhalb des Repositorys. Im Bericht eine Tabelle je Figur: Breite × Schrift × Theme mit Ansicht (Kreis, Liste, Figur, eine oder zwei Spalten) und Befund (Überlagerung, abgeschnittener Text, Bruch im Wort ohne Trennstrich: je ja oder nein).
6. **Visualisierungs-Check** je geänderter Figur als Tabelle (Prüfpunkte der Leitlinie «Visualisierung umsetzen»), je Punkt Ergebnis und Beleg. Für die Figuren aus Punkt 5 bei 1280 und 360 px den **Freundin-Test** (`CLAUDE.md`): Würde eine Angehörige das Bild einer Freundin zeigen, um zu erklären, wie es ihr geht?
7. **Druck:** `beziehungen` vor und nach SP2-K-19 (A4): Seite, auf der Titel, Kernaussage, Darstellung und Kennzeichnung der Schleife stehen.
8. **Schwellen:** gewählte Werte in `rem` oder `em` mit Umrechnung; bei der Schleife die Umsetzung und der Nachweis in Chromium, Firefox und WebKit (SP2-K-16).
9. **Abgleich:** Zahl der geänderten und neuen Zeilen je Datei und Status; die Listen aus SP2-K-22, -24 und -25.
10. **Wörter** der geänderten Seiten vorher und nachher (`node abgleich/kennzahlen.mjs`).
11. **Aufgefallen, nicht geändert.**
12. Keine Stufe als «erledigt» eintragen; die Statustabelle bleibt. In der Antwort an die Fachstelle nennst du die nicht erfüllten Punkte.

## 13. Prüfungen vor dem Commit

Im Ordner `templates/website/borderline-angehoerige/`:

| Befehl | erwartet |
| --- | --- |
| `node tools/build.mjs` | 0 blockierend. Hinweise: `crisis-number-check` («144» auf `quellen`), `review-report` und neu `visual-approval` für `v-vs-anspannung` und `v-ge-trieb` (SP2-K-18) |
| `node tools/gate.mjs --selftest` | 65/65 bestanden (das Gate bleibt unverändert) |
| `node abgleich/pruefe-abgleich.mjs` | «… Zeilen, 0 ohne Fundstelle»; Zahl der Zeilen höher als 7371 (SP2-K-22, -23 a) |
| `node abgleich/verwendet-auf.mjs --ohne-legenden` | «… 0 mit anderer Angabe» |
| `node abgleich/verwendet-auf.mjs` | «… 0 mit anderer Angabe» |
| `node abgleich/kennzahlen.mjs` | läuft ohne Fehler |

Dazu:

- `grep -rn "tel:" content/ *.html` → 0 Treffer; `grep -rn 'style="' content/` → 0 Treffer.
- `git status`: nur die Dateien aus Abschnitt 1, «Dateien, die sich ändern dürfen».
- Interaktive Elemente auf den geänderten Seiten (Vertiefungen auf `selbstfuersorge`, `krise`, `quellen`, Quellenblöcke): einmal mit Tastatur, bei 320 px und mit reduzierter Bewegung (`CLAUDE.md`).
- Zur Kenntnis, kein Kriterium für den Commit: `node tools/gate.mjs --production` blockiert mit `review-report` und `visual-approval`.

## 14. Commit und Pull Request

- Branch `korrektur-sp2-k`, abgezweigt von `main` nach dem Merge des PR mit diesem Auftrag.
- Committen erst, wenn alle Prüfungen aus Abschnitt 13 durchlaufen sind. Keine Exporte, Fotos, Arbeitsstände oder Zugangsdaten committen.
- Entwurfs-PR gegen `main`. Die Beschreibung nennt die offenen Stufen (alle Stufen von W1 bis R3 «offen»), die nicht erfüllten Punkte der Selbstprüfung und die Rückfragen, die die bauende Sitzung hat.

## 15. Danach

Reihenfolge nach Abschnitt 6 der Entscheide; die Handlungen der Fachstelle nach Abschnitt 5. Während Korrektur und Nachprüfung bleibt Netlify unverändert.

1. **Nachprüfung** durch eine Sitzung, die weder gebaut, noch geprüft, noch entschieden hat und diesen Auftrag nicht geschrieben hat. Sie ändert keine Inhalte und keinen Code und trägt Befunde mit Beleg in `PRUEFBERICHT.md` ein. Sie prüft:
   - jeden Punkt SP2-K-1 bis -27 gegen diesen Auftrag, im Wortlaut;
   - dass die Sätze N1 bis N14 und N16 aus Abschnitt 4 der Entscheide wörtlich und am genannten Ort stehen (Entscheide, Abschnitt 4: «Weicht ein Wortlaut ab, gilt die Freigabe für ihn nicht»), mit einem eigenen Satzdiff gegen `2c7078a`;
   - die Abbildungen «Anspannungskurve» (`v-vs-anspannung`) und «Ein neuer Trieb» (`v-ge-trieb`) bei 1280 und 360 px, Standard und «kontrast», mit Freundin-Test, als Grundlage für ihre neue Freigabe (Entscheide, Abschnitt 4);
   - Eisberg, Schleife und Zwei Sichten bei 360, 1024, 1280 und 1440 px mit 100, 150 und 200 % Schrift, Standard und «kontrast», durch Ansehen; den Druck der Schleife;
   - den Abgleich (Stichprobe aus SP2-K-22 bis -25, `pruefe-abgleich.mjs`) und `verwendet-auf.mjs` in beiden Modi;
   - SPZ-6: PR `christaegger-dot/borderline-angehoerige#659` ist weiter ein Entwurf (`draft: true`), nur lesen;
   - dass an Netlify und im Repository `christaegger-dot/borderline-angehoerige` nichts geändert wurde.
2. **Freigabe eintragen** (Entscheide, Abschnitt 6, Schritt 3): Eine Entscheidsitzung trägt im Auftrag der Fachstelle die neue Freigabe der zwei Abbildungen ein. Danach setzt eine bauende Sitzung `editorialStatus` auf «Fachlich freigegeben am TT.MM.JJJJ» (W21, Datum nach SPZ-F-2), kürzt `shortDescription` auf «Psychoedukative Website der Fachstelle Angehörigenarbeit PUK für Angehörige von Menschen mit Borderline.» (RF-5), setzt die 98 Textzeilen des Plans auf «freigegeben» (SPZ-F-3), baut neu und trägt die Freigabe in den Prüfbericht ein.
3. **Vor R1** (Entscheide, Abschnitt 6, Schritt 4, und Abschnitt 5): rechtliche Prüfung (5.5) und SPZ-F-21; Release-Kandidat mit `--production` auf der Vorschau (5.1 Nr. 3); reale Tests (5.4). Danach R1, R2, R3. NK-F-3 bis spätestens vor R3.

## 16. Startnachricht für die bauende Sitzung

Voraussetzung: Der PR mit diesem Auftrag ist in `main` gemergt. Sonst in der Nachricht «abgezweigt von main nach dem Merge des PR mit diesem Auftrag» durch «abgezweigt von korrektur-schlusspruefung-2» ersetzen.

```
Setze den Korrekturauftrag KORREKTUR-SCHLUSSPRUEFUNG-2.md (Korrektur «SP2-K») für die
Website templates/website/borderline-angehoerige/ um. Grundlage sind die Entscheide in
ENTSCHEIDE-SCHLUSSPRUEFUNG.md im selben Ordner, Fassung aus PR #60 mit dem Nachtrag aus
PR #61, von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026).
KORREKTUR-SCHLUSSPRUEFUNG.md (SP-K) gilt nicht; übernimm daraus nichts. Die Rückfragen
RF-1 bis RF-5 sind entschieden (Abschnitt 11 des Auftrags).
Du bist die bauende Sitzung. An der Schlussprüfung, ihrer Zusammenführung, den
Entscheiden und am Korrekturauftrag hast du nicht mitgearbeitet.
Lies zuerst CLAUDE.md, guidelines/00-ablauf-pruefung-und-freigabe.md, den Korrekturauftrag
ganz und die Abschnitte 3, 4 und 6 der Entscheide.
Halte dich an die Wortlaute des Auftrags. Ändere nur die Dateien und Stellen, die er nennt,
und weder Leitlinien noch Tokens, Komponenten oder Starter-Werkzeuge. Was dir sonst
auffällt, nennst du in der Selbstprüfung.
Fusszeile und Textzeilen des Plans bleiben (Schritt 3 nach der Nachprüfung). SPZ-F-21 und
die rechtliche Prüfung sind nicht Teil der Korrektur. Netlify und das Repository
christaegger-dot/borderline-angehoerige bleiben unverändert; für SP2-K-26 liest du dort
nur client/public/_redirects auf main. Geht das nicht, setzt du SP2-K-26 nicht um und
meldest es.
Bei der Bedeutungsschleife (SP2-K-16) gilt: Liste ab 150 % Schrift und bei 100 % dieselbe
Darstellung wie heute. Geht nicht beides, entscheidest du nicht selbst, sondern meldest es.
Trage keine Stufe als «erledigt» ein; die Statustabelle bleibt unverändert.
Arbeite auf dem Branch korrektur-sp2-k, abgezweigt von main nach dem Merge des PR mit
diesem Auftrag. Committe erst, wenn die Prüfungen aus Abschnitt 13 durchlaufen sind, und
öffne einen Entwurfs-PR gegen main, der die offenen Stufen nennt.
```
