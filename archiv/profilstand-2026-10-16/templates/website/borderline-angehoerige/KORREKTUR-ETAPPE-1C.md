# Korrekturauftrag · Borderline-Website, Etappe 1c

Stand 09.10.2026. Grundlage: `PRUEFBERICHT.md`, Abschnitt «Dritte Prüfrunde» (Befund-IDs R3-…), und `PRUEFBERICHT-BELEGE-2026-10-09c.md`. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`.

Dieser Auftrag ist für die **bauende Sitzung**. Er ist kurz: Danach folgt die fachliche Durchsicht durch die Fachstelle (W1).

## 1. Entscheide und Regeln

| Frage | Entscheid |
| --- | --- |
| Opferhilfe (A-4 aus 1b) | **Link jetzt setzen.** Die Adresse `https://www.opferhilfe-schweiz.ch/de/` hat Prüfung 1 am 09.10.2026 aufgerufen: offizielle Website der Opferhilfe Schweiz, herausgegeben von der SODK. Nicht erneut aufrufen. Beleg im Bericht: «Adresse geprüft durch Prüfung 1, 09.10.2026». |
| Umfang | **Der Richtwert gilt für diese Korrektur nicht.** Nicht kürzen, um Wörter auszugleichen. Über die Länge entscheidet die Fachstelle in W1. Die Wortzahlen werden nur berichtet. |
| Fehler im Auftrag 1b | D-1 (Satz «perfekte» Reaktion) und C-3 (Bezeichnungen ohne «Mögliche») waren falsch. K-2 und K-3 korrigieren das. |
| Sätze aus dem Bestand | gelten wörtlich, wie in 1b. |

## 2. Korrekturen

- **K-1 · `grenzen` › Schutz, Schritt 4** (A-4): «Opferhilfe und Beratung dazunehmen» mit Link auf `https://www.opferhilfe-schweiz.ch/de/`, Linktext «Opferhilfe Schweiz». Keine Nummer.
- **K-2 · `beziehungen` › Verantwortung** (R3-W1-02): nach «… noch allein für den Verlauf oder die Beziehung verantwortlich.» der Satz «Die Beziehung wird nicht durch eine «perfekte» Reaktion der Angehörigen repariert.» (Bestand `verstehen--beziehungen.md` Z. 355).
- **K-3 · `beziehungen` › Abb. 2** (R3-W1-03): Bezeichnungen «Mögliche Sicht der betroffenen Person» und «Mögliche Sicht der Schwester», überall in der Figur und in der Textfassung.
- **K-4 · `beziehungen` › Verantwortung** (R3-W1-04): «Trennen Sie: Was könnte die Person innerlich erleben, was tut sie tatsächlich, wie wirkt das auf andere, und was braucht es für Verantwortung und Schutz?» (Inhalt der vier Fragen aus dem Bestand Z. 346–349, als ein Satz; dieser Wortlaut gilt).
- **K-5 · `beziehungen` › Einflüsse, Station 4** (R3-W1-01): vor «Möglich ist eine Dissoziation …» der Satz «Verstummen, Unwirklichkeitsgefühle oder abweichende Erinnerungen können viele Gründe haben.» (Bestand Z. 271).
- **K-6 · Schleife, Pfeil 4 → 5** (R3-V-01): Die Pfeilspitze endet vor dem Kasten von Station 5, mit einem Abstand wie bei den anderen Pfeilen. Ursache laut Prüfung: Station 5 ist höher, als die Zeichnung annimmt. Per Skript messen bei 1440, 1280, 768 und 720 px; die Werte für alle fünf Pfeile in den Bericht.
- **K-7 · Pendel** (R3-V-02): Beide Bögen sind Kreisbögen um den Aufhängepunkt. Die ausgelenkten Pendelkörper sitzen an den Enden des langen Bogens, dort stehen auch «Sehr positive Bewertung» und «Sehr negative Bewertung». An den Enden des kurzen Bogens kleine Marken. Gilt auch für die schmale Ansicht.
- **K-8 · Schrift in Figuren** (R3-V-04): Überschriften, «Was hilft» und Ansatzpunkte in Figuren nicht kleiner als der Erklärtext daneben; Überschriften fett. Nur Profil-Tokens.
- **K-9 · `borderline.css`** (R3-B-01): `2px` durch `var(--border-width-strong)` ersetzen.
- **K-10 · Bericht und Abgleich** (R3-K-01 bis R3-K-05):
  - `abgleich/kennzahlen.mjs` committen.
  - Seitenhöhen bei 360 px mit Skript neu messen; Messbreite und Methode nennen.
  - Abgleich `verstehen`: Z. 277–396 des Bestands («Materialien zum Vertiefen») mit Status je Satz nachtragen.
  - Die 7 Stichprobenzeilen aus Belege, Abschnitt 4, berichtigen.
  - `visualPlan` nachführen: `v-vs-einordnung`, `v-gr-reihenfolge`, `v-gr-kontakt`, `v-vs-bewertungen`.
  - Abgleich für K-1 bis K-5 nachführen; `abgleich/pruefe-abgleich.mjs` mit 0 Zeilen ohne Fundstelle.

## 3. Nicht in diesem Auftrag

- Prüfbedarf für die Fachstelle (W1): R3-W1-05 (Kürzungen an Aussagen für Angehörige), R3-W1-06 (Anspannung: professionelle Hilfe), dazu aus der zweiten Runde F-V-11, F-V-05, F-W1-11, F-W2-02, F-W2-03.
- Hingenommen: R3-S-01 (zwei Einträge «Station 2»), R3-V-03 (Pendel schmal, Unterschied steht im Kurztext).
- Profil (Design-System, später): P-6, P-7, P-9.
- Stufe 5: reale Screenreader-Läufe macht eine Person.

## 4. Danach

- `node tools/build.mjs` ohne blockierende Befunde, `node tools/gate.mjs --selftest` 50/50.
- Selbstprüfung in `PRUEFBERICHT.md`: Tabelle je ID K-1 bis K-10 mit «umgesetzt, wie, Beleg»; Pfeilmessung; Wortzahlen.
- Im `PRUEFBERICHT.md` nur den Abschnitt «Selbstprüfung der bauenden Sitzung» ändern.
- Pull Request bleibt Entwurf.
