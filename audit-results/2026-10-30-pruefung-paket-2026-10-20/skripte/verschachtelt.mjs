// Verschachtelte Flächen: erfasster Eintrag innerhalb einer getönten Fläche mit eigenem Blau 125.
import {chromium} from 'playwright';
const base=process.argv[2];
const teil=X=>`<figure class="puk-vis-figure" id="${X}-fig"><p>Figur <a id="${X}-figa" href="#x">Link Figur</a></p><div class="puk-vis-layers"><div class="puk-vis-layers__zone"><h3>Oben</h3><p><a id="${X}-laya" href="#x">Link Schicht</a></p></div></div><button class="puk-vis-btn" id="${X}-btn">Knopf</button></figure>
<div class="puk-site-placeholder"><p><span class="puk-site-draft">Entwurf <a id="${X}-drafta" href="#x">Link Marke</a></span> <a id="${X}-pha" href="#x">Link Platzhalter</a></p></div>
<div class="puk-app-detail"><div class="puk-app-card"><p><a id="${X}-carda" href="#x">Link Karte in Detail</a></p></div></div>`;
const html=`<!doctype html><html lang="de"><head><meta charset="utf-8"><link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="templates/website/longform/visual-patterns.css"><link rel="stylesheet" href="templates/website/longform/erklaermuster.css"><link rel="stylesheet" href="templates/website/psychoeducation-site-starter/starter.css"><link rel="stylesheet" href="templates/website/applications/applications.css"></head><body class="puk-web-page"><main><div id="w">${teil('w')}</div><section class="puk-web-band">${teil('b')}</section><section class="puk-web-band" data-puk-surface="night">${teil('n')}</section></main></body></html>`;
const b=await chromium.launch({executablePath:process.env.CHROMIUM_EXECUTABLE_PATH});
for(const theme of ['standard','kontrast']){const p=await b.newPage();await p.route(base+'__v.html',r=>r.fulfill({contentType:'text/html',body:theme==='kontrast'?html.replace('<html lang="de">','<html lang="de" data-theme="kontrast">'):html}));await p.goto(base+'__v.html');
for(const k of ['figa','laya','drafta','pha','carda'])console.log(theme,k,(await Promise.all(['w','b','n'].map(x=>p.$eval('#'+x+'-'+k,e=>{const s=getComputedStyle(e);let bg;for(let y=e;y;y=y.parentElement){const c=getComputedStyle(y).backgroundColor;if(!/rgba\(0, 0, 0, 0\)/.test(c)){bg=c;break}}return s.color+' auf '+bg})))).join(' | '));await p.close();}
await b.close();
