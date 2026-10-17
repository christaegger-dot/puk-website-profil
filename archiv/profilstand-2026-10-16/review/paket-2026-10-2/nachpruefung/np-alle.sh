#!/bin/sh
# Nachprüfung der Nachbesserung, Paket 2026.10.2 (15.10.2026): alle eigenen Druckläufe.
# Webserver: 8770 Stamm bei c65db24 (mit Kopie zz-dep-test), 8771 Arbeitsbaum 8abc333, 8772 Arbeitsbaum 1047ad6 (mit Kopie zz-dep-test).
# Aufruf: sh np-alle.sh <arbeitsordner> <repo-stamm>
set -e
W=$1; R=$2; D=$(cd "$(dirname "$0")" && pwd); mkdir -p "$W"
ST="behandlung-verstehen beziehungen-verstehen unterstuetzung-finden"
DP="begleiten behandlung-und-verlauf depression-verstehen fuer-sich-sorgen ihre-situation je-nach-rolle rechte-und-angebote"
SEQST="behandlung-verstehen unterstuetzung-finden"; SEQDP="behandlung-und-verlauf depression-verstehen"
m() { node "$D/np-druck.cjs" "$@"; }
# Figurregel von 8abc333 auf dem neuen Stand: bundle.css von c65db24 ohne den neuen Block der Nachbesserung (Zeilen mit
# .puk-vis-wide/.puk-vis-figure und data-print-split in @media print). Ohne Kennzeichen sind die Regeln in
# visual-patterns.css und erklaermuster.css unwirksam; sie bleiben.
grep -v -e '^  \.puk-vis-wide,\.puk-vis-figure{break-inside:avoid}$' -e '^  \.puk-vis-wide:has(' -e '^  \.puk-vis-figure\[data-print-split\]' "$R/components/bundle.css" > "$W/bundle-regel-8abc333.css"
diff "$R/components/bundle.css" "$W/bundle-regel-8abc333.css" > "$W/bundle-regel-8abc333.diff" || true
# 1 echte Seiten: neu, 8abc333, Paket vor der Nachbesserung, Gegenprobe (Figurregel 8abc333 am neuen Stand)
m http://localhost:8770 psychoeducation-site-starter "$W/neu-st" $ST &
m http://localhost:8770 zz-dep-test "$W/neu-dp" $DP &
m http://localhost:8771 psychoeducation-site-starter "$W/alt-st" $ST &
m http://localhost:8771 depression-angehoerige "$W/alt-dp" $DP &
wait
m http://localhost:8772 psychoeducation-site-starter "$W/paket-st" $ST &
m http://localhost:8772 zz-dep-test "$W/paket-dp" $DP &
m http://localhost:8770 psychoeducation-site-starter "$W/gegen-st" --css-ersatz=components/bundle.css="$W/bundle-regel-8abc333.css" $ST &
m http://localhost:8770 zz-dep-test "$W/gegen-dp" --css-ersatz=components/bundle.css="$W/bundle-regel-8abc333.css" $DP &
wait
# 2 Kopiervorlagen
m http://localhost:8770 longform "$W/neu-muster" visualisierungsmuster erklaermuster &
m http://localhost:8771 longform "$W/alt-muster" visualisierungsmuster erklaermuster &
# 3 Abfolgen fünffach: gekennzeichnet (Abnahme), ohne Kennzeichen neu und 8abc333
m http://localhost:8770 psychoeducation-site-starter "$W/x5k-st" --lang=5 --kennzeichen $SEQST &
m http://localhost:8770 zz-dep-test "$W/x5k-dp" --lang=5 --kennzeichen $SEQDP &
wait
m http://localhost:8770 psychoeducation-site-starter "$W/x5o-st" --lang=5 $SEQST &
m http://localhost:8770 zz-dep-test "$W/x5o-dp" --lang=5 $SEQDP &
m http://localhost:8771 psychoeducation-site-starter "$W/x5a-st" --lang=5 $SEQST &
m http://localhost:8771 depression-angehoerige "$W/x5a-dp" --lang=5 $SEQDP &
wait
# 4 Robustheit gekennzeichnet: 1- (kurze Abfolge mit Kennzeichen), 2-, 3-, 4-, 6-, 8-fach
for f in 1 2 3 4 6 8; do
  ( m http://localhost:8770 psychoeducation-site-starter "$W/r$f-st" --lang=$f --kennzeichen $SEQST
    m http://localhost:8770 zz-dep-test "$W/r$f-dp" --lang=$f --kennzeichen $SEQDP ) &
  [ $f = 3 ] && wait
done
wait
# 5 Auswertung
for d in "$W"/*/; do n=$(basename "$d"); printf '%s: ' "$n"; python3 -I "$D/np-analyse.py" "$d" "$W/$n.json"; done
