/* eslint-disable n/no-path-concat */
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',
  devtool: 'source-map',

  entry: ['@babel/polyfill', `${__dirname}/../src`],
  output: {
    filename: 'main.js',
    path: `${__dirname}/../public/dist`,
  },

  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2022 を ES5 に変換
                '@babel/preset-env',
              ],
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ['web', 'es5'],
};
