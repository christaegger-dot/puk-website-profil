# PUK Website-Profil · Start

**Version 2026.10.3 · abgeschlossen am 17.10.2026.** Verbindlich ist dieses Repository. Alle früheren Pendenzen sind in den [Abschlussentscheiden](ABSCHLUSSENTSCHEIDE.md) erledigt oder ausgeschlossen; der [Prüfbericht](PRUEFBERICHT.md) nennt die tatsächlichen Nachweise.

## Einrichten und prüfen

Node ab 20, Python ab 3.11. Die erzeugten Websites selbst haben keine Paketabhängigkeiten.

```sh
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements.txt
npm ci
npx playwright install chromium
npm run build
npm test
npm run package
npm run check:package
```

Ein vorhandener Browser lässt sich über `CHROMIUM_EXECUTABLE_PATH=/pfad/zu/chromium` wählen. Die Paketversionen sind festgelegt; der Komponenten-Build erzeugt 26 React-Komponenten unter `window.PUKWeb`.

## Lokal ansehen

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Im Browser `http://127.0.0.1:8000/` öffnen. Die Startseite verlinkt Starter, vollständiges Profilbeispiel, Erklärmuster und Prüfansicht. Der Starter enthält absichtlich Eingabeparameter und keine offenen Projektaufträge. Sein Entwurfsgate besteht; das Produktionsgate sperrt die ungefüllte Vorlage.

## Eine neue Website

Den Ordner `templates/website/psychoeducation-site-starter/` innerhalb von `templates/website/` kopieren. Seitenvertrag und `content/` mit belegten Angaben füllen; passende Kontakte je Thema wählen. Keine automatisch ergänzten Notfall- oder Krisenblöcke.

Im Stammordner mit dem gewünschten Website-Ordner:

```sh
node templates/website/psychoeducation-site-starter/tools/build.mjs --site templates/website/meine-website
node templates/website/psychoeducation-site-starter/tools/gate.mjs --site templates/website/meine-website --production
node templates/website/psychoeducation-site-starter/tools/export.mjs out-meine-website --site templates/website/meine-website --production
```

Das Produktionsgate verlangt einen zutreffenden Prüfbericht und die nötigen Inhaltsfreigaben für diese Website. Ein Export ist noch keine Veröffentlichung. Der Zielordner ist neu, leer oder ein erkennbarer früherer Export mit `.puk-export.json`; fremde Verzeichnisse werden nicht ersetzt.

Das Profilbeispiel verwendet dieselben Werkzeuge und benötigt keine klinischen Angaben. Details in seinem [README](templates/website/profilbeispiel/README.md).

## Bestand und Paket

Aktiv sind Regeln, Komponenten, Gestaltungswerte, Vorlagen, Quellen, Tests und das fachneutrale Beispiel. `archiv/` enthält die frühere Historie und Website-Kopien; deren eigenständige Repos werden hier nicht bearbeitet. Das Paket `puk-website-profil-2026.10.3.zip` enthält den aktiven Stand und eine separate SHA-256-Datei. Archive und lokale Arbeitsverzeichnisse werden nicht mitgeliefert.

Keine private Artefakt-Synchronisierung, keine zusätzliche Plattforminstallation und kein externer Freigabeauftrag sind für diesen abgeschlossenen Profilstand erforderlich.
