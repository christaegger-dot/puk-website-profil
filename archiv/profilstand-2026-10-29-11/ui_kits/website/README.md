# Website UI-Kit · abgeleitete Referenzansichten

Das UI-Kit rekonstruiert die acht Referenzseiten des PUK Website Kits 1.10.1-r4 und zwei gekennzeichnete Kit-Beispiele. Die obere Kit-Leiste gehört zur Prüfansicht. Die Referenzseiten zeigen wählbare Gestaltungsmuster; für neue Websites gelten die aktuellen [Profilregeln](../../README.md).

| Route | Quelle oder Zweck |
| --- | --- |
| `#start` | `templates/website/Website.dc.html` |
| `#situationsnavigator` | `templates/website/applications/situationsnavigator.html` |
| `#kontaktwegweiser`, `#kontaktwegweiser/sofort` | `templates/website/applications/kontaktwegweiser.html`; demonstriert auch einen ausdrücklich gewählten Akutpfad |
| `#gespraechshilfe` | `templates/website/applications/gespraechshilfe.html` |
| `#angebotsnavigator` | `templates/website/applications/angebotsnavigator.html` |
| `#grundlagenkapitel` | `templates/website/longform/grundlagenkapitel.html` |
| `#handlungsuebersicht` | `templates/website/longform/handlungsuebersicht.html` |
| `#transfer-erholung` | `templates/website/longform/transfer-erholung.html` |
| `#beispiel-visualisierung` | eigenes gekennzeichnetes Kit-Beispiel |
| `#visualisierungsmuster` | lädt die lokale Musterseite aus `templates/website/longform/` |

Telefonnummern und Telefonlinks sind erlaubt. Krisenkontakte und ihre Darstellung werden je Thema bewusst gewählt. Die in einzelnen Referenzen sichtbaren Kontaktvarianten `direct` und `persistent-subdued` sind keine automatisch zu übernehmenden Vorgaben. Eine Diagnose allein löst keinen Krisenblock aus. Der [Starter](../../templates/website/psychoeducation-site-starter/README.md) enthält standardmässig keinen Zuständigkeits- oder Krisensatz; das [vollständige Profilbeispiel](../../templates/website/profilbeispiel/README.md) zeigt den aktuellen Standard.

Sprungziele haben die Form `#<route>/<id>`, zum Beispiel `#grundlagenkapitel/verstehen`. `index.html`, `kit.css` und `js/*.js` bilden die lokale Referenzansicht ohne CDN oder Babel zur Laufzeit. `qa.html`, `qa.css` und `qa.js` bilden die Prüfansicht. Beide verwenden die lokalen Styles und Komponenten des Repositorys.

## Geprüfter Stand · 29.10.2026

<!-- profil:stand -->
Prüfskript `qa-9`, Kit-Referenz `r4-6`, Starter-Build `r4-18`. Die Kennungen werden aus `package.json` erzeugt.
<!-- /profil:stand -->

- Matrix: 14 Ansichten × vier Breiten (320, 360, 768, 1440 px) × normale und doppelte Textgrösse = **112 Läufe, 0 mit Befund**.
- Emulierte Tastaturprüfung: **41 Prüfungen, 0 mit Befund**. Interaktionen: **19 Prüfungen, 0 mit Befund**.
- Gate: **76 Prüfungen, 0 mit Befund**; darin 74 Selbsttestfälle sowie Entwurfs- und Produktionsprüfung der Vorlage. Die leere Vorlage wird in Produktion absichtlich blockiert, zulässige Telefonnummern werden zugelassen.
- Keine nicht prüfbaren Fokusfälle im erhobenen Lauf. Zusätzliche echte Chromium-Tastenereignisse für Akkordeon und Reiter gehören zu `npm test`.

Die doppelte Textgrösse wird durch CSS emuliert. Die DOM-Fokusprüfungen und Chromium-Tastenereignisse belegen keine reale Hardware-, Firefox-, Safari- oder Screenreader-Abnahme. Diese zusätzlichen Abnahmen sind für den technischen Profilabschluss ausgeschlossen, kein verbleibender Auftrag. Neue Websites werden gesondert geprüft.

<!-- profil:ui-nachweise -->
Nachweise: [Matrixdaten](../../tests/ergebnisse/ui-matrix-2026.10.11.json), [aktueller Prüfbericht](../../PRUEFBERICHT.md). Frühere Protokolle sind [archivierte Historie](https://github.com/christaegger-dot/puk-website-profil/blob/main/archiv/README.md), keine aktuellen Prüfnachweise oder offenen Pendenzen.
<!-- /profil:ui-nachweise -->

Vollständiger wiederholbarer Lauf: `npm run test:ui`; Ergebnis unter `out-pruefung/ui-matrix.json`. Derselbe Befehl läuft in der GitHub-Aktion.

Die Wortumbruchprüfung unterscheidet erlaubte sprachliche Silbentrennung (`hyphens:auto`) von willkürlichen Notumbrüchen. Nur Wörter, die ohne Notumbruch-Regeln an denselben Stellen getrennt bleiben, gelten als Silbentrennung. Die Prüfung stellt die ursprünglichen Inline-Styles anschliessend wieder her.
