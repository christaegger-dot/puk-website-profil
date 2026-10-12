# Prüfauftrag · Depression-Website · R3 Freigabe-Audit, zuerst Punkt 13 am Original

Stand 12.10.2026. Gilt für `templates/website/depression-angehoerige/` auf `main` nach dem Merge von #71; ist #71 noch nicht gemergt, auf dem Branch `claude/keen-clarke-xkdh7j`. Für eine **Prüfsitzung mit Internetzugang**.

Diesen Auftrag hat auf Wunsch der Fachstelle («Schreib den Auftrag: … in R3 (Punkt 13) nachholen, in einer Umgebung mit Internetzugang»; «Bitte schreib einen konkreten Auftrag») die neunte Prüfsitzung geschrieben. Er legt Umfang, Schritte, Entscheidregeln und Form fest, aber keine erwarteten Ergebnisse.

## 1. Auf einen Blick

| Teil | Was | Voraussetzung | Danach |
| --- | --- | --- | --- |
| **A · jetzt** | R3, Punkt 13: alle 73 externen Adressen am Original (Anhang A), dazu SGPP S. 7, NVL Kapitel 12 und die Grössen der 7 PDF-Dateien | Internetzugang (Schritt 1) | W1 und W3 auf «erledigt», wenn ohne Befund |
| **B · später** | Ergebnisblätter der realen Tests eintragen | die Fachstelle übergibt die Blätter (`FREIGABE-ENTSCHEIDE.md`, Abschnitt 7 e) | Bedienung auf «erledigt», wenn vollständig |
| **C · zuletzt** | R3 nach `guidelines/00-pre-release-audits.md`, unverändert | W1, W3 und Bedienung «erledigt»; neues Repository, Netlify-Site und Entwurfs-Deploy (Abschnitt 6) | «Go», «Go mit Auflagen» oder «No-Go» |

Eine Sitzung macht jeden Teil, dessen Voraussetzung erfüllt ist, und hört dann auf. Der Rest bleibt für eine spätere Sitzung mit demselben Auftrag.

**Stand der Stufen beim Schreiben** (`PRUEFBERICHT.md` › Status): erledigt W2, S, Visualisierungs-Check, R1, R2. W1 und W3 offen ohne offenen Befund; es fehlt nur die Prüfung am Original, die der Proxy in der achten und neunten Prüfsitzung gesperrt hat (W1, Prüfrunde 10, Punkt 9 und Prüfrunde 11, Punkte 4 und 5; W3, Prüfrunde 7, Punkt 2 und Prüfrunde 8, Punkt 4). Offen ausserdem Bedienung (reale Tests) und R3.

## 2. Wer prüft

- **Eine neue Sitzung**, die an dieser Website nichts gebaut, korrigiert oder entschieden hat. Ausgeschlossen sind auch die neunte Prüfsitzung (hat diesen Auftrag geschrieben) und die achte (hat W1-39 und W3-13 im Rollenwechsel umgesetzt).
- **Netz:** Am einfachsten freier Internetzugang für diese Sitzung (Einstellungen der Umgebung › Network access), weil die 46 DOI-Links auf Verlagsseiten weiterleiten. Sonst mindestens diese Hosts: `www.leitlinien.de`, `icd.who.int`, `doi.org`, `api.crossref.org`, `promentesana.ch`, `stand-by-you.ch`, `swisslife.ch`, `deutschebahnstiftung.de`, `www.bag.admin.ch`, `www.depressionen.ch`, `www.deutsche-depressionshilfe.de`, `www.fedlex.admin.ch`, `www.kinderseele.ch`, `www.mhfa.com.au`, `www.obsan.admin.ch`, `www.psychiatrie.ch`, `www.pukzh.ch`, `www.selbsthilfezuerich.ch`, `www.vaskzuerich.ch`, `www.wie-gehts-dir.ch`, `www.zh.ch`, `*.netlify.app`.
- **IDs neuer Befunde:** W1-40, W3-14, BD-13, Fragen an die Fachstelle W1-F-22, R3-01.

## 3. Regeln

- **Nur `PRUEFBERICHT.md` ändern.** Keine Inhalte, kein Code, keine Werkzeuge. Bau und Export nur in einem Git-Worktree im Scratchpad. Nichts veröffentlichen, nichts mergen, keine Netlify-Einstellung ändern, keine E-Mail senden.
- **Keine Sperre umgehen.** Was gesperrt bleibt, heisst «nicht geprüft»; die Stufe bleibt dann offen.
- **Je Punkt Ergebnis und Beleg:** Befehl mit Ausgabe, Endadresse, Titel am Ziel, Seitenzahl und kurzes wörtliches Zitat. In R3 gilt ein Punkt ohne Beleg als nicht erfüllt.
- **Selbst zählen und messen.** Zahlen in diesem Auftrag und in früheren Prüfrunden sind Hinweise, keine Belege.
- **Entscheide der Fachstelle gelten.** Fachliche Fragen als «Prüfbedarf» unter «Fragen an die Fachstelle».
- **Zurückgestellt mit Begründung** (Fachstelle, 12.10.2026), gilt nicht als offen: W3-11, W3-01 (Hinweis), W3-12 (bis R3, Punkt 21), R2-01 und R2-02 (Profil-Teil), V-08 und V-09 (Profil-Teil), V-10, R2-08, R1-01, R1-02, R1-04, BD-08 (bis nach den realen Läufen).

## 4. Teil A · Punkt 13 am Original, Schritt für Schritt

Ab Schritt 3 laufen alle Befehle im Ordner der Website im Git-Worktree aus Schritt 2. Höchstens etwa ein Abruf je Sekunde.

### Schritt 1 · Netz prüfen

```sh
date -u
curl -sS -o /dev/null -w '%{http_code}\n' https://www.leitlinien.de/
curl -sS -o /dev/null -w '%{http_code}\n' https://doi.org/
curl -sS -o /dev/null -w '%{http_code}\n' https://api.crossref.org/works/10.1037/bul0000102
```

Antwortet einer der drei nicht (z. B. «CONNECT tunnel failed, response 403» oder `000`): Teil A abbrechen, nichts eintragen, der Fachstelle die gesperrten Hosts nennen.

### Schritt 2 · Stand festhalten

```sh
git rev-parse HEAD
git log --oneline c6e9e37..HEAD -- templates/website/depression-angehoerige
git worktree add --detach <scratchpad>/wt HEAD
cd <scratchpad>/wt/templates/website/depression-angehoerige
node tools/build.mjs && git -C <scratchpad>/wt status --porcelain   # leer: Seiten = Commit
```

Zeigt `git log` Änderungen an Inhalten, `content/` oder gebauten Seiten nach `c6e9e37`, gilt der neue Stand; Schritt 3 erfasst geänderte Links.

