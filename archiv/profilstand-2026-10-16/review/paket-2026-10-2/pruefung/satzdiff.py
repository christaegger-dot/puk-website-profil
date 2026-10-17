# P-7: Satzvergleich zweier Seitenstände. Einheiten = Textknoten (Sätze) und lesbare Attribute.
# Aufruf: python3 satzdiff.py <ordner-alt> <ordner-neu>   (vergleicht alle *.html ausser gate.html)
import sys, os, re, html.parser, collections
ATTR = ('aria-label', 'alt', 'title', 'content', 'placeholder', 'aria-description')
class P(html.parser.HTMLParser):
    def __init__(s): super().__init__(); s.u = []; s.skip = 0
    def handle_starttag(s, t, a):
        if t in ('script', 'style'): s.skip += 1
        for k, v in a:
            if k in ATTR and v: s.u.append(f'@{k}: {v}')
    def handle_endtag(s, t):
        if t in ('script', 'style'): s.skip -= 1
    def handle_data(s, d):
        if s.skip: return
        d = re.sub(r'\s+', ' ', d).strip()
        if not d: return
        for x in re.split(r'(?<=[.!?])\s+', d): s.u.append(x)
def units(f):
    p = P(); p.feed(open(f, encoding='utf-8').read()); return collections.Counter(p.u)
a, b = sys.argv[1], sys.argv[2]
tot = 0
for f in sorted(os.listdir(b)):
    if not f.endswith('.html') or f == 'gate.html': continue
    ua, ub = units(os.path.join(a, f)), units(os.path.join(b, f))
    gone, new = ua - ub, ub - ua
    n = sum(gone.values()) + sum(new.values()); tot += n
    print(f'== {f}: {sum(gone.values())} entfallen, {sum(new.values())} neu')
    for x in gone: print('   -', x[:160])
    for x in new: print('   +', x[:160])
print('Summe geänderte Einheiten:', tot)
