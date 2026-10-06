# Anwendungs- und Inhaltsmuster

Zwei Mustergruppen für Websites: acht **Inhaltsmuster** für wiederkehrende Textaufgaben und vier **Anwendungsmuster** für interaktive Orientierung. Live: Karte «Inhaltsmuster» (Gruppe «Website»). Visuelle Erklärformen: Abschnitt «Visuelle Wissensvermittlung».

_Herkunft: konsolidiert aus den Einzelleitlinien des PUK Zürich Design Systems 1.10.1; die Einzeldateien sind nicht Teil dieses Profils._

## Inhaltsmuster

Aus der Claude-Design-Schicht des PUK Zürich Design Systems 1.10.1 (Register `claude-design/patterns.json`). Nur Muster verwenden, die dem Kommunikationsziel dienen; erst den Job klären, dann das Muster wählen.

| Muster | Aufgabe | Pflicht | Vermeiden |
| --- | --- | --- | --- |
| Orientierung | In wenigen Sekunden klären, worum es geht und für wen das Angebot oder der Inhalt gedacht ist. | `eyebrow`, `single-heading`, `short-lead`, `context-statement` | `multiple-equal-headlines`, `generic-hero-copy`, `diagnostic-labelling-of-reader` |
| Nächste Schritte | Eine überschaubare Reihenfolge von zwei bis vier konkreten Handlungen anbieten. | `ordered-sequence`, `verb-led-labels`, `clear-end-state` | `more-than-four-primary-steps`, `vague-learn-more-endings` |
| Prozess | Einen zeitlichen oder organisatorischen Ablauf sichtbar und erwartbar machen. | `start`, `sequence`, `end`, `plain-language-labels` | `decorative-arrows`, `unlabelled-loops`, `false-linearity` |
| Prioritätshinweis | Eine wichtige Grenze, Voraussetzung oder Sicherheitsinformation aus dem Lesefluss herausheben. | `descriptive-heading`, `consequence`, `next-action-if-applicable` | `color-only-meaning`, `alarmist-tone`, `medical-emergency-number-outside-authorized-crisis-document` |
| FAQ | Wiederkehrende Unsicherheiten in selbstständige Fragen und kurze Antworten zerlegen. | `reader-worded-question`, `standalone-answer`, `logical-order` | `marketing-questions`, `answers-dependent-on-other-pages`, `hidden-critical-information` |
| Kontakt und Übergabe | Klar zeigen, wer zuständig ist, was vor einem Kontakt vorbereitet werden kann und was danach geschieht. | `responsible-unit`, `channel`, `availability-or-response-expectation`, `privacy-aware-copy` | `invented-contact-data`, `multiple-equal-primary-channels`, `unclear-ownership` |
| Evidenz und Quelle | Belegen, worauf eine fachliche Aussage beruht, ohne den Hauptinhalt zu überladen. | `claim-scope`, `source`, `date-or-version` | `source-free-statistics`, `decorative-citation-box`, `unverified-url` |
| Datenbotschaft | Eine Kernaussage aus Daten führen und die Werte danach nachvollziehbar zeigen. | `message-title`, `labelled-values`, `unit`, `source` | `pie-chart-for-many-categories`, `legend-only-identification`, `decorative-3d`, `color-only-series` |

Für Websites der Fachstelle gilt beim Prioritätshinweis: keine Notfallnummern (Abschnitt «Zuständigkeit statt Krisenzugang» im README).

## Anwendungsmuster

Die vier freigegebenen Anwendungsmuster. Referenzseiten: `templates/website/applications/`, Register: `templates/website/application-patterns.json`. Sie ordnen redaktionell freigegebene Inhalte, diagnostizieren nicht und triagieren nicht automatisch.

**Profilentscheid 06.10.2026 – Zuständigkeit statt Krisenzugang:** Auf Websites der Fachstelle haben die Muster keine Krisen- oder Akutstufe und nennen keine Nummern. Der «Sicherheitsausstieg» des Situationsnavigators ist der Zuständigkeitsverweis in der Fusszeile. Der Kontaktwegweiser ist nur für nicht akute Kontakt- und Zuständigkeitswege zulässig; seine Referenz zeigt noch die akute Stufe «Jetzt sofort handeln» und ist darin nicht zu übernehmen.

### Situationsnavigator

Nutze den Situationsnavigator, wenn wenige alltagsnahe Bedürfnisse mehrere zusammengehörige
Impulse und Gesprächshilfen filtern sollen. Verwende die Referenz
`templates/website/applications/situationsnavigator.html` und den Eintrag
`situation-navigator` in `templates/website/application-patterns.json`.

