import re,subprocess,sys,os
wt=sys.argv[1]; f=os.path.join(wt,'components/bundle.css'); orig=open(f).read()
m=re.search(r':where\(\.puk-web-band,\[data-puk-surface="night"\]\) :where\((.*?)\)\{--text-default',orig)
inner=m.group(1)
# Liste auf oberster Ebene trennen
items=[];depth=0;cur=''
for ch in inner:
  if ch=='(' :depth+=1
  if ch==')' :depth-=1
  if ch==',' and depth==0: items.append(cur);cur=''
  else: cur+=ch
items.append(cur)
print(len(items),'Selektoren',flush=True)
env=dict(os.environ,CHROMIUM_EXECUTABLE_PATH='/opt/pw-browsers/chromium')
for i,it in enumerate(items):
  new=inner.replace(inner, ','.join(x for j,x in enumerate(items) if j!=i))
  open(f,'w').write(orig.replace(inner,new,1))
  r=subprocess.run(['node','--test','tests/profilentscheid-2026-10-29.test.mjs'],cwd=wt,env=env,capture_output=True,text=True)
  fails=[l.strip() for l in r.stdout.splitlines() if l.startswith('not ok')]
  msg=[l.strip() for l in r.stdout.splitlines() if l.strip().startswith('error:') or 'message:' in l][:1]
  print(f'ohne {it!r}: '+(' / '.join(fails) if fails else 'ALLE BESTANDEN')+(' | '+msg[0][:160] if msg else ''),flush=True)
open(f,'w').write(orig)
print('wiederhergestellt',subprocess.run(['git','diff','--stat'],cwd=wt,capture_output=True,text=True).stdout or 'git diff leer')
