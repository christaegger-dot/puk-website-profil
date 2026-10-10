# Korrekturauftrag · Borderline-Website, Etappe 1j · Freigabe eintragen

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass

- **Freigabe der Fachstelle vom 10.10.2026.** Grundlage ist der Stand `540c37d` nach Korrektur 1i, in der Vorschau nachgeprüft (Prüfung 1). Die Fachstelle hat entschieden:
  - **Etappe 1 als Ganzes:** Die Seiten `index`, `verstehen`, `beziehungen` und `grenzen` sind fachlich freigegeben, mit allen Texten im heutigen Wortlaut.
  - **P4-F-8:** Die neuen Beispielsätze sind freigegeben.
  - **P4-F-16:** Die Quellenzeilen bleiben. Bei den Ursachen kommt NICE CG78 (2009) dazu.
  - **P4-F-21:** Die sechs Abbildungen sind freigegeben.
- Damit sind alle 21 Fragen der vierten Prüfrunde entschieden.
- Dieser Auftrag ändert eine Quellenzeile und setzt sechs Freigaben im Plan. Er trägt die Freigabe in den Prüfbericht und den Abgleich ein. Sonst ändert sich nichts.

## 2. Regeln

- Die Texte in diesem Auftrag gelten so, wie sie dort stehen. Keine eigenen Formulierungen.
- **Prüfbericht:** Der Eintrag in Abschnitt 5 ist der Eintrag der Fachstelle. Die bauende Sitzung überträgt ihn unverändert, im Auftrag der Fachstelle. Der Prüfbericht sagt: «Fachliche Freigaben trägt nur die Fachstelle ein.» Die bauende Sitzung setzt keine Stufe auf «erledigt».
- **Nicht ändern:**
  - andere Texte der Seiten
  - `editorialStatus` und die Entwurfsseiten
  - die zwölf Platzhalter (sie bleiben «ausstehend»)
  - die Zeilen mit `format` «text» im `visualPlan`
  - alle Abschnitte des Prüfberichts ausser denen, die Abschnitt 5 nennt

## 3. Quellenzeile der Ursachen (P4-F-16)

| Seite › Ort | bisher | neu |
| --- | --- | --- |
| `verstehen` › `borderline`, letzter Absatz | «Quellen: WHO, ICD-11 (2024); American Psychiatric Association (2024); Linehan (1993).» | «Quellen: WHO, ICD-11 (2024); American Psychiatric Association (2024); NICE CG78 (2009); Linehan (1993).» |

- «Quellen:» bleibt fett wie bisher.
- **Grund:** Der Bestand stützt die Aussage zu den Ursachen auf NICE CG78, Vollleitlinie 2009, Abschnitt 2.4 (`texte/faq.md`, «Ist Borderline erblich? Bin ich schuld?»).
- **Bleibt:** Fruzzetti (2006) und Gunderson et al. (1997) auf `beziehungen`, die Bezugspunkte der Anspannungskurve und alle übrigen Quellenzeilen.

## 4. `site.config.json` und Abgleich

- **`visualPlan` (P4-F-21):** `approvalStatus` von «ausstehend» auf «freigegeben» bei genau diesen sechs Einträgen:
  - `v-vs-eisberg`
  - `v-vs-anspannung`
  - `v-vs-bewertungen`
  - `v-bz-schleife`
  - `v-bz-sichten`
  - `v-gr-dear`
- **Abgleich, Quellenzeile:** `abgleich/verstehen.md` Nr. 34, 35 und 36 nennen die alte Quellenzeile als neue Fassung. Setze dort die neue Zeile aus Abschnitt 3 ein. Der Status bleibt «gekürzt». Die Bemerkung bekommt am Ende «; NICE CG78 ergänzt (1j, P4-F-16)».
- **Abgleich, Prüfbedarf:**
  - Jede Bemerkung in den Tabellen von `abgleich/index.md`, `verstehen.md`, `beziehungen.md` und `grenzen.md`, die «Prüfbedarf» nennt, bekommt am Ende «; erledigt: Freigabe Etappe 1 durch die Fachstelle, 10.10.2026 (1j)».
  - Unter jede Überschrift «Prüfbedarf für W1 (Stand …)» in `index.md`, `verstehen.md`, `beziehungen.md` und `grenzen.md` kommt als erster Absatz:

    «**Erledigt am 10.10.2026:** Die vierte Prüfrunde hat den offenen Prüfbedarf in die Fragen P4-F-1 bis P4-F-21 übernommen. Alle sind entschieden (Korrektur 1i), und die Fachstelle hat Etappe 1 fachlich freigegeben (Korrektur 1j). Was für Etappe 2 vorgemerkt ist, bleibt vorgemerkt. Die Liste bleibt als Verlauf stehen.»
  - Kopfnotizen und `abgleich/README.md` mit «1j» nachführen, wie bei früheren Korrekturen.

## 5. Prüfbericht: Eintrag der Fachstelle

### a) Neuer Abschnitt

