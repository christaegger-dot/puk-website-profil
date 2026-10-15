# Selbstprüfung · Profilpaket 2026.10.2

**15.10.2026 · bauende Sitzung (Claude Code)**, im Auftrag der Fachstelle («ja, leg los»).

- **Grundlage:** `ENTSCHEIDE-PROFIL-2026-10-2.md`, Stand nach den Entscheiden zu P-3 und P-7 (Merge `8abc333`).
- **Keine Prüfstufe:** Dies ist die Selbstprüfung der bauenden Sitzung. Die Prüfung des Pakets macht eine Sitzung, die nicht gebaut hat (Ablauf, Schritt 2).
- **Belege:** Messskripte und Rohdaten liegen in `messung/`.
- **Messumgebung:** Chromium 141.0.7390.37 (Playwright) und poppler 24.02. Firefox und Safari standen nicht zur Verfügung.

## Ergebnis je Punkt

| Nr. | Abnahme laut Entscheid | Ergebnis | Beleg |
| --- | --- | --- | --- |
| P-1 Druck | A4 in zwei Einstellungen für jede Figur, die im Druck länger als eine A4-Seite ist, und eine kurze Figur je Muster als Gegenprobe. Erfüllt sein muss: keine leere Seite, Titel und Kernaussage nie allein, Kennzeichnung direkt nach der Darstellung, kurze Figuren unverändert. | **Teilweise erfüllt, mit einer Abweichung (siehe unten).** Gemessen in allen 12 Einstellungen statt in zwei. | **Starter und «Depression», 17 Figuren × 12 Einstellungen = 204 Fälle** (`druck-final.json`):<br>• leere Seiten: 0<br>• Titel, Kernaussage und Anfang auf einer Seite: in allen 204 Fällen<br>• Kennzeichnung direkt nach der Darstellung: 203 von 204. Ausnahme `behandlung-und-verlauf` › v-bv-weg bei 15 mm/110 %, schon vor dem Paket gleich (`druck-before.json`).<br>• Keine Figur dieser beiden Websites ist länger als eine A4-Seite.<br>**Verlängerte Abfolgen, 4 Figuren × 12 Einstellungen = 48 Fälle** (`druck-long-*.json`):<br>• leere Seiten: vorher 35, nachher 0<br>• Titel, Kernaussage und Anfang zusammen: vorher 40, nachher 48<br>• Kennzeichnung direkt nach dem Ende: vorher 43, nachher 47. Die Ausnahme: v-bh-ablauf bei 15 mm/100 %; die Darstellung endet unten auf der Seite, und die Kennzeichnung steht oben auf der nächsten. Vorher war in diesem Fall eine Seite leer. |
| P-2 Verweis im Text | An allen Stellen gleich gross wie der Fliesstext daneben, 320 bis 1440 px, bei 100 und 200 %. | **Erfüllt** für «Depression» (Kopie mit neuem Profil); an der Borderline-Website prüft es die Übernahme dort. | 2 Seiten (`begleiten`, `fuer-sich-sorgen`) mit je 2 Verweisen, bei 320, 360, 768, 1280 und 1440 px, je 100 und 200 %: 20 von 20 Messungen gleich gross, z. B. 19 px bei 360 px und 21 px bei 1280 px (`selfcheck.cjs`). |
| P-3 E-Mail-Link (Ausnahme) | Die Prüfsitzung misst an Starter und «Depression» den Abstand zum nächsten Ziel: Ein Kreis von 24 px Durchmesser darf kein anderes Ziel überschneiden. | **Vorgemessen, erfüllt.** | Der Link ist 23,3 px hoch. Abstand von seiner Mitte zum nächsten Ziel: Starter 57,2 px (1280) und 90,1 px (360); «Depression» 83,6 px und 90,1 px. Nötig sind 12 px. Satz in `guidelines/09-interaktionskonzept.md`, Bedienziele. |
| P-4 Redaktionsstatus | Selbsttest bestanden; beide Websites bestehen das Produktionsgate mit ihrem heutigen Status. | **Erfüllt** für «Depression»; die Borderline-Website prüft es bei der Übernahme dort. | **Selbsttest 68/68**; neu sind drei Fälle: «Entwurf», ohne Datum, mit Datum.<br>**«Depression» (Kopie, neue Werkzeuge):** Produktionsgate 0 blockierend, Status «Fachlich freigegeben am 12.10.2026 (…)».<br>**Starter:** neuer Befund `editorial-status`, weil er eine synthetische Referenz ist; das ist erwartet. |
| P-5 Ziffernkreise | Bei 100 % pixelgleich; bei 200 % liegt die Ziffer im Kreis. | **Erfüllt.** | Neue Regel und alte Regel (28/32 px fest) ergeben pixelgleiche Bilder des Musters G: `depression-verstehen` 1022 × 394 px, `erklaermuster` 1022 × 506 px. Bei 200 % sind die Kreise 56 × 56 px, und die Ziffer liegt in allen 7 Kreisen. |
| P-6 Silbentrennung | Bei 100 % unverändert; bei 360 px und 200 % Trennung mit Trennstrich. | **Regel greift wie vorgesehen; die sichtbare Trennung ist nicht geprüft.** | **Berechneter Wert `hyphens`:**<br>• 100 % bei 360 und 1280 px: `manual` (wie bisher)<br>• 200 % bei 320 und 360 px: `auto` in Figur und Abschnittsüberschrift, Fliesstext weiter `manual`<br>• 200 % bei 1280 px: `auto` nur in der Abschnittsüberschrift, weil deren Spalte dort schmaler als 12rem ist<br>Ob tatsächlich Trennstriche erscheinen, war hier nicht prüfbar: Firefox fehlt, und Chromium hat hier kein deutsches Trennwörterbuch. Das bleibt für die Prüfsitzung bzw. die realen Tests (AR3-3). |
| P-7 Fusszeile und Logo-Link | Satzvergleich aller Seiten: Nur die Versionszeile entfällt, und das `aria-label` ändert sich. | **Erfüllt.** | **Starter, 7 Seiten:** je 3 geänderte Einheiten, nämlich die Versionszeile (entfällt), das alte und das neue `aria-label`. Sonst kein Satz geändert; `gate.html` unverändert.<br>**«Depression» (Kopie), 10 Seiten:** dasselbe Bild. Neuer Wortlaut: «Psychiatrische Universitätsklinik Zürich – zur Startseite dieser Website». |
| P-8 `gate.html` | Gleiche Befunde (Zahl und Prüfungen) wie die Kommandozeile, Entwurf und Produktion, an Starter und «Depression»; Gegenprobe ohne `PRUEFBERICHT.md`. | **Erfüllt.** | **Befunde in Browser und Kommandozeile gleich:**<br>• Starter: Entwurf 0/12, Produktion 11/1, gleiche Prüfungen<br>• «Depression» (Kopie): 0/0 und 0/0<br>**Selbsttest in `gate.html`:** läuft jetzt wie `--selftest` an der Referenz in `tools/selftest/`, 68/68. Vorher zeigte er in der Kopie 22/68, ebenfalls eine Abweichung von der Kommandozeile.<br>Die Gegenprobe ohne `PRUEFBERICHT.md` deckt der Selbsttest ab («Produktion ohne Prüfbericht blockiert»); `loadSite()` liefert dann `null` wie die Kommandozeile. |
| P-10 Export: Lizenz, `_redirects` | Der Export enthält beide Dateien. | **Erfüllt.** | Export der Kopie «Depression» mit einer Probe-`_redirects`: `fonts/OFL.txt` ist byte-gleich mit `assets/fonts/OFL.txt`, und `_redirects` ist dabei. Ohne Lizenz neben den Schriften bricht der Export ab. |
| P-13 `robots.txt` | `robots.txt` ohne Sperre, mit der Sitemap-Adresse. | **Erfüllt.** | Inhalt: `User-agent: *`, `Allow: /`, `Sitemap: https://depression-angehoerige.netlify.app/sitemap.xml`. |
| P-14 Leitlinie | Wortlaut wie entschieden. | **Erfüllt.** | `guidelines/07-visualisierung-umsetzen.md`, Absatz zu den Schwellen, im Wortlaut. |
| P-15 Sticky im Druck | A4-Druck mit Rand 0 einer Seite mit Quellenliste, einmal vom Seitenanfang und einmal nach dem Scrollen: keine Überschrift über einem Eintrag; am Bildschirm unverändert. | **Erfüllt** für «Depression»; die Borderline-Website (`quellen`) prüft es bei der Übernahme dort. | `begleiten`, 1280 px:<br>• Bildschirm `position: sticky`, Druck `static`<br>• Neue Regel: Druck vom Seitenanfang und nach dem Scrollen haben denselben Text auf allen 7 Seiten.<br>• Gegenprobe mit der alten Regel: Seiten 1 bis 6 weichen ab, z. B. fehlt auf Seite 2 die Überschrift «02 · Gespräch – Die Depression ansprechen» an ihrem Platz. |
| P-16, P-17 | Siehe Änderungsprotokoll vom 15.10.2026. | **Erfüllt**, nach diesem Paket wiederholt. | `p16p17.cjs`: 27 von 27 Punkten bestanden. |
| P-9, P-11, P-12 | Gestrichen bzw. keine Änderung. | Nicht gebaut. | – |

