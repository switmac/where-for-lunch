var path = require('path');
const webpack = require('webpack');
const rootPath = path.join(__dirname, '../client');

module.exports = {
  context: rootPath,
  mode: 'development',
  entry: './index.js',
  devtool: 'cheap-module-source-map',

  output: {
    path: path.join(__dirname, '../client'),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: 'map',
  },

  devServer: {
    hot: true,
    host: 'localhost',
    contentBase: path.join(__dirname, '../client'),
    noInfo: false,
    historyApiFallback: true,
    publicPath: '/',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules|\.tpl\./,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]',
              minimize: { safe: true },
            },
          },
        ],
      },
    ]
  },
}
