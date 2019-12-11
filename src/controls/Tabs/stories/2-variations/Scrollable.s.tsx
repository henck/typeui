import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { boolean } from '@storybook/addon-knobs/react';
import { Tabs } from '../../../Tabs'
import { Segment } from '../../../Segment'

storiesOf('Controls/Tabs/Variations', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A very wide Tabs collection scrolls automatically.
    `
  })
  .addWithJSX(
    'Scrollable',
  () => (
  <div>
    <Tabs      
      underlined={boolean('underlined', true)}>
      <Tabs.Pane label="One"><Segment>Content for first tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Two"><Segment>Content for second tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Three"><Segment>Content for third tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Four"><Segment>Content for fourth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Five"><Segment>Content for fifth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Six"><Segment>Content for sixth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Seven"><Segment>Content for seventh tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Eight"><Segment>Content for eighth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Nine"><Segment>Content for ninth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Ten"><Segment>Content for tenth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Eleven"><Segment>Content for eleventh tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Twelve"><Segment>Content for twelfth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Thirteen"><Segment>Content for thirteenth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Fourteen"><Segment>Content for fourteenth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Fifteen"><Segment>Content for fifteenth tab.</Segment></Tabs.Pane>
    </Tabs>
  </div>
  ));  
