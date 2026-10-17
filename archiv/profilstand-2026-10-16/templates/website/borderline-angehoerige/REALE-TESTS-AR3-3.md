# Reale Tests · Borderline-Website · Auflage AR3-3

**Stand 13.10.2026.** Vorbereitet von der Leitsitzung der Veröffentlichung, im Auftrag der Fachstelle.

**Statusentscheid 13.10.2026:** Die Fachstelle führt die vorgeschlagene Stichprobe nicht durch. Dieses Dokument bleibt als Beschreibung der nicht ausgeführten Prüfung erhalten. Das Zero-Participant-Audit ersetzt diese realen Tests nicht; eine WCAG-, ISO- oder Wirkungs-Gesamtkonformität wird daraus nicht abgeleitet.

- **Frist:** 13.01.2027 (R3 Freigabe-Audit, Auflage AR3-3; `ENTSCHEIDE-VEROEFFENTLICHUNG.md`, V-3).
- **Grundlage:** `ENTSCHEIDE-SCHLUSSPRUEFUNG.md`, Abschnitt 5.4, und die Aufgaben aus `PRUEFBERICHT.md` (Bedienung und Barrierefreiheit, Prüfung 2, Vorschlag für reale Tests).
- **Adresse:** https://borderline-angehoerige.netlify.app (veröffentlicht am 13.10.2026).

## Wer und wann

- **Wer:** eine Person, nicht Claude (Entscheide 5.4). Person und Termin bestimmt die Fachstelle.
- **Was zurückkommt:** je Lauf das ausgefüllte Protokoll unten. Eine Prüfsitzung, die nicht gebaut hat, trägt es in `PRUEFBERICHT.md` ein. Über Korrekturen entscheidet die Fachstelle.

## Kombinationen

| Kürzel | Kombination | Pflicht |
| --- | --- | --- |
| NV | NVDA (aktuell) + Firefox, Windows, Laptop mit Hardwaretastatur | ja |
| VO-mac | VoiceOver + Safari, macOS | ja |
| HK | Windows-Kontrastmodus (Kontrastdesign dunkel und hell) + Edge, ohne Screenreader | ja |
| T | Telefon mit Touch, ohne Screenreader, Browser-Schriftgrösse auf Maximum | ja |
| VO-iOS | VoiceOver + Safari, iPhone | empfohlen |
| TB | TalkBack + Chrome, Android | empfohlen |

## Aufgaben

