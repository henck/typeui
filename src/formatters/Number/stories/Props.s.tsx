import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { number, text, boolean } from '@storybook/addon-knobs/react';
import { Number } from '../Number'

storiesOf('Formatters/Number', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Number], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Number formats a number with thousands separators and optional fractional digits.
     
    E.g. \`10000\` yields \`10,000\`
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Number value={number('value', 50000)} decimals={number('decimals', 2)}/>
  </div>
  ));  
