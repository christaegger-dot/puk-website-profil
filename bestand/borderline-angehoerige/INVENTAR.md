# Bestand Borderline-Website · Inventar

**Zweck:** Bestandsaufnahme der Website «Borderline · Hilfe für Angehörige» (Repository `christaegger-dot/borderline-angehoerige`) als Grundlage für den Umbau ins PUK Website-Profil 2026.10. Nur Analyse; dieser Ordner wird nicht gemergt und ist keine Website unter `templates/`.

**Stand:** erhoben am 08.10.2026 aus Commit `5c8471c` (Merge PR #658, Branch `main`). Im Repository `borderline-angehoerige` wurde nichts geändert und kein Branch angelegt. Live-Adresse laut Code: `https://borderline-angehoerige.netlify.app`.

**Technik der Bestandswebsite:** Vite + React (Single-Page-App, Router `wouter`), vorgerenderte HTML-Hüllen je Route, Netlify-Hosting mit Funktion `material-download`. Seiten in `client/src/pages/`, Inhalte teils in `client/src/content/`, Kontakte in `client/src/data/kontakte.ts`. Die Seite `/soforthilfe` ist statisches HTML ausserhalb der App.

**Inhalt dieses Ordners**

| Pfad | Inhalt |
| --- | --- |
| `INVENTAR.md` | diese Übersicht |
| `texte/<seite>.md` | vollständiger sichtbarer Text jeder Seite (73 Dateien inkl. `_kopf-und-fusszeile.md`) |
| `abbildungen/dateien/` | Illustrationen und Bildmarken aus `client/public/puk/` sowie `og-image.jpg` |
| `abbildungen/infografiken/` | die 5 ausgelieferten Infografiken (WebP, Vollbild) |
| `abbildungen/inline-svg/` | im Code eingebettete SVG-Grafiken, aus der gerenderten Seite gesichert, plus SVG-Quelldateien `a1`/`a2` |
| `abbildungen/screenshots/` | Bildschirmfotos der HTML-Visualisierungen (keine Bilddateien im Original) |

**Vorgehen beim Text:** Die Website wurde gebaut (`vite build`) und jede Route in Chromium mit «reduzierter Bewegung» geöffnet. Ein Skript hat den Bereich `<main>` in Seitenreihenfolge als Markdown ausgelesen und dabei alle Akkordeons, `<details>`-Aufklappbereiche, Reiter und Auswahl-Schaltflächen nacheinander geöffnet. Dialoge und Tooltips gibt es auf der Website nicht (Glossarbegriffe sind Links mit `title`-Attribut «… im Glossar nachschlagen»). Der Selbsttest wurde über mehrere Antwortpfade durchgeklickt. Kennzeichnungen: «[Akkordeon: …]», «[Aufklappbar: …]», «[Reiter: …]», «[Auswahl: …]», «[Vorschautext bei geschlossenem Akkordeon: …]», «[Bild: Alt-Text – Datei]», «[Grafik: …]», «[Schaltfläche: …]».

**Grenzen der Erhebung**
- Nur für Screenreader bestimmter Text (`sr-only`) wurde nicht übernommen.
- Bei Filtern (Materialien, Verstehen) ist nur die Ansicht «Alle» erfasst, da sie alle Einträge enthält.
- Laufende Übungs-Timer auf `/selbstfuersorge` («Übung starten») zeigen während der Übung wechselnde Anzeigen; erfasst ist der Text vor dem Start.
- Seitentitel = `<title>` der gerenderten Seite. Wortzahl = Wörter im sichtbaren `<main>` nach dem Aufklappen (beim Selbsttest nur die Startansicht), ohne Kopf und Fusszeile.

---

## 1. Seiten und Routen

72 erfasste Seiten: 28 Inhaltsseiten aus `client/src/app/routes.ts`, 42 Textfassungen von Handouts (Route `/materialien/text/:handoutId`, IDs aus `client/src/content/handoutTextMetas.ts`), die statische Seite `/soforthilfe` und die 404-Seite. Weiterleitungen (`shared/redirects.ts`, `netlify.toml`): `/notfallkarte`, `/notfallkarte.html`, `/notfall` → `/soforthilfe`; `/unterstuetzen` → `/unterstuetzen/uebersicht`; `/diagnostik`, `/begleiterkrankungen` → `/verstehen/…`; `/selbsthilfegruppen` → `/beratung`; `/therapieangebote` → `/unterstuetzen/therapie#therapieangebote`. `client/src/pages/Notfallkarte.tsx` ist nicht geroutet.

### 1.1 Übersicht

| # | Titel (`<title>`) | Pfad | Quelldatei | Wörter (ca.) | Textdatei |
| --- | --- | --- | --- | ---: | --- |
| 1 | Startseite – Borderline · Hilfe für Angehörige | `/` | `client/src/pages/Home.tsx` | 435 | [`texte/startseite.md`](texte/startseite.md) |
| 2 | Soforthilfe bei akuter Gefahr (statische Seite) | `/soforthilfe` | `client/public/soforthilfe/index.html` | 687 | [`texte/soforthilfe.md`](texte/soforthilfe.md) |
| 3 | Borderline verstehen – Borderline · Hilfe für Angehörige | `/verstehen` | `client/src/pages/Verstehen.tsx` | 2511 | [`texte/verstehen.md`](texte/verstehen.md) |
| 4 | Diagnostik – Borderline · Hilfe für Angehörige | `/verstehen/diagnostik` | `client/src/pages/Diagnostik.tsx` | 2346 | [`texte/verstehen--diagnostik.md`](texte/verstehen--diagnostik.md) |
| 5 | Begleiterkrankungen – Borderline · Hilfe für Angehörige | `/verstehen/begleiterkrankungen` | `client/src/pages/Begleiterkrankungen.tsx` | 1749 | [`texte/verstehen--begleiterkrankungen.md`](texte/verstehen--begleiterkrankungen.md) |
| 6 | Borderline und Beziehungen – Borderline · Hilfe für Angehörige | `/verstehen/beziehungen` | `client/src/pages/VerstehenBeziehungen.tsx` | 1993 | [`texte/verstehen--beziehungen.md`](texte/verstehen--beziehungen.md) |
| 7 | Unterstützen – Übersicht – Borderline · Hilfe für Angehörige | `/unterstuetzen/uebersicht` | `client/src/pages/UnterstuetzenUebersicht.tsx` | 945 | [`texte/unterstuetzen--uebersicht.md`](texte/unterstuetzen--uebersicht.md) |
| 8 | Unterstützen im Alltag – Borderline · Hilfe für Angehörige | `/unterstuetzen/alltag` | `client/src/pages/UnterstuetzenAlltag.tsx` | 1735 | [`texte/unterstuetzen--alltag.md`](texte/unterstuetzen--alltag.md) |
| 9 | Therapie und Angehörigenrolle – Borderline · Hilfe für Angehörige | `/unterstuetzen/therapie` | `client/src/pages/UnterstuetzenTherapie.tsx` | 2580 | [`texte/unterstuetzen--therapie.md`](texte/unterstuetzen--therapie.md) |
| 10 | Krisenbegleitung – Borderline · Hilfe für Angehörige | `/unterstuetzen/krise` | `client/src/pages/UnterstuetzenKrise.tsx` | 1848 | [`texte/unterstuetzen--krise.md`](texte/unterstuetzen--krise.md) |
| 11 | Kommunizieren – Borderline · Hilfe für Angehörige | `/kommunizieren` | `client/src/pages/Kommunizieren.tsx` | 1582 | [`texte/kommunizieren.md`](texte/kommunizieren.md) |
| 12 | Grenzen setzen – Borderline · Hilfe für Angehörige | `/grenzen` | `client/src/pages/Grenzen.tsx` | 2823 | [`texte/grenzen.md`](texte/grenzen.md) |
| 13 | Selbstfürsorge – Borderline · Hilfe für Angehörige | `/selbstfuersorge` | `client/src/pages/Selbstfuersorge.tsx` | 2450 | [`texte/selbstfuersorge.md`](texte/selbstfuersorge.md) |
| 14 | Materialien – Borderline · Hilfe für Angehörige | `/materialien` | `client/src/pages/Materialien.tsx` | 2925 | [`texte/materialien.md`](texte/materialien.md) |
| 15 | Passende Inhalte finden – Borderline · Hilfe für Angehörige | `/selbsttest` | `client/src/pages/SelbsttestPage.tsx` | 135 | [`texte/selbsttest.md`](texte/selbsttest.md) |
| 16 | Impressum – Borderline · Hilfe für Angehörige | `/impressum` | `client/src/pages/Impressum.tsx` | 463 | [`texte/impressum.md`](texte/impressum.md) |
| 17 | Datenschutz – Borderline · Hilfe für Angehörige | `/datenschutz` | `client/src/pages/Datenschutz.tsx` | 814 | [`texte/datenschutz.md`](texte/datenschutz.md) |
| 18 | Genesung – Borderline · Hilfe für Angehörige | `/genesung` | `client/src/pages/Genesung.tsx` | 1585 | [`texte/genesung.md`](texte/genesung.md) |
| 19 | Beratung & Netzwerke – Borderline · Hilfe für Angehörige | `/beratung` | `client/src/pages/Selbsthilfegruppen.tsx` | 708 | [`texte/beratung.md`](texte/beratung.md) |
| 20 | Feedback – Borderline · Hilfe für Angehörige | `/feedback` | `client/src/pages/Feedback.tsx` | 231 | [`texte/feedback.md`](texte/feedback.md) |
| 21 | Glossar – Borderline · Hilfe für Angehörige | `/glossar` | `client/src/pages/Glossar.tsx` | 3153 | [`texte/glossar.md`](texte/glossar.md) |
| 22 | Buchempfehlungen – Borderline · Hilfe für Angehörige | `/buchempfehlungen` | `client/src/pages/Buchempfehlungen.tsx` | 1029 | [`texte/buchempfehlungen.md`](texte/buchempfehlungen.md) |
| 23 | Häufige Fragen – Borderline · Hilfe für Angehörige | `/faq` | `client/src/pages/FAQ.tsx` | 4949 | [`texte/faq.md`](texte/faq.md) |
| 24 | Über uns – Borderline · Hilfe für Angehörige | `/ueber-uns` | `client/src/pages/UeberUns.tsx` | 735 | [`texte/ueber-uns.md`](texte/ueber-uns.md) |
| 25 | Fachstelle Angehörigenarbeit – Borderline · Hilfe für Angehörige | `/fachstelle` | `client/src/pages/Fachstelle.tsx` | 344 | [`texte/fachstelle.md`](texte/fachstelle.md) |
| 26 | Hilfe in belastenden Situationen – Borderline · Hilfe für Angehörige | `/wegweiser` | `client/src/pages/Wegweiser.tsx` | 117 | [`texte/wegweiser.md`](texte/wegweiser.md) |
| 27 | Kommunikations-Übungen – Borderline · Hilfe für Angehörige | `/uebungen` | `client/src/pages/Uebungsszenarien.tsx` | 1886 | [`texte/uebungen.md`](texte/uebungen.md) |
| 28 | Quellen & Literatur – Borderline · Hilfe für Angehörige | `/quellen` | `client/src/pages/Quellen.tsx` | 3747 | [`texte/quellen.md`](texte/quellen.md) |
| 29 | Barrierefreiheit – Borderline · Hilfe für Angehörige | `/barrierefreiheit` | `client/src/pages/Barrierefreiheit.tsx` | 344 | [`texte/barrierefreiheit.md`](texte/barrierefreiheit.md) |
| 30 | Seite nicht gefunden – Borderline · Hilfe für Angehörige | `(404)` | `client/src/pages/NotFound.tsx` | 20 | [`texte/404.md`](texte/404.md) |
| 31 | 4 Fragen für den Alltag – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/4-alltags-tipps` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/unterstuetzen.content.ts` | 334 | [`texte/materialien--text--4-alltags-tipps.md`](texte/materialien--text--4-alltags-tipps.md) |
| 32 | Vier Arten von Grenzen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/4-arten-von-grenzen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/grenzen.content.ts` | 347 | [`texte/materialien--text--4-arten-von-grenzen.md`](texte/materialien--text--4-arten-von-grenzen.md) |
| 33 | Fünf Bereiche rund um Genesung – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/5-faktoren-genesung` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/genesung.content.ts` | 383 | [`texte/materialien--text--5-faktoren-genesung.md`](texte/materialien--text--5-faktoren-genesung.md) |
| 34 | 6 Orientierungspunkte für Angehörige – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/6-leitlinien` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/unterstuetzen.content.ts` | 393 | [`texte/materialien--text--6-leitlinien.md`](texte/materialien--text--6-leitlinien.md) |
| 35 | Alarm-Modus vs. Denk-Modus – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/alarm-modus` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/verstehen.content.ts` | 450 | [`texte/materialien--text--alarm-modus.md`](texte/materialien--text--alarm-modus.md) |
| 36 | Die Anspannungskurve – Wann Reden hilft – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/anspannungskurve` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 504 | [`texte/materialien--text--anspannungskurve.md`](texte/materialien--text--anspannungskurve.md) |
| 37 | Beispiel-Dialog – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/beispiel-dialog` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 476 | [`texte/materialien--text--beispiel-dialog.md`](texte/materialien--text--beispiel-dialog.md) |
| 38 | Beziehungs-Achtsamkeit – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/beziehungs-achtsamkeit` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/unterstuetzen.content.ts` | 347 | [`texte/materialien--text--beziehungs-achtsamkeit.md`](texte/materialien--text--beziehungs-achtsamkeit.md) |
| 39 | Die Brücke mit Geländer – Kontakt braucht Grenzen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/bruecke-gelaender` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/grenzen.content.ts` | 406 | [`texte/materialien--text--bruecke-gelaender.md`](texte/materialien--text--bruecke-gelaender.md) |
| 40 | DEAR: ein Anliegen klar formulieren – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/dear` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/grenzen.content.ts` | 397 | [`texte/materialien--text--dear.md`](texte/materialien--text--dear.md) |
| 41 | Drei Fragen zur Selbstklärung – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/drei-saeulen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/unterstuetzen.content.ts` | 345 | [`texte/materialien--text--drei-saeulen.md`](texte/materialien--text--drei-saeulen.md) |
| 42 | Der Eisberg – sichtbares Verhalten und mögliche Kontexte – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/eisberg` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/verstehen.content.ts` | 566 | [`texte/materialien--text--eisberg.md`](texte/materialien--text--eisberg.md) |
| 43 | Energie-Konto: Belastungen und Ressourcen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/energie-konto` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts` | 489 | [`texte/materialien--text--energie-konto.md`](texte/materialien--text--energie-konto.md) |
| 44 | Erlaubnis-Karte – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/erlaubnis-karte` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts` | 324 | [`texte/materialien--text--erlaubnis-karte.md`](texte/materialien--text--erlaubnis-karte.md) |
| 45 | Veränderung verläuft unterschiedlich – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/fortschritt-paradox` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/genesung.content.ts` | 287 | [`texte/materialien--text--fortschritt-paradox.md`](texte/materialien--text--fortschritt-paradox.md) |
| 46 | Der Garten: begleiten, ohne Wachstum zu erzwingen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/garten` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/genesung.content.ts` | 338 | [`texte/materialien--text--garten.md`](texte/materialien--text--garten.md) |
| 47 | Hohe Anspannung verstehen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/gehirn` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/verstehen.content.ts` | 483 | [`texte/materialien--text--gehirn.md`](texte/materialien--text--gehirn.md) |
| 48 | Genesung in Zahlen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/genesung-zahlen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/genesung.content.ts` | 354 | [`texte/materialien--text--genesung-zahlen.md`](texte/materialien--text--genesung-zahlen.md) |
| 49 | Wenn Gespräche kippen: 3 Schritte – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/gespraeche-kippen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 535 | [`texte/materialien--text--gespraeche-kippen.md`](texte/materialien--text--gespraeche-kippen.md) |
| 50 | Belastung wahrnehmen, Grenzen prüfen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/grenzen-erkennen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/grenzen.content.ts` | 375 | [`texte/materialien--text--grenzen-erkennen.md`](texte/materialien--text--grenzen-erkennen.md) |
| 51 | Grenzen setzen, ohne zu eskalieren – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/grenzen-ohne-eskalation` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 345 | [`texte/materialien--text--grenzen-ohne-eskalation.md`](texte/materialien--text--grenzen-ohne-eskalation.md) |
| 52 | Spickzettel Grenzen – Die wichtigsten Sätze – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/grenzen-spickzettel` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/grenzen.content.ts` | 370 | [`texte/materialien--text--grenzen-spickzettel.md`](texte/materialien--text--grenzen-spickzettel.md) |
| 53 | Kinder verstehen und entlasten – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/kinder` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/verstehen.content.ts` | 412 | [`texte/materialien--text--kinder.md`](texte/materialien--text--kinder.md) |
| 54 | Klare und anpassbare Absprachen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/konsistenz-prinzip` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/unterstuetzen.content.ts` | 378 | [`texte/materialien--text--konsistenz-prinzip.md`](texte/materialien--text--konsistenz-prinzip.md) |
| 55 | Spickzettel Krisenkommunikation (A4) – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/krisenkommunikation` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 372 | [`texte/materialien--text--krisenkommunikation.md`](texte/materialien--text--krisenkommunikation.md) |
| 56 | Der Leuchtturm – eigene Orientierung finden – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/leuchtturm` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/verstehen.content.ts` | 387 | [`texte/materialien--text--leuchtturm.md`](texte/materialien--text--leuchtturm.md) |
| 57 | Grenze benennen – eigenen Schritt wählen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/lmk` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/grenzen.content.ts` | 513 | [`texte/materialien--text--lmk.md`](texte/materialien--text--lmk.md) |
| 58 | Notfallplan Krise – Suizidgedanken & Selbstverletzung – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/notfallplan-krise` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/soforthilfe.content.ts` | 885 | [`texte/materialien--text--notfallplan-krise.md`](texte/materialien--text--notfallplan-krise.md) |
| 59 | Pause statt Streit – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/pause-statt-streit` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 443 | [`texte/materialien--text--pause-statt-streit.md`](texte/materialien--text--pause-statt-streit.md) |
| 60 | Radikale Akzeptanz – die Realität anerkennen und Handlungsspielraum finden – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/radikale-akzeptanz` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts` | 627 | [`texte/materialien--text--radikale-akzeptanz.md`](texte/materialien--text--radikale-akzeptanz.md) |
| 61 | Remission, Alltag und persönliche Recovery – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/remission-heilung` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/genesung.content.ts` | 443 | [`texte/materialien--text--remission-heilung.md`](texte/materialien--text--remission-heilung.md) |
| 62 | Freiwillige Unterstützung und eigene Grenzen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/rolle-genesungsprozess` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/genesung.content.ts` | 481 | [`texte/materialien--text--rolle-genesungsprozess.md`](texte/materialien--text--rolle-genesungsprozess.md) |
| 63 | Ihre Rolle klären – Was Sie freiwillig anbieten können – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/rolle-klaeren` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/unterstuetzen.content.ts` | 437 | [`texte/materialien--text--rolle-klaeren.md`](texte/materialien--text--rolle-klaeren.md) |
| 64 | Die Sauerstoffmaske – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/sauerstoffmaske` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts` | 524 | [`texte/materialien--text--sauerstoffmaske.md`](texte/materialien--text--sauerstoffmaske.md) |
| 65 | Schuld, Verantwortung und was dazwischen liegt – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/schuld-verantwortung` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts` | 763 | [`texte/materialien--text--schuld-verantwortung.md`](texte/materialien--text--schuld-verantwortung.md) |
| 66 | Wenn Bewertungen unter Stress einseitiger werden – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/spaltung` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/verstehen.content.ts` | 521 | [`texte/materialien--text--spaltung.md`](texte/materialien--text--spaltung.md) |
| 67 | Spiegeln statt Aufsaugen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/spiegeln-statt-aufsaugen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/grenzen.content.ts` | 410 | [`texte/materialien--text--spiegeln-statt-aufsaugen.md`](texte/materialien--text--spiegeln-statt-aufsaugen.md) |
| 68 | STOPP: einen Moment innehalten – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/stopp-technik` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts` | 343 | [`texte/materialien--text--stopp-technik.md`](texte/materialien--text--stopp-technik.md) |
| 69 | Warnsignale der Überlastung – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/warnsignale` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts` | 487 | [`texte/materialien--text--warnsignale.md`](texte/materialien--text--warnsignale.md) |
| 70 | Wenn Worte treffen – belastende Aussagen einordnen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/wenn-worte-treffen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 453 | [`texte/materialien--text--wenn-worte-treffen.md`](texte/materialien--text--wenn-worte-treffen.md) |
| 71 | Zuhören ohne Zustimmen – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/zuhoeren-ohne-zustimmen` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/kommunizieren.content.ts` | 400 | [`texte/materialien--text--zuhoeren-ohne-zustimmen.md`](texte/materialien--text--zuhoeren-ohne-zustimmen.md) |
| 72 | Anspannung, Kontakt und Handlungsspielraum – Textversion – Borderline · Hilfe für Angehörige | `/materialien/text/zustands-landkarte` | `client/src/pages/HandoutTextPage.tsx` + `client/src/content/handoutTextVersionContent/verstehen.content.ts` | 517 | [`texte/materialien--text--zustands-landkarte.md`](texte/materialien--text--zustands-landkarte.md) |

Summe: rund 65'513 Wörter (ohne Kopf und Fusszeile; Kopf und Fusszeile: [`texte/_kopf-und-fusszeile.md`](texte/_kopf-und-fusszeile.md)).

### 1.2 Überschriften H1–H3 je Seite

Wörtlich aus der gerenderten Seite; Einrückung = Ebene. Auch Überschriften in geöffneten Akkordeons, Reitern und Auswahlansichten.

#### Startseite – Borderline · Hilfe für Angehörige · `/`

- H1: Verstehen. Unterstützung finden. Auf sich achten.
  - H2: Ein möglicher Lernweg
  - H2: Hilfe für den Alltag
    - H3: Beratung für Sie
  - H2: Mitgefühl und Selbstschutz gehören zusammen

#### Soforthilfe bei akuter Gefahr (statische Seite) · `/soforthilfe`

- H1: Soforthilfe bei akuter Gefahr
  - H2: Was ist jetzt der schnellste passende Weg?
    - H3: Medizinische Lebensgefahr
    - H3: Gewalt oder unmittelbare Bedrohung
    - H3: Psychiatrische Krise im Kanton Zürich
    - H3: Entlastung und Gespräch
  - H2: Wenn Schutz, Beratung oder Materialien gebraucht werden
    - H3: Gewalt, Bedrohung oder Übergriff
    - H3: Weitere Hilfe
    - H3: Weitere Orientierung
  - H2: Quellen und Kontaktprüfung

#### Borderline verstehen – Borderline · Hilfe für Angehörige · `/verstehen`

- H1: Borderline verstehen, ohne die Distanz zu verlieren.
  - H2: Was Angehörige in belasteten Beziehungen erleben können
  - H2: Was die Diagnose Borderline beschreiben kann
  - H2: Wenn Nähe und Belastung zusammenkommen
  - H2: Scham, Wut und innere Überflutung
    - H3: Was sichtbar werden kann
    - H3: Offene Fragen statt Zuordnungen
  - H2: Wenn Denken unter Stress enger wird
    - H3: Alarmmodus
    - H3: Tunnelblick
    - H3: Dissoziation und Entfremdung
  - H2: Mögliche Wechselwirkungen in belasteten Beziehungen
  - H2: Was das für Angehörige bedeutet
    - H3: Sie können Verhalten genauer einordnen
    - H3: Sie erkennen eigene Grenzen früher
    - H3: Sie können Mitgefühl und Klarheit verbinden
    - H3: Sie müssen nicht alles allein tragen
  - H2: Verstehen hat Grenzen
  - H2: Häufige Mythen — und was realistischer ist
    - H3: «Borderline ist nicht behandelbar.»
    - H3: «Menschen mit Borderline manipulieren bewusst.»
    - H3: «Angehörige sind schuld.»
    - H3: «Grenzen setzen ist lieblos.»
    - H3: «Borderline ist dasselbe wie Trauma.»
    - H3: «Suizid direkt anzusprechen macht es schlimmer.»
    - H3: «Wenn jemand bei anderen stabiler wirkt, spielt er oder sie nur.»
    - H3: «Borderline betrifft nur Frauen.»
  - H2: Diagnostischer Überblick
  - H2: Begleiterkrankungen — mögliche Kombinationen
  - H2: Materialien zum Vertiefen
    - H3: Der Leuchtturm – eigene Orientierung finden
    - H3: Der Eisberg
    - H3: Wenn Bewertungen unter Stress einseitiger werden
    - H3: Anspannung, Kontakt und Handlungsspielraum
    - H3: Alarm-Modus vs. Denk-Modus
    - H3: Kinder verstehen und entlasten
    - H3: Hohe Anspannung verstehen
  - H2: Das könnte Sie auch interessieren

#### Diagnostik – Borderline · Hilfe für Angehörige · `/verstehen/diagnostik`

- H1: Wie eine Borderline-Diagnose entsteht
  - H2: Was Sie auf dieser Seite finden
  - H2: Wer führt eine Borderline-Abklärung üblicherweise durch?
  - H2: Wie läuft eine Diagnostik ab?
  - H2: Differenzialdiagnostik — kurz
  - H2: Was bedeutet die Diagnose für Sie als Angehörige?
  - H2: Was, wenn die Diagnose nicht geteilt wird oder Fragen offenbleiben?
    - H3: Was nicht hilft
    - H3: Was möglich ist
  - H2: Bin ich auch betroffen?
  - H2: Was, wenn noch keine Diagnose gestellt ist?
    - H3: Mit der Hausärzt:in sprechen
    - H3: Fachstelle Angehörigenarbeit der PUK kontaktieren
    - H3: Spezialisierte Anlaufstelle anfragen
  - H2: Diagnostik bei Jugendlichen
  - H2: Wo eine Abklärung im Kanton Zürich möglich ist
    - H3: Psychiatrische Universitätsklinik Zürich (PUK)
    - H3: ipw – Psychotherapiestation für junge Erwachsene
    - H3: Sanatorium Kilchberg
    - H3: Clienia Schlössli (Oetwil am See)
  - H2: Kein Therapieplatz oder lange Wartezeit
  - H2: Für Eltern jugendlicher Betroffener
  - H2: Sie müssen nicht warten, bis eine Diagnose gestellt ist
  - H2: Das könnte Sie auch interessieren

#### Begleiterkrankungen – Borderline · Hilfe für Angehörige · `/verstehen/begleiterkrankungen`

- H1: Wenn mehrere Erkrankungen ineinandergreifen
  - H2: Was Sie auf dieser Seite finden
  - H2: Was Komorbidität bei Borderline bedeutet
  - H2: Depressive Erkrankungen als mögliche Begleiterkrankung
  - H2: Depression und Suizidgedanken
  - H2: Was Sie als Angehörige wissen sollten
  - H2: Weitere mögliche Begleiterkrankungen — knapp
    - H3: Angststörungen
    - H3: Posttraumatische Belastungsstörung (PTBS)
    - H3: Substanzgebrauchsstörungen
    - H3: Essstörungen
    - H3: ADHS
  - H2: Was bedeutet das für die Behandlung?
  - H2: Wenn die Belastung gross wird — auch bei Ihnen
  - H2: Sie müssen nicht warten, bis sich die Lage klärt
  - H2: Das könnte Sie auch interessieren

#### Borderline und Beziehungen – Borderline · Hilfe für Angehörige · `/verstehen/beziehungen`

- H1: Borderline und Beziehungen — verstehen, was zwischen uns geschieht
  - H2: Beziehung ist mehr als ein Symptom
  - H2: Was verbindet uns bereits?
  - H2: Nicht nur was geschieht, sondern was es bedeutet
  - H2: Was den Spielraum zwischen Ereignis und Reaktion verengen kann
  - H2: Ein innerer Beziehungsalarm kann früh anspringen
  - H2: Vermutungen können sich wie Gewissheiten anfühlen
  - H2: Starke Gefühle können den Handlungsspielraum verengen
  - H2: Unterstützung kann gleichzeitig erwünscht und schwer auszuhalten sein
  - H2: Das aktuelle Gefühl kann das Gesamtbild überdecken
  - H2: Aus einem Fehler kann innerlich ein Urteil über die ganze Person werden
  - H2: Dass etwas anderswo gelingt, beweist weder Täuschung noch Ursache
  - H2: Plötzliche Entfernung oder eine andere Erinnerung hat nicht nur eine Erklärung
  - H2: Beide versuchen etwas Verständliches — und verfehlen sich
  - H2: Was Verbindung tragfähiger machen kann
  - H2: Verstehen ist keine Pflicht, alles auszuhalten
  - H2: Grundlage und Grenzen der Aussagen
  - H2: Das könnte Sie auch interessieren

#### Unterstützen – Übersicht – Borderline · Hilfe für Angehörige · `/unterstuetzen/uebersicht`

- H1: Unterstützung anbieten und eigene Grenzen wahren
  - H2: Unterstützung ist wichtig, aber nicht allmächtig
  - H2: Die Angehörigenrolle realistisch klären
    - H3: Was Sie freiwillig anbieten können
    - H3: Was nicht Ihre Aufgabe ist
  - H2: Was Unterstützung so schwierig macht
  - H2: Wenn mehrere Angehörige beteiligt sind
    - H3: Hilfreich
    - H3: Belastend
  - H2: Woran hilfreiche Unterstützung erkennbar ist
  - H2: Wann Unterstützung an Grenzen kommt
    - H3: Wenn Kinder mitbetroffen sind
  - H2: Materialien zum Thema
    - H3: Ihre Rolle klären
    - H3: Drei Fragen zur Selbstklärung
    - H3: Klare und anpassbare Absprachen
    - H3: Beziehungs-Achtsamkeit
    - H3: 6 Orientierungspunkte für Angehörige
    - H3: 4 Fragen für den Alltag
  - H2: Was möchten Sie vertiefen?
  - H2: Das könnte Sie auch interessieren

#### Unterstützen im Alltag – Borderline · Hilfe für Angehörige · `/unterstuetzen/alltag`

- H1: Im Alltag unterstützen
  - H2: Was braucht im Alltag Veränderung?
    - H3: Was kostet mich Kraft?
    - H3: Was könnte mich entlasten?
  - H2: Wenn der Alltag angespannt erlebt wird
  - H2: Was im Alltag oft wirklich hilft
    - H3: Verlässliche Absprachen
    - H3: Klar sagen, was Sie meinen
    - H3: Ruhige Präsenz statt hektisches Reparieren
    - H3: Begrenzte Verfügbarkeit
  - H2: Nach Konflikten und Rückzug
    - H3: Hilfreich kann sein
    - H3: Weniger hilfreich ist oft
  - H2: Beziehungs-Achtsamkeit im echten Alltag
  - H2: Kleine positive Inseln schaffen
  - H2: Was Sie konkret tun können
    - H3: Bedeutsame Veränderungen erfragen
    - H3: Fragen statt übernehmen
    - H3: Absprachen klar und anpassbar halten
  - H2: Wenn Entscheidungen oder Verhalten riskant werden
    - H3: Beobachtungen, die Anlass für ein Gespräch sein können
    - H3: Drei Alltagssituationen — was eher hilft
    - H3: Nach einer belastenden Situation: Erleben offen lassen
  - H2: Grenzen der Alltagsunterstützung
  - H2: Das könnte Sie auch interessieren

#### Therapie und Angehörigenrolle – Borderline · Hilfe für Angehörige · `/unterstuetzen/therapie`

- H1: Therapie und Angehörigenrolle
  - H2: Was Angehörige freiwillig anbieten können
  - H2: Mit dem Behandlungssystem zusammenarbeiten
    - H3: 1. Beobachtungen mitteilen
    - H3: 2. Vertrauliche Auskünfte erhalten
    - H3: 3. Eigene Beratung nutzen
    - H3: Der Therapeut lädt mich nicht zur Sitzung ein
    - H3: Ich möchte über meine eigene Belastung sprechen
    - H3: Ich mache mir Sorgen um den Verlauf
    - H3: Ich habe den Eindruck, dass Therapie gerade schwierig ist
    - H3: Was kann ich in einem vereinbarten Kontakt mitteilen?
    - H3: Nach einer Krise: Zuständigkeiten klären
    - H3: Die eigene Rolle und Ansprechwege klären
    - H3: Beratung für Sie
  - H2: Therapieformen knapp eingeordnet
    - H3: DBT · Dialektisch-Behaviorale Therapie
    - H3: MBT · Mentalisierungsbasierte Therapie
    - H3: Schematherapie
    - H3: TFP · Übertragungsfokussierte Psychotherapie
    - H3: Strukturierte generalistische Behandlung
  - H2: Kein Therapieplatz oder lange Wartezeit
  - H2: Welche Angebote möglich sein können
  - H2: Erstkontakt mit dem Therapeuten – Musterbrief
  - H2: Rückschläge und Unterbrüche
  - H2: Was Ihre Rolle ausdrücklich nicht ist
  - H2: Therapieangebote im Kanton Zürich
    - H3: HYPE Züri
    - H3: PUK Zürich – Erwachsene
    - H3: ipw – Psychotherapiestation für junge Erwachsene
    - H3: Clienia Schlössli
    - H3: DBT-Therapeutensuche
    - H3: Akute Hilfe
  - H2: Das könnte Sie auch interessieren

#### Krisenbegleitung – Borderline · Hilfe für Angehörige · `/unterstuetzen/krise`

- H1: In der Krise unterstützen
  - H2: Was während einer Krise helfen kann
  - H2: Was Sie in der Krise sagen können
    - H3: Präsenz zeigen
    - H3: Gefühle validieren
    - H3: Hoffnung vermitteln
    - H3: Konkrete Hilfe anbieten
    - H3: Bei Suizidgedanken direkt ansprechen
  - H2: Was Sie in der Krise vermeiden sollten
  - H2: Nach der Krise: Verarbeitung und Neubeginn
    - H3: Für die betroffene Person
    - H3: Für Sie persönlich
    - H3: Gemeinsame Nachbesprechung (wenn beide bereit sind)
    - H3: Vertrauenswiederaufbau – realistisch
    - H3: Nach der Krise: drei mögliche Anliegen
    - H3: Früherkennung trainieren
    - H3: Hinweise: wenn Belastung oder Gefahr bestehen bleibt
    - H3: Wenn Kinder mitbetroffen sind
  - H2: Das könnte Sie auch interessieren

#### Kommunizieren – Borderline · Hilfe für Angehörige · `/kommunizieren`

- H1: Zugewandt und klar kommunizieren
  - H2: Kommunikation beginnt nicht mit Technik
  - H2: Validierung: der wichtigste Ausgangspunkt
    - H3: Aufmerksam sein
    - H3: Spiegeln
    - H3: Zwischen den Zeilen verstehen
    - H3: Im biografischen Kontext verstehen
    - H3: Im aktuellen Kontext nachvollziehen
    - H3: Radikale Echtheit: auf Augenhöhe bleiben
  - H2: Timing ist oft wichtiger als der perfekte Satz
    - H3: Eher jetzt
    - H3: Eher später
  - H2: Wenn Gespräche kippen
    - H3: Ein Satz darf reichen
  - H2: Typische schwierige Situationen
  - H2: Kommunikation aus verschiedenen Angehörigenrollen
  - H2: Zwei Materialien für schwierige Gespräche
    - H3: Wenn Gespräche kippen: 3 Schritte
    - H3: Beispiel-Dialog
  - H2: Das könnte Sie auch interessieren

#### Grenzen setzen – Borderline · Hilfe für Angehörige · `/grenzen`

- H1: Grenzen setzen, das eigene Leben schützen.
  - H2: Woran Sie merken, dass eine Grenze nötig ist
    - H3: Körper und Raum
    - H3: Gefühle und Verantwortung
    - H3: Zeit und Erreichbarkeit
    - H3: Geld und Unterstützung
  - H2: Vier Arten von Grenzen
  - H2: Was brauche ich für meine Grenzen?
  - H2: Welche Grenzen zuerst?
    - H3: Sofort schützen / Hilfe holen
    - H3: Eigene Gesundheit schützen
    - H3: Klar kommunizieren
    - H3: Sorgfältig vorbereiten
    - H3: Im Blick behalten
    - H3: D · Beschreiben
    - H3: E · Empfinden ausdrücken
    - H3: A · Anliegen nennen
    - H3: R · Verstärken (positive Folgen benennen)
  - H2: DEAR: ein Anliegen klar formulieren
  - H2: Wie Grenzen eher gut kommuniziert werden
    - H3: Eher hilfreich
    - H3: Eher problematisch
  - H2: Konkrete Grenzsätze für typische Situationen
    - H3: Zeitliche Grenzen
    - H3: Finanzielle Grenzen
    - H3: Emotionale Grenzen
    - H3: Grenzen bei Rollenübernahme
  - H2: Konsequenz ist oft der schwierigste Teil
  - H2: Wie viel Kontakt ist für Sie tragbar?
    - H3: Beratung für Sie
  - H2: Wenn Grenzen schwer umzusetzen sind
  - H2: Grenzen in verschiedenen Angehörigenrollen
    - H3: Als Partner/in
    - H3: Als Elternteil
    - H3: Als erwachsenes Kind
  - H2: Wenn körperliche Gewalt oder Bedrohung vorkommt
    - H3: Wenn Kinder mitbetroffen sind
  - H2: Drei Materialien für klare Grenzen
    - H3: Die 4 Arten von Grenzen
    - H3: Belastung wahrnehmen, Grenzen prüfen
    - H3: Spickzettel Grenzen
  - H2: Das könnte Sie auch interessieren

#### Selbstfürsorge – Borderline · Hilfe für Angehörige · `/selbstfuersorge`

- H1: Auch Ihr eigenes Leben zählt.
  - H2: Was Sie sich jetzt schenken können
  - H2: Auch ich brauche Unterstützung
    - H3: Abgeben
    - H3: Begrenzen
    - H3: Beraten lassen
    - H3: Eigenes Leben bewahren
  - H2: Warnsignale für Überlastung
    - H3: Körper
    - H3: Gefühle
    - H3: Gedanken
    - H3: Verhalten
    - H3: Erholungsbedarf
  - H2: Sofort-Übungen für akute Belastung
    - H3: STOPP-Technik
  - H2: Langfristige Selbstfürsorge-Strategien
  - H2: Radikale Akzeptanz
    - H3: Was radikale Akzeptanz NICHT ist
    - H3: Was radikale Akzeptanz IST
    - H3: Freiwillige Übung: vier mögliche Schritte
  - H2: Geben Sie sich die Erlaubnis
  - H2: Beratung & Netzwerke
    - H3: Beratung für Sie
  - H2: Drei Materialien, die Selbstfürsorge greifbar machen
    - H3: Radikale Akzeptanz
    - H3: STOPP: einen Moment innehalten
    - H3: Energie-Konto: Belastungen und Ressourcen
  - H2: Hinweise für Ihre Situation
    - H3: Als Partner/in
    - H3: Als Elternteil
    - H3: Als erwachsenes Kind
  - H2: Das könnte Sie auch interessieren

#### Materialien – Borderline · Hilfe für Angehörige · `/materialien`

- H1: Materialien, die schnell Orientierung geben
  - H2: Materialien entlang des Lernwegs
  - H2: Alle Materialien
    - H3: Notfallplan Krise – Suizidgedanken & Selbstverletzung
    - H3: Der Leuchtturm – eigene Orientierung finden
    - H3: Der Eisberg – sichtbares Verhalten und mögliche Kontexte
    - H3: Ihre Rolle klären – Was Sie freiwillig anbieten können
    - H3: Spickzettel Krisenkommunikation (A4)
    - H3: Die Anspannungskurve – Wann Reden hilft
    - H3: Spickzettel Grenzen – Die wichtigsten Sätze
    - H3: Die Brücke mit Geländer – Kontakt braucht Grenzen
    - H3: Warnsignale der Überlastung
    - H3: Schuld, Verantwortung und was dazwischen liegt
    - H3: Wenn Bewertungen unter Stress einseitiger werden
    - H3: Alarm-Modus vs. Denk-Modus
    - H3: Wenn Worte treffen – belastende Aussagen einordnen
    - H3: Die DEAR-Technik – Grenzen setzen ohne Vorwürfe
    - H3: Radikale Akzeptanz – die Realität anerkennen und Handlungsspielraum finden
    - H3: Der Garten – Unterstützen, ohne Wachstum zu erzwingen
    - H3: Genesung in Zahlen
    - H3: Kinder verstehen und entlasten
    - H3: Die 4 Arten von Grenzen
    - H3: Belastung wahrnehmen, Grenzen prüfen
    - H3: Wenn Gespräche kippen: 3 Schritte
    - H3: Pause statt Streit
    - H3: Zuhören ohne Zustimmen
    - H3: Beispiel-Dialog
    - H3: Die Sauerstoffmaske
    - H3: STOPP: einen Moment innehalten
    - H3: Energie-Konto: Belastungen und Ressourcen
  - H2: Das könnte Sie auch interessieren
  - H2: Modelle und ihre Reichweite

#### Passende Inhalte finden – Borderline · Hilfe für Angehörige · `/selbsttest`

- H1: Passende Inhalte finden
  - H2: Wie würden Sie die aktuelle Situation beschreiben?

#### Impressum – Borderline · Hilfe für Angehörige · `/impressum`

- H1: Verantwortung und rechtliche Hinweise
  - H2: Verantwortlich für den Inhalt
  - H2: Zweck der Website
  - H2: Haftungsausschluss
  - H2: Quellenangaben
  - H2: Urheberrecht
  - H2: Aktualität
  - H2: Das könnte Sie auch interessieren

#### Datenschutz – Borderline · Hilfe für Angehörige · `/datenschutz`

- H1: Wie diese Website mit Daten umgeht
  - H2: Rechtsgrundlage
  - H2: Hosting und Drittanbieter
  - H2: Unser Grundsatz
  - H2: Erhebung und Verarbeitung von Daten
  - H2: Frühere persönliche Notfallkarte und lokale Daten
  - H2: Cookies
  - H2: Analyse- und Tracking-Tools
  - H2: Kontaktaufnahme per E-Mail
  - H2: Externe Links
  - H2: Downloads und Materialien
  - H2: Ihre Rechte
  - H2: Änderungen dieser Datenschutzerklärung
  - H2: Aktualität
  - H2: Das könnte Sie auch interessieren

#### Genesung – Borderline · Hilfe für Angehörige · `/genesung`

- H1: Genesung ist möglich — und kann unterschiedlich aussehen.
    - H3: Bedingungen anbieten
    - H3: Die eigene Kraft schützen
    - H3: Wachstum nicht bestimmen
  - H2: Der Garten: begleiten, ohne Wachstum zu erzwingen
  - H2: Was die Forschung zeigt
  - H2: Was Remission und Genesung bedeuten
    - H3: Symptomatische Remission
    - H3: Umfassendere Genesung
  - H2: Veränderung verläuft unterschiedlich
  - H2: Realistische Hoffnung statt glatter Zuversicht
    - H3: Weniger hilfreich
    - H3: Tragfähiger
  - H2: Was Angehörige freiwillig anbieten können
    - H3: Absprachen anbieten
    - H3: Nachfragen
    - H3: eigene Grenzen
    - H3: Information anbieten
  - H2: Mögliche Einflussbereiche rund um Genesung
  - H2: Materialien & Infografiken
    - H3: Genesung in Zahlen
    - H3: Veränderung verläuft unterschiedlich
    - H3: Remission, Alltag und persönliche Recovery
    - H3: Fünf Bereiche rund um Genesung
    - H3: Freiwillige Unterstützung und eigene Grenzen
  - H2: Das könnte Sie auch interessieren

#### Beratung & Netzwerke – Borderline · Hilfe für Angehörige · `/beratung`

- H1: Beratung & Netzwerke
  - H2: Professionelle Beratung
    - H3: Fachstelle Angehörigenarbeit PUK Zürich
    - H3: Pro Mente Sana
  - H2: Angehörigen-Netzwerke
    - H3: Stand by You Schweiz
    - H3: VASK Zürich
  - H2: Selbsthilfegruppen finden
    - H3: Selbsthilfe Schweiz
  - H2: Nächste Schritte

#### Feedback – Borderline · Hilfe für Angehörige · `/feedback`

- H1: Rückmeldung geben
  - H2: Schreiben Sie uns
  - H2: Worüber wir uns besonders freuen
  - H2: Ein Gedanke
  - H2: Das könnte Sie auch interessieren

#### Glossar – Borderline · Hilfe für Angehörige · `/glossar`

- H1: Glossar
  - H2: B
  - H2: C
  - H2: D
  - H2: E
  - H2: G
  - H2: I
  - H2: K
  - H2: L
  - H2: M
  - H2: R
  - H2: S
  - H2: Ü
  - H2: V
  - H2: Begriffe im Kontext verstehen

#### Buchempfehlungen – Borderline · Hilfe für Angehörige · `/buchempfehlungen`

- H1: Bücher für Angehörige
  - H2: Aktuell empfohlen
    - H3: Für Partner & Ehepartner
    - H3: Für Eltern
    - H3: Kinderbücher
    - H3: Erfahrungsberichte
    - H3: Zum Vertiefen
    - H3: Englischsprachig
  - H2: Historisch einflussreich oder kritisch einzuordnen
  - H2: Zu den Empfehlungen

#### Häufige Fragen – Borderline · Hilfe für Angehörige · `/faq`

- H1: Häufig gestellte Fragen
  - H2: Diagnose & Krankheitsverständnis
  - H2: Soll ich die Diagnose ansprechen?
  - H2: Ist Borderline heilbar?
  - H2: Ist Borderline erblich? Bin ich schuld?
  - H2: Warum verhält sich mein Angehöriger bei anderen regulierter und stabiler?
  - H2: Wer kann eine Borderline-Diagnose stellen?
  - H2: Was, wenn die betroffene Person die Diagnose nicht teilt oder unsicher ist?
  - H2: Wie lange dauert es, bis eine Diagnose feststeht?
  - H2: Was bedeutet es, wenn mehrere Diagnosen gleichzeitig genannt werden?
  - H2: Mein Angehöriger hat zusätzlich zur Borderline auch eine Depression — was bedeutet das?
  - H2: Kommunikation & Konflikte
  - H2: Wie reagiere ich auf bedrohlich wirkende Aussagen?
  - H2: Was sage ich, wenn mein Angehöriger mich beschuldigt?
  - H2: Was hilft bei stark wechselnden Bewertungen?
  - H2: Soll ich lügen, um Konflikte zu vermeiden?
  - H2: Grenzen & Selbstschutz
  - H2: Wann ist eine Einweisung nötig?
  - H2: Darf ich meinen Angehörigen verlassen?
  - H2: Wie schütze ich meine Kinder?
  - H2: Woran merke ich, dass mein eigenes Leben zu kurz kommt?
  - H2: Therapie & Behandlung
  - H2: Was, wenn die nahestehende Person keine Therapie möchte?
  - H2: Welche Therapie ist am besten?
  - H2: Helfen Medikamente bei Borderline?
  - H2: Soll ich an der Therapie teilnehmen?
  - H2: Wie lange dauert die Behandlung?
  - H2: Alltag & Beziehung
  - H2: Wie erkläre ich die Situation Freunden/Familie?
  - H2: Was, wenn Deutsch nicht die Hauptsprache ist oder psychische Erkrankung in unserer Familie tabuisiert ist?
  - H2: Wie gehe ich mit Eifersucht und Kontrolle um?
  - H2: Wie kann ich mein eigenes Leben behalten?
  - H2: Wann wird es besser?
  - H2: Ihre Frage ist nicht dabei?

#### Über uns – Borderline · Hilfe für Angehörige · `/ueber-uns`

- H1: Über diese Website
  - H2: Was Sie auf dieser Seite finden
  - H2: Warum diese Website?
  - H2: Unsere Prinzipien
  - H2: Quellen und ihre Funktion
  - H2: Wichtiger Hinweis
  - H2: Einordnung
  - H2: Feedback & Kontakt
  - H2: Das könnte Sie auch interessieren

#### Fachstelle Angehörigenarbeit – Borderline · Hilfe für Angehörige · `/fachstelle`

- H1: Angehörigenarbeit – professionell begleitet
  - H2: Fragen an die Fachstelle
  - H2: Kontakt aufnehmen
  - H2: Einordnung dieser Website
  - H2: Das könnte Sie auch interessieren

#### Hilfe in belastenden Situationen – Borderline · Hilfe für Angehörige · `/wegweiser`

- H1: Hilfe in belastenden Situationen
  - H2: Professionelle Hilfe bei akuter Gefahr oder Unsicherheit
  - H2: Das könnte Sie auch interessieren

#### Kommunikations-Übungen – Borderline · Hilfe für Angehörige · `/uebungen`

- H1: Kommunikation üben
  - H2: Interaktive Szenarien
  - H2: Zugewandtheit & Klarheit
    - H3: «Du bist nie für mich da!»
    - H3: Ein Zeitpunkt, zwei Vorstellungen
  - H2: DEAR
    - H3: Eigene Bedürfnisse ansprechen
    - H3: Unterstützung anbieten, Entscheidung lassen
  - H2: Validierung
    - H3: «Niemand nimmt mich ernst!»
    - H3: Der eigene Kommentar wurde anders verstanden
  - H2: Theorie nachlesen
  - H2: Das könnte Sie auch interessieren

#### Quellen & Literatur – Borderline · Hilfe für Angehörige · `/quellen`

- H1: Quellen & Literatur
  - H2: Klinische Studien & Forschung
  - H2: Fachliteratur Therapie & Behandlung
  - H2: Angehörigen-Literatur
  - H2: Diagnostik & Klassifikation
  - H2: Versorgungs-Materialien & Praxis-Manuale
  - H2: Weitere Quellen & Hintergrundliteratur
  - H2: Schweizer Rechts- und Schutzquellen
  - H2: Zur Auswahl der Quellen

#### Barrierefreiheit – Borderline · Hilfe für Angehörige · `/barrierefreiheit`

- H1: Erklärung zur Barrierefreiheit
  - H2: Konformitätsziel
  - H2: Technische Massnahmen und Prüfungen
  - H2: Bekannte Einschränkungen
  - H2: Feedback und Kontakt
  - H2: Aktualität
  - H2: Das könnte Sie auch interessieren

#### Seite nicht gefunden – Borderline · Hilfe für Angehörige · `(404)`

- H1: Seite nicht gefunden

#### 4 Fragen für den Alltag – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/4-alltags-tipps`

- H1: 4 Fragen für den Alltag
  - H2: Worum es in diesem Handout geht
  - H2: 4 Fragen für den Alltag
    - H3: Ist gemeinsames Üben gewünscht?
    - H3: Welche Veränderung ist der Person wichtig?
    - H3: Welche Absprachen passen?
    - H3: Welche Hilfe wird gewünscht?
  - H2: Merksatz
    - H3: Worum es im Alltag geht
  - H2: Was können Sie tun?
    - H3: 1. Wunsch klären
    - H3: 2. Eigene Möglichkeit prüfen
    - H3: 3. Offen nachfragen
  - H2: Das könnte Sie auch interessieren

#### Vier Arten von Grenzen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/4-arten-von-grenzen`

- H1: Vier Arten von Grenzen
  - H2: Worum es in diesem Handout geht
  - H2: Vier Bereiche im Alltag
    - H3: Körper und Raum
    - H3: Gefühle und Verantwortung
    - H3: Zeit und Erreichbarkeit
    - H3: Geld und Unterstützung
  - H2: Eine Grenze darf angepasst werden
    - H3: Selbstschutz ohne Selbstvorwurf
  - H2: Das könnte Sie auch interessieren

#### Fünf Bereiche rund um Genesung – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/5-faktoren-genesung`

- H1: Fünf Bereiche rund um Genesung
  - H2: Worum es in diesem Handout geht
  - H2: Fünf mögliche Bereiche
    - H3: Strukturierte Behandlung
    - H3: Körperliche und psychische Gesundheit
    - H3: Gewählte Beziehungen und Unterstützung
    - H3: Lebensbedingungen und Teilhabe
    - H3: Zeit und individueller Verlauf
  - H2: Kernaussage
    - H3: Keine Fünf-Punkte-Formel
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### 6 Orientierungspunkte für Angehörige – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/6-leitlinien`

- H1: 6 Orientierungspunkte für Angehörige
  - H2: Worum es in diesem Handout geht
  - H2: Die 6 Leitlinien
    - H3: 1. Veränderung braucht Zeit
    - H3: 2. Absprachen klären
    - H3: 3. Zuhören oder begrenzen
    - H3: 4. Sicherheit ernst nehmen
    - H3: 5. Zuständigkeiten besprechen
    - H3: 6. Eigene Grenzen benennen
  - H2: Merksatz
    - H3: Worum es bei den Leitlinien geht
  - H2: Merkhilfe
    - H3: Lieber klein und verlässlich
  - H2: Mögliche nächste Schritte
    - H3: 1. Passung prüfen
    - H3: 2. Wünsche erfragen
    - H3: 3. Nachjustieren
  - H2: Das könnte Sie auch interessieren

#### Alarm-Modus vs. Denk-Modus – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/alarm-modus`

- H1: Alarm-Modus vs. Denk-Modus
  - H2: Worum es in diesem Handout geht
  - H2: Mögliche Belastungen
    - H3: Individuell und nicht von aussen ablesbar
  - H2: Die zwei Modi
    - H3: Alarm-Modus
    - H3: Denk-Modus
    - H3: Übergang
  - H2: Kernaussage
    - H3: Worum es beim Alarm-Modus geht
  - H2: Orientierung
    - H3: Was in welchem Modus hilft
  - H2: Was können Sie tun?
    - H3: 1. Beobachten und innehalten
    - H3: 2. Eigenen Druck reduzieren
    - H3: 3. Neu entscheiden
  - H2: Das könnte Sie auch interessieren

#### Die Anspannungskurve – Wann Reden hilft – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/anspannungskurve`

- H1: Die Anspannungskurve – Wann Reden hilft
  - H2: Worum es in diesem Handout geht
  - H2: Merksatz
    - H3: Zentraler Satz des Handouts
  - H2: Rückzug
    - H3: Gerade kommt wenig an
  - H2: Im Gespräch
    - H3: Wir können sprechen
  - H2: Zu viel Alarm
    - H3: Es ist gerade zu viel
  - H2: Was Angehörigen hilft
  - H2: Drei Sätze für die Kurve
    - H3: Bei Rückzug
    - H3: Im Gespräch
    - H3: Bei Alarm
  - H2: Was eine Pause ermöglichen kann
  - H2: Schutzsatz
    - H3: Ein Gespräch braucht Bereitschaft und Sicherheit
  - H2: Das könnte Sie auch interessieren

#### Beispiel-Dialog – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/beispiel-dialog`

- H1: Beispiel-Dialog
  - H2: Beispiel-Dialog
    - H3: Ausgangspunkt
    - H3: Ein möglicher Ablauf
    - H3: Schutz und Akuthilfe vor Gesprächstechnik
    - H3: Ein nächster Schritt
    - H3: Weitere Handlungsmöglichkeiten
  - H2: Das könnte Sie auch interessieren

#### Beziehungs-Achtsamkeit – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/beziehungs-achtsamkeit`

- H1: Beziehungs-Achtsamkeit
  - H2: Worum es in diesem Handout geht
  - H2: 4 Schritte im Alltag
    - H3: Innehalten
    - H3: Beobachten
    - H3: Deutungen offenlassen
    - H3: Bewusst handeln
  - H2: Merksatz
    - H3: Worum es bei Beziehungs-Achtsamkeit geht
  - H2: Merkhilfe
    - H3: Eine mögliche Reihenfolge
  - H2: Was können Sie tun?
    - H3: 1. Ausprobieren
    - H3: 2. Unsicherheit benennen
    - H3: 3. Frei entscheiden
  - H2: Das könnte Sie auch interessieren

#### Die Brücke mit Geländer – Kontakt braucht Grenzen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/bruecke-gelaender`

- H1: Die Brücke mit Geländer – Kontakt braucht Grenzen
  - H2: Worum es in diesem Handout geht
  - H2: Merksatz
    - H3: Zentraler Satz des Handouts
  - H2: Die drei Teile der Brücke
    - H3: Verbindung
    - H3: Geländer
    - H3: Pfeiler
  - H2: Was die Brücke belasten kann
  - H2: Was hilft
  - H2: Drei Sätze fürs Geländer
    - H3: Verbindung
    - H3: Pause
    - H3: Unterstützung
  - H2: Schutzsatz
    - H3: Grenzen und Beziehung
  - H2: Geländer sind kein Liebesentzug
    - H3: Einordnung
  - H2: Das könnte Sie auch interessieren

#### DEAR: ein Anliegen klar formulieren – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/dear`

- H1: DEAR: ein Anliegen klar formulieren
  - H2: Worum es in diesem Handout geht
  - H2: Ein Beispiel in vier Schritten
    - H3: D · Beschreiben
    - H3: E · Empfinden ausdrücken
    - H3: A · Anliegen nennen
    - H3: R · Verstärken (positive Folgen benennen)
  - H2: Grenzen der Gesprächshilfe
    - H3: Sie können klar sein und trotzdem auf Ablehnung stossen
  - H2: Das könnte Sie auch interessieren

#### Drei Fragen zur Selbstklärung – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/drei-saeulen`

- H1: Drei Fragen zur Selbstklärung
  - H2: Worum es in diesem Handout geht
  - H2: Drei Fragen zur Selbstklärung
    - H3: Präsenz – wenn ich da sein möchte.
    - H3: Selbstorientierung – ich darf pausieren.
    - H3: Grenze – Ich schütze mich.
  - H2: Kernaussage
    - H3: Worum es bei den drei Fragen geht
  - H2: Was können Sie tun?
    - H3: 1. Prüfen
    - H3: 2. Wählen
    - H3: 3. Nachjustieren
  - H2: Das könnte Sie auch interessieren

#### Der Eisberg – sichtbares Verhalten und mögliche Kontexte – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/eisberg`

- H1: Der Eisberg – sichtbares Verhalten und mögliche Kontexte
  - H2: Worum es in diesem Handout geht
  - H2: Sichtbar
    - H3: Wut
    - H3: Vorwürfe
    - H3: Laut werden
  - H2: Mögliche Kontexte
    - H3: Angst
    - H3: Scham
    - H3: Trauer
    - H3: Einsamkeit
    - H3: Stress
  - H2: Anspannung und Ventile
    - H3: Anspannung
    - H3: Mehr Trigger
    - H3: Mehr Ventile
  - H2: Kernaussage
    - H3: Worum es beim Eisberg geht
  - H2: 3 Schritte
    - H3: 1. Erkennen
    - H3: 2. Verstehen
    - H3: 3. Handeln
  - H2: Orientierung
    - H3: Wie der Eisberg gelesen werden kann
  - H2: Das könnte Sie auch interessieren

#### Energie-Konto: Belastungen und Ressourcen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/energie-konto`

- H1: Energie-Konto: Belastungen und Ressourcen
  - H2: Worum es in diesem Handout geht
  - H2: Kernaussage
    - H3: Eine Metapher, keine Bilanz
  - H2: Was entlasten kann
    - H3: Pausen und Erholung
    - H3: Gewählte Kontakte
    - H3: Eigene Interessen
    - H3: Praktische Entlastung
    - H3: Beratung und Unterstützung
    - H3: Zeit für das eigene Leben
  - H2: Was belasten kann
    - H3: Krisen und Unsicherheit
    - H3: Ständige Erreichbarkeit
    - H3: Konflikte und Sorgen
    - H3: Isolation
    - H3: Arbeit, Wohnen und Finanzen
    - H3: Zu viele Aufgaben, zu wenig Unterstützung
  - H2: Fragen zur Selbstbeobachtung
  - H2: Was können Sie tun?
    - H3: 1. Beobachten
    - H3: 2. Einen machbaren Schritt wählen
    - H3: 3. Unterstützungsbedarf benennen
  - H2: Das könnte Sie auch interessieren

#### Erlaubnis-Karte – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/erlaubnis-karte`

- H1: Erlaubnis-Karte
  - H2: Worum es in diesem Handout geht
  - H2: Erlaubnis
  - H2: Merksatz
    - H3: Gültigkeit
  - H2: Wie Sie die Karte lesen können
    - H3: Nicht Leistung, sondern Erlaubnis
  - H2: Was können Sie tun?
    - H3: 1. Einen Satz auswählen
    - H3: 2. Sichtbar notieren
    - H3: 3. Im Alltag wiederholen
  - H2: Das könnte Sie auch interessieren

#### Veränderung verläuft unterschiedlich – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/fortschritt-paradox`

- H1: Veränderung verläuft unterschiedlich
  - H2: Worum es in diesem Handout geht
  - H2: Kernaussage
    - H3: Zentraler Satz des Handouts
  - H2: Wichtige Einordnungen
    - H3: Veränderung braucht Zeit
    - H3: Schwierigere Phasen entwerten nicht alles
    - H3: Individuelle Bedeutung
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### Der Garten: begleiten, ohne Wachstum zu erzwingen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/garten`

- H1: Der Garten: begleiten, ohne Wachstum zu erzwingen
  - H2: Worum es in diesem Handout geht
  - H2: Drei unterschiedliche Verantwortungsbereiche
    - H3: Bedingungen anbieten
    - H3: Die eigene Kraft schützen
    - H3: Wachstum nicht bestimmen
  - H2: Hoffnung ohne Auftrag zum Retten
    - H3: Auch Ihr eigenes Leben zählt
  - H2: Das könnte Sie auch interessieren

#### Hohe Anspannung verstehen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/gehirn`

- H1: Hohe Anspannung verstehen
  - H2: Worum es in diesem Handout geht
  - H2: Was gerade mitwirken kann
  - H2: Was vorübergehend schwerer werden kann
    - H3: Aufmerksamkeit verteilen
    - H3: Informationen im Blick behalten
    - H3: Flexibel abwägen
  - H2: Was Handlungsspielraum erweitern kann
    - H3: Zeit und weniger Reize
    - H3: Selbst gewählte Strategien
    - H3: Unterstützung oder Abstand
  - H2: Verstehen ist nicht entschuldigen
    - H3: Verantwortung, Grenzen und Sicherheit bleiben bestehen
  - H2: Einordnung des Modells
    - H3: Funktional, nicht anatomisch
  - H2: Das könnte Sie auch interessieren

#### Genesung in Zahlen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/genesung-zahlen`

- H1: Genesung in Zahlen
  - H2: Worum es in diesem Handout geht
  - H2: Zwei unterschiedliche Ergebnisse
    - H3: 93 %: mindestens zweijährige Remission
    - H3: 50 %: mindestens zweijährige Recovery
  - H2: Was die Zahlen nicht sagen
  - H2: Was das für Angehörige bedeutet
    - H3: Hoffnung ohne Leistungsdruck
  - H2: Das könnte Sie auch interessieren

#### Wenn Gespräche kippen: 3 Schritte – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/gespraeche-kippen`

- H1: Wenn Gespräche kippen: 3 Schritte
  - H2: Wenn Gespräche kippen
    - H3: Drei mögliche Schritte
    - H3: Eine Pause schafft Wahlraum
    - H3: Schutz und Akuthilfe vor Gesprächstechnik
    - H3: Ein nächster Schritt
    - H3: Weitere Handlungsmöglichkeiten
  - H2: Merkhilfe
    - H3: Sie entscheiden, welche Schritte gerade passen
  - H2: Das könnte Sie auch interessieren

#### Belastung wahrnehmen, Grenzen prüfen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/grenzen-erkennen`

- H1: Belastung wahrnehmen, Grenzen prüfen
  - H2: Worum es in diesem Handout geht
  - H2: Kernaussage
    - H3: Zentraler Satz des Handouts
  - H2: Mögliche Signale
    - H3: Körper
    - H3: Gefühle
    - H3: Gedanken
    - H3: Verhalten
    - H3: Erholungsbedarf
  - H2: Abschluss
    - H3: Frage zur Selbstbeobachtung
  - H2: Das könnte Sie auch interessieren

#### Grenzen setzen, ohne zu eskalieren – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/grenzen-ohne-eskalation`

- H1: Grenzen setzen, ohne zu eskalieren
  - H2: Worum es in diesem Handout geht
  - H2: Die 3-Teile-Formel
    - H3: Fakt
    - H3: Ich-Grenze
    - H3: Nächster Schritt
  - H2: Beispielsatz
    - H3: Kurzform des Handouts
  - H2: Kernaussage
    - H3: Zentraler Satz des Handouts
  - H2: Merkhilfe
    - H3: Ein Satz pro Teil genügt
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### Spickzettel Grenzen – Die wichtigsten Sätze – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/grenzen-spickzettel`

- H1: Spickzettel Grenzen – Die wichtigsten Sätze
  - H2: Worum es in diesem Handout geht
  - H2: Wann anwenden?
    - H3: Einsatz des Spickzettels
  - H2: Bereich 1: DEAR-Technik
    - H3: D – Beschreiben
    - H3: E – Äussern
    - H3: A – Behaupten
    - H3: R – Verstärken (positive Folgen benennen)
  - H2: Bereich 2: Bei Grenzüberschreitungen
  - H2: Bereich 3: Spiegeln statt Aufsaugen
  - H2: Bereich 4: Logische, machbare Konsequenz – Exit-Strategie
    - H3: Logisch
    - H3: Machbar
    - H3: Ruhig
  - H2: Das könnte Sie auch interessieren

#### Kinder verstehen und entlasten – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/kinder`

- H1: Kinder verstehen und entlasten
  - H2: Worum es in diesem Handout geht
  - H2: Worte, die entlasten
    - H3: Für jüngere Kinder
    - H3: Für ältere Kinder und Jugendliche
  - H2: Betreuung gemeinsam vorbereiten
  - H2: Was Kinder nicht übernehmen müssen
    - H3: Erwachsene tragen die Verantwortung
  - H2: Wenn die Belastung zu gross wird
  - H2: Das könnte Sie auch interessieren

#### Klare und anpassbare Absprachen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/konsistenz-prinzip`

- H1: Klare und anpassbare Absprachen
  - H2: Worum es in diesem Handout geht
  - H2: Zwei Kommunikationssituationen im Vergleich
    - H3: Konsistenz
    - H3: Gemeinsame Grenze
    - H3: Unklare oder wechselnde Absprachen
  - H2: Merksatz
    - H3: Worum es bei Absprachen geht
  - H2: Merkhilfe
    - H3: Klar und anpassbar
  - H2: Was können Sie tun?
    - H3: 1. Kurze Absprachen
    - H3: 2. Gemeinsam dranbleiben
    - H3: 3. Unterschiede transparent besprechen
  - H2: Das könnte Sie auch interessieren

#### Spickzettel Krisenkommunikation (A4) – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/krisenkommunikation`

- H1: Spickzettel Krisenkommunikation (A4)
  - H2: Worum es in diesem Handout geht
  - H2: 1. Die 3 Schritte
    - H3: Verbinden
    - H3: Kontakt
    - H3: Grenze + Plan
  - H2: 2. Der Standardsatz
    - H3: Standardsatz
  - H2: 3. Grenzen setzen
    - H3: Fakt
    - H3: Ich-Grenze
    - H3: Nächster Schritt
  - H2: 4. Ausstiegssätze
    - H3: Exit-Sätze
  - H2: 5. Wenn es nicht mehr Gespräch, sondern Krise ist
    - H3: Akute Hilfe und Notfallkontakte
  - H2: Das könnte Sie auch interessieren

#### Der Leuchtturm – eigene Orientierung finden – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/leuchtturm`

- H1: Der Leuchtturm – eigene Orientierung finden
  - H2: Worum es in diesem Handout geht
  - H2: Die Bildidee
    - H3: Situation wahrnehmen
    - H3: Eigenen Spielraum klären
    - H3: Unterstützung einbeziehen
  - H2: Kernaussage
    - H3: Was der Leuchtturm meint
  - H2: 3 Schritte
    - H3: 1. Bei sich einchecken
    - H3: 2. Eigenen nächsten Schritt wählen
    - H3: 3. Unterstützung nutzen
  - H2: Orientierung
    - H3: Was der Leuchtturm nicht bedeutet
  - H2: Das könnte Sie auch interessieren

#### Grenze benennen – eigenen Schritt wählen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/lmk`

- H1: Grenze benennen – eigenen Schritt wählen
  - H2: Worum es in diesem Handout geht
  - H2: 1. Grenze benennen
    - H3: Klar und beim eigenen Erleben bleiben
  - H2: 2. Eigenen Spielraum klären
    - H3: Selbst steuerbar statt kontrollierend
  - H2: 3. Schutzschritt umsetzen
    - H3: Ohne Strafe und ohne Wirkungsgarantie
  - H2: Kernaussage
    - H3: Zentraler Satz des Handouts
  - H2: Was können Sie tun?
  - H2: Sicherheit
    - H3: Wenn Schutz wichtiger ist als ein Gespräch
  - H2: Das könnte Sie auch interessieren

#### Notfallplan Krise – Suizidgedanken & Selbstverletzung – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/notfallplan-krise`

- H1: Notfallplan Krise – Suizidgedanken & Selbstverletzung
  - H2: Worum es in diesem Handout geht
  - H2: Bei Sorge um Sicherheit oder Unsicherheit
  - H2: Wichtiger Soforthinweis
    - H3: Sicherheit vor Diskussion
  - H2: 4 Schritte in der Krise – wenn jemand Suizidgedanken äussert oder sich selbst verletzt
    - H3: 1. Eigenes Tempo reduzieren
    - H3: 2. Ernst nehmen und direkt ansprechen
    - H3: 3. Zuhören und Gefühle anerkennen
    - H3: 4. Professionelle Hilfe einbeziehen
  - H2: Das hilft
  - H2: Das schadet eher
  - H2: Merksatz
    - H3: Leitsatz für die Akutsituation
  - H2: Nach der akuten Situation
  - H2: Selbstfürsorge für Angehörige
  - H2: Akute Hilfe und Notfallkontakte
  - H2: Wichtiger Hinweis
    - H3: Orientierung, kein Ersatz für Notfallbeurteilung
  - H2: Das könnte Sie auch interessieren

#### Pause statt Streit – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/pause-statt-streit`

- H1: Pause statt Streit
  - H2: Worum es in diesem Handout geht
  - H2: Stabil
  - H2: Warnstufe
  - H2: Eskalation
  - H2: Kernaussage
    - H3: Zentraler Satz des Handouts
  - H2: Zusatzhinweis
    - H3: Bei Gefahr
  - H2: Orientierung
    - H3: Was in welcher Stufe hilft
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### Radikale Akzeptanz – die Realität anerkennen und Handlungsspielraum finden – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/radikale-akzeptanz`

- H1: Radikale Akzeptanz – die Realität anerkennen und Handlungsspielraum finden
  - H2: Radikale Akzeptanz
    - H3: Akzeptanz ist nicht
    - H3: Akzeptanz kann heissen
    - H3: Vereinfachte Übung: vier mögliche Schritte
    - H3: Beispiel ohne akute Gefährdung
    - H3: Schutz geht vor
    - H3: Ein nächster Schritt
    - H3: Weitere Handlungsmöglichkeiten
  - H2: Das könnte Sie auch interessieren

#### Remission, Alltag und persönliche Recovery – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/remission-heilung`

- H1: Remission, Alltag und persönliche Recovery
  - H2: Worum es in diesem Handout geht
  - H2: Symptomatische Remission
  - H2: Alltag und Teilhabe
  - H2: Persönliche Recovery
  - H2: Zum Begriff «Heilung»
  - H2: Kernaussage
    - H3: Veränderung hat mehrere Seiten
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### Freiwillige Unterstützung und eigene Grenzen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/rolle-genesungsprozess`

- H1: Freiwillige Unterstützung und eigene Grenzen
  - H2: Worum es in diesem Handout geht
  - H2: Was Sie freiwillig anbieten können
    - H3: Absprachen
    - H3: Zuversicht
    - H3: Eigene Grenzen
    - H3: Nachfragen
    - H3: Information anbieten
  - H2: Was nicht Ihre Aufgabe ist
    - H3: Fachliche Behandlung übernehmen
    - H3: Genesung bewirken
    - H3: Immer verfügbar sein
    - H3: Eigene Bedürfnisse zurückstellen
    - H3: Für Genesung verantwortlich sein
  - H2: Merksätze
    - H3: Ihre Stabilität
    - H3: Kernaussage
  - H2: Orientierung
    - H3: Worum es bei Ihrer Rolle geht
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### Ihre Rolle klären – Was Sie freiwillig anbieten können – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/rolle-klaeren`

- H1: Ihre Rolle klären – Was Sie freiwillig anbieten können
  - H2: Worum es in diesem Handout geht
  - H2: Was Sie anbieten können
    - H3: Absprachen anbieten
    - H3: Zuhören anbieten
    - H3: Übungsbegleitung
    - H3: Zuversicht teilen
    - H3: Eigene Grenzen benennen
  - H2: Nicht Ihre Aufgabe
    - H3: Therapie übernehmen
    - H3: Alles übernehmen
    - H3: Kontrollinstanz
    - H3: Alle Schuld übernehmen
    - H3: Verantwortlich für Genesung
  - H2: Professionelle Hilfe
    - H3: Was Fachpersonen übernehmen
  - H2: Kernaussage
    - H3: Worum es im Handout geht
  - H2: Was können Sie tun?
    - H3: Regelmässig prüfen
    - H3: Mit Fachpersonen sprechen
    - H3: Sich erinnern
  - H2: Legende der Grafik
  - H2: Das könnte Sie auch interessieren

#### Die Sauerstoffmaske – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/sauerstoffmaske`

- H1: Die Sauerstoffmaske
  - H2: Worum es in diesem Handout geht
  - H2: Kernaussage
    - H3: Worum es bei der Sauerstoffmaske geht
  - H2: Wenn eigene Bedürfnisse zu kurz kommen
    - H3: Fast nur noch für andere da sein
    - H3: Eigene Bedürfnisse ignorieren
    - H3: Schuldgefühle
    - H3: Erschöpfung und Gereiztheit
  - H2: Eigene Schutzräume stärken
    - H3: Eigene Bedürfnisse ernst nehmen
    - H3: Mit Schuldgefühlen umgehen
    - H3: Energie und Klarheit
    - H3: Freier über Unterstützung entscheiden
  - H2: Eigene Bedürfnisse ernst nehmen
    - H3: Entlastung im eigenen Tempo
  - H2: Was können Sie tun?
    - H3: 1. Zeit nur für sich reservieren
    - H3: 2. Den eigenen Bedarf aussprechen
    - H3: 3. Passende Unterstützung suchen
  - H2: Das könnte Sie auch interessieren

#### Schuld, Verantwortung und was dazwischen liegt – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/schuld-verantwortung`

- H1: Schuld, Verantwortung und was dazwischen liegt
  - H2: Worum es in diesem Handout geht
  - H2: Kernaussage
    - H3: Zentrale Entlastung
  - H2: Was die Forschung zeigt
    - H3: Genetik und Temperament
    - H3: Zusammenspiel vieler Faktoren
    - H3: Entwicklung im Kontext
  - H2: Selbstvorwürfe und konkrete Verantwortung
    - H3: Blickrichtung
    - H3: Wirkung
    - H3: Fokus
    - H3: Ergebnis
  - H2: 5 Sätze, die Angehörige sich oft sagen – und mögliche Einordnungen
    - H3: «Ich hätte es früher merken müssen.»
    - H3: «Wenn ich ein besserer Elternteil gewesen wäre, wäre das nicht passiert.»
    - H3: «Ich tue nicht genug.»
    - H3: «Vielleicht bin ich der Grund, warum es nicht besser wird.»
    - H3: «Andere Familien haben dieses Problem nicht.»
  - H2: Kinder entlasten
    - H3: Keine Verantwortung für die Erkrankung der Eltern
  - H2: Vertiefung
    - H3: Wenn Schuldgedanken wieder auftauchen
  - H2: Merksatz
    - H3: Was Sie sich merken dürfen
  - H2: Das könnte Sie auch interessieren

#### Wenn Bewertungen unter Stress einseitiger werden – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/spaltung`

- H1: Wenn Bewertungen unter Stress einseitiger werden
  - H2: Worum es in diesem Handout geht
  - H2: Zwei Pole und eine differenziertere Mitte
    - H3: Sehr positive Bewertung
    - H3: Differenziertere Sicht
    - H3: Sehr negative Bewertung
  - H2: Was Bewertungen beeinflussen kann
  - H2: Wichtiger Hinweis
    - H3: Eine Möglichkeit, keine Festlegung
  - H2: Kernaussage
    - H3: Wenn Bewertungen unter Stress einseitiger werden
  - H2: Orientierung
    - H3: Verstehen heisst nicht hinnehmen
  - H2: 3 mögliche Schritte
    - H3: 1. Konkret wahrnehmen
    - H3: 2. Pause oder Grenze
    - H3: 3. Differenziert fortsetzen
  - H2: Das könnte Sie auch interessieren

#### Spiegeln statt Aufsaugen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/spiegeln-statt-aufsaugen`

- H1: Spiegeln statt Aufsaugen
  - H2: Worum es in diesem Handout geht
  - H2: Kernfrage
    - H3: Zentraler Prüfstein
  - H2: Übernehmen
    - H3: Was passiert?
    - H3: Mögliche Folge
    - H3: Typischer Satz
    - H3: Innere Annahme
  - H2: Spiegeln
    - H3: Was passiert?
    - H3: Mögliche Wirkung
    - H3: Typischer Satz
    - H3: Eigene Orientierung
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### STOPP: einen Moment innehalten – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/stopp-technik`

- H1: STOPP: einen Moment innehalten
  - H2: Worum es in diesem Handout geht
  - H2: Die fünf Schritte
    - H3: S - Stopp
    - H3: T - Tempo senken
    - H3: O - Orientieren
    - H3: P - Perspektive
    - H3: P - Plan
  - H2: Im eigenen Tempo
    - H3: Eine Möglichkeit, keine Pflicht
  - H2: Das könnte Sie auch interessieren

#### Warnsignale der Überlastung – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/warnsignale`

- H1: Warnsignale der Überlastung
  - H2: Worum es in diesem Handout geht
  - H2: Kernaussage
    - H3: Zentraler Satz des Handouts
  - H2: Körper
  - H2: Gefühle
  - H2: Gedanken
  - H2: Verhalten
  - H2: Erholungsbedarf
  - H2: Was können Sie tun?
    - H3: Entlastung ermöglichen
    - H3: Unterstützung früh nutzen
    - H3: Beschwerden fachlich abklären
  - H2: Bei Sorge um Sicherheit
    - H3: Professionelle Hilfe einbeziehen
  - H2: Das könnte Sie auch interessieren

#### Wenn Worte treffen – belastende Aussagen einordnen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/wenn-worte-treffen`

- H1: Wenn Worte treffen – belastende Aussagen einordnen
  - H2: Worum es in diesem Handout geht
  - H2: Kernaussage
    - H3: Bei Aussage und Wirkung bleiben
  - H2: 4 belastende Aussagen – mögliche Antworten
    - H3: «Du bist schuld, dass es mir so schlecht geht.»
    - H3: «Du verstehst mich sowieso nicht.»
    - H3: «Du bist genau wie alle anderen.»
    - H3: «Ohne dich wäre alles besser.»
  - H2: Separates Sicherheitssignal
    - H3: Wenn Suizid angesprochen wird
  - H2: Merksatz
    - H3: Anerkennen, ohne Motive festzulegen
  - H2: Das könnte Sie auch interessieren

#### Zuhören ohne Zustimmen – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/zuhoeren-ohne-zustimmen`

- H1: Zuhören ohne Zustimmen
  - H2: Worum es in diesem Handout geht
  - H2: Anerkennen
  - H2: Pauschale Schuld nicht übernehmen
  - H2: Grenze + Plan
    - H3: Kombination aus Respekt und Selbstschutz
  - H2: Kernaussage
    - H3: Zentraler Satz des Handouts
  - H2: Merkhilfe
    - H3: Gefühl anerkennen, Deutung offenlassen
  - H2: Was können Sie tun?
  - H2: Das könnte Sie auch interessieren

#### Anspannung, Kontakt und Handlungsspielraum – Textversion – Borderline · Hilfe für Angehörige · `/materialien/text/zustands-landkarte`

- H1: Anspannung, Kontakt und Handlungsspielraum
  - H2: Worum es in diesem Handout geht
  - H2: Drei getrennt betrachtete Dimensionen
    - H3: Innere Anspannung
    - H3: Kontaktwunsch
    - H3: Handlungsspielraum
  - H2: Freiwillige Fragen zur eigenen Orientierung
  - H2: Absprachen und Zustimmung
    - H3: Unterstützung gemeinsam klären
  - H2: Orientierung für Angehörige
    - H3: Ein Angebot, kein Regulierungsauftrag
  - H2: Sicherheit ist keine Phase
    - H3: Gefahr lässt sich nicht aus der Landkarte ablesen
  - H2: Einordnung des Modells
    - H3: Kein festes Phasenmodell
  - H2: Das könnte Sie auch interessieren

---

## 2. Illustrationen und Grafiken

### 2.1 Rastergrafiken, SVG-Dateien und Icons in `client/public/`

| Datei / Komponente | Format, Grösse | Verwendet auf Route (Fundort der Einbindung) | Was sie zeigt (Alt-Text bzw. Beschreibung, wörtlich) | Foto einer Person? |
|---|---|---|---|---|
| `client/public/puk/symbol.svg` | SVG, viewBox 84.77×84.72 | Alle Seiten: Kopf `client/src/components/layout/HeaderNav.tsx:71` und Fusszeile `client/src/components/Layout.tsx:96` via `BrandMark` (`client/src/components/layout/BrandMark.tsx:17`) | `alt=""`, Wrapper `aria-hidden="true"` (dekorativ); PUK-Bildmarke | Nein |
| `client/public/puk/logo.svg` | SVG, viewBox 213.97×84.74 | **Auf der Website nicht eingebunden.** Nur in den Handout-Generatoren: `scripts/generate-issue615-handouts.ts:465`, `scripts/generate-p1-illustrations.ts:194` | dort `alt="Psychiatrische Universitätsklinik Zürich"` | Nein |
| `client/public/puk/eisberg.svg` | SVG, 480×480 | `/verstehen` – `EisbergIllustration` in `client/src/pages/Verstehen.tsx:106` (Komponente `client/src/components/illustrations/EisbergIllustration.tsx:11`) | `alt` = «Eine Eisberg-Spitze über der Wasserlinie und eine grössere Form unter Wasser als Metapher für sichtbares Verhalten und mögliche Kontexte.» (Verstehen.tsx:108). Datei-internes aria-label abweichend: «… Darunter eine grosse verborgene Form, die viel mehr ausmacht als die sichtbare Spitze.» (wird per `<img>` nicht vorgelesen) | Nein |
| `client/public/puk/faden.svg` | SVG, 480×480 | **Nicht gerendert.** `FadenIllustration` nur exportiert (`client/src/components/illustrations/index.ts:21`); Kommentar `client/src/pages/Kommunizieren.tsx:40` nennt sie noch | internes aria-label: «Ein dünner Faden, der zwischen zwei Punkten gespannt ist und trotz Belastung trägt.» | Nein |
| `client/public/puk/innenraeume.svg` | SVG, 480×480 | **Nicht gerendert.** `InnenraeumeIllustration` nur exportiert (`illustrations/index.ts:22`); Kommentar `client/src/pages/Grenzen.tsx:121` | internes aria-label: «Zwei Räume, die sich respektieren — durch eine durchlässige Membran getrennt, nicht durch eine Mauer.» | Nein |
| `client/public/puk/illustrations/zuhoeren-v1.webp` | WebP 1200×800, transparenter Hintergrund | `/kommunizieren` – `client/src/pages/Kommunizieren.tsx:88` (Komponente `client/src/components/AngehoerigenIllustration.tsx:18`) | alt: «Zwei Erwachsene wenden sich im Gespräch einander zu.» Bildunterschrift: «Zuhören, nachfragen und die eigene Sicht behalten dürfen gleichzeitig möglich sein.» | Nein – gezeichnete Personen (Linien-Illustration, blau/weiss) |
| `client/public/puk/illustrations/verbindungsmomente-v2.webp` | WebP 1200×800 | `/verstehen/beziehungen` – `client/src/pages/VerstehenBeziehungen.tsx:162` | alt: «Gemeinsame Momente beim Kochen, Spazierengehen und Lachen.» Caption: «Gemeinsame Freude darf neben Schwierigkeiten bestehen. Sie verpflichtet niemanden, Verletzungen hinzunehmen.» | Nein – gezeichnete Personen (vier Szenen) |
| `client/public/puk/illustrations/zwei-perspektiven-v2.webp` | WebP 1200×800 | `/verstehen/beziehungen` – `client/src/pages/VerstehenBeziehungen.tsx:201` | alt: «Eine Person schaut auf ihr Telefon, eine andere sitzt mit einem Getränk an einem Tisch.» Caption: «Was jemand meint und was beim Gegenüber ankommt, kann sich unterscheiden. Nachfragen lässt die Bedeutung offen.» | Nein – Zeichnung |
| `client/public/puk/illustrations/pause-und-handlungsspielraum-v1.webp` | WebP 1200×800 | `/selbstfuersorge` – `client/src/pages/Selbstfuersorge.tsx:123` | alt: «Eine Person nimmt sich Zeit für eine Pause.» Caption: «Eigene Zeit muss nicht erst durch zusätzliche Hilfe verdient werden.» | Nein – Zeichnung |
| `client/public/puk/illustrations/verbunden-mit-abstand-v1.webp` | WebP 1200×800 | `/grenzen` – `client/src/pages/Grenzen.tsx:176` | alt: «Zwei Menschen mit Raum zwischen sich.» Caption: «Abstand darf Platz haben. Sie entscheiden, welcher Kontakt für Sie tragbar ist.» | Nein – Zeichnung (Person an offener Tür, zweite Person mit Tasche) |
| `client/public/og-image.jpg` | JPEG 1200×630, 59 KB | Social-Vorschau aller Seiten: `client/index.html:29`, `:48`; `client/public/soforthilfe/index.html:26`, `:39`; generiert in `shared/staticRouteShells.ts:498`, `:511` | Kein Alt-Text (Meta-Bild). Inhalt (visuell geprüft): Aquarell-Leuchtturm auf Fels, Text «Sie können helfen» / «Borderline · Hilfe für Angehörige» | **Nein** – gemalte Illustration, kein Foto |
| `client/public/favicon.ico` (16/24/32 px), `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` (180 px) | ICO/PNG | Alle Seiten: `client/index.html:50-53`; `client/public/manifest.json:13-31`; `client/public/soforthilfe/index.html` (`favicon.ico`) | Flaches Leuchtturm-Icon (terrakotta Turm, beiger Lichtkegel, grüner Sockel) | Nein |
| Kompass-Icon (Inline-SVG) | Inline-SVG | Start-Shell vor dem App-Start: `client/index.html:100`, `shared/staticRouteShells.ts:423` | `aria-hidden="true"`; Kreis mit Kompassnadel neben «Borderline · Hilfe für Angehörige» | Nein |

### 2.2 Infografiken (Handout-Vorschauen) in `client/public/infografiken/`

Im Repository liegen **nur 5** Infografik-Paare (je WebP 1042×1474 bzw. 983×1390, Thumbnail 400×566, PDF 1 Seite). Sichtbar sind sie nur, wenn `isHandoutVisualPublished(id)` wahr ist (`client/src/content/handoutGovernance.ts:474-483`). Das trifft genau auf diese fünf zu.

| Datei | Format | Verwendet auf Route (Fundort) | Was sie zeigt / Alt-Text | Foto? |
|---|---|---|---|---|
| `manus-kinder-v3.webp` · `extras/thumbnails/manus-kinder-v3.webp` · `.pdf` | WebP/PDF | `/verstehen` (`client/src/sections/VerstehenMaterialsSection.tsx:147`, alt aus `client/src/content/verstehen.ts:89`: «Kinder verstehen und entlasten»); `/materialien` (`client/src/sections/MaterialienLibrarySection.tsx:110`, alt = Titel); `/materialien/text/kinder` (`client/src/pages/HandoutTextPage.tsx:293`, alt «Vorschau des Handouts …») | Textblatt «Kinder verstehen und entlasten», Kicker «Wenn ein Elternteil psychisch erkrankt ist»; Quellen Pro Juventute, PUK | Nein |
| `puk-4-arten-von-grenzen-v1.webp` · Thumbnail · `.pdf` | WebP/PDF | `/grenzen` (`client/src/sections/GrenzenMaterialsSection.tsx:23` → `CuratedMaterialsSection.tsx:130`, alt = Titel); Lernhilfe `client/src/pages/Grenzen.tsx:264`; `/materialien`; `/materialien/text/4-arten-von-grenzen` | «Auch Ihre Bedürfnisse zählen. Vier Arten von Grenzen im Alltag», vier Kacheln mit Linien-Icons (Haus, Herz, Uhr, Geldbörse) | Nein |
| `manus-stopp-technik-v3.webp` · Thumbnail · `.pdf` | WebP/PDF | `/selbstfuersorge` (`client/src/sections/SelbstfuersorgeInfografikenSection.tsx:23` → `CuratedMaterialsSection.tsx:130`); `/materialien`; `/materialien/text/stopp-technik` | Textblatt «STOPP: einen Moment innehalten», fünf Schritte | Nein |
| `puk-garten-v1.webp` · Thumbnail · `.pdf` | WebP/PDF | `/genesung` (`client/src/pages/Genesung.tsx:685`, alt = Titel; Lernhilfe `Genesung.tsx:186`); `/materialien`; `/materialien/text/garten` | «Begleiten, ohne alles zu tragen. Ein Garten als Bild …», drei Kacheln mit Linien-Icons (Giesskanne, Bank, Pflanze/Wetter) | Nein |
| `manus-genesung-zahlen-v3.webp` · Thumbnail · `.pdf` | WebP/PDF | `/genesung` (`Genesung.tsx:685`); `/materialien`; `/materialien/text/genesung-zahlen` | Textblatt «Genesung in Zahlen» (93 % / 50 %, Zanarini 2010) | Nein |

Home-Auswahl: `client/src/content/homeFeaturedInfografiken.ts:36-114` definiert 7 Kandidaten mit eigenen Alt-Texten (z. B. «Die 4 Arten von Grenzen», «STOPP-Technik – fünf freiwillige Schritte zum Innehalten», «Garten-Metapher für unterschiedliche Bedingungen von Genesung»). Gefiltert bleiben 3 (`:120-122`). Die Anzeigekomponente `client/src/components/visualizations/VisualOrientationGrid.tsx:116` wird **nirgends eingebunden**. Auf `/` erscheinen also keine Infografik-Thumbnails.

### 2.3 Inline-SVG- und HTML-Visualisierungen (React-Komponenten)

| Komponente | Art | Route (Einbindung) | Beschreibung laut Code (wörtlich) | Status |
|---|---|---|---|---|
| `client/src/components/infografik/DiagnostikWegSvg.tsx` | Inline-SVG, `role="img"`, `<title>`/`<desc>` | `/verstehen/diagnostik` (`client/src/pages/Diagnostik.tsx:351`) | Titel «Den Weg zur Abklärung begleiten»; desc: «Fünf Schritte, wie Angehörige eine Abklärung begleiten können, entlang einer Zeitachse von oben nach unten. 1: Erste Anlaufstelle anregen oder begleiten – anbieten ja, erzwingen nein. … Eine Diagnose ist ein Anfang, kein Etikett.» (`:17-27`) | aktiv |
| `client/src/components/infografik/BegleiterkrankungenSvg.tsx` | Inline-SVG, `role="img"` | `/verstehen/begleiterkrankungen` (`client/src/pages/Begleiterkrankungen.tsx:256`) | Titel «Mögliche Begleiterkrankungen bei Borderline»; desc: «Schematische Liste von sechs möglichen zusätzlichen Diagnosen: Depression, Angststörungen, posttraumatische Belastungsstörung, Substanzgebrauchsstörung, Essstörungen und ADHS. … Angehörige müssen Beschwerden nicht selbst diagnostisch zuordnen.» (`:24-33`) | aktiv |
| `client/src/components/illustrations/AufgangIllustration.tsx` | Inline-SVG | `/genesung` (`client/src/pages/Genesung.tsx:177`) | ariaLabel: «Ein Aufgang mit Wegmarkern, der nicht zu einem Ziel führt, sondern in Bewegung hält.» | aktiv |
| `client/src/components/illustrations/SchaleIllustration.tsx` | Inline-SVG | – | nur exportiert (`illustrations/index.ts:23`) | ungenutzt |
| `client/src/components/illustrations/HeroLeuchtturmIllustration.tsx` | Inline-SVG, `aria-hidden` | – | nur exportiert (`illustrations/index.ts:25`); Kommentar `client/src/components/editorial/EditorialHero.tsx:20` | ungenutzt |
| `client/src/components/editorial/TestimonialMark.tsx`, `EditorialOrnament.tsx` | Inline-SVG, `aria-hidden` | – | dekorative Ornamente | ungenutzt |
| `client/src/assets/infografik/a1-abklaerung.svg`, `a2-begleiterkrankungen.svg` | SVG-Quelldateien | – | Ausgangsdateien der beiden Inline-Infografiken (Kommentar `DiagnostikWegSvg.tsx:1`); nicht importiert | Quelle, nicht ausgeliefert |
| `client/src/components/visualizations/BelastungHandlungsraeume.tsx` | HTML/CSS mit Icons | `/unterstuetzen/krise` (`client/src/pages/UnterstuetzenKrise.tsx:315`) | «Drei Handlungsräume statt einer Krisenampel … Bewusst ohne Grün-Gelb-Rot-Codierung, ohne Signallisten zu Suizidalität oder Selbstverletzung» (Kopfkommentar `:1-8`) | aktiv |
| `client/src/components/visualizations/EnergieHaushaltVisualisierung.tsx` | HTML/CSS | `/unterstuetzen/alltag` (`client/src/pages/UnterstuetzenAlltag.tsx:331`) | `aria-label="Belastung und Entlastung im Alltag"`, H2 «Was braucht im Alltag Veränderung?» (`:43-46`) | aktiv |
| `client/src/components/visualizations/RollenOrbitVisualisierung.tsx` | interaktives Orbit-Diagramm | `/unterstuetzen/therapie` (`client/src/pages/UnterstuetzenTherapie.tsx:258`) | «Orbit-Diagramm für die Therapie-Seite. Zeigt mögliche Beiträge und Grenzen im Therapiesystem. Interaktiv: Klick auf eine Rolle zeigt Details.» | aktiv |
| `client/src/components/HandoutSemanticVisual.tsx` | semantisches HTML (kein Bild) | `/materialien/text/radikale-akzeptanz`, `/gespraeche-kippen`, `/beispiel-dialog` (`client/src/pages/HandoutTextPage.tsx:282`; IDs `client/src/content/handoutVisualizations.ts:7-11`) | Figuren «Radikale Akzeptanz» (acceptance-path, `client/src/content/handoutTextVersionContent/selbstfuersorge.content.ts:430`), «Wenn Gespräche kippen» (conversation-path, `kommunizieren.content.ts:219`), Beispiel-Dialog (dialog-sequence, `kommunizieren.content.ts:483`) | aktiv (Entwurfsstatus) |
| Kleine dekorative SVGs | Inline-SVG, `aria-hidden` | `/unterstuetzen/alltag` (`UnterstuetzenAlltag.tsx:416`), `/genesung` (`Genesung.tsx:416`) | Icons | aktiv |

### 2.4 Defekte Bildverweise (auffällig)

| Fundort | Problem |
|---|---|
| `client/src/pages/UnterstuetzenUebersicht.tsx:439-483` | Auf `/unterstuetzen/uebersicht` werden alle 6 `unterstuetzenItems` **ohne** `isHandoutVisualPublished`-Prüfung mit `<img>` und Link «PDF öffnen» gerendert. Die Thumbnails (`client/src/content/unterstuetzen.ts:18,28,39,50,60,71`, z. B. `/infografiken/extras/thumbnails/manus-rolle-klaeren-v3-thumb.png`, `manus-drei-saeulen-v1.webp`) und PDFs existieren nicht in `client/public` und auch nicht in `dist/public`. `getHandoutOpenHref()` liefert für zurückgehaltene Quellen `null`, und der Fallback `?? item.pdfUrl` (`:443`) verlinkt dann trotzdem auf die gesperrte bzw. fehlende Datei. Die übrigen Themenseiten haben diese Prüfung (`VerstehenMaterialsSection.tsx:135`, `CuratedMaterialsSection.tsx:118`, `Genesung.tsx:677`, `MaterialienLibrarySection.tsx:80`). Ergebnis: 6 kaputte Bilder und 6 tote PDF-Links. |
| Code-Verweise allgemein | 176 verschiedene `/infografiken/…`-Pfade im Code zeigen auf Dateien, die nicht existieren. Fast alle sind durch die Governance gesperrt bzw. zurückgezogen und werden nicht angezeigt. |

### 2.5 Handout-Vorschaubilder

- **Ausgeliefert:** 5 Vollbilder und 5 Thumbnails (2.2).
- **Zurückgehaltene Entwürfe, nicht ausgeliefert:** `qa/withheld-handouts/` mit 107 Dateien (34 PDF), darunter `p1-illustrations-v3-2026-10-04/infografiken/puk-radikale-akzeptanz-v3.webp`, `puk-gespraeche-kippen-v3.webp`, `puk-beispiel-dialog-v3.webp` mit Thumbnails sowie das Paket `issue-615-visual-refresh-2026-10-05` (15 Blätter).
- **Archiv:** `qa/archived-handouts/` mit 209 Dateien (68 PDF).
- **Quellen der Druckfassungen:** `handouts/p1-illustrations/sources/*.html` (9) und `handouts/issue-615-refresh/sources/*.html` (15).

### 2.6 Kopien in diesem Ordner

Fotos von Personen: **keine** gefunden (alle Personendarstellungen sind gezeichnete Illustrationen; `og-image.jpg` ist ein gemalter Leuchtturm). Deshalb wurden alle Illustrationen kopiert.

| Datei hier | Herkunft | Seite |
| --- | --- | --- |
| `abbildungen/dateien/eisberg.svg` | `client/public/puk/eisberg.svg` | `/verstehen` |
| `abbildungen/dateien/faden.svg`, `innenraeume.svg` | `client/public/puk/` | ungenutzt |
| `abbildungen/dateien/symbol.svg` | `client/public/puk/symbol.svg` | Kopf und Fusszeile |
| `abbildungen/dateien/logo.svg` | `client/public/puk/logo.svg` | nur Handout-Generatoren |
| `abbildungen/dateien/zuhoeren-v1.webp` | `client/public/puk/illustrations/` | `/kommunizieren` |
| `abbildungen/dateien/verbindungsmomente-v2.webp`, `zwei-perspektiven-v2.webp` | `client/public/puk/illustrations/` | `/verstehen/beziehungen` |
| `abbildungen/dateien/pause-und-handlungsspielraum-v1.webp` | `client/public/puk/illustrations/` | `/selbstfuersorge` |
| `abbildungen/dateien/verbunden-mit-abstand-v1.webp` | `client/public/puk/illustrations/` | `/grenzen` |
| `abbildungen/dateien/og-image.jpg` | `client/public/og-image.jpg` | Social-Vorschau |
| `abbildungen/infografiken/*.webp` (5) | `client/public/infografiken/` | siehe 2.2 |
| `abbildungen/inline-svg/diagnostik-weg-zur-abklaerung.svg` | `DiagnostikWegSvg.tsx`, aus der Seite gesichert (CSS-Variablen eingesetzt) | `/verstehen/diagnostik` |
| `abbildungen/inline-svg/begleiterkrankungen.svg` | `BegleiterkrankungenSvg.tsx`, aus der Seite gesichert | `/verstehen/begleiterkrankungen` |
| `abbildungen/inline-svg/aufgang-genesung.svg` | `AufgangIllustration.tsx`, aus der Seite gesichert | `/genesung` |
| `abbildungen/inline-svg/a1-abklaerung.svg`, `a2-begleiterkrankungen.svg` | `client/src/assets/infografik/` (Quelldateien) | nicht ausgeliefert |
| `abbildungen/screenshots/belastung-handlungsraeume.png` | `BelastungHandlungsraeume.tsx` | `/unterstuetzen/krise` |
| `abbildungen/screenshots/energie-haushalt.png` | `EnergieHaushaltVisualisierung.tsx` | `/unterstuetzen/alltag` |
| `abbildungen/screenshots/rollen-orbit.png` | `RollenOrbitVisualisierung.tsx` | `/unterstuetzen/therapie` |
| `abbildungen/screenshots/grenzen-vier-arten.png`, `grenzen-dear.png` | Abschnitte `#grenzen-arten`, `#dear` (`LearningGuide`) | `/grenzen` |
| `abbildungen/screenshots/genesung-garten.png` | Abschnitt `#garten` (`LearningGuide`) | `/genesung` |
| `abbildungen/screenshots/handout-radikale-akzeptanz.png`, `handout-gespraeche-kippen.png`, `handout-beispiel-dialog.png` | `HandoutSemanticVisual.tsx` | `/materialien/text/…` |

Favicons und Druck-PDFs der Infografiken wurden nicht kopiert (Favicons: Leuchtturm-Icon; PDFs: siehe Abschnitt 3).

---

## 3. Materialien und Downloads

### 3.1 Wie ein PDF ausgeliefert wird

1. **Normaler Weg auf der Website:** Für freigegebene, lokale PDFs geben `getHandoutOpenHref()` und `getHandoutDownloadHref()` (`client/src/content/handouts.ts:265-304`) **direkt den statischen Pfad** `/infografiken/<datei>.pdf` zurück. Die Datei kommt aus dem Netlify-Deploy (`netlify.toml:3` `publish = "dist/public"`), also vom selben Ursprung. Die Regel `netlify.toml:108-112` (`/*.pdf → /:splat.pdf 200 force`) erzwingt nur die statische Auslieferung.
2. **Funktion `/api/material-download/:id`:** Definiert in `netlify/functions/material-download.ts:35-37` (nur GET/HEAD, `?disposition=inline|attachment`). Sie ruft `createMaterialDownloadResponse` in `server/material-download.ts:20-49` auf.
   - Lokale Quelle: Die Funktion liest die Datei aus `server/public` bzw. `client/public` (`:15-18`, `:51-77`). Fehlt die Datei im Function-Bundle, folgt ein **307-Redirect auf den statischen Pfad desselben Deploys** (`:84`, `:150-155`).
   - Entfernte Quelle (`https?://`): Die Funktion würde per `fetch()` proxen (`:38-48`, `:87-93`). Im aktuellen Register gibt es **keine** Remote-Quelle mehr, also auch **kein externes Ursprungs-Origin** (kein Manus-CDN, kein CloudFront).
   - Die UI verlinkt die Funktion nur für Remote-Assets (`buildHandoutAssetPath`, `handouts.ts:243-249`, `:284`, `:303`). Damit wird sie aktuell **von keiner Seite verlinkt**. Direkt auflösbar sind nur IDs freigegebener Assets, z. B. `kinder`, `garten`, `genesung-zahlen`, `stopp-technik`, `selbstfuersorge-stopp-technik`, `4-arten-von-grenzen`, `grenzen-die-4-arten-von-grenzen`. Gesperrte IDs ergeben 404 «Material nicht gefunden.».
   - Lokale Express-Variante: `server/index.ts` bindet dieselbe Funktion ein.
3. **`docs/manus-cdn-audit.md:1-53`** (Stand 2026-05-01): 29 frühere Manus-PDFs von `files.manuscdn.com` wurden lokalisiert; laut Dokument verweist im Content-Scope keine PDF-Quelle mehr auf `files.manuscdn.com`. Bestätigt: Der Code enthält keinen `manuscdn`-Treffer. Die 29 Dateien liegen heute **nicht** in `client/public`, nur 5 PDFs sind dort. Der Rest ist durch die Governance gesperrt und liegt in `qa/archived-handouts/` bzw. `qa/withheld-handouts/`.
4. **Sperrlogik:** `client/src/content/handoutGovernance.ts:64-437` hält 44 Einträge. Nur `publicationStatus ≠ withdrawn`, `visualAssetStatus` leer oder `published` und `approvalStatus = approved` gelten als veröffentlicht (`:474-483`). Alle anderen PDF-Quellen landen in `withheldHandoutSources` (`handouts.ts:33-46`, `:124-127`), die Links werden ausgeblendet und stattdessen erscheint die Textversion.
5. **Toter Code:** `getMaterialDownloadHref()` und `resolveMaterialDownload()` (`client/src/content/materialien.ts:391-428`) werden nirgends benutzt.

### 3.2 Materialbibliothek `/materialien` (`client/src/content/materialien.ts:55-382`)

27 Einträge: 18 fest in `materials` plus 9 Themen-Empfehlungen, die über `:307-382` angehängt werden. Spalte «PDF sichtbar» bedeutet: Datei liegt im Repo und der Link wird angezeigt.

| # | ID · Titel | Datei / URL (laut Code) | Wo liegt die Datei? | PDF sichtbar? | Textversion |
|---|---|---|---|---|---|
| 1 | `notfallplan-krise` · «Notfallplan Krise – Suizidgedanken & Selbstverletzung» (`:57`) | `/notfallplan-krise-v04.pdf`, Vorschau `/notfallplan-krise-v04-preview.webp` | **fehlt** in `client/public`; Kopie in `qa/archived-handouts/` | nein (`text-only`) | `/materialien/text/notfallplan-krise` |
| 2 | `leuchtturm` · «Der Leuchtturm – eigene Orientierung finden» (`:70`) | `/infografiken/manus-leuchtturm-v1.pdf` | fehlt (gesperrt; Entwurf `puk-leuchtturm-orientierung-v2` in `qa/withheld-handouts/`) | nein | `/materialien/text/leuchtturm` |
| 3 | `eisberg` · «Der Eisberg – sichtbares Verhalten und mögliche Kontexte» (`:83`) | `/infografiken/eisberg-der-eisberg-v8.pdf` | fehlt (Archiv) | nein | `/materialien/text/eisberg` |
| 4 | `rolle-klaeren` · «Ihre Rolle klären – Was Sie freiwillig anbieten können» (`:96`) | `/infografiken/manus-rolle-klaeren-v3.pdf` | fehlt (Archiv) | nein | `/materialien/text/rolle-klaeren` |
| 5 | `krisenkommunikation` · «Spickzettel Krisenkommunikation (2.4)» (`:111`) | `/infografiken/deeskalation-der-deeskalations-pfad-v11.pdf` | fehlt (Archiv) | nein | `/materialien/text/krisenkommunikation` |
| 6 | `anspannungskurve` · «Die Anspannungskurve – Wann Reden hilft» (`:125`) | `/infografiken/manus-anspannungskurve-v2.pdf` | fehlt (Archiv) | nein | `/materialien/text/anspannungskurve` |
| 7 | `grenzen-spickzettel` · «Spickzettel Grenzen – Die wichtigsten Sätze» (`:139`) | `/infografiken/manus-grenzen-spickzettel-v2.pdf` | fehlt (Archiv) | nein | `/materialien/text/grenzen-spickzettel` |
| 8 | `bruecke-gelaender` · «Die Brücke mit Geländer – Kontakt braucht Grenzen» (`:153`) | `/infografiken/manus-bruecke-gelaender-v2.pdf` | fehlt (Archiv) | nein | `/materialien/text/bruecke-gelaender` |
| 9 | `warnsignale` · «Warnsignale der Überlastung» (`:167`) | `/infografiken/manus-warnsignale-v3.pdf` | fehlt (`qa/withheld-handouts/issue-650-…`) | nein | `/materialien/text/warnsignale` |
| 10 | `schuld-verantwortung` · «Schuld, Verantwortung und was dazwischen liegt» (`:181`) | `/infografiken/manus-schuld-verantwortung-v3.pdf` | fehlt (Archiv) | nein | `/materialien/text/schuld-verantwortung` |
| 11 | `spaltung` · «Wenn Bewertungen unter Stress einseitiger werden» (`:195`) | `/infografiken/pendel-das-bewertungs-pendel-v16.pdf` | fehlt (Archiv) | nein | `/materialien/text/spaltung` |
| 12 | `alarm-modus` · «Alarm-Modus vs. Denk-Modus» (`:209`) | `/infografiken/alarm-der-alarm-modus-v4.pdf` | fehlt (Archiv) | nein | `/materialien/text/alarm-modus` |
| 13 | `wenn-worte-treffen` · «Wenn Worte treffen – belastende Aussagen einordnen» (`:223`) | `/infografiken/manus-wenn-worte-treffen-v3.pdf` | fehlt (Archiv) | nein | `/materialien/text/wenn-worte-treffen` |
| 14 | `dear` · «Die DEAR-Technik – Grenzen setzen ohne Vorwürfe» (`:237`) | `/infografiken/puk-dear-v1.pdf` | fehlt (Archiv) | nein | `/materialien/text/dear` |
| 15 | `radikale-akzeptanz` · «Radikale Akzeptanz – die Realität anerkennen und Handlungsspielraum finden» (`:250`) | `/infografiken/puk-radikale-akzeptanz-v3.pdf` | fehlt; Entwurf in `qa/withheld-handouts/p1-illustrations-v3-2026-10-04/` | nein (Entwurf) | `/materialien/text/radikale-akzeptanz` |
| 16 | `garten` · «Der Garten – Unterstützen, ohne Wachstum zu erzwingen» (`:265`) | `/infografiken/puk-garten-v1.pdf` | **Repo:** `client/public/infografiken/puk-garten-v1.pdf` | **ja**, statisch | `/materialien/text/garten` |
| 17 | `genesung-zahlen` · «Genesung in Zahlen» (`:278`) | `/infografiken/manus-genesung-zahlen-v3.pdf` | **Repo:** `client/public/infografiken/manus-genesung-zahlen-v3.pdf` | **ja** | `/materialien/text/genesung-zahlen` |
| 18 | `kinder` · «Kinder verstehen und entlasten» (`:292`) | `/infografiken/manus-kinder-v3.pdf` | **Repo:** `client/public/infografiken/manus-kinder-v3.pdf` | **ja** | `/materialien/text/kinder` |
| 19 | `4-arten-von-grenzen` · «Die 4 Arten von Grenzen» (Empfehlung aus `grenzen.ts`) | `/infografiken/puk-4-arten-von-grenzen-v1.pdf` | **Repo:** `client/public/infografiken/puk-4-arten-von-grenzen-v1.pdf` | **ja** | `/materialien/text/4-arten-von-grenzen` |
| 20 | `grenzen-erkennen` · «Belastung wahrnehmen, Grenzen prüfen» | `/infografiken/manus-grenzen-erkennen-v1.pdf` | fehlt (Entwurf `puk-grenzen-ueberlastung-v2` zurückgehalten) | nein | `/materialien/text/grenzen-erkennen` |
| 21 | `gespraeche-kippen` · «Wenn Gespräche kippen: 3 Schritte» | `/infografiken/puk-gespraeche-kippen-v3.pdf` | fehlt (Entwurf zurückgehalten) | nein | `/materialien/text/gespraeche-kippen` |
| 22 | `pause-statt-streit` · «Pause statt Streit» | `/infografiken/manus-pause-statt-streit-v3.pdf` | fehlt (Archiv) | nein | `/materialien/text/pause-statt-streit` |
| 23 | `zuhoeren-ohne-zustimmen` · «Zuhören ohne Zustimmen» | `/infografiken/validierung-die-validierungs-treppe-v10.pdf` | fehlt (Archiv) | nein | `/materialien/text/zuhoeren-ohne-zustimmen` |
| 24 | `beispiel-dialog` · «Beispiel-Dialog» | `/infografiken/puk-beispiel-dialog-v3.pdf` | fehlt (Entwurf zurückgehalten) | nein | `/materialien/text/beispiel-dialog` |
| 25 | `sauerstoffmaske` · «Die Sauerstoffmaske» | `/infografiken/sauerstoff-die-sauerstoffmaske-v5.pdf` | fehlt (Archiv) | nein | `/materialien/text/sauerstoffmaske` |
| 26 | `stopp-technik` · «STOPP: einen Moment innehalten» | `/infografiken/manus-stopp-technik-v3.pdf` | **Repo:** `client/public/infografiken/manus-stopp-technik-v3.pdf` | **ja** | `/materialien/text/stopp-technik` |
| 27 | `energie-konto` · «Energie-Konto: Belastungen und Ressourcen» | `/infografiken/manus-energie-konto-v1.pdf` | fehlt (Entwurf `puk-energie-konto-v2` zurückgehalten) | nein | `/materialien/text/energie-konto` |

### 3.3 Weitere Handouts nur auf Themenseiten (nicht in der Bibliothek)

| ID · Titel | Quelle laut Code | Route der Kachel | PDF | Textversion |
|---|---|---|---|---|
| `zustands-landkarte` · «Anspannung, Kontakt und Handlungsspielraum» | `/infografiken/puk-zustands-landkarte-v1.pdf` (`client/src/content/verstehen.ts`) | `/verstehen` | nein (Entwurf) | `/materialien/text/zustands-landkarte` |
| `gehirn` · «Hohe Anspannung verstehen» | `/infografiken/puk-hohe-anspannung-v1.pdf` | `/verstehen` | nein (Entwurf) | `/materialien/text/gehirn` |
| `drei-saeulen` · «Drei Fragen zur Selbstklärung» | `/infografiken/manus-drei-saeulen-v1.pdf` (`client/src/content/unterstuetzen.ts:29`) | `/unterstuetzen/uebersicht` | **toter Link** (2.4) | `/materialien/text/drei-saeulen` |
| `konsistenz-prinzip` · «Klare und anpassbare Absprachen» | `/infografiken/manus-konsistenz-prinzip-v1.pdf` (`unterstuetzen.ts:40`) | `/unterstuetzen/uebersicht` | toter Link | `/materialien/text/konsistenz-prinzip` |
| `beziehungs-achtsamkeit` · «Beziehungs-Achtsamkeit» | `/infografiken/manus-beziehungs-achtsamkeit-v1.pdf` (`:51`) | `/unterstuetzen/uebersicht` | toter Link | `/materialien/text/beziehungs-achtsamkeit` |
| `6-leitlinien` · «6 Orientierungspunkte für Angehörige» | `/infografiken/manus-6-leitlinien-v1.pdf` (`:61`) | `/unterstuetzen/uebersicht` | toter Link | `/materialien/text/6-leitlinien` |
| `4-alltags-tipps` · «4 Fragen für den Alltag» | `/infografiken/manus-4-alltags-tipps-v1.pdf` (`:72`) | `/unterstuetzen/uebersicht` | toter Link | `/materialien/text/4-alltags-tipps` |
| `rolle-klaeren` · «Ihre Rolle klären» | `/infografiken/manus-rolle-klaeren-v3.pdf` (`:19`) | `/unterstuetzen/uebersicht` | toter Link | `/materialien/text/rolle-klaeren` |
| `grenzen-ohne-eskalation` · «Grenzen setzen, ohne zu eskalieren» | `/infografiken/manus-grenzen-ohne-eskalation-v3.pdf` (`client/src/content/kommunizieren.ts`) | `/kommunizieren` | nein | `/materialien/text/grenzen-ohne-eskalation` |
| `spiegeln-statt-aufsaugen` · «Spiegeln statt Aufsaugen» | `/infografiken/manus-spiegeln-statt-aufsaugen-v3.pdf` (`client/src/content/grenzen.ts`) | `/grenzen` | nein | `/materialien/text/spiegeln-statt-aufsaugen` |
| `lmk` · «Grenze benennen – eigenen Schritt wählen» | `/infografiken/manus-lmk-v1.pdf` | `/grenzen` | nein (Entwurf) | `/materialien/text/lmk` |
| `erlaubnis-karte` · «Erlaubnis-Karte» | `/infografiken/manus-erlaubnis-karte-v1.pdf` (`client/src/content/selbstfuersorge.ts`) | `/selbstfuersorge` | nein (Entwurf) | `/materialien/text/erlaubnis-karte` |
| `fortschritt-paradox` · «Veränderung verläuft unterschiedlich» | `/infografiken/fortschritt-das-fortschritt-paradox-v5.pdf` (`client/src/content/genesung.ts:37`) | `/genesung` | nein | `/materialien/text/fortschritt-paradox` |
| `remission-heilung` · «Remission, Alltag und persönliche Recovery» | `/infografiken/manus-remission-heilung-v1.pdf` (`genesung.ts:47`) | `/genesung` | nein (Entwurf) | `/materialien/text/remission-heilung` |
| `5-faktoren-genesung` · «Fünf Bereiche rund um Genesung» | `/infografiken/manus-5-faktoren-genesung-v1.pdf` (`genesung.ts:57`) | `/genesung` | nein (Entwurf) | `/materialien/text/5-faktoren-genesung` |
| `rolle-genesungsprozess` · «Freiwillige Unterstützung und eigene Grenzen» | `/infografiken/manus-rolle-genesungsprozess-v1.pdf` (`genesung.ts:67`) | `/genesung` | nein (Entwurf) | `/materialien/text/rolle-genesungsprozess` |

Zurückgezogen (`publicationStatus: "withdrawn"`, weder Katalog noch Textversion): `notfallkarte-zuerich` (`handoutGovernance.ts:65-74`, frühere Dateien `/Notfallkarte-Zuerich-Psychische-Krise.pdf`, `/notfallkarte-preview.webp`), `4-phasen` (`:111-117`), `im-krisenmodus` (`:144-150`).

### 3.4 Textversionen

- **42 Routen** `/materialien/text/<id>` (`client/src/content/handoutTextMetas.ts:3-46`; Seite `client/src/pages/HandoutTextPage.tsx`; Inhalte in `client/src/content/handoutTextVersionContent/*.content.ts`). Alle 42 sind in `dist/public/materialien/text/*.html` vorgerendert.
- **Entwurfsstatus:** 18 der 42 tragen `approvalStatus: "draft-editorial-review-pending"` (Governance, `HANDOUT_EDITORIAL_DRAFT_NOTE` «Entwurf – fachlich-redaktionelle Freigabe ausstehend.», `handoutGovernance.ts:61-62`).
- **Sonderdaten:** `client/src/content/revisedHandouts.json` enthält Text-Overrides für `genesung-zahlen`, `stopp-technik` und `kinder` (Quellenzeilen `:37`, `:79`).
- **Lernhilfen** für `4-arten-von-grenzen`, `dear` und `garten`: `client/src/content/learningGuides.json`, eingebunden über `client/src/components/interactive/LearningGuide.tsx:25` (PDF-Link via `getHandoutOpenHref`).

### 3.5 Quellordner `handouts/`

| Pfad | Inhalt | Ausgabeziel |
|---|---|---|
| `handouts/p1-illustrations/` (README, `manifest.json`, `p1-illustrations.css`, 9 `sources/*.html`) | Druckquellen Radikale Akzeptanz, Gespräche kippen, Beispiel-Dialog (v1–v3). «Status: Entwurf – fachlich-redaktionelle Freigabe ausstehend.» (README `:9`) | `qa/withheld-handouts/p1-illustrations-v3-2026-10-04/` |
| `handouts/issue-615-refresh/` (README, `manifest.json`, CSS, 15 `sources/*.html`) | 15 neue Visualfamilien. «Der Generator schreibt nie nach `client/public`.» (README) | `qa/withheld-handouts/issue-615-visual-refresh-2026-10-05/` |

---

## 4. Quellenangaben und externe Links

### 4.1 Literaturliste der Seite `/quellen` (`client/src/pages/Quellen.tsx:30-763`)

**67 Einträge** in 7 Kategorien, davon 47 mit Link und 20 ohne Link. Die Ankerbildung steht in `Quellen.tsx:766-782`; alle 47 Schlüssel in `client/src/content/quellenLinks.ts:1-50` zeigen auf vorhandene Anker (keine toten Anker, keine doppelten Anker). Spalte 6 nennt die Seiten, die über `quellenLinks` auf den Eintrag verweisen. 8 Schlüssel werden nirgends verwendet: `linehan1997`, `eggshells2020`, `awmf2022`, `projectAir`, `zgb2026`, `opferhilfeSchutz`, `interpret2019`, `bagDolmetschen`.

| # | Fundort | Kategorie | Vollzitat (wie im Code) | Link | Anker / Verweise über quellenLinks |
|---|---|---|---|---|---|
| 1 | client/src/pages/Quellen.tsx:35 | Klinische Studien & Forschung | Storebø, O. J. et al. (2020). Psychological therapies for people with borderline personality disorder. Cochrane Database of Systematic Reviews 5(5), CD012955 | https://pubmed.ncbi.nlm.nih.gov/32368793/ | `#src-storeb-2020`; `storebo2020` → client/src/pages/UnterstuetzenTherapie.tsx:515, client/src/pages/Verstehen.tsx:692 |
| 2 | client/src/pages/Quellen.tsx:46 | Klinische Studien & Forschung | Qian, X. et al. (2022). Sex differences in borderline personality disorder: A scoping review. PLOS ONE 17(12), e0279015. DOI: 10.1371/journal.pone.0279015 | https://doi.org/10.1371/journal.pone.0279015 | `#src-qiant-al-2022`; `qian2022` → client/src/pages/Verstehen.tsx:721 |
| 3 | client/src/pages/Quellen.tsx:57 | Klinische Studien & Forschung | Porter, C. et al. (2020). Childhood adversity and borderline personality disorder: a meta-analysis. Acta Psychiatrica Scandinavica 141(1), 6–20. DOI: 10.1111/acps.13118 | https://pubmed.ncbi.nlm.nih.gov/31630389/ | `#src-portert-al-2020`; `porter2020` → client/src/pages/Verstehen.tsx:704 |
| 4 | client/src/pages/Quellen.tsx:69 | Klinische Studien & Forschung | Shah, R. & Zanarini, M. C. (2018). Comorbidity of Borderline Personality Disorder: Current Status and Future Directions. Psychiatric Clinics of North America 41(4), 583–593. DOI: 10.1016/j.psc.2018.07.009 | https://pubmed.ncbi.nlm.nih.gov/30447726/ | `#src-shah-zanarini-2018`; `shahZanarini2018` → client/src/pages/Begleiterkrankungen.tsx:266 |
| 5 | client/src/pages/Quellen.tsx:81 | Klinische Studien & Forschung | Weiner, L., Perroud, N. & Weibel, S. (2019). Attention Deficit Hyperactivity Disorder and Borderline Personality Disorder in Adults: A Review of Their Links and Risks. Neuropsychiatric Disease and Treatment 15, 3115–3129. DOI: 10.2147/NDT.S192871 | https://pubmed.ncbi.nlm.nih.gov/31806978/ | `#src-weiner-perroud-weibel-2019`; `weinerPerroudWeibel2019` → client/src/pages/Begleiterkrankungen.tsx:272 |
| 6 | client/src/pages/Quellen.tsx:93 | Klinische Studien & Forschung | Zanarini, M. C. et al. (2010). Time to attainment of recovery from borderline personality disorder and stability of recovery: A 10-year prospective follow-up study. American Journal of Psychiatry 167(6), 663–667. DOI: 10.1176/appi.ajp.2009.09081130 | https://pubmed.ncbi.nlm.nih.gov/20395399/ | `#src-zanarini-2010`; `zanarini2010` → client/src/pages/Genesung.tsx:303 |
| 7 | client/src/pages/Quellen.tsx:105 | Klinische Studien & Forschung | Zanarini, M. C. et al. (2012). Attainment and stability of sustained symptomatic remission and recovery among patients with borderline personality disorder and Axis II comparison subjects: A 16-year prospective follow-up study. American Journal of Psychiatry 169(5), 476–483. DOI: 10.1176/appi.ajp.2011.11101550 | https://pubmed.ncbi.nlm.nih.gov/22737693/ | `#src-zanarini-2012`; `zanarini2012` → client/src/content/learningArchitecture.ts:589, client/src/pages/Genesung.tsx:308, client/src/pages/Verstehen.tsx:698 |
| 8 | client/src/pages/Quellen.tsx:117 | Klinische Studien & Forschung | Gunderson, J. G. et al. (2011). Ten-year course of borderline personality disorder: Psychopathology and function from the Collaborative Longitudinal Personality Disorders study. Archives of General Psychiatry 68(8), 827–837 | https://pubmed.ncbi.nlm.nih.gov/21464343/ | `#src-gunderson-2011`; `gunderson2011` → client/src/pages/Genesung.tsx:313 |
| 9 | client/src/pages/Quellen.tsx:128 | Klinische Studien & Forschung | Gunderson, J. G., Herpertz, S. C., Skodol, A. E., Torgersen, S. & Zanarini, M. C. (2018). Borderline personality disorder. Nature Reviews Disease Primers 4, 18029 | https://pubmed.ncbi.nlm.nih.gov/29795363/ | `#src-gunderson-herpertz-skodol-torgersen-zanarini-2018`; – |
| 10 | client/src/pages/Quellen.tsx:139 | Klinische Studien & Forschung | Gunderson, J. G., Berkowitz, C. & Ruiz-Sancho, A. (1997). Families of borderline patients: a psychoeducational approach. Bulletin of the Menninger Clinic 61(4), 446–457 | https://pubmed.ncbi.nlm.nih.gov/9401149/ | `#src-gunderson-berkowitz-ruiz-sancho-1997`; `gunderson1997` → client/src/pages/UnterstuetzenTherapie.tsx:555, client/src/sections/VerstehenSupportSections.tsx:76 |
| 11 | client/src/pages/Quellen.tsx:149 | Klinische Studien & Forschung | Zanarini, M. C., Frankenburg, F. R., Dubo, E. D., Sickel, A. E., Trikha, A., Levin, A. & Reynolds, V. (1998). Axis I comorbidity of borderline personality disorder. American Journal of Psychiatry 155(12), 1733–1739 | https://pubmed.ncbi.nlm.nih.gov/9842784/ | `#src-zanarini-frankenburg-dubo-sickel-trikha-levin-reynolds-1998`; `zanarini1998` → client/src/pages/Begleiterkrankungen.tsx:336, client/src/pages/Begleiterkrankungen.tsx:557 |
| 12 | client/src/pages/Quellen.tsx:160 | Klinische Studien & Forschung | Zanarini, M. C., Frankenburg, F. R., Hennen, J., Reich, D. B. & Silk, K. R. (2004). Axis I comorbidity in patients with borderline personality disorder: 6-year follow-up and prediction of time to remission. American Journal of Psychiatry 161(11), 2108–2114 | https://pubmed.ncbi.nlm.nih.gov/15514413/ | `#src-zanarini-frankenburg-hennen-reich-silk-2004`; `zanarini2004` → client/src/pages/Begleiterkrankungen.tsx:342, client/src/pages/Begleiterkrankungen.tsx:563 |
| 13 | client/src/pages/Quellen.tsx:172 | Klinische Studien & Forschung | Bateman, A. & Fonagy, P. (2009). Randomized controlled trial of outpatient mentalization-based treatment versus structured clinical management for borderline personality disorder. American Journal of Psychiatry 166(12), 1355–1364 | https://pubmed.ncbi.nlm.nih.gov/19833787/ | `#src-bateman-fonagy-2009`; `batemanFonagy2009` → client/src/pages/UnterstuetzenTherapie.tsx:521 |
| 14 | client/src/pages/Quellen.tsx:183 | Klinische Studien & Forschung | Linehan, M. M. (1993). Cognitive-Behavioral Treatment of Borderline Personality Disorder. Guilford Press | – | `#src-linehan-1993`; `linehan1993` → client/src/content/learningArchitecture.ts:364, client/src/pages/Verstehen.tsx:256 |
| 15 | client/src/pages/Quellen.tsx:192 | Klinische Studien & Forschung | Linehan, M. M. (1997). Validation and psychotherapy. In A. C. Bohart & L. S. Greenberg (Hrsg.), Empathy Reconsidered: New Directions in Psychotherapy, 353–392. DOI: 10.1037/10226-016 | https://doi.org/10.1037/10226-016 | `#src-linehan-1997`; `linehan1997` → nicht verwendet |
| 16 | client/src/pages/Quellen.tsx:203 | Klinische Studien & Forschung | Degasperi, G. et al. (2021). Parsing variability in borderline personality disorder: a meta-analysis of neuroimaging studies. Translational Psychiatry | https://pubmed.ncbi.nlm.nih.gov/34031363/ | `#src-degasperit-al-2021`; – |
| 17 | client/src/pages/Quellen.tsx:214 | Klinische Studien & Forschung | Baranger, D. A. A. et al. (2020). Borderline Personality Traits Are Not Correlated With Brain Structure in Two Large Samples. Biological Psychiatry: Cognitive Neuroscience and Neuroimaging 5(7), 669–677 | https://pubmed.ncbi.nlm.nih.gov/32312691/ | `#src-barangera-et-al-2020`; – |
| 18 | client/src/pages/Quellen.tsx:226 | Klinische Studien & Forschung | Shields, G. S., Sazma, M. A. & Yonelinas, A. P. (2016). The effects of acute stress on core executive functions: A meta-analysis and comparison with cortisol. Neuroscience & Biobehavioral Reviews 68, 651–668 | https://pubmed.ncbi.nlm.nih.gov/27371161/ | `#src-shields-sazma-yonelinas-2016`; – |
| 19 | client/src/pages/Quellen.tsx:237 | Klinische Studien & Forschung | Santangelo, P., Bohus, M. & Ebner-Priemer, U. W. (2014). Ecological momentary assessment in borderline personality disorder: a review of recent findings and methodological challenges. Journal of Personality Disorders 28(4), 555–576 | https://pubmed.ncbi.nlm.nih.gov/22984853/ | `#src-santangelo-bohus-ebner-priemer-2014`; – |
| 20 | client/src/pages/Quellen.tsx:248 | Klinische Studien & Forschung | Skodol, A. E. et al. (2005). The Collaborative Longitudinal Personality Disorders Study (CLPS): overview and implications. Journal of Personality Disorders 19(5), 487–504. DOI: 10.1521/pedi.2005.19.5.487 | https://pubmed.ncbi.nlm.nih.gov/16274278/ | `#src-skodol-2005`; – |
| 21 | client/src/pages/Quellen.tsx:260 | Klinische Studien & Forschung | Torgersen, S., Kringlen, E. & Cramer, V. (2001). The prevalence of personality disorders in a community sample. Archives of General Psychiatry 58(6), 590–596. DOI: 10.1001/archpsyc.58.6.590 | https://pubmed.ncbi.nlm.nih.gov/11386989/ | `#src-torgersen-kringlen-cramer-2001`; – |
| 22 | client/src/pages/Quellen.tsx:271 | Klinische Studien & Forschung | Bailey, R. C. & Grenyer, B. F. S. (2013). Burden and support needs of carers of persons with borderline personality disorder: A systematic review. Harvard Review of Psychiatry 21(5), 248–258. DOI: 10.1097/HRP.0b013e3182a75c2c | https://pubmed.ncbi.nlm.nih.gov/24651557/ | `#src-bailey-grenyers-2013`; `baileyGrenyer2013` → client/src/pages/Selbstfuersorge.tsx:571 |
| 23 | client/src/pages/Quellen.tsx:283 | Klinische Studien & Forschung | Maslach, C. & Leiter, M. P. (2016). Understanding the burnout experience: recent research and its implications for psychiatry. World Psychiatry 15(2), 103–111 | https://pubmed.ncbi.nlm.nih.gov/27265691/ | `#src-maslach-leiter-2016`; – |
| 24 | client/src/pages/Quellen.tsx:294 | Klinische Studien & Forschung | Zaccaro, A., Piarulli, A., Laurino, M. et al. (2018). How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing. Frontiers in Human Neuroscience 12, 353 | https://pubmed.ncbi.nlm.nih.gov/30245619/ | `#src-zaccaro-piarulli-laurinot-al-2018`; `zaccaro2018` → client/src/pages/Selbstfuersorge.tsx:578 |
| 25 | client/src/pages/Quellen.tsx:310 | Fachliteratur Therapie & Behandlung | American Psychiatric Association (Keepers, G. A. et al.) (2024). The American Psychiatric Association Practice Guideline for the Treatment of Patients With Borderline Personality Disorder. American Journal of Psychiatry 181(11), 1024–1028 | https://pubmed.ncbi.nlm.nih.gov/39482953/ | `#src-american-psychiatric-association-keepers-2024`; `apa2024` → client/src/pages/Genesung.tsx:597, client/src/pages/UnterstuetzenTherapie.tsx:509, client/src/pages/Verstehen.tsx:250 |
| 26 | client/src/pages/Quellen.tsx:321 | Fachliteratur Therapie & Behandlung | Paris, J. (2020). Treatment of Borderline Personality Disorder: A Guide to Evidence-Based Practice. Guilford Press, 2nd Edition | – | `#src-paris-2020`; – |
| 27 | client/src/pages/Quellen.tsx:330 | Fachliteratur Therapie & Behandlung | Linehan, M. M. (2015). DBT Skills Training Manual. Guilford Press, 2. Auflage | – | `#src-linehan-2015`; `linehan2015` → client/src/content/learningArchitecture.ts:512, client/src/content/learningArchitecture.ts:543, client/src/pages/UnterstuetzenTherapie.tsx:526 |
| 28 | client/src/pages/Quellen.tsx:338 | Fachliteratur Therapie & Behandlung | Linehan, M. M. (1996). Dialektisch-Behaviorale Therapie der Borderline-Persönlichkeitsstörung. CIP-Medien | – | `#src-linehan-1996`; – |
| 29 | client/src/pages/Quellen.tsx:346 | Fachliteratur Therapie & Behandlung | Bateman, A. & Fonagy, P. (2004). Psychotherapy for Borderline Personality Disorder: Mentalization-Based Treatment. Oxford University Press | – | `#src-bateman-fonagy-2004`; – |
| 30 | client/src/pages/Quellen.tsx:355 | Fachliteratur Therapie & Behandlung | Fruzzetti, A. E. (2006). The High-Conflict Couple: A Dialectical Behavior Therapy Guide. New Harbinger Publications | – | `#src-fruzzetti-2006`; `fruzzetti2006` → client/src/sections/VerstehenSupportSections.tsx:65 |
| 31 | client/src/pages/Quellen.tsx:363 | Fachliteratur Therapie & Behandlung | Gunderson, J. G. & Hoffman, P. D. (2005). Understanding and Treating Borderline Personality Disorder: A Guide for Professionals and Families. American Psychiatric Publishing | – | `#src-gunderson-hoffman-2005`; – |
| 32 | client/src/pages/Quellen.tsx:371 | Fachliteratur Therapie & Behandlung | Porges, S. W. (2011). The Polyvagal Theory: Neurophysiological Foundations of Emotions, Attachment, Communication, and Self-Regulation. W. W. Norton, New York | – | `#src-porges-2011`; – |
| 33 | client/src/pages/Quellen.tsx:385 | Angehörigen-Literatur | Mason, P. T. & Kreger, R. (2007 / 2014). Schluss mit dem Eiertanz. Balance Buch + Medien Verlag (bisher erfasste deutsche Ausgabe 2007, 8. Auflage 2014; in diesem Durchlauf nicht neu unabhängig geprüft) | – | `#src-mason-kreger-2007 / 2014`; – |
| 34 | client/src/pages/Quellen.tsx:395 | Angehörigen-Literatur | Mason, P. T. & Kreger, R. (2020). Stop Walking on Eggshells, Third Edition. New Harbinger Publications, englische 3. Auflage, Dezember 2020; Paperback ISBN 9781684036899 | https://www.newharbinger.com/9781684036899/stop-walking-on-eggshells/ | `#src-mason-kreger-2020`; `eggshells2020` → nicht verwendet |
| 35 | client/src/pages/Quellen.tsx:406 | Angehörigen-Literatur | Kreisman, J. J. & Straus, H. (2004). I Hate You – Don't Leave Me: Understanding the Borderline Personality. Avery / Penguin | – | `#src-kreisman-straus-2004`; – |
| 36 | client/src/pages/Quellen.tsx:415 | Angehörigen-Literatur | Hoffman, P. D. et al. (2005). Family Connections: A program for relatives of persons with borderline personality disorder. Family Process | – | `#src-hoffman-2005`; `hoffman2005` → client/src/pages/UnterstuetzenTherapie.tsx:531, client/src/sections/VerstehenSupportSections.tsx:70 |
| 37 | client/src/pages/Quellen.tsx:424 | Angehörigen-Literatur | Guillén, V. et al. (2021). Interventions for Family Members and Carers of Patients with Borderline Personality Disorder: A Systematic Review. Family Process 60(1), 134–144 | https://pubmed.ncbi.nlm.nih.gov/32304101/ | `#src-guill-nt-al-2021`; `guillen2021` → client/src/pages/UnterstuetzenTherapie.tsx:537 |
| 38 | client/src/pages/Quellen.tsx:435 | Angehörigen-Literatur | Guillén, V. et al. (2024). "Family Connections", a program for relatives of people with borderline personality disorder: A randomized controlled trial. Family Process 63(4), 2195–2214. DOI: 10.1111/famp.13089 | https://pubmed.ncbi.nlm.nih.gov/39624006/ | `#src-guill-nt-al-2024`; `guillen2024` → client/src/pages/UnterstuetzenTherapie.tsx:543 |
| 39 | client/src/pages/Quellen.tsx:446 | Angehörigen-Literatur | Cohen, S. et al. (2024). Group intervention for family members of people with borderline personality disorder based on Dialectical Behavior Therapy: Implementation of the Family Connections® program in France and Switzerland. Borderline Personality Disorder and Emotion Dysregulation 11, 16. DOI: 10.1186/s40479-024-00254-3 | https://pubmed.ncbi.nlm.nih.gov/39039536/ | `#src-cohent-al-2024`; `cohen2024` → client/src/pages/UnterstuetzenTherapie.tsx:549 |
| 40 | client/src/pages/Quellen.tsx:463 | Diagnostik & Klassifikation | American Psychiatric Association (2022). Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). American Psychiatric Association Publishing | – | `#src-american-psychiatric-association-2022`; `apa2022` → client/src/pages/Diagnostik.tsx:392, client/src/sections/VerstehenSupportSections.tsx:161 |
| 41 | client/src/pages/Quellen.tsx:472 | Diagnostik & Klassifikation | World Health Organization (ICD-11) (2024). Clinical descriptions and diagnostic requirements for ICD-11 mental, behavioural and neurodevelopmental disorders. WHO | https://www.who.int/publications/i/item/9789240077263 | `#src-world-health-organization-icd-11-2024`; `icd11` → client/src/pages/Diagnostik.tsx:386, client/src/pages/Verstehen.tsx:244, client/src/pages/Verstehen.tsx:710, client/src/sections/VerstehenSupportSections.tsx:166 |
| 42 | client/src/pages/Quellen.tsx:483 | Diagnostik & Klassifikation | Bundesamt für Statistik (BFS) (2026). Medizinisches Kodierungshandbuch 2026. Bundesamt für Statistik, Neuchâtel | https://dam-api.bfs.admin.ch/hub/api/dam/assets/36144081/master | `#src-bundesamt-fuer-statistik-bfs-2026`; `bfsKodierung2026` → client/src/pages/Diagnostik.tsx:410 |
| 43 | client/src/pages/Quellen.tsx:493 | Diagnostik & Klassifikation | Bundesamt für Gesundheit (BAG) (laufend). Berufs- oder Arztgeheimnis. Patientenrechte in der Schweiz | https://www.bag.admin.ch/de/berufs-oder-arztgeheimnis | `#src-bundesamt-fuer-gesundheit-bag-laufend`; `bagBerufsgeheimnis` → client/src/pages/Diagnostik.tsx:416 |
| 44 | client/src/pages/Quellen.tsx:503 | Diagnostik & Klassifikation | Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften (AWMF) (2022). S3-Leitlinie Borderline-Persönlichkeitsstörung. AWMF-Registernummer 038-015 | https://register.awmf.org/de/leitlinien/detail/038-015 | `#src-arbeitsgemeinschaft-der-wissenschaftlichen-medizinischen-fachgesellschaften-awmf-2022`; `awmf2022` → nicht verwendet |
| 45 | client/src/pages/Quellen.tsx:514 | Diagnostik & Klassifikation | First, M. B., Williams, J. B. W., Benjamin, L. S. & Spitzer, R. L. (2017). Structured Clinical Interview for DSM-5 Personality Disorders (SCID-5-PD). American Psychiatric Association Publishing, Arlington, VA | – | `#src-first-williamsw-benjamin-spitzer-2017`; `first2017` → client/src/pages/Diagnostik.tsx:398 |
| 46 | client/src/pages/Quellen.tsx:524 | Diagnostik & Klassifikation | Loranger, A. W. (1999). International Personality Disorder Examination (IPDE), DSM-IV and ICD-10 Modules. World Health Organization / Cambridge University Press | – | `#src-loranger-1999`; `ipde1999` → client/src/pages/Diagnostik.tsx:404 |
| 47 | client/src/pages/Quellen.tsx:538 | Versorgungs-Materialien & Praxis-Manuale | Bundesamt für Gesundheit (BAG) (laufend (Abruf 06.10.2026)). Neuregelung der psychologischen Psychotherapie ab 1. Juli 2022. BAG – obligatorische Krankenpflegeversicherung | https://www.bag.admin.ch/de/neuregelung-der-psychologischen-psychotherapie-ab-1-juli-2022 | `#src-bundesamt-fuer-gesundheit-bag-laufend (Abruf 06.10.2026)`; – |
| 48 | client/src/pages/Quellen.tsx:548 | Versorgungs-Materialien & Praxis-Manuale | Project Air Strategy (laufend). Understanding Self-Harm & Suicidal Thinking for Families & Carers. University of Wollongong, Australien | https://www.projectairstrategy.org/ | `#src-project-air-strategy-laufend`; `projectAir` → nicht verwendet |
| 49 | client/src/pages/Quellen.tsx:559 | Versorgungs-Materialien & Praxis-Manuale | Berkowitz, C. & Gunderson, J. G. (laufend (URL-Snapshot 2011)). Family Guidelines for Borderline Personality Disorder. National Education Alliance for Borderline Personality Disorder (NEABPD; Manual frei online) | https://www.borderlinepersonalitydisorder.org/wp-content/uploads/2011/08/Family-Guidelines-standard.pdf | `#src-berkowitz-gunderson-laufend (URL-Snapshot 2011)`; – |
| 50 | client/src/pages/Quellen.tsx:575 | Weitere Quellen & Hintergrundliteratur | World Health Organization (Suicide Q&A) (2026). Suicide: Questions and answers. WHO, 31. August 2026 | https://www.who.int/news-room/questions-and-answers/item/suicide | `#src-world-health-organization-suicide-q-a-2026`; `whoSuicide2026` → client/src/pages/Verstehen.tsx:715 |
| 51 | client/src/pages/Quellen.tsx:585 | Weitere Quellen & Hintergrundliteratur | World Health Organization (2026). Stress: Questions and answers. WHO, 30. März 2026 | https://www.who.int/news-room/questions-and-answers/item/stress | `#src-world-health-organization-2026`; `whoStress2026` → client/src/sections/SelbstfuersorgeSignalsSection.tsx:61 |
| 52 | client/src/pages/Quellen.tsx:595 | Weitere Quellen & Hintergrundliteratur | National Institute for Health and Care Excellence (NICE) (2020). Supporting adult carers (NG150). NICE guideline NG150, veröffentlicht am 22. Januar 2020 | https://www.nice.org.uk/guidance/ng150 | `#src-national-institute-for-health-and-care-excellence-nice-2020`; `niceNg150` → client/src/pages/Selbstfuersorge.tsx:584, client/src/sections/SelbstfuersorgeSignalsSection.tsx:66 |
| 53 | client/src/pages/Quellen.tsx:605 | Weitere Quellen & Hintergrundliteratur | National Institute for Health and Care Excellence (NICE) (2022). Self-harm: assessment, management and preventing recurrence (NG225). NICE guideline NG225, veröffentlicht am 7. September 2022 | https://www.nice.org.uk/guidance/ng225/chapter/Recommendations | `#src-national-institute-for-health-and-care-excellence-nice-2022`; `niceNg225` → client/src/pages/UnterstuetzenKrise.tsx:425 |
| 54 | client/src/pages/Quellen.tsx:616 | Weitere Quellen & Hintergrundliteratur | Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften (AWMF) (2025). S3-Leitlinie Psychosoziale Therapien bei schweren psychischen Erkrankungen, Version 3.0. AWMF-Registernummer 038-020, Kapitel 7.2 | https://register.awmf.org/assets/guidelines/038-020l_S3_Psychosoziale_Therapien_bei_schweren_psychischen_Erkrankungen_2025-12.pdf | `#src-arbeitsgemeinschaft-der-wissenschaftlichen-medizinischen-fachgesellschaften-awmf-2025`; `awmfPsychosozial2025` → client/src/pages/Genesung.tsx:608 |
| 55 | client/src/pages/Quellen.tsx:628 | Weitere Quellen & Hintergrundliteratur | National Institute for Health and Care Excellence (NICE) (2009). Borderline personality disorder: recognition and management (Clinical guideline CG78). NICE, London | https://www.nice.org.uk/guidance/cg78 | `#src-national-institute-for-health-and-care-excellence-nice-2009`; `niceCg78` → client/src/content/learningArchitecture.ts:368, client/src/pages/Begleiterkrankungen.tsx:543, client/src/pages/Genesung.tsx:602 |
| 56 | client/src/pages/Quellen.tsx:639 | Weitere Quellen & Hintergrundliteratur | Carpenter, R. W. & Trull, T. J. (2013). Components of emotion dysregulation in borderline personality disorder: a review. Current Psychiatry Reports 15(1), 335 | https://pubmed.ncbi.nlm.nih.gov/23250816/ | `#src-carpenter-trull-2013`; – |
| 57 | client/src/pages/Quellen.tsx:650 | Weitere Quellen & Hintergrundliteratur | Siegel, D. J. (1999). The Developing Mind: Toward a Neurobiology of Interpersonal Experience. Guilford Press, New York | – | `#src-siegel-1999`; – |
| 58 | client/src/pages/Quellen.tsx:659 | Weitere Quellen & Hintergrundliteratur | Ogden, P., Minton, K. & Pain, C. (2006). Trauma and the Body: A Sensorimotor Approach to Psychotherapy. W. W. Norton, New York | – | `#src-ogden-minton-pain-2006`; – |
| 59 | client/src/pages/Quellen.tsx:667 | Weitere Quellen & Hintergrundliteratur | LeDoux, J. E. (1996). The Emotional Brain: The Mysterious Underpinnings of Emotional Life. Simon & Schuster, New York | – | `#src-ledoux-1996`; – |
| 60 | client/src/pages/Quellen.tsx:676 | Weitere Quellen & Hintergrundliteratur | Sotomo (2024). Stand by You Studie. Situation der Angehörigen und Vertrauten von Menschen mit psychischen Erkrankungen. Im Auftrag von und in Zusammenarbeit mit Stand by You Schweiz, Zürich | https://stand-by-you.ch/wp-content/uploads/2024/03/sby_studie_final.pdf | `#src-sotomo-2024`; – |
| 61 | client/src/pages/Quellen.tsx:688 | Weitere Quellen & Hintergrundliteratur | Lenz, A. (2014). Kinder psychisch kranker Eltern. Hogrefe Verlag, Göttingen, 2., vollständig überarbeitete und erweiterte Auflage | – | `#src-lenz-2014`; – |
| 62 | client/src/pages/Quellen.tsx:697 | Weitere Quellen & Hintergrundliteratur | Mattejat, F. & Lisofsky, B. (Hrsg.) (2014). Nicht von schlechten Eltern. Kinder psychisch Kranker. Balance buch + medien verlag, 4. korrigierte und erweiterte Auflage | – | `#src-mattejat-lisofsky-hrsg-2014`; – |
| 63 | client/src/pages/Quellen.tsx:706 | Weitere Quellen & Hintergrundliteratur | Bundesverband der Angehörigen psychisch erkrankter Menschen (BApK) (laufend). Informationsmaterialien für Angehörige, Kinder und Geschwister psychisch erkrankter Menschen. BApK e. V., Bonn | – | `#src-bundesverband-der-angehoerigen-psychisch-erkrankter-menschen-bapk-laufend`; – |
| 64 | client/src/pages/Quellen.tsx:722 | Schweizer Rechts- und Schutzquellen | Schweizerische Eidgenossenschaft (Fedlex) (2026). Schweizerisches Zivilgesetzbuch (SR 210). Amtliche konsolidierte Fassung, Stand 1. Juli 2026 | https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/24/233_245_233/20260701/de/html/fedlex-data-admin-ch-eli-cc-24-233_245_233-20260701-de-html-2.html | `#src-zgb-2026`; `zgb2026` → nicht verwendet |
| 65 | client/src/pages/Quellen.tsx:733 | Schweizer Rechts- und Schutzquellen | Opferhilfe Schweiz (SODK) (laufend). Schutz. Offizielle Informationsseite; abgerufen am 06.10.2026 | https://www.opferhilfe-schweiz.ch/de/was-ist-opferhilfe/schutz/ | `#src-opferhilfe-schutz`; `opferhilfeSchutz` → nicht verwendet |
| 66 | client/src/pages/Quellen.tsx:743 | Schweizer Rechts- und Schutzquellen | INTERPRET (2019). Interkulturelles Dolmetschen im Gesundheitsbereich. Argumentarium, Juni 2019, Seite 1 | https://www.inter-pret.ch/admin/data/files/infolib_asset/file/193/argumentarium_gesundheit.pdf | `#src-interpret-2019`; `interpret2019` → nicht verwendet |
| 67 | client/src/pages/Quellen.tsx:753 | Schweizer Rechts- und Schutzquellen | Bundesamt für Gesundheit (BAG) (laufend). Interkulturelles Dolmetschen. Offizielle Informationsseite; abgerufen am 06.10.2026 | https://www.bag.admin.ch/de/interkulturelles-dolmetschen | `#src-bag-dolmetschen`; `bagDolmetschen` → nicht verwendet |

