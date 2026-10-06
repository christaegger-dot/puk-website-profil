export interface TagProps {
  children?: React.ReactNode;
  /** Renders a × affordance and fires on click. */
  onRemove?: (e: React.MouseEvent) => void;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
