const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const config = require('../config');
const webpackConfig = require('./webpack.dev.conf');

const app = express();

// webpack编译配置
const compiler = webpack(webpackConfig);

// 代理express请求分发内容，不写入磁盘
const devMiddleWare = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
});

// 模块热替换
const hotMiddleWare = webpackHotMiddleware(compiler);

app.use(devMiddleWare);
app.use(hotMiddleWare);
app.listen(config.dev.port);
