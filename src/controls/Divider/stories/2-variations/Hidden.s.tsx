import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs/react';
import { Divider } from '../../../Divider'

storiesOf('Divider/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`hidden\` \`Divider\` divides content without creating a dividing line.
    `
  })
  .addWithJSX(
    'Hidden',
  () => (
  <div>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
    <Divider
      hidden={boolean('hidden', true, 'Variations')} 
      fitted={boolean('fitted', false, 'Variations')} 
      section={boolean('section', false, 'Variations')} 
    />
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
  </div>
  ));  
