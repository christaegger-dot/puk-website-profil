#!/bin/sh
# Prüfung des Nachtrags F-4, F-5, F-7 (#131, Stand 1ba2568) durch eine Sitzung, die nicht gebaut hat (16.10.2026).
# Rechnet Build-Kennung, Gate, Prüfsummen und Paket-ZIP nach, ohne das Repository zu verändern: alle Läufe in
# eigenen Arbeitsbäumen (git worktree) unter <arbeitsordner>. Ausgaben nennen den Arbeitsordner als «<arbeit>».
# Aufruf im Repository-Stamm: sh review/paket-2026-10-2/pruefung-nachtrag/pn-pruefen.sh <leerer-arbeitsordner>
set -eu
W=$(mkdir -p "$1" && cd "$1" && pwd); R=$(pwd); HIER=$R/review/paket-2026-10-2/pruefung-nachtrag
NEU=1ba2568; VORHER=fe5a9e4; ST=templates/website/psychoeducation-site-starter
for c in $NEU $VORHER bc679a7; do [ -d "$W/wt-$c" ] || git worktree add -q --detach "$W/wt-$c" $c; done
z() { sed "s#$W#<arbeit>#g"; }

echo "== F-4 Build-Kennung"
grep -n "const BUILD" "$W/wt-$NEU/$ST/tools/contract.js" "$W/wt-$VORHER/$ST/tools/contract.js" | sed "s#$W/##"
(cd "$W/wt-$NEU/$ST" && node tools/build.mjs | tail -1)
echo "Arbeitsbaum $NEU nach dem Bau, geänderte Dateien: $(cd "$W/wt-$NEU" && git status --porcelain | wc -l)"
for c in $NEU $VORHER; do (cd "$W/wt-$c/$ST"
  node tools/gate.mjs > "$W/$c-entwurf.txt" || true; node tools/gate.mjs --production > "$W/$c-produktion.txt" || true
  node tools/gate.mjs --selftest > "$W/$c-selbsttest.txt" || true
  echo "$c: $(tail -1 "$W/$c-entwurf.txt") | $(tail -1 "$W/$c-produktion.txt") | $(tail -1 "$W/$c-selbsttest.txt")"); done
