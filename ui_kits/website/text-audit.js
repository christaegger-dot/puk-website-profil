/* Wortumbrüche prüfen: erlaubte sprachliche Silbentrennung von Notumbrüchen unterscheiden. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.PUKTextAudit = api;
})(typeof self !== 'undefined' ? self : this, function () {
  function wrapped(range) {
    const rects = [...range.getClientRects()].filter(r => r.width > 0);
    return rects.length > 1 && Math.abs(rects[0].top - rects[rects.length - 1].top) > 2;
  }
  function breaks(doc, node, offset, length) {
    const out = [], range = doc.createRange(); let previous;
    for (let i = 0; i < length; i++) {
      range.setStart(node, offset + i); range.setEnd(node, offset + i + 1);
      const top = range.getBoundingClientRect().top;
      if (previous !== undefined && Math.abs(top - previous) > 2) out.push(i);
      previous = top;
    }
    return out.join(',');
  }
  function syllables(doc, node, offset, length, originals) {
    const el = node.parentElement;
    if (doc.defaultView.getComputedStyle(el).hyphens !== 'auto') return false;
    const before = breaks(doc, node, offset, length), style = el.getAttribute('style');
    if (!originals.has(el)) originals.set(el, style);
    try {
      // Wörterbuch-Trennungen bleiben auch ohne den Fallback für überlange Wörter bestehen.
      el.style.setProperty('overflow-wrap', 'normal', 'important');
      el.style.setProperty('word-break', 'normal', 'important');
      return before !== '' && breaks(doc, node, offset, length) === before;
    } finally {
      // Auch den CSSOM-Zustand leeren; Chromium kann sonst style="" nachtragen.
      el.style.cssText = style || '';
      if (style === null) el.removeAttribute('style'); else el.setAttribute('style', style);
    }
  }
  function midWord(doc) {
    const main = doc.querySelector('main'); if (!main) return [];
    const walker = doc.createTreeWalker(main, doc.defaultView.NodeFilter.SHOW_TEXT), hits = [], originals = new Map(); let node;
    try {
      while ((node = walker.nextNode())) {
        const words = /\p{L}{2,}/gu; let match;
        while ((match = words.exec(node.data))) {
          const range = doc.createRange(); range.setStart(node, match.index); range.setEnd(node, match.index + match[0].length);
          if (wrapped(range) && !syllables(doc, node, match.index, match[0].length, originals)) hits.push('Wort getrennt: ' + match[0]);
        }
      }
    } finally {
      // Nach allen CSSOM-Zugriffen auch das ursprüngliche Fehlen des Attributs bewahren.
      for (const [el, style] of originals) {
        if (style === null) el.removeAttribute('style'); else el.setAttribute('style', style);
      }
    }
    return [...new Set(hits)].slice(0, 4);
  }
  return {midWord};
});
