import React from 'react';

export function Breadcrumb({ items = [], style }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-2)', font: 'var(--type-caption)', color: 'var(--text-muted)', ...style }}>
      {items.map((it, i) => {
        const label = typeof it === 'string' ? it : it.label;
        const href = typeof it === 'string' ? undefined : it.href;
        const last = i === items.length - 1;
        return (
          <React.Fragment key={label}>
            {href && !last ? (
              <a href={href} style={{ color: 'inherit', borderBottom: 0 }}>{label}</a>
            ) : (
              <span aria-current={last ? 'page' : undefined} style={{ color: last ? 'var(--text-default)' : 'inherit' }}>{label}</span>
            )}
            {!last ? <span aria-hidden="true" style={{ color: 'var(--text-muted)' }}>/</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