### 4.2 Quellenregister `claimSources` und Belegkarten

- **`client/src/content/claimSources.ts:12-360`:** 31 Quellen mit URL, Version, Geltungsbereich und Zugriffsstatus. Davon 18 `read`, 11 `carried-forward` und 2 `blocked` (`bagBerufsgeheimnis`, `icd11`).
- **`contentClaims`** (`:381-2840`): 79 Aussagen (29 `supported`, 30 `context`, 20 `editorial`). Verteilung nach Ort: `/faq` 40, `/glossar` 23, `/verstehen/diagnostik` 3, `/verstehen/begleiterkrankungen` 3, `/verstehen` 2, `/genesung` 2, `/unterstuetzen/therapie` 2, `/unterstuetzen/krise` 2, `/kommunizieren` 1, `/selbstfuersorge` 1, `/grenzen` 1, `/unterstuetzen/alltag` 1.
- **Sichtbar** sind die Belege nur über `client/src/components/ClaimEvidence.tsx`, und das nur auf `/faq` und `/glossar`. Am häufigsten zitiert: NICE CG78 (18), NICE NG150 (11), Opferhilfe Schutz (8), Zanarini 2010 (7), Gunderson 2018 (6), DSM-5-TR (6), ZGB (6).
- **Nur in `claimSources`, nicht auf `/quellen`:** Dazzi et al. 2014 (PMID 24998511), NHS «Causes», NICE NG222, NICE CG78 Volltext-PDF und BfArM ICD-10-GM 2024. Dazzi 2014 wird zusätzlich sichtbar zitiert auf `/unterstuetzen/krise` (`UnterstuetzenKrise.tsx:85`, `:419`) und in der Textversion `notfallplan-krise`.