### Schritt 3 · Linkliste erzeugen und mit Anhang A vergleichen

Eigenes Skript über die 10 gebauten Seiten (`index`, `depression-verstehen`, `behandlung-und-verlauf`, `ihre-situation`, `je-nach-rolle`, `begleiten`, `fuer-sich-sorgen`, `rechte-und-angebote`, `impressum-datenschutz`, `404`): jedes `a[href^="http"]` mit Seite, Abschnitt (`section[id]`), Linktext und Text der folgenden «Verwendung» (`span.puk-longform__source-use`); dazu jedes `a[href^="mailto:"]`.

Festhalten: Zahl der Links, der eindeutigen Adressen und der Hosts; jede Abweichung von Anhang A (fehlt, neu, anders).

### Schritt 4 · Jede Adresse abrufen

Für jede eindeutige Adresse (Anhang A, Nr. 1 bis 73):

```sh
curl -sS -L --max-redirs 10 -o /dev/null -A 'Mozilla/5.0' \
  -w '%{http_code} %{url_effective} %{content_type}\n' '<adresse>'
```

Danach je nach Art:

| Art | Prüfen | Werkzeug |
| --- | --- | --- |
| Seite | Titel oder Hauptüberschrift am Ziel passt zu Linktext und «Verwendung» (Herausgeber, Thema, Kapitel) | `curl` und HTML lesen; leere Seite, Fehler nur bei `curl` sowie `icd.who.int` und `www.fedlex.admin.ch` mit Chromium ohne Kopf (Playwright: `goto`, `waitUntil: 'networkidle'`, dann `document.title` und `innerText`) |
| PDF | Antwort 200, `content-type` PDF, Titel auf Seite 1 passt zum Linktext | `curl -sSL -o <datei>` und `pdftotext -l 1 <datei> -` |
| DOI | Auflösung über `doi.org` zum Verlag; Metadaten passen zum Linktext: Autoren, Jahr, Titel, Zeitschrift, Band, Heft | `curl -sS https://api.crossref.org/works/<DOI>` (Felder `author[].family`, `issued`, `title`, `container-title`, `volume`, `issue`) |

Zusätzlich je Adresse: ist es eine **offizielle Quelle** (Behörde, Fachgesellschaft, Fachorganisation, Verlag über DOI)?

Eintrag je Adresse: Antwort, Endadresse, «passt» (ja / teilweise / nein / nicht prüfbar), Beleg (Titel am Ziel oder Crossref-Angabe).

### Schritt 5 · Die sechs neuen oder geänderten Adressen genau

| Nr. | Adresse | Am Ziel prüfen |
| --- | --- | --- |
| 17 | NVL `…/depression/version-3` | Startseite der NVL Unipolare Depression in Version 3; welche Fassung dort genannt ist (Linktext: «Version 3.2»); ob die Kapitel 1.4 und 3 bis 6 von dort erreichbar sind |
| 54 | NVL `…/version-3/kapitel-12` | Kapitel 12 mit Abschnitt 12.1; Stellen zu Abschiedsvorbereitungen, Beschaffen von Mitteln und Einschränken des Zugangs zu Mitteln (je Zitat) |
| 3 | ICD-11 `browse/2026-01/mms/en` | Browser in der Fassung 2026-01; die Codes 6A70 bis 6A7Z (Depressive Störungen), 6B42 (anhaltende Trauerstörung) und QD85 (Burnout) über die Suche des Browsers auffindbar, je mit englischem Titel |
| 42 | DOI `10.35190/d2021.4.5` | Crossref: Albermann K, Müller B, 2021, «Kinder und Jugendliche aus Familien mit einem psychisch erkrankten Elternteil», Paediatrica 32(4) |
| 31 | DOI `10.1016/S0962-1849(05)80001-0` | Crossref: Hooley JM, Gotlib IH, 2000, «A diathesis-stress conceptualization of expressed emotion and clinical outcome», Applied and Preventive Psychology 9(3) |
| 67 | Pro Mente Sana `…/weiterbildung/rechtskurse` | Seite mit Kursen zu Rechten; ob sie Angehörige ansprechen, wie der Satz auf `rechte-und-angebote` › `angebote` sagt («Kurse zu den Rechten von Angehörigen») |

### Schritt 6 · Schweizer Behandlungsempfehlungen, Teil 1, S. 7

Gegen `begleiten` › Quellen: «Verwendung: Risikofaktoren, gefährliche Mittel sichern.»

```sh
curl -sSL -o sgpp-teil1.pdf '<Adresse Nr. 2>'
pdfinfo sgpp-teil1.pdf | grep Pages
pdftotext -layout sgpp-teil1.pdf sgpp.txt     # Seiten durch Seitenvorschub getrennt
```

Die Seite mit der gedruckten Seitenzahl 7 suchen (sonst PDF-Seite 7 und das festhalten). Darin suchen: «Risikofaktor», «Suizid», «Notfallplan», «Menge», «Woche». Festhalten: PDF-Seite, gedruckte Seite, Zitat von höchstens zwei Sätzen. Frage: Trägt die Seite «Risikofaktoren» und «gefährliche Mittel sichern» (z. B. begrenzte Abgabemenge)?

### Schritt 7 · NVL Kapitel 12 und die zwei Warnsignale

`begleiten` › `suizidgedanken` nennt unter anderem: «Äusserungen über den Tod, über Sinnlosigkeit oder darüber, anderen nur eine Last zu sein» und «starker Rückzug, mehr Alkohol oder Drogen». Hintergrund: W1, Prüfrunde 11, Punkt 4 (Hinweis, kein Befund).

1. Adresse Nr. 54 mit Chromium öffnen und den Text von Kapitel 12 (mit 12.1) auslesen. Suchen: «Last», «Belastung», «sinnlos», «Sinnlosigkeit», «hoffnungslos», «Tod», «Rückzug», «Isolation», «Alkohol», «Drogen», «Substanz».
2. Fehlt ein Warnsignal dort: in den übrigen Quellen von `begleiten` suchen, MHFA-Richtlinien (Nr. 49, PDF; «burden», «hopeless», «withdraw», «alcohol», «drug») und wie-gehts-dir.ch (Nr. 51).
3. Je Warnsignal: Fundstelle mit Abschnitt und Zitat, oder «nicht gefunden».

### Schritt 8 · Grössen der 7 PDF-Dateien

