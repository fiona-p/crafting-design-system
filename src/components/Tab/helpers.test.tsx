import { fireEvent, render, screen } from '@testing-library/react';
import { moveFocus } from './helpers';
import { vi } from 'vitest';

const renderMockTabs = (
  mockSetActiveTab: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <div>
      <button
        id='tab-1'
        role='tab'
        onClick={() => moveFocus(1, mockSetActiveTab)}
      >
        TAB 1
      </button>
      <button
        id='tab-2'
        role='tab'
        onClick={() => moveFocus(2, mockSetActiveTab)}
      >
        TAB 2
      </button>
    </div>
  );
};

describe('helpers', () => {
  describe('moveFocus UI', () => {
    const mockSetActiveTab = vi.fn();
    it('updates the activeTab with newIndex and sets the element in focus', () => {
      render(renderMockTabs(mockSetActiveTab));
      const tab1 = screen.getByRole('tab', { name: /tab 1/i });
      const tab2 = screen.getByRole('tab', { name: /tab 2/i });
      fireEvent.click(tab1);
      expect(mockSetActiveTab).toHaveBeenCalledTimes(1);
      expect(mockSetActiveTab).toHaveBeenCalledWith(1);
      expect(tab1).toHaveFocus();

      mockSetActiveTab.mockClear(); // reset before second interaction

      fireEvent.click(tab2);
      expect(mockSetActiveTab).toHaveBeenCalledTimes(1);
      expect(mockSetActiveTab).toHaveBeenCalledWith(2);
      expect(tab2).toHaveFocus();
    });

    it('does not throw error if element does not exist', () => {
      expect(() => moveFocus(99, mockSetActiveTab)).not.toThrow();
    });
  });

  describe('moveFocus UI', () => {
    const mockSetActiveTab = vi.fn();
    it('call setActives', () => {
      moveFocus(2, mockSetActiveTab);
      expect(mockSetActiveTab).toHaveBeenCalledTimes(1);
      expect(mockSetActiveTab).toHaveBeenCalledWith(2);
    });
  });
});
