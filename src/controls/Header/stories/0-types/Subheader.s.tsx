import * as React from 'react';
import { withInfoSettings, withStyledComponents, storiesOf, withInfo, withKnobs } from '../../../../StorybookBase.s';
import { Header } from '../../../Header'
import { Icon } from '../../../Icon'

storiesOf('Controls/Header/Types', module)
  .addDecorator(withInfo({...withInfoSettings, propTables: false}))
  .addDecorator(withStyledComponents)
  .addDecorator(withKnobs)
  .addParameters({
    info: `
    A header may contain a \`<Subheader>\`.
    `
  })
  .addWithJSX(
    'Subheader',
  () => (
  <div>
    <Header size="h1">
      <Header.Content>
        Account Settings
        <Header.Subheader>
          Manage your account settings and set email preferences
        </Header.Subheader>
      </Header.Content>
    </Header>
    <Header size="h1">
      <Icon name="code" size="large"/> 
      <Header.Content>
        Header with icon
        <Header.Subheader>
          Subheader text
        </Header.Subheader>
      </Header.Content>
    </Header>
  </div>
  ));  
