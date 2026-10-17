import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {root,starter,example} from './helpers.mjs';
const C=createRequire(import.meta.url)(path.join(starter,'tools/contract.js'));
const cfg=JSON.parse(fs.readFileSync(path.join(starter,'tools/selftest/site.config.json')));
const files=Object.fromEntries(cfg.pages.map(p=>[C.resolve('',p.href).path,C.renderPage(cfg,p,fs.readFileSync(path.join(starter,'tools/selftest/content',p.id+'.html'),'utf8'))]));
for(const row of C.selftest(cfg,files,{exists:p=>p in files||!p.endsWith('.html')}))test(row.name,()=>assert.equal(row.ok,true,JSON.stringify(row)));
function material(){const cfg=JSON.parse(fs.readFileSync(path.join(example,'site.config.json')));return {cfg,files:Object.fromEntries(cfg.pages.map(p=>[p.href,C.renderPage(cfg,p,fs.readFileSync(path.join(example,'content',p.id+'.html'),'utf8'))])),report:fs.readFileSync(path.join(example,'PRUEFBERICHT.md'),'utf8')};}
function check(m){return C.gate(m.cfg,m.files,{mode:'production',report:m.report,exists:p=>p in m.files||fs.existsSync(path.resolve(example,p))});}
test('Fachneutrales vollständiges Beispiel besteht die Produktionsprüfung',()=>{const r=check(material());assert.equal(r.blocks,0,JSON.stringify(r.findings));});
test('Standardseiten ergänzen weder Krisenblock noch pauschalen Zuständigkeitssatz',()=>{const m=material();for(const html of Object.values(m.files))assert.doesNotMatch(html,/data-safety-access=|Notfalldienst|bei Gefahr die Polizei/);});
test('Weitere Telefonnummern und bewusster Krisenkontakt bestehen auch in Produktion',()=>{const m=material();m.cfg.pages[0].sensitiveTopics=['akute-krise','gewalt','selbstgefaehrdung'];m.files['index.html']=m.files['index.html'].replace('</main>','<p>Testkontakt <a href="tel:+4930123456">+49 30 123456</a></p><aside data-safety-access="direct"><p>Gewählter Testkontakt <a href="tel:144">144</a></p></aside></main>');const r=check(m);assert.equal(r.blocks,0,JSON.stringify(r.findings));});
test('Andere deutsche Sprachvariante wird als Abweichung von de-CH erkannt',()=>{const m=material();m.cfg.language='de-DE';m.files['index.html']=m.files['index.html'].replace('lang="de-CH"','lang="de-DE"');assert.ok(check(m).findings.some(x=>x.level==='block'&&x.id==='lang'));});
