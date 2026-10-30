# Entscheide Profil 2026.10.16 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.14 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md), PR #147) nannte neben W-1 zwei Befunde «optional»; W-1 ist mit 2026.10.15 als Regel umgesetzt ([ENTSCHEIDE-PROFIL-2026-10-15.md](ENTSCHEIDE-PROFIL-2026-10-15.md)).

- **O-1:** Die Beschreibung des Tokens `action-quiet-fg` nannte nur die nachtblaue Fläche: `tokens.json`, die Kommentare in `tokens/colors.css` und `components/bundle.css` sowie der Kommentar im React-`Button`. Seit 2026.10.14 setzt auch das blaue Band das Token auf Weiss.
- **O-2:** Der Browsertest zum blauen Band prüfte im Druck die Farbe von `button.puk-btn`. Diese Knöpfe sind im Druck ausgeblendet (`components/bundle.css`, `@media print`), der Test belegte für sie also keine sichtbare Ausgabe. Berichtigung zum Prüfbericht: Der Knopftest auf Nachtblau misst im Druck bereits einen Knopf-Link (`a.puk-btn--secondary`) und den React-`Button`; betroffen war nur der Test zum blauen Band.

Christa Egger hat am **30.10.2026** den Auftrag gegeben: «O-1 und O-2 als 2026.10.16 umsetzen». Die Umsetzung erfolgt als Version 2026.10.16 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **O-1 · Beschreibung `action-quiet-fg`** | Die Beschreibung nennt beide Flächen, die das Token auf Weiss setzen: die nachtblaue Fläche (13,69:1) und das blaue Band (4,71:1). Werte und Regeln ändern sich nicht. | `tokens.json` (`usage`), Kommentar in `tokens/colors.css` und wortgleich in `components/bundle.css`, Kommentar in `quellcode/komponenten/src/components/core/Button.jsx`. |
| **O-2 · Drucktest im blauen Band** | Der Test zum blauen Band enthält zusätzlich einen Knopf-Link `a.puk-btn--secondary`. Er prüft: am Bildschirm Weiss; im Druck sichtbar, Text und Rahmen Schwarz; `button.puk-btn` im Druck ausgeblendet. | `tests/profilentscheid-2026-10-29.test.mjs` |

## Grenzen

- Kein Wert, keine Regel und keine Darstellung ändert sich; die Änderungen betreffen Beschreibungen, Kommentare und einen Test.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.14 unabhängig geprüft und 2026.10.15 und 2026.10.16 gebaut. Die Pakete `puk-website-profil-2026.10.15.zip` und `puk-website-profil-2026.10.16.zip` wurden nicht unabhängig geprüft; an ihre Stelle tritt die Prüfung von 2026.10.17 ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md)). Sie muss eine andere Sitzung übernehmen und ist offen. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
