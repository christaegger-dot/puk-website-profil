import React from 'react';

export function Field({ label, hint, error, required = false, htmlFor, children, style }) {
  const hintId = React.useId();
  const errorId = React.useId();
  const child = React.isValidElement(children) ? children : null;
  const childProps = child?.props || {};
  const messageId = error ? errorId : (hint ? hintId : undefined);
  const describedBy = [childProps['aria-describedby'], messageId].filter(Boolean).join(' ') || undefined;
  const control = child ? React.cloneElement(child, {
    required: childProps.required ?? required,
    'aria-required': childProps['aria-required'] ?? (required || undefined),
    'aria-invalid': childProps['aria-invalid'] ?? (error ? true : undefined),
    'aria-errormessage': childProps['aria-errormessage'] ?? (error ? errorId : undefined),
    'aria-describedby': describedBy,
  }) : children;
  const labelFor = htmlFor || childProps.id;
  /* cloneElement erreicht nur das direkte React-Kind. Steht zwischen Field und
     Eingabe ein weiterer Rahmen — etwa ein Import-Wrapper in einer Vorlage —,
     landen die Beziehungen dort und nie auf dem input. Darum verbindet Field
     die Beziehungen zusätzlich am DOM-Element mit der id aus htmlFor. Gesetzt
     wird nur, was fehlt; eigene Werte des Elements bleiben erhalten. */
  const rootRef = React.useRef(null);
  React.useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !labelFor) return undefined;
    let aufraeumen = null;
    const verbinde = () => {
    const el = root.querySelector(`[id="${String(labelFor).replace(/"/g, '\\"')}"]`);
    if (!el) return false;
    const gesetzt = [];
    const setze = (name, wert) => {
      if (wert === undefined || el.hasAttribute(name)) return;
      el.setAttribute(name, wert);
      gesetzt.push(name);
    };
    if (messageId && !(el.getAttribute('aria-describedby') || '').split(/\s+/).includes(messageId)) {
      const vorher = el.getAttribute('aria-describedby');
      el.setAttribute('aria-describedby', [vorher, messageId].filter(Boolean).join(' '));
      gesetzt.push(['aria-describedby', vorher]);
    }
    if (required) { setze('aria-required', 'true'); if (!el.required && 'required' in el) { el.required = true; gesetzt.push('required'); } }
    if (error) { setze('aria-invalid', 'true'); setze('aria-errormessage', errorId); }
    aufraeumen = () => {
      for (const eintrag of gesetzt) {
        if (Array.isArray(eintrag)) { if (eintrag[1]) el.setAttribute(eintrag[0], eintrag[1]); else el.removeAttribute(eintrag[0]); }
        else if (eintrag === 'required') el.required = false;
        else el.removeAttribute(eintrag);
      }
    };
    return true;
    };
    /* Ein verschachtelter Import kann das input erst nach Field einhängen. */
    let mo = null;
    if (!verbinde() && typeof MutationObserver !== 'undefined') {
      mo = new MutationObserver(() => { if (verbinde()) { mo.disconnect(); mo = null; } });
      mo.observe(root, { childList: true, subtree: true });
    }
    return () => { mo?.disconnect(); aufraeumen?.(); };
  }, [labelFor, messageId, required, error, errorId]);
  return (
    <div ref={rootRef} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label ? (
        <label htmlFor={labelFor} style={{ font: 'var(--type-body-sm)', color: 'var(--text-default)' }}>
          {label}
          {required ? <span aria-hidden="true" style={{ color: 'var(--text-danger)' }}> *</span> : null}
        </label>
      ) : null}
      {control}
      {error ? (
        <span id={errorId} role="alert" style={{ font: 'var(--type-caption)', color: 'var(--text-danger)' }}>{error}</span>
      ) : hint ? (
        <span id={hintId} style={{ font: 'var(--type-caption)', color: 'var(--text-muted)' }}>{hint}</span>
      ) : null}
    </div>
  );
}
