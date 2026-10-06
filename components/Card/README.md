# Card

Flach, eckig, Haarlinie, kein Schatten. Varianten wechseln den Grund.

Flacher Behälter für Teaser, Kontaktblöcke und Angebotsübersichten – eckig, Haarlinie, kein Schatten. Karten sind Auswahlobjekte, keine Erklärung: aufbauende Inhalte nicht in Karten zerlegen (Abschnitt «Visuelle Wissensvermittlung»).

```jsx
<Card eyebrow="Angebot" title="Ambulante Behandlung" href="#">Sprechstunden an allen Standorten.</Card>
```

Varianten: default (Weiss mit Haarlinie), sunken (Hellgrau), brand (PUK-Blau), inverse (Schwarz). Nie Schatten oder gerundete Ecken.

Typen: `components/Card/Card.d.ts`. Aufruf über `window.PUKWeb.Card`.

**Auf Websites:** Innerhalb von `.puk-web-page` übernimmt der Lesetext dieser Komponente die Seitenschrift (`web-body`, 21 px Light, Hausschwarz; unter 760 px 19 px). Ausserhalb gilt die UI-Skala. Beispiel: Karte «Lesen und Bedienen».
