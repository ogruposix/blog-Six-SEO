/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  basePath: '/blog',
  compiler: {
    removeConsole: true
  }
};

module.exports = withContentlayer({ ...nextConfig });
