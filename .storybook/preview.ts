import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    parameters: {
      pseudo: {
        // Optional: enable pseudo-states globally
        hover: true,
        focus: true,
        active: true,
      },
    },
    viewport: {
      viewports: {
        // You can add or override built-in viewports here:
        myMobile: {
          name: 'My Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
          type: 'mobile',
        },
      },
      defaultViewport: 'myMobile', // optional default
    },
  },
};

export default preview;
