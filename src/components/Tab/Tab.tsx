import styles from './Tab.module.scss';
import { useTabs } from '../../TabsContext';
import Badge from '../Badge/Badge';
import { BadgeVariant } from '../../types';
import { moveFocus } from './helpers';

export interface TabProps {
  index: number;
  label: string;
  badgeLabel?: string;
  badgeVariant?: BadgeVariant;
}

const Tab = ({ index, label, badgeLabel, badgeVariant }: TabProps) => {
  const { activeTab, setActiveTab, variant, totalTabs } = useTabs();
  const isActive = index === activeTab;
  const tabStyle = `${styles.tab} ${styles[variant]} ${
    isActive ? `${styles.active}` : `${styles.inactive}`
  }`;

  const showBadge = badgeLabel && badgeVariant;

  // Handle keyboard navigation with arrows, home, and end keys and update focus accordingly
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (totalTabs < 1) return;

    // Handle keyboard navigation with arrows, home, and end keys
    switch (event.key) {
      case 'ArrowRight':
        // Move to the next tab - eg; 5 / 5 remainder = 0
        console.log('activeTab ', activeTab);
        moveFocus((activeTab + 1) % totalTabs, setActiveTab);
        event.preventDefault(); // prevent the browser from scrolling horizontally
        break;

      case 'ArrowLeft':
        // Move to the previous tab
        moveFocus((activeTab - 1 + totalTabs) % totalTabs, setActiveTab);
        event.preventDefault();
        break;

      case 'Home':
        // Move focus to the first tab
        moveFocus(0, setActiveTab);
        event.preventDefault();
        break;

      case 'End':
        // Move focus to the last tab
        moveFocus(totalTabs - 1, setActiveTab);
        event.preventDefault();
        break;

      default:
        // For other keys, do nothing
        break;
    }
  };

  // aria-selected shows the active tab for screen readers
  // aria-controls links controls to their controlled elements tab -> tab panel
  // aria-labelledby points controlled element to its control
  return (
    <button
      id={`tab-${index}`} // Link to TabPanel aria-labelledBy
      aria-controls={`tabpanel-${index}`} // Match this ID on <TabPanel />
      className={tabStyle}
      role='tab'
      aria-selected={isActive}
      onClick={() => setActiveTab(index)}
      onFocus={() => {
        if (index !== activeTab) setActiveTab(index);
      }} // For keyboard accessibility
      onKeyDown={handleKeyDown} // Keyboard event support
    >
      {label}
      {showBadge && (
        <span className={`${styles.badgeSpacing}`}>
          <Badge variant={badgeVariant} label={badgeLabel} />
        </span>
      )}
    </button>
  );
};

export default Tab;
