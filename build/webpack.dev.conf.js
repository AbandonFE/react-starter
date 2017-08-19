const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
var friendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js');

Object.keys(baseConfig.entry).forEach(name => {
  baseConfig.entry[name] = baseConfig.entry[name].concat('webpack-hot-middleware/client?reload=true');
});

module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new htmlWebpackPlugin({
      title: 'react',
      template: './index.html',
      filename: 'index.html',
      inject: true,
      showErrors: true
    }),
    new friendlyErrorsPlugin()
  ]
})
