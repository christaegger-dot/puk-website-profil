/**
 * Textlink mit Hover-, besuchtem, Fokus- und externem Zustand.
 */
export interface LinkProps {
  href: string;
  children?: React.ReactNode;
  /** Wird aus href abgeleitet (http, https, //); explizit setzen, um zu übersteuern. */
  external?: boolean;
  /** Öffnet in neuem Fenster und kündigt das für Screenreader an. Sparsam einsetzen. */
  newWindow?: boolean;
  /** Eigenständiger Link mit Pfeil, etwa am Ende einer Karte. Standard: Link im Fliesstext. */
  standalone?: boolean;
  /** Setzt aria-current="page". */
  current?: boolean;
  style?: React.CSSProperties;
}
export declare function Link(props: LinkProps): JSX.Element;
