# Lesen und Bedienen

Lesen in Seitenschrift (21 px Light, Hausschwarz), Bedienen in UI-Grösse (17 px) – so verhalten sich die Komponenten innerhalb der Website-Hülle.

Profilentscheid vom 06.10.2026: Innerhalb von `.puk-web-page` übernehmen Lesetexte in `Card`, `Alert`, `Accordion` und `List` die Seitenschrift (`web-body`, unter 760 px 19 px) über die Variablen `--puk-read-font` und `--puk-read-color`. `Button`, `Input`, `Select`, `Tabs` und andere Bedienelemente bleiben bei der UI-Skala (`type-body`, 17 px). Ausserhalb der Website-Hülle gilt überall die UI-Skala. Textfarbe auf Websites: `text-default` (#222222).
