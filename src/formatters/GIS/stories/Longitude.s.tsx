import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { text } from '@storybook/addon-knobs/react';
import { Longitude } from '../GIS'

storiesOf('Formatters/Longitude', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Longitude], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    \`Longitude\` formats a longitude float into degrees, minutes and seconds.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
    <>
      <Longitude value={text('value', "30.12")} default={text('text', null)}/>
    </>
  ));  
