// pages/tabs.tsx
import { useState } from 'react';
import Tabs from '../components/Tabs/Tabs';
import TabList from '../components/TabList/TabList';
import Tab from '../components/Tab/Tab';
import TabPanel from '../components/TabPanel/TabPanel';
import { BadgeVariant, Orientation, TabVariant } from '../types';
import { optionACode, optionBCode, tabsMockData } from '../mockData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import TabsStaticExample from '../components/TabsStaticExample';

interface EditableTabData {
  label: string;
  content: string;
  badgeLabel?: string;
  badgeVariant?: BadgeVariant;
}

const TabsDocPage = () => {
  const [tabsVariant, setTabsVariant] = useState<TabVariant>(
    tabsMockData.tabsVariant || 'underline'
  );
  const [orientation, setOrientation] = useState<Orientation>('horizontal');
  const [tabsData, setTabsData] = useState<EditableTabData[]>(
    tabsMockData.tabData.map((t) => ({
      label: t.label || '',
      content: t.content || '',
      badgeLabel: t.badge?.badgeLabel,
      badgeVariant: t.badge?.badgeVariant,
    }))
  );

  const updateTab = (
    index: number,
    key: keyof EditableTabData,
    value: string
  ) => {
    const newData = [...tabsData];
    if (key === 'badgeVariant') {
      newData[index][key] = value as BadgeVariant;
    } else {
      newData[index][key] = value;
    }
    setTabsData(newData);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Tabs Documentation & Playground</h1>

      {/* Option A: Static Tabs */}
      <section className='spacingMarginBottom'>
        <h2>Option A: Static Tabs</h2>
        <TabsStaticExample />
        <div style={{ marginTop: '1rem' }}>
          <h3>Example of use</h3>
          <SyntaxHighlighter language='tsx' style={oneDark}>
            {optionACode}
          </SyntaxHighlighter>
          <p>More description on this method to come....</p>
        </div>
      </section>

      <hr style={{ margin: '2rem 0' }} />

      {/* Option B: Data-driven Tabs */}
      {/* TODO : add styling to this - temp inline styling for now */}
      <section>
        <h2>Option B: Data-driven Tabs (Editable)</h2>

        {/* Controls for Variant & Orientation */}
        <div
          style={{
            marginBottom: '1rem',
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            padding: '1rem', // add some inner spacing
            border: '1px solid #ccc', // soft gray border
            borderRadius: '8px', // rounded corners
            backgroundColor: '#f9f9f9', // optional light background
          }}
        >
          <label>
            Tabs Variant:{' '}
            <select
              value={tabsVariant}
              onChange={(e) => setTabsVariant(e.target.value as TabVariant)}
            >
              <option value='underline'>Underline</option>
              <option value='pill'>Pill</option>
            </select>
          </label>
          <label>
            Orientation:{' '}
            <select
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as Orientation)}
            >
              <option value='horizontal'>Horizontal</option>
              <option value='vertical'>Vertical</option>
            </select>
          </label>
        </div>

        {/* Editable tab data */}
        <div style={{ marginBottom: '1rem' }}>
          {tabsData.map((tab, index) => (
            <div
              key={index}
              style={{
                marginBottom: '0.5rem',
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              <input
                type='text'
                value={tab.label}
                placeholder='Tab label'
                onChange={(e) => updateTab(index, 'label', e.target.value)}
              />
              <input
                type='text'
                value={tab.content}
                placeholder='Tab content'
                onChange={(e) => updateTab(index, 'content', e.target.value)}
              />
              <input
                type='text'
                value={tab.badgeLabel || ''}
                placeholder='Badge label'
                onChange={(e) => updateTab(index, 'badgeLabel', e.target.value)}
              />
              <select
                value={tab.badgeVariant || ''}
                onChange={(e) =>
                  updateTab(
                    index,
                    'badgeVariant',
                    (e.target.value as BadgeVariant) || 'none'
                  )
                }
              >
                <option value='none'>None</option>
                <option value='positive'>Positive</option>
                <option value='negative'>Negative</option>
                <option value='neutral'>Neutral</option>
              </select>
            </div>
          ))}
        </div>

        {/* Render tabs live */}
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
        </Tabs>
        <div style={{ marginTop: '1rem' }}>
          <h3>Example of use</h3>
          <SyntaxHighlighter language='tsx' style={oneDark}>
            {optionBCode}
          </SyntaxHighlighter>
          <p>More description on this method to come....</p>
        </div>
      </section>
    </div>
  );
};

export default TabsDocPage;
