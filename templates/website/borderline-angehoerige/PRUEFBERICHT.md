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
| W1 Fachliche Prüfung | offen | 09.10.2026 | dritte Prüfrunde: zwei Prüfsitzungen (Claude, haben nicht gebaut) | 1 mittel, 5 leicht; Prüfbedarf für die Fachstelle. Freigabe nur durch die Fachstelle. |
| W2 Gesamtkohärenz | offen | 09.10.2026 | dritte Prüfrunde | kein neuer Befund; offen aus der zweiten Runde: F-W2-02, F-W2-03 (Fachstelle) |
| S Sprach-Review | offen | 09.10.2026 | dritte Prüfrunde | 1 leicht; abschliessbar erst nach W1 und W2 |
| Visualisierungs-Check | offen | 09.10.2026 | dritte Prüfrunde | 1 mittel, 3 leicht |
| Bedienung und Barrierefreiheit | offen | 09.10.2026 | dritte Prüfrunde, automatisiert | 1 leicht; reale Screenreader-Läufe fehlen |
| W3 Code-Review | offen | | | erst nach Umsetzung von W2 und S |

Dazu 5 leichte Befunde zu Bericht und Abgleich. Die erste und zweite Prüfrunde stehen weiter unten zur Nachvollziehbarkeit; ihre Befunde sind durch die dritte Runde überholt, soweit sie nicht ausdrücklich als offen genannt sind.

## Selbstprüfung der bauenden Sitzung

Nach jedem Bau ohne Nachfrage ausfüllen: Visualisierungs-Check wie unten, mit Beleg je Punkt. Arbeitsstand, keine Prüfstufe.

**Stand 10.10.2026 · Korrektur Etappe 1h · bauende Sitzung (Claude Code).** Umgesetzt ist `KORREKTUR-ETAPPE-1H.md`. Er setzt die Entscheide der Fachstelle zum Bildsprache-Audit vom 10.10.2026 um:

- **Profil-Update:** Build r4-6 übernommen (Abschnitt 3).
- **`verstehen`:**
  - Der Eisberg ist neu gezeichnet, die Wörter stehen im Eisberg.
  - «Momentaufnahmen» ersetzt das Pendel.
  - Stelle 4 der Anspannungskurve heisst «Es wird wieder ruhiger.».
  - Die Annahmen stehen als Liste im Text statt als Abbildung.
- **`beziehungen`:**
  - Die Stationen der Bedeutungsschleife haben drei Zeilen und weiche Ecken.
  - Bei Zwei Sichten haben beide Seiten dieselbe Oberkante.
- **`grenzen`:** DEAR nummeriert «1» bis «4».
- **`visualPlan`:**
  - `resonance` für die sechs Darstellungen.
  - Einträge für Eisberg, Momentaufnahmen und Annahmen nach dem Auftrag.

`index` ist unverändert. Die Prüfstufen bleiben offen. Diese Selbstprüfung ersetzt die der Korrektur 1g (Stand `3f94087`). Sie ist nicht die Stufe «Visualisierungs-Check».

### Nachtrag: Gate-Korrektur r4-7 (10.10.2026)

Das Profil-Update `update-2026-10-10b.patch` (Commit `664dff4` auf `main`) behebt die Gate-Lücke aus 1h. Eine Illustration mit `.puk-vis-scene` gilt jetzt als eigene Zeichnung.

- **Zusammenführen:** `main` in `borderline-umbau`, ohne Konflikt (Merge-Commit `56f5438`). Damit sind auch `skizze-eisberg.png` und `skizze-momentaufnahmen.png` aus dem Stamm entfernt.
- **Werkzeuge:** Aus dem Starter übernommen sind `tools/contract.js` und, auf Rückfrage wie in 1h, `gate.html` und `README.md`. `diff -rq tools/` und `cmp` gegen den Starter ergeben keine Unterschiede.
- **«Momentaufnahmen»:** Auf der Seite steht `data-visual-type="illustration"`, im Plan `format` «illustration», wie 1H verlangt. Aus `reason` ist der Satz «Vorläufig als «figure» geführt: …» gestrichen; `reason` steht wieder im Wortlaut von 1H.
- **`$comment`:** um «Gate-Korrektur 10.10.2026 übernommen: Build r4-7» ergänzt. `assetVersion` bleibt r4-6, weil das Patch keine Assets ändert.
- **`borderline.css`:** Vorher `grep`: `bl-myth` kommt in keiner Seite und keinem Skript vor. Entfernt sind:
  - der Kommentar «Muster E, Annahmen …»
  - 5 Regeln `.bl-myths` / `.bl-myth*`
  - 2 Zeilen in `@container (max-width:560px)`; `.bl-sicht` bleibt dort
  - der Selektor `.bl-myth .puk-vis-compare__col h3` in der gemeinsamen Regel mit `.bl-sicht>h3`
  - «Annahmen» im Sammelkommentar

  Danach liefert `grep -c bl-myth` 0 Treffer.
