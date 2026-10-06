import React from 'react';
import { ICONS } from '../../icons.js';

/* Icons sind nicht Teil des CD-Manuals. Lucide ist der dokumentierte Ersatz
   (siehe README.md, ICONOGRAPHY), gerendert als CSS-Maske, damit das Glyph
   immer currentColor annimmt.

   Auslieferung: die benutzten Glyphen liegen lokal in assets/icons/ (Lucide
   0.446.0, ISC — Lizenz daneben). Der Pfad wird aus dem Ort des geladenen
   Bundles abgeleitet, nicht relativ zur aufrufenden Seite: die Karten liegen
   eine Ebene tief, die Komponentenkarten zwei, die Templates drei. Ein festes
   '../assets/icons/' wäre nur für eine dieser Tiefen richtig, ein absolutes
   '/assets/icons/' nur bei Auslieferung ab Serverwurzel.

   Vorrang: data-puk-icons auf <html> → Icon.base → lokal. Es gibt absichtlich
   keinen CDN-Rückfall: ein unbekanntes Glyph soll im Test als fehlende lokale
   Datei auffallen und keinen Fremdaufruf aus dem Klinik-Intranet auslösen.
   Wer ein weiteres Glyph benutzt, legt es dazu und ergänzt die Liste in der
   Karte «Auslieferung offline». */

const LOCAL = (() => {
  if (typeof document === 'undefined') return null;
  const s = document.querySelector('script[src$="_ds_bundle.js"]');
  try { return new URL('assets/icons/', new URL(s.src, document.baseURI)).href } catch (e) { return null }
})();

export function Icon({ name = 'circle', size = 20, strokeWidth, color = 'currentColor', style, ...rest }) {
  const attr = typeof document !== 'undefined' ? document.documentElement.getAttribute('data-puk-icons') : null;
  const base = attr || Icon.base || LOCAL;
  /* Design-System-Artefakt: die 13 lokalen Glyphen sind ins Bundle eingebettet
     (data:-URI), damit Vorschauen ohne Dateipfad funktionieren. data-puk-icons
     oder Icon.base haben weiterhin Vorrang. */
  const inline = !attr && !Icon.base && ICONS[name] ? 'data:image/svg+xml,' + encodeURIComponent(ICONS[name]) : null;
  const url = inline ? `url("${inline}")` : base ? `url("${base}${name}.svg")` : 'none';
  return (
    <span
      aria-hidden="true"
      data-icon={name}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        flex: '0 0 auto',
        background: color,
        WebkitMask: `${url} center / contain no-repeat`,
        mask: `${url} center / contain no-repeat`,
        ...style,
      }}
      {...rest}
    />
  );
}

Icon.base = null;
Icon.local = LOCAL;
