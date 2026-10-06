export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Shared name for every radio in the group — required. */
  name: string;
  /** Visible accessible group name. Falls back to aria-label or name. */
  label?: React.ReactNode;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
