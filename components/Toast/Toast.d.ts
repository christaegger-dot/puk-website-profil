export interface ToastProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
