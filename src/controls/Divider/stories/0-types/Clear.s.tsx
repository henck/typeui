import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Divider } from '../../../Divider'
import { Header } from '../../../Header'

storiesOf('Divider/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Divider\` always clears floating content above it.
    `
  })
  .addWithJSX(
    'Clear',
  () => (
  <div>
    <Header size="h4" float="right">Floated content</Header>
    <Divider/>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
  </div>
  ));  
