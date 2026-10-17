# Auswertung der Gegenprobe: python3 druck-auswertung.py <ergebnis.json> [<ergebnis-vorher.json>]
import json, sys
r = json.load(open(sys.argv[1]))
k = lambda x: (x['site'], x['page'], x['set'], x['fig'])
miss = [x for x in r if None in (x['L'], x['K'], x['F'], x['E'], x['C'])]
ok = [x for x in r if x not in miss]
print(f"{len(r)} Fälle; nicht eindeutig gefunden: {len(miss)}")
for x in miss: print('   nicht gefunden', x['page'], x['set'], x['fig'], {c: x[c] for c in 'LKFEC'})
print('leere Seiten:', sum(1 for x in r if x['blank']), 'Fälle')
print('Titel, Kernaussage, Anfang nicht auf einer Seite:', [(x['page'], x['set'], x['fig']) for x in ok if not x['L'] == x['K'] == x['F']])
print('Kennzeichnung nicht auf der Seite des Endes:', [(x['page'], x['set'], x['fig'], x['E'], x['C']) for x in ok if x['C'] != x['E']])
split = [x for x in ok if x['E'] > x['F']]
print('Darstellung über zwei Seiten:', len(split))
for x in split: print('  ', x['page'], x['set'], x['fig'], x['type'], f"Anfang S.{x['F']} Ende S.{x['E']}")
if len(sys.argv) > 2:
    B = {k(x): x for x in json.load(open(sys.argv[2]))}
    ch = [x for x in ok if k(x) in B and None not in [B[k(x)][c] for c in 'LKFEC'] and (B[k(x)]['E'] > B[k(x)]['F']) != (x['E'] > x['F'])]
    print('Geändert gegenüber vorher (geteilt/ungeteilt):', len(ch))
    for x in ch: b = B[k(x)]; print('  ', x['page'], x['set'], x['fig'], f"vorher Titel S.{b['L']} Darst. S.{b['F']}–{b['E']} Kennz. S.{b['C']} ({b['pages']} S.) · nachher Titel S.{x['L']} Darst. S.{x['F']}–{x['E']} Kennz. S.{x['C']} ({x['pages']} S.)")
