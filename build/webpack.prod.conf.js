const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');
const baseConfig = require('./webpack.base.conf.js');

module.exports = merge(baseConfig, {
  module: {
    rules:[
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader',
        })
      }
    ]
  },
  output: {
    path: config.build.distRoot,
    filename: 'js/[name].[chunkhash].js'
  },
  plugins: [
    // 每次构建之前清除dist文件夹
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    // 设置环境变量
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new htmlWebpackPlugin({
      title: 'react',
      template: './index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        removeComments: true,   // 移除注释
        collapseWhitespace: true,   // 清除空行
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin(),

    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false  // 是否显示警告，设置为true会影响编译速度
      },
      sourceMap: true
    }),

    // 提取公共模块，公共模块如果内容不变，则不需要重新编译打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (mod, count) => {
        // this is used to pick out vendors
        let context = mod.context
        if(!context) return false
        if(context.indexOf('node_modules') === -1 && context.indexOf('bower_components') === -1) return false
        return true
      },
    }),

    // 为防止公共模块每次都编译打包需要设置manifest文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest', //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),

    // 抽取css
    new extractTextPlugin({
      filename: '[name].[chunkhash:8].css'
    })
  ]
})
