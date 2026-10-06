# Input

Einzeiliges Eingabefeld. Fokus färbt den Rahmen blau, Fehler über invalid.

Fokus mit blauem Rahmen und 1-px-Innenring; Fehler mit rotem Rahmen und Fehlertext in `text-danger` – nie nur Farbe.

```jsx
<Input placeholder="Vorname" />
<Input invalid defaultValue="max@" />
```

Typen: `components/Input/Input.d.ts`. Aufruf über `window.PUKWeb.Input`.
