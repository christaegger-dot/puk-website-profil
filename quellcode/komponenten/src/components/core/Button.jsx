import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { height: 32, padding: '0 14px', font: 'var(--type-body-sm)', gap: 6, icon: 16 },
  md: { height: 40, padding: '0 20px', font: 'var(--type-body)', gap: 8, icon: 18 },
  lg: { height: 48, padding: '0 28px', font: 'var(--type-lead)', gap: 10, icon: 20 },
};

function variantStyle(variant, hovered) {
  switch (variant) {
    case 'accent':
      return {
        background: hovered ? 'var(--action-accent-bg-hover)' : 'var(--action-accent-bg)',
        color: 'var(--puk-white)',
        border: '1px solid transparent',
      };
    case 'secondary':
      return {
        background: hovered ? 'var(--ui-wash)' : 'transparent',
        /* --action-quiet-fg: Schwarz, auf der nachtblauen Fläche und im blauen Band Weiss (Nachbesserungen O-A und O-C, 29.10.2026); Hover auf der grauen Fläche bleibt Schwarz. */
        color: hovered ? 'var(--puk-black-100)' : 'var(--action-quiet-fg)',
        border: '1px solid var(--action-quiet-fg)',
      };
    case 'ghost':
      return {
        background: hovered ? 'var(--ui-wash)' : 'transparent',
        /* Hover auf der grauen Fläche in Blau 125: Blau 100 hätte dort nur 4,28:1 (Nachbesserung W-3, 23.10.2026). */
        color: hovered ? 'var(--text-link-on-tint)' : 'var(--action-quiet-fg)',
        border: '1px solid transparent',
      };
    case 'danger':
      return {
        background: hovered ? 'var(--status-danger-strong-hover-bg)' : 'var(--status-danger-strong-bg)',
        color: 'var(--status-danger-fg)',
        border: '1px solid transparent',
      };
    case 'inverse':
      return {
        background: hovered ? 'var(--puk-blue-100)' : 'var(--puk-white)',
        color: hovered ? 'var(--puk-white)' : 'var(--puk-black-100)',
        border: '1px solid transparent',
      };
    default:
      return {
        background: hovered ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)',
        color: 'var(--puk-white)',
        border: '1px solid transparent',
      };
  }
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  type = 'button',
  style,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = variantStyle(variant, hovered && !disabled);
  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        /* Interaktionskonzept: auf Touch-Geräten mindestens 44 px (--puk-target-min, bundle.css). */
        minHeight: `max(${s.height}px, var(--puk-target-min, 0px))`,
        padding: s.padding,
        font: s.font,
        fontFamily: 'var(--font-core)',
        borderRadius: 'var(--radius-sm)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        ...v,
        ...(disabled
          ? { background: 'var(--action-disabled-bg)', color: 'var(--action-disabled-fg)', border: '1px solid transparent' }
          : null),
        ...style,
      }}
      {...rest}
    >
      {icon && iconPosition === 'left' ? <Icon name={icon} size={s.icon} /> : null}
      <span>{children}</span>
      {icon && iconPosition === 'right' ? <Icon name={icon} size={s.icon} /> : null}
    </button>
  );
}
