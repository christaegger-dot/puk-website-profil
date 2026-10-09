# Psychoedukations-Starter · PUK Website Kit 1.10.1-r4 · abgeleitet · Build r4-4

Lokal lauffähiger Mehrseiten-Starter für psychoedukative Websites. Abgeleitetes Profil auf Basis der kanonischen Quelle **PUK Zürich Design System 1.10.1**, nicht deren neue offizielle Version. Alle Inhalte sind synthetisch: keine realen Kontakte, Personen, klinischen Aussagen, Freigaben oder Bildrechte.

## Aufbau

- `site.config.json`: Seitenvertrag (siehe unten). Einzige Quelle für Navigation, Titel, Meta, Absenderin und Zuständigkeitsverweis.
- `content/<id>.html`: Inhalt jeder Seite, nur das Innere von `<main>`.
- `tools/build.mjs`: erzeugt `<id>.html` aus Vertrag + Inhalt und führt danach das Gate aus. Blockierende Befunde → nichts wird geschrieben, Exit 1.
- `tools/gate.mjs`: prüft die gebauten Seiten. `--production` für die Veröffentlichung, `--selftest` für den Nachweis, dass jede bekannte Fehlerklasse erkannt wird. Der Selbsttest nutzt die feste Referenz in `tools/selftest/` und läuft deshalb auch in jeder Kopie des Starters.
- `tools/contract.js`: gemeinsame Logik (Node und Browser), ohne Abhängigkeiten.
- `PRUEFBERICHT.md`: Prüfbericht der Website – Statustabelle der Prüfstufen, Visualisierungs-Check mit Beleg je Punkt, Befunde. Ohne vollständigen Bericht blockiert das Produktionsgate (Abschnitt «Prüfung und Freigabe»).
- `gate.html`: derselbe Bericht im Browser, mit sichtbarem Seitenvertrag und Visualisierungsplan pro Seite.
- `tools/export.mjs`: schreibt eine eigenständige, veröffentlichbare Website in einen Zielordner (siehe «Veröffentlichen»).
- `_headers`: Sicherheits-Header für Netlify (Content-Security-Policy nur mit eigenen Quellen, keine Inline-Skripte).
- `starter.css`: Absenderin, Entwurfsmarken, Zuständigkeitsverweis, Platzhalter. Figuren kommen aus `../longform/visual-patterns.css` (Muster A–F) und `../longform/erklaermuster.css` (Muster G–K); Akkordeon, Reiter, Menü und Dialog aus `components/bundle.css` mit `components/interaktion.js`.
- `assets/`: lokales Favicon und Logo. Keine CDNs, externen Fonts, Skripte oder Icons.

```sh
node tools/build.mjs              # bauen + Entwurfsgate
node tools/gate.mjs --production  # Produktionsgate (blockiert bei offenen Freigaben und unvollständigem Prüfbericht)
node tools/gate.mjs --selftest
node tools/export.mjs ../meine-website --production   # eigenständige Website für die Veröffentlichung
```

Seiten über einen lokalen Webserver öffnen (z. B. `npx serve` im Projektstamm des Projektpakets). Die Stylesheets und das Interaktionsskript werden relativ zum Projektstamm geladen (`stylesheets`, `interactionScript` in `site.config.json`).

## Veröffentlichen

`node tools/export.mjs <zielordner> --production` baut alle Seiten, prüft sie mit dem Produktionsgate und schreibt nur, was veröffentlicht wird: die veröffentlichten Seiten, `assets/`, eine zusammengeführte `css/site.css` mit lokalen Schriften, `js/interaktion.js` (falls gebraucht), `_headers` und `sitemap.xml` (wenn `siteUrl` gesetzt ist). Der Zielordner lässt sich unverändert auf Netlify hochladen oder als eigenes Repository führen. Projektquellen, Entwürfe und `site.config.json` werden nicht ausgeliefert. Ablauf und Prüfstufen: Abschnitt «Prüfung und Freigabe»; technische Kriterien: «Technische Qualität».

## Seitenvertrag

