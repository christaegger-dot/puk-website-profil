# Entscheide Profil 2026.10.19 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.17 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-30-17/PRUEFBERICHT.md), PR #153) nannte neben W-2 vier Befunde «optional». W-2 ist mit 2026.10.18 behoben ([ENTSCHEIDE-PROFIL-2026-10-18.md](ENTSCHEIDE-PROFIL-2026-10-18.md)).

- **O-3:** Komponenten ohne eigene helle Fläche, aber mit dunkler oder blauer Schrift, bleiben in Bändern schwer lesbar: React `Tabs` und die Beschriftungen von `Checkbox`, `Radio` und `Switch` im blauen Band `#222222` auf Blau 3,38:1 (Kontrast-Theme 1,58:1), `Tabs` auf Nachtblau 1,16:1, der geöffnete Knopf des `DisclosureMenu` Blau 100 auf Blau 1,00:1. Die Entwurfsmarke `.puk-site-draft` des Starters hat eine weisse Fläche und stand auf Nachtblau Weiss auf Weiss (1,00:1). Die Regel aus 2026.10.15 nannte «Knöpfe» als zulässig, ohne zu sagen, welche gemeint sind.
- **O-4:** Kleinere Unstimmigkeiten in Texten: Leitlinie 02 beschrieb die Vererbung im Präsens, obwohl die Absicherung sie seit 2026.10.17 abfängt; die Karte «PUK-Blau» erwähnte die Absicherung der Profilkomponenten nicht; `ABSCHLUSSENTSCHEIDE.md` verwies für 2026.10.15 auf eine «Prüfung von 2026.10.16», die nie stattfand; Kommentare in `tokens/base.css`, `components/bundle.css`, `Card.jsx` und `Alert.jsx` datierten die Nachbesserung W-1 auf den 29.10.2026, der Testkommentar verwies auf `-15.md` statt `-17.md`.
- **O-5:** Der archivierte Selbstprüfbericht 2026.10.17 nannte die Headless-Shell 1243 «die der CI entspricht»; die CI lädt mit Playwright 1.62.1 die Revision 1234 (Chromium 151.0.7922.34). Er zählte 29 aktive Vorschauseiten; die Liste in `tests/browser.test.mjs` umfasst 30 Seiten und `Website.dc.html`.
- **O-6:** Der Test zu hellen Komponenten in Bändern prüfte nur den Ruhezustand und nur einen Teil der erfassten Komponenten.

Christa Egger hat am **30.10.2026** den Auftrag gegeben: «O-3 bis O-6 als 2026.10.19 beheben». Die Umsetzung erfolgt als Version 2026.10.19 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **O-3 · Komponenten ohne helle Fläche** | Die Regel nennt die zulässigen Knöpfe (`.puk-btn` und React-`Button`) und schliesst Reiter, Formularelemente mit Beschriftungen und Menüs ausdrücklich aus. Diese Komponenten erhalten keine eigenen Bandfarben; das wäre eine neue Gestaltungsentscheidung. Die Entwurfsmarke hat eine eigene helle Fläche und kommt in die Rücksetzregel. | Leitlinie 02 (Abschnitt «PUK-Blau» und Nachtblau), README, Karte «PUK-Blau», Dokumenttest; `.puk-site-draft` in `tokens/base.css` und wortgleich `components/bundle.css`. |
| **O-4 · Texte** | Formulierungen und Verweise angleichen; keine Änderung an Werten oder Regeln. | Leitlinie 02 («ohne Absicherung würde … erben»), Karte «PUK-Blau», `ABSCHLUSSENTSCHEIDE.md` (Zeile 2026.10.15, als berichtigt gekennzeichnet), Kommentare in `tokens/base.css`, `components/bundle.css`, `Card.jsx`, `Alert.jsx` und im Test. |
| **O-5 · Angaben im Selbstprüfbericht** | Archivierte Berichte bleiben unverändert; die Berichtigung steht hier und im aktuellen Prüfbericht. Ab 2026.10.18 nennen die Selbstprüfberichte die Headless-Shell 1234 als CI-Entsprechung und 30 Seiten. | Dieser Abschnitt; [Prüfbericht](PRUEFBERICHT.md). |
| **O-6 · Testabdeckung** | Der Test zu hellen Komponenten prüft alle erfassten Komponenten der Stylesheets und React-Bibliothek im Ruhezustand und im Druck, Knöpfe, Links und Felder zusätzlich mit Hover, Fokus und gedrückt ohne Hover. | `tests/profilentscheid-2026-10-29.test.mjs`, Test «Helle Komponenten in blauem Band und Nachtblau …»: zusätzlich Ghost-Knopf, Knopf-Link, HTML-Dialog, Filter, Langform-Figur und -Stütze, Medienplatzhalter, Entwurfsmarke, `Toast`, `Select`, `Textarea`, geöffnetes `DisclosureMenu`. Erklärgrafiken und Karussell prüft weiterhin der Test aus 2026.10.18. |

**Berichtigung zum archivierten Prüfbericht 2026.10.17 (O-5):** «Headless-Shell 1243, die der CI entspricht» ist zu lesen als «Headless-Shell 1243; die CI verwendet Revision 1234». «29 aktive Vorschauseiten» ist zu lesen als «30 aktive Vorschauseiten». Die unabhängige Prüfung hat beide Shells und alle 30 Seiten geprüft; die Ergebnisse ändern sich nicht.

## Grenzen

- Reiter, Formularelemente und Menüs sind im Band weiterhin nicht technisch abgesichert; die Regel schliesst sie aus.
- Der Hover-Zustand des geöffneten Menüeintrags ist nicht automatisch getestet, weil das Menü beim Fokuswechsel schliesst; Ruhezustand und Druck sind getestet.
- Geprüft im Headless-Chromium und in Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.17 unabhängig geprüft und 2026.10.18 und 2026.10.19 gebaut. Das Paket `puk-website-profil-2026.10.19.zip` (SHA-256 `ec3a97ad…`) hat am 30.10.2026 eine Sitzung geprüft, die es nicht gebaut hat, einschliesslich 2026.10.18 (PR #158): keine Befunde «kritisch», ein Befund «wichtig» (W-3, nicht erfasste helle Flächen) und drei «optional» (O-7 bis O-9); Ergebnis im [archivierten Prüfbericht](archiv/profilstand-2026-10-30-19/PRUEFBERICHT.md). W-3 ist mit Version 2026.10.20 behoben ([ENTSCHEIDE-PROFIL-2026-10-20.md](ENTSCHEIDE-PROFIL-2026-10-20.md)). Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
