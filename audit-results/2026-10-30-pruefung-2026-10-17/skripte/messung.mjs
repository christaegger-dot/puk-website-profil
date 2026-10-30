// Unabhängige Prüfung 2026.10.17: helle Komponenten auf Weiss, im blauen Band und auf Nachtblau.
// Aufruf: node messung.mjs <repo-root> <ausgabe.json> [screenshot-praefix]
import {createRequire} from 'node:module';
import fs from 'node:fs';
const [,, root, out, shot] = process.argv;
const require = createRequire(root + '/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');

const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Messung</title>
<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/templates/website/longform/visual-patterns.css">
<script src="/platform/vendor/react.production.min.js"></script><script src="/platform/vendor/react-dom.production.min.js"></script><script src="/components/bundle.js"></script>
<style>*{transition:none!important;animation:none!important}.box{display:grid;gap:12px;padding:16px}.box>*{max-width:560px}</style></head>
<body class="puk-web-page"><main><p id="leer">Leer</p><a id="pa" href="#p">Seitenlink</a>
<div id="w" class="box"></div><section id="b" class="puk-web-band box"></section><section id="n" class="puk-web-band box" data-puk-surface="night"></section></main>
<script src="/__messung.js"></script></body></html>`;

const js = `const h=React.createElement,K=window.PUKWeb;
for(const p of ['w','b','n']){const box=document.getElementById(p);box.insertAdjacentHTML('beforeend',
'<span id="'+p+'-bandtext">Bandtext</span> <a id="'+p+'-bandlink" href="#x">Bandlink</a> <span id="'+p+'-bandmuted" style="color:var(--text-muted)">Neben</span>'+
'<span><button id="'+p+'-bandprim" class="puk-btn">Primär</button> <button id="'+p+'-bandsec" class="puk-btn puk-btn--secondary">Sekundär</button> <a id="'+p+'-bandasec" class="puk-btn puk-btn--secondary" href="#x">Knopf-Link</a></span>'+
'<div data-puk-surface="tint" style="padding:8px"><a id="'+p+'-tlink" href="#x">Link</a> <span id="'+p+'-tmuted" style="color:var(--text-muted)">Neben</span> <span id="'+p+'-taccent" style="color:var(--text-accent)">Akzent</span> <button id="'+p+'-tsec" class="puk-btn puk-btn--secondary">Sekundär</button> <button id="'+p+'-tghost" class="puk-btn puk-btn--ghost">Ghost</button> <a id="'+p+'-tasec" class="puk-btn puk-btn--secondary" href="#x">Knopf-Link</a> <button id="'+p+'-tprim" class="puk-btn">Primär</button></div>'+
'<div data-puk-light style="background:#fff;padding:8px"><a id="'+p+'-llink" href="#x">Link</a> <span id="'+p+'-ltext">Text</span> <span id="'+p+'-lmuted" style="color:var(--text-muted)">Neben</span> <button id="'+p+'-lsec" class="puk-btn puk-btn--secondary">Sekundär</button></div>'+
'<dialog id="'+p+'-dlg" class="puk-dialog"><div class="puk-dialog__head"><h2 id="'+p+'-dtitle" class="puk-dialog__title">Dialog</h2><button id="'+p+'-dclose" class="puk-dialog__close" aria-label="Schliessen">×</button></div><p id="'+p+'-dtext" style="padding:0 24px">Text <a id="'+p+'-dlink" href="#x">Link</a> <button id="'+p+'-dsec" class="puk-btn puk-btn--secondary">Sekundär</button></p></dialog>'+
'<div class="puk-filter"><input id="'+p+'-finput" class="puk-filter__input" value="Suche" aria-label="Suche"><p id="'+p+'-fstatus" class="puk-filter__status">3 Treffer</p></div>'+
'<figure class="puk-longform__figure"><span id="'+p+'-lftext">Figurtext</span> <a id="'+p+'-lflink" href="#x">Link</a></figure>'+
'<div class="puk-longform__support"><span id="'+p+'-lstext">Stütze</span> <a id="'+p+'-lslink" href="#x">Link</a></div>'+
'<div class="puk-web-media" id="'+p+'-media">Bild</div>'+
'<div class="puk-vis-compare"><div class="puk-vis-compare__col"><p id="'+p+'-vkey" class="puk-vis-compare__key">A</p><h3 id="'+p+'-vh3">Vergleich</h3></div><div class="puk-vis-compare__col puk-vis-compare__col--b"><p class="puk-vis-compare__key">B</p><h3>Zwei</h3></div></div>'+
'<span class="puk-site-draft" id="'+p+'-draft">Entwurf</span>'+
'<div id="'+p+'-react"></div>');
 ReactDOM.createRoot(document.getElementById(p+'-react')).render(h('div',{style:{display:'grid',gap:12}},
  h(K.Card,{eyebrow:'Eyebrow',title:'Karte',footer:h(K.Button,{variant:'secondary',id:p+'-csec'},'Sekundär')},h('span',{id:p+'-ctext'},'Inhalt '),h('a',{id:p+'-clink',href:'#x'},'Link')),
  h(K.Card,{variant:'sunken',title:'Versenkt'},h('a',{id:p+'-slink',href:'#x'},'Link')),
  h(K.Card,{variant:'brand',title:'Marke'},h('span',{id:p+'-brtext'},'Text '),h('a',{id:p+'-brlink',href:'#x'},'Link')),
  h(K.Card,{variant:'inverse',title:'Invers'},h('span',{id:p+'-ivtext'},'Text '),h('a',{id:p+'-ivlink',href:'#x'},'Link')),
  h(K.Alert,{title:'Hinweis'},h('a',{id:p+'-alink',href:'#x'},'Link')),
  h(K.Alert,{title:'Notfall',tone:'emergency'},h('span',{id:p+'-etext'},'Text '),h('a',{id:p+'-elink',href:'#x'},'Link')),
  h(K.Toast,{title:'Toast'},h('span',{id:p+'-toast'},'Nachricht')),
  h(K.Input,{id:p+'-input',defaultValue:'Eingabe','aria-label':'Eingabe'}),
  h(K.Select,{id:p+'-select','aria-label':'Auswahl',options:['Eins','Zwei']}),
  h(K.Textarea,{id:p+'-textarea',defaultValue:'Text','aria-label':'Text'}),
  h(K.Checkbox,{label:'Kontrollkästchen',id:p+'-check'}),
  h(K.Tabs,{items:['Reiter A','Reiter B']}),
  h(K.Carousel,{label:'Karussell',items:[{title:'Folie',content:h('a',{href:'#x',id:p+'-klink'},'Link')},{title:'Zwei'}]}),
  h(K.DisclosureMenu,{label:'Menü',items:[{label:'Eintrag',href:'#x',description:'Beschreibung'}]})));}
