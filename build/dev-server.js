const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const config = require('../config');
const webpackConfig = require('./webpack.dev.conf');

const app = express();

const compiler = webpack(webpackConfig);
const devMiddleWare = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
});
const hotMiddleWare = webpackHotMiddleware(compiler);

app.use(devMiddleWare);
app.use(hotMiddleWare);
app.listen(config.dev.port);