- **`abgleich/README.md`:** Notiz in der Zeile «Momentaufnahmen» der Entscheide 1h. Kein Satz ist geändert; `pruefe-abgleich` ergibt 1763 Zeilen, 0 ohne Fundstelle.
- **Prüfungen:**
  - **Build:** r4-7, 0 blockierend, 20 Hinweise wie zuvor, kein `placeholder-status`.
  - **Selbsttest:** 53/53.
  - **Produktionsgate:** 19 blockierend wie zuvor (6 × `visual-approval`, 12 × `placeholder-approval`, 1 × `review-report`).
  - **Chromium:** kein Überlauf bei 320 bis 1440 px. Die Bildschirmfotos aller sechs Figuren bei 1280 und 360 px und im Theme «kontrast» sind pixelgleich mit dem Stand vor dem Nachtrag.
- **Im Visualisierungs-Check angepasst:** Zeile 1 sowie die Punkte «Abweichungen vom Auftrag» und «Design-System». Die Bewertungen E/T/N bleiben.

Die Angaben unten beschreiben den Stand von 1h. Wo der Nachtrag sie überholt, ist das vermerkt.

**Gates und Skripte:**

- **`node tools/build.mjs`:**
  - 15 Seiten, Build r4-6, 0 blockierend (seit dem Nachtrag Build r4-7).
  - 20 Hinweise:
    - 6 Visualisierungen nicht freigegeben
    - 12 Platzhalter nicht freigegeben
    - `siteUrl` fehlt
    - Prüfbericht offen
  - Vor 1h waren es 21 Hinweise. `v-vs-mythen` ist jetzt eine Textzeile im Plan.
  - Kein Hinweis `resonance` und kein Hinweis `visual-plan`.
- **`node tools/gate.mjs --selftest`:** 52/52 bestanden (seit dem Nachtrag 53/53).
- **`node tools/gate.mjs --production`:**
  - Blockiert erwartungsgemäss mit 19 Befunden:
    - 6 × `visual-approval`
    - 12 × `placeholder-approval`
    - 1 × `review-report`, offene Stufen samt R1 bis R3
  - Dazu 1 Hinweis (`siteUrl`). Kein Befund `resonance`.
- **`node abgleich/pruefe-abgleich.mjs`:** **1763 Zeilen, 0 ohne Fundstelle.** Ob die genannte Fassung die Aussage trägt, prüft das Skript nicht; das bleibt Aufgabe von W1.
- **Wortlaut:** Ein Skript der bauenden Sitzung sucht jede Stelle in «…» aus 1H, Abschnitt 4 bis 7 (ohne Codeblöcke). Es sucht im sichtbaren Text von `verstehen`, `beziehungen` und `grenzen` und in `site.config.json`.
  - Ergebnis: 49 Stellen, 43 gefunden. Die 6 übrigen sind keine Fehler:
    - 5 zitiert der Auftrag als Text, der ersetzt wird: «Später.», «Links / Mitte / Rechts», «Abbildung 4», «Schritt 1 von 4», «Schritt 4 von 4».
    - «Verbreitete Annahme: «…»» ist das Muster für die sieben `dt`.
  - HTML-Gerüst und beide SVG aus den Codeblöcken stehen zeichengleich in `content/verstehen.html` (Skript).
- **Unverändert:** Ein Skript vergleicht mit dem Stand `c9e0375` (vor 1h).
  - `content/verstehen.html` ist ausserhalb von Abbildung 1 bis 3 und der Annahmen gleich. Auch der Suizid-Absatz und der Verweis im Text sind gleich.
  - In der Anspannungskurve sind nur die genannten Beschriftungen, die Überschrift an Stelle 4 und die Kurzbeschreibung geändert.
  - `content/beziehungen.html`: nur die fünf Stationen und die Klasse `puk-vis-compare__col--b` (4×) sind geändert.
  - `content/grenzen.html`: nur die vier Nummern von DEAR sind geändert.
  - `index` ist gleich.

### Auftrag verschieben

