import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import type { Mock } from 'vitest';
import Tab from './Tab';
import * as TabsContext from '../../TabsContext'; // import all to mock hook

// Mock the entire module
vi.mock('../../TabsContext', () => ({
  useTabs: vi.fn(), // mock useTabs hook
}));

describe('Tab', () => {
  const mockSetActiveTab = vi.fn();

  // Setup default mock return for useTabs
  // This will be the Context for every test
  beforeEach(() => {
    (TabsContext.useTabs as Mock).mockReturnValue({
      activeTab: 0,
      setActiveTab: mockSetActiveTab,
      variant: 'pill',
      totalTabs: 3,
    });
    mockSetActiveTab.mockClear();
  });

  it('renders button with correct label and ARIA attributes', () => {
    render(<Tab index={0} label='My Tab' />);
    const button = screen.getByRole('tab');

    expect(button).toHaveTextContent('My Tab');
    expect(button).toHaveAttribute('id', 'tab-0');
    expect(button).toHaveAttribute('aria-controls', 'tabpanel-0');
    expect(button).toHaveAttribute('aria-selected', 'true');
  });

  it('sets aria-selected to false if the tab is not active', () => {
    render(<Tab index={1} label='My Tab' />);
    const button = screen.getByRole('tab');

    expect(button).toHaveAttribute('aria-selected', 'false');
  });

  it('calls setActiveTab on click ', () => {
    render(<Tab index={1} label='My Tab' />);
    const button = screen.getByRole('tab');
    fireEvent.click(button);

    expect(mockSetActiveTab).toHaveBeenCalledTimes(1);
    expect(mockSetActiveTab).toHaveBeenCalledWith(1);
  });

  it('calls setActiveTab on focus', () => {
    render(<Tab index={1} label='My Tab' />);
    const button = screen.getByRole('tab');

    fireEvent.focus(button);

    expect(mockSetActiveTab).toHaveBeenCalledTimes(1);
    expect(mockSetActiveTab).toHaveBeenCalledWith(1);
  });

  it('handleKeyDown moves focus correctly on ArrowRight', () => {
    render(<Tab index={0} label='My Tab' />);
    const button = screen.getByRole('tab');
    fireEvent.keyDown(button, { key: 'ArrowRight' });

    expect(mockSetActiveTab).toHaveBeenCalledTimes(1);
    expect(mockSetActiveTab).toHaveBeenCalledWith(1);
  });

  it('renders Badge if badgeLabel and badgeVariant provided', () => {
    render(
      <Tab index={0} label='My Tab' badgeLabel='7' badgeVariant='positive' />
    );

    const badge = screen.getByText('7');

    expect(badge).toBeInTheDocument();
  });

  it('does not call setActiveTab if totalTabs is less than 1', () => {
    (TabsContext.useTabs as Mock).mockReturnValue({
      activeTab: 0,
      setActiveTab: mockSetActiveTab,
      variant: 'pill',
      totalTabs: 0,
    });

    render(<Tab index={0} label='My Tab' />);
    const button = screen.getByRole('tab');
    fireEvent.keyDown(button, { key: 'ArrowRight' });

    expect(mockSetActiveTab).not.toHaveBeenCalled();
  });
});
