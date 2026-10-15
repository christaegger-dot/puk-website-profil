# Prüfbericht · Profilpaket 2026.10.2 · Ablauf, Schritt 2

**15.10.2026 · Prüfsitzung (Claude Code)** im Auftrag der Fachstelle Angehörigenarbeit (Ch. Egger). Gestartet hat diese Sitzung die bauende Sitzung auf Wunsch der Fachstelle; von ihr kam nur der Auftrag. Diese Sitzung hat das Paket nicht gebaut.

- **Stand:** `main` bei `b7989b3`. Vergleichsstand vor dem Paket: `8abc333`. Schritt 0 sowie P-16 und P-17 liegen davor (`c368ecd`, `1cd870f`, `9f15c91`, `c01e60a`).
- **Wichtig zum Ablauf:** Der Pull Request #124 mit dem Paket wurde am 15.10.2026 zusammengeführt, **bevor** diese Prüfung stattfand. Die Regel «Kein Merge ohne Prüfbericht» (`CLAUDE.md`) war damit nicht eingehalten.
- **Grundlage:** `ENTSCHEIDE-PROFIL-2026-10-2.md` mit Abschnitt «Geänderte Lage», `README.md` (Änderungsprotokoll 15.10.2026), `guidelines/00-ablauf-pruefung-und-freigabe.md`. Die Selbstprüfung der bauenden Sitzung (`SELBSTPRUEFUNG.md`, `messung/`) wurde nachgerechnet, nicht übernommen.
- **Geändert:** nichts an Inhalten, Code, Leitlinien, Artefakt oder Paket-ZIP. Neu sind nur dieser Bericht und `pruefung/` (Skripte, Rohdaten, Bilder).
- **Messumgebung:** Chromium 141 (Playwright), Firefox ESR 153.5 (deutsch, headless, über WebDriver BiDi), poppler 24.02, Python 3 mit Pillow. Kein Safari, kein echter Screenreader.
- **Kopie «Depression»:** `templates/website/zz-dep-test/` nach `messung/README.md` (Werkzeuge und `starter.css` aus dem Starter, neu gebaut). Nicht committet; `depression-angehoerige/` und `borderline-angehoerige/` unverändert.

## Gesamtergebnis

**Schritt 2 ist nicht erledigt.** Ein kritischer Befund ist offen (K-1, Druck). Ausserdem sind vier wichtige Befunde offen, und P-1 ist nicht erfüllt.

- **K-1 (kritisch, im Paket):** Im unveränderten Druck beginnen kurze Figuren jetzt oft mit einem **leeren grauen Rahmen am Seitenende**; ihr Inhalt folgt erst auf der nächsten Seite. Auf «Für sich sorgen» entsteht bei 10 mm/110 % zusätzlich eine **ganz leere Seite**. Vorher gab es beides an diesen Stellen nicht. Betroffen sind auch Muster, die laut Paket «unteilbar» bleiben (Gegenüberstellung, Beziehungskarte, Spannungsfeld).
- **Warum die Selbstprüfung das nicht zeigt:** Die Textmarken der Druckmessung verändern den Umbruch. Die Kennzahl «keine leere Seite in 204 Fällen» gilt nur für die markierte Messkopie (W-1).
- Alle übrigen gebauten Punkte sind mit Beleg geprüft und erfüllt, mit Ausnahme von P-4 (teilweise, W-3) und P-17 (teilweise, kein echter Screenreader).

## Ergebnis je Punkt

