# Auftrag · Borderline-Website, Etappe 2a · Freigabe eintragen

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass

- **Freigabe der Fachstelle vom 10.10.2026.** Grundlage ist der Stand `416f6d0` nach den Korrekturen 2a-K und 2a-2, in der Vorschau nachgeprüft (Prüfung 1). Die Fachstelle hat entschieden:
  - **Etappe 2a als Ganzes:** `rolle` und `selbstfuersorge` sind fachlich freigegeben, mit allen Texten im heutigen Wortlaut. Dazu gehören auch die zwei neuen Einstiege auf `index`.
  - **P2a-F-5:** Die neuen Sätze sind freigegeben.
  - **P2a-F-6:** Die zwei Abbildungen sind freigegeben.
- Damit sind alle zehn Fragen der Prüfrunde 2a entschieden.
- Dieser Auftrag setzt zwei Freigaben im Plan. Er trägt die Freigabe in den Prüfbericht und den Abgleich ein. Sonst ändert sich nichts.

## 2. Regeln

- Die Texte in diesem Auftrag gelten so, wie sie dort stehen.
- **Prüfbericht:** Der Eintrag in Abschnitt 4 ist der Eintrag der Fachstelle. Die bauende Sitzung überträgt ihn unverändert, im Auftrag der Fachstelle. Sie setzt keine Stufe auf «erledigt».
- **Nicht ändern:** die Texte aller Seiten, `editorialStatus`, die Platzhalter, die Zeilen mit `format` «text» im Plan, die Etappe-1-Tabellen des Abgleichs.

## 3. `site.config.json` und Abgleich

- **`visualPlan`:** `approvalStatus` von «ausstehend» auf «freigegeben» bei genau diesen zwei Einträgen:
  - `v-ro-weg`
  - `v-sf-abend`
- **Abgleich, nur `abgleich/rolle.md` und `abgleich/selbstfuersorge.md`:**
  - Jede Bemerkung, die «Prüfbedarf» nennt, bekommt am Ende «; erledigt: Freigabe Etappe 2a durch die Fachstelle, 10.10.2026».
  - Unter jede Überschrift, die mit «Prüfbedarf» beginnt, kommt als erster Absatz:

    «**Erledigt am 10.10.2026:** Die Prüfrunde 2a hat den offenen Prüfbedarf in die Fragen P2a-F-1 bis P2a-F-10 übernommen. Alle sind entschieden (Korrekturen 2a-K und 2a-2), und die Fachstelle hat Etappe 2a fachlich freigegeben. Die Liste bleibt als Verlauf stehen.»
  - Kopfnotizen und `abgleich/README.md` nachführen.

## 4. Prüfbericht: Eintrag der Fachstelle

### a) Neuer Unterabschnitt

Setze diesen Unterabschnitt unverändert ans Ende des Abschnitts «## Fachliche Freigabe der Fachstelle», direkt vor «## Selbstprüfung der bauenden Sitzung»:

```
### Etappe 2a

**10.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`FREIGABE-ETAPPE-2A.md`).

- **Etappe 2a ist fachlich freigegeben:** die Seiten `rolle` («Ihre Rolle klären») und `selbstfuersorge` («Auf sich achten») als Ganzes und auf `index` die zwei neuen Einstiege, mit allen Texten im Stand `416f6d0` (nach den Korrekturen 2a-K und 2a-2).
- **Die neuen Sätze sind freigegeben (P2a-F-5):** alle Sätze der Liste «Neue Sätze zur Freigabe» in der Selbstprüfung (Block «Korrektur 2a-K», nachgeführt mit 2a-2).
- **Die zwei Abbildungen sind fachlich freigegeben (P2a-F-6):** «Ein Stück Weg» (`v-ro-weg`) und «Ein freier Abend» (`v-sf-abend`).
- **Alle zehn Fragen der Prüfrunde 2a sind entschieden:** P2a-F-1 bis -4 und -6 bis -10 mit den Korrekturen 2a-K und 2a-2, P2a-F-5 und die Freigabe der Abbildungen hier.
- **Nicht Teil dieser Freigabe:** die Seiten der Etappen 2b und 2c, die Platzhalter und die Verweise von den Etappe-1-Seiten auf die neuen Seiten (V1–V9). Über die Verweise wird am Schluss von Etappe 2 entschieden.
- **Weiter offen vor der Veröffentlichung:** wie bei Etappe 1. Dazu kommt eine unabhängige Prüfung der Korrekturen 2a-K und 2a-2 in der Schlussprüfung, weil die Sitzung, die sie umgesetzt hat, auch die Prüfrunde 2a gemacht hat.
```

### b) Statustabelle

Der Status bleibt in beiden Zeilen «offen».

- **Zeile «W1 Fachliche Prüfung»:**
  - Spalte «Geprüft durch»: Ergänze «; Fachstelle (Freigabe Etappe 2a)».
  - Spalte «Ergebnis»: Ergänze am Ende «Etappe 2a (`rolle`, `selbstfuersorge`, Einstiege auf `index`) fachlich freigegeben am 10.10.2026.».
- **Zeile «Visualisierungs-Check»:** In der Spalte «Ergebnis» ergänzt du am Ende «Etappe 2a: beide Abbildungen fachlich freigegeben (Fachstelle, 10.10.2026).».

### c) Selbstprüfung

Setze einen kurzen Block «Freigabe 2a eintragen» über den Block 2a-2, mit «umgesetzt, Beleg» je Punkt der Abschnitte 3 und 4.

## 5. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend, 12 Hinweise (bisher 14; die zwei Hinweise `visual-approval` entfallen)
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: 11 blockierend (10 × `placeholder-approval`, 1 × `review-report`) und der Hinweis `siteUrl`. Das ist erwartet.
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- `git diff` zeigt auf den Seiten keine Änderung.
- Der Pull Request bleibt Entwurf.
