/* UI-Kit-Referenz (Claude). Einmalig aus JSX vorkompiliert – zur Laufzeit keine Babel- oder CDN-Abhängigkeit. */
(function () {
const K = window.PUKKit;
K.HomeView = function HomeView() {
  const {
    Button,
    Card
  } = window.PUKWeb;
  const go = h => () => {
    location.hash = h;
  };
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "puk-web-container puk-web-hero"
  }, React.createElement("p", {
    className: "puk-web-eyebrow"
  }, "Psychiatrische Universit\xE4tsklinik Z\xFCrich"), React.createElement("h1", {
    className: "puk-web-h1"
  }, "Hier steht die Kernaussage"), React.createElement("p", {
    className: "puk-web-lead"
  }, "Ein Vorspann von zwei bis drei Zeilen erkl\xE4rt, worum es geht, f\xFCr wen die Seite gedacht ist und welches der n\xE4chste sinnvolle Schritt ist."), React.createElement("div", {
    className: "puk-web-actions"
  }, React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: go('kontaktwegweiser')
  }, "Termin anfragen"), React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: go('angebotsnavigator')
  }, "Angebote ansehen"))), React.createElement("section", {
    className: "puk-web-container",
    "aria-label": "Titelbild"
  }, React.createElement("div", {
    className: "puk-web-media",
    role: "img",
    "aria-label": "Platzhalter f\xFCr ein redaktionell beschriebenes Bild im Format 16 zu 9"
  }, "Bild 16:9 \xB7 Alternativtext redaktionell erg\xE4nzen")), React.createElement("section", {
    className: "puk-web-container puk-web-section",
    "aria-labelledby": "angebote-title"
  }, React.createElement("h2", {
    id: "angebote-title",
    className: "puk-web-h2"
  }, "Angebote"), React.createElement("ul", {
    className: "puk-web-card-list",
    role: "list"
  }, React.createElement("li", null, React.createElement(Card, {
    eyebrow: "Ambulant",
    title: "Sprechstunden",
    href: "#angebotsnavigator",
    style: {
      flex: 1
    }
  }, "Abkl\xE4rung und Behandlung an allen Standorten, mit oder ohne Zuweisung.")), React.createElement("li", null, React.createElement(Card, {
    eyebrow: "Station\xE4r",
    title: "Klinikaufenthalt",
    href: "#angebotsnavigator",
    style: {
      flex: 1
    }
  }, "Behandlung in einem gesch\xFCtzten Rahmen, wenn ambulante Angebote nicht ausreichen.")), React.createElement("li", null, React.createElement(Card, {
    eyebrow: "Orientierung",
    title: "Kontaktwege",
    href: "#kontaktwegweiser",
    style: {
      flex: 1
    }
  }, "Ein Wegweiser ordnet, welcher Kontaktweg zu Ihrem Anliegen passt.")))), React.createElement("section", {
    className: "puk-web-band",
    "aria-labelledby": "zuweisende-title"
  }, React.createElement("div", {
    className: "puk-web-container puk-web-band__inner"
  }, React.createElement("div", {
    className: "puk-web-copy"
  }, React.createElement("h2", {
    id: "zuweisende-title",
    className: "puk-web-h3"
  }, "Zuweisende \xC4rztinnen und \xC4rzte"), React.createElement("p", {
    className: "puk-web-lead"
  }, "Anmeldungen laufen \xFCber das digitale Formular. Die erwartete Reaktionszeit wird konkret und \xFCberpr\xFCfbar angegeben.")), React.createElement(Button, {
    variant: "inverse",
    size: "lg"
  }, "Zum Formular"))));
};
})();
