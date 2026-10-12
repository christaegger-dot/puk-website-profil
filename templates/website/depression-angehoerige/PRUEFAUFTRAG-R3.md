# Prüfauftrag · Depression-Website · R3 Freigabe-Audit mit Prüfung am Original

Stand 12.10.2026. Gilt für `templates/website/depression-angehoerige/` auf `main` nach dem Merge von #71. Für eine **Prüfsitzung mit Internetzugang**.

Diesen Auftrag hat auf Wunsch der Fachstelle («Schreib den Auftrag: … in R3 (Punkt 13) nachholen, in einer Umgebung mit Internetzugang») die neunte Prüfsitzung geschrieben. Er legt Umfang, Bezugsstände, Vorgehen und Form fest, aber keine erwarteten Ergebnisse.

## 1. Anlass

- **Stand der Stufen** (`PRUEFBERICHT.md` › Status, nach der neunten Prüfsitzung):
  - erledigt: W2, S, Visualisierungs-Check, R1, R2
  - offen ohne offenen Befund: W1 und W3. Es fehlt nur die Prüfung am Original; der Proxy der Umgebung hat sie in der achten und neunten Prüfsitzung gesperrt (W1, Prüfrunde 10, Punkt 9 und Prüfrunde 11, Punkte 4 und 5; W3, Prüfrunde 7, Punkt 2 und Prüfrunde 8, Punkt 4)
  - offen: Bedienung und Barrierefreiheit (reale Tests mit Menschen) und R3
- **R3, Punkt 13** verlangt ohnehin, dass alle externen Links erreichbar sind und auf offizielle Quellen führen. Die siebte Prüfsitzung hat am 12.10.2026 die damals 70 Adressen geprüft (W1, Prüfrunde 9, Teil 2); seither sind Adressen neu oder geändert. Die offene Prüfung am Original gehört deshalb in R3, Punkt 13.
- **Ziel:** in drei Teilen, je sobald die Voraussetzung erfüllt ist:
  - **Teil A** · Prüfung am Original (R3, Punkt 13); danach W1 und W3 abschliessen. Braucht nur Internetzugang.
  - **Teil B** · Ergebnisblätter der realen Tests eintragen; danach Bedienung abschliessen. Braucht die Blätter der Testpersonen (`FREIGABE-ENTSCHEIDE.md`, Abschnitt 7 e).
  - **Teil C** · R3 Freigabe-Audit mit «Go», «Go mit Auflagen» oder «No-Go». Braucht W1, W3 und Bedienung auf «erledigt».

  Was eine Sitzung nicht machen kann, bleibt für eine spätere Sitzung mit demselben Auftrag.
- **Nicht Teil dieses Auftrags:** Korrekturen, Entscheide der Fachstelle, die Tests selbst, die Veröffentlichung, Einstellungen bei Netlify.

## 2. Wer prüft

- **Eine neue Sitzung**, die an dieser Website nichts gebaut, korrigiert oder entschieden hat (`guidelines/00-pre-release-audits.md`, R3). Ausgeschlossen sind auch die neunte Prüfsitzung, die diesen Auftrag geschrieben hat, und die achte Prüfsitzung, die W1-39 und W3-13 im Rollenwechsel umgesetzt hat.
- **Internetzugang ist Voraussetzung für Teil A und Teil C.** Zuerst prüfen, z. B. `curl -sI https://www.leitlinien.de/` und `curl -sI https://doi.org/`, und das Ergebnis mit Uhrzeit festhalten.
  - Gebraucht werden die 20 Hosts der Links: `www.leitlinien.de`, `icd.who.int`, `doi.org`, `promentesana.ch`, `stand-by-you.ch`, `swisslife.ch`, `deutschebahnstiftung.de`, `www.bag.admin.ch`, `www.depressionen.ch`, `www.deutsche-depressionshilfe.de`, `www.fedlex.admin.ch`, `www.kinderseele.ch`, `www.mhfa.com.au`, `www.obsan.admin.ch`, `www.psychiatrie.ch`, `www.pukzh.ch`, `www.selbsthilfezuerich.ch`, `www.vaskzuerich.ch`, `www.wie-gehts-dir.ch`, `www.zh.ch`.
  - Dazu `api.crossref.org` (Metadaten der DOI) und `*.netlify.app` (Vorschau, Ziel-Adresse).
  - Die 46 DOI-Links leiten auf die Seiten der Verlage weiter; deren Hosts lassen sich nicht vorab aufzählen. Einfacher ist deshalb für diese Sitzung ein freier Internetzugang (Einstellungen der Umgebung › Network access).
