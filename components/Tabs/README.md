# Tabs

Registerkarten mit Pfeiltastennavigation und einem Tab-Stopp.

Der aktive Reiter ist mit einer 2-px-Linie in PUK-Blau unterstrichen und schwarz beschriftet.

```jsx
<Tabs items={['Übersicht','Angebot','Team']} onChange={setTab}>{panel}</Tabs>
```

Typen: `components/Tabs/Tabs.d.ts`. Aufruf über `window.PUKWeb.Tabs`.

**Interaktion:** Ein Tab-Stopp, Pfeiltasten und Pos1/Ende wechseln. Reiter mindestens 44 px hoch; unter 760 px scrollt die Leiste waagrecht und hält den aktiven Reiter sichtbar. Nur für gleichrangige Varianten desselben Inhalts, höchstens vier – sonst Abschnitte oder Akkordeon. Regeln: Abschnitt «Interaktionskonzept».
