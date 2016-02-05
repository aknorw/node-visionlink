'use strict';

var Ready = require('./src/ready');
var VisionLink = require('./src/visionlink');

module.exports = function(username,password) {
  return {
    Ready: Ready(username,password),
    VisionLink: VisionLink(username,password)
  }
}
