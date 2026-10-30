# Entscheide Profil 2026.10.14 · 29.10.2026

## Anlass

Nach Version 2026.10.13 waren aus der unabhängigen Prüfung des Pakets 2026.10.10 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-29-10/PRUEFBERICHT.md), PR #142) noch drei Punkte offen. Dazu kommt ein Mangel aus 2026.10.13:

- **Nachtrag zu O-A:** Auf Nachtblau zeigten Sekundär- und Ghost-Button gedrückt ohne Hover (Tastatur) weisse Schrift auf der hellen Fläche `--ui-field` `rgb(240, 243, 255)` (1,11:1). Die bauende Website-Sitzung hat das gemeldet; mit CDP `CSS.forcePseudoState` bestätigt. Die Korrektur kam erst nach dem Merge von PR #145 und fehlt deshalb in 2026.10.13.
- **O-B:** Die Karte «PUK-Blau» nannte das Titelbild als Ausnahme, aber ohne die vier Bedingungen und ohne Verweis auf die Leitlinie.
- **O-C:** Im blauen Band (`.puk-web-band` ohne `data-puk-surface`) waren Textlinks und Akzent Blau 100 auf Blau 100 (1,00:1), also unsichtbar. Nebentext stand grau auf Blau (1,26:1).
- **Knöpfe im blauen Band:** Sekundär- und Ghost-Button standen schwarz auf Blau (3,38:1); im Prüfbericht unter O-A erwähnt.

Christa Egger hat am **29.10.2026** in dieser Sitzung entschieden: «Alles als 2026.10.14». Zuvor hatte sie der bauenden Website-Sitzung auf deren Vorschlag geantwortet, die Prüf- und Nachbesserungssitzung solle O-B, O-C und die Knöpfe im blauen Band übernehmen («ja, wie vorgeschlagen»). Die Umsetzung erfolgt als Version 2026.10.14 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheide

| Punkt | Entscheid | Umsetzung |
| --- | --- | --- |
| **O-A, Nachtrag · gedrückt ohne Hover** | Gedrückt ohne Hover stehen Sekundär- und Ghost-Button auf der hellen Fläche in Schwarz (14,37:1), wie auf Weiss; mit Hover bleibt Blau 125 aus der Hover-Regel. Gilt auf Nachtblau und im blauen Band. | `:is([data-puk-surface="night"],.puk-web-band:not([data-puk-surface])) :is(.puk-btn--secondary,.puk-btn--ghost):active:not(:hover)` in `components/bundle.css` |
| **O-B · Karte «PUK-Blau»** | Die Karte nennt die vier Bedingungen des Titelbilds und verweist auf Leitlinie 02. | `components/GrundlageFarbeBlau/README.md` |
| **O-C · blaues Band** | Links (weiss, unterstrichen, auch im Hover), Akzent und Nebentext stehen im blauen Band in Weiss (4,71:1; Theme «Hoher Kontrast» 10,08:1). Im Druck entfällt die Fläche, dann gilt alles wie auf Weiss. Nachtblau und eigene Flächen mit `data-puk-surface` bleiben unverändert. | `.puk-web-band:not([data-puk-surface])` setzt die Text-, Link- und Akzentvariablen und unterstreicht Links ausser `a.puk-btn` (`tokens/web.css`, `components/bundle.css`). Druckregel mit gleicher Spezifität in `components/bundle.css`. |
| **Knöpfe im blauen Band** | Sekundär- und Ghost-Button stehen im blauen Band in Weiss wie auf Nachtblau. Hover, gedrückter Zustand und Druck wie dort; deaktivierte Knöpfe wie auf Weiss. | Dieselbe Regel setzt `--action-quiet-fg` auf `--text-on-dark`; der React-`Button` übernimmt das Token seit 2026.10.13. |

Leitlinie 02 und README beschreiben das blaue Band und den gedrückten Zustand; die Karte «PUK-Blau» nennt die Regeln für das Band.

## Grenzen

- Geprüft im Headless-Chromium und in Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Weiss auf Blau 100 erreicht 4,71:1 und damit AA für normalen Text, nicht AAA; das Theme «Hoher Kontrast» erreicht 10,08:1.
- Im Profil steht das blaue Band nur in der Vorschau `Website.dc.html` und im UI-Kit, beide mit einem einzigen Knopf `inverse`; ihre Darstellung bleibt unverändert.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.10 unabhängig geprüft und die Versionen 2026.10.11 bis 2026.10.14 gebaut. Das Paket `puk-website-profil-2026.10.14.zip` (SHA-256 `1c6fc473…`) hat am 29.10.2026 eine Sitzung geprüft, die es nicht gebaut hat, einschliesslich W-A, O-D und O-A: keine Befunde «kritisch», ein Befund «wichtig» (W-1, helle Komponenten in Bändern) und zwei «optional»; Ergebnis im [archivierten Prüfbericht](archiv/profilstand-2026-10-30-14/PRUEFBERICHT.md). W-1 ist mit Version 2026.10.15 als Regel umgesetzt ([ENTSCHEIDE-PROFIL-2026-10-15.md](ENTSCHEIDE-PROFIL-2026-10-15.md)) und mit Version 2026.10.17 technisch abgesichert ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md)); O-1 und O-2 sind mit 2026.10.16 behoben ([ENTSCHEIDE-PROFIL-2026-10-16.md](ENTSCHEIDE-PROFIL-2026-10-16.md)). Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
