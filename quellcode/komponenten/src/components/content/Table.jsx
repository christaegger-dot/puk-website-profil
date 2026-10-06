import React from 'react';

/* Datentabelle mit Pflicht-Caption, th scope="col" für Spaltenköpfe und
   th scope="row" für die Zeilenkopf-Spalte. Kopf mit 2-px-Linie in Schwarz,
   Zeilen mit Haarlinien — das Strukturbild des Systems (README, Ecken und
   Linien). Keine Zebrastreifen, keine Rahmen um Zellen. */
export function Table({ caption, captionHidden = false, columns = [], rows = [], rowHeader, dense = false, style }) {
  const headerKey = rowHeader ?? columns[0]?.key;
  /* Wird die Tabelle schmaler als ihr Inhalt, scrollt der Rahmen waagrecht.
     Dann muss er per Tastatur erreichbar und benannt sein (role=region,
     tabIndex 0, Fokusring aus base.css) — sonst nicht, damit keine leeren
     Tabulatorstopps entstehen. */
  const wrapRef = React.useRef(null);
  const captionId = React.useId();
  const [scrollt, setScrollt] = React.useState(false);
  React.useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return undefined;
    const pruefe = () => setScrollt(el.scrollWidth > el.clientWidth + 1);
    pruefe();
    const ro = new ResizeObserver(pruefe);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const pad = dense ? '6px 16px 6px 0' : '10px 20px 10px 0';
  const hidden = { position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' };
  return (
    <div
      ref={wrapRef}
      role={scrollt ? 'region' : undefined}
      aria-labelledby={scrollt ? captionId : undefined}
      tabIndex={scrollt ? 0 : undefined}
      style={{ overflowX: 'auto', ...style }}
    >
      <table style={{ borderCollapse: 'collapse', width: '100%', font: 'var(--type-body-sm)', color: 'var(--text-default)' }}>
        <caption id={captionId} style={captionHidden ? hidden : { captionSide: 'top', textAlign: 'left', font: 'var(--type-body)', fontWeight: 'var(--fw-medium)', paddingBottom: 'var(--space-3)' }}>
          {caption}
        </caption>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                style={{ textAlign: col.align || 'left', padding: pad, fontWeight: 'var(--fw-medium)', borderBottom: '2px solid var(--border-strong)', verticalAlign: 'bottom' }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={row.id ?? r}>
              {columns.map((col) => {
                const isHead = col.key === headerKey;
                const Cell = isHead ? 'th' : 'td';
                return (
                  <Cell
                    key={col.key}
                    scope={isHead ? 'row' : undefined}
                    style={{
                      textAlign: col.align || 'left',
                      padding: pad,
                      fontWeight: isHead ? 'var(--fw-medium)' : 'var(--fw-regular)',
                      borderBottom: '1px solid var(--border-hairline)',
                      verticalAlign: 'top',
                      fontVariantNumeric: col.align === 'right' ? 'tabular-nums' : undefined,
                    }}
                  >
                    {row[col.key]}
                  </Cell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
