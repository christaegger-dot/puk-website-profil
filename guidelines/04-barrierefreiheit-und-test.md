# Barrierefreiheit und Test

Ziel ist WCAG 2.2 AA. Die Regeln stehen dort, wo sie gestaltet werden: Kontraste im Abschnitt «Farben und Kontrast», Bedienziele, Zustände, Tastatur, Touch und Bewegung im «Interaktionskonzept», Textalternativen für Darstellungen in «Visualisierung umsetzen». Dieser Abschnitt sammelt die Grundanforderungen jeder Seite, das Fokusbild, die Auslieferung und den Screenreader-Testplan. Wann was geprüft wird: «Prüfung und Freigabe»; technische Kriterien insgesamt: «Technische Qualität».

## Grundanforderungen jeder Seite

- `lang="de-CH"`, eindeutiger `title`, Meta-Description, lokal mitgeliefertes Favicon.
- Skip-Link «Zum Hauptinhalt» als erster Tab-Stopp; genau ein `main` und ein `h1`; Überschriftenebenen ohne Sprünge.
- Benannte Hauptnavigation, aktuelle Seite mit `aria-current="page"` und Unterstreichung, nie nur Farbe.
- Buttons, Navigation und eigenständige Aktionen mindestens 44 px; Links im Fliesstext bleiben inline mit natürlicher Zeilenhöhe.
- Kein waagrechter Überlauf bei 320, 360, 768 und 1440 px und bei 200 % Textgrösse (Ausnahmen: Reiterleiste, Karussell, breite Tabellen in eigenem Scrollbereich).
- `prefers-reduced-motion` wird respektiert; nichts bewegt sich von selbst.
- Sensible Eingaben (Reflexionsfragen, Auswahl in Anwendungen) werden standardmässig nicht gespeichert. Browser-Speicherung nur mit Vorabinformation, Aufbewahrungsregel, Löschmöglichkeit und freigegebener Datenrichtlinie (Vorlage `templates/website/website-data-policy.example.json`); keine Diagnose oder Scores aus Eingaben.

## Fokus

Ein Fokusbild für das ganze System: Eingabefelder färben ihren Rahmen blau mit 1-px-Innenring (`[data-puk-field]`), alle anderen Bedienelemente erhalten `--focus-ring` (2 px Weiss, dann 2 px PUK-Blau).

- **Pflicht:** `:focus-visible` aus `tokens/base.css` nutzen; Eingabefelder ohne eigenen `border` inline. Fokus nie verdeckt (fixierte Elemente, Overlays).
- **Vermeiden:** Fokusring entfernen, mit JavaScript-Zuständen nachbauen oder nur über Farbe andeuten.
- **Status:** Ergänzung zu WCAG 2.2 AA (2.4.7 Fokus sichtbar, 2.4.11 Fokus nicht verdeckt); das CD-Manual regelt Fokus nicht.

## Lokale Auslieferung

- Schriften (Rubik WOFF2), Icons, Skripte, Styles und Favicon vollständig lokal mitliefern; keine CDN-Laufzeitabhängigkeiten, keine extern geladenen Schriften, kein nachträglich eingebundener Lottie-Player ohne Projektentscheid.
- Nur die tatsächlich benötigten Seiten und Laufzeitdateien ausliefern – keine Projektquellen, Entwürfe oder Arbeitsordner.

## Screenreader-Testplan

**Status: Testplan, kein Nachweis.** Kein realer Screenreader-Lauf ist durchgeführt. Alle Läufe sind **ausstehend**. Ergebnisse nur eintragen, wenn sie tatsächlich mit dem genannten Screenreader und Browser gewonnen wurden (Datum, Person, Versionen). Für eine konkrete Website: Vorlage `templates/website/website-screenreader-test.example.json` kopieren und mindestens zwei reale Läufe dokumentieren.

Prüfobjekt: `ui_kits/website/index.html` (lokal ausgeliefert), Routen siehe `ui_kits/website/README.md`, sowie der Psychoedukations-Starter und die Erklärmuster. Die UI-Kit-Leiste «UI-Kit · Referenzansichten» ist Kit-Rahmen und nicht Teil der Website; Befunde darin getrennt notieren.

### Umgebungen

| Kürzel | Screenreader | Browser | System | Status |
| --- | --- | --- | --- | --- |
| VO | VoiceOver (aktuelle macOS-Version) | Safari | macOS | ausstehend |
| NV | NVDA (aktuelle stabile Version) | Firefox (aktuelle Version) | Windows | ausstehend |

