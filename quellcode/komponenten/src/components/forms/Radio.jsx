import React from 'react';

/* Wie Checkbox: das native input wird direkt gestaltet, Zustände liegen in
   tokens/base.css unter [data-puk-check]. */
export function Radio({ label, checked, name, value, disabled = false, onChange, style, ...rest }) {
  return (
    <label
      aria-disabled={disabled || undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: 'var(--space-3)',
        font: 'var(--type-body-sm)',
        color: disabled ? 'var(--text-large-only)' : 'var(--text-default)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      <input
        type="radio"
        data-puk-check
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ marginTop: 3 }}
        {...rest}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
