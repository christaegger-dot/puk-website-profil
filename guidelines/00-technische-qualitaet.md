# Technische Qualität

Regeln für den Code der Websites der Fachstelle und Kriterien für das Code-Review W3 (Stufe 6 im Abschnitt «Prüfung und Freigabe»). Adaptiert aus dem Review-Prompt W3 «Code-Review» der Fachstelle (Stand 5.10.2026). Die Zielgruppe – Angehörige, oft unter Stress, häufig auf dem Smartphone, teilweise mit wenig technischer Erfahrung – bestimmt die Massstäbe: robust, schnell, ohne Datenabfluss.

Rahmen: Schweiz, Schweizer Hochdeutsch, Datenschutz nach DSG, Barrierefreiheit **WCAG 2.2 AA**. Inhalte und Texte sind nicht Gegenstand von W3 (dafür W1, W2, S), ausser Texte der Bedienoberfläche mit Bezug zur Barrierefreiheit (Navigation, Buttons, Alternativtexte, Linktexte).

## A · Funktion

- Der Build läuft ohne Fehler; Warnungen mit Folgen werden behoben, nicht stehen gelassen.
- Keine defekten internen oder externen Links, keine fehlenden Bilder oder Dateien, keine 404-Seiten.
- Keine JavaScript-Fehler. **Alle Inhalte sind ohne JavaScript erreichbar:** Akkordeons und Reiter zeigen ohne Skript alle Inhalte, Menüs alle Links (HTML-Fassungen in `templates/website/interaktion/`).
- Interaktive Elemente (Menü, Akkordeon, Reiter, Dialog, Filter, Formulare) funktionieren mit Maus, Tastatur und Touch (Abschnitt «Interaktionskonzept»).

## B · Barrierefreiheit (WCAG 2.2 AA)

- Semantisches HTML: Überschriftenhierarchie ohne Sprünge, Landmarks (`header`, `nav`, `main`, `footer`), echte Listen, Tabellen mit Kopfzellen und `caption`.
- `lang="de-CH"`; Sprachwechsel ausgezeichnet.
- Tastatur: alles erreichbar, logische Reihenfolge, Skip-Link, sichtbarer und **nicht verdeckter** Fokus (2.4.11).
- Kontraste von Text, Links, Buttons und Fokusmarkierung (Abschnitt «Farben und Kontrast»).
- Alternativtexte sinnvoll, dekorative Bilder mit leerem `alt`; Formen in Darstellungen `aria-hidden`.
- Aussagekräftige Linktexte, nie «hier klicken».
- ARIA nur, wo nötig, und korrekt; native Elemente vor ARIA (`button`, `details`, `dialog`).
- Zoom bis 200 % und 320 px ohne Informationsverlust.
- Klickflächen mindestens 44 px (strenger als 2.5.8 mit 24 px); Wischen nie als einziger Weg (2.5.7).
- Hilfe und Kontakt an gleicher Stelle auf jeder Seite (3.2.6): Absenderin im Kopf, Zuständigkeitsverweis in der Fusszeile.
- `prefers-reduced-motion` respektiert, nichts spielt automatisch ab.

## C · Datenschutz und Vertrauen

Bei psychischer Erkrankung ist schon der Seitenbesuch eine sensible Information. Jede Übertragung an Dritte wird entsprechend streng bewertet.

- **Keine Übertragung an Dritte:** keine extern geladenen Schriften (auch nicht Google Fonts), kein Analytics oder Tracking, keine eingebetteten Videos, Karten oder Social-Media-Elemente, keine CDNs. Alles wird lokal ausgeliefert.
- Keine Cookies. Lokale Speicherung nur mit Vorabinformation, Aufbewahrungsregel und Löschmöglichkeit; Reflexionseingaben standardmässig nicht speichern.
- Formulare (z. B. Netlify Forms) nur, wenn transparent ist, welche Daten wohin gehen und wer sie liest.
- Impressum und Datenschutzerklärung vorhanden und deckungsgleich mit dem, was der Code tatsächlich tut.
- **Vorziehen erlaubt:** Kritische Datenschutzbefunde (externe Schriften, Tracking) dürfen jederzeit, auch vor W1, behoben werden.

## D · Sicherheit

- Sicherheits-Header über `_headers` oder `netlify.toml`: `Content-Security-Policy` (nur eigene Quellen), `X-Content-Type-Options: nosniff`, `Referrer-Policy: no-referrer`, `Permissions-Policy` ohne Kamera, Mikrofon, Standort. Vorlage: `templates/website/psychoeducation-site-starter/_headers`.
- Keine Inline-Skripte, damit die Content-Security-Policy ohne `unsafe-inline` auskommt.
- Abhängigkeiten ohne bekannte Sicherheitslücken (`npm audit`); so wenige wie möglich.
- Externe Links mit `target="_blank"` nur mit Ankündigung und `rel="noopener noreferrer"`.
- Keine Zugangsdaten, Schlüssel, internen Notizen oder Fallmaterial im Repository.

