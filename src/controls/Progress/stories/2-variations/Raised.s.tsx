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
    A \`raised\` \`Progress\` adds a drop shadow. This works well with the \`background\` attribute.
    `
  })
  .addWithJSX(
    'Raised',
  () => (
  <Progress 
    value={number('value', 50, { range: true, min: 0, max: 100, step: 1 }, 'Types')} 
    rectangular={boolean('rectangular', false, 'Variations')}  
    background={boolean('background', false, 'Variations')}  
    bordered={boolean('bordered', false, 'Variations')}  
    raised={boolean('raised', true, 'Variations')}  
    numbered={boolean('numbered', false, 'Variations')}  
  />
  ));  
