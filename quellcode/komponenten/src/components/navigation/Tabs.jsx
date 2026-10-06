import React from 'react';

export function Tabs({ items = [], value, defaultValue, onChange, children, style }) {
  const first = items[0] && (typeof items[0] === 'string' ? items[0] : items[0].value);
  const controlled = value !== undefined;
  const [inner, setInner] = React.useState(defaultValue ?? first);
  const active = controlled ? value : inner;
  const baseId = React.useId();
  const tabRefs = React.useRef([]);
  const foundIndex = items.findIndex((item) => (typeof item === 'string' ? item : item.value) === active);
  const activeIndex = foundIndex >= 0 ? foundIndex : (items.length ? 0 : -1);
  const select = (v) => { if (!controlled) setInner(v); onChange && onChange(v); };
  /* Das Panel wird nur gerendert, wenn children vorhanden sind. aria-controls
     darf dann auch nur dann gesetzt werden — ein Verweis auf eine nicht
     existierende ID verletzt die ARIA-Referenzintegrität. */
  const hasPanel = children !== undefined && children !== null;
  const move = (event, index) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % items.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;
    event.preventDefault();
    const item = items[next];
    select(typeof item === 'string' ? item : item.value);
    tabRefs.current[next]?.focus();
    tabRefs.current[next]?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', ...style }}>
      <div role="tablist" aria-orientation="horizontal" style={{ display: 'flex', gap: 'var(--space-8)', borderBottom: '1px solid var(--border-hairline)', overflowX: 'auto', scrollbarWidth: 'thin' }}>
        {items.map((it, index) => {
          const v = typeof it === 'string' ? it : it.value;
          const l = typeof it === 'string' ? it : it.label;
          const on = index === activeIndex;
          return (
            <button
              key={v}
              ref={(node) => { tabRefs.current[index] = node; }}
              id={`${baseId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls={hasPanel ? `${baseId}-panel` : undefined}
              tabIndex={on ? 0 : -1}
              onClick={() => select(v)}
              onKeyDown={(event) => move(event, index)}
              style={{
                border: 0,
                background: 'transparent',
                /* Ziel mindestens 44 px hoch; auf schmalen Bildschirmen scrollt die Reiterleiste waagrecht statt umzubrechen. */
                display: 'inline-flex',
                alignItems: 'flex-end',
                flex: '0 0 auto',
                minHeight: 'var(--web-touch-target, 44px)',
                whiteSpace: 'nowrap',
                padding: '0 0 12px',
                font: 'var(--type-body)',
                fontFamily: 'var(--font-core)',
                color: on ? 'var(--puk-black-100)' : 'var(--text-muted)',
                borderBottom: '2px solid ' + (on ? 'var(--puk-blue-100)' : 'transparent'),
                marginBottom: -1,
                cursor: 'pointer',
                transition: 'color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
              }}
            >
              {l}
            </button>
          );
        })}
      </div>
      {hasPanel ? (
        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={activeIndex >= 0 ? `${baseId}-tab-${activeIndex}` : undefined}
          tabIndex={0}
          style={{ paddingTop: 'var(--space-6)' }}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
