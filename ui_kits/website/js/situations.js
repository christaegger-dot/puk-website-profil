/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
const FILTERS = [['all', 'Alle Themen'], ['kontakt', 'Gespräch ohne Druck'], ['struktur', 'Struktur im Alltag'], ['entlastung', 'Eigene Entlastung'], ['sicherheit', 'Sicherheit klären']];
const IMPULSES = [{
  topics: ['kontakt', 'struktur'],
  kicker: 'Nächster Schritt',
  title: 'Mit einer kleinen Frage beginnen',
  text: 'Fragen Sie nicht nach einer vollständigen Lösung, sondern danach, welcher Teil heute am schwierigsten ist.',
  pick: 'kontakt'
}, {
  topics: ['struktur'],
  kicker: 'Alltag',
  title: 'Eine Aufgabe verkleinern',
  text: 'Trennen Sie Anfangen, Ordnen und Dranbleiben. Vereinbaren Sie nur einen überprüfbaren nächsten Schritt.',
  pick: 'struktur'
}, {
  topics: ['entlastung', 'kontakt'],
  kicker: 'Angehörige',
  title: 'Unterstützung und Grenze verbinden',
  text: 'Sagen Sie gleichzeitig, wobei Sie helfen können und was Sie nicht allein übernehmen können.',
  pick: 'entlastung'
}, {
  topics: ['sicherheit'],
  kicker: 'Sicherheit',
  title: 'Dringlichkeit getrennt klären',
  text: 'Bei möglicher akuter Gefahr führt der Wegweiser aus diesem Muster direkt zum fachlich freigegebenen Notfallweg.',
  danger: true
}];
const PHRASES = [{
  topics: ['kontakt', 'entlastung'],
  kicker: 'Kontakt',
  title: 'Wahl lassen',
  text: '«Möchten Sie, dass ich zuhöre, mitdenke oder bei einem konkreten Schritt helfe?»'
}, {
  topics: ['struktur'],
  kicker: 'Struktur',
  title: 'Konkret fragen',
  text: '«Was ist heute schwieriger: anfangen, ordnen oder dranbleiben?»'
}, {
  topics: ['sicherheit'],
  kicker: 'Sicherheit',
  title: 'Wahrnehmung anerkennen',
  text: '«Ich nehme wahr, dass Sie sich gerade sehr unsicher fühlen. Was würde jetzt etwas mehr Sicherheit geben?»'
}];
K.SituationView = function SituationView() {
  const [f, setF] = React.useState('all');
  const controls = React.useRef(null);
  const match = c => f === 'all' || c.topics.includes(f);
  const count = IMPULSES.filter(match).length;
  const label = f === 'all' ? 'Alle Themen' : K.setPressedLabel(FILTERS, f);
  const pick = id => {
    setF(id);
    const el = controls.current;
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY
    });
  };
  return React.createElement(React.Fragment, null, React.createElement(K.AppHero, {
    eyebrow: "Anwendungsmuster \xB7 Orientierung",
    title: "Was brauchen Sie jetzt?",
    lead: "W\xE4hlen Sie eine Alltagssituation. Der Navigator verbindet passende Impulse und Formulierungshilfen, ohne eine Diagnose oder Behandlungsempfehlung abzuleiten.",
    boundary: "Referenz mit neutralen Beispielinhalten. Fachinhalte und Sicherheitswege m\xFCssen vor einer Ver\xF6ffentlichung redaktionell best\xE4tigt werden."
  }), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "filter-title",
    ref: controls
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "filter-title"
  }, "Worum geht es gerade?"), React.createElement("div", {
    className: "puk-app-filter",
    "aria-label": "Situation filtern"
  }, FILTERS.map(([id, l]) => React.createElement("button", {
    key: id,
    className: "puk-app-chip",
    type: "button",
    "aria-pressed": String(f === id),
    onClick: () => setF(id)
  }, l))), React.createElement("div", {
    className: "puk-app-toolbar"
  }, React.createElement("p", {
    className: "puk-app-status"
  }, React.createElement("span", null, label), " \xB7 ", React.createElement("span", {
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, count, " passende Impulse")), React.createElement("button", {
    className: "puk-app-reset",
    type: "button",
    hidden: f === 'all',
    onClick: () => {
      setF('all');
      const first = controls.current && controls.current.querySelector('.puk-app-chip');
      if (first) first.focus();
    }
  }, "Filter zur\xFCcksetzen")), React.createElement("ul", {
    className: "puk-app-grid",
    role: "list",
    "aria-label": "Handlungsimpulse"
  }, IMPULSES.map(c => React.createElement("li", {
    key: c.title,
    hidden: !match(c)
  }, React.createElement("article", {
    className: 'puk-app-card ' + (c.danger ? 'puk-app-card--danger' : 'puk-app-card--accent')
  }, React.createElement("span", {
    className: "puk-app-kicker"
  }, c.kicker), React.createElement("h3", null, c.title), React.createElement("p", null, c.text), c.danger ? React.createElement("a", {
    className: "puk-app-action",
    href: "#kontaktwegweiser/sofort"
  }, "Kontaktwege pr\xFCfen") : React.createElement("button", {
    className: "puk-app-mini",
    type: "button",
    onClick: () => pick(c.pick)
  }, "# ", K.setPressedLabel(FILTERS, c.pick))))))), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "phrases-title"
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "phrases-title"
  }, "Passende Gespr\xE4chseinstiege"), React.createElement("ul", {
    className: "puk-app-grid",
    role: "list"
  }, PHRASES.map(c => React.createElement("li", {
    key: c.title,
    hidden: !match(c)
  }, React.createElement("article", {
    className: "puk-app-card"
  }, React.createElement("span", {
    className: "puk-app-kicker"
  }, c.kicker), React.createElement("h3", null, c.title), React.createElement("p", null, c.text)))))));
};
K.SituationFooter = () => React.createElement(K.AppFooter, null, "Dieses Muster strukturiert Inhalte. Es beurteilt keine Symptome und ersetzt keine fachliche Beratung.");
})();
