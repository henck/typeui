import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Dropdown } from '../../../';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Dropdown/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A dropdown can be in an \`error\` state.
    `
  })
  .addWithJSX(
    'Error',
  () => (
  <div>
    <Dropdown placeholder="Select action" label={(item:any) => item.name} error={boolean('error', true)} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>      
  </div>
  ));  