window.__ready=true;`;

const ids = ['bandtext','bandlink','bandmuted','bandprim','bandsec','bandasec','tlink','tmuted','taccent','tsec','tghost','tasec','tprim','llink','ltext','lmuted','lsec','dtitle','dclose','dtext','dlink','dsec','finput','fstatus','lftext','lflink','lstext','lslink','media','vkey','vh3','draft','csec','ctext','clink','slink','brtext','brlink','ivtext','ivlink','alink','etext','elink','toast','input','select','textarea'];
const extra = p => ({karbtn:`#${p}-react .puk-carousel__btn:last-of-type`, karstatus:`#${p}-react .puk-carousel__status`, kartitle:`#${p}-react .puk-carousel__title`, klink:`#${p}-klink`, discbtn:`#${p}-react .puk-disclosure__button`, disclink:`#${p}-react .puk-disclosure__link`, cardeyebrow:`#${p}-react [data-puk-light] span`, checklabel:`#${p}-react label`, tab:`#${p}-react [role="tab"]`});

const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const result = {};
for (const theme of ['light','kontrast']) {
  const page = await browser.newPage({viewport:{width:1280,height:900}});
  const errors = []; page.on('pageerror', e => errors.push(String(e)));
  await page.route(srv.url + 'messung.html', r => r.fulfill({contentType:'text/html', body: theme==='kontrast' ? html.replace('<html lang="de">','<html lang="de" data-theme="kontrast">') : html}));
  await page.route(srv.url + '__messung.js', r => r.fulfill({contentType:'text/javascript', body: js}));
  await page.goto(srv.url + 'messung.html', {waitUntil:'load'});
  await page.waitForFunction(() => window.__ready && document.querySelector('#n-textarea'));
  await page.evaluate(() => { for (const p of ['w','b','n']) document.getElementById(p+'-dlg').show(); document.querySelectorAll('.puk-disclosure__button').forEach(b => b.click()); });
  await page.hover('#leer');
  const sel = {};
  for (const p of ['w','b','n']) { for (const id of ids) sel[p+':'+id] = `#${p}-${id}`; for (const [k,v] of Object.entries(extra(p))) sel[p+':'+k] = v; }
  // Effektiver Hintergrund: erste nicht transparente Fläche aufwärts.
  const measure = () => page.evaluate(sel => {
    const bg = el => { for (let e = el; e; e = e.parentElement) { const c = getComputedStyle(e).backgroundColor; if (c && c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent') return c; } return 'rgb(255, 255, 255)'; };
    const r = {};
    for (const [k,q] of Object.entries(sel)) { const el = document.querySelector(q); if (!el) { r[k] = null; continue; } const s = getComputedStyle(el);
      r[k] = {color:s.color, border:s.borderTopColor, bg:s.backgroundColor, effBg:bg(el), deco:s.textDecorationLine, shadow:s.boxShadow, display:s.display,
        visited:s.getPropertyValue('--text-link-visited').trim(), ring:s.getPropertyValue('--focus-ring').trim()}; }
    return r; }, sel);
  const t = result[theme] = {errors};
  t.rest = await measure();
  if (shot) await page.screenshot({path:`${shot}-${theme}.png`, fullPage:true});
  // Hover je Knopf und Link
  t.hover = {};
  for (const p of ['w','b','n']) for (const id of ['tsec','tghost','lsec','csec','dsec','clink','tlink','llink','dclose','bandsec']) {
    const q = `#${p}-${id}`; await page.hover(q);
    t.hover[p+':'+id] = await page.$eval(q, el => { const s = getComputedStyle(el); return {color:s.color, bg:s.backgroundColor, border:s.borderTopColor}; });
  }
  for (const p of ['w','b','n']) { const q = extra(p).karbtn; await page.hover(q); t.hover[p+':karbtn'] = await page.$eval(q, el => { const s = getComputedStyle(el); return {color:s.color, bg:s.backgroundColor, border:s.borderTopColor}; }); }
  await page.hover('#leer');
  // Fokus und gedrückt (ohne Hover) per CDP
  const cdp = await page.context().newCDPSession(page); await cdp.send('DOM.enable'); await cdp.send('CSS.enable');
  const {root: doc} = await cdp.send('DOM.getDocument', {depth:-1});
  t.focus = {}; t.active = {};
  for (const p of ['w','b','n']) for (const id of ['tsec','tghost','tasec','lsec','csec','dsec','clink','tlink','llink','dclose','input','select','textarea','tprim','bandsec','bandprim','karbtn']) {
    const q = id === 'karbtn' ? extra(p).karbtn : `#${p}-${id}`;
    const {nodeId} = await cdp.send('DOM.querySelector', {nodeId:doc.nodeId, selector:q});
    await cdp.send('CSS.forcePseudoState', {nodeId, forcedPseudoClasses:['focus','focus-visible']});
    t.focus[p+':'+id] = await page.$eval(q, el => { const s = getComputedStyle(el); return {color:s.color, shadow:s.boxShadow, border:s.borderTopColor, outline:s.outlineStyle+' '+s.outlineColor}; });
    await cdp.send('CSS.forcePseudoState', {nodeId, forcedPseudoClasses:['active','focus','focus-visible']});
    t.active[p+':'+id] = await page.$eval(q, el => { const s = getComputedStyle(el); return {color:s.color, bg:s.backgroundColor, border:s.borderTopColor}; });
    await cdp.send('CSS.forcePseudoState', {nodeId, forcedPseudoClasses:[]});
  }
  await page.emulateMedia({media:'print'});
  t.print = await measure();
  await page.emulateMedia({media:'screen'});
  await page.close();
}
await browser.close(); await srv.close();
fs.writeFileSync(out, JSON.stringify(result, null, 1));
console.log('ok', out);
