# TypeUI

Bootstrap getting old hat? SemanticUI too heavy? Prefer React and TypeScript? TypeUI is a suite of UI components built in 100% TypeScript. It's light-weight, and it uses styled-components to allow you to serve everything as a single JavaScript file.

## Installation 
```sh
npm install @independent-software/typeui --save
yarn add @independent-software/typeui
bower install @independent-software/typeui --save
```

## Documentation

Storybook available as [GitHub pages](https://henck.github.io/typeui/).

## Projects

You can see TypeUI in action on (recharts.online)[http://recharts.online].

## Usage

This package has a built-in theme, which must be passed on to any controls your app uses. You can derive new themes from the default theme. The required imports are:

```jsx
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Theme } from '@independent-software/typeui/styles/Theme'
```

This React app uses a single component `Button`:

```jsx
import { Button } from '@independent-software/typeui/controls/Button'

ReactDOM.render(
  (<React.Fragment>
    <ThemeProvider theme={Theme}>
      <Button>Click me!</Button>
    </ThemeProvider>
  </React.Fragment>),
  document.getElementById('root')
); 
```

Optionally, you can use the component `<StyleReset/>` to perform a global CSS reset, if your app is not already doing this. In addition, `<StyleBase>` sets up some optional base styles:

```jsx
import { StyleReset } from '@independent-software/typeui/styles/StyleReset'
import { StyleBase } from '@independent-software/typeui/styles/StyleBase'
import { Button } from '@independent-software/typeui/controls/Button'

ReactDOM.render(
  (<React.Fragment>
    <StyleReset/>
    <StyleBase/>
    <ThemeProvider theme={Theme}>
      <Button>Click me!</Button>
    </ThemeProvider>
  </React.Fragment>),
  document.getElementById('root')
);
```

This project was built in TypeScript and comes with TypeScript type definitions, so it's not necessary to install these separately.

## Notes

### Tree shaking

The ES2015 `import` statements in this package are structured in a way that promotes tree shaking in Webpack. If an application imports only a few components from this library, then (for production builds) Webpack will not include the unused components, which can greatly reduce the size of the application package. 

This `import` statement will import just the `Button` component:

```jsx
import { Button } from '@independent-software/typeui/controls/button'
```

For tree shaking to work, be sure to set the following in your Webpack config file:

```json
optimization: {
  usedExports: true
}
```

as well as `mode: 'production'`.
