import { Meta, StoryFn } from '@storybook/react';
import TabList, { TabListProps } from './TabList';
import Tab from '../Tab/Tab';
import { TabsProvider } from '../../TabsContext';
import { TabVariant, Orientation } from '../../types';
import '../../index.css';
import './TabList.module.css';

export default {
  title: 'Components/TabList',
  component: TabList,
  argTypes: {
    children: { table: { disable: true } },
    variant: {
      control: { type: 'radio' },
      options: ['pill', 'underline'],
      description: 'TabList variant style',
      defaultValue: 'pill',
    },
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'TabList orientation style',
      defaultValue: 'horizontal',
    },
    labels: {
      control: 'text',
      description: 'Comma-separated list of tab labels',
      defaultValue: 'Tab 1,Tab 2,Tab 3',
    },
  },
} as Meta<
  TabListProps & {
    variant: TabVariant;
    orientation: Orientation;
    labels: string;
  }
>;

const Template: StoryFn<
  TabListProps & {
    variant: TabVariant;
    orientation: Orientation;
    labels: string;
  }
> = ({
  variant,
  labels,
  orientation,
}: TabListProps & {
  variant: TabVariant;
  labels: string;
  orientation: Orientation;
}) => {
  // Split labels by comma, trim whitespace
  const labelList = (labels || '').split(',').map((label) => label.trim());

  return (
    <TabsProvider defaultIndex={0} variant={variant} orientation={orientation}>
      <TabList>
        {labelList.map((label, index) => (
          <Tab key={`${index}-${label}`} index={index} label={label} />
        ))}
      </TabList>
    </TabsProvider>
  );
};

export const Default: StoryFn<
  TabListProps & {
    variant: TabVariant;
    orientation: Orientation;
    labels: string;
  }
> = Template.bind({});
Default.args = {
  variant: 'pill',
  orientation: 'horizontal',
  labels: 'Tab 1,Tab 2,Tab 3',
};
