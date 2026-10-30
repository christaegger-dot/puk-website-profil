# Entscheide Profil 2026.10.20 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.19 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-30-19/PRUEFBERICHT.md), PR #158) ergab keinen Befund «kritisch», einen Befund «wichtig» und drei «optional». Befund **W-3**: Die Rücksetzregel aus 2026.10.17 bis 2026.10.19 ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md)) erfasste weiterhin nicht alle hellen Flächen des Profils.

- **Anwendungsmuster** (`templates/website/applications/applications.css`): Karten, Chips, Auswahl-, Hinweis-, Detail-, Ergebnis- und Leerflächen sowie das Kontaktziel. Im blauen Band und auf Nachtblau stand etwa der Kartentitel Weiss auf Weiss (1,00:1).
- **Starter** (`starter.css`): Platzhalter auf Nachtblau 1,11:1, Titel der Sicherheitsleiste `--direct` 1,07:1.
- **Erklärmuster** (`erklaermuster.css`) in einer offenen Figur: Knöpfe und Ebenen auf Nachtblau 1,00:1.
- README, Karte «PUK-Blau» und `ENTSCHEIDE-PROFIL-2026-10-18.md` sagten mehr zu, als die Regel leistete.

Christa Egger hat am **30.10.2026** den Auftrag gegeben: «W-3 als 2026.10.20 beheben». Die Umsetzung erfolgt als Version 2026.10.20 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-3 · nicht erfasste helle Flächen** | Die Rücksetzregel erfasst zusätzlich alle hellen Flächen der Anwendungsmuster, Platzhalter und Sicherheitsleiste `--direct` des Starters und die hellen Teilflächen der Erklärmuster. Werte, Spezifität 0 und die Regel aus 2026.10.15 bleiben unverändert. Die Ringbeschriftung der Beziehungskarte hat nur in der breiten Ansicht eine eigene weisse Fläche; in der schmalen Ansicht übernimmt sie die Nebentextfarbe ihrer Umgebung. README, Leitlinie 02 und Karte «PUK-Blau» nennen den tatsächlichen Umfang. | `tokens/base.css` und wortgleich `components/bundle.css`: zusätzlich `.puk-site-placeholder`, `.puk-site-safety--direct`, `.puk-app-card`, `.puk-app-chip`, `.puk-app-choice`, `.puk-app-boundary`, `.puk-app-mini`, `.puk-app-detail`, `.puk-app-output`, `.puk-app-empty`, `.puk-app-contact-target`, `.puk-vis-btn`, `.puk-vis-build__n`, `.puk-vis-balance__hold`, `.puk-vis-layers`, `.puk-vis-net__ring li`, `.puk-vis-net__ring h3`. `templates/website/longform/erklaermuster.css`: `--text-muted:inherit` für die Ringbeschriftung in der schmalen Ansicht. Leitlinie 02, README, Karte «PUK-Blau», Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-18.md`. Neuer Test in `tests/profilentscheid-2026-10-29.test.mjs`. |

Die optionalen Befunde O-7 bis O-9 der Prüfung bleiben offen; sie sind nicht Teil dieses Auftrags.

## Grenzen

- Erfasst sind die aufgezählten Profilkomponenten und Flächen mit `data-puk-light` oder `data-puk-surface`. Eine Figur der Form «Überschneidung» (`.puk-vis-overlap`) in einer offenen Erklärgrafik ist weiterhin nicht erfasst (bekannt seit 2026.10.18); keine Vorlage verwendet diese Kombination. Eigene helle Flächen ohne Kennzeichen erben die Farben des Bandes.
- Komponenten mit eigenen Farbregeln behalten diese (Spezifität 0), etwa Links in Blau 125 auf getönten Anwendungsflächen.
- Geprüft im Headless-Chromium und in Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat keines der Pakete 2026.10.17 bis 2026.10.19 gebaut oder deren unabhängige Prüfung durchgeführt; sie hat 2026.10.20 gebaut. Die unabhängige Prüfung des Pakets `puk-website-profil-2026.10.20.zip` muss darum eine andere Sitzung übernehmen; sie ist offen. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
