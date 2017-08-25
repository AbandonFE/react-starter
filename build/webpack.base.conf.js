const path = require('path');
const config = require('../config');
const util = require('./util')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: ['babel-polyfill', './src/main.js']
  },
  output: {
    filename: '[name].js',
    path: config.build.distRoot,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [resolve('/'), 'node_modules'],
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  }
};