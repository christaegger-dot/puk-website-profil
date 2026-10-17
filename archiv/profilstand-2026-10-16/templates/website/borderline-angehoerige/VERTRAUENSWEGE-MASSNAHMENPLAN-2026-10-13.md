# Massnahmenpaket: globale Vertrauens- und Feedbackwege

Stand: 13.10.2026

## Anlass und Abgrenzung

Die Inhalte «Über diese Website», «Barrierefreiheit» und «Rückmeldung» waren auf `ueber.html` vorhanden, aber nicht von jeder Seite unmittelbar auffindbar. Global sichtbar waren bisher nur Impressum und Datenschutz. Das erschwerte insbesondere das Auffinden bekannter Einschränkungen, der redaktionellen Grundsätze und des Rückmeldewegs.

Dieses Paket ändert keine fachlichen Aussagen und erhebt keine neue Konformitätsbehauptung. Der Profil- und Typografieblock AR3-5 bleibt gemäss bestehendem Entscheid bis zur Publikation der Depressions-Website beziehungsweise bis spätestens 16.11.2026 zurückgestellt.

## Umsetzung

- Der Footer führt auf allen 22 veröffentlichten Seiten drei klar bezeichnete Links: «Über diese Website», «Barrierefreiheit» und «Rückmeldung».
- Die Links stehen in einer eigenen semantischen Navigation mit der zugänglichen Bezeichnung «Informationen zur Website».
- Die Linkziele bleiben kanonisch auf `ueber.html`; Inhalte und Kontaktangaben werden im Footer nicht dupliziert.
- `site.config.json` ist die zentrale Quelle für Reihenfolge, Beschriftung und Ziel.
- Das Qualitäts-Gate blockiert fehlende Konfiguration, unvollständige Einträge, externe oder doppelte Ziele, fehlende Seiten oder Anker sowie Abweichungen im Footer einzelner Seiten.
- Zwei neue Gegenproben im Gate-Selbsttest belegen die Erkennung eines fehlenden Footers und eines fehlenden Sprungziels.
- `abgleich/footer-vertrauenswege.mjs` prüft ergänzend alle veröffentlichten Seiten und Zielanker.

## Akzeptanzkriterien

1. Jede veröffentlichte Seite, einschliesslich `404.html`, enthält genau eine Footer-Navigation mit den drei konfigurierten Links in identischer Reihenfolge und Beschriftung.
2. `ueber.html`, `ueber.html#barrierefreiheit` und `ueber.html#rueckmeldung` sind vorhanden und erreichbar.
3. Die Links haben bei 320, 360 und 1280 CSS-Pixeln keinen horizontalen Überlauf, bleiben tastaturbedienbar und besitzen sichtbare Fokusmarkierungen.
4. Die geprüften Ansichten weisen keine automatisiert erkannten Axe-Verletzungen oder Laufzeitfehler auf.
5. Build und Produktions-Gate melden null blockierende Befunde; der Gate-Selbsttest besteht mit 71/71 Fällen.
6. Die neue Abgleichprüfung meldet 22 Seiten, drei Ziele und null Fehler.

## Einordnung der Evidenz

**Überprüfbar:** Konfiguration, Vorhandensein und Reihenfolge der Links, Existenz der Zielanker, Tastaturbedienung, Fokusdarstellung, responsive Darstellung und automatisierte Prüfresultate.

**Fachliche Einschätzung:** Die globale Platzierung senkt Suchaufwand und stärkt Transparenz und Rückmeldefähigkeit im Sinne von Selbstbeschreibungsfähigkeit, Erwartungskonformität und zugänglicher Nutzerführung.

**Nicht belegt:** Tatsächliche Auffindbarkeit, Verständlichkeit oder emotionale Wirkung bei Angehörigen. Der Verzicht auf Tests mit realen Zielpersonen bleibt als Einschränkung dokumentiert.
