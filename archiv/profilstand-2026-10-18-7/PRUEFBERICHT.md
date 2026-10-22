# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.7 · Stand 18.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Die Nachprüfung behebt den defekten Matrixverweis in der UI-Kit-Anleitung und sichert lokale Nachweislinks dauerhaft ab. Ausgangsstand ist `797c7b434a37ea21def19b6dcce5e438b97b61ef` (Profil 2026.10.6). Dessen Originalberichte, Matrix und unverändertes Paket bleiben als [archivierter Stand](https://github.com/christaegger-dot/puk-website-profil/tree/main/archiv/profilstand-2026-10-18-6) erhalten.

## Umsetzung

- Matrixverweis und Datum des UI-Kit-Prüfstands werden aus den Profilmetadaten in `package.json` erzeugt. Ein neuer Profilstand übernimmt dadurch keinen veralteten Dateinamen.
- `npm run check:docs` prüft die lokalen Dateiziele der aktiven Markdown-Anleitungen. Tests und Paketbau führen dieselbe Prüfung aus. Archivbestände, neue Website-Projekte, Codebeispiele, externe URLs und reine Sprunganker sind nicht Gegenstand dieser Dateiprüfung.
- Gegenproben belegen: Ein fehlender Nachweis wird mit Datei und Zeile gemeldet; ein vorhandenes Ziel mit Fragment wird zugelassen; Linkbeispiele und externe Adressen werden nicht als lokale Dateien behandelt. Die bestehende Versionswechsel-Gegenprobe prüft nun auch den erzeugten Matrixverweis.
- Die Gestaltungslehren aus den Websites bleiben erhalten: Leseskala, kompakter Kopf, Mobilmenü ab fünf Hauptpunkten, frühe Einstiege und ruhiger Kontaktabschluss. Kontakte werden weiterhin bewusst nach Thema gewählt; der Standard ergänzt keinen Krisenblock.

## Tatsächlich ausgeführte Prüfungen

| Prüfung | Ergebnis |
| --- | --- |
| Profil-Build | Komponenten und alle drei Vorlagen erfolgreich gebaut; fachneutrales Beispiel ohne Produktionsblocker |
| Gesamte Testsuite | **104 bestanden**, 0 fehlgeschlagen, 0 übersprungen; einschliesslich Typprüfung und zwei neuer Dokumentationsprüfungen |
| Versionswechsel | Erzeugte Standangaben, Paketname, Buildkennung und Matrixverweis wechseln gemeinsam auf die Testversion |
| UI-Matrix | **112 Läufe**, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen, 0 Befunde und keine nicht prüfbaren Fälle; [aktuell erzeugter Nachweisverweis](ui_kits/website/README.md) |
| Bestehende Gestaltungsregression | 60 Titel-/Menü-/Schrift-/Skriptzustände, funktionierende Einstiege der drei Vorlagen mit und ohne JavaScript; 31 aktive Seiten schmal/breit und acht Drucklagen |
| Dokumentationsprüfung | Aktive lokale Dateiverweise vorhanden; fehlender Nachweis als negative Gegenprobe erkannt |

Die vollständige Testsuite und UI-Matrix wurden auf dem neuen Buildstand ausgeführt. Nach der abschliessenden Nachführung der Berichtsmetadaten bestehen zusätzlich alle fünf gezielten Erzeugungs- und Dokumentationstests. Das versionierte Paket ist aus den abschliessenden Dateien erzeugt und byteweise mit dem Repository sowie seiner SHA-256-Datei abgeglichen; der wiederholte Paketbau ergibt dieselbe Prüfsumme.

## Geltung

Dies ist eine technische Selbstprüfung des Arbeitsprofils. Keine neue klinische, juristische, institutionelle oder unabhängige Freigabe. Reale Geräte-, Screenreader- und Zielgruppentests wurden nicht durchgeführt und werden nicht aus diesem Dokumentationsfix abgeleitet. Leere Vorlagen bleiben im Produktionsmodus gesperrt. Die Versionserhöhung und Buildkennung bezeichnen die neue Werkzeug- und Paketfassung; fachliche Inhalte und Gestaltungswerte wurden nicht verändert.
