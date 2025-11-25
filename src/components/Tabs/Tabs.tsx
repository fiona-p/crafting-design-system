import { ReactNode } from 'react';
import { TabsProvider } from '../../TabsContext';
import { Orientation, TabVariant } from '../../types';

export interface TabsProps {
  children: ReactNode;
  defaultIndex?: number;
  variant: TabVariant;
  orientation: Orientation;
}

const Tabs = ({
  children,
  defaultIndex = 0,
  variant,
  orientation,
}: TabsProps) => {
  return (
    <TabsProvider
      defaultIndex={defaultIndex}
      variant={variant}
      orientation={orientation}
    >
      {children}
    </TabsProvider>
  );
};

export default Tabs;
