// Eigene Messfixture: Erklärgrafiken, Karussell, Entwurfsmarke auf Weiss, im blauen Band, auf Nachtblau.
// Aufruf: node fixture.cjs <repo-root> <ausgabe.json> [<foto-praefix>]
const path=require('path'),fs=require('fs'),http=require('http');
const root=path.resolve(process.argv[2]);const out=process.argv[3];const shotPrefix=process.argv[4];
const {chromium}=require(path.join('/home/user/puk-website-profil/node_modules/playwright'));
const types={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.woff2':'font/woff2','.png':'image/png','.json':'application/json'};
const page0=`<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Fixture</title>
<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/templates/website/longform/visual-patterns.css"><link rel="stylesheet" href="/templates/website/longform/erklaermuster.css"><link rel="stylesheet" href="/templates/website/psychoeducation-site-starter/starter.css">
<script src="/platform/vendor/react.production.min.js"></script><script src="/platform/vendor/react-dom.production.min.js"></script><script src="/components/bundle.js"></script></head>
<body class="puk-web-page"><main><p id="leer">Leer</p>
<div id="w" class="puk-web-container"></div>
<section class="puk-web-band"><div id="b" class="puk-web-container"></div></section>
<section class="puk-web-band" data-puk-surface="night"><div id="n" class="puk-web-container"></div></section></main></body></html>`;
const srv=http.createServer((q,r)=>{const u=decodeURIComponent(q.url.split('?')[0]);if(u==='/fixture.html'){r.writeHead(200,{'content-type':'text/html'});return r.end(page0);}
 const f=path.join(root,u);if(!f.startsWith(root)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);return r.end();}
 r.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r);});
