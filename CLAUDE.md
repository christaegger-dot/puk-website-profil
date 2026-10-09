# CLAUDE.md · PUK Website-Profil 2026.10

Dieses Repository enthält das Projektpaket des **PUK Website-Profils** (Fachstellen-Profil 2026.10) für die psychoedukativen Websites der **Fachstelle Angehörigenarbeit, Psychiatrische Universitätsklinik Zürich**. Neue Websites der Fachstelle entstehen hier aus dem Psychoedukations-Starter.

## Zuerst lesen

1. `START-HIER.md` – Aufbau, Ansehen, neue Website, Veröffentlichen
2. `README.md` – Brand Book mit Verbindlichkeitsebenen, offenen Punkten und Änderungsprotokoll
3. `guidelines/00-ablauf-pruefung-und-freigabe.md` – Ablauf von der Planung bis zur Freigabe
4. Je nach Aufgabe den passenden Abschnitt in `guidelines/` (Inhalt, Sprache, visuelle Wissensvermittlung, Interaktion, Barrierefreiheit, technische Qualität)

Quelle der Wahrheit ist das Design-System-Artefakt «PUK Zürich Website-Profil» auf claude.ai. Dieses Repository ist eine Arbeitskopie davon.

## Struktur

| Pfad | Inhalt |
| --- | --- |
| `templates/website/psychoeducation-site-starter/` | Starter: `site.config.json`, `content/`, `tools/` (build, gate, export), `_headers` |
| `templates/website/<website>/` | jede neue Website als Kopie des Starters, hier im selben Ordner (Pfade bleiben gültig) |
| `components/` | `bundle.css` (Tokens, Hülle, Komponenten, Druck), `bundle.js` (React, `window.PUKWeb`), `interaktion.js` (HTML-Komponenten ohne React) |
| `templates/website/longform/` | Muster A–F (`visualisierungsmuster.html`) und G–K (`erklaermuster.html`) zum Kopieren |
| `templates/website/interaktion/` | Markup für Akkordeon, Reiter, Dropdown-Menü, Dialog |
| `guidelines/`, `README.md` | Regeln (nicht hier ändern, siehe unten) |
| `quellcode/komponenten/` | React-Quellen; `npm install && node build.mjs ../../components/bundle.js` |
| `ui_kits/website/` | Referenzansichten des Original-Kits und `qa.html` (Prüfansicht) |

## Befehle

Node 18 oder neuer, ohne Installation. Im Ordner der jeweiligen Website:

```sh
node tools/build.mjs                       # Seiten aus site.config.json + content/ bauen, Entwurfsgate
node tools/gate.mjs --production           # Produktionsgate: blockiert offene Freigaben und unvollständigen Prüfbericht
node tools/gate.mjs --selftest             # Nachweis, dass das Gate jede bekannte Fehlerklasse erkennt
node tools/export.mjs <ziel> --production  # eigenständige Website für Netlify (ausserhalb des Starters)
```

Ansehen: im Repository-Stamm `python3 -m http.server 8000` (oder `npx serve`), dann `http://localhost:8000/templates/website/<website>/`. Prüfansicht: `http://localhost:8000/ui_kits/website/qa.html`.

## Arbeitsregeln

