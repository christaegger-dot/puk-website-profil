# Table

Datentabelle mit Caption, th scope="col" und th scope="row".

Datentabelle: Kopf mit 2-px-Linie in Schwarz, Zeilen mit Haarlinien, keine Zebrastreifen. Caption ist Pflicht; die erste Spalte ist Zeilenüberschrift.

```jsx
<Table
  caption="Sprechstunden Ambulatorium"
  columns={[{ key: 'tag', label: 'Tag' }, { key: 'zeit', label: 'Zeit' }, { key: 'ort', label: 'Ort' }]}
  rows={[{ tag: 'Montag', zeit: '8–12 Uhr', ort: 'Lenggstrasse 31' }]}
/>
```

Zahlenspalten mit `align: 'right'`. Tabellen nur für tabellarische Daten, nie für Layout.

Typen: `components/Table/Table.d.ts`. Aufruf über `window.PUKWeb.Table`.
