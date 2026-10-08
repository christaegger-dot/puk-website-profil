/* PUK Website Kit 1.10.1-r4 · abgeleitet – Seitenvertrag, Build und Gate für den Psychoedukations-Starter.
   Abgeleitetes Profil auf Basis der kanonischen Quelle PUK Zürich Design System 1.10.1, nicht deren offizielle Version.
   Ohne Abhängigkeiten: Node (tools/build.mjs, tools/gate.mjs) und Browser (gate.html, ui_kits/website/qa.html).
   Das Gate prüft Struktur, Vertrag und Freigabestatus. Es ist keine medizinische Triage und ersetzt keine Fachfreigabe. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api; else root.PUKSiteContract = api;
})(typeof self !== 'undefined' ? self : this, function () {
'use strict';
const VERSION = 'PUK Website Kit 1.10.1-r4 · abgeleitet';
const BUILD = 'r4-3';
const FORMATS = ['text', 'figure', 'process', 'cycle', 'comparison', 'decision', 'illustration', 'stepwise-model', 'tension-field', 'relationship-map', 'continuum', 'layer-model'];
/* Interaktive Komponenten und Erklärmuster G brauchen components/interaktion.js (HTML-Fassungen ohne React). */
const INTERACTIVE = ['data-puk-accordion', 'data-puk-tabs', 'data-puk-disclosure', 'data-puk-dialog-open', 'data-vis-build'];
const SAFETY = ['none', 'responsibility'];
/* Profilentscheid 06.10.2026: Die Fachstelle Angehörigenarbeit bietet keine Krisenintervention. Psychoedukative Seiten tragen keine Krisennummern und keinen Notfallblock; zulässig ist ein Zuständigkeitsverweis ohne Nummern in der Fusszeile. */
const LEGACY_SAFETY = ['persistent-subdued', 'direct'];
/* Hinweise aus dem Website-Review Teil 1 (fachliche Prüfung): Schweizer Kontext, Orthografie, personenzentrierte Sprache. Nur Hinweise (warn), keine Blocker: Stichwortprüfung, kein Ersatz für die fachliche Prüfung. */
const DE_TERMS = /\b(Jugendamt|Betreuungsgerichts?|rechtliche[nr]? Betreuung|Betreuungsverfahren|PsychKG|SGB\s?[IVX]+|Pflegegrade?s?|Pflegekasse|Erwerbsminderungsrente|Schwerbehindertenausweis|Telefonseelsorge|Amtsgerichts?|Sozialpsychiatrische[nr]? Dienst(?:es)?)\b/i;
const LABELS = /\b(?:die|der|den|des|dem|ein|eine|einen|einem|einer|als)\s+(Schizophrenen?|Psychotiker(?:in(?:nen)?)?|Borderliner(?:in(?:nen)?)?|Bipolaren|Süchtigen|Geisteskranken?|Irren)\b|\bpsychisch Kranken?\b/i;
const REVIEW_WARNINGS = ['orthography', 'swiss-context', 'person-first', 'card-grid', 'inline-style', 'figure-core', 'entry-point', 'plan-coverage'];
/* Profilentscheid 08.10.2026: Erklärmodelle (Kreislauf, Prozesspfad, Modell in Schritten) prüfen, wo Angehörige ansetzen können – im Plan als «entryPoint» (Ansatzpunkt oder «entfällt: Begründung»), in der Figur als .puk-vis-ansatz. */
const ENTRY_FORMATS = ['cycle', 'process', 'stepwise-model'];
/* Profilentscheid 08.10.2026: Bauen und Prüfen sind getrennt; ohne vollständigen Prüfbericht (PRUEFBERICHT.md im Ordner der Website) keine Veröffentlichung.
   Status je Stufe: «erledigt» oder «entfällt: Begründung»; alles andere gilt als offen. */
