# Prüfung Nachtrag #131 (16.10.2026): Aufbau des Paket-ZIP, Dateiliste gegen die Paketregel (eigene Umsetzung, nicht
# das Skript der bauenden Sitzung), Inhalt gegen den Arbeitsbaum, Unterschiede zur Fassung bc679a7.
# Aufruf im Stamm eines Arbeitsbaums: python3 -I pn-zip.py <paket.zip> <paket-bc679a7.zip>
import sys, zipfile, subprocess, collections
z = zipfile.ZipFile(sys.argv[1]); alt = zipfile.ZipFile(sys.argv[2]); PRE = 'puk-website-profil/'
inf = z.infolist(); names = [i.filename[len(PRE):] for i in inf]
print('Einträge', len(inf), '· Ordnereinträge', sum(i.is_dir() for i in inf), '· alle unter', PRE, all(i.filename.startswith(PRE) for i in inf),
      '· sortiert', names == sorted(names), '· doppelt', len(names) - len(set(names)))
print('Zeitstempel', dict(collections.Counter(i.date_time for i in inf)), '· Rechte', dict(collections.Counter(oct(i.external_attr >> 16) for i in inf)),
      '· deflated', sum(i.compress_type == zipfile.ZIP_DEFLATED for i in inf))
ls = [f for f in subprocess.run(['git', 'ls-files', '-z'], capture_output=True, check=True).stdout.decode().split('\0') if f]
regel = sorted(f for f in ls if not f.startswith(('templates/website/borderline-angehoerige/', 'templates/website/depression-angehoerige/'))
               and not f.endswith('.zip') and not f.endswith('.zip.sha256') and f not in ('index.html', '_headers'))
print('nach der Paketregel erwartet', len(regel), '· Dateiliste gleich', regel == names)
aus = collections.Counter(f.split('/')[2] if f.startswith('templates/website/') else f for f in set(ls) - set(names))
print('ausgelassen:', dict(aus))
anders = [n for n in names if z.read(PRE + n) != open(n, 'rb').read()]
print('byte-gleich mit dem Arbeitsbaum', len(names) - len(anders), 'von', len(names), anders)
an = set(i.filename[len(PRE):] for i in alt.infolist())
neu = sorted(set(names) - an); weg = sorted(an - set(names))
ge = sorted(n for n in set(names) & an if z.read(PRE + n) != alt.read(PRE + n))
print('gegenüber bc679a7: neu', len(neu), dict(collections.Counter('/'.join(n.split('/')[:3]) for n in neu)), '· entfallen', weg)
print('gegenüber bc679a7: geändert', len(ge)); [print('  ' + g) for g in ge]
print('unkomprimiert', sum(i.file_size for i in inf), 'Byte, davon neu', sum(z.getinfo(PRE + n).file_size for n in neu))
