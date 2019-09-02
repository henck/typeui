import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase';
import { Icon } from '../../../Icon'
import { Divider } from '../../../Divider'

storiesOf('Controls/Icon/Variations', module)
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
    <Icon padded name="envelope" size="mini"/>
    <Icon padded name="envelope" size="tiny"/>
    <Icon padded name="envelope" size="small"/>
    <Icon padded name="envelope"/>
    <Icon padded name="envelope" size="large"/>
    <Icon padded name="envelope" size="big"/>
    <Icon padded name="envelope" size="huge"/>
    <Icon padded name="envelope" size="massive"/>
    <Divider hidden/>
    <Icon padded name="bullhorn" circular size="mini"/>
    <Icon padded name="bullhorn" circular size="tiny"/>
    <Icon padded name="bullhorn" circular size="small"/>
    <Icon padded name="bullhorn" circular/>
    <Icon padded name="bullhorn" circular size="large"/>
    <Icon padded name="bullhorn" circular size="big"/>
    <Icon padded name="bullhorn" circular size="huge"/>
    <Icon padded name="bullhorn" circular size="massive"/>                
  </div>
  ));  
