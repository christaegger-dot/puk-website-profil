import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { execFile } from 'node:child_process';
export const root=fileURLToPath(new URL('../',import.meta.url));
export const starter=path.join(root,'templates/website/psychoeducation-site-starter');
export const example=path.join(root,'templates/website/profilbeispiel');
export const exec=promisify(execFile);
export const python=process.env.PYTHON||'python3';
export const browserOptions=process.env.CHROMIUM_EXECUTABLE_PATH?{executablePath:process.env.CHROMIUM_EXECUTABLE_PATH}:{};
export function fixture(){
 const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'puk-profil-'));
 const site=path.join(tmp,'templates/website/profilbeispiel');
 fs.cpSync(example,site,{recursive:true});
 for(const name of ['styles.css','tokens','assets'])fs.cpSync(path.join(root,name),path.join(tmp,name),{recursive:true});
 for(const name of ['bundle.css','interaktion.js']){fs.mkdirSync(path.join(tmp,'components'),{recursive:true});fs.copyFileSync(path.join(root,'components',name),path.join(tmp,'components',name));}
 fs.cpSync(path.join(root,'templates/website/longform'),path.join(tmp,'templates/website/longform'),{recursive:true});
 fs.mkdirSync(path.join(tmp,'templates/website/psychoeducation-site-starter'),{recursive:true});
 fs.copyFileSync(path.join(starter,'starter.css'),path.join(tmp,'templates/website/psychoeducation-site-starter/starter.css'));
 return {tmp,site,out:path.join(tmp,'export')};
}
export async function cli(name,args){
 try{const r=await exec(process.execPath,[path.join(starter,'tools',name+'.mjs'),...args],{maxBuffer:2**20});return {code:0,text:r.stdout+r.stderr};}
 catch(e){return {code:e.code,text:(e.stdout||'')+(e.stderr||'')};}
}
