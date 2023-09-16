import React, { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Menu } from "@/components";
import Providers from "../providers";

import GlobalStyle from "@/styles/Global";
import ResetCSS from "@/styles/ResetCSS";

//types
import { AppPropsWithLayout, LayoutComponentType } from "@/types";

//state
import { store } from "@/state";

export const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout<LayoutComponentType>) => {
  const Layout = Component.Layout || Fragment;

  return (
    <Menu>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Menu>
  );
};

const MyApp = (props: AppProps) => (
  <>
    <Head>
      <title>Test</title>
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=3, minimum-scale=1, viewport-fit=cover user-scalable=no"
      />
    </Head>
    <Providers store={store}>
      <ResetCSS />
      <GlobalStyle />
      <App {...props} />
    </Providers>
  </>
);

export default MyApp;
