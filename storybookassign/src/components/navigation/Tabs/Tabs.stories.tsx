import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4 mt-4 bg-surface-card rounded-md">
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-surface-muted-foreground mt-2">
          Manage your account information and preferences here.
        </p>
      </TabsContent>
      <TabsContent value="password" className="p-4 mt-4 bg-surface-card rounded-md">
        <h3 className="text-lg font-medium">Password</h3>
        <p className="text-surface-muted-foreground mt-2">
          Change your password and manage security settings.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="p-4 mt-4 bg-surface-card rounded-md">
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-surface-muted-foreground mt-2">
          Adjust application settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active Tab</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled Tab</TabsTrigger>
        <TabsTrigger value="other">Other Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-4 mt-4 bg-surface-card rounded-md">
        <h3 className="text-lg font-medium">Active Tab Content</h3>
        <p className="text-surface-muted-foreground mt-2">
          This is the active tab content.
        </p>
      </TabsContent>
      <TabsContent value="disabled" className="p-4 mt-4 bg-surface-card rounded-md">
        <h3 className="text-lg font-medium">Disabled Tab Content</h3>
        <p className="text-surface-muted-foreground mt-2">
          This content should not be accessible.
        </p>
      </TabsContent>
      <TabsContent value="other" className="p-4 mt-4 bg-surface-card rounded-md">
        <h3 className="text-lg font-medium">Other Tab Content</h3>
        <p className="text-surface-muted-foreground mt-2">
          This is the content for the other tab.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: function ControlledTabs() {
    const [value, setValue] = React.useState('first');
    
    return (
      <div className="space-y-4">
        <div className="flex gap-4">
          <button 
            onClick={() => setValue('first')}
            className="px-4 py-2 bg-primary-500 text-white rounded-md"
          >
            Set to First
          </button>
          <button 
            onClick={() => setValue('second')}
            className="px-4 py-2 bg-secondary-500 text-white rounded-md"
          >
            Set to Second
          </button>
        </div>
        
        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="first">First Tab</TabsTrigger>
            <TabsTrigger value="second">Second Tab</TabsTrigger>
          </TabsList>
          <TabsContent value="first" className="p-4 mt-4 bg-surface-card rounded-md">
            <h3 className="text-lg font-medium">First Tab Content</h3>
            <p className="text-surface-muted-foreground mt-2">
              This tab is controlled by external state.
            </p>
          </TabsContent>
          <TabsContent value="second" className="p-4 mt-4 bg-surface-card rounded-md">
            <h3 className="text-lg font-medium">Second Tab Content</h3>
            <p className="text-surface-muted-foreground mt-2">
              This tab is controlled by external state.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};