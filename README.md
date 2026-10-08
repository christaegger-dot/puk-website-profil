Website-Profil der **Psychiatrischen Universitätsklinik Zürich (PUK)** für Websites und browserbasierte Informationsangebote – abgeleitet aus dem PUK Zürich Design System 1.10.1 (Arbeitsstand r4). Hausfarben Blau, Schwarz, Weiss; eine Schrift, Rubik; flach, eckig, typografisch. Ausgerichtet auf die psychoedukativen Websites der **Fachstelle Angehörigenarbeit**.

## Verbindlichkeit und Version

**Fachstellen-Profil 2026.10** (Stand 06.10.2026) auf Basis des PUK Zürich Design Systems 1.10.1, Arbeitsstand PUK Website Kit 1.10.1-r4. Vier Ebenen – bei Widerspruch gilt die obere:

| Ebene | Umfasst | Erkennbar an | Ändern darf |
| --- | --- | --- | --- |
| Kanonisch (PUK-CD 1.10.1) | Hausfarben, Rubik, Logo, Sperrzone, Signalfarben | keine Kennzeichnung nötig | nur die PUK-Kommunikation |
| Abgeleitet (Website Kit r4) | Website-Skala, Web-Tokens, Komponenten, Muster A–F, Anwendungsmuster, Starter | «abgeleitet», «r4» | im Profil, mit Begründung |
| Profilentscheid der Fachstelle | Absenderin, Zuständigkeit statt Krisenzugang, ein Schwarz, Buttons 3 px, Lesen und Bedienen, Diagramme im Web, Interaktionskonzept, visuelle Wissensvermittlung mit Mustern G–K, Prüfablauf | «Profilentscheid 06.10.2026» | die Fachstelle |
| Muster und Beispiele | Inhalte in Karten, Vorlagen und Starter | «Musterinhalt, fachlich freizugeben», «Platzhalter» | frei; nie ungeprüft veröffentlichen |

Änderungen stehen im Änderungsprotokoll am Ende.

## Geltungsbereich

- Nur für die **Fachstelle Angehörigenarbeit**. Für die Tagesklinik KJPP entsteht bei Bedarf ein eigenes Design-System (Entscheid 06.10.2026); Absenderin, Zielgruppe und Anrede dieses Profils gelten dort nicht.
- Nur für **Websites und Browser-Anwendungen**. Nicht für Büro-, Präsentations-, PDF- oder Druckmedien.
- Nur **deutschsprachig**: Die offiziellen englischen Logos fehlen. Keine englischen Seiten mit diesem Profil veröffentlichen, kein englisches Logo nachbauen oder ableiten.
- Ein abgeleitetes Arbeitsprofil, keine von der Kommunikationsabteilung formell freigegebene Webvorlage. Fachinhalte, Kontakte und Produktionsfreigaben immer projektbezogen prüfen lassen – **nie erfinden**.
- **Prüfung und Freigabe:** ein Ablauf für jede Website – Planen → W1 Fachliche Prüfung → W2 Gesamtkohärenz → S Sprach-Review → Visualisierungs-Check → Bedienung und Barrierefreiheit → W3 Code-Review (Abschnitt «Technische Qualität») → Produktionsgate `node tools/gate.mjs --production`. Abschnitt «Prüfung und Freigabe».

## Absenderin

- Jede Website und Browser-Anwendung nennt im Kopf jeder Seite sichtbar die Absenderin: **Fachstelle Angehörigenarbeit · Psychiatrische Universitätsklinik Zürich · angehoerigenarbeit@pukzh.ch** – die E-Mail-Adresse als `mailto:`-Link, nie versteckt.
- Im Psychoedukations-Starter steht sie in `site.config.json` › `sender` (`orgUnit`, `institution`, `email`, `status: "freigegeben"`) und wird beim Build in jede Seite geschrieben; das Gate blockiert, wenn Absenderin oder E-Mail fehlen oder versteckt sind. Nie von Hand in Seiten schreiben.
- Die Adresse ist der Kontaktweg der Absenderin, kein Krisen- oder Notfallweg (Abschnitt «Zuständigkeit statt Krisenzugang»).

## Inhalt und Sprache