### 4.3 Quellenkästen `EvidenceNote` (21 Stück)

| Fundort | Route | Titel | Zitierte Quellen (Label wörtlich → Ziel) |
|---|---|---|---|
| `client/src/pages/Verstehen.tsx:236` | `/verstehen` | «Quellen zur diagnostischen und klinischen Einordnung» | «WHO ICD-11: Borderline pattern specifier (6D11.5)» → `quellenLinks.icd11`; «APA Practice Guideline … (2024)» → `apa2024`; «Linehan, Cognitive-Behavioral Treatment of Borderline Personality Disorder» → `linehan1993` |
| `client/src/pages/Verstehen.tsx:684` | `/verstehen` | «Quellen zu Mythen, Verlauf und Geschlecht» | Storebø 2020, Zanarini 2012, Porter 2020, WHO ICD-11, «WHO (2026) – Direktes Fragen nach Suizidgedanken», Qian 2022 (alle `quellenLinks`) |
| `client/src/sections/VerstehenSupportSections.tsx:57` | `/verstehen` | «Quellen zu Beziehungsmustern und Validierung» | Fruzzetti 2006, Hoffman et al. 2005, Gunderson/Berkowitz/Ruiz-Sancho 1997 |
| `client/src/sections/VerstehenSupportSections.tsx:155` | `/verstehen` | «Klassifikationsgrundlagen» | DSM-5-TR (APA 2022), ICD-11 CDDR (WHO 2024) |
| `client/src/pages/Diagnostik.tsx:380` | `/verstehen/diagnostik` | «Klassifikations- und Verfahrens-Quellen» | ICD-11; DSM-5-TR; SCID-5-PD (First et al. 2017); IPDE (Loranger 1999); BFS Kodierungshandbuch 2026; BAG Berufsgeheimnis |
| `client/src/pages/Begleiterkrankungen.tsx:258` | `/verstehen/begleiterkrankungen` | «Quellen zur Einordnung der Begleiterkrankungen» | Shah & Zanarini 2018; Weiner/Perroud/Weibel 2019 |
| `client/src/pages/Begleiterkrankungen.tsx:329` | `/verstehen/begleiterkrankungen` | «Quellen zur Komorbiditätsforschung bei BPS» | Zanarini 1998; Zanarini 2004 |
| `client/src/pages/Begleiterkrankungen.tsx:388` | `/verstehen/begleiterkrankungen` | «Quellen zu Suizidversuchen und professioneller Einschätzung» | «NICE CG78: Vollleitlinie (2009), Kapitel 8.3.5 und 8.3.9, S. 317–319» → nice.org.uk/…/full-guideline-pdf-242147197; «NICE NG222 (2022): Depression in adults, Empfehlungen 1.2.8–1.2.11» → extern |
| `client/src/pages/Begleiterkrankungen.tsx:536` | `/verstehen/begleiterkrankungen` | «Quellen zu Komorbidität und Medikation» | NICE CG78 1.3.5.1–1.3.6.2; NICE NG222 1.11.2 (extern); Zanarini 1998; Zanarini 2004 |
| `client/src/pages/Genesung.tsx:295` | `/genesung` | «Quellen zu Prognose- und Remissionsaussagen» | Zanarini 2010; Zanarini 2012; Gunderson 2011 |
| `client/src/pages/Genesung.tsx:589` | `/genesung` | «Fachlicher Bezug» (reviewDate 05.10.2026) | APA 2024; NICE CG78; AWMF 2025 Kap. 7.2 |
| `client/src/pages/Selbstfuersorge.tsx:438` | `/selbstfuersorge` | «Quelle zur Radikalen Akzeptanz» (26.04.2026) | «Linehan, DBT Skills Training Manual, 2. Aufl. (2015)» – ohne Link |
| `client/src/pages/Selbstfuersorge.tsx:563` | `/selbstfuersorge` | «Worauf stützt sich das?» | Bailey & Grenyer 2013; Zaccaro et al. 2018; NICE NG150 |
| `client/src/sections/SelbstfuersorgeSignalsSection.tsx:54` | `/selbstfuersorge` | «Fachlicher Bezug» (05.10.2026) | WHO Stress 2026; NICE NG150 |
| `client/src/sections/SelbstfuersorgeExercisesSection.tsx:299` | `/selbstfuersorge` | «Quellen und Einordnung der Übungen» | «Carol Vivyan: STOPP (angepasste deutsche Fassung)» → getselfhelp.co.uk/stopp/; «NHS: Ruhiges Atmen ohne Anstrengung» → nhs.uk; «NHS inform: Grounding-Übungen» → nhsinform.scot |
| `client/src/pages/UnterstuetzenKrise.tsx:415` | `/unterstuetzen/krise` | (ohne Titel) | «Dazzi et al. (2014)» → pubmed 24998511; «NICE NG225 (2022)» → `niceNg225` |
| `client/src/pages/UnterstuetzenTherapie.tsx:383` | `/unterstuetzen/therapie` | «Quellen zu Schweigepflicht, Angehörigenberatung und Zweitmeinung» | BAG Berufsgeheimnis; «PUK Zürich: Informationen für Angehörige»; «Kanton Zürich: Anlaufstellen und Zweitmeinung» (alle extern) |
| `client/src/pages/UnterstuetzenTherapie.tsx:501` | `/unterstuetzen/therapie` | «Quellen zu Therapieverfahren und Angehörigenprogrammen» | APA 2024; Storebø 2020; Bateman & Fonagy 2009; Linehan 2015; Hoffman 2005; Guillén 2021; Guillén 2024; Cohen 2024; Gunderson 1997 |
| `client/src/pages/UeberUns.tsx:198` | `/ueber-uns` | «Wie wir Quellen meinen» (24.03.2026) | APA 2024 (pubmed 39482953); «NEA-BPD / Family Connections»; «PUK Zürich – Angehörigenarbeit und Versorgungsangebote» → pukzh.ch |
| `client/src/pages/UeberUns.tsx:252` | `/ueber-uns` | «Auswahl der Grundlagen» | APA 2024; Storebø 2020 (pubmed 32368793); «Family Connections (NEA-BPD / Alan Fruzzetti)» |
| `client/src/pages/FAQ.tsx:620` | `/faq` | «Quellen zu Prognose- und Therapieaussagen» | Zanarini 2010; Zanarini 2012; Gunderson 2011; Storebø 2020 (alle PubMed direkt) |

