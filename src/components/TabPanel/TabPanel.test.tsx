import { render, screen } from '@testing-library/react';
import TabPanel from './TabPanel';
import { TabsProvider } from '../../TabsContext';

describe('TabPanel Component', () => {
  it('renders content only when activeTab matches index', () => {
    render(
      <TabsProvider defaultIndex={1} variant='pill'>
        <TabPanel index={1}>Panel Content</TabPanel>
      </TabsProvider>
    );

    expect(screen.getByText(/panel content/i)).toBeInTheDocument();
  });

  it('does not render content when tab is inactive', () => {
    render(
      <TabsProvider defaultIndex={0} variant='pill'>
        <TabPanel index={1}>Should not render</TabPanel>
      </TabsProvider>
    );

    expect(screen.queryByText(/should not render/i)).not.toBeInTheDocument();
  });
});
