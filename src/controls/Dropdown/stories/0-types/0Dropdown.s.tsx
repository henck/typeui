import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Dropdown } from '../../../Dropdown'

storiesOf('Controls/Dropdown/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A simple dropdown. Content is provided through the \`data\` attribute.

    When the user makes a selection, \`onChange\` is fired with the Dropdown's name and
    the selected value. **The value is an object, not an ID.** 

    The current selection is formatted using the required \`label\` function. This function takes an item
    and returns a \`React.ReactNode\`, e.g. \`label={(item:any) => item.name}\`.

    \`Dropdown.Column\` is used to format the items in the dropdown list. An item may have more
    than one column. \`Dropdown.Column\`'s child is a function that formats an item.

    Dropdowns must be controlled components in order for the selected value to show
    up in the selector box.
    `
  })
  .addWithJSX(
    'Dropdown',
  () => (
  <Dropdown placeholder="Select domain" label={(item:any) => item.name} data={[{id: 1, name: '.com'}, {id: 2, name:'.net'}, {id: 3, name:'.org'}]}>
    <Dropdown.Column>{(item) => item.name}</Dropdown.Column>
  </Dropdown>
  ));  