- **Keine Sperre umgehen.** Was gesperrt bleibt, gilt als «nicht geprüft», in R3 als «nicht erfüllt» oder «nicht prüfbar».
- **IDs:** Neue Befunde setzen die Reihen fort: W1-40, W3-14, BD-13, Fragen an die Fachstelle W1-F-22. R3-Befunde beginnen mit R3-01.

## 3. Gegenstand und Bezugsstände

| Was | Stand oder Ort | Ansehen |
| --- | --- | --- |
| geprüfter Stand | `main` beim Start; die Website ist seit `c6e9e37` (W1-39, W3-13) unverändert, danach nur Bericht und Aufträge | `git rev-parse HEAD` festhalten; `git log c6e9e37..HEAD -- templates/website/depression-angehoerige` |
| externe Links | laut neunter Prüfsitzung 83 Links, 73 eindeutige Adressen, 20 Hosts, davon 46 DOI-Links; 15 × `mailto:angehoerigenarbeit@pukzh.ch` (nachzählen, nicht übernehmen) | gebaute Seiten |
| letzte Prüfung aller Links | W1, Prüfrunde 9, Teil 2 (siebte Prüfsitzung, 12.10.2026; Vorgehen dort beschrieben) | `PRUEFBERICHT.md` |
| offene Prüfungen am Original | W1, Prüfrunde 11, Punkte 4 und 5 und «Offen in W1 nach Runde 11»; W3, Prüfrunde 8, Punkt 4 | `PRUEFBERICHT.md` |
| zurückgestellte Befunde | «Von der Fachstelle entschieden», Eintrag 12.10.2026 zur Entscheidungsvorlage, Antwort 5; «Offene Punkte nach Zuständigkeit» › Profil | `PRUEFBERICHT.md` |
| Protokolle der realen Tests | «Bedienung und Barrierefreiheit» › «Protokoll reale Screenreader-Läufe (offen)» und «Protokoll Hardwaretastatur und Touch (offen)»; Anleitung für die Testpersonen `FREIGABE-ENTSCHEIDE.md`, Abschnitt 7 | im Ordner |
| Vorschau | `https://puk-website-profil.netlify.app/templates/website/depression-angehoerige/` (Stand `main`; das ganze Repository mit `X-Robots-Tag: noindex, nofollow` aus `_headers` im Stamm) | Browser |
| Ziel-Adresse | `https://depression-angehoerige.netlify.app` (`site.config.json` › `siteUrl`); am 12.10.2026 um 21.30 UTC Antwort 404, noch nicht veröffentlicht | Browser |
| R3-Auftrag | `guidelines/00-pre-release-audits.md` › «R3 · Freigabe-Audit: Go oder No-Go», unverändert; Kontext in Abschnitt 7 | im Repository |

## 4. Regeln

- **Nichts ändern ausser `PRUEFBERICHT.md`.** Keine Inhalte, kein Code, keine Werkzeuge. Bau und Export nur in einem Git-Worktree im Scratchpad, Export in einen Ordner ausserhalb des Repositorys. Nichts veröffentlichen, keinen PR mergen, keine Einstellung bei Netlify ändern, keine E-Mail senden.
- **Je Punkt Ergebnis und Beleg:** Seite und Abschnitt, Zitat, Befehl mit Ausgabe, Seitenzahl im Original. In R3 gilt ein Punkt ohne Beleg als nicht erfüllt.
- **Zahlen nachrechnen, nicht übernehmen:** Links, Grössen, Zählungen mit eigenen Skripten.
- **Frühere Prüfrunden und Selbstprüfungen** zeigen, was zu prüfen ist. Als Beleg gelten sie nicht.
- **Entscheide der Fachstelle gelten.** Fachliche Fragen als «Prüfbedarf» markieren und unter «Fragen an die Fachstelle» sammeln. Fachliche Freigaben erteilt die Prüfsitzung nicht; sie prüft nur, ob sie dokumentiert sind.
- **Zurückgestellt mit Begründung** (Fachstelle, 12.10.2026); diese Befunde gelten nicht als offen: W3-11, W3-01 (Hinweis), W3-12 (bis R3, Punkt 21), R2-01 und R2-02 (Profil-Teil), V-08 und V-09 (Profil-Teil), V-10, R2-08, R1-01, R1-02, R1-04, BD-08 (bis nach den realen Läufen).
- **Status:** Eine Stufe nur auf «erledigt» setzen, wenn alle Punkte mit Beleg geprüft sind und kein Befund und keine Frage offen bleibt. R3 steht nur bei «Go» auf «erledigt».
- **Gewicht:** In W1, W3 und Bedienung «wichtig» (vor der Veröffentlichung zu beheben oder zu entscheiden) oder «optional»; in R3 «kritisch», «wichtig» oder «optional» wie im R3-Auftrag.

