import {chromium} from 'playwright';
import {writeFile, mkdir} from 'node:fs/promises';
import {resolve, dirname} from 'node:path';
import {ROOT} from './profil.mjs';
import {serverStart} from './server.mjs';

const args = process.argv.slice(2);
if (args.length && !(args.length === 2 && args[0] === '--bericht')) throw new Error('Aufruf: npm run test:ui [-- --bericht datei.json]');
const output = resolve(args[1] || 'out-pruefung/ui-matrix.json');
let browser, server;
try {
  server = await serverStart(ROOT);
  browser = await chromium.launch(process.env.CHROMIUM_EXECUTABLE_PATH ? {executablePath:process.env.CHROMIUM_EXECUTABLE_PATH} : {});
  const page = await browser.newPage({viewport:{width:1280,height:900}}), errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('response', r => {if (r.status() >= 400) errors.push(r.status() + ': ' + r.url());});
  // Die laufende Matrix lädt fortlaufend Prüffenster; Netzwerkruhe ist kein Fertigsignal.
  await page.goto(server.url + 'ui_kits/website/qa.html', {waitUntil:'domcontentloaded'});
  await page.waitForFunction(() => window.__qaTotal !== undefined, null, {timeout:180000});
  const result = await page.evaluate(() => ({status:document.querySelector('#status').textContent,total:window.__qaTotal,matrix:window.__qa,keyboardAndInteractions:window.__kbd,gate:[...document.querySelectorAll('#gate tr')].map(r => [r.className,...[...r.cells].map(c => c.textContent)])}));
  result.errors = errors;
  result.notTestable = result.matrix.some(x => x.na) || result.keyboardAndInteractions.some(x => x[0] === 'na');
  await mkdir(dirname(output), {recursive:true});
  await writeFile(output, JSON.stringify(result,null,2) + '\n');
  console.log(result.status + '\nBericht: ' + output);
  if (result.total || errors.length || result.notTestable) throw new Error('UI-Prüfung hat Befunde oder nicht prüfbare Fälle. Details im Bericht.');
} catch (e) {console.error(e.message); process.exitCode = 1;}
finally {if (browser) await browser.close(); if (server) await server.close();}
