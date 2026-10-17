# Nachbesserung P-1/K-1 (15.10.2026): Auswertung der Druckmessungen aus alle-messungen.sh.
# Aufruf: python3 -I auswertung.py <ergebnis-ordner>   (schreibt die Zusammenfassung nach stdout)
import sys, os, json, glob
E = sys.argv[1]
SEQ = {'process', 'decision', 'stepwise-model'}
def lade(name):
    # name-starter.json und name-depression.json; Robustheit: robust-x<n>-…; Kopiervorlagen: neu-muster.json
    muster = [name + '.json'] if name == 'neu-muster' else ([name + '-x*-starter.json', name + '-x*-depression.json'] if name == 'robust' else [name + '-starter.json', name + '-depression.json'])
    out = []
    for m in muster:
        for f in sorted(glob.glob(os.path.join(E, m))): out += json.load(open(f))
    return out
def rahmen(name):
    r = json.load(open(os.path.join(E, 'rahmen-' + name + '.json')))
    leer = [(k, p) for k, pg in r.items() for p, ss in pg.items() for s in ss if s['art'] == 'leer' and (s['seitenende'] or s['seitenanfang'])]
    mitte = [(k, p) for k, pg in r.items() for p, ss in pg.items() for s in ss if s['art'] == 'leer' and not (s['seitenende'] or s['seitenanfang'])]
    rest = [s['rest%'] for pg in r.values() for ss in pg.values() for s in ss if s['art'] == 'Rest']
    return len(r), leer, mitte, rest
def kennzahlen(name, nur=None):
    rs = lade(name); figs = [(r, f) for r in rs for f in r['figs'] if (nur is None or nur(f))]
    n, leer, mitte, rest = rahmen(name)
    fehl = [(r['page'], r['set'], f['id']) for r, f in figs if any(f[k] is None for k in 'LKFEC')]
    return {'PDF': len(rs), 'PDF (Bilder)': n, 'Seiten': sum(r['pages'] for r in rs), 'Fälle': len(figs),
            'Text nicht gefunden': len(fehl), 'mehrdeutig': sum(f['mehrdeutig'] for r, f in figs),
            'ganz auf einer Seite': sum(f['ganz'] for r, f in figs), 'Titel+Kern+Anfang zusammen': sum(f['kopf'] for r, f in figs),
            'Kennzeichnung direkt': sum(f['kennz'] for r, f in figs), 'leere Seiten': sum(len(r['blank']) for r in rs),
            'leere Rahmen (K-1)': len(leer), 'leere Rahmenstücke Seitenmitte': len(mitte),
            'Rahmen mit Inhalt bis Seitenende': len(rest), 'davon grauer Rest >= 10 %': sum(1 for x in rest if x >= 10)}, rs, figs, leer
def zeige(titel, k):
    print('\n## ' + titel); [print(f'- {a}: {b}') for a, b in k.items()]

k_neu, neu, fneu, lneu = kennzahlen('neu'); zeige('Echte Seiten, neu (Starter 3 + Kopie «Depression» 7, je 12 Einstellungen)', k_neu)
k_alt, alt, falt, lalt = kennzahlen('8abc333'); zeige('Echte Seiten, vorher 8abc333', k_alt)
k_pk, pk, fpk, lpk = kennzahlen('paket'); zeige('Echte Seiten, Paket 2026.10.2 vor der Nachbesserung (1047ad6)', k_pk)
print('  K-1 im Paket, Beispiele:', sorted(set(lpk))[:6])
k_mu, mu, fmu, lmu = kennzahlen('neu-muster'); zeige('Kopiervorlagen visualisierungsmuster.html und erklaermuster.html, neu', k_mu)

# Gegenprobe: gleiche Seiten, aber Figurregel von 8abc333 (Rahmen teilbar, Hülle unteilbar) – Text je PDF-Seite vergleichen
gp = {(r['page'], r['set']): r for r in lade('gegenprobe')}
gleich = sum(1 for r in neu if gp[(r['page'], r['set'])]['textHash'] == r['textHash'])
print(f'\n## Gegenprobe Regel 8abc333 an denselben Seiten\n- PDF mit gleicher Seitenzahl und gleichem Text auf jeder Seite: {gleich} von {len(neu)}')

# Vergleich mit 8abc333 je Figur: Form und Seitenlage
A = {(r['page'], r['set'], f['id']): (r, f) for r, f in falt}
same_form = same_pages = 0; diff = []
for r, f in fneu:
    ra, fa = A[(r['page'], r['set'], f['id'])]
    if f['ganz'] == fa['ganz'] and f['kopf'] == fa['kopf'] and f['kennz'] == fa['kennz']: same_form += 1
    if all(f[x] == fa[x] for x in 'LKFEC'): same_pages += 1
    else: diff.append((r['page'], r['set'], f['id'], fa['L'], f['L']))
seiten = sum(1 for r in neu for ra in alt if (ra['page'], ra['set']) == (r['page'], r['set']) and ra['pages'] == r['pages'])
print(f'\n## Vergleich je Figur mit 8abc333\n- gleiche Form (ganz, Kopf, Kennzeichnung): {same_form} von {len(fneu)}\n- gleiche Seite für Titel, Kern, Anfang, Ende, Kennzeichnung: {same_pages} von {len(fneu)}\n- PDF mit gleicher Seitenzahl: {seiten} von {len(neu)}')
by = {}
for p, s, i, a, b in diff: by.setdefault(p, []).append(f'{s} {i} S.{a}→{b}')
for p, v in by.items(): print(f'  - {p}: {len(v)} Fälle, z. B. {v[:3]}')

k_lk, lk, flk, llk = kennzahlen('lang-kennz', lambda f: f['split']); zeige('Abfolgen fünffach, gekennzeichnet (Abnahme)', k_lk)
print('  Abweichungen:', [(r['page'], r['set'], f['id'], f['L'], f['K'], f['F'], f['E'], f['C']) for r, f in flk if not (f['kopf'] and f['kennz'])])
k_lo, lo, flo, llo = kennzahlen('lang-ohne', lambda f: f['type'] in SEQ); zeige('Abfolgen fünffach, ohne Kennzeichen, neu', k_lo)
k_la, la, fla, lla = kennzahlen('lang-8abc333', lambda f: f['type'] in SEQ); zeige('Abfolgen fünffach, ohne Kennzeichen, 8abc333', k_la)
k_rb, rb, frb, lrb = kennzahlen('robust', lambda f: f['split']); zeige('Robustheit: gekennzeichnet, 2-, 3-, 4-, 6-, 8-fach', k_rb)
print('  Abweichungen:', [(r['page'], r['faktor'], r['set'], f['id'], f['L'], f['K'], f['F'], f['E'], f['C']) for r, f in frb if not (f['kopf'] and f['kennz'])])
print('  leere Seiten:', [(r['file'], r['blank']) for r in rb if r['blank']])
