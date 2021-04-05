import Head from "next/head";

import Main from "./Main";

import GlobalStyles from "../styles/global";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel G. Casagrande - Minha página na WEB</title>
      </Head>

      <GlobalStyles />
      <Main />
    </>
  );
}
