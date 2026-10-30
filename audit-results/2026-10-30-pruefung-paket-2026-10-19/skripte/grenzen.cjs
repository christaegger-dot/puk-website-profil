// Grenzen aus den Entscheiden: Reiter, Formularelemente mit Beschriftungen und Menüs im Band (nur per Regel ausgeschlossen).
const path=require('path'),fs=require('fs'),http=require('http');
const root=path.resolve(process.argv[2]);
const {chromium}=require('/home/user/puk-website-profil/node_modules/playwright');
const html=`<!doctype html><html lang="de"><head><meta charset="utf-8"><title>Grenzen</title><link rel="stylesheet" href="/styles.css">
<script src="/platform/vendor/react.production.min.js"></script><script src="/platform/vendor/react-dom.production.min.js"></script><script src="/components/bundle.js"></script></head>
<body class="puk-web-page"><div id="w" class="puk-web-container"></div><section class="puk-web-band"><div id="b"></div></section><section class="puk-web-band" data-puk-surface="night"><div id="n"></div></section></body></html>`;
const srv=http.createServer((q,r)=>{const u=q.url.split('?')[0];if(u==='/g.html'){r.writeHead(200,{'content-type':'text/html'});return r.end(html);}const f=path.join(root,u);if(!fs.existsSync(f)){r.writeHead(404);return r.end();}r.writeHead(200,{'content-type':u.endsWith('.css')?'text/css':'text/javascript'});fs.createReadStream(f).pipe(r);});
(async()=>{await new Promise(r=>srv.listen(0,r));const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const out={};
 for(const theme of ['light','kontrast']){const p=await b.newPage({viewport:{width:1280,height:900}});await p.goto(`http://127.0.0.1:${srv.address().port}/g.html`);
  await p.evaluate(theme=>{if(theme==='kontrast')document.documentElement.setAttribute('data-theme','kontrast');const h=React.createElement,K=window.PUKWeb;
   for(const id of ['w','b','n'])ReactDOM.createRoot(document.getElementById(id)).render(h('div',null,h(K.Tabs,{items:[{value:'a',label:'Erster Reiter'},{value:'b',label:'Zweiter Reiter'}],defaultValue:'a'}),h(K.Checkbox,{label:'Kontrollkästchen'}),h(K.Radio,{label:'Optionsfeld',name:id+'r'}),h(K.Switch,{label:'Schalter'}),h('div',{className:'menu'},h(K.DisclosureMenu,{label:'Menü',items:[{label:'Eintrag',href:'#x'}]}))));},theme);
  await p.waitForTimeout(300);for(const id of ['w','b','n']){await p.click(`#${id} .puk-disclosure__button`);}await p.mouse.move(0,0);
  out[theme]=await p.evaluate(()=>{const lum=c=>{const m=c.match(/[\d.]+/g).slice(0,3).map(v=>{v/=255;return v<=0.03928?v/12.92:((v+0.055)/1.055)**2.4});return .2126*m[0]+.7152*m[1]+.0722*m[2];};
   const bg=e=>{for(let x=e;x;x=x.parentElement){const c=getComputedStyle(x).backgroundColor;if(!c.startsWith('rgba(0, 0, 0, 0)'))return c;}return 'rgb(255, 255, 255)';};
   const r={};for(const id of ['w','b','n']){const c=document.getElementById(id);const pick={Reiter:c.querySelector('[role=tab]'),Kontrollkaestchen:[...c.querySelectorAll('label')].find(l=>l.textContent.includes('Kontroll')),Optionsfeld:[...c.querySelectorAll('label')].find(l=>l.textContent.includes('Options')),Schalter:[...c.querySelectorAll('label,[role=switch]')].find(l=>l.textContent.includes('Schalter')),Menueknopf:c.querySelector('.puk-disclosure__button')};
    r[id]={};for(const [k,e] of Object.entries(pick)){if(!e){r[id][k]='fehlt';continue;}const s=getComputedStyle(e),g=bg(e),a=lum(s.color),b=lum(g);r[id][k]=`${s.color} auf ${g} = ${((Math.max(a,b)+.05)/(Math.min(a,b)+.05)).toFixed(2)}:1`;}}return r;});await p.close();}
 console.log(JSON.stringify(out,null,1));await b.close();srv.close();})();
