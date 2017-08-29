const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const friendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseConfig = require('./webpack.base.conf.js');
const config = require('../config');

Object.keys(baseConfig.entry).forEach(name => {
  // 为每个入口配置加入webpack-hot-middleware/client?reload=true，模块热加载配置
  baseConfig.entry[name] = baseConfig.entry[name].concat('webpack-hot-middleware/client?reload=true');
});

const extraConfig = {
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
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
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
}

// 是否开启 eslint
if (config.dev.eslint) {
  extraConfig.module.rules.unshift({
    test: /\.jsx?$/,
    enforce: 'pre',
    use: {
      loader: 'eslint-loader',
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    },
    exclude: /node_modules/,
    include: /src/
  })
}

module.exports = merge(baseConfig, extraConfig)
