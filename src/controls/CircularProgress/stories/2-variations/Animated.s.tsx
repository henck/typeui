import * as React from 'react'
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s'
import { boolean, number, color } from '@storybook/addon-knobs/react'
import { CircularProgress } from '../../CircularProgress';

storiesOf('Controls/CircularProgress/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`CircularProgress\` can be \`animated\`. When it first appears, it will animate is progress line from 0 to \`value\`.
    `
  })
  .addWithJSX(
    'Animated',
  () => (
    <CircularProgress 
      value={35}
      padded={boolean('padded', null)}
      animated={boolean('animated', true)}
      raised={boolean('raised', null)}
      background={boolean('background', null)}
      rounded={boolean('rounded', null)}
      radius={number('radius', null)}
      thickness={number('thickness', null)}
      color={color('color', null)}
    />
  ));  
