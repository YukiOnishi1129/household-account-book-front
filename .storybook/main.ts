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
}
