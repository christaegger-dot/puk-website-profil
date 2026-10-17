# Website UI-Kit – PUK Website Kit 1.10.1-r4 · abgeleitet

Klickbare Rekonstruktion der acht Referenzseiten des Kits – keine neuen Designs, keine erfundenen Fachinhalte oder Kontakte – plus zwei als solche gekennzeichnete Kit-Beispiele. Die Leiste «UI-Kit · Referenzansichten» oben gehört nicht zur Website; die Seitennavigation jeder Ansicht folgt ihrer Quellseite. Kanonische Quellversion: PUK Zürich Design System 1.10.1.

**Kit-Referenz, nicht Fachstellen-Vorlage:** Das UI-Kit zeigt die Referenzansichten des Original-Kits unverändert, auch dessen Sicherheitsvarianten (`direct`, `persistent-subdued`) und die akute Stufe des Kontaktwegweisers. Für Websites der Fachstelle gilt stattdessen «Zuständigkeit statt Krisenzugang» (README); Vorlage für neue Websites ist der Psychoedukations-Starter.

| Route | Quelle | Sicherheitszugang |
| --- | --- | --- |
| `#start` | `templates/website/Website.dc.html` | keiner automatisch (generische Seite) |
| `#situationsnavigator` | `templates/website/applications/situationsnavigator.html` | Navigationspunkt «Akute Hilfe» aus der Quellseite |
| `#kontaktwegweiser`, `#kontaktwegweiser/sofort` | `templates/website/applications/kontaktwegweiser.html` | **direct** – demonstriert die akute Variante |
| `#gespraechshilfe` | `templates/website/applications/gespraechshilfe.html` | wie Situationsnavigator |
| `#angebotsnavigator` | `templates/website/applications/angebotsnavigator.html` | wie Situationsnavigator |
| `#grundlagenkapitel` | `templates/website/longform/grundlagenkapitel.html` (vollständig) | **persistent-subdued** (Fusszeile) |
| `#handlungsuebersicht` | `templates/website/longform/handlungsuebersicht.html` | persistent-subdued |
| `#transfer-erholung` | `templates/website/longform/transfer-erholung.html` | persistent-subdued |
| `#beispiel-visualisierung` | Kit-Beispiel (keine Quellseite): eigene didaktische Orientierungsgrafik | keiner (keine Website-Seite) |
| `#visualisierungsmuster` | `templates/website/longform/visualisierungsmuster.html` (r3, wird zur Laufzeit lokal geladen und unverändert eingesetzt) | keiner in der Kit-Ansicht; reale Langform: persistent-subdued |

**Sicherheitszugang:** Abhängig von der Hauptaufgabe der konkreten Seite, `direct` oder `persistent-subdued` nach `templates/website/profile.json` › `safetyAccess`. Der Kontaktwegweiser demonstriert die akute Variante. In eine generische Informationsseite wird kein Notfalllink automatisch übernommen; deshalb enthält die Hauptnavigation von `#start` keinen Notfallpunkt mehr. Die Kit-Leiste nennt den Zugang jeder Ansicht.

Sprungziele: `#<route>/<id>` (z. B. `#grundlagenkapitel/verstehen`, `#handlungsuebersicht/main-content`).

Dateien: `index.html`, `kit.css` (Kit-Leiste, Worttrennung, Kit-Beispiel), `js/*.js` (vorkompiliert, keine Babel-/CDN-Laufzeit; `visual.js` = Kit-Beispiel, `patterns.js` lädt die Musterseite), `qa.html` (Prüfansicht). Styles: `styles.css` + `templates/website/applications/applications.css` + `templates/website/longform/visual-patterns.css`. `Button` und `Card` kommen aus der Bibliothek über den Alias `window.PUKWeb`.

## Lauf 06.10.2026 (nach Profilentscheiden Absenderin und Zuständigkeitsverweis)

Statuszeile: «Matrix: 112 Prüfläufe · 0 mit Befund · Tastatur: 43 Prüfungen · 0 mit Befund · Interaktionen: 19 Prüfungen · 0 mit Befund · Gate: 36 Prüfungen · 0 mit Befund · Gesamt: 0 Befunde». Seit dem Website-Review Teil 2 steht der Zuständigkeitsverweis site-weit in jeder Fusszeile, zusammen mit dem Hinweis «ersetzt keine individuelle Abklärung, Beratung oder Behandlung». Headless-Chromium; reale Tastatur- und Screenreader-Läufe stehen weiterhin aus. Die UI-Kit-Ansicht `#kontaktwegweiser/sofort` zeigt weiterhin die akute Stufe der Quelle; für Websites der Fachstelle gilt sie nicht.

