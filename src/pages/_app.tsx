import React, { ReactElement } from 'react'
import App, { AppProps } from 'next/app'
import { SetCookie, DestroyCookie } from '../network/SetCookie'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // cookieのsetup
    // SetCookie(ctx, '1')
    DestroyCookie(ctx)

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

// const App = ({ Component, pageProps }: AppProps): ReactElement => {

//   async getInitialProps() {

//   }
//   return <Component {...pageProps} />
// }

// export default App
