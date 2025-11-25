import Tab from './components/Tab/Tab';
import TabList from './components/TabList/TabList';
import TabPanel from './components/TabPanel/TabPanel';
import Tabs from './components/Tabs/Tabs';
// import { tabsMockData } from './mockData';

/*  NOTE: FOR Demonstration purposes 
  A: Is the suggested way to display the Tabs
  If we wanted to validate that all  <Tab>s have unique index props then option B is considered*/

function App() {
  // OPTION A:
  return (
    <Tabs variant='underline' orientation='horizontal'>
      <TabList>
        <Tab
          index={0}
          label='Label'
          badgeLabel='finished'
          badgeVariant='positive'
        />
        <Tab index={1} label='Label' />
        <Tab index={2} label='Label' />
        <Tab
          index={3}
          label='Label'
          badgeLabel='warning'
          badgeVariant='negative'
        />
      </TabList>
      <TabPanel index={0}>Content 1</TabPanel>
      <TabPanel index={1}>Content 2</TabPanel>
      <TabPanel index={2}>Content 3</TabPanel>
      <TabPanel index={3}>Content 4</TabPanel>
    </Tabs>
  );
  // OPTION B: - Mapping for unique index
  // return (
  //   <Tabs variant={tabsMockData.tabsVariant}>
  //     <TabList>
  //       {tabsMockData.tabData.map((tab, index) => {
  //         return (
  //           <Tab
  //             key={tab.label || index}
  //             index={index}
  //             label={tab?.label}
  //             {...(tab?.badge?.badgeLabel && {
  //               badgeLabel: tab.badge.badgeLabel,
  //             })}
  //             {...(tab?.badge?.badgeVariant && {
  //               badgeVariant: tab.badge.badgeVariant,
  //             })}
  //           />
  //         );
  //       })}
  //     </TabList>
  //     {tabsMockData.tabData.map((tab, index) => {
  //       return <TabPanel index={index}>{tab.content}</TabPanel>;
  //     })}
  //   </Tabs>
  // );
  // OPTION C: - Mapping with generic TABS
  //   return (
  //     <Tabs variant={tabsMockData.tabsVariant}>
  //       <TabList>
  //         {tabsMockData.tabData.map((tab, index) => {
  //           return (
  //             <Tab
  //               key={tab.label || index}
  //               index={index}
  //               label={tab?.label}
  //               {...(tab?.badge?.badgeLabel && {
  //                 badgeLabel: tab.badge.badgeLabel,
  //               })}
  //               {...(tab?.badge?.badgeVariant && {
  //                 badgeVariant: tab.badge.badgeVariant,
  //               })}
  //             />
  //           );
  //         })}
  //       </TabList>
  //       {tabsMockData.tabData.map((tab, index) => {
  //         return <TabPanel index={index}>{tab.content}</TabPanel>;
  //       })}
  //     </Tabs>
  //   );
}

export default App;
