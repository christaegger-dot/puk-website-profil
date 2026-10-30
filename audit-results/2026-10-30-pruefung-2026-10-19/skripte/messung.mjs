// Unabhängige Prüfung 2026.10.19: helle Komponenten auf Weiss (w), im blauen Band (b) und auf Nachtblau (n).
// Aufruf: node messung.mjs <repo-stamm> <ausgabe.json> [fotopräfix]
// Gruppen: E = von der Rücksetzregel erfasst (soll wie auf Weiss sein), F = flächenlos/bewusst Bandfarben,
// N = nicht erfasst (Reiter, Formularbeschriftungen, Menüknopf und Kandidaten ohne Eintrag in der Regel).
import {createRequire} from 'node:module';
import fs from 'node:fs';
const [,, root, out, shot] = process.argv;
const require = createRequire(root + '/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');

// [Kennung, Gruppe, HTML] – jede Kennung erhält das Präfix des Behälters.
const T = [
 ['bandtext','F','<span id="@">Bandtext</span>'],['bandlink','F','<a id="@" href="#x">Bandlink</a>'],['bandmuted','F','<span id="@" style="color:var(--text-muted)">Neben</span>'],
 ['bandprim','F','<button id="@" class="puk-btn">Primär</button>'],['bandsec','F','<button id="@" class="puk-btn puk-btn--secondary">Sekundär</button>'],['bandasec','F','<a id="@" class="puk-btn puk-btn--secondary" href="#x">Knopf-Link</a>'],
 ['tint','E','<div data-puk-surface="tint" style="padding:8px"><a id="@link" href="#x">Link</a> <span id="@muted" style="color:var(--text-muted)">Neben</span> <span id="@accent" style="color:var(--text-accent)">Akzent</span> <button id="@sec" class="puk-btn puk-btn--secondary">Sekundär</button> <button id="@ghost" class="puk-btn puk-btn--ghost">Ghost</button> <a id="@asec" class="puk-btn puk-btn--secondary" href="#x">Knopf-Link</a></div>'],
 ['light','E','<div data-puk-light style="background:#fff;padding:8px"><a id="@link" href="#x">Link</a> <span id="@text">Text</span> <span id="@muted" style="color:var(--text-muted)">Neben</span> <button id="@sec" class="puk-btn puk-btn--secondary">Sekundär</button></div>'],
 ['dlg','E','<dialog id="@" class="puk-dialog" style="position:static"><div class="puk-dialog__head"><h2 id="@title" class="puk-dialog__title">Dialog</h2><button id="@close" class="puk-dialog__close" aria-label="Schliessen">×</button></div><p id="@text">Text <a id="@link" href="#x">Link</a> <button id="@sec" class="puk-btn puk-btn--secondary">Sekundär</button></p></dialog>'],
 ['filter','E','<div class="puk-filter"><input id="@input" class="puk-filter__input" value="Suche" aria-label="Suche"><p id="@status" class="puk-filter__status">3 Treffer</p></div>'],
 ['lf','E','<figure class="puk-longform__figure"><span id="@fig">Figur</span> <a id="@figlink" href="#x">Link</a><div class="puk-longform__figure-side"><span id="@side">Seite</span></div></figure><div class="puk-longform__support"><span id="@support">Stütze</span></div><div class="puk-longform__reflection"><p id="@refl">Reflexion</p><textarea id="@reflta" aria-label="R">Text</textarea></div><div class="puk-longform__term-guide"><div><span id="@term">Begriff</span></div></div>'],
 ['media','E','<div class="puk-web-media" id="@">Bild</div>'],
 ['draft','E','<span class="puk-site-draft" id="@">Entwurf</span>'],
 ['vis','E','<figure class="puk-vis-figure"><p class="puk-vis-label" id="@label">Erklärgrafik</p><div class="puk-vis-compare"><div class="puk-vis-compare__col"><p class="puk-vis-compare__key" id="@key">A</p><h3 id="@h3">Spalte</h3><dl><dt id="@dt">Merkmal</dt><dd id="@dd">Wert</dd></dl></div></div><ol class="puk-vis-cycle"><li id="@cycle">Kreis</li></ol><div class="puk-vis-decision"><div class="puk-vis-decision__branch"><span id="@branch">Zweig</span></div></div><div class="puk-vis-tablewrap"><table><tr><td id="@td">Zelle</td></tr></table></div><div class="puk-vis-illu"><p class="puk-vis-illu__stamp" id="@stamp">Platzhalter</p></div><button class="puk-vis-btn" id="@btn">Erklärknopf</button><div class="puk-vis-layers"><div class="puk-vis-layers__zone"><h3 id="@layh3">Schicht</h3><ul><li id="@layli">Eintrag</li></ul></div></div><figcaption class="puk-vis-caption" id="@cap">Legende <a id="@a" href="#x">Link</a></figcaption></figure><ol class="puk-vis-decide"><li id="@decide">Schritt</li></ol><div class="puk-vis-longdesc"><p id="@long">Langbeschreibung</p></div>'],
 ['open','F','<figure class="puk-vis-figure puk-vis-figure--open"><p class="puk-vis-label" id="@label">Offen</p><div class="puk-vis-illu"><p class="puk-vis-illu__stamp" id="@stamp">Platzhalter</p></div></figure>'],
 ['openn','N','<figure class="puk-vis-figure puk-vis-figure--open"><ul class="puk-vis-overlap"><li id="@overlap">Überschneidung</li></ul><div class="puk-vis-layers"><div class="puk-vis-layers__zone"><ul><li id="@layli">Schicht offen</li></ul></div></div><button class="puk-vis-btn" id="@btn">Knopf offen</button></figure>'],
 ['site','N','<div class="puk-site-placeholder"><p id="@ph">Platzhalter des Starters</p></div><div class="puk-site-safety puk-site-safety--direct"><div class="puk-site-safety__inner"><p class="puk-site-safety__title" id="@safety">Sicherheitsleiste</p></div></div><p class="puk-site-draftbar" id="@draftbar">Entwurfsleiste</p>'],
 ['app','N','<div class="puk-app-card"><span class="puk-app-kicker" id="@kicker">Kicker</span><h3 id="@h3">Karte</h3><p id="@p">Text</p></div><button class="puk-app-chip" id="@chip">Chip</button><button class="puk-app-choice" id="@choice">Wahl</button><div class="puk-app-boundary" id="@boundary">Grenze</div><div class="puk-app-output"><p id="@output">Ausgabe</p></div><div class="puk-app-empty"><p id="@empty">Leer</p></div><input class="puk-app-search" id="@search" value="Suche" aria-label="S">'],
 ['react','E',''],['reactf','F',''],['reactn','N','']
];
const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Messung 2026.10.19</title>
<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/templates/website/longform/visual-patterns.css"><link rel="stylesheet" href="/templates/website/longform/erklaermuster.css"><link rel="stylesheet" href="/templates/website/psychoeducation-site-starter/starter.css"><link rel="stylesheet" href="/templates/website/applications/applications.css">
<script src="/platform/vendor/react.production.min.js"></script><script src="/platform/vendor/react-dom.production.min.js"></script><script src="/components/bundle.js"></script>
<style>*{transition:none!important;animation:none!important}.box{display:grid;gap:10px;padding:16px}.box>*{max-width:620px}.puk-dialog-backdrop{position:static!important;background:none!important}.puk-vis-net__ring li{position:static!important}</style></head>
<body class="puk-web-page"><main><p id="leer">Leer</p>
<div id="w" class="box"></div><section id="b" class="puk-web-band box"></section><section id="n" class="puk-web-band box" data-puk-surface="night"></section></main>
<script src="/__messung.js"></script></body></html>`;
const js = `const h=React.createElement,K=window.PUKWeb,T=${JSON.stringify(T)};
for(const p of ['w','b','n']){const box=document.getElementById(p);
 for(const [k,g,s] of T){const d=document.createElement('div');d.dataset.gruppe=g;d.dataset.k=k;d.innerHTML=s.replace(/id="@/g,'id="'+p+'-'+k);box.appendChild(d);}
 box.insertAdjacentHTML('beforeend','<section class="puk-web-band" data-puk-surface="night" style="padding:8px"><span id="'+p+'-nntext">Nachtblau in Nachtblau</span> <a id="'+p+'-nnlink" href="#x">Link</a></section>');
 const dl=document.getElementById(p+'-dlg');dl.show();
 ReactDOM.createRoot(box.querySelector('[data-k="react"]')).render(h(React.Fragment,null,
  h(K.Card,{eyebrow:'Eyebrow',title:'Karte',footer:h(K.Button,{variant:'secondary',id:p+'-rcsec'},'Sekundär')},h('span',{id:p+'-rctext'},'Inhalt '),h('a',{id:p+'-rclink',href:'#x'},'Link')),
  h(K.Card,{variant:'sunken',title:'Versenkt'},h('a',{id:p+'-rslink',href:'#x'},'Link')),
  h(K.Alert,{title:'Hinweis'},h('span',{id:p+'-ratext'},'Text '),h('a',{id:p+'-ralink',href:'#x'},'Link')),
  h(K.Toast,{title:'Toast'},h('b',{id:p+'-rtoast'},'Nachricht')),
  h(K.Input,{id:p+'-rinput',defaultValue:'Eingabe','aria-label':'Eingabe'}),
  h(K.Select,{id:p+'-rselect','aria-label':'Auswahl',options:['Eins','Zwei']}),
  h(K.Textarea,{id:p+'-rtextarea',defaultValue:'Text','aria-label':'Text'}),
  h('div',{id:p+'-rmenu'},h(K.DisclosureMenu,{label:'Menü',items:[{label:'Eintrag',href:'#x'}]})),
  h('div',{id:p+'-rkar'},h(K.Carousel,{label:'Karussell',items:[{title:'Eins',content:h('span',{id:p+'-rslide'},'Folieninhalt')},{title:'Zwei'}]})),
  h('div',{id:p+'-rdialog'},h(K.Dialog,{open:true,title:'React-Dialog'},h('span',{id:p+'-rdtext'},'Dialogtext'))) ));
 ReactDOM.createRoot(box.querySelector('[data-k="reactf"]')).render(h(React.Fragment,null,
  h(K.Card,{variant:'brand',title:'Brand'},h('span',{id:p+'-rbrand'},'Brandtext')),
  h(K.Card,{variant:'inverse',title:'Invers'},h('span',{id:p+'-rinverse'},'Inverstext')),
  h(K.Alert,{tone:'emergency',title:'Notfall'},h('span',{id:p+'-remerg'},'Notfalltext')),
  h(K.Button,{variant:'inverse',id:p+'-rbinv'},'Invers-Knopf'),
  h(K.Button,{variant:'secondary',id:p+'-rbsec'},'React-Sekundär')));
 ReactDOM.createRoot(box.querySelector('[data-k="reactn"]')).render(h(React.Fragment,null,
  h('div',{id:p+'-rtabs'},h(K.Tabs,{items:[{value:'a',label:'Reiter A'},{value:'b',label:'Reiter B'}],defaultValue:'a'})),
  h(K.Checkbox,{label:'Kontrollkästchen',id:p+'-rcheck'}),
  h(K.Radio,{label:'Option',name:p+'r',id:p+'-rradio'}),
  h('div',{id:p+'-rswitch'},h(K.Switch,{label:'Schalter'})),
  h('div',{id:p+'-rmenuk'},h(K.DisclosureMenu,{label:'Menüknopf',items:[{label:'X',href:'#x'}]})),
  h('div',{id:p+'-rtable'},h(K.Table,{columns:[{key:'a',label:'Spalte'}],rows:[{a:'Zelle'}]})),
  h(K.Badge,{id:p+'-rbadge'},'Badge'),
  h('div',{id:p+'-rtag'},h(K.Tag,null,'Tag')),
  h('div',{id:p+'-racc'},h(K.Accordion,{items:[{title:'Akkordeon',content:'Inhalt'}]}))));
}
setTimeout(()=>{window.__bereit=true;},300);`;

const ziele = p => {
 const L = [];
 const add = (k, g, sel) => L.push({k, g, sel: sel || '#' + p + '-' + k});
 for (const k of ['bandtext','bandlink','bandmuted','bandprim','bandsec','bandasec']) add(k,'F');
 for (const s of ['link','muted','accent','sec','ghost','asec']) add('tint'+s,'E');
 for (const s of ['link','text','muted','sec']) add('light'+s,'E');
 for (const s of ['title','close','text','link','sec']) add('dlg'+s,'E');
 for (const s of ['input','status']) add('filter'+s,'E');
 for (const s of ['fig','figlink','side','support','refl','reflta','term']) add('lf'+s,'E');
 add('media','E'); add('draft','E');
 for (const s of ['label','key','h3','dt','dd','cycle','branch','td','stamp','btn','layh3','layli','cap','a','decide','long']) add('vis'+s,'E');
 add('openlabel','F'); add('openstamp','E');
 for (const s of ['overlap','layli','btn']) add('openn'+s,'N');
 for (const s of ['ph','safety','draftbar']) add('site'+s,'N');
 for (const s of ['kicker','h3','p','chip','choice','boundary','output','empty','search']) add('app'+s,'N');
 for (const k of ['rcsec','rctext','rclink','rslink','ratext','ralink','rtoast','rinput','rselect','rtextarea','rslide','rdtext']) add(k,'E');
 add('reyebrow','E','#' + p + ' [data-k="react"] > div > div span');
 add('rmenulink','E','#' + p + '-rmenu .puk-disclosure__link');
 add('rkarbtn','E','#' + p + '-rkar .puk-carousel__btn:last-of-type');
 add('rkartitle','E','#' + p + '-rkar .puk-carousel__title');
 add('rkarstatus','F','#' + p + '-rkar .puk-carousel__status');
 for (const k of ['rbrand','rinverse','remerg','rbinv','rbsec','nntext','nnlink']) add(k,'F');
 add('rtab','N','#' + p + '-rtabs [role="tab"]');
 add('rchecklabel','N','#' + p + ' [data-k="reactn"] label');
 add('rswitchlabel','N','#' + p + '-rswitch label');
 add('rmenubtn','N','#' + p + '-rmenu .puk-disclosure__button');
 add('rtablecell','N','#' + p + '-rtable tbody tr > *');
 add('rbadge','N'); add('rtag','N','#' + p + '-rtag span');
 add('racc','N','#' + p + '-racc button');
 return L;
};

const messen = (sel) => {
 const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const v = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number); return {r:v[0],g:v[1],b:v[2],a:v.length>3?v[3]:1}; };
 const e = document.querySelector(sel); if (!e) return {fehlt:true};
 const s = getComputedStyle(e);
 // wirksamer Hintergrund: Ebenen von innen nach aussen zusammensetzen
 const layers = []; let x = e;
 while (x) { const c = parse(getComputedStyle(x).backgroundColor); if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break; } x = x.parentElement; }
 let bg = {r:255,g:255,b:255};
 for (let i = layers.length - 1; i >= 0; i--) { const c = layers[i]; bg = {r:c.r*c.a+bg.r*(1-c.a), g:c.g*c.a+bg.g*(1-c.a), b:c.b*c.a+bg.b*(1-c.a)}; }
 const fg = parse(s.color);
 const lum = c => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }; return 0.2126*f(c.r)+0.7152*f(c.g)+0.0722*f(c.b); };
 const L1 = lum(fg), L2 = lum(bg); const k = (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
 const hex = c => '#' + [c.r,c.g,c.b].map(v => Math.round(v).toString(16).padStart(2,'0')).join('').toUpperCase();
 return {display:s.display, color:s.color, bg:s.backgroundColor, border:s.borderTopColor, shadow:s.boxShadow, deko:s.textDecorationLine, wirkBg:hex(bg), fgHex:hex(fg), kontrast:Math.round(k*100)/100};
};

const server = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const result = {stamm:root, browser:browser.version(), themes:{}};
for (const theme of ['light','kontrast']) {
 const page = await browser.newPage({viewport:{width:1280,height:900}});
 const errors = []; page.on('pageerror', e => errors.push(String(e)));
 await page.route(server.url + '__messung.html', r => r.fulfill({contentType:'text/html', body: theme === 'kontrast' ? html.replace('<html lang="de">','<html lang="de" data-theme="kontrast">') : html}));
 await page.route(server.url + '__messung.js', r => r.fulfill({contentType:'text/javascript', body: js}));
 await page.goto(server.url + '__messung.html', {waitUntil:'load'});
 await page.waitForFunction(() => window.__bereit);
 for (const p of ['w','b','n']) await page.click('#' + p + '-rmenu .puk-disclosure__button');
 await page.hover('#leer');
 if (shot) await page.screenshot({path:`${shot}-${theme}-1280.png`, fullPage:true});
 const cdp = await page.context().newCDPSession(page); await cdp.send('DOM.enable'); await cdp.send('CSS.enable');
 const {root: doc} = await cdp.send('DOM.getDocument', {depth:-1});
 const R = {};
 for (const p of ['w','b','n']) for (const z of ziele(p)) {
  const key = p + '-' + z.k; const r = {gruppe:z.g, selektor:z.sel};
  r.ruhe = await page.evaluate(messen, z.sel);
  if (r.ruhe.fehlt) { R[key] = r; continue; }
  try { await page.hover(z.sel, {timeout:1500, force:true}); r.hover = await page.evaluate(messen, z.sel); } catch (e) { r.hover = {fehler:String(e).slice(0,80)}; }
  await page.hover('#leer', {force:true});
  for (const [name, forced] of [['fokus',['focus','focus-visible']],['gedrueckt',['active','focus','focus-visible']]]) {
   const {nodeId} = await cdp.send('DOM.querySelector', {nodeId:doc.nodeId, selector:z.sel});
   await cdp.send('CSS.forcePseudoState', {nodeId, forcedPseudoClasses:forced});
   r[name] = await page.evaluate(messen, z.sel);
   await cdp.send('CSS.forcePseudoState', {nodeId, forcedPseudoClasses:[]});
  }
  R[key] = r;
 }
 await page.emulateMedia({media:'print'});
 for (const p of ['w','b','n']) for (const z of ziele(p)) { const key = p + '-' + z.k; if (!R[key].ruhe.fehlt) R[key].druck = await page.evaluate(messen, z.sel); }
 result.themes[theme] = {werte:R, fehler:errors};
 await page.close();
}
await browser.close(); await server.close();
fs.writeFileSync(out, JSON.stringify(result, null, 1));
console.log('geschrieben', out, result.browser);
