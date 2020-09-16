// const withSass = require('@zeit/next-sass')

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    }
    return config
  },
}

// module.exports = withSass({
//   cssModules: true,
// })
