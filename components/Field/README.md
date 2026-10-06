# Field

Label, Hinweis und Fehler mit festen Abständen und korrekten Verknüpfungen.

Hülle aus Beschriftung, Hinweis und Fehler um jedes Formularelement; statt selbst geschriebener Labels verwenden, damit Abstände, Fehlerfarbe und Verknüpfungen (`aria-describedby`) stimmen. Fehler erst beim Absenden zeigen, als Text unter dem Feld.

```jsx
<Field label="E-Mail" hint="Wir antworten innerhalb von zwei Arbeitstagen." htmlFor="mail">
  <Input id="mail" type="email" />
</Field>
```

Typen: `components/Field/Field.d.ts`. Aufruf über `window.PUKWeb.Field`.
