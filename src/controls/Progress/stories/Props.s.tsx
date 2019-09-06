import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { number, boolean } from '@storybook/addon-knobs/react';
import { Progress } from '../../Progress'

storiesOf('Controls/Progress', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Progress], propTablesExclude: []}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    The \`Progress\` component shows a progress bar, filled to a percentage equal to \`value\`. The
    bar always stretches to fill all horizontal space available to it.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <Progress 
    value={number('value', 50, { range: true, min: 0, max: 100, step: 1 }, 'Types')} 
    rectangular={boolean('rectangular', false, 'Variations')}  
    background={boolean('background', false, 'Variations')}  
    bordered={boolean('bordered', false, 'Variations')}  
    raised={boolean('raised', false, 'Variations')}  
    numbered={boolean('numbered', false, 'Variations')}  
  />
  ));  
