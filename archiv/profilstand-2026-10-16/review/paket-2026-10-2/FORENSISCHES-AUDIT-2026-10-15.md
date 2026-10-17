# Forensisches Audit · Profilpaket 2026.10.2 · 15.10.2026

**Erstellt am 15.10.2026 von Claude Code**, Sitzung `session_01PYpMsYf4ajA97uSPqwauwT`, im Auftrag der Fachstelle («kannst du ein forensisches Audit durchführen?»).

- **Gegenstand:** Was am 15.10.2026 mit dem Profilpaket 2026.10.2 geschah, wann, durch wen und mit welchem Ergebnis. Dazu gehört, ob Artefakt, Repository und Paket-ZIP übereinstimmen, ob etwas verloren ging oder überschrieben wurde und ob die Regeln aus `CLAUDE.md` und `ENTSCHEIDE-PROFIL-2026-10-2.md` eingehalten wurden.
- **Keine Prüfstufe:** Dieses Audit stellt Tatsachen fest. Es prüft die Nachbesserung weder fachlich noch technisch und ersetzt die Nachprüfung (Ablauf, Schritt 2b) nicht.
- **Befangenheit:** Diese Sitzung hat das Paket gebaut (#120 bis #124) und hat die Prüfsitzung gestartet. Sie hat ausserdem eine Fassung der Nachbesserung gebaut, die nicht verwendet wurde. Die Befunde zur eigenen Arbeit stehen deshalb ausdrücklich im Bericht (F-2, F-3, F-8).
- **Stand:** `main` bei `c65db24`; Artefakt «PUK Zürich Website-Profil» in Version 47 (`1792071978-1126`). Alle Zeiten in UTC.

## Ergebnis in Kürze

- **Integrität: intakt.**
  - Artefakt, Repository und Paket-ZIP stimmen überein.
  - Nichts ging verloren, nichts wurde überschrieben.
  - Die geschützten Ordner sind unverändert.
  - Es gelangten keine Telefonnummern, Zugangsdaten oder Arbeitskopien ins Repository.
- **Ablauf: zwei wichtige Abweichungen.**
  - **F-1:** Zweimal wurde zusammengeführt, bevor geprüft war: das Paket (#124) und die Nachbesserung (#126).
  - **F-2:** Zwei bauende Sitzungen arbeiteten gleichzeitig an derselben Nachbesserung.
- **Nachvollziehbarkeit:** sechs Hinweise (F-3 bis F-8). Darunter: eine widerlegte Aussage der ersten Selbstprüfung steht unkorrigiert im Repository, und unter demselben Namen gibt es zwei verschiedene Paket-ZIPs.

## Zeitleiste

| Zeit | Wer | Was | Beleg |
| --- | --- | --- | --- |
| 09:15:22 | Konto christaegger-dot | #120 zusammengeführt (Entscheide nachgeführt) | GitHub |
| 09:19:22 | Sitzung P | Artefakt Version 44 (Schritt 0) | Version-ID `1792055962-489b` |
| 09:30:28 | Konto christaegger-dot | #121 zusammengeführt (Schritt 0) | GitHub |
| 09:39:08 | Sitzung P | Artefakt Version 45 (P-16, P-17) | `1792057148-7352` |
| 09:43:52 | Konto christaegger-dot | #122 zusammengeführt (P-16, P-17) | GitHub |
| 09:53:29 | Konto christaegger-dot | #123 zusammengeführt (Entscheide P-3, P-7) | GitHub |
| 09:53:54 | Fachstelle → P | «ja, leg los»: Paket bauen | Transkript P |
| 10:16:09 | Sitzung P | Artefakt Version 46 (Paket) | `1792059369-2052` |
| 10:18:44 | Sitzung P | #124 als **Entwurf** erstellt; Text: «Solange Schritt 2 offen ist, bleibt dieser Pull Request ein Entwurf.» | GitHub, Transkript P |
| 10:25:33 | Konto christaegger-dot | #124 «bereit zur Prüfung» | GitHub-Ereignis an P |
| 10:25:36 | Konto christaegger-dot | #124 zusammengeführt (`b7989b3`), **vor der Prüfung** | GitHub |
| 10:32:42 | Fachstelle → P | «ja bitte»: Prüfsitzung starten | Transkript P |
| 10:33:33 | Sitzung P | startet Prüfsitzung B (`create_session`) | Transkript P und B |
| 10:58:05 | Sitzung B | #125 (Prüfbericht) als Entwurf erstellt | Transkript B |
| 11:16:52 | Fachstelle → B | «Einverstanden»: P-1-Abweichung nicht annehmen, K-1 beheben lassen | Transkript B |
| 11:20:57 | Konto christaegger-dot | #125 «bereit»; 11:21:05 zusammengeführt (`1047ad6`) | GitHub, Transkript B |
| 11:25:50 | Fachstelle → B | «über ein Kennzeichen» | Transkript B |
| 11:26:18 | Sitzung B | gibt den Auftrag für die bauende Sitzung aus: «Starten Sie die bauende Sitzung mit diesem Text, nicht in dieser Sitzung» | Transkript B |
| 11:30:10 | Fachstelle → A | fügt diesen Auftrag in eine **neue** Sitzung A ein (iPhone) | Transkript A (byte-gleich mit B) |
| 12:05 | Sitzung P | nach dem Check-in: berichtet das Prüfergebnis und fragt «Soll ich loslegen, oder möchten Sie dafür eine neue Sitzung starten?» | Transkript P |
| 12:17:02 | Sitzung A | Artefakt-Publish; wartet auf die Freigabe («is public. Allow Claude to change it…?») | Transkript A |
| 13:46:05 | Person (im Ereignis nicht genannt) | Freigabe für A erteilt | Transkript A |
| 13:46:18 | Sitzung A | Artefakt **Version 47** | `1792071978-1126` |
| 13:46:28 | Fachstelle → P | «Leg los»: Nachbesserung in P | Transkript P |
| 13:50:48 | Sitzung A | Push `bc679a7` | Transkript A |
| 13:51:16 | Sitzung A | #126 als **Entwurf** erstellt; Text: «Entwurf – bitte nicht zusammenführen.» | Transkript A, GitHub |
| 13:52:52 | Konto christaegger-dot | #126 «bereit» | GitHub-Ereignis an A |
| 13:53:02 | Konto christaegger-dot | #126 zusammengeführt (`c65db24`), **vor der Nachprüfung** | GitHub |
| 14:12:40 | Sitzung P | bemerkt vor dem eigenen Publish Version 47, veröffentlicht nicht, pusht nicht | Transkript P |
| 14:13:48 | Sitzung P | sichert die eigene Fassung als Patch ausserhalb des Repositorys, setzt den Branch auf `main` | Transkript P |

Sitzungen: **P** = `session_01PYpMsYf4ajA97uSPqwauwT` (Bau des Pakets, dieses Audit), **B** = `session_01BhhQoKpL3uW2gKBRtieHPy` (Prüfung, Schritt 2), **A** = `session_01FzcECZVcNBzfTTWhj2zhUq` (Nachbesserung).

## Integrität

| Prüfung | Ergebnis | Beleg |
| --- | --- | --- |
| Artefakt Version 47 gegen `main` | **Übereinstimmend:** alle 286 Dateien unter `project/` geladen; 213 gemeinsam mit dem Repository, 213 byte-gleich. Nur im Artefakt: 69 Vorschaukarten, `design-system.json`, drei Dateien unter `assets/` | vollständiger Abgleich, `cmp` je Datei |
| Artefakt Version 46 → 47 | **Genau die acht Profildateien von #126** geändert (`README.md`, `components/bundle.css`, `guidelines/00-technische-qualitaet.md`, `longform/README.md`, `erklaermuster.css`, `visual-patterns.css`, Starter-`README.md`, `tools/contract.js`) und im Index nur `lastChange`. Keine Datei hinzugefügt oder entfernt, kein anderer Indexschlüssel verändert | Vergleich mit dem Download von Version 46 (10:16) |
| Überschreiben im Artefakt | **Keins.** Version 47 baut auf Version 46 auf; die Fassung von P wurde nie veröffentlicht | Transkripte A und P |
| Paket-ZIP auf `main` | **Übereinstimmend:** 438 Dateien nach der Regel des Pakets (`git ls-files` ohne `_headers` und `index.html` im Stamm, ohne ZIP-Dateien, ohne die Ordner `borderline-angehoerige/` und `depression-angehoerige/`), 438 byte-gleich. SHA-256 `20d42bba632069a6e519806bdcb851f0c52e6baa1081384a5a04a258a4ba4902`, wie in #126 angegeben | Abgleich ZIP gegen Arbeitsbaum |
| Build und Gate (Starter, `main`) | Build reproduzierbar (keine Datei verändert), Selbsttest **72/72**, Produktionsgate 11 blockierend (erwartet: offene Freigaben der synthetischen Referenz) | `node tools/build.mjs`, `gate.mjs` |
| Geschützte Ordner | `templates/website/borderline-angehoerige/` (archiviert) und `templates/website/depression-angehoerige/`: seit `3a7ab42` **unverändert** | `git diff 3a7ab42 c65db24` |
| Umfang der Prüfsitzung | #125 ändert nur `review/paket-2026-10-2/` (43 Dateien). Kein Artefakt-Publish, kein Merge | GitHub, Transkript B |
| Inhalte ohne Platz im Repository | **Keine:** keine Telefonnummern, keine `tel:`-Links, keine Zugangsdaten, keine Pfade der Arbeitsumgebung, keine Arbeitskopie `zz-dep-test/`. Einzige E-Mail-Adresse: `angehoerigenarbeit@pukzh.ch` | Suche in allen hinzugefügten Zeilen seit `3a7ab42` |
| Inline-Skripte, `style`-Attribute | **Keine** in den geänderten Website-Seiten. `ui_kits/website/qa.html` enthält Inline-Skripte; das ist die dokumentierte Ausnahme der Prüfansicht (nur Versionsnummer geändert) | Suche in den geänderten HTML-Dateien |
| Zitate im Entscheiddokument | Alle Zitate vom 15.10.2026 stehen wörtlich in den Transkripten: «ja, einverstanden», «ja, leg los mit Schritt 0», «ja, deine Vorschläge sind gut. führe sie aus», «ja, leg los» (P); «Ausnahme festhalten» und «… – zur Startseite dieser Website» (Auswahl in P); «Einverstanden» (B) | Transkripte P und B |
| Skill «puk-website-profil» auf claude.ai | **Byte-gleich mit dem Entwurf aus P** (ausser dem Zeilenumbruch am Dateiende), spätestens um 12:05 in diese Umgebung synchronisiert | Vergleich der synchronisierten Datei |

## Wer hat zusammengeführt?

- **#124, #125 und #126** stellte jeweils das Konto `christaegger-dot` in GitHub auf «bereit zur Prüfung» und führte sie 3 bis 10 Sekunden später zusammen. Committer war jeweils «GitHub».
- **Keine Claude-Sitzung** hat einen Pull Request auf «bereit» gestellt oder zusammengeführt. In den Transkripten von P, A und B gibt es keinen Aufruf von `update_pull_request` oder `merge_pull_request`.
- A, B und P haben ihre Pull Requests als Entwurf erstellt. B und A haben in ihrer Antwort festgehalten, dass zusammengeführt wurde, bevor geprüft war.
- **Vorbehalt:** Ausgewertet sind die Transkripte von P, A und B. Dass eine weitere Sitzung unter demselben Konto gehandelt hat, schliessen sie nicht aus. Es gibt aber keinen Hinweis darauf, und das Muster passt zu Klicks in GitHub.

## Befunde

### Wichtig

**F-1 · Zusammengeführt vor der Prüfung**
- **#124 (Paket):** zusammengeführt um 10:25:36, sieben Minuten nach der Erstellung und bevor die Prüfsitzung begann (10:33). Der Pull Request selbst sagt: «Solange Schritt 2 offen ist, bleibt dieser Pull Request ein Entwurf.» `CLAUDE.md` («Kein Merge ohne Prüfbericht») gilt für neue oder geänderte Websites; das Paket ändert die Starter-Website und gilt deshalb sinngemäss.
- **#126 (Nachbesserung):** zusammengeführt um 13:53:02, 106 Sekunden nach der Erstellung und während die automatische Codex-Prüfung noch lief. Damit war der ausdrückliche Entscheid der Fachstelle im Entscheiddokument nicht eingehalten: «Danach prüft eine Sitzung, die nicht gebaut hat, die Nachbesserung; erst dann wird zusammengeführt.» Der Pull Request trug den Vermerk «Entwurf – bitte nicht zusammenführen».
- **Folge:** `main`, das Paket-ZIP und das Artefakt (die Quelle der Wahrheit) enthalten seit 13:53 eine nicht nachgeprüfte Fassung. Geschützt ist bisher nur der Schritt 3: Die Borderline-Website übernimmt das Paket erst nach der Nachprüfung.

**F-2 · Zwei bauende Sitzungen an derselben Aufgabe**
- **Ablauf:**
  - A arbeitete ab 11:30 an der Nachbesserung, mit dem Auftrag aus B.
  - P fragte um 12:04 ausdrücklich, ob P loslegen oder eine neue Sitzung starten soll. Ab 13:46 baute P dieselbe Nachbesserung.
  - Die Freigabe für den Artefakt-Publish von A wurde um 13:46:05 erteilt, das «Leg los» an P kam 23 Sekunden später.
- **Was die Sitzungen nicht taten:** Keine der beiden Sitzungen suchte nach einer anderen Sitzung, einem anderen Branch oder einer neueren Artefaktversion, bevor sie zu bauen begann.
- **Wie P es bemerkte:** P hat das Artefakt erst vor dem eigenen Publish gelesen (14:12) und dort Version 47 gefunden. Um 13:47 wäre Version 47 schon sichtbar gewesen (veröffentlicht 13:46:18).
- **Folge:** keine an Daten. P hat nichts veröffentlicht und nichts gepusht. Der Aufwand von P (rund 25 Minuten Bau und Messung) war doppelt.
- **Einordnung:** Beide Fassungen kamen unabhängig zum selben Kern: Kennzeichen im Markup und `break-before:avoid` am ersten Element. Das ist ein Hinweis auf die Tragfähigkeit der Lösung, aber keine Prüfung.

### Hinweise

**F-3 · Widerlegte Aussage der ersten Selbstprüfung steht unkorrigiert im Repository** (Sitzung P)
- `review/paket-2026-10-2/messung/README.md`, Zeile 21: «Die Marken verändern den Umbruch nicht messbar.» Diese Aussage hat der Prüfbericht widerlegt (W-1).
- `SELBSTPRUEFUNG.md` nennt für P-1 weiter «leere Seiten: 0» ohne Hinweis darauf.
- Eine Korrektur war Teil der nicht verwendeten Fassung von P und fehlt deshalb.

**F-4 · Gate geändert, Build-Kennung gleich**
- #126 ändert `tools/contract.js` (neue Prüfung `print-split`, Selbsttest 68 → 72). Die Kennung bleibt aber `r4-9`.
- Die Prüfung `build` des Gates kann deshalb eine Kopie des Starters mit dem alten Gate nicht von einer mit dem neuen unterscheiden. Bisher stieg die Kennung bei jeder Änderung an den Werkzeugen (r4-8 → r4-9).

**F-5 · Zwei verschiedene ZIPs unter demselben Namen**
- `puk-website-profil-2026.10.2.zip` gibt es in zwei Fassungen:
  - aus `de10a8d`: 313 Dateien, ohne die Nachbesserung
  - aus `bc679a7`: 438 Dateien, SHA-256 `20d42bba…`
- Das Änderungsprotokoll schreibt nur «neu erzeugt», ohne Prüfsumme. Wer die erste Fassung heruntergeladen hat, kann sie am Namen nicht von der zweiten unterscheiden.

**F-6 · Zeitstempel im Artefakt ist nicht der Zeitpunkt der Veröffentlichung**
- `lastChange.at` in Version 47 lautet 12:16:56. Veröffentlicht wurde um 13:46:18, nach 89 Minuten Warten auf die Freigabe.
- Bei Version 46 lagen die beiden Zeiten 15 Sekunden auseinander.

**F-7 · Skill und Vorschaukarten nicht nachgeführt**
- Der Skill auf claude.ai beschreibt den Druck noch wie vor der Nachbesserung: «Längere Abfolgen … dürfen zwischen Schritten umbrechen», ohne Kennzeichen. Dazu nennt er «68 Fälle».
- Die Vorschaukarten im Artefakt sind ebenfalls nicht nachgeführt (in #126 selbst als H-4 genannt).

**F-8 · Prüfsitzung von der bauenden Sitzung gestartet** (Sitzung P)
- P hat den Auftrag der Prüfsitzung B formuliert.
- Abgefedert war das so: B erhielt nur den Auftrag und sollte die Selbstprüfung ausdrücklich als Behauptung behandeln; B hat das im Prüfbericht offengelegt. B fand K-1, die Prüfung war also wirksam.
- Sauberer ist ein Auftrag im Wortlaut der Leitlinie, gestartet von der Fachstelle.

## Empfehlungen

1. **Nachprüfung (Schritt 2b) des Stands `c65db24`** durch eine Sitzung, die weder das Paket noch eine Nachbesserung gebaut hat. Bis dahin übernimmt keine Website das Paket (für Borderline so entschieden).
2. **Entwürfe bis zur Prüfung:** Vor «Ready for review» die offenen Stufen in der Beschreibung lesen. Zusätzlich kann eine Regel in GitHub (Branch-Schutz für `main`) das Zusammenführen ohne Freigabe verhindern; das entscheidet die Fachstelle.
3. **Eine bauende Sitzung je Aufgabe:** Vor dem Bau nach laufenden Sitzungen, offenen Branches und der aktuellen Artefaktversion sehen. Sitzung P macht das ab jetzt vor jedem Bau.
4. **F-3 korrigieren:** datierte Hinweise in `messung/README.md` und `SELBSTPRUEFUNG.md`, dass die Aussagen zu P-1 durch W-1 überholt sind.
5. **F-4 und F-5:** bei der nächsten Änderung an den Werkzeugen die Build-Kennung erhöhen; im Änderungsprotokoll die SHA-256 des Paket-ZIP nennen.
6. **F-7:** den Skill nach der Nachprüfung nachführen.

## Methode und Grenzen

- **Quellen:**
  - `git` des Repositorys (Commits, Merges, Diffs seit `3a7ab42`)
  - GitHub (Pull Requests #119 bis #126: Zeiten, Konto, Text)
  - vollständige Transkripte der Sitzungen A (702 Ereignisse) und B (379 Ereignisse) sowie das Transkript von P
  - Artefakt Version 47 (alle 286 Dateien unter `project/`) und der Download von Version 46
  - die synchronisierte Datei des Skills
- **Ausgeführt:**
  - Build, Selbsttest und Gate des Starters
  - Abgleich des ZIP mit dem Arbeitsbaum
  - Suche in allen seit `3a7ab42` hinzugefügten Zeilen
- **Nicht ermittelbar:**
  - wer die Freigabe in A um 13:46:05 erteilt hat (das Ereignis nennt keine Person)
  - die Zwischenstände des Artefakts zwischen den Versionen (nur Version 46 und 47 lagen als Kopie vor)
  - Handlungen in Sitzungen ausserhalb von P, A und B
- **Nicht im Repository:** Rohdaten und Transkriptauszüge. Sie bleiben in der Arbeitsumgebung, weil sie Gesprächsinhalte enthalten.
