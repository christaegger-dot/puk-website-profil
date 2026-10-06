import React from 'react';

/* Echte ul/ol/li-Semantik. Bei marker="none" setzt die Komponente
   role="list", weil Safari/VoiceOver sonst Listen ohne Aufzählungszeichen
   nicht mehr als Liste ansagt. */
export function List({ items, children, ordered = false, marker, spacing = 'md', start, style }) {
  const Tag = ordered ? 'ol' : 'ul';
  const m = marker || (ordered ? 'number' : 'disc');
  const gap = { sm: 'var(--space-1)', md: 'var(--space-2)', lg: 'var(--space-4)' }[spacing] || 'var(--space-2)';
  const entries = items ? items.map((item, i) => <li key={i}>{item}</li>) : children;
  return (
    <Tag
      start={ordered ? start : undefined}
      role={m === 'none' ? 'list' : undefined}
      data-puk-list={m}
      style={{
        margin: 0,
        paddingLeft: m === 'none' ? 0 : '1.4em',
        listStyle: m === 'none' ? 'none' : m === 'number' ? 'decimal' : 'disc',
        display: 'flex',
        flexDirection: 'column',
        gap,
        font: 'var(--puk-read-font, var(--type-body))',
        color: 'var(--text-default)',
        ...style,
      }}
    >
      {entries}
    </Tag>
  );
}
