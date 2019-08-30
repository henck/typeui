import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Header } from '../../../';

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
    <Header size="h2" dividing>Dividing header</Header>
    <p>Marooned rum capstan galleon fathom yard American Main Admiral of the Black grog blossom lee. Square-rigged gabion to go on account piracy wench line sheet poop deck squiffy Gold Road. Hang the jib tender coffer to go on account fore brigantine jury mast poop deck long clothes heave to.</p>
  </div>
  ));  
