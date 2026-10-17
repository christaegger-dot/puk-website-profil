# Korrekturauftrag · Borderline-Website, Etappe 1e

Stand 09.10.2026. Gilt für `templates/website/borderline-angehoerige/` auf dem Branch `borderline-umbau`. Für die **bauende Sitzung**.

## 1. Anlass und Entscheid

- **Fachliche Durchsicht der Seite `beziehungen`** (Fachstelle, Chat 09.10.2026): Die Seite ist fachlich sorgfältig, aber zu abstrakt, mit vielen Verneinungen und zu wenig «Was kann ich tun?».
- **Entscheid der Fachstelle:** Die Seite wird in einfacher, praxisnaher Sprache neu gefasst. Jeder Abschnitt bekommt, wo passend, ein kurzes «Was Sie tun können» mit Beispielsatz. Bei Aussagen über die betroffene Person, über Ursachen, Diagnose und Verlauf bleiben die Absicherungen.
- **Geprüft:** Die neue Fassung hat eine eigene Prüfsitzung Aussage für Aussage mit der bisherigen Fassung und dem Bestand verglichen. Keine Aussage fehlt, keine Absicherung über die Person ist entfallen. Die gefundenen Bedeutungsverschiebungen sind eingearbeitet.
- **Nächster Schritt danach:** Die Fachstelle liest die Seite. Gefällt die Fassung, werden `verstehen` und `grenzen` genauso überarbeitet.

## 2. Regeln

- Die Texte in Abschnitt 4 gelten so, wie sie dort stehen. Keine eigenen Formulierungen, nichts weglassen.
- Der Richtwert für die Länge gilt nicht. Die Seite wird länger (geschätzt +25 %); das ist so gewollt.
- Für diese Seite ersetzt die neue Fassung den Wortlaut aus W1-7 («Regulation»): Neu steht «alle schwierigen Gefühle auffangen». Die Fachstelle prüft das beim Lesen.
- **«Was Sie tun können»** als `<p><strong>Was Sie tun können:</strong> …</p>`, in Definitionslisten als zweiter Absatz im `dd`. Kein neues CSS; nur Profil-Elemente.
- **Abgleich:** Jeder geänderte Satz steht mit Status «umformuliert (einfache Sprache, 1e)» und neuer Fassung. Neue Sätze (Beispielsätze, «Das kann kränken», Hinweis auf die Beratung) als «neu (1e)». `abgleich/pruefe-abgleich.mjs` mit 0 Zeilen ohne Fundstelle.

## 3. Seite `verstehen`, Stelle 2 (falls noch nicht umgesetzt)

Abbildung 2, Stelle 2 «Es wird eng», Text des Ansatzpunkts: «Argumentieren Sie nicht weiter und machen Sie weniger Druck. Senken Sie Ihr eigenes Tempo, achten Sie auf Ihre eigene Anspannung und bieten Sie eine Pause an. Sie müssen die andere Person nicht beruhigen.» Kein eigenes «Was hilft» bei Stelle 2.

## 4. Seite `beziehungen`: neue Fassung

Element-IDs wie in `content/beziehungen.html`. «Was Sie tun können» steht als eigener Absatz mit fettem Anfang `<strong>Was Sie tun können:</strong>`; in Definitionslisten als zweiter Absatz im `dd`. Links: Ziel wie bisher. **Unverändert bleiben:** Oberzeile, H1, Seitentitel, Abbildung 1 (Titel, Kernaussage, Stationen, Leserichtung, Rücksprung, Legende) und Abbildung 2 vollständig, die Quellenliste.

### Kopf

