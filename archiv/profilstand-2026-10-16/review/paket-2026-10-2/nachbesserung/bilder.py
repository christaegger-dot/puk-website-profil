# Nachbesserung P-1/K-1 (15.10.2026): Seitenbilder für die Stichproben. Je Zeile ein PDF mit Beschriftung, die Seiten
# nebeneinander (40 dpi). Aufruf: python3 -I bilder.py <ausgabe.png> "<beschriftung>|<pdf>|<erste seite>|<letzte seite>" …
import sys, subprocess, tempfile, glob, os
from PIL import Image, ImageDraw
out, rows = sys.argv[1], sys.argv[2:]
bands = []
for spec in rows:
    label, pdf, a, b = spec.split('|')
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(['pdftoppm', '-r', '40', '-png', '-f', a, '-l', b, pdf, os.path.join(t, 'p')], check=True)
        fs = sorted(glob.glob(os.path.join(t, 'p-*.png')), key=lambda x: int(x.rsplit('-', 1)[1][:-4]))
        ims = [Image.open(f).convert('RGB') for f in fs]
        nums = [int(f.rsplit('-', 1)[1][:-4]) for f in fs]
    W = sum(i.size[0] for i in ims) + 10 * (len(ims) + 1); H = max(i.size[1] for i in ims) + 34
    band = Image.new('RGB', (W, H), (70, 70, 70)); d = ImageDraw.Draw(band); d.text((10, 6), label, fill=(255, 255, 255))
    x = 10
    for n, im in zip(nums, ims):
        d.text((x + im.size[0] // 2 - 10, 20), f'S.{n}', fill=(255, 255, 255)); band.paste(im, (x, 32)); x += im.size[0] + 10
    bands.append(band)
W = max(b.size[0] for b in bands); H = sum(b.size[1] for b in bands)
o = Image.new('RGB', (W, H), (70, 70, 70)); y = 0
for b in bands: o.paste(b, (0, y)); y += b.size[1]
o.save(out, optimize=True)
