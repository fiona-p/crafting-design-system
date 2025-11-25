import { tabsData } from './types';

export const tabsMockData: tabsData = {
  tabsVariant: 'pill',
  tabData: [
    {
      label: 'label 1',
      badge: {
        badgeLabel: 'badge',
        badgeVariant: 'neutral',
      },
      content: 'content for first panel',
    },
    {
      label: 'label 2',
      badge: {
        badgeLabel: 'warning',
        badgeVariant: 'negative',
      },
      content: 'content for second panel',
    },
    {
      label: 'label 3',
      content: 'content for third panel',
    },
    {
      label: 'label 4',
      badge: {
        badgeLabel: 'finished',
        badgeVariant: 'positive',
      },
      content: 'content for fourch panel',
    },
  ],
};
