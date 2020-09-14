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
    The thickness of a \`CircularProgress\` progress line can be set with the \`thickness\` prop.
    `
  })
  .addWithJSX(
    'Thickness',
  () => (
    <CircularProgress 
      value={35}
      padded={boolean('padded', null)}
      animated={boolean('animated', null)}
      raised={boolean('raised', null)}
      background={boolean('background', null)}
      rounded={boolean('rounded', null)}
      radius={number('radius', null)}
      thickness={number('thickness', 12)}
      color={color('color', null)}
    />
  ));  
