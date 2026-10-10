# Prüfbericht · Depression: Informationen für Angehörige

Gehört zur Website in diesem Ordner (`templates/website/depression-angehoerige/`). Ohne vollständigen Prüfbericht blockiert `node tools/gate.mjs --production` die Veröffentlichung (Abschnitt «Prüfung und Freigabe»).

**Regeln**

- **Bauen und Prüfen sind getrennt.** Die Stufen unten prüft eine Sitzung oder Person, die die Website nicht gebaut hat. Die bauende Sitzung macht nur die Selbstprüfung (unten) und trägt keine Stufe als «erledigt» ein.
- **Jeder Punkt braucht einen Beleg** (Seite und Abschnitt, Figur, Zitat). Ein Punkt ohne Beleg gilt als nicht geprüft. Ein Gesamturteil ersetzt keine Einzelprüfung.
- **Kein Merge ohne Prüfbericht.** Ein Pull Request mit einer neuen oder geänderten Website enthält diesen Bericht im aktuellen Stand und verweist in der Beschreibung darauf.
- **Prüftiefe:** Kennzahlen der bauenden Sitzung werden nachgerechnet; der Visualisierungs-Check der Prüfsitzung steht je Figur in der Matrix unten. Eine zweite, unabhängige Prüfsitzung wird empfohlen; jeder Befund nennt seine Quelle.
- **Status:** «offen», «erledigt» oder «entfällt: Begründung». Fachliche Freigaben trägt nur die Fachstelle ein.

## Status

| Stufe | Status | Datum | Geprüft durch | Ergebnis |
| --- | --- | --- | --- | --- |
| W1 Fachliche Prüfung | offen | | | |
| W2 Gesamtkohärenz | offen | | | |
| S Sprach-Review | offen | | | |
| Visualisierungs-Check | offen | | | |
| Bedienung und Barrierefreiheit | offen | | | |
| W3 Code-Review | offen | | | |
| R1 Profil-Audit | offen | | | |
| R2 Visualisierung und Laienverständlichkeit | offen | | | |
| R3 Freigabe-Audit | offen | | | «Go», «Go mit Auflagen» oder «No-Go» |

## Grundlage und Arbeitsstand der bauenden Sitzung

- **Plan:** Claude Doc «Website Depression für Angehörige: Plan zur Freigabe», von der Fachstelle am 10.10.2026 freigegeben mit diesen Entscheiden: acht Seiten in der vorgeschlagenen Reihenfolge; Titel «Depression: Informationen für Angehörige»; eigene Abschnitte für erwachsene Kinder und für Freundinnen und Freunde; Abschnitt zu Suizidgedanken mit Lesepfad von der Startseite; **kein** Abschnitt zur fürsorgerischen Unterbringung; Link auf wie-gehts-dir.ch, nicht auf reden-kann-retten.ch; eigene Materialien (Partner-Heft, BipolarSite, BUE-Materialien) später; Inhaltsverantwortung «Ch. Egger, Fachstelle Angehörigenarbeit PUK».
- **Inhaltsgrundlage:** Recherchebericht «Depression bei Erwachsenen» (2026), Ergänzung «Ursachen, Formen, Männer und Frauen» und Dokument «Angehörige von Menschen mit Depression: Situation und Belastung» mit den unabhängig nachgeprüften Schlüsselzahlen (10.10.2026).
- **Status aller Texte:** Musterentwurf, sichtbar im Kopfbereich jeder Seite und in der Fusszeile («Musterentwurf, Stand 10.10.2026 – fachliche Prüfung ausstehend»).
- **Build und Gate (10.10.2026, bauende Sitzung):** `node tools/build.mjs` → 8 Seiten, 0 blockierende Befunde, 13 Hinweise (11 × Visualisierung nicht freigegeben, `siteUrl` fehlt, Prüfbericht offen). `node tools/gate.mjs --selftest` → 53/53.
- **Messungen der bauenden Sitzung (bitte nachrechnen):** kein horizontaler Überlauf bei 1280, 360 und 320 px auf allen acht Seiten (Playwright, `scrollWidth − clientWidth = 0`); Schaltfläche «Schritt für Schritt aufbauen» (Seite «Depression verstehen», Abbildung 2) per Tastatur auslösbar, Live-Region meldet «Schritt 1 von 3: Verletzlichkeit»; keine Hexwerte und keine `style`-Attribute in `content/`.
- **Bildschirmfotos** aller elf Figuren bei 1280 und 360 px wurden der Fachstelle im Chat gezeigt; sie sind als Arbeitsstand nicht im Repository.
- **Rückmeldung der Fachstelle zu den Bildern (10.10.2026, Ch. Egger):** «Die Bilder sind perfekt.» Bildsprache und Zeichnungen sind damit gutgeheissen. Die fachliche Freigabe der Figuren (`approvalStatus` im Visualisierungsplan) bleibt «ausstehend», bis W1 und S abgeschlossen sind, weil sich Kernaussagen und Beschriftungen in den Figuren dort noch ändern können.