| Nr. | Datei | Linktext |
| --- | --- | --- |
| 2 | Schweizer Behandlungsempfehlungen, Teil 1 | 1,5 MB |
| 4 | Obsan Bulletin 11/2024 | 3,5 MB |
| 22 | Deutschland-Barometer Depression 2024, Pressemitteilung | 0,2 MB |
| 23 | Stand by You Studie | 3,8 MB |
| 35 | Deutschland-Barometer Depression 2018, Grafikband | 0,9 MB |
| 49 | MHFA Depression Guidelines | 0,3 MB |
| 71 | BAG, Angehörige von suizidgefährdeten Personen unterstützen | 1,0 MB |

```sh
curl -sSIL '<adresse>' | grep -i '^content-length' | tail -1
# fehlt die Angabe: curl -sSL -o datei.pdf '<adresse>' && stat -c %s datei.pdf
```

Umrechnen: 1 MB = 1 000 000 Byte, auf eine Nachkommastelle, ab 5 in der zweiten Nachkommastelle aufrunden (wie W1, Prüfrunde 9). Eintrag: Byte, MB gerundet, Linktext, Ergebnis.

### Schritt 9 · E-Mail-Adresse

```sh
grep -o 'mailto:[^"]*' *.html | sort | uniq -c
grep -o '"email": *"[^"]*"' site.config.json
```

Alle `mailto:` und der sichtbare Text gleich `angehoerigenarbeit@pukzh.ch`, gleich wie `site.config.json` › `email` und die Absenderin in `CLAUDE.md`. Keine Testmail.

### Schritt 10 · Bewerten

| Ergebnis | Folge |
| --- | --- |
| Antwort 200 nach Weiterleitungen, Ziel passt, offizielle Quelle | erfüllt |
| DOI: Verlag mit Bot-Schutz, Crossref-Metadaten passen | erfüllt (Beleg Crossref; Bot-Schutz vermerken) |
| Seite: Fehler nur bei `curl`, mit Chromium 200 und passend | erfüllt |
| Ziel passt teilweise (anderes Kapitel, andere Fassung, Titel weicht ab) | Befund W1-40 ff., optional; Vorschlag für Linktext oder Adresse |
| 404, 410, Host unbekannt, falsches Ziel, keine offizielle Quelle | Befund W1-40 ff., wichtig |
| gesperrt oder nicht abrufbar | «nicht geprüft» |
| Schritt 6: S. 7 trägt die «Verwendung» nicht | Befund W1-40 ff., optional (wie W1-39); Vorschlag für die Zeile |
| Schritt 7: ein Warnsignal in keiner Quelle von `begleiten` | Frage W1-F-22 an die Fachstelle: als Fachwissen bestätigen (wie 1 e) oder Quelle nennen; nicht streichen empfehlen (der Abschnitt ist sicherheitsrelevant) |
| Schritt 8: gerundete Grösse ungleich Linktext | Befund W3-14 ff., optional; Vorschlag mit neuem Wert |
| Schritt 9: Abweichung | Befund W1-40 ff., wichtig |

**Status:**
- **W1 «erledigt»**, wenn die sechs Adressen aus Schritt 5 erfüllt sind, die Schritte 4, 6, 7 und 9 ohne neuen Befund und ohne offene Frage bleiben und keine Adresse «nicht geprüft» ist. Sonst bleibt W1 offen.
- **W3 «erledigt»**, wenn alle 7 Grössen aus Schritt 8 erfüllt sind. Sonst bleibt W3 offen.
- **R3** bleibt «offen». Punkt 13 gilt als vorgeprüft am Datum von Teil A.

### Schritt 11 · Eintragen in `PRUEFBERICHT.md`

1. **W1:** neuer Block nach «Offen in W1 nach Runde 11», vor «### W2 Gesamtkohärenz»:

   ```
   #### Prüfrunde 12 · Prüfung am Original (TT.MM.JJJJ, Stand `<sha>`)

   **Geprüft durch:** <Nr.> Prüfsitzung (…). Hat die Website nicht gebaut, nichts korrigiert oder entschieden
   und diesen Auftrag nicht geschrieben. Quelle der Befunde: Prüfung <Nr.>.

   **Grundlage:** Stand; Netz (Befehle aus Schritt 1 mit Uhrzeit und Antwort); Werkzeuge mit Version;
   Linkzählung und Abgleich mit Anhang A (Schritt 3).

   **Ergebnis:** in Kürze.

   **1 · Alle externen Adressen** (73 Zeilen)
   | Nr. | Adresse | Seite › Abschnitt | Antwort | Endadresse | passt | offiziell | Beleg |
   **2 · Die sechs neuen oder geänderten Adressen** (Schritt 5)
   **3 · Schweizer Behandlungsempfehlungen, Teil 1, S. 7** (Schritt 6)
   **4 · NVL Kapitel 12, zwei Warnsignale** (Schritt 7)
   **5 · E-Mail-Adresse** (Schritt 9)

   #### Neue Befunde W1, Runde 12
   (je ID, Gewicht, Beleg, Vorschlag, Zuständig; sonst «Keine.»)

   **Zählung Prüfrunde 12:** …
   ```

2. **W3:** neuer Block nach der Zeile «Zählung W3, Runde 8: …», vor «## Pre-Release-Audits»: «#### Prüfrunde W3 9 · PDF-Grössen am Original (TT.MM.JJJJ, Stand `<sha>`)» mit Tabelle | Nr. | Datei | Byte | MB gerundet | Linktext | Ergebnis |, danach «#### Neue Befunde W3, Runde 9» und Zählung.
3. **R3:** unter «### R3 Freigabe-Audit» oben ein Absatz «Punkt 13 vorgeprüft am TT.MM.JJJJ (W1, Prüfrunde 12): …»; den bisherigen ersten Absatz darunter unter «_Verlauf: …_» behalten. R3 selbst bleibt «offen».
4. **Statustabelle:** Zeilen W1, W3 und R3: Status, «Datum», «Geprüft durch» und «Ergebnis» nachführen.
5. **«Offene Punkte nach Zuständigkeit»** neu fassen; neue Fragen an die Fachstelle dort sammeln.

### Schritt 12 · Commit und PR

- Nur `PRUEFBERICHT.md`, auf einem eigenen Branch; `git status` vorher: keine anderen Änderungen.
- Entwurfs-PR gegen `main`. Beschreibung: Ergebnis in Kürze, neue Befunde, offene Stufen (mindestens Bedienung und R3).

## 5. Teil B · Ergebnisse der realen Tests

**Voraussetzung:** Die Fachstelle gibt der Sitzung die Ergebnisblätter (`FREIGABE-ENTSCHEIDE.md`, Abschnitt 7 e) in der Startnachricht oder als Datei. Fehlen sie, entfällt Teil B.

