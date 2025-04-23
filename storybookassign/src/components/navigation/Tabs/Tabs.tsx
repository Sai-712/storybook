import React, { createContext, useContext, useState } from 'react';
import { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from './types';

const TabsContext = createContext<{
  value: string;
  onValueChange: (value: string) => void;
}>({
  value: '',
  onValueChange: () => {},
});

const Tabs: React.FC<TabsProps> = ({ 
  defaultValue, 
  value, 
  onValueChange,
  children,
  className = '',
  ...props 
}) => {
  const [tabValue, setTabValue] = useState(value || defaultValue || '');

  const handleValueChange = (newValue: string) => {
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setTabValue(newValue);
    }
  };

  return (
    <TabsContext.Provider 
      value={{ 
        value: value !== undefined ? value : tabValue, 
        onValueChange: handleValueChange 
      }}
    >
      <div className={`${className}`} role="tablist" {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList: React.FC<TabsListProps> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`
        inline-flex h-10 items-center justify-center rounded-lg bg-surface-muted p-1 text-surface-muted-foreground
        ${className}
      `} 
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value,
  children, 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const { value: selectedValue, onValueChange } = useContext(TabsContext);
  const isSelected = selectedValue === value;

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isSelected}
      disabled={disabled}
      data-state={isSelected ? 'active' : 'inactive'}
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium
        transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
        disabled:pointer-events-none disabled:opacity-50
        ${isSelected 
          ? 'bg-surface-background text-surface-foreground shadow-sm' 
          : 'text-surface-muted-foreground hover:bg-surface-muted/80'}
        ${className}
      `}
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent: React.FC<TabsContentProps> = ({ 
  value,
  children, 
  className = '', 
  ...props 
}) => {
  const { value: selectedValue } = useContext(TabsContext);
  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      tabIndex={0}
      data-state={isSelected ? 'active' : 'inactive'}
      className={`
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
        animate-fadeIn
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };