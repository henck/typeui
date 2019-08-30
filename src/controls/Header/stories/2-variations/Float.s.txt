import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header, Segment } from '../../../';

storiesOf('Controls/Header/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Headers can \`float\` to the \`left\` or \`right\`.
    `
  })
  .addWithJSX(
    'Float',
  () => (
  <Segment>
    <Header size="h1" float="left">Float Left</Header>
    <Header size="h1" float="right">Float right</Header>
  </Segment>
  ));  