## Abweichungen und Hinweise für die Prüfsitzung

1. **P-1, kurze Abfolgen brechen jetzt um.**
   - Was sich ändert: Damit lange Abfolgen auf der Seite des Titels beginnen, dürfen Prozesspfad, Entscheidungsweg und Modell in Schritten zwischen ihren Schritten umbrechen. Das gilt auch für kurze.
   - Gemessen: In 9 von 204 Fällen bricht eine kurze Figur jetzt über zwei Seiten um. Betroffen sind `unterstuetzung-finden` › v-us-wegweiser (5 Einstellungen) und `depression-verstehen` › v-dv-entstehung (4 Einstellungen). Vorher rückten diese Figuren als Ganzes auf die nächste Seite.
   - Was erfüllt bleibt: Titel, Kernaussage und Anfang stehen zusammen, und die Kennzeichnung folgt direkt.
   - Die Abnahme «kurze Figuren unverändert» ist damit nicht wörtlich erfüllt. Mit CSS allein lassen sich kurze und lange Figuren im Druck nicht unterscheiden. Ob das so bleiben soll, entscheidet die Fachstelle nach der Prüfung.
   - Beispiel (angesehen als Bild): Entscheidungsweg bei 0 mm/100 %; Frage 1 auf Seite 1, Frage 2 und Kennzeichnung auf Seite 2. Die Fälle stehen in `druck-final.json`.
