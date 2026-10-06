import React from 'react';

/* Rahmen, Fokus und Fehlerzustand liegen in tokens/base.css unter
   [data-puk-field] — inline gesetzt könnte :focus-visible sie nicht
   überschreiben. */
export function Input({ invalid = false, disabled = false, size = 'md', style, ...rest }) {
  return (
    <input
      data-puk-field=""
      data-invalid={invalid || undefined}
      aria-invalid={invalid || undefined}
      disabled={disabled}
      style={{
    width: '100%',
    font: 'var(--type-body)',
    color: 'var(--text-default)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--puk-white)',
    borderRadius: 'var(--radius-sm)',
        height: size === 'sm' ? 32 : 40,
        padding: size === 'sm' ? '0 10px' : '0 12px',
        ...style,
      }}
      {...rest}
    />
  );
}
