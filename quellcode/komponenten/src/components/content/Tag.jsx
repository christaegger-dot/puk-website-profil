import React from 'react';

const shell = (selected, interactive) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  minHeight: 'max(28px, var(--puk-target-min, 0px))',
  padding: '0 10px',
  font: 'var(--type-caption)',
  color: selected ? 'var(--puk-white)' : 'var(--text-default)',
  background: selected ? 'var(--puk-black-100)' : 'transparent',
  border: '1px solid ' + (selected ? 'var(--puk-black-100)' : 'var(--border-default)'),
  borderRadius: 'var(--radius-sm)',
  cursor: interactive ? 'pointer' : 'default',
  transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
});

const bare = { border: 0, background: 'transparent', color: 'inherit', cursor: 'pointer', font: 'inherit', lineHeight: 1, padding: 0 };

/* Ein Tag, der eine Aktion auslöst, ist ein Bedienelement und wird als button
   gerendert — nicht als span mit Klickhandler, der mit der Tastatur nicht
   erreichbar wäre. Trägt er zusätzlich ein Entfernen-Kreuz, bleibt die Hülle
   ein span (verschachtelte button sind unzulässig); die Polsterung wandert dann
   in die beiden Schaltflächen, damit die ganze Chipfläche Klickziel bleibt und
   keine toten Zonen mit Zeiger-Cursor entstehen. Der Fokusring kommt aus
   tokens/base.css. */
export function Tag({ children, onRemove, selected = false, onClick, style, ...rest }) {
  const interactive = !!onClick;
  const css = { ...shell(selected, interactive), ...style };

  if (interactive && !onRemove) {
    return (
      <button type="button" aria-pressed={selected} onClick={onClick} style={css} {...rest}>
        {children}
      </button>
    );
  }

  if (!interactive) {
    return (
      <span style={css} {...rest}>
        {children}
        {onRemove ? (
          <button type="button" aria-label="Entfernen" onClick={onRemove} style={{ ...bare, padding: '0 0 0 0' }}>×</button>
        ) : null}
      </span>
    );
  }

  return (
    <span role="group" style={{ ...css, padding: 0, cursor: 'default' }} {...rest}>
      <button type="button" aria-pressed={selected} onClick={onClick} style={{ ...bare, flex: 1, padding: '0 0 0 10px', height: '100%' }}>
        {children}
      </button>
      <button
        type="button"
        aria-label="Entfernen"
        onClick={(e) => { e.stopPropagation(); onRemove(e); }}
        style={{ ...bare, padding: '0 10px 0 0', height: '100%' }}
      >
        ×
      </button>
    </span>
  );
}
