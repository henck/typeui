import * as React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import { StyleReset, StyleBase, Theme } from '../src/styles';

const preview: Preview = {
  parameters: {
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
  },
  // Define a global decorator that wraps all stories. With it, we add
  // the theme and global styles.
  decorators: [
    (Story) => (
      <div>
        <StyleReset/>
        <StyleBase/>
        <ThemeProvider theme={Theme}>
          <Story/>
        </ThemeProvider>
      </div>
    )
  ]
};

export default preview;