## 5. Teil A · Prüfung am Original (R3, Punkt 13; schliesst W1 und W3)

### 5.1 Alle externen Adressen

1. Alle Links der 10 gebauten Seiten per Skript auslesen: Seite, Abschnitt, Linktext, Adresse, Text der «Verwendung».
2. Je eindeutige Adresse festhalten: Antwort, Endadresse nach Weiterleitungen, und ob das Ziel zu Linktext und «Verwendung» passt (Herausgeber, Titel, Jahr, Kapitel) und eine offizielle Quelle ist.
   - **DOI:** Auflösung über `doi.org` und Metadaten über `api.crossref.org/works/<DOI>` (Autoren, Jahr, Titel, Zeitschrift, Band und Heft).
   - **Seiten, die ihren Inhalt per Skript laden** (z. B. ICD-11-Browser, Fedlex): mit Chromium ohne Kopf.
   - **Bot-Schutz** als solchen festhalten; bei DOI genügt dann Crossref, sonst «nicht prüfbar».
3. Mit W1, Prüfrunde 9, Teil 2 vergleichen: Was ist neu, geändert, nicht mehr erreichbar?
4. **E-Mail:** `angehoerigenarbeit@pukzh.ch` auf allen Seiten gleich, in `mailto:` und im sichtbaren Text, und gleich wie `site.config.json` › `email`. Keine Testmail senden.

### 5.2 Die sechs neuen oder geänderten Adressen (W1)

| Adresse | Seite › Abschnitt | Angabe auf der Seite |
| --- | --- | --- |
| `https://www.leitlinien.de/themen/depression/version-3` | `behandlung-und-verlauf` › Quellen | «Nationale VersorgungsLeitlinie Unipolare Depression, Version 3.2, Kapitel 1.4 (Verlauf), 3 bis 6 (Behandlung, Erhaltungstherapie)» |
| `https://www.leitlinien.de/themen/depression/version-3/kapitel-12` | `begleiten` › Quellen | «… Version 3.2, Kapitel 12.1 … Verwendung: Abschiedsvorbereitungen, Beschaffen von Mitteln, gefährliche Mittel sichern.» |
| `https://icd.who.int/browse/2026-01/mms/en` | `depression-verstehen` › Quellen | «WHO: ICD-11 for Mortality and Morbidity Statistics, Depressive Störungen (6A70–6A7Z), anhaltende Trauerstörung (6B42), Burnout (QD85)» |
| `https://doi.org/10.35190/d2021.4.5` | `je-nach-rolle` › Quellen | «Albermann K, Müller B (2021): Kinder und Jugendliche aus Familien mit einem psychisch erkrankten Elternteil. Paediatrica 32(4)» |
| `https://doi.org/10.1016/S0962-1849(05)80001-0` | `ihre-situation` › Quellen | «Hooley JM, Gotlib IH (2000): A diathesis-stress conceptualization of expressed emotion and clinical outcome. Applied and Preventive Psychology 9(3)» |
| `https://promentesana.ch/angebote/weiterbildung/rechtskurse` | `rechte-und-angebote` › `angebote` | «Kurse zu den Rechten von Angehörigen.» · Link «Rechtskurse auf promentesana.ch» |

