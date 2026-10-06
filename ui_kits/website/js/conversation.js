/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
const SITUATIONS = [['kontakt', 'Kontakt ist schwierig'], ['struktur', 'Alltag ist unübersichtlich'], ['sicherheit', 'Sicherheit beschäftigt mich']];
const GOALS = [['verstehen', 'Besser verstehen'], ['grenze', 'Eine Grenze benennen'], ['hilfe', 'Hilfe anbieten']];
const TEXT = {
  kontakt: {
    verstehen: ['«Ich möchte verstehen, wie es Ihnen gerade geht. Sie müssen nicht sofort antworten.»', 'Ich kann zuhören; ich kann die Situation nicht allein lösen.', 'Einen ruhigen Zeitpunkt für ein kurzes Gespräch anbieten.'],
    grenze: ['«Ich möchte im Kontakt bleiben. Gleichzeitig brauche ich eine Pause, wenn das Gespräch verletzend wird.»', 'Eine Grenze beschreibt das eigene Handeln und ist keine Drohung.', 'Pause und Zeitpunkt für eine mögliche Fortsetzung benennen.'],
    hilfe: ['«Möchten Sie, dass ich zuhöre, mitdenke oder bei einem konkreten Schritt helfe?»', 'Hilfe wird angeboten und nicht ungefragt übernommen.', 'Eine kleine, wählbare Unterstützung anbieten.']
  },
  struktur: {
    verstehen: ['«Was ist heute der schwierigste Teil: anfangen, ordnen oder dranbleiben?»', 'Eine konkrete Frage ist leichter als eine umfassende Bewertung.', 'Nur den nächsten überschaubaren Schritt klären.'],
    grenze: ['«Ich helfe gern beim ersten Schritt. Die ganze Aufgabe kann ich nicht übernehmen.»', 'Unterstützung und Verantwortung werden getrennt benannt.', 'Umfang und Zeitpunkt der Hilfe vereinbaren.'],
    hilfe: ['«Sollen wir gemeinsam eine kurze Liste machen oder zuerst nur einen Termin festhalten?»', 'Zwei klare Optionen reduzieren zusätzlichen Entscheidungsdruck.', 'Eine Option wählen und danach neu beurteilen.']
  },
  sicherheit: {
    verstehen: ['«Ich nehme wahr, dass Sie sich gerade sehr unsicher fühlen. Was würde jetzt etwas mehr Sicherheit geben?»', 'Nicht über Wahrnehmungen streiten; Sicherheit und nächsten Schritt klären.', 'Bei möglicher akuter Gefahr den freigegebenen Notfallweg verwenden.'],
    grenze: ['«Ich bleibe erreichbar, aber ich kann eine unsichere Situation nicht allein tragen.»', 'Eigene Sicherheit und professionelle Unterstützung dürfen gleichzeitig wichtig sein.', 'Fachlich freigegebenen Kontaktweg beiziehen.'],
    hilfe: ['«Ich kann mit Ihnen zusammen die nächste geeignete Stelle kontaktieren.»', 'Keine eigenständige klinische Beurteilung versprechen.', 'Den fachlich freigegebenen Kontaktweg gemeinsam öffnen.']
  }
};
K.ConversationView = function ConversationView() {
  const [s, setS] = React.useState('kontakt');
  const [g, setG] = React.useState('verstehen');
  const [wording, boundary, next] = TEXT[s][g];
  return React.createElement(React.Fragment, null, React.createElement(K.AppHero, {
    eyebrow: "Anwendungsmuster \xB7 Gespr\xE4ch",
    title: "Ein Gespr\xE4ch vorbereiten",
    lead: "W\xE4hlen Sie zuerst die Situation und danach Ihr Ziel. Die Referenz verbindet beides mit einem m\xF6glichen Satz, einer Grenze und einem kleinen n\xE4chsten Schritt.",
    boundary: "Die Auswahl bleibt auf dieser Seite und wird nicht gespeichert oder \xFCbertragen. Die Vorschl\xE4ge garantieren keinen Gespr\xE4chserfolg."
  }), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "situation-title"
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "situation-title"
  }, "1. Situation w\xE4hlen"), React.createElement("div", {
    className: "puk-app-filter",
    "aria-label": "Gespr\xE4chssituation"
  }, SITUATIONS.map(([id, l]) => React.createElement("button", {
    key: id,
    className: "puk-app-chip",
    type: "button",
    "aria-pressed": String(s === id),
    onClick: () => setS(id)
  }, l)))), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "goal-title"
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "goal-title"
  }, "2. Gespr\xE4chsziel w\xE4hlen"), React.createElement("div", {
    className: "puk-app-filter",
    "aria-label": "Gespr\xE4chsziel"
  }, GOALS.map(([id, l]) => React.createElement("button", {
    key: id,
    className: "puk-app-chip",
    type: "button",
    "aria-pressed": String(g === id),
    onClick: () => setG(id)
  }, l))), React.createElement("section", {
    className: "puk-app-output",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, React.createElement("span", {
    className: "puk-app-kicker"
  }, "M\xF6gliche Vorbereitung"), React.createElement("h2", null, "Ein Satz \u2013 eine Grenze \u2013 ein Schritt"), React.createElement("dl", null, React.createElement("dt", null, "M\xF6glicher Satz"), React.createElement("dd", null, wording), React.createElement("dt", null, "Wichtige Grenze"), React.createElement("dd", null, boundary), React.createElement("dt", null, "N\xE4chster Schritt"), React.createElement("dd", null, next)))), React.createElement("section", {
    className: "puk-web-container puk-app-section",
    "aria-labelledby": "use-title"
  }, React.createElement("h2", {
    className: "puk-app-h2",
    id: "use-title"
  }, "Was dieses Muster leistet"), React.createElement("ul", {
    className: "puk-app-grid",
    role: "list"
  }, React.createElement("li", null, React.createElement("article", {
    className: "puk-app-card"
  }, React.createElement("h3", null, "Wahlm\xF6glichkeiten"), React.createElement("p", null, "Die Person kann zuh\xF6ren, mitdenken oder konkrete Hilfe anbieten, ohne ungefragt Verantwortung zu \xFCbernehmen."))), React.createElement("li", null, React.createElement("article", {
    className: "puk-app-card"
  }, React.createElement("h3", null, "Eigene Grenzen"), React.createElement("p", null, "Grenzen beschreiben das eigene Handeln. Sie werden nicht als Drohung oder verdeckter Zwang formuliert."))), React.createElement("li", null, React.createElement("article", {
    className: "puk-app-card"
  }, React.createElement("h3", null, "Kleine Schritte"), React.createElement("p", null, "Ein \xFCberschaubarer n\xE4chster Schritt ersetzt keine fachliche Behandlung, kann aber ein Gespr\xE4ch handhabbarer machen."))))));
};
K.ConversationFooter = () => React.createElement(K.AppFooter, null, "Formulierungen m\xFCssen fachredaktionell gepr\xFCft und an den jeweiligen Kontext angepasst werden.");
})();
