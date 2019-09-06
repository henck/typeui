const path = require('path'),
      SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
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