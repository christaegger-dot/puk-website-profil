# Button

Hauptaktion. Schwarz als Standard, PUK-Blau als Akzent, Hover wechselt den Grund.

```jsx
<Button variant="primary" icon="arrow-right" iconPosition="right">Termin anfragen</Button>
```

Varianten: primary (Schwarz), accent (Blau), secondary (schwarze Kontur), ghost, danger (Signalrot), inverse (Weiss, für blaue oder schwarze Gründe). Grössen sm, md, lg. Ecken 3 px (`radius-sm`) – nie Pillenform. Pro Ansicht genau eine primäre Aktion.

Typen: `components/Button/Button.d.ts`. Aufruf über `window.PUKWeb.Button`.

**Interaktion:** Auf Touch-Geräten (pointer: coarse) mindestens 44 px hoch. Hover und Gedrückt nur über Farbe, kein Skalieren. Link führt zu einem Ort, Button löst eine Aktion aus. Regeln: Abschnitt «Interaktionskonzept».
