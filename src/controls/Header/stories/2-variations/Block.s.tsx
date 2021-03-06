import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean, select } from '@storybook/addon-knobs/react';
import { HeaderSize } from '../../Header';
import { Header } from '../../../Header'

storiesOf('Controls/Header/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`block\` header appears as a content block.
    `
  })
  .addWithJSX(
    'Block',
  () => (
  <div>
    <Header
      size={(select('size', ['h1', 'h2', 'h3', 'h4', 'h5'], 'h1', 'Types') as HeaderSize)}
      block={boolean('block', true, 'Variations')}>
        Block header
      </Header>
  </div>
  ));  
