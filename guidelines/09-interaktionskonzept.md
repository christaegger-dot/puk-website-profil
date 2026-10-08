# Interaktionskonzept

Wie sich interaktive Elemente auf Websites der Fachstelle verhalten: Zustände, Bewegung, Rückmeldungen und die Regeln je Komponente. Ziel ist eine ruhige, verständliche und einheitliche Nutzerführung. Interaktion dient der Orientierung und der Gliederung von Inhalten – nie dem Effekt. Live-Beispiele: Gruppe «Interaktion» (Interaktionszustände, Karussell, Dropdown-Menü) sowie Akkordeon, Reiter, Dialog, Tooltip, Toast und Hinweis. HTML-Fassungen für statische Websites (Akkordeon, Reiter, Dropdown-Menü, Dialog): Karte «Interaktion ohne React», `components/interaktion.js`, Markup in `templates/website/interaktion/`.

## Grundsätze

1. **Sichtbar vor versteckt.** Was alle brauchen, steht offen auf der Seite. Interaktion versteckt nur Optionales: Vertiefung, Varianten, Wiederholtes. Kritische Information steht nie nur hinter einem Akkordeon, Reiter, Dialog, Tooltip oder Filter.
2. **Die einfachste Form gewinnt.** Reihenfolge der Wahl: Fliesstext oder Liste → Sprunglinks/Kapitelorientierung → Akkordeon → Reiter → Dialog. Karussell nur ausnahmsweise. Jede Komponente unten nennt, wann sie wegfällt und was stattdessen genügt.
3. **Nichts bewegt sich von selbst.** Kein Autoplay, keine Endlosschleifen, kein Parallax, keine Einblendungen beim Scrollen, keine Pop-ups beim Laden oder Verlassen. Das gilt auch für das Logo: Im Seitenkopf steht das statische Logo (Abschnitt «Marke und Logo»).
4. **Eine Handlung, eine sichtbare Antwort.** Jede Aktion hat eine Rückmeldung am Ort der Aktion, die auch Screenreader erreicht (Live-Region oder Fokus).
5. **Alle Eingabearten gleichwertig.** Alles geht mit Maus, Tastatur und Touch; nichts hängt allein an Hover, Doppelklick, Wischen oder Langdruck.
6. **Bewegung ist abbestellbar.** Bei `prefers-reduced-motion: reduce` fällt jede Animation weg; der Endzustand erscheint sofort (globale Regel in `components/bundle.css`).

## Eingabearten und Geräte

| | Maus | Tastatur | Touch |
| --- | --- | --- | --- |
| Auslösen | Klick | Enter (Links, Buttons), Leertaste (Buttons, Checkbox, Switch) | Tippen |
| Wechsel innerhalb einer Komponente | Klick | Pfeiltasten, Pos1/Ende (Reiter, Akkordeon-Kopfzeilen, Karussell, Dropdown-Liste) | Tippen, Wischen nur zusätzlich (Karussell) |
| Schliessen | Klick ausserhalb, Schliessen-Schaltfläche | Escape (Dialog, Dropdown, Tooltip) | Tippen ausserhalb, Schliessen-Schaltfläche |
| Hilfstexte | Hover **und** Fokus | Fokus | Fokus durch Tippen; nie als einzige Quelle |

- **Bedienziele:** mindestens 44 × 44 px für Buttons, Navigation und eigenständige Aktionen (`web-touch-target`). Auf Touch-Geräten (`pointer: coarse`) heben `Button`, `IconButton` und `Tag` ihre Höhe automatisch auf 44 px (`--puk-target-min`). Links im Fliesstext bleiben inline.
- **Breakpoint:** Unter 760 px stapeln sich Kopf und Navigation; schwebende Ebenen (Dropdown) klappen im Fluss auf; Reiterleisten scrollen waagrecht statt umzubrechen; Dialoge nutzen die volle Breite mit 16 px Rand.
- **Hover ist nie die einzige Auslösung.** Nichts öffnet sich bei Hover allein (Dropdown, Akkordeon); Hover zeigt nur an, dass etwas klickbar ist.
- **Prüfen** bei 320, 360, 768 und 1440 px, mit 200 % Textgrösse, nur mit Tastatur und auf einem Touch-Gerät.

## Zustände

