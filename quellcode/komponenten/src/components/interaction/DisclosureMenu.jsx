import React from 'react';

/* Dropdown-Menü für Navigation nach dem APG-Muster «Disclosure Navigation
   Menu» – bewusst kein role="menu": Die Einträge sind normale Links, die mit
   Tab erreichbar sind. Öffnen und Schliessen über die Schaltfläche (Klick,
   Enter, Leertaste); Escape schliesst und gibt den Fokus an die Schaltfläche
   zurück; Klick ausserhalb und Wegtabben schliessen. Pfeil ab/auf bewegt
   zusätzlich zwischen den Einträgen. Auf schmalen Bildschirmen klappt die
   Liste im Fluss auf statt zu schweben (bundle.css, .puk-disclosure). */
export function DisclosureMenu({ label, items = [], align = 'start', style }) {
  const [open, setOpen] = React.useState(false);
  const baseId = React.useId();
  const wrapRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const linkRefs = React.useRef([]);
  React.useEffect(() => {
    if (!open) return undefined;
    const onPointer = (event) => { if (wrapRef.current && !wrapRef.current.contains(event.target)) setOpen(false); };
    const onKey = (event) => { if (event.key === 'Escape') { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('keydown', onKey); };
  }, [open]);
  const onBlur = (event) => { if (wrapRef.current && event.relatedTarget && !wrapRef.current.contains(event.relatedTarget)) setOpen(false); };
  const focusLink = (i) => { const n = items.length; const k = (i + n) % n; linkRefs.current[k]?.focus(); };
  const onBtnKey = (event) => {
    if (event.key === 'ArrowDown') { event.preventDefault(); setOpen(true); setTimeout(() => focusLink(0), 0); }
  };
  const onListKey = (event) => {
    const i = linkRefs.current.indexOf(document.activeElement);
    if (event.key === 'ArrowDown') { event.preventDefault(); focusLink(i + 1); }
    else if (event.key === 'ArrowUp') { event.preventDefault(); focusLink(i - 1); }
    else if (event.key === 'Home') { event.preventDefault(); focusLink(0); }
    else if (event.key === 'End') { event.preventDefault(); focusLink(items.length - 1); }
  };
  const current = items.some((item) => item.current);
  return (
    <div ref={wrapRef} className={'puk-disclosure' + (align === 'end' ? ' puk-disclosure--end' : '')} onBlur={onBlur} style={style}>
      <button
        ref={btnRef}
        type="button"
        className="puk-disclosure__button"
        aria-expanded={open}
        aria-controls={`${baseId}-list`}
        data-current={current ? 'true' : undefined}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onBtnKey}
      >
        <span>{label}</span>
        <span className="puk-disclosure__chevron" aria-hidden="true" />
      </button>
      <ul id={`${baseId}-list`} className="puk-disclosure__panel" hidden={!open} onKeyDown={onListKey}>
        {items.map((item, i) => (
          <li key={item.href || i}>
            <a
              ref={(node) => { linkRefs.current[i] = node; }}
              className="puk-disclosure__link"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
              {item.description ? <span className="puk-disclosure__desc">{item.description}</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