Vor dem Lauf festhalten: Versionen, Sprache der Sprachausgabe (Deutsch), Ausführlichkeit Standard, Browser-Zoom 100 %.

Wichtige Befehle (Referenz):
- **VO:** VO = Ctrl+Option. Rotor VO+U (Überschriften, Orientierungspunkte, Links, Formularelemente), weiter VO+Pfeil rechts, aktivieren VO+Leertaste, Tab für Fokusreihenfolge.
- **NV:** Lesemodus/Fokusmodus mit NVDA+Leertaste. H/Umschalt+H Überschriften, D Orientierungspunkte, K Links, B Schalter, E Eingabefelder, NVDA+F7 Elementliste, Tab für Fokusreihenfolge.

### Testfälle

Jeder Fall gilt für VO und NV. Ergebnis je Umgebung: `bestanden` / `nicht bestanden` / `nicht geprüft`, plus Befundnotiz.

#### SR-01 Seitenstart und Titel (`#start`)
1. Seite laden. 2. Titel und Sprache anhören.
- Erwartet: Dokumenttitel «Website-Musterseite | PUK Zürich» wird angesagt. Aussprache deutsch (`lang="de-CH"`).

#### SR-02 Skip-Link
1. Seite laden, Tab drücken, bis «Zum Hauptinhalt» angesagt wird (vorher die Links der UI-Kit-Leiste). 2. Aktivieren (Enter bzw. VO+Leertaste).
- Erwartet: Skip-Link wird sichtbar und als Link «Zum Hauptinhalt» angesagt. Nach Aktivierung liegt der Fokus auf dem Hauptbereich; der nächste Lese- bzw. Tab-Schritt beginnt im Hauptinhalt, nicht in der Kopfnavigation.

#### SR-03 Orientierungspunkte und Überschriften
1. Rotor/Elementliste: Orientierungspunkte. 2. Überschriften.
- Erwartet: genau ein Hauptbereich (`main`), Banner (Kopf), Navigation «Hauptnavigation», Navigation «UI-Kit: Referenzansichten», Fussbereich. Genau eine Überschrift Ebene 1 je Ansicht; Ebene 2 für Abschnitte, keine übersprungenen Ebenen.

#### SR-04 Hauptnavigation und aktueller Punkt
1. In «Hauptnavigation» die Links durchgehen.
- Erwartet: vier Links «Behandlung», «Forschung», «Lehre», «Über uns»; **kein** Notfalllink. «Behandlung» wird als aktuelle Seite angesagt (`aria-current="page"`).

#### SR-05 Logo und Bilder
- Erwartet: Logo-Link wird als «Startseite der Psychiatrischen Universitätsklinik Zürich» angesagt. Der Bildplatzhalter wird als Bild mit der Beschreibung «Platzhalter für ein redaktionell beschriebenes Bild …» angesagt.

#### SR-06 Situationsnavigator: Filter (`#situationsnavigator`)
1. Zum Filter «Worum geht es gerade?» navigieren. 2. Schalter «Sicherheit klären» aktivieren. 3. «Filter zurücksetzen» aktivieren.
- Erwartet: Chips werden als Umschalter mit Zustand angesagt («gedrückt»/«nicht gedrückt»). Nach Aktivierung wird «1 passende Impulse» über die Live-Region angesagt, ohne dass der Fokus springt. Nach Zurücksetzen wird «4 passende Impulse» angesagt und der Fokus liegt auf dem ersten Chip «Alle Themen».

#### SR-07 Angebotsnavigator: Suche und Leerzustand (`#angebotsnavigator`)
1. Eingabefeld ansteuern. 2. «xyz» eingeben. 3. Kategorie «Beratung» wählen, Feld leeren.
- Erwartet: Feld wird als Suchfeld «Suchbegriff» angesagt. Bei jeder Änderung wird die Trefferzahl angesagt («0 passende Musterangebote»); der Fokus bleibt im Feld. Der Leerzustand «Kein passendes Musterangebot gefunden.» ist im Lesemodus direkt nach der (leeren) Liste erreichbar. Kategorie-Chips mit Zustand wie SR-06.
- Beobachtungspunkt: Der Leerzustand enthält kein eigenes Bedienelement; prüfen, ob der Hinweistext allein verständlich macht, wie man zurückkommt.

