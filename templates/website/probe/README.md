# Probe-Website PTBS · auf Basis des Psychoedukations-Starters (PUK Website Kit 1.10.1-r4 · abgeleitet · Build r4-2)

Probe-Website der Fachstelle Angehörigenarbeit für **Angehörige von Menschen mit einer posttraumatischen Belastungsstörung (PTBS)**. Kopie des Psychoedukations-Starters; Werkzeuge, Stylesheets und Gate sind unverändert. Alle Texte sind **Musterinhalt**: Fachliche Aussagen tragen die sichtbare Marke «Prüfbedarf» und sind nicht freigegeben. Nicht zur Veröffentlichung bestimmt.

## Planung (Stufe 0)

- **Ziel:** Angehörige verstehen, wie eine PTBS Erleben und Verhalten verändern kann, und finden Wege, den Alltag mitzutragen, ohne sich selbst zu überfordern.
- **Aufbaulogik:** vom Verstehen über den Alltag zur Unterstützung; die Navigation folgt dieser Reihenfolge. Jede Seite ist für den Quereinstieg für sich verständlich.
- **Anrede:** Sie · Schweizer Hochdeutsch.
- **Entscheide:** kein Abschnitt zu Krisen oder Suizidalität (nur der site-weite Zuständigkeitsverweis); komplexe PTBS in einem Satz mit Prüfbedarf; bewusste Lücken: Rechte und Schweigepflicht, Kinder in der Familie, Umgang mit Ablehnung von Hilfe (nur angetippt bzw. als häufige Frage).
- **Visualisierungsplan:** `site.config.json` › `visualPlan`, je Darstellung mit `understood`.

| Seite | Zweck | Darstellungen |
| --- | --- | --- |
| `index.html` | Thema einordnen, Einstieg wählen | Text (Lesepfade) |
| `ptbs-verstehen.html` | Trauma, drei Kernbereiche, Verhalten und Erleben, Vermeiden | Schichtenmodell (K), Kreislauf (B) |
| `alltag-mittragen.html` | Auslöser, Rücksicht und Alltag, Gespräch, Grenzen | Spannungsfeld (H) |
| `behandlung-und-unterstuetzung.html` | Behandlungsweg, eigener Beitrag, eigene Belastung, Netz | Prozesspfad (C), Beziehungskarte (I) |

## Prüfstand

Stand 08.10.2026 (nach den Korrekturen aus der Prüfung des ersten Pull Requests):
- **Korrekturen:** Hinweiskasten der Übersicht präzisiert; Aussage zur Beratung durch die Fachstelle auch ohne Behandlung in der PUK fachlich bestätigt (Fachstelle, 08.10.2026), Marke «Prüfbedarf» entfernt; zusätzlicher Verweis auf den Zuständigkeitsverweis in «Gereiztheit und Rückzug» gestrichen; Zuständigkeitsverweis im neu gefassten Standardwortlaut (fachlich geprüft 08.10.2026). Der Prüfvermerk steht nur noch in `site.config.json` und erscheint nicht mehr in der Fusszeile; `tools/contract.js` entspricht dem Starter.
- **Entwurfsgate:** 0 blockierende Befunde.
- **Produktionsgate:** blockiert 7 offene Freigaben (5 Visualisierungen, Quellen-Platzhalter, Antworten der häufigen Fragen). Das ist erwartet.
- **Selbsttest:** gehört zum Starter (dort 39/39). Er mutiert die Referenzseiten des Starters und ist in dieser Kopie nicht anwendbar.
- Offen: Stufen 1–7 (W1 bis Produktionsfreigabe), Quellen, reale Screenreader-Läufe.

---

Die folgenden Abschnitte stammen aus dem README des Starters und gelten unverändert für die Werkzeuge.

## Aufbau

- `site.config.json`: Seitenvertrag (siehe unten). Einzige Quelle für Navigation, Titel, Meta, Absenderin und Zuständigkeitsverweis.
- `content/<id>.html`: Inhalt jeder Seite, nur das Innere von `<main>`.
- `tools/build.mjs`: erzeugt `<id>.html` aus Vertrag + Inhalt und führt danach das Gate aus. Blockierende Befunde → nichts wird geschrieben, Exit 1.
- `tools/gate.mjs`: prüft die gebauten Seiten. `--production` für die Veröffentlichung, `--selftest` für den Nachweis, dass jede bekannte Fehlerklasse erkannt wird.
- `tools/contract.js`: gemeinsame Logik (Node und Browser), ohne Abhängigkeiten.
- `gate.html`: derselbe Bericht im Browser, mit sichtbarem Seitenvertrag und Visualisierungsplan pro Seite.
- `tools/export.mjs`: schreibt eine eigenständige, veröffentlichbare Website in einen Zielordner (siehe «Veröffentlichen»).
- `_headers`: Sicherheits-Header für Netlify (Content-Security-Policy nur mit eigenen Quellen, keine Inline-Skripte).
- `starter.css`: Absenderin, Entwurfsmarken, Zuständigkeitsverweis, Platzhalter. Figuren kommen aus `../longform/visual-patterns.css` (Muster A–F) und `../longform/erklaermuster.css` (Muster G–K); Akkordeon, Reiter, Menü und Dialog aus `components/bundle.css` mit `components/interaktion.js`.
- `assets/`: lokales Favicon und Logo. Keine CDNs, externen Fonts, Skripte oder Icons.

