import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { text, boolean } from '@storybook/addon-knobs/react';
import { Message, Segment, Icon, Divider } from '../../../';

storiesOf('Controls/Message/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A message can be \`attached\` to other content.
    `
  })
  .addWithJSX(
    'Attached',
  () => (
  <div>
    <Message attached="top">
      <Message.Header>Top attached</Message.Header>
      <p>
        This message is at the top.
      </p>
    </Message>
    <Message attached>
      <Message.Header>Attached</Message.Header>
      <p>
        This message is in the middle.
      </p>
    </Message>
    <Message attached="bottom">
      <Message.Header>Bottom attached</Message.Header>
      <p>
        This message is at the bottom.
      </p>
    </Message>
    <Divider section/>
    <Message attached="top" type="info">
      <Message.Header>Top attached</Message.Header>
      <p>
        This message is at the top.
      </p>
    </Message>
    <Segment attached>
      <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p><p>Lugger clap of thunder grapple gally sheet heave to come about Jolly Roger ballast poop deck. Chandler Jack Tar black spot transom pillage haul wind lugsail tender lugger list. Yardarm snow tackle lee trysail keel cable scuppers avast matey.</p>
    </Segment>
    <Message attached="bottom" type="warning" icon>
      <Icon name="code" size="large"/>
      <Message.Content>
        <Message.Header>Bottom attached</Message.Header>
        <p>
          This message is at the bottom.
        </p>
      </Message.Content>
    </Message>
  </div>  
  ));  