- **Einleitung** (`p.puk-longform__intro`): «Warum kommt gut gemeinte Unterstützung manchmal ganz anders an? Diese Seite zeigt, wie sich Spannungen zwischen zwei Menschen gegenseitig verstärken können – und wo Sie ansetzen können. Borderline kann beeinflussen, wie jemand Nähe oder Zurückweisung erlebt. Die Diagnose erklärt aber nicht die ganze Person und nicht jeden Konflikt.»
- **Wegweiser** (Linktexte, in dieser Reihenfolge): «Was verbindet» · «Bedeutungsschleife» · «Was Reaktionen verschärfen kann» · «Zwei Sichten» · «Was helfen kann» · «Verantwortung und Schutz».

### 01 · `verbindung`

- Kicker: «01 · Was verbindet». Titel bleibt: «Was verbindet Sie bereits?»
- Absatz: «Zuneigung, Humor, Fürsorge und gemeinsame Freude sind echt, auch wenn es Krisen gibt. Sie machen Verletzungen aber nicht ungeschehen.»
- Absatz vor der Liste: «Was eine Beziehung tragen kann:»
- Liste:
  - «Nähe, bei der niemand etwas erklären, lösen oder beweisen muss»
  - «verlässliche kleine Gesten»
  - «gemeinsames Leben ausserhalb der Erkrankung»
  - «Beide können zu Nähe, Klärung und Veränderung beitragen.»
- **Was Sie tun können:** «Fragen Sie sich: «Was trägt unsere Beziehung – und wann gelingt der Kontakt?» Die Antwort zeigt, worauf Sie bauen können.»

### 02 · `schleife`

- Kicker und Titel bleiben.
- Absatz: «Ein erfundenes Beispiel: Eine Schwester sagt einen Besuch ab, weil sie erschöpft ist. Eine Absage kann sich wie Zurückweisung anfühlen, auch wenn sie nicht so gemeint ist. Wie etwas wirkt, zeigt nicht sicher, wie es gemeint war.»
- Abbildung 1, Kurztext (`p.puk-vis-short`): «Was die eine Person tut, kann für die andere zum Anlass werden. Das Modell ist eine mögliche Erklärung, keine sichere Aussage darüber, was eine bestimmte Person denkt oder will. Angehörige setzen bei ihrer eigenen Reaktion an.»
- Abbildung 1, Ansatzpunkt (`p.puk-vis-ansatz`, Text nach dem Schlüssel): «Statt sich weiter zu verteidigen, können Sie das Gefühl anerkennen, nachfragen, wie die Absage angekommen ist, und Ihre eigene Grenze halten. Zum Beispiel: «Wie hast du meine Absage verstanden?» Oder: «Ich kann verstehen, weshalb diese Situation für dich schwierig war. Und ich darf ernst nehmen, was dein Verhalten bei mir ausgelöst hat.» Sie müssen die Schleife nicht allein unterbrechen: Der Ansatzpunkt ist eine Möglichkeit, keine Pflicht.»

### 03 · `verstaerker`

- Kicker: «03 · Was Reaktionen verschärfen kann». Titel: «Was den Spielraum zwischen Anlass und Reaktion verengen kann»
- Absatz: «Die folgenden Punkte gehören zu einzelnen Stationen der Schleife. Sie können helfen, eine Reaktion zu verstehen. Einen ganzen Menschen erklären sie nicht.»
- **dt** «Station 2 · Ein inneres Warnsignal kann früh anspringen»
  - dd: «Unklare Signale, etwa eine späte Antwort oder ein knapper Satz, können schnell wie Ablehnung oder drohender Verlust wirken. Für die betroffene Person ist dieses Erleben real, auch wenn Sie es anders gemeint haben. Und manchmal war die Zurückweisung tatsächlich da.»
  - **Was Sie tun können:** «Eine kurze, verlässliche Ankündigung kann helfen: «Ich bin bei der Arbeit. Ich melde mich heute Abend.» Sie müssen sich dafür nicht rechtfertigen.»
- **dt** «Station 2 · Aus einem Fehler kann ein Urteil über die ganze Person werden»
  - dd: «Kritik kann ankommen als «Ich bin schlecht». Dann können Abwehr oder Rückzug folgen, und eine Klärung wird schwieriger. Ob es im Einzelfall so ist, bleibt offen.»
  - **Was Sie tun können:** «Benennen Sie das Verhalten, ohne die ganze Person abzuwerten: «Die Beschimpfung hat mich verletzt. Du bist deshalb nicht als ganzer Mensch schlecht.»»