### Abweichungen vom freigegebenen Plan

| Stelle | Plan | Umsetzung | Grund |
| --- | --- | --- | --- |
| Rechte und Angebote › `vorsorge` | Bezugsperson, Vertrauensperson, Patientenverfügung | Bezugsperson, Entbindung von der Schweigepflicht, Patientenverfügung | Die Vertrauensperson nach Art. 432 ZGB gilt bei fürsorgerischer Unterbringung; dieser Teil entfällt nach Entscheid der Fachstelle. |
| Übersicht › `einstieg` | «rund jede dritte Person» (Lebenszeit, Prüfbedarf) | «rund jede zehnte Person» mit mittelschweren bis schweren Beschwerden (SGB 2022) | Die Lebenszeitzahl beruht auf Symptomen, nicht auf Diagnosen; die SGB-Zahl ist eindeutig belegt. |
| Behandlung und Verlauf › `weg` | Anordnung mit 15 und 30 Sitzungen (Prüfbedarf) | ohne Sitzungszahlen | Prüfbedarf vermieden; die Zahlen sind für Angehörige nicht nötig. |
| Rechte und Angebote › `arbeit-geld` | Hilflosenentschädigung | ohne Frankenbeträge | Die Beträge ändern per 1.1.2027. |
| `sensitiveTopics` | Übersicht und Rechte ohne sensible Themen | beide mit `selbstgefaehrdung` | Die Seiten nennen «Suizid» (Lesepfad, Kapitelliste, Quellentitel des BAG); Vertragsprüfung des Gates. |
| Begleiten | ohne `zwang` | mit `zwang` | Der Text sagt «nie Täuschung, Zwang oder Drohungen»; Vertragsprüfung des Gates. |
| Quellenangaben | – | Fachartikel als «Autorin et al. Jahr, Zeitschrift» statt mit Titel | Titel wurden in der Recherche nicht immer wörtlich erfasst; so wird kein Titel erfunden. |

### Von der Fachstelle entschieden (10.10.2026, Ch. Egger)

- Rechte und Angebote, Abbildung 1: Die Zürcher Regel zur Auskunft an Bezugspersonen (§ 15 Patientinnen- und Patientengesetz ZH) gilt auch in Privatpraxen. Markierung entfernt, Text unverändert.
- Für sich sorgen › `was-hilft`: Der «Familiencoach Depression» ist aus der Schweiz nutzbar. Markierung entfernt, Text unverändert.
- Für sich sorgen › Quellen: Die Meta-Analyse zu Achtsamkeitsprogrammen nur mit vollständiger, überprüfbarer Angabe aufführen, sonst weglassen. Die bauende Sitzung hat sie in PubMed gefunden und wieder eingesetzt: Zhang X, Ren H, Wang C, Zhang Y, Zhou Q, Fan J (2024). The effect of mindfulness-based interventions on mental health outcomes and wellbeing of informal caregivers of people with mental illness: A systematic review and meta-analysis. *International Journal of Mental Health Nursing*, 33(4), 797–816. https://doi.org/10.1111/inm.13295 (PMID 38291626). 13 Studien mit 1007 Teilnehmenden; laut Zusammenfassung weniger Stress, Depressivität und Belastung, kein Effekt auf Angst; die Autorinnen und Autoren fordern methodisch strengere Studien.

