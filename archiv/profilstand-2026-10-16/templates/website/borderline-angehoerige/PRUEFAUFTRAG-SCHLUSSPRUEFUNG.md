# Prüfauftrag · Borderline-Website · Schlussprüfung (Entwurf zur Bestätigung)

Stand 12.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`, Stand `f1d6572`. Für eine **Prüfsitzung**.

**Entwurf:** Die bauende Sitzung der Etappen «Freigabe 2c und 3-1» und 3-2 hat diesen Auftrag auf Wunsch der Fachstelle vorbereitet. Er legt nur Umfang, Bezugsstände, Vorgehen und Form fest, keine erwarteten Ergebnisse. Gültig wird er, wenn die Fachstelle ihn bestätigt oder ändert.

## 1. Anlass

- **Alle Seiten sind fachlich freigegeben:** Etappe 1 und 2a am 10.10.2026, 2b am 11.10.2026, 2c und 3-1 am 12.10.2026 (`PRUEFBERICHT.md` › «Fachliche Freigabe der Fachstelle»).
- **Etappe 3-2:** Die React-Fassung ist gesichert, der Entwurfs-Export liegt im Repository `borderline-angehoerige` (PR #659, nicht gemergt). Die Netlify-Vorschau hat bisher nur die bauende Sitzung geprüft (Selbstprüfung «Etappe 3-2»).
- **Was die Freigaben vor der Veröffentlichung verlangen:**
  - die Schlussprüfungen W2, S, Visualisierungs-Check, Bedienung und Barrierefreiheit und W3
  - darin unabhängige Prüfungen der Korrekturen 2a-K und 2a-2, der Korrekturen 2b-K und 2b-2 und der Anpassungen aus `FREIGABE-ETAPPE-2B.md` und `FREIGABE-ETAPPE-2C-3-1.md`
  - Z31-W3-2: das Verhalten der Weiterleitungen auf Netlify
- **Nicht Teil dieses Auftrags:**
  - R1 bis R3 (eigener Auftrag nach der Korrektur)
  - die rechtliche Prüfung von Impressum und Datenschutz und die Bestätigung der Ausgabe von «Schluss mit dem Eiertanz» am Buch (NK-F-3), beides bei der Fachstelle
  - reale Screenreader-Läufe, Hardwaretastatur und Touch (Abschnitt 5.5)

## 2. Wer prüft

- **Ausgeschlossen** ist jede Sitzung, die an dieser Website gebaut, korrigiert, entschieden oder geprüft hat, auch die Sitzung, die diesen Auftrag vorbereitet hat.
- **Zwei unabhängige Prüfungen** (empfohlen nach «Prüfung und Freigabe», Prüftiefe; in Prüfrunde 3-1 fand die zweite Prüfung 24 Befunde, die die erste nicht hatte):
  - **Prüfung 1:** IDs mit Präfix «SP1-»
  - **Prüfung 2:** IDs mit Präfix «SP2-». Sie liest weder Branch noch Bericht von Prüfung 1.
  - **Zusammenführung:** die Sitzung von Prüfung 2, erst wenn beide Berichte fertig sind; IDs «SPZ-», jeder Befund nennt seine Quelle (Prüfung 1, 2 oder beide).
- Entscheidet die Fachstelle sich für nur eine Prüfung, entfallen Präfix-Nummer und Zusammenführung; IDs «SP-».

## 3. Gegenstand und Bezugsstände

**Seiten (17):** `index`, `verstehen`, `beziehungen`, `grenzen` (Etappe 1) · `rolle`, `selbstfuersorge` (2a) · `kommunizieren`, `krise` (2b) · `genesung`, `unterstuetzung`, `diagnose`, `behandlung` (2c) · `fragen`, `quellen`, `ueber`, `impressum-datenschutz` (3-1) · `404`.

**Abbildungen (10, alle fachlich freigegeben):** `v-vs-eisberg`, `v-vs-anspannung`, `v-vs-bewertungen` (`verstehen`) · `v-bz-schleife`, `v-bz-sichten` (`beziehungen`) · `v-gr-dear` (`grenzen`) · `v-ro-weg` (`rolle`) · `v-sf-abend` (`selbstfuersorge`) · `v-ko-tassen` (`kommunizieren`) · `v-ge-trieb` (`genesung`). Dazu 99 Textzeilen des Visualisierungsplans (`site.config.json` › `pages[].visualPlan`).

| Was | Stand | Ansehen |
| --- | --- | --- |
| Website, geprüfter Stand | `borderline-umbau` `f1d6572`; Inhalte gleich wie `f78aae9` (seither nur Prüfbericht und Plan) | Arbeitsbaum |
| Bestand der alten Website | Branch `borderline-bestand`, Ordner `bestand/borderline-angehoerige/` (Commit `5c8471c` der alten Website) | `texte/`, `INVENTAR.md` |
| Freigabestand Etappe 1 | `540c37d`, dazu Korrektur 1j (`67495c0`) | `git diff --word-diff 540c37d f1d6572 -- <seite>` |
| Korrektur 2a-K | Auftrag `KORREKTUR-ETAPPE-2A.md`, Commit `8d33dbb` | `git show 8d33dbb` |
| Korrektur 2a-2 | Auftrag `KORREKTUR-ETAPPE-2A2.md`, Commit `416f6d0` (Freigabestand 2a) | `git show 416f6d0` |
| Korrektur 2b-K | Auftrag `KORREKTUR-ETAPPE-2B.md`, Commit `c0b312c`; Nachprüfung 2b-K im Bericht | `git show c0b312c` |
| Korrektur 2b-2 | Auftrag `KORREKTUR-ETAPPE-2B2.md`, Commit `31215a8` | `git show 31215a8` |
| Anpassungen Freigabe 2b | Auftrag `FREIGABE-ETAPPE-2B.md`, Commit `7925eaf` | `git show 7925eaf` |
| Anpassungen Freigabe 2c und 3-1 | Auftrag `FREIGABE-ETAPPE-2C-3-1.md`, vorher `55e98cb`, nachher `f78aae9` (PR #42) | `git diff 55e98cb f78aae9` |
| Export und Netlify | Repository `christaegger-dot/borderline-angehoerige`, Branch `umzug-puk-profil-1791821335`, Commit `34a2e58`, PR #659 (nicht gemergt); Sicherung `react-archiv` (`f46038b`) | Vorschau `https://deploy-preview-659--borderline-angehoerige.netlify.app` |

