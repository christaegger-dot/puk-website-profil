#!/bin/sh
# Paket-ZIP entpackt prüfen: Dateiliste gegen die Paketregel, Inhalt byte-gleich mit dem Repository,
# Build, Selbsttest, Produktionsgate und Export im entpackten Starter.
# Aufruf im Repository-Stamm: sh zip-pruefen.sh <paket.zip> <leerer-arbeitsordner>
set -eu
ZIP=$1; W=$2
rm -rf "$W"; mkdir -p "$W/ent"
unzip -q "$ZIP" -d "$W/ent"
P="$W/ent/puk-website-profil"
git ls-files | grep -v -E '^templates/website/(borderline|depression)-angehoerige/' | grep -v -E '\.zip$|\.zip\.sha256$' \
  | grep -v -x -e index.html -e _headers | sort > "$W/erwartet.txt"
(cd "$P" && find . -type f | sed 's#^\./##' | sort) > "$W/im-zip.txt"
echo "Dateien im ZIP: $(wc -l < "$W/im-zip.txt"), nach der Paketregel erwartet: $(wc -l < "$W/erwartet.txt")"
diff "$W/erwartet.txt" "$W/im-zip.txt" && echo "Dateiliste: gleich wie die Paketregel"
n=0; while read -r f; do cmp -s "$P/$f" "$f" || { echo "ANDERS: $f"; n=$((n+1)); }; done < "$W/im-zip.txt"
echo "byte-gleich mit dem Repository: $(( $(wc -l < "$W/im-zip.txt") - n )) von $(wc -l < "$W/im-zip.txt")"
S="$P/templates/website/psychoeducation-site-starter"
(cd "$S" && node tools/build.mjs 2>&1 | tail -1)
g=0; for f in "$S"/*.html; do cmp -s "$f" "templates/website/psychoeducation-site-starter/$(basename "$f")" || { echo "ANDERS gebaut: $(basename "$f")"; g=$((g+1)); }; done
echo "gebaute HTML des Starters nach dem Bau im entpackten Paket: $(ls "$S"/*.html | wc -l), davon verschieden vom Repository: $g"
(cd "$S" && node tools/gate.mjs --selftest 2>&1 | tail -1)
(cd "$S" && node tools/gate.mjs --production 2>&1 | tail -1) || true
(cd "$S" && node tools/export.mjs "$W/export" > "$W/export.txt" 2>&1 && tail -1 "$W/export.txt")
test -f "$W/export/fonts/OFL.txt" && echo "Export: fonts/OFL.txt vorhanden"
head -1 "$W/export/css/site.css"
grep -o 'data-puk-site-build="[^"]*"' "$W/export/index.html"
