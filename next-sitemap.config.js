const siteMetadata = require('./src/utils/siteMetaData');

module.exports = {
  siteUrl: `${siteMetadata.siteUrl}/blog`,
  generateRobotsTxt: true
};
