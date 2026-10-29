Website-Profil der **Psychiatrischen Universitätsklinik Zürich (PUK)** für Websites und browserbasierte Informationsangebote – abgeleitet aus dem PUK Zürich Design System 1.10.1 (Arbeitsstand r4). Hausfarben Blau, Schwarz, Weiss; eine Schrift, Rubik; flach, eckig, typografisch. Ausgerichtet auf die psychoedukativen Websites der **Fachstelle Angehörigenarbeit**.

## Verbindlichkeit und Version

<!-- profil:stand -->
**Fachstellen-Profil 2026.10.10** · Stand 29.10.2026 · offene Projektpendenzen: 0. Basis: PUK Zürich Design System 1.10.1 und PUK Website Kit 1.10.1-r4. Vier Ebenen – bei Widerspruch gilt die obere:
<!-- /profil:stand -->

| Ebene | Umfasst | Erkennbar an | Ändern darf |
| --- | --- | --- | --- |
| Kanonisch (PUK-CD 1.10.1) | Hausfarben, Rubik, Logo, Sperrzone, Signalfarben | keine Kennzeichnung nötig | nur die PUK-Kommunikation |
| Abgeleitet (Website Kit r4) | Website-Skala, Web-Tokens, Komponenten, Muster A–F, Anwendungsmuster, Starter | «abgeleitet», «r4» | im Profil, mit Begründung |
| Profilentscheid der Fachstelle | Absenderin, themenbezogene Kontaktauswahl, ein Schwarz, Buttons 3 px, Lesen und Bedienen, Diagramme im Web, Interaktionskonzept, visuelle Wissensvermittlung mit Mustern G–K, Prüfablauf, Website-Titel in Medium, getönte Fläche, Nachtblau und Titelbild der Startseite | «Profilentscheid 06.10.2026», «Profilentscheid 22.10.2026», «Profilentscheid 29.10.2026» | die Fachstelle |
| Muster und Beispiele | Inhalte in Karten, Vorlagen und Starter | «Musterinhalt, fachlich freizugeben», «Platzhalter» | frei; nie ungeprüft veröffentlichen |

