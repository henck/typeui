import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text } from '@storybook/addon-knobs/react';
import { Latitude } from '../GIS'

storiesOf('Formatters/Latitude', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Latitude], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    \`Latitude\` formats a latitude float into degrees, minutes and seconds.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
    <Latitude value={text('value', "10.45")} default={text('text', null)}/>
  ));  
