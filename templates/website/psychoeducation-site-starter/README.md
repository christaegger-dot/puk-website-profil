# Psychoedukations-Starter · PUK Website Kit 1.10.1-r4 · abgeleitet · Build r4-10

Lokal lauffähiger Mehrseiten-Starter für psychoedukative Websites. Abgeleitetes Profil auf Basis der kanonischen Quelle **PUK Zürich Design System 1.10.1**, nicht deren neue offizielle Version. Alle Inhalte sind synthetisch: keine realen Kontakte, Personen, klinischen Aussagen, Freigaben oder Bildrechte.

## Aufbau

- `site.config.json`: Seitenvertrag (siehe unten). Einzige Quelle für Navigation, Titel, Meta, Absenderin und Zuständigkeitsverweis.
- `content/<id>.html`: Inhalt jeder Seite, nur das Innere von `<main>`.
- `tools/build.mjs`: erzeugt `<id>.html` aus Vertrag + Inhalt und führt danach das Gate aus. Blockierende Befunde → nichts wird geschrieben, Exit 1.
- `tools/gate.mjs`: prüft die gebauten Seiten. `--production` für die Veröffentlichung, `--selftest` für den Nachweis, dass jede bekannte Fehlerklasse erkannt wird. Der Selbsttest nutzt die feste Referenz in `tools/selftest/` und läuft deshalb auch in jeder Kopie des Starters.
- `tools/contract.js`: gemeinsame Logik (Node und Browser), ohne Abhängigkeiten.
- `PRUEFBERICHT.md`: Prüfbericht der Website – Statustabelle der Prüfstufen, Visualisierungs-Check mit Beleg je Punkt, Befunde. Ohne vollständigen Bericht blockiert das Produktionsgate (Abschnitt «Prüfung und Freigabe»).
- `gate.html`: derselbe Bericht im Browser, mit sichtbarem Seitenvertrag und Visualisierungsplan pro Seite (Skript und Stil in `tools/gate-browser.js` und `tools/gate.css`, damit die Seite mit der Content-Security-Policy läuft).
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

`node tools/export.mjs <zielordner> --production` baut alle Seiten, prüft sie mit dem Produktionsgate und schreibt nur, was veröffentlicht wird: die veröffentlichten Seiten, `assets/`, eine zusammengeführte `css/site.css` mit lokalen Schriften und ihrer Lizenz `fonts/OFL.txt`, `js/interaktion.js` (falls gebraucht), `_headers`, `_redirects` (wenn die Website eine hat) sowie `sitemap.xml` und `robots.txt` mit der Sitemap-Adresse (wenn `siteUrl` gesetzt ist). Der Zielordner lässt sich unverändert auf Netlify hochladen oder als eigenes Repository führen. Projektquellen, Entwürfe und `site.config.json` werden nicht ausgeliefert. Ablauf und Prüfstufen: Abschnitt «Prüfung und Freigabe»; technische Kriterien: «Technische Qualität».

## Seitenvertrag

