# Entscheide Profil 2026.10.11 · 29.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.10 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-29-10/PRUEFBERICHT.md), PR #142) ergab einen Befund «wichtig» und vier «optional». Befund **W-A**: Im Druck verliert das nachtblaue Band seine Fläche, der Text bleibt aber weiss und Blau 25. Im PDF aus Chromium erscheint er als #ABABAB auf Weiss (2,30:1). Ursache ist die Regel `[data-puk-surface="night"]`: Sie setzt `--text-default` auf der Fläche auf Weiss, und die Druckregel `.puk-web-band{color:var(--text-default)!important}` übernimmt diesen Wert.

Christa Egger hat am **29.10.2026** in der Prüfsitzung den Auftrag gegeben: «Behebe W-A: Druck des nachtblauen Bandes». Die Umsetzung erfolgt als Version 2026.10.11 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-A · Druck der nachtblauen Fläche** | Im Druck entfällt die nachtblaue Fläche wie beim blauen Band. Text, Nebentext, Links und Akzent übernehmen die Farben der Umgebung, stehen also wie auf Weiss (Text `#222222`, Links Blau 100 und unterstrichen). Am Bildschirm ändert sich nichts. | `@media print` in `components/bundle.css`: `[data-puk-surface="night"]` mit `background:none!important`, den Textvariablen auf `inherit` und `color:var(--text-default)!important`. Test in `tests/profilentscheid-2026-10-29.test.mjs` (Druckansicht, beide Themes). Leitlinie 02, README. |

Die Befunde O-A bis O-D bleiben offen; sie sind nicht Teil dieses Auftrags.

## Grenzen

- Geprüft wird die Druckansicht im Headless-Chromium (`emulateMedia`) und ein PDF aus Chromium ohne Hintergrundgrafik, kein Ausdruck auf Papier und keine anderen Browser.
- Knopf-Links (`a.puk-btn`) verlieren im Druck wie bisher ihre Fläche, auch im blauen Band; das ist unverändert.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Die Sitzung, die das Paket 2026.10.10 unabhängig geprüft hat, hat diese Nachbesserung gebaut. Das Paket `puk-website-profil-2026.10.11.zip` prüft darum eine andere Sitzung. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
