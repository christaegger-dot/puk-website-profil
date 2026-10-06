export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'info' | 'warning' | 'danger' | 'inverse';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