| Nr. | Wer | Seite | Aufgabe | Erfolgskriterium |
| --- | --- | --- | --- | --- |
| A1 | NV, VO-mac | `index` | Seite laden, Titel und Sprache anhören; Tab bis «Zum Hauptinhalt», aktivieren | Titel «Startseite \| Borderline – Orientierung für Angehörige» deutsch angesagt; nach dem Sprunglink beginnt das Lesen im Hauptinhalt |
| A2 | NV, VO-mac | `index` | Orientierungspunkte und Überschriften auflisten (VO-Rotor / NVDA D, H); einen Einstieg wählen | genau ein Hauptbereich, «Hauptnavigation», Fussbereich; ein h1, h2 ohne Sprünge; Linktexte allein verständlich |
| A3 | NV, VO-mac | `verstehen` | Navigation «Weg durch die Seite» → «Anspannung» aktivieren; Abbildung 2 lesen | Sprungziel angesagt; Figur mit Titel «Abbildung 2 · …» und Kurzbeschreibung angesagt; Kurve selbst nicht vorgelesen; Stationen 1–4 als Liste verständlich |
| A4 | NV, VO-mac | `verstehen` | Vertiefung «Grenzen des Bildes» öffnen und schliessen (Enter/Leertaste, Doppeltippen) | Zustand «reduziert / erweitert» angesagt; Inhalt danach lesbar |
| A5 | NV, VO-mac | `beziehungen` | Abbildung 1 (Bedeutungsschleife) lesen, einmal breit, einmal bei 320 px / Telefon | Leserichtung angesagt; fünf Stationen in Reihenfolge; Rückkehr zu Station 1 verständlich |
| A6 | NV, VO-mac | `kommunizieren` | Akkordeon «Die sechs Stufen im Detail»: Stufe 3 öffnen, mit Pfeil ab zu Stufe 4 (nur Tastatur) | Schaltfläche mit Zustand angesagt; Pfeiltasten bewegen den Fokus; Inhalt der offenen Stufe erreichbar |
| A7 | NV, VO-mac | `krise` | Abschnitt «Suizidgedanken» lesen bis zum Verweis auf die zuständigen Stellen | Verweis direkt nach der Handlungsanleitung vorgelesen; keine Telefonnummer, kein Notfallblock |
| A8 | NV, VO-mac | `quellen` | per Linkliste (NVDA K / Rotor) einen PubMed-Link finden; englischen Titel anhören | Linkname = Titel der Studie; englische Aussprache (`lang="en"`) |
| A9 | NV, VO-mac | `fragen` | Überschriftenebenen durchgehen; Akkordeon «Meldepflichten …» öffnen | Ebenen ohne Sprung (h4 unter h3); Zustand angesagt |
| A10 | NV, VO-mac | `impressum-datenschutz`, `404` | Fusszeile lesen; auf `404` «Zur Startseite» aktivieren | Zuständigkeit und Absenderin vorgelesen; Link führt zur Startseite |
| A11 | NV, VO-mac | alle Seiten, Hardwaretastatur ohne Screenreader | ganze Seite mit Tab und Umschalt+Tab durchgehen | Fokus immer sichtbar und nie verdeckt; Reihenfolge wie Lesereihenfolge; keine Falle |
| A12 | T | `index`, `verstehen`, `kommunizieren` | Navigation, Einstiege, Vertiefung und Akkordeon antippen; Browser-Schriftgrösse auf Maximum | jedes Ziel mit einem Tippen getroffen; kein waagrechtes Scrollen; nichts abgeschnitten |
| A13 | HK | `verstehen`, `beziehungen`, `genesung`, `grenzen` | Figuren, Grenzkästen, Fokus und Akkordeon-Chevron ansehen; Tab durch eine Seite | Linien und Beschriftungen der Figuren sichtbar; Fokus als Umrandung sichtbar; Logo im dunklen Kontrastdesign hell |
| A14 | NV, VO-mac | eine Seite mit Figur, Browser-Zoom 200 % und Schriftgrösse 200 % | A1, A4 und A6 wiederholen | Fokus bleibt sichtbar und im Fenster; Ansagen unverändert |
| A15 | T, NV | Fusszeile, alle Seiten | «Impressum», «Datenschutz» und den E-Mail-Link der Absenderin antippen bzw. mit Tab erreichen | mit einem Tippen ohne Fehltipp treffbar; mit Tab erreichbar |
| A16 | NV, VO-mac | `quellen` | Sprung über «Weg durch die Seite» | danach beginnt das Lesen an der richtigen Stelle |
| A17 | NV (Firefox), VO-mac (Safari) | `beziehungen` | Fenster etwa 1280 px breit, Browser-Schriftgrösse 150 % und 200 % (Einstellung «Schriftgrösse», nicht Zoom); Abbildung 1 ansehen. Dazu bei 100 % | bei 150 und 200 % gestufte Liste mit «Nach Station 5: zurück zu Station 1.»; bei 100 % der Kreis (NSK-F-1) |
| A18 | T, NV (Firefox), VO-mac (Safari) | `beziehungen`, `verstehen` | Telefon oder Fenster 360 px, Schriftgrösse 200 %; Titel der Abbildungen und lange Wörter in den Figuren ansehen | lange Wörter werden mit Trennstrich getrennt, nicht mitten im Wort ohne Trennstrich (NSK-2) |
| A19 | NV, VO-mac, T | `begriffe` | Den Begriff «Dialektisch-Behaviorale Therapie (DBT)» über einen direkten Link mit `#b-dbt` öffnen; danach zur Behandlung wechseln | der verlinkte Begriff ist beim Laden geöffnet und fokussierbar; Erklärung und Weiter-Link sind ohne Umweg erreichbar |
| A20 | NV, VO-mac, T | `quellen` | Über «Weg durch die Seite» zu «Forschung» springen und die Gruppe öffnen und schliessen | Abschnittsüberschrift und Schalter sind eindeutig; Zustand wird angesagt; die lange Liste ist anfangs geschlossen |
| A21 | NV, VO-mac, T | `unterstuetzung`, `buecher` | Im Abschnitt «Bücher gezielt auswählen» zur Buchseite wechseln und dort die Auswahl öffnen | Übergang ist als Buchauswahl benannt; Zielseite hat genau ein h1; Auswahl lässt sich öffnen und schliessen |

