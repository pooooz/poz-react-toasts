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
      'assets': path.resolve(__dirname, "../src/assets"),
      'hooks': path.resolve(__dirname, "../src/hooks"),
      'services': path.resolve(__dirname, "../src/services"),
      'constants': path.resolve(__dirname, "../src/constants"),
      'theme': path.resolve(__dirname, "../src/theme"),
      'helpers': path.resolve(__dirname, "../src/helpers"),
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