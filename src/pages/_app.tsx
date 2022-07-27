import { CustomThemeProvider, useTheme } from "../contexts/ThemeContext";

import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;
