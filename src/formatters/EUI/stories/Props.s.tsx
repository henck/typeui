import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text } from '@storybook/addon-knobs/react';
import { EUI } from '../EUI'

storiesOf('Formatters/EUI', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [EUI], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    \`EUI\` formats an extended unique identifier. This formatter can take either a string 
    or a number. A number will be converted to a hexadecimal string; a string is presented
    as-is.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <EUI value={text('value', "12345678abcdefaa")}/>
  ));  
