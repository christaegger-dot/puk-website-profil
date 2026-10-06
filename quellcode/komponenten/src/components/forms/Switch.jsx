import React from 'react';

export function Switch({ label, checked, defaultChecked, disabled = false, onChange, style }) {
  const controlled = checked !== undefined;
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = controlled ? checked : inner;
  return (
    <label
      aria-disabled={disabled || undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        font: 'var(--type-body-sm)',
        color: disabled ? 'var(--text-large-only)' : 'var(--text-default)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      <button
        type="button"
        role="switch"
        aria-checked={on}
        disabled={disabled}
        onClick={() => { if (!controlled) setInner(!on); onChange && onChange(!on); }}
        style={{
          width: 40,
          height: 22,
          padding: 2,
          border: '1px solid ' + (on ? 'var(--puk-blue-100)' : 'var(--border-default)'),
          borderRadius: 'var(--radius-pill)',
          background: on ? 'var(--puk-blue-100)' : 'var(--ui-hairline)',
          display: 'inline-flex',
          justifyContent: on ? 'flex-end' : 'flex-start',
          alignItems: 'center',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          transition: 'background var(--dur-base) var(--ease-standard)',
        }}
      >
        <span style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--puk-white)' }} />
      </button>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
