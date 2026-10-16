# Nachprüfung (15.10.2026), Nebenbeobachtung: Steht ein Zwischentitel (h2, h3) als letzte Zeile einer PDF-Seite,
# getrennt von seinem Text? Ausserhalb der Figurregeln; nur gezählt, nicht geändert.
# Aufruf: python3 -I np-zwischentitel.py <html-ordner> <pdf-ordner> …
import sys, re, glob, os, subprocess, html
def norm(s): return re.sub(r'\W', '', html.unescape(s).lower())
src = sys.argv[1]; n = 0; hits = []
for d in sys.argv[2:]:
    for pdf in sorted(glob.glob(os.path.join(d, '*.pdf'))):
        site, page = os.path.basename(pdf).split('__')[:2]
        f = os.path.join(src, site, page + '.html')
        if not os.path.exists(f): continue
        heads = [norm(re.sub('<[^>]+>', '', h)) for h in re.findall(r'<h[23][^>]*>(.*?)</h[23]>', open(f).read(), re.S)]
        out = subprocess.run(['pdftotext', '-layout', pdf, '-'], capture_output=True).stdout.decode()
        pages = out.split('\f')
        for i, p in enumerate(pages[:-1]):
            lines = [l for l in p.splitlines() if l.strip()]
            if not lines: continue
            last = norm(lines[-1])
            if len(last) > 8 and any(last == h or (h.endswith(last) and len(last) > 12) for h in heads): hits.append((os.path.basename(pdf), i + 1, lines[-1].strip()))
        n += 1
print(n, 'PDF;', len(hits), 'Seiten enden mit einem Zwischentitel')
for h in hits: print(' ', *h)
