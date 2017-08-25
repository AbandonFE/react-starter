const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
var friendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js');

Object.keys(baseConfig.entry).forEach(name => {
  // 为每个入口配置加入webpack-hot-middleware/client?reload=true，模块热加载配置
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
    // 模块热加载
    new webpack.HotModuleReplacementPlugin(),
    // 出错后不中断，编辑结束后报错
    new webpack.NoEmitOnErrorsPlugin(),
    // html 模板
    new htmlWebpackPlugin({
      title: 'react',
      template: './index.html',
      filename: 'index.html',
      inject: true,
      showErrors: true
    }),
    // 友好的错误提示
    new friendlyErrorsPlugin()
  ]
})