| Nr. | Abnahme | Ergebnis | Beleg |
| --- | --- | --- | --- |
| Schritt 0 | `interaktion.js` und `starter.css` ins Artefakt übernommen; alle gemeinsamen Dateien byte-gleich | **Erfüllt** | Artefakt «PUK Zürich Website-Profil», gelesen in Version `1792059369-2052` (= Version 46). 286 Dateien unter `project/`, davon 213 gemeinsam mit dem Repository: **213 von 213 byte-gleich**, darunter `components/interaktion.js` (sha256 `3627f264…`) und `starter.css` (`fbe03527…`). Nur im Artefakt: 69 Vorschaukarten, `design-system.json`, 3 Dateien unter `assets/`. `pruefung/ergebnisse/artefakt-v46-gemeinsame-dateien-sha256.txt` |
| P-1 Druck | A4, zwei Einstellungen, lange Figuren und je Muster eine kurze: keine leere Seite, Titel und Kernaussage nie allein, Kennzeichnung direkt nach der Darstellung, kurze Figuren unverändert | **Nicht erfüllt** (K-1; Abweichung bei kurzen Abfolgen bestätigt) | **Nachgerechnet mit den Skripten der bauenden Sitzung** (Textmarken): 204 Fälle, 0 leere Seiten, 203 Kennzeichnung direkt (Ausnahme `v-bv-weg` 15 mm/110 %, vorher gleich), 9 kurze Figuren über zwei Seiten; vorher 0. Lange Abfolgen: 48 Fälle, leere Seiten vorher 35, nachher 0; Titel/Kern/Anfang zusammen 40 → 48; Kennzeichnung direkt 43 → 47 (Ausnahme `v-bh-ablauf` 15 mm/100 %: Ende S. 3, Kennzeichnung S. 4). Rohdaten 48/48 gleich wie `druck-long-*.json`; `druck-before.json` 204/204 gleich; `druck-final.json` 196/204 gleich (Abweichung nur Seitenzahl der Starter-Seiten, O-1). Alle 10 Muster sind vertreten.<br>**Gegenprobe ohne Marken** (`druck-leer-ohne-marken.cjs`, unveränderte Seiten, 10 Seiten × 12 Einstellungen, vorher und nachher): **leere Seite nachher 1** (`fuer-sich-sorgen` 10 mm/110 %, S. 5 ohne Text), vorher 0. **Leerer Figurrahmen am Seitenende** (`leerer-rahmen.py`, Seitenbild): nachher 82 von 120 PDF, vorher 20; Stichprobe im Bild: 3 Treffer nachher alle echt, 1 Treffer vorher Fehlalarm. Bilder: `pruefung/bilder/p1-fuer-sich-sorgen-10mm-110-leere-seite.png`, `p1-starter-behandlung-0mm-90-leerer-rahmen.png`, `p1-je-nach-rolle-10mm-110-leerer-rahmen.png`<br>**Leitlinie:** Der entschiedene Satz steht wörtlich in `guidelines/00-technische-qualitaet.md`, F. Darüber hinaus siehe W-2 |
| P-2 Verweis im Text | Gleich gross wie der Fliesstext daneben, 320 bis 1440 px, 100 und 200 % | **Erfüllt** («Depression»; Borderline bei der Übernahme dort) | `bundle.css` ändert nur `font-size` (Diff), Farbe, Rahmen, Abstände unverändert. Alle 4 Stellen der Website (`begleiten`, `fuer-sich-sorgen`, je 2; sonst keine Seite mit dem Verweis): 20/20 gleich bei 320–1440 px mit 100 % und 200 % Schriftgrösse (19/21 px bzw. 38/42 px, `ergebnisse/selfcheck-wiederholt.txt`). Zusätzlich Seitenzoom 200 % (Fenster 320–1440 px, `p2-seitenzoom.cjs`): Verweis 19 px = Fliesstext 19 px. Im Kopfbereich von `begleiten` steht der Verweis neben dem grösseren Lead (21 px) im Lesegrad – so entschieden |
| P-3 E-Mail-Link (Ausnahme) | Abstand zum nächsten Ziel: Kreis 24 px ohne Überschneidung, Starter und «Depression» | **Erfüllt** | Link 23,3 px hoch. Abstand Mitte → nächstes Ziel: Starter 58 px (1280) und 90,1 px (360); Kopie «Depression» 83,6 px und 90,1 px; nötig 12 px. Satz in `guidelines/09-interaktionskonzept.md`, Bedienziele, und im Änderungsprotokoll |
| P-4 Redaktionsstatus | Selbsttest für beide Fälle; Websites bestehen das Produktionsgate | **Teilweise erfüllt** (W-3) | Selbsttest 68/68 (Starter, Kopie «Depression», entpacktes ZIP). Kopie «Depression»: Produktion 0 blockierend. Direktprobe am Gate: «Entwurf vom 15.10.2026» blockiert, «Fachlich freigegeben» blockiert, «Fachlich freigegeben am 15.10.2026» und «… am 15. Oktober 2026» frei. **Mutationsprobe:** Regel «Entwurf» abgeschaltet → Selbsttest weiter 68/68; Regel «ohne Datum» abgeschaltet → 67/68 |
| P-5 Ziffernkreise | 100 % pixelgleich, 200 % Ziffer im Kreis | **Erfüllt** | Neue Regel gegen alte (28/32 px fest), selbst verglichen: `depression-verstehen` 1022 × 394 px und `erklaermuster` 1022 × 506 px ohne einen abweichenden Bildpunkt (`ImageChops.difference` leer). 200 %: 56 × 56 px, Ziffer in 7 von 7 Kreisen |
| P-6 Silbentrennung | 100 % unverändert; Firefox bei 360 px und 200 % Trennung mit Trennstrich | **Erfüllt** in Firefox; Safari offen (AR3-3) | **Trennstriche sichtbar nachgewiesen** in Firefox ESR 153.5, 360 px, Schriftgrösse 32 px: «dahin-ter», «Desinter-esse», «Krank-heit» in Figur `v-dv-schichten` (`bilder/p6-firefox-360px-200prozent-trennstriche.png`). Berechnet: Figur und Abschnittsüberschrift `auto`, Fliesstext `manual`. Bei 1280 px und 200 % nur die Überschrift `auto` (Spalte schmaler als 12rem; folgt aus der Regel). **100 %:** 7 Seiten × 4 Breiten, Firefox: alle über zwei Zeilen laufenden Wörter vorher und nachher gleich (28/28), überall `manual` (`ergebnisse/p6-firefox-100prozent-*.json`) |
| P-7 Fusszeile, Logo-Link | Satzdiff aller Seiten: nur die Versionszeile entfällt, das `aria-label` ändert sich; Wortlaut freigegeben | **Erfüllt** | Eigener Satzvergleich (`satzdiff.py`, Text und lesbare Attribute): Starter 7 Seiten, Kopie «Depression» 10 Seiten, je Seite genau 2 entfallen (Versionszeile, altes `aria-label`) und 1 neu: «Psychiatrische Universitätsklinik Zürich – zur Startseite dieser Website» – wörtlich wie freigegeben. `<meta name="generator">` vorhanden. Auch im Export. `ergebnisse/p7-satzdiff-*.txt` |
| P-8 `gate.html` | Gleiche Befunde wie die Kommandozeile, Entwurf und Produktion, Starter und «Depression»; Gegenprobe ohne `PRUEFBERICHT.md` | **Erfüllt** | Befundzeilen (Stufe, Seite, Prüfung) gleich: Starter Entwurf 0/12, Produktion 11/1; Kopie «Depression» 0/0 und 0/0. **Gegenprobe ohne Bericht** (Kopien): beide melden `review-report`, «Depression» dann 1 blockierend in beiden. Modus genannt («Gate Entwurf», «Gate Produktion»). `ergebnisse/p8-gate-vergleich.txt` |
| P-10 Export | `fonts/OFL.txt` und `_redirects` im Export; Schritt «von Hand kopieren» entfällt | **Erfüllt** | Export der Kopie mit Probe-`_redirects`: `fonts/OFL.txt` byte-gleich mit `assets/fonts/OFL.txt` (= `licenses/Rubik-OFL.txt`), `_redirects` dabei; ohne `_redirects` fehlt sie. Export aus dem entpackten ZIP: `OFL.txt` dabei. Der Schritt «von Hand» stand nur im README der archivierten Borderline-Website |
| P-13 `robots.txt` | Ohne Sperre, mit Sitemap-Adresse | **Erfüllt** | `User-agent: *`, `Allow: /`, `Sitemap: https://depression-angehoerige.netlify.app/sitemap.xml`. Ohne `siteUrl` (Starter) keine Datei |
| P-14 Leitlinie | Wortlaut wie entschieden | **Erfüllt** | `guidelines/07-visualisierung-umsetzen.md`, «Schmale Bildschirme», erster Punkt: Satz wörtlich, mit Zusatz «(Paket 2026.10.2, P-14)» |
| P-15 Sticky im Druck | Rand 0, vom Seitenanfang und nach dem Scrollen: keine Überschrift über einem Eintrag; Bildschirm unverändert | **Erfüllt** («Depression»; Borderline `quellen` dort) | `begleiten`, 1280 px: Bildschirm `sticky`, Druck `static`. Neue Regel: Text aller 7 Seiten gleich (oben/gescrollt). Alte Regel: Seiten 1–6 verschieden |
| P-16 Fokus am Sprungziel | Sprunglink per Tastatur und Aufruf mit `#…`, Starter und «Depression»: sichtbar, auch mit erzwungenen Farben; nach Tab zurück im Fluss | **Erfüllt** (W-4 für die Übernahme) | Eigenes Skript `p16-sprungziel.cjs`: Starter `behandlung-verstehen#ablauf`, Kopie `begleiten#ansprechen`, `behandlung-und-verlauf#wege`; je 1280 px, 320 px mit reduzierter Bewegung, erzwungene Farben: 9/9 sichtbar (Ring bzw. 2-px-Umrandung), nächste Tab-Taste im Abschnitt, `tabindex` danach entfernt. Ohne Skript springt der Link. Wiederholung `p16p17.cjs`: 27/27. **Website «Depression» im Repository** (eigenes `starter.css`): mit erzwungenen Farben **kein Fokusbild** (`bilder/p16-erzwungene-farben-kopie-vs-repo-depression.png`) |
| P-17 Filter und Suche | Beispiel mit Tastatur, 320 px, Screenreader-Ansage der Statuszeile; ohne Skript alle Einträge | **Teilweise erfüllt** (kein echter Screenreader) | `p17-filter.cjs`: nur Tastatur (Tab ins Feld, tippen), bei 1280 px, 320 px mit reduzierter Bewegung und mit erzwungenen Farben: Filter wirkt, Hinweis bei null Treffern, kein waagrechtes Scrollen, Fokus am Feld sichtbar. Statuszeile im Barrierefreiheitsbaum: «status: 1 von 3 Treffern sichtbar.» bzw. «status: 1 passender Inhalt.» Ohne Skript, 320 px: 3/3 Einträge, kein Feld, Verzeichnis da. Regel in `09-interaktionskonzept.md` nennt «nie der einzige Weg» (Grundsatz 1 «Sichtbar vor versteckt») und «Der Starter erzeugt keinen Index». Eine echte Ansage mit NVDA/VoiceOver ist nicht geprüft |
| P-9, P-11, P-12 | Nichts gebaut | **Erfüllt** | Diff `8abc333..b7989b3`: `_headers` unverändert, `assets/logo.svg` unverändert, kein CSS entfernt |
| Selbsttest 68/68 | Nachrechnen | **Bestätigt** | Starter, Kopie «Depression», entpacktes ZIP: je 68/68; `gate.html`: 68/68 |
| Paket-ZIP | 313 Dateien; entpackt bauen, Selbsttest, gebaute Seiten gleich | **Bestätigt** | 313 Dateien, alle byte-gleich mit dem Repository. Gegenüber 2026.10.1: nichts entfallen, neu `ENTSCHEIDE-PROFIL-2026-10-2.md` und `review/paket-2026-10-2/` (14 Dateien). Entpackt: Build 7 Seiten, Selbsttest 68/68, Produktion 11 blockierend; alle 8 HTML-Dateien des Starters byte-gleich mit dem Repository. `ergebnisse/zip-2026.10.2-sha256.txt` |