### 4.4 Quellenzeilen der Handouts (Textversionen, sichtbar auf `/materialien/text/<id>`)

Wörtlich aus `sourceLine` in `client/src/content/handoutTextVersionContent/*.content.ts`:

| ID | Quellenzeile |
|---|---|
| notfallplan-krise | «Quellen: Berkowitz, C. & Gunderson, J. G., BPD Family Guidelines (NEABPD); Project Air Strategy, Understanding Self-Harm & Suicidal Thinking for Families & Carers; Dazzi et al. (2014), PMID 24998511; NICE NG225 (2022), Self-harm: assessment, management and preventing recurrence.» (`soforthilfe.content.ts:114`) |
| leuchtturm | «Eigene didaktische Metapher zur Selbstorientierung von Angehörigen; recovery- und rechteorientiert überarbeitet.» |
| eisberg | «Fachlicher Bezugspunkt: Emotionsregulation nach Linehan, M. M. (1993). Eisberg-Metapher und Beispiele: eigene didaktische Darstellung.» |
| spaltung | «Grundlage: Linehan, M. M. (1993); Hoffman, P. D. et al. (2005). Eigene didaktische Pendel-Darstellung.» |
| zustands-landkarte | «Eigene didaktische Darstellung. Fachliche Bezugspunkte: Santangelo et al. (2014) …; NICE CG78 …; AWMF-S3-BPS (2022, Gültigkeit 2026 abgelaufen) als datierte Quelle … Kein validiertes Messinstrument oder allgemeingültiges Verlaufsmodell.» |
| alarm-modus | «Quelle: Linehan, M. M. (1993/2015), DBT und Emotionsregulation; Stressmodell als didaktische Vereinfachung.» |
| gehirn | «Eigene didaktische Darstellung. Fachliche Bezugspunkte: Shields et al. (2016) …; Degasperi et al. (2021) …; Baranger et al. (2020) … Kein anatomisches oder diagnostisches Modell.» |
| kinder | «Quellen: Pro Juventute, Wenn ein Elternteil psychisch krank ist: projuventute.ch/de/eltern/familie-gesellschaft/psychisch-kranke-eltern. PUK Zürich, Informationen für Angehörige / Elternberatung: pukzh.ch. Quellenabgleich: 23.09.2026.» |
| rolle-klaeren | «Quelle: Berkowitz, C. & Gunderson, J. G., Family Guidelines; Mason, P. T. & Kreger, R. (2014).» |
| drei-saeulen | «Fachlicher Bezug: NICE CG78; NICE NG150. Redaktionelle Reflexionshilfe, kein validiertes Drei-Säulen-Modell.» |
| konsistenz-prinzip | «Fachlicher Bezug: APA Practice Guideline … (2024); NICE CG78. Redaktionelle Übertragung auf Alltagsabsprachen, keine validierte Methode.» |
| beziehungs-achtsamkeit | «Fachlicher Bezug: WHO, Doing What Matters in Times of Stress; APA Practice Guideline … (2024). Redaktionelle Reflexionshilfe, kein DBT-Protokoll.» |
| 6-leitlinien | «Quellen: APA Practice Guideline … (2024); NICE CG78; NICE NG225. Redaktionelle Zusammenstellung, keine wörtlich übernommene Leitlinie.» |
| 4-alltags-tipps | «Fachlicher Bezug: APA Practice Guideline … (2024); NICE CG78; NICE NG150. Redaktionelle Fragen, kein DBT-Protokoll.» |
| krisenkommunikation | «Quelle: Mason, P. T. & Kreger, R. (2014); Linehan, M. M. (1993).» |
| anspannungskurve | «Fachliche Bezugspunkte: Linehan, M. M.; Carpenter/Trull; NICE CG78; Hoffman, P. D. et al. (2005), Family Connections; Siegel/Ogden als didaktisches Modell; Stand by You / Sotomo (2024). …» |
| wenn-worte-treffen | «Fachliche Bezugspunkte: Berkowitz, C. & Gunderson, J. G., BPD Family Guidelines (NEABPD); Linehan, M. M. (1993). …» |
| gespraeche-kippen | «Fachliche Bezugspunkte: Mason, P. T. & Kreger, R. (2014); Linehan, M. M. (1993).» |
| grenzen-ohne-eskalation | «Quelle: Mason, P. T. & Kreger, R. (2014).» |
| pause-statt-streit | «Quelle: Deeskalation nach DBT, Linehan, M. M. (1993); Mason, P. T. & Kreger, R. (2014).» |
| zuhoeren-ohne-zustimmen | «Quelle: Mason, P. T. & Kreger, R. (2014); Fruzzetti, A. E. (2006).» |
| beispiel-dialog | «Fachliche Bezugspunkte: Mason, P. T. & Kreger, R. (2014); Fruzzetti, A. E. (2006).» |
| dear | «Grundlage: Linehan, M. M. (2015), DBT Skills Training Manual, 2. Auflage, Guilford Press, DEAR MAN. Deutschsprachige redaktionelle Anpassung mit eigenen Beispielen.» |
| spiegeln-statt-aufsaugen | «Quelle: Mason, P. T. & Kreger, R. (2014).» |
| bruecke-gelaender | «Quelle: Hoffman, P. D. et al. (2005), Family Connections; NICE CG78; Linehan, M. M.; Mason, P. T. & Kreger, R. (2014); Stand by You / Sotomo (2024).» |
| 4-arten-von-grenzen | «Redaktionelle Orientierung, kein Testverfahren. Bezug: NICE CG78, Information for families and carers, nice.org.uk/guidance/cg78/ifp/chapter/information-for-families-and-carers.» |
| grenzen-erkennen | «Fachliche Bezugspunkte: WHO, Stress – Questions and Answers (30. März 2026); NICE NG150, Supporting adult carers (2020, aktualisiert). …» |
| lmk | «Fachliche Bezugspunkte: NICE CG78 …; Opferhilfe Schweiz und Eidgenössisches Büro für die Gleichstellung von Frau und Mann (EBG) zu Schutz bei Gewalt. …» |
| grenzen-spickzettel | «Quelle: Linehan, M. M. (2015), DBT Skills Training Manual, 2. Auflage, DEAR MAN; deutschsprachige redaktionelle Anpassung.» |
| warnsignale | «Fachliche Bezugspunkte: WHO (2026), Stress: Questions and answers; NICE NG150 (2020), Supporting adult carers. …» |
| sauerstoffmaske | «Fachliche Bezugspunkte: NICE NG150 (2020), Supporting adult carers; Mason, P. T. & Kreger, R. (2014), Angehörigen-Psychoedukation. …» |
| stopp-technik | «Grundlage: Carol Vivyan, STOPP (Getselfhelp). https://www.getselfhelp.co.uk/stopp/ - deutschsprachige, angepasste Fassung. Atemhinweise: NHS, Breathing exercises for stress, nhs.uk. Quellenabgleich: 23.09.2026.» |
| energie-konto | «Quellen: NICE NG150, Supporting adult carers; WHO Europa, Caring for yourself while caring for others (2025); Bundesamt für Gesundheit, Psychische Gesundheit. Redaktionelle Reflexionsmetapher.» |
| erlaubnis-karte | «Fachlicher Rahmen: NICE NG150; WHO Europa, Caring for yourself while caring for others (2025). …» |
| schuld-verantwortung | «Quellen: [1] Berkowitz, C. & Gunderson, J. G., BPD Family Guidelines (NEABPD). [2] Hoffman, P. D. et al. (2005) … [3] Gunderson, J. G., Herpertz, … (2018), Nature Reviews Disease Primers. [4] Porter, C. et al. (2020) …» |
| radikale-akzeptanz | «Fachlicher Bezugspunkt: Linehan, M. M. (2015), DBT Skills Training Manual.» |
| garten | «Redaktionelle Metapher, kein Erklärungsmodell für den individuellen Verlauf. Bezug: NICE CG78, Information for families and carers, …» |
| genesung-zahlen | «Quelle: Zanarini MC et al. (2010). Time to attainment of recovery … American Journal of Psychiatry 167:663-667. https://pubmed.ncbi.nlm.nih.gov/20395399/» |
| fortschritt-paradox | «Quelle: Zanarini, M. C. et al. (2012); Mason, P. T. & Kreger, R. (2014).» |
| remission-heilung | «Quellen: APA Practice Guideline … (2024); NICE CG78; Zanarini et al. (2012, 2024); AWMF-S3 Psychosoziale Therapien … (2025), Kap. 7.2.» |
| 5-faktoren-genesung | «Quellen: APA Practice Guideline … (2024); NICE CG78; AWMF-S3 … (2025), Kap. 7.2. Redaktionelle Orientierung und Synthese, kein validiertes Fünf-Faktoren-Modell.» |
| rolle-genesungsprozess | «Quellen: APA Practice Guideline … (2024); NICE CG78; NICE NG150.» |

