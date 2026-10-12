# Korrekturauftrag · Borderline-Website, Etappe 1d

Stand 09.10.2026. Grundlage: fachliche Durchsicht der Seite `verstehen` durch die Fachstelle (Christa, Chat 09.10.2026) und Profil-Update `update-2026-10-09b.patch`. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`.

Dieser Auftrag ist für die **bauende Sitzung**.

## 1. Rückmeldungen der Fachstelle (W1, Seite `verstehen`)

| Rückmeldung | Entscheid |
| --- | --- |
| Alle Abbildungen haben sichtbaren Text, der nur beschreibt, was man sieht (z. B. «Eisberg: über der Linie vier sichtbare Verhaltensweisen …»). | Die Kurzbeschreibung in der Bildlegende steht nur noch für Screenreader. Profilentscheid, gilt für alle Websites (Profil-Update, Leitlinie 07). |
| Abbildung 2 «Anspannung im Gespräch» ist für Laien sehr verwirrend. | Neu als **Kurve wie im Handout «Die Anspannungskurve – Wann Reden hilft»**, mit Alltagsworten statt Fachbegriffen. Entscheid der Fachstelle, 09.10.2026. |
| Abschnitt 07 «Einordnung» hat nur zwei Sätze. | Der Abschluss aus dem Bestand («Verstehen hat Grenzen», mit Merksatz) kommt zurück. |
| Der Zuständigkeitsverweis in der Fusszeile ist «weder schön noch hilfreich formuliert». | Neuer Wortlaut, fachlich geprüft von der Fachstelle am 09.10.2026; gilt als neuer Standard im Profil. |

## 2. Profil-Update übernehmen

`update-2026-10-09b.patch` (liegt im Stamm von `main`):

- Neuer Standardwortlaut des Zuständigkeitsverweises (README, Starter).
- Kurzbeschreibung in der Bildlegende als `p.puk-sr` (Leitlinie 07; alle Muster, Vorlagen und Starter-Seiten).
- Build bleibt r4-4, Selbsttest 50/50.

## 3. Korrekturen

- **D-1 · Fusszeile.** `site.config.json` › `responsibility.text`: «Die Fachstelle Angehörigenarbeit der PUK berät Angehörige kostenlos und vertraulich: angehoerigenarbeit@pukzh.ch. Sorgen Sie sich akut um das Leben oder die Sicherheit eines Menschen, holen Sie sofort Hilfe: ärztlicher Notfalldienst oder Notfallstation, bei Gefahr die Polizei.» Dazu `reviewedAt` «09.10.2026». `responsibility.inline` bleibt unverändert.

- **D-2 · Kurzbeschreibungen nur für Screenreader** (alle 8 Figuren auf `verstehen`, `beziehungen`, `grenzen`):
  - Der Absatz in `figcaption`, auf den `aria-describedby` zeigt (z. B. `p#vs-eisberg-text`), erhält `class="puk-sr"`.
  - Sichtbar bleibt in der Legende nur Kennzeichnung und Quelle.
  - «Leserichtung» bei der Schleife bleibt sichtbar. Sie sagt auf dem Handy, wie die Liste zu lesen ist (Profilregel).
  - Prüfen, ob in einer Figur noch sichtbarer Text steht, der nur die Zeichnung beschreibt. Wenn ja: entfernen oder `puk-sr`, im Bericht nennen.