- **Schweizer Rechtschreibung:** immer «ss», nie «ß» (Strasse, schliessen, Grösse). Anführungszeichen als Guillemets «…». `lang="de-CH"`.
- **Anrede:** pro Material festlegen (Sie oder du) und durchgehend halten; ohne anderen Entscheid gilt auf Websites **Sie**, direkt an die lesende Person: «Was brauchen Sie jetzt?» Die Klinik spricht nicht als «ich»; «wir» sparsam.
- **Verständlich und zusammenhängend:** jeder Absatz entwickelt einen Gedanken; Aussagen verbinden statt Stakkato; konkrete Verben; Fachbegriffe beim ersten Auftreten erklären. Abschnitt «Sprache und Ton».
- **Ton:** ruhig, sachlich, würdevoll, entlastend, zugewandt durch hilfreiche Information statt durch künstliche Wärme. Keine unterstellten Gefühle («Vielleicht erleben Sie …» statt «Sie fühlen sich …»), keine Häufung von «Sie müssen / sollten / dürfen», keine Therapieformeln. Keine Dramatisierung, keine Verniedlichung, keine falsche Sicherheit. Grenzen offen benennen: «Das Muster ist kein Symptomchecker und entscheidet nicht automatisch über die Dringlichkeit.»
- **Schreibweise:** Satzanfang gross, sonst normale Substantivgrossschreibung; kein Title Case. Eyebrows im Quelltext normal schreiben und per CSS in Versalien setzen (`web-eyebrow`): «Anwendungsmuster · Orientierung». Mittelpunkt « · » als Trenner.
- **Handlungen benennen:** «Termin anfragen», «Angebote ansehen», «Zum Formular», «Filter zurücksetzen», «Kontaktwege prüfen».
- **Gendergerecht:** Paarform ausgeschrieben – «Zuweisende Ärztinnen und Ärzte».
- **Freigabesprache:** «redaktionell bestätigt», «fachlich freigegeben» – nicht «verifiziert». Redaktionelle Metadaten sichtbar, aber gebündelt am Seitenende oder in der Fusszeile, nicht im Lesefluss: «Inhaltsverantwortung: …», «Prüfdatum: …», «**Freigabegrenze:** …». Konkrete Warnzeichen, Fristen und Voraussetzungen bleiben an ihrer Stelle.
- **Gesprächsbeispiele:** in Guillemets, beschriftet als anpassbare Anregung («So könnte es klingen»), in der Anrede der jeweiligen Beziehung – unter Angehörigen meist «du». Laut gelesen klingt es wie ein Mensch in dieser Situation, ohne Therapiesprache und ohne Zusagen über das tatsächliche Angebot hinaus.
- **Angehörige als Menschen mit eigenen Grenzen:** Texte schreiben Angehörigen keine Verantwortung für Behandlung, Kontrolle, Beruhigung oder Krisenvermeidung zu; Abstand, Pausen und eigene Beratung bleiben denkbar. Bestehende Sorge- und Schutzaufgaben werden klar benannt.
- **Ein Ziel, eine Aufbaulogik:** eine übergeordnete Zielsetzung und eine konsequent durchgehaltene Aufbaulogik, die die Navigation spiegelt; einheitliche Begriffe, Zahlen und Quellen; Quereinstieg verständlich; auf jeder Seite der Hinweis, dass die Website keine individuelle Abklärung, Beratung oder Behandlung ersetzt (Starter: `disclaimer`). Abschnitt «Gesamtkohärenz und Aufbau».
- **Fachliche Qualität und Haltung:** zentrale Aussagen belegt, Quellen mit Abrufdatum und Verwendungszweck, bei Rechtlichem amtliche Primärquellen und Schweizer Begriffe; Ursache, Risikofaktor und Zusammenhang unterscheiden; entlastend statt schuldzuweisend; personenzentriert. Abschnitt «Fachliche Qualität und Haltung».
- **Bedeutung schützen:** beim Überarbeiten keine neuen Wirkungsversprechen oder Prognosen («kann» wird nicht zu «wird»; Vorsicht mit «noch», «zunächst»); Quellen passen weiter genau zur Aussage; fachlich Fragwürdiges als «Prüfbedarf» markieren statt still ändern.
- **Keine Emoji**, keine Ausrufezeichen-Rhetorik, keine Marketing-Superlative.
- Links im Satz bleiben inline (`.puk-link--inline`); eigenständige Aktionen als `.puk-link--action` oder `Button`.

