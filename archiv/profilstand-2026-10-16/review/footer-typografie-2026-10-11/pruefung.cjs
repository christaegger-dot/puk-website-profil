// Technical self-check; requires Playwright and an HTTP server at the repo root.
const {chromium}=require('playwright');
const fs=require('node:fs/promises');
const path=require('node:path');
const base=process.env.PROFILE_URL||'http://127.0.0.1:4210';
const dir=__dirname;
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium'});
 const rows=[],errors=[];
 try {
  const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
  for(const width of [320,360,768,1440])for(const css of ['bundle','token-source'])for(const theme of ['normal','kontrast'])for(const text of ['normal','200%-CSS-Text','Textabstaende']){
   await page.setViewportSize({width,height:900});
   await page.goto(base+'/review/footer-typografie-2026-10-11/pruefansicht.html');
   if(css==='token-source'){
    await page.locator('link[rel=stylesheet]').evaluate(x=>x.remove());
    for(const name of ['fonts','colors','typography','spacing','surfaces','base','web'])await page.addStyleTag({url:base+'/tokens/'+name+'.css'});
   }
   if(theme==='kontrast')await page.evaluate(()=>document.documentElement.dataset.theme='kontrast');
   await page.evaluate(()=>document.fonts.ready);
   if(text==='200%-CSS-Text')await page.evaluate(()=>{const sizes=[...document.querySelectorAll('body *')].map(x=>[x,getComputedStyle(x).fontSize]);for(const [x,size]of sizes)x.style.fontSize=parseFloat(size)*2+'px'});
   if(text==='Textabstaende')await page.addStyleTag({content:'body * {line-height:1.5!important;letter-spacing:.12em!important;word-spacing:.16em!important} p {margin-bottom:2em!important}'});
   const state=await page.evaluate(()=>({copy:getComputedStyle(document.querySelector('.puk-web-footer__copy')).fontSize,meta:getComputedStyle(document.querySelector('.puk-web-footer__meta')).fontSize,link:getComputedStyle(document.querySelector('footer a')).fontSize,scrollWidth:document.documentElement.scrollWidth,innerWidth,fontsLoaded:document.fonts.check('300 21px Rubik')&&document.fonts.check('400 13px Rubik')}));
   const factor=text==='200%-CSS-Text'?2:1,body=(width<=760?19:21)*factor;
   rows.push({width,css,theme,text,state,passed:state.copy===body+'px'&&state.link===body+'px'&&state.meta===13*factor+'px'&&state.scrollWidth<=width+1&&state.fontsLoaded});
   if(width===320&&theme==='normal'&&text==='normal')await page.screenshot({path:path.join(dir,css+'-320.png'),fullPage:true});
  }
  for(const route of ['/','/templates/website/longform/grundlagenkapitel.html','/templates/website/longform/handlungsuebersicht.html','/templates/website/psychoeducation-site-starter/index.html'])for(const width of [320,360,768,1440]){
   await page.setViewportSize({width,height:900});await page.goto(base+route);await page.evaluate(()=>document.fonts.ready);
   const state=await page.locator('.puk-web-footer').evaluate(x=>({size:getComputedStyle(x).fontSize,copy:getComputedStyle(x.querySelector('.puk-web-footer__copy')).fontSize}));
   rows.push({route,width,css:'actual-template',state,passed:state.size===(width<=760?'19px':'21px')&&state.copy===(width<=760?'19px':'21px')});
  }
 } finally {
  await browser.close();
  await fs.writeFile(path.join(dir,'browser.json'),JSON.stringify({browser:'Chromium 151.0.7922.173',os:'Linux',rows,errors,counts:{cases:rows.length,failed:rows.filter(x=>!x.passed).length},humanTests:false,realDevice:false},null,2)+'\n');
 }
 console.log(JSON.stringify({cases:rows.length,failed:rows.filter(x=>!x.passed).length,errors}));if(rows.some(x=>!x.passed)||errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1});
