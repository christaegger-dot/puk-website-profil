/**
 * Karussell für wenige gleichrangige, in sich abgeschlossene Inhalte (3–6 Folien). Kein Autoplay, keine Endlosschleife.
 */
export interface CarouselItem {
  /** Folientitel; wird auch Teil des zugänglichen Namens («2 von 5: Titel»). */
  title: string;
  /** Inhalt der Folie (Text, Link, kurze Liste). */
  content?: React.ReactNode;
}
export interface CarouselProps {
  /** Zugänglicher Name des Karussells, z. B. «Erfahrungen anderer Angehöriger». Pflicht. */
  label: string;
  items: CarouselItem[];
  style?: React.CSSProperties;
}
export declare function Carousel(props: CarouselProps): JSX.Element;
