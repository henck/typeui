import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs';
import { Dropdown } from '../../../Dropdown'

storiesOf('Dropdown/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`fluid\` dropdown fills all available horizontal space.
    `
  })
  .addWithJSX(
    'Fluid',
  () => (
  <div>
    <Dropdown placeholder="Select action" label={(item:any) => item.name} fluid={boolean('fluid', true)} data={[{id: 1, name: 'Hello'}, {id: 2, name:'World'}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
    </Dropdown>   
  </div>
  ));  