## Prüfstand r4, Build r4-1, Prüfskript qa-6 (29.09.2026, frischer Lauf der gespeicherten `qa.html` in Chromium)

Statuszeile: «Matrix: 120 Prüfläufe · 0 mit Befund · Tastatur: 45 Prüfungen · 0 mit Befund · Interaktionen: 19 Prüfungen · 0 mit Befund · Gate: 27 Prüfungen · 0 mit Befund · Gesamt: 0 Befunde · Fokusring nur statisch geprüft (Dokument ohne Fokus): Matrix 42 Läufe · nicht prüfbar: Tastatur 0, Interaktionen 0».

- **Matrix:** 14 Ansichten (10 UI-Kit-Ansichten + 4 Starterseiten; die Starterseite «Hilfe in einer akuten Krise» ist seit dem Profilentscheid vom 06.10.2026 entfernt) × 320/360/768/1440 px × 100 %/200 % Text (emuliert).
- **Starterseiten zusätzlich geprüft:** sichtbare Absenderin, Zuständigkeitsverweis in der Fusszeile und kein Notfallblock, sichtbare Platzhalter, `lang`, Favicon, Build-Stand.
- **Kreislaufgeometrie** (`#visualisierungsmuster`, `site:beziehungen-verstehen`): bei 768/1440 geschlossene Schleife, bei 320/360 lineare Abfolge mit sichtbarem Rücksprung und ohne sichtbares «Uhrzeigersinn», jeweils bei 100 % und 200 %.
- **Figuren:** Kennzeichnung, Platzhalterstatus und sprechende Quellenlinks.
- **Gate:** Entwurf 0 blockierend; Produktion blockiert genau die Platzhalter und die Visualisierungen der synthetischen Referenz (9 Befunde; Absenderin und Zuständigkeitsverweis der Fachstelle sind freigegeben bzw. geprüft); Selbsttest 39/39 (neu: E-Mail der Absenderin, Telefonnummer, Telefonlink, Notfallblock, gesperrte Variante, Zuständigkeitsverweis ausserhalb der Fusszeile).
- **Tastatur Starter:**
  - Skip-Link erster Tab-Stopp und Fokus auf `main`; Navigation aus dem Vertrag mit `aria-current`.
  - Kein Notfallblock; der Zuständigkeitsverweis steht in der Fusszeile, mit sichtbarem Prüfstatus und ohne Nummern (seit 06.10.2026; ersetzt die früheren Prüfungen von Sicherheitsbanner und Hilfeseite).
  - Drei Links im Entscheidungsweg sind erreichbar. «Ein Gespräch vereinbaren» springt an die Oberkante.
  - Jede Seite hat genau einen Zuständigkeitsverweis in der Fusszeile (site-weit).
- **Nicht vollständig belegt:** In 42 Matrixläufen hatte das Prüfdokument zeitweise keinen Fokus; dort wurde der Fokusring nur statisch geprüft (passende :focus-Regel), nicht gezeichnet.
- **Ursächlich behoben in qa-5 → qa-6:**
  - Transferfall-Bildlegende mit «Eigene didaktische Darstellung» ergänzt (Quelle und UI-Kit).
  - Musterüberschrift «Entscheidungsweg» ersetzt durch «Ein Weg mit Fragen».
  - Überläufe bei 320/360 px und 200 %: `starter.css` übernimmt die Rasterregeln des Kits (`min-width:0`, Kopfspalte mit Container-Grad, Navigationsspalten).
  - Worttrennungen bei 1440 px: dieselbe Regel.
  - Sprungziel «Ein Gespräch vereinbaren» lag am Seitenende und konnte nicht an die Oberkante scrollen (219 px). Jetzt `.puk-site-anchor-end` mit Mindesthöhe. Die Prüfregel blieb streng (0–48 px).

## Prüfstand r3, Build r3-2, Prüfskript qa-4 (28.09.2026, frischer Lauf der gespeicherten `qa.html` in Chromium)

Statuszeile, identisch in zwei frischen Läufen (Claude-Vorschau und Nutzer-Vorschau): «Matrix: 80 Prüfläufe · 0 mit Befund · Tastatur: 31 Prüfungen · 0 mit Befund · Interaktionen: 19 Prüfungen · 0 mit Befund · Gesamt: 0 Befunde · Fokusring nur statisch geprüft (Dokument ohne Fokus): Matrix 40 Läufe · nicht prüfbar: Tastatur 15, Interaktionen 2».