- `siteTitle`, `shortDescription`, `language` (de…), `favicon`, `logo`, `contentOwner`, `editorialStatus`
- `sender`: `orgUnit` + `institution` + `email` (optional, erscheint als `mailto:`-Link) + `status`. Festgelegt für Websites: «Fachstelle Angehörigenarbeit» · «Psychiatrische Universitätsklinik Zürich» · `angehoerigenarbeit@pukzh.ch`. Die Absenderin erscheint auf jeder Seite sichtbar im Kopf. Solange `status` nicht `freigegeben` ist, steht daneben «Platzhalter, nicht freigegeben». Eine amtliche Freigabe wird nicht behauptet.
- `pages[]`: `id`, `title`, `href`, `navLabel` (`null` = nicht in der Navigation), `status` (`draft`/`published`), `primaryTask`, `description`, `sensitiveTopics`, `visualPlan`.
- Die Hauptnavigation entsteht aus allen Seiten mit `status: "published"` und `navLabel`. Entwürfe erscheinen nie in der Navigation.
- `disclaimer`: gut auffindbarer Hinweis, dass die Website keine individuelle Abklärung, Beratung oder Behandlung ersetzt; erscheint in jeder Fusszeile (fehlt er, meldet das Gate einen Hinweis).
- `responsibility` (site-weit, optional): ein Zuständigkeitsverweis an einer festen, von jeder Seite aus erreichbaren Stelle – in jeder Fusszeile –, der ohne Nummern auf die zuständigen Stellen verweist (alternativ `targetHref` auf eine Impressum-Stelle; die Fusszeile gilt als eine Stelle). Felder: `label`, `text`, `owner`, `reviewStatus`, optional `targetHref` (lokal, existierend) + `targetLabel`; bei `geprueft` zusätzlich `reviewedBy` und `reviewedAt`. Der Prüfvermerk erscheint nicht auf der Website; ein ungeprüfter Verweis zeigt in der Fusszeile eine Warnung. Seitenweise `safetyAccess`-Varianten gibt es nicht mehr; `persistent-subdued` und `direct` sind gesperrt (Profilentscheid 06.10.2026: Die Fachstelle bietet keine Krisenintervention).
- `responsibility.inline` (optional, Profilentscheid 09.10.2026): Wortlaut des **Verweises im Text** (`text`, `reviewStatus`, bei `geprueft` auch `reviewedBy` und `reviewedAt`). Seiten setzen ihn nur über den Platzhalter `<p data-responsibility-inline></p>` direkt nach einer Handlungsanleitung für akute Lagen ein; der Build füllt den Wortlaut ein. Erlaubt nur auf Seiten, deren `sensitiveTopics` Selbstgefährdung, Gewalt oder akute Krise nennen, im Fliesstext (nicht in Figur oder Vertiefung), höchstens einer je Abschnitt, ohne Nummern. Der Starter enthält den von der Fachstelle am 09.10.2026 fachlich geprüften Standardwortlaut. Wird er geändert, gilt er als ungeprüft (`reviewStatus: "ausstehend"`), und das Produktionsgate blockiert, solange ein verwendeter Verweis nicht geprüft ist.
- `visualPlan[]`: `section`, `sectionId` (Pflicht: `id` der zugehörigen `section`; jeder Abschnitt braucht eine Zeile), `goal`, `format` (`text`; Muster A–F `figure`, `cycle`, `process`, `illustration`, `comparison`, `decision`; Muster G–K `stepwise-model`, `tension-field`, `relationship-map`, `continuum`, `layer-model`), `statement`, `understood` (Pflicht ausser bei `text`: Was versteht die Zielgruppe dadurch besser als durch einen kurzen Text allein?), `entryPoint` (Pflicht bei `cycle`, `process`, `stepwise-model`: Ansatzpunkt für Angehörige oder «entfällt: Begründung»; ein genannter Ansatzpunkt ist in der Figur als `.puk-vis-ansatz` markiert), `source`, `alternative`, `reason`, `approvalStatus`.
- `siteUrl` (optional): öffentliche Adresse; erzeugt `sitemap.xml` und kanonische Links. Fehlt sie, meldet das Gate einen Hinweis.
- `interactionScript`: Pfad zu `components/interaktion.js`. Der Build bindet es nur auf Seiten ein, die Akkordeon, Reiter, Menü, Dialog oder Muster G enthalten.
- Der Build schreibt zusätzlich Open-Graph-Angaben (Titel, Beschreibung, Sprache) ohne Tracking-Parameter.

## Was konstruktiv verhindert wird und was das Gate meldet

- **Build erzeugt immer:** `lang`, eindeutigen Titel, Meta-Description, lokales Favicon, Skip-Link, genau ein `main`, Navigation aus dem Vertrag, sichtbare Absenderin, Zuständigkeitsverweis in der Fusszeile mit sichtbarem Prüfstatus.
- **Gate blockiert immer (Entwurf und Produktion):**
  - fehlende Seiten-, Navigations-, Link- oder Sprungziele
  - Entwürfe in der Navigation; nicht erreichbare veröffentlichte Seiten
  - fehlendes oder falsches `lang`, Titel, Meta-Description, Favicon, `main`, `h1`, Skip-Link
  - externe Laufzeitquellen
  - fehlende oder versteckte Absenderin
  - Telefonnummern, `tel:`-Links und Notfallblöcke (Varianten `direct`, `persistent-subdued`) auf psychoedukativen Seiten
  - Zuständigkeitsverweis fehlt auf einer Seite, steht ausserhalb der Fusszeile oder mehrfach; Ziel fehlt
  - Verweis im Text mit eigenem Wortlaut, auf einer Seite ohne Selbstgefährdung, Gewalt oder akute Krise, in Figur oder Vertiefung, mehrfach in einem Abschnitt oder mit Nummern; in Produktion zusätzlich, solange sein Wortlaut nicht fachlich geprüft ist
  - Hinweis «ersetzt keine individuelle Abklärung oder Behandlung» fehlt auf einer Seite (wenn `disclaimer` gesetzt ist)
  - «geprüft» ohne Dokumentation
  - Figuren ohne Bildlegende, Titel, Textalternative, Kennzeichnung oder Plan-Eintrag
  - Kreisläufe ohne geschlossene Schleife, mit «Uhrzeigersinn» ausserhalb der breiten Leserichtung oder ohne sichtbaren Rücksprung zu Station 1
  - Platzhalter ohne `data-source-status`/`data-approval-status` oder ohne sichtbare Entwurfsmarke
  - generische Quellenlinks ohne sprechendes `aria-label`
  - Inline-Skripte (Content-Security-Policy), Links mit `target="_blank"` ohne `rel="noopener noreferrer"`
  - interaktive Komponenten ohne lokal vorhandenes `interaktion.js`
  - Visualisierungsplan ohne `understood` bei einer Darstellung
  - Planzeile mit `sectionId`, die es auf der Seite nicht gibt
- **Hinweise im Entwurf, Blocker in Produktion:** Figur ohne Kernaussage (`.puk-vis-kern`), fehlender oder nicht markierter Ansatzpunkt (`entryPoint`), Abschnitt ohne Zeile im Visualisierungsplan.
- **Hinweise (keine Blocker):** Kartenraster mit vier oder mehr Karten (Kartenraster-Check), `style`-Attribute im Inhalt, fehlende `siteUrl`, Orthografie, deutsche Rechtsbegriffe, etikettierende Bezeichnungen.
- **Gate blockiert zusätzlich in Produktion:** nicht freigegebene Absenderin, ungeprüfte Zuständigkeitsverweise, Platzhalter und Visualisierungen sowie ein fehlender oder unvollständiger Prüfbericht (`PRUEFBERICHT.md`).
- **Sensible Themen:** Erwähnt der Inhalt Selbstgefährdung, Gewalt, Zwang oder eine akute Krise, muss `sensitiveTopics` das Thema nennen. Ein Zuständigkeitsverweis (`responsibility`) ist dann empfohlen, aber nicht Pflicht (Hinweis, kein Blocker); ist er gesetzt, steht er auf jeder Seite. Inhalte zum Umgang mit Krisen (Frühwarnzeichen, Krisenplan) sind Psychoedukation und zulässig. Mögliche Kurznummern wie 143 oder 144 meldet das Gate als Hinweis zur Prüfung. Zusätzliche Hinweise (keine Blocker) aus dem Website-Review Teil 1: «ß» und „…“ statt «…», deutsche Rechtsbegriffe und Angebote (z. B. Jugendamt, rechtliche Betreuung, Pflegegrad), etikettierende Bezeichnungen (z. B. «der Schizophrene»). Das ist eine Vertragsprüfung nach Stichwörtern, keine medizinische Triage.

## Referenzfälle

- `beziehungen-verstehen.html`: Kreislauf mit markiertem Ansatzpunkt und Illustrationsplatzhalter.
- `behandlung-verstehen.html`: Prozesspfad mit markiertem Ansatzpunkt und Vergleich · kein Sicherheitszugang (keine sensiblen Themen).
- `unterstuetzung-finden.html`: Entscheidungsweg in zwei Fragen, Beziehungskarte (Muster I), Kontakt-Platzhalter mit häufigen Fragen als Akkordeon.
- Alle Seiten: Zuständigkeitsverweis und Hinweis «ersetzt keine Abklärung» in der Fusszeile (site-weit).
- `index.html`: Einstieg mit Lesepfaden; der Vollbericht ist ein Download-Platzhalter.
- `seitenvorlage.html`: Entwurf, nicht in der Navigation.

Stand 09.10.2026 (Build r4-4, Befunde aus der Prüfung der Borderline-Website):
- **Entwurfsgate:** 0 blockierende Befunde.
- **Produktionsgate:** blockiert 9 offene Freigaben und den unvollständigen Prüfbericht. Das ist erwartet.
- **Selbsttest:** 50 von 50 bestanden, auch in Kopien des Starters (neu: Verweis im Text mit eigenem Wortlaut, auf Seite ohne sensibles Thema, in einer Vertiefung, ungeprüft in Produktion).

Offen sind reale Screenreader-Läufe, ein Test mit Hardwaretastatur sowie Fach-, Bild- und Absenderfreigaben.