Je Adresse: Antwort, Endadresse, und ob das Ziel die Angabe auf der Seite trägt (bei der ICD-11 die drei Codes in der Fassung 2026-01; bei Pro Mente Sana Kurse zu den Rechten von Angehörigen).

### 5.3 Zwei Fundstellen (W1)

1. **Schweizer Behandlungsempfehlungen, Teil 1, S. 7** (PDF auf `www.psychiatrie.ch`) gegen `begleiten` › Quellen «Verwendung: Risikofaktoren, gefährliche Mittel sichern.» Seitenzahl nach dem gedruckten Seitenzähler, sonst PDF-Seite; kurzes wörtliches Zitat.
2. **NVL Kapitel 12** (Kapitel 12.1): Stehen die Warnsignale «Äusserungen über den Tod, über Sinnlosigkeit oder darüber, anderen nur eine Last zu sein» und «starker Rückzug, mehr Alkohol oder Drogen» (`begleiten` › `suizidgedanken`) dort oder in einer anderen Quelle der Liste von `begleiten`?
   - Wenn ja: Fundstelle mit Zitat.
   - Wenn nein: Prüfbedarf an die Fachstelle (W1-F-22): als Fachwissen bestätigen wie in 1 e oder eine Quelle nennen. Nicht streichen empfehlen; der Abschnitt ist sicherheitsrelevant.

### 5.4 Grössen der 7 PDF-Dateien (W3)

| Datei (Host) | Linktext | Seiten |
| --- | --- | --- |
| Schweizer Behandlungsempfehlungen, Teil 1 (`www.psychiatrie.ch`) | 1,5 MB | `depression-verstehen`, `behandlung-und-verlauf`, `begleiten` |
| Obsan Bulletin 11/2024: Psychische Gesundheit, Kennzahlen 2022 (`www.obsan.admin.ch`) | 3,5 MB | `depression-verstehen` |
| Deutschland-Barometer Depression 2024, Pressemitteilung (`deutschebahnstiftung.de`) | 0,2 MB | `ihre-situation` |
| Stand by You Studie (`swisslife.ch`) | 3,8 MB | `ihre-situation`, `je-nach-rolle` |
| Deutschland-Barometer Depression 2018, Grafikband (`www.deutsche-depressionshilfe.de`) | 0,9 MB | `je-nach-rolle` |
| Mental Health First Aid Australia: Depression Guidelines (`www.mhfa.com.au`) | 0,3 MB | `begleiten`, `fuer-sich-sorgen` |
| BAG: Angehörige von suizidgefährdeten Personen unterstützen (`www.bag.admin.ch`) | 1,0 MB | `rechte-und-angebote` |

Je Datei: `Content-Length` (fehlt sie, die Datei laden und die Bytes zählen); 1 MB = 1 000 000 Byte, gerundet auf eine Nachkommastelle wie in W1, Prüfrunde 9. Die Adressen stehen in den gebauten Seiten.

### 5.5 W1 und W3 abschliessen

- **W1** auf «erledigt», wenn 5.2 und 5.3 und die W1-Anteile von 5.1 (Ziele passen zu Linktext und Satz) ohne offenen Befund und ohne offene Frage sind.
- **W3** auf «erledigt», wenn 5.4 ohne offenen Befund ist.
- Sonst bleibt die Stufe offen; der Befund geht an die Fachstelle (Entscheid) und danach an eine bauende Sitzung.

## 6. Teil B · Ergebnisse der realen Tests (schliesst Bedienung)

**Voraussetzung:** Die Fachstelle gibt der Sitzung die Ergebnisblätter (`FREIGABE-ENTSCHEIDE.md`, Abschnitt 7 e), z. B. als Datei oder Text in der Startnachricht. Fehlen sie, entfällt Teil B.