- `siteTitle`, `shortDescription`, `language` (de…), `favicon`, `logo`, `contentOwner`, `editorialStatus`
- `editorialStatusLabel` (optional, sonst `editorialStatus`): Redaktionsstatus in der Fusszeile. Vor der Veröffentlichung im Format «Fachlich freigegeben am TT.MM.JJJJ»: Das Produktionsgate blockiert einen Status mit «Entwurf» oder ohne Datum (`editorial-status`, Paket 2026.10.2).
- `sender`: `orgUnit` + `institution` + `email` (optional, erscheint als `mailto:`-Link) + `status`. Festgelegt für Websites: «Fachstelle Angehörigenarbeit» · «Psychiatrische Universitätsklinik Zürich» · `angehoerigenarbeit@pukzh.ch`. Die Absenderin erscheint auf jeder Seite sichtbar im Kopf. Solange `status` nicht `freigegeben` ist, steht daneben «Platzhalter, nicht freigegeben». Eine amtliche Freigabe wird nicht behauptet.
- `pages[]`: `id`, `title`, `href`, `navLabel` (`null` = nicht in der Navigation), `status` (`draft`/`published`), `primaryTask`, `description`, `sensitiveTopics`, `visualPlan`; optional `role: "not-found"` für die 404-Seite (`href` `404.html`, `navLabel` `null`; ohne Sitemap, kanonischen Link und Erreichbarkeitsprüfung, mit `noindex`; der Export setzt ihre Pfade ab dem Stamm der Website). Fehlt sie, blockiert das Produktionsgate (`not-found`).
- Die Hauptnavigation entsteht aus allen Seiten mit `status: "published"` und `navLabel`. Entwürfe erscheinen nie in der Navigation. Ab sieben Punkten setzt der Build sie in ein Dropdown-Menü: unter 760 px mit der Schaltfläche «Menü», breit bleiben alle Punkte sichtbar (Profilentscheid 11.10.2026).
- Der Logo-Link heisst «<sender.institution> – zur Startseite dieser Website»: Der Name beginnt mit dem sichtbaren Logotext (WCAG 2.5.3); Wortlaut von der Fachstelle freigegeben 15.10.2026. Die Version des Kits steht nicht mehr sichtbar in der Fusszeile, nur in `<meta name="generator">`.
- `legal`: `imprint` und `privacy`, je mit `label` und `href` (eigene Seite des Seitenvertrags oder geprüfte Seite der PUK). Die Links stehen in jeder Fusszeile; zeigen beide auf dieselbe Seite, entsteht ein Link. Ohne `href` erscheint ein sichtbarer Platzhalter, und das Produktionsgate blockiert (`legal`). Der Starter verlinkt die Seite `impressum-datenschutz.html` (Abschnitte `#impressum` und `#datenschutz`; Entscheid 11.10.2026: eine eigene Seite je Website, Herausgeberin Fachstelle Angehörigenarbeit, Inhalt und Umsetzung Ch. Egger). Ihre Angaben zum Datenschutz beschreiben, was der Code tut; bei Änderungen am Code mitprüfen.
- `disclaimer`: gut auffindbarer Hinweis, dass die Website keine individuelle Abklärung, Beratung oder Behandlung ersetzt; erscheint in jeder Fusszeile (fehlt er, meldet das Gate einen Hinweis).
- `responsibility` (site-weit, optional): ein Zuständigkeitsverweis an einer festen, von jeder Seite aus erreichbaren Stelle – in jeder Fusszeile –, der ohne Nummern auf die zuständigen Stellen verweist (alternativ `targetHref` auf eine Impressum-Stelle; die Fusszeile gilt als eine Stelle). Felder: `label`, `text`, `owner`, `reviewStatus`, optional `targetHref` (lokal, existierend) + `targetLabel`; bei `geprueft` zusätzlich `reviewedBy` und `reviewedAt`. Der Prüfvermerk erscheint nicht auf der Website; ein ungeprüfter Verweis zeigt in der Fusszeile eine Warnung. Seitenweise `safetyAccess`-Varianten gibt es nicht mehr; `persistent-subdued` und `direct` sind gesperrt (Profilentscheid 06.10.2026: Die Fachstelle bietet keine Krisenintervention).
- `responsibility.inline` (optional, Profilentscheid 09.10.2026): Wortlaut des **Verweises im Text** (`text`, `reviewStatus`, bei `geprueft` auch `reviewedBy` und `reviewedAt`). Seiten setzen ihn nur über den Platzhalter `<p data-responsibility-inline></p>` direkt nach einer Handlungsanleitung für akute Lagen ein; der Build füllt den Wortlaut ein. Erlaubt nur auf Seiten, deren `sensitiveTopics` Selbstgefährdung, Gewalt oder akute Krise nennen, im Fliesstext (nicht in Figur oder Vertiefung), höchstens einer je Abschnitt, ohne Nummern. Der Starter enthält den von der Fachstelle am 09.10.2026 fachlich geprüften Standardwortlaut. Wird er geändert, gilt er als ungeprüft (`reviewStatus: "ausstehend"`), und das Produktionsgate blockiert, solange ein verwendeter Verweis nicht geprüft ist.
- `visualPlan[]`: `section`, `sectionId` (Pflicht: `id` der zugehörigen `section`; jeder Abschnitt braucht eine Zeile), `goal`, `format` (`text`; Muster A–F `figure`, `cycle`, `process`, `illustration`, `comparison`, `decision`; Muster G–K `stepwise-model`, `tension-field`, `relationship-map`, `continuum`, `layer-model`), `statement`, `understood` (Pflicht ausser bei `text`: Was versteht die Zielgruppe dadurch besser als durch einen kurzen Text allein?), `resonance` (Pflicht ausser bei `text`: Wirkung – was eine Angehörige in der Darstellung wiedererkennen oder spüren soll; Profilentscheid 10.10.2026), `entryPoint` (Pflicht bei `cycle`, `process`, `stepwise-model`: Ansatzpunkt für Angehörige oder «entfällt: Begründung»; ein genannter Ansatzpunkt ist in der Figur als `.puk-vis-ansatz` markiert), `source`, `alternative`, `reason`, `approvalStatus`.
- `siteUrl` (optional): öffentliche Adresse; erzeugt `sitemap.xml` und kanonische Links. Fehlt sie, meldet das Gate einen Hinweis.
- `interactionScript`: Pfad zu `components/interaktion.js`. Der Build bindet es nur auf Seiten ein, die Akkordeon, Reiter, Menü, Dialog, Muster G oder eine Vertiefung (`details`) enthalten – das Skript öffnet die Vertiefungen vor dem Druck.
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
  - Illustration (`illustration`) ohne eigene Zeichnung (`.puk-vis-scene`) und ohne Bildquelle- und Freigabestatus
  - generische Quellenlinks ohne sprechendes `aria-label`
  - Inline-Skripte (Content-Security-Policy), Links mit `target="_blank"` ohne `rel="noopener noreferrer"`
  - interaktive Komponenten oder Vertiefungen (`details`) ohne lokal vorhandenes `interaktion.js`
  - mehr als sechs Hauptpunkte ohne Menü; Logo-Link, dessen Name nicht mit dem sichtbaren Logotext beginnt
  - Links auf Impressum und Datenschutzerklärung fehlen in der Fusszeile (wenn `legal` Ziele nennt); ein `legal`-Ziel, das weder eigene Seite noch `https://`-Seite ist (z. B. `mailto:`); eine 404-Seite in der Navigation
  - Visualisierungsplan ohne `understood` bei einer Darstellung
  - Planzeile mit `sectionId`, die es auf der Seite nicht gibt
  - Kennzeichen `data-print-split` an einem anderen Muster als Prozesspfad, Entscheidungsweg oder Modell in Schritten, an einer Figur ohne Schrittliste oder an einem anderen Element als der Figur (`print-split`; Abschnitt «Druck: lange Abfolgen kennzeichnen»)
