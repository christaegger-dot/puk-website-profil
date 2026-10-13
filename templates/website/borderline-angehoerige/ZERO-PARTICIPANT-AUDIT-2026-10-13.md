# Zero-Participant-Audit und Umsetzung

Stand: 13.10.2026  
Prüfobjekt: https://borderline-angehoerige.netlify.app/  
Methode: adversariales Aufgaben-, Such-, Kohärenz-, Inhalts- und technisches Audit ohne Testpersonen

## Aussagegrenze

Dieses Audit ersetzt keine Nutzerforschung, keine reale Screenreader-Prüfung und keine unabhängige klinische oder juristische Beurteilung. Es belegt innere Konsistenz, technische Funktionsfähigkeit und die Ergebnisse der dokumentierten Szenarioprüfung. Aussagen über tatsächliche Verständlichkeit, emotionale Wirkung oder Wirksamkeit bei belasteten Personen bleiben Hypothesen.

## Ausgangsbefunde

| Befund | Status | Fundstelle vor der Änderung | Auswirkung |
| --- | --- | --- | --- |
| Die Startseite bezeichnete die Zielgruppe allgemein als Angehörige von Menschen mit psychischen Erkrankungen, während Angebot und Inhalte Borderline-spezifisch sind. | überprüft | `index#kopf` | unklarer Angebotsumfang |
| Die Startseite mischte unmittelbare Handlungsanliegen und Wissensaufgaben in einer gleichwertigen Liste. Diagnose und Behandlung fehlten als direkte Einstiege. | überprüft | `index#einstiege` | hohe Auswahlbelastung und unvollständige Aufgabenabdeckung |
| Die Suche filterte nur 15 manuell formulierte Seitenzusammenfassungen. Vorhandene Inhalte zu «Einweisung», «Meldepflicht», «Notfall», «Polizei», «Dolmetschen», «Eltern» und «Jugendliche» ergaben keinen Treffer. | überprüft | `suche#seitensuche`, frühere Fassung | vorhandene Inhalte waren mit der Alltagssprache nicht zuverlässig auffindbar |
| Suche, Glossar und Quellen erschienen strukturell unter der Hauptkategorie «Häufige Fragen». | überprüft | Navigation und Breadcrumbs | Kategorie und Inhaltsebene stimmten nicht überein |
| Der Breadcrumb «Alltag und Beziehungen» führte auf eine Seite mit dem H1 «Was zwischen Ihnen geschieht». | überprüft | `beziehungen#kopf` | Bereichsbezeichnung und Zielseite erzeugten unterschiedliche Erwartungen |
| Informationen für mitbetroffene Kinder lagen vollständig oder teilweise auf Rolle, Grenzen, Krise und FAQ. | überprüft | `rolle#kinder`, `grenzen#gewalt`, `krise#bleibt`, `fragen#schutz` | kein zusammenhängender Weg; erhöhtes Aktualisierungs- und Suchrisiko |
| Mehrere Kernseiten bleiben trotz progressiver Offenlegung umfangreich. | überprüft | insbesondere Rolle, Kommunikation, Selbstfürsorge, Behandlung und FAQ | tatsächliche kognitive Wirkung ist ohne Nutzende nicht belegbar |
| «Krisen begleiten» kann als persönliche Betreuungspflicht verstanden werden. | fachliche Hypothese | `krise#kopf` | mögliche zusätzliche Verantwortungszuschreibung; ohne empirischen Beleg nicht umbenannt |

## Umgesetzte Massnahmen

### 1. Aufgabenbezogene Startseite

- Zielgruppe eindeutig auf Borderline bezogen, ausdrücklich auch vor oder ohne gesicherte Diagnose.
- Trennung in «Was beschäftigt Sie im Moment?» und «Ich möchte etwas verstehen oder nachschlagen».
- Direkte Einstiege für Kinder, Diagnose, Behandlung sowie Fragen und Nachschlagen.
- Gesprächseinstieg führt direkt zum Abschnitt für kippende Gespräche.

### 2. Abschnittssuche

- Der Build erzeugt einen lokalen Index aus Seiten, Überschriften, Glossarbegriffen und Abschnittsinhalten.
- Suchtreffer führen möglichst direkt zu einem Abschnitt oder Glossarbegriff.
- Alternative Begriffe werden im Seitenvertrag gepflegt.
- Die Eingabe wird nicht übertragen oder gespeichert.
- Ohne JavaScript bleibt ein vollständiges Verzeichnis der Themenseiten sichtbar.
- 25 dokumentierte Suchszenarien: 25 bestanden; erwartete Fundstelle jeweils unter den ersten drei Treffern.
- 175 erzeugte lokale Suchziele wurden auf vorhandene Seiten und Anker geprüft.
- Browserprüfung bei 1280 und 360 CSS-Pixeln: 13 von 13 Prüfungen bestanden. Geprüft wurden die priorisierten Treffer für «DBT» und «Meldepflicht», Live-Status, horizontaler Überlauf, Laufzeitfehler, das automatische Öffnen und Fokussieren eines Glossar-Direktlinks sowie das Sprungziel auf der Kinderseite.

### 3. Konsistentere Bereichslogik

- Hauptbereich und H1 heissen einheitlich «Alltag und Beziehungen».
- Hauptbereich, Seitentitel und H1 heissen «Fragen und Nachschlagen»; Suche, Glossar und Quellen werden dort ausdrücklich angeboten.
- Die Website-Suche erscheint in der Bereichsnavigation.

