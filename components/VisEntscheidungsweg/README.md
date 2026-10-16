# Entscheidungsweg

Ein Weg mit Fragen: Wenn-dann-Abfolge zu genau einem nächsten Schritt.

Live-Muster aus `templates/website/longform/visualisierungsmuster.html` mit `visual-patterns.css` (nach `components/bundle.css` laden). Auswahl: Abschnitt «Visuelle Wissensvermittlung»; Umsetzung: «Visualisierung umsetzen». Jede Figur trägt `data-visual-id` (Eintrag im Visualisierungsplan) und `data-visual-type`; eigene Darstellungen sind als «Eigene didaktische Darstellung» gekennzeichnet.

**Drei Erklärungsebenen (08.10.2026):** Kernaussage (`p.puk-vis-kern`), kurzer Erklärtext (`p.puk-vis-short`), wo sinnvoll Vertiefung (`details.puk-vis-more`).

**Druck (Paket 2026.10.2, nachgebessert 15.10.2026):** Im Druck bleibt die Figur als Ganzes auf einer A4-Seite. Ist der Weg mit seiner Liste länger als eine A4-Seite, bekommt die Figur in `content/<id>.html` das Kennzeichen `data-print-split`. Dann bricht der Weg zwischen seinen Schritten um: Titel, Kernaussage und erster Schritt stehen zusammen, die Kennzeichnung folgt direkt auf den letzten Schritt. Kurze Wege tragen kein Kennzeichen. Anleitung: `README.md` des Starters, Abschnitt «Druck: lange Abfolgen kennzeichnen»; Regel: «Technische Qualität», F.
