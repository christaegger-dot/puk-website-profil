/* Gate-Bericht im Browser (gate.html): lädt site.config.json und die gebauten Seiten, prüft sie mit tools/contract.js.
   Ausgelagert, damit die Seite ohne Inline-Skript mit der Content-Security-Policy aus _headers läuft (11.10.2026). */
(async () => {
  const C = window.PUKSiteContract; const e = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const table = (id, cap, head, rows) => { const w = document.getElementById(id); w.setAttribute('role', 'region'); w.setAttribute('tabindex', '0'); w.setAttribute('aria-label', cap); w.innerHTML = `<table><caption>${e(cap)}</caption><thead><tr>${head.map(h => `<th scope="col">${e(h)}</th>`).join('')}</tr></thead><tbody>${rows.join('') || `<tr><td colspan="${head.length}">keine</td></tr>`}</tbody></table>`; };
  try {
    const { cfg, files, exists, report } = await C.loadSite('');
    table('pages', 'Seiten laut site.config.json', ['Seite', 'Status', 'Navigation', 'Hauptaufgabe', 'Sensible Themen', 'Zuständigkeitsverweis (site-weit)'], cfg.pages.map(p => `<tr><th scope="row">${e(p.title)}<br>${e(p.href)}</th><td>${e(p.status)}</td><td>${e(p.navLabel || '–')}</td><td>${e(p.primaryTask)}</td><td>${e((p.sensitiveTopics || []).join(', ') || '–')}</td><td>${e(cfg.responsibility ? 'Fusszeile · ' + (cfg.responsibility.reviewStatus || '–') : 'keiner')}</td></tr>`));
    document.getElementById('plan').innerHTML = cfg.pages.map((p, i) => `<h3>${e(p.title)}</h3><div class="wrap" id="plan-${i}"></div>`).join('');
    cfg.pages.forEach((p, i) => table('plan-' + i, 'Visualisierungsplan: ' + p.title, ['Abschnitt', 'Erkenntnisziel', 'Format', 'Aussage', 'Quelle / Kennzeichnung', 'Textalternative', 'Begründung', 'Freigabe'], (p.visualPlan || []).map(v => `<tr><th scope="row">${e(v.section)}</th><td>${e(v.goal)}</td><td>${e(v.format)}</td><td>${e(v.statement)}</td><td>${e(v.source)}</td><td>${e(v.alternative)}</td><td>${e(v.reason)}</td><td>${e(v.approvalStatus)}</td></tr>`)));
    const rowsOf = r => r.findings.map(f => `<tr class="${f.level}"><td>${f.level === 'block' ? 'blockiert' : 'Hinweis'}</td><td>${e(f.page)}</td><td>${e(f.id)}</td><td>${e(f.msg)}</td></tr>`);
    const d = C.gate(cfg, files, { mode: 'draft', exists, report }); const pr = C.gate(cfg, files, { mode: 'production', exists, report });
    table('draft', `Entwurf: ${d.blocks} blockierend, ${d.warns} Hinweise`, ['Stufe', 'Seite', 'Prüfung', 'Befund'], rowsOf(d));
    table('prod', `Produktion: ${pr.blocks} blockierend`, ['Stufe', 'Seite', 'Prüfung', 'Befund'], rowsOf(pr));
    /* Selbsttest wie node tools/gate.mjs --selftest an der festen Referenz in tools/selftest/, nicht an dieser Website
       (Paket 2026.10.2, P-8: in einer Website-Kopie zeigte gate.html sonst z. B. 22/68 statt 68/68). */
    const get = u => fetch('tools/selftest/' + u + '?nc=' + Date.now(), { cache: 'no-store' });
    const tcfg = await (await get('site.config.json')).json(); const tfiles = {};
    for (const p of tcfg.pages) tfiles[C.resolve('', p.href).path] = C.renderPage(tcfg, p, await (await get('content/' + p.id + '.html')).text());
    const st = C.selftest(tcfg, tfiles, { exists: p => p in tfiles || !p.endsWith('.html') }); const fail = st.filter(r => !r.ok).length;
    table('self', `Selbsttest: ${st.length - fail} von ${st.length} bestanden`, ['Fehlerklasse', 'Erwartet', 'Erkannt'], st.map(r => `<tr class="${r.ok ? 'ok' : 'fail'}"><th scope="row">${e(r.name)}</th><td>${e(r.expected)}</td><td>${e(r.got)}</td></tr>`));
    window.__gate = { draft: d, prod: pr, self: st };
    document.getElementById('summary').textContent = `Entwurf: ${d.blocks} blockierend · Produktion: ${pr.blocks} blockierend (erwartet: offene Freigaben) · Selbsttest: ${st.length - fail}/${st.length} bestanden`;
  } catch (err) { document.getElementById('summary').textContent = 'Gate konnte nicht laufen: ' + err.message + ' (Seite über einen lokalen Webserver öffnen).'; }
})();
