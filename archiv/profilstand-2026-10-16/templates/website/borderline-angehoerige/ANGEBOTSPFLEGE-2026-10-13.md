# Pflege von Beratungs-, Austausch- und Behandlungsangeboten

Stand: 13.10.2026  
Status: umgesetzt und technisch geprüft

## Anlass und Aussagegrenze

Externe Angebote, Aufnahmebedingungen und Webadressen können sich ändern. Ein funktionierender Link belegt weder freie Plätze noch die Eignung eines Angebots. Das sichtbare Prüfdatum sagt deshalb nur, wann die redaktionell genannten Angaben und das offizielle Ziel zuletzt kontrolliert wurden.

## Geltungsbereich

Der verbindliche Pflegebestand umfasst zehn dynamische Einträge:

- fünf Behandlungsangebote beziehungsweise Suchwege auf `behandlung.html`;
- Pro Mente Sana, Stand by You Schweiz, VASK Zürich, die PUK-Elterngruppe und Selbsthilfe Schweiz auf `unterstuetzung.html`.

Bibliografische Quellen werden getrennt als Quellenbestand gepflegt. Allgemeine Behörden- und Fachlinks werden bei der inhaltlichen Seitenprüfung kontrolliert.

## Pflegeprozess

1. Die Fachstelle prüft die zehn Einträge mindestens halbjährlich und zusätzlich bei einem bekannten Angebotswechsel oder einer Rückmeldung zu einem defekten Link.
2. Kontrolliert werden Bezeichnung, Zielgruppe, Region, Angebotsart, Zugang, Kostenhinweis, Beschreibung und offizielles Linkziel, soweit diese Angaben für den Eintrag verwendet werden.
3. Aufnahmebedingungen, Wartezeiten und Kosten werden nicht aus Vermutungen ergänzt. Wo sie nicht verbindlich veröffentlicht sind, bleibt der Hinweis zur direkten Klärung bestehen.
4. Nach abgeschlossener Prüfung werden `data-reviewed` und das sichtbare `time[datetime]` gemeinsam aktualisiert.
5. Ein eindeutig aufgehobenes oder mit HTTP 404/410 nicht mehr vorhandenes Angebot wird vor der nächsten Veröffentlichung entfernt oder durch ein fachlich geprüftes Ziel ersetzt.
6. HTTP 403, 429, Zeitüberschreitungen und Bot-Sperren gelten nicht automatisch als defekter Link. Diese Ziele werden in einem normalen Browser manuell geprüft.

Nächste reguläre Prüfung: spätestens 14. April 2027.

## Automatisierte Akzeptanzkriterien

Aufruf im Website-Ordner:

```text
node tools/gate.mjs --production
node abgleich/angebotsaktualitaet.mjs
node abgleich/angebotsaktualitaet.mjs --online
```

Das Produktions-Gate liest den verbindlichen Bestand aus `site.config.json` und blockiert die Veröffentlichung, wenn ein Pflichtangebot oder eine Pflichtangabe fehlt, eine Kennung doppelt ist oder das Prüfdatum ungültig, zukünftig beziehungsweise älter als 183 Tage ist. Der separate Abgleich liefert ausführlichere Diagnosen und kann die Linkziele zusätzlich online prüfen.

Für jeden Eintrag wird geprüft:

- eindeutige, stabile Kennung;
- ISO-Prüfdatum und dasselbe sichtbar ausgeschriebene Datum;
- höchstens 183 Tage seit der letzten Prüfung;
- genau ein offizielles HTTPS-Ziel;
- bei Behandlungsangeboten die Felder Zielgruppe, Region, Art sowie Zugang und Kosten;
- mit `--online`: HTTP-Status; 404 und 410 blockieren, technische Sperren werden als manuell zu prüfende Warnung ausgewiesen.

Der Stichtag kann für einen Fälligkeitstest gesetzt werden, zum Beispiel:

```text
node abgleich/angebotsaktualitaet.mjs --as-of=2027-04-15
```

Dieser Gegenversuch muss wegen der dann überschrittenen Frist mit Fehlerstatus enden.

## Überprüfter Ausgangsstand

Am 13.10.2026 antworteten zehn der elf geprüften praktisch relevanten externen Wege mit HTTP 200. Selbsthilfe Schweiz beantwortete die automatisierte HEAD-Abfrage mit HTTP 403; das ist eine technische Zugriffssperre und kein Nachweis eines defekten Angebots. Dieser Link muss bei der Pflege manuell im Browser kontrolliert werden.
