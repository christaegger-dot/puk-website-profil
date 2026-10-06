export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-right". */
  name?: string;
  /** Square size in px. Default 20. */
  size?: number;
  /** Compatibility input for Lucide-style call sites. Mask icons keep their authored stroke. */
  strokeWidth?: number;
  /** Any CSS colour; defaults to currentColor. */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