1. **Eintragen,** Fall für Fall und wörtlich: Screenreader unter «Bedienung und Barrierefreiheit» › «Protokoll reale Screenreader-Läufe (offen)» (Spalten VO, NV, VO-iOS), Tastatur und Touch unter «Protokoll Hardwaretastatur und Touch (offen)». Kopfangaben je Umgebung: Gerät, System, Screenreader, Browser, Versionen, Datum, Person oder Kürzel. «nicht geprüft» bleibt «nicht geprüft».
2. **Mindestumfang prüfen:** zwei Screenreader-Läufe (z. B. VoiceOver und NVDA), ein Durchgang mit Hardwaretastatur, einer auf einem Touch-Gerät.
3. **Befunde:** jeder Fall «nicht bestanden» als BD-13 ff. mit Gewicht und Beleg. Beobachtungen zu BD-08 (Schritte VO-3 und NV-3), zum Kreislauf (BD-12) und zu Wortumbrüchen bei grosser Schrift für die Fachstelle festhalten.
4. **Status:** Bedienung auf «erledigt», wenn der Mindestumfang erfüllt ist und kein wichtiger Befund offen bleibt. BD-08 bleibt zurückgestellt; braucht es nach den Läufen einen Entscheid, unter «Fragen an die Fachstelle».
5. **Eintrag:** Block «#### Prüfrunde Bedienung 8 · reale Tests (TT.MM.JJJJ, Stand `<sha>`)» nach «Prüfrunde Bedienung 7», Statuszeile, offene Punkte; Commit wie Schritt 12.

## 6. Ziel der Veröffentlichung (entschieden am 12.10.2026)

**Entscheid:** Die neunte Prüfsitzung hat nach einem Blick in die beiden bestehenden Repositories empfohlen: eine neue Netlify-Site mit eigenem Repository nur für den Export; die alte Site bleibt bestehen und leitet nach dem Start weiter. Antwort der Fachstelle am 12.10.2026: «ja, ergänze den Auftrag so».

| Was | Festlegung |
| --- | --- |
| Ziel-Adresse | `https://depression-angehoerige.netlify.app`, gleich wie `site.config.json` › `siteUrl`; an der Website ändert sich nichts |
| Netlify-Site | neu: `depression-angehoerige` |
| Repository | neu: `christaegger-dot/depression-angehoerige`, enthält nur den Export |
| Aufbau des Repositorys | `site/` = Export von `node tools/export.mjs`; im Stamm nur `README.md` mit Herkunft (Repository `puk-website-profil`, Ordner, Quell-Commit, Exportbefehl) |
| Netlify-Einstellungen | Produktionsbranch `main`; Basisverzeichnis leer; Build-Befehl leer; Veröffentlichungsordner `site`; Deploy-Vorschauen für Pull Requests eingeschaltet. Solange `main` keinen Ordner `site/` hat, veröffentlicht Netlify nichts |
| Quelle der Wahrheit | weiterhin `templates/website/depression-angehoerige/` in `puk-website-profil`; im neuen Repository nichts von Hand ändern |

**Bestand, nicht verwendet** (am 12.10.2026 nur gelesen):
- `christaegger-dot/Archiv-puk-depression-angehoerige`: die alte öffentliche Website (früher `puk-depression-angehoerige`), Netlify-Site `puk-depression-angehoerige`; die Adresse `https://puk-depression-angehoerige.netlify.app` antwortete um 22.09 UTC mit 401 (Zugangsschutz von Netlify).
- `christaegger-dot/depression-verstehen-und-begleiten`: Zusammenführungsversuch vom 07. bis 09.10.2026 mit Ziel `puk-depression-angehoerige`; die Umstellung ist laut `NETLIFY-CUTOVER.md` nicht erfolgt. Enthält Hilfewege mit 144, gegen die Profilregel «kein Krisenzugang».

Beide bleiben unverändert. Ob sie archiviert werden, entscheidet die Fachstelle nach dem Start.

**Vor Teil C:**
1. **Fachstelle:** das Repository `christaegger-dot/depression-angehoerige` anlegen, mit einer `README.md` im Stamm; Sichtbarkeit nach Wahl der Fachstelle.
2. **Fachstelle:** die Netlify-Site `depression-angehoerige` anlegen, mit dem Repository verknüpfen und wie oben einstellen.
3. **Bauende Sitzung** (technischer Schritt, keine Änderung an Inhalten; Startnachricht in Abschnitt 8):
   - in einem Worktree von `puk-website-profil` am Stand, den R3 prüfen soll: `node tools/export.mjs <ordner>` (Entwurf, ohne `--production`; das Produktionsgate lässt `--production` erst nach R3 «Go» zu);
   - den Inhalt des Ordners als `site/` auf den Branch `release-kandidat` des neuen Repositorys legen und einen Pull Request gegen `main` öffnen, **nicht mergen**;
   - im Pull Request festhalten: Quell-Commit, Befehl mit Ausgabe, Dateiliste.

   Netlify baut dazu eine Deploy-Vorschau (`https://deploy-preview-<Nr>--depression-angehoerige.netlify.app`). Das ist der Entwurfs-Deploy für Teil C.

**Nach «Go»** (nicht Teil dieses Auftrags):
1. Die Fachstelle gibt die Veröffentlichung frei.
2. **Bauende Sitzung:** `node tools/export.mjs <ordner> --production` am geprüften Stand; mit `site/` im Pull Request vergleichen (`diff -r`), bei Unterschieden den Branch nachführen; dann den Pull Request mergen. Netlify veröffentlicht auf der Ziel-Adresse.
3. **Prüfsitzung:** die R3-Punkte 17 und 21 auf der Ziel-Adresse kurz bestätigen (Indexierung erlaubt, Links und Sprungziele, W3-12).
4. **Alte Site `puk-depression-angehoerige`:** zuerst nur noch Weiterleitungen ausliefern (301), z. B. die Verknüpfung mit dem alten Repository lösen und einen Ordner mit einer einzigen Datei `_redirects` deployen; danach den Zugangsschutz aufheben, damit alte Links und Lesezeichen ankommen. Vorschlag für die Zuordnung, Entscheid der Fachstelle (Ziel jeweils `https://depression-angehoerige.netlify.app` mit dem Pfad):

   | alte Adresse | Titel der alten Seite | neue Adresse |
   | --- | --- | --- |
   | `/`, `/index.html` | Depression verstehen und begleiten | `/` |
   | `/m1`, `/m1.html` | Was ist eine Depression? | `/depression-verstehen.html` |
   | `/m1b`, `/m1b.html` | Wie wird Depression behandelt? | `/behandlung-und-verlauf.html` |
   | `/m2`, `/m2.html` | Wie kann ich mit ihr oder ihm sprechen? | `/begleiten.html` |
   | `/m3`, `/m3.html` | Was passiert mit unserer Beziehung? | `/ihre-situation.html` |
   | `/m4`, `/m4.html` | Was zusätzlich auftreten kann | `/depression-verstehen.html` (keine eigene Entsprechung) |
   | `/m5`, `/m5.html` | Wie schütze ich mich? | `/fuer-sich-sorgen.html` |
   | `/m6`, `/m6.html` | Wo finde ich Hilfe? | `/rechte-und-angebote.html` |
   | `/zusammenfassung`, `/zusammenfassung.html` | Orientierung auf einer Seite | `/` |
   | `/krisenplan`, `/krisenplan.html`, `/krisenplan-v2.html` | Persönlicher Krisenplan | `/` (keine Entsprechung; die neue Website hat nach dem Profil keine Krisenseite) |
   | alle übrigen, auch die PDF-Infografiken | – | `/` |