| Schritt | Stand | Beleg |
| --- | --- | --- |
| Upload im Stamm | `KORREKTUR-ETAPPE-1H.md` aus `4dec6ad` unverändert in den Website-Ordner gelegt | Commit `f56330f` auf `borderline-umbau`; `cmp` mit der Fassung aus `main`: gleich |
| Stamm von `main` | Datei gelöscht | Commit `e85ed65` auf `main` |
| Zusammenführen | `main` in `borderline-umbau`, ohne Konflikt; bringt auch das Profil-Update `b920b58` | Merge-Commit `84cac17` |
| Skizzen | `skizze-eisberg.png` und `skizze-momentaufnahmen.png` kamen mit demselben Upload (`4dec6ad`) in den Stamm. Der Auftrag nennt sie nicht. Sie liegen weiter im Stamm von `main` und `borderline-umbau` | Rückfrage an die Fachstelle im Bericht der Sitzung |

### Korrekturauftrag 1h: Stand je Punkt (Abschnitte 3 bis 7)

| Punkt | Stand | Beleg |
| --- | --- | --- |
| 3.1 `main` holen | umgesetzt | Merge `84cac17`, kein Konflikt |
| 3.2 Werkzeuge aus dem Starter | umgesetzt | Commit `6872fdf`: `tools/contract.js`, `tools/selftest/site.config.json`, `tools/selftest/README.md`. Auf Rückfrage auch `gate.html` und `README.md`, die im Starter ebenfalls geändert waren. `diff -rq tools/` und `cmp` gegen den Starter: gleich |
| 3.3 `assetVersion`, `$comment` | umgesetzt | `"assetVersion": "r4-6"`; `$comment` enthält «Profil-Update 10.10.2026 übernommen: Build r4-6». Der Build meldet «Build r4-6» |
| 3.4 Zeilen 15–17 | umgesetzt | Abschnitt «Visualisierungs-Check» unten: Tabelle der Vorlage mit Zeilen 1–17 und Matrix mit Zeilen 1–17 ausgefüllt |
| 4 Eisberg: Bezeichnung | umgesetzt | «Abbildung 1 · Was man sieht – und was darunter mitwirken kann» |
| 4 Eisberg: Darstellung | umgesetzt | `div.bl-eis` aus dem Auftrag, SVG zeichengleich. Wörter als HTML-Liste; `.bl-eis__key` nur für Screenreader. Kernaussage, Kurztext, Kennzeichnung und Quelle: unverändert (Skript) |
| 4 Eisberg: CSS breit | umgesetzt, eine Abweichung erlaubt | Lage der zehn Wörter und der Frage nach der Tabelle des Auftrags, `translate(-50%,-50%)`, ohne Kästen. Schrift `type-body-sm` für alle Wörter: In `type-body` berührte «Vorwürfe» bei 1280 px den Umriss. Der Auftrag lässt das zu («sonst Schrift `type-body-sm`, nie kleiner»). Skript mit `isPointInFill`: Bei 1440, 1280, 1024 und 900 px liegen alle vier Ecken jedes Worts in der Eisbergform; die Frage ragt nicht aus der Figur |
| 4 Eisberg: schmal | umgesetzt, Schwelle abweichend | Die Zeichnung ist ohne Wörter über die ganze Breite sichtbar. Darunter stehen die Listen «Sichtbar» und «Darunter möglich», umbrechend und ohne Kästen, darunter die Frage (Bildschirmfoto 360 px). Schwelle: Containerbreite unter **800 px** statt 560 px. Zwischen 560 und 800 px ragten Wörter über den Umriss (Skript) |
| 4 Eisberg: Vertiefung, Kurzbeschreibung | umgesetzt | Wortlaut des Auftrags (Wortlaut-Skript) |
| 4 Kurve: Beschriftungen, Stelle 4 | umgesetzt | an der Kurve «Wir können sprechen.», «Es wird eng.», «Es ist gerade zu viel.», «Es wird wieder ruhiger.»; Überschrift in der Liste «Es wird wieder ruhiger.»; Text und Beispiel gleich |
| 4 Kurve: Kurzbeschreibung | umgesetzt | «4 «Es wird wieder ruhiger.»» |
| 4 Kurve: Prüfung bei 1280 px | erfüllt | Beschriftung 4 endet 152 px vor dem rechten Rand der Figur und überdeckt die Kurve nicht (Bildschirmfoto). Sie reicht 80 px über das Ende der Linie hinaus. Bei 768 px verbreiterte die längere Beschriftung die Seite um 16 px. Deshalb stehen unter 800 px Containerbreite (vorher 560 px) nur die Ziffern an der Kurve; die Liste darunter nennt alle vier Sätze |
| 4 Momentaufnahmen: Figur | umgesetzt, eine Abweichung | `puk-vis-figure puk-vis-figure--open`, Bezeichnung, Kernaussage, Kurztext, Szene mit SVG zeichengleich, Vertiefung mit Titel, Kurzbeschreibung und Kennzeichnung nach dem Auftrag. **Abweichung:** `data-visual-type="figure"` statt «illustration». Das Gate r4-6 blockiert eine Illustration ohne Platzhalter oder Bild mit Bildnachweis (`placeholder-status`, `tools/contract.js` Zeile 333). Entscheid auf Rückfrage: vorläufig «figure». **Seit dem Nachtrag r4-7 erledigt:** `data-visual-type="illustration"` |
| 4 Momentaufnahmen: CSS | umgesetzt | Pendel-Regeln, `.bl-parts` und der Pendel-Teil der Media Query entfernt (vorher `grep`). Regeln des alten Eisbergs gab es in `borderline.css` nicht. Die Szene nutzt nur Profilklassen |
| 4 Annahmen | umgesetzt | `figure` entfällt mit «Abbildung 4», Bildlegende und Kurzbeschreibung. Kernaussage und Kurztext als zwei Absätze, sieben Paare als `dl` wie in `grenzen` › 09, Quellenzeile `<p><strong>Quellen:</strong> …</p>`. Die Liste steht vor dem Zwischentitel zum Suizid; Begründung unter «Entscheide» |
| 5 Schleife: drei Zeilen | umgesetzt | je Station `bl-cycle__who` («Schwester» oder «Betroffene Person», `type-body-sm`, mittleres Gewicht), `bl-cycle__ex` (Beispielsatz, `type-body`), `puk-vis-cycle__n` («Station 1 · Ereignis» usw., `type-caption`). Wortlaut sonst gleich |
| 5 Schleife: Radius | umgesetzt, Token auf Rückfrage | `border-radius: var(--radius-md)` (4 px), auch schmal. Der Karten-Token des Profils ist `radius-none`, also eckig. Das widerspricht dem Ziel von BS-4 Variante B («weiche Ecken»). Entscheid auf Rückfrage: `radius-md`, der kleinste weiche Token |
| 5 Schleife: Pfeile, schmal | erhalten, Masse angepasst | Kreisanordnung bis 640 px breit (vorher 600 px), Liste unter 700 px Containerbreite (vorher 660 px). Mit den höheren Feldern begann der Pfeil 4 → 5 sonst im Feld 4 (−1,8 px). Jetzt enden alle Pfeile 8 bis 35 px vor dem Zielkasten (`abgleich/bedienung.mjs`) |
| 5 Zwei Sichten | umgesetzt | Klasse `puk-vis-compare__col--b` entfernt (4×); beide Spalten mit durchgezogener Oberkante (Bildschirmfoto 1280 px) |
| 6 DEAR | umgesetzt | `<span class="puk-vis-path__n">1</span>` bis `4`; sonst gleich (Skript) |
| 7 `resonance` | umgesetzt | sechs Einträge im Wortlaut (Wortlaut-Skript); kein Gate-Hinweis `resonance` |
| 7 `v-vs-eisberg` | umgesetzt | `statement`, `alternative` und Satz am Ende von `reason` im Wortlaut |
| 7 `v-vs-bewertungen` | umgesetzt, eine Abweichung | `statement`, `understood`, `alternative`, `reason` und `approvalStatus` im Wortlaut. `format` «figure» statt «illustration» (siehe oben); `reason` nannte das in einem zweiten Satz. **Seit dem Nachtrag r4-7:** `format` «illustration», `reason` ohne diesen Satz |
| 7 `v-vs-mythen` | umgesetzt | `format` «text», `statement`, `source`, `alternative` «–», kein `understood`, `reason` im Wortlaut |
| 2 Regeln | eingehalten, mit den genannten Abweichungen | keine eigenen Formulierungen auf den Seiten (Wortlaut-Skript); keine `style`-Attribute, keine festen Farben in SVG, keine `tel:`-Links (`grep`: 0); Beschriftungen als HTML-Text |