### Offener Prüfbedarf (für W1)

1. Für sich sorgen › `was-hilft`, Eintrag «Achtsamkeit»: Die Aussage mit Zhang et al. 2024 abgleichen (bisher nur anhand der Zusammenfassung). Der Text sagt die Wirkung ohne Einschränkung aus, beim Familiencoach dagegen «leicht»; W1 entscheidet, ob ein Hinweis auf die begrenzte Studienqualität nötig ist.
2. Begleiten, Abbildung 1: Bild und Aussage mit der Ruderboot-Metapher im Arbeitsheft «Wenn dein Partner depressiv ist» abgleichen.
3. Je nach Rolle: Befunde zu Eltern erwachsener Kinder und zu erwachsenen Kindern stammen aus Studien zu Jugendlichen bzw. allgemein; auf der Seite benannt.
4. Rechte und Angebote: Websites der Angebote vor der Veröffentlichung prüfen; Stand auf der Seite: 10.10.2026.
5. Aktualisierung einplanen: NVL-Kapitel 10 (Gender, Alter, Peripartalzeit) bei Erscheinen; nächste NVL-Überprüfung 09/2027.

## Selbstprüfung der bauenden Sitzung

Arbeitsstand vom 10.10.2026, keine Prüfstufe. Elf Figuren: `v-dv-schichten` (K), `v-dv-entstehung` (G), `v-bv-vergleich` (E), `v-bv-weg` (C), `v-bv-fruehzeichen` (J), `v-is-gefaess` (G), `v-is-kreislauf` (B), `v-ro-spannung` (H), `v-bg-boot` (D), `v-fs-netz` (I), `v-ra-vergleich` (E).

## Visualisierungs-Check

