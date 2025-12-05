import { useState } from 'react';
import { BadgeVariant, Orientation, tabsData, TabVariant } from '../../types';
import Tabs from '../Tabs/Tabs';
import TabList from '../TabList/TabList';
import Tab from '../Tab/Tab';
import TabPanel from '../TabPanel/TabPanel';
import styles from './TabsPlayground.module.scss';

export interface TabsConfig {
  tabsVariant: TabVariant;
  tabsOrientation: Orientation;
  tabData: {
    label: string;
    content: string;
    badge?: {
      badgeLabel: string;
      badgeVariant: BadgeVariant;
    };
  }[];
}

interface Props {
  initialData: tabsData;
}

const TabsPlayground = ({ initialData }: Props) => {
  const [config, setConfig] = useState<tabsData>(initialData);

  const updateVariant = (variant: TabVariant) =>
    setConfig((prev) => ({ ...prev, tabsVariant: variant }));

  const updateOrientation = (orientation: Orientation) =>
    setConfig((prev) => ({ ...prev, tabsOrientation: orientation }));

  const updateTab = (
    index: number,
    key: 'label' | 'content' | 'badgeLabel' | 'badgeVariant',
    value: string
  ) => {
    setConfig((prev) => {
      const updatedTabs = [...prev.tabData];
      const current = updatedTabs[index];

      if (key === 'badgeVariant') {
        if (value === 'none') {
          updatedTabs[index] = {
            ...current,
            badge: undefined,
          };
        } else {
          updatedTabs[index] = {
            ...current,
            badge: {
              badgeLabel: current.badge?.badgeLabel || '',
              badgeVariant: (value as BadgeVariant) || 'neutral',
            },
          };
        }
      } else if (key === 'badgeLabel') {
        updatedTabs[index] = {
          ...current,
          badge: {
            badgeLabel: value || '',
            badgeVariant: current.badge?.badgeVariant || 'neutral',
          },
        };
      } else {
        updatedTabs[index] = { ...current, [key]: value };
      }

      return { ...prev, tabData: updatedTabs };
    });
  };

  const reset = () => setConfig(initialData);

  return (
    <div className={styles.tabsPlayground}>
      {/* Controls */}
      <div className={styles.playgroundCard}>
        <h3>Playground Controls</h3>

        <div className={styles.controlsGrid}>
          <label>
            Variant:
            <select
              value={config.tabsVariant}
              onChange={(e) => updateVariant(e.target.value as TabVariant)}
              className={styles.controlsGridSelect}
              aria-label='Change tabs variant'
            >
              <option value='underline'>Underline</option>
              <option value='pill'>Pill</option>
            </select>
          </label>

          <label>
            Orientation:
            <select
              value={config.tabsOrientation}
              onChange={(e) => updateOrientation(e.target.value as Orientation)}
              className={styles.controlsGridSelect}
              aria-label='Change tabs orientation'
            >
              <option value='horizontal'>Horizontal</option>
              <option value='vertical'>Vertical</option>
            </select>
          </label>
          <button className={styles.resetBtn} onClick={reset}>
            Reset to defaults
          </button>
        </div>
      </div>

      {/* Editable Tab Data */}
      <div className={styles.playgroundCard}>
        <h3>Edit Tabs</h3>

        {config.tabData.map((tab, index) => (
          <div key={index} className={styles.tabRow}>
            <label htmlFor='updateLabel' className='sr-only'>
              Update tab label
            </label>
            <input
              type='text'
              placeholder='Label'
              value={tab.label}
              onChange={(e) => updateTab(index, 'label', e.target.value)}
              id='updateLabel'
            />
            <label htmlFor='updatePanel' className='sr-only'>
              Update Panel content
            </label>
            <input
              type='text'
              placeholder='Content'
              value={tab.content}
              id='updatePanel'
              onChange={(e) => updateTab(index, 'content', e.target.value)}
            />
            <label htmlFor='updateBadgeLabel' className='sr-only'>
              Update Badge content
            </label>
            <input
              type='text'
              placeholder='Badge label'
              id='updateBadgeLabel'
              value={tab.badge?.badgeLabel || ''}
              onChange={(e) => updateTab(index, 'badgeLabel', e.target.value)}
            />
            <label htmlFor='updateBadgeVariant' className='sr-only'>
              Update Badge variant
            </label>
            <select
              value={tab.badge?.badgeVariant || 'none'}
              onChange={(e) => updateTab(index, 'badgeVariant', e.target.value)}
              id='updateBadgeVariant'
            >
              <option value='none'>None</option>
              <option value='neutral'>Neutral</option>
              <option value='positive'>Positive</option>
              <option value='negative'>Negative</option>
            </select>
          </div>
        ))}
      </div>

      {/* Live Preview */}
      <div className='preview-card'>
        <h3>Live Preview</h3>

        <Tabs
          variant={config.tabsVariant}
          orientation={config?.tabsOrientation ?? 'horizontal'}
        >
          <TabList>
            {config.tabData.map((tab, i) => (
              <Tab
                key={i}
                index={i}
                label={tab.label}
                {...(tab.badge
                  ? {
                      badgeLabel: tab.badge.badgeLabel,
                      badgeVariant: tab.badge.badgeVariant,
                    }
                  : {})}
              />
            ))}
          </TabList>

          {config.tabData.map((tab, i) => (
            <TabPanel key={i} index={i}>
              {tab.content}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabsPlayground;
