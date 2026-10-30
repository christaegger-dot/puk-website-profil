import json,sys,collections
d=json.load(open(sys.argv[1]))
keys=['color','bg','border','shadow','outline','fill','stroke','after','before']
for run,r in d.items():
  print(f'=== {run}  Skriptfehler: {r["errors"]}')
  for mode in ['ruhe','druck','forced']:
    w=r[mode]['w']
    for p in ['b','n']:
      o=r[mode][p]; assert len(o)==len(w),(len(o),len(w))
      diffs=collections.Counter(); exp=collections.Counter(); ex=[]
      for a,b in zip(w,o):
        if not a['vis'] and not b['vis']: continue
        dk=[k for k in keys if a[k]!=b[k]]
        if not dk: continue
        tag=f"{b['tag']}.{b['cls'][:30]}"
        if b['ctx'] or 'puk-carousel__status' in b['cls'] or 'puk-carousel__controls' in b['cls'] or 'puk-vis-figure--open' in b['cls'] :
          exp[b['ctx'] or b['cls'][:25]]+=1
        else:
          diffs[tag+' '+','.join(dk)]+=1
          if len(ex)<6: ex.append((tag,{k:(a[k],b[k]) for k in dk}))
      low=[(x['tag']+'.'+x['cls'][:25],x['color'],x['effbg'],x['contrast']) for x in o if x['contrast'] is not None and x['contrast']<4.5]
      loww=[(x['tag']+'.'+x['cls'][:25],x['contrast']) for x in w if x['contrast'] is not None and x['contrast']<4.5]
      print(f' {mode:6} {p}: unerwartete Abweichungen {sum(diffs.values())}, erwartete (offen/Status/Steuerung) {dict(exp)}')
      for t,c in list(diffs.items())[:8]: print('    ',c,'x',t)
      for e in ex[:4]: print('     z.B.',e)
      if mode=='ruhe':
        cs=[x['contrast'] for x in o if x['contrast'] is not None]
        print(f'    Textkontrast min {min(cs)} ; <4.5: {len(low)} (Weiss: {len(loww)})', low[:6], loww[:3] if p=='b' else '')
  # Zustaende
  z=r['zustaende']
  for p in ['b','n']:
    bad=collections.Counter(); exp=collections.Counter()
    for a,b in zip(z['w'],z[p]):
      if not a.get('ruhe'): continue
      for s in ['ruhe','hover','fokus','gedrueckt']:
        if a[s]!=b[s]:
          if 'puk-carousel__btn' in b['cls'] or 'puk-vis-btn' in b['cls']: bad[(b['cls'][:20],s)]+=1
          else: exp[(b['cls'][:18] or 'a',s,'unterstr' if a[s].split(' | ')[:4]==b[s].split(' | ')[:4] else 'farbe')]+=1
    print(f'  Zustaende {p}: Knoepfe abweichend {dict(bad)} ; Links abweichend {dict(exp)}')