- **dt** «Station 3 · Starke Gefühle können den Spielraum verengen»
  - dd: «Im Streit kann man an einem Menschen fast nur noch das Enttäuschende sehen. Gute Erfahrungen von früher sind dann kaum noch spürbar. Die frühere Zuneigung war deshalb nicht automatisch unecht. Mehr dazu auf der Seite «Verstehen»: [Wenn die Anspannung steigt] und [Wenn Bewertungen einseitiger werden].» (die beiden Links wie bisher)
  - **Was Sie tun können:** «Machen Sie eine Pause, bevor Sie weiterreden. Sie schafft Raum für eine spätere Klärung. Und sagen Sie beides: «Ich bin verletzt – und du bist mir wichtig.»»
- **dt** «Station 4 · Nähe, Rückzug und plötzliche Entfernung»
  - dd: «Nähe kann Sicherheit geben und zugleich verletzlich machen. Es kann vorkommen, dass jemand Nähe sucht und sich später zurückzieht. Warum das so ist und ob Absicht dahintersteckt, lässt sich von aussen nicht sagen. Wenn jemand plötzlich verstummt, abwesend wirkt oder sich anders erinnert als Sie, kann das viele Gründe haben. Ein möglicher Grund ist eine Dissoziation: ein Gefühl, wie abgetrennt oder nicht ganz da zu sein. Ob das zutrifft, können Sie aus dem Verhalten allein nicht feststellen.»
  - **Was Sie tun können:** «Fragen Sie später, in einem ruhigen Moment: «Vorhin warst du plötzlich weit weg. Wie war das für dich?» Kommen solche Erfahrungen wiederholt vor, gehören sie in die Behandlung. Sie können die Person ermutigen, sie dort anzusprechen.»
- **dt** «Station 5 · Wenn es bei anderen besser klappt»
  - dd: «Vielleicht wirkt die Person bei Freunden oder bei der Arbeit ruhiger als bei Ihnen. Das kann kränken. Was in einem Umfeld gut gelingt, kann unter Belastung in einem anderen schwerer fallen. Dass sich jemand je nach Umfeld anders verhält, beweist nicht, dass die Person bewusst steuert oder täuscht. Es beweist auch nicht, dass Sie die Schwierigkeiten verursacht haben.»
  - **Was Sie tun können:** «Fragen Sie, wenn es möglich und sicher ist, wie die Person das erlebt. Ihre eigenen Grenzen gelten trotzdem.»

### 04 · `zwei-sichten`

- Kicker und Titel bleiben.
- Absatz 1: «In einem Konflikt kann vieles zugleich stimmen. Zum Beispiel: Die Beschwerde ist berechtigt. Die Grenze war unklar formuliert. Und trotzdem hat hohe Anspannung die Reaktion verstärkt. Auch Ihre eigenen Reaktionen werden Teil der Schleife, zum Beispiel wenn Sie sich immer ausführlicher erklären, aus Angst vor Streit zusagen, kontrollieren oder sich zurückziehen.»
- Absatz 2: «Vermutungen können sich wie Gewissheiten anfühlen, auch bei Angehörigen. Ob und wie stark jemand mitfühlt, lässt sich aus der Diagnose nicht ablesen.»
- **Was Sie tun können:** «Prüfen Sie eine Vermutung mit einer Frage, statt sie für sicher zu halten: «Ich habe den Eindruck, du bist enttäuscht von mir. Stimmt das?»»

### 05 · `was-hilft`