#### SR-08 Kontaktwegweiser: akute Variante (`#kontaktwegweiser`, `#kontaktwegweiser/sofort`)
1. Die drei Stufen durchgehen. 2. «Jetzt sofort handeln» aktivieren. 3. Hauptaktion «Fachlich freigegebenen Notfallweg anzeigen» aktivieren. 4. Separat direkt `#kontaktwegweiser/sofort` laden.
- Erwartet: Stufen als Umschalter mit Zustand. Der empfohlene Weg ändert sich hörbar bzw. ist unmittelbar nach den Stufen lesbar. Nach der Hauptaktion liegt der Fokus auf dem Zielbereich, angesagt mit dessen Titel «Muster für den fachlich freigegebenen Notfallweg». Die Direkt-URL öffnet die akute Stufe.
- Hinweis: Alle Kontaktangaben sind Platzhalter; der Test prüft Struktur, nicht Inhalte. Die akute Variante gehört zur Kit-Referenz und wird auf Websites der Fachstelle nicht übernommen.

#### SR-09 Gesprächshilfe (`#gespraechshilfe`)
1. Situation «Sicherheit beschäftigt mich» und Ziel «Eine Grenze benennen» wählen.
- Erwartet: Zwei Chip-Gruppen mit Zustand. Die Ausgabe (Live-Region, höflich, atomar) wird nach der Wahl angesagt, einschliesslich «Fachlich freigegebenen Kontaktweg beiziehen.» Beispielformulierungen in Guillemets werden verständlich vorgelesen.

#### SR-10 Langform: Wegweiser, Sprungziele, Erklärgrafik (`#grundlagenkapitel`)
1. Navigation «Kapitelweg» bzw. Roadmap durchgehen und einen Eintrag aktivieren. 2. Erklärgrafik im Lesemodus lesen. 3. Fusszeile lesen.
- Erwartet: Sprungziel wird angesagt, Lesen geht dort weiter. Die Grafik ist über Beschriftung und Textalternative vollständig verständlich; dekorative Teile werden nicht vorgelesen. Die Fusszeile der Kit-Referenz enthält deren Sicherheitshinweis (Kit-Variante `persistent-subdued`); auf Websites der Fachstelle steht dort stattdessen der Zuständigkeitsverweis ohne Nummern (siehe SR-15).

#### SR-11 Handlungsübersicht und Transferfall (`#handlungsuebersicht`, `#transfer-erholung`)
- Erwartet: wie SR-03 und SR-10; `#handlungsuebersicht/main-content` setzt den Fokus in den Hauptbereich.

#### SR-12 Kit-Beispiel «Eigene Visualisierung» (`#beispiel-visualisierung`)
1. Figur im Lesemodus lesen. 2. Überschriftenliste prüfen.
- Erwartet: Figur mit Name «Von der Situation zum nächsten Schritt» und Beschreibung (Kurzbeschreibung aus der Bildlegende, nur für Screenreader). Drei Listeneinträge «Schritt 1: Situation», «Schritt 2: Einordnung», «Schritt 3: Nächster Schritt» mit Frage und Text. Formen, Nummern-Grafik und Pfeile werden **nicht** vorgelesen. Die Kennzeichnung «Eigene didaktische Darstellung» wird vorgelesen. Abschnitt «Textfassung der Grafik» ist erreichbar.

#### SR-14 Komplexe Grafiken der Musterseite (`#visualisierungsmuster`, Kopiervorlage `templates/website/longform/visualisierungsmuster.html`)
1. Mit Grafiknavigation (VO-Rotor «Bilder»/NV G) und im Lesemodus jede der vier Abbildungen ansteuern. 2. Bei Abbildung 1 den Link «Langbeschreibung zu Abbildung 1» aktivieren. 3. Tabellenbereich «Beispiel eines Visualisierungsplans …» mit Tabellenbefehlen (VO+Pfeiltasten in der Tabelle / NV Strg+Alt+Pfeiltasten) lesen.
- Erwartet: Jede Figur wird mit ihrem Titel («Abbildung 1 · …» bis «Abbildung 4 · …») angesagt; Legende und Kennzeichnung («Eigene didaktische Darstellung» bzw. «Musterpfad») werden vorgelesen. Kreise, Linien und Pfeile werden nicht vorgelesen.
- Abbildung 1: Nach dem Link liegt der Fokus auf «Langbeschreibung zu Abbildung 1»; die Beschreibung ist ohne Bild vollständig verständlich.
- Abbildung 2: Leserichtung wird angesagt; vier Stationen als Liste «1 von 4» … «4 von 4»; die Textfassung nennt die Rückwirkung von Station 4 auf Station 1.
- Abbildung 3: Liste mit fünf Einträgen; Schritt 4 wird als «optional» angesagt, nicht nur über die Linienart.
- Abbildung 4: als Bild mit dem Platzhalter-Namen angesagt; Bildquelle und Freigabestatus sind als Beschreibungsliste lesbar.
- Tabelle: Beschriftung wird angesagt; Spalten- und Zeilenköpfe werden beim Navigieren zu jeder Zelle mitgelesen.
- Bezug zum Textwand-/Visualisierungs-Check: Befunde, bei denen eine Grafik ohne Bild nicht verständlich ist, im Review als Befund zu «Alternativtext bzw. Langbeschreibung» eintragen.

