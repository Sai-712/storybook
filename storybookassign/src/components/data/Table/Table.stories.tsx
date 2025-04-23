import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Tag } from '../Tag';

const meta = {
  title: 'Data/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
    bordered: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    size: { 
      control: { type: 'select' }, 
      options: ['sm', 'md', 'lg'] 
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    status: 'Active',
    lastActive: '2 hours ago',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Frontend Developer',
    status: 'Active',
    lastActive: '5 minutes ago',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    status: 'Inactive',
    lastActive: '3 days ago',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Backend Developer',
    status: 'Active',
    lastActive: '1 hour ago',
  },
  {
    id: '5',
    name: 'Olivia Wilson',
    role: 'Data Analyst',
    status: 'Pending',
    lastActive: '12 hours ago',
  },
];

export const Default: Story = {
  args: {
    columns: [
      { id: 'name', header: 'Name', accessorKey: 'name', isSortable: true },
      { id: 'role', header: 'Role', accessorKey: 'role', isSortable: true },
      { id: 'status', header: 'Status', accessorKey: 'status', isSortable: true },
      { id: 'lastActive', header: 'Last Active', accessorKey: 'lastActive', isSortable: true },
    ],
    data: mockData,
    striped: true,
    bordered: true,
    hoverable: true,
    size: 'md',
  },
};

export const WithCustomCells: Story = {
  args: {
    columns: [
      { id: 'name', header: 'Name', accessorKey: 'name', isSortable: true },
      { id: 'role', header: 'Role', accessorKey: 'role', isSortable: true },
      { 
        id: 'status', 
        header: 'Status', 
        accessorKey: 'status', 
        cell: (info: any) => (
          <Tag 
            variant={
              info.getValue() === 'Active' ? 'success' : 
              info.getValue() === 'Pending' ? 'warning' : 
              info.getValue() === 'Inactive' ? 'error' : 'default'
            }
          >
            {info.getValue()}
          </Tag>
        ),
        isSortable: true 
      },
      { id: 'lastActive', header: 'Last Active', accessorKey: 'lastActive', isSortable: true },
    ],
    data: mockData,
    striped: true,
    bordered: false,
    hoverable: true,
    size: 'md',
  },
};

export const Compact: Story = {
  args: {
    columns: [
      { id: 'name', header: 'Name', accessorKey: 'name', isSortable: true },
      { id: 'role', header: 'Role', accessorKey: 'role', isSortable: true },
      { id: 'status', header: 'Status', accessorKey: 'status', isSortable: true },
      { id: 'lastActive', header: 'Last Active', accessorKey: 'lastActive', isSortable: true },
    ],
    data: mockData,
    striped: false,
    bordered: false,
    hoverable: true,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    columns: [
      { id: 'name', header: 'Name', accessorKey: 'name', isSortable: true },
      { id: 'role', header: 'Role', accessorKey: 'role', isSortable: true },
      { id: 'status', header: 'Status', accessorKey: 'status', isSortable: true },
      { id: 'lastActive', header: 'Last Active', accessorKey: 'lastActive', isSortable: true },
    ],
    data: mockData,
    striped: true,
    bordered: true,
    hoverable: false,
    size: 'lg',
  },
};