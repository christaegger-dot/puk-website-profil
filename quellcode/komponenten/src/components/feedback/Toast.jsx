import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../core/IconButton.jsx';

const TONES = {
  neutral: { bar: 'var(--puk-black-100)', icon: 'info' },
  success: { bar: 'var(--puk-blue-100)', icon: 'check' },
  warning: { bar: 'var(--puk-yellow)', icon: 'triangle-alert' },
  danger: { bar: 'var(--puk-red)', icon: 'circle-alert' },
};

export function Toast({ title, children, tone = 'neutral', onClose, style }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <div
      role="status"
      style={{
        display: 'flex',
        gap: 'var(--space-3)',
        alignItems: 'flex-start',
        minWidth: 280,
        maxWidth: 420,
        padding: 'var(--space-4)',
        background: 'var(--surface-card)',
        borderLeft: '3px solid ' + t.bar,
        boxShadow: 'var(--shadow-overlay)',
        ...style,
      }}
    >
      <Icon name={t.icon} size={18} style={{ marginTop: 2 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {title ? <strong style={{ font: 'var(--type-body-sm)', fontWeight: 'var(--fw-medium)' }}>{title}</strong> : null}
        {children ? <span style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{children}</span> : null}
      </div>
      {onClose ? <IconButton icon="x" label="Schliessen" size="sm" onClick={onClose} /> : null}
    </div>
  );
}
