import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import BaseLayout from "@/layouts/BaseLayout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>

    <Provider store={store}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Provider>
    </>
  );
}
