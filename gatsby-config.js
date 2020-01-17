const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Drew Wei',
    author: "Drew Wei",
    description: "Drew Wei's personal website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png'  // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, '.'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        pages: path.join(__dirname, 'src/pages')
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
}