- **Hinweise im Entwurf, Blocker in Produktion:** Figur ohne Kernaussage (`.puk-vis-kern`), fehlender oder nicht markierter Ansatzpunkt (`entryPoint`), fehlende Wirkung (`resonance`), Abschnitt ohne Zeile im Visualisierungsplan, fehlendes Impressum oder fehlende Datenschutzerklärung (`legal`), fehlende oder nicht ausgelieferte 404-Seite (`not-found`: veröffentlicht und `href` `404.html`).
- **Hinweise (keine Blocker):** Kartenraster mit vier oder mehr Karten (Kartenraster-Check), `style`-Attribute im Inhalt, fehlende `siteUrl`, Orthografie, deutsche Rechtsbegriffe, etikettierende Bezeichnungen, fremdsprachige Quellentitel ohne `lang` (`lang-part`, Stichwortprüfung).
- **Gate blockiert zusätzlich in Produktion:** nicht freigegebene Absenderin, ungeprüfte Zuständigkeitsverweise, Platzhalter und Visualisierungen sowie ein fehlender oder unvollständiger Prüfbericht (`PRUEFBERICHT.md`).
- **Sensible Themen:** Erwähnt der Inhalt Selbstgefährdung, Gewalt, Zwang oder eine akute Krise, muss `sensitiveTopics` das Thema nennen. Ein Zuständigkeitsverweis (`responsibility`) ist dann empfohlen, aber nicht Pflicht (Hinweis, kein Blocker); ist er gesetzt, steht er auf jeder Seite. Inhalte zum Umgang mit Krisen (Frühwarnzeichen, Krisenplan) sind Psychoedukation und zulässig. Mögliche Kurznummern wie 143 oder 144 meldet das Gate als Hinweis zur Prüfung. Zusätzliche Hinweise (keine Blocker) aus dem Website-Review Teil 1: «ß» und „…“ statt «…», deutsche Rechtsbegriffe und Angebote (z. B. Jugendamt, rechtliche Betreuung, Pflegegrad), etikettierende Bezeichnungen (z. B. «der Schizophrene»). Das ist eine Vertragsprüfung nach Stichwörtern, keine medizinische Triage.

