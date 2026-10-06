import React from 'react';

export function Card({ title, eyebrow, children, footer, media, variant = 'default', href, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const inverse = variant === 'inverse';
  const brand = variant === 'brand';
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: brand ? 'var(--surface-brand)' : inverse ? 'var(--surface-inverse)' : variant === 'sunken' ? 'var(--surface-sunken)' : 'var(--surface-card)',
        color: brand || inverse ? 'var(--puk-white)' : 'var(--text-default)',
        /* Längsformen statt border-Kurzform: Kurzform mit var() plus borderColor=undefined liess die Haarlinie auf currentColor (#222) fallen. */
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: variant !== 'default' ? 'transparent' : href && hovered ? 'var(--puk-blue-100)' : 'var(--border-hairline)',
        borderRadius: 'var(--radius-none)',
        textDecoration: 'none',
        transition: 'border-color var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {media ? <div style={{ aspectRatio: '3 / 2', overflow: 'hidden', background: 'var(--surface-sunken)' }}>{media}</div> : null}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', padding: 'var(--space-6)' }}>
        {eyebrow ? (
          <span style={{ font: 'var(--type-caption)', textTransform: 'uppercase', letterSpacing: '0.08em', color: brand || inverse ? 'var(--text-on-dark)' : 'var(--text-muted)' }}>{eyebrow}</span>
        ) : null}
        {title ? <h3 style={{ font: 'var(--type-title-3)', margin: 0, color: brand || inverse ? 'var(--text-on-dark)' : undefined }}>{title}</h3> : null}
        {children ? <div style={{ font: 'var(--puk-read-font, var(--type-body-sm))', color: brand || inverse ? 'var(--text-on-dark)' : 'var(--puk-read-color, var(--text-muted))' }}>{children}</div> : null}
        {footer ? <div style={{ marginTop: 'var(--space-2)' }}>{footer}</div> : null}
      </div>
    </Tag>
  );
}
