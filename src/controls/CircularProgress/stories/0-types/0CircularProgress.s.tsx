import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s'
import { number, boolean, color } from '@storybook/addon-knobs/react'
import { CircularProgress } from '../../CircularProgress'

storiesOf('Controls/CircularProgress/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A standard \`CircularProgress\`.
    `
  })
  .addWithJSX(
    'CircularProgress',
  () => (
    <CircularProgress 
      value={number('value', 35)}
      padded={boolean('padded', null)}
      animated={boolean('animated', null)}
      raised={boolean('raised', null)}
      background={boolean('background', null)}
      rounded={boolean('rounded', null)}
      radius={number('radius', null)}
      thickness={number('thickness', null)}
      color={color('color', null)}      
    />
  ));  
