# Entscheidauftrag · Borderline-Website · Fragen der Schlussprüfung (SPZ-F-1 bis -39)

Stand 12.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `main`, Stand `3a6e966` (nach Merge von PR #55 und #56; `borderline-umbau` ist in `main` aufgegangen, der Website-Ordner ist gleich wie in `4b8ee2a`). Für eine **Entscheidsitzung**.

## 1. Anlass und Delegation

- **Schlussprüfung abgeschlossen:** Die beiden Prüfungen und ihre Zusammenführung stehen in `PRUEFBERICHT.md`, im Block «Schlussprüfung · Zusammenführung der beiden Prüfsitzungen». Er enthält 60 Befunde (6 wichtig) und 39 Fragen an die Fachstelle (SPZ-F-1 bis -39).
- **Delegation:** Die Fachstelle hat am 12.10.2026 entschieden, dass Claude diese Fragen «selbständig anstelle der Fachstelle» beantwortet. Die Entscheidsitzung trifft die Entscheide also im Auftrag der Fachstelle. Sie kennzeichnet sie überall als «von Claude im Auftrag der Fachstelle entschieden (Delegation vom 12.10.2026)», nie als Entscheid einer Person.
- **Ziel:** Je Frage ein Entscheid mit Begründung und Beleg. Wo ein Entscheid etwas ändert, steht der genaue Wortlaut oder die genaue Handlung so da, dass eine bauende Sitzung ihn ohne Rückfrage in einen Korrekturauftrag übernehmen kann.

## 2. Wer entscheidet

- **Ausgeschlossen** ist jede Sitzung, die an dieser Website gebaut, korrigiert oder geprüft hat. Das gilt auch für die Sitzungen der Schlussprüfung 1 und 2 und der Zusammenführung sowie für die Sitzung, die diesen Auftrag vorbereitet hat.
- **Danach** ist die Entscheidsitzung von der Korrektur und der Nachprüfung ausgeschlossen. Nachprüfen darf nach «Prüfung und Freigabe» nur eine Sitzung, die weder gebaut, noch geprüft, noch entschieden hat.

## 3. Grundlagen (zuerst ganz lesen)

1. `CLAUDE.md`, `guidelines/00-ablauf-pruefung-und-freigabe.md`
2. die Leitlinien der Kriterien:
   - `guidelines/00-fachliche-qualitaet-und-haltung.md`
   - `00-gesamtkohaerenz-und-aufbau.md`
   - `00-sprache-und-ton.md`
   - `00-visuelle-wissensvermittlung.md`
   - `07-visualisierung-umsetzen.md`
   - `04-barrierefreiheit-und-test.md`
   - `00-technische-qualitaet.md`
3. `PRUEFBERICHT.md`:
   - Abschnitt «Fachliche Freigabe der Fachstelle» (geltende Entscheide)
   - der Block «Schlussprüfung · Zusammenführung …» ganz
   - je Frage die Belege in den Blöcken von Prüfung 1 («Schlussprüfung (12.10.2026, …)») und Prüfung 2 («Schlussprüfung · zweite Prüfsitzung»)
4. die früheren Entscheide der Fachstelle, als Massstab für ihre Haltung: `FREIGABE-ETAPPE-2A.md`, `FREIGABE-ETAPPE-2B.md`, `FREIGABE-ETAPPE-2C-3-1.md`, `KORREKTUR-ETAPPE-*.md`
5. der Bestand: Branch `borderline-bestand`, `bestand/borderline-angehoerige/texte/` und `INVENTAR.md`; dazu `abgleich/<seite>.md` und `UMBAUPLAN.md`

## 4. Massstäbe für die Entscheide

1. **Bestehende Entscheide gelten.** Hat die Fachstelle eine Frage schon entschieden (Freigaben, Korrekturaufträge), gilt das. Die Entscheidsitzung bestätigt es mit Beleg und entscheidet nicht neu.
2. **Fachliche Vorsicht vor Kürze.** Wo der Bestand eine Aussage absicherte oder entlastete und die neue Fassung das verloren hat (z. B. SPZ-F-4, -5, -8), gilt im Zweifel der Wortlaut des Bestands. Er wird wörtlich übernommen, nicht neu formuliert. Zu entscheiden ist nur, ob und wo er steht.
3. **Keine neue fachliche Aussage ohne Quelle.** Neue Sätze stützen sich auf eine Quelle, die auf `quellen` steht, oder auf den Bestand. Jeder neue oder geänderte Satz kommt in eine Liste «Neue Sätze zur Freigabe» des Entscheids.
4. **Freigegebene Seiten nur so weit ändern, wie die Frage es verlangt.** Lieber keine Änderung mit Begründung als eine Umformulierung «bei der Gelegenheit».
5. **Profil vor Website.** Betrifft eine Frage Starter, Tokens oder Komponenten (z. B. SPZ-F-34, Teile von -32), heisst der Entscheid: «Profilebene: Änderung im Design-System-Artefakt, in dieser Website keine.» Dazu kommt ein Vorschlag für das Profil. Leitlinien und Komponenten werden hier nicht geändert (`CLAUDE.md`).
6. **Haltung und Zuständigkeit.** Kein Krisenzugang, keine Telefonnummer. Ansatzpunkte beschreiben eigene Möglichkeiten der Angehörigen, nie Verantwortung für Behandlung oder Verlauf. Keine absolute Aussage über Betroffene.
7. **Bildsprache:** «Ein Bild, eine Idee», Freundin-Test. Ändert ein Entscheid eine Abbildung, beschreibt er die Änderung genau. Die neue Fassung braucht dann eine erneute Freigabe; die Entscheidsitzung trägt sie nach der Nachprüfung im Auftrag der Fachstelle ein.

## 5. Was die Entscheidsitzung nicht entscheiden oder nicht tun kann

Die Entscheidsitzung hält diese Punkte fest, entscheidet aber nicht endgültig und führt nichts aus.

| Frage | Grund | Was die Entscheidsitzung tut |
| --- | --- | --- |
| SPZ-F-13 (Cookies), SPZ-F-14 (Urheberrecht) | rechtliche Fragen; die rechtliche Prüfung von Impressum und Datenschutz ist ausdrücklich offen | einen Wortlaut vorschlagen und entscheiden: «in die rechtliche Prüfung aufnehmen»; bis dahin bleibt der heutige Text |
| SPZ-F-33 (reale Tests) | Claude kann keine realen Screenreader-, Tastatur-, Touch- und Kontrastmodus-Tests durchführen | Umfang und Protokoll festlegen (Vorlagen in Teil 5.5 beider Prüfungen), dazu den Hinweis, dass eine Person die Tests durchführt; Person und Termin bleiben offen |
| SPZ-F-35, -36, -37 (Netlify) | Handlungen ausserhalb dieses Repositorys | entscheiden, was gelten soll, und die Handlung Schritt für Schritt beschreiben (Liste «Handlungen für die Fachstelle»). Keine Netlify-Einstellung ändern, im Repository `borderline-angehoerige` nichts ändern, PR #659 nicht anfassen |
| SPZ-F-1 (Bestätigung des Prüfauftrags) | betrifft die Fachstelle selbst | festhalten, dass der Prüfauftrag mit der Delegation vom 12.10.2026 als bestätigt gilt, und auf diesen Auftrag verweisen |

Ausdrücklich nicht Teil dieses Auftrags sind die rechtliche Prüfung, NK-F-3 (Ausgabe von «Schluss mit dem Eiertanz»), die Korrektur selbst und R1 bis R3.

## 6. Die Fragen

Die Fragen stehen im Block der Zusammenführung, Tabelle «Fragen an die Fachstelle zusammengeführt». Für die Reihenfolge der Arbeit:

| Gruppe | Fragen |
| --- | --- |
| A · Verfahren und Status | SPZ-F-1, -2, -3, -15 |
| B · Fachliche Aussagen (Prüfbedarf) | SPZ-F-4 bis -12, -16, -17, -20, -21, -23 |
| C · Quellen, Verweise, Aufbau | SPZ-F-18, -19, -22 |
| D · Abbildungen | SPZ-F-24 bis -31 |
| E · Bedienung und Profil | SPZ-F-32, -33, -34 |
| F · Rechtliches | SPZ-F-13, -14 |
| G · Netlify und Veröffentlichung | SPZ-F-35 bis -39 |

**Hinweise zu einzelnen Fragen:**
- **SPZ-F-2 (Fusszeile):**
  - Wortlaut für `editorialStatus` festlegen, mit Datum, z. B. «Fachlich freigegeben am … (Fachstelle Angehörigenarbeit PUK)».
  - Das Profil verlangt ein Prüfdatum.
  - Festlegen, dass der Wert vor dem Export mit `--production` gesetzt wird.
  - Gehört zum wichtigen Befund SPZ-1.
- **SPZ-F-4, -5:** Diese Fragen gehören zu den wichtigen Befunden SPZ-4 und SPZ-5. Bei «entfällt» braucht es je eine Abgleichzeile mit Grund.
- **SPZ-F-24, -31:** «Ein neuer Trieb» ist freigegeben. Eine Änderung des Bildes braucht eine neue Freigabe (Massstab 7).
- **SPZ-F-35:** Den Entscheid mit SPZ-58 abstimmen (Codex P1). Wird «Pretty URLs» ausgeschaltet, muss die Vorschau neu geprüft werden.
- **SPZ-F-38 (PR #659):** Bereits umgesetzt. Auf Wunsch der Fachstelle ist `christaegger-dot/borderline-angehoerige#659` seit 12.10.2026, 18:19 UTC wieder ein Entwurf; nachgeprüft: `"draft":true`, ungemergt. Die Entscheidsitzung entscheidet nicht neu. Sie trägt «erledigt durch die Fachstelle» mit Beleg ein und hält fest, dass der PR ein Entwurf bleibt, bis R3 «Go» ergibt (`CLAUDE.md`: «Solange Stufen offen sind, bleibt er ein Entwurf»). Damit ist auch der wichtige Befund SPZ-6 behoben; die Nachprüfung bestätigt das.

**Zu den wichtigen Befunden ohne Frage** (SPZ-2, SPZ-3: Eisberg und Schleife bei grosser Schrift): Sie sind technisch und brauchen keinen fachlichen Entscheid. Die Entscheidsitzung bestätigt nur, dass sie in die Korrektur gehören, und nennt die Leitregel: «Figuren mit frei platzierten Beschriftungen wechseln bei grosser Schrift in die Listenansicht», Profilentscheid 11.10.2026.

## 7. Regeln

- **Nur zwei Dateien ändern:**
  - `ENTSCHEIDE-SCHLUSSPRUEFUNG.md` im Website-Ordner (neu)
  - `PRUEFBERICHT.md`: neuer Unterabschnitt «Entscheide zur Schlussprüfung (12.10.2026, im Auftrag der Fachstelle)» am Ende von «Fachliche Freigabe der Fachstelle»; die Statustabelle bleibt unverändert, jede Stufe bleibt «offen»

  Keine Inhalte, kein Code, keine Werkzeuge, kein Abgleich.
- **Je Entscheid ein Beleg:** Datei und Zeile, Zitat oder Befehl mit Ausgabe. Ein Entscheid ohne Begründung gilt als nicht getroffen.
- **Unsicherheit offen sagen:** Kann die Entscheidsitzung eine fachliche Frage nicht verantwortbar entscheiden, setzt sie «zurück an die Fachstelle» mit Grund. Dazu gehören etwa Aussagen, die über Bestand und Quellen hinausgehen. Lieber drei offene Fragen als ein geratener Entscheid.
- **Commit:** auf einem eigenen Branch (`entscheide-schlusspruefung`), Entwurfs-PR gegen `main`. Die Beschreibung nennt:
  - die Zahl der Entscheide je Art (keine Änderung, Änderung im Wortlaut, Profilebene, Handlung der Fachstelle, rechtliche Prüfung, zurück an die Fachstelle)
  - die offenen Stufen

## 8. Ergebnis

### `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`

1. **Kopf:** Stand, Delegation (Wortlaut), Unabhängigkeit, gelesene Grundlagen.
2. **Entscheide** als Tabelle: | ID | Frage (kurz) | Entscheid | Begründung und Beleg | Art | Folge für die Korrektur |
   - **Art:** «keine Änderung», «Änderung», «Profilebene», «Handlung der Fachstelle», «rechtliche Prüfung» oder «zurück an die Fachstelle»
3. **Wortlaute:** je Änderung Seite › Abschnitt, Wortlaut heute, Wortlaut neu, Quelle (Bestand mit Datei und Zeile oder Quelle auf `quellen`).
4. **Neue Sätze zur Freigabe:** alle neuen oder geänderten Sätze, mit Liste und Freigabe im Auftrag der Fachstelle.
5. **Handlungen für die Fachstelle:** Netlify, PR #659, reale Tests, rechtliche Prüfung; je Schritt für Schritt, mit Reihenfolge vor oder nach der Korrektur.
6. **Folgen für den Korrekturauftrag:** die wichtigen Befunde SPZ-1 bis SPZ-6 und die optionalen Befunde, die nach den Entscheiden in die Korrektur gehören, je mit Befund-ID. Optionale Befunde, die bewusst nicht korrigiert werden, mit einem Satz Grund.
7. **Zählung:** Entscheide je Art; Fragen, die zurück an die Fachstelle gehen.

### `PRUEFBERICHT.md` › «Fachliche Freigabe der Fachstelle»

Ein Unterabschnitt mit:
- Datum und Delegation
- Verweis auf `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`
- Liste der entschiedenen und der offenen Fragen
- dem Satz: «Fachliche Entscheide im Auftrag der Fachstelle durch Claude; nicht von einer Person der Fachstelle geprüft.»

## 9. Danach (nicht Teil dieses Auftrags)

1. Korrekturauftrag aus Abschnitt 6 der Entscheide, Korrektur durch eine bauende Sitzung
2. Nachprüfung durch eine Sitzung, die weder gebaut, noch geprüft, noch entschieden hat
3. Handlungen der Fachstelle (Netlify, PR #659), reale Tests, rechtliche Prüfung, NK-F-3
4. R1, R2 und zuletzt R3 mit «Go» oder «No-Go»

## 10. Startnachricht für die Entscheidsitzung

```
Entscheide die Fragen SPZ-F-1 bis SPZ-F-39 der Schlussprüfung der Website
templates/website/borderline-angehoerige/ auf dem Branch main (Stand 3a6e966)
nach ENTSCHEIDAUFTRAG-SCHLUSSPRUEFUNG.md im selben Ordner. Die Fachstelle hat dir diese
Entscheide am 12.10.2026 übertragen («selbständig anstelle der Fachstelle»). Du hast an der
Website weder gebaut, korrigiert noch geprüft. Lies zuerst CLAUDE.md,
guidelines/00-ablauf-pruefung-und-freigabe.md und den Auftrag ganz.
Ändere keine Inhalte und keinen Code. Committe nur ENTSCHEIDE-SCHLUSSPRUEFUNG.md und den
Eintrag in PRUEFBERICHT.md auf dem Branch entscheide-schlusspruefung und öffne einen
Entwurfs-PR gegen main.
```
