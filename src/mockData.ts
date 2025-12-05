import { tabsData } from './types';

export const tabsMockData: tabsData = {
  tabsVariant: 'pill',
  tabsOrientation: 'horizontal',
  tabData: [
    {
      label: 'label 1',
      badge: {
        badgeLabel: 'Info',
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
      content: 'content for fourth panel',
    },
  ],
};

export const optionACode = `
<Tabs variant="underline" orientation="horizontal">
  <TabList>
    <Tab index={0} label="Label 1" badgeLabel="New" badgeVariant="positive" />
    <Tab index={1} label="Label 2" />
    <Tab index={2} label="Label 3" badgeLabel="!" badgeVariant="negative" />
  </TabList>
  <TabPanel index={0}>Content 1</TabPanel>
  <TabPanel index={1}>Content 2</TabPanel>
  <TabPanel index={2}>Content 3</TabPanel>
</Tabs>
`;

export const optionBCodeB = `
        <Tabs variant={tabsVariant} orientation={orientation}>
          <TabList>
            {tabsData.map((tab, index) => (
              <Tab
                key={index}
                index={index}
                label={tab.label}
                {...(tab.badgeLabel ? { badgeLabel: tab.badgeLabel } : {})}
                {...(tab.badgeVariant
                  ? { badgeVariant: tab.badgeVariant }
                  : {})}
              />
            ))}
          </TabList>
          {tabsData.map((tab, index) => (
            <TabPanel key={index} index={index}>
              {tab.content}
            </TabPanel>
          ))}
        </Tabs>`;

export const optionBCode = `
<Tabs variant={tabsGeneratedData.tabsVariant} orientation={tabsGeneratedData.orientation}>
  <TabList>
    {tabsGeneratedData.tabData.map((tab, index) => (
      <Tab
        key={index}
        index={index}
        label={tab.label}
        {...(tab.badge && { badgeLabel: tab.badge.badgeLabel, badgeVariant: tab.badge.badgeVariant })}
      />
    ))}
  </TabList>
  {tabsGeneratedData.tabData.map((tab, index) => (
    <TabPanel key={index} index={index}>
      {tab.content}
    </TabPanel>
  ))}
</Tabs>`;
