# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.5 · Stand 17.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Umgesetzt sind die vier ausdrücklich beauftragten Weiterentwicklungen. Ausgangspunkt ist `db816c7b000ba0fbcbc9eae5c1b02e5908493f30`. Der vorangegangene Abschluss mit 90 Tests bleibt samt Originalberichten und Paket unverändert im Archiv. [Abschlussentscheide](ABSCHLUSSENTSCHEIDE.md).

## Vier Ergebnisse

1. **Automatische GitHub-Prüfung:** Neuer Workflow «Profil prüfen» bei Push, Pull Request und manuellem Start. Er installiert festgelegte Abhängigkeiten sowie Chromium, prüft die eingecheckten Ableitungen, baut alle Referenzen ohne Dateidifferenzen, führt Typprüfung und Tests sowie die vollständige UI-Matrix aus und gleicht das versionierte Paket byteweise ab. Der UI-Bericht wird als Laufartefakt aufbewahrt. Die bisherige PR-Beschreibungskontrolle bleibt zusätzlich erhalten.
2. **Schlanker Projektstart:** Neue Vorlage mit Übersicht, einer Themenseite, Impressum und Datenschutz sowie 404. `npm run neu -- mein-thema --titel "Mein Thema"` legt ein eigenes Projekt unter `websites/` an, passt Pfade und Titel an und baut die erste Vorschau. Keine vorgegebenen klinischen Inhalte, Krisenblöcke oder Freigaben; kein Überschreiben vorhandener Verzeichnisse. Die zentralen Werkzeuge werden nicht kopiert. Der Produktionsschutz bleibt aktiv.
3. **Verbindliche Quellen:** Komponententypen werden ausschliesslich unter `quellcode/komponenten/src/components/` gepflegt. `generieren` erzeugt die Einzel- und Sammeldeklarationen. Profilversion und Build-Stände stammen aus `package.json`; Metadaten, Standangaben, Paketname und Zeitstempel werden daraus abgeleitet. Die Prüfung erkennt veraltete Ausgaben ohne Schreibzugriff. Die Quellen für Vorschauseiten und Musterauswahl liegen unter `quellcode/profil/`.
4. **Muster zugänglich machen:** Die Startseite verlinkt Minimalstarter, vollständiges Beispiel, ausführliche Musterwebsite, Erklärgrafiken, HTML-Interaktionen, UI-Kit und Prüfansicht. Die Frage «Welches Muster passt zu meinem Inhalt?» führt anhand von 13 Leserfragen zu konkreten Beispielen. HTML und Markdown entstehen aus demselben Katalog; Ziele und Sprungmarken werden bei der Erzeugung geprüft.

Telefonnummern und Telefonlinks bleiben erlaubt. Krisenkontakte sind weiterhin ein bewusster Entscheid je Thema; eine Diagnose erzeugt keinen Krisenblock. Die Startvorlage enthält keinen pauschalen Zuständigkeits- oder Krisensatz im Footer.

## Technische Nachweise

| Prüfung | Ergebnis |
| --- | --- |
| `npm run check:generated` | 45 abgeleitete Dateien aktuell; wiederholte Erzeugung unverändert |
| `npm run build` | Komponenten, ausführliche Musterwebsite, Minimalstarter und vollständiges Profilbeispiel gebaut |
| `npm test` | 99 bestanden, 0 fehlgeschlagen, 0 übersprungen |
| Neue Generierungsprüfungen | Änderungen der Typquelle erreichen Einzel- und Sammeldatei; Profiländerungen erreichen Metadaten, Standangaben, Lockdatei und Paketnamen; fehlende Typquellen stoppen vor dem Schreiben |
| Neue Projektprüfungen | Echter CLI-Aufruf mit eigenem Titel und Ziel; vier gebaute Seiten; Entwurfsprüfung und eigenständiger Export erfolgreich; fehlende Freigaben blockieren Produktion und erhalten eine vorhandene gültige Ausgabe |
| Schutz vorhandener Inhalte | Erneute Anlage, ungültiger Name und unvollständige Optionen verändern keine vorhandenen Projekte |
| Browserprüfung | 31 aktive Seiten bei 360 und 1280 px ohne Browserfehler, fehlende Laufzeitdateien oder horizontalen Seitenüberlauf |
| Druck, Tastatur und Skriptverzicht | Acht Drucklagen ohne textleere Seiten; Akkordeon und Reiter bedienbar; fachneutrales Beispiel ohne JavaScript lesbar |
| Vollständige UI-Matrix | 112 Läufe, 41 emulierte Tastaturprüfungen, 19 Interaktionsprüfungen und 76 Gate-Prüfungen ohne Befund; keine nicht prüfbaren Fokusfälle. [Messdaten](tests/ergebnisse/ui-matrix-2026.10.5.json) |
| Visuelle Durchsicht | Startseite breit und Musterauswahl auf einem schmalen Bildschirm kontrolliert |
| Paketabgleich | Aktive Dateien bytegleich; zweite Erzeugung mit identischem SHA-256-Wert; Archiv, neue Projekte und lokale Ausgaben ausgeschlossen |
| Quellen und Links | Aktive JSON- und SVG-Dateien parsebar; lokale Dokumentziele vorhanden |

Die technischen Tests wurden lokal mit Node 24.19, Python 3.11, Playwright 1.62.1, Chromium und pdfplumber 0.11.8 ausgeführt; die abschliessende Matrix zusätzlich mit einem Chromium samt deutschem Trennwörterbuch. Die verwendeten GitHub-Actions sind auf geprüfte Releases mit Node-24-Laufzeit festgelegt. Der GitHub-Workflow führt dieselben Befehle bei Änderungen automatisch aus; sein tatsächlicher Laufstatus steht unter «Actions». Die UI-Matrix wartet auf ihr eigenes Fertigsignal, weil sie während der Prüfung fortlaufend Dateien lädt.

## Nachbesserung aus dem ersten GitHub-Lauf

Die 96 damaligen Tests bestanden auch auf GitHub. Die zusätzliche UI-Matrix zeigte zehn Fehlbefunde, weil sie erlaubte deutsche Silbentrennung als willkürlichen Wortumbruch wertete. Das GitHub-Chromium verwendet dafür ein Sprachwörterbuch, das im lokalen Systembrowser fehlt. Die Prüfung unterscheidet nun sprachliche Trennungen durch einen Vergleich bei ausgeschalteten Notumbruch-Regeln. Willkürliche Umbrüche bleiben Befunde; Layout und ursprüngliche Inline-Styles werden vollständig wiederhergestellt. Drei zusätzliche Browserfälle decken erlaubte Silbentrennung, willkürliche Umbrüche und die unveränderte Darstellung nach der Prüfung ab. Der Zwischenstand bleibt mit eigenem Paketnamen archiviert.

## Geltung

Dies ist ein technischer Profilabschluss mit eigener redaktioneller Durchsicht, keine behauptete unabhängige, klinische oder institutionelle Freigabe. Neue klinische Websites brauchen ihre eigenen belegten Inhaltsprüfungen. Reale Screenreader-Abnahmen, Nutzerstudien, private Plattforminstallationen und Änderungen an anderen Website-Repos bleiben ausserhalb dieses Auftrags. Es wurde keine klinische Website veröffentlicht.

Die offenen Felder im Minimalstarter und dessen Prüfbericht sind Eingaben für ein neues Projekt. Sie sind keine verbliebenen Aufgaben dieses Profilstands; der Produktionsschutz wird dadurch nicht umgangen. Alle vier beauftragten Verbesserungen sind abgeschlossen.
