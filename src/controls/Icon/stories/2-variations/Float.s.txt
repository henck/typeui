import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon, Segment } from '../../../';

storiesOf('Controls/Icon/Variations', module)
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
    <Icon name="exchange" float="left"/>
    <Icon name="exchange" float="right"/>
  </Segment>
  ));  
