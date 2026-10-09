# Abgleich · Borderline-Website, Etappe 1

Beleg für W1 nach UMBAUPLAN, Abschnitt 5: Jede fachliche Aussage des Bestands ist übernommen, gekürzt, zusammengeführt, verschoben oder mit Grund entfallen. Erstellt von der bauenden Sitzung am 08.10.2026, nachgeführt am 09.10.2026 (Korrektur Etappe 1, Satz für Satz je Seite); das ist ein Arbeitsstand, keine Prüfung.

- `index.md` · `/`, `/selbsttest`, `/wegweiser`
- `verstehen.md` · `/verstehen` ohne Diagnostik-Teil, sechs Handouts
- `beziehungen.md` · `/verstehen/beziehungen`
- `grenzen.md` · `/grenzen`, acht Handouts, zwei Übungsszenarien

**Grundlage:** Branch `borderline-bestand`, `bestand/borderline-angehoerige/` (`INVENTAR.md`, `texte/`), erhoben aus Commit `5c8471c` der alten Website.

## Statuswerte

| Status | Bedeutung |
| --- | --- |
| übernommen | Aussage steht inhaltlich gleich, höchstens sprachlich geglättet; «wörtlich» heisst unverändert. |
| gekürzt | Aussage steht, Wiederholungen oder doppelte Absicherungen sind entfallen; was genau, steht in der Bemerkung. |
| zusammengeführt mit … | Aussage steht an anderer Stelle, zusammen mit gleichem Inhalt aus einer anderen Quelle. |
| verschoben nach `<seite>` (Etappe n) | Aussage gehört laut Plan auf eine andere Seite und erscheint dort, wenn die Seite gebaut ist. |
| entfällt: Grund | Aussage erscheint nicht mehr. Gründe: Meta-Text, Profil (Krisenzugang, Telefonnummern), Entscheid der Fachstelle (Personenbilder, Handouts), Wiederholung, Kürzung für den Richtwert (W2-2, ab 09.10.2026). |
| geändert | Aussage steht mit verändertem Inhalt: auf Auftrag der Fachstelle (Korrektur Etappe 1) oder als natürlichere Fassung eines Beispiels (S-5). Der Grund steht in der Bemerkung. Neu am 09.10.2026. |
| Bezeichnung | Überschrift, Kicker, Eintrag der Kapitelübersicht oder Stichwort ohne eigene Aussage; nur gezählt. Neu am 09.10.2026. |

## Wörter alt und neu je Seite

**Stand 09.10.2026 (Korrektur W2-2, S-1).** Gemessen wird an der alten Seite allein, nicht an Seite plus Handouts. Die Quote von 41 % vom 08.10.2026 entstand nur, weil inhaltsgleiche Handouts mitgezählt waren. Sie gilt nicht mehr (Befund W2-2 der Prüfsitzungen).

**Zählweise** (für alt und neu gleich, damit die Prüfsitzung nachrechnen kann):

- **Wörter:** durch Leerraum getrennte Zeichenfolgen mit mindestens einem Buchstaben oder einer Ziffer.
- **Neu:** sichtbarer Text im `<main>` der gebauten Seite. Eingeschlossen sind Kapitelübersicht, Kicker, Figurentexte (Kernaussage, Kurztext, Beschriftungen, Vertiefungen, Bildlegenden, Textfassungen) und der eingesetzte Verweis im Text. Ausgeschlossen sind SVG-Grafik und nur für Screenreader bestimmter Text (`.puk-vis-sr`). Text, der nur breit oder nur schmal sichtbar ist (Leserichtung, Rücksprung der Schleife), zählt einmal mit.
- **Alt:** Bestandstext der Route (`texte/<route>.md`) ohne den Kopfblock der Erhebung, ohne Klammermarken («[Akkordeon: …]») und ohne Bild- und Linkadressen. Überschriften und aufgeklappte Inhalte zählen mit. Zum Vergleich stehen die Zahlen aus `INVENTAR.md` und aus der Prüfung vom 09.10.2026 daneben.
- **Absicherungen** (Kernhecken wie im Prüfbericht, Belege 4.1): «kann», «können», «könnte», «könnten», «kannst», Wörter mit «möglich…», «vielleicht», «nicht sicher», «nicht automatisch», gezählt je 100 Wörter.
- **Semikolons:** im Fliesstext gezählt. Quellenzeilen trennen Literaturangaben mit Semikolon. Sie sind keine Sätze und zählen nicht.