Quellen in PDFs (via `pdftotext`): Genesung in Zahlen → Zanarini 2010 mit PubMed-URL; Kinder → Pro Juventute, PUK; STOPP → getselfhelp.co.uk/stopp/, NHS; 4 Arten von Grenzen und Garten → NICE CG78. Alle 5 PDFs: «ReportLab PDF Library».

**Unstimmigkeiten, die auffallen (nur gemeldet, nicht geändert):**

1. «Schluss mit dem Eiertanz» hat drei verschiedene Ausgabeangaben:
   - `/quellen`: Balance Buch + Medien, 2007 / 8. Aufl. 2014 (`Quellen.tsx:385`)
   - `/buchempfehlungen`: «Psychiatrie-Verlag», 2010 (`Buchempfehlungen.tsx:46-49`)
   - 13 Handout-Quellenzeilen: «Mason & Kreger (2014)»
2. In Handouts zitiert, aber nicht auf `/quellen`:
   - «Zanarini et al. (… 2024)» (remission-heilung)
   - «WHO, Doing What Matters in Times of Stress»
   - «WHO Europa, Caring for yourself while caring for others (2025)»
   - «BAG, Psychische Gesundheit»
   - «EBG»
   - «NICE CG78 Information for families and carers»
   - «Pro Juventute»
   - Dazzi 2014
   - Carol Vivyan / NHS
