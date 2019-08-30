import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Segment } from '../../';
import { HorizontalAlignment } from '../../Types';

storiesOf('Controls/Segment', module)
  .addDecorator(withInfo(withInfoSettings))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All segment properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
  <div>
    <Segment      
      disabled={boolean('disabled', false)}
      secondary={boolean('secondary', false)}
      tertiary={boolean('tertiary', false)}
      compact={boolean('compact', false)}
      raised={boolean('raised', false)}
      stacked={boolean('stacked', false)}
      piled={boolean('piled', false)}
      align={text('align', '') as HorizontalAlignment}>
      <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p><p>Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm snow tackle lee trysail keel cable scuppers avast matey.</p>
    </Segment>
  </div>
  ));  
