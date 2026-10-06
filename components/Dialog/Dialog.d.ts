export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Action row, right-aligned above a hairline rule. */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
