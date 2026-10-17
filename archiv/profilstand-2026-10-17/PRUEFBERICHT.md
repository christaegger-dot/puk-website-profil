# Prüfbericht · PUK Website-Profil 2026.10.3

**Abgeschlossen am 17.10.2026. Offene Projektpendenzen: 0.** Geprüft und repariert wurde das Repository `christaegger-dot/puk-website-profil`, ausgehend von `c6c940db174dc60375672a04f6335b8e208fe949`. Es wurde keine klinische Website veröffentlicht. Die [Abschlussentscheide](ABSCHLUSSENTSCHEIDE.md) behandeln sämtliche früheren Pendenzen.

## Ergebnis und Reparaturen

- Das Repository ist die aktuelle Quelle. Private Artefakte erzeugen keinen Synchronisierungsauftrag. Frühere Berichte, Website-Kopien und Paket 2026.10.2 bleiben unverändert im gekennzeichneten Archiv; widersprüchliche historische Statuszeilen gelten dort für ihren damaligen Stand.
- Telefonnummern und `tel:`-Links sind zugelassen. Krisenkontakte bleiben ein redaktioneller Entscheid je Thema. Keine automatischen Krisenblöcke, keine diagnoseabhängige Ergänzung und kein pauschaler Zuständigkeitssatz im Standard-Footer. Regeln, Vorlagen, Metadaten und Tests stimmen darin überein.
- Unzulässige `size`-Überschreibungen in den Typdefinitionen von Input und Select korrigiert, in Einzeldateien, gebündelten Deklarationen und Quellen. Alle 26 Komponenten und ihre Quelltypdefinitionen bestehen die strikte TypeScript-Prüfung. Der Build verwendet festgelegte Paketversionen und arbeitet unabhängig vom aktuellen Arbeitsordner reproduzierbar.
- Die Prüfansicht hat einen Viewport, ein Favicon, getrennte CSS- und Skriptdateien und begrenzt ihre breiten Tabellen und Prüfrahmen. Die Gate-Prüfung verwendet die passende Selbsttestreferenz und erkennt die absichtlichen Produktionsblocker der ungefüllten Vorlage. Die 13 bereits eingebetteten Icons liegen zusätzlich als lokale SVGs samt zugehöriger ISC-Lizenz vor.
- Druckregeln berücksichtigen verschachtelte, ausdrücklich gekennzeichnete lange Abfolgen. Der Abschnittsfluss erzeugt keine leeren Rasterseiten; Zwischenüberschriften erhalten Umbruchschutz. Entscheidungsweg, Modell in Schritten und die fehlende Schrittliste sind als Gate-Fälle abgedeckt.
- Der Export prüft CSS-Importe, Bilder und weitere lokale Ressourcen vollständig. Fehlende oder externe CSS-Ressourcen stoppen ihn. Er baut zuerst in einem temporären Verzeichnis, erhält bei Fehlern die letzte gültige Ausgabe und entfernt bei Erfolg veraltete Seiten. Fremde Zielordner und Quellordner sind geschützt. Nicht vorhandene TTF-Rückfallpfade wurden entfernt; die vorhandenen WOFF2-Dateien und Schriftlizenz werden ausgeliefert.
- Ein vollständiges fachneutrales Beispiel mit vier Seiten durchläuft dasselbe Produktionsgate und denselben Export. Es enthält keine klinischen Aussagen. Die fehlende öffentliche Website-Adresse ist als bewusste Grenze des lokalen Musters dokumentiert.
- Neues Profilpaket 2026.10.3 mit eigenem Dateinamen, SHA-256-Datei und deterministischem Generator. Es enthält den aktiven Stand ohne Archiv, Abhängigkeiten und lokale Arbeitsausgaben. Der Generator prüft Dateiliste, sämtliche Dateibytes und Prüfsumme.
- Analyse-PR [#9](https://github.com/christaegger-dot/puk-website-profil/pull/9) ohne Merge geschlossen. Die Bestandsaufnahme ist im geschlossenen PR erhalten; die eigenständigen Website-Repos werden hier nicht umgebaut.

## Erhobene Nachweise

| Prüfung | Ergebnis |
| --- | --- |
| `npm run build` | Komponenten, Starter und vollständiges Profilbeispiel gebaut |
| `npm run test:types` | Strikte Prüfung aller Komponententypen bestanden |
| `npm test` | **90 bestanden, 0 fehlgeschlagen, 0 übersprungen**: 74 Selbsttestfälle, vier zusätzliche Vertragsprüfungen, acht Export-/Build-Prüfungen und vier Browserprüfungen |
| Vollständiges Profilbeispiel, Produktionsgate | Vier Seiten; 0 Blocker. Ein dokumentierter Hinweis auf die fehlende öffentliche Website-Adresse |
| Vorschauseiten in Chromium | 26 aktive Seiten jeweils bei 360 und 1280 px ohne Browserfehler, fehlende Laufzeitdateien oder horizontalen Seitenüberlauf |
| Tastatur, Skriptverzicht und reduzierte Bewegung | Akkordeon und Reiter mit echten Chromium-Tastenereignissen bedienbar; vollständiges Beispiel auch ohne JavaScript lesbar |
| Lange verschachtelte Druck-Abfolgen | Prozesspfad und Modell in Schritten, jeweils bei 0/15 mm Rand und Faktor 0,8/1,1: acht Drucklagen ohne textleere PDF-Seite |
| UI-Kit-Matrix `qa-7` | 112 Läufe, 41 emulierte Tastaturprüfungen, 19 Interaktionsprüfungen, 76 Gate-Prüfungen; jeweils 0 mit Befund. Keine nicht prüfbaren Fokusfälle. [Messdaten](tests/ergebnisse/ui-matrix-2026-10-17.json) |
| Eigenständiger Export | Vier Seiten mit lokalen Styles, Skripten, Schriften, Schriftlizenz und Assets; kein Projektquellcode im Export |
| Paketprüfung | Aktive Dateien bytegleich; wiederholte Erzeugung mit identischem SHA-256-Wert |
| JSON, SVG und lokale Dokumentlinks | Aktiver Bestand parsebar; Dokumentverweise auf vorhandene lokale Ziele |
| `npm audit` | 0 gemeldete Schwachstellen der festgelegten Entwicklungsabhängigkeiten |

Ausführung mit Node 24.19, Python 3.11, Playwright 1.62.1, lokalem Chromium und pdfplumber 0.11.8. Einrichtung und wiederholbare Befehle: [START-HIER.md](START-HIER.md). Die Prüfansicht lässt sich lokal erneut öffnen; ihre 200-%-Textprüfung ist CSS-emuliert.

## Grenzen und endgültige Abschlussentscheide

Dieser Bericht dokumentiert eine technische Prüfung und die eigene redaktionelle Durchsicht. Er behauptet keine unabhängige Zweitprüfung, klinische oder institutionelle Freigabe, Nutzerstudie oder reale Screenreader-Abnahme. Hardware-Tastatur, zusätzliche Browser-/Betriebssystemkombinationen, private Plattforminstallationen und Änderungen an anderen Website-Repos sind für diesen Profilabschluss ausgeschlossen. Es bleibt kein externer Abnahmeauftrag offen.

Die leere Startervorlage und die wiederverwendbaren Prüfpläne enthalten weiterhin Eingabefelder für neue Projekte. Sie sind keine unerledigten Aufgaben dieses Profilstands. Ihr Produktionsschutz bleibt wirksam. Alte Freigaben werden weder nachträglich erfunden noch durch diesen Bericht ersetzt.
