import Head from "next/head";

import Main from "./Main";

import GlobalStyles from "../styles/global";
import { CustomThemeProvider } from "../contexts/ThemeContext";

export default function Home() {
  return (
    <CustomThemeProvider>
      <Head>
        <title>Gabriel G. Casagrande - Minha página na WEB</title>
      </Head>

      <GlobalStyles />
      <Main />
    </CustomThemeProvider>
  );
}
