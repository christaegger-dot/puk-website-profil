# RadioGroup

Gruppe mit role="radiogroup" und zugänglichem Gruppennamen.

Einfachauswahl mit sichtbarem, zugänglichem Gruppennamen. `RadioGroup` statt einzeln
zusammengesetzter Radios verwenden, damit Name, Abstände und `radiogroup`-Semantik stimmen. Für zwei bis fünf Optionen; mehr → `Select`.

```jsx
<RadioGroup
  name="kontaktweg"
  label="Bevorzugter Kontaktweg"
  value={value}
  onChange={setValue}
  options={[
    { value: 'telefon', label: 'Telefon' },
    { value: 'email', label: 'E-Mail' },
  ]}
  direction="column"
/>
```

`direction="row"` nur für kurze Beschriftungen, die ohne Umbruch lesbar bleiben. Die sichtbare
`label` ist vorzuziehen; liefert der Kontext den Namen bereits, stattdessen ein gültiges
`aria-label` oder `aria-labelledby` angeben.

Typen: `components/RadioGroup/RadioGroup.d.ts`. Aufruf über `window.PUKWeb.RadioGroup`.
