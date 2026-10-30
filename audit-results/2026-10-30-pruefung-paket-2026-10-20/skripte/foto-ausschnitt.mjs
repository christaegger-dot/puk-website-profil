// Fotos einzelner Fixture-Teile (Anwendungskarte, Platzhalter, offene Erklärgrafik) in Weiss, blauem Band und Nachtblau.
import {chromium} from 'playwright'; import fs from 'node:fs';
const [base, prefix] = process.argv.slice(2);
const mod = await import('./messung-fixture.mjs');
const b=await chromium.launch({executablePath:process.env.CHROMIUM_EXECUTABLE_PATH});
for(const theme of ['standard','kontrast']){const p=await b.newPage({viewport:{width:1280,height:900}});
await p.route(base+'__fixture.html',r=>r.fulfill({contentType:'text/html',body:mod.html(theme)}));await p.goto(base+'__fixture.html');await p.evaluate(()=>document.fonts.ready);
for(const t of ['appcard','ph','open'])for(const x of ['w','b','n']){const el=await p.$(`#${x}-${t}`);await el.scrollIntoViewIfNeeded();await el.screenshot({path:`${prefix}-${theme}-${t}-${x}.png`});}
await p.close();}
await b.close();
