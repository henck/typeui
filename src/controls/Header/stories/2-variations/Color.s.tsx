import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { color, select } from '@storybook/addon-knobs/react';
import { HeaderSize } from '../../Header';
import { Header } from '../../../Header'

storiesOf('Controls/Header/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A header can have a custom \`color\`.
    `
  })
  .addWithJSX(
    'Color',
  () => (
  <div>
    <Header 
      size={(select('size', ['h1', 'h2', 'h3', 'h4', 'h5'], 'h1', 'Types') as HeaderSize)}
      color={color('color', 'steelblue', 'Variations')}>SteelBlue</Header>
    <Header size="h1" color="goldenrod">GoldenRod</Header>
  </div>
  ));  
