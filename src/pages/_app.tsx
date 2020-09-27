import React from 'react'
import { ModalProvider } from 'styled-react-modal'
import App, { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { AuthProvider } from '@/contexts/auth'
import '@/styles/styles.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>おおまか家計簿</title>
      </Head>
      <AuthProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
