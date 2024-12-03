'use client';

import { FUNNELS, FunnelValue } from '@/utils/constants';
import adhdTheme from '@/utils/mui/themes/adhdTheme';
import childhoodTraumaTheme from '@/utils/mui/themes/childhoodTraumaTheme';
import emotionalIntelligenceTheme from '@/utils/mui/themes/emotionalIntelligenceTheme';
import wellbeingTestTheme from '@/utils/mui/themes/wellbeingTestTheme';
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, Theme } from '@mui/material/styles';

export interface FunnelThemes {
  [FUNNELS.ADHD]: Theme;
  [FUNNELS.CHILDHOOD_TRAUMA]: Theme;
  [FUNNELS.EMOTIONAL_INTELLIGENCE]: Theme;
  [FUNNELS.WELLBEING_TEST]: Theme;
  [FUNNELS.PERSONALITY_TYPE]: Theme;
  [FUNNELS.CHILDHOOD_TRAUMA_SHORT]: Theme;
}
interface ThemeContextType {
  themeName: FunnelValue;
  setThemeName: React.Dispatch<React.SetStateAction<FunnelValue>>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const themes: Readonly<FunnelThemes> = Object.freeze({
  [FUNNELS.EMOTIONAL_INTELLIGENCE]: emotionalIntelligenceTheme,
  [FUNNELS.ADHD]: adhdTheme,
  [FUNNELS.CHILDHOOD_TRAUMA]: childhoodTraumaTheme,
  [FUNNELS.WELLBEING_TEST]: wellbeingTestTheme,
  [FUNNELS.PERSONALITY_TYPE]: emotionalIntelligenceTheme,
  [FUNNELS.CHILDHOOD_TRAUMA_SHORT]: emotionalIntelligenceTheme,
});

interface ThemeProviderProps {
  children: ReactNode;
  funnelName: FunnelValue;
}
export function ThemeProvider({ children, funnelName }: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<FunnelValue>(funnelName);
  const theme = useMemo(() => themes[themeName], [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
