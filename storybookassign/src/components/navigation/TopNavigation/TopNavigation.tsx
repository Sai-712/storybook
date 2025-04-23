import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TopNavigationProps } from './types';

const TopNavigation: React.FC<TopNavigationProps> = ({
  logo,
  menuItems = [],
  actions = [],
  variant = 'primary',
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 text-white';
      case 'secondary':
        return 'bg-secondary-600 text-white';
      case 'transparent':
        return 'bg-transparent text-surface-foreground border-b border-surface-border';
      case 'neutral':
      default:
        return 'bg-surface-card text-surface-card-foreground border-b border-surface-border';
    }
  };

  return (
    <nav
      className={`
        ${getVariantClasses()}
        ${className}
      `}
      {...props}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {typeof logo === 'string' ? (
              <span className="text-xl font-bold">{logo}</span>
            ) : (
              logo
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`
                    px-3 py-2 rounded-md text-sm font-medium 
                    hover:bg-opacity-20 hover:bg-white 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                    transition-colors
                  `}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {actions.map((action, index) => (
              <React.Fragment key={index}>
                {action}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-opacity-20 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden animate-slideDown`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-opacity-20 hover:bg-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="border-t border-white border-opacity-20 px-4 py-3 space-y-3">
          {actions.map((action, index) => (
            <div key={index} className="flex justify-center">
              {action}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export { TopNavigation };