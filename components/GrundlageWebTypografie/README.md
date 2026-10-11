# Web-Typografie

Gemessene Skala des PUK-Webauftritts, fluid per clamp().

Foundation-Karte aus dem Website-Profil (keine Komponente im Bundle).

Skala des PUK-Webauftritts: Rubik Light 21 px, Basis 62,5 %, Überschriften in Regular.

- **Einsatz:** Nur im Template Website und bei Anbindung an den bestehenden Webauftritt.
- **Pflicht:** `--puk-web-text` (`#000000`) und `--puk-web-field-text` sind gekennzeichnete, am Webauftritt gemessene Ausnahmen.
- **Responsive:** Die gemessenen h1–h3-Werte sind Maximalgrade. Neue Websites verwenden die fluiden `--web-size-h*-fluid`-Tokens und werden gemäss `templates/website/profile.json` bei 360, 768 und 1440 px geprüft.
- **rem (11.10.2026):** Auf Websites stehen die Grade in `rem` (21 px = 1,3125 rem), damit die Schriftgrösse-Einstellung des Browsers wirkt; die Messwerte hier bleiben in px.
- **Vermeiden:** Diese Ausnahmen ausserhalb von Website und dieser Karte verwenden.
