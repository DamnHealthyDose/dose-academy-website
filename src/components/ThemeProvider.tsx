import { useEffect, type ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

export const THEME_STORAGE_KEY = "dose-theme";

const THEME_COLORS = { light: "#f8fafc", dark: "#0d1719" } as const;

// Keeps <meta name="theme-color"> in sync with the active theme.
const ThemeColorMeta = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta && resolvedTheme) {
      meta.setAttribute("content", resolvedTheme === "dark" ? THEME_COLORS.dark : THEME_COLORS.light);
    }
  }, [resolvedTheme]);

  return null;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <NextThemesProvider
    attribute="class"
    storageKey={THEME_STORAGE_KEY}
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange={false}
  >
    <ThemeColorMeta />
    {children}
  </NextThemesProvider>
);
