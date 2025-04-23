import { ReactNode } from 'react';

export type SortDirection = 'asc' | 'desc' | 'none';

export interface SortingState {
  column: string | null;
  direction: SortDirection;
}

export interface CellProps<T> {
  getValue: () => any;
  row: T;
}

export interface Column<T> {
  id: string;
  header: ReactNode;
  accessorKey: string;
  cell?: (props: CellProps<T>) => ReactNode;
  isSortable?: boolean;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
  size?: 'sm' | 'md' | 'lg';
}