Ein Vokabular für alle Bedienelemente (Karte «Interaktionszustände»):

| Zustand | Gestaltung | Technik |
| --- | --- | --- |
| Standard | Hausfarben gemäss Komponente | – |
| Hover | nur Farbwechsel: Primär Schwarz → Blau, Akzent Blau → Blau 125, ruhige Elemente `ui-wash` + blaue Beschriftung, Links Blau → Schwarz + Unterstreichung, verlinkte Karten Haarlinie → Blau. Keine Transparenz, kein Skalieren, kein Schatten. | `dur-fast` |
| Fokus (Tastatur) | `focus-ring` (2 px Weiss + 2 px PUK-Blau); Felder färben den Rahmen blau mit 1-px-Innenring. Nie entfernen. | `:focus-visible` |
| Gedrückt | eine Stufe weiter als Hover (Primär → `puk-blue-125`), kein Verkleinern, kein Verschieben | `:active` |
| Gewählt / aktuell | Füllung (Chip), 2-px-Unterstreichung (Reiter, Navigation) – nie nur Farbe | `aria-pressed`, `aria-selected`, `aria-current` |
| Aufgeklappt | Chevron dreht, Inhalt erscheint direkt darunter | `aria-expanded` |
| Deaktiviert | `action-disabled-bg` / `action-disabled-fg`, Cursor «nicht erlaubt»; keine Transparenz. Sparsam: besser erklären, warum etwas nicht geht, oder das Element weglassen. Links werden nie deaktiviert. | `disabled` |
| Fehler | roter Rahmen (`puk-red`) + Text in `text-danger` unter dem Feld; nie nur Farbe | `aria-invalid`, `aria-describedby` |

## Bewegung

| Element | Bewegung | Dauer, Easing | Bei reduzierter Bewegung |
| --- | --- | --- | --- |
| Hover, Fokus, Auswahl | Farbwechsel | `dur-fast` 120 ms, `ease-standard` | sofort |
| Akkordeon | Chevron dreht; Inhalt erscheint ohne Höhenanimation | `dur-base` 200 ms | sofort |
| Dropdown-Menü | Liste blendet ein und gleitet 8 px | `dur-base`, `ease-out` | sofort |
| Dialog | Hintergrund blendet ein; Fenster gleitet 8 px | 200 ms / `dur-slow` 400 ms, `ease-out` | sofort |
| Karussell | weiches Scrollen zur Folie | Browser | springt |
| Modell in Schritten (Muster G) | Teile blenden auf Knopfdruck ein | `dur-base` | sofort |

Nicht zulässig: Federn, Einzoomen, Wackeln, Pulsieren, Endlosschleifen, Scroll-Effekte, animierte Zahlen, Ladeanimationen über 1 s ohne Text.

## Rückmeldungen

| Situation | Muster |
| --- | --- |
| Feld falsch oder leer (beim Absenden) | Fehlertext direkt unter dem Feld (`Field`, `Input invalid`); bei mehreren Fehlern zusätzlich eine Liste oben im Formular mit Links zu den Feldern; Fokus auf die Liste. Nicht schon während des Tippens prüfen. |
| Formular erfolgreich gesendet | Bestätigung im Seitenfluss (`Alert tone="info"`) an Stelle des Formulars, Fokus auf die Bestätigung; sagt, was jetzt passiert («Wir melden uns innerhalb von … per E-Mail» – nur mit freigegebener Zusage). |
| Bestätigung einer kleinen Aktion (Kopieren, Merken) | kurzer Text direkt neben der Schaltfläche («Kopiert») in einer Live-Region; alternativ `Toast`. Toasts schliessen sich **nicht** automatisch und tragen nie Fehler oder Pflichtinformationen. |
| Filter, Suche | Trefferzahl als Text in einer Live-Region («3 passende Angebote»), Leerzustand mit Rückweg («Filter zurücksetzen»); Fokus bleibt auf dem Bedienelement. |
| Laden | in der Regel vermeiden (lokale Inhalte). Dauert etwas länger als 1 s: Text «Wird geladen …» in einer Live-Region, kein Spinner allein. |
| Hinweis, der für die Seite gilt | `Alert` im Seitenfluss, ohne Animation; Info, Warnung, Fehler unterscheiden sich durch Icon und Titel, nicht nur Farbe. `tone="emergency"` wird nicht verwendet. |