cmp -s "$W/$NEU-entwurf.txt" "$W/$VORHER-entwurf.txt" && echo "Entwurfsgate: Ausgabe gleich wie vorher"
cmp -s "$W/$NEU-produktion.txt" "$W/$VORHER-produktion.txt" && echo "Produktionsgate: Ausgabe gleich wie vorher"
cmp -s "$W/$NEU-selbsttest.txt" "$W/$VORHER-selbsttest.txt" && echo "Selbsttest: Ausgabe gleich wie vorher"
n=0; m=0; for f in "$W/wt-$NEU/$ST"/*.html; do m=$((m+1)); b=$(basename "$f")
  if sed 's/r4-10/r4-9/g' "$f" | cmp -s - "$W/wt-$VORHER/$ST/$b"; then n=$((n+1)); else echo "ANDERS: $b"; fi; done
echo "HTML des Starters nach Rückersetzen r4-10 -> r4-9 byte-gleich mit $VORHER: $n von $m"
# neues Gate auf den Seiten von vorher; Kopie in gleicher Tiefe, damit relative Pfade gelten
M="$W/wt-$NEU/templates/website/zz-pruefung"; rm -rf "$M"; cp -r "$W/wt-$NEU/$ST" "$M"; cp "$W/wt-$VORHER/$ST"/*.html "$M/"
(cd "$M" && node tools/gate.mjs > "$W/mix.txt" || true; node tools/gate.mjs --production > "$W/mix-prod.txt" || true); rm -rf "$M"
echo "Gate $NEU auf Seiten $VORHER: $(tail -1 "$W/mix.txt"); Befunde build: $(grep -c ' build ' "$W/mix.txt") (Stufe: $(grep ' build ' "$W/mix.txt" | cut -c1-5 | sort -u | tr -d ' '))"
sed '$d' "$W/$NEU-entwurf.txt" > "$W/e.txt"
if grep -v ' build ' "$W/mix.txt" | sed '$d' | cmp -s - "$W/e.txt"; then echo "  ohne die Befunde build gleich wie das Entwurfsgate"; else echo "  ANDERS als das Entwurfsgate"; fi
echo "  Produktion: $(tail -1 "$W/mix-prod.txt"); Befunde build: $(grep -c ' build ' "$W/mix-prod.txt") (Stufe: $(grep ' build ' "$W/mix-prod.txt" | cut -c1-5 | sort -u | tr -d ' '))"

echo; echo "== F-5 Fassungen des Paket-ZIP (aus git)"
for c in de10a8d bc679a7 $NEU; do git show $c:puk-website-profil-2026.10.2.zip > "$W/zip-$c.zip"
  echo "$c $(wc -c < "$W/zip-$c.zip") Byte $(sha256sum < "$W/zip-$c.zip" | cut -d' ' -f1) $(python3 -I -c 'import sys,zipfile;print(len(zipfile.ZipFile(sys.argv[1]).namelist()),"Einträge")' "$W/zip-$c.zip")"; done
git log $NEU --format='  ZIP geändert in %h (%ad)' --date=short -- puk-website-profil-2026.10.2.zip
echo "Prüfsummendatei: $(git show $NEU:puk-website-profil-2026.10.2.zip.sha256 | od -c | grep -c '\\n') Zeilenende(n) LF"
(cd "$W/wt-$NEU" && sha256sum -c puk-website-profil-2026.10.2.zip.sha256)
cp "$W/wt-$NEU/review/paket-2026-10-2/nachtrag/paket-zip.py" "$W/paket-zip.py"
for c in bc679a7 $NEU; do (cd "$W/wt-$c" && python3 -I "$W/paket-zip.py" "$W/neu-aus-$c.zip" | z)
  cmp -s "$W/neu-aus-$c.zip" "$W/zip-$c.zip" && echo "  neu erzeugt aus $c: byte-gleich mit dem ZIP in $c"; done

echo; echo "== Paket-ZIP $NEU: Aufbau und Inhalt"
(cd "$W/wt-$NEU" && python3 -I "$HIER/pn-zip.py" "$W/zip-$NEU.zip" "$W/zip-bc679a7.zip")
rm -rf "$W/ent" "$W/export"; mkdir -p "$W/ent"; (cd "$W/ent" && unzip -q "$W/zip-$NEU.zip")
P="$W/ent/puk-website-profil/$ST"
(cd "$P" && sha256sum *.html > "$W/vor.txt" && node tools/build.mjs | tail -1
  if sha256sum *.html | cmp -s - "$W/vor.txt"; then echo "Bau im entpackten Paket: keine HTML-Datei verändert"; else echo "Bau im entpackten Paket: HTML VERÄNDERT"; fi)
g=0; for f in "$P"/*.html; do cmp -s "$f" "$W/wt-$NEU/$ST/$(basename "$f")" || g=$((g+1)); done; echo "HTML des Starters verschieden vom Repository: $g"
(cd "$P" && node tools/gate.mjs | tail -1; node tools/gate.mjs --selftest | tail -1; node tools/gate.mjs --production | tail -1 || true)
(cd "$P" && node tools/export.mjs "$W/export" | tail -1 | z)
ls "$W/export/fonts" | tr '\n' ' '; echo
echo "Export: Seiten mit Build r4-10: $(grep -l 'data-puk-site-build="r4-10"' "$W/export"/*.html | wc -l) von $(ls "$W/export"/*.html | wc -l); Regeln mit data-print-split in css/site.css: $(grep -c 'data-print-split' "$W/export/css/site.css")"
echo "Pfade der Arbeitsumgebung oder Zugangsdaten im entpackten Paket: $(grep -r -l -I -E '/home/user|/tmp/claude|/root/\.|ghp_|github_pat_' "$W/ent" | wc -l) Dateien"
echo "E-Mail-Adressen im entpackten Paket:"; grep -r -h -o -I -E '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}' "$W/ent" | sort | uniq -c

echo; echo "== Nicht geändert (Diff $VORHER..$NEU)"
for p in guidelines tokens components/bundle.css components/bundle.js components/interaktion.js templates/website/longform \
  templates/website/borderline-angehoerige templates/website/depression-angehoerige $ST/content $ST/starter.css \
  quellcode ENTSCHEIDE-PROFIL-2026-10-2.md CLAUDE.md START-HIER.md; do
  printf '%s: %s Dateien geändert\n' "$p" "$(git diff --name-only $VORHER $NEU -- "$p" | wc -l)"; done
