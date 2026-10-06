# Interaktive Website-Anwendungsmuster

Die vier Referenzseiten übersetzen die in `application-patterns.json` festgelegten Aufgaben in
die PUK-Websprache. Sie enthalten bewusst synthetische Inhalte und keine freigegebenen
Notfallnummern, Zuständigkeiten oder Angebotsdaten.

- `situationsnavigator.html` — Situationen filtern gemeinsam Impulse und Gesprächshilfen.
- `kontaktwegweiser.html` — drei redaktionell zu befüllende Dringlichkeits- und Kontaktwege.
- `gespraechshilfe.html` — Situation und Ziel erzeugen einen Formulierungsvorschlag.
- `angebotsnavigator.html` — lokale Volltextsuche und Kategorien mit Leerzustand.

Alle Seiten laden nur lokale Ressourcen, speichern keine Eingaben und werden bei 360, 768 und
1440 px sowie mit den anwendungsspezifischen Interaktionsprüfungen auditiert. Vor einer realen
Publikation gelten zusätzlich das Produktionsgate, zwei reale Screenreader-Läufe und die
redaktionelle Freigabe der operativen Inhalte.

Kontakte und Angebote folgen dem maschinenlesbaren Vertrag
`../application-content.schema.json`. `application-content.example.json` zeigt ausschliesslich
synthetische Datensätze. Die Kontaktprüfung umfasst auch den Direktlink `#sofort` und das Ziel der
primären Handlung; die Angebotssuche behandelt mehrere Suchwörter unabhängig von ihrer Reihenfolge.