3. Die AWMF-S3-BPS-Leitlinie 2022 wird in einer Textversion ausdrücklich als «Gültigkeit 2026 abgelaufen» bezeichnet, auf `/quellen` aber ohne diesen Hinweis geführt (`Quellen.tsx:503`).

### 4.5 Buchempfehlungen `/buchempfehlungen` (`client/src/pages/Buchempfehlungen.tsx:36-288`)

19 Bücher in 6 Kategorien. Davon sind 4 als `classification: "critical"` («kritisch eingeordnet») markiert, und 15 haben einen Bezugslink zu Ex Libris.

| Fundort | Kategorie | Autor:in · Titel · Verlag · Jahr | Kritisch | Bezugslink |
|---|---|---|---|---|
| `Buchempfehlungen.tsx:46` | Für Partner & Ehepartner | Paul T. Mason & Randi Kreger · «Schluss mit dem Eiertanz» · Psychiatrie-Verlag · 2010 | ja | – |
| `:56` | Für Partner & Ehepartner | Jerold J. Kreisman & Hal Straus · «Ich hasse dich – verlass mich nicht» · Kösel · 2012 | ja | – |
| `:66` | Für Partner & Ehepartner | Jerold J. Kreisman · «Die Kunst, mit einem Vulkan zu sprechen» · Kösel · 2020 | ja | – |
| `:76` | Für Partner & Ehepartner | Christa Windmüller · «Borderline – Das Selbsthilfe-Buch für Angehörige» · TRIAS · 2025 | – | exlibris.ch (ID 9783432120751) |
| `:87` | Für Partner & Ehepartner | Udo Rauchfleisch · «L(i)eben mit Borderline» · Patmos · 2015 | – | exlibris.ch Suche 9783843606363 |
| `:97` | Für Partner & Ehepartner | Manuela Rösel · «Wenn lieben weh tut» · Starks-Sture · 2006 | – | exlibris.ch Suche 9783980949675 |
| `:114` | Für Eltern | Claudia Trasselli · «DBT-Familienskills: Ein Praxisleitfaden» · Hogrefe · 2022 | – | exlibris.ch Suche 9783801731816 |
| `:125` | Für Eltern | Anne Kristin von Auer & Michael Kaess · «Ratgeber Borderline-Persönlichkeitsstörung» · Hogrefe · 2022 | – | exlibris.ch Suche 9783801727765 |
| `:135` | Für Eltern | Ewald Rahn & Karsten Giertz · «Borderline verstehen und bewältigen» · Psychiatrie-Verlag · 2023 | – | exlibris.ch Suche 9783867393201 |
| `:152` | Kinderbücher | Christiane Tilly & Anja Offermann · «Mama, Mia und das Schleuderprogramm» · Psychiatrie-Verlag · 2012, 3. Aufl. 2025 | – | exlibris.ch (ID 9783867393614) |
| `:164` | Kinderbücher | Erdmute von Mosch · «Mamas Monster» · Psychiatrie-Verlag · 2024 | – | exlibris.ch Suche 9783867393447 |
| `:174` | Kinderbücher | Karen Glistrup · «Was ist bloss mit Mama los?» · Kösel | – | exlibris.ch Suche 9783466310203 |
| `:183` | Kinderbücher | Schirin Homeier · «Sonnige Traurigtage» · Mabuse-Verlag | – | exlibris.ch Suche 9783863215347 |
| `:192` | Kinderbücher | Claudia Gliemann & Nadia Faichney · «Papas Seele hat Schnupfen» · Monterosa | – | exlibris.ch Suche 9783942640213 |
| `:208` | Erfahrungsberichte | Andreas Knuf (Hrsg.) · «Leben auf der Grenze» · Psychiatrie-Verlag · 2002 | – | exlibris.ch Suche 9783867390033 |
| `:219` | Erfahrungsberichte | Christine Ann Lawson · «Borderline-Mütter und ihre Kinder» · Psychosozial-Verlag · 2006 | ja | – |
| `:229` | Erfahrungsberichte | Kröger & Unckel (Hrsg.) · «Borderline-Störung: Wie mir die DBT geholfen hat» · Hogrefe · 2006 | – | exlibris.ch Suche 9783801720216 |
| `:247` | Zum Vertiefen | Alice Sendera & Martina Sendera · «Borderline – Die andere Art zu fühlen» · Springer · 2016 (2. Aufl.) | – | exlibris.ch (ID 9783662480021) |
| `:266` | Englischsprachig | Blaise Aguirre · «Borderline Personality Disorder in Adolescents» · Fair Winds Press · 2014 | – | exlibris.ch Suche 9781592336494 |

