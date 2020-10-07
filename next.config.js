const { nextI18NextRewrites } = require('next-i18next/rewrites');
const path = require('path');
const localeSubpaths = {};
const config = require("./config");

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: "empty",
        net: 'empty',
        tls: 'empty'
      };
    }

    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['i18n'] = path.join(__dirname, 'i18n')
    return config;
  },
  env: {
    ...config
  },
}