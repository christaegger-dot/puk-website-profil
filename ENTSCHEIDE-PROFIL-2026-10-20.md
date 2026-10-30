# Entscheide Profil 2026.10.20 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.19 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-30-19/PRUEFBERICHT.md), PR #158) ergab keinen Befund «kritisch», einen Befund «wichtig» und drei «optional».

- **W-3:** Die Rücksetzregel «helle Flächen in Bändern» erfasste nicht alle hellen Flächen des Profils. Anwendungsmuster (`applications.css`) standen im Band bis Weiss auf Weiss (1,00:1), Platzhalter und Sicherheitsleiste des Starters auf Nachtblau mit 1,11:1 bzw. 1,07:1, helle Teile der Erklärmuster in einer offenen Figur mit 1,00:1. README, Karte «PUK-Blau» und [ENTSCHEIDE-PROFIL-2026-10-18.md](ENTSCHEIDE-PROFIL-2026-10-18.md) sagten mehr zu, als die Regel leistete.
- **O-7:** Die Tests erkannten 16 von 25 Einträgen der Regel; «prüft alle erfassten Komponenten» traf nicht zu.
- **O-8:** Die offene Erklärgrafik «behält die Farben des Bandes» trifft nur auf Nachtblau zu; im blauen Band steht ihre Beschriftung dunkel auf Blau (3,38:1, Theme «Hoher Kontrast» 1,58:1).
- **O-9:** Die Berichtigung zur Seitenzahl im Selbstprüfbericht 2026.10.17 war ungenau.

Christa Egger hat am **30.10.2026** den Auftrag gegeben: «W-3 und O-7 bis O-9 als 2026.10.20 beheben». Die Umsetzung erfolgt als Version 2026.10.20 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-3 · weitere helle Flächen** | Die Rücksetzregel erfasst zusätzlich Platzhalter und Sicherheitsleiste des Starters, die Flächen der Anwendungsmuster und die hellen Teile der Erklärmuster. Werte, Spezifität 0 und die Regel aus 2026.10.15 bleiben unverändert. Überschneidung (`.puk-vis-overlap li`) und Ringtitel des Beziehungsnetzes (`.puk-vis-net__ring h3`) bleiben aussen vor: Sie sind bei breiter bzw. schmaler Ansicht flächenlos, und die Rücksetzung würde dort dunkle Schrift auf das Band setzen. Die Texte sagen jetzt, dass genau die aufgezählte Liste erfasst ist. | `tokens/base.css` und wortgleich `components/bundle.css`: zusätzlich `.puk-site-placeholder`, `.puk-site-safety--direct`, `.puk-app-card`, `.puk-app-chip`, `.puk-app-choice`, `.puk-app-boundary`, `.puk-app-mini`, `.puk-app-detail`, `.puk-app-output`, `.puk-app-empty`, `.puk-app-contact-target`, `.puk-vis-btn`, `.puk-vis-build__n`, `.puk-vis-balance__hold`, `.puk-vis-net__ring li`, `.puk-vis-layers`. Leitlinie 02, README, Karte «PUK-Blau», Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-18.md`. |
| **O-7 · Testabdeckung** | Ein neuer Test liest die Einträge der Regel aus `components/bundle.css` und verlangt für jeden einen eigenen Fall mit Text, Nebentext und Link, einzeln und nicht in einer anderen erfassten Fläche; Bildschirm und Druck, beide Themes. Er prüft auch, dass `tokens/base.css` dieselbe Regel enthält. Der Test zu hellen Komponenten prüft Hover zusätzlich für Knopf-Link und die Links in Dialog, versenkter Karte und Hinweis, Fokus zusätzlich für die Links in `data-puk-light` und Dialog. | `tests/profilentscheid-2026-10-29.test.mjs`, Test «Jeder Eintrag der Rücksetzregel …»; Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-19.md`. |
| **O-8 · offene Erklärgrafik** | Keine neue Gestaltung. Leitlinie 02 nennt die offene Erklärgrafik als nicht erfasst und im blauen Band nicht lesbar; Erklärgrafiken gehören nicht in ein Band. | Leitlinie 02; Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-18.md`. |
| **O-9 · Seitenzahl** | Archive bleiben unverändert; Berichtigung hier und als Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-19.md`. | Dieser Abschnitt. |

**Berichtigung zur Berichtigung (O-9):** `ENTSCHEIDE-PROFIL-2026-10-19.md` sagte, «29 aktive Vorschauseiten» im archivierten Selbstprüfbericht 2026.10.17 sei «zu lesen als 30». Richtig ist: Die Selbstprüfung 2026.10.17 verglich 29 Seiten (58 Fotos); die Liste in `tests/browser.test.mjs` umfasst 30 Seiten und `Website.dc.html`. Die unabhängigen Prüfungen 2026.10.17 und 2026.10.19 haben alle 30 Seiten und `Website.dc.html` verglichen (je 62 von 62 pixelgleich).

## Grenzen

- Erfasst ist die aufgezählte Liste. Komponenten ohne eigene helle Fläche, die offene Erklärgrafik selbst, Überschneidung und Ringtitel des Beziehungsnetzes sowie eigene helle Flächen ohne `data-puk-light` sind im Band nicht technisch abgesichert; die Regel aus 2026.10.15 schliesst sie aus.
- Geprüft im Headless-Chromium und in Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.19 unabhängig geprüft und 2026.10.20 gebaut. Die unabhängige Prüfung von 2026.10.20 muss eine andere Sitzung übernehmen; sie ist offen. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
