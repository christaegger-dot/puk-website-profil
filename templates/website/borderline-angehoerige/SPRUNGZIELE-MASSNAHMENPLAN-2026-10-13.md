# Massnahmenpaket «konsistente Sprungziele»

Stand: 13.10.2026

## Anlass und Befund

Die lokale Website-Suche enthält 160 eindeutige Links auf einzelne Abschnitte. Vor diesem Paket führten 19 dieser Treffer auf `index`, `kurz`, `unterstuetzung`, `ueber` oder `impressum-datenschutz`. Auf diesen fünf Seiten wurde `components/interaktion.js` nicht geladen, weil sie weder Aufklappbereiche noch andere interaktive Komponenten enthielten.

**Überprüfter Befund:** Der Browser scrollte beim Öffnen eines solchen Fragmentlinks zum Ziel, setzte den programmatischen Tastaturfokus aber nicht dorthin. Die vorhandene Funktion `revealHashTarget` war auf den Zielseiten nicht verfügbar. Direkteinstiege in FAQ, Glossar und Seiten mit interaktiven Komponenten funktionierten bereits.

**Fachliche Bewertung:** Nach einem Seitenwechsel sollte der neue Lesekontext auch für Tastatur- und Screenreader-Nutzende eindeutig beginnen. Ein sichtbarer Sprung ohne entsprechenden Fokus kann besonders auf langen Seiten die Orientierung erschweren. Relevant sind insbesondere WCAG 2.2, Erfolgskriterien 2.4.3 und 2.4.11, sowie die Grundsätze Selbstbeschreibungsfähigkeit und Steuerbarkeit aus ISO 9241-110. Das Paket ist eine technische Risikoreduktion und kein Nachweis vollständiger WCAG- oder ISO-Konformität.

## Umsetzung

- `site.config.json` aktiviert `deepLinkFocus` verbindlich.
- Der Seitenvertrag bindet das bestehende progressive Interaktionsskript auf allen 22 veröffentlichten Seiten ein.
- `revealHashTarget` öffnet weiterhin eine umgebende Vertiefung, setzt den Fokus auf das Ziel beziehungsweise ihre Zusammenfassung und verändert den Inhalt ohne JavaScript nicht.
- Programmatisch fokussierte Abschnitte und Überschriften erhalten einen sichtbaren Fokusindikator; der Hauptinhalt des bestehenden Skip-Links bleibt von der seitenbreiten Markierung ausgenommen.
- Das Produktions-Gate blockiert eine fehlende Konfiguration und ein fehlendes Skript auf jeder einzelnen Seite.
- Zwei Gate-Gegenproben erkennen eine gelöschte `deepLinkFocus`-Konfiguration und das fehlende Skript auf einer sonst statischen Seite.
- `abgleich/sprungziele.mjs` prüft alle veröffentlichten Seiten, sämtliche internen Fragmentlinks und alle 160 Such-Sprungziele.
- `abgleich/sprungziele-browser.mjs` prüft die tatsächliche Fokusbewegung für den vollständigen Suchindex sowie gezielt die 19 vorher betroffenen Ziele in schmaler Darstellung.

## Akzeptanzkriterien

1. Alle 22 veröffentlichten Seiten laden genau die lokale Interaktionslogik; es gibt keine externe Laufzeitabhängigkeit.
2. Alle 160 eindeutigen Abschnittstreffer der Suche führen zu einem vorhandenen Ziel.
3. Jeder direkte Such-Sprung setzt den Tastaturfokus sichtbar auf das Ziel oder bei einer Vertiefung auf deren Zusammenfassung.
4. Eine umgebende Vertiefung ist nach dem Sprung geöffnet; das Ziel liegt im Ansichtsfenster.
5. Die 19 zuvor betroffenen Ziele bestehen zusätzlich bei 360 CSS-Pixeln.
6. Produktionsbuild und Produktions-Gate melden null blockierende Befunde; der Gate-Selbsttest erkennt beide neuen Fehlerklassen.
7. Ohne JavaScript bleiben Inhalte, Links und der native Browsersprung nutzbar. Es wird keine neue inhaltliche Aussage und keine zusätzliche Nutzerinteraktion eingeführt.

## Aussagegrenze

Die Browserprüfung misst Fokus, Sichtbarkeit und Laufzeitfehler in Chromium. Reale Screenreader-, Hardwaretastatur-, Touch- und Zielgruppentests werden gemäss dokumentiertem Institutionsentscheid nicht durchgeführt und durch dieses Paket nicht als erledigt ausgewiesen.

## Umsetzungsnachweis

- Produktionsbuild und Produktions-Gate: 22 Seiten, 0 blockierende Befunde; ein bekannter Hinweis zur bibliografischen Zeichenfolge `144`.
- Gate-Selbsttest: 73/73 Gegenproben bestanden, darunter beide neuen Fehlerklassen.
- Strukturelle Sprungzielprüfung: 22/22 Seiten mit Fokuslogik, 160/160 Such-Sprungziele und 507/507 interne Fragmentlinks ohne Fehler.
- Chromium: 160/160 Such-Sprungziele bei 1280 CSS-Pixeln mit sichtbarem Fokus; 53 umgebende Vertiefungen korrekt geöffnet; 19/19 zuvor betroffene Ziele zusätzlich bei 360 CSS-Pixeln mit sichtbarem Fokus; keine Laufzeitfehler.
- Regression: 22 Seiten in vier Darstellungen, 88 Läufe ohne Axe-Verletzung, horizontalen Überlauf, Laufzeit- oder Ressourcenfehler. Der Tastaturdurchgang meldet auf allen 22 Seiten den Sprunglink als ersten Stopp und null Fokusstellen ohne sichtbaren Fokus.
- Produktions-Export: 22 Seiten, alle 22 mit gebündeltem lokalem `js/interaktion.js`; gebündeltes CSS, drei lokale Schriftdateien, `robots.txt`, keine Sitemap.
