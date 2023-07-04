import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import WebLayout from "../../../packages/app/layout/web";

import '../global.css'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Spill Monorepo</title>
        <meta
          name="description"
          content="Spill"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <WebLayout>

          <NextNprogress
            color={'#0b7b0e'}
            startPosition={0.3}
            stopDelayMs={200}
            height={4}
          />
          <Component {...pageProps} />
        </WebLayout>
      </Provider>
    </>
  )
}

export default MyApp