## 7. Teil C · R3 Freigabe-Audit

**Voraussetzung:** W1, W3 und Bedienung stehen auf «erledigt». Sonst entfällt Teil C; R3 bleibt «offen».

**Vorher:** die Schritte 1 bis 3 aus Abschnitt 6 (Repository, Netlify-Site, Entwurfs-Deploy als Deploy-Vorschau). Die Ziel-Adresse `https://depression-angehoerige.netlify.app` antwortete am 12.10.2026 um 21.30 UTC mit 404, und das Produktionsgate lässt `node tools/export.mjs <ordner> --production` erst nach R3 «Go» zu. Ohne den Entwurfs-Deploy sind die Punkte 17 (Indexierung) und 21 (Links auf der Ziel-Adresse) «nicht prüfbar», und R3 kann nicht «Go» ergeben.

**Auftrag:** den R3-Auftrag aus `guidelines/00-pre-release-audits.md` unverändert ausführen, mit diesem Kontext:

```
- Website: templates/website/depression-angehoerige/   Branch: main   Stand (Commit): <git rev-parse HEAD>
- Vorschau: <Deploy-Vorschau des Pull Requests im Repository christaegger-dot/depression-angehoerige>
  (Arbeitsstand im Repository puk-website-profil:
  https://puk-website-profil.netlify.app/templates/website/depression-angehoerige/)
- Ziel-Adresse nach Veröffentlichung: https://depression-angehoerige.netlify.app
```

**Fundorte zu einzelnen Punkten** (keine erwarteten Ergebnisse):

| R3-Punkt | Fundort oder Vorgehen |
| --- | --- |
| 3 Prüftiefe | Kein Umbau: Der Abgleich von 20 Aussagen je Etappe entfällt (W1, Prüfrunde 10, Grundlage). Zweite unabhängige Prüfungen: W1, Prüfrunde 4 und 9; Nachtrag W1-F-19 (Codex) |
| 7 Zuständigkeit | `site.config.json` › `responsibility` und `responsibility.inline` (`reviewStatus`); Standardwortlaut in `README.md` im Stamm, «Zuständigkeit statt Krisenzugang» |
| 8 Prüfdatum | Fusszeile «Fachlich freigegeben am 12.10.2026 …»; `rechte-und-angebote` › `angebote` «Angaben zu den Angeboten: Stand 12.10.2026.»: Liegt die Veröffentlichung später, sind die Angebote nachgeprüft und ist das Datum nachgeführt? |
| 11 Produktionsgate | Vor dem Eintrag nennt `review-report` die offene Zeile «R3 Freigabe-Audit». Zweimal festhalten: vor dem Eintrag und, bei «Go», mit dem nachgeführten Bericht im Worktree |
| 13 Links | Teil A. Liegt Teil A nicht am selben Tag: Schritt 4 für alle 73 Adressen wiederholen; die inhaltlichen Ergebnisse (Schritte 5 bis 7) gelten weiter, wenn die Adressen gleich sind |
| 17 Indexierung | Vorschau mit `X-Robots-Tag: noindex, nofollow` (`_headers` im Stamm); `_headers` des Exports und `<meta name="robots">` der Seiten; Entwurfs-Deploy |
| 19 Export | den eigenen Export desselben Stands mit `site/` im Pull Request des neuen Repositorys vergleichen (`diff -r`); im Exportordner keine Arbeitsdateien, z. B. `PRUEFBERICHT.md`, `FREIGABE-ENTSCHEIDE.md`, `KORREKTUR-*.md`, `NACHPRUEFUNG-*.md`, `PRUEFAUFTRAG-R3.md`, `README.md`, `content/`, `tools/`, `gate.html`, `site.config.json` |
| 21 Ziel-Adresse | auf der Deploy-Vorschau des neuen Repositorys, nach dem Start kurz auf der Ziel-Adresse (Abschnitt 6, «Nach «Go»»); hier wird W3-12 entschieden (kanonische Links und Sitemap mit `.html` gegenüber den Umschreibungen von Netlify) |

**Eintrag:** unter «### R3 Freigabe-Audit» den Absatz «Noch nicht durchgeführt …» ersetzen (den bisherigen unter «Verlauf» behalten): Entscheid in einem Satz, Tabelle | Nr. | Prüfpunkt | Ergebnis | Beleg | Priorität |, Liste der blockierenden Punkte mit Zuständigkeit. R3 steht nur bei «Go» auf «erledigt». Statuszeile, offene Punkte; Commit wie Schritt 12.

**Nach «Go»:** siehe Abschnitt 6, «Nach «Go»» (nicht Teil dieses Auftrags).

## 8. Startnachrichten

**Teil A** (jetzt; neue Sitzung im selben Repository mit Internetzugang):

```
Prüfe die Website templates/website/depression-angehoerige/ nach PRUEFAUFTRAG-R3.md
im selben Ordner, Teil A, Schritte 1 bis 12. Ist #71 noch nicht gemergt, arbeite auf dem
Branch claude/keen-clarke-xkdh7j, sonst auf main. Halte den geprüften Stand mit
git rev-parse HEAD fest. Du hast die Website nicht gebaut, nichts daran korrigiert oder
entschieden und diesen Auftrag nicht geschrieben. Lies zuerst CLAUDE.md,
guidelines/00-ablauf-pruefung-und-freigabe.md und den Auftrag ganz.
Ändere keine Inhalte und keinen Code. Committe nur PRUEFBERICHT.md auf einem
eigenen Branch und öffne einen Entwurfs-PR gegen main.
```

**Teil B** (wenn die Ergebnisblätter da sind):

```
Trage nach PRUEFAUFTRAG-R3.md, Teil B, die Ergebnisse der realen Tests für
templates/website/depression-angehoerige/ auf main ein. Ergebnisblätter: <anhängen>.
Du hast die Website nicht gebaut, nichts daran korrigiert oder entschieden.
Lies zuerst CLAUDE.md und den Auftrag ganz. Ändere keine Inhalte und keinen Code.
Committe nur PRUEFBERICHT.md auf einem eigenen Branch und öffne einen Entwurfs-PR gegen main.
```