- **Inhalte in `content/<id>.html` und `site.config.json` ändern, nie die gebauten Seiten.** Kopf, Navigation, Absenderin, Fusszeile, Meta und Interaktionsskript entstehen beim Build.
- **Absenderin** auf jeder Seite: Fachstelle Angehörigenarbeit · Psychiatrische Universitätsklinik Zürich · `angehoerigenarbeit@pukzh.ch`.
- **Kein Krisenzugang:** keine Telefonnummern, keine `tel:`-Links, kein Notfallblock, keine Seite «Hilfe in der Krise». Höchstens der site-weite Zuständigkeitsverweis aus `site.config.json` › `responsibility` – und direkt nach einer Handlungsanleitung für akute Lagen (z. B. «fragen Sie direkt nach Suizidgedanken») der Verweis im Text, nur über den Platzhalter `<p data-responsibility-inline></p>` (Wortlaut aus `responsibility.inline`, nie selbst formulieren).
- **Fachliche Aussagen nicht still ändern.** Fragwürdiges als «Prüfbedarf» markieren. Inhaltliche Entscheide trifft die Fachstelle; Struktur, Reihenfolge und Technik darf Claude entscheiden und begründen.
- **Visualisierungsplan** in `site.config.json` › `visualPlan` vor dem Bau: eine Zeile pro Abschnitt (`sectionId`); jede Darstellung mit `understood` (Was versteht die Zielgruppe dadurch besser als durch einen kurzen Text allein?); Kreislauf, Prozesspfad und Modell in Schritten mit `entryPoint` (Ansatzpunkt für Angehörige oder «entfällt: Begründung»).
- **Figuren:** jede mit Kernaussage, kurzem Erklärtext und – wo sinnvoll – Vertiefung; die Hauptaussage für Angehörige nie nur in der Vertiefung. Ansatzpunkte beschreiben eigene Möglichkeiten, nie Verantwortung für Behandlung oder Verlauf.
- **Technik:** keine externen Schriften, Skripte, CDNs, kein Tracking; keine Inline-Skripte und keine `style`-Attribute (Content-Security-Policy in `_headers`); Farben nur über Tokens; WCAG 2.2 AA.
- **Fotos** nur im Einzelfall mit Einwilligung und Bildnachweis; Normalfall sind Erklärmuster und eigene Illustrationen.
- **Leitlinien, Tokens und Komponenten nicht in diesem Repository ändern.** Änderungen am Profil im Design-System-Artefakt vornehmen, daraus ein neues Paket erzeugen und hier ersetzen (Version im Dateinamen, Änderungsprotokoll im README). Websites unter `templates/website/<website>/` bleiben dabei erhalten.

## Bauen und Prüfen

Bauen und Prüfen sind getrennt (Abschnitt «Prüfung und Freigabe», Profilentscheid 08.10.2026). Ein bestandenes Gate heisst nicht, dass die Website gut ist.

- **Nach jedem Bau, ohne Nachfrage:** Selbstprüfung in `PRUEFBERICHT.md` der Website – Visualisierungs-Check als Tabelle, je Punkt Ergebnis und Beleg (Seite und Abschnitt, Figur, Zitat) – und in der Antwort die nicht erfüllten Punkte nennen. Ein Punkt ohne Beleg gilt als nicht geprüft. Keine Prüfstufe als «erledigt» eintragen.
- **Prüfen nur in einer eigenen Sitzung:** Die Stufen W1, W2, S, Visualisierungs-Check, Bedienung und W3 prüft eine Sitzung, die die Website nicht gebaut hat (Auftrag im Abschnitt «Prüfung und Freigabe»). Sie ändert keine Inhalte und keinen Code und committet nur den Prüfbericht.
- **Kein Merge ohne Prüfbericht:** Ein Pull Request mit einer neuen oder geänderten Website enthält `PRUEFBERICHT.md` im aktuellen Stand und nennt in der Beschreibung die offenen Stufen. Solange Stufen offen sind, bleibt er ein Entwurf.
- **Keine Veröffentlichung ohne vollständigen Prüfbericht:** Das Produktionsgate blockiert sonst.
- **Prüftiefe:** Bei Umbauten vergleicht die Prüfsitzung mindestens 20 Aussagen je Etappe mit dem Bestand, rechnet Kennzahlen der bauenden Sitzung nach und füllt den Visualisierungs-Check je Figur aus.
- **Bauende Sitzung beim Straffen:** Kürzungsquoten an der alten Seite allein messen, nicht an Seite plus inhaltsgleichen Handouts. Der Abgleich nennt jeden entfallenen Satz, auch innerhalb eines «übernommenen» Abschnitts.

## Vor dem Commit

- `node tools/build.mjs` ohne blockierende Befunde; bei Änderungen am Gate auch `--selftest`.
- Bei interaktiven Elementen: einmal mit Tastatur, bei 320 px und mit reduzierter Bewegung prüfen.
- Keine Exporte, Arbeitsstände, Fallmaterial oder Zugangsdaten committen.

## Reviews

Die Review-Prompts der Fachstelle (W1 Fachliche Prüfung, W2 Gesamtkohärenz, S Sprach-Review, W3 Code-Review) gelten in dieser Reihenfolge, jeweils in einer Sitzung, die nicht gebaut hat; W3 ist ein reines Review ohne Dateiänderungen bis zur Freigabe. Ergebnisse mit Beleg in `PRUEFBERICHT.md`. Kriterien im Design-System: «Fachliche Qualität und Haltung», «Gesamtkohärenz und Aufbau», «Sprache und Ton», «Technische Qualität».

## Logo

Im Seitenkopf steht immer das statische Logo. Das animierte Logo wird auf Websites nicht verwendet (Profilentscheid 08.10.2026, WCAG 2.2.2).
