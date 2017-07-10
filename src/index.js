import Ready from './ready';
import VisionLink from './visionlink';

module.exports = ({ username, password }) => ({
  Ready: Ready(username, password),
  VisionLink: VisionLink(username, password)
});
