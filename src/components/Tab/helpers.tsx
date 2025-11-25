/**
 * Helper function for accessibility to update the active tab state and move FOCUS
 * @param newIndex - index of the tab to activate/focus
 */
export const moveFocus = (
  newIndex: number,
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
) => {
  // Update the activeTab in context/state
  setActiveTab(newIndex);

  /* Move keyboard focus to the newly activated tab button.
   Using `document.getElementById` is safe here because this function
   is called in response to user events, ensuring the DOM element is rendered. */
  const nextTab = document.getElementById(`tab-${newIndex}`);
  nextTab?.focus();
};
