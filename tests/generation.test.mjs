import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {root} from './helpers.mjs';
import {generieren} from '../tools/generieren.mjs';
import {profil} from '../tools/profil.mjs';

function fixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'puk-quellen-'));
  t.after(() => fs.rmSync(dir, {recursive:true,force:true}));
  for (const p of ['package.json','package-lock.json','README.md','START-HIER.md','CLAUDE.md','PRUEFBERICHT.md','ABSCHLUSSENTSCHEIDE.md','index.html','musterauswahl.html','MUSTER-WAEHLEN.md','quellcode','components','templates','ui_kits']) fs.cpSync(path.join(root,p),path.join(dir,p),{recursive:true});
  return dir;
}

test('Eine Änderung der Typquelle wird erkannt und in beide Ausgaben übernommen', async t => {
  const dir = fixture(t), source = path.join(dir,'quellcode/komponenten/src/components/forms/Input.d.ts');
  const output = path.join(dir,'components/Input/Input.d.ts'), before = fs.readFileSync(output,'utf8');
  fs.writeFileSync(source,fs.readFileSync(source,'utf8').replace('invalid?: boolean;', 'invalid?: boolean;\n  sourceProbe?: string;'));
  await assert.rejects(generieren({root:dir,check:true}),/Input\/Input.d.ts/);
  assert.equal(fs.readFileSync(output,'utf8'),before,'Prüfmodus darf keine Dateien schreiben');
  await generieren({root:dir});
  for (const p of ['components/Input/Input.d.ts','components/index.d.ts']) assert.match(fs.readFileSync(path.join(dir,p),'utf8'),/sourceProbe\?: string/);
  await generieren({root:dir,check:true});
});

test('Eine Profiländerung aktualisiert Standangaben, Build und Paketnamen aus einer Quelle', async t => {
  const dir = fixture(t), file = path.join(dir,'package.json'), pkg = JSON.parse(fs.readFileSync(file));
  pkg.version='2026.10.99'; pkg.pukProfil.starterBuild='r4-99'; pkg.pukProfil.qaRevision='qa-99';
  fs.writeFileSync(file,JSON.stringify(pkg));
  await assert.rejects(generieren({root:dir,check:true}),/Veraltete generierte Dateien/);
  await generieren({root:dir});
  assert.equal((await profil(dir)).paket,'puk-website-profil-2026.10.99.zip');
  assert.equal(JSON.parse(fs.readFileSync(path.join(dir,'templates/website/profile.json'))).profileVersion,pkg.version);
  assert.equal(JSON.parse(fs.readFileSync(path.join(dir,'package-lock.json'))).packages[''].version,pkg.version);
  assert.match(fs.readFileSync(path.join(dir,'README.md'),'utf8'),/puk-website-profil-2026\.10\.99\.zip/);
  assert.match(fs.readFileSync(path.join(dir,'index.html'),'utf8'),/Profil 2026\.10\.99/);
  assert.match(fs.readFileSync(path.join(dir,'templates/website/psychoeducation-site-starter/tools/contract.js'),'utf8'),/BUILD = 'r4-99'/);
  assert.match(fs.readFileSync(path.join(dir,'ui_kits/website/qa.html'),'utf8'),/qa-99/);
  await generieren({root:dir,check:true});
});

test('Eine fehlende Typquelle stoppt die Erzeugung vor dem Schreiben', async t => {
  const dir=fixture(t), file=path.join(dir,'components/index.d.ts'), before=fs.readFileSync(file,'utf8');
  fs.unlinkSync(path.join(dir,'quellcode/komponenten/src/components/forms/Input.d.ts'));
  await assert.rejects(generieren({root:dir}),/Typquelle für Input/);
  assert.equal(fs.readFileSync(file,'utf8'),before);
});
