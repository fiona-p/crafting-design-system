import Tab from './Tab/Tab';
import TabList from './TabList/TabList';
import TabPanel from './TabPanel/TabPanel';
import Tabs from './Tabs/Tabs';

const TabsStaticExample = () => (
  <Tabs variant='underline' orientation='horizontal' theme='default'>
    <TabList>
      <Tab index={0} label='Label 1' badgeLabel='New' badgeVariant='positive' />
      <Tab index={1} label='Label 2' />
      <Tab
        index={2}
        label='Label 3'
        badgeLabel='danger'
        badgeVariant='negative'
      />
    </TabList>
    <TabPanel index={0}>Content area 1</TabPanel>
    <TabPanel index={1}>Content 2</TabPanel>
    <TabPanel index={2}>Content 3</TabPanel>
  </Tabs>
);

export default TabsStaticExample;
