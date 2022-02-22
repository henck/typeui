const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {  
        loader: require.resolve('awesome-typescript-loader'),
        // Must use Storybook's *local* tsconfig.json.
        // Could only get this to work with awesome-typescript-loader,
        // not with ts-loader:
        options: {
          configFileName: './.storybook/tsconfig.json'
        }
      }, {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          // Do not document the following properties:
          skipPropsWithName: ["className", "children"],
          // Skip properties without documentation, which
          // allows us to hide some props from the documentation.
          skipPropsWithoutDoc: true
        }
      }  
    ]
  });
  // Produce a spritemap.svg file:
  config.plugins.push(new SVGSpritemapPlugin('svg/**/*.svg', {
    sprite: {
      prefix: false
    }
  }));
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};