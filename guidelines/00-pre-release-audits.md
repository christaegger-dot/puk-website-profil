# Pre-Release-Audits

Drei Prüfungen auf dem fertigen Release-Kandidaten einer Website, nach W1, W2, S, Visualisierungs-Check, Bedienung und W3 (Abschnitt «Prüfung und Freigabe»). Sie ersetzen keine dieser Stufen. Sie prüfen das Ergebnis noch einmal als Ganzes: gegen das Profil, aus Sicht der Lesenden und auf Freigabe und Auslieferung.

Profilentscheid 09.10.2026. Anlass: Bei der Borderline-Website fanden die technischen und fachlichen Prüfungen vieles. Erst die Durchsicht der Fachstelle zeigte aber Figuren mit Fachbegriffen, sichtbaren Text, der nur die Zeichnung beschreibt, einen abweisend formulierten Zuständigkeitsverweis und Seiten, die vor allem sagen, was nicht gilt. Am 10.10.2026 kam die Bildsprache dazu (Teil 2 von R2): Die Abbildung «Die Brücke mit Geländer» wirkte wie ein Bauplan und war nur mit einer Liste zu entschlüsseln; keine Prüfung hatte gefragt, ob ein Bild die Lesenden anspricht.

| Audit | Frage | Wann | Ergebnis |
| --- | --- | --- | --- |
| R1 · Profil-Audit | Entspricht die Website dem PUK Website-Profil (Marke, Farben, Schrift, Navigation, Komponenten, Zuständigkeit)? | nach W3 | Befunde, getrennt nach Website und Profil |
| R2 · Visualisierung und Laienverständlichkeit | Erklären die Figuren, und sprechen sie die Lesenden an? Versteht eine belastete angehörige Person Text und Bilder beim ersten Lesen und weiss sie danach, was sie tun kann? | nach W3, parallel zu R1 | Matrix je Figur, Bildsprache je Figur, Lesetest je Abschnitt, Kennzahlen |
| R3 · Freigabe-Audit | Ist alles abgeschlossen, freigegeben und richtig ausgeliefert? | unmittelbar vor der Veröffentlichung, nach R1 und R2 | «Go», «Go mit Auflagen» oder «No-Go» |

## Regeln für alle drei

- **Eigene Sitzung:** Geprüft wird von einer Sitzung oder Person, die die Website nicht gebaut hat. Wer prüft, ändert keine Inhalte und keinen Code und committet nur den Prüfbericht.
- **Beleg je Punkt:** Seite › Abschnitt, Element, Zitat, Messwert oder Bildschirmfoto. Ein Punkt ohne Beleg gilt als nicht geprüft (R3: als nicht erfüllt).
- **Priorität:** kritisch / wichtig / optional. Nur änderungsrelevante Befunde. Fachliche Fragen als «Prüfbedarf».
- **Status im Prüfbericht:** Die Zeilen «R1», «R2» und «R3» in der Statustabelle von `PRUEFBERICHT.md` stehen auf «erledigt» oder «entfällt: Begründung». R3 steht nur bei «Go» auf «erledigt». Das Produktionsgate des Starters prüft diese Zeilen (ab Build r4-5).
- **Lesetest mit Menschen:** R2 ersetzt keinen Test mit echten Angehörigen. Wo möglich, lesen zusätzlich eine angehörige Person und eine Person mit eigener Erfahrung (Trialog).
- Rahmen Schweiz / Kanton Zürich; Schweizer Hochdeutsch (ss, «»).

Die Aufträge unten werden unverändert in eine neue Sitzung kopiert; nur der Kontext wird ausgefüllt.

## R1 · Profil-Audit: Gestaltung, Marke und Komponenten

