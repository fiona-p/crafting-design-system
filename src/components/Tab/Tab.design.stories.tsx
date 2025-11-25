import React from 'react';
import Tab from './Tab';
import { TabsContext } from '../../TabsContext';
import { TabVariant } from '../../types';

export default {
  title: 'Components/Tab/Design Variants',
  component: Tab,
  parameters: {
    controls: { disable: true }, // Hide controls panel for visual snapshots
  },
};

// Shared Mock Provider
const MockTabsProvider = ({
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

// Pseudo state mappings
const pseudo = {
  Default: { hover: false, focus: false, active: false },
  Hover: { hover: true, focus: false, active: false },
  Focus: { hover: false, focus: true, active: false },
  Active: { hover: false, focus: false, active: true },
};

// Pill Variant – Inactive

export const PillInactiveDefault = () => (
  <MockTabsProvider activeTab={1} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillInactiveDefault.parameters = { pseudo: pseudo.Default };

export const PillInactiveHover = () => (
  <MockTabsProvider activeTab={1} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillInactiveHover.parameters = { pseudo: pseudo.Hover };

export const PillInactiveActive = () => (
  <MockTabsProvider activeTab={1} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillInactiveActive.parameters = { pseudo: pseudo.Active };

export const PillInactiveFocus = () => (
  <MockTabsProvider activeTab={1} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillInactiveFocus.parameters = { pseudo: pseudo.Focus };

// Pill Variant – Active

export const PillSelectedDefault = () => (
  <MockTabsProvider activeTab={0} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillSelectedDefault.parameters = { pseudo: pseudo.Default };

export const PillSelectedHover = () => (
  <MockTabsProvider activeTab={0} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillSelectedHover.parameters = { pseudo: pseudo.Hover };

export const PillSelectedActive = () => (
  <MockTabsProvider activeTab={0} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillSelectedActive.parameters = { pseudo: pseudo.Active };

export const PillSelectedFocus = () => (
  <MockTabsProvider activeTab={0} variant='pill'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
PillSelectedFocus.parameters = { pseudo: pseudo.Focus };

// Underline Variant – Inactive

export const UnderlineInactiveDefault = () => (
  <MockTabsProvider activeTab={1} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineInactiveDefault.parameters = { pseudo: pseudo.Default };

export const UnderlineInactiveHover = () => (
  <MockTabsProvider activeTab={1} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineInactiveHover.parameters = { pseudo: pseudo.Hover };

export const UnderlineInactiveActive = () => (
  <MockTabsProvider activeTab={1} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineInactiveActive.parameters = { pseudo: pseudo.Active };

export const UnderlineInactiveFocus = () => (
  <MockTabsProvider activeTab={1} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineInactiveFocus.parameters = { pseudo: pseudo.Focus };

// Underline Variant – Active

export const UnderlineSelectedDefault = () => (
  <MockTabsProvider activeTab={0} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineSelectedDefault.parameters = { pseudo: pseudo.Default };

export const UnderlineSelectedHover = () => (
  <MockTabsProvider activeTab={0} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineSelectedHover.parameters = { pseudo: pseudo.Hover };

export const UnderlineSelectedActive = () => (
  <MockTabsProvider activeTab={0} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineSelectedActive.parameters = { pseudo: pseudo.Active };

export const UnderlineSelectedFocus = () => (
  <MockTabsProvider activeTab={0} variant='underline'>
    <Tab index={0} label='Label' />
  </MockTabsProvider>
);
UnderlineSelectedFocus.parameters = { pseudo: pseudo.Focus };
