# Tag

Schlagwort. Mit Aktion ein button, sonst ein span.

Schlagwort oder Filter-Chip mit Kontur; gewählt wird er schwarz gefüllt.

```jsx
<Tag selected onClick={toggle}>Ambulant</Tag>
<Tag onRemove={remove}>Zürich West</Tag>
```

Typen: `components/Tag/Tag.d.ts`. Aufruf über `window.PUKWeb.Tag`.

**Interaktion:** Als Filter-Chip (onClick) Umschalter mit aria-pressed; auf Touch-Geräten 44 px hoch. Trefferzahl in einer Live-Region melden, Rücksetzweg anbieten. Regeln: Abschnitt «Interaktionskonzept».
