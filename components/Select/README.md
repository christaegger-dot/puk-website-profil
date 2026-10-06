# Select

Native Auswahlliste mit Platzhalter, Fehler- und gesperrtem Zustand.

Native Auswahlliste mit PUK-Chevron, damit Mobilgeräte ihre eigene Auswahl zeigen; `options` als Strings oder `{value, label}`. Für Navigation nie `Select`, sondern Links oder `DisclosureMenu`; bei weniger als fünf Optionen `RadioGroup`.

```jsx
<Select placeholder="Klinik wählen" options={['Erwachsenenpsychiatrie','Alterspsychiatrie']} />
```

Typen: `components/Select/Select.d.ts`. Aufruf über `window.PUKWeb.Select`.
