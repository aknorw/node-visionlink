import Ready from './ready';
import VisionLink from './visionlink';

module.exports = function(username, password) {

  return {
    Ready: Ready(username, password),
    VisionLink: VisionLink(username, password)
  }

}
