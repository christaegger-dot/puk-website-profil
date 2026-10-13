# Reale Tests · Borderline-Website · Auflage AR3-3

**Stand 13.10.2026.** Vorbereitet von der Leitsitzung der Veröffentlichung, im Auftrag der Fachstelle.

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

**Bestanden**, wenn keine Pflichtkombination bei ihren Aufgaben «nicht bestanden» hat:
- NV und VO-mac: A1 bis A11, A14, A16, A17
- HK: A13
- T: A12, A15, A18

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