- **D-3 · Abbildung 2 `verstehen` neu: «Die Anspannungskurve»** (Muster A, freie Figur; ersetzt die Achse mit drei Bereichen):
  - **Titel:** «Abbildung 2 · Die Anspannungskurve: wann Reden hilft».
  - **Kernaussage** bleibt: «Bei hoher Anspannung können Worte schwerer ankommen. Sie dürfen eine Pause machen oder das Gespräch beenden.»
  - **Kurztext:** «Anspannung kann im Gespräch ansteigen und später wieder sinken. Das gilt für die andere Person und auch für Sie. Wo jemand gerade steht, lässt sich von aussen nicht sicher erkennen.»
  - **Zeichnung:** eine ruhige Kurve über den Gesprächsverlauf. Links tief, dann steigend, oben ein Scheitel, rechts wieder sinkend. Keine Skala, keine Zahlenwerte, keine Achsenpfeile mit Fachbegriffen. Vier Stellen auf der Kurve tragen eine Nummer und eine kurze Beschriftung in Alltagsworten:
    1. «Wir können sprechen» (links, tief)
    2. «Es wird eng» (steigend) – **Ansatzpunkt**, doppelter Ring
    3. «Es ist gerade zu viel» (Scheitel)
    4. «Später» (rechts, sinkend)
  - **Liste unter der Zeichnung** (in allen Breiten; Nummern wie in der Zeichnung):
    1. **Wir können sprechen.** «Zuhören, Abwägen und Planen können leichter fallen. Ob ein klärendes Gespräch gewünscht ist, entscheiden beide.» Was hilft: «Kurze Sätze, Zuhören und Absprachen.» Beispiel: «Ich möchte verstehen. Lass uns bei einer Sache bleiben.»
    2. **Es wird eng.** «Argumente und Erklärungen kommen schwerer an, das Gespräch wird enger.» Ansatzpunkt für Angehörige: «Senken Sie Ihr eigenes Tempo, achten Sie auf Ihre eigene Anspannung und bieten Sie eine Pause an. Sie müssen die andere Person nicht beruhigen.»
    3. **Es ist gerade zu viel.** «Zuhören, Abwägen und Impulse steuern können vorübergehend schwerer werden. Die Anspannung kann sich auch als Rückzug oder Schweigen zeigen.» Was hilft: «Sicherheit geht vor Klärung. Eine Pause, Abstand und weniger Reize helfen.» Beispiel: «Ich merke, es ist gerade zu viel.»
    4. **Später.** «Bieten Sie neuen Kontakt nur an, wenn es für Sie sicher und gewollt ist.» Beispiel: «Ich lasse dir Raum. Ob und wann wir wieder sprechen, können wir später neu entscheiden.»
  - **Vertiefung «Grenzen des Bildes»:** «Die Kurve stellt den Verlauf beispielhaft dar. Sie ist kein validiertes Messinstrument und keine Beurteilung des Zustands einer Person. Wie sich Anspannung zeigt, ist individuell und von aussen nicht sicher erkennbar.» (nach dem Handout `anspannungskurve`, leicht angepasst) Dazu, was bisher in der Vertiefung stand, ohne Fachbegriffe.
  - **Entfällt:** «Denk-Modus», «Alarm-Modus», die Achse «← weniger angespannt / stärker angespannt →», «bei einer oder beiden Personen», die drei Felder mit verschieden dicken Linien. Die beiden Begriffe kommen auf keiner Seite mehr vor.
  - **Gestaltung:** nur Profil-Tokens, Linien 2 px, höchstens ein gefülltes blaues Feld, alle Beschriftungen HTML-Text, Theme «Hoher Kontrast» prüfen. Bei 360 px bleibt die Kurve als kleine Zeichnung mit Nummern; die Liste trägt den Text.
  - **Plan:** `visualPlan` › `v-vs-anspannung` nachführen (Format, Aussage, «Was wird besser verstanden?»: wann Reden hilft und wann eine Pause besser ist; `entryPoint` Stelle 2).
  - Bildlegende: Kennzeichnung «Eigene didaktische Darstellung nach dem Handout «Die Anspannungskurve»», Bezugspunkte wie bisher. Die Kurzbeschreibung als `p.puk-sr`.

- **D-4 · Abschnitt 07 «Was Verstehen leistet – und was nicht»** (Bestand `verstehen.md` Z. 160–166, wörtlich):
  - «Verstehen hilft, Verhalten genauer einzuordnen, eigene Grenzen früher zu erkennen und Mitgefühl mit Klarheit zu verbinden.» (bleibt)
  - «Verstehen bedeutet nicht, alles auszuhalten. Es bedeutet auch nicht, dass Sie jede Eskalation auffangen, jedes Verhalten korrekt einordnen oder jede Krise mit der richtigen Reaktion entschärfen könnten.»
  - «Mitgefühl und Selbstschutz widersprechen sich nicht. Gerade in belasteten Beziehungen kann es verantwortungsvoll sein, Grenzen zu setzen, Distanz zu schaffen oder Hilfe von aussen einzubeziehen.»
  - Merksatz als `div.puk-longform__reflection` mit `h3` «Merksatz für Angehörige» und «Verstehen hilft, ruhiger und klarer zu handeln. Es verpflichtet Sie nicht dazu, sich selbst zu verlieren.»
  - Danach wie bisher die Links «Mehr dazu unter …».
  - `visualPlan` › `v-vs-einordnung` nachführen.

## 4. Regeln

- Die Wortlaute in D-1 bis D-4 gelten so, wie sie hier stehen.
- Der Richtwert für die Länge gilt nicht. Nicht kürzen, um Wörter auszugleichen.
- Abgleich für D-3 und D-4 nachführen; `abgleich/pruefe-abgleich.mjs` mit 0 Zeilen ohne Fundstelle.

## 5. Danach

- `node tools/build.mjs` ohne blockierende Befunde, `node tools/gate.mjs --selftest` 50/50.
- Selbstprüfung in `PRUEFBERICHT.md`: Tabelle je ID D-1 bis D-4 mit «umgesetzt, wie, Beleg»; Matrix-Zeile für die neue Abbildung 2; Bildschirmfotos der neuen Abbildung bei 1280 und 360 px angesehen.
- Im `PRUEFBERICHT.md` nur den Abschnitt «Selbstprüfung der bauenden Sitzung» ändern.
- Pull Request bleibt Entwurf.

## Hinweis

R3-K-02 im Prüfbericht («`kennzahlen.mjs` fehlt») trifft nicht zu: Die Prüfung hatte die Datei nicht heruntergeladen. Prüfung 1 berichtigt das im nächsten Prüfbericht.
