const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stor@(y|ies).[tj]sx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-controls/register',
    // '@storybook/addon-docs/register',
    '@storybook/addon-toolbars/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async (config: any) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules']
    // NOTE: https://github.com/storybookjs/storybook/issues/11639
    // NOTE: https://github.com/Fernando-FloresP/sb-test/blob/master/.storybook/main.js

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }

    return config
  },
}