**`grep`-Belege** (Anzahl Treffer):

| Suche | gebaute Seiten (`verstehen`, `beziehungen`, `grenzen`) | `borderline.css` | `content/` |
| --- | ---: | ---: | ---: |
| `bl-fig--pendel` | 0 | 0 | 0 |
| «Ausschlag» | 0 | 0 | 0 |
| «Abbildung 4» | 0 | 0 | 0 |
| `v-vs-mythen` | 0 | 0 | 0 |
| `puk-vis-compare__col--b` | 0 | 0 | 0 |
| «Schritt n von 4» | 0 | 0 | 0 |
| «Später.» | 0 | 0 | 0 |
| `bl-parts` | 0 | 0 | 0 |

### Abgleich (Abschnitt 8)

- **`abgleich/verstehen.md`:** 21 Zeilen geändert, dazu 4 neue Zeilen.
  - 13 Zeilen «umformuliert (Bildsprache, 1h)»: Eisberg mit neuer Vertiefung und Kurzbeschreibung; Pendel mit neuem Kurztext und neuer Vertiefung. Die Bemerkung nennt «bis 1g: …».
  - 2 Zeilen «verschoben», Nr. 376 und 380: Die Sätze stehen jetzt in der Vertiefung von «Momentaufnahmen».
  - Nr. 74 «entfällt»: «Zwischen den beiden Listen besteht keine Zuordnung.» Die Kurzbeschreibung im Wortlaut von 1H sagt das nicht mehr; der Satz steht nur noch im Plan («Keine Zuordnung zwischen oben und unten.»).
  - Nr. 249, 340, 445 und 456 behalten Status und Fassung. Ihre Bemerkung nennt Stelle 4 jetzt «Es wird wieder ruhiger.» (bis 1g «Später»).
  - Nr. 493 nennt die neue Bezeichnung von Abbildung 1.
  - 11 Bemerkungen enthalten den Satz des Auftrags «Pendel ersetzt durch «Momentaufnahmen» (BS-1, Entscheid Fachstelle 10.10.2026)». Die Beschriftungen des Pendels hatten keine eigenen Bestandszeilen; die Zeilen der Handout-Sätze zeigen auf Kurztext und Vertiefung.
  - Neu Nr. 543 bis 546 «neu (1h)»: «Wie ist es gerade für dich?», «Es wird wieder ruhiger.», «Du bist die Einzige, die mich versteht.», «Du bist wie alle anderen.».
  - Kopfnotiz «Korrektur 1h: …», Zählung nachgeführt. Notiz: «Ab 1h ist Abschnitt 06 keine Abbildung mehr; ältere Bemerkungen «Abbildung 4» meinen die Liste der Annahmen.»
