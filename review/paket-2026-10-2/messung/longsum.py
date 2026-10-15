import json,sys
r=json.load(open(sys.argv[1]))
print(f"{len(r)} Fälle (verlängerte Abfolgen)")
long=[x for x in r if x['F'] and x['La'] and x['La']>x['F']]
print('  länger als eine Seite:', len(long))
together=sum(1 for x in r if x['L']==x['K']==x['F'] and x['L'])
print('  Titel, Kernaussage, Anfang auf einer Seite:', together)
direct=sum(1 for x in r if x['C'] and x['La'] and x['C']==x['La'])
print('  Kennzeichnung direkt nach dem Ende:', direct)
blank=sum(1 for x in r if x['blank'])
print('  Dokumente/Fälle mit leerer Seite:', blank)
before_thin=[x for x in r if x['L'] and x['thin'] and str(x['L']-1) in x['thin'].split(',')]
print('  fast leere Seite direkt vor der Figur:', len(before_thin), sorted({(x['page'],x['fig'],x['set']) for x in before_thin})[:12])
gap=[x for x in r if x['L'] and x['L']>1]
