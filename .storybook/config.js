import { configure, addDecorator } from '@storybook/react';
import { setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withOptions } from '@storybook/addon-options';
//import { themes } from '@storybook/components';

addDecorator(
  withOptions({
    name: 'TypeUI',
    addonPanelInRight: true,
    //theme: themes.normal
  })
);

setAddon(JSXAddon);

// automatically import all files ending in *.s.js
const req = require.context('../src/controls', true, /.s.tsx$/);
function loadStories() {
  //require('./WelcomeStory');
  // Load stories, files sorted alphabetically.
  req.keys().sort().forEach(filename => req(filename));
}

configure(loadStories, module);

