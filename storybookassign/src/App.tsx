import React, { useState } from 'react';
import { Table } from './components/data/Table';
import { Tag } from './components/data/Tag';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/navigation/Tabs';
import { TopNavigation } from './components/navigation/TopNavigation';
import { ThemeToggle } from './components/theme/ThemeToggle';
import { tableData } from './data/mockData';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeColorScheme, setActiveColorScheme] = useState<'default' | 'blue' | 'green' | 'purple'>('default');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const changeColorScheme = (scheme: 'default' | 'blue' | 'green' | 'purple') => {
    // Remove existing color scheme classes
    document.documentElement.classList.remove('color-blue', 'color-green', 'color-purple');
    
    if (scheme !== 'default') {
      document.documentElement.classList.add(`color-${scheme}`);
    }
    setActiveColorScheme(scheme);
  };

  return (
    <div className="min-h-screen bg-surface-background text-surface-foreground">
      <TopNavigation
        logo="EnterpriseUI"
        menuItems={[
          { label: 'Dashboard', href: '#' },
          { label: 'Projects', href: '#' },
          { label: 'Reports', href: '#' },
          { label: 'Settings', href: '#' },
        ]}
        actions={[
          <ThemeToggle key="theme-toggle" theme={theme} toggleTheme={toggleTheme} />
        ]}
      />
      
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Enterprise Design System</h1>
        
        <Tabs defaultValue="components">
          <TabsList>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="colors">Color System</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components" className="mt-6">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Components</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Tags / Badges</h3>
                    <div className="flex flex-wrap gap-4">
                      <Tag>Default</Tag>
                      <Tag variant="primary">Primary</Tag>
                      <Tag variant="secondary">Secondary</Tag>
                      <Tag variant="success">Success</Tag>
                      <Tag variant="warning">Warning</Tag>
                      <Tag variant="error">Error</Tag>
                      <Tag variant="info">Info</Tag>
                      <Tag size="sm">Small</Tag>
                      <Tag size="md">Medium</Tag>
                      <Tag size="lg">Large</Tag>
                      <Tag variant="primary" withDot>With Dot</Tag>
                      <Tag variant="success" removable onRemove={() => console.log('Remove clicked')}>Removable</Tag>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Data Table</h3>
                    <Table
                      columns={[
                        { id: 'name', header: 'Name', accessorKey: 'name', isSortable: true },
                        { id: 'role', header: 'Role', accessorKey: 'role', isSortable: true },
                        { id: 'status', header: 'Status', accessorKey: 'status', 
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
                      ]}
                      data={tableData}
                    />
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
          
          <TabsContent value="colors" className="mt-6">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Color System</h2>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <button
                    onClick={() => changeColorScheme('default')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeColorScheme === 'default' 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-surface-muted hover:bg-surface-muted/80'
                    }`}
                  >
                    Default Colors
                  </button>
                  <button
                    onClick={() => changeColorScheme('blue')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeColorScheme === 'blue' 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-surface-muted hover:bg-surface-muted/80'
                    }`}
                  >
                    Blue Theme
                  </button>
                  <button
                    onClick={() => changeColorScheme('green')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeColorScheme === 'green' 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-surface-muted hover:bg-surface-muted/80'
                    }`}
                  >
                    Green Theme
                  </button>
                  <button
                    onClick={() => changeColorScheme('purple')}
                    className={`px-4 py-2 rounded-md transition-colors ${
                      activeColorScheme === 'purple' 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-surface-muted hover:bg-surface-muted/80'
                    }`}
                  >
                    Purple Theme
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Primary Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                        <div key={`primary-${shade}`} className="space-y-2">
                          <div className={`h-16 rounded-md bg-primary-${shade}`}></div>
                          <p className="text-sm font-medium">Primary {shade}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Secondary Colors</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                        <div key={`secondary-${shade}`} className="space-y-2">
                          <div className={`h-16 rounded-md bg-secondary-${shade}`}></div>
                          <p className="text-sm font-medium">Secondary {shade}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Semantic Colors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium">Success</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {[50, 100, 300, 500, 700, 900].map((shade) => (
                            <div key={`success-${shade}`} className="space-y-1">
                              <div className={`h-8 rounded-md bg-success-${shade}`}></div>
                              <p className="text-xs">{shade}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Warning</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {[50, 100, 300, 500, 700, 900].map((shade) => (
                            <div key={`warning-${shade}`} className="space-y-1">
                              <div className={`h-8 rounded-md bg-warning-${shade}`}></div>
                              <p className="text-xs">{shade}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Error</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {[50, 100, 300, 500, 700, 900].map((shade) => (
                            <div key={`error-${shade}`} className="space-y-1">
                              <div className={`h-8 rounded-md bg-error-${shade}`}></div>
                              <p className="text-xs">{shade}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-medium">Info</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {[50, 100, 300, 500, 700, 900].map((shade) => (
                            <div key={`info-${shade}`} className="space-y-1">
                              <div className={`h-8 rounded-md bg-info-${shade}`}></div>
                              <p className="text-xs">{shade}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;