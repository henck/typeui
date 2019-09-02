import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { select, boolean } from '@storybook/addon-knobs/react';
import { HeaderSize } from '../../Header';
import { Header } from '../../../Header'

storiesOf('Controls/Header/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`dividing\` header separates itself from the content below it with a border.
    `
  })
  .addWithJSX(
    'Dividing',
  () => (
  <div>
    <Header 
      size={(select('size', ['h1', 'h2', 'h3', 'h4', 'h5'], 'h1', 'Types') as HeaderSize)}
      dividing={boolean('dividing', true, 'Variations')}>Dividing header</Header>
    <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p>
  </div>
  ));  
