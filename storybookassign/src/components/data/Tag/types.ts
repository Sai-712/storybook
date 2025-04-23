export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Content of the tag */
  children: React.ReactNode;
  /** Visual style variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Size of the tag */
  size?: 'sm' | 'md' | 'lg';
  /** Whether tag can be removed */
  removable?: boolean;
  /** Whether tag has a colored dot */
  withDot?: boolean;
  /** Called when remove button is clicked */
  onRemove?: () => void;
  /** Additional CSS class names */
  className?: string;
}