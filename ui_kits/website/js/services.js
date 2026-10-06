/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
const CATS = [['all', 'Alle Kategorien'], ['beratung', 'Beratung'], ['familie', 'Familie'], ['alltag', 'Alltag und Arbeit'], ['krise', 'Krise']];
const SERVICES = [{
  cat: 'beratung',
  kw: 'beratung angehörige kostenlos direkt anmeldung',
  title: 'Musterangebot Angehörigenberatung',
  text: 'Direkter Zugang für Angehörige. Beispieltext ohne reale Verfügbarkeit.',
  meta: ['Kosten: Musterangabe kostenlos', 'Zugang: direkte Anfrage', 'Inhaltsverantwortung: Musterredaktion', 'Musterprüfdatum: 26.09.2026'],
  tone: 'accent'
}, {
  cat: 'familie',
  kw: 'familie eltern jugendliche gruppe abend',
  title: 'Musterangebot Familiengruppe',
  text: 'Gruppenangebot mit beispielhafter Abenddurchführung. Keine reale Anmeldung.',
  meta: ['Kosten: Musterangabe offen', 'Zugang: Vorgespräch', 'Inhaltsverantwortung: Musterredaktion', 'Musterprüfdatum: 26.09.2026'],
  tone: 'accent'
}, {
  cat: 'alltag',
  kw: 'alltag arbeit ausbildung struktur formulare coaching',
  title: 'Musterangebot Strukturberatung',
  text: 'Orientierung zu Tagesstruktur, Formularen und nächsten administrativen Schritten.',
  meta: ['Kosten: Musterangabe offen', 'Zugang: Zuständigkeit prüfen', 'Inhaltsverantwortung: Musterredaktion', 'Musterprüfdatum: 26.09.2026'],
  tone: 'accent'
}, {
  cat: 'krise',
  kw: 'krise akut notfall rund um die uhr',
  title: 'Muster für einen fachlich freigegebenen Krisenweg',
  text: 'Der produktive Eintrag muss einen bestätigten Kontakt und eine überprüfte Erreichbarkeit nennen.',
  meta: ['Kontakt: nicht freigegeben', 'Erreichbarkeit: nicht freigegeben', 'Inhaltsverantwortung: Musterredaktion', 'Musterprüfdatum: 26.09.2026'],
  tone: 'danger'
}, {
  cat: 'beratung',
  kw: 'beratung beispiel abgelaufen archiv',
  title: 'Abgelaufenes Musterangebot',
  text: 'Dieser Eintrag demonstriert die verpflichtende Kennzeichnung. Produktiv würde er aktualisiert oder entfernt.',
  meta: ['Verfügbarkeit: nicht bestätigt', 'Inhaltsverantwortung: Musterredaktion', 'Musterprüfdatum: 26.09.2025'],
  expired: 'Beispielstatus: abgelaufen'
}];
const normalize = v => v.toLocaleLowerCase('de-CH').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const catLabel = k => K.setPressedLabel(CATS, k);
K.ServiceView = function ServiceView() {
  const [q, setQ] = React.useState('');
  const [cat, setCat] = React.useState('all');
  const tokens = normalize(q.trim()).split(/\s+/).filter(Boolean);
  const visible = s => {
    const hay = normalize([s.kw, s.expired || '', catLabel(s.cat), s.title, s.text, ...s.meta].join(' '));
    return (cat === 'all' || s.cat === cat) && tokens.every(t => hay.includes(t));
  };
  const count = SERVICES.filter(visible).length;
  return React.createElement(React.Fragment, null, React.createElement(K.AppHero, {
    eyebrow: "Anwendungsmuster \xB7 Angebote",
    title: "Ein passendes Angebot finden",
    lead: "Suchen Sie nach Thema, Zugang oder Kostenstatus und grenzen Sie die Ergebnisse nach Kategorie ein.",
    boundary: "Alle Eintr\xE4ge sind synthetische Musterangebote. Reale Eintr\xE4ge ben\xF6tigen Zust\xE4ndigkeit, Zugangsregel, Kostenstatus, Inhaltsverantwortung und Pr\xFCfdatum."
  }), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "search-title"
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "search-title"
  }, "Angebote durchsuchen"), React.createElement("div", {
    className: "puk-app-field"
  }, React.createElement("label", {
    htmlFor: "service-search"
  }, "Suchbegriff"), React.createElement("input", {
    className: "puk-app-search",
    id: "service-search",
    type: "search",
    autoComplete: "off",
    placeholder: "Zum Beispiel Beratung, Familie oder kostenlos",
    value: q,
    onChange: e => setQ(e.target.value)
  })), React.createElement("div", {
    className: "puk-app-filter",
    "aria-label": "Angebotskategorie"
  }, CATS.map(([id, l]) => React.createElement("button", {
    key: id,
    className: "puk-app-chip",
    type: "button",
    "aria-pressed": String(cat === id),
    onClick: () => setCat(id)
  }, l))), React.createElement("div", {
    className: "puk-app-toolbar"
  }, React.createElement("p", {
    className: "puk-app-status",
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, count === 1 ? '1 passendes Musterangebot' : count + ' passende Musterangebote')), React.createElement("ul", {
    className: "puk-app-grid",
    role: "list",
    "aria-label": "Musterangebote"
  }, SERVICES.map(s => React.createElement("li", {
    key: s.title,
    hidden: !visible(s)
  }, React.createElement("article", {
    className: 'puk-app-card' + (s.tone ? ' puk-app-card--' + s.tone : '')
  }, s.expired && React.createElement("span", {
    className: "puk-app-expired"
  }, s.expired), React.createElement("span", {
    className: "puk-app-kicker"
  }, catLabel(s.cat)), React.createElement("h3", null, s.title), React.createElement("p", null, s.text), React.createElement("p", {
    className: "puk-app-meta"
  }, s.meta.map(m => React.createElement("span", {
    key: m
  }, m))))))), React.createElement("div", {
    className: "puk-app-empty",
    hidden: count !== 0
  }, React.createElement("strong", null, "Kein passendes Musterangebot gefunden."), React.createElement("p", null, "Versuchen Sie einen allgemeineren Begriff oder setzen Sie die Kategorie auf \xABAlle Kategorien\xBB."))));
};
K.ServiceFooter = () => React.createElement(K.AppFooter, null, "Die Suche kann nur so zuverl\xE4ssig sein wie die gepflegten Angebotsdaten. Abgelaufene Eintr\xE4ge ben\xF6tigen eine sichtbare Warnung oder m\xFCssen entfernt werden.");
})();