| Seite | Alt: Seite allein (eigene Zählung) | Alt: `INVENTAR.md` / Prüfung 09.10. | Neu | Neu / alt | Richtwert neu | Absicherungen je 100 Wörter alt → neu | Semikolons im Fliesstext neu |
| --- | ---: | ---: | ---: | ---: | ---: | --- | ---: |
| `index` | 433 (`/`) | 435 / 445 | 238 | 55 % | – | 1,85 → 1,68 | 0 |
| `verstehen` | 2524 (`/verstehen`, mit Diagnostik-Teil) | 2511 / 2444 | 1299 | 51 % | 1300 | 2,54 → 2,16 | 0 |
| `beziehungen` | 2149 (`/verstehen/beziehungen`) | 1993 / 2090 | 1099 | 51 % | 1100 | 3,82 → 2,73 | 1 (Leserichtung, nur schmal) |
| `grenzen` | 2985 (`/grenzen`) | 2823 / 2915 | 1500 | 50 % | 1500 | 2,41 → 1,80 | 0 |

**Lesart:**

- Die drei Inhaltsseiten liegen auf oder knapp unter dem neuen Richtwert. Kürzer werden sie nur, wenn weitere fachliche Aussagen entfallen.
- Was für den Richtwert gestrichen ist, steht Satz für Satz im jeweiligen Abgleich («Kürzung W2-2»). Kandidaten zur Wiederaufnahme nennt der Prüfbedarf je Seite.
- **Ziel S-1:** Auf jeder Seite weniger Absicherungen als auf der alten Seite. Absicherungen bleiben nur bei Aussagen über die betroffene Person, über Ursachen, Diagnose und Verlauf (Entscheid der Fachstelle vom 09.10.2026). Das Ziel ist erreicht. Am stärksten sinkt der Wert auf `beziehungen` (3,82 → 2,73), wo er am höchsten war.
- Den grössten Teil der Kürzung tragen die Figuren: kürzere Textfassungen und Kurztexte, die nicht mehr die Zeichnung beschreiben (V-9). Ausserdem sind Doppelungen entfallen (W2-4), Semikolon-Ketten in ganze Sätze aufgelöst (S-2) und Beispiele für `kommunizieren` vorgemerkt (Etappe 2).

## Entscheide im Bau (Struktur und Technik)

