# IconButton

Aktion nur mit Icon. label ist Pflicht und wird zum zugänglichen Namen.

Quadratische Aktion ohne sichtbare Beschriftung – für Werkzeugleisten, Schliessen von Dialogen und Aktionen in Tabellenzeilen.

```jsx
<IconButton icon="x" label="Schliessen" />
```

`label` immer angeben. ghost für dichte Werkzeugleisten, outline neben Buttons mit Kontur, solid nur als einzelne dominante Aktion.

Typen: `components/IconButton/IconButton.d.ts`. Aufruf über `window.PUKWeb.IconButton`.

**Interaktion:** Auf Touch-Geräten mindestens 44 × 44 px. Deaktiviert über die Tokens action-disabled-* statt Transparenz. Name zusätzlich als Tooltip, wenn das Icon nicht eindeutig ist. Regeln: Abschnitt «Interaktionskonzept».
