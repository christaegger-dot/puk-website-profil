# Accordion

Aufklappbare Abschnitte mit aria-expanded, aria-controls und Pfeiltasten.

Aufklappbare Abschnitte für häufige Fragen oder lange Detailangaben. Haarlinien zwischen den Zeilen, Chevron aus CSS-Rahmen, keine Flächen.

```jsx
<Accordion items={[
  { id: 'anmeldung', title: 'Wie melde ich mich an?', content: 'Über die Hausärztin oder direkt beim Ambulatorium.' },
  { id: 'kosten', title: 'Wer übernimmt die Kosten?', content: 'Die Grundversicherung.' },
]} />
```

`headingLevel` an die Gliederung der Seite anpassen. Keine Information, die alle brauchen, in geschlossene Abschnitte legen – sie steht offen im Text oder als `Alert` im Seitenfluss.

Typen: `components/Accordion/Accordion.d.ts`. Aufruf über `window.PUKWeb.Accordion`.

**Auf Websites:** Innerhalb von `.puk-web-page` übernimmt der Lesetext dieser Komponente die Seitenschrift (`web-body`, 21 px Light, Hausschwarz; unter 760 px 19 px). Ausserhalb gilt die UI-Skala. Beispiel: Karte «Lesen und Bedienen».

**Interaktion:** Kopfzeile als ganzes Klickziel; Pfeiltasten und Pos1/Ende zwischen Kopfzeilen. Keine Höhenanimation, nur der Chevron dreht. Nicht für Inhalte, die alle brauchen, oder für weniger als drei Einträge – dann Fliesstext mit Zwischentiteln. Regeln: Abschnitt «Interaktionskonzept».