const opts=process.env.CHROMIUM_EXECUTABLE_PATH?{executablePath:process.env.CHROMIUM_EXECUTABLE_PATH}:{};
(async()=>{
 await new Promise(r=>srv.listen(0,r));const base='http://127.0.0.1:'+srv.address().port;
 const browser=await chromium.launch(opts);const result={};
 for(const width of [375,1280])for(const theme of ['light','kontrast']){
  const ctx=await browser.newContext({viewport:{width,height:900}});const page=await ctx.newPage();const errors=[];page.on('pageerror',e=>errors.push(String(e)));
  await page.goto(base+'/fixture.html');
  await page.evaluate(async theme=>{
   if(theme==='kontrast')document.documentElement.setAttribute('data-theme','kontrast');
   const parts=[];
   for(const u of ['/templates/website/longform/visualisierungsmuster.html','/templates/website/longform/erklaermuster.html']){
    const d=new DOMParser().parseFromString(await (await fetch(u)).text(),'text/html');
    d.querySelectorAll('.puk-longform__section > .puk-vis-wide, .puk-longform__copy > .puk-vis-check').forEach(e=>parts.push(e.outerHTML));
   }
   const extra='<p class="puk-site-draft-wrap"><span class="puk-site-draft">Entwurf</span></p><p>Text <a href="#x">Link</a> <span style="color:var(--text-muted)">Neben</span> <span style="color:var(--text-accent)">Akzent</span></p><div class="karussell"></div>';
   for(const p of ['w','b','n']){const c=document.getElementById(p);c.innerHTML=parts.join('\n')+extra;c.querySelectorAll('[id]').forEach(e=>e.id=p+'-'+e.id);c.querySelectorAll('.puk-vis-build__controls').forEach(e=>e.setAttribute('data-enhanced',''));c.querySelectorAll('.puk-vis-btn[hidden]').forEach(e=>e.removeAttribute('hidden'));const pb=c.querySelector('.puk-vis-btn[data-act=next]');if(pb)pb.setAttribute('aria-pressed','true');c.querySelectorAll('details.puk-vis-more').forEach((e,i)=>{if(i%2)e.open=true;});
    ReactDOM.createRoot(c.querySelector('.karussell')).render(React.createElement(window.PUKWeb.Carousel,{label:'Karussell',items:[{title:'Eins',content:'Inhalt der ersten Folie'},{title:'Zwei',content:'Zweite'}]}));}
   await new Promise(r=>setTimeout(r,300));
  },theme);
  await page.waitForSelector('#n .puk-carousel__btn');
  await page.addStyleTag({content:'*{transition:none!important;animation:none!important}'});
  await page.mouse.move(0,0);
  if(process.env.OPENSHOT){if(width===1280)for(const q of ['w','b','n'])await (await page.$(`#${q} .puk-vis-figure--open`)).screenshot({path:`${process.env.OPENSHOT}-${theme}-${q}.png`});await ctx.close();continue;}
  const snap=()=>page.evaluate(()=>{
   const lum=c=>{const m=c.match(/[\d.]+/g);if(!m)return null;const [r,g,b]=m.slice(0,3).map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4)});return 0.2126*r+0.7152*g+0.0722*b;};
   const alpha=c=>{const m=c.match(/[\d.]+/g);return m&&m.length>3?+m[3]:1;};
   const bgOf=e=>{for(let x=e;x;x=x.parentElement){const b=getComputedStyle(x).backgroundColor;if(b&&alpha(b)>0.5&&!b.startsWith('rgba(0, 0, 0, 0)'))return b;}return 'rgb(255, 255, 255)';};
   const ratio=(a,b)=>{const x=lum(a),y=lum(b);return +( (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)).toFixed(2);};
   const res={};
   for(const p of ['w','b','n']){const c=document.getElementById(p);const all=[...c.querySelectorAll('*')];
    res[p]=all.map((e,i)=>{const s=getComputedStyle(e);const own=[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim());
     const a=getComputedStyle(e,'::after'),bf=getComputedStyle(e,'::before');
     const vis=s.display!=='none'&&s.visibility!=='hidden'&&e.getClientRects().length>0;
     const bg=bgOf(e);
     const ctxCls=(()=>{let k=[];for(let x=e;x&&x!==c;x=x.parentElement){if(x.classList.contains('puk-vis-figure--open'))k.push('open');if(x.classList.contains('puk-carousel__status'))k.push('status');if(x.classList.contains('puk-carousel__controls'))k.push('controls');}return k.join(',');})();
     return {i,tag:e.tagName.toLowerCase(),cls:(e.getAttribute('class')||'').slice(0,60),text:own,vis,ctx:ctxCls,
      color:s.color,bg:s.backgroundColor,border:s.borderTopColor+' '+s.borderLeftColor,shadow:s.boxShadow,outline:s.outlineColor+' '+s.outlineStyle,fill:s.fill,stroke:s.stroke,
      after:a.content!=='none'?[a.backgroundColor,a.borderTopColor,a.color].join(' '):'',before:bf.content!=='none'?[bf.backgroundColor,bf.borderTopColor,bf.color].join(' '):'',
      effbg:bg,contrast:own&&vis?ratio(s.color,bg):null};});}
   return res;});
  const r={ruhe:await snap()};
  // Zustände für Knöpfe und Links: Hover (Maus), Fokus und gedrückt ohne Hover (CDP)
  const cdp=await ctx.newCDPSession(page);await cdp.send('DOM.enable');await cdp.send('CSS.enable');await cdp.send('DOM.getDocument',{depth:-1});
  const targets=['.puk-vis-btn','.puk-carousel__btn','a[href]'];
  r.zustaende={};
  for(const p of ['w','b','n']){r.zustaende[p]=[];
   const handles=await page.$$(`#${p} :is(${targets.join(',')})`);
   for(const [k,h] of handles.entries()){
    const meta=await h.evaluate(e=>({cls:(e.getAttribute('class')||e.tagName).slice(0,40),text:e.textContent.trim().slice(0,20),vis:e.getClientRects().length>0&&getComputedStyle(e).visibility!=='hidden'}));
    if(!meta.vis){r.zustaende[p].push({k,...meta});continue;}
    const look=()=>h.evaluate(e=>{const s=getComputedStyle(e);return [s.color,s.backgroundColor,s.borderTopColor,s.boxShadow,s.textDecorationLine].join(' | ');});
    const st={k,...meta};
    st.ruhe=await look();
    await h.scrollIntoViewIfNeeded();await h.hover();st.hover=await look();await page.mouse.move(0,0);
    const {nodeId}=await cdp.send('DOM.requestNode',{objectId:(await cdp.send('Runtime.evaluate',{expression:`document.querySelectorAll('#${p} :is(${targets.join(',')})')[${k}]`})).result.objectId});
    for(const [name,forced] of [['fokus',['focus','focus-visible']],['gedrueckt',['active','focus','focus-visible']]]){await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:forced});st[name]=await look();await cdp.send('CSS.forcePseudoState',{nodeId,forcedPseudoClasses:[]});}
    r.zustaende[p].push(st);}
  }
  await page.emulateMedia({media:'print'});r.druck=await snap();await page.emulateMedia({media:'screen'});
  await page.emulateMedia({forcedColors:'active'});r.forced=await snap();
  if(shotPrefix&&width===1280||shotPrefix&&width===375){await page.emulateMedia({forcedColors:'none'});await page.screenshot({path:`${shotPrefix}-${theme}-${width}.png`,fullPage:true});}
  r.errors=errors;result[`${theme}-${width}`]=r;await ctx.close();
 }
 fs.writeFileSync(out,JSON.stringify(result));await browser.close();srv.close();
})().catch(e=>{console.error(e);process.exit(1);});
