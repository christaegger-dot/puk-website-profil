# Entscheide Profil 2026.10.10 · 29.10.2026

## Anlass

Die Website «Borderline – Angehörige» nutzt seit ihrer Neugestaltung (r4-43) eine dunkle Schattierung von PUK-Blau, Nachtblau `#182866`, für das Band «Haltung» auf der Startseite. Seit r4-49 zeigt ihre Startseite zudem ein Titelbild aus Flächen in Blau 25, PUK-Blau, Gelb und Nachtblau. Das Profil kannte die Farbe nicht. Für das Titelbild gilt im Profil bisher: «Vermeiden: Blau als Hintergrund für ganze Seiten oder mehrere Felder nebeneinander» (Leitlinie 02).

Christa Egger hat am 29.10.2026 in der bauenden Sitzung der Website entschieden:

> unbedingt beibehalten: E5 Nachtblau #182866

Auf die Frage, ob die Farbe im Profil-Repository als gemeinsame Änderung vorgeschlagen werden soll, antwortete sie mit «JA». Den Vorschlag mit sieben Punkten hat sie am 29.10.2026 kurz nach 18:48 UTC bestätigt:

> ja, wie vorgeschlagen

Nachweis: `PENDENZEN-UND-ENTSCHEIDE-2026-10-13.md` und `audit-results/2026-10-29-titelbild-r4-49/BERICHT.md` im Repository [`christaegger-dot/borderline-angehoerige`](https://github.com/christaegger-dot/borderline-angehoerige), Stand `f9448a2` (Titelbild mit [PR #728](https://github.com/christaegger-dot/borderline-angehoerige/pull/728), Pendenzendatei mit [PR #729](https://github.com/christaegger-dot/borderline-angehoerige/pull/729)).

Gestaltungsregeln werden nicht in einzelnen Website-Repositorys geändert. Darum werden die Punkte hier als Profilentscheid für alle Websites der Fachstelle nachgetragen.

## Bestätigte Punkte

| Nr. | Punkt | Entscheid | Umsetzung |
| --- | --- | --- | --- |
| 1 | **Ort** | Änderung in diesem Repository als Version 2026.10.10 mit diesem Entscheiddokument. | `package.json`, dieses Dokument, `tools/paket.py`, `tools/pruefe-dokumentation.mjs` |
| 2 | **Name und Wert** | `--puk-blue-night` `#182866`, benannte Schattierung von PUK-Blau («sämtliche Schattierungen zulässig»). Für den Gebrauch dient `--surface-night`. | `tokens/colors.css`, `components/bundle.css`, `tokens.json` |
| 3 | **Geltung** | Nachtblau ist nur eine Fläche, etwa für ein ruhiges dunkles Band wie «Haltung». Text darauf steht in Weiss (13,69:1) oder Blau 25 (10,45:1). Links sind weiss und unterstrichen, auch im Hover. Im Fokusring liegt Nachtblau innen und Weiss aussen. Nicht für Text, nicht als Seitengrund. | `data-puk-surface="night"` in `tokens/base.css` und `components/bundle.css`; `.puk-web-band[data-puk-surface="night"]` in `tokens/web.css` und `components/bundle.css` |
| 4 | **Zählung** | Nachtblau ist eine dunkle Fläche wie `--surface-inverse` und zählt nicht als «das eine blaue Feld» einer Komposition. | Leitlinie 02, README, Karte «PUK-Blau», `tokens.json` |
| 5 | **Titelbild als Ausnahme** | Im Einstieg der Startseite ist ein Titelbild zulässig, wenn es rein dekorativ und für Screenreader verborgen ist, keine Bedeutung trägt, kein Rot zeigt und nur einmal je Website steht. Es darf Schattierungen von PUK-Blau nebeneinander und Gelb zeigen und gilt als das eine blaue Feld. | Leitlinien 02 und 08, README, Karte «PUK-Blau» |
| 6 | **Hoher Kontrast** | Nachtblau bleibt im Theme «Hoher Kontrast» unverändert; die Werte liegen schon über 7:1. | Kein Eintrag im Theme; Test |
| 7 | **Folgen** | Die Website «Borderline» nutzt Nachtblau bereits (Band «Haltung», Titelbild). Die Website «Depression» bleibt unverändert. Bestehende Websites übernehmen Profiländerungen nicht automatisch. | Abschnitt «Folgen» |

## Gemessene Kontraste (WCAG 2.x, berechnet aus den Tokenwerten)

| Vordergrund | auf Nachtblau `#182866` |
| --- | --- |
| Weiss `#FFFFFF` (`text-on-dark`) | 13,69:1 |
| Blau 25 `#D8E0FF` | 10,45:1 |
| Blau 50 `#9DB1FF` | 6,63:1 |
| Blau 100 `#3C64FF` | 2,91:1, nicht für Text |
| Blau 125 `#2B4FE0` | 2,15:1, nicht für Text |
| Gelb `#F0EB96` (nur Fläche im Titelbild) | 11,10:1 |

Weiss und Blau 25 sind im Theme «Hoher Kontrast» unverändert; darum gelten dieselben Werte. Nachtblau gegen PUK-Blau 2,91:1: Nebeneinander bleiben die Flächen im Titelbild unterscheidbar; sie tragen dort keine Bedeutung.

## Folgen

- Die Website «Borderline – Angehörige» setzt Nachtblau und das Titelbild bereits um, mit eigenen Klassen (`.bl-band`, `.bl-titelbild`). Sie wird durch diesen Profilstand nicht geändert.
- Die Website «Depression – Angehörige» wird nicht geändert.
- Bestehende Websites erhalten die Änderung nicht automatisch.
- Die Ausnahme gilt nur für ein Titelbild der Startseite. Auf allen übrigen Seiten und Flächen bleibt «nicht mehrere blaue Felder nebeneinander».

## Grenzen

- Nachtblau ist eine Schattierung von PUK-Blau nach dem CD Manual («sämtliche Schattierungen zulässig»), aber keine von der PUK-Kommunikation freigegebene CI-Variante.
- Keine klinische, juristische oder institutionelle Freigabe. Ob ein bestimmtes Motiv als Titelbild fachlich passt, entscheidet die Fachstelle je Website.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Das Paket `puk-website-profil-2026.10.10.zip` (SHA-256 `72abb32c…`) hat am 29.10.2026 eine Sitzung geprüft, die es nicht gebaut hat: keine Befunde «kritisch», ein Befund «wichtig» (W-A, Druck der nachtblauen Fläche) und vier «optional»; Ergebnis im [archivierten Prüfbericht](archiv/profilstand-2026-10-29-10/PRUEFBERICHT.md). W-A ist mit Version 2026.10.11 behoben ([ENTSCHEIDE-PROFIL-2026-10-11.md](ENTSCHEIDE-PROFIL-2026-10-11.md)), O-D mit Version 2026.10.12 ([ENTSCHEIDE-PROFIL-2026-10-12.md](ENTSCHEIDE-PROFIL-2026-10-12.md)). Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
