/**
 * Flat, square-cornered content container.
 */
export interface CardProps {
  title?: React.ReactNode;
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** Image or figure rendered in a 3:2 frame above the text. */
  media?: React.ReactNode;
  variant?: 'default' | 'sunken' | 'brand' | 'inverse';
  /** Makes the whole card a link; hover then turns the border PUK blue. */
  href?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
