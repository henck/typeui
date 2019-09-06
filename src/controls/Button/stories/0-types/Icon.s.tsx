import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { Divider } from '../../../Divider';

storiesOf('Controls/Button/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Button\` can have an \`<Icon>\` inside it. The icon will be 80% opaque, and 100% opaque when the button is hovered. 
    If the \`icon\` attribute is specified, then the button will have no padding. The icon itself can have its own attributes.

    The icon color will automatically adjust to the button's color.
    `
  })
  .addWithJSX(
    'Icon',
  () => (
    <div>
      <div>
        <Button><Icon name="circle" size="large"/> Button</Button>
        <Button><Icon name="circle" size="large"/></Button>
        <Button icon><Icon name="circle" size="large"/></Button>
      </div>
      <Divider hidden/>
      <div>
        <Button basic><Icon name="circle" size="large"/> Button</Button>
        <Button basic><Icon name="circle" size="large"/></Button>
        <Button basic icon><Icon name="circle" size="large"/></Button>
      </div>
      <Divider hidden/>
      <div>
        <Button color="crimson"><Icon name="circle" size="large"/> Button</Button>
        <Button basic color="skyblue"><Icon name="circle" size="large"/></Button>
        <Button color="DarkGoldenrod" icon><Icon name="circle" size="large"/></Button>
      </div>            
    </div>
  ));  
