const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js');

module.exports = Merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'react',
      template: './index.html',
      filename: 'index.html',
      inject: true,
      showErrors: true,
    })
  ]
})
