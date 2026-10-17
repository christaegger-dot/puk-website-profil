# Website starten

Reihenfolge für eine neue Website der Fachstelle. Sie verhindert, dass Inhalte ungeprüft in eine Sammlung gleichartiger Module zerfallen. Der vollständige Prüf- und Freigabeablauf steht im Abschnitt «Prüfung und Freigabe».

1. **Ziel und Aufbaulogik** festlegen: eine übergeordnete Zielsetzung, eine benannte Aufbaulogik (z. B. vom Wissen zur Handlung), die Navigation spiegelt sie (Abschnitt «Gesamtkohärenz und Aufbau»).
2. **Mehrseitige psychoedukative Website:** im Repository-Stamm `npm run neu -- mein-thema --titel "Mein Thema"` ausführen. Der schlanke Starter legt vier Seiten unter `websites/mein-thema/` an und baut die Vorschau. Seitenvertrag, eigene Inhalte und Prüfbericht ausarbeiten; danach `npm run build:site -- --site websites/mein-thema`. Die zentrale Werkzeugkette bleibt im Profil; die ausführliche Musterwebsite dient als Referenz.
3. **Erkenntnisweg je Seite** skizzieren: Orientierung → Verständnis → Vertiefung → Alltagsbezug → Handlungsmöglichkeiten; Abweichungen begründen (Abschnitt «Langform und Psychoedukation», `longform-pattern.json`).
4. **Visualisierungsplan** schreiben: für jede Kernaussage die Erklärform nach Vermittlungsziel wählen und die Prüffrage beantworten (Abschnitte «Visuelle Wissensvermittlung» und «Visualisierung umsetzen»; Kopiervorlagen `longform/visualisierungsmuster.html`, `longform/erklaermuster.html`).
5. **Interaktion** nur, wo sie Orientierung schafft; zuerst die einfachste Form (Abschnitt «Interaktionskonzept»). Für Filter, Wegweiser oder Gesprächshilfen das passende Muster aus `application-patterns.json` wählen; strukturierte Kontakte und Angebote erfüllen `application-content.schema.json`.
6. **Umsetzen** mit Tokens und lokalen Assets; Inline-Textlinks und eigenständige Aktionslinks unterscheiden. Weitere Telefonnummern sind erlaubt; Krisenkontakte werden bewusst je Thema gewählt und nicht automatisch ergänzt (README-Abschnitt «Telefonnummern und Kriseninformationen»).
7. **Prüfen** nach dem Ablauf W1 → W2 → S → Visualisierungs-Check → Bedienung und Barrierefreiheit; zuletzt `node tools/gate.mjs --production` ohne blockierende Befunde.

Referenzen:

- `minimal-starter/` – schlanke Startvorlage für den Erstellungsbefehl
- `psychoeducation-site-starter/` – ausführliche Musterwebsite mit drei Referenzfällen und zentralen Werkzeugen
- `longform/visualisierungsmuster.html` – Muster A–F mit Visualisierungsplan
- `longform/erklaermuster.html` – Erklärmuster G–K
- `longform/grundlagenkapitel.html`, `handlungsuebersicht.html`, `transfer-erholung.html` – Langform-Referenzen
- `applications/` – vier Anwendungsmuster
- `Website.dc.html` – generische Seitenhülle für einzelne Seiten ohne Starter
