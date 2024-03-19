const getAssetUrl = (src) => {
    return `${process.env.ASSET_PREFIX}${src}`;
  };

  module.exports = getAssetUrl;