# PUK Website-Profil · Projektpaket

Fachstellen-Profil 2026.10 (Stand 06.10.2026) – lauffähige Fassung des Design-Systems «PUK Zürich Website-Profil» für die Websites der Fachstelle Angehörigenarbeit. Alle Pfade sind aufgelöst: Vorlagen, Starter und UI-Kit laufen ohne Anpassung.

## Ansehen

Den Ordner über einen lokalen Webserver öffnen (Dateien direkt im Browser zu öffnen reicht nicht, weil Schriften und Skripte geladen werden):

```sh
cd puk-website-profil
python3 -m http.server 8000      # oder: npx serve
```

Dann im Browser:

- `http://localhost:8000/ui_kits/website/` – Referenzansichten des Kits (zeigt auch Kit-Varianten, die für die Fachstelle nicht gelten)
- `http://localhost:8000/ui_kits/website/qa.html` – automatische Prüfansicht
- `http://localhost:8000/templates/website/psychoeducation-site-starter/` – Psychoedukations-Starter
- `http://localhost:8000/templates/website/longform/erklaermuster.html` – Erklärmuster G–K
- `http://localhost:8000/templates/website/interaktion/beispiel.html` – Akkordeon, Reiter, Menü, Dialog ohne React

## Eine neue Website bauen

1. Den Ordner `templates/website/psychoeducation-site-starter/` innerhalb von `templates/website/` kopieren, z. B. nach `templates/website/stress-verstehen/` (dort bleiben die Pfade zu Stylesheets und Skript gültig).
2. `site.config.json` ausfüllen (Absenderin, Seiten, Visualisierungsplan, optional Zuständigkeitsverweis und `siteUrl`) und die Inhalte in `content/` schreiben.
3. Bauen und prüfen (Node 18 oder neuer, keine Installation nötig):

   ```sh
   node tools/build.mjs
   node tools/gate.mjs --production
   ```

4. Veröffentlichen: `node tools/export.mjs ../../../../stress-verstehen-web --production` schreibt eine eigenständige Website (Seiten, `css/site.css`, Schriften, `js/interaktion.js`, `_headers`, `sitemap.xml`). Diesen Ordner auf Netlify hochladen oder als eigenes Repository führen.

Der Ablauf von der Planung bis zur Freigabe steht im Abschnitt «Prüfung und Freigabe» (`guidelines/00-ablauf-pruefung-und-freigabe.md`).

## Inhalt

| Ordner / Datei | Inhalt |
| --- | --- |
| `README.md`, `guidelines/` | Brand Book und alle Abschnitte des Design-Systems |
| `styles.css` | Einstieg für Seiten: Schriften + `components/bundle.css` |
| `components/` | `bundle.css` (Tokens, Hülle, Komponenten, Druck), `bundle.js` (26 React-Komponenten, `window.PUKWeb`), `interaktion.js` (HTML-Fassungen ohne React), Typen und Beschreibungen |
| `tokens/`, `tokens.json` | Quell-CSS und Tokens |
| `fonts/`, `assets/fonts/` | Rubik (WOFF2, OFL-Lizenz) |
| `assets/logo/` | statische Logos (SVG) |
| `templates/website/` | Starter, Langform- und Erklärmuster, Anwendungsmuster, Interaktion, Seitenhülle |
| `ui_kits/website/` | Referenzansichten und Prüfansicht |
| `quellcode/komponenten/` | React-Quellen; `npm install && node build.mjs ../../components/bundle.js` baut `bundle.js` neu |
| `_ds_bundle.js`, `platform/` | Laufzeit für das UI-Kit (React 18 lokal, MIT-Lizenz); nicht in Websites übernehmen |

Nicht enthalten: das animierte Logo, das auf Websites nicht verwendet wird (Asset-Gruppe «Logos» im Design-System), und die Vorschaukarten des Design-Systems.

## Grenzen

Das Paket ist ein abgeleitetes Arbeitsprofil, keine von der PUK-Kommunikation freigegebene Vorlage. Alle Inhalte in Vorlagen und Starter sind Musterinhalte und fachlich freizugeben. Offene Entscheide: README, Abschnitt «Offene Punkte».
