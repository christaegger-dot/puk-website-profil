# Entscheide Profil 2026.10.17 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.14 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md), PR #147) nannte als Befund **W-1**, dass helle Komponenten in einem Band dessen Farben für dunklen Grund erben:

- Ein React-`Card` im blauen Band zeigte Eyebrow und Sekundärknopf Weiss auf Weiss (1,00:1).
- Nebentext einer getönten Fläche im Band war weiss statt grau.
- Auf Nachtblau stand der Text eines `Alert` Weiss auf `#F0F3FF` (1,11:1).

Version 2026.10.15 hat W-1 als Gestaltungsregel umgesetzt: In Bänder gehören nur Kicker, Titel, Text, Links, Nebentext und Knöpfe ([ENTSCHEIDE-PROFIL-2026-10-15.md](ENTSCHEIDE-PROFIL-2026-10-15.md)). Die Regel wird dort ausdrücklich nicht technisch erzwungen. Version 2026.10.16 hat die optionalen Befunde O-1 und O-2 behoben ([ENTSCHEIDE-PROFIL-2026-10-16.md](ENTSCHEIDE-PROFIL-2026-10-16.md)).

Christa Egger hatte am 30.10.2026 in der Prüf- und Nachbesserungssitzung zusätzlich eine technische Korrektur beauftragt («Behebe W-1: helle Komponenten in Bändern»). Nachdem Regel und Technik als konkurrierende Fassungen vorlagen, hat sie entschieden: «Weg 3». Die Regel aus 2026.10.15 bleibt, die technische Korrektur folgt als eigene Version. Weil 2026.10.16 inzwischen mit O-1 und O-2 vergeben war, hat sie entschieden, die technische Korrektur «als 2026.10.17 neu» aufzubauen. Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-1 · helle Komponenten in Bändern, technische Absicherung** | Helle Flächen innerhalb eines blauen oder nachtblauen Bandes erhalten die Werte der Seitenfläche zurück. Betroffen sind Text, Nebentext, Links, Akzent, die ruhigen Knöpfe (`--action-quiet-fg`) und der Fokusring. Die Rücksetzregel hat Spezifität 0, damit die eigenen Farbregeln einer Komponente vorrangig bleiben, etwa Blau 125 auf getönten Flächen. Die Regel aus 2026.10.15 bleibt verbindlich; die Technik fängt Verstösse ab. | `tokens/base.css` und `components/bundle.css`: `:where(.puk-web-band,[data-puk-surface="night"]) :where(…)`. Erfasst werden das neue Kennzeichen `data-puk-light` für eigene helle Flächen, `[data-puk-surface]` ausser Nachtblau, `.puk-dialog`, `.puk-disclosure__panel`, `.puk-carousel__slide`, `.puk-filter`, die hellen Langform-Flächen, `.puk-web-media`, `input`, `select` und `textarea`. React `Card` (ausser `brand`, `inverse`), `Alert` (ausser `emergency`) und `Toast` setzen `data-puk-light` selbst. Test in `tests/profilentscheid-2026-10-29.test.mjs`: dieselben Komponenten zeigen im blauen Band und auf Nachtblau dieselben Farben wie auf Weiss. Leitlinie 02, README, Karte «PUK-Blau». |

## Grenzen

- Erfasst sind die hellen Komponenten des Profils und Flächen mit `data-puk-light` oder `data-puk-surface`. Eine eigene helle Fläche ohne Kennzeichen erbt im Band weiterhin dessen Farben; die Regel aus 2026.10.15 und das Kennzeichen decken diesen Fall ab.
- Links in hellen Flächen bleiben im Band unterstrichen wie die übrigen Links des Bandes.
- Geprüft im Headless-Chromium und in Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.10 unabhängig geprüft und die Versionen 2026.10.11 bis 2026.10.14 sowie 2026.10.17 gebaut. Das Paket `puk-website-profil-2026.10.17.zip` wurde nicht unabhängig geprüft; an seine Stelle tritt die Prüfung von 2026.10.18 ([ENTSCHEIDE-PROFIL-2026-10-18.md](ENTSCHEIDE-PROFIL-2026-10-18.md)), die 2026.10.15 bis 2026.10.17 einschliesst. Sie muss eine andere Sitzung übernehmen und ist offen. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
