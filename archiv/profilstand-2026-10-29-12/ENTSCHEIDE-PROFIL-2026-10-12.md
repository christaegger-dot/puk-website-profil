# Entscheide Profil 2026.10.12 · 29.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.10 (Prüfbericht im [archivierten Stand](archiv/profilstand-2026-10-29-10/PRUEFBERICHT.md), PR #142) nannte als Befund **O-D** einen zeitabhängigen Fehler der Vorschau `templates/website/Website.dc.html`. In der CI scheiterte `tests/browser.test.mjs` vereinzelt an «TypeError: Cannot read properties of undefined (reading 'useState')» in `_ds_bundle.js`, bei PR #142 zweimal.

- **Ursache:** `_ds_bundle.js` übernimmt `window.React` schon beim Laden der Datei. `ds-base.js` lud das Bundle sofort, während `support.js` React gleichzeitig nachlädt. War das Bundle zuerst da, blieb seine React-Kopie leer.
- **Reproduktion:** Mit 800 ms Verzögerung für React scheitert die Vorschau jedes Mal (24 Fehler, kein Inhalt). Mit verzögertem Bundle oder ohne Verzögerung läuft sie fehlerfrei.

Christa Egger hat am **29.10.2026** den Auftrag gegeben: «Behebe O-D: Vorschaufehler Website.dc.html». Die Umsetzung erfolgt als Version 2026.10.12 in diesem Repository; Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **O-D · Vorschau `Website.dc.html`** | Der Plattformadapter lädt `_ds_bundle.js` erst, wenn `window.React` und `window.ReactDOM` bereitstehen. Fehlt React nach 15 s noch, meldet er das in der Konsole, statt das Bundle mit leerer React-Kopie zu laden. Das Bundle selbst und die erzeugten Websites bleiben unverändert. | `templates/website/ds-base.js`. Test in `tests/profilentscheid-2026-10-29.test.mjs`: Vorschau mit 800 ms verzögertem React ohne Fehler und mit gleichem Inhalt wie ohne Verzögerung. Starter-Build r4-19. |

Die Befunde O-A bis O-C bleiben offen; sie sind nicht Teil dieses Auftrags.

## Grenzen

- Die Korrektur betrifft nur die Plattformvorschau. Erzeugte Websites und das UI-Kit laden React vor dem Bundle und waren nicht betroffen.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.10 unabhängig geprüft und 2026.10.11 und 2026.10.12 gebaut. Das Paket `puk-website-profil-2026.10.12.zip` prüft darum eine andere Sitzung; die Prüfung schliesst die Nachbesserung W-A aus 2026.10.11 ein. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
