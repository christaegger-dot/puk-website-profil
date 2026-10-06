import React from 'react';

/* Disclosure-Gruppe nach dem APG-Muster «Accordion»: Überschrift enthält
   einen button mit aria-expanded und aria-controls; das Panel ist eine
   region mit aria-labelledby. Enter und Leertaste kommen vom nativen button,
   Pfeil hoch/runter, Pos1 und Ende springen zwischen den Kopfzeilen.
   Geschlossene Panels bleiben im DOM (hidden), damit aria-controls immer
   auf ein existierendes Element zeigt. */
export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], headingLevel = 3, style }) {
  const baseId = React.useId();
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const refs = React.useRef([]);
  const H = `h${Math.min(6, Math.max(2, headingLevel))}`;
  const toggle = (id) => setOpen((prev) => {
    const next = new Set(allowMultiple ? prev : prev.has(id) ? [id] : []);
    if (prev.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  const move = (event, index) => {
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % items.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;
    event.preventDefault();
    refs.current[next]?.focus();
  };
  return (
    <div data-puk-accordion="" style={{ borderTop: '1px solid var(--border-hairline)', ...style }}>
      {items.map((item, index) => {
        const id = item.id ?? String(index);
        const isOpen = open.has(id);
        const btnId = `${baseId}-kopf-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={id} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
            <H style={{ margin: 0, font: 'inherit' }}>
              <button
                ref={(node) => { refs.current[index] = node; }}
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(id)}
                onKeyDown={(event) => move(event, index)}
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-4) 0',
                  border: 0,
                  background: 'transparent',
                  font: 'var(--puk-read-font, var(--type-body))',
                  fontWeight: 'var(--fw-regular)',
                  color: 'var(--text-default)',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <span>{item.title}</span>
                <span
                  aria-hidden="true"
                  style={{
                    width: 9,
                    height: 9,
                    flex: '0 0 auto',
                    marginRight: 4,
                    borderRight: '1.5px solid currentColor',
                    borderBottom: '1.5px solid currentColor',
                    transform: isOpen ? 'translateY(2px) rotate(-135deg)' : 'translateY(-2px) rotate(45deg)',
                    transition: 'transform var(--dur-base) var(--ease-standard)',
                  }}
                />
              </button>
            </H>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              style={{ padding: '0 0 var(--space-5)', font: 'var(--puk-read-font, var(--type-body-sm))', color: 'var(--text-default)' }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
