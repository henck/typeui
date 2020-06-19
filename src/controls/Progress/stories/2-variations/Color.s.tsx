import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { number, boolean, color } from '@storybook/addon-knobs/react';
import { Progress } from '../../../Progress'

storiesOf('Controls/Progress/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    By default, a \`Progress\` has the primary theme color. You can override this using
    the \`color\` attribute.
    `
  })
  .addWithJSX(
    'Color',
  () => (
  <Progress 
    value={number('value', 50, { range: true, min: 0, max: 100, step: 1 }, 'Types')} 
    rectangular={boolean('rectangular', false, 'Variations')}  
    background={boolean('background', true, 'Variations')}  
    bordered={boolean('bordered', false, 'Variations')}  
    raised={boolean('raised', false, 'Variations')}  
    numbered={boolean('numbered', false, 'Variations')}  
    color={color('color', 'red', 'Variations')}
  />
  ));  
