/**
 * Primary action control.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = black (default house action), accent = PUK blue, inverse = white on dark. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
