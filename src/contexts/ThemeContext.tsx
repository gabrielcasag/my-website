import { createContext, useContext, useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

interface Theme {
  title: string;
  colors: {
    background: string;
    text: string;
    shadow: string;
  };
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    if (theme.title === "light") {
      setTheme(dark);
    } else if (theme.title === "dark") {
      setTheme(light);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