**Was damit belegt ist und was nicht:**
- **Belegt:** kein horizontaler Überlauf in 80 Läufen, Navigation, ganze Wörter bei 100 %, Figuren- und Tabellenbeschriftung, keine externen Laufzeitquellen, alle Quellen im Stand r3-2 (keine «veraltet»-Zeile), Filter-, Status-, Sprungziel- und Live-Region-Logik.
- **Nur statisch:** In beiden Prüfumgebungen hatte das Prüfdokument keinen Tastaturfokus (`document.hasFocus() = false`). Für jeden Tab-Stopp wurde deshalb nur geprüft, dass eine passende `:focus`/`:focus-visible`-Regel mit Outline oder Box-Shadow gilt (inklusive importierter Stylesheets). Ob der Ring tatsächlich gezeichnet und nicht verdeckt wird, ist damit nicht belegt.
- **Nicht prüfbar (17):** alle Prüfungen, die `document.activeElement` nach einer Aktion auswerten – Skip-Link → `main`, Fokus bleibt auf Chip/Suchfeld, Fokus nach «Filter zurücksetzen», Hauptaktion → Ziel, Link → Langbeschreibung, Fokusringe von Skip-Link, Navigation, Chips, Suchfeld, Stufen, Tabellenbereich und Link. Frühere Durchläufe, in denen diese Prüfungen bestanden haben, sind nicht reproduzierbar, weil der Fokus des Prüftabs nicht kontrolliert war. Nachweis offen: `qa.html` in einem Tab im Vordergrund laufen lassen, ohne ausserhalb zu klicken, und den echten Tastaturtest machen.

