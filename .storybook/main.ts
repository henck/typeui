import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs"
  ],
  framework: "@storybook/react-vite",
  // Serves spritemap.svg, produced by `npm run build`:
  staticDirs: ['../dist']
};

export default config;
