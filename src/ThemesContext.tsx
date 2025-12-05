import { createContext, useContext } from 'react';
import { ReactNode } from 'react';

export type Theme = 'default' | 'autumn'; // can add more

interface ThemesContextType {
  theme: Theme;
}

export const ThemesContext = createContext<ThemesContextType | undefined>(
  undefined
);

type ThemesProviderProps = {
  children: ReactNode;
  theme: Theme;
};

export const ThemesProvider = ({
  children,
  theme = 'default',
}: ThemesProviderProps) => {
  return (
    <ThemesContext.Provider
      value={{
        theme,
      }}
    >
      <div className={`theme-${theme}`}>{children}</div>
    </ThemesContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemesContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemesProvider');
  }
  return context;
};
