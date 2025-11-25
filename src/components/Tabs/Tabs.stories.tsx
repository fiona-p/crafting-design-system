import { Meta, StoryFn } from '@storybook/react';
import Tabs, { TabsProps } from './Tabs';
import TabList from '../TabList/TabList';
import Tab from '../Tab/Tab';
import TabPanel from '../TabPanel/TabPanel';
import { BadgeVariant } from '../../types';
import '../../index.css';

type StoryProps = TabsProps & {
  labels: string;
  badgeLabels?: string;
  badgeVariants?: string;
};

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    children: { table: { disable: true } }, // Hide children
    defaultIndex: { table: { disable: true } }, // Hide defaultIndex
    variant: {
      control: { type: 'radio' },
      options: ['pill', 'underline'],
      defaultValue: 'pill',
      description: 'Tabs variant style',
    },
    labels: {
      control: 'text',
      description: 'Comma separated tab labels',
      defaultValue: 'Tab 1,Tab 2,Tab 3',
    },
    badgeLabels: {
      control: 'text',
      description: 'Comma separated badge labels (optional)',
      defaultValue: ',badge,',
    },
    badgeVariants: {
      control: 'text',
      description:
        'Comma-separated badge variants for each tab. Valid values: "neutral", "positive", or "negative". Leave empty if no badge. Must match exact strings.',
      defaultValue: ',positive,',
    },
  },
} as Meta<StoryProps>;

const Template: StoryFn<StoryProps> = ({
  variant,
  labels,
  badgeLabels = '',
  badgeVariants = '',
}) => {
  const labelArray = (labels || '')
    .split(',')
    .map((label) => label.trim())
    .filter(Boolean);

  const badgeLabelArray = badgeLabels.split(',').map((b) => b.trim());
  const badgeVariantArray = badgeVariants.split(',').map((v) => v.trim());

  return (
    // Shrinks the container to fit its content for display
    <div style={{ display: 'inline-block', padding: '16px' }}>
      <Tabs variant={variant} defaultIndex={0} orientation='horizontal'>
        <TabList>
          {labelArray.map((label, index) => {
            const badgeLabel = badgeLabelArray[index] || undefined;
            const badgeVariant = badgeVariantArray[index] as BadgeVariant;
            return (
              <Tab
                key={`${index}-${label}`}
                index={index}
                label={label}
                badgeLabel={badgeLabel}
                badgeVariant={badgeLabel ? badgeVariant : undefined}
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
  );
};

export const Default: StoryFn<StoryProps> = Template.bind({});

Default.args = {
  variant: 'pill',
  labels: 'Emails,Files,Edits',
  badgeLabels: ',warning,',
  badgeVariants: ',negative,',
};
