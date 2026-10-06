import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  info: { bg: 'var(--surface-accent)', border: 'var(--puk-blue-50)', icon: 'info', fg: 'var(--text-default)' },
  warning: { bg: 'var(--puk-yellow-50)', border: 'var(--puk-yellow)', icon: 'triangle-alert', fg: 'var(--text-default)' },
  danger: { bg: 'var(--status-danger-soft-bg)', border: 'var(--puk-red-50)', icon: 'circle-alert', fg: 'var(--text-default)' },
  /* emergency ist eine textführende Fläche, darum die starke Danger-Fläche.
     Der Rahmen darf der Signalton bleiben — er trägt keinen Text. */
  emergency: { bg: 'var(--status-danger-strong-bg)', border: 'var(--puk-red)', icon: 'phone', fg: 'var(--status-danger-fg)' },
};

export function Alert({ title, children, tone = 'info', style }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-4)',
        alignItems: 'flex-start',
        padding: 'var(--space-4) var(--space-5)',
        background: t.bg,
        border: '1px solid ' + t.border,
        color: t.fg,
        ...style,
      }}
    >
      <Icon name={t.icon} size={20} style={{ marginTop: 2 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {title ? <strong style={{ font: 'var(--puk-read-font, var(--type-body))', fontWeight: 'var(--fw-medium)' }}>{title}</strong> : null}
        {children ? <span style={{ font: 'var(--puk-read-font, var(--type-body-sm))' }}>{children}</span> : null}
      </div>
    </div>
  );
}