```
Rolle
Du prüfst eine Website der Fachstelle Angehörigenarbeit PUK auf Übereinstimmung mit dem
PUK Website-Profil. Du hast die Website nicht gebaut. Du änderst keine Inhalte und keinen Code.

Kontext (ausfüllen)
- Website: templates/website/<website>/   Branch: <branch>   Stand (Commit): <hash>
- Vorschau: <URL>
- Anrede auf der Website: Sie

Grundlagen (im Repository lesen, bevor du prüfst)
- README.md (v. a. «Zuständigkeit statt Krisenzugang», «Verweis im Text», Absenderin)
- guidelines/01-marke-und-logo.md, 02-farben-und-kontrast.md, 03-typografie-und-flaechen.md,
  05-anwendungsmuster.md, 06-langform-und-psychoedukation.md, 09-interaktionskonzept.md,
  04-barrierefreiheit-und-test.md
- components/bundle.css und die Website-eigene CSS-Datei
- site.config.json der Website

Vorgehen
- Prüfe jede Seite bei 320, 360, 768, 1280 und 1440 px, im Standard-Theme und mit
  data-theme="kontrast". Sieh dir Bildschirmfotos an, nicht nur den Quelltext.
- Prüfe Punkt für Punkt. Jeder Punkt braucht einen Beleg (Seite › Abschnitt, Element,
  Zitat, Messwert oder Bildschirmfoto). Ein Punkt ohne Beleg gilt als nicht geprüft.

Prüfpunkte

A · Marke und Absenderin
  1. Logo positiv (PUK_Logo_statisch_positiv_de.svg) im Seitenkopf, oben links, Sperrzone
     eingehalten, Wortmarke nie ohne Symbol.
  2. Absenderin «Fachstelle Angehörigenarbeit PUK» auf jeder Seite sichtbar.
  3. Bildwelt: keine KI-generierten Personenbilder, keine dekorativen Stimmungsbilder.

B · Farben und Kontrast
  4. Nur semantische Tokens; keine Hexwerte in Website-CSS oder SVG-Attributen.
  5. Kontrast: Text mindestens 4,5 : 1, Linien und grafische Objekte mindestens 3 : 1 –
     gemessen, auch für Links, Vertiefungs-Schalter, Hinweiskästen und Text in Figuren.
  6. Theme «Hoher Kontrast»: alle Seiten und Figuren vollständig lesbar.
  7. Bedeutung nie nur über Farbe (Zustände, Fehler, gewählt/aktuell).

C · Typografie und Flächen
  8. Schrift lokal eingebunden (keine extern geladenen Schriften).
  9. Lesetext in Seitenschrift; Überschriften und Handlungshinweise nicht kleiner als der
     Erklärtext daneben; Zeilenlänge lesbar.
 10. Abstände, Linien, Radien nur über Profil-Tokens; keine freien Pixelwerte, keine Schatten
     oder Verläufe ausserhalb des Profils.

D · Seitenhülle und Navigation
 11. Sprunglink als erster Tabstopp; Hauptnavigation mit aria-current; Reihenfolge wie im
     Seitenvertrag.
 12. Kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom.
 13. Fusszeile: Zuständigkeitsverweis wortgleich mit dem aktuellen Standardwortlaut im README
     (oder einem dokumentiert geprüften Wortlaut), Inhaltsverantwortung, Prüfdatum.

E · Komponenten und Interaktion
 14. Nur Profil-Komponenten und -Muster; keine Kartenraster mit Icons, wo eine Anordnung mit
     Beziehungen erklären müsste.
 15. «Sichtbar vor versteckt»: Kritische Information (Sicherheit, Schutz, Zuständigkeit) steht
     nie nur in Akkordeon, Reiter, Dialog oder Vertiefung.
 16. Bedienziele mindestens 44 × 44 px; Hover nie einzige Auslösung; Fokus-Ring überall
     sichtbar; nichts bewegt sich von selbst.

F · Zuständigkeit statt Krisenzugang
 17. Keine Krisennummern, keine tel:-Links, kein Notfallblock, keine Seite «Hilfe in der Krise».
 18. Verweis im Text nur über den Platzhalter, nur auf Seiten mit Selbstgefährdung, Gewalt oder
     akuter Krise, direkt nach der Handlungsanleitung, höchstens einer je Abschnitt, nicht in
     Figur oder Vertiefung; Wortlaut gleich site.config.json › responsibility.inline.
 19. Kein Text weckt die Erwartung, die Fachstelle sei in Krisen zuständig.

Regeln
- Nur änderungsrelevante Befunde. Priorität: kritisch / wichtig / optional.
- Fachliche Fragen als «Prüfbedarf» markieren, nicht beurteilen.
- Unterscheide Website-Befunde von Profil-Befunden: Liegt die Ursache im Profil (CSS,
  Muster, Starter), kennzeichne den Befund als «Profil» – er wird im Design-System behoben.
- Rahmen Schweiz / Kanton Zürich; Schweizer Hochdeutsch (ss, «»).

Ergebnis
1. Gesamturteil in höchstens fünf Sätzen.
2. Tabelle: Nr. | Prüfpunkt | Ergebnis (erfüllt / teilweise / nicht erfüllt / nicht anwendbar)
   | Beleg | Priorität | Website oder Profil.
3. Liste aller kritischen und wichtigen Befunde mit konkretem Änderungsvorschlag.
4. Was nicht geprüft werden konnte, und warum.
Trage das Ergebnis in PRUEFBERICHT.md unter «R1 Profil-Audit» ein. Committe nur den Prüfbericht.
```

