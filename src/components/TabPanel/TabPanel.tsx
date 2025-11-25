import { ReactNode } from 'react';
import styles from './TabPanel.module.css';
import { useTabs } from '../../TabsContext';

interface TabPanelProps {
  index: number;
  children: ReactNode;
}

const TabPanel = ({ index, children }: TabPanelProps) => {
  const { activeTab } = useTabs();

  return activeTab === index ? (
    <div
      className={styles.tabPanel}
      id={`tabpanel-${index}`} // Links to aria-controls of associated TAB
      aria-labelledby={`tab-${index}`} // Link to ID of associated tab
      tabIndex={0} // Make focusable via the keyboard
    >
      {children}
    </div>
  ) : null;
};

export default TabPanel;
