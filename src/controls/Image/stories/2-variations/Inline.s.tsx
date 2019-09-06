import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { select, text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../Image'
import { Size } from '../../../Types';

storiesOf('Controls/Image/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An \`inline\` image can appear inline in text.
    `
  })
  .addWithJSX(
    'Inline',
  () => (
  <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black 
  grog <Image inline={boolean('inline', true, 'Variations')} size={select('size', ['', 'mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'], 'medium', 'Variations') as Size} src={text('src', 'http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/square-image.png', 'Types')}/> jib
  square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang 
  the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p>    
  ));  
