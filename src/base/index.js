var path = require('path');
var config = require(path.join(process.cwd(), 'config.js'));

module.exports = {
  assetPath: function(file) {
    return path.join('/assets', path.relative(config.dir.src, file));
  }
};