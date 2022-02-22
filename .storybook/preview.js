import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyleReset, StyleBase, Theme } from '../src/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Types', 'Groups', 'Variations'], 
      locales: '', 
    },    
  },
  // Avoid MDX.CreateElement to show up in code segments:
  /* docs: {
    source: {
      type: "code"
    }
  } */  
}

// Define a global decorator that wraps all stories. With it, we add
// the theme and global styles.
export const decorators = [
  (Story) => (
    <div>
      <StyleReset/>
      <StyleBase/>
      <ThemeProvider theme={Theme}>
        <Story/>
      </ThemeProvider>
    </div>
  )
];