# Entscheide Profil 2026.10.18 · 30.10.2026

## Anlass

Eine unabhängige Prüfung des Pakets 2026.10.16 (SHA-256 `787078d8…`, Bericht in PR #151; der PR wurde nicht gemergt, Bericht und Belege stehen auf dem Branch `pruefung/2026-10-30-paket-2026-10-16`) ergab keine Befunde «kritisch» oder «wichtig» und zwei Befunde «optional»:

- **O-3:** Die Herkunftsangabe für die Knöpfe im blauen Band lautete im Kommentar von `Button.jsx` «Nachbesserungen O-A und O-C» und in `tokens.json` «(O-A, O-C)». In [ENTSCHEIDE-PROFIL-2026-10-14.md](ENTSCHEIDE-PROFIL-2026-10-14.md) sind O-C (Links, Akzent, Nebentext) und «Knöpfe im blauen Band» zwei getrennte Punkte. Dieselbe Zusammenfassung unter O-C stand auch in Leitlinie 02, in den Kommentaren zum blauen Band in `tokens/web.css` und `components/bundle.css` (Bildschirm, gedrückter Zustand und Druck), im Kommentar des Tests und in `archiv/README.md`.
- **O-4:** Der Dokumenttest zu W-1 prüfte nur den Punkt im Abschnitt «PUK-Blau» von Leitlinie 02, nicht den Punkt im Abschnitt zu Nachtblau, das README und die Karte «PUK-Blau».

Christa Egger hat am **30.10.2026** den Auftrag gegeben: «O-3 und O-4 als 2026.10.17 umsetzen». Weil 2026.10.17 inzwischen mit der technischen Absicherung von W-1 vergeben war ([ENTSCHEIDE-PROFIL-2026-10-17.md](ENTSCHEIDE-PROFIL-2026-10-17.md), PR #150), hat sie entschieden, O-3 und O-4 «als 2026.10.18 neu» auf diesem Stand aufzubauen. Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **O-3 · Herkunftsangabe** | Wo die Knöpfe im blauen Band gemeint sind, heisst die Herkunft «O-C und Knöpfe im blauen Band» bzw. «O-A und Knöpfe im blauen Band». Werte, Regeln und Darstellung ändern sich nicht. | Kommentar in `quellcode/komponenten/src/components/core/Button.jsx`, `usage` von `action-quiet-fg` in `tokens.json`, Kommentar in `tokens/web.css` und wortgleich in `components/bundle.css`, Kommentare zum gedrückten Zustand und zur Druckregel in `components/bundle.css`, Leitlinie 02 (Abschnitt «PUK-Blau», Punkt «Blaues Band»), Kommentar im Test, Eintrag `profilstand-2026-10-29-13/` in `archiv/README.md`. |
| **O-4 · Dokumenttest zu W-1** | Ein zusätzlicher Dokumenttest prüft die Regel an allen vier Stellen: Punkt im Abschnitt «PUK-Blau» und Punkt «Helle Komponenten» im Abschnitt zu Nachtblau von Leitlinie 02, README (Abschnitt «Farbe») und Karte «PUK-Blau» mit dem Link auf `#puk-blau`. | `tests/profilentscheid-2026-10-29.test.mjs` |

## Grenzen

- Kein Wert, keine Regel und keine Darstellung ändert sich; die Änderungen betreffen Herkunftsangaben, Kommentare und einen Test. Die technische Absicherung aus 2026.10.17 bleibt unverändert.
- Historische Entscheid- und Berichtsdokumente sowie die archivierten Stände bleiben unverändert.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.16 unabhängig geprüft (PR #151) und 2026.10.18 gebaut. Das Paket 2026.10.17 wurde nicht unabhängig geprüft; an seine Stelle tritt die Prüfung des Pakets `puk-website-profil-2026.10.18.zip`, die 2026.10.15 bis 2026.10.17 einschliesst. Sie muss eine andere Sitzung übernehmen und ist offen. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