## Diff `8abc333..b7989b3` Datei für Datei

| Datei | Gegen Entscheid | Bemerkung |
| --- | --- | --- |
| `components/bundle.css` | P-1, P-2, P-6, P-15 | wie entschieden; Folge K-1 |
| `templates/website/longform/erklaermuster.css` | P-5; dazu `align-items:start` im Druck | Druckregel nicht entschieden (W-2) |
| `guidelines/00-technische-qualitaet.md` | P-1, P-3, P-6, P-7, P-4, P-15 | Satz P-1 wörtlich; zusätzlich «möglichst» und «auch wenn sie kürzer sind» (W-2); P-3 und P-7 dort zusätzlich erwähnt (O-4) |
| `guidelines/07-visualisierung-umsetzen.md` | P-14 | wörtlich |
| `guidelines/09-interaktionskonzept.md` | P-3 | ein Satz, wie entschieden |
| `tools/contract.js` | P-4, P-7, P-8 | wie entschieden; Selbsttest-Lücke W-3 |
| `tools/gate-browser.js` | P-8 | zusätzlich Selbsttest an `tools/selftest/` (O-2) |
| `tools/export.mjs` | P-10, P-13 | zusätzlich Abbruch ohne Lizenz (O-2) |
| gebaute Seiten, `gate.html`, `qa.html`, `site.config.json` | P-7, Build r4-9 | nur Versionsnummer, Fusszeile, `aria-label` |
| `README.md`, `START-HIER.md`, `CLAUDE.md`, Starter-`README.md` | Protokoll, Version | stimmt mit dem Gebauten überein |
| ZIP, `review/paket-2026-10-2/` | Paket, Selbstprüfung | – |

