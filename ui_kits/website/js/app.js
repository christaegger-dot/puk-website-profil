/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
const APP_SAFETY = 'aus der Quellseite übernommen: Der Navigationspunkt «Akute Hilfe» führt zur akuten Stufe des Kontaktwegweisers. Für ein reales Produkt die Variante nach der Hauptaufgabe der Seite festlegen und freigeben.';
const LF_SAFETY = 'Variante «persistent-subdued». Nicht akute Langform: stabiler Hinweis in der Fusszeile mit direkt beschriftetem Link, sekundär, aber nicht versteckt.';
const ROUTES = {
  start: {
    nav: 'website',
    View: () => React.createElement(K.HomeView, null),
    Footer: K.WebsiteFooter,
    title: 'Website-Musterseite',
    safety: 'keiner automatisch. Generische Informationsseite – die Hauptnavigation enthält keinen Notfalllink. Ob eine konkrete Seite «direct» oder «persistent-subdued» braucht, entscheidet ihre Hauptaufgabe (profile.json › safetyAccess) mit fachlicher und redaktioneller Freigabe.'
  },
  situationsnavigator: {
    nav: 'apps',
    View: () => React.createElement(K.SituationView, null),
    Footer: K.SituationFooter,
    title: 'Situationsnavigator – Anwendungsmuster',
    safety: APP_SAFETY
  },
  kontaktwegweiser: {
    nav: 'apps',
    View: p => React.createElement(K.ContactView, p),
    Footer: K.ContactFooter,
    title: 'Kontaktwegweiser – Anwendungsmuster',
    safety: 'Variante «direct». Hauptaufgabe ist, einen angemessenen, auch akuten Kontaktweg zu finden; die Stufe «Jetzt sofort handeln» ist sichtbar und direkt über #kontaktwegweiser/sofort erreichbar. Diese Ansicht demonstriert die akute Variante.'
  },
  gespraechshilfe: {
    nav: 'apps',
    View: () => React.createElement(K.ConversationView, null),
    Footer: K.ConversationFooter,
    title: 'Gesprächshilfe – Anwendungsmuster',
    safety: APP_SAFETY
  },
  angebotsnavigator: {
    nav: 'apps',
    View: () => React.createElement(K.ServiceView, null),
    Footer: K.ServiceFooter,
    title: 'Angebotsnavigator – Anwendungsmuster',
    safety: APP_SAFETY
  },
  grundlagenkapitel: {
    nav: 'longform',
    longform: true,
    View: () => React.createElement(K.FoundationView, null),
    Footer: K.FoundationFooter,
    title: 'Grundlagenkapitel – Langform-Referenz',
    safety: LF_SAFETY
  },
  handlungsuebersicht: {
    nav: 'longform',
    longform: true,
    View: () => React.createElement(K.OverviewView, null),
    Footer: K.OverviewFooter,
    title: 'Handlungsübersicht – Langform-Referenz',
    safety: LF_SAFETY
  },
  'transfer-erholung': {
    nav: 'longform',
    longform: true,
    View: () => React.createElement(K.TransferView, null),
    Footer: K.TransferFooter,
    title: 'Erholung im Alltag – Transferprüfung',
    safety: LF_SAFETY
  },
  'beispiel-visualisierung': {
    nav: 'kit',
    View: () => React.createElement(K.VisualView, null),
    Footer: K.VisualFooter,
    title: 'Eigene Grafik zur Orientierung – UI-Kit-Beispiel',
    safety: 'keiner. Kit-Beispiel, keine Website-Seite.'
  },
  visualisierungsmuster: {
    nav: 'kit',
    longform: true,
    View: p => React.createElement(K.PatternsView, p),
    Footer: K.PatternsFooter,
    title: 'Visualisierungsmuster – Langform-Referenz',
    safety: 'keiner in der Kit-Ansicht. Die Muster sind für nicht akute Langform gedacht; eine reale Langformseite verwendet «persistent-subdued».'
  }
};
function parse() {
  const [r, anchor] = decodeURIComponent(location.hash.replace(/^#/, '')).split('/');
  return {
    route: ROUTES[r] ? r : 'start',
    anchor: anchor || null
  };
}
function App() {
  const [s, setS] = React.useState(() => ({
    ...parse(),
    nonce: 0
  }));
  const prevRoute = React.useRef(null);
  React.useEffect(() => {
    const on = () => setS(p => ({
      ...parse(),
      nonce: p.nonce + 1
    }));
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  React.useEffect(() => {
    document.title = ROUTES[s.route].title + ' | PUK Zürich';
    const el = s.anchor && document.getElementById(s.anchor);
    if (el) {
      const go = () => window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 16
      });
      go();
      const token = window.__pukScrollToken = {};
      let n = 0;
      const settle = () => { if (window.__pukScrollToken !== token) return; const cur = document.getElementById(s.anchor); if (!cur) return; if (Math.abs(cur.getBoundingClientRect().top - 16) > 2) window.scrollTo({ top: cur.getBoundingClientRect().top + window.scrollY - 16, behavior: 'instant' }); if (++n < 12) setTimeout(settle, 80); };
      requestAnimationFrame(settle);
      if (el.tabIndex === -1 || el.tagName === 'BUTTON') el.focus({
        preventScroll: true
      });
    } else if (prevRoute.current !== s.route) { window.__pukScrollToken = null; window.scrollTo(0, 0); }
    prevRoute.current = s.route;
  }, [s.route, s.anchor, s.nonce]);
  const cfg = ROUTES[s.route];
  const Footer = cfg.Footer;
  return React.createElement(React.Fragment, null, React.createElement(K.KitBar, {
    route: s.route,
    safety: cfg.safety
  }), React.createElement("div", {
    className: 'puk-web-page' + (cfg.longform ? ' puk-longform' : ''),
    "data-web-profile": "website",
    "data-screen-label": s.route
  }, React.createElement("a", {
    className: "puk-web-skip",
    href: '#' + s.route + '/main-content'
  }, "Zum Hauptinhalt"), React.createElement(K.SiteHeader, {
    nav: cfg.nav,
    route: s.route
  }), React.createElement("main", {
    id: "main-content",
    className: "puk-web-main",
    tabIndex: -1
  }, React.createElement(cfg.View, {
    key: s.route,
    anchor: s.anchor,
    nonce: s.nonce
  })), React.createElement(Footer, null)));
}
function mount() {
  if (!window.PUKWeb && window.PUKWebResolve) window.PUKWebResolve();
  ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
}
mount();
})();
