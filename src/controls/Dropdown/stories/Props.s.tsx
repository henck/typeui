import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Dropdown } from '../../';

storiesOf('Dropdown', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All dropdown properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Dropdown 
    label={(item:any) => item.name} 
    placeholder={text('placeholder', 'Select one')}
    fluid={boolean('fluid', false)}
    error={boolean('error', false)}
    inline={boolean('inline', false)}
    data={[{id: 1, name: 'One'}, {id: 2, name:'Two'}, {id: 3, name:'Three'}, {id: 4, name:'Four'}]}>
    <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
  </Dropdown>    
  ));  
