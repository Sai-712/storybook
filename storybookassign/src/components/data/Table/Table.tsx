import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { TableProps, SortingState, Column } from './types';

const Table = <T extends Record<string, any>>({
  columns,
  data,
  striped = true,
  bordered = false,
  hoverable = true,
  size = 'md',
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>({
    column: null,
    direction: 'none',
  });

  const handleSort = (column: Column<T>) => {
    if (!column.isSortable) return;

    const direction = sorting.column === column.id
      ? sorting.direction === 'asc'
        ? 'desc'
        : sorting.direction === 'desc'
          ? 'none'
          : 'asc'
      : 'asc';

    setSorting({
      column: direction === 'none' ? null : column.id,
      direction,
    });
  };

  const sortedData = React.useMemo(() => {
    if (sorting.column === null || sorting.direction === 'none') {
      return data;
    }

    const columnToSort = columns.find(col => col.id === sorting.column);
    if (!columnToSort) return data;

    const accessorKey = columnToSort.accessorKey;
    
    return [...data].sort((a, b) => {
      const aValue = a[accessorKey];
      const bValue = b[accessorKey];
      
      if (aValue === bValue) return 0;
      
      if (sorting.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }, [data, columns, sorting]);

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const paddingClasses = {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
  };

  return (
    <div className="w-full overflow-x-auto rounded-md border border-surface-border">
      <table className={`w-full ${sizeClasses[size]}`}>
        <thead className="bg-surface-muted">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className={`${paddingClasses[size]} text-left font-medium ${
                  column.isSortable ? 'cursor-pointer select-none' : ''
                } ${bordered ? 'border-b border-surface-border' : ''}`}
                onClick={column.isSortable ? () => handleSort(column) : undefined}
              >
                <div className="flex items-center gap-1">
                  {column.header}
                  {column.isSortable && (
                    <span className="ml-1">
                      {sorting.column === column.id ? (
                        sorting.direction === 'asc' ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )
                      ) : (
                        <ChevronsUpDown className="h-4 w-4 text-surface-muted-foreground" />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={row.id || `row-${rowIndex}`}
              className={`
                ${hoverable ? 'hover:bg-surface-muted/30' : ''}
                ${striped && rowIndex % 2 !== 0 ? 'bg-surface-muted/20' : ''}
                ${bordered ? 'border-b border-surface-border' : ''}
                transition-colors
              `}
            >
              {columns.map((column) => (
                <td key={`${rowIndex}-${column.id}`} className={paddingClasses[size]}>
                  {column.cell
                    ? column.cell({ getValue: () => row[column.accessorKey], row })
                    : row[column.accessorKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };