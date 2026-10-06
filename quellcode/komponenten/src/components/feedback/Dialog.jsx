import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

export function Dialog({ open = true, title, children, footer, onClose, width = 480, style }) {
  const titleId = React.useId();
  const dialogRef = React.useRef(null);
  const previousFocusRef = React.useRef(null);
  const onCloseRef = React.useRef(onClose);

  React.useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  React.useEffect(() => {
    if (!open) return undefined;
    previousFocusRef.current = document.activeElement;
    const dialog = dialogRef.current;
    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    const focusable = () => Array.from(dialog?.querySelectorAll(focusableSelector) || [])
      .filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
    (focusable()[0] || dialog)?.focus();
    /* Seite hinter dem Dialog nicht mitscrollen lassen; beim Schliessen wiederherstellen. */
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape' && onCloseRef.current) {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab') return;
      const elements = focusable();
      if (!elements.length) {
        event.preventDefault();
        dialog?.focus();
        return;
      }
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialog)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
      const previous = previousFocusRef.current;
      if (previous && typeof previous.focus === 'function' && document.contains(previous)) previous.focus();
    };
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="puk-dialog-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--scrim)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        className="puk-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : 'Dialog'}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        style={{
          width,
          maxWidth: '100%',
          maxHeight: '100%',
          overflowY: 'auto',
          background: 'var(--surface-card)',
          boxShadow: 'var(--shadow-overlay)',
          borderRadius: 'var(--radius-none)',
          ...style,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', padding: 'var(--space-6) var(--space-6) 0' }}>
          <h2 id={title ? titleId : undefined} style={{ font: 'var(--type-title-3)', margin: 0, flex: 1 }}>{title}</h2>
          {onClose ? <IconButton icon="x" label="Schliessen" size="sm" onClick={onClose} /> : null}
        </div>
        <div style={{ padding: 'var(--space-4) var(--space-6) var(--space-6)', font: 'var(--puk-read-font, var(--type-body-sm))', color: 'var(--text-default)' }}>{children}</div>
        {footer ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-3)', padding: 'var(--space-4) var(--space-6)', borderTop: '1px solid var(--border-hairline)' }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
