import { ReactElement, useEffect } from 'react';
import styles from './TabList.module.scss'; // using sass
import { useTabs } from '../../TabsContext';
import { TabProps } from '../Tab/Tab';

export type TabListProps = {
  children: ReactElement<TabProps> | ReactElement<TabProps>[];
};

const TabList = ({ children }: TabListProps) => {
  const { variant, setTotalTabs, orientation } = useTabs();
  // We want to know the number of tabs for a keyDown accessibility function in Tab
  const totalTabs = Array.isArray(children) ? children.length : 1;

  // Only update state after render - setTotalTabs(totalTabs) caused React errors
  useEffect(() => {
    setTotalTabs(totalTabs);
  }, [totalTabs, setTotalTabs]);

  return (
    <div className={`${styles.tabListWrapper}`}>
      <div
        role='tablist'
        // Tells assistive technologies (like screen readers) that the tabs are arranged horizontally, so arrow keys should move left/right.
        aria-orientation='horizontal'
        className={`${styles.tabList} ${styles[variant]} ${styles[orientation]}`}
      >
        {children}
      </div>
    </div>
  );
};

export default TabList;
