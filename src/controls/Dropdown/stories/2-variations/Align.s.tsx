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
    Individual \`Dropdown.Column\` elements can have their content \`align\` 
    to the \`left\` or to the \`right\`. 
    `
  })
  .addWithJSX(
    'Align',
  () => (
  <div>
    <Dropdown placeholder="Select person" label={(item:any) => item.name} data={[{id: 1, name: 'John', age: 26}, {id: 2, name:'Zachary', age:28}, {id: 3, name:'Deke', age:19}]}>
      <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
      <Dropdown.Column align="right">{(item) => item.age}</Dropdown.Column>
    </Dropdown>   
  </div>
  ));  
