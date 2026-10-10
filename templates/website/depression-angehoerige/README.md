# Depression: Informationen für Angehörige

Website der Fachstelle Angehörigenarbeit, Psychiatrische Universitätsklinik Zürich, gebaut mit dem Psychoedukations-Starter des PUK Website-Profils 2026.10 (Build r4-7).

- **Zielgruppe:** Angehörige und nahe Bezugspersonen von Erwachsenen mit Depression; Anrede «Sie».
- **Aufbau:** acht Seiten, vom Verstehen über die eigene Situation zum Handeln, mit Lesepfaden nach Rolle und nach Frage auf der Startseite.
- **Stand:** Musterentwurf vom 10.10.2026. Alle Texte und alle elf Darstellungen sind noch nicht fachlich freigegeben. Prüfstufen und Selbstprüfung: `PRUEFBERICHT.md`.
- **Inhaltsverantwortung:** Ch. Egger, Fachstelle Angehörigenarbeit PUK.

## Bearbeiten

Nur `site.config.json` (Seitenvertrag, Visualisierungsplan) und `content/<id>.html` (Inhalt jeder Seite) ändern, nie die gebauten Seiten. Regeln: `CLAUDE.md` im Repository-Stamm und `guidelines/`.

```sh
node tools/build.mjs                  # bauen + Entwurfsgate
node tools/gate.mjs --production      # Produktionsgate
node tools/gate.mjs --selftest        # Selbsttest des Gates
node tools/export.mjs <ziel> --production   # eigenständige Website für Netlify
```

Ansehen: im Repository-Stamm `python3 -m http.server 8000`, dann `http://localhost:8000/templates/website/depression-angehoerige/`.

Die technische Beschreibung des Starters (Seitenvertrag, Gate, Export) steht in `templates/website/psychoeducation-site-starter/README.md`.
