import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Dropdown } from '../../../';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Controls/Dropdown/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`clearable\` dropdown allows the user to clear the selection.
    `
  })
  .addWithJSX(
    'Clearable',
  () => (
  <div>
    <Dropdown placeholder="Select action" label={(item:any) => item.name} clearable={boolean('clearable', true)} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>   
  </div>
  ));  