## Druck: lange Abfolgen kennzeichnen

Im Druck bleibt jede Figur als Ganzes auf einer A4-Seite (Abschnitt «Technische Qualität», F). Ist eine Abfolge mit ihrer Liste länger als eine A4-Seite, bekommt ihre Figur in `content/<id>.html` das Kennzeichen `data-print-split` (Paket 2026.10.2, P-1, nachgebessert 15.10.2026):

```html
<figure class="puk-vis-figure" data-visual-id="v-ablauf" data-visual-type="process" data-print-split aria-labelledby="…" aria-describedby="…">
```

- **Nur bei Abfolgen:** Prozesspfad (`process` mit `ol.puk-vis-path`), Entscheidungsweg (`decision` mit `ol.puk-vis-decision`) und Modell in Schritten (`stepwise-model` mit `.puk-vis-build__steps`). An anderen Mustern, an einer Figur ohne Schrittliste oder an einem anderen Element als der Figur blockiert das Gate (`print-split`).
- **Ausdrücklich setzen, ohne Schwelle nach Schrittzahl:** Ob eine Abfolge länger als eine A4-Seite ist, zeigt der Druck (A4, Rand 0 bis 15 mm, 80 bis 110 %). Kurze Abfolgen tragen kein Kennzeichen; sie rücken im Druck als Ganzes auf die nächste Seite.
- **Wirkung im Druck:** Die Abfolge bricht zwischen ihren Schritten um, jeder Schritt bleibt zusammen. Titel, Kernaussage, Kurztext und der erste Schritt stehen auf einer Seite, die Kennzeichnung folgt direkt auf den letzten Schritt, die Vertiefung danach. Dafür stehen die Schritte untereinander wie auf schmalen Bildschirmen; beim Modell in Schritten steht die Zeichnung über den Schritten. Am Bildschirm ändert sich nichts.
- **Im Markup, nicht im Plan:** Das Kennzeichen steht an der Figur in `content/`; der Build verändert Figuren nicht. So wirkt es auch in Websites ohne diesen Build und in den Kopiervorlagen unter `../longform/`.
- **Ohne Kennzeichen** bleibt auch eine lange Abfolge unteilbar wie in 2026.10.1; vor ihr kann dann eine leere Seite entstehen. Räumliche Darstellungen und Gegenüberstellungen bleiben immer unteilbar.

## Referenzfälle

- `beziehungen-verstehen.html`: Kreislauf mit markiertem Ansatzpunkt und Illustrationsplatzhalter.
- `behandlung-verstehen.html`: Prozesspfad mit markiertem Ansatzpunkt und Vergleich · kein Sicherheitszugang (keine sensiblen Themen).
- `unterstuetzung-finden.html`: Entscheidungsweg in zwei Fragen, Beziehungskarte (Muster I), Kontakt-Platzhalter mit häufigen Fragen als Akkordeon.
- Alle Seiten: Zuständigkeitsverweis und Hinweis «ersetzt keine Abklärung» in der Fusszeile (site-weit).
- `index.html`: Einstieg mit Lesepfaden; der Vollbericht ist ein Download-Platzhalter.
- `seitenvorlage.html`: Entwurf, nicht in der Navigation.
- `impressum-datenschutz.html`: Impressum und Datenschutz, nicht in der Navigation, in jeder Fusszeile verlinkt.
- `404.html`: Seite «nicht gefunden» mit Rückweg zur Übersicht (Standardwortlaut, Entscheid 11.10.2026).

