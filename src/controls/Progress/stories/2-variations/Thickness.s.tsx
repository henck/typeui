import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { number, boolean } from '@storybook/addon-knobs/react';
import { Progress } from '../../../Progress'

storiesOf('Controls/Progress/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    \`thickness\` can be used to create thicker \`Progress\` bars.
    `
  })
  .addWithJSX(
    'Thickness',
  () => (
  <Progress 
    value={number('value', 50, { range: true, min: 0, max: 100, step: 1 }, 'Types')} 
    rectangular={boolean('rectangular', true, 'Variations')}  
    background={boolean('background', false, 'Variations')}  
    bordered={boolean('bordered', false, 'Variations')}  
    raised={boolean('raised', false, 'Variations')}  
    numbered={boolean('numbered', false, 'Variations')}  
    thickness={number('thickness', 20, { range: true, min: 8, max: 50, step: 1 }, 'Variations')}
  />
  ));  
