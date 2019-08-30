import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon } from '../../../';

storiesOf('Controls/Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Icons can have a different \`color\`.
    `
  })
  .addWithJSX(
    'Color',
  () => (
  <div>
    <Icon name="at" color='red'/>
    <Icon name="at" color='orange'/>
    <Icon name="at" color='yellow'/>
    <Icon name="at" color='olive'/>
    <Icon name="at" color='green'/>
    <Icon name="at" color='teal'/>
    <Icon name="at" color='blue'/>
    <Icon name="at" color='violet'/>
    <Icon name="at" color='purple'/>
    <Icon name="at" color='pink'/>
    <Icon name="at" color='brown'/>
    <Icon name="at" color='grey'/>
    <Icon name="at" color='black'/>
  </div>
  ));  
