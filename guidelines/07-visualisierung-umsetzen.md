# Visualisierung umsetzen

Wie Darstellungen geplant, gebaut und geprüft werden. Was dargestellt wird und welches Muster passt: Abschnitt «Visuelle Wissensvermittlung». Kopiervorlagen: `templates/website/longform/visualisierungsmuster.html` + `visual-patterns.css` (Muster A–F) und `erklaermuster.html` + `erklaermuster.css` (Muster G–K), beide nach `components/bundle.css` laden.

## Visualisierungsplan

**MUSS:** Für jede psychoedukative Langformseite und jede mehrseitige Website entsteht vor dem Bau ein Visualisierungsplan. Er liegt der Übergabe und dem Review bei (im Starter: `site.config.json` › `visualPlan`); auf der veröffentlichten Seite erscheint er nicht.

| Spalte | Inhalt |
| --- | --- |
| Abschnitt | Kapitel oder Abschnitt im Erkenntnisweg; im Starter zusätzlich `sectionId` = `id` der `section` |
| Erkenntnisziel | Was Lesende danach verstanden haben oder tun können |
| Format | Text oder Muster A–K |
| Aussage oder Beziehung | Die konkrete Aussage, die die Darstellung zeigt |
| Was wird besser verstanden? | Antwort auf die Prüffrage |
| Quelle bzw. Kennzeichnung | Fachliche Quelle oder «Eigene didaktische Darstellung» |
| Textalternative | Entwurf; bei komplexen Darstellungen Langbeschreibung im HTML |
| Ansatzpunkt für Angehörige | Bei Kreislauf, Prozesspfad und Modell in Schritten: wo Angehörige ansetzen können, oder «entfällt: Begründung» (`entryPoint`) |
| Begründung | Warum die Darstellung hilft – oder warum Text klarer ist; passt zum Inhalt des Abschnitts |
| Freigabe | Status der fachlichen Freigabe |

```markdown
| Abschnitt | Erkenntnisziel | Format | Aussage | Besser verstanden | Quelle / Kennzeichnung | Textalternative | Ansatzpunkt | Begründung | Freigabe |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 … | … | … | … | … | … | … | … | … | ausstehend |
```

- **MUSS:** Bei Beziehungen, Kreisläufen, Prozessen, Veränderungen, Zuständen, Entscheidungen und emotional schwer zugänglichem Erleben ist eine Erklärform Standard. Ein Verzicht wird in «Begründung» kurz begründet («Text ist klarer: Aufzählung ohne Beziehung»).
- **MUSS:** Jeder Abschnitt hat eine Zeile im Plan – mit Erklärform oder begründetem Verzicht. Im Starter verbindet `sectionId` die Zeile mit der `section`; das Gate meldet Abschnitte ohne Zeile (Entwurf: Hinweis, Produktion: blockiert).
- **MUSS:** Kreislauf, Prozesspfad und Modell in Schritten nennen in `entryPoint` den Ansatzpunkt für Angehörige oder «entfällt: Begründung». Ein genannter Ansatzpunkt ist in der Figur markiert; das Gate prüft beides (Entwurf: Hinweis, Produktion: blockiert).
- **MUSS NICHT:** Es gibt keine Mindestzahl. Dekorative Bilder oder Stimmungsbilder erfüllen den Plan nicht.
- **MUSS:** Bei mehr als acht Hauptkapiteln zeigt der Plan, wie die zentralen Erkenntnisschritte visuell getragen werden (etwa eine visuelle Kapitelübersicht und je eine Darstellung pro Schlüsselbeziehung).

## Aufbau einer Darstellung

