# Radio

Einzelnes Optionsfeld. Für Gruppen RadioGroup verwenden.

Einzelnes Optionsfeld; in der Regel `RadioGroup` verwenden, damit Gruppenname und Abstände stimmen.

```jsx
<RadioGroup name="anrede" value={v} onChange={setV} options={['Frau','Herr','Keine Angabe']} direction="row" />
```

Typen: `components/Radio/Radio.d.ts`. Aufruf über `window.PUKWeb.Radio`.
