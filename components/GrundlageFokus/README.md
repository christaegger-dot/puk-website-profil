# Fokus

Ein Fokusbild: 2 px Weiss + 2 px PUK-Blau; Felder färben den Rahmen.

Foundation-Karte aus dem Website-Profil (keine Komponente im Bundle).

Referenz für das eine Fokusbild des Systems: Eingabefelder mit blauem Rahmen und 1-px-Innenring, alle anderen Bedienelemente mit `--focus-ring` (weiss, dann blau).

- **Einsatz:** Nachschlagen, bevor ein eigenes Bedienelement gebaut oder ein bestehendes umgestaltet wird.
- **Pflicht:** `:focus-visible` aus `tokens/base.css` nutzen; Eingabefelder über `[data-puk-field]`, ohne eigenen `border` inline.
- **Vermeiden:** Fokusring entfernen, mit JavaScript-Zuständen nachbauen oder nur über Farbe andeuten.
- **Status:** Ergänzung zu WCAG 2.1 AA; das CD-Manual regelt Fokus nicht.