const REPORT_STAGES = [['W1', /^w1\b/i], ['W2', /^w2\b/i], ['S', /^s\b/i], ['Visualisierungs-Check', /^visualisierungs-check/i], ['Bedienung und Barrierefreiheit', /^bedienung/i], ['W3', /^w3\b/i]];
function reportStatus(md) {
  const rows = String(md || '').split(/\r?\n/).filter(l => /^\s*\|/.test(l)).map(l => l.trim().replace(/^\||\|$/g, '').split('|').map(c => c.trim()));
  const open = [];
  for (const [name, re] of REPORT_STAGES) {
    const row = rows.find(r => re.test(r[0] || ''));
    const st = row ? (row[1] || '') : '';
    if (!/^(erledigt|entfällt\s*:\s*\S)/i.test(st)) open.push(name);
  }
  return { open };
}
const SENSITIVE = [['selbstgefaehrdung', /selbstgef[aä]hrd|selbstverletz|suizid/i], ['gewalt', /gewalt/i], ['zwang', /(^|[^a-zäöü])zwang(s|$|[^a-zäöü])/i], ['akute-krise', /(^|[^a-zäöü])krisen?([^a-zäöü]|$)|notfall/i]];
const GENERIC = /^(quelle|quellen|mehr|mehr erfahren|hier|link|details|weiterlesen|langbeschreibung|textfassung|download|pdf)$/i;
const VOID = new Set('area base br col embed hr img input link meta source track wbr'.split(' '));
const RAW = new Set(['script', 'style']);
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0' };
const dec = s => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => e[0] === '#' ? String.fromCodePoint(/^#x/i.test(e) ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)) : (ENT[e.toLowerCase()] ?? m));
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- minimaler HTML-Parser (ausreichend für die eigenen, sauber geschlossenen Seiten) ---------- */
function parse(html) {
  const root = { tag: '#root', attrs: {}, children: [], parent: null, pos: 0 };
  let cur = root, i = 0; const n = html.length;
  const tagRe = /<([a-zA-Z][\w:-]*)((?:\s+[^\s"'>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]+))?)*)\s*(\/?)>/y;
  const endRe = /<\/([a-zA-Z][\w:-]*)\s*>/y;
  while (i < n) {
    if (html.startsWith('<!--', i)) { const e = html.indexOf('-->', i + 4); i = e < 0 ? n : e + 3; continue; }
    if (html.startsWith('<!', i) || html.startsWith('<?', i)) { const e = html.indexOf('>', i); i = e < 0 ? n : e + 1; continue; }
    if (html.startsWith('</', i)) {
      endRe.lastIndex = i; const m = endRe.exec(html);
      if (m) { const t = m[1].toLowerCase(); let x = cur; while (x && x.tag !== t) x = x.parent; if (x) cur = x.parent; i = endRe.lastIndex; continue; }
    }
    if (html[i] === '<') {
      tagRe.lastIndex = i; const m = tagRe.exec(html);
      if (m) {
        const t = m[1].toLowerCase(); const attrs = {};
        const ar = /([^\s"'>\/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g; let a;
        while ((a = ar.exec(m[2]))) attrs[a[1].toLowerCase()] = dec(a[2] ?? a[3] ?? a[4] ?? '');
        const el = { tag: t, attrs, children: [], parent: cur, pos: i }; cur.children.push(el); i = tagRe.lastIndex;
        if (RAW.has(t)) {
          const e = html.toLowerCase().indexOf('</' + t, i); const end = e < 0 ? n : e;
          el.children.push({ tag: '#text', text: html.slice(i, end), parent: el });
          const c = html.indexOf('>', end); i = c < 0 ? n : c + 1; continue;
        }
        if (!VOID.has(t) && !m[3]) cur = el;
        continue;
      }
    }
    let e = html.indexOf('<', i + 1); if (e < 0) e = n;
    cur.children.push({ tag: '#text', text: dec(html.slice(i, e)), parent: cur }); i = e;
  }
  return root;
}
const all = (node, pred, out = []) => { for (const c of node.children || []) if (c.tag !== '#text') { if (pred(c)) out.push(c); all(c, pred, out); } return out; };
const one = (node, pred) => all(node, pred)[0] || null;
const texts = (node, out = []) => { for (const c of node.children || []) { if (c.tag === '#text') out.push(c); else if (!RAW.has(c.tag)) texts(c, out); } return out; };
const txt = node => node ? texts(node).map(t => t.text).join('') : '';
const norm = s => String(s || '').replace(/\s+/g, ' ').trim();
const has = (nd, k) => !!nd.attrs && Object.prototype.hasOwnProperty.call(nd.attrs, k);
const cls = (nd, c) => (' ' + ((nd.attrs && nd.attrs.class) || '') + ' ').includes(' ' + c + ' ');
const up = (nd, pred) => { for (let p = nd.parent; p; p = p.parent) if (p.attrs && pred(p)) return p; return null; };
const byId = (doc, id) => id ? one(doc, x => x.attrs.id === id) : null;

/* ---------- Pfade ---------- */
const isExternalUrl = u => /^\s*(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(u || '');
const isInternal = h => !!h && !/^\s*[a-z][a-z0-9+.-]*:/i.test(h) && !/^\s*\/\//.test(h);
function resolve(from, href) {
  const [pathPart, hash = ''] = String(href || '').split('#'); const clean = pathPart.split('?')[0];
  if (!clean) return { path: from, hash };
  const segs = String(from || '').split('/').slice(0, -1);
  for (const s of clean.split('/')) { if (s === '..') { if (segs.length && segs[segs.length - 1] !== '..') segs.pop(); else segs.push('..'); } else if (s !== '.' && s !== '') segs.push(s); }
  return { path: segs.join('/'), hash };
}
const reviewDocumented = sa => !!(sa && sa.reviewStatus === 'geprueft' && sa.reviewedBy && sa.reviewedAt);
const pagePath = p => resolve('', p.href).path;

/* ---------- Build: Seitenrahmen konstruktiv aus dem Vertrag ---------- */
function renderPage(cfg, page, content) {
  const v = cfg.assetVersion ? '?v=' + encodeURIComponent(cfg.assetVersion) : '';
  const nav = cfg.pages.filter(p => p.status === 'published' && p.navLabel);
  const s = cfg.sender || {};
  /* Website-Review Teil 2: ein Zuständigkeitsverweis an fester, von jeder Seite aus erreichbarer Stelle → site-weit in site.config.responsibility, in jeder Fusszeile. */
  const sa = cfg.responsibility ? Object.assign({ variant: 'responsibility' }, cfg.responsibility) : { variant: 'none' };
  /* Profilentscheid 08.10.2026: Der Prüfvermerk ist intern (site.config.json, Gate) und erscheint nicht auf der Website. Sichtbar bleibt nur die Warnung bei einem ungeprüften Verweis. */
  const review = sa.variant === 'none' || reviewDocumented(sa) ? ''
    : `Zuständigkeitsverweis ungeprüft: fachliche Prüfung ${sa.reviewStatus === 'ausstehend' ? 'ausstehend' : 'nicht dokumentiert'} · Verantwortung: ${esc(sa.owner || 'offen')}.`;
  const senderBadge = s.status === 'freigegeben' ? '' : `<span class="puk-site-draft">${esc(s.statusLabel || 'Platzhalter, nicht freigegeben')}</span>`;
  const direct = '';
  const subdued = sa.variant === 'responsibility' ? `<section class="puk-site-safety puk-site-safety--responsibility" data-safety-access="responsibility" data-review-status="${esc(sa.reviewStatus)}" aria-labelledby="puk-safety-title"><h2 class="puk-web-footer__heading" id="puk-safety-title">${esc(sa.label || 'Zuständigkeit')}</h2><p class="puk-web-footer__copy">${esc(sa.text)}</p>${sa.targetHref ? `<p class="puk-web-footer__copy"><a href="${esc(sa.targetHref)}">${esc(sa.targetLabel)}</a></p>` : ''}${review ? `<p class="puk-web-footer__copy puk-site-review">${review}</p>` : ''}</section>` : '';
  const draftbar = page.status === 'draft' ? `<p class="puk-site-draftbar" data-page-status="draft"><span class="puk-web-container">Entwurf · nicht in der Navigation · nicht veröffentlichen</span></p>` : '';
  return `<!DOCTYPE html>
<html lang="${esc(cfg.language)}" data-puk-site-build="${BUILD}" data-page-id="${esc(page.id)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="${esc(page.description)}">
<meta name="generator" content="${esc(VERSION)} · psychoeducation-site-starter">
<title>${esc(page.title)} | ${esc(cfg.siteTitle)}</title>
<meta property="og:type" content="website">
<meta property="og:locale" content="de_CH">
<meta property="og:site_name" content="${esc(cfg.siteTitle)}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
${cfg.siteUrl ? `<link rel="canonical" href="${esc(cfg.siteUrl.replace(/\/$/, '') + '/' + pagePath(page))}">\n` : ''}<link rel="icon" href="${esc(cfg.favicon)}" type="image/svg+xml">
${(cfg.stylesheets || []).map(h => `<link rel="stylesheet" href="${esc(h)}${v}">`).join('\n')}
${cfg.interactionScript && INTERACTIVE.some(a => content.includes(a)) ? `<script src="${esc(cfg.interactionScript)}${v}" defer></script>\n` : ''}</head>
<body><div class="puk-web-page puk-longform" data-web-profile="website" data-longform-pattern="longform-psychoeducation">
<a class="puk-web-skip" href="#main-content">Zum Hauptinhalt</a>
${draftbar}<header class="puk-web-header"><div class="puk-web-container puk-web-header__inner">
<a class="puk-web-logo" href="${esc(pagePath(cfg.pages.find(p => p.id === 'index') || nav[0]))}" aria-label="Startseite: ${esc(cfg.siteTitle)}"><img src="${esc(cfg.logo)}" alt="${esc(s.institution)}"></a>
<nav class="puk-web-nav" aria-label="Hauptnavigation"><ul class="puk-web-nav__list" role="list">
${nav.map(p => `<li><a class="puk-web-nav__link" href="${esc(p.href)}"${p.id === page.id ? ' aria-current="page"' : ''}>${esc(p.navLabel)}</a></li>`).join('\n')}
</ul></nav></div>
<div class="puk-web-container"><p class="puk-site-sender" data-sender><span class="puk-site-sender__label">Absenderin</span><span class="puk-site-sender__name" data-sender-unit>${esc(s.orgUnit)}</span><span aria-hidden="true">·</span><span data-sender-institution>${esc(s.institution)}</span>${s.email ? `<span aria-hidden="true">·</span><a class="puk-link--inline" data-sender-email href="mailto:${esc(s.email)}">${esc(s.email)}</a>` : ''}${senderBadge}</p></div>
</header>
${direct}<main id="main-content" class="puk-web-main" tabindex="-1">
${content.trim()}
</main>
<footer class="puk-web-footer" data-safety-variant="${esc(sa.variant)}"><div class="puk-web-container puk-web-footer__grid">
${subdued}<section aria-labelledby="puk-site-info-title"><h2 class="puk-web-footer__heading" id="puk-site-info-title">Über diese Seiten</h2>${cfg.disclaimer ? `<p class="puk-web-footer__copy" data-disclaimer>${esc(cfg.disclaimer)}</p>` : ''}<p class="puk-web-footer__copy">Inhaltsverantwortung: ${esc(cfg.contentOwner)}</p><p class="puk-web-footer__copy">Redaktioneller Status: ${esc(cfg.editorialStatusLabel || cfg.editorialStatus)}</p><p class="puk-web-footer__copy">${esc(VERSION)} – abgeleitetes Profil auf Basis des PUK Zürich Design System 1.10.1, nicht dessen offizielle Version.</p></section>
</div></footer>
</div></body>
</html>
`;
}

/* ---------- Gate ---------- */
function gate(cfg, files, opts = {}) {
  const mode = opts.mode === 'production' ? 'production' : 'draft';
  const exists = opts.exists || (p => Object.prototype.hasOwnProperty.call(files, p));
  const F = []; const add = (level, page, id, msg) => F.push({ level, page, id, msg });
  const prod = (page, id, msg) => add(mode === 'production' ? 'block' : 'warn', page, id, msg);
  const cache = {}; const docOf = p => files[p] == null ? null : (cache[p] = cache[p] || parse(files[p]));
  for (const k of ['siteTitle', 'shortDescription', 'language', 'favicon', 'contentOwner', 'editorialStatus']) if (!cfg[k]) add('block', 'site', 'config', `site.config: «${k}» fehlt`);
  if (cfg.language && !/^de(-|$)/i.test(cfg.language)) add('block', 'site', 'lang', 'language muss deutsch sein (de, de-CH)');
  const s = cfg.sender || {};
  if (!s.orgUnit || !s.institution) add('block', 'site', 'sender', 'sender.orgUnit und sender.institution sind Pflicht');
  if (s.email && !/^[^\s@<>"]+@[^\s@<>"]+\.[a-z]{2,}$/i.test(s.email)) add('block', 'site', 'sender', 'sender.email ist keine gültige E-Mail-Adresse: ' + s.email);
  if (s.status !== 'freigegeben') prod('site', 'sender-status', `Absenderin «${s.orgUnit || '?'}» ist nicht freigegeben (status: ${s.status || 'fehlt'})`);
  if (cfg.favicon && (isExternalUrl(cfg.favicon) || !exists(resolve('', cfg.favicon).path))) add('block', 'site', 'favicon', 'Favicon-Datei fehlt oder ist extern: ' + cfg.favicon);
  if (!cfg.siteUrl) add('warn', 'site', 'site-url', 'site.config.siteUrl fehlt: ohne Adresse entstehen keine sitemap.xml und keine kanonischen Links (Abschnitt «Technische Qualität», G)');
  if (!cfg.disclaimer) add('warn', 'site', 'disclaimer', 'site.config.disclaimer fehlt: gut auffindbarer Hinweis, dass die Website keine individuelle Abklärung, Beratung oder Behandlung ersetzt');
  const rs = cfg.responsibility;
  if (rs) {
    for (const k of ['text', 'owner', 'reviewStatus']) if (!rs[k]) add('block', 'site', 'safety-contract', 'responsibility.' + k + ' fehlt');
    if (rs.targetHref) {
      const r = resolve('', rs.targetHref);
      if (!rs.targetLabel) add('block', 'site', 'safety-contract', 'responsibility.targetLabel fehlt');
      if (isExternalUrl(rs.targetHref) || !isInternal(rs.targetHref)) add('block', 'site', 'safety-target', 'Ziel des Zuständigkeitsverweises muss lokal sein: ' + rs.targetHref);
      else if (!exists(r.path)) add('block', 'site', 'safety-target', 'Ziel des Zuständigkeitsverweises existiert nicht: ' + rs.targetHref);
    }
    if (rs.reviewStatus === 'geprueft' && !reviewDocumented(rs)) add('block', 'site', 'review-doc', 'reviewStatus «geprueft» ohne reviewedBy und reviewedAt – gilt nicht als verifiziert');
    else if (rs.reviewStatus !== 'geprueft') prod('site', 'safety-review', `Zuständigkeitsverweis nicht fachlich geprüft (reviewStatus: ${rs.reviewStatus || 'fehlt'})`);
  }
  const pages = Array.isArray(cfg.pages) ? cfg.pages : [];
  if (!pages.length) add('block', 'site', 'config', 'pages fehlt');
  const byPath = {}; pages.forEach(p => { if (p.href) byPath[pagePath(p)] = p; });
  const ids = new Set();
  for (const p of pages) {
    const pid = p.id || '?';
    for (const k of ['id', 'title', 'href', 'status', 'primaryTask', 'description']) if (!p[k]) add('block', pid, 'config', `pages[].${k} fehlt`);
    if (!('navLabel' in p)) add('block', pid, 'config', 'pages[].navLabel fehlt (null = nicht in der Navigation)');
    if (!['draft', 'published'].includes(p.status)) add('block', pid, 'config', 'status muss draft oder published sein');
    if (ids.has(p.id)) add('block', pid, 'config', 'doppelte Seiten-id'); ids.add(p.id);
    if (p.href && !exists(pagePath(p))) add('block', pid, 'page-file', 'Seitendatei fehlt: ' + p.href);
    if (!Array.isArray(p.sensitiveTopics)) add('block', pid, 'config', 'sensitiveTopics fehlt (leeres Array, wenn keine)');
    const psa = p.safetyAccess;
    if (psa && psa.variant && psa.variant !== 'none') add('block', pid, 'safety-contract', LEGACY_SAFETY.includes(psa.variant) ? `Variante «${psa.variant}» ist auf Websites der Fachstelle nicht zulässig: Krisenintervention gehört nicht zum Auftrag; zulässig ist nur ein Zuständigkeitsverweis ohne Nummern (site.config.responsibility)` : 'Der Zuständigkeitsverweis steht site-weit in site.config.responsibility (eine feste Stelle), nicht pro Seite');
    if ((p.sensitiveTopics || []).length && !cfg.responsibility) add('warn', pid, 'safety-recommend', `Seite behandelt ${p.sensitiveTopics.join(', ')}: Zuständigkeitsverweis ohne Nummern (site.config.responsibility) empfohlen, nicht Pflicht`);
    const plan = p.visualPlan;
    if (!Array.isArray(plan) || !plan.length) add('block', pid, 'visual-plan', 'visualPlan fehlt');
    else for (const v of plan) {
      for (const k of ['id', 'section', 'goal', 'format', 'statement', 'source', 'alternative', 'reason', 'approvalStatus']) if (!v[k]) add('block', pid, 'visual-plan', `visualPlan ${v.id || '?'}: «${k}» fehlt`);
      if (!FORMATS.includes(v.format)) add('block', pid, 'visual-plan', `visualPlan ${v.id}: unbekanntes Format «${v.format}»`);
      if (v.format !== 'text' && !v.understood) add('block', pid, 'visual-plan', `visualPlan ${v.id}: «understood» fehlt – was versteht die Zielgruppe dadurch besser als durch einen kurzen Text allein?`);
      if (v.format !== 'text' && v.approvalStatus !== 'freigegeben') prod(pid, 'visual-approval', `Visualisierung ${v.id} nicht freigegeben (${v.approvalStatus})`);
      if (ENTRY_FORMATS.includes(v.format) && !(v.entryPoint || '').trim()) prod(pid, 'entry-point', `visualPlan ${v.id}: «entryPoint» fehlt – Ansatzpunkt für Angehörige oder «entfällt: Begründung»`);
    }
  }
  const titles = {}; const navExp = pages.filter(q => q.status === 'published' && q.navLabel).map(pagePath);
  for (const p of pages) {
    const path = p.href ? pagePath(p) : null; const doc = path ? docOf(path) : null; if (!doc) continue; const pid = p.id;
    const htmlEl = one(doc, x => x.tag === 'html');
    if (!htmlEl || !/^de(-|$)/i.test(htmlEl.attrs.lang || '')) add('block', pid, 'lang', 'html lang fehlt oder ist nicht deutsch');
    if (htmlEl && htmlEl.attrs['data-puk-site-build'] !== BUILD) add('warn', pid, 'build', `Seite nicht mit Build ${BUILD} erzeugt (${htmlEl.attrs['data-puk-site-build'] || 'ohne Kennung'}) – tools/build.mjs ausführen`);
    const t = norm(txt(one(doc, x => x.tag === 'title')));
    if (!t) add('block', pid, 'title', 'title fehlt'); else if (titles[t]) add('block', pid, 'title', 'title doppelt mit Seite ' + titles[t]); else titles[t] = pid;
    const md = one(doc, x => x.tag === 'meta' && (x.attrs.name || '').toLowerCase() === 'description');
    if (!md || !norm(md.attrs.content)) add('block', pid, 'meta', 'meta description fehlt');
    const icon = one(doc, x => x.tag === 'link' && /(^|\s)icon(\s|$)/i.test(x.attrs.rel || ''));
    if (!icon) add('block', pid, 'favicon', 'Favicon-Link fehlt');
    else if (isExternalUrl(icon.attrs.href) || !exists(resolve(path, icon.attrs.href).path)) add('block', pid, 'favicon', 'Favicon nicht lokal vorhanden: ' + icon.attrs.href);
    const mains = all(doc, x => x.tag === 'main'); const main = mains[0] || null;
    if (mains.length !== 1) add('block', pid, 'main', mains.length + ' main-Elemente statt 1');
    if (main && main.attrs.id !== 'main-content') add('block', pid, 'main', 'main ohne id="main-content"');
    const h1 = all(doc, x => x.tag === 'h1'); if (h1.length !== 1) add('block', pid, 'h1', h1.length + ' h1-Elemente statt 1');
    const skip = one(doc, x => x.tag === 'a' && cls(x, 'puk-web-skip'));
    if (!skip || skip.attrs.href !== '#main-content') add('block', pid, 'skip', 'Skip-Link auf #main-content fehlt');
    const snd = one(doc, x => has(x, 'data-sender')); const st = snd ? norm(txt(snd)) : '';
    const hidden = x => has(x, 'hidden') || x.attrs['aria-hidden'] === 'true' || /display\s*:\s*none|visibility\s*:\s*hidden/i.test(x.attrs.style || '') || cls(x, 'kit-visually-hidden') || cls(x, 'visually-hidden');
    if (!snd || !s.orgUnit || !st.includes(s.orgUnit) || !st.includes(s.institution || '\u0000')) add('block', pid, 'sender', 'Fachstellen-Absenderin nicht sichtbar (Organisationseinheit und Institution)');
    else if (hidden(snd) || up(snd, hidden)) add('block', pid, 'sender', 'Fachstellen-Absenderin ist versteckt');
    else if (s.email && !one(snd, x => x.tag === 'a' && has(x, 'data-sender-email') && x.attrs.href === 'mailto:' + s.email)) add('block', pid, 'sender', 'E-Mail der Absenderin fehlt im Kopf: ' + s.email);
    /* Technische Qualität (W3): keine Inline-Skripte (Content-Security-Policy), externe Fenster abgesichert, Interaktionsskript vorhanden, Kartenraster prüfen */
    for (const x of all(doc, y => y.tag === 'script' && !y.attrs.src)) add('block', pid, 'inline-script', 'Inline-Skript: mit strenger Content-Security-Policy nicht zulässig – in eine Datei auslagern');
    if (main && all(main, y => !!y.attrs.style).length) add('warn', pid, 'inline-style', 'style-Attribute im Inhalt: mit strenger Content-Security-Policy nicht zulässig – Klassen verwenden');
    for (const a of all(doc, y => y.tag === 'a' && y.attrs.target === '_blank')) if (!/noopener/.test(a.attrs.rel || '')) add('block', pid, 'blank-target', 'Link mit target="_blank" ohne rel="noopener noreferrer": ' + (a.attrs.href || ''));
    if (INTERACTIVE.some(at => one(doc, y => has(y, at)))) {
      const sc = one(doc, y => y.tag === 'script' && /interaktion\.js(\?|$)/.test(y.attrs.src || ''));
      if (!sc) add('block', pid, 'interaction-script', 'Interaktive Komponente ohne components/interaktion.js – ohne Skript bleibt sie statisch (site.config.interactionScript)');
      else if (!exists(resolve(path, sc.attrs.src).path)) add('block', pid, 'interaction-script', 'Interaktionsskript nicht lokal vorhanden: ' + sc.attrs.src);
    }
    for (const cl of main ? all(main, y => cls(y, 'puk-web-card-list')) : []) { const n = cl.children.filter(y => y.tag === 'li').length; if (n >= 4) add('warn', pid, 'card-grid', `Kartenraster mit ${n} Karten: prüfen, ob eine Anordnung mit Beziehungen erklären müsste (Kartenraster-Check, Abschnitt «Visualisierung umsetzen»)`); }
    for (const x of all(doc, y => ['script', 'link', 'img', 'source', 'iframe', 'video', 'audio', 'embed', 'object', 'use', 'image'].includes(y.tag)))
      for (const k of ['src', 'href', 'srcset', 'data', 'xlink:href']) { const u = x.attrs[k]; if (u && u.split(',').some(z => isExternalUrl(z.trim()))) add('block', pid, 'external', `Externe Laufzeitquelle: <${x.tag} ${k}="${u}">`); }
    for (const x of all(doc, y => y.tag === 'style')) if (/(@import|url\()\s*["']?(https?:)?\/\//i.test(txt(x))) add('block', pid, 'external', 'Externe Quelle in <style>');
    for (const x of all(doc, y => /url\(\s*["']?(https?:)?\/\//i.test(y.attrs.style || ''))) add('block', pid, 'external', 'Externe Quelle im style-Attribut');
    const navEl = one(doc, x => x.tag === 'nav' && x.attrs['aria-label'] === 'Hauptnavigation');
    if (!navEl) add('block', pid, 'nav', 'Hauptnavigation fehlt');
    else {
      const links = all(navEl, x => x.tag === 'a'); const got = links.map(a => resolve(path, a.attrs.href).path);
      links.forEach(a => { const r = resolve(path, a.attrs.href); if (!exists(r.path)) add('block', pid, 'nav-target', 'Navigationsziel fehlt: ' + a.attrs.href); else if (byPath[r.path] && byPath[r.path].status !== 'published') add('block', pid, 'nav', 'Entwurf in der Navigation: ' + a.attrs.href); });
      if (got.join('|') !== navExp.join('|')) add('block', pid, 'nav', `Navigation weicht vom Seitenvertrag ab: ${got.join(', ') || 'leer'} statt ${navExp.join(', ')}`);
      const cur = links.filter(a => a.attrs['aria-current'] === 'page'); const inNav = navExp.includes(path);
      if (inNav && (cur.length !== 1 || resolve(path, cur[0].attrs.href).path !== path)) add('block', pid, 'nav', 'aria-current="page" fehlt oder zeigt auf eine andere Seite');
      if (!inNav && cur.length) add('block', pid, 'nav', 'aria-current auf einer Seite ausserhalb der Navigation');
    }
    for (const a of all(doc, x => x.tag === 'a' && has(x, 'href'))) {
      const h = a.attrs.href; if (!isInternal(h)) continue; const r = resolve(path, h);
      if (!exists(r.path)) { add('block', pid, 'link-target', 'Linkziel fehlt: ' + h); continue; }
      const td = docOf(r.path); if (r.hash && td && !byId(td, r.hash)) add('block', pid, 'link-target', 'Sprungziel fehlt: ' + h);
      if (p.status === 'published' && byPath[r.path] && byPath[r.path].status !== 'published') add('block', pid, 'link-draft', 'Veröffentlichte Seite verlinkt einen Entwurf: ' + h);
    }
    const sa = cfg.responsibility ? Object.assign({ variant: 'responsibility' }, cfg.responsibility) : { variant: 'none' }; const mainText = main ? norm(txt(main)) : '';
    if (cfg.disclaimer && !one(doc, x => has(x, 'data-disclaimer'))) add('block', pid, 'disclaimer', 'Hinweis «ersetzt keine individuelle Abklärung oder Behandlung» fehlt auf der Seite');
    if (all(doc, x => x.attrs['data-safety-access'] === 'responsibility').length > 1) add('block', pid, 'safety-position', 'Mehr als ein Zuständigkeitsverweis auf der Seite – er steht an einer festen Stelle');
    { if (/ß/.test(mainText)) add('warn', pid, 'orthography', 'ß im Text – Schweizer Hochdeutsch schreibt ss');
      const q = mainText.match(/[„“”]/); if (q) add('warn', pid, 'orthography', `Anführungszeichen ${q[0]} – Schweizer Guillemets «…» verwenden`);
      const de = mainText.match(DE_TERMS); if (de) add('warn', pid, 'swiss-context', `«${de[0]}» ist ein deutscher Rechtsbegriff oder ein deutsches Angebot – Schweizer Begriff und Zuständigkeit prüfen (z. B. KESB, Beistandschaft, fürsorgerische Unterbringung)`);
      const lb = mainText.match(LABELS); if (lb) add('warn', pid, 'person-first', `«${lb[0]}» etikettiert – personenzentriert formulieren («Person mit …», «Menschen mit einer psychischen Erkrankung»)`); }
    for (const [topic, re] of SENSITIVE) { const m = mainText.match(re); if (m && !(p.sensitiveTopics || []).includes(topic)) add('block', pid, 'safety-contract', `Inhalt nennt «${norm(m[0])}», sensitiveTopics enthält «${topic}» nicht (Vertragsprüfung, keine Triage)`); }
    /* Keine Krisennummern, kein Notfallblock (Profilentscheid 06.10.2026) */
    for (const a of all(doc, x => x.tag === 'a' && /^tel:/i.test(x.attrs.href || ''))) add('block', pid, 'crisis-number', 'Telefonlink auf psychoedukativer Seite: ' + a.attrs.href);
    { const fullText = norm(txt(doc)); const ph = fullText.match(/(?:\+41|0041|\b0)\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}\b|\b0800\s?\d{3}\s?\d{3}\b/); if (ph) add('block', pid, 'crisis-number', `Telefonnummer im Text: «${ph[0]}» – psychoedukative Seiten nennen keine Nummern`);
      const sh = fullText.match(/(?:^|[^\d.,:\/-])(112|117|118|143|144|145|147)(?![\d]|[.,:\/-]\d)/); if (sh) add('warn', pid, 'crisis-number-check', `Mögliche Notrufnummer «${sh[1]}» im Text – prüfen; Krisennummern sind auf psychoedukativen Seiten nicht zulässig`); }
    for (const el of all(doc, x => LEGACY_SAFETY.includes(x.attrs['data-safety-access']) || cls(x, 'puk-site-safety--direct'))) add('block', pid, 'crisis-block', 'Notfallblock auf psychoedukativer Seite (' + (el.attrs['data-safety-access'] || 'puk-site-safety--direct') + ')');
    if (sa.variant === 'responsibility') {
      const el = one(doc, x => x.attrs['data-safety-access'] === 'responsibility');
      if (!el) add('block', pid, 'safety-target', 'Zuständigkeitsverweis fehlt in der Fusszeile – er muss von jeder Seite aus erreichbar sein');
      else {
        if (sa.targetHref && !one(el, x => x.tag === 'a' && x.attrs.href === sa.targetHref)) add('block', pid, 'safety-target', 'Zuständigkeitsverweis ohne Link auf ' + sa.targetHref);
        if (!reviewDocumented(sa) && /verifiziert|geprüft am|freigegeben am/i.test(norm(txt(el)))) add('block', pid, 'review-doc', 'Zuständigkeitsverweis wird als geprüft dargestellt, obwohl reviewStatus nicht dokumentiert ist');
        if (el.attrs['data-review-status'] !== sa.reviewStatus) add('block', pid, 'review-doc', 'data-review-status weicht vom Seitenvertrag ab');
        if (!up(el, x => x.tag === 'footer')) add('block', pid, 'safety-position', 'Zuständigkeitsverweis gehört in die Fusszeile');
        if (hidden(el) || up(el, hidden)) add('block', pid, 'safety-target', 'Zuständigkeitsverweis ist versteckt');
      }
    }
    const plan = Array.isArray(p.visualPlan) ? p.visualPlan : []; const planById = {}; plan.forEach(v => { planById[v.id] = v; });
    const seen = new Set();
    for (const f of main ? all(main, x => x.tag === 'figure') : []) {
      const vid = f.attrs['data-visual-id']; const v = planById[vid]; const lab = vid || '(ohne data-visual-id)';
      if (!v) add('block', pid, 'visual-plan', `Figur ${lab} steht nicht im Visualisierungsplan`);
      else { seen.add(vid); if (f.attrs['data-visual-type'] !== v.format) add('block', pid, 'visual-plan', `Figur ${vid}: data-visual-type «${f.attrs['data-visual-type'] || 'fehlt'}» statt «${v.format}»`); }
      const cap = one(f, x => x.tag === 'figcaption'); const capT = norm(txt(cap));
      if (!capT) add('block', pid, 'figure-caption', `Figur ${lab}: figcaption fehlt`);
      const lb = f.attrs['aria-labelledby']; if (!lb || !lb.split(/\s+/).every(x => byId(doc, x) && norm(txt(byId(doc, x))))) add('block', pid, 'figure-caption', `Figur ${lab}: sichtbarer Titel über aria-labelledby fehlt`);
      const db = f.attrs['aria-describedby']; const dbOk = db && db.split(/\s+/).every(x => byId(doc, x) && norm(txt(byId(doc, x))).length >= 40);
      const ld = one(f, x => x.tag === 'a' && has(x, 'data-longdesc')); const ldOk = ld && byId(doc, resolve(path, ld.attrs.href).hash);
      if (!dbOk && !ldOk) add('block', pid, 'figure-alt', `Figur ${lab}: Textalternative fehlt (aria-describedby mit mind. 40 Zeichen oder Langbeschreibungs-Link)`);
      if (!one(f, x => cls(x, 'puk-vis-kern') && norm(txt(x)).length > 0)) prod(pid, 'figure-core', `Figur ${lab}: Kernaussage als ganzer Satz fehlt (p.puk-vis-kern, Ebene 1)`);
      if (v && ENTRY_FORMATS.includes(v.format) && v.entryPoint && !/^entfällt/i.test(v.entryPoint.trim()) && !one(f, x => cls(x, 'puk-vis-ansatz'))) prod(pid, 'entry-point', `Figur ${vid}: Der Plan nennt einen Ansatzpunkt für Angehörige, die Figur markiert ihn nicht (.puk-vis-ansatz)`);
      if (!/eigene (didaktische )?darstellung|quelle:/i.test(capT)) add('block', pid, 'figure-source', `Figur ${lab}: Kennzeichnung «Eigene didaktische Darstellung» bzw. «Quelle:» fehlt in der Bildlegende`);
      for (const img of all(f, x => x.tag === 'img')) if (!has(img, 'alt')) add('block', pid, 'figure-alt', `Figur ${lab}: img ohne alt`);
      for (const sv of all(f, x => x.tag === 'svg')) if (sv.attrs['aria-hidden'] !== 'true' && !up(sv, x => x.attrs['aria-hidden'] === 'true' || x.attrs.role === 'img') && !sv.attrs['aria-label'] && !one(sv, x => x.tag === 'title')) add('block', pid, 'figure-alt', `Figur ${lab}: SVG weder ausgeblendet noch benannt`);
      if (f.attrs['data-visual-type'] === 'cycle') {
        const stations = all(f, x => x.tag === 'li' && !!up(x, y => cls(y, 'puk-vis-cycle')));
        const arcs = all(f, x => cls(x, 'puk-vis-arc'));
        if (stations.length < 4) add('block', pid, 'cycle-geometry', `Kreislauf ${lab}: ${stations.length} Stationen, mindestens 4 nötig`);
        if (arcs.length < stations.length) add('block', pid, 'cycle-geometry', `Kreislauf ${lab}: ${arcs.length} Bögen für ${stations.length} Stationen – die Schleife ist nicht geschlossen`);
        if (!one(f, x => has(x, 'data-cycle-wide')) || !one(f, x => has(x, 'data-cycle-narrow'))) add('block', pid, 'cycle-direction', `Kreislauf ${lab}: Leserichtung für breite und schmale Darstellung fehlt`);
        for (const tn of texts(f)) if (/uhrzeigersinn/i.test(tn.text) && !up(tn, x => has(x, 'data-cycle-wide'))) add('block', pid, 'cycle-direction', `Kreislauf ${lab}: «Uhrzeigersinn» steht ausserhalb der breiten Leserichtung und wäre bei der schmalen, linearen Abfolge falsch`);
        const ret = one(f, x => has(x, 'data-cycle-return'));
        if (!ret || !/zurück zu station 1/i.test(txt(ret))) add('block', pid, 'cycle-return', `Kreislauf ${lab}: sichtbarer Rücksprung «zurück zu Station 1» fehlt`);
        if (db && !/station 1/i.test(db.split(/\s+/).map(x => txt(byId(doc, x))).join(' '))) add('block', pid, 'cycle-return', `Kreislauf ${lab}: Textfassung erklärt die Rückkopplung zu Station 1 nicht`);
      }
      if (f.attrs['data-visual-type'] === 'illustration' && !one(f, x => has(x, 'data-placeholder') || (x.tag === 'img' && has(x, 'data-source-status')))) add('block', pid, 'placeholder-status', `Illustration ${lab}: Bildquelle- und Freigabestatus fehlen`);
    }
    for (const v of plan) if (v.format !== 'text' && !seen.has(v.id)) add('block', pid, 'visual-plan', `Plan-Eintrag ${v.id} (${v.format}) hat keine Figur auf der Seite`);
    /* Jeder Abschnitt hat eine Zeile im Visualisierungsplan (sectionId = id der section): Erklärform oder begründeter Verzicht. */
    for (const sec of main ? all(main, x => x.tag === 'section' && cls(x, 'puk-longform__section') && !!x.attrs.id) : []) if (!plan.some(v => v.sectionId === sec.attrs.id)) prod(pid, 'plan-coverage', `Abschnitt #${sec.attrs.id} ohne Zeile im Visualisierungsplan (sectionId) – Erklärform oder begründeter Verzicht`);
    for (const v of plan) if (v.sectionId && !one(doc, x => x.tag === 'section' && x.attrs.id === v.sectionId)) add('block', pid, 'plan-section', `Plan-Eintrag ${v.id}: Abschnitt #${v.sectionId} gibt es auf der Seite nicht`);
    for (const ph of all(doc, x => has(x, 'data-placeholder') || (x.tag === 'img' && !!main && !!up(x, y => y === main)))) {
      const kind = ph.attrs['data-placeholder'] || 'Bild'; const ss = ph.attrs['data-source-status'], as = ph.attrs['data-approval-status'];
      if (!ss || !as) { add('block', pid, 'placeholder-status', `${kind}: data-source-status und data-approval-status fehlen`); continue; }
      if (has(ph, 'data-placeholder') && !/entwurf|platzhalter/i.test(norm(txt(ph)))) add('block', pid, 'placeholder-visible', `Platzhalter ${kind} ist nicht sichtbar als Entwurf markiert`);
      if (as !== 'freigegeben') prod(pid, 'placeholder-approval', `Platzhalter ${kind} nicht freigegeben (Freigabe: ${as}, Quelle: ${ss})`);
    }
    for (const a of main ? all(main, x => x.tag === 'a') : []) {
      const t2 = norm(txt(a)); const inSrc = !!up(a, x => x.tag === 'figcaption' || cls(x, 'puk-longform__sources')) || has(a, 'data-source-link');
      if (!inSrc && !GENERIC.test(t2)) continue;
      if (GENERIC.test(t2) || t2.split(' ').length < 3) { const l = norm(a.attrs['aria-label']); if (l.split(' ').length < 4 || !l.toLowerCase().includes(t2.toLowerCase())) add('block', pid, 'link-label', `Link «${t2}» ohne sprechendes aria-label (mind. 4 Wörter, sichtbarer Text enthalten)`); }
    }
  }
  const startP = pages.find(q => q.id === 'index') || pages[0];
  if (startP && docOf(pagePath(startP))) {
    const seenP = new Set([pagePath(startP)]); const queue = [pagePath(startP)];
    while (queue.length) { const cp = queue.shift(); const d = docOf(cp); if (!d) continue; for (const a of all(d, x => x.tag === 'a' && has(x, 'href'))) { if (!isInternal(a.attrs.href)) continue; const r = resolve(cp, a.attrs.href).path; if (!seenP.has(r) && byPath[r]) { seenP.add(r); queue.push(r); } } }
    for (const p of pages) if (p.status === 'published' && p.href && !seenP.has(pagePath(p))) add('block', p.id, 'reachability', `Seite ${p.href} ist von der Startseite aus über keinen Link erreichbar`);
  }
  if (opts.report !== undefined) {
    if (opts.report === null) prod('site', 'review-report', 'PRUEFBERICHT.md fehlt – ohne Prüfbericht keine Veröffentlichung (Abschnitt «Prüfung und Freigabe»)');
    else { const rs = reportStatus(opts.report); if (rs.open.length) prod('site', 'review-report', `Prüfbericht: offene Stufen ${rs.open.join(', ')} – Status «erledigt» oder «entfällt: Begründung»`); }
  }
  return { mode, findings: F, blocks: F.filter(f => f.level === 'block').length, warns: F.filter(f => f.level === 'warn').length };
}

/* ---------- Selbsttest: jede bekannte Fehlerklasse muss vom Gate erkannt werden ---------- */
const MUTATIONS = [
  ['Navigationsziel fehlt (Link zeigt auf nicht vorhandene Seite)', ['nav-target', 'nav'], (c, f) => rep(f, 'index.html', 'class="puk-web-nav__link" href="beziehungen-verstehen.html"', 'class="puk-web-nav__link" href="beziehungen.html"')],
  ['Seitenvertrag verweist auf fehlende Datei', ['page-file'], c => { pg(c, 'behandlung-verstehen').href = 'behandlung.html'; }],
  ['lang fehlt', ['lang'], (c, f) => rep(f, 'behandlung-verstehen.html', '<html lang="de-CH"', '<html')],
  ['CDN-React eingebunden', ['external'], (c, f) => rep(f, 'behandlung-verstehen.html', '</head>', '<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>\n</head>')],
  ['Favicon fehlt', ['favicon'], (c, f) => rex(f, 'index.html', /<link rel="icon"[^>]*>\n?/, '')],
  ['Meta-Description fehlt', ['meta'], (c, f) => rex(f, 'index.html', /<meta name="description"[^>]*>\n?/, '')],
  ['Fachstelle unsichtbar', ['sender'], (c, f) => rep(f, 'unterstuetzung-finden.html', '<p class="puk-site-sender" data-sender>', '<p class="puk-site-sender" data-sender hidden>')],
  ['E-Mail der Absenderin fehlt', ['sender'], (c, f) => !!(c.sender && c.sender.email) && rex(f, 'index.html', /<a class="puk-link--inline" data-sender-email[^>]*>[^<]*<\/a>/, '')],
  ['Fachstelle fehlt', ['sender'], (c, f) => rex(f, 'index.html', /<p class="puk-site-sender" data-sender>[\s\S]*?<\/p>/, '')],
  ['Telefonnummer im Text', ['crisis-number'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<p>Telefon 058 000 00 00</p></main>')],
  ['Telefonlink eingefügt', ['crisis-number'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<p><a href="tel:0580000000">Anrufen</a></p></main>')],
  ['Notfallblock eingefügt', ['crisis-block'], (c, f) => rep(f, 'behandlung-verstehen.html', '<main id="main-content"', '<aside data-safety-access="direct"><p>Akute Hilfe</p></aside><main id="main-content"')],
  ['ß statt ss', ['orthography'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<p>Eine große Hilfe.</p></main>')],
  ['Deutscher Rechtsbegriff', ['swiss-context'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<p>Das Jugendamt hilft weiter.</p></main>')],
  ['Etikettierende Bezeichnung', ['person-first'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<p>Für den Schizophrenen ist das schwer.</p></main>')],
  ['Unzulässige Variante direct', ['safety-contract'], c => { pg(c, 'beziehungen-verstehen').safetyAccess = { variant: 'direct' }; }],
  ['Zuständigkeitsverweis ausserhalb der Fusszeile', ['safety-position'], (c, f) => { const m = /<section class="puk-site-safety[\s\S]*?<\/section>/.exec(f['beziehungen-verstehen.html'] || ''); if (!m) return false; f['beziehungen-verstehen.html'] = f['beziehungen-verstehen.html'].replace(m[0], '').replace('<main id="main-content"', m[0] + '<main id="main-content"'); return true; }],
  ['Zuständigkeitsverweis als geprüft markiert ohne Dokumentation', ['review-doc'], c => { c.responsibility.reviewStatus = 'geprueft'; delete c.responsibility.reviewedBy; delete c.responsibility.reviewedAt; }],
  ['Zuständigkeitsverweis fehlt auf einer Seite', ['safety-target'], (c, f) => rex(f, 'behandlung-verstehen.html', /<section class="puk-site-safety[\s\S]*?<\/section>/, '')],
  ['Hinweis «ersetzt keine Abklärung» fehlt', ['disclaimer'], (c, f) => rex(f, 'index.html', /<p class="puk-web-footer__copy" data-disclaimer>[\s\S]*?<\/p>/, '')],
  ['Seite nicht erreichbar', ['reachability'], (c, f) => { for (const k of Object.keys(f)) if (k !== 'unterstuetzung-finden.html') f[k] = f[k].split('href="unterstuetzung-finden.html').join('href="index.html'); return true; }],
  ['Kreislauf linear (keine Bögen)', ['cycle-geometry'], (c, f) => rep(f, 'beziehungen-verstehen.html', 'class="puk-vis-arc"', 'class="x"', true)],
  ['«Uhrzeigersinn» in schmaler Leserichtung', ['cycle-direction'], (c, f) => rep(f, 'beziehungen-verstehen.html', '<span data-cycle-narrow>', '<span data-cycle-narrow>im Uhrzeigersinn, ')],
  ['Rücksprung zu Station 1 fehlt', ['cycle-return'], (c, f) => rep(f, 'beziehungen-verstehen.html', ' data-cycle-return', '')],
  ['Figur ohne Bildlegende', ['figure-caption'], (c, f) => rex(f, 'behandlung-verstehen.html', /<figcaption[\s\S]*?<\/figcaption>/, '')],
  ['Figur ohne Kennzeichnung', ['figure-source'], (c, f) => rep(f, 'behandlung-verstehen.html', 'Eigene didaktische Darstellung', 'Darstellung', true)],
  ['Figur fehlt im Visualisierungsplan', ['visual-plan'], c => { const p = pg(c, 'behandlung-verstehen'); p.visualPlan = p.visualPlan.filter(v => v.format !== 'comparison'); }],
  ['Bildplatzhalter ohne Freigabestatus', ['placeholder-status'], (c, f) => rep(f, 'beziehungen-verstehen.html', ' data-approval-status="ausstehend"', '')],
  ['Quellenlink ohne sprechendes aria-label', ['link-label'], (c, f) => rep(f, 'behandlung-verstehen.html', '</figcaption>', '<a href="#main-content">Quelle</a></figcaption>')],
  ['Interner Link ins Leere', ['link-target'], (c, f) => rep(f, 'unterstuetzung-finden.html', 'class="puk-link--inline" href="behandlung-verstehen.html"', 'class="puk-link--inline" href="gibt-es-nicht.html"')],
  ['Zwei h1', ['h1'], (c, f) => rep(f, 'index.html', '</main>', '<h1>Zweite Überschrift</h1></main>')],
  ['Visualisierungsplan ohne «understood»', ['visual-plan'], c => { const v = pg(c, 'behandlung-verstehen').visualPlan.find(x => x.format !== 'text'); if (!v) return false; delete v.understood; }],
  ['Inline-Skript eingefügt', ['inline-script'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<script>console.log(1)</script></main>')],
  ['Externer Link in neuem Fenster ohne rel', ['blank-target'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<p><a href="https://www.example.org" target="_blank">Weitere Informationen der Beispielorganisation</a></p></main>')],
  ['Akkordeon ohne Interaktionsskript', ['interaction-script'], (c, f) => rex(f, 'unterstuetzung-finden.html', /<script src="[^"]*interaktion\.js[^"]*" defer><\/script>\n?/, '')],
  ['Figur ohne Kernaussage', ['figure-core'], (c, f) => rep(f, 'behandlung-verstehen.html', 'class="puk-vis-kern"', 'class="puk-vis-x"')],
  ['Abschnitt ohne Zeile im Visualisierungsplan', ['plan-coverage'], c => { const p = pg(c, 'behandlung-verstehen'); const n = p.visualPlan.length; p.visualPlan = p.visualPlan.filter(v => v.sectionId !== 'fragen'); return p.visualPlan.length < n; }],
  ['Planzeile verweist auf fehlenden Abschnitt', ['plan-section'], c => { const v = pg(c, 'behandlung-verstehen').visualPlan.find(x => x.sectionId === 'fragen'); if (!v) return false; v.sectionId = 'gibt-es-nicht'; }],
  ['Ansatzpunkt im Plan fehlt', ['entry-point'], c => { const v = pg(c, 'beziehungen-verstehen').visualPlan.find(x => x.format === 'cycle'); if (!v) return false; delete v.entryPoint; }],
  ['Ansatzpunkt im Plan, nicht in der Figur', ['entry-point'], (c, f) => rex(f, 'beziehungen-verstehen.html', /<p class="puk-vis-ansatz"[\s\S]*?<\/p>/, '')],
  ['Kartenraster mit vielen Karten', ['card-grid'], (c, f) => rep(f, 'behandlung-verstehen.html', '</main>', '<ul class="puk-web-card-list"><li>A</li><li>B</li><li>C</li><li>D</li></ul></main>')],
  ['Entwurf in der Navigation', ['nav', 'link-draft'], (c, f) => rep(f, 'index.html', '</ul></nav>', '<li><a class="puk-web-nav__link" href="seitenvorlage.html">Vorlage</a></li>\n</ul></nav>')]
];
function pg(c, id) { const p = c.pages.find(x => x.id === id); if (!p) throw new Error('Seite ' + id + ' fehlt'); return p; }
function rep(f, file, a, b, every) { if (f[file] == null || !f[file].includes(a)) return false; f[file] = every ? f[file].split(a).join(b) : f[file].replace(a, () => b); return true; }
function rex(f, file, re, b) { if (f[file] == null || !re.test(f[file])) return false; f[file] = f[file].replace(re, b); return true; }
function selftest(cfg, files, opts = {}) {
  const rows = []; const base = opts.exists || (p => Object.prototype.hasOwnProperty.call(files, p));
  const b0 = gate(cfg, files, { mode: 'draft', exists: base });
  rows.push({ name: 'Ausgangslage Entwurf: 0 blockierende Befunde', expected: '0', got: String(b0.blocks), ok: b0.blocks === 0 });
  const unreviewed = {}; for (const [k, v] of Object.entries(files)) unreviewed[k] = typeof v === 'string' ? v.split('data-review-status="geprueft"').join('data-review-status="ausstehend"') : v;
  const bp = gate(Object.assign({}, cfg, { sender: Object.assign({}, cfg.sender, { status: 'placeholder' }), responsibility: cfg.responsibility && Object.assign({}, cfg.responsibility, { reviewStatus: 'ausstehend', reviewedBy: undefined, reviewedAt: undefined }) }), unreviewed, { mode: 'production', exists: base }); /* Absenderin und Zuständigkeitsverweis hier absichtlich ungeklärt, damit die Prüfung belegt bleibt, auch wenn beide freigegeben sind */ const need = ['sender-status', 'safety-review', 'placeholder-approval', 'visual-approval'];
  const hit = need.filter(id => bp.findings.some(x => x.level === 'block' && x.id === id)); const structural = bp.findings.filter(x => x.level === 'block' && !need.includes(x.id));
  rows.push({ name: 'Produktion blockiert ungeklärte Absenderin, Zuständigkeitsverweise, Platzhalter und Visualisierungen', expected: need.join(', ') + ' · keine Strukturfehler', got: hit.join(', ') + ' · ' + (structural.length ? structural.length + ' Strukturfehler' : 'keine Strukturfehler'), ok: hit.length === need.length && !structural.length });
  const done = '| Stufe | Status |\n| --- | --- |\n' + REPORT_STAGES.map(([n]) => `| ${n} | erledigt |`).join('\n');
  const noRep = gate(cfg, files, { mode: 'production', exists: base, report: null }).findings.some(x => x.level === 'block' && x.id === 'review-report');
  rows.push({ name: 'Produktion ohne Prüfbericht blockiert', expected: 'review-report', got: noRep ? 'review-report' : 'nicht erkannt', ok: noRep });
  const fullRep = gate(cfg, files, { mode: 'production', exists: base, report: done }).findings.some(x => x.id === 'review-report');
  rows.push({ name: 'Vollständiger Prüfbericht gibt die Veröffentlichung frei', expected: 'kein review-report', got: fullRep ? 'review-report' : 'kein review-report', ok: !fullRep });
  for (const [name, expect, mut] of MUTATIONS) {
    const c = JSON.parse(JSON.stringify(cfg)); const f = Object.assign({}, files);
    let applied; try { applied = mut(c, f) !== false; } catch (e) { applied = false; }
    if (!applied) { rows.push({ name, expected: expect.join(' oder '), got: 'Mutation nicht anwendbar', ok: false }); continue; }
    const r = gate(c, f, { mode: 'draft', exists: p => Object.prototype.hasOwnProperty.call(f, p) || (!/\.html$/.test(p) && base(p)) });
    const ids = [...new Set(r.findings.filter(x => x.level === 'block' || REVIEW_WARNINGS.includes(x.id)).map(x => x.id))];
    rows.push({ name, expected: expect.join(' oder '), got: ids.join(', ') || 'nicht erkannt', ok: expect.some(e => ids.includes(e)) });
  }
  return rows;
}

/* ---------- Browser: Site laden ---------- */
async function loadSite(base, fetchFn) {
  const get = u => (fetchFn || fetch)(base + u + (u.includes('?') ? '&' : '?') + 'nc=' + Date.now(), { cache: 'no-store' });
  const cfg = await (await get('site.config.json')).json();
  const files = {}; const assets = new Set();
  for (const p of cfg.pages) { const r = await get(p.href); if (r.ok) files[pagePath(p)] = await r.text(); }
  const refs = new Set([resolve('', cfg.favicon).path]);
  for (const [path, html] of Object.entries(files)) { const d = parse(html); for (const x of all(d, y => (y.tag === 'link' && /icon/i.test(y.attrs.rel || '')) || y.tag === 'img' || (y.tag === 'script' && y.attrs.src))) { const u = x.attrs.href || x.attrs.src; if (u && !isExternalUrl(u)) refs.add(resolve(path, u).path); } }
  for (const r of refs) { try { const x = await get(r); if (x.ok) assets.add(r); } catch (e) { /* fehlt */ } }
  return { cfg, files, exists: p => Object.prototype.hasOwnProperty.call(files, p) || assets.has(p) };
}

return { VERSION, BUILD, FORMATS, parse, renderPage, gate, selftest, loadSite, resolve };
});
