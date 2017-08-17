const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true
  },
  resolve: {
    alias: {
      'src': resolve('src'),
      'assets': resolve('src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|ttf)$/,
        use: {
          loader: 'file-loader',
          option: {
            limit: 100000
          }
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'react',
      template: './index.html',
      filename: 'index.html',
      inject: true,
      showErrors: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    })
  ]
};