const baseConfig = require('./jest.config')

module.exports = {
  ...baseConfig,
  name: 'storyshots',
  displayName: 'storyshots',
  testMatch: ['<rootDir>/src/__tests__/storyshots.test.ts'],
}
