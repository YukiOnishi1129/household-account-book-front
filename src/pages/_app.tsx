import React, { ReactElement } from 'react'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <Component {...pageProps} />
)

export default App
