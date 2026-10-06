import React from 'react';
import { Radio } from './Radio.jsx';

/* Eigene Datei, nicht mehr am Ende von Radio.jsx: der Compiler liest je
   <Name>.d.ts genau ein Bauteil, deshalb fiel RadioGroup aus Manifest und
   Adhärenzregeln heraus, obwohl es im Bundle lag. */
export function RadioGroup({ name, label, options = [], value, onChange, direction = 'column', style, ...rest }) {
  const labelId = React.useId();
  const explicitLabel = rest['aria-label'];
  return (
    <div
      role="radiogroup"
      {...rest}
      aria-labelledby={label ? labelId : rest['aria-labelledby']}
      aria-label={label || rest['aria-labelledby'] ? explicitLabel : (explicitLabel || name)}
      style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 'var(--space-6)' : 'var(--space-3)', ...style }}
    >
      {label ? <span id={labelId} style={{ font: 'var(--type-body-sm)', color: 'var(--text-default)' }}>{label}</span> : null}
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value;
        const l = typeof o === 'string' ? o : o.label;
        return <Radio key={v} name={name} value={v} label={l} checked={value === v} onChange={() => onChange && onChange(v)} />;
      })}
    </div>
  );
}