## R2 · Visualisierung und Verständlichkeit für Laien

```
Rolle
Du prüfst eine Website der Fachstelle Angehörigenarbeit PUK aus der Sicht der Menschen, für
die sie gemacht ist. Du hast die Website nicht gebaut. Du änderst keine Inhalte und keinen Code.

Kontext (ausfüllen)
- Website: templates/website/<website>/   Branch: <branch>   Stand (Commit): <hash>
- Vorschau: <URL>
- Lesende: Angehörige ohne Fachwissen. Prüfperson im Kopf: eine erschöpfte Mutter oder ein
  Partner, abends, auf dem Handy, nach einem schwierigen Gespräch.

Grundlagen (im Repository lesen)
- guidelines/00-visuelle-wissensvermittlung.md, 07-visualisierung-umsetzen.md,
  06-langform-und-psychoedukation.md, 00-sprache-und-ton.md
- site.config.json › visualPlan
- README.md › «Zuständigkeit statt Krisenzugang»

Teil 1 · Visualisierungs-Check je Figur
Fotografiere jede Figur in main bei 1280 und 360 px und im Theme «kontrast» und sieh sie an.
Fülle die Matrix Prüfpunkt × Figur aus (E erfüllt / T teilweise / N nicht erfüllt / – nicht
anwendbar), mit Beleg je T und N.
  1–17  Die 17 Punkte aus Leitlinie 07, Abschnitt «Prüfung: Visualisierungs-Check».
  18. 10-Sekunden-Test: Wird die Kernaussage beim ersten Blick auf die Zeichnung klar, ohne
      Liste und Vertiefung?
  19. Alltagsworte: Keine Fachbegriffe als Beschriftung (z. B. «Modus», «Regulation»,
      «Kontinuum»), oder sie sind beim ersten Auftreten erklärt.
  20. Kein sichtbarer Text, der nur die Zeichnung beschreibt («Über der Linie vier …»,
      «durchgezogene Linie»). Die Kurzbeschreibung steht als p.puk-sr nur für Screenreader.
  21. Kurztext und Kernaussage erklären den Inhalt, nicht die Grafik.
  22. Formen und Linien bedeuten auf der ganzen Website dasselbe (gestrichelt, doppelt, dicker).
  23. Der Ansatzpunkt für Angehörige ist konkret: Was genau tue ich, mit einem Beispielsatz.

Teil 2 · Bildsprache und Wirkung je Figur
Grundlage: Leitlinie 00-visuelle-wissensvermittlung.md, Abschnitte «Bildsprache» und «Ein Bild,
eine Idee». Sieh dir jede Zeichnung zuerst ohne den Text darum herum an, dann mit Text. Prüfe
auch die geplanten Figuren (visualPlan der Entwurfsseiten, UMBAUPLAN.md).
  B1. Erster Eindruck, fünf Sekunden, ohne Text: Was löst das Bild aus (ruhig, warm, kalt,
      technisch, bedrohlich, belehrend, nichts)? Passt das zum Thema des Abschnitts?
  B2. Wiedererkennen: Kommt das Erleben der Angehörigen im Bild vor, oder nur ein Modell von
      aussen? Ist ihr Platz oder ihre Sicht im Bild erkennbar?
  B3. Wirkung: Löst das Bild die Wirkung ein, die im Plan steht (resonance)?
  B4. Ton: würdevoll und warm; nicht verniedlichend, nicht dramatisierend, nicht belehrend.
  B5. Braucht es hier ein Bild? Wäre ein kurzer Text mit Beispielsatz klarer und wärmer?
  B6. Freundin-Test: Würde eine Angehörige dieses Bild einer Freundin zeigen, um zu erklären,
      wie es ihr geht?
Bewertung je Figur: «trägt» / «überarbeiten» / «neues Motiv» / «durch Text ersetzen». Für
jede Figur, die nicht trägt, ein Vorschlag in Worten, ohne Code, höchstens zwei Varianten:
was man sieht, die Beschriftungen als Sätze, was wegfällt. Bei «durch Text ersetzen» der Kern
in zwei bis drei Sätzen.

Teil 3 · Lesetest je Seite
Lies jede Seite ganz, Abschnitt für Abschnitt, als die Prüfperson. Beantworte je Abschnitt:
  a. Verstehe ich beim ersten Lesen, worum es geht? (ja / mit Mühe / nein)
  b. Weiss ich danach, was ich tun kann? Gibt es ein «Was Sie tun können» oder einen
     Beispielsatz, den ich so sagen könnte?
  c. Stolperstellen: Fachwörter ohne Erklärung, Sätze über 25 Wörter, doppelte Verneinungen,
     Telegrammstil, Links, die wie Satzteile dastehen, «es»/«sie» ohne klaren Bezug.
  d. Ton: warm, erwachsen, nicht belehrend, nicht verniedlichend; keine Schuldzuweisung an
     Angehörige.
  e. Absicherungen am richtigen Ort: Bei Handlungshinweisen für Angehörige dürfen sie fehlen;
     bei Aussagen über die betroffene Person, über Ursachen, Diagnose und Verlauf müssen sie
     stehen. Beides prüfen.
Miss je Seite: Anteil Sätze mit Verneinung (nicht / kein / weder / nichts), mittlere
Satzlänge, Anteil Abschnitte mit Handlungsteil. Nenne die Zählweise, damit man nachrechnen kann.

Regeln
- Nur änderungsrelevante Befunde. Priorität: kritisch / wichtig / optional.
- Jeder Vorschlag hält die fachliche Bedeutung. Fachliche Fragen als «Prüfbedarf» markieren.
- Bildvorschläge bleiben im Profil: Profil-Tokens, Linienzeichnung oder Diagramm, keine Fotos,
  keine generierten Personenbilder, keine Stimmungsbilder.
- Sicherheit: Hinweise zu Schutz, Gewalt und Suizidalität stehen sichtbar im Text, nie nur
  in Figur oder Vertiefung. Keine Krisennummern vorschlagen.
- Rahmen Schweiz / Kanton Zürich; Schweizer Hochdeutsch (ss, «»).

Ergebnis
1. Gesamturteil in höchstens fünf Sätzen: Ist die Website für Laien verständlich und
   praxisnah? Welche Figur trägt und spricht am besten an, welche am wenigsten?
2. Matrix je Figur mit Belegen.
3. Tabelle Bildsprache: Seite › Abbildung | Motiv in einem Satz | erster Eindruck (B1) |
   Befunde | Bewertung | Priorität; darunter die Vorschläge. Geplante Figuren als eigene,
   kurze Tabelle.
4. Tabelle Lesetest: Seite | Abschnitt | a | b | Stolperstellen | Priorität.
5. Die zehn schwierigsten Stellen der Website, je mit Zitat und einem Vorschlag, der die
   Bedeutung hält.
6. Kennzahlen je Seite.
Trage das Ergebnis in PRUEFBERICHT.md unter «R2 Visualisierung und Laienverständlichkeit»
ein. Committe nur den Prüfbericht.
```

