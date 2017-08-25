const path = require('path');
const config = require('../config');

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.staticPath
    : config.dev.staticPath
  return path.posix.join(assetsSubDirectory, _path)
};