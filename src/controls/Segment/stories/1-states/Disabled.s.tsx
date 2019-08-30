import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Segment } from '../../../';
import { text } from '@storybook/addon-knobs';

storiesOf('Controls/Segment/States', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A Segment may show that its content is \`disabled\`.
    `
  })
  .addWithJSX(
    'Disabled',
  () => (
  <Segment disabled>
    <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p><p>Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm snow tackle lee trysail keel cable scuppers avast matey.</p>
  </Segment>
  ));  
