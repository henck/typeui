import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { number, boolean } from '@storybook/addon-knobs/react';
import { Progress } from '../../../Progress'

storiesOf('Controls/Progress/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`bordered\` \`Progress\` adds a border around the progress bar.
    `
  })
  .addWithJSX(
    'Bordered',
  () => (
  <Progress 
    value={number('value', 50, { range: true, min: 0, max: 100, step: 1 }, 'Types')} 
    rectangular={boolean('rectangular', false, 'Variations')}  
    background={boolean('background', false, 'Variations')}  
    bordered={boolean('bordered', true, 'Variations')}  
    raised={boolean('raised', false, 'Variations')}  
    numbered={boolean('numbered', false, 'Variations')}  
  />
  ));  