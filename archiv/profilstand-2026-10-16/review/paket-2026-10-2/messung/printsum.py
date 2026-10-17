import json,sys
r=json.load(open(sys.argv[1]))
bad=[];blankdocs=set();thindocs=set()
for x in r:
    issues=[]
    if None in (x['L'],x['K'],x['F'],x['La'],x['C']): issues.append('nicht gefunden '+str({k:x[k] for k in 'L K F La C'.split()}))
    else:
        if not (x['L']==x['K']==x['F']): issues.append(f"Titel/Kern/Anfang getrennt L{x['L']} K{x['K']} F{x['F']}")
        if x['C']-x['La']>0: issues.append(f"Kennzeichnung nicht direkt (Ende S.{x['La']}, Kennz. S.{x['C']})")
    if x['blank']: blankdocs.add((x['site'],x['page'],x['set'],'leer '+x['blank']))
    if x.get('thin'): thindocs.add((x['site'],x['page'],x['set'],'fast leer '+x['thin']))
    if issues: bad.append((x['site'][:5],x['page'],x['set'],x['fig'],x['type'],'; '.join(issues)))
figs=len({(x['site'],x['page'],x['fig']) for x in r}); sets=len({x['set'] for x in r})
print(f"{figs} Figuren × {sets} Einstellungen = {len(r)} Fälle; Fälle mit Befund: {len(bad)}; Dokumente mit leerer Seite: {len(blankdocs)}")
for b in bad: print('  ',*b)
for d in sorted(blankdocs): print('  ',*d)
print('Dokumente mit fast leerer Seite (<120 Zeichen):', len(thindocs))
for d in sorted(thindocs): print('  ',*d)
spl=[x for x in r if x['F'] and x['La'] and x['La']>x['F']]
print('Figuren über mehr als eine Seite (Fälle):', len(spl), sorted({(x['page'],x['fig']) for x in spl}))
