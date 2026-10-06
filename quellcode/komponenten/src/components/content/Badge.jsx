import React from 'react';

const TONES = {
  neutral: { background: 'var(--ui-hairline)', color: 'var(--puk-black-100)' },
  accent: { background: 'var(--puk-blue-100)', color: 'var(--puk-white)' },
  info: { background: 'var(--puk-blue-25)', color: 'var(--puk-black-100)' },
  warning: { background: 'var(--puk-yellow)', color: 'var(--puk-black-100)' },
  /* danger trägt Text, also die starke Fläche — siehe tokens/colors.css. */
  danger: { background: 'var(--status-danger-strong-bg)', color: 'var(--status-danger-fg)' },
  inverse: { background: 'var(--puk-black-100)', color: 'var(--puk-white)' },
};

export function Badge({ children, tone = 'neutral', style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: 22,
        padding: '0 8px',
        font: 'var(--fw-regular) var(--size-micro)/1 var(--font-core)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        borderRadius: 'var(--radius-xs)',
        ...(TONES[tone] || TONES.neutral),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
