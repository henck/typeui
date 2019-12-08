import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs';
import { Dropdown } from '../../../Dropdown'

storiesOf('Controls/Dropdown/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`disabled\` \`Dropdown\` cannot be interacted with.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
  <div>
    <Dropdown placeholder="Select action" label={(item:any) => item.name} disabled={boolean('disabled', true)} error={boolean('error', false)} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>      
  </div>
  ));  
