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
    new cleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
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
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest', //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
    }),
    new extractTextPlugin({
      filename: '[name].[chunkhash:8].css'
    })
  ]
})
