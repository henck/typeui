# TypeUI

Bootstrap getting old hat? SemanticUI too heavy? Prefer React and TypeScript? TypeUI is a suite of UI components built in 100% TypeScript. It's light-weight, and it uses styled-components to allow you to serve everything as a single JavaScript file.

## Installation 
```sh
npm install typeui --save
yarn add typeui
bower install typeui --save
```

## Documentation

Storybook available as [GitHub pages](https://henck.github.io/typeui/).

## Tree shaking

The ES2015 `import` statements in this package are structured in a way that promotes tree shaking in Webpack. If an application imports only a few components from this library, then (for production builds) Webpack will not include the unused components, which can greatly reduce the size of the application package. 

This `import` statement will only import the `Button` component:

    import { Button } from '@independent-software/typeui/controls/button'

whereas this `import` statement will import all controls:

    import { Button } from '@independent-software/typeui'

For tree shaking to work, be sure to set the following in your Webpack config file:

    optimization: {
      usedExports: true
    }

as well as `mode: 'production'`.

In a future version the barrel exports that make it possible to import all controls in one go may be removed so users can't inadvertently bloat their application package size.
