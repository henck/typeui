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
    A \`Progress\` with the \`background\` attribute adds a background to the progress bar.
    `
  })
  .addWithJSX(
    'Background',
  () => (
  <Progress 
    value={number('value', 50, { range: true, min: 0, max: 100, step: 1 }, 'Types')} 
    rectangular={boolean('rectangular', false, 'Variations')}  
    background={boolean('background', true, 'Variations')}  
    bordered={boolean('bordered', false, 'Variations')}  
    raised={boolean('raised', false, 'Variations')}  
    numbered={boolean('numbered', false, 'Variations')}  
  />
  ));  