| Nr. | Prüfpunkt | Ergebnis | Beleg | Massnahme |
| --- | --- | --- | --- | --- |
| 1 | Visualisierungsplan liegt vor; die Seiten entsprechen ihm | erfüllt | `site.config.json` › `visualPlan`: 49 Zeilen auf 8 Seiten, 11 Darstellungen; jede Figur trägt `data-visual-id` und `data-visual-type` wie im Plan (Gate: keine Befunde «visual-plan» oder «plan-section») | – |
| 2 | Jeder Abschnitt hat eine Zeile im Plan; Begründungen für reinen Text passen zum Inhalt | erfüllt | Gate meldet keinen Abschnitt ohne Zeile. Beispiel: Depression verstehen › `anders` «Ein Vergleich Männer–Frauen würde einen Unterschied zuspitzen, den die Studien nur als Tendenz zeigen»; Begleiten › `suizidgedanken` «kurze, direkte Anleitung ohne Grafik» | – |
| 3 | Prüffrage je Darstellung konkret beantwortet; die Darstellung zeigt, was die Antwort verspricht | erfüllt | Behandlung › Abb. 2: Plan verspricht Reihenfolge, optionalen Schritt und Weiterbehandlung; Pfad zeigt Schritt 4 gestrichelt «bei Bedarf» und Schritt 5 «Weiterbehandeln», keine Dauer (Vertiefung: «Der Pfad zeigt nur die Reihenfolge, keine Dauer»). Rechte › Abb. 1 zeigt «ohne/mit Einwilligung» nach fünf gleichen Merkmalen | – |
| 4 | Jede Figur hat Kernaussage und Erklärtext; die Hauptaussage für Angehörige steht nicht nur in der Vertiefung | erfüllt | alle 11 Figuren mit `p.puk-vis-kern` und `p.puk-vis-short`. Je nach Rolle › `eltern`: «Auch ohne Einverständnis Ihres erwachsenen Kindes dürfen Sie …» steht im Fliesstext nach der Figur, nicht in der Vertiefung | – |
| 5 | Erklärmodelle (B, C, G): Ansatzpunkt markiert oder Verzicht begründet; keine Verantwortung zugeschoben | erfüllt | `v-bv-weg` Schritt 1 (`li.is-ansatz`); `v-is-kreislauf` Station 3 (`li.is-ansatz`, «Ansatzpunkt»); `v-is-gefaess` Abfluss mit doppeltem Ring; `v-dv-entstehung` entryPoint «entfällt: Die Entstehung liegt nicht in der Hand der Angehörigen …». Zusätzlich J: «Die Entscheidung über die Behandlung bleibt bei der erkrankten Person.» | – |
| 6 | Derselbe Mechanismus wird nicht in zwei Abschnitten getrennt gezeigt | erfüllt | Der Kreislauf steht nur auf «Ihre Situation»; «Je nach Rolle › Partner» verlinkt ihn («zeigt der Kreis unter …»). Gefäss (Verhältnis von Belastung und Entlastung) und Kreislauf (Wechselwirkung in der Beziehung) zeigen verschiedene Mechanismen | Prüfsitzung: K (Verhalten/Erleben) und B Station 1 berühren sich; beurteilen, ob ein Verweis nötig ist |
| 7 | Kartenraster-Check | erfüllt | keine `puk-web-card-list`; Gate ohne Hinweis «card-grid» | – |
| 8 | Anordnung, Verbindungen, Formen oder Linienarten tragen Bedeutung | erfüllt | K: Lage über/unter der Wasserlinie; G Schwelle: Höhe der Teile an derselben Linie; Gefäss: Zu- und Abfluss; B: geschlossene Schleife; C: Reihenfolge und gestrichelter Schritt; J: Linienstärke; H: Seiten und Drehpunkt; I: Abstand zur Mitte, Linienart; E: gleiche Merkmale auf gleicher Höhe | – |
| 9 | Darstellungen über den Erkenntnisweg verteilt; keine unbegründete Textwand | teilweise | Seiten 2–8 mit 1–3 Figuren, die Übersicht ohne Figur (begründet). «Je nach Rolle» hat sechs Textabschnitte und eine Figur | Prüfsitzung: beurteilen, ob «Je nach Rolle» als Textseite trägt (eigenständige Einstiege) oder eine weitere Erklärform braucht |
| 10 | Vereinfacht, nicht verfälscht; Grenzen benannt; Quelle oder Kennzeichnung vorhanden | erfüllt | Kennzeichnung in allen 11 Legenden (Gate «figure-source» ohne Befund). Grenzen in der Vertiefung aller 11 Figuren, z. B. J: «Nicht jeder Rückfall kündigt sich an … keine Skala zum Selbsttest»; Rechte › Abb. 1: «Die Übersicht vereinfacht das Recht.» | – |
| 11 | Grundaussage ohne Animation, ohne Aufklappen und ohne Skript verständlich | erfüllt | G Schwelle: Grundzustand `data-mode="all"`, Schritt-Aufbau nur auf Knopfdruck; keine Hover-Inhalte; Kernaussagen stehen ausserhalb von `details` | – |
| 12 | Bei 320 px lesbar; Textalternative vollständig | erfüllt | kein Überlauf bei 320 px (Messung oben); alle Figuren mit `aria-describedby` ≥ 40 Zeichen (Gate «figure-alt» ohne Befund). K blendet die Zeichnung unter 560 px aus, die beiden Schichten bleiben als Listen | Prüfsitzung: Lesbarkeit der Boot-Zeichnung bei 360 px beurteilen (Figuren klein) |
| 13 | Theme «Hoher Kontrast» geprüft | teilweise | nur im Code geprüft: keine Hexwerte, Linien und Flächen über Klassen (`puk-vis-ln`, `puk-vis-scene__ln`, `puk-vis-water`); Kreislauf-Pfeile mit `var(--puk-blue-100)` wie im Starter. **Nicht im Browser mit dem Theme angesehen** | Prüfsitzung: Theme visuell prüfen |
| 14 | Inhalt fachlich freigegeben | nicht erfüllt | alle 11 Darstellungen «ausstehend» im Plan; Texte Musterentwurf | Freigabe durch die Fachstelle nach W1 |
| 15 | Bildsprache passt zum Thema; Wirkung im Plan und im Bild eingelöst | erfüllt (Selbsteinschätzung) | Wirkung (`resonance`) bei allen 11 Darstellungen im Plan. Boot: zwei ruhige Linienfiguren, je ein Ruder, Sätze aus Sicht der beiden Menschen; Gefäss: Sätze an Zu- und Abfluss. G Schwelle nutzt Rechtecke, ist aber ein Strukturmodell, kein Erlebensbild | Bilder von der Fachstelle am 10.10.2026 gutgeheissen («Die Bilder sind perfekt.»); Prüfsitzung prüft die Punkte trotzdem je Figur |
| 16 | Metapher ohne Code: ein Bild, eine Idee; Beschriftungen nennen Erleben, nicht Bildteile | erfüllt | Gefäss: «Sie ist seit Wochen schwer krank.», «Meine Schwester übernimmt den Mittwoch.» – keine Namen von Bildteilen, keine Legende; Boot: «Heute schaffe ich nur wenige Züge.» / «Ich bin da und rudere auf meiner Seite.»; K: Sätze in beiden Schichten | – |
| 17 | Keine ungewollten Bedeutungen | erfüllt (Selbsteinschätzung) | K bewusst ohne Eisberg (Gefahr für Schiffe); die Form ist eine weiche, neutrale Rundung. Kein Motiv zeigt die erkrankte Person als Gefahr oder Defekt | Prüfsitzung: Lesart der K-Form (Stein, Ei?) beurteilen |

