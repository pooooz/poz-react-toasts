const path = require('path');

module.exports = {
  "stories": [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'components': path.resolve(__dirname, "../src/components"),
      'containers': path.resolve(__dirname, "../src/containers"),
      'core': path.resolve(__dirname, "../src/core"),
      'constants': path.resolve(__dirname, "../src/constants"),
      'theme': path.resolve(__dirname, "../src/theme"),
    };

    return config;
  },
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}