1. **Eintragen,** Fall für Fall und ohne Umdeutung: Screenreader unter «Protokoll reale Screenreader-Läufe (offen)» (Spalten VO, NV, VO-iOS), Tastatur und Touch unter «Protokoll Hardwaretastatur und Touch (offen)». Kopfangaben je Umgebung (Gerät, System, Screenreader, Browser, Version, Datum, Person oder Kürzel). «nicht geprüft» bleibt «nicht geprüft».
2. **Mindestumfang:** zwei Screenreader-Läufe (z. B. VoiceOver und NVDA), ein Durchgang mit Hardwaretastatur, einer auf einem Touch-Gerät.
3. **Befunde:** Jeder Fall «nicht bestanden» wird ein Befund BD-13 ff. mit Gewicht und Beleg. Was die Testpersonen zu BD-08 (Schritte VO-3 und NV-3), zum Kreislauf (BD-12) und zu Wortumbrüchen bei grosser Schrift beobachten, für die Fachstelle festhalten.
4. **Bedienung und Barrierefreiheit** auf «erledigt», wenn der Mindestumfang erfüllt ist und kein wichtiger Befund offen bleibt. BD-08 bleibt nach dem Entscheid vom 12.10.2026 zurückgestellt; braucht es nach den Läufen einen Entscheid, unter «Fragen an die Fachstelle».

## 7. Teil C · R3 Freigabe-Audit

**Voraussetzung:** W1, W3 und Bedienung stehen auf «erledigt». Sonst entfällt Teil C, und R3 bleibt «offen» mit einem kurzen Vermerk, was fehlt. Nur wenn die Fachstelle es ausdrücklich verlangt, läuft R3 trotzdem; das Ergebnis ist dann «No-Go».

**Vorbereitung durch die Fachstelle:** Die Punkte 17 und 21 brauchen die Ziel-Adresse. Sie war am 12.10.2026 noch nicht veröffentlicht, und das Produktionsgate lässt den Export mit `--production` erst nach R3 «Go» zu. Empfehlung: Vor Teil C stellt die Fachstelle den Export (Entwurf, `node tools/export.mjs <ordner>`) im Netlify-Projekt der Ziel-Adresse als Entwurfs-Deploy bereit, unter einer eigenen Adresse, nicht als Produktion. Dann prüft R3 die Punkte 17 und 21 dort; nach «Go» und Veröffentlichung bestätigt eine kurze Prüfung sie auf der Ziel-Adresse (`FREIGABE-ENTSCHEIDE.md`, Abschnitt 6, Schritt 7). Ohne diese Vorbereitung gelten die Punkte als «nicht prüfbar».

**Auftrag:** den R3-Auftrag aus `guidelines/00-pre-release-audits.md` unverändert ausführen, mit diesem Kontext:

```
- Website: templates/website/depression-angehoerige/   Branch: main   Stand (Commit): <git rev-parse HEAD>
- Vorschau: https://puk-website-profil.netlify.app/templates/website/depression-angehoerige/
  (Entwurfs-Deploy des Exports, falls bereitgestellt: <Adresse>)
- Ziel-Adresse nach Veröffentlichung: https://depression-angehoerige.netlify.app
```

**Hinweise zu einzelnen Punkten** (Fundorte, keine erwarteten Ergebnisse):

- **3 · Prüftiefe:** Die Website ist kein Umbau; den Abgleich von 20 Aussagen je Etappe haben die Prüfrunden deshalb nicht verlangt (z. B. W1, Prüfrunde 10, Grundlage). Zweite, unabhängige Prüfungen: W1, Prüfrunde 4 und 9; Nachtrag W1-F-19 (Codex).
- **7 · Zuständigkeit:** `site.config.json` › `responsibility` und `responsibility.inline`; Standardwortlaut im `README.md` im Stamm.
- **8 · Prüfdatum:** Fusszeile «Fachlich freigegeben am 12.10.2026 …». Liegt die geplante Veröffentlichung später als «Angaben zu den Angeboten: Stand 12.10.2026.» (`rechte-und-angebote` › `angebote`), ist zu prüfen, ob die Angebote nachgeprüft und das Datum nachgeführt sind (Offene Punkte › «Vor der Veröffentlichung»).
- **11 · Produktionsgate:** Vor dem Eintrag von R3 meldet es `review-report` mit der offenen Zeile «R3 Freigabe-Audit». Deshalb zweimal festhalten: vor dem Eintrag (welche Stufen `review-report` nennt) und, bei «Go», mit dem nachgeführten Bericht im Worktree.
- **13 · Links:** Ergebnis aus Teil A. Liegt Teil A nicht am selben Tag, den Abruf aller Adressen (5.1, Schritt 2) am Tag von Teil C wiederholen; die inhaltlichen Abgleiche aus Teil A gelten weiter, wenn die Adressen gleich sind.
- **17 · Indexierung:** Die Vorschau trägt `X-Robots-Tag: noindex, nofollow` (`_headers` im Stamm); `_headers` des Exports und die Seiten selbst dürfen die Ziel-Adresse nicht sperren.
- **19 · Export:** Im Exportordner keine Arbeitsdateien, z. B. `PRUEFBERICHT.md`, `FREIGABE-ENTSCHEIDE.md`, `KORREKTUR-*.md`, `NACHPRUEFUNG-*.md`, `PRUEFAUFTRAG-R3.md`, `README.md`, `content/`, `tools/`, `gate.html`, `site.config.json`.
- **21 · Ziel-Adresse:** Hier wird W3-12 entschieden (kanonische Links und Sitemap mit `.html` gegenüber den Umschreibungen von Netlify).

