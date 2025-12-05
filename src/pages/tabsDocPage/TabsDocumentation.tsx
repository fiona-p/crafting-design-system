import Tabs from '../../components/Tabs/Tabs';
import TabList from '../../components/TabList/TabList';
import Tab from '../../components/Tab/Tab';
import TabPanel from '../../components/TabPanel/TabPanel';
import TabsOptionA from './TabsOptionA';
import TabsOptionB from './TabsOptionB';

const TabsDocumentation = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Tabs Documentation & Playground</h1>

      <Tabs variant='pill' orientation='horizontal'>
        <TabList>
          <Tab index={0} label='Option A: Static Tabs' />
          <Tab index={1} label='Option B: Data-driven Tabs' />
        </TabList>
        <hr style={{ margin: '2rem 0 0' }} />
        <TabPanel index={0}>
          <TabsOptionA />
        </TabPanel>
        <TabPanel index={1}>
          <TabsOptionB />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsDocumentation;
