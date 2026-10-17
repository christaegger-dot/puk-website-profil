# Vollständiges Profilbeispiel

Vier fachneutrale Seiten «Information klar gestalten», Stand 17.10.2026: Übersicht, Prüfschritte, Impressum und Datenschutz sowie 404-Seite. Keine Platzhalter oder Behandlungsempfehlungen, kein automatischer Krisenverweis und keine behauptete institutionelle Freigabe.

Quelle sind die eigenen Gestaltungsregeln dieses Repositorys. Der [Prüfbericht](PRUEFBERICHT.md) dokumentiert den Materialstatus. Die Seiten werden aus `content/` und `site.config.json` erzeugt.

Im Repository-Stamm:

```sh
npm run build:example
node templates/website/psychoeducation-site-starter/tools/export.mjs out-profilbeispiel --site templates/website/profilbeispiel --production
```

Nach dem Start des lokalen Servers steht das Muster unter `http://127.0.0.1:8000/templates/website/profilbeispiel/`. Der Export ist eigenständig und wird im Rahmen dieses Projektabschlusses nicht veröffentlicht. Eine reale Website-Adresse, klinische Freigaben und weitere Inhalte gehören nicht zu diesem fachneutralen Beispiel.
