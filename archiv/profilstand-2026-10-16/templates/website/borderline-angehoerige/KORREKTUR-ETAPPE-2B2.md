# Korrekturauftrag · Borderline-Website, Etappe 2b-2 · Stufen und Quellen

Stand 11.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Grundlage:** Durchsicht der Fachstelle nach der Korrektur 2b-K (Stand `f9e2314`, Prüfung 1 ohne Befund).
- **Entscheide der Fachstelle vom 11.10.2026:**
  - **Sechs Stufen der Validierung** (`kommunizieren` › `anerkennen`): Das Layout wird neu (Abschnitt 3). Damit ändert sich der frühere Entscheid «Stufen 1 und 2 im Lesefluss, 3 bis 6 in einer Vertiefung».
  - **Quellen:** Auf allen Seiten stehen die Quellen nicht mehr im Text. Sie stehen am Seitenende in einem aufklappbaren Block «Quellen zu dieser Seite» (Abschnitt 4). Das gilt auch für die freigegebenen Seiten der Etappen 1 und 2a. Dort ändert sich nur der Ort der Quellen, kein Wortlaut.
  - **Reste aus 2b-K:** werden gleich mit erledigt (Abschnitt 5).
- **Danach** liest die Fachstelle `kommunizieren` und `krise` und gibt sie frei.

## 2. Regeln

- **Wortlaut:** Die Texte in diesem Auftrag gelten so, wie sie dort stehen. Sonst bleibt jeder Satz im heutigen Wortlaut. In Abschnitt 3 werden Sätze nur umgeordnet, nicht neu geschrieben.
- **Nichts geht verloren:** Jede Angabe, die heute auf einer Seite steht, steht danach noch auf derselben Seite, im Text, in einer Vertiefung oder im Quellenblock.
- **Vertiefungen:** Akkordeon des Profils (`.puk-acc[data-puk-accordion]`), ohne Skript offen, im Druck vollständig.
- **Keine neue Abbildung:** Die Stufen in Abschnitt 3 sind eine gestaltete Liste, keine Abbildung (keine Nummer «Abbildung n», keine Freigabe nötig).
- **Abgleich:** Jede betroffene Zeile bekommt den neuen Ort und den Status «verschoben (2b-2)» oder «umformuliert (2b-2)», mit Bemerkung. Neue Statuswerte erklärst du in `abgleich/README.md`. `node abgleich/pruefe-abgleich.mjs` meldet 0 Zeilen ohne Fundstelle.

## 3. Sechs Stufen der Validierung (`kommunizieren` › `anerkennen`)

Vorbild ist das Muster der nummerierten Schritte von DEAR auf `grenzen` (Nummernpunkt, Linie, Zwischentitel, Beispiel als `.puk-say`), hier senkrecht bei jeder Breite. Die Fachstelle hat eine Skizze dieser Lösung gesehen und gewählt.

**Reihenfolge im Unterabschnitt «Sechs Stufen der Validierung»:**

1. **Einleitung:** unverändert («Die sechs Stufen lehnen sich an …»).
2. **Nummerierte Schritte, alle sechs sichtbar.** Je Stufe, in dieser Reihenfolge:
   - kleine Bezeichnung «Stufe 1» bis «Stufe 6»
   - der Name als Zwischentitel (z. B. «Aufmerksam sein», «Radikale Echtheit: auf Augenhöhe bleiben»)
   - der Leitsatz und das Ziel in einem Absatz, z. B. «Ich bin jetzt wirklich da.» Zugewandtheit und Aufmerksamkeit zeigen.
   - ein Beispiel als `.puk-say` (hilfreich), Bezeichnung «Beispiel»:

   | Stufe | Beispiel (Wortlaut von heute) |
   | --- | --- |
   | 1 | «Ich bin da. Erzähl mir, was los ist.» |
   | 2 | «Du fühlst dich gerade allein gelassen und vergessen. Stimmt das so?» |
   | 3 | «Ich frage mich, ob da auch Angst dabei ist.» |
   | 4 | «Nach dem, was du mir über frühere Erfahrungen erzählt hast, verstehe ich besser, warum dir das schwerfällt.» |
   | 5 | «Nachdem unser Termin erneut kurzfristig geändert wurde, sehe ich deine Enttäuschung. Ich bleibe trotzdem bei meinem Nein.» |
   | 6 | «Ich nehme dich ernst. Und ich sage dir auch ehrlich, wie es bei mir ankommt.» |

