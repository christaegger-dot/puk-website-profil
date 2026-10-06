# Langform und Psychoedukation

Verwende dieses Muster für längere Informations- und Psychoedukationsseiten und mehrseitige psychoedukative Websites. Es ist eine
systemeigene Webregel (PUK Website Kit 1.10.1-r4, abgeleitet) und keine offizielle Vorgabe des PUK Corporate Designs.
Verbindliche Details stehen in `templates/website/longform-pattern.json`; die zentrale Umsetzung
liegt in `tokens/web-longform.css`.

## Erkenntnisweg

- **SOLL:** Die Seite als nachvollziehbaren Weg planen, häufig Orientierung → Verständnis →
  Vertiefung → Alltagsbezug → Handlungsmöglichkeiten. Die Folge ist nicht starr.
- **MUSS:** Ein dringlicher Hauptzweck steht vor der Langformerklärung. (Profilentscheid 06.10.2026: Krisenorientierung ist nicht Aufgabe
  dieser Seiten; es gibt keine Sicherheitsvariante mit Krisenzugang, siehe «Zuständigkeit statt Krisenzugang».)
- **SOLL:** Bei mindestens vier aufeinander aufbauenden Hauptabschnitten eine knappe
  Kapitelorientierung mit funktionierenden Sprungzielen anbieten.
- **SOLL:** Übergänge erklären, was der vorherige Abschnitt geleistet hat und warum der nächste
  Schritt folgt.

## Darstellungsformat wählen

- **Fliesstext:** für zusammenhängende Erklärungen, Modelle und Ursache-Wirkungs-Zusammenhänge.
- **Karten:** für eigenständige Auswahlobjekte oder direkt vergleichbare Einheiten; nicht zur
  willkürlichen Zerteilung eines Gedankengangs.
- **Diagramm, Infografik, Illustration:** für Beziehungen, Abläufe, Modelle und Erleben – Auswahl nach Vermittlungsziel im Abschnitt «Visuelle Wissensvermittlung».
- **Akkordeon:** nur für optionale Vertiefung. Sicherheit, zentrale Schlussfolgerung und
  notwendige Handlung bleiben direkt sichtbar.
- **Eigener Abschnitt oder eigene Seite:** bei eigenständigem Nutzerziel, dauerhaft hoher
  Inhaltsmenge oder abweichender Dringlichkeit.

## Visualisierungsplan

- **MUSS:** Vor dem Bau einen Visualisierungsplan erstellen und dem Review beilegen; Spalten, Pflichtfälle und Vorlage im Abschnitt «Visualisierung umsetzen».

## Mehrseitige Websites (r4)

- **MUSS:** Mehrseitige psychoedukative Websites mit `templates/website/psychoeducation-site-starter/` bauen. Navigation, Meta, Favicon, Absenderin und Zuständigkeitsverweis entstehen aus `site.config.json`, nicht von Hand.
- **MUSS:** Die Organisationseinheit ist als Absenderin sichtbar; ohne Freigabe mit sichtbarem Status «Platzhalter, nicht freigegeben».
- **MUSS:** Kein Krisenzugang; höchstens der site-weite Zuständigkeitsverweis ohne Nummern (`site.config.json` › `responsibility`), Regeln im README-Abschnitt «Zuständigkeit statt Krisenzugang».
- **MUSS:** Vor der Veröffentlichung den Ablauf im Abschnitt «Prüfung und Freigabe» durchlaufen; zuletzt `node tools/gate.mjs --production` ohne blockierende Befunde.

## Bericht oder PDF ins Web übersetzen

- **MUSS:** Einen Bericht oder ein PDF didaktisch für das Web übersetzen, nicht automatisch
  wortgetreu als endlose Einzelseite übertragen.
- **SOLL:** Bei mehreren eigenständigen Nutzerzielen, Zielgruppen oder sehr hoher Inhaltsmenge
  eine Einstiegsseite plus getrennte Seiten bzw. Lesepfade planen. Der Vollbericht bleibt als
  Download möglich.
- Entscheidungshilfe:
  1. Mehrere eigenständige Nutzerziele? → Einstiegsseite plus getrennte Seiten je Ziel.
  2. Mehrere Zielgruppen mit unterschiedlichem Vorwissen? → getrennte Lesepfade ab der Einstiegsseite.
  3. Mehr als acht Hauptkapitel oder sehr hohe Inhaltsmenge? → aufteilen; der Visualisierungsplan zeigt die visuelle Führung durch die zentralen Erkenntnisschritte.
  4. Baut die Erklärung Schritt für Schritt aufeinander auf? → eine Langformseite mit Kapitelorientierung, nicht in eine Kartenfolge zerlegen.
  5. Wird der vollständige Bericht weiter gebraucht? → zusätzlich als Download mit Format- und Grössenangabe.
- Beispiel: Karte «Bericht ins Web» (Gruppe «Website»).

## Typografie und Links

- **MUSS:** Zusammenhängender Lesetext bleibt zwischen 45 und 75 ch; Quellen und lange deutsche
  Überschriften dürfen keinen horizontalen Seitenüberlauf erzeugen.
- **MUSS:** Buttons, Navigation und eigenständige Aktionslinks sind mindestens 44 px hoch.
- **MUSS:** Links innerhalb laufender Sätze bleiben echte Inline-Elemente mit natürlicher
  Zeilenhöhe. Verwende `.puk-link--inline`; für eigenständige Aktionen `.puk-link--action`.
- **MUSS:** Beide Linkarten haben einen sichtbaren Fokuszustand.

## Fachlichkeit und Sicherheit

- **MUSS:** Eigene didaktische Darstellungen als solche kennzeichnen und fachliche Aussagen mit
  Quellen, Verwendungszweck, Inhaltsverantwortung und Prüfstatus versehen.
- **MUSS:** Klinische Aussagen nicht bei einer Layoutkorrektur beiläufig verändern.
- **MUSS:** Reflexionseingaben standardmässig nicht speichern und keine Diagnose oder Scores
  daraus ableiten.

## Prüfung

- Ablauf und Kriterien: Abschnitt «Prüfung und Freigabe» (Visualisierungs-Check, Barrierefreiheit, Screenreader).
- **MUSS:** Sprungmarken und interaktive Zustände tatsächlich auslösen; automatisierte Prüfungen nicht als realen Screenreader- oder Verständlichkeitstest bezeichnen.
- **SOLL:** Vor Stabilisierung eines neuen Musters mindestens zwei deutlich unterschiedliche Referenzfälle und einen frischen Transferfall ohne Sonderstyles prüfen.