**Entwurfs-Deploy** (bauende Sitzung, Abschnitt 6, Schritt 3; nach dem Anlegen von Repository und Netlify-Site):

```
Lege nach PRUEFAUFTRAG-R3.md, Abschnitt 6, Schritt 3 den Entwurfs-Export von
templates/website/depression-angehoerige/ (main, Stand <git rev-parse HEAD>) im Repository
christaegger-dot/depression-angehoerige an. Ändere in puk-website-profil nichts.
Erzeuge den Export in einem Worktree mit node tools/export.mjs <ordner> (ohne --production),
lege ihn als site/ auf den Branch release-kandidat und öffne einen Pull Request gegen main,
ohne zu mergen. Nenne im Pull Request Quell-Commit, Befehl mit Ausgabe und Dateiliste
und gib mir die Adresse der Deploy-Vorschau.
```

**Teil C** (wenn W1, W3 und Bedienung erledigt sind und die Deploy-Vorschau bereitsteht):

```
Mach das R3 Freigabe-Audit für templates/website/depression-angehoerige/ auf main nach
PRUEFAUFTRAG-R3.md, Teil C. Deploy-Vorschau im neuen Repository: <Adresse>.
Du hast die Website nicht gebaut, nichts daran korrigiert oder entschieden.
Lies zuerst CLAUDE.md, guidelines/00-ablauf-pruefung-und-freigabe.md,
guidelines/00-pre-release-audits.md und den Auftrag ganz. Ändere keine Inhalte und keinen
Code. Committe nur PRUEFBERICHT.md auf einem eigenen Branch und öffne einen Entwurfs-PR gegen main.
```

## Anhang A · Die 73 externen Adressen

Erzeugt am 12.10.2026 aus den gebauten Seiten an `30cfc92`: 83 Links, 73 eindeutige Adressen, 20 Hosts, 46 DOI-Links. Markiert sind Adressen, die seit der Prüfung aller Links in W1, Prüfrunde 9 (70 Adressen) **neu** oder **geändert** sind. Die Sitzung erzeugt die Liste selbst neu (Schritt 3) und vergleicht.

