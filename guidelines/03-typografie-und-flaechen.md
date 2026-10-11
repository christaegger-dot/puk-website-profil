# Typografie und Flächen

Schriftschnitte, Web-Skala, Abstände, Linien und Radien.

_Herkunft: konsolidiert aus den Einzelleitlinien des PUK Zürich Design Systems 1.10.1; die Einzeldateien sind nicht Teil dieses Profils._

## Display und Titel

Rubik Light 300 für Display- und Titelgrade.

- **Einsatz:** Grosse Titel und Leads.
- **Pflicht:** Satzschreibung, keine Versaltitel.
- **Vermeiden:** Sperren oder enger setzen.

## Lauftext

Rubik Regular 400 für UI-Lauftext, Light 300 für Leads; die Website-Hülle setzt Fliesstext in Light (`--web-fw-body`).

- **Einsatz:** Websites und Browser-Anwendungen.
- **Pflicht:** Laufweite und natürliche Zeilenhöhe nicht übersteuern; Text Schwarz, ausnahmsweise Blau.
- **Vermeiden:** Medium als Lauftextschnitt; Fett.

## Web-Typografie

Skala des PUK-Webauftritts: Rubik Light 21 px, Basis 62,5 %, Überschriften in Regular.

- **Einsatz:** Nur im Template Website und bei Anbindung an den bestehenden Webauftritt.
- **Pflicht:** `--puk-web-text` (`#000000`) und `--puk-web-field-text` sind gekennzeichnete, am Webauftritt gemessene Ausnahmen.
- **Responsive:** Die gemessenen h1–h3-Werte sind Maximalgrade. Neue Websites verwenden die fluiden `--web-size-h*-fluid`-Tokens und werden gemäss `templates/website/profile.json` bei 360, 768 und 1440 px geprüft.
- **Vermeiden:** Diese Ausnahmen ausserhalb von Website und dieser Karte verwenden.

## Abstände in der Anwendung

Abstände in der Anwendung: Karteninnenabstand `--space-6`, Stapel `--space-3`, Abschnittsabstand `--space-16`.

- **Einsatz:** Orientierung beim Zusammensetzen von Seiten aus Komponenten.
- **Vermeiden:** Freie Pixelwerte statt Tokens.

## Linien und Schatten

Haarlinien leisten die Strukturarbeit; Schatten nur für schwebende Ebenen.

- **Einsatz:** Beim Trennen von Flächen und bei Overlays.
- **Pflicht:** `--shadow-raised` als Äusserstes auf ruhenden Flächen; `--shadow-overlay` nur für Dialog, Toast, Menü.
- **Vermeiden:** Innenschatten, Glühen, Milchglas, Backdrop-Blur.

## Radien

Ecken standardmässig eckig; 2–4 px nur für kleine Bedienelemente.

- **Pflicht:** `--radius-none` für Karten und Flächen.
- **Vermeiden:** Pillenformen, ausser beim Switch.

## Profilentscheide (06.10.2026)

- **Ein Schwarz:** Text auf Websites ist `text-default` (#222222); `puk-web-text` (#000000) und `puk-web-field-text` werden nicht verwendet. Die Pflichtzeile der Karte «Web-Typografie» oben ist damit für neue Websites aufgehoben.
- **Lesen in Seitenschrift, Bedienen in UI-Grösse:** Lesetext (auch in Card, Alert, Accordion, List) in `web-body`; Bedienelemente in `type-body`.
- **Button-Radius:** einheitlich `radius-sm` (3 px); `web-radius-btn*` sind Messwerte des Bestandsauftritts und werden nicht verwendet.

## Profilentscheid 11.10.2026: Schriftgrade in rem

- **Entscheid:** Auf Websites stehen alle Schriftgrade in `rem` statt `px` (`bundle.css`, Block «Prüfbefunde 11.10.2026»). Bei Standardeinstellung (1 rem = 16 px) bleibt jeder Grad gleich: `web-size-body` 21 px = 1,3125 rem, `size-body` 17 px = 1,0625 rem. Die Quellwerte in `tokens/*.css` und `tokens.json` bleiben als Messwerte stehen und werden überschrieben.
- **Grund:** Befunde BD-04 und BD-11 der Website «Depression»: Mit px-Graden wirkte die Browser-Einstellung «Schriftgrösse» nicht (0 von 30 Stichproben verändert); wer sie nutzt, bekam keinen grösseren Text.
- **Folgen:** Abstände bleiben in px. Fluide Titel (`web-size-h*-fluid`) wachsen nur bis zu ihrem Höchstwert mit. Container-Abfragen und Höchstbreiten der Figuren stehen ebenfalls in rem (Abschnitt «Visualisierung umsetzen»). Im Druck setzt `bundle.css` die Grundschrift auf 13 px; alle Grade schrumpfen gleichmässig.
- **Rückfallschrift:** `--font-core` ist auf Websites `"Rubik", Helvetica, sans-serif` – ohne «Rubik Variable». Zeichen, die in den statischen Schnitten fehlen (z. B. ← →), kommen aus der Systemschrift statt 110 kB nachzuladen.
