# Massnahmenplan: belastungsarme Kurzorientierung

Stand: 13.10.2026  
Status: umgesetzt und technisch geprüft

## Anlass

Das ursprüngliche Audit nennt als verbleibende Erweiterung eine Kurzfassung für Menschen mit geringer Gesundheitskompetenz oder hoher Belastung. Der tatsächliche Bedarf an formaler Einfacher oder Leichter Sprache und an Übersetzungen wird nicht mit Zielpersonen erhoben. Deshalb wird weder eine Sprachstufe noch eine Zielgruppenwirkung behauptet.

Der umsetzbare nächste Schritt ist eine ergänzende deutschsprachige Kurzübersicht. Sie verdichtet bereits freigegebene Kernaussagen und führt für Einzelheiten zu den kanonischen Hauptseiten. Sie ersetzt keine Hauptseite.

## Überprüfte Ausgangslage

- Die vollständigen Seiten bleiben trotz Schnellorientierungen umfangreich.
- Die Website hatte keine eigenständige Kurzfassung für Situationen mit wenig Zeit oder Kraft.
- Die Suche war global erreichbar; ein kurzer inhaltlicher Einstieg war es nicht.
- Reale Zielgruppen-, Screenreader- und Gerätetests werden gemäss Institutionsentscheid nicht durchgeführt.

## Fachliche Hypothese

Eine kurze, global erreichbare Orientierung mit Situationsüberschriften, kurzen Sätzen und genau benannten Vertiefungszielen kann die Auswahlbelastung reduzieren. Ob Menschen die Seite tatsächlich leichter verstehen, schneller handeln oder als entlastend erleben, ist ohne Teilnehmende nicht belegt.

## Umgesetzte Massnahmen

1. Neue Seite `kurz.html` mit vier Ebenen:
   - Was ist jetzt wichtig?
   - Borderline kurz erklärt
   - Drei Grundsätze
   - Wie geht es weiter?
2. Globaler Direkteinstieg «Kurz und klar» neben der Website-Suche.
3. Sichtbarer Einstieg auf der Startseite für Menschen mit wenig Zeit oder Kraft.
4. Ausschliesslich kurze Zusammenfassungen aus freigegebenen Hauptseiten; keine neuen Behandlungs-, Diagnose- oder Wirkungsbehauptungen.
5. Der geprüfte Zuständigkeitsverweis wird am sicherheitsrelevanten Handlungspunkt zentral eingebunden.
6. Ausdrückliche Aussagegrenze: keine geprüfte Fassung in Leichter Sprache.
7. Erweiterung von Suche, Nutzerwegen, Bedienungsmessung und Produktions-Export.

## Akzeptanzkriterien

- höchstens 500 Wörter im Inhaltsfragment;
- kein Klartextsatz mit mehr als 24 Wörtern;
- von jeder veröffentlichten Inhaltsseite in einer Interaktion erreichbar;
- Suche bleibt ebenfalls global erreichbar;
- direkte Übergänge zu Kommunikation, Rolle, Grenzen, Selbstfürsorge, Kindern, Krise, Verstehen, Diagnose, Behandlung, Unterstützung und Suche;
- keine duplizierten Telefonnummern oder veränderlichen Kontaktdaten;
- genau ein zentral erzeugter Zuständigkeitsverweis im Kurztext;
- vollständige Tastatur- und Reflow-Prüfung im vorhandenen automatisierten Umfang;
- kein Anspruch auf Leichte Sprache, WCAG-Gesamtkonformität oder reale Wirkungsvalidierung.

## Nicht Bestandteil

- Übersetzungen ohne bestätigten Bedarf;
- das Label «Einfache Sprache» oder «Leichte Sprache» ohne qualifizierte Prüfung;
- neue Krisenkontakte, Telefonnummern oder Leistungen der Fachstelle;
- Ersatz der ausführlichen Seiten oder einer individuellen Beratung.

## Ausgeführte Nachweise

- Produktionsbuild und Produktionsgate: 22 Seiten, 0 blockierende Befunde.
- Gate-Selbsttest: 66/66 bestanden.
- Historischer Satzabgleich: 7’412 Zeilen, 0 ohne Fundstelle.
- Nutzerwege: 9/9; 21/21 veröffentlichte Inhaltsseiten erreichbar.
- Suchaudit: 26/26 Szenarien, 180/180 lokale Ziele.
- Kurzorientierungsprüfung: 398 Wörter, längster Klartextsatz 16 Wörter, alle Übergänge und globalen Direkteinstiege vorhanden.
- Bedienungsmessung: auf allen 22 Seiten ist der Sprunglink der erste Tabstopp; keine Fokusstelle ohne sichtbaren Fokus.
- Browserprüfung bei 320, 360 und 1280 CSS-Pixeln: kein horizontaler Überlauf, beide Direkteinstiege vorhanden, je mindestens 44 CSS-Pixel hoch, keine Laufzeitfehler.
- Kurzübersicht bei 200 Prozent Grundschrift und 320 beziehungsweise 1280 CSS-Pixeln: kein horizontaler Überlauf.
