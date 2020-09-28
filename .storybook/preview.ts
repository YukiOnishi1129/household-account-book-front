const addParameters = require('@storybook/react').addParameters

addParameters({
  options: {
    storySort: {
      order: ['Welcome', 'README'],
    },
  },
  backgrounds: {
    default: 'main',
    values: [
      {
        name: 'main',
        value: '#FAEAF8',
      },
      {
        name: 'sidebar',
        value: '#BD9DF0',
      },
    ],
  },
})

export const parameters = {
  controls: { expanded: true },
}
