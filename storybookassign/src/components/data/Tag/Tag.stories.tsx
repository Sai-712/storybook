import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta = {
  title: 'Data/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    removable: { control: 'boolean' },
    withDot: { control: 'boolean' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
    variant: 'default',
    size: 'md',
    removable: false,
    withDot: false,
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Tag',
    variant: 'primary',
    size: 'md',
    removable: false,
    withDot: false,
  },
};

export const WithDot: Story = {
  args: {
    children: 'Tag with Dot',
    variant: 'success',
    size: 'md',
    removable: false,
    withDot: true,
  },
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    variant: 'error',
    size: 'md',
    removable: true,
    withDot: false,
    onRemove: () => alert('Tag removed'),
  },
};

export const Small: Story = {
  args: {
    children: 'Small Tag',
    variant: 'info',
    size: 'sm',
    removable: false,
    withDot: false,
  },
};

export const Large: Story = {
  args: {
    children: 'Large Tag',
    variant: 'warning',
    size: 'lg',
    removable: false,
    withDot: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const WithDotVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default" withDot>Default</Tag>
      <Tag variant="primary" withDot>Primary</Tag>
      <Tag variant="secondary" withDot>Secondary</Tag>
      <Tag variant="success" withDot>Success</Tag>
      <Tag variant="warning" withDot>Warning</Tag>
      <Tag variant="error" withDot>Error</Tag>
      <Tag variant="info" withDot>Info</Tag>
    </div>
  ),
};