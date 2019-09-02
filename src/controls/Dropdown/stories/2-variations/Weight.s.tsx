import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { boolean } from '@storybook/addon-knobs';
import { Dropdown } from '../../../Dropdown'

storiesOf('Controls/Dropdown/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Individual \`Dropdown.Column\` elements can have a \`weight\`. The default weight is \`1\`. 
    This is useful to set different relative widths for different columns.
    `
  })
  .addWithJSX(
    'Weight',
  () => (
  <div>
    <Dropdown placeholder="Select person" label={(item:any) => item.name} data={[{id: 1, name: 'John', age: 26}, {id: 2, name:'Zachary', age:28}, {id: 3, name:'Deke', age:19}]}>
      <Dropdown.Column weight={3}>{(item) => item.name}</Dropdown.Column>
      <Dropdown.Column>{(item) => item.age}</Dropdown.Column>
    </Dropdown>   
  </div>
  ));  
