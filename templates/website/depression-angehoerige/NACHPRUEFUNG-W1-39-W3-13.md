# Prüfauftrag · Depression-Website · Nachprüfung von W1-39 und W3-13

Stand 12.10.2026. Gilt für `templates/website/depression-angehoerige/` auf `main` nach dem Merge dieses Auftrags. Für eine **Prüfsitzung**.

Diesen Auftrag hat auf Wunsch der Fachstelle («schreib den auftrag für die nachprüfung») die Sitzung geschrieben, die W1-39 und W3-13 vorgeschlagen und umgesetzt hat. Er legt Umfang, Bezugsstände, Vorgehen und Form fest, aber keine erwarteten Ergebnisse.

## 1. Anlass

- **Achte Prüfsitzung** (PR #67, Commit `df9cd52`): Nachprüfung der Korrektur 7 und des Nachtrags (W1, Prüfrunde 10; S 8; Visualisierungs-Check 7; Bedienung 7; W3 7; R1 und R2, Runde 3). Sie ergab zwei neue, optionale Befunde:
  - **W1-39:** Die Quellenzeile der Schweizer Behandlungsempfehlungen auf `begleiten` nannte «Warnsignale».
  - **W3-13:** Das `README.md` des Website-Ordners nannte noch den Entwurfsstand.
- **Entscheid der Fachstelle** vom 12.10.2026: «Für W1-39 und W3-13: umsetzen».
- **Umsetzung:** Commit `c6e9e37` (PR #67, gemergt als `d819901`). Umgesetzt hat dieselbe Sitzung im Rollenwechsel als bauende Sitzung.
- **Stand der Stufen:**
  - erledigt: W2, Visualisierungs-Check, R1 und R2
  - offen: W1 (Nachprüfung W1-39; die Adressen am Original sind nicht geprüft), S (geänderte Zeile), W3 (Nachprüfung W3-13; die PDF-Grössen am Original sind nicht geprüft), Bedienung und Barrierefreiheit (reale Tests) und R3
- **Ziel:** W1-39 und W3-13 nachprüfen und W1, S und W3 auf «erledigt» setzen, wenn jede dieser Stufen vollständig belegt ist. Mit Internetzugang kommen die Prüfungen am Original dazu, die in der achten Prüfsitzung gesperrt waren (W1, Prüfrunde 10, Punkt 9; W3, Prüfrunde 7, Punkt 2).
- **Nicht Teil dieses Auftrags:**
  - die realen Tests mit Screenreader, Hardwaretastatur und Touch (`FREIGABE-ENTSCHEIDE.md`, Abschnitt 7); «Bedienung und Barrierefreiheit» bleibt offen
  - W2, Visualisierungs-Check, R1 und R2: Sie bleiben erledigt, wenn 5.1, Punkt 2 bestätigt, dass keine Figur, kein Plan und kein Text ausserhalb der Quellenliste geändert ist
  - R3 (eigener Auftrag, zuletzt)

## 2. Wer prüft

- **Eine neue Sitzung**, die an dieser Website weder gebaut noch korrigiert hat. Ausgeschlossen ist ausdrücklich die achte Prüfsitzung: Sie hat W1-39 und W3-13 vorgeschlagen, umgesetzt und diesen Auftrag geschrieben.
- **Empfohlen:** eine Umgebung mit Internetzugang zu diesen Hosts:
  - `www.leitlinien.de`, `icd.who.int`, `doi.org`, `promentesana.ch`
  - für die PDF-Dateien: `www.mhfa.com.au`, `www.psychiatrie.ch`, `www.obsan.admin.ch`, `deutschebahnstiftung.de`, `swisslife.ch`, `www.deutsche-depressionshilfe.de`, `www.bag.admin.ch`

  In der achten Prüfsitzung hat der Proxy der Umgebung diese Hosts gesperrt.
- **IDs:** Neue Befunde setzen die bestehenden Reihen fort: W1-40, S-35, W3-14, V-12, BD-13, R1-05, R2-09.

## 3. Gegenstand und Bezugsstände

**Geändert mit `c6e9e37`:** `content/begleiten.html`, `begleiten.html`, `README.md` (Website-Ordner) und `PRUEFBERICHT.md`.

| Was | Stand | Ansehen |
| --- | --- | --- |
| vor der Umsetzung | `df9cd52`; der Website-Ordner ist dort gleich wie `70bc624`, ausser `PRUEFBERICHT.md` | `git show df9cd52:templates/website/depression-angehoerige/<datei>` |
| Umsetzung | `c6e9e37` (gemergt als `d819901`) | `git show c6e9e37` |
| geprüfter Stand | `main` nach dem Merge dieses Auftrags | `git rev-parse HEAD` festhalten; Arbeitsbaum |
| Befunde | `PRUEFBERICHT.md` › W1 › «Neue Befunde W1, Runde 10» (W1-39); W3 › «Neue Befunde W3, Runde 7» (W3-13) | im Ordner |
| Entscheid | `PRUEFBERICHT.md` › «Von der Fachstelle entschieden», Eintrag «W1-39 und W3-13 (nach der achten Prüfsitzung)» | im Ordner |
| Selbstprüfung der bauenden Sitzung | `PRUEFBERICHT.md` › «Umgesetzt nach den Prüfrunden», Eintrag «W1-39 und W3-13 umgesetzt» | im Ordner |
| Prüfung am Original, offen | W1, Prüfrunde 10, Punkt 9 (sechs Adressen); W3, Prüfrunde 7, Punkt 2 (7 PDF-Grössen); Adressen und Grössen in W1, Prüfrunde 10, K8 und K9 | im Ordner |

**Netz:** Für 5.1, Punkt 5 und 5.3, Punkt 4 brauchst du Internetzugang. Fehlt er, gilt dort «nicht geprüft». Keine Sperre umgehen.

## 4. Regeln

- **Nichts ändern ausser `PRUEFBERICHT.md`.** Keine Inhalte, kein Code, keine Werkzeuge. Den Bau führst du nur in einem Git-Worktree im Scratchpad aus, nicht im Arbeitsbaum.
- **Je Punkt Ergebnis und Beleg:** Seite und Abschnitt, Zitat oder Befehl mit Ausgabe. Ein Punkt ohne Beleg gilt als nicht geprüft.
- **Zahlen nachrechnen, nicht übernehmen:** Satzvergleich und Kennzahlen mit eigenen Skripten.
- **Selbstprüfung nur als Hinweis:** Der Eintrag der bauenden Sitzung zeigt, was zu prüfen ist. Als Beleg gilt er nicht.
- **Entscheide der Fachstelle gelten.** Du prüfst, ob sie im Wortlaut umgesetzt sind. Hältst du einen Entscheid fachlich für problematisch, markierst du ihn als «Prüfbedarf» und sammelst ihn unter «Fragen an die Fachstelle».
- **Status:** Eine Stufe setzt du nur auf «erledigt», wenn alle Punkte mit Beleg geprüft sind und kein Befund offen bleibt.
  - Diese Befunde hat die Fachstelle am 12.10.2026 mit Begründung zurückgestellt; sie gelten nicht als offen: W3-11, W3-01 (Hinweis), W3-12, R2-01 und R2-02 (Profil-Teil), V-08 und V-09 (Profil-Teil), V-10, R2-08, R1-01, R1-02, R1-04 und BD-08.
  - Bleibt eine Prüfung am Original «nicht geprüft», bleibt die Stufe offen. Du nennst den Punkt dann unter «Offene Punkte nach Zuständigkeit» für R3 (Punkt 13).
- **Gewicht** jedes neuen Befunds: «wichtig» (vor der Veröffentlichung zu beheben oder zu entscheiden) oder «optional».

## 5. Was zu prüfen ist

### 5.1 W1 · Prüfrunde 11

Kriterien: «Fachliche Qualität und Haltung».

1. **W1-39 im Wortlaut?** Prüfe `content/begleiten.html` und die gebaute Seite `begleiten` › Quellen, Eintrag der Schweizer Behandlungsempfehlungen. Erwartet ist der Wortlaut aus dem Befund: «Verwendung: Risikofaktoren, gefährliche Mittel sichern.» Linktext, Adresse und Grösse «(PDF, 1,5 MB)» bleiben unverändert, ebenso der Text im Abschnitt `suizidgedanken`. Beleg: Diff und Zitat.
2. **Änderungen ausserhalb des Auftrags?** Lies `git diff df9cd52 <geprüfter Stand> -- templates/website/depression-angehoerige` vollständig und ordne jede Änderung W1-39, W3-13 oder den Berichts- und Auftragsdateien zu.
   - Bestätige, dass `site.config.json`, der Plan, die Figuren, Abschnitte, Überschriften und Navigation unverändert sind und dass sich von den gebauten Seiten nur `begleiten.html` ändert. Damit bleiben W2, Visualisierungs-Check, R1 und R2 erledigt.
3. **Satzvergleich nachrechnen:** gebaute Seiten an `df9cd52` gegen den geprüften Stand, ganzer `body`, alle 10 Seiten. Zählweise wie in W1, Prüfrunde 10, Grundlage.
   - Jede entfallene, geänderte oder neue Einheit einem Punkt zuordnen. Gewollt entfallen ist nur «Warnsignale und» in der «Verwendung».
   - Mit der Zählung der bauenden Sitzung vergleichen: 1 / 1, nur `begleiten`.
4. **W1-39 fachlich:**
   - Belegt die Quellenliste von `begleiten` die Warnsignale und Handlungshinweise im Abschnitt `suizidgedanken` weiterhin? Massgebend sind die Zeile zu NVL Kapitel 12.1 und die Bestätigung der Fachstelle für «Wertvolles verschenken» und «eine plötzliche, unerklärliche Ruhe» (Antwort 1 e).
   - Wenn Netz: Stimmt «Risikofaktoren, gefährliche Mittel sichern» mit SGPP Teil 1, S. 7 überein?
5. **Am Original (wenn Netz):** die sechs Adressen aus W1, Prüfrunde 10, Punkt 9 abrufen:
   - `https://www.leitlinien.de/themen/depression/version-3`
   - `https://www.leitlinien.de/themen/depression/version-3/kapitel-12`
   - `https://icd.who.int/browse/2026-01/mms/en`
   - `https://doi.org/10.35190/d2021.4.5`
   - `https://doi.org/10.1016/S0962-1849(05)80001-0`
   - `https://promentesana.ch/angebote/weiterbildung/rechtskurse`

   Je Adresse festhalten: Antwort, Endadresse und ob das Ziel zu Linktext und Satz passt.
6. **Offene W1-Punkte:** Status und Beleg für W1-39 und Punkt 5. Danach W1 auf «erledigt» setzen, wenn nichts offen bleibt.

### 5.2 S · Prüfrunde 9 (geänderte Zeile)

Kriterien: «Sprache und Ton».

- **Die geänderte Zeile:** «Verwendung: Risikofaktoren, gefährliche Mittel sichern.» Prüfpunkte:
  - Schweizer Hochdeutsch, «ss», Guillemets
  - Einheitlichkeit mit den übrigen «Verwendung»-Zeilen derselben Quellenliste, z. B. NVL Kapitel 12.1 «Abschiedsvorbereitungen, Beschaffen von Mitteln, gefährliche Mittel sichern.»
  - Verständlichkeit
- **Abdeckung:** S, Prüfrunde 8 deckt `72560d0` → `70bc624`. Belege die Kette `70bc624` → geprüfter Stand ohne Lücke; der Website-Ordner an `df9cd52` ist gleich wie an `70bc624`, ausser dem Bericht. Danach S auf «erledigt» setzen, wenn nichts offen bleibt.

### 5.3 W3 · Prüfrunde 8 (nur Review)

Kriterien: «Technische Qualität».

1. **Bau reproduzieren** in einem Git-Worktree im Scratchpad:
   - `node tools/build.mjs` ergibt Seiten, die byte-gleich mit dem geprüften Stand sind.
   - Dazu `node tools/gate.mjs --production` und `--selftest`; die Ausgaben festhalten.
   - `sitemap.xml` und `gate.html` mit `df9cd52` vergleichen.
2. **W3-13:** `README.md` des Website-Ordners im Wortlaut des Befunds:
   - Zeile 3: «… Website-Profils 2026.10 (Build r4-8).»
   - Zeile 7: «**Stand:** fachlich freigegeben am 12.10.2026 (Fachstelle Angehörigenarbeit PUK). Prüfstufen, offene Punkte und Selbstprüfung: `PRUEFBERICHT.md`.»

   Prüfe ausserdem: Der Rest des README ist unverändert, die Angaben stimmen mit `assetVersion` (`r4-8`), Bauausgabe und Fusszeile überein, und die Datei wird nicht exportiert (`tools/export.mjs`).
3. **Technik auf der geänderten Seite `begleiten`:**
   - keine `style`-Attribute, keine Inline-Skripte, kein `tel:`
   - CSP aus `_headers` per Route: 0 Verstösse, mit Positivkontrolle
   - keine Anfragen an fremde Adressen
   - auf der Seite keine zwei gleichnamigen Links mit verschiedenem Ziel
4. **PDF-Grössen am Original (wenn Netz):** `Content-Length` der 7 PDF-Dateien aus W1, Prüfrunde 10, K8. Mit den Linktexten vergleichen; 1 MB = 1 000 000 Byte, gerundet auf eine Nachkommastelle wie in W1, Prüfrunde 9.
5. **Zurückgestellte Befunde** (W3-11, W3-01 Hinweis, W3-12): Steht die Begründung weiterhin im Bericht?
6. Danach W3 auf «erledigt» setzen, wenn nichts offen bleibt.

### 5.4 Kurz bestätigen (ohne neue Prüfrunde)

- **Visualisierungs-Check, R1, R2:** keine Figur, kein Plan, kein Verweis im Text und kein Abschnitt ausserhalb der Quellenliste geändert (5.1, Punkt 2). R2-Kennzahlen von `begleiten` unverändert; die Quellenliste zählt nicht. Bauende Sitzung: 55 Sätze, 15 mit Verneinung, 1 über 25 Wörter.
- **Bedienung und Barrierefreiheit:** bleibt offen bis zu den realen Tests.

## 6. Ergebnis im Prüfbericht

- **Ort und Titel:** je Stufe ein neuer Block nach dem letzten der Stufe:
  - «Prüfrunde 11 · Nachprüfung von W1-39 (Datum, Stand `<sha>`)»
  - «Prüfrunde S 9 · …»
  - «Prüfrunde W3 8 · …»

  Die Bestätigung aus 5.4 steht in W1, Prüfrunde 11, Punkt 2; dafür ist kein eigener Block nötig.
- **Aufbau je Block:**
  - geprüfter Stand, Unabhängigkeit, Vorgehen, Netzzugang
  - Ergebnis je Punkt mit Beleg
  - neue Befunde (ID, Gewicht, Beleg, Vorschlag, Zuständig)
  - Zählung
- **Statustabelle:** Status, «Datum», «Geprüft durch» und «Ergebnis» für W1, S und W3 nachführen.
- **«Offene Punkte nach Zuständigkeit»** neu fassen und die Fragen an die Fachstelle dort sammeln.
- **Commit:** nur `PRUEFBERICHT.md`, auf einem eigenen Branch. Dazu ein Entwurfs-PR gegen `main`, dessen Beschreibung die offenen Stufen nennt.

## 7. Danach (nicht Teil dieses Auftrags)

1. Bei Befunden oder Fragen: Entscheid der Fachstelle, Korrektur durch eine bauende Sitzung, erneute Nachprüfung.
2. Reale Tests nach `FREIGABE-ENTSCHEIDE.md`, Abschnitt 7; danach Bedienung abschliessen.
3. R3 durch eine Sitzung, die nichts gebaut, korrigiert oder entschieden hat (`guidelines/00-pre-release-audits.md`), mit Export und Ziel-Adresse. Blieb die Prüfung am Original offen, gehört sie in R3, Punkt 13.

## 8. Startnachricht für die Prüfsitzung

In einer neuen Sitzung im selben Repository, wenn möglich mit Internetzugang (Abschnitt 2):

```
Prüfe die Website templates/website/depression-angehoerige/ auf main nach
NACHPRUEFUNG-W1-39-W3-13.md im selben Ordner. Halte den geprüften Stand mit
git rev-parse HEAD fest. Du hast die Website nicht gebaut, nichts daran korrigiert
und W1-39 und W3-13 weder vorgeschlagen noch umgesetzt. Lies zuerst CLAUDE.md,
guidelines/00-ablauf-pruefung-und-freigabe.md und den Auftrag ganz.
Ändere keine Inhalte und keinen Code. Committe nur PRUEFBERICHT.md auf einem
eigenen Branch und öffne einen Entwurfs-PR gegen main.
```
