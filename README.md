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