- Formuliere Kategorien aus Sicht der Nutzenden und nicht als Diagnosen.
- Filtere alle betroffenen Inhaltsgruppen synchron und zeige die Trefferzahl in einer Live-Region.
- Biete stets einen sichtbaren Rücksetzweg und einen ungefilterten Sicherheitsausstieg.
- Mini-Tags dürfen denselben Filter auslösen, brauchen aber verständliche Schaltflächennamen.
- Speichere Auswahl oder gesundheitsbezogene Eingaben nicht im Browser.
- Verwende PUK-Tokens, sichtbaren Fokus und mindestens 44 px grosse Ziele; vermeide Glow, Federung und dekorative Schatten.

### Kontaktwegweiser

Nutze den Kontaktwegweiser nur für redaktionell freigegebene Zuständigkeits- und Kontaktpfade.
Verwende die Referenz `templates/website/applications/kontaktwegweiser.html` und den Eintrag
`contact-pathfinder` in `templates/website/application-patterns.json`.

- Verwende höchstens drei verständlich benannte Dringlichkeitsstufen.
- Beschreibe beobachtbare Situationen; berechne keinen Symptomscore und keine medizinische Triage.
- Gib pro Zustand genau eine primäre Handlung mit Zeitbezug aus.
- ~~Halte den unmittelbaren Krisenzugang auf der Seite sichtbar~~ (Profilentscheid 06.10.2026: kein Krisenzugang); verstecke kritische Information nie nur in einem Dialog.
- Ein Direktlink auf die akute Stufe muss diese Stufe beim Laden tatsächlich aktivieren. Die
  primäre Handlung führt immer zu einem erreichbaren Link- oder Kontaktziel; funktionslose Buttons
  sind nicht zulässig.
- Jede reale Kontaktangabe benötigt Inhaltsverantwortung und Prüfdatum.
- Strukturiere Kontaktdaten nach `templates/website/application-content.schema.json`.
- Prüfe Zuständigkeit, Verfügbarkeit und Nummern redaktionell vor jeder Veröffentlichung.

### Gesprächshilfe

Nutze die Gesprächshilfe, wenn redaktionell geprüfte Formulierungen aus einer Situation und einem
Gesprächsziel zusammengesetzt werden sollen. Verwende die Referenz
`templates/website/applications/gespraechshilfe.html` und den Eintrag `conversation-guide` in
`templates/website/application-patterns.json`.

- Lass Situation und Ziel getrennt wählen und beschrifte jede Optionsgruppe zugänglich.
- Formuliere Beobachtungen statt Diagnosen und Ich-Grenzen statt Schuldzuweisungen.
- Zeige Formulierung, Grenze und kleinen nächsten Schritt gemeinsam.
- Versprich keinen Gesprächserfolg und imitiere keine klinische Anweisung.
- Speichere die Auswahl nicht; eine Kopierfunktion braucht eine sichtbare Rückmeldung.
- Lass alle Ergebnisse fachlich und sprachlich prüfen, bevor reale Inhalte veröffentlicht werden.

### Angebotsnavigator

Nutze den Angebotsnavigator für ein redaktionell gepflegtes Verzeichnis mit lokaler Suche und
wenigen Kategorien. Verwende die Referenz `templates/website/applications/angebotsnavigator.html`
und den Eintrag `service-finder` in `templates/website/application-patterns.json`.

- Durchsuche nur mitgelieferte, redaktionell bestätigte Inhalte; sende Suchbegriffe nicht an Dritte.
- Behandle mehrere Suchwörter als unabhängige Begriffe und normalisiere Gross-/Kleinschreibung
  sowie diakritische Zeichen. Die Reihenfolge der Suchwörter darf keinen Treffer verhindern.
- Zeige eine programmatisch verfügbare Trefferzahl und einen hilfreichen Leerzustand.
- Nenne Zugang, Zielgruppe, Zuständigkeitsgrenze, Kostenstatus, Inhaltsverantwortung und Prüfdatum.
- Kennzeichne ungeprüfte Verfügbarkeit oder abgelaufene Einträge sichtbar.
- Strukturiere Angebotsdaten nach `templates/website/application-content.schema.json`.
- Kategorien ergänzen die Textsuche, ersetzen aber keine verständlichen Angebotsbeschreibungen.
- Prüfe Filter, Tastaturbedienung und Umbruch bei 360, 768 und 1440 px.
