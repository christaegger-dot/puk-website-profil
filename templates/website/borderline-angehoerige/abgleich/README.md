# Abgleich · Borderline-Website, Etappe 1

Beleg für W1 nach UMBAUPLAN, Abschnitt 5: Jede fachliche Aussage des Bestands ist übernommen, gekürzt, zusammengeführt, verschoben oder mit Grund entfallen. Erstellt von der bauenden Sitzung am 08.10.2026; das ist ein Arbeitsstand, keine Prüfung.

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
| entfällt: Grund | Aussage erscheint nicht mehr. Gründe: Meta-Text, Profil (Krisenzugang, Telefonnummern), Entscheid der Fachstelle (Personenbilder, Handouts), Wiederholung. |

## Wörter alt und neu je Seite

Zählweise wie im Inventar: Wörter im sichtbaren `<main>` mit allen Vertiefungen (`details`), Bildlegenden und Kapitelübersicht, ohne Kopf und Fusszeile. Alt = Wortzahl laut `INVENTAR.md`, Abschnitt 1.1. Neu = gezählt aus den gebauten Seiten mit dem Parser des Starters (`tools/contract.js`). Die eigene Zählung des Bestands mit derselben Methode weicht um höchstens etwa 7 % vom Inventar ab (z. B. `/verstehen` 2476 statt 2511).

| Seite | Alt: Route(n) | Alt: Handouts | Alt gesamt | Neu | Neu / alt | Richtwert (Plan) | Neu / Richtwert |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `index` | 687 (`/` 435, `/selbsttest` 135, `/wegweiser` 117) | – | 687 | 190 | 28 % | 300 | 63 % |
| `verstehen` | 2511 | 3041 (6 Handouts) | 5552 | 1798 | 32 % | 1100 | 163 % |
| `beziehungen` | 1993 | – | 1993 | 1521 | 76 % | 1000 | 152 % |
| `grenzen` | 2823 | 3163 (8 Handouts) | 5986 | 2275 | 38 % | 1200 | 190 % |
| **Etappe 1** | **8014** | **6204** | **14 218** | **5784** | **41 %** | **3600** | **161 %** |

Nicht eingerechnet sind die zwei Übungsszenarien aus `/uebungen` (1886 Wörter für die ganze Seite), von denen je ein Beispielsatz auf `grenzen` steht.

**Lesart:** Gemessen an Seite und Handouts zusammen liegen `verstehen` und `grenzen` nahe beim Ziel «etwa ein Drittel». Die Richtwerte des Plans erreichen sie nicht. Dafür gibt es drei Gründe:

- Jede Figur bringt eine Textfassung in der Bildlegende mit, auf `verstehen` sind das zusammen 179 Wörter.
- Gesprächsbeispiele und Merksätze sind wörtlich übernommen.
- Weiter kürzen lässt sich nur, wenn Aussagen entfallen.

`beziehungen` hatte keine Handouts und ist am wenigsten gekürzt. Kandidaten für Streichungen nennt der jeweilige Abgleich unter «Prüfbedarf». Die Fachstelle entscheidet in W1, welche Aussagen entfallen dürfen. Das ist die Kalibrierung, für die Etappe 1 gedacht ist.

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