### 4.6 Externe URLs (vollständige Liste)

Methode: `grep -rnoE 'https?://…'` über `client/src`, `shared`, `server`, `netlify`, `client/public`, `client/index.html`, ohne `*.test.*` und ohne Binärdateien.

- Ausgeschlossen sind XML-Namensräume (`w3.org` 19×, `sitemaps.org`, `c2pa.org`), `localhost` sowie die 29 `<loc>`-Einträge der Sitemap `client/public/sitemap.xml` (alle `https://borderline-angehoerige.netlify.app/…`).
- **Ergebnis: 122 verschiedene URLs.**
- Testdateien mit URLs: 14 (nicht aufgenommen).
- `client/src/data/kontakte.ts:564-810` (`KONTAKT_NACHWEISE`) ist ein internes Nachweisregister. Davon wird nur die IPW-Quelle sichtbar gerendert (`Diagnostik.tsx:42`, `UnterstuetzenTherapie.tsx:37`).
- Die `URLS`-Einträge (`kontakte.ts:456-562`) werden über `urlByIdStrict` auf `/verstehen/diagnostik`, `/unterstuetzen/therapie` und `/beratung` angezeigt.

| # | URL | Linktext / Bezeichnung (aus Code) | Fundort(e) |
|---|---|---|---|
| 1 | https://borderline-angehoerige.netlify.app | Site-URL (SEO-Fallback, VITE_SITE_URL) | client/src/lib/seoMetadata.ts:16 |
| 2 | https://borderline-angehoerige.netlify.app/og-image.jpg | og:image / twitter:image (Meta) | client/public/soforthilfe/index.html:26, client/public/soforthilfe/index.html:39, client/index.html:29, client/index.html:48 |
| 3 | https://borderline-angehoerige.netlify.app/sitemap.xml | robots.txt Sitemap | client/public/robots.txt:3 |
| 4 | https://borderline-angehoerige.netlify.app/soforthilfe | Canonical/og:url/JSON-LD der Soforthilfe-Seite | client/public/soforthilfe/index.html:22, client/public/soforthilfe/index.html:43, client/public/soforthilfe/index.html:51 |
| 5 | https://dam-api.bfs.admin.ch/hub/api/dam/assets/36144081/master | Quellen: Bundesamt für Statistik (BFS) (2026) – BFS-PDF; claimSources: BFS: Medizinisches Kodierungshandbuch 2026 | client/src/content/claimSources.ts:316, client/src/pages/Quellen.tsx:489 |
| 6 | https://doi.org/10.1037/10226-016 | Quellen: Linehan, M. M. (1997) – APA DOI; claimSources: Linehan 1997: Validation and psychotherapy | client/src/content/claimSources.ts:225, client/src/pages/Quellen.tsx:199 |
| 7 | https://doi.org/10.1371/journal.pone.0279015 | Quellen: Qian, X. et al. (2022) – PLOS ONE | client/src/pages/Quellen.tsx:53 |
| 8 | https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/24/233_245_233/20260701/de/html/fedlex-data-admin-ch-eli-cc-24-233_245_233-20260701-de-html-2.html | Quellen: Schweizerische Eidgenossenschaft (Fedlex) (2026) – Amtlicher Gesetzestext; claimSources: Schweizerisches Zivilgesetzbuch (SR 210) | client/src/content/claimSources.ts:66 |
| 9 | https://github.com/googlefonts/rubik | Lizenztext Rubik (Datei, kein Seitenlink) | client/public/fonts/Rubik-OFL.txt:1 |
| 10 | https://ipw.ch/angebot/kinder-jugendliche-junge-erwachsene/psychotherapiestation-fuer-junge-erwachsene | Nachweis für INFO_IPW | client/src/data/kontakte.ts:793 |
| 11 | https://klassifikationen.bfarm.de/icd-10-gm/kode-suche/htmlgm2024/block-f60-f69.htm#F60.31 | claimSources: BfArM: ICD-10-GM 2024, F60.31 | client/src/content/claimSources.ts:327 |
| 12 | https://obzh.ch/ | Nachweis für INFO_OPFERBERATUNG_ZH | client/src/data/kontakte.ts:707 |
| 13 | https://promentesana.ch/ | Nachweis für INFO_PROMENTE | client/src/data/kontakte.ts:763 |
| 14 | https://pubmed.ncbi.nlm.nih.gov/11386989/ | Quellen: Torgersen, S., Kringlen, E. & Cramer, V. (2001) – PubMed | client/src/pages/Quellen.tsx:267 |
| 15 | https://pubmed.ncbi.nlm.nih.gov/15514413/ | Quellen: Zanarini, M. C., Frankenburg, F. R., Hennen, J., Reich, D. B. & Silk, K. R. (2004) – PubMed | client/src/pages/Quellen.tsx:168 |
| 16 | https://pubmed.ncbi.nlm.nih.gov/16274278/ | Quellen: Skodol, A. E. et al. (2005) – PubMed | client/src/pages/Quellen.tsx:256 |
| 17 | https://pubmed.ncbi.nlm.nih.gov/19833787/ | Quellen: Bateman, A. & Fonagy, P. (2009) – PubMed | client/src/pages/Quellen.tsx:179 |
| 18 | https://pubmed.ncbi.nlm.nih.gov/20395399/ | Quellen: Zanarini, M. C. et al. (2010) – PubMed; claimSources: Zanarini et al. 2010; EvidenceNote: «Zanarini et al. (2010), Time to attainment of recovery from BPD» | client/src/content/revisedHandouts.json:37, client/src/content/claimSources.ts:170, client/src/pages/Quellen.tsx:101, client/src/pages/FAQ.tsx:628 |
| 19 | https://pubmed.ncbi.nlm.nih.gov/21464343/ | Quellen: Gunderson, J. G. et al. (2011) – PubMed; claimSources: Gunderson et al. 2011 (CLPS); EvidenceNote: «Gunderson et al. (2011), Ten-year course of BPD (CLPS)» | client/src/content/claimSources.ts:192, client/src/pages/Quellen.tsx:124, client/src/pages/FAQ.tsx:637 |
| 20 | https://pubmed.ncbi.nlm.nih.gov/22737693/ | Quellen: Zanarini, M. C. et al. (2012) – PubMed; claimSources: Zanarini et al. 2012; EvidenceNote: «Zanarini et al. (2012), Sustained remission and recovery in BPD» | client/src/content/claimSources.ts:182, client/src/pages/Quellen.tsx:113, client/src/pages/FAQ.tsx:633 |
| 21 | https://pubmed.ncbi.nlm.nih.gov/22984853/ | Quellen: Santangelo, P., Bohus, M. & Ebner-Priemer, U. W. (2014) – PubMed | client/src/pages/Quellen.tsx:244 |
| 22 | https://pubmed.ncbi.nlm.nih.gov/23250816/ | Quellen: Carpenter, R. W. & Trull, T. J. (2013) – PubMed | client/src/pages/Quellen.tsx:646 |
| 23 | https://pubmed.ncbi.nlm.nih.gov/24651557/ | Quellen: Bailey, R. C. & Grenyer, B. F. S. (2013) – PubMed; claimSources: Bailey & Grenyer 2013 | client/src/content/claimSources.ts:235, client/src/pages/Quellen.tsx:279 |
| 24 | https://pubmed.ncbi.nlm.nih.gov/24998511/ | claimSources: Dazzi et al. 2014; EvidenceNote: «Dazzi et al. (2014)» | client/src/content/claimSources.ts:202, client/src/pages/UnterstuetzenKrise.tsx:419 |
| 25 | https://pubmed.ncbi.nlm.nih.gov/27265691/ | Quellen: Maslach, C. & Leiter, M. P. (2016) – PubMed | client/src/pages/Quellen.tsx:290 |
| 26 | https://pubmed.ncbi.nlm.nih.gov/27371161/ | Quellen: Shields, G. S., Sazma, M. A. & Yonelinas, A. P. (2016) – PubMed | client/src/pages/Quellen.tsx:233 |
| 27 | https://pubmed.ncbi.nlm.nih.gov/29795363/ | Quellen: Gunderson, J. G., Herpertz, S. C., Skodol, A. E., Torgersen, S. & Zanarini, M. C. (2018) – PubMed; claimSources: Gunderson et al. 2018 | client/src/content/claimSources.ts:123, client/src/pages/Quellen.tsx:135 |
| 28 | https://pubmed.ncbi.nlm.nih.gov/30245619/ | Quellen: Zaccaro, A., Piarulli, A., Laurino, M. et al. (2018) – PubMed | client/src/pages/Quellen.tsx:301 |
| 29 | https://pubmed.ncbi.nlm.nih.gov/30447726/ | Quellen: Shah, R. & Zanarini, M. C. (2018) – PubMed; claimSources: Shah & Zanarini 2018 | client/src/content/claimSources.ts:147, client/src/pages/Quellen.tsx:77 |
| 30 | https://pubmed.ncbi.nlm.nih.gov/31630389/ | Quellen: Porter, C. et al. (2020) – PubMed; claimSources: Porter et al. 2020 | client/src/content/claimSources.ts:135, client/src/pages/Quellen.tsx:65 |
| 31 | https://pubmed.ncbi.nlm.nih.gov/31806978/ | Quellen: Weiner, L., Perroud, N. & Weibel, S. (2019) – PubMed | client/src/pages/Quellen.tsx:89 |
| 32 | https://pubmed.ncbi.nlm.nih.gov/32304101/ | Quellen: Guillén, V. et al. (2021) – PubMed | client/src/pages/Quellen.tsx:431 |
| 33 | https://pubmed.ncbi.nlm.nih.gov/32312691/ | Quellen: Baranger, D. A. A. et al. (2020) – PubMed | client/src/pages/Quellen.tsx:222 |
| 34 | https://pubmed.ncbi.nlm.nih.gov/32368793/ | Quellen: Storebø, O. J. et al. (2020) – PubMed; EvidenceNote: «Storebø et al. (2020), Psychological therapies for BPD (Cochrane)»; EvidenceNote: «Storebø et al. (2020), Cochrane-Review zu psychologischen Therapien bei BPS» | client/src/pages/UeberUns.tsx:270, client/src/pages/Quellen.tsx:42, client/src/pages/FAQ.tsx:642 |
| 35 | https://pubmed.ncbi.nlm.nih.gov/34031363/ | Quellen: Degasperi, G. et al. (2021) – PubMed | client/src/pages/Quellen.tsx:210 |
| 36 | https://pubmed.ncbi.nlm.nih.gov/39039536/ | Quellen: Cohen, S. et al. (2024) – PubMed; claimSources: Cohen et al. 2024: Family Connections Frankreich/Schweiz | client/src/content/claimSources.ts:349, client/src/pages/Quellen.tsx:454 |
| 37 | https://pubmed.ncbi.nlm.nih.gov/39482953/ | Quellen: American Psychiatric Association (Keepers, G. A. et al.) (2024) – PubMed; claimSources: APA-Behandlungsleitlinie 2024; EvidenceNote: «APA Practice Guideline for the Treatment of Patients With Borderline Personality Disorder (2024)»; EvidenceNote: «APA Practice Guideline zur Behandlung der BPS (2024)» | client/src/content/claimSources.ts:55, client/src/pages/UeberUns.tsx:207, client/src/pages/UeberUns.tsx:264, client/src/pages/Quellen.tsx:317 |
| 38 | https://pubmed.ncbi.nlm.nih.gov/39624006/ | Quellen: Guillén, V. et al. (2024) – PubMed; claimSources: Guillén et al. 2024: Family Connections RCT | client/src/content/claimSources.ts:338, client/src/pages/Quellen.tsx:442 |
| 39 | https://pubmed.ncbi.nlm.nih.gov/9401149/ | Quellen: Gunderson, J. G., Berkowitz, C. & Ruiz-Sancho, A. (1997) – PubMed | client/src/pages/Quellen.tsx:145 |
| 40 | https://pubmed.ncbi.nlm.nih.gov/9842784/ | Quellen: Zanarini, M. C., Frankenburg, F. R., Dubo, E. D., Sickel, A. E., Trikha, A., Levin, A. & Reynolds, V. (1998) – PubMed | client/src/pages/Quellen.tsx:156 |
| 41 | https://register.awmf.org/assets/guidelines/038-020l_S3_Psychosoziale_Therapien_bei_schweren_psychischen_Erkrankungen_2025-12.pdf | Quellen: Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften (AWMF) (2025) – AWMF-Leitlinie (PDF); claimSources: AWMF S3 Psychosoziale Therapien 2025 | client/src/content/claimSources.ts:282, client/src/pages/Quellen.tsx:624 |
| 42 | https://register.awmf.org/de/leitlinien/detail/038-015 | Quellen: Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften (AWMF) (2022) – AWMF-Register und aktueller Status | client/src/pages/Quellen.tsx:510 |
| 43 | https://schema.org | JSON-LD @context (kein Link) | client/src/lib/seoMetadata.ts:41, client/src/lib/seoMetadata.ts:93, client/src/lib/seoMetadata.ts:125, client/src/lib/seoMetadata.ts:140, client/public/soforthilfe/index.html:47 |
| 44 | https://scripts.sil.org/OFL | Lizenztext OFL (Datei, kein Seitenlink) | client/public/fonts/Rubik-OFL.txt:5 |
| 45 | https://stand-by-you.ch/ | Nachweis für INFO_STANDBYYOU | client/src/data/kontakte.ts:745 |
| 46 | https://stand-by-you.ch/wp-content/uploads/2024/03/sby_studie_final.pdf | Quellen: Sotomo (2024) – Studienbericht (PDF) | client/src/pages/Quellen.tsx:684 |
| 47 | https://www. (String-Präfix) | Code: `url.replace("https://www.", "www.")` – Anzeige-Text, kein eigener Link | client/src/pages/Selbsthilfegruppen.tsx:285, client/src/pages/Selbsthilfegruppen.tsx:351, client/src/pages/Selbsthilfegruppen.tsx:450, client/src/pages/Selbsthilfegruppen.tsx:494 |
| 48 | https://www.143.ch/ | Nachweis für GRUEN_143 | client/src/data/kontakte.ts:633 |
| 49 | https://www.147.ch/de/ | Nachweis für GRUEN_147 | client/src/data/kontakte.ts:642 |
| 50 | https://www.aerztefon.ch/ | Nachweis für INFO_AERZTEFON | client/src/data/kontakte.ts:670 |
| 51 | https://www.bag.admin.ch/de/berufs-oder-arztgeheimnis | Quellen: Bundesamt für Gesundheit (BAG) (laufend) – BAG; claimSources: BAG: Berufs- oder Arztgeheimnis; EvidenceNote: «BAG: Berufs- oder Arztgeheimnis» | client/src/content/claimSources.ts:89, client/src/pages/Quellen.tsx:499, client/src/pages/UnterstuetzenTherapie.tsx:388 |
| 52 | https://www.bag.admin.ch/de/interkulturelles-dolmetschen | Quellen: Bundesamt für Gesundheit (BAG) (laufend) – BAG; claimSources: BAG: Interkulturelles Dolmetschen | client/src/content/claimSources.ts:258 |
| 53 | https://www.bag.admin.ch/de/neuregelung-der-psychologischen-psychotherapie-ab-1-juli-2022 | Quellen: Bundesamt für Gesundheit (BAG) (laufend (Abruf 06.10.2026)) – BAG; VersorgungsZugang (BAG Psychotherapie-Neuregelung) | client/src/components/VersorgungsZugang.tsx:32, client/src/pages/Quellen.tsx:544 |
| 54 | https://www.borderlinepersonalitydisorder.org/family-connections/ | EvidenceNote: «NEA-BPD / Family Connections»; EvidenceNote: «Family Connections (NEA-BPD / Alan Fruzzetti)» | client/src/pages/UeberUns.tsx:212, client/src/pages/UeberUns.tsx:275 |
| 55 | https://www.borderlinepersonalitydisorder.org/wp-content/uploads/2011/08/Family-Guidelines-standard.pdf | Quellen: Berkowitz, C. & Gunderson, J. G. (laufend (URL-Snapshot 2011)) – PDF auf NEABPD-Archiv | client/src/pages/Quellen.tsx:566 |
| 56 | https://www.ch.ch/de/sicherheit-und-recht/gefahren-und-notfalle/ | Nachweis für ROT_144, ROT_117, ROT_112; Soforthilfe: «ch.ch: Gefahren und Notfälle» | client/src/data/kontakte.ts:568, client/src/data/kontakte.ts:578, client/src/data/kontakte.ts:588, client/public/soforthilfe/index.html:354 |
| 57 | https://www.clienia.ch/de/standorte/clienia-schloessli/stationen/a2/ | Kontakt-URL: Clienia Schlössli DBT | client/src/data/kontakte.ts:484 |
| 58 | https://www.cochrane.org/evidence/CD012955_psychological-therapies-people-borderline-personality-disorder | claimSources: Storebø et al. 2020 (Cochrane) | client/src/content/claimSources.ts:158 |
| 59 | https://www.dachverband-dbt.de/dbt-therapieangebote | Kontakt-URL: DBT-Dachverband | client/src/data/kontakte.ts:490 |
| 60 | https://www.depressionen.ch | Kontakt-URL: Depressionen Schweiz | client/src/data/kontakte.ts:478 |
| 61 | https://www.elternnotruf.ch/ | Nachweis für GRUEN_ELTERN | client/src/data/kontakte.ts:651 |
| 62 | https://www.exlibris.ch/de/buecher-buch/deutschsprachige-buecher/alice-sendera/borderline-die-andere-art-zu-fuehlen/id/9783662480021/ | Buchempfehlung: Alice Sendera & Martina Sendera, «Borderline – Die andere Art zu fühlen» | client/src/pages/Buchempfehlungen.tsx:255 |
| 63 | https://www.exlibris.ch/de/buecher-buch/deutschsprachige-buecher/christa-windmueller/borderline-das-selbsthilfe-buch-fuer-angehoerige/id/9783432120751/ | Buchempfehlung: Christa Windmüller, «Borderline – Das Selbsthilfe-Buch für Angehörige» | client/src/pages/Buchempfehlungen.tsx:84 |
| 64 | https://www.exlibris.ch/de/buecher-buch/deutschsprachige-buecher/christiane-tilly/mama-mia-und-das-schleuderprogramm/id/9783867393614/ | Buchempfehlung: Christiane Tilly & Anja Offermann, «Mama, Mia und das Schleuderprogramm» | client/src/pages/Buchempfehlungen.tsx:161 |
| 65 | https://www.exlibris.ch/de/suche/?query=9781592336494 | Buchempfehlung: Blaise Aguirre, «Borderline Personality Disorder in Adolescents» | client/src/pages/Buchempfehlungen.tsx:273 |
| 66 | https://www.exlibris.ch/de/suche/?query=9783466310203 | Buchempfehlung: Karen Glistrup, «Was ist bloss mit Mama los?» | client/src/pages/Buchempfehlungen.tsx:180 |
| 67 | https://www.exlibris.ch/de/suche/?query=9783801720216 | Buchempfehlung: Kröger & Unckel (Hrsg.), «Borderline-Störung: Wie mir die DBT geholfen hat» | client/src/pages/Buchempfehlungen.tsx:236 |
| 68 | https://www.exlibris.ch/de/suche/?query=9783801727765 | Buchempfehlung: Anne Kristin von Auer & Michael Kaess, «Ratgeber Borderline-Persönlichkeitsstörung» | client/src/pages/Buchempfehlungen.tsx:132 |
| 69 | https://www.exlibris.ch/de/suche/?query=9783801731816 | Buchempfehlung: Claudia Trasselli, «DBT-Familienskills: Ein Praxisleitfaden» | client/src/pages/Buchempfehlungen.tsx:122 |
| 70 | https://www.exlibris.ch/de/suche/?query=9783843606363 | Buchempfehlung: Udo Rauchfleisch, «L(i)eben mit Borderline» | client/src/pages/Buchempfehlungen.tsx:94 |
| 71 | https://www.exlibris.ch/de/suche/?query=9783863215347 | Buchempfehlung: Schirin Homeier, «Sonnige Traurigtage» | client/src/pages/Buchempfehlungen.tsx:189 |
| 72 | https://www.exlibris.ch/de/suche/?query=9783867390033 | Buchempfehlung: Andreas Knuf (Hrsg.), «Leben auf der Grenze» | client/src/pages/Buchempfehlungen.tsx:216 |
| 73 | https://www.exlibris.ch/de/suche/?query=9783867393201 | Buchempfehlung: Ewald Rahn & Karsten Giertz, «Borderline verstehen und bewältigen» | client/src/pages/Buchempfehlungen.tsx:142 |
| 74 | https://www.exlibris.ch/de/suche/?query=9783867393447 | Buchempfehlung: Erdmute von Mosch, «Mamas Monster» | client/src/pages/Buchempfehlungen.tsx:171 |
| 75 | https://www.exlibris.ch/de/suche/?query=9783942640213 | Buchempfehlung: Claudia Gliemann & Nadia Faichney, «Papas Seele hat Schnupfen» | client/src/pages/Buchempfehlungen.tsx:198 |
| 76 | https://www.exlibris.ch/de/suche/?query=9783980949675 | Buchempfehlung: Manuela Rösel, «Wenn lieben weh tut» | client/src/pages/Buchempfehlungen.tsx:104 |
| 77 | https://www.getselfhelp.co.uk/stopp/ | EvidenceNote: «Carol Vivyan: STOPP (angepasste deutsche Fassung)» | client/src/sections/SelbstfuersorgeExercisesSection.tsx:305, client/src/content/revisedHandouts.json:79 |
| 78 | https://www.guilford.com/books/DBT-Skills-Training-Manual/Marsha-Linehan/9781462516995 | claimSources: Linehan 2015: DBT Skills Training Manual | client/src/content/claimSources.ts:214 |
| 79 | https://www.inter-pret.ch/admin/data/files/infolib_asset/file/193/argumentarium_gesundheit.pdf | Quellen: INTERPRET (2019) – Offizielles Argumentarium (PDF); claimSources: INTERPRET: Dolmetschen im Gesundheitsbereich | client/src/content/claimSources.ts:270 |
| 80 | https://www.ipw.ch | Kontakt-URL: Integrierte Psychiatrie Winterthur (ipw) | client/src/data/kontakte.ts:508 |
| 81 | https://www.netlify.com/privacy/ | Datenschutz: «Datenschutzerklärung von Netlify» | client/src/pages/Datenschutz.tsx:92 |
| 82 | https://www.newharbinger.com/9781684036899/stop-walking-on-eggshells/ | Quellen: Mason, P. T. & Kreger, R. (2020) – Offizielle Verlagsseite; claimSources: New Harbinger: Stop Walking on Eggshells, Third Edition | client/src/content/claimSources.ts:246 |
| 83 | https://www.nhs.uk/mental-health/conditions/borderline-personality-disorder/causes/ | claimSources: NHS: Ursachen von Borderline | client/src/content/claimSources.ts:293 |
| 84 | https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/ | EvidenceNote: «NHS: Ruhiges Atmen ohne Anstrengung» | client/src/sections/SelbstfuersorgeExercisesSection.tsx:310 |
| 85 | https://www.nhsinform.scot/healthy-living/mental-wellbeing/breathing-and-relaxation-exercises/grounding-exercises/ | EvidenceNote: «NHS inform: Grounding-Übungen» | client/src/sections/SelbstfuersorgeExercisesSection.tsx:315 |
| 86 | https://www.nice.org.uk/guidance/cg78 | Quellen: National Institute for Health and Care Excellence (NICE) (2009) – NICE CG78 | client/src/pages/Quellen.tsx:635 |
| 87 | https://www.nice.org.uk/guidance/cg78/chapter/Recommendations | claimSources: NICE CG78 | client/src/content/claimSources.ts:15 |
| 88 | https://www.nice.org.uk/guidance/cg78/evidence/full-guideline-pdf-242147197 | claimSources: NICE CG78: Vollleitlinie 2009; EvidenceNote: «NICE CG78: Vollleitlinie (2009), Kapitel 8.3.5 und 8.3.9, S. 317–319» | client/src/content/claimSources.ts:305, client/src/pages/Begleiterkrankungen.tsx:395 |
| 89 | https://www.nice.org.uk/guidance/ng150 | Quellen: National Institute for Health and Care Excellence (NICE) (2020) – NICE NG150 | client/src/pages/Quellen.tsx:601 |
| 90 | https://www.nice.org.uk/guidance/ng150/chapter/Recommendations | claimSources: NICE NG150: Supporting adult carers | client/src/content/claimSources.ts:45 |
| 91 | https://www.nice.org.uk/guidance/ng222/chapter/Recommendations | claimSources: NICE NG222: Depression in adults | client/src/content/claimSources.ts:35 |
| 92 | https://www.nice.org.uk/guidance/ng222/chapter/Recommendations#depression-in-people-with-a-diagnosis-of-personality-disorder | EvidenceNote: «NICE NG222 (2022): Empfehlung 1.11.2 zu Depression bei Persönlichkeitsstörung» | client/src/pages/Begleiterkrankungen.tsx:550 |
| 93 | https://www.nice.org.uk/guidance/ng222/chapter/Recommendations#risk-assessment-and-management | EvidenceNote: «NICE NG222 (2022): Depression in adults, Empfehlungen 1.2.8–1.2.11» | client/src/pages/Begleiterkrankungen.tsx:402 |
| 94 | https://www.nice.org.uk/guidance/ng225/chapter/Recommendations | Quellen: National Institute for Health and Care Excellence (NICE) (2022) – NICE NG225; claimSources: NICE NG225 | client/src/content/claimSources.ts:25, client/src/pages/Quellen.tsx:612 |
| 95 | https://www.opferhilfe-schweiz.ch/de/ | Nachweis für INFO_OPFERHILFE_142; Soforthilfe: «Opferhilfe Schweiz» | client/src/data/kontakte.ts:679, client/public/soforthilfe/index.html:399 |
| 96 | https://www.opferhilfe-schweiz.ch/de/was-ist-opferhilfe/schutz/ | Quellen: Opferhilfe Schweiz (SODK) (laufend) – Offizielle Schutzinformation; claimSources: Opferhilfe Schweiz: Schutz | client/src/content/claimSources.ts:77 |
| 97 | https://www.projectairstrategy.org/ | Quellen: Project Air Strategy (laufend) – projectairstrategy.org | client/src/pages/Quellen.tsx:555 |
| 98 | https://www.promentesana.ch | Kontakt-URL: Pro Mente Sana | client/src/data/kontakte.ts:472 |
| 99 | https://www.psychiatry.org/psychiatrists/practice/dsm | claimSources: APA DSM-5-TR | client/src/content/claimSources.ts:111 |
| 100 | https://www.pukzh.ch | Kontakt-URL: PUK Zürich – Website; Nachweis für GELB_PUK_KJP, GELB_PUK_ERW, GELB_PUK_65; EvidenceNote: «PUK Zürich – Angehörigenarbeit und Versorgungsangebote»; Code-Kommentar «Quelle A» (kontakte.ts:39) | client/src/data/kontakte.ts:39, client/src/data/kontakte.ts:496, client/src/pages/UeberUns.tsx:218 |
| 101 | https://www.pukzh.ch/ | Soforthilfe: «PUK: veröffentlichte Notfallnummern» | client/public/soforthilfe/index.html:363 |
| 102 | https://www.pukzh.ch/patienten-angehoerige/informationen-fuer-angehoerige/ | Nachweis für INFO_FACHSTELLE; EvidenceNote: «PUK Zürich: Informationen für Angehörige» | client/src/data/kontakte.ts:736, client/src/data/pageGovernance.ts:52, client/src/data/pageGovernance.ts:149, client/src/pages/UnterstuetzenTherapie.tsx:393 |
| 103 | https://www.pukzh.ch/standorte/zentrum-fuer-jugendpsychiatrie-ambulatorium-zuerich/ | Nachweis für INFO_PUK_KJPP_HYPE | client/src/data/kontakte.ts:726 |
| 104 | https://www.pukzh.ch/ueber-uns/kontakt/ | Nachweis für INFO_PUK_ZENTRALE | client/src/data/kontakte.ts:716 |
| 105 | https://www.pukzh.ch/unsere-angebote/erwachsenenpsychiatrie/behandlungsschwerpunkte/krisenintervention-kiz/ | Nachweis für INFO_KIZ; Soforthilfe: «direkten KIZ-Anbieterbeleg» / «PUK: Krisenintervention Zürich (KIZ)» | client/src/data/kontakte.ts:661, client/public/soforthilfe/index.html:311, client/public/soforthilfe/index.html:373 |
| 106 | https://www.pukzh.ch/unsere-angebote/erwachsenenpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/station-fuer-dialektisch-behaviorale-therapie/ | Nachweis für INFO_PUK_DBT | client/src/data/kontakte.ts:783 |
| 107 | https://www.pukzh.ch/unsere-angebote/kinder-und-jugendpsychiatrie/behandlungsschwerpunkte/persoenlichkeitsstoerungen/ | Kontakt-URL: PUK KJPP – Persönlichkeitsstörungen / Elterngruppe | client/src/data/kontakte.ts:521 |
| 108 | https://www.sanatorium-kilchberg.ch | Kontakt-URL: Sanatorium Kilchberg | client/src/data/kontakte.ts:514 |
| 109 | https://www.sanatorium-kilchberg.ch/kontakt/ | Nachweis für INFO_SANATORIUM_KILCHBERG | client/src/data/kontakte.ts:802 |
| 110 | https://www.selbsthilfeschweiz.ch | Kontakt-URL: Selbsthilfe Schweiz | client/src/components/VersorgungsZugang.tsx:74, client/src/data/kontakte.ts:466, client/src/pages/Selbsthilfegruppen.tsx:121 |
| 111 | https://www.selbsthilfezuerich.ch/shzh/de.html | Nachweis für INFO_SELBSTHILFE_CH | client/src/data/kontakte.ts:754 |
| 112 | https://www.stand-by-you.ch | Kontakt-URL: Stand By You | client/src/data/kontakte.ts:459 |
| 113 | https://www.suizidpraevention-zh.ch | Code-Kommentar «Quelle B» (historischer Notfallnummern-Abgleich, nicht gerendert) | client/src/data/kontakte.ts:41 |
| 114 | https://www.toxinfo.ch/ | Nachweis für ROT_145; Soforthilfe: «Tox Info Suisse» | client/src/data/kontakte.ts:597, client/public/soforthilfe/index.html:391 |
| 115 | https://www.vaskzuerich.ch | Kontakt-URL: VASK Zürich | client/src/data/kontakte.ts:502 |
| 116 | https://www.vaskzuerich.ch/de/Angebote-der-VASK/Beratungstelefon | Nachweis für INFO_VASK_ZH | client/src/data/kontakte.ts:773 |
| 117 | https://www.who.int/news-room/questions-and-answers/item/stress | Quellen: World Health Organization (2026) – WHO | client/src/pages/Quellen.tsx:591 |
| 118 | https://www.who.int/news-room/questions-and-answers/item/suicide | Quellen: World Health Organization (Suicide Q&A) (2026) – WHO | client/src/pages/Quellen.tsx:581 |
| 119 | https://www.who.int/publications/i/item/9789240077263 | Quellen: World Health Organization (ICD-11) (2024) – WHO-Publikation; claimSources: WHO ICD-11: klinische Diagnoseanforderungen | client/src/content/claimSources.ts:100, client/src/pages/Quellen.tsx:479 |
| 120 | https://www.zh.ch/de/gesundheit/anlaufstellen-gesundheitswesen/patientinnen-patienten-angehoerige.html | EvidenceNote: «Kanton Zürich: Anlaufstellen und Zweitmeinung» | client/src/pages/UnterstuetzenTherapie.tsx:398 |
| 121 | https://www.zh.ch/de/gesundheit/notfall-rettung.html | Nachweis für INFO_OPFERHILFE_ZH_24_7; Soforthilfe: «kantonale Notfallübersicht» | client/src/data/kontakte.ts:688, client/public/soforthilfe/index.html:380 |
| 122 | https://www.zh.ch/de/gesundheit/strategien-programme/forensic-nurses.html | Nachweis für INFO_FORENSIC_NURSES | client/src/data/kontakte.ts:698 |

