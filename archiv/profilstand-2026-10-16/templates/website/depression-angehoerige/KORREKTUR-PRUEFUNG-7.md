# Korrekturauftrag · Depression-Website · nach der siebten Prüfsitzung

Stand 12.10.2026. Gilt für `templates/website/depression-angehoerige/` auf `main`, Stand `76dcf9b` (nach Merge von PR #57; der Website-Ordner ist inhaltlich gleich wie `72560d0`). Für die **bauende Sitzung**.

## 0. Antwort der Fachstelle

Die Fachstelle setzt hier ihre Antwort auf `FREIGABE-ENTSCHEIDE.md` ein:

> **Antwort vom … (Ch. Egger):** «…» (z. B. «Alles wie empfohlen, ausser …»)
>
> **Antwort 2 (Arbeitsheft):** 1. … 2. … 3. … 4. …

So liest du die Antwort:

- **Ohne Antwort nicht beginnen.** Fehlt sie, fragst du die Fachstelle.
- **«wie empfohlen»** heisst: Die Empfehlung in `FREIGABE-ENTSCHEIDE.md` gilt. Du setzt sie mit dem Wortlaut aus diesem Auftrag um.
- **«anders: …»** heisst: Die Antwort gilt. Ist sie unklar oder fehlt ein Wortlaut, fragst du nach. Du formulierst nichts Fachliches selbst.
- **Punkte ohne Antwort** bleiben unverändert. Du nennst sie in der Selbstprüfung unter «Offen».

## 1. Anlass und Umfang

- **Grundlage:** `PRUEFBERICHT.md` › W1 › «Prüfrunde 9 · Prüfung am Original» (Befunde W1-35 bis W1-38, «Vorschläge zu W1-09 Rest», PDF-Grössen) und `FREIGABE-ENTSCHEIDE.md`, Abschnitte 1 bis 3 und 5.
- **Rollen:** Du bist bauende Sitzung. Nachprüfen darf danach nur eine Sitzung, die diese Korrektur nicht umgesetzt hat.
- **Netz:** Du brauchst kein Internet. Alle neuen oder geänderten Adressen hat die siebte Prüfsitzung am 12.10.2026 abgerufen: Antwort 200, Ziel passt. Erreichst du sie nicht, notierst du «nicht geprüft». Du umgehst keine Sperre.

| Nr. | Thema | Grundlage | Abschnitt |
| --- | --- | --- | --- |
| 1 | Fachliche Freigabe der Texte und der 11 Darstellungen übertragen | W1-F-21 · Antwort 1 a, 1 c | 3 |
| 2 | Abbildung «Mit im Boot» | W1-F-15 · Antwort 2 | 3 e |
| 3 | «EKT» und «rTMS» wieder in die Klammern | Antwort 1 b | 4 a |
| 4 | Warnsignale: Quelle NVL Kapitel 12.1 ergänzen | W1-35 · Antwort 1 e | 4 b |
| 5 | Obsan: «Behandlung wegen psychischer Probleme» | W1-36 · Antwort 1 e | 4 c |
| 6 | Stand-Vermerk der Angebote | W1-33, W1-34 · Antwort 1 f | 4 d |
| 7 | Verweis im Text nach «den Raum verlassen» | R1, Punkt 18 · Antwort 3 | 4 e |
| 8 | Abrufdatum am Ende jeder Quellenliste | W1-09 Rest · Antwort 5 | 5 a |
| 9 | PDF-Grössen in 11 Linktexten | BD-09, W3-10 Rest · Antwort 5 | 5 b |
| 10 | Quellenangaben korrigieren (NVL, ICD-11, Titel, DOI, Pro Mente Sana) | W1-09 Rest · Antwort 5 | 5 c |
| 11 | Plan beim Pfad: «nach dem Abklingen der Beschwerden» | W1-38 · Antwort 5 | 5 d |

**Geändert werden nur:**
- `content/` der acht Inhaltsseiten und von `impressum-datenschutz` (nur der Entwurfsvermerk);
- `site.config.json` (Freigabestatus, redaktioneller Status, `$comment`, ein `statement`);
- die gebauten Seiten, nur über `node tools/build.mjs`;
- `PRUEFBERICHT.md` (Entscheid, Umsetzung, Selbstprüfung);
- `FREIGABE-ENTSCHEIDE.md` (eine Zeile mit der Antwort).

**Unverändert bleiben** alle übrigen Texte, `tools/`, `_headers`, `components/`, `guidelines/` und `README.md`.

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dastehen. Zeilennummern beziehen sich auf `76dcf9b` und dienen nur zur Orientierung. Du suchst nach dem Text.
- **Nur Quellen ändern:** in `content/<id>.html` und `site.config.json`, danach bauen. Gebaute Seiten änderst du nie von Hand.
- **Keine weiteren Änderungen.** Fällt dir etwas auf, nennst du es in der Selbstprüfung und änderst es nicht.
- **Gleicher Satz an mehreren Stellen:** überall gleich ändern (z. B. Titel der Stand-by-You-Studie, PDF-Grössen).
- **Verweis im Text:** nur über `<p data-responsibility-inline></p>`, nie mit eigenem Wortlaut.
- **Hausregeln:** «ss» statt «ß», Guillemets «», kurze Sätze.
- **Keine Stufe auf «erledigt».** Die Freigabe trägst du nur so ein, wie die Fachstelle sie gegeben hat.

## 3. Fachliche Freigabe übertragen (W1-F-21)

Gilt nur, wenn die Antwort 1 a und 1 c freigibt.

### a) `site.config.json`

| Stelle (Zeile in `76dcf9b`) | bisher | neu |
| --- | --- | --- |
| `approvalStatus` von `v-dv-schichten` (153), `v-dv-entstehung` (180), `v-bv-vergleich` (244), `v-bv-weg` (259), `v-bv-fruehzeichen` (285), `v-is-gefaess` (362), `v-is-kreislauf` (389), `v-ro-spannung` (477), `v-fs-netz` (668), `v-ra-vergleich` (733) | `"ausstehend"` | `"freigegeben"` |
| `approvalStatus` von `v-bg-boot` (555) | `"ausstehend"` | nach Abschnitt 3 e |
| `editorialStatus` (18) | `"draft"` | `"freigegeben"` |
| `editorialStatusLabel` (19), erscheint in jeder Fusszeile | «Musterentwurf, Stand 11.10.2026 – fachliche Prüfung ausstehend» | «Fachlich freigegeben am ‹Datum der Antwort› (Fachstelle Angehörigenarbeit PUK)». Bleibt das Boot offen: «Fachlich freigegeben am ‹Datum der Antwort› (Fachstelle Angehörigenarbeit PUK); Abbildung «Mit im Boot» noch ausstehend» |
| `$comment` (2), Teilsatz | «alle Texte sind Musterentwurf bis zur fachlichen Prüfung» | «Texte und Darstellungen fachlich freigegeben am ‹Datum der Antwort›; rechtliche Angaben auf rechte-und-angebote und impressum-datenschutz unter Vorbehalt der rechtlichen Prüfung» |

### b) Entwurfsvermerk im Kopf (Zeile 1, `<p class="puk-longform__boundary">`)

| Datei | bisher | neu |
| --- | --- | --- |
| `index` | `<p class="puk-longform__boundary"><strong>Musterentwurf:</strong> Die Texte dieser Website sind noch nicht fachlich geprüft.</p>` | Absatz entfällt |
| `depression-verstehen`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `fuer-sich-sorgen` | `…<strong>Musterentwurf:</strong> noch nicht fachlich geprüft.</p>` | Absatz entfällt |
| `begleiten` | `…<strong>Musterentwurf:</strong> noch nicht fachlich geprüft. Die Hinweise zum Umgang beruhen …</p>` | `<p class="puk-longform__boundary">Die Hinweise zum Umgang beruhen vor allem auf dem Konsens von Fachleuten und Menschen mit eigener Erfahrung, nicht auf Wirksamkeitsstudien.</p>` |
| `rechte-und-angebote` | `…<strong>Musterentwurf:</strong> noch nicht fachlich geprüft. Rechtliche Angaben: Stand 10.10.2026, rechtliche Prüfung ausstehend.</p>` | `<p class="puk-longform__boundary">Rechtliche Angaben: Stand 10.10.2026, rechtliche Prüfung ausstehend.</p>` |
| `impressum-datenschutz` | `…<strong>Musterentwurf:</strong> noch nicht fachlich geprüft. Rechtliche Angaben: Stand 11.10.2026, rechtliche Prüfung ausstehend.</p>` | `<p class="puk-longform__boundary">Rechtliche Angaben: Stand 11.10.2026, rechtliche Prüfung ausstehend.</p>` |

Prüfe die Markierung vorher genau (`<strong>`). Sie kann leicht abweichen; massgebend ist der Text.

### c) Kennzeichnung unter den Figuren

| Datei (Zeile) | bisher | neu |
| --- | --- | --- |
| `depression-verstehen` (37, 64), `behandlung-und-verlauf` (22, 33, 58), `ihre-situation` (38, 57), `je-nach-rolle` (47), `fuer-sich-sorgen` (22) | «… · fachliche Freigabe ausstehend.» | «· fachliche Freigabe ausstehend» entfällt; der Satz endet mit dem Punkt nach der Quelle |
| `begleiten` (35) | wie oben | nach Abschnitt 3 e |
| `rechte-und-angebote` (13) | «… · rechtliche und fachliche Prüfung ausstehend.» | «… · rechtliche Prüfung ausstehend.» |

### d) Entscheid festhalten

- `PRUEFBERICHT.md` › «Von der Fachstelle entschieden (Ch. Egger)»: neuer Eintrag mit Datum, der Antwort im Wortlaut, was freigegeben ist und welche Vorbehalte bleiben. Vorbehalte sind die rechtlichen Angaben auf `rechte-und-angebote` und `impressum-datenschutz` (W1-31, W1-37) und, falls offen, das Boot (W1-F-15).
- `FREIGABE-ENTSCHEIDE.md`: unter «So antworten Sie» eine Zeile «**Antwort der Fachstelle vom ‹Datum›:** «…» (eingetragen von der bauenden Sitzung)». Sonst nichts ändern.

### e) Abbildung «Mit im Boot» (Antwort 2)

- **Bestätigt die Antwort** das Bild (Fragen 1 bis 3 ohne Abweichung):
  - `v-bg-boot` erhält `"freigegeben"`.
  - In `begleiten` (35) entfällt «· fachliche Freigabe ausstehend».
  - Nennt Antwort 4 Seite und Fassung, ändert sich in `begleiten` › Quellen (Zeile 73) der Titel: «Wenn dein Partner depressiv ist. Ein Arbeitsheft für Partnerinnen, ‹Fassung›, S. ‹Seite›.»
- **Weicht das Heft ab:** nichts ändern. Du schreibst in der Selbstprüfung einen Vorschlag, wie Bild oder Sätze anzupassen wären, und lässt die Freigabe offen.

## 4. Texte

### a) «EKT» und «rTMS» (Antwort 1 b)

`content/behandlung-und-verlauf.html`, Abb. 1, Vertiefung «Weitere Verfahren und Grenzen des Vergleichs» (Zeile 21):

| bisher | neu |
| --- | --- |
| «Dazu gehören eine Behandlung mit kurzen Stromimpulsen in Narkose (Elektrokonvulsionstherapie), eine Behandlung mit Magnetimpulsen am Kopf (transkranielle Magnetstimulation) und ein Medikament als Nasenspray (Esketamin).» | «Dazu gehören eine Behandlung mit kurzen Stromimpulsen in Narkose (Elektrokonvulsionstherapie, EKT), eine Behandlung mit Magnetimpulsen am Kopf (transkranielle Magnetstimulation, rTMS) und ein Medikament als Nasenspray (Esketamin).» |

### b) Warnsignale: Quelle ergänzen (W1-35)

`content/begleiten.html` › Quellen:

1. Zeile 71, Linktext: «… Version 3.2, Kapitel 2» wird «… Version 3.2, Kapitel 2.7». Adresse und «Verwendung» bleiben.
2. Direkt danach ein neuer Eintrag:

```html
<li><a class="puk-link--inline" href="https://www.leitlinien.de/themen/depression/version-3/kapitel-12">Nationale VersorgungsLeitlinie Unipolare Depression, Version 3.2, Kapitel 12.1</a> (BÄK, KBV, AWMF, 2022/2023)<span class="puk-longform__source-use">Verwendung: Abschiedsvorbereitungen, Beschaffen von Mitteln, gefährliche Mittel sichern.</span></li>
```

3. Die Warnsignale im Text bleiben unverändert.
4. Nennt die Fachstelle für «Wertvolles verschenken» oder «eine plötzliche, unerklärliche Ruhe nach einer schweren Zeit» eine Quelle, kommt sie als eigener Eintrag dazu. Du verwendest nur die Angaben der Fachstelle. Ohne Quelle gilt die Bestätigung als Fachwissen und der Text bleibt.

### c) Obsan (W1-36)

`content/depression-verstehen.html` › Quellen (Zeile 89), «Verwendung»:

| bisher | neu |
| --- | --- |
| «Verwendung: Häufigkeit in der Schweiz, Unterschiede zwischen Frauen und Männern, Behandlung und Suizid.» | «Verwendung: Häufigkeit in der Schweiz, Unterschiede zwischen Frauen und Männern, Behandlung wegen psychischer Probleme und Suizid.» |

«Antidepressiva machen nicht süchtig.» und «Ferien oder einen Ortswechsel als Heilmittel verordnen.» bleiben, wenn die Fachstelle sie bestätigt. Nennt sie eine Quelle, gilt 4 b, Punkt 4 sinngemäss.

### d) Stand-Vermerk der Angebote (Antwort 1 f)

`content/rechte-und-angebote.html` › `angebote` (Zeile 43). Der Absatz bleibt der letzte des Abschnitts. Die VASK-Sätze bleiben unverändert.

| bisher | neu |
| --- | --- |
| `<p>Angaben zu den Angeboten: Stand 10.10.2026, vor der Veröffentlichung zu prüfen.</p>` | `<p>Angaben zu den Angeboten: Stand 12.10.2026.</p>` |

### e) Verweis im Text (Antwort 3)

`content/fuer-sich-sorgen.html` › `grenzen`: direkt nach dem Absatz «Grenzen gelten auch im Umgang miteinander: … Sie dürfen ein Gespräch beenden und den Raum verlassen.</p>» (Zeile 10), vor `</div></div></section>`, eine neue Zeile:

```html
<p data-responsibility-inline></p>
```

Danach gibt es website-weit drei Verweise im Text: `begleiten` › `suizidgedanken`, `fuer-sich-sorgen` › `grenzen` und `fuer-sich-sorgen` › `eigene-krise`.

## 5. Quellenangaben und Dateien

### a) Abrufdatum (W1-09 Rest)

Auf den sieben Seiten mit Quellenliste kommt im Abschnitt `quellen` direkt nach `</ul>` ein Absatz dazu:

```html
<p>Online-Quellen abgerufen am 12.10.2026.</p>
```

Die Seiten sind `depression-verstehen`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `begleiten`, `fuer-sich-sorgen` und `rechte-und-angebote`. Das Datum ist der Tag der Prüfung am Original, nicht der Tag der Umsetzung.

### b) PDF-Grössen (BD-09, W3-10 Rest)

In allen 11 PDF-Links wird «(PDF)» am Ende des Linktexts zu «(PDF, ‹Grösse›)». Die Zuordnung geht nach der Adresse:

| Adresse endet auf | Grösse | Seiten |
| --- | --- | --- |
| `MHFA_Depression-Guidelines.pdf` | 0,3 MB | `begleiten`, `fuer-sich-sorgen` |
| `2025_Langversion_UnipolareDepression_Teil1_DE_20251113.pdf` | 1,5 MB | `begleiten`, `behandlung-und-verlauf`, `depression-verstehen` |
| `obsan_bulletin_2024_11_d.pdf` | 3,5 MB | `depression-verstehen` |
| `Barometer-2024_Depression-und-Familie-data.pdf` | 0,2 MB | `ihre-situation` |
| `sby_studie_deutsch.pdf` | 3,8 MB | `ihre-situation`, `je-nach-rolle` |
| `Barometer%20Depression_Grafikband%20zum%20Download.pdf?v=1` | 0,9 MB | `je-nach-rolle` |
| `…-empfehlungen-fuer-fachpersonen.pdf` (BAG) | 1,0 MB | `rechte-und-angebote` |

Nach der Änderung gibt es in `content/` kein «(PDF)» ohne Grösse mehr (11 Treffer für «(PDF, »).

### c) Quellenangaben korrigieren (W1-09 Rest)

| Nr. | Seite (Zeile) | bisher | neu |
| --- | --- | --- | --- |
| c1 | `behandlung-und-verlauf` (77), NVL | `href="https://www.leitlinien.de/themen/depression/version-3/kapitel-3"` | `href="https://www.leitlinien.de/themen/depression/version-3"` (Übersicht; der Linktext nennt mehrere Kapitel und bleibt) |
| c2 | `depression-verstehen` (88), ICD-11 | `href="https://icd.who.int/browse/2024-01/mms/en"` | `href="https://icd.who.int/browse/2026-01/mms/en"` (aktuelles Release, Codes gleich) |
| c3 | `ihre-situation` (69) und `je-nach-rolle` (85), Linktext | «Studie «Stand by You»: Angehörige psychisch erkrankter Menschen (PDF)» | «Stand by You Studie: Situation der Angehörigen und Vertrauten von Menschen mit psychischen Erkrankungen in der Schweiz (PDF, 3,8 MB)» (Titel laut Titelblatt) |
| c4 | `ihre-situation` (68), Linktext | «Deutschland-Barometer Depression 2024: Depression und Familie (PDF)» | «Deutschland-Barometer Depression 2024: Depression und Familie, Pressemitteilung (PDF, 0,2 MB)» (die Datei ist die Pressemitteilung vom 26.11.2024) |
| c5 | `je-nach-rolle` (77), Albermann und Müller | `href="https://www.paediatrieschweiz.ch/familien-mit-einem-psychisch-erkrankten-elternteil/"` | `href="https://doi.org/10.35190/d2021.4.5"` (führt auf dieselbe Seite; Linktext bleibt) |
| c6 | `ihre-situation` (77), Hooley und Gotlib | `<strong>Hooley JM, Gotlib IH (2000): <span lang="en">A diathesis-stress conceptualization of expressed emotion and clinical outcome</span>. Applied and Preventive Psychology 9(3).</strong>` | `<a class="puk-link--inline" href="https://doi.org/10.1016/S0962-1849(05)80001-0">Hooley JM, Gotlib IH (2000): <span lang="en">A diathesis-stress conceptualization of expressed emotion and clinical outcome</span>. Applied and Preventive Psychology 9(3)</a>` («Verwendung» bleibt) |
| c7 | `fuer-sich-sorgen` (47), Schomerus et al. | `[<span lang="en">A group intervention for spouses of patients with depression – is it effective?</span>] Psychiatrische Praxis 34(5), Titel in der englischen Übersetzung von PubMed` | `Gruppenintervention zur Unterstützung von Partnern depressiv Erkrankter – eine lohnende Massnahme? Psychiatrische Praxis 34(5)` (deutscher Originaltitel laut Crossref, mit «ss»; ohne `lang="en"`) |
| c8 | `rechte-und-angebote` (38), Pro Mente Sana | `… <a class="puk-link--inline" href="https://promentesana.ch/angebote/beratung/beratung-fuer-betroffene-nahestehende">promentesana.ch</a></dd>` | `… <a class="puk-link--inline" href="https://promentesana.ch/angebote/beratung/beratung-fuer-betroffene-nahestehende">promentesana.ch</a> · <a class="puk-link--inline" href="https://promentesana.ch/angebote/weiterbildung/rechtskurse">Rechtskurse auf promentesana.ch</a></dd>` (wie bei der VASK) |

**Entfällt:** «Kapitel 2.4» bei der NVL auf `depression-verstehen`. Der Vorschlag war optional, und der Link führt auf Kapitel 1.

### d) Plan beim Pfad (W1-38)

`site.config.json` › `v-bv-weg` › `statement` (Zeile 252):

| bisher | neu |
| --- | --- |
| «… wenn nötig Tagesklinik oder Klinik (gestrichelt), Weiterbehandlung nach der Besserung.» | «… wenn nötig Tagesklinik oder Klinik (gestrichelt), Weiterbehandlung nach dem Abklingen der Beschwerden.» |

## 6. Nicht in diesem Auftrag

- **Impressum, Datenschutz und rechtliche Aussagen:** W1-31 und W1-37 warten auf den Rechtsdienst. Dazu gehören der Wortlaut auf `impressum-datenschutz`, «Auskunft über Gesundheitszustand und Behandlung» auf `rechte-und-angebote` und der Vermerk «rechtliche Prüfung ausstehend». Ausnahme: Der Entwurfsvermerk wird nach Abschnitt 3 b gekürzt.
- **Profil-Befunde:** W3-11, W3-12, R1-01, R1-02, R1-04, V-10, R2-08 und die Profil-Teile von R2-01, R2-02, V-08 und V-09. Zurückgestellt sind sie nur, wenn die Antwort 5 das sagt. Du trägst die Zurückstellung mit der Begründung aus `FREIGABE-ENTSCHEIDE.md`, Abschnitt 5 ein.
- **BD-08:** erst nach den realen Screenreader-Läufen.
- **W1-25, Ausnahmen (Antwort 1 g):** Es gibt keine Textänderung. Die DOI zu Hooley und Gotlib kommt aus 5 c.

## 7. Prüfen vor dem Commit

1. `node tools/build.mjs` → 10 Seiten, Gate (Entwurf) 0 blockierend. Erwartet:
   - Hinweise nur noch `review-report`, dazu `visual-approval` für `v-bg-boot`, falls das Boot offen ist.
   - `node tools/gate.mjs --production`: blockiert nur noch `review-report` (und gegebenenfalls `v-bg-boot`).
   - `--selftest` alle Fälle bestanden; `sitemap.xml` unverändert.
   - Weicht etwas davon ab, nennst du es.
2. **Satzvergleich vorher/nachher:** gebaute Seiten gegen `76dcf9b`, ganzer `body`. Du nennst jede geänderte, neue und entfallene Einheit je Seite.
   - Gewollt entfallen: die Entwurfsvermerke und «fachliche Freigabe ausstehend».
   - Sonst darf kein Satz entfallen.
   - Dazu die Kennzahlen nach der Zählweise von R2 für jede geänderte Seite: Sätze, Sätze mit Verneinung, Sätze über 25 Wörter.
3. **Playwright** (Chromium; vorinstalliert, nicht «playwright install» ausführen), CSP aus `_headers` per Route:
   - 10 Seiten × 320, 360, 640, 768, 1024, 1280 und 1440 px: kein Überlauf, 0 Konsolenfehler, 0 CSP-Verstösse (mit Positivkontrolle), keine fremden Anfragen;
   - bei 200 % Schrift kein Überlauf und 0 überlappende Textzeilen in allen 11 Figuren;
   - axe-core auf den geänderten Seiten bei 1280 und 360 px.
4. **Links:**
   - Auf keiner Seite zwei gleichnamige Links mit verschiedenem Ziel; beachte vor allem `rechte-und-angebote` (Pro Mente Sana) und `begleiten` (NVL 2.7 und 12.1).
   - 0 `tel:`.
   - Genau drei Verweise im Text, je direkt nach der Handlungsanleitung.
5. **Ansehen** bei 1280 und 360 px:
   - `fuer-sich-sorgen` › `grenzen` mit dem neuen Verweis;
   - `behandlung-und-verlauf` › Abb. 1 mit geöffneter Vertiefung;
   - je ein Quellenblock mit Abrufdatum;
   - die Fusszeile mit dem neuen Status.
   - Bildschirmfotos bleiben im Scratchpad, nicht im Repository.

## 8. Dokumentieren

- `PRUEFBERICHT.md` › «Umgesetzt nach den Prüfrunden (bauende Sitzung)»: neuer Eintrag wie die bisherigen. Er enthält:
  - Datum und Auftrag mit der Antwort der Fachstelle;
  - die geänderten Dateien;
  - jede Änderung mit Wortlaut («statt …»);
  - den Satzvergleich;
  - unter «Geprüft» die Ergebnisse aus Abschnitt 7;
  - unter «Offen» die offenen Punkte.
- `PRUEFBERICHT.md` › «Offene Punkte nach Zuständigkeit»: Erledigtes als umgesetzt markieren, «Nachprüfung durch eine andere Sitzung» ergänzen.
- `PRUEFBERICHT.md` › Status: Keine Stufe auf «erledigt». S steht wieder auf «offen», weil sich Sätze geändert haben; das begründest du in einem Satz.
- Keine Exporte, Bildschirmfotos oder Arbeitsdateien committen.

## 9. Abschluss

- Branch `website/depression-angehoerige-korrektur-7` von `main`.
- Commit, dann Pull Request als **Entwurf**. In die Beschreibung gehören:
  - die umgesetzten Punkte als Liste;
  - die offenen Stufen: W1, S, Visualisierungs-Check, Bedienung, W3, R1, R2, R3;
  - die nächsten Schritte:
    - Nachprüfung durch eine Sitzung, die nicht umgesetzt hat (W1 Runde 10, S für die geänderten Sätze, Visualisierungs-Check Punkt 14, W3 für die PDF-Grössen, R1 Punkt 18, R2 für die geänderten Stellen);
    - rechtliche Prüfung (Abschnitt 4 der Entscheidungsvorlage);
    - reale Tests (Abschnitt 7 der Entscheidungsvorlage);
    - danach R3.
- Sag am Ende in wenigen Sätzen:
  - was umgesetzt ist;
  - was du nicht umgesetzt hast und warum;
  - was die Nachprüfung als Erstes ansehen soll.