## Komponenten

### Akkordeon (`Accordion`)

- **Zweck:** optionale Vertiefung oder viele gleichartige Fragen kompakt anbieten.
- **Einsatz:** FAQ («Häufige Fragen von Angehörigen»), Glossar, Varianten für einzelne Situationen, Quellenhinweise.
- **Verzichten, wenn:** der Inhalt für alle wichtig ist, aufeinander aufbaut oder weniger als drei Einträge hat → Fliesstext mit Zwischentiteln. Bei sehr langen Seiten → Kapitelorientierung mit Sprunglinks.
- **Gestaltung:** Kopfzeile in Lesegrösse, Haarlinie zwischen den Einträgen, Chevron rechts; keine Kartenrahmen, keine Hintergrundflächen.
- **Verhalten:** Klick, Enter oder Leertaste öffnet und schliesst; Pfeil auf/ab, Pos1/Ende springen zwischen Kopfzeilen; mehrere Einträge dürfen offen sein (`allowMultiple`), Standard ist einer. Geschlossene Inhalte bleiben im DOM (`hidden`); die Überschriftenebene passt zur Seite (`headingLevel`).
- **Desktop/Mobil:** gleich; ganze Kopfzeile ist Klickziel (≥ 44 px).
- **Beispiel:** «Muss ich die Schweigepflicht der Ärztin akzeptieren?» als Frage, Antwort im Panel; der Kernsatz zu Rechten steht zusätzlich offen im Abschnitt davor.

### Reiter (`Tabs`)

- **Zweck:** gleichrangige Varianten **desselben** Inhalts wechseln, von denen jeweils nur eine relevant ist.
- **Einsatz:** derselbe Abschnitt für verschiedene Rollen («Für Eltern · Für Partnerinnen und Partner · Für Geschwister»).
- **Verzichten, wenn:** man die Inhalte vergleichen muss (→ `Table` oder Vergleich), sie nacheinander gelesen werden sollen (→ Fliesstext), mehr als vier Reiter oder lange Beschriftungen nötig wären (→ Akkordeon) oder ein Reiter wichtige Information enthält, die alle brauchen.
- **Gestaltung:** Beschriftungen in Lesegrösse, aktiver Reiter mit 2-px-Unterstreichung in PUK-Blau und Schwarz; inaktive in `text-muted`; Haarlinie unter der Leiste.
- **Verhalten:** ein Tab-Stopp für die Leiste; Pfeil links/rechts, Pos1/Ende wechseln und aktivieren; Tab springt in das Panel. Ziele mindestens 44 px hoch.
- **Desktop/Mobil:** Unter 760 px scrollt die Leiste waagrecht; der aktive Reiter wird sichtbar gehalten. Mehr als drei Reiter auf schmalen Bildschirmen → Akkordeon prüfen.
- **Beispiel:** Abschnitt «So sprechen Sie das Thema an» mit drei Reitern für drei Rollen; der allgemeine Teil steht über den Reitern.

### Karussell (`Carousel`)

- **Zweck:** wenige gleichrangige, in sich abgeschlossene Einheiten nacheinander zeigen, wenn Platz knapp ist.
- **Einsatz:** ausnahmsweise, z. B. vier Beispielsätze «Sätze, die helfen können» oder freigegebene kurze Erfahrungsberichte.
- **Verzichten, wenn:** Inhalte wichtig sind, eine Reihenfolge haben (→ Prozesspfad), mehr als sechs Einheiten oder auf Desktop genug Platz für eine Kartenliste ist (→ `.puk-web-card-list`), oder es nur der Auflockerung dient. Im Zweifel immer die Kartenliste.
- **Gestaltung:** eine Folie sichtbar, weisse Fläche mit Haarlinie; darunter Zurück/Weiter (44 px) und die Position als Text «Folie 2 von 4». Keine Punkte-Navigation, keine Pfeile über dem Inhalt.
- **Verhalten:** kein Autoplay, keine Endlosschleife (Schaltflächen am Anfang/Ende deaktiviert); Pfeiltasten, Pos1/Ende im fokussierten Folienbereich; Links in jeder Folie mit Tab erreichbar; Position in einer höflichen Live-Region.
- **Desktop/Mobil:** Touch wischt (natives Scrollen mit Einrasten), Maus und Tastatur nutzen die Schaltflächen bzw. Pfeiltasten.
- **Bewegung:** weiches Scrollen nur ohne reduzierte Bewegung.

