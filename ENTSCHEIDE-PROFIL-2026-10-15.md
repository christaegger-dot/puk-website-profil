# Entscheide Profil 2026.10.15 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.14 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md), PR #147) ergab keinen Befund «kritisch», einen Befund «wichtig» und zwei «optional». Befund **W-1**: Helle Komponenten innerhalb eines Bandes erben die Farben für dunklen Grund.

- `.puk-web-band` ohne `data-puk-surface` (seit 2026.10.14) und `[data-puk-surface="night"]` (seit 2026.10.10 und 2026.10.13) setzen `--text-muted`, `--text-accent`, `--text-link` und `--action-quiet-fg` auf Weiss bzw. Blau 25.
- Ein React-`Card` im blauen Band zeigt dadurch Eyebrow und Sekundärknopf Weiss auf Weiss (1,00:1); eine weisse Folie oder eine getönte Fläche im Band ebenso (1,00:1 bzw. 1,07:1). Auf Nachtblau steht der Text eines `Alert` Weiss auf `#F0F3FF` (1,11:1).
- Keine Vorlage setzt heute helle Komponenten in ein Band; keine Regel schloss es aber aus.

Christa Egger hat am **30.10.2026** entschieden: «W-1: Leitlinie ergänzen, keine hellen Komponenten in Bändern». Die Umsetzung erfolgt als Version 2026.10.15 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-1 · helle Komponenten in Bändern** | In ein Band, blau oder nachtblau, gehören nur Kicker, Titel, Text, Links, Nebentext und Knöpfe. Karten, Hinweise, Karussell-Folien, Dialoge, getönte Flächen und andere helle Flächen stehen ausserhalb des Bandes, etwa in einem eigenen Abschnitt davor oder danach. Stylesheet und Komponenten bleiben unverändert. | Leitlinie 02 (Abschnitt «PUK-Blau», neuer Punkt «Keine hellen Komponenten in Bändern»; Abschnitt zu Nachtblau, Punkt «Helle Komponenten»), README (Abschnitt «Farbe»), Karte «PUK-Blau». Der Dokumenttest in `tests/profilentscheid-2026-10-29.test.mjs` prüft die Regel in Leitlinie 02. |

Die optionalen Befunde O-1 (Beschreibung des Tokens `action-quiet-fg` nennt nur Nachtblau) und O-2 (Drucktest misst ausgeblendete `button.puk-btn`) bleiben offen; sie sind nicht Teil dieses Auftrags.

## Grenzen

- Die Regel wird nicht technisch erzwungen. Das Gate und die Tests prüfen nicht, ob eine Website helle Komponenten in ein Band setzt.
- Bestehende Websites und Website-Repositorys werden nicht geändert.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.14 unabhängig geprüft und 2026.10.15 gebaut. Das Paket `puk-website-profil-2026.10.15.zip` wurde nicht unabhängig geprüft; an seine Stelle tritt die Prüfung von 2026.10.17 ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md)), die 2026.10.15 und 2026.10.16 einschliesst. Die technische Absicherung von W-1 folgt mit 2026.10.17. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
