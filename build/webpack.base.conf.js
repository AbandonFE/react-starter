const path = require('path');
const config = require('../config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: ['./src/main.js']
  },
  output: {
    filename: '[name].js',
    path: config.build.distRoot,
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [resolve('/'), 'node_modules'],
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  },
  plugins: [

  ]
};