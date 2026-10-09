# Prüfung und Freigabe

Ein Ablauf für alle Websites der Fachstelle – von der Planung bis zur Veröffentlichung. Die einzelnen Abschnitte enthalten die Prüfkriterien; hier steht, **wann** sie gelten und in welcher Reihenfolge. Nicht anwendbar auf Materialien, deren Zweck die Krisenorientierung ist; sie gehören nicht in dieses Profil.

## Ablauf

| Stufe | Was | Kriterien | Ergebnis |
| --- | --- | --- | --- |
| 0 · Planen | Ziel und Aufbaulogik festlegen, Seitenvertrag (`site.config.json`), Erkenntnisweg je Seite, Visualisierungsplan | «Gesamtkohärenz und Aufbau», «Langform und Psychoedukation», «Visualisierung umsetzen» | Seitenvertrag und Plan liegen vor |
| 1 · W1 Fachliche Prüfung | Seite für Seite: Richtigkeit, Quellen, Haltung; Seiteninventar für W2 | «Fachliche Qualität und Haltung» | Befunde, Seiteninventar |
| 2 · W2 Gesamtkohärenz | Website als Ganzes: Ziel, Aufbaulogik, Begriffe, Quereinstieg, Lücken | «Gesamtkohärenz und Aufbau» | Strukturänderungen **vor** Stufe 3 umsetzen |
| 3 · S Sprach-Review | Verständlichkeit und Ton des feststehenden Textes | «Sprache und Ton» | freigegebene Textfassung |
| 4 · Visualisierungs-Check | Prüffrage, Plan pro Abschnitt, drei Ebenen, Ansatzpunkte, Kartenraster, Textalternativen, Theme «Hoher Kontrast» | «Visualisierung umsetzen» | Tabelle mit Ergebnis und Beleg je Punkt im Prüfbericht |
| 5 · Bedienung und Barrierefreiheit | Breiten 320–1440 px, 200 % Text, Tastatur, Touch, reduzierte Bewegung, Screenreader | «Barrierefreiheit und Test», «Interaktionskonzept» | Protokoll, mindestens zwei reale Screenreader-Läufe |
| 6 · W3 Code-Review | Funktion, Barrierefreiheit, Datenschutz, Sicherheit, Performance, Darstellung und Druck, Wartbarkeit | «Technische Qualität» | Befundliste; Umsetzung erst nach Freigabe |
| 6a · R1 und R2 Pre-Release-Audits | Release-Kandidat gegen das Profil prüfen (R1) und aus Sicht der Lesenden: Figuren, Lesetest, «Was Sie tun können» (R2) | «Pre-Release-Audits» | Befunde mit Beleg; Korrekturen vor R3 |
| 7 · R3 Freigabe-Audit und Produktionsfreigabe | R3 mit Ergebnis «Go»; `node tools/gate.mjs --production` ohne blockierende Befunde – setzt einen vollständigen Prüfbericht voraus; fachliche Freigabe dokumentiert | dieser Abschnitt | Freigabe mit Datum und Person |

- **Heft-Webfassung:** Ist die Website die inhaltsgleiche Web-Fassung eines bereits geprüften Hefts, prüfen W1 und S nur die Abweichungen und die webspezifischen Texte (Navigation, Schaltflächen, Teaser, Hilfetexte, Fehlermeldungen). Das Seiteninventar entsteht trotzdem für alle Seiten.
- **Datenschutz vorziehen:** Kritische Datenschutzbefunde (extern geladene Schriften, Tracking) dürfen jederzeit behoben werden, auch vor Stufe 1.
- **W3 zuletzt:** Strukturänderungen aus W2 und Textänderungen aus S verändern den Code; deshalb prüft W3 erst danach.
- **Rückwärts nie still ändern:** Fällt in einer späteren Stufe ein fachliches Problem auf, wird es als «Prüfbedarf» markiert und in Stufe 1 zurückgegeben, nicht beiläufig korrigiert.

## Bauen und Prüfen getrennt

Profilentscheid 08.10.2026, nach dem ersten Probelauf: Das Gate bestand, die Abbildungen hatten trotzdem didaktische Mängel – gefunden erst bei einer Prüfung Punkt für Punkt. Bestehen ist nicht dasselbe wie gut. Deshalb gelten vier Regeln:

