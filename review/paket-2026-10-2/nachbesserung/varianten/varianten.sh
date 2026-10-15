#!/bin/sh
# Nachbesserung P-1 (15.10.2026): Varianten, die die Drucklage gekennzeichneter Abfolgen begründen. Jede Variante setzt
# zusätzliche Druckregeln über --css auf die neuen Regeln; Abfolgen künstlich verlängert und gekennzeichnet, 12 Einstellungen.
# Aufruf: sh varianten.sh <arbeitsordner> <ergebnis-ordner>   (Server wie alle-messungen.sh)
W=$1; E=$2; D=$(dirname "$0"); M="$D/../druck-messung.cjs"; mkdir -p "$W" "$E"
for v in g-raster-mittig g-raster-oben; do
  node "$M" http://localhost:8770 zz-dep-test "$E/$v-x5.json" "$W/$v" --lang --kennzeichen --css="$D/$v.css" depression-verstehen &
done
for f in 2 3 4 5 6 8; do
  ( node "$M" http://localhost:8770 psychoeducation-site-starter "$E/cf-wie-bildschirm-x$f-starter.json" "$W/cf" --lang --kennzeichen --faktor=$f --css="$D/cf-wie-bildschirm.css" behandlung-verstehen unterstuetzung-finden
    node "$M" http://localhost:8770 zz-dep-test "$E/cf-wie-bildschirm-x$f-depression.json" "$W/cf" --lang --kennzeichen --faktor=$f --css="$D/cf-wie-bildschirm.css" behandlung-und-verlauf ) &
done
node "$M" http://localhost:8770 psychoeducation-site-starter "$E/titel-alle-ohne-kennzeichen-starter.json" "$W/titel" --lang --css="$D/titel-alle.css" behandlung-verstehen unterstuetzung-finden &
node "$M" http://localhost:8770 zz-dep-test "$E/titel-alle-ohne-kennzeichen-depression.json" "$W/titel" --lang --css="$D/titel-alle.css" behandlung-und-verlauf depression-verstehen &
wait
python3 -I "$D/../rahmen.py" "$W/titel" "$E/rahmen-titel-alle-ohne-kennzeichen.json"
