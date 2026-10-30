"""Reproduzierbares Profilpaket; Archiv und lokale Arbeitsdateien sind ausgeschlossen."""
import argparse
import hashlib
import json
from datetime import date
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
PROFILE = json.loads((ROOT / 'package.json').read_text(encoding='utf-8'))
NAME = 'puk-website-profil-' + PROFILE['version'] + '.zip'
STAMP = date.fromisoformat(PROFILE['pukProfil']['stand'])
DIRECTORIES = ('assets', 'components', 'fonts', 'licenses', 'tokens', 'templates', 'ui_kits', 'platform', 'quellcode', 'guidelines', 'tools', 'tests', '.github')
FILES = ('README.md', 'START-HIER.md', 'MUSTER-WAEHLEN.md', 'AGENTS.md', 'CLAUDE.md', 'ABSCHLUSSENTSCHEIDE.md', 'ENTSCHEIDE-PROFIL-2026-10-8.md', 'ENTSCHEIDE-PROFIL-2026-10-9.md', 'ENTSCHEIDE-PROFIL-2026-10-10.md', 'ENTSCHEIDE-PROFIL-2026-10-11.md', 'ENTSCHEIDE-PROFIL-2026-10-12.md', 'ENTSCHEIDE-PROFIL-2026-10-13.md', 'ENTSCHEIDE-PROFIL-2026-10-14.md', 'ENTSCHEIDE-PROFIL-2026-10-15.md', 'ENTSCHEIDE-PROFIL-2026-10-16.md', 'ENTSCHEIDE-PROFIL-2026-10-17.md', 'ENTSCHEIDE-PROFIL-2026-10-18.md', 'ENTSCHEIDE-PROFIL-2026-10-19.md', 'PRUEFBERICHT.md', 'styles.css', 'tokens.json', '_ds_bundle.js', '_headers', 'index.html', 'musterauswahl.html', 'package.json', 'package-lock.json', 'requirements.txt', '.gitignore')


def entries():
    found = [ROOT / name for name in FILES]
    for name in DIRECTORIES:
        found.extend(p for p in (ROOT / name).rglob('*') if p.is_file())
    return sorted((p for p in found if not any(part in ('node_modules', '__pycache__') for part in p.parts) and not p.name.endswith('.pyc')), key=lambda p: p.relative_to(ROOT).as_posix())


def build(target):
    with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as z:
        for path in entries():
            if path.is_symlink():
                raise ValueError('Keine Verknüpfungen im Paket: ' + str(path))
            item = zipfile.ZipInfo('puk-website-profil/' + path.relative_to(ROOT).as_posix(), (STAMP.year, STAMP.month, STAMP.day, 0, 0, 0))
            item.compress_type = zipfile.ZIP_DEFLATED
            item.external_attr = 0o644 << 16
            item.create_system = 3
            z.writestr(item, path.read_bytes(), compresslevel=9)


def check(target):
    expected = {'puk-website-profil/' + p.relative_to(ROOT).as_posix(): p for p in entries()}
    with zipfile.ZipFile(target) as z:
        assert z.namelist() == sorted(expected), 'Paket-Dateiliste weicht ab'
        assert all(z.read(name) == path.read_bytes() for name, path in expected.items()), 'Paketinhalt weicht vom Repository ab'
    digest = hashlib.sha256(target.read_bytes()).hexdigest()
    assert target.with_suffix('.zip.sha256').read_text().strip() == digest + '  ' + target.name, 'Prüfsumme weicht ab'
    print(f'{len(expected)} Dateien bytegleich; SHA-256 geprüft: {digest}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    target = ROOT / NAME
    if args.check:
        check(target)
    else:
        staged = target.with_suffix('.zip.tmp')
        build(staged)
        staged.replace(target)
        digest = hashlib.sha256(target.read_bytes()).hexdigest()
        target.with_suffix('.zip.sha256').write_text(digest + '  ' + target.name + '\n', encoding='ascii')
        check(target)
