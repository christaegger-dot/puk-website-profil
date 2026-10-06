# Tooltip

Ergänzende Beschreibung bei Hover und Fokus, verknüpft über aria-describedby.

Schwarzes Label bei Hover und Fokus – für den Namen von Icon-Schaltflächen. Abkürzungen und Begriffe werden im Text erklärt, nicht im Tooltip.

```jsx
<Tooltip label="Drucken"><IconButton icon="printer" label="Drucken" /></Tooltip>
```

Typen: `components/Tooltip/Tooltip.d.ts`. Aufruf über `window.PUKWeb.Tooltip`.

**Interaktion:** Erscheint bei Hover und Fokus, bleibt offen, solange Zeiger oder Fokus auf Auslöser oder Tooltip liegen (WCAG 1.4.13), schliesst mit Escape, 150 ms Schliessverzögerung. Nur für Namen von Icon-Schaltflächen; nie für Information, die man zum Verstehen braucht (Touch hat kein Hover). Regeln: Abschnitt «Interaktionskonzept».
