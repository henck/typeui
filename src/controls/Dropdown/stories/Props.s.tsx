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
    A \`Dropdown\` is a replacement for \`<select\`>. It opens upwards or downwards depending on its
    position in the viewport. Its selection and dropdown items are formatted using a formatting
    function. A \`Dropdown\` can also take a search callback, which tells provides its subscriber
    with a search query in order to provide the Dropdown with new items.
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
