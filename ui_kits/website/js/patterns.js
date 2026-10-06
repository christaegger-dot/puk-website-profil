/* UI-Kit (Claude): zeigt templates/website/longform/visualisierungsmuster.html unverändert als Kit-Ansicht.
   Eine Quelle für Kit und Kopiervorlage; Sprunglinks werden auf das Kit-Routing umgeschrieben. */
(function () {
const K = window.PUKKit;
const h = React.createElement;
const SRC = '../../templates/website/longform/visualisierungsmuster.html';
const ROUTE = 'visualisierungsmuster';
K.PatternsView = function PatternsView({ anchor, nonce }) {
  const [html, setHtml] = React.useState(null);
  React.useEffect(() => {
    fetch(SRC + '?v=' + (document.querySelector('meta[name=puk-kit-build]') || {}).content, { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); }).then(t => {
      const m = new DOMParser().parseFromString(t, 'text/html').querySelector('main');
      m.querySelectorAll('a[href^="#"]').forEach(a => a.setAttribute('href', '#' + ROUTE + '/' + a.getAttribute('href').slice(1)));
      setHtml(m.innerHTML);
    }).catch(() => setHtml('<section class="puk-web-container puk-longform__section"><p>Die Musterseite konnte nicht geladen werden. Direkt öffnen: templates/website/longform/visualisierungsmuster.html</p></section>'));
  }, []);
  React.useEffect(() => {
    if (!html || !anchor) return;
    const el = document.getElementById(anchor);
    if (!el) return;
    const token = window.__pukScrollToken = {};
    let n = 0;
    const settle = () => {
      if (window.__pukScrollToken !== token) return;
      const cur = document.getElementById(anchor);
      if (!cur) return;
      if (Math.abs(cur.getBoundingClientRect().top - 16) > 2) window.scrollTo({ top: cur.getBoundingClientRect().top + window.scrollY - 16, behavior: 'instant' });
      if (++n < 12) setTimeout(settle, 80);
    };
    settle();
    if (el.tabIndex === -1) el.focus({ preventScroll: true });
  }, [html, anchor, nonce]);
  return h('div', { 'data-visual-patterns': html ? 'ready' : 'loading', dangerouslySetInnerHTML: { __html: html || '' } });
};
K.PatternsFooter = function PatternsFooter() {
  return h(K.AppFooter, null, 'Kit-Ansicht der Kopiervorlage templates/website/longform/visualisierungsmuster.html (Styles: visual-patterns.css). Synthetische Musterinhalte, nicht zur Veröffentlichung.');
};
})();
