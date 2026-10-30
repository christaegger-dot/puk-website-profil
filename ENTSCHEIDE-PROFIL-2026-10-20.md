# Entscheide Profil 2026.10.20 · 30.10.2026

## Anlass

Die unabhängige Prüfung des Pakets 2026.10.19 (PR #158, Bericht im [archivierten Stand](archiv/profilstand-2026-10-30-19/PRUEFBERICHT.md)) ergab keinen Befund «kritisch», einen Befund «wichtig» und drei «optional». Zwei weitere Prüfungen desselben Pakets (PR #159 und #160) wurden nicht gemergt; ihre zusätzlichen Befunde sind in den Schliesskommentaren festgehalten und hier aufgenommen. Dazu kommen die Befunde O-3 und O-4 der nicht gemergten Prüfung 2026.10.16 (PR #151), die alle drei Prüfungen 2026.10.19 als weiterhin zutreffend bestätigt haben.

- **W-3 (#158):** Die Rücksetzregel aus 2026.10.17 erfasste nicht alle hellen Flächen des Profils: die Anwendungsmuster (`.puk-app-card` und weitere, im Band bis 1,00:1), Platzhalter und Sicherheitsleiste des Starters (auf Nachtblau 1,11:1 bzw. 1,07:1) sowie Schichtenbild und Knöpfe der Erklärmuster (auf Nachtblau 1,00:1). README, Karte «PUK-Blau» und `ENTSCHEIDE-PROFIL-2026-10-18.md` sagten mehr zu, als die Regel leistete.
- **Mutationsprobe (#158 O-7, #159 O-8, #160 O-7):** Bei 9 von 25 Einträgen der Regel scheiterte kein Test, wenn man sie entfernte.
- **Offene Erklärgrafik (#158 O-8, #159 O-7, #160 O-8):** Sie hat keine eigene Fläche; im blauen Band steht ihr Text bei 3,38:1. Vorbestehend; die Regel aus 2026.10.15 schliesst Erklärgrafiken im Band aus, Leitlinie 02 sagte das aber nicht ausdrücklich.
- **Herkunftsangabe (#151 O-3, #159 O-10):** Kommentare und `tokens.json` ordneten die Knöpfe im blauen Band O-C zu; im Entscheid 2026.10.14 sind O-C und «Knöpfe im blauen Band» getrennte Punkte.
- **Dokumenttest (#151 O-4, #159 O-9):** Der Test zur Regel W-1 prüfte nur den Punkt im Abschnitt «PUK-Blau» von Leitlinie 02, nicht den Abschnitt Nachtblau, das README und die Karte.
- **Angaben (#158 O-9, #159 O-11, #160 O-9 und O-10):** Die Berichtigung «29 → 30 Seiten» in `ENTSCHEIDE-PROFIL-2026-10-19.md` war ungenau. Statusangaben in `ENTSCHEIDE-PROFIL-2026-10-16.md` («Prüfung») und `ABSCHLUSSENTSCHEIDE.md` (Abschnitt 2026.10.18) waren nicht nachgeführt. `gate.html` des Starters lud Stylesheet und Skripte mit `?v=r4-10`, das Starter-README nannte «Build r4-11».

Christa Egger hat am **30.10.2026** den Auftrag gegeben: «W-3 und optionale Befunde als 2026.10.20 umsetzen». Websites werden dadurch nicht geändert oder veröffentlicht.

## Entscheid

| Befund | Entscheid | Umsetzung |
| --- | --- | --- |
| **W-3 · weitere helle Flächen** | Die Rücksetzregel erfasst zusätzlich `.puk-site-placeholder`, `.puk-site-safety--direct`, `.puk-app-card`, `-chip`, `-choice`, `-boundary`, `-mini`, `-detail`, `-output`, `-empty`, `-contact-target`, `.puk-vis-layers` und `.puk-vis-btn`. Spezifität bleibt 0, Werte unverändert. Leitlinie 02, README und Karte nennen die erfassten und die nicht erfassten Komponenten. | `tokens/base.css` und wortgleich `components/bundle.css`; Leitlinie 02, README, Karte «PUK-Blau»; Nachtrag in `ENTSCHEIDE-PROFIL-2026-10-18.md`. |
| **Mutationsprobe** | Ein neuer Test prüft jeden Eintrag der Regel einzeln: dieselbe Fläche im blauen Band, auf Nachtblau und auf Weiss, verglichen werden Farbe und die zurückgesetzten Variablen (bei nativen Formularfeldern nur die Variablen, weil die Browserfarbe auf Weiss `#000` ist). Der Test verlangt, dass seine Liste genau den Selektoren der Regel in beiden Stylesheets entspricht. | `tests/profilentscheid-2026-10-29.test.mjs`, Test «Jeder Eintrag der Rücksetzregel …» |
| **Offene Erklärgrafik** | Bleibt ohne eigene Fläche und nicht erfasst. Leitlinie 02, README und Karte nennen sie ausdrücklich als Grenze: Erklärgrafiken gehören nie in ein Band. | Leitlinie 02, README, Karte |
| **Herkunftsangabe** | Die Knöpfe im blauen Band werden als eigener Punkt «Knöpfe im blauen Band» des Entscheids 2026.10.14 genannt, nicht als O-C. | `Button.jsx`, `tokens.json`, Kommentare in `tokens/web.css` und `components/bundle.css`, Testkommentar |
| **Dokumenttest** | Der Dokumenttest prüft die Regel auch im Abschnitt Nachtblau von Leitlinie 02, im README und in der Karte samt Anker `#puk-blau`, dazu die erfassten und nicht erfassten Flächen. | `tests/profilentscheid-2026-10-29.test.mjs`, Test «Leitlinie 02 nennt …» |
| **Angaben** | Statusangaben nachgeführt; `gate.html` und Starter-README tragen den Starter-Build, erzeugt von `npm run generieren`. | `ENTSCHEIDE-PROFIL-2026-10-16.md`, `-18.md`, `-19.md` («Prüfung»), `ABSCHLUSSENTSCHEIDE.md`, `tools/generieren.mjs` |

**Berichtigung zu `ENTSCHEIDE-PROFIL-2026-10-19.md` (O-5):** Die Selbstprüfung 2026.10.17 hat 29 Seiten verglichen (58 Bildschirmfotos). Die Berichtigung «29 aktive Vorschauseiten ist zu lesen als 30» gibt die Zahl der Seiten in der Liste wieder, nicht die verglichene Zahl. Die Liste in `tests/browser.test.mjs` umfasst einschliesslich `Website.dc.html` 31 Seiten.

## Grenzen

- Nicht erfasst bleiben Komponenten ohne eigene helle Fläche (Reiter, Formularbeschriftungen, Menüknöpfe, offene Erklärgrafik) und eigene helle Flächen ohne `data-puk-light`. Die Regel aus 2026.10.15 schliesst sie im Band aus.
- Geprüft im Headless-Chromium und in Chromium, beide Themes; keine anderen Browser und keine realen Geräte.
- Keine klinische, juristische, institutionelle oder von der PUK-Kommunikation erteilte Freigabe.

## Prüfung

Die technische Selbstprüfung steht im [Prüfbericht](PRUEFBERICHT.md). Diese Sitzung hat das Paket 2026.10.14 unabhängig geprüft und 2026.10.15, 2026.10.16 und 2026.10.20 gebaut. Die unabhängige Prüfung des Pakets `puk-website-profil-2026.10.20.zip` muss darum eine andere Sitzung übernehmen; sie ist offen. Kein Merge und keine Veröffentlichung ohne gesonderten Auftrag.