| Thema | Entscheid | Begründung |
| --- | --- | --- |
| `grenzen` › `reihenfolge` (Plan: «im Bau prüfen», Raster 2×2 oder Text) | **Text**, geordnete Liste | Die Quelle nennt das Raster «keine fachliche Einstufung» und schreibt, dass sich Dringlichkeit und Belastung je nach Situation verändern. Ein festes Raster würde eine Einordnung der Beispiele nahelegen, die sie ausschliesst. Die tragende Aussage ist eine Reihenfolge (Schutz → Dringendes → Langfristiges), und die trägt die Liste samt beiden Kriterien. |
| `grenzen` › `kontakt` (Plan: Kontinuum J, «im Bau prüfen, ob die Form eine Steigerung nahelegt») | **Text**, Liste der vier Möglichkeiten | Die Möglichkeiten liegen nicht auf einer Achse: Eine vereinbarte Pause kann weniger Kontakt bedeuten als getrenntes Wohnen. Ein Kontinuum mit wachsender Linienstärke würde eine Steigerung und Reihenfolge nahelegen, die der Text ausschliesst. |
| Hauptnavigation mit acht Punkten (Plan: «prüft, ob acht Punkte auf kleinen Bildschirmen tragen») | **Trägt nicht.** Vorschlag unten | Messung in Chromium mit allen acht Labels: Bei 320 px ist der Kopf 616 px hoch (Navigation 366 px), bei 360 px 592 px. Der Seitentitel beginnt damit erst am unteren Rand eines 800 px hohen Bildschirms. Heute mit drei Punkten sind es 386 px. Bei 768 und 1440 px trägt die Navigation (zwei Zeilen, 92 px). |
| Navigation (Entscheid der Fachstelle 09.10.2026) | **Fünf Punkte:** Verstehen · Beziehungen · Ihre Rolle · Grenzen · Auf sich achten. `kommunizieren`, `genesung` und `unterstuetzung` haben `navLabel: null` und werden über die Startseite und Querverweise erreicht (UMBAUPLAN, Abschnitte 1 und 2). Die Alternative wäre ein Menü über das Profil gewesen. | Messung mit den fünf Labels in Chromium: Bei 320 px ist der Kopf 478 px hoch (Navigation 228 px), und der Seitentitel beginnt bei 568 px, also auf dem ersten Bildschirm, aber in dessen unterer Hälfte. Bei 360 px sind es 454 px, bei 768 px 208 px (zwei Zeilen), bei 1440 px 175 px (eine Zeile). Alle Linkziele sind 44 px hoch, kein Überlauf. Zum Vergleich: drei Punkte (Etappe 1) ergeben bei 320 px 386 px. |
| Kreislauf mit fünf Stationen (`beziehungen` › `schleife`) | website-eigene Datei `borderline.css`, drei Zeilen Anordnung und eine Schriftgrösse über Tokens | Muster B ist für vier Stationen gebaut. Die fünfte Station und die Lage von 3 und 4 werden im vorhandenen 3×3-Raster gesetzt. Keine eigenen Farben, Schatten oder Schriften; schmal gilt die Liste des Musters unverändert. Profil, Starter-Tools und Kopiervorlagen sind nicht geändert. |
| Mythen als Vergleich (Muster E) | Paare abwechselnd im Raster `.puk-vis-compare` | So stehen Annahme und Einordnung breit auf gleicher Höhe und schmal direkt hintereinander; kein eigenes CSS nötig. |
| Brücke und vier Arten (Muster A) | SVG mit nummerierten Marken plus nummerierte Liste, Anordnung aus der Kopiervorlage `.puk-vis-build` (ohne `data-vis-build`, also ohne Skript) | Muster A hat keine feste Geometrie; die Anordnung «Bild neben Liste» ist vorhanden und schmal ohne Anpassung lesbar. |
| Links auf Entwurfsseiten | keine | Das Gate blockiert Links von veröffentlichten Seiten auf Entwürfe. Verweise auf `rolle`, `kommunizieren`, `diagnose`, `krise`, `selbstfuersorge`, `genesung`, `unterstuetzung`, `quellen` folgen mit Etappe 2/3; sie sind in den Abgleichen vermerkt. |
| Quellen | Kurzangaben je Abschnitt oder Figur, ohne Link | `quellen` ist ein Entwurf. Die Kurzangaben folgen `texte/quellen.md` des Bestands. |
| Startseite ohne Navigationspunkt | `index` mit `navLabel: null`, erreichbar über das Logo | Die Hauptnavigation im Plan nennt keinen Punkt «Start». |
| Entwurfsseiten | 11 Seiten `draft` mit Platzhalter und einer Planzeile; geplantes `navLabel` nur bei `rolle` («Ihre Rolle») und `selbstfuersorge` («Auf sich achten») | Entwürfe erscheinen laut Vertrag nie in der Navigation. Das Label hält die geplante Navigation für Etappe 2 fest. |
| Absenderin und Zuständigkeitsverweis | wörtlich aus dem Starter, einschliesslich Status `freigegeben` bzw. `geprueft` (Fachstelle, 08.10.2026) | Auftrag «wie im Starter». Es ist die profilweite Fassung, keine neue Freigabe durch die bauende Sitzung. |
| Paarform | «Therapeutinnen und Therapeuten», «Freundinnen und Freunde», «Partnerin oder Partner» | README des Profils: Paarform ausgeschrieben |

## Entscheide im Bau, Korrektur Etappe 1 (09.10.2026)

Struktur und Technik, von der bauenden Sitzung entschieden. Inhaltliche Entscheide der Fachstelle stehen in `../KORREKTUR-ETAPPE-1.md`, Abschnitt 1.

