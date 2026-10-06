import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 32, md: 40, lg: 48 };
const GLYPH = { sm: 16, md: 20, lg: 22 };

export function IconButton({ icon = 'x', label, variant = 'ghost', size = 'md', disabled = false, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const box = SIZES[size] || SIZES.md;
  const solid = variant === 'solid';
  const outline = variant === 'outline';
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: `max(${box}px, var(--puk-target-min, 0px))`,
        minHeight: `max(${box}px, var(--puk-target-min, 0px))`,
        borderRadius: 'var(--radius-sm)',
        border: outline ? '1px solid var(--puk-black-100)' : '1px solid transparent',
        background: solid
          ? (disabled ? 'var(--action-disabled-bg)' : hovered ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)')
          : (hovered && !disabled ? 'var(--ui-wash)' : 'transparent'),
        /* Deaktiviert über Farbe, nicht über Transparenz (Interaktionskonzept). */
        color: disabled ? 'var(--action-disabled-fg)' : solid ? 'var(--puk-white)' : (hovered ? 'var(--puk-blue-100)' : 'var(--puk-black-100)'),
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <Icon name={icon} size={GLYPH[size] || 20} />
    </button>
  );
}
