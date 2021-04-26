import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase.s';
import { select, boolean } from '@storybook/addon-knobs/react';
import { HorizontalAlignment } from '../../Types';
import { Segment } from '../../Segment'

storiesOf('Controls/Segment', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: [Segment]}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    All \`Segment\` properties.
    `
  })
  .addWithJSX(
    'Properties',
  () => (
    <Segment      
      disabled={boolean('disabled', false, 'States')}
      secondary={boolean('secondary', false, 'Variations')}
      tertiary={boolean('tertiary', false, 'Variations')}
      compact={boolean('compact', false, 'Variations')}
      raised={boolean('raised', false, 'Variations')}
      stacked={boolean('stacked', false, 'Variations')}
      piled={boolean('piled', false, 'Variations')}
      align={select('align', ['', 'left', 'center', 'right'], '', 'Variations') as HorizontalAlignment}>
      <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p><p>Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm snow tackle lee trysail keel cable scuppers avast matey.</p>
    </Segment>
  ));  
