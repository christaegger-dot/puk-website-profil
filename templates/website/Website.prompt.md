Verwende diese Vorlage als verbindliche Seitenhülle für Websites und browserbasierte
Informationsangebote im PUK-Design-System. `templates/website/profile.json` ist die normative
Sollquelle für responsive Geometrie, Seitensemantik, Navigation, Datenhaltung und Prüfansicht.
Die gemessenen Webwerte stammen aus dem bestehenden PUK-Webauftritt; das Profil ist trotzdem
keine vollständige technische Spezifikation der produktiven Website und keine Büromedien-Vorlage.

- **Einsatz:** Einzel- und Mehrseiten-Websites, Informationsangebote und Formulare. Für Unterseiten
  die vier Starting Points verwenden und dieselbe Kopf-, Navigations- und Fusslogik beibehalten.
- **Pflicht pro Seite:** `lang`, eindeutiger `title`, Meta-Description, sichtbarer Skip-Link bei
  Tastaturfokus, genau ein `main` und ein `h1`, benannte Hauptnavigation sowie `aria-current="page"`
  für die aktive Seite. Jede Seite verweist auf ein tatsächlich mitgeliefertes lokales Favicon.
- **Responsive:** Bei 320, 360, 768 und 1440 px ohne horizontalen Überlauf prüfen. Die drei
  Referenzansichten bleiben 360, 768 und 1440 px; 320 px ist das zusätzliche Reflow-Gate.
  Container höchstens 1200 px und zentriert; Lauftext in der Regel 45–75 ch, Standard 68 ch;
  Überschriften fluid. Zusätzlich 200 Prozent Textvergrösserung und Reflow beziehungsweise
  400-Prozent-Zoom sowie kritische Layoutübergänge prüfen.
- **Navigation und Ziele:** Buttons, Navigation und eigenständige Aktionslinks mindestens 44 px
  hoch umsetzen. Links innerhalb laufender Sätze bleiben echte Inline-Elemente mit natürlicher
  Zeilenhöhe; dafür `.puk-link--inline`, für eigenständige Aktionen `.puk-link--action` verwenden.
  Der aktive Zustand verwendet Unterstreichung und `aria-current`, nie Farbe allein.
- **Gestaltung:** Rubik, blaue Akzente, flache Karten, keine Schatten. Farben, Abstände und
  Typografie über Tokens; keine kopierten Hexwerte in HTML, CSS oder JavaScript. Kartenraster
  als Liste auszeichnen. Längere Texte und Quellenlisten mit `.puk-web-copy` auf höchstens 75 ch begrenzen.
- **Visualisierung:** Zentrale Konzepte und Zusammenhänge vorrangig über Darstellungen erklären,
  deren Anordnung selbst Bedeutung trägt; früh als Teil des Erkenntniswegs planen
  (`guidelines/00-visuelle-wissensvermittlung.md`, `guidelines/07-visualisierung-umsetzen.md`).
- **Auslieferung:** Alle Schriften, Icons, Skripte und Styles lokal mitliefern. Fehlende lokale
  Ressourcen und externe Laufzeitanfragen sind blockierende Fehler. Quellenlinks dürfen extern
  sein; React, Bibliotheken, Styles, Fonts und Icons nicht von einem CDN laden.
- **Formulare und Arbeitsblätter:** Sensible oder gesundheitsbezogene Eingaben standardmässig
  nicht im Browser speichern. Speicherung erst nach Datenschutzprüfung, mit vorgängiger
  Erklärung, definierter Dauer und sichtbarer Löschmöglichkeit. Dann zusätzlich
  `website-data-policy.json`, `data-storage-notice` und `data-storage-delete` verwenden.
  Ausgangspunkt ist `website-data-policy.example.json`; `approved` erst nach realer Freigabe setzen.
- **Anwendung auswählen:** Vor einer neuen Interaktion zuerst den konkreten Nutzungszweck bestimmen.
  Für «Was brauche ich jetzt?» den Situationsnavigator, für Dringlichkeit und Kontakt den
  Kontaktwegweiser, für Formulierung und Grenze die Gesprächshilfe und für ein gepflegtes
  Verzeichnis den Angebotsnavigator verwenden. Verbindliches Register und Referenzseiten stehen
  in `templates/website/application-patterns.json` und `templates/website/applications/`.
