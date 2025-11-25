import { Meta, StoryObj } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['neutral', 'positive', 'negative'],
    },
    label: { control: 'text' },
  },
};

export default meta;

// Use StoryObj to tell TypeScript what type this is
export const Default: StoryObj<BadgeProps> = {
  args: {
    variant: 'neutral',
    label: 'Badge',
  },
};
