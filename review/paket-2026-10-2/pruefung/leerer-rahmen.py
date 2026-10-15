# Prüfsitzung P-1: leerer Figurrahmen am Seitenende. Je PDF-Seite (Bild, 30 dpi, Graustufen) von unten her:
# weisse Zeilen (Rand) überspringen; stehen danach mindestens 5 % der Seitenhöhe Zeilen, die Figurgrau enthalten
# und keinen dunklen Bildpunkt (kein Text, keine Linie ausser dem Rahmen), beginnt dort eine Figur ohne Inhalt.
# Aufruf: python3 -I leerer-rahmen.py <pdf-ordner> <ergebnis.json>
import sys, os, subprocess, json, tempfile, glob
from PIL import Image
d, out = sys.argv[1], sys.argv[2]; res = {}
for pdf in sorted(glob.glob(os.path.join(d, '*.pdf'))):
    with tempfile.TemporaryDirectory() as t:
        subprocess.run(['pdftoppm', '-r', '30', '-gray', '-png', pdf, os.path.join(t, 'p')], check=True)
        hits = []
        for f in sorted(glob.glob(os.path.join(t, 'p-*.png')), key=lambda x: int(x.rsplit('-', 1)[1][:-4])):
            im = Image.open(f).convert('L'); W, H = im.size; px = im.load(); y = H - 1
            while y > 0 and all(px[x, y] >= 252 for x in range(0, W, 2)): y -= 1
            run = 0
            while y > 0:
                row = [px[x, y] for x in range(W)]
                grey = sum(1 for v in row if 236 <= v <= 250); dark = sum(1 for v in row if v < 180)
                if grey > W * 0.3 and dark <= 4: run += 1; y -= 1
                else: break
            if run >= H * 0.05: hits.append(f"{int(f.rsplit('-', 1)[1][:-4])}:{round(run / H * 100)}%")
        res[os.path.basename(pdf)] = hits
json.dump(res, open(out, 'w'), indent=1)
print(len(res), 'PDF;', sum(1 for v in res.values() if v), 'mit leerem Rahmen am Seitenende;', sum(len(v) for v in res.values()), 'Seiten')
