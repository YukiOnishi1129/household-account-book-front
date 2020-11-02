import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

type Props = {
  styleTags: any
}

export default class MyDocument extends Document<Props> {
  static getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet()

    const page = ctx.renderPage((App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          {this.props.styleTags}
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="家計簿をおおまかにつけて管理しよう！ カテゴリごとに支出の割合を確認できるよ！"
          />
          <meta
            name="keywords"
            content="家計簿,簡単,ザックリ,アプリ,続けられる,継続"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
