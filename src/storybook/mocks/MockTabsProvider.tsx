import { TabsContext } from '../../TabsContext';
import { TabVariant } from '../../types';

export const MockTabsProvider = ({
  children,
  activeTab = 0,
  variant,
}: {
  children: React.ReactNode;
  activeTab?: number;
  variant: TabVariant;
}) => {
  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab: () => {},
        variant,
        totalTabs: 3,
        setTotalTabs: () => {},
        orientation: 'horizontal',
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};
