/* Automatisch erzeugt: npm run generieren. Nur die Typquelle im Quellordner bearbeiten. */
export interface AlertProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** emergency is reserved for the psychiatric emergency service notice. */
  tone?: 'info' | 'warning' | 'danger' | 'emergency';
  style?: React.CSSProperties;
}
export declare function Alert(props: AlertProps): JSX.Element;