Nichts sonst geändert. Die Websites unter `templates/website/` sind im Diff nicht enthalten.

## Befunde

### Kritisch

**K-1 · Leere Figurrahmen und eine leere Seite im Druck** (im Paket; vorher nicht)
- **Was:** Seit `.puk-vis-wide` im Druck teilbar ist, darf auch der graue Figurrahmen umbrechen. Chromium setzt den Anfang des Rahmens (Innenabstand, Hintergrund) ans Seitenende, den Inhalt auf die nächste Seite. Lesende sehen unten eine leere graue Fläche, die Figur beginnt oben auf der nächsten Seite.
- **Wo:** z. B. Starter `behandlung-verstehen` 0 mm/90 % (S. 1 und S. 2, Prozesspfad und Gegenüberstellung), «Depression» `je-nach-rolle` 10 mm/110 % (Spannungsfeld, S. 4), `fuer-sich-sorgen` 10 mm/110 % (Beziehungskarte: leerer Rahmen S. 3, **S. 5 ganz leer**). Detektor: 82 von 120 PDF nachher, 20 vorher (mit Fehlalarmen, siehe Tabelle).
- **Vorher:** An denselben Stellen rückte die Figur als Ganzes weiter; die Seite davor endete weiss.
- **Folge für die Abnahme:** «keine leere Seite» ist an echten Seiten nicht erfüllt. Auch die Aussage «Räumliche Darstellungen und Gegenüberstellungen bleiben unteilbar» stimmt für ihren Rahmen nicht.
- **Prüfbedarf (Technik, für die bauende Sitzung):** Der Rahmen `.puk-vis-figure` ist im Druck schon seit 2026.10.1 teilbar (`display:flex;break-inside:auto`); bisher hielt ihn die Hülle zusammen. Zu prüfen wäre z. B. `break-inside:avoid` für Figuren ohne Abfolge und eine Lösung für den Rahmenanfang bei Abfolgen. Messen ohne Textmarken.

