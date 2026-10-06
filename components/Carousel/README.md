# Carousel

Karussell für wenige gleichrangige, in sich abgeschlossene Inhalte, die nacheinander gezeigt werden – sparsam einsetzen, meist ist eine Kartenliste besser.

- **Wann:** 3–6 kurze, gleichwertige Einheiten, deren Reihenfolge egal ist und die nicht alle gleichzeitig sichtbar sein müssen (z. B. Impulse, Zitate mit Freigabe, Beispielsätze).
- **Wann nicht:** wichtige oder handlungsrelevante Inhalte, Schritte mit fester Reihenfolge (→ Prozesspfad), mehr als 6 Einheiten (→ Kartenliste, Akkordeon), Werbung oder Stimmungsbilder.
- **Verhalten:** kein Autoplay, keine Endlosschleife; Zurück/Weiter-Schaltflächen 44 px, am Anfang bzw. Ende deaktiviert; Position als Text «Folie 2 von 5» (Live-Region); Wischen auf Touch, Pfeiltasten, Pos1/Ende im fokussierten Folienbereich; Tab erreicht Links in jeder Folie. Weiches Scrollen nur ohne `prefers-reduced-motion`.
- **Consumer liefert:** `label` (Pflicht, zugänglicher Name) und `items` mit `title` und `content`.

Details und Beispiele: Abschnitt «Interaktionskonzept».
