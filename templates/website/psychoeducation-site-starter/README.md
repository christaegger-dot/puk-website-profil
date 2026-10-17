# Psychoedukations-Starter · Profil 2026.10.3

Neue Websites mit `npm run neu -- mein-thema --titel "Mein Thema"` aus dem [schlanken Starter](../minimal-starter/README.md) anlegen. Dieser Ordner bleibt die ausführliche Musterwebsite und enthält die zentralen Werkzeuge.

Abgeschlossene wiederverwendbare Vorlage mit sieben Seiten und einer Browser-Prüfansicht, Build r4-11. Die synthetischen Referenzinhalte zeigen Gestaltung und Erklärmuster. Ungefüllte Kontakte, Downloads und Bildfreigaben sind Eingabeparameter für neue Websites; das Produktionsgate sperrt sie weiterhin. Sie sind kein Backlog dieses Profilabschlusses.

Ein vollständiges fachneutrales Beispiel ohne ungefüllte Parameter steht in `../profilbeispiel/`. Verbindliche Regeln: README im Repository-Stamm; Abschlussentscheide und Prüfbericht ebenfalls dort.

## Bauen, prüfen, exportieren

Im Starter-Ordner, mit Node ab 20:

```sh
node tools/build.mjs
node tools/gate.mjs
node tools/gate.mjs --selftest
node tools/gate.mjs --production
node tools/export.mjs ../../../../out-website --production
```

`--site <ordner>` wählt bei jedem Werkzeug ausdrücklich eine andere Website. Unbekannte Optionen werden abgewiesen. Der Build erzeugt Seiten aus `site.config.json` und `content/<id>.html`; generierte HTML-Dateien nicht direkt bearbeiten. Das vollständige Produktionsbeispiel lässt sich vom Repository-Stamm mit `npm run build:example` bauen.

## Seitenvertrag

- Seitentitel, Beschreibung, Sprache `de-CH`, lokales Logo und Favicon, Stylesheets und Inhaltseigentümerin.
- `sender`: Fachstelle, Institution und sichtbare E-Mail. Der Status betrifft die Absenderangaben und behauptet keine klinische Freigabe der Inhalte.
- `pages[]`: `id`, `title`, `href`, `navLabel`, `status`, `primaryTask`, `description`, `sensitiveTopics`, `visualPlan`. Die Navigation entsteht aus veröffentlichten Seiten mit `navLabel`; ab sieben Punkten mit schmalem Menü. Die veröffentlichte `404.html` ist als `role: not-found` gekennzeichnet und gehört nicht in die Navigation.
- `legal`: eigene vorhandene Seiten für Impressum und Datenschutz; ihre Links stehen im Footer. Für eine tatsächliche Veröffentlichung müssen die Angaben das reale Hosting und die tatsächliche Datenverarbeitung beschreiben.
- `editorialStatusLabel`: zutreffender Status mit Datum; keine erfundene Fachfreigabe. Das fachneutrale Muster verwendet «Gestaltungsmuster vom 17.10.2026».
- `responsibility` und `responsibility.inline`: optionale ausdrücklich gewählte Texte mit dokumentierter Inhaltsprüfung. Sie sind im Standard nicht gesetzt und erzeugen keinen automatischen Krisenverweis. Weitere Telefonnummern und `tel:`-Links sind erlaubt. Christa entscheidet je Thema, ob Krisenkontakte hilfreich sind; Angaben vor Verwendung prüfen.
- `visualPlan`: Abschnitt, Ziel, Form, Kernbotschaft, Herkunft, Textalternative und Freigabestatus; Grafiken zusätzlich mit Erklärungsgewinn und Wirkung. Die Vorlage enthält bewusst noch ungefüllte Beispiele. Ein begründeter Textentscheid ist zulässig.
- `siteUrl`: reale Adresse erst beim konkreten Website-Projekt. Ohne sie entstehen keine Sitemap und kanonischen Links; beim lokalen Profilbeispiel ist das ein bewusster Hinweis.

## Technische Prüfung

Das Gate prüft Struktur, Links, lokale Ressourcen, Navigation, Titel, Sprache, Absender, Textalternativen und dokumentierte Freigaben. Telefonnummern und bewusst gesetzte Krisenblöcke werden nicht gesperrt. Eine Diagnose löst keinen Notfallblock aus.

Im Entwurf sind offene Inhaltsfreigaben Hinweise; in Produktion blockieren sie. Ein korrekter vollständiger Prüfbericht bleibt für eine neue Website nötig. Ein technisches Prüfergebnis ersetzt keine Fachprüfung oder Nutzerstudie.

## Druck

Figuren bleiben grundsätzlich zusammen. Lange Prozesspfade, Entscheidungswege und Modelle in Schritten können ausdrücklich `data-print-split` tragen, wenn sie ihre Schrittliste enthalten. Dann bricht die Abfolge zwischen Schritten um; die Schritte stehen im Druck untereinander. Das Kennzeichen gilt auch innerhalb einer zusätzlichen Hülle. Das Abschnittsraster wird im Druck in Blockfluss gesetzt, damit keine Raster-Leerseiten entstehen; Zwischenüberschriften bleiben beim folgenden Text.

## Export

Der Export liefert nur veröffentlichte Seiten, zusammengeführtes CSS, tatsächlich verwendete lokale Schriften mit OFL-Lizenz, Assets, gegebenenfalls Interaktionsskript und Sicherheits-Header. Projektquellen und Entwürfe werden nicht ausgeliefert. Fehlende CSS-Importe oder Ressourcen stoppen die Ausgabe. Ein fehlgeschlagener Neubau erhält den vorherigen Export; ein erfolgreicher ersetzt ihn vollständig und entfernt so veraltete Seiten.

Der Exportordner wird durch `.puk-export.json` als erzeugte Ausgabe erkannt. Ein fremder nicht leerer Ordner und die Website-Quelle selbst werden nicht überschrieben. Exportieren veröffentlicht keine Website.