## Zuständigkeit statt Krisenzugang

Die Fachstelle Angehörigenarbeit bietet Beratung und Psychoedukation für Angehörige; **Krisenintervention gehört nicht zu ihrem Auftrag** (Profilentscheid 06.10.2026). Das ersetzt die Sicherheitsvarianten `direct` und `persistent-subdued` des Kits (`templates/website/profile.json` › `safetyAccess`).

- **Keine Krisennummern, kein Notfallblock** auf psychoedukativen Websites – auch nicht dort, wo ein Abschnitt Krisen behandelt. Keine `tel:`-Links, kein Notfallbanner, keine eigene Seite «Hilfe in der Krise», kein Notfallpunkt in der Navigation, `Alert` mit `tone="emergency"` wird nicht verwendet.
- **Zulässig, nicht vorgeschrieben:** ein einziger knapper **Zuständigkeitsverweis**, der ohne Nummern auf die zuständigen Stellen verweist, an fester, von jeder Seite aus erreichbarer Stelle – in der Fusszeile oder im Impressum (Starter: site-weit `site.config.json` › `responsibility`, in jeder Fusszeile; die Fusszeile gilt als eine Stelle). Zusätzliche Verweise auf einzelnen Seiten sind nicht zulässig. Kein Text weckt die Erwartung, die Fachstelle sei in Krisen zuständig. Behandelt die Website Selbstgefährdung, Gewalt, Zwang oder akute Krisen, wird er empfohlen. Er braucht keine emotionale Einleitung und wird vor der Veröffentlichung fachlich geprüft.
- **Standardwortlaut** (fachlich geprüft, Fachstelle Angehörigenarbeit PUK, 06.10.2026, neu gefasst 08.10.2026): «Die Fachstelle Angehörigenarbeit PUK berät Angehörige: angehoerigenarbeit@pukzh.ch. In akuten Krisen kann sie nicht weiterhelfen. Wenden Sie sich dann an den ärztlichen Notfalldienst oder eine Notfallstation, bei Gefahr an die Polizei.» Der Prüfvermerk steht nur in `site.config.json` und erscheint nicht auf der Website. Im Starter in `site.config.json` › `responsibility` hinterlegt.
- **Inhalte zum Umgang mit Krisen** (Frühwarnzeichen, Krisenplan, Gespräche nach einer Krise) sind Psychoedukation und zulässig.
- Das Gate des Starters blockiert Telefonnummern, `tel:`-Links, Notfallblöcke und die gesperrten Varianten; mögliche Kurznummern (143, 144 …) meldet es zur Prüfung.
- Anwendungen diagnostizieren nicht, berechnen keine Scores, triagieren nicht automatisch. Kritische Information nie nur hinter Filter, Dialog oder Akkordeon. Pro Zustand genau ein primärer nächster Schritt.
- Nicht anwendbar auf Materialien, deren Zweck die Krisenorientierung ist; solche Materialien gehören nicht in dieses Profil.

## Farbe

