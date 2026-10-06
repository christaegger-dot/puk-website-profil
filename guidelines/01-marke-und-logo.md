# Marke und Logo

Grundregeln der Markenanwendung und des Logos im Webprofil. Logodateien: Asset-Gruppe «Logos».

_Herkunft: konsolidiert aus den Einzelleitlinien des PUK Zürich Design Systems 1.10.1; die Einzeldateien sind nicht Teil dieses Profils._

## Markenanwendung

Grundregeln der Markenanwendung: Schwarz auf Weiss ist Standard, Weiss auf Blau oder Schwarz nur ausnahmsweise.

- **Einsatz:** Erster Blick bei jeder neuen Komposition.
- **Pflicht:** Ein blaues Feld pro Komposition; flache Flächen ohne Verläufe, Muster oder Texturen.
- **Vermeiden:** Blau, Rot und Gelb zusammen; inverse Flächen als Normalfall.
- **Quelle:** CD-Manual vom 1. Februar 2024.

## Logo positiv

Das Logo «Perspektiven», statisch und positiv: Schwarz auf Weiss als Standardanwendung.

- **Einsatz:** Websites überall dort, wo nicht das animierte Logo gilt, sowie als statische Fassung bei `prefers-reduced-motion`.
- **Pflicht:** `PUK_Logo_statisch_positiv_de.svg`; in der Regel oben links; Wortmarke nie ohne Symbol.
- **Vermeiden:** Nachgezeichnete oder rekonstruierte Logos.

## Logo animiert

Das animierte Logo ist auf Websites die Normalform; bei reduzierter Bewegung gilt das statische.

- **Einsatz:** Websites und Browser-Anwendungen.
- **Pflicht:** Beide Varianten anlegen und mit `data-motion` auszeichnen, damit `prefers-reduced-motion` auf das statische Logo umschaltet.
- **Vermeiden:** Eigene Animationen des Logos, Lottie ohne Projektentscheid (sonst das GIF verwenden).
- **Quelle:** Offizielles Logopaket.
- **Web-Fassungen (06.10.2026):** `PUK_Logo_dynamisch_positiv_de_web.gif` und `…_negativ_de_web.gif` (Asset-Gruppe «Logos»), 440 px breit für die Anzeige bis 220 px auf hochauflösenden Bildschirmen, je 0,48 MB statt 4,8 MB. Bildfolge, Zeitablauf und Wiederholung sind unverändert; nur die Auflösung ist reduziert. Die Kanten sind gegen den vorgesehenen Grund geglättet: positiv gegen Weiss, negativ gegen PUK-Blau. Auf Schwarz und im Theme «Hoher Kontrast» die Originaldatei oder das statische Logo verwenden. Die 540-p-Originale bleiben die Quelle.
- **Laufzeit (geprüft 06.10.2026):** Die Originaldateien zeigen einen Zyklus von 10,2 s (Kreis → Quadrat → Kreis) und wiederholen ihn endlos. Die Angabe «1,2 s» (Token `dur-logo`) entspricht nicht der Datei. Eine endlose Animation über 5 s braucht nach WCAG 2.2.2 eine Möglichkeit zum Anhalten – offener Entscheid (README, «Offene Punkte»).

## Logo negativ

Negativlogo, Weiss auf Blau oder Schwarz.

- **Einsatz:** Nur ausnahmsweise, auf einer vollflächigen blauen oder schwarzen Fläche.
- **Pflicht:** Datei `…_negativ_…` aus `assets/logo/` verwenden.
- **Vermeiden:** Negativlogo auf Fotos, auf Hellblau oder als Standardanwendung.

## Logo-Symbol

Das Logo-Symbol allein.

- **Einsatz:** Nur dort allein, wo die PUK klar als Absenderin erkennbar ist. Zulässige Beispiele: Favicon und Social-Media-Icon.
- **Pflicht:** Originaldatei `PUK_Logo-Symbol_…` aus `assets/logo/`.
- **Vermeiden:** Symbol als Ersatz für das vollständige Logo im Seitenkopf oder in Absenderpositionen.

## Sperrzone

Sperrzone um das Logo im Webprofil.

- **Einsatz:** Seitenkopf, Fusszeile und jede weitere Logoplatzierung auf Websites.
- **Pflicht:** Rundherum mindestens `--logo-clearspace` (14 % der Logobreite) frei halten. Logobreite im Kopf `--web-logo-width` = `clamp(160px,18vw,220px)`; Seitenverhältnis der Markendatei `--logo-aspect-brand`.
- **Vermeiden:** Das Logo verzerren, beschneiden oder in die Sperrzone Inhalte setzen.

## Unzulässige Anwendungen

Sperrzone x, zulässige freigestellte Symbolvarianten und die sechs unzulässigen Anwendungen des Logos.

- **Einsatz:** Kontrolle vor jeder Logoplatzierung.
- **Pflicht:** Nur Originaldateien aus `assets/logo/`; Sperrzone rundum frei.
- **Vermeiden:** Verzerren, umfärben, Wortmarke ohne Symbol, Logo auf unruhigem Grund.
- **Status:** Regeln aus dem Manual; die Do/Don't-Darstellung selbst ist ein eigenes, abgeleitetes Beispiel, keine Reproduktion der Manual-Tafel.

## Englische Logos

Geltungsgrenze: Englische Logos sind nicht Teil dieses Profils.

- **Status:** Die offiziellen englischen Positiv- und Negativlogos fehlen in der Kit-Ausgabe. Das Profil ist deshalb deutschsprachig, bis sie aus der kanonischen Quelle (PUK Zürich Design System 1.10.1) ergänzt wurden.
- **Pflicht bis dahin:** Keine englischsprachigen Seiten mit diesem Profil veröffentlichen; kein englisches Logo nachbauen, übersetzen oder aus dem deutschen ableiten.
- **Danach:** Organisationseinheiten nach der offiziellen Übersetzungsliste benennen.

## Bildwelt und Fotos

Bildsprache, Illustrationen, Bildrichtung und Foto-Regel stehen gesammelt im Abschnitt «Visuelle Wissensvermittlung» (Unterabschnitte «Bildsprache» und «Fotos»). Live: Karte «Bildwelt».
