export interface IconButtonProps {
  /** Lucide icon name. */
  icon?: string;
  /** Accessible label — required, also used as the tooltip. */
  label: string;
  variant?: 'ghost' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
