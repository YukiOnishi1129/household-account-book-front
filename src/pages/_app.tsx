import React, { ReactElement } from 'react'
import App, { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/auth'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}
