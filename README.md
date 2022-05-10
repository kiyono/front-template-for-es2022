# README

## Description

- Node: 18.1
- npm: 8.8.0

ES2022, Webpack, babel, ESLint, Prettier のプロジェクト雛形リポジトリ
（TypeScript には対応していない）

## Version

- 0.0.1

作成

## Document

### Webpack, prettier

- https://ics.media/entry/16028/#webpack-babel-esnext
- https://qiita.com/sansaisoba/items/921438a19cbf5a31ec53

### ESLint

- https://zenn.dev/kohski/articles/eslint_primary
- https://zenn.dev/big_tanukiudon/articles/c1ab3dba7ba111

### Hot reload

## Explanation

### ビルドについて

```
- config/webpack.config.js
```

### Linter, 整形について

ESLint, Prettier にて行っている。

- .eslint

に設定の記載が行われいている。

### 開発について

ホットリロードに対応し、ファイルの変更を検知し Webpack, ESLint, Prettier が実行される。
実行は `npm run build:watch:dev` で行う。

## Other

### プロジェクト作成時に行ったアクション

```
$ npm init
$ npm install -D webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/polyfill eslint prettier eslint-config-prettier
```