Stand 16.10.2026 (Build r4-10: nur die Kennung erhöht, weil die Nachbesserung vom 15.10.2026 das Gate geändert hat; Seiten und Befunde sonst gleich wie mit r4-9; eine Seite, die noch mit r4-9 gebaut ist, meldet die Prüfung `build`. Davor Build r4-9, Paket 2026.10.2: Redaktionsstatus im Produktionsgate, Fusszeile ohne Versionszeile, Name des Logo-Links, `gate.html` mit Prüfbericht und Selbsttest an der Referenz, Export mit Schriftlizenz, `_redirects` und `robots.txt`; Druckregeln, Verweis im Text und Silbentrennung in `components/bundle.css`; nachgebessert 15.10.2026: Figuren im Druck unteilbar, Kennzeichen `data-print-split` für lange Abfolgen):
- **Entwurfsgate:** 0 blockierende Befunde; 12 Hinweise (neu: Redaktionsstatus ohne Datum, weil der Starter eine synthetische Referenz ist).
- **Produktionsgate:** blockiert die offenen Freigaben, den Redaktionsstatus ohne Datum und den unvollständigen Prüfbericht. Das ist erwartet.
- **Selbsttest:** 72 von 72 bestanden, auch in Kopien des Starters und in `gate.html` (neu in r4-9: Redaktionsstatus «Entwurf», ohne Datum und mit Datum; Nachbesserung 15.10.2026: «Entwurf vom 15.10.2026», der nur die Regel «Entwurf» trifft, Kennzeichen `data-print-split` am Prozesspfad zulässig, an einer Gegenüberstellung und an der Hülle blockiert).

Davor Stand 11.10.2026 (Build r4-8: Befunde der Prüfung der Website «Depression» – Interaktionsskript bei Vertiefungen, Name des Logo-Links, Menü ab sieben Punkten, Impressum und Datenschutzerklärung, 404-Seite, Hinweis `lang-part`, kanonischer Link nicht mehr als externe Quelle gewertet; Build r4-7: eigene Zeichnungen mit `.puk-vis-scene` gelten als Illustration ohne Platzhalter; Build r4-6: Bildsprache «Ein Bild, eine Idee»):
- **Entwurfsgate:** 0 blockierende Befunde.
- **Produktionsgate:** blockiert die offenen Freigaben und den unvollständigen Prüfbericht. Das ist erwartet. Der Prüfbericht braucht neu auch die Zeilen R1, R2 und R3 (Abschnitt «Pre-Release-Audits»); R3 nur bei «Go» auf «erledigt».
- **Selbsttest:** 65 von 65 bestanden, auch in Kopien des Starters (neu in r4-8: Vertiefung ohne Interaktionsskript, Logo-Link-Name, Menü, Impressum und Datenschutzerklärung, Impressum als E-Mail-Link, 404-Seite, 404-Seite als Entwurf, fremdsprachiger Quellentitel, kanonischer Link, externes «alternate stylesheet»; seit r4-7: Illustration ohne eigene Zeichnung und ohne Bildstatus; seit r4-6: Visualisierungsplan ohne Wirkung `resonance`; seit r4-5: Produktion blockiert ohne «Go» im Freigabe-Audit R3; seit r4-4: Verweis im Text mit eigenem Wortlaut, auf Seite ohne sensibles Thema, in einer Vertiefung, ungeprüft in Produktion).

Offen sind reale Screenreader-Läufe, ein Test mit Hardwaretastatur sowie Fach-, Bild- und Absenderfreigaben.
