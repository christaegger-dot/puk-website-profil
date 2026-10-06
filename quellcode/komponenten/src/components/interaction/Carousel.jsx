import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* Karussell nach dem APG-Muster «Carousel», bewusst zurückhaltend:
   - kein automatisches Weiterlaufen, keine Endlosschleife;
   - alle Folien bleiben im DOM und in der Lesereihenfolge (geordnete Liste);
   - Bedienung über Zurück/Weiter (44 px), Pfeiltasten im Folienbereich,
     Wischen über natives horizontales Scrollen mit Einrasten;
   - Position als Text («Folie 2 von 5») in einer höflichen Live-Region;
   - weiches Scrollen nur ohne prefers-reduced-motion. */
export function Carousel({ label, items = [], style }) {
  const baseId = React.useId();
  const [index, setIndex] = React.useState(0);
  const trackRef = React.useRef(null);
  const slideRefs = React.useRef([]);
  const count = items.length;
  const reduce = () => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const go = (next) => {
    const i = Math.max(0, Math.min(count - 1, next));
    const track = trackRef.current;
    const slide = slideRefs.current[i];
    if (track && slide) track.scrollTo({ left: slide.offsetLeft, behavior: reduce() ? 'auto' : 'smooth' });
    setIndex(i);
  };
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let t;
    const onScroll = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const w = track.clientWidth || 1;
        setIndex(Math.max(0, Math.min(count - 1, Math.round(track.scrollLeft / w))));
      }, 80);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => { track.removeEventListener('scroll', onScroll); clearTimeout(t); };
  }, [count]);
  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1); }
    else if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1); }
    else if (event.key === 'Home') { event.preventDefault(); go(0); }
    else if (event.key === 'End') { event.preventDefault(); go(count - 1); }
  };
  return (
    <section className="puk-carousel" aria-roledescription="Karussell" aria-label={label} style={style}>
      <ol
        ref={trackRef}
        className="puk-carousel__track"
        tabIndex={0}
        aria-label={`${label}: Folien, mit Pfeiltasten wechseln`}
        onKeyDown={onKeyDown}
      >
        {items.map((item, i) => (
          <li
            key={i}
            ref={(node) => { slideRefs.current[i] = node; }}
            className="puk-carousel__slide"
            aria-roledescription="Folie"
            aria-label={`${i + 1} von ${count}: ${item.title}`}
            onFocus={() => setIndex(i)}
          >
            <h3 className="puk-carousel__title">{item.title}</h3>
            <div className="puk-carousel__content">{item.content}</div>
          </li>
        ))}
      </ol>
      <div className="puk-carousel__controls">
        <button type="button" className="puk-carousel__btn" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Vorherige Folie">
          <Icon name="arrow-right" size={20} style={{ transform: 'scaleX(-1)' }} />
        </button>
        <p className="puk-carousel__status" id={`${baseId}-status`} aria-live="polite">Folie {count ? index + 1 : 0} von {count}</p>
        <button type="button" className="puk-carousel__btn" onClick={() => go(index + 1)} disabled={index >= count - 1} aria-label="Nächste Folie">
          <Icon name="arrow-right" size={20} />
        </button>
      </div>
    </section>
  );
}
