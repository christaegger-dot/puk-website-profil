import React from 'react';

export function Tooltip({ label, children, placement = 'top', style }) {
  const [open, setOpen] = React.useState(false);
  /* WCAG 1.4.13: Der Tooltip bleibt offen, solange Zeiger oder Fokus auf Auslöser
     oder Tooltip liegen (kurze Schliessverzögerung überbrückt die Lücke), und
     Escape schliesst ihn von überall. */
  const timer = React.useRef(null);
  const show = () => { clearTimeout(timer.current); setOpen(true); };
  const hide = (delay = 150) => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(false), delay); };
  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  const tooltipId = React.useId();
  const pos = placement === 'bottom'
    ? { top: '100%', marginTop: 6 }
    : { bottom: '100%', marginBottom: 6 };
  const validTrigger = React.isValidElement(children) && children.type !== React.Fragment;
  const describedBy = validTrigger
    ? [children.props['aria-describedby'], tooltipId].filter(Boolean).join(' ')
    : tooltipId;
  const trigger = validTrigger
    ? React.cloneElement(children, { 'aria-describedby': describedBy })
    : <span tabIndex={0} aria-describedby={tooltipId}>{children}</span>;
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={show}
      onMouseLeave={() => hide()}
      onFocus={show}
      onBlur={() => hide(0)}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          setOpen(false);
        }
      }}
    >
      {trigger}
      <span
        id={tooltipId}
        role="tooltip"
        hidden={!open}
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          ...pos,
          whiteSpace: 'nowrap',
          padding: '5px 8px',
          background: 'var(--surface-inverse)',
          color: 'var(--puk-white)',
          font: 'var(--type-caption)',
          borderRadius: 'var(--radius-xs)',
          zIndex: 50,
          ...style,
        }}
      >
        {label}
      </span>
    </span>
  );
}