- **Anwendungsdaten:** Kontakte und Angebote folgen verbindlich
  `templates/website/application-content.schema.json`. Ausgangspunkt für neutrale Datenstrukturen
  ist `templates/website/applications/application-content.example.json`. Produktive Einträge
  brauchen mindestens Inhaltsverantwortung, Prüfdatum und Quellenstatus; Angebote zusätzlich
  Zielgruppe, Zugang, Zuständigkeitsgrenze, Kosten- und Verfügbarkeitsstatus.
- **Klinische Grenze:** Die Anwendungen diagnostizieren nicht, berechnen keine Symptom-Scores und
  führen keine automatische medizinische Triage aus. Pro Zustand genau einen primären nächsten
  Schritt zeigen; kritische Information nicht nur in Dialogen oder gefilterten Ergebnissen führen.
- **Langform und Psychoedukation:** Vor inhaltsreichen Informationsseiten
  `templates/website/longform-pattern.json` und
  `guidelines/06-langform-und-psychoedukation.md` lesen. Zusammenhängende Erklärungen
  nicht ohne inhaltlichen Grund in Karten zerlegen. Eine Kapitelorientierung, Begriffsübersicht,
  Abbildung, Reflexion und Quellen nur einsetzen, wenn ihr Zweck im Erkenntnisweg klar ist.
- **Darstellungsformat:** Fliesstext für aufeinander aufbauende Erklärungen; Karten für
  eigenständige Auswahlobjekte; Diagramm oder Infografik für Beziehungen, Veränderungen,
  Mengen oder Abläufe; Illustration für Metaphern, Erleben und emotionalen Zugang; Akkordeon nur
  für optionale Vertiefung; eigener Abschnitt oder eigene Seite bei eigenständigem Nutzerziel,
  dauerhaft hoher Inhaltsmenge oder anderer Dringlichkeit.
- **Kein Krisenzugang (Profilentscheid 06.10.2026):** Die Varianten in `profile.json#safetyAccess` werden auf Websites der Fachstelle nicht verwendet; höchstens ein Zuständigkeitsverweis ohne Nummern in der Fusszeile (README-Abschnitt «Zuständigkeit statt Krisenzugang»). Kritische Information nie hinter Filter, Dialog oder Akkordeon verbergen.
- **Redaktionelle Pflege:** Reale Kontakte, Zuständigkeiten, medizinische Aussagen und Quellen
  benötigen Inhaltsverantwortung und Prüfdatum. Ergebnisänderungen programmatisch ankündigen,
  Rücksetzen anbieten und sensible Auswahl standardmässig nicht speichern.
- **Produktionspaket:** Nie den rohen Projektexport veröffentlichen; nur die tatsächlich benötigten Seiten und lokalen Laufzeitdateien ausliefern, ohne Projektquellen, Entwürfe oder Fallmaterial.
- **Freigabe:** Ablauf und Gate im Abschnitt «Prüfung und Freigabe». Für Starter-Websites `node tools/gate.mjs --production`; das Projektgate und die Release-Werkzeuge des Original-Kits sind nicht Teil dieses Profils.
- **Screenreader:** Vor Produktion mindestens zwei reale Läufe, empfohlen VoiceOver/Safari und
  NVDA/Firefox, in `website-screenreader-test.json` dokumentieren. Dafür `website-screenreader-test.example.json` kopieren und
  nur tatsächlich durchgeführte Läufe als `passed` eintragen.
- **Abdeckungsgrenze:** Automatisierte Gates ersetzen keinen realen Tastatur- und Screenreader-Test,
  keine Datenschutzprüfung und keine redaktionelle Prüfung von Kontakten,
  Quellen oder medizinischen Aussagen.

## r4 · Psychoedukative Mehrseiten-Websites

PUK Website Kit 1.10.1-r4 · abgeleitet, auf Basis der kanonischen Quelle 1.10.1 (nicht deren offizielle Version). Für mehrseitige psychoedukative Websites nicht diese Hülle erweitern, sondern `psychoeducation-site-starter/` verwenden: Seitenvertrag → Build → Gate. Die generische Hülle bleibt ohne automatischen Notfalllink.