**Zugang:** Das Repository `borderline-angehoerige` nur lesend hinzufügen. Für die Vorschau braucht die Umgebung die Netzwerkfreigabe für `*.netlify.app`. Ist im Netlify-Projekt die Team-Anmeldung für Vorschauen eingeschaltet, entscheidet die Fachstelle, ob und wie lange sie für die Prüfung ausgeschaltet wird; sonst gilt Abschnitt 5.6 d als nicht prüfbar.

## 4. Regeln

- **Nichts ändern ausser dem Prüfbericht.** Keine Inhalte, kein Code, keine Werkzeuge, kein Abgleich. Im Repository `borderline-angehoerige` nichts pushen, keinen PR mergen. Keine Netlify-Einstellung ändern.
- **Je Punkt Ergebnis und Beleg:** Seite und Abschnitt, Figur, Zitat, oder Befehl mit Ausgabe. Ein Punkt ohne Beleg gilt als nicht geprüft; ein Gesamturteil ersetzt keine Einzelprüfung.
- **Zahlen nachrechnen, nicht übernehmen:** Wortzahlen, Kürzungsquoten, Regel- und Linkzahlen, Messungen der bauenden Sitzungen mit eigenen Skripten, zusätzlich zu den Werkzeugen des Projekts.
- **Selbstprüfungen und frühere Prüfrunden** zeigen, was zu prüfen ist. Als Beleg gelten sie nicht.
- **Fachliche Fragen** als «Prüfbedarf» markieren und unter «Fragen an die Fachstelle» sammeln. Fachliche Freigaben trägt nur die Fachstelle ein.
- **Status:** Eine Stufe nur auf «erledigt» setzen, wenn alle Punkte mit Beleg geprüft sind und kein Befund offen bleibt. W1 bleibt «offen», solange die rechtliche Prüfung und NK-F-3 offen sind.
- **Gewicht:** «wichtig» (vor der Veröffentlichung zu beheben oder zu entscheiden) oder «optional».

