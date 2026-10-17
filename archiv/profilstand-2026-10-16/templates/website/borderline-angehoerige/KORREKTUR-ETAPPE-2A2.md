# Korrekturauftrag · Borderline-Website, Etappe 2a-2

Stand 10.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheide

- **Grundlage:** Nachprüfung der Korrektur 2a-K (Commit `8d33dbb`, Prüfung 1).
- **Entscheide der Fachstelle vom 10.10.2026:**
  - Das Weg-Bild bekommt wieder einen gewundenen Weg (Abschnitt 2).
  - Ein Absatz auf `selbstfuersorge` wird klarer gefasst, und ein entlastender Satz kommt zurück (Abschnitt 3).
  - Ein Satz auf `rolle` wird an Etappe 1 angeglichen (Abschnitt 4).
- **Geändert werden nur** die genannten Stellen, der Plan, soweit nötig, und der Abgleich. Alles andere bleibt.

## 2. «Ein Stück Weg» (`rolle` › `anbieten`, `v-ro-weg`)

- **Weg:** Der Weg ist seit 2a-K ein gerades Dreieck und wirkt dadurch wie ein Bergsymbol. Er soll wieder gewunden sein wie in der Skizze, die die Fachstelle gewählt hat (`BAUAUFTRAG-ETAPPE-2A.md`, Anhang A): weiche Kurven, die in die Ferne führen.
- **Figuren:** Die Verbesserungen aus 2a-K bleiben:
  - Die Wegkanten berühren die Köpfe nicht. Sie laufen hinter den Schultern oder seitlich an den Figuren vorbei.
  - Eine Ferse ist gehoben.
  - Die Arme bleiben bei 360 px vom Körper getrennt sichtbar.
- **Fest bleibt:** zwei Menschen nebeneinander, von hinten, gleichwertig, niemand führt oder trägt den anderen.
- **Technik:** nur Profil-Klassen, keine Hexwerte, keine `style`-Attribute.
- **Prüfen:** Bildschirmfotos bei 1280 und 360 px und im Theme «kontrast», ansehen. Miss den kleinsten Abstand zwischen Wegkante und Kopf.

## 3. `selbstfuersorge` › `kraft`

| bisher | neu |
| --- | --- |
| «Einige Angehörige berichten auch von Phasen, in denen sie Stimmungen genauer beobachten, Worte abwägen oder mit Rückzug und Ärger rechnen. Das ist kein typischer Verlauf und lässt sich nicht aus der Diagnose vorhersagen, verdient aber Aufmerksamkeit, auch wenn äusserlich wenig sichtbar ist.» | «Einige Angehörige berichten auch von Phasen, in denen sie Stimmungen genauer beobachten, Worte abwägen oder mit Rückzug und Ärger rechnen. Das ist eine mögliche Erfahrung, kein typischer Verlauf, und lässt sich nicht aus der Diagnose vorhersagen. Wenn Sie sich oft wachsam oder erschöpft fühlen, verdient das Aufmerksamkeit, auch wenn von aussen wenig sichtbar ist. Sie sind weder dafür verantwortlich, dass eine Beziehung vorhersehbar ist, noch dafür, die Gefühle eines anderen Menschen auszugleichen.» |

**Abgleich:** Die Bestandszeilen dieser Sätze (`unterstuetzen--alltag.md`, darunter s303 und s307) bekommen die neue Fassung mit Status «umformuliert (2a-2)».

## 4. `rolle` › `schuld`

| bisher | neu |
| --- | --- |
| «Ein Vergleich mit anderen Familien erklärt weder die Ursachen noch Ihre persönliche Verantwortung.» | «Ein Vergleich mit anderen Familien erklärt nicht, warum jemand erkrankt. Daraus folgt keine Schuld.» |

- Der Satz ist die Antwort auf «Andere Familien haben dieses Problem nicht.».
- «Daraus folgt keine Schuld» nimmt den freigegebenen Wortlaut von `verstehen`, Annahme 3, auf.
- **Abgleich:** Die Bestandszeile bekommt die neue Fassung mit Status «umformuliert (2a-2)».

## 5. Danach

- **Build und Gates:**
  - `node tools/build.mjs`: 0 blockierend
  - `node tools/gate.mjs --selftest`: 53/53
  - `node tools/gate.mjs --production`: wie bisher 13 blockierend
  - `node abgleich/pruefe-abgleich.mjs`: 0 ohne Fundstelle
- **Selbstprüfung:** Setze in `PRUEFBERICHT.md` einen kurzen Block «Korrektur 2a-2» über den Block 2a-K. Er enthält Stand und Beleg je Abschnitt und die Fotos der Zeichnung. Führe die Liste «Neue Sätze zur Freigabe» nach:
  - die drei geänderten Sätze aus Abschnitt 3
  - die zwei Sätze aus Abschnitt 4
- **Keine Änderung** an den Seiten der Etappe 1 und an `index`.
- Der Pull Request bleibt Entwurf.