| Thema | Entscheid | Begründung |
| --- | --- | --- |
| Profil-Update in der Website | `tools/contract.js`, `tools/selftest/site.config.json`, `gate.html` und `README.md` aus dem Starter r4-4 übernommen; `responsibility.inline` unverändert aus dem Starter | Die Website hat eigene Kopien der Werkzeuge. Ohne sie gibt es weder den Platzhalter `data-responsibility-inline` noch 50/50 im Selbsttest. |
| Verweis im Text | je einmal in `verstehen` › `mythen` (Abschnittstext nach der Suizidfrage), `beziehungen` › `verantwortung` (nach dem Satz zu Suizidgedanken), `grenzen` › `gewalt`, Schritt 2 | Korrektur W1-1. `sensitiveTopics` der drei Seiten nennen Selbstgefährdung bzw. Gewalt; das Gate prüft Wortlaut, Ort und Anzahl. |
| Pendel und Brücke (Muster A) mit direkter Beschriftung | Zeichnung als SVG, Beschriftungen als HTML-Text darüber, Lage in `borderline.css` (Prozent der Zeichnung). Schmal: Beim Pendel folgen die Beschriftungen als Liste unter einem Ausschnitt der Zeichnung; bei der Brücke bleiben die Ufer beschriftet, die Teile erklärt die Liste. | Leitlinie 07: Beschriftungen sind echter HTML-Text. SVG-Text würde schmal unter die Mindestgrösse schrumpfen. |
| Pendel ohne Achse | Aufhängepunkt, drei Lagen, Bogen am Aufhängepunkt für den grösseren Ausschlag, Pfeile zurück zur Ruhelage | Korrektur V-2: nicht dieselbe Form wie das Anspannungs-Kontinuum direkt davor. |
| Annahmen | Paar je Zeile: Annahme klein («Verbreitete Annahme: «…»»), Einordnung im Kasten mit durchgezogener Linie und Hauptsatz als Überschrift; schmal untereinander | Korrektur V-6. Ohne gestrichelte Linie, ohne Annahme 7. |
| Anspannung | Achsentitel als sichtbarer Text über der Achse; Stufenmarken auf der Achse entfernt; je Bereich ein Satz «Was eher möglich ist» und «Was hilft» | Korrektur V-4. Der Text zu «Was eher möglich ist» steht ohne eigene Bezeichnung, um Wiederholungen zu sparen (W2-2). |
| Schleife: wer handelt | «Station 1 · Schwester» usw. in der Stationsnummer | Korrektur V-3, ohne neues CSS. |
| Station 3 schmal | `borderline.css`: Stationen schmal auf volle Breite (`align-self: stretch`) | Korrektur B-3. Das Muster zentriert die Stationen auch in der Liste, schmale Stationen standen deshalb versetzt. |
| DEAR | Beispielsatz je Schritt als `.puk-say` mit der Bezeichnung «Beispiel» | Korrektur V-12, W2-3. |
| Formulierungsbeispiele `grenzen` › `saetze` | drei Situationen als `.puk-say` mit «Eher problematisch» und «Eher hilfreich»; Zwischentitel `h3` | Korrektur W2-2, W2-3. Einheitliches Format (S-6 der Prüfsitzung). |
| Vier Arten von Grenzen | Begriffsliste (`dl`) im Fliesstext statt Figur | Korrektur V-5. |
| Reihenfolge der Seiten | `rolle` vor `grenzen` in `pages` | Korrektur W2-1; die Navigation folgt der Reihenfolge, sobald `rolle` veröffentlicht ist. |
| Startseite | `title` «Startseite», H1 «Borderline – Orientierung für Angehörige», Eyebrow «Übersicht» | Korrektur W2-6. |
| Kapitelübersicht | kurze Einträge, die den Kickern entsprechen («Erleben», «Diagnose» …) | Kürzung W2-2. Verweistexte nennen weiterhin die Zielüberschrift (W2-5). |
| Opferhilfe | kein Link | Entscheid im Chat vom 09.10.2026: ganz weglassen. Die Adresse liess sich aus der Bauumgebung nicht prüfen. |