Setze diesen Abschnitt unverändert direkt vor «## Selbstprüfung der bauenden Sitzung»:

```
## Fachliche Freigabe der Fachstelle

**10.10.2026 · Fachstelle Angehörigenarbeit PUK.** Von der bauenden Sitzung im Auftrag der Fachstelle übertragen (`KORREKTUR-ETAPPE-1J.md`).

- **Etappe 1 ist fachlich freigegeben:** die Seiten `index`, `verstehen`, `beziehungen` und `grenzen` als Ganzes, mit allen Texten im Stand `540c37d` (nach Korrektur 1i) und der Quellenzeile aus Korrektur 1j.
- **Die sechs Abbildungen sind fachlich freigegeben (P4-F-21):** Eisberg (`v-vs-eisberg`), Anspannungskurve (`v-vs-anspannung`), Momentaufnahmen (`v-vs-bewertungen`), Bedeutungsschleife (`v-bz-schleife`), Zwei Sichten (`v-bz-sichten`) und DEAR (`v-gr-dear`).
- **Die neuen Beispielsätze sind fachlich freigegeben (P4-F-8):**
  - `verstehen`: «Du bist die Einzige, die mich versteht.», «Sätze, die Angehörige hören können:» und «Erfahrungen in engen Beziehungen können mitwirken, neben vielen anderen Einflüssen.»
  - `beziehungen`: «Wie hast du meine Absage verstanden?», «Ich bin bei der Arbeit. Ich melde mich heute Abend.», «Vorhin warst du plötzlich weit weg. Wie war das für dich?», «Ich habe den Eindruck, du bist enttäuscht von mir. Stimmt das?», «Vielleicht wirkt die Person bei Freunden oder bei der Arbeit ruhiger als bei Ihnen.» und «Das kann kränken.»
  - `grenzen`: «Lass uns zusammen schauen, wer dich sonst noch unterstützen kann.»
- **Quellen (P4-F-16):** Die Quellenzeilen tragen die Aussagen. Bei den Ursachen (`verstehen` › `borderline`) kommt NICE CG78 (2009) dazu, wie im Bestand. Fruzzetti (2006) und Gunderson et al. (1997) bleiben auf `beziehungen`. Die Bezugspunkte der Anspannungskurve stammen aus den Handouts des Bestands und bleiben.
- **Alle 21 Fragen der vierten Prüfrunde sind entschieden:** P4-F-1 bis -7, -9 bis -15 und -17 bis -20 mit Korrektur 1i (P4-F-14, -15, -18 und -20 als Strukturentscheide), P4-F-8, -16 und -21 hier.
- **Nicht Teil dieser Freigabe:** die zwölf Platzhalter und die Seiten von Etappe 2. Die Platzhalter markieren Seiten, die noch folgen, und entfallen, wenn diese gebaut sind.
- **Weiter offen vor der Veröffentlichung:** W2, S, Visualisierungs-Check und W3 abschliessen, reale Screenreader-Läufe, Hardwaretastatur und Touch, danach R1 bis R3.
```

### b) Statustabelle

Ersetze die Zeile «W1 Fachliche Prüfung» durch:

```
| W1 Fachliche Prüfung | offen | 10.10.2026 | Fachstelle Angehörigenarbeit PUK (Freigabe Etappe 1); vierte Prüfrunde: eine Prüfsitzung (Claude, hat nicht gebaut) | Etappe 1 fachlich freigegeben (Abschnitt «Fachliche Freigabe der Fachstelle»); alle 21 Fragen P4-F-1 bis P4-F-21 entschieden. Offen, bis die Seiten von Etappe 2 geprüft und freigegeben sind. |
```

In der Statustabelle wird in der Zeile «Visualisierungs-Check», Spalte «Ergebnis», «keine Figur fachlich freigegeben» ersetzt durch «seit 10.10.2026 alle sechs Figuren fachlich freigegeben (Fachstelle)». Der Status bleibt «offen».

### c) Selbstprüfung

- Setze über die Selbstprüfung von 1i einen kurzen Block «**Stand 10.10.2026 · Korrektur Etappe 1j · bauende Sitzung (Claude Code).**» mit «umgesetzt, Beleg» je Punkt der Abschnitte 3 bis 5.
- Die Selbstprüfung von 1i bleibt darunter stehen.

## 6. Danach

- `node tools/build.mjs`: 0 blockierend, 14 Hinweise (bisher 20; die sechs Hinweise `visual-approval` entfallen).
- `node tools/gate.mjs --selftest`: 53/53.
- `node tools/gate.mjs --production`: 13 blockierend (12 × `placeholder-approval`, 1 × `review-report`) und 1 Hinweis (`siteUrl`). Das ist erwartet.
- `node abgleich/pruefe-abgleich.mjs`: 1763 Zeilen, 0 ohne Fundstelle.
- `git diff` zeigt auf den Seiten nur die eine Quellenzeile.
- Der Pull Request bleibt Entwurf.
