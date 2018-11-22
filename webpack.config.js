// Webpack v4
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader:'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader:'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    // Copy untuk nambah file html baru
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    // endcopy
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/about.html',
      filename: 'about.html'
    }),
    new WebpackMd5Hash(),
    new StyleLintPlugin({
      configFile: './stylelint.config.js',
      files: './src/scss/*.scss',
      syntax: 'scss'
    })
  ]
};