3. **Eine Vertiefung «Die sechs Stufen im Detail»** mit sechs Einträgen «Stufe 1 · Aufmerksam sein» usw. Je Eintrag: «So kann es aussehen», «Typischer Stolperstein» und alle übrigen Beispielsätze und Beispiel-Dialoge dieser Stufe. Gleich aufgebaut für alle sechs.
4. **Danach, unverändert:** «Mitgefühl heisst nicht übernehmen. …», die Gegenüberstellung «Übernehmen / Spiegeln», «Spiegeln kann Verständnis erleichtern, …» und «Ein hilfreicher innerer Satz: …».

**Gestaltung:**

- Nummernpunkte und senkrechte Linie wie DEAR; Name gut sichtbar, aber kleiner als «Sechs Stufen der Validierung».
- Nur Profil-Klassen und, wo nötig, Klassen in `borderline.css` (`bl-…`). Keine Hexwerte, keine `style`-Attribute.
- Kein waagrechter Überlauf von 320 bis 1440 px und bei 200 % Zoom.
- Überschriften-Hierarchie sauber (Prüfung mit dem Skript wie bisher).
- **Bildschirmfotos** bei 1280 und 360 px und im Theme «kontrast», ansehen.

## 4. Quellen zu dieser Seite (alle Seiten mit Quellen)

Betroffen sind `verstehen`, `beziehungen`, `grenzen`, `rolle`, `selbstfuersorge`, `kommunizieren` und `krise`.

**Was in den Block wandert:** alle Zeilen und Satzteile, die Quellen nennen, mit «Quellen:», «Quelle:», «Grundlage:» oder «Bezugspunkte:».

**Was im Text bleibt:**

- Quellen in Abbildungen (`figcaption`, «Eigene didaktische Darstellung …; Bezug: …») bleiben bei der Abbildung.
- Sätze in diesen Zeilen, die keine Quelle nennen, sondern etwas aussagen, bleiben im Text an ihrem Ort, im heutigen Wortlaut, nur ohne die Quellennamen. Beispiele:
  - `beziehungen`: «Studien beschreiben Gruppen, nicht eine bestimmte Person oder Beziehung.»
  - `kommunizieren`: «Die Beispiele sind eigene didaktische Ableitungen aus den Ansätzen auf dieser Seite, kein auf Wirksamkeit geprüftes Übungsprogramm.»
  - `kommunizieren` › `worte`: «Beispiele und Antwortsätze: eigene didaktische Darstellung.»
  - `selbstfuersorge`: die Sätze nach den Quellennamen in den Zeilen zu den fünf Bereichen, zur Übung in vier Schritten und «Die Hinweise auf dieser Seite übertragen …».
  - Liste alle diese Sätze in der Selbstprüfung auf, mit Ort vorher und nachher.

**Der Block:**

- Er steht als letzter Abschnitt jeder dieser Seiten, nach dem letzten Inhaltsabschnitt. Er steht nicht in der Kapitelübersicht.
- Er ist ein Akkordeon des Profils mit einem Eintrag «Quellen zu dieser Seite», ohne Skript offen und im Druck vollständig.
- Darin steht die Quellenliste des Profils (`ul.puk-longform__sources`):
  - jede Quelle einmal, im Wortlaut von heute (keine neue Quelle, keine ergänzten Angaben)
  - darunter in `.puk-longform__source-use`, wofür sie steht: «Verwendet in: «Abschnittstitel»», bei mehreren Abschnitten alle. Wo die heutige Zeile sagt, wofür die Quelle steht, kommt das dazu (z. B. bei Dazzi et al. (2014): «Übersicht zum direkten Fragen nach Suizidgedanken, in den eingeschlossenen Studien kein statistisch signifikanter Anstieg»).
