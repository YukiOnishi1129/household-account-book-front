// const withSass = require('@zeit/next-sass')
// NOTE: https://github.com/vercel/next.js/discussions/12077
require('dotenv').config({ path: `./.env.${process.env.ENVIRONMENT}.local` })

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
