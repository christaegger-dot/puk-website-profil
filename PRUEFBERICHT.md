# Prüfbericht · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.6 · Stand 17.10.2026.** Offene Projektpendenzen: 0.
<!-- /profil:stand -->

Die Gestaltungslehren aus der Überarbeitung der eigenständigen Websites sind in Regeln, Standardwerten, Startvorlagen und automatisierten Prüfungen verankert. Ausgangspunkt: `9c89f4686211cbed7100000eb70a16c1f1ca80f7` (Profil 2026.10.5). Dessen Originalberichte, Matrix und unverändertes Paket bleiben im [Archiv](archiv/README.md). Die zuvor umgesetzten vier Weiterentwicklungen – GitHub-Prüfungen, Minimalstarter, gemeinsame Quellen und Musterauswahl – bleiben erhalten.

## Ergebnis

- Neue Leitlinie [Einstieg und Seitenrahmen](guidelines/08-einstieg-und-seitenrahmen.md), verlinkt aus README, Startanleitung und gemeinsamen Agentenregeln. `AGENTS.md` macht die Regeln auch für Codex direkt auffindbar; die erzeugte Projektanleitung verweist ebenfalls darauf.
- Fluide Leseskala: H1 32–60 px, H2 28–44 px, H3 24–32 px bei Standardschrift. Die gemessenen 114/57/40 px bleiben als Herkunft dokumentiert. CSS-Quellen, Bundle, JSON-Sollwerte und die Beschreibung der Schriftrollen stimmen darin überein. rem erhält die Schriftvergrösserung; Abschnittstitel können zusätzlich an ihre Spaltenbreite angepasst werden.
- Kompaktere Kopf- und Einleitungsabstände. Das Mobilmenü greift bis 760 px ab fünf Hauptpunkten; breit und ohne JavaScript bleiben die Links erreichbar. Die Skriptquelle liegt auch im Minimalstarter bereit und wird nur bei Bedarf geladen.
- Alle drei aktiven Startvorlagen zeigen nach Titel und kurzer Einleitung einen hilfreichen Einstieg vor nachrangigen Hinweisen. Der Sprung zur Themenauswahl verwendet ein nativ fokussierbares Ziel (`tabindex="-1"`) und funktioniert auch ohne JavaScript.
- Ergänzende Hinweise sind ruhiger gestaltet. Die bestehenden Regeln für knappe, lesbare Fusszeilen und bewusst gewählte Kontakte bleiben erhalten; keine automatische Notrufliste oder pauschale Krisenabgrenzung.

## Erster Bildschirm im Vergleich

Gemessen in Chromium bei 375 × 812 px, Standardschrift, identischem Vorlageninhalt abgesehen von der ausdrücklich genannten Verschiebung bzw. Ergänzung des Einstiegs. Die Werte bezeichnen die Oberkante des Links ab Seitenanfang; sie sind keine Nutzerstudie.

| Vorlage | Vorher | Jetzt | Einstieg |
| --- | ---: | ---: | --- |
| Minimalstarter | 824 px | 477 px | Derselbe Link «Zum Thema», in den Titelbereich verschoben |
| Fachneutrales Profilbeispiel | 1162 px | 477 px | Derselbe Link «Das fertige Ergebnis prüfen», in den Titelbereich verschoben |
| Ausführliche Musterwebsite | 1187 px | 581 px | Vorher erster Themenlink; jetzt früher Sprung «Passenden Einstieg finden» zur Themenauswahl |

Bei 1440 px beträgt der maximale Seitentitel nun 60 statt 114 px. Der mobile Kopf ist im Minimalstarter und Profilbeispiel von 270 auf 234 px, im ausführlichen Starter von 316 auf 280 px gesunken. Die Regel für fünf Navigationspunkte wird zusätzlich mit eigenen Transferfällen geprüft; die Standardvorlagen selbst haben zwei bzw. vier Hauptpunkte.

## Technische Nachweise

| Prüfung | Ergebnis |
| --- | --- |
| `npm ci` und `npm run build` | Abhängigkeiten installiert; Komponenten und alle drei Vorlagen gebaut; fachneutrales Beispiel ohne Produktionsblocker |
| `npm run check:generated` | 45 abgeleitete Dateien aktuell |
| `npm test` | 102 bestanden, 0 fehlgeschlagen, 0 übersprungen; einschliesslich Typprüfung |
| Neue Titelprüfung | 60 Zustände: drei synthetische deutsche Titel × fünf Breiten (320/375/768/1024/1440) × normale/200-%-Grundschrift × JavaScript an/aus; kein Seitenüberlauf oder abgeschnittener Titel, ausreichend grosses Linkziel, erster Einstieg bei 375 px im ersten Bildschirm |
| Neues Mobilmenü | Vier/fünf Hauptpunkte; Enter, Leertaste, Tab, Escape, Fokusrückgabe; Wechsel 375/760/761/1440 px |
| Neue Einstiegsprüfung | Alle drei Vorlagen mit und ohne JavaScript; tatsächliche Ziele erreicht, Sprungziel erhält den Fokus in beiden Varianten |
| Bestehende Browserprüfungen | 31 aktive Seiten schmal/breit, Tastatur, Skriptverzicht, Textprüfung und acht Drucklagen ohne textleere Seiten |
| Vollständige UI-Matrix | 112 Läufe, 41 Tastatur-, 19 Interaktions- und 76 Gate-Prüfungen ohne Befund oder nicht prüfbare Fälle. [Messdaten](tests/ergebnisse/ui-matrix-2026.10.6.json) |
| Tokenquellen | Die beiden geänderten Tokenquellen stimmen byteweise mit ihren Abschnitten in `components/bundle.css` überein; geänderte JSON-Dateien parsebar |
| Paket | Versioniertes Paket 2026.10.6 erzeugt; byteweiser Abgleich und reproduzierbare SHA-256-Prüfsumme; vorheriges Paket unverändert archiviert |

Die vergrösserte Grundschrift wird im Browserlauf über 200 % am HTML-Wurzelelement simuliert. Das ist kein Test mit realen Hilfsmitteln oder Geräten. Die Browseraufnahmen umfassen die drei Startvorlagen sowie eine Inhaltsseite mit Erklärgrafik in schmaler und breiter Ansicht. Davon wurden Minimalstarter schmal, ausführlicher Starter breit und die Inhaltsseite schmal visuell durchgesehen; die tatsächlichen klinischen Websites wurden nicht erneut geändert oder veröffentlicht.

Die neuen Prüfungen wurden an zwei Stellen präzisiert: Sichtbarer Glyphenüberhang bei erlaubtem CSS-Überlauf gilt nicht als Abschneiden; für die Schriftvergrösserung ohne JavaScript wird die Grundschrift direkt gesetzt. Ein zunächst fehlender Fokus am neuen Sprungziel wurde durch natives HTML korrigiert. Die Kriterien zu Überlauf, Titelgrösse, Linkzielen und Tastaturfokus bleiben bestehen.

## Geltung

Dies ist eine technische und redaktionelle Selbstprüfung des Arbeitsprofils. Kein unabhängiger Review, keine Nutzerstudie und keine klinische, juristische oder institutionelle Freigabe wird behauptet. Neue klinische Websites benötigen ihre eigene Inhaltsprüfung. Die eigenständige Gestaltung der Rechtswebsite und die bestehenden Website-Repos bleiben ausserhalb dieser Änderung. Eingabeparameter und Freigaben leerer Vorlagen bleiben geschützt; sie sind keine offenen Aufgaben dieses Profilstands.