### Dropdown-Menü (`DisclosureMenu`)

- **Zweck:** eine Gruppe von Seitenlinks platzsparend in der Navigation anbieten.
- **Einsatz:** Hauptnavigation mit mehr als sechs Einträgen («Themen» mit acht Themenseiten); auf schmalen Bildschirmen als «Menü», wenn die umbrechende Navigation zu lang wird.
- **Verzichten, wenn:** bis sechs Hauptpunkte (→ sichtbare Navigation, unter 760 px als Raster); für Aktionen wie Drucken oder Teilen (→ Buttons); für Werte in Formularen (→ `Select`, `RadioGroup`); als einziger Weg zu wichtigen Seiten (→ zusätzlich Lesepfade auf der Startseite).
- **Gestaltung:** Schaltfläche wie ein Navigationspunkt mit Chevron; offen in PUK-Blau. Die Liste schwebt auf breiten Bildschirmen (weiss, Haarlinie, `shadow-overlay`), Einträge 44 px hoch, optional mit Kurzbeschreibung; aktuelle Seite unterstrichen (`aria-current`).
- **Verhalten:** Klick, Enter, Leertaste öffnen und schliessen (kein Öffnen bei Hover); Pfeil ab öffnet und springt zum ersten Link, Pfeil auf/ab bewegt; Escape schliesst und setzt den Fokus zurück; Klick ausserhalb und Wegtabben schliessen. Einträge sind normale Links (Disclosure-Muster, kein `role="menu"`).
- **Desktop/Mobil:** unter 760 px klappt die Liste im Fluss auf, ohne Schatten.

### Auswahlliste (`Select`) – kein Dropdown-Menü

- **Zweck:** einen Wert in einem Formular wählen. Native Auswahlliste, damit Mobilgeräte ihre eigene Auswahl zeigen.
- **Verzichten, wenn:** weniger als fünf Optionen → `RadioGroup` (alle Optionen sichtbar); zur Navigation → Links.

### Dialog (`Dialog`)

- **Zweck:** eine kurze, in sich geschlossene Entscheidung oder Bestätigung, die die Seite unterbricht.
- **Einsatz:** selten, z. B. «Eingaben löschen?» vor dem Zurücksetzen eines ausgefüllten Reflexionsbogens.
- **Verzichten, wenn:** Inhalte gelesen werden sollen (→ eigene Seite oder Abschnitt), Information wichtig ist (→ offen auf der Seite), es um Werbung, Newsletter oder Hinweise beim Laden geht (nie).
- **Gestaltung:** weisse Fläche, eckig, `shadow-overlay`, Hintergrund `scrim`; Titel, kurzer Text, rechts unten die Aktionen (primäre Aktion rechts, «Abbrechen» als Sekundär).
- **Verhalten:** Fokus springt in den Dialog, Tab bleibt im Dialog, Escape und Klick auf den Hintergrund schliessen (wenn Schliessen erlaubt ist), Fokus kehrt zum Auslöser zurück, die Seite dahinter scrollt nicht. Lange Inhalte scrollen innerhalb des Dialogs.
- **Desktop/Mobil:** maximal 480 px breit; mobil volle Breite mit 16 px Rand; Schliessen-Schaltfläche auf Touch 44 px.

### Tooltip (`Tooltip`)

- **Zweck:** den Namen eines Bedienelements ohne sichtbare Beschriftung ergänzen.
- **Einsatz:** fast nur bei `IconButton` (z. B. «Drucken»).
- **Verzichten, wenn:** die Information zum Verständnis nötig ist (Begriffserklärungen, Abkürzungen wie KESB) → im Text erklären oder ein Glossar-Akkordeon; auf Touch-Geräten gibt es kein Hover.
- **Verhalten:** erscheint bei Hover und Fokus, bleibt offen, solange Zeiger oder Fokus auf Auslöser oder Tooltip liegen, schliesst mit Escape; kurze Schliessverzögerung (150 ms). Nie an deaktivierten Elementen.

### Toast (`Toast`) und Hinweis (`Alert`)

