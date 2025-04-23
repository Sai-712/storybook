import { HTMLAttributes, ReactNode } from 'react';

export interface MenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface TopNavigationProps extends HTMLAttributes<HTMLElement> {
  /** Logo component or text to display */
  logo: ReactNode;
  /** Array of menu items */
  menuItems?: MenuItem[];
  /** Action components (buttons, dropdowns, etc.) */
  actions?: ReactNode[];
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'neutral' | 'transparent';
  /** Additional CSS class names */
  className?: string;
}