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

### E2E (Cypress)の設定

こちらを参考
https://microcms.io/blog/cypress-react-e2e/

※TypeScript で Cypress を実施する場合

- 「cypress」ディレクトリ直下に tsconfig を作成する
  https://docs.cypress.io/guides/tooling/typescript-support.html#Configure-tsconfig-json
- cypress」ディレクトリ直下の tsconfig に「"skipLibCheck": true」を追記
  https://qiita.com/yasuhiro-yamada/items/3c151f271e1df9523f15

### git commit 時の自動テスト

こちらを参考
https://dev.classmethod.jp/articles/pre-commit/

### Circle CI

こちらを参考
https://qiita.com/kasaharu/items/bfeb2a41b9d636388531
