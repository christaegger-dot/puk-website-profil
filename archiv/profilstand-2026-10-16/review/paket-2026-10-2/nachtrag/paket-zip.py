# Nachtrag F-4, F-5, F-7 (16.10.2026): Paket-ZIP aus dem Repository erzeugen. Regel wie
# ../nachbesserung/paket-zip.py (alle versionierten Dateien unter «puk-website-profil/», sortiert, deflated, Rechte 644,
# Zeitstempel 15.10.2026 12:00, ohne Ordnereinträge; nicht im Paket: borderline-angehoerige/, depression-angehoerige/,
# ZIP-Dateien, index.html und _headers im Stamm). Neu ohne die Prüfsummendateien *.zip.sha256, weil eine Datei im ZIP
# die Prüfsumme des ZIP nicht enthalten kann (F-5). Schreibt die Prüfsumme in <ziel>.sha256.
# Aufruf im Repository-Stamm: python3 -I review/paket-2026-10-2/nachtrag/paket-zip.py <ziel.zip>
import sys, os, subprocess, zipfile, hashlib
ziel = sys.argv[1]
AUS = ('templates/website/borderline-angehoerige/', 'templates/website/depression-angehoerige/')
files = subprocess.run(['git', 'ls-files', '-z'], capture_output=True, check=True).stdout.decode().split('\0')
files = sorted(f for f in files if f and not f.startswith(AUS) and not f.endswith(('.zip', '.zip.sha256'))
               and f not in ('index.html', '_headers'))
with zipfile.ZipFile(ziel, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in files:
        zi = zipfile.ZipInfo('puk-website-profil/' + f, date_time=(2026, 10, 15, 12, 0, 0))
        zi.compress_type = zipfile.ZIP_DEFLATED; zi.external_attr = 0o644 << 16; zi.create_system = 3
        z.writestr(zi, open(f, 'rb').read())
summe = hashlib.sha256(open(ziel, 'rb').read()).hexdigest()
with open(ziel + '.sha256', 'w', encoding='ascii', newline='\n') as h:
    h.write(f'{summe}  {os.path.basename(ziel)}\n')
print(len(files), 'Dateien ->', ziel, summe)
