# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.8 · Stand 22.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Profil 2026.10.8 trägt die Profilentscheide vom 22.10.2026 nach ([ENTSCHEIDE-PROFIL-2026-10-8.md](ENTSCHEIDE-PROFIL-2026-10-8.md)): getönte Fläche `surface-tint`, Links auf getönten Flächen in Blau 125 und Website-Titel in Rubik Medium. Ausgangsstand ist `f6b55dcc2d60bf5d246bb7d9c8ab35388148255c` (Profil 2026.10.7). Dessen Originalberichte, Matrix und unverändertes Paket bleiben als [archivierter Stand](https://github.com/christaegger-dot/puk-website-profil/tree/main/archiv/profilstand-2026-10-18-7) erhalten.

## Umsetzung

- **Tokens:** `--ui-tint` (#F5F7FF), `--surface-tint` und `--text-link-on-tint` in `tokens/colors.css`, `components/bundle.css` und `tokens.json`. `--web-fw-title` (500) in `tokens/web.css` und `components/bundle.css`.
- **Titel:** `.puk-web-h1` und `.puk-web-h2` lesen `--web-fw-title`. H3 und die UI-Skala bleiben unverändert. `tokens.json` führt `web-h1` und `web-h2` mit Schnitt 500.
- **Linkregel:** Die getönten Flächen setzen `--text-link` und `--text-accent` auf `--text-link-on-tint`. Betroffen sind Langform (Begriffsführer, Figur, Reflexion, Unterstützung), Bildplatzhalter, Filter, Erklär- und Visualisierungsmuster, Starter (Entwurfsleiste, direkter Zuständigkeitsverweis, Platzhalter), Anwendungen, `Card` sunken und `Alert` ausser emergency. `data-puk-surface` stellt dasselbe für eigene Flächen bereit; `data-puk-surface="tint"` setzt zusätzlich die Fläche.
- **Dokumentation:** README (Ebenen, Farbe, Typografie, Flächen), Leitlinien 02 und 03, Grundlagenkarten Web-Typografie, Display und Titel, PUK-Blau, Bildschirm-Schattierungen und Textfarben.
- **Kennungen:** Starter-Build r4-15 und Kit-Referenz r4-3, damit Browser die geänderten Stylesheets neu laden. `ENTSCHEIDE-PROFIL-2026-10-8.md` gehört zum Paket (`tools/paket.py`).
- **Neuer Test:** `tests/profilentscheid-2026-10-22.test.mjs`. Er prüft aus `tokens.json`, dass `text-link-on-tint` auf zehn getönten Flächen in beiden Themes mindestens 4,5:1 erreicht und Blau 100 dort darunter liegt. Im Browser prüft er die tatsächliche Linkfarbe auf sieben Flächen, beide Themes, sowie die Schnitte von h1, h2 und h3.

## Tatsächlich ausgeführte Prüfungen

| Prüfung | Ergebnis |
| --- | --- |
| Ausgangsstand 2026.10.7 vor der Änderung | Build ohne Fehler, **104 bestanden**, 0 fehlgeschlagen |
| Profil-Build | Komponenten und alle drei Vorlagen gebaut; fachneutrales Beispiel ohne Produktionsblocker, ein bekannter Hinweis (fehlende `siteUrl`, wie im Ausgangsstand) |
| Gesamte Testsuite | **106 bestanden**, 0 fehlgeschlagen, 0 übersprungen, einschliesslich der zwei neuen Tests. Ein erster Gesamtlauf hatte einen Fehler in der Vorschau `templates/website/Website.dc.html` bei 1280 px (`_ds_bundle.js`: React noch nicht geladen). Weder diese Datei noch ihr Lader wurden geändert. Drei Einzelläufe von `tests/browser.test.mjs` und der zweite Gesamtlauf waren fehlerfrei. Als zeitabhängiger Befund festgehalten, nicht behoben. |
| UI-Matrix | **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde, keine nicht prüfbaren Fälle; [Matrixdaten](tests/ergebnisse/ui-matrix-2026.10.8.json) |
| Titel und Einstieg | 60 Titel-, Menü-, Schrift- und Skriptzustände mit Medium-Titeln ohne Abschneiden; Startseite des Starters bei 375 × 812 und 1440 × 900 px visuell angesehen |
| Kontraste | Aus den Tokenwerten berechnet, siehe Entscheiddatei. Keine Messung an realen Geräten. |

## Geltung

Technische Selbstprüfung der Sitzung, die das Paket gebaut hat. Die unabhängige Prüfung durch eine andere Sitzung ist offen. Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe; die Titel in Medium bleiben eine gekennzeichnete Abweichung vom CD Manual. Reale Geräte-, Screenreader- und Zielgruppentests wurden nicht durchgeführt. Bestehende Website-Repositorys werden durch diesen Profilstand nicht geändert.
