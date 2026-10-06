# List

Aufzählung und nummerierte Liste mit echter ul/ol/li-Semantik.

Aufzählung (`ul`) oder nummerierte Liste (`ol`) mit echter Listensemantik, Rubik Regular, Schwarz.

```jsx
<List items={['Anmeldung über die Hausärztin', 'Erstgespräch innerhalb von zwei Wochen', 'Behandlungsplan']} ordered />
```

Nummeriert nur, wenn die Reihenfolge zählt. `marker="none"` für Linklisten oder Kontaktangaben; die Semantik bleibt erhalten. Nie Absätze mit vorangestellten Strichen statt einer Liste setzen.

Typen: `components/List/List.d.ts`. Aufruf über `window.PUKWeb.List`.

**Auf Websites:** Innerhalb von `.puk-web-page` übernimmt der Lesetext dieser Komponente die Seitenschrift (`web-body`, 21 px Light, Hausschwarz; unter 760 px 19 px). Ausserhalb gilt die UI-Skala. Beispiel: Karte «Lesen und Bedienen».
