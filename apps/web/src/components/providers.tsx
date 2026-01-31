'use client';

import { ThemeProvider } from '@repo/ui';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from '../lib/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </EmotionThemeProvider>
  );
}
