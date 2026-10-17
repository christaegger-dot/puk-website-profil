#!/bin/sh
# Nachprüfung W-3 (15.10.2026): eigene Mutationsprobe, andere Mutationen als nachbesserung/mutationsprobe.sh.
# Je Mutation eine Kopie von tools/ und site.config.json; der Selbsttest muss fehlschlagen. Repository unverändert.
# Aufruf: sh np-mutation.sh <starter-ordner> <arbeitsordner>
set -u
SRC=$1; W=$2; rm -rf "$W"; mkdir -p "$W"
probe() {
  d="$W/$1"; mkdir -p "$d"; cp "$SRC/site.config.json" "$d/"; cp -r "$SRC/tools" "$d/tools"
  sed -i "$2" "$d/tools/contract.js"
  if cmp -s "$SRC/tools/contract.js" "$d/tools/contract.js"; then echo "$1: MUTATION NICHT ANGEWANDT"; return; fi
  out=$(node "$d/tools/gate.mjs" --selftest 2>&1); echo "$1: $(echo "$out" | tail -1)"; echo "$out" | grep '^FAIL' | sed 's/^/    /'
}
echo "Ausgangslage: $(node "$SRC/tools/gate.mjs" --selftest | tail -1)"
# Regel «Entwurf» nur noch ohne Datum (Stand vor W-3 wäre damit nicht unterscheidbar gewesen)
probe entwurf-nur-ohne-datum 's#if (/entwurf/i.test(shown)) prod#if (/entwurf/i.test(shown) \&\& !STATUS_DATE.test(shown)) prod#'
# Regel «Entwurf» nur am Anfang des Status
probe entwurf-nur-am-anfang 's#if (/entwurf/i.test(shown)) prod#if (/^entwurf$/i.test(shown)) prod#'
# Befund print-split nur als Hinweis statt blockierend (Muster)
probe kennzeichen-muster-nur-hinweis "s#add('block', pid, 'print-split', \`Figur#add('warn', pid, 'print-split', \`Figur#"
# Befund print-split nur als Hinweis (Element)
probe kennzeichen-element-nur-hinweis "s#add('block', pid, 'print-split', \`Kennzeichen#add('warn', pid, 'print-split', \`Kennzeichen#"
# Gegenüberstellung als zulässiges Muster aufgenommen
probe kennzeichen-vergleich-zulaessig "s#const PRINT_SPLIT = { process: 'puk-vis-path',#const PRINT_SPLIT = { comparison: 'puk-vis-compare', process: 'puk-vis-path',#"
# Schrittliste nicht mehr verlangt
probe kennzeichen-ohne-schrittliste "s#cls(x, PRINT_SPLIT\[ty\]) \&\& x.children.some(y => y.tag === 'li')#cls(x, PRINT_SPLIT[ty]) || true#"
# Entscheidungsweg nicht mehr zulässig
probe kennzeichen-entscheidungsweg-weg "s# decision: 'puk-vis-decision',##"
# Modell in Schritten nicht mehr zulässig
probe kennzeichen-modell-weg "s#, 'stepwise-model': 'puk-vis-build__steps' }# }#"