### Wichtig

**W-1 · Messmethode verdeckt Druckfehler** (im Paket, Selbstprüfung)
- Die Textmarken (3 px, teils als Block vor der Darstellung) verändern den Umbruch: `fuer-sich-sorgen` 10 mm/110 % hat mit Marken 9 Seiten ohne leere Seite, ohne Marken eine leere S. 5. Der Satz «Die Marken verändern den Umbruch nicht messbar» (`messung/README.md`) trifft nicht zu.
- Die Druckmessung prüft zudem nur Seitenzahlen von Titel, Kern, Anfang, Ende und Kennzeichnung, nicht leere Rahmen.

**W-2 · Leitlinie und Druckregel über den Entscheid hinaus** (im Paket)
- `00-technische-qualitaet.md`, F: Neu stehen «Darstellungen **möglichst** nicht über Seitenumbrüche geteilt» und «Dafür dürfen Abfolgen … zwischen ihren Schritten umbrechen, **auch wenn sie kürzer sind**». Damit ist die Abweichung von der Abnahme «kurze Figuren unverändert» als Regel festgeschrieben, bevor die Fachstelle darüber entschieden hat.
- `erklaermuster.css`: Im Druck steht die Zeichnung des Modells in Schritten oben statt mittig. Nicht entschieden, aber im Änderungsprotokoll genannt.