## 5. Was zu prüfen ist

### 5.1 W1 · unabhängige Prüfung der Korrekturen und Anpassungen

Kriterien: «Fachliche Qualität und Haltung».

1. **Je Auftrag** (2a-K, 2a-2, 2b-K, 2b-2, Anpassungen Freigabe 2b, Anpassungen Freigabe 2c und 3-1):
   - Ist jeder Punkt im Wortlaut des Auftrags umgesetzt? Beleg: Diff und Zitat.
   - Gibt es Änderungen ausserhalb des Auftrags?
   - Ist dabei eine fachliche Aussage still entfallen oder ohne Freigabe neu dazugekommen? Abgleich in `abgleich/` und Listen «Neue Sätze zur Freigabe» prüfen.
2. **Freigabestände gegen heute:** Für jede Seite zeigt `git diff --word-diff <Freigabestand> f1d6572` nur Änderungen, die auf einen Auftrag zurückgehen. Die Freigabestände stehen im Abschnitt «Fachliche Freigabe der Fachstelle».
3. **Bestand:** mindestens 20 Aussagen je Etappe (1, 2a, 2b, 2c, 3-1, also mindestens 100), über Seiten und Figuren verteilt, mit dem Bestand vergleichen; an diesen Stellen den Abgleich Satz für Satz prüfen.
4. **Zuständigkeit:**
   - keine Telefonnummer, kein `tel:`, kein Notfallblock, keine Seite «Hilfe in der Krise»
   - jeder Verweis im Text (`data-responsibility-inline`) steht direkt nach einer Handlungsanleitung für akute Lagen, im Wortlaut aus `responsibility.inline`
   - der site-weite Verweis in der Fusszeile jeder Seite
5. **Haltung:** Ansatzpunkte beschreiben eigene Möglichkeiten der Angehörigen, nie Verantwortung für Behandlung oder Verlauf. Keine absolute Aussage über die betroffene Person, kein Heilungsversprechen.
6. **Offene Fragen aller Runden:** feststellen, welche Fragen an die Fachstelle noch offen sind, mit Beleg.

### 5.2 W2 · Gesamtkohärenz

Kriterien: «Gesamtkohärenz und Aufbau». Die ganze Website:

- Ziel und Aufbaulogik, Reihenfolge der Seiten
- Navigation: Hauptpunkte, Erreichbarkeit jeder Seite von `index` aus (Zahl der Seitenwechsel)
- Begriffe einheitlich über alle Seiten, auch gegen die Begriffe auf `quellen`
- Quereinstieg: Jede Seite ist ohne die vorherige verständlich.
- Verweissätze: Ziel vorhanden, Linktext gleich dem Titel des Ziels
- Doppelungen und Lücken zwischen den Seiten
- Quellenblöcke: «Verwendet in» stimmt mit den Abschnitten überein

### 5.3 S · Sprach-Review

Kriterien: «Sprache und Ton». Die ganze Website, auch die webspezifischen Texte (Navigation, Schaltflächen, Seite `404`, Meta-Beschreibungen, `alt`, `aria-label`, Fusszeile):