- Reihenfolge: alphabetisch nach erstem Autor oder Herausgeber.

**Prüfen:**

- Je Seite eine Tabelle in der Selbstprüfung: jede heutige Quellenzeile → Eintrag im Block. Keine Quelle fehlt, keine ist dazugekommen.
- Auf den Seiten der Etappen 1 und 2a zeigt `git diff --word-diff` nur das Verschieben der Quellen und den neuen Block.
- Links im Block: Ziel vorhanden (Vertrag `contract.js`, `puk-longform__sources`).

## 5. Reste aus 2b-K

| Ort | bisher | neu |
| --- | --- | --- |
| `krise` › `suizid` | «Die von Dazzi et al. ausgewerteten Studien zeigten keinen statistisch signifikanten Anstieg von Suizidgedanken durch direktes Fragen.» | «Eine Übersicht über mehrere Studien (Dazzi et al., 2014) fand keine nachweisbare Zunahme von Suizidgedanken durch direktes Fragen.» |
| `kommunizieren` › `beispiele` › «Nach einem Arztbesuch» | «Person A» und «Person B», im Text und in den Bezeichnungen | «Kim» und «Sascha» |
| `kommunizieren` › `beispiele`, Einleitung | «Namen und «Person A» oder «Person B» bezeichnen keine festen Rollen …» | «Die Namen bezeichnen keine festen Rollen …» (Rest gleich) |
| `kommunizieren` › `moment` › «Pause statt Streit» | Der Verweissatz auf `verstehen#anspannung` steht nach der Liste | Er steht direkt nach der Einleitung, Wortlaut gleich |
| `site.config.json` › `krise` › `description` | «… was Sie eher vermeiden …» | «… was Sie vermeiden sollten …» |
| `visualPlan` › `v-kr-vermeiden` › `goal` | «Erkennen, was in einer Krise eher nicht …» | an den Titel «Was Sie in einer Krise vermeiden sollten» anpassen, ohne «eher» |
| `visualPlan` › `v-ko-tassen` › `reason` | beschreibt den Stand vor dem Verschieben | den heutigen Stand beschreiben (Tassen näher zur Mitte, spiegelgleich) |

Die Beispiele in den sechs Stufen behalten «Person A» und «Person B».

## 6. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: wie bisher 1 × `visual-approval`, 8 × `placeholder-approval`, 1 × `review-report`
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Länge:** Wörter im Lesefluss (C1) vorher und nachher je Seite. `kommunizieren` und `krise` bleiben bei höchstens etwa 2500.
- **Prüfen im Browser:** Stufen und Quellenblock bei 1280 und 360 px und im Theme «kontrast»; Überlauf, Tastatur, Druck wie in der Selbstprüfung 2b.
- **Keine Änderung am Wortlaut** der Etappe-1- und 2a-Seiten und an `index` (Beleg: `git diff --word-diff` gegen `f9e2314`).
- **Selbstprüfung:**
  - Block «Korrektur 2b-2» über dem Block «Korrektur 2b-K», mit Stand und Beleg je Abschnitt und den Fotos.
  - Liste «Neue Sätze zur Freigabe» nachführen: die zwei geänderten Sätze aus Abschnitt 5 dazu.
  - In «Zur Prüfung durch die Fachstelle»: der neue Dazzi-Satz, mit Bestandszitat.
  - Im Prüfbericht änderst du nur die Selbstprüfung.
- Der Pull Request bleibt Entwurf.
