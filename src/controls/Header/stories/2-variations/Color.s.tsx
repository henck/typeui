import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header } from '../../../';

storiesOf('Controls/Header/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A header can have a custom \`color\`.
    `
  })
  .addWithJSX(
    'Color',
  () => (
  <div>
    <Header size="h1" color="steelblue">SteelBlue</Header>
    <Header size="h1" color="goldenrod">GoldenRod</Header>
  </div>
  ));  
