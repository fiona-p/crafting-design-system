import { ReactNode } from 'react';

export const MockThemesProvider = ({
  children,
  theme = 'default',
}: {
  children: ReactNode;
  theme?: 'default' | 'autumn';
}) => {
  return <div className={`theme-${theme}`}>{children}</div>;
};
