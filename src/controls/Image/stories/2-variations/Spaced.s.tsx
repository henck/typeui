import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../';
import { Size } from '../../../Types';

storiesOf('Controls/Image/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`spaced\` image has extra space around it, either both (default), \`left\` or \`right\`.
    `
  })
  .addWithJSX(
    'Spaced',
  () => (
  <div>
    <p>
      Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog 
      blossom <Image spaced size="mini" src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/> lee.
      Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. 
      Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.
    </p>
    <p>
      <Image spaced="right" size="mini" src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
      Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck. 
      Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm snow 
      tackle lee trysail keel cable scuppers avast matey.
      <Image spaced="left" size="mini" src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
    </p>
  </div>    
  ));  
