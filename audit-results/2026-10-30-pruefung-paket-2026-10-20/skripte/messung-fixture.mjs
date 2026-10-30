export const items = [
 // Anwendungsmuster (applications.css)
 ['appcard', X => `<div class="puk-app-card puk-app-card--accent" id="${X}-appcard"><span class="puk-app-kicker" id="${X}-appkicker">Kicker</span><h3 id="${X}-apph3">Kartentitel</h3><p id="${X}-appp">Nebentext mit <a id="${X}-appa" href="#x">Link</a></p><p class="puk-longform__kicker" id="${X}-appaccent">Akzent</p><button class="puk-btn puk-btn--secondary" id="${X}-appsec">Sekundär</button> <button class="puk-btn puk-btn--ghost" id="${X}-appghost">Ghost</button> <button class="puk-app-mini" id="${X}-appmini">Mini</button></div>`],
 ['chip', X => `<div><button class="puk-app-chip" id="${X}-chip">Chip</button> <button class="puk-app-chip" aria-pressed="true" id="${X}-chipon">Chip an</button></div>`],
 ['choice', X => `<div><button class="puk-app-choice" id="${X}-choice"><strong id="${X}-choicest">Wahl</strong>Text</button> <button class="puk-app-choice" aria-pressed="true" id="${X}-choiceon"><strong id="${X}-choiceonst">Gewählt</strong>Text <a id="${X}-choiceona" href="#x">Link</a></button> <button class="puk-app-choice" data-level="urgent" id="${X}-choiceurg">Dringend</button></div>`],
 ['boundary', X => `<p class="puk-app-boundary" id="${X}-boundary">Grenze mit <a id="${X}-boundarya" href="#x">Link</a></p>`],
 ['mini', X => `<button class="puk-app-mini" id="${X}-mini">Mini allein <a id="${X}-minia" href="#x">Link</a></button>`],
 ['detail', X => `<div class="puk-app-detail" id="${X}-detail"><h2 id="${X}-detailh2">Detail</h2><p id="${X}-detailp">Text mit <a id="${X}-detaila" href="#x">Link</a></p></div><div class="puk-app-detail" data-level="urgent" id="${X}-detailurg"><p id="${X}-detailurgp">Dringend <a id="${X}-detailurga" href="#x">Link</a></p></div><div class="puk-app-detail" data-level="emergency" id="${X}-detailem"><p id="${X}-detailemp">Notfallfläche (Testtext)</p></div>`],
 ['output', X => `<div class="puk-app-output" id="${X}-output"><h2 id="${X}-outputh2">Ergebnis</h2><dl><dt id="${X}-outputdt">Begriff</dt><dd id="${X}-outputdd">Wert <a id="${X}-outputa" href="#x">Link</a></dd></dl><p class="puk-app-meta" id="${X}-outputmeta">Meta</p></div>`],
 ['empty', X => `<div class="puk-app-empty" id="${X}-empty">Leer mit <a id="${X}-emptya" href="#x">Link</a></div>`],
 ['contact', X => `<div class="puk-app-contact-target" tabindex="-1" id="${X}-contact"><h2 id="${X}-contacth2">Kontakt</h2><p id="${X}-contactp">Text <a id="${X}-contacta" href="#x">Link</a></p></div>`],
 ['search', X => `<input class="puk-app-search" id="${X}-search" value="Suche" aria-label="Suche">`],
 ['action', X => `<a class="puk-app-action" id="${X}-action" href="#x">Aktion</a>`],
 // Starter (starter.css)
 ['placeholder', X => `<div class="puk-site-placeholder" id="${X}-ph"><p><span class="puk-site-draft" id="${X}-phdraft">Entwurf · Platzhalter</span></p><p id="${X}-php">Platzhaltertext <a id="${X}-pha" href="#x">Link</a></p></div>`],
 ['safety', X => `<div class="puk-site-safety puk-site-safety--direct" id="${X}-safety"><div class="puk-site-safety__inner"><p class="puk-site-safety__title" id="${X}-safetyt">Titel der Leiste</p><a class="puk-link--action" id="${X}-safetya" href="#x">Weiterer Weg</a><p id="${X}-safetyp">Text</p></div></div>`],
 // Erklärmuster (erklaermuster.css), direkt und in einer offenen Figur
 ['layers', X => `<div class="puk-vis-layers" id="${X}-lay"><div class="puk-vis-layers__zone"><h3 id="${X}-layh3">Sichtbar</h3><ul><li id="${X}-layli">Schicht</li></ul></div><div class="puk-vis-layers__zone puk-vis-layers__zone--below"><h3 id="${X}-laybh3">Darunter</h3><ul><li id="${X}-laybli">Schicht <a id="${X}-layba" href="#x">Link</a></li></ul></div></div>`],
 ['visbtn', X => `<div><button class="puk-vis-btn" id="${X}-visbtn">Erklärknopf</button> <button class="puk-vis-btn" aria-pressed="true" id="${X}-visbtnon">Gedrückt</button> <button class="puk-vis-btn" disabled id="${X}-visbtndis">Aus</button></div>`],
 ['open', X => `<figure class="puk-vis-figure puk-vis-figure--open" id="${X}-open"><div class="puk-vis-layers"><div class="puk-vis-layers__zone"><ul><li id="${X}-openlayli">Schicht offen</li></ul></div></div><button class="puk-vis-btn" id="${X}-openbtn">Knopf offen</button><ol class="puk-vis-build__steps"><li><span class="puk-vis-build__n" id="${X}-openbuildn">1</span></li></ol><section class="puk-vis-balance__hold" id="${X}-openhold"><h3 id="${X}-openholdh3">Halt</h3><p id="${X}-openholdp">Text <a id="${X}-openholda" href="#x">Link</a></p></section><div class="puk-vis-net" style="aspect-ratio:auto"><ul class="puk-vis-net__ring puk-vis-net__ring--1"><h3 id="${X}-openneth3">Ring</h3><li class="puk-vis-net__slot--1" id="${X}-opennetli">Person</li></ul></div></figure>`],
 ['figure', X => `<figure class="puk-vis-figure" id="${X}-fig"><section class="puk-vis-balance__hold" id="${X}-fighold"><p id="${X}-figholdp">Text <a id="${X}-figholda" href="#x">Link</a></p></section><ul class="puk-vis-net__ring"><h3 id="${X}-figneth3">Ring</h3><li id="${X}-fignetli">Person</li></ul><span class="puk-vis-build__n" id="${X}-figbuildn">2</span></figure>`],
 // Bandinhalt ohne eigene Fläche (Vergleich: soll Bandfarben behalten)
 ['band', X => `<p id="${X}-text">Bandtext mit <a id="${X}-a" href="#x">Link</a></p><p class="puk-longform__kicker" id="${X}-kicker">Kicker</p>`],
];
// Interaktive Elemente: Hover, Fokus (sichtbar) und gedrückt messen.
export const interaktiv = ['appa', 'appsec', 'appghost', 'appmini', 'chip', 'chipon', 'choice', 'choiceon', 'boundarya', 'mini', 'detaila', 'outputa', 'emptya', 'contact', 'contacta', 'search', 'action', 'pha', 'safetya', 'layba', 'visbtn', 'visbtnon', 'openbtn', 'openholda', 'a'];

export const html = theme => `<!doctype html><html lang="de"${theme === 'kontrast' ? ' data-theme="kontrast"' : ''}><head><meta charset="utf-8"><title>Fixture</title>
<link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="templates/website/longform/visual-patterns.css"><link rel="stylesheet" href="templates/website/longform/erklaermuster.css">
<link rel="stylesheet" href="templates/website/psychoeducation-site-starter/starter.css"><link rel="stylesheet" href="templates/website/applications/applications.css">
<style>*{transition:none!important;animation:none!important}.box{display:grid;gap:10px;padding:16px}.box>*{max-width:620px}.puk-vis-net__ring li,.puk-vis-net__ring h3{position:static!important;transform:none!important}</style></head>
<body class="puk-web-page"><main>
<h2>Weiss</h2><div class="box" id="w">${items.map(([, f]) => f('w')).join('\n')}</div>
<section class="puk-web-band"><div class="box" id="b">${items.map(([, f]) => f('b')).join('\n')}</div></section>
<section class="puk-web-band" data-puk-surface="night"><div class="box" id="n">${items.map(([, f]) => f('n')).join('\n')}</div></section>
</main></body></html>`;

