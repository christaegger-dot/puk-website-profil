# Entscheide zum Profilpaket 2026.10.2 · PUK Website-Profil

**13.10.2026 · von Claude im Auftrag der Fachstelle entschieden.** Die Fachstelle hat die Profilentscheide am 13.10.2026 im Chat an Claude übertragen («Profilentscheide: übertragen an dich»). Entschieden hat die Leitsitzung der Veröffentlichung der Borderline-Website. Diese Sitzung hat die Nachprüfung SP2-K gemacht und die Freigabe vom 12.10.2026 übertragen; Profil und Werkzeuge hat sie nicht geändert.

**Anlass:**
- Auflage AR3-5 der Borderline-Website (R3 Freigabe-Audit, 13.10.2026): Die Ausnahme R1-1 endet mit einem neuen Profilpaket, Frist 13.01.2027.
- Die Vorschläge für das Profil aus `templates/website/borderline-angehoerige/ENTSCHEIDE-SCHLUSSPRUEFUNG.md`, Abschnitt 5.6.
- Die Profilbefunde der Schlussprüfung: SPZ-34, -39, -40, -45, -47 bis -51 und -53.

**Ort der Änderung:**
- Quelle der Wahrheit ist das Design-System-Artefakt «PUK Zürich Website-Profil» (https://claude.ai/artifact/CEfjKQLjYnrcgZLeSc9ewJ).
- Dort wird das Profil geändert. Daraus entsteht das Paket 2026.10.2; es ersetzt in diesem Repository `components/`, `guidelines/` und den Starter (`CLAUDE.md`, «Leitlinien, Tokens und Komponenten nicht in diesem Repository ändern»).
- Das Änderungsprotokoll steht im `README.md`.

## Zeitpunkt (Entscheid Z)

**Umsetzung nach der Veröffentlichung der Website «Depression», spätestens ab 16.11.2026.**

- **Grund:** Beide Websites binden dasselbe `styles.css` mit dem Profil ein. Die Website «Depression» steht mitten in ihren Pre-Release-Audits (R3-Auftrag vom 13.10.2026). Ein neues Profil würde deren geprüfte Grundlage ändern, und Prüfungen müssten wiederholt werden.
- **Frist:** AR3-5 läuft bis 13.01.2027. Ein Start bis 16.11.2026 lässt Zeit für Paket, Neubau und Nachprüfung beider Websites.
- **Bis dahin gelten die begründeten Ausnahmen** der Borderline-Website weiter: R1-1 (Verweis im Text) und SPZ-F-32 (Druckregel).

## Entscheide

| Nr. | Befund | Entscheid | Umsetzung und Abnahme |
| --- | --- | --- | --- |
| P-1 | Druckregel, SPZ-F-32 (Vorschlag 5.6 Nr. 1); leere Seiten vor langen Figuren (SP1-39, NSK-1) | **Übernehmen.** Regel in `guidelines/00-technische-qualitaet.md`, F: «Ist eine Darstellung mit ihrer Liste länger als eine A4-Seite, stehen Titel, Kernaussage und der Anfang der Darstellung auf einer Seite; die Darstellung darf danach umbrechen, die Kennzeichnung folgt direkt auf das Ende der Darstellung. Eine leere Seite davor entsteht nicht.» | `components/bundle.css`, `@media print`: Die Hülle `.puk-vis-wide` ist nicht mehr unteilbar; `break-inside:avoid` gilt nur für Titel, Kernaussage und die Teile der Darstellung (wie NSK-1, allgemein). **Abnahme:** A4 in sechs Einstellungen (Rand 0, 10 und 15 mm; 80, 90, 100 und 110 %) für alle Figuren beider Websites: keine leere Seite, Titel und Kernaussage nie allein, Kennzeichnung direkt nach der Darstellung. Danach entfällt die begründete Ausnahme SPZ-F-32; überflüssige Regeln in `borderline.css` (NSK-1) prüft die bauende Sitzung mit Messung |
| P-2 | Verweis im Text in 16 px, R1-1 (AR3-5) | **Übernehmen.** `.puk-longform__boundary` steht im Lesegrad der Seite. | `components/bundle.css`: `font-size:16px` ersetzen durch den Token des Lesegrads (wie der Fliesstext von `.puk-longform`); Farbe, Rahmen und Abstände bleiben. **Abnahme:** an allen 28 Stellen der Borderline-Website und an allen Stellen der Website «Depression» gleiche Grösse wie der Fliesstext daneben, 320 bis 1440 px, 100 und 200 %. Danach endet die Ausnahme R1-1 |
| P-3 | E-Mail-Link der Absenderin 23 px hoch, SPZ-F-34 / SPZ-45 (Vorschlag 5.6 Nr. 2) | **Übernehmen.** Die Absenderin gilt als eigenständige Aktion: Zielhöhe 44 px. | Über den Innenabstand des Links, ohne die Zeile sichtbar zu verschieben (Ausgleich mit negativem Aussenabstand oder gleichwertig, nur mit Tokens). **Abnahme:** Zielfläche ≥ 44 px auf allen Seiten beider Websites, Foto vorher und nachher ohne sichtbaren Unterschied |
| P-4 | Fusszeile «Entwurf» bei `--production`, SPZ-1 (Vorschlag 5.6 Nr. 3) | **Übernehmen.** `node tools/gate.mjs --production` blockiert, wenn der angezeigte Redaktionsstatus (`editorialStatusLabel`, sonst `editorialStatus`) «Entwurf» enthält oder kein Datum nennt. Die Vorlage im Starter nennt das Format «Fachlich freigegeben am TT.MM.JJJJ». | `tools/contract.js` mit Selbsttest für beide Fälle. **Abnahme:** Selbsttest bestanden; beide Websites bestehen das Produktionsgate mit ihrem heutigen Status (Borderline «Fachlich freigegeben am 13.10.2026»; Depression `editorialStatusLabel` mit Datum) |
| P-5 | Ziffernkreise der Anspannungskurve wachsen nicht mit, SPZ-39 | **Übernehmen.** Kreise der Erklärmuster in `rem` statt 28 px fest. | `templates/website/longform/erklaermuster.css`: Grösse in `rem`, gleich bei 16 px Wurzelschrift. **Abnahme:** bei 100 % pixelgleich; bei 200 % liegt die Ziffer im Kreis |
| P-6 | Lange Wörter brechen ohne Trennstrich, SPZ-40 | **Übernehmen** als Profilregel nach dem Muster von NSK-2: Silbentrennung (`hyphens:auto`, Sprache aus `lang`) in Figuren und Überschriften, wenn der Container schmal ist. | `components/bundle.css` mit Container-Schwelle in `rem` (wie NSK-2, 12rem). **Abnahme:** bei 100 % unverändert; in Firefox (Silbentrennung vorhanden) bei 360 px und 200 % Trennung mit Trennstrich. Die sichtbare Wirkung in Safari prüfen die realen Tests (AR3-3) |
| P-7 | Webtexte des Starters für Laien schwer verständlich, SPZ-34 | **Übernehmen.** Die Versionszeile steht nicht mehr sichtbar in der Fusszeile, sondern als `<meta name="generator">`. Das `aria-label` des Logo-Links wird verständlich formuliert und beginnt weiter mit dem Logotext (Gate-Regel). | `tools/contract.js`. **Abnahme:** Satzdiff aller Seiten: nur die Versionszeile entfällt, und das `aria-label` ändert sich. Den neuen Wortlaut gibt die Leitsitzung vor dem Bau frei |
| P-8 | `gate.html` zeigt andere Ergebnisse als die Kommandozeile, SPZ-47 | **Übernehmen.** `gate.html` zeigt dieselben Ergebnisse wie `node tools/gate.mjs` und nennt den Modus. | `tools/gate-browser.js`. **Abnahme:** gleiche Zahl der Befunde wie die Kommandozeile, für Entwurf und Produktion |
| P-9 | Kopfzeilen, SPZ-48 | **Teilweise übernehmen:** `Strict-Transport-Security` und `Cache-Control` für Schriften und Logo. Eine engere CSP nur, wenn sie auf beiden Websites nichts blockiert. | Starter-`_headers`. **Abnahme:** nach der Veröffentlichung auf der Ziel-Adresse beider Websites; keine CSP-Meldung in der Konsole |
| P-10 | Lizenz der Schrift fehlt im Export, SPZ-49; `_redirects` von Hand kopiert | **Übernehmen.** `tools/export.mjs` kopiert `fonts/OFL.txt` und, wenn vorhanden, die `_redirects` der Website. | **Abnahme:** Export enthält beide Dateien; der Schritt «von Hand kopieren» im `README.md` der Websites entfällt |
| P-11 | C2PA-Manifest im Logo, SPZ-50 | **Übernehmen.** Die Metadaten werden aus `assets/logo.svg` entfernt. | **Abnahme:** gerendertes Logo pixelgleich bei 1×, 2× und 3× |
| P-12 | Ungenutztes CSS, SPZ-51 | **Keine Änderung.** | `site.css` ist rund 50 kB gross und ohne messbare Wirkung auf die Ladezeit. Das Entfernen wäre bei zwei Websites ein Risiko für Darstellungsfehler (M4) |
| P-13 | `robots.txt` und Hinweis auf `sitemap.xml`, SPZ-53 | **Übernehmen:** Der Export schreibt `robots.txt` mit `Sitemap:`-Zeile, wenn `siteUrl` gesetzt ist. `og-image.jpg` und `favicon.ico` entfallen weiter. | `tools/export.mjs`. **Abnahme:** `robots.txt` ohne Sperre, mit der Sitemap-Adresse |
| P-14 | Schwellen in `rem` und Druckschrift 81,25 % (Nachprüfung SP2-K, Teil I) | **Übernehmen** als Hinweis in `guidelines/07-visualisierung-umsetzen.md` beim Absatz zu den Schwellen. | Wortlaut: «Schwellen in `rem` verschieben sich im Druck, weil die Wurzelschrift dort 81,25 % beträgt. Soll die Druckansicht gleich bleiben, steht die heutige px-Schwelle als Untergrenze, z. B. `(max-width:800px) or (max-width:50rem)`.» |

## Ablauf

1. **Bauende Sitzung (Profil):**
   - ändert das Design-System-Artefakt nach P-1 bis P-11, P-13 und P-14 und erzeugt daraus das Paket 2026.10.2;
   - ersetzt es in diesem Repository und führt das Änderungsprotokoll im `README.md`;
   - Websites unter `templates/website/<website>/` bleiben erhalten;
   - Selbsttest des Gates.
2. **Prüfsitzung (Profil):** prüft das Paket gegen diese Entscheide und die Abnahmen.
3. **Beide Websites neu bauen,** je mit Selbstprüfung, Nachprüfung in eigener Sitzung, neuem Export und Prüfung der Produktion.
4. **Danach** enden die Ausnahmen R1-1 und SPZ-F-32 der Borderline-Website. AR3-5 ist dann erfüllt.
