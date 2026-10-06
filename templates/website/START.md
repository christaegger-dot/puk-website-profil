# Website starten

Reihenfolge für eine neue Website der Fachstelle. Sie verhindert, dass Inhalte ungeprüft in eine Sammlung gleichartiger Module zerfallen. Der vollständige Prüf- und Freigabeablauf steht im Abschnitt «Prüfung und Freigabe».

1. **Ziel und Aufbaulogik** festlegen: eine übergeordnete Zielsetzung, eine benannte Aufbaulogik (z. B. vom Wissen zur Handlung), die Navigation spiegelt sie (Abschnitt «Gesamtkohärenz und Aufbau»).
2. **Mehrseitige psychoedukative Website:** mit `psychoeducation-site-starter/` beginnen. Seitenvertrag in `site.config.json` ausfüllen – Absenderin, Seiten, Hinweis «ersetzt keine Abklärung», optional Zuständigkeitsverweis ohne Nummern, Visualisierungsplan –, Inhalte in `content/`, dann `node tools/build.mjs`.
3. **Erkenntnisweg je Seite** skizzieren: Orientierung → Verständnis → Vertiefung → Alltagsbezug → Handlungsmöglichkeiten; Abweichungen begründen (Abschnitt «Langform und Psychoedukation», `longform-pattern.json`).
4. **Visualisierungsplan** schreiben: für jede Kernaussage die Erklärform nach Vermittlungsziel wählen und die Prüffrage beantworten (Abschnitte «Visuelle Wissensvermittlung» und «Visualisierung umsetzen»; Kopiervorlagen `longform/visualisierungsmuster.html`, `longform/erklaermuster.html`).
5. **Interaktion** nur, wo sie Orientierung schafft; zuerst die einfachste Form (Abschnitt «Interaktionskonzept»). Für Filter, Wegweiser oder Gesprächshilfen das passende Muster aus `application-patterns.json` wählen; strukturierte Kontakte und Angebote erfüllen `application-content.schema.json`.
6. **Umsetzen** mit Tokens und lokalen Assets; Inline-Textlinks und eigenständige Aktionslinks unterscheiden. Kein Krisenzugang, keine Telefonnummern (README-Abschnitt «Zuständigkeit statt Krisenzugang»).
7. **Prüfen** nach dem Ablauf W1 → W2 → S → Visualisierungs-Check → Bedienung und Barrierefreiheit; zuletzt `node tools/gate.mjs --production` ohne blockierende Befunde.

Referenzen:

- `psychoeducation-site-starter/` – Mehrseiten-Starter mit drei Referenzfällen, Build und Gate
- `longform/visualisierungsmuster.html` – Muster A–F mit Visualisierungsplan
- `longform/erklaermuster.html` – Erklärmuster G–K
- `longform/grundlagenkapitel.html`, `handlungsuebersicht.html`, `transfer-erholung.html` – Langform-Referenzen
- `applications/` – vier Anwendungsmuster
- `Website.dc.html` – generische Seitenhülle für einzelne Seiten ohne Starter