## R3 · Freigabe-Audit: Go oder No-Go

```
Rolle
Du machst die Freigabeprüfung einer Website der Fachstelle Angehörigenarbeit PUK. Du hast sie
nicht gebaut. Du änderst keine Inhalte und keinen Code. Fachliche Freigaben erteilst du nicht;
du prüfst nur, ob sie dokumentiert sind.

Kontext (ausfüllen)
- Website: templates/website/<website>/   Branch: <branch>   Stand (Commit): <hash>
- Vorschau: <URL>   Ziel-Adresse nach Veröffentlichung: <URL>

Grundlagen (im Repository lesen)
- guidelines/00-ablauf-pruefung-und-freigabe.md (inkl. «Prüftiefe»)
- guidelines/00-technische-qualitaet.md (v. a. C Datenschutz, F Darstellung und Druck)
- README.md › «Zuständigkeit statt Krisenzugang»
- PRUEFBERICHT.md, site.config.json, tools/gate.mjs der Website

Prüfpunkte (jeder mit Beleg)

A · Prüfbericht
  1. Stufen W1, W2, S, Visualisierungs-Check, Bedienung und Barrierefreiheit, W3 stehen auf
     «erledigt» oder «entfällt: Begründung», mit Datum und Person oder Sitzung.
  2. Keine offenen Befunde der Priorität kritisch oder wichtig; offene optionale Befunde sind
     bewusst zurückgestellt und begründet.
  3. Prüftiefe eingehalten: mindestens 20 Aussagen mit dem Bestand verglichen (bei Umbauten),
     Kennzahlen nachgerechnet, Visualisierungs-Check je Figur, zweite unabhängige Prüfung.
  4. Mindestens zwei reale Screenreader-Läufe (z. B. VoiceOver/Safari, NVDA/Firefox) und ein
     Test mit Hardwaretastatur und Touch sind dokumentiert.

B · Fachliche Freigaben
  5. Jede Figur im visualPlan hat approvalStatus «freigegeben».
  6. Keine Platzhalter mehr, oder jeder ist freigegeben.
  7. responsibility und responsibility.inline: reviewStatus «geprueft», mit Person und Datum;
     Wortlaut gleich dem aktuellen Standard im README oder dokumentiert abweichend geprüft.
  8. Inhaltsverantwortung und Prüfdatum sind auf der Website sichtbar; Entwurfsmarkierungen
     («Entwurf», «fachliche Prüfung ausstehend», «Platzhalter») sind entfernt. Freigabesprache:
     «fachlich freigegeben», nie «verifiziert».

C · Gate
  9. node tools/build.mjs: 0 blockierende Befunde.
 10. node tools/gate.mjs --selftest: alle Fälle bestanden.
 11. node tools/gate.mjs --production: 0 blockierende Befunde.
     (Ohne Repositoryzugriff: als «nicht prüfbar» melden, nicht als bestanden.)

D · Zuständigkeit und Inhalt
 12. Keine Krisennummern, keine tel:-Links, kein Notfallblock (Stichprobe auf jeder Seite).
 13. Alle externen Links erreichbar und auf offizielle Quellen (z. B. Opferhilfe Schweiz);
     E-Mail-Adresse der Fachstelle korrekt.
 14. Quellenangaben vollständig, mit Jahr; keine Quellenzuschreibung ohne Grundlage.

E · Datenschutz und Technik
 15. Keine extern geladenen Schriften, Skripte, Karten oder Videos; kein Tracking, keine Cookies.
 16. Metadaten: title und description je Seite, lang="de-CH", siteUrl gesetzt, Favicon.
 17. Vorschau-Adressen sind nicht indexierbar; die Ziel-Adresse ist es (robots, noindex).
 18. Druckansicht jeder Seite lesbar, ohne Bedienelemente; 404-Seite vorhanden.

F · Auslieferung
 19. Veröffentlicht wird der Export (node tools/export.mjs <zielordner> --production), nicht
     der Arbeitsordner. Prüfe den Exportordner: keine Arbeitsdateien (UMBAUPLAN.md,
     KORREKTUR-*.md, abgleich/, PRUEFBERICHT*.md, tools/, Selbsttest-Dateien, Bestandstexte).
 20. Navigation zeigt nur freigegebene Seiten; Entwurfsseiten sind nicht erreichbar.
 21. Links und Sprungziele funktionieren auf der Ziel-Adresse (Umschreibungen des Hosters
     beachten); kein Link führt auf die Vorschau.

Regeln
- Ein Punkt ohne Beleg gilt als nicht erfüllt.
- Priorität: kritisch (blockiert die Veröffentlichung) / wichtig / optional.
- Rahmen Schweiz / Kanton Zürich; Schweizer Hochdeutsch (ss, «»).

Ergebnis
1. Entscheid in einem Satz: «Go», «Go mit Auflagen» (Auflagen einzeln, mit Frist) oder «No-Go».
2. Tabelle: Nr. | Prüfpunkt | Ergebnis (erfüllt / nicht erfüllt / nicht prüfbar) | Beleg |
   Priorität.
3. Liste der blockierenden Punkte: was fehlt, wer es erledigt (bauende Sitzung, Prüfsitzung
   oder Fachstelle).
Trage das Ergebnis in PRUEFBERICHT.md unter «R3 Freigabe-Audit» ein, mit Datum und Stand.
Committe nur den Prüfbericht. Veröffentlicht wird nur nach «Go» und nach Freigabe durch die
Fachstelle.
```
