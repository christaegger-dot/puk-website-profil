# Web-Typografie

Gemessene Skala des PUK-Webauftritts und kleinere Leseskala für neue Websites.

Foundation-Karte aus dem Website-Profil (keine Komponente im Bundle).

Skala des PUK-Webauftritts: Rubik Light 21 px, Basis 62,5 %, Überschriften in Regular.

- **Titel (22.10.2026):** Neue Websites setzen `.puk-web-h1` und `.puk-web-h2` in Medium 500 (`--web-fw-title`), gekennzeichnete Abweichung vom CD Manual; H3 bleibt Regular.

- **Einsatz:** Nur im Template Website und bei Anbindung an den bestehenden Webauftritt.
- **Pflicht:** `--puk-web-text` (`#000000`) und `--puk-web-field-text` sind gekennzeichnete, am Webauftritt gemessene Ausnahmen.
- **Responsive:** Die gemessenen 114/57/40 px bleiben Herkunftswerte. Neue Websites verwenden über `--web-size-h*-fluid` die Leseskala H1 32–60 px, H2 28–44 px, H3 24–32 px bei Standardschrift. Vergrösserte Browser-Schrift bleibt wirksam. Regeln und Herkunft: [Einstieg und Seitenrahmen](../../guidelines/08-einstieg-und-seitenrahmen.md).
- **rem (11.10.2026):** Auf Websites stehen die Grade in `rem` (21 px = 1,3125 rem), damit die Schriftgrösse-Einstellung des Browsers wirkt; die Messwerte hier bleiben in px.
- **Vermeiden:** Diese Ausnahmen ausserhalb von Website und dieser Karte verwenden.
