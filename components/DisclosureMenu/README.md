# DisclosureMenu

Dropdown-Menü für Navigation nach dem Disclosure-Muster: Eine Schaltfläche klappt eine Liste von Links auf.

- **Wann:** Hauptnavigation mit mehr als sechs Einträgen; eine Gruppe zusammengehöriger Unterseiten (z. B. «Themen»); auf schmalen Bildschirmen als «Menü», wenn die umbrechende Navigation zu lang wird.
- **Wann nicht:** bis sechs Hauptpunkte (→ sichtbare Navigation, die unter 760 px als Raster umbricht); Aktionen wie «Drucken» oder «Teilen» (→ Buttons); Auswahl eines Werts in Formularen (→ `Select`); einziger Weg zu wichtigen Inhalten (→ Lesepfade auf der Startseite zusätzlich).
- **Verhalten:** Klick, Enter oder Leertaste öffnen und schliessen; `aria-expanded` am Button; Pfeil ab öffnet und springt zum ersten Link, Pfeil auf/ab bewegt zwischen Links; Escape schliesst und setzt den Fokus zurück auf den Button; Klick ausserhalb und Wegtabben schliessen. Kein Öffnen bei Hover. Auf breiten Bildschirmen schwebt die Liste (einzige schwebende Ebene mit `shadow-overlay`), unter 760 px klappt sie im Fluss auf.
- **Consumer liefert:** `label`, `items` mit `label`, `href`, optional `description` und `current`.

Details und Beispiele: Abschnitt «Interaktionskonzept».
