import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Header } from '../../../Header'
import { Segment } from '../../../Segment'
import { Message } from '../../../Message'

storiesOf('Header/Groups', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A header can be \`attached\` to other content.
    `
  })
  .addWithJSX(
    'Attached',
  () => (
  <div>
    <Header size="h2" attached="top">Header 2</Header>
    <Segment attached>
      <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p>
    </Segment>
    <Message attached="bottom" type="warning">
      This is a message.
    </Message>
  </div>
  ));  
