/* UI-Kit-Beispiel (Claude): eigene didaktische Orientierungsgrafik. Keine Fachaussage, keine Daten. */
(function () {
const K = window.PUKKit;
const h = React.createElement;
const BLOBS = ['M58 10 C80 4 106 18 108 42 C110 66 96 90 66 90 C40 92 30 80 18 72 C4 60 8 34 24 22 C34 14 44 12 58 10Z', 'M30 14 C52 2 88 10 104 26 C118 42 112 70 94 84 C74 98 42 94 24 82 C8 70 4 46 12 32 C16 24 22 18 30 14Z', 'M20 40 C24 18 50 6 74 10 C98 14 116 36 110 60 C104 82 80 94 56 90 C34 86 14 72 14 56 C14 50 18 46 20 40Z'];
const STEPS = [['Situation', '«Was ist gerade los?»', 'Beschreiben, was Sie beobachten oder erleben, ohne es schon zu bewerten.'], ['Einordnung', '«Was bedeutet das für mich?»', 'Informationen, eigene Erfahrungen und offene Fragen sortieren.'], ['Nächster Schritt', '«Was tue ich als Nächstes?»', 'Einen machbaren Schritt wählen, zum Beispiel weiterlesen, nachfragen oder ein Gespräch vereinbaren.']];
const stop = (o, c) => h('stop', { offset: o, style: { stopColor: c } });
function Mark({ i }) {
  return h('div', { className: 'kit-orient__mark' }, h('svg', { viewBox: '0 0 120 100', 'aria-hidden': 'true', focusable: 'false' },
    h('path', { d: BLOBS[i], fill: 'url(#kit-orient-fill)', stroke: 'var(--puk-blue-100)', strokeWidth: 2, strokeLinejoin: 'round' }),
    h('path', { d: BLOBS[(i + 1) % 3], transform: 'translate(15 13) scale(.75)', fill: 'none', stroke: 'var(--puk-blue-50)', strokeWidth: 1.5, strokeLinecap: 'round', strokeDasharray: i === 2 ? 'none' : '3 5' })),
    h('span', { className: 'kit-orient__num', 'aria-hidden': 'true' }, i + 1));
}
const LinkH = () => h('svg', { className: 'kit-orient__link kit-orient__link--h', viewBox: '0 0 80 40', preserveAspectRatio: 'none', 'aria-hidden': 'true', focusable: 'false' },
  h('path', { d: 'M4 30 C22 6 52 4 74 22', fill: 'none', stroke: 'var(--puk-blue-100)', strokeWidth: 2, strokeLinecap: 'round', vectorEffect: 'non-scaling-stroke' }),
  h('path', { d: 'M64 24 L75 23 L71 13', fill: 'none', stroke: 'var(--puk-blue-100)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', vectorEffect: 'non-scaling-stroke' }));
const LinkV = () => h('svg', { className: 'kit-orient__link kit-orient__link--v', viewBox: '0 0 40 56', 'aria-hidden': 'true', focusable: 'false' },
  h('path', { d: 'M12 4 C30 18 30 36 20 50', fill: 'none', stroke: 'var(--puk-blue-100)', strokeWidth: 2, strokeLinecap: 'round' }),
  h('path', { d: 'M11 43 L20 51 L27 42', fill: 'none', stroke: 'var(--puk-blue-100)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }));
K.VisualView = function VisualView() {
  return h(React.Fragment, null,
    h(K.AppHero, {
      eyebrow: 'UI-Kit-Beispiel \xB7 Visualisierung',
      title: 'Eine eigene Grafik zur Orientierung',
      lead: 'Die Grafik zeigt einen Denkweg in drei Schritten. Sie trägt die Erklärung und ersetzt keinen Inhalt.',
      boundary: 'Eigene didaktische Darstellung des UI-Kits ohne fachliche Aussage, ohne Daten und ohne Quelle. Keine Website-Referenzseite; vor einer Verwendung redaktionell ersetzen und freigeben.'
    }),
    h('section', { className: 'puk-web-container puk-app-section', 'aria-labelledby': 'kit-orient-title' },
      h('h2', { className: 'puk-app-h2', id: 'kit-orient-title' }, 'Von der Situation zum nächsten Schritt'),
      h('figure', { className: 'kit-orient', 'aria-labelledby': 'kit-orient-title', 'aria-describedby': 'kit-orient-caption' },
        h('svg', { width: 0, height: 0, 'aria-hidden': 'true', focusable: 'false', style: { position: 'absolute' } },
          h('defs', null, h('linearGradient', { id: 'kit-orient-fill', x1: '0', y1: '0', x2: '1', y2: '1' }, stop('0', 'var(--puk-blue-25)'), stop('1', 'var(--puk-white)')))),
        h('ol', { className: 'kit-orient__steps' }, STEPS.map(([t, q, d], i) => h('li', { className: 'kit-orient__step', key: t },
          h(Mark, { i }),
          h('h3', { className: 'kit-orient__title' }, h('span', { className: 'kit-visually-hidden' }, 'Schritt ' + (i + 1) + ': '), t),
          h('p', { className: 'kit-orient__q' }, q),
          h('p', { className: 'kit-orient__d' }, d),
          i < 2 ? h(LinkH) : null, i < 2 ? h(LinkV) : null))),
        h('figcaption', { className: 'kit-orient__caption', id: 'kit-orient-caption' }, h('strong', null, 'Eigene didaktische Darstellung'), ' \xB7 UI-Kit-Beispiel ohne fachliche Aussage. Nummer, Titel und Reihenfolge tragen die Bedeutung; Form und Farbe wiederholen nur, was im Text steht.'))),
    h('section', { className: 'puk-web-container puk-app-section', 'aria-labelledby': 'kit-orient-text-title' },
      h('h2', { className: 'puk-app-h2', id: 'kit-orient-text-title' }, 'Textfassung der Grafik'),
      h('div', { className: 'puk-web-copy' },
        h('p', null, 'Die Grafik zeigt drei Stationen, die auf breiten Bildschirmen von links nach rechts und auf schmalen Bildschirmen von oben nach unten angeordnet sind. Jede Station ist eine weiche, unregelmässige Form mit einer Nummer.'),
        h('p', null, 'Station 1 heisst «Situation» und fragt: Was ist gerade los? Station 2 heisst «Einordnung» und fragt: Was bedeutet das für mich? Station 3 heisst «Nächster Schritt» und fragt: Was tue ich als Nächstes?'),
        h('p', null, 'Geschwungene Pfeile verbinden die Stationen. Sie zeigen nur die Reihenfolge, keine Zeitdauer, Gewichtung oder Dringlichkeit.'))),
    h('section', { className: 'puk-web-container puk-app-section', 'aria-labelledby': 'kit-orient-rules-title' },
      h('h2', { className: 'puk-app-h2', id: 'kit-orient-rules-title' }, 'Was das Beispiel zeigt'),
      h('ul', { className: 'puk-web-copy kit-orient__rules' },
        h('li', null, 'Eigenständige Bildsprache nur innerhalb der Figur: organische Formen, gestrichelte Binnenlinie und ein dezenter Tonwertverlauf von Blau 25 zu Weiss. Die Seite selbst bleibt weiss und flach.'),
        h('li', null, 'Beschriftungen sind echter HTML-Text. Die Formen sind für Screenreader ausgeblendet; die Textfassung beschreibt die Anordnung vollständig.'),
        h('li', null, 'Bedeutung liegt in Nummer, Titel und Position, nicht in der Farbe. Konturen in PUK-Blau erreichen auf Weiss und Blau 25 mehr als 3:1.'),
        h('li', null, 'Keine Fotografie: Ohne freigegebene, nachweisbare Bildquelle bleibt es bei Platzhalter oder eigener abstrakter Darstellung.'))));
};
K.VisualFooter = function VisualFooter() {
  return h(K.AppFooter, null, 'UI-Kit-Beispiel, nicht zur Veröffentlichung. Regeln: Abschnitte «Visuelle Wissensvermittlung» und «Visualisierung umsetzen».');
};
})();
