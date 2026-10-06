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
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onload = () => {
    const a = document.createElement('script');
    a.src = base + '/platform/claude-ds-alias.js';
    document.head.appendChild(a);
  };
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' — point the base line at the bound design-system folder relative to this page.');
  document.head.appendChild(s);
})();
