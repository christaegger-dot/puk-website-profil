# Alert

Hinweis im Seitenfluss, ohne Animation und dauerhaft sichtbar – im Gegensatz zum schwebenden Toast. Töne: info, success, warning, danger; Info, Warnung und Fehler unterscheiden sich durch Icon und Titel, nicht nur durch Farbe.

```jsx
<Alert tone="info" title="Angebot für Angehörige">Die Beratung ist kostenlos und unabhängig davon, ob die erkrankte Person in Behandlung ist.</Alert>
```

Typen: `components/Alert/Alert.d.ts`. Aufruf über `window.PUKWeb.Alert`.

**Auf Websites:** Innerhalb von `.puk-web-page` übernimmt der Lesetext dieser Komponente die Seitenschrift (`web-body`, 21 px Light, Hausschwarz; unter 760 px 19 px). Ausserhalb gilt die UI-Skala. Beispiel: Karte «Lesen und Bedienen».

**Profilentscheid 06.10.2026:** `tone="emergency"` stammt aus dem Kit (Notfalldienst der Klinik) und wird auf Websites der Fachstelle nicht verwendet; dort gibt es keinen Notfallblock, höchstens einen Zuständigkeitsverweis ohne Nummern in der Fusszeile. Der Beispieltext folgt dem Factsheet der Fachstelle (kostenlos, keine Behandlung in der PUK nötig).