- **`abgleich/beziehungen.md`:** Nr. 63, 140, 141, 144 und 147 «umformuliert (Bildsprache, 1h)» mit dem neuen Stationstext; Kopfnotiz.
- **`abgleich/grenzen.md`:** keine Zeile betroffen. Die DEAR-Zeilen enthalten «Schritt n von 4» nicht.
- **Vergleich mit dem Stand vor 1h:** Geändert sind genau diese Zeilen, keine andere (Skript gegen `rows2` vor 1h).
- **`abgleich/README.md`:** Statuswerte, Prüfergebnis, Messwerte und Abschnitt «Korrektur Etappe 1h» nachgeführt.

### Wortzahl, Verneinungen und Bedienung

Skripte `abgleich/kennzahlen.mjs`, `abgleich/verneinung.mjs` und `abgleich/bedienung.mjs`. Werte vor 1h am Stand `c9e0375`.

| | `verstehen` vor → nach 1h | `beziehungen` vor → nach 1h | `grenzen` vor → nach 1h |
| --- | --- | --- | --- |
| Wörter | 1591 → 1602 (`eisberg` 161 → 180, `anspannung` 389 → 395, `bewertungen` 236 → 235, `mythen` 407 → 394) | 1564 → 1564 | 1613 → 1601 (`dear` 246 → 234) |
| Sätze mit Verneinung | 37 von 190 → 37 von 183 | 33 von 167 → 33 von 169 | 42 von 195 → 42 von 195 |
| Absicherungen je 100 Wörter | 2,89 → 3,00 | 4,48 → 4,48 | 2,60 → 2,62 |
| Tabstopps | 19 → 18 (Vertiefung «Quellen» der Annahmen entfällt) | 16 → 16 | 20 → 20 |
| Seitenhöhe bei 360 px | 17 714 → 16 071 px | 15 137 → 15 199 px | 16 500 → 16 500 px |
| höchste Figur bei 360 px | Anspannungskurve 3282 px (Annahmen sind keine Figur mehr) | Zwei Sichten 2359 px | DEAR 1791 px |