#### SR-15 Psychoedukations-Starter (`templates/website/psychoeducation-site-starter/`)
1. `unterstuetzung-finden.html` laden, Tab bis nach der Hauptnavigation. 2. Orientierungspunkte und Überschriften der drei Referenzfälle prüfen. 3. In `beziehungen-verstehen.html` den Kreislauf lesen, einmal bei 1440 px und einmal bei 320 px (Zoom/Fensterbreite). 4. Fusszeile lesen.
- Erwartet: Die Absenderin «Fachstelle Angehörigenarbeit · Psychiatrische Universitätsklinik Zürich · angehoerigenarbeit@pukzh.ch» wird im Kopf gelesen, die E-Mail-Adresse als Link. Hauptnavigation mit vier Links; aktuelle Seite angesagt. Es gibt keinen Notfallblock und keinen Sicherheitslink.
- Fusszeile: Bereich «Zuständigkeit» mit dem Zuständigkeitsverweis ohne Nummern und seinem Prüfstatus, danach «Über diese Seiten» mit dem Hinweis, dass die Website keine individuelle Abklärung, Beratung oder Behandlung ersetzt.
- Kreislauf: breit mit der Leserichtung «im Uhrzeigersinn …»; schmal mit «von oben nach unten; nach Station 4 zurück zu Station 1» und dem Satz «Nach Station 4: zurück zu Station 1». Bei der schmalen Darstellung wird «Uhrzeigersinn» nicht vorgelesen.
- Platzhalter (Illustration, Kontakt, Download) werden mit «Entwurf» bzw. «Platzhalter» vorgelesen.

#### SR-16 Erklärmuster und Interaktion (`templates/website/longform/erklaermuster.html`, Karten der Gruppe «Interaktion»)
1. Muster G: «Schritt für Schritt aufbauen» aktivieren, mit «Weiter» bis Schritt 4, dann «Ganzes Modell zeigen». 2. Muster I und K im Lesemodus lesen, «Beispiel aus dem Alltag» aufklappen. 3. Dropdown-Menü öffnen, mit Pfeiltasten bewegen, Escape. 4. Dialog öffnen, Tab bis zum Ende, Escape.
- Erwartet: Jede Statusänderung wird angesagt («Schritt 2 von 4: Was zufliesst»); im Grundzustand sind alle vier Teile lesbar. Kreise, Linien und Formen werden nicht vorgelesen; Beziehungskarte als nach Kreisen gegliederte Liste mit «besteht»/«wäre möglich». Menü: Schaltfläche mit Zustand «erweitert/reduziert», Links als normale Links, Escape setzt den Fokus auf die Schaltfläche. Dialog: Titel wird beim Öffnen angesagt, Fokus bleibt im Dialog, kehrt nach Escape zum Auslöser zurück.

#### SR-13 Fokus und Ansage bei 200 % Text
1. Browser-Textgrösse bzw. Zoom auf 200 %, SR-02, SR-06 und SR-08 wiederholen.
- Erwartet: Fokus bleibt sichtbar und im Viewport; keine Inhalte abgeschnitten; Ansagen unverändert.

### Protokoll

| Fall | VO/Safari | NV/Firefox | Befund | Datum · Person |
| --- | --- | --- | --- | --- |
| SR-01 … SR-16 | ausstehend | ausstehend | – | – |

Automatisierte Prüfungen in `ui_kits/website/qa.html` (Überlauf, Fokusring, emulierter Tastaturdurchgang) ersetzen diesen Test nicht.