- Schweizer Hochdeutsch, «Sie», Guillemets, kein «ß»
- Verständlichkeit: Lesetest je Abschnitt
- Längen nachrechnen; geltende Entscheide: Für `fragen` gilt der Richtwert nicht (`KORREKTUR-ETAPPE-3-1.md`), für `ueber` und `impressum-datenschutz` gibt es keinen (NK-F-7)

### 5.4 Visualisierungs-Check

Kriterien: «Visuelle Wissensvermittlung», «Visualisierung umsetzen».

- **Matrix Prüfpunkt 1–17 × Figur** für die zehn Abbildungen
- **Textzeilen:** die 99 Textzeilen des Plans; je Zeile, ob Text die richtige Form ist
- **Ansehen:** jede Figur bei 1280 und 360 px, im Standard und im Theme «Hoher Kontrast», dazu bei 200 % Schrift
- **Bildsprache:** ein Bild, eine Idee; Beschriftung als Erleben aus Sicht von Menschen; keine Liste, die Bildteile übersetzt; keine Bauplan-Optik
- **Freundin-Test** je Figur
- **Textalternativen** und die drei Ebenen: Kernaussage, Erklärtext, Vertiefung; die Hauptaussage nie nur in der Vertiefung
- **Ansatzpunkte** bei Kreislauf, Prozess und Schichtenmodell (`entryPoint`)

### 5.5 Bedienung und Barrierefreiheit

Kriterien: «Barrierefreiheit und Test», «Interaktionskonzept». Alle 17 Seiten:

- Breiten 320 bis 1440 px, 200 % Seitenzoom, 200 % Schriftgrösse: kein waagrechter Überlauf, nichts abgeschnitten
- Tastatur: Reihenfolge, sichtbarer Fokus, Sprunglink, Vertiefungen und Akkordeons
- ohne Skript, reduzierte Bewegung, erzwungene Farben, Druck, Kontrast
- `node abgleich/bedienung.mjs` und eigene Skripte

**Nicht durch die Prüfsitzung:** mindestens zwei reale Screenreader-Läufe, Hardwaretastatur, Touch. Die Prüfsitzung hält sie als offen fest und schlägt ein kurzes Protokoll vor (Seiten, Aufgaben, Geräte), das die Fachstelle oder eine Testperson abarbeiten kann.

### 5.6 W3 · Code-Review (nur Review)

Kriterien: «Technische Qualität».

1. **Website-Ordner:** `site.config.json`, `content/`, gebaute Seiten, `borderline.css`, `starter.css`, `tools/`, `gate.html`, `_headers`, `_redirects`, `abgleich/*.mjs`. Werkzeuge selbst ausführen:
   - `node tools/build.mjs`, `node tools/gate.mjs --production`, `node tools/gate.mjs --selftest`
   - `node abgleich/pruefe-abgleich.mjs`, `node abgleich/kennzahlen.mjs`, `abgleich/verwendet-auf.mjs` in beiden Modi
   - `tools/` gegen den Starter (`templates/website/psychoeducation-site-starter/tools/`)
2. **Technik-Regeln:** keine externen Schriften, Skripte oder CDNs, kein Tracking, keine Inline-Skripte, keine `style`-Attribute, Farben nur über Tokens, Content-Security-Policy, `lang`-Auszeichnung.
3. **Export und Ziel-Repository:**
   - den Export selbst erzeugen (`node tools/export.mjs <ordner ausserhalb des Repositorys>`) und mit `site/` auf `umzug-puk-profil-1791821335` vergleichen
   - `_redirects` in `site/` gegen die Datei im Website-Ordner
   - `netlify.toml`, `README.md`, `.gitignore` im Stamm
   - Ist mit den React-Quellen etwas entfernt, das die neue Website braucht, z. B. eine Datei, auf die eine Regel zeigt?
   - `react-archiv` gleich wie `main`
