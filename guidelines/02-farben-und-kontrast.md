# Farben und Kontrast

Hausfarben, Signalfarben und ihre semantische Zuordnung. Werte: Farbtokens.

_Herkunft: konsolidiert aus den Einzelleitlinien des PUK Zürich Design Systems 1.10.1; die Einzeldateien sind nicht Teil dieses Profils._

## PUK-Blau

Hausfarbe Blau `#3C64FF` mit den Stufen 75, 50 und 25; sämtliche Schattierungen sind zulässig.

- **Einsatz:** Akzent, Links, ein blaues Feld pro Komposition.
- **Pflicht:** Blau als Textfarbe nur ausnahmsweise; Blau 75 ist nicht textfähig. Auf Flächen ausser Weiss Links und Akzenttext in Blau 125 (`--text-link-on-tint`).
- **Blaues Band:** Auf dem vollen Blau (`.puk-web-band`) stehen Text, Links, Akzent und Nebentext in Weiss (4,71:1; Theme «Hoher Kontrast» 10,08:1), Links unterstrichen. Sekundär- und Ghost-Button stehen ebenfalls in Weiss (`--action-quiet-fg`), gedrückt ohne Hover auf heller Fläche in Schwarz. Im Druck entfällt die Fläche, dann gilt alles wie auf Weiss (Nachbesserung 29.10.2026, O-C, [ENTSCHEIDE-PROFIL-2026-10-14.md](../ENTSCHEIDE-PROFIL-2026-10-14.md)).
- **Keine hellen Komponenten in Bändern:** In ein Band, blau oder nachtblau, gehören nur Kicker, Titel, Text, Links, Nebentext und Knöpfe. Karten (`Card`), Hinweise (`Alert`), Karussell-Folien, Dialoge, getönte Flächen (`data-puk-surface="tint"`) und andere helle Flächen stehen ausserhalb des Bandes. Das Band setzt Text-, Link-, Akzent-, Nebentext- und Knopffarben für dunklen Grund; eine helle Fläche darin erbt diese Werte, und ihr Inhalt wird unlesbar (bis 1,00:1). Ein Inhalt, der eine Karte braucht, steht in einem eigenen Abschnitt vor oder nach dem Band (Entscheid 30.10.2026, W-1, [ENTSCHEIDE-PROFIL-2026-10-15.md](../ENTSCHEIDE-PROFIL-2026-10-15.md)).
- **Vermeiden:** Blau als Hintergrund für ganze Seiten oder mehrere Felder nebeneinander. Einzige Ausnahme ist das Titelbild der Startseite (Profilentscheid 29.10.2026, unten).

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
- **Folge:** Besuchte und unbesuchte Links sind auf getönten Flächen gleich gefärbt. Unterstreichung und Hover in Schwarz bleiben. Im Theme «Hoher Kontrast» gilt Blau 125 #001F99 (mindestens 9,68:1 auf den genannten Flächen).
- **Hover-Zustände (Nachbesserung 23.10.2026, W-3):** Die Auflage gilt auch für Bedienelemente, deren Hover-Fläche grau ist (`--ui-wash`): Ghost- und Sekundär-Button, Karussell-, Disclosure- und Dialog-Schliessen-Schaltflächen sowie `.puk-vis-btn` zeigen Text dort in `--text-link-on-tint` (5,79:1), nicht in Blau 100 (4,28:1). Links im `Alert` emergency stehen in Weiss (7,59:1). Herkunft: [ENTSCHEIDE-PROFIL-2026-10-9.md](../ENTSCHEIDE-PROFIL-2026-10-9.md).
- **Herkunft:** [ENTSCHEIDE-PROFIL-2026-10-8.md](../ENTSCHEIDE-PROFIL-2026-10-8.md).

## Profilentscheid 29.10.2026: Nachtblau und Titelbild der Startseite

- **Fläche:** `--puk-blue-night` `#182866`, eine dunkle Schattierung von PUK-Blau («sämtliche Schattierungen zulässig»), als `--surface-night`. Nachtblau ist nur eine Fläche, etwa für ein ruhiges dunkles Band (`.puk-web-band` mit `data-puk-surface="night"`). Nicht für Text und nicht als Seitengrund.
- **Text und Links darauf:** Weiss (`--text-on-dark`, 13,69:1) oder Blau 25 (`--puk-blue-25`, 10,45:1). Links sind weiss und unterstrichen, auch im Hover. Der Fokusring kehrt sich um: Nachtblau innen, Weiss aussen. `data-puk-surface="night"` setzt Fläche, Text-, Link-, Akzentfarbe und Fokusring.
- **Zählung:** Nachtblau ist eine dunkle Fläche wie `--surface-inverse`. Es zählt nicht als «das eine blaue Feld» einer Komposition.
- **Hoher Kontrast:** Nachtblau bleibt im Theme «Hoher Kontrast» unverändert; Weiss und Blau 25 erreichen darauf schon mehr als 7:1.
- **Knöpfe darauf (Nachbesserung 29.10.2026, O-A):** Sekundär- und Ghost-Button stehen auf Nachtblau in Weiss (Text und Rahmen, `--action-quiet-fg`, 13,69:1); ihr Hover bleibt die graue Fläche `--ui-wash` mit dunklem Text, gedrückt ohne Hover die helle Fläche `--ui-field` mit Schwarz (Nachtrag 2026.10.14). Der Primärknopf behält seine schwarze Fläche; er ist an der weissen Beschriftung erkennbar. Für einen hellen Knopf auf der dunklen Fläche eignet sich der React-`Button` `inverse`. Herkunft: [ENTSCHEIDE-PROFIL-2026-10-13.md](../ENTSCHEIDE-PROFIL-2026-10-13.md).
- **Druck (Nachbesserung 29.10.2026, W-A):** Im Druck entfällt die nachtblaue Fläche wie beim blauen Band. Text, Links und Akzent stehen dann wie auf Weiss, nicht in Weiss oder Blau 25. Herkunft: [ENTSCHEIDE-PROFIL-2026-10-11.md](../ENTSCHEIDE-PROFIL-2026-10-11.md).
- **Helle Komponenten:** Auch auf Nachtblau stehen keine Karten, Hinweise, Folien oder anderen hellen Flächen; Regel und Begründung wie beim blauen Band oben (Entscheid 30.10.2026, W-1).
- **Titelbild der Startseite:** Im Einstieg der Startseite ist ein Titelbild zulässig, wenn es alle vier Bedingungen erfüllt:
  - Es ist rein dekorativ und für Screenreader verborgen (`aria-hidden="true"`).
  - Es trägt keine Bedeutung.
  - Es zeigt kein Rot.
  - Es steht nur einmal je Website.

  Ein solches Titelbild darf Schattierungen von PUK-Blau nebeneinander und Gelb zeigen. Es gilt als das eine blaue Feld der Startseite. Farben stehen wie überall als Tokens im Stylesheet, nicht als Hexwerte im HTML.
- **Herkunft:** [ENTSCHEIDE-PROFIL-2026-10-10.md](../ENTSCHEIDE-PROFIL-2026-10-10.md).

## Druckfarben

Pantone-, CMYK- und RAL-Werte gehören zu Druck- und Büromedien und sind nicht Teil dieses Web-Profils (Profilentscheid 06.10.2026). Massgebend sind das PUK Zürich Design System 1.10.1 und das Handout-System der Fachstelle.