---

## 5. Telefonnummern, tel:-Links, Notfall- und Kriseninhalte

### 5.1 Kanonisches Kontaktregister

`client/src/data/kontakte.ts:1-27` beschreibt sich als «KONTAKTE – Single Source of Truth … Inventar: 26 Telefonnummern, 4 E-Mail-Adressen, 1 Adresse, 11 URLs». Kategorien: ROT (Notruf) 4, GELB (PUK 24/7) 3, GRUEN (Entlastung) 3, INFO (Beratung) 16.

- ROT (`:123-167`): 144 «Rettungsdienst», 117 «Polizei», 112 «Notruf (wenn unsicher)», 145 «Tox Info Suisse»
- GELB (`:170-210`): 058 384 66 66 «PUK Kinder & Jugendliche (24/7)», 058 384 20 00 «PUK Erwachsene (24/7)», 058 384 46 82 «PUK Erwachsene (ab 65) (24/7)»
- GRUEN (`:212-249`): 143 «Dargebotene Hand (24/7)», 147 «Pro Juventute (24/7)», 0848 35 45 55 «Elternnotruf (24/7)»
- INFO (`:252-409`): 058 384 65 00 KIZ, 0800 33 66 55 Ärztefon, 142 Opferhilfe, 044 455 21 42 Opferhilfe Zürich, 0800 09 09 09 Forensic Nurses, 044 299 40 50 Opferberatung, 058 384 21 11 PUK Zentrale, 058 384 66 00 KJPP Ambulatorium, 058 384 38 00 Fachstelle Angehörigenarbeit, 0800 840 400 Stand by You, 043 288 88 88 Selbsthilfe Zürich, 0848 800 858 Pro Mente Sana, 044 240 48 68 VASK, 058 384 94 91 DBT-Station 62B, 052 264 34 00 IPW, 044 716 42 42 Sanatorium Kilchberg

`ROT`, `GELB` und `GRUEN` werden in der React-App nur von `client/src/pages/Notfallkarte.tsx:16` importiert. Diese Seite ist **nicht geroutet** (fehlt in `client/src/app/routes.ts`) und nicht im Bundle (`notfallkarte-data` kommt in `dist/public/assets/*.js` nicht vor). `WEBSITE_ROT`, `AKUT_KONTAKT_IDS`, `WEBSITE_KONTAKTE`, `ALLE_KONTAKTE` und `TEXTE` werden nur in Tests verwendet.

### 5.2 Sichtbare Nummern und `tel:`-Links

| Fundort | Art | Inhalt (Nummer + Label wörtlich) | Sichtbar auf Route |
|---|---|---|---|
| `client/public/soforthilfe/index.html:130` | tel:-Link, Notfallblock «Sofort wählen» | `tel:144` «144 Medizinischer Notfall» | `/soforthilfe` (auch `/notfall`, `/notfallkarte`, `/notfallkarte.html` per 301; `netlify.toml:30-64`, `client/public/_redirects:10-15`) |
| `…/soforthilfe/index.html:134` | tel:-Link, Notfallblock | `tel:117` «117 Bedrohung oder Gewalt» | `/soforthilfe` |
| `…/soforthilfe/index.html:138` | tel:-Link, Notfallblock | `tel:112` «112 Schnellster Notruf» | `/soforthilfe` |
| `…/soforthilfe/index.html:167-168` | tel:-Links, Karte 1 «Medizinische Lebensgefahr» | «144 Rettungsdienst», «112 Notruf» | `/soforthilfe` |
| `…/soforthilfe/index.html:183` | tel:-Link, Karte 2 «Gewalt oder unmittelbare Bedrohung» | «117 Polizei» | `/soforthilfe` |
| `…/soforthilfe/index.html:205`, `:209`, `:213` | tel:-Links, Karte 3 «Psychiatrische Krise im Kanton Zürich» | «058 384 20 00 PUK Erwachsene, 24/7», «058 384 66 66 PUK Kinder und Jugendliche, 24/7», «058 384 46 82 PUK ab 65, 24/7» | `/soforthilfe` |
| `…/soforthilfe/index.html:229`, `:232`, `:236` | tel:-Links, Karte 4 «Entlastung und Gespräch» | «143 Die Dargebotene Hand, 24/7», «0848 35 45 55 Elternnotruf, 24/7», «147 Pro Juventute – Beratung für Kinder und Jugendliche, 24/7» | `/soforthilfe` |
| `…/soforthilfe/index.html:266`, `:270`, `:273`, `:275`, `:279`, `:283` | tel:-Links, Block «Gewalt, Bedrohung oder Übergriff» | «117 Polizei bei akuter Bedrohung …», «144 Rettungsdienst bei Verletzung …», «142 Opferhilfe, 24/7», «044 455 21 42 Opferhilfe Zürich, 24/7», «0800 09 09 09 Forensic Nurses Zürich, 24/7», «044 299 40 50 Opferberatung Zürich» | `/soforthilfe` |
| `…/soforthilfe/index.html:300`, `:304`, `:307` | tel:-Links, Block «Weitere Hilfe» | «145 Tox Info Suisse bei Vergiftungsverdacht», «0800 33 66 55 Ärztefon Zürich», «058 384 65 00 Krisenintervention Zürich (KIZ) der PUK: Durchwahlnummer 4 wählen …» | `/soforthilfe` |
| `…/soforthilfe/index.html:385` | Telefonnummer (Text, kein Link) | «nennt weiterhin 044 296 73 10» (abweichende kantonale KIZ-Angabe) | `/soforthilfe` |
| `client/src/components/AngehoerigenBeratung.tsx:21-23` | tel:-Link | Fachstelle Angehörigenarbeit «058 384 38 00» (`INFO_FACHSTELLE`) | `/` (Home.tsx), `/selbstfuersorge`, `/grenzen`, `/unterstuetzen/therapie` |
| `client/src/pages/Fachstelle.tsx:85` | tel:-Link | Fachstelle «058 384 38 00» | `/fachstelle` |
| `client/src/pages/Impressum.tsx:62` | tel:-Link | Fachstelle «058 384 38 00» | `/impressum` |
| `client/src/pages/Selbsthilfegruppen.tsx:210` | tel:-Link | Fachstelle «058 384 38 00» | `/beratung` |
| `client/src/pages/Begleiterkrankungen.tsx:621` | tel:-Link | Fachstelle «058 384 38 00» | `/verstehen/begleiterkrankungen` |
| `client/src/pages/Diagnostik.tsx:862` | tel:-Link | Fachstelle «058 384 38 00» | `/verstehen/diagnostik` |
| `client/src/pages/Diagnostik.tsx:640` | tel:-Link | «Allgemeines Ambulatorium Zürich 058 384 66 00» | `/verstehen/diagnostik` |
| `client/src/pages/Diagnostik.tsx:692` | tel:-Link | «Zentrale 058 384 21 11» (PUK) | `/verstehen/diagnostik` |
| `client/src/pages/Diagnostik.tsx:696` | tel:-Link | «KJPP Ambulatorium Zürich 058 384 66 00» | `/verstehen/diagnostik` |
| `client/src/pages/Diagnostik.tsx:726` | tel:-Link | «Psychotherapiestation 052 264 34 00» (IPW) | `/verstehen/diagnostik` |
| `client/src/pages/Diagnostik.tsx:757` | tel:-Link | «Telefon 044 716 42 42» (Sanatorium Kilchberg) | `/verstehen/diagnostik` |
| `client/src/pages/UnterstuetzenTherapie.tsx:822` | tel:-Link | «Allgemeines Ambulatorium Zürich 058 384 66 00» | `/unterstuetzen/therapie` |
| `client/src/pages/UnterstuetzenTherapie.tsx:852` | tel:-Link | «Telefon 058 384 94 91» (DBT-Station 62B PUK) | `/unterstuetzen/therapie` |
| `client/src/pages/UnterstuetzenTherapie.tsx:875` | tel:-Link | «Psychotherapiestation 052 264 34 00» (IPW) | `/unterstuetzen/therapie` |
| `client/src/pages/Selbsthilfegruppen.tsx:276` | tel:-Link | «0848 800 858 (Normaltarif)» Pro Mente Sana | `/beratung` |
| `client/src/pages/Selbsthilfegruppen.tsx:332` | tel:-Link | Stand by You HelpLine «0800 840 400» | `/beratung` |
| `client/src/pages/Selbsthilfegruppen.tsx:409` | tel:-Link | VASK Zürich «044 240 48 68» | `/beratung` |
| `client/src/pages/Notfallkarte.tsx:258` | tel:-Link (alle ROT/GELB/GRUEN) | `tel:${kontakt.tel}` | **keine Route** (ungeroutet, nicht gebündelt) |
| `client/src/content/searchIndex.ts:329-331`, `:1289`, `:1572` | Suchbegriffe | Keywords «144», «143», «117», «117», «147» → Treffer führen auf `/soforthilfe` bzw. `/faq` | Suche (alle Seiten) |
| `client/src/pages/Diagnostik.tsx:34` | Code-Kommentar | «PUK-Diagnostik-Anmeldung: Zentrale (058 384 21 11), nicht 24/7-Notfall.» | nicht sichtbar |
| `client/public/print.css:189`, `client/src/pages/notfallkarte-print.css:34` | Druck-CSS für `a[href^="tel:"]` | – | Druckansicht |

**Summen:**

- `/soforthilfe` (statisch): 21 `tel:`-Links mit 16 verschiedenen Nummern, dazu 1 Nummer als reiner Text.
- React-Seiten: 17 `tel:`-Fundstellen im Code mit 9 verschiedenen Nummern, alle nicht-akut (INFO). Die Fachstellen-Nummer erscheint auf 9 Routen.
- Auf React-Seiten steht keine Notrufnummer (144/117/112/143/147) als sichtbarer Text oder Link. Die Notrufnummern gibt es nur auf `/soforthilfe`.

### 5.3 Notfall- und Krisenblöcke, Banner und Seiten

| Fundort | Art | Inhalt (wörtlich) | Sichtbar auf Route |
|---|---|---|---|
| `client/public/soforthilfe/index.html:1-428` | **Seite** (statisches HTML, ohne React) | Titel «Soforthilfe bei akuter Gefahr» (`:98`); Block «Sofort wählen» (`:128-146`); Abschnitte «Priorität: Was ist jetzt der schnellste passende Weg?», «Weitere Hilfe», «Quellen und Kontaktprüfung»; Prüfvermerk «Erneute Fachprüfung ausstehend (fällig seit 31.07.2026)» (`:118`). Routing: `netlify.toml:96-100` | `/soforthilfe`; Weiterleitungen von `/notfall`, `/notfallkarte`, `/notfallkarte.html` |
| `client/src/components/layout/HeaderNav.tsx:136-142` | Kopf-Link | «Hilfe» → `/soforthilfe` | alle React-Seiten |
| `client/src/components/Layout.tsx:115-142` | Fusszeilen-Hinweis | «Bei akuter Gefahr oder wenn Sie die Dringlichkeit nicht sicher einschätzen können, wenden Sie sich an den zuständigen Notfalldienst. Hinweise zu passenden Anlaufstellen finden Sie unter Akute Hilfe und Notfallkontakte.» und «… ausserhalb der Schweiz die lokalen Notrufnummern.» | alle React-Seiten |
| `client/src/pages/Home.tsx:63-68` | Hinweis | «Bei akuter Gefahr oder Unsicherheit: Akute Hilfe und Notfallkontakte.» | `/` |
| `client/src/components/LearningPath.tsx:93-98`, `:197-202` | Hinweis (2×) | «Bei akuter Gefahr oder Unsicherheit: Akute Hilfe und Notfallkontakte.» | `/` |
| `client/src/components/AngehoerigenBeratung.tsx:29-35` | Hinweis | «Die Fachstelle ist kein Krisendienst. Bei akuter Gefahr oder Unsicherheit: Soforthilfe.» | `/`, `/selbstfuersorge`, `/grenzen`, `/unterstuetzen/therapie` |
| `client/src/pages/UnterstuetzenKrise.tsx:1-780` | **Seite «Krisenbegleitung»** (SEO-Titel `:202`) | Abschnitte «Was während einer Krise helfen kann» (`:363`), «Was Sie in der Krise sagen können» (`:388`), «Was Sie in der Krise vermeiden sollten» (`:437`), «Nach der Krise: Verarbeitung und Neubeginn» (`:529`); Formulierung «Bei Suizidgedanken direkt ansprechen» – «Ich mache mir Sorgen um dich. Denkst du gerade daran, dir das Leben zu nehmen?» (`:82-85`); Hinweis `:214-223`; Callout `:305-312`; Visualisierung `BelastungHandlungsraeume` (`:315`); Link Soforthilfe `:775`. Keine Telefonnummern. | `/unterstuetzen/krise` |
| `client/src/components/KinderEntlasten.tsx:20` | Hinweis | «Bei akuter Gefahr holen Erwachsene sofort Hilfe.» | `/unterstuetzen/krise` (`:724`), `/grenzen` (`:826`), `/unterstuetzen/uebersicht` (`:399`) |
| `client/src/components/Selbsttest.tsx:53-58`, `:205-214`, `:450-455` | Selbsttest-Krisenzweig | Antworten «Akute Krise – Suizidgedanken, Selbstverletzung oder Gefahr» / «Ich bin unsicher, ob gerade Gefahr besteht» beenden den Test sofort mit «Akute Hilfe und Notfallkontakte»: «Diese Website nimmt keine Risikoeinschätzung vor. …» → `/soforthilfe` | `/selbsttest` |
| `client/src/components/Selbsttest.tsx:232-239` | Ergebnis | «Krise einordnen und Schutz wählen» → «Krisenwege und Schutzmöglichkeiten», Link «Soforthilfe» | `/selbsttest` |
| `client/src/components/interactive/SituationsWegweiser.tsx:26-33` | Hinweis | «… finden Sie unter «Akute Hilfe und Notfallkontakte».» | `/wegweiser` |
| `client/src/components/VersorgungsZugang.tsx:50-56` | Hinweis | «Bei akuter Gefahr oder unklarer Dringlichkeit warten Sie nicht auf einen Therapieplatz: Nutzen Sie den zuständigen Notfalldienst.» | `/verstehen/diagnostik`, `/unterstuetzen/therapie` |
| `client/src/content/materialien.ts:57-68`, `:432`, `:441-446` | Material + Filter | «Notfallplan Krise – Suizidgedanken & Selbstverletzung» (Kategorie `soforthilfe`, Art «Notfallplan»); Filter «Soforthilfe»; Schnellstart «Akute Krise – Wenn rasche Orientierung und Notfallnummern nötig sind.» | `/materialien` |
| `client/src/content/handoutTextVersionContent/soforthilfe.content.ts:105`, `:111` | Krisen-Handout (Textversion) | «Diese Übersicht enthält keine Kontaktdaten. Die aktuellen Anlaufstellen finden Sie auf der zentralen Soforthilfe-Seite.» | `/materialien/text/notfallplan-krise` (Link auch aus `soforthilfe/index.html:332`) |
| `client/src/content/handoutGovernance.ts:495-497` | Regel | `allowsCrisisNumbers(id)` ist nur bei `documentType === "KRISEN-HANDOUT"` wahr (`notfallplan-krise`, `krisenkommunikation`; zurückgezogen: `notfallkarte-zuerich`, `im-krisenmodus`) | – |
| `client/src/pages/Notfallkarte.tsx` | Notfallkarte (React, persönliche Karte mit localStorage) | ungeroutet, nicht gebündelt. `/notfallkarte` → 301 `/soforthilfe`; `/notfallkarte/erstellen` → 404 (`netlify.toml:42-46`). Datenschutz-Hinweis «Frühere persönliche Notfallkarte und lokale Daten» (`client/src/pages/Datenschutz.tsx:169-185`) | keine (nur Datenschutz-Hinweis) |
| `qa/retired-handouts/notfallkarte-static-2026-10-05` | Archiv | frühere statische Notfallkarte | nicht ausgeliefert |
| Weitere `/soforthilfe`-Verweise | Links | `client/src/pages/FAQ.tsx` (6), `UnterstuetzenKrise.tsx` (3), `Begleiterkrankungen.tsx` (2), je 1 in `Diagnostik.tsx`, `Fachstelle.tsx`, `Impressum.tsx`, `Verstehen.tsx`, `UeberUns.tsx`, `Feedback.tsx`, `UnterstuetzenTherapie.tsx`, `UnterstuetzenAlltag.tsx`, `Datenschutz.tsx`, `GrenzenCheck.tsx`, `KommunikationsUebung.tsx`, `BelastungHandlungsraeume.tsx`, `KommunizierenPatternSections.tsx`, `MaterialienLibrarySection.tsx`; Suche 8 Treffer | diverse |

---

## 6. Tracking, externe Schriften, CDNs und Einbettungen

| Befund | Fundort | Bewertung |
|---|---|---|
| Umami-Analytics: lädt `${VITE_ANALYTICS_ENDPOINT}/umami` mit `data-website-id`, falls beide Variablen gesetzt sind | `client/src/bootstrap/analytics.ts:1-18`; `.env.example:9-11` (auskommentiert) | **inaktiv** – `initAnalytics()` wird nirgends aufgerufen; im Build (`dist/public/assets`) gibt es keinen Treffer «umami». Würde zudem an CSP `script-src 'self'` scheitern |
| Google Maps über Forge-Proxy: `VITE_FRONTEND_FORGE_API_KEY=`, `VITE_FRONTEND_FORGE_API_URL=https://forge.butterfly-effect.dev` | `.env.example:1-3` | **inaktiv** – kein Code verwendet `FORGE` bzw. Maps (nur `VITE_SITE_URL` und die Analytics-Variablen kommen im Code vor) |
| OAuth (`VITE_OAUTH_PORTAL_URL`, `VITE_APP_ID`) | `.env.example:5-7` (auskommentiert) | inaktiv |
| Schrift Rubik (300/400/500–900), selbst gehostet als WOFF | `client/index.html:56-61` (preload), `:63-85` (`@font-face`); `client/public/fallback.css:1-12`; Token `client/src/styles/tailwind-theme.css:136-138` | **aktiv, lokal** (`font-src 'self'`) |
| Inter (`inter-latin-400/500/600/700-normal.woff2`), Source Serif 4 (`source-serif-4-latin(-ext)-wght-normal.woff2`), Rubik-TTF | `client/public/fonts/` (in `dist/public/fonts` mitkopiert) | **inaktiv** – nirgends per `@font-face` referenziert; nur veraltete Kommentare (z. B. `client/src/index.css:142`, `:207`, `DiagnostikWegSvg.tsx:3`) |
| Google Fonts, Typekit, CDNs (unpkg, jsdelivr, cdnjs) | – | **nicht vorhanden** (grep ohne Treffer) |
| iframes, YouTube, Vimeo, Karten | – | **nicht vorhanden**; CSP `frame-src 'none'` |
| Content-Security-Policy (Netlify) | `netlify.toml:28`: `default-src 'self'; base-uri 'self'; object-src 'none'; frame-src 'none'; frame-ancestors 'none'; form-action 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'self'` | **aktiv**; `style-src 'unsafe-inline'` ist nötig (Inline-`<style>` in `client/index.html:63`, zahlreiche React-`style`-Attribute) |
| Identische CSP und Header im Code | `shared/securityHeaders.ts:1-24`; angewendet in `server/index.ts:27`, `server/material-download.ts:133-141`, `netlify/functions/material-download.ts:14` | aktiv (Funktion / lokaler Server) |
| Weitere Header | `netlify.toml:22-27`: `X-Frame-Options DENY`, `Referrer-Policy strict-origin-when-cross-origin`, `Permissions-Policy camera=(), microphone=(), geolocation=(self)`, HSTS | aktiv; `geolocation=(self)` erlaubt, obwohl im Code keine Geolokalisierung vorkommt |
| Feedback | `client/src/pages/Feedback.tsx:46`: `mailto:` an die Fachstellen-Adresse, Betreff «Feedback zur Website «Borderline – Hilfe für Angehörige»» | aktiv, **kein Formular**, keine Netlify Forms, keine Übertragung durch die Website |
| localStorage – Theme | `client/src/contexts/ThemeContext.tsx:25`, `:54` (Schlüssel `theme`) | **inaktiv** – nur bei `switchable`; `client/src/app/AppProviders.tsx:12` setzt nur `defaultTheme="light"` (Standard `switchable = false`, `ThemeContext.tsx:35`). Code liegt im Bundle, wird aber nicht ausgeführt |
| localStorage/sessionStorage – Notfallkarte | `client/src/pages/Notfallkarte.tsx:137-183`; Schlüssel `notfallkarte-data` (`client/src/domain/notfallkarte.ts:3`) und Druck-Schlüssel | **inaktiv** (Seite ungeroutet, nicht gebündelt). Datenschutz-Hinweis auf möglicherweise vorhandene Altdaten: `client/src/pages/Datenschutz.tsx:169-185`, `:327-328`; `client/public/website-data-policy.json` («status: prepared-not-approved», «transmission: verified-none») |
| Cookie `sidebar_state` | `client/src/components/ui/sidebar.tsx:85` | **inaktiv** (shadcn-Komponente ohne Verwendung) |
| Service Worker | – | **nicht vorhanden** (kein `serviceWorker`-Treffer) |
| Web-App-Manifest | `client/public/manifest.json` (`display: standalone`, `theme_color #3C64FF`); eingebunden `client/index.html:54` | aktiv (nur Manifest, kein Offline-Cache) |
| Serverseitiger externer Abruf | `server/material-download.ts:87-93` (`fetch(sourceUrl)` für Remote-PDFs) | **bedingt / derzeit inaktiv** – keine Remote-Quelle im Register (siehe 3.1) |
| Manus-CDN (`files.manuscdn.com`) | `docs/manus-cdn-audit.md` | **entfernt** (kein Treffer im Code) |
| Client-seitige Netzwerkaufrufe (`fetch`, XHR, `sendBeacon`) | – | keine im Client-Code |
| Hosting Netlify | `client/src/pages/Datenschutz.tsx:83-98` (Link `https://www.netlify.com/privacy/`) | aktiv; Datenschutz-Text: «keine zusätzlichen Tracking- oder Werbedienste» (`:79`) |
| JSON-LD (`schema.org`) | `client/src/lib/seoMetadata.ts:41`, `:93`, `:125`, `:140`; `client/public/soforthilfe/index.html:45-60` | aktiv, kein externer Abruf |
| Absolute Domain `borderline-angehoerige.netlify.app` | `og:image` (`client/index.html:29`, `:48`), `robots.txt:3`, `sitemap.xml`, `seoMetadata.ts:16` (Fallback für `VITE_SITE_URL`) | aktiv |
| Externe Links | durchgehend `target="_blank" rel="noopener noreferrer"` (z. B. `soforthilfe/index.html:313`) | aktiv, keine Einbettung |
| Skripte | `client/index.html:90` (`/route-prerender.js`, lokal), `:165` (Vite-Modul) | lokal |

