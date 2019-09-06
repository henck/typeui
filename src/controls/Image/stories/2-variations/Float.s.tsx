import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Image } from '../../../Image'
import { Segment } from '../../../Segment'

storiesOf('Controls/Image/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    An image can \`float\` to the \`left\` or \`right\`.
    `
  })
  .addWithJSX(
    'Float',
  () => (
  <Segment>
    <p>
      <Image float="left" size="tiny" src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
      Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom 
      lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. 
      Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.
    </p>
    <p>
      <Image float="right" size="tiny" src="http://deelay.me/1000/https://react.semantic-ui.com/images/wireframe/image.png"/>
      Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck. 
      Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm snow 
      tackle lee trysail keel cable scuppers avast matey.
    </p>
  </Segment>  
  ));  
