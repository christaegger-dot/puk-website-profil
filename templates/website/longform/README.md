# Referenzen für Langform und Psychoedukation

Die drei Langform-Referenzen prüfen dasselbe Systemmuster in unterschiedlichen Inhaltsaufgaben. Sie sind synthetische Design-System-Referenzen, keine fachlich freigegebenen Publikationen.

- `grundlagenkapitel.html`: ein Modell verständlich einführen, Begriffe abgrenzen, Abbildung und Reflexion verbinden.
- `handlungsuebersicht.html`: mehrere eigenständige Handlungsmöglichkeiten vergleichbar machen.
- `transfer-erholung.html`: Transfer auf ein zweites Thema ohne Übernahme des Pilotinhalts.
- `visualisierungsmuster.html` + `visual-patterns.css` (r3/r4, abgeleitet): Visualisierungsplan, Muster A–F (Figur mit Langbeschreibung, Kreislauf, Prozesspfad, Illustration als Szene mit `.puk-vis-scene`, Vergleich, Entscheidungsweg), Entscheidungshilfe Bericht → Web und Review-Check. Regeln: Abschnitte «Visuelle Wissensvermittlung» und «Visualisierung umsetzen».

Gemeinsam geprüft werden 320, 360, 768 und 1440 px, natürliche Inline-Link-Zeilenhöhe, 44-px-Aktionsziele, Lesebreite, Fokus, Quellenzuordnung und horizontaler Reflow.
- r4: `visualisierungsmuster.html` um Vergleich und Entscheidungsweg erweitert; Kreislauf mit getrennter Leserichtung breit/schmal und sichtbarem Rücksprung. Mehrseitige Websites: `../psychoeducation-site-starter/`.
- 11.10.2026: Vergleich (E) mit gemeinsamen Zeilen; Container-Schwellen und Figurbreiten in rem (Beziehungskarte ab 40 rem als Liste); Spannungsfeld (H) ohne Schlüssel für Bildteile und schmal in DOM-Reihenfolge; Kontinuum (J) ohne Pfeilzeichen; Druck: Figuren auf einer A4-Seite.
- 15.10.2026 (Paket 2026.10.2, P-1, nachgebessert): Im Druck bleibt jede Figur unteilbar. Nur eine Abfolge, die mit ihrer Liste länger als eine A4-Seite ist – Prozesspfad (C), Entscheidungsweg (F), Modell in Schritten (G) –, bekommt an der Figur das Kennzeichen `data-print-split`, zum Beispiel `<figure class="puk-vis-figure" data-visual-type="process" data-print-split …>`. Sie bricht dann zwischen ihren Schritten um; Titel, Kernaussage und erster Schritt bleiben zusammen, die Kennzeichnung folgt direkt auf den letzten Schritt. Im Druck stehen ihre Schritte dafür untereinander wie auf schmalen Bildschirmen (`visual-patterns.css`, `erklaermuster.css`: beim Modell in Schritten die Zeichnung über den Schritten). Ausdrücklich setzen, ohne Schwelle nach Schrittzahl, nie an anderen Mustern; Anleitung im `README.md` des Starters, Abschnitt «Druck: lange Abfolgen kennzeichnen».
- Erklärmuster G–K (06.10.2026): `erklaermuster.html` + `erklaermuster.css` (nach `visual-patterns.css` laden): Modell in Schritten, Spannungsfeld, Beziehungskarte, Kontinuum, Schichtenmodell. Regeln: Abschnitt «Visuelle Wissensvermittlung». Beispielinhalte fachlich freigegeben (06.10.2026).