**Verbindlich ist dieses GitHub-Repository.** Frühere Artefakte, Prüfprotokolle, Website-Kopien und das Paket 2026.10.2 sind [abgeschlossene Historie](https://github.com/christaegger-dot/puk-website-profil/blob/main/archiv/README.md). Kein Synchronisierungsauftrag an Claude oder andere Plattformen. Der [Prüfbericht](PRUEFBERICHT.md) und die [Abschlussentscheide](ABSCHLUSSENTSCHEIDE.md) dokumentieren diesen Stand. Das Repository ist weiterhin öffentlich; es wird keine Website veröffentlicht.

## Geltungsbereich

- Nur für die **Fachstelle Angehörigenarbeit**. Für die Tagesklinik KJPP entsteht bei Bedarf ein eigenes Design-System (Entscheid 06.10.2026); Absenderin, Zielgruppe und Anrede dieses Profils gelten dort nicht.
- Nur für **Websites und Browser-Anwendungen**. Nicht für Büro-, Präsentations-, PDF- oder Druckmedien.
- Nur **deutschsprachig**: Die offiziellen englischen Logos fehlen. Keine englischen Seiten mit diesem Profil veröffentlichen, kein englisches Logo nachbauen oder ableiten.
- Ein abgeleitetes Arbeitsprofil, keine von der Kommunikationsabteilung formell freigegebene Webvorlage. Fachinhalte, Kontakte und Produktionsfreigaben immer projektbezogen prüfen lassen – **nie erfinden**.
- **Prüfung und Freigabe:** ein Ablauf für jede Website – Planen → W1 Fachliche Prüfung → W2 Gesamtkohärenz → S Sprach-Review → Visualisierungs-Check → Bedienung und Barrierefreiheit → W3 Code-Review (Abschnitt «Technische Qualität») → Pre-Release-Audits R1 Profil-Audit und R2 Laienverständlichkeit → R3 Freigabe-Audit («Go») → Produktionsgate `node tools/gate.mjs --production`. Bauen und Prüfen sind getrennt: Selbstprüfung nach jedem Bau, Prüfstufen in einer eigenen Sitzung, Ergebnisse mit Beleg im Prüfbericht `PRUEFBERICHT.md`; kein Merge und keine Veröffentlichung ohne Prüfbericht. Abschnitt «Prüfung und Freigabe».

## Absenderin

- Jede Website und Browser-Anwendung nennt im Kopf jeder Seite sichtbar die Absenderin: **Fachstelle Angehörigenarbeit · Psychiatrische Universitätsklinik Zürich · angehoerigenarbeit@pukzh.ch** – die E-Mail-Adresse als `mailto:`-Link, nie versteckt.
- Im Psychoedukations-Starter steht sie in `site.config.json` › `sender` (`orgUnit`, `institution`, `email`, `status: "freigegeben"`) und wird beim Build in jede Seite geschrieben; das Gate blockiert, wenn Absenderin oder E-Mail fehlen oder versteckt sind. Nie von Hand in Seiten schreiben.
- Weitere hilfreiche Telefonnummern und `tel:`-Links sind erlaubt; Nummern, Zuständigkeit und Erreichbarkeit vor der Verwendung inhaltlich prüfen.

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

## Telefonnummern und Kriseninformationen

- Weitere hilfreiche Telefonnummern und `tel:`-Links sind ausdrücklich erlaubt. Keine technische Beschränkung auf die Fachstellennummer.
- Notfall- und Krisenkontakte werden nicht automatisch ergänzt oder als Standardblock hervorgehoben. Christa entscheidet je Thema, Website und Seite, ob und wo sie hilfreich sind. Eine Diagnose allein löst keine Krisenrubrik aus.
- Die Standardvorlage hat keinen Zuständigkeits- oder Krisentext in der Fusszeile. Es gibt keinen verpflichtenden Satz zur Abgrenzung des Fachstellenangebots. `responsibility` und `responsibility.inline` sind optionale, ausdrücklich konfigurierte Texte; deren dokumentierte Inhaltsprüfung bleibt erforderlich, wenn sie verwendet werden.
- Bewusst gewählte Kriseninformationen können im passenden Inhaltsabschnitt, einem `Alert` oder einer Grafik stehen. Bedeutung und Hervorhebung richten sich nach der Leserfrage. Wichtige Information nicht ausschliesslich in Dialog, Filter oder Akkordeon verstecken.
- Das Gate sperrt keine Telefonnummern, Telefonlinks oder bewusst gesetzten Krisenblöcke und erzeugt keine pauschalen Kurznummern-Warnungen. Die fachliche Auswahl bleibt redaktionell; eine bestandene technische Prüfung bescheinigt keine inhaltliche Richtigkeit.
- Anwendungen diagnostizieren und triagieren nicht automatisch. Psychoedukative Hinweise zu Frühwarnzeichen oder Krisenplänen sind je nach Thema möglich und kein Pflichtbestandteil aller Seiten.

## Farbe

- **Hausfarben:** `puk-blue-100` (#3C64FF), `puk-black-100` (#222222), `puk-white`. Rasterstufen 75/50/25 je Farbe; `puk-blue-125` nur für Hover/Press auf Blau und besuchte Links.
- **Text:** `text-default` auf `surface-page`, `surface-card`, `surface-sunken`, `surface-tint`, `ui-field`, `status-info-bg` und Gelb. Sekundärtext `text-muted`. `text-large-only` (Schwarz 50) nur ab 24 px oder für Deaktiviertes – nie Lauftext. Blau 75, Gelb und Signalrot sind keine Textfarben.
- **Ein blaues Feld pro Komposition:** Das volle Blau-Band (`surface-brand`, `.puk-web-band`, Text `text-on-dark`) ist die reguläre grosse Markenfläche. Schwarz auf Weiss ist Standard; inverse Flächen (`surface-inverse`) nur ausnahmsweise. Mehrere blaue Felder nebeneinander nur im Titelbild der Startseite (unten).
- **Nachtblau und Titelbild** (Profilentscheid 29.10.2026, [ENTSCHEIDE-PROFIL-2026-10-10.md](ENTSCHEIDE-PROFIL-2026-10-10.md)): `puk-blue-night` (#182866) als `surface-night` ist nur Fläche, etwa ein ruhiges dunkles Band (`.puk-web-band` mit `data-puk-surface="night"`). Text darauf Weiss (13,69:1) oder Blau 25 (10,45:1), Links weiss und unterstrichen, Fokusring Nachtblau innen und Weiss aussen; im Theme «Hoher Kontrast» unverändert. Nachtblau zählt wie `surface-inverse` nicht als das eine blaue Feld. Ein Titelbild im Einstieg der Startseite ist zulässig, wenn es rein dekorativ und für Screenreader verborgen ist, keine Bedeutung trägt, kein Rot zeigt und nur einmal je Website steht; es darf Schattierungen von PUK-Blau nebeneinander und Gelb zeigen und gilt als das eine blaue Feld.
- **Signalfarben** punktuell: `puk-yellow` (Text darauf `puk-black-100`) und `puk-red`. Signalrot trägt nie Text (4,00:1) – Fehlertext ist `text-danger` (#9E2814, 7,59:1), textragende Gefahrflächen `status-danger-strong-bg`. Blau, Rot und Gelb nicht gemeinsam einsetzen.
- **Bildschirm-Feinwerte:** `ui-tint` (getönte Fläche, Blau rund 5 %), `ui-field` (Felder, Platzhalter), `ui-wash` (Hover, versenkte Fläche), `ui-hairline` (Linien), `ui-danger-wash`, `surface-structure` (Diagrammgrund).
- **Getönte Flächen und Links** (Profilentscheid 22.10.2026, [ENTSCHEIDE-PROFIL-2026-10-8.md](ENTSCHEIDE-PROFIL-2026-10-8.md)): `surface-tint` (#F5F7FF) für Einstieg, Einstiegskarten, Kästen, verwandte Themen und Fusszeile; Weiss bleibt die Seitenfläche. Auf jeder Fläche ausser Weiss steht kein Text unter 24 px in `puk-blue-100` (dort 3,59–4,40:1). Links und Akzenttext stehen dort in `text-link-on-tint` (`puk-blue-125`, 4,86–5,95:1). Die Profilflächen setzen das selbst; eigene Flächen erhalten es mit `data-puk-surface` (`data-puk-surface="tint"` setzt zusätzlich die Fläche). Besuchte und unbesuchte Links haben dort dieselbe Farbe; die Unterstreichung bleibt. Die Auflage gilt auch für Hover-Zustände auf der grauen Fläche `ui-wash` (Ghost- und Sekundär-Button, Karussell, Disclosure, Dialog-Schliessen, `.puk-vis-btn`: Text in `text-link-on-tint`) und für Links im Notfall-Alert (Weiss); Nachbesserung 23.10.2026, [ENTSCHEIDE-PROFIL-2026-10-9.md](ENTSCHEIDE-PROFIL-2026-10-9.md).
- **Ein Schwarz:** Text auf Websites ist immer `text-default` (Hausschwarz #222222), auch in der Website-Hülle. Die Messwerte des bestehenden Webauftritts `puk-web-text` (#000000) und `puk-web-field-text` (#675E58) werden nicht verwendet (Profilentscheid 06.10.2026).
- In Komponenten und Templates immer **semantische Tokens** (`text-*`, `surface-*`, `border-*`, `action-*`, `status-*`), nie Primitiven oder Hexwerte in HTML/JS.
- Historische Kompatibilitätsaliase `text-subtle` und die alten Schrift-Kurzformen bleiben für den vorhandenen Bestand erhalten; es gibt keinen Entfernungsauftrag. Neue Arbeit nutzt `text-large-only` und `--type-*`.

### Theme «Hoher Kontrast»

- **Profilentscheid 06.10.2026:** optionales Theme, nicht Standard. Es ist eine Ableitung des Profils, keine von der PUK-Kommunikation freigegebene CI-Variante, und bleibt so gekennzeichnet. Keine Umfärbung der Marke: mit `<html data-theme="kontrast">` aktivieren (Tokens und `components/bundle.css` schalten beide um). Das Theme «Hell» bleibt die Normalform.
- Es nutzt dunklere Schattierungen derselben Hausfarben: `puk-blue-100` #0028C2 (10,08:1 mit Weiss), `puk-blue-125` #001F99, `puk-black-75` #4F4F4F, `puk-black-50` #666666, `puk-red-text` #8A2211. Damit erreicht jede Textfarbe mindestens 7:1 auf ihren Gründen (`surface-page`, `surface-sunken`, `ui-field`, `status-danger-soft-bg`), Grosstext mindestens 4,5:1.
- Flächen und Bedienelemente werden durch Linien getrennt, die mindestens 3:1 erreichen: `ui-hairline` #8A8A8A, `border-default` #767676; Bildplatzhalter-Kontur `puk-blue-50` = #3C64FF.
- Für Websites mit besonders schutzbedürftiger Leserschaft als Umschalter anbieten oder per `prefers-contrast: more` setzen; das Logo bleibt die Originaldatei.

## Typografie

- **Nur Rubik**, lokal ausgeliefert (`fonts/`, WOFF2). Light 300 für Display, Leads und Web-Fliesstext; Regular 400 für Titel und UI; Medium 500 für UI-Betonung und für die Website-Titel `.puk-web-h1` und `.puk-web-h2` (`web-fw-title`, Profilentscheid 22.10.2026). Diese Titel weichen gekennzeichnet vom CD Manual ab, das Light und Regular für Text nennt; sie sind keine von der PUK-Kommunikation freigegebene CI-Variante. H3 bleibt Regular. **Nie fett.** Bei Standardschrift wird `.puk-web-h1` nie getrennt; ist die Titelfläche schmaler als 12 em ihrer Schrift (320–375 px bei 200 % Schrift), trennt sie lange Wörter nach Silben. Lange Titelwörter tragen weiche Trennstellen `&shy;` (Nachbesserung 23.10.2026, [ENTSCHEIDE-PROFIL-2026-10-9.md](ENTSCHEIDE-PROFIL-2026-10-9.md)).
- Laufweite nicht verändern – Ausnahmen: Web-H2 −0.015em und Eyebrow (`web-eyebrow` +0.08em). Neue H1 stehen mit natürlicher Laufweite und Zeilenhöhe 1,12.
- **Leseskala für neue Websites** (Profilentscheid 17.10.2026): H1 32–60 px, H2 28–44 px, H3 24–32 px bei Standardschrift; immer fluid und in rem mit `web-size-h1-fluid`, `web-size-h2-fluid`, `web-size-h3-fluid`. Die gemessenen PUK-Displaywerte 114/57/40 px bleiben Herkunftswerte und sind kein Standard für neue Seitentitel. `web-body` bleibt 21 px/1.3 Light, `web-lead` als gemessener Herkunftswert 26,25 px. [Einstieg und Seitenrahmen](guidelines/08-einstieg-und-seitenrahmen.md).
- **UI-Skala** für Komponenten: `type-display-1` 64 · `type-display-2` 48 · `type-title-1` 36 · `type-title-2` 28 · `type-title-3` 24 · `type-lead` 20 · `type-body` 17 · `type-body-sm` 15 · `type-caption` 13 px. Im CSS über die Kurzformen `font: var(--type-body)`.
- **Lesen in Seitenschrift, Bedienen in UI-Grösse:** Was man liest, steht auf Websites in `web-body` (21 px Light, bis 760 px 19 px) – auch Lesetext in `Card`, `Alert`, `Accordion` und `List`; das geschieht innerhalb von `.puk-web-page` automatisch. Was man bedient (Buttons, Felder, Auswahl, Tabs), bleibt bei `type-body` (17 px). Beispiel: Karte «Lesen und Bedienen».
- Satzschreibung, keine Versaltitel. Lauftext 45–75 ch (`web-content-measure` 68ch).
- **Grade in rem** (Profilentscheid 11.10.2026): Auf Websites stehen alle Schriftgrade in `rem`, damit die Browser-Einstellung «Schriftgrösse» wirkt; bei Standardeinstellung bleibt jeder Grad gleich (21 px = 1,3125 rem). Rückfallschrift ohne «Rubik Variable». Details: Abschnitt «Typografie und Flächen».

## Raum und Layout

- **4-px-Raster:** `space-1` … `space-24`. Karteninnenabstand `space-6`, Stapel `space-3`/`stack-default`, Abschnittsabstand `space-16` (`gutter-section`). Keine freien Pixelwerte.
- **Website:** Container max. `web-container-max` (1200 px), Seitenrand `web-gutter-inline`, Abschnittsabstand `web-section-space`, Touch-Ziel `web-touch-target` (44 px) für Buttons, Navigation und Aktionslinks.
- Kopf nicht fixiert; Skip-Link «Zum Hauptinhalt»; genau ein `main` und ein `h1`. Kartenraster `auto-fit minmax(260px,1fr)` als Liste ausgezeichnet (`.puk-web-card-list`). Bis 760 px stapelt der Kopf; bis vier Hauptpunkte stehen im Raster, ab fünf öffnet dort die Schaltfläche «Menü» die Liste. Breit und ohne JavaScript bleiben die Navigationslinks sichtbar (Profilentscheid 17.10.2026, ersetzt die frühere Schwelle von sieben).
- Startseiten zeigen nach Titel und kurzer Einleitung einen hilfreichen Einstiegslink vor nachrangigen Hinweisen. Bei 375 × 812 px soll dieser erste Schritt im ersten Bildschirm erkennbar sein; bei vergrösserter Schrift darf die Seite länger werden. Keine starren Höhen oder verkleinerte Schrift erzwingen.
- Prüfen bei 320, 360, 375, 768, 1024 und 1440 px, mit 200 % Textgrösse (Seitenzoom und Schriftgrösse), per Tastatur, mit reduzierter Bewegung und mit erzwungenen Farben. Den ersten Bildschirm zusätzlich visuell beurteilen; kein Überlauf allein belegt noch keine gute Gewichtung.

## Flächen, Linien, Ecken

- **Flach:** Seiten- und UI-Flächen ohne Verläufe, Texturen oder Muster. Weiss ist die normale Seitenfläche; Abschnitte dürfen auf `surface-tint` stehen.
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

- **Leitprinzip:** Zentrale Konzepte, Modelle und Zusammenhänge werden vorrangig durch Darstellungen erklärt, deren Anordnung, Verbindungen, Formen und Beschriftungen selbst Bedeutung tragen – nicht durch lange Fliesstexte und nicht durch Kartenraster mit Icons. Prüffrage: «Was versteht die Zielgruppe dadurch besser als durch einen kurzen Text allein?» Drei Erklärungsebenen für alle Muster: Kernaussage · Darstellung mit kurzem Erklärtext · aufklappbare Vertiefung. Erklärmodelle (Kreislauf, Prozesspfad, Modell in Schritten) markieren, wo Angehörige ansetzen können – oder begründen den Verzicht.
- **Auswahl nach Vermittlungsziel** (Entstehung, Zusammenwirken, Unterschied, Spannung, Beziehung, Abstufung, Verborgenes, Ablauf, Handlung, Erleben) aus den Mustern **A–F** (Figur, Kreislauf, Prozesspfad, Illustration, Vergleich, Entscheidungsweg) und **G–K** (Modell in Schritten, Spannungsfeld, Beziehungskarte, Kontinuum, Schichtenmodell). Passen mehrere: Metapher vor Strukturdiagramm vor Inhaltscontainer. Live: Gruppe «Visualisierung»; Kopiervorlagen `templates/website/longform/visualisierungsmuster.html` und `erklaermuster.html`.
- **Bildsprache:** erwachsenengerecht, warm, professionell; organische Formen und Alltagsmetaphern erwünscht, nie verniedlichend, kein Schulbuch, keine Gamification. Illustrationen dürfen eine eigene Handschrift haben, nie als Seitenhintergrund oder Buttonstil. Nüchtern heisst nicht kalt: Bilder sollen Angehörige ansprechen.
- **Ein Bild, eine Idee** (Profilentscheid 10.10.2026): Eine Metapher bleibt als Bild erkennbar und trägt eine Aussage, die man ohne Erklärung versteht. Beschriftet wird Erleben mit Sätzen aus Sicht von Menschen, nie Bildteile; keine Liste, die Bildteile übersetzt; keine Bauplan-Optik (Kästen, Raster, Bemassung), wo es um Erleben geht; auf Nebenbedeutungen prüfen. Jede Darstellung nennt im Plan ihre Wirkung (`resonance`). Eigene Zeichnungen brauchen keine fremde Bildquelle, aber die fachliche Freigabe. Kopiervorlage: Muster D («Ein freier Abend», `.puk-vis-scene`).
- **Keine Fotos als Normalfall** (Profilentscheid 06.10.2026, kein Bildpool): Die visuelle Ebene tragen Erklärmuster und eigene Illustrationen. Ein Foto nur im Einzelfall, wenn es inhaltlich nötig ist – mit nachweisbarer Quelle, Einwilligung, Alternativtext und Bildnachweis; keine Stockfotografie, keine generierten Personenbilder.
- **Umsetzung im Web:** Beschriftungen als HTML-Text in Rubik, Linien 2 px `puk-blue-100` (bei Metaphern und Illustrationen als Kurven mit runden Enden), höchstens ein gefülltes blaues Feld, SVG-Farben nur über Tokens, schmal als gegliederte Liste, nichts bewegt sich von selbst. Vor dem Bau ein Visualisierungsplan mit einer Zeile pro Abschnitt. Die Sachzeichnungs-Regel des Vollsystems (Arial, 1,5 px) gilt nur für Word und PowerPoint. Abschnitt «Visualisierung umsetzen».

## Logo

- Nur die Originaldateien aus der Gruppe **Logos** verwenden – nie nachzeichnen, verzerren, umfärben, beschneiden. Nur über die Breite skalieren (`aspect-ratio` statt `height`).
- **Statisches Logo im Seitenkopf** (Profilentscheid 08.10.2026): Auf Websites und in Browser-Anwendungen steht immer das statische Logo. Das animierte Logo wird nicht verwendet: Es wiederholt einen 10-s-Zyklus endlos, WCAG 2.2.2 verlangt für Bewegung über 5 s eine Möglichkeit zum Anhalten, und das Interaktionskonzept schliesst Bewegung ohne Auslösung aus. Die animierten Dateien bleiben als Quelle in der Asset-Gruppe **Logos**, nicht im Projektpaket.
- **Positiv** (Schwarz auf Weiss) ist Standard, oben links im Kopf, Breite `web-logo-width`. **Negativ** nur auf vollflächigem Blau oder Schwarz.
- Sperrzone rundum `logo-clearspace` (14 % der Logobreite).
- **Logo-Symbol allein** nur, wo die PUK klar als Absenderin erkennbar ist (Favicon, Social-Media-Icon) – nie als Ersatz für das Logo im Seitenkopf. Wortmarke nie ohne Symbol.

## Icons

- Lokales Subset von **Lucide 0.446.0** (ISC-Lizenz, `assets/icons/LICENSE.txt`): 24 × 24, Strich 2 px, runde Enden, `currentColor`. 13 Glyphen: arrow-right, calendar, check, circle-alert, circle, download, info, menu, phone, printer, search, triangle-alert, x. Dieselben SVGs sind für Vorschauen ohne Dateipfad im Komponenten-Bundle eingebettet.
- Einsetzen über `Icon` bzw. die `icon`-Prop von `Button`/`IconButton`. Icons stützen Text, ersetzen ihn nicht; `IconButton` braucht immer ein `label`.
- Keine Icon-Fonts, keine PNG-Icons, **keine Emoji**, keine Unicode-Symbole als Icons (Ausnahmen: Mittelpunkt « · » und «#» vor Themen-Chips).
- Fehlt ein Glyph: aus Lucide mit gleicher Strichstärke ergänzen und lokal ausliefern – kein CDN in Produktion.

## Komponenten

26 React-Komponenten unter `window.PUKWeb`: **Basis** Button, IconButton, Icon · **Formulare** Field, Input, Textarea, Select, Checkbox, Radio, RadioGroup, Switch · **Inhalt** Card, Badge, Tag, List, Table, Accordion · **Feedback** Alert, Toast, Tooltip, Dialog · **Navigation** Link, Tabs, Breadcrumb · **Interaktion** DisclosureMenu (Dropdown-Navigation), Carousel (nur ausnahmsweise).

- Stylesheet `components/bundle.css` (die vollständige Token- und Hüllen-CSS-Kette inkl. `.puk-web-*`, `.puk-longform*`, Fokus- und Formular-Basis) nach den Tokens laden, dann React 18, dann `components/bundle.js`. `_ds_bundle.js` im Stamm ist die bytegleiche Plattformkopie dieses Bundles; `npm run build:components` schreibt beide, ein Test prüft die Gleichheit (Nachbesserung 23.10.2026).
- `Alert` dient einer bewusst ausgewählten Information; keine automatisch ergänzten Notfallhinweise. `Dialog` nie als einziger Ort kritischer Information.
- **Statische Websites (Starter, Eleventy, Astro):** Akkordeon, Reiter, Dropdown-Menü, Dialog und Button als HTML-Markup mit `components/bundle.css` und `components/interaktion.js` – ohne Abhängigkeiten, ohne Inline-Skripte, ohne Skript bleibt alles sichtbar. Dazu Listenfilter und Abschnittssuche (nur als Hilfe zum Finden; die Suche braucht einen Index aus dem Build der Website) und ein sichtbarer Fokus auf dem Ziel eines Sprunglinks. Markup: `templates/website/interaktion/`, Karte «Interaktion ohne React». `bundle.css` enthält auch die Druckregeln.
- Die Grundlagen-Seiten (Gruppen «Grundlagen · …») zeigen Farben, Typografie, Abstände, Flächen, Bewegung, Fokus, Logo und Icons als Referenzkarten; sie sind keine Komponenten im Bundle.
- Website-Hülle als Klassen: `.puk-web-page`, `.puk-web-header`, `.puk-web-nav`, `.puk-web-hero`, `.puk-web-h1`, `.puk-web-lead`, `.puk-web-card-list`, `.puk-web-band`, `.puk-web-footer`.

## Vorlagen, Beispiel und Werkzeuge

- [Schlanker Starter](templates/website/minimal-starter/README.md): mit `npm run neu -- mein-thema --titel "Mein Thema"` vier eigene Seiten mit Vorschau anlegen. Keine vorgegebenen klinischen Themen oder kopierten Build-Werkzeuge. Eingabeparameter und Freigaben vor einer Veröffentlichung ausarbeiten.
- [Ausführliche Musterwebsite](templates/website/psychoeducation-site-starter/README.md): Gestaltungsreferenzen für mehrere Themen; Beispiele gezielt auswählen. Ihr Produktionsgate sperrt ungefüllte Parameter und unbestätigte Inhalte weiterhin.
- [Welches Muster passt?](MUSTER-WAEHLEN.md): Kurzanleitung mit direkten Beispielen für Text, Visualisierungen und Interaktionen; lokal auch unter `musterauswahl.html`.
- [Vollständiges Profilbeispiel](templates/website/profilbeispiel/README.md): vier fachneutrale Seiten mit eigenem Prüfbericht; technisch geprüft, ohne behauptete klinische Freigabe.
- `templates/website/longform/`, `applications/`, `interaktion/`: Erklärmuster, Anwendungsmuster und HTML-Interaktionen. Die UI-Kit-Ansichten illustrieren wählbare Varianten; sie schreiben keinen Krisenblock vor.
- `components/`, `tokens/`, `assets/`, `fonts/`: 26 React-Komponenten, statische HTML-Interaktionen, Gestaltungswerte und lokale Originaldateien.
- `quellcode/komponenten/src/components/`: einzige Typquelle. `npm run generieren` erzeugt die Einzeldateien in `components/` und die Sammeldeklaration. `quellcode/profil/` enthält Quellen für Startseite und Musterauswahl.
- `package.json`: einzige Quelle der Profilversion und Build-Stände; `package-lock.json` legt die Entwicklungsabhängigkeiten fest. `npm run check:generated` erkennt veraltete Ableitungen, ohne Dateien zu ändern.
- `npm run check:docs` prüft lokale Dateiziele in den aktiven Markdown-Anleitungen. Der Matrixverweis im UI-Kit entsteht aus der Profilversion; fehlende Nachweise stoppen Tests und Paketbau. Archive, Codebeispiele und externe Adressen werden dabei nicht als aktuelle lokale Dateiziele behandelt.
- GitHub prüft bei Push, Pull Request und manuellem Start automatisch die Ableitungen, den Build, die Typen, die Tests, die vollständige UI-Matrix und das Paket. Die bisherige Beschreibungskontrolle für offene Prüfstufen bleibt zusätzlich erhalten.
<!-- profil:paket -->
- `tools/paket.py`: reproduzierbares Paket [puk-website-profil-2026.10.10.zip](https://github.com/christaegger-dot/puk-website-profil/raw/refs/heads/main/puk-website-profil-2026.10.10.zip) mit [SHA-256-Datei](https://github.com/christaegger-dot/puk-website-profil/raw/refs/heads/main/puk-website-profil-2026.10.10.zip.sha256). Archiv, Projekte unter `websites/` und lokale Arbeitsausgaben sind nicht enthalten.
<!-- /profil:paket -->
- Der Exporter schreibt in einen neuen oder erkennbaren Exportordner. Erst nach vollständiger Prüfung ersetzt er den vorherigen Export. Fremde Dateien werden nicht überschrieben. Eine Website zu exportieren veröffentlicht sie nicht.

## Projektabschluss

Alle bisherigen Pendenzen sind erledigt oder endgültig aus dem Projektumfang ausgeschlossen; Einzelentscheide in `ABSCHLUSSENTSCHEIDE.md`. Die früheren Website-Kopien werden in ihren eigenständigen Repositorys gepflegt und sind hier ausschliesslich archiviert. Der Analyse-PR #9 wurde ohne Merge geschlossen; seine Bestandsaufnahme bleibt im geschlossenen PR erhalten.

Das Profil ist ein internes abgeleitetes Arbeitsmittel, keine amtliche PUK-Vorlage. Neue klinische Websites benötigen ihre eigene fachliche und rechtliche Inhaltsprüfung. Nutzerstudien, echte Screenreader-Läufe, institutionelle Zertifizierungen, private Artefakt-Synchronisierung und zusätzliche Medienfassungen sind keine verbleibenden Aufgaben dieses abgeschlossenen Profilstands.