- **Toast:** kurze Bestätigung nach einer eigenen Aktion; `role="status"`; schliesst sich nicht automatisch; nie für Fehler, Pflichtinformation oder Krisen. Mobil volle Breite unten mit Rand.
- **Hinweis:** gilt für die Seite oder einen Abschnitt; steht im Seitenfluss, ohne Animation, nicht schliessbar, wenn er wichtig ist.

### Filter-Chips (`Tag` mit `onClick`)

- **Zweck:** wenige Kategorien filtern (Situationsnavigator, Angebotsnavigator).
- **Verhalten:** Umschalter mit `aria-pressed`; Trefferzahl in einer Live-Region; sichtbarer Rücksetzweg; Fokus bleibt auf dem Chip. Auf Touch 44 px hoch.
- **Verzichten, wenn:** weniger als zehn Inhalte → alle zeigen; mehr als acht Kategorien → Suche oder Gliederung.

### Schalter, Kontrollkästchen, Optionsfelder

- **Switch:** nur für eine Einstellung mit sofortiger Wirkung (z. B. «Hoher Kontrast»). Gehört die Auswahl zu einem Formular, das erst mit «Senden» wirkt → `Checkbox`.
- **Checkbox:** unabhängige Ja/Nein-Auswahlen; **RadioGroup:** genau eine von zwei bis fünf Optionen, alle sichtbar.
- Die Beschriftung ist immer Teil des Klickziels.

### Links und Buttons

- **Link** führt zu einem Ort (Seite, Abschnitt, Datei mit Format- und Grössenangabe); **Button** löst eine Aktion aus. Nie einen Link als Button verkleiden oder umgekehrt.
- Inline-Links im Satz (`.puk-link--inline`), eigenständige Aktionslinks als `.puk-link--action` (44 px). Externe Links sagen das im Linktext oder per Icon mit Text; neue Fenster nur mit Ankündigung.

### Navigation und Kapitelorientierung

- Kopf nicht fixiert; Skip-Link «Zum Hauptinhalt» als erster Tab-Stopp; aktuelle Seite mit `aria-current` und Unterstreichung.
- Bis sechs Hauptpunkte sichtbar; unter 760 px als Raster mit Trennlinien; darüber `DisclosureMenu`.
- Lange Seiten (ab vier Hauptabschnitten) erhalten eine Kapitelorientierung mit Sprunglinks (`.puk-longform__roadmap`); Sprungziele mit `scroll-margin-top`, weiches Scrollen nur ohne reduzierte Bewegung.

## Entscheidungshilfe

| Ich möchte … | Einfachste Lösung | Erst wenn das nicht reicht |
| --- | --- | --- |
| viel Text gliedern | Zwischentitel, Listen | Kapitelorientierung mit Sprunglinks |
| Optionales verbergen | – (zeigen) | Akkordeon |
| Varianten für Zielgruppen zeigen | getrennte Abschnitte mit Zwischentitel | Reiter (bis vier) |
| mehrere Beispiele zeigen | Liste oder Kartenliste | Karussell (bis sechs) |
| viele Seiten in der Navigation | Gliederung kürzen, Lesepfade | Dropdown-Menü |
| eine Bestätigung einholen | Rückgängig-Möglichkeit anbieten | Dialog |
| ein Icon erklären | sichtbare Beschriftung | Tooltip |
| über eine Aktion informieren | Text neben der Schaltfläche | Toast |

## Prüfliste vor der Übergabe

- Alles mit Tastatur erreichbar und bedienbar, Reihenfolge logisch, Fokus immer sichtbar und nicht verdeckt.
- Jede Komponente mit Touch bedienbar, Ziele ≥ 44 px; nichts nur per Hover.
- Escape schliesst Dropdown, Dialog und Tooltip; Fokus kehrt zurück.
- Zustände (`aria-expanded`, `aria-selected`, `aria-pressed`, `aria-current`, `aria-invalid`) stimmen mit der Anzeige überein.
- Rückmeldungen erreichen Screenreader (Live-Region oder Fokus).
- Mit `prefers-reduced-motion: reduce` bewegt sich nichts; ohne reduzierte Bewegung nichts von selbst.
- Bei 320 px kein waagrechter Überlauf ausser in der Reiterleiste und im Karussell.
