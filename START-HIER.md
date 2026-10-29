# PUK Website-Profil · Start

<!-- profil:stand -->
**Version 2026.10.12 · Stand 29.10.2026.** Verbindlich ist dieses Repository. [Prüfbericht](PRUEFBERICHT.md) und [Abschlussentscheide](ABSCHLUSSENTSCHEIDE.md) dokumentieren den abgeschlossenen Profilstand.
<!-- /profil:stand -->

## Einrichten

Node ab 20, Python ab 3.11. Die erzeugten Websites selbst haben keine Paketabhängigkeiten.

```sh
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements.txt
npm ci
npx playwright install chromium
npm run build
```

Ein vorhandener Browser lässt sich über `CHROMIUM_EXECUTABLE_PATH=/pfad/zu/chromium` wählen. Auf einem frischen Linux-System installiert `npx playwright install --with-deps chromium` auch die benötigten Systembibliotheken.

## Neue Website mit einem Befehl

Im Repository-Stamm:

```sh
npm run neu -- mein-thema --titel "Mein Thema"
npm run vorschau
```

Unter `http://127.0.0.1:8000/websites/mein-thema/` steht die bereits gebaute Vorschau. Das neue Projekt enthält vier Seiten: Übersicht, eine Themenseite, Impressum und Datenschutz sowie 404. Keine vorgegebenen klinischen Themen und keine automatischen Krisenblöcke. Bestehende Ordner werden nicht überschrieben. Mit `--ziel neuer-ordner` lässt sich ein anderes Ziel wählen.

1. `websites/mein-thema/content/` mit eigenen Inhalten füllen.
2. Titel, Navigation, Visualisierungsplan und passende Kontakte in `site.config.json` festlegen. Weitere Telefonnummern und Telefonlinks sind erlaubt; Krisenkontakte je Thema bewusst wählen.
3. Den Prüfbericht für dieses neue Projekt mit tatsächlichen Nachweisen ausfüllen. Entwurfsstatus und fehlende Freigaben bleiben bis dahin Produktionsblocker.

Danach bauen, prüfen und lokal exportieren:

```sh
npm run build:site -- --site websites/mein-thema
npm run pruefen -- --site websites/mein-thema
npm run export -- out-mein-thema --site websites/mein-thema
```

Ein Entwurfsexport dient der lokalen Vorschau. Vor einer Veröffentlichung mit `--production` prüfen und exportieren:

```sh
npm run pruefen -- --site websites/mein-thema --production
npm run export -- out-mein-thema --site websites/mein-thema --production
```

Ein Export ist noch keine Veröffentlichung. Der Zielordner muss neu, leer oder ein erkennbarer früherer Export sein; fremde Dateien werden nicht ersetzt. Neue Projekte unter `websites/` gehören nicht zum Profilpaket.

## Gestaltung auswählen

Vor dem Ausarbeiten [Einstieg und Seitenrahmen](guidelines/08-einstieg-und-seitenrahmen.md) lesen: ausgewogene Titel, kompakter mobiler Kopf und ein früher hilfreicher Einstieg. Diese Lehren aus den bestehenden Websites sind bereits in den Standardvorlagen umgesetzt. Den tatsächlichen Titel bei 375 × 812 px ansehen und zusätzlich mit 200 % Schrift prüfen.

Die [Musterauswahl](MUSTER-WAEHLEN.md) führt von der Leserfrage zu konkreten Beispielen. Lokal zeigt `http://127.0.0.1:8000/` die Startvorlage, das vollständige Profilbeispiel, Erklärgrafiken, Interaktionen, UI-Kit und Prüfansicht. Die ausführliche Musterwebsite bleibt als Referenz erhalten.

## Profil ändern und prüfen

| Änderung | Verbindliche Quelle |
| --- | --- |
| Profilversion und Build-Stände | `package.json`: `version` und `pukProfil` |
| Komponententypen | `quellcode/komponenten/src/components/**/*.d.ts` |
| Startseite | `quellcode/profil/index.html` |
| Musterauswahl | `quellcode/profil/muster.json` und deren HTML-Hülle |
| Regeln und Gestaltungswerte | `README.md`, `guidelines/`, `tokens/` und Komponenten-CSS |

```sh
npm run generieren
npm run build
npm test
npm run test:ui
npm run package
npm run check:package
```

`generieren` aktualisiert Einzel- und Sammeltypen, Standangaben, Versionsmetadaten und Musterübersichten. `check:generated` prüft dieselben Ausgaben ohne Schreibzugriff. Generierte Dateien nicht von Hand bearbeiten.

GitHub führt die Prüfungen bei jedem Push und Pull Request aus. Die Aktion «Profil prüfen» lässt sich auch manuell starten. Sie prüft zuerst, ob die eingecheckten Ableitungen aktuell sind, und danach Build, Tests, UI-Matrix und Paket. `npm run check:docs` prüft die lokalen Dateiziele aktiver Markdown-Anleitungen und läuft auch vor Tests und Paketbau; der versionierte Matrixverweis wird automatisch erzeugt. Der UI-Bericht wird als Laufartefakt aufbewahrt. Lokal steht er unter `out-pruefung/ui-matrix.json`.

Die Paketbenennung und Zeitstempel stammen aus `package.json`. Der Generator schliesst Archiv, Abhängigkeiten, neue Website-Projekte und lokale Arbeitsausgaben aus. Historische Berichte sind abgeschlossene Quellen; keine private Artefakt-Synchronisierung oder externe Abnahme bleibt für diesen technischen Profilstand offen.
