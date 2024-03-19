/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  basePath: process.env.ASSET_PREFIX ,
  assetPrefix: process.env.ASSET_PREFIX ,
  compiler: {
    removeConsole: true
  }
};

module.exports = withContentlayer({ ...nextConfig });
