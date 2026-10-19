const path = require('path'),
      SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin').default;

module.exports = {
  mode: 'development',
  // Webpack only builds the SVG spritemap; the library itself is compiled by tsc.
  entry: 'data:text/javascript,',
  plugins: [
    new SVGSpritemapPlugin('svg/**/*.svg', {
      sprite: {
        prefix: false,
        generate: {
          title: false
        }
      }
    })
  ]
}