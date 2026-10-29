// CLAUDE-PLATTFORMADAPTER – nicht Teil der kanonischen Website-Kit-Ausgabe
// (siehe PLATFORM_ADAPTERS.md). Lädt Styles, das von Claude erzeugte
// _ds_bundle.js und danach platform/claude-ds-alias.js, der den stabilen Alias
// window.PUKWeb setzt. Website.dc.html verweist nur auf PUKWeb.* und bleibt
// deshalb bei einer Projektumbenennung unverändert. In einem konsumierenden
// Claude-Projekt nur die base-Zeile anpassen.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  // _ds_bundle.js übernimmt window.React schon beim Laden. support.js lädt React
  // gleichzeitig nach; darum das Bundle erst einfügen, wenn React bereitsteht
  // (Nachbesserung 29.10.2026, O-D).
  const loadBundle = () => {
    const s = document.createElement('script');
    s.src = base + '/_ds_bundle.js';
    s.onload = () => {
      const a = document.createElement('script');
      a.src = base + '/platform/claude-ds-alias.js';
      document.head.appendChild(a);
    };
    s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — point the base line at the bound design-system folder relative to this page.');
    document.head.appendChild(s);
  };
  const started = Date.now();
  const waitForReact = () => {
    if (window.React && window.ReactDOM) loadBundle();
    else if (Date.now() - started > 15000) console.error('ds-base.js: React was not loaded within 15 s; _ds_bundle.js was not loaded.');
    else setTimeout(waitForReact, 20);
  };
  waitForReact();
})();
