import React from 'react';

/* Das native input wird direkt gestaltet — Grösse, Rahmen, Häkchen, Fokus und
   Disabled liegen in tokens/base.css unter [data-puk-check]. Kein verstecktes
   input mit gezeichnetem Kästchen daneben: nur so ist der Tastaturfokus
   sichtbar. */
export function Checkbox({ label, checked, defaultChecked, disabled = false, onChange, style, ...rest }) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
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
        type="checkbox"
        data-puk-check
        checked={on}
        disabled={disabled}
        onChange={(e) => { if (!controlled) setInner(e.target.checked); onChange && onChange(e); }}
        style={{ marginTop: 3 }}
        {...rest}
      />
      {label ? <span>{label}</span> : null}
    </label>
  );
}