1. **Selbstprüfung nach jedem Bau, ohne Nachfrage.** Die bauende Sitzung füllt den Visualisierungs-Check im Prüfbericht als Tabelle aus: je Punkt Ergebnis und Beleg (Seite und Abschnitt, Figur, Zitat). Ein Punkt ohne Beleg gilt als nicht geprüft; ein Gesamturteil ersetzt keine Einzelprüfung. Die Selbstprüfung ist ein Arbeitsstand, keine Prüfstufe.
2. **Prüfen in einer eigenen Sitzung.** Die Stufen 1 bis 6 und die Audits R1 bis R3 prüft eine Sitzung oder Person, die die Website nicht gebaut hat. Wer prüft, ändert keine Inhalte und keinen Code, sondern trägt Befunde mit Beleg ein; fachliche Fragen werden als «Prüfbedarf» markiert. Fachliche Freigaben trägt nur die Fachstelle ein.
3. **Kein Merge ohne Prüfbericht.** Ein Pull Request mit einer neuen oder geänderten Website enthält den Prüfbericht im aktuellen Stand und nennt in der Beschreibung die offenen Stufen. Solange Stufen offen sind, bleibt er ein Entwurf. Veröffentlicht wird nur mit vollständigem Prüfbericht; das Produktionsgate blockiert sonst.
4. **Prüftiefe** (Profilentscheid 09.10.2026, nach der Prüfung der Borderline-Website: Eine zweite, unabhängige Prüfung fand deutlich mehr als die erste, darunter still entfallene Aussagen und eine geschönte Kürzungsquote).
   - Bei Umbauten vergleicht W1 mindestens **20 Aussagen je Etappe** mit dem Bestand, über alle Seiten und Figuren verteilt, und prüft an diesen Stellen den Abgleich Satz für Satz.
   - **Kennzahlen der bauenden Sitzung** (Kürzungsquote, Wortzahlen, Messungen) werden nachgerechnet, nicht übernommen.
   - Der Visualisierungs-Check wird **je Figur** ausgefüllt (Matrix Prüfpunkt × Figur), nicht nur je Prüfpunkt.
   - Für die W1-Vorprüfung und den Visualisierungs-Check wird eine **zweite, unabhängige Prüfsitzung** empfohlen, die die erste nicht kennt. Die Befunde werden zusammengeführt; jeder Befund nennt seine Quelle (Prüfung 1, 2 oder beide).

**Prüfbericht:** `PRUEFBERICHT.md` im Ordner der Website (Vorlage im Starter). Er enthält die Statustabelle der Stufen 1 bis 6 und der Audits R1 bis R3 («offen», «erledigt» oder «entfällt: Begründung»), den Visualisierungs-Check als Tabelle und die Befunde je Stufe.

**Auftrag für die Prüfsitzung** (neue Sitzung, gleiches Repository):

```
Prüfe die Website templates/website/<website>/. Du hast sie nicht gebaut.
Lies CLAUDE.md und guidelines/00-ablauf-pruefung-und-freigabe.md. Prüfe die Stufe(n) <…>
nach den Kriterien der jeweiligen Leitlinie, Punkt für Punkt. Trage je Punkt Ergebnis und
Beleg (Seite und Abschnitt, Figur, Zitat) in PRUEFBERICHT.md ein. Ändere keine Inhalte und
keinen Code; fachliche Fragen markierst du als «Prüfbedarf». Setze eine Stufe nur auf
«erledigt», wenn alle Punkte mit Beleg geprüft sind und keine offenen Befunde bleiben.
Bei Umbauten: Vergleiche mindestens 20 Aussagen mit dem Bestand. Rechne Kennzahlen der
bauenden Sitzung nach. Fülle den Visualisierungs-Check je Figur aus.
Committe nur den Prüfbericht.
```

## Was das Gate prüft – und was nicht

Das Gate des Psychoedukations-Starters (`node tools/gate.mjs`, mit `--production` vor der Veröffentlichung) blockiert unter anderem: fehlenden oder unvollständigen Prüfbericht (Produktion; Stufen 1 bis 6 und R1 bis R3), fehlende oder versteckte Absenderin, Telefonnummern, `tel:`-Links und Notfallblöcke, ungeprüften Zuständigkeitsverweis, Platzhalter ohne Freigabe, nicht freigegebene Visualisierungen, fehlenden Visualisierungsplan. Hinweise (keine Blocker) gibt es für «ß», falsche Anführungszeichen, deutsche Rechtsbegriffe und etikettierende Bezeichnungen.

**Abdeckungsgrenze:** Automatisierte Prüfungen ersetzen keinen realen Tastatur- und Screenreader-Test, keine fachliche Prüfung und keine Datenschutz-, Inhalts- oder Betriebsfreigabe. Sie werden nie als solche bezeichnet.

Das Projektgate und die Release-Werkzeuge des Original-Kits (`npm run audit:website-project`, `npm run release`) sind nicht Teil dieses Profils.

## Inhaltsverantwortung und Status

- Operative Kontakte, Zuständigkeiten, medizinische und rechtliche Aussagen brauchen eine benannte Inhaltsverantwortung und ein Prüfdatum, gebündelt am Seitenende oder in der Fusszeile.
- Freigabesprache: «redaktionell bestätigt», «fachlich freigegeben» – nicht «verifiziert». Entwürfe und Platzhalter sind sichtbar als solche markiert («Platzhalter, nicht freigegeben»).
- Kritische Information nie nur hinter Filter, Dialog oder Akkordeon.
- Ergebnis jeder Stufe im Prüfbericht festhalten: Datum, Person oder Sitzung, Befunde mit Beleg, begründete Ausnahmen.

## Geltung der Kit-Vorgaben

`templates/website/profile.json` bleibt die technische Sollquelle für Seitenhülle, responsive Geometrie, Seitensemantik und Navigation. Wo dieses Profil davon abweicht, gilt das Profil – insbesondere ersetzt «Zuständigkeit statt Krisenzugang» die Sicherheitsvarianten `profile.json#safetyAccess`. Die vier Anwendungsmuster (`application-patterns.json`) und das Langform-Muster (`longform-pattern.json`) gelten mit den Einschränkungen im jeweiligen Abschnitt.