2. **P-1, Modell in Schritten (G) im Druck mit Zeichnung oben** (`erklaermuster.css`, `align-items:start` nur im Druck).
   - Grund: Zentriert schob Chromium bei langer Schrittliste die ganze Zeile auf die nächste Seite. Titel und Kernaussage blieben dann allein auf einer sonst leeren Seite, in 8 von 48 Fällen.
   - Wirkung bei kurzen G-Figuren: Die Zeichnung steht im Druck oben statt mittig neben den Schritten.
3. **P-1, räumliche Darstellungen bleiben unteilbar.**
   - Betroffen sind Kreislauf, Beziehungskarte, Schichten, Überschneidung, Szene und Gegenüberstellungen. Ist eine davon länger als eine Seite, gilt die alte Lage.
   - Auf `ihre-situation` (15 mm/110 %) bleibt deshalb eine fast leere Seite vor dem Kreislauf; zwei Zeilen Text stehen darauf. Das war schon vor dem Paket so.
4. **Mitlaufende Änderung an der Website «Depression» im Repository.**
   - Die Kopie hier lädt `styles.css` und `erklaermuster.css` gemeinsam. P-1, P-2, P-5, P-6 und P-15 wirken dort sofort.
   - Die veröffentlichte Fassung (Export `dd0ac45`) ist unverändert. Ein neuer Export braucht die Stufen nach Entscheid Z und den Entscheid zu R3-01.
5. **Nicht in diesem Paket:**
   - Übernahme in der Borderline-Website (Ablauf, Schritt 3) und in «Depression» (Schritt 4).
   - Nachführung des Claude-Skills «puk-website-profil». Er nennt noch «2026.10» und «46 Fälle»; er liegt auf claude.ai, nicht im Repository.