**W-3 · Selbsttest prüft die Regel «Entwurf» nicht** (im Paket)
- Der Fall «Entwurf, noch nicht freigegeben» enthält kein Datum und wird schon von der Datumsregel blockiert. Mit abgeschalteter Entwurf-Regel bleibt der Selbsttest bei 68/68. Ein Fall wie «Entwurf vom 15.10.2026» würde die Regel belegen. Das Gate selbst arbeitet richtig.

**W-4 · «Depression» braucht bei der Übernahme auch `starter.css`** (bestand vorher; Ablauf, Schritt 4)
- Die Website hat ein eigenes `starter.css` mit `.puk-longform__section[tabindex="-1"]:focus{outline:none}`. Diese Regel ist stärker als die neue Regel in `bundle.css` und nimmt mit erzwungenen Farben das Fokusbild am Sprungziel weg (Bild). Entscheid Z nennt für die Übernahme nur `tools/`.

### Optional

- **O-1** `druck-final.json`: Seitenzahlen der Starter-Seiten stammen von vor dem Neubau ohne Versionszeile (8 Fälle, nur `pages`/`thin`). Lage der Figuren gleich.
- **O-2** Über die Entscheide hinaus, dokumentiert und sinnvoll: `gate.html` führt den Selbsttest an `tools/selftest/` aus; der Export bricht ab, wenn neben den Schriften keine `OFL.txt` liegt.
- **O-3** `gate.html` schreibt «(erwartet: offene Freigaben)» auch bei 0 Blockaden. Bestand vorher.
- **O-4** `00-technische-qualitaet.md` nennt auch die P-3-Ausnahme und den P-7-Wortlaut; inhaltlich stimmig.
- **O-5** Ausserhalb des Pakets, bestand vorher: In Firefox bei 360 px und 200 % Schrift brechen die Nummern der Lesepfade («01») in «0» und «1» um (`je-nach-rolle`).

## Nicht geprüft

- **P-6 in Safari:** kein Safari in der Umgebung; bleibt für die realen Tests (AR3-3).
- **P-17 mit echtem Screenreader:** nicht verfügbar; belegt ist nur die Rolle `status` mit Inhalt im Barrierefreiheitsbaum.
- **Teile zur Borderline-Website** (P-1 mit `borderline.css`, P-2 an 28 Stellen, P-4, P-15 `quellen`): nach Entscheid bei der Übernahme in deren Repository.
- **Druck in anderen Browsern** als Chromium.
- Meine eigene marker-freie Textsuche (`druck-gegenprobe.cjs`) fand nur etwa die Hälfte der Texte eindeutig (Lesereihenfolge von `pdftotext` in Spalten). Sie dient nicht als Beleg; massgebend sind der Druck ohne Marken und die Seitenbilder. Lehre daraus: `page.emulateMedia({media:'screen'})` wirkt in Playwright auch auf `page.pdf`; das Skript setzt darum auf `null` zurück.

## Grundlage zum Entscheid über die P-1-Abweichung

Die Fachstelle entscheidet. Hier nur die Messung und was sich für Lesende ändert.

**Gemessen** (bestätigt, Methode der bauenden Sitzung): 9 von 204 Fällen. Betroffen sind nur zwei Figuren:
- `unterstuetzung-finden` › v-us-wegweiser (Entscheidungsweg, 2 Fragen): 0 mm/90 % und 100 %, 10 mm/80 % und 90 %, 15 mm/80 %.
- `depression-verstehen` › v-dv-entstehung (Modell in Schritten, 3 Teile): 0 mm/90 %, 10 mm/110 %, 15 mm/80 % und 110 %.

Die Form aller anderen Figuren bleibt gleich. Die Gegenprobe ohne Marken zeigt dieselben 5 Fälle beim Wegweiser.

