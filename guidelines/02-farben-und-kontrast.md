# Farben und Kontrast

Hausfarben, Signalfarben und ihre semantische Zuordnung. Werte: Farbtokens.

_Herkunft: konsolidiert aus den Einzelleitlinien des PUK Zürich Design Systems 1.10.1; die Einzeldateien sind nicht Teil dieses Profils._

## PUK-Blau

Hausfarbe Blau `#3C64FF` mit den Stufen 75, 50 und 25; sämtliche Schattierungen sind zulässig.

- **Einsatz:** Akzent, Links, ein blaues Feld pro Komposition.
- **Pflicht:** Blau als Textfarbe nur ausnahmsweise; Blau 75 ist nicht textfähig. Auf Flächen ausser Weiss Links und Akzenttext in Blau 125 (`--text-link-on-tint`).
- **Vermeiden:** Blau als Hintergrund für ganze Seiten oder mehrere Felder nebeneinander.

## Schwarz und Weiss

Hausfarbe Schwarz `#222222` mit den Stufen 75, 50 und 25.

- **Einsatz:** Text, Linien, inverse Flächen.
- **Pflicht:** Lauftext in Schwarz 100 oder 75; Schwarz 50 nur für Linien, Rahmen und Grosstext ab 24 px.
- **Vermeiden:** `#000000` ausserhalb der gekennzeichneten Web-Ausnahme.

## Signalfarben

Signalfarben Gelb und Rot sowie Weiss als dritte Hausfarbe.

- **Einsatz:** Gelb und Rot nur punktuell, etwa für Warnung, Notfall oder genau eine Ausnahme im Diagramm.
- **Pflicht:** Auf Gelb steht Schwarz 100; Text in Rot nur als `--text-danger` (`#9E2814`).
- **Vermeiden:** Signalrot `#DC503C` als Textfarbe (4,00:1); Rot und Gelb gemeinsam mit Blau.

## Semantische Aliase

Zuordnung der Hausfarben zu Oberflächenrollen (`--text-*`, `--surface-*`, `--border-*`, `--status-*`).

- **Einsatz:** In Komponenten und Templates immer semantische Tokens statt Primitiven verwenden.
- **Pflicht:** Neue Arbeit ausschliesslich mit `--type-*` und `--text-large-only`.
- **Vermeiden:** Die zehn veralteten Verweise (`--text-body` usw., `--text-subtle`). Sie werden in 2.0.0 entfernt, frühestens am 31. März 2027.

## Kontrast

Gemessene Kontrastverhältnisse der Hausfarben, getrennt nach Lauftext (4,5:1), Grosstext (3:1) und Bedienelementen/Grafik (3:1).

- **Einsatz:** Vor jeder Farbwahl für Text auf farbigem Grund.
- **Pflicht:** Fehlertext und Pflichtsterne in `--text-danger`; auf hellblauem Grund bleibt Text schwarz. Auf jeder Fläche ausser Weiss kein Text unter 24 px in Blau 100; Links dort in `--text-link-on-tint`.
- **Vermeiden:** Schwarz 50, Blau 75, Gelb oder Signalrot als Textfarbe; `--text-large-only` für Lauftext.
- **Status:** Werte gemessen und nicht verhandelbar; WCAG-Grundlage ist eine Ergänzung zum Manual.

## Schattierungen

«Es sind sämtliche Schattierungen der jeweiligen Grundfarbe zulässig»: Die Stufen 100/75/50/25 sind Bezugspunkte, keine Grenze.

- **Einsatz:** Wenn eine Zwischenstufe nötig ist, etwa für Flächen oder Hover.
- **Pflicht:** Zwischenstufen als benanntes Primitiv anlegen (Beispiele: `--ui-wash`, `--ui-tint`, `--puk-blue-125`).
- **Vermeiden:** Feste Hexwerte direkt in Komponenten; Mischungen aus zwei Hausfarben.

## Arbeitspalette

Die Arbeitspalette begrenzt die Farbfreiheit der Marke bewusst für eine konkrete Publikation, bevor die Produktion beginnt.

- **Einsatz:** Zu Beginn jeder grösseren Website die verwendeten Stufen festlegen, besonders wenn mehrere Illustrationen oder Erklärmuster eigene Schattierungen brauchen.
- **Pflicht:** Nur Schattierungen der Hausfarben; Signalfarben punktuell.
- **Status:** Arbeitsmethode des Systems; Zwischenstufen als benanntes Primitiv anlegen, nie zwei Hausfarben mischen.

## Profilentscheid 22.10.2026: getönte Fläche und Links darauf

- **Fläche:** `--ui-tint` `#F5F7FF`, PUK-Blau rund 5 % auf Weiss, als `--surface-tint` für Einstieg, Einstiegskarten, Kästen, verwandte Themen und Fusszeile. Weiss bleibt die Seitenfläche. Gegen Weiss 1,07:1: Die Fläche gliedert, sie trägt keine Bedeutung.
- **Text darauf:** `--text-default` 14,87:1, `--text-muted` 5,53:1. `--text-large-only` 2,98:1 nur für Rahmen und Deaktiviertes.
- **Auflage:** Auf jeder Fläche ausser Weiss steht kein Text unter 24 px in Blau 100. Links und Akzenttext stehen dort in `--text-link-on-tint` (Blau 125).

| Fläche | Blau 100 | Blau 125 |
| --- | --- | --- |
| `--ui-tint` #F5F7FF | 4,40:1 | 5,95:1 |
| `--ui-wash` #F4F4F4 | 4,28:1 | 5,79:1 |
| `--ui-field` #F0F3FF | 4,25:1 | 5,75:1 |
| `--surface-structure` #F7F7F7 | 4,40:1 | 5,94:1 |
| `--puk-yellow-50` #F8F5CB | 4,24:1 | 5,74:1 |
| `--ui-danger-wash` #FBEAE7 | 4,04:1 | 5,47:1 |
| `--puk-blue-25` #D8E0FF | 3,59:1 | 4,86:1 |

- **Umsetzung:** Die getönten Flächen des Profils (Langform, Erklär- und Visualisierungsmuster, Starter, Anwendungen, `Card` sunken, `Alert` ausser emergency) setzen `--text-link` und `--text-accent` auf `--text-link-on-tint`. Eigene Flächen erhalten dasselbe mit `data-puk-surface`; `data-puk-surface="tint"` setzt zusätzlich die Fläche.
- **Folge:** Besuchte und unbesuchte Links sind auf getönten Flächen gleich gefärbt. Unterstreichung und Hover in Schwarz bleiben. Im Theme «Hoher Kontrast» gilt Blau 125 #001F99.
- **Herkunft:** [ENTSCHEIDE-PROFIL-2026-10-8.md](../ENTSCHEIDE-PROFIL-2026-10-8.md).

## Druckfarben

Pantone-, CMYK- und RAL-Werte gehören zu Druck- und Büromedien und sind nicht Teil dieses Web-Profils (Profilentscheid 06.10.2026). Massgebend sind das PUK Zürich Design System 1.10.1 und das Handout-System der Fachstelle.
