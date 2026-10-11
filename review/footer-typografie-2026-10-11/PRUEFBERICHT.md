# Footer-Typografie · technische Nachprüfung · 11.10.2026

Die zentrale Profilkorrektur zu A04-13 ist umgesetzt. Ausgangsstand: `d8f419e` auf `main`. Der Benutzer hat die Erledigung der offenen Übernahme ausdrücklich beauftragt. Der zuvor separat vorbereitete Patch lässt sich ohne Konflikt auf diesen Stand anwenden.

## Verhalten

Die Fusszeile verwendet in `tokens/web.css` und `components/bundle.css` `web-size-body`: 21 px breit und 19 px bis einschliesslich 760 px. Kontakt-, Zuständigkeits-, Datenschutz- und Abgrenzungstexte bleiben Lesetext. Nur explizite Datums-, Versions- und Designmetadaten erhalten über `.puk-web-footer__meta` die Caption-Schrift mit 13 px. Guideline 03 und Änderungsprotokoll erläutern diese Rollentrennung.

Der vollständige `tokens/web.css`-Abschnitt im Bundle wurde mit seiner Quell-Datei verglichen: identisch. Kanonische Farben, Rubik und die allgemeine Typografieskala sind durch diese Korrektur nicht geändert. Das mitgelieferte `puk-website-profil-2026.10.zip` wird aus dem aktuellen Repository-Inhalt neu erzeugt; die korrigierten Quellen und diese Nachweise sind darin enthalten.

## Nachweise

- **64/64 Browserfälle bestanden**, keine aufgezeichneten JavaScript-Laufzeitfehler: [browser.json](browser.json).
- Die eigene [Prüfansicht](pruefansicht.html) prüft Bundle und separate Tokenquelle bei 320, 360, 768 und 1440 px, im Normal- und Kontrasttheme, bei normalem Text, verdoppelter berechneter Textgrösse und angepassten Textabständen. Gemessen werden Footer-Lesetext, Linktext, Metadaten, Dokumentbreite und geladene Rubik-Schriften: 48 Fälle.
- Vier vorhandene Seiten – Profil-Start, Grundlagenkapitel, Handlungsübersicht und Starter-Start – verwenden bei allen vier Breiten die korrigierte Footer-Grösse: 16 Fälle.
- **53/53 Gate-Selbsttests bestanden**: [gate-selftest.txt](gate-selftest.txt).
- Screenshots: [Bundle bei 320 px](bundle-320.png), [Tokenquelle bei 320 px](token-source-320.png).

Reproduktion: Repository per HTTP bereitstellen, dann `PROFILE_URL=http://127.0.0.1:4210 node review/footer-typografie-2026-10-11/pruefung.cjs`. Playwright und Chromium werden in der Prüfumgebung benötigt. Der Gate-Selbsttest lautet `node templates/website/psychoeducation-site-starter/tools/gate.mjs --selftest`.

## Prüfgrenzen

Die Nachprüfung ist eine technische Selbstprüfung in Chromium 151 unter Linux, keine unabhängige Prüfung oder neue Freigabe der PUK-Kommunikation. Keine Tests mit Menschen. Native Zoomfunktionen, andere Browser und reale Hilfsmittel wurden damit nicht geprüft. Die Reflow-Prüfung misst die Dokumentbreite der Prüfansicht; sie bescheinigt keine vollständige WCAG-Konformität aller Profilvorlagen oder abgeleiteten Websites. Fachliche Inhalte und deren Freigabestatus sind nicht Gegenstand der zentralen CSS-Korrektur.
