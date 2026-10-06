/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
const LEVELS = [{
  id: 'orientation',
  label: 'Beratung und Orientierung',
  sub: 'Eine Frage klären oder Entlastung organisieren.'
}, {
  id: 'urgent',
  label: 'Heute oder zeitnah',
  sub: 'Fachliche Unterstützung soll rasch beigezogen werden.'
}, {
  id: 'emergency',
  label: 'Jetzt sofort handeln',
  sub: 'Es besteht unmittelbare Gefahr oder Sie sind unsicher, ob sofortige Hilfe nötig ist.',
  anchor: 'sofort'
}];
const PATHS = {
  orientation: {
    title: 'Beratung und Orientierung vereinbaren',
    text: 'Nutzen Sie den regulären, redaktionell bestätigten Beratungsweg. Nennen Sie knapp, worum es geht und wie Sie erreichbar sind.',
    action: 'Beratungsweg anzeigen',
    targetTitle: 'Muster für einen regulären Beratungsweg',
    targetText: 'Hier stehen im Produkt die bestätigte Stelle, der Kontaktkanal, die Erreichbarkeit und der erwartbare nächste Schritt.'
  },
  urgent: {
    title: 'Heute oder zeitnah fachliche Unterstützung suchen',
    text: 'Diese Stufe braucht eine fachlich freigegebene Beschreibung und genau einen vorrangigen Kontaktweg mit bestätigter Erreichbarkeit.',
    action: 'Zeitnahen Kontaktweg anzeigen',
    targetTitle: 'Muster für einen zeitnahen Kontaktweg',
    targetText: 'Hier stehen im Produkt eine heute erreichbare Stelle, ein eindeutiger Kanal und eine überprüfte Reaktionszeit.'
  },
  emergency: {
    title: 'Jetzt sofort handeln',
    text: 'Hier darf nur ein geprüfter Notfallkontakt stehen. Die Information bleibt zusätzlich als eigene, direkt erreichbare Seite verfügbar.',
    action: 'Fachlich freigegebenen Notfallweg anzeigen',
    targetTitle: 'Muster für den fachlich freigegebenen Notfallweg',
    targetText: 'Hier stehen im Produkt die bestätigte Notfallnummer, die Erreichbarkeit und eine klare Alternative bei unmittelbarer Gefahr.'
  }
};
K.ContactView = function ContactView({
  anchor,
  nonce
}) {
  const [lv, setLv] = React.useState(anchor === 'sofort' ? 'emergency' : 'orientation');
  React.useEffect(() => {
    if (anchor === 'sofort') setLv('emergency');
  }, [anchor, nonce]);
  const c = PATHS[lv];
  return React.createElement(React.Fragment, null, React.createElement(K.AppHero, {
    eyebrow: "Anwendungsmuster \xB7 Kontakt",
    title: "Welcher Kontaktweg ist jetzt angemessen?",
    lead: "Drei klar getrennte Stufen f\xFChren zu einer Handlung mit Zeitbezug. Das Muster ist kein Symptomchecker und entscheidet nicht automatisch \xFCber die Dringlichkeit.",
    boundary: "Alle Kontaktangaben sind in dieser Referenz absichtlich Platzhalter. Vor Publikation sind Quelle, Erreichbarkeit, Eigent\xFCmerschaft und Pr\xFCfdatum zwingend."
  }), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "level-title"
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "level-title"
  }, "W\xE4hlen Sie den passenden Ausgangspunkt"), React.createElement("div", {
    className: "puk-app-choice-grid",
    "aria-label": "Dringlichkeitsstufe"
  }, LEVELS.map(x => React.createElement("button", {
    key: x.id,
    id: x.anchor,
    className: "puk-app-choice",
    type: "button",
    "data-level": x.id,
    "aria-pressed": String(lv === x.id),
    onClick: () => setLv(x.id)
  }, React.createElement("strong", null, x.label), React.createElement("span", null, x.sub)))), React.createElement("section", {
    className: "puk-app-detail",
    "data-level": lv,
    "aria-live": "polite",
    "aria-atomic": "true"
  }, React.createElement("span", {
    className: "puk-app-kicker"
  }, "Empfohlener Weg"), React.createElement("h2", null, c.title), React.createElement("p", null, c.text), React.createElement("a", {
    className: "puk-app-action",
    href: "#kontaktwegweiser/kontakt-details"
  }, c.action), React.createElement("p", {
    className: "puk-app-meta"
  }, React.createElement("span", null, "Inhaltsverantwortung: Musterredaktion"), React.createElement("span", null, "Musterpr\xFCfdatum: 26.09.2026"))), React.createElement("section", {
    className: "puk-app-contact-target",
    id: "kontakt-details",
    tabIndex: -1,
    "data-level": lv,
    "aria-labelledby": "contact-target-title"
  }, React.createElement("span", {
    className: "puk-app-kicker"
  }, "Ziel der Hauptaktion"), React.createElement("h2", {
    id: "contact-target-title"
  }, c.targetTitle), React.createElement("p", null, c.targetText), React.createElement("p", {
    className: "puk-app-meta"
  }, React.createElement("span", null, "Inhaltsverantwortung: Musterredaktion"), React.createElement("span", null, "Musterpr\xFCfdatum: 26.09.2026"), React.createElement("span", null, "Referenzdaten \u2013 nicht publizieren")))), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "principles-title"
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "principles-title"
  }, "Redaktioneller Vertrag"), React.createElement("ul", {
    className: "puk-app-grid",
    role: "list"
  }, React.createElement("li", null, React.createElement("article", {
    className: "puk-app-card"
  }, React.createElement("h3", null, "Eine Hauptaktion"), React.createElement("p", null, "Jede Stufe priorisiert genau einen Weg. Weitere M\xF6glichkeiten stehen nachgeordnet und lenken nicht vom ersten Schritt ab."))), React.createElement("li", null, React.createElement("article", {
    className: "puk-app-card"
  }, React.createElement("h3", null, "Nicht nur Farbe"), React.createElement("p", null, "Stufe, Zeitbezug und Handlung stehen im Text. Farbe unterst\xFCtzt die Orientierung, tr\xE4gt sie aber nicht allein."))), React.createElement("li", null, React.createElement("article", {
    className: "puk-app-card"
  }, React.createElement("h3", null, "Direkt erreichbar"), React.createElement("p", null, "Die akute Information ist eine eigene Adresse und bleibt auch ohne Dialog, Animation oder JavaScript erreichbar."))))));
};
K.ContactFooter = () => React.createElement(K.AppFooter, null, "Nur fachlich best\xE4tigte Kriterien und redaktionell best\xE4tigte Kontaktwege d\xFCrfen produktiv erscheinen.");
})();
