#!/bin/sh
# Nachbesserung P-1/K-1 (15.10.2026): alle Druckmessungen der Selbstprüfung, ohne Textmarken.
# Voraussetzungen (wie messung/README.md): Webserver im Stamm auf 8770; Vergleichsstand 8abc333 als Arbeitsbaum auf 8771;
# Paketstand vor der Nachbesserung (1047ad6) als Arbeitsbaum auf 8772; in 8770 und 8772 die Kopie
# templates/website/zz-dep-test/ (nicht committen).
# Aufruf: sh alle-messungen.sh <arbeitsordner für PDF und Rohdaten> <ergebnis-ordner>
set -e
W=$1; E=$2; D=$(dirname "$0"); mkdir -p "$W" "$E"
ST="behandlung-verstehen beziehungen-verstehen unterstuetzung-finden"
DP="begleiten behandlung-und-verlauf depression-verstehen fuer-sich-sorgen ihre-situation je-nach-rolle rechte-und-angebote"
m() { node "$D/druck-messung.cjs" "$@"; }
# 1 echte Seiten: neu (8770), vorher 8abc333 (8771), Paket vor der Nachbesserung (8772)
m http://localhost:8770 psychoeducation-site-starter "$E/neu-starter.json" "$W/neu" $ST &
m http://localhost:8770 zz-dep-test "$E/neu-depression.json" "$W/neu" $DP &
m http://localhost:8771 psychoeducation-site-starter "$E/8abc333-starter.json" "$W/8abc333" $ST &
m http://localhost:8771 depression-angehoerige "$E/8abc333-depression.json" "$W/8abc333" $DP &
wait
m http://localhost:8772 psychoeducation-site-starter "$E/paket-starter.json" "$W/paket" $ST &
m http://localhost:8772 zz-dep-test "$E/paket-depression.json" "$W/paket" $DP &
m http://localhost:8770 longform "$E/neu-muster.json" "$W/neu-muster" visualisierungsmuster erklaermuster &
# 2 Gegenprobe: neue Seiten mit der Figurregel von 8abc333 (Rahmen teilbar, Hülle unteilbar)
printf '@media print{.puk-vis-figure{break-inside:auto}}\n' > "$W/regel-8abc333.css"
m http://localhost:8770 psychoeducation-site-starter "$E/gegenprobe-starter.json" "$W/gegenprobe" --css="$W/regel-8abc333.css" $ST &
m http://localhost:8770 zz-dep-test "$E/gegenprobe-depression.json" "$W/gegenprobe" --css="$W/regel-8abc333.css" $DP &
wait
# 3 lange Abfolgen fünffach: gekennzeichnet (Abnahme), ohne Kennzeichen neu und 8abc333
m http://localhost:8770 psychoeducation-site-starter "$E/lang-kennz-starter.json" "$W/lang-kennz" --lang --kennzeichen behandlung-verstehen unterstuetzung-finden &
m http://localhost:8770 zz-dep-test "$E/lang-kennz-depression.json" "$W/lang-kennz" --lang --kennzeichen behandlung-und-verlauf depression-verstehen &
m http://localhost:8770 psychoeducation-site-starter "$E/lang-ohne-starter.json" "$W/lang-ohne" --lang behandlung-verstehen unterstuetzung-finden &
m http://localhost:8770 zz-dep-test "$E/lang-ohne-depression.json" "$W/lang-ohne" --lang behandlung-und-verlauf depression-verstehen &
m http://localhost:8771 psychoeducation-site-starter "$E/lang-8abc333-starter.json" "$W/lang-8abc333" --lang behandlung-verstehen unterstuetzung-finden &
m http://localhost:8771 depression-angehoerige "$E/lang-8abc333-depression.json" "$W/lang-8abc333" --lang behandlung-und-verlauf depression-verstehen &
wait
# 4 Robustheit: gekennzeichnet, 2-, 3-, 4-, 6- und 8-fach
for f in 2 3 4 6 8; do
  ( m http://localhost:8770 psychoeducation-site-starter "$E/robust-x$f-starter.json" "$W/robust" --lang --kennzeichen --faktor=$f behandlung-verstehen unterstuetzung-finden
    m http://localhost:8770 zz-dep-test "$E/robust-x$f-depression.json" "$W/robust" --lang --kennzeichen --faktor=$f behandlung-und-verlauf depression-verstehen ) &
done
wait
# 5 Figurrahmen aus den Seitenbildern
for d in neu 8abc333 paket neu-muster gegenprobe lang-kennz lang-ohne lang-8abc333 robust; do python3 -I "$D/rahmen.py" "$W/$d" "$E/rahmen-$d.json"; done
