# Entscheide Profil 2026.10.18 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.17 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-30-17/PRUEFBERICHT.md), PR #153) ergab keinen Befund «kritisch», einen Befund «wichtig» und vier «optional». Befund **W-2**: Die technische Absicherung aus 2026.10.17 ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md)) erfasste nicht alle hellen Profilkomponenten.

- **Erklärgrafiken** aus `templates/website/longform/visual-patterns.css`: `.puk-vis-figure` (Fläche `--surface-structure`) und ihre weissen Teilflächen. Auf Nachtblau standen Beschriftung, Titel, Werte und Legende Weiss auf hellem Grund (1,07:1 bzw. 1,00:1), im blauen Band Schlüssel und Merkmal Weiss auf Weiss (1,00:1).
- **Karussell-Knöpfe:** `.puk-carousel__btn` liegt ausserhalb der Folie und hat eine eigene weisse Fläche. Auf Nachtblau war der Pfeil Weiss auf Weiss (1,00:1).
- README, Leitlinie 02 und `ENTSCHEIDE-PROFIL-2026-10-17.md` sagten mehr zu, als die Regel leistete.

Christa Egger hat am **30.10.2026** den Auftrag gegeben: «W-2 als 2026.10.18 beheben». Die Umsetzung erfolgt als Version 2026.10.18 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-2 · Erklärgrafiken und Karussell-Knöpfe in Bändern** | Die Rücksetzregel aus 2026.10.17 erfasst zusätzlich die Erklärgrafiken mit eigener Fläche und die Karussell-Knöpfe. Die flächenlose offene Erklärgrafik (`.puk-vis-figure--open`) und der Karussell-Status stehen direkt auf dem Band und behalten dessen Farben. Werte, Spezifität 0 und die Regel aus 2026.10.15 bleiben unverändert. | `tokens/base.css` und wortgleich `components/bundle.css`: zusätzlich `.puk-carousel__btn`, `.puk-vis-figure:not(.puk-vis-figure--open)`, `.puk-vis-longdesc`, `.puk-vis-cycle li`, `.puk-vis-compare__col`, `.puk-vis-decision__branch`, `.puk-vis-illu`, `.puk-vis-tablewrap`, `.puk-vis-decide li`. Leitlinie 02 nennt die erfassten Komponenten und die Grenze; README; Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-17.md`. Neuer Test in `tests/profilentscheid-2026-10-29.test.mjs`. |

Die optionalen Befunde O-3 bis O-6 der Prüfung bleiben offen; sie sind nicht Teil dieses Auftrags. Leitlinie 02 nennt aber jetzt, dass Reiter, Formularbeschriftungen und Menüknöpfe nicht erfasst sind, damit der Text nicht wieder mehr verspricht, als die Technik leistet.

## Grenzen

- Erfasst sind die hellen Flächen der Profilkomponenten und Flächen mit `data-puk-light` oder `data-puk-surface`. Komponenten ohne eigene helle Fläche mit dunkler Schrift (Reiter, Beschriftungen von Kontrollkästchen, Optionsfeldern und Schaltern, Menüknopf) und die Entwurfsmarke des Starters bleiben im Band wie bisher; die Regel aus 2026.10.15 schliesst sie aus.
- Eine Figur der Form «Überschneidung» in einer offenen Erklärgrafik ist nicht erfasst; keine Vorlage verwendet diese Kombination.
- Geprüft im Headless-Chromium und in Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.17 unabhängig geprüft und 2026.10.18 gebaut. Die unabhängige Prüfung des Pakets `puk-website-profil-2026.10.18.zip` entfällt; an ihre Stelle tritt die Prüfung von 2026.10.19 ([ENTSCHEIDE-PROFIL-2026-10-19.md](ENTSCHEIDE-PROFIL-2026-10-19.md)), die 2026.10.18 einschliesst. Die optionalen Befunde O-3 bis O-6 sind mit 2026.10.19 behoben. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