## 8. Ergebnis im Prüfbericht

- **Teil A:**
  - W1 › neuer Block nach dem letzten der Stufe: «Prüfrunde 12 · Prüfung am Original (Datum, Stand `<sha>`)» mit 5.1 bis 5.3; die Tabelle aller Adressen steht hier.
  - W3 › «Prüfrunde W3 9 · PDF-Grössen am Original (…)» mit 5.4.
- **Teil B:** die Protokolle ausfüllen; unter Bedienung ein Block «Prüfrunde Bedienung 8 · reale Tests (…)» mit Auswertung, Befunden und Status.
- **Teil C:** unter «R3 Freigabe-Audit» den Absatz «Noch nicht durchgeführt …» ersetzen (den bisherigen unter «Verlauf» behalten). Inhalt nach dem R3-Auftrag: Entscheid in einem Satz, Tabelle Nr. | Prüfpunkt | Ergebnis | Beleg | Priorität, Liste der blockierenden Punkte mit Zuständigkeit.
- **Aufbau je Block:** geprüfter Stand, Unabhängigkeit, Vorgehen, Netzzugang mit Uhrzeit; Ergebnis je Punkt mit Beleg; neue Befunde (ID, Gewicht, Beleg, Vorschlag, Zuständig); Zählung.
- **Statustabelle:** Status, «Datum», «Geprüft durch» und «Ergebnis» der bearbeiteten Stufen nachführen.
- **«Offene Punkte nach Zuständigkeit»** neu fassen; Fragen an die Fachstelle dort sammeln.
- **Commit:** nur `PRUEFBERICHT.md`, auf einem eigenen Branch. Dazu ein Entwurfs-PR gegen `main`, dessen Beschreibung die offenen Stufen nennt.

## 9. Danach (nicht Teil dieses Auftrags)

1. Bei Befunden oder Fragen: Entscheid der Fachstelle, Korrektur durch eine bauende Sitzung, Nachprüfung durch eine Sitzung, die nicht umgesetzt hat; danach R3 erneut (Teil C).
2. Nach R3 «Go»: Freigabe durch die Fachstelle, `node tools/export.mjs <ordner> --production`, Veröffentlichung auf der Ziel-Adresse, dort die Punkte 17 und 21 kurz bestätigen.

## 10. Startnachricht für die Prüfsitzung

In einer neuen Sitzung im selben Repository, mit Internetzugang (Abschnitt 2):

```
Prüfe die Website templates/website/depression-angehoerige/ auf main nach
PRUEFAUFTRAG-R3.md im selben Ordner. Halte den geprüften Stand mit git rev-parse HEAD fest.
Du hast die Website nicht gebaut, nichts daran korrigiert oder entschieden und diesen
Auftrag nicht geschrieben. Lies zuerst CLAUDE.md, guidelines/00-ablauf-pruefung-und-freigabe.md,
guidelines/00-pre-release-audits.md und den Auftrag ganz. Prüfe zuerst den Internetzugang
und mach dann jeden Teil (A, B, C), dessen Voraussetzung erfüllt ist.
Ergebnisblätter der realen Tests: <anhängen oder «keine»>.
Ändere keine Inhalte und keinen Code. Committe nur PRUEFBERICHT.md auf einem
eigenen Branch und öffne einen Entwurfs-PR gegen main.
```
