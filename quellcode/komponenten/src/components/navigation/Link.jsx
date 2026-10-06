import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* Farbe, Hover, besuchter Zustand und Fokus kommen aus tokens/base.css
   ([data-puk-link]) — :visited und :focus-visible lassen sich nicht inline
   setzen. Die Komponente regelt Semantik: externe Ziele, neues Fenster und
   die dazugehörige Ansage für Screenreader. */
function isExternal(href) {
  return /^(https?:)?\/\//i.test(href || '') && !(typeof location !== 'undefined' && href.includes(location.host));
}

export function Link({
  href,
  children,
  external,
  newWindow = false,
  standalone = false,
  current = false,
  style,
  ...rest
}) {
  const ext = external ?? isExternal(href);
  const hinweis = [ext ? 'externer Link' : null, newWindow ? 'öffnet in neuem Fenster' : null].filter(Boolean).join(', ');
  return (
    <a
      href={href}
      data-puk-link={standalone ? 'standalone' : 'inline'}
      data-external={ext ? '' : undefined}
      aria-current={current ? 'page' : undefined}
      target={newWindow ? '_blank' : undefined}
      rel={newWindow || ext ? 'noopener noreferrer' : undefined}
      style={{
        display: standalone ? 'inline-flex' : undefined,
        alignItems: standalone ? 'center' : undefined,
        gap: standalone ? 'var(--space-2)' : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
      {ext ? (
        <Icon name="arrow-right" size={standalone ? 18 : 14} style={{ transform: 'rotate(-45deg)', marginLeft: standalone ? 0 : 2, verticalAlign: 'middle' }} />
      ) : standalone ? (
        <Icon name="arrow-right" size={18} />
      ) : null}
      {hinweis ? <span data-puk-sr-only="">{` (${hinweis})`}</span> : null}
    </a>
  );
}