**Bestanden**, wenn keine Pflichtkombination bei ihren Aufgaben «nicht bestanden» hat:
- NV und VO-mac: A1 bis A11, A14, A16, A17
- HK: A13
- T: A12, A15, A18

Zusätzlich nach der IA-Überarbeitung vom 13.10.2026:

- NV und VO-mac: A19 bis A21
- T: A19 bis A21

## Realistische Nutzerreisen

Diese Reisen prüfen nicht nur einzelne Bedienelemente, sondern Orientierung, Begriffslogik und den Übergang zwischen Seiten. Die testende Person beginnt jeweils auf der Startseite und erhält nur das Anliegen, nicht den vorgegebenen Linkpfad.

| Kürzel | Anliegen | Erfolgskriterium |
| --- | --- | --- |
| U1 | «Ich weiss nicht, was ich in einem schwierigen Gespräch sagen soll.» | findet ohne Suche die Gesprächsbeispiele und kann von dort zu Grenzen wechseln; höchstens drei Seitenwechsel |
| U2 | «Ich bin erschöpft und möchte einschätzen, ob ich Unterstützung brauche.» | findet Warnsignale und eine konkrete Beratungsoption; höchstens drei Seitenwechsel |
| U3 | «Ich suche Austausch oder ein Buch, das zu meiner Rolle passt.» | unterscheidet Beratung/Austausch von Buchauswahl und findet beides; keine Sackgasse |
| U4 | «Was bedeutet DBT?» | findet den Begriff, versteht die Kurzerklärung und erreicht die ausführliche Behandlungsseite; höchstens drei Seitenwechsel |
| U5 | «Ich möchte die Diagnose besser verstehen und wissen, wo Krisen erklärt werden.» | findet Diagnoseeinordnung und Krisenseite, ohne Krisenberatung bei der Fachstelle zu erwarten |
| U6 | «Welche Behandlung gibt es, und wo kann ich mich als Angehörige Person beraten lassen?» | findet Therapieformen und danach die Fachstelle; Zuständigkeit und Grenze zur Krisenintervention werden verstanden |

Pro Reise werden notiert: gewählter Pfad, Zahl der Seitenwechsel, Stellen des Zögerns, missverstandene Begriffe, Sackgassen und ob das Anliegen in eigenen Worten beantwortet werden kann. Bestanden ist eine Reise, wenn das Erfolgskriterium ohne Hilfe erreicht wird. Wiederkehrendes Zögern an derselben Stelle bei mindestens zwei Personen ist ein IA-Befund, auch wenn das Ziel schliesslich erreicht wird.

Jede Abweichung ist ein Befund mit Seite, Aufgabe und Kombination.

## Protokoll je Lauf

Bitte je Lauf ausfüllen und an die Fachstelle zurückgeben (Tabelle oder die JSON-Vorlage unten).

| Feld | Eintrag |
| --- | --- |
| Datum | |
| Person (Rolle) | |
| Kombination (Kürzel) | |
| Gerät | |
| System und Version | |
| Browser und Version | |
| Screenreader und Version | |
| Sprache | Deutsch |

| Aufgabe | bestanden / nicht bestanden / nicht geprüft | Notiz (bei «nicht bestanden»: was genau, wo) |
| --- | --- | --- |
| A1 | | |
| … | | |

```json
{
  "status": "executed",
  "site": "https://borderline-angehoerige.netlify.app",
  "runs": [
    {
      "combination": "NV",
      "assistiveTechnology": "NVDA <Version>",
      "browser": "Firefox <Version>",
      "platform": "Windows <Version>, Laptop mit Hardwaretastatur",
      "testedAt": "YYYY-MM-DD",
      "tester": "<Person, Rolle>",
      "language": "de",
      "tasks": { "A1": "bestanden", "A2": "bestanden" },
      "notes": {}
    }
  ],
  "issues": [
    { "task": "A…", "combination": "…", "page": "…", "description": "…" }
  ]
}
```
