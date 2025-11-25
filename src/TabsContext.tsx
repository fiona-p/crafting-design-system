import { createContext, useContext, useState } from 'react';
import { ReactNode } from 'react';
import { Orientation, TabVariant } from './types';

interface TabsContextType {
  activeTab: number; // currently selected tab index
  setActiveTab: React.Dispatch<React.SetStateAction<number>>; // update activeTab
  variant: TabVariant;
  totalTabs: number;
  setTotalTabs: React.Dispatch<React.SetStateAction<number>>;
  orientation: Orientation;
}

export const TabsContext = createContext<TabsContextType | undefined>(
  undefined
);

type TabsProviderProps = {
  children: ReactNode;
  defaultIndex?: number;
  variant: TabVariant;
  orientation: Orientation;
};

// This component will wrap parts of the app that need access to tabs state
export const TabsProvider = ({
  children,
  defaultIndex = 0,
  variant = 'pill',
  orientation = 'horizontal',
}: TabsProviderProps) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);
  const [totalTabs, setTotalTabs] = useState(0);
  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
        variant,
        totalTabs,
        setTotalTabs,
        orientation,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};
