# Nachprüfung (15.10.2026): Kennzahlen aus den Ergebnissen von np-analyse.py.
# Aufruf: python3 -I np-vergleich.py <arbeitsordner mit *.json> > ergebnisse/kennzahlen.txt
import sys, json, os
W = sys.argv[1]
def load(*names):
    d = {}
    for n in names:
        p = os.path.join(W, n + '.json')
        if os.path.exists(p): d.update(json.load(open(p)))
    return d
def key(name): return name.split('__', 1)[1]  # ohne Website-Ordner (depression-angehoerige vs. zz-dep-test)
def rekey(d): return {key(k): v for k, v in d.items()}

neu, alt, paket, gegen = (rekey(load(a + '-st', a + '-dp')) for a in ('neu', 'alt', 'paket', 'gegen'))
print('== Echte Seiten (Starter 3, Kopie «Depression» 7) × 12 Einstellungen, ohne Marken')
for lab, d in (('neu c65db24', neu), ('vorher 8abc333', alt), ('Paket 1047ad6', paket), ('Gegenprobe Figurregel 8abc333 am neuen Stand', gegen)):
    figs = [f for v in d.values() for f in v['figuren']]
    print(f"{lab}: {len(d)} PDF, {len(figs)} Figurfälle; ganz auf einer Seite {sum(f['ganz'] for f in figs)}; "
          f"Titel+Kern(+Anfang) zusammen {sum(f['kopf'] for f in figs)}; Kennzeichnung direkt {sum(f['kennz'] for f in figs)}; "
          f"PDF mit leerer Seite {sum(1 for v in d.values() if v['leer'])}; leere Rahmen am Seitenanfang/-ende "
          f"{sum(1 for v in d.values() for b in v['leere_rahmen'] if b['lage'] != 'Mitte')} in {sum(1 for v in d.values() if any(b['lage'] != 'Mitte' for b in v['leere_rahmen']))} PDF; "
          f"leere Bänder in der Seitenmitte {sum(1 for v in d.values() for b in v['leere_rahmen'] if b['lage'] == 'Mitte')}")
# 1 neu gegen Gegenprobe: Seitenbild für Seitenbild
same = sum(1 for k in neu if k in gegen and neu[k]['md5'] == gegen[k]['md5'])
print(f"\nneu gegen Gegenprobe (Figurregel 8abc333 am neuen Stand): {same} von {len(neu)} PDF Seitenbild für Seitenbild gleich (MD5 der Bildpunkte, 50 dpi)")
for k in neu:
    if k in gegen and neu[k]['md5'] != gegen[k]['md5']: print('  verschieden:', k, neu[k]['seiten'], gegen[k]['seiten'])
# 2 neu gegen 8abc333: Lage jeder Figur
print('\nneu gegen 8abc333, je Figur (Seite von Titel, Kern, Anfang, Ende, Kennzeichnung):')
gleich = versch = 0; ganz_beide = 0; seiten_gleich = 0
for k in neu:
    a = alt.get(k)
    if not a: print('  fehlt in 8abc333:', k); continue
    if a['seiten'] == neu[k]['seiten']: seiten_gleich += 1
    for fn, fa in zip(neu[k]['figuren'], a['figuren']):
        t = lambda f: (f['L'], f['K'], f['F'], f['E'], f['C'])
        if t(fn) == t(fa): gleich += 1
        else: versch += 1; print('  verschieden:', k, fn['id'], t(fa), '->', t(fn))
        ganz_beide += fn['ganz'] and fa['ganz']
print(f"  gleiche Seiten aller Teile: {gleich}, verschieden: {versch}; in beiden ganz auf einer Seite: {ganz_beide}; Seitenzahl des PDF gleich: {seiten_gleich} von {len(neu)}")
# 3 Paket: Abweichungsfälle und K-1 (Bestätigung, dass die Methode die Fehler findet)
ab = [(k, f['id']) for k, v in paket.items() for f in v['figuren'] if not f['ganz'] and f['n']]
print(f"\nPaket 1047ad6: kurze Abfolgen über zwei Seiten {len(ab)}: {sorted(set(i for _, i in ab))}; "
      f"leere Seite: {[k for k, v in paket.items() if v['leer']]}")
# 4 Kopiervorlagen
for lab, n in (('neu', 'neu-muster'), ('8abc333', 'alt-muster')):
    d = load(n)
    print(f"Kopiervorlagen {lab}: {len(d)} PDF; leere Seite {sum(1 for v in d.values() if v['leer'])}; leere Rahmen am Seitenanfang/-ende "
          f"{sum(1 for v in d.values() for b in v['leere_rahmen'] if b['lage'] != 'Mitte')}; leere Bänder Mitte {sum(1 for v in d.values() for b in v['leere_rahmen'] if b['lage'] == 'Mitte')}")
# 5 verlängerte Abfolgen
print('\n== Abfolgen verlängert (nur die 4 Abfolge-Figuren gezählt)')
for lab, n in [('fünffach, gekennzeichnet (Abnahme)', 'x5k'), ('fünffach, ohne Kennzeichen, neu', 'x5o'), ('fünffach, ohne Kennzeichen, 8abc333', 'x5a')] + [(f'{f}-fach, gekennzeichnet', f'r{f}') for f in (1, 2, 3, 4, 6, 8)]:
    d = load(n + '-st', n + '-dp')
    figs = [f for v in d.values() for f in v['figuren'] if f['n']]
    fehl = [(k.split('__')[1], k.split('__', 3)[3], f['id'], (f['L'], f['K'], f['F'], f['E'], f['C'])) for k, v in d.items() for f in v['figuren'] if f['n'] and not (f['kopf'] and f['kennz'])]
    print(f"{lab}: {len(figs)} Fälle; Titel, Kern, Anfang zusammen {sum(f['kopf'] for f in figs)}; Kennzeichnung direkt {sum(f['kennz'] for f in figs)}; "
          f"PDF mit leerer Seite {sum(1 for v in d.values() if v['leer'])}; leere Rahmen am Seitenanfang/-ende {sum(1 for v in d.values() for b in v['leere_rahmen'] if b['lage'] != 'Mitte')}; "
          f"ganz auf einer Seite {sum(f['ganz'] for f in figs)}")
    for x in fehl[:12]: print('   nicht erfüllt:', *x)
    for k, v in d.items():
        if v['leer']: print('   leere Seite:', k, v['leer'], 'von', v['seiten'])
