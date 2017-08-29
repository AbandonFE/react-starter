const path = require('path');
module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 9000,    // dev端口
    publicPath: './',
    staticPath: 'static',
    eslint: true,   // 是否开启eslint
    proxyTable: {}
  },
  build: {
    env: require('./prod.env'),
    distRoot: path.resolve(__dirname, '../dist'),
    publicPath: './',
    staticPath: 'static'
  }
}