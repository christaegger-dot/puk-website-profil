# Einstieg und Seitenrahmen

Profilentscheid vom 17.10.2026, abgeleitet aus der Überarbeitung von Borderline, Depression sowie Loslassen und Dranbleiben. Diese Regeln gelten für neue Websites der Fachstelle. Sie sind eine Weiterentwicklung des Arbeitsprofils, keine neue Vorgabe des PUK Corporate Designs.

## Was die bestehenden Websites gezeigt haben

| Beobachtung | Folgerung für neue Websites |
| --- | --- |
| Die gemessene Display-Skala erlaubte 114 px grosse Seitentitel. Lange Titel beanspruchten dadurch unverhältnismässig viel Raum. | Seitentitel verwenden die Leseskala: H1 32–60 px, H2 28–44 px, H3 24–32 px bei Standardschrift. Die entsprechenden fluiden Tokens verwenden rem; grössere Browser-Schrift bleibt wirksam. Abschnittstitel können zusätzlich an ihre Spaltenbreite angepasst werden. Die gemessenen 114/57/40 px bleiben als Herkunftswerte dokumentiert, nicht als Standard für neue Seitentitel. |
| Hohe Kopfbereiche und eine schon bei fünf oder sechs Punkten mehrzeilige Navigation verdrängten den Inhalt auf Mobilgeräten. | Kompakte Abstände im Kopf; bis 760 px ab fünf Hauptpunkten ein Menü. Auf breiten Bildschirmen bleiben alle Links sichtbar. Ohne JavaScript bleibt die vollständige Linkliste erreichbar. |
| Nützliche Einstiegslinks erschienen erst nach Erläuterungen zur Website oder zu ihrer Entstehung. | Nach Titel und kurzer Einleitung einen konkreten Einstieg anbieten, vor nachrangigen Hinweisen. Das kann ein Themenlink oder ein Sprung zur Auswahl sein. |
| Wiederholte Absenderangaben, Vorspänne und hervorgehobene Hinweisflächen konkurrierten mit dem eigentlichen Thema. | Den sichtbaren Absender im Kopf beibehalten; im Titelbereich nur Angaben wiederholen, die zusätzlich beim Verstehen helfen. Ergänzende Hinweise ruhig gestalten. Erforderliche Schutzinformationen bleiben an der sachlich passenden Stelle. |
| Lange Fusszeilen wirkten wie ein weiterer Hauptabschnitt. | Kontakt, Verantwortung, zutreffender Stand sowie Impressum und Datenschutz knapp ordnen. Wiederholungen und pauschale Abgrenzungssätze vermeiden. Leseschrift und Bedienflächen nicht verkleinern, um Platz zu erzwingen. |
| Bestandene Struktur- und Überlaufprüfungen erkannten die ungünstige visuelle Gewichtung nicht. | Den tatsächlichen ersten Bildschirm und einen typischen Inhaltsabschnitt ansehen. Automatische Prüfungen und visuelle Beurteilung im Bericht getrennt benennen. |

Nachweise der ursprünglichen Korrekturen: [Borderline, PR #704](https://github.com/christaegger-dot/borderline-angehoerige/pull/704), [Depression, PR #52](https://github.com/christaegger-dot/depression-angehoerige/pull/52), [Loslassen und Dranbleiben, PR #129](https://github.com/christaegger-dot/loslassen_dranbleiben/pull/129). Die eigenständige Gestaltung der Rechtswebsite wird dadurch nicht aufgehoben.

## Titel und erster hilfreicher Schritt

- `.puk-web-h1` und `--web-size-h1-fluid` verwenden. Keine feste Display-Grösse aus dem gemessenen PUK-Webauftritt übernehmen. Keine manuellen Zeilenumbrüche oder festen Titelhöhen erzwingen.
- Titel und eine kurze Einleitung beantworten: Worum geht es, und was hilft diese Website zu verstehen?
- Auf einer Startseite folgt ein sinnvoll beschrifteter Einstiegslink in `.puk-web-actions`, gekennzeichnet mit `data-primary-entry`. Erst danach kommen ergänzende redaktionelle Hinweise. Eine notwendige, thematisch begründete Schutzinformation darf Vorrang haben.
- Bei einem Sprunglink auf einen Abschnitt erhält das Ziel `tabindex="-1"`. Dadurch erreicht der native Link den Abschnitt mit Tastaturfokus auch ohne JavaScript; die vorhandenen Fokusstyles markieren ihn sichtbar. Keine positiven tabindex-Werte verwenden.
- Ziel bei 375 × 812 px und Standardschrift: Mindestens der erste hilfreiche Einstieg ist im ersten Bildschirm erkennbar. Bei sehr langen Titeln oder mehreren Einleitungszeilen zuerst Wiederholungen und Abstände prüfen. Das ist ein Gestaltungsziel, keine starre Höhenbegrenzung.
- Bei 200 % Schrift darf die Seite länger werden. Inhalte, Navigation und Bedienflächen bleiben vollständig erreichbar; keine Schrift verkleinern, Inhalte abschneiden oder Höhe begrenzen, um den ersten Bildschirm einzuhalten.
- Keine automatische Krisenrubrik ergänzen. Reguläre Telefonnummern sind erlaubt; Krisenkontakte werden nach Thema bewusst ausgewählt, wie im README festgelegt.

## Kontrolle bei jeder neuen Website

1. Startseite mit dem tatsächlichen Titel bei 320, 375, 768, 1024 und 1440 px öffnen. Zusätzlich 200 % Browser-Schrift und die kritischen Umbruchbreiten prüfen.
2. Bei 375 × 812 px den ersten Bildschirm ansehen: Absender erkennbar, Titel ausgewogen, nächster Schritt auffindbar? Kein starres Pixelbudget auf beliebige Inhalte übertragen.
3. Menü mit Tastatur öffnen und schliessen, alle Links erreichen und dieselbe Navigation ohne JavaScript kontrollieren. Die breite Ansicht muss die Links auch nach einem Wechsel aus der schmalen Ansicht zeigen.
4. Einstieg auslösen und prüfen, ob der verlinkte Inhalt tatsächlich erreicht wird. Bei Sprunglinks Fokus und sichtbare Zielmarkierung kontrollieren.
5. Eine längere Inhaltsseite mit Erklärgrafik sowie die Fusszeile ansehen. Normale, vergrösserte und Druckdarstellung auf Überlauf oder abgeschnittene Inhalte prüfen.
6. Ergebnisse mit untersuchter Version und tatsächlich ausgeführten Prüfungen dokumentieren. Automatische Browserläufe sind keine Nutzerstudie, keine Screenreader-Abnahme und keine fachliche oder institutionelle Freigabe.

Die Standardwerte liegen in `tokens/web.css`, `tokens/web-longform.css`, `components/bundle.css` und `starter.css`; die Sollwerte stehen in `templates/website/profile.json`. Die drei aktiven Startvorlagen zeigen den frühen Einstieg. Gezielte Browserprüfungen sichern lange Titel, fünf Navigationspunkte, Schriftvergrösserung, Skriptverzicht und den Einstieg ab.
