# Nachprüfung (15.10.2026): Seitenbilder nebeneinander, mit Beschriftung je Zeile.
# Aufruf: python3 -I np-bild.py <ausgabe.png> "<beschriftung>|<pdf>|<von>|<bis>" …
import sys, subprocess, tempfile, glob, os
from PIL import Image, ImageDraw
rows = []
for spec in sys.argv[2:]:
    lab, pdf, a, b = spec.split('|')
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(['pdftoppm', '-r', '40', '-f', a, '-l', b, '-png', pdf, os.path.join(t, 'p')], check=True)
        ims = [Image.open(f).convert('RGB') for f in sorted(glob.glob(os.path.join(t, 'p-*.png')), key=lambda x: int(x.rsplit('-', 1)[1][:-4]))]
    w = sum(i.width for i in ims) + 8 * (len(ims) + 1); h = max(i.height for i in ims) + 34
    r = Image.new('RGB', (w, h), (205, 205, 205)); d = ImageDraw.Draw(r); d.text((8, 6), lab, fill=(0, 0, 0)); x = 8
    for n, i in enumerate(ims):
        r.paste(i, (x, 26)); d.rectangle([x - 1, 25, x + i.width, 26 + i.height], outline=(90, 90, 90)); d.text((x + 3, 28), f'S. {int(a) + n}', fill=(200, 0, 0)); x += i.width + 8
    rows.append(r)
W = max(r.width for r in rows); H = sum(r.height for r in rows)
out = Image.new('RGB', (W, H), (255, 255, 255)); y = 0
for r in rows: out.paste(r, (0, y)); y += r.height
out.save(sys.argv[1], optimize=True)
