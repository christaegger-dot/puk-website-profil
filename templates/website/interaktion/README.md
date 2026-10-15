# Interaktion ohne React

HTML-Fassungen von Akkordeon, Reitern, Dropdown-Menü und Dialog für statische Websites (Psychoedukations-Starter, Eleventy, Astro). Verhalten wie die React-Komponenten und nach dem Abschnitt «Interaktionskonzept». Dazu Listenfilter und Abschnittssuche (ohne React-Fassung) und das Verhalten bei Sprungzielen.

- **Einbinden:** `components/bundle.css` (bzw. `styles.css` im Projektpaket) und `<script src="components/interaktion.js" defer></script>` – nur auf Seiten, die eine dieser Komponenten enthalten. Keine Abhängigkeiten, keine Inline-Skripte (verträglich mit einer strengen Content-Security-Policy).
- **Progressive Verbesserung:** Ohne Skript stehen Akkordeon-Antworten und Reiter-Inhalte offen untereinander, die Menüliste steht im Fluss, der Dialog-Auslöser erscheint nicht. Ein Dialog darf deshalb nie der einzige Weg zu einer Information sein.
- **Druck:** Akkordeons, Reiter und aufklappbare Vertiefungen werden vollständig gedruckt, Bedienelemente nicht. Vertiefungen (`details`) öffnet das Skript vor dem Druck; deshalb gehört es auf jede Seite mit Vertiefung (der Starter bindet es dort ein). Ohne Skript hilft `details::details-content` in den Druckregeln, wo der Browser es kennt.
- **Hauptnavigation mit Menü:** Der Starter setzt ab sieben Punkten die Navigation in `div.puk-disclosure.puk-site-menu[data-puk-disclosure]`; ist die Schaltfläche breit ausgeblendet, reagiert die Liste nicht auf Pfeiltasten.
- **Buttons:** `.puk-btn` mit `--secondary`, `--accent`, `--ghost`, `--danger`, `--sm` entspricht der React-Komponente `Button`.
- **Nachträglich eingefügte Inhalte:** `window.PUKInteraktion.init(element)`.
- **Sprungziele:** Ein Sprunglink oder ein Aufruf mit `#…` öffnet ein geschlossenes `details` um das Ziel und setzt den Fokus auf das Ziel. Abschnitte und Überschriften erhalten dafür vorübergehend `tabindex="-1"`; das Fokusbild kommt aus `bundle.css`, auch mit erzwungenen Farben. Kein eigenes Markup nötig; `main` erhält kein Fokusbild.
- **Listenfilter und Abschnittssuche** sind eine Hilfe zum Finden, nie der einzige Weg zu einem Inhalt. Ohne Skript stehen alle Einträge bzw. das Verzeichnis da, und das Feld erscheint nicht. Die Statuszeile (`role="status"`) sagt die Zahl der Treffer an. Den Index der Suche (`li[data-search-item]` mit `data-search-title`, `-text`, `-keywords`, `-level`, `-order`) legt der Build einer Website an; der Starter erzeugt keinen.

| Komponente | Markup | Optionen |
| --- | --- | --- |
| Akkordeon | `div.puk-acc[data-puk-accordion]` › `div.puk-acc__item` › `h3.puk-acc__heading` + `div.puk-acc__panel` | `data-multiple` (mehrere offen), `data-open` am Eintrag |
| Reiter | `div.puk-tabs[data-puk-tabs][aria-label]` › `section.puk-tabs__panel` › `h3.puk-tabs__heading` | `data-label` (kürzere Beschriftung), `data-selected` |
| Dropdown-Menü | `div.puk-disclosure[data-puk-disclosure]` › `span.puk-disclosure__label` + `ul.puk-disclosure__panel` › `a.puk-disclosure__link` | `aria-current="page"` am Link, `.puk-disclosure--end` |
| Dialog | `button[data-puk-dialog-open="id"]` und `dialog.puk-dialog#id[aria-labelledby]` mit `[data-puk-dialog-close]` | `data-static` (kein Schliessen per Hintergrund) |
| Listenfilter | `div[data-puk-filter]` › `div.puk-filter` (`label.puk-filter__label`, `input.puk-filter__input[type=search][data-puk-field][data-filter-input]`, `p.puk-filter__status[role=status][data-filter-status]`), `p.puk-filter__empty[data-filter-empty][hidden]` und die Einträge `[data-filter-item]` | `data-filter-selector` (andere Einträge als `[data-filter-item]`) |
| Abschnittssuche | `div[data-puk-search]` › `div.puk-filter` (wie oben mit `data-search-input`, `data-search-status`), `p.puk-filter__empty[data-search-empty][hidden]`, `ol[data-search-results][hidden]` mit dem Index und `div[data-search-directory]` | `data-search-limit` (höchstens so viele Treffer, Standard 20) |

Beispiel: `beispiel.html`; live als Karte «Interaktion ohne React» (Gruppe «Interaktion»). Karussell und Tooltip gibt es bewusst nicht als HTML-Fassung: Für statische Websites genügen Kartenliste bzw. sichtbare Beschriftung.
