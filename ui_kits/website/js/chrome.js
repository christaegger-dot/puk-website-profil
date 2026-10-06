/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit = window.PUKKit || {};
const LOGO = '../../assets/logo/PUK_Logo_statisch_positiv_de.svg';
K.VIEWS = [{
  group: 'Website',
  items: [['start', 'Startseite']]
}, {
  group: 'Anwendungsmuster',
  items: [['situationsnavigator', 'Situationsnavigator'], ['kontaktwegweiser', 'Kontaktwegweiser'], ['gespraechshilfe', 'Gesprächshilfe'], ['angebotsnavigator', 'Angebotsnavigator']]
}, {
  group: 'Langform',
  items: [['grundlagenkapitel', 'Grundlagenkapitel'], ['handlungsuebersicht', 'Handlungsübersicht'], ['transfer-erholung', 'Transferfall']]
}, {
  group: 'Kit-Beispiele',
  items: [['beispiel-visualisierung', 'Eigene Visualisierung'], ['visualisierungsmuster', 'Visualisierungsmuster']]
}, {
  group: 'Starter r4 (eigene Seiten)',
  items: [['s-index', 'Übersicht', '../../templates/website/psychoeducation-site-starter/index.html'], ['s-bz', 'Beziehungen verstehen', '../../templates/website/psychoeducation-site-starter/beziehungen-verstehen.html'], ['s-bh', 'Behandlung verstehen', '../../templates/website/psychoeducation-site-starter/behandlung-verstehen.html'], ['s-us', 'Unterstützung finden', '../../templates/website/psychoeducation-site-starter/unterstuetzung-finden.html'], ['s-gate', 'Gate-Bericht', '../../templates/website/psychoeducation-site-starter/gate.html']]
}];
const NAVS = {
  website: {
    label: 'Hauptnavigation',
    logoHref: '#start',
    logoLabel: 'Startseite der Psychiatrischen Universitätsklinik Zürich',
    items: [['start', 'Behandlung'], ['start/forschung', 'Forschung'], ['start/lehre', 'Lehre'], ['start/ueber-uns', 'Über uns']],
    current: {
      start: 'start'
    }
  },
  apps: {
    label: 'Anwendungsmuster',
    logoHref: '#situationsnavigator',
    logoLabel: 'Startseite der Anwendungsmuster',
    items: [['situationsnavigator', 'Situationen'], ['kontaktwegweiser', 'Kontaktwege'], ['gespraechshilfe', 'Gesprächshilfe'], ['angebotsnavigator', 'Angebote'], ['kontaktwegweiser/sofort', 'Akute Hilfe', true]]
  },
  longform: {
    label: 'Langform-Referenzen',
    logoHref: '#grundlagenkapitel',
    logoLabel: 'Start der Langform-Referenzen',
    items: [['grundlagenkapitel', 'Grundlagen'], ['handlungsuebersicht', 'Handlungsübersicht'], ['transfer-erholung', 'Transferfall']]
  },
  kit: {
    label: 'UI-Kit-Beispiele',
    logoHref: '#start',
    logoLabel: 'Startseite der Website-Referenz',
    items: [['beispiel-visualisierung', 'Eigene Visualisierung'], ['visualisierungsmuster', 'Visualisierungsmuster']]
  }
};
K.KitBar = function KitBar({
  route,
  safety
}) {
  return React.createElement("nav", {
    className: "kit-bar",
    "aria-label": "UI-Kit: Referenzansichten"
  }, React.createElement("p", {
    className: "kit-bar__label"
  }, "UI-Kit \xB7 PUK Website Kit 1.10.1-r4 \xB7 abgeleitet (Quelle: PUK Zürich Design System 1.10.1) \xB7 Referenzansichten \u2013 nicht Teil der Website"), React.createElement("div", {
    className: "kit-bar__groups"
  }, K.VIEWS.map(g => React.createElement("div", {
    className: "kit-bar__group",
    key: g.group
  }, React.createElement("span", {
    className: "kit-bar__group-name"
  }, g.group), React.createElement("ul", {
    role: "list"
  }, g.items.map(([id, l, ext]) => React.createElement("li", {
    key: id
  }, React.createElement("a", {
    href: ext || '#' + id,
    "aria-current": route === id ? 'page' : undefined
  }, l))))))), safety ? React.createElement("p", {
    className: "kit-bar__note"
  }, React.createElement("strong", null, "Sicherheitszugang dieser Ansicht:"), " ", safety) : null);
};
K.SiteHeader = function SiteHeader({
  nav,
  route
}) {
  const n = NAVS[nav];
  return React.createElement("header", {
    className: "puk-web-header"
  }, React.createElement("div", {
    className: "puk-web-container puk-web-header__inner"
  }, React.createElement("a", {
    className: "puk-web-logo",
    href: n.logoHref,
    "aria-label": n.logoLabel
  }, React.createElement("img", {
    src: LOGO,
    alt: "Psychiatrische Universit\xE4tsklinik Z\xFCrich"
  })), React.createElement("nav", {
    className: "puk-web-nav",
    "aria-label": n.label
  }, React.createElement("ul", {
    className: "puk-web-nav__list",
    role: "list"
  }, n.items.map(([href, l, emergency]) => React.createElement("li", {
    key: href + l
  }, React.createElement("a", {
    className: 'puk-web-nav__link' + (emergency ? ' puk-web-nav__link--emergency' : ''),
    href: '#' + href,
    "aria-current": href === route ? 'page' : undefined
  }, l)))))));
};
K.WebsiteFooter = function WebsiteFooter() {
  return React.createElement("footer", {
    className: "puk-web-footer"
  }, React.createElement("div", {
    className: "puk-web-container puk-web-footer__grid"
  }, React.createElement("div", null, React.createElement("img", {
    src: LOGO,
    alt: "Psychiatrische Universit\xE4tsklinik Z\xFCrich",
    style: {
      width: 180,
      display: 'block'
    }
  })), React.createElement("div", null, React.createElement("p", {
    className: "puk-web-footer__heading"
  }, "Kontakt"), React.createElement("p", {
    className: "puk-web-footer__copy"
  }, "Lenggstrasse 31", React.createElement("br", null), "Postfach", React.createElement("br", null), "8032 Z\xFCrich")), React.createElement("div", null, React.createElement("p", {
    className: "puk-web-footer__heading"
  }, "Erreichbarkeit"), React.createElement("p", {
    className: "puk-web-footer__copy"
  }, "Telefonnummer und E-Mail-Adresse vor Ver\xF6ffentlichung redaktionell best\xE4tigen.")), React.createElement("div", null, React.createElement("p", {
    className: "puk-web-footer__heading"
  }, "Rechtliches"), React.createElement("p", {
    className: "puk-web-footer__copy"
  }, React.createElement("a", {
    href: "#start/impressum"
  }, "Impressum"), React.createElement("br", null), React.createElement("a", {
    href: "#start/datenschutz"
  }, "Datenschutz"), React.createElement("br", null), React.createElement("a", {
    href: "#start/barrierefreiheit"
  }, "Barrierefreiheit")))));
};
K.AppFooter = function AppFooter({
  children
}) {
  return React.createElement("footer", {
    className: "puk-web-footer"
  }, React.createElement("div", {
    className: "puk-web-container"
  }, React.createElement("p", {
    className: "puk-app-footer-note"
  }, React.createElement("strong", null, "Freigabegrenze:"), " ", children)));
};
K.LongformFooter = function LongformFooter({
  heading,
  children
}) {
  return React.createElement("footer", {
    className: "puk-web-footer",
    "data-safety-variant": "persistent-subdued"
  }, React.createElement("div", {
    className: "puk-web-container"
  }, React.createElement("p", {
    className: "puk-web-footer__heading"
  }, heading), React.createElement("p", {
    className: "puk-web-footer__copy"
  }, children)));
};
K.AppHero = function AppHero({
  eyebrow,
  title,
  lead,
  boundary
}) {
  return React.createElement("section", {
    className: "puk-web-container puk-app-hero"
  }, React.createElement("p", {
    className: "puk-web-eyebrow"
  }, eyebrow), React.createElement("h1", {
    className: "puk-web-h1"
  }, title), React.createElement("p", {
    className: "puk-web-lead"
  }, lead), React.createElement("p", {
    className: "puk-app-boundary"
  }, boundary));
};
K.LongformHero = function LongformHero({
  eyebrow,
  title,
  intro,
  children
}) {
  return React.createElement("section", {
    className: "puk-web-container puk-longform__hero"
  }, React.createElement("p", {
    className: "puk-web-eyebrow"
  }, eyebrow), React.createElement("h1", {
    className: "puk-web-h1"
  }, title), React.createElement("p", {
    className: "puk-longform__intro"
  }, intro), React.createElement("p", {
    className: "puk-longform__boundary"
  }, children));
};
K.Roadmap = function Roadmap({
  route,
  label,
  navLabel,
  items
}) {
  return React.createElement("nav", {
    className: "puk-longform__roadmap",
    "aria-label": navLabel
  }, React.createElement("div", {
    className: "puk-web-container"
  }, React.createElement("p", {
    className: "puk-longform__roadmap-label"
  }, label), React.createElement("ol", null, items.map(([id, l]) => React.createElement("li", {
    key: id
  }, React.createElement("a", {
    href: '#' + route + '/' + id
  }, l))))));
};
K.LfSection = function LfSection({
  id,
  kicker,
  title,
  children
}) {
  return React.createElement("section", {
    className: "puk-web-container puk-longform__section",
    id: id,
    "aria-labelledby": id + '-title'
  }, React.createElement("div", {
    className: "puk-longform__section-grid"
  }, React.createElement("div", {
    className: "puk-longform__section-heading"
  }, React.createElement("p", {
    className: "puk-longform__kicker"
  }, kicker), React.createElement("h2", {
    className: "puk-web-h2",
    id: id + '-title'
  }, title)), React.createElement("div", {
    className: "puk-longform__copy"
  }, children)));
};
K.setPressedLabel = (list, id) => list.find(x => x[0] === id)[1];
})();
