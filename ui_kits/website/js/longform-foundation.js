/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
const R = 'grundlagenkapitel';
K.FoundationView = function FoundationView() {
  return React.createElement(React.Fragment, null, React.createElement(K.LongformHero, {
    eyebrow: "Synthetische Referenz \xB7 Grundlagenkapitel",
    title: "Eine belastende Situation Schritt f\xFCr Schritt verstehen",
    intro: "Diese Seite zeigt, wie Orientierung, Begriffskl\xE4rung, ein Erkl\xE4rmodell, ein Alltagsbeispiel und ein n\xE4chster Schritt als zusammenh\xE4ngender Erkenntnisweg gestaltet werden."
  }, React.createElement("strong", null, "Pr\xFCfgrenze:"), " Alle Inhalte sind absichtlich neutral und dienen nur der Pr\xFCfung des Musters. Sie sind keine klinische Information und nicht zur Ver\xF6ffentlichung bestimmt."), React.createElement(K.Roadmap, {
    route: R,
    label: "Auf dieser Seite",
    navLabel: "Weg durch das Grundlagenkapitel",
    items: [['orientierung', 'Orientieren'], ['verstehen', 'Verstehen'], ['alltag', 'Übertragen'], ['handeln', 'Handeln'], ['sources', 'Einordnen']]
  }), React.createElement(K.LfSection, {
    id: "orientierung",
    kicker: "01 \xB7 Orientierung",
    title: "Worum es geht"
  }, React.createElement("p", null, "L\xE4ngere Erkl\xE4rseiten brauchen eine erkennbare Aufgabe. Ein knapper Einstieg benennt deshalb Zielgruppe, Thema und Nutzen, bevor Fachbegriffe oder Modelle eingef\xFChrt werden."), React.createElement("dl", {
    className: "puk-longform__term-guide"
  }, React.createElement("div", null, React.createElement("dt", null, "Anforderung"), React.createElement("dd", null, "Was in einer Situation Aufmerksamkeit, Zeit oder Kraft beansprucht.")), React.createElement("div", null, React.createElement("dt", null, "Ressource"), React.createElement("dd", null, "Was tr\xE4gt, unterst\xFCtzt oder Handlungsspielraum schafft.")), React.createElement("div", null, React.createElement("dt", null, "Einsch\xE4tzung"), React.createElement("dd", null, "Wie eine Situation aufgrund von Erfahrung und Kontext eingeordnet wird."))), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Die Begriffe schaffen eine gemeinsame Sprache. Im n\xE4chsten Abschnitt werden ihre Beziehungen als Modell sichtbar.")), React.createElement(K.LfSection, {
    id: "verstehen",
    kicker: "02 \xB7 Verst\xE4ndnis",
    title: "Wie die Teile zusammenwirken"
  }, React.createElement("p", null, "Ein Erkl\xE4rmodell verdichtet eine Beziehung, ersetzt aber nicht die Erl\xE4uterung. Die Abbildung steht deshalb zwischen vorbereitendem Text und einer anschliessenden Einordnung."), React.createElement("figure", {
    className: "puk-longform__figure"
  }, React.createElement("div", {
    className: "puk-longform__figure-stage",
    role: "img",
    "aria-label": "Zwei Seiten zeigen Anforderungen und Ressourcen. Dazwischen steht die Einordnung als Beziehung, nicht als mechanischer Messwert."
  }, React.createElement("div", {
    className: "puk-longform__figure-side"
  }, "Anforderungen"), React.createElement("div", {
    className: "puk-longform__figure-relation"
  }, "werden im Kontext vorhandener M\xF6glichkeiten eingeordnet"), React.createElement("div", {
    className: "puk-longform__figure-side"
  }, "Ressourcen")), React.createElement("figcaption", null, "Eigene didaktische Darstellung. Sie ordnet Begriffe und behauptet keine Messbarkeit oder fachlich validierte Skala.")), React.createElement("h3", null, "Das Modell ist eine Denkst\xFCtze"), React.createElement("p", null, "Es hilft, verschiedene Ansatzpunkte zu erkennen. Reale Lebensumst\xE4nde bleiben dabei real; eine pers\xF6nliche Einordnung ist weder ein Fehler noch eine Schuldzuweisung."), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Das Modell erkl\xE4rt eine Beziehung. Ein Beispiel zeigt nun, wie dieselben Begriffe in einer konkreten Alltagssituation zusammenkommen.")), React.createElement(K.LfSection, {
    id: "alltag",
    kicker: "03 \xB7 Alltagsbezug",
    title: "Ein Beispiel einordnen"
  }, React.createElement("p", null, "Eine Person erh\xE4lt kurzfristig eine zus\xE4tzliche Aufgabe. Ob sie als gut bew\xE4ltigbar oder als zu viel erlebt wird, h\xE4ngt unter anderem von Zeit, Erfahrung, Unterst\xFCtzung und den bereits bestehenden Anforderungen ab."), React.createElement("p", null, "Das Beispiel bleibt konkret genug, um das Modell verst\xE4ndlich zu machen, aber offen genug, damit keine Einzelsituation als allgemeing\xFCltig dargestellt wird. Eine ausf\xFChrliche Erl\xE4uterung der Quellenzuordnung steht im Abschnitt ", React.createElement("a", {
    className: "puk-link--inline",
    href: '#' + R + '/sources'
  }, "Quellen und Einordnung dieser synthetischen Referenzseite"), "."), React.createElement("aside", {
    className: "puk-longform__reflection",
    "aria-labelledby": "reflection-title"
  }, React.createElement("h3", {
    id: "reflection-title"
  }, "Freiwillige Reflexion"), React.createElement("p", null, "Welche Anforderung und welche vorhandene Unterst\xFCtzung w\xE4ren in einem eigenen, unverf\xE4nglichen Beispiel sichtbar?"), React.createElement("label", {
    htmlFor: "reflection-note"
  }, "Notiz nur f\xFCr diesen ge\xF6ffneten Browser-Tab"), React.createElement("textarea", {
    id: "reflection-note",
    name: "reflection-note"
  }), React.createElement("p", {
    className: "puk-longform__privacy"
  }, "Die Referenz speichert und \xFCbermittelt die Eingabe nicht.")), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Die Reflexion verbindet Verst\xE4ndnis und Alltag. Daraus kann ein kleiner n\xE4chster Schritt entstehen, ohne eine vollst\xE4ndige L\xF6sung zu versprechen.")), React.createElement(K.LfSection, {
    id: "handeln",
    kicker: "04 \xB7 Handlung",
    title: "Einen n\xE4chsten Schritt w\xE4hlen"
  }, React.createElement("div", {
    className: "puk-longform__support",
    id: "support"
  }, React.createElement("h3", null, "Unterst\xFCtzung passend zum Anliegen"), React.createElement("p", null, "Ein Unterst\xFCtzungsblock erkl\xE4rt zuerst, wof\xFCr ein Weg geeignet ist, und nennt danach genau eine eigenst\xE4ndige Aktion."), React.createElement("a", {
    className: "puk-link--action",
    href: '#' + R + '/sources'
  }, "Pr\xFCf- und Quellenstatus ansehen")), React.createElement("p", {
    className: "puk-longform__transition"
  }, "Der Handlungsweg schliesst den Erkenntnisweg ab. Die abschliessende Einordnung macht Herkunft, Verwendung und Grenzen transparent.")), React.createElement(K.LfSection, {
    id: "sources",
    kicker: "05 \xB7 Einordnung",
    title: "Quellen und Pr\xFCfgrenzen"
  }, React.createElement("p", null, "F\xFCr einen produktiven Fachtext w\xFCrden hier \xFCberpr\xFCfte Prim\xE4rquellen, redaktionelle Verantwortung und Pr\xFCfdatum stehen."), React.createElement("ul", {
    className: "puk-longform__sources"
  }, React.createElement("li", null, React.createElement("strong", null, "Synthetische Quelle A."), " Platzhalter f\xFCr eine fachliche Grundlagenquelle.", React.createElement("span", {
    className: "puk-longform__source-use"
  }, "Verwendung: Begriffe und Erkl\xE4rmodell. Status: nicht fachlich belegt.")), React.createElement("li", null, React.createElement("strong", null, "Synthetische Quelle B mit einer absichtlich langen Quellenbezeichnung zur Pr\xFCfung zuverl\xE4ssiger Zeilenumbr\xFCche auf sehr schmalen Bildschirmen."), React.createElement("span", {
    className: "puk-longform__source-use"
  }, "Verwendung: Alltagsbezug. Status: Layout-Testinhalt.")))));
};
K.FoundationFooter = () => React.createElement(K.LongformFooter, {
  heading: "Sicherheitsvariante dieser Referenz"
}, "Nicht-akute Langformseite: ein stabiler, aber nicht dominanter Hinweis w\xE4re hier m\xF6glich. Reale Kontakte ben\xF6tigen fachliche und kommunikative Freigabe.");
})();
