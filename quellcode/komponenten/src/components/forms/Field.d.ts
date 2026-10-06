export interface FieldProps {
  label?: string;
  hint?: string;
  /** When present, replaces the hint and turns the message Signalrot. */
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
