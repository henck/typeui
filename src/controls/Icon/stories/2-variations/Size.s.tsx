import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../StorybookBase';
import { Icon, Divider } from '../../../';

storiesOf('Icon/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    Icons can have a different \`size\`.

    Note that icon sizes are in \`em\` and thus relative to the parent container.

    Any icon border will scale its thickness with the icon size.
    `
  })
  .addWithJSX(
    'Size',
  () => (
  <div>
    <Icon name="exchange" size="mini"/>
    <Icon name="exchange" size="tiny"/>
    <Icon name="exchange" size="small"/>
    <Icon name="exchange"/>
    <Icon name="exchange" size="large"/>
    <Icon name="exchange" size="big"/>
    <Icon name="exchange" size="huge"/>
    <Icon name="exchange" size="massive"/>
    <Divider hidden/>
    <Icon name="exchange" circular size="mini"/>
    <Icon name="exchange" circular size="tiny"/>
    <Icon name="exchange" circular size="small"/>
    <Icon name="exchange" circular/>
    <Icon name="exchange" circular size="large"/>
    <Icon name="exchange" circular size="big"/>
    <Icon name="exchange" circular size="huge"/>
    <Icon name="exchange" circular size="massive"/>                
  </div>
  ));  
