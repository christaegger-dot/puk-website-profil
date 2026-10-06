export interface TooltipProps {
  label: React.ReactNode;
  /** A single trigger element is preferred; other content receives a focusable wrapper. */
  children?: React.ReactNode;
  placement?: 'top' | 'bottom';
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
