# PUK-Blau

Hausfarbe Blau in vier Rasterstufen plus Hover-Schattierung 125 und Nachtblau.

Foundation-Karte aus dem Website-Profil (keine Komponente im Bundle).

Hausfarbe Blau `#3C64FF` mit den Stufen 75, 50 und 25; sämtliche Schattierungen sind zulässig.

- **Einsatz:** Akzent, Links, ein blaues Feld pro Komposition.
- **Pflicht:** Blau als Textfarbe nur ausnahmsweise; Blau 75 ist nicht textfähig. Auf Flächen ausser Weiss Links, Akzenttext und Hover-Zustände in Blau 125 (`--text-link-on-tint`, Profilentscheid 22.10.2026, ergänzt 23.10.2026).
- **Nachtblau:** `--puk-blue-night` `#182866` als `--surface-night`, nur Fläche, etwa ein dunkles Band mit `data-puk-surface="night"`; Text Weiss oder Blau 25, Links weiss und unterstrichen. Zählt nicht als das eine blaue Feld (Profilentscheid 29.10.2026).
- **Blaues Band:** Text, Links (unterstrichen), Akzent und Nebentext in Weiss (4,71:1), Sekundär- und Ghost-Button ebenfalls (Nachbesserung 29.10.2026).
- **Keine hellen Komponenten in Bändern:** Karten, Hinweise, Folien und getönte Flächen stehen ausserhalb blauer und nachtblauer Bänder, ebenso Reiter, Formularelemente und Menüs; im Band gehören nur Kicker, Titel, Text, Links, Nebentext und Knöpfe (`.puk-btn`, React-`Button`) (Entscheid 30.10.2026, [Leitlinie 02](../../guidelines/02-farben-und-kontrast.md#puk-blau)). Stehen helle Profilkomponenten doch im Band, gibt ihnen das Profil die Farben der Seitenfläche zurück (seit 2026.10.17, erweitert bis 2026.10.20; die erfassten Komponenten nennt Leitlinie 02); eigene helle Flächen brauchen dafür `data-puk-light`, sonst erben sie die weissen Farben des Bandes.
- **Vermeiden:** Blau als Hintergrund für ganze Seiten oder mehrere Felder nebeneinander.
- **Ausnahme Titelbild:** Im Einstieg der Startseite ist ein Titelbild aus Schattierungen von PUK-Blau und Gelb zulässig, wenn es rein dekorativ und für Screenreader verborgen ist (`aria-hidden="true"`), keine Bedeutung trägt, kein Rot zeigt und nur einmal je Website steht. Es gilt als das eine blaue Feld der Startseite. Regeln: [Leitlinie 02, Abschnitt «Profilentscheid 29.10.2026»](../../guidelines/02-farben-und-kontrast.md#profilentscheid-29102026-nachtblau-und-titelbild-der-startseite).
