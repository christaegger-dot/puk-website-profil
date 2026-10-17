#!/bin/sh
# Nachbesserung W-3 (15.10.2026): Mutationsprobe. Je eine Regel des Gates wird in einer Kopie der Werkzeuge abgeschaltet;
# der Selbsttest muss dann fehlschlagen und die betroffene Zeile nennen. Das Repository bleibt unverändert.
# Aufruf: sh mutationsprobe.sh <starter-ordner> <arbeitsordner>
set -u
SRC=$1; W=$2; rm -rf "$W"; mkdir -p "$W"
probe() { # name, sed-Ausdruck
  d="$W/$1"; mkdir -p "$d"; cp "$SRC/site.config.json" "$d/"; cp -r "$SRC/tools" "$d/tools"
  sed -i "$2" "$d/tools/contract.js"
  if cmp -s "$SRC/tools/contract.js" "$d/tools/contract.js"; then echo "$1: MUTATION NICHT ANGEWANDT"; return; fi
  out=$(node "$d/tools/gate.mjs" --selftest); rc=$?
  echo "$1: Exit $rc · $(echo "$out" | tail -1)"; echo "$out" | grep '^FAIL' | sed 's/^/    /'
}
echo "Ausgangslage: $(node "$SRC/tools/gate.mjs" --selftest | tail -1)"
probe regel-entwurf-aus 's#if (/entwurf/i.test(shown)) prod#if (false \&\& /entwurf/i.test(shown)) prod#'
probe regel-datum-aus 's#else if (shown \&\& !STATUS_DATE.test(shown)) prod#else if (false) prod#'
probe kennzeichen-muster-aus "s#if (has(f, 'data-print-split')) {#if (false \&\& has(f, 'data-print-split')) {#"
probe kennzeichen-element-aus "s#for (const x of all(doc, y => has(y, 'data-print-split') \&\& #for (const x of all(doc, y => false \&\& #"
probe kennzeichen-zu-streng "s#const PRINT_SPLIT = { process: 'puk-vis-path', #const PRINT_SPLIT = { #"
