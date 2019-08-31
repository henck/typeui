import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon, Segment } from '../../../';

storiesOf('Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An icon can \`float\` to the \`left\` or \`right\`.
    `
  })
  .addWithJSX(
    'Float',
  () => (
  <Segment>
    <Icon padded name="bullhorn" float="left"/>
    <Icon padded name="bullhorn" float="right"/>
  </Segment>
  ));  
