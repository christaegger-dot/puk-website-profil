const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function setPressed(buttons, active) {
  for (const button of buttons) button.setAttribute('aria-pressed', String(button === active));
}

function setupSituationNavigator() {
  const filters = $$('[data-situation-filter]');
  const results = $$('[data-situation-topics]');
  const status = $('[data-situation-status]');
  const reset = $('[data-situation-reset]');
  const activeName = $('[data-situation-active]');
  const apply = (value, label) => {
    for (const item of results) {
      const topics = (item.dataset.situationTopics || '').split(' ');
      item.hidden = value !== 'all' && !topics.includes(value);
    }
    const count = results.filter((item) => item.dataset.counted === 'true' && !item.hidden).length;
    status.textContent = `${count} passende Impulse`;
    activeName.textContent = value === 'all' ? 'Alle Themen' : label;
    reset.hidden = value === 'all';
    const selected = filters.find((button) => button.dataset.situationFilter === value) || filters[0];
    setPressed(filters, selected);
  };
  for (const button of filters) button.addEventListener('click', () => apply(button.dataset.situationFilter, button.textContent.trim()));
  for (const button of $$('[data-pick-situation]')) button.addEventListener('click', () => {
    const target = filters.find((filter) => filter.dataset.situationFilter === button.dataset.pickSituation);
    apply(button.dataset.pickSituation, target?.textContent.trim() || button.textContent.trim());
    $('[data-situation-controls]')?.scrollIntoView({ block: 'start' });
  });
  reset.addEventListener('click', () => { apply('all', 'Alle Themen'); filters[0]?.focus(); });
  apply('all', 'Alle Themen');
}

const contactPaths = {
  orientation: {
    title: 'Beratung und Orientierung vereinbaren',
    text: 'Nutzen Sie den regulären, redaktionell bestätigten Beratungsweg. Nennen Sie knapp, worum es geht und wie Sie erreichbar sind.',
    action: 'Beratungsweg anzeigen',
    targetTitle: 'Muster für einen regulären Beratungsweg',
    targetText: 'Hier stehen im Produkt die bestätigte Stelle, der Kontaktkanal, die Erreichbarkeit und der erwartbare nächste Schritt.'
  },
  urgent: {
    title: 'Heute oder zeitnah fachliche Unterstützung suchen',
    text: 'Diese Stufe braucht eine fachlich freigegebene Beschreibung und genau einen vorrangigen Kontaktweg mit bestätigter Erreichbarkeit.',
    action: 'Zeitnahen Kontaktweg anzeigen',
    targetTitle: 'Muster für einen zeitnahen Kontaktweg',
    targetText: 'Hier stehen im Produkt eine heute erreichbare Stelle, ein eindeutiger Kanal und eine überprüfte Reaktionszeit.'
  },
  emergency: {
    title: 'Jetzt sofort handeln',
    text: 'Hier darf nur ein geprüfter Notfallkontakt stehen. Die Information bleibt zusätzlich als eigene, direkt erreichbare Seite verfügbar.',
    action: 'Fachlich freigegebenen Notfallweg anzeigen',
    targetTitle: 'Muster für den fachlich freigegebenen Notfallweg',
    targetText: 'Hier stehen im Produkt die bestätigte Notfallnummer, die Erreichbarkeit und eine klare Alternative bei unmittelbarer Gefahr.'
  }
};

function setupContactPathfinder() {
  const choices = $$('[data-contact-level]');
  const detail = $('[data-contact-detail]');
  const title = $('[data-contact-title]');
  const text = $('[data-contact-text]');
  const action = $('[data-contact-action]');
  const target = $('[data-contact-target]');
  const targetTitle = $('[data-contact-target-title]');
  const targetText = $('[data-contact-target-text]');
  const apply = (level) => {
    const content = contactPaths[level];
    setPressed(choices, choices.find((button) => button.dataset.contactLevel === level));
    detail.dataset.level = level;
    title.textContent = content.title;
    text.textContent = content.text;
    action.textContent = content.action;
    action.href = '#kontakt-details';
    target.dataset.level = level;
    targetTitle.textContent = content.targetTitle;
    targetText.textContent = content.targetText;
    detail.hidden = false;
  };
  for (const button of choices) button.addEventListener('click', () => apply(button.dataset.contactLevel));
  action.addEventListener('click', () => setTimeout(() => target.focus(), 0));
  const levelFromHash = () => location.hash === '#sofort' ? 'emergency' : null;
  apply(levelFromHash() || 'orientation');
  addEventListener('hashchange', () => {
    const level = levelFromHash();
    if (level) apply(level);
  });
}

const conversationText = {
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

function setupConversationGuide() {
  const situations = $$('[data-conversation-situation]');
  const goals = $$('[data-conversation-goal]');
  const output = $('[data-conversation-output]');
  let situation = 'kontakt';
  let goal = 'verstehen';
  const render = () => {
    const [wording, boundary, next] = conversationText[situation][goal];
    $('[data-conversation-wording]').textContent = wording;
    $('[data-conversation-boundary]').textContent = boundary;
    $('[data-conversation-next]').textContent = next;
    output.hidden = false;
  };
  for (const button of situations) button.addEventListener('click', () => {
    situation = button.dataset.conversationSituation;
    setPressed(situations, button);
    render();
  });
  for (const button of goals) button.addEventListener('click', () => {
    goal = button.dataset.conversationGoal;
    setPressed(goals, button);
    render();
  });
  setPressed(situations, situations[0]);
  setPressed(goals, goals[0]);
  render();
}

function setupServiceFinder() {
  const input = $('[data-service-search]');
  const categories = $$('[data-service-category]');
  const cards = $$('[data-service-card]');
  const status = $('[data-service-status]');
  const empty = $('[data-service-empty]');
  let category = 'all';
  const normalize = (value) => value.toLocaleLowerCase('de-CH').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const apply = () => {
    const queryTokens = normalize(input.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    for (const card of cards) {
      const categoryMatches = category === 'all' || card.dataset.serviceCategory === category;
      const haystack = normalize(`${card.dataset.serviceSearch || ''} ${card.textContent || ''}`);
      const searchMatches = queryTokens.every((token) => haystack.includes(token));
      card.hidden = !(categoryMatches && searchMatches);
      if (!card.hidden) count += 1;
    }
    status.textContent = count === 1 ? '1 passendes Musterangebot' : `${count} passende Musterangebote`;
    empty.hidden = count !== 0;
  };
  input.addEventListener('input', apply);
  for (const button of categories) button.addEventListener('click', () => {
    category = button.dataset.serviceCategory;
    setPressed(categories, button);
    apply();
  });
  setPressed(categories, categories[0]);
  apply();
}

const application = document.documentElement.dataset.pukApplication;
if (application === 'situation-navigator') setupSituationNavigator();
if (application === 'contact-pathfinder') setupContactPathfinder();
if (application === 'conversation-guide') setupConversationGuide();
if (application === 'service-finder') setupServiceFinder();
