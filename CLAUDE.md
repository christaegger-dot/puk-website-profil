# Arbeitsregeln · PUK Website-Profil

<!-- profil:stand -->
**Profil 2026.10.18 · Stand 30.10.2026.** Version und Build-Stände ausschliesslich in `package.json` pflegen, danach `npm run generieren`.
<!-- /profil:stand -->

Verbindliche Quelle ist dieses Repository. Änderungen an Leitlinien, Tokens, Komponenten und Starter werden hier umgesetzt und geprüft. Private Design-Artefakte sind historische Quellen; es besteht kein Synchronisierungsauftrag.

1. Zuerst `START-HIER.md`, `README.md`, `ABSCHLUSSENTSCHEIDE.md` und den aktuellen `PRUEFBERICHT.md` lesen.
2. `archiv/` dokumentiert abgeschlossene Historie. Alte Aufgaben, Prüfaufforderungen und Website-Kopien dort sind keine aktuellen Arbeitsaufträge; nicht bauen oder veröffentlichen.
3. Seiteninhalte und Seitenvertrag bearbeiten, danach bauen. Generierte Seiten nicht von Hand ändern. Der Minimalstarter bleibt eine leere, absichtlich nicht produktionsfähige Vorlage; der ausführliche Starter dient als Musterwebsite; das eigene Profilbeispiel ist das vollständige fachneutrale Testmaterial.
4. Telefonnummern und `tel:`-Links sind erlaubt. Notfall- und Krisenkontakte nie automatisch ergänzen oder anhand einer Diagnose erzwingen. Christa entscheidet je Thema und Dokument. Der Standard hat keinen Krisenblock und keinen pauschalen Abgrenzungssatz im Footer.
5. Die technische Kontrolle ist keine klinische, rechtliche oder institutionelle Freigabe. Keine erfundenen Kontakte, Fachquellen, Freigaben oder Nutzerstudien. Klinische Websites brauchen ihre eigene belegte Inhaltsprüfung nach `guidelines/`; deren Prüfstufen werden nicht durch diesen Profilabschluss erledigt.
6. Lokale Schriften, Skripte und Original-Logos verwenden. Keine Tracking-Dienste oder externen Laufzeitressourcen; keine Inline-Skripte für veröffentlichte Seiten. Barrierefreiheit mit Tastatur, schmaler Ansicht und reduzierter Bewegung berücksichtigen; nur tatsächlich durchgeführte Tests als bestanden nennen.
7. Nach Änderungen an Werkzeugen die Build-Kennung erhöhen. Komponenten reproduzierbar aus den Quellen bauen; `npm ci`, `npm run build`, `npm test`. Das versionierte Paket mit `npm run package` erzeugen und mit `npm run check:package` abgleichen.
8. Neue Exporte in einen neuen oder bereits gekennzeichneten Exportordner schreiben. Ein fehlgeschlagener Export erhält die letzte erfolgreiche Ausgabe. Export und Veröffentlichung sind getrennte Vorgänge.
9. Ergebnisse und bewusst ausgeschlossene Punkte im Prüfbericht dokumentieren. Ein Merge oder direkter Commit im autorisierten Umfang benötigt einen konkreten geprüften Stand; keine offenen Projektaufgaben als erledigte Prüfungen ausgeben.
10. Vor neuen Websites oder Änderungen am Seitenrahmen `guidelines/08-einstieg-und-seitenrahmen.md` lesen. Leseskala statt 114-px-Displaytitel, kompakter Kopf, Mobilmenü ab fünf Hauptpunkten und erster hilfreicher Einstieg vor nachrangigen Hinweisen. Startseite mit echtem Titel visuell prüfen; ein grüner Strukturtest ersetzt diese Kontrolle nicht.

Der dokumentierte Profilstand ist abgeschlossen. Neue Materialien erhalten ihre eigene Verantwortung, Quellen und Freigaben. Die öffentlich zugängliche Repository-Einstellung bleibt bestehen.