- `figure` mit Titel (`aria-labelledby`), Kernaussage als Satz (`p.puk-vis-kern`), kurzem Erklärtext (`p.puk-vis-short`, zwei bis vier Sätze), wo sinnvoll Vertiefung (`details.puk-vis-more`) und `figcaption`. Die Legende zeigt sichtbar nur Kennzeichnung und Quelle. Die Kurzbeschreibung (`aria-describedby`) steht darin als `p.puk-sr`, nur für Screenreader: Sie sagt, wie die Grafik aufgebaut ist; Sehende brauchen das nicht, weil alle Beschriftungen HTML-Text sind (Profilentscheid 09.10.2026). Das Gate meldet eine Figur ohne Kernaussage (Entwurf: Hinweis, Produktion: blockiert).
- **Ansatzpunkt für Angehörige:** `p.puk-vis-ansatz` mit `span.puk-vis-ansatz__key` («Ansatzpunkt für Angehörige»). Im Kreislauf trägt die Station `li.is-ansatz` (doppelte Kontur) und `span.puk-vis-cycle__key` («Ansatzpunkt»); im Prozesspfad trägt der Schritt `li.is-ansatz` (doppelter Ring); im Modell in Schritten markiert ein doppelter Ring die Stelle in der Grafik. Die Textfassung nennt den Ansatzpunkt.
- **Alle Beschriftungen sind echter HTML-Text**; Formen, Linien und Pfeile sind `aria-hidden`. Kein Text in Bildern, wo HTML-Text möglich ist.
- Komplexe Darstellungen haben eine sichtbare, verlinkbare Langbeschreibung oder eine vollständige gegliederte Textfassung.
- Kennzeichnung in der Legende: «Eigene didaktische Darstellung» oder Quelle; Quellenlinks mit generischem Text («Quelle», «Textfassung») erhalten ein sprechendes `aria-label`, das den sichtbaren Text enthält.
- `data-visual-id` (Eintrag im Visualisierungsplan) und `data-visual-type` an jeder Figur.
- **Farben in SVG nur über Tokens** (CSS-Klassen wie `.puk-vis-ln`, `.puk-vis-water`), nie als Hexwert im Attribut – sonst greift das Theme «Hoher Kontrast» nicht.
- Illustrationen stehen offen (`puk-vis-figure--open`), nicht in Karten gezwängt.

## Diagramme im Web

Profilentscheid 06.10.2026, gilt für alle Muster:

- **Schrift:** Rubik als HTML-Text (`type-body`, `type-body-sm`, `type-caption`), damit Screenreader lesen und Text umbrechen kann.
- **Linien:** Linien, Pfeile und Konturen einheitlich **2 px** in `puk-blue-100`. Breitere Akzente (z. B. die 4-px-Oberkante im Vergleich, Linienstärke im Kontinuum) sind bedeutungstragende Flächen, keine Linien.
- **Felder:** weiss mit Kontur; **höchstens ein gefülltes blaues Feld** pro Darstellung. Hellblaue Flächen (`puk-blue-25`) nur für Inhalte innerhalb einer Form (Wasser im Gefäss, verborgener Teil im Schichtenmodell).
- **Grundfläche** `surface-diagram`; keine Schatten, Verläufe oder Symbolik. Rot und Gelb nur, wenn genau eine Aussage als Warnung oder Ausnahme markiert werden muss.
- **Kontrast:** Linien und grafische Objekte mindestens 3:1, Text mindestens 4,5:1.
- **Bedeutung ausserhalb der Farbe:** Nummer, Beschriftung, Linienart (durchgezogen/gestrichelt/doppelt), Linienstärke, Position.

## Schmale Bildschirme

- Die Muster reagieren auf die **Breite ihres Containers** (`.puk-vis-wide`, Container-Abfragen bei 560 und 760 px), nicht nur auf die Bildschirmbreite.
- Aus Kreis, Karte, Waage oder Achse wird eine gegliederte Liste; die Bedeutungsträger (Nummer, Linienart, Linienstärke, Gruppenüberschrift) bleiben sichtbar. Beschriftungen bleiben mindestens `type-body-sm`.
- **Kreislauf:** Bei 768 und 1440 px eine sichtbare, geschlossene Schleife mit Pfeilen. Bei 320 und 360 px ist eine lineare Abfolge nur zulässig, wenn der Rücksprung «zurück zu Station 1» als Linie und als Text sichtbar bleibt. «Im Uhrzeigersinn» steht nur bei der Schleife (`[data-cycle-wide]`), nie bei einer Liste.

## Bewegung und Interaktion

- **Nichts bewegt sich von selbst** – auch keine Pfeile, die sich beim Laden einzeichnen.
- Schrittweiser Aufbau (Muster G) nur auf Knopfdruck, ausgehend vom vollständigen Modell; Status in einer Live-Region; Überblenden höchstens `dur-base` und nur unter `prefers-reduced-motion: no-preference`.
- Interaktive Darstellungen sind mit Tastatur bedienbar, haben sichtbaren Fokus und funktionieren ohne Hover.

