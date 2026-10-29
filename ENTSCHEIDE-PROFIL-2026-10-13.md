# Entscheide Profil 2026.10.13 · 29.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.10 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-29-10/PRUEFBERICHT.md), PR #142) nannte als Befund **O-A** die Knöpfe auf Nachtblau:

- `.puk-btn--secondary` und `.puk-btn--ghost` behielten auf der nachtblauen Fläche Text und Rahmen in Schwarz `#222222`. Das ergibt 1,16:1, die Knöpfe waren kaum sichtbar.
- Der React-`Button` in den Varianten `secondary` und `ghost` setzt seine Farben inline und war ebenso betroffen.
- Der Entscheid vom 29.10.2026 (Punkt 3) verlangt für Text auf Nachtblau Weiss oder Blau 25.

Christa Egger hat am **29.10.2026** den Auftrag gegeben: «Behebe O-A: Knöpfe auf Nachtblau». Die Umsetzung erfolgt als Version 2026.10.13 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **O-A · Knöpfe auf Nachtblau** | Sekundär- und Ghost-Button stehen auf der nachtblauen Fläche in Weiss (Text und Rahmen, 13,69:1). Ihr Hover bleibt die graue Fläche `--ui-wash` mit dunklem Text: HTML-Klassen Blau 125 (5,79:1), React `secondary` Schwarz. Im Druck stehen sie wie auf Weiss. Der Primärknopf behält seine schwarze Fläche und ist an der weissen Beschriftung erkennbar; der React-`Button` `inverse` bleibt die helle Variante. Ausserhalb der Fläche ändert sich nichts. | Neues Token `--action-quiet-fg` (Standard `--puk-black-100`) in `tokens/colors.css`, `components/bundle.css` und `tokens.json`. `[data-puk-surface="night"]` setzt es auf `--text-on-dark` (`tokens/base.css`, `components/bundle.css`), die Druckregel auf `inherit`. `.puk-btn--secondary` und `.puk-btn--ghost` verwenden das Token, ebenso `Button.jsx`. Test in `tests/profilentscheid-2026-10-29.test.mjs`. Leitlinie 02, README. |

Die Befunde O-B und O-C bleiben offen; sie sind nicht Teil dieses Auftrags.

## Grenzen

- Geprüft im Headless-Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Der Primärknopf auf Nachtblau (schwarze Fläche, 1,16:1 gegen die Umgebung) bleibt unverändert. Seine weisse Beschriftung erreicht 15,91:1 auf der Knopffläche und kennzeichnet ihn.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.10 unabhängig geprüft und die Versionen 2026.10.11 bis 2026.10.13 gebaut. Das Paket `puk-website-profil-2026.10.13.zip` wurde nicht unabhängig geprüft; an seine Stelle tritt die Prüfung von 2026.10.14 ([ENTSCHEIDE-PROFIL-2026-10-14.md](ENTSCHEIDE-PROFIL-2026-10-14.md)). Nachtrag: Der gedrückte Zustand ohne Hover zeigte in 2026.10.13 noch weisse Schrift auf `--ui-field`; die Korrektur kam nach dem Merge von PR #145 und ist in 2026.10.14 enthalten. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
