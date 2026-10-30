import {chromium} from 'playwright';
const b=await chromium.launch({executablePath:process.env.CHROMIUM_EXECUTABLE_PATH});const p=await b.newPage();
await p.route('http://127.0.0.1:8701/__n.html',r=>r.fulfill({contentType:'text/html',body:`<!doctype html><html lang="de"><head><link rel="stylesheet" href="styles.css"></head><body class="puk-web-page"><input id="w"><select id="ws"><option>a</option></select><section class="puk-web-band"><input id="b"><select id="bs"><option>a</option></select></section><section class="puk-web-band" data-puk-surface="night"><input id="n"><select id="ns"><option>a</option></select></section></body></html>`}));
await p.goto('http://127.0.0.1:8701/__n.html');
for(const id of ['w','b','n','ws','bs','ns'])console.log(id,await p.$eval('#'+id,e=>{const s=getComputedStyle(e);return s.color+' auf '+s.backgroundColor}));
await b.close();