## Platzhalter und Freigabestatus

- Platzhalter für Bild, Kontakt oder Download tragen `data-source-status` und `data-approval-status` und sind sichtbar als Entwurf markiert. Das Produktionsgate des Starters blockiert sie bis zur Freigabe.
- Visualisierungen mit Format ausser «Text» brauchen im Plan den Status «freigegeben», bevor das Produktionsgate besteht.

## Diagramme in Word und PowerPoint

Nur für Büromedien (nicht Teil dieses Website-Profils, aber oft als Vorlage für eine Web-Fassung genutzt). Regel des PUK Zürich Design Systems 1.10.1 (bewährte Ergänzung, keine Manual-Vorgabe); Live: Karte «Diagramme als Sachzeichnung».

| Element | Vorgabe |
| --- | --- |
| Feld | Weiss, 1-px-Haarlinie `puk-black-25`, eckig |
| Akzentfeld | `puk-blue-100`, Text weiss – höchstens eines |
| Pfeile und Linien | `puk-blue-100`, 1,5 px |
| Schrift | Arial 15–17 px, `#222222` bzw. weiss auf Blau |
| Grundfläche | `surface-structure`, Innenabstand 6 mm; Druck `break-inside: avoid` |

- **Kreisläufe als Kreis**, Leserichtung im Uhrzeigersinn, letztes Feld als Akzentfeld. Der Pfeilring liegt innerhalb der Felder: Radius Pfeilring ≤ Radius Feldmitten − halbe Feldbreite − 20 px.
- **SVG-Text bricht nicht um:** Zeilen von Hand setzen; Arial 16,5 px fasst in 200 px Feldbreite rund 22 Zeichen. Das Feld wird erhöht, nie die Schrift verkleinert.

## Prüfung: Visualisierungs-Check

Redaktioneller Check vor der fachlichen Freigabe (Stufe 4 im Abschnitt «Prüfung und Freigabe»). Kein automatischer Blocker.

- [ ] Visualisierungsplan liegt vor; die Seite entspricht ihm.
- [ ] Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt (kein «nebeneinander», wenn der Text ein Zusammenwirken beschreibt).
- [ ] Prüffrage je Darstellung konkret beantwortet – und die Darstellung zeigt, was die Antwort verspricht (keine «Dauer» im Plan, wenn der Pfad keine zeigt).
- [ ] Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung.
- [ ] Erklärmodelle (B, C, G): Ansatzpunkt für Angehörige markiert oder Verzicht begründet; keine Verantwortung für Behandlung oder Verlauf zugeschoben.
- [ ] Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt, sondern verbunden.
- [ ] Kartenraster-Check: keine Reihe gleichartiger Karten mit Icons, wo eine Anordnung mit Beziehungen erklären müsste; aufbauende Erklärungen nicht in Karten zerlegt.
- [ ] Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung, nicht nur die Wörter.
- [ ] Darstellungen über den Erkenntnisweg verteilt, nicht am Ende gesammelt; keine unbegründete Textwand.
- [ ] Vereinfacht, nicht verfälscht; Grenzen des Modells benannt; Quelle oder Kennzeichnung vorhanden.
- [ ] Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich.
- [ ] Bei 320 px lesbar; Textalternative bzw. Langbeschreibung vollständig.
- [ ] Theme «Hoher Kontrast» geprüft (keine festen Farbwerte in SVG).
- [ ] Inhalt fachlich freigegeben.

Ergebnis im Prüfbericht (`PRUEFBERICHT.md`) als Tabelle: je Punkt Ergebnis und Beleg (Seite und Abschnitt, Figur, Zitat). Die Prüfsitzung füllt den Check zusätzlich **je Figur** aus (Matrix Prüfpunkt × Figur: erfüllt, teilweise, nicht erfüllt, nicht anwendbar); erst so fallen Figuren auf, die einzeln nicht tragen. Ein Punkt ohne Beleg gilt als nicht geprüft. Die bauende Sitzung füllt die Tabelle nach jedem Bau als Selbstprüfung aus; als Stufe zählt nur die Prüfung durch eine Sitzung oder Person, die nicht gebaut hat (Abschnitt «Prüfung und Freigabe»).
