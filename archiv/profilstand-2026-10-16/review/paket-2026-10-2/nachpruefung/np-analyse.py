# Nachprüfung der Nachbesserung, Paket 2026.10.2 (15.10.2026). Eigene Auswertung, unabhängig von rahmen.py und auswertung.py.
# Je PDF:
#  - Seitenbild (pdftoppm, 50 dpi, Graustufen) je Seite:
#      leer       = kein Bildpunkt dunkler als 200 (kein Text, keine Linie, keine Zeichnung)
#      Rahmenband = zusammenhängende Zeilen, in denen mindestens 30 % der Breite im Figurgrau (#F7F7F7, 238–250) liegen.
#                   «leer» heisst: im waagrechten Bereich des Bandes kein Bildpunkt < 200. Gemeldet werden leere Bänder
#                   ab 1,5 % Seitenhöhe, getrennt nach Lage (Seitenanfang, Seitenende, Mitte).
#  - Lage der Figurteile aus «pdftotext -bbox» (Wörter je Seite in Reihenfolge der Datei): Seite von Titel, Kernaussage
#    und Kennzeichnung (zusammenhängender Text), erstem Schritt (erster Fund ab Titel) und letztem Schritt (letzter Fund);
#    Schritte über ihre Wörter ab 5 Zeichen, weil nebeneinanderstehende Schritte im PDF zeilenweise verschränkt sind.
#  - Prüfsumme je Seitenbild (für den Vergleich Bild für Bild zwischen zwei Ständen).
# Aufruf: python3 -I np-analyse.py <pdf-ordner> <ergebnis.json>
import sys, os, glob, json, re, subprocess, tempfile, hashlib, html, unicodedata
from PIL import Image

def norm(s):
    s = unicodedata.normalize('NFKC', s).lower().replace('­', '')
    return re.sub(r'[^0-9a-zäöüéèàâç]', '', s)

def bbox_pages(pdf):
    out = subprocess.run(['pdftotext', '-bbox', pdf, '-'], capture_output=True, check=True).stdout.decode('utf8', 'replace')
    pages, toks = [], []
    for blk in re.split(r'<page ', out)[1:]:
        ws = [norm(html.unescape(w)) for w in re.findall(r'<word[^>]*>(.*?)</word>', blk, re.S)]
        pages.append(''.join(ws)); toks.append(set(ws) | {a + b for a, b in zip(ws, ws[1:])})
    return pages, toks

def where_tok(toks, s):
    # Schritte stehen im Druck teils nebeneinander; ihre Zeilen sind im PDF verschränkt. Darum: alle Wörter ab 5 Zeichen
    # des Schritttexts auf derselben Seite (auch über Trennstriche am Zeilenende hinweg).
    ws = [w for w in (norm(x) for x in s.split()) if len(w) >= 5]
    if not ws: return []
    return [i + 1 for i, t in enumerate(toks) if all(w in t for w in ws)]

def bands(img):
    W, H = img.size; px = img.load(); g = []
    for y in range(H):
        xs = [x for x in range(W) if 238 <= px[x, y] <= 250]
        g.append((xs[0], xs[-1]) if len(xs) > 0.3 * W else None)
    res = []; y = 0
    while y < H:
        if g[y]:
            ya = y; x0 = min(v[0] for v in g[ya:ya + 1]); x1 = g[ya][1]
            while y < H and g[y]: x0 = min(x0, g[y][0]); x1 = max(x1, g[y][1]); y += 1
            yb = y - 1; h = (yb - ya + 1) / H
            dark = any(px[x, yy] < 200 for yy in range(ya, yb + 1) for x in range(x0, x1 + 1))
            res.append({'oben': round(ya / H * 100, 1), 'unten': round((yb + 1) / H * 100, 1), 'hoehe': round(h * 100, 1), 'leer': not dark})
        y += 1
    return res

def page_info(png):
    img = Image.open(png).convert('L'); W, H = img.size; px = img.load()
    ink = [y for y in range(H) if any(px[x, y] < 200 for x in range(W))]
    nonwhite = [y for y in range(H) if any(px[x, y] < 253 for x in range(0, W, 2))]
    b = bands(img)
    top = nonwhite[0] / H * 100 if nonwhite else 0; bot = (nonwhite[-1] + 1) / H * 100 if nonwhite else 100
    for x in b: x['lage'] = 'Seitenende' if x['unten'] >= bot - 0.6 else ('Seitenanfang' if x['oben'] <= top + 0.6 else 'Mitte')
    return {'leer': not ink, 'tinte_bis': round((ink[-1] + 1) / H * 100, 1) if ink else 0,
            'baender': b, 'md5': hashlib.md5(img.tobytes()).hexdigest()[:12]}

def where(pages, s, end=False):
    k = norm(s); k = k[-22:] if end else k[:22]
    if len(k) < 6: return []
    return [i + 1 for i, t in enumerate(pages) if k in t]

d, out = sys.argv[1], sys.argv[2]
texte = json.load(open(os.path.join(d, 'texte.json'))) if os.path.exists(os.path.join(d, 'texte.json')) else {}
res = {}
for pdf in sorted(glob.glob(os.path.join(d, '*.pdf'))):
    name = os.path.basename(pdf)[:-4]; key = '__'.join(name.split('__')[:3])
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(['pdftoppm', '-r', '50', '-gray', '-png', pdf, os.path.join(t, 'p')], check=True)
        pngs = sorted(glob.glob(os.path.join(t, 'p-*.png')), key=lambda x: int(x.rsplit('-', 1)[1][:-4]))
        info = [page_info(p) for p in pngs]
    pt, tk = bbox_pages(pdf); figs = []
    for f in texte.get(key, []):
        L = where(pt, f['label']); K = where(pt, f['kern']); C = where(pt, f['caption'], True)
        Fi = [x for x in where_tok(tk, f['first']) if not L or x >= L[0]] if f['first'] else []
        E = where_tok(tk, f['last']) if f['last'] else []
        r = {'id': f['id'], 'type': f['type'], 'n': f['n'], 'L': L[0] if L else None, 'K': K[0] if K else None,
             'F': Fi[0] if Fi else None, 'E': E[-1] if E else None, 'C': C[-1] if C else None}
        teile = [r[x] for x in ('L', 'K', 'F', 'E', 'C') if f[{'L': 'label', 'K': 'kern', 'F': 'first', 'E': 'last', 'C': 'caption'}[x]]]
        r['ganz'] = None not in teile and len(set(teile)) == 1
        r['kopf'] = r['L'] is not None and r['L'] == r['K'] and (not f['first'] or r['K'] == r['F'])
        r['kennz'] = r['C'] is not None and (r['E'] == r['C'] if f['last'] else True)
        figs.append(r)
    res[name] = {'seiten': len(info), 'leer': [i + 1 for i, x in enumerate(info) if x['leer']],
                 'leere_rahmen': [{'seite': i + 1, **b} for i, x in enumerate(info) for b in x['baender'] if b['leer'] and b['hoehe'] >= 1.5],
                 'md5': [x['md5'] for x in info], 'tinte_bis': [x['tinte_bis'] for x in info], 'figuren': figs}
json.dump(res, open(out, 'w'), indent=1, ensure_ascii=False)
n = len(res); lp = sum(1 for v in res.values() if v['leer']); lr = sum(1 for v in res.values() if any(b['lage'] != 'Mitte' for b in v['leere_rahmen']))
print(f'{n} PDF; mit leerer Seite: {lp}; mit leerem Rahmen am Seitenanfang/-ende: {lr}')