### 4. Kanonischer Kinderweg

- Neue Seite `kinder.html` für Erklärung, Alltag und Betreuung, Eskalation und Gefahr sowie Unterstützung.
- Direkter Einstieg von der Startseite.
- Rolle, Grenzen, Krise und FAQ enthalten nur noch den unmittelbar nötigen Kontext und verlinken auf die kanonische Seite.
- Inhaltsverantwortungsmatrix entsprechend ergänzt.

### 5. Begriffliche und redaktionelle Governance

- `BEGRIFFSSYSTEM.md` legt die Verwendung zentraler Begriffe fest.
- Die Inhaltsverantwortungsmatrix nennt zusätzlich die kanonische Kinderseite und die Regel zur lokalen, nicht protokollierten Suche.
- Historischer Satzabgleich dokumentiert die vollständig restrukturierten Aufgabenbereiche transparent; die übrigen 7’412 Zeilen bleiben wörtlich geprüft.

## Szenarien

Das ausführbare Prüfskript `abgleich/zero-participant-audit.mjs` deckt 25 Anliegen ab:

1. Gespräch kippt
2. kurze Gesprächsgrenze
3. eigene Aufgabe klären
4. Nein sagen
5. Erschöpfung und Hilfe
6. Angehörigenberatung
7. Kind schützen
8. Meldepflicht
9. KESB und Kind
10. Suizidgedanken
11. Notfall
12. Polizei
13. Selbstverletzung
14. Einweisung
15. fürsorgerische Unterbringung
16. Schweigepflicht beim Behandlungsteam
17. Medikamente
18. DBT
19. kein Therapieplatz
20. Behandlung für Jugendliche
21. nicht geteilte Diagnose
22. Grenzen als Partnerperson
23. Dolmetschen
24. Gewalt
25. Trennung

Ein Szenario gilt als bestanden, wenn die vereinbarte Fundstelle unter den ersten drei Treffern erscheint. Dieser Test belegt die regelbasierte Auffindbarkeit, nicht die Wortwahl realer Nutzender.

## Bewusste Grenzen und offene Punkte

- Der institutionelle Entscheid gegen Krisennummern, `tel:`-Links und einen globalen Notfallblock bleibt unverändert. Die ursprünglichen Auditkriterien P0-01 und P0-02 sind deshalb weiterhin nicht formal erfüllt.
- «Krisen begleiten» bleibt vorerst bestehen, weil die mögliche Verantwortungswirkung ohne Nutzende nicht belegt ist und eine Umbenennung sicherheitsrelevante Erwartungen verändern könnte.
- Lange Seiten werden nicht allein aufgrund der Wortzahl weiter gekürzt. Weitere Kürzungen ohne Verständnisdaten könnten notwendige Differenzierungen entfernen.
- Reale Tests mit NVDA, VoiceOver, Hardwaretastatur, Touch und Hochkontrast bleiben nicht ersetzt.
- Eine WCAG-, ISO- oder Wirkungs-Gesamtkonformität wird nicht behauptet.

## Wiederholbare Akzeptanzkriterien

- Produktionsgate: 0 blockierende Befunde.
- Historischer Satzabgleich: 0 Zeilen ohne Fundstelle, ausser explizit dokumentierten vollständigen Aufgabenrestrukturierungen.
- Strukturierte Nutzerwege: alle bestanden; alle veröffentlichten Inhaltsseiten von der Startseite erreichbar.
- Zero-Participant-Suche: 25 von 25 Szenarien bestanden; alle erzeugten Suchanker vorhanden.
- Keine Übertragung oder Speicherung von Suchbegriffen.
- Kein `tel:`-Link und keine neu eingeführte Krisennummer.
- Kein horizontaler Überlauf bei 320 beziehungsweise 360 CSS-Pixeln.
- Sichtbarer Tastaturfokus auf jeder Seite.

## Ausgeführte Nachweise

| Nachweis | Ergebnis am 13.10.2026 |
| --- | --- |
| `node tools/build.mjs --production` | 21 Seiten; 0 blockierend; 1 bekannter Fehlalarm zur bibliografischen Seitenzahl 144 |
| `node tools/gate.mjs --production` | 0 blockierend; derselbe bekannte Hinweis |
| `node tools/gate.mjs --selftest` | 65/65 bestanden |
| `node abgleich/pruefe-abgleich.mjs` | 7’412 Zeilen; 0 ohne Fundstelle |
| `node abgleich/nutzerwege.mjs` | 8/8 Wege; 20/20 veröffentlichte Inhaltsseiten erreichbar |
| `node abgleich/zero-participant-audit.mjs` | 25/25 Szenarien; 175 Suchziele; 0 Fehler |
| `node abgleich/zero-participant-audit.mjs <export-ordner>` | derselbe Test auf dem eigenständigen Produktions-Export; verhindert einen leeren Export-Suchindex |
| `PW_CHROMIUM=/usr/bin/chromium node abgleich/bedienung.mjs` | alle 21 Seiten: Sprunglink erster Tabstopp; 0 Fokusstellen ohne sichtbaren Fokus |
| gezielte Chromium-Prüfung der neuen Suche und Direktlinks | 13/13 bestanden; 0 Laufzeitfehler; 0 horizontaler Überlauf bei 360 und 1280 CSS-Pixeln |
