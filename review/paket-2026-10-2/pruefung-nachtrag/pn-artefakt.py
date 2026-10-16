# Prüfung Nachtrag #131 (16.10.2026): Artefakt «PUK Zürich Website-Profil» gegen das Repository.
# Eingabe: alle Dateien unter project/ des Artefakts, gelesen mit dem Artifact-Werkzeug (nur lesen, nicht veröffentlicht).
# Vergleicht byte für byte mit dem Arbeitsbaum, mit der Liste der Nachprüfung für Version 47 (16-stellige SHA-256)
# und mit der Liste der bauenden Sitzung; prüft die drei Vorschaukarten auf das Kennzeichen.
# Aufruf im Stamm eines Arbeitsbaums von 1ba2568: python3 -I pn-artefakt.py <artefakt/project> <dateien-des-PR.txt>
import sys, os, hashlib, subprocess, json, re
A, prdatei = sys.argv[1], sys.argv[2]
h = lambda p: hashlib.sha256(open(p, 'rb').read()).hexdigest()
art = sorted(os.path.relpath(os.path.join(d, f), A) for d, _, fs in os.walk(A) for f in fs)
repo = set(f for f in subprocess.run(['git', 'ls-files', '-z'], capture_output=True, check=True).stdout.decode().split('\0') if f)
gem = [f for f in art if f in repo]; nur = [f for f in art if f not in repo]
gleich = [f for f in gem if open(os.path.join(A, f), 'rb').read() == open(f, 'rb').read()]
print('Artefakt: Dateien unter project/', len(art), '· gemeinsam mit dem Repository', len(gem), '· byte-gleich', len(gleich), '· nur im Artefakt', len(nur),
      '(davon preview.html', sum(f.endswith('/preview.html') for f in nur), ')')
eigen = {f: h(f) for f in gem}
ihre = dict((l.split()[1], l.split()[0]) for l in open('review/paket-2026-10-2/nachtrag/ergebnisse/artefakt-v48-gemeinsame-dateien-sha256.txt', encoding='utf-8') if l.strip())
print('Liste der bauenden Sitzung: gleiche Dateien und Prüfsummen', ihre == eigen)
v47 = {l.split()[2]: l.split()[1] for l in open('review/paket-2026-10-2/nachpruefung/ergebnisse/artefakt-v47-abgleich.txt', encoding='utf-8') if len(l.split()) >= 3}
ge = sorted(f for f in v47 if h(os.path.join(A, f))[:16] != v47[f])
pr = set(open(prdatei, encoding='utf-8').read().split())
print('Version 47 -> 48 (gemeinsame Dateien):', len(ge), 'geändert · davon nicht im Pull Request', [f for f in ge if f not in pr],
      '· im Pull Request, aber nicht geändert', sorted(f for f in pr if f in v47 and f not in ge))
d = json.load(open(os.path.join(A, 'design-system.json'), encoding='utf-8'))
print('design-system.json lastChange:', json.dumps({k: d['lastChange'][k] for k in ('by', 'at', 'via')}, ensure_ascii=False))
for k, css in (('VisProzesspfad', 'visual-patterns.css'), ('VisEntscheidungsweg', 'visual-patterns.css'), ('VisModellSchritte', 'erklaermuster.css')):
    readme = open(os.path.join(A, 'components', k, 'README.md'), encoding='utf-8').read()
    pv = open(os.path.join(A, 'components', k, 'preview.html'), encoding='utf-8').read()
    stil = '\n'.join(re.findall(r'<style>(.*?)</style>', pv, re.S))
    zeilen = [l.strip() for l in open('templates/website/longform/' + css, encoding='utf-8') if l.strip()]
    fehlt = [l for l in zeilen if l not in stil]
    print(f'{k}: README nennt data-print-split {"data-print-split" in readme} · Vorschau nennt es {"data-print-split" in pv}'
          f' · Zeilen von {css}, die im eingebetteten CSS der Vorschau fehlen: {len(fehlt)} von {len(zeilen)}')
    for l in fehlt: print('    ' + l[:110])