**Korrekturen dieses Durchgangs:**
- Die gemeldeten 8 Befunde (Überlauf der Kit-Leiste bei 320 px/200 %, getrennte Wörter auf der Musterseite) stammten aus zwischengespeicherten Styles und Vorlagen. Dagegen: Build-Kennung `r3-2`, `?v=r3-2` an allen Kit-Styles und -Skripten, Musterseite mit `cache: 'no-store'`, jede QA-Ansicht mit neuer URL, Befund «veraltet» bei abweichendem Stand.
- Die Statuszeile zählt jetzt Matrix, Tastatur und Interaktionen getrennt, dazu «nicht prüfbar». Vorher zählte sie nur die Matrix.
- Fokusprüfungen verwenden drei Zustände: bestanden, Befund, nicht prüfbar. Vorher wurde ein fehlender Dokumentfokus als fehlender Fokusring gezählt; so entstanden die 20 bzw. 23 Befunde der Verifikation.
- Die Nachkorrektur von Sprungzielen scrollt jetzt ohne Animation (`behavior: 'instant'`), in `js/app.js` und `js/patterns.js`. Vorher konnte das sanfte Scrollen der Langform-Styles das Ergebnis vom Timing abhängig machen («#verstehen» 772 px, «Prozesspfad» 186/705 px).

## Prüfstand r3 (28.09.2026, erster Lauf – ersetzt durch Build r3-2)

- **Matrix:** 10 Ansichten (8 Referenzansichten + 2 Kit-Beispiele) × 320/360/768/1440 px × 100 %/200 % Text = 80 Läufe, **0 mit Befund** (kein horizontaler Seitenüberlauf, Navigation ≥ 44 px ohne Überlappung/Textüberlauf, jeder Tab-Stopp mit sichtbarem Fokusring, kein positiver `tabindex`, bei 100 % keine im Wort getrennten Wörter). `#visualisierungsmuster`: 23 Tab-Stopps. Transferfall 1440 px: 100 % und 200 % ohne Befund.
- **Figuren/Tabellen (neu, bei 100 % in allen 40 Läufen):** jede `figure` mit `figcaption` und aufgelöstem `aria-describedby`, jede Tabelle mit `caption` und `th[scope]`, `role="img"` und `role="region"` mit Namen, SVGs ausgeblendet oder benannt, `img` mit `alt`. `#visualisierungsmuster`: 4 Figuren, 1 Tabelle, ohne Befund.
- **Externe Laufzeitquellen:** über alle geladenen Ressourcen (Resource Timing, inkl. Schriften und der geladenen Musterseite) in allen 40 Läufen bei 100 %: 0 externe Quellen.
- **200 % Text (emuliert):** kein Überlauf; in 39 von 40 Läufen brechen einzelne Wörter, die breiter als die Zeile sind, im Wort um (Info).
- **Tastatur (emuliert, 31 Prüfungen, ohne Befund im finalen Lauf):** zusätzlich zu r2 für `#visualisierungsmuster`: 7 Roadmap-Sprungziele vorhanden; Roadmap «Prozesspfad» scrollt das Ziel nach oben; Tabellenbereich per Tab erreichbar, mit Fokusring und Namen; Link «Langbeschreibung zu Abbildung 1» mit Fokusring setzt den Fokus auf die Langbeschreibung.
- **Bewegung:** CSS-Regeln statisch gelesen: die einzige Animation (Kreislauf-Pfeile) liegt in `@media (prefers-reduced-motion:no-preference)`, keine Animation ausserhalb. Das Verhalten mit aktivierter Reduktion wurde nicht im Browser umgeschaltet.
- **Korrigiert in r3:** Kit-Leiste und Roadmap-Einträge liefen bei 320 px/200 % um 11–33 px über; jetzt Umbruch in der Beschriftung. Drei Überschriften der Musterseite gekürzt, damit bei 100 % keine Wörter getrennt werden.
- **Wiederholter Hinweis:** In einem Zwischenlauf ging der Fokus bei mehreren Prüfungen verloren, während der Prüftab im Hintergrund lag (`document.hasFocus() = false`); im Vordergrund-Lauf ohne Befund. Im echten Tastaturtest beobachten.
- **Nicht automatisiert:** Kontrastwerte der Grafiken wurden aus den Tokens abgeleitet, nicht gemessen; der redaktionelle Textwand-/Visualisierungs-Check ist manuell (Checkliste in `qa.html`).

## Prüfstand r2 (28.09.2026, automatisiert in Chromium über `qa.html`)

- **Matrix:** 9 Ansichten (8 Referenzansichten + Kit-Beispiel) × 320/360/768/1440 px × 100 %/200 % Text = 72 Läufe, **0 mit Befund**: kein horizontaler Überlauf, Navigationslinks ≥ 44 px, ohne Überlappung und ohne Textüberlauf, jeder Tab-Stopp mit sichtbarem Fokusring, kein positiver `tabindex`. Transferfall bei 1440 px: 100 % und 200 % ohne Befund, 21 Tab-Stopps.
- **Ganze Wörter:** bei 100 % in allen 36 Läufen keine im Wort getrennten Wörter. Bei 200 % werden in 35 von 36 Läufen einzelne Wörter im Wort umbrochen (Info, kein Überlauf, Inhalt vollständig): einzelne Wörter sind bei doppelter Schriftgrösse breiter als die Zeile.
- **200 % Text** ist emuliert (jede berechnete Schriftgrösse verdoppelt); das ist strenger als echter Browser-Zoom, weil responsive Grade überschrieben werden. Ein Lauf mit echtem Text-Zoom (Firefox «Nur Text zoomen», Safari) steht aus.
- **Tastatur (emuliert, zweimal wiederholt, 25 Prüfungen ohne Befund):** Tab-Reihenfolge nach DOM, `focus()`, Enter/Leertaste per `click()`. Keine echten Tastenereignisse. Geprüft: Skip-Link (erster Tab-Stopp der Seite nach 9 Stopps der Kit-Leiste, bei Fokus sichtbar, setzt Fokus auf `main`); Hauptnavigation (4 Links, kein Notfalllink, `aria-current`, Fokusring); Situationsfilter (Fokus bleibt auf Chip, `aria-pressed`, Status, Tab erreicht «Filter zurücksetzen»); Angebotsfilter inkl. Leerzustand (Fokus bleibt im Suchfeld, Status «0 passende Musterangebote»); Kontaktwegweiser (Stufen mit Fokusring, Tab erreicht Hauptaktion, Hauptaktion fokussiert Ziel); Gesprächshilfe (zwei Chip-Gruppen, Fokus bleibt, Live-Ausgabe).
- **Korrigiert in r2:** Nach «Filter zurücksetzen» ging der Fokus verloren (Schaltfläche verschwindet). Jetzt Fokus auf den ersten Chip «Alle Themen», im UI-Kit und in `templates/website/applications/applications.js`. Lange Aktions- und Navigationsbeschriftungen liefen bei 200 % Text über (bis 44 px); jetzt Umbruch innerhalb der Beschriftung.
- **Offene Beobachtung:** Der Leerzustand des Angebotsnavigators enthält kein Bedienelement zum Zurücksetzen; Rückweg per Umschalt+Tab ins Suchfeld. Fachlich-redaktionell entscheiden, ob eine Rücksetzaktion ergänzt wird.
- **Umgebungshinweis:** In einem früheren Lauf ging der Fokus nach dem Skip-Link sporadisch verloren; der Fehler liess sich in zwei Wiederholungen nicht reproduzieren. Im echten Tastaturtest gezielt beobachten.
- **Ausstehend:** echter Tastaturdurchgang mit Hardware-Tastatur in Safari und Firefox; Screenreader-Läufe nach dem Testplan im Abschnitt «Barrierefreiheit und Test».
