/* CLAUDE-PLATTFORMADAPTER – nicht Teil der kanonischen Website-Kit-Ausgabe.
   Siehe PLATFORM_ADAPTERS.md. Nie in ein Produktionsprojekt kopieren.

   Die Claude-Umgebung legt die Komponentenbibliothek unter einem Namen ab, der
   aus Projekttitel und Projekt-ID erzeugt wird. Vorlagen, Karten und das UI-Kit
   verweisen deshalb nur auf den stabilen Alias window.PUKWeb. Dieser Adapter
   sucht nach dem Laden von _ds_bundle.js das Bibliotheksobjekt anhand seiner
   Form (Button, Card, Tabs, Alert, Field) und setzt den Alias. Eine
   Umbenennung des Projekts ändert damit keine einzige Vorlage. */
(function () {
  var REQUIRED = ['Button', 'Card', 'Tabs', 'Alert', 'Field'];
  function looksLikeLibrary(v) {
    if (!v || typeof v !== 'object') return false;
    for (var i = 0; i < REQUIRED.length; i++) if (typeof v[REQUIRED[i]] !== 'function') return false;
    return true;
  }
  function resolve() {
    if (looksLikeLibrary(window.PUKWeb)) return window.PUKWeb;
    var keys = Object.keys(window);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === 'PUKWeb') continue;
      try { if (looksLikeLibrary(window[keys[i]])) { window.PUKWeb = window[keys[i]]; return window.PUKWeb; } } catch (e) {}
    }
    return null;
  }
  window.PUKWebResolve = resolve;
  resolve();
})();
