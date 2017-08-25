const path = require('path');
const config = require('../config');

exports.assetsPath = function (_path) {
  var staticPath = process.env.NODE_ENV === 'production'
    ? config.build.staticPath
    : config.dev.staticPath
  return path.posix.join(staticPath, _path)
};