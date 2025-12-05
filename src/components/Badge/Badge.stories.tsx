import { Meta, StoryObj } from '@storybook/react';
import Badge, { BadgeProps } from './Badge';
// import { ThemesProvider } from '../../ThemesContext'; // import your theme provider
import { MockThemesProvider } from '../../storybook/mocks/MockThemesProvider';

const meta: Meta<BadgeProps & { theme?: 'default' | 'autumn' }> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    (Story, context) => (
      <MockThemesProvider theme={context.args.theme}>
        <Story />
      </MockThemesProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['neutral', 'positive', 'negative'],
    },
    label: { control: 'text' },
    theme: {
      control: { type: 'radio' },
      options: ['default', 'autumn'],
      description: 'Theme for the badge (applied via ThemesProvider)',
    },
  },
};

export default meta;

export const Default: StoryObj<BadgeProps & { theme?: 'default' | 'autumn' }> =
  {
    args: {
      variant: 'neutral',
      label: 'Badge',
      theme: 'default',
    },
  };
