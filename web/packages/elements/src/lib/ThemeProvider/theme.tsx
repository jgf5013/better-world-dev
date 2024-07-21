import { createContext, useContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

type Lighting = {
  backgroundRgba: string
  foregroundRgba: string
};

type Theme = {
  light: Lighting;
  dark: Lighting;
};

export const defaultTheme: Theme = {
  light: {
    backgroundRgba: "rgba(155, 175, 217, 0.67)",
    foregroundRgba: "rgba(16, 55, 132, 0.85)",
  },
  dark: {
    backgroundRgba: 'rgba(16, 55, 132, 0.85)',
    foregroundRgba: 'rgba(255, 255, 255, 0.67)',
  }
};

export const portfolioThemeSetter = () => { };

type ThemeContextType = [Theme, Dispatch<SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType>([defaultTheme, portfolioThemeSetter]);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export type { Theme };
export { ThemeContext, ThemeProvider, useTheme };