| Nr. | Adresse | Art | Seite › Abschnitt | Linktext (gekürzt) |
| --- | --- | --- | --- | --- |
| 1 | `https://www.leitlinien.de/themen/depression/version-3/kapitel-1` | Seite | `depression-verstehen › quellen` | Nationale VersorgungsLeitlinie Unipolare Depression, Version 3.2, Kapitel 1 |
| 2 | `https://www.psychiatrie.ch/fileadmin/SGPP/user_upload/Fachleute/Empfehlungen/2025_Langversion_UnipolareDepression_Teil1_DE_20251113.pdf` | PDF | `depression-verstehen › quellen`; `behandlung-und-verlauf › quellen`; `begleiten › quellen` | Schweizer Behandlungsempfehlungen: Die Behandlung der unipolaren depressiven Störungen. … |
| 3 | `https://icd.who.int/browse/2026-01/mms/en` | Seite **geändert** | `depression-verstehen › quellen` | WHO: ICD-11 for Mortality and Morbidity Statistics |
| 4 | `https://www.obsan.admin.ch/sites/default/files/2024-11/obsan_bulletin_2024_11_d.pdf` | PDF | `depression-verstehen › quellen` | Obsan Bulletin 11/2024: Psychische Gesundheit, Kennzahlen 2022 (PDF, 3,5 MB) |
| 5 | `https://doi.org/10.1037/bul0000102` | DOI | `depression-verstehen › quellen` | Salk RH, Hyde JS, Abramson LY (2017): Gender differences in depression in representative … |
| 6 | `https://doi.org/10.1001/jamapsychiatry.2013.1985` | DOI | `depression-verstehen › quellen` | Martin LA, Neighbors HW, Griffith DM (2013): The experience of symptoms of depression in … |
| 7 | `https://doi.org/10.1007/s00406-023-01567-0` | DOI | `depression-verstehen › quellen` | von Zimmermann C, Hübner M, Mühle C, et al. (2023): Masculine depression and its problem … |
| 8 | `https://doi.org/10.1146/annurev.clinpsy.032408.153621` | DOI | `depression-verstehen › quellen`; `je-nach-rolle › quellen` | Fiske A, Wetherell JL, Gatz M (2009): Depression in older adults. Annual Review of Clini … |
| 9 | `https://doi.org/10.1056/NEJM199910283411801` | DOI | `depression-verstehen › quellen` | Simon GE, VonKorff M, Piccinelli M, et al. (1999): An international study of the relatio … |
| 10 | `https://doi.org/10.1146/annurev-clinpsy-050212-185612` | DOI | `depression-verstehen › quellen` | O'Hara MW, McCabe JE (2013): Postpartum depression: current status and future directions … |
| 11 | `https://doi.org/10.1001/jama.2010.605` | DOI | `depression-verstehen › quellen` | Paulson JF, Bazemore SD (2010): Prenatal and postpartum depression in fathers and its as … |
| 12 | `https://doi.org/10.3390/jpm13010154` | DOI | `depression-verstehen › quellen` | Tosto V, Ceccobelli M, Lucarini E, et al. (2023): Maternity Blues: A Narrative Review. J … |
| 13 | `https://doi.org/10.1176/appi.ajp.157.10.1552` | DOI | `depression-verstehen › quellen` | Sullivan PF, Neale MC, Kendler KS (2000): Genetic epidemiology of major depression: revi … |
| 14 | `https://doi.org/10.1038/s41380-022-01661-0` | DOI | `depression-verstehen › quellen` | Moncrieff J, Cooper RE, Stockmann T, et al. (2023, online 2022): The serotonin theory of … |
| 15 | `https://doi.org/10.1038/s41380-023-02095-y` | DOI | `depression-verstehen › quellen` | Jauhar S, Arnone D, Baldwin DS, et al. (2023): A leaky umbrella has little value: eviden … |
| 16 | `https://doi.org/10.1016/S0140-6736(17)32802-7` | DOI | `depression-verstehen › quellen`; `behandlung-und-verlauf › quellen` | Cipriani A, Furukawa TA, Salanti G, et al. (2018): Comparative efficacy and acceptabilit … |
| 17 | `https://www.leitlinien.de/themen/depression/version-3` | Seite **geändert** | `behandlung-und-verlauf › quellen` | Nationale VersorgungsLeitlinie Unipolare Depression, Version 3.2, Kapitel 1.4 (Verlauf), … |
| 18 | `https://doi.org/10.1001/jamapsychiatry.2016.0076` | DOI | `behandlung-und-verlauf › quellen` | Kuyken W, Warren FC, Taylor RS, et al. (2016): Efficacy of Mindfulness-Based Cognitive T … |
| 19 | `https://doi.org/10.1192/bjp.181.3.208` | DOI | `behandlung-und-verlauf › quellen` | Spijker J, de Graaf R, Bijl RV, et al. (2002): Duration of major depressive episodes in … |
| 20 | `https://doi.org/10.1001/jamapsychiatry.2017.1044` | DOI | `behandlung-und-verlauf › quellen` | Chung DT, Ryan CJ, Hadzi-Pavlovic D, et al. (2017): Suicide Rates After Discharge From P … |
| 21 | `https://www.fedlex.admin.ch/eli/cc/1995/4964_4964_4964/de` | Seite | `behandlung-und-verlauf › quellen` | Krankenpflege-Leistungsverordnung (KLV), Art. 11b |
| 22 | `https://deutschebahnstiftung.de/resource/blob/13151436/464679022442bf4c2afa3e952e5de45b/Barometer-2024_Depression-und-Familie-data.pdf` | PDF | `ihre-situation › quellen` | Deutschland-Barometer Depression 2024: Depression und Familie, Pressemitteilung (PDF, 0, … |
| 23 | `https://swisslife.ch/content/dam/ch/dokumente/de/unternehmen/claimsdays/2024/sby_studie_deutsch.pdf` | PDF | `ihre-situation › quellen`; `je-nach-rolle › quellen` | Stand by You Studie: Situation der Angehörigen und Vertrauten von Menschen mit psychisch … |
| 24 | `https://doi.org/10.1016/S0165-0327(03)00168-X` | DOI | `ihre-situation › quellen` | van Wijngaarden B, Schene AH, Koeter MW (2004): Family caregiving in depression: impact … |
| 25 | `https://doi.org/10.1016/j.psychres.2008.06.013` | DOI | `ihre-situation › quellen` | van Wijngaarden B, Koeter M, Knapp M, et al. (2009): Caring for people with depression o … |
| 26 | `https://doi.org/10.3389/fpsyt.2026.1878799` | DOI | `ihre-situation › quellen` | Huang X, Zhou R, Lei H, et al. (2026): Caregiver burden among caregivers of patients wit … |
| 27 | `https://doi.org/10.1111/j.1532-5415.2009.02610.x` | DOI | `ihre-situation › quellen` | Martire LM, Schulz R, Reynolds CF, et al. (2010): Treatment of late-life depression alle … |
| 28 | `https://doi.org/10.1186/1471-2458-10-516` | DOI | `ihre-situation › quellen` | Idstad M, Ask H, Tambs K (2010): Mental disorder and caregiver burden in spouses: the No … |
| 29 | `https://doi.org/10.1037/a0014759` | DOI | `ihre-situation › quellen` | Whisman MA, Uebelacker LA (2009): Prospective associations between marital discord and d … |
| 30 | `https://doi.org/10.1001/archpsyc.55.6.547` | DOI | `ihre-situation › quellen` | Butzlaff RL, Hooley JM (1998): Expressed emotion and psychiatric relapse: a meta-analysi … |
| 31 | `https://doi.org/10.1016/S0962-1849(05)80001-0` | DOI **neu** | `ihre-situation › quellen` | Hooley JM, Gotlib IH (2000): A diathesis-stress conceptualization of expressed emotion a … |
| 32 | `https://doi.org/10.1111/jpm.13045` | DOI | `ihre-situation › quellen` | Hennipman-Herweijer C, van Nieuw Amerongen-Meeuse J, Schaap-Jonker H, Boonstra N (2024): … |
| 33 | `https://www.kinderseele.ch` | Seite | `je-nach-rolle › kinder`; `je-nach-rolle › quellen`; `rechte-und-angebote › angebote` | Institut Kinderseele Schweiz (kinderseele.ch) |
| 34 | `https://www.vaskzuerich.ch/de/Angebote-der-VASK/Treffpunkte` | Seite | `je-nach-rolle › erwachsene-kinder`; `rechte-und-angebote › angebote` | VASK Zürich (vaskzuerich.ch) |
| 35 | `https://www.deutsche-depressionshilfe.de/media/342/download/Barometer%20Depression_Grafikband%20zum%20Download.pdf?v=1` | PDF | `je-nach-rolle › quellen` | Deutschland-Barometer Depression 2018, Grafikband (PDF, 0,9 MB) |
| 36 | `https://doi.org/10.1111/j.1743-6109.2012.02709.x` | DOI | `je-nach-rolle › quellen` | Atlantis E, Sullivan T (2012): Bidirectional association between depression and sexual d … |
| 37 | `https://doi.org/10.1097/JCP.0b013e3181a5233f` | DOI | `je-nach-rolle › quellen` | Serretti A, Chiesa A (2009): Treatment-emergent sexual dysfunction related to antidepres … |
| 38 | `https://doi.org/10.1097/YCO.0b013e3283642de7` | DOI | `je-nach-rolle › quellen` | Bodenmann G, Randall AK (2013): Close relationships in psychiatric disorders. Current Op … |
| 39 | `https://doi.org/10.1093/schbul/sbt114` | DOI | `je-nach-rolle › quellen` | Rasic D, Hajek T, Alda M, Uher R (2014): Risk of mental illness in offspring of parents … |
| 40 | `https://doi.org/10.1016/S2215-0366(15)00358-2` | DOI | `je-nach-rolle › quellen` | Collishaw S, Hammerton G, Mahedy L, et al. (2016): Mental health resilience in the adole … |
| 41 | `https://doi.org/10.1111/scs.12285` | DOI | `je-nach-rolle › quellen` | Dam K, Hall EOC (2016): Navigating in an unpredictable daily life: a metasynthesis on ch … |
| 42 | `https://doi.org/10.35190/d2021.4.5` | DOI **geändert** | `je-nach-rolle › quellen` | Albermann K, Müller B (2021): Kinder und Jugendliche aus Familien mit einem psychisch er … |
| 43 | `https://doi.org/10.1186/s40359-025-03923-2` | DOI | `je-nach-rolle › quellen` | Kika N, Lambert J, Higson-Sweeney N, et al. (2026): Parents' experiences of their adoles … |
| 44 | `https://doi.org/10.1111/famp.13087` | DOI | `je-nach-rolle › quellen` | Greally S, Oute J, McPherson S (2025): Experiences of parents of children with mental il … |
| 45 | `https://doi.org/10.1111/scs.12074` | DOI | `je-nach-rolle › quellen` | Johansson A, Andershed B, Anderzen-Carlsson A (2014): Conceptions of mental health care … |
| 46 | `https://doi.org/10.1017/S0033291723001733` | DOI | `je-nach-rolle › quellen` | Jayasinghe A, Wrobel A, Filia K, et al. (2023): Distress, burden, and wellbeing in sibli … |
| 47 | `https://doi.org/10.1177/00048674221123481` | DOI | `je-nach-rolle › quellen` | Jayasinghe A, Wrobel A, Filia K, et al. (2023): Psychological distress in siblings of pe … |
| 48 | `https://doi.org/10.1038/s41380-024-02650-1` | DOI | `je-nach-rolle › quellen` | Rhee SJ, Abrahamsson L, Sundquist J, et al. (2025): The risks for major psychiatric diso … |
| 49 | `https://www.mhfa.com.au/wp-content/uploads/2023/12/MHFA_Depression-Guidelines.pdf` | PDF | `begleiten › quellen`; `fuer-sich-sorgen › quellen` | Mental Health First Aid Australia: Depression: Mental Health First Aid Guidelines (revis … |
| 50 | `https://doi.org/10.1186/s40359-019-0310-3` | DOI | `begleiten › quellen` | Bond KS, Cottrill FA, Blee FL, et al. (2019): Offering mental health first aid to a pers … |
| 51 | `https://www.wie-gehts-dir.ch/darueber-reden/ich-mache-mir-sorgen-um-jemanden-im-privaten-umfeld-1` | Seite | `begleiten › quellen`; `rechte-und-angebote › angebote` | wie-gehts-dir.ch: Ich mache mir Sorgen um jemanden |
| 52 | `https://doi.org/10.1017/S0033291714001299` | DOI | `begleiten › quellen` | Dazzi T, Gribble R, Wessely S, Fear NT (2014): Does asking about suicide and related beh … |
| 53 | `https://www.leitlinien.de/themen/depression/version-3/kapitel-2` | Seite | `begleiten › quellen` | Nationale VersorgungsLeitlinie Unipolare Depression, Version 3.2, Kapitel 2.7 |
| 54 | `https://www.leitlinien.de/themen/depression/version-3/kapitel-12` | Seite **neu** | `begleiten › quellen` | Nationale VersorgungsLeitlinie Unipolare Depression, Version 3.2, Kapitel 12.1 |
| 55 | `https://doi.org/10.1192/bjo.2022.543` | DOI | `fuer-sich-sorgen › quellen` | Katsuki F, Watanabe N, Yamada A, Hasegawa T (2022): Effectiveness of family psychoeducat … |
| 56 | `https://doi.org/10.1186/s12888-018-1788-6` | DOI | `fuer-sich-sorgen › quellen` | Katsuki F, Takeuchi H, Inagaki T, et al. (2018): Brief multifamily psychoeducation for f … |
| 57 | `https://doi.org/10.3390/jcm15114118` | DOI | `fuer-sich-sorgen › quellen` | Ipsen IS, Csillag C, Austin SF, Vinberg M (2026): Who benefits from family psychoeducati … |
| 58 | `https://doi.org/10.1055/s-2006-940081` | DOI | `fuer-sich-sorgen › quellen` | Schomerus G, Heider D, Wittmund B, et al. (2007): Gruppenintervention zur Unterstützung … |
| 59 | `https://doi.org/10.1016/j.lanepe.2025.101560` | DOI | `fuer-sich-sorgen › quellen` | Schramm E, Zehender N, Breuninger C, et al. (2026): Efficacy of an online self-help prog … |
| 60 | `https://doi.org/10.1111/inm.13295` | DOI | `fuer-sich-sorgen › quellen` | Zhang X, Ren H, Wang C, et al. (2024): The effect of mindfulness-based interventions on … |
| 61 | `https://doi.org/10.1002/14651858.CD004188.pub3` | DOI | `fuer-sich-sorgen › quellen` | Barbato A, D'Avanzo B, Parabiaghi A (2018): Couple therapy for depression. Cochrane Data … |
| 62 | `https://www.pukzh.ch/patienten-angehoerige/informationen-fuer-angehoerige/` | Seite | `rechte-und-angebote › angebote` | Informationen für Angehörige auf pukzh.ch |
| 63 | `https://www.vaskzuerich.ch/de/` | Seite | `rechte-und-angebote › angebote` | vaskzuerich.ch |
| 64 | `https://www.selbsthilfezuerich.ch/shzh/de/selbsthilfe-gesucht/gruppenliste.html` | Seite | `rechte-und-angebote › angebote` | selbsthilfezuerich.ch |
| 65 | `https://stand-by-you.ch/kontakt/` | Seite | `rechte-und-angebote › angebote` | stand-by-you.ch |
| 66 | `https://promentesana.ch/angebote/beratung/beratung-fuer-betroffene-nahestehende` | Seite | `rechte-und-angebote › angebote` | promentesana.ch |
| 67 | `https://promentesana.ch/angebote/weiterbildung/rechtskurse` | Seite **neu** | `rechte-und-angebote › angebote` | Rechtskurse auf promentesana.ch |
| 68 | `https://www.depressionen.ch/` | Seite | `rechte-und-angebote › angebote` | depressionen.ch |
| 69 | `https://www.fedlex.admin.ch/eli/cc/54/757_781_799/de` | Seite | `rechte-und-angebote › quellen` | Schweizerisches Strafgesetzbuch, Art. 321 |
| 70 | `https://www.zh.ch/de/politik-staat/gesetze-beschluesse/gesetzessammlung/zhlex-ls/erlass-813_13-2004_04_05-2005_01_01-083.html` | Seite | `rechte-und-angebote › quellen` | Patientinnen- und Patientengesetz des Kantons Zürich (LS 813.13), §§ 2a, 15 Abs. 2, 19 |
| 71 | `https://www.bag.admin.ch/dam/de/sd-web/eSd9x08yOl9G/bag-broschuere-angehoerige-von-suizidgefaehrdeten-personen-unterstuetzen-empfehlungen-fuer-fachpersonen.pdf` | PDF | `rechte-und-angebote › quellen` | BAG: Angehörige von suizidgefährdeten Personen unterstützen, Empfehlungen für Fachperson … |
| 72 | `https://www.fedlex.admin.ch/eli/cc/24/233_245_233/de` | Seite | `rechte-und-angebote › quellen` | Schweizerisches Zivilgesetzbuch, Art. 370 ff. |
| 73 | `https://promentesana.ch/akzente/rechte-von-angehoerigen-im-psychiatrischen-zwangskontext` | Seite | `rechte-und-angebote › quellen` | Pro Mente Sana: Rechte von Angehörigen im psychiatrischen Zwangskontext |
