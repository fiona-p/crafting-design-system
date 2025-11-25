import { render, screen } from '@testing-library/react';
import Tabs from './Tabs';
import TabList from '../TabList/TabList';
import Tab from '../Tab/Tab';
import TabPanel from '../TabPanel/TabPanel';

describe('Tabs Component', () => {
  it('renders tabs with correct tabVariant and shows correct panel on default index ', () => {
    render(
      <Tabs defaultIndex={1} variant='pill' orientation='horizontal'>
        <TabList>
          <Tab index={0} label='Tab 1' />
          <Tab index={1} label='Tab 2' />
        </TabList>
        <TabPanel index={0}>Content 1</TabPanel>
        <TabPanel index={1}>Content 2</TabPanel>
      </Tabs>
    );

    expect(screen.getByRole('tab', { name: /tab 1/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /tab 2/i })).toBeInTheDocument();
    expect(screen.getByText(/content 2/i)).toBeVisible();
    expect(screen.queryByText(/content 1/i)).not.toBeInTheDocument();

    const tabButton = screen.getByRole('tab', { name: /tab 2/i });
    expect(tabButton).toHaveClass(/pill/);
  });
});
