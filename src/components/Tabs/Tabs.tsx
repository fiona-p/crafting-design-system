import { ReactNode } from 'react';
import { TabsProvider } from '../../TabsContext';
import { ThemesProvider } from '../../ThemesContext';
import { Orientation, TabVariant } from '../../types';

export interface TabsProps {
  children: ReactNode;
  defaultIndex?: number;
  variant: TabVariant;
  orientation: Orientation;
  theme?: 'default' | 'autumn'; // add more themes later
}

const Tabs = ({
  children,
  defaultIndex = 0,
  variant,
  orientation,
  theme = 'default',
}: TabsProps) => {
  return (
    <ThemesProvider theme={theme}>
      <TabsProvider
        defaultIndex={defaultIndex}
        variant={variant}
        orientation={orientation}
      >
        {children}
      </TabsProvider>
    </ThemesProvider>
  );
};

export default Tabs;
