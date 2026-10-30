import json,sys,collections
keys=['color','bg','border','shadow','outline','fill','stroke','after','before']
out=[]
for f in sys.argv[1:]:
  d=json.load(open(f)); out.append(f'##### {f}')
  for run,r in d.items():
    out.append(f'=== {run} · Skriptfehler: {len(r["errors"])}')
    for mode in ['ruhe','druck','forced']:
      w=r[mode]['w']
      for p in ['b','n']:
        o=r[mode][p]; bandbg=o[0]['effbg'] if mode=='ruhe' else None
        cnt=collections.Counter(); ex=[]
        n=0
        for a,b in zip(w,o):
          if not (a['vis'] or b['vis']): continue
          n+=1
          dk=[k for k in keys if a[k]!=b[k]]
          if not dk: continue
          if 'open' in b['ctx'] or 'puk-vis-figure--open' in b['cls']: cat='offene Erklärgrafik (flächenlos)'
          elif 'status' in b['ctx'] or 'controls' in b['ctx'] or 'carousel__controls' in b['cls'] or 'carousel__status' in b['cls']: cat='Karussell-Steuerung/Status ohne Fläche'
          elif mode=='ruhe' and b['effbg']==bandbg and b['bg'].startswith('rgba(0, 0, 0, 0)'): cat='direkt auf dem Band ohne eigene Fläche'
          elif mode!='ruhe' and r['ruhe'][p][a['i']]['effbg']==r['ruhe'][p][0]['effbg'] and r['ruhe'][p][a['i']]['bg'].startswith('rgba(0, 0, 0, 0)'): cat='direkt auf dem Band ohne eigene Fläche'
          else:
            cat='ABWEICHUNG in heller Fläche'
            if len(ex)<5: ex.append(f"      {b['tag']}.{b['cls'][:40]}: "+'; '.join(f'{k} {a[k]} -> {b[k]}' for k in dk))
          cnt[cat]+=1
        line=f'  {mode:6} {"Band" if p=="b" else "Nachtblau"}: {n} sichtbare Elemente; gleich wie Weiss {n-sum(cnt.values())}; '+'; '.join(f'{k}: {v}' for k,v in cnt.items())
        out.append(line); out+=ex
        if mode=='ruhe':
          low=[x for x in o if x['contrast'] is not None and x['contrast']<4.5]
          c=collections.Counter(('offen' if 'open' in x['ctx'] else 'sonst') for x in low)
          cs=[x['contrast'] for x in o if x['contrast'] is not None and 'open' not in x['ctx']]
          out.append(f'         Textkontrast < 4,5:1: {len(low)} ({dict(c)}); Minimum ausserhalb offener Erklärgrafik {min(cs)}:1')
          for x in low[:12]: out.append(f"           {x['tag']}.{x['cls'][:30]} [{x['ctx'] or '-'}] {x['color']} auf {x['effbg']} = {x['contrast']}:1")
    z=r['zustaende']
    for p in ['b','n']:
      c=collections.Counter();bad=[]
      for a,b in zip(z['w'],z[p]):
        if not a.get('ruhe'):continue
        kind='Karussell-Knopf' if 'carousel__btn' in a['cls'] else 'Erklärmuster-Knopf' if 'puk-vis-btn' in a['cls'] else 'Link'
        for s in ['ruhe','hover','fokus','gedrueckt']:
          c[(kind,'gleich' if a[s]==b[s] else 'anders')]+=1
          if a[s]!=b[s] and kind!='Link' and len(bad)<6: bad.append(f'      {kind} {a["text"]} {s}: {a[s]} -> {b[s]}')
          if a[s]!=b[s] and kind=='Link' and len(bad)<6: bad.append(f'      Link «{a["text"]}» {s}: {a[s][:70]} -> {b[s][:70]}')
      out.append(f'  Zustände (Ruhe, Hover, Fokus, gedrückt ohne Hover) {"Band" if p=="b" else "Nachtblau"}: '+'; '.join(f'{k[0]} {k[1]} {v}' for k,v in sorted(c.items())))
      out+=bad
print('\n'.join(out))
