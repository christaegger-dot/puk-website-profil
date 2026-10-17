export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  invalid?: boolean;
  size?: 'sm' | 'md';
}
export declare function Input(props: InputProps): JSX.Element;
