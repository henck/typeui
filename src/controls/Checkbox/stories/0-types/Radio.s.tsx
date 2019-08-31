import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Checkbox } from '../../../';

storiesOf('Checkbox/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A radio group must provide the \`radio\` attribute to each of its members, 
    and all must have the same \`name\`, and provide a \`value\`.

    For \`radio\` buttons, \`type\` will default to \`circle\` unless overridden.
    `
  })
  .addWithJSX(
    'Radio',
  () => (
  <div>
    <Checkbox name="myradio" radio value={1} label="One"/>
    <Checkbox name="myradio" radio value={2} label="Two"/>
    <Checkbox name="myradio" radio value={3} label="Three"/>
  </div>
  ));  
