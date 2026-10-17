# Nachbesserung K-1 (15.10.2026): Figurrahmen je PDF-Seite aus dem Seitenbild (60 dpi, Graustufen).
# Ein Figurrahmen ist eine Fläche im Figurgrau (--surface-structure #F7F7F7, Grauwert 240–250), deren Innenrand links und
# rechts (1. bis 3. Bildpunkt) durchgehend grau ist: Innenabstand der Figur, im Druck mindestens 16 px × 80 % = 8 Bildpunkte. Je zusammenhängendem Rahmenstück auf einer Seite:
#   «leer»: im Rahmenstück kein dunkler Bildpunkt (< 200: kein Text, keine Linie) – das ist K-1 (leerer Rahmen);
#   «Rest»: Rahmenstück mit Inhalt, das bis ans Seitenende reicht; gemessen wird die graue Fläche unter dem letzten
#           Inhalt. So sieht jede Figur aus, die zwischen zwei Schritten umbricht; kein K-1.
# Der Detektor der Prüfsitzung (pruefung/leerer-rahmen.py) zählt beides als Treffer; dieser trennt es.
# Aufruf: python3 -I rahmen.py <pdf-ordner> <ergebnis.json>
import sys, os, subprocess, json, tempfile, glob
from collections import Counter
from PIL import Image

def grey(v): return 240 <= v <= 250

def analyse(img):
    W, H = img.size; px = img.load()
    rows = []
    for y in range(H):
        g = [x for x in range(W) if grey(px[x, y])]
        if len(g) > W * 0.3: rows.append((g[0], g[-1]))
    if not rows: return []
    x0, x1 = Counter(rows).most_common(1)[0][0]
    if x1 - x0 < W * 0.3: return []
    def inside(y):
        return all(grey(px[x, y]) for x in list(range(x0 + 1, x0 + 4)) + list(range(x1 - 3, x1)))
    def dark(y): return sum(1 for x in range(x0 + 4, x1 - 3) if px[x, y] < 200)
    nonwhite = [y for y in range(H) if any(px[x, y] < 252 for x in range(0, W, 2))]
    top, bottom = (nonwhite[0], nonwhite[-1]) if nonwhite else (0, H - 1)
    segs = []; y = 0
    while y < H:
        if inside(y):
            ya = y
            while y < H and inside(y): y += 1
            yb = y - 1
            if yb - ya + 1 >= H * 0.01:
                d = [yy for yy in range(ya, yb + 1) if dark(yy)]
                at_bottom = yb >= bottom - 3; at_top = ya <= top + 3
                if not d: segs.append({'art': 'leer', 'oben': ya, 'unten': yb, 'hoehe%': round((yb - ya + 1) / H * 100, 1), 'seitenende': at_bottom, 'seitenanfang': at_top})
                elif at_bottom: segs.append({'art': 'Rest', 'rest%': round((yb - d[-1]) / H * 100, 1)})
        y += 1
    return segs

d, out = sys.argv[1], sys.argv[2]; res = {}
for pdf in sorted(glob.glob(os.path.join(d, '*.pdf'))):
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(['pdftoppm', '-r', '60', '-gray', '-png', pdf, os.path.join(t, 'p')], check=True)
        pages = {}
        for f in sorted(glob.glob(os.path.join(t, 'p-*.png')), key=lambda x: int(x.rsplit('-', 1)[1][:-4])):
            s = analyse(Image.open(f).convert('L'))
            if s: pages[int(f.rsplit('-', 1)[1][:-4])] = s
        res[os.path.basename(pdf)] = pages
json.dump(res, open(out, 'w'), indent=1)
leer = {k: {p: [s for s in v if s['art'] == 'leer' and (s['seitenende'] or s['seitenanfang'])] for p, v in pg.items()} for k, pg in res.items()}
leer = {k: {p: s for p, s in v.items() if s} for k, v in leer.items()}; leer = {k: v for k, v in leer.items() if v}
mitte = sum(1 for pg in res.values() for v in pg.values() for s in v if s['art'] == 'leer' and not (s['seitenende'] or s['seitenanfang']))
print(len(res), 'PDF;', mitte, 'leere Rahmenstücke in der Seitenmitte (zur Ansicht);', len(leer), 'PDF mit leerem Rahmen am Seitenende oder -anfang:', json.dumps(leer, ensure_ascii=False)[:2000])