**Lesart:**

- Die Absicherungen auf `verstehen` steigen. Der neue Kurztext und die Vertiefung von «Momentaufnahmen» enthalten «kann» und «können»; das ist Wortlaut des Auftrags.
- `grenzen` hat 12 Wörter weniger, weil «Schritt n von 4» entfällt.
- `index`: 238 Wörter, 10 Tabstopps, 3863 px; unverändert.

**Technische Stichprobe in Chromium (Playwright), kein Ersatz für Stufe 5:**

- **Überlauf:** keiner bei 320, 360, 768, 1280 und 1440 px auf `verstehen`, `beziehungen` und `grenzen`; auch nicht im Theme «kontrast» bei 1280 px.
- **Kein Wort über einer Form:**
  - **Eisberg:** Skript wie oben. Bei 1440, 1280, 1024 und 900 px liegt jedes Wort ganz in der Form. Ab 820 px gilt die schmale Darstellung.
  - **Szene «Momentaufnahmen»:** Die Sätze stehen über der Zeichnung, nicht in ihr.
  - **Kurve:** Keine Beschriftung ragt aus der Figur.
- **Schmal sichtbar:** Bei 360 und 320 px sind Eisberg, Szene, Kurve, Schleife (Liste mit Rücksprung), Zwei Sichten und DEAR zu sehen. Die Figuren sind bei 360 px so hoch:

  | Figur | Höhe bei 360 px |
  | --- | ---: |
  | Eisberg | 1071 px |
  | Momentaufnahmen | 848 px |
  | Bedeutungsschleife | 1920 px |

- **Kontrast nach WCAG 1.4.3:** für allen sichtbaren Text in `main` gemessen, Vertiefungen geöffnet; kein Wert unter AA.
- **Fokus:** Alle Tabstopps haben einen sichtbaren Fokus; der erste ist «Zum Hauptinhalt».
- **Bildschirmfotos angesehen:**
  - Alle sechs Figuren bei 1280 und 360 px und im Theme «kontrast» bei 1280 px.
  - Dazu Abschnitt 06 von `verstehen` (Annahmen) bei 1280 und 360 px.
- **Nicht geprüft:** Screenreader, Hardwaretastatur und Touch (Stufe 5, Person).

### Entscheide der bauenden Sitzung (zur Prüfung)

- **Annahmenliste vor dem Suizid-Zwischentitel:**
  - Der Auftrag sagt «vor der Liste» für Kernaussage und Kurztext. Wohin die Liste im Abschnitt gehört, sagt er nicht.
  - Sie steht nach dem Absatz «Viele Sätze über Borderline klingen eindeutig, …» und vor «Wenn Sie sich wegen Suizid sorgen». Sonst stünde sie unter diesem Zwischentitel.
  - Suizid-Absatz und Verweis im Text sind unverändert.
- **Fetter erster Satz bei Annahme 2:** Die Einordnung hatte als Überschrift zwei Sätze. Beide sind fett, damit der Wortlaut gleich bleibt.
- **Schwellen 800 und 700 px:** für Eisberg und Kurve 800 px statt 560 px, für die Schleife 700 px statt 660 px; Begründung oben. Die Kommentare in `borderline.css` nennen den Grund.
- **CSS der Annahmen:** Die Regeln `.bl-myth*` wurden nicht mehr verwendet. Sie sind mit dem Nachtrag r4-7 entfernt.
- **Skizzen im Stamm:** siehe «Auftrag verschieben».

### Kennzahlen aller Seiten (Skript `abgleich/kennzahlen.mjs`)

Gemessen an der alten Seite allein, mit derselben Zählweise für alt und neu (`abgleich/README.md`). Text nur für Screenreader (`.puk-sr`) zählt nicht. Der Richtwert gilt nicht; die Wortzahlen werden nur berichtet.

| Seite | Alt: Seite allein | Neu | Neu / alt | Richtwert | Richtwert + 5 % | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext alt → neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | --- |
| `index` | 433 | 238 | 55 % | – | – | 1,85 → 1,68 | 1 → 0 |
| `verstehen` | 2524 | 1602 | 63 % | 1300 | 1365 | 2,54 → 3,00 | 12 → 0 |
| `beziehungen` | 2149 | 1564 | 73 % | 1100 | 1155 | 3,82 → 4,48 | 6 → 1 |
| `grenzen` | 2985 | 1601 | 54 % | 1500 | 1575 | 2,41 → 2,62 | 4 → 0 |

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
