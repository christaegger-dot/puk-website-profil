# Logo animiert

Animiertes Logo, Web-Fassungen in Anzeigegrösse; statisch bei prefers-reduced-motion.

Foundation-Karte aus dem Website-Profil (keine Komponente im Bundle).

Das animierte Logo ist auf Websites die Normalform; bei reduzierter Bewegung gilt das statische.

- **Einsatz:** Websites und Browser-Anwendungen.
- **Pflicht:** Beide Varianten anlegen und mit `data-motion` auszeichnen, damit `prefers-reduced-motion` auf das statische Logo umschaltet.
- **Vermeiden:** Eigene Animationen des Logos, Lottie ohne Projektentscheid (sonst das GIF verwenden).
- **Quelle:** Offizielles Logopaket.

- **Web-Fassungen (06.10.2026):** `PUK_Logo_dynamisch_positiv_de_web.gif` und `…_negativ_de_web.gif` (Asset-Gruppe «Logos»), 440 px breit für die Anzeige bis 220 px auf hochauflösenden Bildschirmen, je 0,48 MB statt 4,8 MB. Bildfolge, Zeitablauf und Wiederholung sind unverändert; nur die Auflösung ist reduziert. Die Kanten sind gegen den vorgesehenen Grund geglättet: positiv gegen Weiss, negativ gegen PUK-Blau. Auf Schwarz und im Theme «Hoher Kontrast» die Originaldatei oder das statische Logo verwenden. Die 540-p-Originale bleiben die Quelle.
- **Laufzeit (geprüft 06.10.2026):** Die Originaldateien zeigen einen Zyklus von 10,2 s (Kreis → Quadrat → Kreis) und wiederholen ihn endlos. Die Angabe «1,2 s» (Token `dur-logo`) entspricht nicht der Datei. Eine endlose Animation über 5 s braucht nach WCAG 2.2.2 eine Möglichkeit zum Anhalten – offener Entscheid (README, «Offene Punkte»).