- Kicker: «05 · Was helfen kann». Titel: «Was die Beziehung stärken kann»
- Absatz: «Wenn beide stark angespannt sind, kommen zuerst Sicherheit, Abstand oder eine Pause. Die Klärung kommt später. Ist wieder Ruhe da, lässt sich die Schleife an mehreren Stellen unterbrechen:»
- Liste:
  - «bei der Bedeutung: eine Vermutung zuerst mit einer Frage prüfen (siehe «Zwei Sichten»)»
  - «bei der Unterstützung: zugewandt und begrenzt bleiben (siehe unten)»
  - «später, in einem eigenen Gespräch: klären, wer wofür Verantwortung übernimmt, was wieder gutzumachen ist und was es braucht, damit man sich wieder aufeinander verlassen kann»
- Absatz: «Kein Satz garantiert eine bestimmte Reaktion.»
- **dt** «Zugewandt und begrenzt bleiben» – dd: «Lieber eine kleine Zusage, die Sie halten können, als ein grosses Versprechen: «Du bist mir wichtig. Heute kann ich nicht kommen. Morgen können wir telefonieren.»»
- **dt** «Unterstützung verteilen» – dd: «Eine Beziehung kann helfen. Sie sollte aber weder alle schwierigen Gefühle auffangen noch eine Behandlung ersetzen. Auch eigene Strategien der Person, weitere Bezugspersonen und Fachleute können mittragen: «Ich begleite dich dabei – und ich kann das nicht allein tragen.»»

### 06 · `verantwortung`

- Kicker und Titel bleiben.
- Absatz 1: «Eine Erklärung für ein Verhalten sagt noch nicht, ob es in Ordnung ist oder ob die Beziehung sicher ist. Es hilft, vier Fragen auseinanderzuhalten: Was könnte die Person innerlich erleben? Was tut sie tatsächlich? Wie wirkt das auf andere? Und was braucht es für Verantwortung und Schutz?»
- Absatz 2: «Schmerz kann Verhalten erklären. Er macht Einschüchterung, Gewalt oder andere Übergriffe aber nicht in Ordnung. Wer Schutz braucht, muss nicht zuerst alle Motive verstehen. Was dann wichtig ist, steht auf der Seite «Grenzen» unter [Wenn Gewalt oder Bedrohung vorkommt].» (Link wie bisher)
- Absatz 3: «Bei Suizidgedanken oder Selbstverletzung darf Hilfe nie zurückgehalten werden – auch nicht aus der Sorge, Zuwendung könnte das Verhalten verstärken. Dann braucht es eine fachliche Einschätzung.»
- Direkt danach unverändert: `<p data-responsibility-inline></p>`
- Absatz 4: «Angehörige dürfen zur Veränderung beitragen. Sie sind aber keine Therapeutinnen oder Therapeuten und nicht allein verantwortlich für den Verlauf oder die Beziehung. Es gibt keine «perfekte» Reaktion, die eine Beziehung repariert.»
- **Was Sie tun können:** «Holen Sie sich selbst Unterstützung, zum Beispiel bei der [Beratung der Fachstelle Angehörigenarbeit].» (Link auf die Beratung auf `index`, gleiche Form wie auf `grenzen` › Kontakt)
- Grundlage: «<strong>Grundlage:</strong> Studien beschreiben Gruppen, nicht eine bestimmte Person oder Beziehung. Quellen: …» (Quellenliste unverändert)

## 5. Danach

- `node tools/build.mjs` ohne blockierende Befunde, `node tools/gate.mjs --selftest` 50/50. Der Verweis im Text steht weiter direkt nach dem Satz zu Suizidgedanken.
- Bildschirmfotos von `beziehungen` bei 1280 und 360 px ansehen; kein Überlauf.
- Selbstprüfung in `PRUEFBERICHT.md`: Tabelle je Abschnitt (Kopf, 01 bis 06) mit «umgesetzt, Beleg»; Wortzahl alt und neu; Zahl der Sätze mit Verneinung alt und neu. Nur den Abschnitt «Selbstprüfung der bauenden Sitzung» ändern.
- Pull Request bleibt Entwurf.
