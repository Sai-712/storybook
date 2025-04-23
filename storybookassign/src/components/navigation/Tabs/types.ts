import { HTMLAttributes, ReactNode } from 'react';

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /** Initial value of the tabs (uncontrolled) */
  defaultValue?: string;
  /** Current value of the tabs (controlled) */
  value?: string;
  /** Callback when tab is changed */
  onValueChange?: (value: string) => void;
  /** Tabs content */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
}

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  /** Tab triggers */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
}

export interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  /** Value of the tab */
  value: string;
  /** Content of the trigger */
  children: ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Additional CSS class names */
  className?: string;
}

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Value of the tab this content belongs to */
  value: string;
  /** Content of the tab */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
}