4. **Netlify-Vorschau (Z31-W3-2 nachprüfen):**
   - die zehn Punkte der Liste «Etappe 3-2: Auf der Vorschau zu prüfen» und alle 85 Weiterleitungen selbst prüfen (Status, Ziel, Ziel antwortet)
   - Kopfzeilen gegen `_headers`, Konsole, Links im ausgelieferten HTML
   - die Bewertungen der bauenden Sitzung nachprüfen: «Pretty URLs», der Block, den Netlify auf Vorschauen einfügt, die PDF-Adresse in Kleinschreibung
5. **Datenschutz, Sicherheit, Performance:** Anfragen an fremde Adressen, lokale Schriften, Dateigrössen, Sicherheits-Header.

### 5.7 Selbstprüfungen bewerten

Jeden Punkt der Abschnitte «Entscheide der bauenden Sitzung (zur Prüfung)» und «Aufgefallen, nicht geändert» der Selbstprüfungen «Freigabe 2c und 3-1» und «Etappe 3-2» bewerten: kein Befund, Befund (mit ID) oder Frage an die Fachstelle; je mit Beleg.

## 6. Ergebnis im Prüfbericht

- **Ort:** ein neuer Block in `PRUEFBERICHT.md` über dem Block «Nachprüfung 2c-K und 3-1-K», Titel «Schlussprüfung (Datum, Stand f1d6572)» oder «Schlussprüfung · zweite Prüfsitzung (…)».
- **Aufbau:**
  - geprüfter Stand, Unabhängigkeit, Vorgehen
  - Ergebnis in Kürze
  - je Stufe ein Teil (5.1 bis 5.7) mit Ergebnis und Beleg je Punkt
  - Befunde als Tabelle: ID, Stufe, Gewicht, Befund, Beleg
  - Fragen an die Fachstelle
  - Zählung und Stand der Stufen
- **Statustabelle:** Spalten «Datum», «Geprüft durch» und «Ergebnis» der geprüften Stufen ergänzen.
- **Commit:** nur `PRUEFBERICHT.md`, auf einem eigenen Branch. Entwurfs-PR gegen `borderline-umbau`; die Beschreibung nennt die offenen Stufen.

## 7. Danach (nicht Teil dieses Auftrags)

1. Zusammenführung der beiden Prüfungen (Sitzung von Prüfung 2)
2. Entscheide der Fachstelle zu den Fragen, Korrekturauftrag, Korrektur durch eine bauende Sitzung
3. Nachprüfung durch eine Sitzung, die weder gebaut, noch geprüft, noch entschieden hat
4. reale Screenreader-Läufe, Hardwaretastatur, Touch; rechtliche Prüfung; NK-F-3
5. R1, R2 und zuletzt R3 mit «Go» oder «No-Go» (`guidelines/00-pre-release-audits.md`)
6. Export mit `--production` auf den Branch von #659, Netlify-Einstellungen, Merge von #659, Prüfung der Produktion

## 8. Startnachricht für die Prüfsitzung

Für Prüfung 1, in einer neuen Sitzung im selben Repository:

```
Prüfe die Website templates/website/borderline-angehoerige/ auf dem Branch
borderline-umbau (Stand f1d6572) nach PRUEFAUFTRAG-SCHLUSSPRUEFUNG.md im selben Ordner.
Du hast sie nicht gebaut und an ihr weder korrigiert, entschieden noch geprüft.
Du bist Prüfung 1 (IDs «SP1-»). Lies zuerst CLAUDE.md,
guidelines/00-ablauf-pruefung-und-freigabe.md und den Auftrag ganz.
Ändere keine Inhalte und keinen Code. Committe nur PRUEFBERICHT.md auf einem eigenen
Branch und öffne einen Entwurfs-PR gegen borderline-umbau.
```

Für Prüfung 2 dieselbe Nachricht mit «Du bist Prüfung 2 (IDs «SP2-»). Lies weder den Branch noch den Bericht von Prüfung 1.»
