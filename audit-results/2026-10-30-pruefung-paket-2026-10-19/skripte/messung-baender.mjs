// Unabhängige Prüfung 2026.10.19: dieselben Komponenten auf Weiss, im blauen Band und auf Nachtblau.
// Aufruf: node messung-baender.mjs <Repo-Stand> <Ausgabe.json> [<Foto-Präfix>]
// Inhalt: alle Erklärgrafiken aus visualisierungsmuster.html, dieselben Figuren als offene Variante,
// React Carousel, Tabs, Checkbox, Radio, Switch, Field/Input, DisclosureMenu (geöffnet), Button-Varianten.
import {createRequire} from 'node:module';
import fs from 'node:fs';
const [,, root, out, foto] = process.argv;
const require = createRequire('/home/user/puk-website-profil/package.json');
const {chromium} = require('playwright');
const {serverStart} = await import(root + '/tools/server.mjs');

const html = t => `<!doctype html><html lang="de"${t==='kontrast'?' data-theme="kontrast"':''}><head><meta charset="utf-8"><title>Bänder</title>
<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/templates/website/longform/visual-patterns.css">
<script src="/platform/vendor/react.production.min.js"></script><script src="/platform/vendor/react-dom.production.min.js"></script><script src="/components/bundle.js"></script></head>
<body class="puk-web-page"><main><p id="leer">Leer</p>
<div id="w" class="puk-web-container" style="padding-block:32px"></div>
<section id="b" class="puk-web-band"><div class="puk-web-container" id="b-in"></div></section>
<section id="n" class="puk-web-band" data-puk-surface="night"><div class="puk-web-container" id="n-in"></div></section></main>
<script src="/pruef-fixture.js"></script></body></html>`;

const js = `(async()=>{
const src=await (await fetch('/templates/website/longform/visualisierungsmuster.html')).text();
const doc=new DOMParser().parseFromString(src,'text/html');
const picks=[...doc.querySelectorAll('.puk-vis-wide,.puk-vis-decide,.puk-vis-tablewrap,.puk-vis-longdesc')].filter((e,i,a)=>!a.some(o=>o!==e&&o.contains(e)));
const h=React.createElement,K=window.PUKWeb;
for(const p of ['w','b','n']){
 const host=document.getElementById(p==='w'?'w':p+'-in');
 picks.forEach((e,i)=>{const c=e.cloneNode(true);c.dataset.grp='muster-'+i+'-'+(e.querySelector('[data-visual-id]')?.dataset.visualId||e.className);host.appendChild(c);});
 // Offene Varianten derselben Figuren (Grenze «--open» aus 2026.10.18)
 [...doc.querySelectorAll('figure.puk-vis-figure:not(.puk-vis-figure--open)')].forEach((f,i)=>{const w=document.createElement('div');w.className='puk-vis-wide';w.dataset.grp='offen-'+i+'-'+(f.dataset.visualId||'');const c=f.cloneNode(true);c.classList.add('puk-vis-figure--open');w.appendChild(c);host.appendChild(w);});
 const r=document.createElement('div');r.dataset.grp='react';host.appendChild(r);
 ReactDOM.createRoot(r).render(h(React.Fragment,null,
  h(K.Carousel,{label:'Karussell',items:[{title:'Eins',content:'Inhalt der Folie'},{title:'Zwei',content:'Zweite'}]}),
  h('div',{'data-grp':'o3'},
   h(K.Tabs,{items:['Erster','Zweiter'],defaultValue:'Erster'},'Inhalt'),
   h(K.Checkbox,{label:'Kontrollkästchen'}),h(K.Radio,{label:'Optionsfeld',name:p+'r'}),h(K.Switch,{label:'Schalter'}),
   h(K.Field,{label:'Feldbeschriftung',hint:'Hinweis'},h(K.Input,{defaultValue:'Eingabe'})),
   h(K.DisclosureMenu,{label:'Menü',items:[{label:'Eintrag',href:'#x'}]})),
  h('div',{'data-grp':'knoepfe'},h(K.Button,{variant:'primary'},'Primär'),h(K.Button,{variant:'secondary'},'Sekundär'),h(K.Button,{variant:'ghost'},'Ghost'),h('a',{className:'puk-btn puk-btn--secondary',href:'#x'},'Knopf-Link'),h('a',{href:'#y'},'Textlink'))));
}
document.querySelectorAll('details').forEach(d=>d.open=true);
setTimeout(()=>{for(const p of ['w','b','n'])document.querySelector('#'+(p==='w'?'w':p+'-in')+' .puk-disclosure__button')?.click();
 setTimeout(()=>{window.__bereit=true;},200);},200);
})();`;

