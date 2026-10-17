# Prüfauftrag · Depression-Website · Nachprüfung der Korrektur 7 und des Nachtrags

Stand 12.10.2026. Gilt für `templates/website/depression-angehoerige/` auf `main` nach dem Merge des Nachtrags und der Ergänzung (Abschnitt 3). Für eine **Prüfsitzung**.

Die bauende Sitzung der Korrektur 7 hat diesen Auftrag auf Wunsch der Fachstelle geschrieben («Nachprüfung: schreib den konkreten Auftrag»). Er legt Umfang, Bezugsstände, Vorgehen und Form fest, keine erwarteten Ergebnisse.

## 1. Anlass

- **Korrektur 7** (PR #62, Commit `b07fffb`): Umsetzung von `KORREKTUR-PRUEFUNG-7.md` nach der Antwort der Fachstelle «alle Vorschläge: OK; Arbeitsheft: wird nich[t] angehängt.»
- **Nachtrag** (Commits nach `8f0630a`, Abschnitt 3): Entscheid der Fachstelle «Arbeitsheft: bitte löschen, dies wird nicht thematis[i]ert» und «Rechtsdienst: nicht involviert, löschen!», ergänzt um «Rechtliche Angaben auch löschen». Auf Rückfrage: W1-31 korrigieren, W1-37 auf das Gesetz kürzen, Abbildung «Mit im Boot» freigeben.
- **Stand der Freigabe:** Alle Texte und alle 11 Darstellungen sind fachlich freigegeben. Es gibt keine rechtliche Prüfung. Belege: `PRUEFBERICHT.md` › «Von der Fachstelle entschieden», zwei Einträge vom 12.10.2026.
- **Ziel:** die betroffenen Stufen nachprüfen und jede Stufe auf «erledigt» setzen, die vollständig belegt ist. Betroffen sind W1, S, Visualisierungs-Check, W3, R1 und R2, dazu der automatische Teil von «Bedienung und Barrierefreiheit».
- **Nicht Teil dieses Auftrags:**
  - die realen Tests mit Screenreader, Hardwaretastatur und Touch (`FREIGABE-ENTSCHEIDE.md`, Abschnitt 7); «Bedienung und Barrierefreiheit» bleibt deshalb offen
  - W2: Die Korrektur ändert keine Struktur. W2 bleibt erledigt, wenn 5.1, Punkt 2 keine Strukturänderung findet.
  - R3 (eigener Auftrag, zuletzt)

## 2. Wer prüft

- **Eine neue Sitzung**, die an dieser Website weder gebaut noch korrigiert hat. Ausgeschlossen ist ausdrücklich die Sitzung, die die Korrektur 7 und den Nachtrag umgesetzt und diesen Auftrag geschrieben hat.
- Empfohlen: auch nicht die siebte Prüfsitzung, weil sie die Vorschläge der Korrektur formuliert hat.
- **IDs:** Neue Befunde setzen die bestehenden Reihen fort: W1-39, S-35, V-12, BD-13, W3-13, R1-05, R2-09 usw.

## 3. Gegenstand und Bezugsstände

**Seiten (10):** `index`, `depression-verstehen`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `begleiten`, `fuer-sich-sorgen`, `rechte-und-angebote`, `impressum-datenschutz`, `404`.

**Abbildungen (11):**
- `v-dv-schichten`, `v-dv-entstehung` (`depression-verstehen`)
- `v-bv-vergleich`, `v-bv-weg`, `v-bv-fruehzeichen` (`behandlung-und-verlauf`)
- `v-is-gefaess`, `v-is-kreislauf` (`ihre-situation`)
- `v-ro-spannung` (`je-nach-rolle`)
- `v-bg-boot` (`begleiten`)
- `v-fs-netz` (`fuer-sich-sorgen`)
- `v-ra-vergleich` (`rechte-und-angebote`)

| Was | Stand | Ansehen |
| --- | --- | --- |
| vor der Korrektur | `3cc979b`; der Website-Ordner ist dort gleich wie `76dcf9b` und `72560d0`, ausser `PRUEFBERICHT.md` und `FREIGABE-ENTSCHEIDE.md` | `git show 3cc979b:templates/website/depression-angehoerige/<datei>` |
| Korrektur 7 | `b07fffb` (PR #62, gemergt als `8f0630a`) | `git show b07fffb` |
| Nachtrag | die Commits nach `8f0630a` auf diesem Ordner (PR #63 und der Folge-PR mit der Ergänzung «Rechtliche Angaben auch löschen») | `git log --oneline 8f0630a..main -- templates/website/depression-angehoerige` |
| geprüfter Stand | `main` nach Merge des Nachtrags und der Ergänzung | `git rev-parse HEAD` festhalten; Arbeitsbaum |
| Auftrag und Entscheide | `KORREKTUR-PRUEFUNG-7.md` (Wortlaut); `FREIGABE-ENTSCHEIDE.md` (Antwortzeilen unter «So antworten Sie»); `PRUEFBERICHT.md` › «Von der Fachstelle entschieden» | im Ordner |
| Selbstprüfung der bauenden Sitzung | `PRUEFBERICHT.md` › «Umgesetzt nach den Prüfrunden», zwei Einträge vom 12.10.2026; Abschnitt «Selbstprüfung der bauenden Sitzung» | im Ordner |

**Netz:** Für 5.1, Punkt 9 und 5.4, Punkt 2 hilft Internetzugang. Fehlt er, gilt dort «nicht geprüft». Keine Sperre umgehen.

## 4. Regeln

- **Nichts ändern ausser `PRUEFBERICHT.md`.** Keine Inhalte, kein Code, keine Werkzeuge. Den Bau nur in einem Git-Worktree im Scratchpad ausführen, nicht im Arbeitsbaum.
- **Je Punkt Ergebnis und Beleg:** Seite und Abschnitt, Figur, Zitat, oder Befehl mit Ausgabe. Ein Punkt ohne Beleg gilt als nicht geprüft; ein Gesamturteil ersetzt keine Einzelprüfung.
- **Zahlen nachrechnen, nicht übernehmen:** Satzvergleich, Kennzahlen nach R2, Messungen und Zählungen der bauenden Sitzung mit eigenen Skripten.
- **Selbstprüfung als Hinweis:** Die Einträge der bauenden Sitzung zeigen, was zu prüfen ist. Als Beleg gelten sie nicht.
- **Entscheide der Fachstelle gelten:** Die Prüfsitzung prüft, ob sie im Wortlaut und an allen Stellen umgesetzt sind. Hält sie einen Entscheid fachlich für problematisch, markiert sie «Prüfbedarf» und sammelt ihn unter «Fragen an die Fachstelle». Fachliche Freigaben trägt nur die Fachstelle ein.
- **Status:** Eine Stufe nur auf «erledigt» setzen, wenn alle Punkte mit Beleg geprüft sind und kein Befund offen bleibt.
  - Befunde, die die Fachstelle am 12.10.2026 mit Begründung zurückgestellt hat (Antwort 5), gelten nicht als offen, wenn die Begründung im Prüfbericht steht. Das sind W3-11, W3-01 (Hinweis), W3-12, R2-01 und R2-02 (Profil-Teil), V-08 und V-09 (Profil-Teil), V-10, R2-08, R1-01, R1-02, R1-04 und BD-08.
  - «Bedienung und Barrierefreiheit» bleibt «offen» bis zu den realen Tests.
- **Gewicht:** «wichtig» (vor der Veröffentlichung zu beheben oder zu entscheiden) oder «optional».

## 5. Was zu prüfen ist

### 5.1 W1 · Prüfrunde 10

Kriterien: «Fachliche Qualität und Haltung».

1. **Jeder Punkt im Wortlaut umgesetzt?** Beleg: Diff und Zitat aus der gebauten Seite.

   | Nr. | Punkt | Grundlage | Stellen |
   | --- | --- | --- | --- |
   | K1 | Freigabe übertragen | Auftrag 3 a bis c | `site.config.json` (`approvalStatus` der 11 Figuren, `editorialStatus`, `editorialStatusLabel`, `$comment`); Entwurfsvermerk im Kopf von 9 Seiten; Kennzeichnung unter den 11 Figuren |
   | K2 | «EKT» und «rTMS» | 4 a | `behandlung-und-verlauf` › Abb. 1 › Vertiefung |
   | K3 | NVL «Kapitel 2.7» und neuer Eintrag «Kapitel 12.1» | 4 b | `begleiten` › Quellen |
   | K4 | Obsan «Behandlung wegen psychischer Probleme» | 4 c | `depression-verstehen` › Quellen |
   | K5 | Stand-Vermerk der Angebote | 4 d | `rechte-und-angebote` › `angebote`, letzter Absatz; dazu der Satz «am Schluss steht dort auch der Stand der Angaben» auf `je-nach-rolle` › `erwachsene-kinder` |
   | K6 | Verweis im Text | 4 e | `fuer-sich-sorgen` › `grenzen` |
   | K7 | Abrufdatum | 5 a | 7 Quellenlisten |
   | K8 | PDF-Grössen | 5 b | 11 Linktexte |
   | K9 | Quellenangaben c1 bis c8 | 5 c | 6 Seiten, siehe Auftrag |
   | K10 | Plan beim Pfad | 5 d | `v-bv-weg` › `statement` |
   | N1 | Arbeitsheft gelöscht, Boot freigegeben | Nachtrag | `begleiten` › Abb. 1 (Kennzeichnung) und Quellen; `v-bg-boot` (`source`, `approvalStatus`); Fusszeile; `$comment` |
   | N2 | Rechtsvermerke und Kopfvermerke «Rechtliche Angaben» gelöscht | Nachtrag und Ergänzung | `rechte-und-angebote`: Kopf (Absatz entfällt), Kennzeichnung Abb. 1; `impressum-datenschutz`: Kopf (Absatz entfällt), «Stand: 12.10.2026» am Schluss |
   | N3 | W1-31 korrigiert | Nachtrag | `impressum-datenschutz` › Datenschutz, Eintrag «Schriften und Skripte» |
   | N4 | W1-37 auf das Gesetz gekürzt | Nachtrag | `rechte-und-angebote` › Abb. 1: Kurztext, Merkmal in beiden Spalten, Kurzbeschreibung (`p.puk-sr`); `v-ra-vergleich` › `statement` |

2. **Änderungen ausserhalb des Auftrags?** `git diff 3cc979b <geprüfter Stand> -- templates/website/depression-angehoerige` vollständig lesen. Jede Änderung einem Punkt aus 1 zuordnen. Dazu die drei eigenen Entscheide der bauenden Sitzung bewerten:
   - der Zusatz im `$comment` in Korrektur 7 (mit dem Nachtrag überholt)
   - das Datum «Stand: 12.10.2026» am Schluss von `impressum-datenschutz` (Begründung im Eintrag zum Nachtrag)
   - Hooley und Gotlib ohne Schlusspunkt nach «9(3)»
3. **Satzvergleich nachrechnen:** gebaute Seiten an `3cc979b` gegen den geprüften Stand, ganzer `body`, alle 10 Seiten.
   - Jede entfallene, geänderte und neue Einheit einem Punkt aus 1 zuordnen.
   - Gewollt entfallen nur Entwurfsvermerke, «fachliche Freigabe ausstehend», «rechtliche Prüfung ausstehend», die Kopfvermerke «Rechtliche Angaben: …», der Quelleneintrag zum Arbeitsheft und die in 1 genannten Wortlaute. Sonst darf kein Satz still entfallen.
   - Mit den Zählungen der bauenden Sitzung vergleichen (Korrektur 7: 46 / 47 Einheiten gegen `3cc979b`; Nachtrag mit Ergänzung: 24 / 20 gegen `8f0630a`).
4. **Freigaben und Reste:**
   - alle 11 `approvalStatus` «freigegeben»; `editorialStatus`, Fusszeile auf allen 10 Seiten
   - in `content/` und `site.config.json` kein «Musterentwurf», «ausstehend», «Arbeitsheft», «Wenn dein Partner», «Rechtliche Angaben» und «rechtliche Prüfung» mehr, ausser «keine rechtliche Prüfung» im `$comment`
5. **W1-31 und W1-37 fachlich:**
   - Stimmt der neue Datenschutzsatz mit dem überein, was die Website tut? Abgleich mit 5.4, Punkt 4.
   - Steht «Auskunft über den Gesundheitszustand» an allen Stellen? Passen die Werte der Spalten («im Kanton Zürich an Bezugspersonen möglich, …», «möglich, im vereinbarten Umfang») und die Quellenzeile zum PatG noch dazu?
6. **«Aufgefallen, nicht geändert»** (Eintrag Korrektur 7) je mit Ergebnis: kein Befund, Befund (mit ID) oder Prüfbedarf.
   - `v-bv-weg` › `understood` sagt weiterhin «nach der Besserung».
   - Die Quellenzeile der Schweizer Behandlungsempfehlungen auf `begleiten` nennt als Verwendung «Warnsignale und Risikofaktoren …»; laut W1-35 nennen sie keine Warnsignale im Verhalten.
7. **Zuständigkeit:**
   - kein `tel:`, keine Telefonnummer, kein Notfallblock
   - genau drei Verweise im Text (`begleiten` › `suizidgedanken`, `fuer-sich-sorgen` › `grenzen` und › `eigene-krise`), je direkt nach einer Handlungsanleitung für akute Lagen, im Wortlaut aus `responsibility.inline`
   - Zuständigkeitsverweis in der Fusszeile jeder Seite
8. **Offene W1-Punkte aller Runden** mit Status und Beleg feststellen, mindestens W1-09 Rest, W1-F-15, W1-F-21, W1-25 (Ausnahmen), W1-31, W1-35 bis W1-38 und den Stand-Vermerk. Danach W1 auf «erledigt» setzen, wenn nichts offen bleibt.
9. **Am Original (wenn Netz):**
   - die sechs neuen oder geänderten Adressen (NVL `…/version-3` und `…/kapitel-12`, ICD-11 `2026-01`, die beiden DOI, Pro Mente Sana «Rechtskurse»)
   - die Grössen der 7 PDF-Dateien

Kein Umbau: Der Vergleich von 20 Aussagen je Etappe mit dem Bestand entfällt. Verglichen werden alle geänderten Stellen.

### 5.2 S · Prüfrunde 8 (geänderte Sätze)

Kriterien: «Sprache und Ton».

- **Alle neuen und geänderten Sätze** aus 5.1, Punkt 3. Dazu gehören:
  - der Satz mit «EKT» und «rTMS» (26 Wörter, in einer Vertiefung)
  - Kopfvermerk auf `begleiten`, Stand-Vermerke, Fusszeile, Kennzeichnungen
  - Abrufdatum, Linktexte mit «(PDF, 0,3 MB)», die neuen Quellentitel (c3, c4, c7), der Eintrag zu NVL Kapitel 12.1, «Rechtskurse auf promentesana.ch»
  - Datenschutz: Überschrift und zwei Sätze
  - Rechte › Abb. 1: Kurztext und Merkmal
- **Prüfpunkte:** Schweizer Hochdeutsch, «ss», Guillemets, Länge, Verständlichkeit, Einheitlichkeit gleicher Angaben über die Seiten.
- **Abdeckung:** Die Kette `72560d0` → geprüfter Stand ohne Lücke belegen. Danach S auf «erledigt» setzen, wenn nichts offen bleibt.

### 5.3 Visualisierungs-Check · Prüfrunde 7

Kriterien: «Visuelle Wissensvermittlung», «Visualisierung umsetzen».

- **Punkt 14 je Figur (11):** `approvalStatus`, Kennzeichnung, Beleg des Entscheids der Fachstelle.
- **Geänderte Figuren:**
  - `v-bv-vergleich`: Vertiefung
  - `v-ra-vergleich`: Kurztext, Merkmal, Kurzbeschreibung, Plan, Kennzeichnung
  - `v-bg-boot`: Kennzeichnung, `source`
  - Kennzeichnung aller 11 Figuren
  - Die Matrix für diese Figuren nachführen, mindestens die Punkte 3, 10, 12, 14, 18 und 19.
- **Ansehen:** jede geänderte Figur bei 1280 und 360 px, dazu bei 200 % Schrift mit geöffneter Vertiefung (überlappende Textzeilen). Beim Boot den Freundin-Test bestätigen oder neu machen.
- Die Selbstprüfung der bauenden Sitzung (Punkte 10, 14, 18) bewerten.
- Danach den Visualisierungs-Check auf «erledigt» setzen, wenn nichts offen bleibt.

### 5.4 W3 · Prüfrunde 7 (nur Review)

Kriterien: «Technische Qualität».

1. **Bau reproduzieren** in einem Git-Worktree im Scratchpad. `node tools/build.mjs` ergibt byte-gleiche Seiten zum geprüften Stand. Dazu `node tools/gate.mjs --production` und `--selftest`. Die Ausgaben festhalten, `sitemap.xml` und `gate.html` vergleichen.
2. **PDF-Grössen (W3-10 Rest, BD-09):**
   - 11 Linktexte, Zuordnung nach Adresse
   - Schreibweise einheitlich
   - wenn Netz: Grösse am Original (Content-Length)
3. **Neue und geänderte Links:**
   - gültige Adressen, auch die DOI mit Klammern `10.1016/S0962-1849(05)80001-0`
   - gleiche Linkkonvention wie die übrigen Quellen
   - auf keiner Seite zwei gleichnamige Links mit verschiedenem Ziel
4. **Technik und Datenschutz:**
   - keine `style`-Attribute, keine Inline-Skripte, kein `tel:`
   - CSP aus `_headers` per Route: 0 Verstösse, mit Positivkontrolle
   - keine Anfragen an fremde Adressen
   - Stimmt der neue Datenschutzsatz (W1-31) mit diesen Messungen überein?
5. **Zurückgestellte Befunde** (W3-11, W3-01 Hinweis, W3-12): Steht die Begründung im Bericht?
6. Danach W3 auf «erledigt» setzen, wenn nichts offen bleibt.

### 5.5 R1 · Runde 3

Kriterien: `guidelines/00-pre-release-audits.md` › R1.

- **Punkt 18:** die drei Verweise im Text nach der Regel «Verweis im Text» (README, Profilentscheid 09.10.2026):
  - direkt nach der Handlungsanleitung
  - im Fliesstext, nicht in Figur oder Vertiefung
  - höchstens einer je Abschnitt
  - nur auf Seiten mit Selbstgefährdung, Gewalt oder akuter Krise
  - Wortlaut nur über den Platzhalter
- **R1-01, R1-02, R1-04:** Zurückstellung mit Begründung im Bericht?
- Die Absenderzeile und das statische Logo auf den 10 Seiten kurz bestätigen.
- Danach R1 auf «erledigt» setzen, wenn nichts offen bleibt.

### 5.6 R2 · Runde 3 (geänderte Stellen)

Kriterien: `guidelines/00-pre-release-audits.md` › R2.

- **Kennzahlen nachrechnen** für jede geänderte Seite (Sätze, Sätze mit Verneinung, Sätze über 25 Wörter). Die Zählartefakte, die die bauende Sitzung nennt, prüfen.
- **Lesetest der geänderten Abschnitte:**
  - `behandlung-und-verlauf` › `wege` (Vertiefung)
  - `fuer-sich-sorgen` › `grenzen`
  - `rechte-und-angebote` › `schweigepflicht` und `angebote`
  - `begleiten` › `haltung`
  - `impressum-datenschutz` › Datenschutz
- **Matrix je Figur** für `v-bv-vergleich`, `v-ra-vergleich` und `v-bg-boot`, soweit die Änderungen sie berühren.
- **R2-08:** Zurückstellung mit Begründung im Bericht?
- Danach R2 auf «erledigt» setzen, wenn nichts offen bleibt. Der Lesetest mit Angehörigen bleibt empfohlen.

### 5.7 Bedienung und Barrierefreiheit · Prüfrunde 7 (automatisch)

- **Geänderte Seiten bei 320 bis 1440 px und 200 % Schrift:** kein Überlauf, nichts abgeschnitten.
- **Tastatur:** die neuen Links mit Tab und Enter erreichen, Fokus sichtbar. Neu sind «Rechtskurse auf promentesana.ch», NVL «Kapitel 12.1» und die beiden DOI.
- **axe-core** bei 1280 und 360 px.
- **BD-09** (PDF-Grössen) bewerten.
- Die Stufe bleibt «offen» bis zu den realen Tests; BD-08 bleibt bis dahin zurückgestellt.

## 6. Ergebnis im Prüfbericht

- **Ort:** je Stufe ein neuer Block nach dem letzten der Stufe. Titel: «Prüfrunde 10 · Nachprüfung der Korrektur 7 und des Nachtrags (Datum, Stand `<sha>`)». Für die anderen Stufen sinngemäss: «Prüfrunde S 8», «Prüfrunde Visualisierungs-Check 7», «Prüfrunde W3 7», «R1 · Runde 3», «R2 · Runde 3», «Prüfrunde Bedienung 7».
- **Aufbau je Block:**
  - geprüfter Stand, Unabhängigkeit, Vorgehen
  - Ergebnis je Punkt mit Beleg
  - neue Befunde (ID, Gewicht, Beleg, Vorschlag, Zuständig)
  - Zählung
- **Statustabelle:** Status, «Datum», «Geprüft durch» und «Ergebnis» der geprüften Stufen nachführen.
- **«Offene Punkte nach Zuständigkeit»** neu fassen. Fragen an die Fachstelle gesammelt dort.
- **Commit:** nur `PRUEFBERICHT.md`, auf einem eigenen Branch. Dazu ein Entwurfs-PR gegen `main`; die Beschreibung nennt die offenen Stufen.

## 7. Danach (nicht Teil dieses Auftrags)

1. Gibt es Befunde oder Fragen: Entscheid der Fachstelle, Korrektur durch eine bauende Sitzung, erneute Nachprüfung.
2. Reale Tests nach `FREIGABE-ENTSCHEIDE.md`, Abschnitt 7; danach Bedienung abschliessen.
3. R3 durch eine Sitzung, die nichts gebaut, korrigiert oder entschieden hat (`guidelines/00-pre-release-audits.md`), mit Export und Ziel-Adresse.

## 8. Startnachricht für die Prüfsitzung

In einer neuen Sitzung im selben Repository:

```
Prüfe die Website templates/website/depression-angehoerige/ auf main nach
NACHPRUEFUNG-KORREKTUR-7.md im selben Ordner. Halte den geprüften Stand mit
git rev-parse HEAD fest. Du hast die Website nicht gebaut und weder die Korrektur 7
noch den Nachtrag umgesetzt. Lies zuerst CLAUDE.md,
guidelines/00-ablauf-pruefung-und-freigabe.md und den Auftrag ganz.
Ändere keine Inhalte und keinen Code. Committe nur PRUEFBERICHT.md auf einem
eigenen Branch und öffne einen Entwurfs-PR gegen main.
```
