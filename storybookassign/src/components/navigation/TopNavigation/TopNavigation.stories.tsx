import type { Meta, StoryObj } from '@storybook/react';
import { TopNavigation } from './TopNavigation';
import { Bell, Settings, Search } from 'lucide-react';

const meta = {
  title: 'Navigation/TopNavigation',
  component: TopNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'transparent'],
    },
  },
} satisfies Meta<typeof TopNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    logo: 'Company',
    menuItems: [
      { label: 'Dashboard', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Reports', href: '#' },
    ],
    actions: [
      <button key="search" className="p-2 rounded-full hover:bg-white/20">
        <Search className="h-5 w-5" />
      </button>,
      <button key="notifications" className="p-2 rounded-full hover:bg-white/20">
        <Bell className="h-5 w-5" />
      </button>,
      <button key="settings" className="p-2 rounded-full hover:bg-white/20">
        <Settings className="h-5 w-5" />
      </button>,
    ],
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

export const Neutral: Story = {
  args: {
    ...Primary.args,
    variant: 'neutral',
  },
};

export const Transparent: Story = {
  args: {
    ...Primary.args,
    variant: 'transparent',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const WithCustomLogo: Story = {
  args: {
    logo: (
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-primary-600 font-bold">E</span>
        </div>
        <span className="font-bold text-xl">Enterprise</span>
      </div>
    ),
    menuItems: [
      { label: 'Dashboard', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Reports', href: '#' },
    ],
    actions: [
      <button key="search" className="p-2 rounded-full hover:bg-white/20">
        <Search className="h-5 w-5" />
      </button>,
      <button key="notifications" className="p-2 rounded-full hover:bg-white/20">
        <Bell className="h-5 w-5" />
      </button>,
    ],
    variant: 'primary',
  },
};