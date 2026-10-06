# Prüfung und Freigabe

Ein Ablauf für alle Websites der Fachstelle – von der Planung bis zur Veröffentlichung. Die einzelnen Abschnitte enthalten die Prüfkriterien; hier steht, **wann** sie gelten und in welcher Reihenfolge. Nicht anwendbar auf Materialien, deren Zweck die Krisenorientierung ist; sie gehören nicht in dieses Profil.

## Ablauf

| Stufe | Was | Kriterien | Ergebnis |
| --- | --- | --- | --- |
| 0 · Planen | Ziel und Aufbaulogik festlegen, Seitenvertrag (`site.config.json`), Erkenntnisweg je Seite, Visualisierungsplan | «Gesamtkohärenz und Aufbau», «Langform und Psychoedukation», «Visualisierung umsetzen» | Seitenvertrag und Plan liegen vor |
| 1 · W1 Fachliche Prüfung | Seite für Seite: Richtigkeit, Quellen, Haltung; Seiteninventar für W2 | «Fachliche Qualität und Haltung» | Befunde, Seiteninventar |
| 2 · W2 Gesamtkohärenz | Website als Ganzes: Ziel, Aufbaulogik, Begriffe, Quereinstieg, Lücken | «Gesamtkohärenz und Aufbau» | Strukturänderungen **vor** Stufe 3 umsetzen |
| 3 · S Sprach-Review | Verständlichkeit und Ton des feststehenden Textes | «Sprache und Ton» | freigegebene Textfassung |
| 4 · Visualisierungs-Check | Prüffrage, Kartenraster, Textalternativen, Theme «Hoher Kontrast» | «Visualisierung umsetzen» | Befunde, begründete Ausnahmen |
| 5 · Bedienung und Barrierefreiheit | Breiten 320–1440 px, 200 % Text, Tastatur, Touch, reduzierte Bewegung, Screenreader | «Barrierefreiheit und Test», «Interaktionskonzept» | Protokoll, mindestens zwei reale Screenreader-Läufe |
| 6 · W3 Code-Review | Funktion, Barrierefreiheit, Datenschutz, Sicherheit, Performance, Darstellung und Druck, Wartbarkeit | «Technische Qualität» | Befundliste; Umsetzung erst nach Freigabe |
| 7 · Produktionsfreigabe | `node tools/gate.mjs --production` ohne blockierende Befunde; fachliche Freigabe dokumentiert | dieser Abschnitt | Freigabe mit Datum und Person |

- **Heft-Webfassung:** Ist die Website die inhaltsgleiche Web-Fassung eines bereits geprüften Hefts, prüfen W1 und S nur die Abweichungen und die webspezifischen Texte (Navigation, Schaltflächen, Teaser, Hilfetexte, Fehlermeldungen). Das Seiteninventar entsteht trotzdem für alle Seiten.
- **Datenschutz vorziehen:** Kritische Datenschutzbefunde (extern geladene Schriften, Tracking) dürfen jederzeit behoben werden, auch vor Stufe 1.
- **W3 zuletzt:** Strukturänderungen aus W2 und Textänderungen aus S verändern den Code; deshalb prüft W3 erst danach.
- **Rückwärts nie still ändern:** Fällt in einer späteren Stufe ein fachliches Problem auf, wird es als «Prüfbedarf» markiert und in Stufe 1 zurückgegeben, nicht beiläufig korrigiert.

## Was das Gate prüft – und was nicht

Das Gate des Psychoedukations-Starters (`node tools/gate.mjs`, mit `--production` vor der Veröffentlichung) blockiert unter anderem: fehlende oder versteckte Absenderin, Telefonnummern, `tel:`-Links und Notfallblöcke, ungeprüften Zuständigkeitsverweis, Platzhalter ohne Freigabe, nicht freigegebene Visualisierungen, fehlenden Visualisierungsplan. Hinweise (keine Blocker) gibt es für «ß», falsche Anführungszeichen, deutsche Rechtsbegriffe und etikettierende Bezeichnungen.

**Abdeckungsgrenze:** Automatisierte Prüfungen ersetzen keinen realen Tastatur- und Screenreader-Test, keine fachliche Prüfung und keine Datenschutz-, Inhalts- oder Betriebsfreigabe. Sie werden nie als solche bezeichnet.

Das Projektgate und die Release-Werkzeuge des Original-Kits (`npm run audit:website-project`, `npm run release`) sind nicht Teil dieses Profils.

## Inhaltsverantwortung und Status

- Operative Kontakte, Zuständigkeiten, medizinische und rechtliche Aussagen brauchen eine benannte Inhaltsverantwortung und ein Prüfdatum, gebündelt am Seitenende oder in der Fusszeile.
- Freigabesprache: «redaktionell bestätigt», «fachlich freigegeben» – nicht «verifiziert». Entwürfe und Platzhalter sind sichtbar als solche markiert («Platzhalter, nicht freigegeben»).
- Kritische Information nie nur hinter Filter, Dialog oder Akkordeon.
- Ergebnis jeder Stufe festhalten: Datum, Person, Befunde, begründete Ausnahmen.

## Geltung der Kit-Vorgaben

`templates/website/profile.json` bleibt die technische Sollquelle für Seitenhülle, responsive Geometrie, Seitensemantik und Navigation. Wo dieses Profil davon abweicht, gilt das Profil – insbesondere ersetzt «Zuständigkeit statt Krisenzugang» die Sicherheitsvarianten `profile.json#safetyAccess`. Die vier Anwendungsmuster (`application-patterns.json`) und das Langform-Muster (`longform-pattern.json`) gelten mit den Einschränkungen im jeweiligen Abschnitt.