## E · Performance

- Bilder in passendem Format (SVG für Grafik, WebP/AVIF oder JPEG für Fotos), in Anzeigegrösse, mit `width`/`height` und `loading="lazy"` unterhalb des ersten Bildschirms.
- Schriften selbst gehostet, nur die benötigten Schnitte (Rubik 300, 400, 500), `font-display: swap`.
- Kein ungenutztes CSS oder JavaScript; das Interaktionsskript nur laden, wo interaktive Elemente vorkommen.
- Ziel: auf einem Smartphone mit mittlerer Verbindung in wenigen Sekunden lesbar. Logo als statisches SVG.

## F · Darstellung und Druck

- Darstellung auf Smartphone, Tablet und Desktop konsistent; die im S-Protokoll markierten Stellen mit erhöhtem Platzbedarf laufen auch schmal nicht über.
- **Druck:** Angehörige drucken Inhalte oft aus. `components/bundle.css` enthält die Druckregeln: Navigation, Skip-Link und Bedienelemente ausgeblendet, Akkordeons und Reiter vollständig gedruckt, Link-Adressen hinter externen Links sichtbar, Darstellungen nicht über Seitenumbrüche geteilt, Schwarz auf Weiss.
- Typografie technisch korrekt: Guillemets in Vorlagen und Komponenten, Silbentrennung für Deutsch (`hyphens: auto` mit `lang="de-CH"`) bei langen Wörtern in schmalen Spalten.
- Der Zuständigkeitsverweis ist technisch an einer Stelle eingebunden (Fusszeilen-Vorlage bzw. `site.config.json`), nicht auf Seiten dupliziert.

## G · Wartbarkeit

- Inhalte getrennt vom Code, sodass Texte ohne Programmierkenntnisse angepasst werden können (im Starter: `content/` und `site.config.json`).
- Kein doppelter Code; Kopf, Navigation und Fusszeile aus einer Vorlage.
- Kein toter Code, keine ungenutzten Dateien, keine veralteten Abhängigkeiten.
- README mit Anleitung für Build und Veröffentlichung.
- Metadaten: eindeutiger Seitentitel, Meta-Beschreibung, Open-Graph-Angaben (Titel, Beschreibung; ohne Tracking-Parameter), `sitemap.xml`.

## Was der Starter automatisch prüft

Das Gate des Psychoedukations-Starters prüft unter anderem Absenderin, Meta-Description, Navigation und aktiven Zustand, Telefonnummern und Notfallblöcke, Platzhalter, Visualisierungsplan sowie externe Ressourcen. Es ersetzt W3 nicht: Build-Warnungen, Sicherheits-Header im Hosting, echte Ladezeiten, Druckbild und Verhalten auf echten Geräten werden von Hand geprüft.

## Review-Ergebnis

W3 ist ein reines Review: keine Dateiänderungen, bis die Befunde freigegeben sind. Nur Befunde, die eine Änderung rechtfertigen; Unsicheres als «Prüfbedarf»; getrennt angeben, was mit Werkzeugen (Build, `npm audit`, Link-Checker, axe/pa11y, Lighthouse) und was nur im Code geprüft wurde.

1. **Gesamturteil** (höchstens acht Sätze) mit den drei wichtigsten Handlungsfeldern.
2. **Bestandesaufnahme:** Stack, Struktur, Build-Ergebnis, eingesetzte Werkzeuge.
3. **Befundliste** nach Priorität: Priorität · Kriterium (A–G) · Datei und Zeile · Problem · Warum relevant · Vorschlag. **Kritisch:** Seite oder Funktion defekt, Daten gehen ohne Notwendigkeit an Dritte, Sicherheitslücke, Barriere, die die Nutzung verhindert. **Wichtig:** deutliche Einschränkung für einen Teil der Nutzenden oder erheblicher Wartungsaufwand. **Optional:** Verbesserung.
4. **Code-Vorschläge** für alle kritischen Befunde (Diff oder Ausschnitt), noch nicht umgesetzt.
5. **Schnelle Verbesserungen:** grosse Wirkung, kleiner Aufwand.
6. **Umsetzungsplan in Stufen,** die einzeln freigegeben werden können.
7. **Offene Prüfpunkte:** was nur im Browser, auf einem echten Gerät oder mit Screenreader geprüft werden kann.

Zuständigkeit: Keine Krisennummern und kein Notfallblock empfehlen; ein fehlender Zuständigkeitsverweis ist kein Befund.
