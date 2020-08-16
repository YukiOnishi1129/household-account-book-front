# household-account-book-front

「おおまか家計簿」フロントリポジトリ

## 参考

### eslint prettier 設定

https://okerablog.com/react-next-js-typescript/

※eslint の設定は「.eslontrc.json」の rules で管理
記述のルールなど詳しく書いているので参考に
https://qiita.com/howdy39/items/6e2c75861bc5a14b2acf

### lint-staged & hasky 設定

commit 時に lint チェックを実行する
https://qiita.com/jonakp/items/7d9f47c613c16cbf95aa#vscode%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD

※ターミナルから開いた source tree 出ないと commit 時に lint チェックされないので注意
(pre-commit ができない)
https://qiita.com/kanari3/items/5f6d1073d56921168b44

### jest&&enzyme の設定

基本はこれ
https://typescript-jp.gitbook.io/deep-dive/intro-1/jest

※「@types/enzyme-adapter-react-16」をインストールしないと shallow でエラーになる
※ tsconfig.json の「"jsx": "react",」と記載しないと shallow(jsx 記載)でエラーになる

- jest && enzyme の使い方
  https://mae.chab.in/archives/60066#post60066-7
- jest mock の使い方
  https://qiita.com/yuma-ito-bd/items/38c929eb5cccf7ce501e
- jest 全般の使い方
  https://tech.bitbank.cc/lets-test-by-jest/

### E2E (Cypress)の設定

こちらを参考
https://microcms.io/blog/cypress-react-e2e/

※TypeScript で Cypress を実施する場合

- 「cypress」ディレクトリ直下に tsconfig を作成する
  https://docs.cypress.io/guides/tooling/typescript-support.html#Configure-tsconfig-json
- 「cypress」ディレクトリ直下の tsconfig に「"skipLibCheck": true」を追記
  https://qiita.com/yasuhiro-yamada/items/3c151f271e1df9523f15
  tsconfig.json の「type」に"node"を設定しないと、ts ファイルのテストコードでエラーが発生する

### git commit 時の自動テスト

こちらを参考
https://dev.classmethod.jp/articles/pre-commit/

### Circle CI

こちらを参考
https://qiita.com/kasaharu/items/bfeb2a41b9d636388531

### storybook

こちらを参考
https://qiita.com/keitakn/items/982d7e6cdfc294c82a95
※記事に載っていない追加するプラグイン
babel-loader, babel-preset-react-app

https://qiita.com/otanu/items/dd06d6702f673268c74e

addDecorator(withInfo)の記載はこちらが正
https://blog.deltabox.site/post/2019/02/cra_and_ts_and_storybook/

- storybook の addon 一覧
  https://iwb.jp/storybook-for-html-css-js-style-guide-tool-addons/

### \_app.tsx について

- こちらを参考
  https://www.kohei.dev/posts/7-tips-of-next-js-9-with-typescript?hl=ja-JP
  https://nextjs.org/docs/advanced-features/custom-app
- \_app.js と\_document.js
  https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf

### \_document.tsx について

- こちらを参考
  https://nextjs.org/docs/advanced-features/custom-document
  https://code-log.hatenablog.com/entry/2020/01/26/200134

### styled-components

- 参考
  https://code-log.hatenablog.com/entry/2020/01/26/200134

### stylelint && styled-components

- 参考
  https://github.com/styled-components/stylelint-processor-styled-components

### Tailwind CSS
