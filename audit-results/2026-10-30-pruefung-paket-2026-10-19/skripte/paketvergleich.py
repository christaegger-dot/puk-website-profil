# Vergleich zweier Paket-Zips: Einträge, Zeitstempel, Attribute und Inhalte.
import zipfile, hashlib, sys
a, b = zipfile.ZipFile(sys.argv[1]), zipfile.ZipFile(sys.argv[2])
ia = {i.filename: i for i in a.infolist()}; ib = {i.filename: i for i in b.infolist()}
print('geprüft:', sys.argv[3], len(ia), 'Einträge'); print('neu:    ', sys.argv[4], len(ib), 'Einträge')
print('nur im geprüften:', sorted(set(ia) - set(ib))); print('nur im neuen:', sorted(set(ib) - set(ia)))
diff = []
for n in sorted(set(ia) & set(ib)):
    x, y = ia[n], ib[n]
    meta = [k for k in ('date_time', 'external_attr', 'compress_type') if getattr(x, k) != getattr(y, k)]
    if a.read(n) != b.read(n) or meta: diff.append((n, meta, hashlib.sha256(a.read(n)).hexdigest()[:12], hashlib.sha256(b.read(n)).hexdigest()[:12]))
print('Reihenfolge gleich:', [i.filename for i in a.infolist()] == [i.filename for i in b.infolist()])
print('unterschiedliche Einträge:', len(diff))
for d in diff: print('  ', d[0], 'Metadaten' if d[1] else 'Inhalt', d[1], d[2], '->', d[3])
