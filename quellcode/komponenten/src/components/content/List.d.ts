/**
 * Aufzählung oder nummerierte Liste mit echter ul/ol/li-Semantik.
 */
export interface ListProps {
  /** Einträge als Array; alternativ children mit eigenen <li>. */
  items?: React.ReactNode[];
  children?: React.ReactNode;
  /** true = <ol>, false = <ul>. */
  ordered?: boolean;
  /** Standard: disc für ul, number für ol. none behält die Listensemantik (role="list"). */
  marker?: 'disc' | 'number' | 'none';
  spacing?: 'sm' | 'md' | 'lg';
  /** Startwert einer nummerierten Liste. */
  start?: number;
  style?: React.CSSProperties;
}
export declare function List(props: ListProps): JSX.Element;