### Matrix je Figur (Prüfsitzung)

E = erfüllt · T = teilweise · N = nicht erfüllt · – = nicht anwendbar. Je Befund ein Eintrag unter «Befunde je Stufe».

| Nr. | Prüfpunkt | `v-dv-schichten` | `v-dv-entstehung` | `v-bv-vergleich` | `v-bv-weg` | `v-bv-fruehzeichen` | `v-is-gefaess` | `v-is-kreislauf` | `v-ro-spannung` | `v-bg-boot` | `v-fs-netz` | `v-ra-vergleich` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Plan liegt vor, Seite entspricht ihm | | | | | | | | | | | |
| 2 | Zeile je Abschnitt; Begründungen passen | | | | | | | | | | | |
| 3 | Prüffrage beantwortet und eingelöst | | | | | | | | | | | |
| 4 | Kernaussage und Erklärtext | | | | | | | | | | | |
| 5 | Ansatzpunkt richtig gesetzt (B, C, G) | | | | | | | | | | | |
| 6 | Mechanismus nicht doppelt gezeigt | | | | | | | | | | | |
| 7 | Kartenraster-Check | | | | | | | | | | | |
| 8 | Form und Linien tragen Bedeutung | | | | | | | | | | | |
| 9 | Verteilt, keine Textwand | | | | | | | | | | | |
| 10 | Nicht verfälscht; Grenzen; Kennzeichnung | | | | | | | | | | | |
| 11 | Ohne Aufklappen und Skript verständlich | | | | | | | | | | | |
| 12 | 320 px lesbar; Textalternative | | | | | | | | | | | |
| 13 | Theme «Hoher Kontrast» | | | | | | | | | | | |
| 14 | Fachlich freigegeben | | | | | | | | | | | |
| 15 | Bildsprache passt; Wirkung eingelöst | | | | | | | | | | | |
| 16 | Metapher ohne Code | | | | | | | | | | | |
| 17 | Keine ungewollten Bedeutungen | | | | | | | | | | | |

## Befunde je Stufe

### W1 Fachliche Prüfung

### W2 Gesamtkohärenz

### S Sprach-Review

### Bedienung und Barrierefreiheit

### W3 Code-Review

## Pre-Release-Audits

Aufträge und Prüfpunkte: Abschnitt «Pre-Release-Audits» (`guidelines/00-pre-release-audits.md`). Erst nach W3; R3 unmittelbar vor der Veröffentlichung. R3 steht nur bei «Go» auf «erledigt».

### R1 Profil-Audit

### R2 Visualisierung und Laienverständlichkeit

### R3 Freigabe-Audit
