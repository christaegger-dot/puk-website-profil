import React from 'react';

/* Rahmen, Fokus und Fehlerzustand: tokens/base.css, [data-puk-field]. */
export function Textarea({ invalid = false, disabled = false, rows = 4, style, ...rest }) {
  return (
    <textarea
      data-puk-field=""
      data-invalid={invalid || undefined}
      aria-invalid={invalid || undefined}
      rows={rows}
      disabled={disabled}
      style={{
    width: '100%',
    font: 'var(--type-body)',
    color: 'var(--text-default)',
    background: disabled ? 'var(--surface-sunken)' : 'var(--puk-white)',
    borderRadius: 'var(--radius-sm)',
        padding: '10px 12px',
        resize: 'vertical',
        lineHeight: 'var(--lh-body)',
        ...style,
      }}
      {...rest}
    />
  );
}
