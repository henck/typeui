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
          skipPropsWithName: ["className", "children"]
        }
      }  
    ]
  });
  config.plugins.push(new SVGSpritemapPlugin('svg/**/*.svg', {
    sprite: {
      prefix: false
    }
  }));
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};