**Was Lesende sehen** (`bilder/p1-abweichung-wegweiser-0mm-90.png`, `p1-abweichung-entstehung-15mm-110.png`):
- **Wegweiser, 0 mm/90 %:** Vorher blieb die untere Hälfte von S. 1 weiss; die ganze Figur stand auf S. 2. Nachher stehen Titel, Kernaussage und Frage 1 unten auf S. 1, Frage 2 mit Kennzeichnung oben auf S. 2. Wer blättert, muss für die zweite Frage umblättern. Der Ausdruck ist eine Seite kürzer (4 statt 5).
- **Entstehung, 15 mm/110 %:** Vorher blieb S. 6 zu zwei Dritteln leer; die Figur stand ganz auf S. 7. Nachher stehen Titel, Kernaussage, Zeichnung und Teil 1 und 2 auf S. 5, Teil 3 «Die Schwelle» mit Kennzeichnung auf S. 6. Die Zeichnung zeigt die Schwelle (Ziffer 3) auf S. 5, ihre Erklärung steht auf der nächsten Seite. Der Ausdruck ist eine Seite kürzer (11 statt 12).
- In allen 9 Fällen gilt: Titel, Kernaussage und Anfang zusammen, Kennzeichnung direkt nach dem Ende, keine leere Seite (Messung mit Marken).

**Zusammenhang mit K-1:** Derselbe Schritt (Hülle teilbar) erzeugt die leeren Rahmen. Wer die Abweichung annimmt, nimmt K-1 damit nicht an; K-1 ist ein eigener Fehler und betrifft auch Muster, die gar nicht umbrechen sollen.

**Mögliche Wege** (Prüfbedarf, kein Vorschlag zur Wahl):
1. Abweichung annehmen: Kurze Abfolgen dürfen zwischen Schritten umbrechen. Dann W-2 als entschiedene Regel nachtragen.
2. Kurze Abfolgen wieder als Ganzes: Mit CSS allein nicht unterscheidbar (so die bauende Sitzung); möglich wäre ein Kennzeichen am Markup langer Figuren, z. B. vom Build gesetzt. Das wäre eine neue Änderung mit eigener Abnahme.

## Nachtrag 15.10.2026 · Entscheid der Fachstelle

Die Fachstelle hat der Empfehlung der Prüfsitzung im Chat zugestimmt («Einverstanden»):
- **P-1:** Die Abweichung wird **nicht angenommen**. Kurze Figuren werden im Druck wieder als Ganzes gedruckt; umbrechen dürfen nur lange Abfolgen.
- **K-1:** wird in einer **bauenden Sitzung behoben**, zusammen mit W-1 bis W-4. Danach prüft eine Sitzung, die nicht gebaut hat, die Änderungen nach.
- **Offen:** wie lange Abfolgen erkannt werden. Empfohlen ist ein ausdrückliches Kennzeichen (z. B. `data-print-split`, vom Build gesetzt); die Alternative ist eine Schwelle nach Schrittzahl (`:has(li:nth-child(n))`).
- **Bis dahin** übernimmt die Borderline-Website das Paket 2026.10.2 nicht.

Eintragen ins `ENTSCHEIDE-PROFIL-2026-10-2.md` und umsetzen macht die bauende Sitzung; diese Sitzung ändert nur den Prüfbericht.

## Reproduktion

Webserver im Stamm (`python3 -m http.server 8770`), Vergleichsstand `8abc333` als eigener Arbeitsbaum auf Port 8771, Kopie `zz-dep-test` nach `messung/README.md`.

| Skript (`pruefung/`) | Prüft |
| --- | --- |
| `druck-leer-ohne-marken.cjs`, `leerer-rahmen.py` | P-1 ohne Marken: leere Seiten, leere Rahmen |
| `druck-gegenprobe.cjs`, `druck-auswertung.py` | P-1 Textsuche ohne Marken (nur Hilfsmittel, siehe oben) |
| `satzdiff.py` | P-7 |
| `gate-vergleich.cjs` | P-8 |
| `p2-seitenzoom.cjs` | P-2 bei Seitenzoom |
| `p6-firefox-bidi.mjs` | P-6 in Firefox (Firefox mit `--remote-debugging-port`, Schriftgrösse im Profil) |
| `p16-sprungziel.cjs`, `p17-filter.cjs` | P-16, P-17 |

Rohdaten in `pruefung/ergebnisse/`, Bilder in `pruefung/bilder/`. Wiederholt wurden zusätzlich die Skripte der bauenden Sitzung (`printcheck`, `printlong`, `selfcheck`, `selfcheck2`, `p16p17`).