const sammeln = () => {
  const bg = el => { for (let e = el; e && e.nodeType === 1; e = e.parentElement) { const s = getComputedStyle(e); if (s.backgroundColor !== 'rgba(0, 0, 0, 0)' && s.display !== 'contents') return s.backgroundColor; } return 'rgb(255, 255, 255)'; };
  const res = {};
  for (const p of ['w','b','n']) {
    const host = document.getElementById(p === 'w' ? 'w' : p + '-in');
    const els = [...host.querySelectorAll('*')];
    res[p] = els.map((el, i) => {
      const s = getComputedStyle(el); const grp = el.closest('[data-grp]')?.dataset.grp || '';
      const own = [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim());
      const rect = el.getBoundingClientRect(); const visible = s.display !== 'none' && s.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
      const d = {i, grp, tag: el.tagName.toLowerCase(), cls: (el.getAttribute('class') || '').split(' ')[0], txt: own ? el.textContent.trim().slice(0, 30) : '', visible,
        color: s.color, bg: bg(el), ownBg: s.backgroundColor, border: [s.borderTopColor, s.borderLeftColor].join('/'), shadow: s.boxShadow, deco: s.textDecorationLine};
      if (el instanceof SVGElement) { d.stroke = s.stroke; d.fill = s.fill; }
      for (const ps of ['::before', '::after']) { const q = getComputedStyle(el, ps); if (q.content && q.content !== 'none' && q.display !== 'none') d[ps] = [q.borderTopColor, q.borderLeftColor, q.backgroundColor, q.boxShadow].join(' / '); }
      return d;
    });
  }
  return res;
};

const srv = await serverStart(root);
const browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath: process.env.CHROMIUM_EXECUTABLE_PATH} : {});
const ergebnis = {root, browser: browser.version(), laeufe: {}};
for (const t of ['light', 'kontrast']) for (const vw of [375, 1280]) {
  const page = await browser.newPage({viewport: {width: vw, height: 900}});
  const errors = []; page.on('pageerror', e => errors.push(String(e)));
  await page.route(srv.url + 'pruef-fixture.html', r => r.fulfill({contentType: 'text/html', body: html(t)}));
  await page.route(srv.url + 'pruef-fixture.js', r => r.fulfill({contentType: 'text/javascript', body: js}));
  await page.goto(srv.url + 'pruef-fixture.html', {waitUntil: 'load'});
  await page.waitForFunction(() => window.__bereit === true, null, {timeout: 20000});
  await page.addStyleTag({content: '*{transition:none!important;animation:none!important}'});
  await page.mouse.move(0, 0);
  const lauf = {errors};
  lauf.ruhe = await page.evaluate(sammeln);
  if (foto) await page.screenshot({path: `${foto}-${t}-${vw}.png`, fullPage: true});
  // Interaktive Elemente: Hover (Maus), Fokus und gedrückt ohne Hover (CDP)
  const sel = `a,button,summary,input,select,textarea,[tabindex]:not([tabindex="-1"])`;
  const n = await page.$$eval('#w ' + sel.split(',').join(',#w '), l => l.length);
  const cdp = await page.context().newCDPSession(page); await cdp.send('DOM.enable'); await cdp.send('CSS.enable');
  const look = (q, k) => page.$$eval(q, (l, k) => { const e = l[k]; const s = getComputedStyle(e); return {grp: e.closest('[data-grp]')?.dataset.grp || '', tag: e.tagName.toLowerCase(), cls: (e.getAttribute('class') || '').split(' ')[0], txt: (e.textContent || e.value || '').trim().slice(0, 25), color: s.color, bg: s.backgroundColor, border: s.borderTopColor, shadow: s.boxShadow, outline: s.outlineStyle + ' ' + s.outlineColor}; }, k);
  const hostSel = p => (p === 'w' ? '#w ' : `#${p}-in `);
  const qs = p => sel.split(',').map(x => hostSel(p) + x).join(',');
  lauf.zustaende = [];
  for (let k = 0; k < n; k++) {
    const row = {k};
    for (const p of ['w', 'b', 'n']) {
      const handles = await page.$$(qs(p)); const el = handles[k];
      const vis = await el.isVisible();
      row[p] = {ruhe: await look(qs(p), k)};
      if (!vis) { row[p].unsichtbar = true; continue; }
      try { await el.hover({timeout: 2000}); row[p].hover = await look(qs(p), k); } catch { row[p].hover = 'nicht erreichbar'; }
      await page.mouse.move(0, 0);
      const {root: r} = await cdp.send('DOM.getDocument', {depth: -1});
      const {nodeIds} = await cdp.send('DOM.querySelectorAll', {nodeId: r.nodeId, selector: qs(p)});
      for (const [name, forced] of [['fokus', ['focus', 'focus-visible']], ['gedrueckt', ['active', 'focus', 'focus-visible']]]) {
        await cdp.send('CSS.forcePseudoState', {nodeId: nodeIds[k], forcedPseudoClasses: forced});
        row[p][name] = await look(qs(p), k);
        await cdp.send('CSS.forcePseudoState', {nodeId: nodeIds[k], forcedPseudoClasses: []});
      }
    }
    lauf.zustaende.push(row);
  }
  await page.emulateMedia({media: 'print'});
  lauf.druck = await page.evaluate(sammeln);
  if (foto) await page.screenshot({path: `${foto}-${t}-${vw}-druck.png`, fullPage: true});
  ergebnis.laeufe[`${t}-${vw}`] = lauf;
  await page.close();
}
await browser.close(); await srv.close();
fs.writeFileSync(out, JSON.stringify(ergebnis));
console.log('geschrieben', out);
