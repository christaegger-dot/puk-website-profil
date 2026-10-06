# Interaktion ohne React

HTML-Fassungen von Akkordeon, Reitern, Dropdown-Menü und Dialog für statische Websites (Psychoedukations-Starter, Eleventy, Astro). Verhalten wie die React-Komponenten und nach dem Abschnitt «Interaktionskonzept».

- **Einbinden:** `components/bundle.css` (bzw. `styles.css` im Projektpaket) und `<script src="components/interaktion.js" defer></script>` – nur auf Seiten, die eine dieser Komponenten enthalten. Keine Abhängigkeiten, keine Inline-Skripte (verträglich mit einer strengen Content-Security-Policy).
- **Progressive Verbesserung:** Ohne Skript stehen Akkordeon-Antworten und Reiter-Inhalte offen untereinander, die Menüliste steht im Fluss, der Dialog-Auslöser erscheint nicht. Ein Dialog darf deshalb nie der einzige Weg zu einer Information sein.
- **Druck:** Akkordeons, Reiter und aufklappbare Vertiefungen werden vollständig gedruckt, Bedienelemente nicht.
- **Buttons:** `.puk-btn` mit `--secondary`, `--accent`, `--ghost`, `--danger`, `--sm` entspricht der React-Komponente `Button`.
- **Nachträglich eingefügte Inhalte:** `window.PUKInteraktion.init(element)`.

| Komponente | Markup | Optionen |
| --- | --- | --- |
| Akkordeon | `div.puk-acc[data-puk-accordion]` › `div.puk-acc__item` › `h3.puk-acc__heading` + `div.puk-acc__panel` | `data-multiple` (mehrere offen), `data-open` am Eintrag |
| Reiter | `div.puk-tabs[data-puk-tabs][aria-label]` › `section.puk-tabs__panel` › `h3.puk-tabs__heading` | `data-label` (kürzere Beschriftung), `data-selected` |
| Dropdown-Menü | `div.puk-disclosure[data-puk-disclosure]` › `span.puk-disclosure__label` + `ul.puk-disclosure__panel` › `a.puk-disclosure__link` | `aria-current="page"` am Link, `.puk-disclosure--end` |
| Dialog | `button[data-puk-dialog-open="id"]` und `dialog.puk-dialog#id[aria-labelledby]` mit `[data-puk-dialog-close]` | `data-static` (kein Schliessen per Hintergrund) |

Beispiel: `beispiel.html`; live als Karte «Interaktion ohne React» (Gruppe «Interaktion»). Karussell und Tooltip gibt es bewusst nicht als HTML-Fassung: Für statische Websites genügen Kartenliste bzw. sichtbare Beschriftung.
