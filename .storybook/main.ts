import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    if (config?.resolve) {
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
    }

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
};
export default config;
