import { ReactNode } from 'react';
import { TabsProvider } from '../../TabsContext';
import { Orientation, TabVariant } from '../../types';

// Instead of children: ReactNode, we can define a generic type T for the content.
// We also add a renderContent callback that turns T into something renderable (ReactNode).

//Plan
// Make Tabs generic: accept items: TabItem<T>[] instead of children.
// Let renderContent turn each T into JSX.
// ** Keep TabList, TabPaneland Tab  consuming context — they don’t need generics themselves.
// Tab doesn’t need generics; it just uses label and index from TabItem<T>.
// Tabs almost always nees multiple items, so an array is notmal structure.

// 1: TO make tabs generic we need to use GENERIC items instead of children.
// 2: Then we pass a render method
// export interface TabsProps {
//   children: ReactNode; // remove this
//   defaultIndex?: number;
//   variant: TabVariant;
//   // add a render prop
// }

export interface TabItem<T> {
  label: string;
  badge?: {
    badgeLabel: string;
    badgeVariant: string; // or BadgeVariant
  };
  content: T; // content can be anytype!!!!
}

export interface TabsProps<T> {
  defaultIndex?: number;
  variant: TabVariant;
  orientation: Orientation;
  items: TabItem<T>[]; // ----- CHANGED: use generic items instead of children -----
  renderContent: (item: TabItem<T>, index: number) => ReactNode; // ----- CHANGED: renderContent to transform generic T to ReactNode -----
}

const Tabs = <T,>({
  items,
  defaultIndex = 0,
  variant = 'pill',
  orientation = 'horizontal',
  renderContent,
}: TabsProps<T>) => {
  return (
    <TabsProvider
      defaultIndex={defaultIndex}
      variant={variant}
      orientation={orientation}
    >
      {items.map((item, index) => (
        // ----- CHANGED: use renderContent callback for each generic item -----
        <div key={index}>{renderContent(item, index)}</div>
      ))}
    </TabsProvider>
  );
};

export default Tabs;

// In app we would do somethign like:
// 2️⃣ Generic data mode
{
  /* <Tabs
  items={tabsMockData.tabData}
  variant='pill'
  renderContent={(item, i) => (
    <>
      <Tab
        index={i}
        label={item.label}
        badgeLabel={item.badge?.badgeLabel}
        badgeVariant={item.badge?.badgeVariant}
      />
      <TabPanel index={i}>{item.content}</TabPanel>
    </>
  )}
/>; */
}
