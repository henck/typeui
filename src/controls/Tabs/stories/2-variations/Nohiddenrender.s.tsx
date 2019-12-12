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
    By default, all panes in \`Tabs\` are rendered, but all panes are hidden
    except for the active pane. That way, all elements contained in all panes
    are available to parents.

    However, for very large forms, the rerendering of the hidden controls may
    take some time. With \`nohiddenrender\`, hidden panes are not actually rendered.
    `
  })
  .addWithJSX(
    'Nohiddenrender',
  () => (
  <div>
    <Tabs      
      nohiddenrender={boolean('nohiddenrender', true)}>
      <Tabs.Pane label="One"><Segment>Content for first tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Two"><Segment>Content for second tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Three"><Segment>Content for third tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Four"><Segment>Content for fourth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Five"><Segment>Content for fifth tab.</Segment></Tabs.Pane>
      <Tabs.Pane label="Six"><Segment>Content for sixth tab.</Segment></Tabs.Pane>
    </Tabs>
  </div>
  ));  
