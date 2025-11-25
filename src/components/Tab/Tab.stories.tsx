import { Meta, StoryFn } from '@storybook/react';
import Tab, { TabProps } from './Tab';
import { TabsProvider } from '../../TabsContext';
import { useTabs } from '../../TabsContext';
import { TabVariant } from '../../types';
import '../../index.css';
import './Tab.module.css';

export default {
  title: 'Components/Tab',
  component: Tab,
  argTypes: {
    // Props to hide from the controls panel
    isActive: { table: { disable: true } },
    onKeyDown: { table: { disable: true } },
    index: { table: { disable: true } },
    // Props we want to allow users to edit in Controls
    variant: {
      control: { type: 'radio' },
      options: ['pill', 'underline'],
      description: 'Tab variant style',
      defaultValue: 'pill',
    },
    label: { control: 'text', defaultValue: 'Tab Label' },
    badgeLabel: { control: 'text', description: 'Optional badge label text' },
    badgeVariant: {
      control: { type: 'radio' },
      options: ['neutral', 'positive', 'negative'],
      description: 'Badge variant style',
    },
  },
} as Meta<TabProps & { variant: TabVariant }>;

// Template defines how the component is rendered in the Storybook Canvas
const Template: StoryFn<
  TabProps & {
    variant: TabVariant;
  }
> = ({
  variant,
  label,
  badgeLabel,
  badgeVariant,
}: TabProps & { variant: TabVariant }) => {
  return (
    // TabsProvider wraps all tab components and provides context
    <TabsProvider
      defaultIndex={-1} // The tab that starts as inactive (0 = first tab)
      variant={variant} // Passes variant styling into context
    >
      <Tab
        index={0} // Tab index in the list
        label={label}
        badgeLabel={badgeLabel} // Optional badge label
        badgeVariant={badgeVariant} // Optional badge style
      />

      <ResetButton />
    </TabsProvider>
  );
};

// ResetButton is a child component that consumes the TabsContext
// and allows the user to reset the tab to inactive (after interactive)
const getResetButtonStyle = (isDisabled: boolean): React.CSSProperties => ({
  display: 'block',
  marginTop: '4rem',
  padding: '0.5rem',
  borderRadius: '0.375rem',
  backgroundColor: isDisabled ? '#ccc' : '#f1bc91ff',
  color: '#000000',
  border: 'none',
  cursor: isDisabled ? 'not-allowed' : 'pointer',
  fontWeight: 'bold',
  fontSize: '.8rem',
  transition: 'background-color 0.3s ease',
});

const ResetButton = () => {
  const { setActiveTab, activeTab } = useTabs(); // Access context setter
  const handleReset = () => setActiveTab(-1); // -1 = set tab to inactive

  return (
    <button
      onClick={handleReset}
      disabled={activeTab === -1} // Starts with no tab selected. -1 means "inactive"
      style={getResetButtonStyle(activeTab === -1)}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#d74d1bff')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor =
          activeTab === -1 ? '#ccc' : '#f1bc91ff')
      }
    >
      Reset to Inactive
    </button>
  );
};

export const InteractiveTabWithBadge: StoryFn<
  TabProps & { variant: TabVariant }
> = Template.bind({});
InteractiveTabWithBadge.args = {
  label: 'Tab 1',
  variant: 'pill',
};
InteractiveTabWithBadge.parameters = {
  docs: {
    description: {
      story:
        'An interactive tab that supports styles and optional badges. Use the reset button to deactivate it.',
    },
  },
};
