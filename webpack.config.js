const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',

  output: {
    path: __dirname,
    filename: 'dist/js/main.js',
  },

  devtool: 'source-map',

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s(c|a)ss$/, use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', options: { url: false } },
        { loader: 'postcss-loader', options: { postcssOptions: { plugins: ['postcss-preset-env']} }},
        'sass-loader',
      ] },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/css/main.css',
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8888,
      server: { baseDir: ['./']}
    }),
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
};
