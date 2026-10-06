import React from 'react';

/* Rahmen, Fokus und Fehlerzustand: tokens/base.css, [data-puk-field]. */
export function Select({ options = [], placeholder, invalid = false, disabled = false, size = 'md', style, ...rest }) {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select
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
          padding: size === 'sm' ? '0 32px 0 10px' : '0 36px 0 12px',
          appearance: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          ...style,
        }}
        {...rest}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const label = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{label}</option>;
        })}
      </select>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: 12,
          top: '50%',
          width: 8,
          height: 8,
          marginTop: -6,
          borderRight: '1px solid var(--puk-black-100)',
          borderBottom: '1px solid var(--puk-black-100)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
