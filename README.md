# TypeUI

Bootstrap getting old hat? SemanticUI too heavy? Prefer React and TypeScript? TypeUI is a suite of UI components built in 100% TypeScript. It's light-weight, and it uses styled-components to allow you to serve everything as a single JavaScript file.

## Installation 
```sh
npm install @independent-software/typeui
yarn add @independent-software/typeui
```

TypeUI requires React 19 and styled-components 6, which your app must install itself:

```sh
npm install react react-dom styled-components
```

### Icons

TypeUI's icons are served from a single SVG sprite, `spritemap.svg`, which is included in the package. Components load it from the root of your site (`/spritemap.svg`), so copy it into your app's public directory as part of your build:

```sh
cp node_modules/@independent-software/typeui/spritemap.svg public/
```

Without it, icons (including those inside controls such as dropdowns and inputs) will not appear.

## Documentation

Storybook available as [GitHub pages](https://henck.github.io/typeui/).

## Usage

This package has a built-in theme, which must be passed on to any controls your app uses. You can derive new themes from the default theme. The required imports are:

```jsx
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Theme } from '@independent-software/typeui/styles/Theme'
```

This React app uses a single component `Button`:

```jsx
import { Button } from '@independent-software/typeui/controls/Button'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
    <Button>Click me!</Button>
  </ThemeProvider>
);
```

Optionally, you can use the component `<StyleReset/>` to perform a global CSS reset, if your app is not already doing this. In addition, `<StyleBase>` sets up some optional base styles:

```jsx
import { StyleReset } from '@independent-software/typeui/styles/StyleReset'
import { StyleBase } from '@independent-software/typeui/styles/StyleBase'
import { Button } from '@independent-software/typeui/controls/Button'

createRoot(document.getElementById('root')).render(
  <>
    <StyleReset/>
    <StyleBase/>
    <ThemeProvider theme={Theme}>
      <Button>Click me!</Button>
    </ThemeProvider>
  </>
);
```

This project was built in TypeScript and comes with TypeScript type definitions, so it's not necessary to install these separately.

## Notes

### Importing components

Each component is imported from its own path, so your app's bundle only includes the components you actually use. For example, this imports just the `Button` component:

```jsx
import { Button } from '@independent-software/typeui/controls/Button'
```

Paths are case-sensitive: use `controls/Button`, not `controls/button`.
