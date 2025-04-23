import React from 'react';
import { X, Circle } from 'lucide-react';
import { TagProps } from './types';

const tagSizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  lg: 'text-base px-3 py-1.5',
};

const dotSizeClasses = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-2.5 h-2.5',
};

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  removable = false,
  withDot = false,
  onRemove,
  className = '',
  ...props
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200';
      case 'secondary':
        return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200';
      case 'success':
        return 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200';
      case 'warning':
        return 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200';
      case 'error':
        return 'bg-error-100 text-error-800 dark:bg-error-900 dark:text-error-200';
      case 'info':
        return 'bg-info-100 text-info-800 dark:bg-info-900 dark:text-info-200';
      default:
        return 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200';
    }
  };

  const getDotColor = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500';
      case 'secondary':
        return 'bg-secondary-500';
      case 'success':
        return 'bg-success-500';
      case 'warning':
        return 'bg-warning-500';
      case 'error':
        return 'bg-error-500';
      case 'info':
        return 'bg-info-500';
      default:
        return 'bg-neutral-500';
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium
        ${tagSizeClasses[size]}
        ${getVariantClasses()}
        ${className}
      `}
      {...props}
    >
      {withDot && (
        <span className={`${dotSizeClasses[size]} ${getDotColor()} rounded-full mr-1.5`} />
      )}
      {children}
      {removable && (
        <button
          type="button"
          onClick={handleRemove}
          className={`
            ml-1.5 rounded-full flex items-center justify-center
            hover:bg-neutral-200 dark:hover:bg-neutral-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
            focus:ring-primary-500 focus:ring-opacity-50
            transition-colors
          `}
          aria-label="Remove"
        >
          <X className={size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
        </button>
      )}
    </span>
  );
};

export { Tag };