```sh
node tools/build.mjs              # bauen + Entwurfsgate
node tools/gate.mjs --production  # Produktionsgate (blockiert bei offenen Freigaben)
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
- `responsibility` (site-weit, optional): ein Zuständigkeitsverweis an einer festen, von jeder Seite aus erreichbaren Stelle – in jeder Fusszeile –, der ohne Nummern auf die zuständigen Stellen verweist (alternativ `targetHref` auf eine Impressum-Stelle; die Fusszeile gilt als eine Stelle). Felder: `label`, `text`, `owner`, `reviewStatus`, optional `targetHref` (lokal, existierend) + `targetLabel`; bei `geprueft` zusätzlich `reviewedBy` und `reviewedAt`. Seitenweise `safetyAccess`-Varianten gibt es nicht mehr; `persistent-subdued` und `direct` sind gesperrt (Profilentscheid 06.10.2026: Die Fachstelle bietet keine Krisenintervention).
- `visualPlan[]`: `section`, `goal`, `format` (`text`; Muster A–F `figure`, `cycle`, `process`, `illustration`, `comparison`, `decision`; Muster G–K `stepwise-model`, `tension-field`, `relationship-map`, `continuum`, `layer-model`), `statement`, `understood` (Pflicht ausser bei `text`: Was versteht die Zielgruppe dadurch besser als durch einen kurzen Text allein?), `source`, `alternative`, `reason`, `approvalStatus`.
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
  - Hinweis «ersetzt keine individuelle Abklärung oder Behandlung» fehlt auf einer Seite (wenn `disclaimer` gesetzt ist)
  - «geprüft» ohne Dokumentation
  - Figuren ohne Bildlegende, Titel, Textalternative, Kennzeichnung oder Plan-Eintrag
  - Kreisläufe ohne geschlossene Schleife, mit «Uhrzeigersinn» ausserhalb der breiten Leserichtung oder ohne sichtbaren Rücksprung zu Station 1
  - Platzhalter ohne `data-source-status`/`data-approval-status` oder ohne sichtbare Entwurfsmarke
  - generische Quellenlinks ohne sprechendes `aria-label`
  - Inline-Skripte (Content-Security-Policy), Links mit `target="_blank"` ohne `rel="noopener noreferrer"`
  - interaktive Komponenten ohne lokal vorhandenes `interaktion.js`
  - Visualisierungsplan ohne `understood` bei einer Darstellung
- **Hinweise (keine Blocker):** Kartenraster mit vier oder mehr Karten (Kartenraster-Check), `style`-Attribute im Inhalt, fehlende `siteUrl`, Orthografie, deutsche Rechtsbegriffe, etikettierende Bezeichnungen.
- **Gate blockiert zusätzlich in Produktion:** nicht freigegebene Absenderin, ungeprüfte Zuständigkeitsverweise, Platzhalter und Visualisierungen.
- **Sensible Themen:** Erwähnt der Inhalt Selbstgefährdung, Gewalt, Zwang oder eine akute Krise, muss `sensitiveTopics` das Thema nennen. Ein Zuständigkeitsverweis (`responsibility`) ist dann empfohlen, aber nicht Pflicht (Hinweis, kein Blocker); ist er gesetzt, steht er auf jeder Seite. Inhalte zum Umgang mit Krisen (Frühwarnzeichen, Krisenplan) sind Psychoedukation und zulässig. Mögliche Kurznummern wie 143 oder 144 meldet das Gate als Hinweis zur Prüfung. Zusätzliche Hinweise (keine Blocker) aus dem Website-Review Teil 1: «ß» und „…“ statt «…», deutsche Rechtsbegriffe und Angebote (z. B. Jugendamt, rechtliche Betreuung, Pflegegrad), etikettierende Bezeichnungen (z. B. «der Schizophrene»). Das ist eine Vertragsprüfung nach Stichwörtern, keine medizinische Triage.