- **Hausfarben:** `puk-blue-100` (#3C64FF), `puk-black-100` (#222222), `puk-white`. Rasterstufen 75/50/25 je Farbe; `puk-blue-125` nur für Hover/Press auf Blau und besuchte Links.
- **Text:** `text-default` auf `surface-page`, `surface-card`, `surface-sunken`, `ui-field`, `status-info-bg` und Gelb. Sekundärtext `text-muted`. `text-large-only` (Schwarz 50) nur ab 24 px oder für Deaktiviertes – nie Lauftext. Blau 75, Gelb und Signalrot sind keine Textfarben.
- **Ein blaues Feld pro Komposition:** Das volle Blau-Band (`surface-brand`, `.puk-web-band`, Text `text-on-dark`) ist die reguläre grosse Markenfläche. Schwarz auf Weiss ist Standard; inverse Flächen (`surface-inverse`) nur ausnahmsweise.
- **Signalfarben** punktuell: `puk-yellow` (Text darauf `puk-black-100`) und `puk-red`. Signalrot trägt nie Text (4,00:1) – Fehlertext ist `text-danger` (#9E2814, 7,59:1), textragende Gefahrflächen `status-danger-strong-bg`. Blau, Rot und Gelb nicht gemeinsam einsetzen.
- **Bildschirm-Feinwerte:** `ui-field` (Felder, Platzhalter), `ui-wash` (Hover, versenkte Fläche), `ui-hairline` (Linien), `ui-danger-wash`, `surface-structure` (Diagrammgrund).
- **Ein Schwarz:** Text auf Websites ist immer `text-default` (Hausschwarz #222222), auch in der Website-Hülle. Die Messwerte des bestehenden Webauftritts `puk-web-text` (#000000) und `puk-web-field-text` (#675E58) werden nicht verwendet (Profilentscheid 06.10.2026).
- In Komponenten und Templates immer **semantische Tokens** (`text-*`, `surface-*`, `border-*`, `action-*`, `status-*`), nie Primitiven oder Hexwerte in HTML/JS.
- Veraltet (Entfernung frühestens 31.03.2027): `text-subtle` und die alten Schrift-Kurzformen `--text-body` usw. Neue Arbeit nutzt `text-large-only` und `--type-*`.

### Theme «Hoher Kontrast»

- **Profilentscheid 06.10.2026:** optionales Theme, nicht Standard. Es ist eine Ableitung des Profils, keine von der PUK-Kommunikation freigegebene CI-Variante, und bleibt so gekennzeichnet. Keine Umfärbung der Marke: mit `<html data-theme="kontrast">` aktivieren (Tokens und `components/bundle.css` schalten beide um). Das Theme «Hell» bleibt die Normalform.
- Es nutzt dunklere Schattierungen derselben Hausfarben: `puk-blue-100` #0028C2 (10,08:1 mit Weiss), `puk-blue-125` #001F99, `puk-black-75` #4F4F4F, `puk-black-50` #666666, `puk-red-text` #8A2211. Damit erreicht jede Textfarbe mindestens 7:1 auf ihren Gründen (`surface-page`, `surface-sunken`, `ui-field`, `status-danger-soft-bg`), Grosstext mindestens 4,5:1.
- Flächen und Bedienelemente werden durch Linien getrennt, die mindestens 3:1 erreichen: `ui-hairline` #8A8A8A, `border-default` #767676; Bildplatzhalter-Kontur `puk-blue-50` = #3C64FF.
- Für Websites mit besonders schutzbedürftiger Leserschaft als Umschalter anbieten oder per `prefers-contrast: more` setzen; das Logo bleibt die Originaldatei.

## Typografie

- **Nur Rubik**, lokal ausgeliefert (`fonts/`, WOFF2). Light 300 für Display, Leads und Web-Fliesstext; Regular 400 für Titel und UI; Medium 500 nur für UI-Betonung. **Nie fett.**
- Laufweite nicht verändern – Ausnahmen: Web-Headlines (`web-h1` −0.02em, `web-h2` −0.015em) und Eyebrow (`web-eyebrow` +0.08em).
- **Website-Skala** (gemessen am PUK-Webauftritt): `web-body` 21 px/1.3 Light, `web-lead` 26.25 px, `web-h1` 114 px, `web-h2` 57 px, `web-h3` 40 px. Auf neuen Websites H1–H3 immer fluid mit `web-size-h1-fluid`, `web-size-h2-fluid`, `web-size-h3-fluid`.
- **UI-Skala** für Komponenten: `type-display-1` 64 · `type-display-2` 48 · `type-title-1` 36 · `type-title-2` 28 · `type-title-3` 24 · `type-lead` 20 · `type-body` 17 · `type-body-sm` 15 · `type-caption` 13 px. Im CSS über die Kurzformen `font: var(--type-body)`.
- **Lesen in Seitenschrift, Bedienen in UI-Grösse:** Was man liest, steht auf Websites in `web-body` (21 px Light, unter 760 px 19 px) – auch Lesetext in `Card`, `Alert`, `Accordion` und `List`; das geschieht innerhalb von `.puk-web-page` automatisch. Was man bedient (Buttons, Felder, Auswahl, Tabs), bleibt bei `type-body` (17 px). Beispiel: Karte «Lesen und Bedienen».
- Satzschreibung, keine Versaltitel. Lauftext 45–75 ch (`web-content-measure` 68ch).

## Raum und Layout

- **4-px-Raster:** `space-1` … `space-24`. Karteninnenabstand `space-6`, Stapel `space-3`/`stack-default`, Abschnittsabstand `space-16` (`gutter-section`). Keine freien Pixelwerte.
- **Website:** Container max. `web-container-max` (1200 px), Seitenrand `web-gutter-inline`, Abschnittsabstand `web-section-space`, Touch-Ziel `web-touch-target` (44 px) für Buttons, Navigation und Aktionslinks.
- Kopf nicht fixiert; Skip-Link «Zum Hauptinhalt»; genau ein `main` und ein `h1`. Kartenraster `auto-fit minmax(260px,1fr)` als Liste ausgezeichnet (`.puk-web-card-list`). Unter 760 px stapelt der Kopf, die Navigation wird zum Raster mit Trennlinien.
- Prüfen bei 320, 360, 768 und 1440 px, mit 200 % Textgrösse und per Tastatur.

## Flächen, Linien, Ecken

- **Flach:** Seiten- und UI-Flächen ohne Verläufe, Texturen oder Muster. Weiss ist die normale Seitenfläche.
- **Ecken eckig:** Karten, Bänder, Bilder `radius-none`. Kleine Controls `radius-xs`–`radius-md`, alle Buttons `radius-sm` (3 px); die Messwerte `web-radius-btn*` des Bestandsauftritts werden nicht verwendet. `radius-pill` nur für den Switch – die einzige Pillenform; Tags und Chips bleiben bei `radius-sm`.
- **Linien:** Haarlinie 1 px `border-hairline` für Header-/Footer-Trenner und Karten; Felder 1 px `border-default`; starke Linie 2 px `border-strong` für Aktivmarkierungen.
- **Karten:** weiss, Haarlinie, eckig, **kein Schatten**. Verlinkte Karte: Rahmen wird im Hover PUK-Blau. Varianten sunken, brand, inverse.
- **Schatten:** grundsätzlich keine. `shadow-overlay` und `scrim` nur für wirklich schwebende Ebenen (Dialog, Toast, Menü). Keine Transparenz-, Glow- oder Blur-Effekte.

## Zustände und Bewegung

- **Hover:** Farbwechsel – keine Opazität, kein Skalieren. Primär-Button Schwarz → Blau (`action-primary-bg-hover`); Akzent Blau → `puk-blue-125`; Links Blau → Schwarz plus Unterstreichung; Gefahr wird dunkler, nie heller.
- **Aktiv:** kein Schrumpfen. Aktiver Nav-Punkt: Blau + 2-px-Unterstreichung + `aria-current="page"` (nie Farbe allein). Chips mit `aria-pressed`.
- **Fokus:** ein System – `focus-ring` (2 px Weiss + 2 px PUK-Blau) für Buttons, Links, Tabs, Checkbox, Switch; Felder färben stattdessen ihren Rahmen blau mit 1-px-Innenring (`[data-puk-field]`). Fokus nie entfernen.
- **Bewegung:** knapp und funktional – `dur-fast` 120 ms für Farbe, `dur-base` 200 ms, `dur-slow` 400 ms; Easing `ease-standard`. Kein Bounce, kein Autoplay, nichts bewegt sich von selbst. `prefers-reduced-motion` immer respektieren.
- **Bedienziele:** ≥ 44 px; auf Touch-Geräten (`pointer: coarse`) heben Button, IconButton und Tag ihre Höhe automatisch an. Nichts nur per Hover.
- **Interaktionskonzept:** Zustände, Bewegung, Rückmeldungen, Maus/Tastatur/Touch, Desktop/Mobil und je Komponente Zweck, Einsatz, Verzicht mit einfacherer Alternative – Abschnitt «Interaktionskonzept», Karte «Interaktionszustände». Grundregel: sichtbar vor versteckt, die einfachste Form gewinnt.

## Visuelle Wissensvermittlung und Bildwelt

- **Leitprinzip:** Zentrale Konzepte, Modelle und Zusammenhänge werden vorrangig durch Darstellungen erklärt, deren Anordnung, Verbindungen, Formen und Beschriftungen selbst Bedeutung tragen – nicht durch lange Fliesstexte und nicht durch Kartenraster mit Icons. Prüffrage: «Was versteht die Zielgruppe dadurch besser als durch einen kurzen Text allein?» Drei Erklärungsebenen: Kernaussage · Darstellung mit kurzem Erklärtext · aufklappbare Vertiefung.
- **Auswahl nach Vermittlungsziel** (Entstehung, Zusammenwirken, Unterschied, Spannung, Beziehung, Abstufung, Verborgenes, Ablauf, Handlung, Erleben) aus den Mustern **A–F** (Figur, Kreislauf, Prozesspfad, Illustration, Vergleich, Entscheidungsweg) und **G–K** (Modell in Schritten, Spannungsfeld, Beziehungskarte, Kontinuum, Schichtenmodell). Passen mehrere: Metapher vor Strukturdiagramm vor Inhaltscontainer. Live: Gruppe «Visualisierung»; Kopiervorlagen `templates/website/longform/visualisierungsmuster.html` und `erklaermuster.html`.
- **Bildsprache:** erwachsenengerecht, warm, professionell; organische Formen und Alltagsmetaphern erwünscht, nie verniedlichend, kein Schulbuch, keine Gamification. Illustrationen dürfen eine eigene Handschrift haben, nie als Seitenhintergrund oder Buttonstil.
- **Keine Fotos als Normalfall** (Profilentscheid 06.10.2026, kein Bildpool): Die visuelle Ebene tragen Erklärmuster und eigene Illustrationen. Ein Foto nur im Einzelfall, wenn es inhaltlich nötig ist – mit nachweisbarer Quelle, Einwilligung, Alternativtext und Bildnachweis; keine Stockfotografie, keine generierten Personenbilder.
- **Umsetzung im Web:** Beschriftungen als HTML-Text in Rubik, Linien 2 px `puk-blue-100`, höchstens ein gefülltes blaues Feld, SVG-Farben nur über Tokens, schmal als gegliederte Liste, nichts bewegt sich von selbst. Vor dem Bau ein Visualisierungsplan. Die Sachzeichnungs-Regel des Vollsystems (Arial, 1,5 px) gilt nur für Word und PowerPoint. Abschnitt «Visualisierung umsetzen».

## Logo

- Nur die Originaldateien aus der Gruppe **Logos** verwenden – nie nachzeichnen, verzerren, umfärben, beschneiden. Nur über die Breite skalieren (`aspect-ratio` statt `height`).
- **Animiertes Logo** (GIF) ist auf Websites die Normalform; bei `prefers-reduced-motion` das statische (`data-motion="logo-animiert"` / `"logo-statisch"`, Umschaltung in `components/bundle.css`). Auf Websites die **Web-Fassungen** (`…_web.gif`, 0,48 MB) verwenden, nicht die 540-p-Originale (4,8 MB). Die Datei wiederholt einen 10-s-Zyklus endlos; das kollidiert mit WCAG 2.2.2 (Offene Punkte).
- **Positiv** (Schwarz auf Weiss) ist Standard, oben links im Kopf, Breite `web-logo-width`. **Negativ** nur auf vollflächigem Blau oder Schwarz.
- Sperrzone rundum `logo-clearspace` (14 % der Logobreite).
- **Logo-Symbol allein** nur, wo die PUK klar als Absenderin erkennbar ist (Favicon, Social-Media-Icon) – nie als Ersatz für das Logo im Seitenkopf. Wortmarke nie ohne Symbol.

## Icons

- Lokales Subset von **Lucide 0.446.0** (ISC-Lizenz, `assets/Icons/LICENSE.txt`): 24 × 24, Strich 2 px, runde Enden, `currentColor`. 13 Glyphen: arrow-right, calendar, check, circle-alert, circle, download, info, menu, phone, printer, search, triangle-alert, x.
- Einsetzen über `Icon` bzw. die `icon`-Prop von `Button`/`IconButton`. Icons stützen Text, ersetzen ihn nicht; `IconButton` braucht immer ein `label`.
- Keine Icon-Fonts, keine PNG-Icons, **keine Emoji**, keine Unicode-Symbole als Icons (Ausnahmen: Mittelpunkt « · » und «#» vor Themen-Chips).
- Fehlt ein Glyph: aus Lucide mit gleicher Strichstärke ergänzen und lokal ausliefern – kein CDN in Produktion.

## Komponenten

26 React-Komponenten unter `window.PUKWeb`: **Basis** Button, IconButton, Icon · **Formulare** Field, Input, Textarea, Select, Checkbox, Radio, RadioGroup, Switch · **Inhalt** Card, Badge, Tag, List, Table, Accordion · **Feedback** Alert, Toast, Tooltip, Dialog · **Navigation** Link, Tabs, Breadcrumb · **Interaktion** DisclosureMenu (Dropdown-Navigation), Carousel (nur ausnahmsweise).

- Stylesheet `components/bundle.css` (die vollständige Token- und Hüllen-CSS-Kette inkl. `.puk-web-*`, `.puk-longform*`, Fokus- und Formular-Basis) nach den Tokens laden, dann React 18, dann `components/bundle.js`.
- `Alert` mit `tone="emergency"` wird auf Websites der Fachstelle nicht verwendet (kein Notfallblock). `Dialog` nie als einziger Ort kritischer Information.
- **Statische Websites (Starter, Eleventy, Astro):** Akkordeon, Reiter, Dropdown-Menü, Dialog und Button als HTML-Markup mit `components/bundle.css` und `components/interaktion.js` – ohne Abhängigkeiten, ohne Inline-Skripte, ohne Skript bleibt alles sichtbar. Markup: `templates/website/interaktion/`, Karte «Interaktion ohne React». `bundle.css` enthält auch die Druckregeln.
- Die Grundlagen-Seiten (Gruppen «Grundlagen · …») zeigen Farben, Typografie, Abstände, Flächen, Bewegung, Fokus, Logo und Icons als Referenzkarten; sie sind keine Komponenten im Bundle.
- Website-Hülle als Klassen: `.puk-web-page`, `.puk-web-header`, `.puk-web-nav`, `.puk-web-hero`, `.puk-web-h1`, `.puk-web-lead`, `.puk-web-card-list`, `.puk-web-band`, `.puk-web-footer`.

## Vorlagen und Referenzdateien

- `templates/website/` – Website-Hülle `Website.dc.html`, normativer Vertrag `profile.json`, vier Anwendungsmuster (`applications/`: Situationsnavigator, Kontaktwegweiser, Gesprächshilfe, Angebotsnavigator), Langform-Referenzen (`longform/`, inkl. `visualisierungsmuster.html` + `visual-patterns.css` und `erklaermuster.html` + `erklaermuster.css`), Schemas und Datenschutz-/Screenreader-Beispiele. Einstieg: `templates/website/START.md`.
- `templates/website/psychoeducation-site-starter/` – **Startpunkt jeder mehrseitigen psychoedukativen Website**: Seitenvertrag `site.config.json` → `node tools/build.mjs` → `node tools/gate.mjs --production`. Navigation, `lang`, Titel, Meta, Favicon, Skip-Link, Absenderin und Zuständigkeitsverweis entstehen aus dem Vertrag, nie von Hand.
- `ui_kits/website/` – klickbare Rekonstruktion der Referenzansichten des Original-Kits mit `qa.html` (zeigt auch Kit-Varianten, die für die Fachstelle nicht gelten).
- `tokens/*.css` – die Quell-CSS unverändert.
- **Projektpaket** `puk-website-profil-2026.10.zip` (separat ausgeliefert, ZIP-Dateien kann das Design-System nicht speichern): lauffähige Fassung mit aufgelösten Pfaden (`styles.css`, Schriften, Logos, React-Laufzeit für das UI-Kit), Leitlinien, React-Quellen mit Build-Skript und Anleitung `START-HIER.md`. Im Design-System selbst verweisen Vorlagen, Starter und UI-Kit auf diese Kit-Pfade und laufen erst im Paket.
- **Veröffentlichen:** `node tools/export.mjs <zielordner> --production` im Starter schreibt eine eigenständige Website mit `css/site.css`, lokalen Schriften, `_headers` (Sicherheits-Header) und `sitemap.xml`.

## Offene Punkte

Entscheide der Fachstelle:

- **Animiertes Logo:** Die Datei wiederholt einen 10-s-Zyklus endlos; WCAG 2.2.2 verlangt für Bewegung über 5 s eine Möglichkeit zum Anhalten. Optionen: statisches Logo als Normalform im Kopf, Animation nur einmal oder mit Stopp-Schaltfläche – Entscheid zusammen mit der PUK-Kommunikation. Das Token `dur-logo` (1,2 s) entspricht nicht der Datei.
- **Erster Durchlauf mit echtem Inhalt:** Material wird in einem späteren Schritt festgelegt.

Arbeit am System:

- Projektpaket nach Änderungen am Design-System neu erzeugen (Version im Dateinamen).
- Karussell und Tooltip bewusst ohne HTML-Fassung; bei Bedarf ergänzen.

## Änderungsprotokoll

- **08.10.2026 · Erster Probelauf (PTBS):** Zuständigkeitsverweis neu gefasst: aus Sicht der Lesenden und mit einem Wegweiser für akute Krisen, ohne Nummern (Entscheid Fachstelle). Der bisherige Wortlaut nannte nur, wofür die Fachstelle nicht zuständig ist; die Regel verlangt einen Verweis auf die zuständigen Stellen. Der Prüfvermerk erscheint nicht mehr auf der Website; sichtbar bleibt nur die Warnung bei einem ungeprüften Verweis.
- **06.10.2026 · Entscheide eingearbeitet:** E-Mail der Absenderin korrigiert (`angehoerigenarbeit@pukzh.ch`, wie im Factsheet der Fachstelle); Zuständigkeitsverweis festgelegt und als geprüft dokumentiert; Beispielinhalte der Erklärmuster und Interaktionsbeispiele fachlich freigegeben; Geltung nur für die Fachstelle (KJPP eigenes System); kein Bildpool, Fotos nur im Einzelfall.
- **06.10.2026 · Umsetzung offener Punkte:** Abschnitt «Technische Qualität» aus dem Code-Review W3 (WCAG 2.2 AA, Datenschutz nach DSG, Sicherheits-Header, Druck); HTML-Fassungen von Akkordeon, Reitern, Dropdown-Menü, Dialog und Button mit `components/interaktion.js`; Druckregeln in `bundle.css`; Starter Build r4-2 mit Mustern G–K, Pflichtfeld «understood», Interaktionsskript, Open Graph, Sitemap, `_headers`, Export und neuen Gate-Prüfungen (Selbsttest 39/39); Beziehungskarte und Kontinuum ohne `style`-Attribute; Web-Fassungen des animierten Logos (0,48 statt 4,8 MB); Druckfarben aus dem Web-Profil genommen; Theme «Hoher Kontrast» als optionale Ableitung festgehalten; Projektpaket.
- **06.10.2026 · Konsolidierung:** 24 auf 19 Abschnitte (nach der Umsetzung der offenen Punkte 21). Visualisierung von fünf auf zwei Abschnitte («Visuelle Wissensvermittlung», «Visualisierung umsetzen»); Barrierefreiheit und Screenreader-Testplan zusammengeführt; ein Prüf- und Freigabeablauf statt verstreuter Reihenfolgen; Inhaltsmuster zu den Anwendungsmustern; Verbindlichkeitsebenen; widersprüchliche Kit-Reste zum Krisenzugang bereinigt (START, Website-Vorlage, Alert, Akkordeon, Testplan); selbstlaufende Kreislauf-Animation entfernt; doppelte Bildwelt-Karte zusammengeführt; Komponentenbeschreibungen auf Deutsch.
- **06.10.2026 · Visuelle Wissensvermittlung:** Leitprinzip, Erklärmuster G–K, Karte «Visuelle Wissensvermittlung».
- **06.10.2026 · Interaktionskonzept:** Zustände, Bewegung, Rückmeldungen, Regeln je Komponente; Dropdown-Menü und Karussell; Touch-Ziele 44 px; Tooltip, Dialog verbessert.
- **06.10.2026 · Inhaltliche Leitlinien:** Fachliche Qualität und Haltung (W1), Gesamtkohärenz und Aufbau (W2), Sprache und Ton (S); Zuständigkeit statt Krisenzugang; Absenderin Fachstelle Angehörigenarbeit.
- **06.10.2026 · Aufbau:** Website-Profil aus PUK Website Kit 1.10.1-r4 und Vollsystem 1.10.1 (Visualisierung); Profilentscheide ein Schwarz, Buttons 3 px, Lesen in Seitenschrift.

Abschnitte: Prüfung und Freigabe · Fachliche Qualität und Haltung · Technische Qualität · Gesamtkohärenz und Aufbau · Sprache und Ton · Visuelle Wissensvermittlung · Marke und Logo · Farben und Kontrast · Typografie und Flächen · Barrierefreiheit und Test · Anwendungs- und Inhaltsmuster · Langform und Psychoedukation · Visualisierung umsetzen · Interaktionskonzept.
