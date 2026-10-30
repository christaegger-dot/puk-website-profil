# Gegenprobe O-6: Tests «Helle Komponenten …» (114) und «Erklärgrafiken …» (115) gegen components/bundle.css
# ohne die Rücksetzregel bzw. ohne je einen Selektor. Arbeitet nur in der Kopie <gegenprobe>.
import re, subprocess, sys, os, json
G = sys.argv[1]; out = sys.argv[2]
css_pfad = os.path.join(G, 'components/bundle.css')
orig = open(css_pfad, encoding='utf-8').read()
pre = ':where(.puk-web-band,[data-puk-surface="night"]) :where('
start = orig.index(pre) + len(pre); ende = orig.index('){--text-default:var(--puk-black-100)', start)
liste = orig[start:ende]
# Selektoren auf oberster Ebene trennen (Kommas innerhalb von Klammern ignorieren)
sel, tiefe, cur = [], 0, ''
for ch in liste:
    if ch == ',' and tiefe == 0: sel.append(cur); cur = ''; continue
    tiefe += ch == '('; tiefe -= ch == ')'; cur += ch
sel.append(cur)
regel_ende = orig.index('}', ende) + 1
env = dict(os.environ, CHROMIUM_EXECUTABLE_PATH='/opt/pw-browsers/chromium')
def lauf(css, name):
    open(css_pfad, 'w', encoding='utf-8').write(css)
    p = subprocess.run(['node', '--test', '--test-name-pattern=Helle Komponenten in blauem Band|Erklärgrafiken und Karussell-Knöpfe', 'tests/profilentscheid-2026-10-29.test.mjs'], cwd=G, env=env, capture_output=True, text=True)
    t = p.stdout
    erg = {'name': name, 'helle': 'ok' if re.search(r'^ok \d+ - Helle Komponenten', t, re.M) else 'scheitert',
           'erklaer': 'ok' if re.search(r'^ok \d+ - Erklärgrafiken', t, re.M) else 'scheitert'}
    m = re.findall(r"error: '([^']*)'", t) or re.findall(r'message: (.*)', t)
    erg['meldung'] = m[:2]
    print(json.dumps(erg, ensure_ascii=False), flush=True); return erg
res = [lauf(orig, 'unverändert'), lauf(orig[:orig.index(pre)] + orig[regel_ende:], 'ohne Rücksetzregel')]
for i, s in enumerate(sel):
    rest = ','.join(x for j, x in enumerate(sel) if j != i)
    res.append(lauf(orig[:start] + rest + orig[ende:], 'ohne ' + s))
open(css_pfad, 'w', encoding='utf-8').write(orig)
json.dump({'selektoren': sel, 'ergebnisse': res}, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
