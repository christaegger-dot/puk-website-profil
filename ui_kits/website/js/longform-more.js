/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
K.OverviewView = function OverviewView() {
  const R = 'handlungsuebersicht';
  return React.createElement(React.Fragment, null, React.createElement(K.LongformHero, {
    eyebrow: "Synthetische Referenz \xB7 Kompakte \xDCbersicht",
    title: "Was heute machbar ist, ohne alles auf einmal l\xF6sen zu m\xFCssen",
    intro: "Eine handlungsorientierte Seite beginnt mit einer klaren Auswahl und verwendet Karten nur f\xFCr wirklich eigenst\xE4ndige Optionen."
  }, React.createElement("strong", null, "Pr\xFCfgrenze:"), " Neutrale Testinhalte, keine fachliche Empfehlung."), React.createElement(K.Roadmap, {
    route: R,
    label: "Drei Schritte",
    navLabel: "Weg durch die Handlungs\xFCbersicht",
    items: [['waehlen', 'Situation wählen'], ['vergleichen', 'Möglichkeiten vergleichen'], ['notieren', 'Schritt notieren']]
  }), React.createElement(K.LfSection, {
    id: "waehlen",
    kicker: "01 \xB7 Start",
    title: "Eine Aufgabe begrenzen"
  }, React.createElement("p", null, "Die Seite behandelt nur eine kleine Entscheidung. Sie erkl\xE4rt knapp, woran sich die Auswahl orientiert, und verschiebt vertiefende Grundlagen in das ", React.createElement("a", {
    className: "puk-link--inline",
    href: "#grundlagenkapitel/verstehen"
  }, "ausf\xFChrliche, zusammenh\xE4ngende Grundlagenkapitel"), "."), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Ist die Aufgabe begrenzt, lassen sich wenige eigenst\xE4ndige M\xF6glichkeiten sinnvoll vergleichen.")), React.createElement(K.LfSection, {
    id: "vergleichen",
    kicker: "02 \xB7 Vergleich",
    title: "Drei unterschiedliche Wege"
  }, React.createElement("ul", {
    className: "puk-web-card-list",
    role: "list"
  }, React.createElement("li", null, React.createElement("article", {
    className: "puk-longform__support"
  }, React.createElement("h3", null, "Verkleinern"), React.createElement("p", null, "Nur den ersten sichtbaren Teil der Aufgabe festlegen."))), React.createElement("li", null, React.createElement("article", {
    className: "puk-longform__support"
  }, React.createElement("h3", null, "Verschieben"), React.createElement("p", null, "Einen realistischen Zeitpunkt und eine klare Grenze benennen."))), React.createElement("li", null, React.createElement("article", {
    className: "puk-longform__support"
  }, React.createElement("h3", null, "Unterst\xFCtzung"), React.createElement("p", null, "Eine konkrete Person oder Stelle f\xFCr einen begrenzten Schritt anfragen.")))), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Die Karten zeigen eigenst\xE4ndige Optionen. Die folgende \xDCbung f\xFChrt die gew\xE4hlte Option wieder in einen zusammenh\xE4ngenden Handlungsschritt zur\xFCck.")), React.createElement(K.LfSection, {
    id: "notieren",
    kicker: "03 \xB7 N\xE4chster Schritt",
    title: "Konkret formulieren"
  }, React.createElement("aside", {
    className: "puk-longform__reflection",
    "aria-labelledby": "next-title"
  }, React.createElement("h3", {
    id: "next-title"
  }, "Mein kleinster n\xE4chster Schritt"), React.createElement("p", null, "Formulieren Sie testweise: \xABAls N\xE4chstes werde ich \u2026\xBB"), React.createElement("label", {
    htmlFor: "next-note"
  }, "Freiwillige Notiz"), React.createElement("textarea", {
    id: "next-note",
    name: "next-note"
  }), React.createElement("p", {
    className: "puk-longform__privacy"
  }, "Die Eingabe wird nicht gespeichert oder \xFCbertragen.")), React.createElement("a", {
    className: "puk-link--action",
    href: '#' + R + '/waehlen'
  }, "Auswahl nochmals ansehen")));
};
K.OverviewFooter = () => React.createElement(K.LongformFooter, {
  heading: "Sicherheits- und Inhaltsgrenze"
}, "Die Seite ordnet neutrale Optionen. Reale dringliche Wege und Fachinhalte ben\xF6tigen eine eigene Freigabe.");
K.TransferView = function TransferView() {
  const R = 'transfer-erholung';
  return React.createElement(React.Fragment, null, React.createElement(K.LongformHero, {
    eyebrow: "Synthetische Transferpr\xFCfung \xB7 anderes Thema",
    title: "Erholung im Alltag erkennen und bewusst einplanen",
    intro: "Dieser Transferfall wurde nur aus Profil, Langform-Vertrag, zentralen Styles und Startanleitung abgeleitet. Er pr\xFCft, ob das Muster ohne Pilot-Sonderklassen verst\xE4ndlich anwendbar bleibt."
  }, React.createElement("strong", null, "Pr\xFCfgrenze:"), " Die Aussagen sind Layout-Testinhalte und nicht fachlich freigegeben."), React.createElement(K.Roadmap, {
    route: R,
    label: "Auf dieser Seite",
    navLabel: "Weg durch die Transferseite",
    items: [['beobachten', 'Beobachten'], ['unterscheiden', 'Unterscheiden'], ['planen', 'Planen'], ['einordnung', 'Einordnen']]
  }), React.createElement(K.LfSection, {
    id: "beobachten",
    kicker: "01 \xB7 Orientierung",
    title: "Was gibt gerade etwas Kraft?"
  }, React.createElement("p", null, "Die Einstiegsfrage ist bewusst klein. Sie verlangt weder eine vollst\xE4ndige Selbsteinsch\xE4tzung noch eine lange Liste, sondern richtet Aufmerksamkeit auf einen beobachtbaren Moment."), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Ein einzelner Moment schafft Orientierung. Der n\xE4chste Abschnitt unterscheidet verschiedene Funktionen von Erholung, ohne sie als Rangliste darzustellen.")), React.createElement(K.LfSection, {
    id: "unterscheiden",
    kicker: "02 \xB7 Verst\xE4ndnis",
    title: "Nicht jede Pause wirkt gleich"
  }, React.createElement("figure", {
    className: "puk-longform__figure"
  }, React.createElement("div", {
    className: "puk-longform__figure-stage",
    role: "img",
    "aria-label": "Aktive und ruhige Erholung werden als zwei unterschiedliche, gleichwertige M\xF6glichkeiten gegen\xFCbergestellt."
  }, React.createElement("div", {
    className: "puk-longform__figure-side"
  }, "Aktive Erholung"), React.createElement("div", {
    className: "puk-longform__figure-relation"
  }, "kann je nach Situation unterschiedlich passend sein"), React.createElement("div", {
    className: "puk-longform__figure-side"
  }, "Ruhige Erholung")), React.createElement("figcaption", null, React.createElement("strong", null, "Eigene didaktische Darstellung"), " \xB7 Gegen\xFCberstellung f\xFCr den Layouttest; keine fachliche Klassifikation.")), React.createElement("p", null, "Die Darstellung zeigt einen Vergleich, weil die Beziehung schneller erfassbar wird. Die Erl\xE4uterung bleibt sichtbar und verweist f\xFCr den Pr\xFCfstatus auf ", React.createElement("a", {
    className: "puk-link--inline",
    href: '#' + R + '/einordnung'
  }, "Einordnung und Grenzen des synthetischen Transferfalls"), "."), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Der Vergleich dient nicht als Test. Er bereitet lediglich eine freiwillige Planungsfrage vor.")), React.createElement(K.LfSection, {
    id: "planen",
    kicker: "03 \xB7 Alltagsbezug",
    title: "Einen realistischen Moment vormerken"
  }, React.createElement("aside", {
    className: "puk-longform__reflection",
    "aria-labelledby": "plan-title"
  }, React.createElement("h3", {
    id: "plan-title"
  }, "Kleine Planungsfrage"), React.createElement("p", null, "Welcher kurze Moment w\xE4re heute erreichbar, ohne daraus eine zus\xE4tzliche Pflicht zu machen?"), React.createElement("label", {
    htmlFor: "plan-note"
  }, "Freiwillige Notiz"), React.createElement("textarea", {
    id: "plan-note",
    name: "plan-note"
  }), React.createElement("p", {
    className: "puk-longform__privacy"
  }, "Keine Speicherung und keine \xDCbertragung.")), React.createElement("a", {
    className: "puk-link--action",
    href: '#' + R + '/beobachten'
  }, "Nochmals bei der Beobachtung beginnen")), React.createElement(K.LfSection, {
    id: "einordnung",
    kicker: "04 \xB7 Pr\xFCfgrenze",
    title: "Was dieser Transfer zeigt"
  }, React.createElement("div", {
    className: "puk-longform__support"
  }, React.createElement("h3", null, "Ohne neue Sonderklasse umgesetzt"), React.createElement("p", null, "Orientierung, Kapitelstruktur, Erkl\xE4rgrafik, Inline-Link, Reflexion, Aktionslink und Quellenrolle verwenden ausschliesslich die dokumentierten Systemvertr\xE4ge.")), React.createElement("ul", {
    className: "puk-longform__sources"
  }, React.createElement("li", null, React.createElement("strong", null, "Transferprotokoll."), React.createElement("span", {
    className: "puk-longform__source-use"
  }, "Gepr\xFCft wird technische und gestalterische \xDCbertragbarkeit; nicht gepr\xFCft werden fachliche Richtigkeit und Verst\xE4ndlichkeit mit echten Nutzenden.")))));
};
K.TransferFooter = () => React.createElement(K.LongformFooter, {
  heading: "Transferstatus"
}, "Synthetischer Pr\xFCffall, nicht zur Ver\xF6ffentlichung bestimmt.");
})();
