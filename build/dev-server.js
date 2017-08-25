const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxyMiddleware = require('http-proxy-middleware')
const express = require('express');
const config = require('../config');
const webpackConfig = require('./webpack.dev.conf');

const app = express();

// webpack编译配置
const compiler = webpack(webpackConfig);
const proxyTable = config.dev.proxyTable;

// 代理express请求分发内容，不写入磁盘
const devMiddleWare = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
});

// 模块热替换
const hotMiddleWare = webpackHotMiddleware(compiler);

// 反向代理配置
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(devMiddleWare);
app.use(hotMiddleWare);
app.listen(config.dev.port);
