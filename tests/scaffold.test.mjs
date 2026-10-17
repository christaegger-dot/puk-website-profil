import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {root, exec, cli} from './helpers.mjs';

function workspace(t) {
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),'puk-neu-'));
  t.after(()=>fs.rmSync(dir,{recursive:true,force:true})); return dir;
}
const neu=(...args)=>exec(process.execPath,[path.join(root,'tools/neue-website.mjs'),...args],{maxBuffer:2**20});

test('Ein Befehl erzeugt einen eigenen Entwurf mit Vorschau und eigenständigem Export',async t=>{
  const tmp=workspace(t), site=path.join(tmp,'mein-projekt'), out=path.join(tmp,'export');
  await neu('mein-thema','--titel','Mein <Thema> & Angehörige','--ziel',site);
  const cfg=JSON.parse(fs.readFileSync(path.join(site,'site.config.json')));
  assert.equal(cfg.pages.length,4);
  assert.equal(cfg.siteTitle,'Mein <Thema> & Angehörige');
  assert.ok(!fs.existsSync(path.join(site,'tools')),'Zentrale Werkzeuge werden nicht vervielfältigt');
  assert.ok(cfg.pages.every(p=>p.sensitiveTopics.length===0));
  const home=fs.readFileSync(path.join(site,'index.html'),'utf8');
  assert.match(home,/Mein &lt;Thema&gt; &amp; Angehörige/);
  assert.doesNotMatch(home,/data-safety-access=|Notfalldienst|Polizei|tel:144/);
  for (const p of cfg.pages) assert.ok(fs.existsSync(path.join(site,p.href)));
  const draft=await cli('gate',['--site',site]); assert.equal(draft.code,0,draft.text);
  const production=await cli('gate',['--site',site,'--production']); assert.notEqual(production.code,0);
  assert.match(production.text,/review-report/);
  const exported=await cli('export',[out,'--site',site]); assert.equal(exported.code,0,exported.text);
  assert.ok(fs.existsSync(path.join(out,'css/site.css')));
  assert.ok(fs.existsSync(path.join(out,'assets/logo.svg')));
  assert.ok(!fs.existsSync(path.join(out,'site.config.json')));
  const before=fs.readFileSync(path.join(out,'index.html'),'utf8');
  assert.notEqual((await cli('export',[out,'--site',site,'--production'])).code,0);
  assert.equal(fs.readFileSync(path.join(out,'index.html'),'utf8'),before);
});

test('Ein vorhandenes Projekt bleibt beim erneuten Anlegen unverändert',async t=>{
  const tmp=workspace(t), site=path.join(tmp,'vorhanden');fs.mkdirSync(site);
  fs.writeFileSync(path.join(site,'inhalt.txt'),'Eigener Inhalt');
  await assert.rejects(neu('mein-thema','--ziel',site),/existiert bereits/);
  assert.deepEqual(fs.readdirSync(site),['inhalt.txt']);
  assert.equal(fs.readFileSync(path.join(site,'inhalt.txt'),'utf8'),'Eigener Inhalt');
});

test('Ungültige Namen und unvollständige Optionen erzeugen kein Projekt',async t=>{
  const tmp=workspace(t), site=path.join(tmp,'projekt');
  await assert.rejects(neu('../fremd','--ziel',site),/Name:/);
  await assert.rejects(neu('mein-thema','--titel'),/Aufruf:/);
  await assert.rejects(neu('mein-thema','--titel',' ','--ziel',site),/nicht leeren Titel/);
  assert.ok(!fs.existsSync(site));assert.deepEqual(fs.readdirSync(tmp),[]);
});
