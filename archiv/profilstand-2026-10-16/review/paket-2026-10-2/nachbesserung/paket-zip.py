# Nachbesserung (15.10.2026): Paket-ZIP aus dem Repository erzeugen, nach den Regeln des Pakets vom 15.10.2026
# (abgeleitet aus puk-website-profil-2026.10.2.zip, Stand de10a8d): alle versionierten Dateien (git ls-files) unter
# «puk-website-profil/», sortiert, deflated, Rechte 644, Zeitstempel 15.10.2026 12:00, ohne Ordnereinträge.
# Nicht im Paket: die Websites borderline-angehoerige/ und depression-angehoerige/, ZIP-Dateien, index.html und _headers
# im Stamm (Vorschau des Repositorys). Aufruf im Repository-Stamm: python3 -I review/paket-2026-10-2/nachbesserung/paket-zip.py <ziel.zip>
import sys, subprocess, zipfile
ziel = sys.argv[1]
AUS = ('templates/website/borderline-angehoerige/', 'templates/website/depression-angehoerige/')
files = subprocess.run(['git', 'ls-files', '-z'], capture_output=True, check=True).stdout.decode().split('\0')
files = sorted(f for f in files if f and not f.startswith(AUS) and not f.endswith('.zip') and f not in ('index.html', '_headers'))
with zipfile.ZipFile(ziel, 'w', zipfile.ZIP_DEFLATED) as z:
    for f in files:
        zi = zipfile.ZipInfo('puk-website-profil/' + f, date_time=(2026, 10, 15, 12, 0, 0))
        zi.compress_type = zipfile.ZIP_DEFLATED; zi.external_attr = 0o644 << 16; zi.create_system = 3
        z.writestr(zi, open(f, 'rb').read())
print(len(files), 'Dateien ->', ziel)
