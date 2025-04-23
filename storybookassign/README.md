# Enterprise Design System

A comprehensive design system built with React, TypeScript, and TailwindCSS, featuring reusable components for enterprise applications.

## Features

- Token-based color system with light/dark theme support
- WCAG-compliant contrast ratios across all components
- Data display components: Table with sorting functionality, Tag/Badge
- Navigation components: Top Navigation Bar, Tabs
- Comprehensive Storybook documentation
- TypeScript interfaces for all component props

## Getting Started

### Prerequisites

- Node.js (version 14 or newer)
- npm or yarn

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

### Running Storybook

```bash
npm run storybook
```

## Color System

The design system includes a comprehensive token-based color system:

- Primary, Secondary, Tertiary Colors
- Neutral Colors (greys, whites, backgrounds, borders)
- Semantic Colors: Success, Info, Warning, Error
- Surface & Background Layers
- Light & Dark Theme Support

All colors are accessible and follow WCAG compliance guidelines for contrast ratios.

## Components

### Data Display Components

#### Table

A flexible table component with:
- Sortable columns
- Custom cell rendering
- Responsive design
- Striped, bordered, and hoverable variants
- Different size options

#### Tags / Badges

A versatile tag/badge component with:
- Multiple color variants (default, primary, secondary, success, warning, error, info)
- Size options (small, medium, large)
- Optional dot indicator
- Removable option with callback

### Navigation Components

#### Top Navigation Bar

A responsive top navigation bar with:
- Logo/brand display
- Menu items
- Action items
- Mobile responsiveness with hamburger menu
- Multiple color variants

#### Tabs

A flexible tabs component with:
- Keyboard navigation
- Uncontrolled and controlled modes
- Animated tab transitions
- Disabled state support

## Accessibility

All components are built with accessibility in mind:
- Proper ARIA roles and attributes
- Keyboard navigation support
- Focus management
- Sufficient color contrast

## License

MIT