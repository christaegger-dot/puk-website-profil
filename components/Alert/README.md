# Alert

Hinweis im Seitenfluss, ohne Animation und dauerhaft sichtbar – im Gegensatz zum schwebenden Toast. Töne: info, success, warning, danger; Info, Warnung und Fehler unterscheiden sich durch Icon und Titel, nicht nur durch Farbe.

```jsx
<Alert tone="info" title="Vor dem Gespräch">Notieren Sie die Fragen, die Sie zuerst besprechen möchten.</Alert>
```

Typen: `components/Alert/Alert.d.ts`. Aufruf über `window.PUKWeb.Alert`.

**Auf Websites:** Innerhalb von `.puk-web-page` übernimmt der Lesetext dieser Komponente die Seitenschrift (`web-body`, 21 px Light, Hausschwarz; unter 760 px 19 px). Ausserhalb gilt die UI-Skala. Beispiel: Karte «Lesen und Bedienen».

**Kontaktauswahl:** kein automatischer Notfallblock. Telefonnummern und Kriseninformationen sind bei bewusstem Entscheid für das konkrete Thema erlaubt; die Standardbeispiele bleiben neutral.
