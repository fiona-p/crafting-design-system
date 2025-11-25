import { render, screen } from '@testing-library/react';
import TabList from './TabList';
import Tab from '../Tab/Tab';
import { TabsProvider } from '../../TabsContext';

describe('TabList Component', () => {
  it('renders children and applies variant styling', () => {
    render(
      <TabsProvider variant='underline'>
        <TabList>
          <Tab index={0} label='Tab 1' />
          <Tab index={1} label='Tab 2' />
        </TabList>
      </TabsProvider>
    );

    expect(screen.getByRole('tablist')).toBeInTheDocument();
    expect(screen.getAllByRole('tab')).toHaveLength(2);
    const tabButton = screen.getByRole('tab', { name: /tab 1/i });
    // Check the correct variant is being output as a className
    expect(tabButton).toHaveClass(/underline/);
  });
});
