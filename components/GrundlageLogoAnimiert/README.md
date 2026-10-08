# Logo animiert

Animiertes Logo: auf Websites nicht verwendet; im Seitenkopf steht das statische Logo.

Foundation-Karte aus dem Website-Profil (keine Komponente im Bundle).

Das animierte Logo wird auf Websites und in Browser-Anwendungen nicht verwendet (Profilentscheid 08.10.2026). Im Seitenkopf steht das statische Logo.

- **Grund:** Die Originaldateien zeigen einen Zyklus von 10,2 s (Kreis → Quadrat → Kreis) und wiederholen ihn endlos. WCAG 2.2.2 verlangt für Bewegung, die von selbst startet und länger als 5 s dauert, eine Möglichkeit zum Anhalten; das Interaktionskonzept schliesst Bewegung ohne Auslösung aus.
- **Vermeiden:** Animiertes Logo im Seitenkopf, eigene Animationen des Logos, Lottie.
- **Quelle:** Offizielles Logopaket. Die 540-p-Originale und die Web-Fassungen (`…_web.gif`, 06.10.2026) bleiben in der Asset-Gruppe «Logos», gehören aber nicht ins Projektpaket. Das Token `dur-logo` (1,2 s) ist ohne Verwendung.
