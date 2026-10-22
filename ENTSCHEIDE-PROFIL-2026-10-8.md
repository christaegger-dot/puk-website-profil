# Entscheide Profil 2026.10.8 · 22.10.2026

## Anlass

Die Website «Borderline – Angehörige» hat in ihrer Gestaltungsüberarbeitung zwei Gestaltungsregeln eingeführt, die das Profil noch nicht kannte: Titel in Rubik Medium und eine getönte Grundfläche `#F5F7FF`. Christa Egger hat sie am **22.10.2026 um 09:19 Uhr (Europe/Zurich)** übernommen:

> ich übernehme deine Empfehlungen: Deine Entscheide zu F3, F4 und W6: Überschriften in Rubik Medium, hellblaue Grundfläche und doppelter Fokusrahmen an den Einstiegskarten.

Nachweis: `audit-results/2026-10-22-gestaltungsentscheide/ENTSCHEID.md` im Repository [`christaegger-dot/borderline-angehoerige`](https://github.com/christaegger-dot/borderline-angehoerige), Branch `gestaltung/2026-10-21` ([PR #708](https://github.com/christaegger-dot/borderline-angehoerige/pull/708), Stand `397c2d1`). W6 betrifft nur die Einstiegskarten jener Website und ist nicht Teil dieses Profilstands.

Gestaltungsregeln werden nicht in einzelnen Website-Repositorys geändert. F3 und F4 werden darum hier als Profilentscheid für alle Websites der Fachstelle nachgetragen. Den Änderungsvorschlag hat Christa Egger am 22.10.2026 bestätigt («ja, alle vier wie vorgeschlagen, leg los»). Bestätigt wurden:

1. **Ort:** Änderung in diesem Repository als Version 2026.10.8. Das private Design-Artefakt «PUK Zürich Website-Profil» (Stand 2026.10.2) bleibt abgeschlossene Historie und wird nicht nachgeführt.
2. **Namen und Geltung:** `--ui-tint`, `--surface-tint` und `--text-link-on-tint`. Die Linkregel gilt für alle getönten Flächen, auch für bestehende.
3. **F3:** Medium nur für die Website-Titel h1 und h2, gekennzeichnet als Abweichung vom CD Manual.
4. **Linkfarbe:** Besuchte und unbesuchte Links dürfen auf getönten Flächen gleich gefärbt sein.

## Entscheide

| Punkt | Entscheid | Umsetzung |
| --- | --- | --- |
| **F4 · Getönte Fläche** | `--ui-tint` `#F5F7FF` (PUK-Blau rund 5 % auf Weiss, «sämtliche Schattierungen zulässig») mit dem Alias `--surface-tint`. Gedacht für Einstieg, Einstiegskarten, Kästen, verwandte Themen und Fusszeile. Weiss bleibt die Seitenfläche. | `tokens/colors.css`, `components/bundle.css`, `tokens.json`; `data-puk-surface="tint"` in `tokens/base.css` |
| **F4 · Kontrastauflage** | Auf jeder Fläche ausser Weiss steht kein Text unter 24 px in `#3C64FF`. Links und Akzenttext stehen dort in `--text-link-on-tint` (`--puk-blue-125`, `#2B4FE0`). Die Regel gilt für alle getönten Flächen des Profils. | `--text-link` und `--text-accent` werden auf den getönten Flächen der Langform, der Erklär- und Visualisierungsmuster, des Starters, der Anwendungen sowie bei `Card` sunken und `Alert` (ausser emergency) umgesetzt; `data-puk-surface` für eigene Flächen |
| **F3 · Titel in Rubik Medium** | `.puk-web-h1` und `.puk-web-h2` stehen in Medium 500 (`--web-fw-title`). H3, die UI-Skala `--type-title-*` und der Messwert `--web-fw-heading` bleiben unverändert. Das CD Manual nennt Light und Regular für Text. Deshalb ist dies ein gekennzeichneter Profilentscheid der Fachstelle und keine von der PUK-Kommunikation freigegebene CI-Variante. | `tokens/web.css`, `components/bundle.css`, `tokens.json` |

## Gemessene Kontraste (WCAG 2.x, berechnet aus den Tokenwerten)

| Fläche | Schwarz 100 | Schwarz 75 | Blau 100 | Blau 125 |
| --- | --- | --- | --- | --- |
| Weiss | 15,91:1 | 5,92:1 | 4,71:1 | 6,37:1 |
| `ui-tint` #F5F7FF | 14,87:1 | 5,53:1 | 4,40:1 | 5,95:1 |
| `surface-structure` #F7F7F7 | – | – | 4,40:1 | 5,94:1 |
| `ui-wash` #F4F4F4 | 14,47:1 | 5,38:1 | 4,28:1 | 5,79:1 |
| `ui-field` #F0F3FF | 14,37:1 | 5,35:1 | 4,25:1 | 5,75:1 |
| `puk-yellow-50` #F8F5CB | – | – | 4,24:1 | 5,74:1 |
| `ui-danger-wash` #FBEAE7 | – | – | 4,04:1 | 5,47:1 |
| `puk-blue-25` #D8E0FF | 12,14:1 | 4,52:1 | 3,59:1 | 4,86:1 |

Im Theme «Hoher Kontrast» erreicht Blau 125 (#001F99) auf allen genannten Flächen mindestens 10,28:1. `ui-tint` gegen Weiss: 1,07:1. Die Fläche gliedert also nur und trägt keine Bedeutung.

## Folgen

- Besuchte und unbesuchte Links sind auf getönten Flächen gleich gefärbt. Unterstreichung und Hover in Schwarz bleiben.
- Bestehende Websites erhalten die Änderung nicht automatisch. Die Website «Borderline» setzt beide Regeln bereits um (PR #708). Die Website «Depression» wird nicht geändert.
- Die Titel in Medium laufen breiter als in Light. Titel bei 320 px und 200 % Schrift weiterhin visuell prüfen.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Das Paket `puk-website-profil-2026.10.8.zip` prüft eine Sitzung, die es nicht gebaut hat. Diese Prüfung ist offen. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
