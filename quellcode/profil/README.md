# Verbindliche Profilquellen

- `index.html`: Vorlage der lokalen Profilübersicht. `{{VERSION}}` wird aus package.json eingesetzt.
- `muster.json`: 13 Leserfragen mit passender Darstellung, Hinweis und lokalem Beispielziel. Daraus entstehen `MUSTER-WAEHLEN.md` und `musterauswahl.html`.
- `musterauswahl.html`: HTML-Hülle für diesen Katalog.

Nach Änderungen im Repository-Stamm `npm run generieren` ausführen. `npm run check:generated` erkennt veraltete Ableitungen ohne Schreibzugriff; dieselbe Prüfung läuft in GitHub vor dem Build.

Die Komponententypen haben ihre eigene Quelle unter `quellcode/komponenten/src/components/`. Die Profilversion und Build-Stände werden ausschliesslich in `package.json` gepflegt. Der Generator aktualisiert auch die entsprechenden Standangaben in den markierten Dokumentabschnitten. Historische Berichte und neue Website-Projekte werden nicht automatisch umgeschrieben.
