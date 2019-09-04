import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Segment } from '../../../Segment'

storiesOf('Controls/Segment/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A \`Segment\` can be \`tight\`, reducing its top and bottom padding.
    `
  })
  .addWithJSX(
    'Tight',
  () => (
  <div>
    <Segment tight>
      <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p><p>Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm snow tackle lee trysail keel cable scuppers avast matey.</p>
    </Segment>
  </div>
  ));  
