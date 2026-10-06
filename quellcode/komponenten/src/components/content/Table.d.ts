/**
 * Datentabelle mit Caption, Spalten- und Zeilenüberschriften.
 */
export interface TableColumn {
  key: string;
  label: React.ReactNode;
  /** Zahlen rechtsbündig mit Tabellenziffern. */
  align?: 'left' | 'right' | 'center';
}
export interface TableProps {
  /** Pflicht: benennt die Tabelle für Screenreader und Leserschaft. */
  caption: React.ReactNode;
  /** Caption nur für Screenreader, wenn ein sichtbarer Titel direkt darüber steht. */
  captionHidden?: boolean;
  columns: TableColumn[];
  rows: Array<Record<string, React.ReactNode> & { id?: string | number }>;
  /** Schlüssel der Spalte, die als Zeilenüberschrift (th scope="row") gilt. Standard: erste Spalte. */
  rowHeader?: string;
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function Table(props: TableProps): JSX.Element;
