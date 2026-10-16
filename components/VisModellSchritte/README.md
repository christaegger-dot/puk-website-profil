# Modell in Schritten (Muster G)

Wie etwas entsteht oder wirkt: ein Modell aus zwei bis fünf nummerierten Teilen, ganz sichtbar oder auf Wunsch Schritt für Schritt aufgebaut.

Live-Muster aus `templates/website/longform/erklaermuster.html` mit `erklaermuster.css` (nach `visual-patterns.css` und `components/bundle.css` laden). Regeln: Abschnitt «Visuelle Wissensvermittlung». Alle Beschriftungen sind HTML-Text, Formen und Linien `aria-hidden`; schmal (unter 560 px Containerbreite) wird die Darstellung zur gegliederten Liste. Die Beispielinhalte sind fachlich freigegeben (Fachstelle Angehörigenarbeit PUK, 06.10.2026); für eine neue Website gelten eigene Inhalte, die wiederum freizugeben sind.

**Bedeutung tragen:** Lage der Teile zueinander (Zufluss oben, Abfluss unten, Rand), Pfeilrichtung, Nummern, die mit der Liste übereinstimmen.

**Einsetzen für:** Entstehungs- und Wirkmodelle (Belastungsgefäss, Vulnerabilität und Stress, Wechselwirkung von Faktoren); Ansatzpunkte für Handlungen direkt im Modell markieren.

**Verzichten, wenn:** das Modell mehr als fünf Teile braucht (→ aufteilen) oder eine Rückkopplung zeigt (→ Kreislauf, Muster B). Die Schrittfunktion ist optional: Grundzustand ist immer das ganze Modell; Bedienung über Buttons mit Live-Status, kein Hover, keine Animation bei reduzierter Bewegung.

**Ansatzpunkt für Angehörige (08.10.2026):** doppelter Ring an der Stelle in der Grafik und `p.puk-vis-ansatz` im zugehörigen Teil; im Plan `entryPoint`.

**Druck (Paket 2026.10.2, nachgebessert 15.10.2026):** Im Druck bleibt die Figur als Ganzes auf einer A4-Seite. Ist das Modell mit seiner Schrittliste länger als eine A4-Seite, bekommt die Figur in `content/<id>.html` das Kennzeichen `data-print-split`. Dann steht die Zeichnung über den Schritten, und das Modell bricht zwischen seinen Schritten um: Titel, Kernaussage und Anfang stehen zusammen, die Kennzeichnung folgt direkt auf den letzten Schritt. Ohne Schrittliste blockiert das Gate das Kennzeichen; kurze Modelle tragen keines. Anleitung: `README.md` des Starters, Abschnitt «Druck: lange Abfolgen kennzeichnen»; Regel: «Technische Qualität», F.
