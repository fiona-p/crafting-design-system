import { Meta, StoryFn } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';
import TabList from '../TabList/TabList';
import Tab from '../Tab/Tab';
import TabPanel from '../TabPanel/TabPanel';
import { BadgeVariant, Theme } from '../../types';
import { MockThemesProvider } from '../../storybook/mocks/MockThemesProvider';
import '../../index.css';

type StoryProps = TabsProps & {
  labels: string;
  badgeLabels?: string;
  badgeVariants?: string;
  theme?: Theme;
};

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    children: { table: { disable: true } },
    defaultIndex: { table: { disable: true } },
    variant: {
      control: { type: 'radio' },
      options: ['pill', 'underline'],
      defaultValue: 'pill',
    },
    labels: {
      control: 'text',
      defaultValue: 'Tab 1,Tab 2,Tab 3',
    },
    badgeLabels: {
      control: 'text',
      defaultValue: ',badge,',
    },
    badgeVariants: {
      control: 'text',
      defaultValue: ',positive,',
    },
    theme: {
      control: { type: 'radio' },
      options: ['default', 'autumn'],
      defaultValue: 'default',
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
  },
} as Meta<StoryProps>;

const Template: StoryFn<StoryProps> = ({
  variant,
  labels,
  badgeLabels = '',
  badgeVariants = '',
  theme = 'default',
  orientation = 'horizontal',
}) => {
  const labelArray = (labels || '')
    .split(',')
    .map((label) => label.trim())
    .filter(Boolean);

  const badgeLabelArray = badgeLabels.split(',').map((b) => b.trim());
  const badgeVariantArray = badgeVariants.split(',').map((v) => v.trim());

  return (
    <MockThemesProvider theme={theme}>
      <div style={{ display: 'inline-block', padding: '16px' }}>
        <Tabs
          variant={variant}
          defaultIndex={0}
          orientation={orientation}
          theme={theme}
        >
          <TabList>
            {labelArray.map((label, index) => {
              const badgeLabel = badgeLabelArray[index] || undefined;
              const badgeVariant = badgeLabel
                ? (badgeVariantArray[index] as BadgeVariant)
                : undefined;
              return (
                <Tab
                  key={`${index}-${label}`}
                  index={index}
                  label={label}
                  badgeLabel={badgeLabel}
                  badgeVariant={badgeVariant}
                />
              );
            })}
          </TabList>

          {labelArray.map((label, index) => (
            <TabPanel key={`${index}-${label}`} index={index}>
              Content for {label}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </MockThemesProvider>
  );
};

export const Default: StoryFn<StoryProps> = Template.bind({});

Default.args = {
  variant: 'pill',
  labels: 'Emails,Files,Edits',
  badgeLabels: ',warning,',
  badgeVariants: ',negative,',
  theme: 'default',
  orientation: 'horizontal',
};
